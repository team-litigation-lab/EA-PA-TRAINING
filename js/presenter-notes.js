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
}
};
