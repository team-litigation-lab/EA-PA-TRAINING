/* ============================================================
   LSH EA/PA portal — update pack "p" (2026-09-26)
   Loaded by index.html right after the main script. Everything here
   replaces or extends functions in the main script, so the big
   index.html only needs one extra <script> line.
     1. Lesson slides: one standard size, content centred, and slides that
        don't fit continue on balanced extra pages (Next/Prev step pages first).
     2. Admin ↔ Trainee view switch (top bar) without signing out.
     3. SOP Reference: readable layout + a "Present" mode for live discussion.
   ============================================================ */
window.EAPA_UPDATE_PACK = "p";
(function(){ const s = document.createElement("style"); s.id = "eapa-update-p"; s.textContent = `
.nav .nav-viewswitch{background:rgba(240,192,138,.16) !important;color:#F0C08A !important;border:1px solid rgba(240,192,138,.45) !important;font-weight:700;}
.nav .nav-viewswitch:hover{background:rgba(240,192,138,.28) !important;}
.view-mode-strip{background:#F0C08A;color:#1F2440;font-size:13px;text-align:center;padding:7px 14px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;}
.view-mode-strip button{font:inherit;font-weight:700;background:#1F2440;color:#fff;border:none;border-radius:999px;padding:4px 12px;cursor:pointer;}
/* ================= Standard-size, centred slides =================
   Every slide is the same size. Content sits in a centred column; anything
   that doesn't fit continues on a balanced next page (see paginateLessonSlide). */
.lesson-stage #lessonSlideWrap{height:clamp(440px,66vh,720px);min-height:0;max-height:none;display:flex;flex-direction:column;justify-content:safe center;align-items:center;overflow-y:auto;}
.lesson-stage #lessonSlideWrap > *{width:100%;max-width:1080px;flex-shrink:0;}
.lesson-stage #lessonSlideWrap .topic-separator, .lesson-stage #lessonSlideWrap .lesson-card h4, .lesson-stage #lessonSlideWrap .meet-client-card h3, .lesson-stage #lessonSlideWrap .mc-tag, .lesson-stage #lessonSlideWrap .qc-tag{text-align:center;}
.lesson-stage #lessonSlideWrap .fp-section:first-of-type p, .lesson-stage #lessonSlideWrap .fp-section:first-of-type > div > p{margin-left:auto;margin-right:auto;}
.lesson-stage:fullscreen .stage-body > #lessonSlideWrap.lesson-slide{display:flex;flex-direction:column;justify-content:safe center;align-items:center;height:100%;}
.lesson-stage:fullscreen #lessonSlideWrap > *{max-width:1400px;}
.pg-hide{display:none !important;}
.lesson-stage #lessonSlideWrap.pg-roomy .fp-body > p, .lesson-stage #lessonSlideWrap.pg-roomy .fp-body > ul > li, .lesson-stage #lessonSlideWrap.pg-roomy .fp-section:first-of-type p{font-size:clamp(19px,1.7vw,24px) !important;line-height:1.55;}
.lesson-stage #lessonSlideWrap > .card::before{display:none;}
.lesson-stage #lessonSlideWrap ol.fp-howto-list, .lesson-stage #lessonSlideWrap .fp-section ol{grid-template-columns:repeat(auto-fit,minmax(170px,1fr));}
.lesson-stage #lessonSlideWrap .svg-diagram-card svg{display:block;width:auto;max-width:100%;max-height:calc(clamp(440px,66vh,720px) - 200px);margin:0 auto;}
.lesson-stage:fullscreen #lessonSlideWrap .svg-diagram-card svg{max-height:calc(100vh - 320px);}
.lesson-stage #lessonSlideWrap.pg-anim > *{animation:pgFade .35s ease both;}
@keyframes pgFade{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
.lesson-stage #lessonSlideWrap .pg-badge{position:absolute;right:16px;bottom:12px;width:auto;max-width:none;font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:700;letter-spacing:.08em;color:var(--orange-deep);background:#FFF1E2;border-radius:999px;padding:4px 10px;}
.lesson-stage #lessonSlideWrap.pg-later .lesson-card h4::after{content:" · continued";font-family:'IBM Plex Mono',monospace;font-size:.4em;font-weight:700;letter-spacing:.08em;color:var(--ink-soft);vertical-align:middle;}
@media(max-width:760px){.lesson-stage #lessonSlideWrap{height:auto;display:block;overflow:visible;} .lesson-stage #lessonSlideWrap .pg-badge{display:none;}}
/* ================= SOP Reference: readable reference + live Present mode ================= */
.sopx-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:18px;}
.sopx-days{display:flex;gap:6px;flex-wrap:wrap;}
.sopx-mode{display:inline-flex;background:#EEF0F6;border-radius:999px;padding:4px;}
.sopx-mode button{font:inherit;font-size:13.5px;font-weight:700;border:none;background:none;color:var(--navy);padding:7px 16px;border-radius:999px;cursor:pointer;}
.sopx-mode button.on{background:var(--navy);color:#fff;}
.sopx-hero{padding:26px 30px;margin-bottom:16px;border-top:6px solid var(--navy);}
.sopx-kicker, .sopx-s-kicker{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep);}
.sopx-hero h2{font-family:'Fraunces',Georgia,serif;color:var(--navy);font-size:30px;margin:4px 0 12px;}
.sopx-quote{margin:0 0 14px;padding:12px 16px;border-left:4px solid var(--orange);background:#FFF8EF;border-radius:0 10px 10px 0;font-size:15px;font-style:italic;color:#37394A;}
.sopx-meta{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px;} .sopx-meta.center{justify-content:center;margin-top:18px;}
.sopx-meta span{background:#F3F4F9;border-radius:999px;padding:6px 12px;font-size:13px;color:var(--ink);} .sopx-meta b{color:var(--navy);margin-right:2px;}
.sopx-cols{display:grid;grid-template-columns:1.2fr 1fr;gap:22px;}
.sopx-sub{font-size:13px;font-weight:800;color:var(--navy);margin:0 0 10px;}
.sopx-obj{margin:0;padding-left:22px;} .sopx-obj li{font-size:15px;line-height:1.55;margin-bottom:8px;}
.sopx-chips{display:flex;flex-wrap:wrap;gap:8px;} .sopx-chips span{background:#fff;border:1px solid var(--line);border-left:4px solid var(--orange);border-radius:10px;padding:8px 12px;font-size:14px;line-height:1.35;color:var(--ink);}
.sopx-toc{position:sticky;top:64px;z-index:5;display:flex;gap:6px;overflow-x:auto;background:var(--bg,#F6F4EF);padding:8px 0 10px;margin-bottom:6px;scrollbar-width:thin;}
.sopx-toc b{font-size:12px;color:var(--ink-soft);align-self:center;white-space:nowrap;margin-right:4px;}
.sopx-toc a{white-space:nowrap;font-size:12.5px;font-weight:600;color:var(--navy);background:#fff;border:1px solid var(--line);border-radius:999px;padding:5px 11px;text-decoration:none;}
.sopx-toc a:hover{border-color:var(--orange);color:var(--orange-deep);}
.sopx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:start;}
.sopx-sec{padding:18px 22px;margin:0;scroll-margin-top:120px;} .sopx-sec.wide{grid-column:1 / -1;}
.sopx-sec h3{display:flex;align-items:baseline;gap:10px;font-family:'Fraunces',Georgia,serif;font-size:19px;color:var(--navy);margin:0 0 12px;line-height:1.25;}
.sopx-n{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#fff;background:var(--navy);border-radius:6px;padding:2px 7px;flex-shrink:0;}
.sopx-list{margin:0;padding:0;list-style:none;} .sopx-list li{position:relative;padding:7px 0 7px 20px;font-size:15px;line-height:1.55;border-bottom:1px dashed #E8E4DC;}
.sopx-list li:last-child{border-bottom:none;} .sopx-list li::before{content:"";position:absolute;left:3px;top:15px;width:7px;height:7px;border-radius:50%;background:var(--orange);}
.sopx-sec.wide .sopx-list{columns:2;column-gap:28px;} .sopx-sec.wide .sopx-list li{break-inside:avoid;}
.sopx-lbl{color:var(--navy);}
.sopx-p{font-size:15px;line-height:1.7;margin:0;max-width:85ch;}
.sopx-table td{font-size:14px;line-height:1.5;vertical-align:top;} .sopx-table th{font-size:12.5px;} .sopx-table tbody tr:nth-child(even) td{background:#FAFAFC;}
@media(max-width:860px){.sopx-cols, .sopx-grid{grid-template-columns:1fr;} .sopx-sec.wide .sopx-list{columns:1;} .sopx-toc{top:0;}}
/* Present mode */
.sopx-stage{background:linear-gradient(135deg,#1F2440 0%,#2B3158 60%,#353C68 100%);border-radius:20px;padding:16px 20px;}
.sopx-s-top{display:flex;align-items:center;gap:10px;margin-bottom:12px;} .sopx-s-top .btn{margin-left:auto;}
.sopx-jump{font:inherit;font-size:13px;max-width:60%;border-radius:8px;border:none;padding:6px 8px;background:#fff;color:var(--navy);}
.sopx-s-top .btn-ghost{background:#fff;}
.sopx-lbl.blk{display:block;margin-bottom:4px;} .sopx-pt{display:block;font-size:.8em;line-height:1.45;color:var(--ink-soft);font-weight:400;}
.sopx-s-note{font-size:12px;color:#9EA3C2;margin-left:auto;} .sopx-s-note + .btn{margin-left:0;}
@media(max-width:760px){.sopx-s-note{display:none;}}
.sopx-s-count{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#C9CDE3;}
.sopx-slide{background:#FFFDF8;border-radius:16px;height:clamp(420px,64vh,700px);overflow:auto;padding:40px 56px;display:flex;flex-direction:column;justify-content:safe center;align-items:center;text-align:center;position:relative;}
.sopx-slide::before{content:"";position:absolute;inset:0 0 auto 0;height:6px;border-radius:16px 16px 0 0;background:linear-gradient(90deg,var(--navy),var(--orange));}
.sopx-slide > .sopx-fit{max-width:1100px;width:100%;}
.sopx-s-big{font-family:'Fraunces',Georgia,serif;color:var(--navy);font-size:clamp(34px,4vw,58px);line-height:1.1;margin:10px 0 18px;}
.sopx-s-quote{font-size:clamp(17px,1.6vw,22px);font-style:italic;color:#37394A;line-height:1.5;margin:0 auto;max-width:60ch;}
.sopx-s-title{font-family:'Fraunces',Georgia,serif;color:var(--navy);font-size:clamp(26px,2.8vw,42px);line-height:1.15;margin:8px 0 22px;}
.sopx-s-part{font-family:'IBM Plex Mono',monospace;font-size:.4em;color:var(--orange-deep);background:#FFF1E2;border-radius:999px;padding:3px 10px;vertical-align:middle;}
.sopx-s-sub{font-size:clamp(15px,1.3vw,18px);color:var(--ink-soft);margin:-10px 0 18px;}
.sopx-s-list{list-style:none;margin:0;padding:0;display:grid;gap:14px;text-align:left;counter-reset:sx;}
.sopx-s-list.two{grid-template-columns:repeat(2,minmax(0,1fr));}
.sopx-s-list li{counter-increment:sx;position:relative;background:#fff;border:1px solid var(--line);border-left:5px solid var(--navy);border-radius:12px;padding:16px 18px 16px 20px;font-size:clamp(16px,1.45vw,21px);line-height:1.45;color:var(--ink);}
.sopx-s-list li:nth-child(even){border-left-color:var(--orange);}
ol.sopx-s-list li{padding-left:58px;} ol.sopx-s-list li::before{content:counter(sx);position:absolute;left:16px;top:15px;width:28px;height:28px;border-radius:50%;background:var(--navy);color:#fff;font-size:14px;font-weight:800;display:flex;align-items:center;justify-content:center;}
.sopx-s-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;}
.sopx-s-chips span{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 18px;font-size:clamp(16px,1.4vw,20px);color:var(--ink);text-align:left;}
.sopx-s-chips b{background:var(--orange);color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;}
.sopx-s-para{font-size:clamp(18px,1.7vw,24px);line-height:1.6;color:var(--ink);max-width:62ch;margin:0 auto;text-align:left;}
.sopx-s-table{width:100%;border-collapse:separate;border-spacing:0;text-align:left;background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.sopx-s-table th{background:var(--navy);color:#fff;font-size:clamp(13px,1.1vw,15px);padding:12px 14px;}
.sopx-s-table td{font-size:clamp(15px,1.3vw,18px);line-height:1.45;padding:12px 14px;border-top:1px solid var(--line);vertical-align:top;}
.sopx-s-bar{height:4px;background:rgba(255,255,255,.15);border-radius:4px;margin:12px 0 0;overflow:hidden;} .sopx-s-bar i{display:block;height:100%;background:#F0C08A;transition:width .3s;}
.sopx-s-nav{display:flex;justify-content:space-between;align-items:center;margin-top:12px;} .sopx-s-nav span{font-size:12px;color:#C9CDE3;} .sopx-s-nav .btn-ghost{background:#fff;}
.sopx-stage:fullscreen{border-radius:0;padding:2.5vh 3vw;display:flex;flex-direction:column;}
.sopx-stage:fullscreen .sopx-slide{flex:1;height:auto;font-size:1.15em;}
.sopx-stage:fullscreen .sopx-s-list li, .sopx-stage:fullscreen .sopx-s-para{font-size:clamp(20px,1.8vw,28px);}
@media(max-width:760px){.sopx-slide{height:auto;min-height:60vh;padding:26px 18px;} .sopx-s-list.two{grid-template-columns:1fr;} .sopx-jump{max-width:48%;}}
`; document.head.appendChild(s); })();

