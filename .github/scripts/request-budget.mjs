// Monthly request budget for the whole Cloudflare account: a hard limit, so the card is never charged
// for Workers requests. Run every 10 minutes by .github/workflows/request-budget.yml.
//
// The Workers Paid plan includes 10 million requests a billing month across every Worker and Pages
// Function on the account (all the LSH sites), then charges $0.30 per extra million. Cloudflare has no
// spending cap, so this is one:
//   - it reads the account's requests so far this billing month from Cloudflare's GraphQL analytics
//     (Workers and Pages Functions, per script) and writes them to the run's summary;
//   - at REQUEST_LIMIT (default 9,990,000) it switches the server parts off until the next billing month:
//       Workers: their workers.dev address is turned off (requests then never reach them);
//       Pages projects with Functions: a static "paused" page is deployed to production (free);
//     and the run fails, so GitHub emails whoever set the workflow up;
//   - while paused it keeps them off (a deploy in between switches a Worker or a project back on);
//   - when the next billing month starts, it switches back on what it switched off: workers.dev on
//     again, each Pages project rolled back to the deployment it had.
// What it switched off is kept in KV (the courses' namespace, key "_request-budget").
//
// Needs (repository secret / variables):
//   CLOUDFLARE_BUDGET_TOKEN   API token: Account Analytics Read, Workers Scripts Edit,
//                             Cloudflare Pages Edit, Workers KV Storage Edit
//   CLOUDFLARE_ACCOUNT_ID     (variable; defaults to the LSH account)
//   REQUEST_LIMIT             (variable; default 9990000)
//   BILLING_DAY               (variable; the day of the month the Cloudflare billing month starts; default 1)
//   ACTION                    check (the schedule) | test | pause | resume (Run workflow)
// Usage: node .github/scripts/request-budget.mjs
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export const PAUSED_MARK = '[request-budget] paused';
const STATE_KEY = '_request-budget';
const DAY = 86400000;

/* ---------- the billing month ---------- */
// The billing month that `now` falls in: from BILLING_DAY (1–28) of this month or the last, to the same day a month later (UTC).
export function billingMonth(now, billingDay = 1) {
    const d = Math.min(28, Math.max(1, Number(billingDay) || 1));
    let y = now.getUTCFullYear(), m = now.getUTCMonth();
    if (now.getUTCDate() < d) { m -= 1; if (m < 0) { m = 11; y -= 1; } }
    const start = new Date(Date.UTC(y, m, d));
    const end = new Date(Date.UTC(m === 11 ? y + 1 : y, (m + 1) % 12, d));
    return { start, end, key: start.toISOString().slice(0, 10) };
}

/* ---------- Cloudflare API ---------- */
export function cloudflare(token, account, fetchImpl = fetch) {
    const base = `https://api.cloudflare.com/client/v4`;
    async function call(pathname, init = {}, raw = false) {
        for (let attempt = 0; ; attempt++) {
            const r = await fetchImpl(base + pathname.replace('{account}', account), {
                ...init, headers: { Authorization: `Bearer ${token}`, ...(init.body && typeof init.body === 'string' && !raw ? { 'Content-Type': 'application/json' } : {}), ...(init.headers || {}) }
            });
            if ((r.status === 429 || r.status >= 500) && attempt < 3) { await new Promise(res => setTimeout(res, 3000 * (attempt + 1))); continue; }
            if (raw) return r;
            const j = await r.json().catch(() => ({ success: false, errors: [{ message: `HTTP ${r.status}` }] }));
            if (!j.success) throw new Error(`${init.method || 'GET'} ${pathname.replace('{account}', '…')}: ${(j.errors || []).map(e => e.message).join('; ') || r.status}`);
            return j;
        }
    }
    return {
        api: call,
        async gql(query, variables) {
            const r = await fetchImpl(`${base}/graphql`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ query, variables }) });
            const j = await r.json().catch(() => null);
            if (!j || (j.errors && j.errors.length)) throw new Error(`GraphQL: ${j && j.errors ? j.errors.map(e => e.message).join('; ') : `HTTP ${r.status}`}`);
            return j.data;
        },
        async getState(ns) {
            const r = await call(`/accounts/{account}/storage/kv/namespaces/${ns}/values/${STATE_KEY}`, {}, true);
            if (r.status === 404) return null;
            if (!r.ok) throw new Error(`reading the state from KV: HTTP ${r.status}`);
            try { return JSON.parse(await r.text()); } catch (e) { return null; }
        },
        async putState(ns, state) {
            const r = await call(`/accounts/{account}/storage/kv/namespaces/${ns}/values/${STATE_KEY}`, { method: 'PUT', body: JSON.stringify(state), headers: { 'Content-Type': 'text/plain' } }, true);
            if (!r.ok) throw new Error(`saving the state to KV: HTTP ${r.status}`);
        }
    };
}

