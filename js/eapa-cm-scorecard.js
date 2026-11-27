/* ============================================================
   🏅 Admin → Scorecard → Scorecards: every trainee's scores in one table, then each trainee's card,
   the Case Management course's way.

     • A spreadsheet of the batch: one row per trainee (Trainee, Batch, Registered, Days passed, Overall,
       Day 1 … Day 10). Each day cell shows the day's score, what it is made of (Knowledge Check, Practice Lab,
       Quick Checks, random task) and the slides reached, tinted against the 70% pass mark.
       Click a row (or pick a trainee) to open the card.
     • The trainee's card: a navy header (Overall, status, days passed); 💬 Feedback on each activity first (what a trainer
       checks most); then 📅 Day scores — one line of numbers per day (Knowledge Check, Practice Lab, Quick Checks, random task, slides);
       In the feedback: 🎯 Focus on (every score under the pass mark, one line each, linking to its day), then each
       day folded: its why-this-score table and the trainer's feedback; then how the scores are worked out.
       Each fact is shown once.
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
/* ---------- "What makes up this score": one table row per part of the day's score ----------
   As on the Standard and Case Management courses: for each part (Knowledge Check, Quick Checks, each Practice Lab,
   the random task, and any roleplay) the score, why it scored that way, what was done great, what was wrong and
   what could have been done better, from the grader's notes. A run saved with a score only (before the lab kept
   its notes) is explained from what was saved, and says so, rather than left blank. */
