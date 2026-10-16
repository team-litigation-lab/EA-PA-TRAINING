// Crisis practice from Day 3 on: every Practice Lab for Day 3 and later has a Crisis Roleplay part.
// Opens each lab, goes to that part, and checks the scenario tabs and the opening line of each scenario
// (the solo rehearsal starts with the caller's first line; picking another scenario restarts it).
// Usage: node .github/scripts/crisis.cjs [baseUrl]   (with server.mjs running; needs `npm i playwright`)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
(async () => {
    const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const failures = [];
    const page = await browser.newPage({ viewport: { width: 1360, height: 900 } });
    page.on('pageerror', e => failures.push(`page error: ${e.message}`));
    await page.goto(BASE, { waitUntil: 'load' }); await page.waitForTimeout(800);
    await signIn(page, 'Crisis', 'Test ' + Date.now().toString(36).replace(/\d/g, ''), 'B100926');
    await page.waitForTimeout(800);
    const tools = await page.evaluate(() => { state.isAdmin = true; return PRACTICE_TOOLS.map(t => ({ id: t.id, day: toolIdToDayId(t.id) })).filter(t => t.day >= 3); });
    if (tools.length < 8) failures.push(`expected the labs for Days 3–10, found ${tools.length}`);
    for (const t of tools) {
        const r = await page.evaluate(async (id) => {
            goto('tool', id); await new Promise(r => setTimeout(r, 400));
            const labels = toolState.wizardLabels || [];
            const i = labels.findIndex(l => /Crisis Roleplay/i.test(l));
            if (i < 0) return { labels };
            wizardGoTo(i); await new Promise(r => setTimeout(r, 100));
            const screen = document.querySelector(`.wizard-screen[data-wizard-idx="${i}"]`);
            const tabs = [...screen.querySelectorAll('.cr-tabs button')];
            const out = { labels, tabs: tabs.map(b => b.textContent), openings: [] };
            for (const b of tabs) {
                b.click(); await new Promise(r => setTimeout(r, 30));
                const first = screen.querySelector('.cr-chat-window .cr-msg');
                out.openings.push(first ? first.textContent.trim() : '');
            }
            out.active = (screen.querySelector('.cr-tabs button.active') || {}).textContent;
            return out;
        }, t.id);
        if (!r.tabs) { failures.push(`Day ${t.day} (${t.id}): no Crisis Roleplay part (parts: ${r.labels.join(', ')})`); continue; }
        if (r.tabs.length !== 3) failures.push(`Day ${t.day} (${t.id}): ${r.tabs.length} scenarios, expected 3`);
        r.openings.forEach((o, k) => { if (o.length < 20 || /^OPENING LINE/.test(o)) failures.push(`Day ${t.day} (${t.id}) "${r.tabs[k]}": opening line missing or malformed: ${o}`); });
        if (new Set(r.openings).size !== r.openings.length) failures.push(`Day ${t.day} (${t.id}): picking a scenario doesn't restart the chat with its own opening line`);
        if (r.active !== r.tabs[r.tabs.length - 1]) failures.push(`Day ${t.day} (${t.id}): the clicked scenario tab isn't marked active`);
        console.log(`ok  Day ${t.day} ${t.id}: ${r.tabs.join(' / ')}`);
    }
    await browser.close();
    if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
    console.log('\nCrisis roleplay check passed (every lab from Day 3 on).');
})().catch(e => { console.error(e); process.exit(1); });