/* ---------- 1. standard-size slides ---------- */
function goToSlide(i){
  const maxReached = state.maxSlideReached||0;
  if(i > maxReached){
    toast("Complete the current topic before jumping ahead.");
    return;
  }
  state.slideDir = i>(state.lessonSlide||0) ? "next" : "prev";
  state.lessonSlide = i; state.slidePage = 0;
  refreshLessonSlide();
}
function nextSlide(){
  if((state.slidePages||1) > 1 && (state.slidePage||0) < state.slidePages-1){ showSlidePage((state.slidePage||0)+1); return; }
  const d = DAYS.find(x=>x.id===state.dayId);
  const slides = buildDaySlides(d);
  const nextIdx = (state.lessonSlide||0)+1;
  if(nextIdx <= slides.length-1){
    state.slideDir = "next";
    state.maxSlideReached = Math.max(state.maxSlideReached||0, nextIdx);
    state.slideProgress = state.slideProgress || {};
    state.slideProgress[state.dayId] = state.maxSlideReached;
    storeSet("slide-progress", state.slideProgress);
    state.lessonSlide = nextIdx; state.slidePage = 0;
    refreshLessonSlide();
  }
}
function goToKnowledgeCheckWithInterstitial(){
  if((state.slidePages||1) > 1 && (state.slidePage||0) < state.slidePages-1){ showSlidePage((state.slidePage||0)+1); return; }
  state.dayViewMode = "knowledgeCheck";
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}
function prevSlide(){
  if((state.slidePages||1) > 1 && (state.slidePage||0) > 0){ showSlidePage(state.slidePage-1); return; }
  if((state.lessonSlide||0) > 0){
    state.slideDir = "prev";
    state.lessonSlide = (state.lessonSlide||0)-1;
    state.slidePage = -1;   // land on the last page of the previous slide
    refreshLessonSlide();
  }
}
function narratorAfterRender(pageOnly){
  if(state.view!=="day"){ if(Narrator.playing) Narrator.stop(true); __lastNarrKey = ""; return; }
  if(!pageOnly){ decorateCallouts(); paginateLessonSlide(); }
  const key = state.dayId+":"+(state.lessonSlide||0)+":"+(state.slidePage||0)+":"+state.dayViewMode;
  if(key!==__lastNarrKey){ __lastNarrKey = key; Narrator.afterSlideChange(); } else Narrator.paint();
}
function renderTopbar(){
  let views = [["dashboard","Dashboard"],["tasks","🎲 Tasks"],["clientprofile","Client Profile"],["practice","Practice Lab"],["crisisroleplay","🔥 Live Roleplay"],["notes","My Notes"],["handouts","Handouts"]];
  if(state.isAdmin){
    // Admin is a trainer monitoring dashboard, not a trainee workspace — hide
    // the trainee-facing-only views that have no role here.
    views = views.filter(([id]) => !["crisisroleplay","notes","handouts","tasks"].includes(id));
    views.push(["orientation","🧭 Orientation"]);
    views.push(["facilitatorguide","Facilitator Guide"]);
  }
  return `
  ${state.adminPreview ? `<div class="view-mode-strip">👁 <b>Trainee view</b> — you're seeing the portal as a trainee sees it (every day unlocked for preview). <button type="button" onclick="setAdminViewMode('admin')">Switch back to Admin view</button></div>` : ""}
  <div class="topbar ${state.mobileNavOpen?'nav-open':''}">
    <div class="topbar-inner">
      <div class="brand" onclick="goto('dashboard')">
        ${brandMark()}
        <div class="brand-text"><b>LSH EA/PA Upskill Program</b><span>10-Day Interactive Training</span></div>
      </div>
      <button type="button" class="mobile-menu-btn" aria-label="Menu" aria-expanded="${state.mobileNavOpen?'true':'false'}" onclick="toggleMobileNav()">${state.mobileNavOpen?'✕':'☰'}<span>Menu</span></button>
      <div class="topbar-right">
        <div class="topbar-search">
          <span class="sicon">🔍</span>
          <input type="text" id="topSearchInput" name="topSearchInput" autocomplete="off" placeholder="Search days, topics, tools…" value="${esc(state.searchQuery||'')}" oninput="setTopSearch(this.value)" onkeydown="if(event.key==='Escape') clearTopSearch();">
          ${state.searchQuery ? `<div class="search-results" id="searchResultsWrap">${renderSearchResults(state.searchQuery)}</div>` : ""}
        </div>
        <div class="nav">
          ${views.map(([id,label])=>`<button class="${state.view===id?'active':''}" onclick="goto('${id}')">${label}${id==="tasks" && openTasksCount() ? `<span class="nav-badge">${openTasksCount()}</span>` : ""}</button>`).join("")}
          ${(state.traineeId && !state.isAdmin) ? `<button type="button" class="nav-focus" onclick="openFocusPanel()" title="My Focus — trainer feedback and what to work on next">🎯 Focus${focusNewCount()?`<span class="nav-badge">${focusNewCount()}</span>`:""}</button>` : ""}
          ${state.adminPreview
            ? `<button type="button" class="nav-viewswitch" onclick="setAdminViewMode('admin')" title="Return to the admin (trainer) view">🛡 Back to Admin view</button>`
            : `<button class="${state.view==='admin'?'active':''}" onclick="openAdmin()">🛡 Admin</button>`}
          ${state.isAdmin ? `<button type="button" class="nav-viewswitch" onclick="setAdminViewMode('trainee')" title="See the portal exactly as a trainee does — no trainer tools or admin pages">👁 Trainee view</button>` : ""}
          <button type="button" class="nav-fs" onclick="togglePageFullscreen()" title="Full screen (Esc to exit)">⛶</button>
        </div>
        <div class="trainee-chip" onclick="promptName()">
          <span class="dot"></span> ${state.traineeName ? esc(state.traineeName) : "Set your name"}
        </div>
      </div>
    </div>
  </div>`;
}
function authHeaders(){
  const t = ((state.isAdmin || state.adminPreview) && state.adminToken) || state.authToken;
  return Object.assign({"Content-Type":"application/json"}, t ? {"Authorization":"Bearer "+t} : {});
}
async function authFetch(url, payload){
  const doFetch = ()=>fetch(url, {method:"POST", headers:authHeaders(), body: JSON.stringify(payload)});
  let res = await doFetch();
  if(res.status===401 && !state.isAdmin && await reauthTrainee()) res = await doFetch();
  if(res.status===401 && (state.isAdmin || state.adminPreview)){ setAdminToken(""); state.isAdmin = false; state.adminPreview = false; try{ sessionStorage.removeItem("lsh_admin_preview"); }catch(e){} toast("Your admin session expired — click 🛡 Admin and sign in again."); }
  return res;
}
Narrator.slideText = function(){
    const card = document.querySelector("#lessonSlideWrap"); if(!card) return "";
    const clone = card.cloneNode(true);
    clone.querySelectorAll(".pg-hide, .pg-badge, svg, .svg-diagram-card, .vis-flow, .vis-chips, .vis-label, .topic-separator, .fp-num, .lnum, .vis-badge, .vis-card-i, .qc-actions, .quiz-rationale:not(.show), button, .lx-panel:not([open])").forEach(n=>n.remove());
    return clone.innerText.replace(/\s*\n+\s*/g, ". ").replace(/(\.\s*){2,}/g, ". ").replace(/[→➜]/g, ", then ").replace(/\s+/g," ").trim();
  };
/* ---------- Standard-size slides: content that doesn't fit continues on the next page ----------
   The slide box has a fixed size. After each render we measure the content blocks
   and, if they overflow, split them into the fewest pages possible and then
   rebalance so every page carries a similar amount (no crammed page + near-empty
   page). Next / Previous (and the arrow keys) step through pages before slides.
   Headings (kicker, title, section labels) repeat on every page of their block. */
const SLIDE_PG_BLOCKS = ".card, .lesson-card, .meet-client-card, .qcheck-card, .fp-section, .fp-body, .trainer-checkpoint";
const SLIDE_PG_HEADS = "h2, h3, h4, .topic-separator, .fp-label, .mc-tag, .tc-tag, .qc-tag, .discussion-tag, .vis-label";
let __slidePg = null;
function collectSlideUnits(root, bigH){
  const units = [];
  const walk = (el)=>{
    for(const c of el.children){
      if(c.matches(SLIDE_PG_HEADS) || c.classList.contains("pg-badge")) continue;
      if(c.matches(SLIDE_PG_BLOCKS)){ walk(c); continue; }
      // lists and card grids may break between items — but only when they're tall;
      // short ones (e.g. a row of 3 step cards) always stay together
      if(c.children.length > 1 && c.getBoundingClientRect().height > bigH){
        const cs = getComputedStyle(c);
        if(c.matches("ul, ol") || cs.display.includes("grid") || (cs.display.includes("flex") && (cs.flexWrap==="wrap" || cs.flexDirection==="column"))){ units.push(...c.children); continue; }
      }
      units.push(c);
    }
  };
  walk(root);
  return units.filter(u=>u.getClientRects().length);
}
function paginateLessonSlide(){
  const wrap = document.getElementById("lessonSlideWrap");
  __slidePg = null; state.slidePages = 1;
  if(!wrap) return;
  const key = state.dayId+":"+(state.lessonSlide||0);
  if(state.slidePageKey !== key){ state.slidePageKey = key; if(state.slidePage !== -1) state.slidePage = 0; }
  wrap.querySelectorAll(".pg-hide").forEach(n=>n.classList.remove("pg-hide"));
  wrap.querySelectorAll(".pg-badge").forEach(n=>n.remove());
  wrap.querySelectorAll("ol[data-pg-start]").forEach(ol=>{ ol.removeAttribute("start"); ol.style.counterReset = ""; ol.removeAttribute("data-pg-start"); });
  wrap.classList.remove("pg-later", "pg-roomy");
  if(window.innerWidth <= 760){ state.slidePage = 0; updateSlidePageUi(); return; }   // phones: the page scrolls instead
  const cs = getComputedStyle(wrap);
  const padT = parseFloat(cs.paddingTop)||0, padB = parseFloat(cs.paddingBottom)||0;
  const avail = wrap.clientHeight - padT - padB;
  const units = collectSlideUnits(wrap, avail*0.4);
  const base = wrap.getBoundingClientRect().top - wrap.scrollTop;
  const box = units.map(u=>{ const r = u.getBoundingClientRect(); return {top:r.top-base, bottom:r.bottom-base}; });
  if(units.length < 2 || wrap.scrollHeight <= wrap.clientHeight + 2){ state.slidePage = 0; updateSlidePageUi(); return; }
  const headH = Math.max(0, box[0].top - padT);   // kicker + title, repeated on every page
  const room = Math.max(160, avail - headH - 56);   // 56px: section labels repeated on continued pages
  // never break between cards sitting on the same row of a grid
  const canBreak = box.map((b,i)=>i>0 && Math.abs(b.top - box[i-1].top) > 2);
  const pack = (limit)=>{
    const out = []; let s = 0, maxB = box[0].bottom, brk = -1;
    for(let i=1;i<box.length;i++){
      if(canBreak[i]) brk = i;
      maxB = Math.max(maxB, box[i].bottom);
      if(maxB - box[s].top > limit && brk > s){
        out.push([s,brk-1]); s = brk; brk = -1;
        maxB = 0; for(let k=s;k<=i;k++) maxB = Math.max(maxB, box[k].bottom);
      }
    }
    out.push([s,box.length-1]); return out;
  };
  let pages = pack(room);
  if(pages.length > 1){   // balance: the smallest page height that still needs no extra pages
    let lo = 0, hi = room;
    for(let k=0;k<16;k++){ const mid = (lo+hi)/2; if(pack(mid).length <= pages.length) hi = mid; else lo = mid; }
    pages = pack(hi);
  }
  if(pages.length < 2){ state.slidePage = 0; updateSlidePageUi(); return; }
  const heights = pages.map(([a,b])=>Math.max(...box.slice(a,b+1).map(x=>x.bottom)) - box[a].top);
  __slidePg = {wrap, units, pages, heights, room};
  state.slidePages = pages.length;
  if(state.slidePage === -1 || (state.slidePage||0) >= pages.length) state.slidePage = pages.length-1;
  applySlidePage();
}
function applySlidePage(){
  const pg = __slidePg; if(!pg) return;
  const p = state.slidePage||0, [a,b] = pg.pages[p];
  pg.units.forEach((u,i)=>u.classList.toggle("pg-hide", i<a || i>b));
  // hide blocks (and their headings) with nothing left to show on this page
  pg.wrap.querySelectorAll(SLIDE_PG_BLOCKS).forEach(bl=>{
    const mine = pg.units.filter(u=>bl.contains(u));
    if(mine.length) bl.classList.toggle("pg-hide", mine.every(u=>u.classList.contains("pg-hide")));
  });
  // numbered lists split across pages keep counting (4, 5, 6… not 1, 2, 3)
  pg.wrap.querySelectorAll("ol").forEach(ol=>{
    const items = [...ol.children]; const first = items.findIndex(li=>!li.classList.contains("pg-hide"));
    if(first > 0){ ol.setAttribute("start", String(first+1)); ol.style.counterReset = "st "+first; ol.setAttribute("data-pg-start","1"); }
    else if(ol.hasAttribute("data-pg-start")){ ol.removeAttribute("start"); ol.style.counterReset = ""; ol.removeAttribute("data-pg-start"); }
  });
  pg.wrap.classList.toggle("pg-later", p > 0);
  pg.wrap.classList.toggle("pg-roomy", pg.heights[p] < pg.room*0.4);   // a light page gets larger type so it doesn't look empty
  pg.wrap.querySelectorAll(".pg-badge").forEach(n=>n.remove());
  pg.wrap.insertAdjacentHTML("beforeend", `<div class="pg-badge">PAGE ${p+1} / ${pg.pages.length}${p < pg.pages.length-1 ? " · CONTINUES →" : ""}</div>`);
  pg.wrap.scrollTop = 0;
  updateSlidePageUi();
}
function updateSlidePageUi(){
  const stage = document.getElementById("lessonStage") || document;
  const counter = stage.querySelector(".slide-nav .slide-counter");
  if(counter){
    const base = counter.dataset.base || counter.textContent; counter.dataset.base = base;
    counter.textContent = (state.slidePages||1) > 1 ? `${base} · Page ${(state.slidePage||0)+1} of ${state.slidePages}` : base;
  }
  const next = stage.querySelector(".slide-nav .btn-primary");
  if(next){
    const label = next.dataset.base || next.innerHTML; next.dataset.base = label;
    next.innerHTML = (state.slidePages||1) > 1 && (state.slidePage||0) < state.slidePages-1 ? "Next page &rarr;" : label;
  }
  const prev = stage.querySelector(".slide-nav .btn-ghost");
  if(prev && (state.lessonSlide||0) === 0) prev.disabled = !((state.slidePage||0) > 0);
}
function showSlidePage(p){
  state.slidePage = Math.max(0, Math.min(p, (state.slidePages||1)-1));
  applySlidePage();
  const w = document.getElementById("lessonSlideWrap");
  if(w){ w.classList.remove("pg-anim"); void w.offsetWidth; w.classList.add("pg-anim"); }
  narratorAfterRender(true);
}
window.showSlidePage = showSlidePage;
let __pgResizeT = null;
function repaginateSoon(){ clearTimeout(__pgResizeT); __pgResizeT = setTimeout(()=>{ if(state.view==="day" && document.getElementById("lessonSlideWrap")) paginateLessonSlide(); }, 180); }
window.addEventListener("resize", repaginateSoon);
document.addEventListener("fullscreenchange", repaginateSoon);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(repaginateSoon);

/* ---------- 2. admin ↔ trainee view ---------- */
/* Admin ↔ Trainee view: an admin can flip the whole portal into the trainee
   experience (trainee nav, no trainer tools/admin pages) and back, without
   signing out. Their admin session stays active underneath. */
function setAdminViewMode(mode){
  if(mode==="trainee"){
    if(!state.isAdmin) return;
    state.isAdmin = false; state.adminPreview = true;
    try{ sessionStorage.setItem("lsh_admin_preview","1"); }catch(e){}
    const back = ["admin","orientation","facilitatorguide"].includes(state.view) ? "dashboard" : state.view;
    if(state.view==="day") render(); else goto(back);
    toast("👁 Trainee view — this is what trainees see. Use “Back to Admin view” to return.");
  }else{
    if(!state.adminPreview) return;
    state.adminPreview = false; state.isAdmin = true;
    try{ sessionStorage.removeItem("lsh_admin_preview"); }catch(e){}
    if(state.view==="day"){ state.maxSlideReached = 9999; render(); } else goto(state.view==="dashboard" ? "admin" : state.view);
    toast("🛡 Back in Admin view.");
  }
}
window.setAdminViewMode = setAdminViewMode;
function toolUnlocked(t){ const n = toolDayOf(t); return state.isAdmin || state.adminPreview || !n || dayUnlocked(n); }
const __eapaDayUnlocked = window.dayUnlocked;
window.dayUnlocked = function(id){ return state.adminPreview ? true : __eapaDayUnlocked(id); };
const __eapaGoto = window.goto;
window.goto = function(view, id){ __eapaGoto(view, id); if(view==="day" && state.adminPreview && state.maxSlideReached !== 9999){ state.maxSlideReached = 9999; render(); } };
const __eapaOpenAdmin = window.openAdmin;
window.openAdmin = function(){ if(state.adminPreview){ setAdminViewMode("admin"); return; } return __eapaOpenAdmin(); };
const __eapaAdminLogout = window.adminLogout;
window.adminLogout = function(){ state.adminPreview = false; try{ sessionStorage.removeItem("lsh_admin_preview"); }catch(e){} return __eapaAdminLogout(); };
const __eapaLogout = window.logout;
window.logout = function(){ state.adminPreview = false; return __eapaLogout.apply(this, arguments); };
const __eapaForceLogout = window.forceRevokedLogout;
window.forceRevokedLogout = function(){ state.adminPreview = false; return __eapaForceLogout.apply(this, arguments); };

/* ---------- 3. SOP Reference + Present mode ---------- */
const __eapaSopLive = window.sopLiveSections;
window.sopLiveSections = function(d){
  const tags = {"Session plan":"plan", "Topics covered":"topics", "Practice Lab":"lab", "After the session":"after"};
  return __eapaSopLive(d).map(s=>{ const k = Object.keys(tags).find(t=>String(s.h).startsWith(t)); return k ? Object.assign({}, s, {live:tags[k]}) : s; });
};
/* ---------- SOP Reference ----------
   Two ways to use it:
   • Reference — a scannable page: day summary up top, a jump list, then each
     section as a numbered card with larger type ("Label: detail" lines get a bold label).
   • Present — for live discussion: one short slide at a time, big type, long
     sections split into balanced parts, ← → keys and full screen. */
function renderAdminSOP(){
  const day = state.sopDay || 1;
  const d = sopForDay(day);
  const availableDays = DAYS.map(x=>x.id);
  const mode = state.sopMode || "read";
  return `
    <p class="eyebrow">Admin — Reference</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 4px;">SOP Reference</h1>
    <p style="color:var(--ink-soft);font-size:13px;max-width:70ch;margin:0 0 20px;">The trainer-facing Upskill Training Guide SOP. Use <b>Present</b> during a live session — it shows one short point at a time in large type.</p>
    <div class="sopx-bar">
      <div class="sopx-days">
        ${Array.from({length:10},(_,i)=>i+1).map(n=>{
          const has = availableDays.includes(n);
          return `<button class="btn btn-sm ${n===day?'btn-navy':'btn-ghost'}" ${has?'':'disabled title="Not yet added"'} onclick="setSopDay(${n})">Day ${n}${has?'':' (soon)'}</button>`;
        }).join("")}
      </div>
      <div class="sopx-mode" role="tablist">
        <button class="${mode==="read"?"on":""}" onclick="setSopMode('read')">📖 Reference</button>
        <button class="${mode==="present"?"on":""}" onclick="setSopMode('present')">🎤 Present</button>
      </div>
    </div>
    ${!d ? `<div class="card" style="padding:30px;text-align:center;color:var(--ink-soft);">Day ${day}'s SOP content hasn't been added yet.</div>`
      : mode==="present" ? renderSopPresent(d) : renderSopDayContent(d)}
  `;
}
/* "Mindset: Strategic Partner" → bold label + detail */
function sopItemHtml(t){
  if(t && typeof t==="object") return `<b class="sopx-lbl blk">${esc(t.label)}</b>${t.text ? `<span class="sopx-pt">${esc(t.text)}</span>` : ""}`;
  const s = String(t||""); const m = s.match(/^([^:.!?]{2,42}):\s+(.+)$/);
  return m ? `<b class="sopx-lbl">${esc(m[1])}:</b> ${esc(m[2])}` : esc(s);
}
function renderSopDayContent(d){
  const info = d.discussionInfo || {};
  const meta = [["⏱","Duration",info.duration],["🖥","PPT",info.ppt],["🎨","Canva",info.canvaLabel],["🎬","Video",info.video]].filter(x=>x[2]);
  return `
    <div class="card sopx-hero">
      <div class="sopx-kicker">Day ${d.id} · Trainer SOP</div>
      <h2>${esc(d.title)}</h2>
      ${d.introduction ? `<blockquote class="sopx-quote">“${esc(d.introduction)}”</blockquote>` : ""}
      ${meta.length ? `<div class="sopx-meta">${meta.map(([i,k,v])=>`<span>${i} <b>${k}</b> ${esc(v)}</span>`).join("")}</div>` : ""}
      <div class="sopx-cols">
        <div><div class="sopx-sub">🎯 Objectives — participants will be able to</div>
          <ol class="sopx-obj">${(d.objectives||[]).map(o=>`<li>${esc(o)}</li>`).join("")}</ol></div>
        <div><div class="sopx-sub">🗂 Today we will discuss</div>
          <div class="sopx-chips">${(d.topics||[]).map(t=>`<span>${esc(t)}</span>`).join("")}</div></div>
      </div>
    </div>
    ${d.handWritten ? "" : `<div class="empty-note" style="margin-bottom:12px;">This day's SOP is generated from the live portal content, so it always matches what trainees see. Add a hand-written script for it any time and it will appear above the auto-built plan.</div>`}
    <nav class="sopx-toc"><b>Jump to</b>${d.sections.map((s,i)=>`<a href="#sopsec-${i}" onclick="event.preventDefault();document.getElementById('sopsec-${i}').scrollIntoView({behavior:'smooth',block:'start'})">${i+1}. ${esc(s.h)}</a>`).join("")}</nav>
    <div class="sopx-grid">${d.sections.map(renderSopSection).join("")}</div>
  `;
}
function renderSopSection(s, i){
  let body = "", wide = false;
  if(s.type==="bullets"){
    body = `<ul class="sopx-list">${s.items.map(x=>`<li>${sopItemHtml(x)}</li>`).join("")}</ul>`;
    wide = s.items.length > 7 || s.items.join(" ").length > 700;
  }else if(s.type==="paragraph"){
    body = `<p class="sopx-p">${esc(s.text)}</p>`;
    wide = String(s.text||"").length > 500;
  }else if(s.type==="table"){
    body = `<div style="overflow-x:auto;"><table class="log-table sopx-table"><thead><tr>${s.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    wide = true;
  }
  return `
    <section class="card sopx-sec ${wide?"wide":""}" id="sopsec-${i}">
      <h3><span class="sopx-n">${String(i+1).padStart(2,"0")}</span>${esc(s.h)}</h3>
      ${body}
    </section>`;
}
/* ---- Present mode ---- */
function sopChunk(items, weight, budget, maxN){
  // Split into the fewest parts that respect the budget, then even them out.
  const total = items.reduce((a,x)=>a+weight(x),0);
  const parts = Math.max(Math.ceil(total/budget), Math.ceil(items.length/maxN), 1);
  const target = total/parts, out = [[]]; let acc = 0;
  items.forEach(x=>{
    const w = weight(x);
    if(out[out.length-1].length && (acc + w/2 > target*out.length) && out.length < parts){ out.push([]); }
    out[out.length-1].push(x); acc += w;
  });
  return out;
}
function sopPresentSlides(d){
  const info = d.discussionInfo || {};
  const slides = [{kind:"title", d, info}];
  if((d.objectives||[]).length) slides.push({kind:"list", h:"Objectives", sub:"By the end of this session, participants will be able to:", items:d.objectives, ordered:true});
  if((d.topics||[]).length) slides.push({kind:"chips", h:"Today we will discuss", items:d.topics});
  // Trainer-only planning sections (session plan, lab admin notes, after-session
  // checklist) stay in Reference; the auto-built topic table becomes simple
  // "topic — key point" slides (trainer cues are never shown on a shared screen).
  const shown = d.sections.filter(s=>!["plan","lab","after"].includes(s.live));
  shown.forEach((s0,si)=>{
    const s = s0.live==="topics" ? {h:"Topics we'll cover", type:"bullets", items:s0.rows.map(r=>({label:r[1], text:r[2]}))} : s0;
    let parts = [];
    if(s.type==="bullets") parts = sopChunk(s.items, x=>typeof x==="object" ? 30+(x.label+" "+x.text).length*0.35 : 60+String(x).length, 520, 6).map(items=>({kind:"list", items}));
    else if(s.type==="paragraph"){
      const sentences = String(s.text||"").match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) || [s.text];
      parts = sopChunk(sentences, x=>x.length, 420, 99).map(ss=>({kind:"para", text:ss.join("").trim()}));
    }else if(s.type==="table") parts = sopChunk(s.rows, r=>80+r.join(" ").length, 700, 5).map(rows=>({kind:"table", headers:s.headers, rows}));
    parts.forEach((p,pi)=>slides.push(Object.assign(p, {h:s.h, num:si+1, of:shown.length, part:pi+1, parts:parts.length})));
  });
  return slides;
}
function renderSopSlide(sl, d){
  const head = (k)=>`<div class="sopx-s-kicker">${k}</div><h2 class="sopx-s-title">${esc(sl.h)}${sl.parts>1?` <span class="sopx-s-part">${sl.part} / ${sl.parts}</span>`:""}</h2>`;
  const kick = sl.num && sl.of > 1 ? `Day ${d.id} · Section ${sl.num} of ${sl.of}` : `Day ${d.id}`;
  if(sl.kind==="title"){
    const i = sl.info;
    return `<div class="sopx-s-kicker">Day ${d.id} · Upskill Training</div>
      <h1 class="sopx-s-big">${esc(d.title)}</h1>
      ${d.introduction ? `<p class="sopx-s-quote">“${esc(d.introduction)}”</p>` : ""}
      <div class="sopx-meta center">${[["⏱",i.duration],["🖥",i.ppt],["🎬",i.video]].filter(x=>x[1]).map(([e,v])=>`<span>${e} ${esc(v)}</span>`).join("")}</div>`;
  }
  if(sl.kind==="chips") return head(kick) + `<div class="sopx-s-chips">${sl.items.map((t,k)=>`<span><b>${k+1}</b>${esc(t)}</span>`).join("")}</div>`;
  if(sl.kind==="list"){
    const tag = sl.ordered ? "ol" : "ul";
    return head(kick) + (sl.sub?`<p class="sopx-s-sub">${esc(sl.sub)}</p>`:"") + `<${tag} class="sopx-s-list ${sl.items.length>3?"two":""}">${sl.items.map(x=>`<li>${sopItemHtml(x)}</li>`).join("")}</${tag}>`;
  }
  if(sl.kind==="para") return head(kick) + `<p class="sopx-s-para">${esc(sl.text)}</p>`;
  if(sl.kind==="table") return head(kick) + `<table class="sopx-s-table"><thead><tr>${sl.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${sl.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  return "";
}
function renderSopPresent(d){
  const slides = sopPresentSlides(d);
  const idx = Math.max(0, Math.min(state.sopSlide||0, slides.length-1)); state.sopSlide = idx;
  const sl = slides[idx];
  const outline = [];
  slides.forEach((s,k)=>{ if(s.part===1 || !s.part) outline.push({k, label: s.kind==="title" ? "Welcome" : s.h}); });
  return `
    <div class="sopx-stage" id="sopStage">
      <div class="sopx-s-top">
        <select class="sopx-jump" onchange="sopGo(+this.value, true)" title="Jump to a section">${outline.map(o=>`<option value="${o.k}" ${slides[idx].h===slides[o.k].h && (slides[idx].kind==="title")===(slides[o.k].kind==="title")?"selected":""}>${esc(o.label)}</option>`).join("")}</select>
        <span class="sopx-s-count">${idx+1} / ${slides.length}</span>
        <span class="sopx-s-note">Trainer-only planning notes stay in Reference</span>
        <button class="btn btn-sm btn-ghost" onclick="sopFullscreen()">⛶ Full screen</button>
      </div>
      <div class="sopx-slide" id="sopSlide"><div class="sopx-fit">${renderSopSlide(sl, d)}</div></div>
      <div class="sopx-s-bar"><i style="width:${Math.round((idx+1)/slides.length*100)}%"></i></div>
      <div class="sopx-s-nav">
        <button class="btn btn-ghost" onclick="sopGo(-1)" ${idx===0?"disabled":""}>← Previous</button>
        <span>Use ← → keys</span>
        <button class="btn btn-primary" onclick="sopGo(1)" ${idx===slides.length-1?"disabled":""}>Next →</button>
      </div>
    </div>`;
}
function sopGo(v, absolute){
  const d = sopForDay(state.sopDay||1); if(!d) return;
  const n = sopPresentSlides(d).length;
  state.sopSlide = Math.max(0, Math.min(absolute ? v : (state.sopSlide||0)+v, n-1));
  const stage = document.getElementById("sopStage");
  if(stage){ const tmp = document.createElement("div"); tmp.innerHTML = renderSopPresent(d); stage.innerHTML = tmp.querySelector("#sopStage").innerHTML; fitSopSlide(); }
  else render();
}
/* shrink a slide's content just enough to fit the fixed slide box (never below 70%) */
function fitSopSlide(){
  const box = document.getElementById("sopSlide"); const fit = box && box.querySelector(".sopx-fit"); if(!fit) return;
  let z = 1; fit.style.zoom = "1";
  while(box.scrollHeight > box.clientHeight + 1 && z > 0.7){ z -= 0.05; fit.style.zoom = String(z); }
}
window.addEventListener("resize", ()=>{ if(document.getElementById("sopSlide")) fitSopSlide(); });
document.addEventListener("fullscreenchange", ()=>setTimeout(()=>{ if(document.getElementById("sopSlide")) fitSopSlide(); }, 120));
function sopFullscreen(){
  const el = document.getElementById("sopStage");
  if(!document.fullscreenElement && el && el.requestFullscreen) el.requestFullscreen().catch(()=>toast("Your browser blocked full screen — press F11 instead."));
  else if(document.exitFullscreen) document.exitFullscreen();
}
function setSopMode(m){ state.sopMode = m; state.sopSlide = 0; render(); }
document.addEventListener("keydown", (e)=>{
  if(state.view!=="admin" || (state.adminTab||"audit")!=="sop" || state.sopMode!=="present" || (typeof isTyping==="function" && isTyping()) || document.querySelector(".overlay")) return;
  if(e.key==="ArrowRight" || e.key==="PageDown"){ e.preventDefault(); sopGo(1); }
  else if(e.key==="ArrowLeft" || e.key==="PageUp"){ e.preventDefault(); sopGo(-1); }
});
Object.assign(window, {sopGo, sopFullscreen, setSopMode});
function setSopDay(d){ state.sopDay=d; state.sopSlide=0; render(); }
const __eapaAfterRender = window.afterRender;
window.afterRender = function(){ if(document.getElementById("sopSlide")) fitSopSlide(); return __eapaAfterRender.apply(this, arguments); };

/* if the portal already drew itself before this file loaded, redraw with the updates */
if(document.querySelector(".topbar")) render();
