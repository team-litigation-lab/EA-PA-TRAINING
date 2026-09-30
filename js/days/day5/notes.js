/* Day 5 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
"5::Running a Household Like a Business": {
  "p1": {
    "on": "This slide says household management uses real business discipline: planning, organizing, budgeting and evaluation. The steps: be the main point of contact for family, staff and contractors, build simple systems for recurring categories (bills, staff schedules, maintenance), review operations periodically, and document standing decisions so the household runs consistently.",
    "say": "Run the household like a small business, with you as the single point of contact.",
    "ask": "What household logistics have you managed, even for your own family?"
  },
  "p2": {
    "on": "This slide describes the household operating system: one master calendar for family, staff, school and maintenance, a budget with categories reconciled monthly like a cost center, and a vendor and staff directory with contracts, rates, emergency contacts and backups for every critical service.",
    "say": "Calendar, budget, directory: the household's operating system.",
    "wrap": "One point of contact, simple systems and regular reviews.",
    "scenario": "Sarah Thorne asks you to take over running the household next week. What are the first three things you set up, and who do you tell that you're now the point of contact?"
  },
  "s1": {
    "on": "This section's idea: household management uses real business discipline, meaning planning, organizing, budgeting and evaluation.",
    "say": "Run the home like a business."
  },
  "s2": {
    "on": "These steps apply it: be the main point of contact, build systems for recurring categories, review operations periodically, and document standing decisions.",
    "say": "Systems, not reactions.",
    "ask": "What recurring household task would you systematize first?"
  },
  "s3": {
    "on": "This section's rule: the assistant is the main point of contact for family, staff and contractors.",
    "say": "One point of contact: you."
  },
  "s4": {
    "on": "This section lists the tools: a master calendar, a categorized household budget reconciled monthly, and a vendor and staff directory with backups.",
    "say": "Calendar, budget, directory."
  }
},
"5::Recurring Household Admin: Utilities, Purchasing & Subscriptions": {
  "p1": {
    "on": "This slide covers three recurring categories, with a diagram: put every utility payment on a calendar with real due dates, keep a simple purchasing log so nothing is duplicated, and log every subscription's renewal date the moment it starts, then decide keep or cancel before each renewal.",
    "say": "Decide before the renewal, or auto-renew decides for you.",
    "ask": "Who has had a subscription auto-renew without noticing?"
  },
  "p2": {
    "on": "This slide names the shared failure: all three are recurring, low-drama tasks that are easy to let slide because nothing dramatic happens on any single day. The risk is in the accumulation.",
    "say": "Nothing breaks on any one day. That's the trap.",
    "wrap": "Calendar the payments, log the purchases and review renewals before they hit.",
    "scenario": "You find the Thorne household pays for three streaming services, two meal-kit subscriptions and a gym nobody uses. Walk through how you'd review them and what you'd bring to Sarah."
  },
  "s1": {
    "on": "This section covers three categories: utilities that can't lapse, purchasing for business and personal needs, and the full subscription lifecycle.",
    "say": "Utilities, purchasing, subscriptions."
  },
  "s2": {
    "on": "These steps track them: utilities on a calendar with due dates, a purchase log, renewal dates logged at sign-up, a keep-or-cancel decision before each renewal, and equal attention to all three.",
    "say": "Decide before auto-renew decides for you.",
    "ask": "Which subscription renewed on you by surprise?"
  },
  "s3": {
    "on": "This section names the shared failure: low-drama recurring tasks slide until a utility is shut off or a subscription renews at triple the rate.",
    "say": "The risk is in the accumulation."
  }
},
"5::Household Staff Management": {
  "p1": {
    "on": "This slide says managing household staff (nanny, housekeeper, driver, estate manager) is coordination, not traditional supervision. Written expectations prevent most friction, and schedules must respect staff boundaries. The steps: keep a written role description per position, a shared staff calendar, a regular brief check-in, and emergency contact information on file.",
    "say": "Write down the expectations from day one. Verbal ones drift.",
    "ask": "Why might staff not raise a scheduling conflict themselves?"
  },
  "p2": {
    "on": "This slide warns against staff schedules living in one person's memory and against assuming staff will raise conflicts; many won't. It says to treat staff with professionalism and discretion, because this is someone's livelihood, and to build real handoff time when turnover happens.",
    "say": "Check in proactively. Many staff won't raise a problem themselves.",
    "wrap": "Written roles, a shared calendar, regular check-ins and real handoffs.",
    "scenario": "The Thorne housekeeper is going on six weeks of medical leave with two days' notice. What do you document and hand off so the temporary replacement doesn't need to ask Sarah a dozen basic questions in week one?"
  },
  "s1": {
    "on": "This section says staff management is coordination, not supervision, that written expectations prevent most friction, and that schedules must respect staff boundaries.",
    "say": "Coordinate, don't micromanage."
  },
  "s2": {
    "on": "These steps set it up: a written role description per position, a shared staff calendar, regular check-ins, and emergency and medical info on file.",
    "say": "Write the role down."
  },
  "s3": {
    "on": "This section warns that schedules can't live in one person's memory and that staff may not raise conflicts, and asks for professionalism and real handoffs at turnover.",
    "say": "Check in; many won't speak up.",
    "ask": "How would you find out if a nanny's schedule isn't working?"
  }
},
"5::Home Maintenance & Repair Coordination": {
  "p1": {
    "on": "This slide separates scheduled maintenance (HVAC servicing, gutters) from reactive repairs, and says a maintenance calendar stops cheap fixes from becoming expensive ones. The steps: build a recurring calendar from service intervals, keep a vetted contractor list by specialty, get scope and cost in writing before work starts, and keep warranties and manuals in the Home Binder.",
    "say": "Most big repairs started as a small one nobody scheduled.",
    "ask": "Who's your go-to plumber, and how did you find them?"
  },
  "p2": {
    "on": "This slide warns that a dripping faucet and a gas smell aren't the same priority, and that you should know your repair spending threshold in advance. It says to keep photos and records of major repairs, and that a maintenance calendar nobody checks is worse than none.",
    "say": "Know your dollar limit before the repair call, not during it.",
    "wrap": "Schedule maintenance, triage repairs, get it in writing and keep records.",
    "scenario": "The HVAC annual service is due, but the household has declined the reminder for three months because \"it's working fine.\" What's the real risk, and how do you raise it again without it feeling like nagging?"
  },
  "s1": {
    "on": "This section separates routine scheduled maintenance from reactive repairs, says a calendar keeps small fixes small, and applies procurement discipline to contractors.",
    "say": "Routine and reactive need different handling."
  },
  "s2": {
    "on": "These steps are the system: a maintenance calendar by service interval, a vetted contractor list, written scope and cost before work, and warranties in the Home Binder.",
    "say": "Scope and cost in writing, every time."
  },
  "s3": {
    "on": "This section warns against treating all repairs as equally urgent or spending past your threshold without sign-off, asks for repair records, and warns that an unchecked calendar is worse than none.",
    "say": "A dripping faucet isn't a gas smell.",
    "ask": "What's your approval threshold for repairs?"
  }
},
"5::Procurement and Vendor/Supplier Management": {
  "p1": {
    "on": "This slide gives four procurement steps: Source Multiple Options (the first vendor found isn't necessarily right), Compare Terms, Not Just Price (reliability, response time and contract terms matter), Formalize the Agreement (a real contract, not a verbal deal), and Manage the Relationship Ongoing (track performance and renewals, keep a backup).",
    "say": "Compare, formalize, then keep managing.",
    "ask": "When has the cheapest vendor cost you more?"
  },
  "p2": {
    "on": "This slide calls procurement the proactive counterpart to handling vendor failures. The procurement cycle: define the need and budget, get at least three quotes for anything non-trivial, check references, insurance and licensing (especially for anyone working inside the home), record terms in writing, and review performance before renewing.",
    "say": "Anyone working inside the home gets references, insurance and licensing checked.",
    "wrap": "Good procurement reduces how often vendors fail you.",
    "scenario": "The Thornes need a new landscaping company. Walk through the procurement cycle: what you'd ask for, what you'd check, and what goes into the written agreement."
  },
  "s1": {
    "on": "This section says procurement is sequential: follow the steps in order.",
    "say": "Four steps, in order."
  },
  "s2": {
    "on": "These steps are the sequence: Source multiple options, Compare terms not just price, Formalize the agreement, and Manage the relationship with a backup ready.",
    "say": "Source, compare, formalize, manage."
  },
  "s3": {
    "on": "This section calls procurement the proactive counterpart to vendor-failure handling; good procurement means fewer failures.",
    "say": "Prevention reduces failures."
  },
  "s4": {
    "on": "This section adds detail: define need and budget, get three quotes, check references, insurance and licensing, and record terms and review annually.",
    "say": "Three quotes for anything non-trivial."
  }
},
"5::Vendor Relationships Beyond the Signature": {
  "p1": {
    "on": "This slide says a real comparison, not whoever is easiest to reach, is what makes vendor selection defensible. The steps: compare several options, review terms as well as price, track whether the vendor performs as agreed after signing, track renewal dates, and identify a backup before you need one.",
    "say": "Paid invoices don't mean the vendor is performing.",
    "ask": "What does good vendor management look like after the contract is signed?"
  },
  "p2": {
    "on": "This slide says supplier management doesn't end at signing: the EA tracks performance, renewal dates and backups. It connects to Recurring Household Admin, because vendor renewals are the same kind of recurring fact to track.",
    "say": "Signing is the start of the relationship, not the end.",
    "wrap": "Track performance, renewals and backups for every vendor.",
    "scenario": "The Thornes' pool service has been paid on time every month, but the pool has turned green twice this summer. What should ongoing vendor management have caught, and what do you do now?"
  },
  "s1": {
    "on": "This section says real comparison, not whoever's easiest to reach, is what makes procurement deliberate.",
    "say": "Deliberate, not convenient."
  },
  "s2": {
    "on": "These steps continue after signing: compare options, review terms, track performance, track renewals, and keep a backup.",
    "say": "Paid invoices don't mean good performance."
  },
  "s3": {
    "on": "This section says supplier management continues after signing and that renewal dates belong in a tracked reference.",
    "say": "Track it; don't remember it."
  }
},
"5::Negotiating Vendor Contracts & Terms": {
  "p1": {
    "on": "This slide says negotiation is about terms that protect you if something goes wrong, not just the lowest price. Real alternatives give you leverage, and most terms are more negotiable than people think. The steps: rank your priorities, ask for better terms beyond price (cancellation notice, service guarantees), get everything in writing, and revisit terms at renewal.",
    "say": "Line up an alternative before you negotiate.",
    "ask": "Besides price, what would you ask a vendor for?"
  },
  "p2": {
    "on": "This slide warns against negotiating only on price while ignoring cancellation and dispute terms, and against signing under vendor-created time pressure (\"this price is only good today\"). It says to record what was negotiated and why, and not to damage a working relationship to win on paper.",
    "say": "\"Only good today\" is a tactic, not a deadline.",
    "wrap": "Know your priorities, negotiate terms, get it in writing and revisit at renewal.",
    "scenario": "A vendor the household has used reliably for two years sends a renewal with a 15% increase and no explanation. You have one untested alternative. How do you approach the conversation, and what would justify staying versus switching?"
  },
  "s1": {
    "on": "This section says negotiation is about protective terms, not just the lowest price; alternatives give leverage, and most terms can be negotiated.",
    "say": "The default contract is a starting point."
  },
  "s2": {
    "on": "These steps negotiate: know your priorities in order, ask for one term beyond price, get everything in writing, and renegotiate at renewal.",
    "say": "Ask for one thing beyond price.",
    "ask": "What term would you ask for besides price?"
  },
  "s3": {
    "on": "This section warns against ignoring cancellation terms and 'today only' pressure, asks for a record of what was agreed, and says not to damage the relationship.",
    "say": "How you negotiate matters too."
  }
},
"5::When a Vendor Falls Through": {
  "p1": {
    "on": "This slide says to tell the household immediately when a vendor falls through and propose real alternatives. The steps: notify rather than quietly fixing it first, propose specific options right away, use a pre-identified backup vendor, confirm the backup can meet the same timeline, and update the vendor tracker afterward.",
    "say": "Tell them immediately, with alternatives in the same message.",
    "ask": "What would you do in the first five minutes?"
  },
  "p2": {
    "on": "This slide explains how to build a backup bench: one pre-vetted backup with current details and rates for every critical service (cleaning, security, childcare, repairs), test backups occasionally with a small job, and record every failure. A vendor that fails twice gets replaced.",
    "say": "Test your backup before an emergency depends on it.",
    "wrap": "Notify fast, bring options and keep a tested backup for every critical service.",
    "scenario": "The caterer for Sarah Thorne's dinner party for 20 cancels at 2 p.m. on the day. What do you do in the first five minutes, and what does your message to Sarah say?"
  },
  "s1": {
    "on": "This section's rule: tell the household immediately and propose real alternatives.",
    "say": "Notify and propose."
  },
  "s2": {
    "on": "These steps respond: notify at once, offer specific alternatives, use the pre-identified backup, confirm it can deliver on time, and update the tracker.",
    "say": "Don't quietly fix it first."
  },
  "s3": {
    "on": "This section says to keep a backup identified for every recurring service.",
    "say": "Backups before you need them."
  },
  "s4": {
    "on": "This section adds detail: one pre-vetted backup per critical service, test it with small jobs, and replace a vendor that fails twice.",
    "say": "Fails twice, replace it.",
    "ask": "Who's your backup for cleaning or childcare?"
  }
},
"5::The PA Risk Management Framework": {
  "p1": {
    "on": "This slide lays out the risk framework, with a diagram. Financial: monitor renewals and verify payments. Legal & Liability: watch for injury, contract and staff liability. Operational: build contingencies for missed deadlines, travel disruption and vendor failure. Reputational: practice discretion on social media and data. The last step says to check each incident against every category.",
    "say": "Most real incidents touch more than one category.",
    "ask": "Which category is easiest to overlook?"
  },
  "p2": {
    "on": "This slide lists all five categories at a glance: Financial, Legal & Liability, Operational, Reputational, and Physical & Safety (home security, travel safety, emergencies). It says to map each incident to every category it touches; a burglary is physical, financial and privacy at once.",
    "say": "A burglary is physical, financial and privacy risk all at once.",
    "wrap": "Map every incident to all the categories it touches.",
    "scenario": "A delivery driver slips on the Thornes' icy driveway and posts about it on social media. Map it to every risk category it touches, and say what you'd do first."
  },
  "s1": {
    "on": "This section lays out four risk categories: Financial, Legal & Liability, Operational and Reputational, each with its main threats and response.",
    "say": "Four kinds of risk."
  },
  "s2": {
    "on": "These steps manage each: verify payments and renewals, watch for liability exposure, plan contingencies ahead, practice discretion, and check each incident against all four.",
    "say": "Check every category, not just the obvious one."
  },
  "s3": {
    "on": "This section's key point: most real incidents touch more than one category.",
    "say": "Incidents overlap."
  },
  "s4": {
    "on": "This section maps examples to each category, adds Physical & Safety, and shows a burglary touching physical, financial and privacy risk at once.",
    "say": "Map incidents to every category they touch.",
    "ask": "What categories would a lost laptop touch?"
  }
},
"5::The Four Core Risk Strategies": {
  "p1": {
    "on": "This slide gives four strategies. Avoidance skips the risky activity. Reduction adds safety measures such as alarms or defensive driving. Transfer shifts financial exposure to an insurer. Retention accepts a minor risk when insuring it costs more. The last step says to match the strategy to the risk rather than defaulting to one.",
    "say": "Avoid, reduce, transfer or retain. Match the strategy to the risk.",
    "ask": "What's the difference between Reduction and Retention?"
  },
  "p2": {
    "on": "This slide explains how to choose. Avoid when the benefit doesn't justify the risk (skip a destination under an advisory). Transfer or avoid for high impact, retain for low impact and low cost, reduce for frequent but manageable risks. Most situations combine them: insure the car, add a tracker, accept the deductible.",
    "say": "Most situations use more than one strategy.",
    "wrap": "Compare likelihood and impact, then combine strategies where it makes sense.",
    "scenario": "Match each to a strategy: the Thornes' teenager starts driving, a family trip to a country under a Level 3 advisory, a $40 phone screen protector plan, and valuable art in the home."
  },
  "s1": {
    "on": "This section starts with Avoidance: skip the risky activity.",
    "say": "Strategy one: avoid."
  },
  "s2": {
    "on": "These steps match strategies to risks: Avoid what can be skipped, Reduce what can be lowered, Transfer financial exposure to insurance, and Retain minor risks deliberately.",
    "say": "Avoid, reduce, transfer, retain."
  },
  "s3": {
    "on": "This section defines the other three: Reduction (alarms, defensive driving), Transfer (insurance) and Retention (accept small risks).",
    "say": "Match the strategy to the risk."
  },
  "s4": {
    "on": "This section explains choosing by likelihood and impact, and shows strategies combined: insure the car, add a tracker, accept the deductible.",
    "say": "Most situations combine strategies.",
    "ask": "Which strategy fits a small, frequent risk?"
  }
},
"5::Insurance & Risk at a Glance": {
  "p1": {
    "on": "This slide says to track policy expirations and compare coverage with what's recommended. The steps: build a secure Personal Insurance Policy Tracker (policy type, carrier, policy number, insured party, deductible, premium, payment frequency, expiration), handle renewals before lapse, compare coverage with the household's current situation, and run the Annual Risk Review Checklist twice a year.",
    "say": "Coverage written years ago may not fit the household today.",
    "ask": "Could you describe your own coverage in one sentence?"
  },
  "p2": {
    "on": "This slide gives the semi-annual check: has net worth increased, are there new properties or vehicles, more international travel, new household staff, a change in marital status or dependents, or business ownership changes? Each \"yes\" is a potential coverage gap to close.",
    "say": "Every \"yes\" is a gap to close, not a note for later.",
    "wrap": "Track every policy, review twice a year and close each gap.",
    "scenario": "In the last six months the Thornes bought a lake house, hired a full-time nanny and started traveling abroad quarterly. Run the risk review: which gaps do you flag?"
  },
  "s1": {
    "on": "This section's rule: track policy expirations and compare coverage to what's recommended.",
    "say": "Track expirations, check coverage."
  },
  "s2": {
    "on": "These steps build it: a secure Personal Insurance Policy Tracker with standard columns, active renewal tracking, a coverage check, the review checklist twice a year, and closing every 'yes' gap.",
    "say": "Every 'yes' means call the broker."
  },
  "s3": {
    "on": "This section gives the semi-annual review questions, the tracker's columns and the Annual Risk Review prompts: new property, marriage, dependents, business changes, net worth.",
    "say": "Life changes mean coverage changes.",
    "ask": "What life change would trigger a coverage review?"
  }
},
"5::Travel Risk Management": {
  "p1": {
    "on": "This slide gives the three phases of travel risk. Before Travel: confirm travel insurance and international medical coverage, and register with the embassy if the traveler is high-profile. During Travel: keep an emergency contact sheet, digital document copies and secure Wi-Fi habits. After Travel: reconcile expenses and file claims promptly.",
    "say": "Before, during, after.",
    "ask": "Does anyone have a trip coming up we can use as the example?"
  },
  "p2": {
    "on": "This slide explains how to build the emergency contact sheet: local emergency numbers, the nearest embassy or consulate, the hotel's direct line, the insurer's 24/7 line, passport and visa copies, medication and allergy notes stored securely, and the home emergency contact. Share it with the traveler and one person at home, and keep a printed copy.",
    "say": "Keep a printed copy in case the phone dies.",
    "wrap": "Plan all three phases and build the emergency sheet before departure.",
    "scenario": "Elias is taking his family to Italy for ten days. Build the emergency contact sheet with the room: what goes on it, and who gets a copy?"
  },
  "s1": {
    "on": "This section says travel risk management is sequential: before, during, after.",
    "say": "Three phases."
  },
  "s2": {
    "on": "These steps are the phases: before (insurance, medical coverage, embassy registration if high-profile), during (emergency sheet, document copies, secure Wi-Fi), and after (reconcile and file claims).",
    "say": "Before, during, after."
  },
  "s3": {
    "on": "This section restates the key action in each phase.",
    "say": "Each phase has one key job."
  },
  "s4": {
    "on": "This section details the emergency contact sheet: local numbers, embassy, hotel, insurer's 24/7 line, document copies, medical notes, a home contact, and a printed copy.",
    "say": "Print a copy; phones die."
  }
},
"5::Handling a Travel Claim": {
  "p1": {
    "on": "This slide treats a claim as a risk event, with the PA as Coordinator, Document Controller and Executive Liaison, with a diagram. The steps: safety first and emergency services if needed, preserve evidence (photos, damaged items, police or incident report numbers, witnesses), never admit fault on the executive's behalf, and move to documentation and filing only once the immediate response is secure.",
    "say": "Safety, evidence, and never admit fault.",
    "ask": "Why is \"never admit fault\" the one people forget?",
    "wrap": "Secure safety, preserve evidence, never admit fault, then document and file.",
    "scenario": "Elias's rental car is rear-ended in Lisbon, and the other driver is insisting it was Elias's fault. He calls you from the roadside. What do you tell him to do, and in what order?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Secure safety, preserve evidence, never admit fault, then document and file.",
    "scenario": "Elias's rental car is rear-ended in Lisbon, and the other driver is insisting it was Elias's fault. He calls you from the roadside. What do you tell him to do, and in what order?"
  },
  "s1": {
    "on": "This section says a claim is a risk event, and the PA is Coordinator, Document Controller and Executive Liaison.",
    "say": "Three roles at once."
  },
  "s2": {
    "on": "These steps handle it: safety first, preserve evidence (photos, report numbers, witnesses), never admit fault for the executive, and document only once things are secure.",
    "say": "Never admit fault.",
    "ask": "What evidence would you collect first?"
  }
},
"5::International Travel Risk & Duty of Care": {
  "p1": {
    "on": "This slide says international travel adds political instability, health gaps, unfamiliar legal systems and communication barriers, and duty of care means knowing where the traveler is and being able to reach them. The steps: check advisories before booking, register with the government's travel program, confirm international health and evacuation cover, and build a destination emergency card.",
    "say": "Duty of care: know where they are and how to reach them.",
    "ask": "Does standard travel insurance cover medical evacuation?"
  },
  "p2": {
    "on": "This slide warns against treating international prep as the domestic checklist plus a passport. It says to involve the security team or a travel-risk consultant for high-risk destinations, keep remote scanned copies of critical documents, and agree in advance what a missed check-in triggers.",
    "say": "Decide in advance how long a silence is too long.",
    "wrap": "Plan before booking, cover health and evacuation, and set a check-in protocol.",
    "scenario": "Elias is traveling for an arbitration in a country with a moderate travel advisory and brushes off extra precautions because he's been before. What do you want in place before he leaves, and how do you raise it while respecting his experience?"
  },
  "s1": {
    "on": "This section says international travel adds political, health, legal and communication risks, and duty of care means knowing where the traveler is and being able to help.",
    "say": "Duty of care is an expectation."
  },
  "s2": {
    "on": "These steps prepare: check advisories before booking, register the trip, confirm medical evacuation coverage, and build a destination emergency card with a check-in schedule.",
    "say": "Standard insurance often excludes evacuation."
  },
  "s3": {
    "on": "This section warns that it isn't the same checklist plus a passport, says to involve security for high-risk places, keep remote document copies, and set a missed check-in protocol.",
    "say": "Decide the escalation before departure."
  }
},
"5::Lifestyle & Personal Support": {
  "p1": {
    "on": "This slide says to track errands, gifts and events in one shared tool with deadlines and owners. The steps: log each request the moment it arrives, assign a clear owner, review the tracker regularly to catch items before they become last-minute, and check it consistently like any other household system.",
    "say": "Memory doesn't scale. The tracker does.",
    "ask": "What would fall apart in your life if you stopped remembering it?"
  },
  "p2": {
    "on": "This slide warns that ad hoc handling is where things get dropped, not from carelessness but because memory doesn't scale. It lists typical tasks: gifts and occasions tracked with dates, budgets and last year's gift; errands and appointments around the work calendar; and events and reservations confirmed in writing and put on the shared calendar.",
    "say": "Track what was given last year, so you never repeat a gift.",
    "wrap": "Log it, own it and review it on a schedule.",
    "scenario": "In one week: Sarah's mother's birthday, the nanny's work anniversary, a client's holiday gift, dry cleaning before a gala and a dinner reservation for their anniversary. Put them in the tracker with owners and deadlines."
  },
  "s1": {
    "on": "This section's rule: track errands, gifts and events in one shared tool with deadlines and owners.",
    "say": "One tool, deadlines, owners."
  },
  "s2": {
    "on": "These steps run it: log requests immediately, assign an owner, review regularly, and check it consistently.",
    "say": "Log it when asked, not when urgent."
  },
  "s3": {
    "on": "This section explains that things get dropped not from carelessness but because memory doesn't scale.",
    "say": "Memory doesn't scale."
  },
  "s4": {
    "on": "This section lists the areas: gifts and occasions with last year's record, errands and appointments around work, and events confirmed in writing.",
    "say": "Remember what was given last year."
  }
},
"5::Creating a Home Binder for a Busy Executive": {
  "p1": {
    "on": "This slide lays out the Home Binder sections, with a diagram: Household Operations (staff, vendors, manuals, alarm and Wi-Fi details, utilities), Family & Medical (doctors, allergies, medications, schools), Financial & Legal Reference (pointers only, not the sensitive data) and Emergency Contacts. The test: could a substitute PA or emergency responder use it without calling you?",
    "say": "The binder exists for the moment you're not available.",
    "ask": "If you were unreachable for 24 hours, what would someone else need?"
  },
  "p2": {
    "on": "This slide says a binder exists for one moment: when someone else needs critical household information fast and can't ask you. The test isn't how complete it looks but whether a substitute, a family member or a responder could actually use it.",
    "say": "Judge it by whether someone else can use it cold.",
    "wrap": "Four sections, pointers for sensitive data, tested by someone who isn't you.",
    "scenario": "You're unexpectedly unreachable for a day, and the Thornes' alarm goes off while the nanny is home with the kids. What does she need to find in the binder in the first two minutes?"
  },
  "s1": {
    "on": "This section lays out four binder sections: Household Operations, Family & Medical, Financial & Legal Reference (pointers only) and Emergency Contacts.",
    "say": "Four sections."
  },
  "s2": {
    "on": "These steps build it section by section and end with the test: could a substitute PA or emergency responder use it cold?",
    "say": "Pointers, not sensitive numbers."
  },
  "s3": {
    "on": "This section says the binder exists for one moment, when someone else needs information and you're unavailable, and that usability is the test.",
    "say": "Usable without calling you.",
    "ask": "Who would use your binder in an emergency?"
  }
},
"5::Home Binder: Format, Security & Maintenance": {
  "p1": {
    "on": "This slide covers format and security, with a diagram. Physical works when power or internet is down; digital is easy to update. Most households need both, with the printed copy kept current from a digital master. Never store real sensitive numbers (account numbers, passwords, SSNs) in the binder, only where to find them, and update it the moment anything changes.",
    "say": "Write down where to find the account number, never the number itself.",
    "ask": "What's the difference between \"the account number\" and \"where to find it\"?",
    "wrap": "Keep a digital master and a printed backup, store pointers not secrets, and update immediately.",
    "scenario": "You're reviewing the Thornes' binder and find the home safe combination and a bank account number written on the Financial page. What do you change, and where does that information go instead?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Keep a digital master and a printed backup, store pointers not secrets, and update immediately.",
    "scenario": "You're reviewing the Thornes' binder and find the home safe combination and a bank account number written on the Financial page. What do you change, and where does that information go instead?"
  },
  "s1": {
    "on": "This section weighs physical (works offline) against digital (easy updates, remote access); most households need both.",
    "say": "Often both: digital master, physical backup."
  },
  "s2": {
    "on": "These steps maintain it: choose by use case, keep both, never store sensitive numbers directly, update at every change, and check the security rule was followed.",
    "say": "Outdated is worse than none."
  }
},
"5::Digital Home Binder Tools & Platforms": {
  "p1": {
    "on": "This slide says the right tool depends on who needs access, structure matters more than the platform, and every binder needs an access plan. The steps: build it in a workspace the household already uses (Notion, Google Workspace), use the four standard section headers, set permissions per section, and export or print a backup regularly.",
    "say": "Structure beats sophistication.",
    "ask": "Who in the household needs which section?"
  },
  "p2": {
    "on": "This slide warns against a tool nobody else can use and against a single personal login as the only way in. It says to update permissions whenever staff change, since a departed employee with access is an easy gap, and to test usability by having someone unfamiliar find something specific.",
    "say": "Remove a departed employee's access the day they leave.",
    "wrap": "Pick a tool people already use, set permissions per section and keep a backup.",
    "scenario": "The Thornes are choosing between a shared Notion workspace they already use and a dedicated home-management app with built-in permissions. What do you need to know about who needs access to what before recommending one?"
  },
  "s1": {
    "on": "This section says the tool should suit who needs access, structure matters more than platform, and permissions need a plan.",
    "say": "Structure over software."
  },
  "s2": {
    "on": "These steps set it up: use the workspace the household already uses, mirror the four sections, set permissions by section, and export a physical backup regularly.",
    "say": "The driver doesn't need medical info."
  },
  "s3": {
    "on": "This section warns against tools nobody else can use and single-login access, asks to revisit permissions when staff change, and suggests a usability test.",
    "say": "Remove access when staff leave."
  }
},
"5::EA/PA Risk Framework: Information Security": {
  "p1": {
    "on": "This slide says information security risk is exposure of sensitive data, and the EA/PA holds more of it than almost anyone. The goal is disciplined, consistent handling. The steps: least-privilege access, verify identity before disclosing anything sensitive, use secure channels, and know the containment steps for a suspected leak: stop the spread, assess the scope, then escalate.",
    "say": "A confident request isn't verification.",
    "ask": "How do you verify someone's identity over the phone?"
  },
  "p2": {
    "on": "This slide warns that most security failures are human handling errors, not IT problems, and says never to keep sensitive numbers in an unsecured document \"just to have it handy.\" It says to report suspected incidents immediately, even small ones, and to review standing access regularly.",
    "say": "Report the near-miss early. It's far easier to contain.",
    "wrap": "Least privilege, verify identity, use secure channels and report early.",
    "scenario": "An email that looks like it's from Elias's bank asks you to confirm his account details to clear a \"security flag.\" It looks legitimate but arrived at an unusual time. What do you do before responding?"
  },
  "s1": {
    "on": "This section defines information security risk, says EAs see more sensitive data than almost anyone, and aims for consistent handling plus an escalation path.",
    "say": "Security is part of the role."
  },
  "s2": {
    "on": "These steps are the habits: least privilege, verify identity before disclosing, use secure channels, and know containment steps (stop the spread, assess, escalate).",
    "say": "A confident request isn't verification.",
    "ask": "How would you verify a caller asking for account details?"
  },
  "s3": {
    "on": "This section warns that most failures are human, forbids storing sensitive numbers casually, asks to report near-misses, and to review standing access.",
    "say": "Report even the small ones."
  }
},
"5::EA/PA Risk Framework: Operational Continuity": {
  "p1": {
    "on": "This slide defines continuity risk: a disruption, like you being unavailable, a system going down or a vendor failing, that stops essential work. The goal is removing the \"only I know how\" single point of failure. The steps: list what would break if you were gone 48 hours, document critical processes, keep a backup contact for every critical vendor and system, and set an \"if I'm unreachable\" protocol.",
    "say": "Being indispensable is a risk, not job security.",
    "ask": "What would break if you were unreachable for 48 hours?"
  },
  "p2": {
    "on": "This slide warns that being the only one who can do things is a real operational risk. It says to test continuity plans by having someone follow your documentation, keep that documentation current, and treat continuity planning as risk reduction, not pessimism.",
    "say": "Test the plan by having someone else follow it.",
    "wrap": "Find the single points of failure, document them and test the handoff.",
    "scenario": "You're planning your first two-week vacation in over a year. What do you document and hand off so nothing critical falls through while you're away?"
  },
  "s1": {
    "on": "This section defines continuity risk, warns about 'only I know how to do this', and calls SOPs, binders and contact lists continuity tools.",
    "say": "No single point of failure."
  },
  "s2": {
    "on": "These steps prepare: list what breaks if you're gone 48 hours, document critical processes, keep backup contacts, and set an 'if I'm unreachable' protocol.",
    "say": "What breaks in 48 hours without you?"
  },
  "s3": {
    "on": "This section warns that being indispensable is a risk, asks to test and update plans, and calls continuity planning risk reduction, not pessimism.",
    "say": "Indispensable is a risk."
  }
},
"5::EA/PA Risk Framework: Reputational Risks": {
  "p1": {
    "on": "This slide says reputational risk spreads faster and is harder to reverse than financial or operational damage, so the EA/PA's role is mainly preventive. The steps: be discreet by default, assuming anything could become public, vet guest lists, appearances and social content for reputational exposure, know the escalation path and who may speak publicly, and control information flow deliberately.",
    "say": "Assume anything you write could be seen outside its audience.",
    "ask": "Who at your firm is authorized to speak to the press?"
  },
  "p2": {
    "on": "This slide warns against responding quickly instead of correctly, because a fast, wrong public response usually does more damage. It says never to assume a private message stays private, to know this executive's sensitive topics, and to escalate when unsure.",
    "say": "Correct beats fast in a reputational situation.",
    "wrap": "Prevent, vet, escalate, and let only authorized people respond.",
    "scenario": "A journalist contacts you directly, outside the firm's usual channels, asking for comment on a sensitive matter involving Elias. They're polite but persistent. What do you do, and what do you deliberately avoid?"
  },
  "s1": {
    "on": "This section defines reputational risk, notes it spreads fast and lasts, and says the EA/PA's role is mainly prevention.",
    "say": "Prevention, not cleanup."
  },
  "s2": {
    "on": "These steps prevent it: discretion by default, vetting guest lists and content for reputation, knowing the escalation path, and controlling information flow.",
    "say": "Assume anything might be seen."
  },
  "s3": {
    "on": "This section warns against fast wrong responses and assuming privacy, asks you to know the executive's sensitive topics, and to escalate when unsure.",
    "say": "Correct beats quick."
  }
},
"5::EA/PA Risk Framework: Physical & Travel Safety": {
  "p1": {
    "on": "This slide covers bodily risk to the executive or family during travel, events or daily life, the category with the highest and least reversible stakes, where duty of care matters most. The steps: keep visibility into location and itinerary without being intrusive, build destination safety awareness, coordinate with security personnel, and keep emergency and medical information findable in seconds.",
    "say": "This is the category where gaps are least reversible.",
    "ask": "Where would you find the nearest hospital for the executive's next destination?"
  },
  "p2": {
    "on": "This slide warns against dismissing safety planning as paranoid for a \"normal\" trip; baseline awareness always applies. It says never to guess at emergency response, to bring in professional security for elevated risk, and to have a pre-agreed escalation for missed check-ins.",
    "say": "Know the limits of your role and bring in security when the risk is real.",
    "wrap": "Scale the planning to the risk, and never skip the baseline.",
    "scenario": "Elias is attending a public event with heavy media attention, and the venue has confirmed only minimal security screening. What do you want confirmed or arranged beforehand, and who do you loop in?"
  },
  "s1": {
    "on": "This section covers bodily risk to the executive or family, the highest-stakes category, where duty of care applies most.",
    "say": "The highest stakes."
  },
  "s2": {
    "on": "These steps protect: location visibility without intrusion, destination safety awareness, coordination with security, and current emergency and medical info.",
    "say": "Findable in seconds."
  },
  "s3": {
    "on": "This section says baseline awareness applies to every trip, never guess at emergency numbers, bring in professional security for high risk, and pre-agree missed check-in escalation.",
    "say": "Scale planning to the real risk."
  }
},
"5::EA/PA Risk Framework: Financial Controls": {
  "p1": {
    "on": "This slide covers unauthorized spending, fraud, billing errors and mismanagement. An EA/PA often has real financial access, and clear controls protect you as much as the executive. The steps: know your approval authority in dollar terms, require documentation for every transaction, reconcile at least monthly, and flag anything unusual immediately.",
    "say": "Documentation for every transaction, even small ones.",
    "ask": "What's your approval limit, in dollars?"
  },
  "p2": {
    "on": "This slide warns that urgency is one of the most common fraud tactics, and says never to act on a financial request arriving through an unusual channel. It says to keep approval records organized for audits and to verify out-of-pattern requests through a second channel, even if that delays things.",
    "say": "Urgency plus an unusual channel is the classic fraud pattern.",
    "wrap": "Know your limits, document everything and verify unusual requests another way.",
    "scenario": "An email that appears to be from Elias asks you to urgently wire funds to a vendor for a time-sensitive deal and to keep it discreet. The tone matches his, but something feels off. What do you do before taking any action?"
  },
  "s1": {
    "on": "This section covers controls against unauthorized spending, fraud and billing errors, notes EAs often have real financial access, and says controls protect the EA too.",
    "say": "Controls protect you as well."
  },
  "s2": {
    "on": "These steps are the controls: know your approval limit, document every transaction, reconcile monthly, and flag anything unusual.",
    "say": "Know your dollar limit in advance."
  },
  "s3": {
    "on": "This section warns that urgency is a common fraud tactic and unusual channels are red flags, and asks for organized records and second-channel verification.",
    "say": "Urgent and unusual? Verify first.",
    "ask": "What would make you pause on a payment request?"
  }
},
"5::Private Expense Audit": {
  "p1": {
    "on": "This slide describes periodically reviewing personal and household spending for accuracy, not just processing transactions, which links to financial controls. The steps: set a recurring review (monthly is typical), compare charges against expected recurring expenses (subscriptions, contracts, payroll), and flag anything unclear rather than assuming it's fine.",
    "say": "Review monthly, not just when something looks wrong.",
    "ask": "What would you compare the charges against?"
  },
  "p2": {
    "on": "This slide warns against treating a personal expense review as lower-stakes than business controls, because the trust involved is just as high. It says to keep private financial records with the same security as any other confidential information.",
    "say": "Private finances deserve the same care as business finances.",
    "wrap": "Review on a cadence, compare with expectations and flag the unclear.",
    "scenario": "During a routine review you find a recurring $89 monthly charge you don't recognize. What do you do before raising it with the household?"
  },
  "s1": {
    "on": "This section defines a private expense audit, a periodic review of household spending, and ties it to financial controls.",
    "say": "Review, don't just process."
  },
  "s2": {
    "on": "These steps run it: a monthly cadence, actual charges compared with expected recurring costs, and anything unclear flagged.",
    "say": "Catch the drift."
  },
  "s3": {
    "on": "This section warns that private finances aren't lower stakes and must be kept as securely as any confidential record.",
    "say": "Same security as anything confidential."
  }
},
"5::Vendor NDA Management": {
  "p1": {
    "on": "This slide says vendors with access to household or business information sometimes need an NDA first, and managing NDAs means tracking who has one, what it covers and whether it's current. The steps: decide which vendors need one based on their access, keep a tracker of signed NDAs and their scope, and revisit coverage when a vendor's scope changes.",
    "say": "Signed first, access second.",
    "ask": "Which household vendors would need an NDA?"
  },
  "p2": {
    "on": "This slide warns against treating an NDA as a one-time checkbox; it's tracked alongside the relationship. It also says never to grant access to sensitive information on a verbal promise that the NDA will be signed later.",
    "say": "A promise to sign later isn't an NDA.",
    "wrap": "Decide who needs one, track it and revisit when scope changes.",
    "scenario": "A new vendor needs temporary access to the Thornes' home security system for a multi-week project. What do you want confirmed or in place before granting that access?"
  },
  "s1": {
    "on": "This section says vendors with access to sensitive information may need an NDA first, and managing NDAs means tracking them over time.",
    "say": "An NDA is protection, not a formality."
  },
  "s2": {
    "on": "These steps manage them: decide who needs one based on access, keep a tracker of signed NDAs and scope, and revisit when scope changes.",
    "say": "Signed before access."
  },
  "s3": {
    "on": "This section warns against treating NDAs as one-time boxes or granting access on a promise to sign later.",
    "say": "Signed first, always."
  }
},
"5::Mid-Point 1-on-1 Performance Review": {
  "p1": {
    "on": "This slide marks Day 5 as the program's midpoint checkpoint. The review is a two-way conversation, not a one-way evaluation. The steps: arrive with an honest view of which days and Practice Lab tools feel solid or shaky, use actual data (Knowledge Check scores, Practice Lab history, roleplay results) and leave with one specific focus for the second half.",
    "say": "It's a two-way conversation, and you leave with one named focus.",
    "ask": "Which day or tool feels shakiest for you right now?"
  },
  "p2": {
    "on": "This slide warns against treating the review as a formality rather than a chance to redirect effort. It says a trainee who is struggling with something specific should raise it now, while there's time to fix it.",
    "say": "Raise it now, while there's still time to fix it.",
    "wrap": "Be specific, use the data and leave with a concrete focus.",
    "scenario": "Look honestly at Days 1 through 5. Which day or Practice Lab tool would you most want to revisit before moving on, and what exactly still feels unclear?"
  },
  "s1": {
    "on": "This section explains why Day 5 is the checkpoint and frames the review as a two-way conversation.",
    "say": "It's a conversation, not a verdict."
  },
  "s2": {
    "on": "These steps prepare: an honest sense of strong and shaky areas, using Knowledge Check, Practice Lab and roleplay data, and leaving with one named focus.",
    "say": "Leave with one specific focus.",
    "ask": "Which day feels shakiest to you so far?"
  },
  "s3": {
    "on": "This section warns against treating it as a formality and encourages raising struggles now, while there's time to close the gap.",
    "say": "Now is the time to raise it."
  }
}
});
