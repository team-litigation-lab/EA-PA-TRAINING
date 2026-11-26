/* ✨ The elite deck: the lesson deck in the LSH Training Portal's new look (LSH Academy Index, LSH Elev8, LSH Atlas).
   Design only. No slide's words, order, pictures, videos, questions, scores, links or saved-place keys change, and
   nothing is laid out differently inside the 960 × 540 slide, so every slide splits into the same pages as before.
   - the deck card: the LSH blue-gold frame (a thick rounded outline, navy along the top fading to gold at the bottom)
     round a deep-navy face with a soft warm glow; the old line ornaments are gone;
   - the Topic Bar: a small uppercase mono tag with an orange marker; the progress dots: a slim pill, steps already
     seen in gold, the current one an orange-to-gold bar;
   - the ribbon: the slide's title, white, letter-spaced, over a short orange-to-gold rule;
   - the white sheet: soft elevation and a navy-to-orange hairline along its top; headings in the clean sans-serif
     (Inter) instead of the serif; step cards, agenda tiles and title slides with soft elevation and clean washes;
   - the controls in the deck's top row: glass pills on the navy, Presenter view as the one warm button;
   - Previous / Next: a white bar with pill buttons, the step counter as a mono pill and Next as the dark-navy
     primary button with its orange underline (as on the Portal's Launch buttons).
   Text keeps WCAG AA. Respects prefers-reduced-motion. Loaded after js/eapa-deck-card.js, js/eapa-deck-color.js and
   js/eapa-deck-lab.js, so its rules win; it adds CSS only, so removing its <script> tag puts the deck back as it was. */
