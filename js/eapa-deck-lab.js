/* ============================================================
   🛠 The day's Practice Lab inside its deck, and a day that finishes itself.

   1. In the deck. The deck used to end on one 🛠 Practice Lab slide with an "Open Tool" button. Now each
      activity of the day's Practice Lab has a slide of its own at the end of the deck, just before the
      Knowledge Check ("Practice Lab · 2 of 4 · ACT Email"): what the activity is, whether it's done
      (✓ graded, with the best score) and ▶ Start, which opens the lab on that very activity. On the lab,
      "← Back to Day N" (and the lab's own Return to Progress) brings the trainee back to the same slide.
      The activities are the lab's own parts (its wizard, renderToolWizard): ACTIVITIES below, kept the same as
      the labs by .github/scripts/deck-lab.cjs.
   2. No ✓ Finish Training. The day card has no Finish Training button (☰ Topics and ▶ Video share the row).
      A day is complete on its own once the trainee has passed its ✍️ Knowledge Check and done its Practice Lab
      (dayLabDone: a graded run of the day's lab, as the Scorecard and the Practice Lab page count it), in either
      order. Until both are done the card says what is left. When the second of the two is done, a toast says
      the day is complete.
   An activity counts as graded when a grade is saved while the trainee is on it (bumpPracticeProgress); the
   marks are kept in the day's practice-progress record as parts: {<activity>: best score}.
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined" || window.eapaDeckLab || typeof buildDaySlides !== "function") return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);

// each lab's activities, in its own order (toolState.wizardLabels once the lab is open)
const ACTIVITIES = {
  dossier1: ["ACT Email", "Client Dossier", "Preference Trackers", "Gatekeeping Practice"],
  forcemultiplier2: ["ACT Email", "Anticipate the Real Need", "Prompt Engineering", "The Full Scenario", "Inbox Triage"],
  calendar: ["ACT Email", "Calendar Conflict Resolver", "Daily Briefing Prompt", "Proactive EA Tasks", "Travel & the Trip That Breaks", "Crisis Roleplay"],
  coldcalling4: ["ACT Email", "Prioritize the Day", "Prospect Call Log", "Lead Generation Practice", "Live Intake Call Simulator", "Email Outreach Simulator", "Crisis Roleplay"],
  insurance5: ["ACT Email", "Classify the Risk", "Match the Strategy", "Home Binder", "Crisis Roleplay"],
  projectcompliance6: ["ACT Email", "Compliance Risk", "Operational Warning Signs", "Recovery Memo", "Crisis Roleplay", "Compliance Audit Simulation", "Florida Satellite Office"],
  financial: ["ACT Email", "Trust Ledger Reconciliation", "Invoice & Bill Audit", "Invoice Follow-Up", "Attention to Detail Test", "Crisis Roleplay"],
  accessincident8: ["ACT Email", "Least-Privilege Access Audit", "Verify Before You Disclose", "Contain the Leak", "The Firm Is Exposed — Size It", "Recommendation & Action Plan", "The Client Conversation", "Crisis Roleplay"],
  compliance9: ["ACT Email", "Event Invite & Registration Form", "Event Follow-Up", "Meeting Notes & Action Items", "CLE Compliance Dashboard", "Negative Review Response", "Awards Tracker", "Crisis Roleplay"],
  socialmedia10: ["ACT Email", "Engagement Rate", "Version Matching", "Campaign Math", "Brand Kit", "Marketing Plan", "Crisis Roleplay"]
};
const acts = t => ACTIVITIES[t.id] || [];
const pp = id => (state.practiceProgress || {})[id] || null;
const kcPassed = dayId => !!(state.progress && state.progress[dayId] && state.progress[dayId].done);
const labDone = dayId => typeof dayLabDone === "function" ? dayLabDone(dayId) : true;
const dayComplete = dayId => kcPassed(dayId) && labDone(dayId);

/* ---------- 1. the deck: a slide for each activity of the day's Practice Lab, in the lesson it practices ----------
   Each activity's slide sits right after the topic it practices (AFTER_TOPIC: activity → topic title; after that topic's
   Quick Check when it has one), so the trainee practices during the session, not only at the end of the day. An
   activity with no topic of its own (the day's Crisis Roleplay, a capstone) stays at the end, before the Knowledge Check.
   Topic titles are keys (see README, "Titles are keys"): if a title changes, its activity falls back to the end, and
   .github/scripts/deck-lab.cjs fails until AFTER_TOPIC is updated. */
