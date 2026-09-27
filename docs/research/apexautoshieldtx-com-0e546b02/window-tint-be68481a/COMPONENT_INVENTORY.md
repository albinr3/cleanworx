# Component Inventory

- `TintLevelVisualizer` — owns selected VLT state and composes the whole simulator.
- `TintSelector` (internal render group) — six responsive percentage buttons.
- `VehicleTintStage` (internal render group) — base PNG, percentage watermark, independent SVG window masks, animated outline group.
- `TintProfile` (internal render group) — label, summary, legal guidance, best-use copy.
- `TintMetrics` (internal render group) — heat rejection, UV block, glare reduction, and privacy rating.
- `SimulatorActions` (internal render group) — booking link and telephone link.

The component remains in one file because these groups share one small state model and no group has an independent API.
