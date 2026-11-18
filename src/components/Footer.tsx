import Image from "next/image";
import {
  ADDRESS_LINES,
  LOGO_LIGHT_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  WEBSITE_LABEL,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Image
              src={LOGO_LIGHT_URL}
              alt={SITE_NAME}
              width={521}
              height={427}
              className="footer-logo"
              sizes="150px"
            />
            <p className="footer-about">
              Whole-person psychiatric and functional wellness care in Greenwood Village, Colorado.
            </p>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <ul className="footer-list">
              <li>
                <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </a>
              </li>
              <li>
                <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                  {WEBSITE_LABEL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-label">In a crisis?</p>
            <p className="footer-text">
              This page is not monitored for emergencies. If you are in crisis or thinking about
              harming yourself, call or text <a href="tel:988">988</a>, or dial{" "}
              <a href="tel:911">911</a>.
            </p>
          </div>
        </div>

        <p className="footer-disclaimer">
          Individual results vary. TMS and Spravato® are not appropriate for everyone, and
          eligibility is determined by a clinician after an evaluation. Spravato® is available only
          through a restricted program and must be administered in a certified healthcare setting.
          Insurance coverage depends on your plan and is not guaranteed. Imagery on this page is
          illustrative.
        </p>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>Greenwood Village, CO</p>
        </div>
      </div>
    </footer>
  );
}
