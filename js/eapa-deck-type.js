/* 🔠 The lesson deck's type, set the way the Case Management and Foundational Training decks set it: body text that
   reads at 16px or more on a laptop, an opening line that leads, and labels you don't have to squint at.

   The deck is laid out at one size (960 × 540) and scaled to the screen (deckRescale), about 0.89 on a 1366 × 768
   laptop and 1.3 on a full-HD screen. So the sizes below are deck pixels: 18px body text shows at 16px on a laptop.
     • body text (steps, principles, list items, card text, Quick Check options): Inter 500 at 18px, bold at 700
     • the opening line (the topic's key line): Fraunces 600 at 22px
     • headings and card labels: Poppins 800, 19–24px; the topic's title in the header 22px
     • kickers, section labels, the page badge and counters: at least 15px (they were 10–12px)
   Diagrams that can't be split over pages (a process row, a side-by-side compare, a long section list) take 16px.
   A slide that no longer fits on one page continues on the next (paginateSlideUnits), as before; nothing is shrunk.
   Phones (760px and narrower) keep their scrolling page and their own sizes. Remove this file's <script> tag to go back. */
(function(){
"use strict";
const W = "html body .lesson-stage #lessonSlideWrap";
const BODY = "font-family:'Inter',system-ui,sans-serif !important;font-size:18px !important;font-weight:500 !important;line-height:1.42 !important;";
const LABEL = "font-size:15px !important;letter-spacing:.06em !important;";
const css = `
@media (min-width:761px){
/* body text */
${W} .fp-howto-list > li, ${W} .fp-section ol > li, ${W} .fp-body > ul > li, ${W} .fp-body li,
${W} .lesson-process .pdesc, ${W} .lesson-threebox .tdesc, ${W} .lesson-quadrant .qdesc, ${W} .cbox .citem,
${W} .quiz-opt, ${W} .task-panel li, ${W} .task-panel .ex-line, ${W} .card > p, ${W} .meet-client-card p, ${W} .meet-client-card li,
${W} .edl-p, ${W} .edl-left, ${W} .edl-list > li, ${W} .il-body p, ${W} .palette-info p, ${W} .lesson-stat .slabel,
${W} td, ${W} .discussion-card p, ${W} .bd-list > li { ${BODY} }
${W} .fp-howto-list > li b, ${W} .fp-body li b, ${W} .fp-body li strong, ${W} .quiz-opt b, ${W} .card p b { font-weight:700 !important; }
/* diagrams the deck can't split over pages (a process row, a side-by-side compare, a long section list): a step smaller */
${W} .lesson-process .pdesc, ${W} .cbox .citem, ${W} .bd-list.sd-many > li { font-size:16px !important; line-height:1.35 !important; }
${W} .lesson-process .plabel, ${W} .cbox .chead { font-size:17px !important; }
/* the step cards: room for the bigger type (two or three across instead of four squeezed ones) */
${W} ol.fp-howto-list, ${W} .fp-section ol { grid-template-columns:repeat(auto-fit,minmax(250px,1fr)) !important; gap:14px !important; }
${W} ol.fp-howto-list > li, ${W} .fp-section ol > li { padding:20px 16px 14px !important; }
${W} ol.fp-howto-list > li::before, ${W} .fp-section ol > li::before { width:26px !important; height:26px !important; top:-13px !important; font-size:14px !important; }
/* the opening line */
${W} .fp-fallback-text, ${W} .ec-sec-core .fp-callout, ${W} .ec-sec-core .fp-key { font-family:'Fraunces',Georgia,serif !important; font-size:22px !important; font-weight:600 !important; line-height:1.3 !important; }
/* headings and card labels */
${W} .xd-head .xd-title { font-size:22px !important; line-height:1.2 !important; }
${W} .lesson-process .plabel, ${W} .lesson-threebox .tlabel, ${W} .lesson-quadrant .qlabel, ${W} .cbox .chead,
${W} .il-body b, ${W} .palette-info b, ${W} th { font-family:'Poppins','Inter',sans-serif !important; font-size:19px !important; font-weight:800 !important; line-height:1.25 !important; }
${W} .lesson-card > h4 { font-size:24px !important; }
${W} .lesson-card > h4 .lnum { font-size:16px !important; }
/* the agenda stays one page: its eight tiles and the goal only a step bigger than before (they're a fixed grid) */
${W} .xa-s b { font-size:16px !important; line-height:1.15 !important; }
${W} .xa-goal p { font-size:14.5px !important; line-height:1.35 !important; }
/* kickers, section labels, badges, counters: never under 15px */
${W} .xd-kick, ${W} .fp-label, ${W} .td-kicker, ${W} .topic-separator, ${W} .qc-tag, ${W} .xa-kicker,
${W} .mc-tag, ${W} .ex-label, ${W} .td-num, ${W} .qc-hint { ${LABEL} }
${W} .xa-goal-k, ${W} .xa-legend { font-size:13px !important; }
${W} .fp-label .ec-ico { font-size:17px !important; }
${W} .xd-head-n small { font-size:14px !important; }
${W} .xa-s small { font-size:13px !important; }
${W} .xd-head-n small, ${W} .bd-list > li > b { font-size:15px !important; }
${W} .pg-badge { font-size:14px !important; }
${W} .tab-btn, ${W} .qc-actions .btn { font-size:15px !important; }
}`;
const st = document.createElement("style"); st.id = "eapa-deck-type"; st.textContent = css;
document.head.appendChild(st);

/* A diagram the deck can't split over pages (a process row, a compare, a grid of boxes, a table) that is still taller
   than its page is drawn a little smaller, just that block, until the page fits: 4% at a time, to 80% at the least
   (the Case Management decks' zoomToFit). Everything else on the slide keeps its size. */
const FIT = ".lesson-process, .lesson-compare, .lesson-quadrant, .lesson-threebox, .bd-list, table, ol.fp-howto-list, .fp-section ol";
function fitTallBlock(){
  const wrap = document.getElementById("lessonSlideWrap"); if(!wrap || window.innerWidth <= 760) return;
  wrap.querySelectorAll("[data-type-fit]").forEach(n => { n.style.zoom = ""; n.removeAttribute("data-type-fit"); });
  if(wrap.scrollHeight <= wrap.clientHeight + 2) return;
  const blocks = [...wrap.querySelectorAll(FIT)].filter(n => !n.closest(".pg-hide") && n.getClientRects().length && !n.parentElement.closest(FIT));
  if(!blocks.length) return;
  const tall = blocks.reduce((a, b) => b.offsetHeight > a.offsetHeight ? b : a);
  tall.setAttribute("data-type-fit", "1");
  for(let z = 0.96; z >= 0.799 && wrap.scrollHeight > wrap.clientHeight + 2; z -= 0.04) tall.style.zoom = String(Math.round(z * 100) / 100);
}
const wrapFn = (name) => {
  const f = window[name]; if(typeof f !== "function" || f.__typeFit) return;
  const g = function(){ const r = f.apply(this, arguments); try{ fitTallBlock(); }catch(e){} return r; };
  g.__typeFit = true; window[name] = g;   // a global function: the page's own calls use the new one
};
wrapFn("paginateSlideUnits"); wrapFn("applySlidePage");
})();
