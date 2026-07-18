---
target: marketing kit (re-run)
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-07-18T01-16-07Z
slug: ui-kits-marketing-index-html
---
Method: dual-agent (A: design review sub-agent · B: detector/browser sub-agent)

# Critique — ui_kits/marketing/index.html (2026-07-17)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live dots, footer status line, instant theme toggle; readout replay invisible if JS/CDN fails |
| 2 | Match System / Real World | 2 | "spans," "p99," "BYOK," "sha ↔ span" unexplained; opaque to non-SREs |
| 3 | User Control and Freedom | 2 | All 9 nav/footer links are `href="#"` (yank to top); no skip link |
| 4 | Consistency and Standards | 3 | Strong internal grammar; three different CTA verbs; "type II" vs "Type II" |
| 5 | Error Prevention | 3 | Pricing absences explicit (`—` + aria-label) |
| 6 | Recognition Rather Than Recall | 2 | Mobile pricing hides the recommended column entirely |
| 7 | Flexibility and Efficiency | 2 | Theme toggle + Escape-close; no skip link, theme button has no state semantics |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely excellent — the system's best surface |
| 9 | Error Recovery | 1 | Runtime Babel + React from unpkg; offline = blank white page |
| 10 | Help and Documentation | 2 | "Read the docs" CTA exists but dead; no FAQ at pricing |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

**Surface: clean. Skeleton: the template the brief forbids.**

LLM assessment: no banned patterns fire — no side-stripes, gradient text, glassmorphism, identical card grids; eyebrows appear only twice; no numbered-section reflex; no overflow at 1536px or 375px (verified via scrollWidth). Execution is unusually human (deploy readout without window chrome, warning row holding a beat, registration marks, dimension-line SVG, pricing as spec table). But the information architecture is section-for-section the "generic 2026 AI dev-tool landing page" anti-reference from PRODUCT.md: sticky nav → dark hero + terminal-ish readout → stats strip → 4 features → 3-tier pricing (middle recommended) → footer. The grammar is distinguishable; the IA is not.

Deterministic scan: 6 findings (1 warning, 5 advisory), all in the kit file. Five (lines 416–419: SFMono-Regular font, 12px size, 3 hex colors) are inside the `console.log('%c…')` dev-console easter egg — false positives for rendered UI. One real: line 68 `font-size: 2.25rem !important` mobile h1 downscale off the DESIGN.md ramp (advisory). In-page runtime detector: **0 findings, 0 overlays** — agreeing with the LLM's "surface clean" verdict. No user-visible overlay exists (nothing to render); the inspection tab was left open but the live server has been stopped.

## Overall Impression

The best-machined surface in the system: instrument-panel identity fully realized, semantically correct HTML, exemplary reduced-motion handling, verified-passing pinned-panel contrast. The single biggest opportunity is structural, not cosmetic: the page is a beautiful instance of the modal dev-tool landing page it explicitly positions against, and it carries two AA/mobile failures at the exact moment of purchase decision (pricing).

## What's Working

1. **The deploy readout** (lines 211–261): the banned fake-terminal genuinely re-invented — no window chrome, mechanical visibility-swap replay, static-transcript fallback for reduced-motion/no-JS, mono timings right-aligned.
2. **Pricing as spec sheet** (lines 332–391): real `<table>` with scope attributes, mono values, uppercase mono row labels — structurally differentiated from the card-trio template and semantically correct.
3. **Pipeline blueprint SVG** (lines 265–294): registration marks, dimension line `<800MS P99`, tokenized strokes, proper `role="img"` — signature grammar earning its place.

## Priority Issues

- **[P1] Dark-theme AA failure on the recommended pricing column.** Measured: `--fg-3` on `--accent-subtle` = 3.72:1 dark, 4.44:1 light — fails the system's own both-themes gate exactly on the emphasized plan. **Fix:** labels on `--accent-subtle` cells use `--fg-2` or `--accent-subtle-fg` (7.85:1 dark / 5.54:1 light). Command: /impeccable polish
- **[P1] Mobile pricing hides the recommended plan.** At 375px the Team column starts at x=355 in a 342px scroll container — 100% off-screen, no scroll affordance. **Fix:** stack plans vertically below ~560px (Team first), or scroll-shadow hint + initial scroll to Team. Command: /impeccable adapt
- **[P2] The IA is the anti-reference.** Canonical hero/stats/features/3-tier order. **Fix candidates:** promote the pipeline diagram into the hero and demote the readout; break stats out of the hero band; pricing as two plans + hairline enterprise row. Command: /impeccable shape
- **[P2] Single point of failure: runtime Babel + React from unpkg.** No network → blank page; also teaches consumers a fragile pattern. **Fix:** precompile via existing `scripts/build-bundle.js` or ship static HTML + small enhancement script. Command: /impeccable harden
- **[P3] CTA verb proliferation + copy nits.** "Start free" / "Deploy in 2 minutes" / "Get started"; "SOC 2 type II" casing; headline says "per seat," price reads `$40/mo`; prose numbers ("under 800ms p99") set in Atkinson, breaching the Mono Numbers Rule. Command: /impeccable clarify

## Persona Red Flags

**Jordan (first-timer):** eyebrow `// telemetry platform rev 2.4.0 — edge deploys` is insider-speak before the H1; "spans," "p99," "BYOK," "sha ↔ span" never explained; "Dense by default" feature's metric is "13px base grid" — design-system meta-copy leaking into the fictional product's value prop. Jordan can't tell what he'd be buying.

**Riley (stress-tester):** 9 dead `href="#"` links that yank scroll to top; no page behind the "SOC 2" claim; $40/mo vs "per seat" ambiguity; theme button lacks `aria-pressed`; 8 buttons missing `type="button"`.

**Casey (distracted mobile):** recommended plan invisible in the pricing scroller (P1 above). Otherwise solid: 44px+ touch targets, Escape closes and restores focus, no horizontal overflow (verified in 375px iframe).

## Minor Observations

- Global `:focus-visible` 3px accent ring confirmed (tokens/base.css:48); inline styles don't clobber it.
- `--fg-4` "—" glyphs at 2.53:1 light carry meaning visually; consider `--fg-3`.
- Reduced-motion handling exemplary (global 0.01ms guard + JS matchMedia gate on the replay).
- Pinned-panel contrast all passes (5.46:1 muted, 6.95:1 success, 9.29:1 warning).
- Mobile menu lacks a focus trap (tab escapes behind the open panel).
- Dark-theme recommended-column tint is the closest thing to a One Signal Rule breach.
- Console easter egg uses hardcoded hex — console-only, sanctioned, but off-token (matches the 5 detector false positives).

## Questions to Consider

1. If you deleted the copy and squinted, could anyone tell this apart from Grafana Cloud's or Axiom's landing page — is "distinctiveness in brand" achieved by grammar alone, or does the IA need to break formation?
2. Why does the most animated, highest-contrast object on the page demo a *fictional* deploy instead of the product's actual console density — the thing being sold?
3. A spec-sheet pricing table invites feature-parity comparison, the frame where a $0 competitor wins. Should the Team column argue per-seat value instead of parity checkmarks?
