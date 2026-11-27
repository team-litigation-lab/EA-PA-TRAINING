/* ============================================================
   ✉️ The ACT email habit: Day 1 teaches the ACT email (Acknowledge · Clarify · Timeline); from Day 2 on, every day's
   Practice Lab opens with one. Elias hands over the day's work in a message as unstructured as real requests are,
   and the trainee answers it with an ACT email before doing any of it: the first thing they do on every task.

   • Each lab of Days 2–10 gets "ACT Email" as its first activity (renderToolWizard is wrapped: the lab's own parts
     follow, unchanged). It's graded like Day 1's (the AI rubric on Acknowledge, Clarify, Timeline) and saves its
     mark as the activity's, so the day's Knowledge Check waits for it like any other activity.
   • In the deck its slide comes first, right after the day's agenda (js/eapa-deck-lab.js AT_START).
   • The activity is listed with the lab's others in js/eapa-deck-lab.js ACTIVITIES, js/eapa-updates.js
     SOP_LAB_ACTIVITIES and js/eapa-lab-apps.js (it opens in the mail app).
   ============================================================ */
(function(){
"use strict";
if(typeof window === "undefined" || typeof renderToolWizard !== "function" || window.eapaActHabit) return;
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);

// Elias's message for each day: the day's work, handed over the way he really writes (at odd hours, several threads,
// gaps the EA must spot). "needs" is what a good reply acknowledges; "unknowns" what it should clarify (and not ask
// what the Client Profile already answers); the grader reads both.
const DAYS_ACT = {
  2: {time: "6:12 AM — text", msg: "Inbox is a mess after the board meeting. Get through it today: anything from the Halvorsen GC or the court comes to me first. And set up that AI thing so I get a summary of the long threads instead of reading them. Also the investor update needs to go out — you know the one.",
      needs: "triage the post-board-meeting inbox today; Halvorsen GC and court emails to Elias first; an AI summary of long threads; send the investor update",
      unknowns: "which investor update (and its deadline and approver); which AI tool the firm allows for privileged email; whether 'first' means forwarded or flagged"},
  3: {time: "9:47 PM — text", msg: "Chicago arbitration moved up to the 14th. That kills Thursday. Fix my week, keep the Halvorsen call no matter what, and get me out there the night before. My daughter's recital is the 13th, I'm not missing it.",
      needs: "rebuild the week around the arbitration moving to the 14th; keep the Halvorsen call; travel to Chicago the night before; protect the recital on the 13th",
      unknowns: "the recital's time (it decides whether a late flight on the 13th works); whether anyone else from the trial team travels too; which Thursday commitments can move and to when"},
  4: {time: "7:05 AM — voice note (transcribed)", msg: "We need more data privacy clients. Pull together a list of companies that just had a breach in the news, call the good ones, and send something to the rest. Oh, and that 40-page brief summary — the partners want it today too.",
      needs: "build a lead list of companies with recent breaches; call the strongest leads; email the rest; the 40-page brief summary for the partners today",
      unknowns: "how many leads and by when; who signs the outreach (Elias or a partner) and any approved script; the brief summary's length and its deadline, since it competes with the outreach for today"},
  5: {time: "8:20 PM — text", msg: "Contractor at the house left the gate open again, and the home insurance renews next month. Can you sort the vendors out and get the binder up to date? Sarah's asking about the nanny's contract too.",
      needs: "deal with the contractor and the gate; review the home insurance before the renewal next month; update the household binder; the nanny's contract that Sarah asked about",
      unknowns: "the exact renewal date and the current carrier; what Sarah needs on the nanny's contract (a renewal, a change, or a question); whether Elias wants the contractor replaced or just spoken to"},
  6: {time: "7:58 AM — email", msg: "We're doing Miami. Lease review is next week. Also bookkeeping says a couple of our registrations are up for renewal and the trial team's behind again. I need one view of where we stand by Friday.",
      needs: "start the Miami satellite office set-up ahead of next week's lease review; the registrations up for renewal; the trial team falling behind; one status view by Friday",
      unknowns: "which registrations and their expiry dates; who the Florida-licensed attorney for Miami will be; what 'one view' should look like (a memo, a dashboard or a meeting)"},
  7: {time: "6:40 AM — text", msg: "The trust account didn't match last month. Find out why before anyone notices. And chase the invoices that are past 60 days — nicely, they're good clients. QuickBooks is still showing the old rates.",
      needs: "reconcile last month's trust account and find the difference; follow up invoices over 60 days, politely; fix the old rates in QuickBooks",
      unknowns: "the amount it was off and which account; who must be told if a trust discrepancy is confirmed (it can't stay quiet); which rates are current and from what date"},
  8: {time: "11:03 PM — text", msg: "Someone's been in the Halvorsen folder who shouldn't be. And a production went to the wrong address today. Handle it, quietly. I'll call the client tomorrow.",
      needs: "find who accessed the Halvorsen folder without need; contain the misdirected production today; prepare for Elias's client call tomorrow",
      unknowns: "who discovered each issue and when; what was in the production and who received it; whether IT and the firm's incident lead are already involved (quietly can't mean skipping the firm's incident steps)"},
  9: {time: "8:15 AM — voice note (transcribed)", msg: "The CLE seminar's in three weeks and half the RSVPs haven't confirmed. Someone left us a one-star review saying we ignored them. And the awards deadline — I think it's this month? Get on all of it.",
      needs: "chase unconfirmed RSVPs for the CLE seminar in three weeks; respond to the one-star review; check and meet the awards deadline",
      unknowns: "the awards' name and exact deadline; whether the reviewer is a client (it changes what can be said publicly); the seminar's confirmed-attendance target and its venue cut-off"},
  10: {time: "5:52 AM — text", msg: "LinkedIn numbers looked off last month. Find out which posts actually worked and plan next quarter. And the new brand colours are out — make sure nothing goes out in the old ones.",
      needs: "analyse last month's LinkedIn engagement and find the best posts; plan next quarter's content; switch everything to the new brand colours",
      unknowns: "what 'off' means (reach, engagement, followers) and against what; next quarter's goal and budget; where the new brand kit is and who approves posts"}
};
const LABEL = "ACT Email";
const dayOfTool = id => { const t = (typeof PRACTICE_TOOLS !== "undefined" ? PRACTICE_TOOLS : []).find(x => x.id === id); return t ? parseInt(String(t.relates || "").replace(/[^0-9]/g, ""), 10) || 0 : 0; };

function partHtml(day){
  const x = DAYS_ACT[day];
  return `
    <h3 style="margin:0 0 6px;color:var(--navy);font-size:15px;">First: answer Elias with an ACT email</h3>
    <p style="font-size:12.8px;color:var(--ink-soft);margin:0 0 12px;">The habit from Day 1, before any of today's work: every task starts with an <b>ACT email</b>. <b>A</b>cknowledge what he needs, <b>C</b>larify only what you can't answer yourself (the Client Profile answers a lot), and give a <b>T</b>imeline. Then do the work in the next activities.</p>
    <div class="act-box">
      <div class="act-card"><b>A</b>Acknowledge every thread in his message in a line each: show you understood, not just that you received it.</div>
      <div class="act-card"><b>C</b>Clarify the 1–3 real unknowns. Don't ask what the Client Profile already tells you.</div>
      <div class="act-card"><b>T</b>Timeline: when he'll have each answer, draft or confirmation, and from whom if it's not you.</div>
    </div>
    <div class="voice-note"><span class="vn-time">${E(x.time)}</span><p style="font-size:14px;color:#fff;margin:6px 0 0;line-height:1.5;">"${E(x.msg)}"</p></div>
    <label style="font-size:12.8px;font-weight:600;color:var(--navy);display:block;margin:14px 0 5px;">Your ACT email reply</label>
    <textarea id="actHabitDraft" style="width:100%;min-height:170px;padding:10px 12px;border-radius:8px;border:1px solid var(--line);font-size:13px;font-family:inherit;resize:vertical;" placeholder="Subject: ...&#10;&#10;Elias — ..."></textarea>
    <div style="margin-top:12px;"><button class="btn btn-navy btn-sm" onclick="eapaActHabit.review(this, ${day})">Get Review</button></div>
    <div id="actHabitFeedback" style="margin-top:12px;"></div>`;
}

async function review(btn, day){
  const x = DAYS_ACT[day], draft = (document.getElementById("actHabitDraft") || {}).value || "";
  const el = document.getElementById("actHabitFeedback"), toolId = state.toolId;
  if(draft.trim().length < 20){ toast("Write your ACT email first."); return; }
  if(!(await useLabAttempt(day, "actHabit"))) return;
  if(btn){ btn.disabled = true; btn.textContent = "Reviewing…"; }
  el.innerHTML = `<div class="ai-loading">Reviewing your ACT email…</div>`;
  try{
    const report = await runRubricEvaluation(
      `ACT Email — Day ${day}: answering Elias before the day's work`,
      `CLIENT: Elias Thorne, Managing Owner & CEO, Thorne & Partners Law Group (the Client Profile describes his preferences).\n\nHIS MESSAGE (${x.time}):\n"${x.msg}"\n\nWHAT HE NEEDS (every thread): ${x.needs}.\nTHE REAL UNKNOWNS: ${x.unknowns}.`,
      draft.trim(),
      `Acknowledge: does it restate every thread of his message (not just one), showing it was understood? Clarify: does it ask only the 1–3 genuinely missing things (such as: ${x.unknowns}), and avoid questions the Client Profile answers? Timeline: does it give when each item will be done or answered, and by whom if not the EA? BLUF and brevity suit a busy managing partner; it promises nothing the EA can't deliver and doesn't give legal advice.`
    );
    el.innerHTML = `<b style="font-size:13px;color:var(--navy);display:block;margin-bottom:8px;">Evaluation Report — Your ACT Email</b>` + renderEvaluationReport(report, day);
    await bumpPracticeProgress(toolId, report.totalScore);
    if(report.totalScore >= 85 && typeof burstConfetti === "function") burstConfetti();
  }catch(e){
    el.innerHTML = renderAiErrorBlock(e, "Couldn't get feedback");
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = "Get Review"; }
  }
}

// every lab of Days 2–10 opens with the ACT email; its own parts follow unchanged
const __wizard = renderToolWizard;
renderToolWizard = window.renderToolWizard = function(dayId, parts){
  const day = dayId || dayOfTool(state.toolId);
  if(DAYS_ACT[day] && Array.isArray(parts) && !(parts[0] && parts[0].label === LABEL)) parts = [{label: LABEL, html: partHtml(day)}].concat(parts);
  return __wizard.call(this, dayId, parts);
};

window.eapaActHabit = {DAYS_ACT, LABEL, review, partHtml};
})();
