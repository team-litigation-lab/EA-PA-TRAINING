/**
 * LSH EA/PA Upskill Program — Cloudflare Worker (secured)
 *
 * Secrets (set once with `wrangler secret put <NAME>`):
 *   GEMINI_API_KEY, GEMINI_API_KEY1 … GEMINI_API_KEY9 — the Gemini key pool behind every AI
 *                        feature (see GEMINI_POOL). Set as many as you have, one per Google Cloud
 *                        project. Each request starts on the next key in turn; a key that hits its
 *                        limit is rested and the next key takes over. At least one is required.
 *   GEMINI_MODEL       — optional: first model for grading and trainer tools (default gemini-3.8-flash).
 *                        Live chat always starts on gemini-3.5-flash-lite (the free tier's daily limit
 *                        is ~500 requests there, 20 on the Flash models); see geminiModels.
 *   PORTAL_SSO_SECRET  — optional; the secret the LSH Training Portal signs its launch tickets with (the same value is set
 *                        on the Portal). Setting it makes the Main Portal the only way in: /api/auth/trainee then refuses a name +
 *                        batch typed on this site (except to renew a signed-in trainee's session), and /api/auth/portal signs a
 *                        trainee or an administrator in from the Portal's ticket. Not set = the old name + batch sign-in.
 *   ADMIN_PASSPHRASE   — trainer/admin sign-in (or MASTER_ADMIN_PASSWORD, the Portal's master admin password, when this isn't set). Setting this switches the portal
 *                        into SECURE MODE: every storage and AI request must carry
 *                        a signed session token.
 *   SESSION_SECRET     — optional; signs session tokens (defaults to ADMIN_PASSPHRASE)
 *
 * Without ADMIN_PASSPHRASE the Worker runs in the old open mode so nothing breaks
 * before you've configured it (the Admin screen shows a warning).
 */
const JSON_HEADERS = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: JSON_HEADERS });
const enc = new TextEncoder();

/* ---------- tokens: "<role>.<subject>.<expiry>.<hmac>" ---------- */
async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
// The trainer/admin passphrase: ADMIN_PASSPHRASE, or else MASTER_ADMIN_PASSWORD (the LSH Training Portal's master admin password,
// so one password signs an admin in on the Portal and here).
function adminPass(env) { return env.ADMIN_PASSPHRASE || env.MASTER_ADMIN_PASSWORD || ""; }
function secretOf(env) { return env.SESSION_SECRET || adminPass(env); }
async function makeToken(env, role, subject, hours) {
  const exp = Date.now() + hours * 3600 * 1000;
  const body = `${role}.${encodeURIComponent(subject)}.${exp}`;
  return `${body}.${await hmac(secretOf(env), body)}`;
}
async function readToken(env, request) {
  const h = request.headers.get("Authorization") || "";
  const t = h.startsWith("Bearer ") ? h.slice(7) : "";
  const parts = t.split(".");
  if (parts.length !== 4) return null;
  const [role, subj, exp, sig] = parts;
  if (Date.now() > Number(exp)) return null;
  const good = await hmac(secretOf(env), `${role}.${subj}.${exp}`);
  if (!safeEqual(good, sig)) return null;
  return { role, id: decodeURIComponent(subj) };
}
function safeEqual(a, b) {
  a = String(a); b = String(b);
  if (a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

/* ---------- trainee IDs (must match the portal's generateTraineeId) ---------- */
function slugPart(t) {
  return String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function candidateIds(name, batch) {
  let slug = slugPart(name).slice(0, 40);
  if (!slug) { let h = 0; for (const c of String(name || "")) h = (h * 31 + c.codePointAt(0)) >>> 0; slug = "trainee-" + h.toString(36); }
  const b = slugPart(batch).slice(0, 20);
  return { newId: b ? `${slug}--${b}` : slug, legacyId: slugPart(name).slice(0, 40) || "trainee" };
}

/* ---------- Main Portal sign-in: the LSH Training Portal signs a trainee or an admin in, this site trusts its ticket ----------
   ticket = "<base64url JSON {first, last, b, exp}>.<HMAC-SHA256 of that text, keyed with PORTAL_SSO_SECRET>"
   (an administrator's ticket is {r: "a", exp}: they were signed in on the Portal with the master admin password).
   exp is epoch milliseconds; a ticket is good for a few minutes, so a copied link is no use later. */
const PORTAL_TICKET_MAX_MS = 10 * 60 * 1000;
// The Portal secret, without any space or line break pasted around it (the Portal does the same).
function portalSecret(env) { return String(env.PORTAL_SSO_SECRET || "").trim(); }
function portalOnly(env) { return !!(adminPass(env) && portalSecret(env)); }
// why (optional) gets why a ticket was refused: "format", "signature" (the Portal and this program don't share the same secret) or "expired".
async function readPortalTicket(env, ticket, why = {}) {
  if (!portalSecret(env)) { why.r = "format"; return null; }
  const parts = String(ticket || "").split(".");
  if (parts.length !== 2) { why.r = "format"; return null; }
  const good = await hmac("portal-sso:" + portalSecret(env), parts[0]);
  if (!safeEqual(good, parts[1])) { why.r = "signature"; return null; }
  let t; try { t = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)))); } catch (e) { why.r = "format"; return null; }
  const exp = Number(t && t.exp);
  if (!exp || Date.now() > exp || exp - Date.now() > PORTAL_TICKET_MAX_MS) { why.r = "expired"; return null; }
  if (t.r === "s") return { system: true };   // the Portal's own server-side tools (sign-in check, registration import): never given to a person
  if (t.r === "a") return { admin: true };    // an administrator opened this from the Portal: they still sign in here with the admin password
  const first = String(t.first || "").trim(), last = String(t.last || "").trim(), batch = String(t.b || "").trim();
  if (!first || !last || !batch) return null;
  return { name: `${first} ${last}`, first, last, batch };
}
// Like readToken, but an expired token still counts for a while (same signature, same trainee), so a trainee
// midway through the course isn't sent back to the portal in the middle of a lesson.
const TOKEN_GRACE_MS = 60 * 24 * 3600 * 1000;
async function readTraineeTokenGrace(env, request) {
  const h = request.headers.get("Authorization") || "";
  const parts = (h.startsWith("Bearer ") ? h.slice(7) : "").split(".");
  if (parts.length !== 4 || parts[0] !== "t") return null;
  const [role, subj, exp, sig] = parts;
  if (Date.now() > Number(exp) + TOKEN_GRACE_MS) return null;
  if (!safeEqual(await hmac(secretOf(env), `${role}.${subj}.${exp}`), sig)) return null;
  return { role, id: decodeURIComponent(subj) };
}

