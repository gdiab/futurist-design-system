# Product

## Register

product

## Platform

web

## Users
The system's owner, reusing Futurist across their own projects — copying tokens, kits, and components into new codebases — and AI agents consuming the repo as an Agent Skill via SKILL.md to generate on-brand interfaces. The agent audience makes documentation accuracy load-bearing: an agent reads SKILL.md and the readme verbatim, so stale prose produces off-brand output.

## Product Purpose
A bespoke, portable design system for minimal, data-dense, precise/technical interfaces — SaaS dashboards, developer tools, docs, and data-heavy product UI first; marketing sites and decks as secondary surfaces. Success is a new project shipping an on-brand, accessible interface by linking `styles.css` and following the kits, with no per-project design re-derivation.

## Positioning
One coherent technical identity — cool low-chroma neutrals, one signal-green accent, Atkinson Hyperlegible Next + IBM Plex Mono — portable enough to carry into any project as a skill.

## Brand Personality
Technical, direct, precise. State the fact, then stop; confidence without hype. Numbers are first-class and always set in mono with their units. No emoji, no exclamation-point marketing. The signature grammar (uppercase wide-tracked mono eyebrows, `//` prefix, dotted-leader status lines) is deliberate identity, not scaffolding.

## Anti-references
- The generic 2026 AI dev-tool landing page: pill version badge + fake terminal hero + dark stats strip + 3-tier pricing template. Futurist's marketing surfaces must be distinguishable from the modal LLM-generated dev-tool page.
- Heavy legacy enterprise chrome: beveled toolbars-everywhere density without hierarchy (old Jira/SAP energy).

## Design Principles
- Tokens are the contract: kits and components consume tokens; hardcoded values are drift, not convenience.
- Practice what the typeface preaches: a system branded on an accessibility-first face must itself be keyboard-complete and contrast-compliant.
- Density with hierarchy: information-dense is the point, but every screen has one primary focus.
- Docs are an API: SKILL.md and the readme are consumed verbatim by agents; they must never lag the code.
- Familiarity in product, distinctiveness in brand: consoles earn trust through convention; marketing surfaces must earn a second look.

## Accessibility & Inclusion
WCAG 2.1 AA across the system: ≥4.5:1 for normal text in both themes, keyboard-complete interactive components, visible focus indicators, and `prefers-reduced-motion` support. The light theme currently fails AA in known places (tracked in the 2026-07-15 critique); AA is the gate for fixes.
