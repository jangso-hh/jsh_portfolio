import { pmData } from "@/data/portfolio";

/** 기획·PM — 3열 */
export default function Pm() {
  return (
    <section className="sec alt" id="pm">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">04</span>
          <h2>기획·PM도 합니다</h2>
          <p>{pmData.intro}</p>
        </header>
        <div className="grid3">
          {pmData.groups.map((g) => (
            <article key={g.title} className="col">
              <h3>{g.title}</h3>
              <ul className="list">
                {g.items.map((it) => (
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
