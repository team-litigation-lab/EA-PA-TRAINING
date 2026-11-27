/* ============================================================
   🛡 The Admin screen in sections, the Foundational Training and Case Management way.

   Two section pills: 🏅 Scorecard and 🛡 Admin Master Control. Every admin tab keeps its own render function; this
   file wraps renderAdmin and puts the tabs in their sections.
     🏅 Scorecard            ONE page for a batch (the default): a navy banner with every admin button in it — the batch,
                             Include archived, 🔄 Refresh, ⬇ Records (CSV), ⬇ Full backup (JSON), ⬇ Cohort Report,
                             📦 Archive / ↩ Restore the batch, and 🙋 who asked for more attempts — then, one under the other,
                             👥 the trainees table (each row's buttons all in view: View Detail, ✍ Feedback, 🎓 Certificate,
                             ↺ Reset Attempts, ♻ Restore, Revoke — no "More ▾"), in sub-tabs: 🏅 Scorecards · 🏆 Rankings &
                             Progress Report (the Rankings, then 📊 the Progress Report in the Case Management format —
                             Strength, Challenges and the General Attribute Rating a general summary, no detail of a piece
                             of work) · 👥 Trainees & Actions (with 📈 Activities) · 💬 Trainee Feedback. The old Rankings tab
                             opens the Rankings & Progress Report; the old Trainee Feedback tab opens this page.
     🛡 Admin Master Control Settings & Reports (audit), 📁 Batch Folders (batches), 📋 SOP Reference (sop), ✏️ Content Studio
                             (studio), and any tab another script adds.
   The tables take the Foundational / Case Management look: solid white, a navy header with the orange rule.
   Every 🛡 Admin Master Control tab takes the Scorecard's look too (elite()): the tab's own heading and its buttons become
   the same navy banner, the tab strip is the Scorecard's underlined sub-tabs, and the tab's content sits in one solid
   white panel (no frosted glass over the photo). It wraps renderAdmin last, once every script has loaded, so a tab added
   by another script (🎬 Videos) gets it as well.
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined" || typeof renderAdmin !== "function") return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
const Q = s => E(String(s == null ? "" : s).replace(/\\/g, "\\\\").replace(/'/g, "\\'"));
const KICKER = "Legal Support Help · EA / PA Training";
const MERGED = ["rankings", "tfeedback", "scorecard"];   // (tabs that open the 🏅 Scorecard page)
const ADMIN_TABS = [["audit", "⚙ Settings & Reports"], ["batches", "📁 Batch Folders"], ["sop", "📋 SOP Reference"], ["studio", "✏️ Content Studio"]];

const keysAll = () => typeof bfKeys === "function" ? bfKeys()
  : Array.from(new Set((state.adminData || []).map(batchKey))).sort();
const isArch = k => typeof bfIsArchived === "function" ? bfIsArchived(k) : false;
// (a Batch ID is B + MMDDYY: the newest batch with trainees still in it is the one a trainer opens on)
const dateOf = k => { const m = /^B?(\d{2})(\d{2})(\d{2})$/i.exec(String(k || "")); return m ? `20${m[3]}${m[1]}${m[2]}` : ""; };
function pickBatch(){
  const keys = keysAll().filter(k => k !== (typeof NO_BATCH !== "undefined" ? NO_BATCH : "__none__") || keysAll().length === 1);
  if(state.scBatch && keysAll().includes(state.scBatch)) return state.scBatch;
  const live = keys.filter(k => !isArch(k));
  const by = (live.length ? live : keys).slice().sort((a, b) => dateOf(b).localeCompare(dateOf(a)) || String(b).localeCompare(String(a)));
  return by[0] || null;
}
const askedOf = r => !!(r && r.labResetRequestedAt && (!r.labAttemptsResetAt || r.labResetRequestedAt > r.labAttemptsResetAt));
// a page's own heading (eyebrow + h1 + its intro line) taken off, for a part shown under the Scorecard's own headings
const bare = html => String(html || "").replace(/^\s*<p class="eyebrow">[^<]*<\/p>\s*<h1[^>]*>[\s\S]*?<\/h1>\s*(<p style="color:var\(--ink-soft\)[^>]*>[\s\S]*?<\/p>)?/, "");

function pills(sec){
  return `<div class="eash-pills" role="tablist">
    <button type="button" class="eash-pill ${sec === "scorecard" ? "on" : ""}" onclick="EAPAShell.go('scorecard')">🏅 Scorecard</button>
    <button type="button" class="eash-pill ${sec === "admin" ? "on" : ""}" onclick="EAPAShell.go('audit')">🛡 Admin Master Control</button></div>`;
}
function adminTabs(tab){
  return `<div class="admin-tabs eash-tabs eash-subs">${ADMIN_TABS.map(([id, l]) => `<button class="admin-tab-btn eash-sub-b ${tab === id ? "active on" : ""}" onclick="EAPAShell.go('${id}')">${l}</button>`).join("")}</div>`;
}

function scorecardHtml(){
  if(state.adminLoading || !state.adminData){
    return `<div class="card" style="padding:40px;text-align:center;color:var(--ink-soft);">Loading trainee ledger…</div>`;
  }
  if(!state.tfbAdmin && typeof loadTraineeFeedbackAdmin === "function") setTimeout(() => loadTraineeFeedbackAdmin(), 0);
  const k = pickBatch();
  if(!k) return `<div class="eash-banner"><p class="eash-k">${KICKER}</p><h2>🏅 Scorecard</h2></div><div class="empty-note">No trainees yet — a batch appears here as trainees register.</div>`;
  state.batchFolder = k; state.scFolder = k;
  const members = typeof batchMembers === "function" ? batchMembers(k) : [];
  const all = (state.adminData || []).filter(r => batchKey(r) === k), arch = isArch(k);
  const asked = members.filter(askedOf);
  const kq = Q(k);
  const opts = keysAll().map(x => `<option value="${E(x)}" ${x === k ? "selected" : ""}>${E(folderLabel(x))}${isArch(x) ? " (archived)" : ""}</option>`).join("");
  const cardsSub = !!window.EAPACM && (!state.scSub || state.scSub === "cards");
  const banner = `<div class="eash-banner">
      <div class="eash-banner-t"><p class="eash-k">${KICKER}</p><h2>🏅 Scorecard · ${E(folderLabel(k))}</h2>
        <p class="eash-sub">${members.length} trainee${members.length === 1 ? "" : "s"}${all.length > members.length ? ` · ${all.length - members.length} archived hidden` : ""}${arch ? " · 🗄 archived batch" : ""}</p></div>
      <div class="eash-acts">
        <label class="eash-f">Batch <select onchange="EAPAShell.batch(this.value)">${opts}</select></label>
        ${cardsSub && window.EAPACM && EAPACM.picker ? EAPACM.picker(k) : ""}
        ${arch ? "" : `<label class="eash-chk"><input type="checkbox" ${state.batchShowArchived ? "checked" : ""} onchange="state.batchShowArchived=this.checked;render()"> Include archived</label>`}
        <button class="btn btn-sm eash-b" onclick="refreshAdminData();if(typeof loadTraineeFeedbackAdmin==='function')loadTraineeFeedbackAdmin()">🔄 Refresh</button>
        ${typeof bfExportCsv === "function" ? `<button class="btn btn-sm eash-b" onclick="bfExportCsv('${kq}')" title="Spreadsheet of every trainee's progress and scores">⬇ Records (CSV)</button>` : ""}
        ${typeof bfExportJson === "function" ? `<button class="btn btn-sm eash-b" onclick="bfExportJson('${kq}')" title="Complete backup of this batch's records and feedback">⬇ Full backup (JSON)</button>` : ""}
        <button class="btn btn-sm eash-b" onclick="EAPAShell.progressCsv('${kq}')">⬇ Progress Report (CSV)</button>
        ${typeof downloadCohortPdf === "function" ? `<button class="btn btn-sm eash-b" onclick="downloadCohortPdf()">⬇ Cohort Report</button>` : ""}
        ${arch ? (typeof confirmUnarchiveBatch === "function" ? `<button class="btn btn-sm eash-o" onclick="confirmUnarchiveBatch('${kq}')">↩ Restore batch</button>` : "")
          : k !== NO_BATCH && members.some(r => !r.archived) ? `<button class="btn btn-sm eash-b eash-danger" onclick="confirmArchiveBatch('${kq}')">📦 Archive This Batch</button>` : ""}
        ${asked.length ? `<button class="btn btn-sm eash-o" onclick="EAPAShell.asked()" title="${E(asked.map(r => cleanName(r.name) || r.id).join(", "))}">🙋 ${asked.length} asked for more attempts</button>` : ""}
      </div></div>`;
  // (each part drawn by its own function, as on the batch folder page)
  const sub0 = state.batchSub;
  state.batchSub = "registry"; const people = renderBatchFolderBody();
  state.batchSub = "activities"; const acts = members.length ? renderBatchFolderBody() : `<div class="empty-note">No activity yet.</div>`;
  state.batchSub = sub0 === "activities" || sub0 === "rankings" || sub0 === "feedback" ? "registry" : (sub0 || "registry");
  const fb = typeof renderAdminTraineeFeedback === "function" ? bare(renderAdminTraineeFeedback()) : "";
  const part = (id, title, note, html) => `<section class="eash-part" id="eash-${id}">${title ? `<h3 class="eash-h">${title}</h3>` : ""}${note ? `<p class="eash-note">${note}</p>` : ""}${html}</section>`;
  // sub-tabs, the Case Management way: 🏅 Scorecards (the scores table and each trainee's card) first
  const SUBS = [["cards", "🏅 Scorecards"], ["ranks", "🏆 Rankings & Progress Report"], ["people", "👥 Trainees & Actions"], ["fb", "💬 Trainee Feedback"]];
  if(!window.EAPACM && state.scSub === "cards") state.scSub = "people";
  const sub = SUBS.some(x => x[0] === state.scSub) && (state.scSub !== "cards" || window.EAPACM) ? state.scSub : (window.EAPACM ? "cards" : "people");
  const tabs = `<nav class="eash-subs" role="tablist">${SUBS.filter(x => x[0] !== "cards" || window.EAPACM).map(([id, l]) => `<button type="button" role="tab" class="eash-sub-b ${sub === id ? "on" : ""}" onclick="EAPAShell.sub('${id}')">${l}</button>`).join("")}</nav>`;
  let html;
  if(sub === "cards") html = part("cards", "", "", EAPACM.section(k));
  else if(sub === "ranks") html = part("progress", "📊 Progress Report", "Each trainee ranked in the batch, with a general summary of their strengths and challenges.", progressHtml(k));
  else if(sub === "fb") html = part("fb", "💬 Trainee Feedback", "What trainees think of the platform, lessons, facilitator, Practice Lab and assessments.", fb);
  else html = part("people", "👥 Trainees & Actions", "Every trainee in the batch: where they are, their scores, the feedback to write, and every action — ✍ Feedback, 🎓 Certificate, ↺ Reset Attempts, ♻ Restore, Revoke — on their row.", people) + part("acts", "📈 Activities", "Where each trainee is, and when they were last active.", acts);
  return `<div class="eash-page">${banner}${tabs}${html}</div>`;
}

/* 🏆 RANKINGS & PROGRESS REPORT: the batch (the Scorecard's), and its 📊 Weekly
   Progress Report — each trainee's Week 1 and Week 2 (days passed, the week's score, their place) and the Overall, ranked
   on the same score as the trainee's own 🏅 Scorecard (js/eapa-scorecard.js eapaScores) */
