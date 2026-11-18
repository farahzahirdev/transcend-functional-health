"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { ArrowIcon, CheckIcon, ClockIcon, ShieldIcon } from "@/components/Icons";
import { CHECK_PROMPTS, CHECK_SECTION_ID } from "@/lib/constants";

const TOTAL = CHECK_PROMPTS.length;
const RING = 2 * Math.PI * 52;

const PERKS = [
  { Icon: ClockIcon, title: "Takes under a minute", note: "Five quick yes or no questions" },
  { Icon: ShieldIcon, title: "Completely private", note: "Your answers are never saved or sent" },
  { Icon: CheckIcon, title: "No obligation", note: "Just a clearer idea of your next step" },
] as const;

function resultFor(count: number) {
  if (count === 0) {
    return {
      title: "We're still here if you need us",
      body: "Your answers don't point strongly to TMS or Spravato® right now. If you're struggling in other ways, a free consultation is still a good place to talk it through.",
    };
  }
  if (count < 3) {
    return {
      title: "It may be worth a conversation",
      body: "What you're describing is common among people who go on to explore TMS or Spravato®. A free consultation can give you a clear answer.",
    };
  }
  return {
    title: "You may be a candidate",
    body: "Your answers line up with what many people experience before exploring these treatments. The next step is a short, no-pressure consultation to confirm eligibility.",
  };
}

export default function SelfCheck() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const step = answers.length;
  const done = step >= TOTAL;
  const count = answers.filter(Boolean).length;
  const result = resultFor(count);

  const answer = (value: boolean) => {
    setDirection("forward");
    setAnswers((prev) => [...prev, value]);
  };

  const back = () => {
    setDirection("back");
    setAnswers((prev) => prev.slice(0, -1));
  };

  const restart = () => {
    setDirection("back");
    setAnswers([]);
  };

  return (
    <section id={CHECK_SECTION_ID} className="section check">
      <div className="wrap">
        <div className="check-grid">
          <Reveal className="check-copy">
            <p className="eyebrow">Find out if you qualify</p>
            <h2>
              Could TMS or Spravato® be <em>right for you?</em>
            </h2>
            <p className="lead">
              These treatments are designed for people whose depression hasn&apos;t responded to
              standard care. Answer five quick questions to see where you stand.
            </p>

            <ul className="check-perks">
              {PERKS.map(({ Icon, title, note }) => (
                <li key={title}>
                  <span className="check-perk-icon">
                    <Icon className="icon-sm" />
                  </span>
                  <span>
                    {title}
                    <small>{note}</small>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2} className="quiz-wrap">
            <div className="quiz">
              <div className="quiz-top">
                <span aria-live="polite">
                  {done ? "Your result" : `Question ${step + 1} of ${TOTAL}`}
                </span>
                <button type="button" className="quiz-back" onClick={back} disabled={step === 0}>
                  <ArrowIcon />
                  Back
                </button>
              </div>

              <div className="quiz-progress" aria-hidden>
                {CHECK_PROMPTS.map((prompt, index) => (
                  <span
                    key={prompt.question}
                    className={index < step ? "is-done" : index === step ? "is-current" : ""}
                  />
                ))}
              </div>

              {done ? (
                <div
                  key="result"
                  className={`quiz-stage quiz-result${direction === "back" ? " is-back" : ""}`}
                >
                  <div className="quiz-ring" aria-hidden>
                    <svg viewBox="0 0 120 120">
                      <circle className="quiz-ring-track" cx="60" cy="60" r="52" />
                      <circle
                        className="quiz-ring-fill"
                        cx="60"
                        cy="60"
                        r="52"
                        strokeDasharray={RING}
                        strokeDashoffset={RING * (1 - count / TOTAL)}
                        style={{ ["--ring-full" as string]: RING }}
                      />
                    </svg>
                    <span className="quiz-ring-count">
                      {count}
                      <small>of {TOTAL}</small>
                    </span>
                  </div>

                  <h3 className="quiz-question">{result.title}</h3>
                  <p className="quiz-desc">{result.body}</p>

                  <div className="quiz-actions">
                    <QualifyButton variant="gold" />
                    <BookButton variant="outline-light" arrow={false} />
                  </div>

                  <p className="quiz-note">
                    This is not a diagnosis. Eligibility is determined by a clinician after an
                    evaluation.
                  </p>
                  <button type="button" className="quiz-restart" onClick={restart}>
                    Start over
                  </button>
                </div>
              ) : (
                <div
                  key={step}
                  className={`quiz-stage${direction === "back" ? " is-back" : ""}`}
                >
                  <span className="quiz-num" aria-hidden>
                    {String(step + 1).padStart(2, "0")}
                  </span>
                  <h3 className="quiz-question">{CHECK_PROMPTS[step].question}</h3>
                  <p className="quiz-desc">{CHECK_PROMPTS[step].description}</p>

                  <div className="quiz-answers">
                    <button
                      type="button"
                      className="quiz-answer quiz-answer-yes"
                      onClick={() => answer(true)}
                    >
                      Yes, that&apos;s me
                      <ArrowIcon />
                    </button>
                    <button type="button" className="quiz-answer" onClick={() => answer(false)}>
                      Not really
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
