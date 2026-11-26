/* 🎬 A day's narrated video (the Case Management course's ▶ Video, the same viewer): the day's lesson deck as the room
   sees it, each slide spoken by a natural voice from the trainer's speaker notes, compressed (build/video makes it;
   js/eapa-day-videos.js lists them as EAPA_DAY_VIDEOS).
   • The day card shows ▶ Video once the day is open to the trainee (dayUnlocked), 🔒 Video until then. A trainer always sees ▶.
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
const unlocked = id => !!(state.isAdmin || state.adminPreview || (typeof dayUnlocked === "function" && dayUnlocked(id)));

/* ---------- the day card: ▶ Video, or 🔒 Video until the day opens ---------- */
if(typeof moduleCard === "function"){
  const __card = moduleCard;
  moduleCard = window.moduleCard = function(d){
    const html = __card.apply(this, arguments);
    if(!d || !VIDEOS[d.id]) return html;
    const btn = unlocked(d.id)
      ? `<button type="button" class="btn btn-ghost btn-sm module-finish-btn ea-dv-btn" onclick="event.stopPropagation(); eapaDayVideo.open(${d.id})" title="Video Presentation: the day&#39;s slides, narrated">▶ Video</button>`
      : `<button type="button" class="btn btn-ghost btn-sm module-finish-btn ea-dv-btn ea-dv-locked" aria-disabled="true" onclick="event.stopPropagation(); eapaDayVideo.why(${d.id})" title="Opens with the day">🔒 Video</button>`;
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
const why = id => say(`🔒 The Day ${id} video opens with Day ${id}.`);
window.eapaDayVideo = {open, close, seek, skip, setRate, setCc, startOver, fullscreen, why, prefs: () => prefs, videos: VIDEOS};

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
.ea-dv-x:hover,.ea-dv-x:focus-visible{background:#DB8437;border-color:#DB8437;outline:none;}
.ea-dv-stage{background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0;flex:1;}
.ea-dv-stage video{display:block;width:100%;max-height:calc(100vh - 110px - 76px);aspect-ratio:16/9;background:#000;}
.ea-dv-stage video::cue{color:transparent;background:transparent;}
.ea-dv-stage video.ea-dv-native::cue{color:#fff;background:rgba(0,0,0,.8);}
.ea-dv-cc{box-sizing:border-box;width:100%;min-height:76px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;padding:6px 18px;background:#000;color:#fff;text-align:center;font:700 19px/1.3 'Inter',sans-serif;overflow:hidden;}
.ea-dv-nocc .ea-dv-cc{display:none;}
.ea-dv-nocc .ea-dv-stage video{max-height:calc(100vh - 110px);}
.ea-dv-ctl{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 12px;border:2px solid #fff;border-radius:20px;background:transparent;color:#fff;font:700 16px/1 'Inter',sans-serif;cursor:pointer;white-space:nowrap;}
.ea-dv-ctl:hover,.ea-dv-ctl:focus-visible,.ea-dv-ctl:focus-within{border-color:#DB8437;outline:none;}
button.ea-dv-ctl:hover,button.ea-dv-ctl:focus-visible{background:#DB8437;}
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
@media (max-width:1100px){ .ea-dv-head{flex-wrap:wrap;} .ea-dv-head h2{flex-basis:100%;order:-1;white-space:normal;}
  .ea-dv-stage video{max-height:calc(100vh - 160px - 76px);} .ea-dv-nocc .ea-dv-stage video{max-height:calc(100vh - 160px);} }
@media (max-width:760px){ .ea-dv.overlay{padding:0;} .ea-dv-box{border-radius:0;height:100%;} .ea-dv-head{gap:8px;padding:10px 12px;}
  .ea-dv-ctl{height:36px;font-size:14px;padding:0 10px;} .ea-dv-slide{max-width:46vw;font-size:14px;} .ea-dv-stage video{max-height:52vh;}
  .ea-dv-cc{min-height:64px;font-size:16px;} }
`;
document.head.appendChild(css);
})();