const AFTER_TOPIC = {
  dossier1: { "Gatekeeping Practice": "Scripts That Redirect Without Alienating", "Client Dossier": "Dossier Excerpt — Elias Thorne",
    "Preference Trackers": "Setting Up Client Trackers", "ACT Email": "The ACT Email Framework" },
  forcemultiplier2: { "Anticipate the Real Need": "Force Multiplier in the Wild", "The Full Scenario": "Risk Buffering for Legal Work",
    "Prompt Engineering": "Claude, ChatGPT, and Gemini — Practical Differences", "Inbox Triage": "What High-Performing Inbox Triage Looks Like" },
  calendar: { "Calendar Conflict Resolver": "Calendar Conflict & Prioritization Discipline", "Daily Briefing Prompt": "Multi-Calendar Coordination",
    "Proactive EA Tasks": "Multi-Calendar Coordination", "Travel & the Trip That Breaks": "Emergency Flight Contingencies" },
  coldcalling4: { "Prospect Call Log": "Cold Calling, Appointment Setting & Lead Generation", "Lead Generation Practice": "Verifying a Working Lead",
    "Live Intake Call Simulator": "Handling Sales Objections Beyond the Script", "Email Outreach Simulator": "Email Outreach End-to-End: Research, Write, Follow Up" },
  insurance5: { "Home Binder": "Home Binder: Format, Security & Maintenance", "Classify the Risk": "The PA Risk Management Framework",
    "Match the Strategy": "The Four Core Risk Strategies" },
  projectcompliance6: { "Compliance Risk": "Corporate Recordkeeping & Minute Books", "Compliance Audit Simulation": "Other Relevant Compliance Frameworks", "Florida Satellite Office": "Business Licensing & Permits",
    "Recovery Memo": "Stakeholder Communication During Project Delays", "Operational Warning Signs": "The KPI Dashboard Template" },
  financial: { "Trust Ledger Reconciliation": "Trust Account Reconciliation Discipline", "Invoice & Bill Audit": "Pre-Bill Review: Checking an Invoice Before It Goes Out",
    "Invoice Follow-Up": "Invoice Management: Tracking, Follow-Up & Collections", "Attention to Detail Test": "Invoice & Payment Reconciliation" },
  accessincident8: { "Least-Privilege Access Audit": "Least-Privilege Access", "Verify Before You Disclose": "Responding to a Suspicious Data Request",
    "Contain the Leak": "Containing a Confidentiality Leak", "The Firm Is Exposed — Size It": "Who to Notify and When",
    "Recommendation & Action Plan": "Post-Incident Review", "The Client Conversation": "Crisis Communication Principles" },
  compliance9: { "Event Invite & Registration Form": "Sending Intake Forms: Event Registration & New-Client Questionnaires", "Event Follow-Up": "Post-Event Follow-Up & ROI Tracking",
    "Meeting Notes & Action Items": "Everyday Meeting Notes & Action Items", "CLE Compliance Dashboard": "CLE / Compliance Tracking",
    "Negative Review Response": "Protecting the Brand Online", "Awards Tracker": "Awards, Recognition & Charitable Coordination" },
  socialmedia10: { "Engagement Rate": "Engagement Rate Benchmarks & Interpretation", "Version Matching": "Platform Details & the One Rule That Applies to All Three",
    "Campaign Math": "Basic Campaign Math", "Brand Kit": "Brand Consistency: Palette, Typography & Imagery" }
};
/* Activities that open the day: their slides come first, right after the day's agenda. The ACT email is the first thing
   a trainee does each day from Day 2 (js/eapa-act-habit.js); Day 1 practices it after the topic that teaches it. */
const AT_START = ["forcemultiplier2", "calendar", "coldcalling4", "insurance5", "projectcompliance6", "financial", "accessincident8", "compliance9", "socialmedia10"]
  .reduce((o, id) => (o[id] = ["ACT Email"], o), {});