function progressRows(k){
  const S = window.eapaScores; if(!S) return null;
  const pool = (state.adminData || []).filter(r => batchKey(r) === k && r.approved === true && (state.batchShowArchived || !r.archived));
  if(!pool.length) return [];
  const all = S.ranked(pool, DAYS.map(d => d.id)), wk = S.WEEKS.map(w => { const m = new Map(); S.ranked(pool, w.days).forEach((x, i) => m.set(x.r, {i, x})); return m; });
  return all.map((x, i) => ({r: x.r, rank: i + 1, all: x, weeks: S.WEEKS.map((w, j) => Object.assign({w}, wk[j].get(x.r)))}));
}
const pc = v => typeof v === "number" && !isNaN(v) ? Math.round(v) + "%" : "—";
const toneOf = v => typeof v !== "number" ? "" : v >= 85 ? "eash-hi" : v >= 70 ? "eash-mid" : "eash-lo";
/* each trainee's row in the CM report's format: Strength, Challenges and the General Attribute Rating are a general summary
   of how they work (the areas they are strong or weak in), with no detail of a piece of work */
const AREAS = [
  {id: "kc", label: "Lesson knowledge", good: "understands the lessons and applies them", gap: "reviewing the lessons until each Knowledge Check is passed"},
  {id: "pr", label: "Practical skills", good: "handles the Practice Lab tasks the way an EA / PA would on the job", gap: "practicing the lab tasks until they meet the standard"},
  {id: "tk", label: "Responsiveness", good: "handles surprise tasks promptly and calmly", gap: "handling surprise tasks promptly and in full"}];
