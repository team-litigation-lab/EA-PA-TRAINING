/* Day 9 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
   Written by hand for each slide, keyed "<day>::<topic title>".
   p1 = the topic's first slide, p2 = its second slide (Best Practices & Pitfalls).
   Each has "on" (what is on this slide, 2–3 sentences) and the script: say / ask (p1) or say / wrap (p2),
   plus the scenario for the room on p2. A single-slide topic shows p1 with p2's wrap and scenario.
   s1…s4 = section scripts for ① Core Principles, ② Step-by-Step, ③ Best Practices, ④ Go Deeper:
   when a slide is split over pages, Presenter view shows only the sections on the current page.
   steps = the full Step-by-Step script (numbered lines, read aloud); Presenter view shows it whenever
   the Step-by-Step section is on screen, and the Speaker Notes PDF includes it.
   Nothing here is generated at run time. */
window.PRESENTER_NOTES = Object.assign(window.PRESENTER_NOTES || {}, {
"9::Running an Event End-to-End": {
  "p1": {
    "on": "This slide says to track registration by name so gaps surface right away, not at the event. The steps: track each registrant's status from the moment registration opens, build the engagement-tracking plan (who attends what, what materials they need) beforehand, follow up on incomplete registrations early, reconcile registrations against actual attendance, and feed problems into next time.",
    "say": "Track by name, not just headcount.",
    "ask": "What went wrong the first time you managed registrations for anything?"
  },
  "p2": {
    "on": "This slide gives the event timeline. At 8–12 weeks: goals, budget, date, venue and invitation list. At 4–6 weeks: invitations, speakers, catering and AV. At 1 week: numbers, run-of-show, badges and materials. On the day: arrive early, tech check, track check-ins. After: thank-yous within 48 hours, feedback, budget reconciliation and lessons logged.",
    "say": "Thank-you notes go out within 48 hours.",
    "wrap": "Plan on the timeline, track by name and log the lessons.",
    "scenario": "Thorne & Partners is hosting a client appreciation evening for 60 guests in 10 weeks. What's done by week 8, week 4 and the day before?"
  },
  "s1": {
    "on": "This section's rule: track registration by name so gaps show up right away, not at the event.",
    "say": "By name, not by headcount."
  },
  "s2": {
    "on": "These steps run it: track by name, plan engagement ahead, follow up on incomplete registrations, reconcile against attendance, and feed lessons forward.",
    "say": "Reconcile who registered with who came."
  },
  "s3": {
    "on": "This section says to have the engagement-tracking plan ready before the event starts.",
    "say": "Plan before the day."
  },
  "s4": {
    "on": "This section gives the timeline: 8–12 weeks out for goals, budget and venue; 4–6 weeks for invitations and vendors; 1 week to confirm; the day itself; and thank-yous within 48 hours.",
    "say": "Thank-yous within 48 hours.",
    "ask": "What's the first thing you'd lock in 12 weeks out?"
  }
},
"9::Event Management Tips: Checklists, Run Sheets & the Day-Of Kit": {
  "p1": {
    "on": "This slide says events run on three documents (the master checklist, the run sheet and the contact sheet), most problems are predictable, and the assistant is the calm center on the day. The steps: build the checklist backwards from the date, write a timed run sheet, confirm vendors 48 hours before, pack a day-of kit, walk the venue, and debrief within a week.",
    "say": "Checklist, run sheet and contact sheet: those three run the day.",
    "ask": "What's the most common thing you've seen go wrong at an event?"
  },
  "p2": {
    "on": "This slide covers giving helpers one role each, building slack into the run sheet, and two pitfalls: the plan living in one person's head and skipping the debrief.",
    "say": "Build in slack. Events run late.",
    "wrap": "Three documents, confirmed vendors, a packed kit, and a debrief afterwards.",
    "scenario": "The firm's client breakfast starts at 8:00. At 7:20 the caterer hasn't arrived, the projector won't connect to Elias's laptop, and two guests have arrived early. Using your run sheet and contact sheet, what do you do in the next 10 minutes?"
  },
  "s1": {
    "on": "This section names the three event documents, the predictable problems and the assistant's role on the day.",
    "say": "Plan for the predictable problems."
  },
  "s2": {
    "on": "These steps: checklist, run sheet, vendor confirmations, the day-of kit, the venue walk and the debrief.",
    "say": "Confirm every vendor 48 hours before.",
    "ask": "What goes in your day-of kit?"
  },
  "s3": {
    "on": "This section covers helper roles, slack time, and the two pitfalls.",
    "say": "Always debrief."
  }
},
"9::Sending Invites: Calendar Invites & Event Invitations": {
  "p1": {
    "on": "This slide says a calendar invite is a small document and an event invitation is a first impression; a good invite answers what, when (with time zone), where or how to join, who and what to prepare; and event invitations follow a rhythm of save-the-date, invitation, reminders and final details. The steps: check availability, write a clear title with time zone and joining details, add an agenda and required or optional attendees, time event invitations and reminders, and update or cancel through the calendar.",
    "say": "What, when, where, who and what to prepare: all in the invite.",
    "ask": "What's the most useless meeting invite you've received?"
  },
  "p2": {
    "on": "This slide covers hiding guest lists for large events, checking the guest list when sending for Elias, and two pitfalls: a new invite for every change and forgotten time zones.",
    "say": "Update the invite; don't send a new one.",
    "wrap": "Check availability, send one complete invite, and keep it updated.",
    "scenario": "Elias wants a 45-minute call next week with a client in London, a partner in New York and an expert in Denver. Write the invite: title, time (showing each zone), joining details, agenda and attendees. What do you check before sending?"
  },
  "s1": {
    "on": "This section explains why invites matter, the five questions an invite answers and the event invitation rhythm.",
    "say": "An invite is a small document."
  },
  "s2": {
    "on": "These steps: check availability, a clear title and time zone, joining details, an agenda, event invitation timing, and updating or cancelling through the calendar.",
    "say": "Save-the-date six to eight weeks out.",
    "ask": "What goes in the invite title?"
  },
  "s3": {
    "on": "This section covers guest-list privacy, sending on Elias's behalf, and the two pitfalls.",
    "say": "Always check the time zone."
  }
},
"9::Sending Intake Forms: Event Registration & New-Client Questionnaires": {
  "p1": {
    "on": "This slide explains what an intake form is for (event attendees or new clients), that good forms ask only what's needed, and that forms often hold confidential information and may feed the conflict check. The steps: use the firm's approved tool with attorney approval for client questions, the right questions for events and for new clients, a short cover note with a deadline, and tracking, a reminder and moving the answers into the right system.",
    "say": "Ask only what you need, and collect it securely.",
    "ask": "What's the longest form you've abandoned halfway through?"
  },
  "p2": {
    "on": "This slide covers pre-filling and phone-friendly forms, telling people how their information will be used, and two pitfalls: asking for sensitive information by plain email and never moving the answers anywhere.",
    "say": "A form nobody reads is worse than no form.",
    "wrap": "Short, approved, secure, and the answers moved where they're needed.",
    "scenario": "Elias is meeting a potential new client, a small construction company, on Monday. He wants their details and the names of everyone involved in their dispute beforehand. Draft the six questions on your intake form, and the note you send with it."
  },
  "s1": {
    "on": "This section explains intake forms, keeping them short, and security and the conflict check.",
    "say": "Every extra question costs completions."
  },
  "s2": {
    "on": "These steps: the approved tool, event and client questions, the cover note, tracking and moving answers.",
    "say": "Test the link before you send it.",
    "ask": "What would you ask on a CLE event registration form?"
  },
  "s3": {
    "on": "This section covers pre-filling, explaining how information is used, and the two pitfalls.",
    "say": "Never collect sensitive documents by email."
  }
},
"9::CLE Management for Firm-Hosted Events": {
  "p1": {
    "on": "This slide explains that a firm hosting a CLE event acts as the provider with duties to state bars, that each state sets its own rules (advance approval, minutes per credit, categories, records), and that credit depends on paperwork. The steps: check each state's rules and deadlines months ahead, prepare and submit the application, track attendance properly, issue accurate certificates, and report and keep records as required.",
    "say": "The credit depends on the paperwork.",
    "ask": "Why might a state bar care how long someone actually stayed on a webinar?"
  },
  "p2": {
    "on": "This slide covers collecting bar numbers at registration, keeping a CLE file per event for audits, and two pitfalls: promising credit before approval and certificates showing hours not attended.",
    "say": "Say 'credit has been applied for' until it's approved.",
    "wrap": "Apply early, track attendance honestly, certify accurately and keep the file.",
    "scenario": "The firm is hosting a two-hour webinar, 'Employment Law Update,' in six weeks, with one hour of ethics. Attendees are licensed in New York, New Jersey and California. What do you do this week, what do you collect at registration, and what happens after the webinar?"
  },
  "s1": {
    "on": "This section explains the firm's role as a CLE provider, that state rules differ, and that credit depends on the paperwork.",
    "say": "Each state sets its own CLE rules."
  },
  "s2": {
    "on": "These steps: check states' rules, apply with agenda and materials, track attendance, issue certificates, report and keep records.",
    "say": "Track attendance the way each state requires.",
    "ask": "What goes on a certificate of attendance?"
  },
  "s3": {
    "on": "This section covers bar numbers at registration, the CLE file, and the two pitfalls.",
    "say": "Keep a CLE file for every event."
  }
},
"9::Speaker & Panelist Logistics for Conferences": {
  "p1": {
    "on": "This slide says that when the executive speaks, the EA's job covers travel, materials, tech and content prep, on the organizer's deadlines. The steps: keep one checklist per engagement (bio and headshot, slide deadline, AV needs, travel) with internal deadlines, confirm the format (keynote, panel, fireside chat) early, and send the executive one consolidated briefing.",
    "say": "One checklist per engagement, with deadlines ahead of the organizer's.",
    "ask": "How does prep differ for a keynote versus a panel?"
  },
  "p2": {
    "on": "This slide warns against treating a speaking engagement as just another calendar item. It says to confirm AV requirements with the venue directly, not only the organizer, and to send slides 24–48 hours before the organizer's deadline.",
    "say": "Confirm AV with the venue, not just the organizer.",
    "wrap": "Checklist, confirmed format, early deliverables and one briefing.",
    "scenario": "Elias is a panelist in three weeks, and the organizer wants his bio, headshot and pre-submitted questions by Friday. What's your process so it doesn't become a fire drill?"
  },
  "s1": {
    "on": "This section says speaking engagements need travel, materials, tech and content coordination, on the organizer's timeline.",
    "say": "Their deadlines, not ours."
  },
  "s2": {
    "on": "These steps coordinate: one checklist per engagement, the format confirmed early, and one consolidated briefing for the executive.",
    "say": "One checklist, one briefing."
  },
  "s3": {
    "on": "This section warns it's not just a calendar item, asks to confirm AV with the venue, and to send slides 24–48 hours before the deadline.",
    "say": "Send the deck early."
  }
},
"9::Sponsorship & Vendor Contract Basics for Events": {
  "p1": {
    "on": "This slide says sponsorships and event vendor agreements are real contracts, and the EA/PA is often first to notice an unfulfilled deliverable. The steps: confirm every deliverable owed (logo placement, attendee list, speaking slot) before the event, keep the signed agreement on hand during it, and track cost against value delivered for ROI.",
    "say": "Keep the signed agreement with you at the event.",
    "ask": "Which sponsorship deliverables would you check before the doors open?"
  },
  "p2": {
    "on": "This slide warns against assuming a promised deliverable happened: check the signage and confirm the attendee list arrived. It says never to auto-renew a sponsorship without assessing value, and to flag gaps to the organizer in writing, promptly.",
    "say": "A written flag on the day beats a complaint afterward.",
    "wrap": "Verify deliverables, keep the contract handy and flag gaps in writing.",
    "scenario": "At a sponsored event, the firm's logo is missing from the printed program even though the agreement guarantees it. What do you do in the moment, and what do you follow up on afterward?"
  },
  "s1": {
    "on": "This section says sponsorships are real contracts, and the EA often first notices an unmet deliverable.",
    "say": "Real contracts, real obligations."
  },
  "s2": {
    "on": "These steps manage them: verify deliverables beforehand, keep the agreement on hand at the event, and track cost against value.",
    "say": "Bring the agreement."
  },
  "s3": {
    "on": "This section warns against assuming deliverables happened or auto-renewing, and says to flag gaps in writing promptly.",
    "say": "Flag it in writing, in real time."
  }
},
"9::Live Event Moderation": {
  "p1": {
    "on": "This slide says live moderation is the real-time management of a virtual event, keeping it smooth for audience and presenter, following Reminder → Login Confirmed → Attendance Verified → Monitor → Document → Follow-Up. The steps: confirm login, audio and video beforehand, monitor actively, track participation for CLE-eligible sessions, and complete the post-event sequence including certificates and credit hours.",
    "say": "Monitor actively. Don't wait for something to break.",
    "ask": "What would you watch for during a live webinar?"
  },
  "p2": {
    "on": "This slide warns against passive moderation. It says to keep a visible checklist, document technical issues as they happen, and give speaking engagements extra oversight: an accurate introduction, loaded materials and confirmed recording.",
    "say": "A visible checklist beats memory during a live event.",
    "wrap": "Check beforehand, monitor actively, document and follow up.",
    "scenario": "Ten minutes into a webinar where Elias is the featured speaker, his audio starts cutting out and the audience is commenting in the chat. What do you do, in what order, without disrupting him more than necessary?"
  },
  "s1": {
    "on": "This section defines moderation as real-time management of a live event, with a fixed sequence: Reminder, Login, Attendance, Monitor, Document, Follow-Up.",
    "say": "Six steps, each catches a failure."
  },
  "s2": {
    "on": "These steps moderate: pre-checks before start, active monitoring, attendance tracking for CLE, and the post-event sequence.",
    "say": "Catch problems before start."
  },
  "s3": {
    "on": "This section warns against passive moderation, asks for a visible checklist and issue log, and adds speaking-engagement checks.",
    "say": "Active, not passive."
  }
},
"9::Post-Event Follow-Up & ROI Tracking": {
  "p1": {
    "on": "This slide says an event's real value comes afterward, because without structured follow-up, new connections decay like any other contact. The steps: build the follow-up list during the event with notes on who was met and what was discussed, follow up within 48–72 hours, and log attendance and outcomes in the main relationship tracker.",
    "say": "Follow up within 72 hours, while they still remember you.",
    "ask": "What note would you want next to each contact?"
  },
  "p2": {
    "on": "This slide warns that a stack of business cards with no notes is nearly useless a week later, and that generic follow-up (\"great meeting you\") doesn't work. It says to track a simple ROI measure per event: leads, relationships deepened, deals influenced.",
    "say": "Reference the actual conversation, not just the event.",
    "wrap": "Take notes live, follow up fast and track the ROI.",
    "scenario": "Elias returns from a three-day conference with 40 new contacts and no notes on any of them. How do you turn that stack into useful follow-up instead of one generic email to everyone?"
  },
  "s1": {
    "on": "This section says an event's value comes from follow-up; without it, connections decay.",
    "say": "The value is after."
  },
  "s2": {
    "on": "These steps follow up: build the list during the event, reach out within 48–72 hours, and log outcomes in the main system.",
    "say": "Within 48 to 72 hours."
  },
  "s3": {
    "on": "This section warns against business cards without notes and generic follow-ups, and asks for a simple ROI measure per event.",
    "say": "Reference the actual conversation."
  }
},
"9::High-Stakes Travel Disruption Management": {
  "p1": {
    "on": "This slide calls travel disruption a triage skill: the stakes are what the executive misses, and preparation from calmer days pays off. The steps: identify the single most time-critical commitment, check rebooking in the airline app while calling, evaluate alternatives in order (another airport, another airline, ground transport), send one clear message with the plan, and update every downstream party.",
    "say": "Find the fixed point first, then work backward.",
    "ask": "Why check the app while you're on hold?"
  },
  "p2": {
    "on": "This slide warns that the executive should never discover a disruption from an app notification first, and a stressed executive needs the resolved plan, not live narration. It warns against fixing the flight but breaking the car pickup or hotel check-in, and says to keep a standing note of hard constraints (no red-eyes, aisle seats, dietary needs).",
    "say": "Give them the plan, not the play-by-play.",
    "wrap": "Triage the fixed point, work options in parallel, send one message and fix the ripples.",
    "scenario": "Elias's connecting flight to a closing-day meeting is cancelled with no same-day rebooking, and the meeting can't move. Option one: a red-eye on another airline that lands two hours before. Option two: a private car for the last leg that costs much more but lets him sleep. How do you decide, and how do you present it?"
  },
  "s1": {
    "on": "This section frames disruption as triage: solve for the downstream consequence, not just the flight, and rely on your prep.",
    "say": "Solve for what they'd miss."
  },
  "s2": {
    "on": "These steps respond: fix the time-critical commitment first, check app and phone in parallel, go through alternatives in order, and send one clear plan message.",
    "say": "One message with the plan.",
    "ask": "What's the fixed point if a deposition is at 9 AM?"
  },
  "s3": {
    "on": "This section warns never to let the executive find out first, not to narrate every update, to re-confirm ripple effects, and to keep a note of hard constraints.",
    "say": "Re-confirm the car and the hotel."
  }
},
"9::Everyday Meeting Notes & Action Items": {
  "p1": {
    "on": "This slide says good notes capture decisions, action items and open questions, not a transcript; every action needs an owner and a date; and legal meeting notes may be privileged. The steps: agenda and template beforehand, decisions as clear statements, actions as verb plus owner plus date, send within 24 hours, and track the actions.",
    "say": "Every action needs an owner and a date.",
    "ask": "What makes meeting notes useless to someone who wasn't there?"
  },
  "p2": {
    "on": "This slide covers confirming unclear decisions in the room, labeling and limiting privileged notes, and two pitfalls: notes about who said what instead of what was decided, and actions with no owner.",
    "say": "'Someone will look into it' means no one will.",
    "wrap": "Decisions, actions with owners and dates, and open questions, sent within a day.",
    "scenario": "After a 45-minute Harlow strategy call, your notes say: 'Discussed deposition. Expert maybe. Budget concerns. Elias to think about it.' Rewrite them so someone who missed the call knows exactly what happens next."
  },
  "s1": {
    "on": "This section says notes capture decisions, actions and open questions, every action needs an owner and date, and legal notes may be privileged.",
    "say": "Notes aren't a transcript."
  },
  "s2": {
    "on": "These steps: agenda and template, decisions as statements, actions as verb plus owner plus date, send within 24 hours, track actions.",
    "say": "Send notes within a day.",
    "ask": "What goes at the top of the notes?"
  },
  "s3": {
    "on": "This section covers confirming decisions, privileged labels, and the two pitfalls.",
    "say": "An action with no owner belongs to no one."
  }
},
"9::Board Meeting Preparation & Minute Drafting": {
  "p1": {
    "on": "This slide says board prep makes decisions efficient once the board is in the room, and minutes are a legal and governance record, not a transcript. The steps: confirm the agenda early and circulate materials with lead time, build the packet the same way every time, capture attendance, motions, seconders and vote outcomes, draft minutes promptly in neutral language, and circulate drafts for correction.",
    "say": "Minutes record what was decided, not who argued what.",
    "ask": "What four things must you capture for every motion?"
  },
  "p2": {
    "on": "This slide warns against narrative minutes that record opinions and disagreement, which create legal exposure, and against vague language. \"The board discussed the budget\" isn't a minute; \"Motion to approve the FY26 budget as presented, seconded, passed 5–0\" is. Sensitive discussions may be noted without specifics, after checking with counsel, and a late packet can undermine a decision's legitimacy.",
    "say": "Vague motion language isn't a record.",
    "wrap": "Prepare early, capture the motions exactly and keep the minutes neutral.",
    "scenario": "A motion is raised, debated with real disagreement, amended once and passed 4–1. You're taking minutes live. What must you capture exactly, and what do you deliberately leave out?"
  },
  "s1": {
    "on": "This section says board prep happens in the days before, and minutes are a legal record of decisions, not a transcript.",
    "say": "Minutes record decisions."
  },
  "s2": {
    "on": "These steps prepare and record: confirm the agenda early, a consistent packet, attendance, motions, seconds and votes captured, prompt neutral drafts, and review before filing.",
    "say": "Motion, second, vote."
  },
  "s3": {
    "on": "This section warns against narrative minutes and vague motions, asks for guidance on sensitive topics, and says a late packet can undermine a decision.",
    "say": "'Passed 5–0' is a minute; 'discussed' isn't.",
    "ask": "How would you minute a budget vote?"
  }
},
"9::Shareholder & Investor Meeting (AGM) Logistics": {
  "p1": {
    "on": "This slide says an AGM has formal requirements beyond a board meeting: notice periods, quorum and voting procedures, building on board meeting preparation. The steps: confirm the required notice period for the meeting type and jurisdiction well in advance, track RSVPs against quorum, and prepare the structured packet scaled to the larger audience.",
    "say": "No quorum, no valid business.",
    "ask": "Why track RSVPs against quorum specifically?"
  },
  "p2": {
    "on": "This slide warns against treating an AGM as a bigger board meeting without checking the legal notice and quorum rules. It says to confirm voting and proxy procedures well in advance and never improvise them with shareholders in the room.",
    "say": "Proxy and voting procedures are never improvised.",
    "wrap": "Confirm notice, track quorum and settle voting procedures early.",
    "scenario": "You realize the AGM notice went out later than the jurisdiction's minimum notice period. What do you want confirmed before the meeting goes ahead as scheduled?"
  },
  "s1": {
    "on": "This section says AGMs have formal requirements beyond board meetings (notice, quorum, bigger attendee lists) and build on board prep.",
    "say": "Formal requirements apply."
  },
  "s2": {
    "on": "These steps prepare: confirm notice periods, track RSVPs against quorum, and prepare a structured packet with proxy and voting materials.",
    "say": "No quorum, no valid business."
  },
  "s3": {
    "on": "This section warns against treating an AGM as a bigger board meeting, and asks to confirm voting and proxy procedures early.",
    "say": "Don't improvise voting."
  }
},
"9::Executive Meeting Etiquette": {
  "p1": {
    "on": "This slide says executive-level video etiquette has a higher standard, and the EA/PA's conduct reflects on the executive. The point is removing friction, not formality. The steps: send a pre-call note (agenda, duration, participants and roles, format), join early to check the technology, keep your own presence professional and unobtrusive, and handle mechanics quietly so the executive can focus.",
    "say": "Join early. Problems get found before the executive arrives.",
    "ask": "What small lapse on a call reflects badly on the executive?"
  },
  "p2": {
    "on": "This slide warns that small lapses (background noise, a late join, an unprepared executive) add up. It says to send reminders 24–48 hours ahead with prep materials, confirm participants and roles in advance, and never let a technical or scheduling issue become the executive's problem to solve live.",
    "say": "The executive should never have to troubleshoot live.",
    "wrap": "Prepare them, join early, stay unobtrusive and handle the mechanics.",
    "scenario": "Thirty seconds before Elias's call with a prospective client, you notice the invite was for the wrong time zone and the client may have been waiting for an hour. What do you do right now?"
  },
  "s1": {
    "on": "This section says executive video etiquette is a real skill with a higher standard; your conduct reflects on the executive, and the aim is removing friction.",
    "say": "Remove the friction."
  },
  "s2": {
    "on": "These steps practice it: a pre-call note, joining early to test, professional presence, and handling mechanics quietly.",
    "say": "Join before the executive does."
  },
  "s3": {
    "on": "This section warns that small lapses cost more at this level, asks for 24–48 hour reminders, confirmed participants, and never making tech the executive's problem.",
    "say": "Tech is never their problem.",
    "ask": "What goes in a pre-call note?"
  }
},
"9::Video Conferencing: Platform Admin (Zoom/Teams/Meet)": {
  "p1": {
    "on": "This slide says platform admin means owning settings, scheduling and account configuration, not just attending. Zoom, Teams and Meet differ, and most problems are prevented by setup. The steps: set core settings before scheduling (waiting room, screen share, recording, notifications), use a platform-specific pre-meeting checklist, know how to manage participants live, and review account-level defaults periodically.",
    "say": "Set it up right beforehand, and most problems never happen.",
    "ask": "What settings would you check before a confidential call?"
  },
  "p2": {
    "on": "This slide warns that defaults don't suit every meeting, since a confidential internal call and a public webinar need different security. It says to test unfamiliar formats (webinars, breakout rooms) before going live, give a backup person access to the platform, and document platform quirks.",
    "say": "A sensitive call and a public webinar need different settings.",
    "wrap": "Configure per meeting type, test new formats and have a backup admin.",
    "scenario": "Elias's confidential strategy call with senior partners went out on a general meeting link with no waiting room or registration. What do you change before the call, and how do you raise it since the invite is already out?"
  },
  "s1": {
    "on": "This section says platform admin means owning settings and configuration, platforms differ, and most problems are prevented by setup.",
    "say": "Set up ahead, not live."
  },
  "s2": {
    "on": "These steps administer: confirm core settings, a platform pre-meeting checklist, live participant management, and periodic account-setting reviews.",
    "say": "Waiting room, sharing, recording: decide first."
  },
  "s3": {
    "on": "This section warns against one-size defaults, asks to test new formats first, give a backup person access, and document quirks.",
    "say": "Test new formats before they matter."
  }
},
"9::Video Conferencing: Technical Troubleshooting": {
  "p1": {
    "on": "This slide says most video problems fall into a few categories (login, audio and video, screen share), and the goal live is rapid triage, then documentation. The steps: for login, verify the link, check the browser and contact support; for audio and video, check device selection, app permissions and connection; keep a backup channel ready; and document every issue.",
    "say": "Get the call working first. Diagnose afterward.",
    "ask": "What's your backup if the platform fails completely?"
  },
  "p2": {
    "on": "This slide warns against trying every fix at once instead of working likely causes in order. It says to keep the provider's support contact handy, test unfamiliar setups in advance, and give participants a calm explanation during delays rather than silence.",
    "say": "Systematic beats random, even under pressure.",
    "wrap": "Triage in order, have a backup channel and document every issue.",
    "scenario": "Fifteen minutes before a critical client call, you find the meeting platform is down for planned maintenance you didn't know about. What's your triage sequence in the next five minutes?"
  },
  "s1": {
    "on": "This section says most problems fall into a few categories, live triage beats perfect diagnosis, and documentation improves the system.",
    "say": "Functional first, diagnose later."
  },
  "s2": {
    "on": "These steps troubleshoot: login checks then support, audio and video checks in order, a backup channel, and documenting every issue.",
    "say": "Work the likely causes in order."
  },
  "s3": {
    "on": "This section warns against trying everything at once, asks for the support contact handy, test runs for new setups, and calm explanations to participants.",
    "say": "Calm and clear during delays."
  }
},
"9::Four SOPs That Keep Professional Development on Track": {
  "p1": {
    "on": "This slide gives four SOPs, with a diagram. Event Registration: verify the provider, confirm budget and approval, and record the confirmation. Attendance Tracking: monitor live, export reports and save certificates in an audit-ready folder. Team Upskilling: assess needs quarterly, vet vendors and track completion and ROI. Reputation & Recognition: track awards and speaking, keep bios current, and escalate negative publicity.",
    "say": "Four SOPs, each preventing a specific, predictable failure.",
    "ask": "Which one would you be most tempted to skip?"
  },
  "p2": {
    "on": "This slide says each SOP prevents a specific failure: missing a legitimate event, losing a certificate needed for an audit, or spending on training that doesn't work. It summarizes the four at a glance, including measuring whether training actually changed performance.",
    "say": "Reputation & Recognition feels least urgent, so it's the one that gets skipped.",
    "wrap": "Run all four, especially the one that feels least urgent.",
    "scenario": "Elias wants to attend a $1,200 legal-tech summit from a provider you've never heard of. Walk through the Event Registration SOP before you book."
  },
  "s1": {
    "on": "This section introduces four SOPs: Event Registration, Attendance Tracking, Team Upskilling, and Reputation & Recognition.",
    "say": "Four SOPs."
  },
  "s2": {
    "on": "These steps run each: verify provider and budget, track attendance and save certificates, assess needs quarterly and measure ROI, and track recognition while escalating bad press.",
    "say": "Don't skip the one that feels least urgent."
  },
  "s3": {
    "on": "This section says each SOP prevents a specific, predictable failure, from lost audit certificates to missed recognition.",
    "say": "Each prevents a known failure."
  },
  "s4": {
    "on": "This section summarizes three of them: vet and register, store certificates where auditors can find them, and measure whether training changed performance.",
    "say": "Audit-ready storage."
  }
},
"9::CLE / Compliance Tracking": {
  "p1": {
    "on": "This slide says to log completed hours, pending hours and the deadline for each person. The steps: track per person, not as a total, flag anyone approaching a deadline with real time left, verify hours count toward the requirement (category and jurisdiction), set long lead times because deadlines rarely extend, and reconcile the tracker against certificates on file.",
    "say": "Per person, with real lead time, because these deadlines don't extend.",
    "ask": "Why is a single total hours number dangerous?"
  },
  "p2": {
    "on": "This slide explains CLE basics: each state bar sets total hours per reporting period (often 1–3 years) plus required categories such as ethics. Hours usually come from accredited providers and must be reported by a deadline, and some states allow carry-over. Keep every certificate as proof for an audit, and confirm each attorney's state rules.",
    "say": "The certificate is the proof. Keep every one.",
    "wrap": "Track per person, verify categories and keep the certificates.",
    "scenario": "Elias has 18 of 25 required hours, needs 2 more ethics hours, and his reporting deadline is in 7 weeks. What do you flag today, and what do you check about the hours he has?"
  },
  "s1": {
    "on": "This section's rule: log completed hours, pending hours and the real deadline for each person.",
    "say": "Per person, not in aggregate."
  },
  "s2": {
    "on": "These steps track it: individual records, early flags, verifying hours qualify, long reminder lead times, and reconciling against certificates.",
    "say": "Compliance deadlines rarely extend."
  },
  "s3": {
    "on": "This section says to flag people approaching a deadline while there's still time to act.",
    "say": "Not the week it's due."
  },
  "s4": {
    "on": "This section explains that each state bar sets its own hours, categories, providers and carry-over rules, and certificates are the audit proof.",
    "say": "Confirm each attorney's state rules.",
    "ask": "What proof would the bar want in an audit?"
  }
},
"9::Planning Professional Development": {
  "p1": {
    "on": "This slide says to offer virtual and in-person options to fit different schedules. The steps: define an effectiveness metric for each session beforehand (not just attendance), gather feedback immediately, track completion and outcomes over time to see patterns, and adjust the next session based on what you learned.",
    "say": "Attendance doesn't prove it worked.",
    "ask": "How would you measure whether this training session worked?"
  },
  "p2": {
    "on": "This slide gives four levels of effectiveness: Reaction (did people find it useful?), Learning (can they demonstrate the skill?), Behavior (are they using it weeks later?) and Results (did performance improve?). Even a simple before-and-after check on one skill tells you more than attendance.",
    "say": "One before-and-after check beats any attendance number.",
    "wrap": "Define the metric first, collect feedback fast and adjust.",
    "scenario": "The firm runs a lunch-and-learn on the new document management system. Define one measure at each of the four levels."
  },
  "s1": {
    "on": "This section's rule: offer virtual and in-person options to fit different schedules.",
    "say": "Fit the schedules."
  },
  "s2": {
    "on": "These steps plan it: both formats, an effectiveness metric set ahead, feedback right after, tracking outcomes over time, and adjusting future sessions.",
    "say": "Attendance isn't effectiveness."
  },
  "s3": {
    "on": "This section says to measure each session against effectiveness metrics, not attendance.",
    "say": "Measure what landed."
  },
  "s4": {
    "on": "This section gives four levels: Reaction, Learning, Behavior and Results, plus a simple before/after check.",
    "say": "Even a before/after check helps."
  }
},
"9::Membership Renewals": {
  "p1": {
    "on": "This slide says a renewal tracker (name, expiration, status, follow-up owner) catches lapses before they happen. The steps: track every membership, set reminders well before expiration, automate reminders once volume grows, confirm terms haven't changed before renewing, and review for memberships no longer used.",
    "say": "Remind well before expiry, and automate once there are many.",
    "ask": "Has a membership ever lapsed on you without warning?"
  },
  "p2": {
    "on": "This slide lists what to track per membership: organization, member, level, renewal date, annual cost, approver, auto-renew status and the payment method on file (expired cards are a common silent cause of lapses). A yearly value check stops paying for associations nobody attends.",
    "say": "Expired cards are why memberships lapse silently.",
    "wrap": "Track, remind early, check the payment method and review the value.",
    "scenario": "Elias's state bar membership, two practice-section memberships and a country club all renew within the next 60 days, and one card on file expires this month. Build the tracker rows and say what you'd do first."
  },
  "s1": {
    "on": "This section's rule: a renewal tracker (name, expiration, status, follow-up) catches lapses early.",
    "say": "Track, don't remember."
  },
  "s2": {
    "on": "These steps run it: build the tracker, set early reminders, automate as volume grows, check terms, and review what's still worth keeping.",
    "say": "Renewal isn't automatic approval."
  },
  "s3": {
    "on": "This section says to automate reminders once volume grows.",
    "say": "Automate."
  },
  "s4": {
    "on": "This section lists tracker fields including auto-renew status and payment method, warns expired cards cause silent lapses, and suggests a yearly value check.",
    "say": "Expired cards cause silent lapses."
  }
},
"9::Ethics & Gift Compliance": {
  "p1": {
    "on": "This slide says gifts and hospitality involving clients, vendors or officials can create real ethics exposure, and the rules are often stricter than intuition suggests. The steps: know the firm's gift and hospitality policy, log gifts given or received above any threshold, and take extra care with government officials and regulated parties.",
    "say": "Know the policy, and log anything above the threshold.",
    "ask": "Why is a gift to a government official different?"
  },
  "p2": {
    "on": "This slide warns against assuming a gift is fine because it's modest or \"everyone does this.\" When unsure, ask before accepting or sending, because an unnecessary question costs nothing compared with a compliance problem.",
    "say": "\"Everyone does this\" isn't a policy.",
    "wrap": "Check the policy, log the gift and ask when unsure.",
    "scenario": "A vendor sends an expensive bottle of whisky and a $300 restaurant voucher to the office for the holidays. What do you do with it, and what do you check first?"
  },
  "s1": {
    "on": "This section says gifts and hospitality carry real compliance exposure, and the rules are stricter than intuition.",
    "say": "Courtesy can cross a line."
  },
  "s2": {
    "on": "These steps comply: know the policy, log gifts above threshold, and take extra care with officials and regulated parties.",
    "say": "Log it even when it's fine."
  },
  "s3": {
    "on": "This section warns that 'modest' or 'everyone does it' isn't a test, and says to ask before accepting or sending.",
    "say": "Ask first.",
    "ask": "Would you accept a gift basket from opposing counsel?"
  }
},
"9::Professional Liability & Insurance Awareness": {
  "p1": {
    "on": "This slide says an EA/PA needn't be an insurance expert but should know professional liability (malpractice) coverage exists, and that spotting a possible claim early gives the firm more options. The steps: know where policy documents and renewal dates are filed, flag client language suggesting a complaint or damages to the right person, and keep policy dates on the compliance calendar.",
    "say": "Spot it early and route it. Never assess it yourself.",
    "ask": "What client language would make you escalate?"
  },
  "p2": {
    "on": "This slide warns against treating every complaint as routine, because the EA/PA is often first to see language that should be escalated. Never assess coverage or liability yourself; that goes to the attorney. Handle this correspondence with privileged-level discretion.",
    "say": "Coverage questions go to the attorney, always.",
    "wrap": "Know where the policy lives, flag early and keep it confidential.",
    "scenario": "A client's email says, \"We're considering our options given how this was handled.\" What's your read, and what do you do with the email beyond replying normally?"
  },
  "s1": {
    "on": "This section says EAs should know malpractice coverage exists and whom to flag issues to; early recognition gives the firm options.",
    "say": "Know it exists, know who to tell."
  },
  "s2": {
    "on": "These steps prepare: know where policies and renewal dates are, flag escalation language immediately, and calendar renewals.",
    "say": "Flag threats of complaint at once."
  },
  "s3": {
    "on": "This section warns against treating complaints as routine or assessing coverage yourself, and asks for confidentiality.",
    "say": "That's the attorney's call."
  }
},
"9::Protecting the Brand Online": {
  "p1": {
    "on": "This slide says to respond to negative reviews professionally and factually and never escalate publicly. The steps: monitor mentions and reviews proactively, respond calmly regardless of the tone of the original, apply the \"need to know\" principle to anything sensitive, draft a considered response rather than reacting, and escalate anything beyond a routine review, such as a legal threat or coordinated attack.",
    "say": "Never escalate publicly.",
    "ask": "How would your response differ written cold versus with time to think?"
  },
  "p2": {
    "on": "This slide says a well-handled negative review can do more for the brand than ten positive ones. It describes the \"need to know\" principle, called The Vault in training: information moves from Executive Secret to Organizational Liability the moment it's shared too widely.",
    "say": "A well-handled bad review beats ten good ones.",
    "wrap": "Monitor, respond calmly and factually, and escalate what's beyond routine.",
    "scenario": "A former client posts a one-star review: \"Thorne & Partners never returned my calls and overcharged me.\" Draft the public reply live, then say what you'd check before posting it."
  },
  "s1": {
    "on": "This section's rule: respond to negative reviews professionally and factually, never escalating in public.",
    "say": "Never escalate publicly."
  },
  "s2": {
    "on": "These steps protect it: monitor proactively, respond factually, apply need-to-know, draft carefully, and escalate legal threats or coordinated attacks.",
    "say": "Draft before you respond.",
    "ask": "How would you reply to an unfair review?"
  },
  "s3": {
    "on": "This section says a well-handled negative review can outdo ten positive ones, and describes 'The Vault' and the 'Cone of Silence'.",
    "say": "Need to know."
  }
},
"9::Awards, Recognition & Charitable Coordination": {
  "p1": {
    "on": "This slide says award applications need the same discipline as any application: exact eligibility, exact materials and a real deadline, with a diagram. The steps: keep a yearly awards tracker (name, deadline, eligibility, materials, status), confirm criteria early, track charitable commitments through to fulfilment, keep documentation of contributions for tax and reporting, and treat both as proactive reputation-building.",
    "say": "Strong nominations get missed because nobody tracked the deadline.",
    "ask": "Has your organization ever missed an award deadline?",
    "wrap": "Track awards and charitable commitments like any deadline, and keep the documentation.",
    "scenario": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documentation do you keep?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Track awards and charitable commitments like any deadline, and keep the documentation.",
    "scenario": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documentation do you keep?"
  },
  "s1": {
    "on": "This section says awards follow application discipline: exact eligibility, materials and deadline, or the nomination is out.",
    "say": "Miss one, you're out."
  },
  "s2": {
    "on": "These steps manage it: an awards tracker, early eligibility checks, confirmed charitable commitments, contribution records, and treating both as proactive reputation work.",
    "say": "Track what was committed and fulfilled."
  }
},
"9::Building an Executive's Media & Speaking Kit": {
  "p1": {
    "on": "This slide says a ready-to-send media kit (bio, headshot, talking points, past coverage) turns a press or speaking request into a same-day response, but only if it's current. The steps: keep a standing folder with short and long bios, a recent headshot and a one-page background, log past coverage and engagements, and refresh the kit quarterly.",
    "say": "A current kit turns a scramble into a same-day reply.",
    "ask": "When was Elias's bio last updated?"
  },
  "p2": {
    "on": "This slide warns against updating the bio only when asked, because by then it's stale. It says to keep headshots in print and web resolutions, and always review the kit before sending, since an old title or a finished project listed as ongoing undermines credibility.",
    "say": "Review before you send, every time.",
    "wrap": "Keep it current, keep formats ready and refresh quarterly.",
    "scenario": "A journalist needs Elias's bio and headshot in two hours for a feature. The bio on file is over a year old and names a role he no longer holds. What do you do, given the deadline?"
  },
  "s1": {
    "on": "This section says a ready media kit turns a request into a same-day response, and it's only useful if current.",
    "say": "Ready and current."
  },
  "s2": {
    "on": "These steps maintain it: a standing folder with bios, headshot and summary, a coverage log, and a quarterly refresh.",
    "say": "Refresh quarterly."
  },
  "s3": {
    "on": "This section warns against updating only on request, asks for multiple headshot formats, and a quick review before sending.",
    "say": "Review before it goes out."
  }
}
});
