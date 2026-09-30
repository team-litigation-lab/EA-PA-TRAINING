/* ============================================================
   DAY 5 — Household, Risk & Lifestyle Support
   Everything a trainee reads on this day:
   - DAY5: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY5_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "5::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY5 = {
  "id": 5,
  "title": "Household, Risk & Lifestyle Support",
  "theme": "Household Operations & Recurring Admin · Risk Framework, Insurance & Vendor Management · Travel, Lifestyle & Home Binder",
  "objective": "Run household operations like a small business, apply a real risk-management framework, and keep lifestyle support organized and trackable.",
  "lessons": [
    {
      "h": "Running a Household Like a Business",
      "section": "Running the Household",
      "b": [
        "Household management applies real business discipline — planning, organizing, budgeting, evaluation.",
        "The assistant is the main point of contact for family, staff, and contractors."
      ],
      "howTo": [
        "Apply real business discipline to household management — planning, organizing, budgeting, and evaluation — rather than running it ad hoc.",
        "Position yourself as the main point of contact for family, staff, and contractors, so everyone knows exactly who to reach rather than guessing.",
        "Build simple systems for recurring categories (bills, staff schedules, maintenance) the same way a business would, rather than handling each one reactively as it comes up.",
        "Review household operations periodically the way a business reviews performance — what's working, what's slipping, what needs a better system.",
        "Document standing decisions and preferences so the household runs consistently even when you're not the one handling a given task that day."
      ],
      "trainerCue": "Ask who's managed ANY household-adjacent logistics (even just their own family) — this topic lands better when trainees map it to something personally familiar first."
    },
    {
      "h": "Recurring Household Admin: Utilities, Purchasing & Subscriptions",
      "section": "Running the Household",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Utilities",
          "desc": "Electricity, water, gas, rent — payments that can't lapse, on a calendar with real due dates, not memory"
        },
        {
          "label": "Purchasing",
          "desc": "Business needs (office/pantry supplies) and personal needs (meals, clothes) — both real spending decisions, both trackable"
        },
        {
          "label": "Subscriptions",
          "desc": "Sign-up, renewal, payment, and cancellation — the lifecycle most households never actually manage past the sign-up step"
        }
      ],
      "b": [
        "These three categories share the same underlying failure mode: they're all recurring, low-drama tasks that are easy to let slide because nothing dramatic happens the first time they're missed — until a utility gets shut off, or a subscription renews at triple the promotional rate a year after nobody remembers signing up."
      ],
      "howTo": [
        "Put every utility payment on a calendar with real due dates, not a mental note — a missed payment can cascade into late fees or service interruption.",
        "Track purchasing (business and personal) with a simple log of what was bought and when, so nothing is duplicated or forgotten.",
        "Log every subscription's renewal date the moment it's signed up for, not after the first surprise renewal charge.",
        "Review subscriptions before each renewal date and actively decide keep or cancel, rather than letting auto-renewal make the decision by default.",
        "Treat all three categories as equally worth tracking, even though none of them feels urgent on any single day — the risk is in the accumulation, not any one missed item."
      ],
      "trainerCue": "Ask the room for a real subscription that auto-renewed on them (or someone they know) without anyone noticing — nearly everyone has one, and it makes the 'track renewal dates actively' point land immediately."
    },
    {
      "h": "Household Staff Management",
      "section": "Running the Household",
      "fourPart": {
        "corePrinciples": [
          "Managing household staff (a nanny, housekeeper, driver, or estate manager) is fundamentally a coordination role, not a supervisory one in the traditional sense — the PA's job is making sure schedules, expectations, and communication all stay aligned, not micromanaging how each person does their job.",
          "Clear, written expectations from day one prevent the vast majority of staff-management friction — verbal understandings drift, and by the time a disagreement surfaces, neither side remembers the original agreement the same way.",
          "Staff scheduling has to account for both the household's needs and the staff's own reasonable boundaries — a schedule that only works when someone stays late every week isn't sustainable, whatever the org chart says."
        ],
        "howTo": [
          "Maintain a written role description for each staff position, even an informal one, covering hours, core responsibilities, and who they report to — this becomes the reference point whenever a question about scope comes up.",
          "Build a shared household calendar showing each staff member's schedule, so overlaps and gaps are visible at a glance rather than discovered when someone doesn't show up.",
          "Set a regular, brief check-in cadence with household staff (even monthly) — small friction points surface and get resolved before they become real problems.",
          "Keep emergency contact and basic medical information for each staff member on file, the same way you would for family members — this matters if something happens while they're on the property."
        ],
        "bestPractices": [
          "Never let staff scheduling live only in one person's memory (yours or the household manager's) — if you're unreachable, someone else needs to be able to answer \"who's supposed to be here today.\"",
          "Pitfall: assuming staff will raise scheduling conflicts themselves. Many won't, out of politeness or job security concerns — proactively checking in surfaces problems earlier.",
          "Treat household staff with the same professionalism and discretion you'd extend to any other working relationship — this is someone's livelihood, not an informal arrangement, even in a personal household.",
          "When staff turnover happens, build in real handoff time and documentation — losing institutional knowledge (the household's actual routines and preferences) is the most common cost of a rushed transition."
        ],
        "discussionCase": "The Thorne household's regular housekeeper is going on medical leave for six weeks with two days' notice. You need a temporary replacement who can be up to speed quickly. What would you actually document and hand off to make sure the temporary hire doesn't need to ask Sarah Thorne a dozen basic questions in the first week?"
      }
    },
    {
      "h": "Home Maintenance & Repair Coordination",
      "section": "Running the Household",
      "fourPart": {
        "corePrinciples": [
          "Home maintenance splits into two very different categories that need different handling: routine, scheduled maintenance (HVAC servicing, gutter cleaning) versus reactive repairs (a broken appliance, a leak) — treating both the same way leads to either forgotten routine tasks or panicked reactive scrambles.",
          "A maintenance calendar exists to prevent small, cheap fixes from becoming large, expensive ones — most major home repairs were once a minor issue that went unaddressed.",
          "Contractor and vendor relationships for home maintenance follow the same procurement discipline covered elsewhere in this day — vetted, compared, and tracked, not just whoever's available fastest."
        ],
        "howTo": [
          "Build a recurring maintenance calendar covering every system with a manufacturer-recommended service interval (HVAC, water heater, appliances under warranty) — this prevents the most common and costly oversight: skipped routine service voiding a warranty.",
          "Keep a running list of trusted, vetted contractors by specialty (plumber, electrician, HVAC, general handyman) so a reactive repair doesn't start with a cold search under time pressure.",
          "For any repair, get the scope and cost confirmed in writing before work begins, even for a trusted, repeat contractor — verbal estimates have a way of growing once work starts.",
          "Track warranty documentation and appliance manuals in the Home Binder system, organized by item, so a repair call starts with \"is this still under warranty\" answered in seconds, not a search."
        ],
        "bestPractices": [
          "Pitfall: treating every maintenance need as equally urgent. A dripping faucet and a gas smell are not the same priority level — triage matters here the same way it does with email or calendar requests.",
          "Never authorize significant repair spending without the executive's sign-off threshold being clear in advance — know the dollar amount below which you can approve directly versus what needs a check-in first.",
          "Keep photos and a brief written record of major repairs and renovations — this matters for warranty claims, insurance, and eventually if the property is ever sold.",
          "A maintenance calendar that exists but is never actually checked is worse than no calendar — it creates false confidence that things are handled."
        ],
        "discussionCase": "You notice the HVAC system is due for its annual service based on your maintenance calendar, but the household has been consistently declining the reminder for three months because \"it's working fine.\" What's the actual risk here, and how do you raise this again without it feeling like nagging?"
      }
    },
    {
      "h": "Lifestyle & Personal Support",
      "section": "Running the Household",
      "b": [
        "Track errands, gifts, and events in one shared tool with deadlines and owners.",
        "Ad hoc handling is exactly where things get dropped — not from carelessness, but because memory doesn't scale."
      ],
      "howTo": [
        "Track errands, gifts, and events in one shared tool with deadlines and owners, rather than keeping them in memory.",
        "Log a gift or errand the moment it's requested, not once it becomes urgent — ad hoc handling is exactly where things get dropped.",
        "Assign a clear owner for anything that requires follow-through, even if that owner is you, so nothing sits in an ambiguous state.",
        "Review the shared tracker on a regular cadence, catching anything approaching its deadline before it becomes last-minute.",
        "Treat this the same as any other recurring household system — it only works if it's checked consistently, not just created once."
      ],
      "trainerCue": "Close with a direct question: 'What's one recurring errand or gift-tracking task in your life that would fall apart if you didn't personally remember it?' That's the argument for a shared tracker, made personally."
    },
    {
      "h": "Creating a Home Binder for a Busy Executive",
      "section": "The Home Binder",
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Household Operations",
          "desc": "Staff schedules and contacts, vendor info, appliance manuals, alarm/wifi codes, utility accounts"
        },
        {
          "label": "Family & Medical",
          "desc": "Doctors, allergies, medications, school info, pediatrician — anything someone else would need in an emergency"
        },
        {
          "label": "Financial & Legal Reference",
          "desc": "Insurance policy numbers, key account contacts, safety deposit box location — not the sensitive numbers themselves, just where to find them"
        },
        {
          "label": "Emergency Contacts",
          "desc": "Who to call first for what — plumber vs. security vs. a specific family member — organized so anyone can find the right contact fast"
        }
      ],
      "b": [
        "A home binder exists for exactly one moment: when someone other than you needs to find critical household information fast, and you're not available to just tell them.",
        "The test of a good binder isn't how complete it looks — it's whether a substitute PA, a family member, or an emergency responder could actually use it without calling you first."
      ],
      "howTo": [
        "Build the Household Operations section first — staff schedules and contacts, vendor info, appliance manuals, alarm/wifi codes, utility accounts.",
        "Add Family & Medical information next — doctors, allergies, medications, school info — anything someone else would need in a genuine emergency.",
        "Include Financial & Legal Reference details as pointers, not the sensitive data itself — where to find insurance policy numbers or the safety deposit box, not the numbers themselves.",
        "Organize Emergency Contacts so anyone can find the right person fast — who to call for a plumbing issue versus security versus a specific family member.",
        "Test the binder's usability by imagining a substitute PA or emergency responder using it cold — if it wouldn't work for them without calling you first, it's not finished."
      ],
      "trainerCue": "Ask the room what would happen today if they were unreachable for 24 hours and someone else had to run their executive's household — the gaps that come up are exactly what belongs in the binder."
    },
    {
      "h": "Home Binder: Format, Security & Maintenance",
      "section": "The Home Binder",
      "singleSlide": true,
      "b": [
        "Digital vs. physical is a real decision, not just preference: physical works when power/internet is down and for anyone unfamiliar with digital tools; digital works for easy updating and remote access. Many households genuinely need both — a physical copy for true emergencies, kept current from a digital master.",
        "Never store actual sensitive numbers (full account numbers, passwords, SSNs) directly in the binder — reference where to find them securely instead. A binder that falls into the wrong hands shouldn't be a security incident.",
        "Maintenance is the same discipline as the contact list: an outdated home binder is worse than no binder, since it creates false confidence that the information is current."
      ],
      "howTo": [
        "Decide deliberately between digital and physical format based on real use cases — physical works when power or internet is down; digital works for easy updating and remote access.",
        "For most households, maintain both — a physical copy for true emergencies, kept current from a digital master.",
        "Never store actual sensitive numbers (full account numbers, passwords, SSNs) directly in the binder — reference where to find them securely instead.",
        "Update the binder the moment any covered detail changes, the same discipline as the contact list — an outdated binder creates false confidence, which is worse than no binder at all.",
        "Periodically test that the security rule was actually followed — check for any place a real sensitive number may have been entered directly instead of referenced."
      ],
      "trainerCue": "Emphasize the security rule explicitly and check that trainees genuinely understand the difference between 'the account number' and 'where to find the account number' — this distinction is exactly what the Practice Lab exercise for this day will test."
    },
    {
      "h": "Digital Home Binder Tools & Platforms",
      "section": "The Home Binder",
      "fourPart": {
        "corePrinciples": [
          "The right digital tool for a home binder depends on who else needs access and how — a tool only you can use isn't actually solving the \"someone else needs this\" problem the binder exists for.",
          "Structure matters more than the specific platform — a well-organized binder in a simple tool beats a disorganized one in a sophisticated tool.",
          "Whatever platform is chosen, it needs a real access and permissions plan — not everyone who might need the binder should see every section of it."
        ],
        "howTo": [
          "For household teams already using a shared workspace (Notion, Google Workspace, or similar), building the binder there keeps it in a tool people already check, rather than one more place to remember.",
          "Use consistent section headers matching the four Home Binder categories from earlier in this day (Household Operations, Family & Medical, Financial & Legal Reference, Emergency Contacts) so the digital structure mirrors what a physical binder would look like.",
          "Set explicit sharing permissions per section where the platform allows it — a driver may need the household operations section but shouldn't need access to family medical information.",
          "Export or print a physical backup periodically (monthly or quarterly) so the \"digital tool is down\" scenario doesn't leave anyone without access to genuinely critical information."
        ],
        "bestPractices": [
          "Pitfall: choosing a sophisticated tool nobody else in the household actually knows how to use — the binder's value depends entirely on other people being able to access it when needed.",
          "Never rely on a single person's personal login as the only access point — if that person is unreachable, the binder is effectively inaccessible, defeating its purpose.",
          "Revisit access permissions whenever household staff changes — a departed employee retaining binder access is a real, easily-avoided security gap.",
          "Test the binder's actual usability periodically by having someone unfamiliar with it try to find something specific — this surfaces organization problems faster than reviewing it yourself."
        ],
        "discussionCase": "The Thorne household is deciding between a shared Notion workspace (which the family already uses for other things) and a dedicated home-management app with built-in permission controls. What would you actually want to know about who needs access to what before recommending one over the other?"
      }
    },
    {
      "h": "Procurement and Vendor/Supplier Management",
      "section": "Vendors & Procurement",
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Source Multiple Options",
          "desc": "The first vendor found isn't necessarily the right one — comparing at least a couple of real options is what makes the eventual choice defensible"
        },
        {
          "label": "Compare Terms, Not Just Price",
          "desc": "Pricing, reliability, response time, and contract terms all matter — the cheapest option that's unreliable costs more in the long run"
        },
        {
          "label": "Formalize the Agreement",
          "desc": "A real contract or statement of work, not a verbal understanding — this is what protects both sides when expectations aren't met"
        },
        {
          "label": "Manage the Relationship Ongoing",
          "desc": "Track performance and renewal dates actively, and always have a backup identified before you need one"
        }
      ],
      "b": [
        "Procurement is the proactive counterpart to the reactive vendor-failure handling covered next — the discipline here is what actually reduces how often a vendor falls through in the first place."
      ],
      "trainerCue": "Ask whether anyone in the room has ever kept using an underperforming vendor simply because switching felt like more effort than it was worth — that inertia is exactly what a real procurement and backup-vendor discipline is meant to prevent."
    },
    {
      "h": "Vendor Relationships Beyond the Signature",
      "section": "Vendors & Procurement",
      "b": [
        "Treating vendor selection as a real comparison (multiple options, real terms review) rather than defaulting to whoever's easiest to reach is what separates deliberate procurement from just filling a gap quickly.",
        "Supplier management doesn't end at signing — the EA's ongoing role is tracking whether the vendor is actually performing as agreed, when the contract or engagement is up for renewal, and whether a backup option is identified in case this vendor becomes unavailable.",
        "This connects directly to the Recurring Household Admin discipline just covered — vendor contracts and renewal dates are exactly the kind of recurring fact that belongs in a tracked reference, not someone's memory."
      ],
      "howTo": [
        "Compare multiple real vendor options before committing, rather than defaulting to whoever's easiest to reach.",
        "Review actual terms, not just price, before signing — reliability and contract terms matter as much as the quoted rate.",
        "After signing, track whether the vendor is actually performing as agreed, not just that invoices are getting paid on schedule.",
        "Track contract and engagement renewal dates actively, feeding them into the same recurring-tracker discipline as household admin.",
        "Identify a backup option for any vendor relationship before you need one, so a failure doesn't start with a cold search under pressure."
      ],
      "trainerCue": "Ask the room to name a vendor relationship they've seen managed well past the signing stage — what did ongoing management actually look like in practice, beyond just paying invoices?"
    },
    {
      "h": "Negotiating Vendor Contracts & Terms",
      "section": "Vendors & Procurement",
      "fourPart": {
        "corePrinciples": [
          "Negotiation isn't about extracting the lowest possible price — it's about securing terms that genuinely protect the household or business if something goes wrong, which is a different goal than just \"cheaper.\"",
          "The strongest negotiating position comes from having real alternatives already lined up — a vendor who knows you have no other option has no reason to move on price or terms.",
          "Most vendor terms are more negotiable than people assume, especially payment schedules, cancellation terms, and service-level guarantees — the default contract a vendor offers is a starting point, not a fixed rule."
        ],
        "howTo": [
          "Before any negotiation conversation, know your actual priorities in order — price, timeline, flexibility, and service guarantees rarely can all be maximized at once, so know which ones matter most for this specific engagement.",
          "Ask directly for better terms on at least one dimension beyond price — a shorter cancellation notice period or a service-level guarantee often costs the vendor nothing to grant but genuinely protects you.",
          "Get every negotiated term in writing as part of the actual contract, not a side verbal agreement — an unwritten concession disappears the moment there's a dispute or a staff change on the vendor's side.",
          "For any recurring or high-value vendor relationship, revisit terms at renewal rather than auto-renewing — vendor pricing and terms drift over time, and renewal is the natural point to re-negotiate."
        ],
        "bestPractices": [
          "Pitfall: negotiating only on price and ignoring the cancellation and dispute-resolution terms — these matter far more than price the one time something actually goes wrong.",
          "Never let a vendor rush you into signing under time pressure they created — a vendor who says \"this price is only good today\" is using a tactic, not describing a real constraint, in the vast majority of cases.",
          "Keep a simple record of what was negotiated and why for every significant vendor contract — this protects institutional memory when the person who negotiated it is no longer handling that relationship.",
          "A negotiation that damages the working relationship isn't a win, even if it secures better terms on paper — for ongoing vendor relationships, how you negotiate matters as much as what you get."
        ],
        "discussionCase": "A vendor the household has used reliably for two years sends a renewal contract with a 15% price increase and no explanation. You have one comparable alternative vendor you've never used. How do you approach the renewal conversation, and what would actually justify staying versus switching?"
      }
    },
    {
      "h": "Reading a Contract: The Clauses to Recognize",
      "section": "Vendors & Procurement",
      "fourPart": {
        "corePrinciples": [
          "You'll handle contracts constantly: vendor agreements, leases, event venues, software subscriptions. You don't decide what the terms should be, but you need to recognize the clauses and pull out the dates and duties.",
          "Most contracts have the same building blocks: the parties, the scope (what's being provided), payment terms, the term and renewal, termination, confidentiality, indemnification, limitation of liability, insurance, governing law and signatures.",
          "The clauses that cause the most everyday trouble are the ones with dates: automatic renewals, notice periods and payment deadlines."
        ],
        "howTo": [
          "Read the first page for the parties and the date, then find the term clause: when it starts, when it ends and whether it renews automatically.",
          "Find every date and notice period, like 'either party may cancel with 60 days' written notice', and put each in the calendar with a reminder before the notice deadline.",
          "Note the payment terms (amount, schedule, late fees) and the scope, so invoices can be checked against them.",
          "Make a one-page summary for the file: parties, term, renewal, notice periods, payment, key duties and where notices must be sent.",
          "Send the contract to the attorney for review before signing, and flag anything unusual: unlimited liability, a one-sided indemnity or a far-away governing law."
        ],
        "bestPractices": [
          "Check who has authority to sign. The signer must be an officer or someone the company has authorized.",
          "Keep the fully signed copy, with all attachments and schedules, in one place.",
          "Pitfall: missing an auto-renewal notice window. The firm ends up locked into another year it didn't want.",
          "Pitfall: summarizing a clause in your own words as if it were legal advice. Your summary is a guide to the document, not an interpretation."
        ],
        "discussionCase": "A three-year catering contract for the firm's events says it 'renews automatically for successive one-year terms unless either party gives 90 days' written notice.' It started March 1, 2024. When is the last day to give notice, and what goes in the calendar?"
      },
      "trainerCue": "Hand out a two-page sample vendor agreement. Give pairs five minutes to find the term, renewal, notice period, payment terms and governing law, then compare."
    },
    {
      "h": "When a Vendor Falls Through",
      "section": "Vendors & Procurement",
      "b": [
        "Notify the household immediately when a vendor falls through, and propose real alternatives.",
        "Keep backup vendors identified in advance for every recurring service."
      ],
      "howTo": [
        "The moment a vendor falls through, notify the household immediately rather than trying to quietly fix it first.",
        "Propose real, specific alternatives right away, not just a notification that something has gone wrong.",
        "Reach for a pre-identified backup vendor rather than starting a cold search under time pressure.",
        "Confirm the backup can actually deliver on the same timeline before committing to them, so one failure doesn't compound into a second.",
        "After the situation is resolved, update the vendor tracker to reflect what happened, so the next similar decision has better information."
      ],
      "trainerCue": "Tell a real (or realistic) vendor-failure story and ask the room what they'd have done in the first five minutes — before revealing the 'right' answer."
    },
    {
      "h": "Vendor NDA Management",
      "section": "Vendors & Procurement",
      "fourPart": {
        "corePrinciples": [
          "Vendors who have access to household or business information sometimes need a formal NDA before that access is granted — this is a genuine legal protection, not just a formality.",
          "Managing NDAs means more than getting one signed once — it means tracking which vendors have one, what it actually covers, and whether it's still current."
        ],
        "howTo": [
          "Identify which vendors genuinely need an NDA based on what they'll actually have access to — not every vendor relationship requires one, but any that involve real confidential exposure should have one before access is granted, not after.",
          "Keep a simple tracker of which vendors have signed NDAs, when, and what scope they cover — this is the same centralized-tracking discipline used elsewhere in this program for licenses and compliance items.",
          "Revisit whether an NDA is still adequate whenever a vendor relationship's scope changes — an NDA written for one type of engagement may not adequately cover an expanded one."
        ],
        "bestPractices": [
          "Pitfall: treating NDA paperwork as a one-time box to check rather than something to track on an ongoing basis alongside the vendor relationship itself.",
          "Never grant a vendor access to genuinely sensitive information based on a verbal assurance that an NDA will be signed later — get it signed first."
        ],
        "discussionCase": "A new household vendor needs temporary access to the home security system while doing a multi-week project. What would you want confirmed or in place before granting that access?"
      }
    },
    {
      "h": "The PA Risk Management Framework",
      "section": "Risk Management",
      "b": [
        "Most real incidents touch more than one category at once."
      ],
      "layout": "QUADRANT",
      "quadrants": [
        {
          "label": "Financial Risk",
          "desc": "Unpaid premiums, lapsed policies, fraud — monitor renewals, verify payments"
        },
        {
          "label": "Legal & Liability Risk",
          "desc": "Personal injury claims, contractual exposure, household-staff liability"
        },
        {
          "label": "Operational Risk",
          "desc": "Missed deadlines, travel disruption, vendor failure — build contingency plans"
        },
        {
          "label": "Reputational Risk",
          "desc": "Social media exposure, public disputes, data breaches — practice discretion"
        }
      ],
      "howTo": [
        "For Financial Risk, monitor policy renewals and verify payments actively, rather than assuming coverage is continuous by default.",
        "For Legal & Liability Risk, stay alert to personal injury, contractual, or household-staff liability exposure as it arises, not just after an incident occurs.",
        "For Operational Risk, build contingency plans for missed deadlines, travel disruption, or vendor failure before they happen, not while they're happening.",
        "For Reputational Risk, practice discretion around social media, public disputes, and data handling as a standing habit, not just a reaction after something goes wrong.",
        "When a real incident occurs, check it against all four categories rather than just the most obvious one — most real incidents touch more than one at once."
      ],
      "trainerCue": "Put the four risk categories on the board and ask the room to sort three real recent news stories into them live — most will realize a single incident often touches more than one category."
    },
    {
      "h": "The Four Core Risk Strategies",
      "section": "Risk Management",
      "b": [
        "Avoidance — skip the risky activity entirely.",
        "Reduction — add safety measures (alarms, defensive driving).",
        "Transfer — shift the risk to an insurer.",
        "Retention — accept minor risk when insuring costs more than the risk itself."
      ],
      "table": {
        "headers": [
          "Strategy",
          "What it means",
          "Example"
        ],
        "rows": [
          [
            "Avoidance",
            "Avoid the activity that creates the risk",
            "Not investing in extremely volatile assets without expertise"
          ],
          [
            "Reduction",
            "Add safety measures to lower potential loss",
            "Smoke detectors, security systems, defensive driving courses"
          ],
          [
            "Transfer",
            "Shift the financial risk to an insurer",
            "Purchasing homeowners or auto insurance"
          ],
          [
            "Retention",
            "Accept minor risk when insuring costs more than the risk itself",
            "Paying for small car repairs out of pocket"
          ]
        ]
      },
      "howTo": [
        "For a risk that can reasonably be skipped entirely, apply Avoidance — simply don't engage in the risky activity.",
        "For a risk you can't avoid but can lower, apply Reduction — add safety measures like alarms or defensive driving.",
        "For a risk with real financial exposure, apply Transfer — shift it to an insurer through the appropriate policy.",
        "For a minor risk where insuring costs more than the risk itself, apply Retention — accept it deliberately rather than over-insuring.",
        "Match the strategy to the actual risk in front of you rather than defaulting to the same strategy for everything — most real situations call for a specific one of the four, not a blend."
      ],
      "trainerCue": "This is the most conceptually dense topic today — slow down and make sure the difference between Reduction and Retention is genuinely clear before moving to the matching exercise."
    },
    {
      "h": "Insurance & Risk at a Glance",
      "section": "Risk Management",
      "b": [
        "Track policy expirations, compare coverage against what's actually recommended.",
        "Review twice a year: has net worth, property, travel, or staff changed? Each 'yes' is a potential gap.",
        "A Personal Insurance Policy Tracker should be a secure spreadsheet with columns for Policy Type, Carrier, Policy #, Insured Party, Deductible, Premium, Payment Frequency, and Renewal Date — this is what prevents lapses and missed payments.",
        "Annual Risk Review Checklist prompts: new property or vehicle acquired? Change in marital status? New dependents? Business ownership changes? Increase in net worth? Any 'yes' means notifying the broker for a coverage adjustment."
      ],
      "callout": {
        "type": "tip",
        "label": "Semi-annual risk check",
        "text": "Review twice a year: has net worth increased? New properties or vehicles? More international travel? Any new household staff? Each 'yes' is a potential coverage update."
      },
      "howTo": [
        "Build a Personal Insurance Policy Tracker as a secure spreadsheet with Policy Type, Carrier, Policy #, Insured Party, Deductible, Premium, Payment Frequency, and Renewal Date.",
        "Track every policy's expiration date actively, so renewals are handled ahead of lapse, not discovered after.",
        "Compare current coverage against what's actually recommended for the household's situation, not just what was in place when the policy was first written.",
        "Run the Annual Risk Review Checklist twice a year — new property or vehicle, marital status change, new dependents, business ownership changes, net worth increase — and notify the broker for any \"yes.\"",
        "Treat each \"yes\" on the review as a real coverage gap to close, not just a note to revisit eventually."
      ],
      "trainerCue": "Ask: 'Who has insurance coverage they genuinely couldn't describe in one sentence?' That's the exact gap this topic tries to close."
    },
    {
      "h": "EA/PA Risk Framework: Information Security",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "Information security risk means the exposure of sensitive data — client information, financial details, personal family information, confidential business matters — through carelessness, a breach, or simple mishandling.",
          "An EA or PA routinely has access to more sensitive information than almost anyone else around an executive, which makes information security a core part of the role, not a specialized IT concern that's someone else's job.",
          "The goal isn't perfect security (which doesn't exist) — it's disciplined, consistent handling that keeps the routine risk of a slip low, and a clear escalation path for when something does go wrong."
        ],
        "howTo": [
          "Apply least-privilege access as a default — only see and hold the sensitive information actually needed for the task at hand, not everything available just because access exists.",
          "Verify identity before disclosing anything sensitive over phone or email — a confident-sounding request is not verification, especially for financial or account details.",
          "Use secure channels for genuinely sensitive information — a password-protected document or a secure portal, not a casual text message or unencrypted email, for anything that would cause real harm if intercepted.",
          "Know the actual containment steps for a suspected leak or breach before one happens: stop further spread first, assess scope, then escalate — panicking and immediately assigning blame delays the part that actually matters."
        ],
        "bestPractices": [
          "Pitfall: treating information security as someone else's responsibility because \"IT handles that.\" Most real information security failures are human handling errors, not technical ones.",
          "Never store sensitive account numbers, passwords, or identification numbers in an unsecured document \"just to have it handy\" — reference where to find them securely instead.",
          "Report a suspected security incident immediately, even a small one — a near-miss reported early is far easier to contain than a real breach discovered late.",
          "Regularly reconsider who actually needs standing access to sensitive systems or information — access that made sense a year ago may no longer be necessary."
        ],
        "discussionCase": "You receive an email that looks like it's from Elias's bank, asking you to confirm his account details to resolve a \"security flag.\" It looks legitimate but arrived at an unusual time. What do you actually do before responding?"
      }
    },
    {
      "h": "EA/PA Risk Framework: Operational Continuity",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "Operational continuity risk is the danger that a disruption — the EA/PA being unavailable, a key system going down, a critical vendor failing — stops essential support functions from happening at all.",
          "Continuity planning exists so that a single point of failure (usually \"only I know how to do this\") doesn't bring an entire operation to a halt when that one person is unreachable.",
          "This connects directly to documentation discipline covered elsewhere in this program — an SOP, a binder, a tracked contact list are all continuity tools, not just organizational nice-to-haves."
        ],
        "howTo": [
          "Identify the specific tasks that would genuinely break if you were unreachable for 48 hours — these are your actual continuity risks, not a generic worry.",
          "Document critical recurring processes (even briefly) so someone else could execute them in an emergency — this is the same discipline as the SOP and Home Binder work covered elsewhere in this program.",
          "Maintain a backup or secondary contact for every critical vendor and system access — a single point of contact for something essential is a continuity risk waiting to happen.",
          "Build a simple \"if I'm unreachable\" protocol and make sure at least one other person knows it exists — who to contact, where key documents live, what absolutely cannot wait."
        ],
        "bestPractices": [
          "Pitfall: being so indispensable that nothing can happen without you. This feels secure but is actually a significant operational risk, for the executive and for you.",
          "Test continuity plans occasionally rather than assuming they'd work — have someone actually try to follow your documentation for a routine task and see what's missing.",
          "Keep continuity documentation current — an outdated backup plan creates false confidence, which is worse than knowing there's a real gap.",
          "Continuity planning isn't pessimism — it's the same risk-reduction discipline this whole framework teaches, applied to your own role instead of an external vendor or system."
        ],
        "discussionCase": "You're planning a two-week vacation, the first real time away from the role in over a year. What would you actually need to document and hand off to make sure nothing critical falls through during those two weeks?"
      }
    },
    {
      "h": "EA/PA Risk Framework: Reputational Risks",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "Reputational risk is exposure that damages how the executive, the family, or the business is perceived publicly — social media missteps, public disputes, leaked information, or a mishandled sensitive situation.",
          "Reputational damage often spreads faster and is harder to reverse than financial or operational damage — a single bad moment captured and shared can outlast the actual event by years.",
          "The EA/PA's role here is largely preventive: exercising discretion and judgment before something becomes a public problem, not managing the fallout after it already has."
        ],
        "howTo": [
          "Apply discretion by default to anything that could become public — assume any message, document, or conversation might eventually be seen outside its intended audience.",
          "Vet event guest lists, public appearances, and social content with reputational exposure specifically in mind, not just logistics — who's in the room or what's being posted can create risk logistics alone wouldn't catch.",
          "Know the actual escalation path for a reputational issue in progress — who needs to be informed immediately, and who's authorized to respond publicly versus who should stay silent until guided.",
          "Control information flow deliberately — knowing what can be shared, with whom, and when is as much a reputational skill as a confidentiality one."
        ],
        "bestPractices": [
          "Pitfall: responding to a reputational situation quickly instead of correctly. A fast, wrong public response usually causes more damage than a brief, deliberate pause before responding.",
          "Never assume a private conversation or communication will stay private — plan and communicate as if anything could surface.",
          "Keep a mental (or literal) list of topics and situations that are reputationally sensitive for this specific executive, since the risk areas vary by person, industry, and public profile.",
          "When in doubt about whether something is reputationally risky, escalate rather than deciding alone — this is exactly the kind of judgment call this program has emphasized isn't yours to make solo."
        ],
        "discussionCase": "A journalist reaches out directly to you, not through the firm's usual channels, asking for comment on a sensitive matter involving Elias. They're polite but persistent. What do you actually do, and what do you deliberately avoid doing?"
      }
    },
    {
      "h": "EA/PA Risk Framework: Physical & Travel Safety",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "Physical and travel safety risk covers real, bodily risk to the executive or family — during travel, at events, or in daily life — distinct from the financial, operational, and reputational risks covered elsewhere in this framework.",
          "This category has the highest stakes of the five, since the consequences of a gap here are the most severe and least reversible.",
          "Duty of care — the responsibility to know where someone is and be able to reach or assist them — applies here more than anywhere else in the EA/PA role."
        ],
        "howTo": [
          "Maintain visibility into the executive's location and itinerary at all times during travel or high-profile events, without being intrusive about it — this is what makes a fast response possible if something happens.",
          "Build destination-specific safety awareness before any travel to an unfamiliar or higher-risk location — local emergency numbers, nearest medical care, and any relevant advisories.",
          "Coordinate directly with security personnel where they exist, rather than working around them — physical safety planning is a team function, not a solo EA/PA judgment call for genuinely high-risk situations.",
          "Keep emergency contact and basic medical information current and accessible for the executive and family members — this needs to be findable in seconds during an actual emergency, not searched for."
        ],
        "bestPractices": [
          "Pitfall: treating physical safety planning as excessive or paranoid for a \"normal\" trip. The planning should scale to actual risk level, but some baseline awareness applies to every trip.",
          "Never guess at emergency response — know the actual local emergency numbers and nearest appropriate medical facility for wherever the executive currently is, especially internationally.",
          "Loop in professional security expertise for genuinely elevated-risk situations rather than handling it alone — this is a case where knowing the limits of your own role matters.",
          "A missed check-in during travel should trigger a real, pre-agreed escalation — not a guessing game about how many hours of silence is actually concerning."
        ],
        "discussionCase": "Elias is attending a public event with elevated media attention, and the venue has confirmed only minimal security screening for attendees. What would you actually want confirmed or arranged before the event, and who would you loop in?"
      }
    },
    {
      "h": "EA/PA Risk Framework: Financial Controls",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "Financial controls risk covers unauthorized spending, fraud, billing errors, and financial mismanagement — distinct from the broader financial risk category covered elsewhere, this focuses specifically on the controls that prevent those failures.",
          "An EA/PA often has real financial access — approving invoices, managing accounts, handling reimbursements — which means financial controls discipline is a direct part of the role, not an accounting department concern alone.",
          "Strong financial controls protect the EA/PA as much as the executive — clear approval thresholds and documentation mean no one's word-against-word if a financial question is ever raised."
        ],
        "howTo": [
          "Know your actual approval authority in dollar terms before you need it — what you can approve directly versus what requires sign-off, so a financial decision under time pressure doesn't become a guessing game.",
          "Require documentation (an invoice, a receipt, a written approval) for every financial transaction you handle, even small or routine ones — verbal-only financial decisions are exactly where disputes and errors happen.",
          "Reconcile recurring financial activity regularly (monthly at minimum) rather than assuming it's correct — small billing errors compound if they're not caught early.",
          "Flag anything financially unusual immediately, even if you're not certain it's wrong — a duplicate charge, an unexpected vendor invoice, or an out-of-pattern request are worth a second look before processing."
        ],
        "bestPractices": [
          "Pitfall: processing a financial request quickly because it seems urgent, without the normal verification. Urgency is one of the most common tactics behind actual financial fraud.",
          "Never approve or process a financial transaction based solely on a request that arrived through an unusual channel (a text instead of the normal system, an email from a slightly-off address).",
          "Keep financial approval records organized and accessible — this is what makes an audit, if one ever happens, a quick confirmation rather than a stressful reconstruction.",
          "When a financial request falls outside your normal pattern for this executive or household, verify through a second channel before acting, even if it delays things slightly."
        ],
        "discussionCase": "You receive an email that appears to be from Elias, asking you to urgently wire funds to a vendor for a time-sensitive deal, with instructions to keep it discreet. The tone matches how he writes, but something feels slightly off. What do you actually do before taking any action?"
      }
    },
    {
      "h": "Private Expense Audit",
      "section": "Risk Management",
      "fourPart": {
        "corePrinciples": [
          "A private expense audit means periodically reviewing personal and household spending records for accuracy, not just processing each transaction as it comes in — errors and irregularities are far easier to catch in a review than in the moment.",
          "This connects directly to the financial controls principles covered earlier in this day — regular reconciliation, applied specifically to the household and personal side rather than the business side."
        ],
        "howTo": [
          "Set a recurring cadence for reviewing personal and household expense records (monthly is typical) rather than only checking when something looks obviously wrong.",
          "Compare actual charges against expected recurring expenses (subscriptions, vendor contracts, staff payroll) to catch anything that's drifted from what was agreed — a price increase that was never flagged, a subscription that should have been cancelled.",
          "Flag anything genuinely unclear or unexpected for confirmation rather than assuming it's fine — a private household audit is exactly the place where a small irregularity can go unnoticed longest if no one's actively looking."
        ],
        "bestPractices": [
          "Pitfall: treating personal expense review as lower-stakes than business financial controls. The discretion and trust involved in managing someone's private finances carries its own real weight.",
          "Keep private financial records with the same security discipline as any other confidential information in this program — this isn't casual paperwork."
        ],
        "discussionCase": "During a routine review of household expenses, you notice a recurring charge you don't recognize and can't immediately place. What do you actually do before raising it with the household?"
      }
    },
    {
      "h": "Travel Risk Management",
      "section": "Travel Risk",
      "b": [
        "Before travel — confirm travel insurance and international coverage.",
        "During — keep an emergency contact sheet and secure Wi-Fi practices.",
        "After — reconcile expenses and file claims while details are fresh."
      ],
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Before Travel",
          "desc": "Confirm travel insurance, international medical coverage, register with embassy if high-profile"
        },
        {
          "label": "During Travel",
          "desc": "Keep an emergency contact sheet, digital document copies, secure Wi-Fi practices"
        },
        {
          "label": "After Travel",
          "desc": "Reconcile expenses and file any claims promptly, while details are still fresh"
        }
      ],
      "trainerCue": "Walk through the Before/During/After travel risk structure using a real upcoming trip if anyone in the room has one — hypotheticals land less than something someone's actually planning."
    },
    {
      "h": "Handling a Travel Claim",
      "section": "Travel Risk",
      "singleSlide": true,
      "b": [
        "A claim is a risk event requiring organized response, not just paperwork — the PA's role is Coordinator, Document Controller, and Executive Liaison.",
        "Phase 1 of a claim (immediate response): ensure safety first, call emergency services if needed, then preserve evidence — clear photos/videos, saved damaged items, police/incident report numbers, witness details. Never admit fault on the executive's behalf."
      ],
      "howTo": [
        "Treat a claim as a risk event requiring organized response, not just paperwork — your role is Coordinator, Document Controller, and Executive Liaison at once.",
        "In the immediate response phase, ensure safety first and call emergency services if needed before anything else.",
        "Preserve evidence right away — clear photos and video, saved damaged items, police or incident report numbers, and witness details.",
        "Never admit fault on the executive's behalf, regardless of how the situation looks in the moment — this is the detail most commonly forgotten under real pressure.",
        "Move to formal documentation and filing only after the immediate response phase is genuinely secured."
      ],
      "trainerCue": "Emphasize 'never admit fault' specifically — this is the detail most likely to be forgotten under real pressure, and it's the one with the most serious consequences if missed."
    },
    {
      "h": "International Travel Risk & Duty of Care",
      "section": "Travel Risk",
      "fourPart": {
        "corePrinciples": [
          "International travel introduces risk categories domestic travel doesn't: political instability, health infrastructure gaps, unfamiliar legal systems, and communication barriers during an emergency — the Before/During/After framework still applies, but each phase needs more depth.",
          "\"Duty of care\" means the organization or household has a real responsibility to know where a traveler is and be able to reach or assist them — this isn't just a courtesy, it's an expectation that becomes critical the moment something goes wrong.",
          "The riskier the destination, the more this planning has to happen before departure — improvising an emergency response from an unfamiliar country, in an unfamiliar language, is far harder than it sounds."
        ],
        "howTo": [
          "Check official government travel advisories for the destination before booking, not just before departure — this shapes whether extra precautions (security briefing, evacuation insurance) are warranted at all.",
          "Register international travel with the relevant government's travel registration program where available — this is what makes official evacuation or emergency assistance possible if a crisis hits.",
          "Confirm international health coverage and, for higher-risk destinations, medical evacuation insurance specifically — standard travel insurance often doesn't cover medical evacuation, which can cost well into six figures without it.",
          "Build a destination-specific emergency card: local embassy contact, nearest hospital with English-speaking staff if relevant, local emergency numbers (which differ from 911), and a designated check-in schedule with the office or family."
        ],
        "bestPractices": [
          "Pitfall: treating international travel prep as \"the same checklist, just with a passport.\" The stakes and the failure modes are genuinely different, and the prep needs to reflect that.",
          "For any high-risk destination, loop in the executive's security team or a travel-risk consultant if one exists — this isn't a call an EA should be making alone for genuinely dangerous locations.",
          "Keep scanned copies of every critical document (passport, visas, insurance cards, prescriptions) accessible remotely, separate from the physical originals — losing documents abroad is a common, solvable-in-advance problem.",
          "A missed check-in should trigger an actual escalation protocol, decided in advance — not a guessing game about how many hours of silence is actually concerning for this specific trip and destination."
        ],
        "discussionCase": "Elias is traveling internationally for an arbitration matter in a country with a moderate travel advisory. He's dismissive of extra precautions, saying he's traveled there before with no issues. What would you actually want in place before he leaves, and how do you raise it in a way that respects his experience while still doing your job?"
      }
    },
    {
      "h": "Mid-Point 1-on-1 Performance Review",
      "section": "Mid-Point Review",
      "fourPart": {
        "corePrinciples": [
          "Day 5 sits at the program's midpoint, which is a deliberate checkpoint — enough material has been covered and practiced that a real, individual conversation about progress is more useful now than it would be earlier or later.",
          "A mid-point review is a two-way conversation, not a one-directional evaluation — it's as much a chance to surface what's genuinely unclear as it is a chance for a trainer to flag what's going well and what needs work."
        ],
        "howTo": [
          "Come into the review with a specific, honest sense of which days and Practice Lab tools felt solid versus which ones still feel shaky — vague self-assessment (\"it's all going fine\") makes the conversation far less useful.",
          "Use the actual data available — Knowledge Check scores, Practice Lab attempt history, and Live Roleplay Dashboard performance if used — as the starting point for the conversation, not just general impressions.",
          "Leave the review with a specific, concrete focus for the second half of the program — not a vague \"try harder,\" but a named skill or day worth deliberately targeting again."
        ],
        "bestPractices": [
          "Pitfall: treating the mid-point review as a formality to get through rather than a genuine opportunity to redirect effort where it's actually needed for the remaining five days.",
          "A trainee who's struggling with something specific should raise it directly in this conversation — the second half of the program is the right time to still meaningfully close a gap, not something to wait out."
        ],
        "discussionCase": "Looking honestly at Days 1 through 5: which day or Practice Lab tool would you most want to revisit before moving on, and what specifically about it still feels unclear?"
      }
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 15,
      "q": "A family purchases homeowners insurance to cover potential losses from fire or theft. Which risk strategy is this?",
      "opts": [
        "Transfer",
        "Retention",
        "Reduction",
        "Avoidance"
      ],
      "a": 0,
      "r": "Buying insurance shifts the financial risk onto the insurer — that's Transfer."
    },
    {
      "afterIndex": 16,
      "q": "During the semi-annual risk review, which of these is a genuine trigger to revisit coverage?",
      "opts": [
        "A vendor changed their logo",
        "The assistant took a vacation",
        "Net worth increased significantly since the last review",
        "The weather changed"
      ],
      "a": 2,
      "r": "A meaningful change in net worth, property, vehicles, or household staff should always prompt a coverage check."
    }
  ],
  "quiz": [
    {
      "q": "What is the most commonly neglected part of subscription management?",
      "opts": [
        "Actively tracking renewal dates and deciding whether to cancel before auto-renewal happens",
        "Reading each service's full terms and conditions carefully before signing up for it",
        "Picking the right card for each subscription so the rewards points add up over the year",
        "Keeping the login details for each service somewhere the whole family can find them"
      ],
      "a": 0,
      "r": "Most households manage the sign-up step fine — it's the ongoing renewal tracking that gets neglected, which is exactly how subscriptions quietly triple in price a year later."
    },
    {
      "q": "A household vendor cancels last-minute. Correct move?",
      "opts": [
        "Cancel the service for good and look for a new vendor next month",
        "Quietly rebook the same vendor for the next open slot and mention it at the weekly check-in",
        "Notify the household immediately and line up a backup vendor",
        "Ignore it and hope it resolves itself"
      ],
      "a": 2,
      "r": "Immediate transparency plus a backup plan prevents the gap from becoming a bigger problem."
    },
    {
      "q": "You notice liability insurance is well below what's recommended for the family's net worth. Best step?",
      "opts": [
        "Raise the coverage limit straight away with the current insurer, then tell the family at renewal",
        "Leave it as is, since the premiums are paid and the policy hasn't lapsed",
        "Switch to a cheaper insurer with a higher limit, then let the family know it's done",
        "Summarize current coverage, flag the gap, and consult an insurance advisor"
      ],
      "a": 3,
      "r": "Surface the gap with a clear summary and expert input — don't act unilaterally on someone else's coverage."
    },
    {
      "q": "Before a family member's adventure vacation, you should...",
      "opts": [
        "Buy a standard travel insurance policy, since these cover most activities abroad",
        "Verify travel insurance actually covers the specific activities planned",
        "Book the activities early, since popular tours sell out quickly in peak season",
        "Suggest a safer destination instead"
      ],
      "a": 1,
      "r": "Generic travel insurance often excludes higher-risk activities — always verify against the actual plan."
    },
    {
      "q": "Best way to manage recurring personal errands like gifts, events, and wardrobe tasks?",
      "opts": [
        "Handle everything ad hoc as it comes up",
        "Keep them in your own head and personal notes, since only you need to know",
        "A shared digital tracker with deadlines, budgets, and clear ownership",
        "Hand each one to a vendor or staff member and trust them to handle it"
      ],
      "a": 2,
      "r": "Tracking is what prevents small recurring tasks from silently slipping."
    },
    {
      "q": "Home management is best understood as...",
      "opts": [
        "Running the household with the same planning and budgeting discipline as a business",
        "Something that doesn't require organizational skill",
        "A task-by-task job: fixing whatever comes up in the house as quickly as possible",
        "Mainly about building friendly relationships with the family's regular vendors and staff"
      ],
      "a": 0,
      "r": "It draws directly on planning, organizing, budgeting, and evaluating — the same skills that run a business."
    },
    {
      "q": "What does 'running a household like a business' primarily mean?",
      "opts": [
        "Treating household staff like corporate employees, with formal reviews and job titles",
        "Keeping a budget for each family member and charging costs back to them each month",
        "Avoiding any personal or informal interactions with the household",
        "Applying structure, budgets, vendor management, and accountability to household operations"
      ],
      "a": 3,
      "r": "The comparison is about applying operational discipline — budgeting, vendor oversight, accountability — not literal commerce."
    },
    {
      "q": "When a vendor falls through unexpectedly, what should a PA prioritize first?",
      "opts": [
        "Giving the vendor time to fix it themselves, since they know the job best and are already booked",
        "Activating a backup plan or contingency to minimize disruption to the household",
        "Asking the family whether they'd still like the service, or would rather skip it this time",
        "Documenting the vendor's failure in writing first, so the contract dispute is on record"
      ],
      "a": 1,
      "r": "A resilient PA has contingencies ready — the immediate priority is minimizing disruption, not assigning blame."
    },
    {
      "q": "What is the core purpose of the PA Risk Management Framework?",
      "opts": [
        "To systematically identify, assess, and respond to risks before they become emergencies",
        "To make sure every risk decision goes to the executive personally, so the PA is never exposed",
        "To remove every possible risk from the household, so nothing unexpected can ever happen",
        "To avoid discussing risk with the household at all"
      ],
      "a": 0,
      "r": "The framework exists to proactively manage risk, not to promise the impossible outcome of zero risk."
    },
    {
      "q": "Which of the following is one of the Four Core Risk Strategies?",
      "opts": [
        "Risk identification, documentation, notification and review",
        "Risk escalation, delegation, monitoring and reporting",
        "Risk avoidance, reduction, transfer, and acceptance",
        "Risk ignoring, delaying, hiding, and denying"
      ],
      "a": 2,
      "r": "Avoidance, reduction, transfer (e.g. insurance), and acceptance are the standard four risk-management strategies."
    },
    {
      "q": "What does 'risk transfer' typically look like in a household risk context?",
      "opts": [
        "Handing responsibility for the risk to a household staff member, who then manages it day to day",
        "Purchasing insurance so a third party absorbs the financial impact if the risk occurs",
        "Ignoring the risk and hoping it doesn't happen",
        "Moving the risky activity elsewhere, like storing valuables at a relative's house instead"
      ],
      "a": 1,
      "r": "Insurance is the classic example of risk transfer — shifting financial exposure to a third party."
    },
    {
      "q": "Why is travel risk management treated as its own distinct topic rather than folded into general travel planning?",
      "opts": [
        "Because travel risk only really applies to international trips, which need their own paperwork",
        "Because travel agents handle it, so it sits outside the PA's normal planning work",
        "Because airlines require a written risk plan before they'll confirm bookings for high-profile travelers",
        "Travel introduces concentrated risk exposure (health, security, logistics) that benefits from dedicated contingency planning"
      ],
      "a": 3,
      "r": "Travel concentrates several risk types at once, which is why it gets dedicated planning rather than being an afterthought."
    },
    {
      "q": "What is 'lifestyle and personal support' primarily concerned with?",
      "opts": [
        "Managing the family's investments, taxes and financial planning alongside their advisers",
        "Booking the executive's leisure activities, like restaurants, spa days and holidays, and nothing else",
        "Coordinating the non-business dimensions of an executive's life — family, personal logistics, wellbeing",
        "Making sure the family's personal matters meet every legal and compliance requirement"
      ],
      "a": 2,
      "r": "This is the PA-side work of supporting the personal and lifestyle dimensions of the principal's life."
    },
    {
      "q": "A recurring vendor issue keeps causing the same household disruption. What's the better long-term fix?",
      "opts": [
        "Ask the vendor for a discount each time it happens, so the family is at least compensated",
        "Diagnose the root cause and either replace the vendor or change the process that keeps triggering the issue",
        "Ask the executive to take over that vendor relationship personally, since the vendor may listen to them more",
        "Keep handling each occurrence quickly as it happens, since a fast fix limits the disruption each time"
      ],
      "a": 1,
      "r": "A recurring problem calls for a root-cause fix, not repeated reactive firefighting."
    },
    {
      "q": "Why might 'risk acceptance' be the correct strategy in some situations?",
      "opts": [
        "When the cost of avoiding, reducing, or transferring a risk exceeds the likely impact of the risk itself",
        "Because insurance is always more expensive than simply paying for the damage when it happens",
        "When the family has already insured the risk once, so accepting it just means not insuring it twice",
        "Because accepting a risk means the family never has to spend money or effort planning for it"
      ],
      "a": 0,
      "r": "Sometimes the effort or cost of managing a risk outweighs its actual likely impact — that's when acceptance is rational."
    },
    {
      "q": "What is the value of an 'insurance & risk at a glance' summary for a household?",
      "opts": [
        "It replaces the full policy documents, so the originals can be filed away and not kept to hand",
        "It's purely a formality with no practical use",
        "It's mainly useful during a claims dispute, as evidence of what the family believed was covered",
        "It gives a fast, scannable reference for what's covered, what isn't, and where gaps exist"
      ],
      "a": 3,
      "r": "A quick-reference summary helps catch coverage gaps before they become a crisis, not just during one."
    },
    {
      "q": "Why is it useful to document a household's vendor contacts and backup vendors in advance, rather than searching when a need arises?",
      "opts": [
        "Vendors give better rates to households that keep them on file as a named backup",
        "Under time pressure, having pre-vetted options prevents rushed, lower-quality vendor decisions",
        "Backup vendors are rarely needed, but having a list reassures the family that everything is organized",
        "A documented list is mainly needed at tax time, to show which vendors were paid during the year"
      ],
      "a": 1,
      "r": "Pre-vetting removes the pressure of finding a reliable option in the middle of an actual emergency."
    },
    {
      "q": "What distinguishes 'risk reduction' from 'risk avoidance' as strategies?",
      "opts": [
        "Avoidance is used for financial risks, while reduction is used for physical and safety risks",
        "Reduction means paying someone else to take on the risk; avoidance means insuring against it",
        "Avoidance eliminates the activity entirely; reduction keeps the activity but lowers its likelihood or impact",
        "Avoidance is short-term and reduction is long-term, but both keep the activity going exactly as before"
      ],
      "a": 2,
      "r": "Avoidance removes the exposure altogether, while reduction accepts some exposure but works to shrink it."
    },
    {
      "q": "Why might a household choose to accept a risk rather than insure against it?",
      "opts": [
        "When the premium cost consistently exceeds the realistic expected loss, self-insuring (accepting) can be the more rational choice",
        "Accepting a risk means the family agrees to stop thinking about it, which avoids unnecessary worry",
        "Because once a risk has been insured, the family can't also plan for it themselves",
        "When an insurer has refused cover, accepting it is the only legal option left open to the family"
      ],
      "a": 0,
      "r": "Risk acceptance is a deliberate, informed choice when the numbers don't favor transfer or reduction — not the same as ignoring the risk."
    },
    {
      "q": "What is a key reason to review insurance coverage periodically rather than only at renewal?",
      "opts": [
        "Insurers give a discount to households that review their coverage more than once a year",
        "Most insurers require a quarterly review by law, or the policy can be cancelled without notice",
        "Premiums drop if a policy is reviewed mid-year",
        "Life changes (new property, travel patterns, family additions) can create gaps that only show up on review"
      ],
      "a": 3,
      "r": "A policy that fit last year may have real gaps today if circumstances have changed — periodic review catches that."
    },
    {
      "q": "When coordinating travel for a family with young children, what risk factor deserves specific attention beyond standard adult travel planning?",
      "opts": [
        "The destination's weather, since children are more affected by heat and cold than adults",
        "Entertainment: booking flights with seat-back screens and hotels with kids' clubs, so the children stay happy",
        "Age-appropriate safety requirements (car seats, medical needs, supervision) that don't apply to solo adult travel",
        "Seating: making sure the family sits together, which airlines don't guarantee for children"
      ],
      "a": 2,
      "r": "Traveling with children introduces safety and logistics considerations that a purely adult-focused itinerary would miss."
    },
    {
      "q": "A vendor contract renews automatically unless either party gives 60 days' written notice. What's the assistant's key task?",
      "opts": [
        "Decide whether the firm should renew and send the notice if the price has gone up",
        "Wait until the renewal date and then ask the vendor whether cancelling is still possible",
        "Calendar the notice deadline with an early reminder and flag it to the decision-maker",
        "Rewrite the renewal clause so the contract ends on its own instead of renewing"
      ],
      "a": 2,
      "r": "The assistant tracks the notice window and makes sure the decision-maker sees it in time. Deciding to renew and changing clauses are for the executive and attorney; waiting until the renewal date is too late."
    }
  ],
  "discussionQuestion": "Of the four risk categories (Financial, Legal, Operational, Reputational), which one do you think gets the least attention in most households or offices — and why?"
};

const DAY5_EXTRA_LEARNING = {
  "5::Running a Household Like a Business": {
    "t": "The Household Operating System",
    "p": [
      "A master calendar for family, staff schedules, school events, and maintenance — one source of truth, shared with the right people.",
      "A household budget with categories (utilities, staff, maintenance, subscriptions) and monthly reconciliation, just like a business cost center.",
      "A vendor and staff directory with contracts, rates, emergency contacts, and backup providers for every critical service."
    ]
  },
  "5::Procurement and Vendor/Supplier Management": {
    "t": "The Procurement Cycle",
    "p": [
      "Define the need and budget first, then gather at least three quotes for anything non-trivial so price and quality can be compared.",
      "Check references, insurance, and licensing before hiring — especially for anyone working inside the home.",
      "Record terms in writing (scope, price, schedule, cancellation) and review vendor performance at least annually before renewing."
    ]
  },
  "5::When a Vendor Falls Through": {
    "t": "Building a Backup Bench",
    "p": [
      "For each critical service (cleaning, security, childcare, repairs), keep one pre-vetted backup with current contact details and rates.",
      "Test the backup occasionally with a small job so you know they're reliable before an emergency depends on them.",
      "After any failure, record what happened and why — a vendor that fails twice should be replaced, not tolerated."
    ]
  },
  "5::The PA Risk Management Framework": {
    "t": "The Five Risk Categories at a Glance",
    "p": [
      "Financial (fraud, unpaid bills, lapsed insurance) and Legal & Liability (injuries at the home, staff contracts, disputes).",
      "Operational (missed deadlines, travel disruption, vendor failure) and Reputational (privacy leaks, social media exposure).",
      "Physical & Safety (home security, travel safety, emergencies). Map each real incident to all categories it touches — a burglary is physical, financial, and privacy risk at once."
    ]
  },
  "5::The Four Core Risk Strategies": {
    "t": "Avoidance — and How to Choose",
    "p": [
      "Avoidance means not doing the risky thing at all — e.g., skipping a destination under a travel advisory. It's the right choice when the benefit doesn't justify any level of risk.",
      "Choose by comparing likelihood and impact: high impact → transfer or avoid; low impact and low cost → retain; frequent but manageable → reduce.",
      "Most real situations combine strategies: insure the car (transfer), add a tracker (reduce), and accept the deductible (retain)."
    ]
  },
  "5::Travel Risk Management": {
    "t": "Building an Emergency Contact Sheet",
    "p": [
      "Include local emergency numbers, the nearest embassy or consulate, the hotel's direct line, and the travel insurer's 24/7 assistance number.",
      "Add copies of passport and visa pages, medication and allergy notes (stored securely), and the executive's emergency contact at home.",
      "Share it with the traveler and one designated person at home — and keep a printed copy in case phones die or are lost."
    ]
  },
  "5::Lifestyle & Personal Support": {
    "t": "Typical Lifestyle Support Tasks",
    "p": [
      "Gifts and occasions: birthdays, anniversaries, holiday gifts for staff and clients — tracked with dates, budgets, and what was given last year.",
      "Errands and appointments: dry cleaning, car service, medical and personal appointments coordinated around the work calendar.",
      "Events and experiences: restaurant reservations, event tickets, and family celebrations — confirmed in writing and added to the shared calendar."
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[5] = { day: DAY5, extraLearning: DAY5_EXTRA_LEARNING };
