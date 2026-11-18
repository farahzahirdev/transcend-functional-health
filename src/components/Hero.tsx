import Image from "next/image";
import { BookButton } from "@/components/CTAButtons";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/Icons";
import { FORM_SECTION_ID, IMAGES, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const PROOF = ["FDA-cleared Deep TMS", "No anesthesia", "Whole-person care"] as const;

const STRIP = [
  { value: "BrainsWay®", label: "Deep TMS technology" },
  { value: "Spravato®", label: "FDA-approved nasal spray" },
  { value: "In-office", label: "Non-invasive treatment" },
  { value: "Dr. Giron", label: "Accepting new patients" },
] as const;

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-mark" aria-hidden />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow rise rise-1">
            <span className="pulse-dot" aria-hidden />
            Now accepting new patients
          </p>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-line rise rise-2">Depression that</span>
            <span className="hero-line rise rise-3">won&apos;t lift can still</span>
            <span className="hero-line rise rise-4">
              find <em>real relief.</em>
            </span>
          </h1>

          <p className="hero-lede rise rise-5">
            When medication and therapy haven&apos;t been enough, Deep TMS and Spravato® offer
            proven options for treatment-resistant depression, guided by a team in Greenwood
            Village that treats the whole person.
          </p>

          <div className="hero-actions rise rise-6">
            <BookButton variant="gold" />
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-teal">
              <span>Find out if you Qualify</span>
              <ArrowIcon className="btn-arrow" />
            </a>
          </div>

          <a href={PHONE_HREF} className="hero-call rise rise-7">
            <span className="hero-call-icon">
              <PhoneIcon className="icon-sm" />
            </span>
            <span>
              Call our care team at <strong>{PHONE_NUMBER}</strong>
            </span>
          </a>

          <ul className="hero-proof rise rise-8">
            {PROOF.map((item) => (
              <li key={item}>
                <CheckIcon className="icon-sm" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <span className="hero-arc-teal" aria-hidden />
          <span className="hero-arc-gold" aria-hidden />

          <div className="hero-arch">
            <Image
              src={IMAGES.hero}
              alt="A clinician positioning the BrainsWay Deep TMS helmet for a smiling patient"
              fill
              priority
              quality={95}
              // Landscape photo cropped into a portrait arch: it is sized by height,
              // so it needs far more pixels than the arch is wide.
              sizes="(max-width: 1023px) 260vw, 1500px"
              className="hero-img"
            />
          </div>

          <div className="hero-card hero-card-a" aria-hidden>
            <span className="hero-card-tag">FDA-cleared</span>
            <p className="hero-card-title">BrainsWay® Deep TMS</p>
            <svg className="hero-wave" viewBox="0 0 200 40" fill="none">
              <path
                pathLength={1}
                d="M0 20h28l8-14 12 28 10-22 8 8h22l8-16 12 32 10-24 8 8h66"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="hero-card-note">Non-invasive. Awake and comfortable.</p>
          </div>
        </div>
      </div>

      <div className="hero-strip">
        <ul className="wrap hero-strip-list">
          {STRIP.map((item) => (
            <li key={item.value} className="hero-strip-item">
              <span className="hero-strip-value">{item.value}</span>
              <span className="hero-strip-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
