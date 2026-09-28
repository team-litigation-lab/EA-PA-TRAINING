// Nightly backup of every trainee's progress, run by .github/workflows/backup.yml.
//
// Exports:
//   kv-<namespace>.json   every key in the courses' KV namespace (EA/PA and CM progress, feedback,
//                         activities and their files; the CM course's keys carry its "cm:" prefix)
//   d1-<database>.sql     each D1 database (the CMS and the Training Portal), via `wrangler d1 export`
// into backups/lsh-backup-<date>.tar.gz, then uploads it to a Google Drive folder and removes copies
// older than KEEP_DAYS there.
//
// Needs (repository secrets / variables):
//   CLOUDFLARE_API_TOKEN          Account → Workers KV Storage: Read, D1: Read (Edit is fine too)
//   CLOUDFLARE_ACCOUNT_ID         (variable; defaults to the LSH account)
//   GOOGLE_SERVICE_ACCOUNT_JSON   the service account's JSON key (optional — without it the backup is
//                                 only kept as a GitHub Actions artifact)
//   GDRIVE_FOLDER_ID              the Drive folder (in a Shared Drive) the service account can add files to
// No dependencies: Node 20+ and the wrangler CLI via npx.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID || 'a5bc4befef0191374735bd6a0109fec0';
const TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';
const KV_NAMESPACES = { courses: 'b121aa911590471bbad351d03274d7f4' };
const D1_DATABASES = {
    cms: 'lshcasemanagementtraining-trainingcrmlogins-v3',
    'portal-logins': 'lshcasemanagementtraining-trainingcrmlogins',
    'portal-activities': 'lsh-training-activities-db'
};
const KEEP_DAYS = Number(process.env.KEEP_DAYS || 60);
const OUT = path.resolve('backups');
const stamp = new Date().toISOString().slice(0, 10);
const work = path.join(OUT, `lsh-backup-${stamp}`);

if (!TOKEN) {
    console.log('::warning::CLOUDFLARE_API_TOKEN is not set, so there is nothing to back up yet. See README → Nightly backup.');
    process.exit(0);
}
fs.mkdirSync(work, { recursive: true });
const problems = [];

async function cf(pathname, init = {}) {
    for (let attempt = 0; ; attempt++) {
        const r = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}${pathname}`, {
            ...init, headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(init.headers || {}) }
        });
        if ((r.status === 429 || r.status >= 500) && attempt < 4) { await new Promise(res => setTimeout(res, 2000 * (attempt + 1))); continue; }
        return r;
    }
}

async function exportKv(label, ns) {
    const keys = [];
    let cursor = '';
    do {
        const r = await cf(`/storage/kv/namespaces/${ns}/keys?limit=1000${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`);
        const j = await r.json();
        if (!j.success) throw new Error(`KV list failed: ${JSON.stringify(j.errors)}`);
        j.result.forEach(k => keys.push(k.name));
        cursor = (j.result_info && j.result_info.cursor) || '';
    } while (cursor);
    const values = {};
    let i = 0;
    const worker = async () => {
        while (i < keys.length) {
            const k = keys[i++];
            const r = await cf(`/storage/kv/namespaces/${ns}/values/${encodeURIComponent(k)}`);
            if (r.ok) values[k] = await r.text();
            else problems.push(`KV ${label}: couldn't read "${k}" (${r.status})`);
        }
    };
    await Promise.all(Array.from({ length: 6 }, worker));
    const file = path.join(work, `kv-${label}.json`);
    fs.writeFileSync(file, JSON.stringify({ namespace: ns, exportedAt: new Date().toISOString(), count: Object.keys(values).length, values }));
    console.log(`KV ${label}: ${Object.keys(values).length} of ${keys.length} keys (${(fs.statSync(file).size / 1048576).toFixed(1)} MB)`);
}

function exportD1(label, name) {
    const file = path.join(work, `d1-${label}.sql`);
    try {
        execFileSync('npx', ['--yes', 'wrangler@4', 'd1', 'export', name, '--remote', `--output=${file}`], { stdio: ['ignore', 'pipe', 'pipe'], env: process.env, timeout: 300000 });
        console.log(`D1 ${label} (${name}): ${(fs.statSync(file).size / 1024).toFixed(0)} KB`);
    } catch (e) {
        problems.push(`D1 ${label} (${name}): ${String(e.stderr || e.message).split('\n').filter(Boolean).slice(-3).join(' ')}`);
    }
}

