# Polish pass — 2026-07-17 (from run-2 critiques)

Quality bar: flagship — these kits are the design system's own reference surfaces.

## System (root-cause fixes)
- [x] Add `--control-knob` token (colors.css, both themes) — knob color was a missing token, hard-coded `#fff` in Switch.jsx and dashboard kit
- [x] Switch.jsx: consume `--control-knob` + hairline (border-2) instead of rgba shadow; rebuilt `_ds_bundle.js`

## Dashboard kit
- [x] [P1] Time-range tabs render seeded per-range chart + stats; badge shows "Nh window" instead of claiming Live on static ranges
- [x] [P1] Chart role="img" + generated aria-label (samples/low/high/latest)
- [x] [P2] Switch: role="switch" + aria-checked + tokenized knob
- [x] [P2] Responsive: sidebar → horizontal bar ≤768px, chart 1-col, stats 2-col; ⌘K hint hidden ≤640px; no h-scroll at 390
- [x] [P3] Delta copy: error-rate deltas in pp; uptime "30d window"
- [x] Latent: login panel pinned to dark-token literals; avatar off accent; tablist + arrow keys; aria-current on nav; skip link

## Marketing kit
- [x] [P1] Mobile menu ≤880px: 44px targets, aria-expanded/controls, Escape closes + refocuses button; Sign in folded in ≤560px
- [x] [P2] :focus-visible — verified working (tokens/base.css global rule renders the 3px accent ring on keyboard focus; critique finding was stale)
- [x] [P2] Dropped `//` prefix from pricing column heads
- [x] [P3] 01–04 feature indices → stroke icons (zap/gauge/shield/git)

## News kit (index + story)
- [x] [P1] Topic filter filters (Show HN maps to tag); eyebrow carries live count
- [x] [P1] Real search input (filters title/dek/author/src/topic; stays visible <520px at reduced width)
- [x] [P2] Tabs: New sorts by recency, Best by points, Ask/Show filter by tag — Ask deliberately exercises the empty state; Load more appends 4 stories then "end of feed ···" leader line
- [x] [P2] Vote aria-pressed + live labels; collapse aria-expanded; composer aria-label; save aria-pressed
- [x] [P3] `// Quote` kicker removed
- [x] Comment line length ≤70ch; avatars neutral (One Signal); OP badge marks author replies

## Verification (browser, http.server :8749)
- [x] Dashboard: range switching produces distinct stats/chart/labels; tablist roving focus; knob token resolves both themes; 390/760px iframe probes — no h-scroll, correct collapses
- [x] Marketing: 390px probe — menu button shows, panel lists all links at 44px, Escape closes; pricing heads clean; icons render
- [x] News: 8→2 on Systems filter, search "postgres"→1, Ask→empty state→reset, load more 8→12 + end line, New/Best orderings correct
- [x] Story: kicker gone, 2 OP badges, collapse/vote aria toggle live, comment ~612px (70ch), neutral avatars
- [x] Console: no errors on any page; forms.card.html (bundle consumer) renders tokenized Switch

## Review
Root causes named per the polish flow: knob color was a **missing token** (now `--control-knob`); news search/dashboard tabs were **one-off facades** (now real implementations); the marketing focus-ring P2 was **stale** — the system rule already delivers it. One residual: `RANGES` data lives only in the dashboard kit (fine for a self-contained recipe). Deferred: RollScore promotion to a system-level primitive (critique run-2 open question — a `bolder`/`extract` decision, not polish).