/* ---------- usage this billing month ---------- */
const DATASETS = { worker: 'workersInvocationsAdaptive', pages: 'pagesFunctionsInvocationsAdaptiveGroups' };
// Requests per script from `from` to `to`, a dataset at a time, in windows no longer than the dataset allows.
export async function usage(cf, account, from, to) {
    let maxSec = {};
    try {
        const s = await cf.gql(`query($a: string!) { viewer { accounts(filter: { accountTag: $a }) { settings {
            workersInvocationsAdaptive { maxDuration } pagesFunctionsInvocationsAdaptiveGroups { maxDuration } } } } }`, { a: account });
        const st = (((s || {}).viewer || {}).accounts || [])[0] || {};
        for (const [k, ds] of Object.entries(DATASETS)) maxSec[k] = st.settings && st.settings[ds] && st.settings[ds].maxDuration;
    } catch (e) { maxSec = {}; }
    const byScript = new Map(), notes = [];
    for (const [kind, ds] of Object.entries(DATASETS)) {
        const step = Math.max(3600, Math.min(Number(maxSec[kind]) || DAY / 1000, 31 * 86400)) * 1000;
        try {
            for (let t = from.getTime(); t < to.getTime(); t += step) {
                const a = new Date(t).toISOString(), b = new Date(Math.min(t + step, to.getTime())).toISOString();
                const d = await cf.gql(`query($a: string!, $s: Time!, $e: Time!) { viewer { accounts(filter: { accountTag: $a }) {
                    rows: ${ds}(limit: 10000, filter: { datetime_geq: $s, datetime_lt: $e }) { sum { requests } dimensions { scriptName } } } } }`, { a: account, s: a, e: b });
                const rows = ((((d || {}).viewer || {}).accounts || [])[0] || {}).rows || [];
                for (const r of rows) {
                    const name = (r.dimensions && r.dimensions.scriptName) || '(unnamed)';
                    const k = kind + ':' + name;
                    byScript.set(k, { kind, name, requests: ((byScript.get(k) || {}).requests || 0) + Number((r.sum || {}).requests || 0) });
                }
            }
        } catch (e) {
            if (kind === 'worker') throw e;   // without the Workers numbers there's nothing to go on
            notes.push(`Pages Functions usage couldn't be read (${e.message}). Their requests may be missing from the total.`);
        }
    }
    const scripts = [...byScript.values()].sort((x, y) => y.requests - x.requests);
    return { total: scripts.reduce((s, x) => s + x.requests, 0), scripts, notes };
}

/* ---------- switching off and on ---------- */
async function pagesProjects(cf) {
    const out = [];
    for (let page = 1; page < 50; page++) {
        const j = await cf.api(`/accounts/{account}/pages/projects?page=${page}&per_page=10`);
        out.push(...(j.result || []));
        const info = j.result_info || {};
        if (!info.total_pages || page >= info.total_pages || !(j.result || []).length) break;
    }
    return out;
}
const isPausedDeployment = (d) => !!d && /\[request-budget\] paused/.test(String(((d.deployment_trigger || {}).metadata || {}).commit_message || ''));
const prodDeployment = (p) => p.canonical_deployment || p.latest_deployment || null;