const __build = buildDaySlides;
// inline: false gives the old layout (every activity at the end), which the saved-place migration below reads.
function placeLabs(d, slides, inline){
  const at = slides.findIndex(s => s && s.type === "practiceLab");
  if(at < 0) return slides;
  const parts = [];
  relatedTools(d.id).forEach(t => { const a = acts(t); if(a.length) a.forEach((label, i) => parts.push({type: "practiceLab", toolId: t.id, part: i, label, of: a.length})); });
  if(!parts.length) return slides;
  const end = [], after = {}, first = [];   // after: topic index -> the activities that follow it, in the lab's order
  parts.forEach(p => {
    if(inline && (AT_START[p.toolId] || []).includes(p.label)){ p.start = true; first.push(p); return; }
    const h = inline && (AFTER_TOPIC[p.toolId] || {})[p.label], li = h ? d.lessons.findIndex(l => l.h === h) : -1;
    if(li >= 0){ p.after = h; (after[li] = after[li] || []).push(p); } else end.push(p);
  });
  slides.splice(at, 1, ...end);
  // from the last topic back, so earlier positions don't move: after the topic's last slide (its Quick Check when it has one)
  Object.keys(after).map(Number).sort((a, b) => b - a).forEach(li => {
    let k = -1; slides.forEach((s, j) => { if(s && s.lessonIndex === li && (s.type === "topic" || s.type === "quickCheck")) k = j; });
    if(k >= 0) slides.splice(k + 1, 0, ...after[li]); else slides.splice(slides.findIndex(s => s && s.type === "practiceLab") + 1 || slides.length, 0, ...after[li]);
  });
  // the day's opening activities: right after the agenda
  if(first.length){ const ag = slides.findIndex(s => s && s.type === "agenda"); slides.splice(ag + 1, 0, ...first); }
  return slides;
}
buildDaySlides = window.buildDaySlides = function(d){ return placeLabs(d, __build.apply(this, arguments), true); };
const buildDaySlidesAtEnd = d => placeLabs(d, __build(d), false);

/* Saved places are slide positions (last-slide, slide-progress), so when the activities first move into the lessons each
   trainee's place moves to the same slide in the new order (by what the slide is, as migrateDayOrder does), once per day. */
const INLINE_FLAG = id => "deck-lab-inline:" + id;
async function migrateLabsInline(){
  if(!state.dayOrderMigrated) state.dayOrderMigrated = {};
  let ls = false, sp = false, fl = false;
  (typeof DAYS !== "undefined" ? DAYS : []).forEach(d => {
    if(state.dayOrderMigrated[INLINE_FLAG(d.id)]) return;
    state.dayOrderMigrated[INLINE_FLAG(d.id)] = true; fl = true;
    const last = (state.lastSlide || {})[d.id], far = (state.slideProgress || {})[d.id];
    if(!(typeof last === "number" && last > 0) && !(typeof far === "number" && far > 0)) return;
    const oldS = buildDaySlidesAtEnd(d), newS = buildDaySlides(d);
    const key = x => x ? [x.type, x.lessonIndex == null ? "" : x.lessonIndex, x.part == null ? "" : x.part, x.toolId || "", x.section ? 1 : 0].join("|") : "";
    const move = i => { for(let k = i; k < oldS.length; k++){ const j = newS.findIndex(x => key(x) === key(oldS[k])); if(j >= 0) return j; } return -1; };
    if(typeof last === "number" && last > 0){ const j = move(last); if(j >= 0 && j !== last){ state.lastSlide[d.id] = j; ls = true; } }
    // the furthest slide reached: the furthest of every slide reached before, in the new order (an activity now earlier
    // in the deck mustn't pull the trainee's reach back and lock slides they had already seen)
    if(typeof far === "number" && far > 0){ let m = 0; for(let i = 0; i <= Math.min(far, oldS.length - 1); i++){ const j = move(i); if(j > m) m = j; }
      if(m !== far){ state.slideProgress[d.id] = m; sp = true; } }
  });
  if(ls) await storeSet("last-slide", state.lastSlide);
  if(sp) await storeSet("slide-progress", state.slideProgress);
  if(fl) await storeSet("day-order-migrated", state.dayOrderMigrated);
}
// The ACT email's slide, new at the start of Days 2–10, moves every later slide on by one: a trainee's saved place (and
// furthest slide) on those days moves with it, once per day. (A day migrated by migrateLabsInline in the same run already
// has its places in the new order.)
/* Trainees keep their progress as it was graded: a lab with a graded run from before activities were counted one by one
   (and before each day opened with an ACT email) stays done, so nobody redoes work or loses a day they could finish.
   Marked once per trainee (practice-progress <lab>.legacy); a trainee who starts after this change has nothing to mark. */
