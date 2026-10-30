import FadeIn from "@/components/ui/FadeIn";
import { documentsData, disclaimerNote } from "@/data/portfolio";

/** original.html 의 제안서·기획 산출물(.dcard) + 안내(.note) */
export default function Achievements() {
  return (
    <div className="docbody" id="achievements">
      <FadeIn>
        <section>
          <h2>직접 제작한 제안서 · 기획 산출물</h2>
          <div className="dgrid">
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
          </div>
        </section>
      </FadeIn>

      <div className="note">{disclaimerNote}</div>
    </div>
  );
}
