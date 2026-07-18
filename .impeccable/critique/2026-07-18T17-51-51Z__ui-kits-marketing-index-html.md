---
target: ui_kits/marketing/index.html (post doc-sync + a11y bookend)
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-07-18T17-51-51Z
slug: ui-kits-marketing-index-html
---
Method: dual-agent (A: design review · B: detector/browser evidence). Contrast canvas-resolved and DOM-measured; one cross-check pass in the parent context.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live dots, `aria-pressed` toggle, footer status line; 7 demo links now give zero feedback on click (silent no-op replaced the scroll-yank) |
| 2 | Match System / Real World | 2 | "spans," "p99," "BYOK," "sha ↔ span," "rev 2.4.0 — edge deploys" unexplained — opaque outside SRE culture |
| 3 | User Control and Freedom | 3 | Skip link, Escape-close with focus return, no more scroll-yank; but 7 of 10 links do nothing at all |
| 4 | Consistency and Standards | 3 | CTA verbs unified ("Start free" ×5), mono numbers in prose; but every CTA is an inert `<button>` — navigational intent in button semantics |
| 5 | Error Prevention | 3 | Pricing absences explicit (`—` + aria-label); demo frame limits ceiling |
| 6 | Recognition Rather Than Recall | 3 | Mobile stack shows Team first (fixed); jargon still forces domain recall |
| 7 | Flexibility and Efficiency | 3 | Skip link, focus-trapped menu, anchor links with scroll-margin, theme toggle; no shortcuts beyond that |
| 8 | Aesthetic and Minimalist Design | 4 | The system's best surface, and now structurally its own |
| 9 | Error Recovery | 2 | Static fallback works offline (up from blank page) but preserves only hero + one-line plans summary; runtime Babel remains the taught pattern |
| 10 | Help and Documentation | 2 | "Read the docs" leads nowhere; no FAQ at the pricing decision |
| **Total** | | **28/40** | **Good — address weak areas, solid foundation** |

## Anti-Patterns Verdict

**LLM assessment:** The de-templating worked. The hero's primary object is an engineering-drawing pipeline SVG (registration marks, dimension line `<800MS P99`), not a fake terminal; stats are a quiet dotted-leader band on the light canvas, not a dark strip; pricing is a two-plan spec table with Enterprise as a hairline row, not the 3-tier trio. What remains template-adjacent is the section *order* (nav → dark hero → features → stats → pricing → footer) and the pinned-dark hero drench — the silhouette rhymes with the genre at squint distance, but the objects inside are genuinely distinguishable from the anti-reference.

**Deterministic scan:** exit 2, 12 findings — 7 real advisories (off-ramp sizes `2.25rem` mobile-H1 override, `16px` wordmark, `62px` H1, `12px` mono meta ×3; `border-radius:1px` glyph inner square; `oklch(0.800 0.170 159)` = pinned dark `--accent`, the sanctioned panel exception), 5 false positives (console-easter-egg `%c` styling strings, incl. a mis-tokenized `SFMono-Regular`). In-page overlay ran: 2 findings — `cramped-padding` on `.fz-spec-wrap` (table supplies its own cell padding; arguable), `codex-grid-background` on body (the deliberate blueprint grid backdrop; sanctioned).

**Cross-check corrections (parent context):** B reported dark-theme footer links failing AA at 3.61:1 — disproven; frozen `a { transition: color }` in a backgrounded tab. Real value with transition flushed: 5.66:1, passes. B's "2 buttons missing type" came from its own injected overlay; clean page has 0. All measured text passes AA in both themes, including the previously-failing recommended pricing column (7.12:1 light / 6.30:1 dark).

## Overall Impression

The best-machined surface in the system, and — after the de-template arc — finally its own page rather than a beautiful instance of the genre. The pricing moment is now honest at every breakpoint and theme. The remaining gap is interaction honesty (inert CTAs and silent demo links), a signature animation that plays to an empty room, and a jargon wall in front of the value proposition.

## What's Working

