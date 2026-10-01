// The monthly request budget (request-budget.mjs) against a stand-in Cloudflare account:
// - under the limit nothing changes, and the summary lists every script's requests;
// - at the limit every Worker's workers.dev is switched off (only the ones that were on) and each Pages
//   project with Functions gets the paused page in production (static projects are left alone); the
//   run asks for an email; the state remembers what to switch back on;
// - while paused, a Worker or project switched back on by a deploy is switched off again;
// - in the next billing month everything it switched off comes back (workers.dev on, Pages rolled back);
// - billing months that start mid-month; usage read in several windows; Pages numbers missing → a note;
//   no Workers numbers → the run fails and nothing is switched off; "test" changes nothing in production.
// Usage: node .github/scripts/request-budget.test.mjs
import { run, billingMonth, PAUSED_MARK } from './request-budget.mjs';

const failures = []; const fail = (m) => failures.push(m);
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function account({ usage = { worker: { 'ea-pa-training': 100 }, pages: { 'cms-fn': 50 } }, maxDuration = 86400, failWorkers = false, failPages = false } = {}) {
    const acct = {
        workers: { 'ea-pa-training': { enabled: true }, 'foundational-training': { enabled: true }, 'old-worker': { enabled: false } },
        pages: [
            { name: 'lshcmtraining-trainingcrm', production_branch: 'main', canonical_deployment: { id: 'dep-cms-1', uses_functions: true, deployment_trigger: { metadata: { commit_message: 'Merge PR #64' } } } },
            { name: 'training-directory', production_branch: 'main', canonical_deployment: { id: 'dep-dir-1', uses_functions: false, deployment_trigger: { metadata: { commit_message: 'x' } } } }
        ],
        kv: null, calls: [], deploys: [], gqlWindows: 0
    };
    const cf = {
        async api(p, init = {}) {
            const m = (init.method || 'GET') + ' ' + p; acct.calls.push(m);
            if (m === 'GET /accounts/{account}/workers/scripts') return { success: true, result: Object.keys(acct.workers).map(id => ({ id })) };
            let x = /^(GET|POST) \/accounts\/\{account\}\/workers\/scripts\/([^/]+)\/subdomain$/.exec(m);
            if (x) { const w = acct.workers[decodeURIComponent(x[2])]; if (x[1] === 'POST') w.enabled = JSON.parse(init.body).enabled; return { success: true, result: { enabled: w.enabled } }; }
            if (m === 'GET /accounts/{account}/workers/domains') return { success: true, result: [] };
            if (/^GET \/accounts\/\{account\}\/pages\/projects\?page=1/.test(m)) return { success: true, result: acct.pages, result_info: { total_pages: 1 } };
            x = /^POST \/accounts\/\{account\}\/pages\/projects\/([^/]+)\/deployments\/([^/]+)\/rollback$/.exec(m);
            if (x) { const pr = acct.pages.find(q => q.name === x[1]); pr.canonical_deployment = { id: x[2], uses_functions: true, deployment_trigger: { metadata: { commit_message: 'restored' } } }; return { success: true, result: {} }; }
            throw new Error('unexpected call ' + m);
        },
        async gql(query, v) {
            if (/settings/.test(query)) return { viewer: { accounts: [{ settings: { workersInvocationsAdaptive: { maxDuration }, pagesFunctionsInvocationsAdaptiveGroups: { maxDuration } } }] } };
            const kind = /workersInvocationsAdaptive/.test(query) ? 'worker' : 'pages';
            if ((kind === 'worker' && failWorkers) || (kind === 'pages' && failPages)) throw new Error('GraphQL: unknown field');
            acct.gqlWindows++;
            // the stand-in spreads each script's requests evenly over the windows (windowsPerRun), or puts them all in October's first window (November starts at 0)
            const windows = acct.windowsPerRun || 1;
            if (!acct.windowsPerRun && v.s !== '2026-10-01T00:00:00.000Z') return { viewer: { accounts: [{ rows: [] }] } };
            return { viewer: { accounts: [{ rows: Object.entries(usage[kind]).map(([scriptName, n]) => ({ sum: { requests: n / windows }, dimensions: { scriptName } })) }] } };
        },
        async getState() { return acct.kv ? JSON.parse(acct.kv) : null; },
        async putState(ns, s) { acct.kv = JSON.stringify(s); }
    };
    const deployPaused = async (project, branch, until) => {
        acct.deploys.push({ project, branch, until });
        if (branch !== 'request-budget-test') { const pr = acct.pages.find(q => q.name === project); pr.canonical_deployment = { id: 'dep-paused-' + acct.deploys.length, uses_functions: false, deployment_trigger: { metadata: { commit_message: `${PAUSED_MARK} until ${until}` } } }; }
    };
    return { acct, cf, deployPaused };
}
const opts = (extra) => Object.assign({ account: 'acc', ns: 'ns', limit: 1000, billingDay: 1, now: new Date('2026-10-20T12:00:00Z') }, extra);

