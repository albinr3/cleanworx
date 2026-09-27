# Visual QA

## Desktop

- Verified the updated component inside the live `/window-tinting` route.
- The base vehicle remains one immutable image across states.
- At 5%, 15%, and 20% the body paint, lights, wheels, tires, and shadow do not change.
- All five glass masks use the same path data for fill and outline, so the orange borders cannot drift from the tinted shapes.
- The selected button, live VLT readout, large background percentage, profile copy, metrics, legal note, and booking label update together.
- Screenshot: `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/cleanworx-after-desktop.png`
- Interaction screenshot: `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/cleanworx-orange-outline.png`

## Responsive

- Tested at a narrow browser breakpoint with the 3 × 2 selector active.
- `documentElement.scrollWidth` equals `clientWidth`; the simulator introduces no horizontal overflow.
- The complete vehicle remains visible and the details stack below it.
- Screenshot: `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/cleanworx-after-mobile.png`

## Accessibility and behavior

- Percentage controls are native buttons with `aria-pressed`.
- Selected VLT and profile changes are exposed through polite live regions.
- Focus-visible rings are present on all controls and calls to action.
- The orange outline animation restarts on every selection and is reduced to 1 ms when `prefers-reduced-motion` is enabled.

## Mask-fit correction

- Retraced the windshield, front-door, rear-door, and quarter-glass paths against the 1774 × 887 source asset.
- Extended the masks 10–17 source pixels beneath the black upper/lower window frames to remove visible untinted seams without covering body paint.
- Closed the uncovered triangular glass area immediately behind the side mirror.
- Final 5% fit: `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/cleanworx-mask-fit-5-final.png`
- Final individual outlines: `docs/design-references/apexautoshieldtx-com-0e546b02/window-tint-be68481a/cleanworx-mask-outlines-final.png`

## Intentional differences from the source

- The reference page overflows horizontally on a 390 px viewport. CleanWorx uses a responsive 3 × 2 grid instead.
- The reference vehicle and white widget shell were not copied. CleanWorx uses an original transparent silver sedan and a dark technical surface consistent with the surrounding page.
- The simulator is an illustrative VLT comparison; actual appearance varies with ambient light, factory glass, interior color, and film construction.
