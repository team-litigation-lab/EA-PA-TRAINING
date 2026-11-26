/* ============================================================
   EA / PA — ▶ Live Simulation: each day's Practice Lab as one continuous shift

   The day's scenario (js/eapa-sim-scenarios.js) plays out in a full-screen workspace, the way the
   Case Management course runs its simulators:
     1. Briefing: the setting, the shift's length, and Elias's rules that matter most today.
     2. The shift: events arrive on a clock (an email, a ringing phone, a Slack DM from Elias, a text,
        a calendar alert, a document). Each opens in its own app window with a response timer. The
        trainee makes the call and writes what they'd actually send. ⏩ brings the next event in early
        when the desk is clear.
     3. Debrief: the score, and for every event what happened, the call they made, why the best call
        is right and what a stronger response does, Case Management style.
   Scoring per event: the call (60), the written reply's key points (30), answered inside the window (10).
   The run is logged to the work log as the day's Practice Lab (strengths, gaps, next steps) and counts
   toward the lab's best score, so both scorecards (admin and trainee) show it.
   Entry: a "▶ Live Simulation" banner on each Practice Lab page (and EAPASim.open(day) from anywhere).
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined") return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const CH = {email: ["✉️", "Mail", "New email"], call: ["📞", "Phone", "Incoming call"], slack: ["💬", "Slack", "New Slack message"],
  text: ["📱", "Messages", "New text"], cal: ["📅", "Calendar", "Calendar alert"], doc: ["📄", "Documents", "Document to review"]};
const RULES = ["Confidentiality is absolute: nothing on the shared calendar or outside the firm.", "15-minute debrief buffer after key sessions; no back-to-back depositions or hearings.",
  "The Friday 4:00 PM loop call never slips.", "Direct flights, aisle near the front.", "Over $5,000 goes to Elias himself.", "Media or public posts: Priya Nair first.",
  "Leo: peanut allergy. Elias: strict Paleo.", "Family commitments are protected; a family emergency interrupts anything.",
  "Channels: Slack, then text, then email; phone only in a genuine emergency.", "Raise a conflict or a mistake the moment you see it."];
const mmss = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const scenarios = () => window.EAPA_SIM_SCENARIOS || {};
const toolOfDay = n => { try{ return (relatedTools(n)[0] || {}).id || null; }catch(e){ return null; } };
const dayOfTool = id => { try{ const d = DAYS.find(x => relatedTools(x.id).some(t => t.id === id)); return d ? d.id : null; }catch(e){ return null; } };
// a stable shuffle of an event's options (the best call isn't always first)
function order(n, seed){ const a = [...Array(n).keys()]; let x = seed * 9301 + 49297; for(let i = n - 1; i > 0; i--){ x = (x * 9301 + 49297) % 233280; const j = Math.floor(x / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

let S = null;   // the run: {day, sc, phase, t0, offset, released:Set, ans:{}, sel, rang:{}, lines:{}}
const now = () => (Date.now() - S.t0) / 1000 + S.offset;

function open(day){
  const sc = scenarios()[day]; if(!sc){ if(typeof toast === "function") toast("No simulation for this day yet."); return; }
  S = {day, sc, phase: "brief", t0: 0, offset: 0, released: new Set(), ans: {}, sel: null, rang: {}, lines: {}, draft: {}};
  document.body.classList.add("sim-open");
  let host = document.getElementById("simRun");
  if(!host){ host = document.createElement("div"); host.id = "simRun"; document.body.appendChild(host); }
  draw();
}
function close(force){
  if(!force && S && S.phase === "run" && !confirm("Leave the simulation? This shift won't be scored.")) return;
  clearInterval(S && S.tick); S = null;
  const host = document.getElementById("simRun"); if(host) host.remove();
  document.body.classList.remove("sim-open");
}
function start(){
  S.phase = "run"; S.t0 = Date.now(); S.offset = 0;
  S.tick = setInterval(step, 1000); step();
}
// the clock: release what's due, reveal call lines, end the shift when everything is answered
function step(){
  if(!S || S.phase !== "run") return;
  const t = now(); let fresh = null;
  S.sc.events.forEach((e, i) => { if(!S.released.has(i) && t >= e.at){ S.released.add(i); fresh = i; } });
  if(fresh !== null){
    flash(fresh);
    // switch to it only when the desk is clear; never wipe out a reply being written
    if(S.sel === null || S.ans[S.sel]){ S.sel = fresh; drawRun(true); } else drawFeed();
  }
  else drawClock();
}
function flash(i){
  const e = S.sc.events[i], c = CH[e.ch] || CH.email;
  const f = document.createElement("div"); f.className = "sim-flash"; f.innerHTML = `<b>${c[0]} ${E(c[2])}</b><span>${E(e.from)}</span>`;
  const host = document.getElementById("simRun"); if(host){ host.appendChild(f); setTimeout(() => f.remove(), 3800); }
}
function nextNow(){
  const t = now(), next = S.sc.events.map((e, i) => [e, i]).filter(([e, i]) => !S.released.has(i)).sort((a, b) => a[0].at - b[0].at)[0];
  if(next){ S.offset += Math.max(0, next[0].at - t); step(); }
}
function pick(i){ S.sel = i; drawRun(true); }
function answer(i){
  const box = document.getElementById("simResp"); if(!box) return;
  const c = box.querySelector("input[name=simOpt]:checked"), txt = (box.querySelector("textarea") || {}).value || "";
  if(!c){ if(typeof toast === "function") toast("Make your call first."); return; }
  if(txt.trim().length < 15){ if(typeof toast === "function") toast("Write what you'd actually send or do (a sentence or two)."); return; }
  S.ans[i] = {opt: +c.value, text: txt.trim(), at: now()};
  const open_ = S.sc.events.map((e, k) => k).filter(k => S.released.has(k) && !S.ans[k]);
  S.sel = open_.length ? open_[0] : i;
  if(Object.keys(S.ans).length === S.sc.events.length){ finish(); return; }
  drawRun(true);
}

/* ---------- scoring ---------- */
function scoreOf(e, i){
  const a = S.ans[i]; if(!a) return {total: 0, call: 0, pts: [], hit: 0, timely: false, missed: true};
  const credit = (e.options[a.opt] || [, 0])[1];
  const low = a.text.toLowerCase();
  // a short key word (3 letters or fewer: "by", "pm", "hr", "gc") counts only as a whole word, not inside another word
  const has = w => { w = String(w).toLowerCase(); return w.length <= 3 && /^[a-z]+$/.test(w) ? new RegExp("\\b" + w + "\\b").test(low) : low.indexOf(w) >= 0; };
  const pts = e.reply.points.map(([label, words]) => ({label, ok: words.some(has)}));
  const hit = pts.filter(p => p.ok).length;
  const timely = a.at - e.at <= e.window;
  return {total: Math.round(credit * 60 + (pts.length ? hit / pts.length : 0) * 30 + (timely ? 10 : 0)), call: credit, pts, hit, timely, missed: false};
}
async function finish(){
  clearInterval(S.tick); S.phase = "debrief";
  const res = S.sc.events.map((e, i) => Object.assign({e, i}, scoreOf(e, i)));
  const total = Math.round(res.reduce((n, r) => n + r.total, 0) / res.length);
  S.result = {res, total};
  draw();
  // the day's Practice Lab: logged with its notes, and counted toward the lab's best score
  try{
    const toolId = toolOfDay(S.day), strengths = [], gaps = [], growth = [];
    res.forEach(r => {
      const title = `${(CH[r.e.ch] || CH.email)[1]}: ${r.e.subject}`;
      if(r.missed) gaps.push(`${title}: not handled before the shift ended.`);
      else if(r.call >= 1) strengths.push(`${title}: the right call. ${r.e.why}`);
      else gaps.push(`${title}: ${r.e.why}`);
      r.pts.filter(p => !p.ok).forEach(p => gaps.push(`${title}: the reply didn't cover "${p.label}".`));
      if(r.total < 85) growth.push(r.e.better);
    });
    if(typeof logWork === "function" && state.traineeId && !state.isAdmin){
      logWork({kind: "lab", dayId: S.day, toolId, label: `Day ${S.day} Live Simulation`, score: total,
        tier: total >= 85 ? "Proficient" : total >= 70 ? "Developing" : "Requires Remediation",
        strengths: strengths.slice(0, 3), gaps: gaps.slice(0, 3), growth: growth.slice(0, 2),
        excerpt: res.map(r => `${r.e.subject}: ${S.ans[r.i] ? S.ans[r.i].text : "(not handled)"}`).join(" | ").slice(0, 700)});
      if(toolId && typeof bumpPracticeProgress === "function") await bumpPracticeProgress(toolId, total);
    }
  }catch(err){ console.warn("simulation log:", err); }
}

