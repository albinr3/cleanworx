# TintLevelVisualizer Specification

## Overview

- **Target file:** `src/components/autodetail/TintLevelVisualizer.tsx`
- **Reference screenshots:**
  - `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/reference-desktop-simulator.png`
  - `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/reference-desktop-transition-70.png`
  - `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/reference-mobile-simulator.png`
- **Interaction model:** click-driven.
- **Adaptation:** preserve CleanWorx data and CTA behavior while replacing the low-resolution whole-car crossfade with one original high-resolution car and independent vector glass masks.

## DOM Structure

- `section`/card wrapper.
  - Intro row with eyebrow, title, explanation, and live VLT badge.
  - Six native buttons in a responsive grid.
  - Vehicle stage.
    - Decorative large selected percentage.
    - Base `Image` using the 1774 × 887 transparent silver sedan.
    - Absolutely aligned `svg viewBox="0 0 1774 887"`.
      - Five filled paths: windshield, front-door glass, rear-door glass, quarter glass, rear windshield.
      - Five matching no-fill orange outline paths in a keyed group.
  - Details and legal guidance.
  - Four metric cells.
  - Booking and call actions.

## Computed Styles from the Reference

### Heading

- font-family: Menseal-Bold
- font-size: 32px
- line-height: 38.4px
- color: rgb(10, 0, 40)
- text-transform: visually uppercase

### Buttons at 1440 px

- six equal controls in one row
- each width: 174.17px
- height: 39.33px
- gap: 15px
- background-color: rgb(224, 89, 42)
- border: 0.67px solid rgb(17, 17, 17)
- border-radius: 14px
- transition: background-color 0.2s, border-color 0.2s

### Glass paths

- five independent paths in the reference: `Windshield`, `Front_Side`, `Middle_Side`, `Back_Side`, `rear_Window`
- VLT 5 fill: black at 0.95 alpha
- VLT 70 fill: black at 0.30 alpha
- transition state: orange stroke, 2 SVG units, then transparent
- transition: stroke and stroke-width over 0.3s

## States & Behaviors

### Percentage selection

- **Trigger:** click or keyboard activation of a VLT button.
- **State before:** previous button has `aria-pressed=true`; glass fill opacity corresponds to previous VLT.
- **State after:** selected button becomes pressed; all five masks transition to `1 - VLT/100`; copy and metrics update.
- **Transition:** glass fill opacity around 500 ms ease-out.

### Glass outline flash

- **Trigger:** every percentage change.
- **State A:** orange outline appears around every individual glass boundary.
- **State B:** outline fades fully transparent.
- **Transition:** about 650 ms total so the effect is readable while preserving the reference’s fast feel.
- **Implementation:** keyed native SVG animation or an equivalently scoped CSS keyframe; never tint the vehicle body.

### Hover and focus

- Unselected controls brighten and lift subtly.
- Active control remains visually distinct.
- Focus-visible ring is clearly visible.

## Per-State Content

Reuse the existing `tintLevels` dataset exactly for all six values. The selected value drives label, badge, legal status, summary, best-for copy, heat rejection, glare reduction, and privacy rating.

## Assets

- Base vehicle: `public/images/autodetail/tint-visualizer/v2/cleanworx-silver-sedan.png`
- Dimensions: 1774 × 887, 8-bit RGBA PNG.
- Generated specifically for this simulator with transparent background, no logo, no text, and crisp separated glass.
- Existing six whole-car image pairs must no longer be referenced.

## Text Content

- Primary heading: `Choose your tint level`
- Instruction: clearly state that only the glass changes.
- Keep all existing CleanWorx profile, legal, metrics, booking, and phone copy.

## Responsive Behavior

- **Desktop (1440px):** six buttons in one row; wide vehicle stage; two-column detail region.
- **Tablet (768px):** six buttons remain available without overflow; details may stack.
- **Mobile (390px):** buttons form a 3 × 2 grid; vehicle remains fully visible; metrics use two columns; no horizontal scrolling.
- **Breakpoint:** selector changes from 3 to 6 columns at 640px.

## Acceptance Criteria

- The vehicle body is pixel-identical between all percentage states.
- Only the five SVG glass masks change darkness.
- Every glass boundary flashes orange on each change.
- No full-car image crossfade remains.
- Keyboard activation and `aria-pressed` work.
- No viewport overflow at 390px.
- `npx tsc --noEmit` and `npm run build` pass.
