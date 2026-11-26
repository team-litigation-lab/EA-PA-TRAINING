#!/usr/bin/env python3
"""A day's narrated video: the lesson deck's frames (build/video/capture.cjs) + the narration
(build/video/narration/dayN.json) -> one MP4, a natural voice speaking each frame's narration while it is on screen.

    python3 build/video/make_video.py --day 1 --frames build/video/out/day1 --out build/video/out/video/day1 --web

The voice is Kokoro (https://huggingface.co/hexgrad/Kokoro-82M, Apache-2.0), `af_heart`, an American English
neural voice that runs offline on a CPU: nothing is sent anywhere.
    pip install kokoro soundfile "misaki[en]"   (Python 3.10-3.12)

Writes, in --out:
  dayN-narrated.mp4      1920x1080 H.264 + AAC, a chapter per slide, captions as a subtitle track
  dayN-narrated-web.mp4  (--web) 1280x720, small enough for the course site (< 25 MB)
  dayN-narrated.vtt/.srt the captions on their own
  slides.json            each frame and the time it starts (for the course's chapter list)
  audio/NNN.wav          each frame's narration, cached by its text: a rebuild only voices frames that changed
"""
import argparse, hashlib, json, os, re, subprocess, sys, wave
from pathlib import Path

HERE = Path(__file__).resolve().parent
LEAD_IN = 0.7        # the slide shows before the voice starts
TAIL = 1.0           # and stays after it stops
PARA_GAP = 0.55      # a breath between paragraphs (Kokoro voices each paragraph in one go, so sentences flow)

# How the voice says a term; the captions keep the term as written. Whole words, case-sensitive.
SAY = {
    "EA/PA": "E A or P A", "EAs": "E As", "PAs": "P As", "VEA": "V E A", "VEAs": "V E As",
    "IT": "I T", "BLUF": "bluff", "LEDES": "leeds", "DMAIC": "duh-may-ick", "MEDDPICC": "med pick",
    "SOP": "S O P", "SOPs": "S O Ps", "OK": "okay", "A/B": "A B", "P&L": "P and L", "Q&A": "Q and A",
    "W-9": "W 9", "e.g.": "for example", "i.e.": "that is", "etc.": "and so on", "vs.": "versus",
    "D.C.": "D C", "CLE": "C L E", "ACT": "A C T", "GEO": "G E O", "FYI": "F Y I",
}
PHONEMES = {"Elias": "ɪlˈIəs", "Elias's": "ɪlˈIəsᵻz"}   # Misaki's inline phonemes: [word](/…/)


def hour_words(h, m, ampm):
    m = int(m)
    mm = "" if m == 0 else (f" oh {m}" if m < 10 else f" {m}")
    return f"{int(h)}{mm}{(' ' + ampm) if ampm else (' o’clock' if m == 0 else '')}"


def spoken(text):
    t = text
    t = re.sub(r"\b(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.|AM|PM|am|pm)?", lambda m: hour_words(m.group(1), m.group(2),
               (m.group(3) or "").lower().replace(".", "").replace("am", "a.m.").replace("pm", "p.m.")), t)
    t = t.replace("—", ", ").replace("–", " to ").replace("…", "...").replace("&", " and ")
    for k in sorted(SAY, key=len, reverse=True):
        t = re.sub(r"(?<![\w/])" + re.escape(k) + r"(?![\w/])", SAY[k], t)
    for k, ph in PHONEMES.items():
        t = re.sub(r"(?<![\w\[])" + re.escape(k) + r"(?![\w’'])", f"[{k}](/{ph}/)", t)
    t = re.sub(r"\s+,", ",", t)
    return re.sub(r"[ \t]+", " ", t).strip()


def ts(t, sep=","):
    ms = int(round(t * 1000)); h, ms = divmod(ms, 3600000); m, ms = divmod(ms, 60000); s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02}{sep}{ms:03}"


ABBR = r"\b(Mr|Mrs|Ms|Dr|Atty|Hon|Esq|No|St|vs|v|a\.m|p\.m|e\.g|i\.e)\.(?=\s)"


def sentences(text):
    t = re.sub(ABBR, lambda m: m.group(1) + "\x00", text.strip())
    parts = re.split(r'(?<=[.!?])\s+(?=[A-Z0-9"“‘\'])', t)
    return [p.replace("\x00", ".").strip() for p in parts if p.strip()]


