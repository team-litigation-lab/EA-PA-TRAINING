/* ============================================================
   📧💬📞 EVERY ACTIVITY IS A TASK FROM ELIAS (the owner: "the activity should be like a task assigned by Elias either
   via email, text and call, so they can start ACT and BLUF on a daily basis")
   Each Practice Lab activity opens with the message it came in: an email, a text or a call from Elias Thorne, in his
   voice, asking for the work the activity already grades. Under it, the trainee's move: ACT on it (Acknowledge,
   Clarify, Timeline), then reply BLUF, the bottom line first. The activity itself, its fields and its grading are
   unchanged, so every trainee's saved work stays where it is.
   TASKS: "<activity label>" (or "<tool id>:<activity label>" for one day's own) → [channel, message].
   Loaded last; it wraps renderToolWizard.
   ============================================================ */
(function(){
  "use strict";
  if(typeof document === "undefined" || typeof renderToolWizard !== "function" || renderToolWizard.__eliTask) return;
  const E = "email", T = "text", C = "call";
  const TASKS = {
    // Day 1
    "Client Dossier": [E, "Before you book a single thing for me, I want my profile in one place: how I like things done, who matters, what I won't do. Build it, and tell me when it's done."],
    "Preference Trackers": [E, "You'll get my preferences wrong once. Make sure it's only once: track them so anyone covering for you gets them right too."],
    "ACT Email": [E, "A client asked me for something I can't answer yet. Reply for me the way we agreed: acknowledge, clarify what's missing, and give a timeline."],
    "Gatekeeping Practice": [C, "I'm in back-to-backs all afternoon. People will call and walk up asking for me. Handle them: who gets through, who gets a slot, who gets a polite no."],
    // Day 2
    "Anticipate the Real Need": [T, "Get me ready for tomorrow. (That's all I'm going to say. Work out what I actually need.)"],
    "Prompt Engineering": [E, "Use the AI tools to get this done faster, but I want output I can use, not filler. Write the prompt properly and show me what it gives you."],
    "The Full Scenario": [E, "Here's a messy one with a lot moving at once. Take it end to end, and come back to me with what's done and what needs me."],
    "Inbox Triage": [T, "My inbox is out of control. Sort it: what's urgent, what you can handle, what's for me. Bottom line first."],
    // Day 3
    "Calendar Conflict Resolver": [E, "My week doesn't hold together. Fix it: keep, move, delegate or cut every event, and tell me why in one line each."],
    "Daily Briefing Prompt": [T, "Send me tomorrow's briefing tonight. BLUF, then the day in order. I'll read it on my phone."],
    "Proactive EA Tasks": [E, "Don't wait for me to ask. What should already be in motion this week? Show me the list."],
    "Crisis Roleplay": [C, "Something's gone wrong and I need you on it now. Stay calm, tell me what you know, what you've done, and what you need from me."],
    // Day 4
    "Prioritize the Day": [E, "Monday's a mess and the partner just dropped an impossible deadline on us. Order the day, push back where you have to, and tell me the plan."],
    "Prospect Call Log": [E, "Make the calls on the prospect list and log every one properly. I want to see who's warm by end of day."],
    "Lead Generation Practice": [E, "We need more of the right clients. Find me leads that fit, and tell me why each one is worth a call."],
    "Live Intake Call Simulator": [C, "A new caller is on the line for an intake. Take the call for me, get what we need, and give me the summary after."],
    "Email Outreach Simulator": [E, "Write the outreach to the prospects. Short, specific, and in my voice: I don't send templates."],
    // Day 5
    "Classify the Risk": [E, "My family's exposed in ways I haven't had time to look at. Sort the risks for me: what's serious, what's minor."],
    "Match the Strategy": [E, "For each risk, tell me what we do about it: avoid it, reduce it, insure it or accept it. One line each."],
    "Home Binder": [E, "Build the home binder: the vendors, the policies, the contacts, so the house runs whether I'm here or not."],
    // Day 6
    "Compliance Risk": [E, "Check our licenses across the states before something lapses. Tell me what's off and what it puts at risk."],
    "Operational Warning Signs": [E, "The dashboard shows something isn't right. Find what's off-target and tell me what it means."],
    "Recovery Memo": [E, "The trial team's project has slipped. Draft the recovery memo: where we are, the plan, and what I need to decide."],
    "Compliance Audit Simulation": [E, "We're being audited. Walk through it with me and make sure we're ready: what's in order, what isn't."],
    // Day 7
    "Trust Ledger Reconciliation": [E, "The trust account has to reconcile to the penny. Do it, and flag anything that doesn't add up."],
    "Invoice & Bill Audit": [E, "Audit this week's invoices and bills before anything goes out or gets paid. Catch what's wrong."],
    "Invoice Follow-Up": [E, "We have open invoices. Decide the right follow-up for each and send it. Firm, polite, no chasing tone."],
    "Attention to Detail Test": [T, "Proofread this before it goes to the client. One error and it's my name on it."],
    // Day 8
    "Least-Privilege Access Audit": [E, "Who can get into what? Audit our system access and tell me who has more than they need."],
    "Verify Before You Disclose": [C, "Someone's calling asking for confidential details and says they're authorised. Verify them before you tell them anything."],
    "Contain the Leak": [C, "Something confidential got out. Contain it now: what you've done, what's still open, what you need from me."],
    "The Firm Is Exposed — Size It": [E, "Tell me how bad this is. Size the exposure: who, what, how much, and how fast it gets worse."],
    "Recommendation & Action Plan": [E, "Give me your recommendation and the action plan, BLUF first. I'll decide from your one page."],
    "The Client Conversation": [C, "I need to tell the client. Help me with exactly what to say, and what not to."],
    // Day 9
    "Event Invite & Registration Form": [E, "We're hosting a CLE seminar. Write the invitation and build the registration form. It goes out today."],
    "Event Follow-Up": [E, "Follow up with the registrants who haven't confirmed, and the ones who came. Keep it warm and short."],
    "Meeting Notes & Action Items": [C, "We just finished the strategy call. Turn it into clean notes: decisions, owners, deadlines."],
    "CLE Compliance Dashboard": [E, "Where is everyone on their CLE credits? Build me the dashboard and flag who's behind."],
    "Negative Review Response": [T, "We got a bad review online. Draft the response for me to approve. Professional, never defensive."],
    "Awards Tracker": [E, "Track the awards and rankings we're up for: the deadlines, what each needs, and who owns it."],
    // Day 10
    "Engagement Rate": [E, "Which of our posts actually worked? Work out the engagement rates and show me the winner."],
    "Version Matching": [E, "Match each version of the post to the platform it belongs on, and tell me why."],
    "Campaign Math": [E, "Run the numbers on the campaign before I approve the spend: the reach, the cost, the return."],
    "Brand Kit": [E, "Put together the brand kit: our voice, our look, what we never do. One submission: make it right."],
    "Marketing Plan": [E, "Draft the marketing plan for next quarter: the goal, the channels, the calendar, the budget. One submission."]
  };
  const LABEL = {email: "📧 Email", text: "💬 Text", call: "📞 Call"};
  const FROM = {email: "Subject: ", text: "Text · ", call: "Call · "};
  const esc_ = v => String(v == null ? "" : v).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
  const toolId = () => (typeof state !== "undefined" && state.toolId) || "";
  function card(label){
    const x = TASKS[toolId() + ":" + label] || TASKS[label]; if(!x) return "";
    const [ch, msg] = x;
    return `<div class="eli-task eli-${ch}" data-eli-task>
      <div class="eli-task-h"><span class="eli-ch">${LABEL[ch]}</span><b>From: Elias Thorne</b><span>${FROM[ch]}${esc_(label)}</span></div>
      <p class="eli-msg">${ch === "call" ? "“" : ""}${esc_(msg)}${ch === "call" ? "”" : ""}</p>
      <p class="eli-move"><b>Your move:</b> <b>ACT</b> on it (Acknowledge, Clarify, Timeline), then reply <b>BLUF</b>: the bottom line first.</p>
    </div>`;
  }
  const __rtw = renderToolWizard;
  window.renderToolWizard = renderToolWizard = function(dayId, parts){
    let html = String(__rtw.apply(this, arguments));
    const labels = (parts || []).map(p => p && p.label);
    let i = -1;
    // each activity's screen: the message from Elias under its title (unless the activity already opens on one: Travel)
    html = html.replace(/(<div class="wizard-screen[^"]*"[^>]*>)([\s\S]*?)(?=<div class="wizard-screen|$)/g, (m, open, body) => {
      i++; const lb = labels[i];
      if(!lb || /data-eli-task|class="eli-task/.test(body)) return m;
      const c = card(lb); if(!c) return m;
      const k = body.indexOf("</h3>");
      return k >= 0 ? open + body.slice(0, k + 5) + c + body.slice(k + 5) : open + c + body;
    });
    return html;
  };
  renderToolWizard.__eliTask = true;
  // (Day 3's Proactive EA Tasks redraws its screen after the wizard is drawn, js/eapa-updates.js ptPartHtml: the message
  // goes into that redraw too)
  if(typeof ptPartHtml === "function" && !ptPartHtml.__eliTask){
    const __pt = ptPartHtml;
    window.ptPartHtml = ptPartHtml = function(){
      const h = String(__pt.apply(this, arguments)), k = h.indexOf("</h3>");
      return /class="eli-task/.test(h) || k < 0 ? h : h.slice(0, k + 5) + card("Proactive EA Tasks") + h.slice(k + 5);
    };
    ptPartHtml.__eliTask = true;
  }
  const st = document.createElement("style"); st.id = "eapa-eli-tasks"; st.textContent = `
#toolBody .eli-task .eli-msg{font-size:17px !important;font-weight:600 !important;line-height:1.55 !important;color:#1E2340;margin:0 0 8px !important;}
#toolBody .eli-task.eli-call .eli-msg{font-style:italic;}
#toolBody .eli-task .eli-move{font-size:15px !important;font-weight:600 !important;color:#7A3F12 !important;background:#FFF8F0;border-radius:8px;padding:7px 11px;margin:0 !important;}
`; document.head.appendChild(st);
})();
