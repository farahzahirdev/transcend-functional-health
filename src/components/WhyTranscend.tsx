import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, CallButton } from "@/components/CTAButtons";
import {
  BrainIcon,
  CardIcon,
  DoorIcon,
  HeartIcon,
  LeafIcon,
  PulseIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/Icons";
import { IMAGES, PROVIDER, TRUST_ITEMS, WHY_ITEMS, WHY_SECTION_ID } from "@/lib/constants";

const WHY_ICONS = [LeafIcon, BrainIcon, HeartIcon, SparkIcon] as const;
const TRUST_ICONS = { pulse: PulseIcon, shield: ShieldIcon, door: DoorIcon, card: CardIcon } as const;

export default function WhyTranscend() {
  return (
    <section id={WHY_SECTION_ID} className="section why">
      <div className="why-bg" aria-hidden />
      <div className="wrap">
        <div className="why-grid">
          <Reveal className="why-media-wrap">
            <div className="why-media">
              <Image
                src={IMAGES.consult}
                alt="A clinician and patient talking in a warm, comfortable consultation room"
                fill
                quality={95}
                // The photo is 2:1 but the frame is 5:4, so it is cropped by height and
                // needs about 1.6x the frame width in pixels to stay sharp.
                sizes="(max-width: 1023px) 160vw, 900px"
                className="why-img"
              />
            </div>
            <div className="why-media-small">
              <Image
                src={IMAGES.relief}
                alt="Woman with eyes closed, smiling calmly outdoors at sunset"
                fill
                quality={90}
                sizes="260px"
                className="why-img"
              />
            </div>
            <div className="why-accepting">
              <span className="pulse-dot" aria-hidden />
              <span>
                <strong>{PROVIDER}</strong>
                is accepting new patients
              </span>
            </div>
          </Reveal>

          <div className="why-copy">
            <Reveal>
              <p className="eyebrow eyebrow-light">Why Transcend</p>
              <h2>Care that sees all of you, not just a diagnosis</h2>
              <p className="lead lead-light">
                Choosing mental health care is deeply personal. You deserve more than rushed
                appointments and one-size-fits-all treatment. Led by {PROVIDER}, our team combines
                evidence-based psychiatry, functional medicine, and innovative therapies in a
                calming space built for lasting healing.
              </p>
            </Reveal>

            <ul className="why-list">
              {WHY_ITEMS.map((item, index) => {
                const Icon = WHY_ICONS[index];
                return (
                  <li key={item.title}>
                    <Reveal delay={((index % 2) + 1) as 1 | 2} className="why-item">
                      <span className="why-icon">
                        <Icon />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Reveal className="why-actions">
              <BookButton variant="gold" />
              <CallButton variant="outline-light" />
            </Reveal>
          </div>
        </div>

        <Reveal>
          <blockquote className="why-quote">
            <span>Every person is unique.</span>
            <span>Every system is connected.</span>
            <span>Every interaction matters.</span>
          </blockquote>
        </Reveal>

        <ul className="trust-grid">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = TRUST_ICONS[item.icon];
            return (
              <li key={item.title}>
                <Reveal delay={(index + 1) as 1 | 2 | 3 | 4} className="trust-card">
                  <span className="trust-icon">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
