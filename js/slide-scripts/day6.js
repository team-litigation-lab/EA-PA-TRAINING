/* Day 6 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "6::Choosing a Business Structure": {
  "p1": {
   "why": "The type of business entity someone picks decides how exposed they are personally, how they're taxed and how much paperwork follows.",
   "talk": "You won't be the one choosing the structure; the attorney and accountant will. But you'll gather what they need to choose well. A sole proprietor is simplest but personally liable for everything. An LLC separates the person from the business. A corporation is more formal and suits outside investors. The right one depends on goals, where the business will operate and where it's heading.",
   "walk": [
    "First, ask what the business is trying to achieve: protection from liability, a certain tax treatment, growth.",
    "Next, list every state it will actually operate in, not just where the office is.",
    "Then, compare the options against those goals: liability, tax and ongoing paperwork.",
    "After that, think about the next two years. A structure that fits today might not fit after expansion.",
    "Finally, write down why the choice was made, not just what was chosen."
   ],
   "ask": "Has anyone here set up a business entity? What surprised you?"
  },
  "p2": {
   "why": "The attorney and accountant make the call; your job is to hand them everything they need to make it well.",
   "talk": "Go Deeper compares the common structures in plain terms.",
   "walk": [
    "First, sole proprietorship: easiest to start, but the owner is personally on the hook for every debt and claim.",
    "Next, LLC: keeps personal and business liability apart, with flexible tax treatment. A common choice for small firms.",
    "Finally, corporation: formal, with a board, bylaws and shares. Often chosen when outside investment is coming."
   ],
   "ask": "Elias wants a separate entity for his speaking and consulting work, which may expand to two more states next year. What do you gather before the attorney and accountant recommend a structure?"
  }
 },
 "6::Entity Formation Step-by-Step": {
  "p1": {
   "why": "Forming a company is a sequence, and a skipped step quietly blocks the next one.",
   "talk": "People think forming a business is one filing. It's actually several steps in order: choose the structure, check the name, file with the state, get a tax ID number and write the internal rules. Miss one early, and later something urgent, like opening a bank account, suddenly can't happen.",
   "walk": [
    "First, check the name is available and not confusingly close to another company's.",
    "Next, file the formation documents with the state, and confirm they were approved, not just received.",
    "Then, apply for the federal tax ID, the EIN. The bank needs it before opening an account.",
    "Finally, complete the internal rulebook, the operating agreement or bylaws, even though the state never sees it."
   ],
   "ask": "Why can't you open a business bank account the day the state approves the filing?"
  },
  "p2": {
   "why": "State approval isn't the finish line.",
   "talk": "Three habits on this slide save a lot of trouble later.",
   "walk": [
    "First, don't stop at the state filing. Without the tax ID and internal rules, the company isn't really ready.",
    "Next, keep every formation document in one folder from day one. Banks and lenders ask for them again and again.",
    "Finally, set up the registered agent properly at the start. Without one, filings can be rejected."
   ],
   "ask": "Elias's new consulting company was approved by the state yesterday, and he wants a bank account 'as soon as possible.' The tax ID hasn't been applied for yet. What do you tell him about the order of steps and a realistic timeline?"
  }
 },
 "6::Operating Agreements & Corporate Bylaws Basics": {
  "p1": {
   "why": "Without an internal rulebook, a company falls back on the state's generic rules, which are rarely what the owners wanted.",
   "talk": "An operating agreement for an LLC, or bylaws for a corporation, sets out how decisions get made, what happens when an owner leaves and how disputes are settled. It isn't filed with the state, but it's the first thing a lender, investor or court asks to see.",
   "walk": [
    "First, make sure it covers ownership shares, voting, how big decisions are approved and what happens when an owner leaves.",
    "Next, get it properly signed by every owner, not just drafted.",
    "Finally, keep the signed original safe, with the other formation records."
   ],
   "ask": "What's the first document a lender would ask to see?"
  },
  "p2": {
   "why": "A side email isn't an amendment.",
   "talk": "Two traps on this slide.",
   "walk": [
    "First, a generic template that doesn't match the real ownership creates confusion exactly when it matters most.",
    "Finally, any change to ownership or decision-making needs a formal update to the document itself."
   ],
   "ask": "A lender asks for the operating agreement, and the one on file is three years old and doesn't reflect a partner who left last year. What's the risk, and what do you do before sending anything?"
  }
 },
 "6::Multi-State Registration & Foreign Qualification": {
  "p1": {
   "why": "Hiring just one employee in a new state can mean the company has to register there.",
   "talk": "A company is only automatically allowed to do business in the state where it was formed. Anywhere else, it needs a separate registration called foreign qualification. And 'doing business' isn't just having an office. An employee, a lease or a regular presence can all count. Operating without it can mean the company can't enforce its contracts there.",
   "walk": [
    "First, list every state where the company has employees, property or a regular presence.",
    "Next, file the registration, called a certificate of authority, in each one.",
    "Then, appoint a registered agent in every one of those states.",
    "Finally, track each state's own annual reports and fees from then on."
   ],
   "ask": "What do you think counts as 'doing business' in a state?"
  },
  "p2": {
   "why": "The home-state filing doesn't cover the rest of the country.",
   "talk": "This is one of the most common gaps found in compliance audits.",
   "walk": [
    "First, don't assume one filing covers everywhere.",
    "Finally, keep one tracker with every state, its registered agent and its deadlines."
   ],
   "ask": "The firm just hired a remote employee in a state where it has never operated. What needs to happen before their start date, and who do you involve?"
  }
 },
 "6::Staying in Good Standing": {
  "p1": {
   "why": "Staying in good standing is never finished; it's a set of filings and renewals that come round again and again.",
   "talk": "Good standing means the state considers the company up to date. Lose it, and the company can be blocked from signing contracts, from some bank actions and even from suing in that state. It slips through missed renewals, not dramatic events.",
   "walk": [
    "First, put every filing and renewal date on a recurring calendar.",
    "Next, set reminders well before each deadline, so there's time to fix problems.",
    "Then, if something has lapsed, tell the owner immediately and start fixing it the same day.",
    "After that, check whether the requirements have changed since last time.",
    "Finally, keep a simple status record for each company, so a lapse gets caught in routine review."
   ],
   "ask": "Why is it risky to assume last year's renewal process still applies?"
  },
  "p2": {
   "why": "Losing good standing can cost the company the right to sue in that state.",
   "talk": "Go Deeper explains what good standing actually requires.",
   "walk": [
    "First, annual reports filed on time, with current officers and addresses.",
    "Next, state taxes and fees paid, and a registered agent in every state.",
    "Finally, business licenses and permits renewed before they expire."
   ],
   "ask": "You discover the firm's city business license expired ten days ago. Who do you tell, what do you do today, and what do you change so it can't happen again?"
  }
 },
 "6::Annual Report & Franchise Tax Deadlines Across Jurisdictions": {
  "p1": {
   "why": "Submitted isn't the same as accepted, so confirm every filing went through.",
   "talk": "Every state sets its own deadline for annual reports and franchise taxes. There's no single national date. And missing one can cost good standing in that state. Some states have grace periods; many don't. So treat every deadline as firm.",
   "walk": [
    "First, build one master calendar with every state, its deadline and how to file.",
    "Next, set reminders well ahead, not on the day itself.",
    "Finally, check the filing was accepted, not just sent."
   ],
   "ask": "Why should you treat every state's deadline as firm?"
  },
  "p2": {
   "why": "If a deadline was missed, fix it today, not next week.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, don't rely on one person's memory or calendar for many states' deadlines. Use a shared tracker with an owner.",
    "Finally, if a deadline is missed, act immediately. The company is exposed the whole time it's out of good standing."
   ],
   "ask": "Checking the compliance calendar, you find Delaware's annual report was filed on time, but Texas's deadline passed three weeks ago with no record of filing. What's your first move?"
  }
 },
 "6::Business Licensing & Permits": {
  "p1": {
   "why": "Being properly formed as a company doesn't mean being licensed to operate.",
   "talk": "Formation and licensing are two separate systems. And licenses stack up: federal, state, county and city can each have their own requirement, depending on the business and location. Operating without one can bring fines, closure or even invalid contracts.",
   "walk": [
    "First, find every license and permit this business and location need. A general business license is often only the start.",
    "Next, track each license's renewal on its own schedule.",
    "Finally, make sure personal professional licenses, like a lawyer's bar license, stay current separately."
   ],
   "ask": "How many levels of licensing do you think could apply to one office?"
  },
  "p2": {
   "why": "Licenses renew, so track every one on its own cycle.",
   "talk": "Two habits on this slide.",
   "walk": [
    "First, don't assume a license lasts forever. Many need renewal, continuing education or reports.",
    "Finally, keep copies of every license in the central compliance folder."
   ],
   "ask": "The firm is opening a satellite office in a new city. What licensing and permit questions need answering before it opens, and who do you ask?"
  }
 },
 "6::Registered Agent Responsibilities & Service of Process": {
  "p1": {
   "why": "'We never received it' is not a defense when the company gets sued.",
   "talk": "A registered agent is the official contact who receives legal papers, like lawsuits, for the company. If their details are out of date and a lawsuit goes unanswered, the company can lose by default. Every state where the company is registered needs one.",
   "walk": [
    "First, make sure the agent's address is current and someone is actually watching it.",
    "Next, when legal papers arrive, send them to the right person immediately. They usually come with a deadline.",
    "Finally, update the state promptly whenever the agent changes."
   ],
   "ask": "Who watches the registered agent's inbox at your firm?"
  },
  "p2": {
   "why": "It's not enough to know who receives the notices; you need to know who reads them.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, a registered agent service is useless if nobody internally checks what it forwards.",
    "Finally, keep agent details in the same tracker as the annual deadlines. A lapsed agent can cost good standing too."
   ],
   "ask": "The registered agent service forwards what looks like a newly served lawsuit. What do you do in the next 30 minutes, and who needs to know straight away?"
  }
 },
 "6::Corporate Recordkeeping & Minute Books": {
  "p1": {
   "why": "Write down big company decisions when they happen, not when someone asks for proof.",
   "talk": "A minute book is the company's official history: formation papers, ownership records, meeting minutes and resolutions. Buyers, lenders and courts ask for it. Gaps don't just look messy; in a dispute, they can make it hard to prove a decision was properly approved.",
   "walk": [
    "First, record every major decision, like an ownership change, a big contract or a new officer, in writing.",
    "Next, keep the book up to date as things happen, not rebuilt later.",
    "Finally, store it as carefully as the formation documents."
   ],
   "ask": "What would you count as a major company decision?"
  },
  "p2": {
   "why": "When in doubt, write it down.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, small companies need minute books too. Lenders and buyers ask regardless of size.",
    "Finally, an unnecessary record costs almost nothing; a missing one can cost a lot."
   ],
   "ask": "An investor's checklist asks for two years of board minutes, and the firm has never documented its meetings. How big is the problem, and how do you start fixing it?"
  }
 },
 "6::Leading a Project Under Pressure": {
  "p1": {
   "why": "When a project slips, look for what's broken, not who's to blame.",
   "talk": "Public blame doesn't fix delays; it hides the real problem. Leading a project as an EA means finding the cause, keeping people informed on a schedule and guiding people you don't formally manage.",
   "walk": [
    "First, find the actual cause of the delay before you reassign anything.",
    "Next, give stakeholders regular, scheduled updates, even when there's no good news.",
    "Then, turn the executive's big-picture goal into concrete next steps.",
    "After that, lead people you don't manage through clear asks and reliable follow-through.",
    "Finally, support decisions with short summaries, risks and options with a recommendation."
   ],
   "ask": "When a deadline slips, what's your first instinct?"
  },
  "p2": {
   "why": "You may not make every decision, but you shape it.",
   "talk": "This slide names the leadership skills behind the work.",
   "walk": [
    "First, scheduled updates beat silence.",
    "Next, strategic alignment means turning vision into steps, and influence without authority means leading vendors and teams you don't supervise.",
    "Finally, decision support means summaries, risks and options, so the executive isn't starting from a blank page."
   ],
   "ask": "Let's roleplay it: the client's document production just slipped two days, and three stakeholders are emailing for an update. What do you look for first, and what goes in your update?"
  }
 },
 "6::Seasonal Project Coordination": {
  "p1": {
   "why": "Some big jobs come round every year, so build the playbook once and start earlier each time.",
   "talk": "Year-end billing, trial season, annual renewals and conference season aren't one-off projects; they repeat. So they need a system, not a fresh plan each year. This is a four-step cycle.",
   "walk": [
    "First, recognize the pattern: these tasks come back on a predictable calendar.",
    "Next, write the playbook the first time through: the checklist, timeline and owner for each task.",
    "Then, start before it's urgent. The most common mistake is starting at the same moment every year, even after it ran late last time.",
    "Finally, after each cycle, note what went wrong and update the playbook."
   ],
   "ask": "What predictable crunch do you rebuild from memory every year?"
  },
  "p2": {
   "why": "A job that comes back every year should get easier every year.",
   "talk": "That's the difference between a one-off project, which ends, and a seasonal responsibility, which needs a system.",
   "walk": [
    "First, one-off projects close; seasonal ones return.",
    "Finally, recurring work deserves a reusable system, not a new plan."
   ],
   "ask": "Year-end billing at Thorne & Partners ran late last December because partner approvals were slow. Let's draft the playbook: what starts when, and who owns each part?"
  }
 },
 "6::Project Scope Creep & Change Management": {
  "p1": {
   "why": "Projects rarely blow up in one go; they grow one small, reasonable request at a time.",
   "talk": "That's scope creep. Each addition seems fine alone, but together they cost time and money. A written scope isn't there to refuse everything. It's there so each addition becomes a conscious choice with a visible cost.",
   "walk": [
    "First, write down the original scope clearly enough to compare new requests against it.",
    "Next, when a new request comes in, call it a scope change and say what it costs in time, budget or people.",
    "Finally, log every approved change with what was added and why."
   ],
   "ask": "Why is each small addition dangerous, if each one seems reasonable?"
  },
  "p2": {
   "why": "Quietly absorbing little extras is exactly how projects end up late with nobody sure why.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, don't avoid the awkward conversation by just taking it on.",
    "Finally, it doesn't have to be a fight. 'Here's what this does to the timeline' is enough."
   ],
   "ask": "A stakeholder asks for 'just one more small addition' to a project that's already had three. What do you say, when each one really did seem reasonable?"
  }
 },
 "6::Stakeholder Communication During Project Delays": {
  "p1": {
   "why": "People can handle bad news about a timeline; what they can't handle is being the last to know.",
   "talk": "A delay you announce early is a manageable problem. A delay the stakeholder discovers on their own becomes a trust problem too. The aim isn't to make it sound better than it is; it's to give an honest picture and a real plan.",
   "walk": [
    "First, flag the delay as soon as it's likely, not only when it's certain.",
    "Next, lead with the bottom line: what's late and by how much. Then explain why.",
    "Finally, always include a new timeline or next step."
   ],
   "ask": "Why should you flag a delay before you're certain?"
  },
  "p2": {
   "why": "Silence between updates sounds like more bad news.",
   "talk": "Two habits on this slide.",
   "walk": [
    "First, don't wait until the deadline has passed to say something.",
    "Finally, during a long delay, keep a steady rhythm of updates."
   ],
   "ask": "This morning you learned the project will miss its deadline by two weeks, and the stakeholder has a standing call in an hour. What do you do between now and that call?"
  }
 },
 "6::Frameworks Worth Knowing": {
  "p1": {
   "why": "You don't need a certificate; you just need to know which tool fixes which problem.",
   "talk": "The slide names three well-known frameworks. Lean is about cutting waste and keeping only what adds value. Six Sigma is about reducing errors through measurement. And the project management standard gives big projects a proper structure.",
   "walk": [
    "First, if a process has too many pointless steps, think Lean.",
    "Next, if it keeps producing errors, think Six Sigma.",
    "Then, if you're running a big project end to end, borrow the standard project structure.",
    "After that, match the framework to what's actually broken, rather than using all three.",
    "Finally, treat this as recognizing the tools, not becoming an expert in them."
   ],
   "ask": "Which of your problems is about waste, and which is about errors?"
  },
  "p2": {
   "why": "Waste, errors or structure: match the framework to the problem.",
   "talk": "Go Deeper sums up four frameworks in a line each.",
   "walk": [
    "First, Lean removes waste: extra steps, waiting and rework.",
    "Next, Six Sigma reduces errors using data, through Define, Measure, Analyze, Improve and Control.",
    "Finally, project management structures large projects, and Agile delivers in short cycles and adjusts as it goes."
   ],
   "ask": "Quick sort: a filing process with four unnecessary approval steps, invoices with repeated number errors, and a six-month office move. Which framework fits each?"
  }
 },
 "6::Lean Six Sigma in Practice — A Real Methodology, Not Just a Buzzword": {
  "p1": {
   "why": "Five steps turn 'this keeps going wrong' into a fix that actually sticks.",
   "talk": "The method is called DMAIC, and it's a sequence. The example running through it is invoices going out late every month.",
   "walk": [
    "First, define: name the problem in one sentence and who it affects, like 'invoices go out four to six days late each month.'",
    "Next, measure: get real numbers, not impressions.",
    "Then, analyze: find the real cause. Is it a missing approval, one bottleneck person or a broken handoff?",
    "After that, improve: change the actual process, by removing a step or automating a check.",
    "Finally, control: build something, like a checklist or reminder, so the fix doesn't fade."
   ],
   "ask": "Who has a recurring annoyance we could run through these five steps right now?"
  },
  "p2": {
   "why": "Lean cuts what doesn't matter; Six Sigma fixes what's actually broken.",
   "talk": "Put together, that's Lean Six Sigma: remove the waste, then rigorously fix the errors that remain.",
   "walk": [
    "First, Lean is about waste and value.",
    "Finally, Six Sigma is about errors and measurement, and together they cover both."
   ],
   "ask": "Thirty seconds: someone name a recurring problem from your work, and as a group we'll call out what each of the five steps would look like."
  }
 },
 "6::DMAIC — Three Worked EA Examples": {
  "p1": {
   "why": "When a process keeps failing, fix the process, not the reminder.",
   "talk": "Take a contract that sits for three days because one partner has to sign it and they're often out. Reminding them harder doesn't fix it. Building a backup signer into the process does. That's the thinking behind these examples.",
   "walk": [
    "First, for a waiting problem, add a backup approver to the process itself.",
    "Next, for a searching problem, like a document spread across four folders, agree one filing place for good.",
    "Then, run a small DMAIC on a real frustration: define, measure for a couple of weeks, find the cause, change that step and check it holds.",
    "After that, for a form that keeps coming back incomplete, find the one confusing field instead of rewriting everything.",
    "Finally, once the fix works, make it the new standard, so nobody slips back."
   ],
   "ask": "What's a waiting problem in your own work?"
  },
  "p2": {
   "why": "Measure first, find the real cause, then make the fix the new normal.",
   "talk": "This slide gives three worked examples.",
   "walk": [
    "First, searching waste: an NDA spread across four folders is fixed by one agreed filing place.",
    "Next, expense approvals: track turnaround for two weeks, find the step where they stall, add an automatic reminder and review monthly.",
    "Finally, intake forms: 30 percent come back incomplete, one field is confusing, so reword just that field and make the new form standard."
   ],
   "ask": "Let's walk the intake-form example step by step, then apply the same steps to a process from your own work."
  }
 },
 "6::Lean's 8 Wastes & Kaizen": {
  "p1": {
   "why": "Once you learn to spot waste, you start seeing it everywhere, and small fixes add up.",
   "talk": "Lean names eight kinds of waste, remembered as DOWNTIME: defects, overproduction, waiting, unused talent, transport, inventory, motion and extra processing. You don't need the acronym. What matters is the instinct to say 'this step is pointless' when you see it.",
   "walk": [
    "First, build the habit of noticing wasted steps.",
    "Next, watch especially for waiting, like approvals stuck in an inbox, and extra processing, like typing the same data into three systems.",
    "Then, practice Kaizen: fix small annoyances as soon as you notice them.",
    "After that, don't skip the control step, or the old problem creeps back.",
    "Finally, treat this as a way of thinking, not a qualification."
   ],
   "ask": "Which of the eight wastes do you see most at work?"
  },
  "p2": {
   "why": "In most offices, the biggest wastes are waiting and doing the same work twice.",
   "talk": "Three points on this slide.",
   "walk": [
    "First, most admin waste is waiting and extra processing.",
    "Next, Kaizen means small, continuous improvements, closer to how EAs really improve their work than any big project.",
    "Finally, you don't need a Six Sigma belt. You need a repeatable way to fix things, and the discipline to make fixes stick."
   ],
   "ask": "You type every new client's details into the CRM, the billing system and a spreadsheet. Which waste is that, and what's the smallest fix you could make this week?"
  }
 },
 "6::Root Cause Analysis Basics": {
  "p1": {
   "why": "Keep asking why until the answer is something you can actually fix.",
   "talk": "Root cause analysis means not stopping at the first, obvious explanation. The simplest version is the five whys: keep asking why until the answer stops being a symptom and becomes a cause. Fix a symptom, and the problem just comes back in a new form.",
   "walk": [
    "First, state the problem precisely and factually.",
    "Next, ask why, then ask why again about that answer, and keep going.",
    "Finally, check: if we'd fixed this cause earlier, would the problem have been prevented? If not, keep digging."
   ],
   "ask": "Why isn't 'someone forgot' a root cause?"
  },
  "p2": {
   "why": "'Human error' is where the analysis starts, not where it ends.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, human error usually points to something missing: a process, clear ownership or training.",
    "Finally, do the analysis while the details are fresh, not weeks later."
   ],
   "ask": "A filing deadline was missed last week, and the first explanation is 'the person responsible forgot.' Let's use the five whys out loud to get to something we can fix."
  }
 },
 "6::Operational Optimization": {
  "p1": {
   "why": "Automate the task, give it an owner, then standardize it, in that order.",
   "talk": "The order matters. If you write up a process before automating it, you'll just have to rewrite it. And if nobody owns it after automation, it quietly becomes nobody's job.",
   "walk": [
    "First, find a repetitive task you still do fully by hand.",
    "Next, automate it before anything else.",
    "Then, decide who owns it from now on.",
    "After that, write it up as the standard, once the automation and owner are settled.",
    "Finally, track just a few real measures on a regular schedule."
   ],
   "ask": "What's one task you still do completely by hand?"
  },
  "p2": {
   "why": "A measurement with no owner is just a number on a page.",
   "talk": "Go Deeper explains how to choose measures that matter.",
   "walk": [
    "First, pick measures tied to results, like calendar accuracy, response time, on-time filings and invoice turnaround.",
    "Next, keep it to four or five, each with a target and an owner.",
    "Finally, review them regularly and act on trends, not single bad days."
   ],
   "ask": "Every Monday you build a matter status report by hand from five spreadsheets. Apply automate, own and standardize, and name the one measure you'd track."
  }
 },
 "6::The KPI Dashboard Template": {
  "p1": {
   "why": "A good dashboard tracks a handful of numbers, each with a clear target.",
   "talk": "The slide suggests four areas: executive productivity, client service, operations and legal compliance. The magic isn't in the dashboard; it's in reviewing it and acting on what it shows.",
   "walk": [
    "First, track a few real measures across the four areas, not a long list nobody reads.",
    "Next, give each one a specific target, like calendar accuracy of at least 98 percent.",
    "Then, review the dashboard on a fixed schedule.",
    "After that, treat procedures as living documents that get reviewed and updated.",
    "Finally, when a measure keeps missing its target, update the procedure behind it."
   ],
   "ask": "Which measure do you think is hardest to hit consistently?"
  },
  "p2": {
   "why": "A number that keeps missing its target usually means the procedure needs fixing, not the people.",
   "talk": "Go Deeper gives example targets for each area, and the slide shows the full life cycle of a procedure.",
   "walk": [
    "First, executive productivity: calendar accuracy of at least 98 percent, and a briefing by 8 AM daily.",
    "Next, client service: replies within four business hours and no missed follow-ups.",
    "Finally, operations: invoices out within three days of month-end, and procedures reviewed at least every six months."
   ],
   "ask": "Your dashboard shows client response time averaging seven hours against a four-hour target, for three months running. What does that tell you, and which procedure do you review first?"
  }
 },
 "6::SOP Architecture & Trigger Mapping": {
  "p1": {
   "why": "A procedure nobody knows when to use won't get used.",
   "talk": "A standard operating procedure, or SOP, is a step-by-step guide that makes a task consistent, safer and faster. But its value comes from being followed. Good SOPs share the same parts: a title and ID, a purpose, a scope, definitions, the steps, who does what, linked forms, risk notes and a revision history. And crucially, a trigger: the exact event that tells someone to use it.",
   "walk": [
    "First, identify the task that needs standardizing, and write down why.",
    "Next, define the scope: which people, departments and task types it covers.",
    "Then, write the steps as a numbered list, a flowchart or a checklist, never as a paragraph.",
    "Finally, name the trigger event, like 'whenever a new filing deadline arrives.'"
   ],
   "ask": "What event should make someone reach for a procedure?"
  },
  "p2": {
   "why": "Every procedure needs an owner, an ID, a version number and a trigger.",
   "talk": "Four points on this slide.",
   "walk": [
    "First, without a clear trigger, the procedure won't be used consistently.",
    "Next, without an owner, updates slip and it goes stale.",
    "Then, give it an ID and version number from the start.",
    "Finally, keep it short enough to follow in the moment. A checklist beats a manual nobody opens."
   ],
   "ask": "You're writing a procedure for last-minute court filing deadlines. What's the trigger, and what must the first three steps cover to be useful in the moment?"
  }
 },
 "6::Hybrid Screen-Recording Workflow (Loom + Text)": {
  "p1": {
   "why": "A short video shows the task; a written summary makes it searchable.",
   "talk": "Some processes are much easier to show than describe, especially clicking through software. A short screen recording captures exactly what to do. But on its own, a video is hard to search, skim or update. Pairing it with a short written version gives you the best of both.",
   "walk": [
    "First, record a short screen video, ideally under five minutes, and talk through what you're doing and why.",
    "Next, straight afterwards, write the steps as a numbered list.",
    "Then, store both together, with the video link at the top and the steps below.",
    "Finally, keep each recording to one process, not several."
   ],
   "ask": "Which of your processes would be easier to show than to write down?"
  },
  "p2": {
   "why": "An outdated recording is worse than no recording, because it teaches the wrong thing.",
   "talk": "Four points on this slide.",
   "walk": [
    "First, a video without the written summary isn't a complete procedure.",
    "Next, when the software changes, update both.",
    "Then, make recordings easy to open, without special logins.",
    "Finally, use this format only where it helps. Simple procedures are clearer as text."
   ],
   "ask": "You need to document a multi-screen expense process with confusing approval routing. Video plus text, or text alone? What decides it?"
  }
 },
 "6::Maintenance, Auditing & Version Control": {
  "p1": {
   "why": "Every time a procedure changes, it gets a new version number and a note of what changed.",
   "talk": "A procedure is never really finished. It gets written, reviewed, approved, monitored and revised. Version control means everyone can tell which version they have and what changed. Without it, an old copy can keep circulating and nobody notices.",
   "walk": [
    "First, schedule regular reviews, quarterly or twice a year.",
    "Next, log every revision: the date, who changed it and what changed.",
    "Then, update it outside the schedule when something triggers it: a new law, a better method, an error, new software or confused staff.",
    "Finally, measure whether it's followed, with real numbers like error rates."
   ],
   "ask": "How would you know if someone was working from an out-of-date procedure?"
  },
  "p2": {
   "why": "An audit finding that never makes it back into the procedure will happen again.",
   "talk": "Four points on this slide.",
   "walk": [
    "First, changing the content without changing the version number is how old copies survive.",
    "Next, keep all procedures in one central place.",
    "Then, after an audit finds a gap, actually update the procedure.",
    "Finally, give each procedure an owner."
   ],
   "ask": "An audit finds three people following three slightly different versions of the same filing procedure without realizing it. What does that tell you, and what do you change?"
  }
 },
 "6::Change Management for New SOPs": {
  "p1": {
   "why": "Writing a new procedure is only half the job; the other half is getting people to use it.",
   "talk": "A brilliant procedure nobody adopts is the same as no procedure. People resist change most when they don't understand why it's happening, or weren't asked. So a rollout needs its own plan.",
   "walk": [
    "First, explain why the change is happening: what problem it solves.",
    "Next, introduce it properly, with a walkthrough or a short training moment.",
    "Finally, check afterwards that it's actually being followed."
   ],
   "ask": "Why do you think people resist a new process?"
  },
  "p2": {
   "why": "Quietly editing the shared document isn't a rollout.",
   "talk": "Two points on this slide.",
   "walk": [
    "First, most people won't notice a silent edit until they've already done it the old way.",
    "Finally, involve the people who'll use it, so it doesn't feel imposed."
   ],
   "ask": "You've finished a revised filing procedure that fixes a real, recurring error, but the team has done it the old way for two years. What's your rollout plan beyond sharing the document?"
  }
 }
});
