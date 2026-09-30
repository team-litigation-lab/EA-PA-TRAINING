/* Day 7 — trainer speaker notes for Presenter view, Admin → Trainer Cues and the Speaker Notes PDF.
   Written by hand for each slide, keyed "<day>::<topic title>".
   p1 = the topic's first slide, p2 = its second slide (Best Practices & Pitfalls).
   Each has "on" (what is on this slide, 2–3 sentences) and the script: say / ask (p1) or say / wrap (p2),
   plus the scenario for the room on p2. A single-slide topic shows p1 with p2's wrap and scenario.
   s1…s4 = section scripts for ① Core Principles, ② Step-by-Step, ③ Best Practices, ④ Go Deeper:
   when a slide is split over pages, Presenter view shows only the sections on the current page.
   steps = the full Step-by-Step script (numbered lines, read aloud); Presenter view shows it whenever
   the Step-by-Step section is on screen, and the Speaker Notes PDF includes it.
   Nothing here is generated at run time. */
window.PRESENTER_NOTES = Object.assign(window.PRESENTER_NOTES || {}, {
"7::The EA/PA's Role in Finance": {
  "p1": {
    "on": "This slide says financial tasks (invoices, expenses and reimbursements) make the EA/PA a real link in the firm's financial accuracy. The steps: double-check figures before passing anything along, log and track financial tasks like any recurring work, flag anything that looks off instead of assuming someone will catch it, and know where your task sits in the chain.",
    "say": "You're a link in the chain, not filing that happens to touch numbers.",
    "ask": "Who here has done any bookkeeping or invoicing?"
  },
  "p2": {
    "on": "This slide shows where the EA/PA touches the money. Accounts payable: collecting invoices, matching them to approvals and routing for payment. Accounts receivable: preparing invoices, tracking what's outstanding and sending reminders. Expenses and reimbursements: gathering receipts, coding them to the right matter and flagging anything outside policy.",
    "say": "A transposed number here causes problems further down the chain.",
    "wrap": "Check the figures, track the task and flag what looks wrong.",
    "scenario": "A vendor invoice for $1,850 arrives, but the approved purchase order says $1,580. What do you do before it goes anywhere near payment?"
  },
  "s1": {
    "on": "This section says financial tasks (invoices, expenses, reimbursements) make the EA/PA a real link in the firm's financial accuracy.",
    "say": "You're a link in the chain."
  },
  "s2": {
    "on": "These steps practice it: treat each task as real, double-check figures, track tasks like other recurring work, flag anything odd, and know what depends on you.",
    "say": "Double-check before passing it on."
  },
  "s3": {
    "on": "This section's reminder: this is a real link in the chain, not filing that happens to touch numbers.",
    "say": "Not just filing."
  },
  "s4": {
    "on": "This section lists the three areas: accounts payable, accounts receivable, and expenses and reimbursements.",
    "say": "Payable, receivable, reimbursements.",
    "ask": "Which of the three will you handle most?"
  }
},
"7::SOA Reconciliation": {
  "p1": {
    "on": "This slide teaches the Statement of Account reconciliation order: start from the opening balance, add invoices, subtract payments and apply adjustments to reach the closing balance. If revenue doesn't match deposits, compare bank statements with revenue records first, work backward from the figures that don't reconcile, tie out exactly, and document every adjustment.",
    "say": "Opening plus invoices, minus payments, plus or minus adjustments, equals closing.",
    "ask": "Why not rebuild every report when something doesn't match?"
  },
  "p2": {
    "on": "This slide shows the formula and a worked example: $4,000 opening + $6,500 invoices − $5,000 payments − $250 credit note = $5,250 closing. If the client's records show $5,000, look for the $250 difference first; here, the credit note wasn't recorded on their side. Document the reconciliation so next month starts from an agreed balance.",
    "say": "Start from the difference and find what explains it.",
    "wrap": "Work the formula in order, tie out exactly and document the result.",
    "scenario": "On the board: opening $3,200, invoices $4,800, payments $6,000, and a $150 late fee added. What's the closing balance? The client says they owe $1,850. Where do you look first?"
  },
  "s1": {
    "on": "This section gives the formula: Opening + Invoices − Payments ± Adjustments = Closing Balance.",
    "say": "One formula, every time."
  },
  "s2": {
    "on": "These steps work it: apply the formula in order, compare bank statements with revenue records first, work back from the mismatch, tie out exactly, and document adjustments.",
    "say": "Don't round away a variance."
  },
  "s3": {
    "on": "This section restates the formula and the shortcut: compare bank statements against revenue records before rebuilding reports.",
    "say": "Start at the mismatch."
  },
  "s4": {
    "on": "This section works an example: $4,000 + $6,500 − $5,000 − $250 credit = $5,250, and the $250 gap is the unrecorded credit note.",
    "say": "Find the difference first.",
    "ask": "Where would you look if the client shows $5,000?"
  }
},
"7::Reconciliation Discrepancy Detection": {
  "p1": {
    "on": "This slide lists detection techniques: compare the ledger with the bank statement line by line, confirm credits went to the right client, look for reversed entries that hide errors, run the full checklist, and apply duplicate-payment checks (system detection, manual verification and approval thresholds).",
    "say": "Line by line, not just the totals.",
    "ask": "If a reconciliation came up $340 short, what would you check first?"
  },
  "p2": {
    "on": "This slide gives the checklist: all invoices listed, all payments recorded, no unmatched balances, every variance explained. It cites a real case where a payment applied to the wrong client led to a legal dispute, which is why duplicate-payment prevention matters.",
    "say": "A payment on the wrong client can become a legal dispute.",
    "wrap": "Compare line by line, check where credits landed and explain every variance.",
    "scenario": "Your reconciliation is $340 short. Walk through the checklist in order and name the three most likely causes."
  },
  "s1": {
    "on": "This section lists techniques: ledger against bank statement, correctly applied credits, and reversed entries.",
    "say": "Three places to look."
  },
  "s2": {
    "on": "These steps detect it: line-by-line comparison, credits checked against the right party, reversed entries found, the full checklist, and duplicate-payment checks.",
    "say": "Line by line, not just totals."
  },
  "s3": {
    "on": "This section gives the checklist (invoices listed, payments recorded, no unmatched balances, variances explained) and a real case where a misapplied payment led to a legal dispute.",
    "say": "A wrong-client credit became a lawsuit."
  }
},
"7::Credit Cards & Card Applications": {
  "p1": {
    "on": "This slide covers credit cards, with a diagram: put due dates on a real calendar, review the statement before paying it, gather exactly the documents a card application asks for and follow the issuer's process, and organize tax-relevant receipts throughout the year. The test: a request for the last 90 days of receipts should be a quick retrieval.",
    "say": "Review the statement before you pay it.",
    "ask": "If the accountant asked for every receipt from the last 90 days, how fast could you deliver?"
  },
  "p2": {
    "on": "This slide says credit card payments follow the same discipline as every recurring payment: a due-date calendar and a statement review. For card applications, the EA's job is precision: exactly what's requested, not more or less, following the issuer's process.",
    "say": "Precision on applications: exactly what they ask for.",
    "wrap": "Calendar the due dates, review before paying and keep receipts organized all year.",
    "scenario": "Reviewing Elias's card statement, you spot a $129 charge from an unfamiliar merchant and a hotel charged twice for the same night. What do you do before paying the bill?"
  },
  "s1": {
    "on": "This section covers three areas: card payments on a real calendar, precise card applications, and year-round tax records.",
    "say": "Payments, applications, tax records."
  },
  "s2": {
    "on": "These steps are the discipline: due dates on the calendar, statement review before paying, exactly the documents requested, records organized as they happen, and the 90-day receipt test.",
    "say": "Could you pull 90 days of receipts right now?"
  },
  "s3": {
    "on": "This section says card payments follow the same recurring discipline, and applications need precision, not 'close enough'.",
    "say": "Close enough causes delays."
  }
},
"7::Tax Season Support & Working with Accountants": {
  "p1": {
    "on": "This slide says the real value in tax season is organizing receipts, invoices and records all year, with a diagram. The steps: file and categorize records as they arrive, treat accountant requests as quick retrievals, be the reliable point of contact who can answer \"do you have X\" fast, link this to reconciliation, and build a daily or weekly filing habit.",
    "say": "Tax season is easy if you've filed all year.",
    "ask": "What does a daily receipt habit actually look like?",
    "wrap": "Organize continuously so every accountant request is a retrieval, not a reconstruction.",
    "scenario": "The accountant emails asking for all charitable donation receipts and every home-office expense from last year, by Friday. If you've kept records continuously, what does that take? If you haven't, what does it take?"
  },
  "p2": {
    "on": "",
    "say": "",
    "wrap": "Organize continuously so every accountant request is a retrieval, not a reconstruction.",
    "scenario": "The accountant emails asking for all charitable donation receipts and every home-office expense from last year, by Friday. If you've kept records continuously, what does that take? If you haven't, what does it take?"
  },
  "s1": {
    "on": "This section says tax support is a year-round task: organize continuously so the accountant's request is a retrieval, not a reconstruction.",
    "say": "Retrieve, don't reconstruct."
  },
  "s2": {
    "on": "These steps do it: file records as they arrive, answer requests quickly, be the reliable point of contact, link it to reconciliation, and build a weekly habit.",
    "say": "A small weekly habit beats a yearly scramble.",
    "ask": "What would your weekly filing pass include?"
  }
},
"7::What an SOP Actually Needs": {
  "p1": {
    "on": "This slide lists the five elements of an SOP: Purpose (why it exists), Scope (who it applies to), Procedure (the step-by-step actions), Controls (verification built into the process) and Escalation (when and how to report issues).",
    "say": "Purpose, Scope, Procedure, Controls, Escalation.",
    "ask": "Have you ever had to follow a process that wasn't written down anywhere?"
  },
  "p2": {
    "on": "This slide explains each element. Scope covers what the SOP doesn't include as well as what it does, Procedure is numbered steps anyone can follow, Controls are the checks and records that prove it was done right, and Escalation says who to contact and by when. The test: could a temp follow it on day one? Without SOPs, execution is inconsistent, which audits catch.",
    "say": "Could a temp follow it on day one?",
    "wrap": "Five elements, numbered steps and controls that prove it was done.",
    "scenario": "Draft the five elements, one line each, for an SOP on processing a client's expense reimbursement."
  },
  "s1": {
    "on": "This section says the SOP elements are sequential: follow them in order.",
    "say": "Five elements, in order."
  },
  "s2": {
    "on": "These steps are the elements: Purpose, Scope, Procedure, Controls and Escalation.",
    "say": "Purpose, Scope, Procedure, Controls, Escalation."
  },
  "s3": {
    "on": "This section restates the five and warns that without SOPs execution is inconsistent, which audits catch.",
    "say": "Audits catch inconsistency."
  },
  "s4": {
    "on": "This section explains each element and gives the test: could a temp follow it on day one?",
    "say": "Could a temp follow it?"
  }
},
"7::The Financial Calendar": {
  "p1": {
    "on": "This slide says to track billing cycles, tax deadlines and monthly closes on one continuous calendar. The steps: set automated reminders 7–10 days before each deadline, review weekly, add extra buffer around whichever category usually slips, and confirm each deadline's requirements haven't changed since the last cycle.",
    "say": "One calendar, reminders 7–10 days out.",
    "ask": "Which of billing, tax or closes would you most likely let slip?"
  },
  "p2": {
    "on": "This slide lists typical US financial deadlines. Monthly: client invoicing, month-end close, bank and trust reconciliation. Quarterly: estimated taxes (generally April, June, September and January) and payroll filings. Annually: 1099s and W-2s by end of January, year-end close and license renewals. Confirm exact dates with the accountant each year.",
    "say": "Confirm the exact dates with the accountant every year.",
    "wrap": "One calendar, early reminders and a weekly review.",
    "scenario": "Build the next 90 days of the firm's financial calendar: which monthly, quarterly and annual items land in that window, and when does each reminder fire?"
  },
  "s1": {
    "on": "This section's rule: track billing cycles, tax deadlines and monthly closes continuously.",
    "say": "One continuous calendar."
  },
  "s2": {
    "on": "These steps run it: one calendar, reminders 7–10 days ahead, weekly review, extra buffer for the category that slips, and a check for changed requirements.",
    "say": "Seven to ten days' warning."
  },
  "s3": {
    "on": "This section's key habit: automated reminders 7–10 days before each deadline.",
    "say": "Lead time to fix issues."
  },
  "s4": {
    "on": "This section lists the rhythm: monthly invoicing, close and reconciliations; quarterly estimated taxes and payroll filings; annual 1099/W-2s, year-end close and renewals.",
    "say": "Confirm exact dates with the accountant."
  }
},
"7::Billing & Invoicing": {
  "p1": {
    "on": "This slide teaches invoice math: rate × hours, plus expenses, minus any discount. The steps: make sure every invoice states the amount due, due date and payment terms, check rate and hours against the engagement terms, re-check the math before sending, and send promptly, because an unsent invoice doesn't help cash flow.",
    "say": "Rate times hours, plus expenses, minus discount.",
    "ask": "What three things must every invoice state?"
  },
  "p2": {
    "on": "This slide shows the anatomy of a clean invoice. Header: firm details, client, matter number, invoice number and date. Body: itemized entries (date, description, hours, rate) and expenses, with any discount on its own line. Footer: total, due date, payment terms such as Net 30, payment methods and late-fee terms.",
    "say": "The discount gets its own line, so the client can see it.",
    "wrap": "Check the terms, check the math and send promptly.",
    "scenario": "Live: 12.5 hours at $350 an hour, $240 in filing fees and a 10% courtesy discount on fees only. Call out each step. What's the total, and what else must the invoice say?"
  },
  "s1": {
    "on": "This section gives the formula: (Rate × Hours) + Expenses, then apply any discount.",
    "say": "Rate times hours, plus expenses, minus discount."
  },
  "s2": {
    "on": "These steps finalize it: calculate in order, include amount, due date and terms, check rate and hours against the engagement, recheck the math, and send promptly.",
    "say": "An unsent invoice doesn't help cash flow."
  },
  "s3": {
    "on": "This section restates the formula and the three must-haves: amount due, due date and payment terms.",
    "say": "Three must-haves."
  },
  "s4": {
    "on": "This section lays out the invoice: header with firm, client, matter and invoice details, itemized body with a separate discount line, and footer with total, due date and terms.",
    "say": "Header, body, footer."
  }
},
"7::QuickBooks How-Tos — Step by Step": {
  "p1": {
    "on": "This slide walks through four QuickBooks tasks. Create an Invoice: + New → Invoice, then client, line items, review and Save and Send. Record an Expense: + New → Expense, then payee, category, receipt and Save. Reconcile an Account: Accounting → Reconcile and check off matches until the difference is $0.00. Run an AR Aging Report and look at the 61–90 and 90+ columns first.",
    "say": "Four workflows cover most of what you'll touch.",
    "ask": "Which of these have you done before?"
  },
  "p2": {
    "on": "This slide says these four tasks cover most of an EA's day-to-day QuickBooks work. It lists the everyday workflows: create an invoice, record a payment against the matching open invoice, enter vendor bills, and reconcile monthly against the bank statement. Menu names can vary slightly by version.",
    "say": "You don't need the whole platform, just these workflows.",
    "wrap": "Learn the four click-paths, and reconcile to exactly $0.00.",
    "scenario": "Screen-share if you have access: create one invoice and reconcile one account live, then have a volunteer repeat the invoice click-path from memory."
  },
  "s1": {
    "on": "This section says the QuickBooks workflows are sequential: follow the steps as written.",
    "say": "Four workflows."
  },
  "s2": {
    "on": "These steps are the workflows: create an invoice, record an expense with its receipt, reconcile to $0.00, and run AR Aging, checking the 61–90 and 90+ columns first.",
    "say": "Reconcile to exactly zero.",
    "ask": "Which AR Aging columns need calls first?"
  },
  "s3": {
    "on": "This section says these four tasks cover most of what an EA does in QuickBooks.",
    "say": "Know these four cold."
  },
  "s4": {
    "on": "This section adds three quick paths: create an invoice, receive a payment against its open invoice, and enter bills and reconcile monthly.",
    "say": "Menu names vary by version."
  }
},
"7::QuickBooks Common Mistakes & Tips": {
  "p1": {
    "on": "This slide says the most common new-user mistake is miscategorizing an expense, such as filing a client-reimbursable cost as general office expense. The steps: confirm the category and ask when unsure, look for a missing or duplicate transaction when reconciliation isn't $0.00, check invoices against the engagement letter, remember that QuickBooks Online saves automatically, and review entries for patterns.",
    "say": "Miscategorization is the most common mistake. Ask when unsure.",
    "ask": "What percentage of errors do you think come from miscategorizing?"
  },
  "p2": {
    "on": "This slide says reconciliation only finishes at exactly $0.00, and the fix is usually a missing or duplicate transaction, not adjusting an unrelated entry. QuickBooks will happily invoice the wrong rate, so check against the contract. In QuickBooks Online, a wrong entry needs an edit or journal entry, because there's no undo.",
    "say": "Never force a reconciliation by adjusting an unrelated entry.",
    "wrap": "Categorize carefully, reconcile to $0.00 and check invoices against the contract.",
    "scenario": "Your reconciliation shows a $62.50 difference. A colleague suggests adjusting the office supplies line to make it balance. What do you say, and what do you look for instead?"
  },
  "s1": {
    "on": "This section names the most common mistake: miscategorizing an expense, like a client-reimbursable cost filed as office expense.",
    "say": "Ask before you categorize."
  },
  "s2": {
    "on": "These steps avoid mistakes: confirm categories, find the missing or duplicate transaction when it isn't $0.00, check invoices against the engagement letter, remember QuickBooks Online saves automatically, and review for patterns.",
    "say": "Never force the numbers."
  },
  "s3": {
    "on": "This section explains the $0.00 rule, checking against the engagement letter, and that QuickBooks Online needs an edit or journal entry, not an undo.",
    "say": "No Ctrl+Z in QuickBooks Online."
  }
},
"7::Contract-Aware Billing": {
  "p1": {
    "on": "This slide says to know payment terms, late fees and hour caps before billing begins. The steps: confirm terms at the start of the matter, track hours against any cap continuously, flag an approaching cap well before it's reached, apply late fees and terms exactly as written, and confirm the interpretation of ambiguous terms before billing.",
    "say": "Know the cap before you start, and flag it before you hit it.",
    "ask": "What would you do at 80% of an hour cap?"
  },
  "p2": {
    "on": "This slide lists the contract terms to check before billing: the billing arrangement (hourly, flat fee, contingency or retainer), caps and budgets with any notice required before exceeding them, and payment and late-fee terms, including invoice formats or billing codes corporate clients may require.",
    "say": "Corporate clients often require specific billing codes.",
    "wrap": "Read the contract first, track caps continuously and apply terms consistently.",
    "scenario": "The Harlow matter has a 40-hour cap with notice required at 80%. Time entries show 34.5 hours logged. What do you do today, and who do you tell?"
  },
  "s1": {
    "on": "This section's rule: know payment terms, late fees and hour caps before billing starts.",
    "say": "Know the terms first."
  },
  "s2": {
    "on": "These steps bill to the contract: confirm terms up front, track hours against caps, flag an approaching cap early, apply terms consistently, and clarify ambiguity first.",
    "say": "Flag the cap before you hit it."
  },
  "s3": {
    "on": "This section's key point: flag an approaching hour cap proactively.",
    "say": "No surprises over the cap."
  },
  "s4": {
    "on": "This section lists what to know: billing arrangement, caps and required notice, and payment, late-fee and format terms.",
    "say": "The arrangement changes the invoice."
  }
},
"7::Financial KPIs for EAs/PAs": {
  "p1": {
    "on": "This slide lists the financial KPIs: Invoice Turnaround Time (24–72 hours from service to invoice sent), Reconciliation Accuracy (98–100%) and a retainer alert at 25% remaining. The steps: track each against its target, review on a fixed cadence, and examine the underlying process when a KPI keeps missing.",
    "say": "Invoice within 72 hours, reconcile at 98% or better, alert at 25% retainer.",
    "ask": "Why set the retainer alert at 25% instead of zero?"
  },
  "p2": {
    "on": "This slide repeats the targets and explains the callout: an alert when a client retainer drops below 25% gives enough runway to act before the account runs dry. DSO and the retainer threshold are the metrics most likely to be new to trainees.",
    "say": "The 25% alert buys runway.",
    "wrap": "Track against targets, review on a cadence and fix the process when a KPI slips.",
    "scenario": "A client's $10,000 retainer is at $2,300 and they have a hearing next week. What does the KPI say you should have done already, and what do you do now?"
  },
  "s1": {
    "on": "This section's first KPI: invoice turnaround of 24–72 hours from service to invoice sent.",
    "say": "Invoice within 72 hours."
  },
  "s2": {
    "on": "These steps track them: turnaround against target, 98–100% reconciliation accuracy, a 25% retainer alert, fixed-cadence review, and process fixes when a KPI keeps missing.",
    "say": "Fix the process, not the effort."
  },
  "s3": {
    "on": "This section gives the other targets: 98–100% reconciliation accuracy and an alert when a retainer drops below 25%.",
    "say": "Set the retainer alert early."
  }
},
"7::Bookkeeping Basics & Compliance": {
  "p1": {
    "on": "This slide says to classify every transaction as income, expense or receivable. The steps: classify at the time of recording, keep an audit trail (who, when, what source document), segregate duties so you never approve your own transactions, reconcile regularly, and flag compliance gaps immediately.",
    "say": "Never approve your own transaction.",
    "ask": "Why does segregation of duties matter even in a small office?"
  },
  "p2": {
    "on": "This slide covers core concepts. Double-entry: every transaction touches at least two accounts, which makes errors detectable. Cash versus accrual: cash records when money moves, accrual when it's earned or owed. Chart of accounts: the categorized list every transaction is coded to; consistent coding makes reports trustworthy.",
    "say": "Know whether your firm is cash or accrual.",
    "wrap": "Classify, keep the audit trail, separate duties and reconcile.",
    "scenario": "You're asked to both enter and approve a $2,400 vendor payment because the usual approver is out. What do you do, and what do you suggest for next time?"
  },
  "s1": {
    "on": "This section's rule: classify every transaction as income, expense or receivable.",
    "say": "Classify every transaction."
  },
  "s2": {
    "on": "These steps keep books clean: classify when recording, keep an audit trail, segregate duties, reconcile regularly, and flag compliance gaps.",
    "say": "Never approve your own transactions."
  },
  "s3": {
    "on": "This section's warning: keep audit trails and segregate duties.",
    "say": "Separation keeps it honest."
  },
  "s4": {
    "on": "This section explains double-entry, cash vs. accrual, and the chart of accounts.",
    "say": "Know whether your firm is cash or accrual."
  }
},
"7::Quarterly Tax Schedules": {
  "p1": {
    "on": "This slide says businesses paying estimated taxes quarterly work against a fixed calendar, and missing a date means penalty exposure; this is calendar discipline for compliance. The steps: log all four deadlines with reminders at the start of the year, confirm the amount and documents with the accountant well ahead, and keep a record of each payment confirmation.",
    "say": "Four separate deadlines, each with its own lead time.",
    "ask": "Who confirms the payment amount, and when?"
  },
  "p2": {
    "on": "This slide warns against treating quarterly estimated taxes as one annual concern instead of four separate deadlines. It says to coordinate with the accountant early so the amount isn't a last-minute scramble.",
    "say": "Ask the accountant early, not the week of.",
    "wrap": "Calendar all four, confirm early and keep the confirmations.",
    "scenario": "It's ten days before a quarterly estimated tax deadline, and you haven't heard from the accountant about the amount. What do you do?"
  },
  "s1": {
    "on": "This section says quarterly estimated taxes have fixed dates with penalty exposure, and uses the same redundant reminders as court deadlines.",
    "say": "Four separate deadlines."
  },
  "s2": {
    "on": "These steps manage them: log all four at the start of the year with reminders, confirm readiness with the accountant early, and keep payment confirmations.",
    "say": "Confirm with the accountant ahead of time."
  },
  "s3": {
    "on": "This section warns against treating them as one annual concern, and asks to coordinate with the accountant early.",
    "say": "Four deadlines, four preparations."
  }
},
"7::W-9/1099 Audits & Filing Deadlines": {
  "p1": {
    "on": "This slide says businesses paying contractors or vendors above a threshold have deadline-bound 1099 obligations that depend on accurate W-9s, and an audit confirms every required W-9 is on file and current. The steps: collect a W-9 before the first payment, audit the vendor list against the W-9 file periodically, and track the 1099 deadline with real lead time.",
    "say": "W-9 before the first payment, not after.",
    "ask": "Which vendors are easiest to miss?"
  },
  "p2": {
    "on": "This slide warns against checking for missing W-9s only when the 1099 deadline is close, because chasing a vendor then is a real time crunch. It says to keep W-9s secure, since they contain sensitive tax information.",
    "say": "W-9s hold sensitive tax data. Store them securely.",
    "wrap": "Collect up front, audit periodically and give the deadline lead time.",
    "scenario": "Preparing for the 1099 deadline, you find one vendor paid above the threshold never submitted a W-9. What do you do now, with the deadline approaching?"
  },
  "s1": {
    "on": "This section says 1099 filings depend on accurate W-9s collected ahead of time, and a W-9 audit is a preventive check.",
    "say": "W-9s first, 1099s later."
  },
  "s2": {
    "on": "These steps run it: collect a W-9 before the first payment, audit vendors against the W-9 file, and track the 1099 deadline with lead time.",
    "say": "No W-9, no payment."
  },
  "s3": {
    "on": "This section warns against checking only near the deadline, and asks to secure W-9s as confidential.",
    "say": "They hold sensitive tax data."
  }
},
"7::Real-Time Time Tracking for Billable Work": {
  "p1": {
    "on": "This slide says real-time tracking means logging billable work as it happens, and here the time becomes a client invoice, so accuracy has direct consequences. The steps: log during or right after the work, record enough detail to support the invoice line (what was done, for which matter), and reconcile logged time against the billing calendar regularly.",
    "say": "Billable time becomes the client's invoice, so log it now.",
    "ask": "How accurate is time you reconstruct at the end of the week?"
  },
  "p2": {
    "on": "This slide warns that reconstructed entries are measurably less accurate, and inaccurate billable time is a real problem. It links to contract-aware billing: accurate time tracking is the input to accurate billing.",
    "say": "Accurate time is the input to accurate billing.",
    "wrap": "Log in real time, with detail, and reconcile before invoicing.",
    "scenario": "It's the end of a busy day and you haven't logged time for several tasks. How do you reconstruct it as accurately as possible, and what do you change tomorrow?"
  },
  "s1": {
    "on": "This section says billable time must be logged as it happens because it becomes a client invoice, which raises the accuracy bar.",
    "say": "It becomes the invoice."
  },
  "s2": {
    "on": "These steps practice it: log as you go, add enough detail for the invoice line, and reconcile against the billing calendar.",
    "say": "Enough detail to support the line item."
  },
  "s3": {
    "on": "This section warns that reconstructed entries are less accurate, and ties this to contract-aware billing.",
    "say": "Accurate time makes accurate billing."
  }
},
"7::Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk": {
  "p1": {
    "on": "This slide explains that an IOLTA holds client funds (retainers, settlement proceeds, advance costs) that belong to the client or a third party. Commingling them with firm operating funds, even briefly or by accident, is one of the most serious ethics violations. The steps: keep trust and operating accounts separate, move funds only on a documented trigger, and keep a running ledger per client.",
    "say": "Client money is never firm money until it's earned.",
    "ask": "What counts as a documented trigger to move trust funds?"
  },
  "p2": {
    "on": "This slide warns that a trust account must never go negative for any client, even temporarily, and a shortfall is never a cash-flow problem to fix later. It says any trust transaction should feel slower and more deliberate than a normal one, and that friction is intentional.",
    "say": "The friction on trust transactions is intentional.",
    "wrap": "Separate accounts, documented triggers and a ledger per client.",
    "scenario": "The trust account balance for one specific client is $200 lower than the ledger says it should be. What's your first move, and who needs to know before you do anything else?"
  },
  "s1": {
    "on": "This section explains IOLTA: client funds that aren't the firm's; commingling is a serious ethics violation; money leaves only when earned or disbursed.",
    "say": "Client money is never firm money."
  },
  "s2": {
    "on": "These steps protect it: separate accounts, withdrawals only on a documented trigger, and a running ledger per client.",
    "say": "Every withdrawal needs a documented trigger."
  },
  "s3": {
    "on": "This section warns that a trust balance must never go negative for any client, even briefly, and says the extra friction is intentional.",
    "say": "Slow and deliberate on purpose.",
    "ask": "Why can't you borrow from trust for a day?"
  }
},
"7::Trust Account Reconciliation Discipline": {
  "p1": {
    "on": "This slide says trust reconciliation confirms three numbers match: the bank statement balance, the trust ledger and the sum of every client sub-ledger. It happens at least monthly and after any unusual transaction, and any discrepancy is resolved to the specific transaction. The steps: reconcile on a fixed schedule, cross-check the ledger against the sub-ledgers, and document every reconciliation, even clean ones.",
    "say": "Three numbers, and all three must match.",
    "ask": "Why document a clean reconciliation?"
  },
  "p2": {
    "on": "This slide warns that the account can balance overall while one client's funds are wrong, so reconcile each client's sub-ledger. Any discrepancy is escalated immediately, whatever the size: a one-dollar unexplained difference gets the same seriousness as a large one.",
    "say": "A one-dollar difference gets escalated too.",
    "wrap": "Three-way reconcile on schedule, check every sub-ledger and escalate any difference.",
    "scenario": "This month the bank balance and trust ledger match, but one client's sub-ledger doesn't match what was deposited for them. Walk through how you'd trace it."
  },
  "s1": {
    "on": "This section defines the three-way match (bank statement, trust ledger, client sub-ledgers), at least monthly, with every discrepancy resolved.",
    "say": "Three numbers must match."
  },
  "s2": {
    "on": "These steps run it: reconcile on schedule, cross-check the ledger against the sub-ledger sum, and document every reconciliation.",
    "say": "Document even clean ones."
  },
  "s3": {
    "on": "This section warns that a balanced total can hide one client's shortfall, and says every discrepancy is escalated regardless of size.",
    "say": "One dollar gets the same urgency."
  }
},
"7::Expense Report Auditing & Approval Workflows": {
  "p1": {
    "on": "This slide says an expense audit confirms each expense is legitimate, documented and correctly categorized before reimbursement. A missing receipt means there's no independent confirmation, and approval workflows stop anyone approving their own expenses. The steps: check every line against its receipt, hold anything missing a receipt or business purpose, and route through the proper approval chain.",
    "say": "No receipt, no independent proof it happened.",
    "ask": "What three things should match between a line item and its receipt?"
  },
  "p2": {
    "on": "This slide warns against bulk-approving reports without reviewing the line items. It also says to watch for split transactions, one expense broken into smaller ones, a known pattern for getting around approval thresholds.",
    "say": "Split transactions are how thresholds get dodged.",
    "wrap": "Check every line, hold what's unsupported and route through the right approver.",
    "scenario": "An expense report shows a receipt for exactly $499, one dollar under the $500 threshold that needs extra approval. What do you do with that observation?"
  },
  "s1": {
    "on": "This section says audits confirm expenses are legitimate, documented and categorized, a missing receipt is a real issue, and workflows separate submitter from approver.",
    "say": "No receipt, no confirmation."
  },
  "s2": {
    "on": "These steps audit: match each line to its receipt, hold anything unsupported, and route through the proper approver.",
    "say": "Hold it until it's clear."
  },
  "s3": {
    "on": "This section warns against bulk approvals and watches for split transactions used to dodge thresholds.",
    "say": "Watch for splits."
  }
},
"7::Vendor Payment Terms & Cash Flow Timing": {
  "p1": {
    "on": "This slide says payment terms (Net 30, Net 60, due on receipt) shape cash flow. Paying early without a discount ties up cash, and paying late risks fees, relationships and service. The steps: confirm each vendor's actual terms, time payments to the terms unless there's a reason like an early-payment discount, and track due dates against expected inflows.",
    "say": "Pay on the terms, not on reflex.",
    "ask": "When is paying early worth it?"
  },
  "p2": {
    "on": "This slide warns against paying every invoice on receipt regardless of terms, which strains cash flow for no benefit. It says to flag any payment outside normal terms so it's a deliberate decision.",
    "say": "Early or late should always be a decision, never a default.",
    "wrap": "Know the terms, time payments to them and flag exceptions.",
    "scenario": "A Net 30 vendor invoice arrives, and the person who handles payments always pays within 48 hours \"to be safe.\" Is that the right call here, and what would you say?"
  },
  "s1": {
    "on": "This section says payment terms affect cash flow: early payment ties up cash unless there's a discount, and late payment carries fees and damage.",
    "say": "Pay on terms."
  },
  "s2": {
    "on": "These steps manage it: confirm each vendor's terms, pay on time, and track due dates against expected inflows.",
    "say": "Match payments to cash flow."
  },
  "s3": {
    "on": "This section warns against paying everything on receipt, and asks to flag off-terms payments as deliberate decisions.",
    "say": "Early or late is a decision."
  }
},
"7::Financial Record Retention Requirements": {
  "p1": {
    "on": "This slide says financial records (invoices, receipts, bank statements, trust records) have minimum retention periods that vary by document type and jurisdiction, you must be able to find a document on demand, and destroying one too early causes problems in audits and disputes. The steps: know each category's period, store records durably and searchably, and build retention dates into filing.",
    "say": "Keeping it isn't enough. You have to be able to find it.",
    "ask": "Do trust account records have a different retention period?"
  },
  "p2": {
    "on": "This slide warns that digital storage doesn't handle retention automatically, because files still get lost, misfiled or deleted. When unsure whether a retention period has passed, keep the record: over-retaining costs far less than needing a destroyed one.",
    "say": "When in doubt, keep it.",
    "wrap": "Know the periods, store records searchably and label retention dates.",
    "scenario": "During a records cleanup you find trust account records from several years ago. Before deleting anything to save space, what do you need to confirm first?"
  },
  "s1": {
    "on": "This section says retention periods vary by type and jurisdiction (trust records often longer), retention includes retrievability, and early destruction causes problems.",
    "say": "Keep it, and be able to find it."
  },
  "s2": {
    "on": "These steps manage it: know each category's period, use durable searchable storage, and build retention dates into filing.",
    "say": "Label the retention date when filing."
  },
  "s3": {
    "on": "This section warns that digital isn't automatically retained, and says: when in doubt, keep it.",
    "say": "Over-retaining is cheaper."
  }
},
"7::Handling a Billing Dispute": {
  "p1": {
    "on": "This slide says a billing dispute is a request for information, not an accusation; most come from misunderstandings. The backup documentation (time entries, receipts, engagement terms) is what resolves it, and how you handle it affects the relationship beyond the dollar amount. The steps: pull the documentation first, acknowledge promptly, and present the resolution with the supporting detail.",
    "say": "Pull the documentation before you reply.",
    "ask": "Why acknowledge before it's resolved?"
  },
  "p2": {
    "on": "This slide warns against responding defensively before pulling the documentation, which can turn a misunderstanding into a relationship problem. If the dispute reveals a real error, correct it plainly and promptly, because the relationship matters more than the original invoice.",
    "say": "If it's our error, fix it plainly and quickly.",
    "wrap": "Acknowledge fast, show the backup and correct real errors.",
    "scenario": "A client emails disputing a charge, saying it doesn't match what they remember agreeing to. What's your first move before responding?"
  },
  "s1": {
    "on": "This section frames a dispute as a request for information, resolved by documentation, and says handling affects the relationship beyond the dollars.",
    "say": "Information, not accusation."
  },
  "s2": {
    "on": "These steps resolve it: pull the documentation, acknowledge promptly, and present the resolution with the detail.",
    "say": "Show what the charge was based on.",
    "ask": "How would you reply to a client questioning a charge?"
  },
  "s3": {
    "on": "This section warns against defensiveness before checking, and says to correct real errors plainly.",
    "say": "The relationship beats the invoice."
  }
},
"7::Payroll Basics for EA/PA Support Roles": {
  "p1": {
    "on": "This slide says an EA/PA rarely runs payroll but touches its edges: onboarding paperwork, timesheets, reimbursements through payroll. Payroll deadlines don't move, and payroll data is some of the most sensitive information you'll handle. The steps: submit accurate timesheet data before the cutoff, treat payroll paperwork confidentially, and put payroll deadlines on the compliance calendar.",
    "say": "Payroll deadlines don't move, so your inputs can't be late.",
    "ask": "What payroll-adjacent tasks do you touch?"
  },
  "p2": {
    "on": "This slide warns against treating payroll tasks as low priority because it's \"someone else's system\": a late timesheet from you can still cause a missed paycheck. It says never to discuss or forward compensation details beyond the people who need them for the task.",
    "say": "Your late timesheet can become someone's missed paycheck.",
    "wrap": "Hit the cutoffs, protect the data and calendar the deadlines.",
    "scenario": "A new hire's onboarding paperwork is incomplete two days before the payroll cutoff for the next pay run. What do you do so they aren't accidentally missed?"
  },
  "s1": {
    "on": "This section says EAs touch payroll's edges, payroll deadlines don't move, and payroll data is highly sensitive.",
    "say": "The edges matter."
  },
  "s2": {
    "on": "These steps support it: accurate timesheets before cutoff, confidential handling of paperwork, and payroll deadlines on the compliance calendar.",
    "say": "Before the cutoff."
  },
  "s3": {
    "on": "This section warns that a late timesheet still delays payroll, and never to share compensation details beyond need.",
    "say": "Need-to-know only."
  }
},
"7::Fraud Red Flags in Financial Documents": {
  "p1": {
    "on": "This slide says most fraud shows up as small, plausible inconsistencies. A single red flag is often just an error, a pattern is real concern, and the EA/PA is often the first line of defense. The steps: watch for unfamiliar vendors, too-clean round numbers and duplicate invoice numbers, verify changed payment details through a separate verified channel, and escalate concerns promptly.",
    "say": "Verify changed bank details on a channel you already trust.",
    "ask": "Why isn't a request from the vendor's known email address enough?"
  },
  "p2": {
    "on": "This slide warns against privately explaining away each odd detail, because a pattern is only visible if anomalies get tracked. It says never to let one false alarm stop you raising the next concern: a false alarm costs far less than a missed one.",
    "say": "A false alarm is cheap. A missed fraud isn't.",
    "wrap": "Track anomalies, verify out of band and escalate early.",
    "scenario": "A long-standing vendor emails asking to update their bank details for future payments. What's your verification process, and why doesn't their known email address settle it?"
  },
  "s1": {
    "on": "This section says fraud usually looks like small plausible inconsistencies, patterns matter more than one flag, and the EA is often first to see them.",
    "say": "You see the detail first."
  },
  "s2": {
    "on": "These steps catch it: watch for unfamiliar vendors, clean round numbers, duplicate invoice numbers and changed bank details; verify changes through a separate channel; and escalate.",
    "say": "Verify payment changes through another channel.",
    "ask": "What would you do with a vendor's new bank details?"
  },
  "s3": {
    "on": "This section warns against explaining away single anomalies, and says a false alarm costs far less than a missed one.",
    "say": "Raise it anyway."
  }
}
});
