/* ============================================================
   DAY 3 — Calendar, Legal Calendaring & Travel Management
   Everything a trainee reads on this day:
   - DAY3: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY3_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "3::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY3 = {
  "id": 3,
  "title": "Calendar, Legal Calendaring & Travel Management",
  "theme": "Calendar Management · Legal Calendaring & Court Deadlines · Travel Management · Stress & Wellbeing",
  "objective": "Keep a calendar that actually holds under pressure, track court deadlines precisely, plan travel end-to-end, and manage stress in a high-pressure role.",
  "lessons": [
    {
      "h": "Calendar Management That Holds",
      "section": "Calendar Management",
      "singleSlide": true,
      "b": [
        "Centralize on one synced calendar system — a second unofficial calendar is where conflicts breed.",
        "Build in explicit buffers, automate scheduling with Calendly/Doodle, review weekly.",
        "Centralize your calendar using CRM software (Salesforce, HubSpot, Zoho) so scheduling data lives in one system, not scattered across tools.",
        "Executive Energy Management matters as much as time management — protect blocks for deep work, not just avoid double-booking."
      ],
      "howTo": [
        "Centralize on one synced calendar system as the single source of truth — a second, unofficial calendar is exactly where conflicts breed unnoticed.",
        "Build in explicit buffers between commitments rather than scheduling back-to-back by default, and use tools like Calendly or Doodle to automate routine scheduling without manual back-and-forth.",
        "If the organization uses CRM software (Salesforce, HubSpot, Zoho), centralize scheduling data there too, so it isn't scattered across disconnected tools.",
        "Protect blocks for deep, focused work with the same seriousness as meetings — executive energy management matters as much as raw time management.",
        "Review the calendar weekly for drift — a system that was clean on Monday can quietly accumulate conflicts by Friday if it isn't checked."
      ],
      "trainerCue": "This is a good moment for a live 'find the conflict' exercise on a real or sample calendar screen-shared to the room."
    },
    {
      "h": "Calendar Conflict & Prioritization Discipline",
      "section": "Calendar Management",
      "singleSlide": true,
      "svgDiagram": "<svg viewBox=\"0 0 620 200\" xmlns=\"http://www.w3.org/2000/svg\"><style>.dt{font:800 12px Arial,sans-serif;fill:#fff;}.ds{font:400 9.5px Arial,sans-serif;fill:rgba(255,255,255,.88);}.dk{font:700 11px Arial,sans-serif;fill:#262B45;}.dm{font:400 9.5px Arial,sans-serif;fill:#5B6178;}.dn{font:800 12px 'IBM Plex Mono',monospace;fill:#fff;}.dh{font:800 10px Arial,sans-serif;fill:#B5651F;letter-spacing:.06em;}</style><line x1=\"70\" y1=\"95\" x2=\"550\" y2=\"95\" stroke=\"#DCE0EA\" stroke-width=\"3\"/><path d=\"M70 95 L550 95\" stroke=\"#DB8437\" stroke-width=\"3\" class=\"svg-flow-arrow\" opacity=\".8\"/><g transform=\"translate(70.0,95)\"><circle r=\"17\" fill=\"#B54A3F\" class=\"svg-pulse-dot\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" class=\"dn\">1</text><text x=\"0\" y=\"-42\" text-anchor=\"middle\" class=\"dk\">Conflict Spotted</text><text x=\"0\" y=\"-30\" text-anchor=\"middle\" class=\"dm\">Never decide alone</text></g><g transform=\"translate(190.0,95)\"><circle r=\"17\" fill=\"#262B45\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" class=\"dn\">2</text><text x=\"0\" y=\"38\" text-anchor=\"middle\" class=\"dk\">Inform Executive</text><text x=\"0\" y=\"50\" text-anchor=\"middle\" class=\"dm\">Immediately</text></g><g transform=\"translate(310.0,95)\"><circle r=\"17\" fill=\"#262B45\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" class=\"dn\">3</text><text x=\"0\" y=\"-42\" text-anchor=\"middle\" class=\"dk\">Evaluate Importance</text><text x=\"0\" y=\"-30\" text-anchor=\"middle\" class=\"dm\">Not booking order</text></g><g transform=\"translate(430.0,95)\"><circle r=\"17\" fill=\"#262B45\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" class=\"dn\">4</text><text x=\"0\" y=\"38\" text-anchor=\"middle\" class=\"dk\">Present Trade-off</text><text x=\"0\" y=\"50\" text-anchor=\"middle\" class=\"dm\">+ your recommendation</text></g><g transform=\"translate(550.0,95)\"><circle r=\"17\" fill=\"#3F7D58\"/><text x=\"0\" y=\"5\" text-anchor=\"middle\" class=\"dn\">5</text><text x=\"0\" y=\"-42\" text-anchor=\"middle\" class=\"dk\">Document It</text><text x=\"0\" y=\"-30\" text-anchor=\"middle\" class=\"dm\">So it isn't re-litigated</text></g></svg>",
      "b": [
        "Inform the executive of every schedule conflict immediately — never rebook or decline something on their behalf without consulting first, since they may have context about a meeting's real importance that isn't visible on the calendar itself.",
        "Prioritize meetings by strategic importance, not by which came first — a board update outranks a routine check-in even if the check-in was scheduled weeks earlier.",
        "When two commitments genuinely conflict, present the executive with the actual trade-off and a recommendation, rather than either silently picking one or dumping the decision back on them with no framing."
      ],
      "howTo": [
        "The moment you spot a schedule conflict, inform the executive immediately — never rebook or decline on their behalf without checking first, since they may have context you don't.",
        "Evaluate each conflicting commitment by strategic importance, not by which was scheduled first — a board update outranks a routine check-in regardless of booking order.",
        "When a genuine conflict exists, present the actual trade-off with a clear recommendation attached — don't silently pick one side or just hand the decision back with no framing.",
        "Document the resolution once it's made, so there's a clear record of why one commitment was prioritized over the other.",
        "Confirm the outcome with both affected parties promptly — a resolved conflict that isn't communicated clearly just creates a second, quieter conflict."
      ],
      "trainerCue": "Give the room a real double-booking scenario and ask them to identify what 'strategic importance' actually means in that specific case — the abstract rule is easy to agree with, applying it to a real conflict is the actual skill."
    },
    {
      "h": "Calendar Blocking for Deep Work",
      "section": "Calendar Management",
      "b": [
        "A calendar that only tracks meetings is missing half the picture — blocking real time for focused, uninterrupted work is what actually protects it from being silently filled by other people's requests.",
        "A deep-work block that's visible but not actually protected (anyone can still book over it) isn't a real block — it needs to function as a genuine commitment, not a suggestion.",
        "This is where calendar discipline and prioritization intersect directly: the block is only worth protecting if it's actually reserved for the highest-priority work, not just whatever's easiest to schedule around."
      ],
      "howTo": [
        "Block real, uninterrupted time for focused work on the calendar itself — a calendar that only tracks meetings is missing half the picture.",
        "Mark deep-work blocks in a way that actually prevents booking over them, not just a visible-but-unprotected label anyone can override.",
        "Reserve these blocks specifically for the highest-priority work, not whatever's easiest to schedule around — the block is only worth protecting if it's protecting the right thing.",
        "If a deep-work block does get double-booked, treat that as a real conflict requiring the same resolution discipline as any other calendar conflict.",
        "Review deep-work block usage periodically — a block that's consistently skipped or overridden needs either better enforcement or honest reconsideration of whether it's actually feasible."
      ],
      "trainerCue": "Ask who has ever had a protected deep-work block get silently double-booked — and what that taught them about actually enforcing the block."
    },
    {
      "h": "Buffer Time Between Meetings",
      "section": "Calendar Management",
      "b": [
        "Back-to-back meetings with zero buffer guarantee that every meeting either starts late or ends abruptly — a 5-10 minute buffer between meetings isn't wasted time, it's what makes the rest of the calendar actually hold.",
        "Buffers also give room for the debrief and prep that real meetings require — walking into the next conversation still thinking about the last one is a common, avoidable failure.",
        "This connects directly to the mandatory debrief-buffer standing rule for this client specifically — a calendar that ignores this isn't just inconvenient, it violates a documented preference."
      ],
      "howTo": [
        "Build in a 5-10 minute buffer between meetings as a default, not an exception — treat it as real, necessary time, not wasted space.",
        "Use buffer time specifically for debrief and prep — walking into the next conversation still thinking about the last one is a common, avoidable failure this prevents.",
        "Check any calendar you're building against this client's documented debrief-buffer standing rule specifically — this isn't just good practice here, it's a stated requirement.",
        "When a day is genuinely too full for buffers, flag that explicitly rather than silently scheduling back-to-back and hoping it holds.",
        "Review calendars weekly for buffer erosion — back-to-back scheduling tends to creep back in gradually unless it's actively checked."
      ],
      "trainerCue": "Pull up a real (or realistic) back-to-back calendar day and ask the room where they'd insert buffers first, and what they'd have to move to make room."
    },
    {
      "h": "Recurring Meeting Hygiene",
      "section": "Calendar Management",
      "b": [
        "Standing meetings accumulate over time and rarely get removed even after their original purpose is gone — a quarterly audit of every recurring meeting (does this still need to exist, at this frequency, with these attendees) catches the ones that have quietly outlived their usefulness.",
        "A recurring meeting with no agenda is one of the most common calendar failures — if nobody can say in one sentence what this week's meeting is actually for, that's a sign to skip it or reformat it.",
        "As an EA, you're often positioned to notice this decay before anyone else does, simply because you see the full calendar pattern that any single attendee doesn't."
      ],
      "howTo": [
        "Audit every recurring meeting on a regular cadence (quarterly is reasonable) — ask whether it still needs to exist, at this frequency, with these attendees.",
        "Check whether each recurring meeting has a clear agenda — if nobody can state its purpose in one sentence, that's a sign to skip it or reformat it.",
        "Flag meetings that have quietly outlived their original purpose, even if no one else has raised it — as the EA, you often see the full calendar pattern others don't.",
        "Propose a specific change (cancel, shorten, reduce attendees) rather than just noting the meeting looks unnecessary — a vague flag rarely leads to action.",
        "Revisit any meeting you've changed after a reasonable interval to confirm the change actually stuck and didn't quietly revert."
      ],
      "trainerCue": "Ask the room to name one recurring meeting in their own life that they suspect could be cancelled or shortened but nobody has actually questioned it yet."
    },
    {
      "h": "Time Zone Management for Distributed Teams",
      "section": "Calendar Management",
      "singleSlide": true,
      "b": [
        "A meeting time that's convenient in one time zone can be genuinely unreasonable in another — always confirm the actual local time for every participant, not just your own.",
        "Daylight saving transitions are a common, quiet source of scheduling errors — a recurring meeting that was correct in March can silently shift an hour off in November if the calendar tool doesn't handle the transition the way you expect.",
        "When scheduling across many time zones, naming the reference time zone explicitly in the invite itself (not just relying on each calendar app to convert correctly) prevents the most common confusion."
      ],
      "howTo": [
        "Before confirming any cross-timezone meeting, check the actual local time for every participant, not just your own time zone.",
        "Name the reference time zone explicitly in the invite itself, rather than relying on each calendar app to convert it correctly for every recipient.",
        "Double-check recurring meetings around daylight saving transitions specifically — a meeting correct in March can silently shift an hour by November if the tool doesn't handle the transition the way you expect.",
        "For meetings spanning many time zones, propose a time that's genuinely reasonable for the most time-zone-disadvantaged participant, not just convenient for the majority.",
        "When a time zone mix-up does happen, correct it immediately and confirm the fix with every affected participant, not just the organizer."
      ],
      "trainerCue": "Ask the room to name a real scheduling mix-up caused by a time zone or daylight saving error — this is one of the most universally relatable calendar failures."
    },
    {
      "h": "Handling Last-Minute Calendar Changes",
      "section": "Calendar Management",
      "singleSlide": true,
      "b": [
        "A late cancellation or a sudden new request doesn't just affect the one meeting — it can cascade through the rest of the day if the ripple effects aren't checked immediately.",
        "The instinct to just accept a last-minute change without checking what it displaces is a common mistake — always check what else is affected before confirming.",
        "Communicating a last-minute change clearly and immediately to everyone affected (not just updating the calendar silently) is what prevents confusion and duplicate confusion later."
      ],
      "howTo": [
        "The moment a last-minute change lands, check what else on the calendar it displaces before confirming anything — never accept a change without checking its ripple effects first.",
        "Assess how far the disruption cascades — a late cancellation or sudden new request can affect more than just the one meeting it directly touches.",
        "Communicate the change immediately and clearly to everyone affected — updating the calendar silently isn't enough, since people plan around what they were told, not just what's on the screen.",
        "Reconfirm the rest of the day's schedule after the change, rather than assuming everything else still holds as originally planned.",
        "Log what caused the disruption if it's a recurring pattern — a source of frequent last-minute changes is worth addressing at the root, not just handling each instance as it comes."
      ],
      "trainerCue": "Roleplay a live scenario: a meeting 90 minutes from now just got moved up to right now — walk through what actually needs to happen in the next five minutes."
    },
    {
      "h": "Multi-Calendar Coordination",
      "section": "Calendar Management",
      "b": [
        "Many executives run more than one calendar in practice — professional, personal, board commitments — and the real risk is a conflict that's invisible because it only shows up when you look across all of them at once.",
        "A single master view (even if it's just you checking multiple calendars manually before confirming anything) is what actually prevents this — trusting just the primary calendar is how double-bookings slip through.",
        "This connects directly to the Boundaries & Authorization topic from Day 1 — keeping business and personal systems separate doesn't mean keeping them uncoordinated; someone still has to check both."
      ],
      "howTo": [
        "Identify every calendar an executive actually runs — professional, personal, board or advisory commitments — rather than assuming the primary calendar is the whole picture.",
        "Before confirming any new commitment, check it against all relevant calendars, not just the one you're currently looking at.",
        "Build a single master view, even if that just means manually cross-checking multiple calendars before finalizing anything — trusting only the primary calendar is exactly how conflicts slip through.",
        "Keep business and personal calendar systems appropriately separate for privacy and access reasons, while still ensuring someone (you) is actively coordinating across both.",
        "Flag any cross-calendar conflict the moment it's found, using the same conflict-resolution discipline covered earlier in this day — a conflict across two calendars is still a real conflict."
      ],
      "trainerCue": "Ask the room whether they've ever double-booked something because they were only checking one calendar when a second one also mattered — this is a very common real failure."
    },
    {
      "h": "Court Docketing Workflows",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "Court docketing is calendar management with legal consequences attached — a missed docketed deadline isn't just an inconvenience, it can be a malpractice exposure or a lost right for the client.",
          "A real docketing workflow has redundancy built in deliberately — no single missed reminder should be able to cause a missed filing, since the stakes are too high for a single point of failure."
        ],
        "howTo": [
          "Log every court-imposed deadline into the docketing system the moment it's known, from the primary source document (the court order, the filing confirmation) — never from a secondhand summary.",
          "Build in multiple reminder checkpoints before each deadline (e.g. 2 weeks out, 3 days out, day-of), not just a single alert — this is what creates the redundancy a single-point system lacks.",
          "Cross-check the docketing calendar against the case file periodically — a deadline that's been satisfied should be marked closed, not left open to create false alarms or, worse, to obscure a still-open one."
        ],
        "bestPractices": [
          "Pitfall: docketing a deadline from a summary or a colleague's mention instead of the actual court order or filing confirmation. Secondhand dates are exactly where transcription errors creep in.",
          "Never assume a deadline is 'probably fine' because it's always been handled before — court deadlines vary by jurisdiction and matter type, and assuming consistency is how a real one gets missed.",
          "This is one of the highest-stakes recurring responsibilities in a legal support role — treat every docketing entry with the level of care the stakes actually warrant."
        ],
        "discussionCase": "You're docketing a response deadline from a court order, and the date looks unusually short compared to similar matters you've handled before. What do you do before entering it into the system?"
      }
    },
    {
      "h": "Counting Legal Deadlines: Calendar Days vs. Court Days",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "A missed court deadline can lose a client's case, so how a deadline is counted matters as much as the date itself.",
          "In US federal court, periods stated in days count every calendar day, including weekends and holidays. You leave out the day of the event that starts the clock, count the last day, and if the last day is a weekend or legal holiday, the deadline moves to the next business day.",
          "Many state courts and some rules count 'court days' or 'business days' instead, which skip weekends and court holidays. The rule for each court is in its rules of procedure and local rules.",
          "The method of service can add time. For example, in federal court, three days are added when a paper is served by mail."
        ],
        "howTo": [
          "Find the trigger: the event that starts the clock (for example, the date a complaint was served) and write it down with its source.",
          "Find the rule that sets the period and which kind of days it uses, and check the court's local rules and the judge's standing orders.",
          "Count forward from the day after the trigger, then check whether the last day lands on a weekend or court holiday.",
          "Enter the deadline in the docketing calendar with the rule cited, plus reminders well ahead (for example 14, 7 and 2 days before).",
          "Have a second person, usually the attorney or docketing clerk, confirm every calculated court deadline."
        ],
        "bestPractices": [
          "Use the firm's docketing software to calculate deadlines, then double-check the result by hand. Software is only as good as the trigger date entered.",
          "Keep a list of court holidays for each court you work with. They're not always the same as federal holidays.",
          "Pitfall: counting the trigger day itself as day one. That makes every deadline a day early, or worse, a day late when you correct in the wrong direction.",
          "Pitfall: assuming every court counts the same way. The same '10 days' can land on different dates in two courts."
        ],
        "discussionCase": "A motion is served electronically on Friday, October 2, in federal court, and the response is due in 14 days. When is it due? What changes if the court counts court days instead, and who confirms the date?"
      },
      "trainerCue": "Hand out a blank October calendar and have everyone count the same 14-day deadline, first calendar days, then court days. Compare answers, then show why the second check exists."
    },
    {
      "h": "E-Filing & Service Basics",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "Filing gives a document to the court. Service delivers it to the other parties. They're separate steps, and each has its own rules and proof.",
          "Most courts now require electronic filing: federal courts use CM/ECF (with PACER for viewing records), and state courts use their own e-filing systems. Each has format rules, file-size limits and fees.",
          "The court's confirmation, such as the Notice of Electronic Filing in federal court, is the proof that a document was filed. Keep it with the filed copy.",
          "Many courts serve registered lawyers automatically through e-filing. Anyone not registered, including a party without a lawyer, must be served another way, and a certificate of service records how."
        ],
        "howTo": [
          "Before filing day, check the court's rules: PDF format (usually text-searchable), page limits, file size, exhibit labels, fees and the filing cut-off time.",
          "Prepare the documents as the attorney approved them, redact personal identifiers the rules require, and get the attorney's final sign-off.",
          "File well before the deadline. Electronic systems slow down on busy days, and a rejected filing needs time to fix.",
          "Save the filed copy and the court's confirmation in the matter folder, named as filed, and forward the confirmation to the attorney.",
          "Check who must be served outside the e-filing system, serve them as the rules require, and calendar every new deadline the filing triggers."
        ],
        "bestPractices": [
          "Keep the attorney's e-filing login secure. Filing under their account is filing with their signature, so do it only on their instruction.",
          "Check the court's docket after filing to confirm the document appears correctly.",
          "Pitfall: filing at 11:50 pm on the last day. If the system rejects the file, there's no time left.",
          "Pitfall: assuming e-filing served everyone. A party without a lawyer usually needs service another way."
        ],
        "discussionCase": "It's 4 pm on the deadline day. The court's e-filing system rejects Elias's brief because an exhibit is over the file-size limit. What do you do, in order, and who do you tell?"
      },
      "trainerCue": "If you can, show the public PACER or a state e-filing screen and walk through where the confirmation appears. Then ask the room what they'd check before clicking Submit."
    },
    {
      "h": "Statute-of-Limitations Rules",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "A statute of limitations sets the outer deadline by which a legal claim must be filed — miss it, and the claim can be barred entirely, regardless of its merits. This makes SOL tracking one of the least forgiving deadlines in legal support work.",
          "SOL rules vary by claim type and jurisdiction, which means a rule that's correct for one matter can be entirely wrong for another — this isn't a category where pattern-matching from memory is safe."
        ],
        "howTo": [
          "Calculate and log the SOL deadline for every matter at intake, from the actual triggering event date and the applicable jurisdiction's rule — not estimated, not assumed from a similar past matter.",
          "Flag SOL deadlines with extra lead time compared to ordinary court deadlines, given the severity of missing one — this is a case where more redundancy than usual is warranted.",
          "When a matter's facts are genuinely ambiguous about which SOL rule applies, escalate to the attorney rather than guessing — this determination has real legal weight and isn't an EA's call to make alone."
        ],
        "bestPractices": [
          "Pitfall: assuming the SOL for a new matter matches a similar past matter without confirming the actual applicable rule — jurisdiction and claim-type differences make this assumption genuinely dangerous.",
          "This is the single deadline category in this program where 'probably right' isn't good enough — verify against the actual rule, every time.",
          "Never let an SOL deadline exist only in one place or one person's memory — this belongs in the same redundant, cross-checked system as court docketing."
        ],
        "discussionCase": "A new matter comes in and you're not entirely certain which state's statute of limitations rule applies, since the parties are in different states. What do you do before calculating a deadline?"
      }
    },
    {
      "h": "Deposition Scheduling",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "Deposition scheduling involves coordinating far more parties than an ordinary meeting — attorneys from multiple sides, the witness, a court reporter, sometimes an interpreter — each with their own constraints.",
          "This connects directly to the multi-calendar coordination principles covered earlier in this day, applied to a higher-stakes, harder-to-reschedule event."
        ],
        "howTo": [
          "Confirm availability with every required party before locking in a date — a deposition scheduled around only the attorney's calendar often has to be rescheduled once the other constraints surface.",
          "Book the court reporter and any required interpreter as early as the date is confirmed — these are frequently the tightest-constrained resources and the easiest to lose to another booking.",
          "Send formal deposition notices promptly once the date is confirmed, and track confirmations from all sides rather than assuming silence means agreement."
        ],
        "bestPractices": [
          "Pitfall: locking in a date based on the attorney's availability alone, only to discover the witness or opposing counsel has a conflict — this creates exactly the rescheduling friction this topic exists to prevent.",
          "Depositions are expensive to reschedule (in time, cost, and sometimes strategic position) — the upfront coordination effort is worth it precisely because the downside of getting it wrong is high."
        ],
        "discussionCase": "You've confirmed a deposition date with the attorney and the witness, but opposing counsel hasn't responded to the proposed date after several days. Do you proceed with formal notice, or wait longer for confirmation? What would you actually do?"
      }
    },
    {
      "h": "Exhibits, Binders & Bates Numbering",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "An exhibit is a document or object presented as evidence, such as an email, a contract or a photo. Every exhibit has a label (for example Exhibit 12, or Exhibit C) so everyone refers to the same thing.",
          "Bates numbering stamps a unique, sequential number on every page of documents produced in discovery, with a prefix (for example THORNE000001). It makes any page findable and proves exactly what was produced.",
          "Binders put the exhibits in order for a hearing, deposition or trial, with a tabbed index. There are usually several sets: for the judge, the witness, opposing counsel and your own team."
        ],
        "howTo": [
          "Follow the court's and judge's rules for exhibit labels. Some courts use numbers for one side and letters for the other.",
          "Keep a master exhibit list: exhibit number, description, date, Bates range, and whether it's been shown to the other side or admitted.",
          "Apply Bates numbers with the firm's PDF or review software, never by hand, and never renumber a set that's already been produced.",
          "Build binders from the master list: an index at the front, one tab per exhibit, and the same order in every set.",
          "Check each set page by page against the index before it leaves the office, and keep a clean digital copy of every set."
        ],
        "bestPractices": [
          "Start binders early. Late additions are normal, so leave room by planning the tabs before the exhibit list is final.",
          "Use the exact label and Bates range when you refer to a document in emails, so there's never any doubt.",
          "Pitfall: a missing page in the judge's binder. Always check every set, not just your own.",
          "Pitfall: re-stamping Bates numbers on a corrected set. Produce a new range instead, so the record stays clear."
        ],
        "discussionCase": "Two days before a hearing, Elias adds three exhibits between Exhibits 7 and 8. Four binder sets are already printed. How do you handle the numbering and the binders, and what do you tell opposing counsel?"
      },
      "trainerCue": "Bring a real binder with tabs, or show a PDF bundle. Ask the room to find Exhibit 5, page 3, by Bates number, then by tab, and time both."
    },
    {
      "h": "War Room Trial Support",
      "section": "Legal Calendaring",
      "fourPart": {
        "corePrinciples": [
          "Trial periods compress an attorney's schedule and support needs dramatically — this is one of the highest-intensity, highest-stakes windows an EA or Legal EA will support, and it demands a different operating mode than routine work.",
          "'War room' support means being genuinely on-call and responsive during trial hours, not just available in the ordinary sense — the tempo and stakes are different from a normal workday."
        ],
        "howTo": [
          "Confirm the attorney's actual support needs for the trial window in advance — document runs, real-time research requests, exhibit coordination — rather than improvising once trial starts.",
          "Keep every trial-relevant document, contact, and logistical detail (court location, parking, courtroom technology) organized and instantly retrievable — there's no time during trial to search for something that should already be at hand.",
          "Build a communication protocol for the trial window specifically (how fast you're expected to respond, what channel to use) since normal response-time expectations don't apply."
        ],
        "bestPractices": [
          "Pitfall: treating trial-period support like a slightly busier version of normal work. The tempo, stakes, and required responsiveness are categorically different, and preparation needs to reflect that.",
          "This is also where the calendar and travel logistics skills in this day compound — trial support often includes travel logistics and complex scheduling on top of the document and research support itself."
        ],
        "discussionCase": "Trial starts in three days and you haven't yet confirmed the attorney's specific support expectations for that window. What would you want to nail down before trial starts, and how would you raise it now given the short timeline?"
      }
    },
    {
      "h": "Executive Travel Logistics — Domestic & International Itineraries",
      "section": "Travel Management",
      "fourPart": {
        "corePrinciples": [
          "Domestic and international executive travel share the same planning discipline covered elsewhere in this day, but international travel adds real complexity — visas, customs, time zones, and jurisdictional differences that domestic travel simply doesn't have.",
          "A complete itinerary is more than flights and hotels — it accounts for every leg of the journey, including the gaps between them, since that's where most real travel failures actually happen."
        ],
        "howTo": [
          "Build the itinerary from the destination backward — confirm what the executive needs to be ready for on arrival, then work back through ground transport, hotel, and flights to make sure each leg actually supports the next.",
          "For international travel specifically, confirm visa and documentation requirements well ahead of departure — this connects directly to the visa and documentation content covered earlier in this day.",
          "Build real buffer time between connecting legs, especially international-to-domestic connections, which often require re-clearing security or customs."
        ],
        "bestPractices": [
          "Pitfall: treating an international itinerary like a domestic one with a longer flight. The documentation, time zone, and connection-buffer considerations are genuinely different categories of risk.",
          "Confirm every leg's confirmation numbers and details are in one consolidated itinerary document, not scattered across separate booking confirmations the executive has to piece together mid-trip."
        ],
        "discussionCase": "You're booking a trip with a tight connection between an international arrival and a domestic connecting flight. What would you actually want confirmed about that connection before booking it as-is?"
      }
    },
    {
      "h": "Visa & Documentation Requirements",
      "section": "Travel Management",
      "b": [
        "Different destinations have genuinely different visa and documentation requirements, and these can change — always verify current requirements for the specific trip, not what was true on a previous trip to a similar destination.",
        "Passport validity requirements are a common, avoidable failure point: many countries require six months of remaining validity beyond the travel dates, not just that the passport hasn't technically expired.",
        "Building in real lead time for visa processing (which can take weeks, not days, for some destinations) is what prevents a trip from being jeopardized by paperwork discovered too late."
      ],
      "howTo": [
        "Verify current visa and documentation requirements for the specific destination and trip, not what was true on a previous trip to a similar country.",
        "Check passport validity specifically against the destination's actual rule — many countries require six months of remaining validity beyond the travel dates, not just an unexpired passport.",
        "Build in real lead time for visa processing, which can take weeks for some destinations — start this well before the trip, not once other planning is already underway.",
        "Confirm any required supporting documents (business invitation letters, health declarations) early enough to resolve issues before departure.",
        "Keep a record of what documentation was required and confirmed for each trip, so the next similar trip starts from accurate information, not assumption."
      ],
      "trainerCue": "Ask if anyone has a real story of a trip nearly derailed by a passport or visa issue discovered too close to departure — this tends to be memorable and widely relatable."
    },
    {
      "h": "International Travel Considerations",
      "section": "Travel Management",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Health & Safety",
          "desc": "Required or recommended vaccinations, travel advisories, and local emergency contact numbers for the destination"
        },
        {
          "label": "Currency & Payment",
          "desc": "Whether cards are widely accepted, whether local currency is needed, and realistic exchange logistics"
        },
        {
          "label": "Cultural & Business Norms",
          "desc": "Meeting etiquette, dress expectations, and communication norms that differ from the home market"
        }
      ],
      "b": [
        "International travel carries a wider set of real variables than domestic travel, and treating it with the same planning depth as a routine trip is a common, avoidable mistake.",
        "Checking current government travel advisories for the specific destination before finalizing a trip is a real diligence step, not an optional extra — advisories can change close to a travel date."
      ],
      "howTo": [
        "Check health and safety requirements for the destination — required or recommended vaccinations, current travel advisories, and local emergency contact numbers.",
        "Confirm currency and payment logistics ahead of time — whether cards are widely accepted, whether local currency is needed, and realistic exchange options.",
        "Research cultural and business norms specific to the destination — meeting etiquette, dress expectations, and communication norms that differ from the home market.",
        "Check current government travel advisories close to the actual travel date, not just when the trip was first planned — advisories can change.",
        "Treat international trips with meaningfully more planning depth than domestic ones — the same light-touch approach that works for a routine domestic trip is a real risk here."
      ],
      "trainerCue": "If anyone in the room has done real international travel coordination, ask them to name the one thing that surprised them most the first time — the real answer usually isn't obvious in advance."
    },
    {
      "h": "Managing Multi-City, Multi-Leg Itineraries",
      "section": "Travel Management",
      "singleSlide": true,
      "b": [
        "A trip with several connected legs has more failure points than a simple round-trip — a delay on the first leg can cascade through every subsequent connection, and the plan needs enough real buffer to absorb that.",
        "Confirming that ground transportation and hotel check-in times actually align with arrival times at each leg (not just that flights are booked) is what prevents a technically-correct itinerary from falling apart in practice.",
        "A single-page summary of the entire itinerary — not scattered confirmation emails — is what actually makes a complex, multi-leg trip manageable in the moment."
      ],
      "howTo": [
        "Map every leg of a multi-city trip together, not one leg at a time — a delay on the first leg can cascade through every subsequent connection.",
        "Identify the tightest connection in the itinerary specifically, and build extra buffer there, since that's the point most likely to actually cause a problem.",
        "Confirm ground transportation and hotel check-in times genuinely align with each leg's actual arrival time, not just that flights are technically booked.",
        "Consolidate the entire itinerary into a single-page summary, rather than leaving it as scattered confirmation emails the traveler has to piece together mid-trip.",
        "Review the full itinerary once more shortly before departure, checking specifically for any leg whose timing has shifted since it was first booked."
      ],
      "trainerCue": "Walk through a real or realistic 3-leg itinerary live and ask the room to spot where the tightest connection is — that's the point most likely to actually cause a problem."
    },
    {
      "h": "Ground Transportation Coordination",
      "section": "Travel Management",
      "b": [
        "Ground transportation is the most commonly under-planned part of a trip — flights and hotels get real attention, while 'we'll figure out a car' is treated as an afterthought that then becomes a real problem on arrival.",
        "Confirming a car service or rental with a specific pickup time, location, and contact detail — not a vague 'sometime after landing' — is what prevents the exact kind of gap that ruins an otherwise well-planned trip.",
        "This connects directly to the car-seat and family-specific requirements noted in the Client Profile — ground transportation planning has to account for who's actually traveling, not just the executive alone."
      ],
      "howTo": [
        "Treat ground transportation with the same planning attention as flights and hotels — don't leave it as a \"we'll figure it out\" afterthought.",
        "Confirm a specific pickup time, location, and contact detail for any car service or rental — not a vague \"sometime after landing.\"",
        "Check ground transport requirements against the Client Profile's family-specific needs (car seats, accessibility) when applicable, not just the executive traveling alone.",
        "Build in a backup ground transport option for high-stakes trips, the same way you would for flights.",
        "Confirm the booking again shortly before the actual travel date — a ground transport reservation made weeks out is worth double-checking closer to departure."
      ],
      "trainerCue": "Ask the room whether they've ever landed somewhere with flights and hotel confirmed but ground transportation genuinely uncertain — this is a very common, very avoidable gap."
    },
    {
      "h": "Loyalty Programs & Travel Preferences",
      "section": "Travel Management",
      "b": [
        "Tracking an executive's loyalty program memberships (airline, hotel) and always applying them isn't a minor courtesy — it's real, recurring value in upgrades, priority service, and status that compounds over many trips.",
        "This connects directly to the stated seat, routing, and hotel preferences from the Client Profile — loyalty program numbers should be applied consistently alongside those preferences every single time, not just when remembered.",
        "A missed loyalty number on a booking is a small, completely avoidable error that a well-run travel process should never actually produce."
      ],
      "howTo": [
        "Track every loyalty program membership the executive holds (airline, hotel) in the same tracker or dossier used for other standing preferences.",
        "Apply the relevant loyalty numbers to every booking automatically, as a standard step in the booking process, not something remembered only when convenient.",
        "Cross-check loyalty application against the stated seat, routing, and hotel preferences from the Client Profile — apply both together every time.",
        "Build this check into a travel checklist rather than relying on memory under time pressure, especially for last-minute bookings.",
        "Periodically confirm loyalty program details are still current — status levels and program details can change and should be re-verified occasionally."
      ],
      "trainerCue": "Ask the room to name a travel preference (loyalty program or otherwise) that's easy to forget under time pressure — the honest answer usually reveals a real gap worth building a checklist around."
    },
    {
      "h": "Travel Risk Contingency Planning",
      "section": "Travel Management",
      "singleSlide": true,
      "b": [
        "A real travel plan accounts for what happens when something goes wrong — a cancelled flight, a missed connection, a sudden weather event — not just the ideal-case itinerary.",
        "Knowing the backup options in advance (the next viable flight, an alternate routing, a local contact at the destination) turns a disruption into a quick pivot instead of a crisis handled from scratch under pressure.",
        "A real contingency plan exists before it's needed, not improvised in the moment — the same principle you'll apply to backup vendors on Day 5."
      ],
      "howTo": [
        "Before finalizing any trip, identify the realistic disruption scenarios for that specific itinerary — a cancelled flight, a missed connection, severe weather at a key leg.",
        "Identify the actual backup options in advance for each scenario — the next viable flight, an alternate routing, a local contact at the destination.",
        "Document these contingencies alongside the itinerary itself, not as a separate afterthought that's hard to find under pressure.",
        "When a disruption actually happens, execute the pre-identified backup immediately rather than starting to research options from scratch.",
        "Have the contingency plan ready before it's needed, not improvised in the moment (you'll use the same principle for backup vendors on Day 5)."
      ],
      "trainerCue": "Ask for a real story of a travel disruption that was handled well because a backup plan already existed — versus one that turned into a scramble because it didn't."
    },
    {
      "h": "Emergency Flight Contingencies",
      "section": "Travel Management",
      "fourPart": {
        "corePrinciples": [
          "A flight disruption during a high-stakes trip (a trial, a closing, a critical meeting) isn't just an inconvenience — it's a real risk to whatever that trip exists to support, which is why this deserves its own contingency planning, not just reactive troubleshooting.",
          "The best contingency response is prepared in advance, not improvised in the moment — this connects directly to the 'what if' planning principle covered elsewhere in this program."
        ],
        "howTo": [
          "For any high-stakes trip, identify the actual hard deadline the travel needs to hit (a court appearance time, a closing time) before booking — this is the fixed point any contingency plan gets built around.",
          "Know the realistic backup options in advance for critical trips — a later flight, a different airport, ground transportation for the final leg — rather than starting that research only after a disruption hits.",
          "The moment a disruption is confirmed, communicate the situation and the plan to the executive in one clear message, not a stream of updates as you work the problem — this mirrors the travel disruption management principles covered elsewhere in this program."
        ],
        "bestPractices": [
          "Pitfall: waiting to think about contingencies until a disruption actually happens. For genuinely high-stakes travel, the contingency plan should exist before departure, not get built under pressure.",
          "Never let the executive discover a flight problem from an app notification before you've already reached out with a plan — this is exactly the 'no surprises' discipline covered elsewhere in this program."
        ],
        "discussionCase": "An executive's flight to a trial appearance gets cancelled with the next available flight landing after the hearing's scheduled start. What would you actually do, in what order, to solve this?"
      }
    },
    {
      "h": "Expense Tracking While Traveling",
      "section": "Travel Management",
      "singleSlide": true,
      "b": [
        "Receipts get lost in real time far more easily while traveling than in a normal office routine — capturing them immediately (a photo, a folder, anything) beats trying to reconstruct a trip's expenses afterward from memory.",
        "Categorizing expenses as they happen (which client, which matter, which cost center) is much faster than doing it all at once after return, when the context has already faded.",
        "Travel expense tracking is the same reconciliation skill as everyday expense entry, applied under less controlled conditions — Day 7 covers the full SOA reconciliation process."
      ],
      "howTo": [
        "Capture every receipt immediately when it's received — a photo, a dedicated folder, anything — rather than planning to collect them all at the end of the trip.",
        "Categorize each expense as it happens (which client, which matter, which cost center) while the context is still fresh, not in a batch afterward.",
        "Reconcile travel expenses with the same discipline as regular expense tracking — the same skill under less controlled conditions (Day 7 covers the full SOA process).",
        "Set aside a few minutes at the end of each travel day specifically to confirm nothing from that day was missed, rather than waiting until return.",
        "Submit and reconcile travel expenses within a defined window after return — don't let them accumulate indefinitely once the trip is over."
      ],
      "trainerCue": "Ask the room how they currently handle receipts while traveling — most will admit to at least once losing or forgetting one, which is exactly the failure this discipline prevents."
    },
    {
      "h": "Building a Real Travel Checklist",
      "section": "Travel Management",
      "singleSlide": true,
      "b": [
        "A travel checklist that exists only in memory isn't a real checklist — writing it down once and reusing it for every trip is what actually prevents the same detail from being forgotten differently each time.",
        "A good checklist covers documentation, health/safety prep, packing considerations specific to the destination, loyalty numbers, and a contingency contact — not just 'book the flight and hotel.'",
        "A travel checklist is a durable, written reference scoped to trip preparation — the same discipline you'll use to build the Home Binder on Day 5."
      ],
      "howTo": [
        "Write the checklist down once, in a reusable form, rather than reconstructing it from memory for every trip.",
        "Cover documentation requirements (passport, visa) as a distinct section, separate from booking logistics.",
        "Include health and safety prep specific to the destination, not just a generic packing list.",
        "Add a loyalty-numbers-applied confirmation step and a contingency contact for the trip, so neither gets missed under time pressure.",
        "Treat this checklist as a durable, written reference — build it once, reuse and refine it every trip after (the Home Binder on Day 5 works the same way)."
      ],
      "trainerCue": "Ask who currently has an actual written travel checklist versus who rebuilds it from memory every time — building one live as a group is a strong close to this topic."
    },
    {
      "h": "Post-Trip Debrief & Follow-Up",
      "section": "Travel Management",
      "singleSlide": true,
      "b": [
        "A trip isn't complete when the traveler gets home — expense reconciliation, thank-you follow-ups, and capturing what went wrong (so it doesn't repeat) are real, often-skipped final steps.",
        "A quick post-trip note on what worked and what didn't (a hotel that fell short, a connection that was too tight) is what makes the next trip's planning genuinely better instead of repeating the same mistakes.",
        "A trip debrief is continuous improvement at a small scale — the same habit you'll apply to the seasonal-coordination playbook on Day 6."
      ],
      "howTo": [
        "Reconcile travel expenses promptly after return, rather than letting receipts and costs accumulate unaddressed.",
        "Send any thank-you or follow-up communications the trip generated while it's still timely, not weeks later.",
        "Write a brief note on what worked and what didn't (a hotel that fell short, a connection that was too tight) while the details are still fresh.",
        "Feed that note back into the standing travel preferences or checklist, so the next trip's planning is genuinely improved, not a repeat of the same issue.",
        "Treat this as a continuous-improvement habit applied at the scale of a single trip (Day 6 applies the same habit to the seasonal-coordination playbook)."
      ],
      "trainerCue": "Ask the room whether they currently do any kind of post-trip debrief, even informally — most don't, which is exactly the gap this topic is meant to close."
    },
    {
      "h": "Recognizing Stress & Burnout in High-Pressure Roles",
      "section": "Stress & Wellbeing",
      "fourPart": {
        "corePrinciples": [
          "Stress is the body's normal response to pressure; short bursts can sharpen focus. Burnout is different — the World Health Organization describes it as an occupational phenomenon from chronic, unmanaged workplace stress, marked by exhaustion, cynicism or detachment, and reduced effectiveness.",
          "EA/PA roles carry specific stressors: constant interruptions, being 'always on' for an executive, carrying other people's deadlines, and handling confidential or emotionally heavy matters.",
          "Early signs are easier to fix than late ones: irritability, dreading the inbox, sleep changes, more small mistakes, and withdrawing from colleagues."
        ],
        "howTo": [
          "Do a weekly two-minute check-in with yourself: energy (1–10), sleep, error rate, and whether anything is consistently dreaded.",
          "Name the specific stressor rather than 'work is stressful' — e.g., after-hours texts, unclear priorities, or back-to-back travel changes. Specific problems have specific fixes.",
          "Track patterns for two weeks (a line in your notes each day) before deciding what to change; patterns show what's chronic versus a one-off bad day.",
          "If signs persist for weeks or affect sleep, health, or relationships, talk to your manager and consider professional support such as an Employee Assistance Program (EAP) or a healthcare provider."
        ],
        "bestPractices": [
          "Pitfall: treating exhaustion as proof of dedication — sustained overload leads to errors, and in legal support errors can be costly.",
          "Don't wait for a crisis to raise workload concerns; small adjustments are easier to agree early.",
          "Watch for signs in colleagues too, and respond with a private, kind check-in rather than advice in front of others."
        ],
        "discussionCase": "You notice you've double-booked Elias twice this week, you're snapping at vendors, and you check email at 11 PM every night 'just in case.' What's happening, and what are your first three steps?"
      },
      "trainerCue": "Normalize the topic first — share (or invite) a real example of a high-pressure week — then ask the room which early warning sign they'd notice first in themselves."
    },
    {
      "h": "Stress Management Techniques That Work at a Desk",
      "section": "Stress & Wellbeing",
      "fourPart": {
        "corePrinciples": [
          "Effective stress tools are the ones you can use in two minutes between tasks — breathing, a short walk, a reset of your task list — not only long weekend routines.",
          "Controlled breathing (for example, a slow exhale longer than the inhale) can calm the body's stress response quickly, which is why it's used before high-stakes calls.",
          "Structure reduces stress: a clear plan for the day, batching similar tasks, and protected focus time cut the mental load of constantly re-deciding what to do next."
        ],
        "howTo": [
          "Before a tense call or meeting: three to five slow breaths (inhale about 4 counts, exhale about 6), feet on the floor, shoulders down.",
          "When overwhelmed: 'brain dump' every open item onto paper, then pick the single next action — clarity on one step lowers the sense of chaos.",
          "Build micro-breaks into the day: stand, stretch, or walk for 3–5 minutes every 60–90 minutes, and step away from the screen for lunch when possible.",
          "End the day with a shutdown ritual: review tomorrow's calendar, write the top three priorities, and close the inbox — this helps separate work from rest."
        ],
        "bestPractices": [
          "Pitfall: relying only on caffeine and willpower — they mask fatigue without reducing the load.",
          "Protect sleep as a work skill; tired assistants make more scheduling and detail errors.",
          "Keep a short 'calm kit' list of what works for you personally, so you don't have to think of it in the moment."
        ],
        "discussionCase": "Elias has just called in a hurry: a court date moved, three meetings must shift, and a family event overlaps. Walk through the first five minutes — what do you do to stay clear-headed before touching the calendar?"
      },
      "trainerCue": "Lead the room through one 60-second breathing reset together, then ask how they could fit it into a real workday."
    },
    {
      "h": "Setting Boundaries & Managing Executive Pressure",
      "section": "Stress & Wellbeing",
      "fourPart": {
        "corePrinciples": [
          "Boundaries are agreements about availability, response times, and scope — they protect the quality of your work, not just your time.",
          "Unclear expectations create most of the stress: if 'urgent' isn't defined, everything feels urgent. Agreeing definitions with the executive reduces constant alert.",
          "Pressure from an executive is often about their own stress; responding calmly with facts and options de-escalates better than matching their urgency."
        ],
        "howTo": [
          "Agree availability rules in writing: working hours, what counts as a true after-hours emergency, and the channel for it (e.g., a phone call, not email).",
          "When a new request collides with existing priorities, ask 'Which of these should move?' instead of silently absorbing both.",
          "Use a calm script under pressure: acknowledge ('I understand this is urgent'), state facts ('The filing is due at 3'), offer options ('I can move the vendor call or ask Maria to cover it')."
        ],
        "bestPractices": [
          "Pitfall: answering every late-night message instantly — it trains the expectation that you're always available.",
          "Never let a boundary become an excuse to miss a genuine legal deadline; build the emergency path into the agreement instead.",
          "Revisit the agreement when roles change, workload rises, or new family responsibilities appear on either side."
        ],
        "discussionCase": "Elias texts at 10:40 PM asking you to 'quickly' rebook tomorrow's 8 AM client meeting. Your agreed after-hours rule covers court and family emergencies only. What do you do tonight, and what do you say tomorrow?"
      },
      "trainerCue": "Have pairs role-play the 'which of these should move?' conversation — one plays a pressured executive, one plays the EA — then swap."
    },
    {
      "h": "Recovery, Workload Conversations & Support Resources",
      "section": "Stress & Wellbeing",
      "fourPart": {
        "corePrinciples": [
          "Recovery is part of performance: regular breaks, real time off, and sleep restore the focus that detail-heavy legal work depends on.",
          "Workload problems are business problems — raising them early with data (hours, volume, error risks) is professional, not a complaint.",
          "Support exists: many employers offer confidential Employee Assistance Programs (EAPs), and healthcare providers can help when stress affects health. In the US, the 988 Suicide & Crisis Lifeline is available for anyone in crisis."
        ],
        "howTo": [
          "Prepare a workload conversation: list recurring tasks, hours spent, what's slipping, and two or three concrete options (delegate, pause, add support, change deadlines).",
          "Plan real time off with a coverage handover — delegate access, an out-of-office message, and a one-page status note — so you can actually disconnect.",
          "Know where support is before you need it: your employer's EAP details, your manager or HR contact, and your own trusted people."
        ],
        "bestPractices": [
          "Pitfall: waiting until you're exhausted to raise workload — by then the conversation feels like a crisis instead of a plan.",
          "Keep personal health details private unless you choose to share them; you can ask for workload changes without disclosing a diagnosis.",
          "Support colleagues by covering for them properly during time off, so the whole team can recover."
        ],
        "discussionCase": "You've been working 55-hour weeks for two months and your error rate is rising. Draft the opening two sentences of a workload conversation with Elias, and list the options you'd bring."
      },
      "trainerCue": "Share where your organization's EAP or support information lives, then have the room draft the first two sentences of a workload conversation."
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 9,
      "q": "You are counting a 10-day response deadline from the day a motion was served. Which day is day 1?",
      "opts": [
        "The day the motion was served",
        "The day after the motion was served",
        "The first business day of the following week",
        "Whichever day the attorney prefers to use"
      ],
      "a": 1,
      "r": "The day of the event that starts the clock isn't counted, so day 1 is the next day. Then check the court's rules and whether the last day lands on a weekend or court holiday.",
      "addedIn": "time-management-day4"
    }
  ],
  "quiz": [
    {
      "q": "A high-level client wants an urgent meeting but the executive is fully booked. Most effective response?",
      "opts": [
        "Tell the client politely that the executive's calendar is full this week and offer to take a message",
        "Move a lower-priority internal meeting to make room, then let the executive know afterwards",
        "Ignore the email — the executive will see it eventually",
        "Consult the executive briefly and propose an alternate schedule that protects priorities"
      ],
      "a": 3,
      "r": "This balances responsiveness to the client with protecting the executive's actual priorities."
    },
    {
      "q": "What does 'calendar management that holds' mean in practice?",
      "opts": [
        "Booking every available hour, so no time is wasted and the executive's output is as high as possible",
        "A calendar that looks organized but changes constantly without warning",
        "Locking the calendar once it's set, so no one can move a meeting without the executive's personal approval",
        "A calendar structure resilient enough that changes don't cause cascading conflicts or missed commitments"
      ],
      "a": 3,
      "r": "A calendar that 'holds' can absorb reasonable change without falling apart into conflicts and missed commitments."
    },
    {
      "q": "Why should travel, calendar, and contact coordination be treated as one connected system rather than three separate tasks?",
      "opts": [
        "Because one person should own all three, so the executive only ever has one assistant to contact",
        "Because international trips need all three together, whereas domestic travel can be handled separately",
        "A change in one (like a flight delay) directly cascades into calendar conflicts and who needs to be contacted",
        "Because keeping them in one spreadsheet saves time when the executive asks for a weekly summary of all three"
      ],
      "a": 2,
      "r": "A travel disruption is really a calendar and contact-coordination problem in disguise — they're inseparable in practice."
    },
    {
      "q": "Why is it useful to time-block recurring commitments on a calendar rather than adding them ad hoc each time?",
      "opts": [
        "It shows everyone viewing the calendar that the executive is busy, so fewer people ask for time",
        "Because recurring commitments never change, so they only ever need to be set up once",
        "Time-blocking is required by most calendar software",
        "It prevents the same recurring conflict from resurfacing repeatedly and being rediscovered each time"
      ],
      "a": 3,
      "r": "Time-blocking recurring items proactively prevents the same scheduling conflict from being solved over and over."
    },
    {
      "q": "Why might an EA choose to time-block 'buffer' periods between back-to-back meetings?",
      "opts": [
        "Buffers absorb overruns and give processing time, preventing one delay from cascading through the whole day",
        "Buffers leave room to add extra meetings at short notice without moving anything else",
        "Buffers show visitors that the executive is in high demand, which makes each meeting feel more valuable to them",
        "Buffers are mainly for very senior executives, who need quiet time to review their messages"
      ],
      "a": 0,
      "r": "Buffer time is what keeps one meeting running long from wrecking the rest of the day's schedule."
    },
    {
      "q": "What's the best way to handle a scheduling conflict that's already been double-booked?",
      "opts": [
        "Ask both parties which of them is more flexible, and move whoever replies first so the conflict is cleared quickly",
        "Keep whichever meeting was booked first, and let the second party know it will need to be rescheduled",
        "Cancel both meetings and rebook them later, so neither party feels less important than the other",
        "Identify which meeting genuinely takes priority, then proactively reschedule the other with a clear, respectful explanation"
      ],
      "a": 3,
      "r": "Proactive resolution — not passive avoidance — is what a calendar owner is expected to do."
    },
    {
      "q": "Which is an early warning sign of burnout?",
      "opts": [
        "Working longer hours to stay on top of a busy week",
        "Answering emails late at night and early in the morning to keep up",
        "Needing a coffee to get going in the morning",
        "More small mistakes, dreading the inbox, and pulling away from colleagues"
      ],
      "a": 3,
      "r": "Early signs like rising errors, dread, and withdrawal are easier to address than late-stage exhaustion."
    },
    {
      "q": "Elias asks for a new urgent task while you're already at capacity. What's the best response?",
      "opts": [
        "Explain that you're at capacity and can't take it on",
        "Take it on and work late so nothing slips",
        "Ask which existing priority should move, with options",
        "Start it tomorrow morning, once today's list is done"
      ],
      "a": 2,
      "r": "'Which of these should move?' keeps priorities explicit and prevents silent overload."
    },
    {
      "q": "What should a workload conversation include?",
      "opts": [
        "Data (tasks, hours, what's slipping) plus concrete options",
        "A request for more pay to reflect the extra hours",
        "A list of the tasks you'd like to stop doing",
        "An honest description of how stressed you've been feeling"
      ],
      "a": 0,
      "r": "Facts and options turn a complaint into a business decision; health details stay private unless you choose to share."
    },
    {
      "q": "In federal court, a 14-day deadline is triggered on a Friday and the 14th day falls on a Sunday. When is the response due?",
      "opts": [
        "The Friday before, so the filing isn't left until the weekend",
        "On the Sunday itself, because every calendar day is counted",
        "The Monday after, unless that Monday is a legal holiday",
        "Fourteen court days later, skipping every weekend in the period"
      ],
      "a": 2,
      "r": "Federal rules count calendar days, but when the last day is a weekend or legal holiday the deadline moves to the next day that isn't. Court days apply only where a rule says so."
    },
    {
      "q": "What is the difference between filing a document and serving it?",
      "opts": [
        "Filing gives it to the court; serving delivers it formally to the other parties in the case",
        "Filing is done on paper at the courthouse; serving is the electronic version of the same step",
        "Filing is only for motions and briefs; serving applies to letters between the two sides' lawyers",
        "They mean the same thing, and courts use the two words interchangeably in their rules"
      ],
      "a": 0,
      "r": "Filing and service are separate steps with separate proof: the court's filing confirmation and a certificate of service. Either can be electronic or on paper depending on the court's rules."
    },
    {
      "q": "What is the main purpose of Bates numbering?",
      "opts": [
        "To show the court which documents the judge should read first at the hearing",
        "To give every produced page a unique number so it can be found and tracked",
        "To mark which pages of a document are privileged and must be kept private",
        "To count the total pages filed so the court can calculate the filing fee"
      ],
      "a": 1,
      "r": "Bates numbers identify each produced page uniquely and prove what was produced. They don't rank importance, mark privilege or set fees."
    },
    {
      "q": "The 'What If' approach to travel logistics means:",
      "opts": [
        "Having a backup option already secured before it's needed",
        "Asking the executive what they'd like to do if something goes wrong on the trip",
        "Booking the cheapest fare, so there's budget left over to rebook if needed",
        "Avoiding travel bookings until the last minute"
      ],
      "a": 0,
      "r": "E.g., if the 2:00 PM flight is canceled, the 4:00 PM should already be on hold."
    },
    {
      "q": "A standing weekly meeting has no agenda, and nobody can say what this week's session is for. What should you do?",
      "opts": [
        "Leave it running, since a recurring meeting shouldn't be questioned once it's set",
        "Raise it for a skip or a new format, and include it in the quarterly recurring-meeting audit",
        "Cancel the whole series yourself, without checking with the meeting's organizer",
        "Invite more people so that the time slot gets used for something worthwhile"
      ],
      "a": 1,
      "r": "A recurring meeting nobody can explain in one sentence is a sign to skip or reformat it, and a quarterly audit catches the ones that have outlived their purpose."
    },
    {
      "q": "You're scheduling a call for attendees in New York, London and Singapore. What prevents the most common confusion?",
      "opts": [
        "Rely on each attendee's calendar app to convert the time automatically",
        "Send the time in your own local time zone and let the others convert it",
        "Name the reference time zone in the invite and confirm each attendee's local time",
        "Pick the hour you'd use for an in-person meeting at the head office"
      ],
      "a": 2,
      "r": "Naming the reference time zone in the invite, and checking each person's actual local time, prevents the errors that automatic conversion and daylight saving changes cause."
    },
    {
      "q": "A partner asks to move today's 2 p.m. meeting to 11 a.m. What do you do before confirming?",
      "opts": [
        "Check what the 11 a.m. slot displaces and who's affected, then tell everyone involved",
        "Accept straight away, since the partner outranks the other attendees",
        "Update the calendar quietly, so attendees see the change when they next look",
        "Decline, because same-day changes to a meeting time shouldn't be allowed"
      ],
      "a": 0,
      "r": "A last-minute change can cascade through the day: check what it displaces first, then communicate it to everyone affected rather than updating the calendar silently."
    },
    {
      "q": "When should the statute-of-limitations deadline for a new matter be calculated and logged?",
      "opts": [
        "When the attorney first asks about the filing deadlines",
        "After the complaint has been drafted and reviewed",
        "Estimated from a similar matter the firm handled before",
        "At intake, from the triggering event date and the jurisdiction's rule"
      ],
      "a": 3,
      "r": "SOL rules vary by claim type and jurisdiction, and a missed SOL can bar the claim entirely, so it's calculated at intake from the real facts, never estimated."
    },
    {
      "q": "You've confirmed the date for a deposition. What should you book right away?",
      "opts": [
        "The largest conference room available in the building",
        "The court reporter and any interpreter the deposition needs",
        "Lunch for every attorney and witness who will attend",
        "A backup date that only fits the attorney's own calendar"
      ],
      "a": 1,
      "r": "Court reporters and interpreters are often the tightest-constrained resources, so they're booked as soon as the date is confirmed."
    },
    {
      "q": "Elias's passport expires four months after he returns from an overseas trip. Why is that a problem?",
      "opts": [
        "Passports have to be renewed every five years, whatever their expiry date",
        "Airlines won't sell international tickets on a passport issued abroad",
        "Many countries require six months of passport validity beyond the travel dates",
        "It isn't a problem, as long as the passport is valid on the departure day"
      ],
      "a": 2,
      "r": "Many destinations require six months of remaining validity beyond the trip, not just an unexpired passport, so this has to be caught well before travel."
    },
    {
      "q": "What makes a complex multi-city, multi-leg trip manageable while it's under way?",
      "opts": [
        "Forwarding each booking confirmation to the executive as it comes in",
        "Booking the tightest possible connections to save time between legs",
        "Leaving ground transport to be arranged once each flight has landed",
        "A one-page summary of the whole itinerary, with real buffer between connections"
      ],
      "a": 3,
      "r": "Delays cascade across legs, so the plan needs buffer, and a single-page summary beats scattered confirmation emails when something changes."
    },
    {
      "q": "What makes a court docketing workflow reliable?",
      "opts": [
        "Logging each deadline from the primary source, with several reminder checkpoints",
        "Setting a single reminder for the morning of each deadline",
        "Entering deadlines from the attorney's email summary of the order",
        "Keeping deadlines in a personal notebook as the only backup copy"
      ],
      "a": 0,
      "r": "Docketing needs redundancy: deadlines are logged from the court order or filing confirmation, with reminders at several points (for example 2 weeks, 3 days and the day of)."
    },
    {
      "q": "Which part of a trip is most often under-planned?",
      "opts": [
        "The flight booking itself",
        "The hotel reservation",
        "Ground transportation on arrival",
        "The airline seat selection"
      ],
      "a": 2,
      "r": "Flights and hotels get attention while 'we'll figure out a car' becomes a problem on arrival; confirm a specific pickup time, place and contact."
    }
  ],
  "discussionQuestion": "Think of a time a calendar change or a travel disruption hit at the worst possible moment. What would have let you recover faster?"
};

const DAY3_EXTRA_LEARNING = {};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[3] = { day: DAY3, extraLearning: DAY3_EXTRA_LEARNING };
