/* ============================================================
   LSH EA/PA portal — update pack "v" (2026-09-26)
   Loaded by index.html right after the main script. Everything here
   replaces or extends functions in the main script, so the big
   index.html only needs one extra <script> line.
     1. Lesson slides: one standard size, content centred, and slides that
        don't fit continue on balanced extra pages (Next/Prev step pages first).
     2. Admin ↔ Trainee view switch (top bar) without signing out.
     3. SOP Reference: readable layout + a "Present" mode for live discussion.
     4. Presenter view: share only the slides in Meet, see trainer cues yourself.
     5. All lesson content centred; Orientation deck + Blueprint refreshed.
     6. Email Outreach: capstone Day 4 topic + Email Outreach Simulator (Day 4 lab, Part 4).
     7. Inbox Zero works like Gmail (Day 2 lab).
     8. Day 3 "Proactive EA Tasks" is now a written, graded exercise.
     9. Practice Lab pages in the platform page style (hero, activity headings, cards, buttons).
   ============================================================ */
window.EAPA_UPDATE_PACK = "v";
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
/* ---- Presenter view (trainer console) ---- */
.pv{background:linear-gradient(135deg,#1F2440 0%,#2B3158 60%,#353C68 100%);border-radius:20px;padding:16px 18px 18px;color:#fff;}
.pv-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;}
.pv-title{font-size:14px;} .pv-title b{color:#F0C08A;}
.pv-meta{display:flex;gap:10px;align-items:center;margin-left:auto;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#C9CDE3;}
.pv-meta .pv-timer{background:rgba(255,255,255,.1);border-radius:8px;padding:4px 9px;color:#fff;font-weight:700;}
.pv-aud{border-radius:999px;padding:4px 10px;font-weight:700;} .pv-aud.on{background:rgba(88,190,130,.2);color:#8FE0AE;} .pv-aud.off{background:rgba(240,120,90,.2);color:#FFB39E;}
.pv-actions{display:flex;gap:8px;} .pv-actions .btn-ghost{background:#fff;}
.pv-grid{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(300px,1fr);gap:16px;align-items:start;}
.pv-label{font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#F0C08A;margin:0 0 8px;}
.pv-mirror{position:relative;width:100%;aspect-ratio:16/9;background:#141833;border-radius:12px;overflow:hidden;box-shadow:0 0 0 2px rgba(240,192,138,.45);}
.pv-frame{position:absolute;top:0;left:0;width:1280px;height:720px;border:0;transform-origin:0 0;pointer-events:none;background:#1F2440;}
.pv-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;} .pv-nav .btn-ghost{background:#fff;}
.pv-nav select{font:inherit;font-size:13px;border-radius:8px;border:none;padding:7px 8px;max-width:52%;color:var(--navy);}
.pv-next{margin-top:10px;font-size:13px;color:#C9CDE3;} .pv-next b{color:#fff;}
.pv-cues{background:#FFFDF8;color:var(--ink);border-radius:14px;padding:16px 18px;max-height:calc(100vh - 150px);overflow:auto;position:sticky;top:80px;}
.pv-cues .pv-label{color:var(--orange-deep);}
.pv-cues h3{font-family:'Fraunces',Georgia,serif;color:var(--navy);font-size:19px;margin:0 0 10px;line-height:1.25;}
.pv-cues p, .pv-cues li{font-size:14.5px;line-height:1.55;}
.pv-cues .tc-tag, .pv-cues .cue-sub{display:block;margin:12px 0 4px;font-size:12px;font-weight:800;color:var(--navy);}
.pv-cues .pv-empty{color:var(--ink-soft);font-size:14px;}
.pv-ans{background:#EAF6EF;border-left:4px solid #3F7D58;border-radius:8px;padding:8px 12px;margin:6px 0 10px;}
.pv-tip{margin:12px 0 0;font-size:12.5px;color:#C9CDE3;} .pv-tip b{color:#fff;}
@media(max-width:1000px){.pv-grid{grid-template-columns:1fr;} .pv-cues{position:static;max-height:none;}}
/* ---- Audience window (shared in Google Meet) ---- */
body.audience-mode{overflow:hidden;background:#1F2440;}
body.audience-mode > *:not(#audienceRoot):not(.aud-hint){display:none !important;}
#audienceRoot{position:fixed;inset:0;}
#audienceRoot .lesson-stage{height:100vh;border-radius:0;display:flex;flex-direction:column;padding:2.5vh 2.5vw;box-sizing:border-box;}
#audienceRoot .stage-body{flex:1;min-height:0;align-items:stretch;grid-template-rows:minmax(0,1fr);}
#audienceRoot .stage-presenter{align-self:end;}
#audienceRoot #lessonSlideWrap{height:100% !important;font-size:1.08em;}
#audienceRoot .slide-nav .btn, #audienceRoot .slide-done-banner{visibility:hidden;}
#audienceRoot .slide-dot{pointer-events:none;}
.aud-wait{height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#fff;font-size:18px;text-align:center;padding:20px;}
.aud-wait b{font-family:'Fraunces',Georgia,serif;font-size:30px;color:#F0C08A;}
.aud-hint{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:rgba(0,0,0,.72);color:#fff;border-radius:999px;padding:8px 16px;font-size:13px;z-index:5;transition:opacity .6s;}
.aud-hint.gone{opacity:0;pointer-events:none;}

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


/* ---------- 4. Presenter view (like Canva's) ----------
   The trainer clicks "🖥 Presenter view" on a lesson. A second window opens
   showing ONLY the slides — that's the window you share in Google Meet. This
   tab turns into the presenter console: a live mirror of what the room sees
   (a small copy of the slides window, rendered at its exact size), the trainer
   cues / discussion script for the current slide, what's next, a timer and the
   controls. The windows talk over a BroadcastChannel.
     ?audience=1       the slides window you share
     ?audience=mirror  the small live copy inside the presenter console */
const PV_CHANNEL = "lsh-present-v1";
const PV_MODE = new URLSearchParams(location.search).get("audience") || "";
const PV_IS_AUDIENCE = PV_MODE === "1" || PV_MODE === "mirror";
const PV = {ch:null, win:null, size:null, startedAt:0, tick:null};
function pvChannel(){ if(!PV.ch && "BroadcastChannel" in window) PV.ch = new BroadcastChannel(PV_CHANNEL); return PV.ch; }

/* ----- presenter side ----- */
function pvOpenSlidesWindow(){
  PV.win = window.open(`/?audience=1&day=${state.dayId}`, "lshAudience", "popup=yes,width=1280,height=760");
  return !!PV.win;
}
function presenterStart(){
  if(!state.isAdmin){ toast("Presenter view is for trainers — sign in to Admin first."); return; }
  if(!pvChannel()){ toast("This browser can't run Presenter view — use Chrome or Edge."); return; }
  const d = DAYS.find(x=>x.id===state.dayId); if(!d) return;
  if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
  if(!pvOpenSlidesWindow()){ toast("Your browser blocked the slides window — allow pop-ups for this site, then click Presenter view again."); return; }
  state.presenting = true; state.dayViewMode = "slides"; state.maxSlideReached = 9999;
  state.presentPage = 0; state.presentPages = 1; PV.startedAt = Date.now();
  if(typeof Narrator!=="undefined" && Narrator.playing) Narrator.stop(true);
  clearInterval(PV.tick); PV.tick = setInterval(presenterTick, 1000);
  render(); presenterSend();
}
function presenterSend(){ const ch = pvChannel(); if(ch) ch.postMessage({type:"show", dayId:state.dayId, slide:state.lessonSlide||0, page:state.presentPage||0}); }
function presenterStep(dir){
  const d = DAYS.find(x=>x.id===state.dayId); if(!d) return;
  const total = buildDaySlides(d).length, slide = state.lessonSlide||0, page = state.presentPage||0, pages = state.presentPages||1;
  if(dir > 0){
    if(page < pages-1){ state.presentPage = page+1; }
    else if(slide < total-1){ state.lessonSlide = slide+1; state.presentPage = 0; state.presentPages = 1; }
    else return;
  }else{
    if(page > 0){ state.presentPage = page-1; }
    else if(slide > 0){ state.lessonSlide = slide-1; state.presentPage = -1; state.presentPages = 1; }
    else return;
  }
  presenterSend(); presenterRefresh();
}
function presenterJump(i){ state.lessonSlide = +i; state.presentPage = 0; state.presentPages = 1; presenterSend(); presenterRefresh(); }
function presenterReopen(){
  if(!pvOpenSlidesWindow()) toast("Your browser blocked the slides window — allow pop-ups for this site.");
  setTimeout(presenterSend, 600);
}
function presenterEnd(silent){
  state.presenting = false; clearInterval(PV.tick);
  const ch = pvChannel(); if(ch) ch.postMessage({type:"end"});
  try{ if(PV.win && !PV.win.closed) PV.win.close(); }catch(e){}
  PV.win = null;
  if(!silent){ render(); toast("Presentation ended."); }
}
function presenterTick(){
  const t = document.getElementById("pvTimer"); if(t){ const s = Math.floor((Date.now()-PV.startedAt)/1000); t.textContent = `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; }
  const a = document.getElementById("pvAud"); if(a){ const live = !!(PV.win && !PV.win.closed); a.className = "pv-aud " + (live?"on":"off"); a.textContent = live ? "● Slides window open" : "● Slides window closed"; }
}
function presenterCountText(d){
  const total = buildDaySlides(d).length, pages = state.presentPages||1;
  return `Step ${(state.lessonSlide||0)+1} of ${total}` + (pages > 1 ? ` · Page ${Math.max(0,state.presentPage||0)+1} of ${pages}` : "");
}
function presenterCues(d, slide){
  const out = [];
  if(slide.type==="topic"){
    const l = d.lessons[slide.lessonIndex];
    out.push(`<h3>${esc(l.h)} <small style="font-size:12px;color:var(--ink-soft);">Part ${slide.part} of 2</small></h3>`);
    if(l.trainerCue) out.push(`<div class="tc-tag">🧑‍🏫 Trainer Cue</div><p>${esc(l.trainerCue)}</p>`);
    const disc = trainerDiscussionHtml(l); if(disc) out.push(`<b class="cue-sub">Applied Discussion Case</b>${disc}`);
    out.push(renderDiscussionScript(d, l, slide.lessonIndex));
  }else if(slide.type==="quickCheck"){
    out.push(`<h3>Quick Check</h3><p>Let the room answer first — then reveal and use the rationale.</p>`);
    (d.quickChecks||[]).filter(c=>c.afterIndex===slide.lessonIndex).forEach(c=>{
      out.push(`<p><b>${esc(c.q)}</b></p><div class="pv-ans">✓ ${esc((c.opts||[])[c.a] || "")}</div>${c.r ? `<p>${esc(c.r)}</p>` : ""}`);
    });
  }else if(slide.type==="meetClient"){
    out.push(`<h3>Meet Elias Thorne — Live Q&amp;A</h3>` + renderMeetClientTrainerGuide());
  }else if(slide.type==="discussion"){
    out.push(`<h3>Trainer Checkpoint</h3><p><b>Say:</b> "Before we close Day ${d.id}, let's step back and talk about this together."</p><p><b>Ask:</b> ${esc(d.discussionQuestion||"")}</p><p>Take 2–3 answers, connect each one to a lesson from today, then move on to the Knowledge Check.</p>`);
  }else if(slide.type==="practiceLab"){
    out.push(`<h3>Practice Lab</h3><p>Trainees complete the exercise now. Once it's finished, pause for a live debrief — have them walk through what they did, why, and where their judgment differed from the model answer.</p>`);
  }else if(slide.type==="video"){
    out.push(`<h3>Video Recap</h3><p>Play the recap video (or summarise the day's three biggest ideas if it isn't ready yet), then move to the Practice Lab.</p>`);
  }else if(slide.type==="taskOverview"){
    out.push(`<h3>Task Overview</h3><p>Walk the room through today's real-world task before the lessons start — ask who has done something like it before.</p>`);
  }
  return out.join("") || `<p class="pv-empty">No trainer cue for this slide.</p>`;
}
function presenterNextText(d){
  const slides = buildDaySlides(d), idx = state.lessonSlide||0;
  if((state.presentPages||1) > 1 && (state.presentPage||0) < state.presentPages-1) return `${esc(daySlideTitle(d, slides[idx]))} — page ${(state.presentPage||0)+2}`;
  return slides[idx+1] ? esc(daySlideTitle(d, slides[idx+1])) : "End of today's slides — Knowledge Check";
}
function renderPresenterConsole(d){
  const slides = buildDaySlides(d);
  const idx = Math.min(state.lessonSlide||0, slides.length-1); state.lessonSlide = idx;
  if(state.pvScriptsFor !== d.id){ state.pvScriptsFor = d.id; setTimeout(()=>loadSavedScripts(d.id).then(()=>presenterRefresh()), 0); }
  return `
    <div class="pv">
      <div class="pv-head">
        <div class="pv-title"><b>🖥 Presenter view</b> · Day ${d.id} — ${esc(d.title)}</div>
        <div class="pv-meta"><span id="pvCount">${presenterCountText(d)}</span><span class="pv-timer" id="pvTimer">00:00</span><span class="pv-aud on" id="pvAud">● Slides window open</span></div>
        <div class="pv-actions"><button class="btn btn-ghost btn-sm" onclick="presenterReopen()">↗ Re-open slides window</button><button class="btn btn-primary btn-sm" onclick="presenterEnd()">■ End</button></div>
      </div>
      <div class="pv-grid">
        <section>
          <div class="pv-label">Now showing to the room</div>
          <div class="pv-mirror" id="pvMirror"><iframe class="pv-frame" id="pvFrame" src="/?audience=mirror&day=${d.id}" tabindex="-1" inert title="Live copy of the slides window"></iframe></div>
          <div class="pv-nav">
            <button class="btn btn-ghost" onclick="presenterStep(-1)">← Previous</button>
            <select id="pvJump" onchange="presenterJump(this.value)" title="Jump to a slide">${slides.map((s,i)=>`<option value="${i}" ${i===idx?"selected":""}>${i+1}. ${esc(daySlideTitle(d,s))}</option>`).join("")}</select>
            <button class="btn btn-primary" onclick="presenterStep(1)">Next →</button>
          </div>
          <div class="pv-next"><b>Up next:</b> <span id="pvNext">${presenterNextText(d)}</span></div>
          <p class="pv-tip">In Google Meet: <b>Present now → A window</b> → pick <b>“LSH Slides — share this window”</b>. Keep this tab for yourself; use ← → keys here to move the slides.</p>
        </section>
        <aside class="pv-cues"><div class="pv-label">Your notes — only you can see these</div><div id="pvCues">${presenterCues(d, slides[idx])}</div></aside>
      </div>
    </div>`;
}
/* update the console in place (re-rendering would reload the live copy) */
function presenterRefresh(){
  const d = DAYS.find(x=>x.id===state.dayId); if(!d || !state.presenting) return;
  const slides = buildDaySlides(d), idx = state.lessonSlide||0;
  const c = document.getElementById("pvCount"); if(c) c.textContent = presenterCountText(d);
  const n = document.getElementById("pvNext"); if(n) n.innerHTML = presenterNextText(d);
  const j = document.getElementById("pvJump"); if(j) j.value = String(idx);
  const cu = document.getElementById("pvCues"); if(cu && cu.dataset.slide !== String(idx)){ cu.dataset.slide = String(idx); cu.innerHTML = presenterCues(d, slides[idx]); cu.parentElement.scrollTop = 0; }
}
function presenterFitMirror(){
  const box = document.getElementById("pvMirror"), f = document.getElementById("pvFrame"); if(!box || !f) return;
  const w = (PV.size && PV.size.w) || 1280, h = (PV.size && PV.size.h) || 720;
  box.style.aspectRatio = `${w} / ${h}`;
  f.style.width = w+"px"; f.style.height = h+"px";
  f.style.transform = `scale(${box.clientWidth / w})`;
}
Object.assign(window, {presenterStart, presenterStep, presenterJump, presenterReopen, presenterEnd});

/* hook the existing slide controls so arrows / buttons drive the presentation */
const __pvNextSlide = window.nextSlide, __pvPrevSlide = window.prevSlide, __pvGoToSlide = window.goToSlide;
window.nextSlide = function(){ if(state.presenting) return presenterStep(1); return __pvNextSlide(); };
window.prevSlide = function(){ if(state.presenting) return presenterStep(-1); return __pvPrevSlide(); };
window.goToSlide = function(i){ if(state.presenting) return presenterJump(i); return __pvGoToSlide(i); };
const __pvRenderDaySlideshow = window.renderDaySlideshow;
window.renderDaySlideshow = function(d){ if(state.presenting && !state.stageInnerOnly && !PV_IS_AUDIENCE) return renderPresenterConsole(d); return __pvRenderDaySlideshow(d); };
const __pvNarrAfter = window.narratorAfterRender;
window.narratorAfterRender = function(pageOnly){ if(state.presenting && state.view==="day"){ presenterFitMirror(); presenterRefresh(); return; } return __pvNarrAfter(pageOnly); };
const __pvPaginate = window.paginateLessonSlide;
window.paginateLessonSlide = function(){ if(state.presenting && !PV_IS_AUDIENCE) return; return __pvPaginate(); };
const __pvGoto2 = window.goto;
window.goto = function(view, id){ if(state.presenting && (view!=="day" || id!==state.dayId)) presenterEnd(true); return __pvGoto2(view, id); };
const __pvAfterRender2 = window.afterRender;
window.afterRender = function(){
  const r = __pvAfterRender2.apply(this, arguments);
  // the "Presenter view" button sits next to "Present full screen" (trainers only)
  const top = document.querySelector(".ls-top");
  if(top && state.isAdmin && !state.presenting && !top.querySelector(".pv-open")){
    top.insertAdjacentHTML("beforeend", `<button class="btn btn-primary btn-sm pv-open" onclick="presenterStart()" title="Share only the slides in Google Meet while you see the trainer cues here">🖥 Presenter view</button>`);
  }
  return r;
};
window.addEventListener("resize", ()=>{ if(state.presenting) presenterFitMirror(); });
if(pvChannel() && !PV_IS_AUDIENCE){
  PV.ch.addEventListener("message", (e)=>{
    const m = e.data || {}; if(!state.presenting) return;
    if(m.type==="hello") presenterSend();
    if(m.type==="key") presenterStep(m.dir);
    if(m.type==="rendered" && m.dayId===state.dayId && m.slide===(state.lessonSlide||0)){
      state.presentPage = m.page; state.presentPages = m.pages;
      if(!PV.size || PV.size.w!==m.w || PV.size.h!==m.h){ PV.size = {w:m.w, h:m.h}; presenterFitMirror(); }
      presenterRefresh();
    }
  });
  window.addEventListener("beforeunload", ()=>{ if(state.presenting && PV.ch) PV.ch.postMessage({type:"end"}); });
}

/* ----- the slides window (and its live copy) ----- */
if(PV_IS_AUDIENCE){
  const isMain = PV_MODE === "1";
  if(isMain) document.title = "LSH Slides — share this window";
  document.body.classList.add("audience-mode");
  window.render = function(){};                          // the normal portal never draws here
  window.autoPublishBlueprint = async function(){};       // leave background jobs to the trainer's own tab
  const app = document.getElementById("app"); if(app) app.innerHTML = "";
  const root = document.createElement("div"); root.id = "audienceRoot";
  root.innerHTML = `<div class="aud-wait"><b>LSH EA/PA Upskill Program</b>Waiting for the presenter…</div>`;
  document.body.appendChild(root);
  // arrow keys pressed in the slides window (or while the live copy holds focus) drive the presentation
  document.addEventListener("keydown", (e)=>{
    const dir = ["ArrowRight","PageDown"," "].includes(e.key) ? 1 : (["ArrowLeft","PageUp"].includes(e.key) ? -1 : 0);
    if(dir && pvChannel()){ e.preventDefault(); PV.ch.postMessage({type:"key", dir}); }
  });
  if(isMain){
    const hint = document.createElement("div"); hint.className = "aud-hint"; hint.textContent = "Share this window in Google Meet · double-click for full screen";
    document.body.appendChild(hint); setTimeout(()=>hint.classList.add("gone"), 7000);
    document.addEventListener("dblclick", ()=>{ if(document.fullscreenElement) document.exitFullscreen(); else if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(()=>{}); });
  }
  let last = null;
  const show = (m)=>{
    const d = DAYS.find(x=>x.id===m.dayId); if(!d) return;
    last = m;
    // view is "audience", not "day", so the portal's own arrow-key handler stays out of it
    state.view = "audience"; state.dayId = d.id; state.lessonSlide = m.slide; state.maxSlideReached = 9999;
    state.slidePage = m.page; state.slidePageKey = d.id+":"+m.slide; state.slideDir = "next";
    state.stageInnerOnly = true;
    root.innerHTML = `<div class="lesson-stage" id="lessonStage">${renderDaySlideshow(d)}</div>`;
    state.stageInnerOnly = false;
    decorateCallouts(root);
    paginateLessonSlide();
    if(isMain) pvChannel().postMessage({type:"rendered", dayId:d.id, slide:m.slide, page:state.slidePage||0, pages:state.slidePages||1, w:root.clientWidth, h:root.clientHeight});
  };
  if(pvChannel()){
    PV.ch.addEventListener("message", (e)=>{
      const m = e.data || {};
      if(m.type==="show") show(m);
      if(m.type==="end") root.innerHTML = `<div class="aud-wait"><b>Thanks for joining</b>The presentation has ended.</div>`;
    });
    PV.ch.postMessage({type:"hello"});
  }
  let rt = null;
  const reshow = ()=>{ clearTimeout(rt); rt = setTimeout(()=>{ if(last) show(last); }, 200); };
  window.addEventListener("resize", reshow);
  document.addEventListener("fullscreenchange", reshow);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(reshow);
}

/* ---------- 5. Lessons fully centred · Orientation + Blueprint refresh ---------- */
(function(){ const s = document.createElement("style"); s.id = "eapa-update-centre"; s.textContent = `
.lesson-stage #lessonSlideWrap .lesson-card, .lesson-stage #lessonSlideWrap .meet-client-card, .lesson-stage #lessonSlideWrap > .card, .lesson-stage #lessonSlideWrap .qcheck-card, .lesson-stage #lessonSlideWrap .video-placeholder, .lesson-stage #lessonSlideWrap .discussion-card{text-align:center;}
.lesson-stage #lessonSlideWrap .fp-label{justify-content:center;}
.lesson-stage #lessonSlideWrap .fp-label::before{content:"";flex:1;height:1px;background:#EADFD2;}
.lesson-stage #lessonSlideWrap p{margin-left:auto;margin-right:auto;}
.lesson-stage #lessonSlideWrap .fp-body > p, .lesson-stage #lessonSlideWrap .fp-body > div > p{max-width:80ch;}
.lesson-stage #lessonSlideWrap .lesson-card li, .lesson-stage #lessonSlideWrap .meet-client-card li{padding-left:0;text-align:center;}
.lesson-stage #lessonSlideWrap .lesson-card ul > li::before, .lesson-stage #lessonSlideWrap .meet-client-card ul > li::before{position:static;display:inline-block;width:9px;height:9px;margin:0 10px 2px 0;vertical-align:middle;}
.lesson-stage #lessonSlideWrap .meet-client-card ul{list-style:none;padding:0;}
.lesson-stage #lessonSlideWrap ol.fp-howto-list > li, .lesson-stage #lessonSlideWrap .fp-section ol > li{text-align:center;padding-top:20px;}
.lesson-stage #lessonSlideWrap ol.fp-howto-list > li::before, .lesson-stage #lessonSlideWrap .fp-section ol > li::before{left:50%;transform:translateX(-50%);}
.lesson-stage #lessonSlideWrap .vis-card{text-align:center;} .lesson-stage #lessonSlideWrap .vis-card-top{justify-content:center;gap:10px;}
.lesson-stage #lessonSlideWrap .callout, .lesson-stage #lessonSlideWrap [class*="callout"]{text-align:center;}
.lesson-stage #lessonSlideWrap table{margin-left:auto;margin-right:auto;text-align:left;}
.lesson-stage #lessonSlideWrap .quiz-opt{text-align:center;justify-content:center;align-items:center;}
.lesson-stage #lessonSlideWrap .qcheck-card .qc-tag{justify-content:center;}
.lesson-stage #lessonSlideWrap .lx-panel, .lesson-stage #lessonSlideWrap details{text-align:center;}
.build-tag .eapa-ok{color:#3F7D58;font-weight:700;}
`; document.head.appendChild(s); })();

/* Orientation deck (and the Blueprint PDF, which is built from it and republishes
   itself when the build changes): explain split pages and live sessions. */
const __eapaOrientSlides = window.orientSlides;
window.orientSlides = function(){
  const slides = __eapaOrientSlides();
  const i = slides.findIndex(x=>x.k==="A day");
  if(i >= 0){
    slides[i] = Object.assign({}, slides[i], {body: slides[i].body.replace("One topic at a time. Next / Previous at the bottom; your place is saved.", "One topic at a time, every slide the same size. Longer topics continue on a second page — watch for the PAGE 1 / 2 badge. Your place is saved.")});
    const pill = (ic,t,d)=>`<div class="or-pill"><div>${ic}</div><b>${t}</b><span>${d}</span></div>`;
    slides.splice(i+1, 0, {k:"Live sessions", h:"Live sessions with your trainer", body:`
     <div class="or-3">${pill("🖥","Follow the shared slides","Your trainer presents the day's slides in Google Meet. They're the same slides you have in the portal — nothing extra to install.")}${pill("💬","Talk it through","At each checkpoint your trainer pauses for discussion. Answer out loud — a first answer is never wrong, it's where the learning starts.")}${pill("📄","Pages & pace","Longer topics have a second page (PAGE 1 / 2). On your own, use Next or the ← → keys, 🔊 Listen, or ⛶ Full screen.")}</div>
     <div class="or-note"><b>Missed something live?</b> Every slide stays in your portal — reopen the day any time and pick up exactly where you left off.</div>`});
  }
  return slides;
};

/* footer: shows at a glance that this update pack is running */
const __eapaAfterRender3 = window.afterRender;
window.afterRender = function(){
  const r = __eapaAfterRender3.apply(this, arguments);
  const tag = document.querySelector(".build-tag");
  if(tag && !tag.querySelector(".eapa-ok")) tag.insertAdjacentHTML("beforeend", ` · <span class="eapa-ok">updates ✓</span>`);
  return r;
};

/* ---------- 6. Email Outreach: capstone topic (Day 4) + Email Outreach Simulator ----------
   Topic: appended as the LAST Day 4 topic so trainees' saved places don't shift.
   Simulator: Part 4 of the Day 4 Practice Lab. The trainee picks a prospect,
   writes a real 3-touch sequence (first email → follow-up → close-out), and an
   AI plays the prospect — ignoring, replying, objecting, opting out or booking
   the call depending on how good each email is. Then a debrief and a graded
   evaluation (same rubric system and attempt rules as every other lab). */
const EO_TOPIC_TITLE = "Email Outreach End-to-End: Research, Write, Follow Up";
(function addEmailOutreachTopic(){
  const d = DAYS.find(x=>x.id===4); if(!d || d.lessons.some(l=>l.h===EO_TOPIC_TITLE)) return;
  d.lessons.push({
    h: EO_TOPIC_TITLE,
    trainerCue: "Before the Practice Lab, read one weak and one strong outreach email aloud and have the room vote on which they'd actually open on their phone — then ask what exactly made the difference.",
    fourPart: {
      corePrinciples: [
        "An outreach email is judged in about three seconds on a phone screen — the subject line and first sentence decide whether the rest gets read.",
        "Relevance beats polish: one specific, verified fact about the recipient's situation does more than any clever phrasing.",
        "Every email has exactly one job — usually a small, easy yes (a 15-minute call with Elias), never a hard sell.",
        "Most replies come from the follow-ups, not the first touch — so the sequence is planned before the first email goes out."
      ],
      howTo: [
        "Research first: confirm the person's current role and find one recent, specific trigger (an expansion, funding, a new hire, public news). Log the source in the CRM.",
        "Write a subject line of 3–7 specific words — no clickbait, no ALL CAPS (e.g. \"Contracts for your Denver expansion\").",
        "Write the body in 50–125 words: open with their situation, one line on how Elias can help, then one clear, low-friction ask.",
        "Sign off on Elias's behalf and include a simple opt-out line — compliance is part of the craft, not an afterthought.",
        "Plan the cadence: a follow-up around day 3–4 with a new angle or useful resource, and a short, courteous close-out around day 8–10.",
        "Stop the moment they reply or opt out. Log the outcome and route any interest to Elias with a one-line summary."
      ],
      bestPractices: [
        "Write about the recipient's priorities, not the firm's — \"you\" should appear more often than \"we\".",
        "Each follow-up adds something new — an insight, a relevant article, a narrower question — never just \"bumping this to the top of your inbox\".",
        "Read it on a phone before sending: if the ask isn't visible without scrolling, it's too long.",
        "Pitfall: the same template to everyone with only the name swapped — recipients can tell, and it trains them to ignore the firm.",
        "Pitfall: guilt-trip or pressure follow-ups (\"I'm surprised I haven't heard back\") — they burn the relationship for any future opportunity.",
        "Pitfall: promising outcomes or giving legal advice in outreach — only the attorney speaks to a matter; the assistant's job is to open the door."
      ],
      discussionCase: "Elias wants you to email the operations director of a regional construction company that just announced a two-state expansion. Your first email got no reply after four days. Walk through what your follow-up says, what new angle it uses, and when you'd stop."
    }
  });
  LESSON_EXTRA_LEARNING["4::"+EO_TOPIC_TITLE] = {t:"The 3-touch cadence", p:[
    "Touch 1 (day 1): the specific trigger + one line of value + one small ask.",
    "Touch 2 (day 3–4): a new angle — a relevant resource, a sharper question, or a different benefit. Same small ask.",
    "Touch 3 (day 8–10): a short, courteous close-out that makes it easy to say \"not now\" — it often gets the most replies.",
    "Then stop. Log the outcome and set a reminder only if they asked you to follow up later."
  ]};
  d.quickChecks = d.quickChecks || [];
  d.quickChecks.push({afterIndex: d.lessons.length-1,
    q: "Your first outreach email got no reply after four days. What's the strongest follow-up?",
    opts: ["\"Just bumping this to the top of your inbox.\"", "A short note with a new, relevant angle and the same small ask", "A longer email re-explaining every service the firm offers", "Wait a month, then resend the original email"],
    a: 1,
    r: "A follow-up should add something new and keep the ask small. A bare \"bump\" adds nothing, a longer pitch adds friction, and waiting a month loses the trigger that made the timing relevant."});
})();


(function(){ const s = document.createElement("style"); s.id = "eapa-email-outreach"; s.textContent = `
.eo-pick{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;}
.eo-pcard{padding:18px;display:flex;flex-direction:column;gap:6px;border-top:4px solid var(--navy);}
.eo-pcard:nth-child(2){border-top-color:var(--orange);}
.eo-pcard b{font-size:16px;color:var(--navy);} .eo-pcard > span{font-size:13px;color:var(--ink-soft);}
.eo-pcard ul{margin:6px 0 10px;padding-left:18px;font-size:13px;line-height:1.5;flex:1;} .eo-pcard .btn{align-self:flex-start;}
.eo-av{width:44px;height:44px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;}
.eo-grid{display:grid;grid-template-columns:minmax(230px,300px) minmax(0,1fr);gap:16px;align-items:start;}
.eo-brief{padding:16px 18px;font-size:13px;line-height:1.5;position:sticky;top:80px;}
.eo-brief ul{margin:0 0 6px;padding-left:18px;} .eo-brief p{margin:0 0 6px;}
.eo-k{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--orange-deep);margin:12px 0 4px;}
.eo-brief .eo-k:first-child{margin-top:0;}
.eo-name{font-size:16px;color:var(--navy);display:block;} .eo-sub{color:var(--ink-soft);}
.eo-cad{margin:0 0 12px;padding-left:20px;} .eo-cad li{color:var(--ink-soft);} .eo-cad li.done{color:#3F7D58;text-decoration:line-through;} .eo-cad li.now{color:var(--navy);font-weight:800;}
.eo-thread{display:flex;flex-direction:column;gap:10px;margin-bottom:12px;}
.eo-empty{border:1px dashed var(--line);border-radius:12px;padding:18px;text-align:center;color:var(--ink-soft);font-size:13px;}
.eo-msg{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;max-width:92%;}
.eo-msg.mine{align-self:flex-end;border-left:4px solid var(--navy);} .eo-msg.theirs{align-self:flex-start;border-left:4px solid var(--orange);background:#FFFBF5;}
.eo-mh{display:flex;justify-content:space-between;gap:10px;font-size:12px;color:var(--ink-soft);margin-bottom:4px;} .eo-mh b{color:var(--navy);}
.eo-subj{font-weight:800;font-size:13.5px;margin-bottom:4px;} .eo-body{font-size:13.5px;line-height:1.55;white-space:normal;}
.eo-sys{align-self:center;font-size:12.5px;color:var(--ink-soft);background:#F3F4F9;border-radius:999px;padding:5px 12px;}
.eo-compose{padding:14px 16px;display:flex;flex-direction:column;gap:8px;}
.eo-ch{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:12.5px;color:var(--ink-soft);} .eo-ch b{color:var(--navy);font-size:14px;}
.eo-compose input, .eo-compose textarea{width:100%;box-sizing:border-box;font:inherit;font-size:13.5px;border:1px solid var(--line);border-radius:8px;padding:9px 11px;}
.eo-compose textarea{min-height:170px;resize:vertical;line-height:1.5;}
.eo-checks{display:flex;flex-wrap:wrap;gap:6px;} .eo-checks span{font-size:12px;border-radius:999px;padding:3px 10px;background:#F3F4F9;color:var(--ink-soft);} .eo-checks span.ok{background:#EAF6EF;color:#2F6B47;font-weight:700;}
.eo-actions{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-top:4px;}
.eo-debrief{padding:16px 18px;}
.eo-out{display:flex;gap:12px;align-items:center;} .eo-out > span{font-size:30px;} .eo-out b{font-size:16px;color:var(--navy);} .eo-out p{margin:2px 0 0;font-size:13px;color:var(--ink-soft);}
.eo-thoughts{margin:0 0 12px;padding-left:20px;} .eo-thoughts li{margin-bottom:8px;font-size:13px;line-height:1.5;} .eo-thoughts b{display:block;color:var(--navy);} .eo-thoughts span{font-style:italic;color:#37394A;}
@media(max-width:860px){.eo-grid{grid-template-columns:1fr;} .eo-brief{position:static;} .eo-msg{max-width:100%;}}
`; document.head.appendChild(s); })();

const EO_PROSPECTS = [
  {id:"dana", name:"Dana Whitfield", first:"Dana", role:"Director of Operations", company:"Ridgeline Builders",
   facts:["Regional commercial construction company, ~180 employees","Announced last week: expanding into Colorado and Arizona next quarter","Currently uses one outside law firm, mainly for lien disputes"],
   need:"New-state subcontractor agreements and licensing for the expansion",
   persona:"Practical and very busy — reads email on her phone between site visits. Ignores anything that looks like a template or runs past one screen. Replies to short, specific notes that clearly understand the expansion. Dislikes vague 'synergy' language. If interested she asks one practical question before agreeing to a call."},
  {id:"marcus", name:"Marcus Lee", first:"Marcus", role:"Founder & CEO", company:"Brightpath Health Tech",
   facts:["Health-tech startup, 40 employees, closed a $12M Series A two weeks ago","Hiring fast: 15 open roles on their careers page","No in-house counsel yet"],
   need:"Employment agreements, equity paperwork and vendor contracts as they scale",
   persona:"Gets 50+ cold emails a day and deletes most unread. Responds only to emails that are under ~100 words, mention something real about his company, and ask for something small. Allergic to flattery and long firm bios. If intrigued he replies in one line; might ask 'what would this cost?'."},
  {id:"priya", name:"Priya Raman", first:"Priya", role:"General Counsel", company:"Lakeshore Regional Health",
   facts:["Regional hospital group, 3 hospitals and 12 clinics","Posted publicly about a backlog of vendor-contract reviews","Legal team of 2 attorneys — stretched thin"],
   need:"Overflow review of routine vendor and service contracts",
   persona:"A lawyer herself — skeptical of cold outreach and alert to compliance. Notices if there's no opt-out line and if the email over-promises or gives anything resembling legal advice. Respects precision, relevance and brevity. May reply with a sharp question (conflicts, rates, turnaround) before agreeing to anything."}
];
const EO_TOUCHES = [{day:1, label:"First email"}, {day:4, label:"Follow-up — new angle"}, {day:9, label:"Close-out"}];
const EO_MAX_SENDS = 5;

function eoState(){ return toolState.eo || (toolState.eo = {prospectId:null, thread:[], done:false, outcome:"", report:null}); }
function eoSave(){ storeSet("email-outreach-sim", toolState.eo||null); }
function eoProspect(){ return EO_PROSPECTS.find(p=>p.id===eoState().prospectId); }
function eoMine(){ return eoState().thread.filter(m=>m.from==="you"); }
function eoNextSend(){
  const s = eoState(), mine = eoMine(), last = s.thread[s.thread.length-1];
  const lastDay = last ? last.day : 0;
  if(last && last.from==="prospect") return {kind:"reply", day:lastDay+1, label:`Reply to ${eoProspect().first}`};
  const touchNo = mine.filter(m=>m.kind==="touch").length;
  const t = EO_TOUCHES[touchNo];
  return t ? {kind:"touch", day:Math.max(t.day, lastDay+1), label:t.label, n:touchNo+1} : null;
}
function eoWords(t){ return (String(t||"").trim().match(/\S+/g)||[]).length; }

function renderEmailOutreachSection(){
  return `<h3 style="margin:0 0 6px;color:var(--navy);font-size:15px;">D. Email Outreach Simulator</h3>
    <p style="font-size:12.8px;color:var(--ink-soft);margin:0 0 12px;">Write a real outreach sequence on Elias Thorne's behalf. The prospect reacts the way a busy professional really would — most weak emails simply get no reply.</p>
    <div id="eoSim">${eoView()}</div>`;
}
function eoRender(){ const el = document.getElementById("eoSim"); if(el) el.innerHTML = eoView(); }
function eoView(){
  const s = eoState();
  if(!s.prospectId){
    return `<div class="eo-pick">${EO_PROSPECTS.map(p=>`
      <div class="card eo-pcard">
        <div class="eo-av">${esc(p.name.split(" ").map(x=>x[0]).join(""))}</div>
        <b>${esc(p.name)}</b><span>${esc(p.role)} · ${esc(p.company)}</span>
        <ul>${p.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
        <button class="btn btn-navy btn-sm" onclick="eoChoose('${p.id}')">Write to ${esc(p.first)} →</button>
      </div>`).join("")}</div>`;
  }
  const p = eoProspect(), next = s.done ? null : eoNextSend();
  const sentTouches = eoMine().filter(m=>m.kind==="touch").length;
  return `<div class="eo-grid">
    <aside class="card eo-brief">
      <div class="eo-k">Prospect brief</div>
      <b class="eo-name">${esc(p.name)}</b><div class="eo-sub">${esc(p.role)} · ${esc(p.company)}</div>
      <div class="eo-k">Your research</div><ul>${p.facts.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
      <div class="eo-k">Likely need</div><p>${esc(p.need)}</p>
      <div class="eo-k">Your goal</div><p>A 15-minute intro call with <b>Elias Thorne</b>, Managing Owner &amp; CEO of Thorne &amp; Partners Law Group.</p>
      <div class="eo-k">Cadence</div>
      <ol class="eo-cad">${EO_TOUCHES.map((t,i)=>`<li class="${i<sentTouches?"done":(next && next.kind==="touch" && next.n===i+1?"now":"")}">Day ${t.day} · ${t.label}</li>`).join("")}</ol>
      <button class="btn btn-ghost btn-sm" onclick="eoReset()">↺ Start over / another prospect</button>
    </aside>
    <section class="eo-main">
      <div class="eo-thread">${s.thread.length ? s.thread.map(eoMsgHtml).join("") : `<div class="eo-empty">Your sent emails and ${esc(p.first)}'s replies will appear here.</div>`}</div>
      ${s.done ? eoDebriefHtml() : (next ? eoComposerHtml(next) : "")}
    </section>
  </div>`;
}
function eoMsgHtml(m){
  const p = eoProspect();
  if(m.from==="system") return `<div class="eo-sys">📭 ${esc(m.body)}</div>`;
  const mine = m.from==="you";
  return `<div class="eo-msg ${mine?"mine":"theirs"}">
    <div class="eo-mh"><b>${mine ? "You (for Elias Thorne)" : esc(p.name)}</b><span>Day ${m.day}${mine && m.kind==="touch" ? " · "+esc(m.label) : ""}</span></div>
    ${m.subject ? `<div class="eo-subj">${esc(m.subject)}</div>` : ""}
    <div class="eo-body">${esc(m.body).replace(/\n/g,"<br>")}</div>
  </div>`;
}
function eoComposerHtml(next){
  const s = eoState(), p = eoProspect();
  const first = eoMine()[0];
  const subj = s.draftSubject != null ? s.draftSubject : (first ? (/^re:/i.test(first.subject) ? first.subject : "Re: "+first.subject) : "");
  return `<div class="card eo-compose">
    <div class="eo-ch"><b>✉ ${esc(next.label)}</b><span>Day ${next.day} · to ${esc(p.name)} &lt;${esc(p.first.toLowerCase())}@${esc(p.company.toLowerCase().replace(/[^a-z]/g,""))}.com&gt;</span></div>
    <input id="eoSubject" placeholder="Subject line (3–7 specific words)" value="${esc(subj)}" oninput="eoDraft()">
    <textarea id="eoBody" placeholder="Hi ${esc(p.first)}, …" oninput="eoDraft()">${esc(s.draftBody||"")}</textarea>
    <div class="eo-checks" id="eoChecks">${eoChecksHtml(subj, s.draftBody||"", next)}</div>
    <div class="eo-actions">
      ${eoMine().length ? `<button class="btn btn-ghost btn-sm" onclick="eoFinish()">End sequence &amp; get feedback</button>` : "<span></span>"}
      <button class="btn btn-primary" id="eoSendBtn" onclick="eoSend()">Send ✉</button>
    </div>
    <div id="eoErr"></div>
  </div>`;
}
function eoChecksHtml(subject, body, next){
  const p = eoProspect(), w = eoWords(body), sw = eoWords(String(subject).replace(/^re:\s*/i,""));
  const hay = (subject+" "+body).toLowerCase();
  const personal = [p.company, ...p.facts.join(" ").match(/\b(Colorado|Arizona|expansion|Series A|\$12M|hiring|roles|backlog|vendor|clinics|hospitals|lien)\b/gi)||[]].some(k=>hay.includes(String(k).toLowerCase()));
  const ask = /\?|call|chat|15|minutes|time (this|next)|calendar|worth a/i.test(body);
  const optout = /unsubscribe|opt[- ]?out|not the right (person|time)|prefer not|won't (email|follow up)|stop (emailing|hearing)|no longer|let me know if (this|you'd)/i.test(body);
  const chip = (ok, t)=>`<span class="${ok?"ok":""}">${ok?"✓":"○"} ${t}</span>`;
  const range = next && next.kind==="touch" && next.n===3 ? [25,90] : [50,125];
  return chip(w>=range[0] && w<=range[1], `${w} words (aim ${range[0]}–${range[1]})`)
    + (next && next.kind==="reply" ? "" : chip(sw>=3 && sw<=7, "Subject 3–7 words"))
    + chip(personal, "Specific to them")
    + chip(ask, "One clear ask")
    + (next && next.kind==="reply" ? "" : chip(optout, "Opt-out line"));
}
function eoDraft(){
  const s = eoState();
  s.draftSubject = (document.getElementById("eoSubject")||{}).value || "";
  s.draftBody = (document.getElementById("eoBody")||{}).value || "";
  const c = document.getElementById("eoChecks"); if(c) c.innerHTML = eoChecksHtml(s.draftSubject, s.draftBody, eoNextSend());
  clearTimeout(eoDraft.t); eoDraft.t = setTimeout(eoSave, 600);
}
function eoChoose(id){ toolState.eo = {prospectId:id, thread:[], done:false, outcome:"", report:null}; eoSave(); eoRender(); }
function eoReset(){
  if(eoState().thread.length && !confirm("Start over? Your current email thread will be cleared.")) return;
  toolState.eo = {prospectId:null, thread:[], done:false, outcome:"", report:null}; eoSave(); eoRender();
}
async function eoSend(){
  const s = eoState(), p = eoProspect(), next = eoNextSend(); if(!next) return;
  const subject = (document.getElementById("eoSubject").value||"").trim(), body = (document.getElementById("eoBody").value||"").trim();
  if(eoWords(body) < 12){ toast("Write the email first — at least a couple of sentences."); return; }
  if(next.kind==="touch" && !subject){ toast("Add a subject line."); return; }
  const btn = document.getElementById("eoSendBtn"); if(btn){ btn.disabled = true; btn.textContent = "Sending…"; }
  const msg = {from:"you", kind:next.kind, label:next.label, day:next.day, subject: next.kind==="touch" ? subject : "", body};
  const threadText = s.thread.concat([msg]).map(m=> m.from==="system" ? `[${m.body}]` : `--- Day ${m.day} · ${m.from==="you" ? "FROM the assistant (for Elias Thorne)" : "FROM "+p.name} ---\n${m.subject ? "Subject: "+m.subject+"\n" : ""}${m.body}`).join("\n\n");
  const prompt = `You are role-playing a real prospect who receives cold outreach email, inside a training simulation for executive assistants at a law firm. Stay fully in character.

PROSPECT: ${p.name}, ${p.role} at ${p.company}.
Facts about you: ${p.facts.join("; ")}.
What you might genuinely need: ${p.need}.
Personality and inbox reality: ${p.persona}

The sender is an assistant writing on behalf of Elias Thorne, Managing Owner & CEO of Thorne & Partners Law Group. Their goal is a 15-minute intro call with Elias.

THE EMAIL THREAD SO FAR (the LAST message is the one you are reacting to now):
${threadText}

Decide realistically what you do with the LAST email. Real cold-email reply rates are low:
- Generic, long, vague, self-focused, flattering or pushy emails get NO reply.
- A short, specific, relevant email with one small, clear ask MAY get a reply: interest, a practical question, an objection, or "not right now".
- A follow-up that only "bumps" the thread gets no reply; one that adds a genuinely new, relevant angle may.
- A short, courteous close-out email often prompts a brief reply (even "not now, thanks").
- If you already replied and the sender answered you well and proposed a concrete time, you may agree to the call ("booked").
- If the email gives legal advice, promises outcomes, guilt-trips you or is careless (wrong facts, wrong name), become less likely to reply or opt out.
Never be cartoonishly easy: a merely decent email should often still get no reply.

Return ONLY JSON:
{"action":"no_reply" | "reply" | "booked" | "unsubscribe",
 "reply":"your reply email text when action is reply, booked or unsubscribe (1-4 short sentences, in character, sign with your first name); empty string for no_reply",
 "thought":"1-2 sentences, first person, about how this specific email landed with you and why — honest and concrete (shown to the trainee afterwards)"}`;
  try{
    const r = await callAIJson(prompt, 500);
    const action = ["no_reply","reply","booked","unsubscribe"].includes(r.action) ? r.action : "no_reply";
    msg.thought = String(r.thought||"").slice(0,400);
    s.thread.push(msg); s.draftSubject = null; s.draftBody = "";
    if(action==="no_reply"){
      const nx = eoNextSend();
      s.thread.push({from:"system", day:msg.day, body: nx ? `No reply from ${p.first} by Day ${nx.day}.` : `No reply from ${p.first}. The sequence is complete.`});
      if(!nx) { s.done = true; s.outcome = "no_reply"; }
    }else{
      s.thread.push({from:"prospect", day:msg.day + (action==="booked" ? 0 : 1), body:String(r.reply||"").trim() || "Thanks — not right now."});
      if(action==="booked"){ s.done = true; s.outcome = "booked"; }
      if(action==="unsubscribe"){ s.done = true; s.outcome = "unsubscribe"; }
    }
    if(!s.done && eoMine().length >= EO_MAX_SENDS){ s.done = true; s.outcome = s.outcome || "ended"; }
    eoSave(); eoRender();
    if(s.outcome==="booked") burstConfetti();
  }catch(e){
    if(btn){ btn.disabled = false; btn.textContent = "Send ✉"; }
    const el = document.getElementById("eoErr"); if(el) el.innerHTML = renderAiErrorBlock(e, "The prospect couldn't be reached");
  }
}
function eoFinish(){ const s = eoState(); if(!eoMine().length) return; s.done = true; s.outcome = s.outcome || "ended"; eoSave(); eoRender(); }
function eoDebriefHtml(){
  const s = eoState(), p = eoProspect();
  const banner = {booked:["🎉","Call booked","Elias has a 15-minute intro call on the calendar."], unsubscribe:["🚫","Opted out",`${p.first} asked not to be contacted — log it and stop.`], no_reply:["📭","No reply",`${p.first} never replied. That's common — the feedback shows what might change it.`], ended:["✋","Sequence ended","You ended the sequence."]}[s.outcome||"ended"];
  return `<div class="card eo-debrief">
    <div class="eo-out"><span>${banner[0]}</span><div><b>${banner[1]}</b><p>${esc(banner[2])}</p></div></div>
    <div class="eo-k">How each email landed — in ${esc(p.first)}'s words</div>
    <ol class="eo-thoughts">${eoMine().map(m=>`<li><b>${esc(m.kind==="touch" ? m.label : "Your reply")} (Day ${m.day})</b><span>“${esc(m.thought||"—")}”</span></li>`).join("")}</ol>
    <div class="eo-actions"><button class="btn btn-ghost btn-sm" onclick="eoReset()">↺ Try again / another prospect</button>
      <button class="btn btn-navy" onclick="eoEvaluate()">Get Evaluation</button></div>
    <div id="eoResult">${s.reportHtml || ""}</div>
  </div>`;
}
async function eoEvaluate(){
  const s = eoState(), p = eoProspect(), el = document.getElementById("eoResult");
  if(!(await useLabAttempt(4, "emailOutreachSim"))) return;
  el.innerHTML = `<div class="ai-loading">Evaluating your outreach sequence…</div>`;
  const thread = s.thread.map(m=> m.from==="system" ? `[${m.body}]` : `--- Day ${m.day} · ${m.from==="you" ? "TRAINEE" : "PROSPECT ("+p.name+")"}${m.label && m.from==="you" ? " · "+m.label : ""} ---\n${m.subject ? "Subject: "+m.subject+"\n" : ""}${m.body}`).join("\n\n");
  try{
    const report = await runRubricEvaluation(
      "Email Outreach Sequence",
      `PROSPECT BRIEF: ${p.name}, ${p.role} at ${p.company}. Research: ${p.facts.join("; ")}. Likely need: ${p.need}. GOAL: a 15-minute intro call with Elias Thorne (Managing Owner & CEO, Thorne & Partners Law Group). Planned cadence: first email day 1, follow-up with a new angle day 3–4, courteous close-out day 8–10. OUTCOME: ${s.outcome}.`,
      thread,
      `Score the whole sequence, not one email. (1) Research & relevance: does the first email use a specific, accurate fact from the brief and connect it to a real need? (2) Brevity & structure: roughly 50–125 words per email, a specific 3–7 word subject line, the ask visible early. (3) One clear, low-friction ask (a 15-minute call with Elias, ideally with a concrete time option). (4) Follow-ups: each adds a genuinely new angle or value instead of "just bumping"; sensible spacing; a courteous, final close-out. (5) Tone: confident and warm, never pushy, flattering or guilt-tripping; writes appropriately on Elias's behalf; no legal advice or promised outcomes. (6) Compliance: a simple opt-out line in the outreach emails; stops after an opt-out. (7) Handling replies: if the prospect replied, did the trainee answer the actual question or objection and move toward a booked call? Do not reward or penalise the outcome itself — judge the quality of what the trainee wrote.`
    );
    s.reportHtml = `<b style="font-size:13px;color:var(--navy);display:block;margin:12px 0 8px;">Evaluation Report — Your Outreach Sequence</b>` + renderEvaluationReport(report, 4);
    el.innerHTML = s.reportHtml; eoSave();
    await bumpPracticeProgress("coldcalling4", report.totalScore);
    if(report.totalScore>=85) burstConfetti();
  }catch(e){
    el.innerHTML = renderAiErrorBlock(e, "Couldn't get feedback");
  }
}
Object.assign(window, {eoChoose, eoReset, eoSend, eoDraft, eoFinish, eoEvaluate});

/* Day 4 Practice Lab: add the simulator as Part 4 */
window.initColdCalling4 = function(body){
  toolState.calls = {};
  toolState.wizardIndex = 0;
  toolState.intakeCall = toolState.intakeCall || {step:"pick", personaId:null, chatHistory:[], startedAt:null};
  const partA = renderColdCallingSection('A');
  const partB = `
    <h3 style="margin:0 0 10px;color:var(--navy);font-size:15px;">B. Lead Generation Practice</h3>
    <div class="card" style="padding:16px 18px;margin-bottom:12px;background:#F8F9FC;">
      <p style="font-size:13px;color:#37394A;margin:0;">${esc(LEAD_GEN_SCENARIO.text)}</p>
    </div>
    <p style="font-size:12.8px;color:var(--ink-soft);margin:0 0 10px;">Write your plan: at least 3 specific lead sources you'd actually use, your qualifying criteria (what makes a lead worth pursuing), and your first-contact approach.</p>
    <textarea id="leadGenDraft" style="width:100%;min-height:160px;padding:10px 12px;border-radius:8px;border:1px solid var(--line);font-size:13px;font-family:inherit;resize:vertical;" placeholder="Lead sources...&#10;&#10;Qualifying criteria...&#10;&#10;First-contact approach..."></textarea>
    <button class="btn btn-navy btn-sm" style="margin-top:10px;" onclick="reviewLeadGenPlan()">Get Review</button>
    <div id="leadGenResult" style="margin-top:14px;"></div>
  `;
  const partC = renderIntakeCallSection();
  const partD = renderEmailOutreachSection();
  body.innerHTML = renderToolWizard(4, [
    {label:"Cold-Calling Log", html:partA},
    {label:"Lead Generation Practice", html:partB},
    {label:"Live Intake Call Simulator", html:partC},
    {label:"Email Outreach Simulator", html:partD}
  ]);
  loadCallLog();
  // the portal rebuilds the lab on every redraw — bring the saved email thread back
  if(!(toolState.eo && toolState.eo.prospectId)) storeGet("email-outreach-sim").then(v=>{ if(v && v.prospectId && !(toolState.eo && toolState.eo.prospectId)){ toolState.eo = v; eoRender(); } });
};
(function(){
  const t = PRACTICE_TOOLS.find(x=>x.id==="coldcalling4");
  if(t){ t.title = "Cold-Calling, Lead Generation & Email Outreach"; t.desc = "Log a full round of cold-calling outreach, draft a real lead-generation plan, handle a live intake call, then run an email outreach sequence against a prospect who replies — or doesn't — the way a busy professional really would."; }
})();

/* ---------- 7. Inbox Zero, Gmail-style (Day 2 lab) ----------
   The drag-into-quadrants board is replaced by an inbox that behaves like
   Gmail: list rows with hover actions, bold unread mail, an open-email reading
   view, toolbar, snooze menu, forward window, Undo snackbar, Gmail keyboard
   shortcuts and the "You're all done" empty inbox. Every email leaves the
   Inbox through one real Gmail action, which is the triage decision:
     Reply / ⭐ Star = Do (urgent & important)      🕒 Snooze = Schedule
     ↪ Forward to a delegate = Delegate            Archive / 🗑 Delete = Delete/Defer
   Grading is the same expert comparison as before. */
(function(){ const s = document.createElement("style"); s.id = "eapa-gmail"; s.textContent = `
.gm{border:1px solid #dadce0;border-radius:14px;background:#f6f8fc;overflow:hidden;font-family:Roboto,'Segoe UI',Arial,sans-serif;color:#202124;position:relative;outline:none;}
.gm:focus-visible{box-shadow:0 0 0 2px #0b57d0;}
.gm svg{width:20px;height:20px;fill:currentColor;flex-shrink:0;}
.gm-top{display:flex;align-items:center;gap:14px;padding:8px 14px;}
.gm-logo{display:flex;align-items:center;gap:6px;font-size:20px;color:#444746;min-width:170px;} .gm-logo b{display:inline-flex;width:28px;height:22px;border-radius:4px;background:linear-gradient(135deg,#ea4335 0 25%,#fbbc04 25% 50%,#34a853 50% 75%,#4285f4 75%);color:#fff;font-size:13px;align-items:center;justify-content:center;}
.gm-search{flex:1;max-width:720px;display:flex;align-items:center;gap:10px;background:#e9eef6;border-radius:24px;padding:10px 16px;color:#444746;}
.gm-search input{border:none;background:transparent;outline:none;font:inherit;font-size:15px;flex:1;color:#202124;}
.gm-avatar{margin-left:auto;width:32px;height:32px;border-radius:50%;background:#1F2440;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;}
.gm-body{display:grid;grid-template-columns:220px minmax(0,1fr);min-height:560px;}
.gm-nav{padding:4px 10px 12px 8px;}
.gm-compose{display:inline-flex;align-items:center;gap:10px;background:#c2e7ff;border:none;border-radius:16px;padding:16px 22px;font:inherit;font-weight:600;font-size:14px;color:#001d35;margin:4px 0 14px;cursor:not-allowed;opacity:.85;}
.gm-folder{display:flex;align-items:center;gap:14px;width:100%;border:none;background:none;font:inherit;font-size:14px;color:#202124;padding:0 12px 0 16px;height:32px;border-radius:0 16px 16px 0;cursor:pointer;text-align:left;}
.gm-folder:hover{background:#e9eaed;} .gm-folder.on{background:#d3e3fd;font-weight:700;color:#001d35;}
.gm-folder span{flex:1;} .gm-folder em{font-style:normal;font-size:12px;font-weight:700;}
.gm-folder small{display:block;font-size:10.5px;color:#5f6368;font-weight:400;margin-top:-3px;}
.gm-folder.two{height:40px;}
.gm-main{background:#fff;border-radius:16px;margin:0 12px 12px 0;display:flex;flex-direction:column;min-width:0;}
.gm-bar{display:flex;align-items:center;gap:4px;padding:6px 10px;border-bottom:1px solid #f1f3f4;min-height:44px;}
.gm-ib{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:none;background:none;color:#444746;cursor:pointer;position:relative;}
.gm-ib:hover{background:#f1f3f4;} .gm-ib[disabled]{opacity:.35;cursor:default;background:none;}
.gm-ib[data-tip]:hover::after{content:attr(data-tip);position:absolute;top:38px;left:50%;transform:translateX(-50%);background:#3c4043;color:#fff;font-size:11.5px;padding:4px 8px;border-radius:4px;white-space:nowrap;z-index:5;}
.gm-count{margin-left:auto;font-size:12px;color:#5f6368;}
.gm-chk{width:16px;height:16px;accent-color:#0b57d0;cursor:pointer;margin:0 8px;}
.gm-list{flex:1;overflow:auto;}
.gm-row{display:flex;align-items:center;gap:4px;padding:0 12px 0 6px;height:40px;border-bottom:1px solid #f1f3f4;cursor:pointer;background:#f2f6fc;position:relative;font-size:14px;}
.gm-row.unread{background:#fff;} .gm-row.unread .gm-from, .gm-row.unread .gm-subj, .gm-row.unread .gm-time{font-weight:700;color:#202124;}
.gm-row:hover{box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);z-index:1;}
.gm-row.focus{box-shadow:inset 3px 0 0 #0b57d0;} .gm-row.sel{background:#c2dbff;}
.gm-star{color:#5f6368;} .gm-star.on{color:#f4b400;}
.gm-from{width:190px;flex-shrink:0;color:#202124;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:4px;}
.gm-snip{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#5f6368;}
.gm-subj{color:#202124;}
.gm-time{width:84px;text-align:right;font-size:12px;color:#5f6368;flex-shrink:0;}
.gm-tag{font-size:11px;border-radius:4px;padding:1px 6px;margin-right:6px;background:#e8eaed;color:#3c4043;font-weight:600;}
.gm-hover{display:none;position:absolute;right:8px;top:2px;background:inherit;gap:2px;}
.gm-row:hover .gm-hover{display:flex;} .gm-row:hover .gm-time{visibility:hidden;}
.gm-read{flex:1;overflow:auto;padding:4px 0 20px;}
.gm-read h2{font-family:'Google Sans',Roboto,Arial,sans-serif;font-size:22px;font-weight:400;margin:14px 20px 16px 72px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
.gm-read h2 .gm-tag{font-size:12px;font-weight:500;}
.gm-sender{display:flex;align-items:flex-start;gap:14px;padding:0 20px;}
.gm-av{width:40px;height:40px;border-radius:50%;background:#e8710a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;flex-shrink:0;}
.gm-sender b{font-size:14px;} .gm-sender span{font-size:12px;color:#5f6368;}
.gm-sender .gm-when{margin-left:auto;font-size:12px;color:#5f6368;white-space:nowrap;}
.gm-msg{margin:14px 20px 0 74px;font-size:14px;line-height:1.6;color:#222;}
.gm-msg p{margin:0 0 10px;}
.gm-replybar{display:flex;gap:10px;margin:22px 20px 0 74px;flex-wrap:wrap;}
.gm-pill{display:inline-flex;align-items:center;gap:8px;border:1px solid #747775;border-radius:18px;background:#fff;padding:8px 18px;font:inherit;font-size:14px;color:#444746;cursor:pointer;}
.gm-pill:hover{background:#f1f3f4;}
.gm-done{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 20px;color:#5f6368;gap:8px;}
.gm-done .sun{font-size:64px;} .gm-done b{font-size:20px;color:#202124;font-weight:400;}
.gm-empty{padding:40px 20px;text-align:center;color:#5f6368;font-size:14px;}
.gm-menu{position:absolute;z-index:20;background:#fff;border-radius:8px;box-shadow:0 4px 8px 3px rgba(60,64,67,.15),0 1px 3px rgba(60,64,67,.3);padding:8px 0;min-width:260px;top:96px;right:40px;}
.gm-menu h6{margin:4px 16px 8px;font-size:14px;font-weight:500;color:#202124;}
.gm-menu button{display:flex;justify-content:space-between;width:100%;border:none;background:none;font:inherit;font-size:14px;padding:8px 16px;cursor:pointer;color:#202124;} .gm-menu button:hover{background:#f1f3f4;} .gm-menu button span{color:#5f6368;}
.gm-compose-win{position:absolute;right:24px;bottom:0;width:min(460px,90%);background:#fff;border-radius:8px 8px 0 0;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);z-index:25;display:flex;flex-direction:column;}
.gm-cw-h{background:#f2f6fc;border-radius:8px 8px 0 0;padding:10px 14px;font-size:14px;font-weight:500;display:flex;justify-content:space-between;align-items:center;}
.gm-cw-h button{border:none;background:none;font-size:18px;cursor:pointer;color:#444746;}
.gm-cw-row{display:flex;align-items:center;gap:8px;border-bottom:1px solid #f1f3f4;padding:6px 14px;font-size:14px;color:#5f6368;}
.gm-cw-row input, .gm-cw-row select{flex:1;border:none;outline:none;font:inherit;font-size:14px;color:#202124;background:transparent;}
.gm-compose-win textarea{border:none;outline:none;font:inherit;font-size:14px;padding:10px 14px;min-height:130px;resize:vertical;}
.gm-cw-foot{padding:10px 14px;display:flex;align-items:center;gap:10px;}
.gm-send{background:#0b57d0;color:#fff;border:none;border-radius:18px;padding:9px 22px;font:inherit;font-weight:600;font-size:14px;cursor:pointer;}
.gm-snack{position:absolute;left:16px;bottom:16px;background:#3c4043;color:#fff;border-radius:4px;padding:12px 16px;font-size:14px;display:flex;gap:22px;align-items:center;z-index:30;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14);}
.gm-snack button{border:none;background:none;color:#a8c7fa;font:inherit;font-weight:600;cursor:pointer;}
.gm-legend{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;padding:10px 14px;border-top:1px solid #e3e3e3;background:#fff;font-size:12.5px;color:#444746;}
.gm-legend b{color:#202124;} .gm-legend .gm-kbd{font-family:monospace;background:#f1f3f4;border-radius:3px;padding:0 4px;}
.gm-legend .gm-submit{margin-left:auto;}
.gm-progress{height:4px;background:#e8eaed;} .gm-progress i{display:block;height:100%;background:#0b57d0;transition:width .3s;}
.gm-res-row{display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid var(--line);padding:8px 0;font-size:13px;flex-wrap:wrap;} .gm-res-row b{color:var(--navy);}
@media(max-width:860px){.gm-body{grid-template-columns:1fr;} .gm-nav{display:flex;gap:4px;overflow-x:auto;padding:4px 8px;} .gm-nav .gm-compose{display:none;} .gm-folder{width:auto;white-space:nowrap;border-radius:16px;} .gm-folder small{display:none;} .gm-main{margin:0 8px 8px;} .gm-from{width:110px;} .gm-logo{min-width:0;} .gm-logo span{display:none;} .gm-read h2, .gm-msg, .gm-replybar{margin-left:20px;}}
`; document.head.appendChild(s); })();

const GM_ICON = {
  archive:'<svg viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></svg>',
  trash:'<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
  snooze:'<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>',
  starOn:'<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
  forward:'<svg viewBox="0 0 24 24"><path d="M14 8V4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg>',
  reply:'<svg viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>',
  back:'<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
  inbox:'<svg viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>',
  unread:'<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  search:'<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
  pencil:'<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  refresh:'<svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>'
};
const GM_ACTIONS = {
  reply:  {q:"1", folder:"starred",   verb:"Replied",   done:"Reply sent."},
  star:   {q:"1", folder:"starred",   verb:"Starred",   done:"Starred — on your Do-now list."},
  snooze: {q:"2", folder:"snoozed",   verb:"Snoozed",   done:"Snoozed"},
  forward:{q:"3", folder:"forwarded", verb:"Forwarded", done:"Message forwarded."},
  archive:{q:"4", folder:"archive",   verb:"Archived",  done:"Conversation archived."},
  trash:  {q:"4", folder:"trash",     verb:"Deleted",   done:"Conversation moved to Trash."}
};
const GM_FOLDERS = [
  {id:"inbox", name:"Inbox", icon:"inbox"},
  {id:"starred", name:"Starred", sub:"Do now", icon:"starOn"},
  {id:"snoozed", name:"Snoozed", sub:"Schedule", icon:"snooze"},
  {id:"forwarded", name:"Forwarded", sub:"Delegate", icon:"forward"},
  {id:"archive", name:"All mail", sub:"Archived — defer", icon:"archive"},
  {id:"trash", name:"Trash", sub:"Delete", icon:"trash"}
];
const GM_SNOOZE = [["Later today","6:00 PM"],["Tomorrow","Tue, 8:00 AM"],["This weekend","Sat, 8:00 AM"],["Next week","Mon, 8:00 AM"]];
const GM_DELEGATES = ["Priya Nair — Communications & PR", "Litigation associate on the matter", "Billing & Finance team", "Office Manager / IT", "Household Manager", "Paralegal team"];

function gmIz(){ const iz = toolState.iz || (toolState.iz = {inbox:[], placements:{}}); iz.meta = iz.meta || {}; iz.read = iz.read || {}; iz.sel = iz.sel || {}; iz.folder = iz.folder || "inbox"; return iz; }
function gmSave(){ const iz = gmIz(); storeSet("iz-gmail", {inbox:iz.inbox, placements:iz.placements, meta:iz.meta, read:iz.read, startedAt:iz.startedAt, result:iz.result||null}); }
function gmFolderOf(e){ const m = gmIz().meta[e.id]; return m ? GM_ACTIONS[m.action].folder : "inbox"; }
function gmVisible(){
  const iz = gmIz(), q = (iz.search||"").toLowerCase();
  return iz.inbox.filter(e=>gmFolderOf(e)===iz.folder && (!q || (e.from+" "+e.subject+" "+(e.body||e.preview)).toLowerCase().includes(q)));
}
function gmName(from){ const m = String(from).match(/^\s*"?([^"<]+?)"?\s*<([^>]+)>/); return m ? {name:m[1].trim(), email:m[2].trim()} : {name:String(from), email:""}; }

function renderInboxZeroSection(){
  const iz = gmIz();
  if(!iz.inbox.length && !toolState.gmRestoreTried){
    toolState.gmRestoreTried = true;
    storeGet("iz-gmail").then(v=>{ if(v && v.inbox && v.inbox.length && !gmIz().inbox.length){ Object.assign(toolState.iz, v); gmRender(); } });
  }
  return `
    <h3 style="margin:36px 0 6px;color:var(--navy);font-size:15px;">Inbox Zero — Eisenhower Matrix Challenge</h3>
    <p style="font-size:12.8px;color:var(--ink-soft);margin:0 0 12px;">Elias's inbox after a red-eye: 25 overlapping, conflicting, urgent emails — different every time. Work it exactly like Gmail until you reach Inbox Zero. Every email leaves the Inbox through one decision.</p>
    <div id="gmZone">${gmView()}</div>`;
}
function gmRender(){ const z = document.getElementById("gmZone"); if(z){ const hadFocus = document.activeElement && document.activeElement.id==="gmShell"; z.innerHTML = gmView(); if(hadFocus){ const s = document.getElementById("gmShell"); if(s) s.focus({preventScroll:true}); } } }
function gmView(){
  const iz = gmIz();
  if(!iz.inbox.length){
    return `<div class="card" style="padding:16px 18px;">
      <b style="font-size:13px;color:var(--navy);">Load Elias's inbox</b>
      <p style="font-size:12.5px;color:var(--ink-soft);margin:6px 0 10px;">25 emails landed while he was offline. Nothing is pre-sorted.</p>
      <button class="btn btn-orange btn-sm" id="izGenBtn" onclick="izGenerateInbox()">Generate 25-Email Inbox</button>
      <span id="izGenStatus" style="margin-left:10px;font-size:12px;color:var(--ink-soft);"></span>
    </div>`;
  }
  const handled = iz.inbox.filter(e=>iz.meta[e.id]).length, total = iz.inbox.length;
  const unreadIn = iz.inbox.filter(e=>gmFolderOf(e)==="inbox" && !iz.read[e.id]).length;
  const counts = {}; iz.inbox.forEach(e=>{ const f = gmFolderOf(e); counts[f] = (counts[f]||0)+1; });
  const open = iz.open && iz.inbox.find(e=>e.id===iz.open);
  return `<div class="gm" id="gmShell" tabindex="0" onkeydown="gmKey(event)">
    <div class="gm-top">
      <div class="gm-logo"><b>M</b><span>Mail</span></div>
      <label class="gm-search">${GM_ICON.search}<input placeholder="Search mail" value="${esc(iz.search||"")}" oninput="gmSearch(this.value)"></label>
      <div class="gm-avatar" title="Elias Thorne's mailbox — you have delegate access">ET</div>
    </div>
    <div class="gm-progress"><i style="width:${Math.round(handled/total*100)}%"></i></div>
    <div class="gm-body">
      <nav class="gm-nav">
        <button class="gm-compose" title="Not needed for this exercise" disabled>${GM_ICON.pencil} Compose</button>
        ${GM_FOLDERS.map(f=>`<button class="gm-folder ${f.sub?"two":""} ${iz.folder===f.id?"on":""}" onclick="gmFolder('${f.id}')">${GM_ICON[f.icon]}<span>${f.name}${f.sub?`<small>${f.sub}</small>`:""}</span><em>${f.id==="inbox" ? (unreadIn||"") : (counts[f.id]||"")}</em></button>`).join("")}
      </nav>
      <section class="gm-main">${open ? gmReaderHtml(open) : gmListHtml()}</section>
    </div>
    <div class="gm-legend">
      <span><b>Do:</b> Reply or ⭐ Star</span><span><b>Schedule:</b> 🕒 Snooze</span><span><b>Delegate:</b> ↪ Forward</span><span><b>Delete/Defer:</b> Archive or 🗑</span>
      <span title="Gmail keyboard shortcuts">⌨ <span class="gm-kbd">j</span>/<span class="gm-kbd">k</span> move · <span class="gm-kbd">o</span> open · <span class="gm-kbd">u</span> back · <span class="gm-kbd">e</span> archive · <span class="gm-kbd">#</span> delete · <span class="gm-kbd">s</span> star · <span class="gm-kbd">b</span> snooze · <span class="gm-kbd">f</span> forward · <span class="gm-kbd">r</span> reply · <span class="gm-kbd">z</span> undo</span>
      <span class="gm-submit">${handled}/${total} handled ${handled===total ? `<button class="btn btn-navy btn-sm" onclick="izSubmitSort()">Submit for Grading</button>` : ""}</span>
    </div>
    ${iz.menu ? gmMenuHtml() : ""}
    ${iz.compose ? gmComposeHtml() : ""}
    ${iz.snack ? `<div class="gm-snack"><span>${esc(iz.snack)}</span><button onclick="gmUndo()">Undo</button></div>` : ""}
  </div>
  <div id="izSortResult" style="margin-top:14px;">${iz.result || ""}</div>
  <div style="margin-top:8px;"><button class="btn btn-ghost btn-sm" onclick="gmRegenerate()">↻ Generate a new inbox</button> <span id="izGenStatus" style="margin-left:8px;font-size:12px;color:var(--ink-soft);"></span></div>`;
}
function gmListHtml(){
  const iz = gmIz(), rows = gmVisible();
  const selIds = rows.filter(e=>iz.sel[e.id]).map(e=>e.id);
  const inInbox = iz.folder==="inbox";
  const bulk = (a, tip)=>`<button class="gm-ib" data-tip="${tip}" ${selIds.length?"":"disabled"} onclick="gmBulk('${a}')">${GM_ICON[a==="star"?"star":a]}</button>`;
  let body;
  if(!rows.length){
    body = inInbox && !iz.search
      ? `<div class="gm-done"><div class="sun">☀️</div><b>You're all done!</b><div>Nothing in Inbox — that's Inbox Zero.</div>${iz.inbox.every(e=>iz.meta[e.id]) ? `<button class="btn btn-navy" style="margin-top:12px;" onclick="izSubmitSort()">Submit for Grading</button>` : ""}</div>`
      : `<div class="gm-empty">${iz.search ? "No messages matched your search." : "No conversations in "+esc(GM_FOLDERS.find(f=>f.id===iz.folder).name)+"."}</div>`;
  }else{
    body = rows.map((e,i)=>{
      const n = gmName(e.from), m = iz.meta[e.id], unread = !iz.read[e.id];
      return `<div class="gm-row ${unread?"unread":""} ${iz.focus===i?"focus":""} ${iz.sel[e.id]?"sel":""}" onclick="gmOpen('${e.id}')">
        <input type="checkbox" class="gm-chk" ${iz.sel[e.id]?"checked":""} onclick="event.stopPropagation();gmSelect('${e.id}',this.checked)" aria-label="Select">
        <button class="gm-ib gm-star ${m && m.action==="star"?"on":""}" onclick="event.stopPropagation();${inInbox?`gmAct(['${e.id}'],'star')`:""}" title="${inInbox?"Star (Do now)":""}">${m && m.action==="star" ? GM_ICON.starOn : GM_ICON.star}</button>
        <div class="gm-from">${esc(n.name)}</div>
        <div class="gm-snip">${m && !inInbox ? `<span class="gm-tag">${esc(GM_ACTIONS[m.action].verb)}${m.detail?" · "+esc(m.detail):""}</span>` : ""}<span class="gm-subj">${esc(e.subject)}</span> — ${esc(e.preview||"")}</div>
        <div class="gm-time">${esc(e.time||"")}</div>
        <div class="gm-hover">${inInbox
          ? `<button class="gm-ib" data-tip="Archive" onclick="event.stopPropagation();gmAct(['${e.id}'],'archive')">${GM_ICON.archive}</button><button class="gm-ib" data-tip="Delete" onclick="event.stopPropagation();gmAct(['${e.id}'],'trash')">${GM_ICON.trash}</button><button class="gm-ib" data-tip="Mark as unread" onclick="event.stopPropagation();gmUnread('${e.id}')">${GM_ICON.unread}</button><button class="gm-ib" data-tip="Snooze" onclick="event.stopPropagation();gmMenu(['${e.id}'])">${GM_ICON.snooze}</button>`
          : `<button class="gm-ib" data-tip="Move to Inbox" onclick="event.stopPropagation();gmToInbox(['${e.id}'])">${GM_ICON.inbox}</button>`}</div>
      </div>`;
    }).join("");
  }
  return `<div class="gm-bar">
      <input type="checkbox" class="gm-chk" ${rows.length && selIds.length===rows.length?"checked":""} onclick="gmSelectAll(this.checked)" aria-label="Select all">
      <button class="gm-ib" data-tip="Refresh" onclick="gmRender()">${GM_ICON.refresh}</button>
      ${inInbox ? bulk("archive","Archive")+bulk("trash","Delete")+`<button class="gm-ib" data-tip="Snooze" ${selIds.length?"":"disabled"} onclick="gmMenu(null)">${GM_ICON.snooze}</button>`+bulk("star","Star") : `<button class="gm-ib" data-tip="Move to Inbox" ${selIds.length?"":"disabled"} onclick="gmToInbox(null)">${GM_ICON.inbox}</button>`}
      <span class="gm-count">${rows.length ? `1–${rows.length} of ${rows.length}` : ""}</span>
    </div>
    <div class="gm-list">${body}</div>`;
}
function gmReaderHtml(e){
  const iz = gmIz(), n = gmName(e.from), m = iz.meta[e.id], inInbox = !m;
  const paras = String(e.body || e.preview || "").split(/\n+/).map(p=>`<p>${esc(p)}</p>`).join("");
  const tb = (a, tip, fn)=>`<button class="gm-ib" data-tip="${tip}" onclick="${fn}">${GM_ICON[a]}</button>`;
  return `<div class="gm-bar">
      ${tb("back","Back to "+esc(GM_FOLDERS.find(f=>f.id===iz.folder).name),"gmBack()")}
      ${inInbox ? tb("archive","Archive",`gmAct(['${e.id}'],'archive')`)+tb("trash","Delete",`gmAct(['${e.id}'],'trash')`)+tb("unread","Mark as unread",`gmUnread('${e.id}')`)+tb("snooze","Snooze",`gmMenu(['${e.id}'])`)+tb("star","Star (Do now)",`gmAct(['${e.id}'],'star')`) : tb("inbox","Move to Inbox",`gmToInbox(['${e.id}'])`)}
    </div>
    <div class="gm-read">
      <h2>${esc(e.subject)} <span class="gm-tag">${m ? esc(GM_ACTIONS[m.action].verb)+(m.detail?" · "+esc(m.detail):"") : "Inbox"}</span></h2>
      <div class="gm-sender"><div class="gm-av">${esc((n.name[0]||"?").toUpperCase())}</div><div><b>${esc(n.name)}</b> <span>&lt;${esc(n.email)}&gt;</span><br><span>to Elias Thorne</span></div><span class="gm-when">${esc(e.time||"")}</span></div>
      <div class="gm-msg">${paras}</div>
      ${inInbox ? `<div class="gm-replybar"><button class="gm-pill" onclick="gmCompose('${e.id}','reply')">${GM_ICON.reply} Reply</button><button class="gm-pill" onclick="gmCompose('${e.id}','forward')">${GM_ICON.forward} Forward</button></div>` : ""}
    </div>`;
}
function gmMenuHtml(){
  return `<div class="gm-menu" onclick="event.stopPropagation()"><h6>Snooze until…</h6>
    ${GM_SNOOZE.map(([a,b])=>`<button onclick="gmSnooze('${a}')">${a}<span>${b}</span></button>`).join("")}
    <button onclick="gmSnooze('Pick date & time')">📅 Pick date &amp; time</button>
    <button onclick="gmCloseMenu()" style="justify-content:center;color:#0b57d0;">Cancel</button></div>`;
}
function gmComposeHtml(){
  const iz = gmIz(), c = iz.compose, e = iz.inbox.find(x=>x.id===c.id), n = gmName(e.from);
  const fwd = c.mode==="forward";
  return `<div class="gm-compose-win">
    <div class="gm-cw-h">${fwd ? "Fwd: " : "Re: "}${esc(e.subject)}<button onclick="gmCloseCompose()" title="Close">✕</button></div>
    <div class="gm-cw-row">To ${fwd
      ? `<input id="gmTo" list="gmDelegates" placeholder="Who should handle this?" value="${esc(c.to||"")}"><datalist id="gmDelegates">${GM_DELEGATES.map(d=>`<option value="${esc(d)}">`).join("")}</datalist>`
      : `<input id="gmTo" value="${esc(n.name)}" readonly>`}</div>
    <textarea id="gmNote" placeholder="${fwd ? "Add a short handoff note: what you need and by when…" : "Write your reply…"}">${esc(c.note||"")}</textarea>
    <div class="gm-cw-foot"><button class="gm-send" onclick="gmSendCompose()">Send</button><span style="font-size:12px;color:#5f6368;">${fwd ? "Forwarding = Delegate" : "Replying now = Do"}</span></div>
  </div>`;
}
/* ---- actions ---- */
function gmAct(ids, action, detail){
  const iz = gmIz(); ids = ids.filter(id=>!iz.meta[id]); if(!ids.length) return;
  if(!iz.startedAt) iz.startedAt = Date.now();
  iz.undo = ids.map(id=>({id, placement:iz.placements[id]}));
  ids.forEach(id=>{ iz.meta[id] = {action, detail:detail||""}; iz.placements[id] = GM_ACTIONS[action].q; iz.read[id] = true; delete iz.sel[id]; });
  if(iz.open && ids.includes(iz.open)) iz.open = null;
  const d = GM_ACTIONS[action];
  iz.snack = (ids.length>1 ? `${ids.length} conversations ` + d.verb.toLowerCase()+"." : d.done) + (action==="snooze" && detail ? " until "+detail+"." : "");
  iz.menu = null; iz.compose = null;
  clearTimeout(gmAct.t); gmAct.t = setTimeout(()=>{ gmIz().snack = null; gmRender(); }, 7000);
  const vis = gmVisible(); iz.focus = Math.min(iz.focus||0, Math.max(0, vis.length-1));
  gmSave(); gmRender();
}
function gmUndo(){
  const iz = gmIz(); if(!iz.undo) return;
  iz.undo.forEach(u=>{ delete iz.meta[u.id]; if(u.placement) iz.placements[u.id] = u.placement; else delete iz.placements[u.id]; });
  iz.undo = null; iz.snack = "Action undone."; clearTimeout(gmAct.t); gmAct.t = setTimeout(()=>{ gmIz().snack = null; gmRender(); }, 3000);
  gmSave(); gmRender();
}
function gmToInbox(ids){
  const iz = gmIz(); ids = ids || gmVisible().filter(e=>iz.sel[e.id]).map(e=>e.id);
  ids.forEach(id=>{ delete iz.meta[id]; delete iz.placements[id]; delete iz.sel[id]; });
  if(iz.open && ids.includes(iz.open)) iz.open = null;
  iz.snack = ids.length>1 ? `${ids.length} conversations moved to Inbox.` : "Conversation moved to Inbox."; iz.undo = null;
  gmSave(); gmRender();
}
function gmBulk(a){ const iz = gmIz(); const ids = gmVisible().filter(e=>iz.sel[e.id]).map(e=>e.id); if(ids.length) gmAct(ids, a); }
function gmOpen(id){ const iz = gmIz(); iz.open = id; iz.read[id] = true; iz.menu = null; gmSave(); gmRender(); const s = document.getElementById("gmShell"); if(s) s.focus({preventScroll:true}); }
function gmBack(){ const iz = gmIz(); iz.open = null; iz.compose = null; gmRender(); }
function gmUnread(id){ const iz = gmIz(); delete iz.read[id]; if(iz.open===id) iz.open = null; iz.snack = "Marked as unread."; gmSave(); gmRender(); }
function gmFolder(f){ const iz = gmIz(); iz.folder = f; iz.open = null; iz.sel = {}; iz.focus = 0; iz.menu = null; gmRender(); }
function gmSearch(v){ const iz = gmIz(); iz.search = v; iz.focus = 0; const z = document.getElementById("gmZone"); if(!z) return; const main = z.querySelector(".gm-main"); if(main && !iz.open) main.innerHTML = gmListHtml(); }
function gmSelect(id, on){ const iz = gmIz(); if(on) iz.sel[id] = true; else delete iz.sel[id]; gmRender(); }
function gmSelectAll(on){ const iz = gmIz(); iz.sel = {}; if(on) gmVisible().forEach(e=>iz.sel[e.id] = true); gmRender(); }
function gmMenu(ids){ const iz = gmIz(); iz.menu = {ids: ids || gmVisible().filter(e=>iz.sel[e.id]).map(e=>e.id)}; if(!iz.menu.ids.length){ iz.menu = null; return; } gmRender(); }
function gmCloseMenu(){ gmIz().menu = null; gmRender(); }
function gmSnooze(label){ const iz = gmIz(); if(!iz.menu) return; const opt = GM_SNOOZE.find(x=>x[0]===label); gmAct(iz.menu.ids, "snooze", opt ? opt[1] : "a date you picked"); }
function gmCompose(id, mode){ const iz = gmIz(); iz.compose = {id, mode, to:"", note:""}; gmRender(); setTimeout(()=>{ const el = document.getElementById(mode==="forward" ? "gmTo" : "gmNote"); if(el) el.focus(); }, 30); }
function gmCloseCompose(){ gmIz().compose = null; gmRender(); }
function gmSendCompose(){
  const iz = gmIz(), c = iz.compose; if(!c) return;
  const to = (document.getElementById("gmTo")||{}).value || "", note = (document.getElementById("gmNote")||{}).value || "";
  if(c.mode==="forward" && !to.trim()){ toast("Add who you're forwarding it to."); return; }
  if(note.trim().length < 3){ toast(c.mode==="forward" ? "Add a short handoff note." : "Write your reply first."); return; }
  iz.notes = iz.notes || {}; iz.notes[c.id] = note.trim();
  gmAct([c.id], c.mode==="forward" ? "forward" : "reply", c.mode==="forward" ? to.trim() : "");
}
function gmKey(ev){
  const t = ev.target; if(t && (t.tagName==="INPUT" || t.tagName==="TEXTAREA" || t.tagName==="SELECT")) return;
  const iz = gmIz(); const rows = gmVisible(); const inInbox = iz.folder==="inbox";
  const cur = iz.open || (rows[iz.focus||0] && rows[iz.focus||0].id);
  const k = ev.key; let hit = true;
  if(k==="j" || k==="ArrowDown"){ if(iz.open){ const i = rows.findIndex(e=>e.id===iz.open); if(rows[i+1]) gmOpen(rows[i+1].id); } else { iz.focus = Math.min((iz.focus||0)+1, rows.length-1); gmRender(); } }
  else if(k==="k" || k==="ArrowUp"){ if(iz.open){ const i = rows.findIndex(e=>e.id===iz.open); if(i>0) gmOpen(rows[i-1].id); } else { iz.focus = Math.max((iz.focus||0)-1, 0); gmRender(); } }
  else if((k==="o" || k==="Enter") && !iz.open && cur) gmOpen(cur);
  else if(k==="u" || k==="Escape"){ if(iz.menu) gmCloseMenu(); else if(iz.compose) gmCloseCompose(); else gmBack(); }
  else if(k==="z") gmUndo();
  else if(k==="x" && !iz.open && cur){ gmSelect(cur, !iz.sel[cur]); }
  else if(inInbox && cur && !iz.meta[cur]){
    if(k==="e") gmAct([cur],"archive"); else if(k==="#") gmAct([cur],"trash"); else if(k==="s") gmAct([cur],"star");
    else if(k==="b") gmMenu([cur]); else if(k==="f") gmCompose(cur,"forward"); else if(k==="r") gmCompose(cur,"reply"); else hit = false;
  } else hit = false;
  if(hit){ ev.preventDefault(); ev.stopPropagation(); }
}
async function gmRegenerate(){
  const iz = gmIz();
  if(iz.inbox.length && Object.keys(iz.meta).length && !confirm("Generate a brand-new inbox? Your current progress in this one will be cleared.")) return;
  izGenerateInbox();
}
/* generation: same themed batches as before, plus a full body for the reading view */
async function izGenerateInbox(){
  const btn = document.getElementById("izGenBtn"), status = document.getElementById("izGenStatus");
  if(btn) btn.disabled = true;
  if(status) status.textContent = "Generating… (about 15–30 seconds)";
  const themes = [
    "client matters and court/arbitration deadlines — include at least one genuine emergency tied to the Meridian Dynamics arbitration",
    "scheduling: overlapping meeting requests, calendar conflicts, reschedules, and travel changes",
    "internal firm operations: partners, associates, billing, finance approvals, HR and IT",
    "family and household logistics, personal appointments, and one media or PR inquiry",
    "vendors, newsletters, event invitations, subscriptions, and other low-priority noise"
  ];
  const makePrompt = (theme)=>`You are generating part of a training inbox for an Executive Assistant training simulation. The EA works for Elias Thorne (Managing Owner & CEO, Thorne & Partners Law Group).

CLIENT CONTEXT:
${CLIENT_DOSSIER_MD}

Generate EXACTLY 5 realistic, varied emails for this theme: ${theme}. They landed while he was offline overnight on a red-eye. Vary sender, tone, and urgency; invent plausible names, firms, and specifics.

For EACH email, privately classify the Eisenhower quadrant from the EA's perspective: "1" = Urgent & Important (Do), "2" = Important Not Urgent (Schedule), "3" = Urgent Not Important (Delegate), "4" = Neither (Delete/Defer).

Return ONLY a JSON array of exactly 5 objects — no preamble, no markdown fences. Each object:
{"from":"Name <email>", "subject":"...", "preview":"one sentence preview", "body":"the full email, 2-5 short sentences, written the way this sender really would (greeting and sign-off included)", "idealQuadrant":"1"}`;
  try{
    const results = [];
    for(let k=0;k<themes.length;k+=2){ results.push(...await Promise.allSettled(themes.slice(k,k+2).map(t=>callAIJson(makePrompt(t), 2200, 70000)))); }
    const emails = results.filter(x=>x.status==="fulfilled" && Array.isArray(x.value)).flatMap(x=>x.value);
    if(emails.length < 10) throw new Error("only "+emails.length+" emails returned");
    for(let i=emails.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [emails[i],emails[j]]=[emails[j],emails[i]]; }
    let mins = 6*60+52;   // newest first, like a real inbox the morning after a red-eye
    const iz = gmIz();
    iz.inbox = emails.slice(0,25).map((e,i)=>{ mins -= 4 + Math.floor(Math.random()*22); const h = Math.floor(((mins%1440)+1440)%1440/60), m = ((mins%60)+60)%60;
      return {id:"m"+i, from:e.from||"Unknown", subject:e.subject||"(no subject)", preview:e.preview||"", body:e.body||e.preview||"", time:`${h%12||12}:${String(m).padStart(2,"0")} ${h<12?"AM":"PM"}`, idealQuadrant:String(e.idealQuadrant||"4").replace(/[^1-4]/g,"")||"4"}; });
    iz.placements = {}; iz.meta = {}; iz.read = {}; iz.sel = {}; iz.folder = "inbox"; iz.open = null; iz.focus = 0; iz.result = ""; iz.startedAt = 0; iz.snack = null;
    gmSave(); gmRender();
    const failed = results.filter(x=>x.status!=="fulfilled").length;
    if(failed) toast(`${iz.inbox.length} emails loaded (${failed} batch${failed>1?"es":""} timed out — the inbox is a little smaller, that's fine).`);
    const sh = document.getElementById("gmShell"); if(sh) sh.focus({preventScroll:true});
  }catch(e){
    console.error("Inbox generation failed:", e);
    const st = document.getElementById("izGenStatus");
    if(st) st.textContent = /timed out/i.test(e.message||"") ? "The service is responding slowly — please try again in a moment." : "Couldn't generate the inbox — please try again.";
  }finally{
    const b = document.getElementById("izGenBtn"); if(b) b.disabled = false;
  }
}
async function izSubmitSort(){
  const iz = gmIz(), total = iz.inbox.length, handled = iz.inbox.filter(e=>iz.meta[e.id]).length;
  if(handled < total){ toast(`Get to Inbox Zero first (${total-handled} left in the Inbox).`); return; }
  let correct = 0; iz.inbox.forEach(e=>{ if(iz.placements[e.id]===e.idealQuadrant) correct++; });
  const score = Math.round(correct/total*100);
  const secs = iz.startedAt ? Math.round((Date.now()-iz.startedAt)/1000) : 0;
  const decision = (q)=>({"1":"Do (reply / star)","2":"Schedule (snooze)","3":"Delegate (forward)","4":"Delete/Defer (archive / delete)"}[q]);
  const mism = iz.inbox.filter(e=>iz.placements[e.id]!==e.idealQuadrant);
  iz.result = `<div class="iz-score-banner">
      <div class="iz-score-num">${score}%</div>
      <div><b>${correct} / ${total} matched expert triage</b>${secs ? ` · Inbox Zero in ${Math.floor(secs/60)}m ${secs%60}s` : ""}<div class="iz-score-note">A mismatch isn't automatically wrong — the point is defensible judgment. Review any surprises below.</div></div>
    </div>
    <div style="margin-top:12px;">${mism.length ? mism.map(e=>`<div class="gm-res-row"><b>${esc(e.subject)}</b><span>You: ${esc(GM_ACTIONS[iz.meta[e.id].action].verb)} → ${esc(decision(iz.placements[e.id]))} · Expert: <b>${esc(decision(e.idealQuadrant))}</b></span></div>`).join("") : `<p class="iz-empty">Perfect match on every email.</p>`}</div>`;
  gmSave(); gmRender();
  const r = document.getElementById("izSortResult"); if(r) r.scrollIntoView({behavior:"smooth", block:"start"});
  await bumpPracticeProgress("forcemultiplier2", score);
  if(score===100) burstConfetti();
}
Object.assign(window, {izGenerateInbox, izSubmitSort, gmAct, gmUndo, gmToInbox, gmBulk, gmOpen, gmBack, gmUnread, gmFolder, gmSearch, gmSelect, gmSelectAll, gmMenu, gmCloseMenu, gmSnooze, gmCompose, gmCloseCompose, gmSendCompose, gmKey, gmRegenerate, gmRender});
document.addEventListener("click", (e)=>{ const iz = toolState && toolState.iz; if(iz && iz.menu && !e.target.closest(".gm-menu") && !e.target.closest(".gm-ib")){ iz.menu = null; gmRender(); } });

/* ---------- 8. Day 3 lab, Part 3: Proactive EA Tasks becomes a real exercise ----------
   Before: one button — the AI wrote the task list and the trainee only read it.
   Now: the trainee writes their own 4–6 proactive tasks from the week they just
   resolved, gets a graded review, then can compare with an expert EA's list. */
const PT_ROWS = 6;
function ptCalendarSummary(){ return calMergedEvents().map(e=>`- ${e.day} ${fmtHr12(e.s)}-${fmtHr12(e.e)} [${e.p} priority] ${e.t}${e.loc&&e.loc!=="—"?" — "+e.loc:""}`).join("\n"); }
function ptPartHtml(){
  const d = toolState.ptDraft || [];
  return `
    <h3 style="margin:0 0 6px;color:var(--navy);font-size:15px;">Proactive EA Tasks</h3>
    <p style="font-size:12.8px;color:var(--ink-soft);margin:0 0 10px;">A good EA doesn't just manage what's on the calendar — they spot what's <i>missing</i> from it. Look at the week you just resolved in Parts 1–2 and write the <b>4–6 tasks you'd add to your own to-do list</b>: admin work the calendar implies, but that isn't itself a calendar event.</p>
    <div class="card" style="padding:12px 16px;margin-bottom:12px;background:#F8F9FC;font-size:12.8px;line-height:1.55;">
      <b style="color:var(--navy);">What counts:</b> “Confirm the dairy-free menu with the restaurant for Thursday's client dinner — Elias is Paleo.” · “Book the car to the airport for Friday's 6 AM flight.”<br>
      <b style="color:var(--navy);">Doesn't count:</b> “Attend the board meeting” (already on the calendar) · “Check email” (not tied to anything specific).
    </div>
    <div class="pt-rows">${Array.from({length:PT_ROWS},(_,i)=>`
      <div class="pt-row"><span>${i+1}</span>
        <input id="ptTask${i}" placeholder="Task — what you'll do, for which event" value="${esc((d[i]||{}).task||"")}" oninput="ptDraftSave()">
        <input id="ptWhy${i}" placeholder="Why — what on the calendar (or in the dossier) triggers it" value="${esc((d[i]||{}).why||"")}" oninput="ptDraftSave()">
      </div>`).join("")}</div>
    <button class="btn btn-navy btn-sm" style="margin-top:10px;" onclick="ptSubmit()">Submit my list for review</button>
    <div id="ptResult" style="margin-top:14px;"></div>
    <div id="proactiveResult" style="margin-top:14px;"></div>`;
}
(function(){ const s = document.createElement("style"); s.id = "eapa-proactive"; s.textContent = `
.pt-rows{display:flex;flex-direction:column;gap:8px;}
.pt-row{display:grid;grid-template-columns:24px minmax(0,1.2fr) minmax(0,1fr);gap:8px;align-items:center;}
.pt-row span{font-weight:800;color:var(--orange-deep);text-align:center;}
.pt-row input{width:100%;box-sizing:border-box;font:inherit;font-size:13px;border:1px solid var(--line);border-radius:8px;padding:8px 10px;}
@media(max-width:760px){.pt-row{grid-template-columns:20px 1fr;} .pt-row input:last-child{grid-column:2;}}
`; document.head.appendChild(s); })();
function ptRead(){ return Array.from({length:PT_ROWS},(_,i)=>({task:((document.getElementById("ptTask"+i)||{}).value||"").trim(), why:((document.getElementById("ptWhy"+i)||{}).value||"").trim()})); }
function ptDraftSave(){ toolState.ptDraft = ptRead(); clearTimeout(ptDraftSave.t); ptDraftSave.t = setTimeout(()=>storeSet("proactive-tasks-draft", toolState.ptDraft), 500); }
async function ptSubmit(){
  const rows = ptRead().filter(r=>r.task);
  if(rows.length < 4){ toast("Write at least 4 tasks first."); return; }
  if(!(await useLabAttempt(3, "proactiveTaskList"))) return;
  const el = document.getElementById("ptResult");
  el.innerHTML = `<div class="ai-loading">Reviewing your task list against the calendar…</div>`;
  try{
    const report = await runRubricEvaluation(
      "Proactive EA Task List",
      `CURRENT CALENDAR (the week the trainee just resolved):\n${ptCalendarSummary() || "(empty)"}\n\nCLIENT CONTEXT:\n${CLIENT_DOSSIER_MD}`,
      rows.map((r,i)=>`${i+1}. ${r.task}${r.why ? " — WHY: "+r.why : ""}`).join("\n"),
      `Judge each task. A strong task is (a) PROACTIVE admin work implied by a specific calendar event — not the event itself; (b) SPECIFIC — names the event or day and the concrete action; (c) JUSTIFIED by a real trigger: travel logistics, filing or court deadlines, prep materials, buffers after long sessions, confirmations, or the client's documented preferences (e.g. dietary needs, communication rules); (d) sensibly prioritised. Reward tasks that use the client's documented preferences. Mark down generic tasks ("check email", "stay organised"), duplicates, and tasks that just restate a calendar event.`
    );
    el.innerHTML = `<b style="font-size:13px;color:var(--navy);display:block;margin-bottom:8px;">Evaluation Report — Your Proactive Task List</b>` + renderEvaluationReport(report, 3)
      + `<button class="btn btn-ghost btn-sm" style="margin-top:12px;" onclick="ptCompare(this)">Compare with an expert EA's list</button>`;
    await bumpPracticeProgress("calendar", report.totalScore);
    if(report.totalScore>=85) burstConfetti();
  }catch(e){
    el.innerHTML = renderAiErrorBlock(e, "Couldn't get feedback");
  }
}
async function ptCompare(btn){
  const el = document.getElementById("proactiveResult"); if(btn) btn.disabled = true;
  el.innerHTML = `<div class="ai-loading">Asking an expert EA to review the same calendar…</div>`;
  const prompt = `You are an expert Executive Assistant reviewing your principal's calendar for a training exercise.

CLIENT CONTEXT:
${CLIENT_DOSSIER_MD}

CURRENT CALENDAR:
${ptCalendarSummary() || "(empty)"}

List the 5 most valuable PROACTIVE tasks an EA should independently add to their own to-do list — administrative work the calendar implies is needed but that isn't itself a calendar event. Be specific to the events above and to the client's documented preferences.

Return ONLY a JSON array of objects like: [{"task":"...", "why":"..."}]`;
  try{
    let tasks = await callAIJson(prompt, 1400, 90000);
    if(tasks && !Array.isArray(tasks)){ const arr = Object.values(tasks).find(v=>Array.isArray(v)); if(arr) tasks = arr; }
    tasks = (Array.isArray(tasks)?tasks:[]).map(t=> typeof t==="string" ? {task:t, why:""} : t).filter(t=>t && t.task);
    if(!tasks.length) throw new Error("the reply had no tasks");
    el.innerHTML = `<b style="font-size:13px;color:var(--navy);display:block;margin-bottom:6px;">An expert EA's list — which of these did you catch?</b>` + tasks.map(t=>`
      <div class="task-item"><span class="task-dot">●</span><div><b>${esc(t.task)}</b><div class="task-why">${esc(t.why||"")}</div></div></div>`).join("");
  }catch(e){
    el.innerHTML = renderAiErrorBlock(e, "Couldn't load the expert list");
    if(btn) btn.disabled = false;
  }
}
Object.assign(window, {ptSubmit, ptCompare, ptDraftSave});
const __eapaInitCalendar = window.initCalendar;
window.initCalendar = async function(body){
  const r = await __eapaInitCalendar(body);
  const old = body.querySelector("#proactiveResult");
  const screen = old && old.closest(".wizard-screen");
  if(screen){
    if(!toolState.ptDraft){ const saved = await storeGet("proactive-tasks-draft"); if(saved) toolState.ptDraft = saved; }
    screen.innerHTML = ptPartHtml();
  }
  return r;
};

/* ---------- 9. Practice Lab pages in the platform's page style ----------
   Lab pages get the same navy hero banner as every other page (day kicker,
   serif title, summary, save / return controls and status chips), then a
   standard body: activity tabs on a rail, an "Activity N of M" kicker +
   serif heading per activity, readable instructions, uniform cards and
   clear primary buttons. A small polisher applies this to whatever each
   lab renders, so the labs' own logic is untouched. */
(function(){ const s = document.createElement("style"); s.id = "eapa-lab-style"; s.textContent = `
.lab-hero{margin-top:10px;}
.lab-hero-top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;}
.lab-hero-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.lab-hero .lab-save-status{color:#9FE0B8;font-size:12.5px;font-weight:700;}
.lab-hero .lab-hbtn{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.28);}
.lab-hero .lab-hbtn:hover{background:rgba(255,255,255,.2);}
.lab-hero h1 .lab-ic{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:rgba(240,192,138,.16);border:1px solid rgba(240,192,138,.35);font-size:22px;margin-right:10px;vertical-align:middle;}
.lab-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
.lab-chips span{font-size:12.5px;font-weight:700;border-radius:999px;padding:5px 12px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#E4E7F5;}
.lab-chips span.ok{background:rgba(88,190,130,.18);border-color:rgba(143,224,174,.45);color:#9FE0B8;}
.lab-shell{padding:22px 28px 26px;}
.lab-shell .wizard-tabs{background:#F6F4EF;border-radius:16px;padding:8px;margin:0 0 20px;}
.lab-shell .wizard-part-label{display:none;}
.lab-kicker{font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep);margin:0 0 4px;display:flex;align-items:center;gap:10px;}
.lab-kicker::after{content:"";flex:1;height:1px;background:#EADFD2;}
#toolBody h3{font-family:'Fraunces',Georgia,serif !important;color:var(--navy) !important;font-size:21px !important;line-height:1.25;margin:0 0 8px !important;font-weight:700;}
#toolBody h3.lab-sub{font-size:18px !important;margin-top:30px !important;}
#toolBody .wizard-screen > p, #toolBody p[style*="font-size:12"], #toolBody p[style*="font-size:13px"]{font-size:14.5px !important;line-height:1.6 !important;color:#4A4E63 !important;max-width:90ch;}
#toolBody li[style*="font-size:12"], #toolBody li[style*="font-size:13px"], #toolBody label[style*="font-size:12"]{font-size:14px !important;line-height:1.55;}
#toolBody .card{border-radius:14px;border:1px solid var(--line);box-shadow:0 1px 2px rgba(31,36,64,.05);}
#toolBody .card[style*="#F8F9FC"], #toolBody .card[style*="#FFFBF3"], #toolBody .card[style*="#FFFCF8"]{border-left:4px solid var(--orange) !important;background:#FFFBF5 !important;}
#toolBody textarea, #toolBody input[type="text"], #toolBody input:not([type]), #toolBody select{border-radius:10px;}
#toolBody textarea:focus, #toolBody input:focus, #toolBody select:focus{outline:2px solid rgba(219,132,55,.35);outline-offset:1px;border-color:var(--orange);}
#toolBody .btn.lab-cta{background:var(--navy) !important;color:#fff !important;border:1px solid var(--navy) !important;font-size:14px !important;padding:10px 20px !important;border-radius:10px !important;font-weight:700;}
#toolBody .btn.lab-cta:hover{background:#2B3158 !important;}
#toolBody .btn.lab-cta[disabled]{opacity:.55;}
.lab-shell .wizard-nav{border-top:1px solid var(--line);padding-top:16px;margin-top:26px;}
/* Practice Lab list: same card language as the dashboard */
.tool-card .tool-open-btn{background:var(--navy);color:#fff;border-color:var(--navy);border-radius:10px;padding:11px;font-size:14px;}
.tool-card:hover .tool-open-btn{background:var(--orange);border-color:var(--orange);}
.tool-card .tool-status-row{font-weight:700;font-size:12.5px;border-radius:999px;padding:4px 10px;align-self:flex-start;background:#F3F4F9;}
.tool-card .tool-status-row.st-done{background:#EAF6EF;}
.tool-card .tool-desc2{font-size:13.5px;line-height:1.5;}
.tool-card.locked .tool-open-btn{background:#EEF0F6;color:var(--ink-soft);border-color:#EEF0F6;}
@media(max-width:760px){.lab-shell{padding:16px 14px;} .lab-hero h1 .lab-ic{width:36px;height:36px;font-size:18px;}}
`; document.head.appendChild(s); })();

window.toolHead = function(t){
  const d = t.relates ? parseInt(String(t.relates).replace(/[^0-9]/g,""), 10) : null;
  return `
    <a class="back-link" onclick="goto('practice')">&larr; Back to Practice Lab</a>
    <section class="page-hero lab-hero">
      <div class="lab-hero-top">
        <p class="eyebrow">${d ? `Day ${d} · Practice Lab` : "Practice Lab"}</p>
        <div class="lab-hero-actions">
          <span class="lab-save-status" id="labSaveStatus">💾 Auto-save on</span>
          <button class="btn btn-sm lab-hbtn" onclick="saveLabNow()">💾 Save</button>
          ${d ? `<button class="btn btn-sm lab-hbtn" onclick="returnToLessonCard(${d})">Return to Progress</button>` : ""}
        </div>
      </div>
      <h1><span class="lab-ic">${t.icon}</span>${esc(t.title)}</h1>
      <p>${esc(t.desc)}</p>
      <div class="lab-chips" id="labChips">${labChipsHtml(t)}</div>
    </section>
    <div class="card tool-shell lab-shell"><div id="toolBody"></div></div>`;
};
function labChipsHtml(t){
  const p = (state.practiceProgress||{})[t.id];
  const n = (toolState && toolState.wizardLabels) ? toolState.wizardLabels.length : 0;
  const left = typeof labAttemptsRemaining==="function" ? labAttemptsRemaining() : null;
  return (n ? `<span>🧩 ${n} activities</span>` : "")
    + (p ? `<span class="ok">✓ Best score ${p.bestScore}% · ${p.runs} run${p.runs===1?"":"s"}</span>` : `<span>◻ Not started</span>`)
    + (left!=null ? `<span>🔁 ${left} of ${LAB_ATTEMPT_CAP} repeat attempts left</span>` : "")
    + `<span>🆓 First try of each exercise is free</span>`;
}
const LAB_CTA = /^\s*(check|submit|get review|get evaluation|get feedback|finish|evaluate|grade|review my|send for review)/i;
function labPolish(){
  const body = document.getElementById("toolBody"); if(!body) return;
  const screens = [...body.querySelectorAll(".wizard-screen")];
  const n = screens.length;
  // every activity opens with "Activity N of M" + a heading (its own, or the tab name)
  const labels = (toolState && toolState.wizardLabels) || [];
  screens.forEach((screen,i)=>{
    if(screen.dataset.labPolished) return; screen.dataset.labPolished = "1";
    const first = screen.firstElementChild;
    if(first && first.tagName==="H3") first.dataset.labLead = "1";
    else screen.insertAdjacentHTML("afterbegin", `<h3 data-lab-lead="1">${esc(labels[i]||"")}</h3>`);
    screen.querySelector("h3[data-lab-lead]").insertAdjacentHTML("beforebegin", `<div class="lab-kicker">Activity ${i+1} of ${n}</div>`);
  });
  // drop the old "A. / B." letter prefixes; later headings become sub-headings
  body.querySelectorAll("h3").forEach(h=>{
    if(h.dataset.labPolished) return; h.dataset.labPolished = "1";
    const tn = [...h.childNodes].find(x=>x.nodeType===3 && x.textContent.trim());
    if(tn) tn.textContent = tn.textContent.replace(/^\s*[A-H]\.\s+/, "");
    if(!h.dataset.labLead && h.closest(".wizard-screen")) h.classList.add("lab-sub");
  });
  body.querySelectorAll("button.btn").forEach(b=>{ if(!b.dataset.labCta && LAB_CTA.test(b.textContent||"") && !b.closest(".wizard-nav") && !b.closest(".gm")){ b.dataset.labCta = "1"; b.classList.add("lab-cta"); } });
  const chips = document.getElementById("labChips"), t = PRACTICE_TOOLS.find(x=>x.id===state.toolId);
  if(chips && t){ const html = labChipsHtml(t); if(chips.innerHTML !== html) chips.innerHTML = html; }
}
let __labObs = null, __labT = null;
const __eapaAfterRender4 = window.afterRender;
window.afterRender = function(){
  const r = __eapaAfterRender4.apply(this, arguments);
  if(__labObs){ __labObs.disconnect(); __labObs = null; }
  const body = state.view==="tool" && document.getElementById("toolBody");
  if(body){
    labPolish();
    __labObs = new MutationObserver(()=>{ clearTimeout(__labT); __labT = setTimeout(labPolish, 40); });
    __labObs.observe(body, {childList:true, subtree:true});
  }
  return r;
};

/* if the portal already drew itself before this file loaded, redraw with the updates */
if(document.querySelector(".topbar")) render();