1. **The pipeline blueprint hero** — registration marks, hairline boxes, a real dimension line, `role="img"` with a descriptive label. The anti-reference's fake-terminal replaced by an object with a point of view.
2. **Accessibility follow-through** — skip link, focus-trapped mobile menu with Escape-and-restore, `aria-pressed` toggle, `type="button"` everywhere, table header `scope`s, 44px touch targets at 375px. Every prior a11y flag closed and verified.
3. **Mobile pricing stack** — recommended plan first, specs as dotted-leader status lines, desktop table `display:none`'d so no AT duplication. An adaptation, not a shrink.

## Priority Issues

- **[P1] The readout replay animates before anyone can see it.** `DeployReadout` starts its ~1.9s replay on mount, but the component sits below the fold — the page's most delightful micro-moment plays to an empty room. **Fix:** gate the replay on an `IntersectionObserver` (fire once at ~40% visibility), keeping reduced-motion and static fallbacks. Command: /impeccable animate
- **[P1] Navigational CTAs are inert `<button>` elements.** "Start free" (×5), "Read the docs," "Contact sales" have no href, no handler, no feedback — and a copy-paste recipe *teaches* buttons-as-links. **Fix:** render CTAs as anchor-styled links, reserving `<button>` for the toggle and menu. Command: /impeccable harden
- **[P2] The static fallback is a different, thinner page.** Hero + one-line plans only; no blueprint, features, or pricing table; sync is enforced by a comment. **Fix:** include the pipeline SVG (already static markup) and consider generating the fallback from compiled output. Command: /impeccable harden
- **[P2] Jargon has no on-ramp.** "spans," "p99," "BYOK," "sha ↔ span" gate the entire value proposition to insiders. **Fix:** one plain-language clause per feature body, in the instrument-panel voice. Command: /impeccable clarify
- **[P3] Blueprint SVG microlabels shrink below legibility on mobile.** 9-unit labels render ~7.7px in the 343px column at 375px. **Fix:** bump in-SVG label size to 10–11 units. Command: /impeccable adapt

## Persona Red Flags

**Jordan (first-timer):** `// telemetry platform · rev 2.4.0 — edge deploys` is insider-speak before the H1; "sha ↔ span" is a rebus; "BYOK" undefined.

**Riley (stress-tester):** 7 silent no-op links; "Start free" pressed five times, nothing happens anywhere; refreshes to re-watch the deploy replay and it's already over; SOC 2 claim links to nothing.

**Casey (distracted mobile):** pricing now solid (stack, Team first, 44px targets, no overflow — iframe-verified at 375px); remaining flags are the ~7.7px diagram labels and the only above-fold docs path being a dead button.

## Minor Observations

- All prior contrast P1s re-measured and passing; `--fg-4` at 2.53:1 confined to `aria-hidden` dotted leaders — correct use.
- 10 icon SVGs lack accessible names; all sit inside parents that provide names or text, so no AT failure, but `aria-hidden` on the `Ic` primitive would be cleaner.
- The `dead()` handler is a thoughtful demo convention but makes dead links indistinguishable from broken ones.
- Signal-green area ≈2.7% of hero viewport — inside the One Signal Rule.
- Console easter egg still uses hardcoded hex (console-only, sanctioned).

## Questions to Consider

1. The replay, blinking cursor, and live sparkline all perform for nobody — they run at load, below the fold, once. Should "quiet until something matters" extend to *when* motion fires, not just how fast?
2. The static fallback proves the page can say its piece in ~30 lines of HTML. What is the runtime React+Babel stack buying a *recipe* whose stated purpose is copy-paste portability?
3. Now that the IA has broken formation, the last generic artifact is the drenched dark hero itself. Is pinning `--bg-inverse` a brand signature, or is a light-canvas blueprint hero the actually-contrarian move for 2026?

## Status of previously-flagged items (vs 2026-07-18T01-16-07Z)

| Item | Status |
|---|---|
| [P1] Dark AA failure, recommended pricing column | **Fixed** (7.12:1 / 6.30:1) |
| [P1] Mobile pricing hides Team plan | **Fixed** (stack ≤560px, Team first) |
| [P2] IA is the anti-reference | **Substantially fixed** (section order still genre-standard) |
| [P2] unpkg single point of failure | **Mitigated** (static fallback; runtime Babel remains) |
| [P3] CTA verbs / copy nits | **Fixed** |
| Skip link, aria-pressed, type="button", focus trap, dead-link yank | **All fixed** (dead links now silent — new P1) |