/* ---------- trainees' saved progress lives in R2 ----------
   Free Workers KV allows 1,000 writes a day for the whole account, and this namespace is shared with the
   other LSH courses (ft:, cm:, pd:, md:). A trainee's progress (progress:<id>, the copy of their work the
   portal saves a few seconds after each change) is by far the most-written record, so with the R2 binding
   (DOCUMENTS, bucket lshtraining) it's kept in R2 under eapa/ (about a million writes a month free).
   - KV still gets a copy at most once a day per trainee (R2_KV_COPY_MS), so the nightly backup
     (.github/scripts/backup.mjs, which exports KV) has everyone's progress from the last day.
   - A record saved before the move, or one not yet copied over, is read from KV.
   - Everything else stays in KV: the LSH Training Portal reads trainee:, feedback:, tfeedback: and
     checkin: from the namespace directly (its program progress and attendance pages).
   Without the R2 binding everything stays in KV, as before. */
const R2_ROOT = "eapa/";
const R2_KV_COPY_MS = 20 * 3600 * 1000;
const inR2 = (env, key) => !!env.DOCUMENTS && key.startsWith("progress:");
async function dataGet(env, key) {
  if (inR2(env, key)) {
    const obj = await env.DOCUMENTS.get(R2_ROOT + key);
    if (obj) return obj.text();
  }
  return env.LSH_KV.get(key);
}
async function dataPut(env, key, value) {
  if (!inR2(env, key)) return env.LSH_KV.put(key, value);
  const prev = await env.DOCUMENTS.head(R2_ROOT + key);
  let kvAt = Number((prev && prev.customMetadata && prev.customMetadata.kvAt) || 0);
  if (Date.now() - kvAt >= R2_KV_COPY_MS) {
    try { await env.LSH_KV.put(key, value); kvAt = Date.now(); } catch (e) { /* KV's writes ran out for the day: the save still goes to R2, and the next one copies it */ }
  }
  await env.DOCUMENTS.put(R2_ROOT + key, value, { httpMetadata: { contentType: "application/json" }, customMetadata: { kvAt: String(kvAt) } });
}
async function dataDelete(env, key) {
  if (inR2(env, key)) await env.DOCUMENTS.delete(R2_ROOT + key);
  await env.LSH_KV.delete(key);   // and the copy (or the record from before the move), or it would be read back
}

