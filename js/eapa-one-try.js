/* ============================================================
   🎯 ONE TRY, PASS OR FAIL (the owner: "just one try, pass or fail")
   Every Practice Lab exercise and every day's Knowledge Check is taken once. 70% or more is a Pass; anything
   below is a Fail. There are no repeats or retakes for a trainee (a trainer, outside 👁 Trainee view, can still
   run a check again to try it out).
     • Practice Lab: LAB_ATTEMPT_CAP is 0 in index.html, so an exercise already submitted can't be submitted again
       (useLabAttempt). This file replaces the "3 attempts" disclaimer and the "repeats left" chip with the one-try
       rule, and labels each tool's result Pass or Fail.
     • Knowledge Checks: a check already taken opens on its result, never a new attempt; Retake is gone.
   Nothing already saved is changed or removed: a trainee who took a check before keeps their best score, and that
   score is their Pass or Fail now; finished exercises stay finished. Trainees pick up where they left off.
   Loaded last.
   ============================================================ */
(function(){
  "use strict";
  if(typeof document === "undefined") return;
  const PASS = 70;
  const trainer = () => typeof state !== "undefined" && !!state.isAdmin && !state.adminPreview;
  const verdict = pct => pct == null ? "" : pct >= PASS ? "Pass" : "Fail";
  const kcRec = dayId => (typeof state !== "undefined" && state.progress && state.progress[dayId]) || null;
  const kcTaken = dayId => { const r = kcRec(dayId); return !!(r && Array.isArray(r.history) && r.history.length); };
  const esc_ = v => String(v == null ? "" : v).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));

  /* ---------- Practice Lab: the disclaimer and the chips ---------- */
  if(typeof window.renderLabAttemptBanner === "function" || typeof renderLabAttemptBanner === "function"){
    window.renderLabAttemptBanner = renderLabAttemptBanner = function(dayId){
      dayId = dayId || (typeof currentLabDay === "function" ? currentLabDay() : null);
      if(!dayId) return "";
      const day10 = +dayId === 10 ? `<p>Day 10 is the final evaluation: the <b>Brand Kit</b> and the <b>Marketing Plan</b> are submitted once, like every exercise.</p>` : "";
      return `<div class="lab-disclaimer one-try" data-day="${dayId}" role="note">
        <div class="lab-disc-ic">🎯</div>
        <div class="lab-disc-body">
          <b>One try · Pass or Fail</b>
          <p>Each exercise is submitted <b>once</b> and graded: <b>${PASS}% or more is a Pass</b>, below is a Fail. Check your work before you submit.</p>
          ${day10}
        </div></div>`;
    };
  }
  if(typeof labChipsHtml === "function"){
    window.labChipsHtml = labChipsHtml = function(t){
      const p = (state.practiceProgress || {})[t.id];
      const n = (typeof toolState !== "undefined" && toolState && toolState.wizardLabels) ? toolState.wizardLabels.length : 0;
      return (n ? `<span>🧩 ${n} activities</span>` : "")
        + (p ? `<span class="${p.bestScore >= PASS ? "ok" : "bad"}">${p.bestScore >= PASS ? "✓" : "✗"} ${p.bestScore}% · ${verdict(p.bestScore)}</span>` : `<span>◻ Not started</span>`)
        + `<span>🎯 One try · Pass ${PASS}%+ or Fail</span>`;
    };
  }
  // (the Practice Lab's tool cards: "Completed — best score 82% (2 runs)" → "Completed · 82% · Pass")
  if(typeof renderToolCards === "function" && !renderToolCards.__oneTry){
    const __cards = renderToolCards;
    window.renderToolCards = renderToolCards = function(){
      return String(__cards.apply(this, arguments)).replace(/Completed — best score (\d+)% \(\d+ runs?\)/g, (m, n) => `Completed · ${n}% · ${verdict(+n)}`);
    };
    renderToolCards.__oneTry = true;
  }

  /* ---------- Knowledge Checks ---------- */
  // a check already taken opens on its result (its best score, as kept), never on a new attempt
  function showTaken(d){
    const r = kcRec(d.id) || {}, total = (d.quiz || []).length || 1, sc = typeof r.score === "number" ? r.score : 0;
    state.lastScore = sc; state.lastTotal = total; state.lastCorrect = Math.round(sc * total / 100); state.lastPassed = sc >= PASS;
    state.quizSubmitted = true;
  }
  if(typeof renderQuiz === "function" && !renderQuiz.__oneTry){
    const __rq = renderQuiz;
    window.renderQuiz = renderQuiz = function(d){
      if(d && !trainer() && kcTaken(d.id) && !state.quizSubmitted) showTaken(d);
      return __rq.apply(this, arguments);
    };
    renderQuiz.__oneTry = true;
  }
  if(typeof submitQuiz === "function" && !submitQuiz.__oneTry){
    const __sq = submitQuiz;
    window.submitQuiz = submitQuiz = async function(dayId){
      if(!trainer() && kcTaken(dayId)){
        if(typeof toast === "function") toast(`One try only: your Day ${dayId} Knowledge Check is already taken, and its result is final.`);
        const d = DAYS.find(x => x.id === dayId), w = document.getElementById("quizWrap");
        if(d && w){ showTaken(d); w.innerHTML = renderQuiz(d); }
        return;
      }
      return __sq.apply(this, arguments);
    };
    submitQuiz.__oneTry = true;
  }
  if(typeof retakeQuiz === "function" && !retakeQuiz.__oneTry){
    const __rt = retakeQuiz;
    window.retakeQuiz = retakeQuiz = function(dayId){
      if(!trainer() && kcTaken(dayId)){ if(typeof toast === "function") toast("One try only: a Knowledge Check can't be retaken."); return; }
      return __rt.apply(this, arguments);
    };
    retakeQuiz.__oneTry = true;
  }
  // the result: Pass or Fail, no Retake, and what to do next without a retake
  if(typeof renderQuizNextStep === "function"){
    const __ns = renderQuizNextStep;
    window.renderQuizNextStep = renderQuizNextStep = function(d, passed){
      if(passed) return __ns.apply(this, arguments);
      const nextId = d.id + 1, isLast = d.id >= DAYS.length, cleared = !isLast && typeof dayUnlocked === "function" && dayUnlocked(nextId);
      const lab = typeof relatedTools === "function" ? relatedTools(d.id)[0] : null;
      const lines = [`Each Knowledge Check is one try, so this result is final. ${PASS}% was needed to pass.`];
      if(!isLast) lines.push(cleared ? `<b>Next step:</b> continue to <b>Day ${nextId}</b>.`
        : `<b>Next step:</b> complete the <b>Day ${d.id} Practice Lab</b>${lab ? ` (“${esc_(lab.title)}”)` : ""} to unlock Day ${nextId}.`);
      lines.push("Go over the questions you missed below, and talk them through with your trainer.");
      return `<div class="quiz-next-step qns-stop"><div class="qns-title">Fail — Day ${d.id} Knowledge Check</div>${lines.map(x => `<p>${x}</p>`).join("")}</div>`;
    };
  }
  if(typeof renderQuizResult === "function" && !renderQuizResult.__oneTry){
    const __qr = renderQuizResult;
    window.renderQuizResult = renderQuizResult = function(d){
      let h = String(__qr.apply(this, arguments));
      h = h.replace(/<td class="qh-pass">Passed<\/td>/g, '<td class="qh-pass">Pass</td>').replace(/<td class="qh-fail">Not yet<\/td>/g, '<td class="qh-fail">Fail</td>');
      if(!trainer()) h = h.replace(/<button class="btn btn-ghost" onclick="retakeQuiz\(\d+\)">Retake Quiz<\/button>/, "");
      const v = state.lastPassed ? "Pass" : "Fail";
      return h.replace('<div class="card quiz-result">', `<div class="card quiz-result"><div class="one-try-verdict ${state.lastPassed ? "is-pass" : "is-fail"}">${v}</div>`);
    };
    renderQuizResult.__oneTry = true;
  }

  const st = document.createElement("style"); st.id = "eapa-one-try"; st.textContent = `
.lab-disclaimer.one-try{background:#F3F5FB;border-color:#C9CFE6;border-left-color:#1E2340;}
.lab-disclaimer.one-try .lab-disc-body > b{color:#1E2340;}
.lab-disclaimer.one-try p{color:#2E3450;}
.one-try-verdict{display:inline-block;margin:0 0 10px;padding:4px 18px;border-radius:999px;font:900 18px/1.3 Poppins,Inter,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;}
.one-try-verdict.is-pass{background:#E7F6EC;color:#14603A;border:2px solid #2E9B5B;}
.one-try-verdict.is-fail{background:#FDECEC;color:#8E1F1F;border:2px solid #D14B4B;}
/* (no Retake on a lesson card: a Knowledge Check is one try) */
.module-review-row button[title^="Retake the Knowledge Check"],button[onclick="repeatActivity()"]{display:none !important;}
`; document.head.appendChild(st);
})();
