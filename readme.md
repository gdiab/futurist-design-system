# Futurist — Design System

A bespoke, portable design system for **minimal, data-dense, precise/technical** interfaces:
SaaS dashboards, developer tools, marketing sites, docs, decks, and mobile apps. Built to be
reused across every project and taken along as an Agent Skill.

> **Origin:** Created from scratch (no external brand or codebase). Art direction distilled from
> the owner's stated references — the engineering-forward end of Zed, IBM/Carbon, Grafana, Stripe,
> HashiCorp, Cursor, and the editorial precision of Wired / Asterisk. There is **no supplied logo**;
> the brand is set in type with a small square glyph placeholder (see `guidelines/brand-wordmark.html`).

---

## The system in one line
Cool low-chroma neutrals · one signal-green accent (`#2CDE85`) · a functional data palette · **Atkinson
Hyperlegible Next** UI & display / **IBM Plex Mono** data · tight 4px grid · small radii · restrained
shadows · quick mechanical motion. Light **and** dark, driven by `[data-theme]`.

---

## CONTENT FUNDAMENTALS
How copy is written across Futurist surfaces.

- **Voice:** technical and direct. State the fact, then stop. Confidence without hype.
- **Person:** address the user as *you*; the product speaks as *we* only when necessary. Prefer
  imperative for actions ("Deploy in 2 minutes", "Read the docs").
- **Casing:** sentence case for headings and buttons ("New deploy", not "New Deploy"). `UPPERCASE`
  is reserved for **mono eyebrows / labels** with wide tracking ("PRODUCTION · US-EAST-1",
  "P99 LATENCY"). Never all-caps a full sentence.
- **Numbers are first-class.** Lead with the metric. Always pair a figure with its unit in mono
  (`142ms`, `18.4K`, `99.98%`). Show precision, not vibes.
- **Eyebrows use a `//` prefix** in marketing contexts ("// Why Futurist", "// Pricing") — a nod to
  code comments.
- **Accent is green, not for text.** The accent is a light, saturated green — never set body copy
  in solid `--accent`. Use `--accent-subtle-fg` for accent-colored text/links; reserve solid
  `--accent` for fills, paired with `--accent-fg` (dark ink) for text on top.
- **Tone examples:**
  - Hero: *"Ship telemetry that keeps up with you."*
  - Feature: *"Built for precision, not dashboards-as-decoration."*
  - Empty/again-direct: *"Priced per seat, not per surprise."*
  - System status: *"status .......... operational"* (monospaced, dotted-leader alignment).
- **No emoji.** No exclamation-point marketing. No "🚀 supercharge". Icons carry emphasis, not punctuation.
- **Error/status copy** is short and specific: "Required field", "media-encode down", "3 tests failed on main."

---

## VISUAL FOUNDATIONS

