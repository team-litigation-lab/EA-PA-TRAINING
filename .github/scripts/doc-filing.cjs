// 📤 Filing a document in the CMS, and 📂 the trainee's Backup Drive — the rules both sides are graded on.
//
// Two features meet here, and the ways they can quietly break are all the same kind: a document whose
// PDF nobody can build, a Doc Hub tab the CMS doesn't have, a backup-drive folder that isn't in the
// firm's structure, a folder structure with no rule written down for one of its folders. None of those
// shows up as an error in a browser: the trainee just gets a panel that can't file anything, or a grade
// that can't be earned. So they are checked here.
//
// What this checks:
//   1. Every document in js/eapa-cms-filing.js names a ⬇ Download PDF function that exists, and that
//      function goes through buildAndSavePdf — the one builder the CMS filing panel captures bytes from.
//   2. buildAndSavePdf can hand its bytes back instead of saving (capturePdf), and ⬇ Download PDF is
//      still what it does when nobody is capturing.
//   3. Every document's tab is a Doc Hub category the CMS has, and every document has a folder on the
//      backup drive (DRIVE_HOMES) that is in the firm's structure (FOLDER_STANDARD).
//   4. Every folder in the firm's structure has its rule written down (FOLDER_WHY), every parent comes
//      before its children, and the structure is a tree.
//   5. The Day 1 setup grading: the firm's own structure scores 100%, and a missing folder, a different
//      spelling, an invented folder and the right folders in the wrong order are each refused with a
//      problem to read.
// Usage: node .github/scripts/doc-filing.cjs   (no server, no browser needed)
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const failures = [];
const fail = (m) => failures.push(m);
const ok = (m) => console.log('ok  ' + m);

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const updates = fs.readFileSync(path.join(ROOT, 'js/eapa-updates.js'), 'utf8');
const filing = fs.readFileSync(path.join(ROOT, 'js/eapa-cms-filing.js'), 'utf8');
const drive = fs.readFileSync(path.join(ROOT, 'js/eapa-drive.js'), 'utf8');
const worker = fs.readFileSync(path.join(ROOT, 'worker.js'), 'utf8');

/* ---------- the documents the labs file ---------- */
const docsSrc = filing.slice(filing.indexOf('const DOCS = ['), filing.indexOf('const docOf ='));
if (!docsSrc.includes('{id:')) { console.log('Could not find the document list in js/eapa-cms-filing.js'); process.exit(1); }
let DOCS;
try { DOCS = new Function(docsSrc + '\nreturn DOCS;')(); } catch (e) { console.log('The document list could not be read: ' + e.message); process.exit(1); }
if (!DOCS.length) fail('No documents are filed in the CMS — the panel would never open.');

/* ---------- the Worker's side: the folder structure and the grading ---------- */
const wBlock = worker.slice(worker.indexOf('const DRIVE_ROOT ='), worker.indexOf('/* ---------- 🕘 automatic Time In (read by the Training Portal'));
if (!wBlock.includes('function gradeLayout')) { console.log('Could not find the Backup Drive rules in worker.js'); process.exit(1); }
const W = {};
try {
  new Function('out', 'const enc = new TextEncoder(); const adminPass = () => "x";\n' + wBlock +
    '\nout.FOLDER_STANDARD = FOLDER_STANDARD; out.FOLDER_WHY = FOLDER_WHY; out.DRIVE_HOMES = DRIVE_HOMES; out.gradeLayout = gradeLayout; out.DRIVE_SCOPES = DRIVE_SCOPES;')(W);
} catch (e) { console.log('The Backup Drive rules could not be read: ' + e.message); process.exit(1); }
const { FOLDER_STANDARD, FOLDER_WHY, DRIVE_HOMES, gradeLayout, DRIVE_SCOPES } = W;

