# Behaviors

## Interaction model

- Click-driven percentage selector with six states: 5%, 15%, 20%, 30%, 55%, and 70%.
- The selected VLT updates all five glass masks while the body paint, wheels, lights, shadow, and background stay unchanged.
- Reference opacity mapping: black overlay alpha is `1 - VLT / 100`; observed values are 0.95 at 5% and 0.30 at 70%.
- On every selection change, all glass boundaries flash orange together. The reference sets an orange stroke at 2 SVG units and transitions the stroke away in roughly 300 ms.
- The large VLT label and the detail panel update with the selected state.
- Buttons expose pressed state for keyboard and assistive technology users.

## Responsive sweep

- Desktop reference at 1440 px: one horizontal row of six controls above a wide vehicle.
- Mobile reference at 390 px: the source widget retains a 608 px minimum width and causes horizontal overflow. CleanWorx intentionally corrects this by using a 3-column selector and a fluid vehicle stage.
- The vehicle image and SVG overlay must always share the same 1774 × 887 viewBox/aspect ratio.

## Hover and focus

- Unselected percentages brighten on hover.
- Keyboard focus uses a visible high-contrast ring.
- The selected percentage has a persistent filled treatment separate from the temporary glass outline animation.
