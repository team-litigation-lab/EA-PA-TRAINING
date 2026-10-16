# LSH EA / PA Training

## 🔐 Sign in on the Main Portal only

Trainees sign in once, on the LSH Training Portal, and open this program from there: this site shows no sign-in form to someone who arrives from the Portal. Admins always type the admin password here (`MASTER_ADMIN_PASSWORD`). The Portal sends them here with a signed, short-lived ticket (`?ticket=…`); `js/portal-gate.js` posts it to `/api/auth/portal`, and the Worker signs a trainee in (same `trainee:<id>` records, so every current registration, progress and approval is kept) (an administrator's ticket `{r: "a", exp}` never signs anyone in: the Worker answers 403 `admin-password`). Someone who opens this site's link directly sees a note with a **Go to the LSH Training Portal** button instead of the form, and the Worker refuses a name + batch typed here (403 `portal-required`), except to renew the session of a trainee already signed in on that device. Someone who opens the link directly gets the *Admin Portal* tab, where an admin types the admin password.

- **Turning it on:** set `PORTAL_SSO_SECRET` (same value as the Portal) and the admin password (`MASTER_ADMIN_PASSWORD`, the Portal's master admin password: the one admin password on every platform) as Worker secrets. `ADMIN_PASSPHRASE` is no longer read, and the page has no built-in password of its own. Until both are set, `/api/auth/status` reports `portalOnly: false` and the old name + batch form stays.
- **Admin password checks:** only `MASTER_ADMIN_PASSWORD`. Spaces or line breaks around it, quotes pasted around the whole password, invisible characters and curly quotes or long dashes are ignored, in the stored secret and in what's typed, so a password that only worked from the browser's saved copy works typed too. `/version` says if the stored password had any of these (never the password itself), and if `ADMIN_PASSPHRASE` is still set and can be deleted. Both admin password boxes have a **Show** button. Without `SESSION_SECRET`, sessions are signed with the admin password, so changing it signs everyone out (trainees come back in from the Portal).
- **Ticket format:** `base64url(JSON {first, last, b: <batch>, exp})` + `.` + `base64url(HMAC-SHA256(key = "portal-sso:" + secret, message = that text))`, good for 10 minutes at most. The Portal makes it (`functions/api/launch.js` there).
- **Engine hooks:** `js/portal-gate.js` is loaded in `<head>`; `index.html` calls it in four places (the server status, the trainee sign-in request, `renderLogin`, and boot). Course repos built from this page (Foundational-Training's `build/build.py`) skip their own patch when these are already here. It's the same `js/portal-gate.js` in every LSH course repo.

The 10-day EA/PA training course: a Cloudflare Worker (`worker.js`) serving `index.html`, with its records in the `LSH_KV` KV namespace and trainees' saved progress in R2 (see "Where records are kept").

**🏠 Main Portal (admins):** while an admin is signed in, the top bar has **🏠 Main Portal** and the Admin screen has **← Back to Main Portal** (next to Log out). Both open the LSH Training Portal's Training Directory (`https://cm-training-activity.pages.dev/programs.html`), where admins open each program. Trainees and the 👁 Trainee view don't show them. It's `js/portal-link.js`, the same file in every LSH course repo (EA-PA-TRAINING, Case-Management-Training, propertydamageclaimstraining, Foundational-Training); change it in all of them.

**🧭 The top bar, organized (every course):** buttons that do the same kind of thing share one menu, the way the Training Portal keeps everything else under ⚙ System Management. **📁 Case File** is one tab for the Case File (or Claim File), 📁 Documents and 🗂 Workspace, which share a row of tabs at the top of their pages; **📚 Guides ▾** holds Notes, Handouts and the Facilitator Guide (whichever the page has; the blueprints are on the Main Portal); **📋 My Sheets ▾** holds the Task Tracker and Monitoring Sheet; **⛶ View ▾** holds ⧉ Open in a new tab and ⛶ Full screen. A menu is made only when two or more of its buttons are on the bar. It's `js/lsh-topbar.js`, loaded last, the same file in every LSH course repo; change it in all of them.


### ♻ Restore progress (Admin)
Each trainee row in Admin has **♻ Restore**. It lists every older copy of that trainee's progress: other records with the same name (a trainee who signed in under another batch or spelling gets a new record, and the old one keeps their work), the daily copy kept in KV, and the backup the server keeps when a save has fewer finished days (`backup:progress:<id>`). **Another record** checks any trainee by hand. **Restore** merges the copy in, keeping the current state first in `backup:restore:<id>`: finished days, scores, submissions, notes and slide progress are added and nothing is lost. The trainee's open page takes the restored progress on its next save (`progress-restore:<id>`), so it never writes the old state back.

The window shows when each record was last saved from the trainee's page; if another record with the same name was active more recently, it says so (that's the record their page uses, so restore into that one).

**Same trainee, new batch code.** Trainee ids are name + batch, and the Portal signs trainees in with its own batch codes (e.g. `B091826`). A trainee registered here under another batch used to get a new, empty record on their first Portal sign-in. Now, when that record is missing or empty, the Portal sign-in uses their other record with the same name that has progress (the most recently active if several). The link is kept in `trainee-alias:<new id>`, the record takes the Portal's batch, and the empty duplicate is removed (its progress copy is kept in `backup:progress:<id>`). It's checked once per record.

**A trainee whose sign-in can't be renewed** (for example after the signing secret changed: without `SESSION_SECRET`, sessions are signed with `MASTER_ADMIN_PASSWORD`) sees a bar telling them to open EA/PA again from the Training Portal, instead of an empty page. To renew every such session automatically, set `PREVIOUS_SESSION_SECRET` in Cloudflare to the value sessions were signed with before (the old admin passphrase, if `SESSION_SECRET` wasn't set). It renews trainee sessions only, never admin ones. Remove it once everyone has been back. `/version` shows what signs sessions now.

The server also stops it happening: a trainee's own save can't drop finished days, practice tools or submissions from their record (only an admin can).

## Where each day's content lives

Each day has its own folder, `js/days/day1/` … `js/days/day10/`, with three files:

| File | What's in it |
| --- | --- |
| `lessons.js` | The topics (lessons), Quick Checks, Knowledge Check questions, discussion question and extra-learning boxes. |
| `notes.js` | The trainer's speaker notes for Presenter view and the Speaker Notes PDF (Admin → SOP Reference). |
| `scripts.js` | The spoken script and scenario for every slide. |

To change a day, edit only that day's folder, so one day's edit can't break another day. After an edit, raise that file's `?v=` number in `index.html` so browsers fetch the new copy.

**Sections.** Each topic's `section` groups it with the topics around it (e.g. Day 2's *Email Management*, Day 4's *Email Outreach & Marketing*). Every topic opens with a divider slide (its section, *Topic N of M* and its title); the topic slides themselves show only *Day · Topic · Part*.

**Blocks.** A topic with a `block` title opens a new part of the day with its own divider slide (*Day N · Part X of Y*, the block's title and its topics, or its sections when it has several). Day 4 uses two: *Time Management & Productivity* (moved from Day 3, plus Day 2's *Strategic Time Engineering* and *Time Management Requires Energy Management*) and *Data & Outreach*. To add one, set `"block": "<title>"` on the part's first topic.

**Slides and Lesson Notes.** A topic slide shows each point's key line (`slideBrief` in `js/eapa-updates.js`: the first sentence, without bracketed asides, cut at a dash or colon when still long); "This connects directly to …" lines and the Go Deeper box stay off the slide. The full text of every topic is each day's **📖 Lesson Notes** in Handouts (Read, or ⬇ PDF), and **📖 Full notes for this topic** on a slide opens it at that topic. Write the full text in `lessons.js`; the slide's short version follows on its own.

**One size for the deck.** Every lesson slide is laid out at one size, 960 × 540 (16:9), with fixed type, on a laptop, a large screen, in full screen and in the slides window shared in Meet. The whole slide is then scaled to fit, the way a slide deck is (`deckRescale` in `js/eapa-updates.js`): the same scale for every slide on a screen. Nothing grows or shrinks with the window, so a slide splits into the same pages everywhere, and a resize or full screen only changes the scale; the slide is never laid out again, so it doesn't flicker. A slide that doesn't fit continues on the next page; a diagram is never split. Phones (760px and narrower) keep a scrolling page.

**Moving a Quick Check to another topic on the same day.** Change its `afterIndex` and add it to `QC_ANCHOR_MOVES` in `index.html` (`[day, the topic it used to follow, question]`), so saved answers and places move with it.

A few rules keep saved progress safe:
- **Titles are keys.** Topic titles must stay unique within a day, because notes, scripts and saved progress are matched by title.
- **Adding or reordering topics.** A trainee's saved place and Quick Check answers are keyed by topic position. So when topics are added or reordered, also add the day's previous title order to the next entry in `DAY_LAYOUTS` in `index.html`. That moves each trainee's saved place to the same topic.
- **New Quick Check on an existing topic.** Give it `"addedIn": "<id of the newest DAY_LAYOUTS entry>"`, so older saved layouts are rebuilt without it.
- **Moving a topic to another day.** Move its entry in `lessons.js` (with its Quick Check, Knowledge Check questions and extra-learning box) and its `notes.js` / `scripts.js` entries, renaming their `"<day>::<title>"` keys, then add a `DAY_LAYOUTS` entry as above for both days. Saved places and Quick Check answers follow the topic to its new day by title.
- **Missing files.** If a day's `lessons.js` doesn't load, the rest of the portal still starts and a banner asks the trainee to refresh.

## 🕘 Attendance

**Attendance is not taken in this course.** It is centralized on the LSH Training Portal: **Master
Control → 🕘 Attendance** (`/attendance.html`), which takes and reviews attendance for every program,
per program per batch. This course has no Admin → 🕘 Attendance tab (`js/attendance.js` is gone), so
there is no second place to take it and no copy of that file to keep in step.

What this course still does for attendance:

- **Automatic Time In.** The Worker's `/api/checkin` records a trainee's first visit each day (Eastern
  time) as `checkin:<YYYY-MM-DD>:<trainee id>` = `{timeIn, at, name, batch, training}` — each trainee
  their own key, so a room signing in at once never overwrites one another; the same values are in the
  key's KV metadata for the portal; kept 40 days. The portal's page shows it marked "auto" until a
  trainer sets a Time In.
- **The records live in this course's KV**, with no key prefix: `attendance:<batch key>:<YYYY-MM-DD>` (`_none` for
  no batch) = `{batch, date, day, training, rows:{<trainee id>:{name, training, timeIn, timeOut,
  status, note, at, by}}}`. The portal reads and writes them directly, and keeps the attendance
  Google Sheet's **Platform Attendance** tab in step both ways. Only admins can read or write them.

