import consultImg from "../../public/images/consult.webp";
import heroImg from "../../public/images/hero-tms.webp";
import loungeImg from "../../public/images/lounge.webp";
import receptionImg from "../../public/images/reception.webp";
import reliefImg from "../../public/images/relief.webp";
import spravatoImg from "../../public/images/spravato.webp";
import tmsImg from "../../public/images/tms-deep-banner.webp";

export const SITE_NAME = "Transcend Functional Health";
export const SITE_SHORT = "Transcend";
export const PROVIDER = "Dr. Giron";

export const LOGO_URL = "/images/logo.png";
export const LOGO_LIGHT_URL = "/images/logo-light.png";
export const LOGO_MARK_URL = "/images/logo-mark.png";

/**
 * Imported (not referenced by path) so every image URL carries a content hash.
 * Replace a file in public/images and the page picks up the new one, with no
 * stale browser, CDN, or optimizer cache to clear.
 */
export const IMAGES = {
  hero: heroImg,
  tms: tmsImg,
  spravato: spravatoImg,
  consult: consultImg,
  reception: receptionImg,
  relief: reliefImg,
  lounge: loungeImg,
} as const;

export const BOOKING_SECTION_ID = "book";
export const FORM_SECTION_ID = "qualify";
export const CHECK_SECTION_ID = "self-check";
export const SERVICES_SECTION_ID = "treatments";
export const WHY_SECTION_ID = "why-transcend";
export const FAQ_SECTION_ID = "faq";
export const VISIT_SECTION_ID = "visit";
export const INSURANCE_SECTION_ID = "insurance";

export const FORM_ID = "6xF0Rl0LwgGzj8hI83kO";
export const FORM_IFRAME_ID = "inline-6xF0Rl0LwgGzj8hI83kO";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2082";

export const CALENDAR_ID = "6tqKw8A82p4bEUt0iEfo";
/** Prefixed with a letter: form_embed.js builds a CSS selector from this id, and ids that start with a digit throw. */
export const CALENDAR_IFRAME_ID = "cal_6tqKw8A82p4bEUt0iEfo_1794938943100";

/** Twilio tracking number for this landing page (not the clinic's main line). */
export const PHONE_NUMBER = "(719) 793-9694";
export const PHONE_HREF = "tel:+17197939694";

export const ADDRESS_LINES = [
  "7400 E Orchard Rd, Suite 3030N",
  "Greenwood Village, CO 80111",
] as const;
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=7400+E+Orchard+Rd+Suite+3030N+Greenwood+Village+CO+80111";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=7400+E+Orchard+Rd+Suite+3030N,+Greenwood+Village,+CO+80111&output=embed";

export const HOURS = [
  { days: "Monday to Thursday", time: "8am to 5pm" },
  { days: "Friday", time: "8am to 12pm" },
  { days: "Saturday and Sunday", time: "Closed" },
] as const;

export const WEBSITE_URL = "https://www.transcendfunctionalhealth.com/";
export const WEBSITE_LABEL = "transcendfunctionalhealth.com";

export const DEVICE_NAME = "BrainsWay Deep TMS";

export const MARQUEE_ITEMS = [
  "FDA-cleared BrainsWay Deep TMS",
  "FDA-approved Spravato®",
  "No anesthesia or sedation for TMS",
  "Whole-person psychiatric care",
  "Now accepting new patients",
  "Greenwood Village, Colorado",
  "Personalized care plans",
] as const;

export const CHECK_PROMPTS = [
  {
    question: "Have you tried antidepressants without getting enough relief?",
    description: "One or more medications, and the heaviness is still there.",
  },
  {
    question: "Have side effects made medication hard to stay on?",
    description: "Weight changes, fatigue, numbness, or feeling unlike yourself.",
  },
  {
    question: "Is depression disrupting your daily life?",
    description: "Work, sleep, relationships, or motivation feel harder than they should.",
  },
  {
    question: "Has therapy alone not been enough?",
    description: "You've put in the effort and still feel stuck.",
  },
  {
    question: "Are you looking for an option beyond another prescription?",
    description: "Something non-invasive, in-office, and backed by evidence.",
  },
] as const;