const ATTRS = [["Knowledge & Understanding", ["kc"]], ["Practical Execution", ["pr"]], ["Reliability & Responsiveness", ["tk", "pace"]]];
const stars = v => v == null ? "N/A (insufficient data)" : "★".repeat(Math.max(1, Math.min(5, Math.round(v / 20)))) + "☆".repeat(5 - Math.max(1, Math.min(5, Math.round(v / 20))));
const andList = xs => xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || "";
function summaryOf(x){
  const a = x.all, vals = {kc: a.kc, pr: a.pr, tk: a.tk, pace: a.any ? a.doneN / DAYS.length * 100 : null};
  const have = AREAS.filter(z => typeof vals[z.id] === "number"), good = have.filter(z => vals[z.id] >= 80), weak = have.filter(z => vals[z.id] < 70);
  const st = [], ch = [];
  if(good.length) st.push(`Strong in ${andList(good.map(z => z.label.toLowerCase()))}: ${andList(good.map(z => z.good))}.`);
  else if(have.length){ const t = have.slice().sort((p, q) => vals[q.id] - vals[p.id])[0]; st.push(`Strongest area so far is ${t.label.toLowerCase()}, though not yet at the standard.`); }
  if(a.doneN >= DAYS.length) st.push("Has completed every training day.");
  else if(x.weeks.length && x.weeks.every(w => w.x.any) && x.weeks[1].x.score >= x.weeks[0].x.score) st.push("Kept improving from one week to the next.");
  if(weak.length) ch.push(`Needs work on ${andList(weak.map(z => z.label.toLowerCase()))}: ${andList(weak.map(z => z.gap))}.`);
  else if(have.length) ch.push("No area below the standard so far.");
  if(a.doneN < Math.min(DAYS.length, 5) && a.any) ch.push("Is behind the batch's pace: keeping up with each day's work would help.");
  if(x.weeks.length > 1 && x.weeks.every(w => w.x.any) && x.weeks[1].x.score < x.weeks[0].x.score - 5) ch.push("Slipped in the second week: the newer, harder material needs more attention.");
  const attrs = ATTRS.map(([l, ids]) => { const vs = ids.map(id => vals[id]).filter(v => typeof v === "number"); return {l, v: vs.length ? vs.reduce((p, q) => p + q, 0) / vs.length : null}; });
  return {strength: st.length ? st.join(" ") : "No graded work yet to draw strengths from.", challenges: ch.length ? ch.join(" ") : (a.any ? "No significant challenges so far." : "No graded work yet: nothing handed in to assess."), attrs};
}
function progressHtml(k){
  const rows = progressRows(k);
  if(rows == null) return `<div class="empty-note">The progress report is still loading. Refresh the page if this stays.</div>`;
  if(!rows.length) return `<div class="empty-note">No approved trainee in ${E(folderLabel(k))} yet.</div>`;
  const medals = ["🥇", "🥈", "🥉"];
  return `<div class="eash-tw"><table class="eash-t eash-rep"><thead><tr><th>Rank</th><th>Trainee's Name</th><th>Batch Score</th><th>Strength</th><th>Challenges</th><th>General Attribute Rating</th><th>Progress</th></tr></thead>
    <tbody>${rows.map(x => { const sm = summaryOf(x);
      return `<tr><td class="eash-n">${!x.all.any ? "—" : medals[x.rank - 1] || "#" + x.rank}</td><th scope="row">${E(cleanName(x.r.name) || x.r.id)}</th>
        <td class="eash-n ${x.all.any ? toneOf(x.all.score) : ""}"><b>${x.all.any ? x.all.score : "—"}</b></td>
        <td class="eash-txt">${E(sm.strength)}</td><td class="eash-txt">${E(sm.challenges)}</td>
        <td class="eash-attr">${sm.attrs.map(t => `<span>${E(t.l)}</span><b${t.v == null ? ` class="eash-na"` : ""}>${E(stars(t.v))}</b>`).join("")}</td>
        <td class="eash-prog">Days passed ${x.all.doneN}/${DAYS.length}${x.weeks.map(w => `<br>${E(w.w.label)}: ${w.x.any ? `${w.x.score} <small>#${w.i + 1}</small>` : "—"}`).join("")}</td></tr>`; }).join("")}</tbody></table></div>
    <p class="eash-note">Batch Score = 35% days passed · 25% Knowledge Checks · 25% Practice Lab · 15% random tasks (40/30/30 until a task is graded), the score on each trainee's own 🏅 Scorecard. Strength, Challenges and the ratings are a general summary of how each trainee works; each piece of work is on their Scorecard.</p>`;
}
function progressCsv(k){
  const rows = progressRows(k) || []; if(!rows.length){ toast("Nothing to export yet."); return; }
  const q = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const head = ["Rank", "Trainee's Name", "Batch Score", "Strength", "Challenges"].concat(ATTRS.map(a => a[0]), ["Days passed"], window.eapaScores.WEEKS.map(w => w.label));
  const lines = [head.map(q).join(",")].concat(rows.map(x => { const sm = summaryOf(x);
    return [x.rank, cleanName(x.r.name) || x.r.id, x.all.any ? x.all.score : "", sm.strength, sm.challenges].concat(sm.attrs.map(t => stars(t.v)), [`${x.all.doneN}/${DAYS.length}`], x.weeks.map(w => w.x.any ? `${w.x.score} (#${w.i + 1})` : "")).map(q).join(","); }));
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["\ufeff" + lines.join("\r\n")], {type: "text/csv"}));
  a.download = `progress-report-${String(k).replace(/[^A-Za-z0-9_-]/g, "_")}.csv`; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
const __admin = renderAdmin;
renderAdmin = function(){
  if(!state.isAdmin) return __admin.apply(this, arguments);
  // (the old Rankings tab opens the 🏆 Rankings & Progress Report sub-tab)
  if(state.adminTab === "rankings" || state.adminTab === "rankreport"){ state.adminTab = "scorecard"; state.scSub = "ranks"; }
  if(!state.adminTab || MERGED.includes(state.adminTab)) state.adminTab = "scorecard";
  if(state.adminTab === "scorecard") return pills("scorecard") + scorecardHtml();
  // 🛡 Admin Master Control: the base page, its tab strip swapped for this section's tabs (a tab another script added stays)
  const out = __admin.apply(this, arguments);
  const m = /<div class="admin-tabs"[^>]*>[\s\S]*?<\/div>/.exec(out);
  if(!m) return pills("admin") + out;
  const extra = [...m[0].matchAll(/<button[^>]*setAdminTab\('([^']+)'\)[^>]*>[\s\S]*?<\/button>/g)].filter(x => !ADMIN_TABS.some(t => t[0] === x[1]) && !MERGED.includes(x[1])).map(x => x[0]).join("");
  const strip = adminTabs(state.adminTab).replace(/<\/div>$/, extra.replace(/class="admin-tab-btn( active)?"/g, (x, on) => `class="admin-tab-btn eash-sub-b${on ? " active on" : ""}"`) + "</div>");
  return pills("admin") + out.slice(0, m.index) + strip + out.slice(m.index + m[0].length);
};

/* 🛡 Admin Master Control in the Scorecard's look: whichever tab is open, its own heading (a page hero, the Settings
   heading with its buttons, a batch's title, or none) becomes the same navy banner as the Scorecard's, with its buttons
   in the banner; then the tab strip; then the tab's content in one solid white panel. Each tab keeps its own render
   function: this only moves its heading and wraps the rest. */
function elite(after, strip){
  const T = document.createElement("template"); T.innerHTML = after;
  const root = T.content;
  const label = ((/class="admin-tab-btn eash-sub-b active on"[^>]*>([\s\S]*?)<\/button>/.exec(strip) || [])[1] || "").replace(/<[^>]+>/g, "").trim();
  let title = "", sub = "", acts = "", head = null, introEl = null;
  const txt = n => n ? n.textContent.replace(/\s+/g, " ").trim() : "";
  const hero = root.querySelector(".page-hero");
  const ap = hero ? null : root.querySelector(".audit-page-head");
  const nh = hero || ap ? null : root.querySelector("h1.no-hero"), noHero = nh ? nh.parentElement : null;
  if(hero){ head = hero; const h = hero.querySelector("h1, h2"); title = txt(h); if(h) h.remove(); const eb = hero.querySelector(".eyebrow"); if(eb) eb.remove();
    const ps = [...hero.querySelectorAll(":scope > p")]; sub = ps.map(x => x.innerHTML).join(" "); ps.forEach(x => x.remove()); acts = hero.innerHTML.trim(); }
  else if(ap){ head = ap; const h = ap.querySelector("h1"); title = txt(h); const box = h && h.parentElement; if(box && box !== ap) box.remove(); else { if(h) h.remove(); const eb = ap.querySelector(".eyebrow"); if(eb) eb.remove(); }
    acts = ap.innerHTML.trim(); const nx = ap.nextElementSibling; if(nx && nx.tagName === "P"){ sub = nx.innerHTML; introEl = nx; } }
  else if(noHero){ head = noHero; title = txt(nh); nh.remove(); acts = noHero.innerHTML.trim(); }
  // (a heading drawn loose at the top: an eyebrow, a title and its intro line, which a later step wraps into a hero)
  const loose = !head && [...root.children].find(n => n.tagName === "H1" || n.tagName === "H2");
  if(loose && [...root.children].indexOf(loose) <= 2){
    title = txt(loose); const pv = loose.previousElementSibling, nx = loose.nextElementSibling;
    if(pv && pv.matches(".eyebrow")) pv.remove();
    if(nx && nx.tagName === "P"){ sub = nx.innerHTML; nx.remove(); }
    loose.remove();
  }
  if(head) head.remove(); if(introEl) introEl.remove();
  if(!title) title = label;
  if(!/^\p{Extended_Pictographic}/u.test(title)) { const ic = (/^(\S+)\s/.exec(label) || [])[1]; if(ic && /\p{Extended_Pictographic}/u.test(ic)) title = ic + " " + title; }
  const box = document.createElement("div"); box.appendChild(root.cloneNode(true));
  const banner = `<div class="eash-banner eash-amc-banner"><div class="eash-banner-t"><p class="eash-k">${KICKER} · Admin Master Control</p><h2>${E(title)}</h2>${sub ? `<p class="eash-sub">${sub}</p>` : ""}</div>${acts ? `<div class="eash-acts">${acts}</div>` : ""}</div>`;
  return `<div class="eash-page eash-amc">${banner}${strip}<section class="eash-part eash-amc-body">${box.innerHTML}</section></div>`;
}
// the outermost wrap, put on once every script has loaded (🎬 Videos and any other tab add themselves after this file):
// the strip's underline follows the tab that is open, then the page is laid out as above
function eliteWrap(){
  if(typeof renderAdmin !== "function" || renderAdmin.__elite) return;
  const inner = renderAdmin;
  renderAdmin = window.renderAdmin = function(){
    const out = inner.apply(this, arguments);
    if(!state.isAdmin || state.adminTab === "scorecard") return out;
    const m = /<div class="admin-tabs eash-tabs eash-subs">[\s\S]*?<\/div>/.exec(out);
    if(!m) return out;
    const tab = state.adminTab;
    const strip = m[0].replace(/<button class="admin-tab-btn[^"]*"([^>]*)>/g, (x, rest) => {
      const id = (/(?:EAPAShell\.go|setAdminTab)\('([^']+)'\)/.exec(rest) || [])[1];
      return `<button class="admin-tab-btn eash-sub-b${id === tab ? " active on" : ""}"${rest}>`; });
    return out.slice(0, m.index) + elite(out.slice(m.index + m[0].length), strip);
  };
  renderAdmin.__elite = true;
  if(state.view === "admin" && typeof render === "function") render();
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", eliteWrap); else setTimeout(eliteWrap, 0);

// every row's buttons in view: no "More ▾" menu (its 🎓 Certificate, ↺ Reset Attempts, ♻ Restore and Revoke sit beside the rest)
if(typeof renderAdminRow === "function" && !renderAdminRow.__eash){
  const __row = renderAdminRow;
  renderAdminRow = function(){
    return String(__row.apply(this, arguments))
      .replace(/<details class="at-more"[^>]*>\s*<summary[^>]*>More ▾<\/summary>\s*<div class="at-menu">/, "")
      .replace(/<\/div><\/details>/, "");
  };
  renderAdminRow.__eash = true;
}

// the rows' live refreshers (a search keystroke, the 30 s poll, a row action) redraw without a batch: on the Scorecard, its batch
if(typeof renderAdminRows === "function" && !renderAdminRows.__eash){
  const __rows = renderAdminRows;
  renderAdminRows = function(onlyBatch){
    if(!onlyBatch && state.adminTab === "scorecard" && state.scFolder) onlyBatch = state.scFolder;
    return __rows.call(this, onlyBatch);
  };
  renderAdminRows.__eash = true;
}

window.EAPAShell = {
  go(tab){ if(tab === "batches") state.batchFolder = null;   /* (📁 Batch Folders always opens on the list of folders) */ state.adminTab = tab; render(); },
  batch(k){ state.scBatch = k; state.adminSearch = ""; render(); },
  sub(id){ state.scSub = id; render(); },
  progressCsv,
  jump(id){ const el = document.getElementById("eash-" + id); if(el) el.scrollIntoView({behavior: "smooth", block: "start"}); },
  asked(){ const row = [...document.querySelectorAll(".audit-table .at-asked")][0]; const tr = row && row.closest("tr");
    if(!tr && state.scSub !== "people"){ state.scSub = "people"; render(); return setTimeout(() => EAPAShell.asked(), 60); }
    if(tr){ tr.scrollIntoView({behavior: "smooth", block: "center"}); tr.classList.add("eash-flash"); setTimeout(() => tr.classList.remove("eash-flash"), 2200); } else EAPAShell.jump("people"); }
};

const st = document.createElement("style"); st.id = "eapa-admin-shell"; st.textContent = `
.eash-pills{display:flex;gap:10px;flex-wrap:wrap;margin:0 0 14px;}
.eash-pill{font:800 15px 'Inter',system-ui,sans-serif;padding:10px 18px;border-radius:999px;border:2px solid #1E2340;background:#fff;color:#1E2340;cursor:pointer;}
.eash-pill.on{background:#1E2340;color:#fff;box-shadow:inset 0 -3px 0 #DB8437;}
.eash-tabs{background:#fff;border-radius:12px;padding:4px 8px;}
.eash-page{display:flex;flex-direction:column;gap:18px;}
.eash-banner{display:flex;flex-wrap:wrap;gap:14px 20px;align-items:flex-end;justify-content:space-between;background:linear-gradient(135deg,#1E2340,#2B3157);color:#fff;border-radius:16px;padding:20px 22px;border-bottom:4px solid #DB8437;}
.eash-k{margin:0;font-size:14px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#F2A65E;}
.eash-banner h2{margin:4px 0 2px;font-size:28px;color:#fff;font-weight:800;}
.eash-sub{margin:0;font-size:15px;font-weight:700;color:#E6E8F2;}
.eash-acts{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
.eash-f{display:flex;align-items:center;gap:6px;font-weight:800;font-size:14px;color:#E6E8F2;}
.eash-f select{font:700 14px 'Inter',system-ui,sans-serif;padding:7px 10px;border-radius:8px;border:1px solid #4A5070;background:#fff;color:#1E2340;}
.eash-chk{display:flex;align-items:center;gap:6px;font-weight:700;font-size:14px;color:#E6E8F2;cursor:pointer;}
.eash-banner .btn.eash-b{background:#262B45;border:1px solid #5A6080;color:#fff;font-weight:800;}
.eash-banner .btn.eash-b:hover{background:#343A5C;}
.eash-banner .btn.eash-danger{color:#FFD2CC;}
.eash-banner .btn.eash-o{background:var(--gold);border:1px solid #e0a43a;color:var(--gold-ink);font-weight:800;}
.eash-banner .btn.eash-o:hover{background:var(--gold-hover);}
.eash-subs{display:flex;flex-wrap:wrap;gap:4px;border-bottom:2px solid #DCE0EA;}
.eash-sub-b{font:800 15px 'Inter',system-ui,sans-serif;color:#3B4160;background:transparent;border:0;border-bottom:3px solid transparent;margin-bottom:-2px;padding:10px 16px;cursor:pointer;}
.eash-sub-b:hover{color:#1E2340;}
.eash-sub-b.on{color:#1E2340;border-bottom-color:#DB8437;}
/* the Scorecard page takes the window's full width */
@media (min-width:1100px){ body:has(.eash-page) main:not(.main-dash){max-width:none;padding-left:24px;padding-right:24px;} }
/* 📊 the Weekly Progress Report table: the standard look */
.eash-tw{overflow-x:auto;border:1px solid #DCE0EA;border-radius:10px;}
.eash-t{width:100%;min-width:980px;border-collapse:collapse;font:600 14px/1.35 'Inter',system-ui,sans-serif;color:#141A2E;background:#fff;}
.eash-t thead th{background:#262B45;color:#fff;font-weight:800;font-size:13px;text-align:left;padding:8px 10px;border-left:1px solid rgba(255,255,255,.14);}
.eash-t thead tr:last-child th{border-bottom:2px solid #DB8437;}
.eash-t thead th.eash-wk{text-align:center;background:#1E2340;} .eash-t thead th small{font-weight:600;color:#C9CEDD;}
.eash-t td,.eash-t tbody th{padding:8px 10px;border-top:1px solid #E4E7EF;text-align:left;}
.eash-t tbody th{font-weight:800;color:#1E2340;white-space:nowrap;}
.eash-t td.eash-n{text-align:center;white-space:nowrap;} .eash-t td small{color:#5F6368;font-weight:700;}
.eash-rep td.eash-txt{min-width:260px;max-width:380px;line-height:1.45;color:#2E3450;vertical-align:top;}
.eash-rep td,.eash-rep tbody th{vertical-align:top;}
.eash-rep td.eash-attr{min-width:210px;} .eash-rep td.eash-attr span{display:block;font-size:13px;color:#46508A;font-weight:700;} .eash-rep td.eash-attr b{display:block;color:#C77A1D;font-size:16px;letter-spacing:1px;margin-bottom:6px;}
.eash-rep td.eash-prog{white-space:nowrap;font-size:13.5px;}
.eash-rep td.eash-attr b.eash-na{font-size:13px;letter-spacing:0;color:#5F6368;}
.eash-rep thead th{white-space:nowrap;} .eash-rep thead th:nth-child(4),.eash-rep thead th:nth-child(5){white-space:normal;}
.eash-t .eash-hi{background:#E6F4EA;color:#0B5D1E;} .eash-t .eash-mid{background:#FFF4E0;color:#7A4B00;} .eash-t .eash-lo{background:#FCE8E6;color:#A50E0E;}
.eash-jump{display:flex;flex-wrap:wrap;gap:8px;}
.eash-jump a{font:800 14px 'Inter',system-ui,sans-serif;color:#1E2340;background:#fff;border:1px solid #DCE0EA;border-radius:999px;padding:6px 14px;text-decoration:none;}
.eash-jump a:hover{border-color:#DB8437;}
.eash-part{background:#fff;border:1px solid #DCE0EA;border-radius:14px;padding:16px 18px;box-shadow:0 2px 10px rgba(30,35,64,.06);scroll-margin-top:90px;}
.eash-h{margin:0 0 4px;font-size:19px;font-weight:800;color:#1E2340;}
.eash-note{margin:0 0 12px;font-size:14px;font-weight:600;color:#3B4160;max-width:90ch;}
/* the Foundational / Case Management table look: solid white, navy header with the orange rule, 14px bold-ish type */
.eash-page .card,.eash-page .audit-table-card,.eash-page .bf-audit-controls{background:#fff !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;}
.eash-page .audit-table{font-size:14px;color:#141A2E;}
.eash-page .audit-table thead th{background:#262B45;color:#fff;font-size:13px;border-bottom:2px solid #DB8437;padding:10px 12px;}
.eash-page .audit-table td{background:#fff;padding:10px 12px;border-top:1px solid #E4E7EF;font-weight:600;}
.eash-page .audit-table tbody tr:hover td{background:#F8F9FC;}
.eash-page .audit-table small{font-size:12.5px;color:#3B4160;}
.eash-page .audit-table thead th{white-space:normal;word-break:normal;overflow-wrap:normal;hyphens:none;font-size:12px;letter-spacing:.03em;}
.eash-page .audit-table .at-days .ad-cells{flex-wrap:wrap;max-width:128px;}
.eash-page .audit-table .at-act{width:auto;min-width:262px;}
.eash-page .audit-table .at-btns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;min-width:250px;}
.eash-page .audit-table .at-btns .btn{width:100%;font-size:13px;font-weight:700;padding:6px 8px;white-space:normal;line-height:1.2;text-align:center;}
.eash-page .bf-act-row{background:#fff;font-size:14px;}
.eash-page .bf-act-head{background:#262B45 !important;color:#fff !important;border-bottom:2px solid #DB8437;}
.eash-page .tfb-summary .card,.eash-page .tfb-days{background:#fff !important;}
/* 🛡 Admin Master Control: the tab strip as the Scorecard's sub-tabs, every card solid white with a thin border (no
   frosted glass over the photo), stat tiles and tables in the same navy-and-white look */
.eash-amc .eash-tabs{background:transparent;border-radius:0;padding:0;margin:0;}
.eash-amc .eash-sub-b.admin-tab-btn{border-radius:0;box-shadow:none;}
.eash-amc-banner .eash-sub{max-width:90ch;font-size:14px;line-height:1.5;color:#D9DDEA;margin:4px 0 0;} .eash-amc-banner .eash-sub b{color:#fff;}
.eash-amc-banner .eash-acts .btn{background:#262B45 !important;border:1px solid #5A6080 !important;color:#fff !important;font-weight:800;box-shadow:none !important;}
.eash-amc-banner .eash-acts .btn:hover{background:#343A5C !important;}
.eash-amc-banner .eash-acts .btn-primary,.eash-amc-banner .eash-acts .btn-orange{background:#DB8437 !important;border-color:#DB8437 !important;color:#241304 !important;}
.eash-amc-banner .eash-acts > div{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
.eash-amc-banner .eash-acts a,.eash-amc-banner .eash-acts span,.eash-amc-banner .eash-acts label{color:#fff !important;font-weight:700;}
.eash-amc-body{display:flex;flex-direction:column;gap:14px;}
.eash-amc-body > *{margin-top:0 !important;margin-bottom:0 !important;}
.eash-amc-body .card:not(#eash-x1):not(#eash-x2),.eash-amc-body .stat:not(#eash-x1):not(#eash-x2){background:#fff !important;backdrop-filter:none !important;-webkit-backdrop-filter:none !important;border:1px solid #DCE0EA !important;border-radius:12px !important;box-shadow:0 1px 4px rgba(30,35,64,.06) !important;}
.eash-amc-body .card[style*="danger"]:not(#eash-x1):not(#eash-x2):not(#eash-x3){background:#FDECEA !important;border-left:4px solid #C0392B !important;}
.eash-amc-body .card[style*="orange"]:not(#eash-x1):not(#eash-x2):not(#eash-x3),.eash-amc-body .card[style*="255,244,232"]:not(#eash-x1):not(#eash-x2):not(#eash-x3){background:#FFF8F0 !important;border-color:#F0D2B0 !important;}
.eash-amc-body table thead th{background:#262B45 !important;color:#fff !important;border-bottom:2px solid #DB8437 !important;font-weight:800;}
.eash-amc-body .sopf-grid,.eash-amc-body .studio-stats{gap:12px;}
.eash-amc-body h3{color:#1E2340;}
.eash-flash td{background:#FFF1E2 !important;transition:background .4s;}
`;
(document.head || document.documentElement).appendChild(st);
})();