The statuses, the per-batch summaries, the CSV downloads and the Google Sheet sync are all documented
in the Training Portal's README.
## 📉 Staying under Cloudflare's daily request limit

On Cloudflare's free plan, Workers and Pages Functions get **100,000 requests a day for the whole account**: this portal's Worker (everything under `/api/` and `/version`) and the other LSH sites on the same account (the Case Management System's Pages Functions, for one) share it. When it runs out, the Worker answers 429 ("Error 1027") until 00:00 UTC: pages still load, but sign-in, saving and the trainer's screens don't work. The Workers Paid plan ($5 a month) raises the limit to 10 million requests a month. Usage is under **Workers & Pages** in the Cloudflare dashboard. Static files (the page, `js/`, images) are free and don't count.

So an open page asks the server sparingly (`POLL` in `index.html`), and not at all while its tab is in the background. When it's back, whatever came due runs then; a quick look at another tab (Google Meet) asks nothing:

| What | How often | Before |
|---|---|---|
| A trainee's access and new tasks (`startApprovalPolling`) | every minute: their record, and the tasks for every unlocked day in one request | every 45 s, one request per day, also in the background |
| A Practice Lab attempt reset (`liveTick`) | every minute (the minute check above counts) | every 10 s |
| Trainer feedback and Focus items | every 2 minutes | every 45 s |
| Waiting for approval | every 15 s | every 8 s |
| Admin: Trainee Audit, Rankings, Trainee Feedback | every minute, every trainee in one request | every 30 s, one request per trainee |
| A new version (`/version`) | every 3 minutes (a change is confirmed 20 s later) | every 45 s |

Lists of records (the Trainee Audit, trainee feedback, tasks) are read with `/api/storage/get-many` (up to 100 keys, the same rules as `/api/storage/get` for each key), not one request per record. A trainee is signed out as revoked only when the server answers that their record is gone or not approved: a server that doesn't answer (offline, or the daily limit) no longer signs anyone out.

## 🗄 Where records are kept (KV and R2)

The `LSH_KV` namespace is shared by every LSH course (EA/PA keys have no prefix; the others start with `ft:`, `cm:`, `pd:`, `md:`), and free Workers KV allows **1,000 writes a day** for the whole account: past that, saving fails until 00:00 UTC. A trainee's progress (`progress:<id>`, the copy of their work the portal saves a few seconds after each change) is by far the most-written record, so `worker.js` keeps it in **R2** instead (the `DOCUMENTS` binding, bucket `lshtraining`, under `eapa/`; about a million writes a month free):

- KV still gets a copy of each trainee's progress **at most once a day**, so the nightly backup (which exports KV) has everyone's progress from the last day. If KV's writes have run out for the day, the save still goes to R2 and the next one makes the copy.
- Progress saved before the move, or not yet copied over, is read from KV; lists include both; deleting removes both.
- Everything else stays in KV. The LSH Training Portal reads `trainee:`, `feedback:`, `tfeedback:` and `checkin:` from the namespace directly (its program progress and attendance pages), so those can't move without changing the Portal too.
- Without the R2 binding, everything stays in KV as before.

Code: `dataGet` / `dataPut` / `dataDelete` in `worker.js`. Test: `.github/scripts/storage.mjs`.

## Checks (GitHub Actions)

`.github/workflows/checks.yml` runs on every pull request and every push to `main`. A red **Checks** status means something is broken, and the log says what:

- **Syntax, files and build:**
  - every JavaScript file and inline `<script>` must parse;
  - every local file a page loads must exist;
  - JSON must be valid;
  - the Worker must build (`wrangler deploy --dry-run`; nothing is deployed);
  - **where records are kept** (`.github/scripts/storage.mjs`): 30 progress saves write R2 each time and KV once (a day later, once more); with KV's writes used up, saving still works; progress saved in KV before the move is still read and listed; deleting clears both; trainee records and feedback stay in KV; without R2 everything stays in KV.
- **Smoke test in a browser:** serves the site through `worker.js` with an in-memory KV store (`.github/scripts/server.mjs`), signs in as a trainee, and renders every lesson slide, knowledge check, page and practice tool at desktop and phone width. Then it opens every practice tool directly (as a lab opened in its own tab) with `js/eapa-updates.js` arriving late, the way it does on a normal connection. It fails on any page error, an empty lab or a page that scrolls sideways (`.github/scripts/smoke.cjs`).
- **Presenter view** (`.github/scripts/presenter.cjs`): opens Presenter view as a trainer and watches the slides window you share in Google Meet, which must never flicker.
  - Next draws the slide once, cutting straight in with no slide-in or fade.
  - The console re-drawing (its live copy reconnecting) doesn't draw the slides window again.
  - A long slide's next and previous pages change in place.
  - A resize only scales the deck: the slide isn't drawn or laid out again, keeps its 960 × 540 size and its pages.
  - The slides window never reloads itself for a new version mid-class. The console's **Update now** banner is there instead; after updating, press ↗ Re-open slides window.
- **Every slide fits on one screen** (`.github/scripts/fit.cjs`): every page of every slide of every day, on a laptop (1366 × 768) and a large screen (1920 × 1080). The slide and its Previous / Next bar end inside the window, nothing in the slide is cut off or shrunk, every slide is laid out at 960 × 540 with one scale per screen, and every slide splits into the same pages on both screens.
- **Server requests** (`.github/scripts/requests.cjs`): `get-many` gives a trainee only their own and public records, an Admin every one, and refuses more than 100 keys. With the checks sped up, a trainee's page reads the tasks for every day in one request and their record about once per check, checks for a new version rarely, and asks nothing while the tab is in the background (catching up when it's back) or on a quick switch to another tab and back. A server that doesn't answer doesn't sign the trainee out; a revoke does. The Trainee Audit reads every trainee in two requests.
- **Graded calls** (`.github/scripts/graded-calls.cjs`): a trainee reads their own `callsim:` record (kept by the Training Portal), never another trainee's, and can't write it; the dashboard band's Graded calls card shows — and 0 lines without graded calls, and the best on each line averaged with them.

