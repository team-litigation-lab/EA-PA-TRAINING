/* ============================================================
   DAY 7 — Finance: Invoicing, Billing & QuickBooks
   Everything a trainee reads on this day:
   - DAY7: the topics (lessons), Quick Checks, Knowledge Check questions (quiz)
     and the discussion question. A Quick Check's afterIndex is the position of
     the topic it follows (0 = first topic).
   - DAY7_EXTRA_LEARNING: the extra-learning box on some topics, keyed
     "7::<topic title>".
   The trainer's notes and slide scripts for this day are in notes.js and
   scripts.js in this folder. Topic titles must stay unique within the day:
   notes, scripts and saved progress are matched by title.
   Loaded before the portal's main script, which builds DAYS from every day.
   ============================================================ */
const DAY7 = {
  "id": 7,
  "title": "Finance: Invoicing, Billing & QuickBooks",
  "theme": "Finance Foundations · Reconciliation & Trust Accounts · Invoice Management · Billable Hours & QuickBooks · Credit Cards, Expenses & Payroll · Tax, Records & Fraud",
  "objective": "Support financial operations accurately: reconcile accounts, manage invoices from pre-bill to payment, track billable and non-billable time, work confidently in QuickBooks, manage the firm's cards, and stay audit-ready.",
  "lessons": [
    {
      "h": "The EA/PA's Role in Finance",
      "section": "Finance Foundations",
      "b": [
        "Financial tasks now regularly include invoices, expenses, and reimbursements — a genuine link in the firm's financial accuracy.",
        "This is a real link in the chain, not filing that happens to touch numbers."
      ],
      "howTo": [
        "Treat every invoice, expense, or reimbursement you touch as a real link in the firm's financial accuracy, not paperwork that happens to involve numbers.",
        "Double-check figures before passing anything along — a transposed number here has downstream consequences beyond the immediate task.",
        "Keep financial tasks moving on the same discipline as other recurring work — logged, dated, and tracked, not handled ad hoc as they arrive.",
        "When something in a financial document looks off, flag it rather than assume it will get caught later in the process.",
        "Understand where your specific task fits in the larger financial chain, so you know what depends on you getting it right."
      ],
      "trainerCue": "Ask how many people in the room have ANY exposure to bookkeeping or invoicing — calibrate your pace based on the answer, since this varies widely."
    },
    {
      "h": "What an SOP Actually Needs",
      "section": "Finance Foundations",
      "b": [
        "Five elements: Purpose, Scope, Procedure, Controls, Escalation.",
        "Without SOPs, execution becomes inconsistent — which is exactly what audits catch."
      ],
      "layout": "PROCESS",
      "processSteps": [
        {
          "label": "Purpose",
          "desc": "Why the process exists in the first place"
        },
        {
          "label": "Scope",
          "desc": "Who exactly it applies to"
        },
        {
          "label": "Procedure",
          "desc": "The actual step-by-step actions"
        },
        {
          "label": "Controls",
          "desc": "Verification measures built into the process"
        },
        {
          "label": "Escalation",
          "desc": "When and how to report issues"
        }
      ],
      "trainerCue": "This is a good moment to ask: 'Has anyone ever had to follow a process that existed nowhere in writing?' That's the exact gap an SOP closes."
    },
    {
      "h": "The Financial Calendar",
      "section": "Finance Foundations",
      "b": [
        "Track billing cycles, tax deadlines, and monthly closes continuously.",
        "Automated reminders 7–10 days before each deadline give real lead time to fix issues."
      ],
      "howTo": [
        "Track billing cycles, tax deadlines, and monthly closes on one continuous calendar, not three separate mental lists.",
        "Set automated reminders 7-10 days before each deadline, giving real lead time to catch and fix an issue before it becomes late.",
        "Review the calendar weekly for anything approaching, rather than discovering a deadline only on the day it's due.",
        "If a category (billing, tax, or closes) is consistently the one that slips, build extra buffer specifically around that category rather than treating all three identically.",
        "Confirm each deadline's actual requirement hasn't changed cycle to cycle — a due date or filing requirement that shifted silently is a real, avoidable risk."
      ],
      "trainerCue": "Ask the room which of the three financial-calendar categories (billing, tax, closes) they'd be most likely to let slip — most people are honest about this if asked directly."
    },
    {
      "h": "Financial KPIs for EAs/PAs",
      "section": "Finance Foundations",
      "b": [
        "Invoice Turnaround Time — target 24–72 hours from service to invoice sent.",
        "Reconciliation Accuracy — target 98–100%.",
        "Flag client retainers dropping below 25% to give real runway before an account runs dry."
      ],
      "callout": {
        "type": "stat",
        "label": "Set the alert early",
        "text": "A common best practice is to set an alert when a client retainer drops below 25% — it gives enough runway to act before the account runs dry."
      },
      "howTo": [
        "Track Invoice Turnaround Time against the 24-72 hour target from service completion to invoice sent — a slower pattern here is a real, fixable leak.",
        "Monitor Reconciliation Accuracy against the 98-100% target, treating anything below that as worth investigating, not just noting.",
        "Set an alert when a client retainer drops below 25%, giving real runway to act before the account actually runs dry.",
        "Review these KPIs on a fixed cadence, not just when something already looks wrong — the value is in catching drift early.",
        "If a KPI consistently misses its target, treat that as a signal to examine the underlying process, not just push harder on the same approach."
      ],
      "trainerCue": "Push on the DSO and retainer-threshold metrics specifically — these are the two most likely to be genuinely new information for the room."
    },
    {
      "h": "Bookkeeping Basics & Compliance",
      "section": "Finance Foundations",
      "b": [
        "Classify every transaction as income, expense, or receivable.",
        "Maintain audit trails and segregate duties — never approve your own transactions."
      ],
      "howTo": [
        "Classify every transaction as income, expense, or receivable at the time it's recorded, not in a later cleanup pass.",
        "Maintain a clear audit trail for every entry — who recorded it, when, and based on what source document.",
        "Segregate duties deliberately — never approve your own transactions, even when it would be faster to just handle both steps yourself.",
        "Reconcile the books on a regular cadence, catching discrepancies while they're still easy to trace back to their source.",
        "Flag anything that looks like a compliance gap (an unapproved transaction, a missing audit trail) immediately rather than letting it become normalized."
      ],
      "trainerCue": "Close with a direct question: 'Have you ever seen someone approve their own transaction?' Most won't answer directly, and that's fine — the discomfort is the point."
    },
    {
      "h": "Reading Basic Financial Statements",
      "section": "Finance Foundations",
      "fourPart": {
        "corePrinciples": [
          "Three reports tell the financial story of any business. The profit and loss statement (P&L, or income statement) shows income minus expenses over a period. The balance sheet shows what the business owns and owes on one date. The cash flow statement shows the cash that actually came in and went out.",
          "The balance sheet always balances: assets = liabilities + equity. Assets include cash and accounts receivable (money clients owe); liabilities include bills and loans the business owes.",
          "A firm can be profitable and still short of cash, for example when clients are slow to pay. That's why the P&L and cash flow can tell different stories.",
          "Client money held in trust is never the firm's income. It belongs to the clients until it's earned and properly transferred."
        ],
        "howTo": [
          "When you pull a monthly P&L, compare it with the same month last year and the month before, and note any line that moved sharply.",
          "Check accounts receivable: how much clients owe and how old it is. Anything over 60 or 90 days goes on the follow-up list.",
          "Watch recurring expenses on the P&L, like subscriptions and rent, for anything new or unexpectedly higher.",
          "Bring questions to the accountant or bookkeeper with the specific line and amount: 'Office supplies rose from $400 to $2,100 in August.'",
          "Keep the monthly reports in one folder with the same naming pattern, so trends are easy to see."
        ],
        "bestPractices": [
          "Learn to read, not to prepare. The accountant prepares the statements; you spot what looks unusual and ask.",
          "Look at trends over several months, not one number on its own.",
          "Pitfall: counting unbilled or unpaid work as cash. It isn't money until it arrives.",
          "Pitfall: treating a trust account balance as money the firm can spend."
        ],
        "discussionCase": "The P&L shows the firm made a healthy profit last quarter, but Elias says there isn't enough cash for next month's payroll. How can both be true, and which report would you pull to show him?"
      },
      "trainerCue": "Show a one-page sample P&L and balance sheet. Ask the room to find three things: net income, accounts receivable and the biggest expense. Then ask which report answers 'can we pay payroll?'"
    },
    {
      "h": "SOA Reconciliation",
      "section": "Reconciliation & Trust Accounts",
      "b": [
        "SOA = Opening + Invoices − Payments ± Adjustments = Closing Balance.",
        "If revenue doesn't match deposits, compare bank statements against revenue records first — don't recreate every report from scratch."
      ],
      "layout": "STAT",
      "statNumber": "Opening + Invoices − Payments ± Adjustments",
      "statLabel": "= Closing Balance",
      "howTo": [
        "Start from the opening balance and add invoices, subtract payments, and apply any adjustments to arrive at the closing balance — work the formula in this exact order every time.",
        "If revenue doesn't match deposits, compare bank statements against revenue records first — this is the fastest way to isolate the actual discrepancy.",
        "Don't recreate every report from scratch when a mismatch appears — start from the specific figures that don't reconcile and work backward from there.",
        "Confirm the closing balance ties out exactly before considering the reconciliation complete — a small unexplained variance still needs to be resolved, not rounded away.",
        "Document what caused any adjustment, so the reconciliation is defensible if it's reviewed later."
      ],
      "trainerCue": "Work the SOA formula with real (or realistic) numbers on the board as a group before trainees try the reconciliation exercise solo."
    },
    {
      "h": "Reconciliation Discrepancy Detection",
      "section": "Reconciliation & Trust Accounts",
      "b": [
        "Discrepancy detection techniques: compare the ledger against the bank statement, confirm credits were applied correctly, and look specifically for reversed entries.",
        "A reconciliation checklist should confirm: all invoices are listed, all payments are recorded, there are no unmatched balances, and every variance is explained.",
        "Real case study: a payment applied to the wrong client resulted in an actual legal dispute — this is why duplicate-payment prevention (system detection, manual verification, approval thresholds) matters."
      ],
      "howTo": [
        "Compare the ledger against the bank statement line by line as the first detection step, rather than scanning for an obvious total mismatch.",
        "Confirm credits were applied to the correct account or client — a credit applied to the wrong party is a common, easy-to-miss source of discrepancy.",
        "Look specifically for reversed entries, which can offset each other in a way that hides the actual error from a surface-level total check.",
        "Run through the full reconciliation checklist explicitly: all invoices listed, all payments recorded, no unmatched balances, every variance explained.",
        "For anything resembling duplicate payment, apply the same detection discipline used elsewhere — system checks, manual verification, and approval thresholds — since a real duplicate can create serious downstream disputes."
      ],
      "trainerCue": "Ask the room what they'd actually check first if a reconciliation came up $340 short — the answer reveals whether the checklist habit has genuinely landed."
    },
    {
      "h": "Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk",
      "section": "Reconciliation & Trust Accounts",
      "fourPart": {
        "corePrinciples": [
          "An IOLTA (Interest on Lawyers' Trust Accounts) holds client funds — retainers, settlement proceeds, advance costs — that belong to the client or a third party, not to the firm, until they're actually earned or disbursed.",
          "Commingling — mixing client trust funds with the firm's own operating funds, even briefly or accidentally — is one of the most serious ethics violations in legal practice and can lead to disbarment.",
          "Money moves out of a trust account only when it's actually earned (per an invoice) or disbursed for its intended purpose — never as a shortcut for firm cash flow, no matter how temporary."
        ],
        "howTo": [
          "Keep trust account funds and operating account funds in genuinely separate accounts — this is a structural requirement, not just a bookkeeping preference.",
          "Move funds out of trust only against a specific, documented trigger — an approved invoice, a signed disbursement authorization, a settlement instruction — never as a general transfer.",
          "Maintain a running ledger per client showing exactly what's held in trust for them at any given moment, not just one pooled total for the whole account."
        ],
        "bestPractices": [
          "Pitfall: treating a trust account shortfall as an internal cash-flow problem to \"fix later\" — a trust account must never go negative for any client, even temporarily, even if it's corrected the same day.",
          "Any transaction touching a trust account should feel slower and more deliberate than a normal operating transaction — that friction is intentional, not inefficiency."
        ],
        "discussionCase": "You notice the trust account balance is $200 lower than the ledger says it should be for one specific client. What's your actual first move, and who needs to know before you do anything else?"
      }
    },
    {
      "h": "Trust Account Reconciliation Discipline",
      "section": "Reconciliation & Trust Accounts",
      "fourPart": {
        "corePrinciples": [
          "Trust account reconciliation means confirming three numbers match: the bank's statement balance, the trust account's own ledger, and the sum of every individual client's sub-ledger balance.",
          "Trust accounts require more frequent, more rigorous reconciliation than a normal operating account — monthly at minimum, and immediately after any unusual transaction.",
          "A discrepancy in a trust account reconciliation is never \"probably fine\" — it has to be identified and resolved down to the specific transaction, every time."
        ],
        "howTo": [
          "Reconcile the bank statement against the internal trust ledger on a fixed schedule, not only when something seems off.",
          "Cross-check the ledger total against the sum of all individual client sub-ledgers — these two numbers must always match exactly.",
          "Document every reconciliation, even when it's clean — a clean reconciliation record is itself part of the compliance trail."
        ],
        "bestPractices": [
          "Pitfall: reconciling the account total without reconciling each client's individual sub-ledger — the account can balance overall while one client's specific funds are actually short.",
          "Any reconciliation discrepancy gets escalated immediately, regardless of size — a one-dollar unexplained difference in a trust account is treated with the same urgency as a large one."
        ],
        "discussionCase": "This month's trust reconciliation shows the bank balance and the internal ledger match, but when you check individual client sub-ledgers, one client's balance doesn't match what was actually deposited for them. Walk through how you'd trace this down."
      }
    },
    {
      "h": "Billing & Invoicing",
      "section": "Invoice Management",
      "b": [
        "Invoice = (Rate × Hours) + Expenses, minus any discount.",
        "Every invoice needs a clear amount due, due date, and payment terms."
      ],
      "layout": "STAT",
      "statNumber": "(Rate × Hours) + Expenses",
      "statLabel": "→ apply discount → final invoice amount",
      "howTo": [
        "Calculate the base amount as rate multiplied by hours, then add any expenses before applying a discount if one applies.",
        "Confirm every invoice states a clear amount due, an explicit due date, and the payment terms — an invoice missing any of these creates ambiguity that slows payment.",
        "Double-check the rate and hours against the engagement terms before finalizing — an invoice built on the wrong rate is a real, avoidable error.",
        "Review the final total once more before sending, specifically checking the math rather than trusting the formula was applied correctly the first time.",
        "Send the invoice promptly once it's finalized — a correct invoice that sits unsent doesn't actually help cash flow."
      ],
      "trainerCue": "Live-calculate one invoice from the formula with the room shouting out each step — it's a small thing but makes the math feel concrete rather than abstract."
    },
    {
      "h": "Contract-Aware Billing",
      "section": "Invoice Management",
      "b": [
        "Know payment terms, late fees, and hour caps before billing begins.",
        "Flag an approaching hour cap proactively — going over without warning creates real risk."
      ],
      "howTo": [
        "Confirm payment terms, late fees, and any hour caps before billing begins on a matter, not partway through.",
        "Track actual hours against any contractual cap continuously, not just when generating the final invoice.",
        "Flag an approaching hour cap proactively, well before it's reached — going over without warning creates real risk and an awkward conversation.",
        "Apply late fees or payment terms consistently as written in the contract, rather than making exceptions on a case-by-case basis without authorization.",
        "When a contract's terms are genuinely ambiguous, confirm the correct interpretation before billing rather than guessing and hoping it's right."
      ],
      "trainerCue": "Ask: 'What would you do if you were 80% toward an hour cap on a contract and didn't know it?' Get a few answers before revealing the correct proactive-flag approach."
    },
    {
      "h": "Pre-Bill Review: Checking an Invoice Before It Goes Out",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "A pre-bill is the draft invoice the attorney reviews before it's sent. It's the last chance to catch mistakes, and a mistake a client finds costs far more trust than one you catch.",
          "Most invoice errors are the same few: the wrong rate, time on the wrong matter, vague or block-billed entries, missing or duplicated costs, and terms that don't match the engagement letter.",
          "The assistant prepares and checks the pre-bill; the attorney decides what's charged, written down or written off."
        ],
        "howTo": [
          "Run the pre-bill for each matter at the same point every month, as soon as time for the period is entered.",
          "Check the header: client, billing contact, matter name and number, invoice date, billing period and any purchase order or reference number the client requires.",
          "Check every time entry: right matter, right person, right rate, a clear description and no block billing. Flag entries that break the client's billing guidelines.",
          "Check costs: every billable cost has a receipt, nothing is billed twice, and any markup is allowed by the engagement letter.",
          "Check the totals and terms: the math, discounts, the retainer or trust balance to be applied, the due date and payment instructions. Then send the pre-bill to the attorney with your flags listed at the top."
        ],
        "bestPractices": [
          "Put your flags in a short list, not in the margins: 'Entry 6/12: 2.5 hrs block-billed; entry 6/18: rate shows $350, engagement letter says $325.'",
          "Keep a pre-bill checklist per client, including their billing guidelines, so the same checks happen every month.",
          "Pitfall: sending the invoice straight from the system without the attorney's sign-off.",
          "Pitfall: changing an entry's time or description yourself. Flag it, and let the attorney or the timekeeper change it."
        ],
        "discussionCase": "The Harlow pre-bill shows 42 hours in June. One entry is billed at last year's rate, two paralegal entries say only 'file review,' and a $620 court reporter cost appears twice. What goes in your note to Elias, and in what order?"
      },
      "trainerCue": "Hand out a one-page mock pre-bill with five planted errors and give the room five minutes to find them. Compare lists, then show the checklist that would have caught all five."
    },
    {
      "h": "Invoice Management: Tracking, Follow-Up & Collections",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "An invoice isn't finished when it's sent. It's finished when it's paid, and managing that gap is one of the most valuable things an assistant does for a firm's cash flow.",
          "Keep one invoice register: invoice number, client, matter, date sent, amount, due date, status (sent, viewed, part paid, paid, disputed) and date paid.",
          "Follow-up should be polite, predictable and written down. Anything beyond a reminder, like a payment plan, a late fee or collections, is the attorney's decision."
        ],
        "howTo": [
          "Number invoices in one continuous sequence and never reuse a number, even for a cancelled invoice. Void it instead, so the gap is explained.",
          "Send invoices to the right billing contact in the format the client requires (some want PDF by email, some a billing portal, some specific codes).",
          "Follow a set reminder schedule: a friendly note a few days before the due date, a reminder on the due date, then at 7, 14 and 30 days overdue.",
          "Review the aging report (current, 1–30, 31–60, 61–90, 90+ days) every week and send Elias a short list of anything over 60 days.",
          "Record payments the day they arrive and mark the invoice paid, so no one is chased after they've paid."
        ],
        "bestPractices": [
          "Keep reminders factual and warm: invoice number, amount, due date and how to pay. Clients often just need the invoice resent.",
          "When a client disputes an invoice, pause reminders on it and route the dispute to the attorney. Chasing a disputed bill makes it worse.",
          "Pitfall: sending an invoice to the client's main contact instead of their accounts payable team. It sits unread, and the clock doesn't start.",
          "Pitfall: adding late fees or threatening collections without checking the engagement letter and getting the attorney's approval."
        ],
        "discussionCase": "The aging report shows Meridian owes $18,400: $6,000 is 45 days overdue and $12,400 is 95 days overdue. No one has followed up since the invoices went out. What do you send today, and what do you ask Elias?"
      },
      "trainerCue": "Show a sample aging report and ask the room to write the 7-day-overdue reminder in three sentences. Read two aloud and compare the tone."
    },
    {
      "h": "E-Billing Portals, LEDES & Client Billing Guidelines",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "Many corporate clients and insurers don't accept emailed invoices. They require invoices to be uploaded to an e-billing portal, often in a standard electronic format called LEDES.",
          "E-billing invoices usually need task and activity codes (UTBMS codes) on every entry, and the portal checks each invoice against the client's billing guidelines automatically.",
          "An invoice the portal rejects, or cuts line by line, isn't paid until it's fixed, so knowing each client's rules is part of getting the firm paid."
        ],
        "howTo": [
          "For each client that uses e-billing, record the portal name, the login owner, the required format and codes, the submission deadline and the billing contact.",
          "Keep a copy of each client's billing guidelines with the matter, and note the rules that most often cause cuts: rate limits, banned tasks, staffing limits and expense rules.",
          "Make sure time entries carry the right task and activity codes before the pre-bill, so the LEDES file can be generated cleanly.",
          "Upload the invoice, then check the portal for its status: submitted, accepted, rejected or adjusted.",
          "When lines are cut or the invoice is rejected, read the reason, bring it to the attorney, and resubmit or appeal within the portal's deadline."
        ],
        "bestPractices": [
          "Submit on time. Many guidelines refuse invoices submitted more than a set number of days after the billing period.",
          "Track portal adjustments in a small log, so the firm can see which rules cost the most and fix the habit behind them.",
          "Pitfall: emailing a PDF invoice to a client who requires e-billing. It usually isn't treated as received.",
          "Pitfall: one person holding the only portal login. If they're out, invoices stop."
        ],
        "discussionCase": "Harlow's insurer rejects the firm's May invoice in its e-billing portal: 'Task code missing on 7 entries; 2 entries exceed the approved rate.' The resubmission window closes in 10 days. What do you do, and what do you need from Elias?"
      },
      "trainerCue": "Show a real (anonymized) portal rejection or a sample LEDES line, and ask the room which part of the time entry the rejection points to."
    },
    {
      "h": "Retainer Invoices & Applying Trust Funds",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "Many clients pay a retainer up front. It's deposited in the client trust account and stays the client's money until the firm has earned it and billed for it.",
          "Paying an invoice from a retainer means moving money from the trust account to the firm's operating account. That transfer needs the attorney's approval, a matching invoice and a record on the client's trust ledger.",
          "An 'evergreen' retainer must be topped back up to an agreed level. Watching the balance and requesting the top-up on time keeps work from stopping."
        ],
        "howTo": [
          "When a retainer arrives, confirm it went into the trust account (not operating), record it on the client's trust ledger and send a receipt if the firm does.",
          "When the invoice is ready, show the retainer on it: the invoice total, the amount applied from the retainer and the retainer balance left.",
          "Get the attorney's written approval before any transfer from trust to operating, and follow the firm's process and any notice the client must receive first.",
          "Make the transfer for exactly the approved amount, record it on the ledger with the invoice number, and file the approval.",
          "When the balance drops below the agreed level (for example 25 percent), send the top-up request the attorney has approved, with the current balance and the amount needed."
        ],
        "bestPractices": [
          "Never apply trust money to anything but an earned, billed fee or an approved client cost for that same client.",
          "Return any unused retainer promptly at the end of the matter, as the attorney directs.",
          "Pitfall: moving money from trust 'to cover' an invoice before it's approved, or to cover a different client's bill.",
          "Pitfall: invoices that don't show the retainer applied, so the client thinks they owe the full amount again."
        ],
        "discussionCase": "Meridian paid a $15,000 evergreen retainer that must stay at $10,000 or more. The June invoice is $6,800 and the balance is $11,200. What does the invoice show, what transfer happens, what's the new balance, and what goes to the client?"
      },
      "trainerCue": "Work the Meridian example on the board: invoice total, amount applied, new balance, and whether a top-up request is triggered. Then ask who has to approve each step."
    },
    {
      "h": "Invoice & Payment Reconciliation",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "Every payment that arrives must be matched to the invoice or invoices it pays. Until it is, the firm's records show the wrong amount owed, and clients get chased for bills they've already paid.",
          "Payments rarely arrive neatly: one payment can cover several invoices, a client can pay part of an invoice, or a bank fee can make the amount slightly short.",
          "At month-end, the total of all open invoices (accounts receivable) should equal the receivables balance in the books. If it doesn't, something was applied wrongly."
        ],
        "howTo": [
          "Record each payment the day it arrives: date, amount, method, payer and any reference (check number, wire note, remittance advice).",
          "Match it to the invoice numbers it pays. If there's no remittance advice, match by exact amount first, then ask the client which invoices it covers.",
          "For a part payment, apply it to the invoice and leave the balance open. For an overpayment, record it as a credit and ask the attorney whether to refund it or hold it for the next invoice.",
          "If a wire or card payment arrives short because of fees, record the fee separately so the invoice shows as fully paid, if the firm's policy is to absorb it.",
          "At month-end, run the open invoices (A/R aging) report and check that its total matches the receivables balance on the balance sheet. Investigate any difference before sending statements."
        ],
        "bestPractices": [
          "Keep 'unapplied' payments at zero. An unapplied payment means a client has paid and the books don't know what for.",
          "A payment into the trust account is never applied to a fee invoice directly. Moving it from trust to pay a bill needs the attorney's approval and a separate transfer.",
          "Pitfall: applying a payment to the oldest invoice by habit when the client paid a specific one. That can make a disputed invoice look paid.",
          "Pitfall: deleting and re-entering a payment to 'fix' it. Correct it in place, so the audit trail stays intact."
        ],
        "discussionCase": "Harlow Industries sends one wire of $7,425 with the note 'May invoices.' There are three open May invoices: $2,500, $3,000 and $2,000. What happened to the missing $75, how do you apply the wire, and what do you ask Harlow?"
      },
      "trainerCue": "Put three invoices and one lump payment on the board and have the room apply it. Then add a $25 wire fee and ask what changes."
    },
    {
      "h": "Handling a Billing Dispute",
      "section": "Invoice Management",
      "fourPart": {
        "corePrinciples": [
          "A billing dispute is a request for information and resolution, not an accusation to get defensive about — most disputes come from a genuine misunderstanding, not bad faith.",
          "The invoice's own backup documentation (time entries, receipts, the engagement terms) is what actually resolves a dispute — an opinion about what's fair, without documentation, doesn't settle anything.",
          "How a billing dispute is handled affects the client relationship well beyond the dollar amount in question."
        ],
        "howTo": [
          "Pull the actual supporting documentation for the disputed charge before responding — the underlying time entries, receipts, or engagement terms, not a summary from memory.",
          "Acknowledge the dispute promptly, even before it's fully resolved — silence reads as dismissiveness regardless of intent.",
          "Present the resolution with the supporting detail included, so the client can see exactly what the charge was based on, not just be told the answer."
        ],
        "bestPractices": [
          "Pitfall: responding defensively before actually pulling the documentation — this can turn a legitimate misunderstanding into a genuine relationship problem.",
          "If the dispute reveals a real billing error, correct it plainly and promptly — protecting the relationship matters more than protecting the original invoice."
        ],
        "discussionCase": "A client emails disputing a charge on their latest invoice, saying it doesn't match what they remember agreeing to. What's your actual first move before responding to them?"
      }
    },
    {
      "h": "Real-Time Time Tracking for Billable Work",
      "section": "Time Tracking & QuickBooks",
      "fourPart": {
        "corePrinciples": [
          "Real-time time tracking means logging billable work as it happens, not reconstructing it later from memory — the gap between when work happens and when it's logged is exactly where billing accuracy breaks down.",
          "This is distinct from the general time-tracking content covered earlier in this program — here, the tracked time directly becomes a client-facing invoice, which raises the accuracy bar considerably."
        ],
        "howTo": [
          "Log time as work happens or immediately after, rather than batching a reconstruction at the end of the day or week — accuracy drops fast the longer the gap between doing the work and recording it.",
          "Record enough detail in each time entry to support the invoice line item later, not just a duration — what was actually done, and for which matter, needs to be reconstructable from the entry alone.",
          "Reconcile logged time against the billing calendar regularly, catching gaps or inconsistencies before they reach the client-facing invoice, not after."
        ],
        "bestPractices": [
          "Pitfall: waiting until end of day or end of week to log time from memory. Reconstructed time entries are measurably less accurate, and inaccurate billable time is a direct, real cost to the firm or the client relationship.",
          "This connects directly to the contract-aware billing principles covered elsewhere in this day — accurate time tracking is the input that makes accurate billing possible in the first place."
        ],
        "discussionCase": "It's the end of a busy day and you realize you haven't logged time for several separate tasks. How do you reconstruct this as accurately as possible, and what would you do differently tomorrow to avoid the same gap?"
      }
    },
    {
      "h": "Billable vs. Non-Billable Hours",
      "section": "Time Tracking & QuickBooks",
      "fourPart": {
        "corePrinciples": [
          "Billable time is work the client can be charged for under the engagement letter, like drafting, research, calls and court time on their matter. Non-billable time is everything else: internal admin, training, business development, and work the firm has agreed not to charge.",
          "Both kinds of time get recorded. Non-billable time still shows the firm where its hours go, and it protects the firm if a client ever asks what was done.",
          "Lawyers usually record time in tenths of an hour (6-minute increments). Many corporate clients have billing guidelines that list what they won't pay for, such as clerical tasks or more than one lawyer at a meeting."
        ],
        "howTo": [
          "Record every entry with the date, matter, time in tenths, a clear description, and whether it's billable or non-billable.",
          "Check the engagement letter and the client's billing guidelines before marking work billable. Scheduling, copying and filing are often treated as non-billable overhead.",
          "Write each task as its own entry instead of one long 'block' entry. Many clients reject block billing because they can't see what each task cost.",
          "Before invoices go out, prepare a pre-bill (draft invoice) for the attorney, who decides on any write-downs (reducing time) or write-offs (not charging it).",
          "Mark approved no-charge work on the invoice as 'no charge' where the attorney wants the client to see the value they received."
        ],
        "bestPractices": [
          "Never decide on your own to cut or add time. You flag it; the attorney decides.",
          "Keep non-billable categories consistent (Admin, Training, Business Development, Pro Bono) so reports mean something.",
          "Pitfall: marking clerical work as billable because it was for a client. It's the most common reason corporate clients cut invoices.",
          "Pitfall: not recording non-billable time at all. The firm can't see why a matter took longer than planned."
        ],
        "discussionCase": "An associate's entry reads: '3.5 — Harlow: call with client, research, drafted letter, scheduled meeting, copied exhibits.' Harlow's billing guidelines reject block billing and clerical time. How do you help fix the entry before the pre-bill goes to Elias?"
      },
      "trainerCue": "Read out eight tasks (drafting a motion, booking a courier, a partner training session, a client call, copying exhibits, a pitch meeting, legal research, updating the calendar) and have the room sort them into billable and non-billable."
    },
    {
      "h": "QuickBooks How-Tos — Step by Step",
      "section": "Time Tracking & QuickBooks",
      "layout": "PROCESS",
      "b": [
        "These four tasks cover the majority of what an EA actually touches in QuickBooks day to day — you don't need to know the whole platform, just these workflows cold."
      ],
      "trainerCue": "If you have QuickBooks access, screen-share a live invoice creation and a live reconciliation instead of walking through this as slides — trainees retain the click-path far better watching it happen than reading the steps.",
      "processSteps": [
        {
          "label": "1. Create an Invoice",
          "desc": "+ New → Invoice → select client → add line items with description, rate, and hours/quantity → review the total → Save and Send."
        },
        {
          "label": "2. Record an Expense",
          "desc": "+ New → Expense → select payee and payment account → categorize the expense correctly → attach the receipt image → Save."
        },
        {
          "label": "3. Reconcile an Account",
          "desc": "Accounting → Reconcile → select the account and statement ending date/balance → check off every transaction that matches the bank statement → confirm the difference is $0.00 → Finish now."
        },
        {
          "label": "4. Run an AR Aging Report",
          "desc": "Reports → search 'Accounts Receivable Aging Summary' → run it → scan the 61-90 and 90+ day columns first — those are the balances that need a follow-up call, not the current ones."
        }
      ]
    },
    {
      "h": "QuickBooks: Billable Time, Expenses & Invoicing",
      "section": "Time Tracking & QuickBooks",
      "fourPart": {
        "corePrinciples": [
          "QuickBooks can carry time and costs straight onto an invoice, so nothing billable is forgotten. That only works if each entry is marked billable and linked to the right customer when it's recorded.",
          "In QuickBooks Online, each client (and often each matter) is a customer or sub-customer. Time entries and expenses marked 'billable' to that customer wait until the next invoice.",
          "When you create an invoice for that customer, QuickBooks shows the billable time and costs waiting for it, and you choose which to add."
        ],
        "howTo": [
          "Set up each client as a customer and each matter as a sub-customer (or use a project), so time and costs land on the right matter.",
          "Record time with a weekly timesheet or single time activity: pick the person, the customer or matter, the service item (for example 'Attorney time' at the right rate), the hours and a description, and tick Billable.",
          "Record a client cost, like a court filing fee, as an expense or bill: choose the expense category, tick Billable, and choose the customer, adding a markup only if the engagement letter allows it.",
          "Create the invoice from the customer: open a new invoice, and use the billable time and costs panel to 'add all' or add items one at a time. Check dates, descriptions and rates before saving.",
          "After sending, run the unbilled time and expenses report to make sure nothing billable is left behind."
        ],
        "bestPractices": [
          "Set each person's rate on the service item or in their profile once, rather than typing rates by hand on every entry.",
          "Only the attorney's approved pre-bill becomes a sent invoice. Draft first, send after approval.",
          "Pitfall: recording a client cost without ticking Billable. It becomes a firm expense and is never recovered.",
          "Pitfall: time entered to the client instead of the matter, so it shows up on the wrong matter's invoice."
        ],
        "discussionCase": "At month-end, the unbilled time report shows 6.2 hours for Harlow with no matter selected, and a $435 court reporter bill for Meridian that wasn't marked billable. What do you fix, and in what order, before invoices go out?"
      },
      "trainerCue": "If you have a QuickBooks sandbox, record one billable time entry and one billable expense for a test customer, then create the invoice and show both appearing in the billable panel."
    },
    {
      "h": "QuickBooks Common Mistakes & Tips",
      "section": "Time Tracking & QuickBooks",
      "b": [
        "The single most common new-user mistake is miscategorizing an expense (e.g. filing a client-reimbursable cost as a general office expense) — this quietly breaks both the client's invoice accuracy and the firm's own books. When in doubt, ask before categorizing, don't guess.",
        "Reconciliation only 'finishes' when the difference shows exactly $0.00. If it doesn't, the fix is almost always a missing transaction or a duplicate — not forcing the numbers to match by adjusting an unrelated entry.",
        "Every invoice should be checked against the engagement letter or contract terms before sending — QuickBooks will happily generate an invoice for the wrong rate if that's what you typed in.",
        "If your firm uses QuickBooks Online (not Desktop), changes save automatically — there's no separate 'save file' step, which means a wrong entry needs to be corrected via a journal entry or edit, not undone with Ctrl+Z."
      ],
      "howTo": [
        "Before categorizing an expense, confirm which category it actually belongs to — when in doubt, ask rather than guess, since miscategorization is the single most common error.",
        "When a reconciliation doesn't show exactly $0.00, look for a missing or duplicate transaction as the likely cause, rather than adjusting an unrelated entry to force the numbers to match.",
        "Check every invoice against the actual engagement letter or contract terms before sending — the software will generate an invoice for whatever rate is entered, correct or not.",
        "In QuickBooks Online specifically, remember changes save automatically — a wrong entry needs a journal entry or edit to correct, not an undo.",
        "Periodically review recent entries for miscategorization patterns, catching a recurring mistake before it compounds across many transactions."
      ],
      "trainerCue": "Ask the room to guess what percentage of QuickBooks errors they think come from miscategorization versus other causes — then reveal it's the single most common mistake, which usually surprises people."
    },
    {
      "h": "QuickBooks: Bank Feeds, Rules & Month-End Close",
      "section": "Time Tracking & QuickBooks",
      "fourPart": {
        "corePrinciples": [
          "Bank feeds bring transactions from the firm's bank and card accounts into QuickBooks automatically. They still need a person to review each one and decide where it belongs.",
          "Each downloaded transaction is either matched to something already recorded (like a bill payment or an invoice payment) or added as a new transaction with a category, payee and, if needed, a customer.",
          "Month-end close is the routine that makes the numbers trustworthy: everything reviewed, every account reconciled, then the period locked so nobody changes it by accident."
        ],
        "howTo": [
          "Review the bank feed ('For review') at least weekly. Choose Match when QuickBooks finds the existing entry; choose Add only when nothing matches, or you'll create a duplicate.",
          "Create rules for regular transactions, like the monthly rent or software subscription, so they're categorized the same way every time. Check what the rule did at each review.",
          "Exclude only true duplicates or transactions that don't belong in the books, and note why.",
          "At month-end, clear everything in the feed, reconcile every bank and card account to its statement, review uncategorized transactions, and run the P&L and balance sheet for the accountant.",
          "Once the accountant confirms the month, set the closing date (with a password) so earlier periods can't be changed without a record."
        ],
        "bestPractices": [
          "Never categorize a transaction into 'Uncategorized' or 'Ask my accountant' and forget it. Keep a list and clear it every week.",
          "Transfers between the firm's own accounts, like operating to credit card payment, are recorded as transfers, not as expenses.",
          "Pitfall: clicking Add on a payment that was already recorded as a bill payment. The expense is counted twice.",
          "Pitfall: trust account transactions categorized as firm income. Trust money needs its own account and its own reconciliation."
        ],
        "discussionCase": "The feed shows a $1,200 payment to the firm's credit card company, and QuickBooks suggests categorizing it as 'Office expenses.' What is it really, how should it be recorded and what would go wrong if you accepted the suggestion?"
      },
      "trainerCue": "Show the bank feed screen (or a screenshot) and ask the room, for five sample transactions, whether each is a Match, an Add or an Exclude."
    },
    {
      "h": "Credit Cards & Card Applications",
      "section": "Expenses, Payments & Payroll",
      "layout": "THREEBOX",
      "boxes": [
        {
          "label": "Credit Card Payments",
          "desc": "Tracking due dates and statement review the same way as any other recurring payment — a missed card payment carries real fees and credit consequences"
        },
        {
          "label": "Card Applications",
          "desc": "Gathering the specific documentation a card application needs and following the process precisely — this isn't a task to guess your way through"
        },
        {
          "label": "Tax Season Support",
          "desc": "Organizing receipts and records as they happen year-round, not scrambling to reconstruct them when the accountant asks"
        }
      ],
      "b": [
        "Credit card payments follow the same discipline as every other recurring financial task in this program: a real due-date calendar, not memory, and a statement review before payment — not after — to catch anything that shouldn't be there.",
        "When a credit card application is part of the task, the EA's role is precision: gathering exactly what's requested (not more, not less) and following the specific process the issuer requires, since financial applications are one place where 'close enough' documentation causes real delays."
      ],
      "howTo": [
        "Track credit card due dates on a real calendar, the same as any other recurring payment — a missed payment carries real fees and credit consequences.",
        "Review the statement before paying it, not after, specifically to catch anything that shouldn't be there.",
        "For any card application, gather exactly the documentation requested — not more, not less — and follow the issuer's specific process precisely.",
        "Organize tax-relevant receipts and records as they happen throughout the year, not in a scramble when the accountant eventually asks.",
        "If asked today for every receipt from the last 90 days, that request should be a quick retrieval, not a reconstruction project — treat that as the actual test of whether the system is working."
      ],
      "trainerCue": "Ask the room how confident they'd feel today if an accountant asked for 'every receipt from the last 90 days' — the honest answer usually reveals whether records are being kept continuously or reconstructed under pressure."
    },
    {
      "h": "Credit Card Help: Disputes, Fraud & Lost Cards",
      "section": "Expenses, Payments & Payroll",
      "fourPart": {
        "corePrinciples": [
          "Assistants often manage the executive's and the firm's cards day to day, so you'll be first to spot a wrong charge, a fraud alert or a lost card. Speed matters in all three.",
          "A billing error or a charge you don't recognize can be disputed with the card issuer. For credit cards in the US, billing-error disputes should be sent in writing within 60 days of the statement that first showed the charge.",
          "A lost or stolen card, or a suspected fraud, should be reported to the issuer immediately. Most issuers then block the card and send a new one, which means every automatic payment on it has to be updated."
        ],
        "howTo": [
          "For an unknown charge: check receipts, the merchant's full name (card statements often show a parent company) and whether someone else on the account made it, before disputing.",
          "For a wrong charge, like a double charge or a cancelled booking: contact the merchant first, then, if it isn't fixed, file a dispute with the issuer through the app or in writing, with dates, amounts and copies of receipts.",
          "For fraud or a lost card: lock or report the card straight away using the number on the back of the card or the issuer's app, never a number from an email or text.",
          "When a replacement card arrives, update every subscription and automatic payment on the old card. Keep a list of them for exactly this moment.",
          "Log each case: the date reported, reference number, amount, what was agreed and the follow-up date, and check the next statement for the credit."
        ],
        "bestPractices": [
          "Keep a card register: each card, its user, its limit, its billing date, the payments on it and who can authorize it.",
          "Only the cardholder or an authorized person can dispute or cancel. For the executive's personal card, act only with their permission.",
          "Pitfall: disputing a charge that's really a forgotten subscription renewal. Check your own records first.",
          "Pitfall: missing the dispute window because you waited for the merchant to reply. Put the deadline on the calendar the day you find the charge."
        ],
        "discussionCase": "Elias texts from an airport: his firm card was declined and he's had a fraud alert. He needs to pay for a hotel tonight, and the same card pays for three software subscriptions. What do you do, in order?"
      },
      "trainerCue": "Give pairs three situations (a double hotel charge, an unknown $19.99 charge, a card lost in a taxi) and have them write the first two steps for each."
    },
    {
      "h": "Reconciling a Credit Card Statement",
      "section": "Expenses, Payments & Payroll",
      "fourPart": {
        "corePrinciples": [
          "Reconciling a card statement means proving that every charge on it has a receipt, a business purpose and the right category, and that the firm's records match the statement's balance.",
          "Card charges often belong to a client matter, like travel for a deposition or a filing fee. Those must be coded to the matter and marked billable so the firm recovers them.",
          "Personal charges on a business card, even accidental ones, must be flagged and repaid. They should never be hidden in a business category."
        ],
        "howTo": [
          "Download the statement and gather receipts for the same period (from email, the expense app or the executive).",
          "Go line by line: match each charge to its receipt, confirm the business purpose, and assign the category and, where it applies, the client matter.",
          "Chase any missing receipt the same week. For a small charge with no receipt, use the firm's missing-receipt form signed by the cardholder.",
          "Flag duplicates, unknown charges and personal charges separately, and send them to the cardholder or the office manager to resolve.",
          "In QuickBooks, reconcile the card account to the statement's ending balance, then file the statement and receipts together for the month."
        ],
        "bestPractices": [
          "Do it monthly, as soon as the statement closes, while receipts and memories are fresh.",
          "Keep receipts where they can be found by date and matter. An auditor or the accountant may ask for any one of them.",
          "Pitfall: coding a client's travel to 'Travel' without the matter. The cost is never billed back to the client.",
          "Pitfall: paying the card before reviewing the statement. Once it's paid, disputing an error is harder and the review gets skipped."
        ],
        "discussionCase": "Elias's card statement has 34 charges. You have 29 receipts. Two charges are for the Chicago deposition, one looks personal (a $64 pharmacy charge), and two have no receipt at all. Walk through how you finish the reconciliation and who you contact."
      },
      "trainerCue": "Hand out a one-page mock statement and a handful of receipts. Give the room ten minutes to reconcile it and list what's missing."
    },
    {
      "h": "Expense Report Auditing & Approval Workflows",
      "section": "Expenses, Payments & Payroll",
      "fourPart": {
        "corePrinciples": [
          "An expense report audit exists to confirm each expense is legitimate, properly documented, and correctly categorized before it's reimbursed or booked — not to catch fraud after the fact.",
          "A missing receipt isn't a minor formatting issue — without it, there's no independent confirmation the expense actually happened as described.",
          "Approval workflows exist so no single person can submit and approve their own expense — this separation is what makes the whole system trustworthy."
        ],
        "howTo": [
          "Check every expense report line against its receipt before approval — amount, date, and business purpose should all match.",
          "Flag any expense missing a receipt or business justification and hold it for clarification rather than approving it on the assumption it's fine.",
          "Route every expense report through its proper approval chain — never approve an expense for yourself or bypass the assigned approver."
        ],
        "bestPractices": [
          "Pitfall: approving expense reports in bulk without actually reviewing individual line items — this defeats the entire purpose of the audit step.",
          "Watch for split transactions (one expense broken into several smaller ones) — this is a known pattern for working around approval thresholds."
        ],
        "discussionCase": "An expense report crosses your desk with a receipt for exactly $499 — one dollar under the $500 threshold that would require additional approval. What do you actually do with that observation?"
      }
    },
    {
      "h": "Vendor Payment Terms & Cash Flow Timing",
      "section": "Expenses, Payments & Payroll",
      "fourPart": {
        "corePrinciples": [
          "Payment terms (Net 30, Net 60, due on receipt) directly affect cash flow timing — paying earlier than required or later than agreed both have real consequences.",
          "Early payment can sometimes unlock a discount, but paying early with no such benefit ties up cash that could otherwise be used elsewhere.",
          "Late payment risks late fees, damaged vendor relationships, and in some cases suspended service — the terms exist for a reason on both sides."
        ],
        "howTo": [
          "Confirm the actual payment terms on file for each vendor rather than assuming a default — terms can vary significantly vendor to vendor.",
          "Time payments to align with the agreed terms, not arbitrarily earlier or later, unless there's a specific reason (an early-payment discount) to do otherwise.",
          "Track upcoming payment due dates against expected cash inflows so a payment obligation doesn't collide with a cash-flow gap."
        ],
        "bestPractices": [
          "Pitfall: paying every invoice immediately on receipt regardless of terms — this can unnecessarily strain cash flow with no actual benefit.",
          "Flag any vendor payment that would need to happen outside its normal terms (early or late) so it can be a deliberate decision, not a default."
        ],
        "discussionCase": "A vendor invoice with Net 30 terms arrives, but the person who normally handles payments defaults to paying everything within 48 hours \"to be safe.\" Is that actually the right call here, and what would you say?"
      }
    },
    {
      "h": "Payroll Basics for EA/PA Support Roles",
      "section": "Expenses, Payments & Payroll",
      "fourPart": {
        "corePrinciples": [
          "An EA/PA rarely runs payroll directly, but frequently touches its edges — onboarding paperwork, timesheet accuracy, expense reimbursements that flow through payroll — and errors in that supporting work create real payroll problems downstream.",
          "Payroll has hard, recurring deadlines (a specific pay date, tax deposit dates) that don't move — a delay anywhere in the supporting workflow risks missing them.",
          "Payroll-adjacent information (salary, withholding elections, personal banking details) is some of the most sensitive data handled in a support role and needs to be treated accordingly."
        ],
        "howTo": [
          "Confirm any timesheet or hours data feeding into payroll is accurate and submitted before the actual payroll cutoff, not after.",
          "Handle payroll-adjacent paperwork (new hire forms, direct deposit changes) with the same confidentiality discipline as any other sensitive financial document.",
          "Flag any payroll-related deadline clearly on the compliance calendar alongside other hard financial deadlines."
        ],
        "bestPractices": [
          "Pitfall: treating a payroll-adjacent task as low priority because it's \"someone else's system\" — a late timesheet submission on your end can still cause a real payroll delay.",
          "Never discuss or forward payroll or compensation details outside the specific people who need them for the specific task at hand."
        ],
        "discussionCase": "A new hire's onboarding paperwork is sitting incomplete two days before the payroll cutoff that would get them on the next pay run. What do you actually do to make sure they're not accidentally missed?"
      }
    },
    {
      "h": "Tax Season Support & Working with Accountants",
      "section": "Tax, Records & Fraud",
      "singleSlide": true,
      "b": [
        "Tax season support isn't a once-a-year task disguised as one — the actual EA value is in organizing receipts, invoices, and records continuously through the year, so that when the accountant asks for documentation, it's a retrieval task, not a reconstruction project.",
        "Liaising with accountants means being the reliable point of contact who can answer 'do you have X' quickly and accurately — which is only possible if the underlying records were kept current all along, connecting directly to the reconciliation discipline covered earlier in this day."
      ],
      "howTo": [
        "Organize receipts, invoices, and records continuously through the year, filed and categorized as they arrive, not saved up for tax season.",
        "Respond to any accountant request as a retrieval task — pull the already-organized documentation quickly, rather than needing to reconstruct anything.",
        "Establish yourself as the reliable point of contact who can answer \"do you have X\" quickly and accurately, which only works if records were kept current all along.",
        "Connect this discipline directly to the reconciliation work covered earlier in this day — accurate, continuous records are what makes reconciliation fast rather than a forensic exercise.",
        "Build a simple daily or weekly habit (a filing pass, a receipt-scan routine) rather than relying on a single big push once a year."
      ],
      "trainerCue": "Ask the room to describe what a truly continuous, year-round receipt-organizing habit would actually look like day to day — most people can describe the goal but not the daily mechanics, which is exactly the gap this topic closes."
    },
    {
      "h": "Quarterly Tax Schedules",
      "section": "Tax, Records & Fraud",
      "fourPart": {
        "corePrinciples": [
          "Businesses that pay estimated taxes quarterly work against a fixed, recurring calendar — missing one of these dates creates real penalty exposure, distinct from the annual filing deadline most people think of first.",
          "This is calendar discipline applied specifically to a recurring compliance obligation — the same redundant-reminder approach covered elsewhere in this program for court and regulatory deadlines applies here too."
        ],
        "howTo": [
          "Log all four quarterly estimated tax deadlines onto the financial calendar at the start of the year, with lead-time reminders before each one, not just the date itself.",
          "Confirm with the accountant or bookkeeper well before each deadline that the estimated payment amount and any needed documentation are ready — this isn't something to discover is incomplete on the deadline itself.",
          "Keep a simple record of each quarter's payment confirmation, so there's a clear audit trail if a payment is ever questioned."
        ],
        "bestPractices": [
          "Pitfall: treating quarterly estimated taxes as a single annual concern rather than four genuinely separate deadlines, each with its own lead time and preparation needs.",
          "Coordinate with the accountant early enough that a payment amount question doesn't become a last-minute scramble — this connects to the tax season support principles covered earlier in this day."
        ],
        "discussionCase": "It's ten days before a quarterly estimated tax deadline, and you haven't yet heard from the accountant about the payment amount. What do you do?"
      }
    },
    {
      "h": "W-9/1099 Audits & Filing Deadlines",
      "section": "Tax, Records & Fraud",
      "fourPart": {
        "corePrinciples": [
          "Businesses that pay independent contractors or vendors above a certain threshold have real, deadline-bound 1099 filing obligations — and those filings depend entirely on having accurate W-9 information collected in advance.",
          "A W-9/1099 audit means periodically confirming that every vendor or contractor who should have a W-9 on file actually has one, and that it's current — this is a preventive check, not something to discover is missing at filing time."
        ],
        "howTo": [
          "Collect a W-9 from any new vendor or contractor before the first payment is made, not after — this is the same 'engagement letter before work begins' discipline covered elsewhere in this program, applied to tax documentation.",
          "Periodically audit the vendor list against the W-9 file to catch any gaps — a vendor added mid-year is an easy one to miss if this isn't checked systematically.",
          "Track the 1099 filing deadline on the financial calendar with real lead time, since it depends on having complete, accurate W-9 data ready well before the deadline itself."
        ],
        "bestPractices": [
          "Pitfall: only checking for missing W-9s when the 1099 filing deadline is already close — by then, chasing down a vendor for missing information is a genuine time-pressure problem.",
          "Keep W-9 records with the same document-security discipline as other confidential documents in this program — they contain sensitive personal or business tax information."
        ],
        "discussionCase": "You're preparing for the 1099 filing deadline and discover one vendor paid above the reporting threshold never submitted a W-9. What do you do now, with the deadline approaching?"
      }
    },
    {
      "h": "Financial Record Retention Requirements",
      "section": "Tax, Records & Fraud",
      "fourPart": {
        "corePrinciples": [
          "Financial records — invoices, receipts, bank statements, trust account records — have minimum retention periods that vary by document type and jurisdiction, and trust account records in particular often carry longer requirements than general business records.",
          "Retention isn't just about keeping records long enough — it's also about being able to actually retrieve a specific document when it's needed, not just knowing it exists somewhere.",
          "Destroying a financial record before its retention period has passed can create real problems in an audit, a dispute, or a regulatory inquiry."
        ],
        "howTo": [
          "Know the specific retention period for each category of financial record the practice handles, rather than applying one blanket rule to everything.",
          "Store financial records in a system that's both durable and searchable — a record that technically exists but can't be found on demand isn't meeting the actual purpose of retention.",
          "Build retention into the filing process itself (a labeled retention date, a scheduled review) rather than relying on remembering to check later."
        ],
        "bestPractices": [
          "Pitfall: assuming digital storage means retention is automatically handled — files can still be lost, misfiled, or accidentally deleted without a deliberate retention system.",
          "When in doubt about whether a record's retention period has passed, keep it — the cost of over-retaining is far lower than the cost of needing a destroyed record."
        ],
        "discussionCase": "You're doing a records cleanup and find trust account records from several years ago. Before deleting anything to save space, what do you actually need to confirm first?"
      }
    },
    {
      "h": "Fraud Red Flags in Financial Documents",
      "section": "Tax, Records & Fraud",
      "fourPart": {
        "corePrinciples": [
          "Most financial fraud isn't dramatic — it shows up as small, plausible-looking inconsistencies that are easy to miss without deliberately looking for them.",
          "A single red flag is often just an error; a pattern of red flags across multiple documents is what actually warrants real concern.",
          "The EA/PA reviewing financial documents day to day is frequently the first line of defense simply by virtue of being the one who sees the most detail."
        ],
        "howTo": [
          "Watch for classic red flags: invoices from an unfamiliar vendor with no prior history, round-number amounts that seem too clean, duplicate invoice numbers, or a sudden change in a vendor's payment details.",
          "Cross-check any changed payment information (a new bank account for a known vendor) through a separate, verified channel before acting on it — never confirm a payment change using only the contact info on the request itself.",
          "Escalate a genuine concern promptly rather than trying to fully resolve it alone — pattern recognition across multiple people often catches what one person alone would miss."
        ],
        "bestPractices": [
          "Pitfall: dismissing a single odd detail as probably nothing — a pattern is only visible if individual anomalies actually get tracked, not each one privately explained away.",
          "Never let being wrong about a false alarm discourage raising the next real concern — the cost of a false alarm is far lower than the cost of a missed one."
        ],
        "discussionCase": "A long-standing vendor emails asking to update their bank account details for future payments. What's your actual verification process before that change gets made — and why does the request coming from their known email address not fully settle it?"
      }
    }
  ],
  "quickChecks": [
    {
      "afterIndex": 1,
      "q": "Which SOP element answers \"who does this process apply to?\"",
      "opts": [
        "Scope",
        "Escalation",
        "Controls",
        "Purpose"
      ],
      "a": 0,
      "r": "Scope defines who the procedure covers; Purpose explains why it exists."
    },
    {
      "afterIndex": 3,
      "q": "What's the target range for Invoice Turnaround Time?",
      "opts": [
        "No target — whenever it gets done",
        "1–2 weeks",
        "1–2 hours",
        "24–72 hours"
      ],
      "a": 3,
      "r": "24–72 hours from service completion to invoice sent is the benchmark target."
    }
  ],
  "quiz": [
    {
      "q": "What is the real EA value in tax season support?",
      "opts": [
        "Preparing the return's figures from the ledger so the accountant only has to review and sign it",
        "Organizing receipts and records continuously through the year so retrieval is easy when the accountant asks",
        "Comparing accountants each year and recommending the one with the lowest fees to the executive",
        "Chasing the accountant for updates in the weeks before the filing deadline"
      ],
      "a": 1,
      "r": "The EA's role is continuous organization, not a once-a-year scramble — that's what turns 'do you have X' into a quick retrieval instead of a reconstruction project."
    },
    {
      "q": "What's the formula for a Statement of Account (SOA) closing balance?",
      "opts": [
        "The sum of all unpaid invoices on the account, minus any credit notes issued",
        "Total invoiced this period − total payments received this period",
        "Opening balance + new invoices − payments received +/− adjustments",
        "Opening balance + payments received − new invoices"
      ],
      "a": 2,
      "r": "Every movement — new charges, payments, and adjustments — has to be accounted for against the opening balance."
    },
    {
      "q": "Reported revenue doesn't match actual bank deposits. What's the first investigative step?",
      "opts": [
        "Compare bank statements against revenue records",
        "Ignore small discrepancies",
        "Recreate every financial report from scratch",
        "Ask management to explain it without checking anything yourself"
      ],
      "a": 0,
      "r": "A direct comparison is the fastest way to isolate where the mismatch is coming from."
    },
    {
      "q": "Every invoice must clearly include:",
      "opts": [
        "The client's name, the total and the matter number",
        "A handwritten signature",
        "A discount, regardless of whether one applies",
        "The amount due, due date, and payment terms"
      ],
      "a": 3,
      "r": "These three elements are the minimum for a professional, disputable-if-needed invoice."
    },
    {
      "q": "A contract caps billable hours at 100/month and the team is approaching that cap. Best move?",
      "opts": [
        "Stop all work at the 100-hour mark and pick it up again next month",
        "Flag it to the executive/client before hours exceed the contracted cap",
        "Keep working and bill the overage next month, when the cap resets",
        "Change the contract terms unilaterally"
      ],
      "a": 1,
      "r": "Proactively flagging protects both the relationship and the billing accuracy."
    },
    {
      "q": "The biggest compliance red flag in day-to-day bookkeeping is:",
      "opts": [
        "Filing receipts digitally instead of keeping the paper originals",
        "Rounding amounts to the nearest dollar",
        "Approving your own transactions (no segregation of duties)",
        "Using cloud accounting software instead of a desktop program"
      ],
      "a": 2,
      "r": "Segregation of duties exists specifically to prevent self-approved, unchecked transactions."
    },
    {
      "q": "What is the EA/PA's typical role in finance operations, even without a formal accounting background?",
      "opts": [
        "Supporting reconciliation, invoicing accuracy, and financial calendar tracking as an operational function",
        "Managing the executive's investments and approving large payments while the executive is away",
        "Reviewing the external accountants' work each quarter and reporting any errors to the partners",
        "Very little, since finance belongs to the accountants; the EA just forwards invoices when asked"
      ],
      "a": 0,
      "r": "EAs/PAs often own the operational, day-to-day financial support tasks without needing to be the accountant of record."
    },
    {
      "q": "What does SOA reconciliation primarily verify?",
      "opts": [
        "That an email was delivered successfully",
        "That every invoice sent this month has been paid in full by its due date",
        "That the firm's billing rates match what other firms charge for the same work",
        "That a Statement of Account matches actual recorded transactions"
      ],
      "a": 3,
      "r": "SOA reconciliation checks the statement of account against underlying transaction records to catch discrepancies."
    },
    {
      "q": "What does a well-designed SOP for financial processes need most, beyond just listing steps?",
      "opts": [
        "Precise accounting terminology throughout, so it reads as authoritative to auditors",
        "Clear enough detail that someone unfamiliar with the process could follow it correctly",
        "A requirement that only the original author can ever use it",
        "A fixed, final version that isn't changed, so everyone follows exactly the same steps"
      ],
      "a": 1,
      "r": "An SOP's real test is whether someone new to the task can follow it accurately — jargon and gatekeeping defeat that purpose."
    },
    {
      "q": "Why is a financial calendar (tracking recurring deadlines) valuable beyond a general calendar?",
      "opts": [
        "It lets the finance team see the executive's meetings, so they know when to send documents for signature",
        "Firms are required by law to keep a separate financial calendar, and auditors ask to see it every year",
        "It keeps money matters off the executive's main calendar, so personal and financial information stay separate",
        "It surfaces financial-specific recurring deadlines (billing cycles, filings, renewals) that are easy to lose in a general calendar"
      ],
      "a": 3,
      "r": "Financial deadlines have their own rhythm and consequences for being missed — a dedicated view reduces the risk of losing track."
    },
    {
      "q": "In contract-aware billing, why does the billed rate need to be checked against the actual engagement terms?",
      "opts": [
        "Billing a rate that doesn't match the contracted terms creates real client-facing errors and trust problems",
        "Because the billing software can't calculate totals correctly unless the rate is confirmed first",
        "Contract terms are only relevant at the start of an engagement",
        "Because clients are only allowed to dispute an invoice if the rate hasn't been checked in advance"
      ],
      "a": 0,
      "r": "An invoice that doesn't match what was actually contracted is a real accuracy failure, not a minor formatting issue."
    },
    {
      "q": "In QuickBooks, what is the correct order of operations for creating a client invoice?",
      "opts": [
        "Enter the line items first, save the invoice, then attach it to the right client afterwards",
        "Type the total from the timesheet, send it, then add the line-item detail if the client asks",
        "Select the client, add line items with accurate rate and quantity, review the total, then Save and Send",
        "Save and Send a draft first, so the client can see it early, then add the line items"
      ],
      "a": 2,
      "r": "Line items should be entered and reviewed for accuracy before the invoice is finalized and sent."
    },
    {
      "q": "What does it mean when a bank reconciliation in QuickBooks doesn't show a $0.00 difference?",
      "opts": [
        "The bank has made an error, so the statement needs to be disputed with them",
        "The difference is usually rounding, so it can be finalized and adjusted next month",
        "Reconciliation differences can simply be ignored",
        "There's likely a missing or duplicate transaction that needs to be found before finishing"
      ],
      "a": 3,
      "r": "A non-zero difference signals a real discrepancy — almost always a missing or duplicate entry — that needs resolving, not overriding."
    },
    {
      "q": "Why is miscategorizing an expense (e.g., filing a client-reimbursable cost as general overhead) a meaningful error?",
      "opts": [
        "It changes the firm's tax category for the whole year, which can trigger an automatic audit",
        "It quietly breaks both invoice accuracy for the client and the firm's own internal books",
        "It makes the monthly expense reports look messy when they're printed for the partners",
        "It's only a real problem for expenses over a set amount, since small ones are grouped anyway"
      ],
      "a": 1,
      "r": "A miscategorized expense corrupts two things at once: what the client is billed and what the firm's own records show."
    },
    {
      "q": "What is a common early warning sign that a financial KPI needs closer attention?",
      "opts": [
        "A metric that's only reported quarterly, since it can't show changes quickly enough",
        "A KPI shown as a percentage rather than an amount, since percentages hide the real numbers",
        "A metric drifting steadily away from its target over consecutive periods",
        "A metric staying exactly the same for years with no explanation needed"
      ],
      "a": 2,
      "r": "A steady drift away from target — even a small one — is often the earliest sign of an underlying issue worth investigating."
    },
    {
      "q": "Why should an EA verify an invoice against the engagement letter before sending it to a client?",
      "opts": [
        "Software will generate whatever rate is entered, regardless of whether it matches what was actually agreed",
        "Because clients rarely check their invoices, so the firm has to catch its own errors before sending",
        "Because the engagement letter sets the client's address and billing contact for the invoice",
        "Because the engagement letter lists the client's preferred invoice format and delivery method"
      ],
      "a": 0,
      "r": "The software has no way to know if a typed-in rate is correct — that check has to come from comparing against the actual agreement."
    },
    {
      "q": "What does 'bookkeeping basics and compliance' primarily protect a business from?",
      "opts": [
        "Losing receipts when a staff member leaves the firm",
        "Penalties under the rules for public companies, which apply once a business has more than ten staff",
        "Financial misstatements, missed filings, and the compounding errors that come from inconsistent record-keeping",
        "Mainly reputational damage, since bookkeeping errors rarely have a real financial cost to fix"
      ],
      "a": 2,
      "r": "Consistent, compliant bookkeeping is what prevents small errors from compounding into serious financial or legal problems."
    },
    {
      "q": "Why might a client relationship suffer even if an accounting error is eventually caught and corrected?",
      "opts": [
        "The initial error can still damage trust and create doubt about future invoices, even after correction",
        "Because the correction has to be approved by the client in writing, which takes weeks",
        "Because the firm must add a correction fee to the next invoice, which clients dislike",
        "Because corrected invoices must be sent by post, and clients find the delay frustrating when they're waiting to pay"
      ],
      "a": 0,
      "r": "Trust, once shaken by a billing mistake, doesn't fully reset just because the number was eventually fixed."
    },
    {
      "q": "What's a reasonable cadence for reviewing a financial calendar's upcoming deadlines?",
      "opts": [
        "Monthly, on the first business day, since most deadlines fall at month-end and can simply be handled as they arrive",
        "Regularly and proactively, well before deadlines arrive, not just reactively when something is due immediately",
        "Once a year, during the annual review, when all the next year's dates are set at once",
        "Whenever the accountant sends a reminder, since they track the dates on the firm's behalf"
      ],
      "a": 1,
      "r": "Proactive, regular review is what actually prevents last-minute scrambles — reactive checking defeats the calendar's purpose."
    },
    {
      "q": "Why does an SOA reconciliation discrepancy deserve investigation even if the dollar amount is small?",
      "opts": [
        "Because every discrepancy, however small, has to be reported to the client within 24 hours",
        "Only discrepancies over a fixed dollar threshold matter",
        "Because small amounts add up to a large write-off at year end if they're never collected",
        "A small discrepancy can indicate a systemic error that will grow or recur if left unaddressed"
      ],
      "a": 3,
      "r": "Size alone doesn't indicate whether a discrepancy reflects a one-off error or an early sign of a larger systemic issue."
    },
    {
      "q": "What is the primary benefit of contract-aware billing software features?",
      "opts": [
        "They let clients approve each invoice inside the software before it's issued, so disputes happen earlier",
        "They reduce (but don't eliminate) the risk of rates or terms drifting from what was actually contracted",
        "They automatically update rates when a contract changes, so invoices never need checking",
        "They send invoices straight to the client once time is logged, cutting out manual review"
      ],
      "a": 1,
      "r": "Contract-aware features reduce risk but still require human verification — they're an aid, not a replacement for review."
    },
    {
      "q": "Which report shows what a business owns and owes on a single date?",
      "opts": [
        "The balance sheet",
        "The profit and loss statement",
        "The cash flow statement",
        "The accounts receivable aging report"
      ],
      "a": 0,
      "r": "The balance sheet is a snapshot on one date: assets = liabilities + equity. The P&L and cash flow statement cover a period, and an aging report lists only what clients owe."
    },
    {
      "q": "A client sends one payment of $5,000 with no note. They have open invoices of $3,000 and $2,000. What's the best way to apply it?",
      "opts": [
        "Leave it unapplied until the end of the month, then decide",
        "Apply it to both invoices and confirm with the client that this was their intent",
        "Apply the full amount to the oldest invoice and hold the rest as a credit",
        "Apply it to whichever invoice is larger so that invoice is cleared first"
      ],
      "a": 1,
      "r": "The amount matches both invoices exactly, so apply it to both and confirm with the client. Leaving it unapplied misstates the books, and the other two options apply it arbitrarily."
    },
    {
      "q": "A client emails that they dispute part of an invoice that is now 20 days overdue. What should happen to your reminder schedule?",
      "opts": [
        "Keep sending reminders, since the invoice is still overdue",
        "Add a late fee to encourage the client to settle the dispute",
        "Pause reminders on that invoice and route the dispute to the attorney",
        "Send the invoice to collections so the dispute is handled formally"
      ],
      "a": 2,
      "r": "A disputed invoice goes to the attorney, and reminders pause while it's resolved. Continuing to chase, adding fees or sending it to collections are escalations only the attorney can decide."
    },
    {
      "q": "What is 'block billing'?",
      "opts": [
        "Recording several different tasks together as one time entry",
        "Billing a client a fixed monthly fee instead of hourly rates",
        "Recording time in blocks of six minutes, or tenths of an hour",
        "Blocking a client from receiving invoices until a dispute ends"
      ],
      "a": 0,
      "r": "Block billing lumps several tasks into one entry, so the client can't see what each cost; many clients reject it. Six-minute increments and flat fees are different things."
    },
    {
      "q": "A $435 court reporter bill for a client matter was entered in QuickBooks without the Billable box ticked. What's the result?",
      "opts": [
        "QuickBooks adds it to the client's next invoice automatically anyway",
        "It becomes a firm expense and won't appear on the client's invoice",
        "It's held in trust until the attorney approves the charge",
        "It's billed to the client at double the cost as a markup"
      ],
      "a": 1,
      "r": "Only entries marked billable to a customer are offered on the invoice. Without it, the cost stays a firm expense and isn't recovered from the client."
    },
    {
      "q": "In the QuickBooks bank feed, a $2,000 payment appears that you already recorded last week as a bill payment. What should you do?",
      "opts": [
        "Add it as a new expense so the bank feed is cleared",
        "Exclude it, since it's already been recorded somewhere else",
        "Categorize it as 'Uncategorized' until the accountant checks",
        "Match it to the existing bill payment already in the books"
      ],
      "a": 3,
      "r": "Matching links the bank transaction to the entry you already made. Adding it would count the expense twice, excluding it hides a real bank transaction, and 'Uncategorized' just postpones the decision."
    },
    {
      "q": "You spot a charge on the firm credit card that you don't recognize. What's the best first step?",
      "opts": [
        "Check receipts, the merchant's full name and other card users before disputing",
        "Dispute it with the card issuer immediately so the 60-day window isn't missed",
        "Cancel the card right away and order a replacement from the issuer",
        "Pay the full statement anyway and look into the charge next month"
      ],
      "a": 0,
      "r": "Many 'unknown' charges are legitimate under a parent company's name or made by another user, so check first; then dispute promptly if it's wrong. Cancelling or ignoring it are the wrong first moves."
    },
    {
      "q": "While reconciling the firm card, you find a $240 hotel charge for a client deposition. How should it be recorded?",
      "opts": [
        "As general travel, since all travel is a normal firm expense",
        "As a personal charge for the attorney to repay to the firm",
        "As travel coded to the client's matter and marked billable",
        "Left off the books until the client has repaid the firm"
      ],
      "a": 2,
      "r": "Client-related costs are coded to the matter and marked billable so they're recovered on the invoice. Plain 'Travel' loses the cost, and it's neither personal nor something to leave unrecorded."
    },
    {
      "q": "During a pre-bill review you find a time entry billed at last year's rate. What should you do?",
      "opts": [
        "Change the rate yourself, since the engagement letter clearly states the new one",
        "Send the invoice as is, because the client agreed to the old rate before",
        "Delete the entry so the client isn't charged the wrong amount at all",
        "Flag it to the attorney with the entry date, the rate shown and the correct rate"
      ],
      "a": 3,
      "r": "The assistant flags errors with specifics and the attorney (or timekeeper) corrects them. Editing, deleting or ignoring the entry all skip that decision."
    },
    {
      "q": "A corporate client requires invoices through its e-billing portal. What happens if you email the invoice as a PDF instead?",
      "opts": [
        "It's accepted, since the invoice amount and details are identical",
        "It usually isn't treated as received, so payment is delayed",
        "The portal converts the emailed PDF into LEDES automatically",
        "The client pays it and simply notes the format for next time"
      ],
      "a": 1,
      "r": "E-billing clients generally only process invoices submitted through their portal in the required format, so an emailed PDF typically isn't treated as received."
    },
    {
      "q": "A client's invoice will be paid from their retainer in the trust account. What must happen before money moves to the operating account?",
      "opts": [
        "Nothing extra, since the retainer was paid for exactly this purpose",
        "The client must pay the invoice by card, then get a refund from trust",
        "The bookkeeper can move it once the month-end close is finished",
        "Attorney approval, matched to the invoice and recorded on the ledger"
      ],
      "a": 3,
      "r": "Moving trust money needs the attorney's approval, an invoice for earned fees and a ledger record. A retainer doesn't authorize automatic transfers, and timing alone isn't approval."
    }
  ],
  "discussionQuestion": "What's one financial process in your own work that runs on memory or habit rather than a documented SOP? What would happen if the person who normally does it were out sick for two weeks?"
};

