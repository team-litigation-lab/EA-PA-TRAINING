/* ============================================================
   EA / PA — ⧉ Side by side (the tool frame)
   The Case Management course's split screen, ported here and wired to what
   this course has. A page opens in a frame beside the lesson slide, so the
   trainee reads (or works in) it while the slide, its steps and its
   Previous / Next bar stay live on the left. Drag the edge to resize.

     • ⧉ Side by side   — the frame on the right, the course on the left
     • 🖥 Second screen  — the same page in its own window (another screen
                           when the browser can say where one is)
     • ✕ Close          — back to the course alone

   It is available on every day (Day 1 … Day 10): the ⧉ Beside the slide
   button is added to the lesson stage's top bar wherever one is on screen,
   the same way js/portal-link.js adds its buttons, so no day's template has
   to know about it.

   What opens in the pane (this course's own material):
     📖 Day N Lesson Notes   — the full text of every topic (lessonNotesHtml)
     📄 Day N handout        — the day's handout (handoutHtml), or the admin's
                               own file when a link is saved for that day
     📞 Call Simulator       — ☎ LSH Ring Channel, through the Portal's sign-in
     🏠 Training Portal      — the Training Directory
   The Portal's pages carry the Portal's sign-in cookie, which a frame does
   not send, so those two open in their own window / a new tab — the same rule
   the CM course follows for its Portal simulators.

   API (global, same names as the CM course so slide content can call either):
     openPane(key, url, name, icon, mode)        a page by address
     openPaneHTML(key, html, name, icon, mode)   course HTML (Lesson Notes…)
     openTool(id, mode)                          a Portal tool, by id
     closeToolFrame() · eapaToolSplit(on) · eapaToolPop()
   mode: "split" (beside the slide), "full" (over the page), "tab" (new tab),
   or left out to follow the trainee's last choice.
   ============================================================ */
