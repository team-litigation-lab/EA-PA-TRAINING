/* 🎬 A day's narrated video (the Case Management course's ▶ Video, the same viewer): the day's lesson deck as the room
   sees it, each slide spoken by a natural voice from the trainer's speaker notes, compressed (build/video makes it;
   js/eapa-day-videos.js lists them as EAPA_DAY_VIDEOS).
   • The day card shows ▶ Video once a trainer unlocks that day's video, 🔒 Video until then; a trainer always sees ▶.
     settings:openvideos = {all: [dayIds], batches: {"<batch>": [dayIds]}}: everyone reads it (worker.js PUBLIC_READ), only a
     trainer writes it, in Admin → 🛡 Admin Master Control → 🎬 Videos, for one batch or for every batch (as in Case Management).
     The trainee's page reads it on the dashboard, at most every two minutes.
   • The viewer: the video with its captions in a strip under the picture (CC turns them off), a Slide picker to jump to any
     slide, ⏪ / ⏩ 10 s, a speed choice (0.75× to 2×) and ⛶ Full screen. It opens where the viewer left off (kept on this
     device, per day). Remove this file's <script> tag to take the videos off. */
(function(){
"use strict";
const VIDEOS = window.EAPA_DAY_VIDEOS || {};
if(!Object.keys(VIDEOS).length) return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const mmss = t => { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); };
const say = m => { if(typeof toast === "function") toast(m); };
const KEY = "settings:openvideos";
const trainer = () => !!state.isAdmin && !state.adminPreview;
const ids = () => Object.keys(VIDEOS).map(Number).sort((a, b) => a - b);
const nums = a => [...new Set((Array.isArray(a) ? a : []).map(Number).filter(n => VIDEOS[n]))].sort((x, y) => x - y);
const bkey = b => (typeof cleanBatch === "function" ? cleanBatch(b) : String(b || "").trim().toUpperCase()) || "";
const shape = x => { const o = {all: [], batches: {}}; if(!x || typeof x !== "object") return o;
  o.all = nums(x.all); Object.keys(x.batches || {}).forEach(k => { const c = bkey(k) || k, v = nums([].concat(o.batches[c] || [], x.batches[k] || [])); if(v.length) o.batches[c] = v; }); return o; };
state.eaOpenVideos = null;
let loading = null, loadedAt = 0;
const redraw = () => { if(state.view === "dashboard" && !(typeof isTyping === "function" && isTyping()) && !document.querySelector(".overlay")) render(); };
function load(force){
  if(loading || (!force && Date.now() - loadedAt < 120000)) return loading;
  loadedAt = Date.now();
  return loading = Promise.resolve(typeof sharedGet === "function" ? sharedGet(KEY) : null).then(v => {
    loading = null;
    if(v == null && state.eaOpenVideos) return;   // a server blip never locks a video again
    const next = shape(v), ch = JSON.stringify(next) !== JSON.stringify(state.eaOpenVideos);
    state.eaOpenVideos = next; if(ch && !trainer()) redraw();
  }).catch(() => { loading = null; });
}
function unlocked(id){
  if(state.isAdmin) return true;
  load(false);
  const o = state.eaOpenVideos; if(!o) return false;
  return [].concat(o.all, o.batches[bkey(state.traineeBatch)] || []).includes(Number(id));
}

/* ---------- the day card: ▶ Video, or 🔒 Video until the day opens ---------- */
if(typeof moduleCard === "function"){
  const __card = moduleCard;
  moduleCard = window.moduleCard = function(d){
    const html = __card.apply(this, arguments);
    if(!d || !VIDEOS[d.id]) return html;
    const btn = unlocked(d.id)
      ? `<button type="button" class="btn btn-ghost btn-sm module-finish-btn ea-dv-btn" onclick="event.stopPropagation(); eapaDayVideo.open(${d.id})" title="Video Presentation: the day&#39;s slides, narrated">▶ Video</button>`
      : `<button type="button" class="btn btn-ghost btn-sm module-finish-btn ea-dv-btn ea-dv-locked" aria-disabled="true" onclick="event.stopPropagation(); eapaDayVideo.why(${d.id})" title="Opens when your trainer unlocks this video">🔒 Video</button>`;
    // a row of its own across the bottom of the card's button grid (js/eapa-updates.js "Day cards: … one full-width grid")
    const t = document.createElement("template"); t.innerHTML = html.trim();
    const card = t.content.firstElementChild; if(!card) return html;
    (card.querySelector(".mc-grid") || card).insertAdjacentHTML("beforeend", btn);
    return card.outerHTML;
  };
}

/* ---------- the viewer ---------- */
const PREF = "lsh_eapa_day_video", RATES = [0.75, 1, 1.25, 1.5, 1.75, 2];
const readPrefs = () => { let p = null; try{ p = JSON.parse(localStorage.getItem(PREF) || "null"); }catch(e){}
  p = p && typeof p === "object" ? p : {};
  return {pos: p.pos && typeof p.pos === "object" ? p.pos : {}, rate: RATES.includes(Number(p.rate)) ? Number(p.rate) : 1, cc: p.cc !== false}; };
let prefs = readPrefs(), curId = null, lastSave = 0;
const save = () => { lastSave = Date.now(); try{ localStorage.setItem(PREF, JSON.stringify(prefs)); }catch(e){} };
const vEl = () => { const o = document.getElementById("ea-dv"); return o && o.querySelector("video"); };
function keepPlace(force){
  const v = vEl(); if(!v || curId == null) return;
  const t = v.currentTime || 0, d = v.duration;
  if(t < 5 || (d > 0 && t > d - 10)) delete prefs.pos[curId]; else prefs.pos[curId] = Math.floor(t);
  if(force || Date.now() - lastSave > 5000) save();
}
const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement || null;
const exitFs = () => { const f = document.exitFullscreen || document.webkitExitFullscreen; if(f){ try{ const p = f.call(document); if(p && p.catch) p.catch(() => {}); }catch(e){} } };
function fullscreen(){
  const o = document.getElementById("ea-dv"); if(!o) return;
  if(fsEl()){ exitFs(); return; }
  const box = o.querySelector(".ea-dv-box"), v = o.querySelector("video");
  const go = box.requestFullscreen || box.webkitRequestFullscreen;
  if(go){ try{ const p = go.call(box); if(p && p.catch) p.catch(() => { if(v.webkitEnterFullscreen) v.webkitEnterFullscreen(); }); }catch(e){} }
  else if(v.webkitEnterFullscreen) v.webkitEnterFullscreen();   // iPhone: only the video itself can go full screen
}
function onFs(){
  const o = document.getElementById("ea-dv"); if(!o) return;
  const f = fsEl(), on = !!f && o.contains(f), b = o.querySelector(".ea-dv-fs");
  o.classList.toggle("ea-dv-isfs", on);
  if(b){ b.textContent = on ? "🗗 Exit full screen" : "⛶ Full screen"; b.setAttribute("aria-pressed", on ? "true" : "false"); }
}
document.addEventListener("fullscreenchange", onFs); document.addEventListener("webkitfullscreenchange", onFs);
function close(){
  const o = document.getElementById("ea-dv"); if(!o) return;
  const v = o.querySelector("video"); if(v){ try{ v.pause(); }catch(e){} keepPlace(true); }
  if(fsEl() && o.contains(fsEl())) exitFs();
  o.remove(); curId = null; document.removeEventListener("keydown", onKey, true);
}
function onKey(ev){
  const at = ev.target && ev.target.closest ? ev.target : null, inCtl = at && at.closest("select, input, textarea, button, video");
  if((ev.key === "ArrowLeft" || ev.key === "ArrowRight") && !inCtl && !ev.altKey && !ev.ctrlKey && !ev.metaKey){ ev.preventDefault(); ev.stopPropagation(); skip(ev.key === "ArrowLeft" ? -10 : 10); return; }
  if(ev.key === " " && !inCtl){ const v = vEl(); if(v){ ev.preventDefault(); ev.stopPropagation(); if(v.paused){ const p = v.play(); if(p && p.catch) p.catch(() => {}); } else v.pause(); } return; }
  if(ev.key !== "Escape") return;
  ev.stopPropagation();
  if(fsEl()){ exitFs(); return; }   // Esc first leaves full screen; a second Esc closes the viewer
  close();
}
function showCc(){
  const o = document.getElementById("ea-dv"), v = o && o.querySelector("video"), box = o && o.querySelector(".ea-dv-cc"); if(!box) return;
  const tr = v.textTracks && v.textTracks[0]; let cues = [];
  if(tr){
    cues = tr.activeCues ? [...tr.activeCues] : [];
    if(!cues.length && tr.cues){ const t = v.currentTime; cues = [...tr.cues].filter(c => c.startTime <= t && c.endTime > t); }
  }
  const html = cues.map(c => E(String(c.text || "").replace(/<[^>]*>/g, "")).replace(/\n/g, "<br>")).join("<br>");
  if(box.innerHTML !== html) box.innerHTML = html;
}
function ccUi(o){
  o.classList.toggle("ea-dv-nocc", !prefs.cc);
  const b = o.querySelector(".ea-dv-ccbtn"); if(b){ b.setAttribute("aria-pressed", prefs.cc ? "true" : "false"); b.title = prefs.cc ? "Hide the captions" : "Show the captions"; }
}
function setCc(on){ prefs.cc = !!on; save(); const o = document.getElementById("ea-dv"); if(o) ccUi(o); }
function rateUi(o){
  const v = o.querySelector("video"); if(v){ v.defaultPlaybackRate = prefs.rate; v.playbackRate = prefs.rate; }
  const s = o.querySelector(".ea-dv-rate"); if(s && Number(s.value) !== prefs.rate) s.value = String(prefs.rate);
}
function setRate(r){ r = Number(r); if(!RATES.includes(r)) return; prefs.rate = r; save(); const o = document.getElementById("ea-dv"); if(o) rateUi(o); }
function startOver(){
  const o = document.getElementById("ea-dv"), v = vEl(); if(!v) return;
  v.currentTime = 0; if(curId != null) delete prefs.pos[curId]; save();
  const n = o.querySelector(".ea-dv-resume"); if(n) n.hidden = true;
  if(o._mark) o._mark(); showCc();
  const p = v.play(); if(p && p.catch) p.catch(() => {});
}
function open(id){
  const vid = VIDEOS[id]; if(!vid) return;
  if(!unlocked(id)) return why(id);
  close();
  curId = Number(id); prefs = readPrefs();
  const o = document.createElement("div");
  o.id = "ea-dv"; o.className = "overlay ea-dv"; o.setAttribute("role", "dialog"); o.setAttribute("aria-modal", "true"); o.setAttribute("aria-label", vid.title + ": Video Presentation");
  o.innerHTML = `<div class="ea-dv-box">
    <div class="ea-dv-head"><h2>🎬 ${E(vid.title)} <span>Video Presentation · ${E(mmss(vid.duration || 0))}</span></h2>
      <span class="ea-dv-resume" hidden>Resumed at <b></b> · <button type="button" onclick="eapaDayVideo.startOver()">↺ Start over</button></span>
      <label class="ea-dv-ctl ea-dv-jump">Slide <select class="ea-dv-slide" aria-label="Go to a slide" onchange="eapaDayVideo.seek(+this.value)">${vid.chapters.map((c, i) => `<option value="${i}">${c.slide}. ${E(c.title)}</option>`).join("")}</select></label>
      <button type="button" class="ea-dv-ctl ea-dv-skip" onclick="eapaDayVideo.skip(-10)" title="Back 10 seconds (←)" aria-label="Back 10 seconds">⏪ 10s</button>
      <button type="button" class="ea-dv-ctl ea-dv-skip" onclick="eapaDayVideo.skip(10)" title="Forward 10 seconds (→)" aria-label="Forward 10 seconds">10s ⏩</button>
      <label class="ea-dv-ctl ea-dv-speed">Speed <select class="ea-dv-rate" aria-label="Playback speed" onchange="eapaDayVideo.setRate(this.value)">${RATES.map(r => `<option value="${r}">${r}×</option>`).join("")}</select></label>
      <button type="button" class="ea-dv-ctl ea-dv-ccbtn" aria-pressed="true" onclick="eapaDayVideo.setCc(!eapaDayVideo.prefs().cc)">CC</button>
      <button type="button" class="ea-dv-ctl ea-dv-fs" aria-pressed="false" onclick="eapaDayVideo.fullscreen()" title="Fill the screen with the video and its captions">⛶ Full screen</button>
      <button type="button" class="ea-dv-x" onclick="eapaDayVideo.close()" aria-label="Close the video">✕</button></div>
    <div class="ea-dv-stage"><video controls playsinline preload="metadata" controlslist="nofullscreen" disablepictureinpicture src="${E(vid.src)}"><track kind="captions" srclang="en" label="English" src="${E(vid.captions)}" default></video>
      <div class="ea-dv-cc" aria-live="off"></div></div></div>`;
  o.addEventListener("mousedown", ev => { if(ev.target === o) close(); });
  document.body.appendChild(o);
  ccUi(o); rateUi(o);
  const v = o.querySelector("video"), pick = o.querySelector(".ea-dv-slide");
  let cur = -1;
  const mark = o._mark = () => {
    let i = 0; while(i + 1 < vid.chapters.length && vid.chapters[i + 1].t <= v.currentTime + 0.05) i++;
    if(i === cur) return; cur = i;
    if(document.activeElement !== pick) pick.value = String(i);
  };
  v.addEventListener("timeupdate", () => { mark(); keepPlace(false); });
  v.addEventListener("seeked", () => { mark(); showCc(); keepPlace(true); });
  v.addEventListener("pause", () => keepPlace(true));
  v.addEventListener("ended", () => { if(curId != null){ delete prefs.pos[curId]; save(); } });
  v.addEventListener("loadedmetadata", () => rateUi(o));
  v.addEventListener("dblclick", ev => { ev.preventDefault(); fullscreen(); });
  // the captions are never drawn on the slide: the strip under it shows them
  const tr = v.textTracks && v.textTracks[0];
  if(tr){
    tr.mode = "hidden";
    tr.addEventListener("cuechange", showCc);
    const el = v.querySelector("track"); if(el) el.addEventListener("load", () => { if(tr.mode !== "hidden") tr.mode = "hidden"; showCc(); });
    v.textTracks.addEventListener("change", () => {
      if(v.classList.contains("ea-dv-native")) return;
      if(tr.mode === "showing"){ tr.mode = "hidden"; if(!prefs.cc) setCc(true); }
      else if(tr.mode === "disabled"){ tr.mode = "hidden"; if(prefs.cc) setCc(false); }
    });
    v.addEventListener("webkitbeginfullscreen", () => { v.classList.add("ea-dv-native"); if(prefs.cc) tr.mode = "showing"; });
    v.addEventListener("webkitendfullscreen", () => { v.classList.remove("ea-dv-native"); tr.mode = "hidden"; showCc(); });
  }
  document.addEventListener("keydown", onKey, true);
  o.querySelector(".ea-dv-x").focus();
  const at = Number(prefs.pos[id]) || 0;
  if(at >= 5){
    const go = () => { v.currentTime = at; mark(); showCc(); };
    if(v.readyState >= 1) go(); else v.addEventListener("loadedmetadata", go, {once: true});
    const n = o.querySelector(".ea-dv-resume"); n.querySelector("b").textContent = mmss(at); n.hidden = false;
  }
}
function seek(i){
  const o = document.getElementById("ea-dv"), v = vEl(); if(!v || curId == null) return;
  const c = VIDEOS[curId] && VIDEOS[curId].chapters[i]; if(!c) return;
  v.currentTime = c.t + 0.05; if(o._mark) o._mark(); showCc(); keepPlace(true);
  const n = o.querySelector(".ea-dv-resume"); if(n) n.hidden = true;
  const p = v.play(); if(p && p.catch) p.catch(() => {});
}
function skip(sec){
  const o = document.getElementById("ea-dv"), v = vEl(); if(!o || !v || curId == null) return;
  const d = v.duration, to = Math.max(0, (v.currentTime || 0) + sec);
  v.currentTime = d > 0 ? Math.min(to, Math.max(0, d - 0.5)) : to;
  if(o._mark) o._mark(); showCc(); keepPlace(true);
  const n = o.querySelector(".ea-dv-resume"); if(n) n.hidden = true;
}
window.addEventListener("pagehide", () => keepPlace(true));
document.addEventListener("visibilitychange", () => { if(document.visibilityState === "hidden") keepPlace(true); });
const why = id => { load(true); say(`🔒 Your trainer unlocks the Day ${id} video for your batch. It opens here soon after.`); };

/* ---------- Admin → 🛡 Admin Master Control → 🎬 Videos ---------- */
state.eaVidBatch = state.eaVidBatch || "__all__";
const batchesAll = () => { try{ return typeof bfKeys === "function" ? bfKeys() : [...new Set((state.adminData || []).map(batchKey))].sort(); }catch(e){ return []; } };
function adminPage(){
  if(state.eaOpenVideos === null){ load(true).then(() => { if(state.view === "admin" && state.adminTab === "videos") render(); }); }
  // the batch list comes from the trainee ledger: read it once if this is the first admin page opened
  if(!state.adminData && !state.adminLoading && !state.eaVidLedger && typeof loadAdminLedger === "function"){
    state.eaVidLedger = true; Promise.resolve(loadAdminLedger()).then(() => { if(state.view === "admin" && state.adminTab === "videos") render(); }).catch(() => {});
  }
  const o = state.eaOpenVideos;
  const noB = typeof NO_BATCH !== "undefined" ? NO_BATCH : "__none__";
  const bs = batchesAll().filter(k => k !== noB);
  const sel = state.eaVidBatch === "__all__" || bs.includes(state.eaVidBatch) ? state.eaVidBatch : "__all__";
  const forAll = sel === "__all__";
  const on = id => !!o && (forAll ? o.all : (o.batches[sel] || [])).includes(id);
  const via = id => !forAll && !!o && o.all.includes(id);
  const cards = ids().map(id => { const v = VIDEOS[id], a = via(id), c = a || on(id);
    return `<label class="ea-dv-day ${c ? "on" : ""} ${a ? "via" : ""}"><input type="checkbox" ${c ? "checked" : ""} ${a || !o ? "disabled" : ""} onchange="eapaDayVideo.toggle(${id}, this.checked)">
      <span><b>Day ${id} · ${E(mmss(v.duration || 0))}</b>${E(String(v.title || "").replace(/^Day \d+ — /, ""))}${a ? "<small>Unlocked for every batch</small>" : ""}</span></label>`; }).join("");
  return `<div class="card ea-dv-admin"><h3 style="margin:0 0 6px;">🎬 Unlock Videos</h3>
    <p class="ea-dv-help">Each day's narrated Video Presentation shows on the trainee's day card as <b>🔒 Video</b> until you unlock it here, then <b>▶ Video</b> (within two minutes). Trainers always see every video.</p>
    <div class="ea-dv-bar"><label>For <select onchange="eapaDayVideo.pickBatch(this.value)"><option value="__all__" ${forAll ? "selected" : ""}>Every batch</option>${bs.map(k => `<option value="${E(k)}" ${k === sel ? "selected" : ""}>Batch ${E(k)}</option>`).join("")}</select></label>
      <button type="button" class="btn btn-ghost btn-sm" ${o ? "" : "disabled"} onclick="eapaDayVideo.setAll(true)">Unlock all</button>
      <button type="button" class="btn btn-ghost btn-sm" ${o ? "" : "disabled"} onclick="eapaDayVideo.setAll(false)">Lock all</button>
      <button type="button" class="btn btn-ghost btn-sm" onclick="eapaDayVideo.preview()">▶ Preview a video</button></div>
    ${o ? `<div class="ea-dv-days">${cards}</div>` : `<p class="ea-dv-help">Reading which videos are unlocked…</p>`}</div>`;
}
async function saveOpen(next){
  const prev = state.eaOpenVideos; state.eaOpenVideos = shape(next); render();
  try{ await sharedSet(KEY, state.eaOpenVideos); say("🎬 Saved — trainees see it within two minutes."); }
  catch(e){ state.eaOpenVideos = prev; render(); say("Couldn't save — check your connection and try again."); }
}
function toggle(id, yes){
  const o = shape(state.eaOpenVideos), sel = state.eaVidBatch;
  const list = sel === "__all__" ? o.all : (o.batches[sel] = o.batches[sel] || []);
  const i = list.indexOf(id); if(yes && i < 0) list.push(id); if(!yes && i >= 0) list.splice(i, 1);
  saveOpen(o);
}
function setAll(yes){
  const o = shape(state.eaOpenVideos), sel = state.eaVidBatch;
  if(sel === "__all__") o.all = yes ? ids() : []; else o.batches[sel] = yes ? ids() : [];
  saveOpen(o);
}
function pickBatch(k){ state.eaVidBatch = k; render(); }
function preview(){ const id = ids()[0]; if(id) open(id); }
if(typeof renderAdmin === "function"){
  const __admin = renderAdmin;
  renderAdmin = window.renderAdmin = function(){
    if(!state.isAdmin) return __admin.apply(this, arguments);
    const mine = state.adminTab === "videos";
    if(mine) state.adminTab = "audit";
    let out = __admin.apply(this, arguments);
    if(mine) state.adminTab = "videos";
    // the 🎬 Videos tab on the Admin Master Control strip (not on the Scorecard page, which has no strip)
    const m = /<div class="admin-tabs[^"]*"[^>]*>[\s\S]*?<\/div>/.exec(out);
    if(!m) return out;
    const base = mine ? m[0].replace(/admin-tab-btn active/g, "admin-tab-btn") : m[0];
    const strip = base.replace(/<\/div>$/, `<button class="admin-tab-btn ${mine ? "active" : ""}" onclick="setAdminTab('videos')">🎬 Videos</button></div>`);
    return out.slice(0, m.index) + strip + (mine ? adminPage() : out.slice(m.index + m[0].length));
  };
}
window.eapaDayVideo = {open, close, seek, skip, setRate, setCc, startOver, fullscreen, why, toggle, setAll, pickBatch, preview, prefs: () => prefs, videos: VIDEOS};