/* ---------- Google Drive (service account, no libraries) ---------- */
async function googleToken(sa) {
    const now = Math.floor(Date.now() / 1000);
    const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
    const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/drive', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
    const sig = crypto.createSign('RSA-SHA256').update(unsigned).sign(sa.private_key).toString('base64url');
    const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }) });
    const j = await r.json();
    if (!j.access_token) throw new Error(`Google sign-in failed: ${JSON.stringify(j)}`);
    return j.access_token;
}
async function uploadToDrive(file) {
    const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON, folder = process.env.GDRIVE_FOLDER_ID;
    if (!raw || !folder) { console.log('::notice::Google Drive is not set up (GOOGLE_SERVICE_ACCOUNT_JSON / GDRIVE_FOLDER_ID), so this backup is kept only as a GitHub Actions artifact.'); return; }
    const token = await googleToken(JSON.parse(raw));
    const name = path.basename(file), boundary = 'lsh' + crypto.randomBytes(8).toString('hex');
    const body = Buffer.concat([
        Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({ name, parents: [folder] })}\r\n--${boundary}\r\nContent-Type: application/gzip\r\n\r\n`),
        fs.readFileSync(file), Buffer.from(`\r\n--${boundary}--`)]);
    const up = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true', { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': `multipart/related; boundary=${boundary}` }, body });
    const uj = await up.json();
    if (!up.ok) throw new Error(`Drive upload failed (${up.status}): ${JSON.stringify(uj.error || uj).slice(0, 400)}${/storageQuota/i.test(JSON.stringify(uj)) ? ' — the folder must be in a Shared Drive (service accounts have no storage of their own).' : ''}`);
    console.log(`Uploaded ${name} to Google Drive (file id ${uj.id}).`);
    // Keep the last KEEP_DAYS days in the folder.
    const cutoff = new Date(Date.now() - KEEP_DAYS * 86400000).toISOString();
    const q = encodeURIComponent(`'${folder}' in parents and name contains 'lsh-backup-' and createdTime < '${cutoff}' and trashed = false`);
    const list = await (await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name)&supportsAllDrives=true&includeItemsFromAllDrives=true&pageSize=200`, { headers: { Authorization: `Bearer ${token}` } })).json();
    for (const f of list.files || []) {
        const d = await fetch(`https://www.googleapis.com/drive/v3/files/${f.id}?supportsAllDrives=true`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
        console.log(d.ok ? `Removed old backup ${f.name}` : `Couldn't remove ${f.name} (${d.status})`);
    }
}

for (const [label, ns] of Object.entries(KV_NAMESPACES)) {
    try { await exportKv(label, ns); } catch (e) { problems.push(`KV ${label}: ${e.message}`); }
}
for (const [label, name] of Object.entries(D1_DATABASES)) exportD1(label, name);
fs.writeFileSync(path.join(work, 'README.txt'), `LSH training backup ${stamp}\n\nkv-*.json: {namespace, values: {key: value}} — restore a key with the Cloudflare dashboard or \`wrangler kv key put --namespace-id=<id> <key> <value>\`.\nd1-*.sql: restore with \`wrangler d1 execute <database> --remote --file=<file>\` (into an empty database).\n${problems.length ? `\nProblems during this backup:\n- ${problems.join('\n- ')}\n` : ''}`);
const archive = path.join(OUT, `lsh-backup-${stamp}.tar.gz`);
execFileSync('tar', ['-czf', archive, '-C', OUT, path.basename(work)]);
console.log(`Archive: ${archive} (${(fs.statSync(archive).size / 1048576).toFixed(1)} MB)`);
try { await uploadToDrive(archive); } catch (e) { problems.push(e.message); }
if (problems.length) {
    console.log(`\n${problems.length} problem(s):\n- ${problems.join('\n- ')}`);
    process.exit(1);   // a red run emails whoever set up the workflow
}
