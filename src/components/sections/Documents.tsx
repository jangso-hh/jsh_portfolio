import { documentsData, disclaimerNote, sideProject } from "@/data/portfolio";

/** 산출물(토글) + 사이드 프로젝트 */
export default function Documents() {
  return (
    <>
      <section id="documents">
        <h2 className="n-h2">📄 제안·조달·기획 산출물</h2>
        {documentsData.map((d) => (
          <details key={d.title} className="n-toggle">
            <summary>{d.title}</summary>
            <ul className="n-list">
              {d.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </details>
        ))}
        <p className="n-muted small" style={{ marginTop: 16 }}>
          {disclaimerNote}
        </p>
      </section>

      <section id="side">
        <h2 className="n-h2">🌱 사이드 프로젝트</h2>
        <div className="n-card">
          <b>{sideProject.title}</b>
          <span className="n-muted small">{sideProject.meta}</span>
          <p className="n-small">{sideProject.desc}</p>
          <ul className="n-list">
            {sideProject.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