To run the same checks locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/storage.mjs
node .github/scripts/server.mjs 8787 &      # then, with Playwright installed:
node .github/scripts/smoke.cjs http://localhost:8787/
node .github/scripts/presenter.cjs http://localhost:8787/
node .github/scripts/requests.cjs http://localhost:8787/
node .github/scripts/graded-calls.cjs http://localhost:8787/
```

`.assetsignore` keeps `worker.js`, the Wrangler config, `.github` and Markdown files from being published with the site.

## Nightly backup

`.github/workflows/backup.yml` runs every night (07:17 UTC ≈ 3 AM Eastern; also **Actions → Nightly backup → Run workflow**). `.github/scripts/backup.mjs` exports:

- `kv-courses.json` — every key in the courses' KV namespace (`b121aa…`): EA/PA and CM progress, reviews, activities and their files (the CM course's keys start with `cm:`). EA/PA trainees' progress is kept in R2, with a copy in KV at most a day old (see "Where records are kept"), so it's in here as of the last day;
- `d1-cms.sql`, `d1-portal-logins.sql`, `d1-portal-activities.sql` — the CMS and Training Portal databases (`wrangler d1 export`);

into `lsh-backup-<date>.tar.gz`, uploads it to a Google Drive folder, deletes copies there older than 60 days, and also keeps a 14-day copy as a GitHub Actions artifact. A failed backup turns the run red (GitHub emails you). Not included: the CMS's R2 document storage.

**Setup (once):**

1. **Cloudflare token** — Cloudflare → My Profile → API Tokens → Create Token → *Custom token*: Account → **Workers KV Storage: Read** and **D1: Read** (for the CM deploy workflow the same token can also carry **Workers Scripts: Edit**). Save it in this repo: Settings → Secrets and variables → Actions → **New repository secret** `CLOUDFLARE_API_TOKEN`.
2. **Google service account** — console.cloud.google.com → pick/create a project → APIs & Services → enable **Google Drive API** → IAM & Admin → Service Accounts → Create → Keys → Add key → JSON. Save the whole JSON file's contents as the secret `GOOGLE_SERVICE_ACCOUNT_JSON`.
3. **Drive folder** — service accounts have no Drive storage of their own, so use a **Shared Drive** (Google Workspace): create one (e.g. "LSH Backups"), add the service account's email (`…@….iam.gserviceaccount.com`) as **Content manager**, open the folder and copy the ID from its address (`drive.google.com/drive/folders/<ID>`). Save it as the variable (or secret) `GDRIVE_FOLDER_ID`.
4. Run it once by hand (Actions → Nightly backup → Run workflow) and check the folder.

**Restore:** `wrangler kv key put --namespace-id=b121aa911590471bbad351d03274d7f4 <key> <value>` for single keys (values are in `kv-courses.json`), `wrangler d1 execute <database> --remote --file=d1-<name>.sql` into an empty database.

## 📖 Handouts, Orientation and the Blueprint

- **Handouts → 📖 Lesson Notes:** one card per day with the full text of every topic (see *Slides and Lesson Notes* above).
- **Handouts → Templates & Checklists:** one per day (`HANDOUT_CONTENT` in `index.html`; Days 1–4 are set in `js/eapa-updates.js` to follow today's days: Day 1 command hierarchy, gatekeeping, BLUF and the Three C's; Day 2 inbox triage and safe AI use; Day 3 travel and court deadlines; Day 4 prioritizing the day and client data cleanup).
- **No blueprint opens inside this portal.** Every blueprint is read on the **Main Portal's 🧭 Blueprint page**; the old `#/blueprint` and `#/orientation` addresses forward there, and the top bar carries neither.
  - **The Trainee blueprint PDF** (`/blueprint.pdf`, also in Handouts): built from this course's trainee slides (`trainee` in `js/blueprint-content.js`) by the shared engine (`LSHBlueprint.doc('trainee')`), on the same navy cover band, numbered contents and points / where to find it / tip layout as every other LSH blueprint — as real text, not page images. The Portal's Blueprint page links to it.
  - **It republishes itself after every deploy**, not only when `APP_BUILD` changes: the published copy is matched against `APP_BUILD` and the Worker's deployment id (`/version`), and the first admin page open after a deploy rebuilds it in the background (`js/lsh-blueprint-course.js`).
  - **Changing the wording:** both decks' slides are in `js/blueprint-content.js`. `js/lsh-blueprint.js` is the same file on every LSH platform and `js/lsh-blueprint-course.js` the same on every LSH course: change either in one, copy it to all.
  - **Test:** `.github/scripts/blueprint.cjs`.
