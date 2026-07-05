# Unreleased — parked product pages

Nothing in this folder is routed or bundled. It exists so the public site can
focus on ONE product (DOSSIER) without deleting the work behind the others.

Parked here on 2026-07-05:

| File | What it was |
|---|---|
| `pages/IndexAllProducts.tsx` | The old multi-product landing (hero, solutions grid, Neev spotlight, contact) |
| `pages/Hissa.tsx` | Hissa redirect page |
| `pages/Pitchwala.tsx` | Pitchwala redirect page (the product now marketed as DOSSIER) |
| `pages/Yantra.tsx` | Yantra / Vyapaar redirect page |
| `components/*` | The sections used only by those pages (Navbar with the solutions dropdown, old Hero, Solutions, WhoWeServe, NeevSpotlight, Comparison, Contact, Footer, etc.) |

To resurrect a page: move it back under `src/pages/`, restore its route in
`src/App.tsx` (the commented block), and check its `@/components/...` imports
still resolve (its section components live here, so move those back too).

Note: these files reference components that have moved; they will not
type-check from this folder. That's expected — they are parked, not live.
