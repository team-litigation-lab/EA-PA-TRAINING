/* Day 5 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "5::Running a Household Like a Business": {
  "p1": {
   "why": "A busy household runs smoothly when you treat it like a small business, with you as the one person everyone calls.",
   "talk": "Think about how many people touch a busy family's life: a nanny, a housekeeper, contractors, school, doctors. If nobody's coordinating, everyone calls Sarah or Elias. Business habits fix that: a plan, a budget, a few simple systems and a regular look at what's working.",
   "walk": [
    "First, bring business discipline home: plan ahead, organize, budget and review.",
    "Next, make yourself the main contact for family, staff and contractors, so nobody has to guess who to call.",
    "Then, set up simple routines for things that repeat, like bills, staff schedules and maintenance.",
    "After that, review how things are going every so often: what's working and what keeps slipping.",
    "Finally, write down the household's standing decisions, so things run the same way even when you're not there."
   ],
   "ask": "What household logistics have you managed before, even just for your own family?",
   "scenario": "In one morning, the gardener texts Sarah, the plumber calls Elias and the nanny emails you, all about the same broken sprinkler that's flooding the side path. How do you become the single point of contact, and what do you set up so this doesn't happen again?"
  },
  "p2": {
   "why": "A shared calendar, a budget and a directory: that's the household's operating system.",
   "talk": "Three tools make a busy household run smoothly. One master calendar that everyone who needs it can see: the family, the staff, school events and maintenance visits. A household budget, split into categories and checked every month, the way a business watches a department's costs. And a directory of every vendor and staff member, with their contracts, rates, emergency numbers and a backup for each important service.",
   "walk": [
    "First, one master calendar for family, staff, school events and maintenance, shared with the right people.",
    "Next, a household budget split into categories and checked monthly, like any business cost center.",
    "Finally, a directory of every vendor and staff member, with contracts, rates, emergency numbers and a backup for each key service."
   ],
   "ask": "Sarah Thorne asks you to take over running the household next week. What are the first three things you set up, and who do you tell that you're now the main contact?",
   "scenario": "You've just taken over the Thornes' household. There's no shared calendar, the budget is 'in Sarah's head' and vendor numbers are scattered across three phones. What do you build in your first week, in what order?"
  }
 },
 "5::Recurring Household Admin: Utilities, Purchasing & Subscriptions": {
  "p1": {
   "why": "If you don't decide before a subscription renews, auto-renew decides for you.",
   "talk": "Recurring admin comes in three flavours. Utilities, like power and water, which can never be allowed to lapse. Purchasing, for work and for home, where it's easy to buy something twice or forget it altogether. And subscriptions, which most people sign up for once and then never think about again, until the charge shows up on the statement.",
   "walk": [
    "First, put every utility payment on a calendar with its real due date.",
    "Next, keep a simple record of what's been bought and when, so nothing gets bought twice or forgotten.",
    "Then, note every subscription's renewal date the day you sign up.",
    "After that, before each renewal, actively decide: keep it or cancel it.",
    "Finally, give all three the same attention, even though none feels urgent on any given day."
   ],
   "ask": "Who here has had a subscription renew without noticing?",
   "scenario": "Reviewing the Thornes' card statement, you find a $299 annual software renewal that nobody remembers signing up for, charged yesterday. What do you do today, and what do you put in place so renewals never surprise the family again?"
  },
  "p2": {
   "why": "Nothing dramatic happens the first time you miss one of these, and that's exactly the trap.",
   "talk": "These tasks fail quietly. Then one day the power gets cut off, or a subscription you forgot renews at three times the introductory price.",
   "walk": [
    "First, recurring admin fails through slow neglect, not one big mistake.",
    "Finally, the fix is simple tracking, done consistently."
   ],
   "ask": "You discover the Thornes pay for three streaming services, two meal-kit subscriptions and a gym nobody uses. How would you review them, and what would you bring to Sarah?",
   "scenario": "The Thornes' water bill went unpaid for two months because the paper bill went to the lake house. Now there's a late fee and a disconnection notice. What's your fix for this bill, and for all the utilities?"
  }
 },
 "5::Household Staff Management": {
  "p1": {
   "why": "Write down what's expected of household staff from day one, because verbal agreements drift.",
   "talk": "Managing household staff is mostly coordination, not bossing people around. Your job is to keep schedules, expectations and communication lined up. The biggest source of friction is fuzzy agreements. By the time there's a disagreement, nobody remembers the original deal the same way. And a schedule that only works if someone stays late every week isn't sustainable.",
   "walk": [
    "First, keep a short written description of each role: hours, main duties and who they report to.",
    "Next, keep a shared calendar of everyone's schedule, so gaps and overlaps are obvious.",
    "Then, have a short, regular check-in with staff, even monthly, to catch small problems early.",
    "Finally, keep emergency contacts and basic medical information on file for each staff member."
   ],
   "ask": "Why might household staff not tell you about a scheduling problem themselves?",
   "scenario": "The Thornes hire a new part-time driver. What goes in his written role description on day one, and who does he report to?"
  },
  "p2": {
   "why": "Many staff won't raise a problem on their own, so you have to ask.",
   "talk": "Politeness or worry about their job keeps people quiet. And remember that household staff are professionals earning a living, not an informal favor.",
   "walk": [
    "First, never let the staff schedule live only in one person's head.",
    "Next, check in proactively instead of waiting for complaints.",
    "Then, treat staff with the same professionalism as any colleague.",
    "Finally, when someone leaves, allow proper handover time, so the household's routines aren't lost."
   ],
   "ask": "The Thornes' housekeeper is going on six weeks of medical leave with two days' notice. What do you write down and hand over, so the replacement doesn't need to ask Sarah a dozen questions in week one?",
   "scenario": "The nanny tells you, only when you ask, that she's been working an extra hour every evening for three weeks because the Thornes come home late. She never mentioned it. What do you do?"
  }
 },
 "5::Home Maintenance & Repair Coordination": {
  "p1": {
   "why": "Most big, expensive repairs started as a small one that nobody scheduled.",
   "talk": "Home maintenance comes in two kinds. Routine jobs you can plan, like servicing the heating or clearing gutters. And surprises, like a burst pipe or a broken fridge. If you treat them the same way, the routine ones get forgotten and the surprises become panics. A maintenance calendar keeps the small things small.",
   "walk": [
    "First, build a maintenance calendar for every system with a recommended service schedule. Skipping service can even void a warranty.",
    "Next, keep a list of trusted tradespeople for each specialty, so a repair doesn't start with a frantic search.",
    "Then, for any repair, get the scope and cost in writing before work starts, even with someone you trust.",
    "Finally, keep warranties and manuals in the Home Binder, so 'is this still covered?' takes seconds."
   ],
   "ask": "Who's your go-to plumber, and how did you find them?",
   "scenario": "Build a maintenance calendar for the Thornes' home: heating, air conditioning, gutters, roof, smoke detectors and the pool. What goes on it, and how often?"
  },
  "p2": {
   "why": "Know your spending limit for repairs before the call, not in the middle of it.",
   "talk": "When something breaks, the first job is judging how urgent it really is; a dripping tap and a smell of gas are worlds apart. We agree ahead of time how much we can approve without checking in, so we're not stuck mid-crisis. We keep photos and notes of bigger repairs for warranties and insurance. And we keep the maintenance calendar alive, because one nobody looks at gives a false sense of safety.",
   "walk": [
    "First, not every repair is equally urgent. A dripping tap and a gas smell are worlds apart.",
    "Next, agree in advance the amount you can approve without checking in.",
    "Then, keep photos and notes of big repairs, for warranties, insurance and any future sale.",
    "Finally, a maintenance calendar nobody looks at is worse than none, because it gives false comfort."
   ],
   "ask": "The heating system's annual service is due, but the family has put it off for three months because 'it's working fine.' What's the real risk, and how do you raise it again without it sounding like nagging?",
   "scenario": "At 9 p.m., the housekeeper texts that there's water coming through the kitchen ceiling. Your approval limit for repairs is $1,000, and the emergency plumber quotes $1,800. What do you do tonight?"
  }
 },
 "5::Lifestyle & Personal Support": {
  "p1": {
   "why": "Your memory can't hold every gift, errand and event; a shared tracker can.",
   "talk": "The core idea is one shared place for errands, gifts and events, each with a deadline and an owner. Handling them on the fly works for a week, and then something important slips.",
   "walk": [
    "First, keep everything in one shared tracker.",
    "Next, log a request the moment it comes in, not when it becomes urgent.",
    "Then, give each item a clear owner, even if that's you.",
    "After that, check the tracker regularly, so nothing arrives as a last-minute panic.",
    "Finally, treat it like any other household system that only works if you actually use it."
   ],
   "ask": "What would fall apart in your own life if you just stopped remembering it?",
   "scenario": "In one conversation, Sarah mentions three things: her sister's birthday next month, a dress that needs altering before a gala and a restaurant booking for her anniversary. How do you make sure none of them depends on your memory?"
  },
  "p2": {
   "why": "Keep a note of what was given last year, so you never repeat a gift.",
   "talk": "Things get dropped in personal support not because anyone is careless, but because memory doesn't scale. So we track three kinds of things. Gifts and occasions, with dates, budgets and what was given last year. Errands and appointments, fitted around the work calendar. And events, like reservations, tickets and family celebrations, each one confirmed in writing.",
   "walk": [
    "First, gifts and occasions: birthdays, anniversaries and holiday gifts, with dates, budgets and last year's gift.",
    "Next, errands and appointments, fitted around the work calendar.",
    "Finally, events and experiences: reservations, tickets and family celebrations, confirmed in writing."
   ],
   "ask": "In one week: Sarah's mother's birthday, the nanny's work anniversary, a client's holiday gift, dry cleaning before a gala and an anniversary dinner booking. Put them in the tracker with owners and deadlines.",
   "scenario": "You're choosing this year's holiday gift for Elias's biggest client. Last year's gift was a bottle of wine. The client has since stopped drinking. What does your tracker need to show, and what do you choose?"
  }
 },
 "5::Creating a Home Binder for a Busy Executive": {
  "p1": {
   "why": "The home binder exists for one moment: when someone else needs critical information and you're not there to tell them.",
   "talk": "Picture the alarm going off while the nanny is home with the children, and you're unreachable. What does she need? A good binder has four parts. How the house runs, with codes, manuals and utility accounts. Family and medical details, like doctors and allergies. Pointers to financial and legal documents. And emergency contacts, organised so anyone can find the right person in seconds.",
   "walk": [
    "First, build the household section: staff contacts, vendors, manuals, alarm and Wi-Fi codes and utility accounts.",
    "Next, add family and medical: doctors, allergies, medications and school details.",
    "Then, add financial and legal information as pointers only: where to find the policy, not the policy number itself.",
    "After that, organize emergency contacts so anyone can find the right person fast.",
    "Finally, test it: could a substitute or a paramedic use it without calling you?"
   ],
   "ask": "If you were unreachable for 24 hours, what would someone else need to know?",
   "scenario": "You're building the Thornes' home binder from scratch. Name one item you'd put in each of the four sections, and one item you'd deliberately leave out."
  },
  "p2": {
   "why": "A binder is judged by whether someone else can use it cold, not by how complete it looks.",
   "talk": "It's tempting to fill a binder with everything. The real test is simpler: can a stranger find what they need, fast?",
   "walk": [
    "First, remember its one purpose: someone else, finding critical information, quickly.",
    "Finally, test it with a person who isn't you."
   ],
   "ask": "You're unexpectedly unreachable for a day, and the Thornes' alarm goes off while the nanny is home with the kids. What does she need to find in the binder in the first two minutes?",
   "scenario": "Test your binder: the nanny has to find the pediatrician's number, the alarm company and the location of the water shut-off valve in under two minutes, without calling you. What would make that possible, and what usually makes it fail?"
  }
 },
 "5::Home Binder: Format, Security & Maintenance": {
  "p1": {
   "why": "Write down where to find the account number, never the account number itself.",
   "talk": "Should the binder be paper or digital? Paper works when the power or internet is down, and for people who aren't comfortable with technology. Digital is easy to update and reach from anywhere. Most households need both: a digital master, with a printed copy for real emergencies.",
   "walk": [
    "First, choose the format based on how it will actually be used.",
    "Next, for most families, keep both: digital as the master and paper as the backup.",
    "Then, never write sensitive numbers, like account numbers, passwords or ID numbers, in the binder. Say where they're kept securely.",
    "After that, update it the moment something changes.",
    "Finally, check now and then that nobody has written a sensitive number in by mistake."
   ],
   "ask": "You're reviewing the Thornes' binder and find the safe combination and a bank account number written on the finance page. What do you change, and where does that information go instead?",
   "scenario": "The Thornes want the binder on a shared tablet in the kitchen and on paper in a drawer. The nanny, housekeeper and driver all need parts of it. How do you set it up, and what never goes in it?"
  }
 },
 "5::Digital Home Binder Tools & Platforms": {
  "p1": {
   "why": "A simple, well-organized tool beats a clever one nobody else can use.",
   "talk": "The right tool depends on who else needs to get in, because a binder only you can open doesn't solve the problem it was built for. Organization matters more than the platform. And not everyone should see everything, so you need a plan for who gets which sections.",
   "walk": [
    "First, if the household already uses a shared workspace, build the binder there, so it's in a place people already check.",
    "Next, use the same four section headings as a paper binder.",
    "Then, set permissions per section. A driver needs the household section, not the family's medical details.",
    "Finally, print or export a backup regularly, in case the tool is down."
   ],
   "ask": "Who in the household needs which section?",
   "scenario": "The Thornes already use Notion for family recipes and school schedules. How would you build the digital binder there, and who gets access to which section?"
  },
  "p2": {
   "why": "Remove a departed employee's access on the day they leave.",
   "talk": "With a digital binder, the biggest risks are about access. If we choose a tool nobody else in the house can use, it's useless the moment we're away. If only one person has the login, that's a single point of failure. And when staff leave, their access has to go the same day. The simple test: ask someone unfamiliar to find something specific, and watch what happens.",
   "walk": [
    "First, don't pick a tool nobody else knows how to use.",
    "Next, never rely on one person's login as the only way in.",
    "Then, review access whenever staff change.",
    "Finally, test it by asking someone unfamiliar to find something specific."
   ],
   "ask": "The Thornes are choosing between a shared Notion workspace they already use and a dedicated home-management app with built-in permissions. What do you need to know about who needs what before recommending one?",
   "scenario": "The Thornes' previous housekeeper left three months ago, and you discover she can still log into the digital binder, which includes the alarm codes. What do you do today, and what process stops it happening again?"
  }
 },
 "5::Procurement and Vendor/Supplier Management": {
  "p1": {
   "why": "Choosing a vendor well is what stops vendors from failing you later.",
   "talk": "This is a sequence, and each step protects the next. It's the proactive side of vendor management, before anything goes wrong.",
   "walk": [
    "First, look at more than one option. The first vendor you find isn't automatically the right one.",
    "Next, compare more than price: reliability, response time and contract terms. The cheapest unreliable vendor costs more in the end.",
    "Then, put it in writing: a real contract or statement of work, not a handshake.",
    "Finally, keep managing it: track performance and renewal dates, and have a backup ready."
   ],
   "ask": "When has the cheapest option ended up costing you more?",
   "scenario": "The Thornes need a new house-cleaning company. The first one you find is cheapest and available tomorrow. What else do you compare, and what goes in writing before they start?"
  },
  "p2": {
   "why": "Anyone who works inside the home gets references, insurance and licensing checked first.",
   "talk": "Choosing a vendor is a cycle, not a single decision. We start by defining what's needed and what the budget is, then get at least three quotes for anything significant. Before hiring, we check references, insurance and licences, especially for anyone who'll be working inside the home. Then we put the scope, price, schedule and cancellation terms in writing, and review the vendor at least once a year.",
   "walk": [
    "First, define the need and budget, then get at least three quotes for anything significant.",
    "Next, check references, insurance and licenses before hiring.",
    "Finally, write down scope, price, schedule and cancellation terms, and review the vendor at least once a year."
   ],
   "ask": "The Thornes need a new landscaping company. Walk us through it: what you'd ask for, what you'd check and what goes in the written agreement.",
   "scenario": "A tree-removal company offers to do urgent work tomorrow for cash, with no written quote. They seem friendly and experienced. What do you check before they step onto the property?"
  }
 },
 "5::Vendor Relationships Beyond the Signature": {
  "p1": {
   "why": "Paying a vendor's invoices on time doesn't mean the vendor is doing a good job.",
   "talk": "Choosing a vendor properly, by really comparing options, is what separates deliberate procurement from just filling a gap. But the work doesn't stop at signing. You keep watching whether they deliver.",
   "walk": [
    "First, compare real options before committing.",
    "Next, read the actual terms, not just the price.",
    "Then, after signing, check whether they're performing, not just whether they're being paid.",
    "After that, track renewal dates like any other recurring admin.",
    "Finally, have a backup ready before you need one."
   ],
   "ask": "What does good vendor management look like after the contract is signed?",
   "scenario": "The Thornes' window cleaner has been paid monthly for a year, but the windows are only cleaned every other visit and Sarah hasn't noticed. How would you have caught this, and what do you do now?"
  },
  "p2": {
   "why": "Signing is the start of the relationship, not the end.",
   "talk": "It's the same thinking as the rest of the household admin. Contract dates, renewal dates and how well a vendor is performing are facts to track, not things to remember. If they sit in the same tracker as the utilities and subscriptions, a slipping service or an unwanted renewal gets spotted in time.",
   "walk": [
    "First, keep watching performance, renewals and backups.",
    "Finally, put contract and renewal dates in the same tracker as other household admin."
   ],
   "ask": "The Thornes' pool service has been paid on time every month, but the pool has turned green twice this summer. What should ongoing vendor management have caught, and what do you do now?",
   "scenario": "The security company contract auto-renewed last month at a higher rate, and nobody noticed. Where should the renewal date have been tracked, and how far ahead?"
  }
 },
 "5::Negotiating Vendor Contracts & Terms": {
  "p1": {
   "why": "Your best negotiating tool is a real alternative lined up before you start.",
   "talk": "Negotiating isn't only about the lowest price. It's about terms that protect the household if something goes wrong. A vendor who knows you have no other option has no reason to budge. And most vendors' standard contracts are more flexible than people think, especially on payment, cancellation and service guarantees.",
   "walk": [
    "First, know what matters most to you, in order: price, timing, flexibility or guarantees.",
    "Next, ask for better terms on at least one thing besides price, like a shorter cancellation notice.",
    "Then, get everything you agree into the written contract.",
    "Finally, renegotiate at renewal instead of letting it roll over automatically."
   ],
   "ask": "Apart from price, what would you ask a vendor for?",
   "scenario": "The landscaping contract is up for renewal at $900 a month. You have two other quotes: $750 and $820. What do you ask the current vendor for, beyond price, before deciding?"
  },
  "p2": {
   "why": "'This price is only good today' is a sales tactic, not a real deadline.",
   "talk": "A few habits make negotiation go better. Price matters, but so do the cancellation and dispute terms, and people often forget those until they need them. 'This price is only good today' is almost always a sales tactic. We keep a short note of what we agreed and why. And we remember that we'll keep working with many of these vendors, so a deal that sours the relationship isn't really a win.",
   "walk": [
    "First, don't negotiate only on price and ignore cancellation and dispute terms.",
    "Next, don't let a vendor rush you with pressure they created.",
    "Then, keep a short note of what you negotiated and why.",
    "Finally, a deal that damages a relationship you depend on isn't really a win."
   ],
   "ask": "A vendor the family has used happily for two years sends a renewal with a 15 percent increase and no explanation. You have one untested alternative. How do you approach the conversation, and what would make you stay or switch?",
   "scenario": "A pool vendor says, 'This discount is only valid if you sign today.' You haven't read the cancellation terms. What do you do?"
  }
 },
 "5::Reading a Contract: The Clauses to Recognize": {
  "p1": {
   "why": "You'll handle contracts every week, and the costly mistakes hide in a few clauses with dates in them.",
   "talk": "We don't decide what a contract should say. That's the attorney's job. But we do need to recognize the parts and pull out the dates and duties. Most contracts have the same building blocks: who the parties are, what's being provided, payment, how long it lasts and whether it renews, how it can be ended, confidentiality, who covers whose losses (that's indemnification), limits on liability, insurance, which state's law applies, and the signatures.",
   "walk": [
    "First, we read the first page for the parties and date, then find the term: start, end and automatic renewal.",
    "Next, we find every notice period and put a reminder in the calendar before each one.",
    "Then we note payment terms and scope, so invoices can be checked.",
    "After that, we write a one-page summary for the file.",
    "Finally, the contract goes to the attorney before signing, with anything unusual flagged."
   ],
   "ask": "Which clause do you think causes the most trouble in everyday office life?",
   "scenario": "A new software vendor sends a contract and asks for it signed today to 'lock in the price.' It's 14 pages. What do you pull out first, and what do you tell Elias?"
  },
  "p2": {
   "why": "Contracts rarely go wrong in the big clauses. They go wrong in a missed date or a wrong signature.",
   "talk": "Check that the person signing actually has authority, usually an officer or someone the company has authorized. Keep the fully signed copy with every attachment in one place. And two traps: missing the auto-renewal notice window, which locks the firm into another year, and writing your summary as if it's legal advice. Our summary is a guide to where things are, not what they mean.",
   "walk": [
    "First, check signing authority.",
    "Next, keep the complete signed copy together.",
    "Then, never miss a renewal notice window.",
    "Finally, keep your summary factual."
   ],
   "ask": "Where would you look to find out who can sign for a company?",
   "scenario": "A three-year catering contract for the firm's events says it 'renews automatically for successive one-year terms unless either party gives 90 days' written notice.' It started March 1, 2024. When is the last day to give notice, and what goes in the calendar?"
  }
 },
 "5::When a Vendor Falls Through": {
  "p1": {
   "why": "When a vendor lets you down, tell the family immediately, with alternatives in the same message.",
   "talk": "The worst thing you can do is try to fix it quietly while the clock runs down. The best thing is to be the first to say what's happened and what you propose to do about it.",
   "walk": [
    "First, tell the household right away.",
    "Next, offer specific alternatives in the same message.",
    "Then, go to your pre-checked backup vendor, not a cold search.",
    "After that, confirm the backup can actually deliver in time, so one failure doesn't become two.",
    "Finally, afterwards, update the vendor records with what happened."
   ],
   "ask": "What would you do in the first five minutes?",
   "scenario": "It's Friday at noon. The catering company for tonight's 12-person dinner at the Thornes' has just cancelled. Write the message you send Sarah in the next five minutes, with alternatives."
  },
  "p2": {
   "why": "Try out your backup vendor before an emergency depends on them.",
   "talk": "The time to find a backup vendor is before we need one. For every critical service, like cleaning, security, childcare and repairs, we keep one checked alternative. Now and then we give that backup a small job, so we know they're actually reliable. And we write down every failure, because a vendor that lets us down twice should be replaced, not tolerated.",
   "walk": [
    "First, keep one checked backup for every critical service, like cleaning, security, childcare and repairs.",
    "Next, give the backup a small job now and then, so you know they're reliable.",
    "Finally, record every failure. A vendor that fails twice should be replaced, not tolerated."
   ],
   "ask": "The caterer for Sarah Thorne's dinner party for 20 cancels at 2 PM on the day. What do you do in the first five minutes, and what does your message to Sarah say?",
   "scenario": "The backup plumber on your list, whom you've never used, fails to show up during an emergency. What should you have done before you needed them?"
  }
 },
 "5::Vendor NDA Management": {
  "p1": {
   "why": "The NDA gets signed first, and access comes second.",
   "talk": "Some vendors see private household or business information, and they should sign a confidentiality agreement before they get that access. But it doesn't end at signing. You need to know who has one, what it covers and whether it still fits the work.",
   "walk": [
    "First, decide which vendors really need an NDA, based on what they'll see.",
    "Next, keep a simple record of who has signed, when and what it covers.",
    "Finally, check it again whenever the vendor's work expands."
   ],
   "ask": "Which household vendors do you think would need an NDA?",
   "scenario": "Three new vendors start this month: a gardener, an IT technician to set up the home network and a personal chef. Which ones need an NDA, and why?"
  },
  "p2": {
   "why": "A promise to sign an NDA later isn't an NDA.",
   "talk": "NDAs aren't a box we tick once and forget. People change, projects change and agreements expire, so we keep them current. And one rule has no exceptions: access comes after the NDA is signed, never before. 'We'll send the paperwork next week' isn't protection.",
   "walk": [
    "First, don't treat NDAs as a one-time box to tick.",
    "Finally, never give access based on a promise that the paperwork will follow."
   ],
   "ask": "A new vendor needs temporary access to the Thornes' home security system for a project lasting several weeks. What do you want in place before you grant that access?",
   "scenario": "The home IT technician's work grows from setting up Wi-Fi to reorganizing the family's personal files. The original NDA only covered network setup. What do you do?"
  }
 },
 "5::The PA Risk Management Framework": {
  "p1": {
   "why": "Most real incidents touch several kinds of risk at once, so look at all of them.",
   "talk": "Risk in a household falls into four groups. Money risk, like a missed insurance premium or fraud. Legal risk, like someone getting hurt on the property or a staff dispute. Everyday operational risk, like a missed deadline or a vendor who doesn't show up. And reputation risk, like a family matter ending up on social media. The trick is that real incidents rarely stay in just one group.",
   "walk": [
    "First, for financial risk, keep an eye on renewals and confirm payments went through.",
    "Next, for legal risk, notice injury, contract or staff issues as they come up.",
    "Then, for operational risk, have backup plans ready before something goes wrong.",
    "After that, for reputational risk, make discretion a daily habit.",
    "Finally, when something happens, check it against all four, not just the obvious one."
   ],
   "ask": "Which of these categories do you think is easiest to overlook?",
   "scenario": "The Thornes' nanny posts a photo of the children in the backyard on her public Instagram, with the house number visible. Which risk categories does this touch, and what do you do?"
  },
  "p2": {
   "why": "A burglary isn't one kind of risk; it's physical, financial and privacy risk all at once.",
   "talk": "Let's add a fifth group: physical safety, meaning home security, travel and emergencies. Now think about a burglary. It's a safety issue, obviously. But it's also a money issue, with insurance claims, and a privacy issue if documents were taken. When something happens, we run it past every group, not just the obvious one, so nothing gets missed.",
   "walk": [
    "First, financial and legal risks: fraud, unpaid bills, injuries at the home and disputes.",
    "Next, operational and reputational risks: disruptions, privacy leaks and social media.",
    "Finally, physical safety: home security, travel and emergencies. Map every incident to every category it touches."
   ],
   "ask": "A delivery driver slips on the Thornes' icy driveway and posts about it on social media. Map it to every risk category it touches, and say what you'd do first.",
   "scenario": "The Thornes' lake house is broken into while they're away. Map it against every risk category: what do you do in the first hour for each?"
  }
 },
 "5::The Four Core Risk Strategies": {
  "p1": {
   "why": "There are only four ways to handle a risk: avoid it, reduce it, insure it or accept it.",
   "talk": "Every risk can be handled in one of four ways. We can avoid it altogether by not doing the risky thing. We can reduce it, with alarms, training or safer habits. We can transfer it, usually by insuring it. Or we can accept it on purpose, when protecting against it would cost more than the risk itself. The skill is choosing the right one for each risk.",
   "walk": [
    "First, avoid: if a risk can reasonably be skipped, skip it.",
    "Next, reduce: if you can't avoid it, lower it, with alarms or safer driving.",
    "Then, transfer: if the money at stake is big, move it to an insurer.",
    "After that, retain: if insuring costs more than the risk itself, accept it on purpose.",
    "Finally, choose the approach for each specific risk, rather than using the same one for everything."
   ],
   "ask": "What's the difference between reducing a risk and retaining it?",
   "scenario": "The Thornes are considering a family ski trip, and their teenage son wants to try back-country skiing. Which risk strategy would you suggest for the back-country part, and what would you suggest for the rest of the trip?"
  },
  "p2": {
   "why": "Most real situations use more than one strategy at once.",
   "talk": "How do we choose? We think about two things: how likely it is, and how bad it would be. If it would be really bad, we insure it or avoid it. If it's small and cheap, we accept it. If it happens often but it's manageable, we reduce it. And most real situations mix them. With a car, we insure it, add a tracker and accept the deductible.",
   "walk": [
    "First, avoidance fits when the benefit doesn't justify any risk, like skipping a destination with a travel warning.",
    "Next, match by likelihood and impact: big impact, transfer or avoid; small and cheap, retain; frequent but manageable, reduce.",
    "Finally, combine them: insure the car, add a tracker and accept the deductible."
   ],
   "ask": "Match each one to a strategy: the Thornes' teenager starts driving, a family trip to a country with a serious travel advisory, a $40 phone screen protection plan, and valuable art in the home.",
   "scenario": "Match a strategy to each risk: a leaky pool fence with young children in the house, a $3,000 painting, the family's annual trip to Europe and a scratch-prone rental car. Explain one choice in detail."
  }
 },
 "5::Insurance & Risk at a Glance": {
  "p1": {
   "why": "Insurance written years ago may not fit the family's life today.",
   "talk": "Families change: they buy property, have children, hire staff and travel more. Their insurance often doesn't keep up. Your job is to track every policy and check twice a year whether the coverage still matches their life.",
   "walk": [
    "First, keep a secure policy tracker: type, insurer, policy number, who's covered, deductible, premium and renewal date.",
    "Next, watch every renewal date, so nothing lapses.",
    "Then, compare what they have with what they now need.",
    "After that, twice a year, ask: new property or car? Marriage or divorce? New dependents? Business changes? More wealth? Tell the broker about every yes.",
    "Finally, treat each yes as a gap to close, not a note for later."
   ],
   "ask": "Could you describe your own insurance coverage in one sentence?",
   "scenario": "Build a one-page insurance summary for the Thornes: home, lake house, three cars and an umbrella policy. What columns does it need, and where do you keep it?"
  },
  "p2": {
   "why": "Every 'yes' on the twice-yearly check is a potential gap in cover.",
   "talk": "Twice a year, we run a quick check. Has the family's wealth grown? Have they bought property? Are they travelling abroad more? Have they hired new staff? Each yes could mean a gap in their insurance. We keep the insurance tracker secure and complete, and we tell the broker about every change, rather than hoping the policy still fits.",
   "walk": [
    "First, review twice a year.",
    "Next, keep the tracker secure and complete.",
    "Finally, tell the broker about every change."
   ],
   "ask": "In the last six months the Thornes bought a lake house, hired a full-time nanny and started traveling abroad every quarter. Run the check: which gaps do you flag?",
   "scenario": "At the six-month check, you learn the Thornes' daughter got her driver's license and the family bought a $40,000 piano. What does that mean for their coverage, and who do you contact?"
  }
 },
 "5::EA/PA Risk Framework: Information Security": {
  "p1": {
   "why": "A confident-sounding request is not the same as a verified one.",
   "talk": "You see more private information than almost anyone around the executive: client matters, finances and family details. So information security is your job, not just IT's. The goal isn't perfect security, which doesn't exist. It's careful, consistent habits, and a clear plan for when something slips.",
   "walk": [
    "First, only access and keep the sensitive information you actually need for the task.",
    "Next, confirm who you're talking to before sharing anything sensitive by phone or email.",
    "Then, use secure channels for sensitive information, like protected documents or portals, never casual texts.",
    "Finally, know what to do if something leaks: stop it spreading, work out how much got out and escalate. Blame can wait."
   ],
   "ask": "How do you confirm someone's identity over the phone?",
   "scenario": "A caller says they're from the Thornes' bank and need you to confirm the last four digits of Elias's card 'to stop fraudulent activity.' They know his full name and address. What do you do?"
  },
  "p2": {
   "why": "Report a near-miss early; it's far easier to contain than a real breach found late.",
   "talk": "Here's the surprising part: most security failures aren't clever hacking. They're people making ordinary mistakes. So we don't assume IT has it covered. We never keep account numbers or passwords in an unprotected document just because it's handy. We report even small slips straight away, because a near-miss is far easier to contain than a breach found weeks later. And we regularly ask who still needs access.",
   "walk": [
    "First, don't assume 'IT handles that.'",
    "Next, never keep account numbers or passwords in an unprotected document just to have them handy.",
    "Then, report even small incidents immediately.",
    "Finally, regularly ask who still needs access to sensitive systems."
   ],
   "ask": "An email that looks like it's from Elias's bank asks you to confirm his account details to clear a 'security flag.' It looks real, but it arrived at an odd time. What do you do before replying?",
   "scenario": "You accidentally emailed the family's insurance summary to the wrong 'Sarah.' It's a near-miss: she replied saying she'd deleted it. What do you still do, and why?"
  }
 },
 "5::EA/PA Risk Framework: Operational Continuity": {
  "p1": {
   "why": "Being the only person who knows how to do something isn't job security; it's a risk.",
   "talk": "Operational continuity means essential things keep happening even when something breaks: you're sick, a system goes down or a key vendor fails. The usual weak point is 'only I know how to do this.' The documents you've been building, like SOPs, the binder and the contact list, are all continuity tools.",
   "walk": [
    "First, list the tasks that would actually break if you were unreachable for 48 hours.",
    "Next, write those processes down briefly, so someone else could do them in an emergency.",
    "Then, have a backup contact for every critical vendor and system.",
    "Finally, create a simple 'if I'm unreachable' plan, and make sure someone knows it exists."
   ],
   "ask": "What would break if you were unreachable for 48 hours?",
   "scenario": "You're the only person who knows how to pay the household staff, reset the alarm and book Elias's recurring medical appointments. List what you'd document first, and who would be your backup."
  },
  "p2": {
   "why": "The best way to test a continuity plan is to have someone else follow it.",
   "talk": "It can feel safe to be the only person who knows how everything works. It isn't. It's a risk for the executive and for us. A continuity plan means writing down how the key things get done, then testing it by having someone else try a routine task with it. And we keep it current, because an out-of-date plan gives false comfort.",
   "walk": [
    "First, making yourself indispensable feels safe, but it's a risk for everyone.",
    "Next, test your documents by having someone try a routine task with them.",
    "Then, keep the plan current. An outdated one gives false comfort.",
    "Finally, this isn't pessimism. It's the same risk thinking applied to your own role."
   ],
   "ask": "You're planning your first two-week vacation in over a year. What do you write down and hand over, so nothing critical slips while you're away?",
   "scenario": "You wrote a continuity plan six months ago. When a temp tries to follow it, the alarm company number is wrong and two vendors have changed. What do you change about how you keep the plan current?"
  }
 },
 "5::EA/PA Risk Framework: Reputational Risks": {
  "p1": {
   "why": "Assume anything you write could one day be seen by people it wasn't meant for.",
   "talk": "Reputational damage spreads faster and lasts longer than most other problems. One bad moment, shared online, can outlive the event by years. Your role is mostly preventive: using discretion and judgment before something becomes public.",
   "walk": [
    "First, make discretion your default for anything that could go public.",
    "Next, look at guest lists, appearances and social posts with reputation in mind, not just logistics.",
    "Then, know who needs to hear first if something goes wrong, and who is allowed to speak publicly.",
    "Finally, control what gets shared, with whom and when."
   ],
   "ask": "Who at your firm is authorized to speak to the press?",
   "scenario": "The Thornes are planning a large garden party. The guest list includes a local politician under investigation and a journalist who wrote critically about the firm. What do you raise, and with whom?"
  },
  "p2": {
   "why": "In a reputational situation, getting it right matters more than getting it fast.",
   "talk": "When reputation is on the line, speed feels important, but a quick wrong response usually does more damage than a short, careful pause. We also assume nothing private stays private; a message can always be forwarded. We know which topics are sensitive for this particular executive. And we don't handle these calls alone. When in doubt, we escalate.",
   "walk": [
    "First, don't rush a public response.",
    "Next, never assume a private message will stay private.",
    "Then, know which topics are sensitive for this particular executive.",
    "Finally, when in doubt, escalate. This isn't a call to make alone."
   ],
   "ask": "A journalist contacts you directly, outside the firm's usual channels, asking for comment on a sensitive matter involving Elias. They're polite but persistent. What do you do, and what do you deliberately avoid?",
   "scenario": "A private text from Elias to a friend, joking about a judge, has been screenshotted and is starting to circulate. Sarah asks you what to do. What are your first steps, and what do you avoid?"
  }
 },
 "5::EA/PA Risk Framework: Physical & Travel Safety": {
  "p1": {
   "why": "Physical safety is the one risk where a gap can't be undone.",
   "talk": "This is about real, physical danger to the executive or family, whether traveling, at events or in daily life. It has the highest stakes of all. Duty of care means knowing where someone is and being able to reach or help them.",
   "walk": [
    "First, always know where the executive is during travel or high-profile events, without being intrusive.",
    "Next, before an unfamiliar or riskier trip, learn the local emergency numbers, the nearest hospital and any advisories.",
    "Then, work with security staff where they exist, not around them.",
    "Finally, keep emergency and basic medical information where you can find it in seconds."
   ],
   "ask": "Where would you find the nearest hospital for Elias's next destination?",
   "scenario": "Elias is speaking at a conference in a city he hasn't visited before. Before he leaves, what safety information do you gather, and where do you keep it?"
  },
  "p2": {
   "why": "Know the limits of your role, and bring in security experts when the risk is real.",
   "talk": "Safety planning isn't paranoia. Even an ordinary trip needs the basics: real emergency numbers, the nearest hospital and a plan for staying in touch. The level of planning should match the risk, and when the risk is real, we bring in professional security instead of improvising. We also agree in advance what happens if someone misses a check-in.",
   "walk": [
    "First, don't dismiss safety planning as paranoia, even for an ordinary trip.",
    "Next, never guess at emergency numbers or hospitals, especially abroad.",
    "Then, for high-risk situations, involve professional security.",
    "Finally, agree in advance what happens if a check-in is missed."
   ],
   "ask": "Elias is attending a public event with heavy media attention, and the venue has only minimal security screening. What do you want arranged beforehand, and who do you involve?",
   "scenario": "Elias's daughter is travelling alone to a summer program abroad. She's agreed to check in by text every evening. On day three, there's no message by midnight. What was agreed in advance, and what do you do now?"
  }
 },
 "5::EA/PA Risk Framework: Financial Controls": {
  "p1": {
   "why": "Every transaction you handle gets documentation, even the small ones.",
   "talk": "You probably approve invoices, manage accounts or handle reimbursements. That means financial controls are part of your job. And they protect you too: clear limits and records mean it's never your word against someone else's.",
   "walk": [
    "First, know your approval limit in actual dollars before you need it.",
    "Next, require paperwork for every transaction: an invoice, a receipt or a written approval.",
    "Then, reconcile recurring spending at least monthly.",
    "Finally, flag anything unusual straight away, even if you're not sure it's wrong."
   ],
   "ask": "What's your approval limit, in dollars?",
   "scenario": "A new pool vendor sends an invoice for $1,250 and asks to be paid to a personal account, 'to save on bank fees.' Your limit is $1,500. What do you check before paying, and what do you do?"
  },
  "p2": {
   "why": "Urgency plus an unusual channel is the classic pattern behind financial fraud.",
   "talk": "Fraudsters rely on two things: urgency and an unusual channel. 'Wire this today, and keep it quiet', sent by text or from a slightly different email address. So the rule is that urgency never lets us skip a check. If a money request doesn't fit the usual pattern, we confirm it another way, like a phone call to a known number, even if that slows things down. And we keep approval records tidy, so any audit is simple.",
   "walk": [
    "First, don't skip checks because something seems urgent. Urgency is the fraudster's favorite tool.",
    "Next, never act on a money request that came through an unusual route, like a text or a slightly-off email address.",
    "Then, keep approval records organized, so an audit is simple.",
    "Finally, if a request doesn't fit the usual pattern, confirm it another way, even if that slows things down."
   ],
   "ask": "An email that seems to be from Elias asks you to urgently wire money to a vendor for a time-sensitive deal and to keep it quiet. The tone sounds like him, but something feels off. What do you do before anything else?",
   "scenario": "A text from an unknown number says: 'It's Sarah, new phone. Please send $4,000 to this account for the kitchen contractor, I'm in a meeting.' What do you do in the next ten minutes?"
  }
 },
 "5::Private Expense Audit": {
  "p1": {
   "why": "Review the household's spending every month, not just when something looks wrong.",
   "talk": "Processing each charge as it comes in isn't the same as reviewing them. Errors and odd charges are much easier to spot when you look at a month together. It's the same reconciliation habit from financial controls, applied to the family's personal spending.",
   "walk": [
    "First, set a regular review, usually monthly.",
    "Next, compare what was charged with what you expected: subscriptions, contracts and staff pay.",
    "Finally, flag anything unclear rather than assuming it's fine."
   ],
   "ask": "What would you compare the charges against?",
   "scenario": "You're doing the Thornes' monthly spending review. Compare the card statement against what: subscriptions, vendor contracts and what else? What would make you stop and flag something?"
  },
  "p2": {
   "why": "A family's private finances deserve the same care as the firm's.",
   "talk": "Being trusted with someone's personal money is a big responsibility. It's tempting to treat household spending as less serious than the firm's, but to the family it's every bit as important. So we review it with the same care, and we keep their private financial records as securely as any confidential client file.",
   "walk": [
    "First, don't treat personal expenses as lower stakes than business ones.",
    "Finally, keep private financial records as securely as any confidential file."
   ],
   "ask": "During a routine review, you find a recurring $89 monthly charge you don't recognize. What do you do before raising it with the family?",
   "scenario": "The monthly review shows a $450 charge at a jewellery store that nobody has mentioned. How do you raise it without implying anyone did something wrong?"
  }
 },
 "5::Travel Risk Management": {
  "p1": {
   "why": "Travel safety has three phases, before, during and after, and each has its own job.",
   "talk": "Think of any trip in three stages. Before it, we confirm travel insurance and medical cover abroad, and for high-profile trips we register with the embassy. During it, the traveller has an emergency contact sheet, copies of key documents and safe Wi-Fi habits. And after it, we reconcile expenses and file any claims while the details are still fresh.",
   "walk": [
    "First, before: confirm travel insurance and international medical cover, and register with the embassy for high-profile trips.",
    "Next, during: keep an emergency contact sheet, copies of documents and safe Wi-Fi habits.",
    "Finally, after: reconcile expenses and file any claims while the details are fresh."
   ],
   "ask": "Does anyone have a trip coming up we can use as an example?",
   "scenario": "The Thornes are going on a two-week holiday to Japan. Walk through what you do before, during and after the trip to keep them safe and the paperwork in order."
  },
  "p2": {
   "why": "Keep a printed copy of the emergency sheet, in case the phone dies.",
   "talk": "The emergency contact sheet is the one document we hope nobody needs. It holds the local emergency numbers, the nearest embassy, the hotel and the insurer's 24-hour line, plus copies of the passport and visa pages, medical notes and a contact back home. We share it with the traveller and one person at home. And there's a printed copy, because phones die at the worst moments.",
   "walk": [
    "First, include local emergency numbers, the nearest embassy, the hotel and the insurer's 24-hour line.",
    "Next, add copies of passport and visa pages, medical notes and a contact at home.",
    "Finally, share it with the traveler and one person at home, and carry a printed copy."
   ],
   "ask": "Elias is taking his family to Italy for ten days. Let's build the emergency contact sheet together: what goes on it, and who gets a copy?",
   "scenario": "Elias is in Mexico City and his phone has been stolen. What should already be on his printed emergency sheet, and who does he call first?"
  }
 },
 "5::Handling a Travel Claim": {
  "p1": {
   "why": "When something goes wrong on a trip, the order is safety, evidence and never admitting fault.",
   "talk": "A travel claim isn't just paperwork; it's a risk event. Your role has three parts: coordinator, keeper of the documents and link to the executive.",
   "walk": [
    "First, treat it as a risk event that needs an organized response.",
    "Next, make sure everyone is safe, and call emergency services if needed, before anything else.",
    "Then, preserve evidence immediately: photos, damaged items, report numbers and witness details.",
    "After that, never admit fault on the executive's behalf, however it looks in the moment.",
    "Finally, only once things are safe, move on to the forms and the claim."
   ],
   "ask": "Elias's rental car is rear-ended in Lisbon, and the other driver insists it was his fault. He calls you from the roadside. What do you tell him to do, and in what order?",
   "scenario": "Sarah calls from a hotel in Rome: her luggage, with the children's medication inside, never arrived. Walk through what she does now for safety, evidence and the claim, in that order."
  }
 },
 "5::International Travel Risk & Duty of Care": {
  "p1": {
   "why": "Duty of care means knowing where a traveler is and being able to reach them if something goes wrong.",
   "talk": "International travel brings risks home travel doesn't: political unrest, weaker health systems, unfamiliar laws and language barriers in an emergency. The before, during and after approach still works, but each part needs more depth. And the riskier the place, the more planning has to happen before departure.",
   "walk": [
    "First, check official travel advisories before booking, not just before leaving.",
    "Next, register the trip with the government's travel program where one exists.",
    "Then, confirm international health cover, and for riskier places, medical evacuation insurance. It's often not in standard policies and can cost a fortune without it.",
    "Finally, make a destination emergency card: embassy, hospital, local emergency numbers and a check-in schedule."
   ],
   "ask": "Does standard travel insurance usually cover medical evacuation?",
   "scenario": "Elias is attending a two-day arbitration in a country with a moderate travel advisory. Before booking, what do you check and register, and what goes on his emergency card?"
  },
  "p2": {
   "why": "Decide in advance how long a silence has to be before you act.",
   "talk": "An international trip isn't a domestic trip plus a passport. For higher-risk places, we bring in a security team or specialist. We keep scans of every important document somewhere we can reach online, separate from the originals. And we agree beforehand how long a silence has to be before someone acts, so nobody's left wondering whether to worry.",
   "walk": [
    "First, international prep isn't the domestic checklist plus a passport.",
    "Next, for high-risk places, involve a security team or specialist.",
    "Then, keep scans of every key document reachable online, separate from the originals.",
    "Finally, agree beforehand what happens if a check-in is missed."
   ],
   "ask": "Elias is heading to an arbitration in a country with a moderate travel advisory and waves off extra precautions because he's been before. What do you want in place before he leaves, and how do you raise it while respecting his experience?",
   "scenario": "Elias's daily check-in during an international trip is set for 8 p.m. local time. It's now 10 p.m. with no word and his phone goes to voicemail. What was your agreed plan, and what do you do next?"
  }
 },
 "5::Mid-Point 1-on-1 Performance Review": {
  "p1": {
   "why": "We're halfway through, and this is the best moment to fix anything that still feels shaky.",
   "talk": "By Day 5 you've covered and practiced enough for an honest conversation about how it's going. It's a two-way conversation, not a verdict: a chance to say what's unclear as much as a chance to hear feedback.",
   "walk": [
    "First, come in with a specific, honest view of which days and tools feel solid and which still feel shaky.",
    "Next, use the real data: Knowledge Check scores, Practice Lab history and roleplay results.",
    "Finally, leave with one specific focus for the second half, not a vague 'try harder.'"
   ],
   "ask": "Which day or tool feels shakiest for you right now?",
   "scenario": "Your Knowledge Check scores are strong, but your Day 3 travel exercise scored low and you ran out of time on the Day 4 CRM task. What do you bring to your 1-on-1, and what focus do you ask for?"
  },
  "p2": {
   "why": "Raise it now, while there's still time to fix it.",
   "talk": "This is the halfway point, and that makes it valuable. Anything that still feels shaky can be fixed in the second half, but only if we talk about it now. So this isn't a formality to get through. If something specific is hard, the most useful thing you can do is say so plainly.",
   "walk": [
    "First, don't treat this as a formality.",
    "Finally, if something specific is hard, say so directly."
   ],
   "ask": "Look honestly at Days 1 to 5. Which day or Practice Lab tool would you most like to revisit before we move on, and what exactly still feels unclear?",
   "scenario": "A trainee says, 'Everything's fine,' in their mid-point review, but their Practice Lab history shows repeated low scores on email tasks. If you were the trainer, what would you ask, and what would you agree together?"
  }
 }
});
