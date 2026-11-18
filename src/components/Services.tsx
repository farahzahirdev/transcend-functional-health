import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { CheckIcon } from "@/components/Icons";
import { COMPARE_ROWS, SERVICES, SERVICES_SECTION_ID } from "@/lib/constants";

export default function Services() {
  return (
    <section id={SERVICES_SECTION_ID} className="section services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Advanced treatment options</p>
          <h2>Two proven paths forward when standard care falls short</h2>
          <p className="lead">
            Both treatments happen right here in our Greenwood Village office, and both are chosen
            with you after a thorough evaluation.
          </p>
        </Reveal>

        <div className="service-rows">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`service${index % 2 === 1 ? " is-flipped" : ""}`}
            >
              <Reveal className="service-media-wrap">
                <div className="service-media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 1023px) 100vw, 560px"
                    className="service-img"
                  />
                  <span className="service-badge">{service.badge}</span>
                </div>
              </Reveal>

              <Reveal delay={2} className="service-copy">
                <p className="eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-points">
                  {service.points.map((point) => (
                    <li key={point}>
                      <span className="tick">
                        <CheckIcon className="icon-xs" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <dl className="service-facts">
                  {service.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="service-actions">
                  <BookButton variant="primary" />
                  <QualifyButton variant="outline" />
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal className="compare">
          <div className="compare-head">
            <p className="eyebrow">At a glance</p>
            <h3>TMS vs. Spravato®</h3>
          </div>
          <div className="compare-table" role="table" aria-label="TMS compared with Spravato">
            <div className="compare-row compare-row-head" role="row">
              <span role="columnheader" className="sr-only">
                Topic
              </span>
              <span role="columnheader">Deep TMS</span>
              <span role="columnheader">Spravato®</span>
            </div>
            {COMPARE_ROWS.map((row) => (
              <div key={row.label} className="compare-row" role="row">
                <span role="rowheader" className="compare-label">
                  {row.label}
                </span>
                <span role="cell" data-col="Deep TMS">
                  {row.tms}
                </span>
                <span role="cell" data-col="Spravato®">
                  {row.spravato}
                </span>
              </div>
            ))}
          </div>
          <p className="compare-note">
            Not sure which is right for you? That&apos;s exactly what the consultation is for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