const DAY7_EXTRA_LEARNING = {
  "7::The EA/PA's Role in Finance": {
    "t": "Where the EA/PA Touches the Money",
    "p": [
      "Accounts payable: collecting invoices, matching them to approvals, and routing for payment.",
      "Accounts receivable: preparing client invoices, tracking what's outstanding, and sending polite reminders on schedule.",
      "Expenses and reimbursements: gathering receipts, coding them to the right matter or cost center, and flagging anything outside policy.",
      "A typical week: Monday, check the card and bank activity from the weekend; Tuesday, route new vendor invoices for approval; Wednesday, send client invoices and payment reminders; Thursday, chase missing receipts; Friday, update the finance tracker and flag anything open to Elias.",
      "What you don't do: approve payments you entered, move money in or out of trust without the attorney's written instruction, or change payment details from an email alone.",
      "Your best habit is a written trail: who asked, who approved, when it was paid and where the receipt is. Nearly every finance question months later is answered by that trail."
    ]
  },
  "7::SOA Reconciliation": {
    "t": "A Worked Example",
    "p": [
      "Opening balance $4,000 + new invoices $6,500 − payments received $5,000 ± adjustments (credit note −$250) = closing balance $5,250.",
      "If the client's records show $5,000, look for the difference ($250) first — here, the credit note wasn't recorded on their side.",
      "Document the reconciliation (date, items matched, differences found, resolution) so the next month starts from an agreed opening balance.",
      "What a client statement of account shows: the opening balance, each invoice (number, date, amount), each payment received (date, amount, method), any credits or adjustments, and the closing balance due, plus aging (current, 30, 60, 90+ days).",
      "Common causes of a difference: a payment received after the statement date; a payment applied to the wrong invoice or client; a credit note one side didn't record; a bank or card fee deducted from the payment; a disputed invoice the client is withholding.",
      "When you send a reconciled statement, send it with a short note: the agreed closing balance, the items you found, and what happens next (for example, 'We've applied your June 3 payment to invoice 2041; the balance now due is $1,250')."
    ]
  },
  "7::What an SOP Actually Needs": {
    "t": "The Five Elements Explained",
    "p": [
      "Purpose: why the procedure exists. Scope: who and what it covers — and what it doesn't.",
      "Procedure: numbered steps anyone can follow. Controls: checks, approvals, and records that prove it was done correctly.",
      "Escalation: who to contact when something goes wrong, and by when. A good test: could a temp follow it on day one?",
      "Worked example, 'Processing a Vendor Invoice'. Purpose: pay only what was ordered and approved. Scope: every vendor invoice under $10,000 (larger ones follow the partner-approval SOP).",
      "Procedure: 1) log the invoice in the tracker; 2) match it to the purchase order or signed quote; 3) get the budget owner's approval in writing; 4) enter it in QuickBooks with the right category and matter; 5) schedule payment by the due date.",
      "Controls: the person who enters it can't approve it, and the approval email is attached to the bill. Escalation: any mismatch over $50, or any change to the vendor's bank details, goes to the office manager the same day."
    ]
  },
  "7::The Financial Calendar": {
    "t": "Typical Recurring Financial Deadlines (US)",
    "p": [
      "Monthly: client invoicing, month-end close, bank and trust account reconciliation.",
      "Quarterly: estimated tax payments (generally April, June, September, and January) and quarterly payroll filings.",
      "Annually: 1099/W-2 issuance (end of January), year-end close, and business license or registration renewals. Confirm exact dates with the firm's accountant each year.",
      "Federal estimated tax payments are generally due April 15, June 15, September 15 and January 15. Quarterly payroll returns (Form 941) are generally due April 30, July 31, October 31 and January 31. Forms 1099-NEC and W-2 go out by January 31.",
      "Month-end close checklist: all invoices sent, all bills entered, bank and card accounts reconciled, trust accounts reconciled, uncategorized transactions cleared, then reports sent to the accountant.",
      "Put the reminder on the calendar with the task, the owner and where the paperwork lives, not just the word 'taxes'. A reminder that says what to do gets done."
    ]
  },
  "7::Billing & Invoicing": {
    "t": "Anatomy of a Clean Invoice",
    "p": [
      "Header: firm details, client name, matter number, invoice number, and invoice date.",
      "Body: itemized entries (date, description, hours, rate) plus expenses, with any discount shown as its own line.",
      "Footer: total due, due date, payment terms (e.g., Net 30), accepted payment methods, and late-fee terms if they apply."
    ]
  },
  "7::QuickBooks How-Tos — Step by Step": {
    "t": "The Four Everyday Workflows",
    "p": [
      "Create an invoice: + New → Invoice → select customer → add products/services → set terms and due date → Save and send.",
      "Record a payment: + New → Receive payment → select customer → apply to the matching open invoice → Save.",
      "Enter a bill and reconcile: + New → Bill for vendor invoices; Settings → Reconcile monthly against the bank statement. (Menu names may vary slightly by QuickBooks version.)"
    ]
  },
  "7::Contract-Aware Billing": {
    "t": "Contract Terms to Check Before Billing",
    "p": [
      "Billing arrangement: hourly, flat fee, contingency, or retainer — each changes what goes on the invoice.",
      "Caps and budgets: any hour cap or fee estimate the client agreed to, and the notice required before exceeding it.",
      "Payment and late-fee terms: due dates, interest on late payments, and any required invoice format or billing codes (common with corporate clients)."
    ]
  },
  "7::Bookkeeping Basics & Compliance": {
    "t": "Core Bookkeeping Concepts",
    "p": [
      "Double-entry: every transaction affects at least two accounts (e.g., cash up, revenue up), which is what makes errors detectable.",
      "Cash vs. accrual: cash basis records when money moves; accrual records when it's earned or owed. Know which your firm uses.",
      "Chart of accounts: the categorized list of accounts every transaction is coded to — consistent coding is what makes reports trustworthy.",
      "A simple law-firm chart of accounts: Income (legal fees, reimbursed costs); Cost of services (court fees, expert fees, court reporters); Operating expenses (rent, software, insurance, marketing, travel); Assets (operating bank account, accounts receivable); Liabilities (credit cards, payroll taxes due, client trust funds held).",
      "Cash vs. accrual in practice: you finish $5,000 of work in March and the client pays in April. On a cash basis, the $5,000 is April income. On an accrual basis, it's March income, and it sits in accounts receivable until April.",
      "Coding rule of thumb: if you're choosing between two categories, pick the one the accountant used last time for the same vendor, and note any new vendor for their review."
    ]
  },
  "7::Financial KPIs for EAs/PAs": {
    "t": "KPI Formulas You Can Actually Use",
    "p": [
      "Invoice turnaround = the date the invoice was sent minus the date the work (or the month) ended. Target: 1–3 days.",
      "Collection rate = money collected ÷ money billed in the period × 100. A falling rate means invoices are going out but not getting paid.",
      "Days sales outstanding (DSO) = accounts receivable ÷ total billed in the period × number of days in the period. It's roughly how many days clients take to pay.",
      "Utilization = billable hours ÷ available working hours × 100, per person. Realization = amount billed ÷ value of the time recorded × 100. Low realization means time is being written off.",
      "Retainer runway = remaining retainer ÷ average monthly billing. Under one month of runway is the point to ask for a top-up."
    ]
  },
  "7::Reading Basic Financial Statements": {
    "t": "Reading a Law Firm's Reports",
    "p": [
      "P&L lines you'll see: legal fee income; reimbursed client costs; salaries and payroll taxes; rent; software and subscriptions; insurance (including malpractice); marketing; travel. Net income is what's left.",
      "Balance sheet lines you'll see: operating cash; accounts receivable; equipment; credit card balances; payroll taxes owed; loans. Client trust money is tracked separately and is never the firm's cash.",
      "Three questions to ask every month: Which line moved the most, and why? How much do clients owe, and how much is over 60 days old? Is there enough cash for the next month's payroll and rent?",
      "Bring the accountant specifics, not impressions: 'Travel was $4,800 in August, against a usual $1,200. Is that the Chicago trial?'"
    ]
  }
};

(window.EA_DAY_FILES = window.EA_DAY_FILES || {})[7] = { day: DAY7, extraLearning: DAY7_EXTRA_LEARNING };
