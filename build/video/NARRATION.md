# Narrated day videos — narration spec

Each day's video plays the day's lesson deck exactly as the room sees it (the Presenter view slides window), one
frame per slide page, while a natural voice speaks that page's narration. The narration is the trainer's own speaker
notes (the 🎙 *Script — read aloud* in Presenter view, `js/days/dayN/scripts.js`), **compressed, not rewritten**.

`build/video/narration/dayN.json` is the source of the narration:

```json
{
  "day": 1,
  "title": "Day 1 — The Legal EA/PA Role, Communication & Managing Up",
  "frames": [
    { "image": "001.png", "slide": 1, "title": "Day 1 Agenda", "text": "…" },
    { "image": "005.png", "slide": 5, "title": "EA vs. PA: Two Mindsets", "text": "…" }
  ]
}
```

One entry per captured frame, in order (`build/video/capture.cjs` writes the frames and `raw.json`, the scripts as
Presenter view splits them page by page). A frame's `text` may hold several short paragraphs separated by a blank
line (`\n\n`): the voice takes a slightly longer breath there.

## How the narration is written

1. **The speaker notes' own words and cadence.** Keep the trainer's sentences, contractions, "we" and "you", the
   short punchy lines mixed with longer ones, and the *First / Next / Then / Finally* walk-through. Cut and merge;
   don't paraphrase into formal or textbook prose. Never add a fact, a rule or a name the notes don't have.
2. **Compress what's redundant.** In each script the *why*, the *talk* and the *walk* often say the same thing two or
   three times. Keep the clearest version once:
   - drop a walk step that only restates the talk (keep the walk's order and its ordinal words for the rest:
     if "Next" now opens the first remaining step, make it "First");
   - drop the *why* line when the talk opens with the same point (or fold it in as the opening line);
   - when the *ask* and the *scenario* make the same point, keep one; when they differ, keep both, the ask short;
   - don't open consecutive slides with the same stock phrase ("Here's the thing", "Let's…").
   Aim for roughly **two-thirds** of the original words on a topic; a short script that has nothing redundant stays
   as it is.
3. **It's a recording, not a room.** A line that needs a live room ("Who here has…", "Turn to your neighbour",
   "Raise your hand", "Let's solve this together") becomes a reflective prompt for one viewer ("Think about…",
   "Take a second with this one…", "Pause the video and…"). A scenario is introduced so it lands as something to
   think about ("Here's a situation to work through.") and is never answered unless the notes answer it.
4. **Frames that aren't topics** get short narration in the same voice, from what is on the slide:
   - *Agenda* (≈ 60–90 words): welcome to Day N, the day's title, the sections in a natural sentence (not a list
     read out with numbers), and the goal for the day ("By the end of today…").
   - *Task Overview* (≈ 60–90 words): the six areas a Legal EA covers, in one or two sentences, and a line on why
     it matters.
   - *Meet Elias Thorne* (≈ 50–70 words): in the live class the trainer plays Elias for a few minutes; in the
     video, the viewer thinks about what they'd ask him (one or two of the slide's questions).
   - *Section divider* (1–2 sentences): "Section 3 of 8: Communication & Gatekeeping." and what it covers, naming
     two or three of its topics at most.
   - *Quick Check*: read the question and the options naturally ("Is it A… B… C… or D…?"), "Take a second.",
     then the answer and the rationale in one or two sentences.
   - *Practice Lab*: one or two sentences on what the day's lab has them do, and that it's their turn now.
   - *Trainer Checkpoint / discussion*: the discussion question as something to reflect on before the Knowledge Check.
5. **Spoken text.** Write it to be heard: no bullets, no emoji, no brackets, no "slash" constructions where a word
   reads better ("EA or PA" for "EA/PA" is fine either way: the builder says acronyms letter by letter). Keep
   quotes from the notes (scripts, sample lines) as they are. Write times the way they're said ("8:10 a.m." is fine;
   the builder reads it).
