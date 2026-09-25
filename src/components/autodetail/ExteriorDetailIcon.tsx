type ExteriorDetailIconProps = {
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

export function ExteriorDetailIcon({ index, className }: ExteriorDetailIconProps) {
  const iconClassName = className ?? "h-8 w-8";

  // 0: Two-Bucket Hand Bath & Foam Cannon (Foam cannon lance, rich snow foam & wash mitt)
  if (index === 0) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Foam lance nozzle & body */}
        <path d="M4 14h6l4-4h4v8h-4l-4-4" />
        <path d="M18 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4" />
        <path d="M7 14v8a2 2 0 0 0 2 2h2" />
        {/* Foam spray clouds / bubbles */}
        <circle cx="26" cy="10" r="2.5" />
        <circle cx="28" cy="16" r="2" />
        <circle cx="25" cy="21" r="3" />
        <circle cx="19" cy="23" r="1.5" />
        <path d="M22 6l2-2" />
      </svg>
    );
  }

  // 1: Chemical Iron Decon & Clay-Bar Smoothing (Clay bar pad smoothing paint with dissolved fallout)
  if (index === 1) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Synthetic clay bar block */}
        <rect x="5" y="7" width="16" height="8" rx="2" transform="rotate(-6 5 7)" />
        {/* Smooth glass-like finish line */}
        <path d="M4 22c6-1 12-2 24-2" strokeWidth={2} />
        {/* Fallout dissolution droplets & clean shine */}
        <path d="M21 8c1.5-2 2.5-3 3.5-3s2 1 2 2.5c0 2-2 3.5-3.5 4" />
        <path d="m25 15 .5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5.5-1Z" />
        <path d="M8 25l2 3" />
        <path d="M14 24l2 4" />
      </svg>
    );
  }

  // 2: Ceramic Wax Sealant Protection (Hydrophobic droplet & high-gloss protective armor shield)
  if (index === 2) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Protective shield */}
        <path d="M16 3.5 25 7v6.8c0 6-3.8 11.2-9 13.7-5.2-2.5-9-7.7-9-13.7V7l9-3.5Z" />
        {/* Hydrophobic water droplet */}
        <path d="M16 10c1.8 2.3 3 4 3 5.6a3 3 0 1 1-6 0c0-1.6 1.2-3.3 3-5.6Z" />
        {/* High-gloss shine gleam */}
        <path d="m24 19 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
      </svg>
    );
  }

  // Default: Wheel, tire & exterior finish
  return (
    <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="4" />
      <path d="M16 5v7" />
      <path d="M16 20v7" />
      <path d="M5 16h7" />
      <path d="M20 16h7" />
      <path d="m8.2 8.2 5 5" />
      <path d="m18.8 18.8 5 5" />
      <path d="m23.8 8.2-5 5" />
      <path d="m13.2 18.8-5 5" />
    </svg>
  );
}
