/* Day 3 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
"3::Prioritization Frameworks": {
  "steps": "Continuing on, here is our step-by-step how-to framework for putting these into practice:\n1. Start with the Eisenhower Matrix when overwhelmed: Sort your task list by urgency and importance first, so your effort goes toward what actually matters rather than just what feels loudest.\n2. Apply the Pomodoro Technique for execution: Once your priorities are set, keep your focus with 25 minutes of dedicated work followed by a 5-minute break, and take a longer rest after four cycles.\n3. Protect focus with Time Blocking: Set dedicated blocks for deep work, separate from email and admin, so the two don't compete moment to moment.\n4. Periodically evaluate with the 80/20 Rule: Step back and identify which 20% of your activities produce 80% of your results, then adjust where your time goes.\n5. Build one habit at a time: Don't try to run all four from day one. Pick the framework that fixes your biggest gap right now, make it a habit, then layer in the next.",
  "p1": {
    "on": "This slide introduces four prioritization frameworks, with a diagram. The Eisenhower Matrix is for an overwhelming list, Pomodoro (25 minutes on, 5 off) for focus, Time Blocking for protecting deep work, and the 80/20 Rule for finding the 20% of work that drives 80% of results. The last step says to start with the one that fixes your biggest gap.",
    "say": "Four frameworks, one at a time. Pick the one that fixes your biggest gap first.",
    "ask": "Who already uses one of these, even without knowing its name?"
  },
  "p2": {
    "on": "This slide explains when to choose each framework. Eisenhower is for deciding what not to do, Pomodoro is for when priorities are clear but focus is the problem, and Time Blocking protects the few tasks that matter most this week. The callout says executives spend 30–40% of their time in email, and good triage can reclaim 10+ hours a week.",
    "say": "Match the framework to the problem: too much, can't focus, or no protected time.",
    "wrap": "Choose one framework, build the habit, then layer in the next.",
    "scenario": "Monday morning: Elias has 14 open items, including a brief due Wednesday, three client callbacks, an expense report and a conference RSVP. Sort them in the Eisenhower Matrix out loud. What gets delegated or dropped?"
  },
  "s1": {
    "on": "This section lays out four frameworks: the Eisenhower Matrix (urgency vs. importance), Pomodoro (25 on, 5 off), Time Blocking (deep work separate from email) and the 80/20 Rule.",
    "say": "Four tools, each for a different problem."
  },
  "s2": {
    "on": "These steps say when to reach for each: Eisenhower when the list is overwhelming, Pomodoro once priorities are clear, Time Blocking to protect the top work, 80/20 to step back. Start with one, not all four.",
    "say": "Pick the one framework that fixes your biggest gap right now.",
    "ask": "Which of the four would help you most this week?"
  },
  "s3": {
    "on": "This section gives the stakes: executives spend 30–40% of their time in email, and good triage can reclaim 10+ hours a week.",
    "say": "Ten hours a week is worth protecting."
  },
  "s4": {
    "on": "This section matches each framework to its best use: Eisenhower to decide what not to do, Pomodoro when focus is the problem, Time Blocking to lock in this week's few key tasks.",
    "say": "Match the tool to the problem."
  }
},
"3::Time Tracking Done Right": {
  "steps": "Let's walk through how to track time so the record actually holds up:\n1. Log as you work: Record time when you do the task, not at the end of the week. Rebuilding a week from memory is where most tracking mistakes creep in.\n2. Write specific descriptions: Every entry should make sense to someone reviewing it later. A vague placeholder just to fill the field doesn't help anyone.\n3. Log the small tasks too: Don't skip the five-minute jobs because they feel too minor. Over a year, those are exactly what add up to real underbilling.\n4. Include communications: Calls and emails you handle on someone's behalf are real time, and they're the category people forget most often.\n5. Build a Weekly Time Summary: Do it even for non-billable work. It shows where your time actually goes, not where you assume it goes.",
  "p1": {
    "on": "This slide lists the common time-tracking mistakes: logging at week's end, vague descriptions, underbilling small tasks and forgetting communications. The steps with the diagram say to log as you work, write specific entries, log small tasks, include calls and emails, and build a Weekly Time Summary.",
    "say": "Log it when you do it. Memory at the end of the week is where billing goes wrong.",
    "ask": "Which of these mistakes do you think costs the most money over a year?"
  },
  "p2": {
    "on": "This slide teaches how to write a useful time entry: verb + object + purpose, for example \"Drafted deposition notice for Harlow matter; circulated to counsel for review.\" It also says to record in the firm's increments (often 0.1 hour), round honestly, and tag the client or matter as you log.",
    "say": "Verb, object, purpose, and tag the matter while you log it.",
    "wrap": "Real-time, specific, matter-tagged entries protect the firm's billing.",
    "scenario": "Your entry for yesterday reads \"Emails — 1.0.\" Rewrite it as three proper entries using verb + object + purpose, tagged to the right matters."
  },
  "s1": {
    "on": "This section names the common mistakes: logging at week's end, vague descriptions, underbilling small tasks and forgetting communications.",
    "say": "Four mistakes, all avoidable."
  },
  "s2": {
    "on": "These steps fix each one: log as you work, write specific descriptions, log the small tasks, include calls and emails, and build a weekly summary.",
    "say": "Log it now, log it specifically, log it all.",
    "ask": "When do you usually log your time?"
  },
  "s3": {
    "on": "This section asks for a Weekly Time Summary even for non-billable work, because it shows where time actually goes.",
    "say": "The summary shows the truth."
  },
  "s4": {
    "on": "This section gives the entry formula (verb + object + purpose), honest rounding in the firm's increments, and tagging the client/matter as you log.",
    "say": "Verb, object, purpose, matter, every entry."
  }
},
"3::Time Management": {
  "steps": "Here is our four-step cycle for turning priorities into protected time:\n1. Decide: Before you touch the calendar, decide what actually deserves protected time this week. That's a prioritization call, not a scheduling one.\n2. Block: Turn that decision into a real calendar block, and do it before the day fills up with other people's requests.\n3. Protect: Defend that block the way you'd defend any other commitment. A calendar entry with nothing protecting it isn't really management.\n4. Review: Check each week whether the protected time actually held, or whether it kept losing to whatever felt urgent in the moment.",
  "p1": {
    "on": "This slide lays out time management as four steps in order: Decide what deserves protected time this week, Block it on the calendar before the day fills, Protect it like any other commitment, and Review weekly whether it held.",
    "say": "Decide, Block, Protect, Review, in that order.",
    "ask": "Which step do you usually skip?"
  },
  "p2": {
    "on": "This slide separates time management from calendar management. Time management decides what deserves time; calendar management makes sure the calendar reflects and protects that decision. It's the bridge to the Calendar Management topic and to the tool later today.",
    "say": "Time management decides. Calendar management protects the decision.",
    "wrap": "Priorities only count once they're blocked and defended on the calendar.",
    "scenario": "Elias says his top priority this week is the Harlow summary judgment brief, but his calendar shows no time for it. Walk through Decide, Block, Protect, Review for his week."
  },
  "s1": {
    "on": "This section says time management is sequential: follow the steps in order, not as a menu.",
    "say": "Order matters here."
  },
  "s2": {
    "on": "These steps are the sequence: Decide what deserves protected time, Block it before the day fills, Protect it like any commitment, and Review weekly whether it held.",
    "say": "Decide, Block, Protect, Review.",
    "ask": "Which step breaks down most often for you?"
  },
  "s3": {
    "on": "This section separates the two skills: time management decides what deserves time; calendar management makes the calendar reflect and protect that decision.",
    "say": "Deciding and protecting are different jobs."
  }
},
"3::When Time Management Fails Despite a Clean Calendar": {
  "steps": "So how do you diagnose a week that went wrong even though the calendar looked clean? Here are the steps:\n1. Look for reactive-meeting saturation: Don't just check for conflicts. A conflict-free calendar can still be packed with low-value reactive meetings that crowd out the real priorities.\n2. Confirm protected space exists: Make sure there's actual room for this week's most important work, not just that no two events overlap.\n3. Apply the same check to travel weeks: A trip only works if the calendar before, during and after it was managed with the same discipline as the itinerary.\n4. Diagnose the failure: Ask whether it was the decision, meaning the wrong priorities were set, or the protection, meaning the right priorities weren't defended. Each needs a different fix.\n5. Review it weekly: Don't wait for something to visibly break. A clean calendar with no protected priority time will quietly fail the same way every week until someone checks.",
  "p1": {
    "on": "This slide explains that a calendar with no conflicts can still fail if it's packed with reactive meetings and has no protected space for important work. The steps with the diagram: check for reactive-meeting saturation, confirm protected space exists, apply the same check to travel weeks, and diagnose a failed week as a decision problem or a protection problem.",
    "say": "No conflicts isn't the same as a well-managed week.",
    "ask": "Think of a week where the calendar looked fine but the real priorities didn't get done. What broke?"
  },
  "p2": {
    "on": "This slide connects this to travel: a trip only works if the calendar before, during and after it was managed with the same discipline. It ends with the discussion prompt about a week that looked fine on paper and asks whether the decision or the protection broke.",
    "say": "Travel weeks need the same protection before, during and after.",
    "wrap": "Diagnose failed weeks as decision or protection, and review weekly, not only when something breaks.",
    "scenario": "Share a real week where your calendar looked fine on paper but the actual priorities still didn't get done. Was it the decision or the protection that broke?"
  },
  "s1": {
    "on": "This section warns that a conflict-free calendar can still fail if it's packed with reactive meetings and has no protected space for priority work.",
    "say": "No conflicts doesn't mean no problems."
  },
  "s2": {
    "on": "These steps are the check: look for reactive-meeting saturation, confirm protected space exists, apply the same check to travel weeks, diagnose whether the decision or the protection failed, and review weekly.",
    "say": "Was it the decision or the protection?"
  },
  "s3": {
    "on": "This section ties it to travel (a trip only works if the calendar around it is managed too) and poses the discussion prompt.",
    "say": "Think of a week that looked fine on paper but still failed.",
    "ask": "What broke, the decision or the protection?"
  }
},
"3::Calendar Management That Holds": {
  "steps": "Here's our step-by-step for a calendar that stays reliable all week:\n1. Centralize on one synced calendar: Make it the single source of truth. A second, unofficial calendar is exactly where conflicts breed unnoticed.\n2. Build in buffers and automate the routine: Leave space between commitments instead of booking back-to-back, and use tools like Calendly or Doodle so routine scheduling doesn't need endless back-and-forth.\n3. Connect the CRM: If the firm uses Salesforce, HubSpot or Zoho, keep scheduling data there too, so it isn't scattered across disconnected tools.\n4. Protect deep-work blocks: Treat them as seriously as meetings. Managing the executive's energy matters as much as managing their time.\n5. Review weekly for drift: A calendar that's clean on Monday can quietly collect conflicts by Friday if nobody checks it.",
  "p1": {
    "on": "This slide covers a calendar that holds up over time, with a diagram. Use one synced calendar as the single source of truth, build buffers between commitments, automate routine scheduling with Calendly or Doodle, centralize scheduling in the CRM if the firm uses one, protect deep-work blocks, and review weekly for drift.",
    "say": "One calendar, buffers built in, and a weekly check for drift.",
    "ask": "Does anyone here keep a second, unofficial calendar?",
    "wrap": "A second unofficial calendar is where conflicts breed. Centralize, buffer and review weekly.",
    "scenario": "Live exercise: on the sample calendar on screen, find every conflict and every missing buffer, then say what you'd change first."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "A second unofficial calendar is where conflicts breed. Centralize, buffer and review weekly.",
    "scenario": "Live exercise: on the sample calendar on screen, find every conflict and every missing buffer, then say what you'd change first."
  },
  "s1": {
    "on": "This section's core rule is one synced calendar; a second unofficial one is where conflicts breed.",
    "say": "One calendar, one source of truth."
  },
  "s2": {
    "on": "These steps make it hold: one system, explicit buffers, scheduling tools like Calendly, CRM scheduling in one place, protected deep-work blocks, and a weekly drift check.",
    "say": "Clean on Monday can be messy by Friday; check it.",
    "ask": "How many calendars does your executive really use?"
  }
},
"3::Calendar Conflict & Prioritization Discipline": {
  "steps": "When a conflict shows up, here's the step-by-step for handling it:\n1. Tell the executive right away: Never rebook or decline on their behalf without checking first. They may have context you don't.\n2. Weigh strategic importance, not booking order: A board update outranks a routine check-in, no matter which was scheduled first.\n3. Present the trade-off with a recommendation: Don't silently pick a side, and don't just hand the problem back. Frame the choice and say what you'd do.\n4. Document the decision: Keep a clear record of why one commitment won over the other.\n5. Confirm with both parties: Let everyone affected know promptly. A resolved conflict that isn't communicated just becomes a second, quieter conflict.",
  "p1": {
    "on": "This slide sets the conflict rules, with a diagram. Tell the executive about every conflict immediately and never rebook or decline without checking first. Rank commitments by strategic importance, not booking order. Present the trade-off with a recommendation, document the resolution, and confirm it with both parties.",
    "say": "Flag it immediately, rank by importance, recommend, then confirm with both sides.",
    "ask": "Why not just decline the less important meeting yourself?",
    "wrap": "A board update outranks a routine check-in, whichever was booked first.",
    "scenario": "Elias is double-booked Thursday at 2 p.m.: a standing check-in with an associate, booked three weeks ago, and a call with a new client's general counsel, requested this morning. What does \"strategic importance\" mean here, and what do you tell Elias?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "A board update outranks a routine check-in, whichever was booked first.",
    "scenario": "Elias is double-booked Thursday at 2 p.m.: a standing check-in with an associate, booked three weeks ago, and a call with a new client's general counsel, requested this morning. What does \"strategic importance\" mean here, and what do you tell Elias?"
  },
  "s1": {
    "on": "This section's rule: tell the executive about every conflict immediately, and never rebook or decline for them without asking, since they may know something you don't.",
    "say": "Inform first, never decide alone."
  },
  "s2": {
    "on": "These steps are the discipline: flag right away, weigh by strategic importance not booking order, present the trade-off with a recommendation, document the resolution and confirm with both parties.",
    "say": "Bring the trade-off and your recommendation.",
    "ask": "What would you recommend if a board update clashed with a routine check-in?"
  }
},
"3::Energy Management vs. Time Management": {
  "steps": "Here's how to put energy management into practice, step by step:\n1. Map the energy pattern: Identify your own, or your executive's, predictable rhythm: the sharp-focus window, the mid-afternoon dip, and any second wind.\n2. Protect the sharp window: Save it for the work that genuinely needs it. That's a real scheduling decision, not a luxury you give up when the calendar fills.\n3. Check high-stakes items against low-energy times: Before confirming a negotiation or a critical decision, make sure it isn't landing in a known low-energy window.\n4. Flag the risk when you can't avoid it: If it has to go in a low-energy slot, say so. An open slot isn't automatically a neutral slot.\n5. Revisit the pattern: Energy rhythms shift with role changes, travel and life circumstances, so don't treat them as fixed forever.",
  "p1": {
    "on": "This slide contrasts two questions: time management asks \"when should this happen?\" and energy management asks \"can I do this well right now?\" The steps with the diagram: identify the daily energy pattern, protect the sharp-focus window, check high-stakes items against low-energy windows, and flag the risk if one must land there.",
    "say": "A free slot isn't neutral if it falls in someone's worst hour.",
    "ask": "What's your own sharpest hour of the day?",
    "wrap": "Put the hardest work in the sharpest window, and flag it when you can't.",
    "scenario": "Opposing counsel proposes 4 p.m. Friday for a settlement negotiation, and you know Elias fades late in the day after a full week. What do you say to Elias, and what do you propose instead?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Put the hardest work in the sharpest window, and flag it when you can't.",
    "scenario": "Opposing counsel proposes 4 p.m. Friday for a settlement negotiation, and you know Elias fades late in the day after a full week. What do you say to Elias, and what do you propose instead?"
  },
  "s1": {
    "on": "This section contrasts the two questions: time management asks when; energy management asks whether you can do it well right now.",
    "say": "Most people only plan around the first question."
  },
  "s2": {
    "on": "These steps apply it: find the energy pattern, protect the sharp-focus window, check high-stakes items against low-energy windows, flag the risk when you can't avoid one, and revisit as rhythms shift.",
    "say": "An open slot isn't a neutral slot.",
    "ask": "When is your sharpest hour of the day?"
  }
},
"3::Handling Interruptions Without Losing the Day": {
  "steps": "Here's our four-step method for handling an interruption without losing the day:\n1. Triage in seconds: Ask yourself whether it's genuinely urgent, or whether it just feels urgent because it's happening right now.\n2. Capture, don't solve: If it isn't truly urgent, write it down somewhere you'll actually see it later. Don't trust your memory.\n3. Return deliberately: Go back and finish the thought you were on before the interruption, instead of abandoning it.\n4. Batch the non-urgent: Handle everything you captured together in one block later, rather than one at a time as it arrives.",
  "p1": {
    "on": "This slide gives four steps for interruptions: Triage in Seconds (truly urgent, or does it just feel that way?), Capture, Don't Solve (write it down where you'll see it), Return Deliberately (finish the thought you were on), and Batch the Non-Urgent (handle captured items in one block later).",
    "say": "Triage, capture, return, batch.",
    "ask": "How long does it take you to get back to full focus after an interruption?"
  },
  "p2": {
    "on": "This slide explains the hidden cost: a two-minute interruption can cost fifteen minutes of real focus. It also says not every interruption is urgent; it just feels urgent because it's happening now. Telling the difference in the first few seconds is the skill.",
    "say": "Two minutes of interruption, fifteen minutes to recover.",
    "wrap": "Decide in seconds whether it's urgent, and capture everything else for later.",
    "scenario": "You're halfway through proofing a filing due at 5 p.m. when a colleague stops by about next month's office lunch. Walk through the four steps out loud."
  },
  "s1": {
    "on": "This section says handling interruptions is sequential: follow the steps in order.",
    "say": "Four steps, in order."
  },
  "s2": {
    "on": "These steps are the sequence: Triage in seconds, Capture don't solve, Return deliberately, and Batch the non-urgent.",
    "say": "Triage, capture, return, batch.",
    "ask": "What interrupts you most often?"
  },
  "s3": {
    "on": "This section gives the hidden cost (a two-minute interruption can cost fifteen minutes of focus) and the real skill: telling urgent from merely present in the first few seconds.",
    "say": "Present isn't the same as urgent."
  }
},
"3::The Two-Minute Rule": {
  "steps": "Here's how to apply the Two-Minute Rule, step by step:\n1. Estimate honestly: When a task lands, ask whether it will genuinely take under two minutes, not whether you hope it will.\n2. If it qualifies, do it now: Don't add it to a list. Tracking it would cost more than simply finishing it.\n3. Stop if it grows: If a \"two-minute\" task starts expanding, stop and schedule it properly instead of forcing it through under that label.\n4. Apply it consistently: The value comes from using it all session long, so small tasks never pile up into an overwhelming backlog.\n5. Audit your list: Look for items that have been sitting there even though they'd take two minutes. That's the sign the discipline has slipped.",
  "p1": {
    "on": "This slide states the Two-Minute Rule: if a task genuinely takes less than two minutes, do it now, because tracking it costs more than finishing it. The steps with the diagram: estimate honestly, do it immediately if it qualifies, stop and schedule it if it starts to expand, apply the rule consistently, and check your list for items that should already be done.",
    "say": "Under two minutes, do it now. Over two, schedule it.",
    "ask": "How many two-minute tasks are sitting in your inbox right now?"
  },
  "p2": {
    "on": "This slide says the rule only works if it's applied honestly: a task that keeps growing once you start should be stopped and scheduled. It also explains the payoff, which is stopping small tasks from quietly piling into an overwhelming backlog.",
    "say": "Be honest about the two minutes, or the rule backfires.",
    "wrap": "Finish true two-minute tasks immediately and stop small items from piling up.",
    "scenario": "Five items land in ten minutes: confirm a lunch reservation, reply \"received\" to a court notice, reformat a 20-page exhibit list, forward an invoice to billing, and update a contact's phone number. Which pass the Two-Minute Rule?"
  },
  "s1": {
    "on": "This section states the rule: if it truly takes under two minutes, do it now; tracking it costs more than finishing it.",
    "say": "Under two minutes, just do it."
  },
  "s2": {
    "on": "These steps apply it honestly: estimate truthfully, do qualifying tasks at once, stop and schedule tasks that expand, apply it consistently, and check your list for items that should have been done.",
    "say": "Honest estimates only.",
    "ask": "What's on your list right now that takes under two minutes?"
  },
  "s3": {
    "on": "This section warns that a 'two-minute' task that keeps growing needs scheduling, and explains the payoff: no silent backlog of small tasks.",
    "say": "Small tasks pile up quietly."
  }
},
"3::Weekly Planning Rituals": {
  "steps": "Here's our step-by-step for a weekly planning ritual that actually works:\n1. Fix a recurring time: Put the planning session on the calendar every week and protect it like any real commitment.\n2. Look at the whole week ahead: Don't just plan today. Looking ahead is what catches the items that need prep days before they're due.\n3. Decide what rolls forward: Review what didn't get done last week and choose deliberately whether it still matters or gets dropped, instead of letting it roll over on its own.\n4. Block lead time now: Anything that needs several days of prep, like a deadline three days out, gets its time blocked today, not on the day it turns urgent.\n5. Defend the block: If the planning session gets bumped every week for \"something more urgent,\" it has stopped being a ritual.",
  "p1": {
    "on": "This slide describes a short, fixed weekly planning session, with a diagram: look at the week ahead, decide deliberately what to do with last week's unfinished items, block time now for anything needing multi-day lead time, and defend the session like any other meeting.",
    "say": "A fixed weekly block catches what daily planning misses.",
    "ask": "Who has a standing weekly planning block, and who plans each morning?"
  },
  "p2": {
    "on": "This slide separates weekly from daily planning: weekly planning catches items that don't fit in one day, like a deadline three days out that needs prep today. It also warns that a planning session bumped every week isn't really happening.",
    "say": "If the planning block keeps getting bumped, you don't have one.",
    "wrap": "Protect the weekly session, look ahead, and block lead time early.",
    "scenario": "It's Friday afternoon. Elias has a mediation next Thursday that needs a binder, two witness calls and a travel booking. Plan backwards: what goes on the calendar today, and for which days?"
  },
  "s1": {
    "on": "This section says a short, consistent weekly session (what's coming, what didn't get done, what must happen) prevents the Monday scramble.",
    "say": "One session a week saves the Monday panic."
  },
  "s2": {
    "on": "These steps set it up: a fixed recurring time, a look at the whole week ahead, a deliberate keep-or-drop on last week's leftovers, blocking prep for multi-day lead times, and defending the block.",
    "say": "Decide what rolls forward; don't let it roll by itself.",
    "ask": "When would your weekly planning slot be?"
  },
  "s3": {
    "on": "This section warns that weekly planning catches what daily planning misses, and that a session bumped every week isn't a ritual.",
    "say": "Protect it, or it stops existing."
  }
},
"3::Saying No Without Damaging Relationships": {
  "steps": "Here's our step-by-step for saying no and keeping the relationship intact:\n1. Respond promptly: Don't go silent. A fast no protects the relationship far better than a delayed non-answer.\n2. Give the real reason: Be specific, for example, \"I can't take this on before Thursday because of the filing,\" rather than a vague decline.\n3. Offer an alternative: Where you can, suggest a different timeline, a different person or a smaller version of the ask.\n4. Never say yes just to avoid discomfort: Agreeing and then quietly failing to deliver damages trust far more than an honest no.\n5. Name capacity up front: If you're genuinely at capacity, say so plainly now rather than accepting more and letting something slip later.",
  "p1": {
    "on": "This slide covers declining well, with a diagram: respond promptly, give the specific reason, offer a real alternative such as a new timeline, person or partial version, never say yes and then quietly fail to deliver, and say plainly when you're at capacity.",
    "say": "A fast, specific no with an alternative protects the relationship.",
    "ask": "When did a no actually strengthen a working relationship for you?"
  },
  "p2": {
    "on": "This slide explains that saying yes to everything only moves the disappointment to later. A good no names the constraint, such as \"I can't take this on before Thursday given X,\" so it reads as a real answer rather than a brush-off.",
    "say": "Yes to everything just delays the letdown.",
    "wrap": "Decline fast, give the real reason, and offer an alternative.",
    "scenario": "A partner asks for 30 minutes with Elias tomorrow, but his day is fully committed to trial prep. Say the no out loud, with the reason and an alternative."
  },
  "s1": {
    "on": "This section compares what damages a relationship (a flat no, silence, agreeing then not delivering) with what protects it (a clear no with the reason and an alternative, a prompt reply, honesty up front).",
    "say": "How you say no matters more than the no."
  },
  "s2": {
    "on": "These steps are the method: reply promptly, give the specific reason, offer an alternative, never agree and quietly fail, and say plainly when you're at capacity.",
    "say": "A fast, honest no beats a slow yes that slips.",
    "ask": "How would you decline a request due Thursday you can't take on?"
  },
  "s3": {
    "on": "This section warns that saying yes to everything only moves the disappointment later, and shows that a specific no reads as a real answer.",
    "say": "Specific, not vague."
  }
},
"3::Batch Processing Similar Tasks": {
  "steps": "Here's how to put batching into practice, step by step:\n1. Spot the categories: Find the similar, recurring tasks you now handle one at a time, such as calls, email replies and data entry.\n2. Group them into blocks: Handle each category in a dedicated block instead of switching between types of work all day.\n3. Delay the non-urgent slightly: Let non-urgent items wait a little so they can be batched together, rather than processing everything first-in, first-out.\n4. Break the batch for true urgency: Anything with a hard individual deadline gets handled right away. Batching is only for tasks that can wait.\n5. Review your categories: As your workload changes, what's worth batching changes too, so check it periodically.",
  "p1": {
    "on": "This slide explains batching, with a diagram: grouping similar tasks, such as calls, email replies or data entry, into one block to cut the mental cost of switching. The steps: find your recurring categories, group them, deliberately delay non-urgent items so they can be batched, break the batch for anything urgent, and review your categories over time.",
    "say": "Same kind of work, same block of time.",
    "ask": "What do you currently handle one at a time that could be batched?"
  },
  "p2": {
    "on": "This slide says batching is a deliberate choice to delay some tasks slightly, which is different from working in arrival order. The trade-off: it only suits tasks without a hard individual deadline, and anything truly urgent still breaks the batch.",
    "say": "Batch what can wait. Break the batch for what can't.",
    "wrap": "Batch recurring, non-urgent work into set blocks.",
    "scenario": "Across one day you get six expense approvals, four scheduling requests and three short client replies, spread out over the day. Design the batching blocks, and name the one item that would make you break a batch."
  },
  "s1": {
    "on": "This section defines batching: grouping similar tasks (all calls, all replies) to cut the cost of switching.",
    "say": "Same kind of work, same block."
  },
  "s2": {
    "on": "These steps set it up: find recurring categories, group them into blocks, delay non-urgent items slightly to batch them, break the batch for true urgency, and review the categories.",
    "say": "Urgent items still break the batch.",
    "ask": "Which tasks could you batch tomorrow?"
  },
  "s3": {
    "on": "This section says batching is a deliberate choice, not arrival order, and is for tasks without a hard individual deadline.",
    "say": "It's a choice, with a trade-off."
  }
},
"3::The Cost of Context-Switching": {
  "steps": "Here's our step-by-step for cutting the cost of context-switching:\n1. Notice voluntary switches: Jumping between unrelated work on your own costs the same refocusing time as an interruption does.\n2. Use batching and focus blocks: Plan them on purpose so you pay the re-entry cost fewer times a day.\n3. Resist multitasking: Doing genuinely different tasks at once feels productive, but it's almost always slower in total than doing them one after another.\n4. Close before you open: When you have to switch, take a moment to consciously wrap up the last task before starting the next.\n5. Count your switches: Track them for one day now and then. Most people badly underestimate how often they switch until they actually count.",
  "p1": {
    "on": "This slide covers context-switching: jumping between unrelated kinds of work carries a refocusing cost, even when you chose to switch. The steps: notice voluntary switches, use batching and focus blocks, avoid multitasking on different cognitive tasks, close out one task before starting the next, and occasionally count your switches for a day.",
    "say": "Every switch costs re-entry time, even the ones you choose.",
    "ask": "How many times have you switched tasks in the last hour?"
  },
  "p2": {
    "on": "This slide makes three points: every switch between unrelated tasks has a real cost, this is the strongest practical argument for batching and focus blocks, and multitasking on different cognitive tasks is almost always slower than doing them one after another.",
    "say": "Multitasking feels fast and is almost always slower.",
    "wrap": "Reduce switches with batching, focus blocks and a clean close before each new task.",
    "scenario": "In one hour you touch a legal filing question, a personal travel request for Elias, a board deck edit and two Slack pings. How would you restructure that hour to cut the switching?"
  },
  "s1": {
    "on": "This section's number: about 23 minutes on average to return to full focus after a significant interruption.",
    "say": "Twenty-three minutes each time."
  },
  "s2": {
    "on": "These steps reduce the cost: notice voluntary switching, use batching and focus blocks, resist multitasking, close out a task before starting the next, and count your switches for a day.",
    "say": "Close one thing before opening the next.",
    "ask": "How many times do you think you switch in a day?"
  },
  "s3": {
    "on": "This section warns that voluntary switching costs the same as interruptions, makes the case for batching, and says multitasking is almost always slower in total.",
    "say": "It feels productive; it isn't."
  }
},
"3::Recurring Meeting Hygiene": {
  "steps": "Here's our step-by-step for keeping recurring meetings worth attending:\n1. Audit on a cadence: Quarterly is reasonable. Ask whether each meeting still needs to exist, at this frequency, with these people.\n2. Check for a clear agenda: If nobody can state the meeting's purpose in one sentence, it should be skipped or reformatted.\n3. Flag meetings that have outlived their purpose: As the EA you see the whole calendar pattern, so raise it even if nobody else has.\n4. Propose a specific change: Suggest cancelling, shortening or trimming the attendee list. A vague \"this looks unnecessary\" rarely leads to action.\n5. Follow up later: Revisit any meeting you changed to confirm the change stuck and didn't quietly slip back.",
  "p1": {
    "on": "This slide explains that standing meetings pile up and rarely get removed. Audit every recurring meeting quarterly: does it still need to exist, at this frequency, with these people? The steps with the diagram: check each has a one-sentence purpose, flag meetings that have outlived theirs, propose a specific change, and check later that it stuck.",
    "say": "If nobody can say what the meeting is for, it's a candidate to cut.",
    "ask": "Which recurring meeting do you suspect nobody would miss?"
  },
  "p2": {
    "on": "This slide calls a recurring meeting with no agenda one of the most common calendar failures. It also notes that as the EA, you often notice this decay first, because you see the whole calendar pattern.",
    "say": "You see the full pattern, so you're the one who can flag it.",
    "wrap": "Audit quarterly and propose a specific change: cancel, shorten or trim attendees.",
    "scenario": "Elias has a weekly 60-minute \"matter sync\" with eight attendees and no agenda. Half the attendees join camera-off. What do you propose, and how do you phrase it to him?"
  },
  "s1": {
    "on": "This section says standing meetings pile up and rarely get removed; a quarterly audit catches the ones that have outlived their purpose.",
    "say": "Audit every recurring meeting quarterly."
  },
  "s2": {
    "on": "These steps are the audit: ask if it's still needed at this frequency with these people, check for an agenda, flag outdated ones, propose a specific change, and confirm the change stuck.",
    "say": "Propose a fix, don't just point.",
    "ask": "Which recurring meeting would you question first?"
  },
  "s3": {
    "on": "This section warns that a meeting with no agenda is a common failure, and notes the EA sees the full calendar pattern first.",
    "say": "If nobody can say what it's for, skip or reformat it."
  }
},
"3::Buffer Time Between Meetings": {
  "steps": "Here's the step-by-step for protecting buffer time between meetings:\n1. Make buffers the default: Build in 5 to 10 minutes between meetings as standard. It's necessary time, not wasted space.\n2. Use the buffer for debrief and prep: It stops the executive from walking into the next conversation still thinking about the last one.\n3. Check the client's standing rule: This client has a documented debrief-buffer rule, so here it's a stated requirement, not just good practice.\n4. Flag days with no room: When a day is genuinely too full for buffers, say so instead of quietly booking back-to-back and hoping it holds.\n5. Review weekly for erosion: Back-to-back scheduling creeps back in unless someone actively checks for it.",
  "p1": {
    "on": "This slide explains that back-to-back meetings mean every meeting starts late or ends abruptly, so a 5–10 minute buffer is necessary time, not waste. The steps with the diagram: make buffers the default, use them to debrief and prep, check the client's debrief-buffer standing rule, flag days too full for buffers, and review weekly for buffer erosion.",
    "say": "Five to ten minutes between meetings is part of the job, not dead space.",
    "ask": "Where do buffers disappear first on a busy calendar?"
  },
  "p2": {
    "on": "This slide says buffers make room for debrief and prep, so the executive doesn't walk into the next conversation still thinking about the last one. It ties this to this client's mandatory debrief-buffer standing rule: ignoring it is a rule violation, not just an inconvenience.",
    "say": "For this client, the debrief buffer is a standing rule.",
    "wrap": "Default to buffers, flag when a day can't fit them, and check weekly for erosion.",
    "scenario": "On screen: Elias's Tuesday has six back-to-back meetings from 9 to 3. Where do you insert buffers first, and what do you move to make room?"
  },
  "s1": {
    "on": "This section says zero buffer means every meeting starts late or ends abruptly; 5–10 minutes is what makes the calendar hold.",
    "say": "Buffers aren't wasted time."
  },
  "s2": {
    "on": "These steps make buffers standard: 5–10 minutes by default, used for debrief and prep, checked against the client's debrief-buffer rule, flagged when the day is too full, and reviewed weekly.",
    "say": "Flag it when there's no room for buffers."
  },
  "s3": {
    "on": "This section warns that buffers give room to debrief and prep, and that ignoring this client's debrief-buffer rule violates a documented preference.",
    "say": "Here it's a stated rule, not a nice-to-have."
  }
},
"3::Time Zone Management for Distributed Teams": {
  "steps": "Here's our step-by-step for scheduling across time zones without mix-ups:\n1. Check every participant's local time: Before you confirm, look at the actual local time for everyone, not just your own time zone.\n2. Name the time zone in the invite: Write the reference time zone in the invite itself instead of trusting every calendar app to convert it correctly.\n3. Watch daylight saving changes: Double-check recurring meetings around the switch. A meeting that's right in March can quietly move an hour by November.\n4. Be fair to the hardest-hit time zone: For widely spread teams, choose a time that's reasonable for the most disadvantaged participant, not just convenient for the majority.\n5. Fix mix-ups fast: If a time zone error happens, correct it right away and confirm the fix with every affected participant, not just the organizer.",
  "p1": {
    "on": "This slide covers cross-time-zone scheduling, with a diagram: check the local time for every participant, name the reference time zone in the invite itself, double-check recurring meetings around daylight saving changes, choose a time that's fair to the most disadvantaged participant, and correct mix-ups immediately with everyone affected.",
    "say": "Check everyone's local time, and name the time zone in the invite.",
    "ask": "Who has a daylight saving scheduling disaster story?",
    "wrap": "Name the reference time zone, watch daylight saving shifts, and schedule fairly.",
    "scenario": "Elias needs a call with co-counsel in London and a client in Manila this week. Find a time that's reasonable for all three, and write the invite line that names the reference time zone."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Name the reference time zone, watch daylight saving shifts, and schedule fairly.",
    "scenario": "Elias needs a call with co-counsel in London and a client in Manila this week. Find a time that's reasonable for all three, and write the invite line that names the reference time zone."
  },
  "s1": {
    "on": "This section's rule: a convenient time in one zone can be unreasonable in another, so confirm local time for every participant.",
    "say": "Check everyone's clock, not just yours."
  },
  "s2": {
    "on": "These steps are the checks: every participant's local time, the reference zone named in the invite, recurring meetings across daylight saving changes, fairness to the most disadvantaged zone, and a quick confirmed fix when mistakes happen.",
    "say": "Name the time zone in the invite.",
    "ask": "Have you been caught by a daylight saving change?"
  }
},
"3::Calendar Blocking for Deep Work": {
  "steps": "Here's the step-by-step for deep-work blocks that actually hold:\n1. Put focus time on the calendar: A calendar that only tracks meetings is missing half the picture.\n2. Make it truly blocked: Mark it so people can't book over it. A visible label anyone can override doesn't protect anything.\n3. Reserve it for top priorities: Use the block for the most important work, not whatever is easiest to schedule around.\n4. Treat a double-booking as a real conflict: Resolve it with the same discipline as any other calendar conflict.\n5. Review how the blocks are used: A block that's always skipped or overridden needs better enforcement or an honest rethink of whether it's realistic.",
  "p1": {
    "on": "This slide says a calendar that only tracks meetings is missing half the picture. The steps with the diagram: block real time for focused work, mark it so nobody can book over it, reserve it for the highest-priority work, treat a double-booking of it as a real conflict, and review whether the blocks are actually used.",
    "say": "A deep-work block anyone can book over isn't a block.",
    "ask": "Has one of your focus blocks ever been silently double-booked?"
  },
  "p2": {
    "on": "This slide warns that a visible but unprotected block isn't a real block; it has to work as a genuine commitment. It also says the block is only worth protecting if it's reserved for the highest-priority work.",
    "say": "Protect it, and put the most important work in it.",
    "wrap": "Deep-work blocks are commitments. Enforce them, and review whether they're used.",
    "scenario": "Elias's Wednesday 9–11 deep-work block for brief writing gets a meeting request from a senior partner. How do you handle it using the conflict discipline from earlier today?"
  },
  "s1": {
    "on": "This section says a calendar that tracks only meetings misses half the picture; blocking focus time protects it from other people's requests.",
    "say": "Block the work, not just the meetings."
  },
  "s2": {
    "on": "These steps make the block real: put it on the calendar, make it unbookable, reserve it for top priorities, treat a double-booking as a real conflict, and review blocks that keep getting skipped.",
    "say": "A block anyone can book over isn't a block."
  },
  "s3": {
    "on": "This section warns that a visible-but-unprotected block is only a suggestion, and says the block is only worth defending if it holds the highest-priority work.",
    "say": "Protect the right thing."
  }
},
"3::Handling Last-Minute Calendar Changes": {
  "steps": "When a last-minute change lands, here's the step-by-step:\n1. Check what it displaces: Before confirming anything, look at what else on the calendar the change affects.\n2. Trace the cascade: A late cancellation or a sudden new request can ripple beyond the one meeting it touches.\n3. Tell everyone affected: Updating the calendar quietly isn't enough. People plan around what they were told, not just what's on the screen.\n4. Reconfirm the rest of the day: Don't assume everything else still holds. Check the whole schedule again after the change.\n5. Log recurring causes: If the same source keeps causing last-minute changes, note it so it can be fixed at the root.",
  "p1": {
    "on": "This slide explains that a late cancellation or sudden request can cascade through the whole day. The steps with the diagram: check what the change displaces before confirming, assess how far it cascades, tell everyone affected immediately, reconfirm the rest of the day, and log the cause if it keeps happening.",
    "say": "Check the ripple before you confirm the change.",
    "ask": "What's the first thing you'd check when a meeting suddenly moves?",
    "wrap": "Check what's displaced, tell everyone affected, and reconfirm the rest of the day.",
    "scenario": "Roleplay: a client meeting scheduled 90 minutes from now just got moved to right now. Walk through what needs to happen in the next five minutes."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Check what's displaced, tell everyone affected, and reconfirm the rest of the day.",
    "scenario": "Roleplay: a client meeting scheduled 90 minutes from now just got moved to right now. Walk through what needs to happen in the next five minutes."
  },
  "s1": {
    "on": "This section says a late change can cascade through the whole day if the ripple effects aren't checked right away.",
    "say": "One change can move the whole day."
  },
  "s2": {
    "on": "These steps handle it: check what it displaces before confirming, see how far it cascades, tell everyone affected, reconfirm the rest of the day, and log recurring causes.",
    "say": "Check the ripple before you confirm.",
    "ask": "What's the last change that knocked over your day?"
  }
},
"3::Multi-Calendar Coordination": {
  "steps": "Here's our step-by-step for coordinating across several calendars:\n1. Find every calendar: Identify all the calendars the executive actually runs, professional, personal, board and advisory, rather than assuming the primary one is the whole picture.\n2. Check all of them before confirming: A new commitment gets checked against every relevant calendar, not just the one you have open.\n3. Build a single master view: Even if it means manually cross-checking before you finalize. Trusting only the primary calendar is how conflicts slip through.\n4. Keep business and personal separate, but coordinated: Separate systems protect privacy and access, and you are the one who actively coordinates across both.\n5. Flag cross-calendar conflicts immediately: Use the same conflict-resolution discipline from earlier today. A conflict across two calendars is still a real conflict.",
  "p1": {
    "on": "This slide covers executives who run several calendars (professional, personal, board), where the real risk is a conflict you can't see because it's on the other calendar. The steps with the diagram: identify every calendar, check new commitments against all of them, build a master view, keep business and personal separate but coordinated, and flag cross-calendar conflicts immediately.",
    "say": "Check every calendar before you confirm, not just the one in front of you.",
    "ask": "Have you ever double-booked because you only checked one calendar?"
  },
  "p2": {
    "on": "This slide says a single master view, even if it's you checking each calendar by hand, is what prevents hidden conflicts. It links back to Boundaries & Authorization on Day 1: business and personal stay separate, but not uncoordinated.",
    "say": "Separate systems still need one person coordinating them.",
    "wrap": "Build a master view and resolve cross-calendar conflicts the same way as any other.",
    "scenario": "A client asks for dinner with Elias next Thursday. His work calendar is clear, but his personal calendar has his daughter's recital that evening. What do you do, and what do you tell the client?"
  },
  "s1": {
    "on": "This section says many executives run several calendars (professional, personal, board), and the real risk is a conflict you only see across all of them.",
    "say": "The conflict hides between calendars."
  },
  "s2": {
    "on": "These steps are the coordination: find every calendar, check new commitments against all, build a master view, keep business and personal separate but coordinated, and flag cross-calendar conflicts at once.",
    "say": "Check all of them before you confirm.",
    "ask": "How many calendars does your executive have?"
  },
  "s3": {
    "on": "This section says a master view, even a manual cross-check, prevents double-bookings, and ties back to Day 1's Boundaries & Authorization: separate doesn't mean uncoordinated.",
    "say": "Someone has to check both. That's you."
  }
},
"3::Visa & Documentation Requirements": {
  "steps": "Here's our step-by-step for getting travel documents right:\n1. Verify current requirements: Check the rules for this destination and this trip, not what applied on a past trip to a similar country.\n2. Check passport validity against the real rule: Many countries require six months of validity beyond the travel dates, not just an unexpired passport.\n3. Allow real lead time for visas: Processing can take weeks, so start well before the trip, not once the rest of the planning is underway.\n4. Confirm supporting documents early: Invitation letters and health declarations need to be sorted early enough to fix any problem before departure.\n5. Keep a record: Note what was required and confirmed for each trip, so the next similar trip starts from facts, not assumptions.",
  "p1": {
    "on": "This slide says visa and documentation rules differ by destination and change, so verify current rules for each trip. The steps with the diagram: check passport validity against the destination's rule (often six months beyond travel dates), allow weeks for visa processing, confirm supporting documents early, and keep a record for the next trip.",
    "say": "Verify current requirements for this destination. Don't rely on the last trip.",
    "ask": "Anyone have a trip nearly derailed by a passport or visa issue?"
  },
  "p2": {
    "on": "This slide calls passport validity a common, avoidable failure point, because many countries require six months beyond the travel dates. It adds that real lead time for visa processing, weeks not days, is what keeps paperwork from putting the trip at risk.",
    "say": "Six months of validity, and weeks of lead time.",
    "wrap": "Check validity and visa rules first, and start the paperwork early.",
    "scenario": "Elias is flying to Singapore for a deposition in five weeks. His passport expires in four months. What do you check, what do you do today, and what do you tell him?"
  },
  "s1": {
    "on": "This section's rule: requirements differ by destination and change, so verify current rules for this trip, not the last similar one.",
    "say": "Verify for this trip, every time."
  },
  "s2": {
    "on": "These steps are the checks: current requirements, passport validity against the destination's rule, lead time for visas, supporting documents early, and a record for next time.",
    "say": "Start visas early; they can take weeks."
  },
  "s3": {
    "on": "This section warns about the six-month passport validity rule and says real lead time for visas keeps paperwork from sinking a trip.",
    "say": "Unexpired isn't always valid enough."
  }
},
"3::International Travel Considerations": {
  "steps": "Here's the step-by-step for preparing an international trip:\n1. Cover health and safety: Check required or recommended vaccinations, current travel advisories and local emergency numbers.\n2. Sort out money logistics: Confirm whether cards are widely accepted, whether local currency is needed, and realistic exchange options.\n3. Learn the business culture: Research meeting etiquette, dress expectations and communication norms that differ from home.\n4. Recheck advisories near departure: Look at government advisories again close to the travel date, because they can change after the trip is planned.\n5. Plan in more depth than for domestic trips: The light-touch approach that works for a routine domestic trip is a real risk abroad.",
  "p1": {
    "on": "This slide lists what international trips add, with a diagram: health and safety requirements (vaccinations, advisories, emergency numbers), currency and payment logistics, local business and cultural norms, and a fresh check of government travel advisories close to departure. The last step says international trips need more planning depth than domestic ones.",
    "say": "An international trip is not a domestic trip with a longer flight.",
    "ask": "If you've coordinated international travel, what surprised you the first time?"
  },
  "p2": {
    "on": "This slide warns that international travel has far more variables, so planning it like a routine trip is a common mistake. It also makes checking current government advisories for the destination a required diligence step, because advisories change.",
    "say": "Check the advisory again close to departure. It can change after you book.",
    "wrap": "Plan international trips deeper: health, money, norms and current advisories.",
    "scenario": "Elias is going to a client meeting in Mexico City next month. List what you'd check beyond flights and the hotel, and when you'd check the travel advisory."
  },
  "s1": {
    "on": "This section lists three areas: health and safety, currency and payment, and cultural and business norms.",
    "say": "Health, money, norms."
  },
  "s2": {
    "on": "These steps work through them: vaccinations and advisories, currency logistics, local etiquette and dress, a fresh advisory check near the travel date, and deeper planning than a domestic trip.",
    "say": "Re-check advisories close to departure.",
    "ask": "What would you check first for a trip abroad?"
  },
  "s3": {
    "on": "This section warns against treating international trips like domestic ones and calls the advisory check real diligence, not an extra.",
    "say": "More variables, more planning."
  }
},
"3::Expense Tracking While Traveling": {
  "steps": "Here's our step-by-step for keeping travel expenses under control:\n1. Capture receipts immediately: Snap a photo or file it in a dedicated folder right away, instead of collecting everything at the end of the trip.\n2. Categorize as you go: Note the client, matter or cost center while the context is fresh, not in a batch afterward.\n3. Reconcile with the same discipline as always: Use the Day 7 statement-of-account process. Travel expenses are the same skill in less controlled conditions.\n4. Do a nightly check: Spend a few minutes at the end of each travel day confirming nothing from that day was missed.\n5. Submit within a set window: Reconcile and submit soon after returning, so expenses don't pile up once the trip is over.",
  "p1": {
    "on": "This slide covers travel expenses, with a diagram: capture every receipt immediately (a photo or a folder), categorize each by client, matter or cost center as it happens, use the Day 7 SOA reconciliation discipline, check at the end of each travel day for anything missed, and submit within a set window after return.",
    "say": "Capture the receipt the moment you get it, and tag the matter while you still remember.",
    "ask": "Who has lost a travel receipt before?",
    "wrap": "Travel expenses use the same reconciliation skill, under messier conditions. Capture and categorize in real time.",
    "scenario": "Elias returns from a three-day deposition trip with a pocket full of receipts, some for the Harlow matter and some personal. What should have happened each day of the trip, and what do you do now?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Travel expenses use the same reconciliation skill, under messier conditions. Capture and categorize in real time.",
    "scenario": "Elias returns from a three-day deposition trip with a pocket full of receipts, some for the Harlow matter and some personal. What should have happened each day of the trip, and what do you do now?"
  },
  "s1": {
    "on": "This section says receipts get lost easily on the road; capture them immediately rather than reconstructing the trip later.",
    "say": "Capture it the moment you get it."
  },
  "s2": {
    "on": "These steps are the routine: capture every receipt, categorize as you go, apply the Day 7 SOA reconciliation discipline, do a nightly check, and submit within a set window after return.",
    "say": "A few minutes each night saves hours later."
  }
},
"3::Travel Risk Contingency Planning": {
  "steps": "Here's the step-by-step for a contingency plan that's ready before it's needed:\n1. Identify realistic disruptions: For this specific itinerary, think through a cancelled flight, a missed connection or bad weather on a key leg.\n2. Line up backups in advance: For each scenario, know the next viable flight, an alternate route and a local contact at the destination.\n3. Keep contingencies with the itinerary: Store them alongside it, not as a separate note that's hard to find under pressure.\n4. Execute the backup immediately: When a disruption happens, use the plan you prepared instead of starting research from scratch.\n5. Apply the backup-vendor principle: Just like on Day 5, a real contingency plan exists before it's needed, not improvised in the moment.",
  "p1": {
    "on": "This slide says a real travel plan covers what happens when something goes wrong, with a diagram: identify realistic disruptions for this itinerary, find the backup for each in advance (next flight, alternate route, local contact), keep the contingencies with the itinerary, and act on the backup immediately when disruption hits, the same principle as Day 5's backup vendors.",
    "say": "The backup exists before the trip, not during the scramble.",
    "ask": "Tell us about a disruption that went smoothly because a backup already existed.",
    "wrap": "Identify disruptions and backups before departure, document them with the itinerary, and act on them fast.",
    "scenario": "Elias flies Chicago to Denver with a connection to Boise for a 10 a.m. hearing. Name the two most likely disruptions and the pre-arranged backup for each."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Identify disruptions and backups before departure, document them with the itinerary, and act on them fast.",
    "scenario": "Elias flies Chicago to Denver with a connection to Boise for a 10 a.m. hearing. Name the two most likely disruptions and the pre-arranged backup for each."
  },
  "s1": {
    "on": "This section says a real travel plan covers what happens when things go wrong, not just the ideal itinerary.",
    "say": "Plan for the bad day too."
  },
  "s2": {
    "on": "These steps build it: name the likely disruptions, find backups in advance, document them with the itinerary, execute the backup at once, and apply the Day 5 backup-vendor principle.",
    "say": "The backup exists before it's needed.",
    "ask": "What's your backup if the first leg is cancelled?"
  }
},
"3::Loyalty Programs & Travel Preferences": {
  "steps": "Here's our step-by-step for applying loyalty programs and travel preferences every time:\n1. Track every membership: Record each airline and hotel program in the same tracker or dossier as the executive's other standing preferences.\n2. Apply the numbers on every booking: Make it a standard booking step, not something you remember only when it's convenient.\n3. Cross-check against preferences: Apply the loyalty numbers together with the seat, routing and hotel preferences from the Client Profile.\n4. Put it on the travel checklist: Especially for last-minute bookings, rely on the checklist, not memory under pressure.\n5. Reconfirm the details now and then: Status levels and program details change, so re-verify them periodically.",
  "p1": {
    "on": "This slide says applying loyalty program numbers (airline, hotel) is real, recurring value, not a courtesy. The steps with the diagram: track every membership in the preferences tracker, apply the numbers to every booking automatically, cross-check against the Client Profile's seat, routing and hotel preferences, build it into a checklist, and re-verify details occasionally.",
    "say": "Loyalty numbers go on every booking, every time.",
    "ask": "Which travel preference is easiest to forget under time pressure?"
  },
  "p2": {
    "on": "This slide links loyalty numbers to the Client Profile's seat, routing and hotel preferences, which should be applied together. It calls a missed loyalty number a small, completely avoidable error that a good travel process never produces.",
    "say": "It's a small miss, but it's completely avoidable.",
    "wrap": "Put loyalty numbers and preferences on the travel checklist so they never depend on memory.",
    "scenario": "You book a last-minute flight for Elias from your phone. What three things from his Client Profile do you check before you hit confirm?"
  },
  "s1": {
    "on": "This section says applying loyalty memberships every time adds up to real value in upgrades, priority service and status.",
    "say": "Small step, compounding value."
  },
  "s2": {
    "on": "These steps make it automatic: track every membership, apply numbers on every booking, check them alongside Client Profile preferences, put it on a checklist, and re-verify details now and then.",
    "say": "Loyalty numbers are a standard booking step."
  },
  "s3": {
    "on": "This section says loyalty numbers go on alongside seat, routing and hotel preferences every time, and that a missed number is a completely avoidable error.",
    "say": "A good process never misses one."
  }
},
"3::Managing Multi-City, Multi-Leg Itineraries": {
  "steps": "Here's our step-by-step for multi-city, multi-leg trips:\n1. Map every leg together: Plan the whole trip at once, because a delay on the first leg can cascade through every connection after it.\n2. Pad the tightest connection: Find the connection most likely to cause trouble and build extra buffer there.\n3. Line up ground transport and check-ins: Make sure pickups and hotel check-in times match each leg's actual arrival, not just that the flights are booked.\n4. Create a one-page summary: Consolidate the whole itinerary, so the traveler isn't piecing together confirmation emails mid-trip.\n5. Review before departure: Check the full itinerary again shortly before the trip for any leg whose timing has shifted.",
  "p1": {
    "on": "This slide covers trips with several connected legs, where one delay can cascade through every connection, with a diagram: map all the legs together, find the tightest connection and add buffer there, check ground transport and hotel check-in against actual arrival times, consolidate everything into a one-page summary, and re-review timing before departure.",
    "say": "Find the tightest connection. That's where the trip breaks.",
    "ask": "Looking at a three-leg itinerary, where would you look first?",
    "wrap": "Map every leg together, buffer the tightest connection, and hand the traveler one page.",
    "scenario": "Elias's itinerary: New York to Atlanta (50-minute connection) to Dallas for a two-day trial prep, then Dallas to Phoenix for a mediation. Find the tightest point and say what you'd change."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Map every leg together, buffer the tightest connection, and hand the traveler one page.",
    "scenario": "Elias's itinerary: New York to Atlanta (50-minute connection) to Dallas for a two-day trial prep, then Dallas to Phoenix for a mediation. Find the tightest point and say what you'd change."
  },
  "s1": {
    "on": "This section says multi-leg trips have more failure points; a delay on leg one can cascade, so the plan needs buffer.",
    "say": "More legs, more ways to fail."
  },
  "s2": {
    "on": "These steps manage it: map all legs together, add buffer at the tightest connection, align ground transport and check-ins with real arrivals, consolidate to one page, and re-check before departure.",
    "say": "Find the tightest connection and pad it."
  }
},
"3::Ground Transportation Coordination": {
  "steps": "Here's the step-by-step for ground transportation that doesn't let the trip down:\n1. Plan it like flights and hotels: Don't leave ground transport as a \"we'll figure it out\" afterthought.\n2. Confirm specifics: Get an exact pickup time, location and contact for every car service or rental, not \"sometime after landing.\"\n3. Check family-specific needs: When family is traveling, match the booking to the Client Profile, for example car seats or accessibility.\n4. Have a backup for high-stakes trips: Line up a second ground option, just as you would for flights.\n5. Reconfirm close to the date: A reservation made weeks out is worth double-checking shortly before departure.",
  "p1": {
    "on": "This slide calls ground transportation the most under-planned part of a trip. The steps with the diagram: plan it with the same care as flights and hotels, confirm a specific pickup time, location and contact, check Client Profile needs such as car seats or accessibility, arrange a backup for high-stakes trips, and reconfirm close to the travel date.",
    "say": "\"We'll figure out a car\" is how trips go wrong on arrival.",
    "ask": "Have you ever landed with the flight and hotel confirmed but no ride sorted?"
  },
  "p2": {
    "on": "This slide says a specific pickup time, location and contact is what prevents arrival confusion. It links to the car-seat and family needs in the Client Profile: ground transport has to fit who is actually travelling.",
    "say": "Plan the ride around who's in the car.",
    "wrap": "Confirm specifics, account for the Client Profile, and reconfirm before travel.",
    "scenario": "Elias and his two young children land in Orlando at 9:40 p.m. Write the ground transport confirmation you'd send him, with every detail it needs."
  },
  "s1": {
    "on": "This section calls ground transport the most under-planned part of a trip, the 'we'll figure out a car' problem.",
    "say": "Don't leave the car to chance."
  },
  "s2": {
    "on": "These steps fix it: plan it like flights and hotels, confirm a specific pickup time, place and contact, check family needs like car seats, add a backup for high-stakes trips, and reconfirm near departure.",
    "say": "Specific time, place, contact.",
    "ask": "What details would you confirm for a car service?"
  },
  "s3": {
    "on": "This section says a specific pickup detail prevents the gap that ruins a trip, and that planning must fit who's actually traveling.",
    "say": "Plan for everyone in the car."
  }
},
"3::Building a Real Travel Checklist": {
  "steps": "Here's how to build a travel checklist you can reuse, step by step:\n1. Write it down once: Create a reusable checklist instead of rebuilding it from memory for every trip.\n2. Give documentation its own section: Keep passport and visa checks separate from booking logistics.\n3. Add destination-specific health and safety prep: Go beyond a generic packing list.\n4. Include loyalty and contingency checks: Add a step confirming loyalty numbers were applied and a contingency contact for the trip, so neither gets missed under pressure.\n5. Treat it like the Home Binder: As on Day 5, build it once, then reuse and refine it after every trip.",
  "p1": {
    "on": "This slide says a checklist that lives only in memory isn't a real checklist, with a diagram: write it once and reuse it, give documentation (passport, visa) its own section, include destination-specific health and safety prep, add a loyalty-numbers step and a contingency contact, and treat it like the Day 5 Home Binder, a durable reference refined after every trip.",
    "say": "Write it once, reuse it every trip, and improve it each time.",
    "ask": "Who has a written travel checklist today?",
    "wrap": "A written, reusable checklist stops the same detail from being missed trip after trip.",
    "scenario": "As a group, build the first version of a travel checklist for Elias's international trips: five sections, two or three items each."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "A written, reusable checklist stops the same detail from being missed trip after trip.",
    "scenario": "As a group, build the first version of a travel checklist for Elias's international trips: five sections, two or three items each."
  },
  "s1": {
    "on": "This section says a checklist in memory isn't a checklist; write it once and reuse it every trip.",
    "say": "Write it down once."
  },
  "s2": {
    "on": "These steps build it: a reusable written form, a documentation section, destination health and safety prep, loyalty and contingency confirmation steps, and refining it like the Day 5 Home Binder.",
    "say": "Build it once, refine it every trip.",
    "ask": "What would be on your first checklist?"
  }
},
"3::Post-Trip Debrief & Follow-Up": {
  "steps": "Here's our step-by-step for closing out a trip properly:\n1. Reconcile expenses promptly: Deal with receipts and costs soon after return, before they pile up.\n2. Send follow-ups while they're timely: Thank-you notes and follow-up messages from the trip go out now, not weeks later.\n3. Note what worked and what didn't: Write it down while it's fresh, for example a hotel that fell short or a connection that was too tight.\n4. Feed it back into the system: Update the standing travel preferences or checklist so the next trip is genuinely better.\n5. Make it a habit: It's the same continuous-improvement habit as the seasonal-coordination playbook from Day 6, applied to a single trip.",
  "p1": {
    "on": "This slide says a trip isn't finished when the traveler gets home, with a diagram: reconcile expenses promptly, send thank-you and follow-up messages while they're timely, note what worked and what didn't, feed that note into the preferences and checklist, and treat it like the Day 6 seasonal playbook at the scale of one trip.",
    "say": "A two-line note after each trip makes the next one better.",
    "ask": "Does anyone do a post-trip debrief, even informally?",
    "wrap": "Close the trip: reconcile, follow up, write what went wrong, and update the checklist.",
    "scenario": "Elias's hotel in Denver had no quiet workspace, and his return connection was too tight. Write the debrief note, and say where each lesson gets recorded."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Close the trip: reconcile, follow up, write what went wrong, and update the checklist.",
    "scenario": "Elias's hotel in Denver had no quiet workspace, and his return connection was too tight. Write the debrief note, and say where each lesson gets recorded."
  },
  "s1": {
    "on": "This section says a trip isn't done at home; expenses, thank-yous and lessons learned are the often-skipped final steps.",
    "say": "The trip ends after the follow-up."
  },
  "s2": {
    "on": "These steps close it out: reconcile expenses, send follow-ups while timely, note what worked and what didn't, feed it into preferences or the checklist, and treat it like the Day 6 seasonal playbook.",
    "say": "Every trip should improve the next one."
  }
},
"3::The Weekly Time Audit": {
  "steps": "Here's the step-by-step for a weekly time audit:\n1. Track one real week: Record what you actually do for a representative week, because intuition about where time goes is usually wrong.\n2. Compare it to your priorities: Hold the data up against what you believed your priorities were. The gap between the two is the finding.\n3. Treat it as a periodic check: This isn't permanent tracking. Like a budget review, it catches drift now and then.\n4. Use good data: The audit relies on the Time Tracking Done Right habits from earlier today, so the underlying entries have to be accurate.\n5. Act on what you find: If the audit doesn't change next week's plan, it hasn't done its job.",
  "p1": {
    "on": "This slide says most people's sense of where their time goes is wrong. The steps with the diagram: track actual activity for one representative week, compare it with what you thought your priorities were, treat it as a periodic check rather than a permanent habit, use accurate time-tracking data as the input, and act on what it shows.",
    "say": "The gap between where you think your time goes and where it actually goes is the finding.",
    "ask": "Guess what percentage of your week goes to your top priority."
  },
  "p2": {
    "on": "This slide says the audit isn't tracking forever; it's a periodic check for drift, like a budget review. It connects to Time Tracking Done Right: the audit turns raw data into improvement.",
    "say": "An audit that doesn't change next week's plan hasn't done its job.",
    "wrap": "Audit a representative week occasionally, compare it with your priorities, and adjust.",
    "scenario": "Your audit shows 40% of your week went to rescheduling meetings and only 10% to Elias's top-priority matter. What two changes do you make next week?"
  },
  "s1": {
    "on": "This section says most people's sense of where their time goes is wrong; tracking one real week reveals surprises.",
    "say": "Intuition is usually off."
  },
  "s2": {
    "on": "These steps run the audit: track a representative week, compare against your stated priorities, treat it as a periodic check, use accurate tracking data, and act on what you find.",
    "say": "The gap between belief and data is the finding.",
    "ask": "Where do you think most of your time goes?"
  },
  "s3": {
    "on": "This section says the goal is a periodic check, like a budget review, and that it turns tracked data into real improvement.",
    "say": "Audit to catch drift, then act."
  }
},
"3::Setting Realistic Deadlines": {
  "steps": "Here's our step-by-step for setting deadlines that actually hold:\n1. Account for the real work: Before setting a date, think through what the work involves. Without that, a deadline is just a guess.\n2. Check with whoever does the work: Talk to them before committing a date on their behalf, so the deadline stays honest, not optimistic.\n3. Build in sensible buffer: Allow for genuine uncertainty, without padding every estimate blindly.\n4. Name an owner: State the deadline clearly with an owner attached, just like in the ACT email framework from Day 1. A deadline with no owner is the one most likely to slip.\n5. Flag risk early: If a deadline starts to look shaky, raise it early. An early flag gives real options that a last-minute one doesn't.",
  "p1": {
    "on": "This slide says a deadline set without accounting for the work is a guess. The steps with the diagram: estimate the actual work, check with whoever will do it before committing, build in buffer for real uncertainty, state the deadline with an owner as in Day 1's ACT Email framework, and flag risk early.",
    "say": "Ask the person doing the work before you commit to the date.",
    "ask": "When did an optimistic deadline cost you something?"
  },
  "p2": {
    "on": "This slide says buffer for real uncertainty (not blind padding) is what makes a deadline dependable. As the EA, you often set deadlines for work you aren't doing, so checking with the person who is keeps them honest.",
    "say": "Buffer for real risk, and never promise on someone else's behalf without asking.",
    "wrap": "Real estimate, real owner, honest buffer, early warning.",
    "scenario": "A client asks when they'll get the draft engagement agreement. The associate drafting it is in trial until Wednesday. What do you do before answering, and what do you tell the client?"
  },
  "s1": {
    "on": "This section says a deadline that ignores the real work is a guess that creates false confidence.",
    "say": "A guess isn't a deadline."
  },
  "s2": {
    "on": "These steps set honest deadlines: account for the work, check with whoever does it, build buffer for real uncertainty, name an owner (as in Day 1's ACT Email), and flag risk early.",
    "say": "Owner attached, risk flagged early.",
    "ask": "Who do you check with before committing a date?"
  },
  "s3": {
    "on": "This section says honest buffer makes a deadline plannable, and that EAs often set dates for work they don't do, so they must check first.",
    "say": "Ask the person doing the work."
  }
},
"3::Court Docketing Workflows": {
  "steps": "Here's our step-by-step for docketing court deadlines reliably:\n1. Log from the primary source: Enter every court-imposed deadline the moment it's known, from the court order or filing confirmation itself, never from a secondhand summary.\n2. Set multiple reminders: Add checkpoints, for example two weeks out, three days out and day-of, not just one alert. That redundancy is what a single alert lacks.\n3. Cross-check against the case file: Review the docket periodically. Close deadlines that have been met, so they don't cause false alarms or hide one that's still open.",
  "p1": {
    "on": "This slide calls docketing calendar management with legal consequences, where a missed deadline can be malpractice exposure, so redundancy is deliberate. The steps with the diagram: log each deadline from the primary source document the moment it's known, set several reminder checkpoints (2 weeks, 3 days, day-of), and cross-check the docket against the case file.",
    "say": "No single missed reminder should ever cause a missed filing.",
    "ask": "Where do docketed dates come from in your process today?"
  },
  "p2": {
    "on": "This slide lists three watch-outs: never docket from a summary or a colleague's mention, never assume a deadline is fine because it's usually handled, since rules vary by jurisdiction and matter, and treat every entry with the care the stakes demand.",
    "say": "Docket from the court order itself, never from a secondhand date.",
    "wrap": "Primary source, multiple reminders, regular cross-checks.",
    "scenario": "You're docketing a response deadline from a court order, and the date looks unusually short compared with similar matters. What do you do before entering it?"
  },
  "s1": {
    "on": "This section says docketing is calendar management with legal consequences; a missed deadline can mean malpractice or a lost right, so redundancy is built in.",
    "say": "No single missed reminder should cause a missed filing."
  },
  "s2": {
    "on": "These steps are the workflow: log every deadline from the primary source the moment it's known, set multiple reminders, and cross-check against the case file to close satisfied deadlines.",
    "say": "Primary source, multiple reminders, cross-checked."
  },
  "s3": {
    "on": "This section warns against docketing from secondhand dates or assuming a deadline is 'probably fine', and calls docketing one of the highest-stakes duties in the role.",
    "say": "Secondhand dates cause errors."
  }
},
"3::Statute-of-Limitations Rules": {
  "steps": "Here's the step-by-step for handling statute-of-limitations deadlines:\n1. Calculate it at intake: For every matter, work out the SOL date from the actual triggering event and the jurisdiction's rule. Don't estimate or copy it from a similar past matter.\n2. Give it extra lead time: Missing an SOL is so serious that it deserves more reminders and earlier warnings than an ordinary court deadline.\n3. Escalate when the rule is unclear: If the facts leave it ambiguous which rule applies, take it to the attorney. That determination has real legal weight and isn't the EA's call alone.",
  "p1": {
    "on": "This slide explains that a statute of limitations is the outer deadline for filing a claim; miss it and the claim can be barred regardless of merit. Rules vary by claim type and jurisdiction. The steps with the diagram: calculate and log it at intake from the actual triggering event and rule, give it extra lead time, and escalate ambiguity to the attorney.",
    "say": "Miss the SOL and the claim can be gone, no matter how strong it is.",
    "ask": "Why can't you copy the SOL from a similar past matter?"
  },
  "p2": {
    "on": "This slide lists three watch-outs: don't assume a new matter's SOL matches a similar past one, this is the one deadline where \"probably right\" is never good enough, and an SOL date must never live in one place or one person's memory.",
    "say": "Verify against the actual rule, every time.",
    "wrap": "Calculate at intake, verify the rule, add redundancy, and escalate when unsure.",
    "scenario": "A new matter comes in and the parties are in different states, so you're not sure which state's statute of limitations applies. What do you do before calculating a deadline?"
  },
  "s1": {
    "on": "This section explains the SOL: the outer deadline to file a claim, which varies by claim type and jurisdiction, and which bars the claim entirely if missed.",
    "say": "Miss it and the claim is gone."
  },
  "s2": {
    "on": "These steps protect it: calculate and log the SOL at intake from the actual trigger date and rule, flag it with extra lead time, and escalate to the attorney when the rule is unclear.",
    "say": "Unclear rule? That's the attorney's call."
  },
  "s3": {
    "on": "This section warns against copying a past matter's SOL, says 'probably right' isn't good enough, and requires the SOL to live in a redundant system.",
    "say": "Verify against the rule, every time."
  }
},
"3::Deposition Scheduling": {
  "steps": "Here's our step-by-step for scheduling a deposition that sticks:\n1. Confirm every required party: Check availability with everyone before locking in a date. A date built around only the attorney's calendar usually has to be moved.\n2. Book the court reporter and interpreter early: As soon as the date is confirmed, reserve them. They're often the tightest resources and the easiest to lose.\n3. Send notices and track confirmations: Issue formal notices promptly, then confirm every side has agreed. Silence isn't agreement.",
  "p1": {
    "on": "This slide explains that depositions coordinate many more parties than a normal meeting: attorneys on each side, the witness, a court reporter and sometimes an interpreter. It links to multi-calendar coordination. The steps with the diagram: confirm every party before locking the date, book the reporter and interpreter early, and send formal notices and track confirmations.",
    "say": "Silence isn't agreement. Track every confirmation.",
    "ask": "Which resource is hardest to book for a deposition?"
  },
  "p2": {
    "on": "This slide warns against locking a date around the attorney alone and then finding the witness or opposing counsel can't make it. Depositions are expensive to reschedule in time, cost and sometimes strategy, so the upfront coordination is worth it.",
    "say": "Coordinate everyone up front, because rescheduling costs more.",
    "wrap": "Confirm every party, book scarce resources early, and document confirmations.",
    "scenario": "You've confirmed a deposition date with the attorney and the witness, but opposing counsel hasn't replied after several days. Do you send the formal notice or wait? What do you actually do?"
  },
  "s1": {
    "on": "This section says depositions coordinate many parties (attorneys on all sides, the witness, the court reporter, an interpreter), building on multi-calendar coordination.",
    "say": "Many parties, one date."
  },
  "s2": {
    "on": "These steps are the process: confirm every party before locking the date, book the reporter and interpreter early, and send notices promptly and track confirmations.",
    "say": "Silence isn't agreement; track confirmations.",
    "ask": "Who's the hardest party to schedule?"
  },
  "s3": {
    "on": "This section warns against booking around the attorney alone and says rescheduling is costly in time, money and sometimes strategy.",
    "say": "Coordinate up front."
  }
},
"3::Executive Travel Logistics — Domestic & International Itineraries": {
  "steps": "Here's the step-by-step for building an executive's itinerary:\n1. Work backward from arrival: Start with what the executive needs to be ready for when they land, then plan ground transport, hotel and flights so each leg supports the next.\n2. Sort international documents early: Confirm visa and documentation requirements well ahead of departure, as we covered earlier today.\n3. Build real buffer between legs: Especially for international-to-domestic connections, which often mean clearing security or customs again.",
  "p1": {
    "on": "This slide says domestic and international travel share one discipline, but international adds visas, time zones and customs. A complete itinerary covers every leg and the gaps between them. The steps with the diagram: plan backward from what the executive needs on arrival, confirm visas early, and buffer connections, especially international-to-domestic.",
    "say": "Build the trip backward from what has to happen on arrival.",
    "ask": "Why do international-to-domestic connections need more buffer?"
  },
  "p2": {
    "on": "This slide warns against treating an international itinerary as a domestic one with a longer flight. It also says to put every leg's confirmation numbers and details in one consolidated document.",
    "say": "One consolidated itinerary, not a pile of confirmation emails.",
    "wrap": "Plan backward, check documents early, buffer connections and consolidate.",
    "scenario": "You're booking Elias a tight connection from an international arrival to a domestic flight. What do you want confirmed about that connection before you book it as is?"
  },
  "s1": {
    "on": "This section says domestic and international travel share the same discipline, but international adds visas, customs, time zones and jurisdictions, and a complete itinerary covers the gaps between legs.",
    "say": "The gaps are where trips fail."
  },
  "s2": {
    "on": "These steps build it: plan backward from the destination, confirm visas early, and add buffer between legs, especially international-to-domestic connections.",
    "say": "Work backward from arrival."
  },
  "s3": {
    "on": "This section warns against treating international as domestic with a longer flight, and asks for one consolidated itinerary with every confirmation.",
    "say": "One document, every leg."
  }
},
"3::War Room Trial Support": {
  "steps": "Here's our step-by-step for supporting an attorney through trial:\n1. Confirm support needs in advance: Agree on what the attorney needs during the trial window, such as document runs, real-time research and exhibit coordination, before trial starts.\n2. Keep everything instantly retrievable: Every trial document, contact and logistics detail, including the court location, parking and courtroom technology, should be organized and at hand. There's no time to search during trial.\n3. Set a trial communication protocol: Agree how fast you'll respond and which channel to use, because normal response times don't apply during trial.",
  "p1": {
    "on": "This slide explains that trial compresses the attorney's schedule and support needs into one of the highest-stakes windows you'll work, and war room support means being truly on call. The steps with the diagram: confirm support needs in advance, keep every trial document, contact and logistics detail instantly retrievable, and set a trial-specific communication protocol.",
    "say": "Trial tempo is different, so agree on the rules before day one.",
    "ask": "What would you want confirmed before a trial starts?"
  },
  "p2": {
    "on": "This slide warns against treating trial support like a busier normal week, because tempo, stakes and responsiveness are categorically different. It notes that calendar and travel skills compound here.",
    "say": "It's not a busier week. It's a different mode.",
    "wrap": "Confirm needs, organize for instant retrieval, and agree the protocol before trial.",
    "scenario": "Trial starts in three days and you haven't confirmed Elias's support expectations for that window. What do you nail down, and how do you raise it now on a short timeline?"
  },
  "s1": {
    "on": "This section says trial compresses the attorney's schedule; war-room support means being truly on call during trial hours.",
    "say": "Trial is a different operating mode."
  },
  "s2": {
    "on": "These steps prepare: confirm support needs in advance, keep every document, contact and logistic instantly retrievable, and set a trial-specific communication protocol.",
    "say": "Nothing should need searching for during trial.",
    "ask": "What would you prepare before day one of trial?"
  },
  "s3": {
    "on": "This section warns that trial support isn't just a busier normal day, and notes it combines calendar, travel and document skills.",
    "say": "Categorically different, prepare accordingly."
  }
},
"3::Emergency Flight Contingencies": {
  "steps": "Here's the step-by-step for protecting a high-stakes trip from flight disruptions:\n1. Identify the hard deadline: Before booking, know the fixed point the trip must hit, like a court appearance or a closing. Every contingency is built around it.\n2. Know the backups in advance: Line up a later flight, a different airport or ground transport for the final leg before anything goes wrong.\n3. Send one clear message: When a disruption is confirmed, give the executive the situation and the plan in a single message, not a stream of updates while you work the problem.",
  "p1": {
    "on": "This slide says a flight disruption on a high-stakes trip threatens the reason for the trip, and the best response is prepared in advance. The steps with the diagram: identify the hard deadline the travel has to meet before booking, know the backups (later flight, other airport, ground transport for the last leg), and send the executive one clear message with the plan.",
    "say": "Know the hard deadline and the backup before the plane leaves.",
    "ask": "What's the one message the executive should get when a flight is cancelled?"
  },
  "p2": {
    "on": "This slide warns against thinking about contingencies only after a disruption; for high-stakes travel the plan exists before departure. It adds that the executive should never learn about a flight problem from an app before hearing from you with a plan.",
    "say": "Reach them with a plan before the airline app does.",
    "wrap": "Prepare backups in advance, act fast, and communicate once, clearly.",
    "scenario": "Elias's flight to a trial appearance is cancelled, and the next available flight lands after the hearing starts. What do you do, and in what order?"
  },
  "s1": {
    "on": "This section says a flight disruption on a high-stakes trip threatens what the trip is for, so the plan is prepared in advance.",
    "say": "Prepared, not improvised."
  },
  "s2": {
    "on": "These steps are the plan: identify the hard deadline first, know backups ahead of time, and send the executive one clear message with the plan when disruption hits.",
    "say": "One clear message with the plan."
  },
  "s3": {
    "on": "This section warns against waiting until disruption hits, and says the executive should never hear about a flight problem from an app before hearing from you.",
    "say": "No surprises."
  }
},
"3::Recognizing Stress & Burnout in High-Pressure Roles": {
  "steps": "Here's our step-by-step for spotting stress and burnout early:\n1. Do a weekly two-minute check-in: Rate your energy from 1 to 10, and note your sleep, your error rate, and anything you consistently dread.\n2. Name the specific stressor: Not \"work is stressful,\" but, for example, after-hours texts, unclear priorities or constant travel changes. Specific problems have specific fixes.\n3. Track patterns for two weeks: Write one line a day before deciding what to change. Patterns show what's chronic versus a one-off bad day.\n4. Get support if it persists: If the signs last for weeks or affect your sleep, health or relationships, talk to your manager and consider professional support, such as an Employee Assistance Program or a healthcare provider.",
  "p1": {
    "on": "This slide separates stress (a normal response that can sharpen focus) from burnout, which the WHO describes as an occupational phenomenon. It names EA/PA stressors and early signs: irritability, dreading the inbox, sleep changes, more small mistakes and withdrawal. The steps with the diagram: a weekly self-check, name the specific stressor, track patterns for two weeks, and seek support if signs persist.",
    "say": "Early signs are easier to fix. Name the specific stressor.",
    "ask": "Which early warning sign would you notice first in yourself?"
  },
  "p2": {
    "on": "This slide warns against treating exhaustion as proof of dedication, because overload causes errors, and errors in legal support are costly. It also says to raise workload concerns before a crisis and to check on colleagues privately and kindly.",
    "say": "Exhaustion isn't dedication. It's a risk to the work.",
    "wrap": "Check in weekly, name the stressor, and raise concerns early.",
    "scenario": "You've double-booked Elias twice this week, you're snapping at vendors, and you check email at 11 p.m. every night \"just in case.\" What's happening, and what are your first three steps?"
  },
  "s1": {
    "on": "This section distinguishes stress (normal, sometimes useful) from burnout (chronic, with exhaustion, detachment and lower effectiveness), names EA/PA stressors and lists early signs.",
    "say": "Early signs are easier to fix."
  },
  "s2": {
    "on": "These steps are self-checks: a weekly two-minute check-in, naming the specific stressor, tracking patterns for two weeks, and raising it with your manager or an EAP if it persists.",
    "say": "Name it specifically, then track it.",
    "ask": "What's one stressor you could name today?"
  },
  "s3": {
    "on": "This section warns against treating exhaustion as dedication and waiting for a crisis, and asks you to check on colleagues privately and kindly.",
    "say": "Raise it early."
  }
},
"3::Stress Management Techniques That Work at a Desk": {
  "steps": "Here are four techniques you can use right at your desk, step by step:\n1. Breathe before a tense call: Take three to five slow breaths, in for about 4 counts and out for about 6, with your feet on the floor and shoulders down.\n2. Brain dump when overwhelmed: Write every open item on paper, then pick the single next action. Clarity on one step lowers the sense of chaos.\n3. Build in micro-breaks: Every 60 to 90 minutes, stand, stretch or walk for 3 to 5 minutes, and step away from the screen for lunch when you can.\n4. End with a shutdown ritual: Review tomorrow's calendar, write your top three priorities and close the inbox. It helps separate work from rest.",
  "p1": {
    "on": "This slide focuses on two-minute tools: controlled breathing with a longer exhale, a short walk, and resetting your task list, plus the point that structure lowers stress. The steps with the diagram: three to five slow breaths before a tense call, a brain dump when overwhelmed, micro-breaks every 60–90 minutes, and an end-of-day shutdown ritual.",
    "say": "Two-minute tools you can use between tasks.",
    "ask": "Let's do one 60-second breathing reset together now."
  },
  "p2": {
    "on": "This slide warns against relying only on caffeine and willpower. It says to protect sleep as a work skill and keep a short personal \"calm kit\" list so you don't have to think of it in the moment.",
    "say": "Caffeine masks fatigue. It doesn't reduce the load.",
    "wrap": "Breathe, brain-dump, take micro-breaks and shut down properly.",
    "scenario": "Elias calls in a hurry: a court date moved, three meetings must shift and a family event overlaps. What do you do in the first five minutes to stay clear-headed before touching the calendar?"
  },
  "s1": {
    "on": "This section says the best tools take two minutes between tasks: controlled breathing, a short walk, a task-list reset, plus structure that cuts decision load.",
    "say": "Two-minute tools."
  },
  "s2": {
    "on": "These steps are the techniques: slow breaths before tense calls, a brain dump when overwhelmed, micro-breaks every 60–90 minutes, and a shutdown ritual at day's end.",
    "say": "Pick the single next action.",
    "ask": "Which one will you try today?"
  },
  "s3": {
    "on": "This section warns that caffeine and willpower only mask fatigue, calls sleep a work skill, and suggests a personal 'calm kit' list.",
    "say": "Know your calm kit before you need it."
  }
},
"3::Setting Boundaries & Managing Executive Pressure": {
  "steps": "Here's our step-by-step for setting boundaries and handling pressure calmly:\n1. Agree availability rules in writing: Set working hours, what counts as a true after-hours emergency, and the channel for it, for example a phone call, not email.\n2. Ask which priority moves: When a new request collides with existing work, ask \"Which of these should move?\" instead of silently absorbing both.\n3. Use a calm script under pressure: Acknowledge (\"I understand this is urgent\"), state the facts (\"The filing is due at 3\"), then offer options (\"I can move the vendor call or ask Maria to cover it\").",
  "p1": {
    "on": "This slide defines boundaries as agreements about availability, response times and scope. Unclear expectations cause most stress, and executive pressure often reflects the executive's own stress. The steps with the diagram: agree availability rules in writing, ask \"Which of these should move?\" when requests collide, and use a calm script: acknowledge, state facts, offer options.",
    "say": "Acknowledge, state the facts, offer options.",
    "ask": "What counts as a true after-hours emergency in your role?"
  },
  "p2": {
    "on": "This slide warns that answering every late-night message instantly trains the expectation that you're always available. It says a boundary must never become an excuse to miss a real legal deadline, so build the emergency path into the agreement, and revisit it when roles or workload change.",
    "say": "Build the emergency path into the agreement.",
    "wrap": "Agree the rules in writing, use the calm script, and revisit as things change.",
    "scenario": "Elias texts at 10:40 p.m. asking you to \"quickly\" rebook tomorrow's 8 a.m. client meeting. Your after-hours rule covers court and family emergencies only. What do you do tonight, and what do you say tomorrow?"
  },
  "s1": {
    "on": "This section defines boundaries as agreements on availability, response times and scope, says undefined 'urgent' drives stress, and advises calm facts over matching the executive's urgency.",
    "say": "Define urgent, together."
  },
  "s2": {
    "on": "These steps set boundaries: agree availability in writing, ask 'which of these should move?' when priorities collide, and use the acknowledge–facts–options script.",
    "say": "Acknowledge, state facts, offer options.",
    "ask": "How would you use that script with an urgent late request?"
  },
  "s3": {
    "on": "This section warns that instant late-night replies set the expectation, that boundaries never excuse missing a legal deadline, and that agreements need revisiting.",
    "say": "Build the emergency path into the agreement."
  }
},
"3::Recovery, Workload Conversations & Support Resources": {
  "steps": "Here's the step-by-step for recovering and getting the support you need:\n1. Prepare the workload conversation: List your recurring tasks, the hours they take and what's slipping, then bring two or three concrete options, such as delegating, pausing, adding support or moving deadlines.\n2. Plan real time off with a handover: Set up delegate access, an out-of-office message and a one-page status note, so you can actually disconnect.\n3. Know your support before you need it: Keep your employer's EAP details, your manager or HR contact, and your own trusted people close at hand.",
  "p1": {
    "on": "This slide says recovery is part of performance, workload problems are business problems to raise early with data, and support exists, such as confidential Employee Assistance Programs. The steps with the diagram: prepare a workload conversation with tasks, hours, what's slipping and options, plan time off with a coverage handover, and know where support is before you need it.",
    "say": "Raise workload early with data and options. It's professional, not a complaint.",
    "ask": "Do you know where your employer's support information lives?"
  },
  "p2": {
    "on": "This slide warns against waiting until exhaustion to raise workload, because then it feels like a crisis. It also says you can ask for workload changes without disclosing health details, and to cover for colleagues properly so the whole team can recover.",
    "say": "You don't have to share a diagnosis to ask for a workload change.",
    "wrap": "Raise it early, plan real time off, and know your support resources.",
    "scenario": "You've worked 55-hour weeks for two months and your error rate is rising. Draft the first two sentences of a workload conversation with Elias, and list the options you'd bring."
  },
  "s1": {
    "on": "This section says recovery is part of performance, workload issues are business issues to raise with data, and support exists (EAPs, healthcare providers, the 988 Lifeline in the US).",
    "say": "Raising workload is professional, not a complaint."
  },
  "s2": {
    "on": "These steps prepare: a workload conversation with tasks, hours and options, real time off with a coverage handover, and knowing where support is in advance.",
    "say": "Bring data and options."
  },
  "s3": {
    "on": "This section warns against waiting until exhausted, says health details can stay private, and asks the team to cover each other properly.",
    "say": "A plan, not a crisis."
  }
}
});
