/* ============================================================
   🗺 The day's roadmap: the day's agenda slide (Day N · Today's agenda), with every section a way into the deck.

   • ⌂ Roadmap (the bar under a lesson's slide) and ← Back to roadmap (the Knowledge Check's footer) open the day's
     agenda, not the dashboard.
   • On the agenda, each section is a link: it opens that section's first topic in the deck.
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined" || typeof buildDaySlides !== "function") return;
function agendaIndex(d){ const i = buildDaySlides(d).findIndex(s => s && s.type === "agenda"); return i < 0 ? 0 : i; }
// the day's agenda slide (the dashboard if there's no day open)
function roadmap(dayId){
  const d = DAYS.find(x => x.id === (dayId || state.dayId));
  if(!d){ goto("dashboard"); return; }
  if(state.view !== "day" || state.dayId !== d.id) goto("day", d.id);
  state.dayViewMode = "slides"; state.quizSubmitted = false; state.slideInterstitial = null;
  state.lessonSlide = agendaIndex(d); state.slidePage = 0;
  window.scrollTo({top: 0}); render();
}
// a section of the agenda: its first topic's first slide
function openSection(dayId, k){
  const d = DAYS.find(x => x.id === dayId); if(!d || typeof daySections !== "function") return;
  const s = daySections(d)[k]; if(!s || !s.items.length) return;
  const slides = buildDaySlides(d), i = slides.findIndex(x => x && x.type === "topic" && x.lessonIndex === s.items[0]);
  if(i < 0) return;
  if((state.maxSlideReached || 0) < i) state.maxSlideReached = i;
  if(typeof goToSlide === "function") goToSlide(i); else { state.lessonSlide = i; render(); }
}
// the agenda's sections become links into the deck
if(typeof renderDayAgenda === "function"){
  const __agenda = renderDayAgenda;
  renderDayAgenda = window.renderDayAgenda = function(d){
    const out = __agenda.apply(this, arguments);
    if(typeof out !== "string") return out;
    let k = 0;
    return out.replace(/(<ol class="xa-list">)([\s\S]*?)(<\/ol>)/, (_, a, list, z) => a + list.replace(/<li>/g, () => {
      const n = k++; return `<li class="xa-go" role="button" tabindex="0" title="Open this part of the deck" onclick="eapaRoadmap.openSection(${d.id}, ${n})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();eapaRoadmap.openSection(${d.id}, ${n})}">`; }) + z);
  };
}
// ⌂ Roadmap under the slide: the day's agenda
if(typeof dayFootLinksInner === "function"){
  const __foot = dayFootLinksInner;
  dayFootLinksInner = window.dayFootLinksInner = function(){
    return String(__foot.apply(this, arguments)).replace(/onclick="goto\('dashboard'\)" title="Back to the roadmap"/, `onclick="eapaRoadmap.open()" title="The day's roadmap: its agenda"`);
  };
}
window.eapaRoadmap = {open: roadmap, openSection, agendaIndex};

const st = document.createElement("style"); st.id = "eapa-roadmap"; st.textContent = `
.xa-list li.xa-go{cursor:pointer;transition:background .15s, box-shadow .15s;border-radius:12px;}
.xa-list li.xa-go:hover,.xa-list li.xa-go:focus-visible{background:#FFF4E8;box-shadow:inset 4px 0 0 #DB8437;outline:none;}
`;
(document.head || document.documentElement).appendChild(st);
})();