/* ---------- 1 + 2: the document each lab files is the document it downloads ---------- */
DOCS.forEach((d) => {
  const where = html.includes(`async function ${d.fn}(`) || html.includes(`function ${d.fn}(`) ? html
    : updates.includes(`function ${d.fn}(`) ? updates : null;
  if (!where) { fail(`${d.id}: there is no ${d.fn}() to build its PDF.`); return; }
  // the body of that function, up to the next top-level function
  const from = where.indexOf(`function ${d.fn}(`);
  const body = where.slice(from, where.indexOf('\nfunction ', from + 10));
  if (!/buildAndSavePdf\(/.test(body)) fail(`${d.id}: ${d.fn}() doesn't go through buildAndSavePdf, so the CMS filing panel can't take its bytes.`);
  const btn = new RegExp(`onclick="${d.fn}\\(\\)"[^<]*</button>\\$\\{window\\.EAPACMSFiling \\? EAPACMSFiling\\.button\\("${d.id}"\\)`);
  if (!btn.test(html) && !btn.test(updates)) fail(`${d.id}: ⬆ Upload in the CMS isn't beside this lab's ⬇ Download PDF button.`);
});
ok(`${DOCS.length} documents, each built by its own ⬇ Download PDF and offered to the CMS beside it`);

if (!/if\(PDF_CAPTURE\)\{ PDF_CAPTURE\.bytes = doc\.output\("arraybuffer"\)/.test(html))
  fail('buildAndSavePdf no longer hands its bytes back when a document is being captured.');
if (!/\n  doc\.save\(filename\);/.test(html))
  fail('buildAndSavePdf no longer saves the file when nobody is capturing — ⬇ Download PDF has to keep working.');
if (!/async function capturePdf\(/.test(html)) fail('capturePdf is gone, so nothing can file a lab document.');
ok('the one PDF builder still saves the file, and hands the same bytes over when the CMS asks');

/* ---------- 3: the tab in the CMS, the folder on the drive ---------- */
// the Doc Hub's own categories (the CMS's course-bridge.js reads them off the open case; these are its buttons)
const DOC_HUB = ['Intake Documents', 'Medical Records', 'Police Report', 'Case Files', 'Invoices', 'Bills',
  'Property Damage', 'Litigation Documents', 'Others'];
DOCS.forEach((d) => {
  if (!DOC_HUB.includes(d.tab)) fail(`${d.id}: "${d.tab}" is not a Doc Hub tab in the CMS, so filing it could never be right.`);
  if (!d.why || d.why.length < 20) fail(`${d.id}: there is no rule written down for why the firm files it under ${d.tab}.`);
  const home = DRIVE_HOMES[d.id];
  if (!home) fail(`${d.id}: no folder on the backup drive (DRIVE_HOMES in worker.js), so a filed copy has nowhere to go.`);
  else if (!FOLDER_STANDARD.includes(home)) fail(`${d.id}: its backup-drive folder "${home}" isn't in the firm's structure.`);
});
Object.keys(DRIVE_HOMES).forEach((id) => {
  if (!DOCS.some((d) => d.id === id)) fail(`DRIVE_HOMES names "${id}", which isn't a document the labs file.`);
});
ok("every document has a real Doc Hub tab, the rule behind it, and a folder in the firm's structure");

/* ---------- 4: the firm's structure is a tree, in order, with a rule for each folder ---------- */
FOLDER_STANDARD.forEach((p, i) => {
  if (!FOLDER_WHY[p]) fail(`"${p}" has no rule written down (FOLDER_WHY), so a trainee who misses it is told nothing.`);
  const cut = p.lastIndexOf('/');
  if (cut < 0) return;
  const parent = p.slice(0, cut);
  const at = FOLDER_STANDARD.indexOf(parent);
  if (at < 0) fail(`"${p}" has no parent folder in the structure.`);
  else if (at > i) fail(`"${p}" comes before its parent "${parent}": the structure has to be made top down.`);
});
Object.keys(FOLDER_WHY).forEach((p) => { if (!FOLDER_STANDARD.includes(p)) fail(`FOLDER_WHY describes "${p}", which isn't in the structure.`); });
if (!/drive\.file/.test(DRIVE_SCOPES) || /drive\.readonly|auth\/drive['" ]/.test(DRIVE_SCOPES))
  fail('The Backup Drive asks Google for more than drive.file: it may only see the folders and files it makes.');
ok(`the firm's structure: ${FOLDER_STANDARD.length} folders, every one with its rule, every parent before its children, drive.file only`);

/* ---------- 5: the Day 1 setup grading ---------- */
const right = gradeLayout(FOLDER_STANDARD.slice());
if (!right.ok || right.score !== 100) fail(`The firm's own structure doesn't pass its own grading (${right.score}%): ${right.problems.join(' ')}`);

const cases = {
  'a missing folder': FOLDER_STANDARD.filter((p) => p !== '03 Templates'),
  'a different spelling': FOLDER_STANDARD.map((p) => (p === '04 Archive' ? '04 archive' : p)),
  'an invented folder': FOLDER_STANDARD.concat(['05 Misc']),
  'the right folders in the wrong order': (() => {
    const a = FOLDER_STANDARD.slice();
    const i = a.indexOf('03 Templates'), j = a.indexOf('04 Archive');
    [a[i], a[j]] = [a[j], a[i]];
    return a;
  })(),
  'nothing at all': [],
};
Object.entries(cases).forEach(([what, layout]) => {
  const g = gradeLayout(layout);
  if (g.ok) fail(`${what} was accepted: the structure would be built wrong in the trainee's Drive.`);
  else if (!g.problems.length) fail(`${what} was refused with nothing to read.`);
});
// a trainee who types the right thing with stray spaces or a trailing slash is not punished for whitespace
const sloppy = gradeLayout(FOLDER_STANDARD.map((p) => '/' + p.replace(/\//g, '/') + ' '));
if (!sloppy.ok) fail(`A right structure typed with a stray slash or trailing space was refused: ${sloppy.problems.join(' ')}`);
ok('Day 1 setup grading: the firm\'s structure passes, and a missing, misspelled, invented or misordered folder does not');

/* ---------- the page loads both files, and the Drive never grades itself ---------- */
['js/lsh-tool-links.js', 'js/eapa-cms-filing.js', 'js/eapa-drive.js'].forEach((f) => {
  if (!html.includes(`/${f}?v=`)) fail(`index.html doesn't load ${f}.`);
  if (!fs.existsSync(path.join(ROOT, f))) fail(`${f} is missing.`);
});
// The page draws the structure from what the Worker sends (D.standard), so no folder of it is written
// here: a second copy is a copy that drifts. (Its header comment may name the Worker's own constants.)
const driveCode = drive.replace(/\/\*[\s\S]*?\*\//g, '');
FOLDER_STANDARD.forEach((p) => {
  if (driveCode.includes(p)) fail(`js/eapa-drive.js has "${p}" written into it: the firm's structure belongs to the Worker alone.`);
});
if (/function gradeLayout|FOLDER_STANDARD\s*=/.test(driveCode)) fail('js/eapa-drive.js grades the layout itself: the grading belongs to the Worker alone.');
if (!/action:"setup"/.test(drive)) fail('js/eapa-drive.js no longer sends the layout to the Worker to be graded.');
ok('the page loads both features, and the structure and its grading live only on the Worker');

/* ---------- the grades have to reach the trainee's account, and a trainer ----------
   Both records are written with storeSet, which only syncs to the server for a key in PERSONAL_KEYS.
   Left out, they live in one browser: the trainee loses them on another device and no trainer ever sees
   them, which makes grading pointless. This is how that happened once, so it is checked. */
const personal = html.slice(html.indexOf('const PERSONAL_KEYS = ['), html.indexOf('const PERSONAL_KEY_SET'));
['cms-filing', 'drive-setup'].forEach((k) => {
  if (!personal.includes(`"${k}"`)) fail(`"${k}" isn't in PERSONAL_KEYS, so the grade never leaves the trainee's browser.`);
});
if (!/function loadRecord\(/.test(filing) || !/await loadRecord\(\)/.test(filing))
  fail('js/eapa-cms-filing.js no longer re-reads and merges its record before writing: a late restore of the trainee\'s progress would be overwritten.');
if (!/function renderAdminFilingPanel\(/.test(html) || !/\$\{renderAdminFilingPanel\(rec\)\}/.test(html))
  fail('A trainer can no longer see the filing and Backup Drive grades in the trainee\'s row.');
if (!/framed = "";/.test(filing))
  fail('The framed CMS address is kept when the panel closes: its sign-in ticket runs out after five minutes.');
ok('both grades ride the trainee\'s progress to their account and show in the trainee\'s row');

if (failures.length) {
  console.log('\n' + failures.length + ' problem' + (failures.length === 1 ? '' : 's') + ':');
  failures.forEach((f) => console.log(' - ' + f));
  process.exit(1);
}
console.log('\nCMS filing and the Backup Drive: all good.');
