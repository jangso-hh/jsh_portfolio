import { aiData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** AI를 쓰는 방식 — 콜아웃 + 사례 목록 */
export default function Ai() {
  return (
    <section id="ai">
      <h2 className="n-h2">🤖 AI를 쓰는 방식</h2>
      <div className="n-callout">
        <span className="n-callout-icon">⚡</span>
        <p>{em(aiData.callout)}</p>
      </div>
      <ul className="n-list spaced">
        {aiData.items.map((it) => (
          <li key={it.title}>
            <b>{it.title}</b> — {it.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
