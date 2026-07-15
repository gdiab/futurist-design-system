---
name: futurist-design
description: Use this skill to generate well-branded interfaces and assets for Futurist, either for production or throwaway prototypes/mocks/etc. Futurist is a minimal, data-dense, precise/technical design system (cool low-chroma neutrals, one signal-green accent (~#2CDE85), a functional data palette, Atkinson Hyperlegible Next for UI/display with IBM Plex Mono for data, tight 4px grid, small radii, light + dark via [data-theme]). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view — link `styles.css` for tokens, and follow the CONTENT
FUNDAMENTALS, VISUAL FOUNDATIONS, and ICONOGRAPHY sections in `readme.md`. If working on production
code, copy assets and read the rules here to become an expert in designing with this brand; import
the components in `components/` (props documented in each `.d.ts` / `.prompt.md`).

Key reflexes: base UI text 14px, numbers + labels in mono, sentence-case copy, `//`-prefixed
eyebrows, no emoji, thin geometric line icons (Lucide in production), quick mechanical motion with
no bounce, and always support `[data-theme="dark"]`.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
