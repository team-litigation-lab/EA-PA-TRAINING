/* Day 8 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through).
   Every topic is written in the trainer's style: icebreaker (a quick game to open) · teaser (the curiosity gap
   before the reveal) · jargon ([{term, hint}] for the trainer to explain) · story (a real-life incident from the field) ·
   contrast ({lazy, excellent}) · outcome (where it lands: deadlines, the case, the settlement) ·
   ask (calls on trainees by name, "[Name]") · mystery (the closing challenge, in place of scenario). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "8::Credential Management": {
  "p1": {
   "icebreaker": "Game: 'Admin, Editor or Viewer?' I'll name a person; you shout the access level they should get. The managing partner on the billing system. A trainee on the shared calendar. The IT lead on email. A visiting client on the deal room. Loudest correct answer wins. Watch how often the room shouts 'Admin' without thinking.",
   "teaser": "There's one sentence IT says to new assistants all the time, and it sounds perfectly reasonable. By the end of this slide you'll know why it's the most dangerous sentence in the office.",
   "why": "Give everyone the smallest level of access that lets them do their job, and turn on two-step login everywhere.",
   "talk": "Most systems have three kinds of access. Admin can change everything, including who gets in. Editor can work on content but can't change permissions. Viewer can only look. The more people with admin rights, the more ways things can go wrong. And the sentence I teased? It's 'Easiest is to copy Elias's permissions.' Easy for IT, risky for everyone.",
   "walk": [
    "First, give each person the lowest role their job needs: admin only for those responsible for the system, editor for regular work and viewer for everyone else.",
    "Next, switch on multi-factor authentication for every account, however routine.",
    "Then, review who has which role regularly, because people's jobs change.",
    "After that, when giving new access, start narrow and widen it only if there's a real need.",
    "Finally, write down who has which role and why."
   ],
   "jargon": [
    {
     "term": "Admin / Editor / Viewer",
     "hint": "full control, can change content, can only look"
    },
    {
     "term": "Multi-factor authentication (MFA)",
     "hint": "a second check, like a phone code, on top of the password"
    },
    {
     "term": "Permissions",
     "hint": "the list of what each person is allowed to see or do in a system"
    }
   ],
   "story": "A common first-week story: a new associate starts, and to save time IT copies a senior partner's permissions onto his account. Six months later, during a routine review, someone notices he can open HR files and every partner's billing records. Nothing was misused, but the firm had to explain to a client auditor why a junior lawyer had that reach. A one-line request for 'associate role, Meridian and Harlow folders only' would have avoided the whole conversation.",
   "ask": "[Name], what's your access level in the tools you use every day, and do you actually know? [Name], how would you find out for sure?"
  },
  "p2": {
   "why": "Access that outlives the job is one of the most common security gaps.",
   "talk": "Most systems give people one of three levels. Admin means full control, including who else gets in, so very few people should have it. Editor means they can create and change things but not change permissions. Viewer means they can look but not touch. The important habit is reviewing those levels whenever someone changes jobs or leaves, because access that outlives the job is one of the most common gaps there is.",
   "walk": [
    "First, admin means full control, and should be limited to very few people.",
    "Next, editor can create and edit but not change permissions, and viewer can look but not change.",
    "Finally, review access whenever someone changes roles or leaves."
   ],
   "contrast": {
    "lazy": "'Just copy Elias's permissions, it's quicker.' Access is handed out once and never looked at again.",
    "excellent": "'Please set up the new associate as editor on the Meridian folders and viewer on the matter calendar, with MFA on. I'll review it at his 90-day check.' Every role has a reason and a review date written next to it."
   },
   "outcome": "Too much access turns one mistake or one stolen password into a firm-wide problem. If privileged files are opened or changed by someone who should never have had them, the firm may have to disclose it, the client loses confidence and the other side may gain an argument about how our evidence was handled. Tight roles keep the case file clean all the way to settlement.",
   "ask": "[Name], a new paralegal needs to update the shared matter calendar and read the client folder. What role do they get in each system? [Name], what would make you revisit it later?",
   "mystery": "The case of the paralegal who never left. A paralegal moved from the Meridian team to billing three months ago. She can still edit every Meridian folder and approve time entries. In pairs, you have three minutes: list every access she still has that she shouldn't, decide who you flag it to, and write the two-line email you'd send. Bring back the email."
  }
 },
 "8::Least-Privilege Access": {
  "p1": {
   "icebreaker": "Game: 'Stand if you've ever...' Stand up if you've ever had access to a folder you didn't need. Stay standing if you still have it today. Stay standing if nobody has ever asked you about it. Look around: that's the room's quiet risk.",
   "teaser": "Here's a question to keep in your head: when a trainee deletes a client folder, whose fault is it? Most people get this one backwards.",
   "why": "Too much access is how systems get broken by people who meant no harm.",
   "talk": "Least privilege means everyone gets exactly what their role needs and nothing more. It isn't about distrust. It's that someone with admin rights they don't need can accidentally change something important. Access also builds up quietly: a project here, a favour there, and nobody takes it back.",
   "walk": [
    "First, give access based on what the role actually needs, not what might be handy someday.",
    "Next, when someone has more access than they need, flag it, even if nothing has gone wrong yet.",
    "Then, if too much access causes a problem, fix the role. Don't blame the person.",
    "After that, review who has high-level access regularly, because it quietly builds up.",
    "Finally, remove temporary access when the project ends."
   ],
   "jargon": [
    {
     "term": "Least privilege",
     "hint": "only the access a role needs, nothing extra"
    },
    {
     "term": "Shared drive",
     "hint": "the firm's common file storage everyone can reach"
    },
    {
     "term": "Temporary access",
     "hint": "rights given for one project that should end with it"
    }
   ],
   "story": "This happens in real offices: everyone was given admin rights on the shared drive 'because it's easier.' A trainee tidying her own folders dragged a whole client correspondence folder into the bin and emptied it. IT restored most of it from backup, but two days of emails were gone, and the partner had to tell the client. With editor rights only, the delete would simply have been blocked.",
   "ask": "[Name], who in an organization like yours might have more access than their job needs? [Name], how would you raise that without it sounding like an accusation?"
  },
  "p2": {
   "why": "When too much access causes a problem, fix the role, not the person.",
   "talk": "Here's a real example of why this matters. A junior staff member was given admin access by mistake, and ended up changing settings they should never have been able to touch. The instinct is to blame them. But they only did what the system let them do. The real fix is correcting their role, and then checking who else has more access than they need.",
   "walk": [
    "First, don't blame the person who had the access.",
    "Finally, correct the role, and review everyone else's access too."
   ],
   "contrast": {
    "lazy": "'She shouldn't have touched it. I'll tell her to be more careful.' The role stays the same and so does the risk.",
    "excellent": "'The system let her do it, so the role was wrong. I've asked IT to move her to viewer, and I'm checking who else has editor rights they don't use.' The gap closes for everyone, not just one person."
   },
   "outcome": "Blaming the person leaves the door open for the next one. If wrong access lets someone change client rates, delete evidence or open privileged files, the firm faces billing disputes, possible sanctions for lost records and awkward questions from the other side. Fixing the role is what keeps the file trustworthy when the case is decided.",
   "ask": "[Name], a contractor who finished a document review two months ago still has access to the firm's case management system. What do you do? [Name], how do you stop it happening next time?",
   "mystery": "The case of the changed hourly rates. An intern had editor access to the firm's billing system to help with filing. She accidentally changed two clients' hourly rates. Elias wants to know who to blame. In teams of three, two minutes: find the real cause, name the fix, and write the one sentence you'd say to Elias that answers 'who?' with 'what.'"
  }
 },
 "8::Multi-Factor Authentication Basics": {
  "p1": {
   "icebreaker": "Game: 'Count on your fingers.' Hold up one finger for every account where you're sure two-step login is on. Now put down a finger for every one you're only guessing about. Who's left with the most fingers up? Keep your hand where it is for a second.",
   "teaser": "One account on your list can unlock almost all the others. It's not your bank. I'll tell you which one in a moment.",
   "why": "A password alone is one lock on the door; two-step login adds a second one a thief can't copy.",
   "talk": "Multi-factor authentication means you need something you know, your password, plus something you have, like a code on your phone. So a stolen password on its own isn't enough to get in. And the account I teased is email. Whoever controls email can reset the passwords on almost everything else.",
   "walk": [
    "First, turn it on for every account that touches anything sensitive.",
    "Next, protect email first, because email can reset the passwords for almost everything else.",
    "Then, check older accounts set up before two-step login was required. They're the usual gap.",
    "After that, use an authenticator app or a security key rather than text-message codes where you can.",
    "Finally, check your own accounts rather than assuming they're covered."
   ],
   "jargon": [
    {
     "term": "Two-step login / MFA",
     "hint": "password plus a second proof, like a phone code"
    },
    {
     "term": "Authenticator app",
     "hint": "a phone app that makes the login codes for you"
    },
    {
     "term": "Security key",
     "hint": "a small physical device you plug in or tap to log in"
    }
   ],
   "story": "A real pattern from the field: an attorney's email password was caught in a breach of an unrelated shopping site where he'd reused it. He had no two-step login. The attacker read his inbox quietly for a week and then sent a client new 'bank details' for a settlement payment. The firm caught it only because the client phoned to check. A code on his phone would have stopped it on day one.",
   "ask": "[Name], how many of your accounts have you actually checked for two-step login, not just assumed? [Name], which one would you check first tonight?"
  },
  "p2": {
   "why": "The usual gap isn't missing technology; it's an old account nobody updated.",
   "talk": "Multi-factor authentication means a second check, like a code on your phone, on top of a password. Every sensitive account needs it, not just the obviously risky ones, because a hacked email account can be used to reset the passwords on everything else. And the usual gap isn't missing technology; it's the old account set up before the rule existed that nobody went back to fix.",
   "walk": [
    "First, protect every sensitive account, not just the obviously risky ones, because email alone can unlock the rest.",
    "Finally, go looking for accounts that were created before the rule existed."
   ],
   "contrast": {
    "lazy": "'Elias said it's annoying on the plane, so I left it off.' The old accounts nobody remembers stay exactly as they were.",
    "excellent": "'I've set Elias up with an authenticator app that works offline on the plane, and I've listed every old account, including the 2019 travel login, to switch on or close by Friday.'"
   },
   "outcome": "One weak account can hand an attacker the whole client relationship: emails, calendars, payment instructions. In a live matter that can mean a diverted settlement payment, leaked strategy or a breach report to the client. A few minutes of setup protects money that may already be on its way to the client.",
   "ask": "[Name], list the accounts you use for Elias's work: email, calendar, case management, bank portal and travel. Which would you check first? [Name], and why that one?",
   "mystery": "The case of the forgotten logins. While checking accounts, you find the firm's old postage-meter login and a travel booking account from 2019, both without two-step login, both still active. In pairs, two minutes: decide for each one whether you secure it or shut it, who you need to ask, and what clue tells you which. Bring back one decision per account."
  }
 },
 "8::Password Manager Best Practices": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' I'll read three password habits; shout 'Real!' if you've seen it in an office, 'Fake!' if you think nobody does it. A sticky note under the keyboard. A spreadsheet called 'logins' on the shared drive. The same password with a 1, then a 2, then a 3 on the end. Trick question: they're all real.",
   "teaser": "One of those three is far worse than the others, because of who else can see it. Keep your guess ready.",
   "why": "Use a different password for every account, and let a password manager remember them for you.",
   "talk": "If you use the same password in several places, one breach anywhere becomes a breach everywhere. A password manager makes unique passwords easy, because you only have to remember one very strong master password. The worst habit from the game? The spreadsheet on the shared drive, because everyone with drive access can read every password in it.",
   "walk": [
    "First, let the password manager create a unique password for every account.",
    "Next, make the master password the strongest, best-protected password you have.",
    "Then, share logins through the manager's sharing feature, never by email or chat.",
    "After that, move any passwords sitting in documents or notes into the manager.",
    "Finally, change a password immediately if there's any sign the account has been compromised."
   ],
   "jargon": [
    {
     "term": "Password manager",
     "hint": "a secure app that stores and fills your passwords"
    },
    {
     "term": "Master password",
     "hint": "the one password that opens the manager"
    },
    {
     "term": "Breach",
     "hint": "when data or passwords end up in the wrong hands"
    },
    {
     "term": "Compromised",
     "hint": "someone else may have got into the account"
    }
   ],
   "story": "This happens in real offices: an assistant emailed the firm's travel account login to a colleague 'just this once.' Months later, the colleague's mailbox was hacked, the attacker searched for the word 'password' and found it. They booked flights on the firm's card before anyone noticed. Sharing through the password manager would have left nothing in any inbox to find.",
   "contrast": {
    "lazy": "'Here's the login: travel@firm, Summer2024!' typed into an email or chat, and the same password reused across three sites.",
    "excellent": "'I've shared the travel login with you through the password manager. You can use it but not see it, and I can remove you when the trip's booked.' Every account has its own generated password."
   },
   "outcome": "One reused or emailed password can open the bank portal, the case system and Elias's inbox. That's how settlement funds get diverted and privileged files leak, and the firm then has to tell the client. A password manager removes the easiest way in.",
   "ask": "[Name], does anyone you work with still keep passwords in a document or on a sticky note? [Name], a colleague asks you to email them the login for the firm's travel account. What do you do instead?",
   "mystery": "The case of the 'logins' spreadsheet. You find a spreadsheet called 'logins' on the shared drive with 40 passwords in plain text, including the bank portal. The office manager made it 'so nobody gets locked out.' In teams of three, four minutes: put your response in order, step by step, decide which passwords change first, and write the kind one-line message you'd send the office manager. Bring back your numbered list."
  }
 },
 "8::Shared Account Risks": {
  "p1": {
   "icebreaker": "Game: 'Whodunnit?' Everyone close your eyes. I'm going to tap one person's shoulder. Open your eyes. Who did I tap? Shout a name. No idea? That's exactly how a shared login feels when something goes wrong.",
   "teaser": "A shared login is fine right up until one particular moment. You'll see exactly which moment in the story.",
   "why": "When several people share one login, nobody can tell who did what.",
   "talk": "That doesn't matter until something goes wrong. Then you need to know who made the change or placed the order, and a shared account can't tell you. It also makes it hard to remove one person's access without disrupting everyone else.",
   "walk": [
    "First, prefer individual accounts with the right permissions.",
    "Next, if an account must be shared, keep a log of who used it for what.",
    "Then, when someone with access leaves, change the password and share the new one securely.",
    "After that, ask whether the shared account could be replaced with individual ones. It usually can.",
    "Finally, treat any shared account as a risk to manage, not a settled convenience."
   ],
   "jargon": [
    {
     "term": "Shared account",
     "hint": "one login used by several people"
    },
    {
     "term": "Court-filing portal",
     "hint": "the website where documents are filed with the court"
    },
    {
     "term": "Exhibit",
     "hint": "a document attached to a filing as evidence"
    }
   ],
   "story": "A real pattern from the field: four people shared one login to the court-filing portal. A filing went in with the wrong exhibit attached, and nobody remembered submitting it. The attorney had to file a correction and explain the mistake to the judge, and there was no way to work out where the process broke. Individual logins would have shown who filed it and when, in seconds.",
   "ask": "[Name], does an organization you know still share a login for anything important? [Name], what would happen if one of those people left tomorrow?"
  },
  "p2": {
   "why": "Shared logins are convenient today and confusing when something goes wrong.",
   "talk": "Shared logins feel convenient, until something goes wrong. Then nobody can tell who did what. And when one person leaves, the only way to lock them out is to change the password for everyone. Individual accounts are a little less convenient day to day, but they're almost always the safer choice.",
   "walk": [
    "First, removing one person from a shared account means changing the password for everyone.",
    "Finally, individual accounts are almost always safer, even if they're less convenient."
   ],
   "contrast": {
    "lazy": "'We all use the courier login, it's on the note by the printer.' When a mystery charge appears, everyone shrugs.",
    "excellent": "'Each of us now has our own courier account under the firm. Until that's set up, the shared one has a sign-out log, and I changed the password when Jo left.'"
   },
   "outcome": "If you can't show who did what, you can't fix the process or defend it. In litigation, an unexplained filing or a missing record can mean a correction to the court, a sanctions argument or lost credibility with the judge. Clear accounts give you a clear audit trail when someone asks.",
   "ask": "[Name], three assistants share one login to the firm's courier account, and a $900 rush delivery nobody remembers ordering appears. What can you find out? [Name], what do you change?",
   "mystery": "The case of the 5 p.m. deadline. The firm's social media account is shared by three staff. One of them leaves on bad terms today. In pairs, three minutes: list everything that must happen before 5 p.m., in order, and who gets the new password and how. Bring back your list and one clue you'd check for anything already posted."
  }
 },
 "8::Offboarding Access Removal Checklist": {
  "p1": {
   "icebreaker": "Game: 'Shout it out.' Someone leaves the firm today. Shout every system or thing they might still have access to. I'll count on the board. Email, laptop... keep going. We need at least ten in thirty seconds.",
   "teaser": "Every list I've seen a room make misses at least one thing. Let's see if you can guess what yours missed before I show you.",
   "why": "When someone leaves, every system they could get into needs to be closed off on their last day.",
   "talk": "It's easy to remember email and forget the smaller things: the courier account, the shared calendar, the door code. That's why a written checklist beats memory. The thing rooms usually miss is the paid outside tool, like a document-review platform, because IT never set it up in the first place.",
   "walk": [
    "First, keep a written list of every system, account and shared login someone might have.",
    "Next, go through the whole list for every departure.",
    "Then, remove access on the actual leaving date, not 'later'.",
    "After that, change any shared passwords they knew.",
    "Finally, add each new system to the list as soon as the firm starts using it."
   ],
   "jargon": [
    {
     "term": "Offboarding",
     "hint": "the steps when someone leaves the firm"
    },
    {
     "term": "Document-review platform",
     "hint": "an online tool lawyers use to read and tag case documents"
    }
   ],
   "story": "A common story in small firms: an associate left on Friday. IT turned off his email and laptop, but three weeks later he was still logging into the document-review platform the firm paid for. He was only finishing notes for a friend on the team, but he could read every case document in it. The firm had to check what he'd viewed and tell the client. A single line on a checklist would have closed it on his last day.",
   "ask": "[Name], could you list every system a departing team member would need to be removed from? [Name], what's one you think most people would forget?"
  },
  "p2": {
   "why": "'Probably fine to leave it for now' is exactly how old access lingers.",
   "talk": "When someone leaves, it's easy to remember the big systems, like email, and miss a small one, like the courier account or a shared folder. A written checklist stops that. And 'it's probably fine to leave it for now' is exactly how old access lingers for months. Removing it on the day they leave is least privilege in action.",
   "walk": [
    "First, a written checklist stops you remembering the big systems and missing a small one.",
    "Finally, leftover access after someone leaves is exactly what least privilege is meant to prevent."
   ],
   "contrast": {
    "lazy": "'IT will handle it.' Email gets switched off, and the bank portal, alarm code and key are left for 'next week.'",
    "excellent": "'Here's the checklist for Friday: bank portal and QuickBooks off at 5 p.m., alarm code changed, key returned and signed for, shared passwords reset. I'll confirm each one to you by 5:30.'"
   },
   "outcome": "Old access means an ex-employee, or anyone who steals their login, can still reach client files and money. If that comes out in a dispute, the other side can question how our records were protected, and the client may question us. A checklist done on the day closes that gap before it becomes a story.",
   "ask": "[Name], the receptionist leaves on Friday. Start the offboarding checklist for us: every system, shared login and physical access item. [Name], what did they miss?",
   "mystery": "The case of the bookkeeper's last day. A part-time bookkeeper finishes her contract at the end of the month. She has the bank portal, QuickBooks, the office alarm code and a key. In pairs, two minutes: put these in order for her last day, say who does each one and when, and spot the item most likely to be forgotten. Bring back your ordered list."
  }
 },
 "8::The Golden Rules of Admin Data Security": {
  "p1": {
   "icebreaker": "Game: 'Safe or not safe?' Thumbs up if it's safe to paste into an AI tool, thumbs down if not. A recipe. A client's account number. A draft email with 'Company X' instead of the client's name. Elias's home address. Lots of thumbs down. Good.",
   "teaser": "There's one setting most people never touch, and it decides whether what you type helps train someone else's tool. Let's find it.",
   "why": "An AI tool is a third party, so treat it like a stranger when it comes to private information.",
   "talk": "The first rule is a setting. Many AI tools can use what we type to train future versions, so before any real work goes in, we switch that off. After that, it's the same judgment we'd use about discussing a case in a lift. The firm's duty of confidentiality applies to AI tools exactly as it applies to a conversation in the hallway.",
   "walk": [
    "First, before real work, turn off any training or data-improvement setting.",
    "Next, never put in financial data, health information, social security numbers or passwords.",
    "Then, replace real names and details with placeholders, like 'Company X'.",
    "After that, use the same judgment you'd use about discussing a case in public.",
    "Finally, if you're not sure, treat it as unsafe and find another way."
   ],
   "jargon": [
    {
     "term": "Third party",
     "hint": "anyone outside the firm and the client"
    },
    {
     "term": "Duty of confidentiality",
     "hint": "the firm's obligation to keep client information private"
    },
    {
     "term": "Placeholder",
     "hint": "a stand-in like 'Company X' instead of the real name"
    }
   ],
   "story": "A real pattern from the field: an assistant pasted a client's full divorce settlement into a free AI tool to tidy the wording, names and account numbers included. The training setting was on. The firm couldn't say where that text might end up, so it had to treat it as a possible disclosure and tell the partner. Swapping in placeholders first would have taken two minutes.",
   "ask": "[Name], which setting do you switch off before using an AI tool for work? [Name], where would you look for it?"
  },
  "p2": {
   "why": "Placeholders in, real identifiers out.",
   "talk": "In short: no financial details, health information, ID numbers or passwords ever go into an AI tool. Real names become placeholders, like 'Company X' or 'the employee', before anything is pasted. For a firm like Elias's, which runs on strict confidentiality, that swap takes a minute and removes almost all of the risk.",
   "walk": [
    "First, no financial data, health information, ID numbers or passwords.",
    "Next, replace names with placeholders before sending anything.",
    "Finally, think through exactly what you'd swap out of a real email before pasting it."
   ],
   "contrast": {
    "lazy": "Copies the whole email, client name and amounts included, and types 'make this sound nicer.'",
    "excellent": "'Draft a polite reminder from [Firm] to [Client] about invoice [#] for [amount], 30 days overdue.' Then puts the real details back in after, inside the firm's own system."
   },
   "outcome": "Client details in an outside tool can count as a disclosure the firm can't take back. That can mean a breach report, an unhappy client and, in a dispute, an argument that privilege was waived. A minute of placeholders keeps our strategy and our client's numbers ours.",
   "ask": "[Name], here's a termination email naming the employee, their salary, their medical leave and the client they worked for. What do you remove or replace before asking an AI tool to improve the wording? [Name], what did they miss?",
   "mystery": "The case of the slow-paying client. You want an AI tool to help draft a polite payment reminder to a slow-paying client. In pairs, two minutes: list which details get swapped for placeholders, which can stay, and write the placeholder version of the first sentence. Bring back your sentence."
  }
 },
 "8::Classifying Information by Sensitivity Level": {
  "p1": {
   "icebreaker": "Game: 'Line up the cards.' I need three volunteers. You're Public, you're Internal, you're Confidential. Stand in a line. I'll read items; the room points at who should hold each one. A press release. A staff memo. A client's settlement amount. Elias's client meeting schedule. Argue it out.",
   "teaser": "That last one, the meeting schedule, splits every room. There's a simple tie-break rule, and it's the last line on this slide.",
   "why": "Not everything needs the same protection, and when you're unsure, treat it as more sensitive, not less.",
   "talk": "Think of information in three levels. Public: fine for anyone to see, like a press release. Internal: not secret, but not meant for outsiders, like staff memos. And confidential or privileged: things that would cause real legal or reputational harm if they leaked, like case details, client messages and finances. Knowing the level tells us how carefully to handle it.",
   "walk": [
    "First, before sharing anything, decide which level it is.",
    "Next, treat public information as shareable, once you've confirmed it's really meant for outsiders.",
    "Then, keep internal information inside the firm.",
    "After that, handle confidential and privileged information with real care every time.",
    "Finally, when unsure, go one level higher."
   ],
   "jargon": [
    {
     "term": "Privileged",
     "hint": "protected lawyer-client material that can't be forced into the open"
    },
    {
     "term": "Classification",
     "hint": "sorting information by how sensitive it is"
    }
   ],
   "story": "This happens in real offices: a new assistant posted a cheerful team photo on the firm's social media. Behind the team was the office whiteboard with next week's schedule, client names and all. A client spotted their own name and called the partner, unhappy that their meeting with the firm was now public. One second asking 'what level is everything in this picture?' would have caught it.",
   "ask": "[Name], where would a client's meeting schedule fall, and why? [Name], do you agree, or would you go one level higher?"
  },
  "p2": {
   "why": "Treat everything as top secret and you'll wear yourself out; treat everything casually and leaks happen.",
   "talk": "If we treat everything as top secret, we wear ourselves out and slow everyone down. If we treat everything casually, leaks happen. Sorting information into levels is what lets us put our care where it counts. And when we're not sure which level something belongs in, we choose the higher one until we can confirm.",
   "walk": [
    "First, different information needs different levels of protection.",
    "Finally, when unsure, choose the more sensitive level until you can confirm."
   ],
   "contrast": {
    "lazy": "Stamps everything 'confidential', lunch menu included, so nobody reads the label any more. Or the opposite: treats it all as fine to share.",
    "excellent": "'Office address: public. Holiday party: internal. Elias's itinerary and the Harlow draft motion: confidential. Settlement amount: confidential, need-to-know only.' Care goes where it counts."
   },
   "outcome": "When every label says 'confidential', people stop reading labels, and the real secrets slip out with the lunch menu. A leaked settlement figure or draft motion can tell the other side our limits before we're at the table, and that costs the client real money in the final deal.",
   "ask": "[Name], classify these live: the firm's office address, Elias's travel itinerary, a draft motion in the Harlow matter, the holiday party date and a client's settlement amount. [Name], which one would you move up a level?",
   "mystery": "The case of the confidential lunch menu. The firm has just labeled everything 'confidential,' including the lunch menu. People have started ignoring the label. In teams of three, three minutes: design a sensible set of levels, give two office examples for each, and write the one rule people should follow when unsure. Bring back your three levels."
  }
 },
 "8::Secure File Sharing Methods": {
  "p1": {
   "icebreaker": "Game: 'Hands up, hands down.' Hands up if you've attached a sensitive file to an email this month. Keep it up if you know who has it now. Keep it up if you could take it back right now. Every hand drops. Interesting.",
   "teaser": "There's one small mistake people make even when they do password-protect a file. It cancels the whole protection, and I'll show you which one.",
   "why": "Share sensitive files through a controlled link, not as an email attachment.",
   "talk": "Once you attach a file to an email, you lose control of it. It can be forwarded anywhere, forever. A secure sharing link lets you choose who can open it, set an expiry date and switch it off later. The mistake I teased: putting the password in the same email as the file. That's like taping the key to the lock.",
   "walk": [
    "First, use a secure, permission-controlled link instead of an attachment for sensitive files.",
    "Next, set an expiry date and specific permissions.",
    "Then, if you password-protect a file, send the password by a different route, never in the same email.",
    "After that, switch off the link when it's no longer needed.",
    "Finally, only share with people who genuinely need the file."
   ],
   "jargon": [
    {
     "term": "Secure sharing link",
     "hint": "a link where you control who opens it and for how long"
    },
    {
     "term": "Expiry date",
     "hint": "the date the link stops working"
    },
    {
     "term": "Opposing counsel",
     "hint": "the lawyers for the other side"
    },
    {
     "term": "Financial disclosures",
     "hint": "documents showing a person's money, assets and debts"
    }
   ],
   "story": "A common pattern: an assistant emailed a client's financial disclosures to their accountant as an attachment, with the PDF password in the line below. The accountant forwarded the whole email to a colleague, who forwarded it on again. Within a week nobody knew how many people had the client's full finances. A secure link with an expiry date and the password sent by text would have kept it to one person.",
   "contrast": {
    "lazy": "Drags the file into an email, types the password underneath, or uploads 2 GB of exhibits to a free transfer site because it's quick.",
    "excellent": "'I've shared the disclosures through the firm's secure portal, view only, for one named person, expiring Friday. I'll text you the password separately.' Then switches the link off when it's done."
   },
   "outcome": "An attachment is out of our control the moment it's sent. If client financials or exhibits end up with the wrong people, the firm may have to report a breach, the client may lose trust, and the other side may gain information they shouldn't have. Controlled links mean we can always answer 'who has seen this?'",
   "ask": "[Name], Elias asks you to send a client's financial disclosures to their accountant. Walk us through exactly how you'd share it: the method, the permissions and the expiry. [Name], how does the password get there?",
   "mystery": "The case of the 2 GB deadline. Opposing counsel needs 2 GB of Meridian exhibits by tomorrow, and a colleague suggests a free file-transfer site. In pairs, three minutes: name what you'd use instead, list every setting you'd choose, and write the two-line note to opposing counsel. Bring back your settings list."
  }
 },
 "8::Email Encryption Basics": {
  "p1": {
   "icebreaker": "Game: 'Postcard or sealed letter?' Ordinary email is a postcard; encrypted email is a sealed letter. Shout which one: a lunch confirmation. A privileged strategy memo. A meeting room booking. A client's medical records. Fast!",
   "teaser": "Here's a secret: many of your firms already own the sealed-letter option. Nobody's using it. By the end you'll know why.",
   "why": "Ordinary email isn't built for secrets, so privileged content deserves the encrypted option.",
   "talk": "Many firms already have an encrypted email option that nobody uses, simply because people don't know it's there. That's the answer to the teaser: not cost, not difficulty, just nobody asked IT. Encryption protects the message on the way and while it's stored.",
   "walk": [
    "First, decide whether the message contains genuinely sensitive or privileged content.",
    "Next, use encryption for privileged legal content.",
    "Then, find out whether your firm already has an encrypted option.",
    "After that, remember that encryption is an extra layer, not a replacement for judgment.",
    "Finally, when unsure, encrypt."
   ],
   "jargon": [
    {
     "term": "Encryption",
     "hint": "scrambling a message so only the right person can read it"
    },
    {
     "term": "Privileged",
     "hint": "protected lawyer-client communication"
    },
    {
     "term": "Strategy memo",
     "hint": "the attorney's written plan for the case"
    }
   ],
   "story": "A real pattern from the field: an assistant sent a privileged strategy memo to a client's personal email in plain text. The client's account was later hacked, and the memo turned up in a batch of stolen emails. Nobody could say who had read it. The firm had an encryption button in its email the whole time; nobody had ever shown her where it was.",
   "ask": "[Name], does an organization you've worked in have an encrypted email option? [Name], who would you ask to find out?"
  },
  "p2": {
   "why": "Encryption won't save you if you send it to the wrong person.",
   "talk": "Knowing when you need encryption is a skill in itself. Not everything needs it, but privileged legal content usually does. And encryption only protects the message on the way; if the address is wrong, you've securely delivered it to the wrong person.",
   "walk": [
    "First, match the protection to the content.",
    "Finally, encryption is one more layer on top of good judgment about what gets sent at all."
   ],
   "contrast": {
    "lazy": "Either encrypts nothing because it's 'a hassle', or encrypts everything and stops checking who it's going to.",
    "excellent": "Lunch confirmation goes plain. Strategy memo and medical records go encrypted, and before pressing send: 'Recipient checked against the matter contact list, correct client, correct address.'"
   },
   "outcome": "A privileged memo read by the wrong person can hand the other side our strategy and give them an argument that privilege was waived. Medical records sent to the wrong client is a reportable breach. Encryption plus a recipient check protects both the case and the client.",
   "ask": "[Name], which of these would you encrypt: a lunch confirmation, a privileged strategy memo to the client, a client's medical records for an injury claim and a routine scheduling email to opposing counsel? [Name], which one did you hesitate on?",
   "mystery": "The case of the wrong address. You sent an encrypted email with a client's medical records, but you typed the wrong client's address. In pairs, two minutes: decide whether encryption protected you, list your first three actions in order, and name who you tell. Bring back your three actions."
  }
 },
 "8::Metadata Risks in Shared Documents": {
  "p1": {
   "icebreaker": "Game: 'Guess what's hiding.' I'm holding up a clean-looking one-page letter. Shout out anything you think could be hiding inside the file that you can't see on the page. Comments? Old versions? Author names? Keep going: there are at least four.",
   "teaser": "One hidden comment in a real settlement letter once told the other side exactly how much the client would pay. Let's see how that happens.",
   "why": "A document can look clean on screen and still carry hidden comments and old edits.",
   "talk": "Behind the visible text, documents often keep tracked changes, comments, author names and earlier versions. Sent to the wrong party, that hidden layer can reveal exactly what you didn't mean to share, like an internal note about how far the client will go.",
   "walk": [
    "First, before sending a document outside the firm, check for hidden history.",
    "Next, clean it properly: remove tracked changes, comments and hidden text.",
    "Then, take extra care with anything going to opposing counsel.",
    "After that, make 'save a clean version' a standard step before external sharing.",
    "Finally, check the clean version really is clean before you send it."
   ],
   "jargon": [
    {
     "term": "Metadata",
     "hint": "hidden information stored inside a file"
    },
    {
     "term": "Tracked changes",
     "hint": "the record of edits a document keeps"
    },
    {
     "term": "Opposing counsel",
     "hint": "the lawyers for the other side"
    }
   ],
   "story": "A real pattern from the field: an assistant sent a 'final' settlement letter to the other side as a Word file. It still held a tracked-changes comment from the attorney: 'we could go to $400k if pushed.' Their reply quoted it back. From that moment the client was negotiating with their ceiling on the table. Saving a clean PDF and checking it would have kept it private.",
   "contrast": {
    "lazy": "Opens the document, sees clean text on screen and attaches the Word file as it is.",
    "excellent": "Accepts or removes all changes, deletes comments, runs the document inspector, saves a clean PDF, then opens it once more and checks before saying 'Clean version attached.'"
   },
   "outcome": "Hidden comments can reveal the client's bottom line, the attorney's doubts or earlier offers. Once the other side has seen that, you can't unsee it for them. It weakens our position at the table and can mean a worse settlement for the client.",
   "ask": "[Name], you're about to send a proposed settlement to opposing counsel, and it contains an internal comment: 'Client will go to $250K if pushed.' Walk us through the steps before it goes out. [Name], how do you prove it's clean?",
   "mystery": "The case of the $400k comment. You send opposing counsel a 'final' settlement letter. Their reply quotes a tracked-changes comment from Elias saying 'we could go to $400k if pushed.' In teams of three, three minutes: find the moment it went wrong, write the 'clean before send' checklist for next time, and decide who you tell first right now. Bring back the checklist."
  }
 },
 "8::Redaction Done Right": {
  "p1": {
   "icebreaker": "Game: 'Real or fake redaction?' I'll describe four ways to hide a number. Shout 'Real!' or 'Fake!' A black box drawn on top. Black highlighter. Adobe's Redact tool, then Apply. Changing the text colour to white. Only one is real.",
   "teaser": "Even the real one has a step people skip, and if you skip it nothing has actually been removed. Spot it in the steps.",
   "why": "A badly redacted document can leak exactly what it was meant to hide, in public, in a court filing.",
   "talk": "Redaction means permanently removing information before a document is shared or filed. A black box drawn on top, or black highlighting, only covers the words. They're still underneath, and anyone can copy them out. Real redaction uses a tool that deletes the text, like the Redact feature in Adobe Acrobat. Some redactions are required: in federal court filings, you show only the last four digits of Social Security and account numbers, only the year of a birth date, and only a child's initials. The attorney decides what else comes out.",
   "walk": [
    "First, we work on a copy and keep the original safely stored.",
    "Next, we mark each redaction with the proper tool, then apply it. That's a separate step.",
    "Then we remove hidden information: metadata, comments and old versions.",
    "After that, we test: search for a redacted word and try copying the black area. Nothing should come through.",
    "Finally, we save it as a new file marked REDACTED and have the attorney check it."
   ],
   "jargon": [
    {
     "term": "Redaction",
     "hint": "permanently removing information from a document"
    },
    {
     "term": "Federal court filing",
     "hint": "a document submitted to a US federal court"
    },
    {
     "term": "Metadata",
     "hint": "hidden information stored inside a file"
    }
   ],
   "story": "This happens more than you'd think: a firm filed a PDF where account numbers had been covered with black boxes using a drawing tool. A journalist copied the black areas into a text editor and the numbers appeared. The filing was public, so the firm had to ask the court to seal it and explain to the client. Mark, apply, then test by copying: that's the step that was skipped.",
   "ask": "[Name], have you ever seen a 'redacted' document where the text could still be read? [Name], how would you test one before it goes out?"
  },
  "p2": {
   "why": "Redaction failures are rarely about the main text. They're about the places nobody thought to check.",
   "talk": "We redact consistently, which means the same detail everywhere it appears, including headers, footers, attachments and file names. Scanned documents often have hidden text behind the image, and that has to go too. Two traps: black highlighter in Word and then 'Save as PDF', where the text survives, and sending the redacted copy in the same email as the original, or sharing a folder that holds both.",
   "walk": [
    "First, remove the detail everywhere it appears.",
    "Next, remember the hidden text in scans.",
    "Then, never trust highlighter as redaction.",
    "Finally, keep the original out of anything you send."
   ],
   "contrast": {
    "lazy": "'I've blacked out the account numbers with the drawing tool, just file it.' The header, the file name and the original in the same folder are never checked.",
    "excellent": "'Redacted with Acrobat's tool and applied. I searched for the account number, the birth date and the child's name: zero results, including headers and the scanned text. Saved as Statement_REDACTED.pdf. Ready for your check, Elias.'"
   },
   "outcome": "A failed redaction in a court filing is public the moment it's filed. That can expose a client to fraud, breach court rules and lead to sanctions or a motion to seal. It also tells the judge our side is careless, which is not where you want to be when the case is decided.",
   "ask": "[Name], where else in a document might a name or number hide besides the main text? [Name], which of those places would you check last, and why is that risky?",
   "mystery": "The case of the bank statement exhibit. You need to file a client's bank statement as an exhibit. It shows the full account number, the client's date of birth and their child's full name. In pairs, four minutes: decide exactly what each item becomes after redaction, how you'll do it, and how you'll prove it worked. Bring back your three 'after' versions and your proof test."
  }
 },
 "8::Device Security Fundamentals": {
  "p1": {
   "icebreaker": "Game: 'Grab your phone.' Everyone hold your phone up. How long until it locks itself? Shout the number. Thirty seconds? Five minutes? Never? Whoever has the shortest wins; whoever said 'never', we need to talk.",
   "teaser": "There's one setting that decides whether a lost laptop is a bad afternoon or a reportable data breach. It's on this slide.",
   "why": "An unlocked device, even for a minute, is an open door.",
   "talk": "Device security is mostly habits. Lock the screen before you step away. Keep the screen-lock timer short. And make sure devices are encrypted, so a lost laptop is only a lost piece of hardware, not a data breach. That's the setting from the teaser: encryption.",
   "walk": [
    "First, set a short auto-lock, and lock manually every time you step away.",
    "Next, make sure full-disk encryption is switched on.",
    "Then, treat personal devices with work email as work devices.",
    "After that, install security updates promptly.",
    "Finally, set up remote wipe where you can."
   ],
   "jargon": [
    {
     "term": "Full-disk encryption",
     "hint": "scrambles everything on the device so a thief can't read it"
    },
    {
     "term": "Remote wipe",
     "hint": "erasing a lost device from another computer"
    },
    {
     "term": "Auto-lock",
     "hint": "the screen locks itself after a set time"
    }
   ],
   "story": "A real pattern from the field: an attorney left his laptop open on a café table while he queued for coffee. Nothing was stolen, but the person at the next table had a clear view of a client's draft settlement for three minutes. Nobody could ever know what they read. A two-second lock and a short auto-lock would have closed it.",
   "ask": "[Name], would your devices be safe if you lost them today? [Name], what's the first setting you'd check?"
  },
  "p2": {
   "why": "Encryption is the difference between losing a laptop and losing the firm's data.",
   "talk": "Encryption scrambles everything on a device so nobody can read it without the password. With it, a laptop left in a taxi is just lost hardware. Without it, it could be a data breach. And a personal phone with work email on it carries the same responsibilities as a work laptop. It needs a lock, encryption and a way to wipe it remotely.",
   "walk": [
    "First, with encryption, a lost device is a hardware loss, not necessarily a breach.",
    "Finally, your phone with work email carries the same obligations as a work laptop."
   ],
   "contrast": {
    "lazy": "'It's my personal phone, so the firm's rules don't apply.' No lock code, no idea whether it's encrypted, no remote wipe.",
    "excellent": "'Elias's phone and mine both have a six-digit code, one-minute auto-lock, encryption on and remote wipe set up with IT. I've written down the steps to wipe it if it's lost.'"
   },
   "outcome": "A lost unencrypted device full of client email may have to be reported as a breach, to the client and sometimes to regulators. That damages trust and can expose case strategy. Encryption and remote wipe turn a crisis into a replacement order.",
   "ask": "[Name], Elias leaves his phone, with his work email on it, in a taxi. What do you check and do in the next 30 minutes? [Name], who's the first person you call?",
   "mystery": "The case of the stolen tablet. A partner's personal tablet, with firm email on it, is stolen from his car. He doesn't know if it was encrypted. In teams of three, three minutes: list who needs to know, what happens in the first hour in order, and the one question you'd ask IT first. Bring back your first-hour timeline."
  }
 },
 "8::Physical Security Basics": {
  "p1": {
   "icebreaker": "Game: 'Look around.' You have 20 seconds. Look at the desks and tables around you and spot anything a stranger could read or pick up. Point at it when you find it. Go. How many did we find?",
   "teaser": "The most common security gap in law offices isn't a hacker. It walks in through the front door carrying a box. Keep that picture in mind.",
   "why": "Someone walking up to an unlocked laptop has as much access as a hacker.",
   "talk": "All the digital security in the world doesn't help if a laptop is left open in a café or a filing cabinet is left unlocked overnight. Physical access is still access. And the person carrying a box? Often a perfectly real courier who simply wandered further than anyone noticed.",
   "walk": [
    "First, lock your laptop any time you step away in a shared space.",
    "Next, lock filing cabinets with sensitive documents overnight and when unattended.",
    "Then, report a lost badge, key or access card straight away.",
    "After that, keep visitors and vendors to a clear, limited area.",
    "Finally, check your own desk now and then for anything sensitive on show."
   ],
   "jargon": [
    {
     "term": "Physical security",
     "hint": "protecting rooms, papers and devices, not just systems"
    },
    {
     "term": "Access card / badge",
     "hint": "the card that opens office doors"
    }
   ],
   "story": "This happens in real offices: a courier came in looking for 'whoever signs for boxes', walked past an empty reception desk and ended up in the file room. He meant no harm, but he stood beside open boxes of a client's documents for several minutes. Nobody had stopped him. A simple rule, visitors wait at reception and are collected, would have kept him at the front.",
   "ask": "[Name], is anything sensitive visible on your desk right now? [Name], what would a stranger learn from your desk in ten seconds?"
  },
  "p2": {
   "why": "A lost badge is as serious as a leaked password.",
   "talk": "We tend to take passwords seriously and badges casually, but a lost badge can let someone walk straight into the office. So we report it immediately, not 'once I've looked a bit more'. And the same idea as system access applies to rooms: people only go where they need to, and visitors don't wander around on their own.",
   "walk": [
    "First, report a lost badge or key immediately, not 'eventually'.",
    "Finally, least privilege applies to rooms too. Visitors shouldn't wander freely."
   ],
   "contrast": {
    "lazy": "'It's probably in my other bag, I'll report it if it doesn't turn up by the end of the week.'",
    "excellent": "'I can't find my badge; I last had it at the coffee shop at 8 a.m. Please deactivate it now, and I'll pick up a temporary one. If it turns up, we just reissue.' Sent before 9 a.m."
   },
   "outcome": "A lost badge that isn't reported is an open door to client files for days. If documents go missing, the firm may have to tell the client, and in litigation it can raise questions about how evidence was kept. Reporting in minutes costs nothing; reporting late can cost the case file.",
   "ask": "[Name], your office badge wasn't in your bag this morning, and you last had it at a coffee shop. It's probably just misplaced. What do you do, and when? [Name], what would make you hesitate?",
   "mystery": "The case of the two-day-old key card. A colleague says his key card went missing two days ago but he 'didn't want to cause a fuss.' In pairs, two minutes: work out what the risk is now, what clues you'd ask building security to check, and who needs to hear about it. Bring back your three clues."
  }
 },
 "8::Clean Desk Policy": {
  "p1": {
   "icebreaker": "Game: 'Thumbs up, thumbs down.' Thumbs up if it's fine to leave on your desk overnight. A stapler. A printed client letter. A sticky note with a phone number. A locked laptop. An unlocked laptop. Look at the split on the sticky note.",
   "teaser": "There's one place in every office that holds more forgotten secrets than any desk. It's not a drawer. Guess before I tell you.",
   "why": "A document left on a desk or in the printer tray is a leak waiting to happen.",
   "talk": "A clean desk policy closes an easy-to-miss gap: sensitive papers left out between tasks, pages sitting in the printer and screens left unlocked. The place from the teaser is the printer tray. People print, get pulled away, and the page sits there for anyone.",
   "walk": [
    "First, put sensitive documents away when you're not using them.",
    "Next, check the printer tray after printing anything sensitive.",
    "Then, lock your screen every time you step away.",
    "After that, apply the same habits at home if you work remotely.",
    "Finally, do a quick check of your desk at the end of each day."
   ],
   "jargon": [
    {
     "term": "Clean desk policy",
     "hint": "nothing sensitive left out when you're away"
    },
    {
     "term": "Settlement offer",
     "hint": "the amount one side proposes to end the dispute"
    }
   ],
   "story": "A common pattern: an assistant left a printed settlement offer on her desk at 7 p.m. The cleaning crew was in, and so was a contractor fixing the lights for another tenant. Nobody knows if anyone read it, and that's the problem: the firm couldn't say for sure. Thirty seconds to put it in a locked drawer would have made the question disappear.",
   "ask": "[Name], what would a clean-desk check find on your desk right now? [Name], and on your desk at home?"
  },
  "p2": {
   "why": "The printer tray is the most forgotten security risk in any office.",
   "talk": "The printer tray is one of the most forgotten risks in any office. Anything sitting there is available to whoever walks past next. A clean desk policy is the daily habit that closes those small gaps: papers put away, printouts collected straight away and screens locked whenever we step away.",
   "walk": [
    "First, a printout left in the tray is available to anyone walking by.",
    "Finally, a clean desk is the daily habit that makes physical security real."
   ],
   "contrast": {
    "lazy": "'It's only one page, nobody's going to read it.' Prints to the shared printer and collects it 'later'.",
    "excellent": "Uses secure print so the page only comes out when you badge in at the printer, collects it straight away, and does a 30-second desk sweep before leaving: drawers locked, screen locked, nothing on top."
   },
   "outcome": "One page in the wrong hands can show the other side our offer, a client's finances or a strategy note. If it surfaces in a dispute, it weakens our position and our credibility. A daily clean-desk habit means there's nothing to find.",
   "ask": "[Name], you work from home two days a week, and your family walks past your desk. What does a clean desk look like there? [Name], what's the hardest part to keep up?",
   "mystery": "The case of the vanished memo. You print a confidential memo on the shared printer, get pulled into a call and forget it. An hour later, it's gone. In pairs, three minutes: list what you do now, in order, who you tell, and one change to how you print so it can't happen again. Bring back your fix."
  }
 },
 "8::Secure Disposal of Sensitive Documents": {
  "p1": {
   "icebreaker": "Game: 'Bin, recycle or shred?' Shout your answer. A coffee cup. A draft contract with the client's name. A pizza menu. Three drafts of an estate plan. An old sticky note with a phone number. Who said 'recycle' for the contract? Be honest.",
   "teaser": "There's a blue bin in many offices that feels responsible and green. For legal papers, it can be the leakiest thing in the building. Here's why.",
   "why": "The recycling bin isn't disposal; shredding is.",
   "talk": "A sensitive document in the trash can still be read by anyone who finds it. And deleting a file on a computer doesn't always remove it for good. Real disposal means shredding paper and securely deleting files. The blue recycling bin goes to an outside company, whole pages intact, and the firm has no idea who reads them on the way.",
   "walk": [
    "First, shred sensitive paper instead of binning or recycling it.",
    "Next, use secure deletion for sensitive digital files.",
    "Then, make disposal a regular habit, daily or weekly.",
    "After that, make sure a shredder or secure bin is actually within reach.",
    "Finally, apply the same care to drafts and working copies."
   ],
   "jargon": [
    {
     "term": "Secure deletion",
     "hint": "erasing a file so it can't be recovered"
    },
    {
     "term": "Secure bin / shred bin",
     "hint": "a locked bin emptied by a certified shredding service"
    },
    {
     "term": "Estate plan",
     "hint": "documents setting out what happens to someone's assets after death"
    }
   ],
   "story": "A real pattern from the field: a small firm put all its paper, draft contracts included, in an ordinary recycling bin. A bag split open at the collection point, and a passer-by picked up pages with client names and figures and posted a photo online. The firm had to contact every client named. A locked shred bin would have cost less than one of those phone calls.",
   "contrast": {
    "lazy": "Drops the three estate plan drafts in the recycling and leaves the old versions sitting in the downloads folder.",
    "excellent": "Shreds the drafts or puts them in the locked shred bin the same day, deletes the working copies from the computer properly, and keeps only the final version in the matter folder."
   },
   "outcome": "Thrown-away drafts can reveal a client's family details, assets and earlier positions. If they leak, the firm faces breach notifications and an angry client, and in a dispute the other side may learn what was negotiated away. Shredding is cheap protection for the whole file.",
   "ask": "[Name], you printed three drafts of a client's estate plan while revising it. Where does each one go when you're done? [Name], and what about the drafts on your computer?",
   "mystery": "The case of the blue bin. The office puts all paper, including draft contracts, in a blue recycling bin collected by an outside company every week. In teams of three, three minutes: decide whether that's disposal, find the clues that tell you what's at risk, and write a three-point proposal for the office manager. Bring back your proposal."
  }
 },
 "8::Litigation Holds: When Nothing Can Be Deleted": {
  "p1": {
   "icebreaker": "Game: 'Before or after?' I'll name a moment. Stand up if you think the duty to keep records has started; stay seated if not. The client gets an angry phone call. The client receives a demand letter. The lawsuit is filed. The first court hearing. Watch where people stand up.",
   "teaser": "Most of you stood up too late. The duty starts earlier than nearly everyone thinks, and getting it wrong has a name courts don't like.",
   "why": "There are times when deleting a single email, even by accident, can seriously damage a client's case.",
   "talk": "When a lawsuit is reasonably expected, not only once it's filed, everyone involved has to keep every relevant record. The written instruction to do that is a litigation hold, or legal hold. It overrides the normal clean-up rules, and it covers everything: emails, texts, chats, drafts, calendars, voicemails and paper. Losing held information, even through an automatic delete setting, is called spoliation, and courts can punish it with fines or by telling the jury to assume the lost evidence was bad for that side.",
   "walk": [
    "First, when the attorney issues a hold notice, we send it to everyone named and track their written confirmations.",
    "Next, we ask IT to pause automatic deletion for the people and systems covered.",
    "Then we stop routine shredding for anything covered, and label those files.",
    "After that, we keep a log: start date, recipients, what's preserved and reminders.",
    "Finally, the hold stays until the attorney releases it in writing."
   ],
   "jargon": [
    {
     "term": "Litigation hold / legal hold",
     "hint": "a written order to keep all records for a case"
    },
    {
     "term": "Spoliation",
     "hint": "losing or destroying evidence you were meant to keep"
    },
    {
     "term": "Demand letter",
     "hint": "a letter threatening legal action unless something is done"
    },
    {
     "term": "Reasonably expected",
     "hint": "a lawsuit looks likely, even if not filed yet"
    }
   ],
   "story": "This happens in real offices: a hold went out, everyone confirmed, and nobody asked IT to switch off the 90-day auto-delete on email. Three months of messages from a key manager quietly vanished. The other side asked for them, and the judge allowed the jury to assume those emails would have hurt our client. One ticket to IT on day one would have kept them.",
   "ask": "[Name], why do you think the duty starts before a lawsuit is actually filed? [Name], what could disappear in the gap if we waited?"
  },
  "p2": {
   "why": "Holds usually fail through everyday routines that nobody thought to stop.",
   "talk": "Long cases need reminders, every quarter or so, especially for new staff. People leaving are the classic gap: their mailbox and laptop have to be preserved, not wiped as part of offboarding. Two traps: 'tidying up' old emails in the middle of a case, and remembering email but forgetting texts and chat apps.",
   "walk": [
    "First, send reminders on a schedule.",
    "Next, preserve departing staff's accounts and devices.",
    "Then, no tidying up during a case.",
    "Finally, include texts and chats."
   ],
   "contrast": {
    "lazy": "Sends the hold notice once, files it, and lets the annual shred and the laptop wipe go ahead because 'they're scheduled'.",
    "excellent": "'Hold confirmed by all six. IT has paused auto-delete, the annual shred is postponed for Harlow files, and the departing employee's laptop is boxed and labelled, not wiped. Next reminder: 1 April.'"
   },
   "outcome": "Spoliation can lose a case that was winnable. Courts can fine the client, block evidence or tell the jury to assume the worst, and that pushes any settlement sharply against us. A hold that's tracked and reminded protects the client's best argument.",
   "ask": "[Name], what routine in an office you know could quietly break a hold? [Name], who would you need to tell to stop it?",
   "mystery": "The case of the Friday wipe. Harlow Industries receives a letter threatening a lawsuit. The same week, the office manager starts the annual shred of old files, and a departing employee's laptop is due to be wiped on Friday. In teams of three, four minutes: find every routine that could destroy evidence, decide what you stop and who you tell, and write the two-line message to Elias. Bring back your message."
  }
 },
 "8::Fixing a Broken Workflow": {
  "p1": {
   "icebreaker": "Game: 'How many places?' Hold up fingers: how many places do you check to find out where one task stands? Email, a spreadsheet, a calendar, someone's notebook, a chat? Count them. Anyone above three, wave.",
   "teaser": "Careful people still do the same job twice when a workflow is split. There's one sign that tells you it's broken, and it's a question you hear every day.",
   "why": "When a task lives across email, a spreadsheet and someone's notes, work gets duplicated, even by careful people.",
   "talk": "If nobody can tell you where something stands without checking three places, the workflow is broken. The fix is one place that tracks it, with the manual steps named on purpose. And the everyday question? 'Where is this?' Every time you hear it, the workflow is telling on itself.",
   "walk": [
    "First, find a workflow that's split across disconnected tools.",
    "Next, bring it into one tracked system.",
    "Then, name which steps stay manual, so each one is a choice.",
    "After that, test the new version on a real task.",
    "Finally, check back later that it actually stopped the duplicate work."
   ],
   "jargon": [
    {
     "term": "Workflow",
     "hint": "the steps a task goes through from start to finish"
    },
    {
     "term": "Matter intake",
     "hint": "opening a new client case in the firm's systems"
    },
    {
     "term": "Conflict check",
     "hint": "making sure the firm can act without a clash of interests"
    }
   ],
   "story": "A common pattern: new matters were logged in an intake email, a partner's spreadsheet and the billing system, separately. Two clients were opened twice in one month, and one was billed twice. The client noticed before the firm did. One intake form feeding one tracker would have shown the duplicate the moment it was typed.",
   "ask": "[Name], what workflow of yours is held together by email, a spreadsheet and memory? [Name], what's the first thing you'd move into one place?"
  },
  "p2": {
   "why": "If people keep asking 'where is this?', the workflow is broken.",
   "talk": "There are three tell-tale signs a workflow is broken. People keep asking where something is, because no single place shows it. The same information gets typed into email, a spreadsheet and a calendar. And tasks stall between people, because nobody owns the step in the middle. Spot any of those, and it's time to redesign.",
   "walk": [
    "First, status questions: people ask where something is because no single place shows it.",
    "Next, duplicate effort: the same information typed into email, a spreadsheet and a calendar.",
    "Finally, handoff gaps: tasks stall between people, and nobody owns the step in between."
   ],
   "contrast": {
    "lazy": "Adds one more spreadsheet 'to keep track', so now there are four places to check.",
    "excellent": "'All document requests now go into the matter tracker. Each one has an owner and a due date. The only manual steps are the attorney's sign-off and the client call, and both are marked in the tracker.'"
   },
   "outcome": "Split workflows cause missed requests, double billing and conflict checks nobody finished. In a law firm that can mean a missed deadline, a conflict discovered too late or a client billed twice. One tracked system keeps the work moving and the record clean.",
   "ask": "[Name], client document requests arrive by email, get logged in a spreadsheet and are tracked in someone's notes. Redesign it: what's the one system? [Name], which steps stay manual?",
   "mystery": "The case of the question that won't stop. You move the firm's conflict checks into one shared tracker. A month later, people are still emailing you to ask 'did the conflict check clear?' In pairs, three minutes: find what's still broken, list the clues you'd check, and name one change that would stop the emails. Bring back your change."
  }
 },
 "8::Social Engineering Red Flags": {
  "p1": {
   "icebreaker": "Game: 'Spot the trick.' I'll play a caller. Shout 'Red flag!' the moment you hear one. 'Hi, it's Jen from the court clerk's office. I need Elias's mobile and his schedule this week, it's urgent, there's a hearing change on the Meridian case.' How fast did you shout?",
   "teaser": "That caller used three tricks in one sentence. Most people only catch one. Let's name all three.",
   "why": "Scammers target people, not systems, and urgency is their favorite tool.",
   "talk": "Social engineering means tricking a person, rather than a computer, into handing over access or information. It usually shows up with three signs. Pressure: 'I need this right now, there's no time to check.' Borrowed authority: someone claiming to be the boss, IT or a trusted vendor. And requests that are just slightly out of the ordinary, like a new way to pay.",
   "walk": [
    "First, treat sudden urgency as a warning sign, not a reason to skip checks.",
    "Next, verify anyone claiming authority through a separate channel you already trust.",
    "Then, pay attention to requests that are slightly unusual, like a new payment method.",
    "After that, use the same checking habit for any odd request.",
    "Finally, report attempts, even ones you didn't fall for."
   ],
   "jargon": [
    {
     "term": "Social engineering",
     "hint": "tricking a person into giving access or information"
    },
    {
     "term": "Separate channel",
     "hint": "a contact route you already trust, not the one offered"
    },
    {
     "term": "Court clerk",
     "hint": "the court official who manages filings and schedules"
    }
   ],
   "story": "A real pattern from the field: a caller claiming to be from a court clerk's office knew the case name and asked for the attorney's mobile and schedule 'for a hearing change.' The assistant gave both. The 'clerk' was working for someone the attorney was in a dispute with, who then turned up where he'd be. Calling the clerk's office back on the number from the court website would have taken two minutes.",
   "ask": "[Name], have you ever caught an attempt like this in time? How? [Name], what gave it away for you, or what would?"
  },
  "p2": {
   "why": "The best security system in the world fails if someone simply hands over the keys.",
   "talk": "The best security system in the world fails if someone simply hands over the keys. That's why these scams target people, using trust and pressure instead of technology. And it's why one habit protects us so well: before acting on anything that feels off, we check it through a channel we already know, like calling a number we already have.",
   "walk": [
    "First, social engineering works on trust and pressure, not technology.",
    "Finally, verify through a channel you already know before acting on anything that feels off."
   ],
   "contrast": {
    "lazy": "'She knew the case name, so she must be real.' Hands over the number to be helpful.",
    "excellent": "'Happy to help. Let me call you back through the clerk's main line so I can get this to the right person.' Then calls the number on the court's website and tells Elias what happened."
   },
   "outcome": "One friendly call can hand over a schedule, a client file or a payment. That can mean stolen funds, a leaked strategy or a client put at risk. In a dispute, the other side learning our plans early is lost leverage we never get back.",
   "ask": "[Name], a caller says they're Elias's new banker and needs you to confirm his date of birth and the last four digits of his social security number 'to finish setting up his account today.' What are the red flags? [Name], what exactly do you say?",
   "mystery": "The case of the uniformed courier. Someone in a courier uniform arrives, says he's collecting 'the Harlow files for the other side,' and names Elias. Nothing is on the calendar. In pairs, two minutes: list the red flags, decide how you check without being rude, and write the exact words you'd say to him. Bring back your script."
  }
 },
 "8::Phishing Recognition Beyond Email": {
  "p1": {
   "icebreaker": "Game: 'Which channel?' Hands up for each one where you've had a scam attempt. Email? Most hands. Text? Phone call? A calendar invite? A chat message? Look how many hands are still up past email.",
   "teaser": "Attackers often pick the channel you trust most. There's a reason for that, and once you see it you'll start checking your texts very differently.",
   "why": "Phishing doesn't only come by email; it comes by text, phone and even calendar invites.",
   "talk": "The tricks are the same whatever the channel. And attackers often switch to a less expected channel precisely because people have learned to be careful with email. That's the reason from the teaser: we relax where we think it's safe.",
   "walk": [
    "First, be as skeptical of texts, calls and calendar invites as you are of email.",
    "Next, look for the usual signs: a generic greeting, a slightly wrong sender or an unexpected link.",
    "Then, check suspicious messages through a number or address you already know, not one in the message.",
    "After that, treat an unexpected request through an unusual channel as more suspicious, not less.",
    "Finally, report it, so others are warned."
   ],
   "jargon": [
    {
     "term": "Phishing",
     "hint": "a fake message designed to trick you into clicking or sharing"
    },
    {
     "term": "Smishing / vishing",
     "hint": "phishing by text message / by phone call"
    },
    {
     "term": "Spoofed sender",
     "hint": "a message made to look like it's from someone you know"
    }
   ],
   "story": "This happens in real offices: an attorney got a text saying his bank card was blocked, with a link to 'unlock' it. He tapped it, typed his card details and only then forwarded it to his assistant to ask if it was real. The bank cancelled the card that afternoon, but not before two charges went through. Calling the number on the back of the card would have answered it in a minute.",
   "ask": "[Name], have you seen a phishing attempt by text or phone? [Name], what made it look believable?"
  },
  "p2": {
   "why": "When in doubt, verify through a channel you already trust.",
   "talk": "Phishing isn't only email any more. It arrives by text, calendar invite, phone call and chat message. But the warning signs are the same everywhere: a generic greeting, a sender that's almost right, a link we weren't expecting and a sense of urgency. And the fix is the same too: we call a number we already have, never the one in the suspicious message.",
   "walk": [
    "First, the classic signs, like generic greetings and odd senders, still apply in every channel.",
    "Finally, call a number you already have, never one supplied in the suspicious message."
   ],
   "contrast": {
    "lazy": "Accepts the calendar invite and clicks the 'Updated Retainer Terms' link because it's from a client, sort of.",
    "excellent": "'The sender's domain is one letter off. I haven't clicked anything. I've reported it to IT and called the client on the number in our file to check whether they sent anything.'"
   },
   "outcome": "One click can give an attacker access to Elias's inbox, client files or bank details. That can mean diverted payments, leaked privileged emails and a breach report. Checking through a known channel keeps the client's money and the case strategy where they belong.",
   "ask": "[Name], you get a calendar invite titled 'Urgent: Review Updated Retainer Terms' with a document link, from an address one letter off a client's domain. What do you do? [Name], who do you tell?",
   "mystery": "The case of the helpful voicemail. A voicemail says it's the firm's bank fraud department and asks you to call back on the number given to confirm a payment. In pairs, two minutes: decide what the right callback number is and where you find it, list the clues that make the voicemail suspicious, and say who else you warn. Bring back your number source and clues."
  }
 },
 "8::Recognizing Insider Threat Warning Signs": {
  "p1": {
   "icebreaker": "Game: 'Pattern or person?' I'll describe a behaviour. Shout 'Pattern!' if it's worth noticing, 'Fine!' if it's normal. A receptionist printing the visitor list at 9 a.m. A receptionist printing 500 client contacts at 9 p.m. A paralegal opening their own matter's files. A billing clerk downloading whole case files. Notice what changed each time.",
   "teaser": "Here's the twist: in most insider cases the person isn't a villain at all. So what are they? Let's find out.",
   "why": "Watch the pattern, not the person.",
   "talk": "Not every risk comes from outside. Sometimes access gets used in ways that don't fit someone's role. Usually it's not sabotage; it's a well-meaning shortcut around a security rule. That's the answer to the teaser. Either way, it's worth noticing.",
   "walk": [
    "First, notice when access is used in ways that don't match someone's job.",
    "Next, look at it as a role-fit question, not a personal accusation.",
    "Then, remember that most cases are shortcuts, not bad intent. The process still needs fixing.",
    "After that, report it to the right person, rather than confronting the colleague or ignoring it.",
    "Finally, keep the focus on behavior and role, not suspicion of individuals."
   ],
   "jargon": [
    {
     "term": "Insider threat",
     "hint": "risk from people inside the firm, not outside attackers"
    },
    {
     "term": "Role fit",
     "hint": "whether the access matches what the job needs"
    }
   ],
   "story": "A real pattern from the field: a receptionist had been printing large client contact lists late in the evening for weeks. It turned out she was helping a friend at another business with a mail-out. No harm was meant, but client details had left the firm, and the firm had to tell those clients. If someone had raised the timing early with the office manager, it would have been a five-minute conversation, not a notification.",
   "ask": "[Name], why do you think most insider incidents are shortcuts rather than sabotage? [Name], does that change how you'd report one?"
  },
  "p2": {
   "why": "Report it to the right person; don't confront it and don't ignore it.",
   "talk": "An insider threat doesn't always mean someone is up to no good. Often it's a well-meaning colleague taking a shortcut around security, like downloading whole folders to work from home. Either way, the risk is real. This isn't about distrusting our colleagues; it's about noticing when access is used beyond what a role needs, and telling the right person rather than confronting it ourselves.",
   "walk": [
    "First, well-meaning shortcuts around security are still real risks.",
    "Finally, this isn't about distrusting colleagues. It's least privilege applied to how access is used."
   ],
   "contrast": {
    "lazy": "Either says nothing because 'he's been here for years', or confronts him at his desk in front of everyone.",
    "excellent": "Tells the office manager or IT privately: 'I noticed client documents going to a personal email over weekends. It may be for work, but it's outside policy. Can you look at the role and the process?'"
   },
   "outcome": "Client files in a personal inbox are outside the firm's protection. If that account is hacked, or the person leaves, the firm has lost control of privileged material. In a case, that can mean a breach report, waived privilege arguments and a client who stops trusting us.",
   "ask": "[Name], you notice a billing clerk has been downloading entire client case files, which their role doesn't need. What do you do? [Name], and what do you avoid doing?",
   "mystery": "The case of the weekend worker. A trusted long-time colleague emails client documents to his personal email 'so I can work over the weekend.' He's done it for years. In teams of three, three minutes: decide whether this is a problem, who you tell and how, and what better way he could work at weekends. Bring back your two-line report and his better option."
  }
 },
 "8::Responding to a Suspicious Data Request": {
  "p1": {
   "icebreaker": "Game: 'Verify or comply?' I'll read a request. Point left for 'verify', right for 'comply'. 'Please send me the meeting room number.' 'Please send the full client file, we need it in ten minutes.' 'Can you resend yesterday's agenda?' 'New bank details attached, please update.' Notice your hands slowing down.",
   "teaser": "There are three steps here, and most people do them in the wrong order. Getting the order right is the whole lesson.",
   "why": "When a request for data feels off, verify first, always.",
   "talk": "When a request for information feels even slightly off, we follow three steps, and the order is important. First, we verify who it's really from, before doing anything else. Then we escalate it through the proper internal channel. And finally, we close the gap, fixing whatever allowed that request to reach us in the first place.",
   "walk": [
    "First, verify: confirm who the sender really is before doing anything.",
    "Next, escalate: send it through the right internal channel.",
    "Finally, close the gap: fix whatever let the request reach you in the first place."
   ],
   "jargon": [
    {
     "term": "Verify",
     "hint": "confirm who is really asking, through a route you trust"
    },
    {
     "term": "Escalate",
     "hint": "pass it up to the person who has authority to decide"
    },
    {
     "term": "Exhibits",
     "hint": "documents used as evidence in a case"
    }
   ],
   "story": "A common pattern: an email from 'opposing counsel's paralegal' asked for the full client file to 'reconcile exhibits.' It looked genuine, signature and all. The assistant started gathering the files and only stopped when the attorney walked past and asked why. Opposing counsel never gets our full client file, and the real paralegal had never sent it. Verifying first would have made it a non-event.",
   "ask": "[Name], when a request looks urgent, is your first instinct to verify or to comply? [Name], what would help you pause?"
  },
  "p2": {
   "why": "Call the number you already have, not the one in the message.",
   "talk": "Suspicious requests tend to share a few features. Urgency and secrecy: 'send this in ten minutes and don't tell anyone.' Details that are nearly right: the correct name, but an email address that's one letter off, or a new phone number. And unusual asks: passwords, client lists, changes to bank details or gift cards. Any one of those is a reason to stop and verify.",
   "walk": [
    "First, urgency and secrecy: 'Send this in ten minutes and don't tell anyone.'",
    "Next, mismatched details: the right name but a slightly wrong email address, or a new phone number.",
    "Finally, unusual asks: passwords, client lists, changes to wire details or gift cards."
   ],
   "contrast": {
    "lazy": "'It says it's from Elias and he sounds stressed, so I sent the list.'",
    "excellent": "'This came from an address I don't recognise asking for the full client list. I haven't sent anything. I've texted Elias on his usual mobile to check, and forwarded the email to IT.'"
   },
   "outcome": "A client list or a file sent to the wrong person is a breach the firm must report, and it can hand a competitor or the other side a real advantage. Changed wire details can send a settlement payment to a thief. Verifying first protects the client's money and the firm's name.",
   "ask": "[Name], let's roleplay it: I'm calling from the firm's IT provider and I need the client list exported 'before the migration tonight.' Verify or comply? [Name], you're next: what do you say to me?",
   "mystery": "The case of the dinner-time email. An email from 'Elias' arrives from his personal-looking Gmail at 7 p.m.: 'Send me the full Meridian client list now. I'm at dinner, can't call.' In pairs, two minutes: find every red flag, decide your three steps in order, and write the reply you'd send, if any. Bring back your red flags and your steps."
  }
 },
 "8::The First 10 Minutes of a Security Incident": {
  "p1": {
   "icebreaker": "Game: 'Put them in order.' Four volunteers, please. You're Contain, Notify, Assess and Document. Room, shuffle them into the right order by shouting. Go. Are we sure?",
   "teaser": "Most rooms put 'Assess' first, because it feels sensible. It isn't. Let's see why.",
   "why": "In a security incident, stop the damage first, then work out what happened.",
   "talk": "When something goes wrong with security, the natural instinct is to investigate first. But the order matters. We contain it, stopping further damage. We assess what was exposed and to whom. We tell the people who need to know, straight away. And we write down what happened as it unfolds. Each step makes the next one easier.",
   "walk": [
    "First, contain: stop further exposure by disconnecting, revoking access or pausing whatever is leaking.",
    "Next, assess: work out as precisely as you can what was exposed and to whom.",
    "Then, notify: tell whoever needs to know immediately. Don't wait for the full picture.",
    "Finally, document: write down what happened and when, as it happens."
   ],
   "jargon": [
    {
     "term": "Security incident",
     "hint": "anything that may have exposed data or systems"
    },
    {
     "term": "Contain",
     "hint": "stop the damage spreading"
    },
    {
     "term": "Revoke access",
     "hint": "take away someone's ability to log in"
    }
   ],
   "story": "This happens in real offices: an assistant typed her password into a fake login page, realised a second later, and decided to 'look into it' after her meeting. In that hour the attacker logged in, set up a rule to forward her mail and emailed three clients from her account. Changing the password and calling IT before the meeting would have shut the door in two minutes.",
   "ask": "[Name], would you investigate fully first, or raise the alarm right away? [Name], what would make you want to wait, and why is that risky?"
  },
  "p2": {
   "why": "Telling people early with half the facts beats telling them late with all of them.",
   "talk": "It's natural to want the full story before speaking up, so we don't look foolish if it turns out to be nothing. But in a security incident, every minute of delay can let the damage spread. An early 'I think something's wrong, here's what I know so far' is far more useful than a complete report an hour later.",
   "walk": [
    "First, early notification, even with incomplete information, is almost always better.",
    "Finally, it's the same containment-first idea from the confidentiality leak lesson, applied to any incident."
   ],
   "contrast": {
    "lazy": "'I'll mention it once I know for sure.' Spends an hour checking, says nothing, hopes it's fine.",
    "excellent": "'IT, I think my login was phished at 9:50. I've changed my password and signed out everywhere. I don't yet know if anything was accessed. Elias, heads-up, I'll update you at 10:30.'"
   },
   "outcome": "Every minute an incident runs unchecked, more client data can leak and more damage is done. Some breaches carry legal deadlines for telling clients or regulators, and a late start can mean penalties. Early, honest notice keeps the incident small and the firm's position defensible.",
   "ask": "[Name], let's roleplay it: you discover the firm's shared client folder has been open to anyone with the link for an unknown amount of time. What do you do in the first ten minutes? [Name], what did they leave out?",
   "mystery": "The case of the login from abroad. IT tells you that someone logged into your email from another country last night. You don't know yet what was read. In pairs, three minutes: decide who you tell now, write the exact message, including what you don't know, and list the first two containment steps. Bring back your message."
  }
 },
 "8::Containing a Confidentiality Leak": {
  "p1": {
   "icebreaker": "Game: '60-second countdown.' A confidential file has just gone somewhere it shouldn't. I'm starting a timer. Shout your first action. Shout your second. Anyone shout 'find out who did it'? We'll talk about that.",
   "teaser": "The thing most people want to do first, find out who and why, is the one thing that can wait. What can't wait is on this slide.",
   "why": "When confidential information leaks, stopping the spread comes before everything else.",
   "talk": "When confidential information goes somewhere it shouldn't, the first job is stopping it from spreading any further. Only then do we tell the right people, meaning the roles that need to know, not whoever happens to be nearby. And once it's contained, we put something in place so the same leak can't happen again.",
   "walk": [
    "First, contain: stop it spreading immediately.",
    "Next, notify: tell the right roles, not just whoever's nearby.",
    "Finally, prevent: put a rule in place so the same leak can't happen again."
   ],
   "jargon": [
    {
     "term": "Leak",
     "hint": "confidential information reaching people it shouldn't"
    },
    {
     "term": "Shared link",
     "hint": "a web link that opens a file or folder"
    }
   ],
   "story": "A real pattern from the field: a colleague posted a link to a whole client folder in a public online forum by mistake while asking a technical question. It stayed up for 20 minutes while people in the office discussed whose fault it was. Switching the link off first would have taken ten seconds; the discussion could have waited.",
   "ask": "[Name], what's the very first thing you'd do in the first 60 seconds? [Name], and the second?"
  },
  "p2": {
   "why": "Whether clients or regulators need to be told is the attorney's decision, not yours.",
   "talk": "The first hour follows a simple checklist. Stop the spread: recall or delete messages where we can, switch off shared links and lock the affected files. Capture the facts: what was exposed, to whom, when and how. And tell the supervising attorney, IT and compliance promptly. Whether clients or regulators need to be told is the attorney's decision, not ours.",
   "walk": [
    "First, stop the spread: recall or delete messages where possible, switch off shared links and lock down affected files.",
    "Next, capture the facts: what was exposed, to whom, when and how.",
    "Finally, notify the supervising attorney, IT and compliance promptly."
   ],
   "contrast": {
    "lazy": "'The vendor said they deleted it, so we're fine.' Nobody else is told.",
    "excellent": "'At 2:10 I sent the Harlow draft to the wrong Mark. I've tried a recall and emailed him asking him to delete it and confirm. Elias, IT and compliance copied. Here are the facts so far. Notifying the client is your call.'"
   },
   "outcome": "A leaked settlement draft can show the other side our position before we're ready, and some leaks legally must be reported. If the right people don't hear about it fast, the firm can miss those duties and lose the client's trust. Contain, capture, notify keeps the decision with the attorney, where it belongs.",
   "ask": "[Name], you realize you emailed a settlement draft for the Harlow matter to the wrong 'Mark,' who works at another firm. Walk us through the first hour. [Name], what's the one thing you must not decide yourself?",
   "mystery": "The case of the polite vendor. You forwarded a client's financial statement to a vendor by mistake. The vendor replies saying they've deleted it. In teams of three, three minutes: decide whether that's the end of it, list what happens next and who decides, and name one rule that would stop it next time. Bring back your next steps."
  }
 },
 "8::Who to Notify and When": {
  "p1": {
   "icebreaker": "Game: 'Who do you call?' I'll shout an incident; you shout who hears first. IT, a partner or outside counsel? A phishing email nobody clicked. A laptop stolen from a car. Ransomware on the file server. A client's social security number emailed to the wrong person. Lots of different answers. Good.",
   "teaser": "Here's a question nobody in the room has been asked yet: who do you call on a Sunday? Hold on to your answer.",
   "why": "Know who you'd call before you ever need to call them.",
   "talk": "Different incidents go to different people, on different timelines, and some carry legal obligations. A small confidentiality slip isn't handled the same way as a real data breach. Working that out in the middle of a crisis wastes precious time. And the Sunday question is exactly why the list has to exist before anything happens.",
   "walk": [
    "First, know in advance which kind of incident goes to whom: IT, a partner or outside counsel.",
    "Next, treat a real data breach as something that may carry legal duties and deadlines.",
    "Then, when you're unsure who to tell, escalate to someone senior rather than deciding it doesn't matter.",
    "After that, confirm your firm's actual contacts now, not during an incident.",
    "Finally, notify promptly, even without the full picture."
   ],
   "jargon": [
    {
     "term": "Data breach",
     "hint": "personal or client data exposed to the wrong people"
    },
    {
     "term": "Outside counsel",
     "hint": "a lawyer from another firm the firm hires for advice"
    },
    {
     "term": "Ransomware",
     "hint": "software that locks your files and demands payment"
    },
    {
     "term": "Notification deadline",
     "hint": "the legal time limit for telling people about a breach"
    }
   ],
   "story": "A common pattern: ransomware hit a small firm's file server on a Saturday night. The assistant who noticed it on Sunday had no idea who to call; the IT vendor's number was saved on a server that was now locked. It took until Monday to reach anyone, and the firm's breach deadlines were already running. A printed one-page contact list at home would have saved a full day.",
   "contrast": {
    "lazy": "'I'll figure out who to call if it ever happens.' Or decides on their own that a small slip 'isn't worth bothering anyone with.'",
    "excellent": "Has a one-page list, printed and saved offline: phishing goes to IT; lost device to IT and the supervising partner; client data to the wrong person to the partner and compliance; ransomware to IT, managing partner and outside counsel. Each with a backup name and mobile number."
   },
   "outcome": "Some breaches have legal notification deadlines, and the clock starts when the firm finds out, not when it finds the right person. Late notice can bring penalties and an angry client. Knowing who to call protects the client, the firm and the case.",
   "ask": "[Name], match each incident to who hears first: a laptop stolen from a car, an email with a client's social security number sent to the wrong person, a phishing email nobody clicked and ransomware on the office file server. [Name], which one would you escalate even higher?",
   "mystery": "The case of the Sunday hack. Nobody at the firm can say who to call if the case management system is hacked on a Sunday. In teams of three, five minutes: draft the one-page contact list, showing which incidents go to whom, with a backup for each and where the list is kept. Bring back your one-pager."
  }
 },
 "8::Documenting an Incident as It Unfolds": {
  "p1": {
   "icebreaker": "Game: 'Memory test.' Without looking at anything: what time did you arrive this morning? What was the second thing you did? Who spoke to you first? Shout your answers. Now picture doing that a week later, under stress, for an insurer.",
   "teaser": "There's a reason courts and insurers trust one kind of note far more than any other. It's not the neatest one.",
   "why": "Write down what's happening while it's happening, because memory blurs fast.",
   "talk": "A record made at the time, of what happened, when, who was told and what was done, is far more accurate than one written days later. That's the answer to the teaser: the note made in the moment, however rough.",
   "walk": [
    "First, note what happened, when and what you did, in real time.",
    "Next, use short, factual, time-stamped notes. Don't wait to write a polished summary.",
    "Then, include who was told and when.",
    "After that, stick to facts, not blame.",
    "Finally, keep the record afterwards, for the review and any legal needs."
   ],
   "jargon": [
    {
     "term": "Incident log",
     "hint": "a time-stamped record of what happened during an incident"
    },
    {
     "term": "Contemporaneous note",
     "hint": "a note written at the time it happened"
    }
   ],
   "story": "A real pattern from the field: during a two-hour email outage on a filing day, the assistant handled calls, fixes and updates brilliantly, and wrote nothing down. Afterwards, nobody could agree when it started, and the firm needed that time to explain a late filing to the court. A running list of times on a notepad would have answered it in seconds.",
   "ask": "[Name], could you rebuild a timeline of a stressful day last week from memory? [Name], what would you have got wrong?"
  },
  "p2": {
   "why": "A rough note written now beats a polished one written later.",
   "talk": "The incident record isn't about blame; it's about getting the facts right while they're still fresh. That's why simple, time-stamped lines written in the moment, like '2:14, realised email went to wrong recipient', are worth far more than a neat summary written days later when memories have blurred.",
   "walk": [
    "First, the record isn't about blame. It's about getting the facts right.",
    "Finally, simple time-stamped lines are worth more than a neat summary after the details have faded."
   ],
   "contrast": {
    "lazy": "'Tuesday afternoon: IT called, reset passwords.' Written on Friday from memory.",
    "excellent": "'Tue 2:14 p.m. clicked link in email from \"billing@...\". 2:16 entered password. 2:18 realised, changed password. 2:20 called IT (Sam). 2:31 IT reset all sessions. 2:40 told Elias.'"
   },
   "outcome": "Insurers, regulators and courts all ask the same question: what happened, and when? A vague record can mean a refused insurance claim, a missed deadline argument or the firm looking careless. Time-stamped notes let us show we acted fast and correctly.",
   "ask": "[Name], using the misdirected email from earlier, write the first five time-stamped lines of the incident log. [Name], which line would an insurer care about most?",
   "mystery": "The case of the vague timeline. A week after a phishing incident, the insurer asks for a timeline. Your notes say 'Tuesday afternoon: IT called, reset passwords.' In pairs, three minutes: list everything that's missing, then rewrite it as a useful log of at least five lines. Bring back your log."
  }
 },
 "8::Post-Incident Review": {
  "p1": {
   "icebreaker": "Game: 'Finish the sentence.' I'll start; you shout the ending. 'After something goes wrong at work, we usually...' Move on? Forget? Blame someone? Have a meeting? Let's hear the honest answers.",
   "teaser": "There's one missing step after most incidents, and its absence is why the same thing happens again a month later. See if you can spot it before I name it.",
   "why": "Every incident should end with one concrete change, so it doesn't happen again.",
   "talk": "Once things are resolved, it's tempting to move on. A short review of what happened, what worked and what should change is what stops the same failure coming back in a new form. The missing step is agreeing one concrete change and writing it down.",
   "walk": [
    "First, run a real review once it's resolved.",
    "Next, focus on the process and the gap, not on blaming someone.",
    "Then, use the notes you took during the incident as the facts.",
    "After that, agree one concrete change.",
    "Finally, record the lesson somewhere real, like Day 6's playbook habit."
   ],
   "jargon": [
    {
     "term": "Post-incident review",
     "hint": "a short meeting after an incident to learn and fix"
    },
    {
     "term": "Playbook",
     "hint": "the written guide of how we handle things"
    }
   ],
   "story": "This happens in real offices: a signed contract went to the wrong client. It was contained, apologies were made and everyone moved on. A month later a different assistant did exactly the same thing, because the email system still auto-filled client names from the first two letters. A 15-minute review would have found the auto-fill and switched it off.",
   "ask": "[Name], does an organization you know actually review incidents afterwards? [Name], what stops people from doing it?"
  },
  "p2": {
   "why": "Blame teaches people to hide the next problem.",
   "talk": "After an incident, the question isn't who to blame; it's what to change. If people get blamed, they stop reporting problems early. And early reporting is exactly what keeps incidents small. So the review looks at what happened, what made it possible and what we'll do differently.",
   "walk": [
    "First, focus on the process, not the individual.",
    "Finally, treat it as the same continuous-improvement habit you use for seasonal work."
   ],
   "contrast": {
    "lazy": "'Who sent it? Right, make sure it doesn't happen again.' Meeting over, nothing changes.",
    "excellent": "'What happened: wrong recipient. What worked: recall within five minutes. Gap: auto-fill on client names. Change: auto-fill off for external addresses, and a second check on anything with \"settlement\" in the subject. Owner: me, by Friday.'"
   },
   "outcome": "If people fear blame, the next mistake gets hidden until it's too big to contain. That's how a small slip becomes a breach report or a privilege fight. A blame-free review keeps reporting fast and makes the firm safer with every incident.",
   "ask": "[Name], let's run a five-minute review of the misdirected settlement email: what happened and what worked? [Name], what gap allowed it, and what's the one change you'd make?",
   "mystery": "The case of the partner who wants a name. At the review, a partner says, 'The fix is simple: fire whoever did it.' In pairs, three minutes: find the process gap hiding behind the person, write the exact words you'd use to move the conversation, and name the one change you'd propose. Bring back your words."
  }
 },
 "8::Crisis Communication Principles": {
  "p1": {
   "icebreaker": "Game: 'Which message calms you?' I'll read two. Thumbs up for the one that calms you. A: 'Everything's fine, don't worry.' B: 'The ground floor is closed. We don't know for how long yet. Next update at 10.' Count the thumbs. Interesting, isn't it?",
   "teaser": "Message B says less and admits it doesn't know, yet it calms people more. There's a three-letter tool from Day 1 that explains why.",
   "why": "In a crisis, people need calm, factual and frequent updates, even when there isn't much to say yet.",
   "talk": "Silence or vague reassurance makes people more anxious, even if things are under control. A short, honest update that says what we know and when you'll hear more calms things down. The three-letter tool is ACT, and it's in the steps.",
   "walk": [
    "First, communicate calmly and often, instead of going quiet until you have everything.",
    "Next, share only what's confirmed, and say so.",
    "Then, use ACT from Day 1: acknowledge what's happening, clarify what's unknown and give a time for the next update.",
    "After that, don't fill the silence with confident guesses.",
    "Finally, make sure each update actually reaches everyone who needs it."
   ],
   "jargon": [
    {
     "term": "ACT",
     "hint": "Acknowledge, Clarify, Timeline: the update structure from Day 1"
    },
    {
     "term": "Holding message",
     "hint": "a short update sent before you have all the facts"
    }
   ],
   "story": "A common pattern: after a power cut, an office manager told staff 'all sorted, back to normal by lunch.' It wasn't. Clients arrived to a dark building, and the next message was ignored because the first had been wrong. An honest 'power is out, we don't know for how long, next update at 11' would have kept people's trust.",
   "ask": "[Name], when has poor communication made a crisis worse? [Name], what would one honest update have changed?"
  },
  "p2": {
   "why": "An honest, incomplete update lands better than a confident one that turns out to be wrong.",
   "talk": "In a crisis, people want updates, and it's tempting to sound more certain than we are. Don't. An honest update that says 'here's what we know, here's what we don't yet' lands far better than a confident one that turns out to be wrong. Labelling what's confirmed stops rumours spreading as fact. And the ACT structure, acknowledge, clarify, timeline, works just as well in a crisis.",
   "walk": [
    "First, labeling what's confirmed stops rumors being repeated as facts.",
    "Finally, ACT works in a crisis too."
   ],
   "contrast": {
    "lazy": "'Don't worry, email will be back soon.' Then silence for two hours.",
    "excellent": "'Email is down across the office (confirmed). IT doesn't know the cause yet. Filings due today: use the court portal directly; I'm tracking each one. Next update at 11:30 a.m., even if nothing changes.'"
   },
   "outcome": "On a filing day, a vague update can mean an attorney waits for email instead of filing another way, and a deadline is missed. Missed deadlines can mean sanctions or a lost claim. Clear, honest updates keep the work moving and the firm's word trusted.",
   "ask": "[Name], the firm's email is down across the office on a filing day, and IT doesn't know why yet. Give us the first update to the attorneys using ACT. [Name], what would you add?",
   "mystery": "The case of the hopeful promise. In the flood update, a colleague wants to say 'we'll be back to normal tomorrow' to calm people down. Nobody knows that yet. In pairs, two minutes: find what's risky about that line, rewrite it using ACT, and decide when the next update goes out. Bring back your rewritten line."
  }
 },
 "8::Maintaining Calm Under Pressure": {
  "p1": {
   "icebreaker": "Game: 'Three-second freeze.' When I clap, everyone freeze for three seconds, take one breath, then shout the first sensible thing to do. Ready? 'The printer's jammed, a client's on hold and a partner is shouting.' Clap. Freeze. Now shout.",
   "teaser": "That freeze you just did is the most powerful skill on today's list, and almost nobody practises it. You'll see why it works.",
   "why": "Your calm in a crisis is often the only calm in the room, and it spreads.",
   "talk": "So does panic. Visible panic from the assistant can make a bad situation worse. The good news is that staying calm is a skill you can practice, not a personality trait. The freeze works because it stops your first panicked reaction long enough for your thinking brain to catch up.",
   "walk": [
    "First, pause for a few seconds before you respond.",
    "Next, keep your manner calm and deliberate.",
    "Then, remember that calm isn't the same as doing nothing. It's thinking clearly and acting on purpose.",
    "After that, practice a technique, like a pause, a breath count or a mental checklist, before you need it.",
    "Finally, after a stressful moment, reflect on what helped."
   ],
   "jargon": [
    {
     "term": "Mental checklist",
     "hint": "a short list in your head you run through under stress"
    },
    {
     "term": "Exhibit binders",
     "hint": "printed folders of evidence for court"
    }
   ],
   "story": "A real pattern from the field: twenty minutes before court, the printer jammed, a client was on hold and a partner was shouting about a missing file. The assistant tried to fix all three at once and fixed none. A colleague walked in, took a breath, put the client on a callback, sent the print job to the other floor and found the file on the shared drive. Same three problems, solved in four minutes, because she paused first.",
   "ask": "[Name], what actually helps you stay calm? [Name], have you ever seen someone else's calm change a room?"
  },
  "p2": {
   "why": "A few seconds of pause is the simplest calming technique there is.",
   "talk": "Staying calm doesn't mean not caring. It means still thinking clearly while everyone around us is reacting. The simplest technique of all is a few seconds' pause before responding. That pause is what stops us acting on our first panicked instinct, and it usually shows us the obvious next step.",
   "walk": [
    "First, calm means thinking clearly while everyone else reacts.",
    "Finally, pausing before you respond stops you acting on the first panicked instinct."
   ],
   "contrast": {
    "lazy": "'Oh no, oh no, what do we do?' Runs to the printer, then the phone, then back, while Elias watches the clock.",
    "excellent": "Pause. 'Understood. I'll have the binders printed on the second floor in 20 minutes; you'll have the index in five. Anything else you need before you leave?' Then does it."
   },
   "outcome": "Panic causes mistakes: the wrong exhibit, the missed page, the forgotten call. In court, a missing binder or a rattled attorney can cost credibility with the judge at exactly the wrong moment. Your calm protects the attorney's focus, and the attorney's focus protects the case.",
   "ask": "[Name], Elias bursts in: the judge moved the hearing to this afternoon, and the exhibit binders aren't printed. Show us your first 30 seconds: what you say and what you do. [Name], what would you do differently?",
   "mystery": "The case of the snapped reply. After a stressful morning where a filing almost missed its deadline, you notice you snapped at a colleague. In pairs, two minutes: decide what you do that afternoon, what you'd say to the colleague, and one thing you'd do differently next time. Bring back your words and your one change."
  }
 },
 "8::Chain of Command During a Crisis": {
  "p1": {
   "icebreaker": "Game: 'Who's next?' I'll name a person; you shout who steps in if they can't be reached. Elias is on a flight. The managing partner is in a meeting. IT's lead is on holiday. How many of you went quiet on the last one?",
   "teaser": "In a crisis, the most dangerous moment isn't the problem itself. It's the ten seconds when nobody knows who's allowed to decide. Let's close that gap.",
   "why": "A crisis is the worst time to work out who's allowed to decide what.",
   "talk": "When something goes wrong fast, the worst moment to work out who's in charge is right then. Knowing the chain of command in advance, and who steps in if each person can't be reached, is what stops people freezing when speed matters most.",
   "walk": [
    "First, know who decides what before a crisis.",
    "Next, use the same hierarchy from Day 1, rather than improvising.",
    "Then, know the backup for each person, in case they can't be reached.",
    "After that, escalate through the chain even under pressure. Don't skip steps.",
    "Finally, check your backup contacts now and then, because roles change."
   ],
   "jargon": [
    {
     "term": "Chain of command",
     "hint": "who decides what, in order"
    },
    {
     "term": "Backup / deputy",
     "hint": "the person who decides when the main person can't"
    }
   ],
   "story": "This happens in real offices: during a server outage in a trial week, the IT vendor asked the assistant whether they could shut the whole system down for two hours. She said yes to be helpful. The attorney lost access to his trial notes the night before closing arguments. It wasn't her decision to make; one call to the managing partner, or the deputy, would have timed the shutdown for after court.",
   "ask": "[Name], who's your backup if your main escalation contact can't be reached? [Name], when did you last check that person's number?"
  },
  "p2": {
   "why": "The everyday chain of command is also the crisis chain of command.",
   "talk": "The good news is we don't need a special crisis structure. The chain of command we use every day is the same one we use in a crisis. What matters is knowing the backup for each person, so that if the executive is on a flight and the next person isn't answering, we already know who's next.",
   "walk": [
    "First, rely on the structure you already use, rather than making one up under pressure.",
    "Finally, a known backup path prevents a dangerous gap when someone's unreachable."
   ],
   "contrast": {
    "lazy": "'Elias isn't answering, so I'll just decide.' Or the opposite: waits until he lands, and the deadline passes.",
    "excellent": "'Elias is on a flight and the managing partner isn't answering, so I've called the deputy, as our plan says. I've told the bank we're confirming and not to release funds until then.'"
   },
   "outcome": "A decision made by the wrong person, or not made at all, can release a fraudulent payment, miss a court deadline or shut down systems mid-trial. Any of those can cost the client money or the case. A known chain with backups keeps decisions fast and legitimate.",
   "ask": "[Name], a client's wire transfer is flagged as possibly fraudulent at 4:45 PM. Elias is on a flight and the managing partner isn't answering. Who's next in the chain? [Name], what do you do right now?",
   "mystery": "The case of the missing deputy. The managing partner is in hospital, and her backup, the deputy, is on holiday. A client's large payment has to be approved today. In teams of three, three minutes: work out what the plan should have said, who you try next and in what order, and what you tell the client while you wait. Bring back your call order."
  }
 },
 "8::Business Continuity Basics": {
  "p1": {
   "icebreaker": "Game: 'Stand if you're the only one.' Stand up if there's something at work only you know how to do. Stay standing if it's written down anywhere. Stay standing if someone else has practised it. Who's still up?",
   "teaser": "Everyone who sat down just found their own single point of failure. There's a name for it, and a simple fix.",
   "why": "Continuity planning answers one question ahead of time: if something vital disappeared tomorrow, how would we keep working?",
   "talk": "It could be a system, a person or a resource. The plan doesn't need to be fancy; a simple list of what matters, who to call and what the backup is covers most of it. What you just found in the game is called a single point of failure: one thing everything depends on.",
   "walk": [
    "First, identify the systems, people and resources your work depends on.",
    "Next, write a basic list of them, with key contacts and backups.",
    "Then, use the same plan-ahead thinking as backup vendors and the Home Binder.",
    "After that, find your own single points of failure.",
    "Finally, review the plan every so often, because the work changes."
   ],
   "jargon": [
    {
     "term": "Business continuity",
     "hint": "keeping the work going when something breaks"
    },
    {
     "term": "Single point of failure",
     "hint": "one thing or person everything depends on"
    },
    {
     "term": "Home Binder",
     "hint": "the household reference file from the PA days"
    }
   ],
   "story": "A common pattern in small firms: the only person who knew how to run payroll went off sick for three weeks, with payroll due the next Friday. Nobody had the login, the steps or the bank contact. Staff were paid four days late, and two left that quarter. A one-page note and a second trained person would have kept it routine.",
   "ask": "[Name], what's one single point of failure in your work right now? [Name], what's the smallest step that would remove it?"
  },
  "p2": {
   "why": "A simple list covers most of the value of a continuity plan.",
   "talk": "A continuity plan answers one question: how do we keep working if a key system or person suddenly isn't available? It doesn't need to be elaborate. A simple list of critical systems, who to call and what to have printed or backed up covers most of the value. It's the same idea as having a backup vendor, applied to the whole firm.",
   "walk": [
    "First, it doesn't need to be elaborate to be useful.",
    "Finally, it's the same plan-before-you-need-it idea, applied to the whole organization."
   ],
   "contrast": {
    "lazy": "'We'll cross that bridge when we come to it.' The court dates only live in the case system.",
    "excellent": "A one-page list: critical systems and their support numbers; who decides; printed copies of this week's court dates, client contacts and trial exhibits list; where the backup laptop is. Reviewed every quarter."
   },
   "outcome": "If the case system goes down in trial week and nobody has the deadlines printed, a filing can be missed. Missed deadlines can mean sanctions or a lost claim for the client. A one-page plan keeps the firm meeting its obligations when things break.",
   "ask": "[Name], the firm's case management system goes down for a whole day during trial week. What does the continuity plan need to say? [Name], what should already be printed or backed up?",
   "mystery": "The case of the closed building. Elias asks you for 'a simple one-pager' on how the office keeps working if the building is closed for a week. In teams of three, five minutes: decide what goes on it, in which order, and the one item you'd print today. Bring back your one-page outline."
  }
 },
 "8::Crisis PR & Media Containment": {
  "p1": {
   "icebreaker": "Game: 'Guess the headline.' I'll read what an assistant said to a reporter; you shout tomorrow's headline. 'Oh, I can't really say, but yes, it's been a tough week here.' 'Well, the client did nothing wrong, I'm sure.' 'I'm not able to comment, but here's who to contact.' Only one of those makes no headline.",
   "teaser": "There's one sentence that makes no story at all. You just heard it. By the end you'll know it by heart.",
   "why": "When the media calls, alert the right people all at once; the press won't wait for a slow chain.",
   "talk": "Media situations move faster than any other crisis. The window to shape the first response is often minutes. And unless you're the designated spokesperson, your job is a polite holding line and fast escalation.",
   "walk": [
    "First, confirm who's authorized to speak publicly. That should already be decided.",
    "Next, if it isn't you, give a safe, consistent holding statement rather than no answer or an improvised one.",
    "Finally, alert communications, legal and the executive immediately, all at once."
   ],
   "jargon": [
    {
     "term": "Spokesperson",
     "hint": "the one person allowed to speak for the firm publicly"
    },
    {
     "term": "Holding statement",
     "hint": "a short, safe line used until the right person responds"
    }
   ],
   "story": "A real pattern from the field: a reporter walked into a firm's reception asking about a lawsuit against a well-known client. The receptionist, trying to be nice, said 'I think they're settling.' That line was in an article by the evening, and the other side used it to push for a better deal. 'I'm not able to comment, but here's who to contact' would have given the reporter nothing.",
   "ask": "[Name], if you're not the spokesperson, what do you say? [Name], say it again, word for word."
  },
  "p2": {
   "why": "'No comment; here's who to contact' is the right fast answer.",
   "talk": "When the media gets involved, trying to help by answering questions ourselves, even with the best intentions, can do real damage. What protects everyone is a fast, correct holding line: 'I'm not able to comment, but here's who you should contact.' Then we alert the right people straight away.",
   "walk": [
    "First, trying to handle the media yourself, even with good intentions, can do real damage.",
    "Finally, a fast, correct holding line protects everyone better than a fast attempt to help."
   ],
   "contrast": {
    "lazy": "Chats to the journalist to be polite, or says 'no comment' and hangs up and tells nobody.",
    "excellent": "'I'm not able to comment, but I can give you our communications contact.' Then, within a minute, one message to comms, legal and Elias together: 'Journalist from [outlet] called at 3:12 about the Harlow matter. I gave the holding line, nothing else. Their number is...'"
   },
   "outcome": "One off-the-cuff comment can become a headline, hurt the client's reputation and hand the other side leverage. In a live dispute it can change the settlement talks overnight. A holding line and fast escalation keep the story in the right hands.",
   "ask": "[Name], a journalist calls you directly, bypassing the firm's usual channels, asking for comment on a sensitive matter. What do you say? [Name], who do you contact the moment you hang up?",
   "mystery": "The case of the 200 shares. A colleague posts a comment on social media defending the firm after a news story. It's already had 200 shares. In pairs, three minutes: decide what you do first, who needs to know, and what you'd say to the colleague. Bring back your first three actions."
  }
 },
 "8::Attorney-Client Privilege: What EAs Need to Know": {
  "p1": {
   "icebreaker": "Game: 'Inside or outside the circle?' Stand up if the person is inside the privileged circle, sit if they're outside. Elias. The client. You, Elias's EA. The client's business partner. The client's accountant. A stranger in the lift. Look at the split on the accountant.",
   "teaser": "You stood up for yourself, and you were right. That fact changes what you're responsible for. Here's how.",
   "why": "One wrong recipient on an email can destroy attorney-client privilege.",
   "talk": "Privilege protects private conversations between a lawyer and client about legal advice. It's one of the oldest protections in law, and it can be lost through carelessness. As an EA, you're inside that circle, so the duty applies to you too.",
   "walk": [
    "First, treat any lawyer-client communication about legal advice as privileged.",
    "Next, check the recipient list before sending anything privileged.",
    "Then, don't discuss case details anywhere you could be overheard.",
    "After that, remember that the confidentiality duty extends to you.",
    "Finally, if you're unsure, ask the attorney. A disclosure can't be undone."
   ],
   "jargon": [
    {
     "term": "Attorney-client privilege",
     "hint": "protects private lawyer-client talks about legal advice"
    },
    {
     "term": "Waive / waiver",
     "hint": "losing the protection, often by sharing with an outsider"
    },
    {
     "term": "Privileged circle",
     "hint": "the people who can share advice without losing protection"
    }
   ],
   "story": "This happens in real offices: an attorney started talking through his settlement plans in a crowded lift. Someone from the other side's company happened to be in it. The client's position leaked before the meeting even started. The assistant had noticed the lift was full but didn't want to interrupt. A quiet 'shall we pick this up in your office?' would have been enough.",
   "ask": "[Name], how could privilege be lost by accident? [Name], give me one way that happens in an ordinary office day."
  },
  "p2": {
   "why": "An accidental disclosure can't be taken back.",
   "talk": "Attorney-client privilege protects private conversations between a lawyer and their client. But it can be lost, often by accident, by copying in someone who isn't part of the matter, or talking about it where others can hear. As the person managing the attorney's communications, we sit inside that privileged circle, so we protect it. And because an accidental disclosure can't be undone, when in doubt, we ask first.",
   "walk": [
    "First, privilege can be waived by including the wrong person or talking where others can hear.",
    "Next, managing a lawyer's communications puts you inside the privileged relationship.",
    "Finally, when in doubt, ask the attorney first."
   ],
   "contrast": {
    "lazy": "'The client asked me to copy in her business partner, so I did.'",
    "excellent": "'Before I forward this, Elias: the client wants her business partner copied in. He isn't part of the matter. Is it OK, or would you rather speak to her first?' Nothing is sent until he answers."
   },
   "outcome": "Once privilege is waived, the other side may be able to see the advice, and sometimes related communications too. That can reveal strategy, weaken the client's position and change how the case settles. A ten-second check before forwarding protects the client's whole case.",
   "ask": "[Name], Elias asks you to forward his advice email to the client, and the client asks you to copy in their business partner, who isn't part of the matter. What do you do? [Name], what exactly do you say to the client?",
   "mystery": "The case of the curious accountant. A client wants Elias's advice email forwarded to her accountant 'because he needs to know.' Forwarding it might waive privilege. In pairs, two minutes: list the clues that tell you to stop, decide who you ask and what you say to the client meanwhile, and name one safer option. Bring back your safer option."
  }
 },
 "8::Work-Product Confidentiality": {
  "p1": {
   "icebreaker": "Game: 'Client message or work product?' Shout which. An email from the client asking for advice. Elias's strategy memo. Research notes on a similar case. A draft argument. The client's invoice query. Lots of you said 'client message' for things that aren't.",
   "teaser": "Here's the catch: the attorney's own notes have their own protection, and the label on the document can quietly decide whether it keeps it.",
   "why": "An attorney's working documents have their own protection, and careless handling can lose it.",
   "talk": "Work product means the attorney's own preparation: strategy memos, draft arguments and case analysis. It's protected separately from client communications, and it can lose that protection if it's shared carelessly. A memo labelled only 'notes' and left in the printer is exactly the kind of careless handling that puts it at risk.",
   "walk": [
    "First, handle strategy drafts and case analysis as carefully as privileged material.",
    "Next, never share them outside the matter team without clear permission.",
    "Finally, label and store them clearly as work product."
   ],
   "jargon": [
    {
     "term": "Work product",
     "hint": "the lawyer's own case preparation, protected from the other side"
    },
    {
     "term": "Matter team",
     "hint": "the people working on that case"
    }
   ],
   "story": "A common pattern: an assistant helped a colleague in another team by sharing 'a useful memo' from a different case. It was an attorney's strategy memo. That team later shared it with a co-counsel outside the firm, and the protection was argued away in a dispute. Asking the attorney first would have taken one email.",
   "ask": "[Name], what counts as work product in a case file? [Name], name one that people often forget."
  },
  "p2": {
   "why": "Just because something isn't a client message doesn't mean it's safe to share.",
   "talk": "Work product is the material lawyers create while preparing a case, like strategy memos, notes and research. It has its own protection, separate from client messages, and careless sharing can weaken it. So even when a colleague has a perfectly good reason for asking, we treat those documents as protected until the attorney says otherwise.",
   "walk": [
    "First, work product has its own protection that careless handling can waive.",
    "Finally, when unsure, treat it as protected."
   ],
   "contrast": {
    "lazy": "'It's only internal notes, and he's a colleague. Here you go.'",
    "excellent": "'That memo is work product on the Harlow matter, so I can't share it without Elias's OK. I'll ask him, or I can point you to the firm's template library.' Then saves the memo as 'Harlow_Strategy_WORK PRODUCT' in the restricted matter folder."
   },
   "outcome": "If work product loses its protection, the other side may be able to see our strategy and weak points. That's leverage handed over for free, and it can change how the case is argued and settled. Careful labelling and sharing keeps the attorney's thinking private.",
   "ask": "[Name], a colleague on an unrelated matter asks to see a strategy memo from a case you support, saying it would help with a similar issue. What do you do? [Name], how do you say no without being unhelpful?",
   "mystery": "The case of the 'template' request. A friend at another firm asks you for 'a template' and suggests you send the Harlow strategy memo with the names removed. In pairs, two minutes: find the problems with removing names, write the exact words you'd use to say no, and offer one thing you could share. Bring back your reply."
  }
 },
 "8::Investor Disclosure Confidentiality": {
  "p1": {
   "icebreaker": "Game: 'Can they be told?' Thumbs up if an investor can be told, thumbs down if not, thumbs sideways if you'd need to check. The company's address. Last year's published results. A lawsuit that hasn't been announced. A new office opening next year. I'm looking for sideways thumbs.",
   "teaser": "The sideways thumb was the right answer more often than you'd think. There's one question that turns every sideways thumb into a clear answer.",
   "why": "Before anything goes to an investor, confirm it's been cleared to share.",
   "talk": "Investors can be told some things but not others, and some information needs approval before it's shared at all. Investor material also tends to live in the most restricted folders the firm has. So preparing an investor briefing and protecting confidentiality are really two parts of the same job. The question from the teaser: 'Has this been cleared to share?'",
   "walk": [
    "First, confirm what's been cleared before including it in anything investor-facing.",
    "Next, keep investor materials in access-controlled storage.",
    "Finally, when an investor asks for something new, escalate rather than answering yourself."
   ],
   "jargon": [
    {
     "term": "Investor disclosure",
     "hint": "information formally shared with investors"
    },
    {
     "term": "Cleared / approved",
     "hint": "signed off by the right person as OK to share"
    },
    {
     "term": "Access-controlled storage",
     "hint": "folders only named people can open"
    }
   ],
   "story": "A real pattern from the field: an assistant drafting an investor update copied a line from the executive's notes mentioning a pending lawsuit that hadn't been announced. The draft went to the investor list before anyone reviewed it. Lawyers had to step in, and the company had to announce the lawsuit early on someone else's timetable. One question, 'is this cleared?', would have kept it out.",
   "ask": "[Name], who decides what an investor can be told? [Name], and what do you do if you can't reach that person?"
  },
  "p2": {
   "why": "An investor's interest doesn't mean they're entitled to the information.",
   "talk": "An investor being interested in something doesn't mean they're entitled to it. There are rules about what can be disclosed and when, and sharing the wrong thing early can cause real legal problems. So when an investor asks for details, we check what's been approved for sharing before we reply.",
   "walk": [
    "First, don't assume investors can have anything that seems relevant.",
    "Finally, confidentiality and briefing preparation are two sides of the same job."
   ],
   "contrast": {
    "lazy": "'He's an investor, he's entitled to know.' Answers the question on the phone to be friendly.",
    "excellent": "'Thanks for asking. I'm not able to discuss that, but I'll pass your question to Elias, who can tell you what's been approved for sharing.' Then logs the question and tells Elias the same day."
   },
   "outcome": "Sharing unapproved information with one investor can break disclosure rules, create unfair advantages and trigger regulatory trouble. It can also weaken the company's position in the very lawsuit being discussed. Checking first protects the client, the company and the case.",
   "ask": "[Name], an investor emails asking for details about a matter that hasn't been publicly disclosed. What do you do before replying? [Name], what goes in your reply?",
   "mystery": "The case of 'just between us'. An investor phones you directly after a board meeting and asks 'just between us' how the lawsuit is going. In pairs, two minutes: list the clues that tell you this is a trap, write the exact words you'd say, and decide who you tell afterwards. Bring back your words."
  }
 },
 "8::HIPAA in a Legal Context": {
  "p1": {
   "icebreaker": "Game: 'Medical or not?' Stand up if the case could involve medical records. Sit if not. A personal injury claim. A workers' compensation claim. A contract dispute. A disability claim. A property sale. Did anyone stand for the contract dispute? Hold that.",
   "teaser": "Most of you sat for the contract dispute. Medical records can still turn up there, and when they do, the rules come with them. Let's see how.",
   "why": "Medical records in a case file are always the most sensitive thing in it.",
   "talk": "HIPAA is the US law protecting personal health information. It matters whenever a legal case touches medical records: personal injury, workers' compensation and disability claims. The firm doesn't have to be a healthcare provider for it to apply. And as the teaser hinted, records can arrive in any case, even one that has nothing to do with health.",
   "walk": [
    "First, recognize when a matter involves medical records.",
    "Next, apply that care even outside health-related practice areas.",
    "Then, share medical records only with people who genuinely need them.",
    "After that, treat health information as the highest sensitivity level.",
    "Finally, ask the attorney if you're unsure what extra handling is needed."
   ],
   "jargon": [
    {
     "term": "HIPAA",
     "hint": "the US law protecting personal health information"
    },
    {
     "term": "Personal injury",
     "hint": "a claim for harm caused by someone else"
    },
    {
     "term": "Workers' compensation",
     "hint": "claims for injuries at work"
    }
   ],
   "story": "A common pattern: a client emailed their medical records in a contract dispute, to explain a delay. The assistant saved them in the general matter folder that the whole team, and a contract paralegal, could open. Nobody misused them, but the client was upset to learn how many people could see their health history. A restricted sub-folder and a quick word with the attorney would have been the right home.",
   "ask": "[Name], has anyone handled a case file with medical records in it? [Name], where were they stored, and who could see them?"
  },
  "p2": {
   "why": "A firm doesn't need to be in healthcare for health privacy law to matter.",
   "talk": "HIPAA is the US law protecting health information. A law firm doesn't have to be in healthcare for it to matter: the moment a client's medical records are in a file, it can come into play. So medical information is handled discreetly, seen only by those who need it, never left visible, and always treated at the highest sensitivity level.",
   "walk": [
    "First, any medical information in a file can bring HIPAA into play.",
    "Next, handle it discreetly: only the people who need it, never left visible.",
    "Finally, it always goes in the top sensitivity level."
   ],
   "contrast": {
    "lazy": "'The client asked, so I forwarded the hospital records to the chiropractor and the employer.'",
    "excellent": "'Before I send anything, Elias, the client wants their hospital records forwarded to their chiropractor and employer. The employer one worries me. Shall I check with you what's needed and how it should go?' Records stay in the restricted folder until he answers."
   },
   "outcome": "Medical records in the wrong hands can harm the client personally and expose the firm to complaints and legal claims. In an injury case, careless sharing can also give the other side information that weakens the client's claim. Top-level care keeps the client safe and the case strong.",
   "ask": "[Name], a personal-injury client emails you their full hospital records and asks you to forward them to their chiropractor and their employer. What do you do? [Name], which of the two requests worries you more?",
   "mystery": "The case of the waiting courier. A colleague leaves a personal-injury client's hospital records open on her screen while a courier waits at her desk. In pairs, two minutes: decide what should happen right now, the words you'd use with your colleague, and the habit that stops it next time. Bring back your habit."
  }
 },
 "8::GDPR & Data Privacy Regulations": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' Shout which. 'A US firm can never be affected by Europe's privacy law.' 'People in the EU can ask what data is held about them.' 'California has its own privacy law.' 'Privacy law only cares where the firm is.' Two real, two fake.",
   "teaser": "The fake ones both make the same mistake. It's about what the law follows. Guess before the next slide line.",
   "why": "Europe's privacy law follows the data, not the firm's location.",
   "talk": "GDPR governs how the personal data of people in the EU is handled, and it can apply to a US firm that holds that data. It gives people real rights, like knowing what's held about them and sometimes having it deleted. And the US has its own growing set of state privacy laws, like California's. The mistake in the fake statements: the law follows the person's data, not the firm's address.",
   "walk": [
    "First, recognize that GDPR can apply even to a firm outside the EU.",
    "Next, organize records with people's data rights in mind.",
    "Then, check at intake whether a matter involves personal data from outside the US.",
    "After that, remember US state laws work in a similar spirit.",
    "Finally, flag possible privacy obligations to the attorney early."
   ],
   "jargon": [
    {
     "term": "GDPR",
     "hint": "the EU's law on handling people's personal data"
    },
    {
     "term": "Personal data",
     "hint": "anything that identifies a living person"
    },
    {
     "term": "Data rights",
     "hint": "people's rights to see, correct or delete their data"
    },
    {
     "term": "Intake",
     "hint": "the first step of opening a new client matter"
    }
   ],
   "story": "A real pattern from the field: a client living in France asked a US firm to delete all the personal data it held about her. The request sat in a general inbox for six weeks because nobody recognised it as a legal request. By the time the attorney saw it, the firm was close to missing the response deadline. Flagging it on day one would have given the attorney time to decide calmly.",
   "ask": "[Name], does a firm you know handle data about anyone outside the US? [Name], how would you find out?"
  },
  "p2": {
   "why": "Your job is to spot when privacy law might apply; the attorney handles the details.",
   "talk": "GDPR is Europe's data privacy law, and it gives people real rights over their personal information. The catch is that 'we're not in Europe' doesn't mean it doesn't apply; if a client or their staff are there, it might. We're not expected to know all the details. Our job is to spot the trigger, like a European client or employee records, and flag it to the attorney early.",
   "walk": [
    "First, people's data rights affect how long records are kept and how they're organized.",
    "Next, 'we're not in the EU' doesn't mean privacy law doesn't apply.",
    "Finally, recognize the trigger and flag it early."
   ],
   "contrast": {
    "lazy": "'We're in Chicago, so European rules don't affect us.' Opens the matter like any other.",
    "excellent": "'Flag for intake, Elias: the client is German, with staff records from Berlin and Chicago in this matter. GDPR may apply to the Berlin records. Do you want them stored or handled differently?'"
   },
   "outcome": "Missed privacy duties can bring regulator fines, client complaints and challenges to how evidence was collected. In a dispute, the other side can use a privacy slip to question our handling of records. Spotting the trigger at intake costs one sentence and protects the matter from the start.",
   "ask": "[Name], a new client is a German company with staff in Berlin and Chicago, and the matter involves employee records from both offices. What do you flag to Elias at intake? [Name], why at intake and not later?",
   "mystery": "The case of the Irish and Spanish customers. At intake, a new client mentions its customer database includes people in Ireland and Spain. In pairs, two minutes: list the clues that point to privacy law, write the one-line flag you'd send the attorney, and explain why it can't wait. Bring back your flag."
  }
 },
 "8::Other Relevant Compliance Frameworks": {
  "p1": {
   "icebreaker": "Game: 'Spot the special one.' I'll read four types of data. Shout 'Special!' for the ones that need extra care. Health records. A restaurant booking. A child's school records. A bank's customer data. Overseas employee files. The office Wi-Fi password. Which did the room miss?",
   "teaser": "You don't need to know a single law's name to get that game right. There's one instinct that does the work for you, and it's on this slide.",
   "why": "Some kinds of information always deserve extra care, even before you know exactly which law applies.",
   "talk": "There are other rules too: for public companies' finances, for financial privacy, for student records, and each state's professional rules for lawyers. We don't need to memorise them. What we need is an instinct: health, financial, children's and foreign data are special, and deserve extra care before we even know exactly which law applies.",
   "walk": [
    "First, learn the pattern rather than every law.",
    "Next, handle those sensitive categories with extra care by default.",
    "Then, ask the attorney whenever a matter touches an unfamiliar regulated area.",
    "After that, know the names that come up: public-company financial rules, financial privacy and education records.",
    "Finally, remember that lawyers' ethics rules on confidentiality always apply."
   ],
   "jargon": [
    {
     "term": "Compliance framework",
     "hint": "a set of rules a type of business must follow"
    },
    {
     "term": "Regulated area",
     "hint": "a type of work covered by special legal rules"
    },
    {
     "term": "Ethics rules",
     "hint": "the professional conduct rules lawyers must follow"
    }
   ],
   "story": "This happens in real offices: a new client was a small bank, and its matter folder was set up like any other, open to the whole litigation team. A month later the attorney realised it held customer financial data that needed tighter control. The folder had to be locked down and access reviewed. One question at set-up, 'anything special about a bank client?', would have done it right first time.",
   "ask": "[Name], which regulations might apply to a firm's practice areas that you know? [Name], which sensitive category would you most likely overlook?"
  },
  "p2": {
   "why": "Pattern recognition is the skill, and asking is always the right move.",
   "talk": "No training could cover every regulation, and that isn't the goal. Legal work touches a huge range of rules depending on the client. The skill is spotting the sensitive categories, handling them carefully and asking the attorney whenever something feels unfamiliar. An unnecessary question costs nothing; a missed requirement can cost a lot.",
   "walk": [
    "First, legal work touches a wide range of rules, depending on the client.",
    "Next, spot the sensitive categories and handle them carefully.",
    "Finally, an unnecessary question costs nothing; a missed requirement can cost a lot."
   ],
   "contrast": {
    "lazy": "'I don't know which rule applies, so I'll treat it like everything else and hope.'",
    "excellent": "'This matter includes card numbers from the client's online store. I've put the files in a restricted folder for now. Elias, which rules apply, and is there anything else you need me to do?'"
   },
   "outcome": "A missed regulatory requirement can mean fines for the client, a complaint against the firm and evidence that's challenged in court. That weakens the case and the client's trust. Spotting the category and asking early keeps the matter clean from start to finish.",
   "ask": "[Name], a new matter involves a public company's internal financial controls and a student's school records. Which frameworks might apply? [Name], what do you ask Elias?",
   "mystery": "The case of the card numbers. A client matter involves credit card numbers from its online store. You don't know which rule applies. In pairs, two minutes: decide what you do with the files in the meantime, who you ask, and write the one-line question. Bring back your interim plan and your question."
  }
 }
});