- **Admin → SOP Reference:** each day's session plan ends with the take-home Lesson Notes; the Facilitator Guide's daily rhythm points trainees to them at the close.

## 🎨 Lesson slide background

Every lesson slide sits on the LSH slide template:
- navy background;
- the grey plaid band with the Legal Support Help logo across the top left;
- the orange rule under the band;
- orange line-art waves on both edges.

The files are in `img/lesson-bg/`: `lsh-logo.png` (the standardized LSH logo, the same file as `js/lsh-logo-dark.png`, on a transparent background), `wave-left.svg` and `wave-right.svg`. The CSS is the "Lesson slide background" block near the end of `js/eapa-updates.js`. It styles `.lesson-stage`, so the trainee view, full screen and the Presenter slides window shared in Meet all get it.

The slide-progress dots sit inside the band, so slides keep most of their height. The band is 50–72 px tall, depending on screen height. At 1366×768 slides split into about 4% more pages than without it; at 1920×1080 there's no change.

## ◫ Day 3 Practice Lab: the Calendar Conflict Resolver

Activity 1 is built like the Training Portal's **Google Calendar Simulator** (a Google Calendar look-alike; no real Google). The week sits in a calendar card with its own bar (the Calendar mark, *October 12 – 16, 2026*, Week, **+ Create**, Reset to original), a sidebar with **+ Create**, the October mini month with the practice week selected, and **My calendars** — one box per priority, which shows or hides those events (the check always grades every event, hidden or not). The week itself is Google's grid: day names over date circles with Thursday the 15th as today, the hour rail, hour lines, and events as Google event chips laid out in side-by-side lanes where they overlap, each one outlined in red while it still clashes.