// billing months
{
    const a = billingMonth(new Date('2026-10-20T12:00:00Z'), 1), b = billingMonth(new Date('2026-10-01T09:00:00Z'), 15), c = billingMonth(new Date('2026-01-03T00:00:00Z'), 15);
    if (a.key !== '2026-10-01' || a.end.toISOString().slice(0, 10) !== '2026-11-01') fail(`billing month from the 1st: ${a.key} → ${a.end.toISOString()}`);
    if (b.key !== '2026-09-15' || b.end.toISOString().slice(0, 10) !== '2026-10-15') fail(`billing month from the 15th (on Oct 1): ${b.key} → ${b.end.toISOString()}`);
    if (c.key !== '2025-12-15' || c.end.toISOString().slice(0, 10) !== '2026-01-15') fail(`billing month across the new year: ${c.key} → ${c.end.toISOString()}`);
}

// under the limit
{
    const { acct, cf, deployPaused } = account();
    const r = await run(opts({ cf, deployPaused }));
    if (r.total !== 150 || r.state.paused) fail(`under the limit: total ${r.total}, paused ${r.state.paused}`);
    if (acct.calls.some(c => c.startsWith('POST')) || acct.deploys.length) fail(`under the limit something was switched: ${JSON.stringify(acct.calls)}`);
    const md = r.lines.join('\n');
    if (!/\| ea-pa-training \| Worker \| 100 \|/.test(md) || !/\| cms-fn \| Pages Functions \| 50 \|/.test(md)) fail(`the summary doesn't list each script: ${md}`);
    if (r.notify) fail('under the limit the run asks for an email');
}

// usage over several windows (the dataset allows 6 hours at a time): 19.5 days = 78 windows, all added up
{
    const { acct, cf, deployPaused } = account({ maxDuration: 6 * 3600 });
    acct.windowsPerRun = 78;
    const r = await run(opts({ cf, deployPaused }));
    if (acct.gqlWindows !== 78 * 2 || Math.round(r.total) !== 150) fail(`windows: ${acct.gqlWindows} queries, total ${r.total} (expected 156 queries, 150)`);
}

