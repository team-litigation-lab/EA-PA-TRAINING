/* ============================================================
   DAY 9 — Events, Compliance Tracking & Reputation
   Everything a trainee reads on this day:
   - DAY9: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY9_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "9::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY9 = {
  "id": 9,
  "title": "Events, Compliance Tracking & Reputation",
  "theme": "Event & CLE Compliance SOPs · Brand Stewardship & Awards/Charitable Coordination · Membership Management",
  "objective": "Run events and compliance tracking with nothing falling through the cracks, and protect the organization's reputation online.",
  "lessons": [
    {
      "h": "Running an Event End-to-End",
      "section": "Events & Travel Logistics",
      "b": [
        "Track registration status by name so gaps surface immediately, not at the event.",
        "Have an engagement-tracking plan ready before the event starts."
      ],
      "howTo": [
        "Track registration status by name from the moment registration opens, not just a running headcount — this is what surfaces gaps immediately rather than at the event itself.",
        "Build the engagement-tracking plan (who's attending what, what materials they need) before the event starts, not improvised on the day.",
        "Follow up with anyone showing an incomplete or unconfirmed registration well before the event, giving real time to resolve it.",
        "Reconcile the final registration list against actual attendance during and after the event, so the record reflects what really happened.",
        "Feed anything that went wrong back into the process for next time, rather than treating each event as a fresh start with no institutional memory."
      ],
      "trainerCue": "Ask who has ever managed event registrations for anything — even a small personal event — and have them share what went wrong the first time they tried it."
    },
    {
      "h": "Speaker & Panelist Logistics for Conferences",
      "section": "Events & Travel Logistics",
      "fourPart": {
        "corePrinciples": [
          "When an executive is speaking at an event, the EA's job extends well beyond the calendar entry — travel, materials, technical requirements, and the actual content deadline all need active coordination.",
          "Conference organizers have their own deadlines and requirements (bio, headshot, slide deck format, AV needs) that arrive on the organizer's timeline, not the executive's — missing one can jeopardize the speaking slot itself."
        ],
        "howTo": [
          "Build a single checklist per speaking engagement covering: bio/headshot submission, slide deck deadline, AV/tech requirements, and travel logistics, each with its own due date.",
          "Confirm the actual format expected (keynote, panel, fireside chat) early — the prep required differs significantly, and assuming the wrong format wastes real prep time.",
          "Send the executive a single, consolidated briefing before the event: what time, what format, who else is on the panel, and what's expected of them."
        ],
        "bestPractices": [
          "Pitfall: treating a speaking engagement as just another calendar item — the prep requirements are what actually determine whether it goes well.",
          "Confirm AV and tech requirements with the venue directly, not just the organizer — the person you're coordinating with may not have the technical details.",
          "Always have the slide deck finalized and sent at least 24-48 hours ahead of any deadline the organizer states, since these deadlines are rarely flexible."
        ],
        "discussionCase": "Elias is confirmed as a panelist at a conference in three weeks, and the organizer just emailed asking for his bio, headshot, and pre-submitted questions by end of week. What's your actual process for getting this handled without it becoming a fire drill?"
      }
    },
    {
      "h": "Sponsorship & Vendor Contract Basics for Events",
      "section": "Events & Travel Logistics",
      "fourPart": {
        "corePrinciples": [
          "Event sponsorships and vendor agreements are real contracts with real obligations on both sides — treating them as informal arrangements creates risk when expectations aren't met.",
          "The EA/PA is often the first to notice when a sponsorship deliverable (logo placement, speaking slot, booth space) hasn't actually been fulfilled as agreed — catching this early matters more than catching it after the event."
        ],
        "howTo": [
          "Before an event, confirm every deliverable the firm is owed as a sponsor (logo placement, attendee list, speaking slot) against what's actually being provided.",
          "Keep the signed sponsorship agreement accessible during the event itself, not just filed away — you need it on hand if a deliverable dispute comes up in real time.",
          "Track sponsorship costs against the value actually delivered so post-event ROI conversations have real data behind them, not just impressions."
        ],
        "bestPractices": [
          "Pitfall: assuming a sponsorship deliverable happened just because it was promised — verify it directly (check the signage, confirm the attendee list arrived) rather than trusting it occurred.",
          "Never let a sponsorship renewal get automatically approved without a real assessment of whether the last one delivered value.",
          "Flag any deliverable gap to the organizer in writing, promptly — a verbal complaint after the event has much less leverage than a real-time written flag."
        ],
        "discussionCase": "At a sponsored event, you notice the firm's logo is missing from the printed program, despite the sponsorship agreement guaranteeing it. What's your actual move in the moment, versus what you follow up on afterward?"
      }
    },
    {
      "h": "Live Event Moderation",
      "section": "Events & Travel Logistics",
      "fourPart": {
        "corePrinciples": [
          "Live event moderation is the active, real-time management of a virtual event while it's happening — distinct from the setup work of platform admin, this is what you're doing during the actual call.",
          "A moderator's job is to keep the event running smoothly for the audience and the presenter simultaneously — watching for technical issues, managing the flow, and handling anything unexpected without disrupting the presenter's focus.",
          "The Day-of-Event sequence follows a consistent pattern: Reminder → Login Confirmed → Attendance Verified → Monitor → Document → Follow-Up — each step exists to catch a specific, predictable failure point."
        ],
        "howTo": [
          "Before the event starts, confirm the executive's login, verify audio and video are working, and take an attendance screenshot if tracking is needed — catching a technical problem before the event starts is far better than during it.",
          "During the event, actively monitor for issues rather than just watching passively — audio drops, screen-share failures, or chat/Q&A questions that need routing to the presenter.",
          "For events requiring attendance verification (like CLE-eligible sessions), track participation actively: confirm Q&A engagement if required, track minimum attendance time, and note actual session start and end times.",
          "Immediately after the event, complete the post-event sequence: confirm certificates or attendance records if applicable, verify correct credit hours were captured, and document the session for the record."
        ],
        "bestPractices": [
          "Pitfall: moderating passively and only reacting once something has already gone wrong. Active monitoring catches most issues before they become visible to the audience.",
          "Keep a visible checklist during the event rather than trying to remember every step — live moderation has too many simultaneous demands to rely on memory alone.",
          "Document technical issues as they happen, even minor ones — this record is what makes the Technical Troubleshooting process (covered next) actually improve over time.",
          "Speaking-engagement events need extra oversight: confirm introduction accuracy, ensure presentation materials are loaded, confirm recording availability, and document audience size."
        ],
        "discussionCase": "You're moderating a webinar where Elias is the featured speaker, and ten minutes in, his audio starts cutting out intermittently. The audience is starting to comment about it in the chat. What do you actually do, in what order, without disrupting his presentation more than necessary?"
      }
    },
    {
      "h": "Post-Event Follow-Up & ROI Tracking",
      "section": "Events & Travel Logistics",
      "fourPart": {
        "corePrinciples": [
          "An event's real value is determined by what happens after it, not during it — the follow-up window is where relationships actually convert into something.",
          "Without a structured follow-up process, the connections made at an event decay at the same rate as any other untouched contact — the event itself doesn't create lasting value on its own."
        ],
        "howTo": [
          "Build a follow-up list during the event itself (notes on who was met and what was discussed), not reconstructed from memory afterward.",
          "Send follow-up outreach within 48-72 hours while the interaction is still fresh for the other person too — waiting a week meaningfully reduces response rates.",
          "Log event attendance and outcomes in the same system used for other relationship tracking, so this doesn't become a separate, disconnected record."
        ],
        "bestPractices": [
          "Pitfall: collecting a stack of business cards with no notes on the actual conversation — without context, the card is nearly useless a week later.",
          "Track a simple ROI measure per event (leads generated, relationships deepened, deals influenced) so future event budget decisions have real data behind them.",
          "Don't let follow-up become generic — reference the specific conversation, not just \"great meeting you at the conference.\""
        ],
        "discussionCase": "Elias returns from a 3-day conference with 40 new contacts and no notes on any of them. What's your actual process for turning that stack into real, useful follow-up rather than a bulk generic email to everyone?"
      }
    },
    {
      "h": "High-Stakes Travel Disruption Management",
      "section": "Events & Travel Logistics",
      "fourPart": {
        "corePrinciples": [
          "Travel disruption management is fundamentally a triage skill — the first job when a flight cancels or a connection is missed isn't fixing everything at once, it's figuring out what actually has to happen next and in what order.",
          "The stakes of a disruption are rarely about the flight itself — they're about what the executive misses if the disruption isn't resolved: a deposition, a closing, a board meeting. Solve for the actual downstream consequence, not just \"get them on a plane.\"",
          "A high-stakes disruption is exactly the moment an EA's preparation from calmer days pays off — the travel file, the backup contacts, and the known preferences are what make a fast, correct response possible under pressure."
        ],
        "howTo": [
          "The instant a disruption is confirmed, identify the single most time-critical downstream commitment (the meeting, the hearing, the flight the executive absolutely cannot miss) — this becomes the fixed point everything else is solved around.",
          "Check rebooking options directly with the airline app/website in parallel with calling — apps often surface options before a phone agent can, and having options ready speeds up any call that is needed.",
          "If no direct rebooking preserves the fixed point, evaluate alternatives in order: a different airport, a different airline, ground transportation for the final leg, or — if genuinely unavoidable — informing the fixed-point commitment's other party of a likely delay before it becomes a surprise.",
          "Communicate the actual plan to the executive in one clear message: what happened, what you're doing about it, and what they need to know or decide — not a stream of updates as you figure it out.",
          "Once resolved, update every downstream party who was expecting the original schedule (drivers, hotels, the meeting host) so the fix doesn't create a second set of surprises."
        ],
        "bestPractices": [
          "Never let the executive be the one to discover a disruption from an app notification — you should already be on it, or already have reached out, by the time they see it themselves.",
          "Resist the urge to report every micro-update as you work the problem — a stressed executive needs the resolved plan, not a live narration of your search process.",
          "Pitfall: fixing the immediate flight but forgetting the ripple effects — a rebooked arrival time can silently break a ground transportation pickup or a hotel check-in that no one re-confirmed.",
          "Keep a standing note of the executive's real hard constraints (won't take redeyes, needs aisle seats, dietary needs for any meals involved) so a disruption-response decision doesn't accidentally violate a preference in the rush to fix the bigger problem."
        ],
        "discussionCase": "Elias's connecting flight to a closing-day meeting gets cancelled with no same-day rebooking available on that airline, and the meeting cannot be moved. You have two imperfect options: a red-eye on a different airline that gets him in with two hours to spare, or a private car for the final leg that costs significantly more but lets him sleep and arrive rested. How do you decide, and how do you present the decision to him?"
      }
    },
    {
      "h": "Everyday Meeting Notes & Action Items",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "Good meeting notes capture three things: decisions, action items and open questions. They're not a transcript.",
          "Every action item needs an owner and a due date. Without both, it usually doesn't happen.",
          "Notes from meetings about legal matters may be privileged or confidential. Label them and share them only with the people who should have them."
        ],
        "howTo": [
          "Before the meeting, send or confirm the agenda and set up a notes template: date, attendees, decisions, action items (owner, due date) and open questions.",
          "During the meeting, write decisions as clear statements: 'Decided: the firm will switch court reporting vendors from November 1.'",
          "Capture each action as a verb, an owner and a date: 'Book the Chicago deposition room: Dana, by Oct 9.'",
          "Send the notes within 24 hours, with action items at the top, to attendees and anyone who needs to act.",
          "Add the action items to your tracker and check them before the next meeting, so it can start with a quick status round."
        ],
        "bestPractices": [
          "If a decision is unclear, ask in the room: 'So we're agreed on X?' It's much harder to fix afterwards.",
          "Mark privileged notes clearly (for example 'Privileged & Confidential — Attorney-Client Communication') when the attorney says to, and limit who receives them.",
          "Pitfall: notes that record who said what but not what was decided.",
          "Pitfall: 'Someone will look into it.' An action with no owner belongs to no one."
        ],
        "discussionCase": "After a 45-minute Harlow strategy call, your notes say: 'Discussed deposition. Expert maybe. Budget concerns. Elias to think about it.' Rewrite them so someone who missed the call knows exactly what happens next."
      },
      "trainerCue": "Play a two-minute recorded meeting clip, or act one out with a volunteer, and have everyone write the action items. Compare: did everyone catch the same owners and dates?"
    },
    {
      "h": "Board Meeting Preparation & Minute Drafting",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "Board meeting preparation exists to make sure decisions get made efficiently once the board is actually in the room — most of the real work happens in the days before the meeting, not during it.",
          "Minutes are a legal and governance record, not a transcript — their job is to accurately capture what was decided and by what authority, not to reproduce the conversation.",
          "Both preparation and minute-taking demand the same underlying discipline as everything else in this program: precision, discretion, and getting the details right the first time, since board-level errors carry outsized consequences."
        ],
        "howTo": [
          "Confirm the agenda with the executive (and often the board chair) well in advance, and circulate board materials with enough lead time for members to actually review them — last-minute packets undermine the whole meeting.",
          "Assemble the board packet in a consistent structure every time (prior minutes for approval, agenda, supporting documents for each agenda item) so returning board members always know where to find what they need.",
          "During the meeting, capture: who was present (and who was absent), each motion made, who seconded it, and the exact outcome of the vote — this is the legally load-bearing part of the minutes.",
          "Draft the minutes promptly after the meeting while the details are fresh, using neutral, factual language — record what was decided, not who argued for what or how the discussion unfolded.",
          "Circulate draft minutes for review and correction before they're finalized and filed — minutes are typically approved as an agenda item at the next meeting, so accuracy now prevents a correction fight later."
        ],
        "bestPractices": [
          "Never record minutes as a narrative of the discussion — capturing opinions, disagreements, or the back-and-forth exposes the board to unnecessary legal risk if the minutes are ever reviewed in litigation or an audit.",
          "Pitfall: vague motion language. \"The board discussed the budget\" is not a minute-worthy record — \"Motion to approve the FY26 budget as presented, seconded, passed 5-0\" is.",
          "Confidential or sensitive board discussions may warrant a note that the topic was discussed without capturing specifics — check with the executive or general counsel on what's appropriate to formally record versus handle separately.",
          "A board packet that arrives too close to the meeting isn't just an inconvenience — it can genuinely undermine a decision's legitimacy if a member reasonably argues they didn't have time to review what they were voting on."
        ],
        "discussionCase": "During a board meeting, a motion is raised, discussed at length with real disagreement among members, amended once, and finally passed 4-1. You're taking minutes live. What specifically do you need to capture accurately, and what should you deliberately leave out of the written record?"
      }
    },
    {
      "h": "Shareholder & Investor Meeting (AGM) Logistics",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "An Annual General Meeting (AGM) or shareholder meeting has formal logistical and governance requirements beyond an ordinary board meeting — notice periods, quorum tracking, and often a more complex attendee list.",
          "This builds directly on the board meeting preparation and minute-drafting principles covered earlier in this day, applied to a larger, more formal, and often legally-mandated meeting type."
        ],
        "howTo": [
          "Confirm the required notice period for the specific meeting type and jurisdiction well in advance — AGMs often have formal, legally-mandated minimum notice requirements that a routine internal meeting doesn't.",
          "Track RSVPs against quorum requirements specifically — an AGM that fails to meet quorum can't validly conduct its business, which makes this tracking genuinely consequential, not just informational.",
          "Prepare the same structured packet discipline covered in board meeting preparation — agenda, prior minutes, supporting materials — scaled to the larger AGM audience and any additional formal requirements (proxy materials, voting procedures)."
        ],
        "bestPractices": [
          "Pitfall: treating AGM logistics like a larger version of a routine board meeting without checking the specific legal notice and quorum requirements that apply — these are genuine formal requirements, not best practices to follow loosely.",
          "Confirm voting or proxy procedures well in advance if the meeting involves formal votes — this is not something to improvise once shareholders are already present."
        ],
        "discussionCase": "You're coordinating an AGM and realize the notice was sent out later than the required minimum notice period for the jurisdiction. What would you actually want confirmed before proceeding with the meeting as scheduled?"
      }
    },
    {
      "h": "Executive Meeting Etiquette",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "Video meeting etiquette for executive-level calls is a real professional skill, not just following generic Zoom manners — the standard is higher because the stakes and the audience typically are too.",
          "The EA/PA's own conduct on a call reflects on the executive, whether or not that's fair — professional presence on video matters even when you're not the one presenting.",
          "Etiquette here isn't about rigid formality — it's about removing friction and distraction so the actual content of the meeting gets the attention it deserves."
        ],
        "howTo": [
          "Prepare the executive with a brief pre-call note covering the agenda, expected duration, participants and their roles, and the meeting format — this is the same preparation discipline as any other executive briefing.",
          "Join executive calls slightly early to confirm technology is working before the executive joins — discovering a login or audio problem should never happen after the executive is already waiting.",
          "Keep your own presence professional and unobtrusive when supporting rather than leading a call — camera framing, background, and mute discipline all matter.",
          "Manage the mechanics quietly in the background (muting a noisy participant, sharing a document, monitoring chat) so the executive can focus entirely on the conversation itself."
        ],
        "bestPractices": [
          "Pitfall: assuming meeting etiquette is obvious and doesn't need active attention. Small lapses (an unmuted background noise, a late join, an unprepared executive) are more noticeable and more costly on executive-level calls.",
          "Send reminders 24-48 hours before an important call with any prep materials attached — the reminder itself is part of the etiquette, not just a courtesy.",
          "Confirm participants and their roles in advance where possible, so the executive isn't caught off-guard by who's actually in the room.",
          "Never let a technical or scheduling issue become the executive's problem to solve live — that's exactly what the preparation and moderation work exists to prevent."
        ],
        "discussionCase": "Elias has an important video call with a prospective client, and you notice thirty seconds before it starts that the meeting link in his calendar is for the wrong time zone — the client is actually expecting the call an hour earlier and may already be waiting. What do you do right now?"
      }
    },
    {
      "h": "Video Conferencing: Platform Admin (Zoom/Teams/Meet)",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "Administering video conferencing platforms is a distinct skill from just attending a call — it means owning the settings, scheduling, and account-level configuration that make every meeting on that platform run smoothly for everyone else.",
          "Different platforms (Zoom, Microsoft Teams, Google Meet) have meaningfully different admin capabilities and quirks — genuine platform literacy means knowing your organization's primary platform well, not just knowing that video calls exist.",
          "Most platform-admin problems are preventable with correct setup ahead of time — waiting rooms, registration settings, recording permissions — rather than needing to be solved live during a meeting."
        ],
        "howTo": [
          "Confirm the meeting's core settings before scheduling: waiting room or lobby on/off, who can share screens, whether recording is enabled and who's notified, and registration requirements if it's a larger event.",
          "Build a pre-meeting checklist specific to the platform being used — test webinar/platform access, confirm login credentials, download any needed materials, and confirm the agenda is attached.",
          "Know how to manage participants live: muting, removing a disruptive participant, promoting someone to co-host or presenter, and switching between screen-share sources without fumbling.",
          "Keep account-level settings (default meeting durations, recording storage location, security defaults) reviewed periodically rather than left on whatever they defaulted to originally."
        ],
        "bestPractices": [
          "Pitfall: assuming default platform settings are fine for every meeting type. A sensitive internal discussion and a public webinar need very different security settings, and using the same defaults for both is a real risk.",
          "Test any new or unfamiliar meeting format (a webinar, a large panel, breakout rooms) before the first time it's needed live — the first attempt at a new feature shouldn't be during an actual high-stakes meeting.",
          "Keep login credentials and platform access organized and available to a backup person — a platform-admin bottleneck where only one person can start or manage meetings is a real operational risk.",
          "Document platform-specific quirks you've learned (screen-share limitations, recording storage rules) so they don't need to be rediscovered by the next person to administer that platform."
        ],
        "discussionCase": "Elias needs to host a confidential internal strategy call with senior partners, but the calendar invite went out through a general meeting link with no waiting room or registration required. What would you want changed before the call, and how would you raise it given the invite already went out?"
      }
    },
    {
      "h": "Video Conferencing: Technical Troubleshooting",
      "section": "Meetings & Video Conferencing",
      "fourPart": {
        "corePrinciples": [
          "Most video conferencing technical problems fall into a small number of predictable categories — login failures, audio/video issues, screen-share problems — which means a calm, structured troubleshooting approach beats panic almost every time.",
          "The goal during a live technical issue is rapid triage, not a perfect diagnosis — get the call functional again first, understand exactly what went wrong afterward.",
          "Documenting technical issues after they happen is what turns troubleshooting from a one-time fix into an improving system, the same continuous-improvement discipline covered elsewhere in this program."
        ],
        "howTo": [
          "For a login failure specifically: verify the correct link is being used, check browser compatibility, and if it's still not resolved, contact the platform provider's support directly rather than continuing to guess.",
          "For audio or video issues, work through the most common causes in order: check the correct device is selected in settings, confirm the app has permission to access camera/microphone, and try leaving and rejoining the meeting before more drastic steps.",
          "Have a backup communication channel ready before any high-stakes call (a phone number, a secondary messaging app) so a total platform failure doesn't mean total communication failure.",
          "Document every technical issue that occurs — what happened, what fixed it, how long it took — so recurring problems become visible and preventable rather than repeatedly surprising."
        ],
        "bestPractices": [
          "Pitfall: trying every possible fix at once instead of working through likely causes in order. Systematic troubleshooting is faster than random troubleshooting, even under pressure.",
          "Keep the platform provider's support contact readily available before you need it — searching for support contact information during an active issue wastes valuable time.",
          "For any executive-level call, do a technical test run in advance for unfamiliar setups (a new location, a new device, an unfamiliar platform) rather than discovering problems live.",
          "A calm, clear explanation to participants during a technical delay (\"we're resolving an audio issue, one moment\") maintains professionalism better than silence or visible panic."
        ],
        "discussionCase": "Fifteen minutes before a critical client call, you discover the meeting platform is down for planned maintenance you weren't aware of. What's your actual triage sequence in the next five minutes to make sure the call still happens on time?"
      }
    },
    {
      "h": "Four SOPs That Keep Professional Development on Track",
      "section": "Compliance Tracking & Professional Development",
      "b": [
        "Each SOP exists to prevent a specific, predictable failure — missing a legitimate event, losing a certificate needed for an audit, spending on training with no way to prove it worked, or missing a real chance at recognition."
      ],
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Event Registration SOP",
          "desc": "Verify provider legitimacy, confirm budget/approval, record confirmation and receipt"
        },
        {
          "label": "Attendance Tracking SOP",
          "desc": "Monitor live attendance, export reports, save certificates in an audit-ready folder"
        },
        {
          "label": "Team Upskilling SOP",
          "desc": "Quarterly needs assessment, vendor evaluation, track attendance/completion/ROI"
        },
        {
          "label": "Reputation & Recognition SOP",
          "desc": "Track awards and speaking events, keep bios current, escalate negative publicity"
        }
      ],
      "howTo": [
        "For Event Registration, verify the provider's legitimacy and confirm budget/approval before registering, then record the confirmation and receipt immediately.",
        "For Attendance Tracking, monitor attendance live, export reports promptly, and save completion certificates in an audit-ready folder — not scattered across email.",
        "For Team Upskilling, run a quarterly needs assessment, evaluate the actual vendor before committing budget, and track attendance, completion, and ROI, not just that a session happened.",
        "For Reputation & Recognition, track award and speaking opportunities proactively, keep bios current, and escalate any negative publicity immediately rather than letting it sit.",
        "Don't let the SOP that feels least urgent day-to-day (usually Reputation & Recognition) quietly get skipped — each one exists to prevent a specific, predictable failure."
      ],
      "trainerCue": "Walk through the four SOPs and ask the room which one they'd be most tempted to skip under time pressure — usually Reputation & Recognition, since it feels less urgent day-to-day."
    },
    {
      "h": "CLE / Compliance Tracking",
      "section": "Compliance Tracking & Professional Development",
      "b": [
        "Log completed hours, pending hours, and the actual deadline for each person.",
        "Flag anyone approaching a deadline with real time left to act — not the week it's due."
      ],
      "howTo": [
        "Log completed hours, pending hours, and the actual deadline for each person individually — a single aggregate number hides who's actually at risk.",
        "Flag anyone approaching their deadline with real time left to act, not the week it's due, when there's no longer room to course-correct.",
        "Verify that logged hours actually count toward the requirement (correct category, correct jurisdiction) rather than assuming any completed course qualifies.",
        "Build in enough lead time on reminders specifically because compliance deadlines are typically not extendable — a short lead time is a common, preventable failure.",
        "Reconcile the tracker against actual certificates on file periodically, so a logged hour that was never actually documented doesn't go unnoticed until an audit."
      ],
      "trainerCue": "This is a good spot for a real example: describe a compliance deadline someone missed because the lead time on the tracker was too short, and ask what would have caught it earlier."
    },
    {
      "h": "Planning Professional Development",
      "section": "Compliance Tracking & Professional Development",
      "b": [
        "Offer virtual and in-person options to fit varied schedules.",
        "Measure each session against clear effectiveness metrics, not just attendance."
      ],
      "howTo": [
        "Offer both virtual and in-person options for development sessions where feasible, to fit varied schedules and locations.",
        "Define a clear effectiveness metric for each session before it runs, not just attendance count — attendance alone doesn't confirm the content actually landed.",
        "Gather feedback immediately after the session, while the experience is still fresh, rather than well after the fact.",
        "Track completion and outcome data over time, not just per-session, so patterns (which formats work, which don't) become visible.",
        "Use what you learn from past sessions to adjust the next one, rather than repeating the same format regardless of how it performed."
      ],
      "trainerCue": "Close by asking the room how THEY'D measure whether a training session (like this one) was actually effective — it's a nice meta moment to end professional-development content on."
    },
    {
      "h": "Membership Renewals",
      "section": "Compliance Tracking & Professional Development",
      "b": [
        "A renewal tracker (name, expiration, status, follow-up) catches lapses before they happen.",
        "Automate reminders — don't rely on memory once volume grows."
      ],
      "howTo": [
        "Build a renewal tracker with name, expiration date, status, and follow-up owner for every membership worth tracking.",
        "Set reminders well ahead of each actual expiration date, not just when the renewal notice happens to arrive.",
        "Automate reminders once volume grows past what memory can reliably handle — don't wait until something has already lapsed to build the system.",
        "Confirm renewal terms haven't changed since the last cycle (price, requirements) before processing it automatically.",
        "Review the full tracker periodically for anything that's fallen out of active use and could reasonably be let go, not just renewed by default."
      ],
      "trainerCue": "Ask: 'Has a membership or subscription ever lapsed on you without warning?' Personal experience makes the automation argument land faster than the abstract rule."
    },
    {
      "h": "Ethics & Gift Compliance",
      "section": "Compliance Tracking & Professional Development",
      "fourPart": {
        "corePrinciples": [
          "Gifts and hospitality involving clients, vendors, or officials can create real ethics and compliance exposure — many firms and jurisdictions have specific rules about what can be given or received, and in what circumstances.",
          "This is a category where the rules are often more precise and less intuitive than they seem — a gesture that feels like ordinary professional courtesy can still cross a real compliance line."
        ],
        "howTo": [
          "Know the firm's actual gift and hospitality policy before accepting or offering anything beyond routine, low-value courtesy — don't rely on general intuition about what seems appropriate.",
          "Log gifts given or received above any policy threshold, even when they seem clearly appropriate — this creates the record that protects everyone if the appropriateness is ever questioned later.",
          "When a gift or hospitality situation involves a government official or regulated party specifically, treat it with extra caution — these categories often carry the strictest rules and the highest consequences for getting it wrong."
        ],
        "bestPractices": [
          "Pitfall: assuming a gift is fine because it's modest or because 'everyone does this.' Gift and hospitality rules are often stricter and more specific than general professional norms suggest.",
          "When genuinely uncertain whether something crosses a line, ask before accepting or sending it — this is a category where asking a possibly-unnecessary question costs far less than a real compliance violation."
        ],
        "discussionCase": "A vendor sends an expensive holiday gift to the office. What do you actually do with it, and what would you want to check before deciding?"
      }
    },
    {
      "h": "Professional Liability & Insurance Awareness",
      "section": "Compliance Tracking & Professional Development",
      "fourPart": {
        "corePrinciples": [
          "An EA/PA doesn't need to be an insurance expert, but should know that professional liability (malpractice) coverage exists, what it generally protects against, and who to flag a potential issue to.",
          "Recognizing a situation that might implicate coverage early — before it becomes a formal claim — gives the firm meaningfully more options than catching it late."
        ],
        "howTo": [
          "Know where the firm's insurance policy documents and renewal dates are filed, even without needing to understand every clause.",
          "If a client or matter raises language suggesting dissatisfaction that could escalate (threats of complaint, mention of damages), flag it to the appropriate person immediately rather than treating it as routine correspondence.",
          "Keep renewal and policy review dates on the compliance calendar the same way other hard deadlines are tracked."
        ],
        "bestPractices": [
          "Pitfall: assuming any client complaint is just routine and doesn't need escalation — the EA/PA is often the first point of contact for language that should actually be flagged.",
          "Never attempt to assess coverage or liability questions yourself — this is squarely outside EA/PA scope and should always go to the attorney or firm's designated contact.",
          "Keep this kind of correspondence confidential and handled with the same discretion as any other privileged matter."
        ],
        "discussionCase": "A client's email includes language like \"we're considering our options given how this was handled.\" What's your actual read on this, and what do you do with the email — beyond just replying to it normally?"
      }
    },
    {
      "h": "Federal/State/Financial Infrastructure",
      "section": "Compliance Tracking & Professional Development",
      "fourPart": {
        "corePrinciples": [
          "Once an entity is formed, it needs its own financial and regulatory infrastructure — a newly formed business with no EIN, no bank account, and no tax registrations isn't actually operational yet, just legally created.",
          "This infrastructure exists at three distinct levels — federal (IRS), state (state tax and labor agencies), and financial (banking) — and each has its own separate setup process that formation alone doesn't complete.",
          "Keeping these systems properly separated from day one (especially business and personal finances) is what preserves the liability protection the entity structure was chosen for in the first place."
        ],
        "howTo": [
          "Obtain the EIN from the IRS immediately after formation is confirmed — this federal tax ID is required for nearly every subsequent step and is free to obtain directly from the IRS.",
          "Register with the relevant state tax agency for any applicable state taxes (income, sales, franchise tax depending on the state and business type) and with the state labor/unemployment agency if the business will have employees.",
          "Open a dedicated business bank account using the EIN and formation documents — never route business income or expenses through a personal account, even temporarily, since this undermines the liability separation.",
          "Set up a bookkeeping system (even a simple one) before the first transaction happens, not after — reconstructing financial records after the fact is far harder than maintaining them from day one.",
          "If the business will have employees, register for state and federal payroll tax withholding before the first paycheck is issued — this has hard compliance deadlines, not a grace period."
        ],
        "bestPractices": [
          "Commingling personal and business funds — even briefly, even for a \"small\" expense — is one of the most common ways a founder accidentally undermines their own liability protection. Keep the separation absolute from the very first transaction.",
          "Pitfall: assuming state tax registration is automatic upon formation. It's a separate, additional step in every state — formation and tax registration are not the same filing.",
          "Keep copies of every federal and state registration confirmation in the business's permanent file — these are referenced repeatedly for licensing, banking, and any future audits.",
          "If the business operates in multiple states, each state where it has a genuine business presence may require its own separate tax registration — this is easy to miss when a business expands beyond its home state."
        ],
        "discussionCase": "Elias's new consulting LLC has its EIN and a business bank account is being opened this week. He mentions he already paid the filing attorney's invoice from his personal credit card \"just to get it done faster,\" and plans to reimburse himself later. What's the actual risk in this, and what would you want to help him do about it before it becomes a habit?"
      }
    },
    {
      "h": "Protecting the Brand Online",
      "section": "Reputation & Brand",
      "b": [
        "Respond to negative reviews professionally and factually — never escalate publicly.",
        "Monitor proactively; a well-handled negative review can do more for the brand than ten positive ones.",
        "As the gatekeeper of sensitive data, the operating principle is 'need to know' — described in training as 'The Vault.' Information shifts from 'Executive Secret' to 'Organizational Liability' the moment it's mishandled, which is why a strict 'Cone of Silence' protocol applies to what gets discussed and where."
      ],
      "howTo": [
        "Monitor for brand mentions and reviews proactively, rather than only reacting once something is already visible and gaining traction.",
        "When a negative review or comment appears, respond professionally and factually — never escalate publicly, regardless of how the original comment was phrased.",
        "Apply the \"need to know\" principle to anything sensitive that comes up in this process — information moves from Executive Secret to Organizational Liability the moment it's mishandled.",
        "Take a moment to draft a considered response rather than reacting cold in the heat of the moment — a well-handled negative review can do more for the brand than ten positive ones.",
        "Escalate anything that goes beyond a routine review (a legal threat, a coordinated attack) to the appropriate person immediately rather than handling it alone."
      ],
      "trainerCue": "Roleplay responding to a real (or realistic) negative online review live, cold, with no prep — then compare it to a version drafted with time to think. The contrast is the lesson."
    },
    {
      "h": "Awards, Recognition & Charitable Coordination",
      "section": "Reputation & Brand",
      "singleSlide": true,
      "b": [
        "Awards applications run on the same discipline as any other application process: exact eligibility criteria, exact required materials, and a real submission deadline — missing any one of these disqualifies an otherwise strong nomination.",
        "Building a simple tracker for awards worth pursuing each year (name, deadline, eligibility, materials needed, status) prevents the common failure of noticing a good-fit award only after its deadline has already passed.",
        "Charitable and donation coordination has its own quiet discipline: tracking what's been committed, confirming it's actually been fulfilled, and keeping documentation — many donations have tax or reporting implications that matter later even though the moment itself feels informal.",
        "Both of these connect to the brand-protection topic just covered — award recognitions and genuine charitable involvement are proactive reputation-building, the positive counterpart to the reactive review-management work already covered."
      ],
      "howTo": [
        "Build a simple tracker for awards worth pursuing each year — name, deadline, eligibility, materials needed, status — rather than relying on someone remembering a good-fit award in time.",
        "Confirm exact eligibility criteria and required materials well before the deadline, since missing any one of these disqualifies an otherwise strong nomination.",
        "For charitable commitments, track what's actually been committed and confirm it was fulfilled, not just that the commitment was made.",
        "Keep documentation of charitable contributions, since many carry tax or reporting implications that matter later even though the moment felt informal.",
        "Treat both awards and genuine charitable involvement as proactive reputation-building — the positive counterpart to the reactive review-management work covered just before this."
      ],
      "trainerCue": "Ask whether the room's own organization (or one they know) has ever missed a genuinely strong awards nomination simply because nobody was tracking the deadline — this is a very common, very preventable gap."
    },
    {
      "h": "Building an Executive's Media & Speaking Kit",
      "section": "Reputation & Brand",
      "fourPart": {
        "corePrinciples": [
          "A ready-to-send media kit (bio, headshot, key talking points, past coverage) turns a speaking or press opportunity from a scramble into a same-day response.",
          "Keeping this kit current is what makes it useful — an outdated bio or old headshot sent to a journalist or event organizer reflects poorly and often needs an awkward follow-up correction."
        ],
        "howTo": [
          "Maintain a standing folder with the current bio (in both short and long versions), a recent headshot, and a one-page background summary, updated whenever anything material changes.",
          "Keep a running log of past media coverage and speaking engagements — this becomes useful both for media kit content and for tracking the executive's public profile over time.",
          "Review and refresh the kit on a set schedule (quarterly is reasonable) rather than only when a request suddenly surfaces the outdated version."
        ],
        "bestPractices": [
          "Pitfall: only updating the bio when someone specifically asks for it — by then it's often been stale for months.",
          "Keep multiple headshot formats and resolutions ready (print vs. web) since different requesters need different specs.",
          "Never send out media kit materials without a quick review — a stale detail (an old title, a completed project listed as ongoing) undermines credibility."
        ],
        "discussionCase": "A journalist emails asking for Elias's bio and headshot for a feature — due in two hours. You find the bio on file is over a year old and references a role he no longer holds. What's your actual move given the deadline?"
      }
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 12,
      "q": "Which SOP covers saving certificates in an audit-ready folder?",
      "opts": [
        "Team Upskilling SOP",
        "Attendance Tracking SOP",
        "Event Registration SOP",
        "Reputation & Recognition SOP"
      ],
      "a": 1,
      "r": "Attendance Tracking is where completion evidence — certificates, webinar reports — gets filed for audits."
    },
    {
      "afterIndex": 19,
      "q": "A client posts an inaccurate negative review. Best response?",
      "opts": [
        "Argue publicly to prove the client wrong",
        "Delete or hide the review without responding",
        "Reply professionally and factually, without escalating the conflict",
        "Ignore it and hope it disappears"
      ],
      "a": 2,
      "r": "A calm, factual public response protects the brand better than silence or confrontation."
    }
  ],
  "quiz": [
    {
      "q": "What's the most common failure with awards applications?",
      "opts": [
        "Not knowing which awards exist in the executive's field, so strong candidates are never put forward",
        "Submitting too few supporting achievements, so the entry looks thin next to the others",
        "Noticing a good-fit award only after its deadline has already passed",
        "The application form being too long"
      ],
      "a": 2,
      "r": "Missing the deadline on an otherwise strong nomination is the classic, preventable failure — a simple tracker with deadlines catches this before it happens."
    },
    {
      "q": "20 of 150 webinar registrants haven't received a confirmation email. First move?",
      "opts": [
        "Cancel those 20 registrations and ask them to sign up again with a correct email",
        "Investigate the gap and resend confirmations to the affected registrants",
        "Send the joining link to all 150 registrants again, so nobody can miss it this time",
        "Post the joining link on social media so anyone can find it"
      ],
      "a": 1,
      "r": "Catching and fixing the gap before the event prevents no-shows and complaints."
    },
    {
      "q": "An attorney has completed 9 of 12 required CLE hours with the deadline approaching. Best action?",
      "opts": [
        "Log the gap now, flag it, and follow up before the deadline",
        "Wait until the deadline passes to raise it",
        "Report the shortfall to the state bar now, before the deadline, so the firm is on record",
        "Book them onto the next three one-hour courses without asking"
      ],
      "a": 0,
      "r": "Early flagging while there's still time to act is the whole point of a tracking system."
    },
    {
      "q": "A client posts a negative, factually inaccurate review. Best response?",
      "opts": [
        "Ask the platform to remove it as inaccurate, and don't reply publicly while you wait",
        "Reply publicly with the full facts of the matter, so readers can see the review is wrong",
        "Ask satisfied clients to post positive reviews to push it down",
        "Reply professionally and factually, without escalating the conflict"
      ],
      "a": 3,
      "r": "A calm, factual public response protects the brand better than silence or confrontation."
    },
    {
      "q": "A renewal tracker should include:",
      "opts": [
        "Nothing — renewals are hard to track anyway",
        "The payment amount, card used and the member's contact details",
        "Expiration date, renewal status, and follow-up required",
        "The member's name, membership number and the date they joined"
      ],
      "a": 2,
      "r": "These fields are what actually let you catch a lapse before it happens."
    },
    {
      "q": "Best way to plan a professional-development seminar for staff with varied schedules?",
      "opts": [
        "Offer both virtual and in-person session options",
        "Only offer it once with no recording",
        "Cancel it if not everyone can attend the same time",
        "Force a single mandatory time slot"
      ],
      "a": 0,
      "r": "Flexible formats are what actually get broad participation."
    },
    {
      "q": "What does 'running an event end-to-end' require an EA to manage beyond the day of the event itself?",
      "opts": [
        "Mainly the running order on the day, since planning and follow-up belong to the vendors and the host",
        "Planning, vendor coordination, and post-event follow-up, in addition to day-of execution",
        "Hiring an events agency, which then handles planning, vendors and follow-up on the firm's behalf",
        "Nothing before the event, only immediate cleanup after"
      ],
      "a": 1,
      "r": "End-to-end ownership spans planning and follow-up, not just the visible day-of execution."
    },
    {
      "q": "Why do CLE (Continuing Legal Education) compliance deadlines need dedicated tracking?",
      "opts": [
        "Because the firm is fined for each attorney who's late, and the fine grows every week the hours stay incomplete",
        "CLE requirements are optional for practicing attorneys",
        "Because CLE providers only accept bookings a year in advance, so late planning means no courses are left",
        "Lapsed CLE compliance can affect an attorney's ability to practice, making the deadline high-stakes"
      ],
      "a": 3,
      "r": "A lapsed CLE requirement is a genuine practice-standing issue, which is why it needs reliable, dedicated tracking rather than casual awareness."
    },
    {
      "q": "What is the primary goal of 'protecting the brand online' as an EA/PA responsibility?",
      "opts": [
        "Getting negative posts about the executive removed from every platform as quickly as possible",
        "Monitoring and responding appropriately to reputational risks and public perception issues",
        "Preventing any online mention of the executive or firm ever",
        "Posting positive content often enough that any negative comments are pushed out of sight"
      ],
      "a": 1,
      "r": "The goal is active, appropriate monitoring and response — not blanket suppression of all mentions."
    },
    {
      "q": "Why should a negative online review naming a specific matter be routed to communications/legal rather than answered personally by an upset partner?",
      "opts": [
        "An uncoordinated personal reply risks making the situation worse and lacks the right authority to respond appropriately",
        "Because communications can reply faster, since partners are usually in court during the day",
        "Because partners aren't allowed to post on review sites under the firm's social media policy, whatever the content",
        "Because only the review platform can respond to reviews that mention a client matter by name"
      ],
      "a": 0,
      "r": "A coordinated, authorized response protects both accuracy and tone — an emotional individual reply risks escalating the situation."
    },
    {
      "q": "What is a core purpose of membership renewal tracking (bar associations, professional organizations)?",
      "opts": [
        "To collect the membership discounts each organization offers when members renew early in the year",
        "It has no real professional consequence if missed",
        "To keep a record of which organizations the firm pays for, for the annual budget review",
        "Lapsed memberships can affect professional standing, credentials, or access to required resources"
      ],
      "a": 3,
      "r": "Some memberships tie directly to professional standing or credentials — a lapse can have real consequences, not just inconvenience."
    },
    {
      "q": "Why are the 'Four SOPs' for professional development tracking described as necessary rather than optional?",
      "opts": [
        "Because every professional body requires the firm to have written procedures on file, and checks them during audits",
        "Because written procedures let the firm claim training costs as a tax deduction",
        "Without a structured process, easy-to-miss recurring requirements (CLE, renewals, certifications) tend to fall through the cracks",
        "Because they show staff the firm invests in their growth, which helps with retention and recruitment"
      ],
      "a": 2,
      "r": "Recurring professional-development requirements are exactly the kind of item that structured SOPs are designed to prevent from slipping."
    },
    {
      "q": "What should happen if an EA discovers a membership lapsed just minutes before the person is due to represent the organization publicly?",
      "opts": [
        "Interrupt them straight away so they hear it from you first, even if they're about to go on stage in front of the audience",
        "Quietly ask the organizers to postpone their slot until the membership is renewed",
        "Renew it on your phone immediately and tell them afterwards",
        "Give an honest, brief read on urgency and let it wait until they're off stage if it genuinely can, then resolve it promptly"
      ],
      "a": 3,
      "r": "Judging real urgency and choosing the right moment to raise it — while still resolving it promptly — is the practical skill being tested."
    },
    {
      "q": "Why is a compliance tracker's lead-time buffer (the gap before a deadline that triggers a reminder) an important design choice?",
      "opts": [
        "Too short a buffer risks missed deadlines; too long can cause reminder fatigue — it needs to be deliberately calibrated",
        "Because the longest possible buffer is always safest, and reminders can simply be snoozed until the right time comes",
        "Because the buffer decides who receives the reminder, so it has to match the org chart",
        "Because the buffer sets how long the tracker keeps a record after the deadline has passed"
      ],
      "a": 0,
      "r": "The buffer is a real design decision with real trade-offs — it directly affects whether deadlines are caught in time."
    },
    {
      "q": "What's a reasonable way to think about 'brand voice' consistency across an executive's public communications?",
      "opts": [
        "Each channel should have its own distinct voice, so followers on different platforms get a different experience",
        "Consistency in voice is purely a marketing department concern",
        "Consistent tone and messaging build recognizability and trust, so voice should be maintained across contexts",
        "Voice matters most on social media, while speeches and articles can follow whatever style suits the moment"
      ],
      "a": 2,
      "r": "A consistent voice across contexts is what makes an executive's public presence recognizable and trustworthy over time."
    },
    {
      "q": "Why should an EA flag a potential reputational issue even if they're not fully certain it will become a real problem?",
      "opts": [
        "Because flagging everything protects the EA if something goes wrong later, whether or not it was a real problem",
        "Early flagging allows for a proactive response, while waiting for certainty often means the window for the best response has passed",
        "Because the firm's insurance only covers reputational issues that were reported before they became public",
        "Because the executive expects to hear every rumour, and deciding what matters is always their call alone"
      ],
      "a": 1,
      "r": "Reputational issues often move fast — early flagging preserves options that certainty-first waiting would lose."
    },
    {
      "q": "What is the risk of an event checklist that only covers logistics and skips vendor confirmation follow-ups?",
      "opts": [
        "Vendors may charge a cancellation fee if they aren't contacted at least once a week before the event",
        "The event may start late, because vendors arrive without knowing the running order",
        "The checklist gets too long to use on the day, so staff skip the logistics items that actually matter",
        "A confirmed vendor booking can still fall through without a follow-up check, leaving a late-discovered gap"
      ],
      "a": 3,
      "r": "A booking without a follow-up confirmation can quietly lapse — the checklist needs to close that loop explicitly."
    },
    {
      "q": "Why might 'compliance tracking' and 'reputation management' be grouped together as one area of responsibility?",
      "opts": [
        "Because both are handled by the same outside consultant in most firms, so it's simpler to manage them as one contract",
        "Compliance lapses (a missed CLE deadline, an expired credential) can themselves become reputational issues if they surface publicly",
        "Compliance tracking has no connection to how an organization is perceived",
        "Because both are reported to the board each quarter, so grouping them keeps the reporting in one place"
      ],
      "a": 1,
      "r": "An internal compliance failure can quickly become an external reputational problem if it becomes visible — the two areas genuinely overlap."
    },
    {
      "q": "What's a practical first step when planning professional development tracking for a team of several attorneys?",
      "opts": [
        "Wait until a deadline is missed before setting up any tracking",
        "Start with the most senior attorneys, since their requirements are the most complex, and add others later",
        "Establish a centralized system that captures each person's specific requirements and deadlines in one place",
        "Ask each attorney to send you their own tracking spreadsheet, then keep copies of them in a shared folder"
      ],
      "a": 2,
      "r": "A centralized system prevents requirements from being scattered across individual memory or informal tracking."
    },
    {
      "q": "Why does timing matter when responding to a negative review or public criticism?",
      "opts": [
        "A quick, appropriate response can limit the spread and framing of an issue before it solidifies in public perception",
        "Waiting a few weeks lets the criticism fade naturally, so a reply doesn't draw fresh attention to it",
        "Replies posted at the weekend get more readers, so timing affects how many people see the firm's side",
        "Platforms rank faster replies higher in search results, so a quick reply improves the firm's overall rating"
      ],
      "a": 0,
      "r": "Public perception can solidify quickly — a timely, appropriate response can shape the outcome before that happens."
    },
    {
      "q": "What's the value of a post-event debrief, even for an event that went smoothly?",
      "opts": [
        "It gives the team a chance to thank the vendors formally, which helps when booking them again next year",
        "It's the best moment to ask the guests for a testimonial",
        "It creates the record that finance needs to release final payments to the event's vendors",
        "Capturing what worked (and what didn't) improves the process for the next event, regardless of this event's outcome"
      ],
      "a": 3,
      "r": "Even a smooth event can reveal small process improvements — the debrief's value isn't limited to fixing visible failures."
    },
    {
      "q": "Which line is a well-written action item from a meeting?",
      "opts": [
        "Book the Chicago deposition room: Dana, by October 9",
        "Deposition logistics were discussed at some length",
        "Someone should look into booking a room soon",
        "Elias raised concerns about the deposition venue"
      ],
      "a": 0,
      "r": "A useful action item has a verb, a named owner and a due date. The others record discussion or leave the owner and timing unclear."
    }
  ],
  "discussionQuestion": "How would you handle a negative public review or comment about your organization? Draft a one-sentence opening line for your response and share why you chose that tone."
};

const DAY9_EXTRA_LEARNING = {
  "9::Running an Event End-to-End": {
    "t": "The Event Timeline",
    "p": [
      "8–12 weeks out: goals, budget, date, venue, and invitation list. 4–6 weeks: invitations, speakers, catering, AV.",
      "1 week: confirm numbers, run-of-show, name badges, and materials. Day of: arrive early, run a tech check, and track check-ins.",
      "After: thank-you notes within 48 hours, collect feedback, reconcile the budget, and log lessons for next time."
    ]
  },
  "9::Four SOPs That Keep Professional Development on Track": {
    "t": "The Four SOPs at a Glance",
    "p": [
      "Event Registration: vet the provider, confirm budget and approval, register, and calendar it with materials.",
      "Attendance Tracking: record attendance, export reports, and store completion certificates where an auditor can find them.",
      "Team Upskilling and Evaluation: assess needs quarterly, choose providers deliberately, and measure whether the training changed performance."
    ]
  },
  "9::CLE / Compliance Tracking": {
    "t": "How CLE Requirements Typically Work",
    "p": [
      "Each state bar sets its own rules: total hours per reporting period (often 1–3 years) plus required categories such as ethics.",
      "Hours usually must come from accredited providers and be reported by a deadline; some states allow carry-over of extra hours, others don't.",
      "Keep certificates for every course — they're the proof if the bar audits. Always confirm the current rules for each attorney's state."
    ]
  },
  "9::Membership Renewals": {
    "t": "What to Track for Each Membership",
    "p": [
      "Organization, member name, membership level, renewal date, annual cost, and who approves the renewal.",
      "Auto-renew status and the payment method on file — expired cards are a common reason memberships lapse silently.",
      "Value check: is the membership still used? A yearly review stops paying for associations no one attends."
    ]
  },
  "9::Planning Professional Development": {
    "t": "Measuring Effectiveness",
    "p": [
      "Level 1 — Reaction: did participants find it useful? Level 2 — Learning: can they demonstrate the new skill?",
      "Level 3 — Behavior: are they using it on the job weeks later? Level 4 — Results: did performance or outcomes improve?",
      "Even a simple before/after check on one skill tells you more than attendance numbers ever will."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[9] = { day: DAY9, extraLearning: DAY9_EXTRA_LEARNING };