(function(){
"use strict";

var PORTAL = "https://cm-training-activity.pages.dev";
/* The Portal's own pages: they sign the trainee in with the Portal's cookie, which a frame
   does not send, so they open in their own window or a new tab, never in the frame. */
var TOOLS = [
  {id:"calls",  icon:"📞", short:"Call Simulator", name:"Call Simulator (☎ LSH Ring Channel)",
   url: PORTAL + "/api/launch?tool=ringchannel&to=calls&program=EA", ownWindow:true},
  {id:"portal", icon:"🏠", short:"Training Portal", name:"LSH Training Portal · Training Directory",
   url: PORTAL + "/programs.html", ownWindow:true}
];
function tool(id){ for(var i=0;i<TOOLS.length;i++) if(TOOLS[i].id===id) return TOOLS[i]; return null; }

/* ---------------- styles ---------------- */
var css = document.createElement("style");
css.id = "eapa-toolframe-css";
css.textContent = [
"#eapa-toolframe{position:fixed;left:0;right:0;bottom:0;top:0;z-index:9000;background:var(--paper,#F7F6F2);display:flex;flex-direction:column}",
"#eapa-toolframe[hidden]{display:none}",
".eapa-tf-bar{display:flex;gap:10px;align-items:center;padding:6px 14px;background:#F3F4F9;border-bottom:1px solid var(--line);flex-wrap:wrap}",
".eapa-tf-name{flex:1;min-width:0;font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
".eapa-tf-bar .btn-ghost{background:#fff}",
/* the course's top bar stays above the frame: #app is its own stacking layer, so lift it and hide
   everything in it but the top bar while the frame is open. #app's own box still covers the page,
   so let clicks and scrolling pass through it to the frame. */
"body.eapa-tf-open #app{z-index:9001;pointer-events:none}",
"body.eapa-tf-open #app > :not(.topbar):not(.view-mode-strip){visibility:hidden}",
"body.eapa-tf-open #app > .topbar,body.eapa-tf-open #app > .view-mode-strip{pointer-events:auto}",
"body.eapa-tf-open{overflow:hidden}",
".eapa-tf-body{flex:1;position:relative;overflow:hidden}",
".eapa-tf-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff}",
".eapa-tf-body .eapa-tf-page{position:absolute;inset:0;overflow:auto;background:#fff;padding:18px 22px 40px}",
".eapa-tf-body .eapa-tf-page .ho-body{max-width:none}",
/* ⧉ Side by side: the frame on the right, the course still working on the left */
"body.eapa-tf-split #eapa-toolframe{left:auto;width:var(--eapa-tf-w,50vw);border-left:3px solid var(--orange,#DB8437);box-shadow:-10px 0 28px rgba(0,0,0,.2)}",
"body.eapa-tf-split.eapa-tf-open #app > *{pointer-events:auto}",
"body.eapa-tf-split.eapa-tf-open #app > :not(.topbar){box-sizing:border-box;width:auto!important;max-width:calc(100vw - var(--eapa-tf-w,50vw))!important;margin-left:0!important;margin-right:0!important;overflow-x:clip;min-width:0}",
"body.eapa-tf-split.eapa-tf-open #app > :not(.topbar):not(.view-mode-strip){visibility:visible}",
/* the slide takes the whole left side: the presenter figure steps aside until the frame closes */
"body.eapa-tf-split.eapa-tf-open .stage-body{grid-template-columns:minmax(0,1fr)!important}",
"body.eapa-tf-split.eapa-tf-open .stage-body > .stage-presenter{display:none!important}",
"body.eapa-tf-split.eapa-tf-open{overflow:auto}",
".eapa-tf-drag{display:none;position:absolute;left:-7px;top:0;bottom:0;width:12px;cursor:col-resize;z-index:3}",
"body.eapa-tf-split .eapa-tf-drag{display:block}",
"body.eapa-tf-dragging .eapa-tf-body iframe{pointer-events:none}",
".eapa-tf-split-btn[aria-pressed=\"true\"]{background:var(--navy)!important;color:#fff!important}",
/* the lesson stage's own ⧉ button and its menu */
".eapa-beside{position:relative}",
".eapa-beside-menu{position:absolute;right:0;top:calc(100% + 6px);z-index:60;background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:0 14px 34px rgba(31,36,64,.18);padding:6px;min-width:260px;text-align:left}",
".eapa-beside-menu[hidden]{display:none}",
".eapa-beside-menu button{display:flex;align-items:center;gap:8px;width:100%;background:transparent;border:0;border-radius:8px;padding:9px 11px;font:inherit;font-size:13px;color:var(--ink);text-align:left;cursor:pointer;white-space:nowrap}",
".eapa-beside-menu button:hover{background:#F3F4F9}",
".eapa-beside-menu .eapa-beside-h{font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft);padding:7px 11px 3px}",
/* no room to work in two columns: one thing at a time, full width */
"@media (max-width:900px){.eapa-tf-split-btn,.eapa-tf-pop{display:none!important}",
" body.eapa-tf-split #eapa-toolframe{left:0;width:auto;border-left:0}",
" body.eapa-tf-split.eapa-tf-open #app > :not(.topbar){max-width:none!important}",
" body.eapa-tf-split.eapa-tf-open #app > :not(.topbar):not(.view-mode-strip){visibility:hidden}}"
].join("\n");
document.head.appendChild(css);

/* ---------------- the frame (lives outside #app, so render() never reloads it) ---------------- */
var shell = null, current = null;
var panes = {};     // key → {name, icon, url} or {name, icon, html}
var nodes = {};     // key → the iframe / page element in the frame

function lsGet(k, d){ try{ var v = localStorage.getItem(k); return v === null ? d : v; }catch(e){ return d; } }
function lsSet(k, v){ try{ localStorage.setItem(k, v); }catch(e){} }
function canSplit(){ return window.innerWidth > 900; }

function ensureShell(){
  if(shell) return shell;
  shell = document.createElement("div");
  shell.id = "eapa-toolframe"; shell.hidden = true;
  shell.innerHTML = '<div class="eapa-tf-bar"><span class="eapa-tf-name"></span>'
    + '<button class="btn btn-ghost btn-sm eapa-tf-split-btn" onclick="eapaToolSplit()" aria-pressed="false" title="Keep the lesson open beside this">⧉ Side by side</button>'
    + '<button class="btn btn-ghost btn-sm eapa-tf-pop" onclick="eapaToolPop()" title="Open this in its own window, on your second screen if you have one">🖥 Second screen</button>'
    + '<button class="btn btn-ghost btn-sm" onclick="closeToolFrame()">✕ Close</button></div>'
    + '<div class="eapa-tf-body"></div><div class="eapa-tf-drag" title="Drag to resize"></div>';
  document.body.appendChild(shell);
  dragEdge(shell.querySelector(".eapa-tf-drag"));
  // Esc closes a full-page pane; side by side the trainee is working in both, so it stays (✕ Close closes it)
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !shell.hidden && !document.body.classList.contains("eapa-tf-split")) closeToolFrame();
  });
  window.addEventListener("resize", placeFrame);
  // the top bar is never covered: the frame starts under it, and moves when the bar's height changes
  try{
    var tb = document.querySelector(".topbar");
    if(tb && "ResizeObserver" in window) new ResizeObserver(placeFrame).observe(tb);
  }catch(e){}
  return shell;
}

