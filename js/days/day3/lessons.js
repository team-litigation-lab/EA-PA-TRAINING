/* ============================================================
   DAY 3 — Time, Calendar & Travel Management
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
  "title": "Time, Calendar & Travel Management",
  "theme": "Prioritization & Time Tracking · Calendar Discipline & Contact Lists · Travel Planning",
  "objective": "Build the discipline to prioritize and protect time, keep a calendar that actually holds under pressure, and plan travel end-to-end.",
  "lessons": [
    {
      "h": "Prioritization Frameworks",
      "section": "Time Management & Productivity",
      "svgDiagram": "<svg viewBox=\"0 0 560 380\" xmlns=\"http://www.w3.org/2000/svg\"><style>.axl{font:700 12px 'IBM Plex Mono',monospace;fill:#5B6178;letter-spacing:.04em;}.ql{font:700 15px Arial,sans-serif;fill:#fff;}.qs{font:400 11.5px Arial,sans-serif;fill:rgba(255,255,255,.85);}</style><rect x=\"70\" y=\"20\" width=\"460\" height=\"300\" rx=\"10\" fill=\"none\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"320\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><line x1=\"70\" y1=\"170\" x2=\"530\" y2=\"170\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><rect x=\"72\" y=\"22\" width=\"226\" height=\"146\" rx=\"6\" fill=\"#B54A3F\"/><rect x=\"302\" y=\"22\" width=\"226\" height=\"146\" rx=\"6\" fill=\"#262B45\"/><rect x=\"72\" y=\"172\" width=\"226\" height=\"146\" rx=\"6\" fill=\"#DB8437\"/><rect x=\"302\" y=\"172\" width=\"226\" height=\"146\" rx=\"6\" fill=\"#5B6178\"/><text x=\"185\" y=\"70\" text-anchor=\"middle\" class=\"ql\">DO NOW</text><text x=\"185\" y=\"90\" text-anchor=\"middle\" class=\"qs\">Urgent + Important</text><circle cx=\"185\" cy=\"122\" r=\"10\" fill=\"#fff\" class=\"svg-pulse-dot\"/><circle cx=\"185\" cy=\"122\" r=\"4\" fill=\"#B54A3F\"/><text x=\"415\" y=\"70\" text-anchor=\"middle\" class=\"ql\">SCHEDULE</text><text x=\"415\" y=\"90\" text-anchor=\"middle\" class=\"qs\">Not Urgent + Important</text><text x=\"185\" y=\"222\" text-anchor=\"middle\" class=\"ql\">DELEGATE</text><text x=\"185\" y=\"242\" text-anchor=\"middle\" class=\"qs\">Urgent + Not Important</text><text x=\"415\" y=\"222\" text-anchor=\"middle\" class=\"ql\">DROP</text><text x=\"415\" y=\"242\" text-anchor=\"middle\" class=\"qs\">Not Urgent + Not Important</text><text x=\"300\" y=\"345\" text-anchor=\"middle\" class=\"axl\">URGENT &#8592;&#8594; NOT URGENT</text><text x=\"30\" y=\"175\" text-anchor=\"middle\" class=\"axl\" transform=\"rotate(-90 30 175)\">IMPORTANT &#8592;&#8594; NOT</text><g transform=\"translate(326,118)\"><rect width=\"178\" height=\"24\" rx=\"12\" fill=\"#B5651F\" stroke=\"#F0C08A\" stroke-width=\"2\" class=\"svg-callout-badge\"/><text x=\"89\" y=\"16\" text-anchor=\"middle\" style=\"font:800 9.5px Arial,sans-serif;fill:#fff;letter-spacing:.03em;\">&#127919; EXECUTIVE RULE</text></g></svg>",
      "b": [
        "Effective triage can reclaim 10+ hours a week."
      ],
      "callout": {
        "type": "stat",
        "label": "Why this matters",
        "text": "Executives spend 30–40% of their time in email. Effective filtering and triage can reclaim 10+ hours a week."
      },
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Eisenhower Matrix",
          "desc": "Sort by urgency and importance so effort goes to what truly matters"
        },
        {
          "label": "Pomodoro Technique",
          "desc": "25 minutes of focused work, 5-minute break, longer break every 4 cycles"
        },
        {
          "label": "Time Blocking",
          "desc": "Dedicated blocks for deep work vs. email to reduce distraction and multitasking"
        },
        {
          "label": "80/20 Rule (Pareto)",
          "desc": "Identify the 20% of activities producing 80% of the results"
        }
      ],
      "howTo": [
        "When your task list is genuinely overwhelming, start with the Eisenhower Matrix — sort by urgency and importance first, so effort goes to what actually matters, not just what feels loudest.",
        "For focused execution once priorities are sorted, apply the Pomodoro Technique — 25 minutes of focused work, a 5-minute break, a longer break every 4 cycles.",
        "Protect the highest-priority work with Time Blocking — a dedicated block for deep work versus email, so the two don't compete moment to moment.",
        "Periodically step back and apply the 80/20 Rule — identify which 20% of your activities are actually producing 80% of the results, and weight your time accordingly.",
        "Don't try to run all four simultaneously from day one — pick the one framework that addresses your current biggest gap, build the habit, then layer in the next."
      ],
      "trainerCue": "Don't lecture through all four frameworks back to back — pause after each one and ask who already uses it, even without knowing its name."
    },
    {
      "h": "Time Management",
      "section": "Time Management & Productivity",
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Decide",
          "desc": "Before touching the calendar, decide what actually deserves protected time this week — this is a prioritization call, not a scheduling one"
        },
        {
          "label": "Block",
          "desc": "Turn that decision into an actual calendar block, before the day fills up with other people's requests"
        },
        {
          "label": "Protect",
          "desc": "Defend the block the way you'd defend any other commitment — a calendar entry with no protection behind it isn't really management"
        },
        {
          "label": "Review",
          "desc": "Check weekly whether protected time actually held, or whether it kept losing to whatever felt urgent in the moment"
        }
      ],
      "b": [
        "Time management and calendar management aren't the same skill, even though they're inseparable in practice: time management is deciding what deserves time; calendar management is making sure the calendar actually reflects and protects that decision."
      ],
      "trainerCue": "Use this topic as the explicit bridge before the Calendar Management topic — the tool later in this day tests both calendar conflict resolution AND travel planning together, so make the connection between deciding priorities and protecting them on a calendar explicit here."
    },
    {
      "h": "When Time Management Fails Despite a Clean Calendar",
      "section": "Time Management & Productivity",
      "b": [
        "A calendar that's technically conflict-free can still fail at time management — if it's packed with reactive meetings and has no protected space for the work that actually matters most.",
        "This connects directly to travel planning too: a trip only works if the calendar around it — before, during, and after — was managed with the same discipline as the itinerary itself.",
        "Discussion prompt: think of a week where your calendar looked fine on paper but the actual priorities still didn't get done — what broke, the decision or the protection of it?"
      ],
      "howTo": [
        "Check your calendar for reactive-meeting saturation, not just conflicts — a technically conflict-free calendar can still be packed with low-value reactive meetings that crowd out real priority work.",
        "Confirm protected space actually exists for the work that matters most this week, not just that no two events overlap.",
        "Apply this same check to travel weeks specifically — a trip only works if the calendar before, during, and after it was managed with the same discipline as the itinerary itself.",
        "When a week goes wrong despite a clean-looking calendar, diagnose whether the failure was in the decision (wrong priorities set) or the protection (right priorities set but not defended) — the fix differs for each.",
        "Review this pattern weekly, not just when something visibly breaks — a clean calendar with no protected priority time will quietly fail the same way every week until it's checked."
      ],
      "trainerCue": "Actually run the discussion prompt — a specific memory of a technically-fine-but-actually-failed week is what makes 'protection, not just decision' land as a real distinction rather than a wordplay."
    },
    {
      "h": "Energy Management vs. Time Management",
      "section": "Time Management & Productivity",
      "singleSlide": true,
      "b": [
        "Time management asks 'when should this happen'; energy management asks 'am I actually capable of doing this well right now' — both matter, and most people only plan around the first one.",
        "Most people have a predictable energy pattern across the day — a window of sharp focus, a mid-afternoon dip, a second wind. Protecting the sharp-focus window for the work that actually needs it is a real scheduling decision, not a luxury.",
        "As an EA, this applies to your executive's calendar too: a high-stakes negotiation scheduled during their known low-energy window is a real risk you can flag, not just a time slot that happened to be open."
      ],
      "howTo": [
        "Identify your own (or your executive's) predictable energy pattern across the day — a sharp-focus window, a mid-afternoon dip, a possible second wind.",
        "Protect the sharp-focus window specifically for the work that actually needs it — treat this as a real scheduling decision, not a luxury to sacrifice when the calendar gets full.",
        "When scheduling for someone else, check a high-stakes item (a negotiation, a critical decision) against their known low-energy windows before confirming the time.",
        "If a high-stakes item must land during a known low-energy window, flag that explicitly as a real risk rather than treating the slot as neutral just because it was open.",
        "Revisit this pattern periodically — energy rhythms can shift with role changes, travel, or life circumstances, so don't treat it as fixed forever."
      ],
      "trainerCue": "Ask the room to name their own natural high-energy window — most people already know it intuitively but have never actually protected it on a calendar."
    },
    {
      "h": "Handling Interruptions Without Losing the Day",
      "section": "Time Management & Productivity",
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Triage in Seconds",
          "desc": "Is this genuinely urgent, or does it just feel urgent because it's happening right now?"
        },
        {
          "label": "Capture, Don't Solve",
          "desc": "If it's not truly urgent, write it down where you'll actually see it later — don't trust memory"
        },
        {
          "label": "Return Deliberately",
          "desc": "Finish the thought you were on before the interruption, don't just abandon it"
        },
        {
          "label": "Batch the Non-Urgent",
          "desc": "Handle captured items in one block later, rather than one at a time as they arrive"
        }
      ],
      "b": [
        "Every interruption has a hidden cost beyond its own length — the time it takes to mentally return to what you were doing before it. A two-minute interruption can cost fifteen minutes of real focus.",
        "Not every interruption is actually urgent — it just arrives with urgency because it's happening in the present moment. Learning to tell the difference in the first few seconds is the actual skill."
      ],
      "trainerCue": "Ask the room how long it actually takes them to get back to full focus after a genuine interruption — most underestimate it badly until they think about it directly."
    },
    {
      "h": "The Two-Minute Rule",
      "section": "Time Management & Productivity",
      "b": [
        "If a task will genuinely take less than two minutes, do it immediately instead of adding it to a list — the overhead of tracking it exceeds the cost of just finishing it.",
        "This only works as a discipline if it's applied honestly — a task that 'should' take two minutes but keeps expanding once you start is a sign to stop and actually schedule it properly instead.",
        "The rule prevents small tasks from silently accumulating into a backlog that feels overwhelming even though no single item was ever hard."
      ],
      "howTo": [
        "When a task lands, honestly estimate whether it will genuinely take less than two minutes — not whether you hope it will.",
        "If it genuinely qualifies, do it immediately instead of adding it to a list — the overhead of tracking it exceeds the cost of just finishing it.",
        "If it starts expanding once you begin (it \"should\" take two minutes but clearly won't), stop and schedule it properly instead of forcing it through under the two-minute label.",
        "Apply this rule consistently across a work session, not just occasionally — its value comes from preventing small tasks from silently accumulating into an overwhelming backlog.",
        "Periodically check your own task list for items that have been sitting there despite genuinely qualifying for the two-minute rule — that's a sign the discipline has lapsed."
      ],
      "trainerCue": "Ask the room to estimate how many two-minute tasks are currently sitting unaddressed in their own inbox or task list right now — the number is usually higher than expected."
    },
    {
      "h": "Batch Processing Similar Tasks",
      "section": "Time Management & Productivity",
      "b": [
        "Grouping similar tasks together (all calls in one block, all email replies in another) reduces the mental cost of switching between completely different types of work.",
        "This is different from just doing tasks in the order they arrive — batching is a deliberate choice to delay some tasks slightly so they can be done together more efficiently.",
        "The trade-off is real: batching works best for tasks without a hard individual deadline. A genuinely urgent item still needs to break the batch."
      ],
      "howTo": [
        "Identify categories of similar, recurring tasks in your own workload — calls, email replies, data entry — that are currently handled one at a time as they arrive.",
        "Group same-category tasks into a dedicated block rather than switching between different types of work throughout the day.",
        "Deliberately delay non-urgent items slightly so they can be batched together, rather than defaulting to first-in-first-out processing.",
        "Break the batch immediately for anything genuinely urgent — batching only applies to tasks without a hard individual deadline.",
        "Review your batching categories periodically — as your workload shifts, which tasks are worth batching can change too."
      ],
      "trainerCue": "Ask the room to name one category of their own recurring work that's currently handled one-at-a-time as it arrives, but could realistically be batched."
    },
    {
      "h": "The Cost of Context-Switching",
      "section": "Time Management & Productivity",
      "layout": "STAT",
      "statNumber": "23 minutes",
      "statLabel": "average time to return to full focus after a significant interruption",
      "b": [
        "Every switch between unrelated tasks — not just interruptions, but voluntarily jumping between different types of work — carries a real cost in the time it takes to rebuild full concentration.",
        "This is the strongest practical argument for batching and protected focus blocks: it's not about discipline for its own sake, it's about not paying the same mental re-entry cost dozens of times a day.",
        "Multitasking on genuinely different cognitive tasks (not just background tasks like listening to music) is almost always slower in total than doing them one at a time, even though it feels more productive in the moment."
      ],
      "howTo": [
        "Notice when you're voluntarily jumping between unrelated types of work, not just reacting to interruptions — both carry the same real refocusing cost.",
        "Use batching and protected focus blocks deliberately to reduce how often you pay the re-entry cost across a day.",
        "Resist multitasking on genuinely different cognitive tasks — it feels productive in the moment but is almost always slower in total than sequential focus.",
        "When you must switch tasks, allow a brief moment to consciously close out the previous task before starting the next, rather than abruptly jumping.",
        "Track your own switching frequency for a day occasionally — most people significantly underestimate how often they do it until they actually count."
      ],
      "trainerCue": "Ask the room to count how many times they've switched between unrelated tasks in just the last hour — the number is usually far higher than they'd guess before counting."
    },
    {
      "h": "Weekly Planning Rituals",
      "section": "Time Management & Productivity",
      "b": [
        "A short, consistent weekly planning session — reviewing what's coming, what didn't get done last week, and what actually needs to happen this week — prevents the Monday-morning scramble of reconstructing priorities from scratch.",
        "This is different from daily planning: weekly planning catches the things that don't fit neatly into a single day, like a deadline that's three days out but needs prep starting today.",
        "The ritual only works if it's protected on the calendar itself — a planning session that gets bumped for 'something more urgent' every week isn't actually a ritual."
      ],
      "howTo": [
        "Set a fixed, recurring time each week for planning — the ritual only works if it's protected on the calendar the same way any other real commitment is.",
        "During the session, review what's coming in the week ahead, not just today — this is what catches items that need prep starting several days before they're due.",
        "Review what didn't get done the previous week and decide deliberately whether it still matters or should be dropped, rather than letting it silently roll forward.",
        "Identify anything that needs multi-day lead time (a deadline three days out that needs prep starting today) and block time for it now, not the day it becomes urgent.",
        "Defend this block the way you would any other meeting — a planning session that gets bumped for \"something more urgent\" every week has stopped functioning as a real ritual."
      ],
      "trainerCue": "Ask who currently has an actual standing weekly planning block versus who plans reactively each morning — this usually splits the room roughly in half."
    },
    {
      "h": "Saying No Without Damaging Relationships",
      "section": "Time Management & Productivity",
      "layout": "COMPARE",
      "compareLeft": {
        "label": "Damages the Relationship",
        "items": [
          "A flat 'no' with no explanation",
          "Silence — never responding at all",
          "Agreeing, then quietly not delivering"
        ]
      },
      "compareRight": {
        "label": "Protects the Relationship",
        "items": [
          "A clear no, with the real reason and a genuine alternative",
          "A prompt response, even if the answer is no",
          "Honesty up front about what you can't take on"
        ]
      },
      "b": [
        "Saying yes to everything isn't actually generous — it just moves the disappointment to later, when something inevitably slips because there was never enough real capacity for it.",
        "A well-delivered no is specific about the constraint ('I can't take this on before Thursday given X') rather than vague, which makes it feel like a real answer instead of a dismissal."
      ],
      "howTo": [
        "When you need to decline a request, respond promptly rather than going silent — a fast no protects the relationship far better than delayed silence.",
        "State the real reason for the no specifically (\"I can't take this on before Thursday given X\") rather than a vague, unexplained decline.",
        "Offer a genuine alternative alongside the no where possible — a different timeline, a different person, a partial version of the ask.",
        "Never agree just to avoid the discomfort of saying no, and then quietly fail to deliver — this damages trust more than an honest no ever would.",
        "If you're genuinely at capacity, say so plainly up front rather than accepting more and letting something inevitably slip later."
      ],
      "trainerCue": "Ask for a real example of a 'no' that actually strengthened a working relationship because it was handled well — most people have one if they think about it."
    },
    {
      "h": "Setting Realistic Deadlines",
      "section": "Time Management & Productivity",
      "b": [
        "A deadline that's set without genuinely accounting for the work involved isn't a real deadline — it's a guess that creates false confidence until it's suddenly missed.",
        "Building in real buffer for the unexpected (not padding every estimate blindly, but accounting for genuine uncertainty) is what makes a deadline something people can actually plan around.",
        "As an EA, you're often the one setting deadlines for tasks you're not personally doing — checking in with whoever's doing the actual work before committing to a date is what keeps the deadline honest."
      ],
      "howTo": [
        "Before setting a deadline, genuinely account for the actual work involved — a deadline set without this is a guess, not a real commitment.",
        "Check in with whoever will actually be doing the work before committing to a date on their behalf — this keeps the deadline honest rather than optimistic.",
        "Build in real buffer for genuine uncertainty, without padding every estimate blindly regardless of actual risk.",
        "State the deadline clearly with an owner attached, the same discipline covered in the ACT Email framework from Day 1 — a deadline with no clear owner is the most common reason it slips.",
        "If a deadline later looks at risk, flag that early rather than waiting until it's already missed — an early flag gives real options that a last-minute one doesn't."
      ],
      "trainerCue": "Ask for a real example of a deadline that was set too optimistically and what that actually cost once it slipped — this is a nearly universal experience worth naming directly."
    },
    {
      "h": "Time Tracking Done Right",
      "section": "Time Management & Productivity",
      "b": [
        "Common mistakes: logging time at week's end, vague descriptions, underbilling small tasks, forgetting communications.",
        "Build a Weekly Time Summary even for non-billable work — it reveals where time actually goes."
      ],
      "howTo": [
        "Log time as you work, not at the end of the week — reconstructing a week from memory is where the most common tracking mistakes creep in.",
        "Write specific descriptions for each entry, not vague ones — a description has to be useful to someone reviewing it later, not just a placeholder to fill the field.",
        "Don't skip logging small tasks because they feel too minor to bother with — these are the ones that add up to real underbilling or lost visibility over a year.",
        "Include communications (calls, emails handled on someone's behalf) in your tracking, not just document work — these are real time and often the most commonly forgotten category.",
        "Build a Weekly Time Summary even for non-billable work — it's what actually reveals where your time goes, not just what you assume it goes to."
      ],
      "trainerCue": "Ask the room to guess which time-tracking mistake costs the most money over a year — most guess wrong (it's usually the small underbilled tasks, not the big missed ones)."
    },
    {
      "h": "The Weekly Time Audit",
      "section": "Time Management & Productivity",
      "b": [
        "Most people's sense of where their time actually goes is inaccurate — a real time audit (tracking actual activity for even one representative week) usually reveals surprises that pure intuition misses.",
        "The goal isn't to track time forever — it's a periodic check-in to catch drift, the same way a budget review catches spending patterns that crept in unnoticed.",
        "This connects directly to the Time Tracking Done Right topic earlier in this day — a periodic audit is what turns raw tracked data into an actual improvement, rather than just a log nobody reviews."
      ],
      "howTo": [
        "Track your actual activity for one representative week — not your assumed pattern, since intuition about where time goes is usually inaccurate.",
        "Compare the tracked data against what you believed your priorities were that week — the gap between the two is the actual finding.",
        "Treat this as a periodic check-in, not a permanent tracking habit — the goal is catching drift occasionally, the same way a budget review catches unnoticed spending patterns.",
        "Use the Time Tracking Done Right discipline from earlier in this day as the input — a periodic audit only works if the underlying data was actually captured accurately.",
        "Act on what the audit reveals — an audit that's reviewed but doesn't change anything about the following week's planning isn't actually serving its purpose."
      ],
      "trainerCue": "Ask the room to guess, before checking, what percentage of their week goes to their top priority — then compare that guess to what a real audit would likely show. The gap is usually the whole lesson."
    },
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
        "This is the same principle as backup-vendor identification from Day 5 — a real contingency plan exists before it's needed, not improvised in the moment."
      ],
      "howTo": [
        "Before finalizing any trip, identify the realistic disruption scenarios for that specific itinerary — a cancelled flight, a missed connection, severe weather at a key leg.",
        "Identify the actual backup options in advance for each scenario — the next viable flight, an alternate routing, a local contact at the destination.",
        "Document these contingencies alongside the itinerary itself, not as a separate afterthought that's hard to find under pressure.",
        "When a disruption actually happens, execute the pre-identified backup immediately rather than starting to research options from scratch.",
        "Apply the same principle used for backup-vendor identification (per Day 5) — a real contingency plan exists before it's needed, not improvised in the moment."
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
        "This connects directly to the SOA reconciliation and expense-entry discipline from Day 7 — travel expense tracking is the same skill, applied under less controlled conditions."
      ],
      "howTo": [
        "Capture every receipt immediately when it's received — a photo, a dedicated folder, anything — rather than planning to collect them all at the end of the trip.",
        "Categorize each expense as it happens (which client, which matter, which cost center) while the context is still fresh, not in a batch afterward.",
        "Apply the same reconciliation discipline used for regular expense tracking (per the Day 7 SOA process) — travel expenses are the same skill under less controlled conditions.",
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
        "This connects directly to the Home Binder discipline from Day 5 — a travel checklist is the same kind of durable, written reference, just scoped to trip preparation specifically."
      ],
      "howTo": [
        "Write the checklist down once, in a reusable form, rather than reconstructing it from memory for every trip.",
        "Cover documentation requirements (passport, visa) as a distinct section, separate from booking logistics.",
        "Include health and safety prep specific to the destination, not just a generic packing list.",
        "Add a loyalty-numbers-applied confirmation step and a contingency contact for the trip, so neither gets missed under time pressure.",
        "Treat this checklist as a durable, written reference the same way the Home Binder (per Day 5) works — build it once, reuse and refine it every trip after."
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
        "This is the same continuous-improvement discipline as the seasonal-coordination playbook from Day 6 — a trip debrief is a small-scale version of the same habit."
      ],
      "howTo": [
        "Reconcile travel expenses promptly after return, rather than letting receipts and costs accumulate unaddressed.",
        "Send any thank-you or follow-up communications the trip generated while it's still timely, not weeks later.",
        "Write a brief note on what worked and what didn't (a hotel that fell short, a connection that was too tight) while the details are still fresh.",
        "Feed that note back into the standing travel preferences or checklist, so the next trip's planning is genuinely improved, not a repeat of the same issue.",
        "Treat this as the same continuous-improvement habit as the seasonal-coordination playbook (per Day 6), just applied at the scale of a single trip."
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
      "afterIndex": 0,
      "q": "Which prioritization technique focuses on the 20% of tasks that produce 80% of results?",
      "opts": [
        "The 80/20 Rule (Pareto Principle)",
        "Time Blocking",
        "The Eisenhower Matrix",
        "The Pomodoro Technique"
      ],
      "a": 0,
      "r": "Pareto's principle is about impact concentration — a small slice of effort driving most of the outcome."
    }
  ],
  "quiz": [
    {
      "q": "Which is a core principle of gatekeeping?",
      "opts": [
        "Always say no to protect the executive's time",
        "Ignore requests that seem unimportant",
        "Access is filtered, not denied",
        "Blame the requester for bad timing"
      ],
      "a": 2,
      "r": "Gatekeeping filters and redirects — it doesn't shut the door."
    },
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
      "q": "Best first step to ensure an accurate meeting transcription?",
      "opts": [
        "Verify the recording software is working before the meeting, and assign a backup note-taker",
        "Rely on the platform's automatic transcript, since it captures every word more reliably than a person",
        "Share the raw recording immediately with stakeholders",
        "Clean up the transcript's wording for clarity afterwards, so it reads well before it's shared"
      ],
      "a": 0,
      "r": "Catching a recording failure before it happens is far cheaper than fixing it after."
    },
    {
      "q": "A stakeholder says the meeting minutes were unclear. Best course of action?",
      "opts": [
        "Explain that the minutes reflect what was said, and invite them to add their own notes",
        "Apologize, revise the minutes for clarity, and standardize a template for next time",
        "Send the full raw transcript next time instead, so nothing can be left out or misunderstood",
        "Blame the executive for speaking unclearly"
      ],
      "a": 1,
      "r": "Fix the immediate issue and the process, so it doesn't repeat."
    },
    {
      "q": "A client updates their contact info, but teammates keep using the old details. What ensures accuracy?",
      "opts": [
        "Delete the old info without telling anyone",
        "Update the details in your own address book and remind people when they ask",
        "Email the new details to the colleagues who contact that client most",
        "Update the master list and notify the whole team"
      ],
      "a": 3,
      "r": "One source of truth, actively communicated, is what keeps a shared list reliable."
    },
    {
      "q": "Why is gatekeeping described as 'not no'?",
      "opts": [
        "Because the gatekeeper's job is to agree to requests quickly, so the executive never looks unavailable",
        "Effective gatekeeping filters and redirects appropriately rather than reflexively refusing access",
        "Because a gatekeeper should pass every request to the executive and let them do the refusing",
        "Because saying no is the executive's decision, so the gatekeeper passes every request on untouched"
      ],
      "a": 1,
      "r": "Good gatekeeping protects the executive's time and attention while still routing legitimate needs appropriately."
    },
    {
      "q": "What is the core purpose of a filtering matrix for incoming requests?",
      "opts": [
        "To reduce the number of requests the executive sees by declining everything that isn't from a client",
        "To share requests evenly across the team, so no one person gets overloaded",
        "To systematically sort requests by urgency and importance so the right ones reach the executive",
        "To create a written record of every request so the assistant can prove what was received"
      ],
      "a": 2,
      "r": "A filtering matrix gives a consistent, defensible way to decide what needs the executive's direct attention."
    },
    {
      "q": "What makes a redirect script effective without alienating the person being redirected?",
      "opts": [
        "Acknowledging their need while clearly explaining the appropriate next step or contact",
        "Keeping it short and firm, so the person understands the answer is final and doesn't push back",
        "Blaming the executive for being unavailable",
        "Staying vague about the reason, so the executive's schedule and priorities stay confidential"
      ],
      "a": 0,
      "r": "Effective redirects validate the person's need while still protecting the executive's time — both matter."
    },
    {
      "q": "Why does transcription accuracy in virtual meetings matter beyond just having a record?",
      "opts": [
        "Transcripts are legally required for every meeting and must be kept on file for seven years",
        "Accuracy only matters for meetings over one hour",
        "Errors can propagate into follow-up actions, decisions, and commitments made based on the notes",
        "Accurate transcripts mean the assistant no longer needs to take any notes during the meeting"
      ],
      "a": 2,
      "r": "A transcription error can quietly corrupt every decision or action item that gets built on top of it."
    },
    {
      "q": "What is the main risk of prioritizing tasks purely by order received rather than by a framework?",
      "opts": [
        "None really: first-come, first-served is the fairest method and keeps everyone equally happy",
        "Urgent, high-impact items can get buried behind less important but earlier requests",
        "The assistant ends up spending too long on each task because they're handled one at a time",
        "Each task takes longer, because there's no time set aside for planning"
      ],
      "a": 1,
      "r": "Without a prioritization framework, timing rather than actual importance ends up driving the day."
    },
    {
      "q": "What does 'time tracking done right' primarily protect against?",
      "opts": [
        "Losing visibility into where time actually goes, which undermines both billing accuracy and workload planning",
        "Being questioned by management about how long breaks are and when people start and finish work",
        "Being paid incorrectly, since hourly pay depends on accurate timesheets each week",
        "Clients disputing invoices because the time entries don't show which staff member did the work each day"
      ],
      "a": 0,
      "r": "Accurate time tracking protects billing integrity and gives real data for workload and capacity decisions."
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
      "q": "What is a reasonable first response when a stakeholder pushes back on being redirected by an EA?",
      "opts": [
        "Calmly restate the redirect with the reason and next step, without becoming defensive",
        "Apologize and put them through to the executive, since pushback usually means it really is urgent",
        "Escalate straight to the executive so they can decide, rather than risk upsetting the stakeholder",
        "Offer to pass their message on to the executive word for word, and leave it there"
      ],
      "a": 0,
      "r": "Holding a calm, clear redirect — without caving or becoming defensive — is the core gatekeeping skill being tested."
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
      "q": "What is the risk of a gatekeeper who says 'no' too bluntly, without redirecting?",
      "opts": [
        "The requester may simply go straight to the executive, but the decision itself is still protected",
        "It damages the relationship and reflects poorly on the executive, even if the underlying decision was correct",
        "It only matters for external contacts, not internal ones",
        "Only a small one: a clear, blunt no saves everyone time, even if it feels a little abrupt"
      ],
      "a": 1,
      "r": "How a 'no' is delivered matters as much as the decision itself — the executive's reputation is on the line too."
    },
    {
      "q": "What should a prioritization framework account for that a simple to-do list usually misses?",
      "opts": [
        "Which tasks are easiest to complete first",
        "The order tasks were added to the list",
        "The relative urgency and importance of each item, not just its existence",
        "How long each item will take, so the quickest tasks can be cleared first to shorten the list"
      ],
      "a": 2,
      "r": "A flat list treats every item as equal; a framework forces an explicit judgment about urgency and importance."
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
      "q": "Why does a transcript need a review step even when using accurate transcription software?",
      "opts": [
        "Long transcripts need shortening into minutes before anyone will read them, so review is really about length",
        "Names, technical terms, and context-specific phrasing are common error points even in generally accurate transcripts",
        "Because transcripts must be signed off by every attendee before they can be stored or shared",
        "Because transcription software can't be trusted, so every line must be retyped from the recording"
      ],
      "a": 1,
      "r": "Even strong transcription tools commonly mishear names and specialized terms, which is exactly where review adds value."
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
    }
  ],
  "discussionQuestion": "Share a time you had to say 'not now' to someone without damaging the relationship. What made it land well — or not?"
};

const DAY3_EXTRA_LEARNING = {
  "3::Prioritization Frameworks": {
    "t": "Choosing the Right Framework",
    "p": [
      "Eisenhower Matrix — best when the list is overwhelming and you need to decide what not to do. Sort by urgent/important, then delegate or drop two of the four quadrants.",
      "Pomodoro — best when the priorities are clear but focus is the problem: 25 minutes of single-task work, a 5-minute break, repeat.",
      "Time Blocking — best for protecting the few tasks that matter most this week by giving them a fixed calendar slot before other requests fill the day."
    ]
  },
  "3::Time Tracking Done Right": {
    "t": "Writing a Useful Time Entry",
    "p": [
      "Formula: verb + object + purpose — 'Drafted deposition notice for Harlow matter; circulated to counsel for review' tells a reviewer exactly what was done and why.",
      "Record in increments your firm uses (often 0.1 hour = 6 minutes) and round honestly — consistent small inaccuracies distort a whole month's billing.",
      "Tag each entry with the client/matter as you log it; assigning time to matters days later is where the most write-offs and disputes begin."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[3] = { day: DAY3, extraLearning: DAY3_EXTRA_LEARNING };
