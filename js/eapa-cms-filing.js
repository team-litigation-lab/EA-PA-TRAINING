/* ============================================================
   📤 Upload in the CMS: filing an EA/PA document into the client's case file

   An EA or PA does not print a calendar and does not leave an itinerary in their Downloads folder. Every
   document they produce is filed into the client's case file in the CMS — on the right tab, under the
   firm's name:

       <Case ID>_<Last-First>_<Type>_<YYYY-MM-DD>.<ext>

   So the labs that used to end at 🖨 Print or "Save file" end at **⬆ Upload in the CMS** instead: open the
   client's case file in the CMS, choose the tab the firm files that document under, write the file name,
   and press "File it in the CMS". ⬇ Download PDF stays beside it, because a trainee still files a copy
   into the client's Drive folder (📂 Backup Drive).

   Graded on two things, the two a repository lives or dies by:
     • the tab — a document on the wrong tab is a document nobody finds;
     • the name — the firm's convention, to the character.
   Nothing is corrected quietly: a wrong name files nothing and comes back with what is wrong with each
   part, and a wrong tab is refused with where the firm keeps that document and why. Every attempt is
   kept, so a trainer can see who filed it right the first time (Admin → the trainee's row).

   How it reaches the CMS: the CMS's own course bridge (its course-bridge.js). This course asks the CMS
   beside the lab which case is open ({lsh:"cms-case?"}), checks a name without uploading anything
   ({lsh:"cms-doc-check"}), and files the document ({lsh:"cms-doc-file"}) — the same /api/upload, the same
   Doc Hub row, the same convention check (caseFileName in the CMS's app.js, the firm's one rule) that an
   upload typed in the CMS goes through. The document itself is the lab's own PDF, built here and handed
   over as bytes; nothing is uploaded until the name passes.

   The CMS opens signed in (js/lsh-tool-links.js puts the Portal's ticket on the link), beside the lab in
   a frame, or in its own tab when the window is too narrow for both.
   ============================================================ */
