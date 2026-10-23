/* Day 6 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through).
   Every topic is written in the trainer's style: icebreaker (a quick game to open) · teaser (the curiosity gap
   before the reveal) · jargon ([{term, hint}] for the trainer to explain) · story (a real-life incident from the field) ·
   contrast ({lazy, excellent}) · outcome (where it lands: deadlines, the case, the settlement) ·
   ask (calls on trainees by name, "[Name]") · mystery (the closing challenge, in place of scenario). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "6::Choosing a Business Structure": {
  "p1": {
   "icebreaker": "Game: 'Guess the structure.' I'll describe three businesses, you shout 'Sole!', 'LLC!' or 'Corp!' One: a freelance photographer working alone, no plans to grow. Two: two friends opening a café, worried about being sued. Three: a tech start-up about to take money from outside investors. Loudest right answer wins.",
   "teaser": "One of those three answers is wrong more often than you'd think, and it's the one that sounds the safest. By the end of this slide you'll know why.",
   "why": "The type of business entity someone picks decides how exposed they are personally, how they're taxed and how much paperwork follows.",
   "talk": "You won't be the one choosing the structure. The attorney and accountant will. But you'll gather what they need to choose well. A sole proprietor is simplest but personally liable for everything. An LLC separates the person from the business. A corporation is more formal and suits outside investors. The right one depends on goals, where the business will operate and where it's heading.",
   "walk": [
    "First, ask what the business is trying to achieve: protection from liability, a certain tax treatment, growth.",
    "Next, list every state it will actually operate in, not just where the office is.",
    "Then, compare the options against those goals: liability, tax and ongoing paperwork.",
    "After that, think about the next two years. A structure that fits today might not fit after expansion.",
    "Finally, write down why the choice was made, not just what was chosen."
   ],
   "jargon": [
    {
     "term": "Business entity",
     "hint": "the legal form a business takes, like an LLC or a corporation"
    },
    {
     "term": "Sole proprietor",
     "hint": "one person running a business with no legal separation from it"
    },
    {
     "term": "LLC (Limited Liability Company)",
     "hint": "a business form that keeps the owner's personal assets separate"
    },
    {
     "term": "Corporation",
     "hint": "a formal business owned through shares and run by a board"
    },
    {
     "term": "Personal liability",
     "hint": "the owner's own house and savings can be used to pay business debts"
    }
   ],
   "story": "A common pattern from the field: a client asked for 'the quickest setup' for a new side business, and an assistant passed the request on with only the business name and a phone number. The attorney had to call the client back three times for basics: how many owners, which states, any investors. The setup was delayed by two weeks, and the client felt the firm was disorganised. A one-page intake list sent with the first email would have saved all three calls.",
   "ask": "[Name], have you ever set up a business entity, or helped someone who did? What surprised you? [Name], what's one question you'd want answered before anyone picks a structure?"
  },
  "p2": {
   "why": "The attorney and accountant make the call; your job is to hand them everything they need to make it well.",
   "talk": "Here's the plain-English version of the main options. A sole proprietorship is the simplest to start, but the owner is personally responsible for every debt and every claim. An LLC keeps the owner's personal assets separate from the business and is flexible on tax, which is why so many small firms choose it. A corporation is more formal, with a board, bylaws and shares, and it's often the choice when outside investors are coming in.",
   "walk": [
    "First, sole proprietorship: easiest to start, but the owner is personally on the hook for every debt and claim.",
    "Next, LLC: keeps personal and business liability apart, with flexible tax treatment. A common choice for small firms.",
    "Finally, corporation: formal, with a board, bylaws and shares. Often chosen when outside investment is coming."
   ],
   "contrast": {
    "lazy": "Forwards the client's email to the attorney with 'He wants the simplest setup, can you advise?' and waits.",
    "excellent": "Sends the attorney a short intake: 'Two owners, landscaping, Texas only for now, one truck and two seasonal workers, no investors, main worry is being sued over property damage. Accountant is copied.' The attorney can recommend in one conversation."
   },
   "outcome": "The structure decides whose money is at risk when something goes wrong. If the facts gathered are thin, the owner can end up as a sole proprietor with his house exposed in the first lawsuit. Good intake means the right protection is in place before the claim arrives, not after.",
   "ask": "[Name], Elias wants a separate entity for his speaking and consulting work, which may expand to two more states next year. What do you gather before the attorney and accountant recommend a structure? [Name], which item on that list would you chase first?",
   "mystery": "The case of the exposed house. A client set up as a sole proprietor three years ago and is now being sued over a contract. His house and savings are exposed. In pairs, you have four minutes: find the clue that shows why his structure was the problem, explain what an LLC would have changed, and bring back the list of information the attorney will want from you now."
  }
 },
 "6::Entity Formation Step-by-Step": {
  "p1": {
   "icebreaker": "Game: 'Line it up.' I need five volunteers. Each of you gets a card: 'Name check,' 'File with the state,' 'Get the tax ID,' 'Operating agreement,' 'Open bank account.' Without talking, put yourselves in the right order. Everyone else, thumbs up when you think they've got it.",
   "teaser": "There's one card in that line that people always put too early. It looks like the finish line, and it isn't. Watch for it.",
   "why": "Forming a company is a sequence, and a skipped step quietly blocks the next one.",
   "talk": "People think forming a business is one filing. It's actually several steps in order: choose the structure, check the name, file with the state, get a tax ID number and write the internal rules. Miss one early, and later something urgent, like opening a bank account, suddenly can't happen.",
   "walk": [
    "First, check the name is available and not confusingly close to another company's.",
    "Next, file the formation documents with the state, and confirm they were approved, not just received.",
    "Then, apply for the federal tax ID, the EIN. The bank needs it before opening an account.",
    "Finally, complete the internal rulebook, the operating agreement or bylaws, even though the state never sees it."
   ],
   "jargon": [
    {
     "term": "Formation documents",
     "hint": "the papers filed with the state to create the company"
    },
    {
     "term": "EIN (Employer Identification Number)",
     "hint": "the company's federal tax ID number from the IRS"
    },
    {
     "term": "Operating agreement / bylaws",
     "hint": "the company's internal rulebook for how it's run"
    },
    {
     "term": "Name availability search",
     "hint": "checking the state database that no one else has the name"
    }
   ],
   "story": "This happens in real offices: an assistant filed formation papers the same day she was asked, proud of the speed. A week later the state rejected them because a company with a nearly identical name already existed. The client had already printed business cards and ordered signage. A five-minute search of the state database before filing would have caught it.",
   "ask": "[Name], why can't you open a business bank account the day the state approves the filing? [Name], what would you need in your hand before you walk into the bank?"
  },
  "p2": {
   "why": "State approval isn't the finish line.",
   "talk": "The state approving the company feels like the finish line, but it isn't. Without a tax ID and the internal rules, the company can't really operate; the bank won't even open an account. So we keep going past the filing, keep every formation document in one folder from day one, because banks and lenders ask for them again and again, and set up the registered agent properly so filings aren't rejected.",
   "walk": [
    "First, don't stop at the state filing. Without the tax ID and internal rules, the company isn't really ready.",
    "Next, keep every formation document in one folder from day one. Banks and lenders ask for them again and again.",
    "Finally, set up the registered agent properly at the start. Without one, filings can be rejected."
   ],
   "contrast": {
    "lazy": "'Good news, Elias, the state approved Thorne Advisory LLC!' Then nothing else happens until the bank asks for an EIN.",
    "excellent": "'The state approved Thorne Advisory LLC today. EIN application goes in this afternoon, operating agreement draft is with the attorney, registered agent is confirmed. Bank appointment pencilled for Thursday once the EIN arrives. Everything is in the formation folder.'"
   },
   "outcome": "A company that exists on paper but can't bank, invoice or sign properly is a company that loses deals. Clients and lenders notice missing documents, and a missing registered agent can mean a filing is rejected or legal papers are never received. The order of steps protects both the timeline and the owner.",
   "ask": "[Name], Elias's new consulting company was approved by the state yesterday, and he wants a bank account 'as soon as possible.' The tax ID hasn't been applied for yet. What do you tell him about the order of steps and a realistic timeline? [Name], how would you word that so he doesn't feel blocked?",
   "mystery": "The case of the company that can't move. The state approved the new company two weeks ago. The bank says it can't open an account, the operating agreement is still a draft and nobody knows who the registered agent is. In teams of three, you have five minutes: find the three missing steps, put them in order and bring back the one-paragraph status update you'd send Elias today."
  }
 },
 "6::Federal/State/Financial Infrastructure": {
  "p1": {
   "icebreaker": "Game: 'Real or fake?' I'll read three statements, thumbs up for real, thumbs down for fake. One: the federal tax ID is free from the IRS. Two: forming a company automatically registers it for state tax. Three: an owner can pay business bills from a personal account with no consequences. Show me your thumbs.",
   "teaser": "One of those three is the mistake new owners make most often, and it can quietly undo the whole reason they formed the company. Keep an eye out for it.",
   "why": "A newly formed company isn't ready to operate until its tax IDs, registrations and bank account are in place.",
   "talk": "Forming the company makes it legal. Making it work needs three more layers: federal, with the IRS; state, with tax and labor agencies; and banking. And keeping business and personal money completely separate from day one is what protects the owner.",
   "walk": [
    "First, get the federal tax ID straight after formation. It's free from the IRS and needed for almost everything else.",
    "Next, register with the state tax agency, and the labor agency if there'll be employees.",
    "Then, open a separate business bank account, and never run business money through a personal one.",
    "After that, set up simple bookkeeping before the first transaction.",
    "Finally, if there'll be employees, register for payroll taxes before the first paycheck."
   ],
   "jargon": [
    {
     "term": "IRS",
     "hint": "the US federal tax agency"
    },
    {
     "term": "State tax agency",
     "hint": "the state office that handles sales and business taxes"
    },
    {
     "term": "Labor agency",
     "hint": "the state office for employer registration and unemployment insurance"
    },
    {
     "term": "Payroll taxes",
     "hint": "taxes withheld and paid on employees' wages"
    }
   ],
   "story": "A real pattern from the field: a small company hired its first employee and ran the first payroll before anyone registered for payroll taxes with the state. The penalties and back-filing took weeks to sort out, and the new hire's paperwork had to be redone. Nobody had been careless on purpose; there just wasn't a checklist. Registering before the first paycheck would have cost nothing.",
   "ask": "[Name], is state tax registration automatic when a company is formed? [Name], if it isn't, when should it happen?"
  },
  "p2": {
   "why": "Mixing personal and business money, even once, weakens the owner's legal protection.",
   "talk": "Setting up a business properly means keeping its money completely separate from the owner's personal money, from the very first transaction. Mixing them, even once for convenience, can weaken the legal protection that the business structure is supposed to give. State tax registration is also a separate step that doesn't happen automatically, and each state where the business genuinely operates may need its own.",
   "walk": [
    "First, keep the separation absolute from the first transaction.",
    "Next, state tax registration is a separate step, never automatic.",
    "Then, keep copies of every registration in the permanent file.",
    "Finally, each state where the business really operates may need its own registration."
   ],
   "contrast": {
    "lazy": "'No problem, I'll just put it on your personal card and we'll sort it out later.'",
    "excellent": "'The business account opens Wednesday. Can the vendor wait two days? If not, let's document it properly: the accountant records it as a loan from you to the company, with the receipt in the permanent file, and repaid from the business account on day one.'"
   },
   "outcome": "If business and personal money are mixed, a court can decide the company isn't really separate from its owner. That's when a claim against the business reaches the owner's house and savings. One 'just this once' payment can become the other side's best evidence and weaken the client's position in any settlement.",
   "ask": "[Name], Elias's new consulting company has its tax ID and a bank account opening this week. He paid the attorney's invoice on his personal card 'to get it done faster' and plans to pay himself back. What's the risk? [Name], how do you help him before it becomes a habit?",
   "mystery": "The case of the 'just this once' payment. Elias paid the new company's first vendor invoice from his personal account because the business bank account wasn't open yet. In pairs, three minutes: find the risk hidden in that one payment, decide how to fix the record so it's clean, and bring back the exact note you'd put in the file."
  }
 },
 "6::Operating Agreements & Corporate Bylaws Basics": {
  "p1": {
   "icebreaker": "Game: 'Stand if it's in there.' Stand up if you think this belongs in an operating agreement. Who owns what share. How votes work. The company's logo colours. What happens when an owner leaves. Who gets the corner office. How disputes get settled. Sit down, and look who stood up for the logo.",
   "teaser": "This document never gets filed with the state, so people treat it as optional. Yet it's the very first thing one important outsider asks for. Who? We'll get there.",
   "why": "Without an internal rulebook, a company falls back on the state's generic rules, which are rarely what the owners wanted.",
   "talk": "An operating agreement for an LLC, or bylaws for a corporation, sets out how decisions get made, what happens when an owner leaves and how disputes are settled. It isn't filed with the state, but it's the first thing a lender, investor or court asks to see.",
   "walk": [
    "First, make sure it covers ownership shares, voting, how big decisions are approved and what happens when an owner leaves.",
    "Next, get it properly signed by every owner, not just drafted.",
    "Finally, keep the signed original safe, with the other formation records."
   ],
   "jargon": [
    {
     "term": "Operating agreement",
     "hint": "an LLC's internal rulebook, signed by the owners"
    },
    {
     "term": "Bylaws",
     "hint": "a corporation's internal rulebook"
    },
    {
     "term": "Default state rules",
     "hint": "the generic rules the law applies when a company has none of its own"
    },
    {
     "term": "Ownership shares",
     "hint": "the percentage of the company each owner holds"
    }
   ],
   "story": "This happens in real offices: a firm sent a lender what it thought was the signed operating agreement. It was the final draft, unsigned, saved under a file name that said 'FINAL.' The lender paused the loan until a signed copy turned up, and it took a week to collect signatures from an owner who was travelling. A 'SIGNED' folder with only executed originals would have prevented it.",
   "ask": "[Name], what's the first document a lender would ask to see, and why that one? [Name], where would you keep the signed original so you can find it in five minutes?"
  },
  "p2": {
   "why": "A side email isn't an amendment.",
   "talk": "Two traps catch people here. The first is using a generic template that doesn't match who actually owns what; it causes confusion exactly when it matters, like during a dispute or a sale. The second is changing things informally. If a partner leaves or decision-making changes, the document itself has to be formally updated. An email agreeing to it isn't enough.",
   "walk": [
    "First, a generic template that doesn't match the real ownership creates confusion exactly when it matters most.",
    "Finally, any change to ownership or decision-making needs a formal update to the document itself."
   ],
   "contrast": {
    "lazy": "Files the 'Everyone agreed, OK' email chain in the company folder and considers the ownership change done.",
    "excellent": "Flags it to the attorney: 'The owners agreed by email to change shares to 20/80, but the operating agreement still says 50/50. Shall I prepare a formal amendment for all owners to sign? I've marked the current version as out of date in the file.'"
   },
   "outcome": "When owners fall out, the signed document is what the court reads, not the friendly emails. An agreement that doesn't match reality can cost an owner their share in a sale, or hand the other side leverage in a dispute. A signed amendment today avoids a court deciding who owns what later.",
   "ask": "[Name], a lender asks for the operating agreement, and the one on file is three years old and doesn't reflect a partner who left last year. What's the risk? [Name], what do you do before sending anything?",
   "mystery": "The case of the 20 percent partner. A partner emails the other owners: 'I'm stepping back to 20 percent, OK?' Everyone replies 'OK.' The operating agreement still says 50/50. In teams, four minutes: decide whether the change is actually done, find the clue that proves it, and bring back the steps that have to happen, in order, to make it official."
  }
 },
 "6::Multi-State Registration & Foreign Qualification": {
  "p1": {
   "icebreaker": "Game: 'Does it count?' Shout 'Counts!' or 'Doesn't!' Does the company have to register in a state if it has: one remote employee there? A leased office there? A single client there it emailed once? A warehouse there? Let's hear it.",
   "teaser": "The word 'foreign' on this slide has nothing to do with other countries. Once you see what it really means, you'll spot this risk everywhere.",
   "why": "Hiring just one employee in a new state can mean the company has to register there.",
   "talk": "A company is only automatically allowed to do business in the state where it was formed. Anywhere else, it needs a separate registration called foreign qualification. And 'doing business' isn't just having an office. An employee, a lease or a regular presence can all count. Operating without it can mean the company can't enforce its contracts there.",
   "walk": [
    "First, list every state where the company has employees, property or a regular presence.",
    "Next, file the registration, called a certificate of authority, in each one.",
    "Then, appoint a registered agent in every one of those states.",
    "Finally, track each state's own annual reports and fees from then on."
   ],
   "jargon": [
    {
     "term": "Foreign qualification",
     "hint": "registering a company in a state other than the one it was formed in"
    },
    {
     "term": "Certificate of authority",
     "hint": "the state's permission for an out-of-state company to do business there"
    },
    {
     "term": "Doing business",
     "hint": "having enough presence in a state that it requires registration"
    },
    {
     "term": "Registered agent",
     "hint": "the official contact who receives legal papers for the company in that state"
    }
   ],
   "story": "A real pattern from the field: a company hired a remote salesperson in a new state, and HR handled the hiring paperwork perfectly. Nobody told the legal team. A year later, the company tried to enforce a contract in that state and was told it couldn't until it registered and paid back fees and penalties. A one-line rule, 'any new hire in a new state goes to legal first,' would have caught it.",
   "ask": "[Name], what do you think counts as 'doing business' in a state? [Name], can you think of a case that's on the edge?"
  },
  "p2": {
   "why": "The home-state filing doesn't cover the rest of the country.",
   "talk": "Registering a company in its home state only covers that state. Once the firm hires someone or does regular business somewhere else, it may need to register there too. This is one of the gaps that compliance audits find most often. The fix is simple: one tracker listing every state, its registered agent and its deadlines, so nothing depends on someone remembering.",
   "walk": [
    "First, don't assume one filing covers everywhere.",
    "Finally, keep one tracker with every state, its registered agent and its deadlines."
   ],
   "contrast": {
    "lazy": "'We're registered in Texas, so we're fine.' The new states live in nobody's calendar.",
    "excellent": "One shared tracker: state, date qualified, registered agent and contact, annual report due date, fee, owner, status. Every new hire or lease in a new state triggers a line in it before the start date."
   },
   "outcome": "A company that isn't registered where it operates may not be able to enforce its contracts there. If a client in that state refuses to pay, the firm can't simply sue until it registers and pays penalties. That delay costs leverage, and it's often exactly when the other side is hoping you'll settle for less.",
   "ask": "[Name], the firm just hired a remote employee in a state where it has never operated. What needs to happen before their start date? [Name], who do you involve?",
   "mystery": "The case of the forgotten states. The firm is registered in Texas, has a small office in Georgia for one attorney, two remote staff in Arizona, and registered in three new states last year that nobody is tracking. One annual report is due next month. In pairs, five minutes: find every state that needs attention, and bring back the tracker columns and the first three lines you'd fill in today."
  }
 },
 "6::Staying in Good Standing": {
  "p1": {
   "icebreaker": "Game: 'Once or forever?' I'll say a task. Hold up one finger if you do it once, wave your whole hand if it comes round again. Forming the company. Filing the annual report. Renewing the business licence. Getting the EIN. Paying state fees. Go.",
   "teaser": "Companies almost never lose good standing through a big dramatic event. It's something much more boring, and that's exactly why it catches people. You'll see.",
   "why": "Staying in good standing is never finished; it's a set of filings and renewals that come round again and again.",
   "talk": "Good standing means the state considers the company up to date. Lose it, and the company can be blocked from signing contracts, from some bank actions and even from suing in that state. It slips through missed renewals, not dramatic events.",
   "walk": [
    "First, put every filing and renewal date on a recurring calendar.",
    "Next, set reminders well before each deadline, so there's time to fix problems.",
    "Then, if something has lapsed, tell the owner immediately and start fixing it the same day.",
    "After that, check whether the requirements have changed since last time.",
    "Finally, keep a simple status record for each company, so a lapse gets caught in routine review."
   ],
   "jargon": [
    {
     "term": "Good standing",
     "hint": "the state's record that the company is up to date with filings and fees"
    },
    {
     "term": "Certificate of good standing",
     "hint": "an official document proving the company is up to date"
    },
    {
     "term": "Lapse",
     "hint": "when a filing or licence runs out because it wasn't renewed"
    }
   ],
   "story": "A common pattern from the field: the state moved its annual report to a new online portal, and the reminder letter went to an old address. The company missed the filing and lost good standing just as it was closing a bank loan. The lender asked for a certificate of good standing, and the deal slipped by three weeks. Checking each state's requirements every year, not assuming last year's process, would have caught it.",
   "ask": "[Name], why is it risky to assume last year's renewal process still applies? [Name], how would you check that it hasn't changed?"
  },
  "p2": {
   "why": "Losing good standing can cost the company the right to sue in that state.",
   "talk": "'Good standing' just means the state considers the company up to date. Keeping it takes a few regular chores. Annual reports filed on time, with the current officers and addresses. State taxes and fees paid. A registered agent in every state where the company is registered. And business licences renewed before they run out. Miss one, and the company can lose rights it didn't know it was relying on.",
   "walk": [
    "First, annual reports filed on time, with current officers and addresses.",
    "Next, state taxes and fees paid, and a registered agent in every state.",
    "Finally, business licenses and permits renewed before they expire."
   ],
   "contrast": {
    "lazy": "Assumes everything is fine because nobody has complained, and finds out when the bank asks for a certificate.",
    "excellent": "Before the bank loan, pulls a good standing check for each of Elias's three companies from each state's website, saves the results with today's date, and reports: 'Two are current. One shows a missed report; I've started the fix and here's the timeline.'"
   },
   "outcome": "A company out of good standing can be blocked from suing in that state. If it needs to chase a supplier or defend a contract, it has to fix its status first, while the clock runs. The other side knows that, and it weakens the company's hand right when it needs to be strongest.",
   "ask": "[Name], you discover the firm's city business license expired ten days ago. Who do you tell, and what do you do today? [Name], what do you change so it can't happen again?",
   "mystery": "The case of the Nevada lawsuit. One of Elias's companies lost good standing in Nevada eight months ago because an annual report wasn't filed. Now it wants to sue a supplier there. In teams, four minutes: find the problem that stops the lawsuit, list the fix in order, and bring back the check you'd run on his other companies before the bank loan."
  }
 },
 "6::Annual Report & Franchise Tax Deadlines Across Jurisdictions": {
  "p1": {
   "icebreaker": "Game: 'Same day or different?' Shout 'Same!' or 'Different!' Do all US states have the same annual report deadline? Do they all charge the same fee? Do they all give a grace period? Do they all send you a reminder you can rely on? Good.",
   "teaser": "There's one word on this slide that most people treat as the end of the job, and it's actually only halfway. Spot it before I say it.",
   "why": "Submitted isn't the same as accepted, so confirm every filing went through.",
   "talk": "Every state sets its own deadline for annual reports and franchise taxes. There's no single national date. And missing one can cost good standing in that state. Some states have grace periods; many don't. So treat every deadline as firm.",
   "walk": [
    "First, build one master calendar with every state, its deadline and how to file.",
    "Next, set reminders well ahead, not on the day itself.",
    "Finally, check the filing was accepted, not just sent."
   ],
   "jargon": [
    {
     "term": "Annual report",
     "hint": "a yearly state filing updating the company's officers and addresses"
    },
    {
     "term": "Franchise tax",
     "hint": "a fee some states charge for the right to exist or do business there"
    },
    {
     "term": "Jurisdiction",
     "hint": "the state or area whose rules apply"
    },
    {
     "term": "Grace period",
     "hint": "extra time after a deadline before penalties start"
    }
   ],
   "story": "This happens in real offices: an assistant submitted an annual report online at 4:55 p.m. on the due date, saw a 'thank you' screen and closed the tab. The state later rejected it for a missing field, and the rejection email went to a shared inbox nobody checked. The company quietly fell out of good standing. Saving the confirmation and checking the state's record a few days later would have caught it.",
   "ask": "[Name], why should you treat every state's deadline as firm, even when some have grace periods? [Name], what proof would you save to show a filing was accepted?"
  },
  "p2": {
   "why": "If a deadline was missed, fix it today, not next week.",
   "talk": "When a company is registered in several states, each one has its own deadlines, and they don't line up. Keeping them in one person's head or personal calendar is a recipe for missing one. They belong in a shared tracker with a named owner. And if one is missed, we act the same day, because the company is exposed for as long as it's out of good standing.",
   "walk": [
    "First, don't rely on one person's memory or calendar for many states' deadlines. Use a shared tracker with an owner.",
    "Finally, if a deadline is missed, act immediately. The company is exposed the whole time it's out of good standing."
   ],
   "contrast": {
    "lazy": "Keeps the deadlines in their own Outlook calendar and marks them 'done' once the form is sent.",
    "excellent": "Shared tracker: state, due date, fee, filing method, owner, date submitted, date accepted, confirmation number. A filing only turns green when the state's record shows it accepted."
   },
   "outcome": "A missed filing can cost good standing, and with it the right to sue or sign in that state. Penalties and reinstatement fees add up, but the real cost is timing: the lapse tends to show up in the middle of a deal or a dispute, when the company can least afford to look disorganised.",
   "ask": "[Name], checking the compliance calendar, you find Delaware's annual report was filed on time, but Texas's deadline passed three weeks ago with no record of filing. What's your first move? [Name], what's your second?",
   "mystery": "The case of the rejected report. You submitted the California annual report online on the due date and assumed it went through. Two months later, the state says it was rejected for a missing signature. The firm also has companies in Delaware and Texas. In pairs, five minutes: find where the process broke, bring back the fix for California today, and design the tracker columns and reminders for all three states."
  }
 },
 "6::Business Licensing & Permits": {
  "p1": {
   "icebreaker": "Game: 'Count the layers.' Hold up fingers: how many levels of licence could one small law office need? One, two, three, four, five? Hold them high. Now look around. Who went with one?",
   "teaser": "There's one licence on this slide that has nothing to do with the company at all, and it's the one that can stop a partner working overnight. Watch for it.",
   "why": "Being properly formed as a company doesn't mean being licensed to operate.",
   "talk": "Formation and licensing are two separate systems. And licences stack up: federal, state, county and city can each have their own requirement, depending on the business and location. Operating without one can bring fines, closure or even invalid contracts.",
   "walk": [
    "First, find every license and permit this business and location need. A general business license is often only the start.",
    "Next, track each license's renewal on its own schedule.",
    "Finally, make sure personal professional licenses, like a lawyer's bar license, stay current separately."
   ],
   "jargon": [
    {
     "term": "Business licence",
     "hint": "permission from a city or county to operate a business there"
    },
    {
     "term": "Permit",
     "hint": "permission for a specific activity or space, like signage or occupancy"
    },
    {
     "term": "Bar licence",
     "hint": "a lawyer's personal licence to practise law in a state"
    },
    {
     "term": "Continuing education (CLE)",
     "hint": "training hours lawyers must complete to keep their licence"
    }
   ],
   "story": "A real pattern from the field: a firm opened a new office in a neighbouring city and assumed its existing city licence covered it. Three months in, a city inspector asked for the local business licence and occupancy permit. The firm paid a fine and had to apply in a rush while clients were already visiting. A licensing checklist before the lease was signed would have avoided it.",
   "ask": "[Name], how many levels of licensing do you think could apply to one office? [Name], where would you look to find out what the city requires?"
  },
  "p2": {
   "why": "Licenses renew, so track every one on its own cycle.",
   "talk": "People tend to think of a business licence as a one-off. Many aren't. They need renewing, some need continuing education and some need regular reports. So we track each licence on its own renewal cycle, and keep a copy of every one in the central compliance folder, so we can prove it's current whenever someone asks.",
   "walk": [
    "First, don't assume a license lasts forever. Many need renewal, continuing education or reports.",
    "Finally, keep copies of every license in the central compliance folder."
   ],
   "contrast": {
    "lazy": "'We got the business licence when we opened, so we're covered.' The partner's bar renewal is left to him.",
    "excellent": "A licence tracker: licence, level, holder, number, expiry date, renewal requirements like CLE hours, reminder 90 days ahead, copy saved. Partners' bar licences are on it too, with their permission."
   },
   "outcome": "An expired licence can mean fines or closure, and a lapsed bar licence means a lawyer can't act for clients at all. If that happens mid-case, deadlines are missed, work has to be handed over and the client loses confidence. A tracker keeps everyone legally able to work when it counts.",
   "ask": "[Name], the firm is opening a satellite office in a new city. What licensing and permit questions need answering before it opens? [Name], who do you ask?",
   "mystery": "The case of the missing CLE hours. A partner's state bar licence is up for renewal in two weeks, and he's short on continuing-education hours. Elias is also opening a satellite office in a different city. In pairs, four minutes: decide whose job it is to track the bar renewal, list what you do today, and bring back every level of licence you'd check for the new office and where you'd find each one."
  }
 },
 "6::Registered Agent Responsibilities & Service of Process": {
  "p1": {
   "icebreaker": "Game: 'Who opens the envelope?' A legal envelope arrives addressed to the company's registered agent. Point to the corner of the room for your answer: left wall, 'the receptionist'; right wall, 'the attorney'; back wall, 'whoever is listed with the state'; front, 'no idea.' Point now.",
   "teaser": "One sentence people say about lawsuits is completely useless in court. By the end of this slide, you'll never say it.",
   "why": "'We never received it' is not a defense when the company gets sued.",
   "talk": "A registered agent is the official contact who receives legal papers, like lawsuits, for the company. If their details are out of date and a lawsuit goes unanswered, the company can lose by default. Every state where the company is registered needs one.",
   "walk": [
    "First, make sure the agent's address is current and someone is actually watching it.",
    "Next, when legal papers arrive, send them to the right person immediately. They usually come with a deadline.",
    "Finally, update the state promptly whenever the agent changes."
   ],
   "jargon": [
    {
     "term": "Registered agent",
     "hint": "the official contact listed with the state to receive legal papers"
    },
    {
     "term": "Service of process",
     "hint": "formally delivering a lawsuit or legal papers to someone"
    },
    {
     "term": "Default judgment",
     "hint": "losing a case automatically because you didn't respond in time"
    },
    {
     "term": "Summons",
     "hint": "the paper telling a company it's being sued and when to respond"
    }
   ],
   "story": "This happens in real offices: a company's registered agent was still listed as a former partner who had moved away. A lawsuit was served at his old address, and nobody inside the company saw it. The deadline to respond passed, and the court entered a default judgment. Undoing it cost far more than the original claim. Updating the agent with the state when the partner left would have taken ten minutes.",
   "ask": "[Name], who watches the registered agent's inbox at your firm, or at a firm you know? [Name], what happens if that person is on holiday?"
  },
  "p2": {
   "why": "It's not enough to know who receives the notices; you need to know who reads them.",
   "talk": "A registered agent is the official address where legal papers, like a new lawsuit, get delivered. Many firms pay a service to do this. But the service only forwards the papers. If nobody inside the firm is checking and acting on what arrives, a lawsuit can sit unread while the deadline to respond ticks away. And the agent's details belong in the same tracker as the annual deadlines, because a lapsed agent can cost good standing too.",
   "walk": [
    "First, a registered agent service is useless if nobody internally checks what it forwards.",
    "Finally, keep agent details in the same tracker as the annual deadlines. A lapsed agent can cost good standing too."
   ],
   "contrast": {
    "lazy": "The agent service's emails go to a shared inbox that someone 'usually' checks on Mondays.",
    "excellent": "One named person and a backup check agent notices daily. A served lawsuit goes to the responsible attorney within the hour, with the response deadline worked out and calendared, and a confirmation that the attorney has seen it."
   },
   "outcome": "Miss a response deadline and the company can lose by default, without its side ever being heard. That's the worst possible settlement position: none. Fast routing of served papers keeps every defence on the table.",
   "ask": "[Name], the registered agent service forwards what looks like a newly served lawsuit. What do you do in the next 30 minutes? [Name], who needs to know straight away?",
   "mystery": "The case of the Friday 5 p.m. lawsuit. The registered agent service emails a scanned lawsuit on a Friday at 5 p.m. The attorney who handles it is on holiday until Wednesday, and you've just noticed the state still lists a former partner as agent for another company. In teams, four minutes: find the deadline risk, decide who you reach tonight, and bring back the steps you take before you leave the office, plus what you fix on Monday."
  }
 },
 "6::Signatures, Notarization & Document Execution": {
  "p1": {
   "icebreaker": "Game: 'Valid or void?' Shout 'Valid!' or 'Void!' A lease signed by DocuSign. A contract signed by the receptionist for the company. A notarised document signed the night before the notary arrived. A signature block reading 'Thorne Advisory LLC, By: Elias Thorne, Managing Member.' Let's hear it.",
   "teaser": "One of those sounded perfectly fine, but a notary would have to refuse it. Keep it in mind; we'll come back to why.",
   "why": "A contract with the wrong signer or a missing notary stamp can be worth nothing, however good the terms are.",
   "talk": "'Executing' a document just means signing it so it takes effect. Electronic signatures, like DocuSign, are valid for most business documents, but some documents have special rules, so the attorney tells us which method to use. A notary checks the signer's identity and that they're signing willingly. The signer appears in person, or by video where the state allows it, with photo ID. And a company signs through a person with authority, which is why a signature block reads 'Thorne Advisory LLC, By: Elias Thorne, Managing Member'.",
   "walk": [
    "First, before any signing, confirm with the attorney who signs, in what role, by which method, and whether a notary or witnesses are needed.",
    "Next, prepare the execution version: correct names and titles, date lines and a tab at every place to sign or initial.",
    "Then, for a notary, book it and remind the signer to bring photo ID and not to sign early.",
    "After that, check every page: signatures, initials, dates, stamps and attachments.",
    "Finally, save the executed copy as read-only, send it to every party and calendar what it requires."
   ],
   "jargon": [
    {
     "term": "Execute / execution",
     "hint": "signing a document so it takes legal effect"
    },
    {
     "term": "Notary",
     "hint": "an official who checks the signer's ID and watches them sign"
    },
    {
     "term": "Signature block",
     "hint": "the lines showing who signs and in what role"
    },
    {
     "term": "Execution version",
     "hint": "the final, ready-to-sign copy of a document"
    },
    {
     "term": "E-signature (DocuSign)",
     "hint": "signing electronically through a secure platform"
    }
   ],
   "story": "A common pattern from the field: a client was told a notary would come to his office at 10 a.m. To save time, he signed the document at breakfast. The notary arrived, saw it was already signed and correctly refused to notarise it. A fresh copy had to be printed and the filing missed that day's cut-off. One line in the reminder, 'Please don't sign until the notary is with you,' would have saved the day.",
   "ask": "[Name], can you think of a document that would be useless if it were signed by the wrong person? [Name], how would you check who's allowed to sign it?"
  },
  "p2": {
   "why": "Execution goes wrong in the details, and those details are ours to catch.",
   "talk": "With e-signatures, we set the signing order and check the completion certificate, which records who signed and when. When parties sign separate copies, called counterparts, we combine them into one complete set. Two traps: someone signing on another person's behalf without written authority, which can make the document invalid, and pre-signing before the notary arrives, when the notary has to watch the signature happen.",
   "walk": [
    "First, set the order and keep the completion certificate.",
    "Next, combine counterparts into one set.",
    "Then, no signing for someone else without written authority.",
    "Finally, nothing is signed before the notary is there."
   ],
   "contrast": {
    "lazy": "Sends the DocuSign to whoever it was addressed to, files the signed PDF and deletes the completion certificate email.",
    "excellent": "Checks the signer against the firm's authority rules before sending, sets the signing order, saves the completion certificate with the executed copy, combines counterparts into one set and confirms every page is signed, initialled and dated."
   },
   "outcome": "A document signed by the wrong person, or notarised wrongly, can be challenged or thrown out. In a dispute, the other side will look for exactly that. If the lease or agreement is void, the client loses the deal they negotiated, and any leverage it gave them.",
   "ask": "[Name], what's in an e-signature completion certificate, and why keep it? [Name], when might you need to produce it?",
   "mystery": "The case of the travelling signer. Elias must sign a real estate document that needs notarisation, and he's travelling for three days. The deadline is Friday. Meanwhile, a lease for the new satellite office arrives by DocuSign addressed to the office manager, but firm rules say only Elias signs leases. In pairs, five minutes: find the problem in each, list your options for the notarisation, and bring back what you confirm with the attorney before anyone clicks Sign."
  }
 },
 "6::Corporate Recordkeeping & Minute Books": {
  "p1": {
   "icebreaker": "Game: 'Big decision or not?' Stand up for a major company decision that belongs in the minute book; stay seated if not. Admitting a new partner. Ordering new chairs. Taking out a bank line of credit. Changing the office Wi-Fi password. Appointing a new officer. Sit down.",
   "teaser": "There's one moment when people suddenly discover their minute book matters, and it's always the worst possible moment to find gaps. Guess when before the end of this slide.",
   "why": "Write down big company decisions when they happen, not when someone asks for proof.",
   "talk": "A minute book is the company's official history: formation papers, ownership records, meeting minutes and resolutions. Buyers, lenders and courts ask for it. Gaps don't just look messy; in a dispute, they can make it hard to prove a decision was properly approved.",
   "walk": [
    "First, record every major decision, like an ownership change, a big contract or a new officer, in writing.",
    "Next, keep the book up to date as things happen, not rebuilt later.",
    "Finally, store it as carefully as the formation documents."
   ],
   "jargon": [
    {
     "term": "Minute book",
     "hint": "the company's official record of decisions, meetings and ownership"
    },
    {
     "term": "Minutes",
     "hint": "the written record of what was decided at a meeting"
    },
    {
     "term": "Resolution",
     "hint": "a formal written decision by the owners or board"
    },
    {
     "term": "Officer",
     "hint": "a person with a formal company role, like president or secretary"
    }
   ],
   "story": "This happens in real offices: an owners' meeting approved a new line of credit, and everyone agreed out loud. Nobody wrote a resolution. When the bank asked for proof the borrowing had been approved, the assistant had to chase all the owners for signatures on a document dated weeks later. The loan was delayed and the bank asked more questions than it otherwise would have. A one-page resolution signed in the meeting would have done it.",
   "ask": "[Name], what would you count as a major company decision? [Name], is there one on your list that you'd argue isn't?"
  },
  "p2": {
   "why": "When in doubt, write it down.",
   "talk": "A minute book is the company's official record of its important decisions and meetings. Small companies often skip it, thinking it's only for big corporations. But lenders, investors and buyers ask for it regardless of size. And the rule of thumb is simple: an unnecessary record costs almost nothing, while a missing one can hold up a loan or a sale.",
   "walk": [
    "First, small companies need minute books too. Lenders and buyers ask regardless of size.",
    "Finally, an unnecessary record costs almost nothing; a missing one can cost a lot."
   ],
   "contrast": {
    "lazy": "'We're a small company, we just agree things on calls.' Notes, if any, live in someone's notebook.",
    "excellent": "After today's owners' meeting: minutes drafted the same day, a resolution for the line of credit and one admitting the new partner, signed by the owners, filed in the minute book with an index entry and a copy in the compliance folder."
   },
   "outcome": "When a buyer or lender does due diligence, gaps in the minute book become questions, and questions become delays or a lower price. In a dispute between owners, a missing record can make it impossible to prove a decision was approved. A complete book protects the deal value.",
   "ask": "[Name], an investor's checklist asks for two years of board minutes, and the firm has never documented its meetings. How big is the problem? [Name], how do you start fixing it?",
   "mystery": "The case of the missing three years. A buyer interested in one of Elias's companies asks for five years of minutes. You find notes for only two meetings. You also know today's meeting approved a bank line of credit and a new partner. In teams, five minutes: find what's missing, decide what you tell Elias, and bring back a plan to start putting it right, beginning with today's decisions."
  }
 },
 "6::Leading a Project Under Pressure": {
  "p1": {
   "icebreaker": "Game: 'First instinct.' A project deadline just slipped. On three, shout one word for your first instinct. One, two, three! I heard 'blame,' 'panic,' 'fix,' 'email.' Hands up if your word was about a person rather than a problem.",
   "teaser": "There's one thing that makes stakeholders more nervous than bad news, and most of us do it by accident when a project slips. You'll know it by the end.",
   "why": "When a project slips, look for what's broken, not who's to blame.",
   "talk": "Public blame doesn't fix delays; it hides the real problem. Leading a project as an EA means finding the cause, keeping people informed on a schedule and guiding people you don't formally manage.",
   "walk": [
    "First, find the actual cause of the delay before you reassign anything.",
    "Next, give stakeholders regular, scheduled updates, even when there's no good news.",
    "Then, turn the executive's big-picture goal into concrete next steps.",
    "After that, lead people you don't manage through clear asks and reliable follow-through.",
    "Finally, support decisions with short summaries, risks and options with a recommendation."
   ],
   "jargon": [
    {
     "term": "Stakeholder",
     "hint": "anyone affected by or with a say in the project"
    },
    {
     "term": "Influence without authority",
     "hint": "getting people to deliver when you're not their boss"
    },
    {
     "term": "Document production",
     "hint": "handing over requested documents to the other side in a case"
    }
   ],
   "story": "A real pattern from the field: a file migration fell behind, and the coordinator named the two paralegals who were 'slow' in a group email. It turned out the new system's tagging fields didn't match the old file categories, so every file needed a manual decision. The paralegals stopped flagging problems after that email. Asking 'what's in your way?' privately would have found the real cause in a day.",
   "ask": "[Name], when a deadline slips, what's your first instinct, honestly? [Name], what question would you ask before deciding who's responsible?"
  },
  "p2": {
   "why": "You may not make every decision, but you shape it.",
   "talk": "Leading a project doesn't require being anyone's boss. It means keeping everyone informed on a schedule, because silence makes people nervous. It means turning the executive's big picture into practical steps. It means getting vendors and colleagues we don't manage to deliver anyway. And it means bringing the executive a summary, the risks and the options, so he's never deciding from a blank page.",
   "walk": [
    "First, scheduled updates beat silence.",
    "Next, strategic alignment means turning vision into steps, and influence without authority means leading vendors and teams you don't supervise.",
    "Finally, decision support means summaries, risks and options, so the executive isn't starting from a blank page."
   ],
   "contrast": {
    "lazy": "'Sorry, the migration is late, the paralegals haven't finished. Will update when I know more.'",
    "excellent": "'Migration is one week behind. Cause: old file categories don't map to the new tags, so each file needs a manual call. Options: add a mapping guide and two days of IT support, or migrate active matters first. I recommend active matters first; we'd be live for them by Friday. Next update Wednesday at 10.'"
   },
   "outcome": "In litigation, a slipped project can mean a slipped document production, and courts don't wait. Missed production deadlines can bring sanctions and cost the client credibility with the judge. Finding the real cause fast and keeping everyone informed protects the deadline and the client's position.",
   "ask": "[Name], let's roleplay it: the client's document production just slipped two days, and three stakeholders are emailing for an update. What do you look for first? [Name], what goes in your update?",
   "mystery": "The case of the stalled migration. You're coordinating the move of client files to a new document system. It's a week behind because two paralegals haven't finished tagging. A partner, the IT vendor and Elias are all asking different questions. In pairs, five minutes: find the most likely real cause, and bring back one short update that answers all three stakeholders."
  }
 },
 "6::Seasonal Project Coordination": {
  "p1": {
   "icebreaker": "Game: 'Name the season.' I'll name a month, you shout the crunch that comes with it in a law office. December! Year-end billing, holiday cards. Spring! Conference season. Renewals month! What else? Shout it.",
   "teaser": "There's one mistake almost every office makes with these crunches, and it's not about effort at all. It's about the calendar. See if you can spot it.",
   "why": "Some big jobs come round every year, so build the playbook once and start earlier each time.",
   "talk": "Year-end billing, trial season, annual renewals and conference season aren't one-off projects; they repeat. So they need a system, not a fresh plan each year. This is a four-step cycle.",
   "walk": [
    "First, recognize the pattern: these tasks come back on a predictable calendar.",
    "Next, write the playbook the first time through: the checklist, timeline and owner for each task.",
    "Then, start before it's urgent. The most common mistake is starting at the same moment every year, even after it ran late last time.",
    "Finally, after each cycle, note what went wrong and update the playbook."
   ],
   "jargon": [
    {
     "term": "Playbook",
     "hint": "a reusable checklist and timeline for a recurring job"
    },
    {
     "term": "Year-end billing",
     "hint": "the push to get all client invoices approved and sent before the year closes"
    },
    {
     "term": "Trial season",
     "hint": "busy periods when several cases go to trial close together"
    }
   ],
   "story": "A common pattern from the field: every December, an office's holiday cards to 400 clients went out late because the address list was checked at the last minute. Each year someone said 'next year we'll start earlier,' and nobody wrote it down. A few cards went to clients' old addresses, including one to a former client who had left on bad terms. A playbook with 'address check starts 1 October' would have broken the cycle.",
   "ask": "[Name], what predictable crunch do you rebuild from memory every year? [Name], what would be the first line in its playbook?"
  },
  "p2": {
   "why": "A job that comes back every year should get easier every year.",
   "talk": "That's the difference between a one-off project, which ends, and a seasonal responsibility, which needs a system. A one-off project closes and we move on. A seasonal one comes back, so the work we put into the first round should pay off every round after.",
   "walk": [
    "First, one-off projects close; seasonal ones return.",
    "Finally, recurring work deserves a reusable system, not a new plan."
   ],
   "contrast": {
    "lazy": "Starts year-end billing on 15 December, same as last year, and remembers halfway through that partner approvals were slow last time too.",
    "excellent": "Opens the playbook in October: draft bills out 1 November, partner approval deadline 20 November with reminders, chase list on 25 November, final send 10 December. Last year's lessons are already built in."
   },
   "outcome": "Late year-end billing means late payment, cash-flow pressure and invoices that land after a client's budget has closed. Clients notice disorganisation at year-end more than any other time. A playbook that improves each cycle protects revenue and client relationships.",
   "ask": "[Name], year-end billing at Thorne & Partners ran late last December because partner approvals were slow. Let's draft the playbook: what starts when? [Name], who owns each part?",
   "mystery": "The case of the December that keeps repeating. Year-end billing ran late again this year, and the holiday cards to 400 clients went out late too. You have notes on what went wrong. In teams, five minutes: find the pattern behind both, and bring back three playbook items for each with the date each one should start."
  }
 },
 "6::Project Scope Creep & Change Management": {
  "p1": {
   "icebreaker": "Game: 'Stack it up.' A client seminar for 30 people. Each time I add something, put one hand on top of the other. A dinner. A second speaker. Printed booklets. Live streaming. A survey. Now, has the date or budget moved? No. How do your hands feel?",
   "teaser": "Every single one of those additions was reasonable on its own. That's the trap, and there's one short sentence that gets you out of it.",
   "why": "Projects rarely blow up in one go; they grow one small, reasonable request at a time.",
   "talk": "That's scope creep. Each addition seems fine alone, but together they cost time and money. A written scope isn't there to refuse everything. It's there so each addition becomes a conscious choice with a visible cost.",
   "walk": [
    "First, write down the original scope clearly enough to compare new requests against it.",
    "Next, when a new request comes in, call it a scope change and say what it costs in time, budget or people.",
    "Finally, log every approved change with what was added and why."
   ],
   "jargon": [
    {
     "term": "Scope",
     "hint": "the agreed list of what the project will deliver"
    },
    {
     "term": "Scope creep",
     "hint": "a project slowly growing through small additions"
    },
    {
     "term": "Change log",
     "hint": "a record of every approved change and why"
    }
   ],
   "story": "This happens in real offices: an assistant organising a client event said yes to every small extra over three weeks without mentioning the cost. The week before, the budget was blown and the booklets weren't printed. The partner asked why nobody had warned him. She had no record to show each request had come from him. A simple change log with 'added, cost, approved by' would have protected her and the event.",
   "ask": "[Name], why is each small addition dangerous, if each one seems reasonable? [Name], at what point would you speak up?"
  },
  "p2": {
   "why": "Quietly absorbing little extras is exactly how projects end up late with nobody sure why.",
   "talk": "Scope creep rarely arrives as one big request. It's a series of small, reasonable extras, and if we quietly absorb each one, the project ends up late and nobody's quite sure why. The fix isn't a fight. It's one calm sentence each time: 'Happy to add that. Here's what it does to the timeline.' Then the stakeholder decides with the full picture.",
   "walk": [
    "First, don't avoid the awkward conversation by just taking it on.",
    "Finally, it doesn't have to be a fight. 'Here's what this does to the timeline' is enough."
   ],
   "contrast": {
    "lazy": "'Sure, no problem!' Five times, then a stressed email the week before saying it can't all be done.",
    "excellent": "'Happy to add the survey. It needs two days to build and test, so invites would go Thursday instead of Tuesday. Or we send it as a follow-up after the seminar. Which do you prefer?' Then it goes in the change log."
   },
   "outcome": "On legal projects, unmanaged scope means missed deadlines and blown budgets that the client may refuse to pay for. A clear record of what changed and who approved it protects the firm's fees and its credibility when the bill is questioned.",
   "ask": "[Name], a stakeholder asks for 'just one more small addition' to a project that's already had three. What do you say, when each one really did seem reasonable? [Name], how would you word it to a senior partner?",
   "mystery": "The case of the growing seminar. You're organising a client seminar for 30 people. Over two weeks you've been asked to add a dinner, a second speaker, printed booklets and live streaming, and now a partner asks you to 'just add' a small survey. The date and budget haven't changed. In pairs, four minutes: find the cost of each addition, and bring back the exact words you'd use to say yes to the survey while making the total cost visible."
  }
 },
 "6::Stakeholder Communication During Project Delays": {
  "p1": {
   "icebreaker": "Game: 'Now or Friday?' You think the office move might slip a week, but the contractor only confirms on Friday. Stand up if you'd tell Elias now. Stay seated if you'd wait until Friday. Look around. Which side looks more nervous?",
   "teaser": "There's something stakeholders hate more than bad news, and it's not the delay itself. One word on this slide names it. Watch for it.",
   "why": "People can handle bad news about a timeline; what they can't handle is being the last to know.",
   "talk": "A delay you announce early is a manageable problem. A delay the stakeholder discovers on their own becomes a trust problem too. The aim isn't to make it sound better than it is; it's to give an honest picture and a real plan.",
   "walk": [
    "First, flag the delay as soon as it's likely, not only when it's certain.",
    "Next, lead with the bottom line: what's late and by how much. Then explain why.",
    "Finally, always include a new timeline or next step."
   ],
   "jargon": [
    {
     "term": "Stakeholder",
     "hint": "anyone who depends on or decides about the project"
    },
    {
     "term": "Bottom line up front (BLUF)",
     "hint": "say the key fact first, details after"
    },
    {
     "term": "Standing call",
     "hint": "a regular, recurring meeting already in the diary"
    }
   ],
   "story": "A real pattern from the field: an assistant knew the new office fit-out was running late but waited for the contractor to confirm before saying anything. Meanwhile, the partner had told three clients they could meet in the new boardroom. When the delay was confirmed, he had to call each of them back. He wasn't upset about the delay; he was upset about finding out last. A short 'heads-up, likely to slip, confirming Friday' would have kept him in control.",
   "ask": "[Name], why should you flag a delay before you're certain? [Name], how would you word it so it doesn't sound like a panic?"
  },
  "p2": {
   "why": "Silence between updates sounds like more bad news.",
   "talk": "When a project is slipping, the worst thing we can do is stay quiet until the deadline passes. People fill silence with the worst possible story. So we raise it as soon as we know, and during a long delay we keep a steady rhythm of updates, even when the update is 'no change', so nobody has to chase us.",
   "walk": [
    "First, don't wait until the deadline has passed to say something.",
    "Finally, during a long delay, keep a steady rhythm of updates."
   ],
   "contrast": {
    "lazy": "Says nothing for a month, then: 'Sorry for the silence, there have been some delays on our side.'",
    "excellent": "'Bottom line: the project is three weeks behind; new delivery date is 14 March. Cause: the vendor's data import failed and is being rerun. Next step: test results Monday. I'll update you every Tuesday until it's delivered, even if there's no change.'"
   },
   "outcome": "Clients who are kept informed stay patient; clients who are kept in the dark start questioning the firm, the bill and sometimes the strategy. In a matter, a surprised client is harder to advise and more likely to push back on fees or settle out of frustration. Early, honest updates protect the relationship and the result.",
   "ask": "[Name], this morning you learned the project will miss its deadline by two weeks, and the stakeholder has a standing call in an hour. What do you do between now and that call? [Name], what's your first sentence on the call?",
   "mystery": "The case of the silent month. A client-facing project is running three weeks late. The last update to the client was a month ago, and the office move may also slip by a week. In pairs, four minutes: find the moment communication broke down, and bring back the update you send the client today, bottom line first, plus your one-line heads-up to Elias about the move."
  }
 },
 "6::Frameworks Worth Knowing": {
  "p1": {
   "icebreaker": "Game: 'Waste, errors or structure?' I'll describe a problem, you shout one word. Five approvals for a new client form! Invoices with the wrong hourly rate, again! Planning next year's office move! Good, now hold onto those answers.",
   "teaser": "One of the frameworks on this slide is fashionable right now, and people try to use it for everything. There's one problem where it's the wrong choice. We'll find it.",
   "why": "You don't need a certificate; you just need to know which tool fixes which problem.",
   "talk": "There are three well-known approaches worth recognising. Lean is about cutting waste and keeping only the steps that add value. Six Sigma is about reducing mistakes by measuring what's going wrong. And the standard project management approach gives big projects a clear structure from start to finish. We don't need to be experts in any of them; we just need to know which one fits which problem.",
   "walk": [
    "First, if a process has too many pointless steps, think Lean.",
    "Next, if it keeps producing errors, think Six Sigma.",
    "Then, if you're running a big project end to end, borrow the standard project structure.",
    "After that, match the framework to what's actually broken, rather than using all three.",
    "Finally, treat this as recognizing the tools, not becoming an expert in them."
   ],
   "jargon": [
    {
     "term": "Lean",
     "hint": "a method for cutting waste and keeping only steps that add value"
    },
    {
     "term": "Six Sigma",
     "hint": "a data-driven method for reducing errors"
    },
    {
     "term": "Project management",
     "hint": "a structured way to plan and run a big project from start to finish"
    },
    {
     "term": "Agile",
     "hint": "delivering work in short cycles and adjusting as you go"
    }
   ],
   "story": "A common pattern from the field: an enthusiastic new office manager tried to fix invoice errors by cutting approval steps, because she'd just read about Lean. The errors got worse, because one of those steps was the only rate check. The problem was errors, not waste. Measuring where the wrong rates came from would have pointed to the fix.",
   "ask": "[Name], which of your own work problems is about waste, and which is about errors? [Name], do you agree with how they sorted them?"
  },
  "p2": {
   "why": "Waste, errors or structure: match the framework to the problem.",
   "talk": "In a sentence each: Lean removes waste, like unnecessary steps, waiting around and redoing work. Six Sigma uses data to cut errors, working through five stages: define, measure, analyse, improve and control. Project management gives large projects structure. And Agile delivers in short cycles, checking and adjusting as it goes, instead of planning everything up front.",
   "walk": [
    "First, Lean removes waste: extra steps, waiting and rework.",
    "Next, Six Sigma reduces errors using data, through Define, Measure, Analyze, Improve and Control.",
    "Finally, project management structures large projects, and Agile delivers in short cycles and adjusts as it goes."
   ],
   "contrast": {
    "lazy": "'Let's just do Agile for everything, it's what everyone uses now.'",
    "excellent": "'The approvals are a Lean problem, so we'll map and cut steps. The invoice rates are a Six Sigma problem, so we'll measure where errors start. The office move has a fixed date and dependencies, so it gets a standard project plan, with maybe a two-week check-in rhythm borrowed from Agile.'"
   },
   "outcome": "Using the wrong tool wastes weeks and can make the problem worse. Wrong hourly rates on invoices damage client trust and can lead to disputed bills; a badly planned office move can disrupt client work during live matters. Picking the right framework gets to the fix faster.",
   "ask": "[Name], quick sort: a filing process with four unnecessary approval steps, invoices with repeated number errors, and a six-month office move. Which framework fits each? [Name], which one would you tackle first?",
   "mystery": "The case of the Agile office move. A partner wants 'an Agile approach' for next year's office move, with plans made in two-week cycles. The move has a fixed lease end date, IT cut-over and client meetings to protect. In teams, four minutes: find the clues that say whether Agile fits, and bring back what you'd suggest instead, and why, in three sentences."
  }
 },
 "6::Lean Six Sigma in Practice — A Real Methodology, Not Just a Buzzword": {
  "p1": {
   "icebreaker": "Game: 'Guess the acronym.' D-M-A-I-C. Five letters, five steps. Shout out what you think each letter stands for. D? M? A? I? C? Let's see how many we get before I reveal them.",
   "teaser": "Most people get the first four right. It's the last letter people skip, and that's exactly why their fixes fade away after a month.",
   "why": "Five steps turn 'this keeps going wrong' into a fix that actually sticks.",
   "talk": "The method is called DMAIC, and it's a sequence. The example running through it is invoices going out late every month. Each step builds on the one before, so we don't jump straight to fixing before we know the cause.",
   "walk": [
    "First, define: name the problem in one sentence and who it affects, like 'invoices go out four to six days late each month.'",
    "Next, measure: get real numbers, not impressions.",
    "Then, analyze: find the real cause. Is it a missing approval, one bottleneck person or a broken handoff?",
    "After that, improve: change the actual process, by removing a step or automating a check.",
    "Finally, control: build something, like a checklist or reminder, so the fix doesn't fade."
   ],
   "jargon": [
    {
     "term": "DMAIC",
     "hint": "Define, Measure, Analyze, Improve, Control: a five-step fix method"
    },
    {
     "term": "Bottleneck",
     "hint": "the one point where work piles up and slows everything"
    },
    {
     "term": "Handoff",
     "hint": "when work passes from one person or system to another"
    }
   ],
   "story": "This happens in real offices: a team fixed late invoices by having everyone work late one week. Invoices went out on time that month. The next month they were late again, because nothing about the process had changed. When someone finally measured, the hold-up was one partner's approval sitting in his inbox. A reminder rule and a backup approver fixed it for good.",
   "ask": "[Name], who has a recurring annoyance we could run through these five steps right now? [Name], what would you measure first for it?"
  },
  "p2": {
   "why": "Lean cuts what doesn't matter; Six Sigma fixes what's actually broken.",
   "talk": "Put together, that's Lean Six Sigma: remove the waste, then rigorously fix the errors that remain. Lean asks which steps add no value. Six Sigma asks where mistakes come from and measures them. Used together, they cover both kinds of problem in the same process.",
   "walk": [
    "First, Lean is about waste and value.",
    "Finally, Six Sigma is about errors and measurement, and together they cover both."
   ],
   "contrast": {
    "lazy": "'Expenses are slow, I'll send everyone a reminder to submit faster.'",
    "excellent": "'Define: reimbursements take 18 days on average. Measure: I'll log each report's dates for a month. Analyze: see which step holds them. Improve: change that step. Control: a weekly check on the average, so we know if it creeps back.'"
   },
   "outcome": "Slow, error-prone processes cost the firm money and staff goodwill, and in client work they cost deadlines. A fix that sticks frees up hours for the work that actually moves a case forward, instead of re-fixing the same problem every month.",
   "ask": "[Name], thirty seconds: name a recurring problem from your work. [Name], call out what each of the five steps would look like for it.",
   "mystery": "The case of the 40-field form. A new client-intake form has 40 fields, half of them never used, and the intake team keeps making data-entry errors. Expense reports also take 18 days to reimburse. In pairs, five minutes: find which part of the intake problem is Lean and which is Six Sigma, and bring back a five-step DMAIC outline for the expense reports."
  }
 },
 "6::DMAIC — Three Worked EA Examples": {
  "p1": {
   "icebreaker": "Game: 'Waiting or searching?' Thumbs up for a waiting problem, thumbs down for a searching problem. A contract stuck for three days for one partner's signature. An NDA saved in four folders. Expense approvals sitting in an inbox. Hunting for last year's lease. Thumbs up or down?",
   "teaser": "There's one popular fix for these problems that almost never works, and you've probably used it this week. Let's name it.",
   "why": "When a process keeps failing, fix the process, not the reminder.",
   "talk": "Take a contract that sits for three days because one partner has to sign it and they're often out. Reminding them harder doesn't fix it. Building a backup signer into the process does. That's the thinking behind these examples.",
   "walk": [
    "First, for a waiting problem, add a backup approver to the process itself.",
    "Next, for a searching problem, like a document spread across four folders, agree one filing place for good.",
    "Then, run a small DMAIC on a real frustration: define, measure for a couple of weeks, find the cause, change that step and check it holds.",
    "After that, for a form that keeps coming back incomplete, find the one confusing field instead of rewriting everything.",
    "Finally, once the fix works, make it the new standard, so nobody slips back."
   ],
   "jargon": [
    {
     "term": "NDA (non-disclosure agreement)",
     "hint": "a contract promising to keep information confidential"
    },
    {
     "term": "Backup approver",
     "hint": "a named second person who can sign off when the first is away"
    },
    {
     "term": "Intake form",
     "hint": "the form that collects a new client's or matter's details"
    }
   ],
   "story": "A real pattern from the field: an office kept double-booking its meeting rooms because some people booked in the shared calendar and others in the old booking tool. The fix everyone tried was an email asking people to 'check both.' It lasted a week. When someone counted the clashes for two weeks, every one came from the old tool. Switching it off fixed the problem.",
   "ask": "[Name], what's a waiting problem in your own work? [Name], what would a backup in the process look like for it?"
  },
  "p2": {
   "why": "Measure first, find the real cause, then make the fix the new normal.",
   "talk": "Let's see those five stages in real assistant work. An NDA saved in four different folders is a searching problem, fixed by agreeing one place to file it. Expense approvals that drag on get measured for two weeks, which reveals the step where they stall, and an automatic reminder fixes it. And intake forms that come back incomplete a third of the time usually have one confusing question; reword that one field and make the new form the standard.",
   "walk": [
    "First, searching waste: an NDA spread across four folders is fixed by one agreed filing place.",
    "Next, expense approvals: track turnaround for two weeks, find the step where they stall, add an automatic reminder and review monthly.",
    "Finally, intake forms: 30 percent come back incomplete, one field is confusing, so reword just that field and make the new form standard."
   ],
   "contrast": {
    "lazy": "Rewrites the whole intake form from scratch, sends it round, and leaves the old version in the shared drive.",
    "excellent": "Measures which field is left blank, rewords only that one, tests it for two weeks, then replaces the old form everywhere, archives it and adds a monthly check of the incomplete rate."
   },
   "outcome": "An incomplete intake form can mean a missed conflict check or a wrong deadline on a new matter, and those are the errors that turn into complaints or claims. A fix that's measured and locked in protects the firm long after the person who made it has moved on.",
   "ask": "[Name], let's walk the intake-form example step by step. [Name], now apply the same steps to a process from your own work.",
   "mystery": "The case of the returning form. You fixed the confusing field on the intake form, and errors dropped from 30 percent to 5 percent. Three months later, someone brings back the old form, and meeting room bookings are clashing again too. In teams, four minutes: find the missing control step in each case, and bring back the one control you'd put in place for each so it can't happen again."
  }
 },
 "6::Lean's 8 Wastes & Kaizen": {
  "p1": {
   "icebreaker": "Game: 'Spot the waste.' I'll describe a colleague handling a new client matter. Clap once every time you hear a wasted step. They print the intake form. Scan it back in. Email it to two people. Wait two days for a signature. Type the details into three systems. How many claps?",
   "teaser": "There's a word on this slide that's also a word for a break from work. It's the memory trick for all eight wastes. See if you can guess it.",
   "why": "Once you learn to spot waste, you start seeing it everywhere, and small fixes add up.",
   "talk": "Lean names eight kinds of waste, remembered as DOWNTIME: defects, overproduction, waiting, unused talent, transport, inventory, motion and extra processing. You don't need the acronym. What matters is the instinct to say 'this step is pointless' when you see it.",
   "walk": [
    "First, build the habit of noticing wasted steps.",
    "Next, watch especially for waiting, like approvals stuck in an inbox, and extra processing, like typing the same data into three systems.",
    "Then, practice Kaizen: fix small annoyances as soon as you notice them.",
    "After that, don't skip the control step, or the old problem creeps back.",
    "Finally, treat this as a way of thinking, not a qualification."
   ],
   "jargon": [
    {
     "term": "DOWNTIME",
     "hint": "memory trick for Lean's eight wastes"
    },
    {
     "term": "Kaizen",
     "hint": "Japanese idea of small, continuous improvements"
    },
    {
     "term": "Extra processing",
     "hint": "doing more work than the result needs, like retyping data"
    },
    {
     "term": "CRM",
     "hint": "the system that stores client contacts and relationships"
    }
   ],
   "story": "This happens in real offices: an assistant typed each new client's address into the CRM, the billing system and a spreadsheet. One day she updated two of them and forgot the third, and an invoice went to a client's old address. It sat unpaid for six weeks before anyone noticed. Entering it once and linking the other systems, or at least dropping the spreadsheet, would have removed the chance of the mismatch.",
   "ask": "[Name], which of the eight wastes do you see most at work? [Name], give me one real example of it."
  },
  "p2": {
   "why": "In most offices, the biggest wastes are waiting and doing the same work twice.",
   "talk": "In an office, waste mostly looks like two things: waiting, for approvals, replies or information, and doing the same work more than once, like typing a client's details into three systems. Kaizen is the Japanese idea of small, continuous improvements, which is much closer to how assistants really get better than any big project. We don't need a certificate; we need a repeatable way to fix things and the habit of making the fixes stick.",
   "walk": [
    "First, most admin waste is waiting and extra processing.",
    "Next, Kaizen means small, continuous improvements, closer to how EAs really improve their work than any big project.",
    "Finally, you don't need a Six Sigma belt. You need a repeatable way to fix things, and the discipline to make fixes stick."
   ],
   "contrast": {
    "lazy": "'That's just how it's done here.' Retypes the same meeting details three times every week.",
    "excellent": "'I'll send the calendar invite with the room booked inside it, so one entry creates all three. Saves 20 minutes a week; I'll check in a month that nothing's been missed.'"
   },
   "outcome": "Every retyped detail is a chance for a mismatch: a wrong date, an old address, the wrong client name. In legal work those small errors can mean a missed hearing or a misdirected document. Removing duplicate steps cuts both the time and the risk.",
   "ask": "[Name], you type every new client's details into the CRM, the billing system and a spreadsheet. Which waste is that? [Name], what's the smallest fix you could make this week?",
   "mystery": "The case of the triple-typed meeting. Every week, you retype the same meeting details into Elias's calendar, the room booking system and a confirmation email. In pairs, three minutes: find every waste in that routine using DOWNTIME, and bring back the smallest Kaizen fix you could make this week, plus how you'd check it stuck."
  }
 },
 "6::Root Cause Analysis Basics": {
  "p1": {
   "icebreaker": "Game: 'Why, why, why.' I need one volunteer to say a problem: 'The client got the wrong invoice.' Now the room asks 'Why?' together, and our volunteer answers. Again: 'Why?' Let's see how many whys before we hit something we can actually fix.",
   "teaser": "There's one answer that feels like the end of the investigation but almost never is. Two words. You've probably used them this month.",
   "why": "Keep asking why until the answer is something you can actually fix.",
   "talk": "Root cause analysis means not stopping at the first, obvious explanation. The simplest version is the five whys: keep asking why until the answer stops being a symptom and becomes a cause. Fix a symptom, and the problem just comes back in a new form.",
   "walk": [
    "First, state the problem precisely and factually.",
    "Next, ask why, then ask why again about that answer, and keep going.",
    "Finally, check: if we'd fixed this cause earlier, would the problem have been prevented? If not, keep digging."
   ],
   "jargon": [
    {
     "term": "Root cause",
     "hint": "the underlying reason a problem happened, not just the visible symptom"
    },
    {
     "term": "Five whys",
     "hint": "asking 'why?' repeatedly until you reach the real cause"
    },
    {
     "term": "Symptom",
     "hint": "what you see going wrong, not why it went wrong"
    }
   ],
   "story": "A real pattern from the field: a client received another client's invoice by email. The first answer was 'wrong address picked.' Asking why led to the email autofill suggesting names with the same surname, then to invoices being sent manually one by one, then to no second check before sending. The fix wasn't 'be more careful'; it was sending invoices from the billing system with the address pulled from the client record. That's also a confidentiality breach avoided next time.",
   "ask": "[Name], why isn't 'someone forgot' a root cause? [Name], what question would you ask next?"
  },
  "p2": {
   "why": "'Human error' is where the analysis starts, not where it ends.",
   "talk": "When something goes wrong, 'human error' is the easy answer, and it's almost never the whole answer. If a person forgot, why was it possible to forget? Usually something was missing: a checklist, a clear owner or some training. That's the part we can fix. And we do this while the details are fresh, not weeks later when nobody remembers what happened.",
   "walk": [
    "First, human error usually points to something missing: a process, clear ownership or training.",
    "Finally, do the analysis while the details are fresh, not weeks later."
   ],
   "contrast": {
    "lazy": "'Human error. The assistant forgot. We've reminded her to be more careful.'",
    "excellent": "'The deadline was only in the assistant's own calendar, there was no second reminder, and nobody owned checking the filing calendar while she was on leave. Fix: deadlines go in the shared docket with two reminders and a named backup.'"
   },
   "outcome": "A late court filing can mean sanctions, a struck motion or a lost argument, and if the root cause isn't fixed, it happens again. Blaming one person also teaches everyone to hide mistakes. Finding the real cause protects the client's case and the next deadline.",
   "ask": "[Name], a filing deadline was missed last week, and the first explanation is 'the person responsible forgot.' Let's use the five whys out loud. [Name], where do we end up?",
   "mystery": "The case of the late filing. A court filing was late, and the team concludes 'human error, the assistant forgot.' You're reviewing it. In teams, five minutes: find at least three questions that dig past 'forgot,' follow the whys to a cause you can fix, and bring back the one change that would have prevented it."
  }
 },
 "6::Operational Optimization": {
  "p1": {
   "icebreaker": "Game: 'Put them in order.' Three volunteers, three cards: 'Automate,' 'Own,' 'Standardize.' Line up in the order you'd do them. Room, thumbs up or down on their order. Let's see if anyone wants to swap.",
   "teaser": "Most people put one of those cards first, and it's the one that causes the most rework. You'll see why in a minute.",
   "why": "Automate the task, give it an owner, then standardize it, in that order.",
   "talk": "The order matters. If you write up a process before automating it, you'll just have to rewrite it. And if nobody owns it after automation, it quietly becomes nobody's job.",
   "walk": [
    "First, find a repetitive task you still do fully by hand.",
    "Next, automate it before anything else.",
    "Then, decide who owns it from now on.",
    "After that, write it up as the standard, once the automation and owner are settled.",
    "Finally, track just a few real measures on a regular schedule."
   ],
   "jargon": [
    {
     "term": "Automate",
     "hint": "let software do a repetitive step for you"
    },
    {
     "term": "Process owner",
     "hint": "the named person responsible for a process working"
    },
    {
     "term": "Standardize",
     "hint": "write it up as the one agreed way to do it"
    },
    {
     "term": "KPI / measure",
     "hint": "a number that shows whether something is working"
    }
   ],
   "story": "This happens in real offices: an assistant set up an automatic weekly report that pulled from four spreadsheets. It worked beautifully until she moved teams. Nobody owned it, one spreadsheet was renamed, and the report quietly sent blank figures for a month before a partner noticed. Naming an owner and a backup would have caught it in week one.",
   "ask": "[Name], what's one task you still do completely by hand? [Name], what would automating it look like?"
  },
  "p2": {
   "why": "A measurement with no owner is just a number on a page.",
   "talk": "Measuring things only helps if we measure the right things. Good measures are tied to results, like calendar accuracy, how quickly we respond, filings made on time and how fast invoices go out. We keep it to four or five, each with a target and a named owner. And we act on trends, not on one bad day, because a single off day doesn't mean the process is broken.",
   "walk": [
    "First, pick measures tied to results, like calendar accuracy, response time, on-time filings and invoice turnaround.",
    "Next, keep it to four or five, each with a target and an owner.",
    "Finally, review them regularly and act on trends, not single bad days."
   ],
   "contrast": {
    "lazy": "A dashboard of 20 numbers nobody owns, reviewed only when something has already gone wrong.",
    "excellent": "Four measures: on-time filings 100 percent, owner the docketing assistant; invoices out within 5 days, owner billing; calendar errors under 1 a month, owner Elias's EA; email response within 4 hours, owner the team lead. Reviewed monthly, trends discussed, not one-off dips."
   },
   "outcome": "The right measures show a problem before it becomes a missed filing or a slow invoice cycle that strains cash flow. When each has an owner, someone acts while there's still time. That's the difference between catching a risk and explaining it to a client.",
   "ask": "[Name], every Monday you build a matter status report by hand from five spreadsheets. Apply automate, own and standardize. [Name], name the one measure you'd track.",
   "mystery": "The case of 'is the office running well?' Elias wants to know whether the office is running well, and you're still spending two hours every Friday compiling a status report from four spreadsheets. In pairs, five minutes: find the four measures that would answer his question, give each a target and an owner, and bring back how you'd automate, own and standardize the Friday report."
  }
 },
 "6::The KPI Dashboard Template": {
  "p1": {
   "icebreaker": "Game: 'Hit or miss?' I'll read a target, you show thumbs up if you think an office hits it every month, thumbs down if not. Calendar accuracy of 98 percent. Daily briefing ready by 8 a.m. Client replies within four business hours. Invoices out within three days of month-end. Show me.",
   "teaser": "When one of those numbers keeps missing, most offices blame the wrong thing. There's one word on this slide that tells you where to look instead.",
   "why": "A good dashboard tracks a handful of numbers, each with a clear target.",
   "talk": "A dashboard doesn't need many numbers, just the right ones, across four areas: how productive the executive is, how well clients are served, how smoothly operations run and whether legal compliance is on track. Each number has a clear target. But the real value isn't the dashboard itself. It's looking at it regularly and doing something about what it shows.",
   "walk": [
    "First, track a few real measures across the four areas, not a long list nobody reads.",
    "Next, give each one a specific target, like calendar accuracy of at least 98 percent.",
    "Then, review the dashboard on a fixed schedule.",
    "After that, treat procedures as living documents that get reviewed and updated.",
    "Finally, when a measure keeps missing its target, update the procedure behind it."
   ],
   "jargon": [
    {
     "term": "KPI (key performance indicator)",
     "hint": "a number that shows whether an important goal is being met"
    },
    {
     "term": "Dashboard",
     "hint": "one page showing the key numbers at a glance"
    },
    {
     "term": "Target",
     "hint": "the specific level a measure should reach"
    },
    {
     "term": "Compliance",
     "hint": "meeting legal and regulatory requirements on time"
    }
   ],
   "story": "A common pattern from the field: an office built a dashboard with 25 measures, colour-coded and beautiful. Nobody reviewed it after the second month. When a compliance deadline was missed, the warning had been sitting on the dashboard, red, for six weeks. Five measures and a fixed monthly review slot would have put it in front of someone who could act.",
   "ask": "[Name], which measure do you think is hardest to hit consistently? [Name], why do you think that one slips?"
  },
  "p2": {
   "why": "A number that keeps missing its target usually means the procedure needs fixing, not the people.",
   "talk": "What do good targets look like? For the executive's productivity, a calendar that's at least 98 percent accurate and a briefing ready by 8 every morning. For clients, replies within four business hours and no missed follow-ups. For operations, invoices out within three days of month-end, and procedures reviewed at least every six months. When a number keeps missing, that's usually a sign to fix the procedure, not blame the people.",
   "walk": [
    "First, executive productivity: calendar accuracy of at least 98 percent, and a briefing by 8 AM daily.",
    "Next, client service: replies within four business hours and no missed follow-ups.",
    "Finally, operations: invoices out within three days of month-end, and procedures reviewed at least every six months."
   ],
   "contrast": {
    "lazy": "'Invoices are late again. I'll remind billing to try harder this month.'",
    "excellent": "'Invoices have averaged eight days against a three-day target for four months. I've mapped the steps: they wait an average of five days for partner approval. Proposal: approvals due by day two with an automatic reminder, and a backup approver. I'll report the number again next month.'"
   },
   "outcome": "Missed client follow-ups and slow replies are how clients drift to another firm. Late invoices squeeze cash flow, and a missed compliance measure can mean a lost filing or good standing. A dashboard that's reviewed and acted on catches these while they're still small.",
   "ask": "[Name], your dashboard shows client response time averaging seven hours against a four-hour target, for three months running. What does that tell you? [Name], which procedure do you review first?",
   "mystery": "The case of the eight-day invoices. The dashboard shows invoices going out eight days after month-end, against a three-day target, for four months running. In teams, five minutes: before blaming anyone, find the clues you'd look at in the procedure, and bring back a first version of Elias's office dashboard with one measure each for executive productivity, client service, operations and compliance, and a target for each."
  }
 },
 "6::SOP Architecture & Trigger Mapping": {
  "p1": {
   "icebreaker": "Game: 'Name the trigger.' I'll name a procedure, you shout the moment that should make someone use it. New client payment procedure! Filing deadline procedure! Courier delivery procedure! Lost laptop procedure! Fast as you can.",
   "teaser": "A procedure can have perfect steps and still never get used. There's one part on this slide that decides whether anyone ever opens it. Find it before I do.",
   "why": "A procedure nobody knows when to use won't get used.",
   "talk": "A standard operating procedure, or SOP, is a step-by-step guide that makes a task consistent, safer and faster. But its value comes from being followed. Good SOPs share the same parts: a title and ID, a purpose, a scope, definitions, the steps, who does what, linked forms, risk notes and a revision history. And crucially, a trigger: the exact event that tells someone to use it.",
   "walk": [
    "First, identify the task that needs standardizing, and write down why.",
    "Next, define the scope: which people, departments and task types it covers.",
    "Then, write the steps as a numbered list, a flowchart or a checklist, never as a paragraph.",
    "Finally, name the trigger event, like 'whenever a new filing deadline arrives.'"
   ],
   "jargon": [
    {
     "term": "SOP (standard operating procedure)",
     "hint": "a written step-by-step guide for a recurring task"
    },
    {
     "term": "Trigger",
     "hint": "the event that tells someone to use the procedure now"
    },
    {
     "term": "Scope",
     "hint": "who and what the procedure covers"
    },
    {
     "term": "Trust account",
     "hint": "a separate bank account for holding client money"
    },
    {
     "term": "Revision history",
     "hint": "the log of every change made to the procedure"
    }
   ],
   "story": "This happens in real offices: a firm had a careful procedure for client money arriving in the trust account. It was filed in a policy folder with no trigger and no owner. A new assistant received a client's first payment, didn't know the procedure existed and logged it in the general account. Untangling it took the accountant days and had to be reported. A trigger line, 'whenever any client payment arrives,' on the reception checklist would have pointed straight to it.",
   "ask": "[Name], what event should make someone reach for a procedure? [Name], how would they know the procedure exists?"
  },
  "p2": {
   "why": "Every procedure needs an owner, an ID, a version number and a trigger.",
   "talk": "A standard operating procedure, or SOP, is a written set of steps for a recurring task. Four things make one actually get used. A clear trigger, the moment that tells someone 'use this now'. An owner who keeps it up to date. An ID and version number, so everyone knows they're using the latest one. And being short enough to follow in the moment. A checklist beats a manual nobody opens.",
   "walk": [
    "First, without a clear trigger, the procedure won't be used consistently.",
    "Next, without an owner, updates slip and it goes stale.",
    "Then, give it an ID and version number from the start.",
    "Finally, keep it short enough to follow in the moment. A checklist beats a manual nobody opens."
   ],
   "contrast": {
    "lazy": "A four-page 'Courier Procedures' document in a shared folder, no owner, no version, last updated two years ago.",
    "excellent": "'SOP-OPS-07 Courier deliveries, v2.0. Trigger: any document leaving the office by courier. Owner: office manager. Eight-step checklist on one page, linked booking form, last reviewed this quarter.'"
   },
   "outcome": "In a law firm, the moments that need a procedure are often the high-stakes ones: client money, court deadlines, confidential deliveries. If the procedure doesn't trigger in that moment, the error lands on a client's case or the firm's compliance record. A clear trigger turns good intentions into consistent action.",
   "ask": "[Name], you're writing a procedure for last-minute court filing deadlines. What's the trigger? [Name], what must the first three steps cover to be useful in the moment?",
   "mystery": "The case of the ownerless courier SOP. An existing procedure for courier deliveries has no owner, no version number and no trigger, and was last updated two years ago. The firm also needs a new procedure for a client's first payment into the trust account. In pairs, five minutes: find what's missing from the courier SOP and who you'd ask, and bring back the trigger, scope and first three steps for the trust account procedure."
  }
 },
 "6::Hybrid Screen-Recording Workflow (Loom + Text)": {
  "p1": {
   "icebreaker": "Game: 'Show or tell?' I'll name a task. Hold your hand up like a camera if it's easier to show on screen, or point to your mouth if it's easier to just tell. Submitting an expense report across six screens. Where the spare printer paper is. Setting up a Zoom with breakout rooms. Who to call for building access.",
   "teaser": "Video sounds like the modern answer to every procedure. But there's one thing a video on its own can't do, and it matters every time someone's in a hurry.",
   "why": "A short video shows the task; a written summary makes it searchable.",
   "talk": "Some processes are much easier to show than describe, especially clicking through software. A short screen recording captures exactly what to do. But on its own, a video is hard to search, skim or update. Pairing it with a short written version gives you the best of both.",
   "walk": [
    "First, record a short screen video, ideally under five minutes, and talk through what you're doing and why.",
    "Next, straight afterwards, write the steps as a numbered list.",
    "Then, store both together, with the video link at the top and the steps below.",
    "Finally, keep each recording to one process, not several."
   ],
   "jargon": [
    {
     "term": "Loom",
     "hint": "a tool for recording your screen and voice as a short video"
    },
    {
     "term": "Screen recording",
     "hint": "a video of what you do on your screen"
    },
    {
     "term": "Hybrid workflow",
     "hint": "a video and written steps stored together for one process"
    }
   ],
   "story": "A real pattern from the field: an assistant recorded a 25-minute video covering billing, expenses and time entry in one go before going on leave. Her cover needed to find the one minute about expense approvals and spent half a morning scrubbing through it. She gave up and called her on holiday. Three short recordings with numbered steps underneath would have answered the question in two minutes.",
   "ask": "[Name], which of your processes would be easier to show than to write down? [Name], what would you put in the written steps underneath?"
  },
  "p2": {
   "why": "An outdated recording is worse than no recording, because it teaches the wrong thing.",
   "talk": "Screen recordings are brilliant for complicated, multi-screen tasks, but they have weak spots. A video on its own isn't enough; people need the written steps to skim and search. When the software changes, both the video and the text need updating, or the recording starts teaching the wrong thing. They should open easily without special logins. And for simple procedures, plain text is usually clearer.",
   "walk": [
    "First, a video without the written summary isn't a complete procedure.",
    "Next, when the software changes, update both.",
    "Then, make recordings easy to open, without special logins.",
    "Finally, use this format only where it helps. Simple procedures are clearer as text."
   ],
   "contrast": {
    "lazy": "Records one long video, posts the link in a chat and never looks at it again, even after the software update.",
    "excellent": "A four-minute video for the six-screen expense process, numbered steps underneath, both stored on the procedure page with a version date, and a note on the owner's checklist: 'software update = re-record and re-check steps.'"
   },
   "outcome": "An out-of-date recording doesn't just waste time; it teaches people the wrong process with confidence. In billing, that means invoices submitted wrongly, delayed payments and corrections the client sees. Keeping video and text current protects accuracy and the firm's credibility.",
   "ask": "[Name], you need to document a multi-screen expense process with confusing approval routing. Video plus text, or text alone? [Name], what decides it for you?",
   "mystery": "The case of the outdated video. The firm updated its billing software last month. A temp followed an old screen recording and submitted invoices the wrong way. In teams, four minutes: find what should have happened when the software changed, and bring back a plan for teaching the next temp the six-screen expense report: what the recording covers and the written steps that go with it."
  }
 },
 "6::Maintenance, Auditing & Version Control": {
  "p1": {
   "icebreaker": "Game: 'Which version?' Three files on the shared drive: 'New client SOP FINAL,' 'New client SOP FINAL v2,' 'New client SOP FINAL use this one.' Shout one, two or three for the one you'd follow. Now, how sure are you?",
   "teaser": "There's a tiny habit on this slide that would have made that game impossible to get wrong. It takes ten seconds, and most offices skip it.",
   "why": "Every time a procedure changes, it gets a new version number and a note of what changed.",
   "talk": "A procedure is never really finished. It gets written, reviewed, approved, monitored and revised. Version control means everyone can tell which version they have and what changed. Without it, an old copy can keep circulating and nobody notices.",
   "walk": [
    "First, schedule regular reviews, quarterly or twice a year.",
    "Next, log every revision: the date, who changed it and what changed.",
    "Then, update it outside the schedule when something triggers it: a new law, a better method, an error, new software or confused staff.",
    "Finally, measure whether it's followed, with real numbers like error rates."
   ],
   "jargon": [
    {
     "term": "Version control",
     "hint": "numbering each change so everyone knows which copy is current"
    },
    {
     "term": "Audit",
     "hint": "a check of whether procedures are being followed and still correct"
    },
    {
     "term": "Revision log",
     "hint": "a list of changes with the date, who and what"
    }
   ],
   "story": "This happens in real offices: after a misdirected courier delivery, a step was added to the procedure to confirm the recipient by phone. The update was saved as a new file, but the old one stayed in the team's bookmarks. Six months later, the same mistake happened, and the person was following the old version perfectly. Archiving the old copy and bumping the version number would have prevented it.",
   "ask": "[Name], how would you know if someone was working from an out-of-date procedure? [Name], what's one check you could run this week?"
  },
  "p2": {
   "why": "An audit finding that never makes it back into the procedure will happen again.",
   "talk": "Procedures go stale quietly. If someone changes the content without changing the version number, old copies survive and people follow different versions without knowing it. So we keep every procedure in one central place, give each one an owner, and when an audit finds a gap, we actually go back and update the procedure. Otherwise the same mistake happens again.",
   "walk": [
    "First, changing the content without changing the version number is how old copies survive.",
    "Next, keep all procedures in one central place.",
    "Then, after an audit finds a gap, actually update the procedure.",
    "Finally, give each procedure an owner."
   ],
   "contrast": {
    "lazy": "Edits the procedure in place, keeps the 'v1' label and tells nobody. The audit finding sits in an email.",
    "excellent": "Updates it to v1.1, logs 'Date, name, removed old courier, added recipient phone check after incident,' archives the old copy, notifies the users and closes the audit finding with a link to the new version."
   },
   "outcome": "If three people follow three versions of a filing procedure, at least two are doing it wrong, and one of them may be the one that misses a deadline or sends a document to the wrong place. Version control is how a firm shows it learned from an incident, which matters to clients, insurers and regulators.",
   "ask": "[Name], an audit finds three people following three slightly different versions of the same filing procedure without realising it. What does that tell you? [Name], what do you change?",
   "mystery": "The case of the two 'v1's. Two assistants are following two different versions of the new-client procedure, both labelled 'v1.' In this quarter's review you also find a procedure naming a courier the firm stopped using and another missing a step added after an incident. In pairs, five minutes: find how the two 'v1's happened, and bring back the fix plus the revision log entries you'd write for all three."
  }
 },
 "6::Change Management for New SOPs": {
  "p1": {
   "icebreaker": "Game: 'Old way or new way?' I'm announcing a new process: from Monday, all client calls get logged in the system, no more sticky notes. Stand up if you'd happily switch on Monday. Stay seated if your first thought is 'why?' Look around. That's the room you're rolling out to.",
   "teaser": "There's one reason people resist new processes that has nothing to do with the process itself. Once you see it, your rollouts will change.",
   "why": "Writing a new procedure is only half the job; the other half is getting people to use it.",
   "talk": "A brilliant procedure nobody adopts is the same as no procedure. People resist change most when they don't understand why it's happening, or weren't asked. So a rollout needs its own plan.",
   "walk": [
    "First, explain why the change is happening: what problem it solves.",
    "Next, introduce it properly, with a walkthrough or a short training moment.",
    "Finally, check afterwards that it's actually being followed."
   ],
   "jargon": [
    {
     "term": "Change management",
     "hint": "planning how people move from the old way to the new way"
    },
    {
     "term": "Rollout",
     "hint": "introducing a new process to the people who'll use it"
    },
    {
     "term": "Adoption",
     "hint": "people actually using the new process day to day"
    }
   ],
   "story": "A common pattern from the field: an assistant updated the shared travel-booking procedure on a Monday without telling anyone. By Wednesday, three bookings had been made the old way, one on a fare the firm no longer allowed. Nobody was being difficult; they simply didn't know. A two-line email and a five-minute walkthrough at the team meeting would have done it.",
   "ask": "[Name], why do you think people resist a new process? [Name], what's worked for you when you've had to change someone's habit?"
  },
  "p2": {
   "why": "Quietly editing the shared document isn't a rollout.",
   "talk": "Quietly updating a shared document isn't a rollout. Most people won't notice the change until they've already done it the old way. So we tell people what changed and why, and ideally involve the people who'll use it before it's final, so the new procedure feels like theirs rather than something imposed on them.",
   "walk": [
    "First, most people won't notice a silent edit until they've already done it the old way.",
    "Finally, involve the people who'll use it, so it doesn't feel imposed."
   ],
   "contrast": {
    "lazy": "'I've updated the filing procedure in the shared drive, please use it going forward.'",
    "excellent": "'Two of you helped spot this error, so I've drafted a fix. Can you test it this week? Then a ten-minute walkthrough on Thursday: what's changed, why, and where the checklist lives. I'll check the first ten filings with you after go-live.'"
   },
   "outcome": "A fix that nobody follows leaves the original error in place, and in filing work that means the same missed deadline or rejected filing again. Good adoption is what actually turns a better procedure into fewer errors on client matters.",
   "ask": "[Name], you've finished a revised filing procedure that fixes a real, recurring error, but the team has done it the old way for two years. What's your rollout plan beyond sharing the document? [Name], who would you involve first?",
   "mystery": "The case of the sticky notes. You've written a new procedure for logging calls from clients, and the team has used sticky notes for years. Last time you updated a procedure silently, three bookings were done the old way. In teams, five minutes: find what went wrong last time, and bring back a rollout plan: what you explain, how you show it and how you check it's working after two weeks."
  }
 }
});
