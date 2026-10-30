import Zoom from "@/components/ui/Zoom";
import { devProjects, erpOthers, erpOthersIntro, type Toggle } from "@/data/portfolio";
import { em } from "@/lib/em";

function Toggles({ items }: { items?: Toggle[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((t) => (
        <details key={t.title} className="more">
          <summary>{t.title}</summary>
          <ul className="list">
            {t.items.map((it) => (
              <li key={it}>{em(it)}</li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
}

/** 개발한 것들 — 이미지 | 본문 2열, 프로젝트마다 좌우 교차 */
export default function Projects() {
  return (
    <>
      <section className="sec" id="projects">
        <div className="container">
          <header className="sec-head">
            <span className="sec-num">01</span>
            <h2>개발한 것들</h2>
            <p>직접 코드를 쓴 프로젝트입니다. 위에서부터 비중이 큰 순서예요.</p>
          </header>

          {devProjects.map((p, i) => {
            const mobile = p.shots?.[0]?.kind === "mobile";
            return (
              <article key={p.title} className={`dp${i % 2 ? " flip" : ""}${mobile ? " mobile" : ""}`}>
                <div className="dp-media">
                  {p.shots?.map((s) => (
                    <figure key={s.src}>
                      <Zoom src={s.src} alt={s.caption} sizes={s.kind === "mobile" ? "280px" : "(max-width: 900px) 100vw, 620px"} />
                      <figcaption>{s.caption}</figcaption>
                    </figure>
                  ))}
                  {p.beforeAfter && (
                    <figure>
                      <div className="ba">
                        <div className="ba-col">
                          <span className="ba-label old">BEFORE</span>
                          <Zoom src={p.beforeAfter.before} alt="기존 UI" sizes="310px" />
                        </div>
                        <div className="ba-col">
                          <span className="ba-label new">AFTER</span>
                          <Zoom src={p.beforeAfter.after} alt="리디자인 UI" sizes="310px" />
                        </div>
                      </div>
                      <figcaption>{p.beforeAfter.caption}</figcaption>
                    </figure>
                  )}
                </div>

                <div className="dp-body">
                  <span className="dp-num">
                    {p.icon} PROJECT {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{p.title}</h3>
                  <p className="dp-tagline">{p.oneLiner}</p>

                  <dl className="props compact">
                    {p.props.map((x) => (
                      <div key={x.k}>
                        <dt>{x.k}</dt>
                        <dd>{x.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="dp-summary">{em(p.summary)}</p>

                  <h4>만든 것</h4>
                  <ul className="list">
                    {p.built.map((b) => (
                      <li key={b}>{em(b)}</li>
                    ))}
                  </ul>

                  <Toggles items={p.toggles} />

                  <div className="chips stack">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="sec alt" id="erp-others">
        <div className="container">
          <header className="sec-head">
            <span className="sec-num">02</span>
            <h2>다른 운수사 ERP 개발 사례</h2>
            <p>{em(erpOthersIntro)}</p>
          </header>
          <div className="grid2">
            {erpOthers.map((e) => (
              <article key={e.name} className="im">
                <figure className="im-shot">
                  <Zoom src={e.image} alt={`${e.name} 대시보드`} sizes="(max-width: 900px) 100vw, 540px" />
                </figure>
                <div className="im-head">
                  <b>{e.name}</b>
                  <span className="im-scale">{e.scale}</span>
                </div>
                <p className="im-summary">{e.summary}</p>
                <details className="more">
                  <summary>작업 내용</summary>
                  <ul className="list">
                    {e.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