const LEGACY_FLAG = "lab-legacy-v1";
async function markLegacyLabs(){
  if(!state.dayOrderMigrated) state.dayOrderMigrated = {};
  if(state.dayOrderMigrated[LEGACY_FLAG]) return;
  state.dayOrderMigrated[LEGACY_FLAG] = true;
  let changed = false;
  Object.entries(state.practiceProgress || {}).forEach(([id, p]) => {
    if(!p || !((p.runs || 0) > 0) || p.legacy) return;
    const t = PRACTICE_TOOLS.find(x => x.id === id), a = t ? acts(t) : [], parts = p.parts || {};
    if(a.length && a.some(l => typeof parts[l] !== "number")){ p.legacy = true; changed = true; }
  });
  if(changed) await storeSet("practice-progress", state.practiceProgress);
  await storeSet("day-order-migrated", state.dayOrderMigrated);
}
const ACT_FLAG = id => "act-first:" + id;
async function migrateActFirst(already){
  if(!state.dayOrderMigrated) state.dayOrderMigrated = {};
  let ls = false, sp = false, fl = false;
  (typeof DAYS !== "undefined" ? DAYS : []).forEach(d => {
    if(state.dayOrderMigrated[ACT_FLAG(d.id)]) return;
    state.dayOrderMigrated[ACT_FLAG(d.id)] = true; fl = true;
    if(!already.includes(d.id)) return;
    const n = buildDaySlides(d).filter(s => s && s.type === "practiceLab" && s.start).length; if(!n) return;
    const ag = buildDaySlides(d).findIndex(s => s && s.type === "agenda");
    const move = v => typeof v === "number" && v > ag ? v + n : v;
    const last = (state.lastSlide || {})[d.id], far = (state.slideProgress || {})[d.id];
    if(move(last) !== last){ state.lastSlide[d.id] = move(last); ls = true; }
    if(move(far) !== far){ state.slideProgress[d.id] = move(far); sp = true; }
  });
  if(ls) await storeSet("last-slide", state.lastSlide);
  if(sp) await storeSet("slide-progress", state.slideProgress);
  if(fl) await storeSet("day-order-migrated", state.dayOrderMigrated);
}
if(typeof migrateQuickCheckOrder === "function"){
  const __mq = migrateQuickCheckOrder;
  migrateQuickCheckOrder = window.migrateQuickCheckOrder = async function(){
    const r = await __mq.apply(this, arguments);
    const already = (typeof DAYS !== "undefined" ? DAYS : []).filter(d => state.dayOrderMigrated && state.dayOrderMigrated[INLINE_FLAG(d.id)]).map(d => d.id);
    try{ await migrateLabsInline(); }catch(e){}
    try{ await migrateActFirst(already); }catch(e){}
    try{ await markLegacyLabs(); }catch(e){}
    return r; };
}
function labSlideHtml(d, slide){
  const t = PRACTICE_TOOLS.find(x => x.id === slide.toolId); if(!t) return "";
  const p = pp(t.id), parts = (p && p.parts) || {}, mine = parts[slide.label];
  const graded = typeof mine === "number";
  const list = acts(t).map((l, i) => { const s = parts[l];
    return `<li class="${i === slide.part ? "on" : ""}${typeof s === "number" ? " done" : ""}"><span>${typeof s === "number" ? "✓" : i + 1}</span>${E(l)}${typeof s === "number" ? ` <em>${s}%</em>` : ""}</li>`; }).join("");
  const left = kcPassed(d.id) ? (labDone(d.id) ? `✓ Day ${d.id} is complete: Knowledge Check passed and Practice Lab done.` : `✓ Knowledge Check passed. A graded Practice Lab activity completes Day ${d.id}.`)
    : (() => { const L = labLeft(d.id); return L.left.length ? `${L.all.length - L.left.length} of ${L.all.length} Practice Lab activities done. The Knowledge Check opens once all ${L.all.length} are graded.` : `✓ Every Practice Lab activity is done: the Knowledge Check is open.`; })();
  return `
    <div class="topic-separator">DAY ${d.id} &middot; ${slide.start ? "FIRST THING TODAY" : slide.after ? "PRACTICE IN THE SESSION" : "PRACTICE LAB"} &middot; ACTIVITY ${slide.part + 1} OF ${slide.of}</div>
    <div class="card edl">
      <div class="edl-main">
        <div class="edl-kick">${t.icon} ${E(t.title)}</div>
        <h3 class="edl-h">${E(slide.label)}</h3>
        ${slide.after ? `<p class="edl-after">🎯 Practice it now: you've just covered <b>${E(slide.after)}</b>.</p>` : ""}
        <p class="edl-p">${E(t.desc)}</p>
        <div class="edl-state ${graded ? "ok" : ""}">${graded ? `✓ Graded · best ${mine}%` : "Not graded yet"}</div>
        <button type="button" class="btn btn-navy edl-go" onclick="eapaDeckLab.open('${E(t.id)}', ${slide.part}, ${d.id})">▶ ${graded ? "Open again" : "Start"}: ${E(slide.label)}</button>
        <p class="edl-left">${left}</p>
      </div>
      <ol class="edl-list" aria-label="This Practice Lab's activities">${list}</ol>
    </div>`;
}
const __content = renderDaySlideContent;
renderDaySlideContent = window.renderDaySlideContent = function(d, slide){
  if(slide && slide.type === "practiceLab" && slide.toolId) return labSlideHtml(d, slide);
  return __content.apply(this, arguments);
};
const __title = typeof daySlideTitle === "function" ? daySlideTitle : null;
if(__title) daySlideTitle = window.daySlideTitle = function(d, slide){
  if(slide && slide.type === "practiceLab" && slide.toolId) return `Practice Lab · ${slide.label}`;
  return __title.apply(this, arguments);
};

/* ▶ Start: the lab, on that activity; back to this slide afterwards */
let back = null;   // {dayId, slide}
function open(toolId, part, dayId){
  back = {dayId, slide: state.lessonSlide || 0, toolId};
  state.labWizard = {toolId, idx: part}; state.pendingWizardIndex = part; state.pendingWizardScrollTop = true;
  goto("tool", toolId);
}
function toDeck(){
  const b = back; if(!b) return false;
  back = null;
  state.view = "day"; state.dayId = b.dayId; state.dayViewMode = "slides"; state.quizSubmitted = false; state.slideInterstitial = null;
  state.lessonSlide = b.slide;
  window.scrollTo({top: 0}); render();
  return true;
}
if(typeof returnToLessonCard === "function"){
  const __ret = returnToLessonCard;
  returnToLessonCard = window.returnToLessonCard = function(dayId){
    if(back && back.dayId === dayId && toDeck()) return;
    return __ret.apply(this, arguments);
  };
}
// on the lab, the page's own "← Back to Day N" (navBack) goes back to the slide it was opened from, not the deck's first slide
if(typeof navBack === "function"){
  const __navBack = navBack;
  navBack = window.navBack = function(){
    if(back && state.view === "tool" && back.toolId === state.toolId && toDeck()) return;
    return __navBack.apply(this, arguments);
  };
}
const __after = window.afterRender;
window.afterRender = function(){
  const r = __after ? __after.apply(this, arguments) : undefined;
  if(back && (state.view !== "tool" || back.toolId !== state.toolId) && state.view !== "day") back = null;   // went elsewhere
  return r;
};

/* ---------- each activity's grade, and the day completing itself ---------- */
if(typeof bumpPracticeProgress === "function"){
  const __bump = bumpPracticeProgress;
  bumpPracticeProgress = window.bumpPracticeProgress = async function(toolId, score){
    const onLab = state.view === "tool" && state.toolId;
    const label = onLab && typeof toolState !== "undefined" && toolState && toolState.wizardLabels ? toolState.wizardLabels[toolState.wizardIndex || 0] : null;
    const days = onLab ? (PRACTICE_TOOLS.find(t => t.id === state.toolId) || {}).relates : "";
    const dayIds = (String(days || "").match(/\d+/g) || []).map(Number);
    const before = dayIds.filter(dayComplete);
    if(label && typeof score === "number"){
      state.practiceProgress = state.practiceProgress || {};
      const cur = state.practiceProgress[state.toolId] || (state.practiceProgress[state.toolId] = {runs: 0, bestScore: 0, history: []});
      cur.parts = cur.parts || {};
      cur.parts[label] = Math.max(typeof cur.parts[label] === "number" ? cur.parts[label] : 0, Math.round(score));
    }
    const r = await __bump.apply(this, arguments);
    dayIds.filter(n => !before.includes(n) && dayComplete(n)).forEach(n => { try{ toast(`🎉 Day ${n} complete: Knowledge Check passed and Practice Lab done.`); }catch(e){} });
    return r;
  };
}
if(typeof submitQuiz === "function"){
  const __quiz = submitQuiz;
  submitQuiz = window.submitQuiz = async function(dayId){
    const was = dayComplete(dayId);
    const r = await __quiz.apply(this, arguments);
    if(!was && kcPassed(dayId) && !labDone(dayId)){
      try{ toast(`✓ Knowledge Check passed. Do Day ${dayId}'s Practice Lab and the day completes itself.`); }catch(e){}
    }
    return r;
  };
}

