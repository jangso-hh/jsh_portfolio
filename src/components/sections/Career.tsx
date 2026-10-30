import { careerData } from "@/data/portfolio";

/** 경력 — 회사·직책 표 + 연도별 한 줄 */
export default function Career() {
  return (
    <section id="career">
      <h2 className="n-h2">💼 경력</h2>
      <dl className="n-props">
        <div>
          <dt>회사</dt>
          <dd>
            {careerData.company} · {careerData.period}
          </dd>
        </div>
        {careerData.roles.map((r) => (
          <div key={r.title}>
            <dt>직책</dt>
            <dd>
              {r.title} <span className="n-muted small">({r.period})</span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="n-years">
        {careerData.years.map((y) => (
          <div key={y.year} className="n-year">
            <b>
              {y.year} <span className="n-muted">· {y.title}</span>
            </b>
            <ul className="n-list">
              {y.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