(function(){
  if(window.__eapaDeckElite) return; window.__eapaDeckElite = true;
  const SANS = "'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
  const MONO = "'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace";
  const FRAME = "linear-gradient(180deg,#1E2340 0%,#2c3360 30%,#a8692f 78%,#DB8437 100%)";
  const S = ".lesson-stage:has(> .ea-deck-card)";
  const TOP = "body:not(.ft-fit) main:has(> #lessonStage .ea-deck-card) > .ls-top";
  const css = `
/* ---- the deck card: the blue-gold frame round a deep-navy face (border 1px → 4px, padding 3px less: same inside) ---- */
.ea-deck-card{border:4px solid transparent !important;padding:11px 17px 13px !important;
  background:radial-gradient(90% 70% at 100% 0%, rgba(219,132,55,.13) 0%, transparent 60%) padding-box,
    radial-gradient(70% 60% at 0% 100%, rgba(226,184,90,.07) 0%, transparent 65%) padding-box,
    linear-gradient(180deg,#20254A 0%,#181C38 55%,#12152C 100%) padding-box,
    ${FRAME} border-box !important;
  backdrop-filter:none !important;-webkit-backdrop-filter:none !important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.07), 0 26px 50px -28px rgba(10,12,28,.8), 0 6px 16px -10px rgba(10,12,28,.45) !important;}
.ea-deck-card::before, .ea-deck-card::after{display:none !important;}

/* the Topic Bar: a mono tag */
.ea-deck-card .ea-topic-bar{display:block;background:rgba(255,255,255,.06) !important;color:#fff !important;border:1px solid rgba(226,184,90,.5) !important;border-radius:999px !important;
  padding:8px 18px 8px 15px !important;font:700 15px/1.2 ${MONO} !important;letter-spacing:.12em !important;text-transform:uppercase;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06);}
.ea-deck-card .ea-topic-bar::before{content:"";display:inline-block;width:8px;height:8px;margin:0 10px 2px 0;vertical-align:middle;border-radius:2px;
  background:#DB8437;box-shadow:0 0 0 3px rgba(219,132,55,.25);}

/* the progress dots: a slim pill; seen in gold, here in orange-to-gold */
.ea-deck-head .slide-dots{background:rgba(6,8,20,.42) !important;border:1px solid rgba(255,255,255,.1) !important;border-radius:999px !important;}
.ea-deck-head .slide-dot{background:rgba(255,255,255,.24) !important;border-radius:999px !important;}
.ea-deck-head .slide-dot.visited{background:rgba(226,184,90,.7) !important;}
.ea-deck-head .slide-dot.active{background:linear-gradient(90deg,#DB8437,#E2B85A) !important;box-shadow:0 0 0 2px rgba(219,132,55,.28);}
.ea-deck-head .slide-dot.locked{background:rgba(255,255,255,.1) !important;}
.ea-deck-head .slide-dot:hover{background:#F0C08A !important;}

/* the ribbon: the title over a short orange-to-gold rule */
.ea-deck-card .ea-ribbon{position:relative;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.025)) !important;
  border:1px solid rgba(255,255,255,.1) !important;border-bottom-width:2px !important;border-bottom-color:transparent !important;border-radius:10px !important;
  color:#fff !important;font:800 14px/1.25 ${SANS} !important;letter-spacing:.14em !important;}
.ea-deck-card .ea-ribbon::after{content:"";position:absolute;left:50%;bottom:-2px;width:min(240px,40%);height:2px;transform:translateX(-50%);border-radius:2px;
  background:linear-gradient(90deg,rgba(219,132,55,0),#DB8437 22%,#E2B85A 78%,rgba(226,184,90,0));}

/* the white sheet: soft elevation, a navy-to-orange hairline along the top, no ornament */
.ea-deck-card #lessonSlideWrap{background:linear-gradient(90deg,#1E2340 0%,#2c3360 35%,#a8692f 78%,#DB8437 100%) top / 100% 4px no-repeat, #fff !important;
  border:1px solid rgba(226,184,90,.35) !important;
  box-shadow:inset 0 -1px 0 rgba(30,35,64,.06), 0 20px 40px -22px rgba(0,0,0,.6), 0 4px 10px -6px rgba(0,0,0,.3) !important;}

/* ---- on the slide: the clean sans-serif for every heading the serif drew (same sizes) ---- */
#lessonSlideWrap#lessonSlideWrap :is(h1,h2,h3,h4,.display,.xd-head-n,.xa-n,.quiz-q,.chead,.plabel,.tnum,.tlabel,.qlabel,.snum,.card > b:first-child){font-family:${SANS} !important;}
#lessonSlideWrap#lessonSlideWrap :is(h1,h2,h3,h4,.xd-title,.td-title,.xa-title){letter-spacing:-.02em !important;font-weight:800 !important;}
#lessonSlideWrap#lessonSlideWrap :is(.xd-head-n,.xa-n,.tnum,.snum){font-variant-numeric:tabular-nums;letter-spacing:-.01em !important;}

/* the topic header's icon tile and the section numbers */
#lessonSlideWrap .ec-head-art{border-radius:10px !important;box-shadow:0 0 0 1px #E3E6EF, 0 6px 12px -8px rgba(30,35,64,.45) !important;}
#lessonSlideWrap [class*="ec-sec-"] .fp-num{box-shadow:0 0 0 3px rgba(30,35,64,.08);}

/* the key line, the step cards, Do this / Watch out and the agenda tiles: soft elevation */
#lessonSlideWrap .ec-sec-core .fp-body > p, #lessonSlideWrap .ec-sec-core .fp-body > div > p{
  border-left-color:#DB8437 !important;box-shadow:0 8px 18px -14px rgba(30,35,64,.45);}
#lessonSlideWrap .ec-sec-steps ol > li{box-shadow:0 12px 22px -16px rgba(30,35,64,.5), inset 0 1px 0 rgba(255,255,255,.8);}
#lessonSlideWrap .vis-card{box-shadow:0 10px 20px -16px rgba(30,35,64,.45);}
#lessonSlideWrap .xa-list li{box-shadow:0 10px 20px -16px rgba(30,35,64,.45) !important;}

/* title slides (section, topic and part dividers): white, with a navy glow top-left and a warm one bottom-right */
#lessonSlideWrap > .topic-divider.block-divider, #lessonSlideWrap > .topic-divider.ec-divider.ec-noart{
  background:linear-gradient(180deg,#fff 0%,#fff 40%,#FBF5EC 100%) !important;box-shadow:inset 0 0 0 1px #EEF0F5 !important;}
#lessonSlideWrap > .topic-divider .td-kicker{font-family:${MONO} !important;letter-spacing:.12em !important;background:#1E2340 !important;color:#F3D3A6 !important;
  box-shadow:inset 0 -2px 0 #DB8437, 0 6px 12px -8px rgba(30,35,64,.6);}
#lessonSlideWrap > .topic-divider.block-divider .bd-list li{box-shadow:0 8px 16px -12px rgba(30,35,64,.45), 0 0 0 1px #ECEEF4 !important;}
#lessonSlideWrap .ec-div-art{box-shadow:0 14px 30px -14px rgba(30,35,64,.45), 0 0 0 6px rgba(219,132,55,.14), 0 0 0 7px rgba(30,35,64,.08) !important;}

/* Quick Check and Meet the client: the frame's navy-to-orange along their top */
#lessonSlideWrap .qcheck-card{border-top:0 !important;box-shadow:inset 0 5px 0 #1E2340, 0 10px 22px -18px rgba(30,35,64,.5);}
#lessonSlideWrap .qcheck-card .quiz-opt{box-shadow:0 6px 14px -12px rgba(30,35,64,.45);}

/* ---- the controls in the deck's top row (desktop): glass pills on the navy ---- */
@media(min-width:1000px){
  ${TOP}{right:34px !important;}
  body:not(.ft-fit) main:has(> #lessonStage .ea-deck-card) .ea-deck-head{margin-right:calc(var(--ls-w, 620px) + 12px) !important;}
  ${TOP} .btn:not(.on):not(.btn-navy):not(.btn-primary), ${TOP} .audio-rate{background:rgba(255,255,255,.08) !important;color:#fff !important;
    border:1px solid rgba(255,255,255,.22) !important;border-radius:999px !important;box-shadow:inset 0 1px 0 rgba(255,255,255,.06);}
  ${TOP} .audio-rate option{color:#1E2340;background:#fff;}
  ${TOP} .btn:not(.on):not(.btn-navy):not(.btn-primary):hover{background:rgba(255,255,255,.16) !important;border-color:rgba(226,184,90,.6) !important;}
  ${TOP} .btn-navy{background:rgba(6,8,20,.55) !important;color:#fff !important;border:1px solid rgba(226,184,90,.55) !important;border-radius:999px !important;}
  ${TOP} .btn-navy:hover{background:rgba(6,8,20,.8) !important;}
  ${TOP} .btn-primary, ${TOP} .btn.on{background:var(--gold) !important;color:var(--gold-ink) !important;border:1px solid rgba(255,255,255,.25) !important;
    border-radius:999px !important;font-weight:800 !important;box-shadow:0 8px 16px -10px var(--gold-glow);}
}

/* ---- Previous / Next: a white bar, pill buttons, a mono counter, Next as the dark-navy primary ---- */
${S} > .slide-nav{background:rgba(255,255,255,.94) !important;border:1px solid rgba(30,35,64,.12) !important;border-radius:16px !important;
  box-shadow:0 16px 30px -22px rgba(30,35,64,.6), 0 2px 6px -4px rgba(30,35,64,.2) !important;}
${S} > .slide-nav .btn-ghost{background:#fff !important;color:#1E2340 !important;border:1px solid rgba(30,35,64,.18) !important;border-radius:999px !important;
  box-shadow:0 1px 0 rgba(30,35,64,.04);}
${S} > .slide-nav .btn-ghost:not(:disabled):hover{background:#F3F5FB !important;border-color:rgba(30,35,64,.34) !important;}
${S} > .slide-nav .btn-ghost.on, ${S} > .slide-nav .np-peek[aria-pressed="true"]{background:#1E2340 !important;color:#fff !important;border-color:#1E2340 !important;}
${S} > .slide-nav .btn-primary{background:linear-gradient(180deg,#2a3058 0%,#1E2340 100%) !important;color:#fff !important;border:0 !important;border-radius:12px !important;
  font-weight:800 !important;letter-spacing:.01em;box-shadow:inset 0 1px 0 rgba(255,255,255,.12), inset 0 -2px 0 #DB8437, 0 8px 16px -10px rgba(30,35,64,.8) !important;}
${S} > .slide-nav .btn-primary:not(:disabled):hover{background:linear-gradient(180deg,#343b6b 0%,#262c52 100%) !important;}
${S} > .slide-nav .slide-counter{font-family:${MONO} !important;color:#1E2340 !important;background:#F1F3F8;border:1px solid #E2E6EF;border-radius:999px;padding:4px 12px;letter-spacing:.02em;}
${S} .btn:focus-visible, ${TOP} .btn:focus-visible, ${TOP} .audio-rate:focus-visible, .ea-deck-head .slide-dot:focus-visible{outline:3px solid #DB8437 !important;outline-offset:2px;}

/* full screen and the Presenter slides window: the same card, on deep navy */
.lesson-stage:fullscreen:has(> .ea-deck-card){background:radial-gradient(80% 60% at 50% 0%, #262B52 0%, #12152C 70%) !important;}

/* phones: a slimmer frame */
@media(max-width:760px){
  .ea-deck-card{border-width:3px !important;padding:8px 8px 10px !important;}
  .ea-deck-card .ea-topic-bar{font-size:13px !important;padding:5px 12px 5px 10px !important;letter-spacing:.1em !important;}
  .ea-deck-card .ea-topic-bar::before{width:7px;height:7px;margin-right:8px;}
  .ea-deck-card .ea-ribbon{font-size:12px !important;letter-spacing:.1em !important;}
  ${S} > .slide-nav .slide-counter{padding:3px 8px;}
  ${S} > .slide-nav .btn-ghost{border-radius:12px !important;}
}

/* reduced motion: no transitions or slide-in on the deck */
@media (prefers-reduced-motion: reduce){
  .ea-deck-card *, ${S} > .slide-nav .btn, ${TOP} .btn, .ea-deck-head .slide-dot{transition:none !important;}
  .ea-deck-card #lessonSlideWrap, .ea-deck-card #lessonSlideWrap > *{animation:none !important;}
}
`;
  const st = document.createElement("style"); st.id = "eapa-deck-elite"; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
})();
