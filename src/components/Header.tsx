"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { BookButton } from "@/components/CTAButtons";
import { PhoneIcon } from "@/components/Icons";
import {
  BOOKING_SECTION_ID,
  FAQ_SECTION_ID,
  FORM_SECTION_ID,
  LOGO_MARK_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  WHY_SECTION_ID,
} from "@/lib/constants";

const NAV = [
  { href: "#tms", label: "TMS Therapy" },
  { href: "#spravato", label: "Spravato®" },
  { href: `#${WHY_SECTION_ID}`, label: "Why Transcend" },
  { href: `#${FAQ_SECTION_ID}`, label: "FAQ" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty(
        "--progress",
        max > 0 ? String(Math.min(1, window.scrollY / max)) : "0",
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-open" : ""}`}>
      <span ref={progressRef} className="scroll-progress" aria-hidden />
      <div className="wrap site-header-bar">
        <a href="#top" className="brand" aria-label={SITE_NAME} onClick={close}>
          <Image
            src={LOGO_MARK_URL}
            alt=""
            width={512}
            height={512}
            priority
            className="brand-mark"
            sizes="56px"
          />
          <span className="brand-text">
            <span className="brand-name">Transcend</span>
            <span className="brand-sub">Functional Health</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a href={PHONE_HREF} className="site-phone" aria-label={`Call ${PHONE_NUMBER}`}>
            <span className="site-phone-icon">
              <PhoneIcon className="icon-sm" />
            </span>
            <span className="site-phone-text">
              <span className="site-phone-label">Call us</span>
              <span className="site-phone-number">{PHONE_NUMBER}</span>
            </span>
          </a>
          <BookButton variant="primary" arrow={false} className="site-header-cta" />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="menu-toggle-bars" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? <div className="mobile-nav-backdrop" onClick={close} aria-hidden /> : null}

      <div id="mobile-nav" className="mobile-nav" hidden={!menuOpen}>
        <nav className="wrap mobile-nav-inner" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a href={`#${FORM_SECTION_ID}`} className="mobile-nav-link" onClick={close}>
            Find out if you Qualify
          </a>
          <div className="mobile-nav-actions">
            <a href={`#${BOOKING_SECTION_ID}`} className="btn btn-primary" onClick={close}>
              Book your Free Consultation
            </a>
            <a href={PHONE_HREF} className="btn btn-outline" onClick={close}>
              <PhoneIcon className="btn-icon" />
              Call {PHONE_NUMBER}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
