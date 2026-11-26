/* 🎨 Deck colour, graphics and icons — every lesson slide on every day.
   - Topic dividers carry the topic's own illustration (js/eapa-deck-art.js, picked per topic in
     build/slides/dN.json "image") beside the title, on a coloured band.
   - Topic slides: a small topic icon in the header; each of the three sections (Core Principles,
     Step-by-Step, Best Practices & Pitfalls) gets its own colour and icon; the key line is a callout;
     step cards and Do / Watch-out cards are tinted.
   - The agenda shows each section's illustration on its tile.
   - Small text on the white sheet is held to WCAG AA (4.5:1): the orange used for small labels is
     the deep orange #A34E14 (5.3:1 on white), never the brand orange (2.9:1).
   Loaded last; it only wraps renderTopicDivider, renderDayAgenda and renderDaySlideshow, and adds CSS,
   so removing the <script> tag puts the slides back exactly as they were. */
(function(){
  if(window.__eapaDeckColor) return; window.__eapaDeckColor = true;
  const ART = (typeof EAPA_ART !== "undefined") ? EAPA_ART : null;
  const copyFor = (d, l) => (typeof lessonCopy === "function" && d && l) ? lessonCopy(d, l) : null;
  // the illustration, decorative (the title beside it already says what the topic is)
  const art = (d, l, cls) => {
    const c = copyFor(d, l), svg = ART && c && ART[c.image];
    return svg ? `<span class="${cls}" aria-hidden="true">${svg.replace(/\srole="img"/, "").replace(/\saria-label="[^"]*"/, "")}</span>` : "";
  };

  /* 1. Topic dividers: illustration + colour band */
  if(typeof renderTopicDivider === "function"){
    window.renderTopicDivider = function(d, i){
      const l = d.lessons[i];
      const pic = art(d, l, "ec-div-art");
      return `
    <div class="topic-divider ec-divider${pic ? "" : " ec-noart"}">
      <div class="ec-div-text">
        <div class="td-kicker">Day ${d.id}${l.section ? ` &middot; ${esc(l.section)}` : ""}</div>
        <div class="td-num">Topic ${i+1} of ${d.lessons.length}</div>
        <h2 class="td-title">${esc(l.h)}</h2>
        <div class="ec-div-bar"><i></i><i></i><i></i></div>
      </div>
      ${pic ? `<div class="ec-div-pic">${pic}</div>` : ""}
    </div>`;
    };
  }

  /* 2. Agenda: each section's tile carries the illustration of its first topic */
  if(typeof renderDayAgenda === "function" && typeof daySections === "function"){
    const __agenda = renderDayAgenda;
    window.renderDayAgenda = function(d){
      const out = __agenda.apply(this, arguments);
      if(typeof out !== "string") return out;
      const secs = daySections(d); let k = 0;
      return out.replace(/<\/span><\/li>/g, m => {
        const s = secs[k++];
        return s ? `</span>${art(d, d.lessons[s.items[0]], "ec-ag-art")}</li>` : m;
      });
    };
  }

  /* 2b. The Practice Lab slide: illustration + colour */
  if(typeof renderPracticeLabSlide === "function"){
    const __lab = renderPracticeLabSlide;
    window.renderPracticeLabSlide = function(d){
      const out = __lab.apply(this, arguments);
      if(typeof out !== "string") return out;
      const pic = ART && ART["project-board"] ? `<span class="ec-lab-art" aria-hidden="true">${ART["project-board"].replace(/\srole="img"/, "").replace(/\saria-label="[^"]*"/, "")}</span>` : "";
      return out.replace(/<div class="card" style="([^"]*)">/, `<div class="card ec-lab" style="$1">${pic}`);
    };
  }

  /* 3. Topic slides: header icon + a class per section, so each gets its own colour and icon */
  const SECTIONS = [
    [/Core Principles/, "ec-sec-core", "💡"],
    [/Step-by-Step/, "ec-sec-steps", "🧭"],
    [/Best Practices/, "ec-sec-best", "✅"],
  ];
  const decorate = (html, d) => {
    if(typeof html !== "string") return html;
    // the topic on screen: the header's title is the topic's title
    const m = html.match(/<h2 class="xd-title">([\s\S]*?)<\/h2>/);
    if(m){
      const t = m[1].replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim();
      const l = (d && d.lessons || []).find(x => x.h === t);
      const pic = l ? art(d, l, "ec-head-art") : "";
      if(pic) html = html.replace('<div class="xd-head-t">', pic + '<div class="xd-head-t">');
    }
    return html.replace(/class="fp-section"([\s\S]*?class="fp-label"[\s\S]*?<\/div>)/g, (all, rest) => {
      const hit = SECTIONS.find(([re]) => re.test(rest));
      if(!hit) return all;
      rest = rest.replace(/(<span class="fp-num">[\s\S]*?<\/span>)/, `$1<span class="ec-ico" aria-hidden="true">${hit[2]}</span>`);
      return `class="fp-section ${hit[1]}"${rest}`;
    });
  };
  if(typeof renderDaySlideshow === "function"){
    const __show = window.renderDaySlideshow;
    window.renderDaySlideshow = function(d){ return decorate(__show.apply(this, arguments), d); };
    Object.keys(__show).forEach(k => { window.renderDaySlideshow[k] = __show[k]; });
  }

  /* 4. The look */
  const css = `
/* contrast: the small orange labels on the white sheet */
#lessonSlideWrap{--orange-deep:#A34E14;}
.ea-deck-card #lessonSlideWrap > .block-divider .bd-list li b{color:#A34E14 !important;}
#lessonSlideWrap .xd-head .xd-kick, .ea-deck-card #lessonSlideWrap .xd-head .xd-kick,
#lessonSlideWrap .fp-label, #lessonSlideWrap .xa-kicker, #lessonSlideWrap .pg-badge{color:#A34E14 !important;}
#lessonSlideWrap .xd-head-n small{color:#4A4F66 !important;}
#lessonSlideWrap .fp-howto-list li, #lessonSlideWrap .fp-section ol > li{color:#1B1E2E;}

#lessonSlideWrap .xd-head-n, #lessonSlideWrap .lnum, #lessonSlideWrap .topic-separator, #lessonSlideWrap .lesson-process-arrow,
#lessonSlideWrap .xd-agenda b, #lessonSlideWrap .lesson-card i{color:#A34E14 !important;}
#lessonSlideWrap .xd-agenda .xa-s b{color:#1B1E2E !important;}
/* white text on the orange boxes: the deep orange keeps it above 4.5:1 */
#lessonSlideWrap .lesson-quadrant .qbox:nth-child(4n+2), #lessonSlideWrap .lesson-threebox .tbox:nth-child(3n+2){background:#A34E14 !important;}
#lessonSlideWrap .lesson-quadrant .qbox:nth-child(4n+4), #lessonSlideWrap .lesson-compare .cbox:last-child .chead{background:#8A3F0E !important;}
#lessonSlideWrap .lesson-threebox .tbox:nth-child(3n+2) .tnum{color:#FFE3C4 !important;}
#lessonSlideWrap .lesson-quadrant .qbox .qdesc, #lessonSlideWrap .lesson-threebox .tbox .tdesc{color:#fff !important;}

/* dividers */
#lessonSlideWrap > .topic-divider.ec-divider{display:grid !important;grid-template-columns:1.15fr .85fr;align-items:center;gap:28px;text-align:left;
  padding:34px 44px !important;background:linear-gradient(115deg,#fff 0%,#fff 52%,#FFF3E6 52%,#FDE6CF 100%) !important;border-radius:14px !important;}
#lessonSlideWrap > .topic-divider.ec-divider.ec-noart{grid-template-columns:1fr;text-align:center;background:linear-gradient(180deg,#fff,#F3F5FB) !important;}
.ec-divider .td-kicker{display:inline-block;background:#262B45;color:#FFE3C4 !important;padding:6px 12px;border-radius:999px;font-size:11.5px !important;}
.ec-divider .td-num{color:#A34E14 !important;margin:16px 0 8px !important;font-size:13px !important;}
.ec-divider h2.td-title{color:#262B45 !important;max-width:none !important;font-size:44px !important;line-height:1.1 !important;}
.ec-div-bar{display:flex;gap:6px;margin-top:20px;}
.ec-div-bar i{display:block;height:6px;border-radius:3px;width:64px;background:#262B45;}
.ec-div-bar i:nth-child(2){width:40px;background:#DB8437;}
.ec-div-bar i:nth-child(3){width:20px;background:#3F7D58;}
.ec-div-pic{display:flex;align-items:center;justify-content:center;}
.ec-div-art{display:block;width:100%;max-width:330px;background:#fff;border-radius:50%;padding:18px;box-shadow:0 10px 30px -12px rgba(38,43,69,.35),0 0 0 6px rgba(219,132,55,.18);}
.ec-div-art svg{display:block;width:100%;height:auto;}

/* part (block) dividers: a peach band, navy kicker pill, coloured numbers */
#lessonSlideWrap > .topic-divider.block-divider{background:linear-gradient(180deg,#fff 0%,#fff 38%,#FFF3E6 100%) !important;border-radius:14px !important;}
#lessonSlideWrap > .topic-divider.block-divider .td-kicker{display:inline-block;background:#262B45;color:#FFE3C4 !important;padding:6px 12px;border-radius:999px;}
#lessonSlideWrap > .topic-divider.block-divider .td-num{color:#A34E14 !important;}
#lessonSlideWrap > .topic-divider.block-divider .bd-list li{background:#fff;border-left:4px solid #DB8437;border-radius:6px;padding:2px 8px;box-shadow:0 1px 0 #F0D9C2;}
#lessonSlideWrap > .topic-divider.block-divider .bd-list li:nth-child(odd){border-left-color:#262B45;}

/* Quick Check: lettered, colour-coded options (correct / incorrect / selected keep their own colours) */
#lessonSlideWrap .qcheck-card{background:linear-gradient(180deg,#F3F5FB 0%,#fff 70%);border-radius:14px;padding:14px 18px;border-top:5px solid #262B45;}
#lessonSlideWrap .qcheck-card .qc-tag{color:#A34E14 !important;}
#lessonSlideWrap .qcheck-card .quiz-opts{counter-reset:qo;}
#lessonSlideWrap .qcheck-card .quiz-opt{counter-increment:qo;position:relative;padding-left:46px !important;border-left:5px solid #262B45 !important;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(2){border-left-color:#DB8437 !important;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(3){border-left-color:#3F7D58 !important;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(4){border-left-color:#1F6F78 !important;}
#lessonSlideWrap .qcheck-card .quiz-opt::before{content:counter(qo, upper-alpha);position:absolute;left:12px;top:50%;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;
  background:#262B45;color:#fff;font:700 12px/24px var(--font-ui);text-align:center;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(2)::before{background:#DB8437;color:#1B1E2E;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(3)::before{background:#3F7D58;}
#lessonSlideWrap .qcheck-card .quiz-opt:nth-child(4)::before{background:#1F6F78;}

/* Practice Lab slide */
#lessonSlideWrap .card.ec-lab{position:relative;background:linear-gradient(120deg,#fff 0%,#fff 55%,#FFF3E6 100%) !important;border:1px solid #F0D9C2 !important;border-left:6px solid #DB8437 !important;
  border-radius:16px !important;padding:26px 30px 26px 250px !important;min-height:220px;text-align:left !important;}
#lessonSlideWrap .card.ec-lab > b{color:#262B45;}
#lessonSlideWrap .card.ec-lab *{text-align:left !important;}
.ec-lab-art{position:absolute;left:24px;top:50%;transform:translateY(-50%);width:200px;display:block;}
.ec-lab-art svg{width:100%;height:auto;display:block;}

/* Meet the client */
#lessonSlideWrap .meet-client-card{background:linear-gradient(180deg,#F3F5FB 0%,#fff 60%) !important;border-top:5px solid #DB8437 !important;border-radius:14px !important;}
#lessonSlideWrap .meet-client-card .mc-tag{display:inline-block;background:#262B45;color:#FFE3C4 !important;padding:5px 12px;border-radius:999px;}
#lessonSlideWrap .meet-client-card .mc-note{background:#FFF3E6;border-left:4px solid #DB8437;border-radius:8px;padding:8px 12px;color:#1B1E2E !important;}

/* agenda tiles */
#lessonSlideWrap .xa-list li{position:relative;}
.ec-ag-art{margin-left:auto;flex:none;width:52px;height:39px;display:block;}
.ec-ag-art svg{width:100%;height:100%;display:block;}
#lessonSlideWrap .xa-list li:nth-child(4n+1){border-left:4px solid #262B45;}
#lessonSlideWrap .xa-list li:nth-child(4n+2){border-left:4px solid #DB8437;}
#lessonSlideWrap .xa-list li:nth-child(4n+3){border-left:4px solid #3F7D58;}
#lessonSlideWrap .xa-list li:nth-child(4n+4){border-left:4px solid #1F6F78;}
#lessonSlideWrap .xa-n{color:#A34E14 !important;}

/* topic header icon */
.ec-head-art{flex:none;width:48px;height:36px;display:block;background:#fff;border-radius:8px;box-shadow:0 0 0 1px #E3E6EF;}
.ec-head-art svg{width:100%;height:100%;display:block;}

/* sections: colour + icon */
#lessonSlideWrap .ec-sec-core{--ec:#262B45;--ec-t:#EEF1FA;}
#lessonSlideWrap .ec-sec-steps{--ec:#A34E14;--ec-t:#FFF4E8;}
#lessonSlideWrap .ec-sec-best{--ec:#2F6B4A;--ec-t:#EAF4EE;}
#lessonSlideWrap [class*="ec-sec-"] .fp-label{color:var(--ec) !important;}
#lessonSlideWrap .ec-ico{font-size:14px;line-height:1;letter-spacing:0;margin-left:-2px;}
#lessonSlideWrap [class*="ec-sec-"] .fp-label::after{background:linear-gradient(90deg,var(--ec),transparent) !important;opacity:.35;height:2px !important;}
#lessonSlideWrap [class*="ec-sec-"] .fp-num{background:var(--ec) !important;}

/* the key line: a callout */
#lessonSlideWrap .ec-sec-core .fp-body > p, #lessonSlideWrap .ec-sec-core .fp-body > div > p{display:block;background:var(--ec-t);border-left:5px solid #DB8437;
  border-radius:10px;padding:10px 16px;margin:4px auto 0;color:#1B1E2E !important;font-weight:600;}

/* step cards */
#lessonSlideWrap .ec-sec-steps ol > li{background:#FFF8F0 !important;border-color:#F0D9C2 !important;}
#lessonSlideWrap .ec-sec-steps ol > li:nth-child(even){background:#F3F5FB !important;border-color:#DCE0EE !important;}
#lessonSlideWrap .ec-sec-steps ol > li{border-top-color:#DB8437 !important;}
#lessonSlideWrap .ec-sec-steps ol > li:nth-child(even){border-top-color:#262B45 !important;}
#lessonSlideWrap .ec-sec-steps ol > li::before{background:#DB8437 !important;color:#1B1E2E !important;}
#lessonSlideWrap .ec-sec-steps ol > li:nth-child(even)::before{background:#262B45 !important;color:#fff !important;}

/* dashboard day cards: contrast, kept light. The cards were frosted glass over the photo (grey on grey);
   now a solid white card with the navy / orange top stripe, a deep-orange DAY N and a near-black title, a
   soft blue-grey Start with bold navy text (solid navy on hover) and a white Topics / Finish row with
   dark text. Overrides js/lsh-card-frame.js (shared by every course). */
body .dash-main .module-card.mc-clean{background:#fff !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;}
/* the frame round each card: a navy-to-gold gradient (white card inside, gradient only in the border) */
body .dash-main .module-card.mc-clean{border-color:transparent !important;
  background:linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#1E2340 0%,#3A4170 45%,#B8892B 80%,#E2B85A 100%) border-box !important;}
body .dash-main .module-card.mc-clean .module-head,
body .dash-main .module-card.mc-clean:nth-child(3n+2) .module-head,
body .dash-main .module-card.mc-clean:nth-child(3n+3) .module-head{background:#fff !important;border-bottom:1px solid #E6E9F1 !important;}
body .dash-main .module-card.mc-clean .mh-day{color:#A34E14 !important;font-weight:800 !important;}
body .dash-main .module-card.mc-clean .mh-title{color:#1B1E2E !important;}
body .dash-main .module-card.mc-clean .module-body{background:#fff;}
body .dash-main .module-card.mc-clean .mc-grid{border-top:1px solid #E6E9F1 !important;}
body .dash-main .module-card.mc-clean .mc-grid > .module-start-btn{background:#EEF1FA !important;color:#262B45 !important;font-weight:800 !important;}
body .dash-main .module-card.mc-clean .mc-grid > .module-start-btn:not(:disabled):hover,
body .dash-main .module-card.mc-clean:hover .mc-grid > .module-start-btn:not(:disabled){background:#262B45 !important;color:#fff !important;}
body .dash-main .module-card.mc-clean .mc-grid > button:not(.module-start-btn){background:#fff !important;color:#262B45 !important;font-weight:600 !important;border-top:1px solid #E6E9F1 !important;}
body .dash-main .module-card.mc-clean .mc-grid.mc-n2 > button:not(.module-start-btn):not(:last-child){border-right:1px solid #E6E9F1 !important;}
body .dash-main .module-card.mc-clean .mc-grid > button:not(.module-start-btn):not(:disabled):hover{background:#F3F5FB !important;}
body .dash-main .module-card.mc-clean .module-topics-btn span{color:#A34E14 !important;}

/* the dashboard uses the window's full width, and the cards' titles grow with it */
@media (min-width:1200px){
  main.main-dash{max-width:none !important;padding-left:24px !important;padding-right:24px !important;}
  body .dash-main .module-card.mc-clean .mh-title{font-size:clamp(14px,1.02vw,19px) !important;line-height:1.22 !important;}
}

/* Do this / Watch out cards */
#lessonSlideWrap .vis-card.good{background:#EAF4EE !important;border-color:#BFDCCB !important;border-left:5px solid #3F7D58 !important;}
#lessonSlideWrap .vis-card.bad{background:#FFF1E4 !important;border-color:#F3D2B3 !important;border-left:5px solid #DB8437 !important;}
#lessonSlideWrap .vis-card.good .vis-badge{color:#2F6B4A !important;}
#lessonSlideWrap .vis-card.bad .vis-badge{color:#9B3A30 !important;}
`;
  const st = document.createElement("style"); st.id = "eapa-deck-color"; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  if(typeof render === "function" && typeof state !== "undefined" && state.view === "day") try{ render(); }catch(e){}
})();