// Switch every Worker's workers.dev off and pause every Pages project that runs Functions. Idempotent:
// what's already off stays off, and anything switched back on since (a deploy) is switched off again.
export async function pauseAll(cf, deployPaused, state, until, log) {
    state.workers = state.workers || []; state.pages = state.pages || {};
    const scripts = (await cf.api('/accounts/{account}/workers/scripts')).result || [];
    for (const s of scripts) {
        const sub = ((await cf.api(`/accounts/{account}/workers/scripts/${encodeURIComponent(s.id)}/subdomain`)).result) || {};
        if (sub.enabled) {
            await cf.api(`/accounts/{account}/workers/scripts/${encodeURIComponent(s.id)}/subdomain`, { method: 'POST', body: JSON.stringify({ enabled: false, previews_enabled: false }) });
            if (!state.workers.includes(s.id)) state.workers.push(s.id);
            log(`Worker ${s.id}: workers.dev switched off`);
        }
    }
    try {
        const domains = (await cf.api('/accounts/{account}/workers/domains')).result || [];
        if (domains.length) log(`Note: ${domains.map(d => `${d.hostname} (${d.service})`).join(', ')} are Workers custom domains: they keep running (detach them by hand if needed).`);
    } catch (e) { /* listing custom domains is extra */ }
    for (const p of await pagesProjects(cf)) {
        const d = prodDeployment(p);
        if (!d || d.uses_functions === false) continue;   // static only: free
        if (isPausedDeployment(d)) continue;
        state.pages[p.name] = d.id;                        // the deployment to roll back to
        await deployPaused(p.name, p.production_branch || 'main', until);
        log(`Pages ${p.name}: paused (was deployment ${d.id})`);
    }
    return state;
}
// Switch back on what pauseAll switched off.
export async function resumeAll(cf, state, log) {
    const problems = [];
    for (const id of state.workers || []) {
        try { await cf.api(`/accounts/{account}/workers/scripts/${encodeURIComponent(id)}/subdomain`, { method: 'POST', body: JSON.stringify({ enabled: true }) }); log(`Worker ${id}: workers.dev on`); }
        catch (e) { problems.push(`Worker ${id}: ${e.message}`); }
    }
    for (const [name, dep] of Object.entries(state.pages || {})) {
        try { await cf.api(`/accounts/{account}/pages/projects/${encodeURIComponent(name)}/deployments/${encodeURIComponent(dep)}/rollback`, { method: 'POST' }); log(`Pages ${name}: rolled back to ${dep}`); }
        catch (e) { problems.push(`Pages ${name}: ${e.message}`); }
    }
    return problems;
}

/* ---------- one run ---------- */
// Returns { action, total, limit, scripts, notes, state, notify, problems, lines } (lines: the summary, Markdown).
export async function run({ cf, deployPaused, account, ns, limit = 9990000, billingDay = 1, action = 'check', now = new Date(), log = () => {} }) {
    const month = billingMonth(now, billingDay);
    const lines = [], problems = [];
    let state = (await cf.getState(ns)) || { paused: false };
    let notify = false;

    if (action === 'resume' || (state.paused && state.month !== month.key)) {
        problems.push(...await resumeAll(cf, state, log));
        state = { paused: false, month: month.key, resumedAt: now.toISOString() };
        await cf.putState(ns, state);
        lines.push(action === 'resume' ? '**Switched back on (by hand).**' : `**A new billing month (${month.key}): everything switched back on.**`);
    }

    const u = await usage(cf, account, month.start, now);
    const elapsed = Math.max(1 / 24, (now - month.start) / DAY), days = (month.end - month.start) / DAY;
    const projected = Math.round(u.total / elapsed * days);
    const pct = (n) => (100 * n / limit).toFixed(1) + '%';

    if (action === 'test') {
        lines.push(...await testPermissions(cf, deployPaused, ns, month.end, log));
        lines.push(u.notes.length ? '- ⚠️ Usage: ' + u.notes.join(' ') : `- ✅ Usage read for Workers and Pages Functions (${u.scripts.length} scripts)`);
    } else if (action === 'pause' || u.total >= limit || state.paused) {
        const first = !state.paused;
        state = await pauseAll(cf, deployPaused, Object.assign({}, state, { paused: true, month: month.key }), month.end.toISOString().slice(0, 10), log);
        if (first) { state.pausedAt = now.toISOString(); state.pausedAtTotal = u.total; notify = true; }
        await cf.putState(ns, state);
        lines.push(first ? `**Paused: ${u.total.toLocaleString('en-US')} requests reached the limit of ${limit.toLocaleString('en-US')}.** The sites' server parts are off until ${month.end.toISOString().slice(0, 10)}.`
            : `**Paused** since ${state.pausedAt || '?'} (until ${month.end.toISOString().slice(0, 10)}).`);
        if (action === 'resume' && u.total >= limit) lines.push(`Still over the limit, so it paused again: raise REQUEST_LIMIT to keep the sites on before ${month.end.toISOString().slice(0, 10)}.`);
    }

    lines.push('', `Billing month ${month.key} → ${month.end.toISOString().slice(0, 10)}: **${u.total.toLocaleString('en-US')}** of ${limit.toLocaleString('en-US')} requests (${pct(u.total)}); at this rate about ${projected.toLocaleString('en-US')} by the end of the month.`, '',
        '| Script | Kind | Requests | Share |', '|---|---|---:|---:|',
        ...u.scripts.map(s => `| ${s.name} | ${s.kind === 'pages' ? 'Pages Functions' : 'Worker'} | ${s.requests.toLocaleString('en-US')} | ${u.total ? (100 * s.requests / u.total).toFixed(1) : '0'}% |`));
    u.notes.forEach(n => lines.push('', '⚠️ ' + n));
    if (!state.paused && u.total >= 0.8 * limit) lines.push('', `⚠️ ${pct(u.total)} of the limit used.`);
    if (!state.paused && projected > limit) lines.push('', `⚠️ At this rate the limit is reached before the month ends: the sites would pause.`);
    return { action, total: u.total, limit, projected, scripts: u.scripts, notes: u.notes, state, notify, problems, lines };
}

