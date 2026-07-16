# TODO — bhag-labs-landing (this repo)

Everything a human must do; the code is done and builds.

## Before launch

- [ ] **Deploy** and click through: hero CTA → app.bhaglabs.com (goes live
      only after the DNS task in `../pitchwala/TODO.md`).
- [ ] **Verify regional pricing display**: the landing shows ₹399/₹999 when
      the browser timezone is Asia/Kolkata and $9.99 otherwise (display-only
      heuristic; the app charges by server-side geolocation). Test with a
      timezone override or VPN.
- [ ] **Confirm GA**: property `G-TKN8T1T64M` is receiving events from
      landing + app + SIGINT, or split properties if you want per-product
      funnels.

## Marketing / branding (you mentioned LinkedIn + Instagram)

- [ ] Create the LinkedIn and Instagram pages; link them in the footer
      (`src/pages/Index.tsx` → `Foot`) and add `og:image` /
      `twitter:card` meta to `index.html` (there's no share image for the
      deck app yet — the SIGINT repo has a full share-asset set under
      `public/share/` to crib the format from).
- [ ] **Testimonials**: as founder quotes arrive, add them to the
      `TESTIMONIALS` array at the top of `src/pages/Index.tsx` (name,
      company, quote). The section shows an invitation card until then.
- [ ] Record or screenshot a sample generated deck for the "See a sample"
      CTA in the What's-inside section (it currently links to the app).

## Housekeeping

- [ ] README.md is still the Lovable boilerplate — write a real one.
- [ ] The old multi-product pages sit in `src/unreleased/` — delete when sure.
