/* Day 2 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
"2::Before You Begin: AI Use in the Legal Industry": {
  "p1": {
    "on": "This slide sets the frame for every AI topic in the program: AI can help, but every technique has to clear this standard first. The five steps cover confirming the firm's or attorney's AI preference, keeping legal judgment and client-facing calls human, checking for privileged content before pasting, and asking first when unsure.",
    "say": "Before we talk about what AI can do, here's the standard it has to meet: firm preference first, human judgment on legal calls, and nothing privileged pasted in.",
    "ask": "Does your firm, or one you know, have an explicit AI policy? Do you know what it says?"
  },
  "p2": {
    "on": "This slide lists three watch-outs: firm and attorney preference comes first, human review isn't optional for legal judgment or case strategy, and confidentiality is the highest-stakes line, because anything pasted into an AI tool can carry real legal exposure.",
    "say": "Privileged information pasted into the wrong tool is a real legal problem, not a technicality.",
    "wrap": "Every AI technique today passes through this filter: preference, human judgment, confidentiality.",
    "scenario": "Elias asks you to \"run the Meridian deposition transcript through AI and pull out the contradictions.\" Before you do anything, what do you need to check, and what do you say to him?"
  },
  "s1": {
    "on": "This section frames every AI topic in the program: AI can genuinely help, but every technique has to clear the standard set here first.",
    "say": "Everything AI we cover today sits inside this frame."
  },
  "s2": {
    "on": "These steps are the standard: confirm the firm or attorney's preference for this matter, keep legal judgment and client-facing work with the attorney, check for privileged content before pasting, and ask first when unsure.",
    "say": "Preference first, human judgment on legal calls, nothing privileged pasted in.",
    "ask": "Do you know your firm's AI policy?"
  },
  "s3": {
    "on": "This section gives three watch-outs: preference varies by attorney and matter, human review isn't optional for legal judgment, and privileged information in an AI tool is real legal exposure.",
    "say": "When in doubt, don't paste it. Ask first."
  }
},
"2::Bulletproof Basics": {
  "p1": {
    "on": "This slide covers three basics done the same way every time: Inbox Zero (sort every email into Action, Information or Delegation and draft in the executive's voice), the Travel What-If plan (a backup on hold before anything goes wrong), and the Meeting Lifecycle (agenda before, deliverables tracked to completion after), with a diagram.",
    "say": "Three basics: Inbox Zero, the Travel What-If, and the Meeting Lifecycle. The skill isn't knowing them; it's doing them on a chaotic Tuesday.",
    "ask": "Which of the three do you already do well, and which is still more of an intention?"
  },
  "p2": {
    "on": "This slide makes the point that the basics sound simple, but doing them consistently under pressure is what builds trust. It closes with a discussion prompt: pick the basic you're weakest on and name the habit that would fix it this week.",
    "say": "Consistency under pressure is what makes the basics bulletproof.",
    "wrap": "Pick your weakest basic and name one real habit, not an intention, to fix it this week.",
    "scenario": "Pick the one basic you're weakest on today — Inbox Zero, the Travel What-If or the Meeting Lifecycle. What's the actual habit, not the intention, that would fix it this week?"
  },
  "s1": {
    "on": "This section names the three basics: Inbox Zero (sort every email as Action, Information or Delegation and draft in the executive's voice), the travel \"What If\" plan, and the meeting lifecycle from agenda to deliverables.",
    "say": "Three basics: inbox, travel backup, meeting follow-through."
  },
  "s2": {
    "on": "These steps put each basic into practice: sort every email on first read, draft replies ready to send, keep a backup flight on hold, set the agenda before the meeting, and track deliverables to completion.",
    "say": "The meeting isn't done until the follow-through is confirmed.",
    "ask": "Which basic are you weakest on today?"
  },
  "s3": {
    "on": "This section says consistency under pressure builds trust, and asks for the actual habit, not the intention, that would fix your weakest basic this week.",
    "say": "A habit, not an intention."
  }
},
"2::The Three C's of Managing Up": {
  "p1": {
    "on": "This slide introduces the Three C's of managing up: Clarity, Consistency and Credibility. The steps cover checking every update for clarity first, using the same standard procedure every time, protecting credibility when the three conflict, and slowing down to restate the ask when clarity slips under pressure, with a diagram.",
    "say": "Every update you send is tested on three things: is it clear, is it consistent, and can Elias rely on it?",
    "ask": "Which of the three C's collapses first when you're overwhelmed?"
  },
  "p2": {
    "on": "This slide defines each C in one line: say exactly what's happening and what you need, use the same procedures every time, and keep recommendations reliable. The Go Deeper box shows each C in a real update: status and ask first, the same format for recurring updates, and an honest \"confirming by noon\" over a wrong \"it's done\".",
    "say": "One wrong \"it's done\" costs more trust than ten honest \"confirming by noon\".",
    "wrap": "Clear, consistent and credible: check every update against all three before it goes out.",
    "scenario": "Elias asks, \"Is the Meridian binder at the courthouse?\" You think the courier picked it up but haven't confirmed. Write the reply that protects your credibility."
  },
  "s1": {
    "on": "This section defines the Three C's: Clarity (say exactly what's happening and what you need), Consistency (the same procedure every time) and Credibility (reliable recommendations, no exceptions).",
    "say": "Clarity, Consistency, Credibility."
  },
  "s2": {
    "on": "These steps apply them: check clarity first, use your standard procedure, protect credibility when the C's conflict, restate the ask when clarity slips under pressure, and review your recent messages.",
    "say": "When they conflict, credibility wins.",
    "ask": "Which C slips first when you're busy?"
  },
  "s3": {
    "on": "This section restates the three as rules: say exactly what you need, use the same procedure every time, and keep recommendations reliable.",
    "say": "Three rules, every message."
  },
  "s4": {
    "on": "This section shows each C in practice: open with the status and the ask, use the same format for recurring updates, and say \"confirming by noon\" when unsure — one wrong \"it's done\" costs more than ten honest ones.",
    "say": "An honest \"confirming by noon\" beats a wrong \"it's done.\""
  }
},
"2::Reframing Reactive Language": {
  "p1": {
    "on": "This slide teaches reframing reactive language into forward-looking language. The five steps cover spotting a phrase that only reports a problem, rewriting it to lead with the next action, checking it against the Three C's, reading it back to be sure it's a status report and not a plea for rescue, and practising on a real message.",
    "say": "\"I couldn't reach them\" is a problem. \"I couldn't reach them, so I'm trying their office line at 2\" is a plan.",
    "ask": "What's one reactive phrase you catch yourself using?"
  },
  "p2": {
    "on": "This slide has a discussion prompt: rewrite the opening line of a recent message the Three C's way. The Go Deeper box gives a reframing toolkit: swap reports for actions, blame for plans, and open questions for decisions with a recommendation.",
    "say": "Swap the report for an action, the blame for a plan, and the open question for a recommendation.",
    "wrap": "Every message should sound like a status report, never a request to be rescued.",
    "scenario": "Go around the room: two or three people take the opening line of a real message they sent this week and rewrite it live, forward-looking."
  },
  "s1": {
    "on": "This section states the principle: turn reactive language into forward-looking language.",
    "say": "Report the next move, not just the problem."
  },
  "s2": {
    "on": "These steps rewrite a message: find the reactive phrase, lead with what you're doing next, check it against the Three C's, make sure it reads as a status and not a rescue request, and practice on a real message.",
    "say": "A status report builds credibility. A rescue request erodes it."
  },
  "s3": {
    "on": "This section is a discussion prompt: rewrite the opening line of a recent message aloud the way the Three C's want it.",
    "say": "Rewrite one opening line, out loud.",
    "ask": "Who has a message from this week we can fix?"
  },
  "s4": {
    "on": "This section gives three swaps: reports for actions, blame for plans, and open questions for decisions, each with a before and after.",
    "say": "Swap the question for a recommendation."
  }
},
"2::Credibility Is Earned, Not Claimed": {
  "p1": {
    "on": "This slide explains that credibility comes from operational reliability: accuracy, follow-through and on-time execution. The steps cover the No-Surprises Rule, treating every micro-decision as if it might carry weight, defaulting to discretion on investor, legal, family and M&A matters, and rebuilding damaged credibility over a sustained track record, with a diagram.",
    "say": "You can't claim credibility. Elias gives it to you, one reliable week at a time.",
    "ask": "What does the No-Surprises Rule mean in practice?"
  },
  "p2": {
    "on": "This slide explains that credibility is the currency that lets an assistant manage up with confidence, earned only through consistent execution and judgment. The pitfall to stress: once damaged, it isn't restored by one good week but by a track record proportional to the damage.",
    "say": "Lost credibility comes back slowly, in proportion to how much was lost.",
    "wrap": "No surprises, discretion by default, and every small decision handled as if it matters.",
    "scenario": "Describe a real moment, from any job and anonymised, when a small, undramatic decision turned out to carry financial, legal or reputational risk. What would you do differently now?"
  },
  "s1": {
    "on": "This section lists four sources of credibility: operational reliability, the No-Surprises Rule, judgment under pressure, and discretion in investor, legal, family and M&A matters.",
    "say": "The executive should never be blindsided by something you knew."
  },
  "s2": {
    "on": "These steps build credibility: reliability first, the No-Surprises Rule as a habit, treating every micro-decision as if it matters, discretion by default, and rebuilding slowly after damage.",
    "say": "Treat small decisions as if they might matter. Some do."
  },
  "s3": {
    "on": "This section says credibility comes only from consistent execution, never self-promotion, and damaged credibility takes a track record proportional to the damage to restore.",
    "say": "One good week doesn't fix a lost week of trust.",
    "ask": "When did a small decision of yours turn out to carry real weight?"
  }
},
"2::From Helper to Force Multiplier": {
  "p1": {
    "on": "This slide defines a Force Multiplier: someone who expands the executive's impact by anticipating needs, not just completing tasks. The steps cover preparing the likely next need alongside the task, shifting from \"I did what I was told\" to \"I already have an answer ready\", and spotting a request that repeats as the one to anticipate, with a diagram.",
    "say": "A helper does what they're told. A Force Multiplier already has the next answer ready.",
    "ask": "In your own words, before I give the definition: what's a Force Multiplier?"
  },
  "p2": {
    "on": "This slide sums up the shift from \"I did what I was told\" to \"I already have an answer ready\", and explains it's the compounding result of consistent Three C's execution, not a switch you flip. It closes with a discussion prompt comparing the two kinds of assistant.",
    "say": "Nobody becomes a Force Multiplier overnight. It builds from reliable execution.",
    "wrap": "Anticipate the next need, prepare it alongside the task, and let reliability compound.",
    "scenario": "Elias asks you to book a conference room for Thursday's Meridian strategy meeting. What would the helper do, and what would the Force Multiplier have ready as well?"
  },
  "s1": {
    "on": "This section defines a Force Multiplier: someone who expands the executive's impact by anticipating needs, not just completing tasks.",
    "say": "Anticipate, don't just complete."
  },
  "s2": {
    "on": "These steps make the shift: prepare the likely next need alongside the task, aim for \"I already have an answer ready,\" build it through consistent Three C's execution, and watch for requests that repeat.",
    "say": "\"I already have an answer ready.\""
  },
  "s3": {
    "on": "This section says the shift compounds from consistent execution rather than a switch, and asks you to define a Force Multiplier in one sentence of your own.",
    "say": "It compounds. It isn't a switch.",
    "ask": "In your own words, one sentence: what's a Force Multiplier?"
  }
},
"2::The Digital Edge": {
  "p1": {
    "on": "This slide covers three digital capabilities to combine: real AI proficiency on actual work, simple automation of one recurring task (an email rule, a repeated data-entry step), and a data visualization tool such as Tableau or advanced Excel. The steps close with checking your task list monthly for the next automation, with a diagram.",
    "say": "Three digital skills together remove recurring manual work: AI drafting, simple automation, and clear data visuals.",
    "ask": "Who's already using an automation tool like Zapier, even informally?"
  },
  "p2": {
    "on": "This slide explains that digital tools separate a reactive assistant, who fights the same fire every week, from a strategic one who has automated it away. It closes with a discussion prompt: name one recurring task a simple rule or template could take off your plate this week.",
    "say": "If you fight the same fire every week, automate it.",
    "wrap": "Find one recurring task, automate it this week, and check for the next one every month.",
    "scenario": "Name one recurring task on your own plate that a simple automation, even an email rule or a template, could take off your hands this week. Walk through how you'd set it up."
  },
  "s1": {
    "on": "This section names three digital capabilities: AI proficiency on real work end to end, automation such as a Zapier task created from a client email, and data visualization in Tableau or advanced Excel.",
    "say": "AI, automation and visualization — used together."
  },
  "s2": {
    "on": "These steps build them: use AI end to end on actual work, automate one recurring task, learn a visualization tool, combine the three, and look for a new automation monthly.",
    "say": "Automate one recurring task this month."
  },
  "s3": {
    "on": "This section says digital tools separate a reactive assistant who fights the same fire weekly from one who automated it away, and asks which of your tasks an email rule could take over.",
    "say": "Automate the fire away.",
    "ask": "What's one task an email rule could handle for you?"
  }
},
"2::Email Is a Control System, Not Cleanup": {
  "p1": {
    "on": "This slide explains that email access comes in levels, and you act within yours. The five steps cover confirming your level first, then what Full Access (read, respond and send), Draft & Review (prepare and wait for approval) and Triage Only (sort, prioritize and escalate) each allow, and clarifying when it's ambiguous, with a diagram.",
    "say": "Before you act on any email for Elias, know your access level. Acting above it is a boundary problem, not helpfulness.",
    "ask": "Which access level do you work under in your current role, if any?"
  },
  "p2": {
    "on": "This slide's one rule is to know your access level before acting independently. The Go Deeper box describes the three levels: Full Access (the highest trust, only after the rules are written down), Draft & Review (common early on and for legal matters) and Read & Flag (for sensitive inboxes or a new assistant).",
    "say": "Full Access is earned after the rules are written down.",
    "wrap": "Know your level, stay inside it, and ask when it isn't clear.",
    "scenario": "You're on Draft & Review. A client emails at 6 PM asking to confirm tomorrow's 9 AM meeting, and Elias is on a flight. What can you do, and what must wait for him?"
  },
  "s1": {
    "on": "This section shows the three access levels: Full Access (read, respond, archive and send), Draft & Review (the executive approves first) and Triage Only (sort and escalate, the executive replies).",
    "say": "Know which of the three you have."
  },
  "s2": {
    "on": "These steps act within your level: confirm it first, stay inside Full Access boundaries, wait for approval under Draft & Review, don't draft under Triage Only, and clarify when unclear.",
    "say": "Operating above your access is a boundary problem, not a shortcut.",
    "ask": "Which level would you expect in your first month?"
  },
  "s3": {
    "on": "This section's rule: know your access level before acting independently.",
    "say": "Level first, action second."
  },
  "s4": {
    "on": "This section explains when each level is used: Full Access only after rules are written, Draft & Review early on and for legal matters, and Read & Flag for sensitive inboxes or new relationships.",
    "say": "Full Access comes after the rules are written down."
  }
},
"2::What High-Performing Inbox Triage Looks Like": {
  "p1": {
    "on": "This slide sets the benchmark for triage: handle 80–90% of operational emails independently. The five steps cover tracking what share you handle today, finding the routine categories you still escalate, building judgment to handle them, guarding against missed deadlines and confidentiality breaches, and keeping the inbox near zero daily.",
    "say": "High-performing EAs handle 80 to 90% of operational email without escalating. First, measure where you are.",
    "ask": "Does 80–90% independently sound realistic in your context? What's actually stopping you?",
    "wrap": "Measure, close the gap one routine category at a time, and never trade a deadline or confidentiality for speed.",
    "scenario": "Look at the last 20 emails you escalated. Which routine categories could you have handled yourself, and what would you need in writing before you did?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Measure, close the gap one routine category at a time, and never trade a deadline or confidentiality for speed.",
    "scenario": "Look at the last 20 emails you escalated. Which routine categories could you have handled yourself, and what would you need in writing before you did?"
  },
  "s1": {
    "on": "This section gives the benchmark: 80–90% of operational emails handled independently.",
    "say": "The target is 80 to 90 percent handled without escalation."
  },
  "s2": {
    "on": "These steps close the gap: know your baseline, find the routine categories you escalate unnecessarily, build judgment on them, guard the two failure modes, and keep the inbox near zero.",
    "say": "Start by measuring your baseline.",
    "ask": "What do you escalate that you could handle?"
  },
  "s3": {
    "on": "This section repeats the target, inbox near zero daily, and names the two failures that erase months of trust: a missed critical deadline and a confidentiality breach.",
    "say": "Two mistakes undo months of trust: a missed deadline or a leak."
  }
},
"2::Force Multiplier in the Wild": {
  "p1": {
    "on": "This slide shows the Force Multiplier sequence in a diagram: Prioritize (assess urgency and flag dependencies), Coordinate (shared boards and automated reminders) and Close the loop (assign owners, consolidate and confirm). The steps are meant to be followed in order.",
    "say": "Here's the Force Multiplier on a real day: prioritize, coordinate, then close the loop.",
    "ask": "Which of the three steps is easiest to skip when you're rushed?"
  },
  "p2": {
    "on": "This slide walks through a worked scenario: a client adds last-minute requests touching three departments the day before a pitch, handled with Prioritize, Coordinate and Close the loop. It ends with a discussion prompt about coordinating across time zones.",
    "say": "The loop isn't closed until every owner has confirmed.",
    "wrap": "Prioritize, coordinate, close the loop: in order, every time.",
    "scenario": "The day before a pitch, a client adds last-minute requests touching three departments, and two of them are in different time zones. In 90 seconds, draft how you'd run the Coordinate step. Then compare with the model answer."
  },
  "s1": {
    "on": "This section says this is a sequence: follow the three steps in order.",
    "say": "Three steps, in order."
  },
  "s2": {
    "on": "This section shows the sequence: Prioritize (assess urgency, flag dependencies, summarize options), Coordinate (shared boards and automated reminders) and Close the Loop (owners, one report, confirmed delivery).",
    "say": "Prioritize, coordinate, close the loop."
  },
  "s3": {
    "on": "This section works the scenario: a client adds last-minute requests touching three departments the day before a pitch, and asks how you'd coordinate across time zones with one department not responding.",
    "say": "Walk me through the Coordinate step.",
    "ask": "What if one department isn't answering?"
  }
},
"2::What Is a Large Language Model?": {
  "p1": {
    "on": "This slide explains that LLMs are prediction engines, not databases: they predict the next likely word from patterns rather than retrieving facts. The five steps cover not mistaking fluency for accuracy, verifying every fact, date and figure, noticing where hallucinations tend to appear, and asking \"how would I verify this?\" by reflex.",
    "say": "An AI tool predicts the next likely word. It doesn't look anything up, so confidence tells you nothing about accuracy.",
    "ask": "Has an AI tool ever told you something confidently that turned out to be wrong?"
  },
  "p2": {
    "on": "This slide explains that the same prediction ability lets an LLM write original, useful text or confidently invent something plausible. The pitfall is trusting confident output, and the slide ends with a discussion prompt about a time an AI answer sounded right but wasn't.",
    "say": "The feature that makes it useful is the same one that makes it invent things.",
    "wrap": "Use it to draft, never to verify: check every fact before it reaches a client, court or Elias.",
    "scenario": "An AI summary of a contract says the notice period is 30 days. How do you verify that before it goes into Elias's briefing?"
  },
  "s1": {
    "on": "This section defines an LLM: a prediction engine that predicts the next likely word from patterns, not a database of facts.",
    "say": "It predicts. It doesn't look things up."
  },
  "s2": {
    "on": "These steps follow from that: don't trust fluency as accuracy, verify every fact, date and figure, notice that hallucinations fill gaps, and ask \"how would I verify this?\" every time.",
    "say": "Confidence isn't accuracy.",
    "ask": "How would you verify an AI's date or figure?"
  },
  "s3": {
    "on": "This section says LLMs can write useful original text or confidently invent things, and asks when an AI answer turned out to be wrong for you.",
    "say": "It can invent things with total confidence.",
    "ask": "What tipped you off the last time AI got it wrong?"
  }
},
"2::Core AI Terms an EA/PA Needs": {
  "p1": {
    "on": "This slide explains the core AI terms in practical use. The steps cover what the tool is (a prediction engine), keeping pasted content within the context window so precision doesn't drop toward the end, allowing for token limits on long documents, verifying every output, and connecting these terms to what you see in a tool's settings, with a diagram.",
    "say": "Two terms matter most day to day: the context window, how much the tool can take in at once, and tokens, the units it counts.",
    "ask": "Without looking back, can someone explain \"context window\" in one sentence?"
  },
  "p2": {
    "on": "This slide has a discussion prompt: explain \"context window\" to someone who has never used AI. The Go Deeper box defines five terms in plain English: prompt, context window, token, hallucination, and training data versus your data, with a warning never to paste privileged client information.",
    "say": "What you paste may be stored, depending on the account. Never paste privileged client information.",
    "wrap": "Know the five terms, and remember they all point to one habit: verify the output.",
    "scenario": "You paste a 40-page contract and ask for a summary of section 12, and the answer mixes in details from section 3. Using today's terms, what probably happened, and what do you do next?"
  },
  "s1": {
    "on": "This section defines four terms: prompt (your instruction), hallucination (confident falsehood), context window (working memory limit) and tokens (about ¾ of a word).",
    "say": "Four terms you'll hear constantly."
  },
  "s2": {
    "on": "These steps put the terms to work: remember it predicts rather than retrieves, keep pastes within the context window, allow for token limits, verify everything, and connect the jargon to practice.",
    "say": "Paste too much and precision drops at the end."
  },
  "s3": {
    "on": "This section is a check: explain \"context window\" in one sentence to someone who's never used AI, without looking back.",
    "say": "Explain it in one sentence.",
    "ask": "Who'll try \"context window\"?"
  },
  "s4": {
    "on": "This section restates the terms in plain language, gives the fake case citation as a hallucination example, and says what you paste may be stored, so never put privileged information into unapproved tools.",
    "say": "A fake case citation is a hallucination. Always verify."
  }
},
"2::Your AI Toolkit — Three Modes, Different Jobs": {
  "p1": {
    "on": "This slide introduces three AI modes for different jobs: Generative (drafting, summarizing a messy thread), Extraction & Analysis (pulling out exact dates or action items without changing facts) and Logic & Routing (auto-filing, VIP alerts). The steps cover matching the task to the mode, and defaulting to Extraction for anything involving exact facts, with a diagram.",
    "say": "Pick the mode for the job: Generative creates, Extraction pulls out facts unchanged, and Logic routes and automates.",
    "ask": "Take one task from your week: which mode did it actually call for?"
  },
  "p2": {
    "on": "This slide flags the most common mistake: using Generative mode when the task needs Extraction, which risks the tool altering a fact. It ends with a discussion prompt: sort a task from your own week into one of the three modes.",
    "say": "When exact facts matter, use Extraction, not Generative.",
    "wrap": "Name the mode before you open the tool.",
    "scenario": "Three tasks: pull every deadline out of a 20-email thread, draft a thank-you note to a client, and send an alert whenever opposing counsel emails. Assign each to Generative, Extraction or Logic, then reveal the model answer."
  },
  "s1": {
    "on": "This section shows three modes: Generative (new content such as drafts and summaries), Extraction & Analysis (pulls exact data without altering it) and Logic & Routing (triggers and automated actions).",
    "say": "Create, extract or route."
  },
  "s2": {
    "on": "These steps pick the mode: identify what the task needs, use Generative to create, Extraction for exact facts, Logic for automation, and default to Extraction when facts matter.",
    "say": "When exact facts matter, use Extraction."
  },
  "s3": {
    "on": "This section names the common mistake, using Generative when you need Extraction, and asks which mode a task from your week needed.",
    "say": "Generative can quietly change a detail.",
    "ask": "Which mode did your last AI task actually need?"
  }
},
"2::Claude, ChatGPT, and Gemini — Practical Differences": {
  "p1": {
    "on": "This slide compares the three AI tools side by side, with a diagram. The same core risks apply to all three (hallucination, context limits, training on inputs). Claude suits long pastes and controlled tone, ChatGPT suits fast iteration, and Gemini suits live work inside Gmail, Docs and Calendar, which calls for stricter security habits.",
    "say": "Pick the tool by the job: long input, fast drafting, or live Workspace data. The risks don't change with the logo.",
    "ask": "Which of these tools have you used, and for what kind of task?"
  },
  "p2": {
    "on": "This slide adds the Google Workspace angle. Gemini's live-data access raises the security bar, and Workspace automation runs from simple (Gmail filters, Calendar auto-declines) to advanced (Apps Script, a Zap that turns a labeled email into a task).",
    "say": "Start with the simplest automation that works. A Gmail filter beats a clever script nobody maintains.",
    "wrap": "Choose the tool by the task, apply the same risk checks to all three, and automate simply first.",
    "scenario": "Elias asks you to summarize a 70-page settlement agreement, draft three quick replies to scheduling emails, and set up something so every email labeled \"New Client\" becomes a task automatically. Which tool do you reach for on each, and what do you check first?"
  },
  "s1": {
    "on": "This section's principle: the same core risks apply to all three tools (hallucination, context limits, training on inputs).",
    "say": "Different tools, the same risks."
  },
  "s2": {
    "on": "These steps choose a tool: Claude for long pastes and tone, ChatGPT for fast iteration, Gemini for live Gmail, Docs and Calendar data with stricter security, and simple Workspace automation before advanced tools.",
    "say": "Pick the tool by the job.",
    "ask": "Which of these have you used?"
  },
  "s3": {
    "on": "This section compares the three, explains why Gemini's live-data access raises the security bar, and covers Workspace automation from Gmail filters to Apps Script and a Zap that turns labeled mail into a task.",
    "say": "Start with the simplest automation that works."
  }
},
"2::Communication Mastery": {
  "p1": {
    "on": "This slide covers four habits, with a diagram: clarity over cleverness (the point goes in the first sentence), matching the medium to the message, active listening (repeat it back before acting), and reading the room before delivering. The last step is diagnosing a misread message as a clarity, channel or tone problem.",
    "say": "A message is mastered when it lands right the first time, with no follow-up needed to explain it.",
    "ask": "When did a message of yours get misread, and what went wrong?"
  },
  "p2": {
    "on": "This slide makes two points: mastery is about the message landing, not sounding polished, and most breakdowns come from a message that was too vague to act on or sent on the wrong channel. It ends with a discussion prompt on a real misread message.",
    "say": "Vague or wrong channel: that's where most breakdowns start.",
    "wrap": "Before you send, check clarity, channel and tone. When something misfires, name which one failed.",
    "scenario": "You texted Elias \"call moved, all good\" about a client meeting. He showed up at the original time. Was that a clarity, channel or tone problem, and what should the message have said?"
  },
  "s1": {
    "on": "This section lists four habits: clarity over cleverness, match the medium, active listening (repeat it back), and read the room — tone flexes, facts don't.",
    "say": "Tone can flex. Facts can't."
  },
  "s2": {
    "on": "These steps apply the habits before and after sending: point in the first sentence, the right channel, repeat back before acting, adjust tone, and diagnose a misread message as clarity, channel or tone.",
    "say": "Diagnose the misfire: clarity, channel or tone?"
  },
  "s3": {
    "on": "This section says mastery is the message landing the first time, and most breakdowns come from vague messages or the wrong channel.",
    "say": "Vague or wrong channel — that's where it breaks.",
    "ask": "When was a message of yours misread, and why?"
  }
},
"2::Executive Presence": {
  "p1": {
    "on": "This slide defines executive presence for an EA, with a diagram: staying composed under pressure, making the reasonable call and owning it, building credibility in small routine moments, and delivering difficult news calmly and specifically. It ties presence back to Managing Up.",
    "say": "Presence is built in the routine moments, long before a crisis tests it.",
    "ask": "Who have you worked with who stayed calm when everything went wrong? What did they actually do?"
  },
  "p2": {
    "on": "This slide says presence isn't imitating the executive; it's being someone others trust. Visible panic or uncertainty about basic facts loses it fastest, and calm, specific, accurate communication builds it fastest. An EA with presence is someone nobody needs to double-check.",
    "say": "Calm, specific and accurate. That's what presence sounds like.",
    "wrap": "Presence means people don't feel the need to double-check you.",
    "scenario": "Role-play in pairs, 30 seconds each: you have to tell Elias that the court reporter for tomorrow's 9 a.m. deposition just cancelled. Deliver it calmly, with the facts and your next step."
  },
  "s1": {
    "on": "This section defines presence in three parts: composed under pressure, decisive in ambiguity, and credible in small, routine moments.",
    "say": "Presence is built in the small moments."
  },
  "s2": {
    "on": "These steps practice it: stay composed on purpose, make the reasonable call and own it, build credibility in routine work, deliver bad news calmly and specifically, and connect it to Managing Up.",
    "say": "Calm, specific, accurate."
  },
  "s3": {
    "on": "This section says presence isn't imitating the executive, visible panic loses it fastest, and an EA with presence is someone nobody double-checks.",
    "say": "Be someone nobody needs to double-check.",
    "ask": "Who has worked with someone calm in a crisis? What did they do?"
  }
},
"2::Authority & Boundary Management — EA vs. Legal EA": {
  "p1": {
    "on": "This slide explains boundary management: knowing what you can decide, what needs approval and what gets escalated, and how that differs for a Legal EA. The EA column covers declining unauthorized expense approvals and getting written confirmation. The Legal EA column adds conflict checks, client-file requests and financial limits.",
    "say": "Boundaries are what stop a high-trust role from quietly becoming a high-risk one.",
    "ask": "What's one decision in your role you're sure is yours, and one you'd always escalate?"
  },
  "p2": {
    "on": "This slide lists three pitfalls. A verbal \"go ahead\" isn't enough for anything with financial or legal weight, so get it in writing. Vendor pressure is a pattern, and the answer is always to redirect it to procurement. For a Legal EA, a skipped conflict check can't be fixed after the fact.",
    "say": "If it carries money or legal weight, a verbal yes gets written down.",
    "wrap": "Know your line, hold it every time, and document the approvals that matter.",
    "scenario": "A vendor calls insisting an invoice be approved today to avoid a late fee, and the person who normally approves it can't be reached. What do you actually do, and how does it change if you're a Legal EA handling a client trust disbursement?"
  },
  "s1": {
    "on": "This section explains that boundaries keep a high-trust role from becoming high-risk, and that Legal EAs carry extra formal requirements: conflict checks, trust accounting and client file access.",
    "say": "Know what you decide alone and what needs approval."
  },
  "s2": {
    "on": "This section lists the boundaries side by side. EA: decline unauthorized expenses, get budget exceptions in writing, document verbal approvals, redirect vendor pressure. Legal EA: decline unauthorized file requests, conflict check before any new matter, follow trust procedures.",
    "say": "If it carries money or legal weight, get it in writing."
  },
  "s3": {
    "on": "This section warns that a verbal \"go ahead\" isn't enough for anything weighty, vendor pressure is a pattern, and a skipped conflict check can't be fixed afterwards.",
    "say": "A skipped conflict check can't be undone.",
    "ask": "A vendor says the invoice must be approved today. What do you do?"
  }
},
"2::Proactive Risk Mitigation & Strategic Support — EA vs. Legal EA": {
  "p1": {
    "on": "This slide splits the work into proactive risk tasks and strategic support tasks, each in EA and Legal EA versions. Risk examples include catching contract renewals and press-release typos, or tracking compliance and discovery deadlines. Strategic examples include executive dashboards, 30-day action summaries, litigation exposure summaries and case chronologies.",
    "say": "Catch the problem before it's a problem, then bring synthesis, not just data.",
    "ask": "What's one thing you caught early that would have been a crisis if you hadn't?"
  },
  "p2": {
    "on": "This slide makes two points: proactive work is invisible when done well, because a crisis that never happened doesn't announce itself, and strategic support means synthesis. A dashboard that only shows raw numbers isn't strategic; one that highlights what needs attention is.",
    "say": "A dashboard that highlights what matters is strategy. One that just lists numbers is admin.",
    "wrap": "Grow the proactive side of your workload, and make your support tell the executive what to look at.",
    "scenario": "Look at your own current workload. Which of your regular tasks are proactive risk mitigation and which are purely reactive? If the proactive list is short, what would you change to grow it?"
  },
  "s1": {
    "on": "This section defines proactive risk mitigation (catching a problem before it becomes one) and strategic support (synthesis, analysis and recommendation), which differ for EAs and Legal EAs.",
    "say": "Prevent the crisis. Then bring synthesis."
  },
  "s2": {
    "on": "This section lists the tasks in four groups: EA and Legal EA risk tasks (renewals, typos, compliance and discovery deadlines, unsigned engagement letters) and EA and Legal EA strategic tasks (dashboards, 30-day summaries, exposure summaries, chronologies).",
    "say": "Catch it before the deadline, not after.",
    "ask": "Which of these do you already do?"
  },
  "s3": {
    "on": "This section says proactive work is invisible when done well, and a dashboard of raw numbers isn't strategic support; one that highlights what needs attention is.",
    "say": "Highlight what matters. Raw numbers aren't strategy."
  }
},
"2::Why the Force Multiplier Evolution Is Non-Negotiable": {
  "p1": {
    "on": "This slide argues that a modern executive environment (fast, visible, legally exposed, revenue-driven) can't run on an assistant in pure helper mode. It lists the signs of helper mode, such as waiting for instructions on familiar tasks, and the shift: handle the next familiar request with a recommendation attached.",
    "say": "A force multiplier becomes infrastructure. The executive's speed depends on them.",
    "ask": "Which sign of helper mode do you recognize in yourself?"
  },
  "p2": {
    "on": "This slide makes clear that the evolution isn't overstepping. It closes the gap between \"I did what was asked\" and \"I made the outcome better.\" It also warns that constant availability isn't the same as value.",
    "say": "Being reachable at midnight isn't the same as multiplying anyone's output.",
    "wrap": "Close the gap between doing what was asked and making the outcome better.",
    "scenario": "Elias asks you to book a conference room for a client meeting. You book it. What would the force-multiplier version of that same task have looked like?"
  },
  "s1": {
    "on": "This section argues that in a fast, visible, legally exposed environment a pure helper becomes a bottleneck, while a force multiplier becomes infrastructure the executive relies on.",
    "say": "The helper role becomes a bottleneck here."
  },
  "s2": {
    "on": "These steps recognize helper mode (waiting for instructions, needing approval inside your judgment, measuring by responsiveness) and shift out of it by attaching a recommendation to the next familiar request.",
    "say": "Next familiar request: bring a recommendation.",
    "ask": "Which sign of helper mode do you recognize?"
  },
  "s3": {
    "on": "This section says the evolution isn't overstepping — it's improving the outcome beyond the literal instruction — and warns that constant availability isn't value.",
    "say": "Being reachable at midnight isn't the same as adding value."
  }
},
"2::The Helper Identity vs. the Force Multiplier Identity": {
  "p1": {
    "on": "This slide contrasts two identities. The Helper seeks approval, waits for instruction, fears overstepping and measures success by responsiveness. The Force Multiplier owns outcomes, frames decisions, anticipates consequences and measures success by executive leverage. The steps cover noticing which one drives your default response and practicing framing, not just reporting.",
    "say": "This is a shift in identity, not in title: from support role to strategic operator.",
    "ask": "Faced with an ambiguous request, do you ask \"what should I do?\" or propose an approach?"
  },
  "p2": {
    "on": "This slide says the shift takes deliberate practice: the habit of proposing instead of reporting has to be built on purpose. It closes with the distinction that a helper makes life easier, while a force multiplier makes performance stronger.",
    "say": "A helper makes life easier. A force multiplier makes performance stronger.",
    "wrap": "Pick one Helper habit and start replacing it this week.",
    "scenario": "Which identity better describes how you operate right now, and which one Helper habit will you consciously start replacing this week?"
  },
  "s1": {
    "on": "This section contrasts two identities. The Helper seeks approval and waits for instruction; the Force Multiplier owns outcomes, frames decisions and measures success by executive leverage.",
    "say": "It's an identity shift, not a title change."
  },
  "s2": {
    "on": "These steps practice it: notice whether you ask \"what should I do?\" or propose an approach, and attach a recommendation to facts instead of just relaying them.",
    "say": "Propose, then confirm.",
    "ask": "Faced with an ambiguous request, what's your first sentence?"
  },
  "s3": {
    "on": "This section says the shift takes deliberate practice, request by request, and a helper makes life easier while a force multiplier makes performance stronger.",
    "say": "Easier versus stronger — different bars."
  }
},
"2::Strategic Time Engineering": {
  "p1": {
    "on": "This slide reframes the calendar as capital and the assistant as its portfolio manager, with a diagram of five categories: revenue, strategic growth, compliance and legal deadlines, reputation, and personal. The steps say every protected block should name the category it serves, and allocation is an ongoing decision.",
    "say": "If you can't name what a block protects, it isn't protected. It's just unscheduled.",
    "ask": "Which of the five categories gets squeezed first on a busy week?"
  },
  "p2": {
    "on": "This slide warns against protecting time only after something gets disrupted, rather than engineering the allocation up front. It reinforces time as capital: it gets invested on purpose, not spent as requests arrive.",
    "say": "Capital is invested on purpose, not spent as requests arrive.",
    "wrap": "Engineer the calendar up front, category by category, and revisit it regularly.",
    "scenario": "Look at a typical week on Elias's calendar. Which of the five categories is getting the least protection, and why might that be happening?"
  },
  "s1": {
    "on": "This section reframes the calendar as capital with the assistant as portfolio manager, protecting revenue, growth, compliance deadlines, reputation events and personal commitments.",
    "say": "Time is capital. You allocate it."
  },
  "s2": {
    "on": "These steps say every protected block must name its category, and allocation is an ongoing decision you revisit.",
    "say": "If you can't name what a block protects, it isn't protected.",
    "ask": "Which category gets squeezed first in a busy week?"
  },
  "s3": {
    "on": "This section warns against protecting time only after a disruption and says capital is invested on purpose, not spent as requests arrive.",
    "say": "Engineer it up front, not after it breaks."
  }
},
"2::Reducing Cognitive Load for Executives": {
  "p1": {
    "on": "This slide explains decision fatigue: every open-ended question you route to the executive uses up a limited resource. A force multiplier presents structured options, trade-offs, pre-vetted risks and a recommendation, with a diagram. The model line: \"Here are three viable options; Option B aligns best with Q2 revenue objectives.\"",
    "say": "Never bring a question without options, and never bring options without a recommendation.",
    "ask": "What would you recommend if you had to decide yourself?"
  },
  "p2": {
    "on": "This slide clarifies that recommending isn't overstepping, because the executive can still choose differently. The pitfall is a neutral list of options with no point of view, which leaves the full cognitive load on the executive.",
    "say": "A list with no recommendation still leaves all the thinking to them.",
    "wrap": "Options, trade-offs, and your recommendation, every time.",
    "scenario": "You were about to ask Elias, \"What do you want to do about the Thursday conflict?\" Reframe it live with three options and a recommendation."
  },
  "s1": {
    "on": "This section explains decision fatigue and how a force multiplier reduces it: structured options, trade-offs, pre-vetted risks, anticipated objections and second-order effects.",
    "say": "Do the thinking before it reaches them."
  },
  "s2": {
    "on": "These steps show the model line (\"Here are three viable options; Option B aligns best with Q2 revenue objectives\") and say to bring your own recommendation with the options.",
    "say": "Options plus a recommendation, every time.",
    "ask": "What would you recommend if you had to decide?"
  },
  "s3": {
    "on": "This section says recommending isn't overstepping, since the executive can still choose, and a neutral list with no point of view leaves all the load on them.",
    "say": "A list with no recommendation leaves them all the work."
  }
},
"2::\"If It Happens Twice, It Deserves a System\"": {
  "p1": {
    "on": "This slide sets the rule that the second time you do a task is the signal to build a system for it. Systems create scale, and scale creates leverage. It lists common candidates — weekly reports, travel booking, contract approvals, vendor onboarding, investor updates — and asks what lightweight system (a checklist, template or tracker) would replace the manual version.",
    "say": "Second time, not the tenth. That's when you build the system.",
    "ask": "What have you done twice this month by hand?"
  },
  "p2": {
    "on": "This slide warns against waiting until a task is painful before systemizing it, because by then the manual version has already cost the time. It also says a system doesn't have to be sophisticated: a checklist used consistently counts.",
    "say": "A checklist you actually use is a real system.",
    "wrap": "Spot the repeat, build the simplest system, and use it consistently.",
    "scenario": "Name one task you've done more than twice in the last month without a system. What would version one of that system look like, built in 15 minutes?"
  },
  "s1": {
    "on": "This section says systems create scale and scale creates leverage, and the threshold is the second time you do something.",
    "say": "Second time, build the system."
  },
  "s2": {
    "on": "These steps spot repeats and systemize them with a checklist, template or dashboard, using common candidates (weekly reports, travel, contract approvals, vendor onboarding, investor updates), each with SOP steps, automation, checkpoints and escalation triggers.",
    "say": "Same shape every time: steps, automation, checkpoints, escalation.",
    "ask": "What have you done twice this month by hand?"
  },
  "s3": {
    "on": "This section warns against waiting until a task is painful, and says a simple checklist used consistently is a real system.",
    "say": "A checklist you use is a real system."
  }
},
"2::Managing Constant Executive Exposure": {
  "p1": {
    "on": "This slide lists the five kinds of exposure an executive lives with: legal, compliance, public perception, stakeholder scrutiny and brand. The assistant's actions: flag red-flag emails before they're sent, screen invitations for reputational fit, route contracts through review, monitor compliance calendars actively, and handle sensitive communications discreetly by default.",
    "say": "Your job includes scanning routine-looking things for risk.",
    "ask": "Which of these five do you actually watch for today?"
  },
  "p2": {
    "on": "This slide calls exposure management a different mindset from task completion, because it means actively scanning for risk in routine work. The pitfall is assuming it's legal's or compliance's job, when it starts with whoever sees the request first.",
    "say": "Exposure management starts with whoever sees the request first. Often that's you.",
    "wrap": "Scan everything that crosses your desk for exposure, not just what's labeled risky.",
    "scenario": "Elias is invited to speak on a panel sponsored by a company that's the opposing party in one of the firm's active cases. It lands in your inbox as a routine invitation. What do you do?"
  },
  "s1": {
    "on": "This section lists the five exposures (legal, compliance, public perception, stakeholder scrutiny and brand) and says the assistant's job includes actively managing them.",
    "say": "Exposure management is part of the job."
  },
  "s2": {
    "on": "These steps are the actions: flag red-flag emails before they're sent, screen invitations for reputational fit, route contracts through review, monitor compliance calendars, and handle sensitive messages discreetly.",
    "say": "Scan routine-looking things for risk.",
    "ask": "Which of the five do you actually watch today?"
  },
  "s3": {
    "on": "This section says it's a different mindset from task completion, and exposure management starts with whoever sees the request first — often you.",
    "say": "Often you're the first to see it."
  }
},
"2::Time Management Requires Energy Management": {
  "p1": {
    "on": "This slide says an exhausted executive makes expensive mistakes, so managing time isn't enough. Energy management means preventing meeting overload, building recovery buffers after demanding events, protecting deep-work windows, filtering low-leverage requests, and raising patterns of meetings that leave the executive drained.",
    "say": "A free slot on the calendar isn't the same as available energy.",
    "ask": "What does a draining week look like for an executive you've supported?"
  },
  "p2": {
    "on": "This slide warns that hybrid roles covering business and personal support are the riskiest for energy, because the usual boundaries are gone. The pitfall is treating an open slot as automatically available without asking whether the executive has the energy for it.",
    "say": "Hybrid roles lose natural boundaries, so you have to build them.",
    "wrap": "Schedule for energy, not just availability, and protect recovery on purpose.",
    "scenario": "Elias has a full-day mediation Tuesday and a hearing Wednesday morning. Someone asks for Tuesday at 6 p.m. Where do you insert a recovery buffer, and how do you justify it if they push back?"
  },
  "s1": {
    "on": "This section says an exhausted executive makes expensive mistakes, and energy management means preventing overload, building recovery buffers, protecting deep work and filtering draining requests.",
    "say": "A free slot isn't the same as available energy."
  },
  "s2": {
    "on": "These steps look past free slots to fatigue from back-to-back intensity, build recovery buffers after demanding events, and raise draining patterns rather than silently accommodating them.",
    "say": "Buffer after the hard meetings, not just between them.",
    "ask": "What does a draining week look like for your executive?"
  },
  "s3": {
    "on": "This section warns that hybrid business-and-personal roles blur the boundaries that create recovery, and against treating any open slot as available.",
    "say": "Hybrid roles lose natural boundaries — build them."
  }
},
"2::Operational Excellence & Institutional Accountability": {
  "p1": {
    "on": "This slide says that without governance, high-trust roles become high-risk roles. A force multiplier knows the scope (business versus personal), spending authority limits, data separation protocols, escalation rules and approval hierarchies. The steps say to know the boundaries explicitly and keep limits and escalation rules written down.",
    "say": "Written boundaries beat remembered ones.",
    "ask": "Could you write down your spending limit and escalation rules right now?"
  },
  "p2": {
    "on": "This slide warns against treating high trust as unlimited discretion: the boundaries are part of what makes the trust sustainable. It adds that clear accountability protects the assistant as much as the executive if a decision is ever questioned.",
    "say": "Clear boundaries protect you when a decision gets questioned later.",
    "wrap": "Trust and boundaries work together. Write yours down.",
    "scenario": "Where is your current scope boundary genuinely fuzzy — a type of task or decision where you're not sure whether to decide or escalate? Name it, and say what you'd need clarified."
  },
  "s1": {
    "on": "This section says high trust without governance becomes high risk, and a force multiplier works within scope, spending limits, data separation, escalation rules and approval chains.",
    "say": "Trust needs boundaries to last."
  },
  "s2": {
    "on": "These steps make boundaries explicit: know what's business, personal and ambiguous, and keep spending limits and escalation rules written down.",
    "say": "Write the limits down.",
    "ask": "Could you write your spending limit down right now?"
  },
  "s3": {
    "on": "This section says trust isn't unlimited discretion, and clear boundaries protect you if a decision is questioned later.",
    "say": "Boundaries protect you, too."
  }
},
"2::Language Signals Level": {
  "p1": {
    "on": "This slide shows that your wording reveals your identity. The helper reports and waits; the force multiplier frames the fact with a recommendation. Paired examples: \"They want to meet\" versus \"They're requesting a meeting; we can decline, delegate or meet with conditions,\" and \"Should I respond?\" versus \"I've drafted a response; please review.\"",
    "say": "Same fact, different level. The difference is structure plus a recommendation.",
    "ask": "Which helper phrase do you catch yourself using most?"
  },
  "p2": {
    "on": "This slide says the point isn't sounding impressive; it's doing more of the thinking before you send. The pitfall is adopting confident phrasing without doing the analysis behind it.",
    "say": "The phrasing has to follow real judgment, not replace it.",
    "wrap": "Do the thinking first, and the language follows.",
    "scenario": "Take this message: \"Opposing counsel emailed about the deposition.\" Rewrite it in the force-multiplier pattern. What did you have to find out to write it?"
  },
  "s1": {
    "on": "This section says your wording reveals and reinforces your identity: the helper reports and waits, the force multiplier frames facts with a recommendation.",
    "say": "Your language shows your level."
  },
  "s2": {
    "on": "These steps give paired examples (\"They want to meet\" versus three options and a recommendation; \"Should I respond?\" versus \"I've drafted a response; please review\") and say the shift adds structure, not length.",
    "say": "Add structure and a recommendation, not length.",
    "ask": "Which helper phrase do you use most?"
  },
  "s3": {
    "on": "This section says the point is doing more thinking before the message goes out, and warns against confident phrasing with no analysis behind it.",
    "say": "The phrasing has to follow real judgment."
  }
},
"2::Measuring the Force Multiplier Transformation": {
  "p1": {
    "on": "This slide says the transformation is measurable: lower executive inbox volume, more strategic time, faster response times, fewer escalations, fewer missed deadlines, and more decisions made without the executive. The steps say to pick one or two realistic metrics and reference concrete change when discussing performance.",
    "say": "\"Reduced response time from two days to four hours\" lands differently than \"I'm doing well.\"",
    "ask": "Which of these could you actually measure in your role?"
  },
  "p2": {
    "on": "This slide warns that this work often isn't visible unless someone names it, so don't assume its value is self-evident. It adds that not every metric fits every role; choose the ones that reflect your actual responsibilities.",
    "say": "If nobody measures it, nobody sees it.",
    "wrap": "Pick your metrics, track them, and use the numbers when you talk about your value.",
    "scenario": "Which one of the six metrics would be easiest for you to start tracking this week, and what would a month of tracking it likely show?"
  },
  "s1": {
    "on": "This section lists measurable impacts: less inbox volume, more strategic time, fewer crises, fewer compliance misses, faster turnaround and clearer communication.",
    "say": "It's measurable — so measure it."
  },
  "s2": {
    "on": "These steps pick one or two metrics you can realistically track and use concrete change (\"reduced response time from X to Y\") when discussing your value.",
    "say": "Concrete numbers beat \"I'm doing well.\"",
    "ask": "Which metric could you track this week?"
  },
  "s3": {
    "on": "This section warns that this work isn't visible unless someone names it, and says pick the metrics that fit your role rather than forcing all six.",
    "say": "If nobody measures it, nobody sees it."
  }
},
"2::What Force Multiplier Autonomy Is — and Isn't": {
  "p1": {
    "on": "This slide defines autonomy in two columns. It is not overstepping authority, playing executive, replacing leadership or acting without alignment. It is structured empowerment, pre-approved autonomy, intelligent anticipation and strategic execution. The steps say to confirm new autonomy falls within pre-approved boundaries, and that doubt means check first.",
    "say": "Autonomy is earned and defined, never assumed.",
    "ask": "What's something you've been explicitly pre-approved to handle alone?"
  },
  "p2": {
    "on": "This slide warns against using \"I was being a force multiplier\" to justify a decision outside your scope. It defines calibrated confidence: decisive within your real boundaries and cautious right at their edge.",
    "say": "Decisive inside the line, careful at the edge.",
    "wrap": "When in doubt about whether it's yours, check first.",
    "scenario": "A client asks you to move a filing deadline reminder back a week because \"Elias said it's fine.\" You weren't told that. Is acting on it structured empowerment or overstepping, and what do you do?"
  },
  "s1": {
    "on": "This section defines autonomy both ways: it is not overstepping or playing executive; it is structured, pre-approved empowerment with calibrated confidence.",
    "say": "Autonomy is earned and defined."
  },
  "s2": {
    "on": "These steps confirm a new action falls within pre-approved boundaries, and treat your own doubt as a signal to check first.",
    "say": "If you're unsure it's yours, check.",
    "ask": "What have you been pre-approved to handle alone?"
  },
  "s3": {
    "on": "This section warns against using \"I was being a force multiplier\" to excuse overstepping, and defines calibrated confidence as decisive inside the line and careful at its edge.",
    "say": "Decisive inside the line, careful at the edge."
  }
},
"2::The Legal VA's Force Multiplier Evolution": {
  "p1": {
    "on": "This slide applies the force-multiplier shift to the Legal VA. The Traditional Legal VA waits for instructions, completes assigned tasks, manages the inbox and calendar, and formats documents. The Legal Force Multiplier filters complexity, anticipates legal risk, protects attorney time, structures operations and speeds up decisions.",
    "say": "Same shift as before, applied to deadlines, liability and confidentiality.",
    "ask": "Where does your current legal-support work sit on this spectrum?"
  },
  "p2": {
    "on": "This slide says the stakes are higher in legal work, because a missed deadline or unflagged risk carries real liability. It links back to the general Force Multiplier concept covered earlier in the day.",
    "say": "In legal work, staying in the traditional pattern costs more.",
    "wrap": "Pick one recurring legal task and shift it toward the force-multiplier pattern this week.",
    "scenario": "Of the four Legal Force Multiplier behaviors — filtering complexity, anticipating legal risk, protecting attorney time, structuring operations — which is furthest from how you work now, and what's making the gap hard to close?"
  },
  "s1": {
    "on": "This section contrasts the Traditional Legal VA (waits, completes tasks, manages inbox, formats documents) with the Legal Force Multiplier (filters complexity, anticipates risk, protects attorney time, speeds decisions).",
    "say": "Same shift, applied to legal work."
  },
  "s2": {
    "on": "These steps place your current work on that spectrum and move one recurring legal task toward the force-multiplier pattern this week.",
    "say": "Move one legal task this week.",
    "ask": "Where does your legal-support work sit on this spectrum?"
  },
  "s3": {
    "on": "This section says the stakes are higher in legal work, where a missed deadline carries real liability, and links back to the general Force Multiplier idea.",
    "say": "In legal work, the traditional pattern costs more."
  }
},
"2::Cognitive Relief for Attorneys": {
  "p1": {
    "on": "This slide explains that attorneys carry strategy, client emotions, revenue, compliance and court deadlines all at once, and cognitive relief removes mental clutter. The model: instead of \"You have 42 unread emails,\" say \"Three need your legal decision, two are billing approvals, one is opposing counsel requesting an extension.\"",
    "say": "Do the sorting before you hand anything over.",
    "ask": "How would you summarize your own inbox right now in one sentence?"
  },
  "p2": {
    "on": "This slide warns against forwarding volume instead of synthesis: \"Here are your 42 emails\" just moves the load. It adds that the skill compounds, because the more consistently you triage, the more the attorney trusts your summaries without re-checking.",
    "say": "Forwarding isn't relief. Synthesis is.",
    "wrap": "Triage, summarize and lead with what needs a decision.",
    "scenario": "Elias returns from a two-day trial with 58 unread emails. Draft the three-line summary you'd give him before he opens his inbox."
  },
  "s1": {
    "on": "This section explains that attorneys carry strategy, emotions, revenue, compliance and deadlines at once, and lists the relief a Legal VA offers: summaries, case briefs, issue-spotting, chronologies and flagged decisions.",
    "say": "Remove mental clutter, don't add to it."
  },
  "s2": {
    "on": "These steps show the model (\"Three need your decision, two are billing approvals, one is an extension request\" instead of \"42 unread\") and say to sort before passing anything on.",
    "say": "Sort it before you hand it over.",
    "ask": "How would you summarize your inbox in one line?"
  },
  "s3": {
    "on": "This section warns that forwarding volume is just moving the load, and says consistent triage compounds as the attorney learns to trust your summaries.",
    "say": "Forwarding isn't relief. Synthesis is."
  }
},
"2::Strategic Filtration for Legal Work": {
  "p1": {
    "on": "This slide separates four kinds of urgency: administrative, legal, revenue and reputational. The actions: flag statute-of-limitations risk immediately, deprioritize non-urgent items even if marked urgent, escalate media inquiries about active litigation right away, and decide which client requests need attorney review versus a template reply.",
    "say": "Everything that reaches the attorney should have earned their attention.",
    "ask": "What kind of urgency is hardest for you to recognize?"
  },
  "p2": {
    "on": "This slide warns that the sender's \"urgent\" and the actual urgency are often different. It adds that filtration is a pattern-recognition skill that gets faster with practice.",
    "say": "The sender's label isn't the real urgency.",
    "wrap": "Classify the urgency yourself, and let statute-of-limitations risk jump the queue every time.",
    "scenario": "A client email marked \"URGENT\" asks a routine procedural question, while a quiet, polite email from opposing counsel mentions a deadline in passing. Which is actually more urgent, and how do you know?"
  },
  "s1": {
    "on": "This section separates administrative, legal, revenue and reputational urgency, and says everything that reaches the attorney should have earned their attention.",
    "say": "Four kinds of urgency — know which you're looking at."
  },
  "s2": {
    "on": "These steps are the rules: flag statute-of-limitations risk immediately, deprioritize non-urgent items even if marked urgent, escalate media tied to active litigation, and route routine client requests to templates.",
    "say": "SOL risk never waits.",
    "ask": "Which urgency is hardest to recognize?"
  },
  "s3": {
    "on": "This section warns that the sender's \"urgent\" and the real urgency often differ, and says this judgment improves with pattern recognition.",
    "say": "The sender's label isn't the real urgency."
  }
},
"2::Operational Architecture for Legal Work": {
  "p1": {
    "on": "This slide contrasts \"Tell me what to do next\" with \"Here's a workflow so this never becomes urgent again.\" It lists five systems that prevent malpractice risk: a litigation deadline dashboard, an intake-to-engagement SOP, a trust accounting reconciliation checklist, firm-wide document naming conventions and a discovery response tracking matrix.",
    "say": "Build the system once instead of solving the same problem every time.",
    "ask": "Which of these five does your environment already have?"
  },
  "p2": {
    "on": "This slide warns against rebuilding the same ad hoc fix every time a situation repeats. It adds that these systems don't need IT: a well-designed spreadsheet or shared checklist counts as operational architecture.",
    "say": "A good spreadsheet is legitimate architecture.",
    "wrap": "Invest once in a system that handles the whole category.",
    "scenario": "Which of the five systems is most obviously missing where you work, and what real problem has that gap already caused?"
  },
  "s1": {
    "on": "This section contrasts \"tell me what to do next\" with \"here's a workflow so this never becomes urgent again,\" and says systems prevent malpractice risk.",
    "say": "Build the workflow so it never becomes urgent."
  },
  "s2": {
    "on": "These steps list five systems: a litigation deadline dashboard, an intake-to-engagement SOP, a trust reconciliation checklist, naming conventions and a discovery tracking matrix.",
    "say": "Five systems every legal team needs.",
    "ask": "Which of the five does your team already have?"
  },
  "s3": {
    "on": "This section warns against rebuilding the same ad hoc fix, and says a well-designed spreadsheet counts as operational architecture.",
    "say": "A good spreadsheet counts."
  }
},
"2::Decision Compression": {
  "p1": {
    "on": "This slide says attorneys are paid for judgment, so a Legal VA prepares decisions in the most digestible form, with a diagram. The model: instead of sending a 60-page contract with no guidance, say \"Three clauses deviate from our template: indemnification expanded, payment terms extended, and…\" The step is to lead with the three things the reviewer most needs to know.",
    "say": "Shorten the attorney's path to clarity.",
    "ask": "What are the three things a reviewer needs to know about the last document you forwarded?"
  },
  "p2": {
    "on": "This slide warns that forwarding the full document isn't compression; highlighting what changed or matters is. It links decision compression to BLUF (Bottom Line Up Front), applied to legal review.",
    "say": "Forwarding isn't compression. Highlighting is.",
    "wrap": "Lead with what changed and what needs a decision.",
    "scenario": "Opposing counsel sends back a redlined 40-page settlement agreement. Write the three-line note you'd send Elias with it."
  },
  "s1": {
    "on": "This section says attorneys are paid for judgment, so a Legal VA prepares decisions in the most digestible form — shortening the path to clarity.",
    "say": "Shorten the attorney's path to clarity."
  },
  "s2": {
    "on": "These steps show the model: \"Three clauses deviate: indemnification expanded, payment terms shortened, venue changed; review Sections 4, 7 and 11,\" and say to lead with the three things the reviewer most needs.",
    "say": "Lead with the three things that matter.",
    "ask": "What would you flag first in a 60-page contract?"
  },
  "s3": {
    "on": "This section warns that forwarding the full document isn't compression, and links it to BLUF applied to document review.",
    "say": "Forwarding isn't compression. Highlighting is."
  }
},
"2::Risk Buffering for Legal Work": {
  "p1": {
    "on": "This slide calls risk buffering credibility capital: protecting the attorney from preventable exposure. It lists six habits: tracking deadlines across jurisdictions, confirming execution formalities, maintaining privilege boundaries, requiring engagement letters, getting written approvals and monitoring trust accounts. The steps stress checking signatures and notarization every time, and no billable work before an engagement letter.",
    "say": "No engagement letter, no billable work, even for a trusted returning client.",
    "ask": "Which of these six do you already do without being reminded?"
  },
  "p2": {
    "on": "This slide warns against treating risk buffering as optional extra diligence, because it protects both the attorney and the firm. It adds that every one of these habits is cheap to do consistently and expensive to skip even once.",
    "say": "Cheap to do every time, expensive to skip once.",
    "wrap": "Make the six buffering habits standard steps, not afterthoughts.",
    "scenario": "Of the six habits, which would be easiest to let slip under time pressure, and what would make it harder to skip?"
  },
  "s1": {
    "on": "This section calls risk buffering credibility capital and lists the habits: jurisdiction deadlines, execution formalities, privilege boundaries, engagement letters, written approvals and trust monitoring.",
    "say": "Protect the attorney from preventable exposure."
  },
  "s2": {
    "on": "These steps make two habits standard: check signatures, notarization and witnesses every time, and require an engagement letter before any billable work, even for returning clients.",
    "say": "No engagement letter, no billable work.",
    "ask": "Which habit would slip first under pressure?"
  },
  "s3": {
    "on": "This section warns against treating buffering as optional, and says each habit is cheap to do and expensive to skip once.",
    "say": "Cheap to do, expensive to skip."
  }
},
"2::Stakeholder & Board Update Communications": {
  "p1": {
    "on": "This slide treats board updates as their own genre: they're read by people with governance authority and often reviewed later. The steps: confirm the audience and distribution list first, lead with the governance bottom line (a decision, a risk or a milestone), and route the update through the same review as any high-stakes external document.",
    "say": "Same Situation, Impact, Recommendation structure, with more context and less informality.",
    "ask": "How would a board update differ from your weekly status email?"
  },
  "p2": {
    "on": "This slide warns against treating a board update like an internal email with a formal tone, because it carries governance and sometimes legal weight. It adds that you should confirm confidentiality classification before drafting, since some board content is restricted even internally.",
    "say": "Board communication has governance weight. Treat it that way.",
    "wrap": "Confirm the audience and confidentiality, lead with the bottom line, and get a second review.",
    "scenario": "You're asked to draft a board update on a project that's six weeks behind schedule. What do you include so the board gets an accurate picture without downplaying the delay or causing unnecessary alarm?"
  },
  "s1": {
    "on": "This section treats board updates as their own genre: read by people with governance authority, reviewed later, held to higher precision, using Situation/Impact/Recommendation with more context.",
    "say": "Board updates carry governance weight."
  },
  "s2": {
    "on": "These steps confirm the audience and distribution list, lead with the governance bottom line (decision, risk or milestone), give minimal context, and route it through high-stakes review.",
    "say": "Lead with the decision, risk or milestone."
  },
  "s3": {
    "on": "This section warns against treating a board update like a formal internal email, and says to confirm confidentiality classification before drafting.",
    "say": "Confirm the confidentiality level before you write.",
    "ask": "How would you report a project six weeks behind?"
  }
},
"2::Investor Briefing Preparation": {
  "p1": {
    "on": "This slide explains that investors judge both the substance and, implicitly, the team's command of it. Preparation is where Decision Compression and Cognitive Relief matter most. The steps: confirm the scope and format first, pull figures only from verified primary sources, and give the executive a short pre-brief flagging likely tough questions.",
    "say": "Never let an unconfirmed number reach an investor.",
    "ask": "What question would an investor most likely push on in your firm's last update?"
  },
  "p2": {
    "on": "This slide warns against building investor materials from memory or old drafts, because investor-facing numbers get checked. It adds that investor communications can carry disclosure obligations, so when in doubt about what can be shared, ask before including it.",
    "say": "Verified figures only, and ask before sharing anything you're unsure about.",
    "wrap": "Verify every figure, flag tough questions early, and respect disclosure limits.",
    "scenario": "While preparing an investor briefing, you notice one figure you were given doesn't match the firm's own recent report. What do you do before the materials go out?"
  },
  "s1": {
    "on": "This section says investors judge both the substance and the team's competence, and this is where Decision Compression and Cognitive Relief matter most.",
    "say": "Investors check the numbers and the people."
  },
  "s2": {
    "on": "These steps confirm scope and format first, use verified primary-source figures only, and give the executive a pre-brief flagging likely tough questions.",
    "say": "Verified figures only.",
    "ask": "What question would an investor push on?"
  },
  "s3": {
    "on": "This section warns against materials built from memory or old drafts, and says investor communications may carry disclosure obligations, so escalate when unsure.",
    "say": "When in doubt about disclosure, escalate."
  }
}
});
