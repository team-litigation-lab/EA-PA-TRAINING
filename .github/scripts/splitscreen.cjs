// ⧉ Side by side (js/eapa-toolframe.js) on every day.
// Every day's lesson stage offers "⧉ Beside the slide"; opening the day's Lesson Notes or handout
// puts them in the frame on the right with the slide still live on the left, the slide is scaled
// down to the room it has left, the edge drags, Close puts the slide back, and on a narrow screen
// the whole thing stays out of the way.
// Usage: node .github/scripts/splitscreen.cjs [baseUrl]   (with server.mjs running; needs `npm i playwright`)
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
    await signIn(page, 'Split', 'Test ' + Date.now().toString(36).replace(/\d/g, ''), 'B100926');
    await page.evaluate(() => { state.isAdmin = true; });

    const openDay = async (id) => {
        await page.evaluate(d => { goto('day', d); state.dayViewMode = 'slides'; render(); }, id);
        await page.waitForTimeout(350);
    };
    const closePane = async () => {
        await page.evaluate(() => { if (typeof closeToolFrame === 'function') closeToolFrame(); });
        await page.waitForTimeout(200);
    };

    // 1. every day offers it, and the notes open beside the slide
    for (const d of await page.evaluate(() => DAYS.map(x => x.id))) {
        await openDay(d);
        const hasBtn = await page.locator('.ls-top .eapa-beside > button').count() === 1;
        if (!hasBtn) { check(false, `Day ${d}: no "⧉ Beside the slide" button on the lesson stage`); continue; }
        await page.locator('.ls-top .eapa-beside > button').click(); await page.waitForTimeout(120);
        await page.locator('.eapa-beside-menu button', { hasText: 'Lesson Notes' }).click(); await page.waitForTimeout(350);
        const r = await page.evaluate(() => {
            const f = document.getElementById('eapa-toolframe'), s = document.getElementById('lessonSlideWrap');
            const fr = f && f.getBoundingClientRect(), sr = s && s.getBoundingClientRect();
            return {
                split: document.body.classList.contains('eapa-tf-split') && document.body.classList.contains('eapa-tf-open'),
                paneText: (f ? f.querySelector('.eapa-tf-page') : null) ? f.querySelector('.eapa-tf-page').innerText.trim().length : 0,
                slideVisible: !!sr && sr.width > 100 && sr.height > 100,
                apart: !!fr && !!sr && sr.right <= fr.left + 4,
                underTopbar: !!fr && fr.top >= Math.round(document.querySelector('.topbar').getBoundingClientRect().bottom) - 1,
                sideways: document.documentElement.scrollWidth > innerWidth + 1
            };
        });
        check(r.split && r.paneText > 400, `Day ${d}: Lesson Notes open in the frame beside the slide`);
        check(r.slideVisible && r.apart, `Day ${d}: the slide stays live on the left, clear of the frame`);
        check(r.underTopbar && !r.sideways, `Day ${d}: the frame starts under the top bar and nothing scrolls sideways`);
        await closePane();
        const back = await page.evaluate(() => ({
            open: document.body.classList.contains('eapa-tf-open'),
            full: document.getElementById('lessonSlideWrap').getBoundingClientRect().width
        }));
        check(!back.open && back.full > 600, `Day ${d}: ✕ Close gives the slide the whole page back`);
    }

    // 2. the day's handout opens the same way
    await openDay(1);
    await page.locator('.ls-top .eapa-beside > button').click(); await page.waitForTimeout(120);
    await page.locator('.eapa-beside-menu button', { hasText: 'handout' }).click(); await page.waitForTimeout(350);
    check(await page.evaluate(() => document.body.classList.contains('eapa-tf-split')
        && /./.test((document.querySelector('#eapa-toolframe .eapa-tf-page') || {}).innerText || '')), 'the day\'s handout opens beside the slide too');

    // 3. the slide is scaled down to the room it has left, and grows back on close
    const narrow = await page.evaluate(() => window.__deckScale);
    await closePane(); await page.waitForTimeout(300);
    const wide = await page.evaluate(() => window.__deckScale);
    check(typeof narrow === 'number' && typeof wide === 'number' && narrow < wide, `the slide is rescaled to fit beside the frame (${narrow} → ${wide})`);

    // 4. the edge drags: the frame takes the width the trainee gives it, and it is remembered
    await page.locator('.ls-top .eapa-beside > button').click(); await page.waitForTimeout(120);
    await page.locator('.eapa-beside-menu button', { hasText: 'Lesson Notes' }).click(); await page.waitForTimeout(300);
    const before = await page.evaluate(() => document.getElementById('eapa-toolframe').getBoundingClientRect().width);
    const h = await page.locator('.eapa-tf-drag').boundingBox();
    await page.mouse.move(h.x + h.width / 2, h.y + h.height / 2);
    await page.mouse.down(); await page.mouse.move(h.x - 180, h.y + h.height / 2, { steps: 8 }); await page.mouse.up();
    await page.waitForTimeout(250);
    const after = await page.evaluate(() => document.getElementById('eapa-toolframe').getBoundingClientRect().width);
    check(after > before + 80, `dragging the edge resizes the frame (${Math.round(before)}px → ${Math.round(after)}px)`);
    check(!!(await page.evaluate(() => localStorage.getItem('eapa-tf-w'))), 'the width is remembered for next time');
    await closePane();

    // 5. a narrow screen has no room for two columns: no button, and the frame never splits
    await page.setViewportSize({ width: 800, height: 900 }); await page.waitForTimeout(400);
    await openDay(2);
    check(await page.locator('.ls-top .eapa-beside').count() === 0, 'under 900px wide the lesson stage offers no side-by-side button');
    check(!(await page.evaluate(() => { if (typeof openPaneHTML === 'function') openPaneHTML('t', '<p>x</p>', 'Test', '📄', 'split'); const s = document.body.classList.contains('eapa-tf-split'); closeToolFrame(); return s; })),
        'a pane asked for side by side on a narrow screen opens full width instead');
    await page.setViewportSize({ width: 1366, height: 768 });

    await browser.close();
    if (failures.length) { console.error('\n' + failures.length + ' problem(s):'); failures.forEach(f => console.error(' - ' + f)); process.exit(1); }
    console.log('\n⧉ Side by side: all good.');
})();
