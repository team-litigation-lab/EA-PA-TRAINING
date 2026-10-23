/* ===== 👁 Up next: a preview of the next slide =====
   Rest the mouse on Next (no click) and a small copy of the next slide shows above it, with its title and number,
   so a trainer knows what's coming before moving on. 👁 Peek next, beside Next, pins the same preview open (or
   press N); it stays up while moving through the slides until it's turned off. Works on the lesson page, in full
   screen, and on the Presenter view console's Next. Never shown in the slides window shared in Meet.
   The preview is the next slide's own content drawn at the deck's size (960 × 540) and scaled down; it is inert,
   carries no ids but its frame's, and is removed before any slide is drawn. Loaded after js/eapa-deck-card.js. */
(function(){
  if(window.__eaNextPreview) return; window.__eaNextPreview = true;
  if(document.body && document.body.classList.contains("audience-mode")) return;
  if(/[?&]audience=/.test(location.search)) return;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const W = 960, H = 540, THUMB_W = 336, SC = THUMB_W / W;
  let pinned = false; try{ pinned = localStorage.getItem("eapa-peek-next") === "1"; }catch(e){}
  let hoverT = null, box = null;

  // what Next does from here: the next page of this slide, the next slide, or the Knowledge Check
  function nextInfo(){
    const d = typeof DAYS !== "undefined" && DAYS.find(x => x.id === state.dayId); if(!d) return null;
    const slides = buildDaySlides(d), idx = Math.min(state.lessonSlide || 0, slides.length - 1);
    const pages = state.presenting ? (state.presentPages || 1) : (state.slidePages || 1);
    const page = state.presenting ? (state.presentPage || 0) : (state.slidePage || 0);
    if(pages > 1 && page < pages - 1) return {d, slide: slides[idx], idx, kicker: `Next page · ${page + 2} of ${pages} of this slide`};
    if(idx + 1 < slides.length) return {d, slide: slides[idx + 1], idx: idx + 1, kicker: `Up next · Step ${idx + 2} of ${slides.length}`};
    return {d, end: true, kicker: "Up next", title: `Knowledge Check — the last step of Day ${d.id}`};
  }

  function thumbHtml(info){
    if(info.end) return `<div class="np-end">✅ Knowledge Check</div>`;
    let html = "";
    try{ html = renderDaySlideContent(info.d, info.slide, info.idx); }catch(e){ return `<div class="np-end">${esc(daySlideTitle(info.d, info.slide))}</div>`; }
    const t = document.createElement("template"); t.innerHTML = html;
    t.content.querySelectorAll("[id]").forEach(n => n.removeAttribute("id"));
    t.content.querySelectorAll("[onclick],[onchange],[oninput]").forEach(n => { n.removeAttribute("onclick"); n.removeAttribute("onchange"); n.removeAttribute("oninput"); });
    t.content.querySelectorAll("video,audio,iframe").forEach(n => n.remove());
    // the same frame the real slide sits in, so the slide's own styles apply
    return `<div class="lesson-stage np-stage"><div class="ea-deck-card np-card"><div class="stage-body"><div class="deck-fit" style="--deck-scale:${SC}">`
      + `<div class="lesson-slide" id="lessonSlideWrap">${t.innerHTML}</div></div></div></div></div>`;
  }

  function host(){ return document.fullscreenElement || document.body; }
  function hide(){ clearTimeout(hoverT); if(box){ box.remove(); box = null; } }
  function show(btn){
    hide();
    if(!btn || !btn.isConnected || state.view !== "day") return;
    const info = nextInfo(); if(!info) return;
    const title = info.end ? info.title : daySlideTitle(info.d, info.slide);
    box = document.createElement("div"); box.className = "np-pop" + (pinned ? " np-pinned" : ""); box.setAttribute("aria-hidden", "true"); box.inert = true;
    box.innerHTML = `<div class="np-kicker">${esc(info.kicker)}</div><div class="np-title">${esc(title)}</div><div class="np-thumb">${thumbHtml(info)}</div>`;
    host().appendChild(box);
    place(btn);
  }
  // above the button, right edges lined up, kept inside the window
  function place(btn){
    if(!box) return;
    const r = btn.getBoundingClientRect(), bw = box.offsetWidth, bh = box.offsetHeight;
    let left = Math.min(window.innerWidth - bw - 8, r.right - bw), top = r.top - bh - 10;
    if(top < 8) top = Math.min(window.innerHeight - bh - 8, r.bottom + 10);
    box.style.left = Math.max(8, left) + "px"; box.style.top = Math.max(8, top) + "px";
  }

  const nextBtn = () => document.querySelector("#lessonStage .slide-nav .btn-primary") || document.querySelector(".pv-nav .btn-primary");
  function refreshPinned(){
    syncPeekBtns();
    if(pinned && state.view === "day" && state.dayViewMode !== "knowledgeCheck" && state.dayViewMode !== "intro") show(nextBtn()); else hide();
  }
  function setPinned(on){
    pinned = !!on; try{ localStorage.setItem("eapa-peek-next", pinned ? "1" : "0"); }catch(e){}
    refreshPinned();
  }
  window.togglePeekNext = () => setPinned(!pinned);

  // 👁 Peek next, beside Next on the lesson page and on the Presenter view console. It is drawn with the page (not
  // added after it), so the bar under the slide never changes once the deck has been sized.
  const NEXT_RE = /<button class="btn btn-primary" onclick="(?:nextSlide\(\)|goToKnowledgeCheckWithInterstitial\(\)|presenterStep\(1\))">[^<]*<\/button>/;
  const peekBtn = () => `<button type="button" class="btn btn-ghost btn-sm np-peek${pinned ? " on" : ""}" aria-pressed="${pinned}" onclick="togglePeekNext()" title="Show what's next without moving on (or rest the mouse on Next). Shortcut: N">👁 Peek next</button>`;
  const __render = window.renderDaySlideshow;
  if(typeof __render === "function"){
    window.renderDaySlideshow = function(){
      const out = __render.apply(this, arguments);
      return typeof out === "string" ? out.replace(NEXT_RE, m => `<span class="np-next">${peekBtn()}${m}</span>`) : out;
    };
    Object.assign(window.renderDaySlideshow, __render);
  }
  function syncPeekBtns(){
    document.querySelectorAll(".np-peek").forEach(p => { p.classList.toggle("on", pinned); p.setAttribute("aria-pressed", String(pinned)); });
  }

  // hovering Next: a short wait, so passing over it on the way to a click shows nothing
  document.addEventListener("mouseover", e => {
    const b = e.target.closest && e.target.closest("#lessonStage .slide-nav .btn-primary, .pv-nav .btn-primary");
    if(!b || pinned || (box && box.__btn === b)) return;
    clearTimeout(hoverT);
    hoverT = setTimeout(() => { show(b); if(box) box.__btn = b; }, 220);
  });
  document.addEventListener("mouseout", e => {
    const b = e.target.closest && e.target.closest("#lessonStage .slide-nav .btn-primary, .pv-nav .btn-primary");
    if(!b || pinned || (e.relatedTarget && b.contains(e.relatedTarget))) return;
    hide();
  });
  // a click moves on: the old preview goes before the next slide is drawn
  document.addEventListener("mousedown", e => { if(!pinned) hide(); }, true);
  document.addEventListener("keydown", e => {
    if((e.key === "n" || e.key === "N") && !e.ctrlKey && !e.metaKey && !e.altKey && state.view === "day"
      && !(typeof isTyping === "function" && isTyping()) && !document.querySelector(".overlay")
      && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "") && !(e.target && e.target.isContentEditable)){
      e.preventDefault(); setPinned(!pinned); return;
    }
    if(!pinned) hide();
  }, true);
  window.addEventListener("resize", () => { if(box) refreshPinned(); });
  document.addEventListener("fullscreenchange", () => setTimeout(refreshPinned, 60));

  // after every draw: the button is there again, and a pinned preview shows what's next from the new slide
  function hook(name){
    const f = window[name]; if(typeof f !== "function" || f.__np) return;
    const w = function(){ hide(); const r = f.apply(this, arguments); setTimeout(refreshPinned, 0); return r; };
    w.__np = true; window[name] = w;
  }
  hook("narratorAfterRender"); hook("afterRender"); hook("showSlidePage");
  setTimeout(refreshPinned, 0);

  const st = document.createElement("style"); st.id = "eapa-next-preview"; st.textContent = `
.np-pop{position:fixed;z-index:9000;width:${THUMB_W + 20}px;box-sizing:border-box;padding:10px;border-radius:14px;pointer-events:none;
  background:rgba(30,35,64,.96);border:1px solid rgba(255,255,255,.18);box-shadow:0 18px 40px -12px rgba(10,12,30,.6);color:#fff;animation:npIn .14s ease-out;}
.np-pop.np-pinned{border-color:rgba(240,192,138,.6);}
@keyframes npIn{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}
.np-kicker{font:700 10.5px/1.2 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#F0C08A;margin:0 0 3px;}
.np-title{font:700 13px/1.3 'Poppins','Inter',sans-serif;margin:0 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.np-thumb{width:${THUMB_W}px;height:${Math.round(H * SC)}px;overflow:hidden;border-radius:8px;background:#fff;position:relative;}
.np-end{height:100%;display:flex;align-items:center;justify-content:center;color:var(--navy,#262B45);font:800 20px/1.2 'Poppins','Inter',sans-serif;}
/* the frame: just the white sheet, at the deck's size, scaled down */
.np-pop .lesson-stage.np-stage{all:unset;display:block;width:${THUMB_W}px;height:${Math.round(H * SC)}px;}
.np-pop .ea-deck-card.np-card{padding:0 !important;margin:0 !important;border:0 !important;border-radius:0 !important;background:none !important;box-shadow:none !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;}
.np-pop .ea-deck-card.np-card::before, .np-pop .ea-deck-card.np-card::after{display:none !important;}
.np-pop .np-stage .deck-fit{position:relative !important;width:${THUMB_W}px !important;height:${Math.round(H * SC)}px !important;overflow:hidden !important;}
.np-pop .np-stage .deck-fit > #lessonSlideWrap.lesson-slide{position:absolute !important;top:0 !important;left:0 !important;width:${W}px !important;height:${H}px !important;margin:0 !important;
  scale:none !important;transform:scale(${SC}) !important;transform-origin:0 0 !important;animation:none !important;overflow:hidden !important;border:0 !important;border-radius:0 !important;box-shadow:none !important;}
.np-pop .np-stage #lessonSlideWrap *{animation:none !important;transition:none !important;}
.np-next{display:inline-flex;align-items:center;gap:8px;flex-shrink:0;}
.pv-nav .np-next .np-peek{white-space:nowrap;}
.pv-nav > .btn{flex-shrink:0;white-space:nowrap;}
.pv-nav:has(.np-next) select{flex:0 1 auto;min-width:0;}
.np-peek.on{background:#FFF1E2 !important;border-color:#DB8437 !important;color:#B5651F;}
@media(max-width:760px), (hover:none){.np-peek{display:none !important;}}
@media(max-width:760px){.np-pop{display:none !important;}}
`; document.head.appendChild(st);
})();
