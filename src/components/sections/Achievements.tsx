import FadeIn from "@/components/ui/FadeIn";
import {
  documentsData,
  scopeSkillsData,
  scopeClientsData,
  disclaimerNote,
} from "@/data/portfolio";

/** original.html 의 제안서·기획 산출물(.dcard) + 핵심 역량·담당 고객사(.scope) + 안내(.note) */
export default function Achievements() {
  return (
    <div className="docbody" id="achievements">
      <FadeIn>
        <section>
          <h2>직접 제작한 제안서 · 기획 산출물</h2>
          {documentsData.map((doc) => (
            <div key={doc.title} className="dcard">
              <div className="dh">
                <b>{doc.title}</b>
                <span className={`bd b-${doc.badgeType}`}>{doc.badge}</span>
              </div>
              <ul>
                {doc.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <h2>핵심 역량 · 담당 고객사</h2>
          <div className="scope" style={{ marginBottom: 12 }}>
            {scopeSkillsData.map((s) => (
              <span key={s} className="tag2">
                {s}
              </span>
            ))}
          </div>
          <div className="scope">
            {scopeClientsData.map((c) => (
              <span key={c} className="tag2">
                {c}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="note">{disclaimerNote}</div>
    </div>
  );
}