/* ---------- drawing ---------- */
function draw(){
  const host = document.getElementById("simRun"); if(!host || !S) return;
  if(S.phase === "brief") host.innerHTML = briefHtml();
  else if(S.phase === "run") drawRun(true);
  else host.innerHTML = debriefHtml();
}
function topBar(extra){
  return `<div class="sim-top"><div class="sim-brand"><span class="sim-live">${S.phase === "run" ? "● LIVE" : "SIM"}</span><b>Day ${S.day} Live Simulation</b><em>${E(S.sc.title)}</em></div>${extra || ""}
    <button type="button" class="sim-x" onclick="EAPASim.close()" title="Leave the simulation">✕</button></div>`;
}
function briefHtml(){
  const ev = S.sc.events, mins = Math.ceil((ev[ev.length - 1].at + ev[ev.length - 1].window) / 60);
  return `<div class="sim-shell">${topBar()}
    <div class="sim-brief"><div class="sim-brief-card">
      <p class="sim-k">Briefing</p><h2>${E(S.sc.title)}</h2><p class="sim-set">${E(S.sc.setting)}</p>
      <div class="sim-brief-grid">
        <div><h4>How the shift runs</h4><ul>
          <li>${ev.length} live events arrive over about ${mins} minutes: ${[...new Set(ev.map(e => (CH[e.ch] || CH.email)[1]))].join(", ")}.</li>
          <li>Each one has a response timer. Make the call, then write what you'd actually send or do.</li>
          <li>Desk clear? <b>⏩ Next event now</b> brings the next one in early.</li>
          <li>Scored on the call (60), your reply's key points (30) and answering in time (10), with a debrief at the end.</li></ul></div>
        <div><h4>Elias's rules to keep in mind</h4><ul class="sim-rules">${RULES.map(r => `<li>${E(r)}</li>`).join("")}</ul></div>
      </div>
      <div class="sim-brief-acts"><button type="button" class="btn btn-ghost" onclick="EAPASim.close(true)">Not now</button>
        <button type="button" class="btn btn-primary sim-go" onclick="EAPASim.start()">▶ Start the shift</button></div>
    </div></div></div>`;
}
function feedItem(e, i){
  const c = CH[e.ch] || CH.email, a = S.ans[i], left = e.at + e.window - now();
  const st = a ? `<span class="sim-st ok">✓ Handled</span>` : left < 0 ? `<span class="sim-st late">Overdue</span>` : `<span class="sim-st due">${mmss(left)}</span>`;
  return `<button type="button" class="sim-fi ${S.sel === i ? "on" : ""} ${a ? "done" : "new"}" onclick="EAPASim.pick(${i})">
    <span class="sim-fi-ic">${c[0]}</span><span class="sim-fi-t"><b>${E(e.from)}</b><small>${E(e.subject)}</small></span>${st}</button>`;
}
function windowHtml(e, i){
  const c = CH[e.ch] || CH.email;
  let content;
  if(e.ch === "call"){
    const lines = String(e.body).split("\n");
    if(!S.rang[i]) content = `<div class="sim-ring"><div class="sim-ring-ic">📞</div><b>${E(e.from)}</b><span>Incoming call…</span>
      <button type="button" class="btn btn-primary" onclick="EAPASim.answerCall(${i})">Answer</button></div>`;
    else content = `<div class="sim-call"><div class="sim-call-h">📞 On the line: ${E(e.from)} <span>${mmss(now() - S.rang[i])}</span></div>
      ${lines.slice(0, S.lines[i] || 0).map(l => { const m = /^([^:]{1,40}):\s*(.*)$/.exec(l); return `<p><b>${E(m ? m[1] : "")}</b> ${E(m ? m[2] : l)}</p>`; }).join("")}</div>`;
  }else if(e.ch === "slack" || e.ch === "text"){
    content = `<div class="sim-chat"><div class="sim-bub"><b>${E(e.from)}</b><p>${E(e.body).replace(/\n/g, "<br>")}</p><small>${e.ch === "text" ? "Text message" : "Slack"} · just now</small></div></div>`;
  }else{
    content = `<div class="sim-doc"><div class="sim-doc-h"><div><span>From</span> <b>${E(e.from)}</b></div><div><span>Subject</span> <b>${E(e.subject)}</b></div></div>
      <div class="sim-doc-b">${E(e.body).replace(/\n/g, "<br>")}</div></div>`;
  }
  return `<div class="sim-win"><div class="sim-win-bar"><span class="aw-dots"><i></i><i></i><i></i></span><b>${c[0]} ${c[1]}</b><span class="sim-win-t">${E(e.subject)}</span></div>${content}</div>`;
}
function respHtml(e, i){
  const a = S.ans[i];
  if(e.ch === "call" && !S.rang[i]) return `<div class="sim-resp sim-resp-wait">Answer the call to respond.</div>`;
  if(a){
    const o = e.options[a.opt];
    return `<div class="sim-resp sim-resp-done"><p class="sim-k">Your response · sent</p><p><b>Your call:</b> ${E(o[0])}</p><p class="sim-sent">${E(a.text).replace(/\n/g, "<br>")}</p>
      <p class="sim-hint">You'll see how it scored in the debrief.</p></div>`;
  }
  const ord = order(e.options.length, S.day * 10 + i), d = S.draft[i] || {};
  return `<div class="sim-resp" id="simResp"><p class="sim-k">${E(e.q)}</p>
    <div class="sim-opts">${ord.map(k => `<label class="sim-opt"><input type="radio" name="simOpt" value="${k}" ${d.opt === k ? "checked" : ""} onchange="EAPASim.keep(${i})"><span>${E(e.options[k][0])}</span></label>`).join("")}</div>
    <label class="sim-k sim-k2" for="simTxt">${E(e.reply.prompt)}</label>
    <textarea id="simTxt" rows="4" placeholder="Write it as you'd send it…" oninput="EAPASim.keep(${i})">${E(d.text || "")}</textarea>
    <div class="sim-resp-acts"><span class="sim-hint">${(() => { const left = e.at + e.window - now(); return left >= 0 ? `⏱ ${mmss(left)} left to respond in time` : "⏱ Past the response window: still answer it"; })()}</span>
      <button type="button" class="btn btn-primary" onclick="EAPASim.answer(${i})">Send ➤</button></div></div>`;
}
function drawRun(full){
  const host = document.getElementById("simRun"); if(!host || !S) return;
  const ev = S.sc.events, rel = ev.map((e, i) => i).filter(i => S.released.has(i));
  const done = Object.keys(S.ans).length, waiting = rel.filter(i => !S.ans[i]).length, more = ev.length - rel.length;
  if(!full && document.getElementById("simFeed")){ drawClock(); return; }
  const sel = S.sel;
  host.innerHTML = `<div class="sim-shell">${topBar(`<div class="sim-clock"><span id="simClock">${mmss(now())}</span><small>${done}/${ev.length} handled</small></div>
      ${more && !waiting ? `<button type="button" class="btn btn-sm sim-next" onclick="EAPASim.nextNow()">⏩ Next event now</button>` : ""}
      <button type="button" class="btn btn-sm sim-end" onclick="EAPASim.endNow()">End shift</button>`)}
    <div class="sim-body">
      <aside class="sim-feed" id="simFeed"><p class="sim-k">Incoming</p>${rel.slice().reverse().map(i => feedItem(ev[i], i)).join("") || `<p class="sim-empty">Waiting for the first event…</p>`}
        ${more ? `<p class="sim-more">${more} more event${more === 1 ? "" : "s"} still to come…</p>` : ""}</aside>
      <section class="sim-main">${sel === null ? `<div class="sim-idle"><div>☕</div><p>The desk is quiet for now. The first event is about to land.</p></div>`
        : `<div id="simWin">${windowHtml(ev[sel], sel)}</div>${respHtml(ev[sel], sel)}`}</section>
      <aside class="sim-side"><p class="sim-k">Elias's rules</p><ul class="sim-rules">${RULES.map(r => `<li>${E(r)}</li>`).join("")}</ul></aside>
    </div></div>`;
}
// the feed and the header only (a reply being written stays as it is)
function drawFeed(){
  const f = document.getElementById("simFeed"), shell = document.querySelector("#simRun .sim-shell"); if(!f || !shell){ drawRun(true); return; }
  const ev = S.sc.events, rel = ev.map((e, i) => i).filter(i => S.released.has(i)), more = ev.length - rel.length;
  f.innerHTML = `<p class="sim-k">Incoming</p>${rel.slice().reverse().map(i => feedItem(ev[i], i)).join("")}${more ? `<p class="sim-more">${more} more event${more === 1 ? "" : "s"} still to come…</p>` : ""}`;
  const nx = shell.querySelector(".sim-next"); if(nx && rel.some(i => !S.ans[i])) nx.remove();
  drawClock();
}
function drawClock(){
  const c = document.getElementById("simClock"); if(c) c.textContent = mmss(now());
  // the feed's response timers tick too
  const f = document.getElementById("simFeed");
  if(f) S.sc.events.forEach((e, i) => { if(!S.released.has(i) || S.ans[i]) return; const b = f.querySelectorAll(".sim-fi")[[...S.released].sort((a, b) => b - a).indexOf(i)];
    const st = b && b.querySelector(".sim-st"); if(st){ const left = e.at + e.window - now(); st.textContent = left < 0 ? "Overdue" : mmss(left); st.className = "sim-st " + (left < 0 ? "late" : "due"); } });
  const h = document.querySelector("#simResp .sim-hint"); if(h && S.sel !== null){ const e = S.sc.events[S.sel], left = e.at + e.window - now(); h.textContent = left >= 0 ? `⏱ ${mmss(left)} left to respond in time` : "⏱ Past the response window: still answer it"; }
}
function answerCall(i){
  S.rang[i] = now(); S.lines[i] = 1; drawRun(true);
  const n = String(S.sc.events[i].body).split("\n").length;
  // the caller's lines come in one by one; only the call window redraws (a reply being written stays)
  const reveal = () => { if(!S || S.phase !== "run") return; if((S.lines[i] || 0) < n){ S.lines[i]++; const w = document.getElementById("simWin"); if(S.sel === i && w) w.innerHTML = windowHtml(S.sc.events[i], i); setTimeout(reveal, 1600); } };
  setTimeout(reveal, 1600);
}
function keep(i){
  const box = document.getElementById("simResp"); if(!box) return;
  const c = box.querySelector("input[name=simOpt]:checked"), t = box.querySelector("textarea");
  S.draft[i] = {opt: c ? +c.value : undefined, text: t ? t.value : ""};
}
function endNow(){ if(confirm("End the shift now? Anything not handled scores 0.")) finish(); }

