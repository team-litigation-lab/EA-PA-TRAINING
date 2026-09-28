# LSH EA / PA Training

The 10-day EA/PA training course: a Cloudflare Worker (`worker.js`) serving `index.html`, with progress kept in the `LSH_KV` KV namespace.

`pd-training/` is a separate course, the 5-day **Property Damage Claims Training**. It is its own Worker built on the same engine, and `.assetsignore` keeps it out of this site. See [pd-training/README.md](pd-training/README.md); its checks run in `.github/workflows/pd-training.yml`.

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
