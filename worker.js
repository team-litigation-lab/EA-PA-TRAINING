/**
 * LSH EA/PA Upskill Program — Cloudflare Worker (secured)
 *
 * Secrets (set once with `wrangler secret put <NAME>`):
 *   GEMINI_API_KEY, and any numbered one (GEMINI_API_KEY1, GEMINI_API_KEY14, …) — the Gemini key
 *                        pool behind every AI feature (see geminiPool). Set as many as you have, one per Google Cloud
 *                        project. Each request starts on the next key in turn; a key that hits its
 *                        limit is rested and the next key takes over. At least one is required.
 *   GEMINI_MODEL       — optional: first model for grading and trainer tools (default gemini-3.8-flash).
 *                        Live chat always starts on gemini-3.5-flash-lite (the free tier's daily limit
 *                        is ~500 requests there, 20 on the Flash models); see geminiModels.
 *   PORTAL_SSO_SECRET  — optional; the secret the LSH Training Portal signs its launch tickets with (the same value is set
 *                        on the Portal). Setting it makes the Main Portal the only way in: /api/auth/trainee then refuses a name +
 *                        batch typed on this site (except to renew a signed-in trainee's session), and /api/auth/portal signs a
 *                        trainee or an administrator in from the Portal's ticket. Not set = the old name + batch sign-in.
 *   MASTER_ADMIN_PASSWORD — admin sign-in (the LSH Training Portal's master admin password: one password on every platform). Setting this switches the portal
 *                        into SECURE MODE: every storage and AI request must carry
 *                        a signed session token.
 *   SESSION_SECRET     — optional; signs session tokens (defaults to MASTER_ADMIN_PASSWORD)
 *
 * Without MASTER_ADMIN_PASSWORD the Worker runs in the old open mode so nothing breaks
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
// The admin password: MASTER_ADMIN_PASSWORD, the LSH Training Portal's master admin password (one password signs an admin in on the Portal and on every platform).
function adminPass(env) { return env.MASTER_ADMIN_PASSWORD || ""; }
function secretOf(env) { return env.SESSION_SECRET || adminPass(env); }   // as stored (trimming it would sign everyone out)
// The password an admin may type: the Portal's MASTER_ADMIN_PASSWORD. Both the stored and
// the typed password are compared as a person types them: without spaces or line breaks around them, quotes pasted around the whole
// password, invisible characters (zero-width spaces, soft hyphens) or curly quotes and long dashes. A secret pasted into Cloudflare
// with any of these signs in from a saved (autofilled) password but could never be typed.
const ADMIN_PASS_VARS = ["MASTER_ADMIN_PASSWORD"];
const PASS_INVISIBLE = /[\u00AD\u180E\u200B-\u200F\u2028-\u202F\u205F-\u206F\uFEFF]/g;
const PASS_CURLY = /[\u2018\u2019\u201A\u201B\u2032\u201C\u201D\u201E\u201F\u2033\u2010-\u2015\u2212]/;
function cleanPass(v) {   // without invisible characters, curly quotes or long dashes, or spaces around it
  return String(v || "").normalize("NFKC").replace(PASS_INVISIBLE, "")
    .replace(/[\u2018\u2019\u201A\u201B\u2032]/g, "'").replace(/[\u201C\u201D\u201E\u201F\u2033]/g, '"').replace(/[\u2010-\u2015\u2212]/g, "-").trim();
}
const PASS_QUOTED = /^(["'`])([\s\S]*)\1$/;
function normPass(v) { const t = cleanPass(v), q = t.match(PASS_QUOTED); return q ? q[2].trim() : t; }
function adminPasswords(env) { return ADMIN_PASS_VARS.map((n) => normPass(env[n])).filter(Boolean); }
// What /version says about each stored password (never the password itself): what is ignored, and anything still hard to type.
function passNotes(v) {
  const raw = String(v), ignored = [];
  if (raw !== raw.trim()) ignored.push("spaces or a line break around it");
  if (new RegExp(PASS_INVISIBLE.source).test(raw)) ignored.push("invisible characters");
  if (PASS_CURLY.test(raw)) ignored.push("curly quotes or long dashes");
  if (PASS_QUOTED.test(cleanPass(raw))) ignored.push("quotes around it");
  const odd = /[^\x20-\x7E]/.test(normPass(raw)) ? ["a character that isn't on a standard keyboard (an accented or look-alike letter): it must be typed exactly"] : [];
  return { ignored, odd };
}
function adminPassStatus(env) {
  const set = ADMIN_PASS_VARS.filter((n) => normPass(env[n]));
  // set in Cloudflare but holding no password (only quotes, spaces or invisible characters, e.g. ""): never accepted
  const blank = ADMIN_PASS_VARS.filter((n) => env[n] != null && String(env[n]) !== "" && !normPass(env[n]));
  const blankNote = blank.length ? ` (${blank.join(" and ")} ${blank.length > 1 ? "are" : "is"} set but holds no password, only quotes, spaces or invisible characters: not accepted)` : "";
  if (!set.length) return "not set (open mode)" + blankNote;
  const notes = set.map((n) => {
    const { ignored, odd } = passNotes(env[n]);
    return [ignored.length ? `${n} had ${ignored.join(", ")}: ignored` : "", ...odd.map((o) => `${n} has ${o}`)].filter(Boolean).join("; ");
  }).filter(Boolean);
  return set.join(" or ") + (notes.length ? ` (${notes.join("; ")})` : "") + blankNote
    + (env.ADMIN_PASSPHRASE ? " (ADMIN_PASSPHRASE is still set in Cloudflare but no longer used: it can be deleted)" : "");
}
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
/* A Batch ID is B + the date the batch started, as MMDDYY: B100926 for 9 October 2026. The same rule on every
   LSH platform (canonicalBatch in the CMS's functions/_utils.js). Whatever is typed — any capitals, spaces or
   dashes, the B left off, a four-digit year, or the older long forms B09102026 and B09102026-LSHTRAINEE-001 —
   reads as that one form, so B100926, "b 10-09-26" and B10092026 are the same batch. A Batch ID given out
   before as B + DDMMYY reads the same as before. "" when it isn't a real date. */