/* ---------- the day card: no ✓ Finish Training; complete once both are done ---------- */
if(typeof moduleCard === "function"){
  const __card = moduleCard;
  moduleCard = window.moduleCard = function(d){
    // the card draws "done" from progress.done (the Knowledge Check): until the Practice Lab is done too, draw it as open
    const p = state.progress && state.progress[d.id], hold = p && p.done && !labDone(d.id);
    if(hold) p.done = false;
    let html;
    try{ html = __card.apply(this, arguments); } finally { if(hold) p.done = true; }
    html = html.replace(/<button class="btn btn-ghost btn-sm module-finish-btn" onclick="finishTrainingForDay\(\d+\)">✓ Finish Training<\/button>/, "");
    if(hold) html = html.replace(/(<div class="mh-day">Day \d+)/, `$1 &middot; ✓ Knowledge Check · Practice Lab to do`);
    return html;
  };
}

/* ---------- 3. the Practice Lab before the Knowledge Check ----------
   Trainees were reaching the Knowledge Check without doing the day's Practice Lab (its slides can be passed with Next).
   The Knowledge Check now opens once EVERY activity of the day's Practice Lab is graded (each activity's best mark, in
   practice-progress parts): until then it shows what is left, with ▶ Start on each, which opens the lab on that activity
   from its own slide in the deck. Not held: a trainer (unless in 👁 Trainee view), a day whose Knowledge Check is already
   passed, and a result just submitted. Every lab activity saves its mark when graded (.github/scripts/deck-lab.cjs). */
