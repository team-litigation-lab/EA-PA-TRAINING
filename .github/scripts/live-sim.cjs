// ▶ Live Simulation (js/eapa-sim-run.js + js/eapa-sim-scenarios.js): every day's Practice Lab page offers its live
// simulation; a shift runs from the briefing through five timed events (a ringing call is answered first) to the
// debrief; the best calls with full replies score 100%, wrong calls with thin replies score under the 70% pass mark;
// a trainee's run is logged as the day's Practice Lab (work log + best score), so the scorecards show it.
// Usage: node .github/scripts/live-sim.cjs [baseUrl]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE); await signIn(page, 'Sim', 'Check', 'B100926');
    // every day's lab page has the way in
    const days = await page.evaluate(() => Object.keys(window.EAPA_SIM_SCENARIOS || {}).map(Number));
    if (days.length !== 10) fail(`expected 10 days of scenarios, found ${days.length}`);
    for (const d of days) {
      await page.evaluate(d => { state.isAdmin = false; state.progress = Object.fromEntries([...Array(10)].map((_, i) => [i + 1, { done: true, score: 90 }])); goto('tool', relatedTools(d)[0].id); }, d);
      await page.waitForTimeout(400);
      if (!(await page.$('#simLaunch'))) fail(`Day ${d}'s Practice Lab page has no ▶ Live Simulation`);
    }
    // a run: best answers, or poor ones
    async function run(day, good) {
      await page.evaluate(d => EAPASim.open(d), day); await page.click('.sim-go');
      for (let k = 0; k < 5; k++) {
        await page.waitForSelector('#simResp, .sim-ring button', { timeout: 10000 });
        const ring = await page.$('.sim-ring button'); if (ring) { await ring.click(); await page.waitForSelector('#simResp'); }
        await page.evaluate(([d, good]) => {
          const r = document.getElementById('simResp'), i = +r.querySelector('button.btn-primary').getAttribute('onclick').match(/\d+/)[0];
          const e = EAPA_SIM_SCENARIOS[d].events[i];
          const want = good ? e.options.findIndex(o => o[1] === 1) : e.options.findIndex(o => o[1] === 0);
          r.querySelector(`input[value="${want}"]`).checked = true;
          r.querySelector('textarea').value = good ? e.reply.points.map(p => p[1][0]).join('; ') + '. Will confirm shortly.' : 'Okay, I will look into this later on.';
        }, [day, good]);
        await page.click('#simResp .btn-primary');
        const nx = await page.$('.sim-next'); if (nx) await nx.click();
      }
      await page.waitForSelector('.sim-db-score', { timeout: 10000 });
      return page.evaluate(() => parseInt(document.querySelector('.sim-db-score b').textContent, 10));
    }
    const hi = await run(3, true);
    if (hi !== 100) fail(`the best calls with full replies scored ${hi}%, not 100%`);
    const log = await page.evaluate(() => (state.workLog || []).filter(e => /Live Simulation/.test(e.label)).pop());
    if (!log || log.dayId !== 3 || log.score !== 100) fail(`the run wasn't logged as Day 3's Practice Lab: ${JSON.stringify(log)}`);
    const best = await page.evaluate(() => (state.practiceProgress[relatedTools(3)[0].id] || {}).bestScore);
    if (best !== 100) fail(`the lab's best score wasn't updated (${best})`);
    await page.evaluate(() => EAPASim.close(true));
    const lo = await run(8, false);
    if (!(lo < 70)) fail(`wrong calls with thin replies scored ${lo}%, not under the 70% pass mark`);
    const gaps = await page.evaluate(() => ((state.workLog || []).filter(e => /Live Simulation/.test(e.label)).pop() || {}).gaps || []);
    if (!gaps.length) fail('a weak run left no gaps for the scorecard');
    await page.evaluate(() => EAPASim.close(true));
    if (await page.$('#simRun')) fail('the simulation didn\'t close');
  } catch (e) { fail(`threw: ${e && e.stack || e}`); }
  await browser.close();
  if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
  console.log('Live Simulation test passed (all ten days offer it; a strong shift scores 100% and a weak one under 70%; the run is logged as the day\'s Practice Lab with its notes and best score).');
})();
