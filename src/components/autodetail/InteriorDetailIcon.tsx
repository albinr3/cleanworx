type InteriorDetailIconProps = {
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

export function InteriorDetailIcon({ index, className }: InteriorDetailIconProps) {
  const iconClassName = className ?? "h-8 w-8";

  // 0: Seats, Carpets, and Floor Mats (Extraction vacuum head & fabric seat contours)
  if (index === 0) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Car seat backrest & base */}
        <path d="M8 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v13h-10V5Z" />
        <path d="M6 18h16a3 3 0 0 1 3 3v2a2 2 0 0 1-2 2H9a3 3 0 0 1-3-3v-4Z" />
        {/* Extraction spray / steam lines */}
        <path d="M22 6l4-2" />
        <path d="M23 10l5-1" />
        <path d="M22 14l4 1" />
        <circle cx="28" cy="10" r="1" fill="currentColor" />
      </svg>
    );
  }

  // 1: Leather Cleaning and Conditioning (Supple leather hide shield with moisture droplet & sparkle)
  if (index === 1) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Leather hide emblem */}
        <path d="M16 3c-2 3-5 3-7 4s-4 4-4 7c0 4 2 6 3 8s2 4 4 6c2-1 4-1 4-1s2 0 4 1c2-2 3-4 4-6s3-4 3-8c0-3-2-6-4-7s-5-1-7-4Z" />
        {/* Nourishing droplet in center */}
        <path d="M16 11c1.8 2.2 3 3.8 3 5.4a3 3 0 0 1-6 0c0-1.6 1.2-3.2 3-5.4Z" />
        {/* Conditioning sheen sparkle */}
        <path d="m25 6 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" />
      </svg>
    );
  }

  // 2: Pet Hair and Heavy Debris Removal (Grooming blade / air extraction tool lifting stubborn fibers)
  if (index === 2) {
    return (
      <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
        {/* Detailer extraction tool handle and head */}
        <path d="M6 26l8-8" strokeWidth={2.2} />
        <path d="M12 16l6-6" />
        <path d="M17 9l5-5a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8l-5 5" />
        {/* Agitation bristles / lifted pet hair strands */}
        <path d="M4 18c1.5-2 3.5-2 5-1" />
        <path d="M5 13c2-1.5 4.5-1 6 0" />
        <path d="M7 8c2-2 5-1 7 1" />
        {/* Lifted debris particle */}
        <circle cx="21" cy="20" r="1.5" fill="currentColor" />
        <circle cx="26" cy="18" r="1" fill="currentColor" />
      </svg>
    );
  }

  // Default: Sanitization & Deep Clean
  return (
    <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}>
      <path d="M16 4.5 24 8v6.3c0 5.4-3.2 10-8 12.2-4.8-2.2-8-6.8-8-12.2V8l8-3.5Z" />
      <path d="m12.1 15.8 2.4 2.4 5.3-5.7" />
      <path d="M25.5 22.5c1.2 1.5 1.8 2.6 1.8 3.6a1.8 1.8 0 1 1-3.6 0c0-1 .6-2.1 1.8-3.6Z" />
    </svg>
  );
}
