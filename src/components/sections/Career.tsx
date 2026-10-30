import { careerData } from "@/data/portfolio";

/** 경력 — 회사·직책 + 연도별 3열 */
export default function Career() {
  return (
    <section className="sec" id="career">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">05</span>
          <h2>경력</h2>
          <p>PM으로 시작해 디자인과 개발까지 범위를 넓혀 왔습니다. 지금은 세 역할을 동시에 맡습니다.</p>
        </header>

        <div className="co">
          <div>
            <b className="co-name">{careerData.company}</b>
            <span className="co-period">{careerData.period}</span>
          </div>
          <ul className="co-roles">
            {careerData.roles.map((r) => (
              <li key={r.title}>
                <span>{r.title}</span>
                <span className="co-period">{r.period}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid3">
          {careerData.years.map((y) => (
            <article key={y.year} className="col">
              <span className="year-num">{y.year}</span>
              <h3>{y.title}</h3>
              <ul className="list">
                {y.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
