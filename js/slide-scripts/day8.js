/* Day 8 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "8::Credential Management": {
  "p1": {
   "why": "Give everyone the smallest level of access that lets them do their job, and turn on two-step login everywhere.",
   "talk": "Most systems have three kinds of access. Admin can change everything, including who gets in. Editor can work on content but can't change permissions. Viewer can only look. The more people with admin rights, the more ways things can go wrong.",
   "walk": [
    "First, give each person the lowest role their job needs: admin only for those responsible for the system, editor for regular work and viewer for everyone else.",
    "Next, switch on multi-factor authentication for every account, however routine.",
    "Then, review who has which role regularly, because people's jobs change.",
    "After that, when giving new access, start narrow and widen it only if there's a real need.",
    "Finally, write down who has which role and why."
   ],
   "ask": "What's your access level in the tools you use every day?"
  },
  "p2": {
   "why": "Access that outlives the job is one of the most common security gaps.",
   "talk": "Most systems give people one of three levels. Admin means full control, including who else gets in, so very few people should have it. Editor means they can create and change things but not change permissions. Viewer means they can look but not touch. The important habit is reviewing those levels whenever someone changes jobs or leaves, because access that outlives the job is one of the most common gaps there is.",
   "walk": [
    "First, admin means full control, and should be limited to very few people.",
    "Next, editor can create and edit but not change permissions, and viewer can look but not change.",
    "Finally, review access whenever someone changes roles or leaves."
   ],
   "ask": "A new paralegal needs to update the shared matter calendar and read the client folder. What role do they get in each system, and what would make you revisit it later?"
  }
 },
 "8::Least-Privilege Access": {
  "p1": {
   "why": "Too much access is how systems get broken by people who meant no harm.",
   "talk": "Least privilege means everyone gets exactly what their role needs and nothing more. It isn't about distrust. It's that someone with admin rights they don't need can accidentally change something important.",
   "walk": [
    "First, give access based on what the role actually needs, not what might be handy someday.",
    "Next, when someone has more access than they need, flag it, even if nothing has gone wrong yet.",
    "Then, if too much access causes a problem, fix the role. Don't blame the person.",
    "After that, review who has high-level access regularly, because it quietly builds up.",
    "Finally, remove temporary access when the project ends."
   ],
   "ask": "Who in your organization might have more access than their job needs?"
  },
  "p2": {
   "why": "When too much access causes a problem, fix the role, not the person.",
   "talk": "Here's a real example of why this matters. A junior staff member was given admin access by mistake, and ended up changing settings they should never have been able to touch. The instinct is to blame them. But they only did what the system let them do. The real fix is correcting their role, and then checking who else has more access than they need.",
   "walk": [
    "First, don't blame the person who had the access.",
    "Finally, correct the role, and review everyone else's access too."
   ],
   "ask": "A contractor who finished a document review two months ago still has access to the firm's case management system. What do you do, and how do you prevent it next time?"
  }
 },
 "8::Multi-Factor Authentication Basics": {
  "p1": {
   "why": "A password alone is one lock on the door; two-step login adds a second one a thief can't copy.",
   "talk": "Multi-factor authentication means you need something you know, your password, plus something you have, like a code on your phone. So a stolen password on its own isn't enough to get in.",
   "walk": [
    "First, turn it on for every account that touches anything sensitive.",
    "Next, protect email first, because email can reset the passwords for almost everything else.",
    "Then, check older accounts set up before two-step login was required. They're the usual gap.",
    "After that, use an authenticator app or a security key rather than text-message codes where you can.",
    "Finally, check your own accounts rather than assuming they're covered."
   ],
   "ask": "How many of your accounts have you actually checked for two-step login?"
  },
  "p2": {
   "why": "The usual gap isn't missing technology; it's an old account nobody updated.",
   "talk": "Multi-factor authentication means a second check, like a code on your phone, on top of a password. Every sensitive account needs it, not just the obviously risky ones, because a hacked email account can be used to reset the passwords on everything else. And the usual gap isn't missing technology; it's the old account set up before the rule existed that nobody went back to fix.",
   "walk": [
    "First, protect every sensitive account, not just the obviously risky ones, because email alone can unlock the rest.",
    "Finally, go looking for accounts that were created before the rule existed."
   ],
   "ask": "List the accounts you use for Elias's work: email, calendar, case management, bank portal and travel. Which would you check first, and why?"
  }
 },
 "8::Password Manager Best Practices": {
  "p1": {
   "why": "Use a different password for every account, and let a password manager remember them for you.",
   "talk": "If you use the same password in several places, one breach anywhere becomes a breach everywhere. A password manager makes unique passwords easy, because you only have to remember one very strong master password.",
   "walk": [
    "First, let the password manager create a unique password for every account.",
    "Next, make the master password the strongest, best-protected password you have.",
    "Then, share logins through the manager's sharing feature, never by email or chat.",
    "After that, move any passwords sitting in documents or notes into the manager.",
    "Finally, change a password immediately if there's any sign the account has been compromised."
   ],
   "ask": "Does anyone still have passwords in a document or on a sticky note? A colleague asks you to email them the login for the firm's travel account. What do you do instead?"
  }
 },
 "8::Shared Account Risks": {
  "p1": {
   "why": "When several people share one login, nobody can tell who did what.",
   "talk": "That doesn't matter until something goes wrong. Then you need to know who made the change or placed the order, and a shared account can't tell you. It also makes it hard to remove one person's access without disrupting everyone else.",
   "walk": [
    "First, prefer individual accounts with the right permissions.",
    "Next, if an account must be shared, keep a log of who used it for what.",
    "Then, when someone with access leaves, change the password and share the new one securely.",
    "After that, ask whether the shared account could be replaced with individual ones. It usually can.",
    "Finally, treat any shared account as a risk to manage, not a settled convenience."
   ],
   "ask": "Does your organization still share a login for anything important?"
  },
  "p2": {
   "why": "Shared logins are convenient today and confusing when something goes wrong.",
   "talk": "Shared logins feel convenient, until something goes wrong. Then nobody can tell who did what. And when one person leaves, the only way to lock them out is to change the password for everyone. Individual accounts are a little less convenient day to day, but they're almost always the safer choice.",
   "walk": [
    "First, removing one person from a shared account means changing the password for everyone.",
    "Finally, individual accounts are almost always safer, even if they're less convenient."
   ],
   "ask": "Three assistants share one login to the firm's courier account, and a $900 rush delivery nobody remembers ordering appears. What can you find out, and what do you change?"
  }
 },
 "8::Offboarding Access Removal Checklist": {
  "p1": {
   "why": "When someone leaves, every system they could get into needs to be closed off on their last day.",
   "talk": "It's easy to remember email and forget the smaller things: the courier account, the shared calendar, the door code. That's why a written checklist beats memory.",
   "walk": [
    "First, keep a written list of every system, account and shared login someone might have.",
    "Next, go through the whole list for every departure.",
    "Then, remove access on the actual leaving date, not 'later'.",
    "After that, change any shared passwords they knew.",
    "Finally, add each new system to the list as soon as the firm starts using it."
   ],
   "ask": "Could you list every system a departing team member would need to be removed from?"
  },
  "p2": {
   "why": "'Probably fine to leave it for now' is exactly how old access lingers.",
   "talk": "When someone leaves, it's easy to remember the big systems, like email, and miss a small one, like the courier account or a shared folder. A written checklist stops that. And 'it's probably fine to leave it for now' is exactly how old access lingers for months. Removing it on the day they leave is least privilege in action.",
   "walk": [
    "First, a written checklist stops you remembering the big systems and missing a small one.",
    "Finally, leftover access after someone leaves is exactly what least privilege is meant to prevent."
   ],
   "ask": "The receptionist leaves on Friday. Let's build the offboarding checklist together: every system, shared login and physical access item."
  }
 },
 "8::The Golden Rules of Admin Data Security": {
  "p1": {
   "why": "An AI tool is a third party, so treat it like a stranger when it comes to private information.",
   "talk": "The first rule is a setting. Many AI tools can use what we type to train future versions, so before any real work goes in, we switch that off. After that, it's the same judgment we'd use about discussing a case in a lift. The firm's duty of confidentiality applies to AI tools exactly as it applies to a conversation in the hallway.",
   "walk": [
    "First, before real work, turn off any training or data-improvement setting.",
    "Next, never put in financial data, health information, social security numbers or passwords.",
    "Then, replace real names and details with placeholders, like 'Company X'.",
    "After that, use the same judgment you'd use about discussing a case in public.",
    "Finally, if you're not sure, treat it as unsafe and find another way."
   ],
   "ask": "Which setting do you switch off before using an AI tool for work?"
  },
  "p2": {
   "why": "Placeholders in, real identifiers out.",
   "talk": "In short: no financial details, health information, ID numbers or passwords ever go into an AI tool. Real names become placeholders, like 'Company X' or 'the employee', before anything is pasted. For a firm like Elias's, which runs on strict confidentiality, that swap takes a minute and removes almost all of the risk.",
   "walk": [
    "First, no financial data, health information, ID numbers or passwords.",
    "Next, replace names with placeholders before sending anything.",
    "Finally, think through exactly what you'd swap out of a real email before pasting it."
   ],
   "ask": "Let's clean this one up together: a termination email naming the employee, their salary, their medical leave and the client they worked for. What do you remove or replace before asking an AI tool to improve the wording?"
  }
 },
 "8::Classifying Information by Sensitivity Level": {
  "p1": {
   "why": "Not everything needs the same protection, and when you're unsure, treat it as more sensitive, not less.",
   "talk": "Think of information in three levels. Public: fine for anyone to see, like a press release. Internal: not secret, but not meant for outsiders, like staff memos. And confidential or privileged: things that would cause real legal or reputational harm if they leaked, like case details, client messages and finances. Knowing the level tells us how carefully to handle it.",
   "walk": [
    "First, before sharing anything, decide which level it is.",
    "Next, treat public information as shareable, once you've confirmed it's really meant for outsiders.",
    "Then, keep internal information inside the firm.",
    "After that, handle confidential and privileged information with real care every time.",
    "Finally, when unsure, go one level higher."
   ],
   "ask": "Where would a client's meeting schedule fall?"
  },
  "p2": {
   "why": "Treat everything as top secret and you'll wear yourself out; treat everything casually and leaks happen.",
   "talk": "If we treat everything as top secret, we wear ourselves out and slow everyone down. If we treat everything casually, leaks happen. Sorting information into levels is what lets us put our care where it counts. And when we're not sure which level something belongs in, we choose the higher one until we can confirm.",
   "walk": [
    "First, different information needs different levels of protection.",
    "Finally, when unsure, choose the more sensitive level until you can confirm."
   ],
   "ask": "Classify these live: the firm's office address, Elias's travel itinerary, a draft motion in the Harlow matter, the holiday party date and a client's settlement amount."
  }
 },
 "8::Secure File Sharing Methods": {
  "p1": {
   "why": "Share sensitive files through a controlled link, not as an email attachment.",
   "talk": "Once you attach a file to an email, you lose control of it. It can be forwarded anywhere, forever. A secure sharing link lets you choose who can open it, set an expiry date and switch it off later.",
   "walk": [
    "First, use a secure, permission-controlled link instead of an attachment for sensitive files.",
    "Next, set an expiry date and specific permissions.",
    "Then, if you password-protect a file, send the password by a different route, never in the same email.",
    "After that, switch off the link when it's no longer needed.",
    "Finally, only share with people who genuinely need the file."
   ],
   "ask": "Elias asks you to send a client's financial disclosures to their accountant. Walk us through exactly how you'd share it: the method, the permissions, the expiry and how the password gets there."
  }
 },
 "8::Email Encryption Basics": {
  "p1": {
   "why": "Ordinary email isn't built for secrets, so privileged content deserves the encrypted option.",
   "talk": "Many firms already have an encrypted email option that nobody uses, simply because people don't know it's there. Encryption protects the message on the way and while it's stored.",
   "walk": [
    "First, decide whether the message contains genuinely sensitive or privileged content.",
    "Next, use encryption for privileged legal content.",
    "Then, find out whether your firm already has an encrypted option.",
    "After that, remember that encryption is an extra layer, not a replacement for judgment.",
    "Finally, when unsure, encrypt."
   ],
   "ask": "Does your organization have an encrypted email option?"
  },
  "p2": {
   "why": "Encryption won't save you if you send it to the wrong person.",
   "talk": "Knowing when you need encryption is a skill in itself. Not everything needs it, but privileged legal content usually does.",
   "walk": [
    "First, match the protection to the content.",
    "Finally, encryption is one more layer on top of good judgment about what gets sent at all."
   ],
   "ask": "Which of these would you encrypt: a lunch confirmation, a privileged strategy memo to the client, a client's medical records for an injury claim and a routine scheduling email to opposing counsel?"
  }
 },
 "8::Metadata Risks in Shared Documents": {
  "p1": {
   "why": "A document can look clean on screen and still carry hidden comments and old edits.",
   "talk": "Behind the visible text, documents often keep tracked changes, comments, author names and earlier versions. Sent to the wrong party, that hidden layer can reveal exactly what you didn't mean to share, like an internal note about how far the client will go.",
   "walk": [
    "First, before sending a document outside the firm, check for hidden history.",
    "Next, clean it properly: remove tracked changes, comments and hidden text.",
    "Then, take extra care with anything going to opposing counsel.",
    "After that, make 'save a clean version' a standard step before external sharing.",
    "Finally, check the clean version really is clean before you send it."
   ],
   "ask": "You're about to send a proposed settlement to opposing counsel, and it contains an internal comment: 'Client will go to $250K if pushed.' Walk us through the steps before it goes out."
  }
 },
 "8::Device Security Fundamentals": {
  "p1": {
   "why": "An unlocked device, even for a minute, is an open door.",
   "talk": "Device security is mostly habits. Lock the screen before you step away. Keep the screen-lock timer short. And make sure devices are encrypted, so a lost laptop is only a lost piece of hardware, not a data breach.",
   "walk": [
    "First, set a short auto-lock, and lock manually every time you step away.",
    "Next, make sure full-disk encryption is switched on.",
    "Then, treat personal devices with work email as work devices.",
    "After that, install security updates promptly.",
    "Finally, set up remote wipe where you can."
   ],
   "ask": "Would your devices be safe if you lost them today?"
  },
  "p2": {
   "why": "Encryption is the difference between losing a laptop and losing the firm's data.",
   "talk": "Encryption scrambles everything on a device so nobody can read it without the password. With it, a laptop left in a taxi is just lost hardware. Without it, it could be a data breach. And a personal phone with work email on it carries the same responsibilities as a work laptop. It needs a lock, encryption and a way to wipe it remotely.",
   "walk": [
    "First, with encryption, a lost device is a hardware loss, not necessarily a breach.",
    "Finally, your phone with work email carries the same obligations as a work laptop."
   ],
   "ask": "Elias leaves his phone, with his work email on it, in a taxi. What do you check and do in the next 30 minutes?"
  }
 },
 "8::Physical Security Basics": {
  "p1": {
   "why": "Someone walking up to an unlocked laptop has as much access as a hacker.",
   "talk": "All the digital security in the world doesn't help if a laptop is left open in a café or a filing cabinet is left unlocked overnight. Physical access is still access.",
   "walk": [
    "First, lock your laptop any time you step away in a shared space.",
    "Next, lock filing cabinets with sensitive documents overnight and when unattended.",
    "Then, report a lost badge, key or access card straight away.",
    "After that, keep visitors and vendors to a clear, limited area.",
    "Finally, check your own desk now and then for anything sensitive on show."
   ],
   "ask": "Is anything sensitive visible on your desk right now?"
  },
  "p2": {
   "why": "A lost badge is as serious as a leaked password.",
   "talk": "We tend to take passwords seriously and badges casually, but a lost badge can let someone walk straight into the office. So we report it immediately, not 'once I've looked a bit more'. And the same idea as system access applies to rooms: people only go where they need to, and visitors don't wander around on their own.",
   "walk": [
    "First, report a lost badge or key immediately, not 'eventually'.",
    "Finally, least privilege applies to rooms too. Visitors shouldn't wander freely."
   ],
   "ask": "You realize your office badge wasn't in your bag this morning, and you last had it at a coffee shop. It's probably just misplaced. What do you do, and when?"
  }
 },
 "8::Clean Desk Policy": {
  "p1": {
   "why": "A document left on a desk or in the printer tray is a leak waiting to happen.",
   "talk": "A clean desk policy closes an easy-to-miss gap: sensitive papers left out between tasks, pages sitting in the printer and screens left unlocked.",
   "walk": [
    "First, put sensitive documents away when you're not using them.",
    "Next, check the printer tray after printing anything sensitive.",
    "Then, lock your screen every time you step away.",
    "After that, apply the same habits at home if you work remotely.",
    "Finally, do a quick check of your desk at the end of each day."
   ],
   "ask": "What would a clean-desk check find on your desk right now?"
  },
  "p2": {
   "why": "The printer tray is the most forgotten security risk in any office.",
   "talk": "The printer tray is one of the most forgotten risks in any office. Anything sitting there is available to whoever walks past next. A clean desk policy is the daily habit that closes those small gaps: papers put away, printouts collected straight away and screens locked whenever we step away.",
   "walk": [
    "First, a printout left in the tray is available to anyone walking by.",
    "Finally, a clean desk is the daily habit that makes physical security real."
   ],
   "ask": "You work from home two days a week, and your family walks past your desk. What does a clean desk look like there?"
  }
 },
 "8::Secure Disposal of Sensitive Documents": {
  "p1": {
   "why": "The recycling bin isn't disposal; shredding is.",
   "talk": "A sensitive document in the trash can still be read by anyone who finds it. And deleting a file on a computer doesn't always remove it for good. Real disposal means shredding paper and securely deleting files.",
   "walk": [
    "First, shred sensitive paper instead of binning or recycling it.",
    "Next, use secure deletion for sensitive digital files.",
    "Then, make disposal a regular habit, daily or weekly.",
    "After that, make sure a shredder or secure bin is actually within reach.",
    "Finally, apply the same care to drafts and working copies."
   ],
   "ask": "You printed three drafts of a client's estate plan while revising it. Where does each one go when you're done, and what about the drafts on your computer?"
  }
 },
 "8::Fixing a Broken Workflow": {
  "p1": {
   "why": "When a task lives across email, a spreadsheet and someone's notes, work gets duplicated, even by careful people.",
   "talk": "If nobody can tell you where something stands without checking three places, the workflow is broken. The fix is one place that tracks it, with the manual steps named on purpose.",
   "walk": [
    "First, find a workflow that's split across disconnected tools.",
    "Next, bring it into one tracked system.",
    "Then, name which steps stay manual, so each one is a choice.",
    "After that, test the new version on a real task.",
    "Finally, check back later that it actually stopped the duplicate work."
   ],
   "ask": "What workflow of yours is held together by email, a spreadsheet and memory?"
  },
  "p2": {
   "why": "If people keep asking 'where is this?', the workflow is broken.",
   "talk": "There are three tell-tale signs a workflow is broken. People keep asking where something is, because no single place shows it. The same information gets typed into email, a spreadsheet and a calendar. And tasks stall between people, because nobody owns the step in the middle. Spot any of those, and it's time to redesign.",
   "walk": [
    "First, status questions: people ask where something is because no single place shows it.",
    "Next, duplicate effort: the same information typed into email, a spreadsheet and a calendar.",
    "Finally, handoff gaps: tasks stall between people, and nobody owns the step in between."
   ],
   "ask": "Client document requests arrive by email, get logged in a spreadsheet and are tracked in someone's notes. Redesign it: what's the one system, and which steps stay manual?"
  }
 },
 "8::Social Engineering Red Flags": {
  "p1": {
   "why": "Scammers target people, not systems, and urgency is their favorite tool.",
   "talk": "Social engineering means tricking a person, rather than a computer, into handing over access or information. It usually shows up with three signs. Pressure: 'I need this right now, there's no time to check.' Borrowed authority: someone claiming to be the boss, IT or a trusted vendor. And requests that are just slightly out of the ordinary, like a new way to pay.",
   "walk": [
    "First, treat sudden urgency as a warning sign, not a reason to skip checks.",
    "Next, verify anyone claiming authority through a separate channel you already trust.",
    "Then, pay attention to requests that are slightly unusual, like a new payment method.",
    "After that, use the same checking habit for any odd request.",
    "Finally, report attempts, even ones you didn't fall for."
   ],
   "ask": "Have you ever caught an attempt like this in time? How?"
  },
  "p2": {
   "why": "The best security system in the world fails if someone simply hands over the keys.",
   "talk": "The best security system in the world fails if someone simply hands over the keys. That's why these scams target people, using trust and pressure instead of technology. And it's why one habit protects us so well: before acting on anything that feels off, we check it through a channel we already know, like calling a number we already have.",
   "walk": [
    "First, social engineering works on trust and pressure, not technology.",
    "Finally, verify through a channel you already know before acting on anything that feels off."
   ],
   "ask": "A caller says they're Elias's new banker and need you to confirm his date of birth and the last four digits of his social security number 'to finish setting up his account today.' What are the red flags, and what do you say?"
  }
 },
 "8::Phishing Recognition Beyond Email": {
  "p1": {
   "why": "Phishing doesn't only come by email; it comes by text, phone and even calendar invites.",
   "talk": "The tricks are the same whatever the channel. And attackers often switch to a less expected channel precisely because people have learned to be careful with email.",
   "walk": [
    "First, be as skeptical of texts, calls and calendar invites as you are of email.",
    "Next, look for the usual signs: a generic greeting, a slightly wrong sender or an unexpected link.",
    "Then, check suspicious messages through a number or address you already know, not one in the message.",
    "After that, treat an unexpected request through an unusual channel as more suspicious, not less.",
    "Finally, report it, so others are warned."
   ],
   "ask": "Have you seen a phishing attempt by text or phone?"
  },
  "p2": {
   "why": "When in doubt, verify through a channel you already trust.",
   "talk": "Phishing isn't only email any more. It arrives by text, calendar invite, phone call and chat message. But the warning signs are the same everywhere: a generic greeting, a sender that's almost right, a link we weren't expecting and a sense of urgency. And the fix is the same too: we call a number we already have, never the one in the suspicious message.",
   "walk": [
    "First, the classic signs, like generic greetings and odd senders, still apply in every channel.",
    "Finally, call a number you already have, never one supplied in the suspicious message."
   ],
   "ask": "You get a calendar invite titled 'Urgent: Review Updated Retainer Terms' with a document link, from an address one letter off a client's domain. What do you do?"
  }
 },
 "8::Recognizing Insider Threat Warning Signs": {
  "p1": {
   "why": "Watch the pattern, not the person.",
   "talk": "Not every risk comes from outside. Sometimes access gets used in ways that don't fit someone's role. Usually it's not sabotage; it's a well-meaning shortcut around a security rule. Either way, it's worth noticing.",
   "walk": [
    "First, notice when access is used in ways that don't match someone's job.",
    "Next, look at it as a role-fit question, not a personal accusation.",
    "Then, remember that most cases are shortcuts, not bad intent. The process still needs fixing.",
    "After that, report it to the right person, rather than confronting the colleague or ignoring it.",
    "Finally, keep the focus on behavior and role, not suspicion of individuals."
   ],
   "ask": "Why do you think most insider incidents are shortcuts rather than sabotage?"
  },
  "p2": {
   "why": "Report it to the right person; don't confront it and don't ignore it.",
   "talk": "An insider threat doesn't always mean someone is up to no good. Often it's a well-meaning colleague taking a shortcut around security, like downloading whole folders to work from home. Either way, the risk is real. This isn't about distrusting our colleagues; it's about noticing when access is used beyond what a role needs, and telling the right person rather than confronting it ourselves.",
   "walk": [
    "First, well-meaning shortcuts around security are still real risks.",
    "Finally, this isn't about distrusting colleagues. It's least privilege applied to how access is used."
   ],
   "ask": "You notice a billing clerk has been downloading entire client case files, which their role doesn't need. What do you do, and what do you avoid doing?"
  }
 },
 "8::Responding to a Suspicious Data Request": {
  "p1": {
   "why": "When a request for data feels off, verify first, always.",
   "talk": "When a request for information feels even slightly off, we follow three steps, and the order is important. First, we verify who it's really from, before doing anything else. Then we escalate it through the proper internal channel. And finally, we close the gap, fixing whatever allowed that request to reach us in the first place.",
   "walk": [
    "First, verify: confirm who the sender really is before doing anything.",
    "Next, escalate: send it through the right internal channel.",
    "Finally, close the gap: fix whatever let the request reach you in the first place."
   ],
   "ask": "When a request looks urgent, is your first instinct to verify or to comply?"
  },
  "p2": {
   "why": "Call the number you already have, not the one in the message.",
   "talk": "Suspicious requests tend to share a few features. Urgency and secrecy: 'send this in ten minutes and don't tell anyone.' Details that are nearly right: the correct name, but an email address that's one letter off, or a new phone number. And unusual asks: passwords, client lists, changes to bank details or gift cards. Any one of those is a reason to stop and verify.",
   "walk": [
    "First, urgency and secrecy: 'Send this in ten minutes and don't tell anyone.'",
    "Next, mismatched details: the right name but a slightly wrong email address, or a new phone number.",
    "Finally, unusual asks: passwords, client lists, changes to wire details or gift cards."
   ],
   "ask": "Let's roleplay it: someone calls saying they're from the firm's IT provider and need the client list exported 'before the migration tonight.' Verify or comply? Let's play it out."
  }
 },
 "8::The First 10 Minutes of a Security Incident": {
  "p1": {
   "why": "In a security incident, stop the damage first, then work out what happened.",
   "talk": "When something goes wrong with security, the natural instinct is to investigate first. But the order matters. We contain it, stopping further damage. We assess what was exposed and to whom. We tell the people who need to know, straight away. And we write down what happened as it unfolds. Each step makes the next one easier.",
   "walk": [
    "First, contain: stop further exposure by disconnecting, revoking access or pausing whatever is leaking.",
    "Next, assess: work out as precisely as you can what was exposed and to whom.",
    "Then, notify: tell whoever needs to know immediately. Don't wait for the full picture.",
    "Finally, document: write down what happened and when, as it happens."
   ],
   "ask": "Would you investigate fully first, or raise the alarm right away?"
  },
  "p2": {
   "why": "Telling people early with half the facts beats telling them late with all of them.",
   "talk": "It's natural to want the full story before speaking up, so we don't look foolish if it turns out to be nothing. But in a security incident, every minute of delay can let the damage spread. An early 'I think something's wrong, here's what I know so far' is far more useful than a complete report an hour later.",
   "walk": [
    "First, early notification, even with incomplete information, is almost always better.",
    "Finally, it's the same containment-first idea from the confidentiality leak lesson, applied to any incident."
   ],
   "ask": "Let's roleplay it: you discover the firm's shared client folder has been open to anyone with the link for an unknown amount of time. What do you do in the first ten minutes?"
  }
 },
 "8::Containing a Confidentiality Leak": {
  "p1": {
   "why": "When confidential information leaks, stopping the spread comes before everything else.",
   "talk": "When confidential information goes somewhere it shouldn't, the first job is stopping it from spreading any further. Only then do we tell the right people, meaning the roles that need to know, not whoever happens to be nearby. And once it's contained, we put something in place so the same leak can't happen again.",
   "walk": [
    "First, contain: stop it spreading immediately.",
    "Next, notify: tell the right roles, not just whoever's nearby.",
    "Finally, prevent: put a rule in place so the same leak can't happen again."
   ],
   "ask": "What's the very first thing you'd do in the first 60 seconds?"
  },
  "p2": {
   "why": "Whether clients or regulators need to be told is the attorney's decision, not yours.",
   "talk": "The first hour follows a simple checklist. Stop the spread: recall or delete messages where we can, switch off shared links and lock the affected files. Capture the facts: what was exposed, to whom, when and how. And tell the supervising attorney, IT and compliance promptly. Whether clients or regulators need to be told is the attorney's decision, not ours.",
   "walk": [
    "First, stop the spread: recall or delete messages where possible, switch off shared links and lock down affected files.",
    "Next, capture the facts: what was exposed, to whom, when and how.",
    "Finally, notify the supervising attorney, IT and compliance promptly."
   ],
   "ask": "You realize you emailed a settlement draft for the Harlow matter to the wrong 'Mark,' who works at another firm. Walk us through the first hour."
  }
 },
 "8::Who to Notify and When": {
  "p1": {
   "why": "Know who you'd call before you ever need to call them.",
   "talk": "Different incidents go to different people, on different timelines, and some carry legal obligations. A small confidentiality slip isn't handled the same way as a real data breach. Working that out in the middle of a crisis wastes precious time.",
   "walk": [
    "First, know in advance which kind of incident goes to whom: IT, a partner or outside counsel.",
    "Next, treat a real data breach as something that may carry legal duties and deadlines.",
    "Then, when you're unsure who to tell, escalate to someone senior rather than deciding it doesn't matter.",
    "After that, confirm your firm's actual contacts now, not during an incident.",
    "Finally, notify promptly, even without the full picture."
   ],
   "ask": "Match each incident to who hears first: a laptop stolen from a car, an email with a client's social security number sent to the wrong person, a phishing email nobody clicked and ransomware on the office file server."
  }
 },
 "8::Documenting an Incident as It Unfolds": {
  "p1": {
   "why": "Write down what's happening while it's happening, because memory blurs fast.",
   "talk": "A record made at the time, of what happened, when, who was told and what was done, is far more accurate than one written days later.",
   "walk": [
    "First, note what happened, when and what you did, in real time.",
    "Next, use short, factual, time-stamped notes. Don't wait to write a polished summary.",
    "Then, include who was told and when.",
    "After that, stick to facts, not blame.",
    "Finally, keep the record afterwards, for the review and any legal needs."
   ],
   "ask": "Could you rebuild a timeline of a stressful day last week from memory?"
  },
  "p2": {
   "why": "A rough note written now beats a polished one written later.",
   "talk": "The incident record isn't about blame; it's about getting the facts right while they're still fresh. That's why simple, time-stamped lines written in the moment, like '2:14, realised email went to wrong recipient', are worth far more than a neat summary written days later when memories have blurred.",
   "walk": [
    "First, the record isn't about blame. It's about getting the facts right.",
    "Finally, simple time-stamped lines are worth more than a neat summary after the details have faded."
   ],
   "ask": "Using the misdirected email from earlier, write the first five time-stamped lines of the incident log."
  }
 },
 "8::Post-Incident Review": {
  "p1": {
   "why": "Every incident should end with one concrete change, so it doesn't happen again.",
   "talk": "Once things are resolved, it's tempting to move on. A short review of what happened, what worked and what should change is what stops the same failure coming back in a new form.",
   "walk": [
    "First, run a real review once it's resolved.",
    "Next, focus on the process and the gap, not on blaming someone.",
    "Then, use the notes you took during the incident as the facts.",
    "After that, agree one concrete change.",
    "Finally, record the lesson somewhere real, like Day 6's playbook habit."
   ],
   "ask": "Does your organization actually review incidents afterwards?"
  },
  "p2": {
   "why": "Blame teaches people to hide the next problem.",
   "talk": "After an incident, the question isn't who to blame; it's what to change. If people get blamed, they stop reporting problems early. And early reporting is exactly what keeps incidents small. So the review looks at what happened, what made it possible and what we'll do differently.",
   "walk": [
    "First, focus on the process, not the individual.",
    "Finally, treat it as the same continuous-improvement habit you use for seasonal work."
   ],
   "ask": "Let's run a five-minute review of the misdirected settlement email: what happened, what worked, what gap allowed it and the one change you'd make."
  }
 },
 "8::Crisis Communication Principles": {
  "p1": {
   "why": "In a crisis, people need calm, factual and frequent updates, even when there isn't much to say yet.",
   "talk": "Silence or vague reassurance makes people more anxious, even if things are under control. A short, honest update that says what we know and when you'll hear more calms things down.",
   "walk": [
    "First, communicate calmly and often, instead of going quiet until you have everything.",
    "Next, share only what's confirmed, and say so.",
    "Then, use ACT from Day 1: acknowledge what's happening, clarify what's unknown and give a time for the next update.",
    "After that, don't fill the silence with confident guesses.",
    "Finally, make sure each update actually reaches everyone who needs it."
   ],
   "ask": "When has poor communication made a crisis worse?"
  },
  "p2": {
   "why": "An honest, incomplete update lands better than a confident one that turns out to be wrong.",
   "talk": "In a crisis, people want updates, and it's tempting to sound more certain than we are. Don't. An honest update that says 'here's what we know, here's what we don't yet' lands far better than a confident one that turns out to be wrong. Labelling what's confirmed stops rumours spreading as fact. And the ACT structure, acknowledge, clarify, timeline, works just as well in a crisis.",
   "walk": [
    "First, labeling what's confirmed stops rumors being repeated as facts.",
    "Finally, ACT works in a crisis too."
   ],
   "ask": "The firm's email is down across the office on a filing day, and IT doesn't know why yet. Write the first update to the attorneys using ACT."
  }
 },
 "8::Maintaining Calm Under Pressure": {
  "p1": {
   "why": "Your calm in a crisis is often the only calm in the room, and it spreads.",
   "talk": "So does panic. Visible panic from the assistant can make a bad situation worse. The good news is that staying calm is a skill you can practice, not a personality trait.",
   "walk": [
    "First, pause for a few seconds before you respond.",
    "Next, keep your manner calm and deliberate.",
    "Then, remember that calm isn't the same as doing nothing. It's thinking clearly and acting on purpose.",
    "After that, practice a technique, like a pause, a breath count or a mental checklist, before you need it.",
    "Finally, after a stressful moment, reflect on what helped."
   ],
   "ask": "What actually helps you stay calm?"
  },
  "p2": {
   "why": "A few seconds of pause is the simplest calming technique there is.",
   "talk": "Staying calm doesn't mean not caring. It means still thinking clearly while everyone around us is reacting. The simplest technique of all is a few seconds' pause before responding. That pause is what stops us acting on our first panicked instinct, and it usually shows us the obvious next step.",
   "walk": [
    "First, calm means thinking clearly while everyone else reacts.",
    "Finally, pausing before you respond stops you acting on the first panicked instinct."
   ],
   "ask": "Elias bursts in: the judge moved the hearing to this afternoon, and the exhibit binders aren't printed. Show us your first 30 seconds: what you say and what you do."
  }
 },
 "8::Chain of Command During a Crisis": {
  "p1": {
   "why": "A crisis is the worst time to work out who's allowed to decide what.",
   "talk": "When something goes wrong fast, the worst moment to work out who's in charge is right then. Knowing the chain of command in advance, and who steps in if each person can't be reached, is what stops people freezing when speed matters most.",
   "walk": [
    "First, know who decides what before a crisis.",
    "Next, use the same hierarchy from Day 1, rather than improvising.",
    "Then, know the backup for each person, in case they can't be reached.",
    "After that, escalate through the chain even under pressure. Don't skip steps.",
    "Finally, check your backup contacts now and then, because roles change."
   ],
   "ask": "Who's your backup if your main escalation contact can't be reached?"
  },
  "p2": {
   "why": "The everyday chain of command is also the crisis chain of command.",
   "talk": "The good news is we don't need a special crisis structure. The chain of command we use every day is the same one we use in a crisis. What matters is knowing the backup for each person, so that if the executive is on a flight and the next person isn't answering, we already know who's next.",
   "walk": [
    "First, rely on the structure you already use, rather than making one up under pressure.",
    "Finally, a known backup path prevents a dangerous gap when someone's unreachable."
   ],
   "ask": "A client's wire transfer is flagged as possibly fraudulent at 4:45 PM. Elias is on a flight and the managing partner isn't answering. Who's next in the chain, and what do you do?"
  }
 },
 "8::Business Continuity Basics": {
  "p1": {
   "why": "Continuity planning answers one question ahead of time: if something vital disappeared tomorrow, how would we keep working?",
   "talk": "It could be a system, a person or a resource. The plan doesn't need to be fancy; a simple list of what matters, who to call and what the backup is covers most of it.",
   "walk": [
    "First, identify the systems, people and resources your work depends on.",
    "Next, write a basic list of them, with key contacts and backups.",
    "Then, use the same plan-ahead thinking as backup vendors and the Home Binder.",
    "After that, find your own single points of failure.",
    "Finally, review the plan every so often, because the work changes."
   ],
   "ask": "What's one single point of failure in your work right now?"
  },
  "p2": {
   "why": "A simple list covers most of the value of a continuity plan.",
   "talk": "A continuity plan answers one question: how do we keep working if a key system or person suddenly isn't available? It doesn't need to be elaborate. A simple list of critical systems, who to call and what to have printed or backed up covers most of the value. It's the same idea as having a backup vendor, applied to the whole firm.",
   "walk": [
    "First, it doesn't need to be elaborate to be useful.",
    "Finally, it's the same plan-before-you-need-it idea, applied to the whole organization."
   ],
   "ask": "The firm's case management system goes down for a whole day during trial week. What does the continuity plan need to say, and what should already be printed or backed up?"
  }
 },
 "8::Crisis PR & Media Containment": {
  "p1": {
   "why": "When the media calls, alert the right people all at once; the press won't wait for a slow chain.",
   "talk": "Media situations move faster than any other crisis. The window to shape the first response is often minutes. And unless you're the designated spokesperson, your job is a polite holding line and fast escalation.",
   "walk": [
    "First, confirm who's authorized to speak publicly. That should already be decided.",
    "Next, if it isn't you, give a safe, consistent holding statement rather than no answer or an improvised one.",
    "Finally, alert communications, legal and the executive immediately, all at once."
   ],
   "ask": "If you're not the spokesperson, what do you say?"
  },
  "p2": {
   "why": "'No comment; here's who to contact' is the right fast answer.",
   "talk": "When the media gets involved, trying to help by answering questions ourselves, even with the best intentions, can do real damage. What protects everyone is a fast, correct holding line: 'I'm not able to comment, but here's who you should contact.' Then we alert the right people straight away.",
   "walk": [
    "First, trying to handle the media yourself, even with good intentions, can do real damage.",
    "Finally, a fast, correct holding line protects everyone better than a fast attempt to help."
   ],
   "ask": "A journalist calls you directly, bypassing the firm's usual channels, asking for comment on a sensitive matter. What do you say, and who do you contact the moment you hang up?"
  }
 },
 "8::Attorney-Client Privilege: What EAs Need to Know": {
  "p1": {
   "why": "One wrong recipient on an email can destroy attorney-client privilege.",
   "talk": "Privilege protects private conversations between a lawyer and client about legal advice. It's one of the oldest protections in law, and it can be lost through carelessness. As an EA, you're inside that circle, so the duty applies to you too.",
   "walk": [
    "First, treat any lawyer-client communication about legal advice as privileged.",
    "Next, check the recipient list before sending anything privileged.",
    "Then, don't discuss case details anywhere you could be overheard.",
    "After that, remember that the confidentiality duty extends to you.",
    "Finally, if you're unsure, ask the attorney. A disclosure can't be undone."
   ],
   "ask": "How could privilege be lost by accident?"
  },
  "p2": {
   "why": "An accidental disclosure can't be taken back.",
   "talk": "Attorney-client privilege protects private conversations between a lawyer and their client. But it can be lost, often by accident, by copying in someone who isn't part of the matter, or talking about it where others can hear. As the person managing the attorney's communications, we sit inside that privileged circle, so we protect it. And because an accidental disclosure can't be undone, when in doubt, we ask first.",
   "walk": [
    "First, privilege can be waived by including the wrong person or talking where others can hear.",
    "Next, managing a lawyer's communications puts you inside the privileged relationship.",
    "Finally, when in doubt, ask the attorney first."
   ],
   "ask": "Elias asks you to forward his advice email to the client, and the client asks you to copy in their business partner, who isn't part of the matter. What do you do?"
  }
 },
 "8::Work-Product Confidentiality": {
  "p1": {
   "why": "An attorney's working documents have their own protection, and careless handling can lose it.",
   "talk": "Work product means the attorney's own preparation: strategy memos, draft arguments and case analysis. It's protected separately from client communications, and it can lose that protection if it's shared carelessly.",
   "walk": [
    "First, handle strategy drafts and case analysis as carefully as privileged material.",
    "Next, never share them outside the matter team without clear permission.",
    "Finally, label and store them clearly as work product."
   ],
   "ask": "What counts as work product in a case file?"
  },
  "p2": {
   "why": "Just because something isn't a client message doesn't mean it's safe to share.",
   "talk": "Work product is the material lawyers create while preparing a case, like strategy memos, notes and research. It has its own protection, separate from client messages, and careless sharing can weaken it. So even when a colleague has a perfectly good reason for asking, we treat those documents as protected until the attorney says otherwise.",
   "walk": [
    "First, work product has its own protection that careless handling can waive.",
    "Finally, when unsure, treat it as protected."
   ],
   "ask": "A colleague on an unrelated matter asks to see a strategy memo from a case you support, saying it would help with a similar issue. What do you do?"
  }
 },
 "8::Investor Disclosure Confidentiality": {
  "p1": {
   "why": "Before anything goes to an investor, confirm it's been cleared to share.",
   "talk": "Investors can be told some things but not others, and some information needs approval before it's shared at all. Investor material also tends to live in the most restricted folders the firm has. So preparing an investor briefing and protecting confidentiality are really two parts of the same job.",
   "walk": [
    "First, confirm what's been cleared before including it in anything investor-facing.",
    "Next, keep investor materials in access-controlled storage.",
    "Finally, when an investor asks for something new, escalate rather than answering yourself."
   ],
   "ask": "Who decides what an investor can be told?"
  },
  "p2": {
   "why": "An investor's interest doesn't mean they're entitled to the information.",
   "talk": "An investor being interested in something doesn't mean they're entitled to it. There are rules about what can be disclosed and when, and sharing the wrong thing early can cause real legal problems. So when an investor asks for details, we check what's been approved for sharing before we reply.",
   "walk": [
    "First, don't assume investors can have anything that seems relevant.",
    "Finally, confidentiality and briefing preparation are two sides of the same job."
   ],
   "ask": "An investor emails asking for details about a matter that hasn't been publicly disclosed. What do you do before replying?"
  }
 },
 "8::HIPAA in a Legal Context": {
  "p1": {
   "why": "Medical records in a case file are always the most sensitive thing in it.",
   "talk": "HIPAA is the US law protecting personal health information. It matters whenever a legal case touches medical records: personal injury, workers' compensation and disability claims. The firm doesn't have to be a healthcare provider for it to apply.",
   "walk": [
    "First, recognize when a matter involves medical records.",
    "Next, apply that care even outside health-related practice areas.",
    "Then, share medical records only with people who genuinely need them.",
    "After that, treat health information as the highest sensitivity level.",
    "Finally, ask the attorney if you're unsure what extra handling is needed."
   ],
   "ask": "Has anyone handled a case file with medical records in it?"
  },
  "p2": {
   "why": "A firm doesn't need to be in healthcare for health privacy law to matter.",
   "talk": "HIPAA is the US law protecting health information. A law firm doesn't have to be in healthcare for it to matter: the moment a client's medical records are in a file, it can come into play. So medical information is handled discreetly, seen only by those who need it, never left visible, and always treated at the highest sensitivity level.",
   "walk": [
    "First, any medical information in a file can bring HIPAA into play.",
    "Next, handle it discreetly: only the people who need it, never left visible.",
    "Finally, it always goes in the top sensitivity level."
   ],
   "ask": "A personal-injury client emails you their full hospital records and asks you to forward them to their chiropractor and their employer. What do you do?"
  }
 },
 "8::GDPR & Data Privacy Regulations": {
  "p1": {
   "why": "Europe's privacy law follows the data, not the firm's location.",
   "talk": "GDPR governs how the personal data of people in the EU is handled, and it can apply to a US firm that holds that data. It gives people real rights, like knowing what's held about them and sometimes having it deleted. And the US has its own growing set of state privacy laws, like California's.",
   "walk": [
    "First, recognize that GDPR can apply even to a firm outside the EU.",
    "Next, organize records with people's data rights in mind.",
    "Then, check at intake whether a matter involves personal data from outside the US.",
    "After that, remember US state laws work in a similar spirit.",
    "Finally, flag possible privacy obligations to the attorney early."
   ],
   "ask": "Does your firm handle data about anyone outside the US?"
  },
  "p2": {
   "why": "Your job is to spot when privacy law might apply; the attorney handles the details.",
   "talk": "GDPR is Europe's data privacy law, and it gives people real rights over their personal information. The catch is that 'we're not in Europe' doesn't mean it doesn't apply; if a client or their staff are there, it might. We're not expected to know all the details. Our job is to spot the trigger, like a European client or employee records, and flag it to the attorney early.",
   "walk": [
    "First, people's data rights affect how long records are kept and how they're organized.",
    "Next, 'we're not in the EU' doesn't mean privacy law doesn't apply.",
    "Finally, recognize the trigger and flag it early."
   ],
   "ask": "A new client is a German company with staff in Berlin and Chicago, and the matter involves employee records from both offices. What do you flag to Elias at intake?"
  }
 },
 "8::Other Relevant Compliance Frameworks": {
  "p1": {
   "why": "Some kinds of information always deserve extra care, even before you know exactly which law applies.",
   "talk": "There are other rules too: for public companies' finances, for financial privacy, for student records, and each state's professional rules for lawyers. We don't need to memorise them. What we need is an instinct: health, financial, children's and foreign data are special, and deserve extra care before we even know exactly which law applies.",
   "walk": [
    "First, learn the pattern rather than every law.",
    "Next, handle those sensitive categories with extra care by default.",
    "Then, ask the attorney whenever a matter touches an unfamiliar regulated area.",
    "After that, know the names that come up: public-company financial rules, financial privacy and education records.",
    "Finally, remember that lawyers' ethics rules on confidentiality always apply."
   ],
   "ask": "Which regulations apply to your firm's practice areas?"
  },
  "p2": {
   "why": "Pattern recognition is the skill, and asking is always the right move.",
   "talk": "No training could cover every regulation, and that isn't the goal. Legal work touches a huge range of rules depending on the client. The skill is spotting the sensitive categories, handling them carefully and asking the attorney whenever something feels unfamiliar. An unnecessary question costs nothing; a missed requirement can cost a lot.",
   "walk": [
    "First, legal work touches a wide range of rules, depending on the client.",
    "Next, spot the sensitive categories and handle them carefully.",
    "Finally, an unnecessary question costs nothing; a missed requirement can cost a lot."
   ],
   "ask": "A new matter involves a public company's internal financial controls and a student's school records. Which frameworks might apply, and what do you ask Elias?"
  }
 }
});
