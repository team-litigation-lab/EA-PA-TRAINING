/* ============================================================
   🔠 SKILL-BUILDING ACTIVITY TYPE — the standard (the owner: "bigger, bolder, prominent fonts in all skill building
   activity, that is the standard")
   Every Practice Lab activity (#toolBody .wizard-screen) reads at 16–17px and bold: the activity's title, its
   briefing and instructions, lists, labels, fields and buttons, the step tabs and the one-try note. The apps' own
   grids (the calendar, the spreadsheet trackers) keep their sizes, so their layouts don't break.
   Also the 🛠 Practice Lab page: every tool card in a row the same height, its header sized for two lines, so each
   card's status and Open Tool sit on one line across the row.
   Loaded last.
   ============================================================ */
(function(){
  "use strict";
  if(typeof document === "undefined") return;
  const W = "#toolBody .wizard-screen";
  const notGrid = ":not(.gcw *):not(.xl-grid *):not(.sheet *):not(table *)";
  const st = document.createElement("style"); st.id = "eapa-lab-type"; st.textContent = `
/* the activity's heading */
${W} > .lab-kicker{font-size:14px !important;font-weight:800 !important;letter-spacing:.12em;}
${W} > h3{font-size:27px !important;font-weight:800 !important;line-height:1.25;margin:4px 0 12px;}
${W} h3.lab-sub{font-size:21px !important;font-weight:800 !important;}
${W} h4${notGrid}{font-size:14px !important;font-weight:800 !important;letter-spacing:.06em;}
/* the briefing and instructions: 16.5px, bold, darker ink */
${W} p${notGrid},${W} li${notGrid},${W} .card${notGrid},${W} .lead${notGrid}{font-size:16.5px !important;font-weight:600 !important;line-height:1.55 !important;color:#1E2340;}
${W} p b${notGrid},${W} li b${notGrid},${W} p strong${notGrid},${W} li strong${notGrid}{font-weight:800 !important;}
${W} label${notGrid}{font-size:15.5px !important;font-weight:700 !important;}
/* what the trainee types and picks */
${W} textarea${notGrid},${W} input[type="text"]${notGrid},${W} input:not([type])${notGrid},${W} input[type="number"]${notGrid},${W} select${notGrid}{font-size:16px !important;font-weight:600 !important;line-height:1.5;}
/* the buttons */
${W} .btn${notGrid},${W} .lab-cta{font-size:15.5px !important;font-weight:800 !important;}
/* the step tabs, the part label and the one-try note */
#toolBody .wizard-tab .wt-l{font-size:14.5px !important;font-weight:700 !important;}
#toolBody .wizard-tab .wt-n{font-size:13px !important;font-weight:800 !important;}
#toolBody .wizard-part-label{font-size:14px !important;font-weight:700 !important;}
#toolBody .lab-disclaimer .lab-disc-body > b{font-size:15px !important;}
#toolBody .lab-disclaimer p{font-size:15.5px !important;font-weight:600 !important;}
/* the app windows' title bars and side lists */
${W} .aw-bar{font-size:14px !important;font-weight:700 !important;}
${W} .aw-tools span,${W} .aw-side span{font-size:13.5px !important;font-weight:700 !important;}

/* 📧💬📞 a task from Elias: the message it arrives in (email, text or call), then the trainee's move */
.eli-task{border:1px solid #D9DEEC;border-left:5px solid #1E2340;border-radius:12px;background:#fff;padding:14px 18px;margin:0 0 14px;box-shadow:0 6px 16px -12px rgba(30,35,64,.35);}
.eli-task-h{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;padding-bottom:8px;margin-bottom:10px;border-bottom:1px solid #E7EAF2;font-size:14.5px;color:#3F4560;}
.eli-task-h b{color:#1E2340;font-size:15.5px;}
.eli-ch{display:inline-flex;align-items:center;gap:5px;padding:3px 11px;border-radius:999px;background:#1E2340;color:#fff;font-weight:800;font-size:13px;letter-spacing:.03em;}
.eli-text .eli-ch{background:#1F7A45;} .eli-call .eli-ch{background:#B5651F;}
.trip-act{border-left:5px solid #DB8437 !important;background:#FFF8F0 !important;padding:12px 16px !important;margin:0 0 6px;}
/* ✈ the trip, as the trainee builds it */
.trip-h{margin:22px 0 8px !important;color:#1E2340;font-size:21px !important;font-weight:800 !important;}
.trip-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px 14px;margin:0 0 10px;}
#toolBody .trip-grid > label{display:flex !important;flex-direction:column !important;align-items:stretch !important;gap:5px;color:#1E2340;font-family:Inter,Arial,sans-serif !important;}
#toolBody .trip-grid > label > .trip-in{width:100%;box-sizing:border-box;}
.trip-grid label.wide{grid-column:1 / -1;}
.trip-in{font:600 16px/1.4 Inter,Arial,sans-serif;padding:8px 10px;border:1.5px solid #C9CFE6;border-radius:8px;background:#fff;color:#1E2340;min-width:0;}
.trip-in:focus{outline:none;border-color:#1E2340;box-shadow:0 0 0 3px rgba(30,35,64,.12);}

/* 🛠 the Practice Lab page: the cards in a row line up — same height, a two-line header, status and Open Tool at the foot */
.tool-grid{align-items:stretch !important;}
.tool-grid > .tool-card{height:100%;display:flex !important;flex-direction:column;}
.tool-card .tool-head{min-height:86px !important;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;}
.tool-card .tool-body2{flex:1 1 auto;display:flex !important;flex-direction:column;}
.tool-card .tool-desc2{flex:1 1 auto;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:15px !important;font-weight:600 !important;color:#1E2340 !important;}
.tool-card .tool-status-row{margin-top:auto;font-size:14px !important;font-weight:700 !important;}
.tool-card .tool-open-btn{font-size:15.5px !important;font-weight:800 !important;}
`; document.head.appendChild(st);
})();
