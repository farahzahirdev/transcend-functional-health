import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Highlights">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((item) => (
              <li key={item}>
                <span className="marquee-star" aria-hidden>
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
