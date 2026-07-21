# AGENTS.md — agent navigation guide, derivation protocol, and documentation loop

**Date:** 2026-07-20
**Status:** Approved

## Problem

Agents consuming the Futurist design system (mostly working inside this repo) need:
1. A fast way to find the right doc/asset for a given task.
2. A defined procedure for building something on-brand that the system doesn't explicitly cover.
3. A mechanism ensuring those new edge-case decisions get documented, reviewed, and folded into canon — with provenance.

## Decisions made during brainstorming

- Consumers are mostly agents working in this repo directly.
- Uncovered cases: agents **derive, build, then log** — no stopping to ask, except when a derivation would break an invariant or require minting a new token.
- Promotion is **immediate** (same session writes the pattern into canonical docs), gated by an `/impeccable`-style review to keep standards high and thematically correct.
- Every promotion is **logged for provenance**: when, why, and which project needed what.
- Shape: **single root `AGENTS.md`** (Approach A) plus `guidelines/decisions.log.md`. No per-directory indexes.

## Design

### 1. `AGENTS.md` (new, repo root, ~120–160 lines)

Written for an agent told "build something with Futurist." Contents:

- **Orientation** — one paragraph: what the system is, the one-line aesthetic.
- **Task-indexed lookup table** — rows routing tasks to sources, e.g.:
  - Colors / contrast → `tokens/colors.css`, `guidelines/color-*.html`, DESIGN.md color section
  - Primitive needed (button, tabs, modal…) → `components/<category>/` (`.d.ts` + `.prompt.md` are the spec)
  - Full-page recipe → `ui_kits/<kit>/` (self-contained, copy-paste)
  - Copywriting → readme.md CONTENT FUNDAMENTALS
  - Motion → DESIGN.md motion rules + reduced-motion pattern
  - Type / spacing / radius / elevation → `tokens/` + matching `guidelines/*.html`
- **Precedence rule** — components are source of truth over ui_kits (restating SKILL.md).
- **Known traps** — accent never as body text; static-fallback sync rule (copy edits touch React and the `#root` fallback); staggered animation classes must live inside `@media (prefers-reduced-motion: no-preference)`.

### 2. Derivation protocol (section inside AGENTS.md)

Numbered procedure for anything not explicitly covered:

1. **Search first** — components, ui_kits, and `guidelines/decisions.log.md`; the case may already be decided.
2. **Find nearest neighbors** — 1–3 existing patterns closest in role.
3. **Decompose neighbors into their token decisions** — surface level, borders, radius, spacing rhythm, type roles, state colors — and reuse those decisions. Hard rule: **no new raw values; only existing tokens.**
4. **Invariant checklist** — mono for data, sentence case, 4px grid, both themes, focus-visible, reduced motion, no emoji.
5. **Self-critique** — `/impeccable`-style pass: would this be mistaken for a native Futurist component?
6. **Log and promote** (below).

**Stop-and-ask threshold:** a derivation that would break an invariant or require a new token halts and surfaces to the user.

### 3. Documentation loop

- **New file `guidelines/decisions.log.md`** — newest-first; one compact block per entry: date, project/context, what was missing, derived-from, the decision, and where it was promoted to.
- **Immediate promotion** — the same session writes the pattern into its correct canonical home (component spec, DESIGN.md rule, or readme addition; the log records which), then runs an impeccable-style review of the promoted addition before committing. A failed review means revise the promotion, not skip it.
- **Log is provenance, never canon** — agents consult it in protocol step 1, but the promoted doc is authoritative.

### 4. Wiring

- `SKILL.md`: one added line — "Agents: start with `AGENTS.md` for navigation and the uncovered-case protocol."
- `readme.md`: matching one-line pointer.
- No other files change.

## Verification

Dry-run the guide as a paper exercise: pick a genuinely uncovered component (e.g., a date-range picker), follow the protocol literally as written, and confirm it yields a defensible derivation plus a valid log entry and promotion target — without committing the derived component or a log entry (the log starts empty). Fix any step that proves ambiguous during the dry run.

## Out of scope

- Per-directory index headers (Approach C) — revisit only if agents start entering via subdirectories.
- Cross-repo feedback paths for the copied-skill use case.
- Actually building any new component beyond the dry-run exercise.
