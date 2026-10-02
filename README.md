# LSH EA / PA Training

## 🔐 Sign in on the Main Portal only

Trainees and admins sign in once, on the LSH Training Portal, and open this program from there: this site shows no sign-in form to someone who arrives from the Portal. The Portal sends them here with a signed, short-lived ticket (`?ticket=…`); `js/portal-gate.js` posts it to `/api/auth/portal`, and the Worker signs a trainee in (same `trainee:<id>` records, so every current registration, progress and approval is kept) or an administrator in (their ticket is `{r: "a", exp}`: no passphrase again). Someone who opens this site's link directly sees a note with a **Go to the LSH Training Portal** button instead of the form, and the Worker refuses a name + batch typed here (403 `portal-required`), except to renew the session of a trainee already signed in on that device. The admin passphrase stays under *Sign in with your passphrase* for the direct link.

- **Turning it on:** set `PORTAL_SSO_SECRET` (same value as the Portal) and the admin password (`ADMIN_PASSPHRASE`, or `MASTER_ADMIN_PASSWORD`, the Portal's master admin password) as Worker secrets. Until both are set, `/api/auth/status` reports `portalOnly: false` and the old name + batch form stays.
- **Ticket format:** `base64url(JSON {first, last, b: <batch>, exp})` + `.` + `base64url(HMAC-SHA256(key = "portal-sso:" + secret, message = that text))`, good for 10 minutes at most. The Portal makes it (`functions/api/launch.js` there).
- **Engine hooks:** `js/portal-gate.js` is loaded in `<head>`; `index.html` calls it in four places (the server status, the trainee sign-in request, `renderLogin`, and boot). Course repos built from this page (Foundational-Training's `build/build.py`) skip their own patch when these are already here. It's the same `js/portal-gate.js` in every LSH course repo.

The 10-day EA/PA training course: a Cloudflare Worker (`worker.js`) serving `index.html`, with its records in the `LSH_KV` KV namespace and trainees' saved progress in R2 (see "Where records are kept").

**🏠 Main Portal (admins):** while an admin is signed in, the top bar has **🏠 Main Portal** and the Admin screen has **← Back to Main Portal** (next to Log out). Both open the LSH Training Portal's Training Directory (`https://cm-training-activity.pages.dev/programs.html`), where admins open each program. Trainees and the 👁 Trainee view don't show them. It's `js/portal-link.js`, the same file in every LSH course repo (EA-PA-TRAINING, Case-Management-Training, propertydamageclaimstraining, Foundational-Training); change it in all of them.

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

**Moving a Quick Check to another topic on the same day.** Change its `afterIndex` and add it to `QC_ANCHOR_MOVES` in `index.html` (`[day, the topic it used to follow, question]`), so saved answers and places move with it.

A few rules keep saved progress safe:
- **Titles are keys.** Topic titles must stay unique within a day, because notes, scripts and saved progress are matched by title.
- **Adding or reordering topics.** A trainee's saved place and Quick Check answers are keyed by topic position. So when topics are added or reordered, also add the day's previous title order to the next entry in `DAY_LAYOUTS` in `index.html`. That moves each trainee's saved place to the same topic.
- **New Quick Check on an existing topic.** Give it `"addedIn": "<id of the newest DAY_LAYOUTS entry>"`, so older saved layouts are rebuilt without it.
- **Moving a topic to another day.** Move its entry in `lessons.js` (with its Quick Check, Knowledge Check questions and extra-learning box) and its `notes.js` / `scripts.js` entries, renaming their `"<day>::<title>"` keys, then add a `DAY_LAYOUTS` entry as above for both days. Saved places and Quick Check answers follow the topic to its new day by title.
- **Missing files.** If a day's `lessons.js` doesn't load, the rest of the portal still starts and a banner asks the trainee to refresh.

## 🕘 Attendance

Trainers take each day's attendance in **Admin → 🕘 Attendance** (`js/attendance.js`). Trainees don't see it. It's the same file in every LSH course repo (EA-PA-TRAINING, Case-Management-Training, propertydamageclaimstraining, Foundational-Training); change it in all of them. The LSH Training Portal's admin **🕘 Attendance** page shows and edits the same records, for every program.

- **By batch:** one section per batch (newest first), listing its approved, active trainees, with a count of each status.
- **The day:** today's date in Eastern time (EST, or EDT in summer). ◀ ▶ step through the training days, and the date picker opens any day. The batch's **Day N** counts its days already logged; the trainer can change it.
- **Each trainee's row:** Name; **Training** (the lesson, "Day N: title": for the batch it starts as the day most of the batch is on, from their progress, and it can be changed for the batch or one trainee); **Time In / Time Out** in Eastern time (typed, or ⏱ Now; **Time In fills in on its own** the first time a trainee opens the course each day, marked "auto" until a trainer sets one, and saved when a trainer tags that trainee; trainers always tag the status); **Status**, tagged from the attendance sheet's dropdown in its colors (Present, Late, Late with Notif, Early Out - POC Approved, Undertime - POC Approved, Undertime - No Approval, NCNS, Sick Leave, RL, EOP, Absent with Notif; **✓ Mark the rest Present** tags everyone not yet tagged); and Notes.
- **Saving:** each change saves as you go. A save re-reads the day and writes only the rows changed on that screen, so two trainers can take one batch's attendance at the same time.
- **📊 Summary** (per batch): each trainee's count of every status over the batch's logged days, with the last 10 days as colored squares. **⬇ CSV** downloads a day (every batch) or a batch's history.
- **Google Sheet:** the LSH Training Portal keeps the attendance Google Sheet's **Platform Attendance** tab in step, both ways: everything here (automatic Time Ins included) goes to the sheet every 15 minutes, and edits made in the sheet to Training, Time In, Time Out, Status or Notes come back here straight away. See the Training Portal's README.
- **Storage:** `attendance:<batch key>:<YYYY-MM-DD>` (`_none` for no batch) = `{batch, date, day, training, rows:{<trainee id>:{name, training, timeIn, timeOut, status, note, at, by}}}`, with no key prefix. The Worker's `/api/checkin` records the automatic Time In: `checkin:<YYYY-MM-DD>:<trainee id>` = `{timeIn, at, name, batch, training}` is the automatic Time In (each trainee's own key, so a room signing in at once never overwrites one another; its KV metadata carries the same for the portal; kept 40 days). Only admins can read or write these records.

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

Lists of records (the Trainee Audit, attendance, trainee feedback, tasks) are read with `/api/storage/get-many` (up to 100 keys, the same rules as `/api/storage/get` for each key), not one request per record. A trainee is signed out as revoked only when the server answers that their record is gone or not approved: a server that doesn't answer (offline, or the daily limit) no longer signs anyone out.

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
- **Smoke test in a browser:** serves the site through `worker.js` with an in-memory KV store (`.github/scripts/server.mjs`), signs in as a trainee, and renders every lesson slide, knowledge check, page and practice tool at desktop and phone width. It fails on any page error or a page that scrolls sideways (`.github/scripts/smoke.cjs`).
- **Presenter view** (`.github/scripts/presenter.cjs`): opens Presenter view as a trainer and watches the slides window you share in Google Meet, which must never flicker.
  - Next draws the slide once, cutting straight in with no slide-in or fade.
  - The console re-drawing (its live copy reconnecting) doesn't draw the slides window again.
  - A long slide's next and previous pages change in place.
  - A resize lays the slide out again, still without animation.
  - The slides window never reloads itself for a new version mid-class. The console's **Update now** banner is there instead; after updating, press ↗ Re-open slides window.
- **Server requests** (`.github/scripts/requests.cjs`): `get-many` gives a trainee only their own and public records, an Admin every one, and refuses more than 100 keys. With the checks sped up, a trainee's page reads the tasks for every day in one request and their record about once per check, checks for a new version rarely, and asks nothing while the tab is in the background (catching up when it's back) or on a quick switch to another tab and back. A server that doesn't answer doesn't sign the trainee out; a revoke does. The Trainee Audit reads every trainee in two requests.

