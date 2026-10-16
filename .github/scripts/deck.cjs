// Lesson runs and the note editor.
// Deck: every day opens on its agenda; every topic is a run of five slides (Why It Matters · The Rules · See It ·
// On the Job · Do & Don't) drawn from js/days/dayN/slides.js, each with content and a highlighted key phrase where
// the spec puts one; the rail's steps jump within the run; "Full text" opens the topic as written; a run slide is
// one page (never split), at desktop and phone width.
// Notes: My Notes is a word processor: typing, a heading, bold and a list are kept (formatted and as plain text)
// and come back after a reload.
// Usage: node .github/scripts/deck.cjs [baseUrl]   (with server.mjs running; needs `npm i playwright`)
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
    await signIn(page, 'Deck', 'Test ' + Date.now().toString(36).replace(/\d/g, ''), 'B100926');

    const days = await page.evaluate(async () => {
        state.isAdmin = true;
        const sleep = ms => new Promise(r => setTimeout(r, ms)), out = [];
        for (const d of DAYS) {
            goto('day', d.id); state.dayViewMode = 'slides'; await sleep(150);
            const slides = buildDaySlides(d), bad = [];
            if (!slides[0] || slides[0].type !== 'agenda') bad.push('does not open on its agenda');
            d.lessons.forEach((l, i) => {
                const run = slides.filter(s => s.type === 'lesson' && s.lessonIndex === i).map(s => s.view);
                if (run.join() !== '0,1,2,3,4') bad.push(`"${l.h}" runs ${run.join() || 'no'} lesson slides`);
            });
            let multi = 0, empty = 0, noMark = 0;
            for (let i = 0; i < slides.length; i++) {
                if (!/agenda|lesson/.test(slides[i].type)) continue;
                goToSlide(i); await sleep(15);
                if ((state.slidePages || 1) > 1) multi++;
                const body = document.querySelector('#lessonSlideWrap .xd-body, #lessonSlideWrap .xa-list');
                if (!body || body.innerText.trim().length < 20) empty++;
                if (slides[i].type === 'lesson' && [0, 1, 4].includes(slides[i].view) && !document.querySelector('#lessonSlideWrap mark.xh')) noMark++;
            }
            if (multi) bad.push(`${multi} run slide(s) split into pages`);
            if (empty) bad.push(`${empty} run slide(s) are empty`);
            if (noMark) bad.push(`${noMark} run slide(s) have no highlighted phrase`);
            out.push({ id: d.id, topics: d.lessons.length, slides: slides.length, bad });
        }
        return out;
    });
    days.forEach(d => check(!d.bad.length, `Day ${d.id}: agenda + ${d.topics} topics × 5 run slides (${d.slides} steps)${d.bad.length ? ': ' + d.bad.slice(0, 5).join('; ') : ''}`));

    // the rail jumps within the run; Full text opens and closes
    await page.evaluate(() => { goto('day', 1); state.dayViewMode = 'slides'; render(); }); await page.waitForTimeout(300);
    const first = await page.evaluate(() => buildDaySlides(DAYS[0]).findIndex(s => s.type === 'lesson'));
    await page.evaluate(i => goToSlide(i), first); await page.waitForTimeout(250);
    await page.locator('.xd-steps button', { hasText: 'On the Job' }).click(); await page.waitForTimeout(250);
    check((await page.evaluate(() => state.lessonSlide)) === first + 3 && (await page.locator('.xd-run').getAttribute('data-view')) === 'job', 'the rail\'s "On the Job" step jumps to that slide');
    await page.locator('.xd-full').click(); await page.waitForTimeout(250);
    check(await page.locator('.xd-overlay .lesson-card').count() >= 1, '"Full text" shows the topic as written');
    await page.keyboard.press('Escape'); await page.waitForTimeout(150);
    check(await page.locator('.xd-overlay').count() === 0, 'Esc closes the full text');

    // phone width: a run slide is a page that scrolls, never sideways
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(300);
    for (const v of [0, 2, 3, 4]) { await page.evaluate(i => goToSlide(i), first + v); await page.waitForTimeout(150); }
    check(!(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)), 'no sideways scroll on run slides at phone width');
    await page.setViewportSize({ width: 1366, height: 768 });

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
    console.log('\nDeck and notes check passed.');
})().catch(e => { console.error(e); process.exit(1); });
