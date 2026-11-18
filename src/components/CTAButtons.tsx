import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import {
  BOOKING_SECTION_ID,
  FORM_SECTION_ID,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost-light";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

const cls = (variant: Variant, className: string) => `btn btn-${variant} ${className}`.trim();

export function BookButton({ variant = "primary", className = "", arrow = true }: ButtonProps) {
  return (
    <a href={`#${BOOKING_SECTION_ID}`} className={cls(variant, className)}>
      <span>Book your Free Consultation</span>
      {arrow ? <ArrowIcon className="btn-arrow" /> : null}
    </a>
  );
}

export function QualifyButton({ variant = "outline", className = "" }: ButtonProps) {
  return (
    <a href={`#${FORM_SECTION_ID}`} className={cls(variant, className)}>
      <span>Find out if you Qualify</span>
    </a>
  );
}

export function CallButton({ variant = "outline", className = "" }: ButtonProps) {
  return (
    <a href={PHONE_HREF} className={cls(variant, className)}>
      <PhoneIcon className="btn-icon" />
      <span>Call {PHONE_NUMBER}</span>
    </a>
  );
}
