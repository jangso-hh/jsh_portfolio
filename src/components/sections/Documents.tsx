import { documentsData, disclaimerNote, sideProject } from "@/data/portfolio";

/** 산출물 카드 그리드 + 사이드 프로젝트 */
export default function Documents() {
  return (
    <section className="sec" id="documents">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">07</span>
          <h2>제안·조달·기획 산출물</h2>
          <p>직접 작성한 기획·제안·운영 문서입니다.</p>
        </header>
        <div className="grid3">
          {documentsData.map((d) => (
            <article key={d.title} className="tile">
              <b>{d.title}</b>
              <ul className="list">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="tile side">
            <span className="tile-label">SIDE PROJECT</span>
            <b>{sideProject.title}</b>
            <p className="tile-meta">{sideProject.meta}</p>
            <p>{sideProject.desc}</p>
            <ul className="list">
              {sideProject.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="note">{disclaimerNote}</p>
      </div>
    </section>
  );
}
