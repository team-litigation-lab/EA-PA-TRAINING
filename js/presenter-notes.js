/* Trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
   Written by hand for each slide, keyed "<day>::<topic title>".
   p1 = the topic's first slide, p2 = its second slide (Best Practices & Pitfalls).
   Each has "on" (what is on this slide, 2–3 sentences) and the script: say / ask (p1) or say / wrap (p2),
   plus the scenario for the room on p2. A single-slide topic shows p1 with p2's wrap and scenario.
   s1…s4 = section scripts for ① Core Principles, ② Step-by-Step, ③ Best Practices, ④ Go Deeper:
   when a slide is split over pages, Presenter view shows only the sections on the current page.
   Nothing here is generated at run time. */
window.PRESENTER_NOTES = {
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
  }
},
"3::Prioritization Frameworks": {
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
  }
},
"3::Time Tracking Done Right": {
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
  }
},
"3::Time Management": {
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
  }
},
"3::When Time Management Fails Despite a Clean Calendar": {
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
  }
},
"3::Calendar Management That Holds": {
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
  }
},
"3::Calendar Conflict & Prioritization Discipline": {
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
  }
},
"3::Energy Management vs. Time Management": {
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
  }
},
"3::Handling Interruptions Without Losing the Day": {
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
  }
},
"3::The Two-Minute Rule": {
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
  }
},
"3::Weekly Planning Rituals": {
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
  }
},
"3::Saying No Without Damaging Relationships": {
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
  }
},
"3::Batch Processing Similar Tasks": {
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
  }
},
"3::The Cost of Context-Switching": {
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
  }
},
"3::Recurring Meeting Hygiene": {
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
  }
},
"3::Buffer Time Between Meetings": {
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
  }
},
"3::Time Zone Management for Distributed Teams": {
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
  }
},
"3::Calendar Blocking for Deep Work": {
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
  }
},
"3::Handling Last-Minute Calendar Changes": {
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
  }
},
"3::Multi-Calendar Coordination": {
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
  }
},
"3::Visa & Documentation Requirements": {
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
  }
},
"3::International Travel Considerations": {
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
  }
},
"3::Expense Tracking While Traveling": {
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
  }
},
"3::Travel Risk Contingency Planning": {
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
  }
},
"3::Loyalty Programs & Travel Preferences": {
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
  }
},
"3::Managing Multi-City, Multi-Leg Itineraries": {
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
  }
},
"3::Ground Transportation Coordination": {
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
  }
},
"3::Building a Real Travel Checklist": {
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
  }
},
"3::Post-Trip Debrief & Follow-Up": {
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
  }
},
"3::The Weekly Time Audit": {
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
  }
},
"3::Setting Realistic Deadlines": {
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
  }
},
"3::Court Docketing Workflows": {
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
  }
},
"3::Statute-of-Limitations Rules": {
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
  }
},
"3::Deposition Scheduling": {
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
  }
},
"3::Executive Travel Logistics — Domestic & International Itineraries": {
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
  }
},
"3::War Room Trial Support": {
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
  }
},
"3::Emergency Flight Contingencies": {
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
  }
},
"3::Recognizing Stress & Burnout in High-Pressure Roles": {
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
  }
},
"3::Stress Management Techniques That Work at a Desk": {
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
  }
},
"3::Setting Boundaries & Managing Executive Pressure": {
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
  }
},
"3::Recovery, Workload Conversations & Support Resources": {
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
  }
},
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
  }
},
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
  }
},
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
  }
},
"7::The EA/PA's Role in Finance": {
  "p1": {
    "on": "This slide says financial tasks (invoices, expenses and reimbursements) make the EA/PA a real link in the firm's financial accuracy. The steps: double-check figures before passing anything along, log and track financial tasks like any recurring work, flag anything that looks off instead of assuming someone will catch it, and know where your task sits in the chain.",
    "say": "You're a link in the chain, not filing that happens to touch numbers.",
    "ask": "Who here has done any bookkeeping or invoicing?"
  },
  "p2": {
    "on": "This slide shows where the EA/PA touches the money. Accounts payable: collecting invoices, matching them to approvals and routing for payment. Accounts receivable: preparing invoices, tracking what's outstanding and sending reminders. Expenses and reimbursements: gathering receipts, coding them to the right matter and flagging anything outside policy.",
    "say": "A transposed number here causes problems further down the chain.",
    "wrap": "Check the figures, track the task and flag what looks wrong.",
    "scenario": "A vendor invoice for $1,850 arrives, but the approved purchase order says $1,580. What do you do before it goes anywhere near payment?"
  }
},
"7::SOA Reconciliation": {
  "p1": {
    "on": "This slide teaches the Statement of Account reconciliation order: start from the opening balance, add invoices, subtract payments and apply adjustments to reach the closing balance. If revenue doesn't match deposits, compare bank statements with revenue records first, work backward from the figures that don't reconcile, tie out exactly, and document every adjustment.",
    "say": "Opening plus invoices, minus payments, plus or minus adjustments, equals closing.",
    "ask": "Why not rebuild every report when something doesn't match?"
  },
  "p2": {
    "on": "This slide shows the formula and a worked example: $4,000 opening + $6,500 invoices − $5,000 payments − $250 credit note = $5,250 closing. If the client's records show $5,000, look for the $250 difference first; here, the credit note wasn't recorded on their side. Document the reconciliation so next month starts from an agreed balance.",
    "say": "Start from the difference and find what explains it.",
    "wrap": "Work the formula in order, tie out exactly and document the result.",
    "scenario": "On the board: opening $3,200, invoices $4,800, payments $6,000, and a $150 late fee added. What's the closing balance? The client says they owe $1,850. Where do you look first?"
  }
},
"7::Reconciliation Discrepancy Detection": {
  "p1": {
    "on": "This slide lists detection techniques: compare the ledger with the bank statement line by line, confirm credits went to the right client, look for reversed entries that hide errors, run the full checklist, and apply duplicate-payment checks (system detection, manual verification and approval thresholds).",
    "say": "Line by line, not just the totals.",
    "ask": "If a reconciliation came up $340 short, what would you check first?"
  },
  "p2": {
    "on": "This slide gives the checklist: all invoices listed, all payments recorded, no unmatched balances, every variance explained. It cites a real case where a payment applied to the wrong client led to a legal dispute, which is why duplicate-payment prevention matters.",
    "say": "A payment on the wrong client can become a legal dispute.",
    "wrap": "Compare line by line, check where credits landed and explain every variance.",
    "scenario": "Your reconciliation is $340 short. Walk through the checklist in order and name the three most likely causes."
  }
},
"7::Credit Cards & Card Applications": {
  "p1": {
    "on": "This slide covers credit cards, with a diagram: put due dates on a real calendar, review the statement before paying it, gather exactly the documents a card application asks for and follow the issuer's process, and organize tax-relevant receipts throughout the year. The test: a request for the last 90 days of receipts should be a quick retrieval.",
    "say": "Review the statement before you pay it.",
    "ask": "If the accountant asked for every receipt from the last 90 days, how fast could you deliver?"
  },
  "p2": {
    "on": "This slide says credit card payments follow the same discipline as every recurring payment: a due-date calendar and a statement review. For card applications, the EA's job is precision: exactly what's requested, not more or less, following the issuer's process.",
    "say": "Precision on applications: exactly what they ask for.",
    "wrap": "Calendar the due dates, review before paying and keep receipts organized all year.",
    "scenario": "Reviewing Elias's card statement, you spot a $129 charge from an unfamiliar merchant and a hotel charged twice for the same night. What do you do before paying the bill?"
  }
},
"7::Tax Season Support & Working with Accountants": {
  "p1": {
    "on": "This slide says the real value in tax season is organizing receipts, invoices and records all year, with a diagram. The steps: file and categorize records as they arrive, treat accountant requests as quick retrievals, be the reliable point of contact who can answer \"do you have X\" fast, link this to reconciliation, and build a daily or weekly filing habit.",
    "say": "Tax season is easy if you've filed all year.",
    "ask": "What does a daily receipt habit actually look like?",
    "wrap": "Organize continuously so every accountant request is a retrieval, not a reconstruction.",
    "scenario": "The accountant emails asking for all charitable donation receipts and every home-office expense from last year, by Friday. If you've kept records continuously, what does that take? If you haven't, what does it take?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Organize continuously so every accountant request is a retrieval, not a reconstruction.",
    "scenario": "The accountant emails asking for all charitable donation receipts and every home-office expense from last year, by Friday. If you've kept records continuously, what does that take? If you haven't, what does it take?"
  }
},
"7::What an SOP Actually Needs": {
  "p1": {
    "on": "This slide lists the five elements of an SOP: Purpose (why it exists), Scope (who it applies to), Procedure (the step-by-step actions), Controls (verification built into the process) and Escalation (when and how to report issues).",
    "say": "Purpose, Scope, Procedure, Controls, Escalation.",
    "ask": "Have you ever had to follow a process that wasn't written down anywhere?"
  },
  "p2": {
    "on": "This slide explains each element. Scope covers what the SOP doesn't include as well as what it does, Procedure is numbered steps anyone can follow, Controls are the checks and records that prove it was done right, and Escalation says who to contact and by when. The test: could a temp follow it on day one? Without SOPs, execution is inconsistent, which audits catch.",
    "say": "Could a temp follow it on day one?",
    "wrap": "Five elements, numbered steps and controls that prove it was done.",
    "scenario": "Draft the five elements, one line each, for an SOP on processing a client's expense reimbursement."
  }
},
"7::The Financial Calendar": {
  "p1": {
    "on": "This slide says to track billing cycles, tax deadlines and monthly closes on one continuous calendar. The steps: set automated reminders 7–10 days before each deadline, review weekly, add extra buffer around whichever category usually slips, and confirm each deadline's requirements haven't changed since the last cycle.",
    "say": "One calendar, reminders 7–10 days out.",
    "ask": "Which of billing, tax or closes would you most likely let slip?"
  },
  "p2": {
    "on": "This slide lists typical US financial deadlines. Monthly: client invoicing, month-end close, bank and trust reconciliation. Quarterly: estimated taxes (generally April, June, September and January) and payroll filings. Annually: 1099s and W-2s by end of January, year-end close and license renewals. Confirm exact dates with the accountant each year.",
    "say": "Confirm the exact dates with the accountant every year.",
    "wrap": "One calendar, early reminders and a weekly review.",
    "scenario": "Build the next 90 days of the firm's financial calendar: which monthly, quarterly and annual items land in that window, and when does each reminder fire?"
  }
},
"7::Billing & Invoicing": {
  "p1": {
    "on": "This slide teaches invoice math: rate × hours, plus expenses, minus any discount. The steps: make sure every invoice states the amount due, due date and payment terms, check rate and hours against the engagement terms, re-check the math before sending, and send promptly, because an unsent invoice doesn't help cash flow.",
    "say": "Rate times hours, plus expenses, minus discount.",
    "ask": "What three things must every invoice state?"
  },
  "p2": {
    "on": "This slide shows the anatomy of a clean invoice. Header: firm details, client, matter number, invoice number and date. Body: itemized entries (date, description, hours, rate) and expenses, with any discount on its own line. Footer: total, due date, payment terms such as Net 30, payment methods and late-fee terms.",
    "say": "The discount gets its own line, so the client can see it.",
    "wrap": "Check the terms, check the math and send promptly.",
    "scenario": "Live: 12.5 hours at $350 an hour, $240 in filing fees and a 10% courtesy discount on fees only. Call out each step. What's the total, and what else must the invoice say?"
  }
},
"7::QuickBooks How-Tos — Step by Step": {
  "p1": {
    "on": "This slide walks through four QuickBooks tasks. Create an Invoice: + New → Invoice, then client, line items, review and Save and Send. Record an Expense: + New → Expense, then payee, category, receipt and Save. Reconcile an Account: Accounting → Reconcile and check off matches until the difference is $0.00. Run an AR Aging Report and look at the 61–90 and 90+ columns first.",
    "say": "Four workflows cover most of what you'll touch.",
    "ask": "Which of these have you done before?"
  },
  "p2": {
    "on": "This slide says these four tasks cover most of an EA's day-to-day QuickBooks work. It lists the everyday workflows: create an invoice, record a payment against the matching open invoice, enter vendor bills, and reconcile monthly against the bank statement. Menu names can vary slightly by version.",
    "say": "You don't need the whole platform, just these workflows.",
    "wrap": "Learn the four click-paths, and reconcile to exactly $0.00.",
    "scenario": "Screen-share if you have access: create one invoice and reconcile one account live, then have a volunteer repeat the invoice click-path from memory."
  }
},
"7::QuickBooks Common Mistakes & Tips": {
  "p1": {
    "on": "This slide says the most common new-user mistake is miscategorizing an expense, such as filing a client-reimbursable cost as general office expense. The steps: confirm the category and ask when unsure, look for a missing or duplicate transaction when reconciliation isn't $0.00, check invoices against the engagement letter, remember that QuickBooks Online saves automatically, and review entries for patterns.",
    "say": "Miscategorization is the most common mistake. Ask when unsure.",
    "ask": "What percentage of errors do you think come from miscategorizing?"
  },
  "p2": {
    "on": "This slide says reconciliation only finishes at exactly $0.00, and the fix is usually a missing or duplicate transaction, not adjusting an unrelated entry. QuickBooks will happily invoice the wrong rate, so check against the contract. In QuickBooks Online, a wrong entry needs an edit or journal entry, because there's no undo.",
    "say": "Never force a reconciliation by adjusting an unrelated entry.",
    "wrap": "Categorize carefully, reconcile to $0.00 and check invoices against the contract.",
    "scenario": "Your reconciliation shows a $62.50 difference. A colleague suggests adjusting the office supplies line to make it balance. What do you say, and what do you look for instead?"
  }
},
"7::Contract-Aware Billing": {
  "p1": {
    "on": "This slide says to know payment terms, late fees and hour caps before billing begins. The steps: confirm terms at the start of the matter, track hours against any cap continuously, flag an approaching cap well before it's reached, apply late fees and terms exactly as written, and confirm the interpretation of ambiguous terms before billing.",
    "say": "Know the cap before you start, and flag it before you hit it.",
    "ask": "What would you do at 80% of an hour cap?"
  },
  "p2": {
    "on": "This slide lists the contract terms to check before billing: the billing arrangement (hourly, flat fee, contingency or retainer), caps and budgets with any notice required before exceeding them, and payment and late-fee terms, including invoice formats or billing codes corporate clients may require.",
    "say": "Corporate clients often require specific billing codes.",
    "wrap": "Read the contract first, track caps continuously and apply terms consistently.",
    "scenario": "The Harlow matter has a 40-hour cap with notice required at 80%. Time entries show 34.5 hours logged. What do you do today, and who do you tell?"
  }
},
"7::Financial KPIs for EAs/PAs": {
  "p1": {
    "on": "This slide lists the financial KPIs: Invoice Turnaround Time (24–72 hours from service to invoice sent), Reconciliation Accuracy (98–100%) and a retainer alert at 25% remaining. The steps: track each against its target, review on a fixed cadence, and examine the underlying process when a KPI keeps missing.",
    "say": "Invoice within 72 hours, reconcile at 98% or better, alert at 25% retainer.",
    "ask": "Why set the retainer alert at 25% instead of zero?"
  },
  "p2": {
    "on": "This slide repeats the targets and explains the callout: an alert when a client retainer drops below 25% gives enough runway to act before the account runs dry. DSO and the retainer threshold are the metrics most likely to be new to trainees.",
    "say": "The 25% alert buys runway.",
    "wrap": "Track against targets, review on a cadence and fix the process when a KPI slips.",
    "scenario": "A client's $10,000 retainer is at $2,300 and they have a hearing next week. What does the KPI say you should have done already, and what do you do now?"
  }
},
"7::Bookkeeping Basics & Compliance": {
  "p1": {
    "on": "This slide says to classify every transaction as income, expense or receivable. The steps: classify at the time of recording, keep an audit trail (who, when, what source document), segregate duties so you never approve your own transactions, reconcile regularly, and flag compliance gaps immediately.",
    "say": "Never approve your own transaction.",
    "ask": "Why does segregation of duties matter even in a small office?"
  },
  "p2": {
    "on": "This slide covers core concepts. Double-entry: every transaction touches at least two accounts, which makes errors detectable. Cash versus accrual: cash records when money moves, accrual when it's earned or owed. Chart of accounts: the categorized list every transaction is coded to; consistent coding makes reports trustworthy.",
    "say": "Know whether your firm is cash or accrual.",
    "wrap": "Classify, keep the audit trail, separate duties and reconcile.",
    "scenario": "You're asked to both enter and approve a $2,400 vendor payment because the usual approver is out. What do you do, and what do you suggest for next time?"
  }
},
"7::Quarterly Tax Schedules": {
  "p1": {
    "on": "This slide says businesses paying estimated taxes quarterly work against a fixed calendar, and missing a date means penalty exposure; this is calendar discipline for compliance. The steps: log all four deadlines with reminders at the start of the year, confirm the amount and documents with the accountant well ahead, and keep a record of each payment confirmation.",
    "say": "Four separate deadlines, each with its own lead time.",
    "ask": "Who confirms the payment amount, and when?"
  },
  "p2": {
    "on": "This slide warns against treating quarterly estimated taxes as one annual concern instead of four separate deadlines. It says to coordinate with the accountant early so the amount isn't a last-minute scramble.",
    "say": "Ask the accountant early, not the week of.",
    "wrap": "Calendar all four, confirm early and keep the confirmations.",
    "scenario": "It's ten days before a quarterly estimated tax deadline, and you haven't heard from the accountant about the amount. What do you do?"
  }
},
"7::W-9/1099 Audits & Filing Deadlines": {
  "p1": {
    "on": "This slide says businesses paying contractors or vendors above a threshold have deadline-bound 1099 obligations that depend on accurate W-9s, and an audit confirms every required W-9 is on file and current. The steps: collect a W-9 before the first payment, audit the vendor list against the W-9 file periodically, and track the 1099 deadline with real lead time.",
    "say": "W-9 before the first payment, not after.",
    "ask": "Which vendors are easiest to miss?"
  },
  "p2": {
    "on": "This slide warns against checking for missing W-9s only when the 1099 deadline is close, because chasing a vendor then is a real time crunch. It says to keep W-9s secure, since they contain sensitive tax information.",
    "say": "W-9s hold sensitive tax data. Store them securely.",
    "wrap": "Collect up front, audit periodically and give the deadline lead time.",
    "scenario": "Preparing for the 1099 deadline, you find one vendor paid above the threshold never submitted a W-9. What do you do now, with the deadline approaching?"
  }
},
"7::Real-Time Time Tracking for Billable Work": {
  "p1": {
    "on": "This slide says real-time tracking means logging billable work as it happens, and here the time becomes a client invoice, so accuracy has direct consequences. The steps: log during or right after the work, record enough detail to support the invoice line (what was done, for which matter), and reconcile logged time against the billing calendar regularly.",
    "say": "Billable time becomes the client's invoice, so log it now.",
    "ask": "How accurate is time you reconstruct at the end of the week?"
  },
  "p2": {
    "on": "This slide warns that reconstructed entries are measurably less accurate, and inaccurate billable time is a real problem. It links to contract-aware billing: accurate time tracking is the input to accurate billing.",
    "say": "Accurate time is the input to accurate billing.",
    "wrap": "Log in real time, with detail, and reconcile before invoicing.",
    "scenario": "It's the end of a busy day and you haven't logged time for several tasks. How do you reconstruct it as accurately as possible, and what do you change tomorrow?"
  }
},
"7::Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk": {
  "p1": {
    "on": "This slide explains that an IOLTA holds client funds (retainers, settlement proceeds, advance costs) that belong to the client or a third party. Commingling them with firm operating funds, even briefly or by accident, is one of the most serious ethics violations. The steps: keep trust and operating accounts separate, move funds only on a documented trigger, and keep a running ledger per client.",
    "say": "Client money is never firm money until it's earned.",
    "ask": "What counts as a documented trigger to move trust funds?"
  },
  "p2": {
    "on": "This slide warns that a trust account must never go negative for any client, even temporarily, and a shortfall is never a cash-flow problem to fix later. It says any trust transaction should feel slower and more deliberate than a normal one, and that friction is intentional.",
    "say": "The friction on trust transactions is intentional.",
    "wrap": "Separate accounts, documented triggers and a ledger per client.",
    "scenario": "The trust account balance for one specific client is $200 lower than the ledger says it should be. What's your first move, and who needs to know before you do anything else?"
  }
},
"7::Trust Account Reconciliation Discipline": {
  "p1": {
    "on": "This slide says trust reconciliation confirms three numbers match: the bank statement balance, the trust ledger and the sum of every client sub-ledger. It happens at least monthly and after any unusual transaction, and any discrepancy is resolved to the specific transaction. The steps: reconcile on a fixed schedule, cross-check the ledger against the sub-ledgers, and document every reconciliation, even clean ones.",
    "say": "Three numbers, and all three must match.",
    "ask": "Why document a clean reconciliation?"
  },
  "p2": {
    "on": "This slide warns that the account can balance overall while one client's funds are wrong, so reconcile each client's sub-ledger. Any discrepancy is escalated immediately, whatever the size: a one-dollar unexplained difference gets the same seriousness as a large one.",
    "say": "A one-dollar difference gets escalated too.",
    "wrap": "Three-way reconcile on schedule, check every sub-ledger and escalate any difference.",
    "scenario": "This month the bank balance and trust ledger match, but one client's sub-ledger doesn't match what was deposited for them. Walk through how you'd trace it."
  }
},
"7::Expense Report Auditing & Approval Workflows": {
  "p1": {
    "on": "This slide says an expense audit confirms each expense is legitimate, documented and correctly categorized before reimbursement. A missing receipt means there's no independent confirmation, and approval workflows stop anyone approving their own expenses. The steps: check every line against its receipt, hold anything missing a receipt or business purpose, and route through the proper approval chain.",
    "say": "No receipt, no independent proof it happened.",
    "ask": "What three things should match between a line item and its receipt?"
  },
  "p2": {
    "on": "This slide warns against bulk-approving reports without reviewing the line items. It also says to watch for split transactions, one expense broken into smaller ones, a known pattern for getting around approval thresholds.",
    "say": "Split transactions are how thresholds get dodged.",
    "wrap": "Check every line, hold what's unsupported and route through the right approver.",
    "scenario": "An expense report shows a receipt for exactly $499, one dollar under the $500 threshold that needs extra approval. What do you do with that observation?"
  }
},
"7::Vendor Payment Terms & Cash Flow Timing": {
  "p1": {
    "on": "This slide says payment terms (Net 30, Net 60, due on receipt) shape cash flow. Paying early without a discount ties up cash, and paying late risks fees, relationships and service. The steps: confirm each vendor's actual terms, time payments to the terms unless there's a reason like an early-payment discount, and track due dates against expected inflows.",
    "say": "Pay on the terms, not on reflex.",
    "ask": "When is paying early worth it?"
  },
  "p2": {
    "on": "This slide warns against paying every invoice on receipt regardless of terms, which strains cash flow for no benefit. It says to flag any payment outside normal terms so it's a deliberate decision.",
    "say": "Early or late should always be a decision, never a default.",
    "wrap": "Know the terms, time payments to them and flag exceptions.",
    "scenario": "A Net 30 vendor invoice arrives, and the person who handles payments always pays within 48 hours \"to be safe.\" Is that the right call here, and what would you say?"
  }
},
"7::Financial Record Retention Requirements": {
  "p1": {
    "on": "This slide says financial records (invoices, receipts, bank statements, trust records) have minimum retention periods that vary by document type and jurisdiction, you must be able to find a document on demand, and destroying one too early causes problems in audits and disputes. The steps: know each category's period, store records durably and searchably, and build retention dates into filing.",
    "say": "Keeping it isn't enough. You have to be able to find it.",
    "ask": "Do trust account records have a different retention period?"
  },
  "p2": {
    "on": "This slide warns that digital storage doesn't handle retention automatically, because files still get lost, misfiled or deleted. When unsure whether a retention period has passed, keep the record: over-retaining costs far less than needing a destroyed one.",
    "say": "When in doubt, keep it.",
    "wrap": "Know the periods, store records searchably and label retention dates.",
    "scenario": "During a records cleanup you find trust account records from several years ago. Before deleting anything to save space, what do you need to confirm first?"
  }
},
"7::Handling a Billing Dispute": {
  "p1": {
    "on": "This slide says a billing dispute is a request for information, not an accusation; most come from misunderstandings. The backup documentation (time entries, receipts, engagement terms) is what resolves it, and how you handle it affects the relationship beyond the dollar amount. The steps: pull the documentation first, acknowledge promptly, and present the resolution with the supporting detail.",
    "say": "Pull the documentation before you reply.",
    "ask": "Why acknowledge before it's resolved?"
  },
  "p2": {
    "on": "This slide warns against responding defensively before pulling the documentation, which can turn a misunderstanding into a relationship problem. If the dispute reveals a real error, correct it plainly and promptly, because the relationship matters more than the original invoice.",
    "say": "If it's our error, fix it plainly and quickly.",
    "wrap": "Acknowledge fast, show the backup and correct real errors.",
    "scenario": "A client emails disputing a charge, saying it doesn't match what they remember agreeing to. What's your first move before responding?"
  }
},
"7::Payroll Basics for EA/PA Support Roles": {
  "p1": {
    "on": "This slide says an EA/PA rarely runs payroll but touches its edges: onboarding paperwork, timesheets, reimbursements through payroll. Payroll deadlines don't move, and payroll data is some of the most sensitive information you'll handle. The steps: submit accurate timesheet data before the cutoff, treat payroll paperwork confidentially, and put payroll deadlines on the compliance calendar.",
    "say": "Payroll deadlines don't move, so your inputs can't be late.",
    "ask": "What payroll-adjacent tasks do you touch?"
  },
  "p2": {
    "on": "This slide warns against treating payroll tasks as low priority because it's \"someone else's system\": a late timesheet from you can still cause a missed paycheck. It says never to discuss or forward compensation details beyond the people who need them for the task.",
    "say": "Your late timesheet can become someone's missed paycheck.",
    "wrap": "Hit the cutoffs, protect the data and calendar the deadlines.",
    "scenario": "A new hire's onboarding paperwork is incomplete two days before the payroll cutoff for the next pay run. What do you do so they aren't accidentally missed?"
  }
},
"7::Fraud Red Flags in Financial Documents": {
  "p1": {
    "on": "This slide says most fraud shows up as small, plausible inconsistencies. A single red flag is often just an error, a pattern is real concern, and the EA/PA is often the first line of defense. The steps: watch for unfamiliar vendors, too-clean round numbers and duplicate invoice numbers, verify changed payment details through a separate verified channel, and escalate concerns promptly.",
    "say": "Verify changed bank details on a channel you already trust.",
    "ask": "Why isn't a request from the vendor's known email address enough?"
  },
  "p2": {
    "on": "This slide warns against privately explaining away each odd detail, because a pattern is only visible if anomalies get tracked. It says never to let one false alarm stop you raising the next concern: a false alarm costs far less than a missed one.",
    "say": "A false alarm is cheap. A missed fraud isn't.",
    "wrap": "Track anomalies, verify out of band and escalate early.",
    "scenario": "A long-standing vendor emails asking to update their bank details for future payments. What's your verification process, and why doesn't their known email address settle it?"
  }
},
"8::Credential Management": {
  "p1": {
    "on": "This slide defines three roles: Admin (full read/write and user management), Editor (read/write on content only) and Viewer (read-only). The steps: give every user the minimum role their job needs, enable MFA on every account, review role assignments periodically, default to the narrower role when granting access, and document who has which role and why.",
    "say": "Minimum role, MFA on everything.",
    "ask": "What's your access level in the tools you use every day?"
  },
  "p2": {
    "on": "This slide expands on the roles. Admin has full control, including users and security settings, and is limited to very few people. Editor can create and edit content but not change permissions. Viewer can see but not change. Review access when roles change or someone leaves, because access that outlives the job is one of the most common gaps.",
    "say": "Access that outlives the job is a common security gap.",
    "wrap": "Grant the least role, turn on MFA and review access regularly.",
    "scenario": "A new paralegal needs to update the shared matter calendar and read the client folder. Which role do they get in each system, and what would make you revisit it later?"
  }
},
"8::Least-Privilege Access": {
  "p1": {
    "on": "This slide says over-permissioning is how systems get accidentally broken by people with no bad intent. The steps: grant access by what the role needs, flag anyone with more than they need, fix incidents by correcting the role rather than blaming the person, review elevated access periodically, and remove temporary access when the need ends.",
    "say": "Access should match the job, not what might be convenient someday.",
    "ask": "Who in your organization has more access than their job needs?"
  },
  "p2": {
    "on": "This slide tells a real incident: a junior staffer mistakenly given admin access changed settings they should never have been able to touch. The fix wasn't blame; it was correcting the role assignment.",
    "say": "Fix the role, not the person.",
    "wrap": "Grant what the role needs, review it and remove it when the need ends.",
    "scenario": "A contractor who finished a document-review project two months ago still has access to the firm's case management system. What do you do, and how do you prevent it next time?"
  }
},
"8::Responding to a Suspicious Data Request": {
  "p1": {
    "on": "This slide gives three steps for a suspicious data request: Verify (confirm the sender's identity before anything else), Escalate (route it internally through the correct channel) and Close the Gap (fix whatever let the request reach you).",
    "say": "Verify first. Always.",
    "ask": "What's your instinct when a request looks urgent: verify or comply?"
  },
  "p2": {
    "on": "This slide lists red flags: urgency and secrecy (\"send this in 10 minutes and don't tell anyone\"), mismatched details (a correct display name with an off email domain, or a new phone number), and unusual asks (passwords, client lists, wire changes, gift cards). Verify through a channel you already know, such as the number on file, never one in the message.",
    "say": "Call the number you already have, not the one in the message.",
    "wrap": "Verify through a known channel, escalate and close the gap.",
    "scenario": "Roleplay: someone calls saying they're from the firm's IT provider and need the client list exported \"before the migration tonight.\" Verify or comply? Play it out."
  }
},
"8::Containing a Confidentiality Leak": {
  "p1": {
    "on": "This slide gives three steps for a leak: Contain (stop the spread immediately, before anything else), Notify (alert the right roles, not just the right names) and Prevent (put a policy in place so the same leak can't repeat).",
    "say": "Contain, notify, prevent, in that order.",
    "ask": "What's the very first thing you'd do in the first 60 seconds?"
  },
  "p2": {
    "on": "This slide gives the first-hour checklist: stop the spread (recall or delete messages, revoke shared links, change file access), capture the facts (what, to whom, when, how) before they're forgotten, and notify the supervising attorney, IT and compliance promptly. Any legal duty to notify clients or regulators is their call.",
    "say": "Whether to notify clients or regulators is the attorney's call, not yours.",
    "wrap": "Contain first, capture facts and notify the right roles.",
    "scenario": "You realize you emailed a settlement draft for the Harlow matter to the wrong \"Mark,\" who works at another firm. Walk through the first hour."
  }
},
"8::Fixing a Broken Workflow": {
  "p1": {
    "on": "This slide says disconnected tools (email plus a spreadsheet plus notes) reliably cause duplicate work, even for careful people. The steps: find a workflow split across tools, consolidate it into one tracked system, name which steps stay manual, test it on a real task, and revisit it later to confirm it stopped the duplicate work.",
    "say": "One tracked system, with the manual steps named.",
    "ask": "What workflow of yours is held together by email, a spreadsheet and memory?"
  },
  "p2": {
    "on": "This slide lists the signs a workflow is broken: people keep asking \"where is this?\", the same information is typed into email, a spreadsheet and a calendar, and tasks stall at handoffs because nobody owns the step in between.",
    "say": "If people keep asking \"where is this?\", the workflow is broken.",
    "wrap": "Consolidate, name the manual steps, test and revisit.",
    "scenario": "Client document requests at the firm arrive by email, get logged in a spreadsheet and are tracked in someone's notes. Redesign it: what's the one system, and which steps stay manual?"
  }
},
"8::The Golden Rules of Admin Data Security": {
  "p1": {
    "on": "This slide gives the rules for AI tools: turn off training and data-improvement settings before any real work, never input financial data, health information, SSNs or passwords, swap real names for placeholders like \"[Company X],\" treat the AI tool as a third party, and treat anything you're unsure about as unsafe.",
    "say": "An AI tool is a third party. Placeholders, never real identifiers.",
    "ask": "Which setting do you switch off before using an AI tool for work?"
  },
  "p2": {
    "on": "This slide repeats the warning on financial data, health information, SSNs and passwords, and the placeholder rule. The callout: Elias's firm runs on strict confidentiality, and the judgment that keeps a case detail out of casual conversation applies to AI tools too. It ends with a prompt on anonymizing a termination email.",
    "say": "Same judgment as keeping a case detail out of casual conversation.",
    "wrap": "Settings off, sensitive data out, placeholders in.",
    "scenario": "Sanitize this together: a termination email naming the employee, their salary, their medical leave and the client they worked on. What do you redact or replace before asking an AI tool to improve the wording?"
  }
},
"8::Multi-Factor Authentication Basics": {
  "p1": {
    "on": "This slide says a password alone is a single point of failure, and MFA adds something you have, such as a code on your phone. The steps: enable MFA on every account that handles anything sensitive, prioritize email (it can reset other passwords), check older accounts set up before MFA was required, prefer an authenticator app or hardware key to SMS, and audit your own accounts.",
    "say": "Email is the first account to protect, because it resets everything else.",
    "ask": "How many of your accounts have you actually checked for MFA?"
  },
  "p2": {
    "on": "This slide says MFA belongs on every sensitive account, not just the obviously risky ones. The most common real failure isn't missing technology; it's an old account set up before MFA was required and never updated.",
    "say": "Old accounts are the usual gap.",
    "wrap": "MFA everywhere sensitive, email first, authenticator over SMS.",
    "scenario": "List the accounts you use for Elias's work: email, calendar, case management, bank portal and travel. Which would you check for MFA first, and why?"
  }
},
"8::Password Manager Best Practices": {
  "p1": {
    "on": "This slide says reusing a password means one breach anywhere becomes a breach everywhere, and a password manager makes unique passwords practical, with a diagram. The steps: generate a unique password for every account, make the master password your strongest, share credentials through the manager's sharing feature, move passwords out of unencrypted notes, and change a password immediately if compromise is suspected.",
    "say": "One unique password per account, and one very strong master password.",
    "ask": "Who still has passwords in a document or on a sticky note?",
    "wrap": "Unique passwords, a guarded master password and sharing only through the manager.",
    "scenario": "A colleague asks you to email them the login for the firm's travel booking account. What do you do instead, and what do you check about how that login is stored?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Unique passwords, a guarded master password and sharing only through the manager.",
    "scenario": "A colleague asks you to email them the login for the firm's travel booking account. What do you do instead, and what do you check about how that login is stored?"
  }
},
"8::Offboarding Access Removal Checklist": {
  "p1": {
    "on": "This slide says that when someone leaves, whether employee, contractor or vendor, every system they could access must be revoked, not just the obvious ones. The steps: keep a written checklist of every system, account and shared credential, work through all of it for every departure, revoke on the actual departure date, change shared credentials, and add new systems as they're adopted.",
    "say": "Every system, on the day they leave.",
    "ask": "Could you list every system a departing team member would need removed from?"
  },
  "p2": {
    "on": "This slide warns that a written checklist prevents the common failure of remembering the main systems and missing the rest. Access that's \"probably fine to leave for now\" is exactly the stale permission least-privilege exists to prevent.",
    "say": "\"Probably fine for now\" is how stale access happens.",
    "wrap": "Written checklist, full pass, same-day revocation.",
    "scenario": "The firm's receptionist leaves on Friday. Build the offboarding checklist with the room: every system, shared login and physical access item."
  }
},
"8::Shared Account Risks": {
  "p1": {
    "on": "This slide says a shared login means nobody can tell who took an action, which becomes a real problem when something goes wrong. The steps: prefer individual accounts with scoped permissions, log who used a shared account for what if one must exist, change the credential when someone leaves, look for ways to replace it, and manage it as a known risk.",
    "say": "With a shared login, nobody knows who did what.",
    "ask": "Does your organization still share a login for something important?"
  },
  "p2": {
    "on": "This slide says shared accounts make offboarding harder, because removing one person means changing the password for everyone else. Individual, scoped accounts are almost always safer, even when sharing feels more convenient.",
    "say": "Convenience today, confusion when something goes wrong.",
    "wrap": "Replace shared logins where you can, and log usage where you can't.",
    "scenario": "Three assistants share one login to the firm's courier account, and a $900 rush delivery nobody remembers ordering appears. What can you find out, and what do you change?"
  }
},
"8::Physical Security Basics": {
  "p1": {
    "on": "This slide says digital security means little if a laptop is left unlocked in public or a sensitive filing cabinet is left open overnight. The steps: lock your workstation whenever you step away, lock sensitive cabinets when unattended, report a lost badge or key immediately, limit visitors and vendors to a defined area, and check your own workspace for visible sensitive items.",
    "say": "A lost badge is as serious as a leaked password.",
    "ask": "Is anything sensitive visible on your desk right now?"
  },
  "p2": {
    "on": "This slide says a badge, key or access card deserves the same seriousness as a password and should be reported immediately if lost. It says visitors and vendors should have a limited area they can go unescorted, the least-privilege principle applied physically.",
    "say": "Least privilege applies to rooms too.",
    "wrap": "Lock it, limit access and report losses right away.",
    "scenario": "You realize your office badge wasn't in your bag this morning, and you last had it at a coffee shop. It's probably just misplaced. What do you do, and when?"
  }
},
"8::Device Security Fundamentals": {
  "p1": {
    "on": "This slide says a device left unlocked, even briefly, is an open door. The steps: set a short screen-lock timeout and lock manually before stepping away, confirm full-disk encryption on devices with sensitive information, apply the same rules to personal devices used for work, install security updates promptly, and set up remote wipe where available.",
    "say": "Encryption turns a lost laptop into a hardware loss, not a data breach.",
    "ask": "Would your devices survive being lost today?"
  },
  "p2": {
    "on": "This slide explains that full-disk encryption means a lost or stolen device is a hardware loss, not necessarily a data breach, a distinction that matters enormously. Personal devices used for work carry the same confidentiality obligations as work-issued ones.",
    "say": "Your phone with work email is a work device.",
    "wrap": "Short lock timeouts, encryption, updates and remote wipe.",
    "scenario": "Elias leaves his phone, which has his work email, in a taxi. What do you check and do in the next 30 minutes?"
  }
},
"8::Classifying Information by Sensitivity Level": {
  "p1": {
    "on": "This slide gives three levels, with a diagram. Public: fine to share, once confirmed it's meant for outside distribution. Internal (memos, routine scheduling): not secret, but not for outsiders. Confidential/Privileged (case details, client communications, financial data): real legal and reputational stakes. When unsure, treat it as more sensitive.",
    "say": "Public, Internal, Confidential. When unsure, go one level higher.",
    "ask": "Where would a client's meeting schedule fall?"
  },
  "p2": {
    "on": "This slide says not everything needs the same protection: treating everything as top secret makes diligence exhausting, and treating everything casually is dangerous. The safer default when unsure is more sensitive, until confirmed otherwise.",
    "say": "Classify first, then handle accordingly.",
    "wrap": "Classify before sharing, and default up when unsure.",
    "scenario": "Classify these live: the firm's office address, Elias's travel itinerary, a draft motion in the Harlow matter, the holiday party date, and a client's settlement amount."
  }
},
"8::Secure File Sharing Methods": {
  "p1": {
    "on": "This slide says email attachments are among the least secure ways to share sensitive files, because once sent you lose control of the copy. A secure, access-controlled link is better, with a diagram. The steps: use secure links, set expiration dates and permissions, send any document password through a separate channel, revoke links when done, and share only with people who need it.",
    "say": "Links with permissions and expiry, not attachments.",
    "ask": "How do you share sensitive files by default today?",
    "wrap": "Share through controlled links, set expiry, send passwords separately and revoke when done.",
    "scenario": "Elias asks you to send a client's financial disclosures to their accountant. Walk through exactly how you'd share it: method, permissions, expiry, and how the password gets there."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Share through controlled links, set expiry, send passwords separately and revoke when done.",
    "scenario": "Elias asks you to send a client's financial disclosures to their accountant. Walk through exactly how you'd share it: method, permissions, expiry, and how the password gets there."
  }
},
"8::Email Encryption Basics": {
  "p1": {
    "on": "This slide says standard email isn't inherently secure in transit or storage, so genuinely sensitive content should use an encrypted email option. The steps: decide whether the message is really sensitive, use encryption for privileged legal content, check whether your organization already has an option, treat encryption as an extra layer, and default to encrypting when unsure.",
    "say": "Your firm may already have encryption that nobody uses.",
    "ask": "Does your organization have an encrypted email option?"
  },
  "p2": {
    "on": "This slide says knowing when a message needs encryption is itself a skill; not everything needs the heaviest tool. It links to confidential handling: encryption is one more layer, not a replacement for judgment about what gets sent to whom.",
    "say": "Encryption doesn't fix sending it to the wrong person.",
    "wrap": "Encrypt privileged content, and never let it replace judgment.",
    "scenario": "Which of these would you encrypt: a lunch confirmation, a privileged strategy memo to the client, a client's medical records for a personal-injury claim, and a routine scheduling email to opposing counsel?"
  }
},
"8::Metadata Risks in Shared Documents": {
  "p1": {
    "on": "This slide says a document's visible content isn't all that can leak: track changes, comments, author names and previous edits can reveal information you never meant to share, with a diagram. The steps: check for hidden metadata before sharing externally, clean it explicitly, take extra care with opposing counsel, make a clean-version export standard, and verify the cleaned version.",
    "say": "Looking clean on screen isn't the same as being clean.",
    "ask": "Have you ever seen a hidden comment surface in a shared document?",
    "wrap": "Clean every external document, especially for opposing counsel, and check that it worked.",
    "scenario": "You're about to send a proposed settlement agreement to opposing counsel. It has an internal comment: \"Client will go to $250K if pushed.\" Walk through the steps before it goes out."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Clean every external document, especially for opposing counsel, and check that it worked.",
    "scenario": "You're about to send a proposed settlement agreement to opposing counsel. It has an internal comment: \"Client will go to $250K if pushed.\" Walk through the steps before it goes out."
  }
},
"8::Clean Desk Policy": {
  "p1": {
    "on": "This slide says sensitive documents left on a desk, in a printer tray or on an unlocked screen are a physical data leak. The steps: put sensitive documents away when not in use, check the printer tray, lock your screen when you step away, apply the same rules to a home workspace, and do a quick end-of-day check.",
    "say": "Clear desk, empty tray, locked screen.",
    "ask": "What would a clean desk audit find on your desk right now?"
  },
  "p2": {
    "on": "This slide calls printers a commonly forgotten risk: a sensitive document left in the tray is open to anyone passing, even in a secure office. It links to physical security: the clean desk is the daily habit that makes it work.",
    "say": "The printer tray is the most forgotten risk.",
    "wrap": "Clear it, lock it and check at the end of every day.",
    "scenario": "You work from home two days a week, and your family walks past your desk. What does a clean desk policy look like there?"
  }
},
"8::Secure Disposal of Sensitive Documents": {
  "p1": {
    "on": "This slide says a sensitive document in regular trash or recycling is still readable, so shredding or a secure disposal service is what protects it, with a diagram. The steps: shred sensitive paper, securely delete sensitive digital files (moving to trash isn't enough), build disposal into a daily or weekly habit, make sure a shredder is accessible, and include drafts and working copies.",
    "say": "The recycling bin isn't disposal.",
    "ask": "Is there a shredder within reach of your desk?",
    "wrap": "Shred paper, securely delete digital files, and make it a habit, drafts included.",
    "scenario": "You printed three drafts of a client's estate plan while revising it. Where does each draft go when you're done, and what about the digital drafts on your desktop?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Shred paper, securely delete digital files, and make it a habit, drafts included.",
    "scenario": "You printed three drafts of a client's estate plan while revising it. Where does each draft go when you're done, and what about the digital drafts on your desktop?"
  }
},
"8::The First 10 Minutes of a Security Incident": {
  "p1": {
    "on": "This slide gives four steps for the first 10 minutes: Contain (stop further exposure by disconnecting, revoking access or pausing whatever is leaking), Assess (what was exposed, to whom), Notify (alert whoever needs to know immediately, without waiting for the full picture) and Document (write down what happened and when, in real time).",
    "say": "Contain, assess, notify, document.",
    "ask": "Would you investigate fully first, or escalate right away?"
  },
  "p2": {
    "on": "This slide says the instinct to fully understand before saying anything is costly; early notification with incomplete information is better. It extends the containment-first principle from the Confidentiality Leak topic into a general first response.",
    "say": "Notify early, even with an incomplete picture.",
    "wrap": "Contain first, notify fast and document as you go.",
    "scenario": "Roleplay, cold: you notice the firm's shared client folder has been publicly accessible by link for an unknown amount of time. What do you do in the first 10 minutes?"
  }
},
"8::Who to Notify and When": {
  "p1": {
    "on": "This slide says different incidents have different notification requirements: a confidentiality slip and a genuine data breach may trigger different people and timelines, with a diagram. The steps: know in advance which incident goes to IT, a specific partner or outside counsel, treat a genuine breach as carrying legal obligations, escalate when unsure, confirm contacts before you need them, and notify promptly.",
    "say": "Know who you'd call before you need to call them.",
    "ask": "Do you know exactly who you'd contact first for a security concern at your organization?",
    "wrap": "Know the contacts in advance, escalate when unsure and notify promptly.",
    "scenario": "Match each incident to who gets notified first: a laptop stolen from a car, an email with a client's SSN sent to the wrong person, a phishing email nobody clicked, and ransomware on the office file server."
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Know the contacts in advance, escalate when unsure and notify promptly.",
    "scenario": "Match each incident to who gets notified first: a laptop stolen from a car, an email with a client's SSN sent to the wrong person, a phishing email nobody clicked, and ransomware on the office file server."
  }
},
"8::Documenting an Incident as It Unfolds": {
  "p1": {
    "on": "This slide says a contemporaneous record (what happened, when, who was notified, what was done) is far more accurate and useful than one reconstructed later. The steps: write it down in real time, use short timestamped factual notes, record who was notified and when, keep it factual rather than about blame, and preserve it for the review and any legal or compliance needs.",
    "say": "Timestamps and facts, written as it happens.",
    "ask": "Could you rebuild a timeline of a stressful day last week from memory?"
  },
  "p2": {
    "on": "This slide says the documentation isn't about blame; it supports an accurate post-incident review and any legal or compliance requirements. Even rough real-time notes are more valuable than a polished summary written after details fade.",
    "say": "A rough note now beats a polished one later.",
    "wrap": "Log facts in real time, including who was told and when, and keep the record.",
    "scenario": "Using the misdirected-email scenario from earlier, write the first five timestamped lines of the incident log."
  }
},
"8::Post-Incident Review": {
  "p1": {
    "on": "This slide says a real review after an incident (what happened, what worked, what should change) prevents the same failure repeating. The steps: run the review instead of quietly closing the incident, focus on the process and the gap rather than the person, use the real-time documentation, identify one concrete change, and record the lesson like the Day 6 seasonal playbook.",
    "say": "Every review ends with one concrete change.",
    "ask": "Does your organization actually do post-incident reviews?"
  },
  "p2": {
    "on": "This slide says a good review focuses on the process gap, not blame, because blame-focused reviews make people hide the next incident. It connects to the Day 6 playbook discipline: the same continuous-improvement habit applied to incidents.",
    "say": "Blame teaches people to hide the next one.",
    "wrap": "Review the process, use the log and make one real change.",
    "scenario": "Run a five-minute review of the misdirected settlement email: what happened, what worked, what gap allowed it, and the one change you'd make."
  }
},
"8::Social Engineering Red Flags": {
  "p1": {
    "on": "This slide covers manipulation tactics, with a diagram. The steps: treat manufactured urgency as a red flag, verify anyone claiming authority (executive, IT, vendor) through a known separate channel, give out-of-pattern requests such as a new payment method a second look, apply the same verification used for NDA and access requests, and report attempts even if you didn't fall for them.",
    "say": "Urgency is the tactic. Slow down and verify.",
    "ask": "Have you caught a social engineering attempt in time? How?"
  },
  "p2": {
    "on": "This slide says social engineering targets people, not systems: the best technical security doesn't help if someone simply hands over access. The same independent verification from the NDA and access-request topics applies here.",
    "say": "The strongest system fails if someone hands over the keys.",
    "wrap": "Verify authority independently, question the unusual and report attempts.",
    "scenario": "A caller says they're Elias's new banker and need you to confirm his date of birth and the last four digits of his SSN to \"finish setting up his account today.\" What are the red flags, and what do you say?"
  }
},
"8::Phishing Recognition Beyond Email": {
  "p1": {
    "on": "This slide says phishing now comes through texts, phone calls and even calendar invites, so the same skepticism applies everywhere. The steps: check for the usual tells (generic greeting, slightly off sender, unexpected link or attachment), verify through a separate known channel, treat unusual channels as more suspicious, and report attempts whichever channel they arrive through.",
    "say": "Same tells, any channel.",
    "ask": "Have you seen a phishing attempt by text or phone?"
  },
  "p2": {
    "on": "This slide says a generic greeting, a slightly off sender and an unexpected attachment are still the most common tells, on any channel. Verify through a separate channel you already know, never a number or link in the message itself.",
    "say": "Attackers switch channels to get around email filters.",
    "wrap": "Question every channel and verify through one you already trust.",
    "scenario": "You get a calendar invite titled \"Urgent: Review Updated Retainer Terms\" with a document link, from an address one letter off from a client's domain. What do you do?"
  }
},
"8::Recognizing Insider Threat Warning Signs": {
  "p1": {
    "on": "This slide says not every risk comes from outside: access used in ways that don't match someone's role, or unusual data access patterns, are worth noticing. The steps: notice role mismatches without assuming malice, treat it as a system-level observation, recognize most incidents are well-meaning shortcuts, flag it to the right person rather than confronting anyone, and keep it about behavior and role fit.",
    "say": "Notice the pattern, not the person.",
    "ask": "Why is most insider risk a shortcut, not sabotage?"
  },
  "p2": {
    "on": "This slide says most insider incidents are a well-meaning person working around an inconvenient security control. It also says this isn't about suspecting colleagues by default; it's least-privilege discipline applied to access patterns that don't fit a role.",
    "say": "Flag it to the right person. Don't confront or ignore it.",
    "wrap": "Observe role-fit, assume good intent and route it properly.",
    "scenario": "You notice a billing clerk has been downloading entire client case files, which their role doesn't need. What do you do, and what do you avoid doing?"
  }
},
"8::Crisis Communication Principles": {
  "p1": {
    "on": "This slide says crisis communication should be calm, factual and frequent, because silence or vague reassurance increases anxiety. The steps: communicate on a frequent cadence, share only what's confirmed and label it, use Day 1's ACT framework (Acknowledge, Clarify what's unknown, give a Timeline for the next update), avoid vague reassurance, and confirm updates reached everyone.",
    "say": "Acknowledge, clarify what's unknown and say when the next update comes.",
    "ask": "When has poor communication made a crisis worse?"
  },
  "p2": {
    "on": "This slide warns that labeling only confirmed facts stops speculation being repeated as fact. It links back to the ACT framework from Day 1, which works in a crisis too.",
    "say": "Factual and incomplete beats confident and wrong.",
    "wrap": "Calm, confirmed, frequent, with a time for the next update.",
    "scenario": "The firm's email is down firm-wide on a filing day, and IT doesn't know why yet. Write the first update to the attorneys using ACT."
  }
},
"8::Maintaining Calm Under Pressure": {
  "p1": {
    "on": "This slide says your visible calm is often the only calm in the room, and it's contagious, and so is panic. The steps: pause a few seconds before responding, keep your demeanor calm and deliberate, distinguish calm from passive, practice a technique in advance (a pause, a breathing count, a mental checklist) and debrief your own reaction afterward.",
    "say": "Pause for a few seconds before you respond.",
    "ask": "What technique actually helps you stay calm?"
  },
  "p2": {
    "on": "This slide says calm isn't passive: it's thinking clearly and acting deliberately while others react, and it can be practiced. The simplest technique is a pause before responding, rather than acting on the first instinct.",
    "say": "Calm is a skill, not a personality trait.",
    "wrap": "Pause, stay deliberate and practice before you need it.",
    "scenario": "Elias bursts in: the judge moved the hearing to this afternoon and the exhibit binders aren't printed. Show the room your first 30 seconds: what you say and what you do."
  }
},
"8::Chain of Command During a Crisis": {
  "p1": {
    "on": "This slide says a crisis is the wrong time to find out who has authority for which decisions. The steps: know the chain of command in advance, use the Day 1 Command Hierarchy rather than improvising, identify a backup contact for each escalation point, escalate through the chain even under time pressure, and check periodically that backups are current.",
    "say": "Know the chain and the backups before the crisis.",
    "ask": "Who's your backup contact if your primary escalation point is unreachable?"
  },
  "p2": {
    "on": "This slide links to the Day 1 Command Hierarchy: the same structure used for routine escalation holds during a crisis. When the usual contact can't be reached, knowing the backup path in advance prevents a dangerous gap.",
    "say": "The routine hierarchy is the crisis hierarchy.",
    "wrap": "Use the known chain, with backups identified in advance.",
    "scenario": "A client's funds wire is flagged as possibly fraudulent at 4:45 p.m. Elias is on a flight and the managing partner isn't answering. Who's next in the chain, and what do you do?"
  }
},
"8::Business Continuity Basics": {
  "p1": {
    "on": "This slide says a continuity plan answers one question in advance: if a key system, person or resource disappeared tomorrow, what's the plan? The steps: identify critical dependencies, list them with key contacts and backups, apply the Day 5 backup-vendor and Home Binder principle at organizational scale, find your single points of failure, and revisit the plan periodically.",
    "say": "Plan before you need it.",
    "ask": "What's one single point of failure in your work right now?"
  },
  "p2": {
    "on": "This slide says the plan doesn't need to be elaborate: a basic list of critical systems, key contacts and backups covers most of the value. It connects to backup vendors and the Home Binder: the same \"plan before you need it\" principle.",
    "say": "A simple list covers most of the value.",
    "wrap": "List dependencies, name backups and fix single points of failure.",
    "scenario": "The firm's case management system goes down for a full day during trial week. What does the continuity plan need to say, and what should already be printed or backed up?"
  }
},
"8::Attorney-Client Privilege: What EAs Need to Know": {
  "p1": {
    "on": "This slide explains that attorney-client privilege protects confidential communications between lawyer and client for seeking or giving legal advice. The steps: treat such communications as privileged by default, check recipients before sending because the wrong person can waive privilege, don't discuss cases where you can be overheard, recognize you sit inside the privileged relationship, and ask the attorney when unsure.",
    "say": "One wrong recipient can waive privilege.",
    "ask": "How could privilege be waived by accident?"
  },
  "p2": {
    "on": "This slide warns that disclosure to the wrong person, including an outsider on an email chain, can waive privilege. As an EA you sit inside the privileged relationship, so the same confidentiality applies to you. When unsure, ask the attorney: an accidental disclosure can't be undone.",
    "say": "An accidental disclosure can't be undone.",
    "wrap": "Treat it as privileged, check every recipient and ask when unsure.",
    "scenario": "Elias asks you to forward his advice email to the client, and the client asks you to cc their business partner, who isn't a party to the matter. What do you do?"
  }
},
"8::HIPAA in a Legal Context": {
  "p1": {
    "on": "This slide explains that HIPAA protects individually identifiable health information and applies whenever a legal matter involves medical records. The steps: recognize matters that touch medical records (personal injury, workers' comp, disability), apply HIPAA even outside health practice areas, share medical records only with those who need them, classify them at the highest sensitivity, and ask the attorney when unsure.",
    "say": "Medical records in a case file are always top-tier sensitive.",
    "ask": "Has anyone handled a case file with medical records in it?"
  },
  "p2": {
    "on": "This slide says HIPAA can apply the moment a case file includes any medical information; the firm doesn't need to be in healthcare. Practical handling matters as much as the theory, and health information connects to the top level of the classification framework.",
    "say": "The firm doesn't need to be in healthcare for HIPAA to matter.",
    "wrap": "Recognize it, restrict it and ask when unsure.",
    "scenario": "A personal-injury client emails you their full hospital records and asks you to forward them to their chiropractor and their employer. What do you do?"
  }
},
"8::GDPR & Data Privacy Regulations": {
  "p1": {
    "on": "This slide explains that GDPR governs personal data of individuals in the EU and can apply to a US firm handling such data. The steps: recognize GDPR may apply regardless of where the firm is based, account for data rights (access and deletion requests) in records, check at intake whether a matter involves non-US personal data, note similar US state laws like California's CCPA, and flag possible obligations to the attorney early.",
    "say": "GDPR follows the data, not the firm's location.",
    "ask": "Does your firm handle data from anyone outside the US?"
  },
  "p2": {
    "on": "This slide says GDPR gives people rights over their data, including knowing what's held and often having it deleted. US state laws like the CCPA work similarly in spirit. The practical takeaway is recognizing when a matter might trigger these rules, not memorizing them.",
    "say": "Recognize the trigger. The attorney handles the specifics.",
    "wrap": "Check at intake, respect data rights and flag early.",
    "scenario": "A new client is a German company with employees in Berlin and Chicago, and the matter involves employee records from both offices. What do you flag to Elias at intake?"
  }
},
"8::Other Relevant Compliance Frameworks": {
  "p1": {
    "on": "This slide says to recognize the pattern rather than memorize every framework: health, financial, minors' and non-US data get extra care by default. It names Sarbanes-Oxley for public-company financial records, GLBA for financial data and FERPA for education records, and notes that state bar ethics rules add confidentiality duties beyond privilege. The diagram maps these, and the steps say to ask the attorney about unfamiliar areas.",
    "say": "Certain categories get extra care before you know the exact law.",
    "ask": "Which regulations apply to your firm's practice areas?"
  },
  "p2": {
    "on": "This slide says legal work touches a wide range of frameworks depending on client and matter, and no training covers them all. The transferable skill is pattern recognition, and asking the attorney about specific obligations is always right.",
    "say": "Pattern recognition is the skill. Asking is always right.",
    "wrap": "Recognize sensitive categories, handle them carefully and ask about specifics.",
    "scenario": "A new matter involves a public company's internal financial controls and a student's school records. Which frameworks might apply, and what do you ask Elias?"
  }
},
"8::Work-Product Confidentiality": {
  "p1": {
    "on": "This slide explains that attorney work product (strategy memos, draft arguments, internal case analysis) has its own protection separate from privilege, and it can be lost through careless handling even when no client communication is involved. The steps: handle work product with the same care as privileged material, never share it outside the matter team without confirmation, and label and store it clearly.",
    "say": "Work product has its own protection, and it can be lost through carelessness.",
    "ask": "What counts as work product in a case file?"
  },
  "p2": {
    "on": "This slide warns against assuming something is safe to share because it isn't a client communication. When unsure whether a document is protected work product, treat it as protected: the cost of caution is small.",
    "say": "Not a client communication doesn't mean shareable.",
    "wrap": "Handle it like privileged material, label it and keep it within the team.",
    "scenario": "A colleague on an unrelated matter asks to see a strategy memo from a case you support, saying it would help with a similar issue. What do you do?"
  }
},
"8::Investor Disclosure Confidentiality": {
  "p1": {
    "on": "This slide says information shared with investors often carries its own confidentiality obligations: some is appropriate for investors but not for general internal or public audiences. The steps: confirm what's cleared for investor disclosure before including it, keep investor materials in access-controlled storage, and escalate requests beyond prepared materials rather than answering directly.",
    "say": "Confirm it's cleared before it goes to an investor.",
    "ask": "Who decides what an investor can be told?"
  },
  "p2": {
    "on": "This slide warns against treating investors as entitled to any information that seems relevant without confirming disclosure boundaries. It connects to investor briefing preparation: confidentiality and disclosure prep work together.",
    "say": "Interest isn't entitlement.",
    "wrap": "Confirm clearance, restrict access and escalate new requests.",
    "scenario": "An investor emails asking for details about an ongoing matter that hasn't been publicly disclosed. What do you do before responding?"
  }
},
"8::Crisis PR & Media Containment": {
  "p1": {
    "on": "This slide says a media crisis moves faster than most, with minutes to shape the first response, building on reputational risk and crisis communication. The steps: confirm who is authorized to speak (already established, not decided under pressure), give unauthorized people a safe, consistent holding statement, and escalate to communications, legal and the executive in parallel.",
    "say": "Escalate in parallel. Media won't wait for a sequential chain.",
    "ask": "If you're not the spokesperson, what do you say?"
  },
  "p2": {
    "on": "This slide warns against personally managing media attention outside the authorization chain, even with good intentions. A fast, correct \"no comment, here's who to contact\" protects everyone better than a fast, unauthorized attempt to help.",
    "say": "\"No comment, here's who to contact\" is the right fast answer.",
    "wrap": "Know the spokesperson, use the holding statement and escalate in parallel.",
    "scenario": "A journalist calls you directly, bypassing the firm's usual channels, asking for comment on a sensitive matter. What do you say, and who do you contact the moment you hang up?"
  }
},
"9::Running an Event End-to-End": {
  "p1": {
    "on": "This slide says to track registration by name so gaps surface right away, not at the event. The steps: track each registrant's status from the moment registration opens, build the engagement-tracking plan (who attends what, what materials they need) beforehand, follow up on incomplete registrations early, reconcile registrations against actual attendance, and feed problems into next time.",
    "say": "Track by name, not just headcount.",
    "ask": "What went wrong the first time you managed registrations for anything?"
  },
  "p2": {
    "on": "This slide gives the event timeline. At 8–12 weeks: goals, budget, date, venue and invitation list. At 4–6 weeks: invitations, speakers, catering and AV. At 1 week: numbers, run-of-show, badges and materials. On the day: arrive early, tech check, track check-ins. After: thank-yous within 48 hours, feedback, budget reconciliation and lessons logged.",
    "say": "Thank-you notes go out within 48 hours.",
    "wrap": "Plan on the timeline, track by name and log the lessons.",
    "scenario": "Thorne & Partners is hosting a client appreciation evening for 60 guests in 10 weeks. What's done by week 8, week 4 and the day before?"
  }
},
"9::Four SOPs That Keep Professional Development on Track": {
  "p1": {
    "on": "This slide gives four SOPs, with a diagram. Event Registration: verify the provider, confirm budget and approval, and record the confirmation. Attendance Tracking: monitor live, export reports and save certificates in an audit-ready folder. Team Upskilling: assess needs quarterly, vet vendors and track completion and ROI. Reputation & Recognition: track awards and speaking, keep bios current, and escalate negative publicity.",
    "say": "Four SOPs, each preventing a specific, predictable failure.",
    "ask": "Which one would you be most tempted to skip?"
  },
  "p2": {
    "on": "This slide says each SOP prevents a specific failure: missing a legitimate event, losing a certificate needed for an audit, or spending on training that doesn't work. It summarizes the four at a glance, including measuring whether training actually changed performance.",
    "say": "Reputation & Recognition feels least urgent, so it's the one that gets skipped.",
    "wrap": "Run all four, especially the one that feels least urgent.",
    "scenario": "Elias wants to attend a $1,200 legal-tech summit from a provider you've never heard of. Walk through the Event Registration SOP before you book."
  }
},
"9::CLE / Compliance Tracking": {
  "p1": {
    "on": "This slide says to log completed hours, pending hours and the deadline for each person. The steps: track per person, not as a total, flag anyone approaching a deadline with real time left, verify hours count toward the requirement (category and jurisdiction), set long lead times because deadlines rarely extend, and reconcile the tracker against certificates on file.",
    "say": "Per person, with real lead time, because these deadlines don't extend.",
    "ask": "Why is a single total hours number dangerous?"
  },
  "p2": {
    "on": "This slide explains CLE basics: each state bar sets total hours per reporting period (often 1–3 years) plus required categories such as ethics. Hours usually come from accredited providers and must be reported by a deadline, and some states allow carry-over. Keep every certificate as proof for an audit, and confirm each attorney's state rules.",
    "say": "The certificate is the proof. Keep every one.",
    "wrap": "Track per person, verify categories and keep the certificates.",
    "scenario": "Elias has 18 of 25 required hours, needs 2 more ethics hours, and his reporting deadline is in 7 weeks. What do you flag today, and what do you check about the hours he has?"
  }
},
"9::Protecting the Brand Online": {
  "p1": {
    "on": "This slide says to respond to negative reviews professionally and factually and never escalate publicly. The steps: monitor mentions and reviews proactively, respond calmly regardless of the tone of the original, apply the \"need to know\" principle to anything sensitive, draft a considered response rather than reacting, and escalate anything beyond a routine review, such as a legal threat or coordinated attack.",
    "say": "Never escalate publicly.",
    "ask": "How would your response differ written cold versus with time to think?"
  },
  "p2": {
    "on": "This slide says a well-handled negative review can do more for the brand than ten positive ones. It describes the \"need to know\" principle, called The Vault in training: information moves from Executive Secret to Organizational Liability the moment it's shared too widely.",
    "say": "A well-handled bad review beats ten good ones.",
    "wrap": "Monitor, respond calmly and factually, and escalate what's beyond routine.",
    "scenario": "A former client posts a one-star review: \"Thorne & Partners never returned my calls and overcharged me.\" Draft the public reply live, then say what you'd check before posting it."
  }
},
"9::Awards, Recognition & Charitable Coordination": {
  "p1": {
    "on": "This slide says award applications need the same discipline as any application: exact eligibility, exact materials and a real deadline, with a diagram. The steps: keep a yearly awards tracker (name, deadline, eligibility, materials, status), confirm criteria early, track charitable commitments through to fulfilment, keep documentation of contributions for tax and reporting, and treat both as proactive reputation-building.",
    "say": "Strong nominations get missed because nobody tracked the deadline.",
    "ask": "Has your organization ever missed an award deadline?",
    "wrap": "Track awards and charitable commitments like any deadline, and keep the documentation.",
    "scenario": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documentation do you keep?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Track awards and charitable commitments like any deadline, and keep the documentation.",
    "scenario": "Elias pledged $5,000 to a legal aid gala and was nominated for a regional bar award due in three weeks. What goes in the tracker for each, and what documentation do you keep?"
  }
},
"9::Membership Renewals": {
  "p1": {
    "on": "This slide says a renewal tracker (name, expiration, status, follow-up owner) catches lapses before they happen. The steps: track every membership, set reminders well before expiration, automate reminders once volume grows, confirm terms haven't changed before renewing, and review for memberships no longer used.",
    "say": "Remind well before expiry, and automate once there are many.",
    "ask": "Has a membership ever lapsed on you without warning?"
  },
  "p2": {
    "on": "This slide lists what to track per membership: organization, member, level, renewal date, annual cost, approver, auto-renew status and the payment method on file (expired cards are a common silent cause of lapses). A yearly value check stops paying for associations nobody attends.",
    "say": "Expired cards are why memberships lapse silently.",
    "wrap": "Track, remind early, check the payment method and review the value.",
    "scenario": "Elias's state bar membership, two practice-section memberships and a country club all renew within the next 60 days, and one card on file expires this month. Build the tracker rows and say what you'd do first."
  }
},
"9::Planning Professional Development": {
  "p1": {
    "on": "This slide says to offer virtual and in-person options to fit different schedules. The steps: define an effectiveness metric for each session beforehand (not just attendance), gather feedback immediately, track completion and outcomes over time to see patterns, and adjust the next session based on what you learned.",
    "say": "Attendance doesn't prove it worked.",
    "ask": "How would you measure whether this training session worked?"
  },
  "p2": {
    "on": "This slide gives four levels of effectiveness: Reaction (did people find it useful?), Learning (can they demonstrate the skill?), Behavior (are they using it weeks later?) and Results (did performance improve?). Even a simple before-and-after check on one skill tells you more than attendance.",
    "say": "One before-and-after check beats any attendance number.",
    "wrap": "Define the metric first, collect feedback fast and adjust.",
    "scenario": "The firm runs a lunch-and-learn on the new document management system. Define one measure at each of the four levels."
  }
},
"9::High-Stakes Travel Disruption Management": {
  "p1": {
    "on": "This slide calls travel disruption a triage skill: the stakes are what the executive misses, and preparation from calmer days pays off. The steps: identify the single most time-critical commitment, check rebooking in the airline app while calling, evaluate alternatives in order (another airport, another airline, ground transport), send one clear message with the plan, and update every downstream party.",
    "say": "Find the fixed point first, then work backward.",
    "ask": "Why check the app while you're on hold?"
  },
  "p2": {
    "on": "This slide warns that the executive should never discover a disruption from an app notification first, and a stressed executive needs the resolved plan, not live narration. It warns against fixing the flight but breaking the car pickup or hotel check-in, and says to keep a standing note of hard constraints (no red-eyes, aisle seats, dietary needs).",
    "say": "Give them the plan, not the play-by-play.",
    "wrap": "Triage the fixed point, work options in parallel, send one message and fix the ripples.",
    "scenario": "Elias's connecting flight to a closing-day meeting is cancelled with no same-day rebooking, and the meeting can't move. Option one: a red-eye on another airline that lands two hours before. Option two: a private car for the last leg that costs much more but lets him sleep. How do you decide, and how do you present it?"
  }
},
"9::Board Meeting Preparation & Minute Drafting": {
  "p1": {
    "on": "This slide says board prep makes decisions efficient once the board is in the room, and minutes are a legal and governance record, not a transcript. The steps: confirm the agenda early and circulate materials with lead time, build the packet the same way every time, capture attendance, motions, seconders and vote outcomes, draft minutes promptly in neutral language, and circulate drafts for correction.",
    "say": "Minutes record what was decided, not who argued what.",
    "ask": "What four things must you capture for every motion?"
  },
  "p2": {
    "on": "This slide warns against narrative minutes that record opinions and disagreement, which create legal exposure, and against vague language. \"The board discussed the budget\" isn't a minute; \"Motion to approve the FY26 budget as presented, seconded, passed 5–0\" is. Sensitive discussions may be noted without specifics, after checking with counsel, and a late packet can undermine a decision's legitimacy.",
    "say": "Vague motion language isn't a record.",
    "wrap": "Prepare early, capture the motions exactly and keep the minutes neutral.",
    "scenario": "A motion is raised, debated with real disagreement, amended once and passed 4–1. You're taking minutes live. What must you capture exactly, and what do you deliberately leave out?"
  }
},
"9::Federal/State/Financial Infrastructure": {
  "p1": {
    "on": "This slide says a new entity needs financial and regulatory infrastructure at three levels: federal (IRS), state (tax and labor agencies) and financial (banking), kept separate from personal finances from day one. The steps: get the EIN right after formation, register with state tax agencies, open a dedicated business bank account, set up bookkeeping before the first transaction, and register for payroll withholding before the first paycheck.",
    "say": "Business money never runs through a personal account.",
    "ask": "Is state tax registration automatic when you form an entity?"
  },
  "p2": {
    "on": "This slide warns that commingling personal and business funds, even briefly, is one of the most common ways founders undermine their liability protection, and state tax registration is never automatic. It says to keep every registration confirmation in the permanent file and register separately in each state with a real presence.",
    "say": "Commingling, even once, weakens the liability shield.",
    "wrap": "EIN, state registration, a separate bank account and books before day one.",
    "scenario": "Elias's new consulting LLC has its EIN and a bank account opening this week. He paid the filing attorney's invoice on his personal card \"to get it done faster\" and plans to reimburse himself. What's the risk, and how do you help him before it becomes a habit?"
  }
},
"9::Video Conferencing: Platform Admin (Zoom/Teams/Meet)": {
  "p1": {
    "on": "This slide says platform admin means owning settings, scheduling and account configuration, not just attending. Zoom, Teams and Meet differ, and most problems are prevented by setup. The steps: set core settings before scheduling (waiting room, screen share, recording, notifications), use a platform-specific pre-meeting checklist, know how to manage participants live, and review account-level defaults periodically.",
    "say": "Set it up right beforehand, and most problems never happen.",
    "ask": "What settings would you check before a confidential call?"
  },
  "p2": {
    "on": "This slide warns that defaults don't suit every meeting, since a confidential internal call and a public webinar need different security. It says to test unfamiliar formats (webinars, breakout rooms) before going live, give a backup person access to the platform, and document platform quirks.",
    "say": "A sensitive call and a public webinar need different settings.",
    "wrap": "Configure per meeting type, test new formats and have a backup admin.",
    "scenario": "Elias's confidential strategy call with senior partners went out on a general meeting link with no waiting room or registration. What do you change before the call, and how do you raise it since the invite is already out?"
  }
},
"9::Live Event Moderation": {
  "p1": {
    "on": "This slide says live moderation is the real-time management of a virtual event, keeping it smooth for audience and presenter, following Reminder → Login Confirmed → Attendance Verified → Monitor → Document → Follow-Up. The steps: confirm login, audio and video beforehand, monitor actively, track participation for CLE-eligible sessions, and complete the post-event sequence including certificates and credit hours.",
    "say": "Monitor actively. Don't wait for something to break.",
    "ask": "What would you watch for during a live webinar?"
  },
  "p2": {
    "on": "This slide warns against passive moderation. It says to keep a visible checklist, document technical issues as they happen, and give speaking engagements extra oversight: an accurate introduction, loaded materials and confirmed recording.",
    "say": "A visible checklist beats memory during a live event.",
    "wrap": "Check beforehand, monitor actively, document and follow up.",
    "scenario": "Ten minutes into a webinar where Elias is the featured speaker, his audio starts cutting out and the audience is commenting in the chat. What do you do, in what order, without disrupting him more than necessary?"
  }
},
"9::Executive Meeting Etiquette": {
  "p1": {
    "on": "This slide says executive-level video etiquette has a higher standard, and the EA/PA's conduct reflects on the executive. The point is removing friction, not formality. The steps: send a pre-call note (agenda, duration, participants and roles, format), join early to check the technology, keep your own presence professional and unobtrusive, and handle mechanics quietly so the executive can focus.",
    "say": "Join early. Problems get found before the executive arrives.",
    "ask": "What small lapse on a call reflects badly on the executive?"
  },
  "p2": {
    "on": "This slide warns that small lapses (background noise, a late join, an unprepared executive) add up. It says to send reminders 24–48 hours ahead with prep materials, confirm participants and roles in advance, and never let a technical or scheduling issue become the executive's problem to solve live.",
    "say": "The executive should never have to troubleshoot live.",
    "wrap": "Prepare them, join early, stay unobtrusive and handle the mechanics.",
    "scenario": "Thirty seconds before Elias's call with a prospective client, you notice the invite was for the wrong time zone and the client may have been waiting for an hour. What do you do right now?"
  }
},
"9::Video Conferencing: Technical Troubleshooting": {
  "p1": {
    "on": "This slide says most video problems fall into a few categories (login, audio and video, screen share), and the goal live is rapid triage, then documentation. The steps: for login, verify the link, check the browser and contact support; for audio and video, check device selection, app permissions and connection; keep a backup channel ready; and document every issue.",
    "say": "Get the call working first. Diagnose afterward.",
    "ask": "What's your backup if the platform fails completely?"
  },
  "p2": {
    "on": "This slide warns against trying every fix at once instead of working likely causes in order. It says to keep the provider's support contact handy, test unfamiliar setups in advance, and give participants a calm explanation during delays rather than silence.",
    "say": "Systematic beats random, even under pressure.",
    "wrap": "Triage in order, have a backup channel and document every issue.",
    "scenario": "Fifteen minutes before a critical client call, you find the meeting platform is down for planned maintenance you didn't know about. What's your triage sequence in the next five minutes?"
  }
},
"9::Shareholder & Investor Meeting (AGM) Logistics": {
  "p1": {
    "on": "This slide says an AGM has formal requirements beyond a board meeting: notice periods, quorum and voting procedures, building on board meeting preparation. The steps: confirm the required notice period for the meeting type and jurisdiction well in advance, track RSVPs against quorum, and prepare the structured packet scaled to the larger audience.",
    "say": "No quorum, no valid business.",
    "ask": "Why track RSVPs against quorum specifically?"
  },
  "p2": {
    "on": "This slide warns against treating an AGM as a bigger board meeting without checking the legal notice and quorum rules. It says to confirm voting and proxy procedures well in advance and never improvise them with shareholders in the room.",
    "say": "Proxy and voting procedures are never improvised.",
    "wrap": "Confirm notice, track quorum and settle voting procedures early.",
    "scenario": "You realize the AGM notice went out later than the jurisdiction's minimum notice period. What do you want confirmed before the meeting goes ahead as scheduled?"
  }
},
"9::Ethics & Gift Compliance": {
  "p1": {
    "on": "This slide says gifts and hospitality involving clients, vendors or officials can create real ethics exposure, and the rules are often stricter than intuition suggests. The steps: know the firm's gift and hospitality policy, log gifts given or received above any threshold, and take extra care with government officials and regulated parties.",
    "say": "Know the policy, and log anything above the threshold.",
    "ask": "Why is a gift to a government official different?"
  },
  "p2": {
    "on": "This slide warns against assuming a gift is fine because it's modest or \"everyone does this.\" When unsure, ask before accepting or sending, because an unnecessary question costs nothing compared with a compliance problem.",
    "say": "\"Everyone does this\" isn't a policy.",
    "wrap": "Check the policy, log the gift and ask when unsure.",
    "scenario": "A vendor sends an expensive bottle of whisky and a $300 restaurant voucher to the office for the holidays. What do you do with it, and what do you check first?"
  }
},
"9::Speaker & Panelist Logistics for Conferences": {
  "p1": {
    "on": "This slide says that when the executive speaks, the EA's job covers travel, materials, tech and content prep, on the organizer's deadlines. The steps: keep one checklist per engagement (bio and headshot, slide deadline, AV needs, travel) with internal deadlines, confirm the format (keynote, panel, fireside chat) early, and send the executive one consolidated briefing.",
    "say": "One checklist per engagement, with deadlines ahead of the organizer's.",
    "ask": "How does prep differ for a keynote versus a panel?"
  },
  "p2": {
    "on": "This slide warns against treating a speaking engagement as just another calendar item. It says to confirm AV requirements with the venue directly, not only the organizer, and to send slides 24–48 hours before the organizer's deadline.",
    "say": "Confirm AV with the venue, not just the organizer.",
    "wrap": "Checklist, confirmed format, early deliverables and one briefing.",
    "scenario": "Elias is a panelist in three weeks, and the organizer wants his bio, headshot and pre-submitted questions by Friday. What's your process so it doesn't become a fire drill?"
  }
},
"9::Sponsorship & Vendor Contract Basics for Events": {
  "p1": {
    "on": "This slide says sponsorships and event vendor agreements are real contracts, and the EA/PA is often first to notice an unfulfilled deliverable. The steps: confirm every deliverable owed (logo placement, attendee list, speaking slot) before the event, keep the signed agreement on hand during it, and track cost against value delivered for ROI.",
    "say": "Keep the signed agreement with you at the event.",
    "ask": "Which sponsorship deliverables would you check before the doors open?"
  },
  "p2": {
    "on": "This slide warns against assuming a promised deliverable happened: check the signage and confirm the attendee list arrived. It says never to auto-renew a sponsorship without assessing value, and to flag gaps to the organizer in writing, promptly.",
    "say": "A written flag on the day beats a complaint afterward.",
    "wrap": "Verify deliverables, keep the contract handy and flag gaps in writing.",
    "scenario": "At a sponsored event, the firm's logo is missing from the printed program even though the agreement guarantees it. What do you do in the moment, and what do you follow up on afterward?"
  }
},
"9::Post-Event Follow-Up & ROI Tracking": {
  "p1": {
    "on": "This slide says an event's real value comes afterward, because without structured follow-up, new connections decay like any other contact. The steps: build the follow-up list during the event with notes on who was met and what was discussed, follow up within 48–72 hours, and log attendance and outcomes in the main relationship tracker.",
    "say": "Follow up within 72 hours, while they still remember you.",
    "ask": "What note would you want next to each contact?"
  },
  "p2": {
    "on": "This slide warns that a stack of business cards with no notes is nearly useless a week later, and that generic follow-up (\"great meeting you\") doesn't work. It says to track a simple ROI measure per event: leads, relationships deepened, deals influenced.",
    "say": "Reference the actual conversation, not just the event.",
    "wrap": "Take notes live, follow up fast and track the ROI.",
    "scenario": "Elias returns from a three-day conference with 40 new contacts and no notes on any of them. How do you turn that stack into useful follow-up instead of one generic email to everyone?"
  }
},
"9::Professional Liability & Insurance Awareness": {
  "p1": {
    "on": "This slide says an EA/PA needn't be an insurance expert but should know professional liability (malpractice) coverage exists, and that spotting a possible claim early gives the firm more options. The steps: know where policy documents and renewal dates are filed, flag client language suggesting a complaint or damages to the right person, and keep policy dates on the compliance calendar.",
    "say": "Spot it early and route it. Never assess it yourself.",
    "ask": "What client language would make you escalate?"
  },
  "p2": {
    "on": "This slide warns against treating every complaint as routine, because the EA/PA is often first to see language that should be escalated. Never assess coverage or liability yourself; that goes to the attorney. Handle this correspondence with privileged-level discretion.",
    "say": "Coverage questions go to the attorney, always.",
    "wrap": "Know where the policy lives, flag early and keep it confidential.",
    "scenario": "A client's email says, \"We're considering our options given how this was handled.\" What's your read, and what do you do with the email beyond replying normally?"
  }
},
"9::Building an Executive's Media & Speaking Kit": {
  "p1": {
    "on": "This slide says a ready-to-send media kit (bio, headshot, talking points, past coverage) turns a press or speaking request into a same-day response, but only if it's current. The steps: keep a standing folder with short and long bios, a recent headshot and a one-page background, log past coverage and engagements, and refresh the kit quarterly.",
    "say": "A current kit turns a scramble into a same-day reply.",
    "ask": "When was Elias's bio last updated?"
  },
  "p2": {
    "on": "This slide warns against updating the bio only when asked, because by then it's stale. It says to keep headshots in print and web resolutions, and always review the kit before sending, since an old title or a finished project listed as ongoing undermines credibility.",
    "say": "Review before you send, every time.",
    "wrap": "Keep it current, keep formats ready and refresh quarterly.",
    "scenario": "A journalist needs Elias's bio and headshot in two hours for a feature. The bio on file is over a year old and names a role he no longer holds. What do you do, given the deadline?"
  }
},
"10::Social Media Management vs. Marketing": {
  "p1": {
    "on": "This slide separates two kinds of social media work, with a comparison table. Management keeps the account running (steady presence, timely DM replies, current bio and calendar) and is measured by consistency, follower growth and response time. Marketing is a campaign for growth, leads or conversions, measured by clicks and ROI. If a task spans both, split it.",
    "say": "Management keeps it running. Marketing brings new people in.",
    "ask": "In one sentence, what's the difference between managing and marketing an account?"
  },
  "p2": {
    "on": "This slide gives the analogy: Management is the restaurant's dining room, keeping guests happy and the menu updated; Marketing is the highway billboard bringing new people in. EAs usually own Management (consistency, scheduling, DM filtering), and PAs and marketing specialists lean into Marketing.",
    "say": "Measure each with its own metric, or good work looks like failure.",
    "wrap": "Name the task type, then use the right metric.",
    "scenario": "Elias asks you to \"handle his LinkedIn\" and also \"get more consultation leads from it this quarter.\" Split it: which parts are management, which are marketing, and how do you measure each?"
  }
},
"10::EA vs. PA Roles in Social Media": {
  "p1": {
    "on": "This slide divides social media work between roles, with a diagram. The EA manages the content calendar and timing, filters DMs and comments for networking, media or urgent issues, and reviews every post against the executive's persona and policy. The PA creates content (capturing moments, editing in Canva or CapCut) and maintains bios, links and personal community replies.",
    "say": "The EA protects the brand. The PA produces the content.",
    "ask": "Have you seen strategy and content creation split between two people? How did it work?"
  },
  "p2": {
    "on": "This slide gives the role labels. The EA is the Gatekeeper & Moderator: the daily task is filtering DMs and updating bios, and in a crisis it's spotting negative PR early. The PA is the Ghostwriter & Promoter: the daily task is writing and sharing wins, and in a crisis it's distributing good news.",
    "say": "Gatekeeper and moderator versus ghostwriter and promoter.",
    "wrap": "Divide the work clearly so strategy and creation don't collide.",
    "scenario": "In one morning: a journalist DMs Elias, a client comments on his post, event photos need editing, and his bio still lists an old title. Who handles each, the EA or the PA?"
  }
},
"10::The Executive Personal Brand Style Guide": {
  "p1": {
    "on": "This slide lists the style guide's five parts, with a diagram. North Star: the primary goal and the three expert topics. Voice & Tone: point of view, emoji and punctuation rules. The Never List: banned topics, buzzwords and formats (such as no more than 5 hashtags). Engagement Protocol: who gets a reply, trolls and approvals. Visual Standard: about 70% candid, 30% polished.",
    "say": "Written down, not left to instinct.",
    "ask": "What's one item you'd put on an executive's Never List?"
  },
  "p2": {
    "on": "This slide says a style guide only works if it's written somewhere everyone drafting content can see it. It lists what goes in: the North Star and audience, voice and tone rules, 3–5 content pillars, a Never list, visual rules (colors, fonts, photo style, approved headshots) and an approval workflow.",
    "say": "An unwritten sense of the brand doesn't survive a second contributor.",
    "wrap": "Write down the goal, voice, Never list, engagement rules and visuals.",
    "scenario": "Draft the first version of Elias's Never List live: three banned topics, two banned buzzwords and one formatting rule."
  }
},
"10::Content Pillars & Finding the Brand Voice": {
  "p1": {
    "on": "This slide gives two tools, with a diagram. The \"This, Not That\" boundaries: confident not sarcastic, witty not arrogant, accessible not simple, bold not aggressive. The four voice spectrums: funny versus serious, formal versus casual, detached versus enthusiastic, irreverent versus respectful. The steps: place the voice on each spectrum, check content against it, and diagnose drift by spectrum.",
    "say": "Place the voice on each spectrum deliberately.",
    "ask": "Where does Elias sit between formal and casual?"
  },
  "p2": {
    "on": "This slide explains the \"This, Not That\" exercise as boundaries for writers. It says a consistent voice signals a real person is behind the account; if it changes every two days, the audience gets \"brand whiplash\" and unfollows.",
    "say": "Voice drift causes brand whiplash and unfollows.",
    "wrap": "Set the boundaries, place the spectrums and check every post against them.",
    "scenario": "Run \"This, Not That\" on the board for Elias: four pairs, then place him on each of the four spectrums."
  }
},
"10::Defining and Maintaining Brand Voice, Tone & Messaging": {
  "p1": {
    "on": "This slide describes Elias's voice, with a diagram: direct, leading with the answer; every claim backed by a specific detail, not \"amazing\" or \"innovative\"; unhurried and selective rather than chasing trends. The steps: cut hedging such as \"we believe\" or \"it's possible that,\" and compare every draft against a real example of the correct voice.",
    "say": "Direct, specific, unhurried.",
    "ask": "What hedging phrase shows up most in drafts?"
  },
  "p2": {
    "on": "This slide says defining a voice is easy and maintaining it across months and contributors is the hard part. It separates the three layers: voice is the constant personality, tone flexes with context (celebratory, measured, empathetic), and messaging is the recurring core ideas. Audit a sample of posts quarterly against all three.",
    "say": "Voice stays constant. Tone flexes. Messaging repeats.",
    "wrap": "Write direct and specific, cut hedging and audit quarterly.",
    "scenario": "Rewrite this line in Elias's voice live: \"We believe our innovative, client-first approach may potentially deliver amazing results for businesses navigating complex disputes.\""
  }
},
"10::Making a Voice Guide Actually Stick": {
  "p1": {
    "on": "This slide says a style guide needs concrete \"this, not that\" example sentences, not just adjectives. The steps: add messaging guidelines as a layer above tone, name a reviewer who checks drafts before publishing, check new contributors' first drafts closely, and update the guide when a new correct pattern emerges.",
    "say": "Without a named reviewer, the guide stops being used within a month.",
    "ask": "Who would review drafts against the guide where you work?"
  },
  "p2": {
    "on": "This slide explains that messaging guidelines define specific claims and framing used consistently, such as always describing the firm the same way. The maintenance mechanism matters as much as the guide: someone has to review drafts, or the guide quietly stops being used.",
    "say": "The guide is only as good as the review behind it.",
    "wrap": "Concrete examples, a named reviewer and a guide that evolves.",
    "scenario": "A new marketing contractor's first three LinkedIn drafts for Elias are full of exclamation points and \"game-changing.\" What's your review process, and what do you add to the guide?"
  }
},
"10::Visual Brand Assets — Sample Color Palette": {
  "p1": {
    "on": "This slide shows a four-role palette: Primary (headers and dominant brand color, conveying authority), Accent (calls to action and highlights, used sparingly), Body text (high readability, pairs with either brand color) and Background (a neutral canvas that doesn't compete with navy or gold). The steps: limit it to these four, use the accent sparingly and apply the palette everywhere.",
    "say": "One dominant, one accent, one text, one background.",
    "ask": "Does your organization's palette follow this structure?"
  },
  "p2": {
    "on": "This slide says visual identity isn't just a logo but a small, deliberately limited set of colors, fonts and imagery rules. It gives the 60-30-10 rule (60% neutral, 30% primary, 10% accent), says to record exact HEX and CMYK codes, and to check contrast for readability, especially on mobile.",
    "say": "60% neutral, 30% primary, 10% accent.",
    "wrap": "Keep the palette to four roles and record the exact codes.",
    "scenario": "Pull up the firm's recent social graphics. Do they follow one dominant, one accent, one text, one background? Where has a fifth color crept in?"
  }
},
"10::Brand Consistency: Palette, Typography & Imagery": {
  "p1": {
    "on": "This slide extends the discipline beyond color: keep the four-color palette, choose exactly one heading font and one body font, set imagery rules in advance (no stock-photo clichés, no overly casual snapshots), and review recent content periodically for drift.",
    "say": "One heading font, one body font, everywhere.",
    "ask": "Can you name a brand that mixes fonts or colors inconsistently?"
  },
  "p2": {
    "on": "This slide says mixing fonts across posts is one of the fastest ways to look unprofessional. Imagery rules matter as much as color: decide up front what's off-limits so every contributor chooses against the same standard.",
    "say": "Consistency comes from rules decided in advance.",
    "wrap": "Limit colors and fonts, set imagery rules and check for drift.",
    "scenario": "Three recent posts for the firm used three different fonts and a stock photo of a gavel. Write the three rules you'd add to stop it happening again."
  }
},
"10::Platform Proficiencies — Tool-Specific Best Practices": {
  "p1": {
    "on": "This slide says each platform is different, with a diagram. The steps: adapt content to each social platform's native format instead of copy-pasting, learn the site CMS (WordPress, Webflow, Squarespace) well enough to update a page safely, learn the newsletter platform's segmentation, send-time and reporting features, and walk through any new tool's publishing flow before using it live.",
    "say": "Being good at social media is really several skills.",
    "ask": "Which tools does your organization publish with?"
  },
  "p2": {
    "on": "This slide says \"good at social media\" means literacy across different tools, each with its own conventions and audience. The platform snapshot: LinkedIn for professional insight and thought leadership, Instagram for visual storytelling, and X/Threads and newsletters for timely commentary and direct relationships, with newsletters being the channel the executive owns outright.",
    "say": "The newsletter is the only channel the executive fully owns.",
    "wrap": "Adapt to each platform and learn each tool's publishing flow.",
    "scenario": "Elias wrote a 600-word article on a new employment law. How do you adapt it for LinkedIn, Instagram and the newsletter?"
  }
},
"10::Platform Details & the One Rule That Applies to All Three": {
  "p1": {
    "on": "This slide gives platform specifics. LinkedIn rewards text-forward posts with a clear point in the first two lines, Instagram leads visually with a supporting caption, and X/Twitter favors brevity and timeliness. On a CMS, routine updates happen in the visual editor without a developer. Across everything, test in draft or preview mode before touching a live account.",
    "say": "Draft or preview first, every time.",
    "ask": "Has something ever gone live that shouldn't have?"
  },
  "p2": {
    "on": "This slide details the EA-relevant skills: on a CMS, making a routine update (a new page, a swapped image, a typo fix) without a developer; on newsletter platforms, building segmented lists and scheduling around audience activity. The universal rule is to test in draft mode first.",
    "say": "A typo in a draft is invisible. One sent to a list isn't.",
    "wrap": "Respect each platform's format, and always preview before going live.",
    "scenario": "You need to fix a typo on the firm's live homepage and send the monthly newsletter to the Clients segment. Walk through the draft-first steps for each."
  }
},
"10::The Content Calendar & Publishing Workflow": {
  "p1": {
    "on": "This slide gives the four-week Batch Method: Ideation in week 1 (brainstorm 12–15 ideas from the content pillars), Creation in week 2 (film and design everything in 1–2 focused days), Optimization in week 3 (draft several caption and hook variations and pick the best) and Scheduling in week 4 (load everything into the publishing tool).",
    "say": "Ideate, create, optimize, schedule.",
    "ask": "Who manages content we could plan a real month for?"
  },
  "p2": {
    "on": "This slide says a professional calendar tracks platform, content pillar, asset type, hook (first 3 seconds or words), SEO keywords, CTA and status, not just a date and a caption. It also says consistency matters more than perfect timing, because algorithms prioritize user activity over exact posting time.",
    "say": "Consistency beats perfect timing.",
    "wrap": "Batch the month and track every field, not just the date.",
    "scenario": "Plan next month for Elias's LinkedIn using the Batch Method: three pillars, 12 ideas, and what happens in each week."
  }
},
"10::Reading the Numbers — Engagement Rate": {
  "p1": {
    "on": "This slide teaches the engagement rate: add likes, comments and shares, divide by follower count, then multiply by 100. The steps: use the rate to compare posts of different reach, recalculate weekly or monthly, and cross-check against the platform's own reported figures.",
    "say": "(Likes + comments + shares) ÷ followers × 100.",
    "ask": "Why compare rates instead of raw likes?"
  },
  "p2": {
    "on": "This slide works an example: 120 likes + 15 comments + 10 shares = 145, ÷ 4,000 followers × 100 = 3.6%. Compare it with the account's own average, since 3.6% is strong if the usual rate is 2% and weak if it's 6%. Comments and shares signal deeper interest than likes.",
    "say": "Compare against the account's own average first.",
    "wrap": "Calculate the rate, compare it with the norm and look at what drove it.",
    "scenario": "Live: a post got 85 likes, 22 comments and 6 shares, and the account has 2,500 followers. What's the engagement rate, and is it good if the usual rate is 3%?"
  }
},
"10::Engagement Rate Benchmarks & Interpretation": {
  "p1": {
    "on": "This slide says a smaller account with a higher rate can be the stronger performer, with a diagram. On LinkedIn, 2–5% organic engagement is healthy and above 7% means the post is going viral in its niche. Read reach and engagement together: high reach with low engagement means the hook or audience is off, and low reach with high engagement means a small, loyal following the algorithm tends to push further.",
    "say": "Rate beats raw counts, and reach and engagement are read together.",
    "ask": "Where do you think the firm's LinkedIn posts land on this scale?",
    "wrap": "Judge performance by rate and by reach and engagement together, and revisit the benchmarks as platforms change.",
    "scenario": "Post A reached 12,000 people with a 0.8% engagement rate. Post B reached 900 people with 6.5%. What does each tell you, and what would you change?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Judge performance by rate and by reach and engagement together, and revisit the benchmarks as platforms change.",
    "scenario": "Post A reached 12,000 people with a 0.8% engagement rate. Post B reached 900 people with 6.5%. What does each tell you, and what would you change?"
  }
},
"10::Audience Psychology & Pain Points": {
  "p1": {
    "on": "This slide maps four audience pain points to responses, with a diagram. Financial (hidden fees, rigid pricing): radical transparency. Convenience (information overload): be a curator answering one question quickly. Emotional (burnout, overstimulation): sustainable progress, not hustle. Trust (fear of fake data): show the real process. Use psychological triggers ethically and sparingly.",
    "say": "Name the pain point, then answer it honestly.",
    "ask": "Which pain point shows up most in your industry?"
  },
  "p2": {
    "on": "This slide says audiences have \"Digital Overload Fatigue\" and trust real-world proof over polished ads. It names three triggers to use ethically: the Bandwagon Effect (\"300 people joined this week\"), Reciprocity (give value for free) and Cognitive Dissonance.",
    "say": "Raw proof beats polished ads.",
    "wrap": "Answer real pain points, show the real process and use triggers ethically.",
    "scenario": "Potential clients of Thorne & Partners worry about surprise legal bills. Draft one post that answers that financial pain point with transparency, not reassurance."
  }
},
"10::SEO, GEO & Funneling for Executives": {
  "p1": {
    "on": "This slide covers three ideas, with a diagram. SEO: getting found on Google with natural keyword phrases and backlinks from podcasts and guest blogs. GEO: getting AI tools like ChatGPT, Gemini and Perplexity to recommend the executive. Funneling: awareness (social, PR), then interest (newsletter, lead magnets), then action (booking link, 24-hour follow-up). The monthly scorecard: Domain Authority, AI citations, funnel drop-off and name search volume.",
    "say": "Be found on Google, cited by AI, and move people down the funnel.",
    "ask": "Has anyone asked an AI tool to recommend a business or professional?"
  },
  "p2": {
    "on": "This slide recommends a monthly \"Google Yourself\" audit in Incognito mode: if an outdated profile or old post outranks the current site, update the metadata. The funnel in practice: top is social, podcasts and PR; middle is articles, webinars and newsletters; bottom is case studies, testimonials and a clear contact path.",
    "say": "Google the executive in Incognito every month.",
    "wrap": "Optimize for search and AI, match content to funnel stage and audit monthly.",
    "scenario": "Search Elias's name in Incognito mode together. What comes up first, what's outdated, and which funnel stage is weakest?"
  }
},
"10::GEO Tactics & Consistency": {
  "p1": {
    "on": "This slide gives GEO tactics: add structured data or schema markup where the platform supports it, write FAQ-style direct-answer content for questions the executive is known for, keep bio details word-for-word identical across LinkedIn, the website and speaker pages (small differences hurt AI trust), and audit those sources for drift.",
    "say": "Identical bios everywhere. Small wording differences cost trust.",
    "ask": "Is Elias's bio worded the same on LinkedIn and the firm website?"
  },
  "p2": {
    "on": "This slide defines GEO (Generative Engine Optimization) as making content easy for AI assistants to find, trust and quote. AI tools favor clear, structured, factual content from consistent, authoritative sources. The practical test: ask an AI assistant each month who the executive is and note what it gets wrong.",
    "say": "What the AI gets wrong is your update list.",
    "wrap": "Structure the content, answer questions directly and keep the bios identical.",
    "scenario": "Ask an AI assistant \"Who is Elias Thorne and what is he known for?\" What would you do with each thing it gets wrong or leaves out?"
  }
},
"10::Copywriting vs. Blog Writing": {
  "p1": {
    "on": "This slide contrasts two formats, with a diagram. Copywriting: find the conversion goal and use AIDA (Attention, Interest, Desire, Action), with CTAs using action words and real urgency, not \"click here.\" Blog writing: a hook headline, a direct-answer intro, skimmable H2/H3 sections and first-hand evidence. Match the format to the goal.",
    "say": "Copy closes. Blogs educate.",
    "ask": "What's wrong with \"click here\" as a CTA?"
  },
  "p2": {
    "on": "This slide calls copywriting the closer (short, direct, urgent, built to convert) and blog writing the friendly guide (long, informative, built to educate and rank). The biggest blog mistake is repeating what the top five Google results say; add a unique data point, a contrarian take or first-hand experience.",
    "say": "Add something the top five results don't have.",
    "wrap": "Pick the format for the goal, and bring first-hand evidence.",
    "scenario": "Two volunteers write the same announcement, the firm's new free contract-review consultation: one as copy, one as a blog intro. Read both aloud back to back."
  }
},
"10::Basic Campaign Math": {
  "p1": {
    "on": "This slide teaches two numbers: Cost per Lead is total spend ÷ leads, and ROI is (revenue − spend) ÷ spend × 100. The steps: check both before calling a campaign a success, compare them against the campaign's goals, and track them across campaigns over time.",
    "say": "Cost per Lead and ROI, always together.",
    "ask": "Why can a high lead count be misleading?"
  },
  "p2": {
    "on": "This slide works an example: $500 spend, 50 leads, $20 product price. Cost per Lead is $10, revenue is $1,000 and ROI is 100%. Know both numbers before calling a campaign a success, because raw lead count alone can make a losing campaign look good.",
    "say": "Lead count alone can hide a losing campaign.",
    "wrap": "Calculate CPL and ROI, compare with goals and track over time.",
    "scenario": "Live: a $1,200 LinkedIn campaign produced 40 leads, 3 became clients and each client is worth $900. What are the CPL and ROI, and was it a success?"
  }
},
"10::Crisis Response on Social Media": {
  "p1": {
    "on": "This slide says a negative pile-on moves in hours, deleting or ignoring feedback is usually wrong, and not every negative comment needs a response. The steps: assess whether it's a legitimate complaint, a misunderstanding or bad faith, reply publicly with a brief, calm acknowledgment and move details to a private channel, and involve the executive for anything beyond routine.",
    "say": "Acknowledge publicly, resolve privately.",
    "ask": "How do you tell a real complaint from bait?"
  },
  "p2": {
    "on": "This slide warns against defensive or emotional replies, which are hard to walk back, and against deleting a legitimate negative comment, which usually escalates things. It says to document the situation and response as it unfolds.",
    "say": "Deleting a legitimate complaint usually makes it worse.",
    "wrap": "Assess, acknowledge calmly, take it private, escalate and document.",
    "scenario": "A former client posts a detailed public complaint that's gaining traction; some of it is accurate, some exaggerated. What do you do in the next 30 minutes, before anyone senior weighs in?"
  }
},
"10::Endorsement & Disclosure Rules": {
  "p1": {
    "on": "This slide says that when a third party (an influencer, partner or employee) promotes the firm, disclosure rules like the FTC's endorsement guidelines can apply. The principle: the audience should be able to tell when a post exists because of a relationship or payment. Confirm current rules with firm policy or counsel. The steps: confirm disclosure language before any arrangement, keep records, and check partner content for visible disclosure.",
    "say": "The audience should be able to tell there's a relationship.",
    "ask": "Does a discount count as compensation?"
  },
  "p2": {
    "on": "This slide warns that a mention without direct payment can still need disclosure, because reciprocal or in-kind relationships count. Never approve promotional content without checking disclosure first, and when unsure, treat it as requiring disclosure.",
    "say": "In-kind still counts. When in doubt, disclose.",
    "wrap": "Confirm the rules first, keep records and check disclosure is visible.",
    "scenario": "A former client with a large following offers to post about the firm in exchange for a discount on future services. What do you need to confirm before this goes any further?"
  }
},
"10::Video Content Basics for Executive Presence": {
  "p1": {
    "on": "This slide says video carries more of an executive's presence than text, and short-form video needs clarity and a genuine tone more than production value. The steps: confirm the one point the video makes before recording, check the background and audio (the same background audit from the security topic), and keep social videos to 60–90 seconds.",
    "say": "One clear point, a clean background, under 90 seconds.",
    "ask": "What would you check in the background before recording?"
  },
  "p2": {
    "on": "This slide warns against publishing without captions, since many viewers watch muted and captions are an accessibility basic, and against publishing without a full watch-through. It says to keep lighting and background consistent across videos.",
    "say": "Watch the whole thing before it goes out.",
    "wrap": "Plan the point, check the frame, caption and watch it through.",
    "scenario": "Elias records a 90-second video answering a common client question, but a notification showing a client's name flashes on his monitor in the background. What's your process before it's published?"
  }
},
"10::Social Listening & Monitoring": {
  "p1": {
    "on": "This slide says social listening means tracking what's said about the executive or firm across platforms, not just monitoring your own posts, and catching it early gives more options. The steps: set up alerts for the executive's and firm's names on relevant platforms, separate routine mentions from those needing attention, and log recurring themes.",
    "say": "Most of the conversation never tags you.",
    "ask": "Where would people talk about the firm without tagging it?"
  },
  "p2": {
    "on": "This slide warns against checking only your own notifications, because most relevant conversation happens in comments, shares and untagged posts. It says to review listening setups periodically and flag concerning trends early rather than waiting for a crisis.",
    "say": "A pattern across mentions matters more than any single one.",
    "wrap": "Listen beyond your own account, log themes and flag trends early.",
    "scenario": "Your weekly listening check finds several posts referencing the same complaint about the firm's billing that nobody has reported directly. What's your next step?"
  }
},
"10::Accessibility in Digital Content": {
  "p1": {
    "on": "This slide says accessible content (alt text, captions, readable contrast) decides whether a meaningful share of the audience can use it at all, and building it in costs little compared with retrofitting. The steps: write descriptive alt text for every image, add reviewed captions to every video rather than relying on auto-captions, and check color contrast on graphics.",
    "say": "Build it in from the start. Retrofitting costs far more.",
    "ask": "What makes alt text useful rather than a formality?"
  },
  "p2": {
    "on": "This slide warns that generic alt text like \"image\" defeats the purpose, and inaccurate auto-captions can misquote someone. It says to make accessibility review a standard step in the content approval process.",
    "say": "An auto-caption that misquotes the executive is a real problem.",
    "wrap": "Real alt text, reviewed captions, good contrast and a standard review step.",
    "scenario": "You're finalizing a LinkedIn post with a bar chart showing the firm's pro bono hours by year, and it has no alt text. Write the description live so it's actually useful."
  }
},
"10::Personal vs. Firm Brand Account Separation": {
  "p1": {
    "on": "This slide says the executive's personal brand and the firm's brand are related but distinct, and who controls the login to a \"personal\" account has real consequences. The steps: agree in writing which accounts are personal and which are firm-owned, manage credentials to match that ownership, and apply distinct voice guidelines to each.",
    "say": "Settle who owns each account before anyone leaves.",
    "ask": "Who controls the login to Elias's LinkedIn?"
  },
  "p2": {
    "on": "This slide warns against leaving ownership ambiguous until a departure or dispute forces the question, and against putting firm-confidential content on a personal account without firm review. It says to record credentials and ownership in the firm's standard systems.",
    "say": "Ambiguity always surfaces at the worst moment.",
    "wrap": "Put ownership in writing, match access to it and document it centrally.",
    "scenario": "An executive with a large personal following is leaving the firm, and their account has been used for both personal thought leadership and firm announcements. What questions should have been settled long before now?"
  }
},
"10::Legal Advertising & UPL Rules": {
  "p1": {
    "on": "This slide says a law firm's social presence is regulated attorney advertising in most jurisdictions, and the Unauthorized Practice of Law boundary applies online too: a post that reads as specific legal advice is a problem. The steps: check that legal content is general and educational, know the jurisdiction's advertising rules and required disclaimers, and route anything ambiguous through the UPL judgment.",
    "say": "General education, yes. Specific advice, no.",
    "ask": "When does a helpful post cross into legal advice?"
  },
  "p2": {
    "on": "This slide warns against treating a firm's social media as ordinary marketing just because it's on the same platforms. It says testimonials, case results and client stories need particular care, because many jurisdictions restrict what can be claimed or implied.",
    "say": "Case results and testimonials have their own rules.",
    "wrap": "Keep it educational, follow the advertising rules and escalate the ambiguous.",
    "scenario": "A draft post shares an impressive case outcome and says \"we can get you the same result.\" What's the concern with that phrasing, and how would you revise it?"
  }
},
"10::Final Timed Evaluation & Capstone Checklist": {
  "p1": {
    "on": "This slide closes all 10 days: the capstone confirms real readiness, not attendance. The steps: review actual performance data across the program (Knowledge Check scores, Practice Lab history and any roleplay sessions), name the days or tools still shaky, as in the Day 5 mid-point review, and complete the final timed evaluation with the same composure practiced in the crisis roleplays.",
    "say": "An honest, specific picture of what's solid and what isn't.",
    "ask": "Which day's material do you feel least ready to use on the job?"
  },
  "p2": {
    "on": "This slide warns against treating the capstone as a formality now that the program is ending; it's the last chance to close a known gap. A finished program isn't a finished skill set, so the strongest close is a specific plan for what to keep practicing after Day 10.",
    "say": "Leave with a practice plan, not just a certificate.",
    "wrap": "Use the data, name the gaps and commit to a specific plan.",
    "scenario": "Looking back across all 10 days: which single day or Practice Lab tool would you most want to revisit before calling yourself ready, and what specifically will you do to close that gap?"
  }
}
};
