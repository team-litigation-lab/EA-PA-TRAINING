# LSH EA / PA Training

The 10-day EA/PA training course: a Cloudflare Worker (`worker.js`) serving `index.html`, with progress kept in the `LSH_KV` KV namespace.

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

## Daily Activities and the facilitator's feedback style

`js/daily-activities.js` adds two things:

- **📋 Activities** (trainee tab) — the trainer publishes each day's activities in **Admin → 📋 Activities → Set activities**: a title, instructions (plain text; `**bold**`, `- ` bullets and links work), attached files (up to 4 MB each), how the trainee answers (written, file upload or both) and private notes on what a strong answer includes. Trainees see a day's activities once that day unlocks, answer, and submit. **Review submissions** lists them; **✨ Draft with AI** writes a review (using the private notes) that the trainer edits and sends. The trainee gets a badge on the tab and reads it on the activity page; resubmitting keeps the earlier feedback and waits for a new review.
- **🗣 Feedback Style** (admin tab) — learns how the facilitator writes feedback from real examples: **Import** pulls in the daily reviews and activity reviews the trainer edited or wrote, and more can be pasted or uploaded (.txt). **Learn the style** produces a style guide plus generic voice examples (no trainee details), which the trainer can edit or switch off. While it's on, every AI feedback — Practice Lab grading, daily reviews and activity drafts — is written in that voice; ratings and scores are unaffected.

Storage keys and who can use them (enforced in `worker.js`): `activities:dayN`, `actfile:*` and `settings:feedback-style` are published by admins and readable by everyone; `actsub:<trainee>` and `actup:<trainee>:*` belong to that trainee (they can't write the trainer's feedback); `actadmin:rubrics` and `admin:fbstyle-samples` are admin-only.