const SUBS = {accuracy: "Accuracy", presence: "Executive presence", risk: "Risk & confidentiality", efficiency: "Efficiency",
  bluf: "BLUF", composure: "Composure", act: "ACT protocol"};
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const level = v => v >= 85 ? "Proficient" : v >= PASS ? "Developing" : "Requires Remediation";
const passLine = v => v >= PASS ? `${PASS}% passes: this passes.` : `Below the ${PASS}% pass mark.`;
function subsLine(e){
  const xs = Object.entries((e && e.subs) || {}).filter(([k, v]) => SUBS[k] && num(v)).map(([k, v]) => `${SUBS[k]} ${v}%`);
  return xs.length ? `By area: ${xs.join(" · ")}.` : "";
}
// the run whose notes explain a score: the run that got it (the best), else the best-scoring run, else the latest
function runFor(runs, score){
  const hit = runs.filter(e => num(e.score) && e.score === score);
  if(hit.length) return hit[hit.length - 1];
  return runs.slice().sort((x, y) => (y.score || 0) - (x.score || 0))[0] || null;
}
function scoreRows(r){
  const rows = [], D = `Day ${r.dayId}`;
  // Knowledge Check
  if(num(r.kc)){
    const q = r.quiz, missed = (q && q.missed) || [], hasN = q && num(q.correct) && num(q.total);
    rows.push({name: "Knowledge Check", sub: `best of ${plural(r.tries, "attempt")}`, score: r.kc,
      why: [`Best score of ${plural(r.tries, "attempt")}${num(r.firstTry) && r.tries > 1 ? ` (first try ${r.firstTry}%)` : ""}.`,
        hasN ? `Latest try: ${q.correct} of ${q.total} questions right.` : "", passLine(r.kc)],
      great: r.kc >= 90 ? ["Knew the day's key points cold."] : r.kc >= PASS ? ["Got most of the day's key points right."]
        : hasN && q.correct ? [`${q.correct} of ${q.total} questions right.`] : [],
      wrong: missed.length ? missed.map(m => `Missed: ${m}`) : r.kc < 100 ? [`${100 - r.kc}% of the questions answered wrong (which ones wasn't recorded for this attempt).`] : [],
      better: r.kc >= 100 ? [] : [`Re-read ${D}'s slides on ${missed.length ? "the questions missed" : "the points missed"}, then retake the Knowledge Check${r.kc >= PASS ? " to lift the score" : ""}.`]});
  } else rows.push({name: "Knowledge Check", sub: "not taken yet", score: null, why: ["Not taken yet, so it isn't in the day's score."], great: [], wrong: [],
    better: [`Finish ${D}'s slides, then take its Knowledge Check (${PASS}% passes).`]});
  // Quick Checks
  if(r.qcTotal){
    const bad = r.qcTotal - r.qcRight;
    rows.push({name: "Quick Checks", sub: "on the slides", score: r.qc,
      why: [`${r.qcRight} of ${r.qcTotal} Quick Checks on ${D}'s slides answered right.`, passLine(r.qc)],
      great: r.qcRight ? [`${plural(r.qcRight, "Quick Check")} answered right.`] : [],
      wrong: bad ? [`${plural(bad, "Quick Check")} answered wrong.`] : [],
      better: bad ? ["Pause on each Quick Check and re-read the slide it follows before answering."] : []});
  }
  // each Practice Lab
  r.tools.forEach(t => {
    const id = t.t && t.t.id, name = toolName(t.t);
    const runs = r.work.filter(e => e.kind === "lab" && num(e.score) && (e.toolId === id || (!e.toolId && e.label === (t.t && t.t.title))));
    if(!num(t.best)){ rows.push({name, sub: "Practice Lab · not run yet", score: null, why: ["Not run yet, so it isn't in the day's score."], great: [], wrong: [],
      better: [`Open ${name} in the Practice Lab and complete every part.`]}); return; }
    const e = runFor(runs, t.best), noted = e && ((e.strengths || []).length || (e.gaps || []).length || (e.growth || []).length);
    const scores = runs.map(x => x.score + "%");
    rows.push({name, sub: `Practice Lab · best of ${plural(t.runs || runs.length || 1, "run")}`, score: t.best, run: e,
      why: [`Best of ${plural(t.runs || runs.length || 1, "run")}${scores.length > 1 ? ` (${scores.join(", ")})` : ""}.`,
        `Graded ${(e && e.tier && tierOf(e.tier)) || level(t.best)}.`, subsLine(e), passLine(t.best)],
      great: noted ? (e.strengths || []) : t.best >= PASS ? [`Passed at ${t.best}%: most of the lab done right.`] : [],
      wrong: noted ? (e.gaps || []) : t.best < 100 ? [`${100 - t.best}% of the points were lost. Which items were missed wasn't recorded: this run was scored before the lab kept its notes.`] : [],
      better: noted ? (e.growth || []) : t.best < 100 ? ["Run the lab again: the next run records, item by item, what went well and what to do better."] : [],
      bare: !noted});
  });
  // the random task
  if(num(r.task)){
    const runs = r.work.filter(e => e.kind === "task"), e = runFor(runs, r.task), missed = !!(e && /missed/i.test(e.label || ""));
    rows.push({name: "Random task", sub: "the interruption during the day", score: r.task,
      why: [missed ? "The task wasn't answered in time, so it scored 0%." : `Graded ${(e && e.tier && tierOf(e.tier)) || level(r.task)}.`, passLine(r.task)],
      great: r.task >= PASS ? ["Acknowledged the interruption, planned it and closed it out in time."] : [],
      wrong: missed ? ["The task was missed: not answered before it ran out of time."] : r.task < PASS ? ["The interruption wasn't acknowledged, planned and closed out in time."] : r.task < 100 ? ["A step of the response was thin or late."] : [],
      better: r.task >= 100 ? [] : ["Acknowledge it fast, jot a three-step plan, then resolve it before going back to the lesson."]});
  }
  // a roleplay or live simulation: graded, but not part of the day's score
  const other = {};
  r.work.filter(e => e.kind === "roleplay" && num(e.score)).forEach(e => { (other[e.label || "Roleplay"] = other[e.label || "Roleplay"] || []).push(e); });
  Object.entries(other).forEach(([name, runs]) => {
    const best = Math.max(...runs.map(e => e.score)), e = runFor(runs, best);
    rows.push({name, sub: `Live Roleplay · best of ${plural(runs.length, "run")}`, score: best, run: e,
      why: [`Graded ${(e.tier && tierOf(e.tier)) || level(best)}.`, subsLine(e), "Not counted in the day's score."],
      great: e.strengths || [], wrong: e.gaps || [], better: e.growth || []});
  });
  return rows;
}
const cellList = (xs, none) => (xs = (xs || []).filter(Boolean)).length ? `<ul>${xs.map(x => `<li>${E(x)}</li>`).join("")}</ul>` : `<i>${none}</i>`;
// one day's activities and their feedback: the why-this-score table, then the trainer's feedback for the day
function makeup(r, fb){
  const rows = scoreRows(r), f = fb[r.dayId];
  return `<div class="eacm-mk">
    <div class="eacm-sw"><table class="eacm-st-t"><thead><tr><th>Activity</th><th>Score</th><th>🧾 Why this score</th><th>⭐ What you did great</th><th>❌ What was wrong</th><th>💡 What could have been done better</th></tr></thead>
    <tbody>${rows.map(x => `<tr>
      <th scope="row"><b>${E(x.name)}</b><small>${E(x.sub)}${x.run && x.run.at ? ` · ${E(new Date(x.run.at).toLocaleDateString())}` : ""}</small>
        ${x.run && x.run.excerpt ? `<details class="eacm-ex"><summary>Their answer</summary><p>${E(x.run.excerpt)}</p></details>` : ""}</th>
      <td class="eacm-sc"><span class="eacm-pill eacm-${num(x.score) ? tint(x.score) : "none"}">${num(x.score) ? Math.round(x.score) + "%" : "—"}</span></td>
      <td class="eacm-w">${cellList(x.why, "—")}</td>
      <td class="eacm-g">${cellList(x.great, num(x.score) ? "Nothing noted." : "—")}</td>
      <td class="eacm-b">${cellList(x.wrong, num(x.score) ? (x.score >= 100 ? "Nothing — full marks." : "Nothing noted.") : "—")}</td>
      <td class="eacm-n">${cellList(x.better, num(x.score) ? "Keep the same approach." : "—")}</td></tr>`).join("")}
    </tbody></table></div>
    ${f ? `<div class="eacm-tfb"><b>✍ Trainer feedback</b> <small>${f.status === "sent" ? "Sent" + (f.readAt ? " · read" : "") : "Draft — not sent"}${f.rating ? ` · ${E(f.rating)}` : ""}</small>${f.summary ? `<p>${E(f.summary)}</p>` : ""}${f.mine && typeof openDayFeedback === "function" ? `<button type="button" class="eacm-more" onclick="openDayFeedback(${r.dayId})">Read the full feedback →</button>` : ""}</div>` : ""}</div>`;
}
/* The card: the header; 💬 Feedback on each activity first, the part a trainer checks most (🎯 Focus on, a short
   index of what is below the pass mark, then each day's activities and feedback, folded until opened); 📅 Day scores
   (one line of numbers per day, nothing else); and how the scores are worked out, folded at the bottom. Each fact is
   shown once: the numbers in Day scores, the explanations in the day's feedback, and Focus on only points to them. */
