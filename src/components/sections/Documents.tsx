import { documentsData, disclaimerNote } from "@/data/portfolio";

/** 07. BUSINESS & DOCUMENTATION — 직접 제작한 제안·조달·기획 산출물 */
export default function Documents() {
  return (
    <section className="sec" id="documents">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">06</span>
          <h2>제안 · 조달 · 기획 산출물</h2>
          <p>개발 외에 직접 작성한 문서들입니다. 외부 공개가 가능한 범위에서 정리했습니다.</p>
        </header>

        <div className="doc-grid">
          {documentsData.map((d) => (
            <article key={d.title} className="doc">
              <div className="doc-head">
                <b>{d.title}</b>
                <span className={`badge b-${d.badgeType}`}>{d.badge}</span>
              </div>
              <ul className="list">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="note">{disclaimerNote}</p>
      </div>
    </section>
  );
}