/* ---------- what a trainee may touch ---------- */
const PUBLIC_READ = [/^blueprint:meta$/, /^settings:(feedback|certificate)$/, /^surprise-task-day\d+$/, /^extralessons:day\d+$/, /^lessonx:day\d+$/, /^extraquiz:day\d+$/, /^handouts:links$/];
const OWN = (id) => [`trainee:${id}`, `progress:${id}`, `feedback:${id}`, `focus:${id}`];
const PROTECTED_TRAINEE_FIELDS = ["approved", "rejected", "archived", "labAttemptsResetAt", "certTrainer", "aiReview", "flaggedInvalidInput", "assignedRoleplay", "registeredAt", "unlockedDays", "unlockedDaysAt"];

function canRead(tok, key) {
  if (tok.role === "a") return true;
  return OWN(tok.id).includes(key) || PUBLIC_READ.some((re) => re.test(key));
}
async function traineeWrite(env, tok, key, value) {
  const id = tok.id;
  let incoming; try { incoming = JSON.parse(value); } catch (e) { return "Invalid JSON"; }
  if (key === `progress:${id}`) { await dataPut(env, key, value); return null; }   // their own copy, saved as is
  const existingRaw = await env.LSH_KV.get(key);
  const existing = existingRaw ? JSON.parse(existingRaw) : null;
  if (key === `trainee:${id}`) {
    // Trainees keep their own record current, but can never change approval, attempts resets, etc.
    const merged = Object.assign({}, incoming);
    PROTECTED_TRAINEE_FIELDS.forEach((f) => { if (existing && f in existing) merged[f] = existing[f]; else delete merged[f]; });
    if (!existing) { merged.approved = false; merged.registeredAt = new Date().toISOString(); }
    merged.id = id;
    await env.LSH_KV.put(key, JSON.stringify(merged)); return null;
  }
  if (key === `feedback:${id}`) {
    // Trainees (auto-review) may add days and mark reviews read — never rewrite a trainer's review.
    const out = existing && existing.days ? JSON.parse(JSON.stringify(existing)) : { days: {} };
    const inDays = (incoming && incoming.days) || {};
    for (const [d, v] of Object.entries(inDays)) {
      const cur = out.days[d];
      const trainerOwned = cur && (cur.editedByTrainer || (cur.status === "sent" && !cur.auto));
      if (trainerOwned) { if (v && v.readAt && !cur.readAt) cur.readAt = v.readAt; continue; }
      if (v && typeof v === "object") { delete v.editedByTrainer; out.days[d] = v; }
    }
    await env.LSH_KV.put(key, JSON.stringify(out)); return null;
  }
  if (key === `focus:${id}`) {
    // Trainees may only mark trainer focus items as seen/done.
    const out = existing && Array.isArray(existing.items) ? existing : { items: [] };
    const byId = Object.fromEntries(((incoming && incoming.items) || []).map((x) => [x.id, x]));
    out.items.forEach((x) => { const u = byId[x.id]; if (u) { x.seenAt = u.seenAt || x.seenAt || null; x.doneAt = u.doneAt || null; } });
    await env.LSH_KV.put(key, JSON.stringify(out)); return null;
  }
  if (/^tfeedback:[a-z0-9]+$/.test(key) || /^cert:LSH-EAPA-\d{4}-[A-Z0-9]{6}$/.test(key)) {
    if (existing && /^tfeedback:/.test(key)) return "Already submitted";
    await env.LSH_KV.put(key, value); return null;
  }
  return "Not allowed";
}

/* ---------- Google Gemini (free tier) ----------
   Gemini is the only reviewer. The portal sends a simple
   {messages, system, max_tokens} request; this translates it to Gemini's
   generateContent and the reply back. Models: see geminiModels (chat starts on Flash-Lite),
   each falling back to the next model, then the next key, if busy or unavailable. */
