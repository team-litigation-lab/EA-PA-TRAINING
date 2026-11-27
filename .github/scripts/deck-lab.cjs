// 🛠 The day's Practice Lab inside its deck, and a day that completes itself (js/eapa-deck-lab.js):
// 1. eapaDeckLab.ACTIVITIES names every lab's activities as the lab itself does (toolState.wizardLabels once it is open).
// 2. A day's deck has one slide per activity of its Practice Lab, each right after the topic it practises (the rest at
//    the end), and a saved place moves with its slide; ▶ Start opens the lab on that activity, and the
//    lab's "← Back to Day N" comes back to the same slide, which then shows the activity's grade.
// 3. The day card has no ✓ Finish Training (☰ Topics and ▶ Video share the row); a day whose Knowledge Check is passed but
//    whose Practice Lab is not done says so and is not Completed; with both done it is Completed.
// Usage: node .github/scripts/deck-lab.cjs [baseUrl]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const signIn = require('./sign-in.cjs');
const BASE = process.argv[2] || 'http://localhost:8787/';
const failures = []; const fail = (m) => failures.push(m);
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1366, height: 768 } })).newPage();
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE);
    await signIn(page, 'Lab', 'Deckcheck', 'B112626');
    await page.waitForFunction(() => typeof eapaDeckLab === 'object', null, { timeout: 20000 });

    // 1. the activities, as each lab has them
    const ids = await page.evaluate(() => PRACTICE_TOOLS.map(t => t.id));
    for (const id of ids) {
      await page.evaluate(id => goto('tool', id), id); await page.waitForTimeout(500);
      const r = await page.evaluate(id => ({ lab: (toolState.wizardLabels || []).slice(), mine: eapaDeckLab.ACTIVITIES[id] || [] }), id);
      if (JSON.stringify(r.lab) !== JSON.stringify(r.mine)) fail(`${id}: eapaDeckLab.ACTIVITIES ${JSON.stringify(r.mine)} is not the lab's ${JSON.stringify(r.lab)}`);
    }

    // 2. the deck: a slide per activity, ▶ Start, back to the same slide
    await page.evaluate(() => goto('day', 1)); await page.waitForTimeout(500);
    const labs = await page.evaluate(() => buildDaySlides(DAYS[0]).map((s, i) => [i, s.type, s.label]).filter(x => x[1] === 'practiceLab'));
    if (JSON.stringify(labs.map(x => x[2]).sort()) !== JSON.stringify((await page.evaluate(() => eapaDeckLab.ACTIVITIES.dossier1)).slice().sort())) fail(`Day 1's deck should have a slide per Practice Lab activity: ${JSON.stringify(labs)}`);
    const at = (labs.find(x => x[2] === 'ACT Email') || [])[0];

    // 2b. in the session: every activity of AFTER_TOPIC names a topic of its day, and its slide follows that topic's last
    //     slide (or another activity of the same topic); the rest (Crisis Roleplay, a capstone) close the day
    const inline = await page.evaluate(() => DAYS.map(d => {
      const slides = buildDaySlides(d), out = [];
      relatedTools(d.id).forEach(t => Object.entries(eapaDeckLab.AFTER_TOPIC[t.id] || {}).forEach(([label, h]) => {
        const li = d.lessons.findIndex(l => l.h === h), j = slides.findIndex(s => s.type === 'practiceLab' && s.toolId === t.id && s.label === label);
        let k = j - 1; while (k >= 0 && slides[k].type === 'practiceLab' && slides[k].after === h) k--;
        out.push({ day: d.id, label, h, li, j, prev: k >= 0 ? [slides[k].type, slides[k].lessonIndex] : null, isLab: (eapaDeckLab.ACTIVITIES[t.id] || []).includes(label) });
      }));
      return out;
    }).flat());
    for (const x of inline) {
      if (!x.isLab) fail(`AFTER_TOPIC names "${x.label}", which isn't an activity of its lab`);
      else if (x.li < 0) fail(`Day ${x.day}: "${x.label}" should follow the topic "${x.h}", which isn't in the day (was it renamed?)`);
      else if (!x.prev || !['topic', 'quickCheck'].includes(x.prev[0]) || x.prev[1] !== x.li) fail(`Day ${x.day}: "${x.label}" should come right after "${x.h}": ${JSON.stringify(x)}`);
    }
    if (inline.length < 40) fail(`expected the labs' activities in the sessions, found ${inline.length}`);
    // 2b'. the ACT email habit: from Day 2 every lab opens with an ACT Email, and its slide is the first thing after the day's agenda
    const act = await page.evaluate(() => DAYS.filter(d => d.id >= 2).map(d => { const sl = buildDaySlides(d), ag = sl.findIndex(s => s.type === 'agenda'), t = relatedTools(d.id)[0];
      return { day: d.id, first: (eapaDeckLab.ACTIVITIES[t.id] || [])[0], next: sl[ag + 1] && [sl[ag + 1].type, sl[ag + 1].label] }; }));
    for (const x of act) if (x.first !== 'ACT Email' || !x.next || x.next[0] !== 'practiceLab' || x.next[1] !== 'ACT Email') fail(`Day ${x.day} should open with its ACT Email, right after the agenda: ${JSON.stringify(x)}`);
    for (const id of await page.evaluate(() => PRACTICE_TOOLS.map(t => t.id))) {
      await page.evaluate(id => goto('tool', id), id); await page.waitForTimeout(300);
      const first = await page.evaluate(() => [(toolState.wizardLabels || [])[0], !!document.querySelector('#actHabitDraft, #d1ActDraft')]);
      if (first[0] !== 'ACT Email' || !first[1]) fail(`${id}: the lab should open on its ACT Email: ${JSON.stringify(first)}`);
    }

    // 2c. a saved place moves with its slide: a trainee who was on Day 1's ACT Email slide (at the end, the old layout)
    //     is on it again in the new layout, and their furthest slide doesn't move back
    const mig = await page.evaluate(async () => {
      const d = DAYS[0], old = eapaDeckLab.buildDaySlidesAtEnd(d), now = buildDaySlides(d);
      const oi = old.findIndex(s => s.type === 'practiceLab' && s.label === 'ACT Email');
      state.lastSlide[1] = oi; state.slideProgress[1] = old.length - 1; delete state.dayOrderMigrated['deck-lab-inline:1'];
      await eapaDeckLab.migrateLabsInline();
      const ni = now.findIndex(s => s.type === 'practiceLab' && s.label === 'ACT Email');
      return { oi, ni, last: state.lastSlide[1], far: state.slideProgress[1], n: now.length };
    });
    if (mig.last !== mig.ni || mig.oi === mig.ni) fail(`the saved place should move to the ACT Email slide's new position: ${JSON.stringify(mig)}`);
    if (mig.far < mig.n - 2) fail(`the furthest slide reached shouldn't move back: ${JSON.stringify(mig)}`);
    await page.evaluate(i => { state.dayViewMode = 'slides'; state.maxSlideReached = 999; state.lessonSlide = i; render(); }, at); await page.waitForTimeout(600);
    if (!/ACT Email/.test(await page.locator('.edl-go').innerText().catch(() => ''))) fail('the activity slide has no ▶ Start for its activity');
    await page.click('.edl-go'); await page.waitForTimeout(1000);
    const on = await page.evaluate(() => [state.view, state.toolId, toolState.wizardLabels[toolState.wizardIndex || 0]]);
    if (JSON.stringify(on) !== JSON.stringify(['tool', 'dossier1', 'ACT Email'])) fail(`▶ Start should open the lab on its activity: ${JSON.stringify(on)}`);
    await page.evaluate(() => bumpPracticeProgress('dossier1', 88)); await page.waitForTimeout(300);
    await page.click('.nav-back'); await page.waitForTimeout(800);
    const back = await page.evaluate(() => [state.view, state.lessonSlide, (document.querySelector('.edl-state') || {}).textContent || '']);
    if (back[0] !== 'day' || back[1] !== at || !/88%/.test(back[2])) fail(`← Back should return to the activity's slide with its grade: ${JSON.stringify(back)}`);

    // 3. the card: no Finish Training; complete only with the Knowledge Check and the Practice Lab
    await page.evaluate(() => { state.progress[1] = { done: true, score: 90, history: [] }; state.progress[2] = { done: true, score: 90, history: [] }; goto('dashboard'); });
    await page.waitForTimeout(800);
    const cards = await page.evaluate(() => [1, 2, 3].map(n => ({ head: document.querySelector(`#module-${n} .mh-day`).textContent, btns: [...document.querySelectorAll(`#module-${n} button`)].map(b => b.textContent.trim()) })));
    if (cards.some(c => c.btns.some(b => /Finish Training/.test(b)))) fail(`a day card still has ✓ Finish Training: ${JSON.stringify(cards)}`);
    if (!/Completed/.test(cards[0].head)) fail(`Day 1 (Knowledge Check passed, Practice Lab graded) should be Completed: ${cards[0].head}`);
    if (/Completed/.test(cards[1].head) || !/Practice Lab to do/.test(cards[1].head)) fail(`Day 2 (Knowledge Check passed, no Practice Lab) should say the Practice Lab is to do: ${cards[1].head}`);
    if (!cards[2].btns.some(b => /Video/.test(b)) || !cards[2].btns.some(b => /Topics/.test(b))) fail(`a day card should have ☰ Topics and ▶ Video: ${JSON.stringify(cards[2].btns)}`);

    // 4. the Practice Lab before the Knowledge Check: held until every activity of the day's lab is graded
    await page.evaluate(() => { state.isAdmin = false; delete state.progress[3]; const t = relatedTools(3)[0]; if (state.practiceProgress) delete state.practiceProgress[t.id];
      goto('day', 3); state.dayViewMode = 'knowledgeCheck'; state.quizSubmitted = false; render(); });
    await page.waitForTimeout(500);
    let kc = await page.evaluate(() => ({ gate: !!document.querySelector('#quizWrap .edl-gate'), starts: document.querySelectorAll('#quizWrap .edl-gate-go').length, total: eapaDeckLab.labLeft(3).all.length }));
    if (!kc.gate || kc.starts !== kc.total) fail(`Day 3's Knowledge Check should wait for its Practice Lab, with ▶ Start on each of its ${kc.total} activities: ${JSON.stringify(kc)}`);
    await page.click('#quizWrap .edl-gate-go >> nth=1'); await page.waitForTimeout(800);
    const went = await page.evaluate(() => { const t = relatedTools(3)[0]; return [state.view, state.toolId === t.id, toolState.wizardLabels[toolState.wizardIndex || 0] === eapaDeckLab.ACTIVITIES[t.id][1]]; });
    if (JSON.stringify(went) !== JSON.stringify(['tool', true, true])) fail(`▶ Start on the checkpoint should open that activity: ${JSON.stringify(went)}`);
    // all but one graded: still held; every one graded: the questions
    await page.evaluate(() => { const t = relatedTools(3)[0], a = eapaDeckLab.ACTIVITIES[t.id]; state.practiceProgress[t.id] = { runs: 1, bestScore: 80, history: [], parts: Object.fromEntries(a.slice(1).map(l => [l, 80])) };
      goto('day', 3); state.dayViewMode = 'knowledgeCheck'; state.quizSubmitted = false; render(); });
    await page.waitForTimeout(400);
    if (!(await page.$('#quizWrap .edl-gate'))) fail('the Knowledge Check opened with one Practice Lab activity still not graded');
    await page.evaluate(() => { const t = relatedTools(3)[0]; state.practiceProgress[t.id].parts[eapaDeckLab.ACTIVITIES[t.id][0]] = 75; render(); });
    await page.waitForTimeout(400);
    if (await page.$('#quizWrap .edl-gate')) fail('the Knowledge Check is still held with every Practice Lab activity graded');
    // a trainer is never held
    await page.evaluate(() => { const t = relatedTools(3)[0]; delete state.practiceProgress[t.id]; state.isAdmin = true; state.adminPreview = false; render(); });
    await page.waitForTimeout(400);
    if (await page.$('#quizWrap .edl-gate')) fail("a trainer's Knowledge Check is held by the Practice Lab");
  } catch (e) { fail(e.message); }
  await browser.close();
  if (failures.length) { console.log('✗ Practice Lab in the deck:\n  ' + failures.join('\n  ')); process.exit(1); }
  console.log("✓ Practice Lab in the deck: every lab opens with an ACT Email; a slide per activity, ▶ Start opens it, back returns to the slide; no Finish Training; a day completes with its Knowledge Check and Practice Lab; the Knowledge Check waits for every Practice Lab activity");
})();
