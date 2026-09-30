/* Day 7 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question) · scenario (a short situation for the room to work through). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "7::The EA/PA's Role in Finance": {
  "p1": {
   "why": "When you handle an invoice or an expense, you're a real link in the firm's money chain, not just filing paperwork.",
   "talk": "These days, assistants regularly deal with invoices, expenses and reimbursements. That means a mistake you make, like two digits swapped, doesn't stay on your desk. It flows into the books, the client's bill and the firm's reports.",
   "walk": [
    "First, treat every financial document as something that affects the firm's accuracy.",
    "Next, check the numbers before you pass anything on.",
    "Then, track financial tasks with dates, like any other recurring work.",
    "After that, if something looks off, flag it. Don't assume someone later will catch it.",
    "Finally, understand what depends on your step, so you know why getting it right matters."
   ],
   "ask": "Who here has done any bookkeeping or invoicing before?",
   "scenario": "Elias hands you a stack of receipts from a client lunch and a taxi ride, with 'Harlow' scribbled on one of them. The accountant will code them next week. What do you check and record now so nothing has to be guessed later?"
  },
  "p2": {
   "why": "A transposed number at your step becomes someone else's problem further down the line.",
   "talk": "Assistants usually touch the firm's money in three places. Paying bills: collecting invoices, matching them against what was approved and sending them for payment. Getting paid: preparing client invoices, keeping track of what's still owed and sending polite reminders. And expenses: gathering receipts, coding each one to the right matter and flagging anything outside the rules. We're rarely the last step, which is exactly why a small slip at our step travels so far.",
   "walk": [
    "First, paying bills: collecting invoices, matching them to approvals and sending them for payment.",
    "Next, getting paid: preparing client invoices, tracking what's outstanding and sending polite reminders.",
    "Finally, expenses: gathering receipts, coding them to the right matter and flagging anything outside policy."
   ],
   "ask": "A vendor invoice for $1,850 arrives, but the approved purchase order says $1,580. What do you do before it goes anywhere near payment?",
   "scenario": "A court-reporter invoice for the Meridian deposition arrives with the right amount but the wrong matter number. If you pass it on as is, where does that error show up next, and who has to fix it?"
  }
 },
 "7::What an SOP Actually Needs": {
  "p1": {
   "why": "A good procedure answers five questions: why, who, how, how do we check, and who do we call when it goes wrong.",
   "talk": "Those five answers are the five parts of a real procedure, and they come in order.",
   "walk": [
    "First, purpose: why does this process exist?",
    "Next, scope: exactly who does it apply to?",
    "Then, procedure: the actual steps.",
    "After that, controls: the checks built in to prove it was done right.",
    "Finally, escalation: when and how to report a problem."
   ],
   "ask": "Have you ever had to follow a process that wasn't written down anywhere?",
   "scenario": "The only person who knows how Elias's monthly card statements get reviewed is going on leave for six weeks. Her notes are a list of steps with no names or checks. Which of the five parts are missing?"
  },
  "p2": {
   "why": "A simple test for any procedure: could a temp follow it on their first day?",
   "talk": "A procedure needs a few parts to be genuinely useful. Its purpose and scope: why it exists, who and what it covers, and just as importantly, what it doesn't. The steps themselves, numbered, so anyone can follow them, plus the checks that prove it was done properly. And escalation: who to contact when something goes wrong, and by when. Without that, each person does it their own way, and that's exactly what audits find.",
   "walk": [
    "First, purpose and scope: why it exists, and who and what it covers, including what it doesn't.",
    "Next, procedure and controls: numbered steps anyone can follow, plus checks and records that prove it was done properly.",
    "Finally, escalation: who to contact when something goes wrong, and by when."
   ],
   "ask": "Let's draft the five parts, one line each, for a procedure on processing a client's expense reimbursement.",
   "scenario": "A temp starts Monday and will process vendor invoices while you're at a conference. Your written procedure says 'approve and pay as usual.' Could they follow it on day one? What would you add?"
  }
 },
 "7::The Financial Calendar": {
  "p1": {
   "why": "Money deadlines are relentless, so keep them all on one calendar with reminders well ahead.",
   "talk": "Billing cycles, tax deadlines and month-end closes keep coming round. If they live in three different places, or in your memory, one of them will eventually slip.",
   "walk": [
    "First, put billing, tax and closing dates on one calendar.",
    "Next, set automatic reminders about a week to ten days before each deadline.",
    "Then, look at the calendar every week for what's coming up.",
    "After that, if one type of deadline keeps slipping, give it extra buffer.",
    "Finally, check each cycle whether a date or requirement has changed."
   ],
   "ask": "Of billing, tax and month-end, which would you be most likely to let slip?",
   "scenario": "Last quarter, the firm paid a late fee on a payroll filing because the reminder was only in one partner's personal calendar, and he was on holiday. How do you set up the calendar so that can't happen again?"
  },
  "p2": {
   "why": "A reminder a week or more ahead gives you time to fix a problem, not just notice it.",
   "talk": "Money deadlines come round on three rhythms. Every month, there's client invoicing, the month-end close and reconciling the bank and trust accounts. Every quarter, there are estimated tax payments and payroll filings. And every year, there are the tax forms for staff and contractors at the end of January, the year-end close and licence renewals. The exact dates change, so we confirm them with the firm's accountant each year.",
   "walk": [
    "First, monthly: client invoicing, month-end close and bank and trust reconciliations.",
    "Next, quarterly: estimated tax payments and quarterly payroll filings.",
    "Finally, yearly: contractor and employee tax forms at the end of January, year-end close and license renewals."
   ],
   "ask": "Let's build the next 90 days of the firm's financial calendar: which monthly, quarterly and yearly items fall in that window, and when does each reminder go off?",
   "scenario": "It's mid-December. Your calendar shows month-end close, the trust reconciliation, the January estimated tax payment and the year-end contractor forms all within six weeks. Which one do you start first, and why?"
  }
 },
 "7::Financial KPIs for EAs/PAs": {
  "p1": {
   "why": "Three numbers tell you whether the financial side is healthy: how fast invoices go out, how accurate reconciliations are and how much retainer is left.",
   "talk": "The first of those three numbers is how quickly invoices go out. The target is one to three days from finishing the work to sending the bill. That might not sound urgent, but every day an invoice sits unsent is money the firm has already earned and isn't collecting. Slow invoicing also means slower payment, and clients question old charges more than fresh ones.",
   "walk": [
    "First, track how long invoices take to go out, against the 24 to 72 hour target.",
    "Next, track reconciliation accuracy, aiming for 98 to 100 percent.",
    "Then, set an alert when a client's retainer drops below a quarter.",
    "After that, review these numbers on a set schedule.",
    "Finally, if one keeps missing, look at the process, not just effort."
   ],
   "ask": "Why do you think the retainer alert is set at 25 percent instead of zero?",
   "scenario": "Elias asks, 'Are we on top of billing?' You know invoices usually go out about five days after month-end. Is that a good answer? Which three numbers would you bring him instead?"
  },
  "p2": {
   "why": "An alert at 25 percent gives you time to act before a client's account runs dry.",
   "talk": "The other two numbers work the same way. Reconciliations, where we check the firm's records against the bank, should be 98 to 100 percent accurate. And for clients who pay money upfront, called a retainer, we set an alert when it drops to a quarter of the original amount. Why a quarter and not zero? Because that gives us time to ask for more before the account runs dry in the middle of a case.",
   "walk": [
    "First, reconciliation accuracy of 98 to 100 percent.",
    "Finally, the retainer alert at 25 percent, which buys you runway."
   ],
   "ask": "A client's $10,000 retainer is down to $2,300, and they have a hearing next week. What should have already happened, and what do you do now?",
   "scenario": "The Harlow retainer dropped below 25 percent two weeks ago, but the alert went to an inbox nobody checks. The client now owes more than the retainer holds. What went wrong in the process, not just the person?"
  }
 },
 "7::Bookkeeping Basics & Compliance": {
  "p1": {
   "why": "The golden rule of bookkeeping: never approve your own transaction.",
   "talk": "Every transaction gets labeled as money in, money out or money owed to the firm. Every entry leaves a trail showing who recorded it and why. And the same person never both enters and approves, because that separation is what makes the books trustworthy.",
   "walk": [
    "First, label each transaction as income, expense or receivable when you record it.",
    "Next, keep a clear trail: who entered it, when and from what document.",
    "Then, separate duties. Never approve something you entered, even to save time.",
    "After that, reconcile regularly, while mistakes are still easy to trace.",
    "Finally, flag anything that looks like a compliance gap straight away."
   ],
   "ask": "Why does separating duties matter, even in a small office?",
   "scenario": "You enter the office supplies order into the books, and your manager says, 'You may as well approve it too; it's only $180.' What do you say, and why does the amount not change the answer?"
  },
  "p2": {
   "why": "Know whether your firm records money when it moves, or when it's earned.",
   "talk": "Three bookkeeping ideas are worth knowing. Double-entry means every transaction touches at least two accounts, which is what makes mistakes show up. Cash versus accrual is about timing: cash records money when it actually moves, accrual records it when it's earned or owed. And the chart of accounts is simply the list of categories every transaction gets filed under. Coding things consistently is what makes the reports trustworthy.",
   "walk": [
    "First, double-entry: every transaction touches at least two accounts, which is what makes errors show up.",
    "Next, cash versus accrual: cash records money when it moves; accrual records it when it's earned or owed.",
    "Finally, the chart of accounts: the list of categories every transaction is coded to. Consistent coding makes reports reliable."
   ],
   "ask": "You're asked to both enter and approve a $2,400 vendor payment because the usual approver is out. What do you do, and what do you suggest for next time?",
   "scenario": "A client pays a $6,000 invoice in March for work done in December. Under cash accounting, when is that income? Under accrual? Which one does Thorne & Partners use, and how would you find out?"
  }
 },
 "7::Reading Basic Financial Statements": {
  "p1": {
   "why": "You don't need to be an accountant, but you do need to read the three reports that tell a business's money story.",
   "talk": "There are three reports. The profit and loss, or P&L, shows income minus expenses over a period, like a month. The balance sheet shows what the business owns and owes on one date, and it always balances: assets equal liabilities plus equity. The cash flow statement shows the cash that actually came in and went out. A firm can be profitable and still short of cash if clients pay slowly. And client money in trust is never the firm's income.",
   "walk": [
    "First, we compare each month's P&L with last month and the same month last year.",
    "Next, we check receivables, what clients owe, and how old it is.",
    "Then we watch recurring expenses for anything new or higher.",
    "After that, we take questions to the accountant with the exact line and amount.",
    "Finally, we keep the monthly reports together, named the same way."
   ],
   "ask": "Why might a profitable firm still struggle to make payroll?",
   "scenario": "Reviewing the monthly P&L, you notice 'Software subscriptions' jumped from $600 to $1,900. What do you check first, and how do you phrase your question to the bookkeeper?"
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
   "ask": "Which of the three reports would you pull to answer 'can we afford this next month?'",
   "scenario": "The P&L shows the firm made a healthy profit last quarter, but Elias says there isn't enough cash for next month's payroll. How can both be true, and which report would you pull to show him?"
  }
 },
 "7::SOA Reconciliation": {
  "p1": {
   "why": "Reconciling an account comes down to one formula: opening balance, plus invoices, minus payments, plus or minus adjustments, equals closing balance.",
   "talk": "A statement of account shows what a client owes over time. Reconciling it just means checking that formula works out exactly. When it doesn't, you don't start from scratch; you go looking for the specific difference.",
   "walk": [
    "First, start from the opening balance, add invoices, subtract payments and apply adjustments, always in that order.",
    "Next, if income doesn't match deposits, compare the bank statement with the income records first.",
    "Then, don't rebuild every report. Start from the numbers that don't match and work back.",
    "After that, make sure the closing balance matches exactly. Don't round away a small gap.",
    "Finally, write down what caused any adjustment."
   ],
   "ask": "Why not just rebuild every report when something doesn't match?",
   "scenario": "Harlow's accounts team says their records show they owe $1,200 less than your statement of account. Before you rebuild the whole year, where do you start, and what do you compare first?"
  },
  "p2": {
   "why": "When the numbers don't match, start with the difference and find what explains it.",
   "talk": "Let's walk through an example. A client starts the month owing 4,000. We add new invoices of 6,500, take off payments of 5,000 and a 250 credit, which leaves 5,250. But the client's records say 5,000. So we look for 250, and it turns out they never recorded the credit. Once we've found it, we write the reconciliation up, so next month starts from a number both sides agree on.",
   "walk": [
    "First, opening $4,000, plus invoices $6,500, minus payments $5,000, minus a $250 credit note, gives $5,250.",
    "Next, if the client's records say $5,000, look for the $250. Here, they never recorded the credit note.",
    "Finally, write up the reconciliation, so next month starts from an agreed number."
   ],
   "ask": "Opening balance $3,200, invoices $4,800, payments $6,000 and a $150 late fee. What's the closing balance? The client says they owe $1,850. Where do you look first?",
   "scenario": "You find the $1,200 difference: a credit note the firm issued in June that Harlow never received. The numbers now agree. What do you send them, and what do you note so next month starts clean?"
  }
 },
 "7::Reconciliation Discrepancy Detection": {
  "p1": {
   "why": "When a reconciliation doesn't balance, compare line by line, not just the totals.",
   "talk": "Matching totals can hide real problems. Two mistakes can cancel each other out, or a payment can land on the wrong client's account and still leave the overall total looking perfect. So when something doesn't balance, or even when it does, we check line by line: every payment against the right client, every reversal and anything that looks like a duplicate.",
   "walk": [
    "First, compare the ledger with the bank statement one line at a time.",
    "Next, check that credits went to the right client or account.",
    "Then, look for reversed entries that might be hiding an error.",
    "After that, run through the checklist: every invoice listed, every payment recorded and every difference explained.",
    "Finally, watch for anything that looks like a duplicate payment."
   ],
   "ask": "If a reconciliation came up $340 short, what would you check first?",
   "scenario": "The bank shows two payments of $875 to the same courier on consecutive days, but the ledger shows one. Is that a duplicate payment or a missing entry? How do you tell?"
  },
  "p2": {
   "why": "A payment put on the wrong client's account once ended up as a real legal dispute.",
   "talk": "This isn't just tidiness. A payment put on the wrong client's account once turned into a genuine legal dispute. The checklist that prevents it is short: every invoice listed, every payment recorded, nothing left unmatched and every difference explained. And to stop the same bill being paid twice, we combine system checks, a human check and approval limits.",
   "walk": [
    "First, every invoice is listed, every payment is recorded, nothing is left unmatched and every difference has an explanation.",
    "Finally, to prevent duplicate payments, use system checks, manual checks and approval limits."
   ],
   "ask": "Your reconciliation is $340 short. Walk through the checklist in order, and name the three most likely causes.",
   "scenario": "A $3,000 payment from Meridian was recorded against another client with a similar name. That client has now been sent a statement showing a credit. Walk through what you correct, and who you tell, in order."
  }
 },
 "7::Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk": {
  "p1": {
   "why": "Money in a client trust account belongs to the client until it's earned; it is never the firm's money to borrow.",
   "talk": "Law firms hold client money, like retainers and settlements, in a special trust account. Mixing that money with the firm's own funds, even briefly or by accident, is called commingling. It's one of the most serious ethics violations a lawyer can commit, and it can end careers.",
   "walk": [
    "First, keep trust money and the firm's operating money in completely separate accounts.",
    "Next, only move money out of trust for a specific, documented reason, like an approved invoice or a signed disbursement.",
    "Finally, keep a running ledger for each client, showing exactly what's held for them."
   ],
   "ask": "What counts as a documented reason to move money out of trust?",
   "scenario": "The operating account is short for payroll on Friday, and someone suggests 'borrowing' from the trust account until a big client payment clears Monday. What do you say, and who needs to know about the suggestion?"
  },
  "p2": {
   "why": "Trust transactions are meant to feel slower and more careful; that friction is on purpose.",
   "talk": "Trust money belongs to the client, not the firm, and the rules around it are strict. A client's trust balance must never go below zero, not even for a moment, and not even if it's fixed the same day. That's why handling trust money should feel slower and more careful than paying an ordinary bill. That friction is deliberate; it's what protects the client and the firm's licence.",
   "walk": [
    "First, a client's trust balance must never go negative, not even for a moment, not even if it's fixed the same day.",
    "Finally, any trust transaction should feel more deliberate than a normal payment."
   ],
   "ask": "One client's trust balance is $200 lower than the ledger says it should be. What's your first move, and who needs to know before you do anything else?",
   "scenario": "A client's $5,000 settlement check is deposited into trust today. Elias asks you to pay the $400 expert fee from it right away because 'the money's there.' What has to happen before any money leaves trust?"
  }
 },
 "7::Trust Account Reconciliation Discipline": {
  "p1": {
   "why": "For a trust account, three numbers must always match exactly.",
   "talk": "The bank statement, the trust ledger and the total of every client's individual balance. Trust accounts need checking at least monthly, and right after anything unusual. And a difference is never 'probably fine'; it gets traced to the exact transaction.",
   "walk": [
    "First, compare the bank statement with the trust ledger on a fixed schedule.",
    "Next, check the ledger total against the sum of every client's balance.",
    "Finally, document every reconciliation, even the clean ones."
   ],
   "ask": "Why would you document a reconciliation that came out perfectly?",
   "scenario": "The trust account reconciled perfectly this month, and a colleague says there's no point writing it up when nothing was wrong. A bar auditor asks to see the last 12 months. What would they want to find?"
  },
  "p2": {
   "why": "Even a one-dollar difference in a trust account gets escalated.",
   "talk": "Here's the catch with trust accounts: the overall account can balance perfectly while one individual client's money is short, because another client's money is covering the gap. So we check every client's balance, not just the total. And any difference, even a single dollar, gets escalated straight away. With trust money, there's no such thing as too small to mention.",
   "walk": [
    "First, the overall account can balance while one client's money is short, so check every client, not just the total.",
    "Finally, any difference, whatever its size, is escalated immediately."
   ],
   "ask": "This month the bank and the trust ledger match, but one client's balance doesn't match what was deposited for them. Walk us through how you'd trace it.",
   "scenario": "Your trust reconciliation is off by $1. It's 5:30 p.m. on the last day of the month, and everyone wants to leave. What do you do with that dollar?"
  }
 },
 "7::Billing & Invoicing": {
  "p1": {
   "why": "An invoice is simple math, rate times hours plus expenses minus any discount, but it has to be exactly right.",
   "talk": "And beyond the total, every invoice needs three things: how much is due, when it's due and the payment terms. Without them, clients hesitate, and payment slows down.",
   "walk": [
    "First, multiply the rate by the hours, add expenses, then apply any discount.",
    "Next, make sure it states the amount due, the due date and the terms.",
    "Then, check the rate and hours against the engagement terms.",
    "After that, recheck the final math yourself.",
    "Finally, send it promptly. A perfect invoice sitting unsent doesn't bring in money."
   ],
   "ask": "What three things must every invoice state?",
   "scenario": "An invoice to Meridian goes out with the hours right but the old hourly rate from last year. The client pays it. What's the problem now, and what do you do about it?"
  },
  "p2": {
   "why": "Show the discount as its own line, so the client can see it.",
   "talk": "A clean invoice has three parts. At the top: the firm's details, the client, the matter number, the invoice number and the date. In the middle: each piece of work with its date, description, hours and rate, plus any expenses, and any discount shown on its own line so the client can see it. At the bottom: the total, when it's due, the payment terms, how to pay and any late-fee terms.",
   "walk": [
    "First, the header: firm details, client, matter number, invoice number and date.",
    "Next, the body: each entry with date, description, hours and rate, plus expenses, with any discount on its own line.",
    "Finally, the footer: total due, due date, terms, payment methods and any late-fee terms."
   ],
   "ask": "Let's do one live: 12.5 hours at $350 an hour, $240 in filing fees and a 10 percent courtesy discount on the fees only. Call out each step. What's the total, and what else must the invoice say?",
   "scenario": "A client complains that your invoice just says 'Legal services — $4,200' with no detail. Their accounts team won't pay it. What should the invoice have shown, section by section?"
  }
 },
 "7::Contract-Aware Billing": {
  "p1": {
   "why": "Know the contract's limits before you start billing, and warn people before you hit them.",
   "talk": "Every client agreement can have its own rules: payment terms, late fees and sometimes a cap on hours. If you only discover the cap when the final bill goes out, it's too late.",
   "walk": [
    "First, confirm payment terms, late fees and any hour cap before billing starts.",
    "Next, track hours against the cap as you go.",
    "Then, flag it well before the cap is reached.",
    "After that, apply late fees and terms consistently, as written.",
    "Finally, if the terms are unclear, confirm before you bill."
   ],
   "ask": "What would you do at 80 percent of an hour cap?",
   "scenario": "A new corporate client's engagement letter says invoices over $10,000 need a purchase order number, and late payments carry 1.5 percent interest per month. Where do you record these terms so billing actually uses them?"
  },
  "p2": {
   "why": "Corporate clients often require specific billing codes, and invoices without them get rejected.",
   "talk": "Before we bill, we check what the client's engagement agreement says. How are they billed: by the hour, a flat fee, a share of the result or from a retainer? Is there a cap or budget, and how much notice do we owe before going over it? And what are the payment terms and any required format? Big corporate clients often insist on specific billing codes and will simply reject an invoice without them.",
   "walk": [
    "First, the billing arrangement: hourly, flat fee, contingency or retainer.",
    "Next, caps and budgets, and the notice needed before going over.",
    "Finally, payment and late-fee terms, plus any required format or codes."
   ],
   "ask": "The Harlow matter has a 40-hour cap, with notice required at 80 percent. Time entries show 34.5 hours so far. What do you do today, and who do you tell?",
   "scenario": "The Harlow matter has gone over its 40-hour cap by six hours, and nobody sent the 80 percent notice. The invoice is due to go out tomorrow. What do you tell Elias, and what are his options?"
  }
 },
 "7::Pre-Bill Review: Checking an Invoice Before It Goes Out": {
  "p1": {
   "why": "An invoice mistake the client finds costs far more trust than one we catch first, so the pre-bill is where we protect the relationship.",
   "talk": "A pre-bill is the draft invoice the attorney reviews before it goes out. It's our last chance to catch mistakes. And invoice mistakes are nearly always the same few: the wrong rate, time on the wrong matter, vague or lumped-together entries, costs missing or billed twice, and terms that don't match the engagement letter. We prepare and check it; the attorney decides what's charged or written off.",
   "walk": [
    "First, we run the pre-bill at the same point every month, once the period's time is in.",
    "Next, we check the header: client, billing contact, matter, dates and any reference number the client needs.",
    "Then we check every time entry: matter, person, rate and a clear description, and flag anything against the client's guidelines.",
    "After that, we check costs: a receipt for each, no duplicates and markups only if allowed.",
    "Finally, we check the math, the retainer to apply and the terms, and send the attorney our flags at the top."
   ],
   "ask": "Which invoice error do you think a client notices first?",
   "scenario": "The Meridian pre-bill lists 'Research — 4.0' for an associate, but the matter's billing guidelines require a description of what was researched. What do you flag, and to whom?"
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
   "ask": "What would you put on a pre-bill checklist for a corporate client with strict billing rules?",
   "scenario": "The Harlow pre-bill shows 42 hours in June. One entry is billed at last year's rate, two paralegal entries say only 'file review,' and a $620 court reporter cost appears twice. What goes in your note to Elias, and in what order?"
  }
 },
 "7::Invoice Management: Tracking, Follow-Up & Collections": {
  "p1": {
   "why": "A firm can do great work and still run short of cash if nobody follows invoices through to payment.",
   "talk": "Sending an invoice is only the halfway point. It's finished when it's paid, and managing that gap is a big part of how we protect the firm's cash flow. We keep one invoice register with the number, client, matter, dates, amount, status and date paid. Our follow-up is polite, predictable and written down. Anything bigger than a reminder, like a payment plan, a late fee or collections, is the attorney's decision.",
   "walk": [
    "First, number invoices in one sequence and never reuse a number. A cancelled invoice is voided.",
    "Next, send each invoice to the right billing contact in the format the client asks for.",
    "Then, follow a set reminder schedule: before the due date, on it, then 7, 14 and 30 days overdue.",
    "After that, review the aging report every week and send Elias anything over 60 days.",
    "Finally, record payments the day they arrive, so nobody gets chased after paying."
   ],
   "ask": "In a client company, who do you think actually pays the invoices?",
   "scenario": "A new client says they never received last month's invoice. Your register shows it was emailed to their general counsel. What do you check, who do you send it to now, and what do you update in the register?"
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
   "ask": "What's the difference in tone between a 7-day and a 30-day overdue reminder?",
   "scenario": "The aging report shows Meridian owes $18,400: $6,000 is 45 days overdue and $12,400 is 95 days overdue. No one has followed up since the invoices went out. What do you send today, and what do you ask Elias?"
  }
 },
 "7::E-Billing Portals, LEDES & Client Billing Guidelines": {
  "p1": {
   "why": "For many corporate clients, an invoice that isn't in their portal, in their format, simply doesn't exist.",
   "talk": "A lot of corporate clients and insurance companies won't accept an emailed invoice. They want it uploaded to an e-billing portal, often in a standard file format called LEDES. Every time entry usually needs task and activity codes, and the portal checks each invoice against the client's billing rules automatically. If it rejects the invoice or cuts lines, the firm doesn't get paid until it's fixed.",
   "walk": [
    "First, for each e-billing client we record the portal, who holds the login, the format and codes, the deadline and the billing contact.",
    "Next, we keep their billing guidelines with the matter and note the rules that cause the most cuts.",
    "Then we make sure time entries have the right codes before the pre-bill.",
    "After that, we upload and check the status: accepted, rejected or adjusted.",
    "Finally, we bring any cuts or rejections to the attorney and resubmit or appeal before the deadline."
   ],
   "ask": "Which kinds of clients do you think are most likely to use e-billing portals?",
   "scenario": "A new corporate client's welcome email says invoices must go through their portal in LEDES format within 30 days of month-end. The firm has never used that portal. What do you set up before the first invoice is due?"
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
   "ask": "What would a three-month adjustment log tell the firm?",
   "scenario": "Harlow's insurer rejects the firm's May invoice in its e-billing portal: 'Task code missing on 7 entries; 2 entries exceed the approved rate.' The resubmission window closes in 10 days. What do you do, and what do you need from Elias?"
  }
 },
 "7::Retainer Invoices & Applying Trust Funds": {
  "p1": {
   "why": "Retainers are where billing meets trust accounting, and mistakes here are ethics problems, not just accounting ones.",
   "talk": "Many clients pay a retainer up front. It goes into the client trust account and stays the client's money until the firm has earned it and billed for it. Paying an invoice from it means moving money from trust to the firm's operating account, and that needs the attorney's approval, a matching invoice and an entry on the client's ledger. An 'evergreen' retainer has to be topped back up to an agreed level, so we watch the balance.",
   "walk": [
    "First, when a retainer arrives, we confirm it went into trust and record it on the client's ledger.",
    "Next, the invoice shows the total, the amount applied from the retainer and the balance left.",
    "Then we get the attorney's written approval before any transfer.",
    "After that, we transfer exactly that amount and record it with the invoice number.",
    "Finally, when the balance drops below the agreed level, we send the approved top-up request."
   ],
   "ask": "Why must a retainer go into the trust account and not the operating account?",
   "scenario": "A new client wires a $5,000 retainer, and the bank shows it landed in the firm's operating account by mistake. What do you do, and who needs to know today?"
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
   "ask": "What would a client think if their invoice ignored the retainer they'd paid?",
   "scenario": "Meridian paid a $15,000 evergreen retainer that must stay at $10,000 or more. The June invoice is $6,800 and the balance is $11,200. What does the invoice show, what transfer happens, what's the new balance, and what goes to the client?"
  }
 },
 "7::Invoice & Payment Reconciliation": {
  "p1": {
   "why": "If payments aren't matched to the right invoices, clients get chased for bills they've already paid, and that damages trust fast.",
   "talk": "Every payment that comes in has to be connected to the invoice or invoices it's paying. Real payments are messy: one wire can cover three invoices, a client can pay half, or a bank fee can make it arrive a little short. And at the end of each month, the total of all open invoices should match the receivables number in the books. If it doesn't, something was applied to the wrong place.",
   "walk": [
    "First, we record each payment the day it arrives: date, amount, method, who paid and any reference.",
    "Next, we match it to invoice numbers. With no note, we match by exact amount, then ask the client.",
    "Then, part payments leave a balance open, and overpayments become a credit until the attorney decides.",
    "After that, a short payment caused by bank fees gets the fee recorded separately, if that's firm policy.",
    "Finally, at month-end, the open-invoices report has to match the receivables balance."
   ],
   "ask": "What would a client think if we chased them for an invoice they'd already paid?",
   "scenario": "Meridian pays $4,000 by check with no note. They have two open invoices: $4,000 from March and $1,500 from April. Which do you apply it to, and what do you do to be sure?"
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
   "ask": "Why might applying a payment to the oldest invoice cause a problem in a billing dispute?",
   "scenario": "Harlow Industries sends one wire of $7,425 with the note 'May invoices.' There are three open May invoices: $2,500, $3,000 and $2,000. What happened to the missing $75, how do you apply the wire, and what do you ask Harlow?"
  }
 },
 "7::Handling a Billing Dispute": {
  "p1": {
   "why": "A billing dispute is a request for an explanation, not an attack.",
   "talk": "Most disputes come from honest confusion, not bad faith. What settles them is the paperwork behind the invoice: the time entries, receipts and agreed terms. And how you handle it matters to the relationship far beyond the dollars involved.",
   "walk": [
    "First, pull the actual records behind the charge before you reply.",
    "Next, acknowledge the dispute quickly, even before it's resolved.",
    "Finally, explain the answer with the supporting details, so the client can see how the charge was worked out."
   ],
   "ask": "Why acknowledge a dispute before it's even resolved?",
   "scenario": "Meridian's finance director emails an angry note about a $2,800 charge for 'document review.' Elias is in trial all week. What do you send today, and what do you pull before anyone explains the charge?"
  },
  "p2": {
   "why": "If it turns out to be our mistake, fix it plainly and quickly.",
   "talk": "When a client questions a bill, the instinct is to defend it. But getting defensive before we've checked the records can turn a simple misunderstanding into a real argument. So we check first. If it was our mistake, we fix it plainly and quickly. And we remember what's actually at stake: the relationship is worth far more than any single invoice.",
   "walk": [
    "First, getting defensive before checking the records can turn a misunderstanding into a real problem.",
    "Finally, protecting the relationship matters more than protecting the original invoice."
   ],
   "ask": "A client emails disputing a charge, saying it doesn't match what they remember agreeing to. What's your first move before you reply?",
   "scenario": "You check the records and find the disputed charge was billed twice: once in May and again in June. How do you tell the client, and what else do you check before you reply?"
  }
 },
 "7::Real-Time Time Tracking for Billable Work": {
  "p1": {
   "why": "Billable time becomes the client's invoice, so record it now, not from memory later.",
   "talk": "We talked about time tracking on Day 3. Here the stakes are higher, because this time turns directly into what the client pays. The longer you wait to record it, the less accurate it gets.",
   "walk": [
    "First, log time as you work, or straight afterwards.",
    "Next, write enough detail to support the invoice line: what was done, for which matter.",
    "Finally, compare logged time with the billing calendar regularly, before invoices go out."
   ],
   "ask": "How accurate do you think time reconstructed at the end of the week really is?",
   "scenario": "On Friday afternoon, an associate reconstructs the whole week's time from his calendar and emails, and bills 'about 2 hours' for each call. What's likely wrong with those entries, and what would you suggest instead?"
  },
  "p2": {
   "why": "Accurate billing is impossible without accurate time.",
   "talk": "Time we log from memory at the end of the day is noticeably less accurate than time logged as we go, and that inaccuracy costs someone: either the firm undercharges, or the client gets billed for time that's hard to justify. Good time records are also what make careful, contract-aware billing possible in the first place.",
   "walk": [
    "First, time logged from memory is measurably less accurate, and that costs the firm or the client.",
    "Finally, good time tracking is what makes contract-aware billing possible."
   ],
   "ask": "It's the end of a busy day and you haven't logged time for several tasks. How do you rebuild it as accurately as possible, and what will you do differently tomorrow?",
   "scenario": "A client questions a 3.5-hour entry that says 'research.' The associate can't remember what the research was about. How would a better time entry have prevented this?"
  }
 },
 "7::Billable vs. Non-Billable Hours": {
  "p1": {
   "why": "Getting billable and non-billable right is the difference between an invoice that gets paid and one the client cuts.",
   "talk": "Billable time is work the client can be charged for under their engagement letter: drafting, research, calls and court time on their matter. Non-billable time is everything else, like internal admin, training, business development, or work the firm agreed not to charge. We record both, because non-billable time still shows where the hours go. Lawyers usually record time in tenths of an hour, six-minute blocks, and many corporate clients have written billing guidelines listing what they won't pay for.",
   "walk": [
    "First, every entry gets a date, matter, time in tenths, a clear description and billable or not.",
    "Next, we check the engagement letter and the client's guidelines. Scheduling and copying are often non-billable.",
    "Then we write one task per entry, not one long block.",
    "After that, we prepare a pre-bill, a draft invoice, so the attorney can decide any write-downs or write-offs.",
    "Finally, approved no-charge work can show on the invoice as 'no charge.'"
   ],
   "ask": "Which everyday tasks do you think clients most often refuse to pay for?",
   "scenario": "You spent 40 minutes booking travel for Elias's deposition in the Meridian case. Is it billable? Where do you check, and how do you record it either way?"
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
   "ask": "Why would a firm want to know how much non-billable time a matter took?",
   "scenario": "An associate's entry reads: '3.5 — Harlow: call with client, research, drafted letter, scheduled meeting, copied exhibits.' Harlow's billing guidelines reject block billing and clerical time. How do you help fix the entry before the pre-bill goes to Elias?"
  }
 },
 "7::QuickBooks How-Tos — Step by Step": {
  "p1": {
   "why": "Four everyday tasks cover most of what you'll ever do in QuickBooks.",
   "talk": "You don't need to master the whole program. Learn these four workflows until you can do them without thinking.",
   "walk": [
    "First, create an invoice: New, then Invoice, pick the client, add the lines with description, rate and hours, check the total and send.",
    "Next, record an expense: New, then Expense, pick who was paid and from which account, choose the category and attach the receipt.",
    "Then, reconcile an account: pick the account and statement date, tick every transaction that matches the bank and finish only when the difference is zero.",
    "Finally, run the overdue-invoices report, and look first at anything over 60 and 90 days. Those need a follow-up call."
   ],
   "ask": "Which of these have you done before?",
   "scenario": "Elias asks for a list of every client invoice more than 60 days overdue before tomorrow's partner meeting. Which QuickBooks task gets you there, and what would you add to make the list useful?"
  },
  "p2": {
   "why": "You don't need the whole platform, just these four workflows done well.",
   "talk": "Nobody needs to master all of QuickBooks. Most assistants use four workflows, and doing those well covers almost everything. Creating and sending an invoice with the right terms and due date. Receiving a payment and applying it to the correct open invoice. Entering vendor bills. And reconciling each month against the bank statement. The menu names shift a little between versions, but the steps stay the same.",
   "walk": [
    "First, create and send an invoice, with terms and a due date.",
    "Next, receive a payment and apply it to the right open invoice.",
    "Finally, enter vendor bills, and reconcile monthly against the bank statement."
   ],
   "ask": "If you have access, let's create an invoice and reconcile an account live. Then a volunteer repeats the invoice steps from memory.",
   "scenario": "Harlow pays $7,500, but they have two open invoices of $5,000 and $2,500. Their payment note just says 'as agreed.' How do you apply the payment, and what do you check first?"
  }
 },
 "7::QuickBooks: Billable Time, Expenses & Invoicing": {
  "p1": {
   "why": "QuickBooks can make sure every billable hour and cost reaches the invoice, but only if it's recorded the right way.",
   "talk": "In QuickBooks Online, each client is a customer, and each matter is usually a sub-customer or a project. When we record time or a cost and tick 'Billable' for that customer, it waits. Then, when we create the next invoice for them, QuickBooks shows everything billable that's waiting, and we choose what to add. So the invoice is only as good as the entries behind it.",
   "walk": [
    "First, we set up each client as a customer and each matter under it.",
    "Next, we record time with the person, matter, service item and rate, hours, a description, and Billable ticked.",
    "Then we record client costs, like filing fees, as billable expenses to the matter.",
    "After that, we create the invoice and add the waiting time and costs, checking dates, descriptions and rates.",
    "Finally, we run the unbilled time and expenses report to catch anything left behind."
   ],
   "ask": "What happens to a client cost that nobody marks as billable?",
   "scenario": "Elias paid a $350 filing fee for Meridian on the firm card. The bookkeeper entered it as 'Court fees' but didn't choose a customer. What do you change so it reaches Meridian's invoice?"
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
   "ask": "How would you find every billable cost that didn't make it onto an invoice last quarter?",
   "scenario": "At month-end, the unbilled time report shows 6.2 hours for Harlow with no matter selected, and a $435 court reporter bill for Meridian that wasn't marked billable. What do you fix, and in what order, before invoices go out?"
  }
 },
 "7::QuickBooks Common Mistakes & Tips": {
  "p1": {
   "why": "The most common QuickBooks mistake is putting an expense in the wrong category, so when you're unsure, ask.",
   "talk": "A classic example: recording a cost the client should reimburse as a general office expense. That one mistake breaks both the client's invoice and the firm's own books.",
   "walk": [
    "First, confirm the right category before you save an expense.",
    "Next, if a reconciliation isn't exactly zero, look for a missing or duplicated transaction. Don't adjust something unrelated to force it.",
    "Then, check every invoice against the engagement terms. The software will happily bill the wrong rate.",
    "After that, remember that the online version saves automatically. A mistake needs a proper correction, not an undo.",
    "Finally, review recent entries now and then for repeated category mistakes."
   ],
   "ask": "What share of errors do you think come from miscategorizing?",
   "scenario": "Over three months, a new staff member coded all the courier costs as 'office supplies.' The accountant spots it at quarter-end. What needs fixing, and what do you change so it doesn't happen again?"
  },
  "p2": {
   "why": "Never force a reconciliation to balance by adjusting a line that has nothing to do with the difference.",
   "talk": "A reconciliation is only finished when the difference is exactly zero, and when it isn't, the cause is almost always a missing or duplicated transaction. The temptation is to tweak some unrelated line so it balances. Don't. That hides the real problem and creates a new one. We also check invoices against the contract before sending, and remember that in the online version, fixing a mistake means editing the entry or making a correcting journal entry.",
   "walk": [
    "First, a reconciliation is only done at exactly zero, and the fix is almost always a missing or duplicate transaction.",
    "Next, check invoices against the contract before sending.",
    "Finally, in the online version there's no save button, so corrections need an edit or journal entry."
   ],
   "ask": "Your reconciliation is off by $62.50, and a colleague suggests adjusting the office supplies line to make it balance. What do you say, and what do you look for instead?",
   "scenario": "You finish the bank reconciliation, and it's off by exactly $450. You notice a $450 deposit entered twice. What does that tell you about where to look first next time something is off by a round amount?"
  }
 },
 "7::QuickBooks: Bank Feeds, Rules & Month-End Close": {
  "p1": {
   "why": "Bank feeds save hours, but only if someone reviews them properly. Otherwise they fill the books with duplicates and guesses.",
   "talk": "Bank feeds pull transactions from the firm's bank and card accounts into QuickBooks automatically. Each one still needs a decision. If it's already in the books, like a bill we've already paid, we match it. If it's new, we add it with a category and payee, and a customer if it's billable. Month-end close is the routine that makes the numbers reliable: everything reviewed, every account reconciled, then the month locked.",
   "walk": [
    "First, review the feed at least weekly. Match when QuickBooks finds the existing entry; add only when nothing matches.",
    "Next, make rules for regular items like rent or subscriptions, and check what they did.",
    "Then, exclude only true duplicates, with a note.",
    "After that, at month-end: clear the feed, reconcile every account, clear uncategorized items and run the reports.",
    "Finally, once the accountant confirms, set the closing date with a password."
   ],
   "ask": "What happens if you click Add on a payment that's already in the books?",
   "scenario": "The feed shows a $89 charge from a software company you don't recognize, and QuickBooks suggests 'Software.' Do you accept it? What do you check first?"
  },
  "p2": {
   "why": "A few recording habits decide whether the month-end numbers can be trusted.",
   "talk": "Don't let things pile up in 'Uncategorized' or 'Ask my accountant'. Keep a list and clear it weekly. Moving money between the firm's own accounts, like paying the credit card from the operating account, is a transfer, not an expense. Two traps: adding a payment that was already recorded, which counts the expense twice, and categorizing trust money as income, when trust needs its own account and its own reconciliation.",
   "walk": [
    "First, clear uncategorized items weekly.",
    "Next, record transfers as transfers.",
    "Then, match before you add.",
    "Finally, keep trust money out of income."
   ],
   "ask": "Why is paying the credit card bill not an expense?",
   "scenario": "The feed shows a $1,200 payment to the firm's credit card company, and QuickBooks suggests categorizing it as 'Office expenses.' What is it really, how should it be recorded and what would go wrong if you accepted the suggestion?"
  }
 },
 "7::Credit Cards & Card Applications": {
  "p1": {
   "why": "Review a credit card statement before you pay it, not after.",
   "talk": "There are three related jobs here. Paying the cards, which needs a proper due-date calendar, because missed payments cost money and damage credit. Applying for cards, where we gather exactly what's asked for and follow the issuer's process precisely. And tax season, which is really about keeping receipts organised all year long, not hunting for them in April.",
   "walk": [
    "First, put card due dates on a real calendar.",
    "Next, check the statement for anything that shouldn't be there before paying.",
    "Then, for an application, gather exactly the documents requested, no more and no less.",
    "After that, file tax-relevant receipts as they come in, all year.",
    "Finally, test yourself: could you hand over every receipt from the last 90 days quickly?"
   ],
   "ask": "If the accountant asked for every receipt from the last 90 days, how fast could you deliver?",
   "scenario": "Elias's firm card payment is due tomorrow. You haven't reviewed the statement yet, and there's a $2,300 charge you don't recognize. Do you pay the full balance, part of it, or wait? What do you do today?"
  },
  "p2": {
   "why": "With financial applications, 'close enough' paperwork causes real delays.",
   "talk": "Card payments follow the same habit as every other recurring payment: they're on the calendar, and we review the statement before we pay it, not after. That's when we catch the unfamiliar charge or the hotel that billed twice. And with applications, 'close enough' paperwork causes real delays, so we send exactly what's requested, in exactly the form they asked for.",
   "walk": [
    "First, card payments follow the same discipline as any recurring payment: a calendar and a review before paying.",
    "Finally, applications need precision: exactly what's requested, in exactly the way the issuer asks."
   ],
   "ask": "Reviewing Elias's card statement, you spot a $129 charge from an unfamiliar merchant and a hotel charged twice for the same night. What do you do before paying the bill?",
   "scenario": "The bank asks for 'the last two years of business tax returns and a current balance sheet' for a new firm card. A colleague wants to send the last three years 'to be safe' and a profit-and-loss statement too. What do you send, and why?"
  }
 },
 "7::Credit Card Help: Disputes, Fraud & Lost Cards": {
  "p1": {
   "why": "When a card problem hits, the assistant is usually the first to know, and how fast you act decides how much it costs.",
   "talk": "We often manage cards day to day, so we're first to see a wrong charge, a fraud alert or a lost card. A billing error, or a charge we don't recognize, can be disputed with the card issuer. For US credit cards, billing-error disputes should go in writing within 60 days of the statement that first showed the charge. A lost or stolen card, or suspected fraud, gets reported straight away. The issuer usually blocks it and sends a new card, so every automatic payment on it has to move.",
   "walk": [
    "First, with an unknown charge, we check receipts, the merchant's full name and whether someone else used the card.",
    "Next, for a wrong charge, we go to the merchant first, then dispute with the issuer if it isn't fixed, with copies of receipts.",
    "Then, for fraud or a lost card, we report it using the number on the card or the app, never a number from a message.",
    "After that, when the new card arrives, we update every subscription and automatic payment.",
    "Finally, we log it all and check the next statement for the credit."
   ],
   "ask": "How many automatic payments do you think sit on your executive's main card?",
   "scenario": "Reviewing the firm card statement, you see a hotel charged $412 twice for one night, and a $29.99 charge from 'SQ *DIGITAL SVCS.' What do you do about each one?"
  },
  "p2": {
   "why": "Card problems get expensive when nobody knows which card pays for what, or when a deadline slips.",
   "talk": "Keep a card register: each card, who uses it, its limit, its billing date, the payments on it and who can authorize changes. Only the cardholder or an authorized person can dispute or cancel, and with Elias's personal card we act only with his permission. Two traps: disputing what's really a forgotten subscription renewal, so check your own records first, and missing the dispute window while waiting for the merchant. Put that deadline in the calendar the day you find the charge.",
   "walk": [
    "First, keep a card register.",
    "Next, act only with authority.",
    "Then, check your records before disputing.",
    "Finally, calendar the dispute deadline."
   ],
   "ask": "What would you put in a card register?",
   "scenario": "Elias texts from an airport: his firm card was declined and he's had a fraud alert. He needs to pay for a hotel tonight, and the same card pays for three software subscriptions. What do you do, in order?"
  }
 },
 "7::Reconciling a Credit Card Statement": {
  "p1": {
   "why": "A card statement nobody reconciles hides lost client costs, personal charges and fraud.",
   "talk": "Reconciling a card statement means proving every charge has a receipt, a business purpose and the right category, and that our records match the statement's balance. Many charges belong to a client matter, like deposition travel or a filing fee, and those have to be coded to the matter and marked billable so the firm gets the money back. Personal charges on a business card, even accidental ones, get flagged and repaid, never hidden in a business category.",
   "walk": [
    "First, we download the statement and gather that month's receipts.",
    "Next, line by line, we match each charge to its receipt, confirm the purpose and assign the category and matter.",
    "Then we chase any missing receipts that week, or use the firm's missing-receipt form.",
    "After that, we flag duplicates, unknown charges and personal charges to the right person.",
    "Finally, we reconcile the card in QuickBooks to the statement's ending balance and file everything together."
   ],
   "ask": "Which card charges do you think are most often billable to a client?",
   "scenario": "A $1,180 airline charge on the card has a receipt showing two passengers: Elias and his wife. The trip was for a Meridian deposition. How do you code it, and what do you flag?"
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
   "ask": "Where are your receipts right now, and could you find last March's hotel receipt in two minutes?",
   "scenario": "Elias's card statement has 34 charges. You have 29 receipts. Two charges are for the Chicago deposition, one looks personal (a $64 pharmacy charge), and two have no receipt at all. Walk through how you finish the reconciliation and who you contact."
  }
 },
 "7::Expense Report Auditing & Approval Workflows": {
  "p1": {
   "why": "Without a receipt, there's no independent proof an expense actually happened.",
   "talk": "Checking expense reports isn't about catching fraud after the fact. It's about making sure each expense is real, documented and correctly coded before it's paid. And no one should ever approve their own expenses.",
   "walk": [
    "First, check each line against its receipt: amount, date and business purpose.",
    "Next, hold anything missing a receipt or reason until it's explained.",
    "Finally, send every report through the proper approver. Never approve your own."
   ],
   "ask": "What three things should match between an expense line and its receipt?",
   "scenario": "An associate submits an expense report with a $210 dinner, the receipt attached, but no note on who attended or which matter it was for. Do you approve it, reject it or hold it, and what do you ask for?"
  },
  "p2": {
   "why": "Splitting one purchase into several smaller ones is a classic way to dodge approval limits.",
   "talk": "Approving expense reports in bulk without reading the lines defeats the whole point of approving them. One pattern worth knowing: a purchase split into several smaller ones, or a receipt for just under the approval limit, can be a way of dodging extra approval. It isn't always, but it's always worth a second look.",
   "walk": [
    "First, approving reports in bulk without reading the lines defeats the purpose.",
    "Finally, watch for split transactions designed to stay under a threshold."
   ],
   "ask": "An expense report has a receipt for exactly $499, one dollar under the $500 limit that needs extra approval. What do you do with that observation?",
   "scenario": "Reviewing a month of expense reports, you notice one staff member bought three laptop accessories from the same shop on the same day, at $180, $190 and $175. The limit without extra approval is $200. What do you do?"
  }
 },
 "7::Vendor Payment Terms & Cash Flow Timing": {
  "p1": {
   "why": "Pay vendors according to the terms you agreed, not on reflex.",
   "talk": "Terms like 'net 30' or 'due on receipt' shape the firm's cash flow. Paying earlier than needed ties up money with no benefit, unless there's an early-payment discount. Paying late brings fees, strained relationships and sometimes cut-off service.",
   "walk": [
    "First, confirm each vendor's actual payment terms. Don't assume a default.",
    "Next, pay in line with those terms, unless there's a specific reason not to.",
    "Finally, line up upcoming payments against expected money coming in, so they don't collide."
   ],
   "ask": "When is it worth paying a bill early?",
   "scenario": "A new document-scanning vendor sends its first invoice with 'due on receipt' printed on it. The signed agreement says net 45. Which terms do you follow, and what do you do about the difference?"
  },
  "p2": {
   "why": "Paying early or late should always be a decision, never a habit.",
   "talk": "Paying every bill the moment it arrives feels responsible, but if the terms give us thirty days, paying on day two can squeeze the firm's cash for no reason. The opposite is true too: paying late can cost fees and goodwill. The point is that paying early or late should always be a choice someone makes on purpose, so we flag anything outside the normal terms.",
   "walk": [
    "First, paying everything the moment it arrives can squeeze cash flow for no reason.",
    "Finally, flag any payment outside its normal terms, so someone decides it on purpose."
   ],
   "ask": "A net-30 invoice arrives, and the person who handles payments always pays within 48 hours 'to be safe.' Is that the right call, and what would you say?",
   "scenario": "Three large vendor bills are due on the 1st, and the firm's biggest client payment is expected on the 15th. The office manager wants to pay all three immediately. What do you flag to Elias?"
  }
 },
 "7::Payroll Basics for EA/PA Support Roles": {
  "p1": {
   "why": "Payroll deadlines never move, so your part of it can't be late.",
   "talk": "You probably won't run payroll yourself, but you'll touch its edges: onboarding paperwork, timesheets and reimbursements that go through payroll. A mistake or delay on your side can mean someone doesn't get paid. And payroll information, like salaries and bank details, is among the most sensitive data you'll handle.",
   "walk": [
    "First, make sure timesheets and hours are accurate and in before the payroll cut-off.",
    "Next, handle payroll paperwork, like new-hire forms and bank changes, as confidential documents.",
    "Finally, put payroll deadlines on the compliance calendar with the other hard deadlines."
   ],
   "ask": "Which payroll-related tasks do you touch in your role?",
   "scenario": "An employee emails you a new bank account number for their pay and asks you to 'pass it on to payroll.' What's the right way to handle this, and what should you never do with that email?"
  },
  "p2": {
   "why": "Your late timesheet can turn into someone's missed paycheck.",
   "talk": "Payroll might be someone else's system, but our part in it matters. A late timesheet or incomplete onboarding paperwork can turn into a colleague's missed paycheck. And pay details are some of the most sensitive information in any firm, so we never share them beyond the people who need them for the task.",
   "walk": [
    "First, don't treat payroll tasks as low priority just because it's someone else's system.",
    "Finally, never share pay or compensation details beyond the people who need them for the task."
   ],
   "ask": "A new hire's onboarding paperwork is still incomplete two days before the payroll cut-off. What do you do so they don't get missed?",
   "scenario": "A colleague asks you what the new associate earns, 'just roughly.' You processed the offer letter. How do you answer?"
  }
 },
 "7::Tax Season Support & Working with Accountants": {
  "p1": {
   "why": "Tax season is easy when you've filed everything properly all year long.",
   "talk": "The real value you bring at tax time isn't a heroic effort in March. It's the habit of organizing receipts, invoices and records every week, so when the accountant asks for something, you simply find it instead of rebuilding a year from memory.",
   "walk": [
    "First, file and label receipts, invoices and records as they arrive, all year.",
    "Next, when the accountant asks for something, it should be a quick search, not a reconstruction.",
    "Then, become the person who can reliably answer 'do you have this?'",
    "After that, connect it to reconciliation: good records make reconciling fast.",
    "Finally, build a small daily or weekly filing habit instead of one giant push a year."
   ],
   "ask": "The accountant emails asking for every charitable donation receipt and home-office expense from last year, by Friday. If you've filed all year, what does that take? If you haven't?",
   "scenario": "The accountant asks for all of last year's business travel receipts by Wednesday. Half are in a shared folder, labeled by date and trip, and half are photos in Elias's phone. What do you do now, and what habit do you start for this year?"
  }
 },
 "7::Quarterly Tax Schedules": {
  "p1": {
   "why": "Quarterly estimated taxes are four separate deadlines, each with its own lead time.",
   "talk": "Businesses that pay taxes in installments have a fixed calendar, and missing one date brings penalties, separate from the big annual deadline most people think about. It's the same reminder discipline we use for court deadlines, applied to tax.",
   "walk": [
    "First, at the start of the year, put all four dates on the financial calendar with early reminders.",
    "Next, well before each date, confirm with the accountant that the amount and paperwork are ready.",
    "Finally, keep a record of each payment confirmation."
   ],
   "ask": "Who confirms the payment amount, and when?",
   "scenario": "It's January, and you're setting up the year's calendar. Put the four estimated tax payment dates in, and decide how early each reminder goes out and who it goes to."
  },
  "p2": {
   "why": "Ask the accountant early, not the week the payment is due.",
   "talk": "Quarterly estimated taxes aren't one yearly job; they're four separate deadlines, each with real penalties if they're missed. The key is starting early. If we wait until the week the payment is due to ask the accountant how much to pay, a simple question turns into a last-minute scramble.",
   "walk": [
    "First, treat these as four separate deadlines, not one yearly job.",
    "Finally, coordinate early, so a question about the amount doesn't become a last-minute scramble."
   ],
   "ask": "It's ten days before a quarterly estimated tax deadline, and you haven't heard from the accountant about the amount. What do you do?",
   "scenario": "The accountant sends the quarterly payment amount the day before the deadline. It's much higher than last quarter, and Elias is unreachable. What do you do, and what do you change so this doesn't happen next quarter?"
  }
 },
 "7::W-9/1099 Audits & Filing Deadlines": {
  "p1": {
   "why": "Get the vendor's tax form before you pay them the first time, not at tax time.",
   "talk": "When a business pays contractors above a certain amount, it has to file year-end tax forms for them. Those depend on having the contractor's details, collected on a form called a W-9. Chasing a vendor for that information in January, with the deadline looming, is stressful and avoidable.",
   "walk": [
    "First, collect a W-9 from every new vendor or contractor before the first payment.",
    "Next, check the vendor list against the W-9 files now and then, especially for vendors added mid-year.",
    "Finally, put the year-end filing deadline on the calendar with plenty of lead time."
   ],
   "ask": "Which vendors do you think are easiest to miss?",
   "scenario": "An expert witness wants to be paid today for the Meridian report, and he hasn't sent a W-9. Elias says, 'Just pay him; we'll get the form later.' What do you suggest, and why?"
  },
  "p2": {
   "why": "These forms hold sensitive tax information, so store them securely.",
   "talk": "At the end of the year, the firm has to report what it paid certain vendors, and for that it needs their tax form, the W-9. The mistake is waiting until the deadline to discover one is missing. We collect them when the vendor is first set up. And because those forms hold sensitive tax information, we store them as securely as any other confidential document.",
   "walk": [
    "First, don't wait until the deadline to look for missing forms.",
    "Finally, protect W-9s like any other confidential document."
   ],
   "ask": "Preparing for the year-end filing, you find a vendor paid above the threshold never sent a W-9. What do you do now, with the deadline approaching?",
   "scenario": "In December, you compare the vendor payment report with the W-9 folder and find four contractors paid over the threshold with no form on file. Two of them are hard to reach. What's your plan, week by week, to January?"
  }
 },
 "7::Financial Record Retention Requirements": {
  "p1": {
   "why": "Keeping records isn't enough; you have to be able to find them when someone asks.",
   "talk": "Financial records have minimum periods they must be kept, and those vary by type and by state. Trust account records often have longer requirements. And destroying something too early can cause real trouble in an audit or dispute.",
   "walk": [
    "First, know the retention period for each type of record, rather than one rule for everything.",
    "Next, store records somewhere durable and searchable.",
    "Finally, build the retention date into the filing, so reviews happen on schedule."
   ],
   "ask": "Do you think trust account records have a different retention period?",
   "scenario": "The auditor asks for the bank statements and invoices behind a 2021 transaction. You know the records exist, somewhere on a shared drive. How long should it take you to find them, and what would make that faster?"
  },
  "p2": {
   "why": "If you're not sure whether a record can be destroyed, keep it.",
   "talk": "Moving everything online doesn't take care of record-keeping by itself. Digital files still get lost, overwritten or deleted. There are rules about how long financial records must be kept, and they vary. So when we're unsure whether something can be destroyed, we keep it. Keeping a file too long costs almost nothing; destroying one we later need can cost a great deal.",
   "walk": [
    "First, digital storage doesn't manage retention by itself. Files still get lost or deleted.",
    "Finally, keeping something too long costs little; destroying something you later need can cost a lot."
   ],
   "ask": "During a clean-up you find trust account records from several years ago. Before deleting anything to save space, what do you need to confirm first?",
   "scenario": "A partner wants to clear out the old storage room and says, 'Anything more than five years old can go.' The boxes include trust records and closed litigation files. What do you check before a single box leaves?"
  }
 },
 "7::Fraud Red Flags in Financial Documents": {
  "p1": {
   "why": "Most fraud doesn't look dramatic; it looks like a small, believable detail that's slightly off.",
   "talk": "One odd detail is usually just a mistake. A pattern of odd details is what signals real trouble. And because you see the most detail day to day, you're often the first line of defense.",
   "walk": [
    "First, watch for the classic signs: an unfamiliar vendor, suspiciously round amounts, duplicate invoice numbers or sudden new bank details.",
    "Next, confirm any change in payment details through a separate channel you already trust, never the contact details in the request itself.",
    "Finally, raise a real concern promptly, rather than trying to solve it alone."
   ],
   "ask": "Why isn't a request from the vendor's usual email address enough to trust it?",
   "scenario": "An invoice arrives from 'Meridan Legal Services' for $4,000, with a new bank account and a note saying it's urgent. The usual vendor is Meridian Court Reporting. What stands out, and how do you check it?"
  },
  "p2": {
   "why": "A false alarm is cheap; a missed fraud isn't.",
   "talk": "Fraud rarely looks like one big red flag. It usually shows up as a few small odd details, and if each person explains away their own odd detail privately, nobody sees the pattern. So we write anomalies down and raise them. And if one concern turns out to be nothing, we don't let that stop us raising the next. A false alarm is cheap; a missed fraud isn't.",
   "walk": [
    "First, don't explain away each odd detail privately. Patterns only appear when anomalies get recorded.",
    "Finally, never let one false alarm stop you raising the next concern."
   ],
   "ask": "A long-standing vendor emails asking to update their bank details for future payments. What's your checking process, and why doesn't their familiar email address settle it?",
   "scenario": "Last month, you flagged a suspicious invoice that turned out to be genuine, and you felt embarrassed. This month, an email from 'Elias' asks you to buy $1,500 in gift cards for a client, quickly and quietly. What do you do?"
  }
 }
});
