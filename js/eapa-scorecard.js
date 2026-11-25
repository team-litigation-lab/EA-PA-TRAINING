/* ============================================================
   🏅 My Scorecard — every score, the weekly progress, the ranking and the trainer's feedback, in tables
   (the Foundational Training's 🏅 Score Card / 📊 Weekly Progress Report layout)

   One page, three tables, the same for the trainee (🏅 Scorecard in the top bar, and the button under the
   dashboard band) and for the trainer (Admin → Trainee Audit → View Detail → 🏅 Scorecard):
     1. 🏅 Score Card       a row per day: ✍️ Knowledge Check · ✅ Quick Checks · 🛠 Practice Lab · 🎲 Random task ·
                            the Day average, then Remarks / Trainer Feedback. The trainer's feedback as sent (its
                            rating and summary, the whole of it a click away); until a day has some, a plain-
                            language note written from the day's own scores, marked as such.
     2. 📊 Weekly Progress  Week 1 (Days 1–5) and Week 2 (Days 6–10): days done, each score's average, the week's
                            score, the place in the batch that week, and a sentence on how the week went.
     3. 🏆 Ranking          the batch, ranked on the same score as the dashboard's Ranking card (rankOverall):
                            others as first name + last initial, with Week 1 / Week 2 scores beside the overall.
   👁 Trainee view (an admin previewing) shows the page too, from this browser's own progress, with a note.
   Scores read: day-progress (Knowledge Check best, random task), quick-check-answers, practice-progress (each
   Practice Lab's best, by the days it relates to) and feedback:<id> (only what the trainer sent, for a trainee).
   ============================================================ */
