// Concise lesson-slide copy: checks build/slides/dN.json against SLIDESPEC.md and writes js/days/dayN/slides.js.
// Usage: node build/slides/assemble.cjs            (check + write every day that has a dN.json)
//        node build/slides/assemble.cjs --check [N] (check only; exit 1 on any problem)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const IMAGES = fs.readFileSync(path.join(__dirname, 'SLIDESPEC.md'), 'utf8').split('## Image catalog')[1].split('\n').slice(1).join(' ').split('·').map(s => s.trim()).filter(Boolean);
const args = process.argv.slice(2), checkOnly = args.includes('--check');
const only = args.filter(a => /^\d+$/.test(a)).map(Number);
const words = s => String(s).replace(/\*\*/g, '').split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length;
const marks = s => (String(s).match(/\*\*[^*]+\*\*/g) || []).length;
const problems = [];
function lessonsOf(n) {
    const src = fs.readFileSync(path.join(ROOT, `js/days/day${n}/lessons.js`), 'utf8');
    return new Function('var window = {};\n' + src + `;return DAY${n};`)().lessons;
}
function check(n, data) {
    const p = (m) => problems.push(`Day ${n}: ${m}`);
    const lessons = lessonsOf(n), titles = lessons.map(l => l.h);
    titles.forEach(t => { if (!data[t]) p(`no entry for "${t}"`); });
    Object.keys(data).forEach(t => { if (!titles.includes(t)) p(`"${t}" is not a topic title`); });
    for (const [t, e] of Object.entries(data)) {
        const q = (m) => p(`"${t}": ${m}`);
        const line = (field, s, max, nMarks = [1]) => {
            if (typeof s !== 'string' || !s.trim()) return q(`${field} missing`);
            if (words(s) > max) q(`${field} has ${words(s)} words (max ${max}): ${s}`);
            if (!nMarks.includes(marks(s))) q(`${field} needs ${nMarks.join(' or ')} **highlight**: ${s}`);
            if (/blueprint/i.test(s)) q(`${field} says "blueprint"`);
        };
        if (!IMAGES.includes(e.image)) q(`image "${e.image}" is not in the catalog`);
        line('hook', e.hook, 16);
        if (!Array.isArray(e.points) || e.points.length < 3 || e.points.length > 4) q('points must have 3 or 4 items');
        (e.points || []).forEach((s, i) => line(`points[${i}]`, s, 12));
        if (e.line != null) line('line', e.line, 14);
        line('scene', e.scene, 30, [1, 2]);
        line('move', e.move, 14);
        if (!Array.isArray(e.job) || e.job.length < 2 || e.job.length > 3) q('job must have 2 or 3 rows');
        (e.job || []).forEach((r, i) => { if (!Array.isArray(r) || r.length !== 4) q(`job[${i}] needs 4 cells`); else r.forEach((c, j) => { if (words(c) > 6) q(`job[${i}][${j}] has ${words(c)} words (max 6): ${c}`); if (/\*\*/.test(c)) q(`job[${i}][${j}] has a highlight (none in job)`); }); });
        for (const k of ['dos', 'donts']) {
            if (!Array.isArray(e[k]) || e[k].length < 2 || e[k].length > 3) q(`${k} must have 2 or 3 items`);
            (e[k] || []).forEach((s, i) => line(`${k}[${i}]`, s, 10));
        }
    }
}
let wrote = 0;
for (let n = 1; n <= 10; n++) {
    if (only.length && !only.includes(n)) continue;
    const f = path.join(__dirname, `d${n}.json`);
    if (!fs.existsSync(f)) { if (only.length || checkOnly) problems.push(`Day ${n}: build/slides/d${n}.json is missing`); continue; }
    let data;
    try { data = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { problems.push(`Day ${n}: d${n}.json does not parse: ${e.message}`); continue; }
    check(n, data);
    if (!checkOnly) {
        const order = lessonsOf(n).map(l => l.h).filter(t => data[t]);
        const out = {}; order.forEach(t => { out[`${n}::${t}`] = data[t]; });
        fs.writeFileSync(path.join(ROOT, `js/days/day${n}/slides.js`),
            `/* Day ${n} lesson slides: the concise copy for each topic's run of slides (Why It Matters · The Rules ·\n   See It · On the Job · Do & Don't), keyed "day::topic title". Generated from build/slides/d${n}.json by\n   build/slides/assemble.cjs: edit the JSON, then run the assembler. */\nwindow.EA_SLIDE_COPY = Object.assign(window.EA_SLIDE_COPY || {}, ${JSON.stringify(out, null, 1)});\n`);
        wrote++;
    }
}
if (problems.length) { console.log(`${problems.length} problem(s):`); problems.slice(0, 200).forEach(x => console.log('- ' + x)); process.exit(1); }
console.log(checkOnly ? 'Lesson slide copy: all good.' : `Lesson slide copy: all good; wrote ${wrote} day file(s).`);