// The frame starts just under the course's top bar.
function placeFrame(){
  if(!shell || shell.hidden) return;
  var tb = document.querySelector(".topbar");
  shell.style.top = (tb ? Math.max(0, Math.round(tb.getBoundingClientRect().bottom)) : 0) + "px";
}

function applySplitWidth(){
  var f = Math.min(0.72, Math.max(0.3, parseFloat(lsGet("eapa-tf-w", "0.5")) || 0.5));
  document.body.style.setProperty("--eapa-tf-w", Math.round(f * 100) + "vw");
}
function setSplit(on){
  on = !!on && canSplit();
  applySplitWidth();
  document.body.classList.toggle("eapa-tf-split", on);
  if(shell) paintShell();
  window.dispatchEvent(new Event("resize"));   // the slide on the left is scaled to its new width (deckRescale)
}
window.eapaToolSplit = function(on){
  var next = on === undefined ? !document.body.classList.contains("eapa-tf-split") : !!on;
  lsSet("eapa-tf-split", next ? "1" : "0");
  setSplit(next);
};

function dragEdge(h){
  if(!h) return;
  h.addEventListener("pointerdown", function(e){
    e.preventDefault(); h.setPointerCapture(e.pointerId); document.body.classList.add("eapa-tf-dragging");
    var move = function(ev){ lsSet("eapa-tf-w", String(Math.min(0.72, Math.max(0.3, 1 - ev.clientX / window.innerWidth)))); applySplitWidth(); };
    var up = function(){
      h.removeEventListener("pointermove", move); h.removeEventListener("pointerup", up);
      document.body.classList.remove("eapa-tf-dragging"); window.dispatchEvent(new Event("resize"));
    };
    h.addEventListener("pointermove", move); h.addEventListener("pointerup", up);
  });
}

function paintShell(){
  var p = panes[current];
  shell.querySelector(".eapa-tf-name").textContent = p ? (p.icon + " " + p.name) : "";
  var sb = shell.querySelector(".eapa-tf-split-btn");
  if(sb) sb.setAttribute("aria-pressed", document.body.classList.contains("eapa-tf-split") ? "true" : "false");
  Object.keys(nodes).forEach(function(k){ nodes[k].style.display = k === current ? "block" : "none"; });
}

function show(key, mode){
  current = key;
  setSplit(mode === "split" || (mode !== "full" && lsGet("eapa-tf-split", "0") === "1"));
  paintShell();
  shell.hidden = false;
  document.body.classList.add("eapa-tf-open");
  if(!document.body.classList.contains("eapa-tf-split")) window.scrollTo(0, 0);
  placeFrame();
}

