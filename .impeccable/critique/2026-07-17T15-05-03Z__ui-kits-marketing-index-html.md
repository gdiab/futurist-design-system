---
target: marketing kit (run 2)
total_score: 26
p0_count: 1
p1_count: 1
timestamp: 2026-07-17T15-05-03Z
slug: ui-kits-marketing-index-html
---
# Critique — ui_kits/marketing/index.html (brand register) · run 2, post fix/delight/bolder passes

Method: dual-agent (A: design review · B: detector). Contrast DOM-measured.

## Score: 26/40 (was 28)
1:3 · 2:3 · 3:2 · 4:1 · 5:3 · 6:3 · 7:2 · 8:4 · 9:2 · 10:3. Cognitive load: 0/8 failures (best in repo). Heuristic 4 scored 1 due to the P0 below; heuristic 8 rose to 4 (hero panel, dotted leaders, hairline discipline "genuinely excellent").

## Verdict
Craft clears the brand bar (deploy readout without window chrome called "best-in-class handling of the fake-terminal trap"; spec-sheet pricing, registration marks, blueprint SVG distinctive; AA verified both themes; One Signal ≈1.1% of hero). Skeleton still reads hero→features→pricing in the anti-referenced order.

## Priority issues
- **[P0] Pricing CTAs rendered as unstyled native buttons** — `Btn` spread `{...r}` after `style`, so caller `style={{width:'100%'}}` replaced the whole style object (Arial, grey, 21px at the conversion moment). Pre-dated the bolder pass; missed by critique run 1. **FIXED immediately post-critique** (style destructured + merged; verified 40px/radius/accent in browser).
- **[P1] Mobile loses all navigation** — below 880px `.fz-nav-links` is display:none with no menu button; Product/Docs/Pricing/Changelog unreachable on phones.
- **[P2] No branded :focus-visible system** — `--accent-ring` token exists but no global focus rule; UA default rings only.
- **[P2] Eyebrow drift** — `//` kicker on hero, sections, AND all three pricing column heads; column heads don't need it.
- **[P3] 01–04 feature indices** — numbered-markers reflex, numbers carry no meaning.

## Detector
6 CLI findings: 4 are the console easter egg's hex colors/font (console-only, invisible UI — suspected intentional), 1 responsive h1 rem off-ramp, grid background rule (deliberate brand motif). In-page: cramped-padding on .fz-spec-wrap, grid-background on body. 69 inline colors all inside the sanctioned pinned panel. No overflow either theme.

## Notes
- All nav/footer links still href="#" no-ops; readout replay has no replay affordance; fz-live 2s pulse undocumented.
- Questions: what would the page look like if the console itself were the hero? Should the one-shot replay be actually live?