const batchRealDay = (mm, dd, yy) => { const d = new Date(Date.UTC(2000 + yy, mm - 1, dd)); return mm >= 1 && mm <= 12 && dd >= 1 && d.getUTCMonth() === mm - 1; };
function canonicalBatch(raw) {
  const v = String(raw || "").toUpperCase().replace(/[\s\-]/g, "");
  const m = /^B?(\d{2})(\d{2})(\d{4}|\d{2})(?:LSH[A-Z]*\d+)?$/.exec(v);
  if (!m) return "";
  const yy = m[3].slice(-2);
  if (!batchRealDay(+m[1], +m[2], +yy) && !batchRealDay(+m[2], +m[1], +yy)) return "";
  return `B${m[1]}${m[2]}${yy}`;
}
// The same Batch ID whatever its form. An older code that isn't a date (B1, a guest account's) compares as
// typed, so a trainee registered under one still matches their own records.
const batchKey = (s) => slugPart(canonicalBatch(s) || s);
// A trainee's record id. newId uses the Batch ID in its one form, so the same batch typed differently is the
// same record; rawId is the id a record made before this rule got from the batch exactly as it was typed, and
// legacyId the older name-only id. traineeSession tries all three, so nobody's records are left behind.
function candidateIds(name, batch) {
  let slug = slugPart(name).slice(0, 40);
  if (!slug) { let h = 0; for (const c of String(name || "")) h = (h * 31 + c.codePointAt(0)) >>> 0; slug = "trainee-" + h.toString(36); }
  const b = slugPart(canonicalBatch(batch) || batch).slice(0, 20), raw = slugPart(batch).slice(0, 20);
  return { newId: b ? `${slug}--${b}` : slug, rawId: raw ? `${slug}--${raw}` : slug, legacyId: slugPart(name).slice(0, 40) || "trainee" };
}


/* ---------- a trainee keeps their record when the Portal's batch differs ----------
   Trainee ids are name + batch. The Portal signs trainees in with its own batch codes (e.g. B091826), so a trainee
   registered here under another batch got a new, empty record and their progress stayed on the old one. On a Portal
   sign-in whose record is missing or has no progress, the trainee's other record with the same name (any batch) that has
   progress is used instead (the most recently active, if there are several), from then on: trainee-alias:<new id> points
   to it, its batch becomes the Portal's, and the empty duplicate is removed (its progress copy kept in backup:progress).
   Checked once per record (linkChecked), so it costs one KV list on a trainee's first Portal sign-in only. */
function hasProgress(r) {
  return !!r && (Object.values(r.dayProgress || {}).some((p) => p && (p.done || p.score)) || (r.submissions || []).length > 0 || Object.keys(r.practiceProgress || {}).length > 0);
}
async function linkSameName(env, who) {
  const { newId, legacyId } = candidateIds(who.name, who.batch);
  const alias = await env.LSH_KV.get(`trainee-alias:${newId}`);
  if (alias && (await env.LSH_KV.get(`trainee:${alias}`))) return alias;
  const curRaw = await env.LSH_KV.get(`trainee:${newId}`), cur = curRaw ? JSON.parse(curRaw) : null;
  if (cur && (hasProgress(cur) || cur.linkChecked)) return "";
  if (!cur) {   // the old name-only record, when its batch matches, is already found by traineeSession
    const l = await env.LSH_KV.get(`trainee:${legacyId}`), lr = l ? JSON.parse(l) : null;
    if (lr && (!lr.batch || slugPart(lr.batch) === slugPart(who.batch))) return "";
  }
  const slug = newId.includes("--") ? newId.slice(0, newId.indexOf("--")) : legacyId;
  const ids = [];
  let cursor;
  do { const r = await env.LSH_KV.list({ prefix: `trainee:${slug}--`, cursor }); r.keys.forEach((k) => ids.push(k.name.slice(8))); cursor = r.list_complete ? null : r.cursor; } while (cursor);
  if (!ids.includes(legacyId)) ids.push(legacyId);
  let best = null;
  for (const id of ids) {
    if (id === newId) continue;
    const raw = await env.LSH_KV.get(`trainee:${id}`), r = raw ? JSON.parse(raw) : null;
    if (!r || r.rejected || !hasProgress(r)) continue;
    if (!best || new Date(r.lastActive || 0) > new Date(best.lastActive || 0)) best = r;
  }
  if (!best) {
    if (cur) { cur.linkChecked = true; await env.LSH_KV.put(`trainee:${newId}`, JSON.stringify(cur)); }
    return "";
  }
  await env.LSH_KV.put(`trainee-alias:${newId}`, best.id);
  if (cur) {
    const p = await dataGet(env, `progress:${newId}`);
    if (p) await env.LSH_KV.put(`backup:progress:${newId}`, p);
    await dataDelete(env, `progress:${newId}`);
    await env.LSH_KV.delete(`trainee:${newId}`);
  }
  const rec = Object.assign({}, best, { batch: who.batch, approved: best.approved === true || !best.rejected, linkedFrom: newId, linkChecked: true });
  await env.LSH_KV.put(`trainee:${best.id}`, JSON.stringify(rec));
  return best.id;
}

/* ---------- Main Portal sign-in: the LSH Training Portal signs a trainee or an admin in, this site trusts its ticket ----------
   ticket = "<base64url JSON {first, last, b, exp}>.<HMAC-SHA256 of that text, keyed with PORTAL_SSO_SECRET>"
   (an administrator's ticket is {r: "a", exp}: they were signed in on the Portal with the master admin password).
   exp is epoch milliseconds; a ticket is good for a few minutes, so a copied link is no use later. */
const PORTAL_TICKET_MAX_MS = 10 * 60 * 1000;
// The Portal secret, without any space or line break pasted around it (the Portal does the same).
function portalSecret(env) { return String(env.PORTAL_SSO_SECRET || "").trim(); }
/* Single sign-on: the LSH Training Portal is the only way a trainee gets in, on every LSH platform. The same
   rule as the CMS (portalOnly in its functions/_portal.js): on as soon as this program has an admin password,
   whether or not the Portal secret is set yet. A name + batch typed at /api/auth/trainee is refused — the
   sign-in screen hasn't offered that form since js/portal-gate.js took it over — and only a trainee already
   signed in on this device can renew their session that way.
   PORTAL_SSO_SECRET (the same value as the Portal's) is what lets a Portal ticket be checked, so until it is
   set here no trainee can be signed in at all: /api/auth/portal says so plainly (portal-secret-missing) and
   /api/auth/status reports portalSecret false, which the sign-in screen shows an administrator.
   PORTAL_ONLY=off is the way back to the old name + batch sign-in; leave it unset in production. */
