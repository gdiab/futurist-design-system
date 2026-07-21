# AGENTS.md Agent Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give agents consuming the Futurist design system a root-level `AGENTS.md` (task-indexed navigation + derivation protocol for uncovered cases), a `guidelines/decisions.log.md` provenance log, and pointers from `SKILL.md`/`readme.md`.

**Architecture:** Docs-only change, four files. `AGENTS.md` is the router and protocol; `guidelines/decisions.log.md` is append-only provenance (never canon); `SKILL.md` and `readme.md` each gain a one-line pointer. Spec: `docs/superpowers/specs/2026-07-20-agents-guide-design.md`.

**Tech Stack:** Markdown only. No build, no code. Verification is grep/path checks plus a paper dry-run of the protocol.

## Global Constraints

- Repo: `/Users/gd/github/futurist-design-system` (all paths below relative to it).
- Do NOT mention Claude in git commit messages (user's global rule).
- Sentence case for headings within the system's voice; no emoji anywhere in these docs.
- Every file path referenced in `AGENTS.md` must exist in the repo — verify before committing.
- `components/` is source of truth over `ui_kits/` — the guide must restate, never contradict, this rule from `SKILL.md`/`readme.md`.
- The decisions log starts EMPTY (template only, no entries) — the dry-run in Task 4 is a paper exercise and must not commit a log entry or component.

---

### Task 1: Create AGENTS.md

**Files:**
- Create: `AGENTS.md`

**Interfaces:**
- Produces: `AGENTS.md` at repo root; section heading `## When the system doesn't cover it (derivation protocol)` and file `guidelines/decisions.log.md` are referenced by Tasks 2–3. The log path string used throughout is exactly `guidelines/decisions.log.md`.

- [ ] **Step 1: Write `AGENTS.md` with exactly this content**

````markdown
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
| A full-page recipe (dashboard, marketing, news, dataviz, command palette, settings, mobile, deck, docs, overlays, states, kitchen-sink) | `ui_kits/<kit>/index.html` — self-contained, copy-paste; each kit's `README.md` documents its patterns |
| Writing copy (voice, casing, numbers, eyebrows) | `readme.md` § CONTENT FUNDAMENTALS |
| Visual rules in prose (color, type, motion, do's/don'ts) | `readme.md` § VISUAL FOUNDATIONS, `DESIGN.md` §6 Do's and Don'ts |
| Icons | `readme.md` § ICONOGRAPHY (thin geometric line icons; Lucide in production) |
| Brand / product context | `PRODUCT.md`, `guidelines/brand-wordmark.html` |
| Hex fallbacks for non-oklch consumers (email, images) | `tokens/colors.hex.json` |
| Single CSS entry point to link | `styles.css` (imports all of `tokens/`) |
| Prior edge-case decisions | `guidelines/decisions.log.md` |

**Precedence:** `components/` is the source of truth. `ui_kits/` pages deliberately re-implement
primitives inline; when a kit and a component spec disagree, the component's `.d.ts`/`.jsx` wins.

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
   state/semantic colors — and reuse those decisions for the new thing.
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
   rule in `DESIGN.md`, or an addition to `readme.md`. The log entry records which.
3. **Review the promotion.** Run an impeccable-style critique of the promoted addition
   (the `/impeccable` skill if available, otherwise a rigorous self-review against `DESIGN.md`
   §6 and the invariant checklist) before committing. A failed review means revise the
   promotion — never skip it.

The log is **provenance, never canon**: consult it in protocol step 1, but the promoted doc is
authoritative. If a log entry and its promoted doc disagree, the promoted doc wins.
````

- [ ] **Step 2: Verify every path referenced in AGENTS.md exists**

Run:
```bash
cd /Users/gd/github/futurist-design-system && for p in tokens/colors.css tokens/typography.css tokens/spacing.css tokens/radius.css tokens/elevation.css tokens/colors.hex.json styles.css readme.md DESIGN.md PRODUCT.md SKILL.md components/actions components/forms components/data components/navigation components/overlays components/feedback ui_kits/states guidelines/brand-wordmark.html; do [ -e "$p" ] || echo "MISSING: $p"; done
```
Expected: no output (no `MISSING:` lines). `guidelines/decisions.log.md` is intentionally absent until Task 2 — it is not in this check list.

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md
git commit -m "Add AGENTS.md: agent navigation guide and derivation protocol"
```

### Task 2: Create the decisions log

**Files:**
- Create: `guidelines/decisions.log.md`

**Interfaces:**
- Consumes: referenced by `AGENTS.md` (Task 1) as `guidelines/decisions.log.md`.
- Produces: the file with a header + entry template and zero entries.

- [ ] **Step 1: Write `guidelines/decisions.log.md` with exactly this content**

````markdown
# Decisions log

Provenance for design decisions made when the system didn't explicitly cover a case — see
`AGENTS.md` § "When the system doesn't cover it". Newest first. This log is **provenance, never
canon**: each entry points to where the decision was promoted; that promoted doc is authoritative.

Entry template (copy, fill, prepend below this line):

```markdown
## YYYY-MM-DD — <short name of the thing built>

- **Context:** <project / page / session that needed it>
- **Missing:** <what the system didn't cover>
- **Derived from:** <the 1–3 neighbor patterns and the token decisions reused>
- **Decision:** <what was built and the key choices, one or two lines>
- **Promoted to:** <exact file/section where it now lives canonically>
```

---
````

- [ ] **Step 2: Verify AGENTS.md's reference now resolves**

Run:
```bash
cd /Users/gd/github/futurist-design-system && grep -c "guidelines/decisions.log.md" AGENTS.md && test -f guidelines/decisions.log.md && echo OK
```
Expected: a count ≥ 2, then `OK`.

- [ ] **Step 3: Commit**

```bash
git add guidelines/decisions.log.md
git commit -m "Add guidelines/decisions.log.md: provenance log for derived patterns"
```

### Task 3: Wire pointers from SKILL.md and readme.md

**Files:**
- Modify: `SKILL.md` (body, after the "Read the `readme.md` file…" paragraph)
- Modify: `readme.md` (INDEX / MANIFEST **Root** list, after the `SKILL.md` bullet)

**Interfaces:**
- Consumes: `AGENTS.md` from Task 1.

- [ ] **Step 1: Add pointer line to `SKILL.md`**

In `SKILL.md`, the body currently begins:

```markdown
Read the `readme.md` file within this skill, and explore the other available files.
```

Change that line to:

```markdown
Read the `readme.md` file within this skill, and explore the other available files. Agents:
start with `AGENTS.md` for navigation, the uncovered-case derivation protocol, and the
decisions log.
```

- [ ] **Step 2: Add pointer bullet to `readme.md`**

In `readme.md` under `## INDEX / MANIFEST` → `**Root**`, the list currently ends with:

```markdown
- `SKILL.md` — Agent Skill front-matter for use in Claude Code.
```

Add directly after that line:

```markdown
- `AGENTS.md` — agent guide: task-indexed lookup, derivation protocol for uncovered cases,
  and the log-and-promote loop (provenance in `guidelines/decisions.log.md`).
```

- [ ] **Step 3: Verify both pointers**

Run:
```bash
cd /Users/gd/github/futurist-design-system && grep -n "AGENTS.md" SKILL.md readme.md
```
Expected: exactly one match in `SKILL.md` and one in `readme.md` (two lines of output; the readme match is the bullet's first line).

- [ ] **Step 4: Commit**

```bash
git add SKILL.md readme.md
git commit -m "Point SKILL.md and readme manifest at AGENTS.md"
```

### Task 4: Paper dry-run of the derivation protocol

**Files:**
- Modify: `AGENTS.md` (only if the dry run exposes an ambiguous step)
- Create (scratch, NOT committed): `<scratchpad>/dryrun-date-range-picker.md`

**Interfaces:**
- Consumes: `AGENTS.md` protocol (Task 1), `guidelines/decisions.log.md` template (Task 2).

- [ ] **Step 1: Execute the protocol on paper for a date-range picker**

In a scratch file (scratchpad directory, never committed), follow `AGENTS.md` § "When the system
doesn't cover it" literally, step by step, for a **date-range picker**, writing down what each
step yields. Expected shape of a defensible outcome:

- Step 1 finds no date picker in `components/`, `ui_kits/`, or the (empty) log.
- Step 2 neighbors: `components/forms/Select` (trigger field + floating panel), `components/overlays/Popover` (anchored panel mechanics), `components/data/Table` (mono numeric grid) — the calendar grid is a specialization of the mono-number discipline.
- Step 3 yields concrete token decisions (panel surface/border/radius/elevation from Popover's spec; field states from Select; day numbers in mono per the numbers-are-first-class rule).
- Step 4/5 checklists are answerable yes/no from the docs the lookup table routes to.
- Drafting the log-entry template from `guidelines/decisions.log.md` produces a complete entry with an unambiguous **Promoted to** target (`components/forms/` as a new component spec).

- [ ] **Step 2: Judge each protocol step for ambiguity**

For each of the 6 protocol steps plus the log template, answer: "could two agents reading this
reach materially different interpretations?" Record verdicts in the scratch file. Any "yes" is a
defect in `AGENTS.md` wording (not in the dry-run subject).

- [ ] **Step 3: Fix any ambiguous wording in AGENTS.md**

Edit only the sentences flagged in Step 2. If nothing was flagged, skip to Step 4. Do NOT commit
the scratch file, a date-range-picker component, or a log entry — the log stays empty.

- [ ] **Step 4: Verify the log is still empty and the tree is clean of scratch artifacts**

Run:
```bash
cd /Users/gd/github/futurist-design-system && grep -c "^## 20" guidelines/decisions.log.md; git status --porcelain
```
Expected: `0` from grep (no dated entries); `git status` shows only `AGENTS.md` modified (if Step 3 made fixes) or nothing.

- [ ] **Step 5: Commit fixes if any were made**

```bash
git add AGENTS.md
git commit -m "Tighten AGENTS.md derivation protocol wording after dry run"
```
Skip if Step 3 made no changes.
