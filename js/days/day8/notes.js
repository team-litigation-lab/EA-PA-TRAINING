/* Day 8 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
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
  },
  "s1": {
    "on": "This section defines three roles: Admin (full control and user management), Editor (content only) and Viewer (read-only).",
    "say": "Admin, Editor, Viewer."
  },
  "s2": {
    "on": "These steps assign them: the minimum role for the job, MFA everywhere, periodic reviews, narrow by default, and a record of who has what and why.",
    "say": "Start narrow; expand only on real need."
  },
  "s3": {
    "on": "This section's rule: every user gets MFA and the minimum role.",
    "say": "MFA plus minimum role."
  },
  "s4": {
    "on": "This section says to keep Admin to very few people, explains Editor and Viewer, and warns that access outliving the job is a top security gap.",
    "say": "Review access when someone leaves.",
    "ask": "Who in your office really needs admin?"
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
  },
  "s1": {
    "on": "This section's warning: over-permissioning is how well-meaning people break systems by accident.",
    "say": "No bad intent needed."
  },
  "s2": {
    "on": "These steps apply it: grant what the role needs, flag excess access, fix the role rather than blame, review elevated access, and remove temporary access.",
    "say": "Fix the role, not the person."
  },
  "s3": {
    "on": "This section tells the story of a junior staffer with unneeded admin access who changed settings; the fix was correcting the role and checking others.",
    "say": "Check who else is over-permissioned."
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
  },
  "s1": {
    "on": "This section says the response is sequential: follow the steps in order.",
    "say": "Three steps, in order."
  },
  "s2": {
    "on": "These steps are the response: Verify the sender, Escalate through the right channel, and Close the gap that let it through.",
    "say": "Verify, escalate, close the gap."
  },
  "s3": {
    "on": "This section restates each step as a standalone rule.",
    "say": "Verify before anything else."
  },
  "s4": {
    "on": "This section lists red flags: urgency and secrecy, mismatched details like an off domain, and unusual asks like passwords or gift cards. Verify through a number you already have.",
    "say": "Call the number you already have.",
    "ask": "What's the first red flag you'd notice?"
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
  },
  "s1": {
    "on": "This section says leak response is sequential: follow the steps in order.",
    "say": "In order."
  },
  "s2": {
    "on": "These steps are the response: Contain the spread, Notify the right roles, and Prevent a repeat with policy.",
    "say": "Contain, notify, prevent."
  },
  "s3": {
    "on": "This section restates the three steps: contain first, notify roles not just names, and add a policy.",
    "say": "Contain before anything else."
  },
  "s4": {
    "on": "This section details it: recall messages and revoke links, capture the facts, and notify attorney, IT and compliance, who decide any legal notification.",
    "say": "Notification duties are their call."
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
  },
  "s1": {
    "on": "This section's point: disconnected tools (email, spreadsheet, notes) cause duplicate work even for careful people.",
    "say": "Scattered tools create duplicates."
  },
  "s2": {
    "on": "These steps fix it: find a split workflow, consolidate into one system, name the manual steps, test on a real task, and revisit later.",
    "say": "One place for the real status."
  },
  "s3": {
    "on": "This section's rule: consolidate into one tracked system and name what stays manual.",
    "say": "Manual steps by choice, not accident."
  },
  "s4": {
    "on": "This section lists warning signs: repeated 'where is this?', re-typed information, and hand-offs where nobody owns the gap.",
    "say": "Who owns the step in between?",
    "ask": "Which of these signs have you seen?"
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
  },
  "s1": {
    "on": "This section's first rule: turn off training and data-improvement settings before real work goes into an AI tool.",
    "say": "Settings off first."
  },
  "s2": {
    "on": "These steps are the rules: settings off, no financial, health, SSN or password data, placeholders for names, AI treated as a third party, and unsure means unsafe.",
    "say": "An AI tool is a third party."
  },
  "s3": {
    "on": "This section restates the no-go data list and placeholders, then asks you to walk through anonymizing a termination email; Elias's firm's confidentiality still applies.",
    "say": "Swap names for placeholders.",
    "ask": "What would you swap out of a termination email?"
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
  },
  "s1": {
    "on": "This section says a password alone is a single point of failure; MFA means a stolen password isn't enough.",
    "say": "Something you know plus something you have."
  },
  "s2": {
    "on": "These steps apply it: MFA on anything sensitive, email first, older accounts checked, authenticator apps over SMS, and a self-audit.",
    "say": "Email first; it resets everything else."
  },
  "s3": {
    "on": "This section says MFA belongs on everything sensitive, and the common failure is old accounts never updated.",
    "say": "Old accounts are the gap."
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
  },
  "s1": {
    "on": "This section says reused passwords turn one breach into many; a password manager makes unique passwords practical.",
    "say": "One breach shouldn't be everywhere."
  },
  "s2": {
    "on": "These steps use it: unique passwords, a strong master password, sharing through the manager, moving stored passwords in, and changing any compromised one immediately.",
    "say": "Never send a password in chat.",
    "ask": "Where are passwords stored in plain text today?"
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
  },
  "s1": {
    "on": "This section says every system a departing person used must be revoked, not just email.",
    "say": "Every system, not just email."
  },
  "s2": {
    "on": "These steps offboard: a written checklist, used every time, revoking on the departure date, rotating shared credentials, and adding new systems.",
    "say": "Revoke on the day."
  },
  "s3": {
    "on": "This section says a checklist catches the small systems people forget, and 'fine to leave for now' is exactly the stale access least privilege prevents.",
    "say": "No 'probably fine for now'."
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
  },
  "s1": {
    "on": "This section says shared logins hide who did what, which matters the moment something goes wrong.",
    "say": "Shared means no accountability."
  },
  "s2": {
    "on": "These steps manage it: prefer individual accounts, log shared use, rotate on departures, look for replacements, and treat shared accounts as a risk.",
    "say": "Individual accounts where possible."
  },
  "s3": {
    "on": "This section notes shared accounts complicate offboarding, and says individual scoped accounts are almost always safer.",
    "say": "Safer than convenient."
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
  },
  "s1": {
    "on": "This section says digital discipline means little if a laptop or cabinet is left unlocked; physical access is still access.",
    "say": "Physical access is access."
  },
  "s2": {
    "on": "These steps secure the space: lock devices when stepping away, lock cabinets, report lost badges at once, limit visitor areas, and check your desk.",
    "say": "Lock it, even for a minute."
  },
  "s3": {
    "on": "This section treats badges like passwords and applies least privilege to visitor movement.",
    "say": "A lost badge is a lost password."
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
  },
  "s1": {
    "on": "This section says an unlocked device is an open door; short timeouts and a manual lock should be reflexes.",
    "say": "Lock as a reflex."
  },
  "s2": {
    "on": "These steps secure devices: short timeouts plus manual lock, full-disk encryption, work rules on personal devices, prompt updates, and remote wipe.",
    "say": "Encrypt and enable remote wipe."
  },
  "s3": {
    "on": "This section explains that encryption turns a lost laptop into a hardware loss, and personal devices carry the same obligations.",
    "say": "Your phone counts too."
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
  },
  "s1": {
    "on": "This section defines three levels: Public, Internal, and Confidential/Privileged.",
    "say": "Three levels."
  },
  "s2": {
    "on": "These steps apply them: classify before sharing, confirm public items are meant for release, keep Internal inside, treat Confidential with legal stakes in mind, and default higher when unsure.",
    "say": "Unsure? Treat it as more sensitive.",
    "ask": "Where would a court date on the calendar fall?"
  },
  "s3": {
    "on": "This section says not everything needs maximum protection, but the safe default is more sensitive.",
    "say": "Match protection to sensitivity."
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
  },
  "s1": {
    "on": "This section says email attachments are among the least secure ways to share; access-controlled links are better.",
    "say": "Links over attachments."
  },
  "s2": {
    "on": "These steps share securely: access-controlled links, expirations and permissions, passwords sent through a separate channel, revoking when done, and least privilege for recipients.",
    "say": "Never send the password with the file."
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
  },
  "s1": {
    "on": "This section says standard email isn't secure; encrypted email adds real protection for sensitive content.",
    "say": "Encrypt the sensitive ones."
  },
  "s2": {
    "on": "These steps use it: decide if content is sensitive, encrypt privileged content, find your organization's option, keep judging what to send, and encrypt when unsure.",
    "say": "Many firms have it and don't use it."
  },
  "s3": {
    "on": "This section says knowing when to encrypt is a skill, and encryption is one layer, not a replacement for judgment.",
    "say": "A layer, not a substitute."
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
  },
  "s1": {
    "on": "This section warns that metadata (tracked changes, comments, authors, past edits) can leak what nobody meant to share.",
    "say": "What you can't see can leak."
  },
  "s2": {
    "on": "These steps clean it: check for metadata, remove it explicitly, take extra care with opposing counsel, make a clean export standard, and verify before sending.",
    "say": "Looks clean isn't clean.",
    "ask": "Have you ever received a document with comments left in?"
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
  },
  "s1": {
    "on": "This section says sensitive papers on a desk, in a printer tray or on an unlocked screen are a physical data leak.",
    "say": "A physical leak."
  },
  "s2": {
    "on": "These steps practice it: put documents away, check the printer, lock the screen, apply it at home, and do an end-of-day check.",
    "say": "Check the printer tray."
  },
  "s3": {
    "on": "This section flags printers as a forgotten risk and calls a clean desk the daily habit behind physical security.",
    "say": "Policy becomes habit."
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
  },
  "s1": {
    "on": "This section says paper in the trash is still readable; shredding destroys the information.",
    "say": "Shred it, don't bin it."
  },
  "s2": {
    "on": "These steps dispose securely: shred paper, securely delete files, make disposal routine, keep a shredder handy, and include drafts.",
    "say": "Drafts count too."
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
  },
  "s1": {
    "on": "This section says incident response is sequential: follow the steps in order.",
    "say": "Four steps."
  },
  "s2": {
    "on": "These steps are the first ten minutes: Contain, Assess what was exposed, Notify right away, and Document in real time.",
    "say": "Contain, assess, notify, document."
  },
  "s3": {
    "on": "This section says early notification with incomplete facts beats a late complete report, and extends the leak-containment principle.",
    "say": "Tell early, even if incomplete.",
    "ask": "Who would you notify first?"
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
  },
  "s1": {
    "on": "This section says different incidents trigger different people, timelines and sometimes legal duties.",
    "say": "Different incidents, different contacts."
  },
  "s2": {
    "on": "These steps prepare: know the contact per incident type in advance, treat breaches as possibly carrying legal duties, escalate when unsure, confirm contacts ahead, and notify promptly.",
    "say": "Know the contacts before you need them."
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
  },
  "s1": {
    "on": "This section says a real-time record beats a reconstruction days later.",
    "say": "Write it as it happens."
  },
  "s2": {
    "on": "These steps document: note what happened and when in real time, simple timestamps, who was notified, facts not blame, and preserve the record.",
    "say": "Rough and real-time beats polished and late."
  },
  "s3": {
    "on": "This section says the record isn't about blame; it supports review and compliance, and simple timestamps are enough.",
    "say": "Timestamps and facts."
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
  },
  "s1": {
    "on": "This section says a real review after resolution stops the failure from repeating.",
    "say": "Review, then change something."
  },
  "s2": {
    "on": "These steps run it: cover what happened, worked and should change; focus on process; use the real-time notes; name one concrete change; and capture the lesson.",
    "say": "One concrete change."
  },
  "s3": {
    "on": "This section says blame-focused reviews discourage early reporting, and ties the habit to the Day 6 playbook.",
    "say": "Process, not people."
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
  },
  "s1": {
    "on": "This section names three red flags: urgency pressure, authority impersonation and unusual requests.",
    "say": "Urgency, authority, unusual."
  },
  "s2": {
    "on": "These steps respond: treat urgency as a flag, verify authority through a known channel, question out-of-pattern requests, verify independently, and report attempts.",
    "say": "Report it even if you didn't fall for it.",
    "ask": "How would you handle an 'urgent' call from 'IT'?"
  },
  "s3": {
    "on": "This section says social engineering targets people, not systems, and independent verification is the defense.",
    "say": "Verify through a separate channel."
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
  },
  "s1": {
    "on": "This section says phishing now comes by text, phone and calendar invite too.",
    "say": "Every channel."
  },
  "s2": {
    "on": "These steps apply the same skepticism: look for the usual tells, verify through a known channel, be more suspicious of unusual channels, and report.",
    "say": "A channel switch is a warning sign."
  },
  "s3": {
    "on": "This section restates the common tells and the safe default of verifying through a known number.",
    "say": "Generic greeting, odd sender, unexpected link."
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
  },
  "s1": {
    "on": "This section says some risk is internal: access that doesn't fit a role deserves attention without assuming malice.",
    "say": "Notice without accusing."
  },
  "s2": {
    "on": "These steps respond: note role mismatches, use the least-privilege lens, recognize most cases are shortcuts, flag to the right person, and focus on behavior.",
    "say": "Flag it; don't confront."
  },
  "s3": {
    "on": "This section says most insider incidents are well-meaning shortcuts, and this is least privilege, not suspicion.",
    "say": "Role-fit, not suspicion."
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
  },
  "s1": {
    "on": "This section says crisis communication should be calm, factual and frequent; silence and vague reassurance increase anxiety.",
    "say": "Calm, factual, frequent."
  },
  "s2": {
    "on": "These steps communicate: a regular cadence, confirmed facts labeled, ACT (Acknowledge, Clarify, Timeline), no vague reassurance, and confirmed delivery.",
    "say": "Acknowledge, Clarify, Timeline."
  },
  "s3": {
    "on": "This section warns that labeled confirmed facts stop speculation, and ties back to Day 1's ACT framework.",
    "say": "Label what's confirmed."
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
  },
  "s1": {
    "on": "This section says your visible calm is often the only calm in the room, and it's contagious; so is panic.",
    "say": "Calm spreads."
  },
  "s2": {
    "on": "These steps build calm: pause before responding, stay deliberate, don't mistake calm for passive, practice a technique ahead, and debrief yourself.",
    "say": "Pause a few seconds first.",
    "ask": "What's your go-to technique under pressure?"
  },
  "s3": {
    "on": "This section says calm is a practiced skill, not passivity, and the pause is a technique that works.",
    "say": "A skill you can practice."
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
  },
  "s1": {
    "on": "This section says a crisis is the wrong time to learn who decides what; know the chain in advance.",
    "say": "Know it before you need it."
  },
  "s2": {
    "on": "These steps prepare: know the chain, use the Day 1 Command Hierarchy, name backup contacts, escalate through the chain, and keep backups current.",
    "say": "Don't skip steps under pressure."
  },
  "s3": {
    "on": "This section ties this to Day 1's hierarchy and says a known backup path prevents a gap in authority.",
    "say": "Have the backup path ready."
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
  },
  "s1": {
    "on": "This section frames continuity as a question: if a key system, person or resource disappeared tomorrow, what's the plan?",
    "say": "What if it's gone tomorrow?"
  },
  "s2": {
    "on": "These steps plan: identify critical dependencies, list contacts and backups, plan before you need it, find single points of failure, and revisit periodically.",
    "say": "Find your single points of failure."
  },
  "s3": {
    "on": "This section says a basic list covers most of the value, and ties this to Day 5 backup vendors and the Home Binder.",
    "say": "Simple is enough."
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
  },
  "s1": {
    "on": "This section defines privilege (confidential lawyer–client communications for legal advice) and warns it can be lost through carelessness.",
    "say": "Strict, and easy to lose."
  },
  "s2": {
    "on": "These steps protect it: treat such communications as privileged, check recipients, avoid being overheard, accept that you're inside the relationship, and ask when unsure.",
    "say": "Check the recipient list."
  },
  "s3": {
    "on": "This section warns that disclosure to the wrong person can waive privilege, the obligation extends to the EA, and says to ask the attorney when in doubt.",
    "say": "A disclosure can't be undone.",
    "ask": "Who shouldn't be on a privileged email?"
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
  },
  "s1": {
    "on": "This section says HIPAA protects identifiable health information and applies whenever a matter touches medical records.",
    "say": "Medical records mean HIPAA."
  },
  "s2": {
    "on": "These steps apply it: spot medical content, apply it outside health practices too, share only on need, default to the highest tier, and ask the attorney.",
    "say": "Highest sensitivity by default."
  },
  "s3": {
    "on": "This section says HIPAA can apply without being a healthcare provider, handling matters as much as theory, and it links to classification.",
    "say": "Discretion in practice."
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
  },
  "s1": {
    "on": "This section explains GDPR governs EU individuals' personal data and can apply to firms outside the EU.",
    "say": "It follows the data, not the office."
  },
  "s2": {
    "on": "These steps apply it: recognize reach, account for data rights, check at intake for non-US data, remember state laws like the CCPA, and flag early.",
    "say": "Check at intake."
  },
  "s3": {
    "on": "This section covers rights to know and delete, US state laws like the CCPA, and the takeaway: recognize and flag, don't memorize.",
    "say": "Recognize and flag."
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
  },
  "s1": {
    "on": "This section lists three groups: financial and corporate (SOX), sector privacy (GLBA, FERPA), and state bar ethics rules.",
    "say": "SOX, GLBA, FERPA, bar rules."
  },
  "s2": {
    "on": "These steps apply the pattern: recognize high-risk categories, handle them carefully by default, ask about unfamiliar areas, know the main frameworks, and remember bar rules apply regardless.",
    "say": "Pattern recognition over memorization."
  },
  "s3": {
    "on": "This section says no training covers every framework; the skill is spotting high-risk categories, and asking the attorney is always right.",
    "say": "Ask; it's never wrong."
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
  },
  "s1": {
    "on": "This section explains work product (strategy memos, drafts, internal analysis) is protected separately from privilege and can be waived by careless handling.",
    "say": "Separate protection, same care."
  },
  "s2": {
    "on": "These steps protect it: handle it like privileged material, keep it internal unless cleared, and label it in the DMS.",
    "say": "Default: it stays internal."
  },
  "s3": {
    "on": "This section warns that 'not a client communication' doesn't mean shareable, and says when in doubt treat it as protected.",
    "say": "When in doubt, protected."
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
  },
  "s1": {
    "on": "This section says investor information has its own boundaries (some shareable with investors only, some not at all) and ties to classification.",
    "say": "Investors don't get everything."
  },
  "s2": {
    "on": "These steps manage it: confirm what's cleared, keep materials access-controlled, and escalate requests beyond what's prepared.",
    "say": "Escalate anything not cleared."
  },
  "s3": {
    "on": "This section warns against assuming investors are entitled to everything, and links this to investor briefing prep.",
    "say": "Confirm the boundaries first."
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
  },
  "s1": {
    "on": "This section says media crises move in minutes, building on reputational risk and crisis communication.",
    "say": "Minutes, not hours."
  },
  "s2": {
    "on": "These steps contain it: confirm who's authorized to speak, give a prepared holding statement, and escalate in parallel.",
    "say": "Holding line, then escalate in parallel.",
    "ask": "What would your holding statement say?"
  },
  "s3": {
    "on": "This section warns against handling media outside the authorization chain, and says a fast 'no comment, here's who to contact' protects everyone.",
    "say": "Good intentions don't prevent damage."
  }
}
});
