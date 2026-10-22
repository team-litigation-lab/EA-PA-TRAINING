/* ===== The lesson deck card (the Case Management course's Case Flow card, ported) =====
   Every lesson slide sits on one navy glass card over the page's background:
   - the top row: the Topic Bar (which part of the day this slide is) and the progress dots in a dark pill;
   - the ribbon under it: the slide's title;
   - the white sheet: the slide itself, unchanged;
   - line ornaments at the card's top-right and bottom-left corners, and in the sheet's bottom-right.
   Previous / Next sit under the card, on the page, and on a desktop the presenter stands in the side column
   under the lesson's controls. The top bar and the page background are untouched.
   It wraps renderDaySlideshow, so the trainee view, full screen and the Presenter slides window all get it.
   Loaded last, after js/eapa-updates.js, so its rules win over the older lesson-stage ones. */
(function(){
  if(typeof window.renderDaySlideshow !== "function" || window.renderDaySlideshow.__deckCard) return;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  // the Topic Bar: "Topic 3" on a topic's slides, otherwise what kind of slide it is
  function topicLabel(d, s){
    if(s.lessonIndex != null && s.type !== "block") return "Topic " + (s.lessonIndex + 1) + " of " + d.lessons.length;
    return ({agenda:"Day " + d.id + " Agenda", taskOverview:"Task Overview", meetClient:"Live Q&A", block:"Day " + d.id,
      video:"Video Recap", practiceLab:"Practice Lab", discussion:"Checkpoint"})[s.type] || ("Day " + d.id);
  }

  function deckCard(html, d){
    if(typeof html !== "string" || html.indexOf("stage-body") < 0) return html;
    const t = document.createElement("template"); t.innerHTML = html;
    const body = t.content.querySelector(".stage-body");
    if(!body || body.closest(".ea-deck-card")) return html;
    let label = "Day " + d.id, title = "";
    try{
      const slides = buildDaySlides(d), s = slides[Math.min(state.lessonSlide || 0, slides.length - 1)];
      if(s){ label = topicLabel(d, s); title = daySlideTitle(d, s); }
    }catch(e){}
    const card = document.createElement("div"); card.className = "ea-deck-card";
    const head = document.createElement("div"); head.className = "ea-deck-head";
    head.innerHTML = `<span class="ea-topic-bar">${esc(label)}</span>`;
    const dots = body.previousElementSibling && body.previousElementSibling.classList.contains("slide-dots") ? body.previousElementSibling : null;
    if(dots){ if(dots.children.length > 90) dots.classList.add("ea-dots-many"); head.appendChild(dots); }   // a long day: smaller dots, still one row
    body.before(card); card.appendChild(head);
    if(title){ const r = document.createElement("div"); r.className = "ea-ribbon"; r.textContent = title; card.appendChild(r); }
    card.appendChild(body);
    return t.innerHTML;
  }

  // the presenter in the lesson's side column, under its controls (the CSS shows it only on a desktop). It is drawn
  // with the page, not added after it: a later change to the page would size the slide again mid-way through the
  // page's opening animation, and the deck would come out a few pixels different from slide to slide.
  const sidePresenter = () => typeof PRESENTER_IMG === "string" ? `<img class="ea-side-presenter" src="${PRESENTER_IMG}" alt="" aria-hidden="true">` : "";
  const __render = window.renderDaySlideshow;
  window.renderDaySlideshow = function(d){
    let out = deckCard(__render.apply(this, arguments), d);
    if(typeof out === "string" && out.indexOf('id="lessonStage"') >= 0 && out.indexOf("ea-deck-card") >= 0) out += sidePresenter();
    return out;
  };
  window.renderDaySlideshow.__deckCard = true;

  // The deck's scale on the lesson page, measured where the slide is laid out rather than where it is drawn: the page
  // slides in (main's 8px "pageIn" animation), and the card is tall enough that the height left on screen, not the
  // width, sets the scale, so a measurement taken during that animation came out a few pixels off from slide to slide.
  // Full screen, the shared window and phones are as before (deckRescale in js/eapa-updates.js).
  if(typeof deckRescale === "function" && !deckRescale.__deckCard){
    const __rescale = deckRescale;
    const layoutTop = el => { let t = 0; for(; el; el = el.offsetParent) t += el.offsetTop; return t; };   // offsetTop ignores transforms
    deckRescale = function(){
      const fit = document.querySelector("#lessonStage .deck-fit"), stage = fit && fit.closest(".lesson-stage");
      if(!fit || !fit.closest(".ea-deck-card") || window.innerWidth <= 760 || fit.closest("#audienceRoot") || document.fullscreenElement === stage) return __rescale.apply(this, arguments);
      // down to the bottom of what's under the slide (Previous / Next), not of the stage: the one-screen rule caps the
      // stage's height, and that cap moves with the animation too
      const end = Math.max(...[...stage.children].map(c => c.getBoundingClientRect().bottom));
      const below = end - fit.getBoundingClientRect().bottom;
      const roomH = window.innerHeight - layoutTop(fit) - below - 12;
      const scale = Math.max(0.3, Math.min(fit.clientWidth / DECK_W, roomH / DECK_H));
      const v = String(Math.round(scale*10000)/10000);
      if(fit.style.getPropertyValue("--deck-scale") !== v) fit.style.setProperty("--deck-scale", v);
      window.__deckScale = +v;
    };
    deckRescale.__deckCard = true; window.deckRescale = deckRescale;
  }

  const ORN_TR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='70' viewBox='0 0 90 70' fill='none' stroke-linecap='round'%3E%3Cpath d='M6 8H76V60' stroke='%23DB8437' stroke-width='1.6'/%3E%3Cpath d='M22 14H70V44' stroke='%238E97C4' stroke-width='1.2'/%3E%3Cpath d='M40 4H84V24' stroke='%23DB8437' stroke-width='1.2'/%3E%3Ccircle cx='6' cy='8' r='2.2' fill='%23DB8437' stroke='none'/%3E%3Ccircle cx='76' cy='60' r='2.2' fill='%23DB8437' stroke='none'/%3E%3Ccircle cx='22' cy='14' r='1.8' fill='%238E97C4' stroke='none'/%3E%3Ccircle cx='70' cy='44' r='1.8' fill='%238E97C4' stroke='none'/%3E%3Ccircle cx='84' cy='24' r='1.8' fill='%23DB8437' stroke='none'/%3E%3C/svg%3E")`;
  const ORN_BL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none' stroke-linecap='round'%3E%3Cpath d='M10 6V60H62' stroke='%23DB8437' stroke-width='1.6'/%3E%3Cpath d='M16 20V54H44' stroke='%238E97C4' stroke-width='1.2'/%3E%3Cpath d='M4 34V66H28' stroke='%23DB8437' stroke-width='1.2'/%3E%3Ccircle cx='10' cy='6' r='2.2' fill='%23DB8437' stroke='none'/%3E%3Ccircle cx='62' cy='60' r='2.2' fill='%23DB8437' stroke='none'/%3E%3Ccircle cx='16' cy='20' r='1.8' fill='%238E97C4' stroke='none'/%3E%3Ccircle cx='44' cy='54' r='1.8' fill='%238E97C4' stroke='none'/%3E%3Crect x='1' y='31' width='6' height='6' fill='%23DB8437' stroke='none'/%3E%3C/svg%3E")`;
  const ORN_SHEET = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150' fill='none'%3E%3Cpath d='M122 6V128M130 20V128' stroke='%23DB8437' stroke-width='1.2'/%3E%3Cpath d='M138 0V140' stroke='%23262B45' stroke-width='1.2'/%3E%3Cpath d='M4 122H118M18 130H118' stroke='%23DB8437' stroke-width='1.2'/%3E%3Cpath d='M0 140H138' stroke='%23262B45' stroke-width='1.2'/%3E%3Cpath d='M84 150L150 92' stroke='%23262B45' stroke-width='1.2'/%3E%3Ccircle cx='116' cy='118' r='8' stroke='%23DB8437' stroke-width='1.2'/%3E%3Crect x='133' y='133' width='6' height='6' stroke='%23DB8437' stroke-width='1.2'/%3E%3C/svg%3E")`;

  const S = ".lesson-stage:has(> .ea-deck-card)";
  const st = document.createElement("style"); st.id = "eapa-deck-card"; st.textContent = `
/* the stage itself is no longer a slide: the card is, over the page's background */
${S}{background:transparent !important;box-shadow:none !important;padding:0 !important;border-radius:0 !important;overflow:visible !important;isolation:auto;}
${S}::before, ${S}::after{display:none !important;}
.ea-deck-card{position:relative;overflow:hidden;min-width:0;background:rgba(30,35,64,.9);backdrop-filter:blur(12px) saturate(1.1);-webkit-backdrop-filter:blur(12px) saturate(1.1);
  border:1px solid rgba(255,255,255,.14);border-radius:20px;padding:14px 20px 16px;box-shadow:0 18px 40px -22px rgba(20,24,48,.65);}
/* the card never gives way to the one-screen rule's cap on the stage's height (js/eapa-updates.js): that cap is
   measured while the page slides in, so a card that shrank to it came out a few pixels different on every slide.
   The deck's scale (deckRescale) is what makes it fit. */
${S}:not(:fullscreen) > .ea-deck-card{flex:0 0 auto;}
.ea-deck-card::before, .ea-deck-card::after{content:"";position:absolute;pointer-events:none;background-repeat:no-repeat;z-index:0;}
.ea-deck-card::before{top:6px;right:6px;width:90px;height:70px;background-image:${ORN_TR};}
.ea-deck-card::after{bottom:6px;left:6px;width:70px;height:70px;background-image:${ORN_BL};}
.ea-deck-card > *{position:relative;z-index:1;}
/* the top row: the Topic Bar, then the dots in a dark pill, short of the corner ornament */
.ea-deck-head{display:flex;align-items:center;gap:16px;margin:0 96px 10px 0;min-width:0;}
.ea-topic-bar{flex:0 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:rgba(8,10,22,.82);color:#fff;
  border:1.5px solid rgba(255,255,255,.7);border-radius:4px;padding:6px 22px;font:600 20px/1.2 'Poppins','Inter',sans-serif;letter-spacing:.01em;}
.ea-deck-head .slide-dots{position:static !important;flex:0 1 auto;width:auto !important;height:auto !important;min-width:0;margin:0 auto !important;padding:6px 10px;gap:3px !important;
  flex-wrap:nowrap;justify-content:center;overflow:hidden;background:rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.12);border-radius:8px;}
.ea-deck-head .slide-dot{width:6px;height:6px;flex:0 1 6px;}
.ea-deck-head .slide-dot.active{flex:0 0 16px;width:16px;}
.ea-deck-head .slide-dots.ea-dots-many{gap:2px !important;}
.ea-deck-head .ea-dots-many .slide-dot{width:4px;height:4px;flex:0 1 4px;min-width:2px;}
.ea-deck-head .ea-dots-many .slide-dot.active{flex:0 0 12px;width:12px;}
/* the ribbon: the slide's title */
.ea-ribbon{margin:0 0 10px;text-align:center;background:linear-gradient(90deg,#343C66 0%,#46508A 50%,#343C66 100%);border-bottom:3px solid #DB8437;border-radius:6px;
  color:#fff;font:800 14px/1.25 'Poppins','Inter',sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:7px 24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
/* the white sheet: the slide, with the line ornament in its bottom-right (no wedge, no logo: the card carries the design) */
.ea-deck-card .stage-body{display:block !important;}
.ea-deck-card .stage-presenter{display:none !important;}
.ea-deck-card #lessonSlideWrap{background:#fff ${ORN_SHEET} no-repeat right 8px bottom 8px / 110px !important;border:1px solid rgba(255,255,255,.6);border-radius:14px !important;box-shadow:0 8px 22px rgba(0,0,0,.18) !important;}
.ea-deck-card #lessonSlideWrap::before, .ea-deck-card #lessonSlideWrap::after{display:none !important;}
/* a topic's strip (its number, title and Part buttons) is no third card: a plain row on the sheet, ruled off */
.ea-deck-card #lessonSlideWrap .xd-head{background:transparent !important;color:var(--navy,#262B45);border-radius:0;padding:0 0 8px;border-bottom:1px solid #E6E8F0;}
.ea-deck-card #lessonSlideWrap .xd-head-n small{color:#6B7088;}
.ea-deck-card #lessonSlideWrap .xd-head .xd-kick{color:var(--orange-deep,#B5651F);}
.ea-deck-card #lessonSlideWrap .xd-head .xd-title{color:var(--navy,#262B45);}
.ea-deck-card #lessonSlideWrap .xd-head-steps button{border-color:#C9CEDB;background:#fff;color:#4A5070;}
.ea-deck-card #lessonSlideWrap .xd-head-steps li.on button{background:#DB8437;border-color:#DB8437;color:#fff;}
.ea-deck-card #lessonSlideWrap .xd-head-steps button:hover{background:#F3F4F8;}
/* two cards only, the navy card and the white sheet: a title slide (a topic or part divider) is no third card,
   its words sit straight on the sheet */
.ea-deck-card #lessonSlideWrap > .topic-divider{background:transparent !important;color:var(--ink,#1e293b);border-radius:0;box-shadow:none !important;}
.ea-deck-card #lessonSlideWrap > .topic-divider::before, .ea-deck-card #lessonSlideWrap > .topic-divider::after{display:none !important;}
.ea-deck-card #lessonSlideWrap > .topic-divider h2.td-title{color:var(--navy,#262B45);}
.ea-deck-card #lessonSlideWrap > .topic-divider .td-kicker{color:var(--orange-deep,#B5651F);}
.ea-deck-card #lessonSlideWrap > .topic-divider .td-num{color:#6B7088;}
.ea-deck-card #lessonSlideWrap > .block-divider .bd-list li{color:var(--ink,#1e293b);}
.ea-deck-card #lessonSlideWrap > .block-divider .bd-list li b{color:var(--orange-deep,#B5651F);}
.ea-deck-card #lessonSlideWrap > .xd, .ea-deck-card #lessonSlideWrap > .card > .xd{background:transparent !important;border:0 !important;box-shadow:none !important;}
/* Previous / Next: on the page, under the card */
${S} > .slide-nav{margin:10px 0 0 !important;padding:8px 12px;background:rgba(255,255,255,.82);border:1px solid rgba(38,43,69,.12);border-radius:14px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);}
${S} > .slide-nav .slide-counter{color:#262B45 !important;}
${S} > .slide-nav .btn-ghost{background:#fff;border:1px solid rgba(38,43,69,.2);}
${S} .slide-done-note{color:var(--navy);background:#FFF1E2;border:0;}
/* the presenter: in the side column on a desktop; beside the slide in full screen and the Presenter slides window */
.ea-side-presenter{display:none;}
@media(min-width:1000px){
  body:not(.ft-fit) main:has(> #lessonStage .ea-deck-card) > .ea-side-presenter{display:block;width:min(180px, calc((100vh - 470px) * .56));height:auto;margin:6px auto 0 !important;transform:scaleX(-1);
    pointer-events:none;user-select:none;filter:drop-shadow(0 10px 14px rgba(20,24,48,.25));}
}
.lesson-stage:fullscreen > .ea-deck-card .stage-body, #audienceRoot .ea-deck-card .stage-body{display:grid !important;}
.lesson-stage:fullscreen > .ea-deck-card .stage-presenter, #audienceRoot .ea-deck-card .stage-presenter{display:block !important;}
.lesson-stage:fullscreen:has(> .ea-deck-card){background:#1F2440 !important;padding:2.5vh 2vw !important;display:flex !important;flex-direction:column;height:100vh;box-sizing:border-box;}
.lesson-stage:fullscreen > .ea-deck-card, #audienceRoot .ea-deck-card{flex:1;min-height:0;display:flex;flex-direction:column;}
.lesson-stage:fullscreen > .ea-deck-card .stage-body, #audienceRoot .ea-deck-card .stage-body{flex:1;min-height:0;}
@media(max-width:760px){
  .ea-deck-card{padding:10px 10px 12px;border-radius:14px;}
  .ea-deck-head{flex-wrap:wrap;gap:8px;margin-right:70px;}
  .ea-topic-bar{font-size:15px;padding:4px 12px;}
  .ea-deck-head .slide-dots{order:2;flex:1 1 100%;}
  .ea-ribbon{font-size:12px;padding:6px 10px;white-space:normal;}
}`;
  document.head.appendChild(st);
  if(document.getElementById("lessonStage") && typeof render === "function") render();
})();
