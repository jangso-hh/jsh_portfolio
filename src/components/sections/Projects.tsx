import Zoom from "@/components/ui/Zoom";
import { devProjects, erpOthers, erpOthersIntro, type Toggle } from "@/data/portfolio";
import { em } from "@/lib/em";

function Toggles({ items }: { items?: Toggle[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((t) => (
        <details key={t.title} className="n-toggle">
          <summary>{t.title}</summary>
          <ul className="n-list">
            {t.items.map((it) => (
              <li key={it}>{em(it)}</li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
}

/** 개발 프로젝트 — 노션 하위 페이지처럼 한 블록씩 */
export default function Projects() {
  return (
    <section id="projects">
      <h2 className="n-h2">🛠 개발한 것들</h2>
      <p className="n-muted">직접 코드를 쓴 프로젝트입니다. 위에서부터 비중이 큰 순서예요.</p>

      {devProjects.map((p) => (
        <article key={p.title} className="n-project">
          <h3 className="n-h3">
            <span className="n-emoji">{p.icon}</span>
            {p.title}
          </h3>
          <p className="n-oneliner">{p.oneLiner}</p>

          <dl className="n-props">
            {p.props.map((x) => (
              <div key={x.k}>
                <dt>{x.k}</dt>
                <dd>{x.v}</dd>
              </div>
            ))}
          </dl>

          {p.shots?.map((s) => (
            <figure key={s.src} className={`n-fig${s.kind === "mobile" ? " mobile" : ""}`}>
              <Zoom src={s.src} alt={s.caption} sizes={s.kind === "mobile" ? "260px" : "(max-width: 760px) 100vw, 720px"} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
          {p.beforeAfter && (
            <figure className="n-fig">
              <div className="n-ba">
                <div>
                  <span className="n-ba-label">Before</span>
                  <Zoom src={p.beforeAfter.before} alt="기존 UI" sizes="360px" />
                </div>
                <div>
                  <span className="n-ba-label after">After</span>
                  <Zoom src={p.beforeAfter.after} alt="리디자인 UI" sizes="360px" />
                </div>
              </div>
              <figcaption>{p.beforeAfter.caption}</figcaption>
            </figure>
          )}

          <p className="n-p">{em(p.summary)}</p>

          <h4 className="n-h4">만든 것</h4>
          <ul className="n-list">
            {p.built.map((b) => (
              <li key={b}>{em(b)}</li>
            ))}
          </ul>

          <Toggles items={p.toggles} />

          <div className="n-tags">
            {p.stack.map((s) => (
              <span key={s} className="n-tag">
                {s}
              </span>
            ))}
          </div>
        </article>
      ))}

      <h3 className="n-h3" id="erp-others">
        <span className="n-emoji">🗂</span>
        다른 운수사 ERP 개발 사례
      </h3>
      <p className="n-p">{em(erpOthersIntro)}</p>
      <div className="n-grid2">
        {erpOthers.map((e) => (
          <article key={e.name} className="n-card">
            <figure className="n-fig tight">
              <Zoom src={e.image} alt={`${e.name} 대시보드`} sizes="(max-width: 760px) 100vw, 350px" />
            </figure>
            <b>{e.name}</b>
            <span className="n-muted small">{e.scale}</span>
            <p className="n-small">{e.summary}</p>
            <details className="n-toggle">
              <summary>작업 내용</summary>
              <ul className="n-list">
                {e.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
