# Ekam — the BHAG Labs guide

Ekam (एकम्, "one") is the single AI persona for BHAG Labs. The same character
shows up across products. The voice register adapts to each product; the
character does not.

## Visual

Canonical SVG: `bhag-labs-landing/public/mascots/ekam.svg`. Each product copies
this file into its own `public/` so the asset can be served from the product
domain without a cross-origin fetch.

- Charcoal ink-bottle silhouette
- Cream face plate, two charcoal eyes, ochre spark in the right eye
- Terracotta numeral "1" on the chest plate
- "EKAM" caption above (Playfair Display, terracotta)
- Flat colours only. No gradients, no drop shadows beyond a single floor ellipse.

Idle animation: a slow blink every ~5.5 seconds. Disabled under
`prefers-reduced-motion: reduce`.

## Voice

| Product | Register | Person | Closer |
|---|---|---|---|
| Bazaar  | Oracular, restrained, editorial | Third-person plural ("the newsroom") | "— Ekam, the newsroom." |
| Runway  | Warm, encouraging, conversational | First-person singular ("I'll keep you company") | None (in-form speech bubbles) |
| Neev/Yantra (future) | TBD | TBD | TBD |

## Forbidden phrasings everywhere

em-dashes, "ecosystem", "10x", "disruption", "game-changing", "paradigm
shift", "grassroots", "bottom of the pyramid", hashtags, emojis (in
editorial copy; UI buttons may use them sparingly).

## Files

- `bhag-labs-landing/public/mascots/ekam.svg` — canonical
- `runway/public/mascot-ekam.svg` — Runway copy
- `bazaar/public/mascot-ekam.svg` — Bazaar copy (when Bazaar gets visual touchpoints)