function debriefHtml(){
  const {res, total} = S.result, tone = v => v >= 85 ? "hi" : v >= 70 ? "ok" : "lo";
  const status = total >= 85 ? "Excellent" : total >= 70 ? "Passing" : "Below the pass mark";
  return `<div class="sim-shell">${topBar()}
    <div class="sim-debrief"><div class="sim-db-head"><div><p class="sim-k">Debrief</p><h2>${E(S.sc.title)}</h2>
        <p>${res.filter(r => r.call >= 1).length} of ${res.length} right calls · ${res.filter(r => r.timely && !r.missed).length} answered in time · passing score 70%</p></div>
      <div class="sim-db-score sim-${tone(total)}"><b>${total}%</b><span>${status}</span></div></div>
      <div class="sim-db-list">${res.map(r => { const e = r.e, c = CH[e.ch] || CH.email, a = S.ans[r.i];
        return `<div class="sim-db-ev sim-${tone(r.total)}"><div class="sim-db-evh"><span class="sim-pill sim-${tone(r.total)}">${r.total}%</span><b>${c[0]} ${E(e.subject)}</b><small>${E(e.from)}</small></div>
          <dl><dt>What happened</dt><dd>${r.missed ? "Not handled before the shift ended." : `Your call: ${E(e.options[a.opt][0])}${r.timely ? "" : " (after the response window)"}.`}</dd>
          <dt>Why</dt><dd>${E(e.why)}</dd>
          ${r.pts.length ? `<dt>Your reply covered</dt><dd>${r.pts.map(p => `<span class="sim-kp ${p.ok ? "y" : "n"}">${p.ok ? "✓" : "✗"} ${E(p.label)}</span>`).join(" ")}</dd>` : ""}
          <dt>What you could have done better</dt><dd>${r.call < 1 ? `The best call: ${E(e.options.slice().sort((x, y) => y[1] - x[1])[0][0])}. ` : ""}${E(e.better)}</dd></dl></div>`; }).join("")}</div>
      <div class="sim-brief-acts"><button type="button" class="btn btn-ghost" onclick="EAPASim.close(true)">Back to the lab</button>
        <button type="button" class="btn btn-primary" onclick="EAPASim.open(${S.day})">↻ Run the shift again</button></div>
      <p class="sim-hint">${state.traineeId && !state.isAdmin ? "Saved to your 🏅 Scorecard as this day's Practice Lab." : "Trainer preview: this run isn't saved."}</p></div></div>`;
}