function portalOnly(env) { return !!(adminPass(env) && String(env.PORTAL_ONLY || "").trim().toLowerCase() !== "off"); }
// why (optional) gets why a ticket was refused: "format", "signature" (the Portal and this program don't share the same secret) or "expired".
// An administrator's Portal ticket signs in once: its signature is remembered for 10 minutes (longer than the ticket
// lives), and a second use is refused.
async function useTicketOnce(kv, ticket) {
  if (!kv) return true;
  const key = "sso-used:" + String(ticket || "").split(".").pop().slice(0, 43);
  if (await kv.get(key)) return false;
  await kv.put(key, "1", { expirationTtl: 600 });
  return true;
}
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
  if (t.r === "a") return { admin: true, name: String(t.n || "").trim().slice(0, 60) };   // an administrator signed in on the Portal (their own admin account)
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
  const msg = `${role}.${subj}.${exp}`;
  // A trainee session signed before the signing secret changed (e.g. the admin password, when SESSION_SECRET isn't set)
  // still renews with PREVIOUS_SESSION_SECRET, the old value: renewal only, trainee sessions only (never admin), so a
  // changed password doesn't sign every trainee out. Remove it from Cloudflare once everyone has been back.
  if (safeEqual(await hmac(secretOf(env), msg), sig)) return { role, id: decodeURIComponent(subj) };
  // the value as stored, and without spaces, a line break or quotes pasted around it (either may be how it signed before)
  const raw = String(env.PREVIOUS_SESSION_SECRET || "");
  const prevs = [...new Set([raw, raw.trim(), normPass(raw)])].filter((p) => p && p !== secretOf(env));
  let ok = false;
  for (const p of prevs) if (safeEqual(await hmac(p, msg), sig)) { ok = true; break; }
  if (!ok) return null;
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

/* ---------- a trainee's progress never shrinks in their own save ----------
   A device that signed in without its progress (a fresh browser, a failed restore) would otherwise write an empty
   day list over the real one. Trainees can't un-finish a day (Retake only redoes the quiz), so a trainee's save keeps
   every day, practice tool and saved submission already on record; a trainer (admin) can still change anything. */
function daysDone(dp) { return Object.values(dp || {}).filter((p) => p && p.done).length; }
function keepProgress(existing, merged) {
  for (const f of ["dayProgress", "practiceProgress"]) {
    const had = existing[f] && typeof existing[f] === "object" ? existing[f] : null;
    if (!had) continue;
    const now = merged[f] && typeof merged[f] === "object" ? merged[f] : {};
    for (const [k, v] of Object.entries(had)) {
      if (!(k in now) || !now[k]) now[k] = v;
      else if (v && v.done && !now[k].done) now[k] = Object.assign({}, now[k], { done: true, score: Math.max(Number(v.score) || 0, Number(now[k].score) || 0) || v.score });
    }
    merged[f] = now;
  }
  for (const f of ["submissions", "roleplayHistory"]) {
    if (Array.isArray(existing[f]) && (!Array.isArray(merged[f]) || merged[f].length < existing[f].length)) merged[f] = existing[f];
  }
}

/* ---------- what a trainee may touch ---------- */
const PUBLIC_READ = [/^blueprint:meta$/, /^settings:(feedback|certificate)$/, /^surprise-task-day\d+$/, /^extralessons:day\d+$/, /^lessonx:day\d+$/, /^extraquiz:day\d+$/, /^handouts:links$/];
const OWN = (id) => [`trainee:${id}`, `progress:${id}`, `feedback:${id}`, `focus:${id}`];
const PROTECTED_TRAINEE_FIELDS = ["approved", "rejected", "archived", "labAttemptsResetAt", "certTrainer", "aiReview", "flaggedInvalidInput", "assignedRoleplay", "registeredAt", "unlockedDays", "unlockedDaysAt"];

