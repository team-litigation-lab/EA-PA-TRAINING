/* ============================================================
   🏅 Admin → Scorecard → Scorecards: every trainee's scores in one table, then each trainee's card,
   the Case Management course's way.

     • A spreadsheet of the batch: one row per trainee (Trainee, Batch, Registered, Days passed, Overall,
       Day 1 … Day 10). Each day cell shows the day's score, what it is made of (Knowledge Check, Practice Lab,
       Quick Checks, random task) and the slides reached, tinted against the 70% pass mark.
       Click a row (or pick a trainee) to open the card.
     • The trainee's card: a navy header with the Overall score and a status; 🎯 Focus on — every score under
       the pass mark with what happened, why, and what they could have done better (from the graders' notes);
       📅 Day scores — each day's score with "▸ What makes up this score": every activity, its score, and its
       feedback (strengths, gaps, next time) as the grader wrote it.
   The numbers are the same as the trainee's own 🏅 My Scorecard (EAPAScore.dayRow in js/eapa-scorecard.js),
   read from each trainee's saved progress (state.auditExtra, loaded by loadAuditExtras).
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined") return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const Q = s => E(String(s == null ? "" : s).replace(/\\/g, "\\\\").replace(/'/g, "\\'"));
const num = v => typeof v === "number" && !isNaN(v);
const avg = a => { const v = a.filter(num); return v.length ? v.reduce((x, y) => x + y, 0) / v.length : null; };
const P = v => num(v) ? Math.round(v) + "%" : "—";
const PASS = 70;
const tint = v => !num(v) ? "none" : v >= 85 ? "hi" : v >= PASS ? "ok" : "lo";
const nameOf = r => (typeof cleanName === "function" ? cleanName(r.name) : r.name) || r.id;
const tierOf = t => typeof displayTier === "function" ? displayTier(t) : (t || "");
const toolName = t => String((t && t.title) || "").replace(/\s*\(.*$/, "");
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const slideTotals = {};
function totalSlides(d){
  if(!(d.id in slideTotals)){ try{ slideTotals[d.id] = typeof buildDaySlides === "function" ? buildDaySlides(d).length : 0; }catch(err){ slideTotals[d.id] = 0; } }
  return slideTotals[d.id];
}

/* ---------- one trainee's numbers ---------- */
// (own: {data, fb} for a trainee's own scorecard, read from this browser instead of the admin's copy)
function sheet(rec, own){
  const x = own || (state.auditExtra || {})[rec.id];
  const data = (x && x.data) || {};
  const src = {dp: data["day-progress"] || rec.dayProgress || {}, pp: data["practice-progress"] || rec.practiceProgress || {}, qa: data["quick-check-answers"] || {}};
  const sp = data["slide-progress"] || {};
  const log = Array.isArray(data["work-log"]) ? data["work-log"] : [];
  const dayRow = window.EAPAScore && EAPAScore.dayRow;
  const days = DAYS.map(d => {
    const r = dayRow ? dayRow(d.id, src) : {dayId: d.id, d, average: null, active: false, tools: []};
    const n = totalSlides(d);
    const seen = Math.min(n, (sp[d.id] || 0) + ((sp[d.id] || src.dp[d.id]) ? 1 : 0));
    const work = log.filter(e => e && e.dayId === d.id && e.kind !== "quiz");
    const quiz = log.filter(e => e && e.dayId === d.id && e.kind === "quiz").slice(-1)[0] || null;
    // the day's Practice Lab outputs count too: every graded lab run in the work log, best per lab, alongside the
    // saved Practice Lab bests (a lab with only a graded output, and no saved best, still scores)
    const tools = (r.tools || []).map(t => Object.assign({}, t));
    work.filter(e => e.kind === "lab" && num(e.score)).forEach(e => {
      const key = e.toolId || e.label;
      let t = tools.find(x => x.t && (x.t.id === key || (!e.toolId && x.t.title === e.label)));
      if(!t){ t = {t: {id: key, title: e.label || "Practice Lab"}, runs: 0, best: null}; tools.push(t); }
      t.best = num(t.best) ? Math.max(t.best, e.score) : e.score;
      t.runs = Math.max(t.runs || 0, work.filter(x => x.kind === "lab" && (x.toolId || x.label) === key).length);
    });
    const practice = avg(tools.map(t => t.best));
    const parts = [r.kc, r.qc, practice, r.task].filter(num);
    return Object.assign({}, r, {d, n, seen, work, quiz, tools, practice, average: parts.length ? avg(parts) : null,
      active: r.active || seen > 0 || work.length > 0});
  });
  const scored = days.filter(r => num(r.average));
  const overall = scored.length ? Math.round(avg(scored.map(r => r.average))) : null;
  return {rec, loaded: !!x, days, overall, passedN: days.filter(r => r.passed).length, fb: (x && x.fb) || {}};
}
function status(s){
  if(!num(s.overall)) return {t: "Not started", c: "none"};
  if(s.overall >= 85) return {t: "Excellent", c: "hi"};
  if(s.overall >= PASS) return {t: "Passing", c: "ok"};
  return {t: "Needs Improvement", c: "lo"};
}

