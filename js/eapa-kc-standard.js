/* ============================================================
   ✍️ The Knowledge Check, the Standard way: 20 questions a day, bigger and clearer, its buttons in one footer bar.

   • 20 questions: each day keeps its full bank (d.quizBank: the built-in questions and any the Content Studio
     published) and the check asks 20 of them, spread evenly across the bank so every part of the day is covered.
     A trainee's recorded results stay as they were: a check already taken with more questions keeps its score.
   • The look: a solid white card, the question in large navy type, the answers large, with strong contrast; the
     chosen answer in orange.
   • One footer bar: ← Back to roadmap, ← Back to lessons and 📑 Review lessons in a new tab on the left; the
     question's ← Back and Next → (or Submit) on the right. Nothing else floats around the check.
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined" || typeof DAYS === "undefined" || typeof renderQuiz !== "function") return;
const N = 20;
// evenly spread across the bank: question 0, then every (n / 20)th
const pick = bank => bank.length <= N ? bank.slice() : Array.from({length: N}, (_, i) => bank[Math.floor(i * bank.length / N)]);
function trim(d){
  if(!d || !Array.isArray(d.quiz)) return;
  if(d.__kcPicked === d.quiz) return;   // already the 20 (the same array)
  d.quizBank = d.quiz.slice();
  d.quiz = pick(d.quizBank); d.__kcPicked = d.quiz;
}
DAYS.forEach(trim);
// the Content Studio adds published questions to the day's bank: pick the 20 again from the whole bank
if(typeof mergeExtraQuiz === "function"){
  mergeExtraQuiz = window.mergeExtraQuiz = function(d){
    const base = (d.quizBank || d.quiz).filter(q => !q.__extra);
    const extra = ((state.extraQuiz || {})[d.id] || []).filter(q => q.status === "published").map(q => Object.assign({}, q, {__extra: true}));
    d.quizBank = base.concat(extra); d.quiz = pick(d.quizBank); d.__kcPicked = d.quiz;
  };
}

/* ---------- the footer bar ---------- */
const pageLinks = d => `<button type="button" class="kc-fl" onclick="if(window.eapaRoadmap) eapaRoadmap.open(${d.id}); else goto('dashboard')" title="The day's roadmap: its agenda, each part of the deck one click away">← Back to roadmap</button>
  <button type="button" class="kc-fl" onclick="backToSlidesFromKnowledgeCheck()">← Back to lessons</button>
  <button type="button" class="kc-fl" onclick="openRouteInNewTab('#/day/${d.id}')" title="Keep this Knowledge Check open and review the lesson slides side by side">📑 Review lessons in a new tab</button>`;
const __quiz = renderQuiz;
renderQuiz = window.renderQuiz = function(d){
  trim(d);
  let html = __quiz.apply(this, arguments);
  // the question's own Back / Next (or Submit) move into the footer's right side
  let nav = "";
  html = String(html).replace(/<div class="quiz-nav">([\s\S]*?)<\/div>\s*$/, (_, inner) => { nav = inner; return ""; });
  return `${html}<div class="kc-foot" role="navigation" aria-label="Knowledge Check"><div class="kc-foot-l">${pageLinks(d)}</div><div class="kc-foot-r">${nav}</div></div>`;
};
// the page's own copies (the link above the title, the two buttons under the check) are gone: they're in the footer
if(typeof renderDay === "function"){
  const __day = renderDay;
  renderDay = window.renderDay = function(id){
    const d = DAYS.find(x => x.id === id); if(d) trim(d);
    let html = __day.apply(this, arguments);
    if(state.dayViewMode !== "knowledgeCheck") return html;
    return String(html)
      .replace(/<a class="back-link" onclick="goto\('dashboard'\)">&larr; Back to roadmap<\/a>/, "")
      .replace(/<button class="btn btn-ghost btn-sm"[^>]*onclick="backToSlidesFromKnowledgeCheck\(\)">&larr; Back to lessons<\/button>/, "")
      .replace(/<button class="btn btn-ghost btn-sm"[^>]*onclick="openRouteInNewTab\('#\/day\/\d+'\)"[^>]*>📑 Review lessons in a new tab<\/button>/, "");
  };
}