function canRead(tok, key) {
  if (tok.role === "a") return true;
  // callsim:<id>: their graded calls from the Call Simulator (☎ LSH Ring Channel), kept by the Training Portal (read only: traineeWrite refuses it)
  return OWN(tok.id).includes(key) || key === `progress-restore:${tok.id}` || key === `callsim:${tok.id}` || PUBLIC_READ.some((re) => re.test(key));
}
async function traineeWrite(env, tok, key, value) {
  const id = tok.id;
  let incoming; try { incoming = JSON.parse(value); } catch (e) { return "Invalid JSON"; }
  if (key === `progress:${id}`) {   // their own copy, saved as is
    // A save with fewer finished days than the copy it replaces (a device that signed in without its progress) first
    // keeps that copy in backup:progress:<id>, so Admin → ♻ Restore progress can bring it back. Rare, so KV writes stay low.
    try {
      const prevRaw = await dataGet(env, key), prev = prevRaw ? JSON.parse(prevRaw) : null;
      const had = daysDone(prev && prev.data && prev.data["day-progress"]), now = daysDone(incoming && incoming.data && incoming.data["day-progress"]);
      if (had > now) {
        const bRaw = await env.LSH_KV.get(`backup:progress:${id}`), b = bRaw ? JSON.parse(bRaw) : null;
        if (!b || daysDone(b.data && b.data["day-progress"]) <= had) await env.LSH_KV.put(`backup:progress:${id}`, prevRaw);
      }
    } catch (e) { /* never block a save over its backup */ }
    await dataPut(env, key, value); return null;
  }
  const existingRaw = await env.LSH_KV.get(key);
  const existing = existingRaw ? JSON.parse(existingRaw) : null;
  if (key === `trainee:${id}`) {
    // Trainees keep their own record current, but can never change approval, attempts resets, etc.
    const merged = Object.assign({}, incoming);
    PROTECTED_TRAINEE_FIELDS.forEach((f) => { if (existing && f in existing) merged[f] = existing[f]; else delete merged[f]; });
    if (!existing) { merged.approved = false; merged.registeredAt = new Date().toISOString(); }
    if (existing) keepProgress(existing, merged);
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
    // a certificate record is the trainee's own: a new one, or one already issued to them (never someone else's)
    if (/^cert:/.test(key) && ((existing && existing.traineeId !== id) || (incoming && incoming.traineeId !== id))) return "Not allowed";
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
// Every Gemini key set on this Worker is in the pool: GEMINI_API_KEY and any numbered one
// (GEMINI_API_KEY1, GEMINI_API_KEY14, …), read from the environment, so a key added in Cloudflare
// joins the rotation with no code change. Same rule as the CMS site's pool (functions/_ai.js).
// Numbered keys come in number order (…KEY9 before KEY10), the plain one first.
const geminiPool = (env) => Object.keys(env || {})
  .filter((n) => /^GEMINI_API_KEY\d*$/.test(n) && String(env[n] || "").trim())
  .sort((a, b) => (Number(a.slice(14)) || 0) - (Number(b.slice(14)) || 0));
const geminiKeyNames = (env) => geminiPool(env).filter((n, i, a) => a.findIndex((m) => env[m] === env[n]) === i);
const hasGemini = (env) => geminiKeyNames(env).length > 0;
// Per Worker instance: which key the next request starts on, and keys resting after a limit.
// A per-minute limit rests the key for a minute; a daily limit for an hour; a rejected key for 10 minutes.
let geminiTurn = Math.floor(Math.random() * 1000);
const geminiRest = new Map();   // "<key name>|<model>" or "<key name>|*" → rest until (ms)
const resting = (name, model) => Math.max(geminiRest.get(name + "|*") || 0, geminiRest.get(name + "|" + model) || 0) > Date.now();
function geminiKeyOrder(env) {
  const names = geminiKeyNames(env);
  const start = names.length ? geminiTurn++ % names.length : 0;
  return [...names.slice(start), ...names.slice(0, start)];
}
const GEMINI_FLASH = ["gemini-3.8-flash", "gemini-3.6-flash", "gemini-3.5-flash"], GEMINI_LITE = "gemini-3.5-flash-lite";
const geminiModels = (env, feature) => (feature === "chat" || feature === "tracker" || !feature   // high-volume features start on Flash-Lite
  ? [GEMINI_LITE, ...GEMINI_FLASH]
  : [env.GEMINI_MODEL, ...GEMINI_FLASH, GEMINI_LITE]).filter((v, i, a) => v && a.indexOf(v) === i);

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

// The shared AI gateway (the Main Portal's /api/ai-gateway): when AI_GATEWAY_SECRET is set on this Worker, every AI call goes there
// and draws from the Portal's one master key pool and one shared budget (module "ea-pa") with the other programs, the CMS and the
// Portal's simulators. Without the secret this Worker still uses its own GEMINI_API_KEY pool, as before.
const gatewayOn = (env) => !!String((env && env.AI_GATEWAY_SECRET) || "").trim();
async function viaGateway(env, req, user) {
  const toText = (c) => typeof c === "string" ? c : (Array.isArray(c) ? c.map((p) => p && p.text ? p.text : "").join("\n") : "");
  const messages = (req.messages || []).map((m) => ({ role: m.role === "assistant" ? "model" : "user", text: toText(m.content) }));
  let r, data = null;
  try {
    r = await fetch(String(env.PORTAL_URL || "https://cm-training-activity.pages.dev").replace(/\/+$/, "") + "/api/ai-gateway", {
      method: "POST", headers: { "Content-Type": "application/json", "X-Gateway-Key": String(env.AI_GATEWAY_SECRET).trim() },
      body: JSON.stringify({ module: "ea-pa", user: String(user || "worker").slice(0, 80), system: toText(req.system), messages, maxTokens: Math.min(Math.max(Number(req.max_tokens) || 1024, 128), 4096) })
    });
    data = await r.json().catch(() => null);
  } catch (e) { return json({ error: { message: "The shared AI gateway is unreachable: " + (e && e.message || e) } }, 502); }
  if (data && data.success) return json({ content: [{ type: "text", text: data.text }], model: data.model, stop_reason: "end_turn", provider: "gemini-gateway" });
  const status = r.status === 429 ? 429 : (r.status === 401 || r.status === 501) ? 502 : (r.status || 502);
  return json({ error: { message: (status === 429 ? "rate limit (shared AI budget): " : "") + ((data && data.error) || "AI gateway error " + r.status) } }, status);
}

async function callGemini(env, rawBody, user) {
  let req; try { req = JSON.parse(rawBody); } catch (e) { return json({ error: "Invalid request" }, 400); }
  if (gatewayOn(env)) return await viaGateway(env, req, user);
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

/* ============================================================
   📂 The trainee's Backup Drive (js/eapa-drive.js, /api/drive)

   A law firm keeps a backup drive of every case document, in one folder structure everybody knows by
   heart. A trainee practises that here: they connect their own Google account once, lay the firm's folder
   structure out on Day 1 — graded, folder by folder — and the platform makes it in their Drive and keeps
   a copy of every document they file into the right folder of it.

   THE STANDARD lives here and nowhere else (FOLDER_STANDARD): the page draws from it, the Day 1 setup is
   graded against it, and the folder check reads from it, so there is one firm standard rather than three
   that drift apart. Paths are "/"-separated and in order: a trainee's layout is right when it is the same
   list, in the same order, spelled the same way (the numeric prefixes are the point — a drive sorted by
   accident is a drive nobody can hand over).

   Google: only drive.file, so this can see and change the folders and files it made and nothing else in
   the trainee's Drive. Tokens are sealed with a key derived from SESSION_SECRET and kept in
   drive:<trainee id>, beside the trainee's record. Needs GOOGLE_CLIENT_ID (a plain variable) and
   GOOGLE_CLIENT_SECRET (a secret) on this Worker, with the Google Drive API turned on in that Google
   Cloud project and this site among the OAuth client's authorized JavaScript origins; until both are set,
   /api/drive says so and the page says it isn't switched on yet.
   ============================================================ */
const DRIVE_ROOT = "LSH EA-PA Backup Drive";
const DRIVE_SCOPES = "openid email https://www.googleapis.com/auth/drive.file";
const FOLDER_MIME = "application/vnd.google-apps.folder";
const DRIVE_API = "https://www.googleapis.com/drive/v3";
const DRIVE_UPLOAD = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink";
const DRIVE_MAX_BYTES = 4 * 1024 * 1024;

/* The firm's folder structure, in the order it is read. A client folder is made per client the trainee
   works (the program's client is Elias Thorne); everything else is the same on every drive. */
const FOLDER_STANDARD = [
  "01 Clients",
  "01 Clients/Thorne-Elias",
  "01 Clients/Thorne-Elias/01 Correspondence",
  "01 Clients/Thorne-Elias/02 Calendar & Travel",
  "01 Clients/Thorne-Elias/03 Billing & Trust",
  "01 Clients/Thorne-Elias/04 Intake & Leads",
  "01 Clients/Thorne-Elias/05 Court & Litigation",
  "01 Clients/Thorne-Elias/06 Signed & Executed",
  "02 Firm Administration",
  "02 Firm Administration/01 Policies & SOPs",
  "02 Firm Administration/02 Compliance & CLE",
  "02 Firm Administration/03 Vendors & Contracts",
  "03 Templates",
  "04 Archive",
];
/* Why each folder is there, so a setup that misses one is told the rule and not just the answer. */
const FOLDER_WHY = {
  "01 Clients": "Client work comes first and is numbered first: a drive is read top to bottom under pressure.",
  "01 Clients/Thorne-Elias": "A client folder is named last name first, so the clients sort by surname.",
  "01 Clients/Thorne-Elias/01 Correspondence": "Everything written to or from the client and third parties.",
  "01 Clients/Thorne-Elias/02 Calendar & Travel": "Calendars, itineraries and the travel built around a matter.",
  "01 Clients/Thorne-Elias/03 Billing & Trust": "Invoices, trust activity and the reconciliations behind them.",
  "01 Clients/Thorne-Elias/04 Intake & Leads": "What was produced before the client was a client.",
  "01 Clients/Thorne-Elias/05 Court & Litigation": "Filings, orders, holds and anything counsel needs in a hurry.",
  "01 Clients/Thorne-Elias/06 Signed & Executed": "Executed originals, kept apart from the drafts they came from.",
  "02 Firm Administration": "The firm's own paperwork never sits inside a client's folder.",
  "02 Firm Administration/01 Policies & SOPs": "The policies and procedures the desk runs on.",
  "02 Firm Administration/02 Compliance & CLE": "Compliance records, CLE and anything an auditor asks for.",
  "02 Firm Administration/03 Vendors & Contracts": "Vendors, engagement letters and the firm's own contracts.",
  "03 Templates": "Blank templates, so nobody edits a client's copy by mistake.",
  "04 Archive": "Closed matters, moved out of the live folders but never deleted.",
};
/* Where a document filed in the CMS also belongs on the backup drive (js/eapa-cms-filing.js's documents). */
const DRIVE_HOMES = {
  calendar: "01 Clients/Thorne-Elias/02 Calendar & Travel",
  travel: "01 Clients/Thorne-Elias/02 Calendar & Travel",
  financial: "01 Clients/Thorne-Elias/03 Billing & Trust",
  inbox: "01 Clients/Thorne-Elias/01 Correspondence",
  calls: "01 Clients/Thorne-Elias/04 Intake & Leads",
  dossier: "01 Clients/Thorne-Elias/01 Correspondence",
  insurance: "01 Clients/Thorne-Elias/03 Billing & Trust",
  crisis: "01 Clients/Thorne-Elias/05 Court & Litigation",
};

const b64url = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
function unb64url(str) {
  str = String(str || "").replace(/-/g, "+").replace(/_/g, "/"); while (str.length % 4) str += "=";
  const bin = atob(str), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
async function sealKey(env) {
  const s = env.SESSION_SECRET || adminPass(env);
  if (!s) throw new Error("SESSION_SECRET is not configured, so Google tokens can't be stored safely.");
  const raw = await crypto.subtle.digest("SHA-256", enc.encode("lsh-eapa-drive-token|" + s));
  return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt", "decrypt"]);
}
async function seal(env, text) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await sealKey(env), enc.encode(String(text)));
  return `${b64url(iv)}.${b64url(new Uint8Array(ct))}`;
}
async function unseal(env, sealed) {
  const [iv, ct] = String(sealed || "").split(".");
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64url(iv) }, await sealKey(env), unb64url(ct));
  return new TextDecoder().decode(pt);
}