**Color.** Neutrals are cool grey with near-zero chroma (authored in oklch). Light mode is white
surfaces on a faintly-tinted canvas; dark mode is a deep blue-grey (`bg-0 ≈ oklch(0.175 0.008 262)`)
with surfaces stepping *up* in lightness. One **signal-green accent** (`--accent`, ~`#2CDE85`,
oklch hue 159°) carries all primary emphasis — on green, `--accent-fg` is a dark ink, not white.
A **functional palette** — success (emerald 168°, deliberately cooler than the accent so the two
don't collide), warning (amber 75°), danger (red 27°), info (blue 240°) — is used only for
status/data, each with a `-subtle` tinted background pair. Six `--viz-*` series exist for charts.

**Type.** Two coherent, high-legibility families:
- `--font-display` / `--font-sans` **Atkinson Hyperlegible Next** — headings, UI, and all body. A
  high-legibility face with distinctive letterforms (open apertures, unambiguous `a`/`g`/`I`/`l`/`1`).
  Use the **Next** release specifically — it's the variable version that supports the full weight
  range (400/500/600/700); the original Atkinson Hyperlegible ships only 400/700 and loses the
  mid-weight step. Base size **0.875rem (14px)** for density; 0.8125rem (13px) in tables/controls.
- `--font-mono` **IBM Plex Mono** — data, code, metrics, eyebrows, table numerics, keyboard hints.
Scale runs 0.6875 → 3.875rem (11 → 62px at the 16px root; compact). Sizes are rem-based so they
respect user browser font-size preferences. Numeric values and labels almost always go mono.

**Spacing & layout.** 4px base grid, tuned tight. Page gutter 24px; card padding 20px; control
height 32px (26 sm / 40 lg). Layouts are grid-first with `gap`; dashboards use fixed 240px sidebars
and 52px top bars. Content max 1200px, prose max 680px.

**Radii.** Small and precise: 2 / 3 / 5 / 8 / 12 / 16px. Controls 5px, cards 8px, modals 12px,
pills/avatars full. Never large playful rounding.

**Backgrounds.** Flat, tinted solids — **no decorative gradients**. Dark inverse panels
(`--bg-inverse`) are used for terminal/readout blocks, the marketing hero's blueprint panel, and
login side-panels; stat bands sit on the light canvas in theme tokens. No photographic
backgrounds by default; imagery, when present, would be cool-toned. Subtle `backdrop-filter: blur`
on sticky nav and modal scrims only.

**Elevation.** Restrained, cool-tinted shadows (`--shadow-1..3`). Light mode leans on soft shadow +
hairline border together; dark mode leans on borders and darker drop shadows. Cards = 1px border +
`--shadow-1`; interactive cards lift to `--shadow-2` on hover.

**Borders.** 1px hairlines everywhere (`--border-1`), stronger `--border-2/3` for controls and
focus tracks. Tables and lists are separated by hairlines, not zebra fills (hover-row highlight instead).

**Motion.** Quick and mechanical — 90/150/240ms with `cubic-bezier(0.2,0,0,1)`. **No bounce, no
overshoot.** Transitions are limited to color, background, border, box-shadow, and small positional
moves (switch knob, tab underline). `prefers-reduced-motion: reduce` is honored globally: the
`--dur-*` tokens collapse to `0.01ms` (tokens/elevation.css) and a wildcard guard in `styles.css`
neutralizes any hard-coded animation/transition durations.

**Interaction states.**
- *Hover:* surfaces step one level (`bg-1 → bg-2`), text darkens (`fg-2 → fg-1`), accent buttons
  darken to `--accent-hover`.
- *Focus:* `--focus-ring` = 3px accent-tinted ring, no hard outline.
- *Press:* accent buttons go to `--accent-active`; controls don't shrink.
- *Disabled:* 0.45 opacity, `cursor: not-allowed`.

**Transparency/blur.** Used sparingly: sticky nav uses the theme-aware `--surface-overlay` token
(translucent white in light, translucent dark surface in dark) + blur; modal scrim `~0.45` alpha +
2px blur; subtle `-subtle` tint fills. No frosted-glass everywhere.

---

## ICONOGRAPHY
- **Style:** thin, geometric **line icons** — 1.7px stroke, round caps/joins, 24×24 viewBox,
  rendered `currentColor` so they inherit text color. This matches the precise/technical voice.
- **No supplied icon set.** The kits use a small hand-built inline stroke set (grid, activity,
  server, layers, bell, settings, search, sun/moon, plus, chevron, zap, shield, gauge, git, check).
  For production, standardize on **[Lucide](https://lucide.dev)** (same 24px / round-cap / ~1.75
  stroke language) — it drops in cleanly. *(Substitution flagged: no brand icon font was provided.)*
- **No emoji** anywhere. A few Unicode marks are used semantically: `↑ ↓` for trend deltas,
  `· / ×` in mono contexts, `⌘K` keyboard hints. Status is shown with small colored **dots**, not glyphs.
- **Logo:** none provided. A placeholder square glyph (outlined square with an accent inner square)
  sits beside the "Futurist" wordmark. **Do not invent a real logo** — replace this when a mark exists.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — single entry point (import-only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skill front-matter for use in Claude Code.

**`tokens/`** — CSS custom properties + fonts (all reached from `styles.css`)
- `fonts.css` (Google Fonts import) · `colors.css` (light + dark) · `typography.css` · `spacing.css`
  · `radius.css` · `elevation.css` · `base.css` (resets, link styling, `.mono-eyebrow`).
- `colors.hex.json` — sRGB hex fallbacks for every oklch color token (both themes), for consumers
  that can't use oklch (e.g. email HTML). Not imported by `styles.css`; data artifact only.

**`components/`** — reusable React primitives (`.jsx` + `.d.ts` + `.prompt.md`, one card per group)
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**
- `data/` — **Card**, **Stat**, **Badge**, **Tag**, **Table**
- `navigation/` — **Tabs**
- `overlays/` — **Tooltip**, **Menu** (dropdown), **Popover**, **Drawer** (slide-over)
- `feedback/` — **Dialog**, **Toast**

**`guidelines/`** — foundation specimen cards (Type · Colors · Spacing · Brand) for the Design System tab.

**`ui_kits/`** — full-screen product recreations (self-contained, interactive). Kits are
standalone copy-paste **recipes**: they deliberately re-implement primitives inline (no build step,
no imports) so each page works as a single static file. `components/` is the **source of truth** —
when a primitive's spec changes there, kits showing that primitive should be re-checked; when in
doubt, the component's `.jsx` / `.d.ts` wins over kit markup.
- `dashboard/` — data-dense observability console (login → sidebar → metrics → services table; light/dark).
- `marketing/` — developer-tool landing page: sticky nav, pinned-dark hero whose object is a
  **pipeline blueprint** panel (not a terminal), features column carrying the deploy readout,
  dotted-leader stat band on the light canvas, and **two-plan spec-sheet pricing** (Hobby +
  Team-recommended) with a single hairline enterprise row — deliberately *not* the 3-tier template.
  ≤560px the pricing table swaps for stacked plan panels, recommended plan first. Signup CTA is
  "Start free" everywhere (the hero keeps "Deploy in 2 minutes"); Team is `$40/seat/mo`.
  `#root` holds a static token-styled fallback that React replaces on mount — **copy edits must
  touch both the React components and the fallback block**.
- `news/` — **Dispatch** tech news aggregator:
  - `index.html` — ranked feed with a **List / Cards** layout toggle (compact rows vs. content-rich
    cards with thumbnail, dek, byline, read-time, engagement footer), topic + trending sidebar.
  - `story.html` — story detail: long-form article (headings, blockquote, code block), vote/save/share
    bar, comment composer, and a nested/collapsible comment thread.
- `kitchen-sink/` — every component + variant on one page (buttons, controls, inputs, badges, tags,
  tabs, alerts, progress, table, toasts, type). The fastest way to pressure-test the accent and both themes.
- `states/` — **empty / loading / error** patterns: shimmer skeletons (table + card), inline/button
  loading, first-run & no-results empties, error + offline + restricted, and an all-clear success state.
- `dataviz/` — chart language on the `--viz-*` series: hoverable area chart, donut, half-gauge,
  sparklines, and horizontal bars (SVG, theme-aware).
- `overlays/` — interactive tooltip (4 sides), dropdown menu (icons/shortcuts/danger), popover, and drawer.
- `mobile/` — **Dispatch** at 375px: device frame, feed → story navigation, bottom tab bar, 44px hit targets.
- `command/` — ⌘K command palette: grouped results, live filter, full keyboard nav (↑↓/enter/esc), mint selection.
- `settings/` — form-heavy account area (Profile, Notifications, Security, API keys, Billing) with a settings sub-nav, section cards + footers, inputs/selects/switches, and validation.
- `deck/` — presentation deck (`deck-stage.js` shell): 8 slide templates — title, section divider, big
  number, two-column before/after, metrics row, quote, roadmap list, closing. Keyboard nav, speaker
  notes, print-to-PDF. Dark by default.
- `docs/` — long-form documentation: three-column layout (section nav · prose · on-this-page TOC),
  code blocks, callouts, prev/next — the pattern for your docs use-case.

**Home gallery:** `index.html` (project root) links every view above; the **Design System** tab holds foundations + component cards.

**Layout patterns:** the news feed ships **two documented layouts** — *List* (dense, ranked, mono
metadata) and *Cards* (thumbnail + dek + byline). Both are first-class; pick per surface.

**Starting points:** Button, Card, Table, the Dashboard screen, and the Marketing screen are tagged
as starting points for consuming projects.
