# AGENTS.md — how to work with Futurist

You are building with **Futurist**: a minimal, data-dense, precise/technical design system.
One line: cool low-chroma neutrals · one signal-green accent (`#2CDE85`) · functional data palette ·
Atkinson Hyperlegible Next UI / IBM Plex Mono data · 4px grid · small radii · quick mechanical
motion, no bounce · light + dark via `[data-theme]`. This file tells you where to look, what to do
when the system doesn't cover your case, and how new decisions get documented.

## Find what you need

| You need… | Go to |
|---|---|
| Color tokens, contrast, theming | `tokens/colors.css` (light + dark), `guidelines/color-*.html` specimens, `DESIGN.md` §2 Colors (named rules) |
| Type scale, weights, mono usage | `tokens/typography.css`, `guidelines/type-*.html`, `DESIGN.md` §3 Typography |
| Spacing, radius, elevation | `tokens/spacing.css` / `radius.css` / `elevation.css`, matching `guidelines/*.html`, `DESIGN.md` §4 Elevation |
| A primitive (button, input, table, dialog…) | `components/<category>/` — the `.d.ts` + `.prompt.md` pair is the spec; `.jsx` is the implementation. Inventory: actions (Button, IconButton) · forms (Input, Textarea, Select, Checkbox, Switch) · data (Card, Stat, Badge, Tag, Table) · navigation (Tabs) · overlays (Tooltip, Menu, Popover, Drawer) · feedback (Dialog, Toast) |
| A full-page recipe (dashboard, marketing, news, dataviz, command palette, settings, mobile, deck, docs, overlays, states, kitchen-sink) | `ui_kits/<kit>/index.html` — self-contained, copy-paste; the dashboard and marketing kits also document their patterns in a `README.md` |
| Writing copy (voice, casing, numbers, eyebrows) | `readme.md` § CONTENT FUNDAMENTALS |
| Visual rules in prose (color, type, motion, do's/don'ts) | `readme.md` § VISUAL FOUNDATIONS, `DESIGN.md` §6 Do's and Don'ts |
| Icons | `readme.md` § ICONOGRAPHY (thin geometric line icons; Lucide in production) |
| Brand / product context | `PRODUCT.md`, `guidelines/brand-wordmark.html` |
| Hex fallbacks for non-oklch consumers (email, images) | `tokens/colors.hex.json` |
| Single CSS entry point to link | `styles.css` (imports all of `tokens/`) |
| Prior edge-case decisions | `guidelines/decisions.log.md` |

**Precedence:** `components/` is the source of truth. `ui_kits/` pages deliberately re-implement
primitives inline; when a kit and a component spec disagree, the component's `.d.ts`/`.prompt.md` wins.

## Known traps

- **Accent is never body text.** Use `--accent-subtle-fg` for accent-colored text/links; solid
  `--accent` only as a fill, with `--accent-fg` (dark ink) on top.
- **Fallback sync.** Every React kit page ships a static token-styled fallback inside `#root`.
  Copy or structural edits must touch both the React components and the fallback block.
- **Reduced motion.** The global guard collapses `animation-duration` but NOT `animation-delay` —
  staggered/delight animation classes must live inside
  `@media (prefers-reduced-motion: no-preference)`, so reduced motion gets the final state.
- **Kits are recipes, not a library.** Don't import from `ui_kits/`; copy the pattern or use
  `components/`.

## When the system doesn't cover it (derivation protocol)

You need something with no component, kit pattern, or named rule (a date picker, a dropzone,
a diff view…). Do not invent freely and do not stop to ask — derive:

1. **Search first.** Check `components/`, `ui_kits/`, and `guidelines/decisions.log.md`.
   The case may already be decided; a logged decision points to its promoted home.
2. **Find nearest neighbors.** Pick 1–3 existing patterns closest in *role* (a dropzone's
   neighbors: file-ish inputs in `components/forms/`, empty states in `ui_kits/states/`, Card).
3. **Decompose the neighbors into their token decisions** — surface level (`--bg-*`), border
   treatment, radius step, spacing rhythm, type roles (what's mono, what's sentence-case UI text),
   state/semantic colors — and reuse those decisions for the new thing. If the new thing is
   composite (e.g. a trigger plus a floating panel), map each neighbor's decisions onto the
   corresponding part rather than flattening them into one set.
   **Hard rule: no new raw values. Only existing tokens.**
4. **Run the invariant checklist:** numbers/labels in mono with units · sentence case · base UI
   text 0.875rem · 4px grid · works in both themes · visible focus states · honors reduced motion ·
   no emoji · quick mechanical motion, no bounce.
5. **Self-critique.** Judge the result as a reviewer: would this be mistaken for a native
   Futurist component sitting next to the kits? If not, return to step 2 with a better neighbor.
6. **Log and promote** — see below. A derivation is not finished until it's documented.

**Stop-and-ask threshold:** if a correct derivation would require breaking an invariant in step 4
or minting a new token, stop and surface the conflict to the user instead of building.

## Documenting new decisions (log + promote)

Every derivation from the protocol above gets recorded, in the same session that built it:

1. **Log provenance.** Append an entry at the TOP of `guidelines/decisions.log.md` using the
   template in that file: date, project/context that needed it, what was missing, what it was
   derived from, the decision, and where it was promoted to.
2. **Promote immediately.** Write the pattern into its canonical home — whichever fits:
   a new component spec in `components/<category>/` (`.d.ts` + `.prompt.md` + `.jsx`), a named
   rule in `DESIGN.md`, or an addition to `readme.md`. Pick by kind: a reusable UI element goes to `components/<category>/`; a visual or behavioral rule to `DESIGN.md`; voice, copy, or process guidance to `readme.md`. The log entry records which.
3. **Review the promotion.** Run an impeccable-style critique of the promoted addition
   (the `/impeccable` skill if available, otherwise a rigorous self-review against `DESIGN.md`
   §6 and the invariant checklist) before committing. A failed review means revise the
   promotion — never skip it.

The log is **provenance, never canon**: consult it in protocol step 1, but the promoted doc is
authoritative. If a log entry and its promoted doc disagree, the promoted doc wins.