const driveConfigured = (env) => !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
const driveKey = (id) => `drive:${id}`;
async function driveRead(env, id) { return JSON.parse((await env.LSH_KV.get(driveKey(id))) || "null"); }
async function driveWrite(env, id, rec) { await env.LSH_KV.put(driveKey(id), JSON.stringify(rec)); return rec; }

async function googleToken(params) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params).toString(),
  });
  return { ok: r.ok, data: await r.json().catch(() => ({})) };
}
/* A live access token for this trainee, refreshed and saved when it is about to run out. */
async function driveAccess(env, id, rec, force = false) {
  if (!force && rec.access && Number(rec.exp) > Date.now() + 60000) return unseal(env, rec.access);
  const { ok, data } = await googleToken({
    client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
    refresh_token: await unseal(env, rec.refresh), grant_type: "refresh_token",
  });
  if (!ok) {
    if (data.error === "invalid_grant") { await env.LSH_KV.delete(driveKey(id)); const e = new Error("The Google Drive connection has expired or was taken back. Connect the Backup Drive again."); e.code = "DRIVE_RECONNECT"; throw e; }
    throw new Error(`Google refused to refresh access: ${data.error_description || data.error || "unknown error"}`);
  }
  rec.access = await seal(env, data.access_token);
  rec.exp = Date.now() + (Number(data.expires_in) || 3600) * 1000;
  await driveWrite(env, id, rec);
  return data.access_token;
}
/* One Drive call, tried again once with a fresh token if Google says this one is stale. */
async function drive(env, id, rec, method, url, body) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const token = await driveAccess(env, id, rec, attempt > 0);
    const headers = { Authorization: `Bearer ${token}` };
    let payload;
    if (body && body.raw !== undefined) { headers["Content-Type"] = body.type; payload = body.raw; }
    else if (body) { headers["Content-Type"] = "application/json"; payload = JSON.stringify(body); }
    const r = await fetch(url.startsWith("https://") ? url : DRIVE_API + url, { method, headers, body: payload });
    if (r.status === 401 && attempt === 0) continue;
    return { ok: r.ok, status: r.status, data: r.status === 204 ? {} : await r.json().catch(() => ({})) };
  }
}
const driveMessage = (res) => (res && res.data && res.data.error && res.data.error.message) || `Google Drive error ${res ? res.status : ""}`.trim();

async function folderLives(env, id, rec, fid) {
  if (!fid) return false;
  const res = await drive(env, id, rec, "GET", `/files/${encodeURIComponent(fid)}?fields=id,trashed`);
  return !!(res.ok && !res.data.trashed);
}
async function makeFolder(env, id, rec, name, parent) {
  const res = await drive(env, id, rec, "POST", "/files?fields=id", { name, mimeType: FOLDER_MIME, parents: parent ? [parent] : undefined });
  if (!res.ok || !res.data.id) throw new Error(driveMessage(res));
  return res.data.id;
}
/* The whole structure, made (or made again) in the trainee's Drive. Only what is missing is created, so
   running it twice costs nothing and a folder deleted in Drive comes back where it was. */
async function driveBuild(env, id, rec) {
  rec.folders = rec.folders || {};
  const made = [], restored = [];
  if (!(await folderLives(env, id, rec, rec.rootId))) {
    rec.rootId = await makeFolder(env, id, rec, DRIVE_ROOT);
    rec.folders = {};                                  // a new root means every folder under it is new
    made.push(DRIVE_ROOT);
  }
  for (const path of FOLDER_STANDARD) {
    const had = rec.folders[path];
    if (had && (await folderLives(env, id, rec, had))) continue;
    const cut = path.lastIndexOf("/");
    const parent = cut < 0 ? rec.rootId : rec.folders[path.slice(0, cut)];
    rec.folders[path] = await makeFolder(env, id, rec, path.slice(cut + 1), parent || rec.rootId);
    (had ? restored : made).push(path);
  }
  rec.builtAt = new Date().toISOString();
  await driveWrite(env, id, rec);
  return { made, restored };
}
/* Which of the structure's folders are no longer in the trainee's Drive. Keeping the drive is part of the
   job, so a folder someone deleted is reported rather than quietly made again. */
async function driveVerify(env, id, rec) {
  const missing = [];
  if (!(await folderLives(env, id, rec, rec.rootId))) {
    // The whole drive is gone (the root folder was deleted), so every folder is missing. Recorded like
    // any other check: without this the dashboard card read "in order" for a drive that wasn't there.
    rec.checkedAt = new Date().toISOString();
    rec.lastMissing = FOLDER_STANDARD.slice();
    await driveWrite(env, id, rec);
    return { missing: [DRIVE_ROOT].concat(FOLDER_STANDARD), rootGone: true };
  }
  for (const path of FOLDER_STANDARD) if (!(await folderLives(env, id, rec, rec.folders && rec.folders[path]))) missing.push(path);
  rec.checkedAt = new Date().toISOString();
  rec.lastMissing = missing;
  await driveWrite(env, id, rec);
  return { missing, rootGone: false };
}

