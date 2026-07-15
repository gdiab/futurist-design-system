# Marketing UI Kit — Developer-Tool Landing Page

A single-page marketing site in the Futurist voice (technical, direct, numbers-forward).

**`index.html`** is self-contained (open it directly):
- Sticky blurred **nav** with wordmark + primary CTA.
- **Hero:** status pill, big display headline, dual CTAs, mono proof stats, and a dark
  **terminal** panel showing a deploy with colored status lines.
- **Stats strip** on an inverse panel (4 big figures).
- **Features** grid (2×2) with accent-subtle icon tiles.
- **Pricing** (3 tiers, middle highlighted with an accent border + "Popular" tag).
- **Footer** with mono copyright + links.

## Structure
Composed from token-styled primitives (Btn, Eyebrow, Icon) inlined for standalone rendering; JSX is
transformed in-browser with the classic runtime. In production, swap the inlined `Btn` for the
design system's `Button` — both read the same `styles.css` tokens.
