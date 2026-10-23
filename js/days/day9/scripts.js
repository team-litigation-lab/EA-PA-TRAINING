/* Day 9 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through).
   Every topic is written in the trainer's style: icebreaker (a quick game to open) · teaser (the curiosity gap
   before the reveal) · jargon ([{term, hint}] for the trainer to explain) · story (a real-life incident from the field) ·
   contrast ({lazy, excellent}) · outcome (where it lands: deadlines, the case, the settlement) ·
   ask (calls on trainees by name, "[Name]") · mystery (the closing challenge, in place of scenario). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "9::Running an Event End-to-End": {
  "p1": {
   "icebreaker": "Game: 'Count or Name?' Hands up if you've ever said 'about fifty people are coming' to someone. Keep them up if you could have named every one of those fifty. Look around the room. That gap between the two sets of hands is this whole topic.",
   "teaser": "There's one number on a registration list that looks like good news and can hide the worst news of the whole event. By the end of this slide you'll know which one.",
   "why": "Track event registrations by name, not just by headcount, so you spot the gaps before the day.",
   "talk": "A headcount tells you 58 people are coming. A list by name tells you that the client who matters most never finished registering. That's the number I teased: the headcount. It looks healthy and hides the gap. The whole event runs on this kind of detail, from the first invitation to the thank-you notes afterwards.",
   "walk": [
    "First, track who has registered by name from day one.",
    "Next, plan before the event who's attending what and what materials they need.",
    "Then, follow up with anyone whose registration is incomplete, while there's still time.",
    "After that, compare the registration list with who actually came.",
    "Finally, write down what went wrong, so the next event is better."
   ],
   "jargon": [
    {
     "term": "Registration list",
     "hint": "the named record of who has signed up and what they've chosen"
    },
    {
     "term": "Headcount",
     "hint": "the total number attending, with no names attached"
    }
   ],
   "story": "A common pattern in real offices: an assistant reported '45 yes replies' for a client breakfast and everyone relaxed. Nobody checked the names. On the morning, the client's general counsel, the one person the partner wanted in the room, wasn't on the list, because her registration had stalled halfway. A two-minute name check two weeks out would have caught it and a personal call would have fixed it.",
   "ask": "[Name], what went wrong the first time you managed registrations for anything? [Name], what would a list by name have shown you that a number didn't?"
  },
  "p2": {
   "why": "Thank-you notes go out within 48 hours of the event.",
   "talk": "An event works best when it's planned backwards from the date. Two to three months out, we settle the goals, budget, date, venue and guest list. A month or so out, invitations, speakers, catering and audio-visual. The week before, final numbers, the running order, badges and materials. On the day, we arrive early and test everything. And afterwards, thank-you notes go out within two days, while people still remember the evening.",
   "walk": [
    "First, eight to twelve weeks out: goals, budget, date, venue and guest list. Four to six weeks out: invitations, speakers, catering and audio-visual.",
    "Next, one week out: final numbers, the running order, name badges and materials. On the day: arrive early, test the technology and track check-ins.",
    "Finally, afterwards: thank-you notes within two days, feedback, the budget reconciled and lessons logged."
   ],
   "contrast": {
    "lazy": "Books the venue, sends one email saying 'Hope you can make it!' and, after the event, says 'That went well' and moves on. No notes, no bill check.",
    "excellent": "Works back from the date with a dated plan, tracks every guest by name, and within 48 hours sends personal thank-you notes, checks the caterer's bill line by line and logs three lessons for next year."
   },
   "outcome": "Client events are where relationships with people like the Meridian team get warmer or cooler. A key contact who was never chased, or a thank-you that never came, tells that client they're a number to us. When that client later decides whether to settle with our help or move their next matter elsewhere, those small signals count.",
   "ask": "[Name], Thorne & Partners is hosting a client appreciation evening for 60 guests in ten weeks. What's done by week eight? [Name], what's done by week four and by the day before?",
   "mystery": "The case of the silent Thursday. The client evening went well, but three days later no thank-you notes have gone out and the caterer's final bill is sitting unchecked. Earlier, three key Meridian contacts never answered their invitations at all. In pairs, you have four minutes: find where the plan broke, list what you do today, and bring back the three lines you'd add to next year's event notes."
  }
 },
 "9::Event Management Tips: Checklists, Run Sheets & the Day-Of Kit": {
  "p1": {
   "icebreaker": "Game: 'Shout it out.' I'll start a sentence about event disasters, you shout the ending. 'The caterer is…' 'The projector won't…' 'The name badge is…' Notice how fast you all knew the answers.",
   "teaser": "You just proved something. If the whole room can predict what goes wrong, then most event problems aren't bad luck at all. Three documents turn that prediction into a plan.",
   "why": "Events look effortless when three simple documents are doing the work behind the scenes.",
   "talk": "Every well-run event has three documents: a master checklist with an owner and date for every task, a run sheet that lays out the day minute by minute, and a contact sheet with every vendor and helper's phone number. Most event problems are predictable, like a late caterer, a missing badge or a projector that won't connect. On the day, we're the calm center: we know where everything is and who to call.",
   "walk": [
    "First, build the checklist from a template, working back from the date.",
    "Next, write the run sheet: times, who leads each part, what it needs and what's next.",
    "Then, confirm every vendor 48 hours before.",
    "After that, pack a day-of kit: printed sheets, spare badges, chargers, tape, first aid and the slides on a USB.",
    "Finally, walk the venue before guests arrive, and debrief within a week."
   ],
   "jargon": [
    {
     "term": "Run sheet",
     "hint": "the minute-by-minute plan for the day, with who does what"
    },
    {
     "term": "Day-of kit",
     "hint": "the bag of spares and printouts you bring to fix small problems"
    },
    {
     "term": "Debrief",
     "hint": "a short review afterwards of what worked and what didn't"
    }
   ],
   "story": "This happens in real offices: the slides for a client seminar lived only on the partner's laptop, and the venue's system wouldn't recognise it. Twenty minutes of guests sipping coffee while the team tried adapters. The assistant at the next event kept a copy on a USB stick in the day-of kit and a printed run sheet with the AV technician's mobile number. Same venue, same laptop, problem solved in two minutes.",
   "ask": "[Name], what's the most common thing you've seen go wrong at an event? [Name], which of the three documents would have saved it?"
  },
  "p2": {
   "why": "Event habits decide whether the next event is easier or just as stressful.",
   "talk": "Give every helper one clear role, like registration, greeting, tech or looking after the speaker, and a copy of the run sheet. Build 10 to 15 minutes of slack into the schedule, because events almost always run late. Two traps: the only copy of the plan living in one person's head, and skipping the debrief, so the same problem comes back next year.",
   "walk": [
    "First, give one role to each helper.",
    "Next, build in slack.",
    "Then, share the plan, don't hold it.",
    "Finally, always debrief."
   ],
   "contrast": {
    "lazy": "'I've got it all in my head, just ask me.' Helpers wander about, the schedule has no breathing room, and nobody meets afterwards.",
    "excellent": "'Priya, you're registration. Tom, you're tech and speaker care. Here's the run sheet, with ten minutes of slack after the keynote. Debrief Tuesday at 10.'"
   },
   "outcome": "A chaotic client seminar tells clients something about how the firm runs its cases. If the plan lives in one head and that person is off sick, the event fails in public. Clients notice, and a firm that looks disorganised at breakfast has a harder time convincing anyone it will hit a court deadline.",
   "ask": "[Name], where would you build slack into a 90-minute seminar? [Name], what would you cut first if it still ran over?",
   "mystery": "The case of the 7:20 a.m. scramble. The firm's client breakfast starts at 8:00. At 7:20 the caterer hasn't arrived, the projector won't connect to Elias's laptop, and two guests are already here. In teams of three, you have three minutes: using the run sheet and contact sheet, decide who handles what, the order you tackle it and the first call you make. Bring back your ten-minute plan."
  }
 },
 "9::Sending Invites: Calendar Invites & Event Invitations": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' I'll read three meeting invite titles. Shout 'real' if you've seen one like it, 'fake' if you think I made it up. 'Catch-up.' 'Quick call.' 'Meeting.' Yes, sadly, all real.",
   "teaser": "Every one of those titles is missing the same thing, and it's also why people turn up at the wrong time. Keep an eye out for the five questions a good invite answers.",
   "why": "A single wrong detail in an invite can make a whole meeting fail, and an event invitation is the guest's first impression.",
   "talk": "A calendar invite is a small document. A good one answers five questions at a glance: what it is, when it is with the time zone, where or how to join, who's needed and what to prepare. Those titles you just heard answer none of them. Event invitations follow a rhythm: a save-the-date, then the invitation with an RSVP date, reminders, and final details the day before.",
   "walk": [
    "First, check availability, then send one invite, not a chain of emails.",
    "Next, add a clear title, the right time zone, and the link, dial-in and location in the invite.",
    "Then, include a short agenda, anything to read, and who's required or optional.",
    "After that, for events: save-the-date six to eight weeks out, invitation three to four weeks out, reminders at a week and a day.",
    "Finally, update the existing invite when things change, and cancel through the calendar."
   ],
   "jargon": [
    {
     "term": "Save-the-date",
     "hint": "an early heads-up so guests block the date before full details"
    },
    {
     "term": "RSVP",
     "hint": "the reply saying whether you're coming"
    },
    {
     "term": "Dial-in",
     "hint": "the phone number and code to join a call without video"
    }
   ],
   "story": "A common first-week story: an assistant was told to 'set up a call with the other side.' She sent an invite titled 'Call' with no time zone to a lawyer in another state. He joined an hour early, waited, and emailed the partner asking if the firm was serious about the matter. One clear title and the time zone in the invite would have avoided an awkward start to a negotiation.",
   "ask": "[Name], what's the most useless meeting invite you've ever received? [Name], which of the five questions did it fail to answer?"
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
   "contrast": {
    "lazy": "'Call with Harlow, 3pm' sent from her own calendar, every guest visible, and a fresh invite each time it moves.",
    "excellent": "'Harlow / Thorne: expert witness scope (45 min), 3:00 p.m. New York / 1:00 p.m. Denver / 8:00 p.m. London', sent from Elias's calendar, joining link and agenda inside, guests confirmed with him, changes made to the same invite."
   },
   "outcome": "An open guest list on a client event can show one client who else the firm acts for. That's a confidentiality problem, and in a dispute it can tell the other side more than we'd like. A wrong time zone on a call with opposing counsel costs goodwill and time, and time is what negotiations run on.",
   "ask": "[Name], how would you show the time for a call with London, New York and Denver so nobody gets it wrong? [Name], what's the first thing you'd check before pressing send?",
   "mystery": "The case of the vague call. Elias asks you to 'set up a call with Harlow's team.' You don't know who from Harlow, how long, or whether it's video or phone. He then adds a London client, a New York partner and a Denver expert, 45 minutes, next week. In pairs, five minutes: list the questions you ask first, then write the full invite, with title, time in each zone, joining details, agenda and attendees. Best invite gets read out."
  }
 },
 "9::Sending Intake Forms: Event Registration & New-Client Questionnaires": {
  "p1": {
   "icebreaker": "Game: 'Fist to five.' Show me on your fingers how many questions you'll answer on an online form before you give up. Fist means none, five means you'll answer anything. Now look around. Most of you are at two or three.",
   "teaser": "Your fingers just told us the most important rule of form design. And there's one missing field on a form that can quietly cancel sixty people's certificates. We'll get to it.",
   "why": "A good intake form means the event or the first meeting starts with everything you need, instead of a scramble.",
   "talk": "An intake form collects what we need before something happens: an attendee's details before an event, or a new client's information before their first meeting. A good one asks only what's needed, in plain words, with the required fields clear, because every extra question means fewer people finish it. And forms often collect personal or confidential information, so they're sent and stored securely. For new clients, the answers may also feed the conflict check.",
   "walk": [
    "First, use the firm's approved form tool, and have the attorney approve client intake questions.",
    "Next, for events: name, organization, email, dietary and accessibility needs, sessions, and bar number and state for CLE.",
    "Then, for new clients: contact details, everyone involved for the conflict check, key dates and a short description, with documents through secure upload.",
    "After that, send it with a short note: why, the deadline and who to ask. Test the link first.",
    "Finally, track completions, send one reminder and move the answers into the right system."
   ],
   "jargon": [
    {
     "term": "Intake form",
     "hint": "the questionnaire that collects details before an event or first meeting"
    },
    {
     "term": "Conflict check",
     "hint": "making sure the firm isn't already acting against anyone involved"
    },
    {
     "term": "CLE",
     "hint": "continuing legal education, the training hours lawyers must earn"
    },
    {
     "term": "Bar number",
     "hint": "a lawyer's licence number with their state"
    }
   ],
   "story": "A real pattern from the field: a firm sent its CLE seminar registration form without a field for bar numbers. Sixty people signed up. The week before, the assistant realised certificates couldn't be issued without them and had to email every attendee individually, and a dozen never replied in time. One extra field on the template would have saved a week of chasing.",
   "ask": "[Name], what's the longest form you've ever abandoned halfway through? [Name], what one question would you have cut from it?"
  },
  "p2": {
   "why": "Forms go wrong in two places: how sensitive information travels, and what happens to the answers.",
   "talk": "Pre-fill what we already know and keep the form short enough to finish on a phone. Tell people how their information will be used, like 'dietary details go only to the caterer.' Two traps: asking a new client for sensitive details or documents by plain email, and collecting answers that never go anywhere. A form nobody reads is worse than no form at all.",
   "walk": [
    "First, pre-fill and keep it short.",
    "Next, say how the information will be used.",
    "Then, collect sensitive details only through secure channels.",
    "Finally, move every answer where it's needed."
   ],
   "contrast": {
    "lazy": "'Hi, could you email me your details, the names of everyone involved and any contracts? Thanks!' The answers sit in an inbox nobody checks.",
    "excellent": "'Before Monday's meeting with Elias, please complete this short secure form (about 5 minutes) by Friday noon. Upload documents through the secure link, not email. Questions? Call me directly.' Answers go straight to the conflict check and the matter file."
   },
   "outcome": "If a new client's names never reach the conflict check, the firm might take on a matter it can't act on, and have to withdraw mid-case. Sensitive documents sent by plain email can leak. Either one can cost the client their lawyer at the worst moment and hand the other side an advantage.",
   "ask": "[Name], where should the answers from an event registration form end up? [Name], and where should a new client's answers go?",
   "mystery": "The case of Monday's construction company. Elias is meeting a potential new client, a small construction company, on Monday. He wants their details and the names of everyone involved in their dispute beforehand. Meanwhile, the CLE seminar form from last week is still missing bar numbers. In pairs, six minutes: draft the six questions for the construction intake form and the note you send with it, plus one fix for the CLE template. Bring back both."
  }
 },
 "9::CLE Management for Firm-Hosted Events": {
  "p1": {
   "icebreaker": "Game: 'Stand if it counts.' Stand up if you think a lawyer gets CLE credit for: a firm seminar with state approval. A webinar they left after ten minutes. A seminar where nobody applied for approval. A two-hour session that includes one hour of ethics. Sit down if you're unsure. Interesting split.",
   "teaser": "One of those looked safe and isn't, and it's the one that catches firms out two days before the event. Watch for it.",
   "why": "When the firm hosts a CLE event, attendees are counting on us for credit they need to keep their licenses.",
   "talk": "If the firm hosts a seminar or webinar that offers CLE credit, the firm is the course provider, and it has duties to the state bars that approve the credit. Every state has its own rules: whether the course needs approval in advance, how many minutes make an hour of credit, which categories like ethics apply, and what records we keep. That's the trap I teased: a seminar nobody applied for may not count at all. The attendees' credit depends on our paperwork.",
   "walk": [
    "First, months ahead, find out which states attendees are licensed in and check each state's rules and deadlines.",
    "Next, prepare the application: a timed agenda, speaker bios, materials and the hours and categories requested.",
    "Then, track attendance properly: sign-in and sign-out sheets, or the webinar's attendance report and any required codes.",
    "After that, issue certificates with the name, course, date, provider, hours, category and any approval number.",
    "Finally, report to the states that require it and keep the file as long as each state says."
   ],
   "jargon": [
    {
     "term": "CLE provider",
     "hint": "the organisation running the course and answering to the state bar"
    },
    {
     "term": "State bar",
     "hint": "the body that licenses lawyers in each state"
    },
    {
     "term": "Ethics credit",
     "hint": "a required category of CLE on professional conduct"
    },
    {
     "term": "Approval number",
     "hint": "the reference the state gives an approved course"
    }
   ],
   "story": "This happens in real offices: a firm advertised 'two CLE hours' on its seminar flyer. Nobody had applied for approval in the state where most attendees were licensed. Two days out, a partner asked the question, and the honest answer was 'we can't promise it.' Several guests cancelled and one client was openly annoyed. A calendar entry three months earlier saying 'check state approval rules' would have prevented it.",
   "ask": "[Name], why might a state bar care how long someone actually stayed on a webinar? [Name], what record would prove it?"
  },
  "p2": {
   "why": "CLE problems show up months or years later, in an audit or a missing credit, so the habits have to be right from the start.",
   "talk": "Collect bar numbers and states at registration, not after the event. Keep a CLE file for every event, with the approval, agenda, materials and attendance, because a state bar can audit a provider years later. Two traps: promising credit before the course is approved, when we should say 'credit has been applied for,' and certificates showing hours a webinar attendee didn't actually attend.",
   "walk": [
    "First, collect bar numbers at registration.",
    "Next, keep a complete CLE file for every event.",
    "Then, make no promises before approval.",
    "Finally, make sure certificates match real attendance."
   ],
   "contrast": {
    "lazy": "'Yes, it's CLE-approved, don't worry.' Certificates printed for everyone on the registration list, whether they stayed or not.",
    "excellent": "'CLE credit has been applied for in New York, New Jersey and California; we'll confirm once approved.' Certificates issued from the attendance report, with exact hours and the approval number."
   },
   "outcome": "A certificate for hours someone didn't attend is a false record, and the firm signed it. In an audit, that can cost the firm its provider status and damage its standing with the bar. And attorneys who lose credit can face problems with their own licences, which is not a conversation any firm wants with a client's lawyer.",
   "ask": "[Name], what would you put in an event's CLE file? [Name], which item would an auditor ask for first?",
   "mystery": "The case of the unapproved webinar. The firm is hosting a two-hour webinar, 'Employment Law Update,' in six weeks, with one hour of ethics. Attendees are licensed in New York, New Jersey and California. Two days before a different seminar, Elias asked, 'We're offering CLE credit, right?' and nobody had applied. Teams of three, five minutes: make sure that never happens with this webinar. Bring back what you do this week, what you collect at registration and what happens after the webinar."
  }
 },
 "9::Speaker & Panelist Logistics for Conferences": {
  "p1": {
   "icebreaker": "Game: 'Line it up.' I'll name four things an organizer asks a speaker for. Shout them in the order you'd send them: slides, bio, headshot, technical needs. Go. Most rooms argue about the slides. Hold on to that.",
   "teaser": "There's one item on that list that, if it's late, can cost the speaker the slot itself. It isn't the one most of you shouted last.",
   "why": "When the executive is speaking at an event, the calendar entry is the smallest part of your job.",
   "talk": "Organizers have their own deadlines for bios, headshots, slides and technical needs, and they don't care about the executive's schedule. Miss one, and the speaking slot itself can be at risk. Often it's the bio and headshot, because the programme goes to print early. So you run it like a mini project.",
   "walk": [
    "First, make one checklist per speaking engagement: bio and headshot, slide deadline, technical needs and travel, each with its own due date.",
    "Next, confirm the format early: keynote, panel or fireside chat. Each needs different preparation.",
    "Finally, before the event, send the executive one briefing: the time, the format, who else is speaking and what's expected."
   ],
   "jargon": [
    {
     "term": "Keynote",
     "hint": "the main solo talk at an event"
    },
    {
     "term": "Panel",
     "hint": "several speakers answering questions from a moderator"
    },
    {
     "term": "Fireside chat",
     "hint": "a relaxed one-to-one interview on stage"
    }
   ],
   "story": "A real pattern from the field: an organizer sent six emails, each with a different deadline. The assistant filed them and planned to 'deal with it nearer the time.' The bio deadline passed, the printed programme listed the partner as 'TBC', and another speaker was moved into the better slot. A single checklist with every date on it, built the day the first email arrived, would have kept the slot.",
   "ask": "[Name], how would you prepare differently for a keynote than for a panel? [Name], what would you put in Elias's briefing for each?"
  },
  "p2": {
   "why": "Aim to deliver everything a day or two before the organizer's deadline.",
   "talk": "A speaking slot is much more than a calendar entry; the preparation decides how it goes. Organisers will want a bio, a headshot, slides and technical details, usually by a deadline. We confirm the technical setup with the venue itself, not just the organiser, and we aim to deliver everything a day or two early, so a late change never becomes a crisis.",
   "walk": [
    "First, remember a speaking slot isn't just another calendar entry. The preparation decides how it goes.",
    "Next, confirm technical needs with the venue itself, not only the organizer.",
    "Finally, send the slides 24 to 48 hours before the stated deadline."
   ],
   "contrast": {
    "lazy": "Sends the slides at 11:58 p.m. on deadline day and assumes 'the venue will have the right cables.'",
    "excellent": "Sends a near-final deck two days early with 'final version to follow by Thursday 5 p.m.', and has already emailed the venue's AV team to confirm the projector cable and a clicker."
   },
   "outcome": "When Elias speaks at a bar association conference, he's in front of potential clients, referrers and sometimes opposing counsel. A broken slide or a wrong bio makes him look unprepared in public. Reputation is part of leverage: a lawyer seen as sharp and organised walks into negotiations with a little more weight.",
   "ask": "[Name], Elias is on a panel in three weeks, and the organizer wants his bio, headshot and suggested questions by Friday. How do you stop it becoming a last-minute scramble? [Name], what would you add?",
   "mystery": "The case of the Thursday slides. Elias's 30-minute keynote slides are due to the organizer Friday. On Thursday, he's still changing them. You also learn the venue projector only takes one type of cable, and the organizer has sent six emails with different deadlines. In pairs, five minutes: build the one checklist, then write the messages you send before Friday, and to whom. Bring back the checklist and the messages."
  }
 },
 "9::Sponsorship & Vendor Contract Basics for Events": {
  "p1": {
   "icebreaker": "Game: 'Thumbs up, thumbs down.' The firm paid to sponsor a gala. Thumbs up if you'd personally check each of these on the night: the logo on the banner. The table for ten. The mention in the speech. The parking. Thumbs down if you'd trust the organizer. Lots of thumbs sideways there.",
   "teaser": "One of those is the item most often forgotten, and by the time anyone notices, it's too late to fix. Let's find out which.",
   "why": "A sponsorship is a real contract, so check that everything promised is actually delivered.",
   "talk": "When the firm sponsors an event, it's owed specific things: its logo in certain places, maybe a speaking slot or the attendee list. You're often the first to notice something's missing, and noticing on the day is far better than noticing afterwards. The one that slips most often is the spoken mention, because once the speech is over, it's gone.",
   "walk": [
    "First, before the event, check each promised item against what's actually being provided.",
    "Next, keep the signed agreement with you during the event, in case there's a dispute.",
    "Finally, track what the sponsorship cost against the value it delivered."
   ],
   "jargon": [
    {
     "term": "Sponsorship agreement",
     "hint": "the contract listing what the firm pays and what it gets"
    },
    {
     "term": "Deliverables",
     "hint": "the specific things the organizer promised to provide"
    },
    {
     "term": "Vendor",
     "hint": "any supplier paid for the event, like a caterer or venue"
    }
   ],
   "story": "This happens in real offices: a firm paid for a gold sponsorship that included its logo in the printed programme. The programmes arrived without it. The assistant only had the agreement in an email on her laptop at the office, so the organiser said they'd 'look into it.' Nothing happened. With the agreement on her phone and a polite written note that evening, she'd have had a discount or a fix in writing.",
   "ask": "[Name], which sponsorship promises would you check before the doors open? [Name], when on the night would you check the rest?"
  },
  "p2": {
   "why": "A written complaint on the day carries far more weight than a verbal one afterwards.",
   "talk": "When the firm sponsors an event, the agreement promises certain things, like the logo in the programme or a mention from the stage. We don't assume those promises were kept; we go and check. If something's missing, we raise it in writing on the day, because that carries far more weight than a comment afterwards. And we never renew a sponsorship automatically without asking whether it was worth it.",
   "walk": [
    "First, don't assume a promise was kept. Go and look.",
    "Next, never renew a sponsorship automatically without checking whether it was worth it.",
    "Finally, if something's missing, raise it in writing, promptly."
   ],
   "contrast": {
    "lazy": "Notices the logo's missing, mentions it to someone at the bar, and signs up for next year when the organizer asks.",
    "excellent": "Emails the organizer that night: 'Clause 3 of our agreement includes our logo in the printed programme; it's missing. Please confirm how you'll make this good.' Then gives Elias a one-page cost-versus-value summary before any renewal."
   },
   "outcome": "Sponsorship money is firm money, and an unchecked contract is money lost. More importantly, the habit is the same one that protects clients: read what was promised, check what was delivered, and put gaps in writing. Assistants who do that at a gala will do it with a settlement agreement too.",
   "ask": "[Name], at a sponsored event, the firm's logo is missing from the printed program, even though the agreement guarantees it. What do you do in the moment? [Name], what do you follow up on afterwards?",
   "mystery": "The case of the missing mention. The firm sponsored a charity gala: logo on the banner, a table for ten and a mention in the opening speech. The gala is over, and the opening speech never mentioned the firm. The organizer is already asking about next year. In pairs, four minutes: list what you should have checked on the night and when, then draft the email to the organizer and the two-line note to Elias. Bring back both."
  }
 },
 "9::Live Event Moderation": {
  "p1": {
   "icebreaker": "Game: 'Spot it first.' I'll describe a webinar moment; the first person to shout what's gone wrong wins. 'The speaker's mouth is moving and the chat says \"??\".' 'The slide hasn't changed in ten minutes and he keeps saying \"as you can see\".' 'Attendance just dropped from 80 to 50.' Quick eyes in here.",
   "teaser": "You spotted those because I told you to look. During a real event, nobody tells you. There's one word on this slide that is the whole job, and it's not 'react'.",
   "why": "Moderating a live event means watching actively for problems, not waiting for them to happen.",
   "talk": "Once an online event starts, your job is to keep it running smoothly for both the audience and the speaker, without distracting the speaker. The word is 'actively': you're watching for trouble before anyone complains. There's a simple rhythm: reminder, confirm login, check attendance, monitor, document and follow up.",
   "walk": [
    "First, before it starts, confirm the executive's login and check their audio and video. Fixing a problem before the start is much better than during.",
    "Next, during the event, watch for sound drops, screen-share failures and questions that need passing to the speaker.",
    "Then, for sessions that count toward professional credits, track attendance and times carefully.",
    "Finally, afterwards, confirm certificates and records, and document the session."
   ],
   "jargon": [
    {
     "term": "Moderator",
     "hint": "the person running the event behind the scenes so the speaker can focus"
    },
    {
     "term": "Ethics credit",
     "hint": "a required type of CLE hour on professional conduct"
    },
    {
     "term": "Attendance report",
     "hint": "the platform's log of who joined and for how long"
    }
   ],
   "story": "A common pattern from the field: during a CLE webinar, the speaker's audio dropped for six minutes. The moderator was answering emails in another window and only noticed when attendees started leaving. Afterwards, the firm couldn't say for certain who had heard the full hour, which complicated the certificates. A moderator watching the chat would have caught 'no sound' within seconds.",
   "ask": "[Name], what would you watch for during a live webinar? [Name], what would you add to that list for a webinar that gives ethics credit?"
  },
  "p2": {
   "why": "During a live event, a visible checklist beats memory every time.",
   "talk": "Running a live event well is mostly about watching. If we're actively monitoring the sound, the chat and the timing, we catch most problems before the audience notices. We keep a checklist in front of us instead of relying on memory, and we note even small technical glitches as they happen. For speaking events, we double-check the introduction, the slides, the recording and the audience numbers.",
   "walk": [
    "First, don't just react. Active monitoring catches most problems before the audience notices.",
    "Next, keep a checklist in front of you.",
    "Then, note technical problems as they happen, even small ones.",
    "Finally, remember speaking events need extra checks: an accurate introduction, slides loaded, the recording and the audience size."
   ],
   "contrast": {
    "lazy": "Logs in at start time, minimises the window and checks back at the end. 'Seemed fine to me.'",
    "excellent": "Joins 15 minutes early, tests Elias's sound, keeps the checklist open, watches the chat, and logs '10:14, audio dropped 40 seconds, fixed by switching mic' as it happens."
   },
   "outcome": "If attendance records for an ethics-credit webinar are wrong, attendees may not get credit they need, and the firm's records won't stand up to an audit. A visibly broken webinar in front of clients also undermines Elias as an expert. Careful logs protect both the people watching and the firm's name.",
   "ask": "[Name], ten minutes into a webinar where Elias is the featured speaker, his audio starts cutting out and the audience is commenting in the chat. What do you do first? [Name], in what order do you do the rest, without disrupting him more than necessary?",
   "mystery": "The case of the silent speaker. Elias is hosting a one-hour webinar that gives attendees ethics credit. Halfway through, 30 attendees drop off and the chat fills with 'no sound.' Elias keeps talking, not aware. In pairs, three minutes: write your next 60 seconds, step by step, including the exact chat message you post and how you reach Elias. Then add what you'd check 15 minutes before and right after. Bring back the plan."
  }
 },
 "9::Post-Event Follow-Up & ROI Tracking": {
  "p1": {
   "icebreaker": "Game: 'Guess the day.' I'll say a number of days after an event. Thumbs up if a follow-up email still feels natural, thumbs down if it's too late. One day. Three days. Ten days. Three weeks. Watch where the thumbs flip.",
   "teaser": "The room flipped somewhere in the middle, and that's no accident. There's a short window, and missing it turns a promising contact into a stranger.",
   "why": "An event's real value comes from what happens after it, so follow up within three days.",
   "talk": "Meeting someone at an event is only a start. Without follow-up, that connection fades just like any other. The window is short: two or three days while they still remember the conversation. That's the point where your thumbs flipped.",
   "walk": [
    "First, make notes during the event on who you met and what you talked about.",
    "Next, follow up within 48 to 72 hours.",
    "Finally, record who attended and what came of it in your normal relationship tracking system."
   ],
   "jargon": [
    {
     "term": "ROI (return on investment)",
     "hint": "what the firm got back for what it spent"
    },
    {
     "term": "Relationship tracking system",
     "hint": "where the firm records contacts and conversations, often called a CRM"
    },
    {
     "term": "General counsel",
     "hint": "a company's in-house head lawyer"
    }
   ],
   "story": "This happens in real offices: a partner met a general counsel at a dinner who said she was unhappy with her current firm. Nobody wrote it down. Two weeks later, the partner remembered 'someone from a logistics company' but not her name. By the time they found her, she'd already met two other firms. A one-line note that evening would have been worth more than the whole conference fee.",
   "ask": "[Name], what note would you want next to each new contact? [Name], what's the one detail people most often forget to write down?"
  },
  "p2": {
   "why": "Mention the actual conversation, not just 'great meeting you at the conference.'",
   "talk": "The real value of an event shows up afterwards. A business card with no notes is almost useless a week later, so we capture a line about each conversation while it's fresh. Follow-ups mention what was actually discussed, not 'great to meet you at the conference'. And we track a simple measure for each event, like leads or relationships strengthened, so the firm knows which events are worth repeating.",
   "walk": [
    "First, remember a business card with no notes is almost useless a week later.",
    "Next, track a simple measure of value for each event, like leads or relationships strengthened.",
    "Finally, keep follow-ups personal and specific."
   ],
   "contrast": {
    "lazy": "One email to all 40 contacts: 'Great meeting you at the conference! Let's stay in touch.'",
    "excellent": "'Ms Okafor, I enjoyed our talk at Tuesday's dinner about the supplier contract dispute. Elias would be glad to have a 20-minute call next week; would Thursday at 10 suit?' Logged with the event name and outcome."
   },
   "outcome": "New clients often come from a single good conversation that was followed up properly. Without tracking, the firm keeps paying for events that bring nothing and drops the ones that do. Over a year, that's the difference between a growing client list and $12,000 of nice dinners.",
   "ask": "[Name], Elias comes back from a three-day conference with 40 new contacts and no notes on any of them. How do you turn that pile into real follow-up? [Name], what would you put in place so it doesn't happen at the next one?",
   "mystery": "The case of the $12,000 question. The firm spent $12,000 on three conferences this year. Elias asks, 'Were any of them worth it?' At one of them, he met a general counsel unhappy with her current firm. In teams, five minutes: list what you'd need to have tracked to answer him, what you'd note that evening, and what happens in the next three days. Bring back your tracker columns."
  }
 },
 "9::High-Stakes Travel Disruption Management": {
  "p1": {
   "icebreaker": "Game: 'Pick a corner.' Elias's flight is cancelled the night before a deposition. Point left if your first move is to call the airline. Point right if it's to check the app. Point at me if it's something else entirely. Big split. Let's see who's right.",
   "teaser": "Most of you picked a phone or an app. The best first move isn't about the flight at all. Hold that thought.",
   "why": "When travel falls apart, first find the one thing the executive absolutely can't miss, and solve around that.",
   "talk": "The real problem is rarely the flight itself. It's the deposition, the closing or the board meeting at the other end. That's the answer to the teaser: start with the fixed point. So you triage: what has to happen, and in what order? And this is where all the preparation from calm days pays off: the travel file, the backup contacts and knowing his preferences.",
   "walk": [
    "First, identify the fixed point: the one commitment he can't miss.",
    "Next, check the airline app while you're on the phone. Apps often show options faster than agents.",
    "Then, if no direct rebooking works, try another airport, another airline or a car for the final stretch, and warn the other side early if a delay is unavoidable.",
    "After that, send Elias one clear message: what happened, what you're doing and anything he needs to decide.",
    "Finally, once it's fixed, update everyone downstream: drivers, hotels and the meeting host."
   ],
   "jargon": [
    {
     "term": "Deposition",
     "hint": "sworn questioning of a witness outside court, before trial"
    },
    {
     "term": "Closing",
     "hint": "the meeting where a deal is signed and completed"
    },
    {
     "term": "Triage",
     "hint": "sorting problems by what matters most first"
    },
    {
     "term": "Red-eye",
     "hint": "an overnight flight"
    }
   ],
   "story": "A real pattern from the field: a flight to an out-of-town deposition was cancelled late at night. The assistant spent an hour on hold and rebooked the same airline for the next afternoon, which missed the start. A flight from a second airport twenty minutes away would have landed in time. Starting from the fixed point, the 1 p.m. deposition, and working backwards would have shown it.",
   "ask": "[Name], why check the app while you're waiting on hold? [Name], what else could you be doing in those minutes?"
  },
  "p2": {
   "why": "A stressed executive needs the finished plan, not a running commentary.",
   "talk": "When travel falls apart, a stressed executive doesn't want a running commentary; he wants the finished plan. So we make sure he hears it from us before an airline app tells him, we sort it out quietly and then present the solution. And fixing the flight isn't the end. The car, the hotel and the meeting that depended on the old time all need checking, and the fix mustn't break his standing preferences, like no red-eyes.",
   "walk": [
    "First, never let him find out from an app before he hears from you.",
    "Next, don't narrate every step of your search.",
    "Then, remember fixing the flight isn't the end. Check the car and hotel that depended on the old time.",
    "Finally, keep his hard preferences in mind, like no red-eyes, so the fix doesn't break them."
   ],
   "contrast": {
    "lazy": "Six texts in an hour: 'Flight cancelled!' 'On hold now.' 'They say nothing tonight.' 'Trying another airline?' 'Still trying.' 'Any thoughts?'",
    "excellent": "One message: 'Your 7 a.m. is cancelled. You're now on the 6:15 a.m. from Midway, landing 8:40. Car rebooked, hotel notified. Deposition at 1 p.m. unaffected. Nothing needed from you.'"
   },
   "outcome": "Missing a deposition or a closing can mean rescheduling costs, an annoyed court reporter, a frustrated client and sometimes a tactical gift to the other side. A delay at a closing can even let a counterparty reopen terms. Calm, complete travel recovery keeps the case and the deal on track.",
   "ask": "[Name], Elias's connection to a closing-day meeting is cancelled, with no same-day rebooking, and the meeting can't move. Option one: a red-eye on another airline, landing two hours before. Option two: a private car for the last leg, costing much more but letting him sleep. How do you decide? [Name], how do you present it to him?",
   "mystery": "The case of the 10 p.m. cancellation. Elias's 7 a.m. flight to a Chicago deposition is cancelled at 10 p.m. the night before. The deposition starts at 1 p.m. You rebook him on a later flight, but it lands after his hotel's check-in desk closes and his car is still booked for the old time. In pairs, five minutes: name the fixed point, list the options in the order you check them, and write the single message you send him, plus everything else you fix. Bring back the message."
  }
 },
 "9::Everyday Meeting Notes & Action Items": {
  "p1": {
   "icebreaker": "Game: 'Finish the action.' I'll give you half an action item; shout what's missing. 'Look into the expert.' (Who? By when?) 'Elias to think about it.' (By when?) 'Send the documents.' (Which, to whom?) You're natural editors.",
   "teaser": "Every one of those was missing the same two things, and without them, an action almost never happens. Let's name them properly.",
   "why": "A meeting is only as useful as what people do afterwards, and your notes decide that.",
   "talk": "Good meeting notes capture three things: what was decided, what needs doing, and what's still open. They're not a transcript. Every action needs an owner and a due date, because without both it usually doesn't happen. Those are the two missing pieces. And notes from meetings about legal matters may be privileged or confidential, so we label them and share them carefully.",
   "walk": [
    "First, before the meeting, confirm the agenda and set up a template: attendees, decisions, actions and open questions.",
    "Next, write decisions as clear statements.",
    "Then, write each action as a verb, an owner and a date.",
    "After that, send the notes within 24 hours, with actions at the top.",
    "Finally, add the actions to your tracker and check them before the next meeting."
   ],
   "jargon": [
    {
     "term": "Privileged",
     "hint": "protected lawyer-client communication the other side can't see"
    },
    {
     "term": "Action item",
     "hint": "a task agreed in a meeting, with an owner and a date"
    },
    {
     "term": "Transcript",
     "hint": "a word-for-word record, which notes are not"
    }
   ],
   "story": "A common pattern in real offices: after a case strategy call, the notes said 'Team to look at expert options.' Three weeks later, at the next call, everyone assumed someone else had done it. The deadline for naming an expert was now ten days away, and the firm had to rush. 'Sam to send Elias three expert CVs by Friday 14th' would have taken the same number of seconds to write.",
   "ask": "[Name], what makes meeting notes useless to someone who wasn't there? [Name], what's the first thing you'd fix?"
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
   "contrast": {
    "lazy": "'Discussed deposition. Expert maybe. Budget concerns. Elias to think about it.' Sent to the whole distribution list.",
    "excellent": "'PRIVILEGED & CONFIDENTIAL. Decision: deposition of Harlow's CFO goes ahead in March. Actions: Sam to shortlist three experts by 14 Feb; Elias to confirm expert budget with client by 16 Feb. Open: whether to seek a deadline extension.' Sent only to the case team."
   },
   "outcome": "Missed actions become missed deadlines, and in litigation those can lead to sanctions or a weaker case. Privileged notes sent to the wrong person can lose their protection and end up in the other side's hands. Clear, labelled notes keep the case moving and keep our thinking private.",
   "ask": "[Name], how would you politely ask a senior partner to confirm a decision in the room? [Name], what would you say if they brushed you off?",
   "mystery": "The case of 'Elias to think about it.' After a 45-minute Harlow strategy call, your notes say: 'Discussed deposition. Expert maybe. Budget concerns. Elias to think about it.' In a partners' meeting the same week, the talk jumped between three topics and nobody stated a decision. In pairs, five minutes: rewrite the Harlow notes so someone who missed the call knows exactly what happens next, and write the one sentence you'd say in the room next time. Bring back both."
  }
 },
 "9::Board Meeting Preparation & Minute Drafting": {
  "p1": {
   "icebreaker": "Game: 'Minute or not?' I'll read lines. Stand up if it belongs in board minutes, stay seated if it doesn't. 'Motion to approve the budget, seconded, passed five to nothing.' 'Director Harlow looked furious.' 'Present: five directors; absent: one.' 'The debate got heated.' Good instincts.",
   "teaser": "Two of those lines don't just look bad, they can create real legal risk for the company. By the end of this topic you'll know exactly why.",
   "why": "Board minutes record what was decided and by whom, not who argued what.",
   "talk": "Most of a board meeting's work happens before anyone sits down: the agenda and the papers. And the minutes afterwards are a legal record, not a transcript. Both need precision, discretion and getting it right first time, because board mistakes are costly.",
   "walk": [
    "First, confirm the agenda with the executive, and often the chair, well ahead, and send papers early enough to be read.",
    "Next, put the board pack together the same way every time.",
    "Then, during the meeting, capture who's present and absent, each motion, who seconded it and the exact result.",
    "After that, write the minutes promptly, in neutral, factual language.",
    "Finally, send the draft round for corrections before it's finalized."
   ],
   "jargon": [
    {
     "term": "Board pack",
     "hint": "the bundle of agenda and papers sent to directors before the meeting"
    },
    {
     "term": "Motion",
     "hint": "a formal proposal the board votes on"
    },
    {
     "term": "Seconded",
     "hint": "a second director supporting the motion so it can be voted on"
    },
    {
     "term": "Chair",
     "hint": "the director who runs the meeting"
    }
   ],
   "story": "A real pattern from the field: an assistant wrote minutes that recorded a director's angry objection, word for word, because she wanted to be thorough. Months later, in a dispute, those minutes were requested and the other side used that line to suggest the board knew of a problem and ignored it. Neutral minutes recording only the motion and the vote would have said everything that was needed.",
   "ask": "[Name], what four things must you capture for every motion? [Name], which one is easiest to miss when the room is busy?"
  },
  "p2": {
   "why": "'The board discussed the budget' isn't a minute; 'Motion to approve the budget, seconded, passed five to nothing' is.",
   "talk": "Board minutes are a legal record, not a story of the conversation. Writing down who said what, or how heated a debate got, can create legal risk. What gets recorded precisely is the decision: the motion, who seconded it and how the vote went. For sensitive topics, we check with the executive or counsel about what should be formally recorded. And papers sent to the board too late can even undermine a decision's legitimacy.",
   "walk": [
    "First, never write minutes as a story of the discussion. Recording opinions creates legal risk.",
    "Next, record motions precisely.",
    "Then, for sensitive topics, check with the executive or counsel what should be formally recorded.",
    "Finally, remember papers that arrive too late can undermine the legitimacy of a decision."
   ],
   "contrast": {
    "lazy": "'Director Harlow strongly objected to the budget and was overruled after a heated debate.'",
    "excellent": "'Motion to approve the FY budget proposed by Director Lee, seconded by Director Shah. Following discussion, the motion was carried four votes to one, Director Harlow voting against.'"
   },
   "outcome": "Minutes can be read by regulators, auditors and opposing lawyers in a lawsuit. A colourful line becomes evidence; a decision made on papers sent too late can be challenged. Clean minutes protect the company and leave the other side nothing to use against it.",
   "ask": "[Name], a motion is raised, debated with real disagreement, amended once and passed four to one. You're taking minutes live. What must you capture exactly? [Name], what do you deliberately leave out?",
   "mystery": "The case of the heated debate. The board of one of Elias's companies meets in two weeks. The chair wants to add a late item about a lawsuit. And your draft minutes from last time say, 'Director Harlow strongly objected to the budget and was overruled after a heated debate.' In pairs, five minutes: rewrite that line, explain why it matters, then list what you confirm about the late lawsuit item and by when the papers go out. Bring back your rewrite and your dates."
  }
 },
 "9::Shareholder & Investor Meeting (AGM) Logistics": {
  "p1": {
   "icebreaker": "Game: 'Higher or lower.' Thirty shareholders must attend for the AGM to decide anything. A week out, I'll shout a number of confirmations. You shout 'safe' or 'trouble.' Thirty-five. Twenty-two. Twenty-nine. Thirty. Careful with that last one.",
   "teaser": "Thirty sounds safe. But a confirmation isn't the same as someone in the room, and there's one word on this slide that decides whether any of it counts.",
   "why": "If an annual shareholder meeting doesn't have enough people present, none of its decisions count.",
   "talk": "An annual general meeting, or AGM, has formal rules beyond a normal board meeting: legally required notice periods, a minimum number of attendees called a quorum, and often a bigger, more complicated guest list. Quorum is the word. Without it, the meeting can happen and still decide nothing.",
   "walk": [
    "First, confirm the required notice period for this meeting and jurisdiction well in advance.",
    "Next, track RSVPs against the quorum requirement.",
    "Finally, prepare the pack with the same care as a board meeting, plus any proxy and voting materials."
   ],
   "jargon": [
    {
     "term": "AGM",
     "hint": "annual general meeting of a company's shareholders"
    },
    {
     "term": "Quorum",
     "hint": "the minimum number present for decisions to count"
    },
    {
     "term": "Proxy",
     "hint": "someone authorised to vote on a shareholder's behalf"
    },
    {
     "term": "Notice period",
     "hint": "the minimum warning shareholders must get before the meeting"
    }
   ],
   "story": "This happens in real offices: an assistant counted RSVPs for an AGM and saw enough 'yes' replies. On the day, several confirmed shareholders didn't turn up and nobody had collected proxies as backup. The meeting fell short of quorum and had to be reconvened weeks later, with fresh notices and costs. Tracking against quorum, with proxies chased a week out, would have kept the decisions on schedule.",
   "ask": "[Name], why track RSVPs against the quorum specifically? [Name], what would you do if you were short a week out?"
  },
  "p2": {
   "why": "Voting and proxy procedures are settled in advance, never improvised on the day.",
   "talk": "An annual general meeting, or AGM, isn't just a bigger board meeting. It comes with formal rules: how much notice shareholders must get, how many must be present for decisions to count, and how voting and proxy votes work. None of that can be improvised on the day, so we confirm it all well in advance.",
   "walk": [
    "First, remember an AGM isn't just a bigger board meeting. Its notice and quorum rules are formal requirements.",
    "Finally, confirm how voting and proxies work well ahead of time."
   ],
   "contrast": {
    "lazy": "'We'll sort out the voting on the day. If someone brings a proxy, we'll probably accept it.'",
    "excellent": "'Notice went out 21 days ahead, as required. 31 attending or by proxy, quorum is 30. Proxy forms must be received by Monday 5 p.m.; counsel has confirmed the rules on late or handwritten proxies.'"
   },
   "outcome": "Decisions taken at a badly run AGM can be challenged by unhappy shareholders, and a challenge can stall a deal, a share issue or a board change for months. In a contested company, procedural mistakes are exactly what the other side looks for. Getting notice, quorum and proxies right removes that ammunition.",
   "ask": "[Name], you realize the AGM notice went out later than the required minimum notice period. What do you want confirmed before the meeting goes ahead? [Name], who do you tell first?",
   "mystery": "The case of the handwritten proxy. Thirty shareholders must attend, in person or by proxy, for the AGM to decide anything. A week out, 22 have confirmed. On the morning, a shareholder turns up with a handwritten proxy for someone else, and the procedure doesn't say whether that's accepted. In teams, five minutes: list what you do a week out to reach quorum, who decides on the proxy, and what should have been settled earlier. Bring back three clues and your answer."
  }
 },
 "9::Executive Meeting Etiquette": {
  "p1": {
   "icebreaker": "Game: 'Cringe or fine?' Thumbs down for cringe, thumbs up for fine. Joining a client call two minutes late. A dog barking on an open mic. The assistant joining five minutes early. Elias asking 'Sorry, who is everyone?' Strong thumbs on that last one.",
   "teaser": "That last one feels small, but it costs the executive something real in front of a client. One short note before the call fixes it.",
   "why": "Join important calls a few minutes early, so any problems get found before the executive arrives.",
   "talk": "At executive level, small slips stand out: an open microphone, a late join or an unprepared executive. Etiquette here isn't stiffness; it's removing friction so the conversation gets full attention. And how you show up reflects on the executive.",
   "walk": [
    "First, give the executive a short note before the call: agenda, length, who's attending and their roles.",
    "Next, join a little early and check the technology works.",
    "Then, keep your own presence professional and low-key when you're supporting.",
    "Finally, handle the mechanics quietly, like muting noise, sharing documents and watching the chat."
   ],
   "jargon": [
    {
     "term": "Briefing note",
     "hint": "a short summary the executive reads before a meeting"
    },
    {
     "term": "General counsel",
     "hint": "a company's in-house head lawyer"
    }
   ],
   "story": "A real pattern from the field: a partner joined a first call with a prospective client's general counsel and opened with a warm greeting to the wrong person, mistaking the junior lawyer for the GC. Nobody had sent a list of attendees and roles. The call recovered, but the client mentioned it later. A three-line briefing note with names and titles would have avoided it entirely.",
   "ask": "[Name], what small slip on a call reflects badly on the executive? [Name], how would you quietly prevent it?"
  },
  "p2": {
   "why": "The executive should never have to solve a technical or scheduling problem live.",
   "talk": "Good meeting etiquette doesn't happen by accident; it's prepared. A reminder goes out a day or two before, with any materials attached. We confirm in advance who's attending and what their roles are. And the whole point of that preparation is simple: the executive should never have to become the troubleshooter for a scheduling or technical problem in front of a client.",
   "walk": [
    "First, don't assume etiquette takes care of itself.",
    "Next, send a reminder 24 to 48 hours ahead, with any materials.",
    "Then, confirm who's attending and their roles in advance.",
    "Finally, remember the whole point of preparation is that the executive never becomes the troubleshooter."
   ],
   "contrast": {
    "lazy": "Puts the call in the calendar, doesn't join, and lets Elias discover on screen that the client can't see his document.",
    "excellent": "Sends a reminder with materials two days ahead, gives Elias a note listing attendees and roles, joins five minutes early, and quietly shares the document herself when his screen-share fails."
   },
   "outcome": "First calls with prospective clients decide whether the firm wins the work. An executive fumbling with settings looks less in control, and clients wonder how the firm will handle their case. Smooth calls protect Elias's authority, which is part of what gives him leverage in any negotiation.",
   "ask": "[Name], thirty seconds before Elias's call with a prospective client, you notice the invite used the wrong time zone and the client may have been waiting for an hour. What do you do right now? [Name], what do you say to Elias afterwards?",
   "mystery": "The case of the frozen screen. Elias has a first video call with a potential new client's general counsel tomorrow. During the call, the other side can't see his shared document and he starts fumbling with settings. You're on the call. In pairs, four minutes: write your one-paragraph briefing note for tonight, your five-minute pre-call checklist, and exactly what you do and say, if anything, when the screen-share fails. Bring back all three."
  }
 },
 "9::Video Conferencing: Platform Admin (Zoom/Teams/Meet)": {
  "p1": {
   "icebreaker": "Game: 'Hands up, platform check.' Hands up if you've used Zoom. Keep it up if you've used Teams too. Keep it up if you've also used Meet. Now keep it up only if you've ever changed a setting before a meeting rather than during one. Fewer hands.",
   "teaser": "That last question is the difference between attending a call and running one. And there's one setting that, left off, can let the wrong people meet each other too early.",
   "why": "Set up video calls properly beforehand, and most problems never happen.",
   "talk": "Running a meeting platform is different from attending a call. It means owning the settings, like waiting rooms, who can share screens, recording and registration. The waiting room is the one I teased: it decides who comes in, and when. Zoom, Teams and Meet each work a little differently, so know your firm's main one well.",
   "walk": [
    "First, before scheduling, confirm the key settings: waiting room, screen sharing, recording and registration.",
    "Next, use a pre-meeting checklist for the platform: test access, check logins and attach the agenda.",
    "Then, know how to manage people live: mute, remove, promote to co-host and switch screens.",
    "Finally, review the account's default settings regularly."
   ],
   "jargon": [
    {
     "term": "Waiting room",
     "hint": "a holding area where the host lets people in one by one"
    },
    {
     "term": "Co-host",
     "hint": "a second person with control of the meeting"
    },
    {
     "term": "Breakout room",
     "hint": "a separate small room inside the same meeting"
    }
   ],
   "story": "This happens in real offices: a mediation call was set up on a standard link with no waiting room. One party joined early and found themselves in the main room with the other side's lawyer before the mediator was ready. Nothing confidential was said, but the mediator had to restart the session and both sides were uneasy. A waiting room and breakout rooms, set up beforehand, would have kept the parties apart until the right moment.",
   "ask": "[Name], what settings would you check before a confidential call? [Name], which one would you check twice?"
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
   "contrast": {
    "lazy": "Every meeting on the same open link: anyone can join, unmute and share. 'It's always worked before.'",
    "excellent": "Confidential call: waiting room on, sharing for host only, recording off, a named co-host. Public webinar: registration, attendees muted, Q&A moderated. Both tested the day before."
   },
   "outcome": "A confidential strategy call that an outsider can join is a leak waiting to happen, and leaked strategy is lost leverage at settlement. A public webinar hijacked by an inappropriate screen-share embarrasses the firm in front of 200 clients. The right settings are a quiet form of client protection.",
   "ask": "[Name], Elias's confidential strategy call with senior partners went out on a general meeting link with no waiting room or registration. What do you change before the call? [Name], how do you raise it, since the invite's already out?",
   "mystery": "The case of the four-party settlement. You're setting up a confidential settlement meeting with four parties, two of whom shouldn't meet the other two until a certain point. Last month, a client webinar for 200 people was set up like an internal meeting and someone shared something inappropriate. In pairs, five minutes: list the settings and features for the settlement meeting, and what the webinar's settings should have been. Bring back two settings lists."
  }
 },
 "9::Video Conferencing: Technical Troubleshooting": {
  "p1": {
   "icebreaker": "Game: 'Shout the fix.' I'll name a problem, you shout the first fix you'd try. 'Can't hear anyone.' 'Link won't open.' 'Camera is black.' 'Everyone hears an echo.' Loud and fast. Good.",
   "teaser": "Most of you shouted a different fix for the same problem. That's fine, but there's one rule that matters more than knowing every fix. It's the very first line of this slide.",
   "why": "When a call breaks, get it working first and work out why afterwards.",
   "talk": "Most video problems fall into a few predictable groups: login, audio and video, and screen sharing. A calm, step-by-step approach beats panic nearly every time. Get it working first, investigate later. And writing down what happened turns one-off fixes into a system that improves.",
   "walk": [
    "First, for a login failure, check the link and the browser, then contact the platform's support.",
    "Next, for sound or picture problems, check the right device is selected, check permissions, then try leaving and rejoining.",
    "Then, before any important call, have a backup ready, like a phone number.",
    "Finally, record every problem, the fix and how long it took."
   ],
   "jargon": [
    {
     "term": "Dial-in backup",
     "hint": "a phone number people can use if video fails"
    },
    {
     "term": "Permissions",
     "hint": "whether your computer lets the app use the mic and camera"
    }
   ],
   "story": "A common pattern from the field: during a client call, the platform froze and the assistant spent ten minutes trying to work out why, while the client waited. Nobody had a dial-in number to hand. The client eventually rang the partner's mobile, slightly annoyed. A phone number in the invite as a backup would have had them talking again in thirty seconds.",
   "ask": "[Name], what's your backup if the platform fails completely? [Name], where would you keep that backup so you can find it in a hurry?"
  },
  "p2": {
   "why": "Working through likely causes in order is faster than trying everything at once.",
   "talk": "When the technology fails, the instinct is to try everything at once. That's slower. Working through the likely causes in order, sound, then connection, then the device, fixes it faster. We keep the platform's support contact handy before we need it, test unfamiliar setups in advance, and while we're fixing things, a calm 'we're sorting out an audio issue, one moment' keeps it professional.",
   "walk": [
    "First, don't try every fix at once.",
    "Next, keep the platform's support contact handy before you need it.",
    "Then, test unfamiliar setups in advance.",
    "Finally, remember a calm 'we're fixing an audio issue, one moment' keeps things professional."
   ],
   "contrast": {
    "lazy": "Clicks every setting at once, says 'Oh no, it's broken again' on an open mic, and leaves the client in silence.",
    "excellent": "'We're sorting out an audio issue, one moment.' Then checks the client's mic is unmuted, then the right input device, then asks them to rejoin, and offers the dial-in if it's still silent."
   },
   "outcome": "A board call or client call that falls apart wastes expensive time and makes the firm look shaky. If a key decision-maker can't join, a vote or an instruction may be delayed, and in a live deal or dispute, delays cost money and leverage. Calm, ordered fixes keep the meeting and the matter moving.",
   "ask": "[Name], fifteen minutes before a critical client call, you discover the platform is down for maintenance you didn't know about. What's your plan for the next five minutes? [Name], what do you tell the client?",
   "mystery": "The case of the one-way client. A client can hear everyone, but no one can hear the client, and they're getting frustrated. Earlier, two minutes into a board call, one director's audio echoed and another couldn't join at all. In pairs, four minutes: walk through your checks in order for the silent client, and what you say while fixing it. Then decide which board problem you'd handle first and your fallback. Bring back both orders."
  }
 },
 "9::Four SOPs That Keep Professional Development on Track": {
  "p1": {
   "icebreaker": "Game: 'Odd one out.' Four procedures: event registration, attendance records, team training, reputation. Hold up one to four fingers for the one you'd be most tempted to skip. Three, two, one, show me. Look at all those fours.",
   "teaser": "The one most of you picked is exactly the one that tends to bite months later. Let's find out why.",
   "why": "Four simple procedures keep professional development organized, and each one prevents a specific failure.",
   "talk": "Four simple procedures keep professional development on track. Event registration: check the provider is legitimate, get approval and keep the receipt. Attendance: record it and save certificates where an auditor could find them. Team training: assess what people need each quarter and check whether it helped. And reputation: keep bios current, spot awards and speaking opportunities, and escalate bad publicity quickly.",
   "walk": [
    "First, for registrations, check the provider is legitimate and approved before booking.",
    "Next, for attendance, save certificates in one audit-ready folder.",
    "Then, for team training, assess needs quarterly and track whether it worked.",
    "After that, for reputation, watch for opportunities and escalate negative publicity immediately.",
    "Finally, don't skip the one that feels least urgent."
   ],
   "jargon": [
    {
     "term": "SOP (standard operating procedure)",
     "hint": "a written, repeatable way of doing a task"
    },
    {
     "term": "Audit-ready",
     "hint": "organised so an inspector could check it without help"
    },
    {
     "term": "Approved provider",
     "hint": "a course provider whose hours the state bar accepts"
    }
   ],
   "story": "A real pattern from the field: three associates booked courses from a provider with a polished website. Nobody checked whether the provider was approved in their state. At reporting time, none of the hours counted and they had to cram extra courses into the last month. One check at the registration step, before payment, would have caught it.",
   "ask": "[Name], which of the four would you be most tempted to skip? [Name], what could go wrong if you did?"
  },
  "p2": {
   "why": "The procedure that feels least urgent is the one that gets skipped, and it still matters.",
   "talk": "Each of the four exists to stop a predictable failure: a missed event, a lost certificate, training money spent on something that didn't help, or a missed chance for recognition. The trap is that the one that feels least urgent is the one that gets skipped, and months later that's the one that bites.",
   "walk": [
    "First, for event registration: check, approve, register and calendar it.",
    "Next, for attendance: record it, export reports and store certificates.",
    "Finally, for upskilling: assess needs, choose providers carefully and measure the change."
   ],
   "contrast": {
    "lazy": "'Looks like a good summit, I've booked it.' Certificate saved somewhere in an inbox. Nobody reads the trade blogs.",
    "excellent": "'Before booking the $1,200 summit, I checked the provider's state approval, got Elias's sign-off, saved the receipt and blocked the calendar. Certificate goes straight to the CLE folder. I also scan trade press weekly and flag anything negative the same day.'"
   },
   "outcome": "Unapproved hours mean lawyers scrambling for credit, or worse, falling out of compliance. A negative article nobody saw for a week means the firm missed its chance to respond while it mattered. Clients and opponents read the same press, and a reputation left undefended weakens the firm's position everywhere.",
   "ask": "[Name], Elias wants to attend a $1,200 legal-tech summit run by a provider you've never heard of. Walk through the registration procedure before you book. [Name], what step did they miss?",
   "mystery": "The case of the unread blog. A negative article about the firm appeared on a legal trade blog. Nobody noticed for a week. Last year, three associates also took courses that turned out not to count for their required credits. In teams, five minutes: decide which of the four procedures should have caught each problem, at which step, and what it would have told you to do. Bring back two answers."
  }
 },
 "9::CLE / Compliance Tracking": {
  "p1": {
   "icebreaker": "Game: 'True or false?' Shout it out. 'If the firm has done 500 CLE hours, everyone's fine.' 'Every state has the same CLE rules.' 'Any course you attend counts.' 'CLE deadlines are often extended if you ask nicely.' All false. You're a tough crowd.",
   "teaser": "That first statement is the dangerous one, and it's the one most firms actually track. Let's see who it hides.",
   "why": "Track continuing education for each person individually, because these deadlines don't get extended.",
   "talk": "Lawyers must complete continuing legal education, or CLE, every reporting period. A single total for the firm hides who's actually at risk. That's the answer to the teaser: 500 hours firm-wide can still mean one partner is short. So you track each person: what they've done, what they still need and their deadline.",
   "walk": [
    "First, record completed hours, remaining hours and the deadline for each person.",
    "Next, flag anyone getting close while there's still time to act.",
    "Then, check the hours actually count: the right category and the right state.",
    "After that, give reminders plenty of lead time.",
    "Finally, check the tracker against the certificates on file."
   ],
   "jargon": [
    {
     "term": "CLE",
     "hint": "continuing legal education, required training hours for lawyers"
    },
    {
     "term": "Reporting period",
     "hint": "the time window in which the hours must be completed"
    },
    {
     "term": "Category",
     "hint": "the type of hour, such as ethics, that some states require"
    }
   ],
   "story": "This happens in real offices: the firm's CLE tracker was a list of courses with attendance totals. It looked busy and healthy. A partner discovered with a month to go that he was short on ethics hours, because none of his courses were in that category. He spent two weekends on webinars. A tracker by person, with an ethics column, would have flagged him six months earlier.",
   "ask": "[Name], why is a single total of hours for the firm dangerous? [Name], what column would you add to fix it?"
  },
  "p2": {
   "why": "The certificate is the proof, so keep every one.",
   "talk": "CLE stands for continuing legal education: the hours of training attorneys must complete to keep their licence. Each state sets its own total and its own required categories, like ethics. The hours usually have to come from approved providers, and some states let extra hours carry over. Our job is to track the hours, keep every certificate as proof and confirm the current rules for each attorney's state.",
   "walk": [
    "First, know each state sets its own total hours and required categories, like ethics.",
    "Next, check hours come from approved providers, and whether the state allows extra hours to carry over.",
    "Finally, keep a certificate for every course, and confirm the current rules for each attorney's state."
   ],
   "contrast": {
    "lazy": "'Elias has done loads of courses this year, he'll be fine.' Certificates in his inbox, if anywhere.",
    "excellent": "'Elias: 18 of 25 hours done, 2 ethics hours still needed, deadline in seven weeks. Booked a 2-hour ethics webinar for the 14th. All 18 hours checked against certificates and state approval.'"
   },
   "outcome": "An attorney who misses CLE requirements can be fined or have their licence suspended, and a lawyer who can't practise can't appear for a client. That can mean handing a case to someone else mid-stream, delays and an unhappy client. A lost certificate in an audit turns a completed course into a problem.",
   "ask": "[Name], Elias has 18 of his 25 hours, still needs 2 ethics hours, and his deadline is in seven weeks. What do you flag today? [Name], what do you check about the hours he already has?",
   "mystery": "The case of the lost certificate. Elias finishes a course but loses the certificate. The state bar audits him the following year. Meanwhile, the firm's tracker is a list of courses, not people, and a partner just found he's short with a month to go. In pairs, five minutes: decide what you do about the missing certificate, sketch the tracker columns it should have had, and name the habit that prevents both. Bring back the columns and the habit."
  }
 },
 "9::Planning Professional Development": {
  "p1": {
   "icebreaker": "Game: 'Guess the result.' A firm runs a workshop. 40 people attend, everyone rates it five stars. Thumbs up if you think it worked, thumbs down if you're not sure. Now: three months later, nothing has changed. Did your thumb stay where it was?",
   "teaser": "Most of you put your thumb up first. That's the trap this topic is about, and it's hiding in the first line of the slide.",
   "why": "A full room doesn't prove the training worked.",
   "talk": "Good training fits into people's real schedules, with online and in-person options. And it's judged by what people can actually do afterwards, not by how many people showed up. Attendance tells us the room was full; it doesn't tell us anyone learned anything.",
   "walk": [
    "First, offer online and in-person options where you can.",
    "Next, decide before the session how you'll judge whether it worked.",
    "Then, collect feedback right after the session.",
    "After that, track results over time, so you can see which formats work.",
    "Finally, use what you learn to improve the next session."
   ],
   "jargon": [
    {
     "term": "Professional development",
     "hint": "training that builds skills for the job"
    },
    {
     "term": "Lunch-and-learn",
     "hint": "a short training session over lunch"
    }
   ],
   "story": "A real pattern from the field: a firm paid for a time-management workshop that everyone loved. Feedback forms were glowing. Three months later, late time entries were exactly the same, and the managing partner asked what the money had bought. Nobody had decided in advance what 'worked' would look like. One measure, set beforehand, like 'percentage of time entered same day,' would have given a real answer.",
   "ask": "[Name], how would you measure whether a training session actually worked? [Name], when would you measure it?"
  },
  "p2": {
   "why": "One simple before-and-after check tells you more than any attendance number.",
   "talk": "There's a simple way to think about whether training worked, in four levels. Did people find it useful? Can they show the new skill? Are they actually using it at work a few weeks later? And did performance improve? Most training only ever measures the first. Even a quick before-and-after check on the second tells us far more.",
   "walk": [
    "First, reaction: did people find it useful? Then learning: can they show the new skill?",
    "Next, behavior: are they using it at work weeks later?",
    "Finally, results: did performance actually improve?"
   ],
   "contrast": {
    "lazy": "'Billing training done. 32 attended, average rating 4.6. Success.'",
    "excellent": "'Before training, 40% of bills had errors; on a quick test, 6 of 10 could apply the new codes. After: 9 of 10 passed the test, and six weeks later billing errors dropped to 15%.'"
   },
   "outcome": "Training that doesn't change behaviour is a cost, not an investment. In a law firm, the skills being trained, billing, document handling, deadlines, feed straight into client results. Measuring what changed tells the firm where to spend next year's budget and where mistakes are still slipping through.",
   "ask": "[Name], the firm runs a lunch-and-learn on the new document system. Define one measure at each of the four levels. [Name], which of those would be easiest to collect?",
   "mystery": "The case of the billing training. Elias wants to know whether the new billing training worked. You have attendance numbers and a feedback survey. That's it. In pairs, four minutes: identify which of the four levels are missing, what you can still measure now, and how you'd set up the next training so the answer is clear. Bring back one measure per level."
  }
 },
 "9::Membership Renewals": {
  "p1": {
   "icebreaker": "Game: 'Stand if it's happened.' Stand up if a subscription has ever renewed when you didn't want it to. Stay standing if something has ever lapsed when you did want it. Look around. Pretty much everyone is up for one or the other.",
   "teaser": "There's one quiet cause behind most lapsed memberships, and it isn't forgetfulness. It's coming up on the second slide.",
   "why": "A simple renewal tracker catches lapsed memberships before they happen.",
   "talk": "Professional memberships, clubs and associations all renew at different times of year. Relying on the renewal notice, or on memory, is exactly how one quietly lapses, usually the one that mattered.",
   "walk": [
    "First, build a tracker with the name, expiry date, status and who follows up.",
    "Next, set reminders well before each expiry.",
    "Then, automate reminders once there are too many to remember.",
    "After that, check the terms and price haven't changed before renewing.",
    "Finally, review the list now and then for memberships nobody uses."
   ],
   "jargon": [
    {
     "term": "Practice section",
     "hint": "a specialist group within a bar association"
    },
    {
     "term": "Auto-renew",
     "hint": "renews and charges the card automatically unless cancelled"
    }
   ],
   "story": "A common pattern in real offices: an attorney's professional association membership lapsed and nobody noticed for six months. He found out when he tried to register for their annual conference and was charged the non-member rate, plus he'd lost access to the member directory he used for referrals. The renewal email had gone to an old address. A tracker with expiry dates and reminders would have caught it.",
   "ask": "[Name], has a membership ever lapsed on you without warning? [Name], what would have warned you in time?"
  },
  "p2": {
   "why": "Expired cards are the most common reason memberships lapse without anyone noticing.",
   "talk": "For each membership, we track the basics: what it is, who the member is, the renewal date, the cost and who approves it. We also note whether it renews automatically and which card it's on, because expired cards are the most common reason memberships lapse without anyone noticing. That's the quiet cause from the teaser. And once a year, we ask whether each one is still worth paying for.",
   "walk": [
    "First, record the organization, member, level, renewal date, cost and who approves it.",
    "Next, note whether it auto-renews and which card is on file.",
    "Finally, ask whether it's still worth it. A yearly review stops you paying for things nobody uses."
   ],
   "contrast": {
    "lazy": "'They'll email us when it's due.' The card on file expired in spring and nobody knows which memberships use it.",
    "excellent": "A tracker row for each: 'State bar, Elias, renews 1 March, $450, auto-renew on card ending 4421 (expires this month), approved by Elias.' Reminder set 60 days out, card updated today."
   },
   "outcome": "A lapsed bar membership isn't just an inconvenience; in some places it affects a lawyer's standing to practise. Losing a section membership can cut off referrals and networks that bring in clients. And a quiet stack of unused subscriptions is money the firm could have spent on the work.",
   "ask": "[Name], Elias's state bar membership, two practice-section memberships and a country club all renew within 60 days, and one card on file expires this month. Build the tracker rows. [Name], what would you do first?",
   "mystery": "The case of the expired card. The firm pays for five online subscriptions and three memberships on a card that expired last month. Two have already lapsed, and Elias's association membership lapsed six months ago without anyone noticing. In pairs, four minutes: decide what you check first, which item is most urgent, and write the tracker columns you'd set up today. Bring back your first three actions."
  }
 },
 "9::Ethics & Gift Compliance": {
  "p1": {
   "icebreaker": "Game: 'Accept or refuse?' Thumbs up to accept, thumbs down to refuse. A box of chocolates from a client at Christmas. Concert tickets from a vendor. A $250 gift basket to a recently retired judge. Lunch with a regulator. That split on the judge was interesting.",
   "teaser": "One of those looks the most generous and harmless, and it's the one with the most hidden risk. We'll come back to who it is and why.",
   "why": "Gift rules are stricter than most people's instincts, so check the policy before accepting or giving anything.",
   "talk": "Gifts and hospitality with clients, vendors or officials can create real ethics problems. Something that feels like ordinary courtesy can still break a rule, or look like an attempt to influence someone. A gift to a judge, even a retired one, from a court where the firm has cases pending can look exactly like that.",
   "walk": [
    "First, know the firm's gift policy before accepting or offering anything beyond small courtesies.",
    "Next, log any gift above the policy limit, even if it seems fine.",
    "Finally, take extra care with government officials and regulated parties."
   ],
   "jargon": [
    {
     "term": "Gift policy",
     "hint": "the firm's written rules on giving and receiving gifts"
    },
    {
     "term": "Gift log",
     "hint": "the record of gifts given or received over the limit"
    },
    {
     "term": "Regulated party",
     "hint": "a person or body under special rules, like officials or regulators"
    }
   ],
   "story": "A real pattern from the field: an assistant happily accepted a pair of event tickets from a supplier the firm used a lot. Months later, during a review of supplier contracts, the gift came up and her neutrality was questioned. She hadn't done anything wrong, but she hadn't logged it or asked either. A two-line email to the compliance contact would have protected her completely.",
   "ask": "[Name], why do you think a gift to a government official is treated differently? [Name], does that change if they've just retired?"
  },
  "p2": {
   "why": "'Everyone does this' is not a gift policy.",
   "talk": "The two phrases that get people into trouble are 'it's only small' and 'everyone does it'. Neither is a gift policy. Many firms and many clients have strict limits, especially around officials. So when a gift arrives or we're planning to send one, and we're not sure, we ask first. A quick question costs far less than a violation.",
   "walk": [
    "First, remember modest or common doesn't mean allowed.",
    "Finally, when unsure, ask first. It costs far less than a violation."
   ],
   "contrast": {
    "lazy": "'Oh, everyone sends the judges something when they retire.' The basket gets ordered that afternoon.",
    "excellent": "'Before I order, I've checked the gift policy and asked compliance: the firm still has cases before that court, so the basket isn't allowed. I'd suggest a personal card from you instead.'"
   },
   "outcome": "A gift that looks like influence can lead to a bar complaint, a client walking away or the other side asking questions about fairness in a case. In a dispute, anything that hints at improper influence can taint a result the firm worked hard for. Asking first protects the case as much as the person.",
   "ask": "[Name], a vendor sends an expensive bottle of whisky and a $300 restaurant voucher to the office for the holidays. What do you do with them? [Name], what do you check first?",
   "mystery": "The case of the grateful court reporters. A court-reporting firm offers you two concert tickets 'as thanks for all the business.' You'd love to go. The same week, Elias wants to send a $250 gift basket to a judge who just retired from the court where the firm has cases pending. In pairs, four minutes: decide what you do in each case, who you ask, and what you write in the gift log. Bring back two short replies."
  }
 },
 "9::Professional Liability & Insurance Awareness": {
  "p1": {
   "icebreaker": "Game: 'Red flag or routine?' I'll read client lines. Stand up for red flag, stay seated for routine. 'Thanks, all received.' 'We relied on your advice.' 'Can we move Thursday's call?' 'We need to talk about this.' Lots of you stood for the last two. Good.",
   "teaser": "Neither of those last two lines uses a scary word like 'lawsuit'. And yet together they're one of the clearest warning signs an assistant can see. Let's find out why.",
   "why": "You don't need to understand malpractice insurance; you need to spot the warning signs and pass them on.",
   "talk": "Firms carry insurance against claims of professional mistakes. Catching early signs of a possible claim, like an unhappy client hinting at action, gives the firm many more options than finding out late. 'We relied on your advice' plus 'we need to talk' is exactly that kind of hint, even without the word 'lawsuit.'",
   "walk": [
    "First, know where the insurance documents and renewal dates are kept.",
    "Next, if a client's language suggests serious unhappiness, like mentions of complaints or damages, flag it immediately.",
    "Finally, keep renewal and review dates on the compliance calendar."
   ],
   "jargon": [
    {
     "term": "Malpractice (professional liability)",
     "hint": "a claim that the lawyer made a professional mistake"
    },
    {
     "term": "Insurer",
     "hint": "the company that covers the firm against such claims"
    },
    {
     "term": "Damages",
     "hint": "money claimed to make up for a loss"
    }
   ],
   "story": "This happens in real offices: a client email saying 'we relied on your advice and it's cost us' arrived while the partner was on leave. The assistant replied politely, 'He'll be back next week,' and filed it. Weeks later, the firm's insurer asked when the firm first knew of the complaint, and the late notice made things harder. Forwarding it straight to the partner and the firm's risk contact would have been the right move.",
   "ask": "[Name], what kind of client language would make you escalate? [Name], who would you escalate to if Elias was away?"
  },
  "p2": {
   "why": "Never try to judge coverage or liability yourself; that always goes to the attorney.",
   "talk": "Assistants are often the first to see an email that hints at a complaint or a claim, something like 'we're considering our options'. That's not routine, and it needs to reach the attorney quickly. But deciding whether the firm is covered, or whether it's liable, is never our call. And these messages stay as confidential as any privileged matter.",
   "walk": [
    "First, you're often the first to see concerning language, so don't treat it as routine.",
    "Next, leave coverage questions to the attorney; they're outside your role.",
    "Finally, keep these messages as confidential as any privileged matter."
   ],
   "contrast": {
    "lazy": "Replies 'So sorry to hear that, I'm sure it'll be fine and the insurance will cover it,' then mentions it to a colleague over lunch.",
    "excellent": "Replies 'Thank you, I've passed this to Elias, who will be in touch,' forwards it at once to Elias and the firm's risk contact marked confidential, and says nothing else to anyone."
   },
   "outcome": "Insurers usually require prompt notice of possible claims. Late notice can put the firm's cover at risk, and a casual reply can be read later as an admission. Spotting it early and passing it on keeps the firm's options open, and that can be the difference between a quiet resolution and an expensive dispute.",
   "ask": "[Name], a client's email says, 'We're considering our options given how this was handled.' What's your read? [Name], what do you do beyond replying normally?",
   "mystery": "The case of last month's email. The firm's malpractice insurer sends a renewal questionnaire asking whether any client has threatened a claim this year. You remember an email from last month: 'We relied on your advice and we've now lost the contract. We need to talk about this.' Elias was away then. In pairs, four minutes: decide what you do now, who you tell, and what you should have done the day it arrived. Bring back both answers."
  }
 },
 "9::Protecting the Brand Online": {
  "p1": {
   "icebreaker": "Game: 'Hot or cool?' I'll read two replies to a bad review. Fan yourself if it's hot-headed, give a calm thumbs up if it's cool. 'This client was impossible and we did our best.' 'We're sorry to hear this. Please contact our office so we can look into it.' Easy in a classroom. Harder at 11 p.m. when it's your firm.",
   "teaser": "Here's a claim you might not believe yet: a bad review can do more for the firm than ten good ones. By the end of this topic you'll see how.",
   "why": "When someone posts a bad review, respond calmly and factually, and never argue in public.",
   "talk": "Watch for mentions of the firm, don't just wait for trouble. And a negative review, handled well, can actually do more for the firm's reputation than ten positive ones, because everyone sees how you respond. That's the payoff: readers judge the reply, not just the complaint.",
   "walk": [
    "First, monitor mentions and reviews regularly.",
    "Next, reply to negative comments professionally and factually, never heatedly.",
    "Then, apply 'need to know' to anything sensitive that comes up.",
    "After that, draft a considered reply rather than reacting in the moment.",
    "Finally, escalate anything beyond a routine review, like legal threats or coordinated attacks."
   ],
   "jargon": [
    {
     "term": "Need to know",
     "hint": "share sensitive information only with people who require it"
    },
    {
     "term": "Cone of silence",
     "hint": "a strict rule that a sensitive topic isn't discussed outside a small group"
    }
   ],
   "story": "A real pattern from the field: a firm replied to an angry review by explaining the client's case in detail to show it had done good work. The reply confirmed the person was a client and revealed facts about their matter, which was a confidentiality problem far bigger than the review. A short, calm 'please contact our office' would have protected the client and looked better to every reader.",
   "ask": "[Name], how would your reply differ if you wrote it angry versus after a pause? [Name], what would you never put in a public reply?"
  },
  "p2": {
   "why": "A well-handled bad review can do more for the firm than ten good ones.",
   "talk": "Protecting a brand online has two sides. One is outward: watching what's being said and responding well, because a calm, professional reply to a bad review can impress readers more than ten good reviews. The other is inward, what we might call 'the vault': sensitive information is shared only with people who need it, because the moment it's mishandled, it becomes a liability.",
   "walk": [
    "First, monitor proactively and respond well.",
    "Finally, protect sensitive information strictly: need to know, and a cone of silence."
   ],
   "contrast": {
    "lazy": "'Actually, you missed three appointments and your invoice was correct.' Posted within ten minutes, naming the case.",
    "excellent": "'We're sorry to read this. We take every concern seriously and would welcome the chance to discuss it directly. Please contact our office manager at the main number.' Drafted, checked by Elias, posted the next morning. No case details."
   },
   "outcome": "Anything we post publicly can be read by clients, judges and the other side. Revealing case details breaks confidentiality and can harm a client's position. A hot reply to a former employee's post can fuel the story; a calm, escalated response keeps the firm's credibility intact for the cases that matter.",
   "ask": "[Name], a former client posts a one-star review: 'Thorne & Partners never returned my calls and overcharged me.' Let's draft the public reply together. [Name], what would you check before posting it?",
   "mystery": "The case of the shared post. A former employee posts on social media criticizing the firm's billing practices, and several people are sharing it. The same week, an anonymous review says a Thorne & Partners attorney was 'rude and useless' and names a real case. In teams, five minutes: decide who you escalate each to, what you don't do, and draft a reply to the review that leaves out the case. Bring back the reply and your 'don't' list."
  }
 },
 "9::Awards, Recognition & Charitable Coordination": {
  "p1": {
   "icebreaker": "Game: 'Promise or proof?' Thumbs up if it counts as a donation the firm can show records for, thumbs down if not. 'Elias said yes to the gala.' 'The pledge form was signed.' 'The payment cleared and the charity sent a receipt.' Only one of those is proof.",
   "teaser": "Here's the twist: the same thing that turns a pledge into proof also stops a great award nomination from being missed. Let's see what it is.",
   "why": "Great nominations get missed simply because nobody tracked the deadline.",
   "talk": "An award application is like any other application: exact eligibility, exact materials and a firm deadline. Miss one, and a strong nomination is out. Charitable commitments need the same care, because a promise isn't the same as a donation made and documented. The thing that connects them is a simple tracker.",
   "walk": [
    "First, keep a simple tracker of awards worth pursuing: name, deadline, eligibility, materials and status.",
    "Next, confirm the criteria and materials well before the deadline.",
    "Then, for charitable pledges, track both the commitment and whether it was fulfilled.",
    "After that, keep records of donations, because they often matter for tax purposes.",
    "Finally, treat awards and charity as proactive reputation-building."
   ],
   "jargon": [
    {
     "term": "Pledge",
     "hint": "a promise to donate, not yet paid"
    },
    {
     "term": "Eligibility criteria",
     "hint": "the rules on who can be nominated"
    },
    {
     "term": "Legal aid",
     "hint": "free legal help for people who can't afford it"
    }
   ],
   "story": "This happens in real offices: a partner forwarded an awards announcement with 'worth a go?' and it sat in the assistant's inbox. The deadline passed by a day. The award went to a rival firm, which then used it on its website for a year. A tracker entry with the deadline and a reminder three weeks before would have taken two minutes.",
   "contrast": {
    "lazy": "'Elias mentioned the gala, I think he paid.' The award email stays in an inbox with a flag on it.",
    "excellent": "Tracker rows: 'Legal aid gala: $5,000 pledged 3 Sept, paid 20 Sept, receipt filed.' 'Regional bar award: due 14 Nov, eligibility confirmed, bio and two references requested, reminder set for 31 Oct.'"
   },
   "outcome": "Awards and charitable work build the firm's name with clients, judges and the wider bar. A missed deadline hands that recognition to a competitor. An unpaid or undocumented pledge can embarrass the firm with a charity and cause tax headaches. Small tracking habits protect reputation, and reputation feeds into how others treat the firm at the table.",
   "ask": "[Name], Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each? [Name], what documents do you keep?",
   "mystery": "The case of yesterday's deadline. A local business award would suit the firm well. The nomination deadline was yesterday, and the only record of it was an email Elias forwarded three months ago. In pairs, four minutes: find where it slipped, design the tracker that would have caught it, and set the reminders for next year. Bring back your tracker columns and the two reminder dates."
  }
 },
 "9::Building an Executive's Media & Speaking Kit": {
  "p1": {
   "icebreaker": "Game: 'Guess the year.' Hands up: who has a work photo online that's more than three years old? Five years? Who has a bio that still lists a job you've left? Plenty of honest hands. Hold on to that feeling.",
   "teaser": "That feeling is exactly what a journalist sees when we send an old kit. And there's one word on this slide that makes the difference between a same-day reply and an embarrassing one.",
   "why": "A ready media kit turns a last-minute press request into a same-day reply.",
   "talk": "A media kit is a folder with the executive's current bio, a good headshot, key talking points and past coverage. It's only useful if it's current; that's the word. Sending an old bio or an outdated title looks careless.",
   "walk": [
    "First, keep a standing folder with a short and a long bio, a recent headshot and a one-page summary.",
    "Next, keep a running list of past media and speaking engagements.",
    "Finally, review and refresh the kit every quarter."
   ],
   "jargon": [
    {
     "term": "Media kit",
     "hint": "a ready folder of bio, photo and key facts for press and organizers"
    },
    {
     "term": "Talking points",
     "hint": "the few key messages the executive wants to get across"
    },
    {
     "term": "Headshot",
     "hint": "a professional head-and-shoulders photo"
    }
   ],
   "story": "A common pattern in real offices: a conference needed a bio within the hour. The assistant grabbed the one in the shared drive and sent it. The printed programme then listed the partner's previous firm and an old title. The new firm's marketing team was not pleased, and a correction slip had to be printed. A quarterly refresh would have caught it.",
   "ask": "[Name], when was Elias's bio last updated? [Name], how would you find out for certain?"
  },
  "p2": {
   "why": "Always glance over the kit before you send it.",
   "talk": "A media kit, meaning the bio, headshots and talking points, goes stale quietly. If we only update it when someone asks, it's usually been out of date for months, and there's never time to fix it under a deadline. So we keep headshots in sizes for print and online, refresh the bio whenever something changes, and glance over the whole kit before it goes anywhere.",
   "walk": [
    "First, remember updating only when asked means it's usually been stale for months.",
    "Next, keep headshots in several sizes, for print and online.",
    "Finally, check for outdated details, like an old title, before anything goes out."
   ],
   "contrast": {
    "lazy": "Sends whatever's in the folder: the five-year-old photo, the bio with his former firm, no check.",
    "excellent": "Keeps a dated 150-word and 400-word bio, headshots for print and web, and a quarterly calendar reminder. Before sending, reads the bio once against his current title and asks Elias for a two-minute OK if anything's changed."
   },
   "outcome": "An executive's public image is part of how clients and opponents size him up. An outdated bio suggests a firm that doesn't pay attention to detail, which is the last thing a client wants from their lawyer. A sharp, current kit supports Elias's reputation, and reputation carries weight in every negotiation.",
   "ask": "[Name], a journalist needs Elias's bio and headshot in two hours. The bio on file is over a year old and lists a role he no longer holds. What do you do, given the deadline? [Name], what do you set up afterwards?",
   "mystery": "The case of the five-year-old headshot. You sent Elias's media kit to a journalist, and the headshot was five years old and the bio listed his former firm. A conference organizer also needs his bio in 150 words and a headshot within the hour. In pairs, four minutes: list what goes wrong for Elias, where you find the right files, what you check before sending, and the system you set up to catch this in future. Bring back your checklist."
  }
 }
});
