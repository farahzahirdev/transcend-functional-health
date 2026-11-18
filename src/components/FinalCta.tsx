import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, CallButton, QualifyButton } from "@/components/CTAButtons";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import {
  IMAGES,
  ADDRESS_LINES,
  HOURS,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  VISIT_SECTION_ID,
} from "@/lib/constants";

export default function FinalCta() {
  return (
    <section id={VISIT_SECTION_ID} className="section final">
      <div className="wrap">
        <Reveal>
          <div className="final-card">
            <svg className="final-arcs" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden>
              <path d="M-20 400 C 300 260, 620 420, 900 250 S 1150 60, 1230 20" />
              <path d="M-20 430 C 360 330, 660 450, 960 320 S 1180 170, 1230 130" />
            </svg>
            <div className="final-copy">
              <p className="eyebrow eyebrow-light">Begin your healing journey</p>
              <h2>You don&apos;t have to keep waiting to feel better</h2>
              <p className="lead lead-light">
                Start with a free consultation. We&apos;ll listen, answer your questions, and help
                you understand whether TMS or Spravato® is right for you.
              </p>
              <div className="final-actions">
                <BookButton variant="gold" />
                <QualifyButton variant="outline-light" />
                <CallButton variant="outline-light" />
              </div>
            </div>
            <div className="final-media">
              <Image
                src={IMAGES.lounge}
                alt="The Transcend Functional Health lounge with soft armchairs, greenery, and the clinic sign on the wall"
                fill
                quality={90}
                sizes="(max-width: 1023px) 100vw, 900px"
                className="final-img"
              />
            </div>
          </div>
        </Reveal>

        <div className="visit-grid">
          <Reveal className="visit-info">
            <p className="eyebrow">Visit us</p>
            <h3>{SITE_NAME}</h3>

            <ul className="visit-list">
              <li>
                <span className="contact-icon">
                  <PinIcon className="icon-sm" />
                </span>
                <div>
                  <p className="contact-label">Address</p>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="visit-link">
                    {ADDRESS_LINES[0]}
                    <br />
                    {ADDRESS_LINES[1]}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <PhoneIcon className="icon-sm" />
                </span>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={PHONE_HREF} className="visit-link">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <ClockIcon className="icon-sm" />
                </span>
                <div className="visit-hours-wrap">
                  <p className="contact-label">Hours</p>
                  <dl className="visit-hours">
                    {HOURS.map((row) => (
                      <div key={row.days}>
                        <dt>{row.days}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Get directions
            </a>
          </Reveal>

          <Reveal delay={2} className="visit-map">
            <iframe
              src={MAPS_EMBED_URL}
              title={`Map showing ${SITE_NAME} at ${ADDRESS_LINES.join(", ")}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