/* a page by address (a handout file an admin linked, any https page that allows framing) */
window.openPane = function(key, url, name, icon, mode){
  if(mode === "tab"){ window.open(url, "_blank", "noopener"); return; }
  ensureShell();
  panes[key] = {name: name, icon: icon || "📄", url: url};
  if(!nodes[key] || nodes[key].dataset.src !== url){
    if(nodes[key]) nodes[key].remove();
    var f = document.createElement("iframe");
    f.dataset.src = url; f.title = name || ""; f.src = url;
    f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    shell.querySelector(".eapa-tf-body").appendChild(f);
    nodes[key] = f;
  }
  show(key, mode);
};

/* the course's own material (Lesson Notes, a handout): already-built HTML, in the course's own styles */
window.openPaneHTML = function(key, html, name, icon, mode){
  ensureShell();
  panes[key] = {name: name, icon: icon || "📖", html: html};
  if(nodes[key]) nodes[key].remove();
  var d = document.createElement("div");
  d.className = "eapa-tf-page";
  d.innerHTML = '<div class="ho-body">' + html + "</div>";
  shell.querySelector(".eapa-tf-body").appendChild(d);
  nodes[key] = d;
  show(key, mode);
};

/* a Portal tool: ☎ LSH Ring Channel and the Training Directory sign the trainee in with the
   Portal's own cookie, which a frame doesn't send, so they open in their own window / a new tab. */
window.openTool = function(id, mode){
  var t = tool(id); if(!t) return;
  if(t.ownWindow || mode === "tab"){ window.open(t.url, "_blank", "noopener"); return; }
  window.openPane("tool:" + id, t.url, t.name, t.icon, mode);
};

/* the pane in its own window: on another screen when the browser can say where one is (Window
   Management API, after the trainee allows it), else beside this window. The course stays here. */
window.eapaToolPop = async function(){
  var p = panes[current]; if(!p) return;
  var place = {left: window.screenX + window.outerWidth, top: window.screenY, width: Math.round(screen.availWidth / 2), height: screen.availHeight};
  try{
    if("getScreenDetails" in window){
      var sd = await window.getScreenDetails();
      var other = sd.screens.find(function(s){ return s !== sd.currentScreen; });
      if(other) place = {left: other.availLeft, top: other.availTop, width: other.availWidth, height: other.availHeight};
    }
  }catch(e){ /* not allowed or not supported: beside this window */ }
  var feat = "popup,left=" + place.left + ",top=" + place.top + ",width=" + place.width + ",height=" + place.height;
  var w = window.open(p.url || "", "lsh-pane-" + current, feat);
  if(!w){ if(typeof toast === "function") toast("Your browser blocked the new window. Allow pop-ups for this site."); return; }
  if(!p.url){
    // the course's own HTML: the same page, with this site's stylesheet, in the new window
    try{
      var sheets = [].map.call(document.querySelectorAll('link[rel="stylesheet"]'), function(l){ return '<link rel="stylesheet" href="' + l.href + '">'; }).join("");
      var inline = [].map.call(document.querySelectorAll("style"), function(s){ return "<style>" + s.textContent + "</style>"; }).join("");
      w.document.open();
      w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>' + (p.name || "") + "</title>" + sheets + inline
        + '</head><body style="background:#fff"><div class="ho-body" style="padding:18px 22px 40px">' + p.html + "</div></body></html>");
      w.document.close();
    }catch(e){}
  }
  closeToolFrame();
  if(typeof toast === "function") toast(p.name + " is open in its own window: move it to your second screen.");
};

window.closeToolFrame = function(){
  if(!shell) return;
  shell.hidden = true;
  document.body.classList.remove("eapa-tf-open");
  if(document.body.classList.contains("eapa-tf-split")){
    document.body.classList.remove("eapa-tf-split");
    window.dispatchEvent(new Event("resize"));
  }
};

/* ---------------- ⧉ Beside the slide: on every day's lesson stage ----------------
   The lesson page re-renders on every step, so the button is added to whatever
   .ls-top is on screen rather than to the day's template (js/portal-link.js does
   the same for its top-bar buttons). Every day gets it at once. */