// at the limit: switched off, and an email
{
    const { acct, cf, deployPaused } = account({ usage: { worker: { 'ea-pa-training': 900 }, pages: { 'cms-fn': 150 } } });
    const r = await run(opts({ cf, deployPaused }));
    if (!r.state.paused || !r.notify) fail(`at the limit: paused ${r.state.paused}, notify ${r.notify}`);
    if (acct.workers['ea-pa-training'].enabled || acct.workers['foundational-training'].enabled) fail('a Worker\'s workers.dev was left on');
    if (!eq(r.state.workers.sort(), ['ea-pa-training', 'foundational-training'])) fail(`the state should list only the Workers it switched off: ${JSON.stringify(r.state.workers)}`);
    if (acct.calls.includes('POST /accounts/{account}/workers/scripts/old-worker/subdomain')) fail('a Worker that was already off was touched');
    if (acct.deploys.length !== 1 || acct.deploys[0].project !== 'lshcmtraining-trainingcrm' || acct.deploys[0].branch !== 'main' || acct.deploys[0].until !== '2026-11-01') fail(`the paused page: ${JSON.stringify(acct.deploys)}`);
    if (r.state.pages['lshcmtraining-trainingcrm'] !== 'dep-cms-1' || 'training-directory' in r.state.pages) fail(`the Pages to restore: ${JSON.stringify(r.state.pages)}`);
    if (!/Paused: 1,050 requests reached the limit/.test(r.lines.join('\n'))) fail(`the summary doesn't say it paused: ${r.lines[0]}`);

    // later the same month: a deploy switched things back on → off again, no second email
    acct.workers['ea-pa-training'].enabled = true;
    acct.pages[0].canonical_deployment = { id: 'dep-cms-2', uses_functions: true, deployment_trigger: { metadata: { commit_message: 'Merge PR #65' } } };
    const r2 = await run(opts({ cf, deployPaused, now: new Date('2026-10-25T12:00:00Z') }));
    if (r2.notify) fail('a second email while already paused');
    if (acct.workers['ea-pa-training'].enabled) fail('a Worker switched back on by a deploy stayed on while paused');
    if (acct.deploys.length !== 2 || r2.state.pages['lshcmtraining-trainingcrm'] !== 'dep-cms-2') fail(`a project redeployed while paused: deploys ${acct.deploys.length}, restore to ${r2.state.pages['lshcmtraining-trainingcrm']}`);
    const r3 = await run(opts({ cf, deployPaused, now: new Date('2026-10-26T12:00:00Z') }));
    if (acct.deploys.length !== 2) fail('the paused page was deployed again although the project was still paused');

    // the next billing month: back on
    const r4 = await run(opts({ cf, deployPaused, now: new Date('2026-11-01T00:05:00Z') }));
    if (r4.state.paused) fail('a new billing month didn\'t switch things back on');
    if (!acct.workers['ea-pa-training'].enabled || !acct.workers['foundational-training'].enabled || acct.workers['old-worker'].enabled) fail(`workers.dev after resuming: ${JSON.stringify(acct.workers)}`);
    if (!acct.calls.includes('POST /accounts/{account}/pages/projects/lshcmtraining-trainingcrm/deployments/dep-cms-2/rollback')) fail('the CMS wasn\'t rolled back to its last real deployment');
    if (!/new billing month/.test(r4.lines.join('\n'))) fail('the summary doesn\'t say it switched back on');
    if (r3.notify || r4.notify) fail('an email after the first pause');
}

// by hand: pause and resume
{
    const { acct, cf, deployPaused } = account();
    const p = await run(opts({ cf, deployPaused, action: 'pause' }));
    if (!p.state.paused || acct.workers['ea-pa-training'].enabled) fail('Run workflow → pause didn\'t pause');
    const q = await run(opts({ cf, deployPaused, action: 'resume' }));
    if (q.state.paused || !acct.workers['ea-pa-training'].enabled) fail('Run workflow → resume didn\'t switch back on');
}

// test: nothing in production changes
{
    const { acct, cf, deployPaused } = account({ usage: { worker: { 'ea-pa-training': 5000 }, pages: {} } });
    const r = await run(opts({ cf, deployPaused, action: 'test' }));
    if (acct.calls.some(c => c.startsWith('POST')) || acct.deploys.some(d => d.branch !== 'request-budget-test') || r.state.paused) fail(`a test run changed production: ${JSON.stringify(acct.calls.filter(c => c.startsWith('POST')))} ${JSON.stringify(acct.deploys)}`);
    if (!acct.deploys.length || !/✅ KV state read and saved/.test(r.lines.join('\n'))) fail(`a test run didn't check the paused page and KV: ${r.lines.join(' / ')}`);
}

// numbers missing
{
    const { acct, cf, deployPaused } = account({ failPages: true });
    const r = await run(opts({ cf, deployPaused }));
    if (r.total !== 100 || !/Pages Functions usage couldn't be read/.test(r.lines.join('\n'))) fail('missing Pages numbers aren\'t noted');
    const b = account({ failWorkers: true });
    let threw = false;
    try { await run(opts({ cf: b.cf, deployPaused: b.deployPaused })); } catch (e) { threw = true; }
    if (!threw || b.acct.calls.some(c => c.startsWith('POST')) || b.acct.deploys.length) fail('without the Workers numbers the run should fail and switch nothing');
}

if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
console.log('Request budget test passed (summary per script; pause at the limit with an email; kept off while paused; back on next billing month; by hand; test run; missing numbers).');
