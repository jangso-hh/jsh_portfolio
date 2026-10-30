import { careerData } from "@/data/portfolio";

/** 05. EXPERIENCE — 재직 정보 + 연도별 핵심 역할 */
export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">04</span>
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

        <div className="years">
          {careerData.years.map((y) => (
            <article key={y.year} className="year">
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