function dayOnScreen(){
  if(typeof state === "undefined" || !state || state.view !== "day") return null;
  if(typeof DAYS === "undefined") return null;
  for(var i = 0; i < DAYS.length; i++) if(DAYS[i].id === state.dayId) return DAYS[i];
  return null;
}
function handoutFor(day){
  if(typeof handoutList !== "function") return null;
  var list = handoutList();
  for(var i = 0; i < list.length; i++) if(list[i].day === day) return list[i];
  return null;
}
window.eapaPaneLessonNotes = function(day){
  var d = dayOnScreen(); if(!d || d.id !== day) { d = null; }
  var dd = d || (typeof DAYS !== "undefined" ? DAYS.filter(function(x){ return x.id === day; })[0] : null);
  if(!dd || typeof window.lessonNotesHtml !== "function"){ if(typeof openLessonNotes === "function") openLessonNotes(day); return; }
  openPaneHTML("notes:" + day, '<p class="ho-intro">The full text of every topic on Day ' + day
    + '. The slides show the key lines; this is the complete version to read while you work.</p>'
    + window.lessonNotesHtml(dd), "Day " + day + " Lesson Notes · " + dd.title, "📖", "split");
};
window.eapaPaneHandout = function(day){
  var h = handoutFor(day); if(!h) return;
  var link = typeof handoutLink === "function" ? handoutLink(day) : "";
  if(link){ openPane("handout:" + day, link, "Day " + day + " · " + h.title, h.icon || "📄", "split"); return; }
  if(typeof handoutHtml !== "function"){ if(typeof previewHandout === "function") previewHandout(day); return; }
  openPaneHTML("handout:" + day, handoutHtml(h), "Day " + day + " · " + h.title, h.icon || "📄", "split");
};

function closeMenus(except){
  document.querySelectorAll(".eapa-beside-menu").forEach(function(m){ if(m !== except) m.hidden = true; });
}
document.addEventListener("click", function(e){ if(!e.target.closest(".eapa-beside")) closeMenus(null); });

function buildMenu(day){
  var h = handoutFor(day);
  var html = '<div class="eapa-beside-h">This day</div>'
    + '<button type="button" onclick="eapaPaneLessonNotes(' + day + ')">📖 Day ' + day + ' Lesson Notes</button>';
  if(h) html += '<button type="button" onclick="eapaPaneHandout(' + day + ')">' + (h.icon || "📄") + " " + "Day " + day + " handout</button>";
  html += '<div class="eapa-beside-h">Portal (own window)</div>'
    + TOOLS.map(function(t){ return '<button type="button" onclick="openTool(\'' + t.id + '\')">' + t.icon + " " + t.short + "</button>"; }).join("");
  return html;
}

function paint(){
  if(!canSplit()) return;                       // under 900px there is no room for two columns
  var d = dayOnScreen(); if(!d) return;
  var top = document.querySelector("#lessonStage") ? document.querySelector(".ls-top") : null;
  if(!top || top.querySelector(".eapa-beside")) return;
  var wrap = document.createElement("span");
  wrap.className = "eapa-beside";
  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "btn btn-ghost btn-sm";
  btn.title = "Open the notes, the handout or a tool beside the slide";
  btn.textContent = "⧉ Beside the slide";
  var menu = document.createElement("div");
  menu.className = "eapa-beside-menu"; menu.hidden = true;
  menu.innerHTML = buildMenu(d.id);
  menu.addEventListener("click", function(){ menu.hidden = true; });
  btn.onclick = function(e){ e.stopPropagation(); var open = menu.hidden; closeMenus(menu); menu.hidden = !open; };
  wrap.appendChild(btn); wrap.appendChild(menu);
  // just before ⛶ Full screen, at the right-hand end of the stage's top bar
  var fs = top.querySelector('button[onclick="lessonFullscreen()"]');
  top.insertBefore(wrap, fs || null);
}

var queued = false;
function schedule(){
  if(queued) return;
  queued = true;
  requestAnimationFrame(function(){ queued = false; try{ paint(); }catch(e){} });
}
function start(){
  schedule();
  new MutationObserver(schedule).observe(document.body, {childList:true, subtree:true});
}
if(document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
