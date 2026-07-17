---
target: dashboard kit (run 2)
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-07-17T15-05-03Z
slug: ui-kits-dashboard-index-html
---
# Critique — ui_kits/dashboard/index.html (product register) · run 2, post fix/delight passes

Method: dual-agent (A: design review · B: detector). Contrast DOM-measured.

## Score: 26/40 (was 24)
1:3 · 2:4 · 3:2 · 4:3 · 5:2 · 6:3 · 7:3 · 8:4 · 9:1 · 10:1. Cognitive load: 1/8 (delta units ambiguous). Heuristic 2 rose to 4 (valence-aware deltas "a detail most real products get wrong"); 7 rose (⌘K genuinely works).

## Verdict
Earns familiarity at first paint; motion engineering praised (token-timed bar entry, visibility pause, live reduced-motion listener "better than most shipped products"). One Signal held (~1.7%). The failure is one click deep: interactivity is a facade.

## Priority issues
- **[P1] Inert time-range tabs** — Live/24h/7d/30d render identical data; biggest trust breach for the register. Fix: seeded datasets per range.
- **[P1] Chart invisible to screen readers** — bare divs, no role/label/text alternative. Fix: role="img" + generated aria-label or visually-hidden table.
- **[P2] Switch a11y + token breach** — aria-label="toggle", no role="switch"/aria-checked; knob hard-codes #fff + rgba shadow outside any pinned panel.
- **[P2] No responsive strategy** — fixed sidebar grid leaves ~170px content at 390px; collapse sidebar ≤768px.
- **[P3] Delta copy** — error-rate delta unitless; uptime delta slot shows "30d" with flat trend.

## Notes
- Latent: login screen's --bg-inverse panel unpinned (flips near-white in dark; accent-on-light would fail) — the pinned-panel exception case.
- Avatar still solid accent green (decorative spend). Tabs lack tablist semantics; no aria-current on nav; no skip link.
- Detector: transition:height warning (the live chart tick — intentional, token-timed), knob rgba, 0.8125rem off-ramp advisory, single-font warning (intentional).
- Question: "The chart has no axes, scale, or hover values — would an operator accept a gauge with no markings?"
