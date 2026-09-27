# Technical Stack Analysis

## Reference

- Duda-hosted page with a custom embedded tint widget.
- The vehicle itself is inline SVG.
- Five named SVG paths receive independent black fills and transient orange strokes.
- Interaction is custom JavaScript click handling.

## CleanWorx implementation

- Next.js 16 App Router and React 19.
- A focused client component for state and event handlers.
- `next/image` for the original 1774 × 887 transparent vehicle asset.
- Native inline SVG paths for deterministic, resolution-independent glass masks.
- Tailwind v4 utilities and existing design tokens; no new dependency.