function labLeft(dayId){
  const left = [], all = [];
  relatedTools(dayId).forEach(t => acts(t).forEach((label, part) => { const v = ((pp(t.id) || {}).parts || {})[label];
    const lg = !!(pp(t.id) || {}).legacy;
    const x = {t, label, part, done: typeof v === "number" || lg, v: typeof v === "number" ? v : null}; all.push(x); if(!x.done) left.push(x); }));
  return {left, all};
}
function kcHeld(dayId){
  if(state.isAdmin && !state.adminPreview) return false;
  if(kcPassed(dayId) || state.quizSubmitted) return false;
  return labLeft(dayId).left.length > 0;
}
// ▶ Start from the checkpoint: to the activity's own slide in the deck first, so the lab's ← Back returns there
function startFromGate(dayId, toolId, part){
  const d = DAYS.find(x => x.id === dayId); const i = d ? buildDaySlides(d).findIndex(s => s && s.type === "practiceLab" && s.toolId === toolId && s.part === part) : -1;
  state.dayViewMode = "slides"; if(i >= 0){ state.lessonSlide = i; if((state.maxSlideReached || 0) < i) state.maxSlideReached = i; }
  open(toolId, part, dayId);
}
function gateHtml(d){
  const {left, all} = labLeft(d.id), done = all.length - left.length;
  return `<div class="card edl-gate">
    <div class="edl-kick">🛠 Before the Knowledge Check</div>
    <h3 class="edl-h">Finish Day ${d.id}'s Practice Lab first</h3>
    <p class="edl-p">The Knowledge Check opens once every Practice Lab activity for today is graded. <b>${done} of ${all.length} done.</b></p>
    <ol class="edl-list edl-gate-list">${all.map(x => `<li class="${x.done ? "done" : ""}"><span>${x.done ? "✓" : x.part + 1}</span>${E(x.label)}
      ${x.done ? `<em>${x.v}%</em>` : `<button type="button" class="btn btn-navy btn-sm edl-gate-go" onclick="eapaDeckLab.startFromGate(${d.id}, '${E(x.t.id)}', ${x.part})">▶ Start</button>`}</li>`).join("")}</ol>
  </div>`;
}
if(typeof renderQuiz === "function"){
  const __quizHtml = renderQuiz;
  renderQuiz = window.renderQuiz = function(d){
    if(d && state.view === "day" && kcHeld(d.id)) return gateHtml(d);
    return __quizHtml.apply(this, arguments);
  };
}

