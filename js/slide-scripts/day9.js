/* Day 9 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "9::Running an Event End-to-End": {
  "p1": {
   "why": "Track event registrations by name, not just by headcount, so you spot the gaps before the day.",
   "talk": "A headcount tells you 58 people are coming. A list by name tells you that the client who matters most never finished registering. The whole event runs on that kind of detail, from the first invitation to the thank-you notes afterwards.",
   "walk": [
    "First, track who has registered by name from day one.",
    "Next, plan before the event who's attending what and what materials they need.",
    "Then, follow up with anyone whose registration is incomplete, while there's still time.",
    "After that, compare the registration list with who actually came.",
    "Finally, write down what went wrong, so the next event is better."
   ],
   "ask": "What went wrong the first time you managed registrations for anything?"
  },
  "p2": {
   "why": "Thank-you notes go out within 48 hours of the event.",
   "talk": "An event works best when it's planned backwards from the date. Two to three months out, we settle the goals, budget, date, venue and guest list. A month or so out, invitations, speakers, catering and audio-visual. The week before, final numbers, the running order, badges and materials. On the day, we arrive early and test everything. And afterwards, thank-you notes go out within two days, while people still remember the evening.",
   "walk": [
    "First, eight to twelve weeks out: goals, budget, date, venue and guest list. Four to six weeks out: invitations, speakers, catering and audio-visual.",
    "Next, one week out: final numbers, the running order, name badges and materials. On the day: arrive early, test the technology and track check-ins.",
    "Finally, afterwards: thank-you notes within two days, feedback, the budget reconciled and lessons logged."
   ],
   "ask": "Thorne & Partners is hosting a client appreciation evening for 60 guests in ten weeks. What's done by week eight, by week four and by the day before?"
  }
 },
 "9::Speaker & Panelist Logistics for Conferences": {
  "p1": {
   "why": "When the executive is speaking at an event, the calendar entry is the smallest part of your job.",
   "talk": "Organizers have their own deadlines for bios, headshots, slides and technical needs, and they don't care about the executive's schedule. Miss one, and the speaking slot itself can be at risk. So you run it like a mini project.",
   "walk": [
    "First, make one checklist per speaking engagement: bio and headshot, slide deadline, technical needs and travel, each with its own due date.",
    "Next, confirm the format early: keynote, panel or fireside chat. Each needs different preparation.",
    "Finally, before the event, send the executive one briefing: the time, the format, who else is speaking and what's expected."
   ],
   "ask": "How would you prepare differently for a keynote than for a panel?"
  },
  "p2": {
   "why": "Aim to deliver everything a day or two before the organizer's deadline.",
   "talk": "A speaking slot is much more than a calendar entry; the preparation decides how it goes. Organisers will want a bio, a headshot, slides and technical details, usually by a deadline. We confirm the technical setup with the venue itself, not just the organiser, and we aim to deliver everything a day or two early, so a late change never becomes a crisis.",
   "walk": [
    "First, a speaking slot isn't just another calendar entry. The preparation decides how it goes.",
    "Next, confirm technical needs with the venue itself, not only the organizer.",
    "Finally, send the slides 24 to 48 hours before the stated deadline."
   ],
   "ask": "Elias is on a panel in three weeks, and the organizer wants his bio, headshot and suggested questions by Friday. How do you stop it becoming a last-minute scramble?"
  }
 },
 "9::Sponsorship & Vendor Contract Basics for Events": {
  "p1": {
   "why": "A sponsorship is a real contract, so check that everything promised is actually delivered.",
   "talk": "When the firm sponsors an event, it's owed specific things: its logo in certain places, maybe a speaking slot or the attendee list. You're often the first to notice something's missing, and noticing on the day is far better than noticing afterwards.",
   "walk": [
    "First, before the event, check each promised item against what's actually being provided.",
    "Next, keep the signed agreement with you during the event, in case there's a dispute.",
    "Finally, track what the sponsorship cost against the value it delivered."
   ],
   "ask": "Which sponsorship promises would you check before the doors open?"
  },
  "p2": {
   "why": "A written complaint on the day carries far more weight than a verbal one afterwards.",
   "talk": "When the firm sponsors an event, the agreement promises certain things, like the logo in the programme or a mention from the stage. We don't assume those promises were kept; we go and check. If something's missing, we raise it in writing on the day, because that carries far more weight than a comment afterwards. And we never renew a sponsorship automatically without asking whether it was worth it.",
   "walk": [
    "First, don't assume a promise was kept. Go and look.",
    "Next, never renew a sponsorship automatically without checking whether it was worth it.",
    "Finally, if something's missing, raise it in writing, promptly."
   ],
   "ask": "At a sponsored event, the firm's logo is missing from the printed program, even though the agreement guarantees it. What do you do in the moment, and what do you follow up on afterwards?"
  }
 },
 "9::Live Event Moderation": {
  "p1": {
   "why": "Moderating a live event means watching actively for problems, not waiting for them to happen.",
   "talk": "Once an online event starts, your job is to keep it running smoothly for both the audience and the speaker, without distracting the speaker. There's a simple rhythm: reminder, confirm login, check attendance, monitor, document and follow up.",
   "walk": [
    "First, before it starts, confirm the executive's login and check their audio and video. Fixing a problem before the start is much better than during.",
    "Next, during the event, watch for sound drops, screen-share failures and questions that need passing to the speaker.",
    "Then, for sessions that count toward professional credits, track attendance and times carefully.",
    "Finally, afterwards, confirm certificates and records, and document the session."
   ],
   "ask": "What would you watch for during a live webinar?"
  },
  "p2": {
   "why": "During a live event, a visible checklist beats memory every time.",
   "talk": "Running a live event well is mostly about watching. If we're actively monitoring the sound, the chat and the timing, we catch most problems before the audience notices. We keep a checklist in front of us instead of relying on memory, and we note even small technical glitches as they happen. For speaking events, we double-check the introduction, the slides, the recording and the audience numbers.",
   "walk": [
    "First, don't just react. Active monitoring catches most problems before the audience notices.",
    "Next, keep a checklist in front of you.",
    "Then, note technical problems as they happen, even small ones.",
    "Finally, speaking events need extra checks: an accurate introduction, slides loaded, the recording and the audience size."
   ],
   "ask": "Ten minutes into a webinar where Elias is the featured speaker, his audio starts cutting out and the audience is commenting in the chat. What do you do, and in what order, without disrupting him more than necessary?"
  }
 },
 "9::Post-Event Follow-Up & ROI Tracking": {
  "p1": {
   "why": "An event's real value comes from what happens after it, so follow up within three days.",
   "talk": "Meeting someone at an event is only a start. Without follow-up, that connection fades just like any other. The window is short: two or three days while they still remember the conversation.",
   "walk": [
    "First, make notes during the event on who you met and what you talked about.",
    "Next, follow up within 48 to 72 hours.",
    "Finally, record who attended and what came of it in your normal relationship tracking system."
   ],
   "ask": "What note would you want next to each new contact?"
  },
  "p2": {
   "why": "Mention the actual conversation, not just 'great meeting you at the conference.'",
   "talk": "The real value of an event shows up afterwards. A business card with no notes is almost useless a week later, so we capture a line about each conversation while it's fresh. Follow-ups mention what was actually discussed, not 'great to meet you at the conference'. And we track a simple measure for each event, like leads or relationships strengthened, so the firm knows which events are worth repeating.",
   "walk": [
    "First, a business card with no notes is almost useless a week later.",
    "Next, track a simple measure of value for each event, like leads or relationships strengthened.",
    "Finally, keep follow-ups personal and specific."
   ],
   "ask": "Elias comes back from a three-day conference with 40 new contacts and no notes on any of them. How do you turn that pile into real follow-up, instead of one generic email to everyone?"
  }
 },
 "9::High-Stakes Travel Disruption Management": {
  "p1": {
   "why": "When travel falls apart, first find the one thing the executive absolutely can't miss, and solve around that.",
   "talk": "The real problem is rarely the flight itself. It's the deposition, the closing or the board meeting at the other end. So you triage: what has to happen, and in what order? And this is where all the preparation from calm days pays off: the travel file, the backup contacts and knowing his preferences.",
   "walk": [
    "First, identify the fixed point: the one commitment he can't miss.",
    "Next, check the airline app while you're on the phone. Apps often show options faster than agents.",
    "Then, if no direct rebooking works, try another airport, another airline or a car for the final stretch, and warn the other side early if a delay is unavoidable.",
    "After that, send Elias one clear message: what happened, what you're doing and anything he needs to decide.",
    "Finally, once it's fixed, update everyone downstream: drivers, hotels and the meeting host."
   ],
   "ask": "Why check the app while you're waiting on hold?"
  },
  "p2": {
   "why": "A stressed executive needs the finished plan, not a running commentary.",
   "talk": "When travel falls apart, a stressed executive doesn't want a running commentary; he wants the finished plan. So we make sure he hears it from us before an airline app tells him, we sort it out quietly and then present the solution. And fixing the flight isn't the end. The car, the hotel and the meeting that depended on the old time all need checking, and the fix mustn't break his standing preferences, like no red-eyes.",
   "walk": [
    "First, never let him find out from an app before he hears from you.",
    "Next, don't narrate every step of your search.",
    "Then, fixing the flight isn't the end. Check the car and hotel that depended on the old time.",
    "Finally, keep his hard preferences in mind, like no red-eyes, so the fix doesn't break them."
   ],
   "ask": "Elias's connection to a closing-day meeting is cancelled, with no same-day rebooking, and the meeting can't move. Option one: a red-eye on another airline, landing two hours before. Option two: a private car for the last leg, costing much more but letting him sleep. How do you decide, and how do you present it?"
  }
 },
 "9::Board Meeting Preparation & Minute Drafting": {
  "p1": {
   "why": "Board minutes record what was decided and by whom, not who argued what.",
   "talk": "Most of a board meeting's work happens before anyone sits down: the agenda and the papers. And the minutes afterwards are a legal record, not a transcript. Both need precision, discretion and getting it right first time, because board mistakes are costly.",
   "walk": [
    "First, confirm the agenda with the executive, and often the chair, well ahead, and send papers early enough to be read.",
    "Next, put the board pack together the same way every time.",
    "Then, during the meeting, capture who's present and absent, each motion, who seconded it and the exact result.",
    "After that, write the minutes promptly, in neutral, factual language.",
    "Finally, send the draft round for corrections before it's finalized."
   ],
   "ask": "What four things must you capture for every motion?"
  },
  "p2": {
   "why": "'The board discussed the budget' isn't a minute; 'Motion to approve the budget, seconded, passed five to nothing' is.",
   "talk": "Board minutes are a legal record, not a story of the conversation. Writing down who said what, or how heated a debate got, can create legal risk. What gets recorded precisely is the decision: the motion, who seconded it and how the vote went. For sensitive topics, we check with the executive or counsel about what should be formally recorded. And papers sent to the board too late can even undermine a decision's legitimacy.",
   "walk": [
    "First, never write minutes as a story of the discussion. Recording opinions creates legal risk.",
    "Next, record motions precisely.",
    "Then, for sensitive topics, check with the executive or counsel what should be formally recorded.",
    "Finally, papers that arrive too late can undermine the legitimacy of a decision."
   ],
   "ask": "A motion is raised, debated with real disagreement, amended once and passed four to one. You're taking minutes live. What must you capture exactly, and what do you deliberately leave out?"
  }
 },
 "9::Shareholder & Investor Meeting (AGM) Logistics": {
  "p1": {
   "why": "If an annual shareholder meeting doesn't have enough people present, none of its decisions count.",
   "talk": "An annual general meeting, or AGM, has formal rules beyond a normal board meeting: legally required notice periods, a minimum number of attendees called a quorum, and often a bigger, more complicated guest list.",
   "walk": [
    "First, confirm the required notice period for this meeting and jurisdiction well in advance.",
    "Next, track RSVPs against the quorum requirement.",
    "Finally, prepare the pack with the same care as a board meeting, plus any proxy and voting materials."
   ],
   "ask": "Why track RSVPs against the quorum specifically?"
  },
  "p2": {
   "why": "Voting and proxy procedures are settled in advance, never improvised on the day.",
   "talk": "An annual general meeting, or AGM, isn't just a bigger board meeting. It comes with formal rules: how much notice shareholders must get, how many must be present for decisions to count, and how voting and proxy votes work. None of that can be improvised on the day, so we confirm it all well in advance.",
   "walk": [
    "First, an AGM isn't just a bigger board meeting. Its notice and quorum rules are formal requirements.",
    "Finally, confirm how voting and proxies work well ahead of time."
   ],
   "ask": "You realize the AGM notice went out later than the required minimum notice period. What do you want confirmed before the meeting goes ahead?"
  }
 },
 "9::Executive Meeting Etiquette": {
  "p1": {
   "why": "Join important calls a few minutes early, so any problems get found before the executive arrives.",
   "talk": "At executive level, small slips stand out: an open microphone, a late join or an unprepared executive. Etiquette here isn't stiffness; it's removing friction so the conversation gets full attention. And how you show up reflects on the executive.",
   "walk": [
    "First, give the executive a short note before the call: agenda, length, who's attending and their roles.",
    "Next, join a little early and check the technology works.",
    "Then, keep your own presence professional and low-key when you're supporting.",
    "Finally, handle the mechanics quietly, like muting noise, sharing documents and watching the chat."
   ],
   "ask": "What small slip on a call reflects badly on the executive?"
  },
  "p2": {
   "why": "The executive should never have to solve a technical or scheduling problem live.",
   "talk": "Good meeting etiquette doesn't happen by accident; it's prepared. A reminder goes out a day or two before, with any materials attached. We confirm in advance who's attending and what their roles are. And the whole point of that preparation is simple: the executive should never have to become the troubleshooter for a scheduling or technical problem in front of a client.",
   "walk": [
    "First, don't assume etiquette takes care of itself.",
    "Next, send a reminder 24 to 48 hours ahead, with any materials.",
    "Then, confirm who's attending and their roles in advance.",
    "Finally, the whole point of preparation is that the executive never becomes the troubleshooter."
   ],
   "ask": "Thirty seconds before Elias's call with a prospective client, you notice the invite used the wrong time zone and the client may have been waiting for an hour. What do you do right now?"
  }
 },
 "9::Video Conferencing: Platform Admin (Zoom/Teams/Meet)": {
  "p1": {
   "why": "Set up video calls properly beforehand, and most problems never happen.",
   "talk": "Running a meeting platform is different from attending a call. It means owning the settings, like waiting rooms, who can share screens, recording and registration. Zoom, Teams and Meet each work a little differently, so know your firm's main one well.",
   "walk": [
    "First, before scheduling, confirm the key settings: waiting room, screen sharing, recording and registration.",
    "Next, use a pre-meeting checklist for the platform: test access, check logins and attach the agenda.",
    "Then, know how to manage people live: mute, remove, promote to co-host and switch screens.",
    "Finally, review the account's default settings regularly."
   ],
   "ask": "What settings would you check before a confidential call?"
  },
  "p2": {
   "why": "A confidential call and a public webinar need very different settings.",
   "talk": "Different calls need different settings. A confidential strategy call needs a waiting room and restricted access; a public webinar needs registration and a moderator. So we don't just use the same defaults for everything. We test unfamiliar features, like breakout rooms, before we need them live, make sure someone else can also run the meeting, and write down the platform's quirks for whoever comes next.",
   "walk": [
    "First, don't use the same defaults for everything.",
    "Next, test any new format, like breakout rooms, before you need it live.",
    "Then, make sure someone else can also start and manage meetings.",
    "Finally, write down the platform's quirks for the next person."
   ],
   "ask": "Elias's confidential strategy call with senior partners went out on a general meeting link with no waiting room or registration. What do you change before the call, and how do you raise it, since the invite's already out?"
  }
 },
 "9::Video Conferencing: Technical Troubleshooting": {
  "p1": {
   "why": "When a call breaks, get it working first and work out why afterwards.",
   "talk": "Most video problems fall into a few predictable groups: login, audio and video, and screen sharing. A calm, step-by-step approach beats panic nearly every time. And writing down what happened turns one-off fixes into a system that improves.",
   "walk": [
    "First, for a login failure, check the link and the browser, then contact the platform's support.",
    "Next, for sound or picture problems, check the right device is selected, check permissions, then try leaving and rejoining.",
    "Then, before any important call, have a backup ready, like a phone number.",
    "Finally, record every problem, the fix and how long it took."
   ],
   "ask": "What's your backup if the platform fails completely?"
  },
  "p2": {
   "why": "Working through likely causes in order is faster than trying everything at once.",
   "talk": "When the technology fails, the instinct is to try everything at once. That's slower. Working through the likely causes in order, sound, then connection, then the device, fixes it faster. We keep the platform's support contact handy before we need it, test unfamiliar setups in advance, and while we're fixing things, a calm 'we're sorting out an audio issue, one moment' keeps it professional.",
   "walk": [
    "First, don't try every fix at once.",
    "Next, keep the platform's support contact handy before you need it.",
    "Then, test unfamiliar setups in advance.",
    "Finally, a calm 'we're fixing an audio issue, one moment' keeps things professional."
   ],
   "ask": "Fifteen minutes before a critical client call, you discover the platform is down for maintenance you didn't know about. What's your plan for the next five minutes?"
  }
 },
 "9::Four SOPs That Keep Professional Development on Track": {
  "p1": {
   "why": "Four simple procedures keep professional development organized, and each one prevents a specific failure.",
   "talk": "Four simple procedures keep professional development on track. Event registration: check the provider is legitimate, get approval and keep the receipt. Attendance: record it and save certificates where an auditor could find them. Team training: assess what people need each quarter and check whether it helped. And reputation: keep bios current, spot awards and speaking opportunities, and escalate bad publicity quickly.",
   "walk": [
    "First, for registrations, check the provider is legitimate and approved before booking.",
    "Next, for attendance, save certificates in one audit-ready folder.",
    "Then, for team training, assess needs quarterly and track whether it worked.",
    "After that, for reputation, watch for opportunities and escalate negative publicity immediately.",
    "Finally, don't skip the one that feels least urgent."
   ],
   "ask": "Which of the four would you be most tempted to skip?"
  },
  "p2": {
   "why": "The procedure that feels least urgent is the one that gets skipped, and it still matters.",
   "talk": "Each of the four exists to stop a predictable failure: a missed event, a lost certificate, training money spent on something that didn't help, or a missed chance for recognition. The trap is that the one that feels least urgent is the one that gets skipped, and months later that's the one that bites.",
   "walk": [
    "First, event registration: check, approve, register and calendar it.",
    "Next, attendance: record it, export reports and store certificates.",
    "Finally, upskilling: assess needs, choose providers carefully and measure the change."
   ],
   "ask": "Elias wants to attend a $1,200 legal-tech summit run by a provider you've never heard of. Walk through the registration procedure before you book."
  }
 },
 "9::CLE / Compliance Tracking": {
  "p1": {
   "why": "Track continuing education for each person individually, because these deadlines don't get extended.",
   "talk": "Lawyers must complete continuing legal education, or CLE, every reporting period. A single total for the firm hides who's actually at risk. So you track each person: what they've done, what they still need and their deadline.",
   "walk": [
    "First, record completed hours, remaining hours and the deadline for each person.",
    "Next, flag anyone getting close while there's still time to act.",
    "Then, check the hours actually count: the right category and the right state.",
    "After that, give reminders plenty of lead time.",
    "Finally, check the tracker against the certificates on file."
   ],
   "ask": "Why is a single total of hours for the firm dangerous?"
  },
  "p2": {
   "why": "The certificate is the proof, so keep every one.",
   "talk": "CLE stands for continuing legal education: the hours of training attorneys must complete to keep their licence. Each state sets its own total and its own required categories, like ethics. The hours usually have to come from approved providers, and some states let extra hours carry over. Our job is to track the hours, keep every certificate as proof and confirm the current rules for each attorney's state.",
   "walk": [
    "First, each state sets its own total hours and required categories, like ethics.",
    "Next, hours usually need to come from approved providers, and some states allow extra hours to carry over.",
    "Finally, keep a certificate for every course, and confirm the current rules for each attorney's state."
   ],
   "ask": "Elias has 18 of his 25 hours, still needs 2 ethics hours, and his deadline is in seven weeks. What do you flag today, and what do you check about the hours he already has?"
  }
 },
 "9::Planning Professional Development": {
  "p1": {
   "why": "A full room doesn't prove the training worked.",
   "talk": "Good training fits into people's real schedules, with online and in-person options. And it's judged by what people can actually do afterwards, not by how many people showed up. Attendance tells us the room was full; it doesn't tell us anyone learned anything.",
   "walk": [
    "First, offer online and in-person options where you can.",
    "Next, decide before the session how you'll judge whether it worked.",
    "Then, collect feedback right after the session.",
    "After that, track results over time, so you can see which formats work.",
    "Finally, use what you learn to improve the next session."
   ],
   "ask": "How would you measure whether a training session actually worked?"
  },
  "p2": {
   "why": "One simple before-and-after check tells you more than any attendance number.",
   "talk": "There's a simple way to think about whether training worked, in four levels. Did people find it useful? Can they show the new skill? Are they actually using it at work a few weeks later? And did performance improve? Most training only ever measures the first. Even a quick before-and-after check on the second tells us far more.",
   "walk": [
    "First, reaction: did people find it useful? Then learning: can they show the new skill?",
    "Next, behavior: are they using it at work weeks later?",
    "Finally, results: did performance actually improve?"
   ],
   "ask": "The firm runs a lunch-and-learn on the new document system. Define one measure at each of the four levels."
  }
 },
 "9::Membership Renewals": {
  "p1": {
   "why": "A simple renewal tracker catches lapsed memberships before they happen.",
   "talk": "Professional memberships, clubs and associations all renew at different times of year. Relying on the renewal notice, or on memory, is exactly how one quietly lapses, usually the one that mattered.",
   "walk": [
    "First, build a tracker with the name, expiry date, status and who follows up.",
    "Next, set reminders well before each expiry.",
    "Then, automate reminders once there are too many to remember.",
    "After that, check the terms and price haven't changed before renewing.",
    "Finally, review the list now and then for memberships nobody uses."
   ],
   "ask": "Has a membership ever lapsed on you without warning?"
  },
  "p2": {
   "why": "Expired cards are the most common reason memberships lapse without anyone noticing.",
   "talk": "For each membership, we track the basics: what it is, who the member is, the renewal date, the cost and who approves it. We also note whether it renews automatically and which card it's on, because expired cards are the most common reason memberships lapse without anyone noticing. And once a year, we ask whether each one is still worth paying for.",
   "walk": [
    "First, the organization, member, level, renewal date, cost and who approves it.",
    "Next, whether it auto-renews and which card is on file.",
    "Finally, whether it's still worth it. A yearly review stops you paying for things nobody uses."
   ],
   "ask": "Elias's state bar membership, two practice-section memberships and a country club all renew within 60 days, and one card on file expires this month. Build the tracker rows, and tell us what you'd do first."
  }
 },
 "9::Ethics & Gift Compliance": {
  "p1": {
   "why": "Gift rules are stricter than most people's instincts, so check the policy before accepting or giving anything.",
   "talk": "Gifts and hospitality with clients, vendors or officials can create real ethics problems. Something that feels like ordinary courtesy can still break a rule, or look like an attempt to influence someone.",
   "walk": [
    "First, know the firm's gift policy before accepting or offering anything beyond small courtesies.",
    "Next, log any gift above the policy limit, even if it seems fine.",
    "Finally, take extra care with government officials and regulated parties."
   ],
   "ask": "Why do you think a gift to a government official is treated differently?"
  },
  "p2": {
   "why": "'Everyone does this' is not a gift policy.",
   "talk": "The two phrases that get people into trouble are 'it's only small' and 'everyone does it'. Neither is a gift policy. Many firms and many clients have strict limits, especially around officials. So when a gift arrives or we're planning to send one, and we're not sure, we ask first. A quick question costs far less than a violation.",
   "walk": [
    "First, modest or common doesn't mean allowed.",
    "Finally, when unsure, ask first. It costs far less than a violation."
   ],
   "ask": "A vendor sends an expensive bottle of whisky and a $300 restaurant voucher to the office for the holidays. What do you do with them, and what do you check first?"
  }
 },
 "9::Professional Liability & Insurance Awareness": {
  "p1": {
   "why": "You don't need to understand malpractice insurance; you need to spot the warning signs and pass them on.",
   "talk": "Firms carry insurance against claims of professional mistakes. Catching early signs of a possible claim, like an unhappy client hinting at action, gives the firm many more options than finding out late.",
   "walk": [
    "First, know where the insurance documents and renewal dates are kept.",
    "Next, if a client's language suggests serious unhappiness, like mentions of complaints or damages, flag it immediately.",
    "Finally, keep renewal and review dates on the compliance calendar."
   ],
   "ask": "What kind of client language would make you escalate?"
  },
  "p2": {
   "why": "Never try to judge coverage or liability yourself; that always goes to the attorney.",
   "talk": "Assistants are often the first to see an email that hints at a complaint or a claim, something like 'we're considering our options'. That's not routine, and it needs to reach the attorney quickly. But deciding whether the firm is covered, or whether it's liable, is never our call. And these messages stay as confidential as any privileged matter.",
   "walk": [
    "First, you're often the first to see concerning language, so don't treat it as routine.",
    "Next, coverage questions are outside your role.",
    "Finally, keep these messages as confidential as any privileged matter."
   ],
   "ask": "A client's email says, 'We're considering our options given how this was handled.' What's your read, and what do you do beyond replying normally?"
  }
 },
 "9::Federal/State/Financial Infrastructure": {
  "p1": {
   "why": "A newly formed company isn't ready to operate until its tax IDs, registrations and bank account are in place.",
   "talk": "Forming the company makes it legal. Making it work needs three more layers: federal, with the IRS; state, with tax and labor agencies; and banking. And keeping business and personal money completely separate from day one is what protects the owner.",
   "walk": [
    "First, get the federal tax ID straight after formation. It's free from the IRS and needed for almost everything else.",
    "Next, register with the state tax agency, and the labor agency if there'll be employees.",
    "Then, open a separate business bank account, and never run business money through a personal one.",
    "After that, set up simple bookkeeping before the first transaction.",
    "Finally, if there'll be employees, register for payroll taxes before the first paycheck."
   ],
   "ask": "Is state tax registration automatic when a company is formed?"
  },
  "p2": {
   "why": "Mixing personal and business money, even once, weakens the owner's legal protection.",
   "talk": "Setting up a business properly means keeping its money completely separate from the owner's personal money, from the very first transaction. Mixing them, even once for convenience, can weaken the legal protection that the business structure is supposed to give. State tax registration is also a separate step that doesn't happen automatically, and each state where the business genuinely operates may need its own.",
   "walk": [
    "First, keep the separation absolute from the first transaction.",
    "Next, state tax registration is a separate step, never automatic.",
    "Then, keep copies of every registration in the permanent file.",
    "Finally, each state where the business really operates may need its own registration."
   ],
   "ask": "Elias's new consulting company has its tax ID and a bank account opening this week. He paid the attorney's invoice on his personal card 'to get it done faster' and plans to pay himself back. What's the risk, and how do you help him before it becomes a habit?"
  }
 },
 "9::Protecting the Brand Online": {
  "p1": {
   "why": "When someone posts a bad review, respond calmly and factually, and never argue in public.",
   "talk": "Watch for mentions of the firm, don't just wait for trouble. And a negative review, handled well, can actually do more for the firm's reputation than ten positive ones, because everyone sees how you respond.",
   "walk": [
    "First, monitor mentions and reviews regularly.",
    "Next, reply to negative comments professionally and factually, never heatedly.",
    "Then, apply 'need to know' to anything sensitive that comes up.",
    "After that, draft a considered reply rather than reacting in the moment.",
    "Finally, escalate anything beyond a routine review, like legal threats or coordinated attacks."
   ],
   "ask": "How would your reply differ if you wrote it angry versus after a pause?"
  },
  "p2": {
   "why": "A well-handled bad review can do more for the firm than ten good ones.",
   "talk": "Protecting a brand online has two sides. One is outward: watching what's being said and responding well, because a calm, professional reply to a bad review can impress readers more than ten good reviews. The other is inward, what we might call 'the vault': sensitive information is shared only with people who need it, because the moment it's mishandled, it becomes a liability.",
   "walk": [
    "First, monitor proactively and respond well.",
    "Finally, protect sensitive information strictly: need to know, and a cone of silence."
   ],
   "ask": "A former client posts a one-star review: 'Thorne & Partners never returned my calls and overcharged me.' Let's draft the public reply together, then decide what you'd check before posting it."
  }
 },
 "9::Awards, Recognition & Charitable Coordination": {
  "p1": {
   "why": "Great nominations get missed simply because nobody tracked the deadline.",
   "talk": "An award application is like any other application: exact eligibility, exact materials and a firm deadline. Miss one, and a strong nomination is out. Charitable commitments need the same care, because a promise isn't the same as a donation made and documented.",
   "walk": [
    "First, keep a simple tracker of awards worth pursuing: name, deadline, eligibility, materials and status.",
    "Next, confirm the criteria and materials well before the deadline.",
    "Then, for charitable pledges, track both the commitment and whether it was fulfilled.",
    "After that, keep records of donations, because they often matter for tax purposes.",
    "Finally, treat awards and charity as proactive reputation-building."
   ],
   "ask": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documents do you keep?"
  }
 },
 "9::Building an Executive's Media & Speaking Kit": {
  "p1": {
   "why": "A ready media kit turns a last-minute press request into a same-day reply.",
   "talk": "A media kit is a folder with the executive's current bio, a good headshot, key talking points and past coverage. It's only useful if it's current; sending an old bio or an outdated title looks careless.",
   "walk": [
    "First, keep a standing folder with a short and a long bio, a recent headshot and a one-page summary.",
    "Next, keep a running list of past media and speaking engagements.",
    "Finally, review and refresh the kit every quarter."
   ],
   "ask": "When was Elias's bio last updated?"
  },
  "p2": {
   "why": "Always glance over the kit before you send it.",
   "talk": "A media kit, meaning the bio, headshots and talking points, goes stale quietly. If we only update it when someone asks, it's usually been out of date for months, and there's never time to fix it under a deadline. So we keep headshots in sizes for print and online, refresh the bio whenever something changes, and glance over the whole kit before it goes anywhere.",
   "walk": [
    "First, updating only when asked means it's usually been stale for months.",
    "Next, keep headshots in several sizes, for print and online.",
    "Finally, check for outdated details, like an old title, before anything goes out."
   ],
   "ask": "A journalist needs Elias's bio and headshot in two hours. The bio on file is over a year old and lists a role he no longer holds. What do you do, given the deadline?"
  }
 }
});
