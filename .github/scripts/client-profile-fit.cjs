// The Client Profile fits on one screen: the dossier rail, the pane and the page
// itself all end inside the window on a laptop and on a large screen, for every
// one of the eleven sections — and the client header card's three lines each
// clear WCAG AA against the card behind them.
// Usage: node .github/scripts/client-profile-fit.cjs [baseUrl]
//        (with .github/scripts/server.mjs running; needs `npm i playwright`)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
const SIZES = [[1366, 768], [1920, 1080], [1474, 761]];
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const lum = ([r, g, b]) => { const f = c => { c /= 255; return c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
const ratio = (a, b) => { const L1 = lum(a), L2 = lum(b); return (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05); };
const parse = (s) => s.match(/\d+(\.\d+)?/g).slice(0, 3).map(Number);
const CARD = [238, 241, 246];   // the light end of the header card's gradient

(async () => {
    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const failures = [], fail = (m) => failures.push(m);
    for (const [W, H] of SIZES) {
        const page = await browser.newPage({ viewport: { width: W, height: H } });
        page.on('pageerror', e => fail(`${W}x${H} page error: ${e.message}`));
        await page.goto(BASE, { waitUntil: 'load' }); await sleep(700);
        await signIn(page, 'Fit', 'Screen', 'B100926');
        await page.evaluate(() => goto('clientprofile')); await sleep(500);

        const count = await page.evaluate(() => document.querySelectorAll('.cp-rail button').length);
        if (!count) fail(`${W}x${H}: the dossier rail rendered no sections`);
        for (let i = 0; i < count; i++) {
            await page.evaluate(k => cpGo(k), i); await sleep(160);
            const r = await page.evaluate(() => {
                const cs = getComputedStyle, d = document.documentElement;
                const shell = document.querySelector('.cp-shell'), pane = document.querySelector('.cp-pane'), rail = document.querySelector('.cp-rail');
                return {
                    label: document.querySelector('.cp-rail button.on').textContent.trim(),
                    doc: d.scrollHeight - d.clientHeight,
                    pane: pane.scrollHeight - pane.clientHeight,
                    rail: rail.scrollHeight - rail.clientHeight,
                    bottom: Math.round(shell.getBoundingClientRect().bottom), vh: innerHeight,
                    name: cs(document.querySelector('.client-header-text h2')).color,
                    role: cs(document.querySelector('.client-header-text p')).color,
                    tag: cs(document.querySelector('.client-tagline')).color
                };
            });
            if (r.doc > 1) fail(`${W}x${H} "${r.label}": the page scrolls ${r.doc}px`);
            if (r.pane > 1) fail(`${W}x${H} "${r.label}": the pane scrolls ${r.pane}px`);
            if (r.rail > 1) fail(`${W}x${H} "${r.label}": the rail scrolls ${r.rail}px`);
            if (r.bottom > r.vh) fail(`${W}x${H} "${r.label}": the dossier ends ${r.bottom - r.vh}px below the fold`);
            if (i === 0) for (const [k, v] of Object.entries({ name: r.name, role: r.role, tagline: r.tag })) {
                const cr = ratio(parse(v), CARD);
                if (cr < 4.5) fail(`${W}x${H}: the client ${k} is ${cr.toFixed(2)}:1 on the card (AA needs 4.5:1)`);
            }
        }
        console.log(`${W}x${H}: ${count} sections, none scrolls`);
        await page.close();
    }
    await browser.close();
    if (failures.length) { console.log('\n' + failures.join('\n')); process.exit(1); }
    console.log('The Client Profile fits on one screen, and its header card clears AA.');
})();