def caption_lines(sentence, limit=84):
    if len(sentence) <= limit:
        return [sentence]
    out, cur = [], ""
    for w in re.split(r"(?<=[,;:])\s+|\s+", sentence):
        if cur and len(cur) + 1 + len(w) > limit:
            out.append(cur); cur = w
        else:
            cur = (cur + " " + w).strip()
        if cur.endswith((",", ";", ":")) and len(cur) > limit * 0.55:
            out.append(cur); cur = ""
    if cur:
        out.append(cur)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--day", type=int, required=True)
    ap.add_argument("--frames", required=True, help="the day's captured frames (capture.cjs)")
    ap.add_argument("--notes", default=None, help="default build/video/narration/dayN.json")
    ap.add_argument("--out", required=True)
    ap.add_argument("--voice", default="af_heart")
    ap.add_argument("--speed", type=float, default=1.0)
    ap.add_argument("--only", default=None, help="e.g. 1-6: just these frames (a quick preview)")
    ap.add_argument("--web", action="store_true")
    a = ap.parse_args()

    spec = json.load(open(a.notes or HERE / "narration" / f"day{a.day}.json", encoding="utf-8"))
    frames = spec["frames"]
    if a.only:
        lo, _, hi = a.only.partition("-"); frames = frames[int(lo) - 1:int(hi or lo)]
    name = f"day{a.day}-narrated"
    out = Path(a.out); (out / "audio").mkdir(parents=True, exist_ok=True)

    os.environ.setdefault("TQDM_DISABLE", "1")
    import numpy as np, torch
    from kokoro import KPipeline
    torch.manual_seed(7)
    pipe = KPipeline(lang_code="a", repo_id="hexgrad/Kokoro-82M")
    rate = 24000
    voice_id = f"kokoro:{a.voice}:{a.speed}"

    def voice(text):
        """One paragraph, voiced in one go (natural prose rhythm). Returns pcm and per-chunk (start, end, text)."""
        pcm = []; words = []; t = 0.0
        for res in pipe(spoken(text), voice=a.voice, speed=a.speed, split_pattern=r"\n+"):
            w = res.audio.numpy() if hasattr(res.audio, "numpy") else np.asarray(res.audio)
            for tok in (res.tokens or []):
                if tok.start_ts is not None and re.search(r"\w", tok.text):
                    words.append((t + tok.start_ts, t + (tok.end_ts or tok.start_ts)))
            pcm.append(w); t += len(w) / rate
        return (np.concatenate(pcm) if pcm else np.zeros(1, dtype=np.float32)), words

    def to16(w):
        return (np.clip(w, -1, 1) * 32767).astype("<i2").tobytes()

    all_pcm = bytearray(); cues = []; chapters = []; concat = []; t = 0.0
    for i, f in enumerate(frames, 1):
        img = Path(a.frames) / f["image"]
        if not img.exists():
            sys.exit(f"missing frame {img}")
        stem = Path(f["image"]).stem
        wav_path = out / "audio" / f"{stem}.wav"; cue_path = wav_path.with_suffix(".json")
        key = hashlib.sha1(json.dumps([voice_id, f["text"], SAY, PHONEMES]).encode()).hexdigest()
        cached = json.loads(cue_path.read_text()) if cue_path.exists() and wav_path.exists() else None
        if cached and cached.get("key") == key:
            with wave.open(str(wav_path)) as w:
                pcm = bytearray(w.readframes(w.getnframes()))
            frame_cues = cached["cues"]
        else:
            print(f"  {stem}: {f['title'][:60]}", flush=True)
            pcm = bytearray(b"\x00\x00" * int(rate * LEAD_IN)); frame_cues = []
            paras = [p.strip() for p in re.split(r"\n\s*\n", f["text"]) if p.strip()]
            for k, para in enumerate(paras):
                start = len(pcm) / 2 / rate
                w, words = voice(para)
                pcm += to16(w)
                end = len(pcm) / 2 / rate
                # captions: the paragraph's sentences in pieces, timed from the voice's own word timestamps
                # (each piece's words counted as the voice says them); by share of characters if they don't line up
                pieces = [c for s in sentences(para) for c in caption_lines(s)]
                counts = [len([x for x in spoken(p).split() if re.search(r"\w", x)]) for p in pieces]
                if words and abs(sum(counts) - len(words)) <= max(2, 0.08 * len(words)):
                    k0 = 0
                    for j, (p, n) in enumerate(zip(pieces, counts)):
                        k1 = len(words) if j == len(pieces) - 1 else min(len(words), k0 + n)
                        s0 = start + words[min(k0, len(words) - 1)][0]
                        s1 = start + (words[k1][0] if k1 < len(words) else words[-1][1] + 0.3)
                        frame_cues.append((s0, max(s1, s0 + 0.5), p)); k0 = k1
                else:
                    total = sum(len(p) for p in pieces) or 1; cur = start
                    for p in pieces:
                        d = (end - start) * len(p) / total
                        frame_cues.append((cur, cur + d, p)); cur += d
                if k < len(paras) - 1:
                    pcm += b"\x00\x00" * int(rate * PARA_GAP)
            pcm += b"\x00\x00" * int(rate * TAIL)
            with wave.open(str(wav_path), "wb") as w:
                w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate); w.writeframes(bytes(pcm))
            cue_path.write_text(json.dumps({"key": key, "cues": frame_cues}))
        dur = len(pcm) / 2 / rate
        cues += [(t + c0, t + c1, txt) for c0, c1, txt in frame_cues]
        chapters.append((t, t + dur, f["title"], f))
        concat.append((img, t, t + dur))
        all_pcm += pcm; t += dur

    narration = out / "narration.wav"
    with wave.open(str(narration), "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate); w.writeframes(bytes(all_pcm))
    srt = "".join(f"{i}\n{ts(a0)} --> {ts(b0)}\n{txt}\n\n" for i, (a0, b0, txt) in enumerate(cues, 1))
    (out / f"{name}.srt").write_text(srt, encoding="utf-8")
    vtt = "WEBVTT\n\n" + "".join(f"{ts(a0, '.')} --> {ts(b0, '.')}\n{txt}\n\n" for a0, b0, txt in cues)
    (out / f"{name}.vtt").write_text(vtt, encoding="utf-8")
    # one chapter per slide (a slide's continuation pages are in its chapter)
    marks = []
    for c0, c1, title, f in chapters:
        if marks and marks[-1]["slide"] == f["slide"]:
            marks[-1]["end"] = c1
        else:
            marks.append({"slide": f["slide"], "title": title, "start": c0, "end": c1})
    meta = f";FFMETADATA1\ntitle={spec.get('title', name)}\n" + "".join(
        f"\n[CHAPTER]\nTIMEBASE=1/1000\nSTART={int(m['start']*1000)}\nEND={int(m['end']*1000)}\ntitle={m['title']}\n" for m in marks)
    (out / "chapters.txt").write_text(meta, encoding="utf-8")
    (out / "slides.json").write_text(json.dumps([{"slide": m["slide"], "title": m["title"], "start": round(m["start"], 1)} for m in marks], ensure_ascii=False))

    print(f"Encoding {t/60:.1f} min of video…", flush=True)
    fps = 10
    lst = out / "frames.txt"
    with open(lst, "w") as fh:   # concat demuxer: each still held for a whole number of frames, cumulative (no drift)
        for png, t0, t1 in concat:
            frames_n = round(t1 * fps) - round(t0 * fps)
            fh.write(f"file '{png.resolve()}'\nduration {frames_n / fps:.3f}\n")
        fh.write(f"file '{concat[-1][0].resolve()}'\n")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lst),
                    "-i", str(narration), "-i", str(out / f"{name}.srt"), "-i", str(out / "chapters.txt"),
                    "-map", "0:v", "-map", "1:a", "-map", "2:s", "-map_metadata", "3", "-map_chapters", "3",
                    "-vf", f"fps={fps},scale=1920:1080,format=yuv420p",
                    "-c:v", "libx264", "-preset", "medium", "-tune", "stillimage", "-crf", "20",
                    "-c:a", "aac", "-b:a", "128k", "-c:s", "mov_text", "-metadata:s:s:0", "language=eng",
                    "-shortest", "-movflags", "+faststart", str(out / f"{name}.mp4")], check=True)
    if a.web:
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(out / f"{name}.mp4"), "-map", "0:v", "-map", "0:a",
                        "-map_chapters", "0", "-vf", "scale=1280:720", "-c:v", "libx264", "-preset", "slow", "-crf", "30",
                        "-tune", "stillimage", "-g", "300", "-r", str(fps), "-c:a", "aac", "-b:a", "48k", "-ac", "1",
                        "-movflags", "+faststart", str(out / f"{name}-web.mp4")], check=True)
    print(f"Done: {out / (name + '.mp4')}  ({t/60:.1f} min, {len(frames)} frames, {len(marks)} slides)")


if __name__ == "__main__":
    sys.exit(main())
