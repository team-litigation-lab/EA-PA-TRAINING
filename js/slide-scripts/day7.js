/* Day 7 — hand-written spoken scripts, one per slide (see slideScript() in index.html).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
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
   "ask": "Who here has done any bookkeeping or invoicing before?"
  },
  "p2": {
   "why": "A transposed number at your step becomes someone else's problem further down the line.",
   "talk": "Assistants usually touch the firm's money in three places. Paying bills: collecting invoices, matching them against what was approved and sending them for payment. Getting paid: preparing client invoices, keeping track of what's still owed and sending polite reminders. And expenses: gathering receipts, coding each one to the right matter and flagging anything outside the rules. We're rarely the last step, which is exactly why a small slip at our step travels so far.",
   "walk": [
    "First, paying bills: collecting invoices, matching them to approvals and sending them for payment.",
    "Next, getting paid: preparing client invoices, tracking what's outstanding and sending polite reminders.",
    "Finally, expenses: gathering receipts, coding them to the right matter and flagging anything outside policy."
   ],
   "ask": "A vendor invoice for $1,850 arrives, but the approved purchase order says $1,580. What do you do before it goes anywhere near payment?"
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
   "ask": "Have you ever had to follow a process that wasn't written down anywhere?"
  },
  "p2": {
   "why": "A simple test for any procedure: could a temp follow it on their first day?",
   "talk": "A procedure needs a few parts to be genuinely useful. Its purpose and scope: why it exists, who and what it covers, and just as importantly, what it doesn't. The steps themselves, numbered, so anyone can follow them, plus the checks that prove it was done properly. And escalation: who to contact when something goes wrong, and by when. Without that, each person does it their own way, and that's exactly what audits find.",
   "walk": [
    "First, purpose and scope: why it exists, and who and what it covers, including what it doesn't.",
    "Next, procedure and controls: numbered steps anyone can follow, plus checks and records that prove it was done properly.",
    "Finally, escalation: who to contact when something goes wrong, and by when."
   ],
   "ask": "Let's draft the five parts, one line each, for a procedure on processing a client's expense reimbursement."
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
   "ask": "Of billing, tax and month-end, which would you be most likely to let slip?"
  },
  "p2": {
   "why": "A reminder a week or more ahead gives you time to fix a problem, not just notice it.",
   "talk": "Money deadlines come round on three rhythms. Every month, there's client invoicing, the month-end close and reconciling the bank and trust accounts. Every quarter, there are estimated tax payments and payroll filings. And every year, there are the tax forms for staff and contractors at the end of January, the year-end close and licence renewals. The exact dates change, so we confirm them with the firm's accountant each year.",
   "walk": [
    "First, monthly: client invoicing, month-end close and bank and trust reconciliations.",
    "Next, quarterly: estimated tax payments and quarterly payroll filings.",
    "Finally, yearly: contractor and employee tax forms at the end of January, year-end close and license renewals."
   ],
   "ask": "Let's build the next 90 days of the firm's financial calendar: which monthly, quarterly and yearly items fall in that window, and when does each reminder go off?"
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
   "ask": "Why do you think the retainer alert is set at 25 percent instead of zero?"
  },
  "p2": {
   "why": "An alert at 25 percent gives you time to act before a client's account runs dry.",
   "talk": "The other two numbers work the same way. Reconciliations, where we check the firm's records against the bank, should be 98 to 100 percent accurate. And for clients who pay money upfront, called a retainer, we set an alert when it drops to a quarter of the original amount. Why a quarter and not zero? Because that gives us time to ask for more before the account runs dry in the middle of a case.",
   "walk": [
    "First, reconciliation accuracy of 98 to 100 percent.",
    "Finally, the retainer alert at 25 percent, which buys you runway."
   ],
   "ask": "A client's $10,000 retainer is down to $2,300, and they have a hearing next week. What should have already happened, and what do you do now?"
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
   "ask": "Why does separating duties matter, even in a small office?"
  },
  "p2": {
   "why": "Know whether your firm records money when it moves, or when it's earned.",
   "talk": "Three bookkeeping ideas are worth knowing. Double-entry means every transaction touches at least two accounts, which is what makes mistakes show up. Cash versus accrual is about timing: cash records money when it actually moves, accrual records it when it's earned or owed. And the chart of accounts is simply the list of categories every transaction gets filed under. Coding things consistently is what makes the reports trustworthy.",
   "walk": [
    "First, double-entry: every transaction touches at least two accounts, which is what makes errors show up.",
    "Next, cash versus accrual: cash records money when it moves; accrual records it when it's earned or owed.",
    "Finally, the chart of accounts: the list of categories every transaction is coded to. Consistent coding makes reports reliable."
   ],
   "ask": "You're asked to both enter and approve a $2,400 vendor payment because the usual approver is out. What do you do, and what do you suggest for next time?"
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
   "ask": "Why not just rebuild every report when something doesn't match?"
  },
  "p2": {
   "why": "When the numbers don't match, start with the difference and find what explains it.",
   "talk": "Let's walk through an example. A client starts the month owing 4,000. We add new invoices of 6,500, take off payments of 5,000 and a 250 credit, which leaves 5,250. But the client's records say 5,000. So we look for 250, and it turns out they never recorded the credit. Once we've found it, we write the reconciliation up, so next month starts from a number both sides agree on.",
   "walk": [
    "First, opening $4,000, plus invoices $6,500, minus payments $5,000, minus a $250 credit note, gives $5,250.",
    "Next, if the client's records say $5,000, look for the $250. Here, they never recorded the credit note.",
    "Finally, write up the reconciliation, so next month starts from an agreed number."
   ],
   "ask": "Opening balance $3,200, invoices $4,800, payments $6,000 and a $150 late fee. What's the closing balance? The client says they owe $1,850. Where do you look first?"
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
   "ask": "If a reconciliation came up $340 short, what would you check first?"
  },
  "p2": {
   "why": "A payment put on the wrong client's account once ended up as a real legal dispute.",
   "talk": "This isn't just tidiness. A payment put on the wrong client's account once turned into a genuine legal dispute. The checklist that prevents it is short: every invoice listed, every payment recorded, nothing left unmatched and every difference explained. And to stop the same bill being paid twice, we combine system checks, a human check and approval limits.",
   "walk": [
    "First, every invoice is listed, every payment is recorded, nothing is left unmatched and every difference has an explanation.",
    "Finally, to prevent duplicate payments, use system checks, manual checks and approval limits."
   ],
   "ask": "Your reconciliation is $340 short. Walk through the checklist in order, and name the three most likely causes."
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
   "ask": "What counts as a documented reason to move money out of trust?"
  },
  "p2": {
   "why": "Trust transactions are meant to feel slower and more careful; that friction is on purpose.",
   "talk": "Trust money belongs to the client, not the firm, and the rules around it are strict. A client's trust balance must never go below zero, not even for a moment, and not even if it's fixed the same day. That's why handling trust money should feel slower and more careful than paying an ordinary bill. That friction is deliberate; it's what protects the client and the firm's licence.",
   "walk": [
    "First, a client's trust balance must never go negative, not even for a moment, not even if it's fixed the same day.",
    "Finally, any trust transaction should feel more deliberate than a normal payment."
   ],
   "ask": "One client's trust balance is $200 lower than the ledger says it should be. What's your first move, and who needs to know before you do anything else?"
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
   "ask": "Why would you document a reconciliation that came out perfectly?"
  },
  "p2": {
   "why": "Even a one-dollar difference in a trust account gets escalated.",
   "talk": "Here's the catch with trust accounts: the overall account can balance perfectly while one individual client's money is short, because another client's money is covering the gap. So we check every client's balance, not just the total. And any difference, even a single dollar, gets escalated straight away. With trust money, there's no such thing as too small to mention.",
   "walk": [
    "First, the overall account can balance while one client's money is short, so check every client, not just the total.",
    "Finally, any difference, whatever its size, is escalated immediately."
   ],
   "ask": "This month the bank and the trust ledger match, but one client's balance doesn't match what was deposited for them. Walk us through how you'd trace it."
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
   "ask": "What three things must every invoice state?"
  },
  "p2": {
   "why": "Show the discount as its own line, so the client can see it.",
   "talk": "A clean invoice has three parts. At the top: the firm's details, the client, the matter number, the invoice number and the date. In the middle: each piece of work with its date, description, hours and rate, plus any expenses, and any discount shown on its own line so the client can see it. At the bottom: the total, when it's due, the payment terms, how to pay and any late-fee terms.",
   "walk": [
    "First, the header: firm details, client, matter number, invoice number and date.",
    "Next, the body: each entry with date, description, hours and rate, plus expenses, with any discount on its own line.",
    "Finally, the footer: total due, due date, terms, payment methods and any late-fee terms."
   ],
   "ask": "Let's do one live: 12.5 hours at $350 an hour, $240 in filing fees and a 10 percent courtesy discount on the fees only. Call out each step. What's the total, and what else must the invoice say?"
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
   "ask": "What would you do at 80 percent of an hour cap?"
  },
  "p2": {
   "why": "Corporate clients often require specific billing codes, and invoices without them get rejected.",
   "talk": "Before we bill, we check what the client's engagement agreement says. How are they billed: by the hour, a flat fee, a share of the result or from a retainer? Is there a cap or budget, and how much notice do we owe before going over it? And what are the payment terms and any required format? Big corporate clients often insist on specific billing codes and will simply reject an invoice without them.",
   "walk": [
    "First, the billing arrangement: hourly, flat fee, contingency or retainer.",
    "Next, caps and budgets, and the notice needed before going over.",
    "Finally, payment and late-fee terms, plus any required format or codes."
   ],
   "ask": "The Harlow matter has a 40-hour cap, with notice required at 80 percent. Time entries show 34.5 hours so far. What do you do today, and who do you tell?"
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
   "ask": "How accurate do you think time reconstructed at the end of the week really is?"
  },
  "p2": {
   "why": "Accurate billing is impossible without accurate time.",
   "talk": "Time we log from memory at the end of the day is noticeably less accurate than time logged as we go, and that inaccuracy costs someone: either the firm undercharges, or the client gets billed for time that's hard to justify. Good time records are also what make careful, contract-aware billing possible in the first place.",
   "walk": [
    "First, time logged from memory is measurably less accurate, and that costs the firm or the client.",
    "Finally, good time tracking is what makes contract-aware billing possible."
   ],
   "ask": "It's the end of a busy day and you haven't logged time for several tasks. How do you rebuild it as accurately as possible, and what will you do differently tomorrow?"
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
   "ask": "Why acknowledge a dispute before it's even resolved?"
  },
  "p2": {
   "why": "If it turns out to be our mistake, fix it plainly and quickly.",
   "talk": "When a client questions a bill, the instinct is to defend it. But getting defensive before we've checked the records can turn a simple misunderstanding into a real argument. So we check first. If it was our mistake, we fix it plainly and quickly. And we remember what's actually at stake: the relationship is worth far more than any single invoice.",
   "walk": [
    "First, getting defensive before checking the records can turn a misunderstanding into a real problem.",
    "Finally, protecting the relationship matters more than protecting the original invoice."
   ],
   "ask": "A client emails disputing a charge, saying it doesn't match what they remember agreeing to. What's your first move before you reply?"
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
   "ask": "Which of these have you done before?"
  },
  "p2": {
   "why": "You don't need the whole platform, just these four workflows done well.",
   "talk": "Nobody needs to master all of QuickBooks. Most assistants use four workflows, and doing those well covers almost everything. Creating and sending an invoice with the right terms and due date. Receiving a payment and applying it to the correct open invoice. Entering vendor bills. And reconciling each month against the bank statement. The menu names shift a little between versions, but the steps stay the same.",
   "walk": [
    "First, create and send an invoice, with terms and a due date.",
    "Next, receive a payment and apply it to the right open invoice.",
    "Finally, enter vendor bills, and reconcile monthly against the bank statement."
   ],
   "ask": "If you have access, let's create an invoice and reconcile an account live. Then a volunteer repeats the invoice steps from memory."
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
   "ask": "What share of errors do you think come from miscategorizing?"
  },
  "p2": {
   "why": "Never force a reconciliation to balance by adjusting a line that has nothing to do with the difference.",
   "talk": "A reconciliation is only finished when the difference is exactly zero, and when it isn't, the cause is almost always a missing or duplicated transaction. The temptation is to tweak some unrelated line so it balances. Don't. That hides the real problem and creates a new one. We also check invoices against the contract before sending, and remember that in the online version, fixing a mistake means editing the entry or making a correcting journal entry.",
   "walk": [
    "First, a reconciliation is only done at exactly zero, and the fix is almost always a missing or duplicate transaction.",
    "Next, check invoices against the contract before sending.",
    "Finally, in the online version there's no save button, so corrections need an edit or journal entry."
   ],
   "ask": "Your reconciliation is off by $62.50, and a colleague suggests adjusting the office supplies line to make it balance. What do you say, and what do you look for instead?"
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
   "ask": "If the accountant asked for every receipt from the last 90 days, how fast could you deliver?"
  },
  "p2": {
   "why": "With financial applications, 'close enough' paperwork causes real delays.",
   "talk": "Card payments follow the same habit as every other recurring payment: they're on the calendar, and we review the statement before we pay it, not after. That's when we catch the unfamiliar charge or the hotel that billed twice. And with applications, 'close enough' paperwork causes real delays, so we send exactly what's requested, in exactly the form they asked for.",
   "walk": [
    "First, card payments follow the same discipline as any recurring payment: a calendar and a review before paying.",
    "Finally, applications need precision: exactly what's requested, in exactly the way the issuer asks."
   ],
   "ask": "Reviewing Elias's card statement, you spot a $129 charge from an unfamiliar merchant and a hotel charged twice for the same night. What do you do before paying the bill?"
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
   "ask": "What three things should match between an expense line and its receipt?"
  },
  "p2": {
   "why": "Splitting one purchase into several smaller ones is a classic way to dodge approval limits.",
   "talk": "Approving expense reports in bulk without reading the lines defeats the whole point of approving them. One pattern worth knowing: a purchase split into several smaller ones, or a receipt for just under the approval limit, can be a way of dodging extra approval. It isn't always, but it's always worth a second look.",
   "walk": [
    "First, approving reports in bulk without reading the lines defeats the purpose.",
    "Finally, watch for split transactions designed to stay under a threshold."
   ],
   "ask": "An expense report has a receipt for exactly $499, one dollar under the $500 limit that needs extra approval. What do you do with that observation?"
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
   "ask": "When is it worth paying a bill early?"
  },
  "p2": {
   "why": "Paying early or late should always be a decision, never a habit.",
   "talk": "Paying every bill the moment it arrives feels responsible, but if the terms give us thirty days, paying on day two can squeeze the firm's cash for no reason. The opposite is true too: paying late can cost fees and goodwill. The point is that paying early or late should always be a choice someone makes on purpose, so we flag anything outside the normal terms.",
   "walk": [
    "First, paying everything the moment it arrives can squeeze cash flow for no reason.",
    "Finally, flag any payment outside its normal terms, so someone decides it on purpose."
   ],
   "ask": "A net-30 invoice arrives, and the person who handles payments always pays within 48 hours 'to be safe.' Is that the right call, and what would you say?"
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
   "ask": "Which payroll-related tasks do you touch in your role?"
  },
  "p2": {
   "why": "Your late timesheet can turn into someone's missed paycheck.",
   "talk": "Payroll might be someone else's system, but our part in it matters. A late timesheet or incomplete onboarding paperwork can turn into a colleague's missed paycheck. And pay details are some of the most sensitive information in any firm, so we never share them beyond the people who need them for the task.",
   "walk": [
    "First, don't treat payroll tasks as low priority just because it's someone else's system.",
    "Finally, never share pay or compensation details beyond the people who need them for the task."
   ],
   "ask": "A new hire's onboarding paperwork is still incomplete two days before the payroll cut-off. What do you do so they don't get missed?"
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
   "ask": "The accountant emails asking for every charitable donation receipt and home-office expense from last year, by Friday. If you've filed all year, what does that take? If you haven't?"
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
   "ask": "Who confirms the payment amount, and when?"
  },
  "p2": {
   "why": "Ask the accountant early, not the week the payment is due.",
   "talk": "Quarterly estimated taxes aren't one yearly job; they're four separate deadlines, each with real penalties if they're missed. The key is starting early. If we wait until the week the payment is due to ask the accountant how much to pay, a simple question turns into a last-minute scramble.",
   "walk": [
    "First, treat these as four separate deadlines, not one yearly job.",
    "Finally, coordinate early, so a question about the amount doesn't become a last-minute scramble."
   ],
   "ask": "It's ten days before a quarterly estimated tax deadline, and you haven't heard from the accountant about the amount. What do you do?"
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
   "ask": "Which vendors do you think are easiest to miss?"
  },
  "p2": {
   "why": "These forms hold sensitive tax information, so store them securely.",
   "talk": "At the end of the year, the firm has to report what it paid certain vendors, and for that it needs their tax form, the W-9. The mistake is waiting until the deadline to discover one is missing. We collect them when the vendor is first set up. And because those forms hold sensitive tax information, we store them as securely as any other confidential document.",
   "walk": [
    "First, don't wait until the deadline to look for missing forms.",
    "Finally, protect W-9s like any other confidential document."
   ],
   "ask": "Preparing for the year-end filing, you find a vendor paid above the threshold never sent a W-9. What do you do now, with the deadline approaching?"
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
   "ask": "Do you think trust account records have a different retention period?"
  },
  "p2": {
   "why": "If you're not sure whether a record can be destroyed, keep it.",
   "talk": "Moving everything online doesn't take care of record-keeping by itself. Digital files still get lost, overwritten or deleted. There are rules about how long financial records must be kept, and they vary. So when we're unsure whether something can be destroyed, we keep it. Keeping a file too long costs almost nothing; destroying one we later need can cost a great deal.",
   "walk": [
    "First, digital storage doesn't manage retention by itself. Files still get lost or deleted.",
    "Finally, keeping something too long costs little; destroying something you later need can cost a lot."
   ],
   "ask": "During a clean-up you find trust account records from several years ago. Before deleting anything to save space, what do you need to confirm first?"
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
   "ask": "Why isn't a request from the vendor's usual email address enough to trust it?"
  },
  "p2": {
   "why": "A false alarm is cheap; a missed fraud isn't.",
   "talk": "Fraud rarely looks like one big red flag. It usually shows up as a few small odd details, and if each person explains away their own odd detail privately, nobody sees the pattern. So we write anomalies down and raise them. And if one concern turns out to be nothing, we don't let that stop us raising the next. A false alarm is cheap; a missed fraud isn't.",
   "walk": [
    "First, don't explain away each odd detail privately. Patterns only appear when anomalies get recorded.",
    "Finally, never let one false alarm stop you raising the next concern."
   ],
   "ask": "A long-standing vendor emails asking to update their bank details for future payments. What's your checking process, and why doesn't their familiar email address settle it?"
  }
 }
});
