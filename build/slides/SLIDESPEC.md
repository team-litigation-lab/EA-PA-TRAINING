# EA/PA lesson slides — concise copy spec

Every topic (lesson) of every day is shown as a short run of slides, one idea per slide in big type:

**Why It Matters · The Rules · See It · On the Job · Do & Don't**

The topic's full text (in `js/days/dayN/lessons.js`) stays one tap away ("Full text") and in Presenter view, so the
concise copy here is a faithful *distillation* of the topic — never new content, never a new fact, never a
contradiction of it.

Output: `build/slides/dN.json` — an object keyed by the topic's exact title (`h`), one entry per topic of the day,
in the day's order:

```json
{
  "EA vs. PA: Two Mindsets": {
    "image": "exec-partner",
    "hook": "Know which life you are protecting: **the business or the person**.",
    "points": ["…", "…", "…"],
    "line": "Never conflate the two roles; ask when a request is ambiguous.",
    "scene": "Elias asks you to book a dinner on the night of a filing deadline. …",
    "move": "Protect the filing first, then **offer two dinner options**.",
    "job": [["Trigger", "Task", "Tool", "Checkpoint"], ["…", "…", "…", "…"]],
    "dos": ["…", "…"],
    "donts": ["…", "…"]
  }
}
```

## Fields (where each comes from)
- `hook` — **one sentence, ≤ 16 words**: why this topic matters to an EA/PA working for Elias Thorne, as a confident
  headline (from the topic's core principles / first bullets).
- `points` — **3 or 4** rules, **≤ 12 words each** (from `fourPart.corePrinciples`, `b`, `callout`; the most
  important ones, merged where natural). Imperative or declarative.
- `line` — *optional*: the hard boundary of the topic in **≤ 14 words** (confidentiality, escalation, what the
  assistant never decides or never says, a legal/ethical limit). Omit when the topic has none.
- `scene` — a concrete moment on the job with Elias Thorne (Managing Owner & CEO, Thorne & Partners Law Group) or his
  household, in **≤ 30 words**, taken from the topic's `fourPart.discussionCase`, `example` or bullets. Use only
  people and facts the course already uses (Elias, Sarah, Leo, Maya, David Reyes, Meridian Dynamics, …).
- `move` — the right move in that scene, **≤ 14 words**.
- `job` — from `fourPart.howTo` / `howTo`: **2 or 3 rows**, each `[trigger, task, tool, checkpoint]`,
  **≤ 6 words per cell**. Trigger = what lands on the assistant; task = what they do; tool = where/with what
  (Outlook, calendar, dossier, CRM, QuickBooks, the case file, a checklist, …); checkpoint = how they know it's done.
- `dos` / `donts` — from `fourPart.bestPractices` (practices → dos; "Pitfall: …", "Never …" → donts) and the
  bullets: **2–3 each, ≤ 10 words each**.
- `image` — one key from the catalog below: the picture that best fits *this* topic. Vary them: avoid the same
  image on consecutive topics unless the topic is truly the same.

## Writing rules
- **Highlight the important point.** In every `hook`, `points` item, `line`, `scene`, `move`, `job` is exempt,
  `dos`/`donts` item: wrap the **one** most important phrase (2–5 words: the rule, the deadline, the figure, the
  action) in double asterisks: `"Confirm **every court date in writing** before booking travel."` Exactly one
  highlight per line (`scene` may have two). It shows as a highlighter mark, so pick what a trainee must remember.
- Plain, energetic, second person where natural ("you"). Short words. No jargon the topic itself doesn't use.
- Sentence case. No trailing period on a single-clause line.
- Names, numbers, times and dates exactly as in the topic.
- No new facts, no new rules, no opinions the topic doesn't hold. When in doubt, cut — the full text is a tap away.
- Never the word "blueprint". No emoji in the copy (the slides add their own icons).
- Respect the limits strictly: count words; a symbol on its own (→ · … & /) is not a word.
- Every topic of the day gets an entry, with its title copied exactly (check with `node build/slides/assemble.cjs --check N`).

## Image catalog (`image` keys)
exec-partner · dossier-profile · gatekeeper · inbox-triage · email-draft · voice-note · ai-assistant · prompt-chat ·
calendar-week · court-docket · clock-deadline · travel-plane · itinerary-map · time-blocks · data-chart ·
sales-outreach · phone-call · household-home · vendor-handshake · risk-umbrella · business-building ·
compliance-checklist · project-board · sop-binder · invoice-ledger · trust-scale · accounting-screen · access-keys ·
security-shield · crisis-alert · event-stage · meeting-notes · cle-certificate · reputation-star · social-media ·
brand-palette · team-huddle · escalation-alert · confidential-lock · knowledge-check
