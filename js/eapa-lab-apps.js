/* 🖥 Practice Lab activities in realistic app windows.
   The calendar, the inbox, the spreadsheet, the calls and the roleplay chats already look like the
   tools an EA uses; every other activity (a form or a table on the page) now sits in the window of the
   kind of app the task happens in: a document editor, a mail composer, a task list, accounting
   software, an admin console, a state filing portal, a dashboard, an AI assistant, a CRM, a form
   builder, a reviews page or a social media studio. App names are generic.
   Only the frame is new: the activity's own fields, buttons and results are moved into the window as
   they are (same ids, same handlers, same grading), and the "📝 My Notes" box stays outside it.
   Loaded last; it wraps afterRender. Remove the <script> tag to go back to the plain activities. */
(function(){
  if(window.__eapaLabApps) return; window.__eapaLabApps = true;

  // app kinds: chrome (sidebar, toolbar) and the field styling that goes with them
  const APPS = {
    docs:   {icon:"📄", name:"Docs",           tools:["Normal text ▾","B","I","U","• List","1. List","💬 Comment"], side:null},
    mail:   {icon:"✉", name:"Mail",            tools:["Send","📎 Attach","🔒 Confidential","⋯"], side:["Inbox","Drafts","Sent","Client matters","Firm admin"]},
    tasks:  {icon:"✔", name:"Tasks",           tools:["＋ New task","Sort: Due ▾","Group: Owner ▾"], side:["My Day","Planned","Assigned to me","Elias Thorne","Delegated"]},
    ledger: {icon:"Σ", name:"Ledger",          tools:["Reconcile","Export","Period: This month ▾"], side:["Dashboard","Trust (IOLTA)","Operating","Invoices","Bills","Reports"]},
    admin:  {icon:"🛡", name:"Admin Console",  tools:["Users","Groups","Audit log","Security"], side:["Users & access","Shared drives","Billing system","Case management","Devices"]},
    portal: {icon:"🏛", name:"State Business Portal", tools:["Entity search","Filings","Licenses","Notices"], side:null},
    dash:   {icon:"📊", name:"Insights",       tools:["Last 30 days ▾","Filter","Export"], side:["Overview","Projects","Compliance","Reports"]},
    ai:     {icon:"✦", name:"AI Assistant",    tools:["New chat","Model: firm-approved ▾","No client data"], side:null},
    chat:   {icon:"💬", name:"Messages",       tools:["Call","Video","Info"], side:["Elias Thorne","Sarah Kim (COO)","David Reyes","Front desk"]},
    crm:    {icon:"☎", name:"CRM",             tools:["＋ Log activity","Filter ▾","Export"], side:["Leads","Contacts","Companies","Activities","Pipeline"]},
    form:   {icon:"🧾", name:"Forms",          tools:["Questions","Responses","Settings","Preview"], side:null},
    reviews:{icon:"★", name:"Reviews",         tools:["All reviews ▾","Respond","Flag"], side:null},
    social: {icon:"◎", name:"Social Studio",   tools:["Compose","Calendar","Analytics","Assets"], side:["Instagram","LinkedIn","X","Facebook"]},
    phone:  {icon:"📞", name:"Front Desk",     tools:["Call log","Transfer","Hold","Notes"], side:["Incoming","Missed","Voicemail","Directory"]},
    viewer: {icon:"📑", name:"Document Viewer", tools:["◀","Page 1 of 1","▶","🔍 Zoom","Annotate"], side:null}
  };
  // which app each activity happens in: "<tool id>:<activity label>" → [app, window title, extra]
  const PARTS = {
    "dossier1:Client Dossier": ["docs", "Elias Thorne — Client Dossier", {doc:true}],
    "dossier1:ACT Email": ["mail", "Re: Elias's 5:30 AM voice note", {to:"Elias Thorne", from:"Office of Elias Thorne"}],
    "dossier1:Gatekeeping Practice": ["phone", "Front desk · inbound calls for Elias Thorne"],
    "forcemultiplier2:Anticipate the Real Need": ["chat", "Elias Thorne"],
    "forcemultiplier2:Prompt Engineering": ["ai", "New chat"],
    "forcemultiplier2:The Full Scenario": ["docs", "Monday plan — working draft", {doc:true}],
    "calendar:Daily Briefing Prompt": ["ai", "Tomorrow's briefing"],
    "calendar:Proactive EA Tasks": ["tasks", "This week · proactive"],
    "calendar:Travel & the Trip That Breaks": ["docs", "Chicago arbitration — trip plan", {doc:true}],
    "coldcalling4:Prioritize the Day": ["tasks", "Monday · 8:30 AM", {second:["mail", "Re: Summary of the 40-page brief", {to:"Partner", from:"Office of Elias Thorne"}]}],
    "coldcalling4:Prospect Call Log": ["crm", "Activities · call log"],
    "coldcalling4:Lead Generation Practice": ["crm", "Leads · Data Privacy practice"],
    "coldcalling4:Email Outreach Simulator": ["mail", "New outreach email", {from:"Office of Elias Thorne"}],
    "insurance5:Home Binder": ["docs", "Thorne Household — Home Binder", {doc:true}],
    "projectcompliance6:Compliance Risk": ["portal", "Licenses & registrations · Thorne & Partners Law Group"],
    "projectcompliance6:Operational Warning Signs": ["dash", "Trial team · KPI dashboard"],
    "projectcompliance6:Recovery Memo": ["docs", "Memo — Trial team recovery plan", {doc:true}],
    "projectcompliance6:Compliance Audit Simulation": ["portal", "Compliance audit · annual review"],
    "financial:Trust Ledger Reconciliation": ["ledger", "Client trust ledger · reconciliation"],
    "financial:Invoice & Bill Audit": ["ledger", "Bills & invoices · review queue"],
    "financial:Invoice Follow-Up": ["mail", "Follow-up on open invoices", {from:"Accounts · Thorne & Partners"}],
    "financial:Attention to Detail Test": ["viewer", "Billing documents.pdf"],
    "accessincident8:Least-Privilege Access Audit": ["admin", "Users & access · review"],
    "accessincident8:Verify Before You Disclose": ["phone", "Front desk · caller verification"],
    "accessincident8:Contain the Leak": ["mail", "Recall & containment", {from:"Office of Elias Thorne"}],
    "accessincident8:The Firm Is Exposed — Size It": ["dash", "Incident · Halvorsen production"],
    "accessincident8:Recommendation & Action Plan": ["docs", "BLUF — Recommendation to Elias", {doc:true}],
    "accessincident8:The Client Conversation": ["chat", "Halvorsen Logistics · General Counsel"],
    "compliance9:Event Invite & Registration Form": ["mail", "Invitation — Employment Law Update 2026", {to:"Clients & contacts (BCC)", from:"Office of Elias Thorne", split:{after:"#c9Invite", app:["form", "Registration — Employment Law Update 2026"]}}],
    "compliance9:Event Follow-Up": ["mail", "Event follow-up", {from:"Office of Elias Thorne"}],
    "compliance9:Meeting Notes & Action Items": ["docs", "Meeting notes & action items", {doc:true}],
    "compliance9:CLE Compliance Dashboard": ["dash", "CLE compliance · attorneys"],
    "compliance9:Negative Review Response": ["reviews", "Thorne & Partners Law Group · reviews", {briefInside:true}],
    "compliance9:Awards Tracker": ["tasks", "Awards & nominations"],
    "socialmedia10:Engagement Rate": ["social", "Analytics · last campaign"],
    "socialmedia10:Version Matching": ["social", "Compose · one post, four platforms"],
    "socialmedia10:Campaign Math": ["dash", "Campaign · cost per lead & ROI"],
    "socialmedia10:Brand Kit": ["social", "Assets · brand kit"],
    "socialmedia10:Marketing Plan": ["docs", "Marketing plan — next quarter", {doc:true}]
  };

  const e = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  function frame(kind, title, extra){
    const a = APPS[kind] || APPS.docs, x = extra || {};
    const win = document.createElement("div");
    win.className = `app-win app-${kind}${x.doc ? " app-doc" : ""}`;
    win.innerHTML = `
      <div class="aw-bar" aria-hidden="true"><span class="aw-dots"><i></i><i></i><i></i></span><span class="aw-app"><b>${a.icon}</b>${e(a.name)}</span><span class="aw-title">${e(title)}</span></div>
      <div class="aw-tools" aria-hidden="true">${a.tools.map(t=>`<span>${e(t)}</span>`).join("")}</div>
      ${x.to || x.from ? `<div class="aw-head">${x.from ? `<div><span>From</span>${e(x.from)}</div>` : ""}${x.to ? `<div><span>To</span>${e(x.to)}</div>` : ""}</div>` : ""}
      <div class="aw-main">${a.side ? `<nav class="aw-side" aria-hidden="true">${a.side.map((s,i)=>`<span class="${i===0?"on":""}">${e(s)}</span>`).join("")}</nav>` : ""}<div class="aw-body"></div></div>`;
    return win;
  }
  const KEEP = el => el.matches(".lab-kicker, h3[data-lab-lead]");
  function skinScreen(screen, key){
    if(screen.dataset.appSkin) return;
    const conf = PARTS[key]; if(!conf) return;
    // wait for labPolish to put "Activity N of M" and the heading in
    if(!screen.querySelector(":scope > .lab-kicker")) return;
    screen.dataset.appSkin = "1";
    const [kind, title, extra] = conf, x = extra || {};
    const kids = [...screen.children];
    let i = 0;
    while(i < kids.length && KEEP(kids[i])) i++;
    if(i < kids.length && kids[i].tagName === "P") i++;   // the activity's intro stays above the window
    // so does a briefing card with nothing to fill in (the event, the scenario): it's what the task is about
    const hasControl = el => el.matches("input,textarea,select,button,table") || !!el.querySelector("input,textarea,select,button,table");
    while(!x.briefInside && i < kids.length && kids[i].classList.contains("card") && !hasControl(kids[i]) && !kids[i].classList.contains("lab-notes-card")) i++;
    const rest = kids.slice(i);
    const notesAt = rest.findIndex(el => el.classList.contains("lab-notes-card"));
    const before = notesAt < 0 ? rest : rest.slice(0, notesAt), after = notesAt < 0 ? [] : rest.slice(notesAt + 1);
    if(!before.length) return;
    const place = (els, k, t, ex) => {
      if(!els.length) return null;
      const w = frame(k, t, ex); els[0].before(w);
      const body = w.querySelector(".aw-body"); els.forEach(el => body.appendChild(el));
      return w;
    };
    if(x.split){
      // one activity, two apps: everything up to (and including) the field named, then the rest
      const cut = before.findIndex(el => el.matches(x.split.after) || el.querySelector(x.split.after));
      if(cut >= 0){
        place(before.slice(0, cut + 1), kind, title, x);
        const [k2, t2, ex2] = x.split.app; place(before.slice(cut + 1), k2, t2, ex2);
      }else place(before, kind, title, x);
    }else place(before, kind, title, x);
    if(after.length){
      if(x.second){ const [k2, t2, ex2] = x.second; place(after, k2, t2, ex2); }
      else place(after, kind, title, x);
    }
    // a document editor's fields read as the page itself and grow with what's typed
    screen.querySelectorAll(".app-doc .aw-body textarea").forEach(t => {
      const grow = () => { t.style.height = "auto"; t.style.height = Math.max(t.scrollHeight, 90) + "px"; };
      t.addEventListener("input", grow); setTimeout(grow, 0);
    });
  }
  function skinLab(){
    if(typeof state === "undefined" || state.view !== "tool") return;
    const id = state.toolId, labels = (typeof toolState !== "undefined" && toolState.wizardLabels) || [];
    document.querySelectorAll("#toolBody .wizard-screen").forEach(s => {
      const i = +s.dataset.wizardIdx; if(labels[i]) skinScreen(s, `${id}:${labels[i]}`);
    });
  }
  window.skinLabApps = skinLab;
  const __after = window.afterRender;
  window.afterRender = function(){
    const r = __after ? __after.apply(this, arguments) : undefined;
    // the Practice Lab page: all ten labs on one screen (wide screens)
    document.body.classList.toggle("practice-onescreen", typeof state !== "undefined" && state.view === "practice");
    if(typeof state !== "undefined" && state.view === "practice") document.querySelectorAll(".tool-card .tool-desc2").forEach(d => { if(!d.title) d.title = d.textContent; });
    skinLab(); setTimeout(skinLab, 0); setTimeout(skinLab, 250); setTimeout(skinLab, 900);
    return r;
  };
  // a lab redrawn in place (a tool's own re-render) is skinned again as soon as its screens are back
  let queued = false;
  new MutationObserver(() => {
    if(queued || typeof state === "undefined" || state.view !== "tool") return;
    queued = true; requestAnimationFrame(() => { queued = false; skinLab(); });
  }).observe(document.documentElement, {childList:true, subtree:true});

  const css = `
.app-win{--aw:#262B45;--aw-soft:#EEF1FA;border:1px solid #CDD3E2;border-radius:12px;background:#fff;box-shadow:0 18px 40px -24px rgba(22,24,41,.45),0 2px 6px rgba(22,24,41,.06);overflow:hidden;margin:12px 0 16px;}
.app-win + .app-win{margin-top:18px;}
.aw-bar{display:flex;align-items:center;gap:12px;background:linear-gradient(180deg,#F7F8FB,#ECEFF5);border-bottom:1px solid #D9DEEA;padding:8px 12px;font-size:12.5px;color:#3A3F55;}
.aw-dots{display:flex;gap:6px;} .aw-dots i{width:11px;height:11px;border-radius:50%;background:#E5675B;display:block;} .aw-dots i:nth-child(2){background:#E9B949;} .aw-dots i:nth-child(3){background:#5FB56C;}
.aw-app{display:flex;align-items:center;gap:6px;font-weight:800;color:var(--aw);} .aw-app b{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:5px;background:var(--aw);color:#fff;font-size:11px;}
.aw-title{flex:1;text-align:center;font-weight:600;color:#4A4F66;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:60px;}
.aw-tools{display:flex;flex-wrap:wrap;gap:4px;padding:6px 10px;border-bottom:1px solid #E6E9F1;background:#fff;}
.aw-tools span{font-size:11.5px;font-weight:700;color:#3A3F55;padding:4px 9px;border-radius:6px;border:1px solid transparent;}
.aw-tools span:first-child{background:var(--aw-soft);color:var(--aw);}
.aw-head{padding:8px 16px;border-bottom:1px solid #E6E9F1;font-size:12.5px;color:#2B2F3E;}
.aw-head div{padding:3px 0;} .aw-head div + div{border-top:1px solid #F0F2F7;} .aw-head span{display:inline-block;width:52px;color:#6B7088;font-weight:600;}
.aw-main{display:flex;min-height:120px;}
.aw-side{flex:0 0 160px;background:#F6F7FB;border-right:1px solid #E6E9F1;padding:10px 8px;display:flex;flex-direction:column;gap:2px;}
.aw-side span{font-size:12px;font-weight:600;color:#4A4F66;padding:6px 10px;border-radius:7px;}
.aw-side span.on{background:var(--aw-soft);color:var(--aw);font-weight:800;}
.aw-body{flex:1;min-width:0;padding:16px 18px;}
.aw-body > .card{box-shadow:none !important;border:1px solid #E6E9F1 !important;background:#fff !important;}
.aw-body textarea, .aw-body input[type=text], .aw-body input[type=number], .aw-body select{border-radius:8px;}
@media(max-width:900px){ .aw-side{display:none;} .aw-title{margin-right:0;} }

/* app colours */
.app-docs{--aw:#2B5CB8;--aw-soft:#E6EEFB;} .app-mail{--aw:#1F6F78;--aw-soft:#E3F2F3;} .app-tasks{--aw:#3F7D58;--aw-soft:#E7F2EB;}
.app-ledger{--aw:#2F6B4A;--aw-soft:#E4F1EA;} .app-admin{--aw:#3C4268;--aw-soft:#E9EBF5;} .app-portal{--aw:#7A3E14;--aw-soft:#F7EBE0;}
.app-dash{--aw:#4B3FA8;--aw-soft:#ECEAFB;} .app-ai{--aw:#262B45;--aw-soft:#EEF0F6;} .app-chat{--aw:#5B3D99;--aw-soft:#EFE9FA;}
.app-crm{--aw:#A34E14;--aw-soft:#FBEDE2;} .app-form{--aw:#6B3FA0;--aw-soft:#F1EAFA;} .app-reviews{--aw:#9B3A30;--aw-soft:#F8E8E5;}
.app-social{--aw:#B0306A;--aw-soft:#FBE7F0;} .app-phone{--aw:#1F6F78;--aw-soft:#E3F2F3;} .app-viewer{--aw:#4A4F66;--aw-soft:#EEF0F6;}

/* a document editor: a page on a grey desk, its fields read as the page */
.app-doc .aw-main{background:#E9ECF2;}
.app-doc .aw-body{max-width:820px;margin:18px auto;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 8px 24px -12px rgba(0,0,0,.25);padding:34px 44px 28px;border-radius:2px;}
.app-doc .aw-body label, .app-doc .aw-body > div > label{display:block;font-family:'Fraunces',Georgia,serif;font-size:16px;font-weight:700;color:#1B1E2E;margin:14px 0 4px;}
.app-doc .aw-body textarea{width:100%;border:none !important;border-left:3px solid transparent !important;background:transparent !important;box-shadow:none !important;padding:4px 8px !important;font-size:14px;line-height:1.6;resize:none !important;min-height:90px;outline:none;}
.app-doc .aw-body textarea:focus{border-left-color:var(--aw) !important;background:#FAFBFE !important;}
.app-doc .aw-body textarea::placeholder{color:#9AA0B4;font-style:italic;}

/* mail: the body field is the message */
.app-mail .aw-body textarea{border:none !important;border-top:1px solid #EEF0F5 !important;border-radius:0 !important;box-shadow:none !important;min-height:150px;padding:10px 2px !important;font-size:14px;line-height:1.55;}
.app-mail .aw-body label{display:block;font-size:12.5px;font-weight:600;font-style:italic;color:#6B7088;text-transform:none;letter-spacing:0;margin:4px 0 2px;}

/* tasks: a table of tasks reads as a task list */
.app-tasks table{border-collapse:separate !important;border-spacing:0 6px !important;width:100%;}
.app-tasks thead th{background:transparent !important;color:#6B7088 !important;font-size:11px !important;text-transform:uppercase;letter-spacing:.05em;border:none !important;}
.app-tasks tbody tr{background:#fff;box-shadow:0 0 0 1px #E3E6EF;border-radius:10px;}
.app-tasks tbody td{border:none !important;padding:10px 12px !important;vertical-align:middle;}
.app-tasks tbody td:first-child{width:34px;color:transparent !important;position:relative;}
.app-tasks tbody td:first-child::before{content:"";position:absolute;left:12px;top:50%;width:16px;height:16px;margin-top:-8px;border:2px solid #9AA0B4;border-radius:50%;}
.app-tasks tbody tr:has(select option:checked:not([value=""])) td:first-child::before{border-color:var(--aw);background:var(--aw-soft);}
.app-tasks select{border-radius:999px !important;padding:5px 12px !important;font-weight:700;background:var(--aw-soft) !important;border:1px solid #CFE3D6 !important;color:#1B1E2E;}

/* ledger, admin, portal, dashboards: tables as the app's grid */
.app-ledger table, .app-admin table, .app-portal table, .app-dash table, .app-crm table, .app-social table{width:100%;border-collapse:collapse;}
.app-ledger th, .app-admin th, .app-portal th, .app-dash th, .app-crm th, .app-social th{background:var(--aw-soft) !important;color:var(--aw) !important;font-size:11.5px !important;text-transform:uppercase;letter-spacing:.04em;border-bottom:2px solid var(--aw) !important;}
.app-ledger td, .app-admin td, .app-portal td, .app-dash td, .app-crm td, .app-social td{border-bottom:1px solid #EEF0F5 !important;}
.app-ledger input[type=number], .app-ledger input[type=text], .app-dash input, .app-social input{font-family:'IBM Plex Mono',monospace;text-align:right;}
.app-ledger .calc-total, .app-dash .calc-total{font-family:'IBM Plex Mono',monospace;background:var(--aw-soft);border-radius:8px;}
.app-portal .aw-bar{background:linear-gradient(180deg,#7A3E14,#5E2F0F);color:#fff;} .app-portal .aw-app, .app-portal .aw-title{color:#fff;} .app-portal .aw-app b{background:#fff;color:#7A3E14;}
.app-portal .aw-tools{background:#FBF3EC;}
.app-admin .aw-bar{background:linear-gradient(180deg,#2B3052,#1E2238);color:#fff;} .app-admin .aw-app, .app-admin .aw-title{color:#fff;} .app-admin .aw-app b{background:#fff;color:#2B3052;}

/* AI assistant and messages: the field is the composer */
.app-ai .aw-main, .app-chat .aw-main{background:#FAFBFE;}
.app-ai .aw-body textarea, .app-chat .aw-body textarea{border-radius:14px !important;border:1px solid #D6DBE8 !important;box-shadow:0 4px 14px -10px rgba(22,24,41,.4);padding:12px 14px !important;}
.app-ai .aw-body > .card, .app-chat .aw-body > .card{border-radius:14px 14px 14px 4px !important;background:var(--aw-soft) !important;border:none !important;max-width:92%;}

/* reviews: the review as a card with stars */
.app-reviews .aw-body > .card{border-left:4px solid #E9B949 !important;}


/* a viewer: the document on a dark desk */
.app-viewer .aw-main{background:#3B3F52;} .app-viewer .aw-body{background:#fff;margin:16px auto;max-width:860px;border-radius:2px;}

/* forms: the registration form as a form builder */
.app-form .aw-main{background:#F3EEFA;} .app-form .aw-body{max-width:760px;margin:16px auto;background:#fff;border-radius:10px;border-top:8px solid var(--aw);}
.app-form .aw-body textarea{min-height:150px;}
`;
  const pageCss = `
/* Practice Lab page: the window's full width and all ten labs on one screen, five to a row */
@media (min-width:1200px){
  body.practice-onescreen main:not(.main-dash){max-width:none;padding:12px 24px 40px;}
  body.practice-onescreen .page-hero{padding:14px 22px !important;margin-bottom:10px !important;}
  body.practice-onescreen .page-hero h1{font-size:24px !important;margin:2px 0 !important;}
  body.practice-onescreen .page-hero .eyebrow{display:none !important;}
  body.practice-onescreen .page-hero p:not(.eyebrow){font-size:12.5px !important;margin:2px 0 0 !important;max-width:none !important;}
  body.practice-onescreen .tool-card .tool-body2 .module-icon{display:none !important;}
  body.practice-onescreen .tfb-fab{bottom:4px;padding:5px 12px;font-size:12px;}
  body.practice-onescreen main .card:not(.tool-card):not(.tool-card *){padding:8px 16px !important;margin-bottom:10px !important;}
  body.practice-onescreen main .card:not(.tool-card) *{font-size:12px !important;line-height:1.4 !important;margin-top:0 !important;margin-bottom:2px !important;}
  body.practice-onescreen .tool-grid{grid-template-columns:repeat(5,minmax(0,1fr)) !important;gap:12px !important;}
  body.practice-onescreen .tool-card .tool-head{min-height:0 !important;padding:9px 10px !important;}
  body.practice-onescreen .tool-card .mh-title{font-size:12.5px !important;line-height:1.25 !important;}
  body.practice-onescreen .tool-card .tool-body2{padding:8px 12px 10px !important;gap:6px !important;}
  body.practice-onescreen .tool-card .tool-desc2{font-size:12.5px !important;line-height:1.4 !important;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;flex:0 0 auto !important;}
  body.practice-onescreen .tool-card .tool-status-row{font-size:11.5px !important;padding:3px 9px !important;}
  body.practice-onescreen .tool-card .tool-open-btn{padding:7px !important;font-size:13px !important;}
}`;
  const st = document.createElement("style"); st.id = "eapa-lab-apps"; st.textContent = css + pageCss;
  (document.head || document.documentElement).appendChild(st);
  setTimeout(skinLab, 0);
})();
