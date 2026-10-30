import { pmData } from "@/data/portfolio";

/** 기획·PM — 토글 세 개로 압축 */
export default function Pm() {
  return (
    <section id="pm">
      <h2 className="n-h2">🧭 기획·PM도 합니다</h2>
      <p className="n-muted">{pmData.intro}</p>
      {pmData.groups.map((g) => (
        <details key={g.title} className="n-toggle" open>
          <summary>{g.title}</summary>
          <ul className="n-list">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </details>
      ))}
    </section>
  );
}
