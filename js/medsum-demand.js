/* ============================================================
   MEDSUM & DEMAND TRAINING — specialty module (loaded after eapa-updates.js)
   A self-contained module for personal-injury case work, separate from the
   10-day roadmap (it does not change day progress or certificate rules):
     Unit 1  Medical Chronology & Medical Summary
     Unit 2  Bills Itemization
     Unit 3  Demand Overview
     Unit 4  Demand Packet & Responses
   Each unit: lessons -> hands-on practice -> unit check (pass at 70%).
   Page: #/medsum (landing) and #/medsum/<unit>. Progress is the personal
   key "medsum-progress", saved with the rest of the trainee's cloud record.
   ============================================================ */
(function(){
const MS_KEY = "medsum-progress";
const MS_PASS = 70;

/* ---------- Canva decks (the source training decks) ---------- */
const MS_DECKS = {
  overview: {title:"Medsum and Demand Training", covers:"The full module: how records, bills and the demand fit together.",
    url:"https://www.canva.com/design/DAG49oTZgSA/FLzIgWiJOxxOjjhMTqi0ow/view?utm_content=DAG49oTZgSA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h03952907ff"},
  medsum: {title:"Medical Chronology // Medical Summary", covers:"Building the chronology and writing the summary.",
    url:"https://www.canva.com/design/DAG49g8gzJw/HsuSiHTvURf9iRcoQX1YOA/view?utm_content=DAG49g8gzJw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd4d7febee7"},
  bills: {title:"Bills Itemization", covers:"Turning provider bills into the medical specials.",
    url:"https://www.canva.com/design/DAG49iALOAk/BFPrc1teDZ8iBwclArd3yw/view?utm_content=DAG49iALOAk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h80dcb5b8df"},
  demand: {title:"Demand Overview", covers:"What a demand is, what goes in it and when it goes out.",
    url:"https://www.canva.com/design/DAG6R08r6x8/4Mwi4dv7aBlU6UWyLEd_Vw/view?utm_content=DAG6R08r6x8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf93a596f5a"},
  packet: {title:"Demand Packet and Responses", covers:"Assembling the packet and handling the adjuster's response.",
    url:"https://www.canva.com/design/DAG9AEyAJx4/QDp5yyiUQ8gDbI238IWffw/view?utm_content=DAG9AEyAJx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9d9834736b"}
};
const deckEmbedUrl = (url)=>url.split("?")[0] + "?embed";

/* ---------- The practice case (fictional) ---------- */
const MS_CASE = {
  client:"Dana Whitfield", age:42, doi:"03/14/2026", insured:"Grant Mercer", carrier:"Keystone Mutual Insurance Co.",
  claim:"KM-26-0418823", adjuster:"Tom Reyes",
  facts:"Dana was stopped at a red light at Oak Street & 5th Avenue when Grant Mercer's SUV struck her car from behind. The officer cited Mercer for following too closely. Dana went to the emergency room the same day with neck and low back pain."
};
function caseCard(){
  return `<div class="ms-case">
    <div class="ms-case-tag">PRACTICE CASE · Thorne &amp; Partners Law Group</div>
    <div class="ms-case-grid">
      <div><b>Client</b>${esc(MS_CASE.client)}, ${MS_CASE.age}</div>
      <div><b>Date of incident (DOI)</b>${MS_CASE.doi} · rear-end MVC</div>
      <div><b>At-fault driver</b>${esc(MS_CASE.insured)}</div>
      <div><b>Carrier / claim #</b>${esc(MS_CASE.carrier)} · ${MS_CASE.claim}</div>
    </div>
    <p>${esc(MS_CASE.facts)}</p>
  </div>`;
}

/* ============================================================
   UNITS — lessons, practice and unit check
   Lesson: {h, lead, points[], steps[], table?{headers,rows}, callout?{type,label,text}, example?, trainerCue}
   ============================================================ */
const MS_UNITS = [
{
  id:1, icon:"🩺", deck:"medsum", title:"Medical Chronology & Medical Summary", short:"Medsum",
  summary:"Organize a client's medical records into a date-by-date chronology, then write the medical summary the attorney and adjuster actually read.",
  lessons:[
    {h:"What a Medsum Is — and Why It Matters",
     lead:"A \"medsum\" turns hundreds of pages of medical records into something an attorney can read in minutes. It comes in two parts that work together.",
     points:[
       "<b>Medical Chronology</b> — a date-by-date table of every medical encounter: date of service, provider, what was found, what was done, and the page it came from.",
       "<b>Medical Summary</b> — a short narrative that tells the treatment story: the injury, the diagnosis, the treatment course, gaps, and where the client stands now.",
       "The attorney uses it to value the case; the demand letter's injury section is built from it; the adjuster reads it before the records.",
       "It must be accurate and neutral. The summary reports what the records say — persuasion belongs in the demand letter."
     ],
     table:{headers:["","Medical Chronology","Medical Summary"], rows:[
       ["Format","Table, one row per visit","Narrative paragraphs"],
       ["Answers","What happened on each date?","What is the treatment story?"],
       ["Detail","Every encounter, with page references","Only what matters, grouped by provider or phase"],
       ["Used for","Checking facts, finding pages fast","The demand letter and case valuation"]
     ]},
     callout:{type:"tip", label:"Build order", text:"Always build the chronology first. The summary is written <i>from</i> the chronology, never straight from the records."},
     trainerCue:"Open the Canva deck on the chronology slide and ask: who reads each document, and what are they trying to decide?"},
    {h:"Gathering and Organizing the Records",
     lead:"A medsum is only as good as the records behind it. Before writing a word, make sure the file is complete and in order.",
     points:[
       "Records come from every provider the client saw: ambulance, ER, urgent care, imaging, chiropractor/physical therapy, specialists, pain management, surgery, pharmacy.",
       "Requests go out with the client's signed HIPAA authorization; ask for the complete chart plus a records-custodian certification or affidavit when the attorney needs it.",
       "Every page gets a page (Bates) number before you start, so every chronology entry can cite exactly where it came from.",
       "Keep a <b>provider list</b>: provider, dates treated, records requested/received, bills requested/received."
     ],
     steps:[
       "List every provider named by the client and in the records (ER discharge papers and referrals point to the next provider).",
       "Confirm each provider's records are complete: first visit, last visit, imaging reports, procedure notes, discharge summaries.",
       "Page-number (Bates-stamp) the full set and sort it by provider, then by date.",
       "Note anything missing on the provider list and follow up — do not guess to fill a gap."
     ],
     callout:{type:"warn", label:"Watch out", text:"Referrals are the easiest way to find a missing provider. If the ortho note says \"referred to pain management\", there should be pain management records — or a reason there aren't."},
     trainerCue:"Have trainees name three places in a record where a new provider is mentioned (referrals, discharge instructions, imaging orders)."},
    {h:"Building the Medical Chronology",
     lead:"One row per encounter, in date order, in the provider's own words, with a page reference for every row.",
     table:{headers:["Column","What goes in it"], rows:[
       ["Date of service (DOS)","MM/DD/YYYY — one row per visit"],
       ["Provider / facility","Doctor and facility, e.g. Dr. A. Patel, Summit Orthopedic"],
       ["Visit type","ER visit, initial eval, follow-up, imaging, procedure, surgery…"],
       ["Summary","Complaints (with pain scores), key exam findings, diagnosis, treatment and plan"],
       ["Page ref.","The Bates/page numbers the entry came from"]
     ]},
     points:[
       "Use the provider's words for diagnoses and findings. Quote key phrases; do not upgrade \"strain\" to \"severe injury\".",
       "Record pain scores every time they appear — the trend (7/10 → 3/10) tells the recovery story.",
       "Keep an abbreviations key: c/o (complains of), Dx (diagnosis), Tx (treatment), s/p (status post), ROM (range of motion), TTP (tender to palpation), MMI (maximum medical improvement), ESI (epidural steroid injection)."
     ],
     callout:{type:"tip", label:"Flag it", text:"Flag what the attorney must see: <b>prior injuries</b> to the same body part, <b>gaps in treatment</b> of 30+ days, <b>causation opinions</b>, <b>objective findings</b> (MRI, X-ray), <b>procedures</b>, and <b>MMI / future care</b> recommendations."},
     example:"<b>04/20/2026 · Dr. A. Patel, Summit Orthopedic Associates · Ortho consult</b> — c/o neck pain radiating to R arm. MRI reviewed: 3 mm C5-6 disc protrusion. Dx: C5-6 disc protrusion with R C6 radiculopathy. Plan: continue therapy; refer to pain management for ESI. Dr. Patel: injuries causally related to the 03/14/2026 MVC. <i>[pp. 52–55]</i>",
     trainerCue:"Read the example row aloud and ask which of the six flags it carries (causation opinion; also an objective finding reviewed)."},
    {h:"Writing the Medical Summary",
     lead:"The summary tells the treatment story in a page or two. Anyone should understand the case without opening the records.",
     steps:[
       "<b>Overview</b> — client, date of incident, how it happened, and total treatment: first and last visit, number of providers and visits.",
       "<b>Initial treatment</b> — ER or first visit: complaints, tests, diagnosis.",
       "<b>Diagnostics</b> — imaging and what it showed, in the radiologist's words.",
       "<b>Treatment course</b> — by provider or phase: therapy, specialists, injections, surgery; how the client responded.",
       "<b>Gaps and prior history</b> — state them plainly with the reason the records give.",
       "<b>Current status</b> — MMI, permanent restrictions, future care recommendations and their estimated cost."
     ],
     points:[
       "Neutral and factual — every statement traceable to a chronology row and page number.",
       "Short paragraphs, one per phase or provider; dates in MM/DD/YYYY; no opinions of your own."
     ],
     callout:{type:"warn", label:"Never", text:"Never leave out a prior injury, a gap, or a missed appointment because it hurts the case. The adjuster will find it — the attorney needs to find it first."},
     trainerCue:"Ask: why does a neutral summary make the demand letter <i>more</i> persuasive, not less?"},
    {h:"Quality Check and Handling PHI",
     lead:"Before the medsum goes to the attorney, check it against the records and the bills, and keep the client's health information protected.",
     steps:[
       "Every date of service on the bills appears in the chronology — and every chronology visit has a bill (or a note why not).",
       "Spot-check page references: open five random entries and confirm the page says what the row says.",
       "Check names, dates and the date of incident everywhere; one wrong date undermines the whole document.",
       "Save it to the case file with the firm's naming convention and tell the attorney what is flagged."
     ],
     points:[
       "Medical records are protected health information (PHI). Use the <b>minimum necessary</b> and share only through the firm's secure systems.",
       "Never send records or a medsum to personal email, messaging apps or unapproved cloud drives, and never paste them into public AI tools."
     ],
     callout:{type:"tip", label:"Cross-check", text:"The chronology and the bills itemization should reconcile date for date. Doing both at the same time catches missing records and missing bills early."},
     trainerCue:"Connect this to the Day 8 HIPAA lesson: which minimum-necessary rule applies when the adjuster asks for \"all records\"?"}
  ],
  practice:"chron",
  quiz:[
    {q:"What is the main difference between a medical chronology and a medical summary?",
     opts:["They are the same document with different names","The chronology is a date-by-date record of every encounter; the summary is a narrative of the treatment story","The chronology is written for the client; the summary is written for the court","The summary lists every visit; the chronology only lists surgeries"],
     a:1, r:"The chronology is the date-by-date table (every encounter, with page references); the summary is the short narrative built from it."},
    {q:"Which set of details belongs in every chronology entry?",
     opts:["Date of service, provider/facility, key findings, diagnosis and plan, and the page reference","Only the diagnosis code","The provider's phone number and billing address","The client's own description of how they felt that week"],
     a:0, r:"Each row needs the date, who, what was found and done, and the page it came from, so anyone can check it."},
    {q:"You find a 2025 chiropractic record for low back pain from before the 2026 accident. What do you do?",
     opts:["Leave it out — it isn't related to this accident","Include it and flag it as a prior / pre-existing condition for the attorney","Delete it from the file","Ask the client whether it should be included"],
     a:1, r:"Prior injuries to the same body part are always included and flagged. The attorney decides how to address them; the adjuster will find them anyway."},
    {q:"The ER record says \"cervical strain.\" How do you describe it in the medsum?",
     opts:["Severe neck injury","Whiplash trauma","Cervical strain — the provider's own words","Neck pain, probably permanent"],
     a:2, r:"Use the provider's words. Upgrading a diagnosis damages the firm's credibility with the adjuster."},
    {q:"Under the standard in this module, which of these is a gap in treatment to flag?",
     opts:["Two days between therapy visits","A weekend without treatment","43 days with no treatment between the last chiropractic visit and the first pain-management visit","Any missed appointment that was rescheduled the same week"],
     a:2, r:"Flag any stretch of 30+ days without treatment, with the reason the records give (for example, childcare or insurance problems)."},
    {q:"Which is the correct way to handle a finished medsum?",
     opts:["Email it to your personal account to finish at home","Paste it into a free AI tool to shorten it","Save it in the firm's secure case file and share it only through approved systems","Print extra copies for your desk"],
     a:2, r:"A medsum is PHI. Minimum necessary, secure firm systems only."}
  ]
},
{
  id:2, icon:"🧾", deck:"bills", title:"Bills Itemization", short:"Bills",
  summary:"Turn every provider's bill into an accurate itemization of the medical specials — billed, adjusted, paid and still owed — with liens identified.",
  lessons:[
    {h:"What a Bills Itemization Is",
     lead:"The itemization lists every medical charge related to the incident, by provider and date of service. Its totals are the client's <b>medical specials</b> — the economic damages in the demand.",
     points:[
       "It supports the medical-expenses figure in the demand letter, line by line.",
       "It shows who has been paid and who is still owed — which becomes the lien list at settlement.",
       "It must reconcile with the medical chronology: every billed date of service is a visit in the chronology."
     ],
     table:{headers:["Column","What goes in it"], rows:[
       ["Provider","Who billed the charge (facility and physician groups bill separately)"],
       ["Date(s) of service","One date, or a range for a series of visits"],
       ["Description / CPT","What the charge was for (e.g. MRI cervical spine, CPT 72141)"],
       ["Billed","The full charge on the bill"],
       ["Adjustments","Contractual write-offs and discounts"],
       ["Paid","By health insurance, PIP/MedPay and the client"],
       ["Balance","What is still owed"]
     ]},
     callout:{type:"tip", label:"The formula", text:"<b>Balance = Billed − Adjustments − all Payments</b> (health insurance + PIP/MedPay + client). If a line doesn't balance, the bill is missing information — ask the provider."},
     trainerCue:"Open the Bills Itemization deck and walk through one provider's bill column by column."},
    {h:"Getting the Right Bills",
     lead:"A balance-due statement is not enough. You need itemized bills that show every date of service and charge.",
     points:[
       "Facilities (hospitals, surgery centers) bill on a <b>UB-04</b>; doctors and therapists on a <b>CMS-1500 (HCFA)</b>. Either way, ask for the itemized statement or ledger.",
       "Remember the separate bills: the ER physician group, radiologist and anesthesiologist bill apart from the hospital.",
       "Include out-of-pocket costs: prescriptions, braces, medical mileage — with receipts.",
       "Request bills with the records, and ask for a billing affidavit or custodian certification if the attorney needs one."
     ],
     steps:[
       "Check the provider list: every provider in the chronology needs a bill.",
       "Request itemized bills showing dates of service, CPT codes, charges, adjustments and payments.",
       "Log each bill as received; follow up on missing ones every 7–10 days."
     ],
     callout:{type:"warn", label:"Watch out", text:"A \"$0 balance\" letter does not tell you what was billed or who paid it. You still need the itemized ledger."},
     trainerCue:"Ask: the ER visit produced a hospital bill — what other bills should you expect from that same visit?"},
    {h:"Building the Itemization",
     lead:"Enter each charge once, from the bill, and total it by provider and overall.",
     steps:[
       "Enter one line per charge (or per series of identical visits), in date order within each provider.",
       "Copy billed, adjustment and payment amounts exactly from the bill; add the source page number.",
       "Calculate each line's balance with the formula and check it against the bill's balance.",
       "Total by provider, then the grand totals: billed, adjustments, paid, balance.",
       "Mark every provider with a balance or a lien (letter of protection, hospital lien, insurer reimbursement)."
     ],
     table:{headers:["Provider","DOS","Billed","Adj.","Paid","Balance"], rows:[
       ["Summit Orthopedic","04/20/2026","$650.00","$310.00","$340.00","$0.00"],
       ["Bayside Pain Mgmt","07/10/2026","$3,900.00","$0.00","$0.00","$3,900.00"]
     ]},
     callout:{type:"tip", label:"Billed vs. paid", text:"Some states let the claim use the full billed amount; others limit it to what was actually paid. Keep both columns — the attorney decides which number goes in the demand."},
     trainerCue:"Have trainees compute the two sample balances before revealing the table."},
    {h:"Accuracy Checks: What to Leave Out",
     lead:"Only charges related to the incident belong in the specials. Every exclusion gets a note, not a silent delete.",
     table:{headers:["Problem","What you do"], rows:[
       ["Date of service before the date of incident","Exclude from specials; note it as prior treatment for the attorney"],
       ["Same charge, same date, same code twice","List it once; note the duplicate; confirm with the provider's billing office"],
       ["Unrelated care (annual physical, dental, flu shot)","Exclude and note it"],
       ["Visit in the chronology with no bill","Request the bill"],
       ["Bill with no matching record","Request the record"]
     ]},
     points:[
       "Re-add the totals after every correction; a demand with a math error loses credibility.",
       "The itemization total must match the figure in the demand letter to the cent."
     ],
     trainerCue:"Ask: why is a duplicate charge worse for the firm than a missing one?"},
    {h:"Liens, Future Medical and Other Economic Losses",
     lead:"The itemization also tells the attorney who must be paid back from a settlement, and sits beside the other economic damages.",
     points:[
       "<b>Liens and reimbursement claims:</b> providers treating on a letter of protection (LOP), hospital liens, health insurers and plans with reimbursement rights, and Medicare/Medicaid. List each with the amount and contact.",
       "<b>Future medical:</b> treatment a doctor recommends in writing, with the cost estimate — e.g. \"up to 2 additional ESIs, est. $3,900 each.\" Keep it separate from past medical.",
       "<b>Lost wages:</b> verified by the employer (dates missed × rate of pay), with pay stubs or tax records.",
       "<b>Other out-of-pocket:</b> mileage to appointments, prescriptions, medical equipment — with receipts."
     ],
     callout:{type:"warn", label:"Never", text:"Never tell a provider or insurer what the case settled for, or agree to a lien reduction. Lien negotiation is the attorney's call."},
     trainerCue:"Ask: which providers in a case like Dana Whitfield's would you expect to have liens, and why?"}
  ],
  practice:"bills",
  quiz:[
    {q:"How do you calculate a line's balance?",
     opts:["Billed + adjustments","Billed − adjustments − all payments (insurance, PIP/MedPay and client)","Billed − the client's payments only","Paid − billed"],
     a:1, r:"Balance = Billed − Adjustments − all Payments. If it doesn't match the bill, information is missing."},
    {q:"Which document best supports a hospital line in the itemization?",
     opts:["A balance-due postcard","The itemized statement (UB-04 / ledger) showing dates of service and charges","The client's recollection of the cost","The ER discharge instructions"],
     a:1, r:"You need the itemized bill with dates of service, charges, adjustments and payments."},
    {q:"A chiropractic charge is dated two months before the date of incident. What do you do?",
     opts:["Include it — more specials means a bigger demand","Exclude it from the specials and note it as prior treatment for the attorney","Change the date to after the incident","Delete it without a note"],
     a:1, r:"Pre-incident charges are not specials. Note them — they are also a prior-treatment flag."},
    {q:"The same MRI appears twice: same date, same CPT code, same amount. What do you do?",
     opts:["List it twice","List it once, note the duplicate, and confirm with the provider's billing office","Remove both","Average the two amounts"],
     a:1, r:"List it once and document the duplicate; confirm with billing."},
    {q:"A chiropractor treated the client on a letter of protection and the full balance is unpaid. What does that mean?",
     opts:["The bill can be ignored","It is a lien the attorney must protect and resolve from any settlement","The client must pay it before the demand is sent","The adjuster will pay it directly"],
     a:1, r:"An LOP balance is paid from the settlement. Track the amount and the contact on the lien list."},
    {q:"Should the demand use billed or paid amounts?",
     opts:["Always billed","Always paid","It depends on the jurisdiction and the attorney's instruction — keep both columns","Whichever is higher"],
     a:2, r:"Rules differ by state. Keep both columns; the attorney decides."}
  ]
},
{
  id:3, icon:"✉", deck:"demand", title:"Demand Overview", short:"Demand",
  summary:"Understand what a demand letter is, what goes in it, when it is ready to go out, and your role versus the attorney's.",
  lessons:[
    {h:"What a Demand Letter Is",
     lead:"A demand letter is the firm's formal settlement request to the at-fault party's insurance company. It presents liability, the client's damages, and a specific amount, with every point backed by an exhibit.",
     points:[
       "Sent to the liability carrier's adjuster (or the client's own carrier for UM/UIM claims).",
       "Usually sent once the client has finished treatment or reached <b>maximum medical improvement (MMI)</b>, so the full damages are known.",
       "It opens negotiation: the adjuster responds with an offer, a denial, or a request for more information.",
       "Some demands are time-limited or policy-limits demands with strict legal requirements — those are drafted and approved by the attorney."
     ],
     callout:{type:"tip", label:"Think of it as", text:"A closing argument on paper. The medsum and itemization are the evidence; the demand letter tells the story and asks for the money."},
     trainerCue:"Open the Demand Overview deck. Ask: who is the audience, and what does the adjuster need to see to move money?"},
    {h:"The Parts of a Demand Letter",
     lead:"Most firms use a template. Know what each section does and where its facts come from.",
     table:{headers:["Section","What it covers","Source"], rows:[
       ["Heading","Adjuster, carrier, claim #, insured, claimant, date of loss","Claim file"],
       ["Introduction","Who the firm represents and why it is writing","Retainer / letter of representation"],
       ["Facts & liability","How it happened and why the insured is at fault","Police report, photos, witnesses"],
       ["Injuries & treatment","Diagnoses and treatment course","Medical summary"],
       ["Medical specials","Total medical expenses, by provider","Bills itemization"],
       ["Lost wages & other losses","Time missed, rate of pay, out-of-pocket","Employer verification, receipts"],
       ["Non-economic damages","Pain, limits on daily life, loss of enjoyment","Client impact statement, records"],
       ["Demand & deadline","The amount and how long the offer stays open","Attorney"],
       ["Enclosures","Every exhibit, listed","Exhibit index"]
     ]},
     trainerCue:"Ask trainees to name the source document for each section without looking at the table."},
    {h:"Is It Ready to Send? The Pre-Demand Checklist",
     lead:"A demand sent too early leaves money on the table or has to be redone. Check the file before drafting.",
     steps:[
       "Treatment is complete or the client is at MMI; future care is documented if recommended.",
       "Records <b>and</b> bills are in from every provider on the provider list.",
       "The medsum and bills itemization are finished and reconciled.",
       "Liability documents are in: police/incident report, photos, witness information.",
       "Policy limits are known or have been requested (the attorney needs them to set strategy).",
       "Lost wages are verified by the employer; out-of-pocket receipts are collected.",
       "The client impact statement is reviewed and approved by the client.",
       "Liens are identified (final amounts often come only after settlement — track them).",
       "The statute of limitations is calendared and there is time to negotiate."
     ],
     callout:{type:"warn", label:"Never", text:"Never send a demand without the attorney's review and sign-off. The legal assistant drafts; the attorney sets the amount and signs."},
     trainerCue:"Ask: which checklist item most often holds a demand up in practice? (Usually a missing bill or record.)"},
    {h:"Your Role vs. the Attorney's",
     lead:"The legal assistant makes the demand possible; the attorney makes the legal decisions.",
     table:{headers:["Legal assistant","Attorney"], rows:[
       ["Gathers records, bills and liability documents","Evaluates liability and case value"],
       ["Builds the medsum and bills itemization","Decides billed vs. paid amounts"],
       ["Drafts the demand from the template with facts and figures","Sets the demand amount and deadline"],
       ["Assembles and sends the packet once approved","Reviews, edits and signs the letter"],
       ["Logs responses and calendars deadlines","Evaluates offers and advises the client"]
     ]},
     points:[
       "You never state a settlement value, accept or reject an offer, or give the client legal advice.",
       "You do flag problems early: missing documents, inconsistent numbers, approaching deadlines."
     ],
     trainerCue:"Role-play: the client calls asking \"how much is my case worth?\" — what do you say?"},
    {h:"Writing a Persuasive, Accurate Demand",
     lead:"The strongest demands are specific and consistent. The adjuster checks every number against the exhibits.",
     points:[
       "Cite an exhibit for every fact: \"(Exhibit C, p. 52)\".",
       "Humanize the client with specifics from the impact statement: \"could not lift her 3-year-old son for six weeks\" beats \"suffered greatly.\"",
       "Address known weaknesses (gaps, prior injuries) with the records that explain them, before the adjuster raises them.",
       "Every figure — specials, wages, totals — must match the itemization exactly."
     ],
     example:"<b>Instead of:</b> \"Ms. Whitfield suffered severe, life-altering injuries.\"<br><b>Write:</b> \"A cervical MRI on 03/30/2026 showed a 3 mm disc protrusion at C5-6 (Exhibit C, p. 41). Despite 24 chiropractic visits she required a C5-6 epidural steroid injection on 07/10/2026 (Exhibit C, p. 64).\"",
     trainerCue:"Ask trainees to rewrite one vague sentence from a sample demand with a specific fact and an exhibit cite."}
  ],
  practice:"demand",
  quiz:[
    {q:"What is a demand letter?",
     opts:["A court filing that starts a lawsuit","A written settlement request to the liable party's insurer presenting liability, damages and a specific amount, backed by exhibits","A letter asking a provider for records","A bill sent to the client"],
     a:1, r:"It is the formal settlement request that opens negotiation with the insurer."},
    {q:"When is a demand usually sent?",
     opts:["The day after the accident","Once the client has finished treatment or reached MMI and all records and bills are in","Only after a lawsuit is filed","Whenever the adjuster asks for it"],
     a:1, r:"The full damages must be known and documented first."},
    {q:"Who sets the demand amount?",
     opts:["The legal assistant","The client alone","The attorney","The adjuster"],
     a:2, r:"The attorney sets the amount and signs. The legal assistant drafts and assembles."},
    {q:"What makes the non-economic damages section strong?",
     opts:["General words like \"tremendous suffering\"","Specific, real examples of daily-life impact supported by the client statement and records","A long list of every possible injury","Quoting jury verdicts from other states"],
     a:1, r:"Specific, documented examples persuade; adjectives don't."},
    {q:"The letter says the medical specials are $19,666.40 but the itemization totals $19,516.40. What do you do?",
     opts:["Send it — it's close enough","Find and fix the difference before the letter goes to the attorney for signature","Round both to $20,000","Let the adjuster point it out"],
     a:1, r:"Every figure must match the itemization and the exhibits exactly."},
    {q:"Why confirm the at-fault driver's policy limits before the demand goes out?",
     opts:["It isn't needed","The limits shape the attorney's strategy and the demand amount","So the legal assistant can tell the client what the case is worth","The adjuster requires it"],
     a:1, r:"Limits affect strategy (for example, a policy-limits demand). The attorney needs them before setting the number."}
  ]
},
{
  id:4, icon:"📦", deck:"packet", title:"Demand Packet & Responses", short:"Packet",
  summary:"Assemble and send a complete demand packet, then track, log and prepare responses when the adjuster answers.",
  lessons:[
    {h:"Assembling the Demand Packet",
     lead:"The packet is the demand letter plus every exhibit it cites, in one organized, bookmarked PDF.",
     table:{headers:["#","Item"], rows:[
       ["1","Demand letter (signed by the attorney)"],
       ["2","Exhibit index"],
       ["3","Police / incident report"],
       ["4","Scene and vehicle photographs"],
       ["5","Medical summary & chronology"],
       ["6","Itemized medical specials"],
       ["7","Medical records & bills, by provider in date order"],
       ["8","Lost wage verification"],
       ["9","Client impact statement"]
     ]},
     points:[
       "This is the LSH standard order: liability first, then injuries, then money, then impact. Follow your firm's template if it differs.",
       "Exhibit letters in the letter must match the tabs and bookmarks in the PDF.",
       "Page-number the whole packet so the letter can cite pages; check the file size the adjuster's email or portal accepts."
     ],
     callout:{type:"tip", label:"Final check", text:"Open every exhibit cite in the letter and confirm it lands on the right page. A broken cite is the first thing an adjuster notices."},
     trainerCue:"Open the Demand Packet and Responses deck and have trainees call out the order before you reveal it."},
    {h:"Sending, Tracking and Following Up",
     lead:"Once the attorney approves, the packet goes out in a way you can prove, and the clock starts.",
     steps:[
       "Send by the method the adjuster accepts (email, portal, certified mail) and keep proof of delivery.",
       "Save a copy of exactly what was sent, with the date, in the case file.",
       "Calendar the response deadline in the letter, plus follow-ups (e.g. day 14 and day 25).",
       "Confirm receipt with the adjuster within a few business days.",
       "Log every contact: date, who, what was said, next step."
     ],
     callout:{type:"warn", label:"Deadlines", text:"A time-limited demand's deadline and the statute of limitations are the two dates that can't be missed. Both go on the attorney's calendar too."},
     trainerCue:"Ask: what proof would you show if the adjuster says they never received the demand?"},
    {h:"Reading the Adjuster's Response",
     lead:"Responses fall into a few types. Recognize the type, log it, and route it to the attorney the same day.",
     table:{headers:["Response","What it means","First step"], rows:[
       ["Offer / counteroffer","A settlement number, usually low","Log it; send it to the attorney right away"],
       ["Request for information","Missing or additional documents","Log and calendar; gather; attorney approves what is sent"],
       ["Dispute","Challenges treatment, causation or amounts","Pull the records that answer it; draft a rebuttal for the attorney"],
       ["Denial of liability","Carrier says its insured isn't at fault","Alert the attorney immediately"],
       ["No response","Deadline approaching","Follow up in writing; tell the attorney"]
     ]},
     points:[
       "Common adjuster arguments: <b>gaps in treatment</b>, <b>pre-existing conditions</b>, <b>too much chiropractic care</b>, <b>low property damage</b>, <b>billed vs. paid amounts</b>, and <b>causation</b>.",
       "Most can be answered from the medsum: the reason for a gap, the doctor's causation opinion, the imaging findings."
     ],
     trainerCue:"Read a sample adjuster letter and have trainees label its type and first step."},
    {h:"Preparing the Response",
     lead:"You prepare; the attorney decides. Every offer reaches the attorney, and the attorney communicates it to the client.",
     steps:[
       "Log the response and send it to the attorney the same day with a one-line summary.",
       "For each argument, find the records that answer it and note the page numbers.",
       "Draft the rebuttal or supplement letter for the attorney's review, citing exhibits and pages.",
       "Gather and send any requested documents only after the attorney approves the scope.",
       "Calendar the next deadline and follow-up."
     ],
     example:"<b>Adjuster:</b> \"There is a 43-day gap in treatment between 05/14/2026 and 06/26/2026.\"<br><b>Draft rebuttal:</b> \"The gap is explained in the records. At her last chiropractic visit on 05/14/2026, Ms. Whitfield reported she could not continue because of childcare (Exhibit G, p. 38). When she began pain management on 06/26/2026, her neck pain and right-arm tingling had continued since the collision (p. 60), and Dr. Patel had already related her injuries to the 03/14/2026 collision (pp. 52–55).\"",
     callout:{type:"warn", label:"Never", text:"Never accept, reject or counter an offer yourself, and never discuss offers with the client before the attorney does."},
     trainerCue:"Ask trainees to find the page numbers in the example that answer the adjuster's argument."},
    {h:"Settlement and Next Steps",
     lead:"Negotiation ends in a settlement or a decision to litigate. Either way, there is work to track.",
     points:[
       "<b>Settled:</b> confirm the amount in writing; the attorney reviews the release; the client signs; track the settlement check.",
       "<b>Before disbursement:</b> get final lien and balance amounts from every provider and insurer on the lien list; the attorney negotiates reductions and prepares the settlement statement.",
       "<b>No agreement:</b> the attorney may propose mediation or file suit. The statute of limitations must never lapse while negotiating.",
       "Close out the file checklist so nothing — a lien, a final bill, a client document — is left open."
     ],
     callout:{type:"tip", label:"Close the loop", text:"Your bills itemization becomes the disbursement worksheet. Keep it updated with final lien amounts as they come in."},
     trainerCue:"Ask: which document from Unit 2 does the attorney need at disbursement, and what must be updated on it?"}
  ],
  practice:"packet",
  quiz:[
    {q:"In the LSH standard packet order, what comes right after the demand letter and the exhibit index?",
     opts:["Medical records","Police / incident report","Client impact statement","Lost wage verification"],
     a:1, r:"Liability first: the police/incident report, then photos, then the injury and money exhibits."},
    {q:"How should the packet be sent?",
     opts:["From your personal email so it goes faster","By a method the adjuster accepts, with proof of delivery, keeping a copy of exactly what was sent","By text message","Any way — delivery doesn't matter"],
     a:1, r:"Proof of delivery and an exact copy protect deadlines and the record."},
    {q:"An offer of $18,500 arrives by email. What do you do?",
     opts:["Reject it — it's too low","Counter at double the amount","Log it and send it to the attorney the same day; the attorney communicates it to the client","Tell the client first"],
     a:2, r:"Every offer goes to the attorney promptly; the attorney advises the client."},
    {q:"The adjuster argues the neck injury is pre-existing. What do you prepare?",
     opts:["Nothing — the attorney will handle it","The prior records and the treating doctor's causation opinion, with page cites, in a draft rebuttal for the attorney","A letter agreeing the injury is pre-existing","A new demand for a higher amount"],
     a:1, r:"Answer arguments with records and page cites; the attorney reviews before anything is sent."},
    {q:"The adjuster requests five years of prior medical records. What do you do?",
     opts:["Send everything you have right away","Log it, calendar it and route it to the attorney, who decides what (if anything) is provided","Ignore it","Ask the adjuster to get them directly from the providers"],
     a:1, r:"The scope of records disclosed is the attorney's decision (and the client's authorization matters)."},
    {q:"Negotiations have stalled and the statute of limitations is two months away. What do you do?",
     opts:["Keep waiting for the adjuster","Alert the attorney immediately so the claim is protected, for example by filing suit","Send the adjuster a reminder only","Close the file"],
     a:1, r:"The statute of limitations must never lapse. The attorney decides the next step, but you raise it now."}
  ]
}
];
window.MS_UNITS = MS_UNITS;

/* ============================================================
   PRACTICE DATA
   ============================================================ */
// Unit 1 — the records stack (shown out of order)
const CHRON_FLAGS = ["Routine entry — no special flag","Prior injury / pre-existing","Gap in treatment (30+ days)","Objective diagnostic finding","Causation opinion","Procedure (injection / surgery)","MMI / future care"];
const CHRON_RECORDS = [
  {id:"r1", date:"2026-03-30", provider:"Clearview Imaging", text:"MRI cervical spine without contrast. Impression: 3 mm central disc protrusion at C5-6 abutting the ventral thecal sac. No fracture.", pages:"p. 41", flag:3},
  {id:"r2", date:"2026-06-26", provider:"Bayside Pain Management", text:"New patient. Neck pain 6/10 with right-arm tingling since the MVC of 03/14/2026; symptoms continued after she stopped therapy. Plan: C5-6 interlaminar ESI.", pages:"pp. 60–63", flag:2,
   why:"Her previous visit was 05/14/2026 — 43 days earlier. Flag the gap and the reason the records give (childcare, p. 38)."},
  {id:"r3", date:"2025-01-08", provider:"Harbor Spine & Chiropractic", text:"Low back strain after lifting boxes at home. Treated 3 visits; released 01/29/2025.", pages:"p. 11", flag:1,
   why:"Before the date of incident and the same body region (low back). Always include and flag prior injuries."},
  {id:"r4", date:"2026-03-14", provider:"Riverside Medical Center ED", text:"42 y/o F restrained driver, rear-ended while stopped. c/o neck pain 7/10, low back pain 5/10. CT C-spine: no acute fracture. Dx: cervical strain, lumbar strain. Rx cyclobenzaprine, ibuprofen. Discharged home.", pages:"pp. 1–9", flag:0},
  {id:"r5", date:"2026-08-21", provider:"Summit Orthopedic Associates", text:"Follow-up, Dr. A. Patel. Neck pain 3/10, intermittent. Patient at maximum medical improvement. Future care: up to 2 additional ESIs over the next 24 months if symptoms recur (est. $3,900 each).", pages:"pp. 56–58", flag:6},
  {id:"r6", date:"2026-03-17", provider:"Harbor Spine & Chiropractic", text:"Initial exam. Neck pain 7/10 radiating to the right shoulder; LBP 5/10. Cervical ROM reduced 40%, TTP C5–C7 paraspinals. Plan: chiropractic care 3x/week for 8 weeks.", pages:"pp. 12–15", flag:0},
  {id:"r7", date:"2026-07-10", provider:"Bayside Pain Management", text:"Procedure note: C5-6 interlaminar epidural steroid injection under fluoroscopy. Tolerated well. Pain 6/10 before, 2/10 after.", pages:"pp. 64–66", flag:5},
  {id:"r8", date:"2026-04-20", provider:"Summit Orthopedic Associates", text:"Ortho consult, Dr. A. Patel. Neck pain radiating to the right arm. MRI reviewed. Assessment: C5-6 disc protrusion with right C6 radiculopathy. Plan: continue therapy; refer to pain management for ESI. Opinion: injuries causally related to the 03/14/2026 MVC.", pages:"pp. 52–55", flag:4,
   why:"The doctor ties the injury to the collision — the single most useful sentence for the demand."},
  {id:"r9", date:"2026-05-14", provider:"Harbor Spine & Chiropractic", text:"Visit 24 of 24. Neck pain 4/10, LBP 2/10. Patient reports she cannot attend further visits because of childcare. Discharged from chiropractic care, improved.", pages:"p. 38", flag:0,
   why:"A routine discharge — but note the reason she stopped (childcare); it explains the gap flagged at the next visit."}
];
const chronSorted = ()=>CHRON_RECORDS.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:0);
const usDate = (iso)=>{ const [y,m,d] = iso.split("-"); return `${m}/${d}/${y}`; };

// Unit 2 — the billing ledgers. inc: related to the 03/14/2026 incident; why: reason for excluding
const BILL_LINES = [
  {id:"b1", provider:"Riverside Medical Center", dos:"03/14/2026", desc:"ED visit (Level 4) + CT cervical spine", billed:4850, adj:2210, ins:2140, pip:0, pt:500, inc:true},
  {id:"b2", provider:"Riverside Emergency Physicians", dos:"03/14/2026", desc:"ED physician services", billed:1120, adj:0, ins:0, pip:1120, pt:0, inc:true},
  {id:"b3", provider:"Corner Pharmacy", dos:"03/14/2026", desc:"Rx cyclobenzaprine, ibuprofen", billed:86.40, adj:0, ins:0, pip:0, pt:86.40, inc:true},
  {id:"b4", provider:"Harbor Spine & Chiropractic", dos:"01/08/2025 – 01/29/2025", desc:"Low back strain, 3 visits", billed:285, adj:0, ins:210, pip:0, pt:75, inc:false, why:"pre"},
  {id:"b5", provider:"Harbor Spine & Chiropractic", dos:"03/17/2026 – 05/14/2026", desc:"Chiropractic care, 24 visits (letter of protection)", billed:5760, adj:0, ins:0, pip:0, pt:0, inc:true},
  {id:"b6", provider:"Clearview Imaging", dos:"03/30/2026", desc:"MRI cervical spine w/o contrast (CPT 72141)", billed:2400, adj:0, ins:0, pip:1380, pt:0, inc:true},
  {id:"b7", provider:"Clearview Imaging", dos:"03/30/2026", desc:"MRI cervical spine w/o contrast (CPT 72141)", billed:2400, adj:0, ins:0, pip:0, pt:0, inc:false, why:"dup"},
  {id:"b8", provider:"Summit Orthopedic Associates", dos:"04/20/2026", desc:"New patient consultation", billed:650, adj:310, ins:290, pip:0, pt:50, inc:true},
  {id:"b9", provider:"Northgate Family Practice", dos:"05/02/2026", desc:"Annual wellness exam", billed:275, adj:95, ins:180, pip:0, pt:0, inc:false, why:"unrel"},
  {id:"b10", provider:"Bayside Pain Management", dos:"06/26/2026", desc:"New patient evaluation", billed:425, adj:0, ins:0, pip:0, pt:0, inc:true},
  {id:"b11", provider:"Bayside Pain Management", dos:"07/10/2026", desc:"C5-6 interlaminar ESI (CPT 62321)", billed:3900, adj:0, ins:0, pip:0, pt:0, inc:true},
  {id:"b12", provider:"Summit Orthopedic Associates", dos:"08/21/2026", desc:"Follow-up visit", billed:325, adj:155, ins:145, pip:0, pt:25, inc:true}
];
const BILL_CHOICES = [["inc","Include — related"],["pre","Exclude — before the date of incident"],["dup","Exclude — duplicate charge"],["unrel","Exclude — unrelated care"]];
const cents = (n)=>Math.round(n*100);
const money = (n)=>"$"+(Math.round(n*100)/100).toLocaleString("en-US",{minimumFractionDigits:2, maximumFractionDigits:2});
const linePaid = (l)=>l.ins+l.pip+l.pt;
const lineBal = (l)=>(cents(l.billed)-cents(l.adj)-cents(linePaid(l)))/100;
function billTotals(){
  const inc = BILL_LINES.filter(l=>l.inc);
  const sum = (f)=>inc.reduce((a,l)=>a+cents(f(l)),0)/100;
  return {billed:sum(l=>l.billed), adj:sum(l=>l.adj), paid:sum(linePaid), bal:sum(lineBal)};
}
function billLienProviders(){
  const by = {};
  BILL_LINES.filter(l=>l.inc).forEach(l=>{ by[l.provider] = (by[l.provider]||0) + cents(lineBal(l)); });
  return Object.keys(by).filter(p=>by[p]>0);
}
const billProviders = ()=>[...new Set(BILL_LINES.filter(l=>l.inc).map(l=>l.provider))];

// Unit 3 — pre-demand readiness (as of 09/01/2026) and demand sections
const READY_ITEMS = [
  {t:"Dr. Patel placed Dana at MMI on 08/21/2026 and documented future care.", block:false},
  {t:"Records and bills received from every provider — except Bayside Pain Management's itemized bill (records received).", block:true, why:"The ESI is the largest single charge. The specials can't be final without the bill."},
  {t:"Police report and scene / vehicle photos are in the file.", block:false},
  {t:"Keystone Mutual was asked for the policy limits on 07/02/2026; no answer yet.", block:true, why:"The attorney needs the limits to set the demand strategy. Follow up before drafting."},
  {t:"Employer verified 11 missed workdays at $312.00/day.", block:false},
  {t:"The health insurer will issue its final reimbursement figure only after the case settles.", block:false, why:"Not a blocker — track it on the lien list; final lien amounts come at settlement."},
  {t:"Statute of limitations (03/14/2028) is calendared.", block:false},
  {t:"The attorney has not yet reviewed the draft or set the demand amount.", block:true, why:"Nothing goes out without the attorney's review, amount and signature."}
];
const DEMAND_SECTIONS = ["Introduction","Facts & liability","Injuries & treatment","Medical specials","Lost wages","Non-economic damages","Demand & deadline","Enclosures"];
const DEMAND_SNIPPETS = [
  {t:"Ms. Whitfield's related medical expenses total $19,516.40, itemized by provider and date of service in Exhibit D.", s:3},
  {t:"Please be advised that this office represents Dana Whitfield for injuries sustained in the motor vehicle collision of March 14, 2026 involving your insured, Grant Mercer.", s:0},
  {t:"For six weeks she could not lift her 3-year-old son or turn her head to check her blind spot, and she still wakes at night with neck pain (Exhibit G).", s:5},
  {t:"Ms. Whitfield was stopped at a red light at Oak Street and 5th Avenue when your insured's SUV struck her from behind. The officer cited your insured for following too closely (Exhibit A).", s:1},
  {t:"Enclosed: police report, photographs, medical summary, itemized specials, medical records and bills, wage verification, client statement.", s:7},
  {t:"A cervical MRI on 03/30/2026 showed a 3 mm disc protrusion at C5-6, and she required a C5-6 epidural steroid injection on 07/10/2026 (Exhibit C).", s:2},
  {t:"We are authorized to resolve this claim for $85,000.00. This offer remains open for 30 days from the date of this letter.", s:6},
  {t:"She missed 11 workdays as a dental hygienist at $312.00 per day, a loss of $3,432.00, verified by her employer (Exhibit F).", s:4}
];

// Unit 4 — packet order and adjuster responses
const PACKET_ITEMS = ["Demand letter (signed)","Exhibit index","Police / incident report","Scene and vehicle photographs","Medical summary & chronology","Itemized medical specials","Medical records & bills by provider","Lost wage verification","Client impact statement"];
const PACKET_SHUFFLE = [5,2,8,0,6,3,1,7,4];
const RESPONSE_CASES = [
  {from:"Tom Reyes, Keystone Mutual", msg:"We have reviewed your demand. Our offer to resolve all claims is $18,500.",
   opts:["Reply that the offer is rejected because it is below the specials","Log the offer and send it to the attorney the same day; calendar the follow-up","Tell Dana about the offer so she can start thinking about it","Counter at $70,000 to keep things moving"], a:1,
   r:"Every offer goes to the attorney promptly. The attorney evaluates it and communicates it to the client."},
  {from:"Tom Reyes, Keystone Mutual", msg:"There is a 43-day gap in treatment between 05/14/2026 and 06/26/2026. We question whether the later treatment is related.",
   opts:["Pull the records that explain the gap and the causation opinion, and draft a rebuttal with page cites for the attorney","Remove the pain-management bills from the demand","Tell the adjuster the gap doesn't matter","Wait for the attorney to notice the letter"], a:0,
   r:"The records answer it: childcare at the last chiro visit (p. 38), continuing symptoms at the pain-management intake (p. 60), Dr. Patel's causation opinion (pp. 52–55)."},
  {from:"Tom Reyes, Keystone Mutual", msg:"Please send all of Ms. Whitfield's medical records for the five years before the accident.",
   opts:["Send every record in the file today","Log and calendar it and route it to the attorney, noting the known 2025 low back treatment; the attorney decides the scope","Ignore the request","Ask Dana to email her records to the adjuster"], a:1,
   r:"The scope of disclosure is the attorney's decision; the request may be overbroad."},
  {from:"Tom Reyes, Keystone Mutual", msg:"We will only consider the amounts actually paid, not the amounts billed.",
   opts:["Agree and recalculate the demand","Flag it for the attorney and prepare a billed-vs-paid breakdown from the itemization","Remove the adjustments column","Refuse to respond"], a:1,
   r:"Billed vs. paid depends on the jurisdiction; the attorney responds. Your itemization already has both columns."},
  {from:"(no response)", msg:"The 30-day demand deadline is tomorrow and nothing has come in from Keystone Mutual.",
   opts:["Do nothing — silence means they accept","Confirm the proof of delivery, follow up with the adjuster in writing, and alert the attorney to the deadline","Send the packet again without telling anyone","Close the file"], a:1,
   r:"Document delivery, follow up in writing, and make sure the attorney knows the deadline is here."}
];

/* ============================================================
   STATE + STORAGE
   ============================================================ */
function msLoadSync(){
  let v = (typeof mem!=="undefined" && mem[MS_KEY]!==undefined) ? mem[MS_KEY] : undefined;
  if(v===undefined){ try{ const raw = localStorage.getItem("lsh_"+MS_KEY); if(raw!==null) v = JSON.parse(raw); }catch(e){} }
  return (v && typeof v==="object") ? v : {};
}
function msData(){
  if(!state.msProgress || typeof state.msProgress!=="object") state.msProgress = msLoadSync();
  const d = state.msProgress;
  ["pos","checks","quiz","labs","drafts"].forEach(k=>{ if(!d[k] || typeof d[k]!=="object") d[k] = {}; });
  return d;
}
let msSaveTimer = null;
function msSave(now){
  clearTimeout(msSaveTimer);
  const go = ()=>{ if(state.traineeId || state.isAdmin) storeSet(MS_KEY, state.msProgress||{}); };
  if(now) go(); else msSaveTimer = setTimeout(go, 600);
}
// Personal key: saved with the cloud progress record, restored on any device, synced across tabs.
if(typeof PERSONAL_KEYS!=="undefined" && !PERSONAL_KEYS.includes(MS_KEY)){ PERSONAL_KEYS.push(MS_KEY); PERSONAL_KEY_SET.add(MS_KEY); }
if(typeof TAB_SYNC_KEYS!=="undefined") TAB_SYNC_KEYS[MS_KEY] = "msProgress";
// Never leak one trainee's module progress to the next person on the same device.
const __msReset = window.resetTraineeSessionData;
if(typeof __msReset==="function") window.resetTraineeSessionData = async function(){
  const r = await __msReset.apply(this, arguments);
  clearTimeout(msSaveTimer); state.msProgress = null; state.msUnit = null;
  await storeSet(MS_KEY, null);
  return r;
};
// A cloud restore after sign-in rewrites the key — pick it up on the next render.
const __msRestore = window.cloudRestore;
if(typeof __msRestore==="function") window.cloudRestore = async function(){
  const r = await __msRestore.apply(this, arguments);
  if(r) state.msProgress = null;
  return r;
};

const unitById = (id)=>MS_UNITS.find(u=>u.id===Number(id));
const stepCount = (u)=>u.lessons.length + 2;         // lessons, practice, unit check
function unitStatus(u){
  const d = msData(), c = d.checks[u.id], l = d.labs[u.id];
  return {passed: !!(c && c.done), best: c ? c.best : null, lab: l && typeof l.best==="number" ? l.best : null,
          started: !!(c || l || (d.pos[u.id]||0) > 0)};
}
const unitsPassed = ()=>MS_UNITS.filter(u=>unitStatus(u).passed).length;

/* ============================================================
   PAGE
   ============================================================ */
function renderMedsum(){
  const u = state.msUnit ? unitById(state.msUnit) : null;
  return `<div class="ms-root">${u ? renderUnit(u) : renderLanding()}</div>`;
}
function deckButtons(key, compact){
  const dk = MS_DECKS[key]; if(!dk) return "";
  const open = state.msDeckOpen===key;
  return `<div class="ms-deck-actions">
      <a class="btn btn-navy btn-sm" href="${esc(dk.url)}" target="_blank" rel="noopener">🎨 Open in Canva ↗</a>
      <button type="button" class="btn btn-ghost btn-sm" onclick="msToggleDeck('${key}')">${open ? "✕ Hide deck" : "▶ View here"}</button>
    </div>
    ${open ? `<div class="ms-deck-frame${compact?" compact":""}"><iframe src="${esc(deckEmbedUrl(dk.url))}" title="${esc(dk.title)}" loading="lazy" allowfullscreen allow="fullscreen"></iframe>
      <div class="ms-deck-note">Deck not showing? Use <b>Open in Canva ↗</b>.</div></div>` : ""}`;
}
function renderLanding(){
  const n = unitsPassed(), pct = Math.round(n/MS_UNITS.length*100);
  const flow = ["Records & bills","Medical chronology","Medical summary","Bills itemization","Demand letter","Demand packet","Responses","Settlement"];
  return `
    <h1>Medsum &amp; Demand Training</h1>
    <p>Personal-injury case work, start to finish: turn medical records into a chronology and summary, itemize the bills, and build the demand packet the attorney sends — then handle the adjuster's response.</p>
    <div class="card ms-progress">
      <div><b>${n} of ${MS_UNITS.length}</b> units passed${n===MS_UNITS.length ? " · 🎉 Module complete" : ""}</div>
      <div class="ms-bar"><span style="width:${pct}%"></span></div>
      <div class="ms-progress-note">Specialty module — separate from the 10-day roadmap. Each unit: lessons → practice → unit check (pass at ${MS_PASS}%).</div>
    </div>
    <h2 class="section-title">How a demand comes together</h2>
    <div class="ms-flow">${flow.map((f,i)=>`<span class="ms-flow-step">${i+1}. ${f}</span>`).join('<span class="ms-flow-arrow" aria-hidden="true">→</span>')}</div>
    <h2 class="section-title">Units <span class="tag">${MS_UNITS.length} UNITS</span></h2>
    <div class="ms-units">${MS_UNITS.map(unitCard).join("")}</div>
    <h2 class="section-title">Training decks <span class="tag">CANVA</span></h2>
    <div class="ms-decks">${Object.keys(MS_DECKS).map(k=>{ const dk = MS_DECKS[k]; const unit = MS_UNITS.find(x=>x.deck===k);
      return `<div class="card ms-deck${k==="overview"?" featured":""}">
        <div class="ms-deck-kicker">${unit ? `Unit ${unit.id}` : "Module overview"}</div>
        <div class="ms-deck-title">${esc(dk.title)}</div>
        <p>${esc(dk.covers)}</p>
        ${deckButtons(k)}
      </div>`; }).join("")}</div>
    ${state.isAdmin ? renderTrainerPanel() : ""}`;
}
function unitCard(u){
  const s = unitStatus(u);
  const label = s.passed ? `✅ Passed — ${s.best}%` : s.started ? "◐ In progress" : "◻ Not started";
  const btn = s.passed ? "Review" : s.started ? "Continue" : "Start";
  return `<div class="card ms-unit-card${s.passed?" done":""}" onclick="goto('medsum',${u.id})">
    <div class="ms-unit-top"><span class="ms-unit-num">UNIT ${u.id}</span><span class="ms-unit-icon">${u.icon}</span></div>
    <div class="ms-unit-title">${esc(u.title)}</div>
    <p>${esc(u.summary)}</p>
    <div class="ms-unit-meta">${u.lessons.length} lessons · practice · ${u.quiz.length}-question check${s.lab!==null?` · practice ${s.lab}%`:""}</div>
    <div class="ms-unit-foot"><span class="ms-status ${s.passed?"ok":""}">${label}</span>
      <button type="button" class="btn btn-primary btn-sm" onclick="event.stopPropagation();goto('medsum',${u.id})">${btn} →</button></div>
  </div>`;
}
function stepLabel(u, i){
  if(i < u.lessons.length) return `${i+1}. ${u.lessons[i].h}`;
  return i===u.lessons.length ? "Practice" : "Unit Check";
}
function renderUnit(u){
  const d = msData();
  const total = stepCount(u);
  let step = Math.min(Math.max(0, Number(d.pos[u.id])||0), total-1);
  const pills = Array.from({length:total}, (_,i)=>{
    const kind = i<u.lessons.length ? String(i+1) : (i===u.lessons.length ? "Practice" : "Check");
    const done = i<u.lessons.length ? i < (d.pos["max"+u.id]||0) : i===u.lessons.length ? unitStatus(u).lab!==null : unitStatus(u).passed;
    return `<button type="button" class="ms-pill${i===step?" active":""}${done?" done":""}" onclick="msGo(${u.id},${i})" title="${esc(stepLabel(u,i).replace(/<[^>]+>/g,""))}">${kind}</button>`;
  }).join("");
  let body;
  if(step < u.lessons.length) body = renderLesson(u, u.lessons[step], step);
  else if(step===u.lessons.length) body = renderPractice(u);
  else body = renderQuizStep(u);
  const prev = step>0 ? `<button type="button" class="btn btn-ghost" onclick="msGo(${u.id},${step-1})">← ${esc(stepLabel(u,step-1).replace(/^\d+\.\s*/,"").replace(/<[^>]+>/g,""))}</button>` : `<span></span>`;
  const nextU = unitById(u.id+1);
  const next = step<total-1
    ? `<button type="button" class="btn btn-primary" onclick="msGo(${u.id},${step+1})">${step+1===u.lessons.length ? "Practice" : step+1===total-1 ? "Unit Check" : "Next lesson"} →</button>`
    : nextU ? `<button type="button" class="btn btn-primary" onclick="goto('medsum',${nextU.id})">Unit ${nextU.id}: ${esc(nextU.short)} →</button>`
    : `<button type="button" class="btn btn-primary" onclick="goto('medsum')">All units →</button>`;
  return `
    <a class="back-link" onclick="goto('medsum')">&larr; All Medsum &amp; Demand units</a>
    <div class="ms-unit-head">
      <div><div class="ms-unit-kicker">MEDSUM &amp; DEMAND · UNIT ${u.id} OF ${MS_UNITS.length}</div><div class="ms-unit-h">${u.icon} ${esc(u.title)}</div></div>
      <div class="ms-unit-deck">${deckButtons(u.deck, true)}</div>
    </div>
    <div class="ms-pills" role="navigation" aria-label="Unit steps">${pills}</div>
    <div class="card ms-stage">${body}</div>
    <div class="ms-nav">${prev}${next}</div>`;
}
function renderLesson(u, l, i){
  const co = l.callout ? `<div class="ms-callout ${l.callout.type==="warn"?"warn":"tip"}"><b>${esc(l.callout.label)}</b> ${l.callout.text}</div>` : "";
  const tbl = l.table ? `<div class="ms-table-wrap"><table class="ms-table"><thead><tr>${l.table.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${l.table.rows.map(r=>`<tr>${r.map((c,j)=>`<td data-label="${esc(l.table.headers[j]||"")}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
  return `
    <div class="ms-lesson-kicker">LESSON ${i+1} OF ${u.lessons.length}</div>
    <h2 class="ms-lesson-h">${esc(l.h)}</h2>
    <p class="ms-lead">${l.lead}</p>
    ${l.points ? `<ul class="ms-points">${l.points.map(p=>`<li>${p}</li>`).join("")}</ul>` : ""}
    ${tbl}
    ${l.steps ? `<div class="ms-sub">How to do it</div><ol class="ms-steps">${l.steps.map(s=>`<li>${s}</li>`).join("")}</ol>` : ""}
    ${l.example ? `<div class="ms-example"><div class="ms-sub">Example</div>${l.example}</div>` : ""}
    ${co}
    ${state.isAdmin && l.trainerCue ? `<div class="trainer-checkpoint"><div class="tc-tag">TRAINER CUE</div><p>${l.trainerCue}</p></div>` : ""}`;
}

/* ---------- practice ---------- */
function draft(uid){ const d = msData(); if(!d.drafts[uid]) d.drafts[uid] = {}; return d.drafts[uid]; }
function labState(uid){ const d = msData(); if(!d.labs[uid]) d.labs[uid] = {parts:{}}; if(!d.labs[uid].parts) d.labs[uid].parts = {}; return d.labs[uid]; }
function partResult(uid, part){ const l = msData().labs[uid]; return l && l.parts ? l.parts[part] : undefined; }
function scoreLine(pct, text){ return `<div class="ms-result ${pct>=MS_PASS?"ok":"no"}"><b>${pct}%</b> ${text}</div>`; }
function recordPart(uid, part, pct, partsTotal){
  const l = labState(uid);
  l.parts[part] = pct;
  const got = Object.values(l.parts);
  if(got.length >= partsTotal){
    const avg = Math.round(got.reduce((a,b)=>a+b,0)/got.length);
    l.last = avg; l.best = Math.max(l.best||0, avg); l.done = true; l.date = new Date().toISOString(); l.runs = (l.runs||0)+1;
    if(avg===100 && typeof burstConfetti==="function") burstConfetti();
  }
  msSave(true);
}
function sel(uid, key, options, placeholder){
  const v = draft(uid)[key];
  return `<select class="ms-select" onchange="msSet(${uid},'${key}',this.value)"><option value="">${esc(placeholder||"Choose…")}</option>${options.map(([val,label])=>`<option value="${esc(String(val))}" ${String(v)===String(val)?"selected":""}>${esc(label)}</option>`).join("")}</select>`;
}
function inp(uid, key, placeholder, cls){
  const v = draft(uid)[key]||"";
  return `<input type="text" class="ms-input ${cls||""}" value="${esc(v)}" placeholder="${esc(placeholder||"")}" oninput="msSet(${uid},'${key}',this.value)">`;
}
function area(uid, key, placeholder, rows){
  const v = draft(uid)[key]||"";
  return `<textarea class="ms-input" rows="${rows||5}" placeholder="${esc(placeholder||"")}" oninput="msSet(${uid},'${key}',this.value)">${esc(v)}</textarea>`;
}
function checkbox(uid, key, label){
  const v = !!draft(uid)[key];
  return `<label class="ms-check"><input type="checkbox" ${v?"checked":""} onchange="msSet(${uid},'${key}',this.checked)"> <span>${label}</span></label>`;
}
function renderPractice(u){
  const intro = `<div class="ms-lesson-kicker">PRACTICE</div>`;
  if(u.practice==="chron") return intro + practiceChron(u.id);
  if(u.practice==="bills") return intro + practiceBills(u.id);
  if(u.practice==="demand") return intro + practiceDemand(u.id);
  return intro + practicePacket(u.id);
}
const partHead = (letter, title, note)=>`<div class="ms-part-h"><span>${letter}</span>${esc(title)}</div>${note?`<p class="ms-part-note">${note}</p>`:""}`;

// Unit 1
function practiceChron(uid){
  const n = CHRON_RECORDS.length, dr = draft(uid);
  const rA = partResult(uid,"A"), rB = partResult(uid,"B"), rC = partResult(uid,"C");
  const sorted = chronSorted();
  return `
    <h2 class="ms-lesson-h">Build Dana Whitfield's Chronology</h2>
    ${caseCard()}
    ${partHead("A","Put the records in date order","The records arrived as a mixed stack. Give each one its position in the chronology (1 = earliest).")}
    <div class="ms-records">${CHRON_RECORDS.map(r=>`
      <div class="ms-record">
        <div class="ms-record-top"><b>${esc(r.provider)}</b><span>${usDate(r.date)} · ${esc(r.pages)}</span></div>
        <p>${esc(r.text)}</p>
        <div class="ms-record-ctl">
          <label>Position ${sel(uid, "ord_"+r.id, Array.from({length:n},(_,i)=>[i+1, String(i+1)]), "–")}</label>
          <label>Flag ${sel(uid, "flag_"+r.id, CHRON_FLAGS.map((f,i)=>[i,f]), "Choose a flag…")}</label>
        </div>
        ${rB!==undefined && String(dr["flag_"+r.id])!==String(r.flag) ? `<div class="ms-fix">Flag: <b>${esc(CHRON_FLAGS[r.flag])}</b>${r.why?` — ${esc(r.why)}`:""}</div>` : ""}
      </div>`).join("")}</div>
    <div class="ms-actions">
      <button type="button" class="btn btn-navy btn-sm" onclick="msCheckChronA(${uid})">Check the order</button>
      <button type="button" class="btn btn-navy btn-sm" onclick="msCheckChronB(${uid})">Check the flags</button>
    </div>
    ${rA!==undefined ? scoreLine(rA, `of the records are in the right position.${rA<100 ? ` Correct order: ${sorted.map(r=>usDate(r.date)).join(" → ")}.` : ""}`) : ""}
    ${partHead("B","Flag what the attorney must see","Use the <b>Flag</b> menu on each record above, then <b>Check the flags</b>.")}
    ${rB!==undefined ? scoreLine(rB, "of the flags match the answer key. Corrections are shown on each record.") : ""}
    ${partHead("C","Write the chronology row","Write the row for the <b>04/20/2026 Summit Orthopedic</b> record, in the provider's words, with the page reference.")}
    <div class="ms-row-form">
      <label>Date of service ${inp(uid,"c_dos","MM/DD/YYYY")}</label>
      <label>Provider / facility ${inp(uid,"c_prov","Doctor, facility")}</label>
      <label>Visit type ${inp(uid,"c_type","e.g. Ortho consult")}</label>
      <label>Page ref. ${inp(uid,"c_page","e.g. pp. 00–00")}</label>
    </div>
    <label class="ms-block-label">Summary ${area(uid,"c_sum","Complaints, key findings, diagnosis, plan — and anything to flag",4)}</label>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckChronC(${uid})">Check my row</button></div>
    ${rC!==undefined ? scoreLine(rC, "of the row checks passed.") + (dr._cFeedback ? `<ul class="ms-feedback">${dr._cFeedback.map(f=>`<li class="${f.ok?"ok":"no"}">${f.ok?"✓":"✗"} ${esc(f.t)}</li>`).join("")}</ul>` : "") : ""}
    ${labSummary(uid, 3)}`;
}
function labSummary(uid, parts){
  const l = msData().labs[uid]; if(!l || !l.parts) return "";
  const done = Object.keys(l.parts).length;
  if(done < parts) return `<div class="ms-lab-sum">Practice progress: ${done} of ${parts} parts checked.</div>`;
  return `<div class="ms-lab-sum done">Practice complete — score ${l.last}% (best ${l.best}%). Re-check any part to improve it, then take the <b>Unit Check</b>.</div>`;
}
window.msCheckChronA = function(uid){
  const dr = draft(uid), sorted = chronSorted();
  if(CHRON_RECORDS.some(r=>!dr["ord_"+r.id])){ toast("Give every record a position first."); return; }
  const ok = CHRON_RECORDS.filter(r=>Number(dr["ord_"+r.id])===sorted.indexOf(r)+1).length;
  recordPart(uid,"A", Math.round(ok/CHRON_RECORDS.length*100), 3); render();
};
window.msCheckChronB = function(uid){
  const dr = draft(uid);
  if(CHRON_RECORDS.some(r=>dr["flag_"+r.id]===undefined || dr["flag_"+r.id]==="")){ toast("Choose a flag for every record first."); return; }
  const ok = CHRON_RECORDS.filter(r=>String(dr["flag_"+r.id])===String(r.flag)).length;
  recordPart(uid,"B", Math.round(ok/CHRON_RECORDS.length*100), 3); render();
};
// Accepts 04/20/2026, 4/20/26, 04-20-2026 or 2026-04-20
function isDate(v, y, m, d){
  const n = String(v||"").match(/\d+/g); if(!n || n.length!==3) return false;
  const [a,b,c] = n.map(Number), four = n[0].length===4;
  const yy = four ? a : (c<100 ? 2000+c : c), mm = four ? b : a, dd = four ? c : b;
  return yy===y && mm===m && dd===d;
}
window.msCheckChronC = function(uid){
  const dr = draft(uid), sum = String(dr.c_sum||"").toLowerCase();
  const checks = [
    {t:"Date of service is 04/20/2026", ok: isDate(dr.c_dos, 2026, 4, 20)},
    {t:"Provider names Dr. Patel or Summit Orthopedic", ok: /patel|summit/i.test(dr.c_prov||"")},
    {t:"Page reference cites pp. 52–55", ok: /52/.test(dr.c_page||"")},
    {t:"Summary gives the diagnosis in the doctor's words (C5-6 disc protrusion, radiculopathy)", ok: /c\s*5\s*-?\s*6/.test(sum) && /radiculopathy/.test(sum)},
    {t:"Summary includes the plan (therapy, pain-management / ESI referral)", ok: /pain\s*management|esi|epidural|injection/.test(sum)},
    {t:"Summary records the causation opinion (related to the 03/14/2026 MVC)", ok: /caus|related|relat/.test(sum)}
  ];
  if(!String(dr.c_sum||"").trim()){ toast("Write the summary first."); return; }
  dr._cFeedback = checks;
  recordPart(uid,"C", Math.round(checks.filter(c=>c.ok).length/checks.length*100), 3); render();
};

// Unit 2
function practiceBills(uid){
  const dr = draft(uid), rA = partResult(uid,"A"), rB = partResult(uid,"B");
  const numCell = (n, label)=>`<td class="num" data-label="${label}">${money(n)}</td>`;
  return `
    <h2 class="ms-lesson-h">Itemize Dana Whitfield's Bills</h2>
    ${caseCard()}
    ${partHead("A","Related or not?","These are the billing ledger lines in the file. Decide which belong in the medical specials for the 03/14/2026 incident.")}
    <div class="ms-table-wrap"><table class="ms-table ms-bills">
      <thead><tr><th>Provider</th><th>DOS</th><th>Description</th><th class="num">Billed</th><th>Your call</th></tr></thead>
      <tbody>${BILL_LINES.map(l=>{
        const pick = dr["b_"+l.id], right = l.inc ? "inc" : l.why;
        const mark = rA!==undefined ? (pick===right ? `<span class="ms-mark ok">✓</span>` : `<span class="ms-mark no">✗ ${esc((BILL_CHOICES.find(c=>c[0]===right)||[])[1]||"")}</span>`) : "";
        return `<tr><td data-label="Provider">${esc(l.provider)}</td><td data-label="DOS">${esc(l.dos)}</td><td data-label="Description">${esc(l.desc)}</td>${numCell(l.billed,"Billed")}<td data-label="Your call">${sel(uid,"b_"+l.id,BILL_CHOICES,"Choose…")}${mark}</td></tr>`; }).join("")}</tbody>
    </table></div>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckBillsA(${uid})">Check my calls</button></div>
    ${rA!==undefined ? scoreLine(rA, "of the lines are sorted correctly.") : ""}
    ${partHead("B","Do the math","The attorney confirmed the related lines below. Use <b>Balance = Billed − Adjustments − all Payments</b> to total the itemization.")}
    ${rA===undefined ? `<div class="ms-locked">🔒 Check Part A first — the confirmed lines appear here.</div>` : `
    <div class="ms-table-wrap"><table class="ms-table ms-bills">
      <thead><tr><th>Provider</th><th>DOS</th><th class="num">Billed</th><th class="num">Adj.</th><th class="num">Health ins.</th><th class="num">PIP</th><th class="num">Client</th></tr></thead>
      <tbody>${BILL_LINES.filter(l=>l.inc).map(l=>`<tr><td data-label="Provider">${esc(l.provider)}</td><td data-label="DOS">${esc(l.dos)}</td>${numCell(l.billed,"Billed")}${numCell(l.adj,"Adj.")}${numCell(l.ins,"Health ins.")}${numCell(l.pip,"PIP")}${numCell(l.pt,"Client")}</tr>`).join("")}</tbody>
    </table></div>
    <div class="ms-row-form">
      <label>Total billed ${inp(uid,"t_billed","$0.00")}</label>
      <label>Total adjustments ${inp(uid,"t_adj","$0.00")}</label>
      <label>Total paid (all sources) ${inp(uid,"t_paid","$0.00")}</label>
      <label>Outstanding balance ${inp(uid,"t_bal","$0.00")}</label>
    </div>
    <div class="ms-sub">Which providers still have a balance to protect from the settlement?</div>
    <div class="ms-checks">${billProviders().map((p,i)=>checkbox(uid,"lien_"+i, esc(p))).join("")}</div>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckBillsB(${uid})">Check my totals</button></div>
    ${rB!==undefined ? scoreLine(rB, "of the totals and lien picks are right.") + (dr._bFeedback ? `<ul class="ms-feedback">${dr._bFeedback.map(f=>`<li class="${f.ok?"ok":"no"}">${f.ok?"✓":"✗"} ${esc(f.t)}</li>`).join("")}</ul>` : "") : ""}`}
    ${labSummary(uid, 2)}`;
}
const parseMoney = (s)=>{ const v = parseFloat(String(s||"").replace(/[^0-9.\-]/g,"")); return isNaN(v) ? null : v; };
window.msCheckBillsA = function(uid){
  const dr = draft(uid);
  if(BILL_LINES.some(l=>!dr["b_"+l.id])){ toast("Make a call on every line first."); return; }
  const ok = BILL_LINES.filter(l=>dr["b_"+l.id]===(l.inc ? "inc" : l.why)).length;
  recordPart(uid,"A", Math.round(ok/BILL_LINES.length*100), 2); render();
};
window.msCheckBillsB = function(uid){
  const dr = draft(uid), T = billTotals(), liens = billLienProviders();
  const near = (k, want)=>{ const v = parseMoney(dr[k]); return v!==null && Math.abs(cents(v)-cents(want))<=1; };
  if(["t_billed","t_adj","t_paid","t_bal"].some(k=>parseMoney(dr[k])===null)){ toast("Fill in all four totals first."); return; }
  const provs = billProviders();
  const lienOk = provs.every((p,i)=>!!dr["lien_"+i]===liens.includes(p));
  const checks = [
    {t:`Total billed — ${money(T.billed)}`, ok:near("t_billed",T.billed)},
    {t:`Total adjustments — ${money(T.adj)}`, ok:near("t_adj",T.adj)},
    {t:`Total paid, all sources — ${money(T.paid)}`, ok:near("t_paid",T.paid)},
    {t:`Outstanding balance — ${money(T.bal)}`, ok:near("t_bal",T.bal)},
    {t:`Balances to protect: ${liens.join(", ")}`, ok:lienOk}
  ];
  dr._bFeedback = checks.map(c=>({t: c.ok ? c.t.replace(/ — .*$/,"") + " ✓" : c.t, ok:c.ok}));
  recordPart(uid,"B", Math.round(checks.filter(c=>c.ok).length/checks.length*100), 2); render();
};

// Unit 3
function practiceDemand(uid){
  const dr = draft(uid), rA = partResult(uid,"A"), rB = partResult(uid,"B");
  return `
    <h2 class="ms-lesson-h">Is Dana's Demand Ready?</h2>
    ${caseCard()}
    ${partHead("A","Pre-demand review — 09/01/2026","The attorney asks: \"Can the Whitfield demand go out this week?\" Tick every item that <b>blocks</b> the demand from going out.")}
    <div class="ms-checks col">${READY_ITEMS.map((it,i)=>checkbox(uid,"rd_"+i, esc(it.t)) + (rA!==undefined && !!dr["rd_"+i]!==it.block ? `<div class="ms-fix">${it.block?"This one blocks the demand":"Not a blocker"}${it.why?` — ${esc(it.why)}`:""}</div>` : "")).join("")}</div>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckDemandA(${uid})">Check my review</button></div>
    ${rA!==undefined ? scoreLine(rA, "of the items are called correctly.") : ""}
    ${partHead("B","Where does it go?","Match each sentence from the draft to the demand-letter section it belongs in.")}
    <div class="ms-snips">${DEMAND_SNIPPETS.map((s,i)=>`<div class="ms-snip"><p>“${esc(s.t)}”</p>${sel(uid,"sn_"+i,DEMAND_SECTIONS.map((x,j)=>[j,x]),"Section…")}${rB!==undefined && String(dr["sn_"+i])!==String(s.s) ? `<div class="ms-fix">Belongs in: <b>${esc(DEMAND_SECTIONS[s.s])}</b></div>` : ""}</div>`).join("")}</div>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckDemandB(${uid})">Check my matches</button></div>
    ${rB!==undefined ? scoreLine(rB, "of the sentences are in the right section.") : ""}
    ${labSummary(uid, 2)}`;
}
window.msCheckDemandA = function(uid){
  const dr = draft(uid);
  const ok = READY_ITEMS.filter((it,i)=>!!dr["rd_"+i]===it.block).length;
  recordPart(uid,"A", Math.round(ok/READY_ITEMS.length*100), 2); render();
};
window.msCheckDemandB = function(uid){
  const dr = draft(uid);
  if(DEMAND_SNIPPETS.some((s,i)=>dr["sn_"+i]===undefined || dr["sn_"+i]==="")){ toast("Match every sentence first."); return; }
  const ok = DEMAND_SNIPPETS.filter((s,i)=>String(dr["sn_"+i])===String(s.s)).length;
  recordPart(uid,"B", Math.round(ok/DEMAND_SNIPPETS.length*100), 2); render();
};

// Unit 4
function practicePacket(uid){
  const dr = draft(uid), rA = partResult(uid,"A"), rB = partResult(uid,"B"), rC = partResult(uid,"C");
  const n = PACKET_ITEMS.length;
  return `
    <h2 class="ms-lesson-h">Send the Packet, Handle the Response</h2>
    ${caseCard()}
    ${partHead("A","Order the packet","Number the pieces of the Whitfield packet in the LSH standard order (1 = first page).")}
    <div class="ms-snips">${PACKET_SHUFFLE.map(ix=>`<div class="ms-snip row"><span>${esc(PACKET_ITEMS[ix])}</span>${sel(uid,"pk_"+ix,Array.from({length:n},(_,i)=>[i+1,String(i+1)]),"–")}${rA!==undefined && Number(dr["pk_"+ix])!==ix+1 ? `<span class="ms-mark no">✗ ${ix+1}</span>` : ""}</div>`).join("")}</div>
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckPacketA(${uid})">Check the order</button></div>
    ${rA!==undefined ? scoreLine(rA, "of the items are in the right place.") : ""}
    ${partHead("B","The adjuster responds","For each message, choose your best next step.")}
    ${RESPONSE_CASES.map((c,i)=>{ const pick = dr["rs_"+i];
      return `<div class="ms-msg"><div class="ms-msg-from">✉ ${esc(c.from)}</div><p>“${esc(c.msg)}”</p>
      <div class="quiz-opts">${c.opts.map((o,j)=>{ const cls = rB!==undefined ? (j===c.a ? " correct" : String(pick)===String(j) ? " incorrect" : "") : "";
        return `<label class="quiz-opt${cls}"><input type="radio" name="ms_rs_${i}" ${String(pick)===String(j)?"checked":""} onchange="msSet(${uid},'rs_${i}',${j})"> <span>${esc(o)}</span></label>`; }).join("")}</div>
      ${rB!==undefined ? `<div class="quiz-rationale show">${esc(c.r)}</div>` : ""}</div>`; }).join("")}
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckPacketB(${uid})">Check my responses</button></div>
    ${rB!==undefined ? scoreLine(rB, "of your next steps are right.") : ""}
    ${partHead("C","Draft the gap rebuttal","Draft the paragraph answering the adjuster's 43-day gap argument, for the attorney's review. Use the records from Unit 1 and cite pages.")}
    ${area(uid,"rebuttal","The gap between 05/14/2026 and 06/26/2026 is explained in the records…",6)}
    <div class="ms-actions"><button type="button" class="btn btn-navy btn-sm" onclick="msCheckPacketC(${uid})">Check my draft</button></div>
    ${rC!==undefined ? scoreLine(rC, "of the checklist is covered.") + (dr._pFeedback ? `<ul class="ms-feedback">${dr._pFeedback.map(f=>`<li class="${f.ok?"ok":"no"}">${f.ok?"✓":"✗"} ${esc(f.t)}</li>`).join("")}</ul>` : "") : ""}
    ${labSummary(uid, 3)}`;
}
window.msCheckPacketA = function(uid){
  const dr = draft(uid);
  if(PACKET_ITEMS.some((_,ix)=>!dr["pk_"+ix])){ toast("Number every item first."); return; }
  const ok = PACKET_ITEMS.filter((_,ix)=>Number(dr["pk_"+ix])===ix+1).length;
  recordPart(uid,"A", Math.round(ok/PACKET_ITEMS.length*100), 3); render();
};
window.msCheckPacketB = function(uid){
  const dr = draft(uid);
  if(RESPONSE_CASES.some((_,i)=>dr["rs_"+i]===undefined)){ toast("Choose a next step for every message first."); return; }
  const ok = RESPONSE_CASES.filter((c,i)=>Number(dr["rs_"+i])===c.a).length;
  recordPart(uid,"B", Math.round(ok/RESPONSE_CASES.length*100), 3); render();
};
window.msCheckPacketC = function(uid){
  const dr = draft(uid), t = String(dr.rebuttal||""), low = t.toLowerCase();
  const words = t.trim().split(/\s+/).filter(Boolean).length;
  if(words < 15){ toast("Write a full paragraph first."); return; }
  const checks = [
    {t:"Gives the reason the records show for stopping (childcare)", ok:/child\s*-?\s*care/.test(low)},
    {t:"Shows the symptoms continued (pain / tingling since the collision)", ok:/continu|persist|ongoing|since the (collision|accident|mvc)/.test(low)},
    {t:"Uses the treating doctor's causation opinion (Dr. Patel / related to the collision)", ok:/patel|causal|related to/.test(low)},
    {t:"Cites pages or exhibits (e.g. p. 38, p. 60, pp. 52–55)", ok:/\bp{1,2}\.\s*\d|page\s*\d|exhibit/.test(low)},
    {t:"Professional length (at least 50 words)", ok:words>=50}
  ];
  dr._pFeedback = checks;
  recordPart(uid,"C", Math.round(checks.filter(c=>c.ok).length/checks.length*100), 3); render();
};

/* ---------- unit check ---------- */
function renderQuizStep(u){
  const d = msData(), q = d.quiz[u.id] || {answers:{}}, c = d.checks[u.id];
  const sub = !!q.submitted;
  const score = sub ? Math.round(u.quiz.filter((x,i)=>Number(q.answers[i])===x.a).length/u.quiz.length*100) : null;
  return `
    <div class="ms-lesson-kicker">UNIT CHECK · ${u.quiz.length} QUESTIONS · PASS AT ${MS_PASS}%</div>
    <h2 class="ms-lesson-h">${esc(u.title)} — Unit Check</h2>
    ${c ? `<div class="ms-prev">Best score: <b>${c.best}%</b>${c.done ? ` · passed ${esc(fmtDate(c.date))}` : ""} · ${c.runs} attempt${c.runs===1?"":"s"}</div>` : ""}
    ${u.quiz.map((x,i)=>{ const pick = q.answers[i];
      return `<div class="quiz-card card ms-q"><p class="quiz-q">${i+1}. ${esc(x.q)}</p>
        <div class="quiz-opts">${x.opts.map((o,j)=>{ const cls = sub ? (j===x.a ? " correct" : Number(pick)===j ? " incorrect" : "") : "";
          return `<label class="quiz-opt${cls}"><input type="radio" name="ms_q_${u.id}_${i}" ${Number(pick)===j && pick!==undefined?"checked":""} ${sub?"disabled":""} onchange="msAnswer(${u.id},${i},${j})"> <span>${esc(o)}</span></label>`; }).join("")}</div>
        ${sub ? `<div class="quiz-rationale show">${esc(x.r)}</div>` : ""}</div>`; }).join("")}
    ${sub
      ? `${scoreLine(score, score>=MS_PASS ? `— passed. ${unitById(u.id+1) ? `Unit ${u.id+1} is next.` : "That's the whole module."}` : `— review the lessons and try again (pass at ${MS_PASS}%).`)}
         <div class="ms-actions"><button type="button" class="btn btn-ghost btn-sm" onclick="msRetake(${u.id})">↻ Retake</button></div>`
      : `<div class="ms-actions"><button type="button" class="btn btn-primary" onclick="msSubmit(${u.id})">Submit answers</button></div>`}`;
}
window.msAnswer = function(uid, i, j){
  const d = msData(); if(!d.quiz[uid]) d.quiz[uid] = {answers:{}};
  if(d.quiz[uid].submitted) return;
  d.quiz[uid].answers[i] = j; msSave();
};
window.msSubmit = function(uid){
  const u = unitById(uid), d = msData(), q = d.quiz[uid] || {answers:{}};
  const missing = u.quiz.findIndex((_,i)=>q.answers[i]===undefined);
  if(missing>=0){ toast(`Answer question ${missing+1} first.`); return; }
  const score = Math.round(u.quiz.filter((x,i)=>Number(q.answers[i])===x.a).length/u.quiz.length*100);
  q.submitted = true; d.quiz[uid] = q;
  const c = d.checks[uid] || {best:0, runs:0};
  c.last = score; c.best = Math.max(c.best||0, score); c.runs = (c.runs||0)+1;
  if(score>=MS_PASS && !c.done){ c.done = true; c.date = new Date().toISOString(); if(typeof burstConfetti==="function") burstConfetti(); }
  d.checks[uid] = c;
  msSave(true); render();
  toast(score>=MS_PASS ? `Unit ${uid} passed — ${score}%` : `${score}% — review and retake when ready.`);
};
window.msRetake = function(uid){ const d = msData(); d.quiz[uid] = {answers:{}}; msSave(); render(); window.scrollTo({top:0, behavior:"smooth"}); };

/* ---------- handlers ---------- */
window.msGo = function(uid, step){
  const d = msData(), u = unitById(uid); if(!u) return;
  const s = Math.min(Math.max(0, step), stepCount(u)-1);
  d.pos[uid] = s; d.pos["max"+uid] = Math.max(d.pos["max"+uid]||0, s);
  msSave(); render(); window.scrollTo({top:0, behavior:"smooth"});
};
// Every field saves as it changes; the page is drawn from these drafts, so a redraw never loses work.
window.msSet = function(uid, key, val){ draft(uid)[key] = val; msSave(); };
window.msToggleDeck = function(key){ state.msDeckOpen = state.msDeckOpen===key ? null : key; render(); };

/* ---------- trainer view: results for every trainee ---------- */
function renderTrainerPanel(){
  const rows = state.msTrainerRows;
  return `<h2 class="section-title">Trainee results <span class="tag">TRAINERS</span></h2>
    <div class="card ms-trainer">
      ${!rows ? `<p>See each trainee's unit checks and practice scores for this module.</p>
        <button type="button" class="btn btn-navy btn-sm" onclick="msLoadTrainerRows()" ${state.msTrainerLoading?"disabled":""}>${state.msTrainerLoading ? "⏳ Loading…" : "Load trainee results"}</button>`
      : !rows.length ? `<p>No trainees have started this module yet.</p><button type="button" class="btn btn-ghost btn-sm" onclick="msLoadTrainerRows()">↻ Refresh</button>`
      : `<div class="ms-table-wrap"><table class="ms-table"><thead><tr><th>Trainee</th><th>Batch</th><th>Passed</th>${MS_UNITS.map(u=>`<th>U${u.id} check</th><th>U${u.id} practice</th>`).join("")}</tr></thead>
        <tbody>${rows.map(r=>`<tr><td data-label="Trainee">${esc(r.name)}</td><td data-label="Batch">${esc(r.batch||"")}</td><td data-label="Passed"><b>${r.passed}/${MS_UNITS.length}</b></td>${MS_UNITS.map(u=>{ const c = (r.p.checks||{})[u.id], l = (r.p.labs||{})[u.id];
          return `<td data-label="U${u.id} check">${c ? `${c.done?"✅ ":""}${c.best}%` : "—"}</td><td data-label="U${u.id} practice">${l && typeof l.best==="number" ? `${l.best}%` : "—"}</td>`; }).join("")}</tr>`).join("")}</tbody></table></div>
        <button type="button" class="btn btn-ghost btn-sm" style="margin-top:12px;" onclick="msLoadTrainerRows()">↻ Refresh</button>`}
    </div>`;
}
window.msLoadTrainerRows = async function(){
  if(state.msTrainerLoading) return;
  state.msTrainerLoading = true; render();
  try{
    if(!state.adminData && typeof loadAdminLedgerQuiet==="function") await loadAdminLedgerQuiet();
    const recs = (state.adminData||[]).filter(r=>r && r.id);
    const snaps = await Promise.all(recs.map(r=>sharedGet("progress:"+r.id).catch(()=>null)));
    state.msTrainerRows = recs.map((r,i)=>{ const p = (snaps[i] && snaps[i].data && snaps[i].data[MS_KEY]) || null;
        return p ? {name:r.name||r.id, batch:r.batch||"", p, passed:MS_UNITS.filter(u=>p.checks && p.checks[u.id] && p.checks[u.id].done).length} : null; })
      .filter(Boolean).sort((a,b)=>b.passed-a.passed || String(a.name).localeCompare(String(b.name)));
  }catch(e){ toast("Couldn't load trainee results — try again."); }
  finally{ state.msTrainerLoading = false; if(state.view==="medsum") render(); }
};

/* ============================================================
   WIRING — page, nav tab, route, search
   ============================================================ */
window.EXTRA_ROUTE_VIEWS = (window.EXTRA_ROUTE_VIEWS||[]).concat(["medsum"]);
window.EXTRA_ROUTE_LABELS = Object.assign({}, window.EXTRA_ROUTE_LABELS||{}, {medsum:"Medsum & Demand"});
if(typeof PAGE_EYEBROWS!=="undefined") PAGE_EYEBROWS.medsum = "Specialty Module";

const __msGoto = window.goto;
window.goto = function(view, id){
  if(view==="medsum"){ const u = id ? unitById(id) : null; state.msUnit = u ? u.id : null; }
  return __msGoto.apply(this, arguments);
};
const __msRender = window.render;
window.render = function(){
  const r = __msRender.apply(this, arguments);
  if(state.view==="medsum"){
    const main = document.querySelector("#app > main");
    if(main && !main.querySelector(".ms-root")){ main.insertAdjacentHTML("beforeend", renderMedsum()); if(typeof applyPageHero==="function") applyPageHero(); }
  }
  return r;
};
// A unit page already has "← All Medsum & Demand units"; don't add a second back button for it.
const __msNavBack = window.navBackTarget;
if(typeof __msNavBack==="function") window.navBackTarget = function(){
  const t = __msNavBack.apply(this, arguments);
  return (state.view==="medsum" && state.msUnit && String(t).indexOf("#/medsum")===0) ? "" : t;
};
// #/medsum/<unit> opens that unit
const __msRouteHash = window.routeHash;
window.routeHash = function(){
  if(state.view==="medsum") return state.msUnit ? "#/medsum/"+state.msUnit : "#/medsum";
  return __msRouteHash.apply(this, arguments);
};
const __msParse = window.parseRouteHash;
window.parseRouteHash = function(){
  const m = String(location.hash||"").match(/^#\/medsum(?:\/(\d+))?/i);
  if(m) return {view:"medsum", id: m[1] && unitById(m[1]) ? Number(m[1]) : null};
  return __msParse.apply(this, arguments);
};
// Nav tab (trainee and admin), placed after the last page tab
const __msTopbar = window.renderTopbar;
window.renderTopbar = function(){
  const html = __msTopbar.apply(this, arguments);
  const navAt = html.indexOf('<div class="nav">'); if(navAt<0) return html;
  const re = /<button class="[^"]*" onclick="goto\('[a-z]+'\)">[\s\S]*?<\/button>/g; re.lastIndex = navAt;
  let m, end = -1; while((m = re.exec(html))) end = m.index + m[0].length;
  if(end<0) return html;
  const tab = `<button class="${state.view==="medsum"?"active":""}" onclick="goto('medsum')" title="Medsum &amp; Demand Training">⚕ Medsum<span class="ms-tab-long"> &amp; Demand</span></button>`;
  return html.slice(0,end) + tab + html.slice(end);
};
// Top-bar search finds the module's units and lessons
const __msSearch = window.renderSearchResults;
if(typeof __msSearch==="function") window.renderSearchResults = function(q){
  const out = __msSearch.apply(this, arguments);
  const query = String(q||"").trim().toLowerCase(); if(query.length<2) return out;
  const rows = [];
  if(/medsum|demand|chronolog|itemiz|medical summ/.test(query) || "medsum & demand training".includes(query))
    rows.push(`<div class="sr-item" onclick="goto('medsum')"><b>⚕ Medsum &amp; Demand Training</b><span>Specialty module &middot; ${MS_UNITS.length} units</span></div>`);
  MS_UNITS.forEach(u=>{
    if((u.title+" "+u.summary).toLowerCase().includes(query)) rows.push(`<div class="sr-item" onclick="goto('medsum',${u.id})"><b>${u.icon} Unit ${u.id} — ${esc(u.title)}</b><span>Medsum &amp; Demand</span></div>`);
    u.lessons.forEach((l,i)=>{ if(l.h.toLowerCase().includes(query)) rows.push(`<div class="sr-item" onclick="goto('medsum',${u.id});msGo(${u.id},${i})"><b>${esc(l.h)}</b><span>Medsum &amp; Demand &middot; Unit ${u.id}, lesson ${i+1}</span></div>`); });
  });
  if(!rows.length) return out;
  return rows.slice(0,6).join("") + (out.indexOf('class="sr-empty"')>=0 ? "" : out);
};

/* ---------- styles ---------- */
const css = document.createElement("style");
css.textContent = `
.ms-root{max-width:1100px;margin:0 auto;}
.ms-progress{padding:16px 20px;margin:0 0 6px;display:grid;gap:8px;font-size:14px;}
.ms-bar{height:8px;border-radius:99px;background:var(--line);overflow:hidden;}
.ms-bar span{display:block;height:100%;background:linear-gradient(90deg,var(--orange),var(--orange-deep));border-radius:99px;}
.ms-progress-note{font-size:12.5px;color:var(--ink-soft);font-weight:500;}
.ms-flow{display:flex;flex-wrap:wrap;align-items:center;gap:8px;}
.ms-flow-step{background:var(--paper);border:1px solid var(--line);border-radius:99px;padding:6px 12px;font-size:12.5px;color:var(--navy);font-weight:600;}
.ms-flow-arrow{color:var(--orange-deep);font-weight:700;}
.ms-units{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;}
.ms-unit-card{padding:18px 20px;cursor:pointer;display:flex;flex-direction:column;gap:8px;border-top:4px solid var(--navy);}
.ms-unit-card.done{border-top-color:var(--success);}
.ms-unit-card:hover{transform:translateY(-2px);}
.ms-unit-top{display:flex;justify-content:space-between;align-items:center;}
.ms-unit-num{font-family:'IBM Plex Mono';font-size:12px;color:var(--orange-deep);letter-spacing:.08em;}
.ms-unit-icon{font-size:22px;}
.ms-unit-title{font-family:'Fraunces';font-size:18px;color:var(--navy);line-height:1.25;}
.ms-unit-card p{margin:0;font-size:13px;color:var(--ink-soft);font-weight:500;flex:1;}
.ms-unit-meta{font-size:12px;color:var(--ink-soft);font-weight:500;}
.ms-unit-foot{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-top:4px;}
.ms-status{font-size:12.5px;color:var(--ink-soft);}
.ms-status.ok{color:var(--success);}
.ms-decks{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;}
.ms-deck{padding:16px 18px;display:flex;flex-direction:column;gap:6px;}
.ms-deck.featured{grid-column:1/-1;border-left:4px solid var(--orange);}
.ms-deck-kicker{font-family:'IBM Plex Mono';font-size:11.5px;color:var(--orange-deep);letter-spacing:.08em;text-transform:uppercase;}
.ms-deck-title{font-family:'Fraunces';font-size:16px;color:var(--navy);}
.ms-deck p{margin:0 0 4px;font-size:13px;color:var(--ink-soft);font-weight:500;}
.ms-deck-actions{display:flex;gap:8px;flex-wrap:wrap;}
.ms-deck-actions a{text-decoration:none;}
.ms-deck-frame{margin-top:10px;position:relative;width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;border:1px solid var(--line);background:#F6F7FB;}
.ms-deck-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
.ms-deck-note{position:absolute;left:8px;bottom:6px;font-size:11px;color:var(--ink-soft);font-weight:500;pointer-events:none;}
.ms-deck-frame.compact{max-width:640px;}
.ms-unit-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;margin-bottom:14px;}
.ms-unit-kicker{font-family:'IBM Plex Mono';font-size:12px;color:var(--orange-deep);letter-spacing:.06em;}
.ms-unit-h{font-family:'Fraunces';font-size:24px;color:var(--navy);line-height:1.2;}
.ms-unit-deck{flex:0 1 640px;min-width:0;}
.ms-unit-deck .ms-deck-actions{justify-content:flex-end;}
.ms-pills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
.ms-pill{border:1.5px solid var(--line);background:var(--paper);color:var(--ink-soft);border-radius:99px;padding:5px 12px;font-size:12.5px;font-weight:700;cursor:pointer;}
.ms-pill.done{border-color:var(--success);color:var(--success);}
.ms-pill.active{background:var(--navy);border-color:var(--navy);color:#fff;}
.ms-stage{padding:26px 30px;}
.ms-lesson-kicker{font-family:'IBM Plex Mono';font-size:12px;color:var(--orange-deep);letter-spacing:.08em;margin-bottom:6px;}
.ms-lesson-h{font-family:'Fraunces';font-size:22px;color:var(--navy);margin:0 0 10px;line-height:1.25;}
.ms-lead{font-size:15px;color:var(--ink);font-weight:500;margin:0 0 14px;max-width:80ch;}
.ms-points,.ms-steps{margin:0 0 14px;padding-left:22px;display:grid;gap:7px;font-size:14px;font-weight:500;color:#37394A;max-width:85ch;}
.ms-points b,.ms-steps b,.ms-lead b{color:var(--navy);}
.ms-sub{font-family:'IBM Plex Mono';font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--navy);margin:16px 0 8px;}
.ms-table-wrap{overflow-x:auto;margin:0 0 14px;-webkit-overflow-scrolling:touch;max-width:100%;}
.ms-table{border-collapse:collapse;width:100%;font-size:13px;font-weight:500;}
.ms-table th{background:#F3F4F9;color:var(--navy);text-align:left;padding:8px 10px;font-size:12px;letter-spacing:.03em;border-bottom:1.5px solid var(--line);white-space:nowrap;}
.ms-table td{padding:8px 10px;border-bottom:1px solid var(--line);vertical-align:top;color:#37394A;}
.ms-table .num{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;}
.ms-example{background:#F8F9FC;border-left:4px solid var(--navy);border-radius:8px;padding:10px 16px 14px;margin:0 0 14px;font-size:14px;font-weight:500;color:#37394A;}
.ms-example .ms-sub{margin-top:4px;}
.ms-callout{border-radius:10px;padding:12px 16px;margin:0 0 14px;font-size:14px;font-weight:500;color:#37394A;}
.ms-callout.tip{background:#FFF8EF;border:1px solid #F0D2AE;}
.ms-callout.warn{background:var(--danger-bg);border:1px solid #E7C3BD;}
.ms-callout b:first-child{color:var(--navy);margin-right:4px;}
.ms-nav{display:flex;justify-content:space-between;gap:10px;margin-top:16px;flex-wrap:wrap;}
.ms-case{background:linear-gradient(135deg,#F8F9FC,#FFF8EF);border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin:0 0 18px;}
.ms-case-tag{font-family:'IBM Plex Mono';font-size:11.5px;color:var(--orange-deep);letter-spacing:.08em;margin-bottom:8px;}
.ms-case-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px 16px;font-size:13px;font-weight:500;}
.ms-case-grid b{display:block;font-size:11.5px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;}
.ms-case p{margin:10px 0 0;font-size:13px;font-weight:500;color:#37394A;}
.ms-part-h{display:flex;align-items:center;gap:10px;font-family:'Fraunces';font-size:17px;color:var(--navy);margin:22px 0 6px;}
.ms-part-h span{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:var(--navy);color:#fff;font-family:'Inter';font-size:13px;flex:0 0 auto;}
.ms-part-note{margin:0 0 12px;font-size:13.5px;color:var(--ink-soft);font-weight:500;}
.ms-records{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;}
.ms-record{border:1px solid var(--line);border-radius:10px;padding:12px 14px;background:#fff;display:flex;flex-direction:column;gap:6px;}
.ms-record-top{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:13px;color:var(--navy);}
.ms-record-top span{font-family:'IBM Plex Mono';font-size:12px;color:var(--ink-soft);}
.ms-record p{margin:0;font-size:13px;font-weight:500;color:#37394A;flex:1;}
.ms-record-ctl{display:flex;gap:10px;flex-wrap:wrap;font-size:12px;color:var(--ink-soft);}
.ms-record-ctl label{display:flex;flex-direction:column;gap:3px;flex:1 1 120px;min-width:0;}
.ms-select,.ms-input{width:100%;max-width:100%;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font:inherit;font-size:13px;font-weight:500;background:#fff;color:var(--ink);}
textarea.ms-input{resize:vertical;min-height:90px;}
.ms-row-form{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:0 0 10px;}
.ms-row-form label,.ms-block-label{display:flex;flex-direction:column;gap:4px;font-size:12.5px;color:var(--navy);}
.ms-actions{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0;}
.ms-result{border-radius:10px;padding:10px 14px;font-size:13.5px;font-weight:500;margin:8px 0;}
.ms-result.ok{background:var(--success-bg);color:#24533A;}
.ms-result.no{background:var(--danger-bg);color:#7A2E26;}
.ms-fix{font-size:12.5px;font-weight:500;color:#7A2E26;background:var(--danger-bg);border-radius:6px;padding:6px 9px;}
.ms-feedback{list-style:none;padding:0;margin:6px 0 10px;display:grid;gap:4px;font-size:13px;font-weight:500;}
.ms-feedback .ok{color:var(--success);} .ms-feedback .no{color:var(--danger);}
.ms-mark{display:inline-block;margin-left:6px;font-size:12px;font-weight:700;}
.ms-mark.ok{color:var(--success);} .ms-mark.no{color:var(--danger);}
.ms-bills td:last-child{min-width:190px;}
.ms-locked{padding:14px 16px;border:1.5px dashed var(--line);border-radius:10px;color:var(--ink-soft);font-size:13.5px;font-weight:500;}
.ms-checks{display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 6px;}
.ms-checks.col{flex-direction:column;gap:8px;}
.ms-check{display:flex;align-items:flex-start;gap:8px;font-size:13.5px;font-weight:500;color:#37394A;cursor:pointer;}
.ms-check input{margin-top:3px;accent-color:var(--orange);}
.ms-snips{display:grid;gap:10px;}
.ms-snip{border:1px solid var(--line);border-radius:10px;padding:10px 12px;display:grid;gap:8px;background:#fff;}
.ms-snip p{margin:0;font-size:13.5px;font-weight:500;color:#37394A;font-style:italic;}
.ms-snip.row{grid-template-columns:1fr minmax(80px,120px) auto;align-items:center;font-size:13.5px;font-weight:600;color:var(--navy);}
.ms-msg{border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin:0 0 12px;background:#fff;}
.ms-msg-from{font-family:'IBM Plex Mono';font-size:12px;color:var(--ink-soft);}
.ms-msg p{margin:6px 0 10px;font-size:14px;font-weight:600;color:var(--navy);}
.ms-lab-sum{margin-top:18px;padding:12px 16px;border-radius:10px;background:#F3F4F9;font-size:13.5px;font-weight:500;}
.ms-lab-sum.done{background:var(--success-bg);color:#24533A;}
.ms-prev{font-size:13px;color:var(--ink-soft);font-weight:500;margin:0 0 12px;}
.ms-q{box-shadow:none;}
.ms-trainer{padding:16px 20px;font-size:13.5px;font-weight:500;}
.ms-trainer p{margin:0 0 10px;color:var(--ink-soft);}
/* top bar: the extra tab needs room — short label below 1760px, and the two tight width ranges get more space */
@media(min-width:761px) and (max-width:1759px){ .ms-tab-long{display:none;} }
@media(min-width:1181px) and (max-width:1300px){
  .topbar-inner{flex-wrap:wrap;row-gap:8px;}
  .topbar-right{flex-wrap:wrap;width:100%;justify-content:space-between;row-gap:8px;}
  .topbar-search{flex:1 1 100%;max-width:none;order:-1;}
  .topbar .nav{flex-wrap:wrap;row-gap:4px;max-width:100%;}
  .topbar .brand-text{display:flex !important;}
}
@media(min-width:1561px) and (max-width:1680px){ .brand-text{display:none !important;} }
@media(max-width:760px){
  .ms-stage{padding:18px 16px;}
  .ms-unit-h{font-size:20px;}
  .ms-unit-deck .ms-deck-actions{justify-content:flex-start;}
  .ms-records{grid-template-columns:1fr;}
  .ms-table thead{display:none;}
  .ms-table,.ms-table tbody,.ms-table tr,.ms-table td{display:block;width:100%;}
  .ms-table tr{border:1px solid var(--line);border-radius:10px;padding:6px 10px;margin:0 0 8px;background:#fff;}
  .ms-table td{border:none;padding:4px 0;display:flex;gap:10px;justify-content:space-between;align-items:baseline;text-align:right;}
  .ms-table td::before{content:attr(data-label);font-size:11.5px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.03em;text-align:left;flex:0 0 38%;}
  .ms-table td[data-label=""]::before{display:none;}
  .ms-table td[data-label=""]{font-weight:700;color:var(--navy);text-align:left;}
  .ms-table td .ms-select{flex:1;min-width:0;}
  .ms-bills td:last-child{min-width:0;flex-wrap:wrap;}
  .ms-snip.row{grid-template-columns:1fr auto;}
  .ms-snip.row .ms-mark{grid-column:1/-1;}
  .ms-nav .btn{flex:1 1 auto;justify-content:center;}
}`;
document.head.appendChild(css);
})();
