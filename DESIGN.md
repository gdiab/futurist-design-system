---
name: Futurist
description: Minimal, data-dense, precise/technical design system — cool low-chroma neutrals, one signal-green accent, mono-first data.
colors:
  bg-0: "oklch(0.985 0.002 255)"
  bg-1: "oklch(1 0 0)"
  bg-2: "oklch(0.972 0.003 255)"
  bg-3: "oklch(0.951 0.004 255)"
  bg-inverse: "oklch(0.22 0.012 260)"
  scrim: "oklch(0.2 0.02 262 / 0.45)"
  border-1: "oklch(0.918 0.005 255)"
  border-2: "oklch(0.865 0.007 255)"
  border-3: "oklch(0.80 0.009 255)"
  stroke-inverse: "oklch(1 0 0 / 0.08)"
  fg-1: "oklch(0.235 0.012 262)"
  fg-2: "oklch(0.435 0.011 262)"
  fg-3: "oklch(0.545 0.009 262)"
  fg-4: "oklch(0.715 0.007 262)"
  accent: "oklch(0.775 0.165 159)"
  accent-hover: "oklch(0.725 0.170 159)"
  accent-active: "oklch(0.675 0.170 159)"
  accent-fg: "oklch(0.22 0.045 159)"
  accent-subtle: "oklch(0.955 0.055 159)"
  accent-subtle-fg: "oklch(0.470 0.130 159)"
  success: "oklch(0.520 0.130 168)"
  warning: "oklch(0.720 0.150 75)"
  danger: "oklch(0.575 0.190 27)"
  info: "oklch(0.550 0.130 240)"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.011em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.011em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "5px"
  lg: "8px"
  xl: "12px"
  full: "999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-12: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-fg}"
    rounded: "{rounded.md}"
    height: "32px"
    padding: "0 14px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-fg}"
  button-secondary:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg-1}"
    rounded: "{rounded.md}"
    height: "32px"
    padding: "0 14px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.md}"
    height: "32px"
    padding: "0 14px"
  input:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg-1}"
    rounded: "{rounded.md}"
    height: "32px"
    padding: "0 10px"
  card:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: Futurist

## 1. Overview

**Creative North Star: "The Instrument Panel"**

Futurist reads like a well-machined cockpit gauge: dense, calibrated, and quiet until something matters. Cool, near-zero-chroma grey surfaces form the panel; hairlines etch the structure; numbers are first-class citizens set in mono with their units; and one Signal Green light tells you what is alive, selected, or primary. Information density is the point — but every screen keeps a single primary focus, and every value earns its place.

The system explicitly rejects two failure modes. First, the generic 2026 AI dev-tool landing page — pill version badge, fake terminal hero, dark stats strip, 3-tier pricing template. Second, heavy legacy enterprise chrome — beveled toolbars-everywhere density without hierarchy (old Jira/SAP energy). Futurist is neither: it earns trust in product surfaces through convention and earns a second look in brand surfaces through typographic precision, not decoration.

Both themes are first-class: light is the default on `:root`, dark overrides live under `[data-theme="dark"]`, and every token pair is verified to WCAG 2.1 AA (≥4.5:1 normal text) in both. Type is rem-based and respects user font-size preferences; motion collapses to instant under `prefers-reduced-motion`.

**Key Characteristics:**
- Data-dense, compact scale — base UI text 0.875rem (14px), 32px controls, 4px grid
- One accent: Signal Green, spent on primary actions, selection, and live state only
- Numbers, labels, and eyebrows in IBM Plex Mono; prose and UI in Atkinson Hyperlegible Next
- Hairline-drawn structure; shadows reserved for true overlays
- Quick mechanical motion (90–240ms), no bounce, no choreography
- Light + dark via `[data-theme]`, AA-verified in both

## 2. Colors

A cool, low-chroma neutral field (hue ~255–262, chroma ≤0.012) with one saturated Signal Green voice and a functional semantic palette — the panel is grey; only signals carry color.

