/* Day 9 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through). */
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
   "ask": "What went wrong the first time you managed registrations for anything?",
   "scenario": "The firm's client breakfast has 45 'yes' replies, but when you check names, three key Meridian contacts haven't answered at all. It's two weeks out. What do you do now, and who do you tell?"
  },
  "p2": {
   "why": "Thank-you notes go out within 48 hours of the event.",
   "talk": "An event works best when it's planned backwards from the date. Two to three months out, we settle the goals, budget, date, venue and guest list. A month or so out, invitations, speakers, catering and audio-visual. The week before, final numbers, the running order, badges and materials. On the day, we arrive early and test everything. And afterwards, thank-you notes go out within two days, while people still remember the evening.",
   "walk": [
    "First, eight to twelve weeks out: goals, budget, date, venue and guest list. Four to six weeks out: invitations, speakers, catering and audio-visual.",
    "Next, one week out: final numbers, the running order, name badges and materials. On the day: arrive early, test the technology and track check-ins.",
    "Finally, afterwards: thank-you notes within two days, feedback, the budget reconciled and lessons logged."
   ],
   "ask": "Thorne & Partners is hosting a client appreciation evening for 60 guests in ten weeks. What's done by week eight, by week four and by the day before?",
   "scenario": "The client evening went well, but three days later, no thank-you notes have gone out and the caterer's final bill is sitting unchecked. What do you do today, and what goes in the notes for next year?"
  }
 },
 "9::Event Management Tips: Checklists, Run Sheets & the Day-Of Kit": {
  "p1": {
   "why": "Events look effortless when three simple documents are doing the work behind the scenes.",
   "talk": "Every well-run event has three documents: a master checklist with an owner and date for every task, a run sheet that lays out the day minute by minute, and a contact sheet with every vendor and helper's phone number. Most event problems are predictable, like a late caterer, a missing badge or a projector that won't connect. On the day, we're the calm center: we know where everything is and who to call.",
   "walk": [
    "First, we build the checklist from a template, working back from the date.",
    "Next, we write the run sheet: times, who leads each part, what it needs and what's next.",
    "Then we confirm every vendor 48 hours before.",
    "After that, we pack a day-of kit: printed sheets, spare badges, chargers, tape, first aid and the slides on a USB.",
    "Finally, we walk the venue before guests arrive, and debrief within a week."
   ],
   "ask": "What's the most common thing you've seen go wrong at an event?",
   "scenario": "Elias is hosting a 40-person client seminar in three weeks, and the only plan so far is a hotel booking. What are the first five lines of your master checklist, and who owns each?"
  },
  "p2": {
   "why": "Event habits decide whether the next event is easier or just as stressful.",
   "talk": "Give every helper one clear role, like registration, greeting, tech or looking after the speaker, and a copy of the run sheet. Build 10 to 15 minutes of slack into the schedule, because events almost always run late. Two traps: the only copy of the plan living in one person's head, and skipping the debrief, so the same problem comes back next year.",
   "walk": [
    "First, one role per helper.",
    "Next, build in slack.",
    "Then, share the plan, don't hold it.",
    "Finally, always debrief."
   ],
   "ask": "Where would you build slack into a 90-minute seminar?",
   "scenario": "The firm's client breakfast starts at 8:00. At 7:20 the caterer hasn't arrived, the projector won't connect to Elias's laptop, and two guests have arrived early. Using your run sheet and contact sheet, what do you do in the next 10 minutes?"
  }
 },
 "9::Sending Invites: Calendar Invites & Event Invitations": {
  "p1": {
   "why": "A single wrong detail in an invite can make a whole meeting fail, and an event invitation is the guest's first impression.",
   "talk": "A calendar invite is a small document. A good one answers five questions at a glance: what it is, when it is with the time zone, where or how to join, who's needed and what to prepare. Event invitations follow a rhythm: a save-the-date, then the invitation with an RSVP date, reminders, and final details the day before.",
   "walk": [
    "First, we check availability, then send one invite, not a chain of emails.",
    "Next, a clear title, the right time zone, and the link, dial-in and location in the invite.",
    "Then a short agenda, anything to read, and who's required or optional.",
    "After that, for events: save-the-date six to eight weeks out, invitation three to four weeks out, reminders at a week and a day.",
    "Finally, we update the existing invite when things change, and cancel through the calendar."
   ],
   "ask": "What's the most useless meeting invite you've ever received?",
   "scenario": "Elias asks you to 'set up a call with Harlow's team.' You don't know who from Harlow, how long, or whether it's video or phone. What do you ask before you send anything?"
  },
  "p2": {
   "why": "Most invite problems come from shortcuts: new invites, missing time zones and open guest lists.",
   "talk": "For big external events, hide the guest list or use a registration link, so guests don't see each other's details or hit reply-all. When sending on Elias's behalf, confirm the guest list with him and send from his calendar with delegate access. Two traps: sending a new invite for every change, so old ones sit in calendars and people show up at the wrong time, and forgetting time zones for cross-country or international calls.",
   "walk": [
    "First, protect guest lists for big events.",
    "Next, confirm the list and send from his calendar.",
    "Then, update, don't resend.",
    "Finally, always check time zones."
   ],
   "ask": "How would you show the time for a call with London, New York and Denver so nobody gets it wrong?",
   "scenario": "Elias wants a 45-minute call next week with a client in London, a partner in New York and an expert in Denver. Write the invite: title, time (showing each zone), joining details, agenda and attendees. What do you check before sending?"
  }
 },
 "9::Sending Intake Forms: Event Registration & New-Client Questionnaires": {
  "p1": {
   "why": "A good intake form means the event or the first meeting starts with everything you need, instead of a scramble.",
   "talk": "An intake form collects what we need before something happens: an attendee's details before an event, or a new client's information before their first meeting. A good one asks only what's needed, in plain words, with the required fields clear, because every extra question means fewer people finish it. And forms often collect personal or confidential information, so they're sent and stored securely. For new clients, the answers may also feed the conflict check.",
   "walk": [
    "First, we use the firm's approved form tool, and the attorney approves client intake questions.",
    "Next, for events: name, organization, email, dietary and accessibility needs, sessions, and bar number and state for CLE.",
    "Then, for new clients: contact details, everyone involved for the conflict check, key dates and a short description, with documents through secure upload.",
    "After that, we send it with a short note: why, the deadline and who to ask. We test the link first.",
    "Finally, we track completions, send one reminder and move the answers into the right system."
   ],
   "ask": "What's the longest form you've ever abandoned halfway through?",
   "scenario": "The firm's CLE seminar has 60 registrations, but the form didn't ask for bar numbers, and certificates need them. The seminar is next week. What do you do now, and what do you change in the form template?"
  },
  "p2": {
   "why": "Forms go wrong in two places: how sensitive information travels, and what happens to the answers.",
   "talk": "Pre-fill what we already know and keep the form short enough to finish on a phone. Tell people how their information will be used, like 'dietary details go only to the caterer.' Two traps: asking a new client for sensitive details or documents by plain email, and collecting answers that never go anywhere. A form nobody reads is worse than no form at all.",
   "walk": [
    "First, pre-fill and keep it short.",
    "Next, say how the information will be used.",
    "Then, sensitive details only through secure channels.",
    "Finally, move every answer where it's needed."
   ],
   "ask": "Where should the answers from an event registration form end up?",
   "scenario": "Elias is meeting a potential new client, a small construction company, on Monday. He wants their details and the names of everyone involved in their dispute beforehand. Draft the six questions on your intake form, and the note you send with it."
  }
 },
 "9::CLE Management for Firm-Hosted Events": {
  "p1": {
   "why": "When the firm hosts a CLE event, attendees are counting on us for credit they need to keep their licenses.",
   "talk": "If the firm hosts a seminar or webinar that offers CLE credit, the firm is the course provider, and it has duties to the state bars that approve the credit. Every state has its own rules: whether the course needs approval in advance, how many minutes make an hour of credit, which categories like ethics apply, and what records we keep. The attendees' credit depends on our paperwork.",
   "walk": [
    "First, months ahead, we find out which states attendees are licensed in and check each state's rules and deadlines.",
    "Next, we prepare the application: a timed agenda, speaker bios, materials and the hours and categories requested.",
    "Then we track attendance properly: sign-in and sign-out sheets, or the webinar's attendance report and any required codes.",
    "After that, we issue certificates with the name, course, date, provider, hours, category and any approval number.",
    "Finally, we report to the states that require it and keep the file as long as each state says."
   ],
   "ask": "Why might a state bar care how long someone actually stayed on a webinar?",
   "scenario": "Two days before a firm seminar, Elias asks, 'We're offering CLE credit, right?' Nobody applied for approval. What do you tell him, what can still be done, and what do you tell registrants?"
  },
  "p2": {
   "why": "CLE problems show up months or years later, in an audit or a missing credit, so the habits have to be right from the start.",
   "talk": "Collect bar numbers and states at registration, not after the event. Keep a CLE file for every event, with the approval, agenda, materials and attendance, because a state bar can audit a provider years later. Two traps: promising credit before the course is approved, when we should say 'credit has been applied for,' and certificates showing hours a webinar attendee didn't actually attend.",
   "walk": [
    "First, bar numbers at registration.",
    "Next, a complete CLE file for every event.",
    "Then, no promises before approval.",
    "Finally, certificates match real attendance."
   ],
   "ask": "What would you put in an event's CLE file?",
   "scenario": "The firm is hosting a two-hour webinar, 'Employment Law Update,' in six weeks, with one hour of ethics. Attendees are licensed in New York, New Jersey and California. What do you do this week, what do you collect at registration, and what happens after the webinar?"
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
   "ask": "How would you prepare differently for a keynote than for a panel?",
   "scenario": "Elias is giving a 30-minute keynote at a bar association conference. The organizer has sent six emails with different deadlines. What goes on your one checklist, and what's the briefing you send him?"
  },
  "p2": {
   "why": "Aim to deliver everything a day or two before the organizer's deadline.",
   "talk": "A speaking slot is much more than a calendar entry; the preparation decides how it goes. Organisers will want a bio, a headshot, slides and technical details, usually by a deadline. We confirm the technical setup with the venue itself, not just the organiser, and we aim to deliver everything a day or two early, so a late change never becomes a crisis.",
   "walk": [
    "First, a speaking slot isn't just another calendar entry. The preparation decides how it goes.",
    "Next, confirm technical needs with the venue itself, not only the organizer.",
    "Finally, send the slides 24 to 48 hours before the stated deadline."
   ],
   "ask": "Elias is on a panel in three weeks, and the organizer wants his bio, headshot and suggested questions by Friday. How do you stop it becoming a last-minute scramble?",
   "scenario": "Elias's slides are due to the organizer Friday. On Thursday, he's still changing them. You also learn the venue projector only takes one type of cable. What do you send, and to whom, before Friday?"
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
   "ask": "Which sponsorship promises would you check before the doors open?",
   "scenario": "The firm is sponsoring a charity gala: logo on the banner, a table for ten and a mention in the opening speech. What do you check on the night, and when?"
  },
  "p2": {
   "why": "A written complaint on the day carries far more weight than a verbal one afterwards.",
   "talk": "When the firm sponsors an event, the agreement promises certain things, like the logo in the programme or a mention from the stage. We don't assume those promises were kept; we go and check. If something's missing, we raise it in writing on the day, because that carries far more weight than a comment afterwards. And we never renew a sponsorship automatically without asking whether it was worth it.",
   "walk": [
    "First, don't assume a promise was kept. Go and look.",
    "Next, never renew a sponsorship automatically without checking whether it was worth it.",
    "Finally, if something's missing, raise it in writing, promptly."
   ],
   "ask": "At a sponsored event, the firm's logo is missing from the printed program, even though the agreement guarantees it. What do you do in the moment, and what do you follow up on afterwards?",
   "scenario": "The gala is over, and the opening speech never mentioned the firm. The organizer is asking about next year's sponsorship. What do you send them, and what do you tell Elias?"
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
   "ask": "What would you watch for during a live webinar?",
   "scenario": "Elias is hosting a one-hour webinar that gives attendees ethics credit. You're the moderator. What do you check 15 minutes before, during and right after?"
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
   "ask": "Ten minutes into a webinar where Elias is the featured speaker, his audio starts cutting out and the audience is commenting in the chat. What do you do, and in what order, without disrupting him more than necessary?",
   "scenario": "Halfway through the webinar, 30 attendees drop off and chat fills with 'no sound.' Elias keeps talking, not aware. What do you do in the next 60 seconds?"
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
   "ask": "What note would you want next to each new contact?",
   "scenario": "At a conference dinner, Elias meets a general counsel who mentions they're unhappy with their current firm. What do you note that evening, and what happens in the next three days?"
  },
  "p2": {
   "why": "Mention the actual conversation, not just 'great meeting you at the conference.'",
   "talk": "The real value of an event shows up afterwards. A business card with no notes is almost useless a week later, so we capture a line about each conversation while it's fresh. Follow-ups mention what was actually discussed, not 'great to meet you at the conference'. And we track a simple measure for each event, like leads or relationships strengthened, so the firm knows which events are worth repeating.",
   "walk": [
    "First, a business card with no notes is almost useless a week later.",
    "Next, track a simple measure of value for each event, like leads or relationships strengthened.",
    "Finally, keep follow-ups personal and specific."
   ],
   "ask": "Elias comes back from a three-day conference with 40 new contacts and no notes on any of them. How do you turn that pile into real follow-up, instead of one generic email to everyone?",
   "scenario": "The firm spent $12,000 on three conferences this year. Elias asks, 'Were any of them worth it?' What would you need to have tracked to answer him?"
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
   "ask": "Why check the app while you're waiting on hold?",
   "scenario": "Elias's 7 a.m. flight to a Chicago deposition is canceled at 10 p.m. the night before. The deposition starts at 1 p.m. What's the fixed point, and what options do you check, in which order?"
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
   "ask": "Elias's connection to a closing-day meeting is cancelled, with no same-day rebooking, and the meeting can't move. Option one: a red-eye on another airline, landing two hours before. Option two: a private car for the last leg, costing much more but letting him sleep. How do you decide, and how do you present it?",
   "scenario": "You've rebooked Elias on a later flight, but it lands after his hotel's check-in desk closes and his car is still booked for the old time. What's your single message to him, and what else do you fix?"
  }
 },
 "9::Everyday Meeting Notes & Action Items": {
  "p1": {
   "why": "A meeting is only as useful as what people do afterwards, and your notes decide that.",
   "talk": "Good meeting notes capture three things: what was decided, what needs doing, and what's still open. They're not a transcript. Every action needs an owner and a due date, because without both it usually doesn't happen. And notes from meetings about legal matters may be privileged or confidential, so we label them and share them carefully.",
   "walk": [
    "First, before the meeting, we confirm the agenda and set up a template: attendees, decisions, actions and open questions.",
    "Next, we write decisions as clear statements.",
    "Then we write each action as a verb, an owner and a date.",
    "After that, we send the notes within 24 hours, with actions at the top.",
    "Finally, we add the actions to our tracker and check them before the next meeting."
   ],
   "ask": "What makes meeting notes useless to someone who wasn't there?",
   "scenario": "You're taking notes in a partners' meeting when the conversation jumps between three topics and nobody states a decision. What do you say in the room, and what do your notes look like?"
  },
  "p2": {
   "why": "Notes fail in the same two ways every time: no decision and no owner.",
   "talk": "If a decision sounds unclear, we ask in the room: 'So we're agreed on this?' It's much harder to fix a week later. When the attorney says a meeting is privileged, we label the notes clearly and send them only to the right people. And two traps: notes that record who said what but not what was decided, and 'someone will look into it', which means no one will.",
   "walk": [
    "First, confirm unclear decisions in the room.",
    "Next, label and limit privileged notes.",
    "Then, record decisions, not just discussion.",
    "Finally, give every action a named owner."
   ],
   "ask": "How would you politely ask a senior partner to confirm a decision in the room?",
   "scenario": "After a 45-minute Harlow strategy call, your notes say: 'Discussed deposition. Expert maybe. Budget concerns. Elias to think about it.' Rewrite them so someone who missed the call knows exactly what happens next."
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
   "ask": "What four things must you capture for every motion?",
   "scenario": "The board of one of Elias's companies meets in two weeks. The chair wants to add a late item about a lawsuit. What do you confirm, and by when do the papers go out?"
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
   "ask": "A motion is raised, debated with real disagreement, amended once and passed four to one. You're taking minutes live. What must you capture exactly, and what do you deliberately leave out?",
   "scenario": "Your draft minutes say, 'Director Harlow strongly objected to the budget and was overruled after a heated debate.' How would you rewrite it, and why does it matter?"
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
   "ask": "Why track RSVPs against the quorum specifically?",
   "scenario": "Thirty shareholders must attend, in person or by proxy, for the AGM to decide anything. A week out, 22 have confirmed. What do you do now?"
  },
  "p2": {
   "why": "Voting and proxy procedures are settled in advance, never improvised on the day.",
   "talk": "An annual general meeting, or AGM, isn't just a bigger board meeting. It comes with formal rules: how much notice shareholders must get, how many must be present for decisions to count, and how voting and proxy votes work. None of that can be improvised on the day, so we confirm it all well in advance.",
   "walk": [
    "First, an AGM isn't just a bigger board meeting. Its notice and quorum rules are formal requirements.",
    "Finally, confirm how voting and proxies work well ahead of time."
   ],
   "ask": "You realize the AGM notice went out later than the required minimum notice period. What do you want confirmed before the meeting goes ahead?",
   "scenario": "On the morning of the AGM, a shareholder turns up with a handwritten proxy for someone else. The procedure doesn't say whether that's accepted. Who decides, and what should have been settled earlier?"
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
   "ask": "What small slip on a call reflects badly on the executive?",
   "scenario": "Elias has a first video call with a potential new client's general counsel tomorrow. What goes in your one-paragraph briefing note, and what do you check five minutes before?"
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
   "ask": "Thirty seconds before Elias's call with a prospective client, you notice the invite used the wrong time zone and the client may have been waiting for an hour. What do you do right now?",
   "scenario": "During a client call, the other side can't see Elias's shared document, and he starts fumbling with settings. You're on the call. What do you do, and what do you say, if anything?"
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
   "ask": "What settings would you check before a confidential call?",
   "scenario": "You're setting up a confidential settlement meeting with four parties, two of whom shouldn't meet the other two until a certain point. Which settings and features do you use?"
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
   "ask": "Elias's confidential strategy call with senior partners went out on a general meeting link with no waiting room or registration. What do you change before the call, and how do you raise it, since the invite's already out?",
   "scenario": "A client webinar for 200 people is set up like an internal meeting, and anyone can unmute and share their screen. Someone shares something inappropriate. What should the settings have been?"
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
   "ask": "What's your backup if the platform fails completely?",
   "scenario": "Two minutes into a board call, one director's audio echoes badly, and another can't join at all. Which problem do you handle first, and what's your fallback?"
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
   "ask": "Fifteen minutes before a critical client call, you discover the platform is down for maintenance you didn't know about. What's your plan for the next five minutes?",
   "scenario": "A client can hear everyone, but no one can hear the client. They're getting frustrated. Walk through the checks in order, and what you say while you're fixing it."
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
   "ask": "Which of the four would you be most tempted to skip?",
   "scenario": "Last year, three associates took courses that turned out not to count for their required credits. Which of the four procedures would have caught it, and at what step?"
  },
  "p2": {
   "why": "The procedure that feels least urgent is the one that gets skipped, and it still matters.",
   "talk": "Each of the four exists to stop a predictable failure: a missed event, a lost certificate, training money spent on something that didn't help, or a missed chance for recognition. The trap is that the one that feels least urgent is the one that gets skipped, and months later that's the one that bites.",
   "walk": [
    "First, event registration: check, approve, register and calendar it.",
    "Next, attendance: record it, export reports and store certificates.",
    "Finally, upskilling: assess needs, choose providers carefully and measure the change."
   ],
   "ask": "Elias wants to attend a $1,200 legal-tech summit run by a provider you've never heard of. Walk through the registration procedure before you book.",
   "scenario": "A negative article about the firm appears in a legal trade blog. Nobody noticed for a week. Which procedure should have caught it, and what would it have told you to do?"
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
   "ask": "Why is a single total of hours for the firm dangerous?",
   "scenario": "The firm's continuing-education tracker is a list of courses, not people. A partner discovers he's short on hours with a month to go. What should the tracker have looked like?"
  },
  "p2": {
   "why": "The certificate is the proof, so keep every one.",
   "talk": "CLE stands for continuing legal education: the hours of training attorneys must complete to keep their licence. Each state sets its own total and its own required categories, like ethics. The hours usually have to come from approved providers, and some states let extra hours carry over. Our job is to track the hours, keep every certificate as proof and confirm the current rules for each attorney's state.",
   "walk": [
    "First, each state sets its own total hours and required categories, like ethics.",
    "Next, hours usually need to come from approved providers, and some states allow extra hours to carry over.",
    "Finally, keep a certificate for every course, and confirm the current rules for each attorney's state."
   ],
   "ask": "Elias has 18 of his 25 hours, still needs 2 ethics hours, and his deadline is in seven weeks. What do you flag today, and what do you check about the hours he already has?",
   "scenario": "Elias finishes a course but loses the certificate. The state bar audits him the following year. What do you do now, and what's the habit that prevents it?"
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
   "ask": "How would you measure whether a training session actually worked?",
   "scenario": "The firm spends money on a time-management workshop that everyone enjoyed. Three months later, late time entries haven't changed. What should have been measured, and when?"
  },
  "p2": {
   "why": "One simple before-and-after check tells you more than any attendance number.",
   "talk": "There's a simple way to think about whether training worked, in four levels. Did people find it useful? Can they show the new skill? Are they actually using it at work a few weeks later? And did performance improve? Most training only ever measures the first. Even a quick before-and-after check on the second tells us far more.",
   "walk": [
    "First, reaction: did people find it useful? Then learning: can they show the new skill?",
    "Next, behavior: are they using it at work weeks later?",
    "Finally, results: did performance actually improve?"
   ],
   "ask": "The firm runs a lunch-and-learn on the new document system. Define one measure at each of the four levels.",
   "scenario": "Elias wants to know whether the new billing training worked. You have attendance numbers and a feedback survey. What's missing, and what can you still measure?"
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
   "ask": "Has a membership ever lapsed on you without warning?",
   "scenario": "Elias's membership in a professional association lapsed six months ago, and nobody noticed until he tried to register for their conference at the member rate. What does your tracker need?"
  },
  "p2": {
   "why": "Expired cards are the most common reason memberships lapse without anyone noticing.",
   "talk": "For each membership, we track the basics: what it is, who the member is, the renewal date, the cost and who approves it. We also note whether it renews automatically and which card it's on, because expired cards are the most common reason memberships lapse without anyone noticing. And once a year, we ask whether each one is still worth paying for.",
   "walk": [
    "First, the organization, member, level, renewal date, cost and who approves it.",
    "Next, whether it auto-renews and which card is on file.",
    "Finally, whether it's still worth it. A yearly review stops you paying for things nobody uses."
   ],
   "ask": "Elias's state bar membership, two practice-section memberships and a country club all renew within 60 days, and one card on file expires this month. Build the tracker rows, and tell us what you'd do first.",
   "scenario": "The firm pays for five online subscriptions and three memberships on a card that expired last month. Two have already lapsed. What do you check first, and what goes into the tracker?"
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
   "ask": "Why do you think a gift to a government official is treated differently?",
   "scenario": "Elias wants to send a $250 gift basket to a judge who just retired from the court where the firm has cases pending. What do you check before ordering anything?"
  },
  "p2": {
   "why": "'Everyone does this' is not a gift policy.",
   "talk": "The two phrases that get people into trouble are 'it's only small' and 'everyone does it'. Neither is a gift policy. Many firms and many clients have strict limits, especially around officials. So when a gift arrives or we're planning to send one, and we're not sure, we ask first. A quick question costs far less than a violation.",
   "walk": [
    "First, modest or common doesn't mean allowed.",
    "Finally, when unsure, ask first. It costs far less than a violation."
   ],
   "ask": "A vendor sends an expensive bottle of whisky and a $300 restaurant voucher to the office for the holidays. What do you do with them, and what do you check first?",
   "scenario": "A court-reporting firm offers you two concert tickets 'as thanks for all the business.' You'd love to go. What do you do?"
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
   "ask": "What kind of client language would make you escalate?",
   "scenario": "A client's email to Elias says, 'We relied on your advice and we've now lost the contract. We need to talk about this.' Elias is away. What do you do with it?"
  },
  "p2": {
   "why": "Never try to judge coverage or liability yourself; that always goes to the attorney.",
   "talk": "Assistants are often the first to see an email that hints at a complaint or a claim, something like 'we're considering our options'. That's not routine, and it needs to reach the attorney quickly. But deciding whether the firm is covered, or whether it's liable, is never our call. And these messages stay as confidential as any privileged matter.",
   "walk": [
    "First, you're often the first to see concerning language, so don't treat it as routine.",
    "Next, coverage questions are outside your role.",
    "Finally, keep these messages as confidential as any privileged matter."
   ],
   "ask": "A client's email says, 'We're considering our options given how this was handled.' What's your read, and what do you do beyond replying normally?",
   "scenario": "The firm's malpractice insurer sends a renewal questionnaire asking whether any client has threatened a claim this year. You remember the email from last month. What do you do?"
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
   "ask": "How would your reply differ if you wrote it angry versus after a pause?",
   "scenario": "An anonymous online review says a Thorne & Partners attorney was 'rude and useless' and names a real case. How do you respond, and what do you leave out?"
  },
  "p2": {
   "why": "A well-handled bad review can do more for the firm than ten good ones.",
   "talk": "Protecting a brand online has two sides. One is outward: watching what's being said and responding well, because a calm, professional reply to a bad review can impress readers more than ten good reviews. The other is inward, what we might call 'the vault': sensitive information is shared only with people who need it, because the moment it's mishandled, it becomes a liability.",
   "walk": [
    "First, monitor proactively and respond well.",
    "Finally, protect sensitive information strictly: need to know, and a cone of silence."
   ],
   "ask": "A former client posts a one-star review: 'Thorne & Partners never returned my calls and overcharged me.' Let's draft the public reply together, then decide what you'd check before posting it.",
   "scenario": "A former employee posts on social media criticizing the firm's billing practices. Several people are sharing it. Who do you escalate to, and what don't you do?"
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
   "ask": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documents do you keep?",
   "scenario": "A local business award would suit the firm well. The nomination deadline was yesterday, and the only record of it was an email Elias forwarded three months ago. What do you set up so it isn't missed next year?"
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
   "ask": "When was Elias's bio last updated?",
   "scenario": "A conference organizer needs Elias's bio in 150 words and a headshot within the hour. Where do you find them, and what do you check before you send?"
  },
  "p2": {
   "why": "Always glance over the kit before you send it.",
   "talk": "A media kit, meaning the bio, headshots and talking points, goes stale quietly. If we only update it when someone asks, it's usually been out of date for months, and there's never time to fix it under a deadline. So we keep headshots in sizes for print and online, refresh the bio whenever something changes, and glance over the whole kit before it goes anywhere.",
   "walk": [
    "First, updating only when asked means it's usually been stale for months.",
    "Next, keep headshots in several sizes, for print and online.",
    "Finally, check for outdated details, like an old title, before anything goes out."
   ],
   "ask": "A journalist needs Elias's bio and headshot in two hours. The bio on file is over a year old and lists a role he no longer holds. What do you do, given the deadline?",
   "scenario": "You send Elias's media kit to a journalist, and the headshot is five years old and the bio lists his former firm. What goes wrong for Elias, and what do you set up to catch this in future?"
  }
 }
});