export const SERVICES = [
  {
    id: "tms",
    title: "Deep TMS Therapy",
    badge: "FDA-cleared",
    eyebrow: "Non-invasive · No medication",
    description:
      "Transcranial magnetic stimulation uses short magnetic pulses from a coil that rests outside your head to stimulate the brain networks involved in mood. Nothing enters the body. You stay awake, seated, and comfortable the whole time.",
    points: [
      "BrainsWay® Deep TMS, delivered in our office",
      "No anesthesia, no sedation, no surgery",
      "No downtime, so you can return to your day",
      "A course of weekday visits over several weeks",
    ],
    facts: [
      { label: "Setting", value: "In-office" },
      { label: "Sedation", value: "None" },
      { label: "Downtime", value: "None" },
    ],
    image: IMAGES.tms,
    imageAlt:
      "A smiling patient seated comfortably during a session with the BrainsWay Deep TMS helmet resting on her head",
  },
  {
    id: "spravato",
    title: "Spravato® (Esketamine)",
    badge: "FDA-approved",
    eyebrow: "Nasal spray · Monitored in-office",
    description:
      "Spravato is a prescription nasal spray for adults with treatment-resistant depression. You take it in our office with the care team present, then rest in a quiet, private space while we monitor how you feel.",
    points: [
      "For adults whose depression hasn't improved enough with antidepressants",
      "Self-administered under clinical supervision",
      "Monitored for at least two hours after each dose",
      "May be combined with TMS when clinically appropriate",
    ],
    facts: [
      { label: "Setting", value: "In-office" },
      { label: "Form", value: "Nasal spray" },
      { label: "Monitoring", value: "2+ hours" },
    ],
    image: IMAGES.spravato,
    imageAlt:
      "A patient seated in a treatment chair using a nasal spray while a clinician stands beside her",
  },
] as const;

export const COMPARE_ROWS = [
  {
    label: "What it is",
    tms: "Magnetic pulses that stimulate mood-related brain networks",
    spravato: "Esketamine, a prescription nasal spray",
  },
  {
    label: "How it's given",
    tms: "A cushioned helmet rests on your head. Nothing enters the body",
    spravato: "You use the spray yourself with the care team present",
  },
  {
    label: "During your visit",
    tms: "Awake and seated. You'll hear clicking and feel tapping on the scalp",
    spravato: "Rest in a private room while we monitor you",
  },
  {
    label: "Afterward",
    tms: "Return to work, school, or home right away",
    spravato: "Arrange a ride home. No driving until the next day",
  },
  {
    label: "Anesthesia",
    tms: "None",
    spravato: "None",
  },
] as const;

export const JOURNEY_STEPS = [
  {
    title: "Free consultation",
    description:
      "A relaxed conversation about your symptoms, what you've already tried, and what you want to feel like again.",
  },
  {
    title: "Whole-person evaluation",
    description:
      "We look at the full picture: history, sleep, stress, physical health, and lifestyle, not just a checklist.",
  },
  {
    title: "Your personalized plan",
    description:
      "TMS, Spravato, or both when clinically appropriate, built around your goals, schedule, and coverage.",
  },
  {
    title: "Ongoing support",
    description:
      "We track your progress at every step and adjust as you go. Healing is dynamic, and so is your care.",
  },
] as const;

export const WHY_ITEMS = [
  {
    title: "The whole person, not just symptoms",
    description:
      "Sleep, nutrition, stress, physical health, and relationships all shape how you feel. Your plan accounts for all of it.",
  },
  {
    title: "Psychiatry meets functional medicine",
    description:
      "Evidence-based psychiatric care combined with functional medicine principles and innovative treatments under one roof.",
  },
  {
    title: "Unrushed, human-centered care",
    description:
      "No one-size-fits-all plans and no hurried appointments. You'll be heard, understood, and respected.",
  },
  {
    title: "A space designed to feel restorative",
    description:
      "Warm, calming, and private. Our clinic was built intentionally to feel nothing like a typical medical office.",
  },
] as const;

