/* Day 7 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "7::The EA/PA's Role in Finance": {
  "p1": {
   "icebreaker": "Game: 'Hands up if you've touched money.' Hands up if you've ever handled a receipt at work. Keep it up if you've ever sent an invoice. Keep it up if you've ever chased someone for payment. Keep it up if you've ever coded an expense to a client. Look around: whoever still has a hand up, you're already in finance.",
   "teaser": "There's one tiny mistake, just two digits, that can travel from your desk all the way to a client's bill. By the end of this topic you'll know exactly how far it goes.",
   "why": "When you handle an invoice or an expense, you're a real link in the firm's money chain, not just filing paperwork.",
   "talk": "These days, assistants regularly deal with invoices, expenses and reimbursements. That means a mistake you make doesn't stay on your desk. Swap two digits and the error flows into the books, then the client's bill, then the firm's reports. Nobody downstream knows it started with you, so nobody thinks to check. That's why your step matters as much as the accountant's.",
   "walk": [
    "First, treat every financial document as something that affects the firm's accuracy.",
    "Next, check the numbers before you pass anything on.",
    "Then, track financial tasks with dates, like any other recurring work.",
    "After that, if something looks off, flag it. Don't assume someone later will catch it.",
    "Finally, understand what depends on your step, so you know why getting it right matters."
   ],
   "jargon": [
    {
     "term": "Reimbursement",
     "hint": "paying someone back for money they spent on the firm's behalf"
    },
    {
     "term": "Coding (an expense)",
     "hint": "labelling a cost with the right category and client matter"
    },
    {
     "term": "Matter",
     "hint": "a single client case or piece of legal work, with its own number"
    }
   ],
   "story": "A common first-week story: an assistant typed a taxi receipt of $47 as $74 on an expense sheet. Nobody noticed, and it went onto the client's monthly bill. The client's finance team did notice, and questioned the whole invoice, which held up payment for three weeks. A ten-second check against the receipt would have caught it.",
   "ask": "[Name], have you done any bookkeeping or invoicing before? What did it involve? [Name], what about you: where have you already touched money at work without calling it finance?"
  },
  "p2": {
   "why": "A transposed number at your step becomes someone else's problem further down the line.",
   "talk": "Assistants usually touch the firm's money in three places. Paying bills: collecting invoices, matching them against what was approved and sending them for payment. Getting paid: preparing client invoices, keeping track of what's still owed and sending polite reminders. And expenses: gathering receipts, coding each one to the right matter and flagging anything outside the rules. We're rarely the last step, which is exactly why a small slip at our step travels so far.",
   "walk": [
    "First, paying bills: collecting invoices, matching them to approvals and sending them for payment.",
    "Next, getting paid: preparing client invoices, tracking what's outstanding and sending polite reminders.",
    "Finally, expenses: gathering receipts, coding them to the right matter and flagging anything outside policy."
   ],
   "contrast": {
    "lazy": "Forwards the invoice to accounts with 'Please pay, thanks' and moves on. If the amount is wrong, that's accounts' problem.",
    "excellent": "Checks the invoice against the approval first: 'Invoice says $1,850, the PO says $1,580. I've asked the vendor to confirm before we pay.' The error stops at their desk."
   },
   "outcome": "Small errors at our step end up on client bills, and clients who find one mistake start checking everything. That slows payment, damages trust and, in a dispute, gives the other side something to question. Clean numbers at the start keep the firm's money and reputation steady to the end of the case.",
   "ask": "[Name], a vendor invoice for $1,850 arrives, but the approved purchase order says $1,580. What do you do before it goes anywhere near payment? [Name], what would you write to the vendor?",
   "mystery": "The case of the receipts with one clue. Elias hands you receipts from a client lunch and a taxi ride, with 'Harlow' scribbled on just one. Meanwhile a court-reporter invoice for the Meridian deposition arrives with the right amount but the wrong matter number. In pairs, three minutes: what do you check and record now so nothing is guessed later, and if the Meridian invoice went through as is, where would the error show up next and who would have to fix it? Bring back your checklist."
  }
 },
 "7::What an SOP Actually Needs": {
  "p1": {
   "icebreaker": "Game: 'Shout the missing step.' I'll give you instructions for making a cup of tea, and you shout what's missing. 'Put the teabag in the cup. Drink it.' Go! Now another: 'Boil the kettle. Add milk. Drink.' Every gap you just shouted is what a temp hits on day one.",
   "teaser": "There are five parts to a real procedure, and most office procedures I see are missing at least two. Let's find out which two get forgotten most.",
   "why": "A good procedure answers five questions: why, who, how, how do we check, and who do we call when it goes wrong.",
   "talk": "Those five answers are the five parts of a real procedure, and they come in order. Most procedures people write are just the steps, the 'how.' The other four parts are what make it safe for someone new to follow. Without them, people guess, and every person guesses differently.",
   "walk": [
    "First, purpose: why does this process exist?",
    "Next, scope: exactly who does it apply to?",
    "Then, procedure: the actual steps.",
    "After that, controls: the checks built in to prove it was done right.",
    "Finally, escalation: when and how to report a problem."
   ],
   "jargon": [
    {
     "term": "SOP (Standard Operating Procedure)",
     "hint": "a written, step-by-step guide to how a task is done"
    },
    {
     "term": "Controls",
     "hint": "built-in checks that prove a step was done properly"
    },
    {
     "term": "Scope",
     "hint": "who and what the procedure covers, and what it doesn't"
    }
   ],
   "story": "This happens in real offices: the one person who knew how vendor payments were approved left on short notice. Her 'procedure' was a sticky note that said 'check, approve, pay.' Her cover approved a duplicate invoice because nothing said to check for duplicates. The firm paid twice and took two months to get the money back. A single control line would have prevented it.",
   "ask": "[Name], have you ever had to follow a process that wasn't written down anywhere? How did you work it out? [Name], what went wrong, or nearly went wrong, the first time you tried one?"
  },
  "p2": {
   "why": "A simple test for any procedure: could a temp follow it on their first day?",
   "talk": "A procedure needs a few parts to be genuinely useful. Its purpose and scope: why it exists, who and what it covers, and just as importantly, what it doesn't. The steps themselves, numbered, so anyone can follow them, plus the checks that prove it was done properly. And escalation: who to contact when something goes wrong, and by when. Without that, each person does it their own way, and that's exactly what audits find.",
   "walk": [
    "First, purpose and scope: why it exists, and who and what it covers, including what it doesn't.",
    "Next, procedure and controls: numbered steps anyone can follow, plus checks and records that prove it was done properly.",
    "Finally, escalation: who to contact when something goes wrong, and by when."
   ],
   "contrast": {
    "lazy": "'Approve and pay as usual.' It makes sense to the person who wrote it and nobody else.",
    "excellent": "'1. Match the invoice to the approved PO. 2. Check it isn't already paid. 3. Get partner sign-off over $1,000. 4. Log it in the payments tracker. Problems: email the office manager the same day.'"
   },
   "outcome": "When a procedure only lives in one person's head, the firm is one holiday away from a mistake. Paying twice, paying the wrong vendor or missing a client deadline all come from people guessing. And when an auditor or a regulator asks how something is done, a written procedure with checks is your proof that the firm handles money properly.",
   "ask": "[Name], let's draft the five parts, one line each, for a procedure on processing a client's expense reimbursement. Start us off with purpose and scope. [Name], give us the controls and escalation.",
   "mystery": "The case of the six-week gap. The only person who knows how Elias's monthly card statements get reviewed is going on leave for six weeks, and her notes are a list of steps with no names or checks. A temp also starts Monday to process vendor invoices, and the written procedure says 'approve and pay as usual.' In teams, five minutes: find which of the five parts are missing from each, then rewrite one of them so a temp could follow it on day one. Bring back your rewritten version."
  }
 },
 "7::The Financial Calendar": {
  "p1": {
   "icebreaker": "Game: 'Monthly, quarterly or yearly?' I'll call out a deadline; hold up one finger for monthly, four for quarterly, twelve... well, both hands for yearly. Client invoicing. Estimated tax payment. Contractor tax forms. Trust reconciliation. Licence renewal. Look around, who was confident?",
   "teaser": "One of those deadlines cost a firm a late fee last quarter, and it wasn't because anyone forgot it. It was because of where the reminder lived. We'll get to it.",
   "why": "Money deadlines are relentless, so keep them all on one calendar with reminders well ahead.",
   "talk": "Billing cycles, tax deadlines and month-end closes keep coming round. If they live in three different places, or in your memory, one of them will eventually slip. One shared calendar, with early reminders, means nothing depends on one person's memory or one person being in the office. It's boring, and that's the point.",
   "walk": [
    "First, put billing, tax and closing dates on one calendar.",
    "Next, set automatic reminders about a week to ten days before each deadline.",
    "Then, look at the calendar every week for what's coming up.",
    "After that, if one type of deadline keeps slipping, give it extra buffer.",
    "Finally, check each cycle whether a date or requirement has changed."
   ],
   "jargon": [
    {
     "term": "Month-end close",
     "hint": "finishing and checking the month's books so they can be locked"
    },
    {
     "term": "Billing cycle",
     "hint": "the regular schedule on which clients are invoiced"
    },
    {
     "term": "Estimated tax payment",
     "hint": "tax paid in advance during the year, usually quarterly"
    }
   ],
   "story": "A real pattern from the field: a payroll filing reminder sat only in one partner's personal calendar. He was on holiday that week, the reminder popped up on a phone nobody was looking at, and the filing went in late. The penalty was small, but the firm had to explain it to its accountant and fix the process in a hurry. A shared calendar with a second person on the reminder would have cost nothing.",
   "ask": "[Name], of billing, tax and month-end, which would you be most likely to let slip? Why? [Name], what would you put in place so that one can't slip?"
  },
  "p2": {
   "why": "A reminder a week or more ahead gives you time to fix a problem, not just notice it.",
   "talk": "Money deadlines come round on three rhythms. Every month, there's client invoicing, the month-end close and reconciling the bank and trust accounts. Every quarter, there are estimated tax payments and payroll filings. And every year, there are the tax forms for staff and contractors at the end of January, the year-end close and licence renewals. The exact dates change, so we confirm them with the firm's accountant each year.",
   "walk": [
    "First, monthly: client invoicing, month-end close and bank and trust reconciliations.",
    "Next, quarterly: estimated tax payments and quarterly payroll filings.",
    "Finally, yearly: contractor and employee tax forms at the end of January, year-end close and license renewals."
   ],
   "contrast": {
    "lazy": "A reminder on the day: 'Payroll filing due today.' Now there's no time to chase a missing figure.",
    "excellent": "A shared calendar entry ten days out: 'Q4 payroll filing due 31 Jan. Owner: me. Backup: office manager. Need: final payroll report from accountant by 24 Jan.'"
   },
   "outcome": "Late filings mean penalties and interest, and a late trust reconciliation can become a question from the bar regulator. Late invoicing means the firm waits longer for money it has already earned. A calendar that warns you early turns all of those into ordinary tasks instead of emergencies.",
   "ask": "[Name], let's build the next 90 days of the firm's financial calendar: which monthly, quarterly and yearly items fall in that window? [Name], when does each reminder go off?",
   "mystery": "The case of the crowded December. It's mid-December, and last quarter the firm paid a late fee because a payroll reminder lived only in a partner's personal calendar. Now your calendar shows month-end close, the trust reconciliation, the January estimated tax payment and the year-end contractor forms all within six weeks. In pairs, four minutes: decide which one you start first and why, and design the calendar set-up that makes last quarter's late fee impossible. Bring back your order and your set-up."
  }
 },
 "7::Financial KPIs for EAs/PAs": {
  "p1": {
   "icebreaker": "Game: 'Higher or lower?' I'll say a number and you shout 'higher' or 'lower' to guess the real target. Days from finishing work to sending the invoice: 10? Reconciliation accuracy: 80 percent? Retainer alert: at zero? Three guesses, three surprises for some of you.",
   "teaser": "That last one, the retainer alert, is set at a number that looks odd at first. Hold on to your guess, because the reason behind it is the whole point of this topic.",
   "why": "Three numbers tell you whether the financial side is healthy: how fast invoices go out, how accurate reconciliations are and how much retainer is left.",
   "talk": "The first of those three numbers is how quickly invoices go out. The target is one to three days from finishing the work to sending the bill. That might not sound urgent, but every day an invoice sits unsent is money the firm has already earned and isn't collecting. Slow invoicing also means slower payment, and clients question old charges more than fresh ones.",
   "walk": [
    "First, track how long invoices take to go out, against the 24 to 72 hour target.",
    "Next, track reconciliation accuracy, aiming for 98 to 100 percent.",
    "Then, set an alert when a client's retainer drops below a quarter.",
    "After that, review these numbers on a set schedule.",
    "Finally, if one keeps missing, look at the process, not just effort."
   ],
   "jargon": [
    {
     "term": "KPI (Key Performance Indicator)",
     "hint": "a number that shows whether something is going well"
    },
    {
     "term": "Retainer",
     "hint": "money a client pays upfront, used to cover future work"
    },
    {
     "term": "Reconciliation",
     "hint": "checking the firm's records match the bank's"
    }
   ],
   "story": "A common pattern in small firms: invoices went out 'whenever someone got to them,' usually a week or two after month-end. One client queried a three-month-old charge because nobody could remember the work. The partner wrote it off rather than argue. Sending within three days, while the work was fresh, would have kept that money.",
   "ask": "[Name], why do you think the retainer alert is set at 25 percent instead of zero? [Name], what could go wrong if we waited until zero?"
  },
  "p2": {
   "why": "An alert at 25 percent gives you time to act before a client's account runs dry.",
   "talk": "The other two numbers work the same way. Reconciliations, where we check the firm's records against the bank, should be 98 to 100 percent accurate. And for clients who pay money upfront, called a retainer, we set an alert when it drops to a quarter of the original amount. Why a quarter and not zero? Because that gives us time to ask for more before the account runs dry in the middle of a case.",
   "walk": [
    "First, reconciliation accuracy of 98 to 100 percent.",
    "Finally, the retainer alert at 25 percent, which buys you runway."
   ],
   "contrast": {
    "lazy": "Elias asks 'Are we on top of billing?' and gets 'Yes, I think so, invoices go out after month-end.'",
    "excellent": "'Invoices are going out in about five days, against a target of three. Reconciliations are at 99 percent. Harlow's retainer is at 22 percent, so I've drafted a top-up request for you to approve.'"
   },
   "outcome": "If a retainer runs dry mid-case, the firm either works unpaid or has an awkward money conversation right before a hearing, when the client is most stressed. Slow invoices mean slower cash and more disputed charges. Watching three simple numbers keeps the case funded and the client relationship calm through to the result.",
   "ask": "[Name], a client's $10,000 retainer is down to $2,300, and they have a hearing next week. What should have already happened? [Name], what do you do now?",
   "mystery": "The case of the alert nobody read. The Harlow retainer dropped below 25 percent two weeks ago, but the alert went to an inbox nobody checks, and the client now owes more than the retainer holds. Meanwhile Elias asks, 'Are we on top of billing?' and invoices usually go out five days after month-end. In pairs, four minutes: find what went wrong in the process, not just the person, and bring back the three numbers you'd report to Elias with one fix for each."
  }
 },
 "7::Bookkeeping Basics & Compliance": {
  "p1": {
   "icebreaker": "Game: 'Stand up, sit down.' Stand up if it's fine; stay seated if it's not. I enter an expense and my manager approves it. I enter an expense and I approve it, because it's only $20. My colleague enters a payment and I approve it. I approve my own expense because my manager is on holiday. Who stood for the $20 one?",
   "teaser": "That $20 question splits every room. There's one golden rule that answers it, and the amount has nothing to do with it.",
   "why": "The golden rule of bookkeeping: never approve your own transaction.",
   "talk": "Every transaction gets labelled as money in, money out or money owed to the firm. Every entry leaves a trail showing who recorded it and why. And the same person never both enters and approves, because that separation is what makes the books trustworthy. It isn't about suspecting anyone. It's about making mistakes visible, and protecting you if a question ever comes up.",
   "walk": [
    "First, label each transaction as income, expense or receivable when you record it.",
    "Next, keep a clear trail: who entered it, when and from what document.",
    "Then, separate duties. Never approve something you entered, even to save time.",
    "After that, reconcile regularly, while mistakes are still easy to trace.",
    "Finally, flag anything that looks like a compliance gap straight away."
   ],
   "jargon": [
    {
     "term": "Receivable",
     "hint": "money clients owe the firm but haven't paid yet"
    },
    {
     "term": "Separation of duties",
     "hint": "one person enters, a different person approves"
    },
    {
     "term": "Audit trail",
     "hint": "the record of who did what, when and from which document"
    }
   ],
   "story": "This happens in real offices: to save time, one assistant was allowed to enter and approve small office purchases. Over a year, a few duplicate supplier invoices slipped through, each under $200. Nobody did anything dishonest, but nobody was checking either. When the accountant found it, the assistant was the one answering questions. A second pair of eyes would have protected both the firm and her.",
   "ask": "[Name], why does separating duties matter, even in a small office? [Name], who does it actually protect?"
  },
  "p2": {
   "why": "Know whether your firm records money when it moves, or when it's earned.",
   "talk": "Three bookkeeping ideas are worth knowing. Double-entry means every transaction touches at least two accounts, which is what makes mistakes show up. Cash versus accrual is about timing: cash records money when it actually moves, accrual records it when it's earned or owed. And the chart of accounts is simply the list of categories every transaction gets filed under. Coding things consistently is what makes the reports trustworthy.",
   "walk": [
    "First, double-entry: every transaction touches at least two accounts, which is what makes errors show up.",
    "Next, cash versus accrual: cash records money when it moves; accrual records it when it's earned or owed.",
    "Finally, the chart of accounts: the list of categories every transaction is coded to. Consistent coding makes reports reliable."
   ],
   "contrast": {
    "lazy": "'The approver's out, so I'll just approve it myself this once. It's only $2,400.'",
    "excellent": "'I've entered it but can't approve my own entry. I've sent it to Elias as backup approver, and I'll suggest we name a standing backup so this doesn't stall again.'"
   },
   "outcome": "Books that one person both enters and approves are books nobody can fully trust, and auditors, accountants and regulators know it. If money is ever questioned, the trail and the separation are what prove the firm handled it properly. In a dispute over fees, clean records are evidence; messy ones are a weakness.",
   "ask": "[Name], you're asked to both enter and approve a $2,400 vendor payment because the usual approver is out. What do you do? [Name], what do you suggest for next time?",
   "mystery": "The case of the $180 shortcut. You enter an office supplies order, and your manager says, 'You may as well approve it too; it's only $180.' On the same day, a client pays a $6,000 invoice in March for work done in December. In pairs, three minutes: write what you'd say to your manager and why the amount doesn't change the answer, then decide when the $6,000 counts as income under cash and under accrual, and how you'd find out which one Thorne & Partners uses. Bring back both answers."
  }
 },
 "7::Reading Basic Financial Statements": {
  "p1": {
   "icebreaker": "Game: 'Which report?' Point left for the P&L, right for the balance sheet, straight up for cash flow. 'Did we make a profit in March?' 'What do we owe right now?' 'Can we pay staff next Friday?' 'What do we own?' Point fast, don't look at your neighbour.",
   "teaser": "One of those questions catches people out, because a firm can be making a profit and still not be able to pay staff. By the end of this topic you'll be able to explain how.",
   "why": "You don't need to be an accountant, but you do need to read the three reports that tell a business's money story.",
   "talk": "There are three reports. The profit and loss, or P&L, shows income minus expenses over a period, like a month. The balance sheet shows what the business owns and owes on one date, and it always balances: assets equal liabilities plus equity. The cash flow statement shows the cash that actually came in and went out. A firm can be profitable and still short of cash if clients pay slowly. And client money in trust is never the firm's income.",
   "walk": [
    "First, compare each month's P&L with last month and the same month last year.",
    "Next, check receivables, what clients owe, and how old it is.",
    "Then, watch recurring expenses for anything new or higher.",
    "After that, take questions to the accountant with the exact line and amount.",
    "Finally, keep the monthly reports together, named the same way."
   ],
   "jargon": [
    {
     "term": "P&L (Profit and Loss)",
     "hint": "income minus expenses over a period"
    },
    {
     "term": "Balance sheet",
     "hint": "what the business owns and owes on one date"
    },
    {
     "term": "Cash flow statement",
     "hint": "the money that actually came in and went out"
    },
    {
     "term": "Equity",
     "hint": "what's left for the owners after debts are taken off"
    }
   ],
   "story": "A real pattern from the field: an assistant noticed 'software subscriptions' had nearly tripled on the monthly P&L but assumed the accountant knew. Nobody did. A free trial had quietly turned into a paid annual plan for the whole office, and it ran for months before anyone looked. One specific question, line and amount, would have caught it in the first month.",
   "ask": "[Name], why might a profitable firm still struggle to make payroll? [Name], can you add one more reason?"
  },
  "p2": {
   "why": "Our job is spotting what looks wrong, not preparing the numbers.",
   "talk": "The accountant prepares the statements. We read them, notice what's unusual and ask good questions, and we look at trends over months rather than one number on its own. Two traps: counting work that's unbilled or unpaid as if it were cash, and treating the trust account as money the firm can spend. It belongs to the clients.",
   "walk": [
    "First, read, don't prepare.",
    "Next, look at trends.",
    "Then, it isn't money until it arrives.",
    "Finally, trust money is never the firm's."
   ],
   "contrast": {
    "lazy": "'Hi, the numbers look a bit weird this month, can you check?'",
    "excellent": "'Software subscriptions went from $600 in May to $1,900 in June, line 6140. I can't match it to a new purchase. Could you tell me what's included?'"
   },
   "outcome": "Unnoticed cost creep drains money the firm needs for payroll and case costs. Treating unpaid work as cash leads to promises the firm can't keep. And counting trust money as income is a serious ethics breach that can put a lawyer's licence at risk. Reading three reports well protects all three.",
   "ask": "[Name], which of the three reports would you pull to answer 'can we afford this next month?' [Name], why not the P&L?",
   "mystery": "The case of the profitable firm with no cash. The P&L shows a healthy profit last quarter, but Elias says there isn't enough cash for next month's payroll, and you've also noticed 'Software subscriptions' jumped from $600 to $1,900. In pairs, four minutes: explain how both payroll facts can be true and which report you'd pull to show Elias, then write the exact question you'd send the bookkeeper about the software line. Bring back your explanation and your question."
  }
 },
 "7::SOA Reconciliation": {
  "p1": {
   "icebreaker": "Game: 'Quick maths, shout it out.' Start with 100. Add 50. Take away 80. Add 10. What's left? Shout it! Now: start with 4,000, add 6,500, take away 5,000. Shout! Well done, you've just done the heart of a reconciliation.",
   "teaser": "There's one thing people do when the numbers don't match that wastes whole days. By the end of this you'll know the shortcut instead.",
   "why": "Reconciling an account comes down to one formula: opening balance, plus invoices, minus payments, plus or minus adjustments, equals closing balance.",
   "talk": "A statement of account shows what a client owes over time. Reconciling it just means checking that formula works out exactly. When it doesn't, you don't start from scratch; you go looking for the specific difference. The size of the gap is your biggest clue, because it often matches one single item.",
   "walk": [
    "First, start from the opening balance, add invoices, subtract payments and apply adjustments, always in that order.",
    "Next, if income doesn't match deposits, compare the bank statement with the income records first.",
    "Then, don't rebuild every report. Start from the numbers that don't match and work back.",
    "After that, make sure the closing balance matches exactly. Don't round away a small gap.",
    "Finally, write down what caused any adjustment."
   ],
   "jargon": [
    {
     "term": "SOA (Statement of Account)",
     "hint": "a running record of what a client has been billed and has paid"
    },
    {
     "term": "Opening / closing balance",
     "hint": "what's owed at the start and end of the period"
    },
    {
     "term": "Adjustment",
     "hint": "a change like a credit, discount or late fee"
    }
   ],
   "story": "This happens in real offices: a client said they owed less than the firm's statement showed, and an assistant spent two days rebuilding a year of invoices from scratch. The difference turned out to be one credit note the client had never received. Searching for an item matching the exact gap would have found it in twenty minutes.",
   "ask": "[Name], why not just rebuild every report when something doesn't match? [Name], what's the first thing you'd look at instead?"
  },
  "p2": {
   "why": "When the numbers don't match, start with the difference and find what explains it.",
   "talk": "Let's walk through an example. A client starts the month owing 4,000. We add new invoices of 6,500, take off payments of 5,000 and a 250 credit, which leaves 5,250. But the client's records say 5,000. So we look for 250, and it turns out they never recorded the credit. Once we've found it, we write the reconciliation up, so next month starts from a number both sides agree on.",
   "walk": [
    "First, opening $4,000, plus invoices $6,500, minus payments $5,000, minus a $250 credit note, gives $5,250.",
    "Next, if the client's records say $5,000, look for the $250. Here, they never recorded the credit note.",
    "Finally, write up the reconciliation, so next month starts from an agreed number."
   ],
   "contrast": {
    "lazy": "'Their number's $250 lower. I'll just adjust ours to match so it balances.'",
    "excellent": "'The gap is exactly $250, which matches our credit note of 12 May. I've sent them a copy and noted the agreed closing balance of $5,250 for next month.'"
   },
   "outcome": "An unresolved difference grows every month and turns into a dispute about what the client really owes. Rounding a gap away hides errors that auditors will later find. A clean, agreed balance keeps the client paying on time and keeps the firm's fee position strong if anything is ever challenged.",
   "ask": "[Name], opening balance $3,200, invoices $4,800, payments $6,000 and a $150 late fee. What's the closing balance? [Name], the client says they owe $1,850. Where do you look first?",
   "mystery": "The case of the missing $1,200. Harlow's accounts team says their records show they owe $1,200 less than your statement of account. Clue: the firm issued a credit note in June. In pairs, four minutes: decide where you start and what you compare first, without rebuilding the year, then draft what you send Harlow once the numbers agree and the note you file so next month starts clean. Bring back your first step, your email and your note."
  }
 },
 "7::Reconciliation Discrepancy Detection": {
  "p1": {
   "icebreaker": "Game: 'Spot the twin.' I'll read five payments; clap once when you hear a likely duplicate. Courier, $875, Monday. Stationery, $112, Monday. Courier, $875, Tuesday. Court fee, $50, Wednesday. Stationery, $121, Thursday. Who clapped twice? Was the second one a duplicate or a typo?",
   "teaser": "Here's the trap: a reconciliation can balance perfectly and still be wrong. By the end of this topic you'll know how a 'perfect' total hides a real problem.",
   "why": "When a reconciliation doesn't balance, compare line by line, not just the totals.",
   "talk": "Matching totals can hide real problems. Two mistakes can cancel each other out, or a payment can land on the wrong client's account and still leave the overall total looking perfect. So when something doesn't balance, or even when it does, we check line by line: every payment against the right client, every reversal and anything that looks like a duplicate.",
   "walk": [
    "First, compare the ledger with the bank statement one line at a time.",
    "Next, check that credits went to the right client or account.",
    "Then, look for reversed entries that might be hiding an error.",
    "After that, run through the checklist: every invoice listed, every payment recorded and every difference explained.",
    "Finally, watch for anything that looks like a duplicate payment."
   ],
   "jargon": [
    {
     "term": "Ledger",
     "hint": "the firm's own record of every transaction"
    },
    {
     "term": "Reversal (reversed entry)",
     "hint": "an entry that cancels out an earlier one"
    },
    {
     "term": "Discrepancy",
     "hint": "a difference between two records that should match"
    }
   ],
   "story": "A real pattern from the field: a firm's bank and ledger totals matched every month, so nobody looked closer. In fact, a supplier had been paid twice one month and a refund recorded twice the next, and the two errors cancelled out on paper. The extra payment was only found at year-end, when the supplier had already closed the account. A line-by-line check that first month would have caught it straight away.",
   "ask": "[Name], if a reconciliation came up $340 short, what would you check first? [Name], what would you check second?"
  },
  "p2": {
   "why": "A payment put on the wrong client's account once ended up as a real legal dispute.",
   "talk": "This isn't just tidiness. A payment put on the wrong client's account once turned into a genuine legal dispute. The checklist that prevents it is short: every invoice listed, every payment recorded, nothing left unmatched and every difference explained. And to stop the same bill being paid twice, we combine system checks, a human check and approval limits.",
   "walk": [
    "First, every invoice is listed, every payment is recorded, nothing is left unmatched and every difference has an explanation.",
    "Finally, to prevent duplicate payments, use system checks, manual checks and approval limits."
   ],
   "contrast": {
    "lazy": "'Totals match, so we're done for the month.'",
    "excellent": "'Totals match, but I've ticked every line. Two $875 courier payments on 3 and 4 March, only one in the ledger. I've asked the courier for both invoices before deciding if it's a duplicate or a missing entry.'"
   },
   "outcome": "Money on the wrong client's account can mean one client is sent a statement showing credit they don't have, and another is chased for money they've paid. That's how a bookkeeping slip becomes a complaint, a refund fight or a legal dispute. Line-by-line checks keep client trust intact and the firm out of arguments it can't win.",
   "ask": "[Name], your reconciliation is $340 short. Walk us through the checklist in order. [Name], name the three most likely causes.",
   "mystery": "The case of the look-alike client. The bank shows two payments of $875 to the same courier on consecutive days, but the ledger shows one. And a $3,000 payment from Meridian was recorded against another client with a similar name, who has now been sent a statement showing a credit. In teams, five minutes: decide how you'd tell a duplicate from a missing entry, then list in order what you correct and who you tell about the Meridian payment. Bring back both lists."
  }
 },
 "7::Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk": {
  "p1": {
   "icebreaker": "Game: 'Whose money is it?' Shout 'Client!' or 'Firm!' A retainer paid in advance, not yet worked. A settlement cheque for the client. An invoice the client has paid and the attorney has approved. Money left in trust after the case ends. Fast!",
   "teaser": "There's one word for mixing these two kinds of money, and it's ended more legal careers than most people realise. You'll know it in a minute.",
   "why": "Money in a client trust account belongs to the client until it's earned; it is never the firm's money to borrow.",
   "talk": "Law firms hold client money, like retainers and settlements, in a special trust account. Mixing that money with the firm's own funds, even briefly or by accident, is called commingling. It's one of the most serious ethics violations a lawyer can commit, and it can end careers. Good intentions don't help; 'we were going to pay it back' is not a defence.",
   "walk": [
    "First, keep trust money and the firm's operating money in completely separate accounts.",
    "Next, only move money out of trust for a specific, documented reason, like an approved invoice or a signed disbursement.",
    "Finally, keep a running ledger for each client, showing exactly what's held for them."
   ],
   "jargon": [
    {
     "term": "IOLTA (Interest on Lawyers' Trust Accounts)",
     "hint": "a type of bank account that holds client money for lawyers"
    },
    {
     "term": "Commingling",
     "hint": "mixing client money with the firm's own money"
    },
    {
     "term": "Operating account",
     "hint": "the firm's everyday business bank account"
    },
    {
     "term": "Disbursement",
     "hint": "a payment out, made on the client's behalf"
    }
   ],
   "story": "A pattern regulators see again and again: a small firm was short for payroll and 'borrowed' from trust over a weekend, fully intending to pay it back on Monday. The money went back as planned. A routine audit found it anyway, and the lawyer faced discipline. Saying no, and telling the partner about the suggestion, would have kept everyone safe.",
   "ask": "[Name], what counts as a documented reason to move money out of trust? [Name], can you give an example of one that doesn't count?"
  },
  "p2": {
   "why": "Trust transactions are meant to feel slower and more careful; that friction is on purpose.",
   "talk": "Trust money belongs to the client, not the firm, and the rules around it are strict. A client's trust balance must never go below zero, not even for a moment, and not even if it's fixed the same day. That's why handling trust money should feel slower and more careful than paying an ordinary bill. That friction is deliberate; it's what protects the client and the firm's licence.",
   "walk": [
    "First, a client's trust balance must never go negative, not even for a moment, not even if it's fixed the same day.",
    "Finally, any trust transaction should feel more deliberate than a normal payment."
   ],
   "contrast": {
    "lazy": "'The settlement's gone in, so I'll pay the expert fee from trust now, the money's there.'",
    "excellent": "'The settlement cheque was deposited today. I'll wait until it has cleared, get the client's authorisation and Elias's written approval, record it on the client ledger, then pay the $400.'"
   },
   "outcome": "Trust mistakes are treated as ethics breaches, not admin errors. They can lead to bar investigations, suspension and loss of the client's confidence, and an opponent can use them to attack the firm's credibility. Slow, careful trust handling protects the client's money and the attorney's licence, which is what every case result depends on.",
   "ask": "[Name], one client's trust balance is $200 lower than the ledger says it should be. What's your first move? [Name], who needs to know before you do anything else?",
   "mystery": "The case of the Friday shortfall. The operating account is short for payroll on Friday, and someone suggests 'borrowing' from trust until a big client payment clears Monday. Meanwhile a client's $5,000 settlement cheque goes into trust today, and Elias asks you to pay the $400 expert fee from it right away because 'the money's there.' In pairs, four minutes: write what you say about the 'borrowing' and who needs to know, then list what has to happen before any money leaves trust for the expert. Bring back both."
  }
 },
 "7::Trust Account Reconciliation Discipline": {
  "p1": {
   "icebreaker": "Game: 'Line up the three.' I need three volunteers. You're the bank statement, you're the trust ledger, you're the total of every client's balance. Each of you holds up fingers for a number. Room: shout 'Match!' or 'No match!' Let's try three rounds.",
   "teaser": "In one of those rounds, all three numbers could match and a client could still be short. By the end of this topic you'll see how.",
   "why": "For a trust account, three numbers must always match exactly.",
   "talk": "The bank statement, the trust ledger and the total of every client's individual balance. Trust accounts need checking at least monthly, and right after anything unusual. And a difference is never 'probably fine'; it gets traced to the exact transaction. That's often called a three-way reconciliation.",
   "walk": [
    "First, compare the bank statement with the trust ledger on a fixed schedule.",
    "Next, check the ledger total against the sum of every client's balance.",
    "Finally, document every reconciliation, even the clean ones."
   ],
   "jargon": [
    {
     "term": "Three-way reconciliation",
     "hint": "bank, trust ledger and client balances must all agree"
    },
    {
     "term": "Client ledger",
     "hint": "the running record of what's held for one client"
    },
    {
     "term": "Bar auditor",
     "hint": "someone from the lawyers' regulator who checks trust records"
    }
   ],
   "story": "A common pattern: a firm reconciled its trust account every month, but only wrote it up when something was wrong. When the bar auditor asked for twelve months of records, there were three. The account had been fine all year, but the firm couldn't prove it, and that became the finding. A one-page write-up each month, clean or not, would have closed the audit in a day.",
   "ask": "[Name], why would you document a reconciliation that came out perfectly? [Name], who might ask to see it?"
  },
  "p2": {
   "why": "Even a one-dollar difference in a trust account gets escalated.",
   "talk": "Here's the catch with trust accounts: the overall account can balance perfectly while one individual client's money is short, because another client's money is covering the gap. So we check every client's balance, not just the total. And any difference, even a single dollar, gets escalated straight away. With trust money, there's no such thing as too small to mention.",
   "walk": [
    "First, the overall account can balance while one client's money is short, so check every client, not just the total.",
    "Finally, any difference, whatever its size, is escalated immediately."
   ],
   "contrast": {
    "lazy": "'It's a dollar, it's 5:30, I'll sort it next month.'",
    "excellent": "'Trust is $1 out for October. I've traced it to the bank charge on 14 October and told Elias before leaving. Write-up attached; I'll confirm the fix with the bank tomorrow.'"
   },
   "outcome": "A small unexplained gap can be a sign of a bigger problem, like one client's money covering another's. Regulators judge trust accounts on proof, and missing write-ups look like missing control. Clean, documented reconciliations protect the attorney's licence, and with it every case he's running.",
   "ask": "[Name], this month the bank and the trust ledger match, but one client's balance doesn't match what was deposited for them. Walk us through how you'd trace it. [Name], who do you tell, and when?",
   "mystery": "The case of the one-dollar month-end. Your trust reconciliation is off by $1. It's 5:30 p.m. on the last day of the month, and everyone wants to leave. Last month reconciled perfectly, and a colleague says there's no point writing it up. A bar auditor will ask to see the last 12 months. In pairs, three minutes: decide what you do with that dollar tonight, and what the auditor would want to find in your file. Bring back your action list and a one-line write-up."
  }
 },
 "7::Billing & Invoicing": {
  "p1": {
   "icebreaker": "Game: 'Real or fake invoice?' I'll describe three invoices; thumbs up if a client would pay it, thumbs down if not. One: total and due date, no terms. Two: total, due date, terms. Three: 'Legal services, $4,200,' nothing else. Show me your thumbs.",
   "teaser": "Invoice number three is the one that gets rejected most, and it's not because the amount is wrong. Let's see what's missing.",
   "why": "An invoice is simple maths, rate times hours plus expenses minus any discount, but it has to be exactly right.",
   "talk": "And beyond the total, every invoice needs three things: how much is due, when it's due and the payment terms. Without them, clients hesitate, and payment slows down. Most invoice problems aren't hard maths; they're an old rate, a missing date or a vague line. Getting those right is what turns finished work into money.",
   "walk": [
    "First, multiply the rate by the hours, add expenses, then apply any discount.",
    "Next, make sure it states the amount due, the due date and the terms.",
    "Then, check the rate and hours against the engagement terms.",
    "After that, recheck the final maths yourself.",
    "Finally, send it promptly. A perfect invoice sitting unsent doesn't bring in money."
   ],
   "jargon": [
    {
     "term": "Engagement terms (engagement letter)",
     "hint": "the agreement setting out what the client pays and how"
    },
    {
     "term": "Payment terms",
     "hint": "when and how the client must pay, e.g. within 30 days"
    },
    {
     "term": "Courtesy discount",
     "hint": "a reduction the firm chooses to give the client"
    }
   ],
   "story": "This happens in real offices: a rate rise was agreed with a client in January, but the billing template still had last year's rate. Three months of invoices went out low. The firm couldn't comfortably go back and ask for the difference, so it absorbed most of it. A rate check against the engagement letter, once a month, would have caught it on the first invoice.",
   "ask": "[Name], what three things must every invoice state? [Name], which of those three do you think gets left off most often?"
  },
  "p2": {
   "why": "Show the discount as its own line, so the client can see it.",
   "talk": "A clean invoice has three parts. At the top: the firm's details, the client, the matter number, the invoice number and the date. In the middle: each piece of work with its date, description, hours and rate, plus any expenses, and any discount shown on its own line so the client can see it. At the bottom: the total, when it's due, the payment terms, how to pay and any late-fee terms.",
   "walk": [
    "First, the header: firm details, client, matter number, invoice number and date.",
    "Next, the body: each entry with date, description, hours and rate, plus expenses, with any discount on its own line.",
    "Finally, the footer: total due, due date, terms, payment methods and any late-fee terms."
   ],
   "contrast": {
    "lazy": "'Legal services: $4,200. Thanks.'",
    "excellent": "Header with matter and invoice number; every entry with date, description, hours and rate; the courtesy discount on its own line; footer with 'Total due $4,200 by 30 June, payable within 30 days by bank transfer.'"
   },
   "outcome": "A vague or wrong invoice gets held by the client's accounts team, so the firm waits for money it has earned. An old rate means lost income the firm may never recover. And if fees are ever disputed, a clear, detailed invoice is the firm's evidence of what was agreed and delivered.",
   "ask": "[Name], let's do one live: 12.5 hours at $350 an hour, $240 in filing fees and a 10 percent courtesy discount on the fees only. Call out each step: what's the total? [Name], what else must the invoice say?",
   "mystery": "The case of the invoice nobody would pay. A client complains that your invoice just says 'Legal services — $4,200' with no detail, and their accounts team won't pay it. In another file, an invoice to Meridian went out with the hours right but last year's hourly rate, and the client paid it. In pairs, four minutes: rebuild the $4,200 invoice section by section, and decide what the problem now is with Meridian and what you do about it. Bring back your invoice outline and your Meridian plan."
  }
 },
 "7::Contract-Aware Billing": {
  "p1": {
   "icebreaker": "Game: 'Stop me at the line.' The cap on this matter is 40 hours. I'll count up in hours: 10, 20, 28, 32, 34, 36... Stand up the moment you'd warn the attorney. Look around: who stood at 32, who's still sitting?",
   "teaser": "There's a number in most engagement letters that says exactly when you should have stood up, and most people never look for it. Let's find it.",
   "why": "Know the contract's limits before you start billing, and warn people before you hit them.",
   "talk": "Every client agreement can have its own rules: payment terms, late fees and sometimes a cap on hours. If you only discover the cap when the final bill goes out, it's too late. The attorney has lost the chance to ask the client for more, and the extra hours often go unpaid. Reading the terms at the start is what keeps the warning early.",
   "walk": [
    "First, confirm payment terms, late fees and any hour cap before billing starts.",
    "Next, track hours against the cap as you go.",
    "Then, flag it well before the cap is reached.",
    "After that, apply late fees and terms consistently, as written.",
    "Finally, if the terms are unclear, confirm before you bill."
   ],
   "jargon": [
    {
     "term": "Hour cap",
     "hint": "the maximum hours the client has agreed to pay for"
    },
    {
     "term": "Purchase order (PO) number",
     "hint": "the client's own reference that must appear on the invoice"
    },
    {
     "term": "Late fee / interest",
     "hint": "an extra charge for paying after the due date"
    }
   ],
   "story": "A real pattern from the field: a matter had a capped budget, and nobody was tracking hours against it. The team found out at the final invoice that it was well over. The client refused to pay the excess, saying they'd never been warned, and the firm wrote it off. A simple note at 80 percent would have given the attorney time to ask for more.",
   "ask": "[Name], what would you do at 80 percent of an hour cap? [Name], who would you tell, and how?"
  },
  "p2": {
   "why": "Corporate clients often require specific billing codes, and invoices without them get rejected.",
   "talk": "Before we bill, we check what the client's engagement agreement says. How are they billed: by the hour, a flat fee, a share of the result or from a retainer? Is there a cap or budget, and how much notice do we owe before going over it? And what are the payment terms and any required format? Big corporate clients often insist on specific billing codes and will simply reject an invoice without them.",
   "walk": [
    "First, the billing arrangement: hourly, flat fee, contingency or retainer.",
    "Next, caps and budgets, and the notice needed before going over.",
    "Finally, payment and late-fee terms, plus any required format or codes."
   ],
   "contrast": {
    "lazy": "Bills the hours as they come and finds the cap when the client rejects the invoice.",
    "excellent": "'Elias, Harlow is at 34.5 of 40 capped hours, past the 80 percent mark. The letter requires notice now. I've drafted the notice and a request to extend the budget for you to approve.'"
   },
   "outcome": "Going over a cap without notice usually means the firm does the work for free. Missing a PO number or billing code means the invoice is rejected and payment waits. And a client who feels surprised by a bill trusts the firm less in the next negotiation. Reading the terms first keeps fees recoverable and the relationship strong.",
   "ask": "[Name], the Harlow matter has a 40-hour cap, with notice required at 80 percent. Time entries show 34.5 hours so far. What do you do today? [Name], who do you tell?",
   "mystery": "The case of the six extra hours. The Harlow matter has gone over its 40-hour cap by six hours, nobody sent the 80 percent notice, and the invoice is due out tomorrow. Separately, a new corporate client's engagement letter says invoices over $10,000 need a PO number and late payments carry 1.5 percent interest per month. In pairs, four minutes: write what you tell Elias about Harlow and his options, and decide where you record the new client's terms so billing actually uses them. Bring back both."
  }
 },
 "7::Pre-Bill Review: Checking an Invoice Before It Goes Out": {
  "p1": {
   "icebreaker": "Game: 'Who finds it first?' Hands up if you think the client usually spots an invoice error before the firm does. Now hands up if you think the firm does. Keep your hand up if you've ever spotted a mistake on a bill you received. That's the client's view, and they're very good at it.",
   "teaser": "There are only about five mistakes that turn up on almost every bad invoice. I'll give you the list, and you'll start seeing them everywhere.",
   "why": "An invoice mistake the client finds costs far more trust than one we catch first, so the pre-bill is where we protect the relationship.",
   "talk": "A pre-bill is the draft invoice the attorney reviews before it goes out. It's our last chance to catch mistakes. And invoice mistakes are nearly always the same few: the wrong rate, time on the wrong matter, vague or lumped-together entries, costs missing or billed twice, and terms that don't match the engagement letter. We prepare and check it; the attorney decides what's charged or written off.",
   "walk": [
    "First, run the pre-bill at the same point every month, once the period's time is in.",
    "Next, check the header: client, billing contact, matter, dates and any reference number the client needs.",
    "Then, check every time entry: matter, person, rate and a clear description, and flag anything against the client's guidelines.",
    "After that, check costs: a receipt for each, no duplicates and markups only if allowed.",
    "Finally, check the maths, the retainer to apply and the terms, and send the attorney your flags at the top."
   ],
   "jargon": [
    {
     "term": "Pre-bill",
     "hint": "the draft invoice the attorney reviews before it's sent"
    },
    {
     "term": "Block billing",
     "hint": "several tasks lumped into one time entry"
    },
    {
     "term": "Write-off",
     "hint": "time or cost the firm decides not to charge"
    },
    {
     "term": "Billing guidelines",
     "hint": "the client's own rules for what and how we can bill"
    }
   ],
   "story": "A common pattern: a corporate client's guidelines banned vague entries like 'research.' The invoice went out with six of them, and the client's billing team cut every one, then started reviewing the firm's invoices line by line. A pre-bill check against the guidelines would have had those entries rewritten before anyone outside saw them.",
   "ask": "[Name], which invoice error do you think a client notices first? [Name], which one do you think they'd forgive least?"
  },
  "p2": {
   "why": "A good pre-bill review is a habit and a checklist, not a heroic effort each month.",
   "talk": "We write our flags as a short list at the top, not scattered in the margins, like 'Entry 6/12: 2.5 hours block-billed; entry 6/18: rate shows $350, the letter says $325.' We keep a checklist per client, with their billing guidelines, so the same checks happen every time. Two traps: sending the invoice straight from the system without the attorney's sign-off, and changing an entry's time or wording ourselves. We flag it; the attorney or the timekeeper changes it.",
   "walk": [
    "First, flags in a short list.",
    "Next, a checklist per client.",
    "Then, nothing goes out without sign-off.",
    "Finally, flag entries; don't edit them."
   ],
   "contrast": {
    "lazy": "Fixes the rate and rewrites 'file review' quietly, then sends the invoice straight from the system.",
    "excellent": "'Elias, three flags on Harlow before sign-off: 1. Entry 6/18 at last year's rate. 2. Two paralegal entries say only \"file review.\" 3. The $620 court reporter cost appears twice. Nothing has gone out.'"
   },
   "outcome": "Every error a client finds gives them a reason to cut the bill, delay payment or question the next one. Strict corporate clients may reduce fees or move work elsewhere. A steady pre-bill habit keeps invoices paid in full and keeps the client confident in the firm while the case is still running.",
   "ask": "[Name], what would you put on a pre-bill checklist for a corporate client with strict billing rules? [Name], what would you add to that list?",
   "mystery": "The case of the June pre-bill. The Harlow pre-bill shows 42 hours in June: one entry at last year's rate, two paralegal entries that say only 'file review,' and a $620 court reporter cost appearing twice. On Meridian, an associate's entry reads 'Research — 4.0,' but the guidelines require a description. In teams, four minutes: write your note to Elias with the Harlow flags in order, and decide what you flag on Meridian and to whom. Bring back your note."
  }
 },
 "7::Invoice Management: Tracking, Follow-Up & Collections": {
  "p1": {
   "icebreaker": "Game: 'Guess the payer.' In a big client company, who actually pays our invoices? I'll list options; stand up for your guess. The CEO. The general counsel. Accounts payable. The receptionist. Count who's standing for each.",
   "teaser": "Most rooms get this wrong, and that one wrong guess is why so many invoices sit unpaid for months. We'll come back to who's right.",
   "why": "A firm can do great work and still run short of cash if nobody follows invoices through to payment.",
   "talk": "Sending an invoice is only the halfway point. It's finished when it's paid, and managing that gap is a big part of how we protect the firm's cash flow. We keep one invoice register with the number, client, matter, dates, amount, status and date paid. Our follow-up is polite, predictable and written down. Anything bigger than a reminder, like a payment plan, a late fee or collections, is the attorney's decision.",
   "walk": [
    "First, number invoices in one sequence and never reuse a number. A cancelled invoice is voided.",
    "Next, send each invoice to the right billing contact in the format the client asks for.",
    "Then, follow a set reminder schedule: before the due date, on it, then 7, 14 and 30 days overdue.",
    "After that, review the aging report every week and send Elias anything over 60 days.",
    "Finally, record payments the day they arrive, so nobody gets chased after paying."
   ],
   "jargon": [
    {
     "term": "Invoice register",
     "hint": "one list tracking every invoice from sent to paid"
    },
    {
     "term": "Aging report",
     "hint": "shows unpaid invoices grouped by how overdue they are"
    },
    {
     "term": "Accounts payable (AP)",
     "hint": "the client's team that actually pays bills"
    },
    {
     "term": "Voided invoice",
     "hint": "a cancelled invoice that keeps its number on record"
    }
   ],
   "story": "This happens in real offices: invoices to a new client went to the general counsel, who was busy and never forwarded them. Three months later, the client's accounts team said they'd never received a bill. Nothing was lost in the end, but the firm waited a quarter for its money. Asking for the accounts payable contact at the start would have saved all of it.",
   "ask": "[Name], in a client company, who do you think actually pays the invoices? [Name], how would you find out the right contact for a new client?"
  },
  "p2": {
   "why": "How you chase money affects whether the client stays.",
   "talk": "Keep reminders factual and warm: the invoice number, amount, due date and how to pay. Often the client just needs it resent. If a client disputes an invoice, we pause reminders on it and pass the dispute to the attorney, because chasing a disputed bill makes it worse. Two traps: sending to the main contact instead of accounts payable, so it sits unread, and adding late fees or threatening collections without checking the engagement letter and getting the attorney's approval.",
   "walk": [
    "First, factual and warm reminders.",
    "Next, pause reminders on disputed invoices.",
    "Then, send to accounts payable, not just the main contact.",
    "Finally, no late fees or collections talk without approval."
   ],
   "contrast": {
    "lazy": "'Hi, you still haven't paid. Please pay ASAP or we'll have to take further action.'",
    "excellent": "'Hello, a quick note that invoice 2024-118 for $6,000 was due on 3 May. I've attached a copy and our bank details. Please let me know if anything is holding it up.'"
   },
   "outcome": "Unpaid invoices mean the firm is funding the client's case out of its own pocket. Rough chasing can sour a relationship mid-matter, and a late fee charged without the letter allowing it gives the client a reason to dispute everything. Calm, steady follow-up brings the money in and keeps the client.",
   "ask": "[Name], what's the difference in tone between a 7-day and a 30-day overdue reminder? [Name], read us the first line you'd write for each.",
   "mystery": "The case of the silent $18,400. The aging report shows Meridian owes $18,400: $6,000 is 45 days overdue and $12,400 is 95 days overdue, and no one has followed up. Separately, a new client says they never received last month's invoice, and your register shows it went to their general counsel. In pairs, four minutes: write what you send Meridian today and what you ask Elias, then decide what you check, who you resend to and what you update in the register for the new client. Bring back both."
  }
 },
 "7::E-Billing Portals, LEDES & Client Billing Guidelines": {
  "p1": {
   "icebreaker": "Game: 'Guess the acronym.' I'll write LEDES on the board. Shout out what you think it stands for. Any guesses? Legal... Electronic... Keep going. Closest guess gets to pick the next game.",
   "teaser": "Here's the odd bit: for some clients, an invoice you've emailed, beautifully, on time, still counts as never sent. Let's find out why.",
   "why": "For many corporate clients, an invoice that isn't in their portal, in their format, simply doesn't exist.",
   "talk": "A lot of corporate clients and insurance companies won't accept an emailed invoice. They want it uploaded to an e-billing portal, often in a standard file format called LEDES. Every time entry usually needs task and activity codes, and the portal checks each invoice against the client's billing rules automatically. If it rejects the invoice or cuts lines, the firm doesn't get paid until it's fixed.",
   "walk": [
    "First, for each e-billing client, record the portal, who holds the login, the format and codes, the deadline and the billing contact.",
    "Next, keep their billing guidelines with the matter and note the rules that cause the most cuts.",
    "Then, make sure time entries have the right codes before the pre-bill.",
    "After that, upload and check the status: accepted, rejected or adjusted.",
    "Finally, bring any cuts or rejections to the attorney and resubmit or appeal before the deadline."
   ],
   "jargon": [
    {
     "term": "E-billing portal",
     "hint": "a client's website where invoices must be uploaded"
    },
    {
     "term": "LEDES",
     "hint": "Legal Electronic Data Exchange Standard, a standard invoice file format"
    },
    {
     "term": "Task and activity codes",
     "hint": "standard codes describing what kind of work each entry was"
    },
    {
     "term": "Adjustment",
     "hint": "a line the portal cut or reduced"
    }
   ],
   "story": "A common first-month story: a firm took on a corporate client and kept emailing PDF invoices for three months. The client's portal had no record of any of them. By the time anyone noticed, two were outside the client's submission window and had to be argued for. Setting up the portal before the first invoice would have avoided all of it.",
   "ask": "[Name], which kinds of clients do you think are most likely to use e-billing portals? [Name], why would they want one?"
  },
  "p2": {
   "why": "E-billing problems repeat every month until someone tracks them.",
   "talk": "Submit on time, because many clients refuse invoices that arrive more than a set number of days after the billing period. Keep a small log of what the portal cut and why, so the firm can see which rules cost the most and fix the habit behind them. Two traps: emailing a PDF to a client who requires e-billing, which usually doesn't count as received, and one person holding the only portal login, so invoices stop when they're away.",
   "walk": [
    "First, submit within the client's window.",
    "Next, log every adjustment.",
    "Then, never email a PDF to an e-billing client.",
    "Finally, keep a backup login holder."
   ],
   "contrast": {
    "lazy": "Fixes each rejection as it comes, emails a PDF when the portal is fiddly, and keeps the only login on their own laptop.",
    "excellent": "Keeps a log: 'May: 7 entries missing task codes, 2 over approved rate. April: 4 missing codes.' Shares it with Elias so the habit gets fixed, and makes sure a second person can log in."
   },
   "outcome": "Rejected or late e-bills mean the firm waits, or never gets paid, for work already done. Repeated cuts tell the client the firm is careless, which matters when they decide who gets their next matter. A tidy portal routine keeps fees flowing and the client relationship strong.",
   "ask": "[Name], what would a three-month adjustment log tell the firm? [Name], what would you do with what it shows?",
   "mystery": "The case of the rejected May invoice. Harlow's insurer rejects the firm's May invoice in its portal: 'Task code missing on 7 entries; 2 entries exceed the approved rate,' and the resubmission window closes in 10 days. Meanwhile a new corporate client says invoices must go through their portal in LEDES within 30 days of month-end, and the firm has never used it. In pairs, four minutes: list what you do on Harlow and what you need from Elias, then the set-up for the new client before the first invoice is due. Bring back both lists."
  }
 },
 "7::Retainer Invoices & Applying Trust Funds": {
  "p1": {
   "icebreaker": "Game: 'Which pocket?' Hold up your left hand for the trust account, right hand for the operating account. A new client's retainer arrives. Fees the attorney has approved and billed. Office rent. A client's unused retainer at the end of the case. Show me your hands.",
   "teaser": "There's one word, 'evergreen,' that changes how you watch a retainer completely. Stick with me and you'll know why.",
   "why": "Retainers are where billing meets trust accounting, and mistakes here are ethics problems, not just accounting ones.",
   "talk": "Many clients pay a retainer up front. It goes into the client trust account and stays the client's money until the firm has earned it and billed for it. Paying an invoice from it means moving money from trust to the firm's operating account, and that needs the attorney's approval, a matching invoice and an entry on the client's ledger. An 'evergreen' retainer has to be topped back up to an agreed level, so we watch the balance.",
   "walk": [
    "First, when a retainer arrives, confirm it went into trust and record it on the client's ledger.",
    "Next, make sure the invoice shows the total, the amount applied from the retainer and the balance left.",
    "Then, get the attorney's written approval before any transfer.",
    "After that, transfer exactly that amount and record it with the invoice number.",
    "Finally, when the balance drops below the agreed level, send the approved top-up request."
   ],
   "jargon": [
    {
     "term": "Retainer",
     "hint": "money a client pays upfront, held until fees are earned"
    },
    {
     "term": "Evergreen retainer",
     "hint": "a retainer that must be topped back up to a set level"
    },
    {
     "term": "Applying trust funds",
     "hint": "using the client's retainer to pay an approved invoice"
    }
   ],
   "story": "This happens in real offices: a client's retainer was wired to the firm's operating account because the client used old bank details. Nobody noticed for a week, and by then some of it had paid ordinary office bills. The firm had to move the money back, report it, and explain it to the client. Checking which account the retainer landed in, on the day, would have caught it in minutes.",
   "ask": "[Name], why must a retainer go into the trust account and not the operating account? [Name], what could happen if it didn't?"
  },
  "p2": {
   "why": "Two small habits keep retainers clean: showing them on invoices and never moving money early.",
   "talk": "Trust money only ever pays that same client's earned, billed fees or approved costs. At the end of the matter, any unused retainer goes back promptly, as the attorney directs. Two traps: moving money from trust 'to cover' an invoice before it's approved, or to cover a different client's bill, and invoices that don't show the retainer applied, so the client thinks they owe the whole amount again.",
   "walk": [
    "First, trust pays only that client's approved items.",
    "Next, return unused retainers promptly.",
    "Then, never transfer before approval.",
    "Finally, show the retainer on every invoice."
   ],
   "contrast": {
    "lazy": "Sends a $6,800 invoice with no mention of the retainer, and moves the money from trust before Elias has signed off.",
    "excellent": "Invoice reads 'Fees $6,800. Applied from retainer: $6,800. Retainer balance: $4,400.' Transfer only after Elias's written approval, plus a top-up request to bring it back to the agreed level."
   },
   "outcome": "Moving trust money early or to the wrong client is an ethics breach that can bring a bar complaint, whatever the intention. An invoice that ignores the retainer makes the client think they're being billed twice, and that becomes a dispute. Clean retainer handling keeps the client calm and the attorney's licence safe.",
   "ask": "[Name], what would a client think if their invoice ignored the retainer they'd paid? [Name], what would you put on the invoice to prevent that?",
   "mystery": "The case of the evergreen balance. Meridian paid a $15,000 evergreen retainer that must stay at $10,000 or more. The June invoice is $6,800, and the balance is $11,200. And a new client's $5,000 retainer has just landed in the operating account by mistake. In pairs, four minutes: work out what the Meridian invoice shows, what transfer happens, the new balance and what goes to the client; then what you do about the misplaced $5,000 and who needs to know today. Bring back your numbers and your action list."
  }
 },
 "7::Invoice & Payment Reconciliation": {
  "p1": {
   "icebreaker": "Game: 'Match the payment.' I'll read a payment and three open invoices; shout the letter of the one it pays. Payment: $1,500. A, $4,000. B, $1,500. C, $2,500. Easy. Now: payment $4,000, no note, invoices A $4,000 and B $1,500 plus $2,500. Harder, isn't it?",
   "teaser": "That second one has a trap, and it's the one that makes firms chase clients for bills they've already paid. Let's find it.",
   "why": "If payments aren't matched to the right invoices, clients get chased for bills they've already paid, and that damages trust fast.",
   "talk": "Every payment that comes in has to be connected to the invoice or invoices it's paying. Real payments are messy: one wire can cover three invoices, a client can pay half, or a bank fee can make it arrive a little short. And at the end of each month, the total of all open invoices should match the receivables number in the books. If it doesn't, something was applied to the wrong place.",
   "walk": [
    "First, record each payment the day it arrives: date, amount, method, who paid and any reference.",
    "Next, match it to invoice numbers. With no note, match by exact amount, then ask the client.",
    "Then, leave part payments with a balance open, and treat overpayments as a credit until the attorney decides.",
    "After that, if a payment is short because of bank fees, record the fee separately, if that's firm policy.",
    "Finally, at month-end, make sure the open-invoices report matches the receivables balance."
   ],
   "jargon": [
    {
     "term": "Applying a payment",
     "hint": "linking money received to the invoice it pays"
    },
    {
     "term": "Wire",
     "hint": "a bank-to-bank transfer"
    },
    {
     "term": "Unapplied payment",
     "hint": "money received that isn't yet linked to any invoice"
    },
    {
     "term": "Audit trail",
     "hint": "the record showing every change and who made it"
    }
   ],
   "story": "A real pattern from the field: a client paid a specific invoice, but the payment was put against their oldest open one out of habit. The newer invoice then showed as overdue, and the firm sent a firm reminder. The client's finance director, who had paid on time, was not pleased. Checking the client's reference before applying the payment would have taken one minute.",
   "ask": "[Name], what would a client think if we chased them for an invoice they'd already paid? [Name], how would you put it right?"
  },
  "p2": {
   "why": "The small leftovers are where receivables quietly go wrong.",
   "talk": "Keep unapplied payments at zero, because each one is a client who paid and the books don't know what for. Money that arrives in the trust account is never applied straight to a fee invoice; moving it needs the attorney's approval and its own transfer. Two traps: putting a payment against the oldest invoice out of habit when the client paid a specific one, which can make a disputed bill look paid, and deleting and re-entering a payment to fix it, which breaks the audit trail.",
   "walk": [
    "First, clear unapplied payments.",
    "Next, keep trust money separate from fee payments.",
    "Then, apply to the invoice the client actually paid.",
    "Finally, correct payments in place."
   ],
   "contrast": {
    "lazy": "Puts the $4,000 against the oldest invoice and deletes and re-enters it later if it turns out wrong.",
    "excellent": "'Meridian's $4,000 cheque has no note. It matches the March invoice exactly, so I've applied it there and emailed their AP team to confirm. If they meant April, I'll correct it in place.'"
   },
   "outcome": "A wrongly applied payment can make a disputed invoice look accepted and paid, which weakens the firm's position if the fee is ever challenged. Chasing a client who's already paid damages the relationship mid-case. And a broken audit trail is exactly what an auditor will question.",
   "ask": "[Name], why might applying a payment to the oldest invoice cause a problem in a billing dispute? [Name], how would you avoid it?",
   "mystery": "The case of the missing $75. Harlow Industries sends one wire of $7,425 with the note 'May invoices.' There are three open May invoices: $2,500, $3,000 and $2,000. And Meridian pays $4,000 by cheque with no note, against open invoices of $4,000 from March and $1,500 from April. In pairs, four minutes: work out what happened to the $75, how you apply the wire and what you ask Harlow, then decide which Meridian invoice gets the $4,000 and how you make sure. Bring back your answers."
  }
 },
 "7::Handling a Billing Dispute": {
  "p1": {
   "icebreaker": "Game: 'Thumbs up, thumbs down: good first reply?' A client says a charge is wrong. 'That's definitely correct.' 'Thanks, I'm looking into it and will come back by Thursday.' 'You'll need to take that up with the attorney.' 'Let me pull the records and come back to you.' Show me thumbs.",
   "teaser": "One of those replies sounds the most professional and is actually the worst one. By the end of this you'll know which, and why.",
   "why": "A billing dispute is a request for an explanation, not an attack.",
   "talk": "Most disputes come from honest confusion, not bad faith. What settles them is the paperwork behind the invoice: the time entries, receipts and agreed terms. And how you handle it matters to the relationship far beyond the dollars involved. A quick, calm reply buys you time to check properly.",
   "walk": [
    "First, pull the actual records behind the charge before you reply.",
    "Next, acknowledge the dispute quickly, even before it's resolved.",
    "Finally, explain the answer with the supporting details, so the client can see how the charge was worked out."
   ],
   "jargon": [
    {
     "term": "Billing dispute",
     "hint": "a client questioning or refusing a charge"
    },
    {
     "term": "Time entries",
     "hint": "the recorded work behind each line on an invoice"
    }
   ],
   "story": "This happens in real offices: a client questioned a charge, and the reply went back within the hour insisting it was correct. A week later, the records showed it had been billed twice. The money was refunded, but the client now questioned every invoice, and later moved a new matter elsewhere. A two-line acknowledgement and a proper check would have kept the relationship.",
   "ask": "[Name], why acknowledge a dispute before it's even resolved? [Name], what would you actually write in that first reply?"
  },
  "p2": {
   "why": "If it turns out to be our mistake, fix it plainly and quickly.",
   "talk": "When a client questions a bill, the instinct is to defend it. But getting defensive before we've checked the records can turn a simple misunderstanding into a real argument. So we check first. If it was our mistake, we fix it plainly and quickly. And we remember what's actually at stake: the relationship is worth far more than any single invoice.",
   "walk": [
    "First, remember that getting defensive before checking the records can turn a misunderstanding into a real problem.",
    "Finally, protect the relationship; it matters more than protecting the original invoice."
   ],
   "contrast": {
    "lazy": "'Our records are correct. The charge stands.' Sent before anyone has looked.",
    "excellent": "'Thank you for flagging this. I'm pulling the time entries now and will come back to you by Thursday with the detail. Elias is in trial, but I'll make sure he reviews it.'"
   },
   "outcome": "A badly handled dispute can turn a small charge into a lost client, a fee complaint or a reason to question every past invoice. A calm, documented answer usually settles it and keeps the client confident in the firm, which matters most when they're deciding whether to stay for the rest of the case.",
   "ask": "[Name], a client emails disputing a charge, saying it doesn't match what they remember agreeing to. What's your first move before you reply? [Name], what do you pull from the file?",
   "mystery": "The case of the double-billed review. Meridian's finance director sends an angry note about a $2,800 charge for 'document review,' and Elias is in trial all week. When you check, the charge was billed twice: once in May and again in June. In pairs, four minutes: write what you send today, list what you pull before anyone explains the charge, and draft how you tell the client about the double billing, plus what else you check first. Bring back your two messages."
  }
 },
 "7::Real-Time Time Tracking for Billable Work": {
  "p1": {
   "icebreaker": "Game: 'Memory test.' Without looking at anything, write down how long you spent on email yesterday, to the nearest six minutes. Now how long on your longest phone call. Hands up if you're confident. Hands up if you just guessed. Most of you just guessed.",
   "teaser": "That guess you just made is exactly what ends up on a client's invoice when time isn't logged straight away. And there's one word clients hate to see next to it.",
   "why": "Billable time becomes the client's invoice, so record it now, not from memory later.",
   "talk": "We talked about time tracking on Day 3. Here the stakes are higher, because this time turns directly into what the client pays. The longer you wait to record it, the less accurate it gets. And vague, rounded entries are the ones clients question first.",
   "walk": [
    "First, log time as you work, or straight afterwards.",
    "Next, write enough detail to support the invoice line: what was done, for which matter.",
    "Finally, compare logged time with the billing calendar regularly, before invoices go out."
   ],
   "jargon": [
    {
     "term": "Billable time",
     "hint": "work the client can be charged for"
    },
    {
     "term": "Time entry",
     "hint": "one recorded piece of work: date, matter, time and description"
    }
   ],
   "story": "A common pattern: an associate rebuilt his week every Friday from his calendar, billing 'about 2 hours' for each call. Some calls had lasted twenty minutes, and some work never made it in at all. When a client queried the invoice, nobody could back up the entries, and several were written off. Logging as he went would have been both fairer and easier to defend.",
   "ask": "[Name], how accurate do you think time reconstructed at the end of the week really is? [Name], what gets lost first?"
  },
  "p2": {
   "why": "Accurate billing is impossible without accurate time.",
   "talk": "Time we log from memory at the end of the day is noticeably less accurate than time logged as we go, and that inaccuracy costs someone: either the firm undercharges, or the client gets billed for time that's hard to justify. Good time records are also what make careful, contract-aware billing possible in the first place.",
   "walk": [
    "First, remember that time logged from memory is measurably less accurate, and that costs the firm or the client.",
    "Finally, good time tracking is what makes contract-aware billing possible."
   ],
   "contrast": {
    "lazy": "'3.5 — research.' Entered on Friday from memory.",
    "excellent": "'1.2 — Meridian: researched case law on notice periods for termination clause; 0.8 — drafted summary memo for Elias.' Entered as the work finished."
   },
   "outcome": "Vague or guessed time gets cut, written off or disputed, so the firm loses money it earned. Over-billed time damages trust and can become a fee complaint. In a case with a cap or budget, inaccurate time means the warnings come too late. Real-time entries protect fees and the firm's credibility.",
   "ask": "[Name], it's the end of a busy day and you haven't logged time for several tasks. How do you rebuild it as accurately as possible? [Name], what will you do differently tomorrow?",
   "mystery": "The case of the mystery research. A client questions a 3.5-hour entry that says only 'research,' and the associate can't remember what it was about. The same associate rebuilds every Friday from his calendar and emails, billing 'about 2 hours' per call. In pairs, three minutes: list what's likely wrong with his entries, rewrite the 'research' entry the way it should have looked, and suggest one habit to replace the Friday rebuild. Bring back your rewrite and your habit."
  }
 },
 "7::Billable vs. Non-Billable Hours": {
  "p1": {
   "icebreaker": "Game: 'Bill it or not?' Stand up for billable, stay seated for non-billable. Drafting a letter to the other side. Booking a meeting room. Team training. A research call on the client's matter. Photocopying exhibits. Who stood for the photocopying?",
   "teaser": "The photocopying split the room, and it's one of the top reasons corporate clients cut invoices. The answer is hiding in a document you'll learn to check every time.",
   "why": "Getting billable and non-billable right is the difference between an invoice that gets paid and one the client cuts.",
   "talk": "Billable time is work the client can be charged for under their engagement letter: drafting, research, calls and court time on their matter. Non-billable time is everything else, like internal admin, training, business development, or work the firm agreed not to charge. We record both, because non-billable time still shows where the hours go. Lawyers usually record time in tenths of an hour, six-minute blocks, and many corporate clients have written billing guidelines listing what they won't pay for.",
   "walk": [
    "First, give every entry a date, matter, time in tenths, a clear description and billable or not.",
    "Next, check the engagement letter and the client's guidelines. Scheduling and copying are often non-billable.",
    "Then, write one task per entry, not one long block.",
    "After that, prepare a pre-bill, a draft invoice, so the attorney can decide any write-downs or write-offs.",
    "Finally, approved no-charge work can show on the invoice as 'no charge.'"
   ],
   "jargon": [
    {
     "term": "Tenths of an hour",
     "hint": "time recorded in six-minute blocks: 0.1 = 6 minutes"
    },
    {
     "term": "Write-down / write-off",
     "hint": "reducing or removing a charge before billing"
    },
    {
     "term": "Pro bono",
     "hint": "free legal work done for the public good"
    },
    {
     "term": "Clerical work",
     "hint": "admin tasks like scheduling and copying"
    }
   ],
   "story": "A real pattern from the field: an invoice to a corporate client included scheduling calls and photocopying, all labelled as client work. The client's guidelines excluded clerical time, so their billing team cut those lines and then flagged the firm for closer review on every future invoice. Checking the guidelines before the pre-bill would have kept those lines off, or shown them as no charge.",
   "ask": "[Name], which everyday tasks do you think clients most often refuse to pay for? [Name], where would you check for a specific client?"
  },
  "p2": {
   "why": "The decisions about time belong to the attorney, but the problems usually start in the entries we help keep.",
   "talk": "We never cut or add time on our own. We flag it, and the attorney decides. Keep non-billable categories consistent, like Admin, Training, Business Development and Pro Bono, so the reports make sense. Two traps: billing clerical work because it was for a client, which is the top reason corporate clients cut invoices, and not recording non-billable time at all, so nobody can see why a matter ran long.",
   "walk": [
    "First, flag; don't decide.",
    "Next, use the same non-billable categories every time.",
    "Then, keep clerical work off the bill unless the terms allow it.",
    "Finally, record non-billable time too."
   ],
   "contrast": {
    "lazy": "'3.5 — Harlow: call with client, research, drafted letter, scheduled meeting, copied exhibits.' Sent straight to the pre-bill.",
    "excellent": "Flags it to the associate: 'Harlow rejects block billing and clerical time. Could you split this into separate entries? Scheduling and copying look non-billable under their guidelines; Elias can decide.'"
   },
   "outcome": "Clerical time on a bill is the quickest way to get an invoice cut and the firm put under closer review. Block-billed entries get rejected outright by strict clients. And untracked non-billable time hides why a matter ran over budget, so the firm can't fix it or explain it to the client.",
   "ask": "[Name], why would a firm want to know how much non-billable time a matter took? [Name], who would use that information?",
   "mystery": "The case of the 3.5-hour block. An associate's entry reads: '3.5 — Harlow: call with client, research, drafted letter, scheduled meeting, copied exhibits,' and Harlow's guidelines reject block billing and clerical time. You also spent 40 minutes booking travel for Elias's Meridian deposition. In pairs, four minutes: split the Harlow entry the way it should be, mark what's billable and what you'd flag, then decide where you check whether your travel booking is billable and how you record it either way. Bring back your split entry."
  }
 },
 "7::QuickBooks How-Tos — Step by Step": {
  "p1": {
   "icebreaker": "Game: 'Hands up, hands down.' Hands up if you've ever created an invoice in any software. Keep it up if you've recorded an expense. Keep it up if you've reconciled an account. Keep it up if you've run an overdue report. Whoever's still up, you're my helper for the live demo.",
   "teaser": "There's one number on the reconciliation screen that tells you whether you're allowed to click 'finish.' Most beginners ignore it. Let's see which one.",
   "why": "Four everyday tasks cover most of what you'll ever do in QuickBooks.",
   "talk": "You don't need to master the whole program. Learn these four workflows until you can do them without thinking. They cover sending bills, recording costs, checking the bank and chasing what's overdue. Once those are automatic, everything else in QuickBooks is a variation.",
   "walk": [
    "First, create an invoice: New, then Invoice, pick the client, add the lines with description, rate and hours, check the total and send.",
    "Next, record an expense: New, then Expense, pick who was paid and from which account, choose the category and attach the receipt.",
    "Then, reconcile an account: pick the account and statement date, tick every transaction that matches the bank and finish only when the difference is zero.",
    "Finally, run the overdue-invoices report, and look first at anything over 60 and 90 days. Those need a follow-up call."
   ],
   "jargon": [
    {
     "term": "QuickBooks",
     "hint": "common accounting software used by small firms"
    },
    {
     "term": "Reconcile",
     "hint": "tick off your records against the bank statement"
    },
    {
     "term": "Overdue (A/R aging) report",
     "hint": "lists unpaid invoices by how late they are"
    }
   ],
   "story": "A common first-week story: a new assistant reconciled the bank account, saw a small difference left over, and clicked finish anyway because it was 'only a few dollars.' The next month wouldn't balance at all, and it took the bookkeeper an afternoon to untangle. Waiting until the difference read zero would have saved that afternoon.",
   "ask": "[Name], which of these four have you done before? [Name], which one feels least familiar to you?"
  },
  "p2": {
   "why": "You don't need the whole platform, just these four workflows done well.",
   "talk": "Nobody needs to master all of QuickBooks. Most assistants use four workflows, and doing those well covers almost everything. Creating and sending an invoice with the right terms and due date. Receiving a payment and applying it to the correct open invoice. Entering vendor bills. And reconciling each month against the bank statement. The menu names shift a little between versions, but the steps stay the same.",
   "walk": [
    "First, create and send an invoice, with terms and a due date.",
    "Next, receive a payment and apply it to the right open invoice.",
    "Finally, enter vendor bills, and reconcile monthly against the bank statement."
   ],
   "contrast": {
    "lazy": "Runs the overdue report and forwards it to Elias as is: a long list with no notes.",
    "excellent": "Runs the report, filters to over 60 days, and adds a column: 'last contact,' 'reason given' and 'suggested next step.' Elias can walk into the partner meeting ready."
   },
   "outcome": "Payments applied to the wrong invoice lead to chasing clients who've paid. Unreconciled accounts hide errors that grow every month. And an overdue list with no context gives the partners nothing to act on. Four workflows done well keep the firm's cash and its client relationships healthy.",
   "ask": "[Name], if you have access, let's create an invoice and reconcile an account live. Talk us through it. Then, [Name], repeat the invoice steps from memory.",
   "mystery": "The case of the 'as agreed' payment. Harlow pays $7,500, but has two open invoices of $5,000 and $2,500, and their note just says 'as agreed.' And Elias wants a list of every invoice more than 60 days overdue before tomorrow's partner meeting. In pairs, four minutes: decide how you apply Harlow's payment and what you check first, then name the QuickBooks task that gets Elias his list and what you'd add to make it useful. Bring back your steps."
  }
 },
 "7::QuickBooks: Billable Time, Expenses & Invoicing": {
  "p1": {
   "icebreaker": "Game: 'Will it reach the invoice?' Thumbs up if it will, thumbs down if not. Time entered with Billable ticked and the matter chosen. A filing fee entered with no customer. Time entered to the client but not the matter. A court cost with Billable ticked. Show me.",
   "teaser": "One of those quietly turns into the firm's own expense and never reaches the client at all. Nobody gets an error message. Let's find out which.",
   "why": "QuickBooks can make sure every billable hour and cost reaches the invoice, but only if it's recorded the right way.",
   "talk": "In QuickBooks Online, each client is a customer, and each matter is usually a sub-customer or a project. When we record time or a cost and tick 'Billable' for that customer, it waits. Then, when we create the next invoice for them, QuickBooks shows everything billable that's waiting, and we choose what to add. So the invoice is only as good as the entries behind it.",
   "walk": [
    "First, set up each client as a customer and each matter under it.",
    "Next, record time with the person, matter, service item and rate, hours, a description, and Billable ticked.",
    "Then, record client costs, like filing fees, as billable expenses to the matter.",
    "After that, create the invoice and add the waiting time and costs, checking dates, descriptions and rates.",
    "Finally, run the unbilled time and expenses report to catch anything left behind."
   ],
   "jargon": [
    {
     "term": "Customer / sub-customer",
     "hint": "the client, and the matter filed under them"
    },
    {
     "term": "Service item",
     "hint": "a saved type of work with its rate"
    },
    {
     "term": "Billable expense",
     "hint": "a cost marked to be passed on to the client"
    },
    {
     "term": "Unbilled time and expenses report",
     "hint": "shows billable items not yet on any invoice"
    }
   ],
   "story": "A real pattern from the field: a firm paid filing fees for clients on the firm card for a whole year, and the bookkeeper coded them all to 'Court fees' with no customer. None reached a client invoice. When the accountant spotted it at year-end, most of it was too old to bill comfortably. Choosing the customer and ticking Billable would have recovered every dollar.",
   "ask": "[Name], what happens to a client cost that nobody marks as billable? [Name], who ends up paying for it?"
  },
  "p2": {
   "why": "Most QuickBooks billing errors are set-up mistakes that repeat every month until someone fixes them.",
   "talk": "Set each person's rate once, on the service item or their profile, instead of typing it every time. Only the attorney's approved pre-bill becomes a sent invoice, so we draft first and send after approval. Two traps: a client cost without Billable ticked, which quietly becomes a firm expense, and time entered to the client instead of the matter, which puts it on the wrong invoice.",
   "walk": [
    "First, set rates once.",
    "Next, draft, get approval, then send.",
    "Then, tick Billable on every client cost.",
    "Finally, always choose the matter, not just the client."
   ],
   "contrast": {
    "lazy": "Types the rate in by hand each time, enters costs under 'Court fees' with no customer, and sends invoices straight from QuickBooks.",
    "excellent": "Rates set once on the service items; every cost tagged 'Meridian: Contract dispute, Billable'; the unbilled report run before every draft; nothing sent until Elias approves the pre-bill."
   },
   "outcome": "Unbilled costs are money the firm spends on the client's case and never gets back. Time on the wrong matter puts charges on the wrong invoice, which confuses the client and invites a dispute. Clean set-up means every hour and cost lands where it belongs, and the firm's fee position stays solid to the end.",
   "ask": "[Name], how would you find every billable cost that didn't make it onto an invoice last quarter? [Name], what would you do once you'd found them?",
   "mystery": "The case of the stranded costs. At month-end, the unbilled time report shows 6.2 hours for Harlow with no matter selected, and a $435 court reporter bill for Meridian that wasn't marked billable. And Elias paid a $350 filing fee for Meridian on the firm card, entered as 'Court fees' with no customer. In pairs, four minutes: list what you fix, in what order, before invoices go out. Bring back your fix list."
  }
 },
 "7::QuickBooks Common Mistakes & Tips": {
  "p1": {
   "icebreaker": "Game: 'Guess the percentage.' What share of bookkeeping errors do you think come from putting things in the wrong category? Hold up fingers: one finger for 10 percent, five for 50, all ten for 100. Look around: big spread.",
   "teaser": "Whatever you guessed, there's one tempting 'fix' for a reconciliation that doesn't balance that makes things much worse. I'll show you the warning sign.",
   "why": "The most common QuickBooks mistake is putting an expense in the wrong category, so when you're unsure, ask.",
   "talk": "A classic example: recording a cost the client should reimburse as a general office expense. That one mistake breaks both the client's invoice and the firm's own books. The client never gets billed, and the firm's costs look higher than they are. Asking takes a minute; fixing three months of it takes an afternoon.",
   "walk": [
    "First, confirm the right category before you save an expense.",
    "Next, if a reconciliation isn't exactly zero, look for a missing or duplicated transaction. Don't adjust something unrelated to force it.",
    "Then, check every invoice against the engagement terms. The software will happily bill the wrong rate.",
    "After that, remember that the online version saves automatically. A mistake needs a proper correction, not an undo.",
    "Finally, review recent entries now and then for repeated category mistakes."
   ],
   "jargon": [
    {
     "term": "Miscategorising",
     "hint": "filing a transaction under the wrong category"
    },
    {
     "term": "Journal entry",
     "hint": "a manual entry used to correct or adjust the books"
    }
   ],
   "story": "This happens in real offices: a new staff member coded every courier cost as 'office supplies' for three months. Each entry looked harmless. At quarter-end, the accountant had to recode dozens of lines, and some of those couriers were client costs that had never been billed. A quick 'which category?' question on day one would have prevented all of it.",
   "ask": "[Name], what share of errors do you think come from miscategorising? Why so many? [Name], what would help a new person get categories right?"
  },
  "p2": {
   "why": "Never force a reconciliation to balance by adjusting a line that has nothing to do with the difference.",
   "talk": "A reconciliation is only finished when the difference is exactly zero, and when it isn't, the cause is almost always a missing or duplicated transaction. The temptation is to tweak some unrelated line so it balances. Don't. That hides the real problem and creates a new one. We also check invoices against the contract before sending, and remember that in the online version, fixing a mistake means editing the entry or making a correcting journal entry.",
   "walk": [
    "First, a reconciliation is only done at exactly zero, and the fix is almost always a missing or duplicate transaction.",
    "Next, check invoices against the contract before sending.",
    "Finally, in the online version there's no save button, so corrections need an edit or journal entry."
   ],
   "contrast": {
    "lazy": "'It's only $62.50 out. I'll nudge office supplies so it balances and close it.'",
    "excellent": "'It's $62.50 out. I'm searching for a transaction of exactly $62.50, or one entered twice, before I touch anything. Nothing gets adjusted until I know the cause.'"
   },
   "outcome": "Forcing a balance hides the real error, which then grows month after month until an accountant or auditor finds it. Wrong categories mean client costs go unbilled and the firm's reports mislead the partners. Honest, exact reconciliations keep the books trustworthy if they're ever examined.",
   "ask": "[Name], your reconciliation is off by $62.50, and a colleague suggests adjusting the office supplies line to make it balance. What do you say? [Name], what do you look for instead?",
   "mystery": "The case of the round-number gap. You finish the bank reconciliation, and it's off by exactly $450. Then you notice a $450 deposit entered twice. And at quarter-end, the accountant finds three months of courier costs coded as 'office supplies.' In teams, four minutes: write the rule you'd follow next time a gap is a round amount, then list what needs fixing on the couriers and what you'd change so it doesn't happen again. Bring back your rule and your list."
  }
 },
 "7::QuickBooks: Bank Feeds, Rules & Month-End Close": {
  "p1": {
   "icebreaker": "Game: 'Match or add?' I'll read a transaction from the bank feed. Shout 'Match!' if it's already in the books, 'Add!' if it's new. Rent we already entered as a bill. A $89 software charge nobody's seen. The card payment we recorded yesterday. A new client's deposit. Go!",
   "teaser": "One wrong click on that screen counts an expense twice, and the books will look perfectly normal. Let's find out which click.",
   "why": "Bank feeds save hours, but only if someone reviews them properly. Otherwise they fill the books with duplicates and guesses.",
   "talk": "Bank feeds pull transactions from the firm's bank and card accounts into QuickBooks automatically. Each one still needs a decision. If it's already in the books, like a bill we've already paid, we match it. If it's new, we add it with a category and payee, and a customer if it's billable. Month-end close is the routine that makes the numbers reliable: everything reviewed, every account reconciled, then the month locked.",
   "walk": [
    "First, review the feed at least weekly. Match when QuickBooks finds the existing entry; add only when nothing matches.",
    "Next, make rules for regular items like rent or subscriptions, and check what they did.",
    "Then, exclude only true duplicates, with a note.",
    "After that, at month-end: clear the feed, reconcile every account, clear uncategorised items and run the reports.",
    "Finally, once the accountant confirms, set the closing date with a password."
   ],
   "jargon": [
    {
     "term": "Bank feed",
     "hint": "transactions pulled automatically from the bank into QuickBooks"
    },
    {
     "term": "Bank rule",
     "hint": "an automatic instruction for categorising regular transactions"
    },
    {
     "term": "Closing date",
     "hint": "locks a finished month so it can't be changed by accident"
    },
    {
     "term": "Transfer",
     "hint": "money moved between the firm's own accounts"
    }
   ],
   "story": "A common pattern: an assistant cleared the bank feed by clicking 'Add' on everything QuickBooks suggested. Several bills had already been entered and paid, so they were now in the books twice. The firm's expenses looked far higher than they were for two months. Checking for a match before adding would have kept it clean.",
   "ask": "[Name], what happens if you click Add on a payment that's already in the books? [Name], how would you spot it later?"
  },
  "p2": {
   "why": "A few recording habits decide whether the month-end numbers can be trusted.",
   "talk": "Don't let things pile up in 'Uncategorised' or 'Ask my accountant'. Keep a list and clear it weekly. Moving money between the firm's own accounts, like paying the credit card from the operating account, is a transfer, not an expense. Two traps: adding a payment that was already recorded, which counts the expense twice, and categorising trust money as income, when trust needs its own account and its own reconciliation.",
   "walk": [
    "First, clear uncategorised items weekly.",
    "Next, record transfers as transfers.",
    "Then, match before you add.",
    "Finally, keep trust money out of income."
   ],
   "contrast": {
    "lazy": "Accepts every suggestion: the $89 software charge as 'Software,' the $1,200 card payment as 'Office expenses.'",
    "excellent": "'The $89 charge: checking our subscriptions list and asking Elias before it's categorised. The $1,200 is the card bill, so I've recorded it as a transfer from operating to the card account.'"
   },
   "outcome": "Duplicated or wrongly categorised entries give the partners false numbers to make decisions on. Trust money counted as income is an ethics problem, not just a bookkeeping one. And an unrecognised charge accepted without a question can be fraud that goes unnoticed for months. A careful month-end close is what makes the firm's figures trustworthy.",
   "ask": "[Name], why is paying the credit card bill not an expense? [Name], what would go wrong in the reports if you recorded it as one?",
   "mystery": "The case of the helpful suggestions. The feed shows a $1,200 payment to the firm's credit card company, and QuickBooks suggests 'Office expenses.' It also shows an $89 charge from a software company you don't recognise, with 'Software' suggested. In pairs, three minutes: decide what each one really is, how it should be recorded, what you'd check first and what would go wrong if you accepted the suggestions. Bring back your two decisions."
  }
 },
 "7::Credit Cards & Card Applications": {
  "p1": {
   "icebreaker": "Game: 'Pay first or check first?' Stand on the left if you'd pay the card bill the moment it arrives; stand on the right if you'd check the statement first. Quickly, move! Now, right-hand side: how long does your check take?",
   "teaser": "There's a $2,300 charge on a statement we'll look at shortly, and the payment is due tomorrow. What you do with it depends on one habit we'll build now.",
   "why": "Review a credit card statement before you pay it, not after.",
   "talk": "There are three related jobs here. Paying the cards, which needs a proper due-date calendar, because missed payments cost money and damage credit. Applying for cards, where we gather exactly what's asked for and follow the issuer's process precisely. And tax season, which is really about keeping receipts organised all year long, not hunting for them in April.",
   "walk": [
    "First, put card due dates on a real calendar.",
    "Next, check the statement for anything that shouldn't be there before paying.",
    "Then, for an application, gather exactly the documents requested, no more and no less.",
    "After that, file tax-relevant receipts as they come in, all year.",
    "Finally, test yourself: could you hand over every receipt from the last 90 days quickly?"
   ],
   "jargon": [
    {
     "term": "Card issuer",
     "hint": "the bank or company that provides the credit card"
    },
    {
     "term": "Statement balance",
     "hint": "the total owed at the end of the billing period"
    }
   ],
   "story": "A real pattern from the field: an assistant paid the firm card in full every month without opening the statement. A hotel had charged twice for one stay, and a small monthly subscription nobody used had been running for a year. By the time it was spotted, some of it was too old to dispute easily. Five minutes with the statement before paying would have caught both.",
   "ask": "[Name], if the accountant asked for every receipt from the last 90 days, how fast could you deliver? [Name], what would slow you down?"
  },
  "p2": {
   "why": "With financial applications, 'close enough' paperwork causes real delays.",
   "talk": "Card payments follow the same habit as every other recurring payment: they're on the calendar, and we review the statement before we pay it, not after. That's when we catch the unfamiliar charge or the hotel that billed twice. And with applications, 'close enough' paperwork causes real delays, so we send exactly what's requested, in exactly the form they asked for.",
   "walk": [
    "First, card payments follow the same discipline as any recurring payment: a calendar and a review before paying.",
    "Finally, applications need precision: exactly what's requested, in exactly the way the issuer asks."
   ],
   "contrast": {
    "lazy": "Pays the full balance on the due date without looking, and sends the bank 'everything, just in case.'",
    "excellent": "Reviews the statement two days before the due date, queries the $129 merchant and the double hotel charge, and sends the bank exactly the two years of returns and current balance sheet it asked for."
   },
   "outcome": "Paying an unchecked statement makes errors and fraud harder to dispute. A missed payment means fees and damage to the firm's credit. And extra or wrong paperwork on an application causes delays, or shares financial information the firm didn't need to share. Precision here protects both money and confidentiality.",
   "ask": "[Name], reviewing Elias's card statement, you spot a $129 charge from an unfamiliar merchant and a hotel charged twice for the same night. What do you do before paying the bill? [Name], who do you contact first?",
   "mystery": "The case of the unknown $2,300. Elias's firm card payment is due tomorrow, you haven't reviewed the statement, and there's a $2,300 charge you don't recognise. Meanwhile the bank asks for 'the last two years of business tax returns and a current balance sheet' for a new firm card, and a colleague wants to send three years 'to be safe' plus a P&L. In pairs, four minutes: decide whether you pay in full, in part or wait, and what you do today; then decide what you send the bank and why. Bring back both decisions."
  }
 },
 "7::Credit Card Help: Disputes, Fraud & Lost Cards": {
  "p1": {
   "icebreaker": "Game: 'Guess the number.' How many automatic payments do you think sit on a busy executive's main card? Shout out a number. Three? Ten? Twenty? Hold that number, we'll see who was closest when the card gets cancelled.",
   "teaser": "There's one phone number you must never call when you get a fraud alert, even though it looks completely official. We'll get to it.",
   "why": "When a card problem hits, the assistant is usually the first to know, and how fast you act decides how much it costs.",
   "talk": "We often manage cards day to day, so we're first to see a wrong charge, a fraud alert or a lost card. A billing error, or a charge we don't recognise, can be disputed with the card issuer. For US credit cards, billing-error disputes should go in writing within 60 days of the statement that first showed the charge. A lost or stolen card, or suspected fraud, gets reported straight away. The issuer usually blocks it and sends a new card, so every automatic payment on it has to move.",
   "walk": [
    "First, with an unknown charge, check receipts, the merchant's full name and whether someone else used the card.",
    "Next, for a wrong charge, go to the merchant first, then dispute with the issuer if it isn't fixed, with copies of receipts.",
    "Then, for fraud or a lost card, report it using the number on the card or the app, never a number from a message.",
    "After that, when the new card arrives, update every subscription and automatic payment.",
    "Finally, log it all and check the next statement for the credit."
   ],
   "jargon": [
    {
     "term": "Chargeback / dispute",
     "hint": "asking the card issuer to reverse a charge"
    },
    {
     "term": "Billing error",
     "hint": "a charge that's wrong, duplicated or not recognised"
    },
    {
     "term": "Dispute window",
     "hint": "the time limit for raising a dispute, e.g. 60 days"
    }
   ],
   "story": "This happens in real offices: a firm card was cancelled after a fraud alert, and the new one arrived a few days later. Nobody had a list of what was billed to it. Over the next month, the document-signing tool, the research subscription and the parking account all failed, one by one, at awkward moments. A card register would have turned it into a twenty-minute update.",
   "ask": "[Name], how many automatic payments do you think sit on your executive's main card? [Name], how would you find out for sure?"
  },
  "p2": {
   "why": "Card problems get expensive when nobody knows which card pays for what, or when a deadline slips.",
   "talk": "Keep a card register: each card, who uses it, its limit, its billing date, the payments on it and who can authorise changes. Only the cardholder or an authorised person can dispute or cancel, and with Elias's personal card we act only with his permission. Two traps: disputing what's really a forgotten subscription renewal, so check your own records first, and missing the dispute window while waiting for the merchant. Put that deadline in the calendar the day you find the charge.",
   "walk": [
    "First, keep a card register.",
    "Next, act only with authority.",
    "Then, check your records before disputing.",
    "Finally, calendar the dispute deadline."
   ],
   "contrast": {
    "lazy": "Calls the number in the fraud text, disputes the $29.99 charge without checking, and forgets to diary the deadline.",
    "excellent": "Calls the number on the back of the card, checks the register to find 'SQ *DIGITAL SVCS' is a renewal, asks the hotel to refund the duplicate $412 and diaries the 60-day dispute deadline the same day."
   },
   "outcome": "A slow response to fraud means more stolen money and more disruption. A missed dispute window means the firm simply loses the money. And when a cancelled card breaks a key subscription, work stops, sometimes right before a deadline. A register and a calm routine keep a card problem from becoming a case problem.",
   "ask": "[Name], what would you put in a card register? [Name], who should be allowed to see it?",
   "mystery": "The case of the declined card at the airport. Elias texts from an airport: his firm card was declined, he's had a fraud alert, he needs to pay for a hotel tonight, and the same card pays for three software subscriptions. On last month's statement, a hotel charged $412 twice for one night, and there's a $29.99 charge from 'SQ *DIGITAL SVCS.' In teams, four minutes: list what you do for Elias, in order, and what you do about each statement charge. Bring back your ordered list."
  }
 },
 "7::Reconciling a Credit Card Statement": {
  "p1": {
   "icebreaker": "Game: 'Business, client or personal?' Shout which one. Flight to a client deposition. Office printer ink. A pharmacy purchase. A filing fee for Meridian. A hotel for the Chicago deposition. Coffee for the team meeting. Fast!",
   "teaser": "One of those is the charge most likely to quietly cost the firm money every month, and it isn't the personal one. Let's find out why.",
   "why": "A card statement nobody reconciles hides lost client costs, personal charges and fraud.",
   "talk": "Reconciling a card statement means proving every charge has a receipt, a business purpose and the right category, and that our records match the statement's balance. Many charges belong to a client matter, like deposition travel or a filing fee, and those have to be coded to the matter and marked billable so the firm gets the money back. Personal charges on a business card, even accidental ones, get flagged and repaid, never hidden in a business category.",
   "walk": [
    "First, download the statement and gather that month's receipts.",
    "Next, line by line, match each charge to its receipt, confirm the purpose and assign the category and matter.",
    "Then, chase any missing receipts that week, or use the firm's missing-receipt form.",
    "After that, flag duplicates, unknown charges and personal charges to the right person.",
    "Finally, reconcile the card in QuickBooks to the statement's ending balance and file everything together."
   ],
   "jargon": [
    {
     "term": "Ending balance",
     "hint": "the total on the statement your records must match"
    },
    {
     "term": "Missing-receipt form",
     "hint": "a signed note explaining a charge when the receipt is lost"
    },
    {
     "term": "Deposition",
     "hint": "a witness's formal interview under oath before trial"
    }
   ],
   "story": "A real pattern from the field: client travel was always coded to plain 'Travel' with no matter, because it was quicker. Months of flights and hotels for depositions were never billed back. The firm only noticed when a partner asked why travel costs were so high on cases that were supposed to be paying for them. Adding the matter at reconciliation would have recovered it all.",
   "ask": "[Name], which card charges do you think are most often billable to a client? [Name], how would you make sure they reach the invoice?"
  },
  "p2": {
   "why": "Timing and filing habits decide whether a reconciliation takes an hour or a week.",
   "talk": "Reconcile every month, as soon as the statement closes, while receipts and memories are fresh. File receipts so any one can be found by date and matter, because the accountant or an auditor may ask. Two traps: coding client travel to plain 'Travel' without the matter, so it's never billed back, and paying the card before reviewing the statement, which makes errors harder to dispute and usually means the review never happens.",
   "walk": [
    "First, reconcile monthly.",
    "Next, file receipts by date and matter.",
    "Then, always add the matter to client costs.",
    "Finally, review before you pay."
   ],
   "contrast": {
    "lazy": "Codes the $1,180 flight to 'Travel' and moves on.",
    "excellent": "'Airline $1,180, two passengers. Elias's seat coded to Meridian deposition, billable. Sarah's seat flagged to Elias as personal, to be repaid or recoded as he decides.'"
   },
   "outcome": "Client costs coded without a matter are money the firm never recovers. Personal charges hidden in business categories create tax and trust problems, and look bad in an audit. A monthly reconciliation keeps the firm's costs recoverable and its records ready for anyone who asks.",
   "ask": "[Name], where are your receipts right now? Could you find last March's hotel receipt in two minutes? [Name], what system would make that possible?",
   "mystery": "The case of the five loose charges. Elias's card statement has 34 charges, and you have 29 receipts. Two charges are for the Chicago deposition, one looks personal (a $64 pharmacy charge), and two have no receipt at all. There's also a $1,180 airline charge showing two passengers, Elias and his wife, for the Meridian deposition. In pairs, five minutes: walk through how you finish the reconciliation, how you code the flight, and who you contact for each loose item. Bring back your plan."
  }
 },
 "7::Expense Report Auditing & Approval Workflows": {
  "p1": {
   "icebreaker": "Game: 'Approve, reject or hold?' Hold up one finger for approve, two for reject, a fist for hold. A $45 taxi with receipt and matter. A $210 dinner with receipt, no attendees. A $300 hotel, no receipt. Your own $60 lunch, which you'd like to approve. Show me.",
   "teaser": "There's a pattern hiding in many expense reports that looks completely innocent line by line. You'll only see it if you look at the whole month. We'll come to it.",
   "why": "Without a receipt, there's no independent proof an expense actually happened.",
   "talk": "Checking expense reports isn't about catching fraud after the fact. It's about making sure each expense is real, documented and correctly coded before it's paid. And no one should ever approve their own expenses. A receipt, a reason and the right approver are the three things that make an expense safe to pay.",
   "walk": [
    "First, check each line against its receipt: amount, date and business purpose.",
    "Next, hold anything missing a receipt or reason until it's explained.",
    "Finally, send every report through the proper approver. Never approve your own."
   ],
   "jargon": [
    {
     "term": "Expense report",
     "hint": "a staff member's list of costs to be repaid"
    },
    {
     "term": "Approval limit (threshold)",
     "hint": "the amount above which extra sign-off is needed"
    },
    {
     "term": "Split transaction",
     "hint": "one purchase broken into smaller ones"
    }
   ],
   "story": "A common pattern: a firm approved expense reports in bulk at month-end, ticking the total and moving on. Client dinners with no attendees listed were paid and never billed back, because nobody knew which matter they belonged to. A one-line note per meal, checked before approval, would have recovered the costs and answered the accountant's questions.",
   "ask": "[Name], what three things should match between an expense line and its receipt? [Name], what would you do if one of them didn't?"
  },
  "p2": {
   "why": "Splitting one purchase into several smaller ones is a classic way to dodge approval limits.",
   "talk": "Approving expense reports in bulk without reading the lines defeats the whole point of approving them. One pattern worth knowing: a purchase split into several smaller ones, or a receipt for just under the approval limit, can be a way of dodging extra approval. It isn't always, but it's always worth a second look.",
   "walk": [
    "First, remember that approving reports in bulk without reading the lines defeats the purpose.",
    "Finally, watch for split transactions designed to stay under a threshold."
   ],
   "contrast": {
    "lazy": "'All under the limit, all with receipts. Approved.'",
    "excellent": "'Three purchases from the same shop on the same day, $180, $190 and $175, against a $200 limit. Together that's $545. I'm holding them and asking the approver to review them as one purchase.'"
   },
   "outcome": "Unchecked expenses cost the firm money and can hide misuse that later becomes an HR or legal matter. Undocumented client costs can't be billed back. And if expenses are ever questioned in an audit or a fee dispute, documented approvals are the firm's proof it handled money properly.",
   "ask": "[Name], an expense report has a receipt for exactly $499, one dollar under the $500 limit that needs extra approval. What do you do with that observation? [Name], how do you raise it without accusing anyone?",
   "mystery": "The case of the three accessories. Reviewing a month of expense reports, you notice one staff member bought three laptop accessories from the same shop on the same day, at $180, $190 and $175, with a $200 limit before extra approval. On another report, an associate's $210 dinner has a receipt but no note on who attended or which matter it was for. In pairs, four minutes: decide what you do about the accessories and who you tell, then whether you approve, reject or hold the dinner and what you ask for. Bring back both decisions."
  }
 },
 "7::Vendor Payment Terms & Cash Flow Timing": {
  "p1": {
   "icebreaker": "Game: 'When would you pay?' I'll read terms on an invoice; shout the day you'd pay it. 'Net 30,' received on the 1st. 'Due on receipt.' 'Net 45, 2 percent off if paid in 10 days.' Shout it out!",
   "teaser": "One of those invoices is lying to you. The terms printed on it aren't the terms the firm actually agreed. We'll catch it in a minute.",
   "why": "Pay vendors according to the terms you agreed, not on reflex.",
   "talk": "Terms like 'net 30' or 'due on receipt' shape the firm's cash flow. Paying earlier than needed ties up money with no benefit, unless there's an early-payment discount. Paying late brings fees, strained relationships and sometimes cut-off service. The signed agreement is what counts, not whatever is printed on the invoice.",
   "walk": [
    "First, confirm each vendor's actual payment terms. Don't assume a default.",
    "Next, pay in line with those terms, unless there's a specific reason not to.",
    "Finally, line up upcoming payments against expected money coming in, so they don't collide."
   ],
   "jargon": [
    {
     "term": "Net 30 / net 45",
     "hint": "payment due 30 or 45 days after the invoice date"
    },
    {
     "term": "Due on receipt",
     "hint": "payment expected as soon as the invoice arrives"
    },
    {
     "term": "Cash flow",
     "hint": "the timing of money coming in and going out"
    },
    {
     "term": "Early-payment discount",
     "hint": "a reduction for paying before the due date"
    }
   ],
   "story": "This happens in real offices: an assistant paid every bill the day it arrived, which felt responsible. One month, three big supplier bills went out on the 2nd, and a major client payment didn't land until the 16th. The firm had to delay payroll by a day and the partner had to explain why. Paying to the agreed terms would have kept the cash in the account until it was needed.",
   "ask": "[Name], when is it worth paying a bill early? [Name], can you think of a time it isn't?"
  },
  "p2": {
   "why": "Paying early or late should always be a decision, never a habit.",
   "talk": "Paying every bill the moment it arrives feels responsible, but if the terms give us thirty days, paying on day two can squeeze the firm's cash for no reason. The opposite is true too: paying late can cost fees and goodwill. The point is that paying early or late should always be a choice someone makes on purpose, so we flag anything outside the normal terms.",
   "walk": [
    "First, remember that paying everything the moment it arrives can squeeze cash flow for no reason.",
    "Finally, flag any payment outside its normal terms, so someone decides it on purpose."
   ],
   "contrast": {
    "lazy": "'I always pay within 48 hours, to be safe.'",
    "excellent": "'These three bills are net 30, due on the 1st. The Harlow payment lands on the 15th. I suggest we pay the two smaller ones on the 1st and check if the third vendor can take the 16th. Shall I ask?'"
   },
   "outcome": "Poorly timed payments can leave the firm short for payroll, court fees or case costs right when they're needed. Late payments damage vendor relationships, which matters when you need a rush job from a court reporter or a courier. Paying on purpose keeps the firm's cash, and its cases, moving smoothly.",
   "ask": "[Name], a net-30 invoice arrives, and the person who handles payments always pays within 48 hours 'to be safe.' Is that the right call? [Name], what would you say to them?",
   "mystery": "The case of the colliding dates. Three large vendor bills are due on the 1st, and the firm's biggest client payment is expected on the 15th, but the office manager wants to pay all three immediately. Separately, a new document-scanning vendor's first invoice says 'due on receipt,' while the signed agreement says net 45. In pairs, four minutes: write what you flag to Elias about the three bills, then decide which terms you follow for the scanning vendor and what you do about the difference. Bring back both."
  }
 },
 "7::Payroll Basics for EA/PA Support Roles": {
  "p1": {
   "icebreaker": "Game: 'Hands up if you touch it.' Hands up if you've ever handled a timesheet. Keep it up if you've ever handled a new-hire form. Keep it up if you've ever handled someone's bank details. Keep it up if you've ever been asked what someone earns. Look around: payroll reaches further than you thought.",
   "teaser": "One of those payroll moments is a favourite trick of fraudsters, and it arrives as a perfectly polite email. You'll spot it by the end.",
   "why": "Payroll deadlines never move, so your part of it can't be late.",
   "talk": "You probably won't run payroll yourself, but you'll touch its edges: onboarding paperwork, timesheets and reimbursements that go through payroll. A mistake or delay on your side can mean someone doesn't get paid. And payroll information, like salaries and bank details, is among the most sensitive data you'll handle.",
   "walk": [
    "First, make sure timesheets and hours are accurate and in before the payroll cut-off.",
    "Next, handle payroll paperwork, like new-hire forms and bank changes, as confidential documents.",
    "Finally, put payroll deadlines on the compliance calendar with the other hard deadlines."
   ],
   "jargon": [
    {
     "term": "Payroll cut-off",
     "hint": "the last moment changes can go into this pay run"
    },
    {
     "term": "Onboarding paperwork",
     "hint": "forms a new hire completes before being paid"
    },
    {
     "term": "Compliance calendar",
     "hint": "the calendar of fixed legal and regulatory deadlines"
    }
   ],
   "story": "A real pattern from the field: an assistant received a polite email from a staff member asking to change their pay account, and forwarded it to payroll. The email wasn't from the staff member at all. That month's salary went to a fraudster's account, and the real employee wasn't paid on time. Sending it through the firm's official change process, with a call to confirm, would have stopped it.",
   "ask": "[Name], which payroll-related tasks do you touch in your role? [Name], which of those feels most sensitive to you?"
  },
  "p2": {
   "why": "Your late timesheet can turn into someone's missed paycheck.",
   "talk": "Payroll might be someone else's system, but our part in it matters. A late timesheet or incomplete onboarding paperwork can turn into a colleague's missed paycheck. And pay details are some of the most sensitive information in any firm, so we never share them beyond the people who need them for the task.",
   "walk": [
    "First, don't treat payroll tasks as low priority just because it's someone else's system.",
    "Finally, never share pay or compensation details beyond the people who need them for the task."
   ],
   "contrast": {
    "lazy": "Forwards the new bank details email to payroll, and tells a colleague the new associate earns 'about the same as the last one.'",
    "excellent": "'Please submit bank changes through the payroll form; payroll will call you to confirm.' And to the colleague: 'Sorry, pay details aren't something I can share.'"
   },
   "outcome": "A missed paycheck damages morale and trust fast, and can breach employment rules. Leaked salary details cause internal friction and can become an HR or legal issue. And a bank change sent by email without checking is one of the most common ways firms lose money to fraud.",
   "ask": "[Name], a new hire's onboarding paperwork is still incomplete two days before the payroll cut-off. What do you do so they don't get missed? [Name], who do you tell?",
   "mystery": "The case of the polite bank change. An employee emails you a new bank account number for their pay and asks you to 'pass it on to payroll.' The same day, a colleague asks what the new associate earns, 'just roughly,' and you processed the offer letter. In pairs, three minutes: decide the right way to handle the bank change and what you must never do with that email, then write the exact words you'd use with the colleague. Bring back your process and your line."
  }
 },
 "7::Tax Season Support & Working with Accountants": {
  "p1": {
   "icebreaker": "Game: 'Race the clock.' Everyone, find a photo on your phone from exactly three months ago. Hands up when you've got it. Ten seconds... twenty... Who's still scrolling? That's what tax season feels like without a filing system.",
   "teaser": "There's a tiny habit, a few minutes a week, that turns the accountant's scariest email into a two-minute job. I'll show you what it is.",
   "why": "Tax season is easy when you've filed everything properly all year long.",
   "talk": "The real value you bring at tax time isn't a heroic effort in March. It's the habit of organising receipts, invoices and records every week, so when the accountant asks for something, you simply find it instead of rebuilding a year from memory. That habit also makes reconciling faster and makes you the person everyone trusts with 'do you have this?'",
   "walk": [
    "First, file and label receipts, invoices and records as they arrive, all year.",
    "Next, when the accountant asks for something, it should be a quick search, not a reconstruction.",
    "Then, become the person who can reliably answer 'do you have this?'",
    "After that, connect it to reconciliation: good records make reconciling fast.",
    "Finally, build a small daily or weekly filing habit instead of one giant push a year."
   ],
   "jargon": [
    {
     "term": "Tax season",
     "hint": "the months before the annual tax return is due"
    },
    {
     "term": "Deductible expense",
     "hint": "a cost that can reduce the tax owed"
    },
    {
     "term": "Home-office expense",
     "hint": "costs of working from home that may be claimable"
    }
   ],
   "story": "A common pattern: an assistant kept receipts in a drawer and an inbox folder all year, planning to sort them 'before tax time.' When the accountant's request came, it took a week of evenings, and several receipts were never found, so those deductions were lost. Ten minutes every Friday, filing by date and type, would have made it a quick search.",
   "contrast": {
    "lazy": "Waits for the accountant's email, then spends a week digging through inboxes and Elias's phone.",
    "excellent": "Files every receipt weekly in a shared folder, named '2025-03-14 Chicago deposition hotel,' so the accountant's request is a search and a zip file the same afternoon."
   },
   "outcome": "Missing receipts mean lost deductions and a higher tax bill. Late answers to the accountant can mean extensions, penalties or a rushed return with mistakes. And if a return is ever questioned, organised records are the firm's proof. A weekly habit protects money and the attorney's peace of mind.",
   "ask": "[Name], the accountant emails asking for every charitable donation receipt and home-office expense from last year, by Friday. If you've filed all year, what does that take? [Name], and if you haven't?",
   "mystery": "The case of the half-filed year. The accountant asks for all of last year's business travel receipts by Wednesday. Half are in a shared folder, labelled by date and trip, and half are photos on Elias's phone. In pairs, four minutes: plan what you do between now and Wednesday, decide how you'll get the photos without taking over Elias's phone, and design the habit you start for this year. Bring back your plan and your habit."
  }
 },
 "7::Quarterly Tax Schedules": {
  "p1": {
   "icebreaker": "Game: 'How many deadlines?' Hold up fingers: how many tax deadlines do you think a business paying estimated taxes has in a year? One? Two? Four? Five? Look around the room.",
   "teaser": "Most people say one, the big annual one. The real answer has a trap in it, because the ones people forget aren't the big one. Let's count them.",
   "why": "Quarterly estimated taxes are four separate deadlines, each with its own lead time.",
   "talk": "Businesses that pay taxes in instalments have a fixed calendar, and missing one date brings penalties, separate from the big annual deadline most people think about. It's the same reminder discipline we use for court deadlines, applied to tax. Each date needs the accountant's figure in time to pay it.",
   "walk": [
    "First, at the start of the year, put all four dates on the financial calendar with early reminders.",
    "Next, well before each date, confirm with the accountant that the amount and paperwork are ready.",
    "Finally, keep a record of each payment confirmation."
   ],
   "jargon": [
    {
     "term": "Estimated tax",
     "hint": "tax paid in instalments during the year"
    },
    {
     "term": "Instalment",
     "hint": "one of several scheduled part-payments"
    },
    {
     "term": "Payment confirmation",
     "hint": "the receipt showing the tax was paid"
    }
   ],
   "story": "A real pattern from the field: a firm's quarterly tax reminder went off on the due date itself. The assistant asked the accountant for the amount that morning, the accountant was with another client, and the payment went in two days late. The penalty was modest but completely avoidable. A reminder two weeks out, with the accountant copied, would have done it.",
   "ask": "[Name], who confirms the payment amount, and when? [Name], how far ahead would you ask?"
  },
  "p2": {
   "why": "Ask the accountant early, not the week the payment is due.",
   "talk": "Quarterly estimated taxes aren't one yearly job; they're four separate deadlines, each with real penalties if they're missed. The key is starting early. If we wait until the week the payment is due to ask the accountant how much to pay, a simple question turns into a last-minute scramble.",
   "walk": [
    "First, treat these as four separate deadlines, not one yearly job.",
    "Finally, coordinate early, so a question about the amount doesn't become a last-minute scramble."
   ],
   "contrast": {
    "lazy": "A single reminder on the due date: 'Pay quarterly tax.'",
    "excellent": "A reminder three weeks out to the accountant: 'Q2 estimated payment due on the 15th. Could we have the amount by the 1st?' A second reminder to Elias a week out to approve it, and the confirmation filed on the day."
   },
   "outcome": "Missed or late instalments bring penalties and interest that add up across the year. A last-minute surprise amount, with the attorney unreachable, can mean paying without approval or paying late. Early coordination keeps the firm's tax position clean and its cash planned.",
   "ask": "[Name], it's ten days before a quarterly estimated tax deadline, and you haven't heard from the accountant about the amount. What do you do? [Name], who else do you loop in?",
   "mystery": "The case of the day-before surprise. The accountant sends the quarterly payment amount the day before the deadline. It's much higher than last quarter, and Elias is unreachable. Rewind to January: you're setting up the year's calendar. In pairs, four minutes: decide what you do today, then put the four estimated tax dates in the calendar with how early each reminder goes out and who it goes to, so this can't happen next quarter. Bring back your action and your calendar."
  }
 },
 "7::W-9/1099 Audits & Filing Deadlines": {
  "p1": {
   "icebreaker": "Game: 'Real or fake rule?' Shout 'Real!' or 'Fake!' 'You get a contractor's tax form before the first payment.' 'You only need tax forms for vendors you pay by cheque.' 'Year-end contractor forms are due at the end of January.' 'Tax forms can be kept in any shared folder.' Go!",
   "teaser": "One of those 'fake' rules is something real offices do every week, and it's why January becomes a nightmare. Let's see which.",
   "why": "Get the vendor's tax form before you pay them the first time, not at tax time.",
   "talk": "When a business pays contractors above a certain amount, it has to file year-end tax forms for them. Those depend on having the contractor's details, collected on a form called a W-9. Chasing a vendor for that information in January, with the deadline looming, is stressful and avoidable. Before the first payment, you have the leverage; afterwards, you're asking a favour.",
   "walk": [
    "First, collect a W-9 from every new vendor or contractor before the first payment.",
    "Next, check the vendor list against the W-9 files now and then, especially for vendors added mid-year.",
    "Finally, put the year-end filing deadline on the calendar with plenty of lead time."
   ],
   "jargon": [
    {
     "term": "W-9",
     "hint": "a US form where a vendor gives their tax ID details"
    },
    {
     "term": "1099",
     "hint": "the year-end form reporting what the firm paid a contractor"
    },
    {
     "term": "Threshold",
     "hint": "the amount paid above which a 1099 is required"
    }
   ],
   "story": "This happens in real offices: an expert witness was paid quickly 'and we'll get the form later.' Later never came. In January, he was travelling and slow to reply, and the firm was close to missing the filing deadline. Asking for the W-9 before releasing the first payment would have taken one email.",
   "ask": "[Name], which vendors do you think are easiest to miss? [Name], why those?"
  },
  "p2": {
   "why": "These forms hold sensitive tax information, so store them securely.",
   "talk": "At the end of the year, the firm has to report what it paid certain vendors, and for that it needs their tax form, the W-9. The mistake is waiting until the deadline to discover one is missing. We collect them when the vendor is first set up. And because those forms hold sensitive tax information, we store them as securely as any other confidential document.",
   "walk": [
    "First, don't wait until the deadline to look for missing forms.",
    "Finally, protect W-9s like any other confidential document."
   ],
   "contrast": {
    "lazy": "Pays the expert now, saves the W-9s in the general shared drive, and checks for missing forms in late January.",
    "excellent": "'Elias, I can release the payment the moment his W-9 arrives. I've emailed him the form and he says today.' W-9s live in a restricted folder, checked against the vendor list every quarter."
   },
   "outcome": "Missing or late 1099s bring penalties and a scramble at the worst time of year. W-9s left in an open folder expose tax IDs and invite identity theft, which is a data incident the firm must handle. Collecting and protecting them up front keeps the firm compliant and its vendors' information safe.",
   "ask": "[Name], preparing for the year-end filing, you find a vendor paid above the threshold never sent a W-9. What do you do now, with the deadline approaching? [Name], what do you change for next year?",
   "mystery": "The case of the four missing forms. In December, you compare the vendor payment report with the W-9 folder and find four contractors paid over the threshold with no form on file; two are hard to reach. Meanwhile an expert witness wants paying today for the Meridian report with no W-9, and Elias says, 'Just pay him; we'll get the form later.' In teams, five minutes: build a week-by-week plan to January for the four, and write what you suggest to Elias about the expert, and why. Bring back your plan and your suggestion."
  }
 },
 "7::Financial Record Retention Requirements": {
  "p1": {
   "icebreaker": "Game: 'Keep it or shred it?' Thumbs up to keep, thumbs down to shred. A bank statement from six years ago. Trust account records from seven years ago. A closed litigation file. A pizza receipt from last year's office party. Show me thumbs.",
   "teaser": "One of those looks like obvious shredding and isn't. And there's a simple rule for every time you're not sure. Let's get there.",
   "why": "Keeping records isn't enough; you have to be able to find them when someone asks.",
   "talk": "Financial records have minimum periods they must be kept, and those vary by type and by state. Trust account records often have longer requirements. And destroying something too early can cause real trouble in an audit or dispute. A record you can't find is almost as bad as one you've destroyed.",
   "walk": [
    "First, know the retention period for each type of record, rather than one rule for everything.",
    "Next, store records somewhere durable and searchable.",
    "Finally, build the retention date into the filing, so reviews happen on schedule."
   ],
   "jargon": [
    {
     "term": "Retention period",
     "hint": "how long a record must legally be kept"
    },
    {
     "term": "Litigation hold",
     "hint": "an instruction not to destroy records linked to a dispute"
    },
    {
     "term": "Audit",
     "hint": "a formal check of the firm's financial records"
    }
   ],
   "story": "A common pattern: an office clean-up sent old boxes to the shredder under a simple 'older than five years' rule. One box held trust account records the firm was required to keep longer. When the regulator asked for them, they were gone, and the firm had to explain why. Checking the retention schedule, box by box, would have kept them.",
   "ask": "[Name], do you think trust account records have a different retention period? [Name], where would you check?"
  },
  "p2": {
   "why": "If you're not sure whether a record can be destroyed, keep it.",
   "talk": "Moving everything online doesn't take care of record-keeping by itself. Digital files still get lost, overwritten or deleted. There are rules about how long financial records must be kept, and they vary. So when we're unsure whether something can be destroyed, we keep it. Keeping a file too long costs almost nothing; destroying one we later need can cost a great deal.",
   "walk": [
    "First, remember that digital storage doesn't manage retention by itself. Files still get lost or deleted.",
    "Finally, keeping something too long costs little; destroying something you later need can cost a lot."
   ],
   "contrast": {
    "lazy": "'Anything over five years goes.' Boxes out of the door by Friday.",
    "excellent": "'Before anything leaves, I'll check each box against the retention schedule, pull out trust records and closed litigation files, and confirm with Elias there's no hold on any of them. I'll log what's destroyed and when.'"
   },
   "outcome": "Destroying records too early can mean regulatory trouble, a failed audit or losing evidence the firm needs in a dispute. It can even look like hiding something. Records you can find quickly answer an auditor's question in minutes. Good retention protects the firm's position long after a case has closed.",
   "ask": "[Name], during a clean-up you find trust account records from several years ago. Before deleting anything to save space, what do you need to confirm first? [Name], who would you confirm it with?",
   "mystery": "The case of the storage room. A partner wants to clear out the old storage room and says, 'Anything more than five years old can go.' The boxes include trust records and closed litigation files. And the auditor has just asked for the bank statements and invoices behind a 2021 transaction, which exist somewhere on a shared drive. In pairs, four minutes: list what you check before a single box leaves, then decide how long finding the 2021 records should take and what would make it faster. Bring back your checklist."
  }
 },
 "7::Fraud Red Flags in Financial Documents": {
  "p1": {
   "icebreaker": "Game: 'Spot the fake.' I'll read two vendor names; shout 'One!' or 'Two!' for the one that's real. 'Meridian Court Reporting' or 'Meridan Court Reporting'? 'Harlow Industries' or 'Harlow lndustries' with a lower-case L? Got them? Most people miss the second.",
   "teaser": "Fraud almost never looks dramatic. On the invoice we'll look at shortly, there are at least three small details that are off, and each one on its own looks innocent.",
   "why": "Most fraud doesn't look dramatic; it looks like a small, believable detail that's slightly off.",
   "talk": "One odd detail is usually just a mistake. A pattern of odd details is what signals real trouble. And because you see the most detail day to day, you're often the first line of defence. Your job isn't to investigate. It's to notice, check through a safe channel and raise it.",
   "walk": [
    "First, watch for the classic signs: an unfamiliar vendor, suspiciously round amounts, duplicate invoice numbers or sudden new bank details.",
    "Next, confirm any change in payment details through a separate channel you already trust, never the contact details in the request itself.",
    "Finally, raise a real concern promptly, rather than trying to solve it alone."
   ],
   "jargon": [
    {
     "term": "Red flag",
     "hint": "a warning sign that something may be wrong"
    },
    {
     "term": "Payment redirection fraud",
     "hint": "a fake request to send money to a new bank account"
    },
    {
     "term": "Spoofed email",
     "hint": "an email faked to look like it's from someone you know"
    }
   ],
   "story": "A real pattern from the field: an assistant received an email, from what looked like a regular supplier's address, saying their bank details had changed. She updated them and paid the next invoice. The supplier's email had been hacked, and the money was gone. A quick call to the supplier on the number already on file would have stopped it.",
   "ask": "[Name], why isn't a request from the vendor's usual email address enough to trust it? [Name], what would you do instead?"
  },
  "p2": {
   "why": "A false alarm is cheap; a missed fraud isn't.",
   "talk": "Fraud rarely looks like one big red flag. It usually shows up as a few small odd details, and if each person explains away their own odd detail privately, nobody sees the pattern. So we write anomalies down and raise them. And if one concern turns out to be nothing, we don't let that stop us raising the next. A false alarm is cheap; a missed fraud isn't.",
   "walk": [
    "First, don't explain away each odd detail privately. Patterns only appear when anomalies get recorded.",
    "Finally, never let one false alarm stop you raising the next concern."
   ],
   "contrast": {
    "lazy": "'It came from their usual email, so I've updated the bank details.' Or, after last month's false alarm: 'I won't make a fuss this time.'",
    "excellent": "'I've called the vendor on the number in our file to confirm the change before anything is updated, and logged it. And Elias, I've had an email in your name asking for $1,500 in gift cards. Can you confirm it's not from you?'"
   },
   "outcome": "Money sent to a fraudster is rarely recovered. Beyond the loss, the firm may have to report it, explain it to clients and answer questions about its controls. And fraud that uses a client's or partner's name can damage trust in the middle of a case. Raising concerns early is cheap insurance.",
   "ask": "[Name], a long-standing vendor emails asking to update their bank details for future payments. What's your checking process? [Name], why doesn't their familiar email address settle it?",
   "mystery": "The case of the urgent gift cards. Last month you flagged a suspicious invoice that turned out to be genuine, and you felt embarrassed. This month, an email from 'Elias' asks you to buy $1,500 in gift cards for a client, quickly and quietly. And an invoice arrives from 'Meridan Legal Services' for $4,000, with a new bank account and an 'urgent' note, though your usual vendor is Meridian Court Reporting. In teams, four minutes: list every red flag you can find, decide what you do about each and how you check them. Bring back your list of flags."
  }
 }
});
