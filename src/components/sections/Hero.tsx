import { heroData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 01. HERO — 정체성 한 줄 + 핵심 역량 3카드 + 대표 기술 */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-who">{heroData.who}</p>
        <h1>{em(heroData.title)}</h1>
        <p className="hero-sub">{em(heroData.subtitle)}</p>

        <div className="hero-caps">
          {heroData.capabilities.map((c) => (
            <div key={c.title} className="hero-cap">
              <b>{c.title}</b>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="hero-foot">
          <div className="chips">
            {heroData.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          {heroData.resume && (
            <a className="btn" href={heroData.resume} target="_blank" rel="noreferrer">
              이력서 보기
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
