---
target: news kit (run 2)
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-07-17T15-05-05Z
slug: ui-kits-news-index-html
---
# Critique — ui_kits/news (index + story; brand/editorial) · run 2, post fix/delight passes

Method: dual-agent (A: design review · B: detector). Contrast DOM-measured.

## Score: 28/40 (was 24) — best in repo this run
1:3 · 2:4 · 3:3 · 4:3 · 5:2 · 6:4 · 7:2 · 8:4 · 9:1 · 10:2. Cognitive load: 1/8 (cards carry 11+ elements each).

## Verdict
"Least template-shaped and most convincingly designed-by-someone-with-taste." RollScore called the best micro-interaction in the system (mechanical, layout-stable, reduced-motion-safe, reused everywhere). Story code block executes the pinned-panel exception exactly as written (15.6:1 both themes). Slop risk is behavioral, not visual.

## Priority issues
- **[P1] Topic filter doesn't filter** — topic state only feeds the eyebrow string; stories.map is unfiltered. Selection that visibly responds but changes nothing reads as a bug. Fix: filter by s.topic + design the empty state it will need.
- **[P1] Fake search** — styled div, not focusable, hidden below 520px with no fallback. Dashboard already has the real pattern (.hdr-search); reuse or remove.
- **[P2] Feed tabs + Load more inert** — at minimum re-sort seed data per tab.
- **[P2] Vote/collapse semantics** — no aria-label/aria-pressed on votes; no aria-expanded on [–]; composer unlabeled.
- **[P3] // Quote kicker on the blockquote** — kicker creeping into content voice; hairline alone was enough.

## Detector
Zero CLI findings. In-page: 1 cramped-padding; 8 line-length hits on story (article ~88ch, comments ~99–103ch — the deferred P2 from run 1, still open). No overflow; clean mobile collapse at 390/768 (search hidden <520 is the one gap).

## Notes
- Hit targets 34px (44px mobile ideal); trending +38 green = borderline signal spend; no empty/error states anywhere.
- Question: why isn't RollScore the system-level number primitive (dashboard's walking req/min could use it)?
