/* Trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
   Written by hand for each slide, keyed "<day>::<topic title>".
   p1 = the topic's first slide, p2 = its second slide (Best Practices & Pitfalls).
   Each has "on" (what is on this slide, 2–3 sentences) and the script: say / ask (p1) or say / wrap (p2),
   plus the scenario for the room on p2. A single-slide topic shows p1 with p2's wrap and scenario.
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
}
};
