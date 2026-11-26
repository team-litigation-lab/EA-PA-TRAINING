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
  dossier1: ["Client Dossier", "Preference Trackers", "ACT Email", "Gatekeeping Practice"],
  forcemultiplier2: ["Anticipate the Real Need", "Prompt Engineering", "The Full Scenario", "Inbox Triage"],
  calendar: ["Calendar Conflict Resolver", "Daily Briefing Prompt", "Proactive EA Tasks", "Travel & the Trip That Breaks", "Crisis Roleplay"],
  coldcalling4: ["Prioritize the Day", "Prospect Call Log", "Lead Generation Practice", "Live Intake Call Simulator", "Email Outreach Simulator", "Crisis Roleplay"],
  insurance5: ["Classify the Risk", "Match the Strategy", "Home Binder", "Crisis Roleplay"],
  projectcompliance6: ["Compliance Risk", "Operational Warning Signs", "Recovery Memo", "Crisis Roleplay", "Compliance Audit Simulation"],
  financial: ["Trust Ledger Reconciliation", "Invoice & Bill Audit", "Invoice Follow-Up", "Attention to Detail Test", "Crisis Roleplay"],
  accessincident8: ["Least-Privilege Access Audit", "Verify Before You Disclose", "Contain the Leak", "The Firm Is Exposed — Size It", "Recommendation & Action Plan", "The Client Conversation", "Crisis Roleplay"],
  compliance9: ["Event Invite & Registration Form", "Event Follow-Up", "Meeting Notes & Action Items", "CLE Compliance Dashboard", "Negative Review Response", "Awards Tracker", "Crisis Roleplay"],
  socialmedia10: ["Engagement Rate", "Version Matching", "Campaign Math", "Brand Kit", "Marketing Plan", "Crisis Roleplay"]
};
const acts = t => ACTIVITIES[t.id] || [];
const pp = id => (state.practiceProgress || {})[id] || null;
const kcPassed = dayId => !!(state.progress && state.progress[dayId] && state.progress[dayId].done);
const labDone = dayId => typeof dayLabDone === "function" ? dayLabDone(dayId) : true;
const dayComplete = dayId => kcPassed(dayId) && labDone(dayId);

/* ---------- 1. the deck: a slide for each activity of the day's Practice Lab ---------- */
const __build = buildDaySlides;
buildDaySlides = window.buildDaySlides = function(d){
  const slides = __build.apply(this, arguments);
  const at = slides.findIndex(s => s && s.type === "practiceLab");
  if(at < 0) return slides;
  const parts = [];
  relatedTools(d.id).forEach(t => { const a = acts(t); if(a.length) a.forEach((label, i) => parts.push({type: "practiceLab", toolId: t.id, part: i, label, of: a.length})); });
  if(!parts.length) return slides;
  slides.splice(at, 1, ...parts);
  return slides;
};
function labSlideHtml(d, slide){
  const t = PRACTICE_TOOLS.find(x => x.id === slide.toolId); if(!t) return "";
  const p = pp(t.id), parts = (p && p.parts) || {}, mine = parts[slide.label];
  const graded = typeof mine === "number";
  const list = acts(t).map((l, i) => { const s = parts[l];
    return `<li class="${i === slide.part ? "on" : ""}${typeof s === "number" ? " done" : ""}"><span>${typeof s === "number" ? "✓" : i + 1}</span>${E(l)}${typeof s === "number" ? ` <em>${s}%</em>` : ""}</li>`; }).join("");
  const left = kcPassed(d.id) ? (labDone(d.id) ? `✓ Day ${d.id} is complete: Knowledge Check passed and Practice Lab done.` : `✓ Knowledge Check passed. A graded Practice Lab activity completes Day ${d.id}.`)
    : (labDone(d.id) ? `✓ Practice Lab done. Pass the Knowledge Check (next) and Day ${d.id} completes itself.` : `Do the Practice Lab here, then the Knowledge Check: Day ${d.id} completes itself when both are done.`);
  return `
    <div class="topic-separator">DAY ${d.id} &middot; PRACTICE LAB &middot; ACTIVITY ${slide.part + 1} OF ${slide.of}</div>
    <div class="card edl">
      <div class="edl-main">
        <div class="edl-kick">${t.icon} ${E(t.title)}</div>
        <h3 class="edl-h">${E(slide.label)}</h3>
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

window.eapaDeckLab = {ACTIVITIES, open, toDeck, dayComplete};

const st = document.createElement("style"); st.id = "eapa-deck-lab"; st.textContent = `
.edl{text-align:left;display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:22px;padding:22px 24px;background:#FFFBF3;border-color:var(--orange-soft,#F3D2B0);align-items:start;}
.edl-kick{font:800 16px Arial,sans-serif;color:#46508A;} .edl-h{margin:6px 0 8px;font:800 24px Arial,sans-serif;color:var(--navy,#1E2340);}
.edl-p{margin:0 0 12px;font:600 16px/1.45 Arial,sans-serif;color:#37394A;}
.edl-state{display:inline-block;margin-bottom:12px;padding:4px 12px;border-radius:999px;background:#EEF0F6;font:800 16px Arial,sans-serif;color:#4A5070;}
.edl-state.ok{background:#E6F4EA;color:#0B5D1E;}
.edl-go{display:block;font-size:17px;font-weight:800;padding:12px 18px;}
.edl-left{margin:12px 0 0;font:700 16px/1.4 Arial,sans-serif;color:#7A4B00;}
.edl-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;}
.edl-list li{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid #E4E7EF;border-radius:10px;background:#fff;font:700 16px Arial,sans-serif;color:#37394A;}
.edl-list li span{flex:0 0 26px;height:26px;border-radius:50%;display:grid;place-items:center;background:#EEF0F6;color:#1E2340;font-weight:800;}
.edl-list li.done span{background:#1E8E3E;color:#fff;} .edl-list li em{margin-left:auto;font-style:normal;color:#0B5D1E;}
.edl-list li.on{border-color:#DB8437;box-shadow:0 0 0 2px rgba(219,132,55,.25);}
@media(max-width:760px){ .edl{grid-template-columns:1fr;} }
`;
(document.head || document.documentElement).appendChild(st);
})();
