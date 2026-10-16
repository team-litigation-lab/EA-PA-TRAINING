/* Day 3 lesson slides: the concise copy for each topic's run of slides (Why It Matters · The Rules ·
   See It · On the Job · Do & Don't), keyed "day::topic title". Generated from build/slides/d3.json by
   build/slides/assemble.cjs: edit the JSON, then run the assembler. */
window.EA_SLIDE_COPY = Object.assign(window.EA_SLIDE_COPY || {}, {
 "3::Calendar Management That Holds": {
  "image": "calendar-week",
  "hook": "A calendar holds only when **one synced system** is the single source of truth",
  "points": [
   "A second, unofficial calendar is **where conflicts breed**",
   "Build **explicit buffers** instead of back-to-back by default",
   "Automate routine scheduling with **Calendly or Doodle**",
   "Protect **deep-work blocks** as seriously as meetings"
  ],
  "scene": "The calendar was clean on Monday. By Friday, a meeting kept on a side calendar **collides with a deep-work block**.",
  "move": "Move everything onto **one synced calendar** and review it weekly",
  "job": [
   [
    "New meeting request",
    "Book in the master calendar",
    "Synced calendar, Calendly",
    "One entry, no duplicates"
   ],
   [
    "Weekly calendar review",
    "Scan the week for drift",
    "Calendar, CRM",
    "Conflicts flagged and fixed"
   ]
  ],
  "dos": [
   "**Review the calendar weekly** for drift",
   "Keep scheduling data **in one system**, CRM included"
  ],
  "donts": [
   "Never keep a **second, unofficial calendar**",
   "Don't schedule **back-to-back by default**"
  ]
 },
 "3::Calendar Conflict & Prioritization Discipline": {
  "image": "escalation-alert",
  "hook": "A conflict you sit on becomes a crisis; **surface it immediately** with a recommendation",
  "points": [
   "Tell the executive about **every conflict immediately**",
   "He may have context **the calendar doesn't show**",
   "Rank by **strategic importance**, not booking order",
   "Present the **trade-off and a recommendation**"
  ],
  "line": "You **never decline or rebook** for Elias without consulting him first",
  "scene": "A routine check-in booked weeks ago now collides with a **board update**. Elias hasn't seen the clash yet.",
  "move": "Flag it now: **board update first**, with a plan to move the check-in",
  "job": [
   [
    "Conflict spotted",
    "Inform the executive immediately",
    "Slack DM, calendar",
    "Trade-off and recommendation sent"
   ],
   [
    "Decision made",
    "Document why one won",
    "Calendar notes",
    "Resolution on record"
   ],
   [
    "Resolution recorded",
    "Confirm with both parties",
    "Email",
    "Both parties reconfirmed"
   ]
  ],
  "dos": [
   "Attach a **clear recommendation** to every conflict",
   "**Document the resolution** once it's made",
   "Confirm the outcome with **both affected parties**"
  ],
  "donts": [
   "Don't **silently pick** one side",
   "Don't **hand the decision back** with no framing"
  ]
 },
 "3::Calendar Blocking for Deep Work": {
  "image": "time-blocks",
  "hook": "Unblocked time gets **silently filled** by other people's requests",
  "points": [
   "Block **real, uninterrupted time** on the calendar itself",
   "A block anyone can book over **isn't a real block**",
   "Reserve blocks for the **highest-priority work**",
   "A double-booked block is **a real conflict**"
  ],
  "scene": "A meeting lands on Elias's deep-work block, and it's **the third override** in as many weeks.",
  "move": "Resolve it as a conflict, then **fix enforcement** or rethink the block",
  "job": [
   [
    "Planning the week",
    "Block focused-work time",
    "Calendar",
    "Block can't be booked over"
   ],
   [
    "Block gets double-booked",
    "Run conflict resolution",
    "Calendar, Slack DM",
    "Conflict resolved and recorded"
   ],
   [
    "Periodic usage review",
    "Find skipped or overridden blocks",
    "Calendar history",
    "Enforced or honestly reconsidered"
   ]
  ],
  "dos": [
   "Mark blocks so **nobody can book over** them",
   "**Review block usage** periodically"
  ],
  "donts": [
   "Don't track **only meetings** — that's half the picture",
   "Don't fill blocks with **whatever's easiest** to schedule"
  ]
 },
 "3::Buffer Time Between Meetings": {
  "image": "clock-deadline",
  "hook": "Zero buffer means every meeting **starts late or ends abruptly**",
  "points": [
   "Default to a **5-10 minute buffer** between meetings",
   "Use buffers for **debrief and prep**",
   "Elias's debrief buffer is a **documented standing rule**",
   "Day too full for buffers? **Flag it explicitly**"
  ],
  "line": "Never schedule over Elias's **15-minute debrief buffer** after key sessions",
  "scene": "A client call is booked **straight after** Elias's court session, with no debrief time between them.",
  "move": "Move the call to protect the **mandatory debrief buffer**",
  "job": [
   [
    "Building any day",
    "Insert default buffers",
    "Calendar",
    "No back-to-back slots"
   ],
   [
    "Key client or court session",
    "Check the debrief-buffer rule",
    "Client Profile, calendar",
    "Buffer follows the session"
   ],
   [
    "Weekly review",
    "Spot buffer erosion",
    "Calendar",
    "Buffers restored"
   ]
  ],
  "dos": [
   "Treat buffers as **real, necessary time**",
   "**Review weekly** for buffer erosion"
  ],
  "donts": [
   "Don't **schedule back-to-back** and hope it holds",
   "Never treat buffers as **wasted space**"
  ]
 },
 "3::Recurring Meeting Hygiene": {
  "image": "meeting-notes",
  "hook": "Standing meetings outlive their purpose, and you see the **full calendar pattern** first",
  "points": [
   "**Audit every recurring meeting** quarterly",
   "Ask: still needed, **this often, these attendees**?",
   "No one-sentence purpose? **Skip or reformat it**",
   "Propose a **specific change**, not a vague flag"
  ],
  "scene": "A weekly status meeting has had no agenda for a month, and nobody can say **what it's for**.",
  "move": "Propose a concrete fix: **cancel, shorten, or cut attendees**",
  "job": [
   [
    "Quarterly audit due",
    "Review every recurring meeting",
    "Calendar, audit list",
    "Each meeting kept or changed"
   ],
   [
    "Meeting has no agenda",
    "Propose cancel, shorten or trim",
    "Email to organizer",
    "Specific change proposed"
   ],
   [
    "Change made",
    "Recheck after an interval",
    "Calendar",
    "Change stuck, not reverted"
   ]
  ],
  "dos": [
   "Flag decay **even if nobody else has**",
   "**Revisit changed meetings** to confirm they stuck"
  ],
  "donts": [
   "Don't let standing meetings **run on autopilot**",
   "Don't send a **vague “looks unnecessary”** flag"
  ]
 },
 "3::Time Zone Management for Distributed Teams": {
  "image": "team-huddle",
  "hook": "A time that suits New York can be **unreasonable in Singapore**",
  "points": [
   "Confirm the **local time for every participant**",
   "**Name the reference time zone** in the invite",
   "Recheck recurring meetings around **daylight saving changes**",
   "Favor the **most time-zone-disadvantaged** participant"
  ],
  "scene": "A recurring London call was right in March. By November it has **silently shifted an hour**.",
  "move": "**Correct it immediately** and confirm the fix with every participant",
  "job": [
   [
    "Cross-time-zone meeting request",
    "Check each participant's local time",
    "Calendar time-zone view",
    "Time reasonable for everyone"
   ],
   [
    "Sending the invite",
    "State the reference time zone",
    "Outlook invite",
    "Zone named in invite"
   ],
   [
    "Daylight saving transition",
    "Recheck recurring meetings",
    "Calendar",
    "No meeting shifted"
   ]
  ],
  "dos": [
   "Write the time zone **in the invite itself**",
   "Confirm fixes with **every affected participant**"
  ],
  "donts": [
   "Don't trust apps to **convert correctly**",
   "Don't optimize only for **the majority's convenience**"
  ]
 },
 "3::Handling Last-Minute Calendar Changes": {
  "image": "crisis-alert",
  "hook": "One late change can **cascade through the day**, so check the ripple first",
  "points": [
   "**Check what it displaces** before confirming",
   "Trace how far the **disruption cascades**",
   "**Tell everyone affected** — a silent update isn't enough",
   "**Reconfirm the rest** of the day"
  ],
  "scene": "A sudden new request lands for this morning. Accepting it would **push two later meetings**.",
  "move": "Check the ripple, then **tell everyone affected** before confirming",
  "job": [
   [
    "Last-minute change lands",
    "Check what it displaces",
    "Calendar",
    "Ripple effects known"
   ],
   [
    "Change accepted",
    "Notify everyone affected",
    "Slack DM, email",
    "Everyone informed"
   ],
   [
    "Repeated disruption source",
    "Log the cause",
    "Change log",
    "Root cause raised"
   ]
  ],
  "dos": [
   "**Reconfirm the day** after every change",
   "**Log recurring causes** to fix at the root"
  ],
  "donts": [
   "Never **accept a change** without checking ripple effects",
   "Don't **update the calendar silently**"
  ]
 },
 "3::Multi-Calendar Coordination": {
  "image": "calendar-week",
  "hook": "The worst conflicts are **invisible on one calendar** and obvious across all",
  "points": [
   "**Identify every calendar**: professional, personal, board",
   "Check new commitments **against all calendars**",
   "Build **one master view**, even if manual",
   "Keep systems separate, but **you coordinate both**"
  ],
  "scene": "A board dinner looks clear on Elias's work calendar, but the family calendar shows **Maya's kindergarten event** that evening.",
  "move": "Flag the **cross-calendar conflict** to Elias before confirming anything",
  "job": [
   [
    "New commitment requested",
    "Check every relevant calendar",
    "Work, personal, board calendars",
    "No clash anywhere"
   ],
   [
    "Cross-calendar conflict found",
    "Flag it immediately",
    "Slack DM",
    "Executive decides"
   ]
  ],
  "dos": [
   "Cross-check **all calendars** before finalizing",
   "Treat cross-calendar clashes as **real conflicts**"
  ],
  "donts": [
   "Don't trust **only the primary calendar**",
   "Don't **merge business and personal** systems"
  ]
 },
 "3::Court Docketing Workflows": {
  "image": "court-docket",
  "hook": "A missed docketed deadline can mean **malpractice exposure** or a lost right",
  "points": [
   "Docket from the **primary source document**, never a summary",
   "Set **multiple reminders**: 2 weeks, 3 days, day-of",
   "**No single missed reminder** should cause a missed filing",
   "**Close satisfied deadlines** so open ones stay visible"
  ],
  "line": "Never docket a date from a **secondhand summary** or colleague's mention",
  "scene": "Docketing a response deadline from a court order, you notice the date looks **unusually short** for this kind of matter.",
  "move": "Verify against the **court order itself** — don't assume past matters apply",
  "job": [
   [
    "Court order or confirmation arrives",
    "Log deadline from source",
    "Docketing system",
    "Entered from primary document"
   ],
   [
    "Deadline logged",
    "Set staged reminders",
    "Docketing calendar",
    "2 weeks, 3 days, day-of"
   ],
   [
    "Periodic review",
    "Cross-check against case file",
    "Case file",
    "Satisfied deadlines closed"
   ]
  ],
  "dos": [
   "Treat **every docketing entry** with full care",
   "**Cross-check the docket** against the case file"
  ],
  "donts": [
   "Never assume a deadline is **“probably fine”**",
   "Don't assume deadlines match **across jurisdictions**"
  ]
 },
 "3::Counting Legal Deadlines: Calendar Days vs. Court Days": {
  "image": "clock-deadline",
  "hook": "**How you count** a deadline matters as much as the date itself",
  "points": [
   "Federal periods in days count **every calendar day**",
   "**Skip the trigger day**; count the last day",
   "Last day a weekend or holiday? **Next business day**",
   "Many state courts count **court days** — check local rules"
  ],
  "line": "Every calculated court deadline gets **a second person's confirmation**",
  "scene": "A motion is served electronically on **Friday, October 2**, in federal court. The response is due in **14 days**.",
  "move": "Count from **October 3**, check the last day, then get it confirmed",
  "job": [
   [
    "Trigger event occurs",
    "Record trigger date and source",
    "Case file",
    "Source written down"
   ],
   [
    "Rule identified",
    "Count days, check last day",
    "Docketing software, by hand",
    "Rule cited in entry"
   ],
   [
    "Deadline calculated",
    "Get second-person confirmation",
    "Attorney or docketing clerk",
    "Reminders at 14, 7, 2 days"
   ]
  ],
  "dos": [
   "**Double-check software** results by hand",
   "Keep **court holiday lists** for each court",
   "In federal court, mail service adds **three days**"
  ],
  "donts": [
   "Never count **the trigger day** as day one",
   "Don't assume **every court counts** the same way"
  ]
 },
 "3::E-Filing & Service Basics": {
  "image": "compliance-checklist",
  "hook": "Filing and service are **separate steps**, each with its own rules and proof",
  "points": [
   "Filing reaches the court; **service reaches the parties**",
   "Federal courts use **CM/ECF**; PACER shows records",
   "The **Notice of Electronic Filing** proves filing",
   "Unregistered parties need **service another way**"
  ],
  "line": "File under the attorney's login **only on their instruction**",
  "scene": "It's **4 pm on deadline day**. The court's system rejects Elias's brief: one exhibit is **over the file-size limit**.",
  "move": "Fix the exhibit, **refile at once**, and keep Elias informed",
  "job": [
   [
    "Before filing day",
    "Check format, size, cut-off",
    "Court rules",
    "Every rule checked"
   ],
   [
    "Attorney signs off",
    "File well before deadline",
    "CM/ECF or state system",
    "Court confirmation received"
   ],
   [
    "Filing confirmed",
    "Save, forward, serve, calendar",
    "Matter folder, docket",
    "New deadlines calendared"
   ]
  ],
  "dos": [
   "**Check the court's docket** after filing",
   "Save the **filed copy and confirmation** together"
  ],
  "donts": [
   "Don't **file at 11:50 pm** on the last day",
   "Don't assume **e-filing served everyone**"
  ]
 },
 "3::Statute-of-Limitations Rules": {
  "image": "risk-umbrella",
  "hook": "Miss a statute of limitations and the claim can be **barred entirely**",
  "points": [
   "SOL rules **vary by claim type** and jurisdiction",
   "Calculate SOL **at intake** from the actual trigger date",
   "Give SOL deadlines **extra lead time**",
   "Keep SOL in the **redundant, cross-checked system**"
  ],
  "line": "Which SOL rule applies is **the attorney's call**, never yours alone",
  "scene": "A new matter arrives with parties **in different states**. You're not certain which statute of limitations applies.",
  "move": "**Escalate to the attorney** before calculating any deadline",
  "job": [
   [
    "New matter intake",
    "Calculate SOL from trigger",
    "Jurisdiction's rule, case file",
    "Deadline logged with rule"
   ],
   [
    "Rule is ambiguous",
    "Escalate to the attorney",
    "Email",
    "Attorney confirms rule"
   ],
   [
    "SOL deadline logged",
    "Add extra-lead reminders",
    "Docketing system",
    "Redundant reminders set"
   ]
  ],
  "dos": [
   "**Verify against the actual rule**, every time",
   "Keep SOL deadlines **in more than one place**"
  ],
  "donts": [
   "Never **copy a past matter's SOL**",
   "Don't accept **“probably right”** for SOL"
  ]
 },
 "3::Deposition Scheduling": {
  "image": "meeting-notes",
  "hook": "Depositions juggle **many parties' constraints** and are expensive to reschedule",
  "points": [
   "Confirm **every required party** before locking a date",
   "Book the **court reporter and interpreter** early",
   "Send **formal notices promptly** once confirmed",
   "**Silence isn't agreement** — track every confirmation"
  ],
  "line": "Never book Elias **back-to-back depositions** or court hearings",
  "scene": "Attorney and witness have confirmed a deposition date, but opposing counsel hasn't replied **after several days**.",
  "move": "**Chase opposing counsel** for confirmation; silence is not agreement",
  "job": [
   [
    "Deposition requested",
    "Confirm all parties' availability",
    "Calendar, email",
    "Every party confirmed"
   ],
   [
    "Date confirmed",
    "Book reporter and interpreter",
    "Vendor booking",
    "Bookings confirmed"
   ],
   [
    "Bookings secured",
    "Send formal deposition notice",
    "Notice, tracker",
    "All sides' confirmations tracked"
   ]
  ],
  "dos": [
   "Invest in **upfront coordination**",
   "**Track confirmations** from all sides"
  ],
  "donts": [
   "Don't lock a date on **the attorney's calendar alone**",
   "Don't leave **the court reporter** until late"
  ]
 },
 "3::Exhibits, Binders & Bates Numbering": {
  "image": "sop-binder",
  "hook": "Exact labels and Bates numbers mean **everyone points to the same page**",
  "points": [
   "Follow the **court's exhibit-label rules**",
   "Keep a **master exhibit list** with Bates ranges",
   "Apply Bates with **software, never by hand**",
   "**Same order in every** binder set"
  ],
  "line": "**Never renumber** a set that's already been produced",
  "scene": "**Two days before a hearing**, Elias adds three exhibits between 7 and 8. Four binder sets are already printed.",
  "move": "Update the master list, rebuild **all four sets**, and check each page",
  "job": [
   [
    "Exhibit list changes",
    "Update the master exhibit list",
    "Master list",
    "Number, description, Bates range"
   ],
   [
    "Production set ready",
    "Apply Bates numbers",
    "PDF or review software",
    "Unique sequential numbers applied"
   ],
   [
    "Binders assembled",
    "Check each set page by page",
    "Index",
    "Every set matches index"
   ]
  ],
  "dos": [
   "**Start binders early** and plan tabs ahead",
   "Cite the **exact label and Bates range** in emails"
  ],
  "donts": [
   "Don't skip checking **the judge's binder**",
   "Never **re-stamp a corrected set** — use a new range"
  ]
 },
 "3::War Room Trial Support": {
  "image": "project-board",
  "hook": "Trial is the **highest-stakes window** you'll support, and it needs a different mode",
  "points": [
   "War room means **genuinely on call** during trial hours",
   "**Confirm support needs** before trial starts",
   "Keep every document and detail **instantly retrievable**",
   "Agree a **trial communication protocol**"
  ],
  "scene": "Trial starts in **three days**, and you haven't confirmed the attorney's support expectations for that window.",
  "move": "Raise it today: **pin down needs**, response times and channels",
  "job": [
   [
    "Trial date approaching",
    "Confirm attorney's support needs",
    "Meeting with attorney",
    "Needs documented"
   ],
   [
    "Trial prep",
    "Organize documents, contacts, logistics",
    "Case file, contact list",
    "Everything instantly retrievable"
   ],
   [
    "Trial window opens",
    "Set response protocol",
    "Agreed channel",
    "Speed and channel agreed"
   ]
  ],
  "dos": [
   "Prepare **court location, parking, technology** details",
   "Plan for **travel and scheduling** on top"
  ],
  "donts": [
   "Don't treat trial as **a busier normal week**",
   "Don't **improvise once trial starts**"
  ]
 },
 "3::Executive Travel Logistics — Domestic & International Itineraries": {
  "image": "travel-plane",
  "hook": "Most travel failures happen **in the gaps** between legs",
  "points": [
   "Plan **backward from the destination**",
   "Confirm **visas and documents** well ahead",
   "Build **real buffer** between connecting legs",
   "One **consolidated itinerary** with every confirmation number"
  ],
  "line": "Elias flies **direct only**: never book him a connecting flight",
  "scene": "A route has a **tight connection** from an international arrival to a domestic flight.",
  "move": "Confirm **customs and security re-clearing** time before booking it",
  "job": [
   [
    "Trip requested",
    "Work backward from arrival needs",
    "Itinerary document",
    "Each leg supports the next"
   ],
   [
    "International trip",
    "Confirm visas and documents",
    "Travel checklist",
    "Requirements met before departure"
   ],
   [
    "Bookings complete",
    "Consolidate all confirmation numbers",
    "One itinerary document",
    "Every leg in one place"
   ]
  ],
  "dos": [
   "Account for **every leg and gap**",
   "Put all details in **one itinerary**"
  ],
  "donts": [
   "Don't treat international as **domestic with longer flights**",
   "Don't leave **scattered booking confirmations**"
  ]
 },
 "3::Visa & Documentation Requirements": {
  "image": "dossier-profile",
  "hook": "Paperwork found too late can **jeopardize a whole trip**",
  "points": [
   "Verify **current requirements** for this specific trip",
   "Many countries need **six months' passport validity**",
   "Visa processing can take **weeks, not days**",
   "Confirm **supporting documents** early"
  ],
  "scene": "Elias's passport hasn't expired, but the destination requires **six months' validity** beyond his travel dates.",
  "move": "Flag it now — **resolve the passport** before other planning",
  "job": [
   [
    "International trip planned",
    "Check current visa rules",
    "Official requirements",
    "Rules confirmed for this trip"
   ],
   [
    "Visa needed",
    "Start processing early",
    "Travel checklist",
    "Weeks of lead time"
   ],
   [
    "Trip completed",
    "Record documents required",
    "Travel dossier",
    "Next trip starts accurate"
   ]
  ],
  "dos": [
   "Start visa work **before other planning**",
   "**Record requirements** for each trip"
  ],
  "donts": [
   "Don't rely on **a previous similar trip**",
   "Don't treat **“unexpired” as valid enough**"
  ]
 },
 "3::International Travel Considerations": {
  "image": "itinerary-map",
  "hook": "International trips carry **wider variables**, so plan them deeper than domestic",
  "points": [
   "Health and safety: **vaccinations, advisories, emergency numbers**",
   "Currency: **card acceptance**, local cash, exchange",
   "Norms: **etiquette, dress**, communication style",
   "Recheck **travel advisories** close to departure"
  ],
  "scene": "Elias's Singapore trip was planned weeks ago. Government travel advisories **can change** before he flies.",
  "move": "**Recheck advisories** close to the actual travel date",
  "job": [
   [
    "International trip booked",
    "Check health and safety needs",
    "Government advisories",
    "Vaccines and contacts listed"
   ],
   [
    "Trip planning",
    "Confirm currency and payment",
    "Trip briefing",
    "Payment plan ready"
   ],
   [
    "Days before departure",
    "Recheck travel advisories",
    "Government advisory site",
    "No new warnings missed"
   ]
  ],
  "dos": [
   "List **local emergency numbers** for the destination",
   "Research **business norms** for the destination"
  ],
  "donts": [
   "Don't apply a **light-touch domestic approach**",
   "Don't check advisories **only at booking**"
  ]
 },
 "3::Managing Multi-City, Multi-Leg Itineraries": {
  "image": "travel-plane",
  "hook": "One delay on the first leg can **cascade through every connection**",
  "points": [
   "**Map every leg together**, not one at a time",
   "Add extra buffer at the **tightest connection**",
   "Align **cars and check-ins** with actual arrivals",
   "Keep a **single-page summary** of the trip"
  ],
  "scene": "Elias flies New York to London, then on to Singapore. The **London arrival** sets every later car and check-in.",
  "move": "Build buffer at the **tightest point** and align every pickup",
  "job": [
   [
    "Multi-city trip requested",
    "Map all legs together",
    "Itinerary document",
    "Tightest connection identified"
   ],
   [
    "Legs booked",
    "Align cars and hotel check-ins",
    "Itinerary, bookings",
    "Times match arrivals"
   ],
   [
    "Shortly before departure",
    "Recheck every leg's timing",
    "Airline confirmations",
    "No shifted legs"
   ]
  ],
  "dos": [
   "**Review the full itinerary** shortly before departure",
   "Put the whole trip on **one page**"
  ],
  "donts": [
   "Don't treat **“flights booked”** as done",
   "Don't leave **scattered confirmation emails**"
  ]
 },
 "3::Ground Transportation Coordination": {
  "image": "vendor-handshake",
  "hook": "Ground transport is the **most under-planned part** of any trip",
  "points": [
   "Give it the **same attention** as flights and hotels",
   "Confirm **pickup time, location and contact**",
   "Plan for **who's actually traveling**",
   "Keep a **backup option** for high-stakes trips"
  ],
  "scene": "The Thornes travel as a family. The car is booked for “after landing,” with **no car seats** for Leo and Maya.",
  "move": "Rebook with a **specific pickup time**, contact and car seats",
  "job": [
   [
    "Trip booked",
    "Book car with specifics",
    "Car service",
    "Time, location, contact confirmed"
   ],
   [
    "Family traveling",
    "Check family-specific needs",
    "Client Profile",
    "Car seats confirmed"
   ],
   [
    "Days before travel",
    "Reconfirm the booking",
    "Car service",
    "Booking reconfirmed"
   ]
  ],
  "dos": [
   "**Reconfirm bookings** close to travel",
   "Arrange **backup transport** for high-stakes trips"
  ],
  "donts": [
   "Never accept **“sometime after landing”**",
   "Don't treat cars as **an afterthought**"
  ]
 },
 "3::Loyalty Programs & Travel Preferences": {
  "image": "reputation-star",
  "hook": "Loyalty numbers deliver **real, recurring value** on every trip",
  "points": [
   "Track every **airline and hotel membership**",
   "Apply loyalty numbers **to every booking**",
   "Pair them with **seat, routing and hotel preferences**",
   "**Re-verify status** and details periodically"
  ],
  "scene": "A last-minute flight for Elias is booked in a rush: **no loyalty number** and no aisle seat.",
  "move": "Fix both now: **aisle seat, near the front**, loyalty number applied",
  "job": [
   [
    "Any booking",
    "Apply loyalty numbers",
    "Dossier, booking site",
    "Number on confirmation"
   ],
   [
    "Same booking",
    "Apply seat and routing preferences",
    "Client Profile",
    "Aisle, front, direct"
   ],
   [
    "Periodic review",
    "Re-verify program details",
    "Preferences dossier",
    "Status details current"
   ]
  ],
  "dos": [
   "Keep memberships in **the preferences dossier**",
   "Build loyalty checks **into the travel checklist**"
  ],
  "donts": [
   "Never rely on **memory under pressure**",
   "Don't treat loyalty as **a minor courtesy**"
  ]
 },
 "3::Travel Risk Contingency Planning": {
  "image": "risk-umbrella",
  "hook": "Known backups turn a disruption into a **quick pivot**, not a crisis",
  "points": [
   "Name **realistic disruption scenarios** for each trip",
   "Know **backup options** before departure",
   "Store contingencies **with the itinerary**",
   "When it hits, **execute the backup** immediately"
  ],
  "scene": "Severe weather hits Elias's London leg. You already listed **the next viable flight** and a local contact.",
  "move": "**Execute the pre-identified backup** instead of researching from scratch",
  "job": [
   [
    "Trip being finalized",
    "List disruption scenarios",
    "Itinerary document",
    "Each scenario named"
   ],
   [
    "Scenarios listed",
    "Identify backups per scenario",
    "Airline schedules, contacts",
    "Backups documented with itinerary"
   ],
   [
    "Disruption happens",
    "Execute the backup",
    "Phone, booking site",
    "Traveler rerouted fast"
   ]
  ],
  "dos": [
   "Have the plan **before it's needed**",
   "Include a **local contact** at the destination"
  ],
  "donts": [
   "Don't plan **only the ideal case**",
   "Don't **improvise under pressure**"
  ]
 },
 "3::Emergency Flight Contingencies": {
  "image": "crisis-alert",
  "hook": "A cancelled flight before a trial **threatens the trial itself**",
  "points": [
   "Identify the **hard deadline** before booking",
   "Know backups: **later flight, other airport, ground**",
   "Send **one clear message** with the plan",
   "Contingency plans exist **before departure**"
  ],
  "line": "Elias never learns of a flight problem **from an app first**",
  "scene": "Elias's flight to a trial appearance is cancelled. The next flight lands **after the hearing starts**.",
  "move": "Switch to a pre-identified backup, then **message Elias once** with the plan",
  "job": [
   [
    "High-stakes trip planned",
    "Identify the hard deadline",
    "Court calendar",
    "Fixed point recorded"
   ],
   [
    "Before departure",
    "Line up backup routes",
    "Airline schedules, car service",
    "Backups ready"
   ],
   [
    "Disruption confirmed",
    "Send one plan message",
    "Text message",
    "Elias has the plan"
   ]
  ],
  "dos": [
   "Build plans around **the fixed deadline**",
   "Reach Elias **with a plan**, not a problem"
  ],
  "donts": [
   "Don't send **a stream of updates**",
   "Don't wait for **the disruption** to plan"
  ]
 },
 "3::Expense Tracking While Traveling": {
  "image": "invoice-ledger",
  "hook": "Receipts vanish on the road, so **capture them immediately**",
  "points": [
   "Capture each receipt **the moment you get it**",
   "Tag **client, matter, cost center** as you go",
   "Check each **travel day's expenses** that evening",
   "Submit within a **defined window** after return"
  ],
  "line": "Expenses over **$5,000** go to Elias personally — never pre-approve them",
  "scene": "After a London trip, you face a stack of receipts with **no client or matter** noted.",
  "move": "Next trip, **categorize as it happens** while context is fresh",
  "job": [
   [
    "Receipt received",
    "Capture it immediately",
    "Photo, receipt folder",
    "Receipt stored"
   ],
   [
    "Expense incurred",
    "Tag client, matter, cost center",
    "Expense tracker",
    "Every item categorized"
   ],
   [
    "Trip ends",
    "Reconcile and submit",
    "QuickBooks, expense report",
    "Submitted within window"
   ]
  ],
  "dos": [
   "Do an **end-of-day check** for missed receipts",
   "Reconcile with **everyday expense discipline**"
  ],
  "donts": [
   "Don't **reconstruct from memory** afterward",
   "Don't let expenses **pile up** after return"
  ]
 },
 "3::Building a Real Travel Checklist": {
  "image": "compliance-checklist",
  "hook": "A checklist **kept in memory** forgets something different every trip",
  "points": [
   "**Write it once**, reuse it every trip",
   "Keep **documentation** as its own section",
   "Include **destination-specific** health and safety prep",
   "Confirm **loyalty numbers** and a contingency contact"
  ],
  "scene": "Booking a rushed Singapore trip, you nearly skip the **passport-validity check** — it isn't written down anywhere.",
  "move": "Write the checklist now and **reuse it every trip**",
  "job": [
   [
    "Trip requested",
    "Open the standing checklist",
    "Travel checklist",
    "Every section checked"
   ],
   [
    "Bookings made",
    "Confirm loyalty numbers applied",
    "Checklist, confirmations",
    "Loyalty step ticked"
   ],
   [
    "Trip ends",
    "Refine the checklist",
    "Checklist document",
    "Lessons added"
   ]
  ],
  "dos": [
   "**Refine the checklist** after every trip",
   "Add a **contingency contact** for each trip"
  ],
  "donts": [
   "Don't stop at **“book the flight and hotel”**",
   "Don't settle for **a generic packing list**"
  ]
 },
 "3::Post-Trip Debrief & Follow-Up": {
  "image": "email-draft",
  "hook": "A trip isn't done **when the traveler gets home**",
  "points": [
   "**Reconcile expenses** promptly after return",
   "Send **thank-yous and follow-ups** while timely",
   "Note **what worked and what didn't**",
   "Feed lessons into **preferences and the checklist**"
  ],
  "scene": "Back from London, Elias mentions the hotel **fell short** of expectations.",
  "move": "Log it now and **update standing preferences** for next time",
  "job": [
   [
    "Traveler returns",
    "Reconcile trip expenses",
    "Expense tracker",
    "Expenses reconciled"
   ],
   [
    "Trip generated contacts",
    "Send thank-you follow-ups",
    "Email",
    "Sent while timely"
   ],
   [
    "Details still fresh",
    "Write a debrief note",
    "Preferences dossier, checklist",
    "Next trip updated"
   ]
  ],
  "dos": [
   "Write the note **while details are fresh**",
   "Treat debriefs as **continuous improvement**"
  ],
  "donts": [
   "Don't send follow-ups **weeks later**",
   "Don't **repeat the same mistake** next trip"
  ]
 },
 "3::Recognizing Stress & Burnout in High-Pressure Roles": {
  "image": "knowledge-check",
  "hook": "Overload breeds errors, and **in legal support errors cost**",
  "points": [
   "Stress is normal; **burnout is chronic**, unmanaged stress",
   "Burnout: **exhaustion, cynicism, reduced effectiveness**",
   "Early signs: **irritability, dread, small mistakes**",
   "**Name the specific stressor**, then fix it"
  ],
  "scene": "You've **double-booked Elias twice** this week, you're snapping at vendors, and checking email at **11 PM** nightly.",
  "move": "Read the warning signs, then **track the pattern** and act",
  "job": [
   [
    "Every week",
    "Two-minute self check-in",
    "Notes",
    "Energy, sleep, errors rated"
   ],
   [
    "Something feels off",
    "Track patterns two weeks",
    "Daily note line",
    "Chronic versus one-off clear"
   ],
   [
    "Signs persist for weeks",
    "Talk to your manager",
    "EAP, healthcare provider",
    "Support in place"
   ]
  ],
  "dos": [
   "Raise workload concerns **before a crisis**",
   "Check on colleagues **privately and kindly**"
  ],
  "donts": [
   "Don't treat **exhaustion as dedication**",
   "Don't advise colleagues **in front of others**"
  ]
 },
 "3::Stress Management Techniques That Work at a Desk": {
  "image": "time-blocks",
  "hook": "The tools that work fit in **two minutes between tasks**",
  "points": [
   "Breathe slowly: **exhale longer than inhale**",
   "Overwhelmed? **Brain dump**, then pick one action",
   "Take a micro-break **every 60–90 minutes**",
   "End the day with a **shutdown ritual**"
  ],
  "scene": "Elias calls in a hurry: **a court date moved**, three meetings must shift, and a family event overlaps.",
  "move": "Breathe, **brain dump** every item, then pick the first action",
  "job": [
   [
    "Before a tense call",
    "Three to five slow breaths",
    "Breathing count, 4 in, 6 out",
    "Feet down, shoulders down"
   ],
   [
    "Overwhelmed by open items",
    "Brain dump, pick next action",
    "Paper list",
    "One clear next step"
   ],
   [
    "End of day",
    "Review tomorrow, write top three",
    "Calendar, inbox",
    "Inbox closed"
   ]
  ],
  "dos": [
   "**Protect sleep** as a work skill",
   "Keep a personal **calm kit** list"
  ],
  "donts": [
   "Don't rely on **caffeine and willpower**",
   "Don't eat lunch **at the screen** when avoidable"
  ]
 },
 "3::Setting Boundaries & Managing Executive Pressure": {
  "image": "gatekeeper",
  "hook": "Clear boundaries protect **the quality of your work**, not just your time",
  "points": [
   "**Define “urgent”** together with the executive",
   "Agree availability rules **in writing**",
   "Ask **“Which of these should move?”**",
   "Meet pressure with **calm facts and options**"
  ],
  "line": "A boundary never excuses **missing a legal deadline**",
  "scene": "Elias texts at **10:40 PM** to rebook tomorrow's 8 AM client meeting. Your after-hours rule covers court and family emergencies.",
  "move": "Not a covered emergency: **act first thing tomorrow**, then revisit the rule",
  "job": [
   [
    "Starting the role",
    "Agree availability rules",
    "Written agreement",
    "Hours, emergencies, channel defined"
   ],
   [
    "Request collides with priorities",
    "Ask which should move",
    "Slack DM",
    "Executive chooses"
   ],
   [
    "Executive under pressure",
    "Acknowledge, state facts, offer options",
    "Calm script",
    "Options on the table"
   ]
  ],
  "dos": [
   "Build an **emergency path** into the agreement",
   "**Revisit the agreement** when workload changes"
  ],
  "donts": [
   "Don't answer **every late-night message** instantly",
   "Don't **silently absorb** colliding requests"
  ]
 },
 "3::Recovery, Workload Conversations & Support Resources": {
  "image": "team-huddle",
  "hook": "Recovery restores the **focus detail-heavy legal work** depends on",
  "points": [
   "Raise workload **early, with data**",
   "Bring **concrete options**: delegate, pause, add support",
   "Plan time off with a **coverage handover**",
   "Know your **EAP and support contacts** beforehand"
  ],
  "line": "Anyone in crisis in the US can reach the **988 Suicide & Crisis Lifeline**",
  "scene": "You've worked **55-hour weeks** for two months and your error rate is rising.",
  "move": "Open with the data and bring **two or three options** to Elias",
  "job": [
   [
    "Workload slipping",
    "List tasks, hours, slippage",
    "Workload notes",
    "Options drafted"
   ],
   [
    "Time off planned",
    "Hand over coverage",
    "Out-of-office, status note",
    "Delegate access set"
   ],
   [
    "Before you need it",
    "Find EAP and HR contacts",
    "Employer resources",
    "Contacts saved"
   ]
  ],
  "dos": [
   "Frame workload as **a business problem**",
   "**Cover colleagues properly** during their time off"
  ],
  "donts": [
   "Don't wait **until you're exhausted**",
   "Don't **share health details** unless you choose"
  ]
 }
});
