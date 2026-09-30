/* Day 4 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
"4::Data Entry That Holds Up": {
  "p1": {
    "on": "This slide gives the four-step data cleaning order: De-duplicate (remove duplicate records first), Standardize (fix inconsistent formatting in every field), Filter (apply validation rules and check against source documents), then Sort (order by the relevant columns).",
    "say": "De-duplicate, standardize, filter, sort, in that order.",
    "ask": "Why would the order matter?"
  },
  "p2": {
    "on": "This slide explains why the order matters. Sorting duplicates just gives you neat duplicates, each of which can trigger a double invoice. Filters miss records whose formatting differs, like \"St.\" versus \"Street.\" Validate a sample against the source document, not memory. The rule: never hand raw data downstream for someone else to fix.",
    "say": "Never let someone downstream fix your data errors.",
    "wrap": "Clean in order and validate against the source before the data goes anywhere.",
    "scenario": "Live demo: this sample client list has 40 rows, including duplicates, \"CA\" and \"California,\" and two phone formats. Clean it in the four-step order and say what each step caught."
  },
  "s1": {
    "on": "This section says clean data entry is sequential: the steps below go in order.",
    "say": "Order is the whole point."
  },
  "s2": {
    "on": "These steps are the order: De-duplicate, Standardize formatting, Filter and validate against the source, then Sort.",
    "say": "De-dupe, standardize, filter, sort.",
    "ask": "Why would sorting first be a mistake?"
  },
  "s3": {
    "on": "This section repeats the order and gives the rule: never submit raw data and let someone downstream fix it.",
    "say": "Clean it before it leaves you."
  },
  "s4": {
    "on": "This section explains why the order matters: sorting duplicates just gives neat duplicates, inconsistent formatting makes filters miss records, and validation means checking against the source, not memory.",
    "say": "Check a sample against the original document."
  }
},
"4::Spreadsheet Essentials: Sort, Filter, Lookups & Pivot Tables": {
  "p1": {
    "on": "This slide says most trackers are spreadsheets, a clean sheet has one header row and one row per record, and five tools (sort, filter, remove duplicates, lookups, pivot tables) plus COUNTIF and SUMIF cover most needs. The steps: freeze headers and make a table, use drop-downs, use XLOOKUP, build a pivot table, and check totals before sharing.",
    "say": "One header row, one row per record, one column per fact.",
    "ask": "Which of these tools have you used, and which one scares you?"
  },
  "p2": {
    "on": "This slide covers separating raw data from summaries, entering real dates, and two pitfalls: sorting a single column and typing totals by hand.",
    "say": "Always sort the whole table, never one column.",
    "wrap": "Clean structure first, then let the tools do the work.",
    "scenario": "Elias wants to know, by tomorrow, how much each matter spent on travel last quarter. You have 400 expense rows with dates, matters, categories and amounts. Which tools do you use, and in what order?"
  },
  "s1": {
    "on": "This section explains why spreadsheets matter, what a clean sheet looks like and the core tools.",
    "say": "Structure first, tools second."
  },
  "s2": {
    "on": "These steps: freeze headers and use a table, add drop-downs, use XLOOKUP, build a pivot table, and check before sharing.",
    "say": "Let a pivot table do the adding up.",
    "ask": "What would you summarize with a pivot table this week?"
  },
  "s3": {
    "on": "This section says to separate data and summaries, use real dates, and avoid sorting one column or typing totals.",
    "say": "Formulas update; typed numbers don't."
  }
},
"4::The Daily Routine": {
  "p1": {
    "on": "This slide shows the three-phase daily routine. The Morning Scan (15–30 min) flags Tier 1 issues, clears spam and prepares a briefing summary. The Midday Review drafts responses, follows up on pending threads and confirms meetings. The End-of-Day Review confirms nothing urgent is left and preps tomorrow's summary.",
    "say": "Scan, review, close out, every day.",
    "ask": "What does your own morning look like against this?"
  },
  "p2": {
    "on": "This slide explains how to make the routine stick: protect the Morning Scan on the calendar like a meeting, keep one carry-over list between the End-of-Day Review and the next morning, and fit the routine to the executive's rhythm. If they start at 7, the briefing is ready by 6:45.",
    "say": "The routine serves the executive's day, not yours.",
    "wrap": "Protect the morning scan, carry over in writing, and time it to the executive.",
    "scenario": "Elias starts at 7 a.m. and is in court by 9 three days a week. Build your daily routine around his schedule: when does each phase happen, and what's ready when?"
  },
  "s1": {
    "on": "This section says the daily routine is sequential: the steps go in order.",
    "say": "Same order, every day."
  },
  "s2": {
    "on": "These steps are the routine: a Morning Scan (15–30 min) to flag Tier 1 and prepare the briefing, a Midday Review to draft and confirm, and an End-of-Day Review to clear urgent items and prep tomorrow.",
    "say": "Morning scan, midday review, end-of-day review."
  },
  "s3": {
    "on": "This section restates each checkpoint and what it produces.",
    "say": "Each checkpoint has an output."
  },
  "s4": {
    "on": "This section says to protect the Morning Scan like a meeting, keep a carry-over list overnight, and fit the executive's rhythm: a 7 AM start means the briefing is ready by 6:45.",
    "say": "The routine serves their day, not yours.",
    "ask": "When does your executive's day start?"
  }
},
"4::The Morning Briefing, In Practice": {
  "p1": {
    "on": "This slide shows how to write the morning briefing: scan the full inbox but never forward it raw, condense each item to one line with its status, order the lines by urgency with Tier 1 first, keep it to a handful of lines, and send it at the same time every morning.",
    "say": "The briefing replaces the inbox. If it's as long as the inbox, it's failed.",
    "ask": "What makes a briefing line useful rather than a copied excerpt?"
  },
  "p2": {
    "on": "This slide gives the one-page layout: \"Needs you today\" (decisions, signatures and calls only the executive can do, each with a deadline), \"Handled / in progress\" (one line per item) and \"Heads-up\" (what could become urgent later in the week). The example briefing shows two client escalations with drafts ready, a vendor contract expiring Friday and a media request due tomorrow.",
    "say": "Needs you, handled, heads-up.",
    "wrap": "A short, ordered briefing beats forwarding dozens of raw emails.",
    "scenario": "Compare the five-line briefing on screen with the 30-email raw inbox it came from. Then write tomorrow's version for Elias's inbox with the three sections."
  },
  "s1": {
    "on": "This section introduces the briefing itself, covered in the steps that follow.",
    "say": "Here's how to build it."
  },
  "s2": {
    "on": "These steps build it: scan the whole inbox but never forward it raw, one line per item with its status, ordered by urgency, kept to a handful of lines, and sent at the same time every morning.",
    "say": "One line per item, most urgent first."
  },
  "s3": {
    "on": "This section's rule: a short briefing beats forwarding dozens of raw emails.",
    "say": "Short wins."
  },
  "s4": {
    "on": "This section gives the layout: 'Needs you today' at the top with deadlines, 'Handled / in progress' in the middle, 'Heads-up' at the bottom.",
    "say": "Needs you, handled, heads-up.",
    "ask": "What would be at the top of tomorrow's briefing?"
  }
},
"4::The Priority Matrix": {
  "p1": {
    "on": "This slide sets up the tiers, with a diagram. Tier 1 (legal deadlines, high-value clients, media, financial approvals, crisis comms) means notify the executive immediately. Tier 2 (revenue opportunities, partnerships, board comms, vendor negotiations) means draft a response within 2–4 hours. If an item doesn't fit either, treat it as Tier 1 until confirmed.",
    "say": "The tier decides the whole response timeline. When unsure, treat it as Tier 1.",
    "ask": "Why is over-escalating cheaper than under-escalating?"
  },
  "p2": {
    "on": "This slide adds the lower tiers. Tier 3 (newsletters, internal FYIs, non-urgent scheduling) gets batched into one daily block. Tier 4 (promotional mail, automated notices, other teams' requests) is filed or forwarded without the executive. Re-tier when facts change: a vendor email becomes Tier 1 the moment it mentions a missed payment.",
    "say": "A routine email becomes Tier 1 the moment the facts change.",
    "wrap": "Tier every item first, then respond on that tier's timeline.",
    "scenario": "Speed round: I'll read five emails and you call the tier. A court clerk notice, a partnership inquiry, the bar association newsletter, a reporter asking for comment, and a vendor saying an invoice is 60 days overdue."
  },
  "s1": {
    "on": "This section defines two tiers: Tier 1 (legal deadlines, high-value clients, media, financial approvals, crisis comms) means notify the executive immediately; Tier 2 (revenue, partnerships, board, vendor negotiations) means draft within 2–4 hours.",
    "say": "Tier 1 interrupts; Tier 2 doesn't."
  },
  "s2": {
    "on": "These steps apply it: classify first, escalate Tier 1 at once, draft Tier 2 within 2–4 hours, treat unclear items as Tier 1, and review your calls later.",
    "say": "When in doubt, treat it as Tier 1.",
    "ask": "Where would a media inquiry go?"
  },
  "s3": {
    "on": "This section restates the two tiers as the ones to act on.",
    "say": "Know them by heart."
  },
  "s4": {
    "on": "This section adds Tier 3 (routine, batched daily) and Tier 4 (archive or delegate), and says to re-tier when facts change, like a vendor email that mentions a missed payment.",
    "say": "Tiers change when the facts do."
  }
},
"4::Dual-Role Context Switching": {
  "p1": {
    "on": "This slide explains that a hybrid EA/PA role switches between business-formal and personal-informal modes, often within an hour, linking to Corporate Mode versus Personal Mode. The steps: name the domain before responding, take a brief reset between domains, and keep business and personal task tracking separate.",
    "say": "Name the domain before you answer.",
    "ask": "Have you ever sent a message in the wrong tone because you'd just switched tasks?"
  },
  "p2": {
    "on": "This slide warns that carrying formal language into a personal message, or the reverse, is a common result of switching too quickly. It says switching is a skill that improves with deliberate practice.",
    "say": "Tone mismatch is the tell of a rushed switch.",
    "wrap": "Identify the domain, reset, and keep the systems separate.",
    "scenario": "You're mid-draft on a formal client email when Elias's spouse texts about a family birthday dinner. How do you switch so neither message ends up in the wrong tone?"
  },
  "s1": {
    "on": "This section says a hybrid EA/PA switches between business-formal and personal-informal modes, and ties this to Corporate vs. Personal Mode.",
    "say": "Two modes, often in one hour."
  },
  "s2": {
    "on": "These steps make it deliberate: name the domain before replying, reset between switches, and keep separate tracking systems.",
    "say": "Name the domain first."
  },
  "s3": {
    "on": "This section warns about tone bleeding across modes, and calls switching a skill that improves with practice.",
    "say": "Small mismatches erode trust.",
    "ask": "Have you ever sent the right message in the wrong tone?"
  }
},
"4::Priority Collision Handling": {
  "p1": {
    "on": "This slide defines a collision: two genuinely important things that both need attention now, which is where the Priority Matrix runs out. The steps: quickly compare the real cost of delay on each side, partially address both where possible with an interim action, and escalate when it's too close to call.",
    "say": "Ask what actually breaks if each one waits ten minutes.",
    "ask": "When has working faster not solved a collision?"
  },
  "p2": {
    "on": "This slide warns that some collisions are real trade-offs, and pretending speed solves them means both get handled badly. It says to document how a collision was resolved and why, so it becomes precedent.",
    "say": "Some collisions are trade-offs, not speed problems.",
    "wrap": "Weigh the cost of delay, cover both where you can, and escalate close calls.",
    "scenario": "Within the same minute, Elias asks you to get opposing counsel on the phone now, and a major client emails that their wire transfer failed and closing is at noon. Walk through exactly what happens first."
  },
  "s1": {
    "on": "This section defines a collision: two important things at once, neither deferrable, when the Priority Matrix doesn't settle it.",
    "say": "When the matrix doesn't decide it."
  },
  "s2": {
    "on": "These steps handle it: weigh the cost of a ten-minute delay on each side, partly address both, and escalate when it's too close to call.",
    "say": "A 30-second check-in beats a wrong guess."
  },
  "s3": {
    "on": "This section warns that working faster doesn't solve every collision, and asks you to document how each was resolved.",
    "say": "Some are real trade-offs.",
    "ask": "How would you handle two Tier 1 items at once?"
  }
},
"4::Mid-Stage Task Injections": {
  "p1": {
    "on": "This slide defines a mid-stage injection: an unrelated request that lands while you're partway through something else, where dropped threads are the common damage. The steps: triage whether it needs action now or can wait for a safe stopping point, leave a clear marker of where you stopped, and tell whoever is waiting on the original task if you fully switch.",
    "say": "Mark where you stopped before you switch.",
    "ask": "How do you keep your place when you get interrupted?"
  },
  "p2": {
    "on": "This slide warns against holding several in-progress tasks in memory. It recommends a simple running list of \"in progress, paused here\" items to prevent most of the damage.",
    "say": "Memory is where details get dropped.",
    "wrap": "Triage, leave a marker, communicate, and return.",
    "scenario": "You're halfway through drafting a detailed client response when an urgent, unrelated request comes in. Walk through your process so neither task gets dropped."
  },
  "s1": {
    "on": "This section defines an injection: a new request mid-task, where the original can continue but not uninterrupted. Dropped threads are a major source of errors.",
    "say": "Don't lose the first task."
  },
  "s2": {
    "on": "These steps handle it: triage fast, leave a marker where you stopped, and tell whoever's waiting if the original stalls.",
    "say": "Leave yourself a marker."
  },
  "s3": {
    "on": "This section warns against holding tasks in memory, and recommends a simple 'in progress, paused here' list.",
    "say": "Write down where you paused."
  }
},
"4::Research as a Core EA Skill": {
  "p1": {
    "on": "This slide presents research as the quiet discipline under most EA work, with a diagram: verify a new vendor or contact is legitimate before committing time or money, prepare a short brief on who's in the room before any meeting, verify claims before forwarding them as fact, go to the primary source first, and label anything unconfirmed.",
    "say": "Primary source first, and label anything you couldn't confirm.",
    "ask": "What's the first thing you'd check on a vendor you've never heard of?"
  },
  "p2": {
    "on": "This slide makes the point that research isn't separate from the role: knowing who you're calling before you call, and who's in the room before a meeting, is the same skill.",
    "say": "Forwarding an unverified claim puts your credibility on the line.",
    "wrap": "Verify before you commit, brief before you meet, and flag what's unconfirmed.",
    "scenario": "You have 90 seconds: a vendor called \"Apex Legal Print Solutions\" wants a $6,000 deposit for trial exhibits. Say out loud what you'd check first, and where."
  },
  "s1": {
    "on": "This section names three research jobs: vetting vendors and contacts, preparing meeting and attendee briefs, and fact-checking before forwarding.",
    "say": "Vet, prep, fact-check."
  },
  "s2": {
    "on": "These steps put it into practice: verify vendors independently, brief on who's in the room, verify claims before forwarding, go to the primary source first, and label anything unconfirmed.",
    "say": "Primary source first. Flag what you can't confirm.",
    "ask": "What would you check before booking a new vendor?"
  },
  "s3": {
    "on": "This section says research is the quiet discipline under most of the EA role, not a separate skill.",
    "say": "Know before you call, forward or book."
  }
},
"4::Research Method & the Real Failure Mode": {
  "p1": {
    "on": "This slide gives a fast, reliable research method: start at the primary source (the company's site, the filing, the original email), cross-check anything that drives a decision or dollar amount against a second independent source, match depth to the stakes, and never accept a vendor's claims about themselves as verification.",
    "say": "Anything that drives money or a decision gets a second, independent source.",
    "ask": "When did a single source turn out to be wrong for you?"
  },
  "p2": {
    "on": "This slide names the real failure: not laziness, but mistaking one unverified source for confirmation. A vendor's own claims aren't verification. It links this to research-before-calling in the next topic.",
    "say": "One source, especially their own, isn't confirmation.",
    "wrap": "Primary source, second independent check, depth matched to stakes.",
    "scenario": "A potential co-counsel's website says they've \"won over $50M in verdicts.\" Elias wants to partner with them next week. How do you verify that, and what do you tell Elias if you can't?"
  },
  "s1": {
    "on": "This section's method: primary source first, cross-check anything tied to a decision or a dollar amount, and know when 'good enough' really is enough.",
    "say": "Fast and reliable beats exhaustive."
  },
  "s2": {
    "on": "These steps are the method: start at the primary source, confirm with a second independent source, match depth to stakes, never treat self-description as verification, and carry this into research-before-calling.",
    "say": "Two independent sources for anything that matters."
  },
  "s3": {
    "on": "This section names the real failure: mistaking one unverified source for confirmation, and says research-before-calling is this same skill.",
    "say": "A vendor's claims about itself aren't proof.",
    "ask": "Where have you seen a single source go wrong?"
  }
},
"4::Creating and Maintaining a Comprehensive Contact List": {
  "p1": {
    "on": "This slide covers building a contact list, with a diagram: capture more than name and number (relationship context, preferred method, their assistant, standing notes), categorize every entry (business, personal, vendor, medical, legal), update it right after any interaction, and design it so anyone covering for you finds the right person in seconds.",
    "say": "The test: could someone covering for you use it in seconds?",
    "ask": "What's on your contact list beyond name and number?"
  },
  "p2": {
    "on": "This slide calls a contact list operational infrastructure, not a phone book, and lists fields worth capturing. Core: name, title, organization, phone, email, preferred channel, time zone. Context: connection to the executive, last interaction, sensitivities such as an opposing party. Maintenance: a \"last verified\" date and a quarterly sweep.",
    "say": "Flag the sensitivities, like an opposing party you must never contact directly.",
    "wrap": "Capture context, categorize and keep it verified.",
    "scenario": "Build Elias's contact entry for his estate-planning client's CPA: which fields you'd fill, and which sensitivity note you'd add if the CPA is also a witness in another matter."
  },
  "s1": {
    "on": "This section gives three practices: capture more than name and number, categorize on purpose, and maintain it like a system.",
    "say": "Fields, categories, upkeep."
  },
  "s2": {
    "on": "These steps build it: capture context, preferred method and assistant name, categorize from the start, update after every interaction, and design it so anyone could use it.",
    "say": "The test: could someone covering for you find the right person in seconds?"
  },
  "s3": {
    "on": "This section calls the contact list operational infrastructure, not a phone book.",
    "say": "Infrastructure, not a phone book."
  },
  "s4": {
    "on": "This section lists the fields: core details and time zone, context such as connection and sensitivities (an opposing party is never contacted directly), and maintenance with a last-verified date and quarterly sweep.",
    "say": "Record sensitivities, like opposing parties."
  }
},
"4::Contact List Failure Modes & Upkeep": {
  "p1": {
    "on": "This slide says the most common failure isn't missing contacts but stale ones: an old assistant's name, a changed number. The steps: watch for stale entries, centralize in one system (CRM, shared contacts or a synced address book), run a quarterly 10-minute audit, fix stale entries immediately, and consolidate fragmented lists.",
    "say": "Stale beats missing as the most common failure.",
    "ask": "Where do your contacts live today, and in how many places?"
  },
  "p2": {
    "on": "This slide says to centralize in one system and run a light recurring audit to prevent slow rot. It ends with a discussion prompt: a time you couldn't reach the right person because contact info was missing, wrong or scattered.",
    "say": "Three scattered lists are three incomplete lists.",
    "wrap": "Centralize, audit quarterly, and fix stale entries on the spot.",
    "scenario": "Tell us about a time you couldn't reach the right person quickly because the contact info was wrong or scattered. What would have prevented it?"
  },
  "s1": {
    "on": "This section names the most common failure: stale entries, not missing ones.",
    "say": "Stale is worse than missing."
  },
  "s2": {
    "on": "These steps prevent it: watch for stale entries, centralize in one system, run a light quarterly audit, fix stale entries immediately, and consolidate fragmented lists.",
    "say": "Fix it now; it takes seconds."
  },
  "s3": {
    "on": "This section explains that a list split across phone, spreadsheet and signatures is three incomplete lists, recommends a quarterly 10-minute audit, and closes with a discussion prompt.",
    "say": "One system, audited.",
    "ask": "When did missing or wrong contact info slow you down?"
  }
},
"4::Master Contact List Discipline": {
  "p1": {
    "on": "This slide says to keep one master contact list for the whole team, because personal copies drift out of sync invisibly. The steps: maintain one master, apply it to scheduling (who gets looped in for which meeting type), check nobody keeps a parallel copy, update the moment something changes, and treat any discrepancy as a reason to reinforce the rule.",
    "say": "One master list. Personal copies drift.",
    "ask": "Does anyone on your team keep their own copy?"
  },
  "p2": {
    "on": "This slide links master-list discipline to calendar and scheduling. It describes a common failure: two assistants keep separate copies, one outdated, and a time-sensitive call goes to the wrong number.",
    "say": "The outdated copy is the one used in a crisis.",
    "wrap": "One source of truth, updated immediately, for the whole team.",
    "scenario": "Opposing counsel's direct line changed last week. You updated your copy, but the paralegal's copy still has the old one, and she's scheduling tomorrow's meet-and-confer. What went wrong, and what's the fix?"
  },
  "s1": {
    "on": "This section's rule: one master list the whole team uses; personal copies drift invisibly.",
    "say": "One master list."
  },
  "s2": {
    "on": "These steps enforce it: one list, applied to scheduling too, checks for parallel copies, immediate updates, and treating any discrepancy as a reason to reinforce the rule.",
    "say": "No private copies."
  },
  "s3": {
    "on": "This section applies it to scheduling and describes the real failure: two assistants with different copies, and an urgent call goes to a dead number.",
    "say": "Speed fails when the number is wrong."
  }
},
"4::Client Relationship Management": {
  "p1": {
    "on": "This slide says CRM is the discipline of keeping and growing a relationship after first contact; the value is logging every interaction, and the work is proactive. The steps: log each interaction right away (discussed, promised, next step), segment by relationship stage, set follow-up reminders tied to specific commitments, and check history before any client contact.",
    "say": "Log what was promised, and set the reminder that keeps the promise.",
    "ask": "What would you check in the CRM before calling a client?"
  },
  "p2": {
    "on": "This slide warns against treating the CRM as a place data goes to die. It says a quiet relationship costs more to reactivate than one that got a timely check-in, and a missed promised follow-up damages trust more than never offering it.",
    "say": "A broken follow-up promise costs more than no promise.",
    "wrap": "Log everything, segment, set specific reminders and check history first.",
    "scenario": "A client you signed three months ago was never followed up with. They just emailed a question that suggests they're looking at a competitor. Answer only the question, or use it to rebuild the relationship? What do you say?"
  },
  "s1": {
    "on": "This section defines CRM as maintaining the relationship after the first yes: log every interaction and reach out proactively at meaningful moments.",
    "say": "Everything before gets the yes; CRM keeps it."
  },
  "s2": {
    "on": "These steps are the practice: log each interaction right away, segment by stage, set follow-ups tied to specific commitments, and review history before every contact.",
    "say": "Reference something specific from last time."
  },
  "s3": {
    "on": "This section warns against a CRM that's never updated, says proactive check-ins are cheaper than recovery, and says a missed promised follow-up damages trust.",
    "say": "Log every promise as a task."
  }
},
"4::CRM Software Fundamentals": {
  "p1": {
    "on": "This slide says a CRM is only as good as what goes in. Every CRM is built on contacts, deals and activities, and it must be the single source of truth for a lead's status. The steps: map pipeline stages to your real process before starting, add a custom field instead of burying data in notes, and use the CRM's own reminders instead of a separate to-do list.",
    "say": "Contacts, deals, activities: learn those three and most CRMs make sense.",
    "ask": "What happens when a lead's real status lives in someone's head?"
  },
  "p2": {
    "on": "This slide warns against duplicate records, so search before creating a contact. It says to keep deal stages honest, because moving a deal forward on hope corrupts forecasts, and to run a monthly hygiene pass closing or reactivating deals idle for 60+ days.",
    "say": "Stages move on facts, not hope.",
    "wrap": "One source of truth, honest stages and a monthly cleanup.",
    "scenario": "You inherit a CRM with 40 open deals, most untouched in months, and Elias wants an accurate pipeline forecast by end of day. What's your triage process for getting to a number you can stand behind?"
  },
  "s1": {
    "on": "This section says a CRM is only as good as its data, every CRM uses contacts, deals and activities, and it must be the single source of truth.",
    "say": "Three objects: contacts, deals, activities."
  },
  "s2": {
    "on": "These steps set it up: map pipeline stages to the real process, add custom fields rather than stuffing notes, and use its reminders instead of a separate list.",
    "say": "No parallel to-do list."
  },
  "s3": {
    "on": "This section warns about duplicates, asks for honest deal stages, and suggests a monthly hygiene pass closing deals idle 60+ days.",
    "say": "Search before creating a contact."
  }
},
"4::Data Hygiene & Deduplication": {
  "p1": {
    "on": "This slide says duplicate and stale records split a contact's history, data decays constantly, and bad data costs more over time and hurts email deliverability. The steps: search by name, company and email domain before adding a contact, preserve the full history from both records when merging, and clean out bounces and unsubscribes regularly.",
    "say": "Merge forward and keep the history from both records.",
    "ask": "How would you search for a duplicate beyond an exact name match?"
  },
  "p2": {
    "on": "This slide warns against merging by just deleting the record with less information. It says to standardize entry formats from the start so duplicates are easier to spot, and to schedule hygiene as a recurring task, because lists degrade again within months.",
    "say": "Standard formats make duplicates visible.",
    "wrap": "Search before adding, merge forward and clean on a schedule.",
    "scenario": "You find three records that seem to be the same person at the same company, each with different interaction history. How do you confirm they're the same person before merging, and what if you're not sure?"
  },
  "s1": {
    "on": "This section says duplicates fragment history, data decays on its own, and bad data costs more over time.",
    "say": "Data rots unless tended."
  },
  "s2": {
    "on": "These steps are the hygiene: search broadly before adding, merge while keeping all history, and clean up bounces and unsubscribes.",
    "say": "Search by name, company and domain."
  },
  "s3": {
    "on": "This section warns against deleting instead of merging, asks for standard formatting from the start, and says to schedule hygiene as a recurring task.",
    "say": "Merge forward, never discard."
  }
},
"4::Sales Mindset": {
  "p1": {
    "on": "This slide says supporting business development needs the right mindset: a sales conversation is about solving a real problem for the other person, not persuading them, and rejection is the normal outcome, treated as information. The steps: be clear on the recipient's problem, be genuinely curious, track outreach honestly including rejections, and separate the outcome from personal feelings.",
    "say": "A \"no\" is information, not a verdict on you.",
    "ask": "What problem does our outreach actually solve for the recipient?"
  },
  "p2": {
    "on": "This slide lists pitfalls and habits: don't treat every attempt as equally important, never let a \"no\" change your tone for the next contact, curiosity has to be genuine because insincerity shows in writing, and the same skills apply internally when persuading a colleague or executive.",
    "say": "Curiosity can't be faked, not even in writing.",
    "wrap": "Lead with their problem, stay curious and track honestly.",
    "scenario": "You've sent 15 cold outreach emails this week and received zero replies. What would a sales mindset say to do next, and what would the opposite look like right now?"
  },
  "s1": {
    "on": "This section says sales support needs the mindset, not just the tasks: solving a real problem for the other person, and treating rejection as normal information.",
    "say": "Solve their problem; a no is information."
  },
  "s2": {
    "on": "These steps apply it: know their problem before outreach, be genuinely curious, track outcomes honestly, and separate the result from personal feelings about rejection.",
    "say": "Write for one specific person.",
    "ask": "What problem might a prospect actually have?"
  },
  "s3": {
    "on": "This section warns against treating every lead equally or taking a no personally, says curiosity must be real, and applies the mindset to internal buy-in too.",
    "say": "The same skill works inside the firm."
  }
},
"4::Cold Calling, Appointment Setting & Lead Generation": {
  "p1": {
    "on": "This slide covers cold calling: research the specific person or business first, open with a short value proposition tailored to what you found, aim for a warmer second conversation rather than the close, handle contact lists with the same discretion as email, and log every call outcome immediately.",
    "say": "A specific, current reference beats a script.",
    "ask": "What's the realistic goal of a first cold call?"
  },
  "p2": {
    "on": "This slide says to open with value, not a pitch; the goal of a cold call is almost never the close but a warmer second conversation. It places cold calling, appointment setting and lead generation alongside secure document handling as core Day 4 skills.",
    "say": "The goal is the second conversation, not the sale.",
    "wrap": "Research first, open with value, and log every call.",
    "scenario": "You're calling the office manager of a 12-doctor medical practice about Elias's employment-law services. You found they just opened a second location. Deliver the first 20 seconds of the call."
  },
  "s1": {
    "on": "This section's rule: research before calling, because a specific, current reference beats a script.",
    "say": "Research first."
  },
  "s2": {
    "on": "These steps are the call: research the person, open with a tailored value proposition, aim for a warmer second conversation, handle contact lists discreetly, and log the outcome right away.",
    "say": "The goal is the next conversation, not the close.",
    "ask": "What would you research before a cold call?"
  },
  "s3": {
    "on": "This section says to open with value, not a pitch, that the goal is rarely the close, and that outbound lists need the same discretion as confidential documents.",
    "say": "Same discretion as email."
  }
},
"4::How to Generate Leads for Business": {
  "p1": {
    "on": "This slide gives four steps: Identify Sources (referrals, past-client re-engagement, networking, directories, inbound content), Qualify the Lead (fit, need, authority, timeline), Make First Contact (research-backed, specific, brief), and Track and Follow Up (log every lead into the contact list).",
    "say": "Find, qualify, contact, track.",
    "ask": "Where have your own best professional leads come from?"
  },
  "p2": {
    "on": "This slide separates lead generation from cold calling: cold calling works a lead you already have, lead generation finds it. It lists law-firm lead sources: referral sources (past clients, attorneys, accountants, advisors), public sources (bar directories, court filings, business registries) and inbound (website, webinars, articles). Log each with its source.",
    "say": "Log where every lead came from, so the firm learns which channels work.",
    "wrap": "Draw from several channels, qualify early, and track every lead by source.",
    "scenario": "Name three referral sources Thorne & Partners should be tracking, and what one small action this month would warm up each."
  },
  "s1": {
    "on": "This section says lead generation is sequential: the steps go in order.",
    "say": "In order."
  },
  "s2": {
    "on": "These steps are the sequence: Identify sources across channels, Qualify on fit, need, authority and timeline, Make first contact that's researched and brief, and Track and follow up.",
    "say": "Identify, qualify, contact, track."
  },
  "s3": {
    "on": "This section separates the two: lead generation finds the lead; cold calling works a lead you already have.",
    "say": "Find it first, then call it."
  },
  "s4": {
    "on": "This section lists sources: referrals (usually the best), public and professional directories and filings, and inbound interest, each logged by where it came from.",
    "say": "Track which channel each lead came from.",
    "ask": "Which source would you trust most?"
  }
},
"4::Lead Generation & Data Sourcing": {
  "p1": {
    "on": "This slide calls data sourcing the research layer under lead generation, where data quality decides everything downstream. The steps: use enrichment and research tools (LinkedIn Sales Navigator, company sites, directories) to confirm role and context, verify contact details through the primary source, organize leads in a CRM with qualifying details, and focus on leads that meet real criteria.",
    "say": "A great message sent to the wrong contact is wasted.",
    "ask": "Which tool would you use to confirm someone's current role?"
  },
  "p2": {
    "on": "This slide warns that outreach referencing an old job title or changed company undermines credibility. It says to use only legitimate professional information, refresh lists regularly (six months old is stale), and prefer a small list of well-qualified leads over a large, loosely verified one.",
    "say": "Fifty verified leads beat 500 guesses.",
    "wrap": "Verify at the source, capture qualifiers and keep the data fresh.",
    "scenario": "You're asked for 50 leads by end of day. How do you balance verification against the volume target, and where won't you cut corners even under time pressure?"
  },
  "s1": {
    "on": "This section says data sourcing is the research layer under lead generation, and data quality decides everything downstream.",
    "say": "Bad data wastes a good message."
  },
  "s2": {
    "on": "These steps are the sourcing: research tools like LinkedIn Sales Navigator, verification through the primary source, organized capture in a CRM, and focus on qualified leads.",
    "say": "Capture the qualifying details when you source."
  },
  "s3": {
    "on": "This section warns against stale data, requires respecting privacy, asks for regular refreshes, and says a small well-sourced list beats a big loose one.",
    "say": "Quality over volume."
  }
},
"4::Lead Quality, Qualifying & Tracking": {
  "p1": {
    "on": "This slide says referrals are consistently the highest-quality leads because they come with built-in trust. The steps: actively ask satisfied clients for introductions, qualify every lead early on fit, need, authority and timeline, log leads the moment they exist, follow through consistently, and feed qualified leads into the contact list.",
    "say": "An untracked lead is a lost lead.",
    "ask": "How often do you actually ask satisfied clients for referrals?"
  },
  "p2": {
    "on": "This slide warns that not every lead deserves equal effort, so qualify early. It says a lead that isn't tracked doesn't exist in practice, which is why lead generation and the contact list work together. It ends with a discussion prompt comparing good and poor follow-through.",
    "say": "Qualify early, and put your effort where the fit is.",
    "wrap": "Ask for referrals, qualify fast, log immediately and follow through.",
    "scenario": "Share one business that followed up on a lead well and one that let a promising contact go cold. What exactly was different?"
  },
  "s1": {
    "on": "This section says referrals are the highest-quality leads, and asking satisfied clients for them is what makes it a habit.",
    "say": "Ask for referrals; don't wait for them."
  },
  "s2": {
    "on": "These steps are the habit: ask for referrals, qualify early, log every lead immediately, follow through consistently, and feed leads into the contact list.",
    "say": "The difference is almost always the follow-through."
  },
  "s3": {
    "on": "This section warns that not every lead deserves equal effort, that an untracked lead doesn't exist, and closes with a discussion prompt.",
    "say": "Qualify early, track everything.",
    "ask": "What made one business's follow-through work where another's didn't?"
  }
},
"4::Appointment Setting (BANT/MEDDPICC)": {
  "p1": {
    "on": "This slide explains qualifying before scheduling. BANT (Budget, Authority, Need, Timeline) is the quick check. MEDDPICC (Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition) is for complex, high-stakes deals. The steps: book only qualified leads, use Calendly or Microsoft Bookings, and confirm the agenda and send a reminder 24–48 hours ahead.",
    "say": "Qualify before you book. An unqualified meeting wastes everyone's time.",
    "ask": "When would you use BANT, and when MEDDPICC?"
  },
  "p2": {
    "on": "This slide warns that a quick yes isn't the same as a real fit. Use BANT for simple cases and MEDDPICC for complex ones. Never overpromise what the meeting covers, and confirm close to the meeting, because no-shows are among the most avoidable failures.",
    "say": "A fast yes isn't a qualified yes.",
    "wrap": "Qualify with the right framework, set honest expectations and remind before the meeting.",
    "scenario": "A prospect replies enthusiastically and wants a call right away, but you don't know if they have budget or authority. Schedule it, qualify first, or something in between? Say what you'd write back."
  },
  "s1": {
    "on": "This section defines appointment setting as scheduling useful meetings with qualified prospects, and introduces BANT and MEDDPICC as qualifying frameworks.",
    "say": "Qualify before you schedule."
  },
  "s2": {
    "on": "These steps apply them: BANT for quick checks, MEDDPICC for complex deals, scheduling tools for qualified leads only, and confirmed agendas with reminders.",
    "say": "Two or more BANT gaps means not yet.",
    "ask": "What do the letters in BANT stand for?"
  },
  "s3": {
    "on": "This section warns that a fast yes isn't a fit, matches the framework to the stakes, and warns against overpromising and skipping reminders.",
    "say": "Remind close to the time; no-shows are avoidable."
  }
},
"4::Cold Outbound Execution": {
  "p1": {
    "on": "This slide is about the moment research and mindset become an actual message or call. The steps: open with something specific to the recipient, keep the ask small (15 minutes, not \"let's connect sometime\"), log every attempt in the CRM or call tracker, and prepare for likely objections with genuine, unscripted responses.",
    "say": "Specific opener, small ask, logged outcome.",
    "ask": "Why does \"15 minutes next Tuesday\" beat \"let's connect\"?"
  },
  "p2": {
    "on": "This slide warns against reciting a script word for word. It says to listen more than you talk, handle objections gracefully (offer to follow up rather than push), and log every attempt right away, not from memory at the end of the day.",
    "say": "A script is a starting point, not a performance.",
    "wrap": "Listen more than you talk, and log every attempt immediately.",
    "scenario": "On a cold call, the prospect says \"I'm not interested\" right after your opening line. Push on, ask a clarifying question, or end gracefully? What would you want to know to decide?"
  },
  "s1": {
    "on": "This section says execution is where research and mindset become the actual message or call; specifics and a clear next step matter more than volume.",
    "say": "This is where the prep pays off."
  },
  "s2": {
    "on": "These steps are the execution: a specific opening, a small ask like 15 minutes, every attempt tracked, and objections anticipated.",
    "say": "Small, specific ask.",
    "ask": "What's a good 15-minute ask for a prospect?"
  },
  "s3": {
    "on": "This section warns against reciting a script, and asks you to listen more than talk, handle objections gracefully, and log every attempt immediately.",
    "say": "A script is a starting point."
  }
},
"4::Handling Sales Objections Beyond the Script": {
  "p1": {
    "on": "This slide says scripted responses only work when the objection matches the script. Most objections are really about information, trust or timing, and pushing past a real no damages the relationship. The steps: ask one clarifying question first, acknowledge the objection specifically, and if it's timing, get a specific follow-up date.",
    "say": "Understand the objection before you answer it.",
    "ask": "Which of the three is behind most objections you've heard?"
  },
  "p2": {
    "on": "This slide warns that some objections are accurate: the offer may not fit right now. It says never to argue with a stated concern (correct information instead) and to log the prospect's actual words in the CRM, not just \"objected.\"",
    "say": "Correct the facts, never their right to the concern.",
    "wrap": "Clarify, acknowledge, and get a date if it's timing.",
    "scenario": "A prospect says, \"We already have a vendor for this.\" That could mean they're happy, under contract, or just ending the call politely. What's your next question, and how does the answer change your approach?"
  },
  "s1": {
    "on": "This section says the real skill is diagnosing what an objection means (usually information, trust or timing) and telling a real no from a reflexive one.",
    "say": "Diagnose before you respond."
  },
  "s2": {
    "on": "These steps handle it: ask one clarifying question, acknowledge before addressing, and get a specific follow-up date for timing objections.",
    "say": "One question first.",
    "ask": "What would you ask if a prospect says 'not now'?"
  },
  "s3": {
    "on": "This section warns that some objections are simply accurate, not to argue with a concern, and asks to log the exact wording.",
    "say": "Correct information; don't contest concerns."
  }
},
"4::Pipeline Reporting & Forecasting Basics": {
  "p1": {
    "on": "This slide says a pipeline report is only as good as its deal stages, forecasting is applying consistent, honest probabilities, and a weekly review catches drift. The steps: assign realistic close probabilities per stage based on history, separate \"committed\" from \"best case,\" and flag deals stuck in one stage too long.",
    "say": "Committed and best case are different numbers. Report both.",
    "ask": "Why is the raw total of open deals misleading?"
  },
  "p2": {
    "on": "This slide warns that an unweighted total wildly overstates what will close, and a single large deal shouldn't dominate the story without its risk flagged. It says to keep the reporting cadence and format consistent every week.",
    "say": "Weight by probability and flag the big risky deal.",
    "wrap": "Honest stages, weighted numbers, a consistent weekly cadence.",
    "scenario": "Elias asks for this quarter's realistic revenue forecast. Two early-stage deals make up 60% of the raw total. How do you present the number so it's useful, not misleading?"
  },
  "s1": {
    "on": "This section says a forecast is only as good as its deal stages, forecasting applies honest probabilities, and weekly reviews catch drift.",
    "say": "Honest stages, honest forecast."
  },
  "s2": {
    "on": "These steps are the method: realistic probability per stage, committed kept separate from best case, and stuck deals flagged.",
    "say": "Committed isn't best case."
  },
  "s3": {
    "on": "This section warns against unweighted totals and one big deal dominating, and asks for consistent weekly reporting.",
    "say": "Same day, same format."
  }
},
"4::Email Marketing vs. Cold Outreach": {
  "p1": {
    "on": "This slide separates the two, with a diagram. Email marketing is one message to many people who already know the firm, needing a subscribed audience and an unsubscribe. Cold outreach is individual messages to people who don't. The steps: name which it is before sending, route marketing through the email platform and outreach through the attorney's mailbox, keep separate lists, and get attorney approval, since this can count as attorney advertising.",
    "say": "Did they ask to hear from us? That decides which one it is.",
    "ask": "Is a webinar follow-up marketing or outreach?"
  },
  "p2": {
    "on": "This slide warns against adding event attendees or business-card contacts to the newsletter without telling them, and against sending bulk email from the attorney's personal mailbox. It adds that a reply to a marketing email becomes a one-to-one conversation.",
    "say": "Never send a bulk blast from the attorney's own mailbox.",
    "wrap": "Name it, route it correctly, keep the lists separate and get approval.",
    "scenario": "Elias hands you 400 business cards from a legal-tech conference and says \"send everyone our newsletter.\" What do you do instead, and what do you say to Elias?"
  },
  "s1": {
    "on": "This section contrasts marketing (one message to many who know the firm) with cold outreach (one-to-one to people who don't), with different rules, and names mixing them as the top mistake.",
    "say": "Two different tools, two sets of rules."
  },
  "s2": {
    "on": "These steps keep them apart: name which it is, send each through the right channel, keep separate CRM lists with join source, and get attorney approval, since this may be attorney advertising.",
    "say": "Which is it: marketing or outreach?"
  },
  "s3": {
    "on": "This section warns against silently adding event contacts to a newsletter or bulk-sending from the attorney's mailbox, and says a marketing reply becomes a personal conversation.",
    "say": "Answer replies personally."
  }
},
"4::Outreach Compliance Basics": {
  "p1": {
    "on": "This slide says cold outreach is regulated: CAN-SPAM for email, and do-not-call and TCPA rules for calls and texts. The rules differ by channel and should be confirmed with firm policy or counsel. The steps: confirm the firm's policy before each campaign, always include and honor an opt-out, and keep a record of consent or an existing relationship for every list.",
    "say": "Confirm the policy before the campaign, not after a complaint.",
    "ask": "What's different about texting a prospect versus emailing them?"
  },
  "p2": {
    "on": "This slide warns that a purchased or scraped list isn't automatically safe, because provenance matters for compliance. It says to honor opt-outs and do-not-call requests completely and promptly, and to escalate before sending when you're unsure.",
    "say": "Asking costs far less than a violation.",
    "wrap": "Know the rules per channel, honor opt-outs and document consent.",
    "scenario": "A colleague hands you a conference contact list with no notes on how it was collected. What do you need to know before you're comfortable sending to it?"
  },
  "s1": {
    "on": "This section says outreach is regulated (CAN-SPAM for email, do-not-call and TCPA for phone and text), rules differ by channel, and the firm's policy or counsel is the authority.",
    "say": "Outreach has rules."
  },
  "s2": {
    "on": "These steps comply: confirm the firm's policy, include and honor opt-outs immediately, and keep a record of consent or relationship.",
    "say": "Honor opt-outs at once."
  },
  "s3": {
    "on": "This section warns that bought or scraped lists aren't automatically safe, opt-outs must be honored in full, and says to escalate when unsure.",
    "say": "Asking is cheaper than a violation.",
    "ask": "Who would you ask about compliance at your firm?"
  }
},
"4::Building & Segmenting an Email List": {
  "p1": {
    "on": "This slide says a small list of people who want to hear from the firm beats a large one that doesn't. Every contact needs a recorded source and consent basis, and segmentation sends the right content to each group. The steps: collect only through legitimate channels, tag contacts on entry, build starter segments (Clients, Referral Partners, Prospects) and clean the list quarterly.",
    "say": "Every contact has a source, a date and a consent basis.",
    "ask": "Which three segments would you start with?"
  },
  "p2": {
    "on": "This slide warns against buying or scraping lists and against re-adding anyone who unsubscribed, even if they appear on a new event list. It says to keep opposing parties, adverse witnesses and anyone flagged in conflict checks off every marketing list.",
    "say": "The unsubscribe always wins.",
    "wrap": "Collect legitimately, tag on entry, segment and clean quarterly.",
    "scenario": "A partner wants the next newsletter on a new estate-planning service sent \"to everyone\": 1,800 contacts, including corporate clients and opposing counsel from past matters. How do you segment it, and who should not receive it?"
  },
  "s1": {
    "on": "This section says a small willing list beats a big one, every contact needs a source and consent basis, and segments get different content.",
    "say": "Quality, consent, segments."
  },
  "s2": {
    "on": "These steps build it: legitimate channels only, tags at entry, three starter segments (Clients, Referral Partners, Prospects), and quarterly cleaning.",
    "say": "Tag at entry; it enables everything later."
  },
  "s3": {
    "on": "This section warns never to buy lists or re-add unsubscribers, and says to keep opposing parties and conflicts off every list.",
    "say": "The unsubscribe always wins."
  }
},
"4::Writing Outreach Emails That Get Replies": {
  "p1": {
    "on": "This slide says strong outreach emails are 50–125 words, specific to the recipient and make one easy ask, with an honest, specific subject line. The steps with the diagram: open with why you're writing to them, state the value in their terms in one or two sentences, make one low-friction ask, and close with the attorney's details and an opt-out, then proofread.",
    "say": "Short, specific and one clear ask.",
    "ask": "What's wrong with opening with who the firm is?"
  },
  "p2": {
    "on": "This slide warns against long paragraphs about the firm's history and spam-trigger habits (ALL CAPS, exclamation points, \"guaranteed,\" fake \"Re:\" subject lines, image-only emails). Never state or imply a guaranteed legal outcome, because that can breach attorney advertising rules.",
    "say": "Never promise an outcome in outreach.",
    "wrap": "Their situation first, value in their terms, one small ask.",
    "scenario": "Rewrite this opener live for a founder whose startup just raised a Series A: \"Dear Sir/Madam, Thorne & Partners is a leading full-service law firm founded in 1998 with over 40 attorneys...\""
  },
  "s1": {
    "on": "This section says good outreach is short (50–125 words), specific and one clear ask, with an honest subject line and real personalization.",
    "say": "Short, specific, one ask."
  },
  "s2": {
    "on": "These steps write it: open with why them, give value in their terms, make one low-friction ask, and close with details and opt-out, then proofread.",
    "say": "Why them, what for them, one small ask.",
    "ask": "How would you rewrite 'Let me know if you'd like to learn more'?"
  },
  "s3": {
    "on": "This section warns against firm biographies, spam-trigger habits and any implied guaranteed outcome, which can breach advertising rules.",
    "say": "Never promise an outcome."
  }
},
"4::Email Outreach Sequencing & Follow-Up Cadence": {
  "p1": {
    "on": "This slide says most replies come from follow-ups, not the first email, and each step should add something new, with diminishing returns if it goes on too long. The steps: space follow-ups 3–5 business days apart, vary the angle (offer, proof point, low-pressure question), and end with a clear close-the-loop message.",
    "say": "Every follow-up needs a new reason to reply.",
    "ask": "Why is \"just following up\" weak?"
  },
  "p2": {
    "on": "This slide warns that repeating the same message reads as automated. It says to track reply rate by sequence step to see which step does the work, and to always offer an easy way to opt out.",
    "say": "Make \"no\" easy, or it becomes a complaint.",
    "wrap": "Space it out, change the angle and close the loop.",
    "scenario": "A prospect opened your first three emails but never replied, and one email is left in the sequence. What does the final message say, and what would make you extend the sequence instead?"
  },
  "s1": {
    "on": "This section says most replies come from follow-ups, each should add something new, and too many becomes damaging.",
    "say": "The follow-up does the work."
  },
  "s2": {
    "on": "These steps are the cadence: 3–5 business days apart, a new angle each touch, and a clear closing message.",
    "say": "Close the loop explicitly."
  },
  "s3": {
    "on": "This section warns against repeating the same message, asks to track reply rate by step, and requires an easy opt-out.",
    "say": "Easy to say no."
  }
},
"4::Email Deliverability Basics": {
  "p1": {
    "on": "This slide explains deliverability, meaning reaching the inbox rather than spam, which depends on domain reputation, authentication and engagement. The three DNS records are SPF, DKIM and DMARC. The steps: confirm all three with IT, include a one-click unsubscribe, keep hard bounces under about 2% and complaints well under 0.3%, and warm up new domains gradually.",
    "say": "A damaged domain can send ordinary client emails to spam.",
    "ask": "Who at the firm would you ask about SPF, DKIM and DMARC?"
  },
  "p2": {
    "on": "This slide warns against sending a big campaign to an old, uncleaned list, which can get the account suspended, and against sending from a \"noreply\" address. It recommends separating marketing from day-to-day email, for example with a marketing subdomain.",
    "say": "Protect client email by keeping marketing on its own domain.",
    "wrap": "Authenticate, keep lists clean, watch the numbers and ramp up slowly.",
    "scenario": "After the last newsletter, three clients say firm emails are landing in spam. What do you check first, who do you involve, and what do you pause?"
  },
  "s1": {
    "on": "This section explains deliverability, the SPF, DKIM and DMARC records Gmail and Yahoo require for bulk senders, and how complaints and bounces damage the domain.",
    "say": "Authentication plus reputation."
  },
  "s2": {
    "on": "These steps protect it: confirm the DNS records with IT, use one-click unsubscribe, keep bounces under 2% and complaints under 0.3%, and warm up new senders.",
    "say": "Warm up gradually."
  },
  "s3": {
    "on": "This section warns against blasting old lists and noreply senders, and advises a separate marketing subdomain.",
    "say": "Protect client email from campaign problems."
  }
},
"4::Email Metrics & A/B Testing": {
  "p1": {
    "on": "This slide lists the key metrics: delivery, open, click-through, reply, unsubscribe and conversions such as consultations booked. It notes that Apple Mail Privacy Protection inflates open rates, so clicks and replies are more reliable. A/B testing changes one thing at a time. The steps: pick the goal metric first, test on a random sample, log results and review monthly.",
    "say": "Pick the goal metric before you send, not after.",
    "ask": "Why can't we trust open rates the way we used to?"
  },
  "p2": {
    "on": "This slide warns against declaring a winner from tiny numbers (3 opens on 40 sends is noise) and against judging a newsletter by opens alone. It recommends small, regular tests rather than redesigning after one weak send.",
    "say": "Replies and consultations beat opens.",
    "wrap": "Test one thing, measure what matters and don't over-read small numbers.",
    "scenario": "Subject A got a 42% open rate and 1 reply. Subject B got 31% and 6 replies. Which won, and what do you tell the attorney?"
  },
  "s1": {
    "on": "This section lists key metrics, notes opens are inflated by Apple's privacy feature, and explains A/B testing one change at a time.",
    "say": "Clicks, replies, consultations beat opens."
  },
  "s2": {
    "on": "These steps run it: pick the goal metric first, test one element on a random sample, keep a campaign log, and review monthly against the firm's own averages.",
    "say": "Decide the goal before you send."
  },
  "s3": {
    "on": "This section warns against winners from tiny samples and judging by opens alone, and recommends small, regular tests.",
    "say": "Three opens on forty sends is noise."
  }
},
"4::Law Firm Email Newsletters": {
  "p1": {
    "on": "This slide says a newsletter keeps the firm top of mind between matters, consistency matters more than frequency, and newsletters are attorney communications that may need an \"Attorney Advertising\" label. The steps: agree the cadence and 2–3 recurring sections with the attorney, draft in an approved template, route every issue for sign-off, and send a test before scheduling.",
    "say": "Reliable monthly or quarterly beats bursts and silence.",
    "ask": "What three sections would you put in the firm's newsletter?"
  },
  "p2": {
    "on": "This slide warns against newsletters that are only about the firm; lead with information the reader can use. Never mention a client, matter or outcome without documented consent and attorney approval. Keep an archive of every issue with its approval date.",
    "say": "No client names without documented consent.",
    "wrap": "Plan the cadence, get sign-off, test and archive.",
    "scenario": "Elias wants this month's newsletter to celebrate a big settlement with the client's company in the headline. What do you need before it can go out, and what do you suggest if consent isn't available?"
  },
  "s1": {
    "on": "This section says newsletters keep the firm top of mind, consistency beats frequency, and they're attorney communications that may need a disclaimer.",
    "say": "Reliable beats frequent."
  },
  "s2": {
    "on": "These steps produce it: agree cadence and sections, draft in an approved template, get attorney sign-off with any disclaimer, and test before scheduling.",
    "say": "Attorney sign-off every issue."
  },
  "s3": {
    "on": "This section warns against firm-only content and naming clients without consent, and asks to archive every issue with its approval date.",
    "say": "Lead with something useful to the reader."
  }
},
"4::Email Marketing Tools & Approval Workflow": {
  "p1": {
    "on": "This slide lists the tools (Mailchimp and Constant Contact for newsletters, HubSpot or a CRM for combined tracking, Outlook or Gmail templates for one-to-one) and says a written approval workflow protects the firm. The steps: set up an approved template with footer and disclaimer, follow Draft → Content review → Compliance check → Schedule → Report, schedule in the recipient's business hours, and save every sent version.",
    "say": "Draft, review, compliance check, schedule, report.",
    "ask": "Who in your workflow presses send?"
  },
  "p2": {
    "on": "This slide warns that a \"quick send\" skipping review can go to thousands instantly with the wrong segment or no disclaimer. It says to limit who has send permission and to test the unsubscribe link and every button before scheduling.",
    "say": "One quick unreviewed send can reach thousands.",
    "wrap": "Approved templates, a written workflow, limited send rights and tested links.",
    "scenario": "Elias wants an event invitation sent tonight, and the reviewing associate isn't available until tomorrow. What are your options, and what do you recommend?"
  },
  "s1": {
    "on": "This section names common platforms, calls a written approval workflow protection, and says templates need periodic review.",
    "say": "Tools plus a written workflow."
  },
  "s2": {
    "on": "These steps set it up: an approved template with footer and disclaimer, Draft → Review → Compliance → Schedule → Report, sends timed for business hours, and saved versions.",
    "say": "Draft, review, check, schedule, report."
  },
  "s3": {
    "on": "This section warns that 'just a quick send' can reach thousands with an error, asks to limit send permission, and says to test links before scheduling.",
    "say": "Least privilege applies here too."
  }
},
"4::Email Outreach End-to-End: Research, Write, Follow Up": {
  "p1": {
    "on": "This slide walks through outreach from start to finish. An email is judged in about three seconds on a phone, relevance beats polish, and each email has one job. The steps: research the person and one recent trigger, write a 3–7 word subject line and a 50–125 word body with one small ask, sign off with an opt-out, plan the follow-ups, and stop when they reply or opt out.",
    "say": "Research, one trigger, one small ask, and plan the follow-ups before you send.",
    "ask": "What would count as a good trigger for outreach?"
  },
  "p2": {
    "on": "This slide gives the rules: write about their priorities, add something new in each follow-up, check it on a phone, don't swap only the name in a template, never guilt-trip, and never promise outcomes. It lays out the 3-touch cadence: day 1 trigger and ask, day 3–4 new angle, day 8–10 courteous close-out, then stop and log.",
    "say": "The close-out email often gets the most replies.",
    "wrap": "Three touches, each with something new, then stop and log the outcome.",
    "scenario": "Elias wants to reach the operations director of a regional construction company that just announced a two-state expansion. Your first email got no reply after four days. What does your follow-up say, what new angle does it use, and when do you stop?"
  },
  "s1": {
    "on": "This section says an email is judged in about three seconds on a phone, relevance beats polish, each email has one job, and the sequence is planned up front.",
    "say": "Three seconds, one job."
  },
  "s2": {
    "on": "These steps run it end to end: research a trigger, a 3–7 word subject, a 50–125 word body, sign-off with opt-out, a planned cadence, and stopping on a reply or opt-out.",
    "say": "Research, write, plan the follow-ups, stop on reply.",
    "ask": "What trigger would you look for?"
  },
  "s3": {
    "on": "This section gives the do's and don'ts: 'you' more than 'we', something new in each follow-up, a phone check, and no templates, guilt trips or legal promises.",
    "say": "Only the attorney speaks to a matter."
  },
  "s4": {
    "on": "This section lays out the sequence: Touch 1 on day 1, Touch 2 on day 3–4 with a new angle, Touch 3 on day 8–10 as a courteous close-out, then stop.",
    "say": "Three touches, then stop."
  }
}
});
