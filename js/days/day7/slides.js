/* Day 7 lesson slides: the concise copy for each topic's run of slides (Why It Matters · The Rules ·
   See It · On the Job · Do & Don't), keyed "day::topic title". Generated from build/slides/d7.json by
   build/slides/assemble.cjs: edit the JSON, then run the assembler. */
window.EA_SLIDE_COPY = Object.assign(window.EA_SLIDE_COPY || {}, {
 "7::The EA/PA's Role in Finance": {
  "image": "invoice-ledger",
  "hook": "Every invoice you touch is **a real link** in the firm's financial accuracy",
  "points": [
   "Invoices, expenses and reimbursements are **real financial work**, not filing",
   "**Double-check every figure** before you pass it along",
   "Log, date and track financial tasks — **never ad hoc**",
   "Know **what depends on you** getting your step right"
  ],
  "scene": "A vendor invoice for Elias shows a total that **doesn't match its line items**. It's tempting to pass it on and let someone catch it later.",
  "move": "**Flag it now** — don't assume it gets caught downstream",
  "job": [
   [
    "Invoice or expense arrives",
    "Check figures before passing on",
    "Finance tracker",
    "Logged, dated, numbers verified"
   ],
   [
    "Something looks off",
    "Flag it with specifics",
    "Email to bookkeeper",
    "Query raised, not assumed"
   ]
  ],
  "dos": [
   "**Check the numbers** before anything moves on",
   "Track finance tasks like **any recurring work**"
  ],
  "donts": [
   "Never treat financial tasks as **just paperwork**",
   "Don't assume an error **gets caught later**"
  ]
 },
 "7::What an SOP Actually Needs": {
  "image": "sop-binder",
  "hook": "Without SOPs, execution drifts — and **inconsistency is exactly what audits catch**",
  "points": [
   "Every SOP has **five elements**: Purpose, Scope, Procedure, Controls, Escalation",
   "Purpose and Scope: **why it exists** and who it covers",
   "Procedure: **the actual steps**, in order",
   "Controls and Escalation: **built-in checks** and when to report issues"
  ],
  "scene": "You write up how invoices are sent at Thorne & Partners. Your draft lists the steps but **says nothing about checks or who to tell** when something breaks.",
  "move": "Add **Controls and Escalation** so the SOP is complete",
  "job": [
   [
    "New recurring finance process",
    "Draft all five elements",
    "SOP template",
    "Purpose to Escalation covered"
   ],
   [
    "SOP draft ready",
    "Check controls and escalation path",
    "The SOP binder",
    "Verification and reporting named"
   ]
  ],
  "dos": [
   "Name **who the SOP applies to**",
   "Build **verification steps** into the procedure"
  ],
  "donts": [
   "Don't write **steps without controls**",
   "Never leave out **when to escalate**"
  ]
 },
 "7::The Financial Calendar": {
  "image": "calendar-week",
  "hook": "Billing cycles, tax deadlines and closes live on **one continuous calendar**",
  "points": [
   "Track billing, tax and monthly closes **in one place**",
   "Set reminders **7–10 days before** each deadline",
   "**Review weekly** for anything approaching",
   "Add buffer around **the category that keeps slipping**"
  ],
  "scene": "Month-end close, a tax deadline and the billing cycle all land the same week. **Your reminders are set for the due dates only.**",
  "move": "Move reminders to **7–10 days out** so there's time to fix issues",
  "job": [
   [
    "New deadline known",
    "Add with lead-time reminder",
    "Financial calendar",
    "Reminder 7–10 days before"
   ],
   [
    "Weekly review",
    "Scan upcoming deadlines",
    "Financial calendar",
    "Nothing discovered on due day"
   ],
   [
    "New cycle starts",
    "Confirm requirements haven't changed",
    "Accountant or source rule",
    "Due date reconfirmed"
   ]
  ],
  "dos": [
   "Keep **one calendar**, not three mental lists",
   "**Reconfirm each deadline** cycle to cycle"
  ],
  "donts": [
   "Don't find a deadline **on the day it's due**",
   "Don't treat **all three categories** identically"
  ]
 },
 "7::Financial KPIs for EAs/PAs": {
  "image": "data-chart",
  "hook": "Three numbers tell you if the finance side is **healthy or leaking**",
  "points": [
   "Invoice turnaround: **24–72 hours** from service to invoice sent",
   "Reconciliation accuracy: **98–100%**, and investigate anything below",
   "Alert when a retainer **drops below 25%**",
   "Review KPIs **on a fixed cadence**, not only when worried"
  ],
  "scene": "Invoices have been going out five days after the work is done. **Nobody has noticed**, because no one reviews turnaround.",
  "move": "Measure against **the 24–72 hour target** and fix the process",
  "job": [
   [
    "Service completed",
    "Send invoice within target",
    "Billing system",
    "Sent within 24–72 hours"
   ],
   [
    "Retainer balance drops",
    "Trigger the low-balance alert",
    "Trust ledger alert",
    "Flagged below 25%"
   ],
   [
    "Fixed review date",
    "Check KPIs against targets",
    "KPI tracker",
    "Drift caught early"
   ]
  ],
  "dos": [
   "Set the **25% retainer alert** early",
   "**Investigate** any reconciliation below 98%"
  ],
  "donts": [
   "Don't just **push harder** on a broken process",
   "Don't check KPIs **only when something's wrong**"
  ]
 },
 "7::Bookkeeping Basics & Compliance": {
  "image": "compliance-checklist",
  "hook": "Clean books start with **classification, audit trails and separated duties**",
  "points": [
   "Classify every transaction: **income, expense or receivable**",
   "Record **who, when and from what source** for every entry",
   "**Never approve your own** transactions",
   "Reconcile **on a regular cadence**, while errors are traceable"
  ],
  "line": "You never **approve your own transactions**, even when it's faster",
  "scene": "You've entered an expense and the approver is out. You have system rights to approve it yourself, and **it would save a day**.",
  "move": "Wait for **the assigned approver** — segregation of duties holds",
  "job": [
   [
    "Transaction recorded",
    "Classify it immediately",
    "Accounting system",
    "Category set at entry"
   ],
   [
    "Any new entry",
    "Attach source and author",
    "Audit trail",
    "Who, when, source shown"
   ],
   [
    "Compliance gap spotted",
    "Flag it immediately",
    "Email to manager",
    "Gap raised, not normalized"
   ]
  ],
  "dos": [
   "Classify **at the time of recording**",
   "Flag **compliance gaps** right away"
  ],
  "donts": [
   "Never **approve your own** transactions",
   "Don't leave classification to **a later cleanup**"
  ]
 },
 "7::Reading Basic Financial Statements": {
  "image": "accounting-screen",
  "hook": "You don't prepare the statements — you **spot what looks unusual** and ask",
  "points": [
   "P&L shows **income minus expenses** over a period",
   "Balance sheet: **assets = liabilities + equity**",
   "Cash flow shows **cash actually in and out**",
   "Trust money is **never the firm's income**"
  ],
  "line": "A trust balance is **never money the firm can spend**",
  "scene": "The P&L shows **a healthy profit** last quarter, but Elias says there **isn't enough cash** for next month's payroll.",
  "move": "Pull **the cash flow statement** — slow-paying clients explain the gap",
  "job": [
   [
    "Monthly P&L pulled",
    "Compare to last year, last month",
    "P&L report",
    "Sharp moves noted"
   ],
   [
    "Receivables review",
    "List anything over 60–90 days",
    "A/R aging",
    "Follow-up list made"
   ],
   [
    "Odd line spotted",
    "Ask with line and amount",
    "Email to accountant",
    "Specific question sent"
   ]
  ],
  "dos": [
   "Look at **trends over several months**",
   "Ask the accountant with **the exact line and amount**"
  ],
  "donts": [
   "Don't count **unpaid work as cash**",
   "Never treat **trust balances** as firm money"
  ]
 },
 "7::SOA Reconciliation": {
  "image": "invoice-ledger",
  "hook": "One formula ties out every statement: **opening, invoices, payments, adjustments**",
  "points": [
   "Opening + Invoices − Payments ± Adjustments = **closing balance**",
   "Work the formula **in this exact order** every time",
   "Revenue ≠ deposits? **Compare bank statements first**",
   "Resolve **every small variance** — never round it away"
  ],
  "scene": "A client's statement **doesn't tie out**. A colleague suggests rebuilding every report for the month from scratch.",
  "move": "Start from **the figures that don't reconcile** and work backward",
  "job": [
   [
    "Statement period ends",
    "Run the SOA formula in order",
    "Client ledger",
    "Closing balance ties out"
   ],
   [
    "Revenue doesn't match deposits",
    "Compare bank to revenue records",
    "Bank statement",
    "Discrepancy isolated"
   ],
   [
    "Adjustment made",
    "Document its cause",
    "Reconciliation notes",
    "Defensible on review"
   ]
  ],
  "dos": [
   "**Document every adjustment** you apply",
   "Tie the closing balance out **exactly**"
  ],
  "donts": [
   "Don't **rebuild every report** from scratch",
   "Never **round away** a small variance"
  ]
 },
 "7::Reconciliation Discrepancy Detection": {
  "image": "knowledge-check",
  "hook": "A payment applied to the wrong client once **ended in a legal dispute**",
  "points": [
   "Compare ledger to bank statement **line by line**",
   "Confirm credits hit **the correct client**",
   "Hunt for **reversed entries** that hide errors",
   "Every variance **explained**, every payment recorded"
  ],
  "scene": "The month's totals match, but two entries **cancel each other out** and one credit sits on **the wrong client's account**.",
  "move": "Go **line by line** — a matching total can hide errors",
  "job": [
   [
    "Month-end reconciliation",
    "Compare ledger to bank line-by-line",
    "Bank statement",
    "Every line matched"
   ],
   [
    "Run the checklist",
    "Invoices, payments, balances, variances",
    "Reconciliation checklist",
    "Every variance explained"
   ],
   [
    "Possible duplicate payment",
    "Verify before paying",
    "Approval thresholds",
    "Duplicate stopped"
   ]
  ],
  "dos": [
   "Run **the full checklist** every time",
   "Check **which client** each credit hit"
  ],
  "donts": [
   "Don't trust **a matching total** alone",
   "Don't skip **duplicate-payment checks**"
  ]
 },
 "7::Client Trust Accounts (IOLTA) — Core Rules & Commingling Risk": {
  "image": "trust-scale",
  "hook": "Client money is **never the firm's money** — mixing them can end a career",
  "points": [
   "IOLTA funds belong to **the client or a third party**",
   "Commingling, even briefly, can lead to **disbarment**",
   "Money leaves trust only **when earned or disbursed**",
   "Keep **a running ledger per client**, not one pooled total"
  ],
  "line": "A trust account **never goes negative** for any client, even for a day",
  "scene": "The trust balance is **$200 lower** than the ledger says it should be for one client.",
  "move": "Touch nothing — **tell Elias first**, then trace the transaction",
  "job": [
   [
    "Trust funds received",
    "Deposit to trust, not operating",
    "Trust account",
    "Client ledger updated"
   ],
   [
    "Fee earned or cost due",
    "Move only against documented trigger",
    "Approved invoice or authorization",
    "Trigger on file"
   ],
   [
    "Any trust transaction",
    "Update that client's ledger",
    "Per-client ledger",
    "Client balance current"
   ]
  ],
  "dos": [
   "Keep trust and operating **truly separate**",
   "Treat trust transactions **slowly and deliberately**"
  ],
  "donts": [
   "Never use trust **to cover firm cash flow**",
   "Don't \"fix later\" **a trust shortfall**"
  ]
 },
 "7::Trust Account Reconciliation Discipline": {
  "image": "compliance-checklist",
  "hook": "Three numbers must match: **bank, trust ledger, and every client sub-ledger**",
  "points": [
   "Reconcile **monthly at minimum**, and after unusual transactions",
   "Ledger total must equal **the sum of client sub-ledgers**",
   "Resolve every discrepancy **to the specific transaction**",
   "**Document every reconciliation**, even clean ones"
  ],
  "line": "Escalate **any trust discrepancy immediately** — one dollar counts like thousands",
  "scene": "Bank and ledger match, but **one client's sub-ledger** doesn't match what was actually deposited for them.",
  "move": "Escalate now, then trace **that client's transactions** one by one",
  "job": [
   [
    "Month ends",
    "Reconcile bank to trust ledger",
    "Bank statement and ledger",
    "Balances match"
   ],
   [
    "Ledger reconciled",
    "Sum client sub-ledgers",
    "Client sub-ledgers",
    "Totals match exactly"
   ],
   [
    "Reconciliation done",
    "File the record",
    "Compliance folder",
    "Clean record documented"
   ]
  ],
  "dos": [
   "Check **each client's sub-ledger**, not just totals",
   "Reconcile **on a fixed schedule**"
  ],
  "donts": [
   "Never call a discrepancy **\"probably fine\"**",
   "Don't stop at **the account total**"
  ]
 },
 "7::Billing & Invoicing": {
  "image": "invoice-ledger",
  "hook": "A correct invoice that **sits unsent** does nothing for cash flow",
  "points": [
   "Invoice = **(Rate × Hours) + Expenses**, minus any discount",
   "State **amount due, due date and payment terms**",
   "Check rate and hours against **the engagement terms**",
   "**Recheck the math** before sending"
  ],
  "scene": "You've built Harlow's invoice but **left off the due date**. It's otherwise correct and ready to go.",
  "move": "Add **due date and terms**, recheck the total, send promptly",
  "job": [
   [
    "Billing period closes",
    "Rate × hours, add expenses",
    "Billing system",
    "Discount applied last"
   ],
   [
    "Draft invoice ready",
    "Check against engagement terms",
    "Engagement letter",
    "Rate and hours confirmed"
   ],
   [
    "Invoice final",
    "Recheck math, then send",
    "Email or portal",
    "Sent promptly"
   ]
  ],
  "dos": [
   "Include **amount, due date and terms**",
   "**Send promptly** once finalized"
  ],
  "donts": [
   "Don't bill on **the wrong rate**",
   "Don't trust the formula **without rechecking**"
  ]
 },
 "7::Contract-Aware Billing": {
  "image": "clock-deadline",
  "hook": "Know **the terms, late fees and hour caps** before the first hour is billed",
  "points": [
   "Confirm payment terms, late fees and caps **before billing begins**",
   "Track hours against any cap **continuously**",
   "Flag an approaching cap **well before** it's reached",
   "Apply terms **as written**, not case by case"
  ],
  "scene": "A matter has a contractual hour cap and logged time is **close to the limit**, with work still ongoing.",
  "move": "**Flag it to Elias now**, before the cap is crossed",
  "job": [
   [
    "New matter opens",
    "Note terms, fees, caps",
    "Engagement letter",
    "Terms recorded before billing"
   ],
   [
    "Hours logged",
    "Compare against the cap",
    "Time tracker",
    "Cap flagged early"
   ],
   [
    "Ambiguous contract term",
    "Confirm interpretation first",
    "Ask the attorney",
    "Confirmed before billing"
   ]
  ],
  "dos": [
   "Flag hour caps **proactively**",
   "**Confirm unclear terms** before billing"
  ],
  "donts": [
   "Don't make **unauthorized exceptions** to terms",
   "Don't **go over a cap** without warning"
  ]
 },
 "7::Pre-Bill Review: Checking an Invoice Before It Goes Out": {
  "image": "meeting-notes",
  "hook": "A mistake the client finds **costs far more trust** than one you catch",
  "points": [
   "The pre-bill is **the last chance** to catch mistakes",
   "Check header, entries, costs, then **totals and terms**",
   "Watch for wrong rates, **block billing** and duplicate costs",
   "You check and flag; **the attorney decides** charges"
  ],
  "line": "Never **change an entry yourself** — flag it for the attorney or timekeeper",
  "scene": "Harlow's June pre-bill: one entry at **last year's rate**, two vague \"file review\" entries, and a **$620 court reporter cost** appearing twice.",
  "move": "Send Elias **a short flag list** at the top of the pre-bill",
  "job": [
   [
    "Time entered for period",
    "Run each matter's pre-bill",
    "Billing system",
    "Same point every month"
   ],
   [
    "Pre-bill generated",
    "Check header, entries, costs, totals",
    "Client pre-bill checklist",
    "Every flag listed"
   ],
   [
    "Checks complete",
    "Send to attorney with flags",
    "Email to Elias",
    "Attorney sign-off received"
   ]
  ],
  "dos": [
   "Put flags in **a short list**, not margins",
   "Keep **a pre-bill checklist** per client"
  ],
  "donts": [
   "Never send **without the attorney's sign-off**",
   "Don't **edit time or descriptions** yourself"
  ]
 },
 "7::Invoice Management: Tracking, Follow-Up & Collections": {
  "image": "email-draft",
  "hook": "An invoice isn't finished when it's sent — **it's finished when it's paid**",
  "points": [
   "Keep **one invoice register** with status for every invoice",
   "Follow **a set reminder schedule**: before due, due, 7, 14, 30",
   "Review aging weekly; send Elias **anything over 60 days**",
   "**Never reuse** an invoice number — void it instead"
  ],
  "line": "Payment plans, late fees and collections are **the attorney's decision**",
  "scene": "Meridian owes $18,400: $6,000 is **45 days overdue** and $12,400 is **95 days overdue**. No one has followed up.",
  "move": "Send a factual reminder today; **ask Elias about the 95-day balance**",
  "job": [
   [
    "Invoice sent",
    "Log it in the register",
    "Invoice register",
    "Status and due date tracked"
   ],
   [
    "Weekly aging review",
    "List anything over 60 days",
    "Aging report",
    "Short list sent to Elias"
   ],
   [
    "Payment arrives",
    "Record it and mark paid",
    "Invoice register",
    "No one chased after paying"
   ]
  ],
  "dos": [
   "Keep reminders **factual and warm**",
   "**Pause reminders** on a disputed invoice"
  ],
  "donts": [
   "Don't send to the main contact **instead of AP**",
   "Never add late fees **without attorney approval**"
  ]
 },
 "7::E-Billing Portals, LEDES & Client Billing Guidelines": {
  "image": "accounting-screen",
  "hook": "A rejected portal invoice **isn't paid until it's fixed**",
  "points": [
   "Many clients require **portal upload**, often in LEDES format",
   "Every entry needs **task and activity codes** (UTBMS)",
   "The portal checks each invoice **against billing guidelines**",
   "**Submit on time** — late invoices can be refused"
  ],
  "scene": "Harlow's insurer rejects the May invoice: **task codes missing** on 7 entries, 2 over the approved rate. The window closes **in 10 days**.",
  "move": "Fix the codes, **bring the rate cuts to Elias**, resubmit in time",
  "job": [
   [
    "New e-billing client",
    "Record portal, login, codes, deadline",
    "Client billing file",
    "Rules on file"
   ],
   [
    "Before the pre-bill",
    "Check task and activity codes",
    "Time entries",
    "LEDES file generates cleanly"
   ],
   [
    "Portal rejects or cuts",
    "Read reason, bring to attorney",
    "E-billing portal",
    "Resubmitted within deadline"
   ]
  ],
  "dos": [
   "Log **portal adjustments** to spot costly habits",
   "Keep **each client's billing guidelines** with the matter"
  ],
  "donts": [
   "Don't **email a PDF** to an e-billing client",
   "Never let **one person hold** the only login"
  ]
 },
 "7::Retainer Invoices & Applying Trust Funds": {
  "image": "trust-scale",
  "hook": "A retainer stays **the client's money** until it's earned and billed",
  "points": [
   "Retainers go into **the trust account**, not operating",
   "Every trust-to-operating transfer needs **the attorney's written approval**",
   "Show **total, amount applied and balance left** on the invoice",
   "Request **evergreen top-ups** on time so work doesn't stop"
  ],
  "line": "Trust money pays **only that client's** earned, billed fees or approved costs",
  "scene": "Meridian's evergreen retainer must stay at **$10,000 or more**. The June invoice is $6,800; the balance is $11,200.",
  "move": "Apply $6,800 with approval — **$4,400 left**, send the approved top-up request",
  "job": [
   [
    "Retainer arrives",
    "Confirm trust deposit, record it",
    "Client trust ledger",
    "Receipt sent if firm does"
   ],
   [
    "Invoice ready",
    "Get written approval to transfer",
    "Attorney sign-off",
    "Exact amount moved and recorded"
   ],
   [
    "Balance below agreed level",
    "Send approved top-up request",
    "Email to client",
    "Balance and amount needed shown"
   ]
  ],
  "dos": [
   "Record each transfer **with the invoice number**",
   "Return unused retainer **as the attorney directs**"
  ],
  "donts": [
   "Never move trust money **before approval**",
   "Don't hide **the retainer applied** on invoices"
  ]
 },
 "7::Invoice & Payment Reconciliation": {
  "image": "data-chart",
  "hook": "An unmatched payment means **a client gets chased for a bill they paid**",
  "points": [
   "Record each payment **the day it arrives**",
   "Match every payment to **the invoices it pays**",
   "Keep unapplied payments **at zero**",
   "Month-end: A/R aging total **equals the balance sheet**"
  ],
  "scene": "Harlow Industries wires **$7,425** for \"May invoices.\" Three are open: $2,500, $3,000 and $2,000 — **$75 short**.",
  "move": "Apply all three, record **$75 as a bank fee** if policy allows",
  "job": [
   [
    "Payment arrives",
    "Record date, amount, method, reference",
    "Payments log",
    "Logged same day"
   ],
   [
    "No remittance advice",
    "Match by amount, then ask client",
    "Open invoice list",
    "Invoices identified"
   ],
   [
    "Month-end",
    "Tie A/R aging to balance sheet",
    "A/R aging report",
    "Totals match before statements"
   ]
  ],
  "dos": [
   "**Correct payments in place** to keep the audit trail",
   "Leave **part-payment balances** open"
  ],
  "donts": [
   "Don't apply to **the oldest invoice** by habit",
   "Never apply a **trust deposit** directly to fees"
  ]
 },
 "7::Handling a Billing Dispute": {
  "image": "phone-call",
  "hook": "Most disputes are **misunderstandings**, and documentation settles them",
  "points": [
   "Treat a dispute as **a request for information**",
   "**Acknowledge promptly** — silence reads as dismissive",
   "Resolve with **time entries, receipts and engagement terms**",
   "Correct **a real error** plainly and fast"
  ],
  "scene": "A client emails that a charge **doesn't match** what they remember agreeing to.",
  "move": "**Pull the documentation** before you write a word back",
  "job": [
   [
    "Dispute email arrives",
    "Acknowledge receipt promptly",
    "Email",
    "Client knows it's in hand"
   ],
   [
    "Before responding",
    "Pull entries, receipts, terms",
    "The case file",
    "Backup in hand"
   ],
   [
    "Resolution ready",
    "Send answer with supporting detail",
    "Email",
    "Client sees the basis"
   ]
  ],
  "dos": [
   "Show **exactly what the charge was based on**",
   "Put **the relationship** over the original invoice"
  ],
  "donts": [
   "Don't respond **defensively** before checking",
   "Don't settle disputes **on opinion alone**"
  ]
 },
 "7::Real-Time Time Tracking for Billable Work": {
  "image": "time-blocks",
  "hook": "Tracked time becomes the invoice — **log it as it happens**",
  "points": [
   "**Log time immediately**, not at day's end",
   "Each entry needs **what was done and for which matter**",
   "Reconcile logged time **against the billing calendar**",
   "Accurate time is **the input to accurate billing**"
  ],
  "scene": "It's the end of a busy day and you've **logged nothing** for several separate tasks.",
  "move": "Reconstruct with detail now; **log as you go** from tomorrow",
  "job": [
   [
    "Task finished",
    "Log time and detail",
    "Time tracker",
    "Entry stands on its own"
   ],
   [
    "Regular check",
    "Compare time to billing calendar",
    "Billing calendar",
    "Gaps caught before invoicing"
   ]
  ],
  "dos": [
   "Record **enough detail** to support the invoice line",
   "**Catch gaps** before the client sees them"
  ],
  "donts": [
   "Don't **batch time from memory** at week's end",
   "Don't log **a duration with no description**"
  ]
 },
 "7::Billable vs. Non-Billable Hours": {
  "image": "clock-deadline",
  "hook": "Clerical work marked billable is **the top reason clients cut invoices**",
  "points": [
   "Billable work is **chargeable under the engagement letter**",
   "**Record both kinds** of time, billable and non-billable",
   "Time goes in **tenths of an hour**",
   "One task per entry — **no block billing**"
  ],
  "line": "Never cut or add time yourself — **you flag, the attorney decides**",
  "scene": "An entry reads \"3.5 — Harlow: call, research, drafted letter, **scheduled meeting, copied exhibits**.\" Harlow rejects block billing and clerical time.",
  "move": "Ask the associate to **split it into separate tasks**; flag clerical items",
  "job": [
   [
    "Time entered",
    "Date, matter, tenths, description, type",
    "Time tracker",
    "Billable status set"
   ],
   [
    "Before marking billable",
    "Check engagement letter and guidelines",
    "Client billing guidelines",
    "Clerical marked non-billable"
   ],
   [
    "Before invoicing",
    "Prepare pre-bill for attorney",
    "Billing system",
    "Write-downs decided by attorney"
   ]
  ],
  "dos": [
   "Keep **non-billable categories consistent**",
   "Show approved freebies as **\"no charge\"**"
  ],
  "donts": [
   "Don't bill **clerical work** just because it's client work",
   "Don't **skip recording** non-billable time"
  ]
 },
 "7::QuickBooks How-Tos — Step by Step": {
  "image": "accounting-screen",
  "hook": "Four workflows cover most of QuickBooks — **know them cold**",
  "points": [
   "Invoice: + New → Invoice → line items → **review total** → Save and Send",
   "Expense: + New → Expense → categorize → **attach the receipt**",
   "Reconcile: check off matches until **difference is $0.00**",
   "AR aging: scan **61–90 and 90+ columns** first"
  ],
  "scene": "Elias asks who owes the firm money. You run the **Accounts Receivable Aging Summary**.",
  "move": "Start with **the 61–90 and 90+ columns** — those need calls",
  "job": [
   [
    "Work ready to bill",
    "Create invoice, review total",
    "QuickBooks",
    "Saved and sent"
   ],
   [
    "Receipt in hand",
    "Record and categorize expense",
    "QuickBooks",
    "Receipt image attached"
   ],
   [
    "Statement arrives",
    "Reconcile the account",
    "QuickBooks",
    "Difference is $0.00"
   ]
  ],
  "dos": [
   "**Attach the receipt** to every expense",
   "**Review the total** before Save and Send"
  ],
  "donts": [
   "Don't click Finish **until the difference is $0.00**",
   "Don't start AR follow-up **with current balances**"
  ]
 },
 "7::QuickBooks: Billable Time, Expenses & Invoicing": {
  "image": "invoice-ledger",
  "hook": "QuickBooks carries costs to the invoice — **only if you tick Billable**",
  "points": [
   "Client = customer; matter = **sub-customer or project**",
   "Tick **Billable** and pick the matter on every entry",
   "Add waiting time and costs **from the invoice panel**",
   "Run **the unbilled report** after sending"
  ],
  "line": "**Only the attorney's approved pre-bill** becomes a sent invoice",
  "scene": "At month-end, Harlow shows **6.2 hours with no matter**, and a **$435 court reporter bill** for Meridian wasn't marked billable.",
  "move": "Assign the hours, **mark the cost billable**, then build invoices",
  "job": [
   [
    "Time worked",
    "Enter time, tick Billable",
    "QuickBooks timesheet",
    "Right matter, right rate"
   ],
   [
    "Client cost paid",
    "Record expense, tick Billable",
    "QuickBooks expense",
    "Customer chosen"
   ],
   [
    "Invoices sent",
    "Run unbilled time and expenses",
    "QuickBooks report",
    "Nothing billable left"
   ]
  ],
  "dos": [
   "**Set each rate once**, not by hand",
   "**Draft first**, send after approval"
  ],
  "donts": [
   "Don't record a client cost **without ticking Billable**",
   "Don't enter time **to the client, not matter**"
  ]
 },
 "7::QuickBooks Common Mistakes & Tips": {
  "image": "knowledge-check",
  "hook": "The most common QuickBooks error is **a miscategorized expense**",
  "points": [
   "Unsure of a category? **Ask, don't guess**",
   "Not $0.00? Look for **a missing or duplicate transaction**",
   "Check every invoice **against the engagement letter**",
   "QuickBooks Online **saves automatically** — fix with an edit"
  ],
  "scene": "A reconciliation **won't reach $0.00**. Someone suggests tweaking an unrelated entry to **force it to match**.",
  "move": "Hunt for **the missing or duplicate transaction** instead",
  "job": [
   [
    "Expense to categorize",
    "Confirm the right category",
    "Ask the bookkeeper",
    "Category confirmed, not guessed"
   ],
   [
    "Reconciliation not $0.00",
    "Find missing or duplicate item",
    "QuickBooks",
    "Difference resolved honestly"
   ],
   [
    "Wrong entry in Online",
    "Correct by edit or journal",
    "QuickBooks Online",
    "Entry fixed, trail intact"
   ]
  ],
  "dos": [
   "**Review recent entries** for repeat miscategorization",
   "Verify **the rate** before invoicing"
  ],
  "donts": [
   "Never **force numbers to match**",
   "Don't expect **Ctrl+Z** to undo in Online"
  ]
 },
 "7::QuickBooks: Bank Feeds, Rules & Month-End Close": {
  "image": "calendar-week",
  "hook": "Bank feeds are automatic, but **a person decides** where each transaction belongs",
  "points": [
   "**Match** when the entry exists; Add only when nothing matches",
   "Use **rules** for regular transactions, and check them",
   "Month-end: clear the feed, **reconcile every account**",
   "Set **a password-protected closing date** once confirmed"
  ],
  "line": "Trust transactions are **never firm income** — they need their own account",
  "scene": "The feed shows **$1,200 to the credit card company**, and QuickBooks suggests \"Office expenses.\"",
  "move": "Record it as **a transfer**, not an expense",
  "job": [
   [
    "Weekly feed review",
    "Match or add each transaction",
    "QuickBooks bank feed",
    "For review cleared"
   ],
   [
    "Month-end",
    "Reconcile accounts, run P&L, balance sheet",
    "QuickBooks",
    "Reports to accountant"
   ],
   [
    "Accountant confirms month",
    "Set the closing date",
    "QuickBooks settings",
    "Period locked with password"
   ]
  ],
  "dos": [
   "Clear **\"Uncategorized\" every week**",
   "Record own-account moves **as transfers**"
  ],
  "donts": [
   "Don't **click Add** on an already recorded payment",
   "Don't **exclude** anything without noting why"
  ]
 },
 "7::Credit Cards & Card Applications": {
  "image": "compliance-checklist",
  "hook": "A missed card payment carries **real fees and credit consequences**",
  "points": [
   "Track card due dates **on a real calendar**",
   "**Review the statement before paying**, not after",
   "Applications: gather **exactly what's requested** — not more, not less",
   "File tax records **as they happen**, year-round"
  ],
  "scene": "Elias asks for every receipt from **the last 90 days**.",
  "move": "It should be **a quick retrieval**, not a reconstruction",
  "job": [
   [
    "Statement arrives",
    "Review before paying",
    "Card statement",
    "Odd charges caught first"
   ],
   [
    "Card application assigned",
    "Gather requested documents only",
    "Issuer's checklist",
    "Process followed precisely"
   ],
   [
    "Receipt received",
    "File and categorize now",
    "Receipts folder",
    "90-day pull is quick"
   ]
  ],
  "dos": [
   "Follow **the issuer's process** exactly",
   "Organize receipts **year-round**"
  ],
  "donts": [
   "Don't **pay before reviewing** the statement",
   "Don't guess through **a card application**"
  ]
 },
 "7::Credit Card Help: Disputes, Fraud & Lost Cards": {
  "image": "security-shield",
  "hook": "You'll spot wrong charges, fraud and lost cards first — **speed matters**",
  "points": [
   "Dispute billing errors in writing **within 60 days**",
   "Report fraud or loss **immediately** to the issuer",
   "Use **the number on the card or app**, never an email's",
   "Update **every automatic payment** on a replacement card"
  ],
  "line": "On Elias's personal card, act **only with his permission**",
  "scene": "Elias texts from an airport: his firm card was **declined with a fraud alert**. He needs a hotel tonight; it also pays **three subscriptions**.",
  "move": "Report via the card's number, **sort tonight's hotel**, then update subscriptions",
  "job": [
   [
    "Unknown charge",
    "Check receipts and merchant name",
    "Card register",
    "Real error confirmed"
   ],
   [
    "Wrong charge unresolved",
    "File written dispute with issuer",
    "Issuer app or letter",
    "Filed within 60 days"
   ],
   [
    "Replacement card arrives",
    "Update every auto-payment",
    "Subscriptions list",
    "Nothing on old card"
   ]
  ],
  "dos": [
   "Keep **a card register** with users and limits",
   "**Calendar the dispute deadline** the day you find it"
  ],
  "donts": [
   "Don't dispute **a forgotten subscription renewal**",
   "Don't **wait on the merchant** past the window"
  ]
 },
 "7::Reconciling a Credit Card Statement": {
  "image": "invoice-ledger",
  "hook": "Every charge needs **a receipt, a business purpose and the right category**",
  "points": [
   "Match each charge **line by line** to its receipt",
   "Code client costs **to the matter, marked billable**",
   "**Flag personal charges** — they get repaid, never hidden",
   "Reconcile to **the statement's ending balance** in QuickBooks"
  ],
  "scene": "Elias's statement: 34 charges, 29 receipts. Two are for **the Chicago deposition**, one is **a $64 pharmacy charge**, two have no receipt.",
  "move": "Code Chicago to the matter; **flag the pharmacy charge**; chase receipts",
  "job": [
   [
    "Statement closes",
    "Gather receipts for the period",
    "Email and expense app",
    "Receipts collected"
   ],
   [
    "Line-by-line review",
    "Match, categorize, code matter",
    "Card statement",
    "Every charge explained"
   ],
   [
    "Review complete",
    "Reconcile to ending balance",
    "QuickBooks",
    "Statement and receipts filed"
   ]
  ],
  "dos": [
   "Reconcile **monthly, as the statement closes**",
   "Use **the missing-receipt form** for small charges"
  ],
  "donts": [
   "Don't code client travel **without the matter**",
   "Don't **pay the card** before reviewing"
  ]
 },
 "7::Expense Report Auditing & Approval Workflows": {
  "image": "compliance-checklist",
  "hook": "No receipt means **no proof** the expense happened as described",
  "points": [
   "Audit to confirm expenses are **legitimate, documented, categorized**",
   "Check each line's **amount, date and purpose** against its receipt",
   "**Hold** anything missing a receipt or justification",
   "No one **submits and approves** their own expense"
  ],
  "scene": "A receipt shows **exactly $499**, one dollar under **the $500 threshold** needing extra approval.",
  "move": "Note it and **check for split transactions** before approving",
  "job": [
   [
    "Report submitted",
    "Match each line to receipt",
    "Expense system",
    "Amount, date, purpose match"
   ],
   [
    "Receipt missing",
    "Hold for clarification",
    "Email to submitter",
    "Not approved on assumption"
   ],
   [
    "Report verified",
    "Route to assigned approver",
    "Approval workflow",
    "No self-approval"
   ]
  ],
  "dos": [
   "Review **individual line items**",
   "Watch for **split transactions**"
  ],
  "donts": [
   "Never **bulk-approve** without reviewing",
   "Never **approve your own** expense"
  ]
 },
 "7::Vendor Payment Terms & Cash Flow Timing": {
  "image": "vendor-handshake",
  "hook": "Paying **too early or too late** both cost the firm",
  "points": [
   "Confirm **each vendor's actual terms** on file",
   "Pay **in line with terms**, unless a discount rewards early",
   "Early payment with no benefit **ties up cash**",
   "Late payment risks **fees and suspended service**"
  ],
  "scene": "A **Net 30** invoice arrives, and the colleague who pays bills pays everything **within 48 hours** \"to be safe.\"",
  "move": "Schedule it **to the Net 30 terms**, unless there's a discount",
  "job": [
   [
    "Vendor invoice arrives",
    "Check terms on file",
    "Vendor records",
    "Terms confirmed, not assumed"
   ],
   [
    "Payment scheduled",
    "Time to the agreed terms",
    "Payment calendar",
    "Due date matched"
   ],
   [
    "Due dates approach",
    "Compare against expected inflows",
    "Cash-flow tracker",
    "No collision with gaps"
   ]
  ],
  "dos": [
   "Make off-terms payments **a deliberate decision**",
   "Track **due dates against inflows**"
  ],
  "donts": [
   "Don't **pay everything on receipt**",
   "Don't **assume a default** term"
  ]
 },
 "7::Payroll Basics for EA/PA Support Roles": {
  "image": "confidential-lock",
  "hook": "You rarely run payroll, but **your work feeds it** — and pay dates don't move",
  "points": [
   "Timesheets must be accurate and in **before the cutoff**",
   "Pay dates and tax deposit dates **never move**",
   "Salary and banking details are **highly sensitive**",
   "Put payroll deadlines **on the compliance calendar**"
  ],
  "line": "Share payroll details **only with those who need them**, for that task",
  "scene": "A new hire's onboarding paperwork is **incomplete two days before** the payroll cutoff.",
  "move": "Chase the missing forms today so **they make the pay run**",
  "job": [
   [
    "Payroll cutoff approaching",
    "Confirm timesheets are in",
    "Payroll calendar",
    "Submitted before cutoff"
   ],
   [
    "Onboarding or banking change",
    "Handle forms confidentially",
    "Secure HR folder",
    "Complete, access limited"
   ]
  ],
  "dos": [
   "Treat payroll-adjacent tasks as **high priority**",
   "Guard **direct deposit changes** like any sensitive file"
  ],
  "donts": [
   "Don't dismiss it as **someone else's system**",
   "Never **forward compensation details** beyond need"
  ]
 },
 "7::Tax Season Support & Working with Accountants": {
  "image": "meeting-notes",
  "hook": "When the accountant asks, it should be **a retrieval, not a reconstruction**",
  "points": [
   "Organize receipts and records **as they arrive**",
   "Be the contact who answers **\"do you have X\" fast**",
   "That only works if **records stay current**",
   "Build **a daily or weekly filing habit**"
  ],
  "scene": "The accountant asks **\"do you have X?\"** for a receipt from months ago.",
  "move": "Pull it from **the already-organized files** within minutes",
  "job": [
   [
    "Receipt or invoice arrives",
    "File and categorize it",
    "Records folder",
    "Filed same day or week"
   ],
   [
    "Accountant request",
    "Retrieve the documents",
    "Records folder",
    "Answered quickly and accurately"
   ]
  ],
  "dos": [
   "Keep a **regular receipt-scan routine**",
   "Tie records to **reconciliation work**"
  ],
  "donts": [
   "Don't save it all for **one big push**",
   "Don't treat tax support as **once a year**"
  ]
 },
 "7::Quarterly Tax Schedules": {
  "image": "calendar-week",
  "hook": "Quarterly estimated taxes are **four separate deadlines**, each with penalty exposure",
  "points": [
   "Log **all four deadlines** at the start of the year",
   "Set **lead-time reminders**, not just the date",
   "Confirm amount and documents **well before** each deadline",
   "**Keep each payment confirmation** as an audit trail"
  ],
  "scene": "It's **ten days before** a quarterly deadline and the accountant **hasn't sent the payment amount**.",
  "move": "**Contact the accountant today** to confirm the amount",
  "job": [
   [
    "New year starts",
    "Log four deadlines with reminders",
    "Financial calendar",
    "All four on calendar"
   ],
   [
    "Reminder fires",
    "Confirm amount with accountant",
    "Email to accountant",
    "Amount and documents ready"
   ],
   [
    "Payment made",
    "Save the confirmation",
    "Tax records folder",
    "Audit trail complete"
   ]
  ],
  "dos": [
   "Coordinate with the accountant **early**",
   "Use **redundant reminders** like court deadlines"
  ],
  "donts": [
   "Don't treat estimated tax as **one annual concern**",
   "Don't discover gaps **on the deadline itself**"
  ]
 },
 "7::W-9/1099 Audits & Filing Deadlines": {
  "image": "clock-deadline",
  "hook": "1099 filings depend entirely on **W-9s collected in advance**",
  "points": [
   "Get a W-9 **before the first payment**",
   "Audit the vendor list **against the W-9 file** periodically",
   "Track the 1099 deadline **with real lead time**",
   "Secure W-9s as **confidential tax documents**"
  ],
  "scene": "Preparing 1099s, you find a vendor **paid above the threshold** who **never submitted a W-9**.",
  "move": "Request the W-9 **from the vendor immediately**",
  "job": [
   [
    "New vendor or contractor",
    "Collect W-9 before payment",
    "Vendor file",
    "W-9 on file first"
   ],
   [
    "Periodic audit",
    "Compare vendors to W-9 file",
    "Vendor list",
    "Gaps found early"
   ],
   [
    "1099 deadline approaching",
    "Confirm W-9 data complete",
    "Financial calendar",
    "Ready with lead time"
   ]
  ],
  "dos": [
   "Watch for **vendors added mid-year**",
   "Store W-9s **securely**"
  ],
  "donts": [
   "Don't check W-9s **only at filing time**",
   "Don't **pay a new vendor** before the W-9"
  ]
 },
 "7::Financial Record Retention Requirements": {
  "image": "sop-binder",
  "hook": "Destroying a record too early can **hurt in an audit or dispute**",
  "points": [
   "Retention periods **vary by record type** and jurisdiction",
   "Trust records often need **longer retention**",
   "A record you can't find **doesn't meet the purpose**",
   "Label **a retention date** when you file"
  ],
  "line": "When in doubt whether retention has passed, **keep the record**",
  "scene": "During a cleanup you find **trust account records** from several years ago, taking up space.",
  "move": "Confirm **their actual retention period** before deleting anything",
  "job": [
   [
    "Record filed",
    "Label its retention date",
    "Records system",
    "Review date scheduled"
   ],
   [
    "Document requested",
    "Search and retrieve it",
    "Searchable archive",
    "Found on demand"
   ],
   [
    "Cleanup planned",
    "Check each category's period",
    "Retention schedule",
    "Nothing destroyed early"
   ]
  ],
  "dos": [
   "Know **each category's period**",
   "Use storage that's **durable and searchable**"
  ],
  "donts": [
   "Don't apply **one blanket rule** to everything",
   "Don't assume digital means **retention is handled**"
  ]
 },
 "7::Fraud Red Flags in Financial Documents": {
  "image": "escalation-alert",
  "hook": "Fraud looks like **small, plausible inconsistencies** — and you see the detail first",
  "points": [
   "Watch for **unfamiliar vendors**, too-clean round numbers, duplicate invoice numbers",
   "A changed bank account is **a classic red flag**",
   "One flag is often an error; **a pattern** warrants concern",
   "**Escalate promptly** — don't resolve it alone"
  ],
  "line": "Never confirm a payment change **using contact details from the request**",
  "scene": "A long-standing vendor emails, from **their known address**, asking to **update their bank details**.",
  "move": "Verify **through a separate, known channel** before changing anything",
  "job": [
   [
    "Invoice or request arrives",
    "Scan for red flags",
    "Vendor records",
    "Anomalies logged"
   ],
   [
    "Payment details change",
    "Verify via separate channel",
    "Phone number on file",
    "Change confirmed independently"
   ],
   [
    "Genuine concern",
    "Escalate promptly",
    "Email to Elias",
    "Concern raised, not buried"
   ]
  ],
  "dos": [
   "**Track each anomaly** so patterns show",
   "Raise the next concern **despite false alarms**"
  ],
  "donts": [
   "Don't explain away **a single odd detail**",
   "Never trust **a known email address** alone"
  ]
 }
});
