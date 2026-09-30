/* ============================================================
   DAY 6 — Business Setup, Compliance & Project Leadership
   Everything a trainee reads on this day:
   - DAY6: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY6_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "6::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY6 = {
  "id": 6,
  "title": "Business Setup, Compliance & Project Leadership",
  "theme": "Entity Formation & Regulatory Compliance · Project Leadership & Seasonal Coordination · Lean Six Sigma & KPI Dashboards",
  "objective": "Guide business formation and compliance decisions, lead projects when timelines slip, and optimize operations with a real KPI dashboard.",
  "lessons": [
    {
      "h": "Choosing a Business Structure",
      "section": "Business Structure & Formation",
      "b": [
        "Entity type (sole prop, partnership, LLC, corp) changes liability, taxation, and compliance obligations.",
        "Gather goals, states of operation, and expansion plans before recommending a structure."
      ],
      "howTo": [
        "Gather the actual goals for the entity first — liability protection, tax treatment, growth plans — before recommending any structure.",
        "Confirm every state where the business will actually operate, not just where it's headquartered, since multi-state operation affects the right structure.",
        "Compare the real trade-offs of sole prop, partnership, LLC, and corp specifically against those goals — liability exposure, taxation, and ongoing compliance obligations differ meaningfully across all four.",
        "Factor in expansion plans explicitly — a structure that fits the business today may not fit it in two years if growth or new states are already planned.",
        "Document the reasoning behind whichever structure is chosen, not just the choice itself — this matters if it's ever revisited later."
      ],
      "trainerCue": "Ask if anyone in the room has actually formed a business entity — LLC, sole prop, anything — and have them share what surprised them about the process."
    },
    {
      "h": "Entity Formation Step-by-Step",
      "section": "Business Structure & Formation",
      "fourPart": {
        "corePrinciples": [
          "Forming a new legal entity isn't a single filing — it's a sequence: choose the structure, reserve the name, file formation documents with the state, obtain an EIN, then complete the internal governance documents.",
          "The formation date on paper and the date the entity is actually operational for banking, contracts, and hiring purposes are often different — track both.",
          "A missed step early in formation (an unfiled initial report, a skipped EIN application) can quietly block later, more urgent actions like opening a bank account or signing a lease."
        ],
        "howTo": [
          "Confirm the entity name is available and not confusingly similar to an existing registered name in that state before filing anything.",
          "File the formation document itself (Articles of Organization for an LLC, Articles of Incorporation for a corporation) with the correct state agency, then confirm receipt and approval — don't assume filing equals approval.",
          "Apply for the EIN through the IRS directly once the entity is approved — this is required before a business bank account can be opened.",
          "Complete the entity's internal governance document (Operating Agreement for an LLC, Bylaws for a corporation) even though it isn't filed with the state — it's what actually governs how the entity runs."
        ],
        "bestPractices": [
          "Pitfall: treating the state filing as the finish line and skipping the EIN or the internal governance document — an entity without an Operating Agreement or Bylaws has no documented internal rules if a dispute ever arises.",
          "Keep every formation document (filed articles, EIN confirmation letter, initial governance document) in one accessible folder from day one — these get requested repeatedly by banks, lenders, and other counterparties.",
          "Confirm the registered agent is set up correctly at formation, not as an afterthought — a formation filing with no valid registered agent can be rejected or later flagged."
        ],
        "discussionCase": "Elias is forming a new consulting entity and wants to open a business bank account \"as soon as possible.\" The state filing was approved yesterday, but the EIN application hasn't been submitted yet. What do you tell him about the actual sequence and realistic timeline?"
      }
    },
    {
      "h": "Operating Agreements & Corporate Bylaws Basics",
      "section": "Business Structure & Formation",
      "fourPart": {
        "corePrinciples": [
          "An Operating Agreement (LLC) or Bylaws (corporation) is the entity's internal rulebook — it governs decision-making, ownership changes, and dispute resolution, and it isn't filed with the state.",
          "Without this document, an entity defaults to that state's generic statutory rules, which are rarely what the actual owners intended.",
          "This document is what gets requested first if there's ever an internal ownership dispute, a request from a lender, or an investor due-diligence request."
        ],
        "howTo": [
          "Confirm the document explicitly covers ownership percentages, voting rights, how major decisions get approved, and what happens if an owner wants to leave or sell their stake.",
          "Have the document formally executed by all owners/officers, not just drafted and left unsigned.",
          "Store the executed original securely and keep it with the rest of the entity's formation records."
        ],
        "bestPractices": [
          "Pitfall: using a generic template without adapting it to the entity's actual ownership structure — a mismatch here creates real ambiguity exactly when it matters most.",
          "Any amendment to ownership or governance terms should update this document formally, not just live in a side email or verbal agreement."
        ],
        "discussionCase": "A lender reviewing the firm's loan application asks for the entity's Operating Agreement, and you realize the version on file is three years old and doesn't reflect a partner who left last year. What's the actual risk here, and what do you do before sending anything?"
      }
    },
    {
      "h": "Multi-State Registration & Foreign Qualification",
      "section": "Business Structure & Formation",
      "fourPart": {
        "corePrinciples": [
          "An entity is only automatically authorized to do business in the state where it was formed — operating in any other state requires \"foreign qualification,\" a separate registration in that state.",
          "\"Doing business\" in a state is a legal threshold, not just a physical office — hiring an employee, signing a lease, or maintaining a registered presence can all trigger the requirement.",
          "Operating in a state without proper foreign qualification puts the entity's ability to enforce contracts and bring lawsuits in that state at risk, on top of potential penalties."
        ],
        "howTo": [
          "Identify every state where the entity has employees, a physical presence, or is otherwise meeting that state's \"doing business\" threshold.",
          "File a Certificate of Authority (or that state's equivalent) in each state, along with a Certificate of Good Standing from the home state.",
          "Appoint a registered agent in every state where the entity is foreign-qualified — this is a separate, per-state requirement.",
          "Track each state's own annual report and franchise tax obligations separately once foreign-qualified there — qualification isn't a one-time task."
        ],
        "bestPractices": [
          "Pitfall: assuming a filing in the home state covers operations everywhere — it doesn't, and this is one of the most common gaps that surfaces during a compliance audit.",
          "Maintain a single tracker listing every state the entity is qualified in, each state's registered agent, and each state's renewal deadlines — scattered records are how a lapse gets missed."
        ],
        "discussionCase": "The firm just hired a remote employee based in a state where the entity has never operated before. What actually needs to happen from a compliance standpoint before that hire's start date, and who needs to be looped in?"
      }
    },
    {
      "h": "Staying in Good Standing",
      "section": "Compliance & Good Standing",
      "b": [
        "Regulatory compliance is ongoing filings and renewals — never a one-time step.",
        "If a license has lapsed, notify the owner immediately and start corrective action."
      ],
      "howTo": [
        "Track every filing and renewal deadline on a recurring calendar, not a one-time checklist — good standing requires continuous attention, never a single completed step.",
        "Build in reminders well ahead of each actual deadline, not just on the day it's due, so there's real time to act if something's missing.",
        "If a license or filing has lapsed, notify the owner immediately and start corrective action the same day — delay compounds the consequences.",
        "Confirm renewal requirements haven't changed since the last cycle — rules and fees can shift, and assuming last year's process still applies is a real risk.",
        "Keep a simple, current record of every entity's standing status so a lapse is caught by routine review, not discovered by accident."
      ],
      "trainerCue": "This is a dry topic on paper — humanize it with a real story about a license lapsing and what it actually cost someone to fix."
    },
    {
      "h": "Annual Report & Franchise Tax Deadlines Across Jurisdictions",
      "section": "Compliance & Good Standing",
      "fourPart": {
        "corePrinciples": [
          "Annual report and franchise tax deadlines are set independently by each state — there is no single, unified due date across a multi-state entity's obligations.",
          "Missing one state's deadline doesn't just risk a penalty — it can trigger \"Loss of Good Standing,\" which blocks the entity from executing contracts or bringing legal action in that state until reinstated.",
          "A grace period existing in one state doesn't mean every state offers one — treat each jurisdiction's deadline as hard unless explicitly confirmed otherwise."
        ],
        "howTo": [
          "Build a master compliance calendar listing every state the entity operates in, that state's specific annual report/franchise tax deadline, and the filing method.",
          "Set a reminder well ahead of each deadline — not on the deadline itself — to leave room to resolve any last-minute issue (a missing document, a payment problem).",
          "Confirm actual filing acceptance, not just submission — a rejected or incomplete filing that isn't caught can be functionally the same as never filing."
        ],
        "bestPractices": [
          "Pitfall: relying on memory or a single person's calendar for multi-state deadlines — this is exactly the kind of gap that a shared, owned compliance tracker exists to close.",
          "If a deadline is ever genuinely missed, address it immediately rather than waiting — most states have a reinstatement process, but the entity is exposed the entire time it's not in good standing."
        ],
        "discussionCase": "You're auditing the firm's multi-state compliance calendar and find that Delaware's annual report was filed on time, but Texas's franchise report deadline passed three weeks ago with no record of filing. What's your actual first move?"
      }
    },
    {
      "h": "Business Licensing & Permits",
      "section": "Compliance & Good Standing",
      "fourPart": {
        "corePrinciples": [
          "Formation with the state and business licensing are two separate systems — being properly formed as an LLC or corporation doesn't automatically grant the licenses or permits needed to actually operate.",
          "Licensing requirements stack: federal, state, county, and city levels can each impose their own separate requirement depending on the industry and location.",
          "Operating without a required license exposes the business to fines, forced closure, and in some cases invalidates contracts entered into during the unlicensed period."
        ],
        "howTo": [
          "Identify every license or permit the specific industry and location require — a general business license is often just the starting point, not the whole requirement.",
          "Track each license's renewal cycle separately, since they rarely all renew on the same schedule.",
          "Confirm any license tied to a specific individual (a professional license, for example) stays current independently of the business's own licensing."
        ],
        "bestPractices": [
          "Pitfall: assuming a license once obtained never needs attention again — most require periodic renewal, and some require continuing education or reporting to stay active.",
          "Keep copies of every current license and permit in the same central compliance folder as the entity's formation documents, not scattered by department."
        ],
        "discussionCase": "The firm is opening a satellite office in a new city. What licensing and permit questions do you need answered before that office can actually open its doors, and who do you need to ask?"
      }
    },
    {
      "h": "Registered Agent Responsibilities & Service of Process",
      "section": "Compliance & Good Standing",
      "fourPart": {
        "corePrinciples": [
          "A registered agent is the official point of contact designated to receive legal notices and service of process on behalf of the entity — this role has real legal consequences, not just administrative ones.",
          "If a lawsuit's service of process is never received because the registered agent information is outdated, the entity can still be found in default — \"we never got it\" isn't automatically a valid defense.",
          "Every state where the entity is formed or foreign-qualified requires its own valid registered agent."
        ],
        "howTo": [
          "Confirm the registered agent's address is current and monitored — a registered agent that's stopped operating or moved without notice creates a real gap.",
          "When a registered agent does receive a notice, route it immediately to the right internal contact — a delay here compounds whatever deadline the notice itself carries.",
          "Update the registered agent designation with the state promptly any time it changes — this isn't optional paperwork, it's how legal notice actually reaches the entity."
        ],
        "bestPractices": [
          "Pitfall: using a registered agent service and then never confirming who actually monitors that inbox internally — the notice can sit unread even when it's technically received on time.",
          "Keep registered agent information in the same compliance tracker as annual report deadlines, since a lapsed registered agent can itself trigger loss of good standing."
        ],
        "discussionCase": "You receive a forwarded notice from the registered agent service that looks like a lawsuit was just served. What's your actual first move in the next 30 minutes, and who needs to know immediately?"
      }
    },
    {
      "h": "Corporate Recordkeeping & Minute Books",
      "section": "Compliance & Good Standing",
      "fourPart": {
        "corePrinciples": [
          "A minute book is the entity's official historical record — formation documents, ownership records, meeting minutes, and resolutions — and it's one of the first things requested in due diligence, a sale, or litigation.",
          "Corporations generally have a stricter formal requirement to document board and shareholder meetings than LLCs, but both benefit from consistent recordkeeping discipline.",
          "A gap in the minute book doesn't just look disorganized — in a real dispute, it can undermine the entity's ability to show that major decisions were properly authorized."
        ],
        "howTo": [
          "Document every major corporate action (an ownership change, a major contract, an officer appointment) with a written resolution or meeting minutes, even when the action is otherwise informal.",
          "Keep the minute book current in real time, not reconstructed after the fact when a document is suddenly requested.",
          "Store the minute book with the same care as the formation documents — accessible, backed up, and centrally owned."
        ],
        "bestPractices": [
          "Pitfall: treating minute book maintenance as unnecessary for a small or closely-held entity — due diligence and lending processes ask for it regardless of company size.",
          "When in doubt about whether an action needs to be documented, document it — a written record that turns out to be unnecessary costs far less than a missing one that turns out to matter."
        ],
        "discussionCase": "The firm is in early conversations about a potential investor, and their due diligence checklist asks for two years of board meeting minutes. The firm has never formally documented its meetings. What's the actual scope of the problem, and how would you start closing the gap?"
      }
    },
    {
      "h": "Leading a Project Under Pressure",
      "section": "Project Leadership",
      "b": [
        "Find the root cause of a delay before reassigning tasks — public blame fixes nothing.",
        "Give stakeholders structured, scheduled updates rather than silence.",
        "Leadership competencies for this work include Strategic Alignment (translating the executive's vision into action steps) and Influence Without Authority (managing vendors, staff, and cross-functional teams you don't formally supervise).",
        "Decision Support means providing concise summaries, risk analysis, and options with recommendations — assistants don't make every decision, but they shape it."
      ],
      "howTo": [
        "When a project hits a delay, find the actual root cause before reassigning anything — public blame fixes nothing and often makes the real problem harder to see.",
        "Give stakeholders structured, scheduled updates on a predictable cadence, rather than going silent until there's good news to report.",
        "Apply Strategic Alignment by translating the executive's vision into concrete next steps, not just relaying the vision itself.",
        "Use Influence Without Authority deliberately when managing vendors, staff, or cross-functional teams you don't formally supervise — this means clear asks and follow-through, not relying on positional authority you don't have.",
        "Provide Decision Support proactively — concise summaries, risk analysis, and options with a recommendation attached, so the executive is shaping a decision, not starting from a blank page."
      ],
      "trainerCue": "Roleplay a live 'deadline just slipped, stakeholders are asking' scenario and see if the room's instinct is to look for who's at fault or what's actually broken — correct gently if it's the former."
    },
    {
      "h": "Seasonal Project Coordination",
      "section": "Project Leadership",
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Recognize the Pattern",
          "desc": "Year-end close, trial season, annual compliance renewals, conference season — these repeat on a predictable calendar, unlike a one-off project"
        },
        {
          "label": "Build the Playbook Once",
          "desc": "Document the checklist, timeline, and owner for each recurring task the first time through — this is what makes next season faster than this one"
        },
        {
          "label": "Start Before It's Urgent",
          "desc": "The single most common seasonal-coordination failure is starting prep at the same trigger point every year instead of earlier, based on what last cycle actually revealed"
        },
        {
          "label": "Debrief and Update the Playbook",
          "desc": "After each cycle, capture what broke or ran late — a playbook that's never updated just repeats the same friction annually"
        }
      ],
      "b": [
        "Seasonal coordination is a distinct skill from general project management: a one-off project has a defined end and gets closed out; a seasonal responsibility recurs on a cycle and needs a system, not a fresh plan built from scratch every time."
      ],
      "trainerCue": "Ask the room to name one recurring, predictable crunch time in their own work or life — then ask whether there's an actual written playbook for it, or whether it gets rebuilt from memory every time."
    },
    {
      "h": "Project Scope Creep & Change Management",
      "section": "Project Leadership",
      "fourPart": {
        "corePrinciples": [
          "Scope creep is what happens when a project's requirements quietly expand past what was originally agreed, usually one small addition at a time rather than one big change.",
          "Every scope addition has a real cost — time, budget, or both — even when it seems small in isolation; the danger is in the accumulation, not any single request.",
          "A documented scope isn't there to say no to every new request — it's there to make the trade-off visible so it can be a deliberate decision, not an invisible one."
        ],
        "howTo": [
          "Document the original project scope clearly enough that a new request can actually be compared against it, not just judged by feel.",
          "When a new request comes in mid-project, name it as a scope change explicitly and surface the real trade-off (timeline, budget, or resourcing) before agreeing to it.",
          "Log every approved scope change with what was added and why — this becomes the record for why the final delivery differs from the original plan."
        ],
        "bestPractices": [
          "Pitfall: quietly absorbing small scope additions to avoid an awkward conversation — this is exactly how a project ends up over budget or late with no single moment anyone can point to as the cause.",
          "A scope change conversation doesn't have to be adversarial — framing it as \"here's what this addition means for the timeline\" is enough to make the trade-off real."
        ],
        "discussionCase": "A stakeholder asks for \"just one more small addition\" to a project that's already three similar small additions deep. What do you actually say, and how do you handle the fact that each individual addition really did seem reasonable on its own?"
      }
    },
    {
      "h": "Stakeholder Communication During Project Delays",
      "section": "Project Leadership",
      "fourPart": {
        "corePrinciples": [
          "A delay handled with early, clear communication is a manageable problem — a delay discovered by the stakeholder before being told is a trust problem on top of the original issue.",
          "Stakeholders can generally absorb bad news about timeline far better than they can absorb the feeling of being the last to know.",
          "The goal of a delay update isn't to make the news sound better than it is — it's to give the stakeholder an accurate picture and a real plan."
        ],
        "howTo": [
          "As soon as a delay becomes likely (not just certain), flag it — waiting for full certainty usually means the stakeholder finds out later than they should have.",
          "Lead the update with the bottom line (what's delayed, by how much) before the explanation of why — burying the headline in context reads as avoidance.",
          "Always pair the delay update with a concrete next step or revised timeline — a delay notice with no plan attached leaves the stakeholder with nothing to act on."
        ],
        "bestPractices": [
          "Pitfall: waiting until the original deadline has already passed to say anything — this converts a manageable delay into a credibility issue.",
          "Keep a consistent communication cadence during an extended delay (weekly, biweekly) rather than going quiet between the initial notice and the eventual resolution."
        ],
        "discussionCase": "A project you're supporting is now going to miss its deadline by two weeks, and you only just found out this morning. The stakeholder has a standing call in one hour. What do you do between now and that call?"
      }
    },
    {
      "h": "Frameworks Worth Knowing",
      "section": "Process Improvement",
      "b": [
        "You don't need certification — just recognize what each solves."
      ],
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Lean",
          "desc": "Process improvement — eliminate waste, focus on what adds real value"
        },
        {
          "label": "Six Sigma",
          "desc": "Defect reduction through rigorous measurement and root-cause analysis"
        },
        {
          "label": "PMI / PMBOK",
          "desc": "Standard project-management process groups used across industries"
        }
      ],
      "howTo": [
        "When a process has too many unnecessary steps or wasted effort, reach for Lean — its focus is eliminating waste and keeping only what adds real value.",
        "When a process has recurring errors or inconsistency, reach for Six Sigma — its focus is defect reduction through rigorous measurement and root-cause analysis.",
        "When you need a standard structure for running a larger project end to end, reach for PMI/PMBOK's process groups rather than improvising a structure from scratch.",
        "Don't try to apply all three to every problem — match the framework to what's actually broken (waste, defects, or overall project structure).",
        "Treat this as name recognition, not certification — the goal is knowing which tool fits which problem, not becoming a formal practitioner of any one of them."
      ],
      "trainerCue": "Don't over-explain Lean/Six Sigma/PMBOK — the goal is name recognition, not certification. Move quickly once the room can distinguish the three at a glance."
    },
    {
      "h": "Lean Six Sigma in Practice — A Real Methodology, Not Just a Buzzword",
      "section": "Process Improvement",
      "layout": "PROCESS",
      "b": [
        "Lean and Six Sigma are two different disciplines that get combined in practice: Lean is about eliminating waste and keeping only what adds real value; Six Sigma is about reducing defects and variation through measurement. Together, 'Lean Six Sigma' means: cut what doesn't matter, then rigorously fix what's actually broken."
      ],
      "trainerCue": "Run a live 30-second DMAIC exercise on a real annoyance from the room's own work — someone names a recurring problem, and the group calls out what Define/Measure/Analyze/Improve/Control would look like for it. This is far more memorable than walking through the Elias-specific examples alone.",
      "processSteps": [
        {
          "label": "Define",
          "desc": "Name the actual problem in one sentence and who it affects — e.g. 'Invoices go out 4-6 days late every month.'"
        },
        {
          "label": "Measure",
          "desc": "Get real numbers, not impressions — how many days late, how often, which invoices specifically."
        },
        {
          "label": "Analyze",
          "desc": "Find the root cause, not the symptom — is it a missing approval step, a bottleneck at one person, a broken handoff?"
        },
        {
          "label": "Improve",
          "desc": "Change the actual process — remove a step, reorder a handoff, automate a manual check."
        },
        {
          "label": "Control",
          "desc": "Build a way to make sure the fix sticks — a checklist, a recurring reminder, a simple tracker."
        }
      ]
    },
    {
      "h": "DMAIC — Three Worked EA Examples",
      "section": "Process Improvement",
      "b": [
        "Concrete EA example of 'Waiting' waste: if a contract sits for three days because it needs one partner's signature and that partner is often out, the fix isn't reminding harder — it's building a backup-approver rule into the process itself.",
        "Concrete EA example of 'Motion' waste: if finding a signed NDA requires checking four different folders because filing habits vary by person, standardizing one filing location removes wasted motion permanently, not just for this one document.",
        "Concrete EA example of DMAIC in miniature: Define — 'expense reports take too long to get approved.' Measure — track actual turnaround time for two weeks. Analyze — find it's always stuck at the same approval step. Improve — set up an auto-reminder at 48 hours. Control — review turnaround time monthly to confirm it holds.",
        "A real EA application: if client intake forms keep coming back incomplete, DMAIC looks like — Define: '30% of intake forms are missing required fields.' Measure: track the actual rejection rate for two weeks. Analyze: find that one specific field is confusing, not the whole form. Improve: reword just that field and re-test on a small batch. Control: make the reworded form the new standard template so nobody reverts to the old version."
      ],
      "howTo": [
        "For a Waiting-type problem (a contract stuck on one person's signature), don't just remind harder — build a backup-approver rule directly into the process.",
        "For a Motion-type problem (a document that requires checking four folders to find), standardize one filing location so the fix applies permanently, not just to this one instance.",
        "Run a miniature DMAIC on a real recurring frustration: Define the problem in one sentence, Measure actual turnaround or rejection rate for a set period, Analyze to find the real root cause, Improve by changing the specific broken step, and Control by checking periodically that the fix holds.",
        "Apply the same structure to a form or intake problem — if something keeps coming back incomplete, isolate which specific field is the actual issue rather than assuming the whole form needs a rewrite.",
        "Make the improved version the new standard once it's tested, so people don't quietly revert to the old, broken process out of habit."
      ],
      "trainerCue": "Walk the room through the real client-intake-form example live, step by step, before asking them to apply DMAIC to a process from their own work. The abstract five letters mean nothing until they see it solve something concrete."
    },
    {
      "h": "Lean's 8 Wastes & Kaizen",
      "section": "Process Improvement",
      "b": [
        "Lean's core idea is the 8 Wastes (often remembered by the acronym DOWNTIME): Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing. An EA doesn't need to memorize the acronym — but recognizing 'this step is pure waste' the moment you see it is exactly the instinct Lean is trying to build.",
        "Most admin waste in a real office falls under Waiting (approvals stuck in someone's inbox) and Extra Processing (re-entering the same data in three different systems).",
        "Kaizen is the Lean principle of continuous, small improvement — not one big overhaul, but a habit of fixing small frictions the moment you notice them. This is closer to how most EAs actually improve their own workflows day to day than a formal DMAIC project ever is.",
        "You don't need a Six Sigma belt to use any of this. The real value for an EA is having a repeatable way to fix a broken process instead of guessing — and the discipline of the 'Control' step in particular, which is the one people skip and then wonder why the old problem came back three months later."
      ],
      "howTo": [
        "Build the instinct to notice \"this step is pure waste\" the moment you see it, without needing to formally categorize which of the 8 wastes it is.",
        "Watch specifically for Waiting (approvals stuck in someone's inbox) and Extra Processing (re-entering the same data across multiple systems) — these are the most common admin-office wastes.",
        "Apply Kaizen as a daily habit — fix small frictions the moment you notice them, rather than saving them up for one big overhaul.",
        "When you do fix something, don't skip the Control step — build a way to make sure the fix actually sticks, since this is the step most people skip and then wonder why the old problem came back.",
        "Treat this as a repeatable way of thinking through a broken process, not a formal certification requirement — the value is in the habit, not the credential."
      ],
      "trainerCue": "Ask the room which of the 8 wastes they recognize most in their own work — Waiting and Extra Processing are almost always the answer, which is worth naming explicitly before moving on."
    },
    {
      "h": "Root Cause Analysis Basics",
      "section": "Process Improvement",
      "fourPart": {
        "corePrinciples": [
          "Root cause analysis exists to answer \"why did this actually happen\" rather than stopping at the first, most visible explanation.",
          "The \"5 Whys\" technique — asking \"why\" repeatedly until the answer stops being a symptom and starts being a real, addressable cause — is a simple, usable version of this for day-to-day operational problems.",
          "A fix aimed at a symptom instead of the root cause tends to produce the same problem again in a slightly different form."
        ],
        "howTo": [
          "State the problem precisely and factually before analyzing it — a vague problem statement makes it easy to land on a vague, unhelpful root cause.",
          "Ask \"why\" repeatedly, treating each answer as the next thing to interrogate rather than stopping at the first plausible-sounding cause.",
          "Confirm the identified root cause would actually have prevented the problem if it had been addressed beforehand — if not, keep digging."
        ],
        "bestPractices": [
          "Pitfall: stopping at \"human error\" as the root cause — that's almost always a symptom of a missing process, unclear ownership, or inadequate training, not the actual root cause itself.",
          "Root cause analysis works best done in the same session as the incident review, while details are still fresh, rather than reconstructed weeks later."
        ],
        "discussionCase": "A filing deadline was missed last week. The first explanation offered is \"the person responsible forgot.\" Walk through how you'd actually use the 5 Whys to get past that answer to something genuinely fixable."
      }
    },
    {
      "h": "Operational Optimization",
      "section": "Process Improvement",
      "b": [
        "Automate repetitive tasks, clarify ownership, then standardize — in that order.",
        "Track a small handful of real KPIs on a fixed cadence, not a sprawling list no one reviews."
      ],
      "howTo": [
        "Identify a recurring, fully manual task first — this is where automation delivers the most value, before anything else.",
        "Automate that task before trying to clarify ownership or standardize it — doing these in the wrong order wastes effort documenting a process that's about to change anyway.",
        "Once automated, clarify who actually owns the process going forward, so it doesn't quietly become no one's responsibility.",
        "Standardize the process last, once automation and ownership are settled — this is what makes the improvement durable rather than a one-off fix.",
        "Track only a small handful of real KPIs on a fixed, reviewed cadence — a sprawling list no one actually reviews provides no real value over tracking nothing at all."
      ],
      "trainerCue": "Ask the room to name one recurring task in their own work that's still fully manual — use it as a live example for the 'automate first' principle."
    },
    {
      "h": "The KPI Dashboard Template",
      "section": "Process Improvement",
      "b": [
        "A real dashboard tracks a few numbers across four areas: Executive Productivity, Client Service, Operational Efficiency, Legal Compliance.",
        "An SOP has a full lifecycle, not just a creation step: Creation → Review & Update → Approval & Implementation → Monitoring & Audit → Continuous improvement back to Creation."
      ],
      "table": {
        "headers": [
          "Category",
          "KPI",
          "Target"
        ],
        "rows": [
          [
            "Executive Productivity",
            "Calendar Accuracy Rate",
            "≥ 98%"
          ],
          [
            "Executive Productivity",
            "Executive Inbox Response Time",
            "≤ 4 hrs"
          ],
          [
            "Client Service",
            "Avg. Client Response Time",
            "≤ 2 hrs"
          ],
          [
            "Client Service",
            "Client Retention Rate",
            "≥ 90%"
          ],
          [
            "Operational Efficiency",
            "Task Completion Rate",
            "≥ 95%"
          ],
          [
            "Operational Efficiency",
            "Error Reduction Rate",
            "≤ 2%"
          ],
          [
            "Legal Compliance",
            "Filing Deadline Adherence",
            "100%"
          ],
          [
            "Legal Compliance",
            "Audit Readiness Score",
            "≥ 95%"
          ]
        ]
      },
      "trainerCue": "Put the KPI table on screen and ask the room to guess which metric is hardest to actually hit consistently in real practice — usually Executive Inbox Response Time.",
      "howTo": [
        "Track a small number of real KPIs across all four areas — Executive Productivity, Client Service, Operational Efficiency, Legal Compliance — rather than a sprawling, unreviewed list.",
        "Set a specific target for each KPI (e.g. Calendar Accuracy Rate ≥ 98%), not just a vague direction like \"improve.\"",
        "Review the dashboard on a fixed cadence, so drift is caught early rather than discovered after it's already caused a problem.",
        "Treat SOPs as having a full lifecycle — Creation, Review & Update, Approval & Implementation, Monitoring & Audit, then back to Creation — not a one-time document that's written and forgotten.",
        "Feed KPI results back into the SOP review step specifically — a KPI consistently missing its target is a signal the underlying SOP needs updating, not just that people need to try harder."
      ]
    },
    {
      "h": "SOP Architecture & Trigger Mapping",
      "section": "SOPs",
      "fourPart": {
        "corePrinciples": [
          "A Standard Operating Procedure is a step-by-step guide built to standardize a task, reduce errors, ensure compliance, and speed up execution — its value comes from being followed consistently, not from existing on paper.",
          "Every real SOP shares the same architecture: a Title & SOP ID, a stated Purpose, a defined Scope (who and what it covers), Definitions for any abbreviations used, the Step-by-Step Procedure itself, assigned Roles & Responsibilities, linked Forms/Templates/Tools, Compliance/Risk Notes, and a Revision History.",
          "\"Trigger mapping\" means identifying exactly what event should cause someone to reach for this SOP — a well-scoped SOP tells you not just what to do, but precisely when it applies, so it doesn't get skipped when it's actually needed or misapplied when it isn't."
        ],
        "howTo": [
          "Start every new SOP by identifying the specific task or process that needs standardizing, and write down why it needs one — \"why is this SOP necessary\" is the question that keeps an SOP focused rather than generic.",
          "Define scope explicitly: which staff, which jurisdiction or department, which document or task types this SOP actually covers — a scope that's too broad becomes useless, too narrow means constant exceptions.",
          "Write the procedure itself as numbered steps, a flowchart, or a checklist — never as a paragraph of prose, since prose is what people skip under time pressure.",
          "Assign a specific trigger event to the SOP explicitly (e.g. \"whenever a new filing deadline is received\" or \"whenever a client requests a document\") — this is what makes the SOP something people reach for automatically, not just a document that exists."
        ],
        "bestPractices": [
          "Pitfall: writing an SOP with no clear trigger. If nobody knows exactly when to use it, it won't get used consistently, however well-written the steps are.",
          "Every SOP needs an owner — one person or role responsible for keeping it current — otherwise updates fall through the cracks and the document quietly goes stale.",
          "Give every SOP a real ID and version number from the start (e.g. \"Deadline Management SOP — SOP-CA-001\") — this becomes essential the moment you have more than a handful of SOPs to track.",
          "An SOP that's too long to actually reference in the moment defeats its own purpose — a numbered checklist someone can follow live beats an exhaustive document nobody opens under pressure."
        ],
        "discussionCase": "You're documenting an SOP for handling last-minute court filing deadlines. What's the actual trigger event that should cause someone to pull up this SOP, and what would the first three steps need to cover to be genuinely useful in the moment, not just accurate on paper?"
      }
    },
    {
      "h": "Hybrid Screen-Recording Workflow (Loom + Text)",
      "section": "SOPs",
      "fourPart": {
        "corePrinciples": [
          "Some processes are genuinely harder to document in text alone than to show — a screen-recording walkthrough (using a tool like Loom) captures exact click-paths and software navigation that a written list of steps often can't convey as clearly.",
          "A hybrid approach — a short screen recording paired with a concise written summary — combines the strengths of both formats: the recording shows exactly what to do, the text makes it searchable, skimmable, and referenceable without replaying video.",
          "The written component isn't optional or an afterthought — a video with no text summary is hard to search, hard to skim back through, and hard to keep current as a standalone SOP."
        ],
        "howTo": [
          "Record a short, focused screen capture (ideally under 5 minutes) walking through the exact steps of the process, narrating what you're doing and why as you go — not just silently clicking through it.",
          "Immediately after recording, write a companion text summary using the same numbered-step structure as any other SOP — this becomes the searchable, skimmable reference, with the video linked as the visual walkthrough.",
          "Store both together in the same SOP repository entry, with the video clearly linked at the top and the text steps below it, so someone can either watch or read depending on what they need in the moment.",
          "Keep recordings short and single-purpose — one recording per discrete process, rather than one long recording covering multiple unrelated tasks, since long recordings become as hard to navigate as long documents."
        ],
        "bestPractices": [
          "Pitfall: recording a screen walkthrough and never writing the text summary. The recording alone isn't a complete SOP — it's the illustration for one.",
          "When the underlying software or process changes, both the recording and the text need updating — an outdated recording showing an old interface is actively misleading, not just unhelpful.",
          "Keep recordings accessible without requiring a special login or app where possible — a video walkthrough that's hard to access defeats the purpose of making a process easier to follow.",
          "Use this hybrid format selectively — for genuinely visual, software-navigation-heavy processes, not for every SOP. A simple decision-tree SOP is often clearer as text alone."
        ],
        "discussionCase": "You need to document how to process a complex multi-step expense report in a specific accounting platform, involving several screens and a non-obvious approval routing. Would this genuinely benefit from the hybrid screen-recording approach, or would a well-written text SOP alone be just as effective? What would tip the decision either way?"
      }
    },
    {
      "h": "Maintenance, Auditing & Version Control",
      "section": "SOPs",
      "fourPart": {
        "corePrinciples": [
          "An SOP is never actually \"finished\" — it needs a defined lifecycle: creation, review and update, approval and implementation, monitoring and audit, and back to creation for the next revision.",
          "Version control exists so that when an SOP changes, everyone can tell which version they're looking at and what specifically changed — an SOP with no version history creates real risk if an outdated copy is still circulating somewhere.",
          "Auditing isn't a one-time check — it's the recurring mechanism that confirms an SOP is actually being followed, not just that it exists."
        ],
        "howTo": [
          "Schedule a recurring review cadence for every SOP — quarterly or biannual is typical — rather than leaving updates to happen only when something goes wrong.",
          "Track every revision in a Revision History Log: date, author, and exactly what changed — this is what makes it possible to reconstruct why a process works the way it currently does.",
          "Trigger an off-cycle update whenever one of the real triggers hits: a law or regulation changes, a process improvement is identified, an error or near-miss reveals a gap, the underlying technology changes, or staff feedback consistently points to confusion.",
          "Measure SOP adherence with real KPIs where possible — deadline adherence, error rates, filing accuracy — so \"is this SOP working\" has an actual answer, not just an impression."
        ],
        "bestPractices": [
          "Pitfall: updating an SOP's content but not incrementing its version number. This is exactly how someone ends up working from an outdated copy without realizing it.",
          "Keep SOPs in one central, accessible repository — cloud-based or an internal server — rather than scattered across individual people's files, where updates can't reliably reach everyone using them.",
          "After any audit or operational review that surfaces a gap, close the loop by actually updating the relevant SOP — an audit finding that never makes it back into the document repeats itself next cycle.",
          "Assign a specific owner to each SOP who's responsible for updates — without one, \"someone should update this eventually\" is how SOPs go stale."
        ],
        "discussionCase": "During a routine audit, you discover that three different team members are each following a slightly different version of the same filing SOP — none of them realized there was a discrepancy. What does this reveal about the current version control process, and what would you actually change to prevent it from happening again?"
      }
    },
    {
      "h": "Change Management for New SOPs",
      "section": "SOPs",
      "fourPart": {
        "corePrinciples": [
          "A well-written SOP that nobody actually adopts has the same practical effect as no SOP at all — writing the document is only the first half of the work.",
          "People resist process change most when they don't understand why it's happening or weren't involved in shaping it, not necessarily because the new process itself is worse.",
          "Rollout of a new or revised SOP needs its own plan — it doesn't happen automatically just because the document exists in the shared folder."
        ],
        "howTo": [
          "Explain the \"why\" behind a new or changed SOP explicitly when introducing it — people adopt a new process faster when they understand the problem it's solving.",
          "Roll out significant SOP changes with a real introduction (a walkthrough, a training moment) rather than a silent document update nobody notices.",
          "Check back after rollout to confirm the SOP is actually being followed as written, not just that it was announced once."
        ],
        "bestPractices": [
          "Pitfall: updating a widely-used SOP and only notifying people by editing the shared document — most people won't see the change until they're already doing it the old way.",
          "Where possible, involve the people who'll actually use the new SOP in shaping it — adoption is significantly easier when it doesn't feel imposed from outside."
        ],
        "discussionCase": "You've just finalized a revised filing SOP that fixes a real, recurring error — but the team has been doing it the old way for two years. What's your actual rollout plan, beyond just sharing the new document?"
      }
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 9,
      "q": "A project is behind schedule due to missed deadlines from several team members. Best first response?",
      "opts": [
        "Take over the late tasks yourself so the schedule recovers",
        "Identify the root cause of the delays before reassigning anything",
        "Share a list of who missed which deadline, so the team sees who's responsible",
        "Push the final deadline back to give everyone more breathing room"
      ],
      "a": 1,
      "r": "You can't fix a delay effectively until you know why it happened."
    },
    {
      "afterIndex": 19,
      "q": "On the KPI dashboard, which category does 'Filing Deadline Adherence (100%)' belong to?",
      "opts": [
        "Legal Compliance",
        "Executive Productivity",
        "Client Service",
        "Operational Efficiency"
      ],
      "a": 0,
      "r": "Filing deadlines are a compliance metric — critical for legal-adjacent EA/PA work."
    }
  ],
  "quiz": [
    {
      "q": "What's the single most common seasonal-coordination failure?",
      "opts": [
        "Underestimating the budget, so every seasonal event ends up costing more than was planned for the year",
        "Relying on last year's vendor list without checking whether each vendor is still available and suitable",
        "Booking the same vendors as last year without asking the family what they'd like to change this time",
        "Starting prep at the same trigger point every year instead of earlier, based on what the last cycle revealed"
      ],
      "a": 3,
      "r": "A playbook that never adjusts its starting point based on real experience just repeats the same late scramble every cycle."
    },
    {
      "q": "Before recommending a business structure to a client, you should first...",
      "opts": [
        "Understand the client's goals, states of operation, and expansion plans",
        "Skip research and let a lawyer decide later",
        "Recommend incorporating, since a corporation gives every business the strongest protection",
        "Suggest an LLC, since it's the most common structure and suits nearly everyone"
      ],
      "a": 0,
      "r": "Structure recommendations depend entirely on the specifics of the business's goals and footprint."
    },
    {
      "q": "You discover an operating license expired and the business is still running. Best action?",
      "opts": [
        "Note it in the file and raise it at the next scheduled compliance review",
        "Notify the owner immediately and help initiate renewal or corrective action",
        "Pause the affected services until it's renewed",
        "Renew it online yourself straight away, and mention it once it's sorted"
      ],
      "a": 1,
      "r": "Prompt disclosure plus a corrective path limits the compliance risk."
    },
    {
      "q": "A project is behind schedule due to missed deadlines from several team members. Best first response?",
      "opts": [
        "Ignore it and hope the team catches up",
        "Publicly call out who missed their deadlines",
        "Identify the root cause of the delays before reassigning anything",
        "Cancel the project"
      ],
      "a": 2,
      "r": "You can't fix a delay effectively until you know why it happened."
    },
    {
      "q": "A client wants frequent updates and is anxious about a project's progress. Best approach?",
      "opts": [
        "Send an update whenever anything changes, even small unconfirmed details, so they always feel informed",
        "Wait to update them until there's a major milestone, so each update has real news in it",
        "Copy the client on every internal email about the project, so they can see all the work as it happens",
        "Provide structured progress reports on a set, predictable cadence"
      ],
      "a": 3,
      "r": "Predictable, structured updates build confidence even when there isn't dramatic news to share."
    },
    {
      "q": "The most effective way to measure team productivity is to...",
      "opts": [
        "Ask each team member to rate their own week",
        "Define a small set of specific KPIs and track them consistently",
        "Track every metric the software offers, so nothing about the team's work is ever missed",
        "Measure total output once a year at review time, when there's a full picture to judge from"
      ],
      "a": 1,
      "r": "Focused, well-defined KPIs reviewed regularly give an accurate operational picture."
    },
    {
      "q": "What is a key factor in choosing a business structure (e.g., LLC vs. corporation)?",
      "opts": [
        "How many employees the business has at launch, since that decides which structures are allowed",
        "How impressive the structure's name will look to clients and investors on business cards",
        "Liability protection, tax treatment, and administrative complexity for the specific situation",
        "Which structure is cheapest to set up, since the choice can easily be changed later on"
      ],
      "a": 2,
      "r": "Liability, taxation, and ongoing complexity are the real trade-offs between different business structures."
    },
    {
      "q": "What does 'staying in good standing' typically require of a business entity?",
      "opts": [
        "Ongoing compliance actions like annual filings, fee payments, and registered agent maintenance",
        "Paying the formation fee on time, after which the state treats the entity as permanently active",
        "Renewing the business name registration every ten years, and keeping the certificate on display",
        "Filing updates with the state only when something about the business changes, like its address"
      ],
      "a": 0,
      "r": "Good standing is maintained through ongoing, recurring compliance — it isn't a permanent status from formation alone."
    },
    {
      "q": "When leading a project that's fallen behind schedule, what should come before assigning blame?",
      "opts": [
        "Publicly announcing the delay to all stakeholders",
        "Extending the deadline without investigation",
        "Diagnosing the actual root cause of the delay",
        "Immediately replacing the team lead"
      ],
      "a": 2,
      "r": "Understanding the real cause is a prerequisite for any credible recovery plan — blame without diagnosis fixes nothing."
    },
    {
      "q": "What is the primary goal of Lean methodology?",
      "opts": [
        "Eliminating waste and focusing only on what adds real value",
        "Standardizing every process identically regardless of context",
        "Increasing headcount to handle more volume",
        "Maximizing the number of process steps"
      ],
      "a": 0,
      "r": "Lean is about cutting anything that doesn't add real value, not adding more process for its own sake."
    },
    {
      "q": "What does the 'D' in the DMAIC cycle stand for?",
      "opts": [
        "Delay",
        "Delete",
        "Delegate",
        "Define"
      ],
      "a": 3,
      "r": "Define — clearly naming the actual problem and who it affects is the first step of the cycle."
    },
    {
      "q": "What does the 'M' in the DMAIC cycle stand for?",
      "opts": [
        "Minimize",
        "Measure",
        "Maximize",
        "Manage"
      ],
      "a": 1,
      "r": "Measure — getting real numbers on the problem, not just impressions, is the second step."
    },
    {
      "q": "In the 8 Wastes (DOWNTIME) framework, what does the 'W' represent?",
      "opts": [
        "Waiting",
        "Warehousing",
        "Wages",
        "Warranty"
      ],
      "a": 0,
      "r": "Waiting is one of the 8 wastes — time lost while something or someone sits idle before the next step."
    },
    {
      "q": "Why is 'Control,' the last step of DMAIC, necessary after a fix has already been implemented?",
      "opts": [
        "It's where the team compares the new process against a control group, as in a scientific experiment",
        "It's where the team controls the budget for the project, making sure the fix didn't overspend",
        "Without a way to monitor and sustain the fix, the process tends to drift back to the original problem over time",
        "It's where the fix is formally approved by management before anyone is allowed to use it"
      ],
      "a": 2,
      "r": "Fixes that aren't actively monitored tend to erode — Control is what makes the improvement stick."
    },
    {
      "q": "What is the purpose of a KPI dashboard for business operations?",
      "opts": [
        "To show clients how the firm is performing each month",
        "To give a fast, consistent view of whether key metrics are on or off target",
        "To replace judgment calls, so decisions follow automatically from the numbers each week",
        "To record every transaction in detail, so auditors can check each one individually"
      ],
      "a": 1,
      "r": "A KPI dashboard exists to make operational health scannable at a glance, not to replace judgment about what to do next."
    },
    {
      "q": "If a KPI dashboard shows two unrelated-looking metrics both drifting off-target at the same time, what should an EA consider?",
      "opts": [
        "Dashboards should be ignored if more than one metric is off target",
        "Two metrics moving together is usually a coincidence, so each should be handled by its own owner",
        "Focus on whichever metric has drifted furthest, since fixing that first will have the biggest effect",
        "They may share a common root cause worth investigating together, rather than treating them as separate issues"
      ],
      "a": 3,
      "r": "Simultaneous drift in seemingly unrelated metrics is often a sign of a shared underlying cause."
    },
    {
      "q": "What's a realistic first response when a recovery-plan vendor unexpectedly pulls out mid-project?",
      "opts": [
        "Pause the project until a replacement vendor is fully contracted",
        "Negotiate with the vendor first, offering better terms to bring them back onto the project",
        "Immediately assess the schedule impact and identify a parallel path to fill the gap",
        "Send stakeholders an update explaining that the vendor caused the delay, to protect the team"
      ],
      "a": 2,
      "r": "The immediate priority is protecting the timeline with a real alternative, not dwelling on why the vendor left."
    },
    {
      "q": "Why does Lean Six Sigma combine Lean's waste-elimination with Six Sigma's defect-reduction rather than using just one?",
      "opts": [
        "Because Six Sigma is too expensive for most teams, so Lean is added to bring the cost of the program down",
        "Because certification bodies only recognize the combined program, so using one on its own doesn't count toward a qualification",
        "Because Lean handles the planning stage and Six Sigma handles the reporting stage of every project",
        "Lean removes what doesn't add value, while Six Sigma rigorously fixes what remains — together they address both efficiency and quality"
      ],
      "a": 3,
      "r": "The two disciplines are complementary: cut the unnecessary, then rigorously improve what's left."
    },
    {
      "q": "A compliance deadline was missed because a tracker's lead-time buffer was too short. What's the correct type of fix?",
      "opts": [
        "Adding a second person to double-check every deadline in the tracker by hand",
        "A specific process change to the tracker's buffer setting — a genuine Control-stage fix",
        "A reminder email to the whole team asking everyone to double-check deadlines more carefully",
        "Moving the deadlines from the tracker into each person's own calendar instead"
      ],
      "a": 1,
      "r": "A systemic gap needs a systemic fix — personal vigilance alone won't prevent the same structural issue from recurring."
    },
    {
      "q": "What is 'good standing' most directly at risk from if annual compliance filings are neglected?",
      "opts": [
        "Administrative dissolution or loss of legal protections the entity structure was meant to provide",
        "A late fee that grows each month, but the business keeps all its legal protections in the meantime",
        "Nothing — filings are optional once a business is formed",
        "Losing the business name, which the state can then give to another company"
      ],
      "a": 0,
      "r": "Neglecting required filings can jeopardize the very liability protections the business structure exists to provide."
    },
    {
      "q": "Why should a KPI report be double-checked before being presented to stakeholders, especially if a discrepancy is later raised?",
      "opts": [
        "Because stakeholders are required by policy to sign off on the numbers before any report is shared",
        "Because the numbers change daily, so checking makes sure the report shows the very latest figures available",
        "An unverified or wrong number presented confidently can damage credibility more than acknowledging uncertainty upfront",
        "Because a report with rounded numbers looks more polished and professional to senior stakeholders"
      ],
      "a": 2,
      "r": "Confidently presenting a wrong number is worse for trust than being transparent about needing to verify it first."
    }
  ],
  "discussionQuestion": "Describe a project that fell behind schedule. Looking back, was the real root cause ever actually addressed, or just the symptom?"
};

const DAY6_EXTRA_LEARNING = {
  "6::Choosing a Business Structure": {
    "t": "Common Structures Compared",
    "p": [
      "Sole proprietorship: simplest to set up, but the owner is personally liable for all business debts and claims.",
      "LLC: separates personal and business liability and offers flexible tax treatment; a common default for small firms and holding entities.",
      "Corporation (C or S): formal governance (board, bylaws, minutes) and share structure; often chosen when outside investment or specific tax treatment is planned. Final choice is always made with the attorney and CPA."
    ]
  },
  "6::Staying in Good Standing": {
    "t": "What 'Good Standing' Requires",
    "p": [
      "Annual or biennial reports filed with the state on time, with current officer and address information.",
      "Franchise taxes or fees paid, and a registered agent maintained in every state where the entity is registered.",
      "Business licenses and permits renewed before expiry. Losing good standing can block contracts, bank actions, and even the right to sue in that state."
    ]
  },
  "6::Frameworks Worth Knowing": {
    "t": "Four Frameworks in One Line Each",
    "p": [
      "Lean — remove waste: steps, waiting, rework, and handoffs that add no value.",
      "Six Sigma — reduce errors and variation using data (DMAIC: Define, Measure, Analyze, Improve, Control).",
      "PMI/PMBOK — structure large projects with scope, schedule, budget, and risk plans. Agile — deliver in short cycles and adjust based on feedback."
    ]
  },
  "6::Operational Optimization": {
    "t": "Choosing KPIs That Matter",
    "p": [
      "Pick measures tied to outcomes: calendar accuracy rate, email response time, on-time filings, invoice turnaround.",
      "Limit to four or five KPIs and give each a target and an owner — a KPI without an owner is just a number.",
      "Review on a fixed cadence (weekly or monthly) and act on trends, not single bad days."
    ]
  },
  "6::The KPI Dashboard Template": {
    "t": "Example KPIs by Area",
    "p": [
      "Executive Productivity: calendar accuracy ≥ 98%, briefing delivered by 8 AM daily.",
      "Client Service: response to client inquiries within 4 business hours; zero missed follow-ups.",
      "Operations & Finance: invoices issued within 3 days of month-end; SOPs reviewed at least every 6 months."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[6] = { day: DAY6, extraLearning: DAY6_EXTRA_LEARNING };
