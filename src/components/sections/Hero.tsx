import { pageData, glanceData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 페이지 머리 — 노션 페이지 제목 + 속성 표 + 콜아웃 */
export default function Hero() {
  return (
    <header className="n-head" id="top">
      <div className="n-icon">{pageData.icon}</div>
      <h1 className="n-title">{pageData.title}</h1>
      <p className="n-subtitle">{pageData.subtitle}</p>

      <dl className="n-props">
        {pageData.props.map((p) => (
          <div key={p.k}>
            <dt>{p.k}</dt>
            <dd>{p.v}</dd>
          </div>
        ))}
      </dl>

      <p className="n-p">{em(pageData.intro)}</p>

      <div className="n-callout">
        <span className="n-callout-icon">💡</span>
        <div>
          <p>{em(glanceData.callout)}</p>
          <dl className="n-stats">
            {glanceData.stats.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
}