(function(){
const esc = (s)=> String(s == null ? "" : s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const say = (m)=> { if(typeof toast === "function") toast(m); };
const CMS = "https://lshcasemanagementtraining-trainingcrm.pages.dev/?program=ea";
const KEY = "cms-filing";
const MAX_BYTES = 2 * 1024 * 1024;        // the CMS's own limit (DOC_UPLOAD_MAX_BYTES)

/* ---------- the documents an EA/PA files, and where the firm files them ----------
   Each one is a lab's own deliverable: the same PDF ⬇ Download PDF gives, handed to the CMS as bytes.
   `tab` is the Doc Hub tab the firm keeps that document on, and it is also the <Type> in the file name,
   so the tab and the name are one decision made twice. `why` is what the trainee is told when they file
   it somewhere else — the rule, not just "wrong". A document is listed here only when it genuinely
   belongs in a client's case file: a Knowledge Check result and an evaluation report are the trainee's
   own records, not the client's, and they stay at ⬇ Download PDF. */
const DOCS = [
  {id:"calendar",  day:3,  fn:"downloadCalendarPdf",           title:"Weekly Calendar — the week as it was built",
   tab:"Case Files", why:"A calendar built around a client's matter is part of that matter's working file."},
  {id:"travel",    day:3,  fn:"downloadTravelPdf",             title:"Business Travel — Chicago arbitration itinerary",
   tab:"Case Files", why:"Travel booked for a hearing belongs with the case it was booked for, not with the firm's invoices: it is what counsel is handed on the way to court."},
  {id:"financial", day:5,  fn:"downloadFinancialPdf",          title:"Trust Ledger & Billing — the reconciled sheet",
   tab:"Invoices",   why:"Billing and trust activity is filed under Invoices, where the firm's money on a matter is read from end to end."},
  {id:"inbox",     day:2,  fn:"downloadEmailSimPdf",           title:"Inbox Triage — what was done with each message",
   tab:"Case Files", why:"The record of correspondence handled on a matter belongs in that matter's file."},
  {id:"calls",     day:4,  fn:"downloadCallsPdf",              title:"Prospect Calls & Lead Sourcing — the call sheet",
   tab:"Intake Documents", why:"Anything produced before the client is a client is intake: the call sheet is filed under Intake Documents."},
  {id:"dossier",   day:1,  fn:"downloadDossier1Pdf",           title:"Client Dossier & Gatekeeping — the dossier",
   tab:"Case Files", why:"A dossier is the file's own summary of the client and who may reach them: it is filed with the case, not with intake paperwork."},
  {id:"insurance", day:5,  fn:"downloadInsurance5Pdf",         title:"Insurance & Risk Assessment — the assessment",
   tab:"Case Files", why:"An assessment written on a client's matter is filed with that matter; the Doc Hub keeps no separate insurance tab."},
  {id:"crisis",    day:8,  fn:"downloadCrisisPdf",             title:"Firm Crisis Response — Halvorsen Logistics",
   tab:"Litigation Documents", why:"A crisis response that puts a hold on documents and routes the matter to counsel is litigation paperwork, and is filed where counsel looks for it."}
];
const docOf = (id)=> DOCS.find(d=>d.id === id) || null;
const byFn = (fn)=> DOCS.find(d=>d.fn === fn) || null;

/* ---------- the trainee's record: every attempt on every document ---------- */
const log = ()=> (state.cmsFiling = state.cmsFiling || {});
const recOf = (id)=> log()[id] || null;
async function save(){ try{ if(typeof storeSet === "function") await storeSet(KEY, log()); }catch(e){} }
/* The record, read again from storage and merged in rather than replaced. A trainee's progress comes
   down from their account some seconds after the page loads, so a record read once at load can be the
   empty one — and writing that back over a restored record would lose documents they had already filed.
   So it is read before the panel opens and before anything is written, and a document already filed is
   never dropped by a merge. */
async function loadRecord(){
  if(typeof storeGet !== "function") return;
  let saved = null;
  try{ saved = await storeGet(KEY); }catch(e){ return; }
  if(!saved || typeof saved !== "object") return;
  const now = log();
  Object.keys(saved).forEach(id=>{
    const mine = now[id], theirs = saved[id];
    if(!mine) { now[id] = theirs; return; }
    // whichever knows more wins, attempt by attempt: filed beats unfiled, and attempts only ever rise
    if(theirs.filed && !mine.filed) now[id] = Object.assign({}, mine, theirs);
    now[id].attempts = Math.max(mine.attempts || 0, theirs.attempts || 0);
    now[id].wrongTab = Math.max(mine.wrongTab || 0, theirs.wrongTab || 0);
    now[id].wrongName = Math.max(mine.wrongName || 0, theirs.wrongName || 0);
  });
}

/* What a trainer sees, and what the dashboard counts. */
function health(){
  const rows = DOCS.map(d=>Object.assign({id:d.id, title:d.title, tab:d.tab}, recOf(d.id) || {}));
  const filed = rows.filter(r=>r.filed);
  return {
    total: DOCS.length,
    filed: filed.length,
    firstTime: filed.filter(r=>r.attempts === 1).length,
    wrongTab: rows.reduce((n,r)=>n + (r.wrongTab || 0), 0),
    wrongName: rows.reduce((n,r)=>n + (r.wrongName || 0), 0),
    rows
  };
}

/* ---------- the CMS beside the lab ---------- */
let frameOpen = false;
const cmsWindows = ()=> (window.__eapaCmsTabs = window.__eapaCmsTabs || []);
function cmsTarget(){
  const f = document.getElementById("cmsFileFrame");
  if(f && f.contentWindow) return f.contentWindow;
  const tab = cmsWindows().filter(w=>w && !w.closed).pop();
  return tab || null;
}
/* Ask the CMS one thing and wait for its answer (it echoes the id back). */
function askCms(msg, replyKind, transfer){
  const target = cmsTarget();
  if(!target) return Promise.resolve({ok:false, error:"The CMS isn't open. Press 🗂 Open the CMS, then open the client's case file in it."});
  const id = "f" + Math.random().toString(36).slice(2, 10);
  return new Promise(res=>{
    const on = (e)=>{ if(e.data && e.data.lsh === replyKind && e.data.id === id){ window.removeEventListener("message", on); res(e.data); } };
    window.addEventListener("message", on);
    try{ target.postMessage(Object.assign({id}, msg), "*", transfer || []); }
    catch(err){ window.removeEventListener("message", on); return res({ok:false, error:"The CMS couldn't be reached from this page."}); }
    setTimeout(()=>{ window.removeEventListener("message", on); res({ok:false, error:"The CMS didn't answer. Is the client's case file open in it?"}); }, 20000);
  });
}

/* The case open in the CMS, as the CMS reports it. Asked once when the panel opens and kept up to date,
   because the CMS tells every asker again whenever the open case changes. */
let openCase = {caseId:"", client:"", phase:"", dol:""};
let cats = [];                                   // the Doc Hub tabs on that case, as the CMS lists them
window.addEventListener("message", (e)=>{
  const d = e.data;
  if(!d || d.lsh !== "cms-case") return;
  openCase = {caseId: d.caseId || "", client: d.client || "", phase: d.phase || "", dol: d.dol || ""};
  paint();
});
function askWhichCase(){
  const t = cmsTarget(); if(!t) return;
  try{ t.postMessage({lsh:"cms-case?"}, "*"); }catch(e){}
}

/* ---------- opening the CMS ---------- */
function openCms(){
  // Beside the lab when there is room for both; its own tab when there isn't (the case needs ~1,030 px).
  if(window.innerWidth >= 1500){ frameOpen = true; paint(); setTimeout(askWhichCase, 2500); return; }
  const w = (window.LSHToolLinks ? LSHToolLinks.open(CMS, "_blank") : window.open(CMS, "_blank"));
  if(!w){ say("Allow pop-ups for this site, so the CMS can open."); return; }
  cmsWindows().push(w);
  say("Open the client's case file in the CMS, then come back to this panel.");
  setTimeout(askWhichCase, 4000);
}

/* ---------- the panel ---------- */
let panelFor = "", checking = false, problems = [], expected = "", note = "";

function todayStamp(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
// What the name will have to be, as far as this course can know it: the CMS decides, this only shows the shape.
function namePattern(doc){
  const last = (openCase.client || "").trim();
  const who = last ? last.split(/\s+/).slice(-1)[0] + "-" + last.split(/\s+/)[0] : "<Last-First>";
  return `${openCase.caseId || "<Case ID>"}_${who}_${doc.tab.replace(/\s+/g, "-")}_${todayStamp()}.pdf`;
}

function open(id){
  const doc = docOf(id); if(!doc) return;
  panelFor = id; problems = []; expected = ""; note = "";
  paint();
  askWhichCase();
  loadRecord().then(paint);
}
function close(){
  panelFor = ""; frameOpen = false;
  // The framed address carried a sign-in ticket good for five minutes. Dropping it means the next
  // opening asks for a fresh one, instead of framing the CMS's log-in page with a ticket that has run out.
  framed = "";
  paint();
}

function paint(){
  let host = document.getElementById("cmsFilingHost");
  if(!panelFor){ if(host) host.remove(); return; }
  if(!host){ host = document.createElement("div"); host.id = "cmsFilingHost"; document.body.appendChild(host); }
  const doc = docOf(panelFor); if(!doc){ host.remove(); return; }
  const r = recOf(doc.id) || {};
  const ready = !!openCase.caseId;
  const tabs = cats.length ? cats : [doc.tab, "Case Files", "Intake Documents", "Invoices", "Bills", "Medical Records", "Police Report", "Property Damage", "Litigation Documents", "Others"]
    .filter((c,i,a)=>a.indexOf(c) === i);
  host.innerHTML = `<div class="cmsf-wrap" role="dialog" aria-modal="true" aria-label="Upload in the CMS">
    <div class="cmsf-card">
      <div class="cmsf-head">
        <div><div class="cmsf-eyebrow">Day ${doc.day} · File it in the client's case file</div>
          <h3>⬆ Upload in the CMS</h3></div>
        <button type="button" class="cmsf-x" onclick="EAPACMSFiling.close()" aria-label="Close">✕</button>
      </div>
      <div class="cmsf-body">
        <div class="cmsf-doc"><b>${esc(doc.title)}</b><span>The PDF this lab produces, filed as the document it is.</span></div>
        ${r.filed ? `<div class="cmsf-ok">✓ Already filed in <b>${esc(r.caseId || "the case")}</b> as <b>${esc(r.name)}</b>, on the <b>${esc(r.category)}</b> tab${r.attempts > 1 ? ` · ${r.attempts} attempts` : " · first time right"}.<br>
            <span>Filing it again replaces nothing: the CMS adds a second copy, named …-2. Do that only if the document changed.</span></div>` : ""}
        <div class="cmsf-case ${ready ? "is-on" : "is-off"}">
          ${ready ? `Filing into <b>${esc(openCase.caseId)}</b>${openCase.client ? ` — ${esc(openCase.client)}` : ""}, the case file open in the CMS.`
                  : `No case file is open in the CMS yet. Open the CMS, find the client in the Case Library and open their file — a file with no Case ID yet has to be saved first.`}
          <button type="button" class="cmsf-btn" onclick="EAPACMSFiling.openCms()">🗂 Open the CMS</button>
          <button type="button" class="cmsf-btn" onclick="EAPACMSFiling.recheck()">↻ Check again</button>
        </div>
        <label class="cmsf-l">Which tab does the firm file this document under?
          <select id="cmsfTab" class="cmsf-in">
            <option value="">Choose the tab…</option>
            ${tabs.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("")}
          </select></label>
        <label class="cmsf-l">The file name, the firm's way
          <input id="cmsfName" class="cmsf-in" spellcheck="false" autocomplete="off" placeholder="${esc(namePattern(doc))}"
                 oninput="EAPACMSFiling.typed()"></label>
        <div class="cmsf-conv">The convention is <code>&lt;Case ID&gt;_&lt;Last-First&gt;_&lt;Type&gt;_&lt;YYYY-MM-DD&gt;.&lt;ext&gt;</code> — the type is the tab you file it under, the date is today, and only letters, digits and <code>- _ .</code> may be used.</div>
        <div class="cmsf-msg" aria-live="polite">${
          problems.length ? `<div class="cmsf-bad"><b>Not filed.</b><ul>${problems.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`
          : note ? `<div class="cmsf-note">${esc(note)}</div>` : ""}</div>
      </div>
      <div class="cmsf-foot">
        <span class="cmsf-count">${esc(countLine())}</span>
        <button type="button" class="cmsf-btn" onclick="EAPACMSFiling.check()" ${checking ? "disabled" : ""}>Check the name</button>
        <button type="button" class="cmsf-btn cmsf-go" onclick="EAPACMSFiling.file(this)" ${checking ? "disabled" : ""}>File it in the CMS</button>
      </div>
    </div>
    ${frameOpen ? `<div class="cmsf-frame"><iframe id="cmsFileFrame" title="LSH Case Management System" src="${esc(frameSrc())}"></iframe></div>` : ""}
  </div>`;
}
let framed = "";
function frameSrc(){
  // One address for the life of the panel, so a redraw never reloads the CMS under the trainee's hands.
  if(framed) return framed;
  framed = CMS;
  if(window.LSHToolLinks) LSHToolLinks.ticketed(CMS).then(u=>{
    const f = document.getElementById("cmsFileFrame");
    framed = u; if(f && f.src !== u) f.src = u;
    setTimeout(askWhichCase, 2500);
  });
  return framed;
}
function countLine(){
  const h = health();
  return h.filed ? `${h.filed} of ${h.total} documents filed · ${h.firstTime} first time right` : `${h.total} documents are filed in the CMS during this program.`;
}

/* ---------- checking the name without uploading anything ---------- */
function fields(){
  return {
    category: (document.getElementById("cmsfTab") || {}).value || "",
    name: ((document.getElementById("cmsfName") || {}).value || "").trim()
  };
}
function typed(){ if(problems.length || note){ problems = []; note = ""; const m = document.querySelector(".cmsf-msg"); if(m) m.innerHTML = ""; } }

async function check(){
  const doc = docOf(panelFor); if(!doc) return;
  const {category, name} = fields();
  if(!category){ problems = ["Choose the tab you would file this document under: the tab is also the type in the file name."]; paint(); return; }
  if(!name){ problems = ["Write the file name you would give this document."]; paint(); return; }
  checking = true; paint();
  const out = await askCms({lsh:"cms-doc-check", name, category, original: `${doc.id}.pdf`}, "cms-doc-checked");
  checking = false;
  if(out && Array.isArray(out.categories) && out.categories.length) cats = out.categories;
  if(out && out.ok && category === doc.tab){ problems = []; note = "The name follows the convention and the tab is where the firm files this. Press “File it in the CMS”."; }
  else if(out && out.ok){ problems = []; note = `The name follows the convention, but check the tab: ${doc.why}`; }
  else problems = (out && out.problems && out.problems.length) ? out.problems : [(out && out.error) || "The CMS couldn't check that name."];
  paint();
}

/* ---------- filing it ---------- */
async function file(btn){
  const doc = docOf(panelFor); if(!doc) return;
  const {category, name} = fields();
  await loadRecord();
  const r = log()[doc.id] = Object.assign({attempts:0, wrongTab:0, wrongName:0}, recOf(doc.id));

  if(!openCase.caseId){ problems = ["No case file with a Case ID is open in the CMS. Open the client's file there (a new case takes its Case ID when it is saved), then file the document."]; paint(); return; }
  if(!category){ problems = ["Choose the tab you would file this document under."]; paint(); return; }
  if(!name){ problems = ["Write the file name you would give this document."]; paint(); return; }

  r.attempts++;
  // The tab first: a document on the wrong tab is a document nobody finds, so nothing is uploaded.
  if(category !== doc.tab){
    r.wrongTab++;
    problems = [`The firm files this document under ${doc.tab}, not ${category}. ${doc.why}`];
    paint(); await save(); return;
  }
  checking = true; paint();
  let bytes = null;
  try{
    const made = await (window.capturePdf ? capturePdf(doc.fn) : Promise.resolve(null));
    bytes = made && made.bytes;
    if(!bytes) throw new Error("the lab has nothing to file yet — finish it and submit it first, then come back here");
    if(bytes.byteLength > MAX_BYTES) throw new Error("the document came out larger than the 2 MB the CMS takes");
  }catch(err){
    checking = false;
    problems = [`The document couldn't be built: ${(err && err.message) || "unknown error"}.`];
    paint(); await save(); return;
  }
  // A copy for the backup drive, taken before the original is handed to the CMS (transferring it empties it here).
  const forDrive = bytes.slice(0);
  const out = await askCms({lsh:"cms-doc-file", name, category, original:`${doc.id}.pdf`, mime:"application/pdf", summary:doc.title, bytes}, "cms-doc-filed", [bytes]);
  checking = false;
  if(out && Array.isArray(out.categories) && out.categories.length) cats = out.categories;
  if(out && out.ok){
    r.filed = true; r.name = out.name; r.category = out.category || category; r.caseId = openCase.caseId;
    r.client = openCase.client || ""; r.at = new Date().toISOString(); r.problems = [];
    problems = []; note = "";
    await save();
    say(`Filed in the CMS as ${out.name}.`);
    // The firm keeps a backup drive as well as a CMS: the same document goes into its folder there.
    // The CMS is the file of record, so a drive that isn't connected or set up never undoes the filing.
    const drv = window.EAPADrive ? await EAPADrive.saveFiled(doc.id, out.name, forDrive) : {ok:false, why:"no-drive"};
    r.drive = drv.ok ? drv.folder : "";
    await save();
    note = drv.ok ? `Filed in the CMS, and kept on your Backup Drive under ${drv.folder}.`
      : drv.why === "no-drive" ? "Filed in the CMS. Your Backup Drive isn't set up yet, so no copy was kept there — set it up from the dashboard (📂 Day 1) and file your next document."
      : `Filed in the CMS. The copy for your Backup Drive didn't go through: ${drv.why}`;
    if(typeof render === "function") render();
    paint();
    return;
  }
  r.wrongName++;
  r.problems = problems = (out && out.problems && out.problems.length) ? out.problems : [(out && out.error) || "The CMS did not file it."];
  expected = (out && out.expected) || "";
  if(expected && !problems.some(p=>p.includes(expected))) problems = problems.concat([`The name the firm expects is "${expected}".`]);
  paint(); await save();
}
function recheck(){ askWhichCase(); say("Asked the CMS which case file is open."); }

/* ---------- the button the labs show, beside ⬇ Download PDF ---------- */
function button(id, cls){
  const doc = docOf(id); if(!doc) return "";
  const r = recOf(id) || {};
  return `<button class="btn ${cls || "btn-navy"} btn-sm" onclick="EAPACMSFiling.open('${esc(id)}')">${
    r.filed ? "✓ Filed in the CMS" : "⬆ Upload in the CMS"}</button>`;
}

window.EAPACMSFiling = {open, close, openCms, check, file, typed, recheck, button, health, docs: ()=>DOCS.slice(), docOf, byFn};

/* ---------- the panel's own look (it is one panel, used by every lab) ---------- */
const css = document.createElement("style");
css.textContent = `
.cmsf-wrap{position:fixed;inset:0;z-index:4000;background:rgba(15,20,40,.55);display:flex;align-items:stretch;justify-content:center;gap:0;padding:24px;}
.cmsf-card{width:min(560px,100%);max-height:100%;overflow:auto;background:#fff;border-radius:14px;box-shadow:0 20px 60px rgba(10,15,35,.35);display:flex;flex-direction:column;}
.cmsf-frame{flex:1;margin-left:18px;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 20px 60px rgba(10,15,35,.35);}
.cmsf-frame iframe{width:100%;height:100%;border:0;display:block;}
.cmsf-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:18px 20px 12px;border-bottom:1px solid var(--line,#E3E6EF);}
.cmsf-head h3{margin:2px 0 0;font-size:18px;color:var(--navy,#1B2240);}
.cmsf-eyebrow{font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--orange-deep,#B9610F);}
.cmsf-x{border:0;background:none;font-size:17px;line-height:1;color:var(--ink-soft,#6E748C);cursor:pointer;padding:4px 6px;border-radius:6px;}
.cmsf-x:hover{background:#EEF0F6;}
.cmsf-body{padding:16px 20px;display:flex;flex-direction:column;gap:12px;}
.cmsf-doc{font-size:13px;color:var(--ink,#1B1E2E);} .cmsf-doc b{display:block;color:var(--navy,#1B2240);font-size:14px;}
.cmsf-doc span{color:var(--ink-soft,#6E748C);font-size:12.5px;}
.cmsf-case{font-size:12.5px;line-height:1.5;padding:9px 11px;border-radius:9px;display:flex;flex-wrap:wrap;align-items:center;gap:8px;}
.cmsf-case.is-on{background:#F1F8F2;border:1px solid #CBE6CF;color:#245B32;}
.cmsf-case.is-off{background:#FBF3E7;border:1px solid #EAD5B4;color:#7A4A10;}
.cmsf-ok{font-size:12.5px;line-height:1.5;background:#F1F8F2;border:1px solid #CBE6CF;color:#245B32;border-radius:9px;padding:9px 11px;}
.cmsf-ok span{color:#4B6B55;}
.cmsf-l{display:block;font-size:12px;font-weight:800;color:var(--navy,#1B2240);}
.cmsf-in{display:block;width:100%;margin-top:5px;padding:9px 11px;border:1px solid var(--line,#E3E6EF);border-radius:8px;font:inherit;font-size:13px;font-family:'IBM Plex Mono',ui-monospace,monospace;}
select.cmsf-in{font-family:inherit;}
.cmsf-conv{font-size:12px;color:var(--ink-soft,#6E748C);line-height:1.5;}
.cmsf-conv code{font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:11.5px;background:#F2F4F9;padding:1px 4px;border-radius:4px;}
.cmsf-bad{font-size:12.5px;background:#FDF2F2;border:1px solid #F0CFCF;color:#8A2B2B;border-radius:9px;padding:9px 11px;}
.cmsf-bad ul{margin:6px 0 0;padding-left:18px;} .cmsf-bad li{margin-bottom:3px;line-height:1.45;}
.cmsf-note{font-size:12.5px;background:#F2F6FD;border:1px solid #CFDCF2;color:#2A4675;border-radius:9px;padding:9px 11px;line-height:1.5;}
.cmsf-foot{display:flex;align-items:center;gap:9px;padding:12px 20px;border-top:1px solid var(--line,#E3E6EF);background:#F8F9FC;flex-wrap:wrap;}
.cmsf-count{flex:1;min-width:150px;font-size:11.5px;color:var(--ink-soft,#6E748C);}
.cmsf-btn{border:1px solid var(--line,#E3E6EF);background:#fff;color:var(--navy,#1B2240);border-radius:8px;padding:7px 12px;font:inherit;font-size:12px;font-weight:800;cursor:pointer;}
.cmsf-btn:hover:not(:disabled){border-color:var(--orange,#DB8437);}
.cmsf-btn:disabled{opacity:.6;cursor:default;}
.cmsf-btn.cmsf-go{background:var(--navy,#1B2240);border-color:var(--navy,#1B2240);color:#fff;}
@media (max-width:1499px){ .cmsf-frame{display:none;} }
@media (max-width:760px){ .cmsf-wrap{padding:0;} .cmsf-card{width:100%;border-radius:0;max-height:none;height:100%;} }`;
document.head.appendChild(css);

// Esc closes the panel, as every other window in this program does.
document.addEventListener("keydown", (e)=>{ if(e.key === "Escape" && panelFor) close(); });

/* the trainee's filing record comes back with the rest of their progress */
window.addEventListener("load", ()=>{
  setTimeout(async ()=>{
    if(typeof storeGet !== "function") return;
    // No render() here: this runs while the page may still be booting, and a redraw then would rewrite
    // the address the trainee arrived on. The record only changes a button's label, which the next
    // ordinary redraw picks up.
    await loadRecord();
  }, 340);
});
})();