const cell = (v, t) => `<td class="eacm-c eacm-${num(v) ? tint(v) : "none"}">${num(v) ? Math.round(v) + "%" : "—"}${t ? `<small>${t}</small>` : ""}</td>`;
function daysTable(s, r, you){
  const head = `<thead><tr><th>Day</th><th>Day score</th><th>✍️ Knowledge Check</th><th>🛠 Practice Lab</th><th>❓ Quick Checks</th><th>⚡ Random task</th><th>📖 Slides</th><th>💬 Feedback</th></tr></thead>`;
  const rows = s.days.map(d => {
    if(!d.active) return `<tr class="eacm-off"><td><b>Day ${d.dayId}</b><small>${E(d.d.title)}</small></td><td class="eacm-c eacm-none">—</td><td colspan="6" class="eacm-ns">Not started</td></tr>`;
    const below = scoreRows(d).filter(x => num(x.score) && x.score < PASS).length, f = s.fb[d.dayId];
    return `<tr><td><b>Day ${d.dayId}</b><small>${E(d.d.title)}</small></td>
      ${cell(d.average, d.passed ? "✓ passed" : num(d.average) ? (d.average >= PASS ? "passing" : "below " + PASS + "%") : "")}
      ${cell(d.kc, num(d.kc) ? (d.tries > 1 ? `${d.tries} tries` : "") : "not taken")}
      ${cell(d.practice, d.tools.length ? `${d.tools.filter(t => num(t.best)).length}/${d.tools.length} labs` : "")}
      ${d.qcTotal ? cell(d.qc, `${d.qcRight}/${d.qcTotal} right`) : `<td class="eacm-c eacm-none">—</td>`}
      ${cell(d.task, "")}
      <td class="eacm-c eacm-none">${d.seen}/${d.n}</td>
      <td class="eacm-fbc"><button type="button" class="eacm-go" onclick="EAPACM.goDay('${Q(r.id)}', ${d.dayId})">Open ↑</button>${below ? `<small class="eacm-lo-t">${below} below ${PASS}%</small>` : ""}${f ? `<small>✍ ${f.status === "sent" ? "trainer feedback sent" : "trainer draft"}</small>` : ""}</td></tr>`;
  }).join("");
  return `<div class="eacm-dsw"><table class="eacm-days">${head}<tbody>
    ${you ? "" : `<tr class="eacm-ov"><td><b>Overall</b><small>${s.passedN} of ${DAYS.length} days passed</small></td>${cell(s.overall, "")}<td colspan="6" class="eacm-ns">The average of the days scored so far. A day's score is the average of its Knowledge Check, Practice Lab, Quick Checks and random task.</td></tr>`}
    ${rows}</tbody></table></div>`;
}
function focusTable(s, r){
  // from the same rows as each day's table, so an item shows here under the same name and score as in its day
  const items = [];
  s.days.forEach(d => { if(d.active) scoreRows(d).forEach(x => { if(num(x.score) && x.score < PASS) items.push({day: d.dayId, title: x.name, score: x.score,
    why: (x.wrong || []).slice(0, 2).join(" · ") || "Nothing noted.", better: (x.better || [])[0] || "See the day's feedback."}); }); });
  items.sort((a, b) => a.score - b.score);
  if(!items.length) return `<p class="eacm-okp">${num(s.overall) ? `✓ Nothing below the ${PASS}% pass mark: every score so far is ${PASS}% or better.` : "Nothing scored yet."}</p>`;
  const open = state.eacmOpen || {}, all = !!open["focus:" + r.id], SHOW = 5, shown = all ? items : items.slice(0, SHOW);
  return `<div class="eacm-fo"><p class="eacm-fo-h">🎯 Focus on <small>below the ${PASS}% pass mark, lowest first · the full explanation is in the day below</small></p>
    <div class="eacm-sw"><table class="eacm-fo-t"><thead><tr><th>Item</th><th>Day</th><th>Score</th><th>❌ What was wrong</th><th>💡 What to do</th></tr></thead><tbody>
    ${shown.map(it => `<tr><th scope="row">${E(it.title.replace(/^Day \d+ · /, ""))}</th><td><button type="button" class="eacm-go" onclick="EAPACM.goDay('${Q(r.id)}', ${it.day})">Day ${it.day} ↓</button></td>
      <td class="eacm-sc"><span class="eacm-pill eacm-${tint(it.score)}">${Math.round(it.score)}%</span></td><td>${E(it.why)}</td><td>${E(it.better)}</td></tr>`).join("")}
    </tbody></table></div>
    ${items.length > SHOW ? `<button type="button" class="eacm-more" onclick="EAPACM.toggle('focus:${Q(r.id)}')">${all ? "Show fewer" : `Show all ${items.length}`}</button>` : ""}</div>`;
}
function feedbackDays(s, r){
  const open = state.eacmOpen || {}, act = s.days.filter(d => d.active);
  if(!act.length) return `<p class="eacm-okp">No activity yet.</p>`;
  return act.map(d => {
    const rows = scoreRows(d).filter(x => num(x.score)), below = rows.filter(x => x.score < PASS).length, key = `fb:${r.id}:${d.dayId}`;
    return `<details class="eacm-day" id="eacm-day-${d.dayId}" data-day="${d.dayId}" ${open[key] ? "open" : ""} ontoggle="EAPACM.mark('${Q(key)}', this.open)">
      <summary><b>Day ${d.dayId}</b><span class="eacm-dt">${E(d.d.title)}</span>
        <em>${rows.length} scored${below ? ` · <i class="eacm-lo-t">${below} below ${PASS}%</i>` : ""}</em><span class="eacm-pill eacm-${num(d.average) ? tint(d.average) : "none"}">${P(d.average)}</span></summary>
      ${makeup(d, s.fb)}</details>`;
  }).join("");
}
function card(s, you){
  const r = s.rec, st = status(s), open = state.eacmOpen || (state.eacmOpen = {});
  return `<div class="eacm-card${you ? " eacm-you" : ""}" id="eacmCard">
    ${you ? "" : `<div class="eacm-card-h"><div><p class="eacm-k">Trainee scorecard</p><h3>${E(nameOf(r))}</h3>
      <p class="eacm-k2">${E(typeof batchLabel === "function" ? batchLabel(batchKey(r)) : r.batch || "")}${r.registeredAt ? ` · registered ${E(new Date(r.registeredAt).toLocaleDateString())}` : ""}</p></div>
      <div class="eacm-card-chips"><span class="eacm-big eacm-${tint(s.overall)}">Overall ${P(s.overall)}</span><span class="eacm-st2 eacm-${st.c}">${st.t}</span><span class="eacm-pm">${s.passedN} of ${DAYS.length} days passed · pass mark ${PASS}%</span></div></div>`}
    <div class="eacm-sec"><h4>💬 Feedback on each activity <small>· every score explained: why, what went well, what was wrong, what to do better</small></h4>
      ${focusTable(s, r)}
      <div class="eacm-btns"><button type="button" class="eacm-more" onclick="EAPACM.allDays('${Q(r.id)}', true)">Open every day</button><button type="button" class="eacm-more" onclick="EAPACM.allDays('${Q(r.id)}', false)">Close every day</button></div>
      ${feedbackDays(s, r)}</div>
    <div class="eacm-sec"><h4>📅 Day scores</h4>${daysTable(s, r, you)}</div>
    <details class="eacm-how"><summary>How these scores are worked out</summary>
      <ul><li><b>Day score</b> = the average of the day's Knowledge Check, Practice Lab (the best run of each lab), Quick Checks and random task, whichever have a score.</li>
        <li><b>Overall</b> = the average of the days scored so far. A day is <b>passed</b> when its Knowledge Check is passed.</li>
        <li><b>Pass mark ${PASS}%</b> for every score. Green 85%+ · light green ${PASS}–84% · orange below ${PASS}%.</li>
        <li>Live Roleplays are graded and explained in the day's feedback, but don't count in the day score. Slides reached is shown for progress only.</li></ul></details>
  </div>`;
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
  // hold off only while someone is typing in a text box: a dropdown that still has focus after a pick (the Trainee
  // picker sits outside the card) mustn't block the card it just asked for
  if(!host) return;
  const ae = document.activeElement, typing = !!(ae && (ae.tagName === "TEXTAREA" || (ae.tagName === "INPUT" && !/^(checkbox|radio|button|submit)$/.test(ae.type)) || ae.isContentEditable) && host.contains(ae));
  if(!host || state.view !== "admin" || typing) return;
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
  // open one day's feedback (from Day scores or 🎯 Focus on) and bring it into view
  goDay(id, day){ const o = state.eacmOpen || (state.eacmOpen = {}); o[`fb:${id}:${day}`] = true;
    const el = document.getElementById("eacm-day-" + day); if(el){ el.open = true; el.scrollIntoView({behavior: "smooth", block: "start"}); } },
  allDays(id, v){ const o = state.eacmOpen || (state.eacmOpen = {}); document.querySelectorAll("#eacmCard details.eacm-day").forEach(el => { el.open = !!v; o[`fb:${id}:${el.dataset.day}`] = !!v; }); },
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
.eacm-more{margin-top:10px;background:none;border:0;padding:0;font:800 14px 'Inter',system-ui,sans-serif;color:#A34E14;cursor:pointer;text-decoration:underline;}
.eacm-okp{margin:0;font:700 14px "Inter",system-ui,sans-serif;color:#14532D;}
.eacm-pill{display:inline-block;min-width:48px;text-align:center;font:800 13px 'Inter',system-ui,sans-serif;border-radius:999px;padding:3px 8px;}
.eacm-dsw{overflow-x:auto;border:1px solid #E1E5EE;border-radius:10px;}
.eacm-days{min-width:900px;width:100%;border-collapse:collapse;font:600 14px 'Inter',system-ui,sans-serif;color:#141A2E;}
.eacm-days th{white-space:nowrap;background:#262B45;color:#fff;font-size:12.5px;text-align:left;padding:9px 12px;border-bottom:2px solid #DB8437;}
.eacm-days td{border-bottom:1px solid #E4E7EF;padding:10px 12px;vertical-align:top;}
.eacm-days td:first-child small{display:block;font-size:12.5px;color:#3B4160;font-weight:600;}
.eacm-days tr.eacm-ov td{background:#F4F6FB;}
.eacm-days td.eacm-c{width:92px;text-align:center;font-weight:800;} .eacm-days td.eacm-c small{display:block;font-size:11.5px;font-weight:600;color:#3B4160;}
.eacm-days td:first-child{min-width:210px;}
.eacm-days tr.eacm-off td{color:#6A7088;background:#FAFBFD;} .eacm-days td.eacm-ns{color:#3B4160;font-weight:600;}
.eacm-days td.eacm-fbc{white-space:nowrap;} .eacm-days td.eacm-fbc small{display:block;font-size:11.5px;color:#3B4160;margin-top:3px;}
.eacm-go{white-space:nowrap;border:1px solid #CBD2E3;background:#fff;color:#1E2340;border-radius:999px;padding:3px 10px;font:800 12px 'Inter',system-ui,sans-serif;cursor:pointer;}
.eacm-go:hover{background:#262B45;color:#fff;border-color:#262B45;}
.eacm-lo-t{color:#B23A12 !important;font-weight:800;font-style:normal;}
.eacm-fo{margin-bottom:14px;}
.eacm-fo-h{margin:0 0 6px;font:800 14.5px 'Inter',system-ui,sans-serif;color:#1E2340;} .eacm-fo-h small{font-weight:600;color:#3B4160;font-size:12.5px;margin-left:4px;}
.eacm-fo-t{width:100%;min-width:820px;border-collapse:collapse;font:600 13px/1.42 'Inter',system-ui,sans-serif;color:#262B45;}
.eacm-fo-t thead th{background:#262B45;color:#fff;font-size:12.5px;text-align:left;padding:8px 10px;border-bottom:2px solid #DB8437;white-space:nowrap;}
.eacm-fo-t td,.eacm-fo-t tbody th{padding:8px 10px;border-top:1px solid #E6E9F1;vertical-align:top;text-align:left;background:#fff !important;color:#1B1E2E !important;text-transform:none !important;letter-spacing:0 !important;}
.eacm-fo-t tbody th{width:230px;font-weight:800;}
.eacm-btns{display:flex;gap:8px;margin:4px 0 8px;}
.eacm-day{border:1px solid #E1E5EE;border-radius:10px;margin-bottom:8px;background:#fff;}
.eacm-day>summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:10px;padding:10px 14px;font:600 14px 'Inter',system-ui,sans-serif;color:#1E2340;}
.eacm-day>summary::-webkit-details-marker{display:none;}
.eacm-day>summary::before{content:"▸";color:#A34E14;font-weight:800;} .eacm-day[open]>summary::before{content:"▾";}
.eacm-day>summary .eacm-dt{color:#3B4160;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.eacm-day>summary em{font-style:normal;font-size:12.5px;color:#3B4160;white-space:nowrap;}
.eacm-day[open]>summary{border-bottom:1px solid #E1E5EE;}
.eacm-day .eacm-mk{margin:0;border:0;border-radius:0 0 10px 10px;}
.eacm-how{padding:12px 20px 16px;border-top:1px solid #E4E7EF;} .eacm-how>summary{cursor:pointer;font:800 13.5px 'Inter',system-ui,sans-serif;color:#A34E14;}
.eacm-how ul{margin:8px 0 0;padding-left:18px;font:600 13.5px/1.5 'Inter',system-ui,sans-serif;color:#262B45;}
.eacm-you .eacm-sec:first-child{border-top:0;}
.eacm-mk{margin-top:8px;padding:10px 12px;border:1px solid #E1E5EE;border-radius:10px;background:#FBFCFE;}
.eacm-sub{font-size:12.5px;color:#3B4160;margin-top:2px;}
.eacm-sw{overflow-x:auto;border:1px solid #E1E5EE;border-radius:10px;background:#fff;margin-bottom:8px;}
.eacm-st-t{width:100%;min-width:980px;border-collapse:collapse;font-size:13px;line-height:1.42;color:#262B45;}
.eacm-st-t thead th{background:#262B45;color:#fff;font:800 12.5px 'Inter',system-ui,sans-serif;text-align:left;padding:8px 10px;border-bottom:2px solid #DB8437;white-space:nowrap;}
.eacm-st-t td,.eacm-st-t tbody th{padding:8px 10px;border-top:1px solid #E6E9F1;vertical-align:top;text-align:left;}
.eacm-st-t tbody th{width:170px;font-weight:600;background:#fff !important;border-bottom:0 !important;box-shadow:none !important;color:#1B1E2E !important;text-transform:none !important;letter-spacing:0 !important;font-size:13px !important;}
.eacm-st-t tbody th b{color:#0f2148;}
.eacm-st-t tbody th small{display:block;font-size:12px;color:#4A5070 !important;font-weight:600;margin-top:2px;}
.eacm-st-t td.eacm-sc{width:64px;text-align:center;}
.eacm-st-t ul{margin:0;padding-left:16px;} .eacm-st-t li+li{margin-top:3px;}
.eacm-st-t i{color:#5A6078;}
.eacm-st-t td.eacm-w{background:#F7F8FC;} .eacm-st-t td.eacm-g{background:#F1F9F3;} .eacm-st-t td.eacm-b{background:#FDF3F0;} .eacm-st-t td.eacm-n{background:#F2F4FB;}
.eacm-ex summary{cursor:pointer;font-size:12.5px;font-weight:800;color:#3B4160;margin-top:6px;}
.eacm-ex p{font-size:13px;color:#262B45;white-space:pre-wrap;margin:4px 0 0;}
.eacm-tfb{margin-top:6px;padding:8px 10px;border-left:3px solid #DB8437;background:#FFF6EC;border-radius:6px;font-size:13.5px;}
.eacm-tfb p{margin:4px 0 0;}
@media (max-width:900px){ .eacm-btn{margin-left:0;} .eacm-days td:first-child{width:auto;} `;
(document.head || document.documentElement).appendChild(st);
})();
