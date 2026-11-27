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
