import Zoom from "@/components/ui/Zoom";
import { impactData, impactIntro } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 04. PROJECT IMPACT — ERP 제품군별 개선·확장 사례 (이미지 중심, 상세는 접힘) */
export default function Impact() {
  return (
    <section className="sec alt" id="impact">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">03</span>
          <h2>ERP 제품군 개선 사례</h2>
          <p>{em(impactIntro)}</p>
        </header>

        <div className="im-grid">
          {impactData.map((it) => (
            <article key={it.name} className="im">
              <figure className="im-shot">
                <Zoom src={it.image} alt={`${it.name} 대시보드`} sizes="(max-width: 720px) 100vw, 500px" />
              </figure>
              <div className="im-head">
                <b>{it.name}</b>
                <span className={`badge ${it.badgeType}`}>{it.badge}</span>
                <span className="im-scale">{it.scale}</span>
              </div>
              <p className="im-summary">{it.summary}</p>
              <details className="more">
                <summary>작업 내용</summary>
                <ul className="list">
                  {it.items.map((x) => (
                    <li key={x}>{em(x)}</li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