/* Day 1 setup, graded: the layout the trainee typed against the firm's standard, in order. */
function gradeLayout(layout) {
  const want = FOLDER_STANDARD;
  const got = (Array.isArray(layout) ? layout : []).map((s) => String(s || "").replace(/^\/+|\/+$/g, "").replace(/\s+/g, " ").trim()).filter(Boolean);
  const problems = [], norm = (s) => s.toLowerCase();
  want.forEach((w) => {
    if (got.some((g) => g === w)) return;
    const near = got.find((g) => norm(g) === norm(w));
    if (near) problems.push(`"${near}" is spelled differently from the firm's "${w}" — a drive everybody shares is spelled one way. ${FOLDER_WHY[w] || ""}`.trim());
    else problems.push(`"${w}" is missing. ${FOLDER_WHY[w] || ""}`.trim());
  });
  got.forEach((g) => { if (!want.includes(g)) problems.push(`"${g}" isn't part of the firm's structure. A folder somebody invented is a folder nobody else looks in.`); });
  if (!problems.length) {
    const order = got.filter((g) => want.includes(g));
    for (let i = 0; i < order.length; i++) if (order[i] !== want[i]) { problems.push(`The folders are right but out of order: "${want[i]}" comes before "${order[i]}". The numbers are there so every drive reads the same way.`); break; }
  }
  const score = Math.max(0, Math.round(((want.length - Math.min(problems.length, want.length)) / want.length) * 100));
  return { ok: !problems.length, problems, score, standard: want };
}

/* What the page is told about a trainee's Backup Drive. Never a token, sealed or not. */
function driveStatus(env, rec) {
  const configured = driveConfigured(env);
  return {
    configured,
    clientId: configured ? env.GOOGLE_CLIENT_ID : "",
    scopes: DRIVE_SCOPES,
    standard: FOLDER_STANDARD,
    why: FOLDER_WHY,
    homes: DRIVE_HOMES,
    root: DRIVE_ROOT,
    connected: !!(rec && rec.refresh),
    email: (rec && rec.email) || "",
    rootUrl: rec && rec.rootId ? `https://drive.google.com/drive/folders/${encodeURIComponent(rec.rootId)}` : "",
    built: !!(rec && rec.builtAt),
    builtAt: (rec && rec.builtAt) || null,
    checkedAt: (rec && rec.checkedAt) || null,
    lastMissing: (rec && rec.lastMissing) || [],
    setup: (rec && rec.setup) || null,
    saved: (rec && rec.saved) || [],
  };
}