The brief above the calendar is two short columns (*Look past the obvious clashes* / *Decide every event*, `.cal-brief`), about 165px instead of the 400px the prose version took, and the hour is 60px tall (`CAL_PX_PER_HR`), so the week itself gets the height: event titles and times are readable without opening them. On a phone the two columns stack.

**The week's collisions are not all double-bookings.** Ten events were added to `CAL_EVENTS` (appended, never reordered — saved edits are keyed by position) so the week tests reading rather than spotting: prep and a final review scheduled *after* the deposition, board call and filing deadline they serve; in-person commitments across town with their travel time written into the location, including an 8:30am breakfast before a 9am start; a court-set hearing time and a clerk's window that close at a fixed hour; the paralegal needed in two rooms at once; a family commitment the dossier says Elias doesn't miss; the same trust ledger reviewed three times in one week; and two client calls booked into one slot by different people. The review's grading notes name each of these, so the trainee is credited for the ones they caught and told which ones they walked past.

**Nothing in the week is sorted out for the trainee.** The lab no longer counts the overlaps, outlines them in red, or lists them: finding the collisions and deciding what belongs on a managing attorney's calendar *is* the exercise. `calFindConflicts` still exists, but only `submitCalendar` and the PDF read it, at review time.

- **Drag** an event to another day or time (it snaps to the half hour); a blue slot and its start time follow the pointer.
- **Click** an event for Google's detail card: its day, time, location and type, the three priority colors, **⇄ Move** (the exact day/time dialog) — and the decision: **✓ Keep** on his calendar, **⇢ Delegate** (to the paralegal, the receptionist, co-counsel, another attorney, billing, or the EA) or **✕ Take off** his calendar (declined, cancelled, handled in writing, pushed to next week). Delegating or taking something off asks for one line on *why*; keeping it doesn't. A block the trainee added themselves can be deleted outright instead.
- A delegated or removed event stays visible on the week, faded and struck through with a ⇢ or ✕, so the trainee sees what they've taken off him. **Your Decisions** under the calendar groups them (staying with the attorney / delegated / off his calendar) with the person, the reason and **↩ Undo**.
- **Check My Plan** is an AI rubric review of the judgment, not a conflict count (one of the 3 attempts, `runRubricEvaluation`). It reads the finished week, every decision and reason, the events left undecided, and the double-bookings still on his calendar — worked out at review time, never shown before — and grades whether they protected court, deposition, filing-deadline, client-consultation and emergency time, fixed clashes by moving the lower-priority side, delegated the right work to a plausible person, and wrote reasons specific to the event. Clearing the week by delegating or deleting most of it scores low.
- On a phone the sidebar folds away (**+ Create** moves into the bar) and the week scrolls sideways inside the card, so the page itself never scrolls sideways.