// Every AI feature (chat, grading, tracker notes review, trainer tools) shares one pool of keys.
// Free-tier limits are per Google Cloud project, so each key should come from its own project.
// Every Gemini key set on this Worker is in the pool: GEMINI_API_KEY and GEMINI_API_KEY1 … GEMINI_API_KEY9.
const GEMINI_POOL = ["GEMINI_API_KEY", ...Array.from({ length: 9 }, (_, i) => "GEMINI_API_KEY" + (i + 1))];
const GEMINI_SPARE = [];
const geminiKeyNames = (env) => [...GEMINI_POOL, ...GEMINI_SPARE].filter((n, i, a) => env[n] && a.findIndex((m) => env[m] === env[n]) === i);
const hasGemini = (env) => geminiKeyNames(env).length > 0;
// Per Worker instance: which key the next request starts on, and keys resting after a limit.
// A per-minute limit rests the key for a minute; a daily limit for an hour; a rejected key for 10 minutes.
let geminiTurn = Math.floor(Math.random() * 1000);
const geminiRest = new Map();   // "<key name>|<model>" or "<key name>|*" → rest until (ms)
const resting = (name, model) => Math.max(geminiRest.get(name + "|*") || 0, geminiRest.get(name + "|" + model) || 0) > Date.now();
function geminiKeyOrder(env) {
  const names = geminiKeyNames(env);
  const pool = names.filter((n) => GEMINI_POOL.includes(n)), spare = names.filter((n) => !GEMINI_POOL.includes(n));
  const start = pool.length ? geminiTurn++ % pool.length : 0;
  return [...pool.slice(start), ...pool.slice(0, start), ...spare];
}
const GEMINI_FLASH = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-3.5-flash"], GEMINI_LITE = "gemini-3.5-flash-lite";
const geminiModels = (env, feature) => (feature === "chat" || feature === "tracker" || !feature   // high-volume features start on Flash-Lite
  ? [GEMINI_LITE, ...GEMINI_FLASH]
  : [env.GEMINI_MODEL, ...GEMINI_FLASH, GEMINI_LITE]).filter((v, i, a) => v && a.indexOf(v) === i);
const featureFromBody = (raw) => { try { return String(JSON.parse(raw).feature || ""); } catch (e) { return ""; } };

/* Gemini refuses some regions ("User location is not supported for the API use"). The Worker is placed in
   the US (wrangler.json), but placement is best-effort: a request can still run near the trainee. A refused
   call is sent again from GeminiRelay, a Durable Object pinned to western North America, and that Worker
   instance keeps using the relay from then on. */