/* ---------- the way in: a banner on each Practice Lab page ---------- */
function banner(){
  if(typeof state === "undefined" || state.view !== "tool") return;
  const day = dayOfTool(state.toolId); if(!day || !scenarios()[day] || document.getElementById("simLaunch")) return;
  const body = document.getElementById("toolBody"); if(!body || !body.parentNode) return;
  const sc = scenarios()[day];
  const b = document.createElement("div"); b.id = "simLaunch"; b.className = "sim-launch";
  b.innerHTML = `<div class="sim-launch-ic">▶</div><div class="sim-launch-t"><p class="sim-k">Day ${day} Live Simulation</p><b>${E(sc.title)}</b>
      <span>${sc.events.length} live events (${[...new Set(sc.events.map(e => (CH[e.ch] || CH.email)[1]))].join(", ")}) arrive while you work, each on a timer, with a debrief at the end.</span></div>
    <button type="button" class="btn btn-primary" onclick="EAPASim.open(${day})">▶ Start the simulation</button>`;
  body.parentNode.insertBefore(b, body);
}
const __after = window.afterRender;
window.afterRender = function(){ const r = __after ? __after.apply(this, arguments) : undefined; try{ banner(); setTimeout(banner, 0); }catch(e){} return r; };
document.addEventListener("keydown", e => { if(e.key === "Escape" && S && S.phase !== "run") close(true); });