const css = document.createElement("style");
css.textContent = `
.module-card > .ea-dv-btn{margin-top:6px;}
.dash-main .module-card.mc-clean .mc-grid > button.ea-dv-btn{grid-column:span 6;order:3;border-right:0 !important;color:#A34E14;font-weight:700;}
.ea-dv-locked{opacity:.75;cursor:help;}
.ea-dv.overlay{position:fixed;inset:0;z-index:4000;display:flex;align-items:center;justify-content:center;background:rgba(15,18,36,.78);padding:16px;}
.ea-dv-box{background:#1E2340;color:#fff;border-radius:14px;width:min(1500px,100%);max-height:100%;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 18px 60px rgba(0,0,0,.5);}
.ea-dv-head{display:flex;align-items:center;gap:12px;padding:12px 18px;border-bottom:3px solid #DB8437;}
.ea-dv-head h2{margin:0;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:700 20px/1.25 'Poppins','Inter',sans-serif;color:#fff;}
.ea-dv-head h2 span{color:#F0B27A;font-size:16px;margin-left:8px;}
.ea-dv-x{font:700 18px/1 inherit;width:40px;height:40px;border-radius:50%;border:2px solid #fff;background:transparent;color:#fff;cursor:pointer;flex:0 0 auto;}
.ea-dv-x:hover,.ea-dv-x:focus-visible{background:var(--gold);border-color:#e0a43a;color:var(--gold-ink);outline:none;}
.ea-dv-stage{background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0;flex:1;}
.ea-dv-stage video{display:block;width:100%;max-height:calc(100vh - 110px - 76px);aspect-ratio:16/9;background:#000;}
.ea-dv-stage video::cue{color:transparent;background:transparent;}
.ea-dv-stage video.ea-dv-native::cue{color:#fff;background:rgba(0,0,0,.8);}
.ea-dv-cc{box-sizing:border-box;width:100%;min-height:76px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;padding:6px 18px;background:#000;color:#fff;text-align:center;font:700 19px/1.3 'Inter',sans-serif;overflow:hidden;}
.ea-dv-nocc .ea-dv-cc{display:none;}
.ea-dv-nocc .ea-dv-stage video{max-height:calc(100vh - 110px);}
.ea-dv-ctl{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 12px;border:2px solid #fff;border-radius:20px;background:transparent;color:#fff;font:700 16px/1 'Inter',sans-serif;cursor:pointer;white-space:nowrap;}
.ea-dv-ctl:hover,.ea-dv-ctl:focus-visible,.ea-dv-ctl:focus-within{border-color:#DB8437;outline:none;}
button.ea-dv-ctl:hover,button.ea-dv-ctl:focus-visible{background:var(--gold);color:var(--gold-ink);}
.ea-dv-ccbtn[aria-pressed=true]{background:#fff;color:#1E2340;}
.ea-dv-slide{max-width:min(320px,30vw);font:700 16px/1 'Inter',sans-serif;color:#1E2340;background:#fff;border:0;border-radius:6px;padding:4px 6px;cursor:pointer;}
.ea-dv-skip{padding:0 10px;}
.ea-dv-rate{font:700 16px/1 'Inter',sans-serif;color:#1E2340;background:#fff;border:0;border-radius:6px;padding:4px 6px;cursor:pointer;}
.ea-dv-resume{display:inline-flex;align-items:center;gap:6px;font:700 16px/1.2 'Inter',sans-serif;color:#F0B27A;white-space:nowrap;}
.ea-dv-resume[hidden]{display:none;}
.ea-dv-resume b{color:#fff;}
.ea-dv-resume button{font:700 16px/1 'Inter',sans-serif;color:#fff;background:transparent;border:0;border-bottom:2px solid #DB8437;padding:2px 0;cursor:pointer;}
.ea-dv-box:fullscreen{width:100%;height:100%;max-height:none;border-radius:0;}
.ea-dv-box:-webkit-full-screen{width:100%;height:100%;max-height:none;border-radius:0;}
.ea-dv-isfs .ea-dv-stage video{max-height:calc(100vh - 70px - 76px);}
.ea-dv-isfs.ea-dv-nocc .ea-dv-stage video{max-height:calc(100vh - 70px);}
.ea-dv-admin{padding:20px 22px;}
.ea-dv-help{color:var(--ink-soft);font-size:14px;line-height:1.5;margin:0 0 12px;}
.ea-dv-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:0 0 14px;}
.ea-dv-bar select{font:600 14px/1 inherit;padding:6px 8px;border:1px solid var(--line);border-radius:8px;margin-left:6px;}
.ea-dv-days{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;}
.ea-dv-day{display:flex;gap:10px;align-items:flex-start;border:2px solid var(--line);border-radius:12px;padding:14px;font-size:14px;line-height:1.4;color:#262B45;background:#fff;cursor:pointer;min-height:64px;}
.ea-dv-day input[type=checkbox]{width:18px;height:18px;margin-top:2px;flex:0 0 auto;accent-color:#DB8437;}
.ea-dv-day.on{border-color:var(--orange);background:#FFF6EC;}
.ea-dv-day.via{cursor:default;}
.ea-dv-day b{display:block;color:var(--navy);font-weight:800;font-size:15px;}
.ea-dv-day small{display:block;margin-top:4px;font-size:13px;font-weight:700;color:#A34E14;}
@media (max-width:1100px){ .ea-dv-head{flex-wrap:wrap;} .ea-dv-head h2{flex-basis:100%;order:-1;white-space:normal;}
  .ea-dv-stage video{max-height:calc(100vh - 160px - 76px);} .ea-dv-nocc .ea-dv-stage video{max-height:calc(100vh - 160px);} }
@media (max-width:760px){ .ea-dv.overlay{padding:0;} .ea-dv-box{border-radius:0;height:100%;} .ea-dv-head{gap:8px;padding:10px 12px;}
  .ea-dv-ctl{height:36px;font-size:14px;padding:0 10px;} .ea-dv-slide{max-width:46vw;font-size:14px;} .ea-dv-stage video{max-height:52vh;}
  .ea-dv-cc{min-height:64px;font-size:16px;} }
`;
document.head.appendChild(css);
})();
