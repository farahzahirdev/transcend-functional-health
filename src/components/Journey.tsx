import Reveal from "@/components/Reveal";
import { JOURNEY_STEPS } from "@/lib/constants";

export default function Journey() {
  return (
    <section className="section journey">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">What to expect</p>
          <h2>From first conversation to feeling like yourself again</h2>
        </Reveal>

        <Reveal className="journey-track">
          <span className="journey-line" aria-hidden />
          <ol className="journey-steps">
            {JOURNEY_STEPS.map((step, index) => (
              <li key={step.title} className="journey-step" style={{ ["--i" as string]: index }}>
                <span className="journey-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
