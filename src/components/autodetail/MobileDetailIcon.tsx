type MobileDetailIconProps = {
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

export function MobileDetailIcon({ index, className }: MobileDetailIconProps) {
  const iconClassName = className ?? "h-8 w-8";

  // 0: Driveway and Parking Requirements (Mobile van parked in residential driveway / designated space)
  if (index === 0) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Driveway / parking outline & directional guide */}
        <path d="M4 26h24" strokeWidth={2} />
        <path d="M8 26l3-10h10l3 10" strokeDasharray="2 2" />
        {/* Van profile */}
        <path d="M7 22V13a2 2 0 0 1 2-2h10l4 4v7H7Z" />
        <circle cx="11" cy="22" r="2.5" />
        <circle cx="20" cy="22" r="2.5" />
        {/* Van front window */}
        <path d="M19 13h3.2l2.3 3H19v-3Z" />
        {/* Location beacon pin */}
        <circle cx="26" cy="7" r="3" />
        <path d="M26 10v3" />
      </svg>
    );
  }

  // 1: Services Offered Mobiles (Comprehensive mobile detailing tools: wash lance, steam wand & sparkle)
  if (index === 1) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Detailer lance / extraction nozzle */}
        <path d="M5 24l8-8" strokeWidth={2} />
        <path d="M11 14l3-3 4 4-3 3" />
        <path d="M18 11l6-6" />
        <path d="M22 3l7 7" />
        {/* Cleaning foam & extraction vapor spray */}
        <path d="M26 16c1.5 0 2.5 1 2.5 2.5S27 21 25.5 21" />
        <circle cx="20" cy="22" r="1.5" />
        <circle cx="24" cy="25" r="2" />
        {/* Sparkle gleam */}
        <path d="m8 7 .5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.2Z" />
      </svg>
    );
  }

  // 2: Self-Contained Power & Spot-Free Water (Onboard generator power bolt & pure water tank filtration)
  if (index === 2) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Water droplet / tank reservoir outline */}
        <path d="M14 4.5c2 2.5 5 6.5 5 10a7 7 0 1 1-14 0c0-3.5 3-7.5 5-10l2-2.5 2 2.5Z" />
        {/* Purity checkmark inside water droplet */}
        <path d="m8 14.5 2 2 4-4" />
        {/* Power generator lightning bolt */}
        <path d="M24 3v9h4l-5 11v-8h-3l4-12Z" strokeWidth={1.8} />
      </svg>
    );
  }

  // Default: Detailing Van with mobile star
  return (
    <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
      <path d="M4 22V11a2 2 0 0 1 2-2h12l5 5v8H4Z" />
      <circle cx="9" cy="22" r="2.5" />
      <circle cx="19" cy="22" r="2.5" />
      <path d="M18 11h3.5l3 3H18v-3Z" />
      <path d="m27 6 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
    </svg>
  );
}
