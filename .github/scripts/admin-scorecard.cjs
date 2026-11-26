// 🏅 The Admin screen's 🏅 Scorecard (js/eapa-admin-shell.js): two section pills (🏅 Scorecard, 🛡 Admin Master Control); the
// Scorecard is one page for a batch — a navy banner holding every admin button (batch, Refresh, Records CSV, Full backup, Cohort
// Report, Archive, 🙋 who asked for more attempts), then the trainees table with every row button in view (no "More ▾": ↺ Reset
// Attempts, 🎓 Certificate, Revoke beside View Detail and ✍ Feedback), 🏆 Rankings, 💬 Trainee Feedback and 📈 Activities; the
// old Rankings and Trainee Feedback tabs open it; 🛡 Admin Master Control keeps Settings & Reports, Batch Folders, SOP, Studio.
// Usage: node .github/scripts/admin-scorecard.cjs [baseUrl]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 950 } })).newPage();
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE); await page.waitForFunction(() => typeof EAPAShell === 'object', null, { timeout: 20000 });
    await page.evaluate(async () => {
      const put = (k, v) => fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: k, value: JSON.stringify(v) }) });
      const now = new Date().toISOString();
      await put('trainee:ana-cruz--b123126', { id: 'ana-cruz--b123126', name: 'Ana Cruz', batch: 'B123126', approved: true, registeredAt: now, labAttemptsGlobal: 3, labResetRequestedAt: now });
      await put('trainee:ben-diaz--b123126', { id: 'ben-diaz--b123126', name: 'Ben Diaz', batch: 'B123126', approved: true, registeredAt: now });
      await put('trainee:old-one--b010126', { id: 'old-one--b010126', name: 'Old One', batch: 'B010126', approved: true, registeredAt: now });
      state.isAdmin = true; state.adminData = null; goto('admin');
    });
    await page.waitForSelector('.eash-banner', { timeout: 20000 });
    await page.waitForFunction(() => document.querySelectorAll('.audit-table tbody tr').length >= 2, null, { timeout: 20000 });
    const pills = await page.$$eval('.eash-pill', b => b.map(x => x.innerText.trim()));
    if (pills.join('|') !== '🏅 Scorecard|🏆 Rankings & Progress Report|🛡 Admin Master Control') fail(`the section pills: ${pills}`);
    const banner = await page.$eval('.eash-banner', b => b.innerText);
    if (!/Batch B123126/.test(banner)) fail(`the Scorecard doesn't open on the newest batch: ${banner.slice(0, 120)}`);
    for (const b of ['Refresh', 'Records (CSV)', 'Full backup (JSON)', 'Cohort Report', 'Archive This Batch', '1 asked for more attempts'])
      if (!banner.includes(b)) fail(`the Scorecard header has no "${b}" button`);
    // (the rows' live refresh, which redraws them without a batch, keeps to the Scorecard's batch)
    await page.evaluate(() => { const w = document.getElementById('adminRowsWrap'); if (w) w.innerHTML = renderAdminRows(); });
    const rows = await page.$$eval('.audit-table tbody tr', r => r.map(x => x.innerText));
    if (rows.some(r => /Old One/.test(r))) fail('another batch\'s trainee shows on the Scorecard after the rows refresh');
    const ana = rows.find(r => /Ana Cruz/.test(r)) || '';
    if (!ana) fail('no row for Ana: ' + JSON.stringify(rows.map(r => r.slice(0, 40))) + ' banner: ' + banner.slice(0, 200));
    for (const b of ['View Detail', 'Feedback', 'Certificate', 'Reset Attempts', 'Revoke']) if (!ana.includes(b)) fail(`Ana's row has no "${b}" button in view`);
    if (await page.$('.audit-table details.at-more')) fail('the rows still hide buttons under "More ▾"');
    const vis = await page.$$eval('.audit-table .at-btns button', b => b.filter(x => /Reset Attempts/.test(x.innerText)).every(x => x.offsetParent !== null));
    if (!vis) fail('↺ Reset Attempts isn\'t visible on every row');
    const parts = await page.$$eval('.eash-part .eash-h', h => h.map(x => x.innerText));
    if (parts.join('|') !== '👥 Trainees|💬 Trainee Feedback|📈 Activities') fail(`the Scorecard's parts: ${parts}`);
    const th = await page.$eval('.audit-table thead th', t => { const s = getComputedStyle(t); return s.backgroundColor + ' ' + s.borderBottomColor; });
    if (!/rgb\(38, 43, 69\).*rgb\(219, 132, 55\)/.test(th)) fail(`the table header isn't the standard navy with the orange rule: ${th}`);
    // 🏆 Rankings & Progress Report: its own button and page — the Rankings, then the report in the CM format, a general summary
    await page.evaluate(() => setAdminTab('rankings'));
    await page.waitForSelector('#eash-progress .eash-rep', { timeout: 20000 });
    const rep = await page.evaluate(() => ({ on: [...document.querySelectorAll('.eash-pill.on')].map(b => b.innerText.trim()), parts: [...document.querySelectorAll('.eash-part .eash-h')].map(h => h.innerText),
      head: [...document.querySelectorAll('.eash-rep thead th')].map(t => t.innerText.trim()), rows: [...document.querySelectorAll('.eash-rep tbody tr')].map(r => [...r.children].map(c => c.innerText.trim())) }));
    if (rep.on.join() !== '🏆 Rankings & Progress Report') fail(`the old Rankings tab doesn't open 🏆 Rankings & Progress Report: ${rep.on}`);
    if (rep.parts.join('|') !== '🏆 Rankings|📊 Progress Report') fail(`the Rankings & Progress Report's parts: ${rep.parts}`);
    if (rep.head.join('|') !== "Rank|Trainee's Name|Batch Score|Strength|Challenges|General Attribute Rating|Progress") fail(`the Progress Report's columns: ${rep.head.join(' | ')}`);
    if (!rep.rows.length || !rep.rows.some(r => /Ana Cruz/.test(r[1]))) fail(`the Progress Report doesn't list the batch: ${JSON.stringify(rep.rows)}`);
    for (const r of rep.rows) { if (/\bDay \d|\d+%|"/.test(r[3] + ' ' + r[4])) fail(`${r[1]}'s Strength and Challenges should be a general summary, with no day, score or quote: ${r[3]} ${r[4]}`);
      if (!/Knowledge & Understanding/.test(r[5]) || !/(★|N\/A)/.test(r[5])) fail(`${r[1]}'s General Attribute Rating: ${r[5]}`); }
    if (await page.$('.eash-banner') && !/Rankings & Progress Report · Batch B123126/.test(await page.$eval('.eash-banner', b => b.innerText))) fail('the Rankings & Progress Report isn\'t on the Scorecard\'s batch');
    // the old tabs open the Scorecard; 🛡 Admin Master Control has the rest
    await page.evaluate(() => setAdminTab('tfeedback'));
    if (!(await page.$('.eash-banner'))) fail('the old Trainee Feedback tab doesn\'t open the Scorecard');
    await page.evaluate(() => EAPAShell.go('audit'));
    await page.waitForSelector('.eash-tabs');
    const tabs = await page.$$eval('.eash-tabs .admin-tab-btn', b => b.map(x => x.innerText.trim()));
    if (tabs.join('|') !== '⚙ Settings & Reports|📁 Batch Folders|📋 SOP Reference|✏️ Content Studio') fail(`🛡 Admin Master Control's tabs: ${tabs}`);
    await page.evaluate(() => EAPAShell.go('batches'));
    if (await page.$('.eash-banner')) fail('📁 Batch Folders opened the Scorecard');
    if (!(await page.$('.batch-folder'))) fail('📁 Batch Folders doesn\'t show the batch folders');
    // another batch from the header
    await page.evaluate(() => { EAPAShell.go('scorecard'); }); await page.waitForSelector('.eash-banner');
    await page.selectOption('.eash-banner select', 'B010126');
    await page.waitForFunction(() => /Batch B010126/.test(document.querySelector('.eash-banner').innerText));
    if (!(await page.$$eval('.audit-table tbody tr', r => r.some(x => /Old One/.test(x.innerText))))) fail('picking another batch doesn\'t show its trainees');
  } catch (e) { fail(`threw: ${e && e.stack || e}`); }
  await browser.close();
  if (failures.length) { console.log(`\n${failures.length} failure(s):`); failures.forEach((f, i) => console.log(`${i + 1}. ${f}`)); process.exit(1); }
  console.log('Admin Scorecard test passed (three section pills; the Scorecard opens on the newest batch with every admin button in its header and every row button in view, ↺ Reset Attempts included; Trainees, Trainee Feedback and Activities on one page; 🏆 Rankings & Progress Report on its own page, the report in the CM format with a general summary; the standard table header; the old tabs open it; Admin Master Control keeps the rest; another batch from the header).');
})();
