import FadeIn from "@/components/ui/FadeIn";
import { timelineData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** original.html 의 PM·사업 파트 바 + 상세 이력 타임라인(.tl) */
export default function Career() {
  return (
    <>
      <div className="part p2" id="career">
        <span className="pn">＋</span> PM · 사업 — 기획·제안·조달·계약 (개발 외 강점)
      </div>
      <div className="docbody" style={{ paddingBottom: 0 }}>
        <FadeIn>
          <section>
            <h2>
              상세 이력 <span className="sub2">기간별 2024 – 2026</span>
            </h2>
            <div className="tl">
              {timelineData.map((p) => (
                <div key={p.date} className="period">
                  <div className="pdate">{p.date}</div>
                  <div className="ptitle">{p.title}</div>
                  <ul>
                    {p.items.map((item, i) => (
                      <li key={i}>{em(item)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