let geminiViaRelay = false;
async function geminiFetch(env, url, init) {
  const viaRelay = () => {
    const ns = env.GEMINI_RELAY, id = ns.idFromName("gemini-relay-" + Math.floor(Math.random() * 4));
    return ns.get(id, { locationHint: "wnam" }).fetch("https://relay/", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, headers: init.headers, body: init.body })
    });
  };
  if (geminiViaRelay && env.GEMINI_RELAY) return viaRelay();
  const r = await fetch(url, init);
  if (r.status !== 400 || !env.GEMINI_RELAY) return r;
  const text = await r.text();
  if (!/location is not supported/i.test(text)) return new Response(text, { status: r.status, headers: { "Content-Type": "application/json" } });
  geminiViaRelay = true;
  return viaRelay();
}
export class GeminiRelay {
  constructor(state, env) {}
  async fetch(request) {
    const { url, headers, body } = await request.json();
    if (!/^https:\/\/generativelanguage\.googleapis\.com\//.test(String(url))) return new Response("Not allowed", { status: 403 });
    const r = await fetch(url, { method: "POST", headers, body });
    return new Response(await r.text(), { status: r.status, headers: { "Content-Type": "application/json" } });
  }
}

async function callGemini(env, rawBody) {
  let req; try { req = JSON.parse(rawBody); } catch (e) { return json({ error: "Invalid request" }, 400); }
  // Keys in turn (see geminiKeyOrder): when a key's free-tier limit is used up (429) or the key is
  // rejected, it rests and the next key takes the request.
  const keys = geminiKeyOrder(env);
  if (!keys.length) return json({ error: "No AI key is configured on this Worker. Add GEMINI_API_KEY as a Secret in Cloudflare." }, 500);
  const toText = (c) => typeof c === "string" ? c : (Array.isArray(c) ? c.map((p) => p && p.text ? p.text : "").join("\n") : "");
  const contents = (req.messages || []).map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: toText(m.content) }] }));
  const payload = {
    contents,
    // extra headroom: newer Gemini models may spend part of the budget "thinking" before answering
    generationConfig: { maxOutputTokens: Math.min(Math.max((Number(req.max_tokens) || 1024) * 2, 2048), 16384), temperature: typeof req.temperature === "number" ? Math.min(Math.max(req.temperature, 0), 1.5) : 0.7 }
  };
  if (req.json) payload.generationConfig.responseMimeType = "application/json";
  if (req.system) payload.systemInstruction = { parts: [{ text: toText(req.system) }] };
  // Google limits the 2.5 models to accounts that already used them; new projects use 3.8 Flash / 3.5 Flash-Lite.
  // Free tier: each model has its own quota. Flash-Lite allows about 500 requests a day and 15 a
  // minute; the Flash models only 20 a day and 5 a minute. So live chat (high volume) starts on
  // Flash-Lite, while grading and trainer tools (low volume) start on the Flash models for quality
  // and fall back to Flash-Lite when those run out. GEMINI_MODEL, if set, is the first choice for
  // grading and trainer tools only.
  const models = geminiModels(env, req.feature);
  let last = null, limit = null;
  // Each model is tried on every key before moving to the next model, so grading uses up the
  // Flash quota across all keys before falling back to Flash-Lite. Resting keys are skipped, so a
  // busy day costs one call per key, not a call to every key for every request.
  for (const model of models) {
    for (const name of keys.filter((n) => !resting(n, model))) {
      const apiKey = env[name];
      const p = JSON.parse(JSON.stringify(payload));
      if (/2\.5-flash/.test(model)) p.generationConfig.thinkingConfig = { thinkingBudget: 0 };   // 2.5: thinking off
      else p.generationConfig.thinkingConfig = { thinkingLevel: "low" };                         // 3.x: think briefly → much faster replies
      const send = (body) => geminiFetch(env, `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify(body)
      });
      let r = await send(p);
      let data = await r.json().catch(() => ({}));
      if (r.status === 400 && /thinking/i.test((data.error && data.error.message) || "")) {   // model doesn't accept that setting → send without it
        delete p.generationConfig.thinkingConfig; r = await send(p); data = await r.json().catch(() => ({}));
      }
      if (r.ok) {
        const cand = (data.candidates || [])[0] || {};
        const text = ((cand.content && cand.content.parts) || []).filter((x) => !x.thought).map((x) => x.text || "").join("");
        if (!text) { last = { status: 502, msg: `Gemini returned no text (${cand.finishReason || "blocked"})` }; break; }   // same prompt on another key won't help: next model
        return json({ content: [{ type: "text", text }], model, stop_reason: cand.finishReason === "MAX_TOKENS" ? "max_tokens" : "end_turn", provider: "gemini" });
      }
      const msg = (data.error && data.error.message) || `Gemini error ${r.status}`;
      last = { status: r.status, msg };
      if (r.status === 429) {
        limit = last;
        geminiRest.set(name + "|" + model, Date.now() + (/per.?day|daily/i.test(msg) ? 3600000 : 60000));
        continue;                                                       // next key, same model
      }
      if ((r.status === 400 && /API key/i.test(msg)) || r.status === 401 || r.status === 403) {   // rejected key (or API not enabled in its project): rest it
        geminiRest.set(name + "|*", Date.now() + 600000);
        if (r.status !== 400) last = { status: 400, msg: "API key rejected: " + msg };
        continue;
      }
      if (r.status === 404) break;                                      // model not available: next model
      if ([500, 503].includes(r.status)) continue;                     // busy: next key
      return json({ error: { message: msg } }, r.status);               // anything else (e.g. a bad request) won't improve on another key
    }
  }
  if (limit) last = limit;   // report the limit, not a later model's 404
  if (!last) last = { status: 429, msg: "every Gemini key is resting after reaching its limit — try again in a minute" };
  const status = last.status === 400 && /API key/i.test(last.msg) ? 502 : last.status;   // 502, not 401: a bad AI key is not a portal sign-in problem
  return json({ error: { message: (status === 502 && /API key/i.test(last.msg) ? "invalid x-api-key (Gemini): " : status === 429 ? "rate limit (Gemini free tier): " : "") + last.msg } }, status);
}

async function listAll(env, prefix) {
  const keys = new Set(); let cursor;
  do { const r = await env.LSH_KV.list({ prefix, cursor }); r.keys.forEach((k) => keys.add(k.name)); cursor = r.list_complete ? null : r.cursor; } while (cursor);
  if (env.DOCUMENTS && ("progress:".startsWith(prefix) || prefix.startsWith("progress:"))) {   // and the progress kept in R2
    let c;
    do { const r = await env.DOCUMENTS.list({ prefix: R2_ROOT + prefix, cursor: c }); r.objects.forEach((o) => keys.add(o.key.slice(R2_ROOT.length))); c = r.truncated ? r.cursor : null; } while (c);
  }
  return [...keys];
}

/* ---------- 🕘 automatic Time In (js/attendance.js) ----------
   A trainee's course calls /api/checkin on their first visit each day (Eastern time). The first call records
   checkin:<YYYY-MM-DD>:<id> = {timeIn, at, name, batch, training}, with the same in its KV metadata
   ({t, at, n, b, tr}) so the LSH Training Portal reads a whole day from one key list; kept 40 days. Each
   trainee has their own key, so a room signing in at once never overwrites one another. The attendance
   tab shows it until a trainer sets a Time In, and the Google Sheet gets it through the portal. */
function etNow(d) {
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(d);
  const g = (t) => (p.find((x) => x.type === t) || {}).value;
  return { date: `${g("year")}-${g("month")}-${g("day")}`, time: `${g("hour")}:${g("minute")}` };
}
async function checkIn(kv, id, training) {
  const now = new Date(), et = etNow(now), key = `checkin:${et.date}:${id}`;
  const had = JSON.parse((await kv.get(key)) || "null");
  if (had) return { ok: true, date: et.date, timeIn: had.timeIn, already: true };
  const rec = JSON.parse((await kv.get(`trainee:${id}`)) || "null");
  if (!rec || rec.approved !== true || rec.archived) return { ok: false, error: "Not an approved trainee" };
  const v = { timeIn: et.time, at: now.toISOString(), name: String(rec.name || id).slice(0, 80), batch: String(rec.batch || "").slice(0, 24), training: String(training || "").slice(0, 160) };
  await kv.put(key, JSON.stringify(v), { expirationTtl: 40 * 86400, metadata: { t: v.timeIn, at: v.at, n: v.name, b: v.batch, tr: v.training } });
  return { ok: true, date: et.date, timeIn: v.timeIn };
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      const secure = !!adminPass(env);
      if (path === "/blueprint.pdf") {
        // The Platform Blueprint PDF, rebuilt automatically by the portal after each update (trainee-safe content).
        const raw = env.LSH_KV ? await env.LSH_KV.get("blueprint:pdf") : null;
        if (!raw) return new Response("The Platform Blueprint hasn't been generated yet — an admin opening the portal builds it automatically within a minute.", { status: 404, headers: { "Content-Type": "text/plain" } });
        const { b64, build } = JSON.parse(raw);
        const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
        return new Response(bin, { headers: { "Content-Type": "application/pdf", "Content-Disposition": `inline; filename="LSH_EA-PA_Platform_Blueprint_${build}.pdf"`, "Cache-Control": "no-cache" } });
      }
      if (path === "/version" || path === "/api/version") {
        // Diagnostic: shows which portal build is actually deployed.
        const page = await env.ASSETS.fetch(new Request(new URL("/", request.url)));
        const html = await page.text();
        const m = html.match(/APP_BUILD = "([^"]+)"/);
        const deployment = (env.CF_VERSION_METADATA && env.CF_VERSION_METADATA.id) || "unknown";
        return new Response(`Portal build deployed: ${m ? m[1] : "unknown (old index.html — no build tag)"}\nDeployment: ${deployment}\nWorker: secure-mode worker.js\nSecure mode: ${adminPass(env) ? "ON" : "OFF"}\nAI provider: ${hasGemini(env) ? "Google Gemini (chat starts on " + geminiModels(env, "chat")[0] + ", grading and trainer tools on " + geminiModels(env, "grading")[0] + ")" : "none — add GEMINI_API_KEY"}\nAI key pool: ${GEMINI_POOL.filter((n) => env[n]).map((n) => `${n}${geminiKeyNames(env).includes(n) ? "" : " (same key as another)"}${resting(n, "*") ? " (resting)" : ""}`).join(", ") || "no keys set"}\n`, { headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" } });
      }
      if (!path.startsWith("/api/")) {
        const res = await env.ASSETS.fetch(request);
        const type = res.headers.get("Content-Type") || "";
        if (!type.includes("text/html")) return res;
        // Never let browsers or the edge keep an old copy of the portal page.
        const h = new Headers(res.headers);
        h.set("Cache-Control", "no-cache, no-store, must-revalidate");
        return new Response(res.body, { status: res.status, headers: h });
      }
      if (request.method !== "POST") return json({ error: "POST only" }, 405);
      if (!env.LSH_KV && path.startsWith("/api/storage")) return json({ error: "LSH_KV namespace is not bound on this Worker." }, 500);

      /* ---------- auth ---------- */
      if (path === "/api/auth/status") return json({ secure, portalOnly: portalOnly(env) });
      if (path === "/api/auth/admin") {
        if (!secure) return json({ error: "not-configured" }, 501);
        const { passphrase } = await request.json();
        await new Promise((r) => setTimeout(r, 400)); // slow down guessing
        if (!safeEqual(String(passphrase || ""), adminPass(env))) return json({ error: "Incorrect passphrase" }, 401);
        return json({ token: await makeToken(env, "a", "admin", 12) });
      }
      // The trainee's session for a name + batch: their record id (new or legacy form) and token.
      const traineeSession = async (name, batch, id) => {
        const { newId, legacyId } = candidateIds(name, batch);
        let chosen = newId, existing = await env.LSH_KV.get(`trainee:${newId}`);
        if (!existing) {
          const legacy = await env.LSH_KV.get(`trainee:${legacyId}`);
          const lrec = legacy ? JSON.parse(legacy) : null;
          if (lrec && (!lrec.batch || slugPart(lrec.batch) === slugPart(batch))) { chosen = legacyId; existing = legacy; }
        }
        if (id && id !== chosen && id !== newId && id !== legacyId) return json({ error: "Name/batch don't match this session" }, 403);
        if (id && (id === newId || id === legacyId)) chosen = id;
        return json({ id: chosen, token: await makeToken(env, "t", chosen, 24 * 30), existing: existing ? JSON.parse(existing) : null });
      };
      if (path === "/api/auth/trainee") {
        if (!secure) return json({ error: "not-configured" }, 501);
        const { name, batch, id } = await request.json();
        if (!name || !batch) return json({ error: "Name and batch are required" }, 400);
        if (portalOnly(env)) {
          // Trainees come in through the LSH Training Portal (/api/auth/portal). A name + batch typed here is
          // accepted only to renew the session of a trainee who is already signed in on this device.
          const own = await readTraineeTokenGrace(env, request);
          const { newId, legacyId } = candidateIds(name, batch);
          if (!own || (own.id !== newId && own.id !== legacyId)) return json({ error: "portal-required" }, 403);
        }
        return traineeSession(name, batch, id);
      }
      if (path === "/api/auth/portal") {
        // The Main Portal's sign-in: a signed ticket says who the trainee is (their name and batch as registered there),
        // or that an administrator signed in on the Portal.
        if (!portalOnly(env)) return json({ error: "not-configured" }, 501);
        const { ticket } = await request.json().catch(() => ({}));
        const why = {};
        const who = await readPortalTicket(env, ticket, why);
        if (!who) return json({ error: why.r === "signature"
          ? "The LSH Training Portal couldn't be verified (code: bad-signature). Please tell your administrator: the Portal and this program need the same sign-in secret."
          : "This sign-in link has expired. Open the program again from the LSH Training Portal.", code: why.r || "format" }, 401);
        if (who.system) return json({ admin: true, token: await makeToken(env, "a", "admin", 12) });
        if (who.admin) return json({ error: "Administrators sign in with the admin password on every platform.", code: "admin-password" }, 403);
        const res = await traineeSession(who.name, who.batch, "");
        const out = await res.json();
        // The Portal's approval is the only trainee approval: a trainee it signs in is approved here too
        // (unless an admin here rejected them), so this program never shows "Registration Pending Approval".
        const cur = out.existing;
        if (!cur || (cur.approved !== true && !cur.rejected)) {
          const rec = Object.assign({}, cur || { id: out.id, name: who.name, firstName: who.first, lastName: who.last, batch: who.batch, registeredAt: new Date().toISOString() }, { approved: true });
          await env.LSH_KV.put(`trainee:${out.id}`, JSON.stringify(rec));
          out.existing = rec;
        }
        return json(Object.assign(out, { name: who.name, first: who.first, last: who.last, batch: who.batch }));
      }

      const tok = secure ? await readToken(env, request) : { role: "a", id: "open-mode" };
      if (!tok) return json({ error: "Sign-in required" }, 401);

      /* ---------- 🕘 automatic Time In: a trainee's first visit today (see checkIn) ---------- */
      if (path === "/api/checkin") {
        const b = await request.json().catch(() => ({}));
        const id = tok.role === "t" ? tok.id : (!secure && typeof b.id === "string" ? b.id.slice(0, 100) : "");
        if (!id) return json({ ok: false, error: "Trainees only" }, 403);
        return json(await checkIn(env.LSH_KV, id, b.training));
      }

      /* ---------- AI proxy (signed-in users only, so strangers can't spend your credits) ---------- */
      // (the path keeps its old name so pages already open in browsers keep working)
      if (path === "/api/ai-relay") {
        // The LSH Training Portal's simulators (Call Simulator, Calendaring, Email Replies) run on
        // Cloudflare Pages, next to the trainee — and Gemini refuses some regions ("User location is
        // not supported", e.g. Hong Kong). The Portal sends those AI calls here instead, so they run
        // from this Worker's US placement with its key pool. Only with the shared AI_RELAY_SECRET.
        const given = request.headers.get("X-Relay-Key") || "";
        if (!env.AI_RELAY_SECRET || !safeEqual(given, env.AI_RELAY_SECRET)) return json({ error: "Not allowed" }, 403);
        if (!hasGemini(env)) return json({ error: "No AI key is configured on this Worker." }, 500);
        return await callGemini(env, await request.text());
      }
      if (path === "/api/claude" || path === "/api/ai") {
        const body = await request.text();
        if (!hasGemini(env)) return json({ error: "No AI key is configured on this Worker. Add GEMINI_API_KEY as a Secret in Cloudflare." }, 500);
        return await callGemini(env, body);
      }

      /* ---------- cohort ranking (first name + initial only) ---------- */
      if (path === "/api/ranking") {
        const me = tok.role === "t" ? JSON.parse((await env.LSH_KV.get(`trainee:${tok.id}`)) || "null") : null;
        const batch = me ? slugPart(me.batch) : "";
        const out = [];
        for (const k of await listAll(env, "trainee:")) {
          const r = JSON.parse((await env.LSH_KV.get(k)) || "null");
          if (!r || r.approved !== true || r.archived) continue;
          if (batch && slugPart(r.batch) !== batch) continue;
          const parts = String(r.name || "Trainee").trim().split(/\s+/);
          const short = parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0];
          const dp = {}; Object.entries(r.dayProgress || {}).forEach(([d, v]) => { if (v) dp[d] = { done: !!v.done, score: v.score, surpriseTaskScore: v.surpriseTaskScore }; });
          const pp = {}; Object.entries(r.practiceProgress || {}).forEach(([t, v]) => { if (v) pp[t] = { runs: v.runs || 0, bestScore: v.bestScore }; });
          out.push({ me: r.id === tok.id, id: r.id === tok.id ? tok.id : "", name: short, batch: r.batch || "", approved: true, dayProgress: dp, practiceProgress: pp });
        }
        return json({ batch: me ? me.batch : "", trainees: out });
      }

      /* ---------- storage ---------- */
      const body = await request.json().catch(() => ({}));
      const key = String(body.key || "");
      if (path === "/api/storage/get") {
        if (!key) return json({ error: "Missing key" }, 400);
        if (!canRead(tok, key)) return json({ error: "Not allowed" }, 403);
        return json({ value: await dataGet(env, key) });
      }
      if (path === "/api/storage/get-many") {
        // Several records in one request (the admin ledger, attendance, a trainee's tasks for every
        // day): every Worker request counts toward Cloudflare's daily limit for the whole account, so
        // lists aren't fetched one request per record. The same rule as /get for each key; a key
        // this user may not read is left out.
        const keys = Array.isArray(body.keys) ? body.keys.map((k) => String(k || "")) : [];
        if (!keys.length || keys.length > 100) return json({ error: "Send 1 to 100 keys" }, 400);
        const values = {};
        await Promise.all(keys.map(async (k) => { if (k && canRead(tok, k)) values[k] = await dataGet(env, k); }));
        return json({ values });
      }
      if (path === "/api/storage/set") {
        if (!key) return json({ error: "Missing key" }, 400);
        if (tok.role === "a") { await dataPut(env, key, body.value); return json({ ok: true }); }
        const err = await traineeWrite(env, tok, key, body.value);
        return err ? json({ error: err }, 403) : json({ ok: true });
      }
      if (path === "/api/storage/list") {
        if (tok.role !== "a") return json({ keys: [] });
        return json({ keys: await listAll(env, body.prefix || "") });
      }
      if (path === "/api/storage/delete") {
        if (tok.role !== "a") return json({ error: "Not allowed" }, 403);
        await dataDelete(env, key); return json({ ok: true });
      }
      return json({ error: "Unknown endpoint" }, 404);
    } catch (e) {
      return json({ error: "Unhandled Worker exception.", detail: String((e && e.stack) || e) }, 500);
    }
  }
};
