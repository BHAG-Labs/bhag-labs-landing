# BHAG Labs — Identity Brief & Concept Evolution

## 1. About BHAG Labs

**BHAG Labs** builds the software infrastructure that universities, accelerators, and innovation programs need to turn student and founder ideas into validated, fundable ventures — week by week, hypothesis by hypothesis.

- **Tagline:** *Every Big Idea Deserves a Launchpad.*
- **Positioning:** A complete operating system for Indian founders.
- **Name origin:** **BHAG** = *Big Hairy Audacious Goal* (Collins & Porras, *Built to Last*, 1994). A goal so large and well-defined it galvanises an entire org around a 10–30 year horizon. The lab takes its name from the premise that early-stage founders deserve infrastructure built for *that* kind of ambition, not just MVP tooling.
- **Audience:** Indian universities, accelerators, incubators, and the founders inside them. India-first: ₹ currency, Indian ESOP tax law, framed for how Indian VCs actually evaluate pre-seed and seed bets.

### Product surface

| Product | Root | What it is |
| --- | --- | --- |
| **Neev** | *foundation* | Lean Launchpad — weekly check-ins, BMC, customer interviews, cohort admin |
| **Hissa** | *share / stake* | Startup equity calculator — ESOP, splits, dilution, India tax |
| **Pitchwala** | *pitch-person* | AI pitch-deck builder — 9 questions → 10 slides, framed for Indian VCs |
| **Yantra** | *instrument / machine* | Marketplace of AI agents + curated business solutions |
| **Bazaar** | *market* | Weekly broadsheet on India's startup, VC & policy economy |
| **Runway** | *runway* | (mascot: Ekam) — newest surface, share-image + OG tooling |

### Brand system

- **Charcoal** `#1a1a1a` — rigor, discipline, the analytical posture
- **Cream / paper** `#f1ebe1` — the page, the canvas, breathing room
- **Terracotta** `#c1502e` — ambition, audacity, fire and clay
- **Forest** `#3d5a4a` — emergence, growth, the third hue that appears when the first two meet
- **Ochre** `#c89b27` — accent, used sparingly for CTAs and signal

Typography is **Inter**; visual language is **broadsheet + bauhaus** — corner marks, double-rule frames, section labels in spaced caps, paper texture. The site reads like a quality newspaper that happens to be about startups.

---

## 2. Where the mark is heading

The brief was always: **a B that earns its lean**. Not an italic typeface trick — a mark whose tilt is a mathematical consequence of the geometry that built it. The audience is technical (universities, founders, VCs); the mark should be defensible to anyone who asks "why is it tilted that way?"

Three constants across every version:

1. **Two unequal discs.** A small disc (rigor) and a larger disc (ambition). Never equal — equality would imply a perpendicular spine, and a BHAG is by definition an *unequal* pair.
2. **A spine on the left.** The discipline that spans the two ambitions. Its position and angle are determined by the discs, not eyeballed.
3. **A formula in the lockup.** Every version surfaces the equation that produces the geometry, the way a quality newspaper surfaces its sources.

What has shifted across versions is **which formula** is foregrounded, and **how strict** the spine–disc relationship is.

---

## 3. Concept evolution

### Concept A · Cooper's Disc-and-Stem *(abandoned)*
Flat disc, vertical stem. Honest but generic — could be any Bauhaus wordmark. No story.

### Concept B · Concentric Rings *(abandoned)*
Two concentric circles + stem. Read as a target or vinyl record. Shared centre → no tilt could be derived. Dropped.

### Concept C · v1 — Disc + Counter-Disc *(baseline)*
Two same-size discs side by side. Symmetric — no lean, no story.

### Concept C · v2 — Vesica Piscis *(explored, dropped)*
Two equal circles, *d* = *r*. Euclid 1.1. Mathematically rich but the discs are equal → perpendicular spine, no asymmetry. Dropped because the brief specifically wants the lean to come from inequality.

### Concept C · v3 — Common External Tangent *(big step forward)*
First version with **unequal circles** (r = 30, R = 42) and an **offset spine**. The spine is the common external tangent. The lean angle satisfies:

```
sin θ = (R − r) / d
```

This is where the math first does real work — the lean is no longer aesthetic but a function of the radius difference and centre distance. **Limit:** the offset on x left the tangent floating visually disconnected.

### Concept C · v4 — Kissing Circles *(elegant, cold)*
Same tangent idea, but discs stacked on a single vertical axis and **externally tangent**. *d* forced to *R* + *r*, so:

```
d = R + r    ⇒    sin θ = (R − r) / (R + r)
```

Pure scale invariance — the lean depends only on the radius **ratio**. Mathematically the cleanest version. **Limit:** discs only kissed at one point — no visible overlap, no "two ambitions meeting".

