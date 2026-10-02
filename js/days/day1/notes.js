/* Day 1 — trainer speaker notes for Presenter view and the Speaker Notes PDF (Admin → SOP Reference).
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
"1::EA vs. PA: Two Mindsets": {
  "p1": {
    "on": "This slide sets up the two mindsets: an EA is a strategic partner measured by the executive's efficiency and business performance, and a PA is measured by how smoothly the person's life runs. The five steps show how to route a new request, from asking \"business performance or personal logistics?\" to correcting a wrong call, and the diagram shows EA and PA side by side under \"Never conflate\".",
    "say": "Every request you get lands in one of two mindsets. An EA protects business performance; a PA protects the person's life logistics.",
    "ask": "Who here has done both EA and PA work — and when did you catch yourself using the wrong mindset?"
  },
  "p2": {
    "on": "This slide lists the best practices for each role: what EA work and PA work actually cover, and that an EA manages the executive's capacity, not just logistics. The pitfall to stress is conflating the two mindsets, the most common onboarding mistake, and the Mindset check box gives the one question that settles it.",
    "say": "Neither mindset is better than the other. The mistake is mixing them up.",
    "wrap": "When a request lands, ask one question: is this protecting the business or the person? That answer tells you how to handle it.",
    "scenario": "Name three tasks in Elias's world that look like PA work on the surface but are actually EA work once you weigh the stakes — think about his calendar, his reputation and his legal exposure."
  },
  "s1": {
    "on": "This section defines the EA as a strategic partner: every action is judged by whether it lifts the executive's efficiency and the business's performance.",
    "say": "An EA's work is measured by one thing: does it make the executive and the business perform better?",
    "ask": "What's one task you'd call EA work in a law firm?"
  },
  "s2": {
    "on": "These five steps route a new request: ask whether it protects business performance or personal logistics, check the dossier, default to the higher-stakes EA read when unsure, act in that mindset, and correct misses out loud.",
    "say": "One question routes everything: is this protecting the business, or the person's life logistics?",
    "ask": "When would you default to the EA read even if it looks personal?"
  },
  "s3": {
    "on": "This section defines the PA as the personal support specialist and lists the typical work of each role. The mindsets aren't ranked, and mixing them up is the most common onboarding mistake.",
    "say": "Neither role outranks the other. The mistake is using the wrong one.",
    "ask": "Name three tasks in Elias's world that look like PA work but are really EA work."
  }
},
"1::EA vs. PA: Side-by-Side Work Context": {
  "p1": {
    "on": "This slide explains that both roles are trusted extensions of the person they support, and what separates them is the environment and the cost of getting it wrong. The five steps cover identifying the setting, matching formality, applying the right confidentiality scope, deciding within your role, and naming it when the two contexts blend.",
    "say": "Same trust, different setting. Before you answer any request, know whether you're in a corporate or a personal context.",
    "ask": "Which is harder to read from the outside: the formality level or who actually makes the decision?"
  },
  "p2": {
    "on": "This slide makes the point that treating a board deck like an errand, or a family trip like a litigation deadline, means you've misread the room. The Go Deeper box gives three context signals: the channel a request comes through, who will see the output, and how to keep two task lists when one person holds both roles.",
    "say": "The channel and the audience usually tell you which role you're in.",
    "wrap": "Read the room before you act: channel, audience and stakes decide whether it's EA or PA work.",
    "scenario": "Elias texts you late at night: \"Book the usual table for Friday, and send the Meridian team the updated timeline.\" One message, two kinds of work. Which part is EA and which is PA, and how do you handle each?"
  },
  "s1": {
    "on": "This section says both roles are trusted extensions of the person they support. What separates them is the environment, and the cost of getting it wrong.",
    "say": "Same trust, different setting — and a different price for mistakes."
  },
  "s2": {
    "on": "These steps work through the comparison table: identify the environment, match your formality, apply the right confidentiality scope, decide within your role, and name it when the two contexts blend.",
    "say": "Know whether you're in a corporate or personal context before you answer.",
    "ask": "Which row of the table trips people up most?"
  },
  "s3": {
    "on": "This section gives the misread-the-room pitfall: treating a board deck like a household errand list, or a family trip like a litigation deadline.",
    "say": "Treat each task by its context, not by how it arrived."
  },
  "s4": {
    "on": "This section lists context signals: the channel (firm email or a matter number versus a text about school pickup), the audience (clients, partners or a board mean EA-level care), and blended roles in small firms, where you keep two task lists and two tones.",
    "say": "Channel and audience tell you which mode you're in.",
    "ask": "What's a signal that a text message is actually EA work?"
  }
},
"1::EA vs. PA Decision Principles": {
  "p1": {
    "on": "This slide gives the EA decision principles: put business-critical matters first, filter requests before escalating, and know when to negotiate or delegate. The five steps cover picking the right track, applying EA or PA principles, escalating when neither clearly fits, and reviewing your own past decisions.",
    "say": "EA and PA principles lead to different calls on the same kind of request. Decide which track you're on first.",
    "ask": "Which set of principles feels more natural to you, and what does that say about your instincts?"
  },
  "p2": {
    "on": "This slide gives the PA decision principles: honor personal preferences first, offer alternatives rather than outright denials, and keep personal matters private. The Go Deeper box sets out three EA principles side by side: business-critical first, filter before escalating, and document the decision.",
    "say": "When a decision doesn't clearly fit either set of principles, escalate instead of guessing.",
    "wrap": "Pick the track, apply its principles, and write down what you decided and why.",
    "scenario": "Elias asks you to move a client call so he can attend his daughter's recital, but the client is in a tough negotiation. Which principles apply, and what do you actually do?"
  },
  "s1": {
    "on": "This section lists the EA decision principles: business-critical matters first, filter before escalating, and know when to negotiate or delegate.",
    "say": "EA principles start with what's business-critical."
  },
  "s2": {
    "on": "These steps apply the principles: pick the track first, apply the EA or PA principles, escalate anything that fits neither, and review past decisions for habits.",
    "say": "Pick the track before you make the call.",
    "ask": "Which set of principles feels more natural to you?"
  },
  "s3": {
    "on": "This section lists the PA decision principles: honor personal preferences, offer alternatives rather than outright denials, and keep personal matters private.",
    "say": "PA principles start with the person's preferences."
  },
  "s4": {
    "on": "This section goes deeper on the EA principles: business-critical first even over the executive's own convenience, arrive with options and a recommendation rather than a raw forward, and document every decision in one line.",
    "say": "Bring a narrowed decision, not a forward."
  }
},
"1::Typical Work Environment": {
  "p1": {
    "on": "This slide lists the common settings an assistant works in: corporate offices, law and professional-services firms, remote or hybrid teams, startups and private households. The five steps cover identifying the setting, confirming its tools, and calibrating how you handle vendors, conflicts and scope creep in that setting.",
    "say": "Where you work changes what's expected of you. Learn the setting and its tools before you assume anything.",
    "ask": "Have you ever worked somewhere with no formal tech stack at all? How did that change the job?"
  },
  "p2": {
    "on": "This slide covers the standard tech stack (Outlook or Google Workspace, Slack or Teams, Clio or iManage, Asana or Trello) and the standing expectations of presence, anticipation and judgment. It then contrasts how an EA and a PA handle a vendor issue, conflicting meetings and scope creep.",
    "say": "Same situations, different responses: an EA escalates and protects business priority; a PA coordinates and confirms personal preference.",
    "wrap": "Know your setting, know its tools, and respond the way that setting expects.",
    "scenario": "A vendor misses a delivery that affects a client meeting and a family dinner on the same evening. Walk through how the EA side and the PA side of you would each handle it."
  },
  "s1": {
    "on": "This section lists the common settings: corporate offices, law and professional-services firms, remote or hybrid teams, startups and private households.",
    "say": "Each setting comes with its own expectations.",
    "ask": "Which setting have you worked in?"
  },
  "s2": {
    "on": "These steps calibrate to the setting: identify it, confirm the actual tool stack, and adjust how you handle vendor issues, meeting conflicts and scope creep as an EA versus a PA.",
    "say": "Confirm the tools and the norms. Don't assume a standard setup."
  },
  "s3": {
    "on": "This section lists the standard tech stack (Outlook or Google Workspace, Slack, Teams, Zoom, Clio, iManage, Asana), the standing expectations (presence, anticipation, judgment, irregular hours) and side-by-side EA and PA responses to vendor issues, conflicts and scope creep.",
    "say": "Same problem, two responses: the EA escalates professionally, the PA resolves directly.",
    "ask": "Who has worked somewhere with no formal tech stack at all?"
  }
},
"1::Who's Who in a Law Firm": {
  "p1": {
    "on": "This slide maps the people: partners, associates, of counsel, paralegals and assistants inside the firm, and clients, opposing counsel, clerks, chambers, court reporters and experts outside it. The steps: get the org chart, list each matter's team, learn the outside names, route by who owns the decision, and address people correctly.",
    "say": "Know who owns each decision before you pass anything on.",
    "ask": "Who would you call first if a filing deadline suddenly moved?"
  },
  "p2": {
    "on": "This slide covers courtesy to clerks and chambers, never contacting a represented party directly, and two pitfalls: assuming the most senior person decides everything, and treating paralegals as errand-runners.",
    "say": "Clerks and paralegals can make or break your day. Treat them that way.",
    "wrap": "Map the people first, and every request has somewhere to go.",
    "scenario": "A voicemail says, 'This is Mark from Harlow's side, about the deposition.' Before you call back, what do you need to know about who Mark is, and who at the firm should handle it?"
  },
  "s1": {
    "on": "This section explains the firm's ladder (partners, associates, of counsel, paralegals, assistants) and the outside people you'll deal with.",
    "say": "Every role has a different job and different limits."
  },
  "s2": {
    "on": "These steps: get the org chart, list each matter's team, learn the outside names, route by decision owner, address judges and opposing counsel correctly.",
    "say": "Write down each matter's team.",
    "ask": "Who owns the filing deadline on a matter?"
  },
  "s3": {
    "on": "This section stresses courtesy to clerks, no direct contact with a represented party, and the two pitfalls.",
    "say": "Never contact the other side's client."
  }
},
"1::The Life of a Legal Matter": {
  "p1": {
    "on": "This slide shows a matter's life cycle: intake and conflict check, engagement and retainer, investigation, pleadings, discovery, motions, settlement or trial, judgment and appeal, and closing. It contrasts transactional work: intake, engagement, drafting and negotiation, closing, post-closing. The steps tie the assistant's tasks to each stage.",
    "say": "Know the stage, and you know what's coming next.",
    "ask": "Which stage do you think generates the most deadlines?"
  },
  "p2": {
    "on": "This slide covers keeping the stage current in the tracker, preparing as if every case goes to trial, and two pitfalls: treating 'closed' as done, and using filed, served and sent loosely.",
    "say": "Closing the file is its own checklist.",
    "wrap": "Track the stage, and your tasks follow from it.",
    "scenario": "Harlow Industries has just been sued. Walk the matter through each stage: what's the first thing you do, what do you calendar next and what does closing the file involve?"
  },
  "s1": {
    "on": "This section defines a matter and lists the litigation and transactional life cycles.",
    "say": "Most matters follow the same path."
  },
  "s2": {
    "on": "These steps: note the type and stage, collect parties and dates at intake, calendar deadlines as they're triggered, build pre-trial checklists early, and close properly.",
    "say": "Calendar every deadline the moment it's triggered.",
    "ask": "What has to happen before a file can be archived?"
  },
  "s3": {
    "on": "This section says to keep the stage current, prepare for trial even when settlement is likely, and avoid the two pitfalls.",
    "say": "Filed, served and sent are three different things."
  }
},
"1::Legal Terms You'll Hear Every Day": {
  "p1": {
    "on": "This slide gives the core vocabulary: plaintiff and defendant, pro se; complaint, answer, motion, brief, affidavit, declaration; discovery, interrogatories, deposition, subpoena, stipulation. The steps: keep a glossary, look up unfamiliar terms, use exact document names, learn matter number and retainer, and notice which side the firm is on.",
    "say": "Precise words keep documents going to the right place.",
    "ask": "Which legal term have you heard and never been quite sure about?"
  },
  "p2": {
    "on": "This slide covers matching the lawyer's precision, explaining terms to clients only as the attorney has, and two pitfalls: nodding along without understanding, and using jargon with clients.",
    "say": "Defining a word is fine. Saying what it means for their case is legal advice.",
    "wrap": "Keep a glossary, use exact names and ask when you're unsure.",
    "scenario": "Elias leaves a voice note: 'Opposing counsel served interrogatories and noticed Harlow's CFO for deposition; calendar the responses and get a court reporter.' Translate it into a task list in plain English."
  },
  "s1": {
    "on": "This section says vocabulary matters and defines the parties, the documents and the process terms.",
    "say": "You need the vocabulary, not the law degree."
  },
  "s2": {
    "on": "These steps: keep a glossary, look terms up, use exact document names, learn matter number and retainer, and note which side the firm is on.",
    "say": "Use each document's exact name.",
    "ask": "What's the difference between an affidavit and a declaration?"
  },
  "s3": {
    "on": "This section says to match the lawyer's precision, not to interpret terms for clients, and warns against nodding along and using jargon.",
    "say": "Ask rather than guess."
  }
},
"1::Client Intake & Conflict Checks": {
  "p1": {
    "on": "This slide explains that a conflict check is an ethics requirement, it searches everyone involved, a prospective client gets no legal advice, and intake is where deadlines first appear. The steps: use the intake form, search every name, send hits to the attorney, flag deadlines the same day, and prepare the engagement letter once cleared.",
    "say": "Search every name, not just the client's.",
    "ask": "Why might the conflict hide in the other party's name rather than the client's?"
  },
  "p2": {
    "on": "This slide covers running the check early, recording it, and two pitfalls: searching only the client's name, and promising help before the check clears.",
    "say": "Only the attorney accepts a matter.",
    "wrap": "Check every name, record the result and flag every date.",
    "scenario": "A caller wants the firm to sue 'Northgate Logistics' over a warehouse contract and mentions the contract ended 'almost six years ago.' What do you search, what do you flag and what do you not say?"
  },
  "s1": {
    "on": "This section explains conflict checks, prospective clients and why intake is where deadlines are first spotted.",
    "say": "A conflict check is an ethics rule."
  },
  "s2": {
    "on": "These steps: use the intake form, search every name including related companies, send hits to the attorney, flag deadlines, and open the matter only after the engagement letter is signed.",
    "say": "Send every hit to the attorney.",
    "ask": "What names would you search for a new corporate client?"
  },
  "s3": {
    "on": "This section says to run the check early and record it, and warns against searching one name or promising help too soon.",
    "say": "Record what you searched and when."
  }
},
"1::Basic Communication Principles for Legal EAs": {
  "p1": {
    "on": "This slide opens with clarity and precision: legal correspondence has no room for vague language. The five steps cover identifying the audience, drafting for clarity, adjusting register for the attorney, client or court, keeping matters in their proper channel, and using standard phrases to decline or defer.",
    "say": "In legal work, a message that can be read two ways is a risk. Write for one audience, clearly.",
    "ask": "Who is hardest to write for: the attorney, the client or the court? Why?"
  },
  "p2": {
    "on": "This slide shows the same update reframed for an attorney (brief), a client (plain language) and the court (formal), and reminds trainees that confidentiality covers hallway conversations too. It ends with the standard phrases an EA and a PA use to decline or defer.",
    "say": "The facts don't change between audiences. The register does.",
    "wrap": "Clear, audience-matched and in the right channel: that's every message a legal EA sends.",
    "scenario": "Same update, three audiences. To the attorney: \"Filed the extension motion at 2 PM; court confirmation attached. No action needed from you.\" To the client: \"We've requested additional time to prepare your case properly. We'll keep you posted on next steps.\" To the court clerk: \"Please confirm receipt of the enclosed Motion for Extension of Time, filed on behalf of the Defendant.\" Read each one aloud in its own tone."
  },
  "s1": {
    "on": "This section sets the core principle: clarity and precision, because legal correspondence has no room for vague language.",
    "say": "In legal work, a sentence that can be read two ways is a risk."
  },
  "s2": {
    "on": "These steps take you through writing: identify the audience (attorney, client or court), draft for precision, adjust the register for that audience, keep the matter in its proper channel, and use the standard phrases for declining or deferring.",
    "say": "Write for who's reading: brief for the attorney, plain for the client, formal for the court.",
    "ask": "Which audience is hardest to write for?"
  },
  "s3": {
    "on": "This section shows the same case update rewritten for three audiences and gives the key EA and PA phrases for deferring. It also says confidentiality covers how you talk about a matter, hallway conversations included.",
    "say": "Listen to the same update in three registers."
  }
},
"1::Gatekeeping Is Not 'No'": {
  "p1": {
    "on": "This slide defines gatekeeping as \"not now\" or \"here's a better option\", never an outright block. The five steps cover starting from a better option, keeping a calm and confident tone, never blaming the requester, always offering a concrete next step, and handling pushback, with a diagram of the approach.",
    "say": "Gatekeeping protects the executive's time without closing the door. Every \"not now\" comes with a real next step.",
    "ask": "What's the difference between a gatekeeper people respect and one people try to get around?"
  },
  "p2": {
    "on": "This slide covers representing the executive's authority with a calm, confident tone, and pairing the Filtering Matrix with a communication toolkit: active listening, framing and appealing to shared goals. The pitfall to stress is blaming the requester for bad timing or leaving them with no next step.",
    "say": "Never make the caller feel wrong for asking, and never leave them without a next step.",
    "wrap": "Filter access, keep the tone steady, and always offer a specific way forward.",
    "scenario": "Live roleplay: the trainer plays a pushy caller demanding to speak to Elias right now. A trainee gatekeeps in real time, twice: once where they cave and once where they hold the line. Debrief the difference."
  },
  "s1": {
    "on": "This section reframes gatekeeping: it means \"not now\" or \"here's a better option,\" never a flat block.",
    "say": "A gatekeeper redirects. A wall just blocks."
  },
  "s2": {
    "on": "These steps give the gatekeeping sequence: start from \"not now,\" keep a calm and confident tone, never blame the requester's timing, always offer a concrete next step, and use the toolkit if they push back.",
    "say": "Calm, no blame, and always a real next step.",
    "ask": "What does a concrete next step sound like?"
  },
  "s3": {
    "on": "This section says you represent the executive's authority, so tone stays calm. It warns against blaming the requester and pairs the Filtering Matrix with a communication toolkit: active listening, framing, shared goals and asking for opinions.",
    "say": "When they push back, listen and frame. Don't repeat yourself louder."
  }
},
"1::The Filtering Matrix": {
  "p1": {
    "on": "This slide introduces the Filtering Matrix: sort each request by urgency and impact into do it now, delegate, defer or offer an alternative. The five steps run the four screening questions (revenue, legal risk, executive authority, relationship), then cover classifying, documenting and revisiting deferred items, with a diagram of the matrix.",
    "say": "Four questions decide where a request goes: revenue impact, legal risk, need for executive authority, and relationship sensitivity.",
    "ask": "If a request scores high on just one of the four questions, what should happen to it?"
  },
  "p2": {
    "on": "This slide restates the four screening questions. The Go Deeper box explains how to apply them under pressure: revenue and legal risk usually decide on their own, executive authority tells you what to delegate, and relationship sensitivity catches what the other three miss.",
    "say": "One high-stakes answer is enough to make something urgent.",
    "wrap": "Run every request through the four questions, write down how you classified it, and come back to anything you deferred.",
    "scenario": "Four requests arrive at once: a long-time client asking a small billing question, a vendor wanting a contract signed today, opposing counsel proposing a deposition date, and a colleague asking Elias to speak at a lunch. Put each one through the four questions as a group."
  },
  "s1": {
    "on": "This section introduces the matrix: sort each request by urgency and impact into do it now, delegate, defer or offer an alternative.",
    "say": "Four outcomes for every request: do, delegate, defer or offer an alternative."
  },
  "s2": {
    "on": "These steps run each request through four screening questions (revenue impact, legal risk, need for executive authority, relationship sensitivity). One high score means do it now. Document the call and follow up on deferrals.",
    "say": "One high-stakes answer is enough to act now.",
    "ask": "What happens to a deferred item nobody revisits?"
  },
  "s3": {
    "on": "This section restates the four screening questions as the core of the matrix.",
    "say": "Revenue, legal, authority, relationship."
  },
  "s4": {
    "on": "This section applies the questions under pressure: revenue and legal risk each justify acting now, authority decides whether you can delegate, and relationship sensitivity catches a long-time client's small request.",
    "say": "Relationship sensitivity catches what the other three miss.",
    "ask": "Can you think of a small request that deserves priority because of who's asking?"
  }
},
"1::Scripts That Redirect Without Alienating": {
  "p1": {
    "on": "This slide introduces the three redirect scripts, starting with Deferring: acknowledge the request genuinely and propose a concrete next step with a timeline. The five steps cover choosing between Deferring, Re-routing and Drastic Contrast, how to deliver each one, and getting a small agreement first.",
    "say": "Three scripts cover most redirects: Deferring, Re-routing and Drastic Contrast. Pick the one that fits the situation.",
    "ask": "When is Re-routing the right choice instead of Deferring?"
  },
  "p2": {
    "on": "This slide covers Re-routing (point to the right team while staying accountable) and Drastic Contrast (state the real constraint honestly and offer a specific alternative). It also ties the scripts to influence principles: getting a small agreement first, and citing process rather than personal authority.",
    "say": "Whichever script you use, stay accountable until the request actually lands somewhere.",
    "wrap": "Acknowledge, redirect with something specific, and own the handoff.",
    "scenario": "One scenario, three scripts: a senior partner asks for 30 minutes with Elias this afternoon, and his calendar is full. Three volunteers each deliver one script — Deferring, Re-routing, Drastic Contrast — to the same request."
  },
  "s1": {
    "on": "This section introduces the first script, Deferring: acknowledge genuinely and propose a concrete next step with a timeline.",
    "say": "Deferring: acknowledge, then give a real time."
  },
  "s2": {
    "on": "These steps match the script to the situation: Deferring when a request is valid but mistimed, Re-routing when someone else owns it, Drastic Contrast when the constraint is real. Get a small agreement first.",
    "say": "Pick the script that fits why you can't say yes right now.",
    "ask": "Which script would you use for a partner who wants Elias in an hour?"
  },
  "s3": {
    "on": "This section covers the other two scripts. Re-routing points to the right team while you stay accountable, and Drastic Contrast states the real constraint and offers a specific slot. Both draw on consistency and authority.",
    "say": "Re-routing keeps you accountable. Drastic Contrast stays honest."
  }
},
"1::Phone & Voicemail Etiquette": {
  "p1": {
    "on": "This slide says the phone shapes a client's first impression, a complete message has seven parts (who, from where, number, matter, need, urgency, best time), and confidentiality applies on calls. The steps: answer with the firm and your name, take and read back the message, transfer warmly, leave clear voicemails without confidential details, log and return calls within a business day.",
    "say": "If the attorney can't act on it, it isn't a message.",
    "ask": "What's the most useless phone message you've ever received?"
  },
  "p2": {
    "on": "This slide covers tone, keeping your voicemail greeting current, and two pitfalls: confirming a client relationship to an unknown caller, and incomplete messages.",
    "say": "Never confirm who the firm's clients are to an unknown caller.",
    "wrap": "Answer well, take all seven parts and protect confidentiality.",
    "scenario": "A caller says, 'I'm a reporter. Is Harlow Industries one of your clients? I just need a yes or no.' What exactly do you say, and what do you do after the call?"
  },
  "s1": {
    "on": "This section explains the phone's role in first impressions, the seven parts of a message and confidentiality on calls.",
    "say": "A complete message has seven parts."
  },
  "s2": {
    "on": "These steps: answer properly, take and read back the full message, transfer warmly, leave clear voicemails, and log and return calls.",
    "say": "Read the number back every time.",
    "ask": "What do you leave out of a voicemail?"
  },
  "s3": {
    "on": "This section covers tone, your voicemail greeting and the two pitfalls.",
    "say": "Don't confirm clients to strangers."
  }
},
"1::Executive Presence in Action": {
  "p1": {
    "on": "This slide shows how the same sensitive request gets a different response depending on your role. The five steps cover identifying EA or PA mode, the authoritative EA reply (\"I cannot release that information; I'll escalate internally\"), the warm PA reply, handling a persistent requester, and \"protect first, resolve second\", with a diagram.",
    "say": "An EA's answer protects the business; a PA's answer protects the person. The instinct underneath is the same.",
    "ask": "Which response feels more natural to you: authoritative and brief, or warm and accommodating?"
  },
  "p2": {
    "on": "This slide sums up the two responses to a sensitive request: the EA's is authoritative, brief and procedural, and the PA's is warm and relationship-first. It closes on the shared instinct under both: protect first, resolve second.",
    "say": "Delivery changes with the role. Protect first, resolve second, never changes.",
    "wrap": "Choose your register for the role, but always protect before you try to resolve.",
    "scenario": "A journalist calls asking whether Elias is handling a high-profile client's divorce. Two volunteers respond back to back to the same prompt, one as an EA and one as a PA."
  },
  "s2": {
    "on": "These steps show one sensitive request handled two ways: in EA mode, authoritative and procedural (\"I'll escalate internally\"); in PA mode, warm and accommodating (\"I can help with logistics\"). Both protect first and resolve second.",
    "say": "Different words, same instinct: protect first, resolve second.",
    "ask": "What changes between the EA and PA response — and what stays the same?"
  },
  "s1": {
    "on": "This section puts the EA and PA responses side by side for the same two triggers: a sensitive request for confidential information and a persistent caller pushing for time. The EA answer is authoritative and procedural; the PA answer is warm and relationship-first.",
    "say": "Same two situations, two very different replies.",
    "ask": "Which of the two replies would you find harder to deliver?"
  }
},
"1::Virtual Meetings & Transcription Accuracy": {
  "p1": {
    "on": "This slide starts with the rule to test recording software before the meeting, not during it. The five steps cover assigning a human note-taker as backup, capturing only decisions and action items, cleaning any AI transcript before it goes anywhere, and sending the executive a short briefing memo.",
    "say": "The meeting record can't depend on technology alone. Test it before, back it up with a person, and clean it after.",
    "ask": "Has a meeting ever ended with nobody agreeing on what was actually decided?"
  },
  "p2": {
    "on": "This slide contrasts Informal Notes (internal only) with Formal Minutes (the distributed record), and describes the Executive Briefing Memo that replaces a full transcript. The pitfalls to stress are distributing a raw AI transcript and capturing side conversations or off-the-record remarks.",
    "say": "Never send a raw transcript. Your job is to review it and turn it into the right document.",
    "wrap": "Decisions and action items, reviewed and cleaned, in a short memo: that's the meeting record.",
    "scenario": "Elias's partners' meeting ran long, the AI transcript is 40 pages, and two people remember the key decision differently. What do you send, to whom, and how do you settle what was decided?"
  },
  "s1": {
    "on": "This section's principle: test the recording software before the meeting, not during it.",
    "say": "Test the tech before anyone joins."
  },
  "s2": {
    "on": "These steps run a meeting: test recording first, assign a human note-taker as backup, capture decisions and action items only, clean any AI transcript before sharing, and send the executive a short briefing memo.",
    "say": "Decisions and actions go in the record. Side conversations don't.",
    "ask": "Who's your backup if the transcript fails?"
  },
  "s3": {
    "on": "This section covers documentation: Informal Notes versus Formal Minutes, fixing unclear minutes by revising the template, never distributing a raw AI transcript, and the \"Executive Brief\" memo format.",
    "say": "Never send an AI transcript you haven't cleaned.",
    "ask": "Has a meeting ever ended with nobody agreeing what was decided?"
  }
},
"1::Professional Standards & Confidentiality": {
  "p1": {
    "on": "This slide explains that EAs protect business confidentiality (contracts, IP, financials) with awareness of legal, HR and data-privacy rules. The five steps cover identifying the confidentiality tier, applying compliance proactively, protecting personal privacy through discretion, treating every channel the same, and treating anything uncertain as confidential.",
    "say": "Business confidentiality and personal privacy are protected differently, but both are protected every time.",
    "ask": "Has a confidentiality slip ever felt minor at the time but turned out not to be? No details needed, just a nod."
  },
  "p2": {
    "on": "This slide covers how PAs protect personal privacy through trust, and that there's no minor version of a confidentiality lapse. The No small leaks box makes the point: a casual comment in the wrong hallway carries the same risk as a misdirected email.",
    "say": "A hallway comment and a misdirected attachment carry the same risk.",
    "wrap": "If you're not sure whether something is confidential, treat it as if it is.",
    "scenario": "In the building lobby, a friendly paralegal from another firm asks, \"Is Elias on the Meridian matter? I heard it's getting messy.\" What do you say, and what do you avoid saying?"
  },
  "s1": {
    "on": "This section says EAs protect business confidentiality (contracts, IP, financials) with awareness of legal, HR and data-privacy rules.",
    "say": "Business confidentiality comes with real rules."
  },
  "s2": {
    "on": "These steps set the confidentiality habits: identify the tier (business or personal), apply compliance proactively, default to discretion for personal matters, treat every channel the same, and assume it's confidential when unsure.",
    "say": "When in doubt, treat it as confidential."
  },
  "s3": {
    "on": "This section says PAs protect personal privacy through trust, and there's no minor version of a lapse: a hallway comment carries the same risk as a misdirected attachment.",
    "say": "There's no such thing as a small leak.",
    "ask": "Has a slip ever felt minor at the time but wasn't? A nod is enough."
  }
},
"1::Boundaries & Authorization Protocols": {
  "p1": {
    "on": "This slide explains that clear scope, written agreements and checklists prevent role overlap. The five steps cover checking every money, access or commitment request against your limits, acting within them, escalating above them, keeping business and personal systems separate, and the policy, law and trust check, with a diagram.",
    "say": "Know your limits in writing. Act within them, and escalate anything above them before you act.",
    "ask": "What's the risk of acting on something because it will \"probably be approved anyway\"?"
  },
  "p2": {
    "on": "This slide gives concrete limits, such as an EA approving vendor invoices under $500 and escalating above it, plus keeping business and personal systems physically separate. It includes escalation examples for both roles and a checklist for unclear cases: does this comply with policy, law and trust?",
    "say": "If the answer to \"policy, law and trust?\" is no or unsure, escalate.",
    "wrap": "Written limits, separate systems, and escalation whenever you're in doubt.",
    "scenario": "You just approved a $600 vendor invoice by mistake — your limit is $500. What do you do in the next 10 minutes?"
  },
  "s1": {
    "on": "This section's principle: clear scope, written agreements and checklists prevent role overlap.",
    "say": "Write the boundaries down so nobody has to guess."
  },
  "s2": {
    "on": "These steps check any money, access or commitment request against your limits: act and document within them, escalate above them, keep business and personal systems separate, and run the policy-law-trust check when unsure.",
    "say": "Over the limit means escalate first, act second.",
    "ask": "You just approved a $600 invoice with a $500 limit. What do you do?"
  },
  "s3": {
    "on": "This section gives concrete examples: an EA approves invoices under $500 and escalates above, a PA books travel within budget, both pause on contracts or account access that need approval, and the policy-law-trust checklist.",
    "say": "Policy, law and trust — if any answer is no, escalate."
  }
},
"1::What an Assistant Can and Can't Do (Unauthorized Practice of Law)": {
  "p1": {
    "on": "This slide says only a licensed lawyer can advise, set fees, accept cases, sign court papers or appear in court; lawyers must supervise non-lawyers; and the line is interpretation. The steps list what an assistant can and can't do, the bridge line, passing on advice word for word, and treating any doubt as advice.",
    "say": "Facts and scheduling are yours. Interpretation is the attorney's.",
    "ask": "Where do you think the line is hardest to see?"
  },
  "p2": {
    "on": "This slide covers redirecting warmly, recording the client's exact question, and two pitfalls: experience-based reassurance and filling in a legal form's answers for a client.",
    "say": "Reassurance based on your experience is still advice.",
    "wrap": "Relay, schedule and gather. Route every 'what should I do?' to the attorney.",
    "scenario": "A client calls: 'The other side offered $40,000. Elias is in trial all week. Just between us, should I take it?' Write exactly what you say."
  },
  "s1": {
    "on": "This section defines UPL, the lawyer's duty to supervise, and interpretation as the line.",
    "say": "Only a lawyer can give legal advice."
  },
  "s2": {
    "on": "These steps list what you can and can't do, give a bridge line, and say to relay advice word for word and treat doubt as advice.",
    "say": "Quote the attorney exactly.",
    "ask": "Is telling a client a court's filing hours legal advice?"
  },
  "s3": {
    "on": "This section covers warm redirection, recording the exact question, and the two pitfalls.",
    "say": "Collect information; the attorney decides."
  }
},
"1::NDAs & Non-Disclosure Discipline": {
  "p1": {
    "on": "This slide explains that an NDA is a legal contract defining what's protected, who's bound, for how long and what happens if it's breached. The five steps cover checking an NDA is on file before sharing, confirming its scope and term, pausing when coverage is unclear, keeping a searchable NDA record, and flagging uncleared access requests.",
    "say": "An NDA isn't a formality. Before you share anything sensitive, confirm one is on file and covers this request.",
    "ask": "If someone asked right now whether a specific vendor has a signed NDA, could you find out in under two minutes?"
  },
  "p2": {
    "on": "This slide explains that the EA's job is tracking NDAs, not drafting them: knowing who has one on file before anything is shared. The pitfalls to stress are treating every NDA as permanent, blanket protection (they expire and have limited scope), and sharing when you can't confirm coverage.",
    "say": "NDAs expire and have limits. If you can't confirm coverage, pause and verify.",
    "wrap": "Track who's covered, for what and until when, and verify before you share.",
    "scenario": "A new IT contractor asks for the client list to \"set up the new CRM\" and says legal already has their paperwork. You can't find an NDA in the tracker. What do you do?"
  },
  "s1": {
    "on": "This section explains that an NDA is a legal contract defining what's protected, who's bound, for how long and what happens on breach.",
    "say": "An NDA is a contract, not a formality."
  },
  "s2": {
    "on": "These steps check before sharing: confirm an NDA is on file for that person or entity, confirm its scope and term, pause if you can't verify, keep a searchable record, and flag unexpected requests.",
    "say": "No confirmed NDA, no sensitive information.",
    "ask": "Could you find out in two minutes whether a vendor has an NDA?"
  },
  "s3": {
    "on": "This section says the EA's role is tracking NDAs, not drafting them. NDAs expire and have limited scope, and when you can't confirm coverage, the answer is \"not yet.\"",
    "say": "NDAs expire and have limits. Check both."
  }
},
"1::Command Hierarchy": {
  "p1": {
    "on": "This slide shows the command hierarchy as a four-step sequence: Notice a potential issue early, Assess its scope and urgency, Escalate through the correct channel, and Inform so the executive hears it from you first. The steps are meant to be followed in order, not picked from.",
    "say": "When something looks wrong, you don't decide it alone. Notice, assess, escalate through the right channel, and make sure Elias hears it from you first.",
    "ask": "In your own words, what does \"escalating instead of deciding alone\" actually look like?"
  },
  "p2": {
    "on": "This slide covers three practices: escalate potential issues rather than deciding alone, watch for red flags such as a confidential document skipping legal review before it reaches a client, and make sure executives hear critical news from you first, not secondhand.",
    "say": "The worst way for Elias to learn about a problem is from someone else.",
    "wrap": "Notice, assess, escalate, inform: every time, in that order.",
    "scenario": "You notice a draft settlement letter was emailed to the client before the supervising partner reviewed it. Walk through Notice, Assess, Escalate and Inform: who do you tell, in what order, and what do you say?"
  },
  "s1": {
    "on": "This section explains that the hierarchy is a sequence: follow the steps in order rather than treating them as optional.",
    "say": "Follow the chain in order."
  },
  "s2": {
    "on": "This section walks the escalation sequence shown in the diagram, step by step, from who you tell first to who decides.",
    "say": "Escalate up the chain, one step at a time.",
    "ask": "In your own words, what does escalating rather than deciding alone look like?"
  },
  "s3": {
    "on": "This section gives the core rules: escalate rather than decide alone, a confidential document skipping legal review is a red flag, and executives should hear critical news from you first.",
    "say": "The executive should hear it from you first."
  }
},
"1::Command Hierarchy Across Different Tracks": {
  "p1": {
    "on": "This slide shows the chain of command in three tracks: corporate (CEO → Senior EA → EA → Administrative Assistant), legal (Managing Partner → Senior Legal Assistant → Legal EA → Paralegal) and household (Family Head → Senior PA → PA → household staff). The steps cover identifying your track first and escalating through both chains when a situation spans two, with an org-chart diagram.",
    "say": "The chain of command depends on the track you're in, and the legal chain is the strictest.",
    "ask": "Which of the three tracks matches your current or most recent job?",
    "wrap": "Identify the track, follow its chain, and when a matter spans two tracks, escalate through both.",
    "scenario": "Elias's housekeeper tells you a process server came to the house with papers for Elias. This is a household matter with legal exposure. Which chains of command do you use, and who hears first?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Identify the track, follow its chain, and when a matter spans two tracks, escalate through both.",
    "scenario": "Elias's housekeeper tells you a process server came to the house with papers for Elias. This is a household matter with legal exposure. Which chains of command do you use, and who hears first?"
  },
  "s1": {
    "on": "This section shows the corporate chain of command: CEO or President, Senior EA, EA, Administrative Assistant.",
    "say": "The corporate track has its own chain."
  },
  "s2": {
    "on": "These steps route escalations by track: identify corporate, legal or household, follow that chain (the legal one is strictest), and when a matter spans two tracks, escalate through both.",
    "say": "Identify the track, then follow its chain.",
    "ask": "Which track matches your current or last job?"
  }
},
"1::Serving as Liaison & Point of Contact": {
  "p1": {
    "on": "This slide explains the liaison role: being the one clear point of contact who connects two parties who both need something. The five steps cover understanding what each side needs, restating information for the receiver, giving each contact one clear owner, telling liaison work apart from gatekeeping, and checking back after the handoff, with a diagram.",
    "say": "Gatekeeping filters what reaches Elias. Liaison work connects people who both need something, through you.",
    "ask": "Think of a time information got garbled passing through a middle person. What would have prevented it?"
  },
  "p2": {
    "on": "This slide explains the value of the liaison: other staff and outside contacts have one clear person to reach instead of guessing who owns a question. The Go Deeper box sets out the Liaison Loop: receive the request in the sender's words, translate it for the recipient, and close the loop by confirming back when it's done.",
    "say": "Most liaison failures aren't wrong answers. They're silence after the handoff.",
    "wrap": "Receive, translate, close the loop: the handoff isn't done until both sides know it landed.",
    "scenario": "A client's CFO asks you to get Elias's sign-off on revised deal terms by Thursday, and the opposing firm's paralegal needs the same document for a filing. Walk through the Liaison Loop for both sides."
  },
  "s2": {
    "on": "These steps set out the liaison habits: understand what each party needs, restate information in your own words, give each contact one clear owner, know gatekeeping from liaison work, and check back after a handoff.",
    "say": "Understand it, restate it, own it, check it landed.",
    "ask": "When has information been garbled passing through a middle person?"
  },
  "s3": {
    "on": "This section says being the liaison gives everyone one clear person to reach instead of guessing who owns a question.",
    "say": "One clear point of contact saves everyone time."
  },
  "s4": {
    "on": "This section gives the Liaison Loop: receive the request in the sender's words, translate it for the recipient, and close the loop with the sender. Most failures are silence after the handoff.",
    "say": "Most liaison failures are silence after the handoff."
  },
  "s1": {
    "on": "This section contrasts gatekeeping (filtering what reaches the executive and deciding what waits, which is protective) with liaison work (connecting two parties and carrying information accurately both ways, which is facilitative).",
    "say": "Gatekeeping protects access. Liaison work connects people."
  }
},
"1::The Liaison Skill in Practice": {
  "p1": {
    "on": "This slide covers the core liaison skill: accurate two-way relay, passing a request to the executive without distorting it and passing the answer back without softening or embellishing it. The steps cover restating accurately, routing to the right track, watching your pace so you don't become a bottleneck, and checking back when unsure.",
    "say": "Your job as liaison is to carry the message exactly, in both directions, and quickly.",
    "ask": "What's the difference between a liaison who's thorough and one who's just slow?",
    "wrap": "Accurate, undistorted and fast: a liaison who becomes a bottleneck has failed as much as one who lets everything through.",
    "scenario": "Elias's reply to a partner's long request is one word: \"No.\" How do you relay that back accurately without softening it into a maybe or making it sound harsher than he meant?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Accurate, undistorted and fast: a liaison who becomes a bottleneck has failed as much as one who lets everything through.",
    "scenario": "Elias's reply to a partner's long request is one word: \"No.\" How do you relay that back accurately without softening it into a maybe or making it sound harsher than he meant?"
  },
  "s1": {
    "on": "This section names the core skill: accurate two-way relay, carrying the request up and the answer back without softening or distorting either.",
    "say": "Relay it accurately, both ways."
  },
  "s2": {
    "on": "These steps practice the relay: restate the request without editorializing, pass the answer back with the same discipline, route it to the right track, keep your pace up, and check back when unsure.",
    "say": "No softening, no embellishing, no bottleneck.",
    "ask": "What's the difference between a thorough liaison and a slow one?"
  }
},
"1::Bulletproof Basics": {
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
"1::The Three C's of Managing Up": {
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
"1::Credibility Is Earned, Not Claimed": {
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
"1::Client Profiling": {
  "p1": {
    "on": "This slide defines a client profile as the reference you build once so you never ask the same question twice. The five steps work through its categories in order: role and organization, communication style, meeting and scheduling rules, travel preferences, and quirks written in plain, non-judgmental language.",
    "say": "A client profile means you never ask Elias the same question twice.",
    "ask": "Without looking, can you name Elias's firm, one family member and one of his standing rules?"
  },
  "p2": {
    "on": "This slide lists the five profile categories and gives a worked model for Elias Thorne, CEO of Thorne & Partners: a blunt, direct communicator who travels heavily to D.C., London and Singapore and expects anticipation rather than instruction.",
    "say": "This is the first topic that builds on itself. Everything later assumes you know Elias.",
    "wrap": "Five categories, filled in once and kept current, so every interaction starts from what you already know.",
    "scenario": "Worked profile, Elias Thorne, Managing Owner & CEO of Thorne & Partners Law Group: a 450-attorney firm in corporate litigation, white-collar defense and international arbitration. Using this profile, what would you never need to ask him again?"
  },
  "s1": {
    "on": "This section defines a client profile as the reference you build once so you never ask the same question twice.",
    "say": "Build it once and never ask twice."
  },
  "s2": {
    "on": "These steps build the profile in order: role and organization, communication style, meeting and scheduling rules, travel preferences, then quirks in plain, non-judgmental language.",
    "say": "Five categories, filled in order.",
    "ask": "Which category do assistants most often get wrong?"
  },
  "s3": {
    "on": "This section lists the five categories and shows Elias Thorne's worked profile: a blunt, direct CEO who travels often and expects anticipation over instruction.",
    "say": "This is Elias. Everything from here builds on him.",
    "ask": "Can everyone name Elias's firm, his family and one standing rule?"
  }
},
"1::Creating a Comprehensive Client Dossier": {
  "p1": {
    "on": "This slide walks through building a dossier section by section: Firm & Role, Personal & Family (only what's relevant), Standing Instructions written as rules, and Known Quirks in plain language. The last step is the test: could someone who has never met this person run the account from the document alone? A diagram shows the four sections.",
    "say": "A dossier goes deeper than a profile. Someone who has never met Elias should be able to run his account from it.",
    "ask": "Which of the four sections would be hardest to fill in accurately without meeting the executive?"
  },
  "p2": {
    "on": "This slide explains that a dossier is a living document that lets anyone run the account with no ramp-up, organized in four sections. The Go Deeper box shows what a strong entry looks like: specific rather than general, sourced and dated, with sensitive items kept in a restricted section.",
    "say": "\"Prefers aisle seats, rows 1–10, never red-eyes before court days\" is usable. \"Likes comfortable flights\" isn't.",
    "wrap": "Specific, sourced, dated and restricted where it needs to be: that's a dossier someone else can actually use.",
    "scenario": "You're handing Elias's account to a substitute EA for two weeks. Which three dossier entries would they be most likely to get wrong, and how would you write each one so they can't?"
  },
  "s2": {
    "on": "These steps build the dossier in four sections: Firm & Role, Personal & Family (only what's relevant), Standing Instructions as procedural rules, and Known Quirks in plain language. Then test whether a stranger could run the account from it.",
    "say": "Could someone who's never met him run the account from this?"
  },
  "s3": {
    "on": "This section says a dossier goes deeper than a profile: a living document that lets anyone run the account with no ramp-up, in four sections.",
    "say": "A dossier means zero ramp-up for whoever's next.",
    "ask": "Which section is hardest to fill in without meeting the executive?"
  },
  "s4": {
    "on": "This section shows what a strong entry looks like: specific beats general, every entry has a source and date, and sensitive items stay in a restricted section.",
    "say": "Specific, sourced and dated — and sensitive items kept restricted."
  },
  "s1": {
    "on": "This section shows the dossier's four building blocks as cards: Firm & Role, Personal & Family (only what's relevant), Standing Instructions (rules that don't change day to day) and Known Quirks (patterns written without judgment).",
    "say": "Four sections, each with a clear job.",
    "ask": "Which of the four would you fill in first?"
  }
},
"1::Dossier Excerpt — Elias Thorne": {
  "p1": {
    "on": "This slide shows a real excerpt from Elias's dossier: the 15-minute debrief buffer after key sessions, a strict Paleo diet, 5:30 AM voice notes that need an 8 AM agenda, and aisle seats only. The steps show how to turn a raw fact into an entry: place it in the right section, explain why it matters, and write it for someone who has never met him.",
    "say": "Every fact in a dossier needs its reason attached. A rule without the why gets broken.",
    "ask": "Why does the 15-minute debrief buffer matter enough to be a standing instruction?"
  },
  "p2": {
    "on": "This slide explains that each of the four dossier sections prevents a different failure: wrong professional context, a missed personal sensitivity, a broken hard rule, or a misread personality. The pitfall to stress is pasting facts under headings without saying why each one matters operationally.",
    "say": "Anyone can paste facts under headings. A good dossier explains why each fact matters.",
    "wrap": "Right section, the reason attached, written for a stranger: that's a dossier entry.",
    "scenario": "Build one dossier section live as a group from these raw facts: mandatory 15-minute debrief buffer after every key client or court session; strict Paleo diet, zero dairy, with every client dinner vetted in advance. Write each entry with the reason it matters."
  },
  "s1": {
    "on": "This section gives the real excerpt: a 15-minute debrief buffer after key sessions, a strict Paleo diet, 5:30 AM voice notes needing an 8 AM agenda, and aisle seats only.",
    "say": "These are real rules you'll use all ten days."
  },
  "s2": {
    "on": "These steps turn raw facts into entries: place each fact in the right section, write why it matters operationally, check it against the failure it prevents, and write for someone who's never met Elias.",
    "say": "Write the why, not just the what.",
    "ask": "Why does the debrief buffer matter operationally?"
  },
  "s3": {
    "on": "This section explains that each dossier section prevents a different failure (wrong context, a missed sensitivity, a broken rule, a misread personality) and that a good dossier explains why each fact matters.",
    "say": "Each section prevents a different kind of mistake."
  }
},
"1::Setting Up Client Trackers": {
  "p1": {
    "on": "This slide explains that a tracker turns the dossier into a live tool, updated in real time. The five steps start with three trackers (Travel Preferences, Inbox Preferences and Meeting Rhythms), say what to log in each, and stress updating as you learn, with a diagram of the three trackers.",
    "say": "The dossier is the reference; trackers are the live tools. Start with three: travel, inbox and meeting rhythms.",
    "ask": "If you only had time to build one tracker for Elias, which would it be, and why?"
  },
  "p2": {
    "on": "This slide makes the point that a tracker with stale entries is worse than none, because it creates false confidence. The Go Deeper box covers keeping trackers alive: give each one an update trigger, add a \"last reviewed\" date, and only add a new tracker when a real need repeats.",
    "say": "An out-of-date tracker is worse than no tracker at all.",
    "wrap": "Three trackers, each with an update trigger and a last-reviewed date.",
    "scenario": "Tracker entries for Elias. Travel: aisle seat near the front, no connecting flights, monitor delays and rebook without being asked. Inbox: BLUF only, detailed briefs attached separately. His London flight is delayed three hours. What does the tracker tell you to do, before he asks?"
  },
  "s1": {
    "on": "This section says a tracker turns the dossier into a live tool, updated in real time.",
    "say": "The dossier is the reference. The tracker is the live tool."
  },
  "s2": {
    "on": "These steps build the three starter trackers: Travel Preferences (seat, connections, rebooking), Inbox Preferences (BLUF body, details attached) and Meeting Rhythms (no back-to-backs, buffers), all updated in real time.",
    "say": "Start with three, and keep them current.",
    "ask": "Which tracker would you build first?"
  },
  "s3": {
    "on": "This section says to start with the three trackers and warns that a stale tracker is worse than none, because it creates false confidence.",
    "say": "A stale tracker is worse than no tracker."
  },
  "s4": {
    "on": "This section keeps trackers alive: give each an update trigger, add a \"last reviewed\" date and review monthly, and only add new trackers when a need repeats.",
    "say": "A \"last reviewed\" date tells everyone how far to trust it."
  }
},
"1::Why One Client, All Ten Days": {
  "p1": {
    "on": "This slide explains why every exercise uses Elias Thorne: in a real role your value compounds, and what you learn on Day 1 shapes every later day. The five steps cover treating Day 1 facts as material that will be tested again, recalling rather than re-reading, flagging contradictions, and knowing his rules from memory by the end.",
    "say": "Everything you learned about Elias today comes back on every day that follows.",
    "ask": "What's one thing about Elias you're worried you'll forget by Day 5?"
  },
  "p2": {
    "on": "This slide covers two practices: treat an inconsistency across days as a bug to flag, not permission to reinvent the client, and remember that the same instructions, family and quirks carried across ten days are what make this a tenure simulation rather than a set of separate exercises.",
    "say": "If something contradicts the dossier, flag it. Don't reinvent Elias.",
    "wrap": "One client, ten days: what you learn compounds.",
    "scenario": "Write down the room's answers to \"What's one thing about Elias you're worried you'll forget by Day 5?\" and revisit the list on Day 5."
  },
  "s1": {
    "on": "This section explains why every exercise uses Elias Thorne: in a real role your knowledge compounds, and Day 1's rules shape everything that follows.",
    "say": "Your knowledge of Elias compounds every day."
  },
  "s2": {
    "on": "These steps use the continuity: treat Day 1 facts as things you'll be tested on, recall them rather than re-read, flag contradictions to the trainer, and aim to describe Elias from memory by Day 10.",
    "say": "Recall it rather than re-reading it. That's the practice.",
    "ask": "What's one thing about Elias you're worried you'll forget by Day 5?"
  },
  "s3": {
    "on": "This section says to treat inconsistencies as bugs to flag, and that carrying one client through all ten days is what makes this a tenure simulation rather than a set of lessons.",
    "say": "Flag inconsistencies. Don't reinvent the client."
  }
},
"1::The ACT Email Framework": {
  "p1": {
    "on": "This slide introduces the ACT email, which turns a fast, tangled request into a clear reply. The steps cover Acknowledge (restate the request in your own words), Clarify (ask only what you can't infer, after checking the dossier) and Timeline (what happens, by when and who owns it), all written BLUF-style and sent promptly, with a diagram.",
    "say": "When Elias fires off a messy request, reply with ACT: Acknowledge what you heard, Clarify only what's missing, and give a Timeline.",
    "ask": "Why is \"Got it, thanks!\" not an acknowledgement?"
  },
  "p2": {
    "on": "This slide explains each part of ACT: Acknowledge means restating the ask, and Clarify means only asking what the dossier doesn't answer. The pitfall to stress is a timeline with no clear owner or date, the most common reason a request stalls, and the callout ties ACT to how Elias reads.",
    "say": "A timeline with no owner or date is where requests go to die.",
    "wrap": "Acknowledge, Clarify, Timeline: this is the framework for today's ACT email exercise.",
    "scenario": "Elias's 5:30 AM voice note: \"Move the Meridian call, get me something on the Singapore thing, and find out why the retainer invoice hasn't gone out.\" Draft the ACT reply."
  },
  "s1": {
    "on": "This section explains why ACT exists: executives like Elias ask in fast, partial, tangled requests, and an ACT email turns that into a clear, confirmed plan.",
    "say": "ACT turns a tangled request into a clear plan."
  },
  "s2": {
    "on": "These steps are the framework: Acknowledge by restating the ask, Clarify only what you can't infer (check the dossier first), and close with a Timeline and owner, all BLUF-style and sent promptly.",
    "say": "Acknowledge, Clarify, Timeline.",
    "ask": "Why isn't \"Got it, thanks!\" an acknowledgement?"
  },
  "s3": {
    "on": "This section sharpens each step: restate the ask in your own words, never ask what the dossier already answers, and always give a date and owner, because a missing owner is the top reason requests stall.",
    "say": "No owner and no date means it stalls."
  }
},
"1::BLUF: Bottom Line Up Front": {
  "p1": {
    "on": "This slide defines BLUF: the first sentence carries the point, whether that's the decision needed, the answer or the action taken, and everything after it is supporting detail. The five steps cover writing the first line, labelling the ask, adding only the details needed to act, moving background down, and ending with the exact next step and deadline, with a pyramid diagram.",
    "say": "If Elias only reads your first line, he should know what you need and by when.",
    "ask": "When you write an update, do you usually lead with the decision or with the background?"
  },
  "p2": {
    "on": "This slide explains why BLUF matters: executives read the preview line on a phone, so an ask in paragraph three effectively doesn't exist. The pitfalls to stress are mistaking BLUF for bluntness and writing in the order things happened instead of the order the reader needs, and the one-line test callout closes the slide.",
    "say": "BLUF isn't rude. It's respecting the reader's time.",
    "wrap": "The one-line test: if the first line doesn't say what you need and by when, it isn't BLUF yet.",
    "scenario": "Read a real rambling update aloud: three paragraphs about a courier delay before the question \"Should we refile tomorrow?\" In 60 seconds, the room rewrites only the first sentence."
  },
  "s1": {
    "on": "This section defines BLUF: the first sentence carries the point — the decision, the answer or the action taken — and everything after it is supporting detail.",
    "say": "The first sentence carries the point."
  },
  "s2": {
    "on": "These steps write a BLUF message: finish \"the one thing Elias needs to know is…,\" label the ask, add only the details needed to act, move background below, and end with the next step and deadline.",
    "say": "Label the ask: Decision needed, FYI or Action taken.",
    "ask": "Can someone rewrite a rambling first line in 60 seconds?"
  },
  "s3": {
    "on": "This section explains why it matters (executives read the preview line on a phone), says BLUF isn't rude, just respectful of time, and warns against writing in chronological order.",
    "say": "Write in the order the reader needs it, not the order it happened."
  }
},
"1::BLUF in Practice: Emails, Updates & Voice Notes": {
  "p1": {
    "on": "This slide shows BLUF working across every channel: subject lines, Slack messages, status updates, voice-note replies and phone calls. The five steps cover writing the bottom line first (DECISION / FYI / ACTION TAKEN / AT RISK), one line of \"why now\", only the details needed, a clear next step and owner, and checking the phone preview, with a diagram.",
    "say": "Same discipline, every channel. On a phone, the first 80 characters should tell the whole story.",
    "ask": "What's a subject line you've seen recently that told you nothing?"
  },
  "p2": {
    "on": "This slide gives BLUF examples: \"DECISION by 3 PM: expert retainer $6,200\" beats \"Following up\", and status updates lead with the state (\"On track\" or \"At risk\"). It shows how BLUF and ACT work together and ends with the Decision → Why → Details → Next step callout.",
    "say": "Lead with the state, not the story.",
    "wrap": "Decision, why, details, next step: that order works in every channel.",
    "scenario": "In pairs, take one real message you sent recently and rewrite its subject line and first line BLUF-style. Compare the before and after out loud."
  },
  "s1": {
    "on": "This section says BLUF works in every channel: subject lines, Slack, status updates, voice-note replies and phone calls.",
    "say": "BLUF works in every channel, even a phone call."
  },
  "s2": {
    "on": "These steps apply it: a subject line with DECISION, FYI, ACTION TAKEN or AT RISK, one line of why now, short bullets, the next step with its owner, and a check that the first 80 characters tell the story.",
    "say": "The first 80 characters should tell the whole story.",
    "ask": "Show me your most recent subject line. Is it BLUF?"
  },
  "s3": {
    "on": "This section gives examples: \"DECISION by 3 PM: expert retainer $6,200\" beats \"Following up\"; status updates lead with the state; and in an ACT reply, the Acknowledge line is written BLUF-style.",
    "say": "Lead with the state: on track or at risk."
  }
}
});