window.EAPASim = {open, close, start, pick, answer, answerCall, keep, nextNow, endNow};

const st = document.createElement("style"); st.id = "eapa-sim-run"; st.textContent = `
body.sim-open{overflow:hidden;}
#simRun{position:fixed;inset:0;z-index:9500;background:#E9ECF4;font-family:'Inter',system-ui,sans-serif;color:#1B1E2E;}
.sim-shell{display:flex;flex-direction:column;height:100%;}
.sim-top{display:flex;align-items:center;gap:14px;padding:10px 18px;background:linear-gradient(135deg,#1E2340,#33395E);color:#fff;border-bottom:3px solid #DB8437;}
.sim-brand{display:flex;align-items:baseline;gap:10px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;}
.sim-brand b{font:700 18px 'Fraunces',Georgia,serif;} .sim-brand em{font-style:normal;color:#C9CEE3;font-size:14px;overflow:hidden;text-overflow:ellipsis;}
.sim-live{font:800 11px 'IBM Plex Mono',monospace;letter-spacing:.08em;background:#C2410C;color:#fff;border-radius:4px;padding:3px 7px;}
.sim-clock{display:flex;flex-direction:column;align-items:flex-end;line-height:1.1;} .sim-clock span{font:700 20px 'IBM Plex Mono',monospace;} .sim-clock small{font-size:12px;color:#C9CEE3;}
.sim-next{background:#DB8437 !important;color:#241304 !important;border:0 !important;font-weight:800 !important;}
.sim-end{background:transparent !important;color:#fff !important;border:1px solid rgba(255,255,255,.5) !important;}
.sim-x{background:none;border:0;color:#fff;font-size:20px;cursor:pointer;padding:4px 8px;}
.sim-k{margin:0 0 6px;font:800 11.5px 'IBM Plex Mono',monospace;letter-spacing:.06em;text-transform:uppercase;color:#A34E14;}
.sim-hint{font-size:12.5px;color:#4A5070;}
.sim-brief{flex:1;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:28px 18px;}
.sim-brief-card{background:#fff;border-radius:16px;max-width:1080px;width:100%;padding:26px 30px;box-shadow:0 20px 50px -30px rgba(20,24,48,.5);}
.sim-brief-card h2{margin:0 0 6px;font:700 28px 'Fraunces',Georgia,serif;color:#1E2340;}
.sim-set{font-size:16px;font-weight:600;color:#2E3450;margin:0 0 18px;}
.sim-brief-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;} .sim-brief-grid h4{margin:0 0 8px;font-size:15px;color:#1E2340;}
.sim-brief-grid ul{margin:0;padding-left:18px;font-size:14.5px;line-height:1.55;}
.sim-rules{font-size:13.5px !important;line-height:1.45 !important;} .sim-rules li{margin-bottom:4px;}
.sim-brief-acts{display:flex;justify-content:flex-end;gap:10px;margin-top:20px;}
.sim-go{font-size:16px !important;padding:10px 22px !important;}
.sim-body{flex:1;min-height:0;display:grid;grid-template-columns:300px minmax(0,1fr) 260px;gap:14px;padding:14px 18px;}
.sim-feed,.sim-side{background:#fff;border-radius:14px;padding:12px;overflow:auto;border:1px solid #D9DEEA;}
.sim-fi{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:#F6F7FB;border:1px solid #E1E5EE;border-radius:10px;padding:9px 10px;margin-bottom:8px;cursor:pointer;font:inherit;}
.sim-fi.new{border-left:4px solid #DB8437;background:#FFF8F0;} .sim-fi.on{outline:2px solid #262B45;} .sim-fi.done{opacity:.75;}
.sim-fi-ic{font-size:20px;} .sim-fi-t{flex:1;min-width:0;} .sim-fi-t b{display:block;font-size:13.5px;color:#1E2340;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.sim-fi-t small{display:block;font-size:12.5px;color:#4A5070;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.sim-st{font:700 11.5px 'IBM Plex Mono',monospace;border-radius:999px;padding:2px 7px;white-space:nowrap;} .sim-st.ok{background:#DDF2E3;color:#14532D;} .sim-st.due{background:#EEF1FA;color:#262B45;} .sim-st.late{background:#FDE7E3;color:#8A1C10;}
.sim-more,.sim-empty{font-size:12.5px;color:#4A5070;margin:8px 2px;}
.sim-main{min-height:0;overflow:auto;display:flex;flex-direction:column;gap:12px;}
.sim-idle{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#4A5070;font-size:16px;} .sim-idle div{font-size:40px;}
.sim-win{background:#fff;border:1px solid #CDD3E2;border-radius:12px;overflow:hidden;box-shadow:0 14px 30px -22px rgba(22,24,41,.45);}
.sim-win-bar{display:flex;align-items:center;gap:10px;background:linear-gradient(180deg,#F7F8FB,#ECEFF5);border-bottom:1px solid #D9DEEA;padding:7px 12px;font-size:13px;}
.sim-win-bar .aw-dots{display:flex;gap:6px;} .sim-win-bar .aw-dots i{width:11px;height:11px;border-radius:50%;background:#E5675B;display:block;} .sim-win-bar .aw-dots i:nth-child(2){background:#E9B949;} .sim-win-bar .aw-dots i:nth-child(3){background:#5DBB63;}
.sim-win-t{flex:1;text-align:center;color:#4A4F66;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:60px;}
.sim-doc-h{padding:12px 16px;border-bottom:1px solid #E6E9F1;font-size:14px;display:grid;gap:4px;} .sim-doc-h span{display:inline-block;width:64px;color:#6A7088;font-size:12.5px;}
.sim-doc-b{padding:14px 16px;font-size:15px;line-height:1.6;white-space:normal;}
.sim-chat{padding:16px;background:#F4F6FB;} .sim-bub{background:#fff;border:1px solid #DCE0EA;border-radius:14px 14px 14px 4px;padding:10px 14px;max-width:80%;}
.sim-bub b{display:block;font-size:13px;color:#262B45;margin-bottom:4px;} .sim-bub p{margin:0;font-size:15px;line-height:1.5;} .sim-bub small{display:block;margin-top:6px;font-size:11.5px;color:#6A7088;}
.sim-ring{display:flex;flex-direction:column;align-items:center;gap:8px;padding:28px;background:#1E2340;color:#fff;} .sim-ring b{font-size:18px;} .sim-ring span{color:#C9CEE3;}
.sim-ring-ic{font-size:44px;animation:simRing 1s ease-in-out infinite;}
@keyframes simRing{0%,100%{transform:rotate(0)}20%{transform:rotate(-14deg)}40%{transform:rotate(14deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(8deg)}}
.sim-call{padding:12px 16px;background:#F4F6FB;} .sim-call-h{font-weight:800;color:#1E2340;margin-bottom:8px;} .sim-call-h span{font:600 12px 'IBM Plex Mono',monospace;color:#4A5070;margin-left:8px;}
.sim-call p{margin:0 0 8px;font-size:15px;line-height:1.5;background:#fff;border:1px solid #DCE0EA;border-radius:10px;padding:8px 12px;}
.sim-resp{background:#fff;border:1px solid #D9DEEA;border-radius:12px;padding:14px 16px;}
.sim-resp-wait{color:#4A5070;font-weight:600;}
.sim-opts{display:grid;gap:6px;margin-bottom:10px;}
.sim-opt{display:flex;gap:10px;align-items:flex-start;padding:9px 12px;border:1px solid #DCE0EA;border-radius:10px;cursor:pointer;font-size:14.5px;font-weight:600;}
.sim-opt:hover{border-color:#DB8437;} .sim-opt input{margin-top:3px;} .sim-opt:has(input:checked){border-color:#262B45;background:#EEF1FA;}
.sim-k2{display:block;margin-top:4px;}
.sim-resp textarea{width:100%;box-sizing:border-box;font:500 14.5px 'Inter',system-ui,sans-serif;border:1px solid #C9CEDC;border-radius:10px;padding:10px 12px;resize:vertical;}
.sim-resp-acts{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:8px;}
.sim-resp-done p{margin:0 0 6px;font-size:14.5px;} .sim-sent{background:#F4F6FB;border-radius:8px;padding:8px 12px;}
.sim-flash{position:absolute;top:70px;right:22px;z-index:2;background:#1E2340;color:#fff;border-left:5px solid #DB8437;border-radius:10px;padding:10px 16px;box-shadow:0 14px 30px rgba(0,0,0,.3);display:flex;flex-direction:column;animation:simIn .3s ease;}
.sim-flash span{font-size:13px;color:#C9CEE3;} @keyframes simIn{from{transform:translateY(-10px);opacity:0}to{transform:none;opacity:1}}
.sim-debrief{flex:1;overflow:auto;padding:22px 18px;max-width:1200px;width:100%;margin:0 auto;box-sizing:border-box;}
.sim-db-head{display:flex;justify-content:space-between;align-items:center;gap:16px;background:#fff;border-radius:14px;padding:18px 22px;margin-bottom:14px;}
.sim-db-head h2{margin:0 0 4px;font:700 24px 'Fraunces',Georgia,serif;color:#1E2340;} .sim-db-head p{margin:0;font-weight:600;color:#3B4160;}
.sim-db-score{text-align:center;border-radius:14px;padding:10px 18px;} .sim-db-score b{display:block;font-size:34px;} .sim-db-score span{font-weight:800;font-size:13px;}
.sim-hi{background:#DDF2E3;color:#0F4A28;} .sim-ok{background:#EDF7EF;color:#14532D;} .sim-lo{background:#FDE7E3;color:#8A1C10;}
.sim-db-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));gap:12px;}
.sim-db-ev{background:#fff !important;color:#1B1E2E !important;border:1px solid #E1E5EE;border-left:5px solid #9AA0B8;border-radius:12px;padding:12px 14px;}
.sim-db-ev.sim-lo{border-left-color:#C2410C;} .sim-db-ev.sim-hi,.sim-db-ev.sim-ok{border-left-color:#15803D;}
.sim-db-evh{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;} .sim-db-evh small{color:#4A5070;}
.sim-pill{font:800 13px 'Inter',sans-serif;border-radius:999px;padding:3px 9px;}
.sim-db-ev dl{margin:0;font-size:14px;line-height:1.5;} .sim-db-ev dt{font:800 11.5px 'Inter',sans-serif;text-transform:uppercase;letter-spacing:.04em;color:#A34E14;margin-top:6px;} .sim-db-ev dd{margin:1px 0 0;}
.sim-kp{display:inline-block;font-size:12.5px;font-weight:700;border-radius:999px;padding:2px 8px;margin:2px 2px 0 0;} .sim-kp.y{background:#DDF2E3;color:#14532D;} .sim-kp.n{background:#FDE7E3;color:#8A1C10;}
.sim-launch{display:flex;align-items:center;gap:16px;margin:0 0 16px;padding:14px 18px;border-radius:14px;background:linear-gradient(135deg,#1E2340,#3A4170);color:#fff;border:1px solid rgba(255,255,255,.12);box-shadow:0 14px 30px -20px rgba(20,24,48,.6);}
.sim-launch-ic{width:46px;height:46px;border-radius:50%;background:#DB8437;color:#241304;display:flex;align-items:center;justify-content:center;font-size:20px;flex:0 0 auto;}
.sim-launch-t{flex:1;min-width:0;} .sim-launch-t .sim-k{color:#F2B77E;margin:0 0 2px;} .sim-launch-t b{display:block;font:700 19px 'Fraunces',Georgia,serif;} .sim-launch-t span{font-size:13.5px;color:#D7DAEA;}
@media (max-width:1100px){ .sim-body{grid-template-columns:240px minmax(0,1fr);} .sim-side{display:none;} }
@media (max-width:760px){ .sim-body{grid-template-columns:1fr;grid-auto-rows:min-content;overflow:auto;} .sim-feed{max-height:200px;} .sim-brief-grid{grid-template-columns:1fr;} .sim-launch{flex-wrap:wrap;} .sim-brand em{display:none;} .sim-db-list{grid-template-columns:1fr;} }
`;
(document.head || document.documentElement).appendChild(st);
})();