/* ---------- 🎯 Focus on: everything under the pass mark ---------- */
function focusItems(s){
  const out = [];
  s.days.forEach(r => {
    const D = `Day ${r.dayId}`;
    if(num(r.kc) && r.kc < PASS){
      const missed = (r.quiz && r.quiz.missed) || [];
      out.push({score: r.kc, day: r.dayId, title: `${D} · Knowledge Check`,
        what: `Best score ${r.kc}% after ${r.tries} attempt${r.tries === 1 ? "" : "s"} (${PASS}% passes).`,
        why: missed.length ? `Missed: ${missed.slice(0, 3).join(" · ")}${missed.length > 3 ? ` · and ${missed.length - 3} more` : ""}` : "Some of the day's key points didn't stick yet.",
        better: `Go back through Day ${r.dayId}'s slides on the questions missed, then retake the Knowledge Check.`});
    }
    // each graded activity's latest run, under the pass mark
    const latest = {};
    r.work.forEach(e => { if(num(e.score)) latest[e.toolId || e.label] = e; });
    Object.values(latest).forEach(e => {
      if(e.score >= PASS) return;
      out.push({score: e.score, day: r.dayId, title: `${D} · ${e.label || (e.kind === "roleplay" ? "Roleplay" : "Practice Lab")}`,
        what: `Scored ${e.score}%${e.tier ? ` (${tierOf(e.tier)})` : ""}.`,
        why: (e.gaps || []).length ? e.gaps.join(" · ") : "The grader didn't list specific gaps.",
        better: (e.growth || []).length ? e.growth.join(" · ") : "Run it again using the grader's notes."});
    });
    // a Practice Lab best below the pass mark with no graded note saved for it
    r.tools.filter(t => num(t.best) && t.best < PASS && !r.work.some(e => e.toolId === t.t.id)).forEach(t => {
      out.push({score: t.best, day: r.dayId, title: `${D} · ${toolName(t.t)}`, what: `Best of ${t.runs} run${t.runs === 1 ? "" : "s"}: ${t.best}%.`,
        why: "Below the pass mark — the grader's notes are on the trainee's last run.", better: "Another run, working through the grader's notes point by point."});
    });
    if(num(r.qc) && r.qcTotal && r.qc < PASS) out.push({score: r.qc, day: r.dayId, title: `${D} · Quick Checks`, what: `${r.qcRight} of ${r.qcTotal} right.`,
      why: "Answered before the point landed on the slide.", better: "Pause on each Quick Check and re-read the slide before it."});
    if(num(r.task) && r.task < PASS) out.push({score: r.task, day: r.dayId, title: `${D} · Random task`, what: `Scored ${r.task}%.`,
      why: "The interruption wasn't acknowledged, planned and closed out in time.", better: "Acknowledge it fast, jot a three-step plan, then resolve it before going back to the lesson."});
  });
  return out.sort((a, b) => a.score - b.score);
}

