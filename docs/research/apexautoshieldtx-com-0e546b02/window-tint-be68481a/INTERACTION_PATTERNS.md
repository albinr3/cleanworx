# Interaction Patterns

- Selection uses native buttons and `aria-pressed`.
- State changes are immediate; glass opacity eases over approximately 500 ms.
- A keyed SVG outline group remounts on each selection, replaying a short orange stroke-opacity animation on every individual glass path.
- The large percentage label is marked decorative; the selected state is announced in a polite live region.
- Focus styling is never removed.
