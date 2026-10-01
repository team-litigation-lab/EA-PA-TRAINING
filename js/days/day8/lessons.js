/* ============================================================
   DAY 8 — Access, Data Security & Crisis Management
   Everything a trainee reads on this day:
   - DAY8: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY8_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "8::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY8 = {
  "id": 8,
  "title": "Access, Data Security & Crisis Management",
  "theme": "Access & Credentials · Data & Device Security · Threat Recognition · Incident Response · Crisis Management · Privilege, Privacy & Compliance",
  "objective": "Manage account access responsibly, keep data and devices secure, fix workflows before they cause a leak, recognize threats, respond correctly to an incident or crisis, and protect privilege and privacy.",
  "lessons": [
    {
      "h": "Credential Management",
      "section": "Access & Credentials",
      "b": [
        "Admin — full read/write and user management. Editor — read/write on content only. Viewer — read-only.",
        "Every user gets MFA and the minimum role for their actual job."
      ],
      "table": {
        "headers": [
          "Role",
          "Typical access",
          "Use when"
        ],
        "rows": [
          [
            "Admin",
            "Full read/write, settings, user management",
            "Someone directly responsible for the account/system"
          ],
          [
            "Editor",
            "Read/write on content, no settings access",
            "Someone who creates or updates work regularly"
          ],
          [
            "Viewer",
            "Read-only",
            "Someone who only needs visibility, not to make changes"
          ]
        ]
      },
      "howTo": [
        "Assign every user the minimum role their actual job requires — Admin only for those directly responsible for the account or system, Editor for regular content work, Viewer for those who just need visibility.",
        "Enable MFA on every account without exception, regardless of how routine the account seems.",
        "Review role assignments periodically, not just at initial setup — a role that made sense when someone started can become over-permissioned as their actual responsibilities change.",
        "When granting new access, default to the narrower role and expand only if a real need surfaces, rather than granting broad access preemptively.",
        "Document who has which role and why, so an access review doesn't have to start from scratch each time."
      ],
      "trainerCue": "Ask the room to map their own current access level (Admin/Editor/Viewer-equivalent) across two or three tools they actually use — most have never thought about it explicitly."
    },
    {
      "h": "Least-Privilege Access",
      "section": "Access & Credentials",
      "b": [
        "Over-permissioning is how systems get accidentally broken by people with no bad intent.",
        "Real incident: a junior staffer with unneeded admin access modified settings they shouldn't have touched — fix was correcting the role, not blame."
      ],
      "callout": {
        "type": "warning",
        "label": "Real scenario",
        "text": "A junior staffer mistakenly given admin access modified system settings they never should have been able to touch. The fix isn't blame — it's correcting the role assignment and reviewing who else may be over-permissioned."
      },
      "howTo": [
        "Grant access based on what a role actually needs to do, not what might theoretically be convenient someday.",
        "When you notice someone has more access than their current responsibilities require, flag it for correction rather than leaving it as-is because nothing has gone wrong yet.",
        "If an over-permissioned account causes an incident, treat the fix as correcting the role assignment, not assigning blame to the person who had it.",
        "Periodically review who has elevated access across your systems, since over-permissioning tends to accumulate quietly over time.",
        "Apply least-privilege thinking to temporary access too — a contractor or short-term project shouldn't retain broad access after the need has passed."
      ],
      "trainerCue": "Tell the junior-staffer-with-too-much-access story from this topic as a real incident, not a hypothetical — it lands harder that way."
    },
    {
      "h": "Multi-Factor Authentication Basics",
      "section": "Access & Credentials",
      "b": [
        "A password alone is a single point of failure — multi-factor authentication (something you know plus something you have, like a code sent to a phone) means a stolen password alone isn't enough to get in.",
        "MFA should be enabled on every account that handles anything sensitive, not just the ones that feel obviously high-risk — email access alone is often enough to reset passwords on many other systems.",
        "The most common real failure isn't a lack of MFA technology — it's an account that was set up before MFA was required and never retroactively updated."
      ],
      "howTo": [
        "Enable MFA on every account that handles anything sensitive, not just the ones that feel obviously high-risk.",
        "Treat email access as a priority for MFA specifically, since it's often enough on its own to reset passwords on many other systems.",
        "Check accounts that were set up before MFA was required — these are the most common gap, not newly created accounts.",
        "Use an authenticator app or hardware key over SMS-based codes where the option exists, since SMS carries its own, separate risks.",
        "Periodically audit which of your own accounts actually have MFA enabled rather than assuming they do."
      ],
      "trainerCue": "Ask the room how many of their own accounts actually have MFA enabled versus how many they assume are protected but have never checked."
    },
    {
      "h": "Password Manager Best Practices",
      "section": "Access & Credentials",
      "singleSlide": true,
      "b": [
        "Reusing the same password across multiple accounts means one breach anywhere becomes a breach everywhere — a password manager makes genuinely unique passwords for every account practical instead of overwhelming.",
        "The master password protecting the password manager itself deserves the most scrutiny of any password you have, precisely because it's the one that unlocks everything else.",
        "Sharing credentials through a password manager's built-in sharing feature (where the actual password stays hidden) is meaningfully safer than sending a password in plain text over email or chat."
      ],
      "howTo": [
        "Use a password manager to generate a genuinely unique password for every account, rather than reusing the same one across multiple accounts.",
        "Make the master password protecting the manager itself the strongest, most carefully guarded password you have, since it unlocks everything else.",
        "Share credentials through the password manager's built-in sharing feature, keeping the actual password hidden, rather than sending it in plain text over email or chat.",
        "Move any passwords currently stored in an unencrypted document or note into the password manager as soon as you notice them.",
        "Update a password immediately if there's any indication the account it protects may have been compromised, rather than waiting to see if something goes wrong."
      ],
      "trainerCue": "Ask who's still keeping passwords in an unencrypted document or sticky note somewhere — this is far more common than people admit, and naming it normalizes fixing it."
    },
    {
      "h": "Shared Account Risks",
      "section": "Access & Credentials",
      "b": [
        "A shared login used by multiple people means there's no way to know who actually took a given action — this becomes a real problem the moment something goes wrong and accountability matters.",
        "Shared accounts also make offboarding much harder: revoking access for one person who's leaving means changing a password everyone else who still needs it also has to learn.",
        "Individual accounts with appropriately scoped permissions are almost always safer than a shared account, even when the shared account feels more convenient in the moment."
      ],
      "howTo": [
        "Favor individual accounts with appropriately scoped permissions over a shared login, even when the shared account feels more convenient.",
        "If a shared account genuinely must exist, log who used it for what, so accountability isn't lost when something goes wrong.",
        "When someone with access to a shared account leaves, change the credential and redistribute it securely to everyone who still needs it.",
        "Evaluate whether a shared account could be replaced with individual, permissioned accounts instead — this is usually possible more often than assumed.",
        "Treat a shared account as a known risk to actively manage, not a settled, low-maintenance convenience."
      ],
      "trainerCue": "Ask if anyone's organization still uses a shared login for something important — and what would happen if they needed to figure out who did something specific with it."
    },
    {
      "h": "Offboarding Access Removal Checklist",
      "section": "Access & Credentials",
      "b": [
        "When someone leaves a role — an employee, a contractor, a vendor relationship ending — every system they had access to needs to be revoked, not just the obvious ones like email.",
        "A written offboarding checklist (every system, every account, every shared credential) prevents the common failure of remembering the main systems but missing a smaller, less obvious one.",
        "Access that's 'probably fine to leave active for now' after someone's departure is exactly the kind of stale permission that Least-Privilege Access exists to prevent."
      ],
      "howTo": [
        "Maintain a written offboarding checklist listing every system, account, and shared credential a departing person might have access to — not just the obvious ones like email.",
        "Work through the full checklist for every departure, not just the systems that come to mind first.",
        "Revoke access promptly on the actual departure date, rather than leaving it \"probably fine for now\" and circling back later.",
        "Update any shared credentials the departing person had access to, since their departure alone doesn't guarantee they can no longer use a shared login.",
        "Add any newly adopted system to the checklist as soon as it's in use, so the list stays current rather than becoming outdated."
      ],
      "trainerCue": "Ask the room to name every system a departing team member would need removed from at their own organization — most people can't list them all from memory, which is the actual point."
    },
    {
      "h": "The Golden Rules of Admin Data Security",
      "section": "Data & Device Security",
      "b": [
        "Toggle off training/data-improvement settings before any real work goes through an AI tool.",
        "Never input financial data, health info, SSNs, or passwords.",
        "Use placeholders — swap real names for '[Company X]' before sending to an AI tool.",
        "Discussion prompt: walk through exactly how you'd anonymize a real termination email before pasting it into an AI tool for drafting help — what specifically gets swapped out, and what stays?"
      ],
      "callout": {
        "type": "warning",
        "label": "Confidentiality still applies",
        "text": "Elias's firm runs on \"uncompromising excellence\" and strict confidentiality — an AI tool is still a third party. The same judgment that keeps a case detail out of casual conversation applies to what you paste into a prompt."
      },
      "howTo": [
        "Before using any AI tool for real work, toggle off training/data-improvement settings so what you input isn't retained or used to train the model.",
        "Never input financial data, health information, SSNs, or passwords into an AI tool, regardless of how routine the task seems.",
        "Swap real names and identifying details for placeholders (\"[Company X]\") before pasting anything into an AI tool.",
        "Apply the exact same judgment used to keep a case detail out of casual conversation — an AI tool is still a third party, not an extension of the firm's confidential systems.",
        "When genuinely unsure whether something is safe to input, treat it as unsafe and find another way to get the help you need."
      ],
      "trainerCue": "Close with a live 'sanitize this together' exercise: bring a real (or realistic) sensitive email and have the room call out what to redact before it goes into an AI tool — the same least-privilege and confidentiality instincts from earlier in this day, applied specifically to AI."
    },
    {
      "h": "Classifying Information by Sensitivity Level",
      "section": "Data & Device Security",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Public",
          "desc": "Fine to share freely — a published press release, public firm information"
        },
        {
          "label": "Internal",
          "desc": "Not secret, but not for outside distribution — internal memos, non-sensitive scheduling details"
        },
        {
          "label": "Confidential / Privileged",
          "desc": "Real legal and reputational exposure if it leaks — case details, client communications, financial data"
        }
      ],
      "b": [
        "Not all information needs the same level of protection — treating everything as maximally sensitive makes real diligence exhausting, while treating everything casually is how genuine leaks happen.",
        "When you're not sure which category something falls into, the safer default is to treat it as more sensitive until you can confirm otherwise, not less."
      ],
      "howTo": [
        "Before sharing anything, classify it as Public, Internal, or Confidential/Privileged — the classification determines how carefully it needs to be handled.",
        "Treat Public information as fine to share freely, but confirm it's genuinely intended for outside distribution before assuming so.",
        "Handle Internal information (memos, non-sensitive scheduling) as not secret but not for outside audiences either.",
        "Treat Confidential/Privileged information (case details, client communications, financial data) with real legal and reputational stakes in mind for every handling decision.",
        "When genuinely unsure which category something falls into, default to treating it as more sensitive until you can confirm otherwise, not less."
      ],
      "trainerCue": "Give the room five real or realistic pieces of information from this program's client scenario and have them classify each one live — the disagreements are where the real learning happens."
    },
    {
      "h": "Secure File Sharing Methods",
      "section": "Data & Device Security",
      "singleSlide": true,
      "b": [
        "Email attachments are one of the least secure ways to share sensitive files — once sent, you have no control over where that copy goes next. A secure, access-controlled sharing link is almost always the better option.",
        "Setting real expiration dates and access permissions on shared links (rather than leaving them open indefinitely) means a link that leaks or gets forwarded doesn't stay exploitable forever.",
        "Password-protecting a sensitive document is only meaningful if the password is sent through a genuinely separate channel — sending both the file and its password in the same email defeats the purpose."
      ],
      "howTo": [
        "Use a secure, access-controlled sharing link instead of an email attachment for sensitive files whenever the option exists.",
        "Set real expiration dates and access permissions on shared links, rather than leaving them open indefinitely.",
        "If password-protecting a document, send the password through a genuinely separate channel from the file itself — sending both in the same email defeats the purpose.",
        "Revoke access to a shared link once it's no longer needed, rather than leaving it active by default.",
        "Confirm the recipient actually needs the file before sharing it broadly, applying the same least-privilege thinking used for system access."
      ],
      "trainerCue": "Ask the room how they currently share sensitive files by default — email attachment is still extremely common, and naming that gap directly is the point."
    },
    {
      "h": "Email Encryption Basics",
      "section": "Data & Device Security",
      "b": [
        "Standard email isn't inherently secure in transit or storage — for genuinely sensitive content, an encrypted email option (many providers now offer one) provides real additional protection.",
        "Knowing when a message actually needs encryption versus when it doesn't is itself a skill — not everything needs the heaviest security tool available, but privileged legal content usually does.",
        "This connects directly to the Golden Rules of Admin Data Security covered earlier in this day — encryption is one more layer, not a replacement for good judgment about what gets sent at all."
      ],
      "howTo": [
        "Identify whether a message contains genuinely sensitive or privileged content before deciding it needs standard versus encrypted sending.",
        "Use an encrypted email option for privileged legal content specifically, not just for anything that feels vaguely important.",
        "Check whether your organization already has an encrypted email option available, since many do and it goes unused simply because people don't know it exists.",
        "Treat encryption as an additional layer, not a substitute for good judgment about what gets sent or to whom in the first place.",
        "When genuinely unsure whether a message needs encryption, default to using it rather than skipping it."
      ],
      "trainerCue": "Ask whether the room's own organization has an actual encrypted email option available — many do and simply don't use it because nobody's aware it exists."
    },
    {
      "h": "Metadata Risks in Shared Documents",
      "section": "Data & Device Security",
      "singleSlide": true,
      "b": [
        "A document's visible content isn't the only thing that can leak — metadata (track changes history, comments, author names, previous edits) can reveal information nobody intended to share.",
        "'Cleaning' a document before external sharing (removing track changes, comments, hidden text) is a real, often-skipped step — a document that looks clean on screen can still carry a full edit history underneath.",
        "This is especially relevant for anything shared with opposing counsel or an external party — a stray comment meant for internal eyes only has caused real, documented problems in legal practice."
      ],
      "howTo": [
        "Before sharing a document externally, check for hidden metadata — track changes history, comments, author names, previous edits — not just the visible content.",
        "Clean the document explicitly (removing track changes, comments, hidden text) rather than assuming it's clean because it looks clean on screen.",
        "Apply this check with extra care for anything going to opposing counsel or another external party, where a stray internal comment has caused real, documented problems.",
        "Use a \"clean version\" save or export step as a standard part of the external-sharing process, not an occasional extra.",
        "Verify the cleaned version genuinely has no hidden history before sending, rather than trusting that the cleaning step worked without checking."
      ],
      "trainerCue": "If possible, show a real example of hidden track-changes or comments in a document that looks clean on the surface — seeing it live is far more convincing than describing it."
    },
    {
      "h": "Redaction Done Right",
      "section": "Data & Device Security",
      "fourPart": {
        "corePrinciples": [
          "Redaction permanently removes information from a document before it's shared or filed. If the hidden text can still be copied, searched or uncovered, it wasn't redacted.",
          "Drawing a black box or highlighting text in black only covers it. The words are still underneath, and anyone can copy them out. Real redaction uses a tool that deletes the underlying text, such as Adobe Acrobat's Redact feature.",
          "Court rules require some personal details to be redacted from filings. In federal court, that means showing only the last four digits of Social Security and financial account numbers, only the year of a birth date, and only a minor's initials. The attorney decides what else is redacted, for example privileged content."
        ],
        "howTo": [
          "Work on a copy. Keep the original, unredacted version safely stored and clearly named.",
          "Mark each redaction with the proper tool, then apply it. In Acrobat, applying the redactions is a separate step from marking them.",
          "Remove hidden information too: metadata, comments, hidden layers and earlier versions (in Acrobat, 'Sanitize Document' or 'Remove Hidden Information').",
          "Test the result: search for a redacted word, and try copying the blacked-out area into a blank document. Nothing should come through.",
          "Save as a new file named to show it's redacted (for example _REDACTED) and have the attorney check it before it's filed or sent."
        ],
        "bestPractices": [
          "Redact consistently. The same detail must be removed everywhere it appears, including headers, footers, attachments and file names.",
          "Scanned documents can contain hidden OCR text behind the image. Redaction must remove that too.",
          "Pitfall: black highlighter in Word, then 'Save as PDF'. The text survives and can be copied.",
          "Pitfall: redacting the document but sending it with the original in the same email, or sharing a link to the folder with both."
        ],
        "discussionCase": "You need to file a client's bank statement as an exhibit. It shows the full account number, the client's date of birth and their child's full name. What do you redact, how do you do it and how do you prove it worked?"
      },
      "trainerCue": "Share a PDF where a 'redacted' line was only covered with a black box. Have someone copy the black area into a blank document and watch the text appear. It makes the point better than any slide."
    },
    {
      "h": "Device Security Fundamentals",
      "section": "Data & Device Security",
      "b": [
        "A device left unlocked, even briefly, is an open door — screen-lock timeouts should be short enough to matter, and locking manually before stepping away should be a reflex, not an afterthought.",
        "Full-disk encryption means a lost or stolen device is a hardware loss, not necessarily a data breach — this distinction matters enormously if a laptop is ever actually lost.",
        "Personal devices used for work (checking email on a phone, for example) carry the same confidentiality obligations as a work-issued device, even though it's easy to treat them more casually."
      ],
      "howTo": [
        "Set a short screen-lock timeout on every device, and lock it manually as a reflex before stepping away, rather than relying on the timeout alone.",
        "Confirm full-disk encryption is enabled on any device that handles sensitive information, so a lost or stolen device is a hardware loss, not a data breach.",
        "Apply the same confidentiality discipline to personal devices used for work (checking email on a phone) as to a work-issued device.",
        "Update device software promptly when security patches are available, rather than deferring updates indefinitely.",
        "Confirm remote-wipe capability is set up where available, so a genuinely lost device can be rendered inaccessible."
      ],
      "trainerCue": "Ask the room how many of their own devices would survive being lost right now without exposing anything sensitive — encryption and lock screens are the difference."
    },
    {
      "h": "Physical Security Basics",
      "section": "Data & Device Security",
      "b": [
        "Digital security discipline means little if a laptop is left unlocked in a public space or a filing cabinet with sensitive documents is left unlocked overnight — physical access is still access.",
        "A badge, key, or physical access card should be treated with the same seriousness as a password — reported immediately if lost, not just 'probably fine, I'll mention it eventually.'",
        "Visitors and vendors in a physical office space should have a clear, limited scope of where they can go unescorted — the same least-privilege principle applied to physical space."
      ],
      "howTo": [
        "Lock a laptop or workstation any time you step away, even briefly, in a space others can access.",
        "Keep filing cabinets with sensitive documents locked overnight and whenever unattended.",
        "Report a lost badge, key, or physical access card immediately, with the same urgency as a compromised password.",
        "Limit visitor and vendor access to a clear, defined area, rather than allowing unescorted movement through the full space.",
        "Periodically check your own workspace for anything sensitive that's visible or accessible to someone passing by."
      ],
      "trainerCue": "Ask the room to think about their own physical workspace right now — is there anything sensitive visible or accessible that shouldn't be, if a visitor walked by?"
    },
    {
      "h": "Clean Desk Policy",
      "section": "Data & Device Security",
      "b": [
        "Sensitive documents left visible on a desk, in a printer tray, or on an unlocked screen are a real, physical version of a data leak — a clean desk policy exists to close this specific, easy-to-overlook gap.",
        "Printers are a commonly forgotten risk: a sensitive document printed and left in the tray is accessible to anyone who walks by, even in an otherwise secure office.",
        "This connects directly to the Physical Security topic earlier — clean desk discipline is the daily habit that makes physical security actually work in practice, not just in policy."
      ],
      "howTo": [
        "Put sensitive documents away when not actively in use, rather than leaving them visible on a desk between tasks.",
        "Check the printer tray for anything left behind, especially after printing something sensitive.",
        "Lock your screen any time you step away, treating an unlocked screen as an open version of a document left on a desk.",
        "Apply the same discipline to a home workspace if you work remotely, since the risk doesn't disappear outside a physical office.",
        "Do a quick end-of-day check of your own workspace as a habit, rather than only thinking about it when reminded."
      ],
      "trainerCue": "Ask the room to picture their own desk right now — would a clean desk audit find anything that shouldn't be visible?"
    },
    {
      "h": "Secure Disposal of Sensitive Documents",
      "section": "Data & Device Security",
      "singleSlide": true,
      "b": [
        "A sensitive document thrown in a regular trash or recycling bin is still readable by anyone who finds it — shredding (or a secure disposal service) is what actually destroys the information, not just discards the paper.",
        "This applies to digital 'disposal' too — deleting a file doesn't necessarily remove it from a device permanently; genuinely sensitive digital files may need secure deletion, not just a move to trash.",
        "A recurring habit (shredding at the end of each day or week, not letting sensitive discards pile up) is what actually makes this discipline reliable rather than occasional."
      ],
      "howTo": [
        "Shred sensitive paper documents rather than placing them in regular trash or recycling, where the content remains readable.",
        "Use secure deletion for genuinely sensitive digital files, since moving a file to trash doesn't necessarily remove it from the device permanently.",
        "Build disposal into a recurring habit (end of day or end of week) rather than letting sensitive discards pile up before dealing with them.",
        "Confirm a shredder or secure disposal bin is actually accessible in your workspace — if it's inconvenient, the habit won't hold.",
        "Apply the same disposal discipline to anything printed as a draft or working copy, not just final sensitive documents."
      ],
      "trainerCue": "Ask whether the room's own workspace has an actual shredder or secure disposal bin readily accessible — if it's inconvenient, it won't get used consistently."
    },
    {
      "h": "Litigation Holds: When Nothing Can Be Deleted",
      "section": "Data & Device Security",
      "fourPart": {
        "corePrinciples": [
          "Once a lawsuit is reasonably expected, not just filed, the people involved must preserve every relevant document and record. A litigation hold (or legal hold) is the written instruction to do that.",
          "A hold overrides normal clean-up and retention schedules. Emails, texts, chat messages, drafts, calendars, voicemails and paper files all count.",
          "Destroying or losing held information, even by accident or through an automatic delete setting, is called spoliation. Courts can fine the party, tell the jury to assume the lost evidence was harmful, or worse."
        ],
        "howTo": [
          "When the attorney issues a hold notice, send it to everyone named, and track who has confirmed in writing that they received it and understand it.",
          "Ask IT to pause automatic deletion for the people and systems covered: email clean-up rules, chat retention settings and device wipes.",
          "Stop routine shredding and archive clean-ups for anything the hold covers, and label the covered files and boxes.",
          "Keep a log: the date the hold started, who received it, what was preserved and any reminders sent.",
          "Keep the hold in place until the attorney releases it in writing, then send the release notice and restore normal retention."
        ],
        "bestPractices": [
          "Send reminders on a schedule (for example every quarter), especially for long cases and new staff.",
          "Include people who are leaving the firm. Their mailbox and devices must be preserved, not wiped as part of offboarding.",
          "Pitfall: 'tidying up' old emails during a case. Deleting anything covered by a hold can harm the case even when it seems unimportant.",
          "Pitfall: remembering email but forgetting text messages and chat apps."
        ],
        "discussionCase": "Harlow Industries receives a letter threatening a lawsuit. The same week, the office manager starts the annual shred of old files, and a departing employee's laptop is due to be wiped on Friday. What do you do, and who do you tell?"
      },
      "trainerCue": "Contrast this topic with the one before it on purpose: ask the room when secure disposal is the right move and when it becomes a serious problem. The answer is 'when a hold is in place'."
    },
    {
      "h": "Fixing a Broken Workflow",
      "section": "Data & Device Security",
      "b": [
        "Disconnected tools (email + spreadsheet + notes) reliably cause duplicate work, even among careful people.",
        "Consolidate into one tracked system and name which steps remain manual."
      ],
      "howTo": [
        "Identify a workflow currently split across disconnected tools (email, a spreadsheet, personal notes) as a candidate for consolidation.",
        "Consolidate the workflow into one tracked system where the actual state of a task lives in a single, findable place.",
        "Name explicitly which steps remain manual after consolidation — not every step can be automated, but each one should be a deliberate choice, not an accident of the old scattered process.",
        "Test the new consolidated workflow on a real task before fully committing to it, to catch any step it fails to cover.",
        "Revisit the workflow after it's been in use for a while to confirm it's actually preventing the duplicate work it was meant to fix."
      ],
      "trainerCue": "Ask the room to name a workflow in their own life that's held together by email plus a spreadsheet plus memory — nearly everyone has one, and it's the perfect live example."
    },
    {
      "h": "Social Engineering Red Flags",
      "section": "Threat Recognition",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Urgency Pressure",
          "desc": "'I need this right now, don't have time to verify' — manufactured urgency is a classic manipulation tactic"
        },
        {
          "label": "Authority Impersonation",
          "desc": "Someone claiming to be an executive, IT, or a vendor to bypass normal verification"
        },
        {
          "label": "Unusual Requests",
          "desc": "A request that's slightly outside someone's normal pattern — a new payment method, an unfamiliar account"
        }
      ],
      "b": [
        "Social engineering targets people, not systems — the strongest technical security in the world doesn't help if someone is convinced to simply hand over access or information voluntarily.",
        "The same independent-verification principle from the NDA and access-request topics applies directly here — verify through a known, separate channel before acting on any request that feels even slightly off."
      ],
      "howTo": [
        "Treat manufactured urgency (\"I need this right now, no time to verify\") as a red flag in itself, not a reason to skip normal verification.",
        "Verify anyone claiming authority (an executive, IT, a vendor) through a known, separate channel before acting on their request, regardless of how convincing they sound.",
        "Notice requests that are slightly outside someone's normal pattern — a new payment method, an unfamiliar account — as worth a second look, not an automatic pass.",
        "Apply the same independent-verification principle used for NDA and access-request situations to any social engineering attempt.",
        "Report a suspected social engineering attempt even if you didn't fall for it, so others can be warned about the same tactic."
      ],
      "trainerCue": "Ask for a real example (theirs or someone they know) of a social engineering attempt they recognized in time — hearing how someone actually caught it is more useful than the abstract warning signs alone."
    },
    {
      "h": "Phishing Recognition Beyond Email",
      "section": "Threat Recognition",
      "b": [
        "Phishing isn't limited to email anymore — text messages, phone calls, and even calendar invites can carry the same manipulation tactics, and the same skepticism should apply to all of them.",
        "A generic greeting, a slightly-off sender address, or an unexpected attachment are still the most common tells, regardless of which channel the attempt arrives through.",
        "When in doubt about a suspicious message's legitimacy, verifying through a separate, known channel (calling a known number, not one provided in the suspicious message itself) is the safe default."
      ],
      "howTo": [
        "Apply the same skepticism to text messages, phone calls, and calendar invites that you would to a suspicious email — phishing isn't limited to one channel.",
        "Check for the common tells regardless of channel: a generic greeting, a slightly-off sender detail, or an unexpected attachment or link.",
        "Verify a suspicious message through a separate, known channel — calling a number you already know, not one provided in the suspicious message itself.",
        "Treat an unexpected request arriving through an unusual channel as more suspicious, not less, since attackers often shift channels specifically to bypass email-trained caution.",
        "Report a suspected phishing attempt through whatever channel it arrived, so the pattern is flagged for others too."
      ],
      "trainerCue": "Ask the room whether they've seen a phishing attempt outside of email specifically — text or phone-based attempts are increasingly common and often less immediately recognized."
    },
    {
      "h": "Recognizing Insider Threat Warning Signs",
      "section": "Threat Recognition",
      "b": [
        "Not every security risk comes from outside — access being used in ways that don't match someone's actual role, or unusual data access patterns, are worth noticing without immediately assuming malice.",
        "Most insider incidents aren't deliberate sabotage — they're often a well-meaning person taking a shortcut around a security control because it felt inconvenient, which is still a real risk worth addressing.",
        "This isn't about suspicion of colleagues by default — it's about the same least-privilege discipline from earlier in this day: access patterns that don't match a role are worth a second look regardless of intent."
      ],
      "howTo": [
        "Notice access being used in ways that don't match someone's actual role, treating it as worth a look rather than assuming malice.",
        "Apply the same least-privilege lens used elsewhere — an access pattern that doesn't match a role is a system-level observation, not a personal accusation.",
        "Recognize that most insider incidents are a well-meaning shortcut around a security control, not deliberate sabotage — the response should address the process gap either way.",
        "Flag an unusual access pattern to the appropriate person rather than confronting a colleague directly or ignoring it.",
        "Keep this observation framed around behavior and role-fit, not suspicion of any individual by default."
      ],
      "trainerCue": "Frame this carefully — the point isn't to encourage distrust of coworkers, it's to notice when access patterns genuinely don't match a role, which is a system-level observation, not a personal accusation."
    },
    {
      "h": "Responding to a Suspicious Data Request",
      "section": "Threat Recognition",
      "b": [
        "Verify the sender's identity before anything else.",
        "Escalate through the correct internal channel.",
        "Close the gap that let the request reach you in the first place."
      ],
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Verify",
          "desc": "Confirm the sender's identity before doing anything else"
        },
        {
          "label": "Escalate",
          "desc": "Route it internally through the correct channel"
        },
        {
          "label": "Close the Gap",
          "desc": "Fix whatever let the request reach you in the first place"
        }
      ],
      "trainerCue": "Roleplay a live 'suspicious request' phone call and see if the trainee's first instinct is to verify or to comply — that instinct gap is the whole lesson."
    },
    {
      "h": "The First 10 Minutes of a Security Incident",
      "section": "Incident Response",
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Contain",
          "desc": "Stop further exposure first — disconnect, revoke access, or pause whatever's actively leaking"
        },
        {
          "label": "Assess",
          "desc": "Figure out what's actually been exposed and to whom, as precisely as you can in the moment"
        },
        {
          "label": "Notify",
          "desc": "Alert whoever needs to know immediately — don't wait until you have a complete picture"
        },
        {
          "label": "Document",
          "desc": "Write down what happened and when, in real time — memory of the first moments fades fast"
        }
      ],
      "b": [
        "The instinct to fully understand a situation before saying anything is understandable but costly — early notification, even with incomplete information, is almost always better than a delayed, complete report.",
        "This is the same containment-first principle from the Confidentiality Leak topic earlier in this day, expanded into a general first-response sequence that applies to security incidents more broadly."
      ],
      "trainerCue": "Roleplay a live, cold scenario — 'you just noticed something is wrong' — and see whether the room's instinct is to investigate fully first or to escalate immediately. Correct gently toward escalating first if needed."
    },
    {
      "h": "Containing a Confidentiality Leak",
      "section": "Incident Response",
      "b": [
        "Contain the spread immediately — before anything else.",
        "Notify the right roles, not just the right names.",
        "Put a policy in place so the same leak can't repeat."
      ],
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Contain",
          "desc": "Stop the spread immediately — this comes before anything else"
        },
        {
          "label": "Notify",
          "desc": "Alert the right roles, not just the right names"
        },
        {
          "label": "Prevent",
          "desc": "Put a policy in place so the exact leak can't repeat"
        }
      ],
      "trainerCue": "This is a good stress-test moment: ask 'What's the very first thing you'd do in the first 60 seconds of a confirmed leak?' before revealing the Contain-Notify-Prevent order."
    },
    {
      "h": "Who to Notify and When",
      "section": "Incident Response",
      "singleSlide": true,
      "b": [
        "Different types of incidents have different real notification requirements — a general confidentiality slip and a genuine data breach may trigger different people, different timelines, and in some cases actual legal obligations.",
        "Knowing in advance who the right contact is for a given type of incident (IT, a specific partner, outside counsel) prevents the wasted time of figuring that out for the first time during an actual crisis.",
        "When genuinely uncertain who should be notified, escalating to someone senior is almost always the safer choice than deciding on your own that it's not serious enough to mention."
      ],
      "howTo": [
        "Know in advance which type of incident goes to which contact — IT, a specific partner, outside counsel — rather than figuring it out during the actual crisis.",
        "Treat a genuine data breach as potentially carrying real legal obligations and notification timelines, distinct from a routine confidentiality slip.",
        "Escalate to someone senior when genuinely uncertain who should be notified, rather than deciding alone that it's not serious enough to mention.",
        "Confirm your own organization's actual notification contacts before you need them, not for the first time during an incident.",
        "Notify promptly even with incomplete information — waiting for a complete picture before saying anything is a common, costly mistake."
      ],
      "trainerCue": "Ask the room whether they currently know exactly who they'd contact first for a real security concern at their own organization — many don't, which is the actual gap this topic addresses."
    },
    {
      "h": "Documenting an Incident as It Unfolds",
      "section": "Incident Response",
      "b": [
        "A contemporaneous record — what happened, when, who was notified, what actions were taken — is far more accurate and far more useful than a reconstruction written days later from memory.",
        "This documentation isn't about assigning blame — it's what allows an accurate post-incident review and, if needed, supports any actual legal or compliance requirements that follow.",
        "Even a simple, real-time note (timestamps and short factual statements) is more valuable than a polished summary written well after the fact, once details have already started to blur."
      ],
      "howTo": [
        "Write down what happened, when, and what actions were taken in real time as an incident unfolds, rather than reconstructing it afterward from memory.",
        "Use simple, factual timestamped notes rather than waiting to produce a polished summary — a rough real-time record beats a clean one written later.",
        "Record who was notified and when, as part of the same contemporaneous log.",
        "Keep the documentation focused on facts, not blame, since its purpose is an accurate record, not an assessment of fault.",
        "Preserve this documentation afterward, since it supports both the post-incident review and any actual legal or compliance requirements that follow."
      ],
      "trainerCue": "Ask the room how confident they'd be recreating an accurate timeline of something stressful that happened a week ago, purely from memory — this is exactly why real-time documentation matters."
    },
    {
      "h": "Post-Incident Review",
      "section": "Incident Response",
      "b": [
        "Once an incident is actually resolved, a real review — what happened, what worked, what should change — is what prevents the same failure from repeating in a slightly different form later.",
        "A good post-incident review focuses on the process and the gap that allowed the incident, not on blaming the individual involved — blame-focused reviews make people less likely to report the next issue early.",
        "This connects directly to the Seasonal Coordination playbook discipline from Day 6 — a post-incident review is the same continuous-improvement habit, applied to a security context."
      ],
      "howTo": [
        "Once an incident is resolved, run an actual review covering what happened, what worked, and what should change — don't let it just quietly close out.",
        "Focus the review on the process and the gap that allowed the incident, not on blaming the individual involved.",
        "Use the real-time documentation from the incident as the factual basis for the review, rather than relying on memory of how it went.",
        "Identify one concrete change to make as a result of the review, so the review produces an actual improvement, not just a discussion.",
        "Apply the same continuous-improvement habit used for the seasonal playbook from Day 6 — capture the lesson somewhere real, not just informally remembered."
      ],
      "trainerCue": "Ask the room whether their own organization actually does post-incident reviews consistently, or whether incidents tend to just quietly get resolved and forgotten without a real debrief."
    },
    {
      "h": "Crisis Communication Principles",
      "section": "Crisis Management",
      "b": [
        "During an active crisis, communication should be calm, factual, and frequent — silence or vague reassurance tends to make people more anxious, not less, even when the actual situation is under control.",
        "Sharing only what's actually confirmed, clearly labeled as such, prevents the common failure of speculation being repeated as fact and making an already-difficult situation more confused.",
        "This connects directly to the ACT framework from Day 1 — Acknowledge what's happening, Clarify what's still unknown, and give a Timeline for the next real update, even during a genuine crisis."
      ],
      "howTo": [
        "Communicate calmly and factually during an active crisis, on a frequent cadence, rather than going quiet until there's a complete picture.",
        "Share only what's actually confirmed, clearly labeled as such, to prevent speculation from being repeated as fact.",
        "Apply the ACT framework from Day 1 even in a crisis — Acknowledge what's happening, Clarify what's still unknown, and give a Timeline for the next real update.",
        "Resist filling silence with vague reassurance — factual, incomplete updates land better than confident-sounding statements that turn out to be wrong.",
        "Confirm each update actually reaches the people who need it, rather than assuming a single message was seen by everyone relevant."
      ],
      "trainerCue": "Ask the room to recall a crisis (professional or otherwise) that was made worse by poor communication versus one where clear, calm updates actually helped — the contrast is the whole lesson."
    },
    {
      "h": "Maintaining Calm Under Pressure",
      "section": "Crisis Management",
      "b": [
        "Your visible calm during a crisis is often the only calm in the room, and it's genuinely contagious — the reverse is also true, which is why visible panic from an EA can make a bad situation measurably worse.",
        "Calm isn't the same as passive — it's the ability to think clearly and act deliberately while everyone around you is reacting, which is a skill that can be practiced, not just a personality trait some people happen to have.",
        "A simple technique that actually helps: pause before responding, even for just a few seconds, rather than reacting to the first instinct a crisis produces."
      ],
      "howTo": [
        "Pause for even a few seconds before responding during a crisis, rather than reacting to the first instinct it produces.",
        "Keep your visible demeanor calm and deliberate, recognizing that it's genuinely contagious to everyone else in the room.",
        "Distinguish calm from passive — the goal is thinking clearly and acting deliberately, not simply not reacting.",
        "Practice a specific technique (the pause, a breathing count, a mental checklist) before a real crisis, so it's available as a reflex when needed.",
        "Debrief your own reaction after a stressful moment passes, noting what helped, so the skill actually improves over time."
      ],
      "trainerCue": "Ask the room for a real technique that's helped them stay calm under real pressure — collecting a few different real answers gives everyone more than one option to try."
    },
    {
      "h": "Chain of Command During a Crisis",
      "section": "Crisis Management",
      "b": [
        "A crisis is exactly the wrong time to be figuring out for the first time who has authority to make which decisions — knowing the chain of command in advance is what prevents paralysis when speed actually matters.",
        "This connects directly to the Command Hierarchy topic from Day 1 — the same structure that governs routine escalation is what should be relied on during a crisis too, not abandoned in favor of improvising.",
        "When the normal chain of command is genuinely unavailable (the usual contact can't be reached), knowing the real backup path in advance prevents a dangerous gap in decision-making authority."
      ],
      "howTo": [
        "Know the chain of command for decision-making authority before a crisis happens, not while it's unfolding.",
        "Apply the same Command Hierarchy structure from Day 1 during a crisis, rather than improvising a different process under pressure.",
        "Identify the real backup contact for each escalation point in advance, in case the primary contact is genuinely unreachable.",
        "Escalate through the known chain even under time pressure, rather than skipping steps because it feels faster.",
        "Confirm your own backup contacts are current periodically, since role changes can quietly make an old backup plan outdated."
      ],
      "trainerCue": "Ask the room whether they actually know their own real backup contact if their primary escalation point were unreachable right now — many don't, which is worth surfacing directly."
    },
    {
      "h": "Business Continuity Basics",
      "section": "Crisis Management",
      "b": [
        "A real business continuity plan answers a simple question in advance: if a key system, person, or resource became unavailable tomorrow, what's the actual plan to keep functioning?",
        "This doesn't need to be elaborate to be useful — even a basic list of critical systems, key contacts, and backup options covers most of the practical value.",
        "This connects directly to backup-vendor identification from Day 5 and the Home Binder discipline — business continuity is the same 'plan before you need it' principle, applied at an organizational scale."
      ],
      "howTo": [
        "Identify the critical systems, people, and resources your work actually depends on, before assuming continuity is fine by default.",
        "Build even a basic list of these critical dependencies along with key contacts and backup options — it doesn't need to be elaborate to be useful.",
        "Apply the same \"plan before you need it\" principle used for backup vendors (Day 5) and the Home Binder, just at an organizational scale.",
        "Identify your own single points of failure specifically — a person, system, or resource with no backup plan if it became unavailable tomorrow.",
        "Revisit the continuity plan periodically, since dependencies and backup options can change as the work itself changes."
      ],
      "trainerCue": "Ask the room to name one single point of failure in their own work right now — one person, system, or resource that, if suddenly unavailable, would cause a real problem with no backup plan."
    },
    {
      "h": "Crisis PR & Media Containment",
      "section": "Crisis Management",
      "fourPart": {
        "corePrinciples": [
          "A media or public-facing crisis moves faster than most other crisis types in this program — the window to shape the initial response is often measured in minutes, not hours.",
          "This builds directly on the reputational risk and crisis communication principles covered elsewhere in this program, applied specifically to active media attention."
        ],
        "howTo": [
          "The moment media attention is identified, confirm who's actually authorized to speak publicly — this should already be established, not decided in the moment under pressure.",
          "Give any unauthorized party (including yourself, if you're not the designated spokesperson) a safe, consistent holding statement rather than no response at all — silence and an improvised response are both worse than a prepared holding line.",
          "Escalate to the appropriate people (communications, legal, the executive) immediately and in parallel, not sequentially — media situations don't wait for a slow handoff chain."
        ],
        "bestPractices": [
          "Pitfall: trying to personally manage or respond to media attention without going through the established authorization chain, even with good intentions — this is exactly the kind of situation where good intentions don't prevent real damage.",
          "A fast, correct 'no comment, here's who to contact' response protects everyone better than a fast but unauthorized attempt to help."
        ],
        "discussionCase": "A journalist calls directly, bypassing the firm's usual channels, asking for comment on a sensitive matter. What do you actually say, and who do you contact immediately after hanging up?"
      }
    },
    {
      "h": "Attorney-Client Privilege: What EAs Need to Know",
      "section": "Privilege, Privacy & Compliance",
      "b": [
        "Attorney-client privilege protects confidential communications between a lawyer and their client made for the purpose of seeking or giving legal advice — it's one of the oldest and most strictly guarded protections in the legal system, and it can be lost through carelessness.",
        "Privilege can be waived by disclosure to the wrong person — including, in some circumstances, by including someone outside the privileged relationship on an email thread or by discussing case details somewhere they could be overheard.",
        "As an EA, you often sit inside the privileged relationship by necessity (managing a lawyer's communications and calendar), which means the same confidentiality obligation extends to you — this isn't a courtesy, it's a real legal protection you're responsible for helping preserve.",
        "When in doubt about whether something is privileged or who's allowed to see it, the safe default is to ask the attorney directly rather than assume — an accidental disclosure can't be undone once it happens."
      ],
      "howTo": [
        "Treat any communication between a lawyer and client made for legal advice purposes as privileged, and handle it with that protection in mind by default.",
        "Check the recipient list on any privileged communication before sending, since including the wrong person can waive the privilege.",
        "Avoid discussing case details anywhere they could be overheard, applying the same discretion that protects any other confidential information.",
        "Recognize that you sit inside the privileged relationship by necessity as an EA, and that the same confidentiality obligation extends to you directly.",
        "Ask the attorney directly when genuinely uncertain whether something is privileged or who's allowed to see it — an accidental disclosure can't be undone."
      ],
      "trainerCue": "Ask the room for a real or hypothetical example of how privilege could be accidentally waived through something as simple as a misdirected email or a conversation in a public space — making it concrete is what makes the risk land."
    },
    {
      "h": "Work-Product Confidentiality",
      "section": "Privilege, Privacy & Compliance",
      "fourPart": {
        "corePrinciples": [
          "Attorney work product — legal strategy memos, draft arguments, internal case analysis — carries its own protection distinct from attorney-client privilege, covering the attorney's own thought process and preparation, not just client communications.",
          "This distinction matters practically: work product can lose its protection if handled carelessly, even when no privileged client communication is involved at all."
        ],
        "howTo": [
          "Treat draft strategy documents, internal case analysis, and attorney work notes with the same handling discipline as privileged material, even when technically they're a separate legal category.",
          "Never forward or share work-product documents outside the matter team without explicit confirmation it's appropriate — the default assumption should be that it stays internal.",
          "Label and store work-product documents clearly as such in the document management system, so their sensitivity is obvious to anyone who encounters them later."
        ],
        "bestPractices": [
          "Pitfall: assuming that because something isn't a client communication, it's automatically safe to share more broadly. Work product has its own protection that careless handling can genuinely waive.",
          "When in doubt about whether a document counts as protected work product, treat it as protected — the cost of over-caution here is small compared to the cost of a genuine breach."
        ],
        "discussionCase": "A colleague on an unrelated matter asks to see a strategy memo from a case you're supporting, saying it would help them think through a similar issue. What do you actually do?"
      }
    },
    {
      "h": "Investor Disclosure Confidentiality",
      "section": "Privilege, Privacy & Compliance",
      "fourPart": {
        "corePrinciples": [
          "Information shared with investors often carries its own confidentiality obligations — some information is appropriate to disclose to investors specifically but not more broadly, and some isn't appropriate to share even with investors without proper authorization.",
          "This connects directly to the confidentiality classifications covered earlier in this program — investor-facing information often falls into the same highly-restricted category as other sensitive business data."
        ],
        "howTo": [
          "Confirm what's actually been cleared for investor disclosure before including it in any investor-facing communication — don't assume something is shareable just because it seems relevant or helpful context.",
          "Keep investor communications and materials in access-controlled storage, distinct from general internal documents, given their sensitivity.",
          "When an investor asks for information beyond what's already been prepared or cleared, escalate the request rather than answering directly — this isn't a judgment call to make solo."
        ],
        "bestPractices": [
          "Pitfall: treating an investor as automatically entitled to any information that seems relevant to their interest, without confirming disclosure boundaries first.",
          "This connects directly to the investor briefing preparation principles covered elsewhere in this program — confidentiality discipline and disclosure preparation are two sides of the same responsibility."
        ],
        "discussionCase": "An investor emails asking for details about an ongoing matter that hasn't been publicly disclosed. What do you do before responding?"
      }
    },
    {
      "h": "HIPAA in a Legal Context",
      "section": "Privilege, Privacy & Compliance",
      "b": [
        "HIPAA (the Health Insurance Portability and Accountability Act) protects individually identifiable health information, and it applies directly whenever a legal matter touches medical records — personal injury cases, workers' compensation, disability claims, and similar matters.",
        "Even outside of health-specific practice areas, HIPAA can apply the moment a case file includes any medical information — a firm doesn't need to be a healthcare provider itself for HIPAA obligations to be relevant to how that information is handled.",
        "Practical handling matters as much as the legal theory: medical records within a case file need the same discretion as any other highly sensitive document — not shared beyond who genuinely needs them, and not left visible or accessible to anyone without a real reason to see them.",
        "This connects directly to the Classifying Information by Sensitivity Level topic earlier in this day — health information involved in a legal matter should default to the highest sensitivity tier."
      ],
      "howTo": [
        "Recognize when a legal matter touches medical records — personal injury, workers' compensation, disability claims — and treat that content as HIPAA-relevant.",
        "Apply this even outside health-specific practice areas — HIPAA can be relevant the moment a case file includes any medical information at all.",
        "Handle medical records within a case file with the same discretion as any other highly sensitive document — shared only with those who genuinely need it.",
        "Default health information involved in a legal matter to the highest sensitivity tier, connecting directly to the classification framework covered earlier in this day.",
        "Ask the attorney if you're unsure whether specific medical content in a file triggers additional handling requirements."
      ],
      "trainerCue": "Ask whether anyone in the room has handled a case file that included medical records — walk through, concretely, what extra care that actually required in practice."
    },
    {
      "h": "GDPR & Data Privacy Regulations",
      "section": "Privilege, Privacy & Compliance",
      "b": [
        "The GDPR (General Data Protection Regulation) governs how personal data of individuals in the EU is collected, stored, and processed — and it can apply to a firm even if the firm itself isn't based in the EU, if it handles data belonging to EU individuals.",
        "GDPR gives individuals real rights over their own data, including the right to know what's held about them and, in many cases, the right to have it deleted — this has practical implications for how long records are retained and how they're organized.",
        "The U.S. has its own growing patchwork of state-level privacy laws (California's CCPA is the most well-known) that function similarly in spirit, even though the specific requirements differ — 'we're not in the EU' doesn't mean data privacy law doesn't apply.",
        "As an EA, the practical takeaway isn't memorizing every regulation's specifics — it's recognizing when a matter involves personal data that might trigger these obligations, and flagging that early rather than assuming it's someone else's concern."
      ],
      "howTo": [
        "Recognize that GDPR can apply to a firm even if it isn't based in the EU, if it handles data belonging to EU individuals.",
        "Account for individual data rights (knowing what's held, potential deletion requests) when organizing and retaining records that might be subject to GDPR.",
        "Check whether a matter involves personal data from outside the U.S. as part of routine intake, not as an afterthought.",
        "Recognize that U.S. state-level privacy laws (like California's CCPA) function similarly even when GDPR itself doesn't apply.",
        "Flag any matter that might trigger these obligations early to the attorney, rather than assuming data privacy law is someone else's concern."
      ],
      "trainerCue": "Ask the room whether their firm handles any client or case data belonging to individuals outside the U.S. — if so, GDPR may already be more relevant to their daily work than they realize."
    },
    {
      "h": "Other Relevant Compliance Frameworks",
      "section": "Privilege, Privacy & Compliance",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Financial & Corporate",
          "desc": "Sarbanes-Oxley (SOX) for public-company financial records; industry-specific rules for regulated clients"
        },
        {
          "label": "Sector-Specific Privacy",
          "desc": "GLBA for financial data, FERPA for education records — relevant when a matter touches those industries"
        },
        {
          "label": "State Bar & Ethics Rules",
          "desc": "Each state's own rules of professional conduct govern confidentiality obligations beyond privilege alone"
        }
      ],
      "b": [
        "Legal and administrative work touches an unusually wide range of regulatory frameworks depending on the client and matter — no single training can cover every one exhaustively, and that's not actually the goal.",
        "The real, transferable skill is pattern recognition: knowing that certain categories of information (health, financial, data belonging to minors, data belonging to individuals in another country) tend to carry extra regulatory weight, and treating them with extra care by default rather than needing to identify the exact statute first.",
        "When a matter involves an unfamiliar regulatory area, asking the attorney directly whether there are specific compliance obligations to be aware of is always the right move — better to ask a question that turns out to be unnecessary than to miss one that mattered."
      ],
      "howTo": [
        "Recognize the pattern rather than memorizing every framework — certain categories of information (health, financial, data belonging to minors, data from other countries) tend to carry extra regulatory weight.",
        "Treat those categories with extra care by default, without needing to identify the exact applicable statute first.",
        "Ask the attorney directly whenever a matter touches an unfamiliar regulatory area, rather than guessing at the requirement.",
        "Recognize Sarbanes-Oxley relevance for public-company financial records, GLBA for financial data, and FERPA for education records where a matter touches those industries.",
        "Remember that state bar and ethics rules impose confidentiality obligations beyond attorney-client privilege alone, and apply regardless of which other framework is in play."
      ],
      "trainerCue": "Close this cluster of topics by asking the room to name any other regulation relevant to their own firm's specific practice areas that wasn't covered here — this list is deliberately not exhaustive, and naming the gaps is part of the lesson."
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 0,
      "q": "Someone only needs to check on project status without making changes. Which role fits?",
      "opts": [
        "Viewer",
        "No access at all",
        "Admin",
        "Editor"
      ],
      "a": 0,
      "r": "Viewer gives visibility without the ability to alter anything — least privilege for a status-check need."
    },
    {
      "afterIndex": 23,
      "q": "Confidential documents were sent to the wrong recipient. What comes first?",
      "opts": [
        "Blaming whoever sent it",
        "Waiting to see if anyone notices",
        "Drafting a new policy for next quarter",
        "Containing the leak immediately"
      ],
      "a": 3,
      "r": "Containment always comes before policy work — stop the damage, then fix the process."
    }
  ],
  "quiz": [
    {
      "q": "A junior staff member was mistakenly given admin access and changed system settings. This is a failure of:",
      "opts": [
        "Staff training on how to use the system",
        "The software vendor's change controls",
        "Least-privilege / role-based access assignment",
        "Password strength and rotation policy"
      ],
      "a": 2,
      "r": "Roles should match what someone actually needs — nothing more."
    },
    {
      "q": "An unknown sender urgently requests sensitive client data by email. Your first step?",
      "opts": [
        "Reply asking them to explain why they need it before you decide",
        "Verify the sender's identity before responding at all",
        "Delete the email without telling anyone",
        "Send a password-protected copy, since it's marked urgent"
      ],
      "a": 1,
      "r": "Verification always comes before any action on a sensitive request."
    },
    {
      "q": "Confidential documents were accidentally sent to the wrong recipient. First priority?",
      "opts": [
        "Contain the leak immediately",
        "Wait to see if anyone notices",
        "Draft a policy update so this can't happen again",
        "Blame whoever sent it"
      ],
      "a": 0,
      "r": "Containment first, process fix second — in that order."
    },
    {
      "q": "A credential log should always include:",
      "opts": [
        "Username, password and security questions",
        "Username, department and date the account was opened",
        "Nothing — logs aren't necessary",
        "Assigned role, MFA status, and last-updated date"
      ],
      "a": 3,
      "r": "These three fields are what make a credential log actually useful for an audit or incident review."
    },
    {
      "q": "The root problem with using email, a spreadsheet, and notes separately for one workflow is:",
      "opts": [
        "Duplicate work and missed updates from having no single source of truth",
        "It costs more, because each tool needs its own paid licence for every user",
        "It looks disorganized to clients who see the different formats being used",
        "Each tool stores data in a different format"
      ],
      "a": 0,
      "r": "Fragmented tracking is exactly where updates get lost and effort gets duplicated."
    },
    {
      "q": "What is the core principle behind least-privilege access?",
      "opts": [
        "Everyone gets full access at first, then it's reduced if someone misuses it",
        "Users should only have the minimum access needed to perform their specific role",
        "Access levels should never change once assigned",
        "Access is based on seniority, so senior staff automatically see more systems"
      ],
      "a": 1,
      "r": "Least-privilege access limits exposure by granting only what's actually needed for a given role, nothing more."
    },
    {
      "q": "Why is credential management (passwords, access keys) treated as a distinct discipline rather than an afterthought?",
      "opts": [
        "Credentials have no real security implications",
        "Because IT departments are legally required to own it, so assistants must stay out of it",
        "Weak or shared credential practices are one of the most common causes of security breaches",
        "Because long, complex passwords are only needed on finance systems, not email or files"
      ],
      "a": 2,
      "r": "Poor credential hygiene is a leading cause of real breaches — it deserves deliberate, not incidental, attention."
    },
    {
      "q": "When responding to a suspicious data request (e.g., an unusual request for sensitive files), what should an EA do first?",
      "opts": [
        "Send a partial version with the most sensitive parts removed, so the requester isn't held up",
        "Reply to the same email asking the requester to confirm who they are and why they need it",
        "Ask a senior colleague whether they recognize the requester's name before doing anything else",
        "Verify the requester's identity and legitimacy through an independent channel before sharing anything"
      ],
      "a": 3,
      "r": "Independent verification before disclosure is the core defense against social-engineering and impersonation attempts."
    },
    {
      "q": "What is the first priority when containing a confidentiality leak that's already occurred?",
      "opts": [
        "Stopping further spread of the information and assessing the scope of exposure",
        "Waiting to see if anyone notices before acting",
        "Writing a full account of how it happened before anything else is touched",
        "Finding out who sent it, so they can explain what happened"
      ],
      "a": 0,
      "r": "Containment and scope assessment come first — blame and process review can follow once the immediate exposure is controlled."
    },
    {
      "q": "Why should access credentials be revoked promptly when someone's role changes or ends?",
      "opts": [
        "Credentials never need to be revoked once granted",
        "Lingering unnecessary access is a common and preventable security gap",
        "It frees up paid software licences so they can be given to new staff",
        "Only a full departure needs it; a role change within the firm can keep the old access"
      ],
      "a": 1,
      "r": "Stale access from role changes is a classic, avoidable vulnerability — prompt revocation closes that gap."
    },
    {
      "q": "What does 'fixing a broken workflow' typically require beyond patching the immediate symptom?",
      "opts": [
        "Nothing — patching the symptom is always sufficient",
        "Assigning a more experienced person to run the same process, so mistakes are less likely",
        "Moving the whole process into new software, so the old problems can't happen again",
        "Identifying and addressing the underlying process gap that allowed the breakdown to happen"
      ],
      "a": 3,
      "r": "A durable fix addresses the structural gap, not just the immediate visible failure."
    },
    {
      "q": "Why is 'need to know' a useful test for whether someone should have access to specific confidential information?",
      "opts": [
        "It lets anyone who asks with a good reason see the information, which avoids delays",
        "It mainly applies to government and classified work, where it's written into the law",
        "It ties access to actual job function, reducing unnecessary exposure of sensitive information",
        "It lets the executive decide personally who sees each document, case by case"
      ],
      "a": 2,
      "r": "Tying access to genuine need — not convenience or seniority alone — is the practical core of least-privilege thinking."
    },
    {
      "q": "If an EA discovers they still have access to a system from a project that ended months ago, what should they do?",
      "opts": [
        "Use it occasionally to stay familiar with the system",
        "Ignore it since no one else has noticed",
        "Keep the access in case it's useful again someday",
        "Report it and have the unnecessary access revoked"
      ],
      "a": 3,
      "r": "Retaining unnecessary access — even innocently — is exactly the kind of gap least-privilege principles exist to close."
    },
    {
      "q": "What's a reasonable way to verify a phone caller claiming to be a senior executive requesting sensitive information urgently?",
      "opts": [
        "Call back through a known, verified number rather than trusting the inbound call alone",
        "Ask a few personal questions only the real executive would know the answers to",
        "Ask for their employee ID number and check it against the staff list",
        "Ask the caller to confirm by email from their work address before you send anything"
      ],
      "a": 0,
      "r": "Verifying independently through a known channel — not the inbound contact itself — defends against impersonation."
    },
    {
      "q": "Why is documenting a confidentiality incident important even after it's been contained?",
      "opts": [
        "Because the legal team needs a record in case the client decides to sue the firm",
        "It helps identify the root cause and prevents a similar incident from recurring",
        "Documentation serves no ongoing purpose after containment",
        "Because the person responsible needs a written warning on their file"
      ],
      "a": 1,
      "r": "A documented incident becomes the basis for root-cause analysis and prevention, not just a closed matter."
    },
    {
      "q": "What is a practical downside of having too many people with administrative-level access to a shared system?",
      "opts": [
        "The system slows down when many admins are signed in and changing settings at once",
        "Admin access has no relationship to security risk",
        "It expands the attack surface and makes it harder to trace who made a specific change",
        "Licences for admin accounts cost more, so the firm pays extra each month"
      ],
      "a": 2,
      "r": "More admin accounts means more potential entry points and less clarity about accountability for changes."
    },
    {
      "q": "Why might an EA be specifically targeted in a phishing or social-engineering attempt?",
      "opts": [
        "EAs often have broad access and are trusted intermediaries, making them valuable targets for gaining entry",
        "Attackers target whoever has the least security training, which is usually junior staff",
        "EAs send so many emails that attackers can hide their messages among them",
        "Their email addresses are published on the firm's website, so they're simply the easiest people to find"
      ],
      "a": 0,
      "r": "An EA's access and trusted position can make them an attractive path for an attacker trying to reach further into an organization."
    },
    {
      "q": "What's the value of a documented incident-response process, even for a small team?",
      "opts": [
        "It proves to insurers that the firm is prepared, which lowers the premium each year",
        "It lets any team member handle an incident alone, without telling anyone else",
        "It means the most senior person can handle every incident personally",
        "It ensures a consistent, faster response instead of improvising decisions under pressure during an actual incident"
      ],
      "a": 3,
      "r": "Having a known process to follow under pressure produces faster, more consistent decisions than improvising in the moment."
    },
    {
      "q": "Why should sensitive files be shared through controlled, permissioned systems rather than general email attachments?",
      "opts": [
        "Email attachments are limited in size, while permissioned systems handle large files and track versions",
        "There's no meaningful security difference between the two",
        "Permissioned systems allow access to be tracked, limited, and revoked, unlike an email attachment already sent",
        "Permissioned systems keep a backup copy, so files can be restored if they're deleted"
      ],
      "a": 2,
      "r": "Once an attachment is sent, control over it is essentially lost — permissioned systems retain the ability to limit and revoke access."
    },
    {
      "q": "What does 'crisis management' add to standard confidentiality practices?",
      "opts": [
        "It adds a media plan, so the firm's public relations team can handle any press coverage and interviews",
        "A structured way to respond when something has already gone wrong, not just how to prevent it in the first place",
        "Nothing new — it's identical to routine confidentiality work",
        "It replaces day-to-day precautions, since a good response plan makes prevention less important"
      ],
      "a": 1,
      "r": "Crisis management is specifically about structured response after something breaks, complementing (not replacing) prevention."
    },
    {
      "q": "You've covered an account number with a black rectangle in a PDF. How do you know it's truly redacted?",
      "opts": [
        "It looks completely black on screen and when it's printed out",
        "You saved the file again as a PDF after drawing the rectangle",
        "Copying the black area or searching for the number finds nothing",
        "The file size became slightly smaller after the rectangle was added"
      ],
      "a": 2,
      "r": "Only a test proves the text is gone: searching for it and copying the area should find nothing. How it looks, re-saving and file size prove nothing, because the text can still sit under a drawn shape."
    },
    {
      "q": "A litigation hold is in place for a client matter. An employee on that matter is leaving the firm next week. What should happen to their laptop and mailbox?",
      "opts": [
        "Wipe them on the last day as usual, since the files are on the server anyway",
        "Preserve them as the hold requires until the attorney releases the hold in writing",
        "Let the employee delete personal files first, then wipe the rest the next week",
        "Forward their emails to a manager, then delete the mailbox to free up space"
      ],
      "a": 1,
      "r": "A hold overrides normal offboarding. The laptop and mailbox are preserved until the attorney releases the hold; wiping, selective deleting or forwarding and deleting can all destroy held information."
    },
    {
      "q": "What is one of the 'golden rules' of admin data security mentioned in this program?",
      "opts": [
        "Share login credentials with trusted colleagues for convenience",
        "Confidentiality rules only apply to paper documents",
        "Never paste sensitive data into unverified or public tools",
        "Use the same password across all accounts for consistency"
      ],
      "a": 2,
      "r": "Protecting where sensitive data actually goes — including which digital tools receive it — is a core security practice."
    }
  ],
  "discussionQuestion": "Have you ever seen — or been part of — a situation where someone had more system access than their role actually required? What was the fix?"
};

const DAY8_EXTRA_LEARNING = {
  "8::Credential Management": {
    "t": "Common Credential Roles",
    "p": [
      "Admin: full control, including adding users and changing security settings — limited to a very small number of people.",
      "Standard/Editor: can create and edit content but can't change permissions. Viewer/Read-only: can see but not change.",
      "Review access when roles change or someone leaves — access that outlives the job is one of the most common security gaps."
    ]
  },
  "8::Responding to a Suspicious Data Request": {
    "t": "Red Flags in a Data Request",
    "p": [
      "Urgency and secrecy: 'Send this in the next 10 minutes and don't tell anyone' is a classic pressure tactic.",
      "Mismatched details: a display name that looks right but an email domain that's slightly off, or a new phone number.",
      "Unusual asks: requests for passwords, client lists, wire changes, or gift cards. Verify through a known channel — call the number you already have, not the one in the message."
    ]
  },
  "8::Containing a Confidentiality Leak": {
    "t": "The First-Hour Checklist",
    "p": [
      "Stop further spread: recall or delete messages where possible, revoke shared links, and change access on affected files.",
      "Capture facts: what was exposed, to whom, when, and how — before details are forgotten.",
      "Notify the right roles (supervising attorney, IT/security, compliance) promptly; legal notification duties to clients or regulators may apply and are their call to make."
    ]
  },
  "8::Fixing a Broken Workflow": {
    "t": "Signs a Workflow Is Broken",
    "p": [
      "Status questions: people keep asking 'where is this?' because no single place shows the answer.",
      "Duplicate effort: the same information is re-typed into email, a spreadsheet, and a calendar.",
      "Hand-off gaps: tasks stall when they move between people, and no one owns the step in between."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[8] = { day: DAY8, extraLearning: DAY8_EXTRA_LEARNING };