/* ---------- the table ---------- */
function dayCell(r){
  if(!r.active) return `<td class="eacm-c eacm-none" title="Day ${r.dayId}: not started">—</td>`;
  // the day's score, then what it is made of in a small table inside the cell
  const line = (k, v, t) => `<tr><th>${k}</th><td class="${t ? "eacm-m-" + t : ""}">${v}</td></tr>`;
  const rows = [
    line("KC", num(r.kc) ? r.kc + "%" : "—", num(r.kc) ? tint(r.kc) : ""),
    line("Lab", num(r.practice) ? Math.round(r.practice) + "%" : "—", num(r.practice) ? tint(r.practice) : ""),
    r.qcTotal ? line("QC", `${r.qcRight}/${r.qcTotal}`, tint(r.qc)) : "",
    num(r.task) ? line("Task", r.task + "%", tint(r.task)) : "",
    line("Slides", `${r.seen}/${r.n}`, "")].join("");
  const tip = [`Day ${r.dayId} — ${r.d.title}`, `Score ${P(r.average)}${r.passed ? " · Knowledge Check passed" : ""}`,
    ...r.tools.filter(t => num(t.best)).map(t => `Practice Lab · ${toolName(t.t)}: ${t.best}%`), ...r.work.slice(-3).map(e => `${e.label}: ${e.score}%`)].join("\n");
  return `<td class="eacm-c eacm-${tint(r.average)}" title="${E(tip)}"><b>${P(r.average)}${r.passed ? ' <span class="eacm-tick">✓</span>' : ""}</b>
    <table class="eacm-mini">${rows}</table></td>`;
}
function table(rows){
  const cols = ["Trainee", "Batch", "Registered", "Days passed", "Overall", ...DAYS.map(d => `Day ${d.id} %`)];
  const sel = state.eacmId;
  return `<div class="eacm-sheet"><div class="eacm-scroll"><table class="eacm-t">
      <thead><tr class="eacm-letters"><th></th>${cols.map((_, i) => `<th>${LETTERS[i] || ""}</th>`).join("")}</tr>
      <tr><th class="eacm-rn"></th>${cols.map(c => `<th>${E(c)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((s, i) => {
        const r = s.rec, st = status(s);
        return `<tr class="${sel === r.id ? "eacm-sel" : ""}" onclick="EAPACM.open('${Q(r.id)}')">
          <td class="eacm-rn">${i + 1}</td>
          <td class="eacm-name"><b>${E(nameOf(r))}</b><small class="eacm-st eacm-${st.c}">${st.t}</small></td>
          <td>${E(typeof batchLabel === "function" ? batchLabel(batchKey(r)) : r.batch || "")}</td>
          <td>${r.registeredAt ? E(new Date(r.registeredAt).toLocaleDateString()) : "—"}</td>
          <td class="eacm-mid">${s.passedN} / ${DAYS.length}</td>
          <td class="eacm-c eacm-${tint(s.overall)}"><b>${P(s.overall)}</b></td>
          ${s.days.map(dayCell).join("")}</tr>`;
      }).join("") || `<tr><td colspan="${cols.length + 1}" class="eacm-empty">No trainees in this batch yet.</td></tr>`}</tbody>
    </table></div></div>`;
}

/* ---------- the trainee's card ---------- */
function list(label, a, cls){ return a && a.length ? `<div class="eacm-fbk ${cls}"><b>${label}</b><ul>${a.map(x => `<li>${E(x)}</li>`).join("")}</ul></div>` : ""; }
function makeup(r, fb){
  const L = [];
  if(num(r.kc)) L.push(`<li><span class="eacm-pill eacm-${tint(r.kc)}">${r.kc}%</span><div><b>Knowledge Check</b> — best of ${r.tries} attempt${r.tries === 1 ? "" : "s"}${num(r.firstTry) && r.tries > 1 ? ` (first try ${r.firstTry}%)` : ""}${r.passed ? " · passed" : ` · ${PASS}% passes`}
    ${r.quiz && (r.quiz.missed || []).length ? `<div class="eacm-sub">Missed on the latest try: ${E(r.quiz.missed.join(" · "))}</div>` : ""}</div></li>`);
  else L.push(`<li><span class="eacm-pill eacm-none">—</span><div><b>Knowledge Check</b> — not taken yet</div></li>`);
  if(r.qcTotal) L.push(`<li><span class="eacm-pill eacm-${tint(r.qc)}">${Math.round(r.qc)}%</span><div><b>Quick Checks</b> — ${r.qcRight} of ${r.qcTotal} right</div></li>`);
  r.tools.forEach(t => L.push(`<li><span class="eacm-pill eacm-${tint(t.best)}">${P(t.best)}</span><div><b>Practice Lab · ${E(toolName(t.t))}</b> — ${t.runs ? `best of ${t.runs} run${t.runs === 1 ? "" : "s"}` : "not run yet"}</div></li>`));
  if(num(r.task)) L.push(`<li><span class="eacm-pill eacm-${tint(r.task)}">${r.task}%</span><div><b>Random task</b></div></li>`);
  L.push(`<li><span class="eacm-pill eacm-none">${r.seen}/${r.n}</span><div><b>Slides reached</b></div></li>`);
  const acts = r.work.slice().reverse();
  // a Practice Lab scored before its notes were kept: say so, rather than leave the score unexplained
  const bare = r.tools.filter(t => num(t.best) && !r.work.some(e => e.toolId === (t.t && t.t.id)));
  const f = fb[r.dayId];
  return `<div class="eacm-mk"><p class="eacm-mk-h">The day's score is the average of the Knowledge Check, Quick Checks, Practice Lab and random task.</p><ul class="eacm-parts">${L.join("")}</ul>
    ${acts.length ? `<p class="eacm-mk-h">Each activity and its feedback</p>${acts.map(e => `<div class="eacm-act">
      <div class="eacm-act-h"><span class="eacm-pill eacm-${tint(e.score)}">${P(e.score)}</span><b>${E(e.label || (e.kind === "roleplay" ? "Roleplay" : "Practice Lab"))}</b>
        <small>${e.kind === "roleplay" ? "Live Roleplay" : "Practice Lab"}${e.tier ? ` · ${E(tierOf(e.tier))}` : ""}${e.at ? ` · ${E(new Date(e.at).toLocaleString())}` : ""}</small></div>
      <div class="eacm-fbks">${list("✓ Strengths", e.strengths, "s")}${list("△ Gaps", e.gaps, "g")}${list("→ Next time", e.growth, "n")}</div>
      ${e.excerpt ? `<details class="eacm-ex"><summary>Their answer</summary><p>${E(e.excerpt)}</p></details>` : ""}</div>`).join("")}` : ""}
    ${!acts.length && bare.length ? `<p class="eacm-mk-h">Each activity and its feedback</p>` : ""}${bare.map(t => `<div class="eacm-act"><div class="eacm-act-h"><span class="eacm-pill eacm-${tint(t.best)}">${P(t.best)}</span><b>${E(toolName(t.t))}</b><small>Practice Lab · best of ${t.runs} run${t.runs === 1 ? "" : "s"}</small></div>
      <p class="eacm-sub">${t.best >= PASS ? "Passed" : "Below the " + PASS + "% pass mark"}. This run was scored before the lab kept its notes, so there is no breakdown for it — the next run records what went well and what to do better.</p></div>`).join("")}
    ${f ? `<div class="eacm-tfb"><b>✍ Trainer feedback</b> <small>${f.status === "sent" ? "Sent" + (f.readAt ? " · read" : "") : "Draft — not sent"}${f.rating ? ` · ${E(f.rating)}` : ""}</small>${f.summary ? `<p>${E(f.summary)}</p>` : ""}${f.mine && typeof openDayFeedback === "function" ? `<button type="button" class="eacm-more" onclick="openDayFeedback(${r.dayId})">Read the full feedback →</button>` : ""}</div>` : ""}</div>`;
}
function card(s, you){
  const r = s.rec, st = status(s), items = focusItems(s);
  const SHOW = 4;
  const open = state.eacmOpen || (state.eacmOpen = {});
  const all = !!open["focus:" + r.id];
  const shown = all ? items : items.slice(0, SHOW);
  return `<div class="eacm-card" id="eacmCard">
    <div class="eacm-card-h"><div><p class="eacm-k">${you ? "Your scorecard" : "Trainee scorecard"}</p><h3>${E(nameOf(r))}</h3>
      <p class="eacm-k2">${E(typeof batchLabel === "function" ? batchLabel(batchKey(r)) : r.batch || "")}${r.registeredAt ? ` · registered ${E(new Date(r.registeredAt).toLocaleDateString())}` : ""} · ${s.passedN} of ${DAYS.length} days passed</p></div>
      <div class="eacm-card-chips"><span class="eacm-big eacm-${tint(s.overall)}">Overall ${P(s.overall)}</span><span class="eacm-st2 eacm-${st.c}">${st.t}</span><span class="eacm-pm" title="Every score is measured against the ${PASS}% pass mark">Passing score ${PASS}%</span></div></div>
    <div class="eacm-sec"><h4>🎯 Focus on <small>(below the ${PASS}% pass mark, lowest first)</small></h4>
      ${items.length ? `<ol class="eacm-focus">${shown.map(it => `<li><div class="eacm-fh"><span class="eacm-pill eacm-${tint(it.score)}">${Math.round(it.score)}%</span><b>${E(it.title)}</b></div>
        <dl><dt>What happened</dt><dd>${E(it.what)}</dd><dt>Why</dt><dd>${E(it.why)}</dd><dt>What you could have done better</dt><dd>${E(it.better)}</dd></dl></li>`).join("")}</ol>
        ${items.length > SHOW ? `<button type="button" class="eacm-more" onclick="EAPACM.toggle('focus:${Q(r.id)}')">${all ? "Show fewer" : `…and ${items.length - SHOW} more below the pass mark — show all`}</button>` : ""}`
        : `<p class="eacm-okp">${num(s.overall) ? "Nothing below the pass mark — every score so far is " + PASS + "% or better." : "Nothing scored yet."}</p>`}</div>
    <div class="eacm-sec"><h4>📅 Day scores</h4>
      <table class="eacm-days"><thead><tr><th>Day</th><th>Score</th><th>Breakdown</th></tr></thead><tbody>
        <tr class="eacm-ov"><td><b>Overall</b></td><td class="eacm-c eacm-${tint(s.overall)}"><b>${P(s.overall)}</b></td><td>Average of the days scored so far · ${s.passedN} of ${DAYS.length} Knowledge Checks passed</td></tr>
        ${s.days.map(d => {
          const key = `day:${r.id}:${d.dayId}`, isOpen = !!open[key];
          const br = [num(d.kc) ? `Knowledge Check ${d.kc}%` : "", num(d.practice) ? `Practice Lab ${Math.round(d.practice)}%` : "", d.qcTotal ? `Quick Checks ${d.qcRight}/${d.qcTotal}` : "", num(d.task) ? `Random task ${d.task}%` : "", `Slides ${d.seen}/${d.n}`].filter(Boolean);
          return `<tr><td><b>Day ${d.dayId}</b><small>${E(d.d.title)}</small></td><td class="eacm-c eacm-${tint(d.average)}"><b>${d.active ? P(d.average) : "—"}</b>${d.passed ? '<small class="eacm-tick">✓ passed</small>' : num(d.average) ? `<small>${d.average >= PASS ? "✓ passing" : "below " + PASS + "%"}</small>` : ""}</td>
            <td>${d.active ? E(br.join(" · ")) : "Not started"}
              ${d.active ? `<details class="eacm-why" ${isOpen ? "open" : ""} ontoggle="EAPACM.mark('${Q(key)}', this.open)"><summary>What makes up this score${d.work.length ? ` · ${d.work.length} graded activit${d.work.length === 1 ? "y" : "ies"}` : ""}</summary>${makeup(d, s.fb)}</details>` : ""}</td></tr>`;
        }).join("")}
      </tbody></table></div></div>`;
}

/* ---------- the section ---------- */
function members(k){
  const m = typeof batchMembers === "function" ? batchMembers(k) : (state.adminData || []).filter(r => batchKey(r) === k);
  return m.slice().sort((a, b) => nameOf(a).localeCompare(nameOf(b)));
}
let waiting = false;
function ensureLoaded(recs){
  if(typeof loadAuditExtras !== "function") return;
  const stale = recs.some(r => !state.auditExtra[r.id] || Date.now() - state.auditExtra[r.id].at > 60000);
  if(!stale || waiting) return;
  waiting = true;
  setTimeout(async function tick(){
    if(state.auditExtraLoading){ setTimeout(tick, 400); return; }
    try{ await loadAuditExtras(); }catch(err){}
    waiting = false;
    redraw();
  }, 0);
}
function redraw(){
  const host = document.getElementById("eacmHost");
  if(!host || state.view !== "admin" || (typeof isTyping === "function" && isTyping())) return;
  host.innerHTML = body(state.scFolder);
}
function body(k){
  const recs = members(k);
  ensureLoaded(recs);
  const rows = recs.map(r => sheet(r));
  if(state.eacmId && !rows.some(s => s.rec.id === state.eacmId)) state.eacmId = null;
  const passing = rows.filter(s => num(s.overall) && s.overall >= PASS).length;
  const pick = rows.find(s => s.rec.id === state.eacmId);
  const loading = rows.some(s => !s.loaded);
  // (the Trainee picker and ⬇ Scores only sit in the Scorecard's navy banner, beside Batch: EAPACM.picker)
  return `${loading ? `<p class="eacm-loading">Loading saved work…</p>` : ""}
    ${table(rows)}
    ${pick ? card(pick) : `<p class="eacm-hint">Pick a trainee above, or click their row, to see their full scorecard: what to focus on and the feedback on each activity.</p>`}`;
}
function section(k){ return `<div id="eacmHost">${body(k)}</div>`; }

// the Trainee picker for the Scorecard's banner, beside Batch
function picker(k){
  const recs = members(k);
  return `<label class="eash-f">Trainee <select id="eacmPick" onchange="EAPACM.open(this.value)"><option value="">— Pick a trainee —</option>${recs.map(r => `<option value="${E(r.id)}" ${r.id === state.eacmId ? "selected" : ""}>${E(nameOf(r))}</option>`).join("")}</select></label>`;
}
window.EAPACM = {
  section, picker,
  open(id){ state.eacmId = id || null; const pk = document.getElementById("eacmPick"); if(pk) pk.value = id || ""; redraw(); if(id) setTimeout(() => { const c = document.getElementById("eacmCard"); if(c) c.scrollIntoView({behavior: "smooth", block: "start"}); }, 30); },
  toggle(key){ const o = state.eacmOpen || (state.eacmOpen = {}); o[key] = !o[key]; if(state.view === "scorecard") render(); else redraw(); },
  // the trainee's own scorecard (🏅 My Scorecard): the same card the admin sees, from this browser's progress, with
  // only the trainer feedback that was sent to them
  mine(){
    const fb = {}; Object.entries(state.myFeedback || {}).forEach(([k, v]) => { if(v) fb[k] = Object.assign({status: "sent"}, v, {mine: true}); });
    const data = {"day-progress": state.progress || {}, "practice-progress": state.practiceProgress || {}, "quick-check-answers": state.qcAnswers || {},
      "slide-progress": state.slideProgress || {}, "work-log": state.workLog || []};
    const rec = {id: state.traineeId || "__me", name: state.traineeName || "You", batch: state.traineeBatch || "", registeredAt: state.traineeRegisteredAt};
    return card(sheet(rec, {data, fb}), true);
  },
  mark(key, v){ const o = state.eacmOpen || (state.eacmOpen = {}); o[key] = !!v; },
  csv(){
    const k = state.scFolder, rows = members(k).map(r => sheet(r));
    if(!rows.length){ if(typeof toast === "function") toast("No trainees in this batch."); return; }
    const q = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
    const head = ["Trainee", "Batch", "Registered", "Days passed", "Overall %", "Status", ...DAYS.map(d => `Day ${d.id} %`)];
    const lines = rows.map(s => [nameOf(s.rec), typeof batchLabel === "function" ? batchLabel(batchKey(s.rec)) : s.rec.batch, s.rec.registeredAt ? String(s.rec.registeredAt).slice(0, 10) : "",
      `${s.passedN}/${DAYS.length}`, num(s.overall) ? s.overall : "", status(s).t, ...s.days.map(d => num(d.average) ? Math.round(d.average) : "")].map(q).join(","));
    const name = `EA-PA-Scores-${String(typeof batchLabel === "function" ? batchLabel(k) : k).replace(/[^\w-]+/g, "_")}.csv`;
    if(typeof saveBlob === "function") saveBlob(new Blob(["﻿" + [head.map(q).join(","), ...lines].join("\n")], {type: "text/csv;charset=utf-8"}), name);
    if(typeof toast === "function") toast(`Downloaded scores for ${rows.length} trainee${rows.length === 1 ? "" : "s"}.`);
  }
};

const st = document.createElement("style");
st.textContent = `
.eacm-loading{margin:0 0 10px;font:700 13px "Inter",system-ui,sans-serif;color:#3B4160;}
.eacm-f{font:800 14px 'Inter',system-ui,sans-serif;color:#1E2340;display:flex;align-items:center;gap:8px;}
.eacm-f select{font:700 14px 'Inter',system-ui,sans-serif;padding:7px 10px;border:1px solid #C9CEDC;border-radius:8px;background:#fff;min-width:240px;}
.eacm-chip{font:800 13px 'Inter',system-ui,sans-serif;background:#EEF1FA;color:#1E2340;border-radius:999px;padding:5px 12px;}
.eacm-chip.eacm-ok{background:#E3F4E8;color:#14532D;}
.eacm-btn{margin-left:auto;background:#262B45 !important;color:#fff !important;border:1px solid #262B45 !important;font-weight:800 !important;}
.eacm-sheet{border:1px solid #CFD5E3;border-radius:10px;overflow:hidden;background:#fff;}
.eacm-sheet-h{display:flex;align-items:baseline;gap:10px;padding:10px 14px;background:#F4F6FB;border-bottom:1px solid #CFD5E3;font:800 16px 'Inter',system-ui,sans-serif;color:#1E2340;}
.eacm-sheet-h span{font-size:12.5px;color:#3B4160;background:#fff;border:1px solid #CFD5E3;border-radius:999px;padding:2px 9px;}
.eacm-sheet-h em{margin-left:auto;font:600 12.5px 'Inter',system-ui,sans-serif;color:#3B4160;font-style:normal;}
.eacm-scroll{overflow:auto;max-height:62vh;}
.eacm-t{border-collapse:separate;border-spacing:0;width:100%;font:600 14px 'Inter',system-ui,sans-serif;color:#141A2E;}
.eacm-t th,.eacm-t td{border-right:1px solid #E1E5EE;border-bottom:1px solid #E1E5EE;padding:8px 10px;text-align:left;vertical-align:top;white-space:nowrap;}
.eacm-t thead th{position:sticky;background:#262B45;color:#fff;font-size:12.5px;z-index:2;}
.eacm-t thead tr:first-child th{top:0;background:#EEF1FA;color:#5A6080;font:700 11px 'IBM Plex Mono',monospace;text-align:center;padding:3px;}
.eacm-t thead tr:last-child th{top:21px;border-bottom:2px solid #DB8437;}
.eacm-t .eacm-rn{background:#EEF1FA;color:#5A6080;font:700 11.5px 'IBM Plex Mono',monospace;text-align:center;width:30px;padding:8px 4px;}
.eacm-t thead tr:last-child th.eacm-rn{background:#262B45;}
.eacm-t tbody tr{cursor:pointer;}
.eacm-t tbody tr:hover td:not(.eacm-c){background:#F8F9FC;}
.eacm-t tbody tr.eacm-sel td.eacm-name,.eacm-t tbody tr.eacm-sel td.eacm-rn{box-shadow:inset 4px 0 0 #DB8437;background:#FFF6EC;}
.eacm-name b{display:block;font-size:14.5px;color:#1E2340;}
.eacm-st{display:inline-block;margin-top:3px;font-size:11.5px;font-weight:800;padding:1px 7px;border-radius:999px;}
.eacm-mid{text-align:center !important;}
.eacm-c{text-align:center !important;min-width:84px;}
/* the scores table takes the window's full width (as the Client Profile and Practice Lab do) */
@media (min-width:1100px){ body:has(#eacmHost) main:not(.main-dash){max-width:none;padding-left:24px;padding-right:24px;} }
.eacm-c b{display:block;font-size:15px;}
.eacm-c small{display:block;font-size:11.5px;font-weight:600;color:#3B4160;line-height:1.35;}
.eacm-hi{background:#DDF2E3 !important;color:#0F4A28;}
.eacm-ok{background:#EDF7EF !important;color:#14532D;}
.eacm-lo{background:#FDE7E3 !important;color:#8A1C10;}
.eacm-none{background:#F5F6F9 !important;color:#6A7088;}
.eacm-tick{color:#15803D;font-weight:800;}
.eacm-mini{margin:5px auto 0;border-collapse:collapse;font-size:11.5px;background:rgba(255,255,255,.7);border-radius:6px;overflow:hidden;min-width:96px;}
.eacm-mini th,.eacm-mini td{border:1px solid rgba(38,43,69,.14) !important;padding:2px 6px !important;white-space:nowrap;line-height:1.3;}
.eacm-mini th{font-weight:700;color:#3B4160;text-align:left !important;background:rgba(238,241,250,.8);}
.eacm-mini td{font-weight:800;text-align:right !important;color:#1E2340;}
.eacm-mini td.eacm-m-lo{color:#A3260F;} .eacm-mini td.eacm-m-hi,.eacm-mini td.eacm-m-ok{color:#14532D;}
.eacm-empty{text-align:center !important;color:#3B4160;padding:20px !important;}
.eacm-hint{margin:14px 2px 0;font:600 14px 'Inter',system-ui,sans-serif;color:#3B4160;}
.eacm-card{margin-top:16px;border:1px solid #CFD5E3;border-radius:14px;overflow:hidden;background:#fff;scroll-margin-top:90px;}
.eacm-card-h{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;padding:16px 20px;background:linear-gradient(135deg,#1E2340,#33395E);color:#fff;border-bottom:3px solid #DB8437;}
.eacm-card-h h3{margin:2px 0;font:700 24px 'Fraunces',Georgia,serif;color:#fff;}
.eacm-k{margin:0;font:700 11.5px 'IBM Plex Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:#F2B77E;}
.eacm-k2{margin:0;font:600 13.5px 'Inter',system-ui,sans-serif;color:#E3E6F2;}
.eacm-card-chips{display:flex;gap:8px;align-items:center;}
.eacm-big{font:800 17px 'Inter',system-ui,sans-serif;border-radius:999px;padding:6px 14px;}
.eacm-pm{font:800 13px 'Inter',system-ui,sans-serif;border-radius:999px;padding:6px 12px;background:rgba(255,255,255,.12);color:#F2D28F;border:1px solid rgba(242,183,126,.55);}
.eacm-st2{font:800 14px 'Inter',system-ui,sans-serif;border-radius:999px;padding:6px 12px;}
.eacm-sec{padding:16px 20px;border-top:1px solid #E4E7EF;}
.eacm-sec h4{margin:0 0 10px;font:800 17px 'Inter',system-ui,sans-serif;color:#1E2340;}
.eacm-sec h4 small{font-size:13px;font-weight:600;color:#3B4160;}
.eacm-focus{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:10px;}
.eacm-focus li{border:1px solid #F1C9C1;border-left:4px solid #C2410C;border-radius:10px;padding:10px 12px;background:#FFFAF8;}
.eacm-fh{display:flex;align-items:center;gap:8px;margin-bottom:6px;font:800 14.5px 'Inter',system-ui,sans-serif;color:#1E2340;}
.eacm-focus dl{margin:0;font:600 13.5px/1.45 'Inter',system-ui,sans-serif;color:#262B45;}
.eacm-focus dt{font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:#A34E14;margin-top:5px;}
.eacm-focus dd{margin:1px 0 0;}
.eacm-more{margin-top:10px;background:none;border:0;padding:0;font:800 14px 'Inter',system-ui,sans-serif;color:#A34E14;cursor:pointer;text-decoration:underline;}
.eacm-okp{margin:0;font:700 14px "Inter",system-ui,sans-serif;color:#14532D;}
.eacm-pill{display:inline-block;min-width:48px;text-align:center;font:800 13px 'Inter',system-ui,sans-serif;border-radius:999px;padding:3px 8px;}
.eacm-days{width:100%;border-collapse:collapse;font:600 14px 'Inter',system-ui,sans-serif;color:#141A2E;}
.eacm-days th{background:#262B45;color:#fff;font-size:12.5px;text-align:left;padding:9px 12px;border-bottom:2px solid #DB8437;}
.eacm-days td{border-bottom:1px solid #E4E7EF;padding:10px 12px;vertical-align:top;}
.eacm-days td:first-child{width:28%;}
.eacm-days td:first-child small{display:block;font-size:12.5px;color:#3B4160;font-weight:600;}
.eacm-days td.eacm-c{width:100px;}
.eacm-days tr.eacm-ov td{background:#F4F6FB;}
.eacm-why{margin-top:6px;}
.eacm-why>summary{cursor:pointer;font:800 13.5px 'Inter',system-ui,sans-serif;color:#A34E14;}
.eacm-mk{margin-top:8px;padding:10px 12px;border:1px solid #E1E5EE;border-radius:10px;background:#FBFCFE;}
.eacm-mk-h{margin:0 0 6px;font:800 12.5px 'Inter',system-ui,sans-serif;color:#3B4160;text-transform:uppercase;letter-spacing:.04em;}
.eacm-parts{list-style:none;margin:0 0 10px;padding:0;display:grid;gap:6px;}
.eacm-parts li{display:flex;gap:10px;align-items:flex-start;}
.eacm-sub{font-size:12.5px;color:#3B4160;margin-top:2px;}
.eacm-act{border:1px solid #E1E5EE;border-radius:10px;padding:9px 11px;background:#fff;margin-bottom:8px;}
.eacm-act-h{display:flex;flex-wrap:wrap;align-items:center;gap:8px;}
.eacm-act-h small{color:#3B4160;font-size:12.5px;}
.eacm-fbks{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;margin-top:6px;}
.eacm-fbk{font-size:13px;line-height:1.4;border-radius:8px;padding:6px 9px;}
.eacm-fbk ul{margin:3px 0 0;padding-left:16px;}
.eacm-fbk.s{background:#EDF7EF;}.eacm-fbk.g{background:#FDEEEA;}.eacm-fbk.n{background:#EEF1FA;}
.eacm-ex summary{cursor:pointer;font-size:12.5px;font-weight:800;color:#3B4160;margin-top:6px;}
.eacm-ex p{font-size:13px;color:#262B45;white-space:pre-wrap;margin:4px 0 0;}
.eacm-tfb{margin-top:6px;padding:8px 10px;border-left:3px solid #DB8437;background:#FFF6EC;border-radius:6px;font-size:13.5px;}
.eacm-tfb p{margin:4px 0 0;}
@media (max-width:900px){ .eacm-btn{margin-left:0;} .eacm-days td:first-child{width:auto;} .eacm-focus{grid-template-columns:1fr;} }
`;
(document.head || document.documentElement).appendChild(st);
})();
