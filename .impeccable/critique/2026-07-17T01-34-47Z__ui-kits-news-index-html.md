---
target: news kit
total_score: 24
p0_count: 0
p1_count: 3
timestamp: 2026-07-17T01-34-47Z
slug: ui-kits-news-index-html
---
# Critique — ui_kits/news (index.html + story.html; brand/editorial register)

Method: dual-agent (A: design review · B: detector + browser evidence). Contrast DOM-measured.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | "updated 30s ago", instant vote/save feedback |
| 2 | Match system/real world | 3 | HN idiom faithful; Ask/Show unexplained for outsiders |
| 3 | User control and freedom | 3 | Real view toggle, vote undo, thread collapse |
| 4 | Consistency and standards | 3 | Story `pre` flips light in dark theme |
| 5 | Error prevention | 2 | Composer no validation; Subscribe collects no email |
| 6 | Recognition rather than recall | 3 | Topic counts, read times, ranks visible |
| 7 | Flexibility and efficiency | 2 | Painted search; no keyboard nav through stories |
| 8 | Aesthetic and minimalist design | 2 | Cards view = banned identical-card grid with placeholder thumbnails, as DEFAULT |
| 9 | Error recovery | 2 | Load more inert |
| 10 | Help and documentation | 1 | None |
| **Total** | | **24/40** | Acceptable |

## Anti-patterns verdict
Story page is the best surface in the repo (pull-quote hairline+eyebrow, mono engagement bar, believable technical comment thread). Cards view walks into the named identical-card-grid ban and leads with diagonal-striped "THUMBNAIL · TOPIC" placeholders. Detector: `repeating-stripes-gradient` on feed body, `cramped-padding` on view toggle; story.html has 8 `line-length` hits — article ¶s ~88ch, comment ¶s ~99–103ch (over the 65–75ch cap; the 680px measure is wider than it reads).

## Priority issues
- **[P1] Story code block inverts in dark theme.** `pre` uses `--bg-inverse`/`--fg-inverse` → near-white panel (oklch 0.96) inside the dark article. Fix: pin the code panel dark in both themes (share the terminal's pinned constants) or use `--bg-3`+border.
- **[P1] No responsive floor.** 443px overflow at 390px; 65px overflow even at 768px (fixed `1fr 260px` grid + 1080 maxWidth). Story main column measures 68px at 390px against fixed 220px sidebar. Fix: collapse sidebars below ~900px, wrap the header.
- **[P1] Cards view: banned pattern as default.** Fix: make List the default (it is the distinctive view), or break the grid (lead story spans 2 cols; drop placeholder thumbnails entirely).
- **[P2] Fake search + inert Load more.** Work minimally or don't pretend.
- **[P2] Vote/collapse buttons lack accessible names.** Vote announces "842"; collapse "[–]". Fix: `aria-label`, `aria-expanded`.
- **[P2] Line length over cap (detector).** Article ~88ch, comments ~99–103ch. Tighten the prose measure (~62–68ch actual) and comment column.

## Persona red flags
- Jordan: Ask/Show insider vocab; Trending "+38" has no legend; placeholders look like a broken image pipeline, set in `--fg-4` (2.42:1).
- Riley: tab × topic × view compose invisibly (`// Top stories · Top` duplicates); Subscribe "subscribes" without an email field.
- Casey: feed 833px content at 390px viewport; story column one-word-per-line. Total failure.

## Minor
- Digest CTA: legal accent block, but green avatars on every card/comment spend accent on identity, not signal (4.3% coverage — within 10% but off-rule).
- `fontSize:13.5/15.5` off the type-scale tokens.
- Story "Points" stat updates live with vote — nice coherence.

## Questions
1. What would a "front page as instrument panel" look like, instead of front page as Pinterest?
2. Are avatars a "live state"? If not, what's the system's neutral avatar recipe?
