/* Day 6 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
"6::Choosing a Business Structure": {
  "p1": {
    "on": "This slide says entity type (sole proprietorship, partnership, LLC or corporation) changes liability, taxation and compliance obligations. The steps: gather the goals first (liability, tax, growth), confirm every state the business will operate in, compare the trade-offs against those goals, factor in expansion plans, and document the reasoning behind the choice.",
    "say": "Goals, states and expansion plans come before any recommendation.",
    "ask": "Has anyone here formed a business entity? What surprised you?"
  },
  "p2": {
    "on": "This slide compares the common structures. A sole proprietorship is simplest, but the owner is personally liable. An LLC separates personal and business liability with flexible tax treatment. A corporation (C or S) has formal governance (board, bylaws, minutes) and a share structure, often chosen when outside investment is planned.",
    "say": "The attorney and accountant decide; you gather what they need to decide.",
    "wrap": "Gather goals, states and plans, compare the trade-offs and document the reasoning.",
    "scenario": "Elias wants to set up a separate entity for his speaking and consulting work, which may expand to two other states next year. What do you gather before the attorney and accountant recommend a structure?"
  },
  "s1": {
    "on": "This section's point: the entity type (sole prop, partnership, LLC, corporation) changes liability, taxes and compliance.",
    "say": "Structure drives liability, tax and compliance."
  },
  "s2": {
    "on": "These steps prepare a recommendation: gather goals, confirm every operating state, compare trade-offs, factor in expansion, and document the reasoning.",
    "say": "Goals first, then structure."
  },
  "s3": {
    "on": "This section's rule: goals, states and expansion plans come before any recommendation.",
    "say": "Ask before you recommend."
  },
  "s4": {
    "on": "This section compares the options: sole prop (personal liability), LLC (separation and flexible tax) and corporation (formal governance, shares). The attorney and CPA make the final call.",
    "say": "The attorney and CPA decide.",
    "ask": "Why might a small firm default to an LLC?"
  }
},
"6::Entity Formation Step-by-Step": {
  "p1": {
    "on": "This slide says forming an entity is a sequence: choose the structure, reserve the name, file formation documents, get an EIN, and complete the governance document. The date on paper and the date it's operational often differ, and a missed early step blocks later ones. The steps: check name availability, file the articles and confirm approval, apply for the EIN, and complete the Operating Agreement or Bylaws.",
    "say": "It's a sequence, and a skipped step blocks the next one.",
    "ask": "Why can't you open a bank account the day the state approves the filing?"
  },
  "p2": {
    "on": "This slide warns against treating the state filing as the finish line and skipping the EIN or governance document. It says to keep every formation document in one folder from day one and to set up the registered agent correctly at formation.",
    "say": "Approval from the state isn't the finish line.",
    "wrap": "Follow the sequence, keep every document together and set the agent up at formation.",
    "scenario": "Elias's new consulting entity was approved by the state yesterday, and he wants a business bank account \"as soon as possible.\" The EIN hasn't been applied for yet. What do you tell him about the sequence and a realistic timeline?"
  },
  "s1": {
    "on": "This section says formation is a sequence (structure, name, state filing, EIN, governance documents), paper and operational dates can differ, and early gaps block later steps.",
    "say": "It's a sequence, not one filing."
  },
  "s2": {
    "on": "These steps form it: check name availability, file and confirm approval, get the EIN, and execute the Operating Agreement or Bylaws.",
    "say": "Filing isn't approval; confirm it."
  },
  "s3": {
    "on": "This section warns against stopping at the state filing, and asks for one formation folder and a valid registered agent from the start.",
    "say": "Keep every document in one folder."
  }
},
"6::Operating Agreements & Corporate Bylaws Basics": {
  "p1": {
    "on": "This slide explains that the Operating Agreement (LLC) or Bylaws (corporation) is the entity's internal rulebook for decisions, ownership changes and disputes. Without it, the state's generic rules apply, and it's the first document requested in disputes, lending or due diligence. The steps: confirm it covers ownership, voting, major decisions and owner exits, have it signed by all owners, and store it securely.",
    "say": "No agreement means the state's default rules apply.",
    "ask": "What's the first document a lender would ask for?"
  },
  "p2": {
    "on": "This slide warns against generic templates that don't match the actual ownership, which creates ambiguity exactly when it matters. It says any ownership or governance change must formally update the document, not live in an email.",
    "say": "A side email isn't an amendment.",
    "wrap": "Make it specific, get it signed and keep it current.",
    "scenario": "A lender asks for the entity's Operating Agreement, and the version on file is three years old and doesn't reflect a partner who left last year. What's the risk, and what do you do before sending anything?"
  },
  "s1": {
    "on": "This section explains the entity's internal rulebook: without it, generic state rules apply, and it's the first document requested in disputes and due diligence.",
    "say": "The internal rulebook."
  },
  "s2": {
    "on": "These steps check it: ownership, voting, major decisions and exits covered, executed by all owners, and stored securely.",
    "say": "Drafted isn't signed."
  },
  "s3": {
    "on": "This section warns against unadapted templates, and says amendments must update the document formally.",
    "say": "No side-email amendments."
  }
},
"6::Multi-State Registration & Foreign Qualification": {
  "p1": {
    "on": "This slide explains that an entity is only authorized to do business in its formation state; elsewhere it needs foreign qualification. \"Doing business\" is a legal threshold: an employee, a lease or a registered presence can trigger it. Without qualification, the entity risks being unable to enforce contracts there. The steps: identify every state, file a Certificate of Authority with a Good Standing certificate, appoint a registered agent in each, and track each state's filings.",
    "say": "One employee in a new state can trigger foreign qualification.",
    "ask": "What counts as \"doing business\" in a state?"
  },
  "p2": {
    "on": "This slide warns that assuming a home-state filing covers every state is one of the most common compliance gaps. It says to keep one tracker listing every qualified state, its registered agent and its renewal deadlines.",
    "say": "The home-state filing doesn't cover everywhere.",
    "wrap": "Identify every state, qualify in each and track them in one place.",
    "scenario": "The firm just hired a remote employee in a state where it has never operated. What needs to happen from a compliance standpoint before the start date, and who do you loop in?"
  },
  "s1": {
    "on": "This section explains that an entity is only authorized in its home state; elsewhere it needs foreign qualification, triggered by 'doing business' such as hiring or leasing.",
    "say": "Home state only, until you qualify."
  },
  "s2": {
    "on": "These steps qualify it: identify every triggering state, file a Certificate of Authority with good standing, appoint agents per state, and track each state's obligations.",
    "say": "Each state has its own agent and deadlines."
  },
  "s3": {
    "on": "This section warns that a home-state filing doesn't cover everywhere, and asks for one tracker of states, agents and deadlines.",
    "say": "One tracker for every state."
  }
},
"6::Staying in Good Standing": {
  "p1": {
    "on": "This slide says regulatory compliance is ongoing filings and renewals, never a one-time step. The steps: track every deadline on a recurring calendar, set reminders well ahead, notify the owner immediately and start corrective action the same day if something lapses, confirm requirements haven't changed, and keep a current standing record for every entity.",
    "say": "Good standing is continuous, never finished.",
    "ask": "Why is last year's renewal process a risky assumption?"
  },
  "p2": {
    "on": "This slide lists what good standing requires: annual or biennial reports filed on time with current officers and address, franchise taxes paid, a registered agent in every state, and licenses renewed before expiry. Losing good standing can block contracts, bank actions and even the right to sue in that state.",
    "say": "Lose good standing and you can lose the right to sue in that state.",
    "wrap": "Calendar every filing, remind early and act the same day on any lapse.",
    "scenario": "You discover the firm's city business license expired 10 days ago. Who do you tell, what do you do today, and what do you change so it can't happen again?"
  },
  "s1": {
    "on": "This section's rule: compliance is ongoing filings and renewals, never a one-time step.",
    "say": "Never one-and-done."
  },
  "s2": {
    "on": "These steps keep it: a recurring deadline calendar, early reminders, same-day action on a lapse, checking for rule changes, and a current standing record.",
    "say": "Remind well before the due date."
  },
  "s3": {
    "on": "This section's rule: if a license lapses, tell the owner immediately and start fixing it.",
    "say": "Report lapses at once."
  },
  "s4": {
    "on": "This section lists what good standing needs: annual reports, franchise taxes, a registered agent in each state, and renewed licenses. Losing it can block contracts and lawsuits.",
    "say": "Losing standing can block the right to sue."
  }
},
"6::Annual Report & Franchise Tax Deadlines Across Jurisdictions": {
  "p1": {
    "on": "This slide says each state sets its own annual report and franchise tax deadline, missing one can cause Loss of Good Standing, and a grace period in one state doesn't mean all have one. The steps: build a master compliance calendar by state with deadline and filing method, set reminders well ahead, and confirm the filing was accepted, not just submitted.",
    "say": "Submitted isn't the same as accepted.",
    "ask": "Why treat every state's deadline as hard?"
  },
  "p2": {
    "on": "This slide warns against relying on memory or one person's calendar for multi-state deadlines; that's what a shared, owned tracker is for. If a deadline is missed, act immediately: most states have reinstatement, but the entity is exposed until then.",
    "say": "A missed deadline gets fixed today, not next week.",
    "wrap": "One master calendar, early reminders and confirmed acceptance.",
    "scenario": "Auditing the compliance calendar, you find Delaware's annual report was filed on time, but Texas's franchise report deadline passed three weeks ago with no record of filing. What's your first move?"
  },
  "s1": {
    "on": "This section says each state sets its own deadlines, a miss can cost good standing, and grace periods aren't universal.",
    "say": "No single due date."
  },
  "s2": {
    "on": "These steps manage them: a master compliance calendar, reminders well ahead, and confirming acceptance, not just submission.",
    "say": "Submitted isn't accepted."
  },
  "s3": {
    "on": "This section warns against relying on memory and says to fix a missed deadline immediately through reinstatement.",
    "say": "Exposed until reinstated."
  }
},
"6::Business Licensing & Permits": {
  "p1": {
    "on": "This slide says forming an entity and licensing it are separate systems, and licensing stacks across federal, state, county and city levels. Operating unlicensed risks fines, closure and sometimes invalid contracts. The steps: identify every license the industry and location require, track each renewal cycle separately, and keep individual professional licenses current independently.",
    "say": "Being formed doesn't mean being licensed.",
    "ask": "How many levels of licensing could apply to one office?"
  },
  "p2": {
    "on": "This slide warns that most licenses need periodic renewal, and some need continuing education or reporting. It says to keep copies of every license and permit in the same central compliance folder as the formation documents.",
    "say": "Licenses renew. Track each one on its own cycle.",
    "wrap": "Map every license, track every renewal and keep copies centrally.",
    "scenario": "The firm is opening a satellite office in a new city. What licensing and permit questions need answering before it can open, and who do you ask?"
  },
  "s1": {
    "on": "This section says formation and licensing are separate systems, requirements stack at every level of government, and operating unlicensed has serious consequences.",
    "say": "Formed isn't licensed."
  },
  "s2": {
    "on": "These steps track them: identify every license needed, track each renewal cycle, and keep individual professional licenses current.",
    "say": "Each license has its own cycle."
  },
  "s3": {
    "on": "This section warns that licenses need renewal and sometimes continuing education, and asks for copies in the central compliance folder.",
    "say": "Licenses expire."
  }
},
"6::Registered Agent Responsibilities & Service of Process": {
  "p1": {
    "on": "This slide explains that the registered agent receives legal notices and service of process for the entity. If service is missed because the agent's details are outdated, the entity can still be found in default. Every state needs its own agent. The steps: confirm the address is current and monitored, route any notice immediately, and update the designation with the state promptly.",
    "say": "\"We never got it\" is not a defense.",
    "ask": "Who monitors the registered agent's inbox at your firm?"
  },
  "p2": {
    "on": "This slide warns against using an agent service without knowing who monitors it internally, since a notice can sit unread. It says to keep registered agent details in the compliance tracker, because a lapsed agent can itself cost good standing.",
    "say": "Know who reads the notices, not just who receives them.",
    "wrap": "Keep the agent current, monitored and tracked, and route notices immediately.",
    "scenario": "The registered agent service forwards what looks like a newly served lawsuit. What do you do in the next 30 minutes, and who needs to know immediately?"
  },
  "s1": {
    "on": "This section defines the registered agent as the official recipient of legal notices; outdated info can still lead to default, and each state needs one.",
    "say": "'We never got it' isn't a defense."
  },
  "s2": {
    "on": "These steps manage it: a current, monitored address, immediate routing of notices, and prompt updates to the state.",
    "say": "Route notices the same day."
  },
  "s3": {
    "on": "This section warns about unmonitored agent inboxes, and asks to track agent info with annual report deadlines.",
    "say": "Someone must actually watch the inbox."
  }
},
"6::Signatures, Notarization & Document Execution": {
  "p1": {
    "on": "This slide defines execution, says e-signatures are valid for most business documents but some have special rules, explains what a notary does and remote online notarization, and shows how a company signs through an authorized person. The steps: confirm the method with the attorney, prepare the execution version, arrange the notary and ID, check every page after signing, and save and distribute the executed copy.",
    "say": "Confirm who signs and how before anyone picks up a pen.",
    "ask": "What would make a signed document useless?"
  },
  "p2": {
    "on": "This slide covers e-signature order and completion certificates, combining counterparts, and two pitfalls: signing for someone without written authority and pre-signing before the notary.",
    "say": "The notary has to see the signature happen.",
    "wrap": "Right signer, right method, every page checked, executed copy saved.",
    "scenario": "Elias must sign a real estate document that needs notarization, and he's traveling for three days. The deadline is Friday. What are your options, and what do you confirm with the attorney first?"
  },
  "s1": {
    "on": "This section explains execution, e-signatures, notarization and company signature blocks.",
    "say": "A company signs through an authorized person."
  },
  "s2": {
    "on": "These steps: confirm method with the attorney, prepare signature blocks and tabs, arrange the notary and ID, check every page, save and distribute.",
    "say": "Tab every place to sign or initial.",
    "ask": "What does the signer need to bring to a notary?"
  },
  "s3": {
    "on": "This section covers e-signature order, counterparts, and the two pitfalls.",
    "say": "No signing for someone else without written authority."
  }
},
"6::Corporate Recordkeeping & Minute Books": {
  "p1": {
    "on": "This slide explains that the minute book is the entity's official history (formation documents, ownership records, minutes and resolutions) and one of the first things due diligence requests. Corporations have stricter requirements than LLCs, but both benefit. The steps: document every major action with a resolution or minutes, keep it current in real time, and store it securely.",
    "say": "Document major decisions when they happen, not when someone asks.",
    "ask": "What counts as a major corporate action?"
  },
  "p2": {
    "on": "This slide warns against skipping minute books for small or closely held entities, because due diligence and lenders ask regardless of size. When in doubt, document it: an unnecessary record costs far less than a missing one.",
    "say": "When in doubt, write it down.",
    "wrap": "Record every major action, keep it current and store it safely.",
    "scenario": "A potential investor's due diligence checklist asks for two years of board minutes, and the firm has never documented its meetings. How big is the problem, and how do you start closing the gap?"
  },
  "s1": {
    "on": "This section defines the minute book as the official record, notes corporations have stricter requirements, and warns that gaps can undermine authorization.",
    "say": "The entity's official history."
  },
  "s2": {
    "on": "These steps maintain it: resolutions or minutes for major actions, updates in real time, and secure central storage.",
    "say": "Document it as it happens."
  },
  "s3": {
    "on": "This section warns that small entities still need one for due diligence, and says: when in doubt, document it.",
    "say": "When in doubt, document."
  }
},
"6::Leading a Project Under Pressure": {
  "p1": {
    "on": "This slide says to find the root cause of a delay before reassigning tasks, because public blame fixes nothing. The steps: give stakeholders structured, scheduled updates; apply Strategic Alignment (turn the executive's vision into next steps); use Influence Without Authority with vendors and teams you don't supervise; and provide Decision Support with summaries, risks and a recommendation.",
    "say": "Look for what's broken, not who's at fault.",
    "ask": "When a deadline slips, what's your first instinct?"
  },
  "p2": {
    "on": "This slide expands on the leadership competencies: scheduled updates instead of silence, Strategic Alignment, Influence Without Authority, and Decision Support. Assistants don't make every decision, but they shape how decisions get made.",
    "say": "You shape the decision even when you don't make it.",
    "wrap": "Root cause first, scheduled updates, and options with a recommendation.",
    "scenario": "Roleplay: the client's document production just slipped two days, and three stakeholders are emailing for status. What do you look for first, and what goes in your update?"
  },
  "s1": {
    "on": "This section's rule: find the root cause of a delay before reassigning work; public blame fixes nothing.",
    "say": "Cause before blame."
  },
  "s2": {
    "on": "These steps lead: root cause first, scheduled updates, Strategic Alignment, Influence Without Authority, and Decision Support with a recommendation.",
    "say": "Options plus a recommendation.",
    "ask": "How do you influence a vendor you don't manage?"
  },
  "s3": {
    "on": "This section defines the competencies: scheduled updates, Strategic Alignment, Influence Without Authority, and Decision Support that shapes decisions.",
    "say": "You shape the decision, not make every one."
  }
},
"6::Seasonal Project Coordination": {
  "p1": {
    "on": "This slide gives four steps for recurring crunch periods: Recognize the Pattern (year-end close, trial season, compliance renewals, conference season), Build the Playbook Once (checklist, timeline and owner for each task), Start Before It's Urgent (earlier than last time, based on what the last cycle revealed), and Debrief and Update the Playbook.",
    "say": "Build the playbook once, then start earlier every cycle.",
    "ask": "What predictable crunch time do you rebuild from memory every year?"
  },
  "p2": {
    "on": "This slide separates seasonal coordination from general project management: a one-off project has an end and gets closed out, while a seasonal responsibility comes back on a predictable calendar and should get faster each cycle.",
    "say": "A seasonal task should get easier every year.",
    "wrap": "Recognize, document, start early and update after every cycle.",
    "scenario": "Year-end billing close at Thorne & Partners ran late last December because partner approvals came in slowly. Build the first draft of the playbook: what starts when, and who owns it?"
  },
  "s1": {
    "on": "This section says seasonal coordination is sequential: follow the steps in order.",
    "say": "In order."
  },
  "s2": {
    "on": "These steps are the cycle: Recognize the pattern, Build the playbook once, Start before it's urgent, and Debrief and update.",
    "say": "Start earlier than last year.",
    "ask": "What recurs every year in your role?"
  },
  "s3": {
    "on": "This section separates seasonal work from one-off projects: it recurs and needs a system, not a fresh plan each time.",
    "say": "A system, not a fresh plan."
  }
},
"6::Project Scope Creep & Change Management": {
  "p1": {
    "on": "This slide explains that scope creep usually arrives one small addition at a time, each has a real cost, and a documented scope makes the trade-off visible so it's a deliberate decision. The steps: document the original scope clearly, name each new request as a scope change and state the trade-off before agreeing, and log every approved change with what and why.",
    "say": "Name it as a scope change and state the trade-off.",
    "ask": "Why is each small addition dangerous if each seems reasonable?"
  },
  "p2": {
    "on": "This slide warns against quietly absorbing small additions to avoid an awkward conversation, which is how projects end up late with no single moment to blame. It says the conversation doesn't need to be adversarial: \"here's what this addition means for the timeline\" is enough.",
    "say": "Quietly absorbing changes is how projects go late.",
    "wrap": "Document the scope, surface every trade-off and log every change.",
    "scenario": "A stakeholder asks for \"just one more small addition\" to a project already three small additions deep. What do you say, given each addition really did seem reasonable on its own?"
  },
  "s1": {
    "on": "This section defines scope creep as small additions piling up, each with a real cost; documented scope makes the trade-off visible.",
    "say": "Small additions add up."
  },
  "s2": {
    "on": "These steps manage it: document the original scope, name new requests as scope changes with their trade-off, and log every approved change.",
    "say": "Name it as a scope change.",
    "ask": "How would you raise a small extra request mid-project?"
  },
  "s3": {
    "on": "This section warns against quietly absorbing additions, and says the conversation needn't be adversarial.",
    "say": "Here's what it means for the timeline."
  }
},
"6::Stakeholder Communication During Project Delays": {
  "p1": {
    "on": "This slide says a delay communicated early is manageable, while a delay the stakeholder discovers first becomes a trust problem. People handle bad news better than being the last to know. The steps: flag a delay as soon as it's likely, lead with the bottom line (what's delayed and by how much), and always pair it with a next step or revised timeline.",
    "say": "Bad news early beats bad news discovered.",
    "ask": "Why flag a delay before you're certain?"
  },
  "p2": {
    "on": "This slide warns against waiting until the deadline has passed, which turns a delay into a credibility issue. During an extended delay, keep a consistent cadence of updates rather than going quiet.",
    "say": "Silence between updates reads as bad news.",
    "wrap": "Flag early, lead with the bottom line and always bring a plan.",
    "scenario": "This morning you learned the project will miss its deadline by two weeks. The stakeholder has a standing call in one hour. What do you do between now and that call?"
  },
  "s1": {
    "on": "This section says early communication keeps a delay manageable, being last to know hurts trust, and the goal is an accurate picture and a plan.",
    "say": "Early and honest."
  },
  "s2": {
    "on": "These steps communicate it: flag when likely, lead with the bottom line, and always include a next step or new timeline.",
    "say": "Bottom line first, plan attached."
  },
  "s3": {
    "on": "This section warns against waiting past the deadline, and asks for a steady update cadence during long delays.",
    "say": "Don't go quiet."
  }
},
"6::Frameworks Worth Knowing": {
  "p1": {
    "on": "This slide introduces three frameworks, with a diagram. Lean eliminates waste and keeps what adds value. Six Sigma reduces recurring errors through measurement and root-cause analysis. PMI/PMBOK gives a standard structure for large projects. The steps say to match the framework to what's broken, and that this is name recognition, not certification.",
    "say": "Waste, defects or structure: match the framework to the problem.",
    "ask": "Which of your problems is waste, and which is errors?"
  },
  "p2": {
    "on": "This slide gives each framework in one line: Lean removes waste; Six Sigma reduces errors with DMAIC (Define, Measure, Analyze, Improve, Control); PMI/PMBOK plans scope, schedule, budget and risk; Agile delivers in short cycles and adjusts. You don't need certification, just recognition.",
    "say": "Recognize what each solves. No belt required.",
    "wrap": "Know which framework fits which problem.",
    "scenario": "Quick sort: a filing process with four redundant approval steps, invoices with recurring number errors, and a six-month office move. Which framework fits each?"
  },
  "s1": {
    "on": "This section introduces three frameworks: Lean (cut waste), Six Sigma (reduce defects) and PMI/PMBOK (standard project structure).",
    "say": "Waste, defects, structure."
  },
  "s2": {
    "on": "These steps match them: Lean for wasted steps, Six Sigma for recurring errors, PMBOK for big projects, one at a time, as name recognition.",
    "say": "Match the framework to what's broken."
  },
  "s3": {
    "on": "This section's reassurance: no certification needed, just know what each solves.",
    "say": "Recognition, not certification."
  },
  "s4": {
    "on": "This section defines each: Lean removes waste, Six Sigma uses DMAIC, PMBOK plans scope, schedule, budget and risk, and Agile delivers in short cycles.",
    "say": "Define, Measure, Analyze, Improve, Control."
  }
},
"6::Lean Six Sigma in Practice — A Real Methodology, Not Just a Buzzword": {
  "p1": {
    "on": "This slide walks through DMAIC. Define the problem in one sentence (\"Invoices go out 4–6 days late every month\"). Measure with real numbers. Analyze for the root cause: a missing approval, a bottleneck, a broken handoff. Improve by changing the process. Control by building a checklist, reminder or tracker so the fix sticks.",
    "say": "Define, Measure, Analyze, Improve, Control.",
    "ask": "Who has a recurring annoyance we can run through DMAIC right now?"
  },
  "p2": {
    "on": "This slide explains that Lean and Six Sigma are two disciplines combined in practice: Lean removes waste and keeps what adds value, and Six Sigma reduces errors and variation with data.",
    "say": "Lean removes waste. Six Sigma removes errors.",
    "wrap": "Use DMAIC to fix a broken process, and don't skip Control.",
    "scenario": "Live, 30 seconds: someone name a recurring problem from your work. As a group, call out what Define, Measure, Analyze, Improve and Control would look like for it."
  },
  "s1": {
    "on": "This section says the method is sequential: follow the steps in order.",
    "say": "Five steps, in order."
  },
  "s2": {
    "on": "These steps are DMAIC with an invoice example: Define the problem in a sentence, Measure real numbers, Analyze the root cause, Improve the process, and Control so the fix sticks.",
    "say": "Real numbers, not impressions.",
    "ask": "What recurring problem would you run through DMAIC?"
  },
  "s3": {
    "on": "This section explains the combination: Lean cuts waste, Six Sigma cuts defects; together, cut what doesn't matter, then fix what's broken.",
    "say": "Cut waste, then fix defects."
  }
},
"6::DMAIC — Three Worked EA Examples": {
  "p1": {
    "on": "This slide gives worked examples. Waiting waste: a contract stuck on one partner's signature is fixed with a backup-approver rule, not louder reminders. Motion waste: a document you need four folders to find is fixed with one standard filing location. The steps also run a mini DMAIC on a frustration, isolate the problem field on an intake form, and make the fix the new standard.",
    "say": "Fix the process, not the reminder.",
    "ask": "What's a Waiting problem in your own work?"
  },
  "p2": {
    "on": "This slide shows two more examples. Expense reports approved too slowly: define it, measure turnaround for two weeks, find the bottleneck, fix it and control. Incomplete intake forms: define \"30% of forms missing required fields,\" measure which fields, analyze why, improve the form and control with a check.",
    "say": "Find the one field or step that actually causes it.",
    "wrap": "Measure first, find the real cause, then make the fix the standard.",
    "scenario": "Walk the intake-form example step by step with the room, then apply DMAIC to one process from your own work."
  },
  "s1": {
    "on": "This section gives the Waiting waste example: a contract stuck on one partner's signature is fixed by a backup-approver rule, not by reminding harder.",
    "say": "Fix the process, not the reminder."
  },
  "s2": {
    "on": "These steps apply the examples: backup approvers, one filing location, a miniature DMAIC, isolating the one confusing form field, and making the fix the standard.",
    "say": "Find the one broken step."
  },
  "s3": {
    "on": "This section walks through three examples: Motion waste in filing, expense approvals fixed with a 48-hour reminder, and intake forms fixed by rewording one field.",
    "say": "Small, specific fixes.",
    "ask": "Which example sounds most like your office?"
  }
},
"6::Lean's 8 Wastes & Kaizen": {
  "p1": {
    "on": "This slide lists Lean's 8 Wastes, remembered as DOWNTIME: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion and Extra processing. The steps: learn to spot waste instinctively, watch especially for Waiting and Extra Processing, practice Kaizen by fixing small frictions daily, and don't skip the Control step.",
    "say": "Spot the waste, fix it small and make it stick.",
    "ask": "Which of the 8 wastes do you see most at work?"
  },
  "p2": {
    "on": "This slide says most office waste is Waiting (approvals stuck in an inbox) and Extra Processing (re-entering the same data in three systems). Kaizen means continuous small improvement, not one big overhaul, and you don't need a Six Sigma belt to use any of it.",
    "say": "Waiting and Extra Processing are almost always the answer.",
    "wrap": "Fix small frictions daily and build in Control.",
    "scenario": "You enter every new client's details into the CRM, the billing system and a spreadsheet. Which waste is this, and what's the smallest Kaizen fix you could make this week?"
  },
  "s1": {
    "on": "This section lists the 8 Wastes (DOWNTIME) and says the goal is spotting waste on sight, not memorizing the acronym.",
    "say": "Spot waste on sight."
  },
  "s2": {
    "on": "These steps build the habit: notice waste, watch for Waiting and Extra Processing, practice Kaizen daily, don't skip Control, and treat it as a way of thinking.",
    "say": "Don't skip Control."
  },
  "s3": {
    "on": "This section names the common office wastes, explains Kaizen as small continuous fixes, and says the Control step is the one people skip.",
    "say": "Small fixes, every day.",
    "ask": "Where do you re-enter the same data twice?"
  }
},
"6::Root Cause Analysis Basics": {
  "p1": {
    "on": "This slide explains that root cause analysis asks \"why did this actually happen\" instead of stopping at the first explanation. The 5 Whys technique keeps asking until the answer is a fixable cause, and fixing a symptom brings the problem back. The steps: state the problem precisely, keep asking why, and confirm the root cause would have prevented the problem.",
    "say": "Keep asking why until the answer is something you can fix.",
    "ask": "Why isn't \"someone forgot\" a root cause?"
  },
  "p2": {
    "on": "This slide warns against stopping at \"human error,\" which is almost always a symptom of a missing process, unclear ownership or poor training. It says to do the analysis in the incident review, while details are fresh.",
    "say": "\"Human error\" is where the analysis starts, not where it ends.",
    "wrap": "State it precisely, ask why repeatedly and test the root cause.",
    "scenario": "A filing deadline was missed last week, and the first explanation is \"the person responsible forgot.\" Use the 5 Whys out loud to get to something fixable."
  },
  "s1": {
    "on": "This section explains root cause analysis and the 5 Whys, and warns that fixing symptoms brings the problem back.",
    "say": "Ask why until it's a real cause."
  },
  "s2": {
    "on": "These steps run it: state the problem precisely, keep asking why, and confirm the cause would have prevented the problem.",
    "say": "Would fixing it have prevented this?",
    "ask": "What's a problem you could run the 5 Whys on?"
  },
  "s3": {
    "on": "This section warns that 'human error' is usually a symptom, and says to do the analysis while details are fresh.",
    "say": "Human error is a symptom."
  }
},
"6::Operational Optimization": {
  "p1": {
    "on": "This slide gives the order: automate repetitive tasks, clarify ownership, then standardize. The steps: find a fully manual recurring task, automate it before documenting it, assign an owner, standardize last so the improvement lasts, and track a small handful of KPIs on a fixed review cadence.",
    "say": "Automate, assign an owner, then standardize, in that order.",
    "ask": "What's one task you still do fully by hand?"
  },
  "p2": {
    "on": "This slide explains how to choose KPIs: pick outcome-based measures (calendar accuracy, email response time, on-time filings, invoice turnaround), limit it to four or five, give each a target and an owner, and review on a fixed cadence, acting on trends rather than single bad days.",
    "say": "A KPI without an owner is just a number.",
    "wrap": "Automate first, own it, standardize it and measure a few things that matter.",
    "scenario": "Every Monday you manually compile a matter status report from five spreadsheets. Apply automate, own, standardize, and name the one KPI you'd track for it."
  },
  "s1": {
    "on": "This section's order: automate repetitive tasks, clarify ownership, then standardize.",
    "say": "Automate, own, standardize."
  },
  "s2": {
    "on": "These steps follow it: find a manual task, automate it first, assign an owner, standardize last, and track a few reviewed KPIs.",
    "say": "Order saves wasted documentation."
  },
  "s3": {
    "on": "This section's rule: a few real KPIs on a fixed cadence beat a sprawling list.",
    "say": "Few KPIs, reviewed."
  },
  "s4": {
    "on": "This section says to pick outcome KPIs, limit to four or five with targets and owners, and review trends on a fixed cadence.",
    "say": "A KPI without an owner is just a number."
  }
},
"6::The KPI Dashboard Template": {
  "p1": {
    "on": "This slide says a real dashboard tracks a few numbers across four areas: Executive Productivity, Client Service, Operational Efficiency and Legal Compliance. The steps: set a specific target for each (for example, Calendar Accuracy ≥ 98%), review on a fixed cadence, treat SOPs as having a full lifecycle, and feed missed KPIs back into SOP review.",
    "say": "A few KPIs, each with a specific target.",
    "ask": "Which metric do you think is hardest to hit consistently?"
  },
  "p2": {
    "on": "This slide shows the SOP lifecycle (Creation → Review & Update → Approval & Implementation → Monitoring & Audit → back to Creation) and example KPIs: calendar accuracy ≥ 98% and a briefing by 8 a.m.; client replies within 4 business hours with zero missed follow-ups; invoices within 3 days of month-end and SOPs reviewed every 6 months.",
    "say": "A KPI that keeps missing means the SOP needs updating.",
    "wrap": "Specific targets, a fixed review and a loop back into the SOPs.",
    "scenario": "Your dashboard shows client response time averaging 7 hours against a 4-hour target for three months. What does that tell you, and which SOP do you review first?"
  },
  "s1": {
    "on": "This section says a real dashboard tracks a few numbers in four areas: Executive Productivity, Client Service, Operational Efficiency and Legal Compliance.",
    "say": "Four areas, few numbers."
  },
  "s2": {
    "on": "These steps run it: a few KPIs, a specific target each, a fixed review cadence, the SOP lifecycle, and missed KPIs feeding SOP review.",
    "say": "A missed target means review the SOP."
  },
  "s3": {
    "on": "This section lays out the SOP lifecycle: Creation, Review & Update, Approval, Monitoring & Audit, then back to Creation.",
    "say": "SOPs are never finished."
  },
  "s4": {
    "on": "This section gives example targets: 98% calendar accuracy, a briefing by 8 AM, 4-hour client response, invoices within 3 days, and SOP reviews every 6 months.",
    "say": "Specific targets."
  }
},
"6::SOP Architecture & Trigger Mapping": {
  "p1": {
    "on": "This slide says an SOP standardizes a task, reduces errors and speeds execution. Every SOP shares one structure: Title & SOP ID, Purpose, Scope, Definitions, Procedure and so on. Trigger mapping names exactly what event should prompt someone to use it. The steps: state why the SOP is needed, define the scope, write numbered steps not prose, and assign a trigger event.",
    "say": "An SOP without a trigger won't get used.",
    "ask": "What event should make someone reach for an SOP?"
  },
  "p2": {
    "on": "This slide warns against SOPs with no clear trigger. It says every SOP needs an owner, a real ID and version number from the start (for example, SOP-CA-001), and should be short enough to follow live: a checklist beats an exhaustive document.",
    "say": "Owner, ID, version, trigger.",
    "wrap": "Numbered steps, a clear trigger and an owner who keeps it current.",
    "scenario": "You're writing an SOP for last-minute court filing deadlines. What's the trigger event, and what must the first three steps cover to be useful in the moment?"
  },
  "s1": {
    "on": "This section defines an SOP and its parts (ID, Purpose, Scope, Definitions, Procedure, Roles, Tools, Compliance Notes, Revision History) and explains trigger mapping.",
    "say": "Know exactly when it applies."
  },
  "s2": {
    "on": "These steps write one: why it's needed, explicit scope, numbered steps not prose, and a specific trigger event.",
    "say": "Steps, not paragraphs.",
    "ask": "What trigger would start a deadline-management SOP?"
  },
  "s3": {
    "on": "This section warns that an SOP with no trigger won't get used, and asks for an owner, an ID and version, and a length someone can follow live.",
    "say": "Short enough to use under pressure."
  }
},
"6::Hybrid Screen-Recording Workflow (Loom + Text)": {
  "p1": {
    "on": "This slide explains that some processes are easier to show than describe, so a short screen recording (for example with Loom) paired with a written summary gets the best of both. The steps: record a focused capture under 5 minutes with narration, write the numbered text summary right after, store both in the same SOP entry, and keep one recording per process.",
    "say": "The video shows it. The text makes it searchable.",
    "ask": "Which of your processes would be easier to show than write?"
  },
  "p2": {
    "on": "This slide warns that a recording without the text summary isn't a complete SOP. It says to update both when the software changes, keep recordings accessible without special logins, and use the hybrid format only for visual, navigation-heavy processes.",
    "say": "An outdated recording is worse than none.",
    "wrap": "Short recording, written steps, stored together and kept current.",
    "scenario": "You need to document a multi-screen expense report process with non-obvious approval routing in the accounting platform. Hybrid, or text alone? What tips the decision?"
  },
  "s1": {
    "on": "This section says some processes are easier shown than written; a short recording plus a text summary combines both, and the text is mandatory.",
    "say": "Show it and write it."
  },
  "s2": {
    "on": "These steps produce it: a short narrated recording, a numbered text summary, both stored together, and one recording per process.",
    "say": "Under five minutes, one process each."
  },
  "s3": {
    "on": "This section warns that a video alone isn't an SOP, asks to update both when things change, keep them easy to access, and use the format only where it helps.",
    "say": "The recording illustrates the SOP."
  }
},
"6::Maintenance, Auditing & Version Control": {
  "p1": {
    "on": "This slide says an SOP is never finished: it has a lifecycle, version control shows which version you're on and what changed, and audits confirm it's actually followed. The steps: schedule a quarterly or biannual review, keep a Revision History Log (date, author, change), update off-cycle when a law changes or an error surfaces, and measure adherence with KPIs.",
    "say": "Every change gets a version number and a log entry.",
    "ask": "How would you know if someone was using an outdated SOP?"
  },
  "p2": {
    "on": "This slide warns against changing an SOP's content without incrementing the version. It says to keep SOPs in one central repository, close the loop on every audit finding by updating the SOP, and give each SOP a specific owner.",
    "say": "An audit finding that never reaches the SOP will happen again.",
    "wrap": "Review on schedule, version every change, audit adherence and assign an owner.",
    "scenario": "An audit finds three team members following three slightly different versions of the same filing SOP, without knowing it. What does that reveal, and what do you change?"
  },
  "s1": {
    "on": "This section says SOPs have a lifecycle, version control shows which copy is current, and audits confirm SOPs are followed.",
    "say": "Versioned and audited."
  },
  "s2": {
    "on": "These steps maintain them: a review cadence, a revision log, off-cycle updates when triggers hit, and adherence KPIs.",
    "say": "Log every change."
  },
  "s3": {
    "on": "This section warns against editing without bumping the version, asks for one central repository, closing the loop after audits, and a named owner.",
    "say": "Change the content, change the version."
  }
},
"6::Change Management for New SOPs": {
  "p1": {
    "on": "This slide says an SOP nobody adopts is the same as no SOP. People resist change most when they don't understand why or weren't involved, and a rollout needs its own plan. The steps: explain the why, introduce significant changes with a walkthrough or training moment, and check afterward that the SOP is actually followed.",
    "say": "Writing the SOP is only half the work.",
    "ask": "Why do people resist a new process?"
  },
  "p2": {
    "on": "This slide warns against updating a widely used SOP by just editing the shared document, since most people won't notice. It says to involve the people who'll use the SOP in shaping it, because adoption is easier when it doesn't feel imposed.",
    "say": "An edit nobody sees isn't a rollout.",
    "wrap": "Explain why, introduce it properly, involve the users and check adoption.",
    "scenario": "You've finalized a revised filing SOP that fixes a real recurring error, but the team has done it the old way for two years. What's your rollout plan beyond sharing the document?"
  },
  "s1": {
    "on": "This section says an SOP nobody adopts is no SOP, resistance comes from not understanding why, and rollout needs its own plan.",
    "say": "Writing it is half the work."
  },
  "s2": {
    "on": "These steps roll it out: explain why, introduce it properly, and check afterward that it's followed.",
    "say": "Explain the why."
  },
  "s3": {
    "on": "This section warns against silent document edits, and suggests involving the people who'll use it.",
    "say": "Involve the users."
  }
}
});
