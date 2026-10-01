// The monthly request budget (request-budget.mjs) against a stand-in Cloudflare account:
// - under the limit nothing changes, and the summary lists every script's requests;
// - at the limit every Worker's workers.dev is switched off (only the ones that were on) and each Pages
//   project with Functions gets the paused page in production (static projects are left alone); the
//   run asks for an email; the state remembers what to switch back on;
// - while paused, a Worker or project switched back on by a deploy is switched off again;
// - in the next billing month everything it switched off comes back (workers.dev on, Pages rolled back);
// - billing months that start mid-month; usage read in several windows; Pages numbers missing → a note;
//   no Workers numbers → the run fails and nothing is switched off; "test" changes nothing in production;
// - the admin pages' request meter: the usage saved to KV (total, limit, projection, per script, per day,
//   paused), about once an hour unless it matters; days already counted aren't asked for again.
// Usage: node .github/scripts/request-budget.test.mjs
import { run, billingMonth, windowMs, PAUSED_MARK } from './request-budget.mjs';

const failures = []; const fail = (m) => failures.push(m);
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function account({ usage = { worker: { 'ea-pa-training': 100 }, pages: { 'cms-fn': 50 } }, maxDuration = 86400, failWorkers = false, failPages = false } = {}) {
    const acct = {
        workers: { 'ea-pa-training': { enabled: true }, 'foundational-training': { enabled: true }, 'old-worker': { enabled: false } },
        pages: [
            { name: 'lshcmtraining-trainingcrm', production_branch: 'main', canonical_deployment: { id: 'dep-cms-1', uses_functions: true, deployment_trigger: { metadata: { commit_message: 'Merge PR #64' } } } },
            { name: 'training-directory', production_branch: 'main', canonical_deployment: { id: 'dep-dir-1', uses_functions: false, deployment_trigger: { metadata: { commit_message: 'x' } } } }
        ],
        kv: null, usageKv: null, usageWrites: 0, calls: [], deploys: [], gqlWindows: 0, gqlStarts: []
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
            acct.gqlWindows++; acct.gqlStarts.push(kind + ' ' + v.s);
            // perDay: each script's requests per UTC day (windows of a day)
            if (acct.perDay) return { viewer: { accounts: [{ rows: Object.entries((acct.perDay[v.s.slice(0, 10)] || {})[kind] || {}).map(([scriptName, n]) => ({ sum: { requests: n }, dimensions: { scriptName } })) }] } };
            // the stand-in spreads each script's requests evenly over the windows (windowsPerRun), or puts them all in October's first window (November starts at 0)
            const windows = acct.windowsPerRun || 1;
            if (!acct.windowsPerRun && v.s !== '2026-10-01T00:00:00.000Z') return { viewer: { accounts: [{ rows: [] }] } };
            return { viewer: { accounts: [{ rows: Object.entries(usage[kind]).map(([scriptName, n]) => ({ sum: { requests: n / windows }, dimensions: { scriptName } })) }] } };
        },
        async getState() { return acct.kv ? JSON.parse(acct.kv) : null; },
        async putState(ns, s) { acct.kv = JSON.stringify(s); },
        async getUsage() { return acct.usageKv ? JSON.parse(acct.usageKv) : null; },
        async putUsage(ns, u) { if (acct.failUsage) throw new Error('saving the usage to KV: HTTP 500'); acct.usageWrites++; acct.usageKv = JSON.stringify(u); }
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
    if (!acct.usageKv || !/✅ The usage saved for the admin pages' request meter/.test(r.lines.join('\n'))) fail('a test run doesn\'t save the usage for the request meter');
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

// query windows: a day at most, in whole hours that divide a day
if (windowMs(31 * 86400) !== 86400000 || windowMs(86400) !== 86400000 || windowMs(6 * 3600) !== 6 * 3600000 || windowMs(5 * 3600) !== 4 * 3600000 || windowMs(1800) !== 3600000 || windowMs(undefined) !== 86400000)
    fail(`query windows: ${[31 * 86400, 86400, 6 * 3600, 5 * 3600, 1800, undefined].map(windowMs).join(', ')}`);

// the admin pages' request meter
{
    const { acct, cf, deployPaused } = account({ maxDuration: 31 * 86400 });
    acct.perDay = { '2026-10-01': { worker: { 'ea-pa-training': 100 }, pages: { 'cms-fn': 50 } }, '2026-10-19': { worker: { 'ea-pa-training': 40, 'foundational-training': 10 }, pages: {} },
        '2026-10-20': { worker: { 'ea-pa-training': 7 }, pages: { 'cms-fn': 3 } } };
    const at = (iso) => opts({ cf, deployPaused, now: new Date(iso) });
    const r = await run(at('2026-10-20T12:00:00Z'));
    const m = JSON.parse(acct.usageKv || 'null');
    if (!m) fail('the usage wasn\'t saved for the request meter');
    else {
        if (m.v !== 1 || m.at !== '2026-10-20T12:00:00.000Z' || m.month.start !== '2026-10-01' || m.month.end !== '2026-11-01') fail(`the meter's month and time: ${JSON.stringify({ v: m.v, at: m.at, month: m.month })}`);
        if (m.total !== 210 || m.limit !== 1000 || m.included !== 10000000 || m.paused !== false || m.projected !== Math.round(210 / 19.5 * 31)) fail(`the meter's numbers: ${JSON.stringify({ total: m.total, limit: m.limit, included: m.included, paused: m.paused, projected: m.projected })}`);
        if (!eq(m.sites.map(x => [x.kind, x.name, x.requests]), [['worker', 'ea-pa-training', 147], ['pages', 'cms-fn', 53], ['worker', 'foundational-training', 10]])) fail(`the meter's sites: ${JSON.stringify(m.sites)}`);
        if (!eq(m.days, { '2026-10-01': 150, '2026-10-19': 50, '2026-10-20': 10 })) fail(`the meter's days: ${JSON.stringify(m.days)}`);
        if (!m.cache || m.cache.through !== '2026-10-20T00:00:00.000Z' || !eq(m.cache.days, { '2026-10-01': 150, '2026-10-19': 50 })) fail(`what the next run starts from: ${JSON.stringify(m.cache)}`);
    }
    if (acct.gqlWindows !== 40) fail(`a day per window: ${acct.gqlWindows} queries for Oct 1 – Oct 20 noon (expected 20 a dataset)`);

    // 10 minutes later, little changed: not saved again (KV writes count too); the days already counted aren't asked for
    acct.gqlWindows = 0; acct.gqlStarts = [];
    acct.perDay['2026-10-20'].worker['ea-pa-training'] = 8;
    const r2 = await run(at('2026-10-20T12:10:00Z'));
    if (acct.usageWrites !== 1) fail(`the meter was saved again 10 minutes later with little changed (${acct.usageWrites} writes)`);
    if (r2.total !== 211) fail(`the total with the days already counted: ${r2.total} (expected 211)`);
    if (acct.gqlWindows !== 2 || acct.gqlStarts.some(x => !/2026-10-20T00:00:00/.test(x))) fail(`asked again for days already counted: ${JSON.stringify(acct.gqlStarts)}`);

    // an hour on: saved
    await run(at('2026-10-20T13:05:00Z'));
    if (acct.usageWrites !== 2) fail('the meter wasn\'t saved after an hour');
    // 1% of the limit more: saved at once
    acct.perDay['2026-10-20'].worker['ea-pa-training'] = 20;
    await run(at('2026-10-20T13:15:00Z'));
    if (acct.usageWrites !== 3 || JSON.parse(acct.usageKv).total !== 223) fail(`1% of the limit more wasn't saved at once (${acct.usageWrites} writes, total ${JSON.parse(acct.usageKv).total})`);
    // a new day: saved; yesterday is now counted for good
    acct.perDay['2026-10-21'] = { worker: { 'ea-pa-training': 1 }, pages: {} };
    await run(at('2026-10-21T01:30:00Z'));
    const m2 = JSON.parse(acct.usageKv);
    if (acct.usageWrites !== 4 || m2.cache.through !== '2026-10-21T00:00:00.000Z' || m2.cache.days['2026-10-20'] !== 23 || m2.days['2026-10-21'] !== 1 || m2.total !== 224) fail(`a new day: ${JSON.stringify({ writes: acct.usageWrites, through: m2.cache.through, days: m2.days, total: m2.total })}`);
    // 75% of the limit: saved every run
    acct.perDay['2026-10-21'].worker['ea-pa-training'] = 600;
    await run(at('2026-10-21T01:40:00Z')); await run(at('2026-10-21T01:50:00Z'));
    if (acct.usageWrites !== 6) fail(`from 75% of the limit the meter isn't saved every run (${acct.usageWrites} writes)`);
    // paused: the meter says so
    acct.perDay['2026-10-21'].worker['ea-pa-training'] = 900;
    await run(at('2026-10-21T02:00:00Z'));
    const m3 = JSON.parse(acct.usageKv);
    if (!m3.paused || m3.pausedAt !== '2026-10-21T02:00:00.000Z' || m3.total < 1000) fail(`paused, the meter: ${JSON.stringify({ paused: m3.paused, pausedAt: m3.pausedAt, total: m3.total })}`);
    // a new billing month: the old days aren't carried over
    acct.gqlStarts = [];
    await run(at('2026-11-01T00:20:00Z'));
    const m4 = JSON.parse(acct.usageKv);
    if (m4.month.start !== '2026-11-01' || m4.total !== 0 || m4.paused || Object.keys(m4.days).length || acct.gqlStarts.some(x => !/2026-11-01T00:00:00/.test(x))) fail(`a new billing month, the meter: ${JSON.stringify({ month: m4.month, total: m4.total, paused: m4.paused, days: m4.days, asked: acct.gqlStarts })}`);
}

// the meter's numbers can't be saved: the run goes on (the limit matters more)
{
    const { acct, cf, deployPaused } = account();
    acct.failUsage = true;
    const r = await run(opts({ cf, deployPaused }));
    if (r.total !== 150 || !/couldn't be saved for the admin pages' request meter/.test(r.lines.join('\n'))) fail('a failed meter save isn\'t noted, or stopped the run');
    const t = await run(opts({ cf, deployPaused, action: 'test' }));
    if (!/❌ The usage couldn't be saved/.test(t.lines.join('\n'))) fail('a test run doesn\'t report the meter save failing');
}

if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
console.log('Request budget test passed (summary per script; pause at the limit with an email; kept off while paused; back on next billing month; by hand; test run; missing numbers; the request meter saved hourly, from the days already counted).');