// one lab's progress, counted by activity (what the Knowledge Check waits for): the Practice Lab cards and the lab's own
// header say "Completed" only once every activity is graded
function labProgress(toolId){
  const t = PRACTICE_TOOLS.find(x => x.id === toolId), a = t ? acts(t) : [], p = pp(toolId), parts = (p && p.parts) || {};
  const done = p && p.legacy ? a.length : a.filter(l => typeof parts[l] === "number").length;
  return {total: a.length, done, best: p && typeof p.bestScore === "number" && (p.runs || 0) > 0 ? p.bestScore : null, runs: (p && p.runs) || 0,
    complete: a.length > 0 && done === a.length, started: done > 0 || ((p && p.runs) || 0) > 0};
}

window.eapaDeckLab = {ACTIVITIES, AFTER_TOPIC, AT_START, migrateActFirst, markLegacyLabs, open, toDeck, dayComplete, buildDaySlidesAtEnd, migrateLabsInline, labLeft, kcHeld, startFromGate, labProgress};

const st = document.createElement("style"); st.id = "eapa-deck-lab"; st.textContent = `
.edl{text-align:left;display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:22px;padding:22px 24px;background:#FFFBF3;border-color:var(--orange-soft,#F3D2B0);align-items:start;}
.edl-kick{font:800 16px Arial,sans-serif;color:#46508A;} .edl-h{margin:6px 0 8px;font:800 24px Arial,sans-serif;color:var(--navy,#1E2340);}
.edl-p{margin:0 0 12px;font:600 16px/1.45 Arial,sans-serif;color:#37394A;}
.edl-after{margin:-4px 0 10px;font:600 15px/1.4 Arial,sans-serif;color:#A34E14;}
.edl-state{display:inline-block;margin-bottom:12px;padding:4px 12px;border-radius:999px;background:#EEF0F6;font:800 16px Arial,sans-serif;color:#4A5070;}
.edl-state.ok{background:#E6F4EA;color:#0B5D1E;}
.edl-go{display:block;font-size:17px;font-weight:800;padding:12px 18px;}
.edl-left{margin:12px 0 0;font:700 16px/1.4 Arial,sans-serif;color:#7A4B00;}
.edl-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;}
.edl-list li{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid #E4E7EF;border-radius:10px;background:#fff;font:700 16px Arial,sans-serif;color:#37394A;}
.edl-list li span{flex:0 0 26px;height:26px;border-radius:50%;display:grid;place-items:center;background:#EEF0F6;color:#1E2340;font-weight:800;}
.edl-list li.done span{background:#1E8E3E;color:#fff;} .edl-list li em{margin-left:auto;font-style:normal;color:#0B5D1E;}
.edl-list li.on{border-color:#DB8437;box-shadow:0 0 0 2px rgba(219,132,55,.25);}
.edl-gate{text-align:left;padding:22px 24px;background:#FFFBF3;border-color:var(--orange-soft,#F3D2B0);}
.edl-gate-list li .edl-gate-go{margin-left:auto;font-size:14px;padding:6px 14px;}
@media(max-width:760px){ .edl{grid-template-columns:1fr;} }
`;
(document.head || document.documentElement).appendChild(st);
})();
