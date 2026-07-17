---
target: dashboard kit
total_score: 24
p0_count: 1
p1_count: 2
timestamp: 2026-07-17T01-34-47Z
slug: ui-kits-dashboard-index-html
---
# Critique — ui_kits/dashboard/index.html (product register)

Method: dual-agent (A: design review · B: detector + browser evidence). Contrast DOM-measured.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Good live/incident states; delta miscoloring undermines |
| 2 | Match system/real world | 2 | P99 ↓12% / error-rate ↓ rendered in danger red — improvements shown as regressions |
| 3 | User control and freedom | 2 | Time-range tabs & routes cosmetic |
| 4 | Consistency and standards | 3 | Switch thumb `#fff`+rgba shadow breaks Token Contract (detector agrees, line 78) |
| 5 | Error prevention | 2 | "New deploy" has no confirm/pending pattern |
| 6 | Recognition rather than recall | 3 | Units everywhere; env context line above h1 excellent |
| 7 | Flexibility and efficiency | 2 | ⌘K hint painted on a non-focusable div |
| 8 | Aesthetic and minimalist design | 4 | Genuinely excellent density discipline |
| 9 | Error recovery | 2 | Incidents not actionable |
| 10 | Help and documentation | 1 | None |
| **Total** | | **24/40** | Acceptable |

## Anti-patterns verdict
Earned familiarity mostly achieved (Linear/Stripe-fluent user trusts the shell, table craft exemplary). Detector: 1 CLI advisory (`rgba(0,0,0,.25)` knob shadow, line 78), `cramped-padding` on services-table container. Three subtly-off details create the uncanny pause: inverted deltas, display-font stat values, painted search.

## Priority issues
- **[P0] Trend/delta color semantics inverted.** `Stat` colors by direction (down→danger), so improving latency/error metrics render red. Trust-breaking in an ops console. Fix: color by valence (`lowerIsBetter` flag per metric).
- **[P1] Search is a painted div.** Not focusable, ⌘K does nothing — the primary nav affordance is a picture. Fix: real input or command-palette-stub button with the existing focus ring.
- **[P1] Big stat values violate the Mono Numbers Rule.** `18.4`/`142`/`0.04` set in `--font-display` with mono units (hybrid). Fix: `--font-mono` values, matching the marketing stats strip.
- **[P2] Accent misuse on GD avatar.** Solid Signal Green on identity, not action/selection/live. Fix: neutral `--bg-3`/`--fg-2`.
- **[P2] Mobile clipped-invisible data.** 536px table clips inside `overflow:hidden` container at 390px (150px main pane). Fix: `overflow-x:auto` on the table card minimum.

## Persona red flags
- Alex: fake ⌘K; Live/24h/7d/30d tabs change no data; no column sort; incidents not clickable to service.
- Sam: search unreachable by Tab; Switch has `aria-label="toggle"` (no name/state — needs `role="switch"`+`aria-checked`); BarChart has zero text alternative; login labels not associated (`for`/`id`); tab row lacks `role="tablist"`/`aria-selected`.

## Minor
- Login right panel uses `--bg-inverse` → flips near-white in dark theme (same bug class as marketing terminal); `--accent` there ≈1.8:1.
- "Requests/min 18.4K" vs table sum ~47.6K — inconsistent demo data.
- Chart ramp via opacity on `--viz-1`: early bars fail non-text contrast (acceptable for trend viz).

## Questions
1. Green on chart-final-bar + Live badge + nav selection + avatar + primary button simultaneously — when does "signal" become "theme"?
2. Would this kit teach a consumer to build the empty dashboard, or only the flattering steady-state?
