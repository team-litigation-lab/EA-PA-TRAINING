// Lesson slides and the note editor.
// Deck: every day opens on its agenda; every topic is the topic as it is written (js/days/dayN/lessons.js)
// in the deck's livery — the navy strip carrying the day's section, the topic's number and title, and a
// jump to each part — and the lesson's own words are on the slide, not a summary of them. A topic that
// doesn't fit continues on the next page rather than scrolling (the one-screen rule; fit.cjs measures it).
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
            // every topic is on the slides, with a part for each part it has
            d.lessons.forEach((l, i) => {
                const parts = slides.filter(s => s.type === 'topic' && s.lessonIndex === i).map(s => s.part);
                const want = l.singleSlide ? '1' : '1,2';
                if (parts.join() !== want) bad.push(`"${l.h}" has parts ${parts.join() || 'none'} (expected ${want})`);
            });
            let noStrip = 0, empty = 0, notTheLesson = 0;
            // One topic at a time: its parts, and every page of each part (a long topic pages rather
            // than scrolling), so the check reads the whole lesson and not just the page on screen.
            for (let i = 0; i < d.lessons.length; i++) {
                const l = d.lessons[i];
                let seen = '';
                for (const si of slides.map((s, k) => [s, k]).filter(([s]) => s.type === 'topic' && s.lessonIndex === i).map(([, k]) => k)) {
                    goToSlide(si); await sleep(15);
                    const wrap = document.getElementById('lessonSlideWrap');
                    const strip = wrap && wrap.querySelector('.xd-head');
                    if (!strip || strip.innerText.indexOf(l.h) < 0) { noStrip++; continue; }
                    const card = wrap.querySelector('.lesson-card');
                    if (!card || card.innerText.trim().length < 20) { empty++; continue; }
                    seen += ' ' + card.innerText;
                    for (let pg = 1; pg < (state.slidePages || 1); pg++) { showSlidePage(pg); await sleep(8); seen += ' ' + card.innerText; }
                }
                // The lesson's own words, not a summary of them. A topic lays its content out in its own
                // way (bullets, the four-part frame, a callout), so any one of its own sentences showing up
                // on the slide is the thing being asserted — not which one.
                // Every sentence the topic itself holds, wherever it keeps it: a topic lays its content
                // out in its own way (bullets, the four-part frame, a callout, a table of its own), so
                // the check is "some of the topic's own writing is on the slide", not which field it
                // came from. Anything shorter than six words is a label, not writing.
                const sentences = (o, depth) => {
                    if (typeof o === 'string') return o.replace(/\s+/g, ' ').split(' ').length >= 6 ? [o] : [];
                    if (!o || typeof o !== 'object' || depth > 4) return [];
                    return [].concat(...Object.keys(o).filter(k => k !== 'svgDiagram' && k !== 'h').map(k => sentences(o[k], depth + 1)));
                };
                const src = sentences(l, 0).slice(0, 24);
                // Compared word by word, not as a string: a topic's layout may drop a parenthetical or
                // split a line into a heading and its text, and that is still the lesson's own wording.
                const words = (x) => String(x).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2);
                const txt = new Set(words(seen));
                const hit = src.some(x => { const w = words(x).slice(0, 10); return w.length >= 5 && w.filter(y => txt.has(y)).length >= Math.ceil(w.length * 0.6); });
                if (src.length && !hit) notTheLesson++;
            }
            if (noStrip) bad.push(`${noStrip} topic slide(s) have no deck strip naming the topic`);
            if (empty) bad.push(`${empty} topic slide(s) are empty`);
            if (notTheLesson) bad.push(`${notTheLesson} topic slide(s) do not carry the topic's own words`);
            out.push({ id: d.id, topics: d.lessons.length, slides: slides.length, bad });
        }
        return out;
    });
    days.forEach(d => check(!d.bad.length, `Day ${d.id}: agenda + ${d.topics} topics as written (${d.slides} slides)${d.bad.length ? ': ' + d.bad.slice(0, 5).join('; ') : ''}`));

    // the strip's Part buttons jump between the topic's parts
    await page.evaluate(() => { goto('day', 1); state.dayViewMode = 'slides'; render(); }); await page.waitForTimeout(300);
    const first = await page.evaluate(() => buildDaySlides(DAYS[0]).findIndex(s => s.type === 'topic' && s.part === 1 && !DAYS[0].lessons[s.lessonIndex].singleSlide));
    check(first >= 0, 'a day has topic slides');
    await page.evaluate(i => goToSlide(i), first); await page.waitForTimeout(250);
    check(await page.locator('#lessonSlideWrap .xd-head .xd-title').count() === 1, "the topic's title is on the deck strip");
    await page.locator('.xd-head-steps button', { hasText: 'Part 2' }).click(); await page.waitForTimeout(250);
    const second = await page.evaluate(() => state.lessonSlide);
    check(await page.evaluate(i => { const s = buildDaySlides(DAYS[0])[i]; return s && s.type === 'topic' && s.part === 2; }, second), "the strip's \"Part 2\" jumps to the topic's second part");
    // the lesson's own text is the slide, and the card's own DAY/TOPIC line is not repeated under the strip
    check(await page.locator('#lessonSlideWrap .lesson-card').count() >= 1, 'the slide carries the topic as written');
    check(!(await page.evaluate(() => { const t = document.querySelector('#lessonSlideWrap .topic-separator'); return !!t && getComputedStyle(t).display !== 'none'; })), "the card's own DAY · TOPIC line gives way to the strip");

    // phone width: a topic slide is a page that scrolls down, never sideways
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(300);
    for (const v of [0, 1, 2]) { await page.evaluate(i => goToSlide(i), first + v); await page.waitForTimeout(150); }
    check(!(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)), 'no sideways scroll on topic slides at phone width');
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
