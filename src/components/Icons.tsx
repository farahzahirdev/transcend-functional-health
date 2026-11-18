type IconProps = { className?: string };

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function PhoneIcon({ className = "icon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} strokeWidth={2} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} strokeWidth={2.2} className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function PinIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 10-14 0C5 14.900 12 21 12 21z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </svg>
  );
}

export function ClockIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M12 7.500V12l3 2" />
    </svg>
  );
}

export function PulseIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M3 12h4l2.500-6 4 12 2.500-6H21" />
    </svg>
  );
}

export function ShieldIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 3l7.500 3v5.500c0 4.300-3 7.600-7.500 9.500-4.500-1.900-7.500-5.200-7.500-9.500V6L12 3z" />
      <path d="M8.800 12.200l2.300 2.300 4.200-4.600" />
    </svg>
  );
}

export function DoorIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <circle cx="9" cy="8" r="3.200" />
      <path d="M3 20c.400-3.400 2.800-5.500 6-5.500s5.600 2.100 6 5.500" />
      <path d="M18.500 7v6M15.500 10h6" />
    </svg>
  );
}

export function CardIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="5.500" width="18" height="13" rx="2.500" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  );
}

export function LeafIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z" />
      <path d="M5 19c2.500-4 5.500-7 10-9.500" />
    </svg>
  );
}

export function HeartIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 20s-7.500-4.600-7.500-10.200A4.300 4.300 0 0112 7.300a4.300 4.300 0 017.500 2.500C19.500 15.400 12 20 12 20z" />
    </svg>
  );
}

export function SparkIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.500 2.500M15.500 15.500L18 18M18 6l-2.500 2.500M8.500 15.500L6 18" />
    </svg>
  );
}

export function BrainIcon({ className = "icon" }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M9.500 4.500a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001.500 4.500 3 3 0 005.500 1V5.500a2 2 0 00-2-1z" />
      <path d="M14.500 4.500a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1.500 4.500 3 3 0 01-5.500 1V5.500a2 2 0 012-1z" />
    </svg>
  );
}