export const TRUST_ITEMS = [
  {
    title: "FDA-cleared Deep TMS",
    description: "BrainsWay® technology for depression that hasn't responded to medication.",
    icon: "pulse",
  },
  {
    title: "FDA-approved Spravato®",
    description: "Delivered and monitored in a certified healthcare setting.",
    icon: "shield",
  },
  {
    title: "Accepting new patients",
    description: `${PROVIDER} and the care team are welcoming new patients now.`,
    icon: "door",
  },
  {
    title: "Insurance guidance",
    description: "We review your benefits and self-pay options with you before you begin.",
    icon: "card",
  },
] as const;

type InsurancePlan = {
  name: string;
  /** Optional small line under the logo. */
  note?: string;
  /**
   * Path to the logo in public/images/insurance (SVG or transparent PNG).
   * While this is null the card shows the plan name as text instead.
   */
  logo: string | null;
  /** Set when the logo is a symbol only, so the plan name is shown beside it. */
  showName?: boolean;
};

export const INSURANCE_PLANS: readonly InsurancePlan[] = [
  { name: "Optum", logo: "/images/insurance/optum.svg" },
  { name: "UnitedHealthcare", logo: "/images/insurance/unitedhealthcare.svg" },
  { name: "Medicare", logo: "/images/insurance/medicare.png" },
  {
    name: "Health First Colorado (Colorado Medicaid)",
    note: "Spravato® only",
    logo: "/images/insurance/health-first-colorado.png",
  },
  {
    name: "Mountain Health Network",
    logo: "/images/insurance/mountain-health-network.png",
    showName: true,
  },
  { name: "Cigna", note: "Evernorth", logo: "/images/insurance/cigna.svg" },
  { name: "Blue Cross Blue Shield", logo: "/images/insurance/blue-cross-blue-shield.svg" },
  { name: "Humana", logo: "/images/insurance/humana.svg" },
  { name: "TRICARE", logo: "/images/insurance/tricare.svg" },
  { name: "Aetna", logo: "/images/insurance/aetna.svg" },
  { name: "Curative", logo: "/images/insurance/curative.png" },
];

export const FAQ_ITEMS = [
  {
    question: "Who may qualify for TMS or Spravato®?",
    answer:
      "Both are typically considered for adults whose depression has not improved enough with antidepressant medication. A clinical evaluation confirms whether either option is safe and appropriate for you. The fastest way to find out is a free consultation.",
  },
  {
    question: "What does a TMS session feel like?",
    answer:
      "You sit in a comfortable chair, awake the entire time, wearing ear protection. Most people notice a tapping sensation on the scalp and a clicking sound. There is no anesthesia or sedation, and you can return to your day right afterward. Some people have a mild headache or scalp discomfort, especially early on.",
  },
  {
    question: "How is Spravato® different from TMS?",
    answer:
      "TMS uses magnetic pulses and involves no medication. Spravato is a prescription esketamine nasal spray you take in our office, followed by at least two hours of monitoring. You'll need a ride home after Spravato. Your clinician will help you decide which fits your history and goals, and the two may be combined when clinically appropriate.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      `${PROVIDER} and the care team at Transcend Functional Health specialize in depression that hasn't responded to standard treatment. They also support people living with anxiety, trauma, burnout, and other mood disorders through whole-person psychiatric care. Your consultation is the place to talk through what you're experiencing.`,
  },
  {
    question: "Will insurance cover treatment?",
    answer:
      "Coverage depends on your plan and is not guaranteed. Our team reviews your insurance requirements and expected costs with you up front, and self-pay options are available. Call us or book a consultation and we'll walk you through it.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation with our care team online, complete the short qualification form, or call our office. We'll talk through your history, answer your questions, and map out next steps with no obligation.",
  },
] as const;
