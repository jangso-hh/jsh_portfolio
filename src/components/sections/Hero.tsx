import { pageData, glanceData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 히어로 — 정체성 + 속성 + 한눈에 보기 지표 */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-who">{pageData.subtitle}</p>
            <h1>{pageData.title}</h1>
            <p className="hero-sub">{em(pageData.intro)}</p>
          </div>
          <dl className="props">
            {pageData.props.map((p) => (
              <div key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="stats">
          {glanceData.stats.map((s) => (
            <div key={s.k} className="stat">
              <span className="stat-k">{s.k}</span>
              <b>{s.v}</b>
            </div>
          ))}
        </div>
        <p className="hero-callout">{em(glanceData.callout)}</p>
      </div>
    </section>
  );
}