Saved with the trainee's work: `calendar-edits`, `calendar-custom` and `calendar-decisions`; **Download My Work** includes the week, every decision with its reason and the review.

### 🖥 The trainee dashboard fits one screen

On a desktop or laptop the dashboard shows everything without scrolling: the hero and step dots, the ten day cards, the stats band, the **Competency profile** — now one compact row of eight skills (labels on one line, full name on hover) placed **above** Resume / Certificate — and the Resume / Certificate row. **▶ Resume where you left off** is always there: it goes back to the saved lesson slide or lab part, and when nothing is saved yet (a first visit, a new device) it opens the next day to do. The rules are the *Dashboard: one screen* block at the end of `js/eapa-updates.js` (loaded last, so it wins): tighter day cards from 1100px wide, and on shorter screens (860px tall and under — a 1366×768, or a larger screen at 125% scaling) a smaller ribbon, smaller step dots and tighter cards. Checked at 1474×761, 1366×768, 1536×864 and 1920×1080. Phones and narrow windows keep their scrolling layout.

### ✈ Day 3, Part 4: a business trip that can go wrong

The old family-holiday itinerary (blank forms, links to flight-search screenshots, a check that passed anyone who typed "aisle") is replaced by a work trip with fixed anchors: a Chicago arbitration the tribunal set for **Thursday 9:00 AM**, a client meeting the next day, and a Wednesday 9:00–10:30 client call he can't be in the air for. The firm's travel policy caps fares at $750 and hotels at $320 a night, requires nonstop and refundable court travel, and Elias flies aisle, no redeye before he appears.

1. **Book the flight** from eight fares (`FLIGHT_OPTIONS`). Seven each break exactly one rule — lands on hearing morning, connects, redeye, over the cap, middle seats only, in the air during the client call — and one is compliant. The trainee writes a line of why: if the fare breaks policy, that line is the written reason on file.
2. **Book the hotel** from five (`HOTEL_OPTIONS`), trading distance, price, food, refundability and a renovation; one is fully compliant.
3. **Thursday hour by hour**: car, arrival 30 minutes before, run-through, the fixed hearing, a debrief buffer.
   **Check My Trip Plan** shows 17 hard constraints (`tripHardChecks`, no AI call) and unlocks part 4.
4. **It falls apart the night before** (`TRIP_DISRUPTION`): the flight is cancelled at 9:42 PM, the rebooking lands after the hearing starts, the tribunal has refused one continuance, and the client is in the air. The trainee picks a first move from five (`TRIP_RECOVERY`), writes the action plan with owners, deadlines and a fallback running in parallel, a **BLUF note to Elias**, and the **message to the client tonight**. One rubric review (`reviewTripCrisis`, one of the 3 attempts) grades the booking and the night together: margin before a fixed time, the parallel backstop, putting over-cap spend and continuances to the people who own them, and client messaging that neither panics nor over-promises.

Saved as `trip-plan`; **Download My Work** carries the choices, the reasons, the hard constraints and the review.

### 🚨 Day 8, Parts D–F: Firm Risk & Crisis Response

The Day 8 lab (now **Access, Incident & Firm Crisis Simulator**) gains three parts after *Contain the Leak*. The scenario (`CRISIS_SCENARIO`): Friday's production in *Halvorsen Logistics v. Dunmore Freight* sent 63 privileged settlement-strategy emails to opposing counsel; Halvorsen is 38% of the firm's revenue; Elias is in the air until 11:15.

