import { aiData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** AI를 쓰는 방식 — 콜아웃 + 사례 카드 그리드 */
export default function Ai() {
  return (
    <section className="sec" id="ai">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">03</span>
          <h2>AI를 쓰는 방식</h2>
          <p>{em(aiData.callout)}</p>
        </header>
        <div className="grid3">
          {aiData.items.map((it) => (
            <article key={it.title} className="tile">
              <b>{it.title}</b>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
