import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import {
  caseStudiesData,
  erpCaseStudy,
  erpIntro,
  erpProjectsData,
  erpStackData,
  type CaseStudy,
} from "@/data/portfolio";
import { em } from "@/lib/em";

/** 이미지가 원본처럼 가로폭 100%·비율 유지로 렌더링되도록 하는 공통 속성 */
const fluidImg = {
  width: 0,
  height: 0,
  sizes: "(max-width: 960px) 100vw, 960px",
  style: { width: "100%", height: "auto" } as const,
};

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className={`cs${cs.purple ? " purple" : ""}`}>
      <div className="cshd">
        <span className="tag">{cs.tag}</span>
        <h3>{cs.title}</h3>
        <div className="role">{cs.role}</div>
      </div>
      <div className="csbd">
        {cs.shots?.map((shot) => (
          <div key={shot.src}>
            <Image className="shot" src={shot.src} alt={shot.caption} {...fluidImg} />
            <div className="shotcap">{shot.caption}</div>
          </div>
        ))}
        {cs.beforeAfter && (
          <>
            <div className="ba">
              <div className="bac">
                <span className="bt old">BEFORE · 기존 구형 UI</span>
                <Image src={cs.beforeAfter.before} alt="기존 디자인" {...fluidImg} />
              </div>
              <div className="bac">
                <span className="bt new">AFTER · 직접 리디자인</span>
                <Image src={cs.beforeAfter.after} alt="신규 디자인" {...fluidImg} />
              </div>
            </div>
            <div className="arrowrow">{cs.beforeAfter.caption}</div>
          </>
        )}
        {cs.rows.map((row) => (
          <div key={row.label} className={`row${row.impact ? " impact" : ""}`}>
            <div className="k">{row.label}</div>
            <div className="val">
              {row.text && em(row.text)}
              {row.items && (
                <ul>
                  {row.items.map((item, i) => (
                    <li key={i}>{em(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        <div className="stk">
          {cs.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** original.html 의 대표 프로젝트 ①(케이스스터디 3종) + ②(ERP 리디자인) */
export default function Projects() {
  return (
    <>
      <div className="part" id="projects">
        <span className="pn">★</span> 대표 프로젝트 ① · 단독으로 기획·개발한 제품
      </div>
      <div className="docbody">
        {caseStudiesData.map((cs) => (
          <FadeIn key={cs.title}>
            <CaseStudyCard cs={cs} />
          </FadeIn>
        ))}
      </div>

      <div className="part">
        <span className="pn">★</span> 대표 프로젝트 ② · 운수사 ERP 전 제품 리디자인 &amp; 개발
      </div>
      <div className="docbody">
        <section style={{ marginTop: 20 }}>
          <FadeIn>
            <CaseStudyCard cs={erpCaseStudy} />
          </FadeIn>

          <p className="bigp">{em(erpIntro)}</p>

          {erpProjectsData.map((pj) => (
            <FadeIn key={pj.name}>
              <div className="pj">
                <div>
                  <div className="ph">
                    <b>{pj.name}</b>
                    <span className={`lv lv-${pj.badgeType}`}>{pj.badge}</span>
                    <span className="pd">{pj.scale}</span>
                  </div>
                  <div className="tl2">{pj.summary}</div>
                  <ul>
                    {pj.items.map((item, i) => (
                      <li key={i}>{em(item)}</li>
                    ))}
                  </ul>
                </div>
                <Image
                  className="pjshot"
                  src={pj.image}
                  alt={`${pj.name} 대시보드`}
                  width={0}
                  height={0}
                  sizes="250px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </FadeIn>
          ))}

          <div className="stack" style={{ marginTop: 14 }}>
            {erpStackData.map((s) => (
              <span key={s} className="tag2">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