- **D. The Firm Is Exposed — Size It.** Eight signals land before 8:00 AM (`CRISIS_SIGNALS`): the clawback letter with its 10-day clock, the client's GC who already suspects, a reporter, the malpractice policy's 72-hour notice clause, the associate about to email the other side, the IT export log, today's client QBR, and a $184,000 invoice due out. For each: how fast (now / today / hold) and whose desk. Checked against a key with the reason shown for every row, right or wrong (`checkCrisisTriage`, no AI call).
- **E. Recommendation & Action Plan.** Three ways to play the first 24 hours (`CRISIS_OPTIONS`) — front-foot it with the client, contain first and brief later, or lead with the press narrative. The trainee recommends one in a **BLUF memo to Elias** with the trade-offs of all three and the decisions only he can make, plus an action plan with owners and deadlines. Rubric review (`reviewCrisisRecommendation`).
- **F. The Client Conversation.** The follow-up email to Halvorsen's GC for Elias's signature — fact not speculation, the firm owns it, no one named or blamed, no liability admitted or outcome promised — then her hard reply (`CRISIS_PUSHBACK`: who did this, write off the fees, we may move everything), which the trainee answers for Elias: each demand met directly, the line held where it has to be, the door kept open. Rubric review (`reviewCrisisClient`).

Saved as `crisis-firm`; **Download My Work** on Part F produces the triage, the memo, the plan, the exchange and the reviews. The trainer run of show (`SOP_LAB_ACTIVITIES` in `js/eapa-updates.js`) lists the new parts.

## 📞 Day 4 Practice Lab: simulated prospect calls and lead sourcing

**Prospective Client Intake Call Log (activity 2):** each prospect row has a **📞 Call** button. The trainee rings the prospect and talks by voice (Chrome or Edge) or by typing, using the same call engine as the Live Intake Call Simulator. Each prospect picks up differently:
- Alex Kim: a busy referral who asks "do I have a case?"
- Maria Lopez: a wary web lead, worried about confidentiality and cost.
- John Carter: not ready, so the goal is a dated follow-up.
- Emily Davis: voicemail.
- David Wong: his office manager Tanya screens the call.

The prospect hangs up when the call is naturally over. The date fills itself in, and the trainee logs the outcome, follow-up and notes. **Review My Calls** grades every call and the log together (one Practice Lab attempt). Transcripts are saved (`outbound-calls`) and included in Download My Work. A call costs one AI request per reply and none to start.

**Lead Generation Practice (activity 3):** the scenario is a Data Privacy & Cybersecurity practice launching in New York.
1. **Pick your sources:** within a 6-hour weekly budget. Bought lists and scraped numbers lose points.
2. **Build the lead list:** decide on 12 raw leads (hot, warm, nurture, conflicts hold or skip), including a conflict with the Harlow matter, a duplicate, a competitor, an out-of-area company and a do-not-contact.
3. **Write the plan:** AI-reviewed, with the trainee's own sources and list as context.

Steps 1 and 2 are scored on the page and use no AI requests. The code is the last two blocks of `js/eapa-updates.js` (`OB_PROSPECTS`, `LG_SOURCES`, `LG_LEADS`).

## 📞 The Call Simulator (☎ LSH Ring Channel) and graded calls

The Call Simulator is **☎ LSH Ring Channel's** — the training phone itself (the lshringchannel repo). The **📞 Call Simulator (☎ LSH Ring Channel)** card in the Live Roleplay hub and in the Intake Call Simulator section opens it signed in through the Training Portal (`/api/launch?tool=ringchannel&to=calls&program=EA`, plus `&line=` for the card's line), in its own tab: the phone rings, the trainee answers with a headset and works the call with the phone's own keys (mute, hold, transfer) and 🔎 Case lookup, and the call is graded on that line's Mock Calls Metrics. A graded call (a caller unknown until the debrief) is reported to the Portal's `/api/call-results`, so it still counts in this course.

**Note on the call packs:** Ring Channel's scenario library is the Foundational pack on three lines (Reception and Calendar Management on the Main Line, Intake on the Intake Line), so a card naming an EA / PA line it doesn't have (Executive Calls, Gatekeeping & Stakeholders, Legal Operations, Lifestyle & Estate, Revenue & Outreach) lands the trainee on the phone's line picker until those calls are added on Ring Channel itself — a trainer writes them in its **📚 Scenarios**, or they are ported into its `src/scenarios.js`.

A graded call counts here. The Training Portal (its `/api/call-results`) keeps the trainee's graded calls in `callsim:<trainee id>` (no key prefix; a trainee on an older id is found through `trainee-alias:`), by line, and the Worker lets the trainee read it but never write it. The dashboard band's **Graded calls** card (`js/graded-calls.js`) shows the best graded call on each line, averaged, with the lines and calls taken; each line's best is in its tooltip. It's read once a page load and again when the trainee comes back to the tab (at most every two minutes).

