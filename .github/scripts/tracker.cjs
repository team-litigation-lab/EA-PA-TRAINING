// Day 1 Preference Trackers: the Excel-style workbook (Practice Lab "dossier1", Part B).
// Types into cells with the keyboard (Enter, Tab, arrows, name box and formula bar), switches sheet tabs,
// adds a row, scores the sheets with the same keyword check as before, lists every row in the PDF lines,
// downloads the .xlsx and opens it, and checks the workbook comes back after a reload.
// Usage: node .github/scripts/tracker.cjs [baseUrl]   (with server.mjs running; needs `npm i playwright`, and python3 to read the .xlsx)
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
(async () => {
    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const failures = [];
    const check = (ok, msg) => { if (!ok) failures.push(msg); else console.log('ok  ' + msg); };
    const page = await browser.newPage({ viewport: { width: 1360, height: 900 }, acceptDownloads: true });
    page.on('pageerror', e => failures.push(`page error: ${e.message}`));
    await page.goto(BASE, { waitUntil: 'load' }); await page.waitForTimeout(800);
    await signIn(page, 'Tracker', 'Test ' + Date.now().toString(36).replace(/\d/g, ''), 'B100926');   // a fresh trainee: no drafts from an earlier run
    await page.evaluate(async () => {
        const key = 'trainee:' + state.traineeId;
        const r = await fetch('/api/storage/get', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key }) }).then(r => r.json());
        const rec = JSON.parse(r.value || '{}'); rec.approved = true;
        await fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key, value: JSON.stringify(rec) }) });
    });
    await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(1500);
    await page.evaluate(() => { state.isAdmin = true; goto('tool', 'dossier1'); });
    await page.waitForTimeout(400);
    await page.evaluate(() => wizardGoTo(1));
    await page.waitForTimeout(200);

    const book = '#d1xlHost .xl-book';
    check(await page.locator(book).isVisible(), 'Part B shows the workbook');
    check(await page.locator('#toolBody textarea[id^="d1trk"]:not([hidden])').count() === 0, 'the three free-text boxes are gone');
    const tabs = await page.locator('#d1xlHost .xl-tab').allInnerTexts();
    check(JSON.stringify(tabs) === JSON.stringify(['Travel Preferences', 'Inbox Preferences', 'Meeting Rhythms']), `sheet tabs: ${tabs.join(' / ')}`);
    const cols = await page.locator('#d1xlHost thead th:not(.xl-corner)').allInnerTexts();
    check(cols.join('') === 'ABCD', `column letters ${cols.join('')}`);
    const heads = await page.locator('#d1xlHost tr.xl-hdr td').allInnerTexts();
    check(heads.join('|') === 'Preference|Details|Action / rule|Last updated', `headers: ${heads.join(' | ')}`);
    check((await page.locator('#d1xlHost [data-xl="name"]').innerText()) === 'A2', 'the name box starts on A2');

    // type into A2, Tab to B2, type, Enter goes to the next row's first-typed column (B3 here, like Excel's Enter goes down)
    await page.locator('#d1xlHost td[data-r="1"][data-c="0"]').click();
    await page.keyboard.type('Seat');
    check((await page.locator('#d1xlHost [data-xl="formula"]').inputValue()) === 'Seat', 'the formula bar follows the cell being typed');
    await page.keyboard.press('Tab');
    check((await page.locator('#d1xlHost [data-xl="name"]').innerText()) === 'B2', 'Tab moves right (B2)');
    await page.keyboard.type('Aisle seat near the front of the plane');
    await page.keyboard.press('Enter');
    check((await page.locator('#d1xlHost [data-xl="name"]').innerText()) === 'B3', 'Enter moves down (B3)');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.type('Routing');
    await page.keyboard.press('ArrowRight');   // typing-mode arrows leave the cell
    await page.keyboard.type('Direct flights only, no connecting legs');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Watch for delay alerts; rebook proactively');
    await page.keyboard.press('Enter');
    const cell = (r, c) => page.locator(`#d1xlHost td[data-r="${r}"][data-c="${c}"]`).innerText();
    check((await cell(1, 0)) === 'Seat' && (await cell(1, 1)).startsWith('Aisle'), 'row 2 holds what was typed');
    check((await cell(2, 0)) === 'Routing' && (await cell(2, 2)).includes('rebook'), 'row 3 holds what was typed (arrows moved between cells)');
    check(/^\d{4}-\d\d-\d\d$/.test(await cell(1, 3)), `Last updated stamps itself (${await cell(1, 3)})`);
    // double-click edits the existing text
    await page.locator('#d1xlHost td[data-r="1"][data-c="0"]').dblclick();
    await page.keyboard.press('End'); await page.keyboard.type(' preference'); await page.keyboard.press('Enter');
    check((await cell(1, 0)) === 'Seat preference', 'double-click edits the text already in a cell');
    // the formula bar edits the selected cell
    await page.locator('#d1xlHost td[data-r="3"][data-c="0"]').click();
    await page.locator('#d1xlHost [data-xl="formula"]').fill('Notes');
    await page.keyboard.press('Enter');
    check((await cell(3, 0)) === 'Notes', 'typing in the formula bar fills the selected cell');
    await page.locator('#d1xlHost td[data-r="3"][data-c="0"]').click();
    await page.keyboard.press('Delete');
    check((await cell(3, 0)) === '', 'Delete clears the cell');

    const rowsBefore = await page.locator('#d1xlHost tbody tr').count();
    await page.getByRole('button', { name: '＋ Add row' }).click();
    check((await page.locator('#d1xlHost tbody tr').count()) === rowsBefore + 1, 'Add row adds a row');

    // other sheets: fill through the page's own cell writer, then switch tabs and back
    await page.locator('#d1xlHost .xl-tab', { hasText: 'Inbox Preferences' }).click();
    check((await page.locator('#d1xlHost .xl-tab.active').innerText()) === 'Inbox Preferences', 'clicking a sheet tab switches sheets');
    check((await cell(1, 0)) === '', 'the Inbox sheet starts empty');
    await page.evaluate(() => {
        const put = (rows) => rows.forEach((r, i) => r.forEach((v, c) => d1xlSetCell(i + 1, c, v)));
        put([['Email format', 'BLUF: summary and action points at the top', 'Attach the full brief, never in the body'],
             ['Voice notes', '5:30 AM voice note', 'Turn it into a structured agenda by 8:00 AM']]);
        d1xlSheet(2);
        put([['Court days', 'No back-to-back depositions or hearings', 'Block a 15-minute debrief buffer after each'],
             ['Emergencies', 'Emergency filing can blow up the day', 'Know which partner meetings to reschedule']]);
        d1xlSheet(0);
    });
    check((await cell(1, 0)) === 'Seat preference', 'switching back keeps the first sheet');

    await page.evaluate(() => checkD1Tracker());
    await page.waitForTimeout(300);
    const result = await page.locator('#d1TrackerResult').innerText();
    check(/9\/9 key details covered \(100%\)/.test(result), `scoring reads every sheet: ${result.split('\n')[0]}`);

    const lines = await page.evaluate(async () => {
        let got = null; const real = window.buildAndSavePdf;
        window.buildAndSavePdf = (t, s, l) => { got = l; };
        try { await downloadDossier1Pdf(); } finally { window.buildAndSavePdf = real; }
        return got;
    });
    const b = lines.indexOf('## B. Preference Trackers');
    check(b > 0 && lines[b + 1] === '## Travel Preferences' && /^1\. Preference: Seat preference {2}\| {2}Details: Aisle/.test(lines[b + 2]), 'the PDF lists each sheet\'s rows');
    check(lines.includes('## Meeting Rhythms') && lines.some(l => l.includes('Rhythm / rule: Court days')), 'the PDF has the Meeting Rhythms rows');

    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: '⬇ Download as Excel' }).click()]);
    const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'xlsx-')), dl.suggestedFilename());
    await dl.saveAs(file);
    check(dl.suggestedFilename().endsWith('.xlsx'), `downloads ${dl.suggestedFilename()}`);
    try {
        const out = execFileSync('python3', ['-I', '-c', `
import sys, zipfile, re
z = zipfile.ZipFile(sys.argv[1]); assert z.testzip() is None
wb = z.read('xl/workbook.xml').decode()
print('|'.join(re.findall(r'<sheet name="([^"]+)"', wb)))
for i in (1, 2, 3):
    print(len(re.findall(r'<row ', z.read('xl/worksheets/sheet%d.xml' % i).decode())))
print('Seat preference' in z.read('xl/worksheets/sheet1.xml').decode())`, file]).toString().trim().split('\n');
        check(out[0] === 'Travel Preferences|Inbox Preferences|Meeting Rhythms', `the .xlsx has the three sheets (${out[0]})`);
        check(out[1] === '3' && out[2] === '3' && out[3] === '3', `each sheet has its header and filled rows (${out.slice(1, 4).join(', ')})`);
        check(out[4] === 'True', 'the .xlsx holds what was typed');
    } catch (e) { failures.push(`the .xlsx did not open: ${String(e.stderr || e.message).split('\n').slice(-3).join(' ')}`); }

    // the workbook is a lab draft like any other field: it comes back after a reload
    await page.evaluate(() => saveLabNow());
    await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(1500);
    await page.evaluate(() => { state.isAdmin = true; goto('tool', 'dossier1'); });
    await page.waitForTimeout(600);
    await page.evaluate(() => wizardGoTo(1));
    check((await cell(1, 0)) === 'Seat preference', 'the workbook is restored after a reload');

    // phone width: the grid scrolls inside its box, the page doesn't scroll sideways
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(200);
    check(!(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)), 'no sideways page scroll at phone width');

    await browser.close();
    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log('\nTracker workbook check passed.');
})().catch(e => { console.error(e); process.exit(1); });
