/* ============================================================
   DAY 1 — The Legal EA/PA Role, Communication & Managing Up
   Everything a trainee reads on this day:
   - DAY1: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY1_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "1::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY1 = {
  "id": 1,
  "title": "The Legal EA/PA Role, Communication & Managing Up",
  "theme": "EA vs. PA Roles · Legal Basics · Communication & Gatekeeping · Confidentiality & Boundaries · Command Hierarchy & Liaison · Managing Up Basics (Bulletproof Basics, the Three C's, Credibility) · Client Profiling & the Dossier · Written Communication (ACT, BLUF)",
  "objective": "Get a clear picture of what a Legal Executive Assistant actually does day to day, learn the legal basics every assistant needs, build the communication habits the role runs on, know when to escalate rather than act alone, and manage up with the Three C's.",
  "taskOverview": [
    {
      "label": "Calendar & Scheduling",
      "tasks": [
        "Manage Elias's calendar across every active matter, keeping court dates, deadlines, and internal work protected.",
        "Coordinate depositions, hearings, and client meetings across time zones — his firm spans New York, D.C., London, and Singapore.",
        "Block the mandatory 15-minute debrief buffer after every key session, and never schedule back-to-back depositions or court hearings."
      ],
      "sample": "Sample task: block 2 hours before every deposition for prep, and auto-flag any new meeting request that would overlap a confirmed court date or the post-session debrief buffer."
    },
    {
      "label": "Correspondence & Email",
      "tasks": [
        "Triage Elias's inbox daily by matter and urgency — court deadlines and opposing counsel first.",
        "Draft client and court correspondence for his review before anything goes out, always BLUF-style with detailed briefs attached separately.",
        "Turn his rapid, cryptic 5:30 AM voice notes into a structured, prioritized agenda by 8:00 AM."
      ],
      "sample": "Sample task: draft a case-status update to a client after a hearing, referencing what happened, what's next, and the next filing deadline — BLUF at the top, ready for Elias to review and send."
    },
    {
      "label": "Document & Case Support",
      "tasks": [
        "Format, proofread, and cite-check pleadings, contracts, and correspondence before filing or sending.",
        "Organize and maintain case files with clear version control so nothing gets overwritten or lost — especially on active matters like the Meridian Dynamics arbitration.",
        "Prepare exhibit binders and meeting materials ahead of hearings and client meetings."
      ],
      "sample": "Sample task: redline a contract draft against the client's requested changes and flag any inconsistent clauses before it goes to Elias."
    },
    {
      "label": "Court & Filing Coordination",
      "tasks": [
        "Track every filing deadline on a shared calendar with reminders well ahead of the due date.",
        "E-file documents through the court's system and confirm the filing was accepted.",
        "Confirm hearing logistics — room, dial-in, required documents — the day before."
      ],
      "sample": "Sample task: after e-filing a motion, confirm the court's system shows it as accepted, save the confirmation receipt, and note the docket entry in the case file."
    },
    {
      "label": "Billing & Client Support",
      "tasks": [
        "Track billable hours and prepare invoices with clear, defensible detail.",
        "Monitor client retainer and trust balances so no matter runs dry unnoticed.",
        "Handle routine client questions about billing and status without waiting on Elias."
      ],
      "sample": "Sample task: flag a client's retainer balance once it drops below 25%, with enough lead time to request replenishment before the matter is affected."
    },
    {
      "label": "Confidentiality & Compliance",
      "tasks": [
        "Handle privileged and confidential documents with strict access control — the firm's culture is built on 'uncompromising excellence' and zero tolerance for leaks.",
        "Run basic conflict-of-interest checks before a new matter or contact is added to a case.",
        "Verify identity and authorization before releasing any case information over phone or email, and aggressively filter media inquiries and cold client calls."
      ],
      "sample": "Sample task: before sharing case details with someone claiming to represent the client, verify they're actually authorized on the matter — then document that you checked."
    }
  ],
  "lessons": [
    {
      "h": "EA vs. PA: Two Mindsets",
      "section": "EA vs. PA Roles",
      "svgDiagram": "<svg viewBox=\"0 0 560 220\" xmlns=\"http://www.w3.org/2000/svg\"><style>.mh{font:800 16px Arial,sans-serif;fill:#fff;}.ms{font:400 11px Arial,sans-serif;fill:rgba(255,255,255,.85);}</style><rect x=\"20\" y=\"20\" width=\"250\" height=\"180\" rx=\"12\" fill=\"#262B45\"/><rect x=\"290\" y=\"20\" width=\"250\" height=\"180\" rx=\"12\" fill=\"#DB8437\"/><text x=\"145\" y=\"55\" text-anchor=\"middle\" class=\"mh\">EA</text><text x=\"145\" y=\"78\" text-anchor=\"middle\" class=\"ms\">Protects business performance</text><circle cx=\"145\" cy=\"110\" r=\"9\" fill=\"#fff\" class=\"svg-pulse-dot\"/><text x=\"145\" y=\"140\" text-anchor=\"middle\" class=\"ms\">Executive proxy</text><text x=\"145\" y=\"158\" text-anchor=\"middle\" class=\"ms\">Filters info &amp; priorities</text><text x=\"415\" y=\"55\" text-anchor=\"middle\" class=\"mh\">PA</text><text x=\"415\" y=\"78\" text-anchor=\"middle\" class=\"ms\">Protects personal life logistics</text><circle cx=\"415\" cy=\"110\" r=\"9\" fill=\"#fff\" class=\"svg-pulse-dot\"/><text x=\"415\" y=\"140\" text-anchor=\"middle\" class=\"ms\">Personal representative</text><text x=\"415\" y=\"158\" text-anchor=\"middle\" class=\"ms\">Day-to-day decisions</text><g transform=\"translate(200,90)\"><rect width=\"160\" height=\"26\" rx=\"13\" fill=\"#B5651F\" stroke=\"#F0C08A\" stroke-width=\"2\" class=\"svg-callout-badge\"/><text x=\"80\" y=\"17\" text-anchor=\"middle\" style=\"font:800 9px Arial,sans-serif;fill:#fff;\">&#9888; NEVER CONFLATE</text></g></svg>",
      "b": [
        "A VEA is a strategic partner: every action is measured by whether it increases the executive's efficiency and the business's performance.",
        "A VPA is a personal support specialist: success means the individual's life and logistics run smoothly.",
        "VEA work spans calendar optimization, email triage, board materials, and legal/finance/HR support. VPA work covers personal calendars, travel, household management, and events.",
        "The two mindsets aren't ranked — conflating them is the most common onboarding mistake.",
        "Objective of this session: understand where EA and PA roles overlap, identify the skills top-notch assistants share, and navigate typical environments while maintaining standards.",
        "An EA manages a person's capacity — the finite hours, attention, and judgment available in a day — not just their life logistics.",
        "Discussion prompt: name three tasks in Elias's world that look like PA work on the surface but are actually EA work once you weigh the stakes — his calendar, his reputation, his legal exposure."
      ],
      "callout": {
        "type": "tip",
        "label": "Mindset check",
        "text": "When a request lands, ask: is this protecting business performance (EA) or personal life logistics (PA)? That single question resolves most role-scope questions."
      },
      "howTo": [
        "When a new request lands, ask first: does this protect business performance (EA) or personal life logistics (PA)? That single question routes everything else.",
        "Check it against the dossier or standing instructions for this person — don't guess at which mindset applies when it's already been documented.",
        "If it's genuinely ambiguous, default to the higher-stakes read (EA mindset) until you can confirm — treating a business-critical item as a personal errand is the costlier mistake of the two.",
        "Execute in the mindset you've chosen — an EA response is procedural and protects the business first; a PA response is accommodating and protects the person first. Don't blend the two.",
        "If you get it wrong, correct it explicitly and note the miss — this is exactly the kind of judgment call that gets sharper with a specific, remembered example."
      ],
      "trainerCue": "Ask the room: 'Who here has done BOTH EA and PA work?' Have them name one moment where they caught themselves using the wrong mindset for the situation."
    },
    {
      "h": "EA vs. PA: Side-by-Side Work Context",
      "section": "EA vs. PA Roles",
      "b": [
        "Both roles are trusted extensions of the people they support — the difference is the environment, and the consequences of getting it wrong.",
        "An EA who treats a board deck like a household errand list, or a PA who treats a family trip like a litigation deadline, has misread the room."
      ],
      "table": {
        "headers": [
          "Category",
          "Executive Assistant (EA)",
          "Personal Assistant (PA)"
        ],
        "rows": [
          [
            "Primary setting",
            "Corporate / organizational",
            "Private / personal or blended"
          ],
          [
            "Who they support",
            "C-suite, partners, senior leadership",
            "Individuals, entrepreneurs, HNW clients"
          ],
          [
            "Formality level",
            "High — structured, policy-driven",
            "Moderate — varies by client lifestyle"
          ],
          [
            "Confidentiality scope",
            "Corporate, legal, financial, HR, strategic",
            "Personal, family, financial, health, lifestyle"
          ],
          [
            "Decision-making role",
            "Executive proxy — filters info & priorities",
            "Personal representative — day-to-day decisions"
          ],
          [
            "Schedule predictability",
            "Structured business hours, occasional overtime",
            "Variable, on-call more common"
          ]
        ]
      },
      "howTo": [
        "Before responding to any request, identify which environment you're actually operating in — corporate/organizational or private/personal — since the table above shows how much that alone changes what's expected.",
        "Match your formality level to that environment: structured and policy-driven for EA contexts, more flexible and client-led for PA contexts.",
        "Apply the right confidentiality scope — corporate/legal/financial/HR for EA work, personal/family/health/lifestyle for PA work — and don't assume one scope covers both.",
        "Decide within your actual decision-making role: an EA filters information and priorities as an executive proxy; a PA handles day-to-day matters directly as a personal representative.",
        "When the two contexts blend (a personal matter with real business risk, or vice versa), name that explicitly rather than defaulting to whichever mode feels more familiar."
      ],
      "trainerCue": "Put the table on screen and ask trainees to guess which row trips people up most in practice — usually 'Decision-making role,' since it's the least visible from the outside."
    },
    {
      "h": "EA vs. PA Decision Principles",
      "section": "EA vs. PA Roles",
      "b": [
        "EA decision principles: prioritize business-critical matters, filter incoming requests before escalating, know when to negotiate or delegate.",
        "PA decision principles: honor personal preferences first, offer alternatives instead of outright denials, keep sensitive personal matters private."
      ],
      "howTo": [
        "Identify which track applies before deciding anything — EA principles and PA principles lead to genuinely different calls on the same kind of request.",
        "In EA mode, prioritize business-critical matters first, filter incoming requests before escalating anything, and know when a decision is yours to make versus one that needs delegation or negotiation.",
        "In PA mode, honor personal preferences as the default, offer alternatives rather than outright denials, and keep sensitive personal matters strictly private.",
        "When a decision doesn't clearly fit either set of principles, escalate rather than guessing — this is exactly the kind of ambiguous case that shouldn't be resolved on instinct alone.",
        "Review your own past decisions periodically against these principles — it's the fastest way to notice if you're defaulting to one mindset out of habit rather than picking the right one deliberately."
      ],
      "trainerCue": "Ask the room which set of principles feels more natural to them personally — it's a good gauge of which track (EA or PA) matches their own instincts."
    },
    {
      "h": "Typical Work Environment",
      "section": "EA vs. PA Roles",
      "b": [
        "Common settings: corporate offices, law/professional-services firms, remote/hybrid teams, startups, and private households.",
        "Standard tech stack: Outlook/Google Workspace, Slack/Teams/Zoom, SharePoint/Clio/iManage, Asana/Trello/ClickUp.",
        "Standing expectations: executive presence, proactive anticipation, and independent judgment under pressure — irregular hours are the norm.",
        "Vendor issue: an EA negotiates or escalates professionally; a PA coordinates service resolution directly.",
        "Conflicting meetings: an EA reschedules based on business priority; a PA confirms personal preference.",
        "Scope creep: an EA flags contract boundaries; a PA seeks approval before acting."
      ],
      "howTo": [
        "Identify the actual setting you're operating in (corporate office, professional-services firm, remote/hybrid, startup, or private household) — the standing expectations differ meaningfully by setting.",
        "Confirm which tools this specific environment actually runs on (Outlook vs. Google Workspace, Slack vs. Teams, Clio vs. iManage) before assuming a standard stack — get this wrong and early tasks take twice as long.",
        "Calibrate your response style to the setting: an EA negotiates or escalates a vendor issue professionally; a PA coordinates the resolution directly.",
        "Apply the same calibration to conflicts — an EA reschedules based on business priority, a PA confirms personal preference before acting.",
        "Watch for scope creep specifically: an EA flags when a request crosses a contract boundary; a PA seeks approval before acting outside what's already authorized."
      ],
      "trainerCue": "Ask for a show of hands: who has worked in a job with NO formal tech stack at all? Discuss how that changes what 'typical work environment' means in practice."
    },
    {
      "h": "Who's Who in a Law Firm",
      "section": "Legal Basics",
      "fourPart": {
        "corePrinciples": [
          "A law firm runs on a clear ladder. Partners own the firm and the client relationships. Associates are lawyers who do much of the day-to-day legal work. Of counsel are experienced lawyers with a looser, often part-time tie to the firm.",
          "Paralegals do substantive legal work under a lawyer's supervision, like drafting documents, organizing discovery and preparing exhibits. Legal assistants and EAs keep the lawyers' time, communication and logistics running.",
          "Outside the firm you'll deal with clients, opposing counsel (the lawyers on the other side), court clerks, judges' chambers, court reporters, process servers and expert witnesses. Each gets a different tone and different limits."
        ],
        "howTo": [
          "In your first week, get the firm's org chart: the partners, which associates and paralegals work on which matters, and who runs billing, IT and the office.",
          "For each of Elias's matters, write down the team: responsible partner, associate, paralegal and the client contact. Keep it in the matter notes or the client tracker.",
          "Learn the outside names too: opposing counsel, the court and judge, and the court reporter and expert firms you book.",
          "Before you pass on a request, ask who owns that decision. Legal judgment goes to a lawyer, logistics usually stay with you and billing questions go to billing.",
          "Address people correctly: a judge is 'Judge [Name]' in writing and 'Your Honor' in court. Keep contact with opposing counsel polite, in writing and copied to your attorney."
        ],
        "bestPractices": [
          "Treat court clerks and judges' staff with real courtesy. They manage the calendar and can make a filing day easy or hard.",
          "Never contact the other side's client directly. A represented party is reached only through their lawyer, and only when your attorney says so.",
          "Pitfall: assuming the most senior person on an email decides everything. A partner may set strategy while an associate owns the filing deadline.",
          "Pitfall: treating paralegals as people to hand errands to. They're specialists, and you'll work side by side on every matter."
        ],
        "discussionCase": "A voicemail says, 'This is Mark from Harlow's side, about the deposition.' Before you call back, what do you need to know about who Mark is, and who at the firm should handle it?"
      },
      "trainerCue": "Draw the firm's ladder on the board with the room, then add the outside people around it. Ask who each person would call first when a filing deadline changes."
    },
    {
      "h": "The Life of a Legal Matter",
      "section": "Legal Basics",
      "fourPart": {
        "corePrinciples": [
          "Every piece of work at a law firm is a 'matter', and most follow the same life cycle. Knowing the stage tells you what's coming next and what can go wrong.",
          "A lawsuit usually runs: intake and conflict check → engagement letter and retainer → investigation → pleadings (the complaint and the answer) → discovery (exchanging documents and taking depositions) → motions → settlement or trial → judgment and any appeal → closing the file.",
          "Transactional work, like a contract or a company sale, runs: intake → engagement → drafting and negotiation → signing (the 'closing') → post-closing tasks.",
          "Each stage has its own deadlines, documents and people, so the assistant's job changes as the matter moves."
        ],
        "howTo": [
          "When a matter opens, note its type (litigation or transactional) and its current stage in the tracker.",
          "At intake, collect the names of every party and the key dates, so the conflict check and the deadline calendar can start right away.",
          "In pleadings and discovery, calendar every response deadline the moment it's triggered, and keep a clean index of what's been served and received.",
          "Before a trial, hearing or closing, build the checklist early: documents, exhibits, signatures, rooms, travel and people.",
          "At closing, make sure the final bill goes out, any money left in trust is returned, a closing letter is sent and the file is archived under the retention rules."
        ],
        "bestPractices": [
          "Update the matter's stage in the tracker whenever it changes, so anyone covering for you knows where things stand.",
          "Most cases settle before trial, but prepare as if every one will go to trial. Deadlines don't pause for settlement talks unless the court says so.",
          "Pitfall: treating 'closed' as 'done'. Unreturned trust money and unarchived files are real problems months later.",
          "Pitfall: using the words loosely. 'Filed', 'served' and 'sent' mean different things, and a lawyer will hear the difference."
        ],
        "discussionCase": "Harlow Industries has just been sued. Walk the matter through each stage: what's the first thing you do, what do you calendar next and what does closing the file involve?"
      },
      "trainerCue": "Put the stages on sticky notes and have the room order them, then place three real tasks (booking a court reporter, sending an engagement letter, returning trust money) on the right stage."
    },
    {
      "h": "Legal Terms You'll Hear Every Day",
      "section": "Legal Basics",
      "fourPart": {
        "corePrinciples": [
          "You don't need a law degree, but you do need the vocabulary. Misunderstanding one word can send the wrong document to the wrong place.",
          "The parties: the plaintiff (or petitioner) brings the case; the defendant (or respondent) answers it. A person with no lawyer is 'pro se'.",
          "The documents: a complaint starts a lawsuit, an answer responds to it, a motion asks the court to do something, and a brief argues why. An affidavit is a sworn written statement signed before a notary; a declaration is similar but signed under penalty of perjury without a notary.",
          "The process: discovery is the exchange of information; interrogatories are written questions; a deposition is sworn testimony taken outside court; a subpoena orders someone to appear or hand over documents; a stipulation is an agreement between the parties."
        ],
        "howTo": [
          "Keep a one-page glossary of the 30 terms you hear most, in your own words, and add to it every week.",
          "When a lawyer uses a term you don't know, write it down and look it up afterwards, or ask at a good moment. Guessing is the risky option.",
          "Use each document's exact name when you file, save or email it: 'Defendant's Motion to Compel', not 'the motion thing'.",
          "Learn the matter-level words too: a matter number identifies each case in the firm's systems, and a retainer is money paid up front and held in trust.",
          "Notice which side the firm is on. For Harlow the firm might be the defendant; for Meridian the plaintiff. It changes how documents are named and numbered."
        ],
        "bestPractices": [
          "Match the lawyer's precision. 'Deposition' and 'hearing' aren't interchangeable, and neither are 'subpoena' and 'summons'.",
          "Explain terms to clients only as your attorney has explained them. Defining a word is fine; saying what it means for their case is legal advice.",
          "Pitfall: nodding along. A misunderstood instruction costs far more than a quick question.",
          "Pitfall: using Latin or jargon with clients to sound expert. Plain language is more professional, not less."
        ],
        "discussionCase": "Elias leaves a voice note: 'Opposing counsel served interrogatories and noticed Harlow's CFO for deposition; calendar the responses and get a court reporter.' Translate it into a task list in plain English."
      },
      "trainerCue": "Run a fast quiz: read ten terms aloud and have the room shout plaintiff-side or process or document. Then have pairs define 'deposition' and 'subpoena' in one plain sentence each."
    },
    {
      "h": "Client Intake & Conflict Checks",
      "section": "Legal Basics",
      "fourPart": {
        "corePrinciples": [
          "Before a firm takes a new matter, it must check that representing this client won't conflict with a current or former client. This is an ethics rule, not a formality.",
          "A conflict check searches the firm's records for everyone involved: the client, the other side, related companies, key individuals and opposing counsel.",
          "Until the check clears and an engagement letter is signed, the person is a prospective client. Take only the information needed for the check, and don't give legal advice.",
          "Intake is also where deadlines are first spotted. A statute-of-limitations date mentioned in passing on the first call can be the most important fact in the file."
        ],
        "howTo": [
          "Use the firm's intake form on every new inquiry: names of all parties and related businesses, opposing counsel, a short description, how they found the firm and any dates they mention.",
          "Run the conflict search on every name, including former names, parent companies and subsidiaries, in the firm's conflict database.",
          "Send any 'hit' (a match) to the responsible attorney without deciding for yourself whether it's a real conflict.",
          "Flag any deadline mentioned at intake to the attorney the same day, even before the matter is accepted.",
          "Once cleared, prepare the engagement letter for the attorney, open the matter number and set up the file only after the letter is signed."
        ],
        "bestPractices": [
          "Run the check before a long intake call, where you can. The less confidential detail the firm hears before clearing conflicts, the better.",
          "Record the check itself: what was searched, when, the result and who cleared it.",
          "Pitfall: searching only the client's name. The conflict usually hides in the other party or a related company.",
          "Pitfall: telling a caller 'we can definitely help' before the check clears. Only the attorney accepts a matter."
        ],
        "discussionCase": "A caller wants the firm to sue 'Northgate Logistics' over a warehouse contract and mentions the contract ended 'almost six years ago.' What do you search, what do you flag and what do you not say?"
      },
      "trainerCue": "Give pairs a mock inquiry with four names in it (client, opponent, parent company, opposing counsel) and ask them to list every search they'd run before anyone at the firm hears more."
    },
    {
      "h": "Basic Communication Principles for Legal EAs",
      "section": "Communication & Gatekeeping",
      "b": [
        "Clarity & precision — legal correspondence has no room for vague language.",
        "Read the audience — the same update gets reframed for an attorney (brief), a client (plain language), and the court (formal).",
        "Confidentiality applies to how you talk about a matter, not just to documents — that includes hallway conversations.",
        "Worked example: the same case update becomes three different messages depending on who's receiving it.",
        "Key phrases an EA uses: 'The executive's schedule is fully committed — I'll follow up on your request,' and 'I've escalated this for decision and will advise accordingly.'",
        "Key phrases a PA uses: 'They're unavailable at the moment — can I relay your message or schedule a better time?'"
      ],
      "example": {
        "label": "Same update, three audiences",
        "lines": [
          "To the attorney: \"Filed the extension motion at 2 PM; court confirmation attached. No action needed from you.\"",
          "To the client: \"We've requested additional time to prepare your case properly. We'll keep you posted on next steps.\"",
          "To the court clerk: \"Please confirm receipt of the enclosed Motion for Extension of Time, filed on behalf of the Defendant.\""
        ]
      },
      "howTo": [
        "Before writing anything, identify who the actual audience is — the attorney, the client, or the court — since each expects a different register, not just different wording.",
        "Draft for clarity and precision first: strip any language that could be read two ways, since legal correspondence has no room for ambiguity.",
        "Adjust register to the audience: brief and technical for the attorney, plain language and reassuring for the client, formal and procedural for the court.",
        "Check the message never discusses the matter outside its proper channel — that includes casual hallway conversation, not just documents.",
        "Use the standard phrases for your role when declining or deferring: an EA cites the executive's commitment and offers to follow up; a PA offers to relay the message or reschedule."
      ],
      "trainerCue": "Read the three-message worked example out loud in three different tones (clipped, plain, formal) so the room actually HEARS the register shift, not just reads it."
    },
    {
      "h": "Gatekeeping Is Not 'No'",
      "section": "Communication & Gatekeeping",
      "svgDiagram": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\"><style>.gt{font:700 13px Arial,sans-serif;fill:#fff;}.gs{font:400 10.5px Arial,sans-serif;fill:rgba(255,255,255,.85);}</style><rect x=\"20\" y=\"30\" width=\"220\" height=\"110\" rx=\"10\" fill=\"#B54A3F\"/><text x=\"130\" y=\"70\" text-anchor=\"middle\" style=\"font:800 26px Arial,sans-serif;fill:#fff;\">&#10005;</text><text x=\"130\" y=\"100\" text-anchor=\"middle\" class=\"gt\">Flat \"No\"</text><text x=\"130\" y=\"120\" text-anchor=\"middle\" class=\"gs\">Closes the door</text><path d=\"M250 85 L310 85\" stroke=\"#DB8437\" stroke-width=\"4\" class=\"svg-flow-arrow\" marker-end=\"url(#ahg)\"/><rect x=\"320\" y=\"30\" width=\"220\" height=\"110\" rx=\"10\" fill=\"#3F7D58\"/><text x=\"430\" y=\"68\" text-anchor=\"middle\" style=\"font:800 24px Arial,sans-serif;fill:#fff;\">&#10003;</text><circle cx=\"430\" cy=\"55\" r=\"8\" fill=\"none\" class=\"svg-pulse-dot\"/><text x=\"430\" y=\"100\" text-anchor=\"middle\" class=\"gt\">\"Not now, here's...\"</text><text x=\"430\" y=\"120\" text-anchor=\"middle\" class=\"gs\">Offers a real next step</text><defs><marker id=\"ahg\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#DB8437\"/></marker></defs></svg>",
      "b": [
        "Gatekeeping means 'not now' or 'here's a better option' — never an outright block.",
        "You represent the executive's authority; access is filtered, tone stays calm and confident.",
        "Never blame the requester for bad timing, and always offer a real next step.",
        "The Filtering Matrix pairs with a communication toolkit: active listening, framing, appeal to shared values, and asking for opinions rather than giving orders — all aimed at influence without relying on formal authority."
      ],
      "howTo": [
        "When a request or caller wants access you're not able to grant right now, start from 'not now' or 'here's a better option' — never a flat, unexplained no.",
        "Hold the tone calm and confident throughout — you're representing the executive's authority, and an apologetic or defensive tone undercuts that.",
        "Never blame the requester for bad timing (\"you should have scheduled this earlier\") — it damages the relationship for no benefit.",
        "Always offer a real, concrete next step — a specific time, a named alternate contact, or a clear timeline — never just a closed door.",
        "If the person pushes back, draw on the broader toolkit: active listening, framing the constraint honestly, and appealing to shared goals rather than just repeating the same no."
      ],
      "trainerCue": "Roleplay this live: you play a pushy caller, pick a trainee to gatekeep you in real time. Do it twice — once where they cave, once where they hold the line — and debrief the difference."
    },
    {
      "h": "The Filtering Matrix",
      "section": "Communication & Gatekeeping",
      "svgDiagram": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><style>.fq{font:700 10px Arial,sans-serif;fill:#fff;}.fo{font:700 12px Arial,sans-serif;fill:#fff;}</style><rect x=\"220\" y=\"10\" width=\"160\" height=\"36\" rx=\"18\" fill=\"#262B45\"/><text x=\"300\" y=\"33\" text-anchor=\"middle\" class=\"fo\">Request Comes In</text><path d=\"M300 46 L300 68\" stroke=\"#DB8437\" stroke-width=\"3\" class=\"svg-flow-arrow\" marker-end=\"url(#ah2)\"/><g transform=\"translate(30,72)\"><rect width=\"128\" height=\"56\" rx=\"8\" fill=\"#3C4268\"/><text x=\"64\" y=\"24\" text-anchor=\"middle\" class=\"fq\">Revenue Impact</text><circle cx=\"64\" cy=\"40\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/></g><g transform=\"translate(166,72)\"><rect width=\"128\" height=\"56\" rx=\"8\" fill=\"#3C4268\"/><text x=\"64\" y=\"24\" text-anchor=\"middle\" class=\"fq\">Legal Risk</text><circle cx=\"64\" cy=\"40\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/></g><g transform=\"translate(302,72)\"><rect width=\"128\" height=\"56\" rx=\"8\" fill=\"#3C4268\"/><text x=\"64\" y=\"20\" text-anchor=\"middle\" class=\"fq\">Exec Authority</text><text x=\"64\" y=\"32\" text-anchor=\"middle\" class=\"fq\">Needed</text><circle cx=\"64\" cy=\"44\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/></g><g transform=\"translate(438,72)\"><rect width=\"128\" height=\"56\" rx=\"8\" fill=\"#3C4268\"/><text x=\"64\" y=\"20\" text-anchor=\"middle\" class=\"fq\">Relationship</text><text x=\"64\" y=\"32\" text-anchor=\"middle\" class=\"fq\">Sensitivity</text><circle cx=\"64\" cy=\"44\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/></g><path d=\"M94 128 L94 150 L300 150\" stroke=\"#DCE0EA\" stroke-width=\"2\" fill=\"none\"/><path d=\"M230 128 L230 150 L300 150\" stroke=\"#DCE0EA\" stroke-width=\"2\" fill=\"none\"/><path d=\"M366 128 L366 150 L300 150\" stroke=\"#DCE0EA\" stroke-width=\"2\" fill=\"none\"/><path d=\"M502 128 L502 150 L300 150\" stroke=\"#DCE0EA\" stroke-width=\"2\" fill=\"none\"/><path d=\"M300 150 L300 172\" stroke=\"#DB8437\" stroke-width=\"3\" class=\"svg-flow-arrow\" marker-end=\"url(#ah2)\"/><g transform=\"translate(30,176)\"><rect width=\"128\" height=\"46\" rx=\"8\" fill=\"#B54A3F\"/><text x=\"64\" y=\"28\" text-anchor=\"middle\" class=\"fo\">Do Now</text></g><g transform=\"translate(166,176)\"><rect width=\"128\" height=\"46\" rx=\"8\" fill=\"#DB8437\"/><text x=\"64\" y=\"28\" text-anchor=\"middle\" class=\"fo\">Delegate</text></g><g transform=\"translate(302,176)\"><rect width=\"128\" height=\"46\" rx=\"8\" fill=\"#5B6178\"/><text x=\"64\" y=\"28\" text-anchor=\"middle\" class=\"fo\">Defer</text></g><g transform=\"translate(438,176)\"><rect width=\"128\" height=\"46\" rx=\"8\" fill=\"#3F7D58\"/><text x=\"64\" y=\"28\" text-anchor=\"middle\" class=\"fo\">Alternative</text></g><defs><marker id=\"ah2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"6\" orient=\"auto\"><path d=\"M0,0 L8,0 L4,8 Z\" fill=\"#DB8437\"/></marker></defs></svg>",
      "b": [
        "Categorize each request by urgency and impact: do it now, delegate, defer, or offer an alternative.",
        "Four screening questions: revenue impact, legal risk, need for executive authority, relationship sensitivity."
      ],
      "howTo": [
        "When a request comes in, run it through the four screening questions in order: revenue impact, legal risk, need for executive authority, and relationship sensitivity.",
        "If it scores high on any single question, treat it as \"do it now\" regardless of how it scores on the others — one high-stakes dimension is enough to escalate priority.",
        "If it scores low across all four, decide between delegate, defer, or offer an alternative based on who else could reasonably handle it.",
        "Document your classification briefly, especially for anything you deferred or delegated — so the reasoning is traceable if it's questioned later.",
        "Revisit anything you deferred at the interval you promised — a deferred item that's silently forgotten is functionally the same as one that was mishandled."
      ],
      "trainerCue": "Put the four filtering questions on the board and run one ambiguous real-world request through them live as a group before trainees try it solo."
    },
    {
      "h": "Scripts That Redirect Without Alienating",
      "section": "Communication & Gatekeeping",
      "b": [
        "Deferring — acknowledge genuinely, propose concrete next steps with a timeline.",
        "Re-routing — point to the right team while staying accountable for the outcome.",
        "Drastic Contrast — explain the real constraint honestly and offer a specific alternative slot.",
        "Scripts also draw on classic influence principles: consistency and commitment (getting a small agreement first), and authority (citing the right process rather than personal preference)."
      ],
      "howTo": [
        "Pick the right script type for the situation: Deferring when the request is valid but mistimed, Re-routing when someone else genuinely owns it, Drastic Contrast when the real constraint needs to be stated plainly.",
        "For Deferring, genuinely acknowledge the request first, then propose a concrete next step with an actual timeline — not a vague \"soon.\"",
        "For Re-routing, name the correct team or person specifically, and stay accountable for making sure the handoff actually lands, not just pointing and stepping away.",
        "For Drastic Contrast, state the real constraint honestly rather than softening it into something misleading, then immediately offer a specific alternative slot.",
        "Whichever script you use, get a small agreement first if you can (confirming the ask, confirming a time) — consistency and commitment make the redirect land more smoothly than a flat statement."
      ],
      "trainerCue": "Have three volunteers each deliver one of the three scripts (Deferring, Re-routing, Drastic Contrast) to the same scenario — the tonal differences are the whole lesson."
    },
    {
      "h": "Phone & Voicemail Etiquette",
      "section": "Communication & Gatekeeping",
      "fourPart": {
        "corePrinciples": [
          "The phone is often a client's first contact with the firm. How you answer it shapes their impression of the whole practice.",
          "A good message is complete: who called, from where, their number, which matter, what they need, how urgent it is and the best time to reach them.",
          "Confidentiality applies on the phone too. Don't confirm that someone is a client, or discuss any matter, until you know who you're talking to and that they're entitled to know."
        ],
        "howTo": [
          "Answer with the firm's name and your own: 'Thorne and Partners, this is Dana speaking.'",
          "Take the full message and read the number back. Ask 'Which matter is this about?' and 'Is there a deadline we should know about?'",
          "Transfer warmly: tell the attorney who's calling and why before you connect them, so nobody has to repeat themselves.",
          "When you leave a voicemail, say your name and number slowly at the start and again at the end, keep the reason short, and leave out confidential details.",
          "Log every call that matters in the call log or the matter notes, and return calls within one business day, even if only to say when a full answer is coming."
        ],
        "bestPractices": [
          "Smile when you answer. It genuinely changes how your voice sounds.",
          "Keep your own voicemail greeting current, especially when you're out: say when you're back and who to call in the meantime.",
          "Pitfall: 'Yes, Mr. Harlow is a client here' to an unknown caller. Confirming a client relationship can itself breach confidentiality.",
          "Pitfall: a message that says only 'John called.' If the attorney can't act on it, it isn't a message."
        ],
        "discussionCase": "A caller says, 'I'm a reporter. Is Harlow Industries one of your clients? I just need a yes or no.' What exactly do you say, and what do you do after the call?"
      },
      "trainerCue": "Pair trainees for 60-second calls: one plays a rushed client with a deadline, the other takes the message. Swap, then compare messages for the seven parts."
    },
    {
      "h": "Executive Presence in Action",
      "section": "Communication & Gatekeeping",
      "singleSlide": true,
      "b": [
        "EA response to a sensitive request: authoritative, brief, procedural — protects the business first.",
        "PA response to the same trigger: warm, accommodating, relationship-first — protects the person first.",
        "Same instinct underneath both: protect first, resolve second."
      ],
      "layout": "COMPARE",
      "compareLeft": {
        "label": "EA Response",
        "items": [
          "Sensitive request for confidential info: \"I cannot release that information. I'll escalate internally.\"",
          "Persistent caller pushing for direct time: \"Please submit the request in writing; I'll review priority.\"",
          "Tone: authoritative, brief, procedural — protects the business first."
        ]
      },
      "compareRight": {
        "label": "PA Response",
        "items": [
          "Sensitive request for confidential info: \"That's private. I can assist with logistics if needed.\"",
          "Persistent caller pushing for direct time: \"I'll take a message and follow up as soon as possible.\"",
          "Tone: warm, accommodating, relationship-first — protects the person first."
        ]
      },
      "howTo": [
        "When a sensitive request lands, first identify whether you're responding as EA or PA in that moment — the correct response differs sharply between the two.",
        "In EA mode, respond in a way that protects the business first: authoritative, brief, procedural — \"I cannot release that information; I'll escalate internally.\"",
        "In PA mode, respond in a way that protects the person first: warm and accommodating — \"That's private; I can assist with logistics if needed.\"",
        "For a persistent requester, hold the same protective instinct but express it in the register that fits the role — a written-request redirect for EA, a message-and-follow-up for PA.",
        "Whichever mode you're in, protect first and resolve second — that underlying instinct doesn't change even though the delivery does."
      ],
      "trainerCue": "Have two volunteers role-play the EA response and PA response back-to-back to the same prompt — the contrast lands much harder live than on a slide."
    },
    {
      "h": "Virtual Meetings & Transcription Accuracy",
      "section": "Communication & Gatekeeping",
      "b": [
        "Test recording software before the meeting, not during it.",
        "Always assign a human note-taker as backup, independent of the tech.",
        "If minutes come back unclear, apologize, revise, and standardize the template — don't just stop distributing them.",
        "Two documentation types: Informal Notes (internal use only) and Formal Minutes (structured, distributed record).",
        "Capture final decisions and action items; don't capture side conversations or off-the-record remarks.",
        "AI transcription tools (Zoom, Teams, Otter) speed up the process, but the assistant's role is to review and clean the transcript — never distribute it raw.",
        "After major meetings, prepare an Executive Briefing Memo: a short 'Subject: Executive Brief — [Meeting Topic]' summary rather than the full transcript."
      ],
      "howTo": [
        "Before the meeting starts, test the recording software directly — confirming it works during the meeting is too late if it fails.",
        "Assign a human note-taker as backup regardless of what recording or AI transcription tool is running — technology fails, and the meeting record can't depend on it alone.",
        "During the meeting, capture final decisions and action items specifically — not side conversations or off-the-record remarks, which don't belong in the record at all.",
        "If using AI transcription (Zoom, Teams, Otter), always review and clean the raw transcript before it goes anywhere — never distribute it unedited.",
        "After the meeting, produce the right document for the audience: a short Executive Briefing Memo for the executive, not the full transcript or raw notes."
      ],
      "trainerCue": "Ask: 'Has a meeting ever ended and nobody could agree on what was actually decided?' That's the exact failure this topic exists to prevent."
    },
    {
      "h": "Professional Standards & Confidentiality",
      "section": "Confidentiality & Boundaries",
      "b": [
        "EAs protect business confidentiality — contracts, IP, financials — with compliance awareness of legal/HR/data-privacy rules.",
        "PAs protect personal privacy and discretion through trust-based relationships.",
        "There's no 'minor version' of a confidentiality lapse — a casual comment carries the same real risk as a misdirected attachment."
      ],
      "callout": {
        "type": "warning",
        "label": "No small leaks",
        "text": "Confidentiality doesn't have a 'minor version' — a casual comment in the wrong hallway carries the same risk as a misdirected email."
      },
      "howTo": [
        "Before discussing any matter, confirm what confidentiality tier it falls under — business confidentiality (contracts, IP, financials) or personal privacy — since the protective standard differs.",
        "Apply compliance awareness proactively for business matters — know the relevant legal/HR/data-privacy rules that apply, don't wait to be told when something is sensitive.",
        "For personal matters, default to discretion built on trust — the standard is protecting the person's privacy, not just following a formal policy.",
        "Treat every disclosure channel the same way, regardless of how casual it feels — a hallway comment carries the same real risk as a misdirected email attachment.",
        "If you're ever uncertain whether something is confidential, treat it as if it is until you can confirm otherwise — the cost of over-protecting is far lower than a real leak."
      ],
      "trainerCue": "Ask: 'Has anyone ever had a confidentiality slip that felt minor at the time but wasn't?' Don't ask for specifics if it's sensitive — just a nod is enough to make the point land."
    },
    {
      "h": "Boundaries & Authorization Protocols",
      "section": "Confidentiality & Boundaries",
      "svgDiagram": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\"><style>.bt{font:700 12px Arial,sans-serif;fill:#fff;}.bs{font:400 10px Arial,sans-serif;fill:rgba(255,255,255,.85);}.bl{font:700 10px Arial,sans-serif;fill:#5B6178;}</style><g transform=\"translate(200,10)\"><rect width=\"160\" height=\"44\" rx=\"22\" fill=\"#262B45\"/><text x=\"80\" y=\"27\" text-anchor=\"middle\" class=\"bt\">Request Arrives</text></g><path d=\"M280 54 L280 76 M280 76 L170 112 M280 76 L390 112\" stroke=\"#DCE0EA\" stroke-width=\"2.5\" fill=\"none\"/><circle cx=\"280\" cy=\"76\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"200\" y=\"88\" text-anchor=\"middle\" class=\"bl\">within your limit</text><text x=\"360\" y=\"88\" text-anchor=\"middle\" class=\"bl\">exceeds your limit</text><g transform=\"translate(90,112)\"><rect width=\"160\" height=\"60\" rx=\"10\" fill=\"#3F7D58\"/><text x=\"80\" y=\"27\" text-anchor=\"middle\" class=\"bt\">Act &amp; Document</text><text x=\"80\" y=\"45\" text-anchor=\"middle\" class=\"bs\">Directly, on record</text></g><g transform=\"translate(310,112)\"><rect width=\"160\" height=\"60\" rx=\"10\" fill=\"#B54A3F\"/><text x=\"80\" y=\"27\" text-anchor=\"middle\" class=\"bt\">Escalate First</text><text x=\"80\" y=\"45\" text-anchor=\"middle\" class=\"bs\">Never assume approval</text></g></svg>",
      "b": [
        "Clear scope, written agreements, and checklists prevent role overlap.",
        "Authorization protocols define limits precisely (e.g., an EA approves vendor invoices under $500, escalates above).",
        "Keep business and personal systems physically separate — calendars, storage, devices.",
        "Practical example: an EA approves vendor invoices under $500 and escalates larger amounts; a PA books personal travel within a preset budget and notifies the executive if it's exceeded.",
        "Escalation example: an EA pauses on a contract requiring executive approval; a PA escalates before granting a vendor access to financial accounts.",
        "A useful personal checklist for ambiguous situations: 'Does this comply with policy, law, and trust?' — if the answer is no or uncertain, escalate."
      ],
      "howTo": [
        "Before acting on any request involving money, access, or commitment, check it against the defined authorization limits — don't rely on memory or assumption about what's in scope.",
        "If the request falls within your defined limit (e.g., a vendor invoice under $500), act on it directly and document it.",
        "If it exceeds your limit, escalate before acting — never proceed on the assumption it will probably be approved anyway.",
        "Keep business and personal systems physically separate at all times (calendars, storage, devices) — this isn't just tidiness, it's what prevents an authorization boundary from quietly blurring.",
        "When genuinely unsure whether something is authorized, run it through the simple check: does this comply with policy, law, and trust? If the answer is no or uncertain, escalate rather than proceed."
      ],
      "trainerCue": "Cold-call someone: 'You just approved a $600 vendor invoice under a $500 limit by accident. What do you do in the next 10 minutes?' Use their answer to check if escalation instinct is there."
    },
    {
      "h": "What an Assistant Can and Can't Do (Unauthorized Practice of Law)",
      "section": "Confidentiality & Boundaries",
      "fourPart": {
        "corePrinciples": [
          "Only a licensed lawyer can give legal advice, set legal fees, accept a case, sign court papers or represent someone in court. Doing any of these without a license is the unauthorized practice of law (UPL), and it's illegal in every US state.",
          "Lawyers are responsible for supervising the non-lawyers who work for them, so a well-meant slip by an assistant becomes the firm's problem.",
          "The line is interpretation. Giving facts, scheduling and relaying the attorney's words are fine; telling someone what the law means for their situation, or what they should do, is advice."
        ],
        "howTo": [
          "Things you can do: schedule, gather information and documents, share public procedural facts (a court's address or hours), and pass on the attorney's advice word for word.",
          "Things you can't do: tell a client whether they have a case, what a document means for them, which option to choose or what a settlement is worth.",
          "When asked for advice, use a bridge line: 'That's a great question for Elias. I'll make sure he gets it today.'",
          "When passing on the attorney's advice, quote it exactly or send it in writing from them. Don't paraphrase it into your own words.",
          "If you're not sure whether something crosses the line, treat it as advice and route it to the attorney."
        ],
        "bestPractices": [
          "Be warm when you redirect. Clients often ask the assistant because they feel embarrassed asking the lawyer.",
          "Write down the question as the client asked it, so the attorney answers what was actually asked.",
          "Pitfall: 'In my experience, cases like yours usually settle.' Experience-based reassurance is still advice.",
          "Pitfall: filling in a legal form's answers for a client. Collect the information; the attorney decides what goes in."
        ],
        "discussionCase": "A client calls: 'The other side offered $40,000. Elias is in trial all week. Just between us, should I take it?' Write exactly what you say."
      },
      "trainerCue": "Read out eight things an assistant might say to a client. The room holds up a green card (fine) or a red card (advice). Discuss the two that split the room."
    },
    {
      "h": "NDAs & Non-Disclosure Discipline",
      "section": "Confidentiality & Boundaries",
      "b": [
        "A non-disclosure agreement is a legal contract, not a formality — it defines exactly what information is protected, who's bound by it, for how long, and what happens if it's breached. An EA who's only ever 'signed one' without reading it is exposed the moment a real question comes up.",
        "The EA's practical role isn't drafting NDAs — it's tracking them: knowing which vendors, contractors, or temporary staff have an NDA on file before sharing anything sensitive with them, and flagging when someone's asking for access they haven't been cleared for.",
        "NDAs commonly have a defined term (they can expire) and defined scope (they may cover some information but not all) — treating every NDA as blanket, permanent protection is a common and risky mistake.",
        "If a vendor or contractor asks for sensitive information and you can't confirm an NDA is actually in place and covers that specific request, the answer is to pause and verify — not to assume it's fine because they're already engaged in other work."
      ],
      "howTo": [
        "Before sharing anything sensitive with a vendor, contractor, or temporary staff member, check whether an NDA is actually on file for that specific person or entity — don't assume it's covered because they're already engaged.",
        "If an NDA exists, confirm its actual scope and term — some NDAs expire, and some cover only certain categories of information, not everything by default.",
        "If you can't confirm an NDA covers the specific request in front of you, pause and verify before sharing anything — don't proceed on the assumption it's probably fine.",
        "Maintain a simple, quickly searchable record of which parties have an NDA on file, its term, and its scope — so this check takes under two minutes, not a search through old email.",
        "Flag any request for access from someone who hasn't been cleared — treat an unexpected request for sensitive information as worth verifying, not automatically granting."
      ],
      "trainerCue": "Ask the room: 'If someone asked you right now whether a specific vendor has a signed NDA on file, could you find out in under two minutes?' If the honest answer is no, that's the gap this topic is meant to close."
    },
    {
      "h": "Command Hierarchy",
      "section": "Command Hierarchy & Liaison",
      "b": [
        "Escalate potential issues rather than deciding alone — that's the core of a healthy command hierarchy.",
        "Red flag: a confidential document bypassing legal review before reaching a client.",
        "Executives should hear critical news from you first, not secondhand."
      ],
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Notice",
          "desc": "Spot a potential issue before it becomes a problem"
        },
        {
          "label": "Assess",
          "desc": "Determine scope, urgency, and who else it affects"
        },
        {
          "label": "Escalate",
          "desc": "Route it through the correct channel, not around it"
        },
        {
          "label": "Inform",
          "desc": "Make sure the executive hears it from you first, not from someone else"
        }
      ],
      "trainerCue": "Ask the room to describe, in their own words, what 'escalating rather than deciding alone' actually looks like in practice — the abstract sequence lands better once someone puts it in real terms."
    },
    {
      "h": "Command Hierarchy Across Different Tracks",
      "section": "Command Hierarchy & Liaison",
      "singleSlide": true,
      "svgDiagram": "<svg viewBox=\"0 0 580 260\" xmlns=\"http://www.w3.org/2000/svg\"><style>.ct{font:700 10px Arial,sans-serif;fill:#fff;}.ch{font:800 11px Arial,sans-serif;fill:#DB8437;}</style><text x=\"90\" y=\"18\" text-anchor=\"middle\" class=\"ch\">CORPORATE</text><text x=\"290\" y=\"18\" text-anchor=\"middle\" class=\"ch\">LEGAL</text><text x=\"490\" y=\"18\" text-anchor=\"middle\" class=\"ch\">HOUSEHOLD</text><g transform=\"translate(15,28)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#262B45\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">CEO / President</text></g><line x1=\"90\" y1=\"58\" x2=\"90\" y2=\"70\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(15,70)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Senior EA</text></g><line x1=\"90\" y1=\"100\" x2=\"90\" y2=\"112\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(15,112)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">EA</text></g><line x1=\"90\" y1=\"142\" x2=\"90\" y2=\"154\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(15,154)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#5B6178\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Admin Assistant</text></g><g transform=\"translate(215,28)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#B54A3F\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Managing Partner</text><circle cx=\"140\" cy=\"15\" r=\"6\" fill=\"#fff\" class=\"svg-pulse-dot\"/></g><line x1=\"290\" y1=\"58\" x2=\"290\" y2=\"70\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(215,70)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Sr Legal Assistant</text></g><line x1=\"290\" y1=\"100\" x2=\"290\" y2=\"112\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(215,112)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Legal EA</text></g><line x1=\"290\" y1=\"142\" x2=\"290\" y2=\"154\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(215,154)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#5B6178\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Paralegal</text></g><g transform=\"translate(415,28)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#262B45\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Family Head</text></g><line x1=\"490\" y1=\"58\" x2=\"490\" y2=\"70\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(415,70)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Sr PA / Estate Mgr</text></g><line x1=\"490\" y1=\"100\" x2=\"490\" y2=\"112\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(415,112)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#3C4268\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">PA</text></g><line x1=\"490\" y1=\"142\" x2=\"490\" y2=\"154\" stroke=\"#DCE0EA\" stroke-width=\"2\"/><g transform=\"translate(415,154)\"><rect width=\"150\" height=\"30\" rx=\"6\" fill=\"#5B6178\"/><text x=\"75\" y=\"20\" text-anchor=\"middle\" class=\"ct\">Household Staff</text></g><g transform=\"translate(215,196)\"><rect width=\"150\" height=\"22\" rx=\"11\" fill=\"#B5651F\" stroke=\"#F0C08A\" stroke-width=\"2\" class=\"svg-callout-badge\"/><text x=\"75\" y=\"15\" text-anchor=\"middle\" style=\"font:800 8.5px Arial,sans-serif;fill:#fff;\">&#9888; STRICT CHAIN</text></g></svg>",
      "b": [
        "Command hierarchy for a corporate/executive track: CEO/President → Senior EA → EA (reports to a specific executive) → Administrative Assistant.",
        "Command hierarchy for a legal track: Managing Partner/General Counsel → Senior Legal Assistant → Legal EA → Paralegal — the chain is strict, and unauthorized decisions can have real legal consequences.",
        "Command hierarchy for a personal/household track: Executive or Family Head → Senior PA/Estate Manager → PA → Household staff (driver, housekeeper, nanny)."
      ],
      "howTo": [
        "Before escalating anything, identify which track you're actually operating in — corporate/executive, legal, or personal/household — since the chain of command differs across all three.",
        "In a corporate/executive track, route through: CEO/President → Senior EA → EA (reporting to a specific executive) → Administrative Assistant.",
        "In a legal track, route through the stricter chain: Managing Partner/General Counsel → Senior Legal Assistant → Legal EA → Paralegal — and treat any unauthorized decision here as a real legal risk, not just a process slip.",
        "In a personal/household track, route through: Executive or Family Head → Senior PA/Estate Manager → PA → Household staff.",
        "If a situation spans two tracks at once (a personal matter with legal exposure, for instance), escalate through both relevant chains rather than picking just one."
      ],
      "trainerCue": "Walk the room through the three org-chart tracks on screen and ask which one matches their own current or most recent job — this is a good pulse-check on the room's mixed experience level."
    },
    {
      "h": "Serving as Liaison & Point of Contact",
      "section": "Command Hierarchy & Liaison",
      "svgDiagram": "<svg viewBox=\"0 0 500 260\" xmlns=\"http://www.w3.org/2000/svg\"><style>.lt{font:700 11px Arial,sans-serif;fill:#fff;}</style><path d=\"M250 130 L110 60\" stroke=\"#DCE0EA\" stroke-width=\"2\" class=\"svg-flow-arrow\"/><path d=\"M250 130 L390 60\" stroke=\"#DCE0EA\" stroke-width=\"2\" class=\"svg-flow-arrow\"/><path d=\"M250 130 L110 200\" stroke=\"#DCE0EA\" stroke-width=\"2\" class=\"svg-flow-arrow\"/><path d=\"M250 130 L390 200\" stroke=\"#DCE0EA\" stroke-width=\"2\" class=\"svg-flow-arrow\"/><circle cx=\"250\" cy=\"130\" r=\"38\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"250\" y=\"126\" text-anchor=\"middle\" class=\"lt\">YOU</text><text x=\"250\" y=\"140\" text-anchor=\"middle\" style=\"font:600 8px Arial,sans-serif;fill:#fff;\">accurate relay</text><g transform=\"translate(40,30)\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#262B45\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" class=\"lt\">Executive</text></g><g transform=\"translate(320,30)\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#262B45\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" class=\"lt\">Outside Contact</text></g><g transform=\"translate(40,180)\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#262B45\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" class=\"lt\">Vendor / Staff</text></g><g transform=\"translate(320,180)\"><rect width=\"140\" height=\"46\" rx=\"8\" fill=\"#262B45\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" class=\"lt\">Other Track</text></g></svg>",
      "layout": "COMPARE",
      "compareLeft": {
        "label": "Gatekeeping",
        "items": [
          "Filtering what reaches the executive",
          "Deciding what waits, what's redirected",
          "Primarily protective — controlling access"
        ]
      },
      "compareRight": {
        "label": "Liaison",
        "items": [
          "Actively connecting two parties who need each other",
          "Carrying information accurately in both directions",
          "Primarily facilitative — enabling coordination"
        ]
      },
      "b": [
        "Being the liaison means other staff, departments, or outside contacts have one clear person to reach instead of guessing who owns a given question — that clarity alone prevents a lot of wasted time and crossed wires."
      ],
      "howTo": [
        "When two parties need to connect through you, first confirm you actually understand what each party needs — don't relay a request you haven't fully understood yourself.",
        "Carry information accurately in both directions — restate it in your own words to the receiving party rather than passing it through verbatim without context.",
        "Give each contact a single, clear point of ownership — make sure they know you're the person to reach for this specific matter, not one of several possible contacts.",
        "Distinguish gatekeeping from liaison work as you go: gatekeeping filters what reaches the executive; liaison work actively connects two parties who both need the connection to happen.",
        "Check back with both sides after a handoff to confirm the information landed correctly — don't assume accuracy just because the message was sent."
      ],
      "trainerCue": "Ask for a real example of a time information got garbled passing through a middle person — then ask what would have prevented it. That's the liaison discipline in one exercise."
    },
    {
      "h": "The Liaison Skill in Practice",
      "section": "Command Hierarchy & Liaison",
      "singleSlide": true,
      "b": [
        "The core liaison skill is accurate two-way relay: passing a request to the executive without distorting it, and passing the executive's answer back without softening or embellishing it into something it wasn't.",
        "This role compounds with command hierarchy — as the liaison, you're often the one who has to know which track (corporate, legal, household) a given request actually belongs to, so it reaches the right person.",
        "A liaison who becomes a bottleneck has failed at the role just as much as one who lets everything through unfiltered — the goal is smooth, accurate coordination, not personal indispensability."
      ],
      "howTo": [
        "When relaying a request to the executive, restate it accurately without distorting it — don't soften, exaggerate, or editorialize on the way through.",
        "When relaying the executive's answer back, carry it with the same discipline — don't embellish a short answer into something that sounds more elaborate than it was.",
        "Identify which track (corporate, legal, household) a given request actually belongs to before routing it — this is often the liaison's real, hidden job.",
        "Watch your own pace as you relay information — a liaison who becomes a bottleneck has failed at the role just as much as one who lets everything through unfiltered.",
        "If you're unsure a message landed as intended, check back rather than assume — accurate relay is the entire value of the role."
      ],
      "trainerCue": "Ask the room to name the difference between a liaison who's 'thorough' and one who's actually just slow — the line between the two is worth discussing directly."
    },
    {
      "h": "Bulletproof Basics",
      "section": "Managing Up Basics",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Inbox Zero & Triaging",
          "desc": "Categorize every email as Action, Information, or Delegation on first read — and draft in the executive's own voice so they only have to hit Send."
        },
        {
          "label": "Complex Travel Logistics",
          "desc": "Not just booking a flight — it's the 'What If' plan. If the 2:00 PM flight is canceled, you already have the 4:00 PM on hold."
        },
        {
          "label": "Meeting Lifecycle",
          "desc": "Moving from 'taking minutes' to 'driving outcomes' — setting the agenda before, tracking deliverables after."
        }
      ],
      "b": [
        "These basics sound simple, but consistency under pressure — doing them the same way on a chaotic Tuesday as on a quiet Friday — is what actually builds trust over time.",
        "Discussion prompt: pick one of these three basics you're weakest on today. What's the actual habit, not the intention, that would fix it this week?"
      ],
      "howTo": [
        "For inbox triage, sort every email on first read into Action, Information, or Delegation — don't leave anything unsorted to revisit later.",
        "Draft responses in the executive's own voice where appropriate, so the only remaining step for them is hitting send, not rewriting your draft.",
        "For travel, don't just book the primary option — build the \"What If\" plan alongside it, so a backup is already on hold before anything goes wrong.",
        "For meetings, set the agenda before the meeting happens, not after — this is what shifts you from taking minutes to actually driving outcomes.",
        "After the meeting, track deliverables to completion — the meeting lifecycle isn't finished until the follow-through is confirmed, not just documented."
      ],
      "trainerCue": "Ask which of the three basics (Inbox Zero, Travel What-If, Meeting Lifecycle) the room already does well versus which is aspirational — this sets the tone that this day builds skills, not just tests them."
    },
    {
      "h": "The Three C's of Managing Up",
      "section": "Managing Up Basics",
      "b": [
        "Clarity — say exactly what's happening and what you need.",
        "Consistency — same standard procedures every time.",
        "Credibility — recommendations have to be reliable, no exceptions."
      ],
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Clarity",
          "desc": "No vague messages — say exactly what's happening and exactly what you need from them"
        },
        {
          "label": "Consistency",
          "desc": "Use the same standard procedures every time, so outcomes become predictable"
        },
        {
          "label": "Credibility",
          "desc": "Recommendations have to be accurate and reliable, every single time, with no exceptions"
        }
      ],
      "howTo": [
        "Before sending any update, check it for Clarity first — does it say exactly what's happening and exactly what you need, with nothing left for the reader to infer?",
        "Apply Consistency next — use the same standard procedure you'd use any other time, not an improvised approach because today is busier or calmer than usual.",
        "Protect Credibility above the other two when they conflict — a fast, unclear answer is worse than a slightly slower, reliable one.",
        "If you notice Clarity slipping under pressure (the most common failure point), slow down and restate the core ask before sending, rather than letting a vague message go out.",
        "Review your own recent messages periodically against all three — this is a habit that decays quietly under workload unless it's actively checked."
      ],
      "trainerCue": "Have someone read the Three C's out loud in order, then immediately ask: 'Which one collapses first when you're overwhelmed?' Almost everyone says Clarity — use that as the hook for why it's listed first."
    },
    {
      "h": "Credibility Is Earned, Not Claimed",
      "section": "Managing Up Basics",
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Operational Reliability",
          "desc": "Accuracy, follow-through, on-time execution, anticipating next steps, zero-drama problem solving"
        },
        {
          "label": "The No-Surprises Rule",
          "desc": "An executive should never be blindsided by something their assistant already knew about"
        },
        {
          "label": "Judgment Under Pressure",
          "desc": "Micro-decisions that quietly affect financial exposure, legal risk, and reputation"
        },
        {
          "label": "Discretion & Confidentiality Discipline",
          "desc": "Especially critical in investor relations, legal matters, family logistics, and M&A activity"
        }
      ],
      "b": [
        "Credibility is the currency that lets an assistant manage up with real confidence — earned exclusively through consistent execution and mature judgment, never through self-promotion.",
        "Credibility, once damaged, isn't restored by a single good week — it requires a sustained track record roughly proportional to how badly it was damaged.",
        "Discussion prompt: describe a real moment (any job) where a small, undramatic decision you made turned out to carry real financial, legal, or reputational weight. What told you it mattered before it became obvious?"
      ],
      "howTo": [
        "Build credibility through operational reliability first — accuracy, follow-through, and on-time execution, consistently, not just when it's convenient.",
        "Apply the No-Surprises Rule as a standing discipline: never let the executive be blindsided by something you already knew about, even if it seemed minor at the time.",
        "Treat every micro-decision as if it might carry real weight — financial exposure, legal risk, or reputational consequence isn't always obvious in the moment it's made.",
        "Practice discretion as a default, especially around investor relations, legal matters, family logistics, or M&A activity — these are the categories where a slip is hardest to undo.",
        "If credibility is ever damaged, don't expect a single good week to restore it — rebuild it through a sustained track record proportional to what was lost."
      ],
      "trainerCue": "This is a heavier topic — don't rush it. Ask for a real (anonymized) example of a moment someone's judgment call touched financial, legal, or reputational risk without them realizing it at the time."
    },
    {
      "h": "Client Profiling",
      "section": "Client Profiling & the Dossier",
      "b": [
        "A client profile is the reference you build once so you never ask the same question twice.",
        "Five categories: role & organization, communication style, meeting/scheduling rules, travel preferences, and quirks.",
        "Worked model — Elias Thorne, CEO of Thorne & Partners: blunt/direct communicator, heavy travel to D.C./London/Singapore, expects anticipation over instruction."
      ],
      "example": {
        "label": "Worked profile — Elias Thorne, Managing Owner & CEO, Thorne & Partners Law Group",
        "lines": [
          "Firm: 450-attorney practice in corporate litigation, white-collar defense, and international arbitration; culture is \"uncompromising excellence.\"",
          "Communication style: blunt, direct, unemotional feedback. Doesn't micromanage — expects the EA to anticipate, not be told.",
          "Base: New York City (EST); heavy travel to Washington D.C., London, and Singapore."
        ]
      },
      "howTo": [
        "Start with the role & organization category — who they are, what the firm or entity does, and their actual scope of authority.",
        "Capture communication style next — how they prefer to receive information (blunt vs. detailed, written vs. verbal) so every future interaction is calibrated correctly from day one.",
        "Document meeting and scheduling rules specifically — buffer requirements, blackout periods, back-to-back tolerance — since these are the rules most often broken by someone new to the account.",
        "Record travel preferences in enough detail to book without asking each time — seat position, connection tolerance, loyalty programs.",
        "Note any quirks last, in plain, non-judgmental language — patterns that don't fit neatly elsewhere but genuinely affect how you support them well."
      ],
      "trainerCue": "This is the first genuinely cumulative topic — pause and confirm everyone can name Elias's firm, family, and one standing rule from memory before moving on. If they can't, that's worth 5 more minutes here."
    },
    {
      "h": "Creating a Comprehensive Client Dossier",
      "section": "Client Profiling & the Dossier",
      "b": [
        "A dossier goes deeper than a profile — a living document that lets anyone run the account with zero ramp-up.",
        "Four sections: Firm & Role, Personal & Family, Standing Instructions, Known Quirks."
      ],
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Firm & Role",
          "desc": "Organizational context — company, industry, culture, and the executive's actual scope of authority"
        },
        {
          "label": "Personal & Family",
          "desc": "Only what's relevant to supporting them well — spouse, children, pets, key relationships"
        },
        {
          "label": "Standing Instructions",
          "desc": "Procedural rules that don't change day to day — dietary needs, buffer requirements, filtering rules"
        },
        {
          "label": "Known Quirks",
          "desc": "Personality-driven patterns written in plain language, never judgment — how they actually operate"
        }
      ],
      "howTo": [
        "Start the dossier with Firm & Role — the organizational context, industry, culture, and the executive's actual scope of authority, so anyone reading it understands the professional frame first.",
        "Add Personal & Family next — but only what's genuinely relevant to supporting them well (spouse, children, pets, key relationships), not a comprehensive personal history.",
        "Document Standing Instructions as procedural rules that don't change day to day — dietary needs, buffer requirements, filtering rules — written so they can be followed without interpretation.",
        "Write Known Quirks in plain, descriptive language, never as judgment — these are personality-driven patterns that affect how the role is actually done.",
        "Review the finished dossier by asking: could someone who's never met this person run the account cold using only this document? If not, it's not finished yet."
      ],
      "trainerCue": "Ask the room which of the four sections they'd find hardest to fill in accurately without ever having met the executive — that's usually Known Quirks, and it's worth naming why."
    },
    {
      "h": "Dossier Excerpt — Elias Thorne",
      "section": "Client Profiling & the Dossier",
      "b": [
        "Thorne excerpt: 15-minute debrief buffer after key sessions, strict Paleo diet, 5:30 AM voice notes needing an 8 AM agenda, aisle-seat-only travel.",
        "Each of the four sections answers a different failure mode: getting the professional context wrong, missing a personal sensitivity, breaking a hard rule, or misreading an idiosyncrasy as negotiable when it isn't.",
        "Anyone can paste facts under headings — a good dossier explains why a fact matters operationally, not just states it as trivia, and is written for the EA who inherits the account cold."
      ],
      "example": {
        "label": "Dossier excerpt — Elias Thorne",
        "lines": [
          "Standing Instructions: mandatory 15-minute debrief buffer after every key client or court session; strict Paleo diet, zero dairy — all client dinners vetted in advance; no back-to-back depositions or court hearings.",
          "Known Quirks: sends rapid, cryptic voice notes around 5:30 AM that need to become a structured agenda by 8:00 AM; needs aisle seats near the front and hates connecting flights.",
          "Personal & Family: married to Sarah; two children, Leo (8) and Maya (5); one dog, Barnaby."
        ]
      },
      "howTo": [
        "Take a raw fact (a dietary restriction, a communication habit, a scheduling rule) and place it under the correct one of the four dossier sections — Firm & Role, Personal & Family, Standing Instructions, or Known Quirks.",
        "For each fact, write not just what it is but why it matters operationally — a dossier that only lists facts without context forces every reader to rediscover the reasoning themselves.",
        "Cross-check each entry against the failure mode it prevents — getting professional context wrong, missing a personal sensitivity, breaking a hard rule, or misreading a quirk as negotiable when it isn't.",
        "Write every entry as if handing the account to someone who has never met this person — vague or insider shorthand defeats the purpose.",
        "Review the finished excerpt against the real example given (Elias's buffer requirement, diet, voice notes, seating) to confirm your own entries hit the same level of operational specificity."
      ],
      "trainerCue": "Live-build one dossier section on the whiteboard from the raw facts as a group, out loud, before trainees do it solo — this is the single highest-value facilitator moment in Day 1."
    },
    {
      "h": "Setting Up Client Trackers",
      "section": "Client Profiling & the Dossier",
      "svgDiagram": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\"><style>.trt{font:700 13px Arial,sans-serif;fill:#fff;}.trs{font:400 10px Arial,sans-serif;fill:rgba(255,255,255,.85);}</style><g transform=\"translate(20,20)\"><rect width=\"160\" height=\"130\" rx=\"10\" fill=\"#262B45\"/><text x=\"80\" y=\"40\" text-anchor=\"middle\" style=\"font-size:26px;\">&#9992;</text><text x=\"80\" y=\"75\" text-anchor=\"middle\" class=\"trt\">Travel</text><circle cx=\"80\" cy=\"95\" r=\"6\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"80\" y=\"115\" text-anchor=\"middle\" class=\"trs\">Seat, connections</text></g><g transform=\"translate(200,20)\"><rect width=\"160\" height=\"130\" rx=\"10\" fill=\"#3C4268\"/><text x=\"80\" y=\"40\" text-anchor=\"middle\" style=\"font-size:26px;\">&#9993;</text><text x=\"80\" y=\"75\" text-anchor=\"middle\" class=\"trt\">Inbox</text><circle cx=\"80\" cy=\"95\" r=\"6\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"80\" y=\"115\" text-anchor=\"middle\" class=\"trs\">BLUF format</text></g><g transform=\"translate(380,20)\"><rect width=\"160\" height=\"130\" rx=\"10\" fill=\"#3C4268\"/><text x=\"80\" y=\"40\" text-anchor=\"middle\" style=\"font-size:26px;\">&#128197;</text><text x=\"80\" y=\"75\" text-anchor=\"middle\" class=\"trt\">Meetings</text><circle cx=\"80\" cy=\"95\" r=\"6\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"80\" y=\"115\" text-anchor=\"middle\" class=\"trs\">Buffer rules</text></g></svg>",
      "b": [
        "A tracker turns the dossier into a live tool, updated in real time.",
        "Start with three: Travel Preferences, Inbox Preferences, Meeting Rhythms.",
        "A tracker with stale entries is worse than none — it creates false confidence."
      ],
      "example": {
        "label": "Tracker entries — Elias Thorne",
        "lines": [
          "Travel Preferences: aisle seat near the front; no connecting flights; monitor delays proactively and rebook without being asked.",
          "Inbox Preferences: BLUF only — concise case summary and action point at the top; detailed briefs attached separately, never pasted into the body.",
          "Meeting Rhythms: no back-to-back depositions or hearings; 15-minute debrief buffer after every key session."
        ]
      },
      "howTo": [
        "Start with the three foundational trackers — Travel Preferences, Inbox Preferences, and Meeting Rhythms — rather than trying to build every possible tracker at once.",
        "For Travel Preferences, log specifics that change how bookings are made — seat position, connection tolerance, and standing instructions like proactive rebooking.",
        "For Inbox Preferences, capture the actual format expected (e.g., BLUF-only body with detailed briefs attached separately) so every message is formatted right the first time.",
        "For Meeting Rhythms, record hard rules like no back-to-back sessions or required buffer time, not just general scheduling preferences.",
        "Update every tracker in real time as you learn something new — a tracker with stale entries creates false confidence, which is worse than having no tracker at all."
      ],
      "trainerCue": "Ask: 'Which of the three trackers would YOU build first if you only had time for one, and why?' There's no wrong answer — the reasoning is the point."
    },
    {
      "h": "Why One Client, All Ten Days",
      "section": "Client Profiling & the Dossier",
      "b": [
        "Every exercise from today forward uses Elias Thorne. That's deliberate: in a real role, your value compounds — the calendar rules you learn on Day 1 inform how you triage his inbox on Day 4, and the travel preferences you document today are what make the Day 3 itinerary gradeable on accuracy rather than guesswork.",
        "Treat inconsistencies across days as bugs to flag, not license to reinvent the client. If a later exercise seems to contradict something in the dossier, that's worth raising with your trainer — it's exactly the kind of discrepancy a real EA would catch.",
        "This is what separates a training program from a real tenure simulation: the same standing instructions, the same family details, the same quirks — carried forward and expected to be remembered, not reintroduced each time."
      ],
      "howTo": [
        "Treat every fact learned about Elias on Day 1 as something that will be tested again later — the dossier, family details, and standing instructions all carry forward, not just today's exercise.",
        "When a later day's exercise seems to depend on something from an earlier day, actively recall it rather than re-reading from scratch — that recall is itself part of what's being built.",
        "If a later exercise ever seems to contradict something already established about Elias, treat that as a real discrepancy worth flagging to your trainer, not something to quietly work around.",
        "Use the consistency itself as a memory aid — the same family, same quirks, same standing rules recurring across ten days is what makes them stick, unlike a new scenario introduced each time.",
        "By the end of the program, you should be able to describe Elias's standing instructions, family, and communication style from memory, without checking the dossier — that's the actual goal of the one-client structure."
      ],
      "trainerCue": "End Day 1 here with a direct question to the room: 'What's one thing about Elias you're worried you'll forget by Day 5?' Write the answers down — revisit them on Day 5."
    },
    {
      "h": "The ACT Email Framework",
      "section": "Written Communication Frameworks",
      "svgDiagram": "<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\"><style>.at{font:800 20px Arial,sans-serif;fill:#fff;}.al{font:700 12px Arial,sans-serif;fill:#fff;}.as{font:400 9.5px Arial,sans-serif;fill:rgba(255,255,255,.85);}</style><g transform=\"translate(10,20)\"><rect width=\"160\" height=\"100\" rx=\"10\" fill=\"#262B45\"/><text x=\"80\" y=\"38\" text-anchor=\"middle\" class=\"at\">A</text><text x=\"80\" y=\"62\" text-anchor=\"middle\" class=\"al\">Acknowledge</text><text x=\"80\" y=\"80\" text-anchor=\"middle\" class=\"as\">Restate the ask</text></g><path d=\"M178 70 L208 70\" stroke=\"#DB8437\" stroke-width=\"3\" class=\"svg-flow-arrow\" marker-end=\"url(#ahact)\"/><g transform=\"translate(210,20)\"><rect width=\"160\" height=\"100\" rx=\"10\" fill=\"#3C4268\"/><text x=\"80\" y=\"38\" text-anchor=\"middle\" class=\"at\">C</text><text x=\"80\" y=\"62\" text-anchor=\"middle\" class=\"al\">Clarify</text><circle cx=\"80\" cy=\"78\" r=\"5\" fill=\"#DB8437\" class=\"svg-pulse-dot\"/><text x=\"80\" y=\"95\" text-anchor=\"middle\" class=\"as\">Only what's missing</text></g><path d=\"M378 70 L408 70\" stroke=\"#DB8437\" stroke-width=\"3\" class=\"svg-flow-arrow\" marker-end=\"url(#ahact)\"/><g transform=\"translate(410,20)\"><rect width=\"160\" height=\"100\" rx=\"10\" fill=\"#DB8437\"/><text x=\"80\" y=\"38\" text-anchor=\"middle\" class=\"at\">T</text><text x=\"80\" y=\"62\" text-anchor=\"middle\" class=\"al\">Timeline</text><text x=\"80\" y=\"80\" text-anchor=\"middle\" class=\"as\">What, when, who owns it</text></g><defs><marker id=\"ahact\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#DB8437\"/></marker></defs></svg>",
      "b": [
        "Executives like Elias issue requests in the shape they think in — fast, partial, sometimes three things tangled into one voice note. An ACT email turns that into something both people can act on without a confused back-and-forth.",
        "Acknowledge is not 'Got it, thanks!' — it's restating the actual ask in your own words, so any misunderstanding surfaces immediately instead of three days later.",
        "Clarify means asking only what you genuinely can't infer. Checking the dossier first is part of the exercise — asking something already answered there reads as not having done the reading.",
        "Timeline closes the loop: what happens, by when, and who owns it if it isn't you. A timeline with no clear owner or date is the single most common reason a request falls through."
      ],
      "callout": {
        "type": "tip",
        "label": "Acknowledge → Clarify → Timeline",
        "text": "Elias reads BLUF-style. An ACT email works precisely because it front-loads the same discipline: state what you understood, ask only what's missing, and close with a concrete next step."
      },
      "howTo": [
        "Start with Acknowledge: restate the actual request in your own words — not \"Got it, thanks!\" — so any misunderstanding surfaces immediately rather than three days later.",
        "Move to Clarify: ask only what you genuinely can't infer. Check the dossier first — asking something already documented there signals you skipped a step.",
        "Close with Timeline: state what happens, by when, and who owns it if it isn't you — a timeline with no clear owner or date is the most common reason a request quietly falls through.",
        "Keep the whole email BLUF-style throughout, matching how a fast-moving executive actually reads — lead with the answer, not the process.",
        "Send the ACT email promptly after the request lands — the framework only works as a real-time discipline, not a summary written up later."
      ],
      "trainerCue": "This topic doubles as your bridge to the Day 1 ACT email exercise — flag that explicitly so it doesn't feel like a random new topic dropped in."
    },
    {
      "h": "BLUF: Bottom Line Up Front",
      "section": "Written Communication Frameworks",
      "svgDiagram": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\"><style>.t{font:800 15px Arial,sans-serif;fill:#fff}.s{font:600 11.5px Arial,sans-serif;fill:#fff;opacity:.92}.l{font:700 11px Arial,sans-serif;fill:#6E748C}</style><polygon points=\"60,20 500,20 440,70 120,70\" fill=\"#262B45\"/><text x=\"280\" y=\"42\" text-anchor=\"middle\" class=\"t\">BOTTOM LINE</text><text x=\"280\" y=\"60\" text-anchor=\"middle\" class=\"s\">the decision, answer or ask — first sentence</text><polygon points=\"124,76 436,76 386,120 174,120\" fill=\"#DB8437\"/><text x=\"280\" y=\"96\" text-anchor=\"middle\" class=\"t\">KEY DETAILS</text><text x=\"280\" y=\"112\" text-anchor=\"middle\" class=\"s\">only what’s needed to act</text><polygon points=\"178,126 382,126 340,166 220,166\" fill=\"#8E93AC\"/><text x=\"280\" y=\"146\" text-anchor=\"middle\" class=\"t\">BACKGROUND</text><text x=\"280\" y=\"160\" text-anchor=\"middle\" class=\"s\">optional / attached</text><text x=\"515\" y=\"45\" class=\"l\">read by all</text><text x=\"448\" y=\"100\" class=\"l\">skimmed</text><text x=\"394\" y=\"150\" class=\"l\">if needed</text></svg>",
      "b": [
        "BLUF means the first sentence carries the point — the decision needed, the answer to the question, or the action taken. Everything after it is supporting detail the reader can stop at any time.",
        "Executives like Elias read on phones, between meetings, often only the preview line. If the ask sits in paragraph three, it effectively doesn't exist.",
        "BLUF isn't being blunt or skipping courtesy — it's respecting the reader's time. A warm one-line greeting is fine; a warm three-paragraph run-up is not.",
        "Pitfall: writing in the order things happened (chronological) instead of the order the reader needs them (decision first)."
      ],
      "callout": {
        "type": "tip",
        "label": "The one-line test",
        "text": "If Elias only reads the first line, does he know exactly what you need from him and by when? If not, it isn't BLUF yet."
      },
      "howTo": [
        "Before writing, finish this sentence: 'The one thing Elias needs to know or decide is…' — that becomes your first line.",
        "Label the ask when there is one: 'Decision needed:', 'FYI — no action:', 'Action taken:' or 'Approval by 3 PM:'.",
        "Add only the details needed to act — dates, amounts, names, options — in two to four short lines or bullets.",
        "Move background, history and long context below a clear break or into an attachment.",
        "End with the exact next step and deadline (for example 'Reply YES/NO by 3 PM'), then re-read just your first line as Elias would."
      ],
      "trainerCue": "Show the pyramid, then read a real rambling email aloud and have the room rewrite only the first sentence. Time them: 60 seconds."
    },
    {
      "h": "BLUF in Practice: Emails, Updates & Voice Notes",
      "section": "Written Communication Frameworks",
      "svgDiagram": "<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\"><style>.h{font:800 13px Arial,sans-serif}.b{font:600 11.5px Arial,sans-serif;fill:#37394A}</style><rect x=\"10\" y=\"10\" width=\"255\" height=\"130\" rx=\"12\" fill=\"#FDECEA\" stroke=\"#C0392B\"/><text x=\"24\" y=\"34\" class=\"h\" fill=\"#C0392B\">✗ BURIED LEAD</text><text x=\"24\" y=\"58\" class=\"b\">\"Hi Elias, following up on several</text><text x=\"24\" y=\"74\" class=\"b\">items from this week’s calls…</text><text x=\"24\" y=\"90\" class=\"b\">… (4 paragraphs) … so could you</text><text x=\"24\" y=\"106\" class=\"b\">approve the $6,200 retainer by 3 PM?\"</text><rect x=\"295\" y=\"10\" width=\"255\" height=\"130\" rx=\"12\" fill=\"#E7F2EA\" stroke=\"#3F7D58\"/><text x=\"309\" y=\"34\" class=\"h\" fill=\"#3F7D58\">✓ BLUF</text><text x=\"309\" y=\"58\" class=\"b\">\"Decision needed by 3 PM: approve</text><text x=\"309\" y=\"74\" class=\"b\">the $6,200 expert retainer?</text><text x=\"309\" y=\"90\" class=\"b\">Why: deposition is Thursday.</text><text x=\"309\" y=\"106\" class=\"b\">Quote attached. Reply YES / NO.\"</text></svg>",
      "b": [
        "BLUF works across every channel: email subject lines, Slack messages, status updates, voice-note replies and even phone calls ('Quick one — I need a yes or no on…').",
        "Subject lines carry BLUF too: 'DECISION by 3 PM: expert retainer $6,200' beats 'Following up'.",
        "Status updates lead with the state, not the story: 'On track — filed today, confirmation attached' or 'At risk — courier delayed, new ETA 4 PM, backup ready'.",
        "BLUF and ACT work together: in an ACT reply, the Acknowledge line is written BLUF-style — the restated ask comes first."
      ],
      "callout": {
        "type": "tip",
        "label": "Decision → Why → Details → Next step",
        "text": "Decision or answer first, one line on why it matters, only the details needed to act, and a clear next step with a deadline."
      },
      "howTo": [
        "Write the subject line or first line as the bottom line: DECISION / FYI / ACTION TAKEN / AT RISK, plus the topic.",
        "Follow with one line of 'why now' — the deadline or consequence that makes it matter today.",
        "Give only the details needed to act, as short bullets — options, amounts, times, who is involved.",
        "Close with the exact next step and who owns it, and attach or link the background instead of pasting it.",
        "Proofread for the preview: on a phone, the first 80 characters should tell the whole story."
      ],
      "trainerCue": "Hand out the Day 1 BLUF template and have pairs convert one of their own recent messages. Compare subject lines out loud."
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 3,
      "q": "Updating a client on a filing you just made, the tone should be:",
      "opts": [
        "Plain language and reassuring, focused on what it means for them",
        "Skipped — clients don't need filing updates",
        "As brief as possible with no context",
        "Identical to what you'd send the court clerk"
      ],
      "a": 0,
      "r": "Reading the audience means the same event gets a different register for the client than for the court or the attorney."
    },
    {
      "afterIndex": 9,
      "q": "In the 'Persistent Caller' scenario, the EA's scripted response focuses on:",
      "opts": [
        "Immediately connecting the call",
        "Promising a callback within the hour",
        "Asking for a written request to review priority",
        "Ignoring the caller entirely"
      ],
      "a": 2,
      "r": "It filters the request into a reviewable, prioritized channel rather than granting or flatly denying access."
    },
    {
      "afterIndex": 25,
      "q": "The 'No-Surprises Rule' means:",
      "opts": [
        "Surprises are fine as long as they're positive",
        "Only bad news needs to be flagged early",
        "An executive should never be blindsided by something their assistant already knew",
        "Executives enjoy occasional surprises"
      ],
      "a": 2,
      "r": "Anything the assistant already knows that could affect the executive needs to reach them proactively — good or bad."
    }
  ],
  "quiz": [
    {
      "q": "Elias gets your email on his phone between hearings. Which opening line is BLUF?",
      "opts": [
        "Following up on last week's call: the expert witness situation has moved, and there are some details to go over.",
        "Hi Elias, hope court is going well. A few things came up this morning that I'd like to walk you through when you're free.",
        "FYI, please see the attached documents regarding several matters.",
        "Decision needed by 3 PM: approve the $6,200 expert retainer for Thursday's deposition?"
      ],
      "a": 3,
      "r": "BLUF puts the decision, the deadline and the ask in the first line, so Elias can act from the preview alone."
    },
    {
      "q": "What does BLUF stand for, and what does it change?",
      "opts": [
        "Bold, Lists, Underline, Font — the formatting rules that make an email easy to skim",
        "Bottom Line Up Front — the order: the point comes first, detail after",
        "Brief, Legal, Useful, Formal — the tone of an email",
        "Background, Lead, Update, Follow-up — the order the parts of an update should go in"
      ],
      "a": 1,
      "r": "Bottom Line Up Front is about order: lead with the decision, answer or action; supporting detail follows."
    },
    {
      "q": "Which status update follows BLUF?",
      "opts": [
        "At risk: filing courier delayed — new ETA 4 PM (deadline 5 PM); backup e-filing ready if it slips.",
        "Please call me when you have a moment. There's an issue with today's filing that we should talk through before 5 PM.",
        "This morning I contacted the courier, then called the clerk's office, and after lunch I checked e-filing, so here's where things stand…",
        "Just wanted to give you a quick update on how the day has been going."
      ],
      "a": 0,
      "r": "It leads with the state (at risk), then the key facts and the backup plan — no chronological story."
    },
    {
      "q": "A vendor asks for sensitive information and you can't confirm an NDA is actually in place covering that specific request. Correct move?",
      "opts": [
        "Share it, since the vendor is already engaged on other work and their contract likely covers confidentiality",
        "Escalate only if something goes wrong afterward",
        "Pause and verify the NDA actually covers this specific request before sharing anything",
        "Have the vendor sign a standard NDA on the spot, then send the information straight away"
      ],
      "a": 2,
      "r": "An NDA has defined scope and can expire — treating any existing relationship as blanket coverage is the exact mistake this discipline is meant to prevent."
    },
    {
      "q": "What's the key difference between gatekeeping and serving as liaison?",
      "opts": [
        "Liaison needs formal decision-making authority from the executive, while gatekeeping needs none at all",
        "Gatekeeping is primarily protective (filtering access); liaison is primarily facilitative (actively connecting two parties)",
        "They're the same job under two names: both decide who reaches the executive and when",
        "Gatekeeping deals with internal staff, while liaison work only ever involves external contacts like clients and vendors"
      ],
      "a": 1,
      "r": "Gatekeeping controls what reaches the executive; liaison actively carries information accurately in both directions between two parties who need each other."
    },
    {
      "q": "Your executive shares sensitive company strategy while you're both in a crowded cafeteria. Best response?",
      "opts": [
        "Politely step aside, summarize privately, and secure the information",
        "Post it in the internal chat to confirm you heard correctly",
        "Keep listening, then brief only your immediate team so nothing gets lost",
        "Take detailed notes on your phone right away so nothing is forgotten"
      ],
      "a": 0,
      "r": "Confidentiality is protected by controlling the setting, not by who you tell it to next."
    },
    {
      "q": "Which statement correctly separates EA and PA responsibilities?",
      "opts": [
        "EA handles personal errands and family logistics; PA handles board materials and business strategy",
        "PA handles strategic planning and confidential business information; EA handles scheduling and personal errands",
        "Both roles cover the same work in the same way; only the job title and the pay grade differ",
        "EA handles executive priorities, strategic prep, and confidential business info; PA handles personal support and some admin"
      ],
      "a": 3,
      "r": "The two roles overlap in skills but diverge sharply in scope — business/confidential vs. personal/lifestyle."
    },
    {
      "q": "Which of these is a clear red flag for a command-hierarchy failure?",
      "opts": [
        "An EA escalates a potential issue appropriately",
        "A PA coordinates personal travel efficiently",
        "A confidential client email bypasses legal review",
        "The executive hears about a critical decision first, before the wider team"
      ],
      "a": 2,
      "r": "Skipping the review step that exists specifically to catch confidentiality and legal risk is the hierarchy failure."
    },
    {
      "q": "What best describes a Virtual Executive Assistant's mindset?",
      "opts": [
        "Personal support specialist who keeps the executive's daily life and errands running smoothly",
        "Reliable task-taker who completes each instruction exactly as given, without adding anything",
        "Service-focused personal life facilitator",
        "Strategic partner focused on increasing executive efficiency and performance"
      ],
      "a": 3,
      "r": "'Strategic partner' is the defining VEA mindset, versus the VPA's 'personal support specialist' framing."
    },
    {
      "q": "Authorization protocols (like a $500 vendor-invoice approval limit) exist mainly to...",
      "opts": [
        "Make sure every vendor payment is reviewed by the finance team before it goes out",
        "Replace escalation entirely, since anything under the limit never needs anyone else's input",
        "Define decision-making and spending limits, preventing unauthorized commitments",
        "Give the assistant freedom to approve anything, as long as each single invoice stays under the limit"
      ],
      "a": 2,
      "r": "Clear limits protect against financial misuse or errors, and they build trust by keeping actions within agreed boundaries."
    },
    {
      "q": "What is the core difference in mindset between an EA and a PA?",
      "opts": [
        "EA is a strategic partner focused on business efficiency; PA is a personal support specialist",
        "PA handles all confidential business information",
        "EA is a service specialist focused on personal life; PA is the strategic partner focused on the business",
        "There's no real difference in mindset; both simply follow whatever the executive asks that day"
      ],
      "a": 0,
      "r": "EA mindset centers on business strategy and efficiency; PA mindset centers on personal/lifestyle support."
    },
    {
      "q": "In a corporate/executive track command hierarchy, who does an EA typically report to?",
      "opts": [
        "The Administrative Assistant",
        "A specific executive",
        "Household staff",
        "The Senior PA"
      ],
      "a": 1,
      "r": "An EA reports to the specific executive they support, with a Senior EA above them in larger structures."
    },
    {
      "q": "Why should executives hear critical news from their EA first, not secondhand?",
      "opts": [
        "It shows the EA is well informed, which protects their standing and job security",
        "It's firm protocol that all news goes through the EA, so the executive's inbox stays quieter",
        "It matters mainly in legal settings, where the rules require the executive to be told first",
        "It preserves trust and avoids the executive being blindsided in front of others"
      ],
      "a": 3,
      "r": "Being blindsided damages trust; hearing it from you first is central to a healthy reporting relationship."
    },
    {
      "q": "What are the five categories in a comprehensive client profile?",
      "opts": [
        "Role & organization, communication style, meeting/scheduling rules, travel preferences, and quirks",
        "Personal background, family details, hobbies, political views and favorite restaurants",
        "Role, family members, home address, favorite restaurants and gift preferences",
        "Contact details, job title, assistant's name, birthday and preferred airline"
      ],
      "a": 0,
      "r": "These five categories form the reference an EA builds once so they never have to ask the same question twice."
    },
    {
      "q": "What does the 'A' in an ACT email framework stand for?",
      "opts": [
        "Assign the task",
        "Approve",
        "Acknowledge",
        "Automate"
      ],
      "a": 2,
      "r": "Acknowledge — show the executive you understood the ask, not just that you received it."
    },
    {
      "q": "What does the 'C' in an ACT email framework stand for?",
      "opts": [
        "Cancel",
        "Clarify",
        "Confirm",
        "Complete"
      ],
      "a": 1,
      "r": "Clarify the 1-3 real unknowns — not questions you could answer yourself from the dossier."
    },
    {
      "q": "What does the 'T' in an ACT email framework stand for?",
      "opts": [
        "Transfer ownership",
        "Task",
        "Timeline",
        "Team"
      ],
      "a": 2,
      "r": "Timeline — when the executive will have an answer, draft, or confirmation, and from whom if not you."
    },
    {
      "q": "Why does a strong ACT email avoid asking questions already answerable from the dossier?",
      "opts": [
        "It wastes the executive's limited attention on things you should already know",
        "Executives generally prefer being asked everything directly, so they stay in control of the details",
        "Shorter emails are more likely to be read on a phone between meetings",
        "Dossiers go out of date quickly, so asking again is the only way to be sure"
      ],
      "a": 0,
      "r": "Asking answerable questions signals you haven't done the groundwork — the dossier exists to prevent exactly that."
    },
    {
      "q": "Why is a single, continuous client used throughout all ten training days?",
      "opts": [
        "It cuts down how much new material the trainees have to read and remember each day",
        "It makes grading easier, because every trainee's work can be compared against the same answer key",
        "It lets trainees compare their answers directly with each other's work each day",
        "It builds genuine continuity — dossier details from Day 1 should inform decisions on Day 10"
      ],
      "a": 3,
      "r": "Real EA work builds a deepening picture of one person over time — the program mirrors that instead of resetting context every day."
    },
    {
      "q": "A legal EA notices a document about to bypass legal review before reaching a client. What should they do?",
      "opts": [
        "Let it go since it's not their department",
        "Flag it — this is a classic command-hierarchy red flag",
        "Ask the client whether they mind receiving it before the review is done",
        "Send it on time and let legal review it afterwards"
      ],
      "a": 1,
      "r": "Bypassing legal review on client-facing documents is exactly the kind of gap an EA is expected to catch and escalate."
    },
    {
      "q": "What is 'executive presence' primarily about, in an EA's context?",
      "opts": [
        "Staying in the background so the executive is always the one people see and hear from",
        "Matching the executive's exact tone and communication style so the office speaks with one voice",
        "Dressing and speaking more formally than colleagues so people see you as senior staff",
        "Projecting calm, credible judgment under pressure so others trust your handling of a situation"
      ],
      "a": 3,
      "r": "Executive presence is about being trusted to handle things calmly and credibly, not about mimicry or silence."
    },
    {
      "q": "What is the primary purpose of a client tracker (separate from the dossier)?",
      "opts": [
        "To replace the calendar, so every meeting, deadline and reminder lives in one list instead",
        "To track ongoing, time-sensitive items — deadlines, follow-ups, recurring commitments",
        "To store the client's background, family details and preferences in one reference document",
        "To record the executive's feedback on the EA's work, so reviews have evidence behind them"
      ],
      "a": 1,
      "r": "The dossier is static reference; the tracker captures the moving, time-sensitive items that need follow-through."
    },
    {
      "q": "An EA is asked to approve a vendor invoice for $650 under a stated $500 authorization limit. What's the correct move?",
      "opts": [
        "Escalate it — it exceeds the defined authorization limit",
        "Ask the vendor to split it into two invoices under $500, so each one can be approved",
        "Approve it, since a small overage on a trusted vendor is within the spirit of the limit",
        "Ignore the limit since the vendor is trusted"
      ],
      "a": 0,
      "r": "Authorization limits exist precisely to catch cases like this — escalate rather than rationalize an exception."
    },
    {
      "q": "Why does a legal-track command hierarchy carry stricter consequences for unauthorized decisions than a corporate track?",
      "opts": [
        "It doesn't, really: both tracks treat an unauthorized decision as an internal process issue",
        "Legal assistants have less training, so firms give them tighter rules to make up for it",
        "Unauthorized decisions in a legal context can create real legal exposure, not just an internal misstep",
        "Law firms have more levels of management, so decisions take longer to approve and mistakes are more visible"
      ],
      "a": 2,
      "r": "In a legal setting, an unauthorized step can have binding legal consequences, raising the stakes of the same kind of mistake."
    },
    {
      "q": "What should an EA do first when receiving a rapid, unstructured request that actually contains three separate asks tangled together?",
      "opts": [
        "Ask the executive to resend it in a clearer, organized form before starting",
        "Work on whichever ask seems most important, and deal with the rest later if they come up",
        "Respond to only the first ask mentioned",
        "Separate the asks explicitly rather than treating it as one task"
      ],
      "a": 3,
      "r": "A strong reply untangles multiple asks rather than collapsing them into one vague response."
    },
    {
      "q": "Opposing counsel phones you and asks you to pass a settlement offer straight to your client's CEO. What do you do?",
      "opts": [
        "Take down the details and give them to your attorney, who decides how to respond",
        "Email the offer straight to the client's CEO so no time is lost, copying your attorney",
        "Tell opposing counsel the offer seems low and ask them to improve it first",
        "Ask opposing counsel to send the offer to the CEO directly instead of through you"
      ],
      "a": 0,
      "r": "Offers and anything touching the matter go through your attorney. Passing it on yourself, commenting on it, or inviting direct contact with the client all step outside an assistant's role."
    },
    {
      "q": "A lawsuit settles and Elias says the matter can be closed. Which task is part of closing the file?",
      "opts": [
        "Deleting the matter's emails and drafts right away, since the dispute has now ended",
        "Returning any unused money held in trust for the client and sending a closing letter",
        "Keeping the matter open indefinitely in case the client ever needs the firm again",
        "Moving the file straight to the shredding bin once the final invoice is paid"
      ],
      "a": 1,
      "r": "Closing means the final bill, returning any trust balance, a closing letter and archiving under the retention rules. Files aren't deleted or shredded on the spot, and a matter isn't left open forever."
    },
    {
      "q": "A lawyer asks you to prepare a subpoena. What is a subpoena?",
      "opts": [
        "A written summary of the case that each side files with the court before trial begins",
        "A sworn statement signed in front of a notary that is attached to a motion as evidence",
        "An order requiring a person to appear to testify or to produce documents or records",
        "An agreement between both parties to extend a deadline, signed by their lawyers"
      ],
      "a": 2,
      "r": "A subpoena orders someone to appear or produce documents. A pre-trial summary is a brief or statement, a sworn notarized statement is an affidavit, and an agreement between the parties is a stipulation."
    },
    {
      "q": "Your conflict search on a new inquiry finds that the opposing party's parent company was a firm client two years ago. What do you do?",
      "opts": [
        "Decide it's too old to matter and open the new matter so the work can start today",
        "Tell the caller the firm can't help and suggest another firm they could contact instead",
        "Keep quiet about the match, since former clients don't count once their matter is closed",
        "Send the match to the responsible attorney to decide, without telling the caller anything yet"
      ],
      "a": 3,
      "r": "A match goes to the attorney, who decides whether it's a real conflict. The assistant doesn't clear it, turn the caller away or ignore it; former clients can still create conflicts."
    },
    {
      "q": "An unknown caller asks, 'Can you confirm Harlow Industries is a client of your firm?' What's the best response?",
      "opts": [
        "'Yes, they are, but I can't share any other details about their matters.'",
        "'I'm not able to confirm who our clients are, but I'm happy to take a message.'",
        "'Let me check the client list and call you straight back with an answer.'",
        "'You'd need to ask Harlow Industries directly, since they're the client, not us.'"
      ],
      "a": 1,
      "r": "Confirming a client relationship can itself breach confidentiality. The safe answer neither confirms nor denies, and offers to take a message. The last option hints that they are a client."
    },
    {
      "q": "Which of these can a legal assistant do without crossing into the unauthorized practice of law?",
      "opts": [
        "Tell a client which of two settlement options is better for their situation",
        "Estimate for a caller how much their injury claim is probably worth in court",
        "Give a client the court's address, filing hours and the date of their hearing",
        "Reassure a client that cases like theirs usually win, based on past matters"
      ],
      "a": 2,
      "r": "Public procedural facts like addresses, hours and scheduled dates are fine to share. Choosing between options, valuing a claim and predicting outcomes are all legal advice."
    },
    {
      "q": "The 'Three C's' of Managing Up are:",
      "opts": [
        "Collaboration, Curiosity, Confidence",
        "Control, Coordination, Confidence",
        "Communication, Creativity, Coordination",
        "Clarity, Consistency, Credibility"
      ],
      "a": 3,
      "r": "Clarity, Consistency, and Credibility are the framework taught for managing up effectively."
    },
    {
      "q": "What are the 'Three C's of Managing Up' generally centered on?",
      "opts": [
        "Calendar, Contacts and Confidentiality: the three systems an assistant owns",
        "Communication, Consistency, and Credibility with the executive",
        "Complaining, Correcting, Confronting",
        "Coordination, Courtesy and Compliance in every message to the executive"
      ],
      "a": 1,
      "r": "Managing up effectively rests on clear communication, consistent follow-through, and earned credibility."
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
      "q": "Why is credibility described as 'earned, not claimed'?",
      "opts": [
        "Credibility comes mainly from seniority, so it grows with each promotion and title change",
        "Only executives can grant credibility explicitly",
        "One strong result under pressure earns it permanently, as long as it's noticed by the executive",
        "Credibility is built through a track record of reliable judgment over time, not by asserting it"
      ],
      "a": 3,
      "r": "Trust accumulates from consistent, reliable follow-through — it can't be claimed into existence."
    }
  ],
  "discussionQuestion": "Think of a moment (in this role or another) where you had to decide whether something was an EA-style problem or a PA-style problem. What tipped you off, and would you decide the same way again?"
};

const DAY1_EXTRA_LEARNING = {
  "1::EA vs. PA: Side-by-Side Work Context": {
    "t": "Reading the Room: Context Signals",
    "p": [
      "Channel is a clue: requests through firm email, the practice-management system, or a matter number are almost always EA work; texts about school pickup, a dinner reservation, or a family trip are PA work.",
      "Audience is a clue: if the output will be seen by clients, partners, opposing counsel, or a board, default to EA-level formality and confidentiality — even if the task itself looks small.",
      "Blended roles are common in small firms. When one person holds both, keep two separate task lists and two tones — mixing them is how a personal detail ends up in a client-facing thread."
    ]
  },
  "1::The Filtering Matrix": {
    "t": "Applying the Four Questions Under Pressure",
    "p": [
      "Revenue impact asks whether money is gained or lost if this waits a day. Legal risk asks whether a deadline, privilege, or liability is involved. Either one alone usually means 'now'.",
      "Executive authority asks whether only the attorney can decide or sign. If not, it's a candidate to delegate or handle yourself within your approved limits.",
      "Relationship sensitivity catches what the other three miss: a long-time client's minor request can deserve priority because of who is asking, not what is asked."
    ]
  },
  "1::EA vs. PA Decision Principles": {
    "t": "Side-by-Side: The EA Decision Principles",
    "p": [
      "EA principle 1 — business-critical first: anything touching revenue, deadlines, or legal exposure outranks convenience requests, including the executive's own.",
      "EA principle 2 — filter before escalating: arrive with the question already narrowed to a decision (options + recommendation), not a raw forward.",
      "EA principle 3 — document the decision: a one-line note of what was decided and why protects the executive and lets anyone else pick up the thread."
    ]
  },
  "1::Serving as Liaison & Point of Contact": {
    "t": "The Liaison Loop",
    "p": [
      "Receive: capture the request in the sender's words, including deadline and who else is involved — ambiguity at intake becomes an error at delivery.",
      "Translate: restate it for the recipient in their language — a partner needs the decision point; a vendor needs specs and timing; a family member needs the plain-English version.",
      "Close the loop: confirm back to the original sender when it's done. Most liaison failures are not wrong answers — they're silence after the handoff."
    ]
  },
  "1::Creating a Comprehensive Client Dossier": {
    "t": "What a Strong Dossier Entry Looks Like",
    "p": [
      "Specific beats general: 'Prefers aisle seats, rows 1–10, never red-eyes before court days' is usable; 'likes comfortable flights' is not.",
      "Every entry has a source and a date — 'confirmed by Elias, March' — so the next assistant knows what's verified and what may have changed.",
      "Keep sensitive items (health, family matters, finances) in a restricted section with access limited to who genuinely needs it, and never copy them into shared calendars or email."
    ]
  },
  "1::Setting Up Client Trackers": {
    "t": "Keeping Trackers Alive",
    "p": [
      "Assign an update trigger to each tracker: after every trip (Travel), after any feedback on an email (Inbox), after each recurring meeting changes (Meeting Rhythms).",
      "Add a 'last reviewed' date at the top of each tracker and review monthly — the date itself tells a colleague how far to trust the contents.",
      "Grow deliberately: add a new tracker (gift preferences, vendor contacts, key dates) only when a real need repeats, not in anticipation."
    ]
  },
  "1::The Three C's of Managing Up": {
    "t": "The Three C's in a Real Update",
    "p": [
      "Clarity in practice: open with the status and the ask — 'The filing is ready; I need your signature by 3 PM' — then add context below.",
      "Consistency in practice: use the same format for recurring updates (daily brief, weekly summary) so the executive knows exactly where to look.",
      "Credibility in practice: if you're unsure, say so and give a time you'll confirm by. One wrong 'it's done' costs more trust than ten honest 'confirming by noon'."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[1] = { day: DAY1, extraLearning: DAY1_EXTRA_LEARNING };