## 🔄 New versions (auto-update)

Every open page checks every 3 minutes for a new deploy. When one is found, the page shows a banner with **Update now**. It reloads on its own only when it's safe: nobody has clicked, typed or scrolled for 2 minutes, and no call, quiz, pop-up or Presenter view is open. Lab answers are saved before the reload and put back after it, including the Day 4 dropdowns and the **📝 My Notes** card in Prioritize the Day. The 2-minute wait is in the "Calmer auto-update" block at the end of `js/eapa-updates.js`. Before it, a page reloaded within seconds of a deploy whenever nobody was typing, which trainees saw as the page flickering.

Lab work that isn't a plain text box is saved under its own key so a reload keeps it: Day 4's call transcripts (`outbound-calls`) and Day 6's 15-case Compliance Audit (`c6-audit`: Clean / Issue Found, risk levels and written actions). Both keys sync to the trainee's account with the other personal keys (`PERSONAL_KEYS` in `index.html`) and are cleared on sign-out. When a Day 6 check finds something missing, it names the cases and scrolls to the first one.

## 👤 Practice Lab reviews follow Elias Thorne's profile

Every AI review in the Practice Labs (written labs, roleplay calls, intake calls and quick practice) gets Elias Thorne's full client profile (`CLIENT_DOSSIER_MD`, built from `CLIENT_PROFILE_DOC` in `index.html`) and grades the work against it. The code is the last block of `js/eapa-updates.js`:
- Contradicting his stated preferences or standing rules loses Accuracy points. These include his channel ranking, BLUF style, Paleo diet, black coffee, aisle seat and no connecting flights, the approval threshold, confidentiality, protected calendar blocks, and family and household details.
- Applying a profile detail without being told earns Presence points.
- Each review names at least one point starting with "Elias's profile:". The report shows these in bold, under a "Graded against Elias Thorne's client profile" tag.
- Day 2's checklist scoring doesn't use AI, so it isn't tagged.

## AI relay for the Training Portal

`worker.js` → `/api/ai-relay` lets the LSH Training Portal's simulators (Call Simulator, Calendaring, Email Replies) send their Gemini calls from this Worker's US placement, since Gemini refuses some regions the Portal's Pages Functions run in (e.g. Hong Kong). It takes the same body as `/api/claude` (plus `json` and `temperature`) and uses this Worker's key pool. It only answers requests carrying `X-Relay-Key` equal to the secret **`AI_RELAY_SECRET`**; set the same value on the Portal's Pages project (see Training-Portal `SIMULATORS.md`). Without the secret the endpoint returns 403.

**Gemini region refusals.** Gemini answers 400 *User location is not supported* for some regions. The Worker is placed in the US (`wrangler.json`), but placement is best-effort, so a refused call is sent again from **`GeminiRelay`**, a Durable Object pinned to western North America (`locationHint: "wnam"`, binding `GEMINI_RELAY`), and that Worker instance keeps using it. The relay only forwards to `generativelanguage.googleapis.com`. A Durable Object can't be created by a branch preview build, so a PR that changes its class shows a red *Workers Builds* preview; the `main` deploy applies it.

- `AI_GATEWAY_SECRET` (optional Secret, the same value as on the Portal): every AI call goes to the Main Portal's shared AI gateway, one master key pool and one shared budget for all call flows. Without it this Worker uses its own `GEMINI_API_KEY` pool.

## 🎨 The standard page style

This program's look is the LSH standard, shared with the Training Portal and
the other four programs. The block that carries it sits at the end of the
`<style>` in `index.html`, marked **"The LSH standard page style"**, and is
byte-identical in all five programs.

**It is a vendored copy, not a link.** The Portal's `theme.css` — and the
"The standard page style" section of the Portal's README — is the source of
truth. Change it there first, then copy the block down into each program. The
copy is deliberate: every program deploys on its own, and no other site's
deploy can restyle this one.

What it does:

- The page sits on a photo behind a wash. Each program keeps **its own image**,
  pointed at by its own `body::before`; only the strength is shared (`.40`).
- The panels on top of it are translucent (`--surface-glass`, `--surface-blur`),
  so the backdrop carries on underneath instead of stopping at every card.
- The colour rules in the block are what the backdrop costs, not decoration.
  Text must clear WCAG AA (4.5:1, or 3:1 at 24px / 18.7px bold) against the
  **photo**, not against a white card that is no longer white. That is why
  `--ink-soft` is `#2B2F3E` rather than the `#5B6178` tuned for white, why
  orange is never used as lettering on the photo, and why a label on an orange
  fill is dark rather than white.

Changing any surface here means re-checking contrast against the photo. The
audit that produced these numbers screenshots each view twice — normally and
with every glyph transparent — and scores each text run against the pixels
actually behind its own lettering.
