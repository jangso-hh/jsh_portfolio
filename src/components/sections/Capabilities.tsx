import { capabilitiesData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 02. CORE CAPABILITIES — 세 역량: 핵심 설명(lead) + 대표 업무(items) */
export default function Capabilities() {
  return (
    <section className="sec" id="capabilities">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">01</span>
          <h2>핵심 역량</h2>
          <p>기획·디자인·개발을 한 사람이 끝까지 맡습니다. 세 역량이 한 프로젝트 안에서 이어집니다.</p>
        </header>

        <div className="caps">
          {capabilitiesData.map((c) => (
            <article key={c.num} className="cap">
              <span className="cap-num">{c.num}</span>
              <h3>{c.title}</h3>
              <p className="cap-lead">{em(c.lead)}</p>
              <ul className="cap-list">
                {c.items.map((it) => (
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
