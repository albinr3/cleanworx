type CeramicBenefitIconProps = {
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

export function CeramicBenefitIcon({ index, className }: CeramicBenefitIconProps) {
  const iconClassName = className ?? "h-8 w-8";

  if (index === 0) {
    return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M16 3.5 25.5 7v7.4c0 6.4-4 11.6-9.5 14.1-5.5-2.5-9.5-7.7-9.5-14.1V7L16 3.5Z" /><path d="m12.1 16.1 2.5 2.5 5.4-6" /><path d="m24.7 3.7.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z" /></svg>;
  }

  if (index === 1) {
    return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M5 21.5h22" /><path d="M7.5 21.5 9.8 14h12.4l2.3 7.5" /><path d="M12 14 14.3 9h3.4l2.3 5" /><path d="M9 25h14" /><path d="M25.7 6.3v4.5" /><path d="M23.5 8.5h4.5" /></svg>;
  }

  if (index === 2) {
    return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M6 24.5 13.5 7.5l5 8.2L22 11l4 13.5H6Z" /><path d="m13.5 7.5 2.7 9.2 2.3-1 2 4.3" /><path d="m24.5 4 .7 1.8L27 6.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" /></svg>;
  }

  if (index === 3) {
    return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M16 4.5c4.4 5.1 7 8.8 7 12.2a7 7 0 1 1-14 0c0-3.4 2.6-7.1 7-12.2Z" /><path d="M6 10.5c1.2 1.5 1.8 2.6 1.8 3.6a1.8 1.8 0 0 1-3.6 0c0-1 .6-2.1 1.8-3.6Z" /><path d="M26 12.5c1.2 1.5 1.8 2.6 1.8 3.6a1.8 1.8 0 0 1-3.6 0c0-1 .6-2.1 1.8-3.6Z" /><path d="M12.8 19.2c.7 1.3 1.8 2.1 3.2 2.3" /></svg>;
  }

  if (index === 4) {
    return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M5 8.5h12" /><path d="M5 13h17" /><path d="M5 17.5h10" /><path d="m19 8.5 4.5 4.5L19 17.5" /><path d="M20.5 22.5c2.5-3.1 4-5.3 4-7.3a4 4 0 0 0-8 0c0 2 1.5 4.2 4 7.3Z" /><path d="M7 25.5h17" /></svg>;
  }

  return <svg aria-hidden="true" className={iconClassName} viewBox="0 0 32 32" {...sharedProps}><path d="M16 4.5 24 8v6.3c0 5.4-3.2 10-8 12.2-4.8-2.2-8-6.8-8-12.2V8l8-3.5Z" /><path d="m12.1 15.8 2.4 2.4 5.3-5.7" /><path d="M25.5 22.5c1.2 1.5 1.8 2.6 1.8 3.6a1.8 1.8 0 1 1-3.6 0c0-1 .6-2.1 1.8-3.6Z" /></svg>;
}