(function(){
"use strict";
if(typeof renderDashboard !== "function" || typeof DAYS === "undefined") return;

const e = (s)=> String(s == null ? "" : s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const num = (v)=> typeof v === "number" && !isNaN(v);
const avg = (a)=>{ const v = a.filter(num); return v.length ? v.reduce((x,y)=>x+y,0)/v.length : null; };
const pct = (v)=> num(v) ? Math.round(v) + "%" : "—";
const tone = (v)=> !num(v) ? "" : v >= 85 ? "sc-hi" : v >= 70 ? "sc-mid" : "sc-lo";
const WEEKS = [{n:1, label:"Week 1", days:[1,2,3,4,5]}, {n:2, label:"Week 2", days:[6,7,8,9,10]}];
const isTrainee = ()=> !!(state.traineeId && !state.isAdmin);
const isPreview = ()=> !!(state.adminPreview && !state.isAdmin);
const short = (n)=> typeof shortName === "function" ? shortName(n) : String(n || "Trainee");
const toolName = (t)=> String(t.title || "").replace(/\s*\(.*$/, "");

/* ---------- the numbers ---------- */
// one day's scores from a trainee's records: dp = day-progress, pp = practice-progress, qa = quick-check-answers
function dayRow(dayId, src){
  const d = DAYS.find(x=>x.id===dayId);
  const p = (src.dp || {})[dayId] || null;
  const kc = p && num(p.score) ? p.score : null;
  const tries = p ? Math.max(1, (p.history || []).length || 1) : 0;
  const firstTry = p && (p.history || []).length ? p.history[0].score : null;
  const qcs = Object.entries(src.qa || {}).filter(([k,v])=>k.indexOf(dayId + "_") === 0 && v && v.checked);
  const qcRight = qcs.filter(([,v])=>v.correct).length;
  const qc = qcs.length ? qcRight / qcs.length * 100 : null;
  const tools = (typeof relatedTools === "function" ? relatedTools(dayId) : []).map(t=>{ const r = (src.pp || {})[t.id]; return {t, runs:(r && r.runs) || 0, best: r && num(r.bestScore) && (r.runs || 0) > 0 ? r.bestScore : null}; });
  const done = tools.filter(x=>num(x.best));
  const practice = avg(done.map(x=>x.best));
  const task = p && num(p.surpriseTaskScore) ? p.surpriseTaskScore : null;
  const parts = [kc, qc, practice, task].filter(num);
  return {d, dayId, p, kc, passed: !!(p && p.done), tries, firstTry, qc, qcRight, qcTotal: qcs.length, tools, practice, task,
    average: parts.length ? avg(parts) : null, active: parts.length > 0 || tools.some(x=>x.runs > 0)};
}
// the same score the dashboard's Ranking card and Admin → Rankings use, over a set of days
function scoreOver(rec, days){
  const dp = rec.dayProgress || {}, pp = rec.practiceProgress || {};
  const doneN = days.filter(n=>dp[n] && dp[n].done).length;
  const kc = avg(days.map(n=>dp[n] && dp[n].score));
  const tIds = new Set(); days.forEach(n=>(typeof relatedTools === "function" ? relatedTools(n) : []).forEach(t=>tIds.add(t.id)));
  const pr = avg([...tIds].map(id=>pp[id] && (pp[id].runs || 0) > 0 ? pp[id].bestScore : null));
  const tk = avg(days.map(n=>dp[n] && dp[n].surpriseTaskScore));
  const comp = doneN / days.length * 100;
  const score = tk === null ? Math.round(comp*0.4 + (kc||0)*0.3 + (pr||0)*0.3) : Math.round(comp*0.35 + (kc||0)*0.25 + (pr||0)*0.25 + tk*0.15);
  return {doneN, kc, pr, tk, score, any: doneN > 0 || kc !== null || pr !== null || tk !== null};
}
function ranked(recs, days){
  return recs.map(r=>Object.assign({r}, scoreOver(r, days))).sort((a,b)=>b.score-a.score);
}

/* ---------- humanized notes (written from the scores, until the trainer's own feedback arrives) ---------- */
function autoRemark(x, you){
  const Y = you ? "you" : "they", Yr = you ? "your" : "their", Yc = you ? "You" : "They";
  if(!x.active) return you && x.dayId <= nextDay() ? `Nothing scored yet — open Day ${x.dayId} and work through the lesson, then take its Knowledge Check.` : "Not started yet.";
  const s = [];
  if(num(x.kc)){
    if(x.kc >= 90) s.push(`${Yc} aced the Knowledge Check (${x.kc}%)` + (x.tries > 1 && num(x.firstTry) && x.firstTry < x.kc ? `, up from ${x.firstTry}% on the first try — that persistence pays off` : ""));
    else if(x.kc >= 70) s.push(`${Yc} passed the Knowledge Check with ${x.kc}%` + (x.tries > 1 ? ` after ${x.tries} attempts` : ""));
    else s.push(`The Knowledge Check isn't there yet (${x.kc}%; 70% passes) — a quick pass through the slides and a retake should get ${you ? "you" : "them"} over the line`);
  }else s.push(`${Yc} haven't taken the Knowledge Check yet`);
  if(x.qcTotal) s.push(x.qcRight === x.qcTotal ? `${Y} got every Quick Check right (${x.qcTotal}/${x.qcTotal})` : `${x.qcRight} of ${x.qcTotal} Quick Checks were right`);
  let first = s.join(", and ") + ".";
  first = first.charAt(0).toUpperCase() + first.slice(1);
  const out = [first];
  const done = x.tools.filter(t=>num(t.best)).sort((a,b)=>b.best-a.best), todo = x.tools.filter(t=>!num(t.best));
  if(done.length){
    const top = done[0], low = done[done.length-1];
    if(top.best >= 85) out.push(`${Yr.charAt(0).toUpperCase()+Yr.slice(1)} Practice Lab work is strong — ${toolName(top.t)} reached ${top.best}%.`);
    else out.push(`In the Practice Lab, ${toolName(top.t)} is at ${top.best}%.`);
    if(low !== top && low.best < 70) out.push(`${toolName(low.t)} is at ${low.best}% — one more run using the grader's notes should lift it.`);
    else if(top.best < 70) out.push(`Another run, using the grader's notes, should lift it past 70%.`);
  }else if(todo.length) out.push(`${toolName(todo[0].t)} in the Practice Lab is still waiting for ${Yr} first graded run.`);
  if(num(x.task)) out.push(x.task >= 80 ? `${Yc} handled the random task well (${x.task}%).` : `The random task scored ${x.task}% — acknowledge it fast, jot a three-step plan, then resolve it before the timer ends.`);
  return out.join(" ");
}
function weekRemark(w, rows, you){
  const Yc = you ? "You" : "They";
  const act = rows.filter(r=>r.active);
  if(!act.length) return w.n === 1 ? "Nothing scored yet this week — start with Day 1." : "Opens once Week 1 is under way.";
  const best = act.filter(r=>num(r.average)).sort((a,b)=>b.average-a.average)[0];
  const weak = rows.filter(r=>num(r.kc) && r.kc < 70)[0] || act.filter(r=>num(r.average) && r.average < 70).sort((a,b)=>a.average-b.average)[0];
  const doneN = rows.filter(r=>r.passed).length;
  let t = `${Yc} completed ${doneN} of ${w.days.length} days`;
  const a = avg(act.map(r=>r.average));
  if(num(a)) t += `, averaging ${Math.round(a)}%`;
  t += ".";
  if(best) t += ` Strongest: Day ${best.dayId} (${Math.round(best.average)}%).`;
  if(weak && weak !== best) t += ` Worth another look: Day ${weak.dayId}${num(weak.kc) && weak.kc < 70 ? `'s Knowledge Check (${weak.kc}%)` : ` (${Math.round(weak.average)}%)`}.`;
  else if(num(a) && a >= 85) t += " A strong week — keep that pace.";
  return t;
}
function nextDay(){ try{ return typeof nextDayId === "function" ? nextDayId() : 1; }catch(err){ return 1; } }

/* ---------- the tables ---------- */
// fb: {dayId: feedback}; mode "trainee" (sent only, opens the full feedback) or "admin" (every status)
function fbCell(x, f, mode, you){
  if(f && (mode === "admin" || f.status === "sent")){
    const r = f.rating || "On Track", cls = r === "Strong" ? "sc-hi" : r === "Needs Support" ? "sc-lo" : "sc-mid";
    const st = mode === "admin" ? `<span class="sc-st ${f.status === "sent" ? "sent" : "draft"}">${f.status === "sent" ? "Sent" + (f.readAt ? " · read" : "") : "Draft — not sent"}</span>` : "";
    const more = mode === "trainee" ? `<button type="button" class="sc-more" onclick="openDayFeedback(${x.dayId})">Read full feedback →</button>`
      : `<button type="button" class="sc-more" onclick="scGoFeedback(this, ${x.dayId})">Open in Day-by-Day Feedback →</button>`;
    const body = f.summary || (f.strengths || [])[0] || "";
    return `<span class="sc-rate ${cls}">${e(r)}</span>${st}<div class="sc-fb">${e(body)}</div>${more}`;
  }
  const by = mode === "admin" ? (f || !x.active ? "" : `<span class="sc-st none">Not reviewed</span>`) : "";
  return `${by}<div class="sc-fb sc-auto">${e(autoRemark(x, you))}</div><div class="sc-autotag">${!x.active ? "" : mode === "admin" ? "Auto note from the scores — the trainee sees this until you send feedback" : x.active ? "Auto note from your scores · your trainer's feedback will replace it" : ""}</div>`;
}
function cell(v, tip, extra){ return `<td class="sc-num ${tone(v)}" title="${e(tip)}">${pct(v)}${extra || ""}</td>`; }
function scoreCardHtml(rows, fb, mode, you){
  const body = rows.map(x=>{
    const kcTip = num(x.kc) ? `Best ${x.kc}% · ${x.passed ? "passed" : "not yet passed (70% passes)"} · ${x.tries} attempt${x.tries === 1 ? "" : "s"}` : "Not taken yet";
    const prTip = x.tools.length ? x.tools.map(t=>`${toolName(t.t)}: ${num(t.best) ? `best ${t.best}% (${t.runs} run${t.runs === 1 ? "" : "s"})` : "no graded run yet"}`).join("\n") : "No Practice Lab for this day";
    const avTip = num(x.average) ? `Average of ${[["Knowledge Check",x.kc],["Quick Checks",x.qc],["Practice Lab",x.practice],["Random task",x.task]].filter(p=>num(p[1])).map(p=>`${p[0]} ${Math.round(p[1])}%`).join(" + ")}` : "Nothing to average yet";
    return `<tr class="${x.active ? "" : "sc-idle"}">
      <th scope="row" class="sc-day"><b>Day ${x.dayId}</b><span>${e(x.d.title)}</span></th>
      ${cell(x.kc, kcTip, num(x.kc) ? `<small>${x.passed ? "✓ passed" : "not yet"}</small>` : "")}
      <td class="sc-num ${tone(x.qc)}" title="${e(x.qcTotal ? `${x.qcRight} of ${x.qcTotal} right` : "None answered yet")}">${x.qcTotal ? `${x.qcRight}/${x.qcTotal}<small>${pct(x.qc)}</small>` : "—"}</td>
      ${cell(x.practice, prTip, x.tools.length ? `<small>${x.tools.filter(t=>num(t.best)).length}/${x.tools.length} lab${x.tools.length === 1 ? "" : "s"}</small>` : "")}
      ${cell(x.task, num(x.task) ? `Random task average ${x.task}%` : "No random task graded on this day")}
      <td class="sc-num sc-avg ${tone(x.average)}" title="${e(avTip)}">${pct(x.average)}</td>
      <td class="sc-remark">${fbCell(x, fb[x.dayId], mode, you)}</td>
    </tr>`;
  }).join("");
  const all = avg(rows.map(r=>r.average));
  return `<div class="sc-wrap"><table class="sc-table sc-card">
    <thead><tr><th>Day</th><th>✍️ Knowledge Check</th><th>✅ Quick Checks</th><th>🛠 Practice Lab</th><th>🎲 Random task</th><th>Day average</th><th class="sc-remark-h">Remarks / Trainer feedback</th></tr></thead>
    <tbody>${body}</tbody>
    <tfoot><tr><th scope="row">Overall</th>${cell(avg(rows.map(r=>r.kc)), "Average of the Knowledge Checks taken")}${cell(avg(rows.map(r=>r.qc)), "Average of the days' Quick Checks")}${cell(avg(rows.map(r=>r.practice)), "Average of the days' Practice Lab scores")}${cell(avg(rows.map(r=>r.task)), "Average of the random tasks")}<td class="sc-num sc-avg ${tone(all)}">${pct(all)}</td><td class="sc-remark">${rows.filter(r=>r.passed).length} of ${rows.length} days passed · ${Object.values(fb).filter(f=>f && (mode === "admin" || f.status === "sent")).length} day${Object.values(fb).filter(f=>f && (mode === "admin" || f.status === "sent")).length === 1 ? "" : "s"} of trainer feedback</td></tr></tfoot>
  </table></div>`;
}
function weeklyHtml(rows, myRec, pool, you){
  const body = WEEKS.map(w=>{
    const wr = rows.filter(r=>w.days.includes(r.dayId));
    const s = scoreOver(myRec, w.days);
    let place = "—";
    if(pool && pool.length && s.any){ const rk = ranked(pool, w.days); const i = rk.findIndex(x=>x.r === myRec || (myRec.id && x.r.id === myRec.id)); if(i >= 0) place = `#${i+1} <small>of ${rk.length}</small>`; }
    return `<tr>
      <th scope="row" class="sc-day"><b>${w.label}</b><span>Days ${w.days[0]}–${w.days[w.days.length-1]}</span></th>
      <td class="sc-num">${s.doneN}/${w.days.length}</td>
      ${cell(s.kc, "Average of the week's Knowledge Checks")}
      ${cell(avg(wr.map(r=>r.qc)), "Average of the week's Quick Checks")}
      ${cell(s.pr, "Average best score on the week's Practice Labs")}
      ${cell(s.tk, "Average of the week's random tasks")}
      <td class="sc-num sc-avg ${s.any ? tone(s.score) : ""}" title="35% days completed · 25% Knowledge Checks · 25% Practice Lab · 15% random tasks (40/30/30 until a task is graded)">${s.any ? s.score : "—"}</td>
      <td class="sc-num">${place}</td>
      <td class="sc-remark"><div class="sc-fb">${e(weekRemark(w, wr, you))}</div></td>
    </tr>`;
  }).join("");
  return `<div class="sc-wrap"><table class="sc-table">
    <thead><tr><th>Week</th><th>Days passed</th><th>✍️ Knowledge Checks</th><th>✅ Quick Checks</th><th>🛠 Practice Lab</th><th>🎲 Random tasks</th><th>Week score</th><th>Place in batch</th><th class="sc-remark-h">How the week went</th></tr></thead>
    <tbody>${body}</tbody></table></div>`;
}
function rankingHtml(pool, meRec, note){
  if(!pool || !pool.length) return `<p class="sc-empty">${e(note || "The ranking appears once your batch has approved trainees.")}</p>`;
  const rk = ranked(pool, DAYS.map(d=>d.id));
  const wk = WEEKS.map(w=>{ const m = new Map(); ranked(pool, w.days).forEach((x,i)=>m.set(x.r, {i, s:x})); return m; });
  const medals = ["🥇","🥈","🥉"];
  const body = rk.map((x,i)=>{
    const me = meRec && (x.r === meRec || (meRec.id && x.r.id === meRec.id));
    const nm = me ? "You" : short(x.r.name);
    const dp = x.r.dayProgress || {};
    return `<tr class="${me ? "sc-me" : ""}">
      <td class="sc-num sc-rk">${medals[i] || "#" + (i+1)}</td>
      <th scope="row" class="sc-name">${e(nm)}</th>
      <td class="sc-num">${Object.values(dp).filter(p=>p && p.done).length}/${DAYS.length}</td>
      ${cell(x.kc, "Knowledge Check average")}${cell(x.pr, "Practice Lab average")}${cell(x.tk, "Random task average")}
      ${WEEKS.map((w,j)=>{ const v = wk[j].get(x.r); return `<td class="sc-num" title="${w.label}: #${v.i+1}">${v.s.any ? `${v.s.score}<small>#${v.i+1}</small>` : "—"}</td>`; }).join("")}
      <td class="sc-num sc-avg ${tone(x.score)}">${x.score}</td>
    </tr>`;
  }).join("");
  return `<div class="sc-wrap"><table class="sc-table sc-rank">
    <thead><tr><th>Rank</th><th>Trainee</th><th>Days passed</th><th>✍️ Knowledge Checks</th><th>🛠 Practice Lab</th><th>🎲 Random tasks</th><th>Week 1</th><th>Week 2</th><th>Overall</th></tr></thead>
    <tbody>${body}</tbody></table></div>`;
}
function summaryLine(rows, pool, meRec, you){
  const all = avg(rows.map(r=>r.average)), passed = rows.filter(r=>r.passed).length;
  const Yc = you ? "You" : "They";
  if(!rows.some(r=>r.active)) return `${Yc} haven't been scored on anything yet. Scores, weekly progress and the ranking fill in as Knowledge Checks, Quick Checks and Practice Labs are completed.`;
  let t = `${Yc} ${you ? "have" : "have"} passed ${passed} of ${rows.length} days` + (num(all) ? `, with an average of ${Math.round(all)}% across everything scored so far` : "") + ".";
  if(pool && pool.length && meRec){ const rk = ranked(pool, DAYS.map(d=>d.id)); const i = rk.findIndex(x=>x.r === meRec || (meRec.id && x.r.id === meRec.id)); if(i >= 0) t += ` That puts ${you ? "you" : "them"} #${i+1} of ${rk.length} in the batch.`; }
  const weak = rows.filter(r=>num(r.kc) && r.kc < 70);
  if(weak.length) t += ` Next step: retake ${weak.map(r=>`Day ${r.dayId}`).join(", ")}'s Knowledge Check${weak.length > 1 ? "s" : ""}.`;
  else if(num(all) && all >= 85) t += " Excellent work — keep it going.";
  return t;
}
function tiles(rows, pool, meRec){
  const all = avg(rows.map(r=>r.average));
  let rank = "—", of = "";
  if(pool && pool.length && meRec){ const rk = ranked(pool, DAYS.map(d=>d.id)); const i = rk.findIndex(x=>x.r === meRec || (meRec.id && x.r.id === meRec.id)); if(i >= 0){ rank = "#" + (i+1); of = ` of ${rk.length}`; } }
  const w = WEEKS.map(x=>scoreOver(meRec, x.days));
  const t = (n, l)=>`<div class="sc-tile"><div class="sc-tile-n">${n}</div><div class="sc-tile-l">${l}</div></div>`;
  return `<div class="sc-tiles">${t(pct(all), "Overall average")}${t(`${rows.filter(r=>r.passed).length}/${rows.length}`, "Days passed")}${t(rank + `<small>${of}</small>`, "Batch ranking")}${w.map((s,i)=>t(s.any ? s.score : "—", `Week ${i+1} score`)).join("")}</div>`;
}
function sections(o){
  // o: {rows, fb, mode, you, meRec, pool, rankNote}
  return `${tiles(o.rows, o.pool, o.meRec)}
    <p class="sc-summary">${e(summaryLine(o.rows, o.pool, o.meRec, o.you))}</p>
    <section class="sc-sec"><h3>🏅 Score Card</h3><p class="sc-note">Every score, day by day, with the trainer's feedback beside it. Green 85%+ · amber 70–84% · orange below 70%. Hover a score to see how it was worked out.</p>${scoreCardHtml(o.rows, o.fb, o.mode, o.you)}</section>
    <section class="sc-sec"><h3>📊 Weekly Progress</h3><p class="sc-note">Week 1 is Days 1–5, Week 2 is Days 6–10. The week score uses the same formula as the ranking.</p>${weeklyHtml(o.rows, o.meRec, o.pool, o.you)}</section>
    <section class="sc-sec"><h3>🏆 Ranking${o.batch ? ` · Batch ${e(o.batch)}` : ""}</h3><p class="sc-note">Score = 35% days completed · 25% Knowledge Checks · 25% Practice Lab · 15% random tasks (40/30/30 until a task is graded).${o.you ? " Other trainees show as first name and last initial." : ""}</p>${rankingHtml(o.pool, o.meRec, o.rankNote)}</section>`;
}

/* ---------- trainee page ---------- */
let rankLoading = null;
function loadRank(force){
  if(rankLoading || (!force && state.scRank && Date.now() - state.scRank.at < 5*60*1000)) return;
  if(!isTrainee() && !isPreview()) return;
  rankLoading = (async ()=>{
    try{
      const rr = await authFetch("/api/ranking", {});
      if(!rr.ok) throw new Error("ranking " + rr.status);
      const j = await rr.json();
      state.scRank = {at:Date.now(), batch: j.batch || "", recs:(j.trainees || []).map(x=>Object.assign({}, x, {id: x.me ? state.traineeId : ""}))};
    }catch(err){ state.scRank = {at:Date.now(), batch:"", recs:[], error:true}; }
    rankLoading = null;
    if(state.view === "scorecard") render();
  })();
}
function mySrc(){ return {dp: state.progress || {}, pp: state.practiceProgress || {}, qa: state.qcAnswers || {}}; }
function renderScorecardPage(){
  const preview = isPreview();
  if(!isTrainee() && !preview) return `<div class="sc-page"><h1>🏅 My Scorecard</h1><p class="sc-empty">Sign in to see your scorecard.</p></div>`;
  if(isTrainee() && !state.feedbackLoadedAt && typeof loadMyFeedback === "function"){ state.feedbackLoadedAt = Date.now(); setTimeout(()=>loadMyFeedback(), 0); }
  if(!state.scRank) setTimeout(()=>loadRank(), 0);
  const src = mySrc();
  const rows = DAYS.map(d=>dayRow(d.id, src));
  const meRec = {id: state.traineeId || "__preview", name: state.traineeName || "You", dayProgress: src.dp, practiceProgress: src.pp};
  const rk = state.scRank;
  let pool = null, rankNote = rk ? "" : "Loading your batch…";
  if(rk && !rk.error){
    // the batch from the server, with this trainee's own row from this browser (the freshest copy)
    // (this trainee's own server row: flagged me; on a server that can't flag it, the one row with their short name)
    const mine = rk.recs.some(r=>r.me) ? null : rk.recs.filter(r=>short(r.name) === short(state.traineeName));
    pool = rk.recs.filter(r=>!(r.me || (state.traineeId && r.id === state.traineeId) || (mine && mine.length === 1 && r === mine[0])));
    if(isTrainee()) pool.push(meRec);
    if(preview) rankNote = "No approved trainees to rank yet.";
  }else if(rk && rk.error) rankNote = "Couldn't load the ranking right now — try ↻ Refresh in a moment.";
  const fb = {}; Object.entries(state.myFeedback || {}).forEach(([k,v])=>{ fb[k] = Object.assign({status:"sent"}, v); });
  return `<div class="sc-page">
    ${preview ? `<div class="sc-preview">👁 <b>Trainee view preview</b> — a trainee sees their own scores, their trainer's feedback and their batch here. Shown below: this browser's own progress${rk && rk.recs && rk.recs.length ? ", and every approved trainee in the ranking" : ""}.</div>` : ""}
    <div class="sc-head"><div><h1>🏅 My Scorecard</h1><p>Your scores, weekly progress, ranking and trainer feedback — all in one place.</p></div>
      <button type="button" class="btn btn-ghost btn-sm" onclick="scRefresh()">↻ Refresh</button></div>
    ${sections({rows, fb, mode:"trainee", you:true, meRec, pool, rankNote, batch: rk && rk.batch})}
  </div>`;
}
window.scRefresh = function(){ state.scRank = null; state.feedbackLoadedAt = 0; if(typeof loadTraineeRanking === "function" && isTrainee()) loadTraineeRanking(true); render(); };

/* ---------- admin: View Detail → 🏅 Scorecard ---------- */
function renderAdminScorecard(rec){
  const work = (state.traineeWork || {})[rec.id];
  if(!work || work.loading) return `<div class="sc-admin"><div class="sidebar-section-lbl" style="padding-left:0;">🏅 Scorecard</div><p class="sc-note">Loading this trainee's work…</p></div>`;
  const snap = work.snap || {};
  const src = {dp: snap["day-progress"] || rec.dayProgress || {}, pp: snap["practice-progress"] || rec.practiceProgress || {}, qa: snap["quick-check-answers"] || {}};
  const rows = DAYS.map(d=>dayRow(d.id, src));
  const meRec = Object.assign({}, rec, {dayProgress: src.dp, practiceProgress: src.pp});
  const b = typeof cleanBatch === "function" ? cleanBatch(rec.batch) : rec.batch;
  const pool = (state.adminData || []).filter(r=>r.approved === true && !r.archived && r.id !== rec.id && (!b || (typeof cleanBatch === "function" ? cleanBatch(r.batch) : r.batch) === b));
  if(rec.approved === true) pool.push(meRec);
  const fb = (work.feedback && work.feedback.days) || {};
  return `<div class="sc-admin" id="scAdmin_${e(typeof cssId === "function" ? cssId(rec.id) : rec.id)}">
    <div class="sidebar-section-lbl" style="padding-left:0;">🏅 Scorecard — scores, weekly progress, ranking &amp; feedback</div>
    ${sections({rows, fb, mode:"admin", you:false, meRec, pool, batch: b, rankNote: "Approve this trainee to rank them in their batch."})}
  </div>`;
}
window.scGoFeedback = function(btn, dayId){
  const box = btn.closest(".sc-admin"); const host = box && box.parentNode;
  const det = host && [...host.querySelectorAll("details.fb-day")].find(x=>new RegExp("^\\s*Day " + dayId + "\\b").test(x.querySelector("summary").textContent));
  if(det){ det.open = true; det.scrollIntoView({behavior:"smooth", block:"center"}); }
};
if(typeof renderAdminDetail === "function"){
  const __detail = renderAdminDetail;
  renderAdminDetail = function(rec){
    const html = __detail.apply(this, arguments);
    // straight after the trainee's two day / Practice Lab lists, before the AI review and the feedback forms
    const at = html.indexOf('<div class="sidebar-section-lbl" style="padding-left:0;">AI-Generated Ranking');
    if(at < 0) return html + renderAdminScorecard(rec);
    const cut = html.lastIndexOf('<div style="margin-top:16px;">', at);
    return html.slice(0, cut) + renderAdminScorecard(rec) + html.slice(cut);
  };
}

/* ---------- the page in the app: a route, a top bar button, the dashboard link ---------- */
window.EXTRA_ROUTE_VIEWS = (window.EXTRA_ROUTE_VIEWS || []).concat(["scorecard"]);
window.EXTRA_ROUTE_LABELS = Object.assign(window.EXTRA_ROUTE_LABELS || {}, {scorecard:"My Scorecard"});
window.renderScorecardPage = renderScorecardPage;
if(typeof renderTopbar === "function"){
  const __top = renderTopbar;
  renderTopbar = function(){
    const html = __top.apply(this, arguments);
    if(!isTrainee() && !isPreview()) return html;
    const btn = `<button class="${state.view === "scorecard" ? "active" : ""}" onclick="goto('scorecard')" title="My Scorecard — scores, weekly progress, ranking and trainer feedback">🏅<span class="sc-nav-word"> Scorecard</span></button>`;
    return html.replace(/(<button class="[^"]*" onclick="goto\('dashboard'\)">Dashboard<\/button>)/, "$1" + btn);
  };
}
const __dash = renderDashboard;
renderDashboard = function(){
  const html = __dash.apply(this, arguments);
  if(!isTrainee() && !isPreview()) return html;
  const link = `<button type="button" class="btn sc-dash-btn" onclick="goto('scorecard')">🏅 My Scorecard <span>Scores · Weekly progress · Ranking · Trainer feedback</span></button>`;
  return html.replace('<div class="hero-actions bottom-actions">', '<div class="hero-actions bottom-actions">' + link);
};
if(__dash.__band) renderDashboard.__band = true;
// 👁 Trainee view: the dashboard's Ranking card waited for a trainee sign-in that never comes — point it here instead
if(typeof renderRankingCard === "function"){
  const __rc = renderRankingCard;
  renderRankingCard = function(){
    if(isPreview() && !state.traineeId) return `<div class="card stat rank-card"><div class="num">#—</div><div class="lbl">Ranking · preview</div><div class="sub">A trainee sees their place in their batch here.</div><button type="button" class="btn btn-ghost btn-sm sc-rank-link" onclick="goto('scorecard')">Full ranking →</button></div>`;
    return __rc.apply(this, arguments).replace(/<\/div>\s*$/, `<button type="button" class="btn btn-ghost btn-sm sc-rank-link" onclick="goto('scorecard')">Full ranking &amp; weekly progress →</button></div>`);
  };
}

/* ---------- styles ---------- */
const css = document.createElement("style");
css.id = "eapa-scorecard-css";
css.textContent = `
.sc-page{max-width:1240px;margin:0 auto;padding:6px 4px 28px;}
.sc-head{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap;margin:0 0 14px;}
.sc-head h1{color:var(--navy);font-size:26px;margin:4px 0 2px;}
.sc-head p{margin:0;color:var(--ink-soft);font-size:14px;}
.sc-preview{background:#FFF4E5;border:1px solid #F0C08A;color:#7A4A12;border-radius:10px;padding:10px 14px;font-size:13px;margin:0 0 14px;}
.sc-tiles{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:0 0 12px;}
.sc-tile{background:linear-gradient(135deg,var(--navy) 0%,var(--navy-soft,#2B3260) 100%);color:#fff;border-radius:12px;padding:12px 14px;}
.sc-tile-n{font-size:24px;font-weight:800;line-height:1.1;} .sc-tile-n small{font-size:13px;color:#C9CCDD;font-weight:600;}
.sc-tile-l{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#C9CCDD;margin-top:4px;}
.sc-summary{background:#fff;border:1px solid var(--line);border-left:4px solid var(--orange,#E08A2E);border-radius:10px;padding:12px 14px;font-size:14px;line-height:1.55;color:#2A2D40;margin:0 0 16px;}
.sc-sec{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px 16px;margin:0 0 16px;box-shadow:var(--shadow);}
.sc-sec h3{margin:0 0 4px;color:var(--navy);font-size:17px;}
.sc-note{margin:0 0 10px;color:var(--ink-soft);font-size:12.5px;line-height:1.5;}
.sc-empty{color:var(--ink-soft);font-size:13px;margin:6px 0;}
.sc-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line);border-radius:10px;max-width:100%;}
.sc-table{width:100%;border-collapse:collapse;font-size:13px;min-width:760px;}
.sc-table thead th{background:var(--navy);color:#fff;font-weight:700;font-size:12px;text-align:center;padding:9px 8px;white-space:nowrap;position:sticky;top:0;}
.sc-table thead th:first-child,.sc-table thead th.sc-remark-h{text-align:left;}
.sc-table td,.sc-table tbody th,.sc-table tfoot th{border-top:1px solid var(--line);padding:9px 8px;vertical-align:top;}
.sc-table tbody tr:nth-child(even){background:#FAFBFD;}
.sc-table tfoot td,.sc-table tfoot th{background:#F1F3F9;font-weight:700;border-top:2px solid var(--navy);}
.sc-day{text-align:left;min-width:170px;max-width:230px;} .sc-day b{display:block;color:var(--navy);font-size:13px;} .sc-day span{display:block;font-weight:400;color:var(--ink-soft);font-size:12px;line-height:1.35;}
.sc-name{text-align:left;color:var(--navy);white-space:nowrap;}
.sc-num{text-align:center;white-space:nowrap;font-weight:700;color:#2A2D40;} .sc-num small{display:block;font-weight:500;font-size:10.5px;color:var(--ink-soft);}
.sc-avg{background:rgba(31,37,71,.04);}
.sc-hi{color:#1E7A46;} .sc-mid{color:#9A6A00;} .sc-lo{color:#C0461C;}
.sc-idle td,.sc-idle th{opacity:.62;}
.sc-remark{min-width:280px;max-width:460px;font-size:12.8px;line-height:1.5;color:#2A2D40;}
.sc-fb{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}
.sc-auto{color:#3C4060;}
.sc-autotag{font-size:10.5px;color:var(--ink-soft);margin-top:3px;font-style:italic;}
.sc-rate{display:inline-block;font-size:11px;font-weight:800;padding:2px 8px;border-radius:999px;margin:0 6px 4px 0;background:#F1F3F9;}
.sc-rate.sc-hi{background:#E3F4EA;} .sc-rate.sc-mid{background:#FFF3D6;} .sc-rate.sc-lo{background:#FDE6DC;}
.sc-st{display:inline-block;font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:999px;margin:0 6px 4px 0;}
.sc-st.sent{background:#E3F4EA;color:#1E7A46;} .sc-st.draft{background:#FFF3D6;color:#9A6A00;} .sc-st.none{background:#F1F3F9;color:var(--ink-soft);}
.sc-more{display:inline-block;margin-top:4px;background:none;border:0;padding:0;color:var(--orange-deep,#B5651F);font-weight:700;font-size:12px;cursor:pointer;}
.sc-rk{font-size:15px;} .sc-me{background:#FFF4E5 !important;} .sc-me th,.sc-me td{font-weight:800;}
.sc-admin{margin-top:16px;} .sc-admin .sc-sec{box-shadow:none;} .sc-admin .sc-tile-n{font-size:20px;}
.sc-dash-btn{background:#fff;color:var(--navy);border:1px solid var(--line);font-weight:800;} .sc-dash-btn span{font-weight:500;color:var(--ink-soft);font-size:12px;margin-left:6px;}
.rank-card .sc-rank-link{margin-top:8px;color:#fff;border-color:rgba(255,255,255,.3);background:transparent;}
@media(min-width:761px) and (max-width:1440px){.topbar .nav .sc-nav-word{display:none;}}
@media(max-width:760px){.sc-tiles{grid-template-columns:1fr 1fr;} .sc-head h1{font-size:21px;} .sc-sec{padding:12px;} .sc-dash-btn span{display:block;margin:2px 0 0;}}
`;
document.head.appendChild(css);
})();
