"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { CallButton } from "@/components/CTAButtons";
import { CheckIcon } from "@/components/Icons";
import { BOOKING_SECTION_ID, CALENDAR_ID, CALENDAR_IFRAME_ID, SITE_NAME } from "@/lib/constants";
import { mountAndBindGhlCalendar, revealGhlIframe, unmountGhlEmbed } from "@/lib/ghlEmbed";

const CALENDAR_MIN_HEIGHT = "720px";

const POINTS = [
  "Free, with no obligation",
  "Talk through symptoms and past treatments",
  "Review insurance and self-pay options",
  "Leave with clear next steps",
] as const;

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;

  if (typeof data === "string") {
    const match = data.match(/height[:=]\s*(\d+)/i);
    if (match) return Number(match[1]);
  }

  if (typeof data === "object" && data !== null) {
    const payload = data as Record<string, unknown>;
    if (typeof payload.height === "number" && payload.height > 0) return payload.height;
    if (typeof payload.frameHeight === "number" && payload.frameHeight > 0) {
      return payload.frameHeight;
    }
  }

  return null;
}

export default function BookingCalendar() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlCalendar(host, {
      id: CALENDAR_ID,
      title: `Book a free consultation with ${SITE_NAME}`,
      iframeId: CALENDAR_IFRAME_ID,
      minHeight: CALENDAR_MIN_HEIGHT,
    });

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("4tms.com")) return;
      const height = parseEmbedHeight(event.data);
      const iframe = host.querySelector("iframe");
      if (!iframe) return;
      revealGhlIframe(iframe);
      if (height) {
        iframe.style.height = `${height}px`;
        iframe.style.minHeight = "0";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      unbind();
      unmountGhlEmbed(host);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section id={BOOKING_SECTION_ID} className="section embed-section embed-section-book">
      <div className="wrap">
        <div className="embed-layout">
          <Reveal className="embed-copy">
            <p className="eyebrow">Free consultation</p>
            <h2>Book your Free Consultation</h2>
            <p className="lead">
              Pick a time that works for you. It&apos;s a relaxed conversation about where you are
              now and whether TMS or Spravato® could be the right next step.
            </p>

            <ul className="embed-points">
              {POINTS.map((point) => (
                <li key={point}>
                  <span className="tick">
                    <CheckIcon className="icon-xs" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="embed-actions">
              <p>Prefer to talk to someone now?</p>
              <CallButton variant="outline" />
            </div>
          </Reveal>

          <Reveal delay={2} className="embed-panel">
            <div
              ref={hostRef}
              className="embed-host"
              style={{ minHeight: CALENDAR_MIN_HEIGHT }}
              aria-label="Booking calendar"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
