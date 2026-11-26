// Captures every lesson slide of a day as the room sees it (the Presenter view slides window, 1920 × 1080),
// and the raw material for its narration: the slide's spoken script (js/days/dayN/scripts.js, as Presenter
// view shows it, split page by page) or, for the agenda, dividers, Quick Checks and the like, what is on it.
//   node .github/scripts/server.mjs 8787 &
//   node build/video/capture.cjs <day|all> [outDir]      → <outDir>/dayN/NN.png + <outDir>/dayN/raw.json
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const signIn = require('../../.github/scripts/sign-in.cjs');
const BASE = process.env.BASE || 'http://localhost:8787/';
const which = process.argv[2] || 'all';
const OUT = process.argv[3] || 'build/video/out';
const days = which === 'all' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : which.split(',').map(Number);
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
    const browser = await chromium.launch();
    const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const ctl = await ctx.newPage();
    await ctl.goto(BASE, { waitUntil: 'load' }); await sleep(800);
    await signIn(ctl, 'Video', 'Capture', 'B112626');
    await ctl.evaluate(async () => {
        const key = 'trainee:' + state.traineeId;
        const r = await fetch('/api/storage/get', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key }) }).then(r => r.json());
        const rec = JSON.parse(r.value || '{}'); rec.approved = true;
        await fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key, value: JSON.stringify(rec) }) });
    });
    await ctl.reload({ waitUntil: 'load' }); await sleep(1500);
    await ctl.evaluate(() => {
        window.__rendered = null;
        window.__bc = new BroadcastChannel('lsh-present-v1');
        __bc.onmessage = e => { if ((e.data || {}).type === 'rendered') window.__rendered = e.data; };
    });
    for (const day of days) {
        const aud = await ctx.newPage();
        await aud.goto(`${BASE}?audience=1&day=${day}`, { waitUntil: 'load' }); await sleep(2000);
        await aud.addStyleTag({ content: '.aud-hint{display:none!important}' });
        const dir = path.join(OUT, 'day' + day); fs.mkdirSync(dir, { recursive: true });
        const meta = await ctl.evaluate((day) => {
            const d = DAYS.find(x => x.id === day);
            return { id: d.id, title: d.title, objective: d.objective || '', theme: d.theme || '', discussion: d.discussionQuestion || '',
                sections: daySections(d).map(s => ({ name: s.name, topics: s.items.map(i => d.lessons[i].h) })),
                tools: relatedTools(d.id).map(t => ({ title: t.title, desc: t.desc })) };
        }, day);
        const slides = await aud.evaluate((day) => buildDaySlides(DAYS.find(x => x.id === day)), day);
        const out = []; let n = 0;
        for (let i = 0; i < slides.length; i++) {
            const s = slides[i];
            let pages = 1;
            for (let p = 0; p < pages; p++) {
                await ctl.evaluate(() => { window.__rendered = null; });
                await ctl.evaluate(([day, i, p]) => __bc.postMessage({ type: 'show', dayId: day, slide: i, page: p }), [day, i, p]);
                await ctl.waitForFunction(([i, p]) => window.__rendered && window.__rendered.slide === i && window.__rendered.page === p, [i, p], { timeout: 15000 });
                const r = await ctl.evaluate(() => window.__rendered);
                pages = r.pages || 1;
                await sleep(500);
                n++;
                const file = String(n).padStart(3, '0') + '.png';
                await aud.screenshot({ path: path.join(dir, file) });
                const info = await ctl.evaluate(([day, s, p, r]) => {
                    const d = DAYS.find(x => x.id === day);
                    const o = { type: s.type, title: daySlideTitle(d, s) };
                    if (s.type === 'topic') {
                        const l = d.lessons[s.lessonIndex];
                        o.topic = l.h; o.section = l.section || '';
                        const sc = slideScriptForPage(slideScript(d, l, s.part), l, s.part, { page: p, pages: r.pages || 1, secsByPage: r.secsByPage });
                        o.script = { why: sc.why, talk: sc.talk, walk: sc.walk, ask: sc.ask, scenario: sc.scenario, hand: sc.hand };
                    } else if (s.type === 'divider' && s.section) {
                        const x = daySection(d, s.lessonIndex);
                        o.section = { n: x.n, of: x.of, name: x.name, topics: x.items.map(j => d.lessons[j].h) };
                    } else if (s.type === 'quickCheck') {
                        o.checks = (d.quickChecks || []).filter(c => c.afterIndex === s.lessonIndex).map(c => ({ q: c.q, opts: c.opts, a: c.a, r: c.r || '' }));
                    } else if (s.type === 'taskOverview') {
                        o.overview = d.taskOverview;
                    }
                    o.onScreen = (document.querySelector('#lessonSlideWrap') ? '' : '');
                    return o;
                }, [day, s, p, r]);
                info.onScreen = await aud.evaluate(() => { const w = document.querySelector('#lessonSlideWrap'); return w ? w.innerText.replace(/\s+/g, ' ').trim().slice(0, 1500) : ''; });
                info.image = file; info.slide = i + 1; info.page = p + 1; info.pages = pages;
                out.push(info);
            }
        }
        fs.writeFileSync(path.join(dir, 'raw.json'), JSON.stringify({ day: meta, slides: out }, null, 1));
        console.log(`Day ${day}: ${slides.length} slides, ${out.length} frames`);
        await aud.close();
    }
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