// Run workflow → test: checks every permission without changing production.
async function testPermissions(cf, deployPaused, ns, until, log) {
    const out = ['**Test run** (nothing in production changed):'];
    const ok = (m) => out.push('- ✅ ' + m), bad = (m) => out.push('- ❌ ' + m);
    try { const s = (await cf.api('/accounts/{account}/workers/scripts')).result || []; ok(`Workers listed: ${s.map(x => x.id).join(', ') || 'none'}`);
        for (const x of s) { const sub = ((await cf.api(`/accounts/{account}/workers/scripts/${encodeURIComponent(x.id)}/subdomain`)).result) || {}; ok(`${x.id}: workers.dev ${sub.enabled ? 'on' : 'off'}`); } }
    catch (e) { bad(`Workers: ${e.message}`); }
    try { const ps = await pagesProjects(cf); ok(`Pages projects: ${ps.map(p => `${p.name}${(prodDeployment(p) || {}).uses_functions === false ? ' (static)' : ' (Functions)'}`).join(', ') || 'none'}`);
        for (const p of ps.filter(p => (prodDeployment(p) || {}).uses_functions !== false)) {
            try { await deployPaused(p.name, 'request-budget-test', until); ok(`${p.name}: the paused page deployed to a preview branch (request-budget-test)`); } catch (e) { bad(`${p.name}: deploying the paused page failed: ${e.message}`); }
        } }
    catch (e) { bad(`Pages: ${e.message}`); }
    try { const st = await cf.getState(ns); await cf.putState(ns, st || { paused: false }); ok('KV state read and saved'); } catch (e) { bad(`KV state: ${e.message}`); }
    log(out.join('\n'));
    return out;
}

/* ---------- the paused page, deployed with Wrangler ---------- */
export function pausedHtml(until) {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Paused until ${until}</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;background:#f1f5f9;color:#0f172a}main{max-width:520px;margin:24px;padding:28px;background:#fff;border-radius:14px;box-shadow:0 8px 30px rgba(15,23,42,.12)}h1{font-size:20px;margin:0 0 10px}p{line-height:1.5;color:#334155}</style></head>
<body><main><h1>This training site is paused</h1><p>It has used this month's server allowance, so it's paused until <b>${until}</b> (UTC), when it comes back on by itself. Your saved work is kept.</p><p>Questions? Contact your trainer.</p></main></body></html>`;
}
function deployPausedWithWrangler(project, branch, until) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'paused-'));
    fs.writeFileSync(path.join(dir, 'index.html'), pausedHtml(until));
    execFileSync('npx', ['--yes', 'wrangler@4', 'pages', 'deploy', dir, `--project-name=${project}`, `--branch=${branch}`, `--commit-message=${PAUSED_MARK} until ${until}`, '--commit-dirty=true'],
        { stdio: ['ignore', 'pipe', 'pipe'], env: process.env, timeout: 300000 });
}

/* ---------- command line ---------- */
if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
    const token = process.env.CLOUDFLARE_API_TOKEN || '';
    if (!token) { console.log('::warning::CLOUDFLARE_BUDGET_TOKEN is not set, so the request budget is not being watched. See README → Monthly request budget.'); process.exit(0); }
    const account = process.env.CLOUDFLARE_ACCOUNT_ID || 'a5bc4befef0191374735bd6a0109fec0';
    process.env.CLOUDFLARE_ACCOUNT_ID = account;   // for Wrangler
    const res = await run({
        cf: cloudflare(token, account), deployPaused: deployPausedWithWrangler, account,
        ns: process.env.STATE_KV_NAMESPACE || 'b121aa911590471bbad351d03274d7f4',
        limit: Number(process.env.REQUEST_LIMIT) || 9990000, billingDay: Number(process.env.BILLING_DAY) || 1,
        action: process.env.ACTION || 'check', log: (m) => console.log(m)
    }).catch(e => { console.log(`::error::${e.message}`); process.exit(1); });
    const md = res.lines.join('\n');
    console.log(md);
    if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n');
    res.problems.forEach(p => console.log(`::error::${p}`));
    if (!res.notify && res.total >= 0.9 * res.limit && !res.state.paused) console.log(`::warning::${(100 * res.total / res.limit).toFixed(1)}% of this month's request limit used.`);
    if (res.notify) { console.log(`::error::The request limit was reached: the sites are paused until the next billing month.`); process.exit(1); }   // a red run emails the workflow's owner
    if (res.problems.length) process.exit(1);
}
