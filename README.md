# LSH EA / PA Training

The 10-day EA/PA training course: a Cloudflare Worker (`worker.js`) serving `index.html`, with progress kept in the `LSH_KV` KV namespace.

**🏠 Main Portal (admins):** while an admin is signed in, the top bar has **🏠 Main Portal** and the Admin screen has **← Back to Main Portal** (next to Log out). Both open the LSH Training Portal's Training Directory (`https://cm-training-activity.pages.dev/programs.html`), where admins open each program. Trainees and the 👁 Trainee view don't show them. It's `js/portal-link.js`, the same file in every LSH course repo (EA-PA-TRAINING, Case-Management-Training, propertydamageclaimstraining, Foundational-Training); change it in all of them.

## Checks (GitHub Actions)

`.github/workflows/checks.yml` runs on every pull request and every push to `main`. A red **Checks** status means something is broken, and the log says what:

- **Syntax, files and build:**
  - every JavaScript file and inline `<script>` must parse;
  - every local file a page loads must exist;
  - JSON must be valid;
  - the Worker must build (`wrangler deploy --dry-run`; nothing is deployed).
- **Smoke test in a browser:** serves the site through `worker.js` with an in-memory KV store (`.github/scripts/server.mjs`), signs in as a trainee, and renders every lesson slide, knowledge check, page and practice tool at desktop and phone width. It fails on any page error or a page that scrolls sideways (`.github/scripts/smoke.cjs`).

To run the same checks locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/server.mjs 8787 &      # then, with Playwright installed:
node .github/scripts/smoke.cjs http://localhost:8787/
```

`.assetsignore` keeps `worker.js`, the Wrangler config, `.github` and Markdown files from being published with the site.

## Nightly backup

`.github/workflows/backup.yml` runs every night (07:17 UTC ≈ 3 AM Eastern; also **Actions → Nightly backup → Run workflow**). `.github/scripts/backup.mjs` exports:

- `kv-courses.json` — every key in the courses' KV namespace (`b121aa…`): EA/PA and CM progress, reviews, activities and their files (the CM course's keys start with `cm:`);
- `d1-cms.sql`, `d1-portal-logins.sql`, `d1-portal-activities.sql` — the CMS and Training Portal databases (`wrangler d1 export`);

into `lsh-backup-<date>.tar.gz`, uploads it to a Google Drive folder, deletes copies there older than 60 days, and also keeps a 14-day copy as a GitHub Actions artifact. A failed backup turns the run red (GitHub emails you). Not included: the CMS's R2 document storage.

**Setup (once):**

1. **Cloudflare token** — Cloudflare → My Profile → API Tokens → Create Token → *Custom token*: Account → **Workers KV Storage: Read** and **D1: Read** (for the CM deploy workflow the same token can also carry **Workers Scripts: Edit**). Save it in this repo: Settings → Secrets and variables → Actions → **New repository secret** `CLOUDFLARE_API_TOKEN`.
2. **Google service account** — console.cloud.google.com → pick/create a project → APIs & Services → enable **Google Drive API** → IAM & Admin → Service Accounts → Create → Keys → Add key → JSON. Save the whole JSON file's contents as the secret `GOOGLE_SERVICE_ACCOUNT_JSON`.
3. **Drive folder** — service accounts have no Drive storage of their own, so use a **Shared Drive** (Google Workspace): create one (e.g. "LSH Backups"), add the service account's email (`…@….iam.gserviceaccount.com`) as **Content manager**, open the folder and copy the ID from its address (`drive.google.com/drive/folders/<ID>`). Save it as the variable (or secret) `GDRIVE_FOLDER_ID`.
4. Run it once by hand (Actions → Nightly backup → Run workflow) and check the folder.

**Restore:** `wrangler kv key put --namespace-id=b121aa911590471bbad351d03274d7f4 <key> <value>` for single keys (values are in `kv-courses.json`), `wrangler d1 execute <database> --remote --file=d1-<name>.sql` into an empty database.
