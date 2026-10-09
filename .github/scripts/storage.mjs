// Where the Worker keeps records (worker.js → dataGet / dataPut / dataDelete), in secure mode:
// - a trainee's progress (progress:<id>) goes to R2; KV gets a copy at most once a day (for the nightly
//   backup), not on every save, so the namespace's free 1,000 writes a day aren't used up; and when
//   they have run out anyway, saving still works (R2), the copy waiting for the next save;
// - progress saved in KV before the move is still read (get and get-many), and lists include both;
// - deleting progress removes it from R2 and KV;
// - everything else (trainee:, feedback:, …) stays in KV, where the Training Portal reads it;
// - without the R2 binding, progress stays in KV as before.
// Usage: node .github/scripts/storage.mjs   (from the repository root; no browser needed)
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const worker = (await import(pathToFileURL(path.join(process.cwd(), 'worker.js')).href)).default;
const failures = []; const fail = (m) => failures.push(m);

function makeEnv(withR2) {
    const kv = new Map(), r2 = new Map(), kvPuts = [];
    const env = {
        // PORTAL_ONLY=off so this test can mint a trainee token by name + batch; trainees really come
        // in from the LSH Training Portal (sso.cjs). What's checked here isn't the sign-in.
        MASTER_ADMIN_PASSWORD: 'ci-pass', SESSION_SECRET: 'ci-secret', PORTAL_ONLY: 'off',
        LSH_KV: {
            get: async (k) => (kv.has(k) ? kv.get(k) : null),
            put: async (k, v) => { kvPuts.push(k); kv.set(k, String(v)); },
            delete: async (k) => { kv.delete(k); },
            list: async ({ prefix = '' } = {}) => ({ keys: [...kv.keys()].filter(k => k.startsWith(prefix)).map(name => ({ name })), list_complete: true })
        }
    };
    if (withR2) env.DOCUMENTS = {
        get: async (k) => (r2.has(k) ? { key: k, text: async () => r2.get(k).value, customMetadata: r2.get(k).meta } : null),
        head: async (k) => (r2.has(k) ? { key: k, customMetadata: r2.get(k).meta } : null),
        put: async (k, v, o = {}) => { r2.set(k, { value: String(v), meta: o.customMetadata || {} }); return { key: k }; },
        delete: async (k) => { r2.delete(k); },
        list: async ({ prefix = '' } = {}) => ({ objects: [...r2.keys()].filter(k => k.startsWith(prefix)).map(key => ({ key })), truncated: false })
    };
    const call = async (p, body, token) => {
        const res = await worker.fetch(new Request('http://x' + p, { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}), body: JSON.stringify(body) }), env, { waitUntil() {} });
        return { status: res.status, body: await res.json().catch(() => null) };
    };
    return { env, kv, r2, kvPuts, call };
}
const progress = (n) => JSON.stringify({ traineeId: 'ana-cruz--b1', savedAt: new Date().toISOString(), data: { notes: ['note ' + n] } });

