"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CallButton } from "@/components/CTAButtons";
import { FAQ_ITEMS, FAQ_SECTION_ID, IMAGES } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={FAQ_SECTION_ID} className="section faq">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-aside">
            <Reveal>
              <p className="eyebrow">Common questions</p>
              <h2>Answers before you take the next step</h2>
              <p className="lead">
                Straightforward details about eligibility, what treatment feels like, and how TMS
                and Spravato® compare.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="faq-media">
                <Image
                  src={IMAGES.reception}
                  alt="Welcoming reception area at Transcend Functional Health"
                  fill
                  quality={90}
                  sizes="(max-width: 1023px) 100vw, 480px"
                  className="faq-img"
                />
                <div className="faq-media-card">
                  <p>Still have questions?</p>
                  <CallButton variant="gold" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = open === index;
              const panelId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <Reveal key={item.question} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <div className={`faq-item${isOpen ? " is-open" : ""}`}>
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        className="faq-trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-icon" aria-hidden />
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={triggerId} className="faq-panel">
                      <div className="faq-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
