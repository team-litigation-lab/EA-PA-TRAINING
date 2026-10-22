// My Notes is a word processor: typing, a heading, bold and a list are kept (formatted and as plain
// text) and come back after a reload; pasted HTML keeps its formatting but never its scripts.
// This is the notes half of the old deck.cjs, which went with the lesson-runs revert; the editor
// itself stayed, so its test does too.
// Usage: node .github/scripts/notes.cjs [baseUrl]   (with server.mjs running; needs `npm i playwright`)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
(async () => {
    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const failures = [];
    const check = (ok, msg) => { if (!ok) failures.push(msg); else console.log('ok  ' + msg); };
    const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    page.on('pageerror', e => failures.push(`page error: ${e.message}`));
    await page.goto(BASE, { waitUntil: 'load' }); await page.waitForTimeout(800);
    await signIn(page, 'Notes', 'Test ' + Date.now().toString(36).replace(/\d/g, ''), 'B100926');

    // My Notes: a word processor
    await page.evaluate(() => goto('notes')); await page.waitForTimeout(400);
    const ed = page.locator('.wd-page').first();
    check(await page.locator('.wd-ribbon').count() >= 1 && await ed.count() === 1, 'My Notes has a ribbon and a page');
    await ed.click();
    await page.keyboard.type('Week 1 plan');
    await page.selectOption('.wd-sel >> nth=0', 'H1');
    await page.keyboard.press('End'); await page.keyboard.press('Enter');
    await page.keyboard.type('Confirm the Singapore hotel ');
    await page.keyboard.press('Control+B'); await page.keyboard.type('by Friday'); await page.keyboard.press('Control+B');
    await page.keyboard.press('Enter');
    await page.locator('.wd-btn[data-cmd="insertUnorderedList"]').first().click();
    await page.keyboard.type('Draft BLUF update'); await page.keyboard.press('Enter'); await page.keyboard.type('Docket the deadline');
    await page.waitForTimeout(1300);
    const n = await page.evaluate(() => state.notes[0]);
    check(/<h1>Week 1 plan<\/h1>/.test(n.html) && /<b>by Friday<\/b>/.test(n.html) && /<ul><li>Draft BLUF update<\/li><li>Docket the deadline<\/li><\/ul>/.test(n.html), 'the heading, bold and bulleted list are kept');
    check(n.content === 'Week 1 plan\nConfirm the Singapore hotel by Friday\n• Draft BLUF update\n• Docket the deadline', `the note's plain text follows (${JSON.stringify(n.content)})`);
    check(/word/.test(await page.locator('.wd-status').first().innerText()), 'the status bar counts words');
    await page.evaluate(() => { const p = document.querySelector('.wd-page'); const ev = new ClipboardEvent('paste', { clipboardData: new DataTransfer(), bubbles: true, cancelable: true }); ev.clipboardData.setData('text/html', '<p onclick="x()">Safe <script>bad()</script><b style="color:red;position:fixed">text</b></p>'); p.focus(); p.dispatchEvent(ev); });
    await page.waitForTimeout(200);
    const pasted = await page.evaluate(() => state.notes[0].html);
    check(!/script|onclick|position/i.test(pasted) && /Safe/.test(pasted), 'pasted HTML keeps its formatting, never scripts or handlers');
    await page.waitForTimeout(1000);
    await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(1500);
    await page.evaluate(() => goto('notes')); await page.waitForTimeout(400);
    check(/<h1>Week 1 plan<\/h1>/.test(await page.locator('.wd-page').first().innerHTML()), 'the formatted note comes back after a reload');

    await browser.close();
    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log('\nMy Notes check passed.');
})().catch(e => { console.error(e); process.exit(1); });
