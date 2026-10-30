import Zoom from "@/components/ui/Zoom";
import { featuredProjects, moreProjects, type DetailBlock } from "@/data/portfolio";
import { em } from "@/lib/em";

function Details({ blocks }: { blocks?: DetailBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <details className="more">
      <summary>상세 내용</summary>
      {blocks.map((b) => (
        <div key={b.label} className="more-block">
          <b>{b.label}</b>
          <ul>
            {b.items.map((it) => (
              <li key={it}>{em(it)}</li>
            ))}
          </ul>
        </div>
      ))}
    </details>
  );
}

/** 03. SELECTED PROJECTS — 대표 3건(이미지 중심) + 그 외 프로젝트(컴팩트) */
export default function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">02</span>
          <h2>대표 프로젝트</h2>
          <p>기획부터 운영까지 직접 맡은 세 건입니다. 상세 내용은 각 카드 아래에서 펼쳐 볼 수 있습니다.</p>
        </header>

        {featuredProjects.map((p) => (
          <article key={p.num} className="fp">
            <div className="fp-head">
              <span className="fp-num">PROJECT {p.num}</span>
              <h3>{p.title}</h3>
              <p className="fp-tagline">{p.tagline}</p>
              <span className="fp-period">{p.period}</span>
            </div>

            {p.shots?.map((s) => (
              <figure key={s.src} className="fp-shot">
                <Zoom src={s.src} alt={s.caption} />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
            {p.beforeAfter && (
              <figure className="fp-shot">
                <div className="ba">
                  <div className="ba-col">
                    <span className="ba-label old">BEFORE</span>
                    <Zoom src={p.beforeAfter.before} alt="기존 UI" sizes="(max-width: 720px) 100vw, 520px" />
                  </div>
                  <div className="ba-col">
                    <span className="ba-label new">AFTER</span>
                    <Zoom src={p.beforeAfter.after} alt="리디자인 UI" sizes="(max-width: 720px) 100vw, 520px" />
                  </div>
                </div>
                <figcaption>{p.beforeAfter.caption}</figcaption>
              </figure>
            )}

            <div className="fp-grid">
              <div>
                <h4>프로젝트 개요</h4>
                <p className="fp-overview">{em(p.overview)}</p>
                <h4>담당 역할</h4>
                <div className="chips">
                  {p.roles.map((r) => (
                    <span key={r} className="chip role">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4>주요 구현 내용</h4>
                <ul className="list">
                  {p.highlights.map((h) => (
                    <li key={h}>{em(h)}</li>
                  ))}
                </ul>
                <h4>성과 및 결과</h4>
                <ul className="list result">
                  {p.results.map((r) => (
                    <li key={r}>{em(r)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="chips stack">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <Details blocks={p.details} />
          </article>
        ))}

        <h3 className="sub-title">그 외 프로젝트</h3>
        <div className="mp-grid">
          {moreProjects.map((m) => (
            <article key={m.title} className={`mp${m.side ? " side" : ""}${m.shot?.kind === "mobile" ? " with-phone" : ""}`}>
              {m.shot && (
                <figure className={`mp-shot ${m.shot.kind ?? "web"}`}>
                  <Zoom src={m.shot.src} alt={m.shot.caption} sizes="(max-width: 720px) 100vw, 480px" />
                </figure>
              )}
              <div className="mp-body">
                <span className="mp-meta">{m.meta}</span>
                <h4>{m.title}</h4>
                <p className="mp-tagline">{m.tagline}</p>
                <ul className="list">
                  {m.highlights.map((h) => (
                    <li key={h}>{em(h)}</li>
                  ))}
                </ul>
                <div className="chips">
                  {m.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <Details blocks={m.details} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
