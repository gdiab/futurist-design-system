---
target: marketing kit
total_score: 28
p0_count: 1
p1_count: 2
timestamp: 2026-07-17T01-34-47Z
slug: ui-kits-marketing-index-html
---
# Critique — ui_kits/marketing/index.html (brand register)

Method: dual-agent (A: design review · B: detector + browser evidence). Contrast DOM-measured, not eyeballed.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 4 | Live-dot/telemetry grammar; footer status line excellent |
| 2 | Match system/real world | 3 | Dev-native copy; "spans/s" assumes o11y literacy |
| 3 | User control and freedom | 2 | All links href="#"; no skip link |
| 4 | Consistency and standards | 3 | Strong grammar, but `//` eyebrow ×11 becomes scaffolding |
| 5 | Error prevention | 3 | N/A-lean |
| 6 | Recognition rather than recall | 3 | Pricing scannable |
| 7 | Flexibility and efficiency | 2 | None; acceptable for register |
| 8 | Aesthetic and minimalist design | 3 | Docked for eyebrow repetition + stats-strip filler |
| 9 | Error recovery | 2 | Dead-end `#` links |
| 10 | Help and documentation | 3 | "Read the docs" secondary CTA |
| **Total** | | **28/40** | Good |

## Anti-patterns verdict
Component-level distinctive (blueprint pipeline SVG, dotted leaders, terminal warning row), skeleton-level template: version-tag eyebrow → fake terminal hero → 4-stat strip → 3-tier pricing IS the system's own named anti-reference. Detector: `gpt-thin-border-wide-shadow` on the terminal mockup, `codex-grid-background` on body; 8 inline non-token colors, all inside the sanctioned pinned-dark terminal.

## Priority issues
- **[P0] Terminal text fails AA in light theme.** `--fg-3` rows = 3.48:1 and `--success` checks = 3.49:1 against pinned dark TERM_BG. The exception pins the background but consumes theme-relative foregrounds. Fix: pin the terminal's foreground palette (dark-theme values) too.
- **[P1] Zero responsive behavior.** 241px horizontal overflow at 390px (nav, Start free at right=631, terminal). No media queries; fixed `1.1fr 1fr` grids. Fix: one ~768px breakpoint — hero to 1 col, nav condensed, stats 4→2.
- **[P1] Skeleton is the named anti-reference.** Fix without demolition: cut the stats strip (repeats hero stat rows), let the pipeline diagram carry proof.
- **[P2] `//` eyebrow + 01–04 numbered markers as reflex.** ~11 uses. Reserve `//` for the 3 section openers; stat/plan labels drop slashes.
- **[P3] Feature index numbers in `--fg-4`** (2.42:1). Bump to `--fg-3`.

## Persona red flags
- Riley: all nav/pricing/footer links `href="#"` scroll-jump to top; two independent theme-state owners can desync.
- Casey: hard fail — 631px content width at 390px; hero CTA off-screen.
- Jordan: "sha ↔ span" assumes observability fluency.

## Minor
- `fz-live` pulse 2s is outside the 90–240ms band (ambient live-state; undocumented territory).
- "4.2M" repeated verbatim hero + stats strip; ingest strip's "4.19M/s" is the better verisimilitude.
- Detector line-length engine: clean here.

## Questions
1. If the terminal hero were deleted, would the page still be recognizably Futurist — and why is the most template-shaped element the largest?
2. Is there a hairline-and-dotted-leader-native pricing presentation (spec-sheet table) no competitor could ship?