window.eapaKc = {N, pick, trim};

const st = document.createElement("style"); st.id = "eapa-kc-standard"; st.textContent = `
#knowledgeCheckAnchor{font-size:30px !important;color:#1E2340 !important;}
#knowledgeCheckAnchor .tag{font-size:13px;background:#1E2340;color:#fff;}
#quizWrap .quiz-dots{gap:8px;margin:6px 0 10px;}
#quizWrap .quiz-dot{width:14px;height:14px;background:#C9CEDD;}
#quizWrap .quiz-dot.done{background:#1E2340;} #quizWrap .quiz-dot.active{background:#DB8437;width:30px;}
#quizWrap .quiz-progress-label{font:800 15px 'Inter',system-ui,sans-serif;letter-spacing:.08em;color:#1E2340;}
#quizWrap .quiz-card{background:#fff !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;border:1px solid #DCE0EA !important;
  border-top:5px solid #1E2340 !important;border-radius:16px !important;padding:28px 30px !important;box-shadow:0 10px 28px -16px rgba(30,35,64,.35) !important;}
#quizWrap .quiz-q{font-family:'Fraunces',Georgia,serif !important;font-size:26px !important;line-height:1.35 !important;font-weight:700 !important;color:#141A2E !important;margin:0 0 20px !important;}
#quizWrap .quiz-grid{gap:14px;}
#quizWrap .quiz-grid-opt{background:#F7F8FC !important;border:2px solid #D3D8E6 !important;border-radius:12px !important;padding:16px 18px !important;min-height:64px;}
#quizWrap .quiz-grid-opt:hover{border-color:#1E2340 !important;background:#fff !important;}
#quizWrap .quiz-grid-opt.selected{border-color:#DB8437 !important;background:#FFF4E8 !important;box-shadow:0 0 0 3px rgba(219,132,55,.22);}
#quizWrap .quiz-grid-letter{width:34px;height:34px;font-size:16px;background:#1E2340;color:#fff;}
#quizWrap .quiz-grid-opt.selected .quiz-grid-letter{background:#DB8437;color:#1B1E2E;}
#quizWrap .quiz-grid-text{font-size:18px !important;line-height:1.45 !important;font-weight:600 !important;color:#141A2E !important;}
.kc-foot{position:sticky;bottom:0;z-index:20;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px;margin:22px 0 0;
  padding:12px 16px;background:linear-gradient(135deg,#1E2340,#2B3157);border-top:3px solid #DB8437;border-radius:14px;box-shadow:0 -8px 24px -14px rgba(20,26,46,.45);}
.kc-foot-l,.kc-foot-r{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
.kc-fl{font:700 14px 'Inter',system-ui,sans-serif;color:#fff;background:transparent;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:8px 14px;cursor:pointer;}
.kc-fl:hover{background:rgba(255,255,255,.12);border-color:#fff;}
.kc-foot-r .btn{font-size:16px !important;font-weight:800 !important;padding:12px 26px !important;border-radius:999px !important;}
.kc-foot-r .btn-ghost{background:#fff !important;color:#1E2340 !important;border:0 !important;}
.kc-foot-r .btn-ghost:disabled{opacity:.45;}
.kc-foot-r .btn-primary{background:#DB8437 !important;color:#1B1E2E !important;border:0 !important;}
.kc-foot-r .btn-primary:disabled{background:#8A8FA6 !important;color:#fff !important;opacity:1;}
@media (max-width:760px){ #quizWrap .quiz-q{font-size:21px !important;} #quizWrap .quiz-grid-text{font-size:16px !important;}
  .kc-foot{flex-direction:column;align-items:stretch;} .kc-foot-r{justify-content:space-between;} }
`;
(document.head || document.documentElement).appendChild(st);
})();