// with R2
{
    const { env, kv, r2, kvPuts, call } = makeEnv(true);
    kv.set('trainee:ana-cruz--b1', JSON.stringify({ id: 'ana-cruz--b1', name: 'Ana Cruz', batch: 'B1', approved: true }));
    kv.set('progress:old-one--b1', JSON.stringify({ traineeId: 'old-one--b1', data: { notes: ['saved before the move'] } }));
    const t = (await call('/api/auth/trainee', { name: 'Ana Cruz', batch: 'B1' })).body.token;
    const a = (await call('/api/auth/admin', { passphrase: 'ci-pass' })).body.token;

    for (let n = 1; n <= 30; n++) { const r = await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(n) }, t); if (r.status !== 200) { fail(`saving progress: ${JSON.stringify(r)}`); break; } }
    const toKv = kvPuts.filter(k => k === 'progress:ana-cruz--b1').length;
    if (toKv !== 1) fail(`30 progress saves wrote KV ${toKv} times (expected 1: the day's copy)`);
    if (!r2.has('eapa/progress:ana-cruz--b1') || !/note 30/.test(r2.get('eapa/progress:ana-cruz--b1').value)) fail('the latest progress isn\'t in R2 (eapa/progress:<id>)');
    if (!/note 1"/.test(kv.get('progress:ana-cruz--b1') || '')) fail('KV\'s copy isn\'t the first save of the day');
    const got = await call('/api/storage/get', { key: 'progress:ana-cruz--b1' }, t);
    if (!/note 30/.test((got.body && got.body.value) || '')) fail(`reading progress doesn't give the latest save: ${JSON.stringify(got)}`);
    // a day later, KV gets a new copy
    if (r2.has('eapa/progress:ana-cruz--b1')) r2.get('eapa/progress:ana-cruz--b1').meta.kvAt = String(Date.now() - 21 * 3600 * 1000);
    await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(31) }, t);
    if (kvPuts.filter(k => k === 'progress:ana-cruz--b1').length !== 2 || !/note 31/.test(kv.get('progress:ana-cruz--b1'))) fail('a save a day after the last copy didn\'t copy it to KV again');
    // KV's writes for the day have run out: the save still goes to R2, and the next one copies it
    const realPut = env.LSH_KV.put;
    env.LSH_KV.put = async () => { throw new Error('KV put() limit exceeded for the day.'); };
    r2.get('eapa/progress:ana-cruz--b1').meta.kvAt = '0';
    const full = await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(32) }, t);
    if (full.status !== 200 || !/note 32/.test(r2.get('eapa/progress:ana-cruz--b1').value)) fail(`with KV's writes used up, a progress save failed: ${JSON.stringify(full)}`);
    env.LSH_KV.put = realPut;
    await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(33) }, t);
    if (!/note 33/.test(kv.get('progress:ana-cruz--b1') || '')) fail('after KV\'s writes came back, the next save didn\'t copy progress to KV');
    await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(31) }, t);   // (the checks below expect save 31 last)
    // saved before the move: still read, and listed with the rest
    const old = await call('/api/storage/get', { key: 'progress:old-one--b1' }, a);
    if (!/saved before the move/.test((old.body && old.body.value) || '')) fail('progress saved in KV before the move isn\'t read');
    const many = await call('/api/storage/get-many', { keys: ['progress:old-one--b1', 'progress:ana-cruz--b1'] }, a);
    const v = (many.body && many.body.values) || {};
    if (!/saved before the move/.test(v['progress:old-one--b1'] || '') || !/note 31/.test(v['progress:ana-cruz--b1'] || '')) fail(`get-many doesn't read progress from both places: ${JSON.stringify(many.body).slice(0, 300)}`);
    const listed = ((await call('/api/storage/list', { prefix: 'progress:' }, a)).body || {}).keys || [];
    if (listed.sort().join() !== 'progress:ana-cruz--b1,progress:old-one--b1') fail(`listing progress: ${JSON.stringify(listed)}`);
    const all = ((await call('/api/storage/list', { prefix: '' }, a)).body || {}).keys || [];
    if (all.filter(k => k === 'progress:ana-cruz--b1').length !== 1 || !all.includes('trainee:ana-cruz--b1')) fail(`listing everything: ${JSON.stringify(all)}`);
    // the trainee's own record and feedback stay in KV (the Training Portal reads them there)
    await call('/api/storage/set', { key: 'trainee:ana-cruz--b1', value: JSON.stringify({ id: 'ana-cruz--b1', name: 'Ana Cruz', batch: 'B1', lastActive: 'now' }) }, t);
    await call('/api/storage/set', { key: 'feedback:ana-cruz--b1', value: JSON.stringify({ days: { 1: { rating: 4 } } }) }, a);
    if ([...r2.keys()].some(k => !k.startsWith('eapa/progress:'))) fail(`something other than progress went to R2: ${[...r2.keys()].join(', ')}`);
    if (!/lastActive/.test(kv.get('trainee:ana-cruz--b1') || '') || !kv.has('feedback:ana-cruz--b1')) fail('the trainee record or feedback didn\'t go to KV');
    // a trainee still can't read someone else's progress
    const other = await call('/api/storage/get', { key: 'progress:old-one--b1' }, t);
    if (other.status !== 403) fail(`a trainee read another trainee's progress (${other.status})`);
    // deleting removes it everywhere (the KV copy would otherwise be read back)
    await call('/api/storage/delete', { key: 'progress:ana-cruz--b1' }, a);
    const after = await call('/api/storage/get', { key: 'progress:ana-cruz--b1' }, a);
    if (r2.has('eapa/progress:ana-cruz--b1') || kv.has('progress:ana-cruz--b1') || (after.body && after.body.value)) fail('deleting progress left a copy behind');
}

// without R2: as before
{
    const { kv, kvPuts, call } = makeEnv(false);
    kv.set('trainee:ana-cruz--b1', JSON.stringify({ id: 'ana-cruz--b1', name: 'Ana Cruz', batch: 'B1', approved: true }));
    const t = (await call('/api/auth/trainee', { name: 'Ana Cruz', batch: 'B1' })).body.token;
    for (let n = 1; n <= 3; n++) await call('/api/storage/set', { key: 'progress:ana-cruz--b1', value: progress(n) }, t);
    if (kvPuts.filter(k => k === 'progress:ana-cruz--b1').length !== 3 || !/note 3/.test(kv.get('progress:ana-cruz--b1') || '')) fail('without R2, progress isn\'t saved to KV');
    const got = await call('/api/storage/get', { key: 'progress:ana-cruz--b1' }, t);
    if (!/note 3/.test((got.body && got.body.value) || '')) fail('without R2, progress isn\'t read back');
}

if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
console.log('Storage test passed (progress in R2 with one KV copy a day; older KV progress still read and listed; deletes clear both; everything else in KV; no R2 → KV).');
