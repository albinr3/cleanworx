type PaintCorrectionIconProps = {
  index: number;
  className?: string;
};

const sharedProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.65,
};

export function PaintCorrectionIcon({ index, className }: PaintCorrectionIconProps) {
  const iconClassName = className ?? "h-8 w-8";

  // 0: Swirl Marks & Spiderwebbing (Concentric swirls & circular scratches)
  if (index === 0) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        <circle cx="16" cy="16" r="3" />
        <path d="M16 9a7 7 0 1 0 7 7" />
        <path d="M16 5a11 11 0 1 1-11 11" />
        <path d="M4.5 9.5 8 13" />
        <path d="M23.5 8.5 20 12" />
        <path d="M7 23l3.5-3.5" />
        <path d="M24 23.5 20.5 20" />
      </svg>
    );
  }

  // 1: Haze, Oxidation, and Water Spots (Droplet + hazy oxidation sun rays)
  if (index === 1) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        <path d="M16 4.5c4 4.8 6.5 8.5 6.5 12a6.5 6.5 0 1 1-13 0c0-3.5 2.5-7.2 6.5-12Z" />
        <path d="M16 11v3.5" />
        <path d="M13.5 16.5h5" />
        <path d="M24.5 6.5l2-2" />
        <path d="M27.5 12h3" />
        <path d="M4.5 6.5l-2-2" />
        <path d="M4.5 12h-3" />
        <path d="M20 25.5l2.5 2.5" />
      </svg>
    );
  }

  // 2: Scratches That Cut Through the Clear Coat (Deep cut through protective layers)
  if (index === 2) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        <path d="M4 8.5h24" />
        <path d="M4 16.5h24" strokeDasharray="3 3" />
        <path d="M4 24.5h24" />
        <path d="M9 5.5l7 14 7-14" />
        <path d="m16 19.5 2.5 5" stroke="#ef4444" />
      </svg>
    );
  }

  // Default / Inspection Depth Gauge & Polish
  return (
    <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l4.5 4.5" />
      <path d="M7 16h2" />
      <path d="M23 16h2" />
      <path d="M16 7V5" />
      <path d="m22.4 9.6 1.4-1.4" />
    </svg>
  );
}