/* ---------- 🕘 automatic Time In (read by the Training Portal /attendance.html) ----------
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
        return new Response(`Portal build deployed: ${m ? m[1] : "unknown (old index.html — no build tag)"}\nDeployment: ${deployment}\nWorker: secure-mode worker.js\nSecure mode: ${adminPass(env) ? "ON" : "OFF"}\nAdmin password: ${adminPassStatus(env)}\nSessions signed with: ${env.SESSION_SECRET ? "SESSION_SECRET" : adminPass(env) ? "MASTER_ADMIN_PASSWORD (no SESSION_SECRET set: changing the password signs everyone out)" : "nothing (open mode)"}${env.PREVIOUS_SESSION_SECRET ? "; PREVIOUS_SESSION_SECRET renews trainee sessions signed before the change" : ""}\nAI provider: ${hasGemini(env) ? "Google Gemini (chat starts on " + geminiModels(env, "chat")[0] + ", grading and trainer tools on " + geminiModels(env, "grading")[0] + ")" : "none — add GEMINI_API_KEY"}\nAI key pool: ${geminiPool(env).map((n) => `${n}${geminiKeyNames(env).includes(n) ? "" : " (same key as another)"}${resting(n, "*") ? " (resting)" : ""}`).join(", ") || "no keys set"}\n`, { headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" } });
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
      if (path === "/api/auth/status") return json({ secure, portalOnly: portalOnly(env), portalSecret: !!portalSecret(env) });
      if (path === "/api/auth/admin") {
        if (!secure) return json({ error: "not-configured" }, 501);
        const { passphrase } = await request.json();
        await new Promise((r) => setTimeout(r, 400)); // slow down guessing
        const given = normPass(passphrase);
        if (!given || !adminPasswords(env).some((p) => safeEqual(given, p))) return json({ error: "Incorrect password" }, 401);
        return json({ token: await makeToken(env, "a", "admin", 12) });
      }
      // The trainee's session for a name + batch: their record id (new or legacy form) and token.
      const traineeSession = async (name, batch, id, linkedId) => {
        const { newId, rawId, legacyId } = candidateIds(name, batch);
        // the record this name + batch was linked to (linkSameName): the trainee's earlier record under another batch.
        // An alias written before Batch IDs were read in one form is under the id the batch got as it was typed.
        if (!linkedId && (!id || (id !== newId && id !== rawId && id !== legacyId))) {
          const al = (await env.LSH_KV.get(`trainee-alias:${newId}`)) || (rawId !== newId ? await env.LSH_KV.get(`trainee-alias:${rawId}`) : null);
          if (al && (!id || id === al)) linkedId = al;
        }
        if (linkedId) {
          const ex = await env.LSH_KV.get(`trainee:${linkedId}`);
          return json({ id: linkedId, token: await makeToken(env, "t", linkedId, 24 * 30), existing: ex ? JSON.parse(ex) : null });
        }
        let chosen = newId, existing = await env.LSH_KV.get(`trainee:${newId}`);
        // a record made before Batch IDs were read in one form: keyed by the batch exactly as it was typed
        if (!existing && rawId !== newId) {
          const raw = await env.LSH_KV.get(`trainee:${rawId}`);
          if (raw) { chosen = rawId; existing = raw; }
        }
        if (!existing) {
          const legacy = await env.LSH_KV.get(`trainee:${legacyId}`);
          const lrec = legacy ? JSON.parse(legacy) : null;
          if (lrec && (!lrec.batch || batchKey(lrec.batch) === batchKey(batch))) { chosen = legacyId; existing = legacy; }
        }
        if (id && id !== chosen && id !== newId && id !== rawId && id !== legacyId) return json({ error: "Name/batch don't match this session" }, 403);
        if (id && (id === newId || id === rawId || id === legacyId)) chosen = id;
        return json({ id: chosen, token: await makeToken(env, "t", chosen, 24 * 30), existing: existing ? JSON.parse(existing) : null, batch: canonicalBatch(batch) || String(batch || "").trim() });
      };
      if (path === "/api/auth/trainee") {
        if (!secure) return json({ error: "not-configured" }, 501);
        const { name, batch, id } = await request.json();
        if (!name || !batch) return json({ error: "Name and batch are required" }, 400);
        const { newId, rawId, legacyId } = candidateIds(name, batch);
        if (portalOnly(env)) {
          // Trainees come in through the LSH Training Portal (/api/auth/portal). A name + batch typed here is
          // accepted only to renew the session of a trainee who is already signed in on this device.
          const own = await readTraineeTokenGrace(env, request);
          const alias = (await env.LSH_KV.get(`trainee-alias:${newId}`)) || (rawId !== newId ? await env.LSH_KV.get(`trainee-alias:${rawId}`) : null);
          if (!own || (own.id !== newId && own.id !== rawId && own.id !== legacyId && own.id !== alias)) return json({ error: "portal-required" }, 403);
        }
        // A new registration has to give the Batch ID in its one form: B + the date the batch started (MMDDYY).
        // Someone whose records are already here keeps signing in with the Batch ID they registered under.
        if (!canonicalBatch(batch)) {
          const known = (await Promise.all([newId, rawId, legacyId].map(k => env.LSH_KV.get(`trainee:${k}`)))).some(Boolean)
            || !!(await env.LSH_KV.get(`trainee-alias:${rawId}`)) || !!(await env.LSH_KV.get(`trainee-alias:${newId}`));
          if (!known) return json({ error: "batch-format" }, 400);
        }
        return traineeSession(name, batch, id);
      }
      if (path === "/api/auth/portal") {
        // The Main Portal's sign-in: a signed ticket says who the trainee is (their name and batch as registered there),
        // or that an administrator signed in on the Portal.
        if (!portalOnly(env)) return json({ error: "not-configured" }, 501);
        // Single sign-on is on, but this Worker has no PORTAL_SSO_SECRET, so no ticket can be checked and nobody
        // can be signed in. Say which setting is missing rather than letting it read as an expired link.
        if (!portalSecret(env)) return json({ error: "This program isn't connected to the LSH Training Portal yet. Please tell your administrator: PORTAL_SSO_SECRET needs to be set on this program's Worker, to the same value as the Portal's.", code: "portal-secret-missing" }, 503);
        const { ticket } = await request.json().catch(() => ({}));
        const why = {};
        const who = await readPortalTicket(env, ticket, why);
        if (!who) return json({ error: why.r === "signature"
          ? "The LSH Training Portal couldn't be verified (code: bad-signature). Please tell your administrator: the Portal and this program need the same sign-in secret."
          : "This sign-in link has expired. Open the program again from the LSH Training Portal.", code: why.r || "format" }, 401);
        if (who.system) return json({ admin: true, token: await makeToken(env, "a", "admin", 12) });
        if (who.admin) {
          // Single sign-on for trainers too: an administrator signed in on the Main Portal opens every program as a
          // trainer, with no second password here. Their ticket works once, so a copy of the link (browser history,
          // a forwarded URL) can't sign anyone in again inside its 5 minutes.
          if (!(await useTicketOnce(env.LSH_KV, ticket))) return json({ error: "This sign-in link was already used. Open the program again from the LSH Training Portal.", code: "used" }, 401);
          return json({ admin: true, name: who.name, token: await makeToken(env, "a", "admin", 12) });
        }
        const res = await traineeSession(who.name, who.batch, "", await linkSameName(env, who));
        const out = await res.json();
        // The Portal's approval is the only trainee approval: a trainee it signs in is approved here too
        // (unless an admin here rejected them), so this program never shows "Registration Pending Approval".
        const cur = out.existing;
        if (!cur || (cur.approved !== true && !cur.rejected)) {
          const rec = Object.assign({}, cur || { id: out.id, linkChecked: true, name: who.name, firstName: who.first, lastName: who.last, batch: who.batch, registeredAt: new Date().toISOString() }, { approved: true });
          await env.LSH_KV.put(`trainee:${out.id}`, JSON.stringify(rec));
          out.existing = rec;
        }
        return json(Object.assign(out, { name: who.name, first: who.first, last: who.last, batch: who.batch }));
      }

      const tok = secure ? await readToken(env, request) : { role: "a", id: "open-mode" };
      if (!tok) return json({ error: "Sign-in required" }, 401);

      /* ---------- training tools open signed in (js/lsh-tool-links.js) ----------
         A fresh Portal-style ticket for the trainee signed in here, so the CMS (which takes the Portal's
         ticket, signed with the same PORTAL_SSO_SECRET) opens without its log-in page: the labs file their
         documents into the case file open in it. Trainees only: an admin's ticket never signs anyone in.
         Good for 5 minutes. The same endpoint as every other LSH course Worker. */
      if (path === "/api/auth/tool-ticket") {
        if (tok.role !== "t" || !portalSecret(env)) return json({ error: "not-available" }, tok.role !== "t" ? 403 : 501);
        const rec = JSON.parse((await env.LSH_KV.get(`trainee:${tok.id}`)) || "null");
        if (!rec || rec.approved !== true || rec.archived) return json({ error: "not-approved" }, 403);
        const words = String(rec.name || "").trim().split(/\s+/).filter(Boolean);
        const first = String(rec.firstName || words[0] || "").trim(), last = String(rec.lastName || words.slice(1).join(" ") || "").trim();
        if (!first || !last) return json({ error: "no-name" }, 400);
        const payload = btoa(String.fromCharCode(...enc.encode(JSON.stringify({ first, last, b: String(rec.batch || ""), exp: Date.now() + 5 * 60 * 1000 }))))
          .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        return json({ ticket: `${payload}.${await hmac("portal-sso:" + portalSecret(env), payload)}` });
      }

      /* ---------- 📂 the trainee's Backup Drive (js/eapa-drive.js) ----------
         Their own Google Drive, the firm's folder structure laid out on Day 1 and graded, and a copy of
         every document they file. A trainee only ever reaches their own drive; an admin reads a trainee's
         status to grade it, and can read nothing else of their Google account. */
      if (path === "/api/drive") {
        const b = await request.json().catch(() => ({}));
        const action = String(b.action || "status");
        const mine = tok.role === "t" ? tok.id : "";
        const who = mine || (tok.role === "a" && typeof b.traineeId === "string" ? b.traineeId.slice(0, 120) : "");
        // An open-mode Worker (no admin password) has no trainee tokens at all, so everyone reads as an
        // admin here and nobody has a drive. The page reads the code and simply shows nothing.
        if (!who) return json({ error: "Sign in as a trainee to use the Backup Drive.", code: "DRIVE_NOT_A_TRAINEE" }, 403);
        if (!mine && action !== "status") return json({ error: "A trainer can read a trainee's Backup Drive, not change it." }, 403);
        if (!driveConfigured(env)) return json({ drive: driveStatus(env, null) });
        let rec = await driveRead(env, who);
        try {
          if (action === "status") {
            return json({ drive: driveStatus(env, rec) });
          }
          if (action === "connect") {
            const code = String(b.code || "");
            if (!code) return json({ error: "Google sign-in didn't finish." }, 400);
            const { ok, data } = await googleToken({
              code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
              redirect_uri: "postmessage", grant_type: "authorization_code",
            });
            if (!ok) return json({ error: `Google sign-in failed: ${data.error_description || data.error || "unknown error"}` }, 400);
            let email = "";
            try { email = JSON.parse(new TextDecoder().decode(unb64url(String(data.id_token || "").split(".")[1] || ""))).email || ""; } catch (e) { /* no id token */ }
            // Google sends a refresh token only the first time an account says yes; keep the one we hold otherwise.
            const refresh = data.refresh_token ? await seal(env, data.refresh_token) : (rec && rec.refresh);
            if (!refresh) return json({ error: "Google didn't send long-term access. Remove this site under your Google account's third-party access and connect again." }, 400);
            rec = Object.assign({}, rec, {
              email, refresh, access: data.access_token ? await seal(env, data.access_token) : null,
              exp: Date.now() + (Number(data.expires_in) || 3600) * 1000,
              connectedAt: (rec && rec.connectedAt) || new Date().toISOString(),
            });
            await driveWrite(env, who, rec);
            return json({ drive: driveStatus(env, rec) });
          }
          if (action === "disconnect") {
            if (rec && rec.refresh) {
              // best effort: give the access back. The copies already in their Drive stay there.
              try { await fetch("https://oauth2.googleapis.com/revoke", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ token: await unseal(env, rec.refresh) }).toString() }); } catch (e) { /* best effort */ }
            }
            // The Day 1 setup and its grade are the trainee's record and are kept: only the Google link goes.
            const kept = rec ? { setup: rec.setup, saved: rec.saved } : {};
            rec = Object.keys(kept).length ? kept : null;
            if (rec) await driveWrite(env, who, rec); else await env.LSH_KV.delete(driveKey(who));
            return json({ drive: driveStatus(env, rec) });
          }
          if (!rec || !rec.refresh) return json({ error: "No Backup Drive is connected yet.", code: "DRIVE_NOT_CONNECTED" }, 400);

          if (action === "setup") {
            // Day 1: the structure the trainee laid out, graded against the firm's standard, then made in their Drive.
            const grade = gradeLayout(b.layout);
            const before = (rec.setup && rec.setup.attempts) || 0;
            rec.setup = { attempts: before + 1, at: new Date().toISOString(), score: grade.score, ok: grade.ok, problems: grade.problems };
            await driveWrite(env, who, rec);
            if (!grade.ok) return json({ graded: grade, drive: driveStatus(env, rec) });
            const built = await driveBuild(env, who, rec);
            return json({ graded: grade, built, drive: driveStatus(env, rec) });
          }
          if (action === "check") {
            const out = await driveVerify(env, who, rec);
            return json({ verified: out, drive: driveStatus(env, rec) });
          }
          if (action === "rebuild") {
            const built = await driveBuild(env, who, rec);
            return json({ built, drive: driveStatus(env, rec) });
          }
          if (action === "put") {
            // A document filed in the CMS, kept in its folder on the backup drive too.
            const folder = String(b.folder || "");
            if (!FOLDER_STANDARD.includes(folder)) return json({ error: `"${folder}" isn't a folder in the firm's structure.` }, 400);
            if (!rec.folders || !rec.folders[folder]) return json({ error: "That folder isn't in your Drive yet. Run the Day 1 setup first." }, 400);
            const name = String(b.name || "").slice(0, 200);
            if (!name || /[^A-Za-z0-9._-]/.test(name)) return json({ error: "The file name may hold only letters, digits and - _ ." }, 400);
            let bytes;
            try { bytes = unb64url(b.b64); } catch (e) { return json({ error: "The document didn't arrive. Try again." }, 400); }
            if (!bytes.length || bytes.length > DRIVE_MAX_BYTES) return json({ error: "The document is empty or larger than 4 MB." }, 400);
            if (!(await folderLives(env, who, rec, rec.folders[folder]))) await driveBuild(env, who, rec);
            const boundary = "lsh" + crypto.randomUUID().replace(/-/g, "");
            const meta = JSON.stringify({ name, parents: [rec.folders[folder]], description: "Filed from the LSH EA / PA training platform." });
            const head = enc.encode(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${meta}\r\n--${boundary}\r\nContent-Type: ${String(b.mime || "application/pdf").slice(0, 100)}\r\n\r\n`);
            const tail = enc.encode(`\r\n--${boundary}--`);
            const raw = new Uint8Array(head.length + bytes.length + tail.length);
            raw.set(head, 0); raw.set(bytes, head.length); raw.set(tail, head.length + bytes.length);
            const res = await drive(env, who, rec, "POST", DRIVE_UPLOAD, { raw, type: `multipart/related; boundary=${boundary}` });
            if (!res.ok || !res.data.id) return json({ error: driveMessage(res) }, 502);
            rec.saved = (rec.saved || []).filter((s) => s.name !== name).concat([{ name, folder, at: new Date().toISOString(), id: res.data.id }]).slice(-200);
            await driveWrite(env, who, rec);
            return json({ saved: { name, folder, url: res.data.webViewLink || "" }, drive: driveStatus(env, rec) });
          }
          return json({ error: "Unknown Backup Drive action." }, 400);
        } catch (e) {
          return json({ error: (e && e.message) || "The Backup Drive request failed.", code: (e && e.code) || "DRIVE_ERROR" }, 502);
        }
      }

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
        if (!hasGemini(env) && !gatewayOn(env)) return json({ error: "No AI key is configured on this Worker." }, 500);
        return await callGemini(env, await request.text(), tok && tok.id);
      }
      if (path === "/api/claude" || path === "/api/ai") {
        const body = await request.text();
        if (!hasGemini(env) && !gatewayOn(env)) return json({ error: "No AI key is configured on this Worker. Add GEMINI_API_KEY as a Secret in Cloudflare." }, 500);
        return await callGemini(env, body, tok && tok.id);
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
      if (path === "/api/admin/progress-copies") {
        // Admin → ♻ Restore progress: the older copies of a trainee's progress that /get can't reach (the daily KV copy
        // of the R2 record, and the backup kept when a save shrank it).
        if (tok.role !== "a") return json({ error: "Not allowed" }, 403);
        const id = String(body.id || "");
        if (!id) return json({ error: "Missing id" }, 400);
        const [current, daily, backup] = await Promise.all([dataGet(env, `progress:${id}`), env.LSH_KV.get(`progress:${id}`), env.LSH_KV.get(`backup:progress:${id}`)]);
        return json({ current, daily: daily !== current ? daily : null, backup });
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