To run the same checks locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/storage.mjs
node .github/scripts/server.mjs 8787 &      # then, with Playwright installed:
node .github/scripts/smoke.cjs http://localhost:8787/
node .github/scripts/presenter.cjs http://localhost:8787/
node .github/scripts/requests.cjs http://localhost:8787/
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
- **Admin → 🧭 Orientation** has two tabs: **🧭 Trainee blueprint** and **🛠 Trainer blueprint**.
  - **Trainee blueprint:** the screen-share deck. The **Blueprint PDF** (`/blueprint.pdf`, also in Handouts) is built from it. Its Dashboard slide shows today's dashboard (day cards filling the screen, the scores band under them); its day-by-day roadmap reads the day titles and labs from the portal.
  - **It republishes itself after every deploy**, not only when `APP_BUILD` changes: the published copy is matched against `APP_BUILD` and the Worker's deployment id (`/version`), and the first admin page open after a deploy rebuilds it in the background (`js/lsh-blueprint-course.js`).
  - **Trainer blueprint** (admins only): how to run the course from the trainer side. It covers signing in, approving trainees, the Trainee Audit, day feedback and Focus items, Surprise Tasks and Live Roleplay, certificates, Batch Folders, Rankings and the cohort report, SOP Reference and the Facilitator Guide, Presenter view, Content Studio, Attendance and Trainee view.
    - ◀ ▶, the ← → keys or the contents strip move through it.
    - **⬇ Download PDF** saves it as a landscape PDF, one page per slide, stamped with the build and the deployment.
    - It's never at a public address.
  - **Changing the wording:** the trainer slides are in `js/blueprint-content.js`. `js/lsh-blueprint.js` (the page and the PDF) is the same file on every LSH platform, and `js/lsh-blueprint-course.js` is the same on every LSH course: change either in one, copy it to all.
  - **Test:** `.github/scripts/blueprint.cjs`.
- **Admin → SOP Reference:** each day's session plan ends with the take-home Lesson Notes; the Facilitator Guide's daily rhythm points trainees to them at the close.

## 🎨 Lesson slide background

Every lesson slide sits on the LSH slide template:
- navy background;
- the grey plaid band with the Legal Support Help logo across the top left;
- the orange rule under the band;
- orange line-art waves on both edges.

The files are in `img/lesson-bg/`: `lsh-logo.png` (the logo on a transparent background), `wave-left.svg` and `wave-right.svg`. The CSS is the "Lesson slide background" block near the end of `js/eapa-updates.js`. It styles `.lesson-stage`, so the trainee view, full screen and the Presenter slides window shared in Meet all get it.

The slide-progress dots sit inside the band, so slides keep most of their height. The band is 50–72 px tall, depending on screen height. At 1366×768 slides split into about 4% more pages than without it; at 1920×1080 there's no change.

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
