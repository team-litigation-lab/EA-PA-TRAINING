/* ============================================================
   🛡 The Admin screen in sections, the Foundational Training and Case Management way.

   Two section pills: 🏅 Scorecard and 🛡 Admin Master Control. Every admin tab keeps its own render function; this
   file wraps renderAdmin and puts the tabs in their sections.
     🏅 Scorecard            ONE page for a batch (the default): a navy banner with every admin button in it — the batch,
                             Include archived, 🔄 Refresh, ⬇ Records (CSV), ⬇ Full backup (JSON), ⬇ Cohort Report,
                             📦 Archive / ↩ Restore the batch, and 🙋 who asked for more attempts — then, one under the other,
                             👥 the trainees table (each row's buttons all in view: View Detail, ✍ Feedback, 🎓 Certificate,
                             ↺ Reset Attempts, ♻ Restore, Revoke — no "More ▾"), 🏆 Rankings, 💬 Trainee Feedback and
                             📈 Activities. The old Rankings and Trainee Feedback tabs open this page.
     🛡 Admin Master Control Settings & Reports (audit), 📁 Batch Folders (batches), 📋 SOP Reference (sop), ✏️ Content Studio
                             (studio), and any tab another script adds.
   The tables take the Foundational / Case Management look: solid white, a navy header with the orange rule.
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
  return `<div class="admin-tabs eash-tabs">${ADMIN_TABS.map(([id, l]) => `<button class="admin-tab-btn ${tab === id ? "active" : ""}" onclick="EAPAShell.go('${id}')">${l}</button>`).join("")}</div>`;
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
  const banner = `<div class="eash-banner">
      <div class="eash-banner-t"><p class="eash-k">${KICKER}</p><h2>🏅 Scorecard · ${E(folderLabel(k))}</h2>
        <p class="eash-sub">${members.length} trainee${members.length === 1 ? "" : "s"}${all.length > members.length ? ` · ${all.length - members.length} archived hidden` : ""}${arch ? " · 🗄 archived batch" : ""}</p></div>
      <div class="eash-acts">
        <label class="eash-f">Batch <select onchange="EAPAShell.batch(this.value)">${opts}</select></label>
        ${arch ? "" : `<label class="eash-chk"><input type="checkbox" ${state.batchShowArchived ? "checked" : ""} onchange="state.batchShowArchived=this.checked;render()"> Include archived</label>`}
        <button class="btn btn-sm eash-b" onclick="refreshAdminData();if(typeof loadTraineeFeedbackAdmin==='function')loadTraineeFeedbackAdmin()">🔄 Refresh</button>
        ${typeof bfExportCsv === "function" ? `<button class="btn btn-sm eash-b" onclick="bfExportCsv('${kq}')" title="Spreadsheet of every trainee's progress and scores">⬇ Records (CSV)</button>` : ""}
        ${typeof bfExportJson === "function" ? `<button class="btn btn-sm eash-b" onclick="bfExportJson('${kq}')" title="Complete backup of this batch's records and feedback">⬇ Full backup (JSON)</button>` : ""}
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
  const ranks = typeof renderAdminRankings === "function" ? bare(renderAdminRankings(k)) : "";
  const fb = typeof renderAdminTraineeFeedback === "function" ? bare(renderAdminTraineeFeedback()) : "";
  const part = (id, title, note, html) => `<section class="eash-part" id="eash-${id}"><h3 class="eash-h">${title}</h3>${note ? `<p class="eash-note">${note}</p>` : ""}${html}</section>`;
  // sub-tabs, the Case Management way: 🏅 Scorecards (the scores table and each trainee's card) first
  const SUBS = [["cards", "🏅 Scorecards"], ["ranks", "🏆 Rankings & Progress Report"], ["people", "👥 Trainees & Actions"], ["fb", "💬 Trainee Feedback"]];
  if(!window.EAPACM && state.scSub === "cards") state.scSub = "people";
  const sub = SUBS.some(x => x[0] === state.scSub) && (state.scSub !== "cards" || window.EAPACM) ? state.scSub : (window.EAPACM ? "cards" : "people");
  const tabs = `<nav class="eash-subs" role="tablist">${SUBS.filter(x => x[0] !== "cards" || window.EAPACM).map(([id, l]) => `<button type="button" role="tab" class="eash-sub-b ${sub === id ? "on" : ""}" onclick="EAPAShell.sub('${id}')">${l}</button>`).join("")}</nav>`;
  let html;
  if(sub === "cards") html = part("cards", "🏅 Scorecards", "Every trainee's scores, day by day. Click a trainee for their scorecard: what to focus on, and each activity's score and feedback.", EAPACM.section(k));
  else if(sub === "ranks") html = part("ranks", "🏆 Rankings", "", ranks) + part("acts", "📈 Progress Report — Activities", "", acts);
  else if(sub === "fb") html = part("fb", "💬 Trainee Feedback", "What trainees think of the platform, lessons, facilitator, Practice Lab and assessments.", fb);
  else html = part("people", "👥 Trainees & Actions", "Every trainee in the batch: where they are, their scores, the feedback to write, and every action — ✍ Feedback, 🎓 Certificate, ↺ Reset Attempts, ♻ Restore, Revoke — on their row.", people);
  return `<div class="eash-page">${banner}${tabs}${html}</div>`;
}

const __admin = renderAdmin;
renderAdmin = function(){
  if(!state.isAdmin) return __admin.apply(this, arguments);
  if(!state.adminTab || MERGED.includes(state.adminTab)) state.adminTab = "scorecard";
  if(state.adminTab === "scorecard") return pills("scorecard") + scorecardHtml();
  // 🛡 Admin Master Control: the base page, its tab strip swapped for this section's tabs (a tab another script added stays)
  const out = __admin.apply(this, arguments);
  const m = /<div class="admin-tabs"[^>]*>[\s\S]*?<\/div>/.exec(out);
  if(!m) return pills("admin") + out;
  const extra = [...m[0].matchAll(/<button[^>]*setAdminTab\('([^']+)'\)[^>]*>[\s\S]*?<\/button>/g)].filter(x => !ADMIN_TABS.some(t => t[0] === x[1]) && !MERGED.includes(x[1])).map(x => x[0]).join("");
  const strip = adminTabs(state.adminTab).replace(/<\/div>$/, extra + "</div>");
  return pills("admin") + out.slice(0, m.index) + strip + out.slice(m.index + m[0].length);
};

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
  go(tab){ if(tab === "batches" && state.batchFolder === state.scFolder) state.batchFolder = null; state.adminTab = tab; render(); },
  batch(k){ state.scBatch = k; state.adminSearch = ""; render(); },
  sub(id){ state.scSub = id; render(); },
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
.eash-banner .btn.eash-o{background:#DB8437;border:1px solid #DB8437;color:#241304;font-weight:800;}
.eash-subs{display:flex;flex-wrap:wrap;gap:4px;border-bottom:2px solid #DCE0EA;}
.eash-sub-b{font:800 15px 'Inter',system-ui,sans-serif;color:#3B4160;background:transparent;border:0;border-bottom:3px solid transparent;margin-bottom:-2px;padding:10px 16px;cursor:pointer;}
.eash-sub-b:hover{color:#1E2340;}
.eash-sub-b.on{color:#1E2340;border-bottom-color:#DB8437;}
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
.eash-flash td{background:#FFF1E2 !important;transition:background .4s;}
`;
(document.head || document.documentElement).appendChild(st);
})();