### Concept C · v5 — Overlapping Discs, Tangent Spine *(direction set)*
Reintroduced the offset so the discs **overlap** (*d* < *R* + *r*), producing a lens coloured in a third hue. Spine stayed as the common external tangent. **Limit:** the tangent drifted far enough left that a cream gap opened below the lower tangent point.

### Concept C · v6 — Overlapping Discs, Embedded Chord *(course correction, then reverted)*
Spine reworked as a **chord** embedded in both discs to kill the gap. Two new problems:
1. Hand-traced lens path picked the wrong sub-arc on the bottom disc → charcoal showed through where green should have been.
2. An embedded chord reads as "stem cutting through the discs", not "stem leaning on them" — wrong verb.

### Concept C · v7 — Overlapping Discs, Tangent Spine *(previous direction)*
Synthesises every prior lesson:

- **Discs overlap** (v5/v6) — *d* < *R* + *r* — so the lens exists and gets its own hue.
- **Lens rendered via SVG `clipPath`** (new in v7) — bottom disc redrawn in forest green, clipped to the interior of the top disc. Mathematically guaranteed exact intersection.
- **Spine is a strict tangent** (v3/v4) — kisses each disc at one point and stays outside both elsewhere.
- **Round caps, stroke 12** — softer than v6's butt cap, thinner than v4's stroke 16.
- **Extends past both tangent points** — visibly rests against the cluster.
- **Curved-triangle cream wedge** between spine and discs is preserved as intentional negative space — that's what makes it read as a *B* rather than a blob.

### Concept C · v8 — Refined Proportions, Stronger Lean *(current)*
Refines v7 with three structural changes:

- **Top disc r: 30 → 28.** Ratio to bottom disc drops from 68% to 64%, closer to classical B typography where the upper bowl is ~60–65% of the lower. The B reads more naturally.
- **Spine stroke: 12 → 10.** More refined at large sizes; still legible at 16px. The cream wedge between spine and disc arcs opens slightly, improving the B counter.
- **Lean: ~2° → ~4.3° from vertical.** Consequence of the smaller top disc — the tangent must tilt more to bridge the increased radius difference. The italic lean is now perceptible without being cartoonish.

Two formulas, each doing distinct work:

```
d < R + r            →  the discs overlap, the lens exists
sin θ = (R − r) / d  →  the spine's lean
```

---

## 4. Why this direction holds up

- **Self-justifying.** Every visible decision — the lean, the lens, the triangle gap — is a consequence of two numbers (*r*, *R*) and one constraint (overlap). Hand any future designer the formulas and they can reproduce the mark.
- **Scales.** Legible at 16 px (favicon: tangent kiss + lens still readable) and at hero size (the construction reads as deliberate, not as a typographic accident).
- **Brand-coherent.** Forest as the third hue extends the existing palette by foregrounding a colour the Tailwind config already had (`text-forest`, `bg-forest`). Not introducing a colour from outside the system — surfacing one that was always there.
- **Story-ready.** *Two unequal ambitions, an overlap where rigor meets audacity, a spine that has to lean because the ambitions are unequal. The lean is a function of the inequality. Equal ambitions would give a perpendicular spine. BHAGs never do.*

---

## 5. Open dials

Each is a one-line edit:

- **Lens colour** — forest `#3d5a4a`. Alternatives: burgundy `#6b2f1c`, ochre `#c89b27`, teal `#1f4a5a`.
- **Tilt amount** — governed by radius ratio and centre offset.
- **Spine thickness** — 10 (v8). Refined → 8. Heavier → 12.
- **Overshoot** — extends ~12px past top disc crown, ~8px past bottom disc base.
- **Lockup tagline** — both formulas currently. Could reduce to just `d < R + r` for cleaner reading.

---

## 6. Files

```
public/logos/
├── bhag-labs-mark.svg          ← canonical mark
├── bhag-labs.svg               ← canonical lockup
├── runway-mark.svg             ← mirrors canonical
├── runway.svg                  ← mirrors canonical
└── concepts/
    ├── BRIEF.md                ← this file
    ├── index.html              ← interactive gallery
    ├── concept-c-v2-vesica-{mark,lockup}.svg
    ├── concept-c-v3-tangent-{mark,lockup,construction}.svg
    ├── concept-c-v4-kissing-{mark,lockup,construction}.svg
    ├── concept-c-v5-overlap-mark.svg
    ├── concept-c-v6-overlap-{mark,lockup,construction}.svg
    ├── concept-c-v7-overlap-{mark,lockup,construction}.svg
    └── concept-c-v8-overlap-{mark,lockup,construction}.svg   ← current
```
