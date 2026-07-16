import { docHeroData, valueStripData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** original.html 의 .hero + .vstrip */
export default function Hero() {
  return (
    <>
      <div className="hero" id="top">
        <div className="eyebrow">{docHeroData.eyebrow}</div>
        <h1>{em(docHeroData.title)}</h1>
        <div className="who">{docHeroData.who}</div>
        <p className="lead">{em(docHeroData.lead)}</p>
        <div className="pills">
          {docHeroData.pills.map((pill) => (
            <span key={pill} className="pill">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="vstrip">
        {valueStripData.map((v) => (
          <div key={v.title} className="v">
            <div className="vt">
              <span className="d" />
              {v.title}
            </div>
            <p>{em(v.desc)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
