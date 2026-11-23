import Image from "next/image";
import Reveal from "@/components/Reveal";
import { INSURANCE_PLANS, INSURANCE_SECTION_ID } from "@/lib/constants";

export default function Insurance() {
  return (
    <section id={INSURANCE_SECTION_ID} className="section insurance">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Insurance</p>
          <h2>Insurance plans we work with</h2>
          <p className="lead">
            We review your benefits and expected costs with you before you begin. Self-pay options
            are also available.
          </p>
        </Reveal>
      </div>

      {/* Same content twice so the strip loops seamlessly; the copy is hidden from screen readers. */}
      <div className="insurance-strip">
        <div className="insurance-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="insurance-group" aria-hidden={copy === 1}>
              {INSURANCE_PLANS.map((plan) => (
                <li key={plan.name} className="insurance-card">
                  {plan.logo && plan.showName ? (
                    <span className="insurance-lockup">
                      <span className="insurance-mark">
                        <Image
                          src={plan.logo}
                          alt=""
                          fill
                          unoptimized
                          sizes="40px"
                          className="insurance-logo-img"
                        />
                      </span>
                      <span className="insurance-lockup-name">{plan.name}</span>
                    </span>
                  ) : plan.logo ? (
                    <span className="insurance-logo">
                      <Image
                        src={plan.logo}
                        alt={copy === 0 ? plan.name : ""}
                        fill
                        unoptimized
                        sizes="200px"
                        className="insurance-logo-img"
                      />
                    </span>
                  ) : (
                    <span className="insurance-wordmark">{plan.name}</span>
                  )}
                  {plan.note ? <span className="insurance-note">{plan.note}</span> : null}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="wrap">
        <p className="insurance-disclaimer">
          Coverage depends on your plan and is not guaranteed.
        </p>
      </div>
    </section>
  );
}