### Primary
- **Signal Green** (`--accent`, oklch(0.775 0.165 159), ~#2CDE85): primary buttons, active/selected states, live indicators, focus rings (at 40% alpha as `--accent-ring`). Text on it is **Deep Pine** (`--accent-fg`, oklch(0.22 0.045 159)) — a dark green-black that holds ~9:1 contrast. Hover and active step darker (`--accent-hover`, `--accent-active`); tinted fills use `--accent-subtle` with `--accent-subtle-fg` (also the link color). Ink on `--accent-subtle` fills is `--accent-subtle-fg` or `--fg-2`, never `--fg-3`/`--fg-4` — the muted ramp loses AA on the tint.

### Neutral
- **Panel Greys** (`--bg-0` → `--bg-3`): a four-step tonal ladder — app canvas (oklch 0.985), white card surface, raised fill, inset/track. Depth is climbed one step at a time; hover means "step one level."
- **Inverse Panel** (`--bg-inverse`, oklch(0.22 0.012 260)): dark pinned surfaces (code blocks, terminal chrome) with `--fg-inverse` text and `--stroke-inverse` hairlines.
- **Ink Ramp** (`--fg-1` → `--fg-4`): primary text (oklch 0.235) → secondary → muted/meta → faint/disabled. `--fg-3` is the floor for readable text; `--fg-4` is reserved for disabled/decorative.
- **Hairlines** (`--border-1/2/3`): default hairline, strong/focus track, control outline.
- **Scrim** (`--scrim`): modal/drawer backdrop, deeper and more opaque in dark theme.

### Semantic (functional data palette)
- **Success** (oklch(0.520 0.130 168)), **Warning** (oklch(0.720 0.150 75)), **Danger** (oklch(0.575 0.190 27)), **Info** (oklch(0.550 0.130 240)): status only, never decoration. Each ships a `-fg` pair and a `-subtle`/`-subtle-fg` tinted pair for badges and alerts. Six `--viz-*` categorical series colors exist for charts.

All values above are the light theme; every token has a dark-theme override under `[data-theme="dark"]` — consume tokens, never literals, and both themes come free.

### Named Rules
**The One Signal Rule.** Signal Green appears on ≤10% of any screen: primary action, current selection, live state. If green is decorating, it is lying — status uses the semantic palette, everything else stays grey.

**The Token Contract Rule.** Tokens are the contract: kits and components consume tokens; hardcoded color values are drift, not convenience. If a value isn't a `var(--…)`, it's a bug (the deliberately pinned-dark panels — terminal/readout blocks and the marketing hero's blueprint panel — are the sole exception).

## 3. Typography

**Display/UI/Body Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, system-ui fallback) — use the **Next** variable release; it carries the 400/500/600/700 range.
**Data/Mono Font:** IBM Plex Mono (ui-monospace, SF Mono, Menlo fallback)

**Character:** An accessibility-first humanist sans with unmistakable letterforms carries everything from 62px display to 11px labels; the mono is the instrument voice — data, code, metrics, table numerics, keyboard hints. The pairing is legibility as identity.

### Hierarchy
- **Display** (600, 3rem/1.15, -0.02em): hero and page-level statements. Scale tops out at `--text-6xl` (3.875rem / 62px); nothing larger exists.
- **Headline** (600, 1.5rem/1.15, -0.011em): section headings, dialog titles.
- **Title** (600, 1.0625rem/1.3): card titles, panel headers.
- **Body** (400, 0.875rem/1.5): the default — compact by design. 0.8125rem (13px) in tables and controls; prose runs at 0.9375rem within a 680px `--max-prose` measure.
- **Label** (mono, 500, 0.6875rem, +0.08em, UPPERCASE): the `.mono-eyebrow` — eyebrows, column headers, status labels, always `//`-prefixed when used as a section kicker.

The scale is rem-based (0.6875–3.875rem at the 16px root) so user font-size preferences are honored.

### Named Rules
**The Mono Numbers Rule.** Numeric values are always set in mono with their units (`142ms`, `99.98%`, `4.2k`). A proportional-face metric is a typo.

**The Sentence Case Rule.** All copy is sentence case — buttons, headings, labels. The only uppercase in the system is the tracked mono eyebrow. No emoji, no exclamation-point marketing.

## 4. Elevation

Hairlines first, shadows whisper. Structure is drawn with 1px hairlines (`--border-1`) and the four-step tonal ladder (`--bg-0`→`--bg-3`); shadows exist only to lift true overlays off the panel. All shadows are cool-tinted (oklch 0.22 0.02 262 base) and restrained; the dark theme leans harder on borders and tonal separation, with deeper black shadows only where overlays genuinely float.

### Shadow Vocabulary
- **Rest** (`--shadow-1`: 0 1px 2px @6% + 1px ring @3%): cards that need the faintest lift; most cards use a hairline and no shadow at all.
- **Raised** (`--shadow-2`: 0 1px 2px @6% + 0 4px 12px @8%): dropdown menus, popovers, hover-lifted cards.
- **Overlay** (`--shadow-3`: 0 2px 4px @6% + 0 12px 32px @14%): dialogs and drawers, paired with `--scrim`.
- **Inset** (`--shadow-inset`): pressed wells and tracks.
- **Focus** (`--focus-ring`: 0 0 0 3px `--accent-ring`): the universal focus treatment via `:focus-visible`.

### Named Rules
**The Hairline-First Rule.** Surfaces are flat at rest and separated by hairlines, not shadows or zebra fills. A shadow is a statement that something floats — menus, popovers, dialogs — and nothing else earns one.

## 5. Components

Machined and quiet: exact control heights (26/32/40px), small radii (3–5px), instant mechanical feedback. Components feel milled, not drawn. Every interactive component ships default, hover, focus, active, disabled, and loading states — and is keyboard-complete.

### Buttons
- **Shape:** small precise corners (`--radius-md`, 5px); heights 26/32/40px (sm/md/lg); medium weight, 13px text at md.
- **Primary:** Signal Green fill with Deep Pine text (`--accent` / `--accent-fg`), 0 14px padding at md.
- **Secondary:** white card surface with control outline (`--bg-1` + `--border-3`); hover steps to `--bg-2`.
- **Ghost:** transparent, secondary ink; hover fills `--bg-2` and darkens to `--fg-1`.
- **Danger:** `--danger` fill for destructive actions only.
- **Hover / Focus:** background steps in 90ms (`--dur-fast` + `--ease-standard`); focus is the universal 3px `--accent-ring` box-shadow. Loading swaps the label for an inline spinner, preserving width; disabled is 45% opacity, never a color change.

### Inputs / Fields
- **Style:** white field on `--bg-1`, 1px `--border-3` outline, 5px radius, 32px height, 13px text; labels 12px medium above; hints 12px muted below.
- **Focus:** border flips to `--accent` plus the 3px accent ring — one motion, 90ms.
- **Error:** border and message in `--danger`, ring becomes `--danger-subtle`.

### Cards / Containers
- **Corner Style:** `--radius-lg` (8px); modals and panels use `--radius-xl` (12px).
- **Background:** `--bg-1` on the `--bg-0` canvas.
- **Shadow Strategy:** hairline border, no shadow at rest (see Elevation); hover may step the surface, not float it.
- **Internal Padding:** `--card-pad` (20px).
- Cards are earned, not default — dense data prefers tables and hairline-separated lists.

### Navigation
- **Pattern:** fixed 240px sidebar (`--sidebar-w`) for consoles; top nav + `--surface-overlay` translucent sticky bar for content sites. Items are 13px, quiet by default; the active item carries `--accent-subtle` fill or a Signal Green indicator — never a full-saturation fill.
- **Tabs:** underline-style with an accent underline on the active tab; keyboard-navigable (arrow keys).

### Tables (signature component)
Data tables are the system's home turf: 13px text, mono numerics right-aligned with units, uppercase mono column headers (`.mono-eyebrow`), rows separated by hairlines — never zebra fills — with a `--bg-2` hover step. Status is a small colored dot plus a word, not a filled pill.

### Status & Badges
Badges use the `-subtle` tinted pairs (e.g. `--success-subtle` + `--success-subtle-fg`). Live states may pulse a Signal Green dot. Dotted-leader status lines (`label ······ value`) are signature grammar.

## 6. Do's and Don'ts

### Do:
- **Do** consume tokens for every color, size, radius, and duration — tokens are the contract; hardcoded values are drift, not convenience.
- **Do** set every number in IBM Plex Mono with its unit (`142ms`, `99.98%`), right-aligned in tables.
- **Do** verify ≥4.5:1 contrast for normal text in **both** themes before shipping; `--fg-3` is the muted-text floor, `--fg-4` is disabled-only.
- **Do** keep Signal Green ≤10% of any screen: primary action, selection, live state.
- **Do** ship all states — default, hover, focus-visible (3px `--accent-ring`), active, disabled, loading — and full keyboard operation on every interactive component.
- **Do** use the `//`-prefixed uppercase mono eyebrow and dotted-leader status lines as the signature grammar — deliberately, not on every section.
- **Do** support `[data-theme="dark"]` on everything; if you used tokens, it's already done.
- **Do** honor `prefers-reduced-motion` — the duration tokens collapse globally; don't hardcode durations that escape them.

### Don't:
- **Don't** build the generic 2026 AI dev-tool landing page: pill version badge + fake terminal hero + dark stats strip + 3-tier pricing template (PRODUCT.md anti-reference — marketing surfaces must be distinguishable from the modal LLM-generated dev-tool page).
- **Don't** recreate heavy legacy enterprise chrome: beveled toolbars-everywhere density without hierarchy (old Jira/SAP energy). Density needs one primary focus per screen.
- **Don't** use side-stripe borders (`border-left` > 1px as a colored accent) on cards, callouts, or alerts — use full hairlines, background tints, or leading dots instead.
- **Don't** use gradient text, glassmorphism-as-default, or zebra-striped tables.
- **Don't** use emoji, exclamation-point marketing, or Title Case UI copy.
- **Don't** put gray text on colored backgrounds, or promote `--fg-4` to readable text.
- **Don't** animate with bounce, overshoot, or orchestrated page-load choreography — motion is 90–240ms, mechanical, state-conveying only.
- **Don't** invent affordances for standard tasks: standard controls, standard modals, standard scrollbars. Familiarity is the trust currency in product surfaces.
- **Don't** use display sizes above `--text-6xl` (3.875rem) or letter-spacing tighter than -0.02em.
