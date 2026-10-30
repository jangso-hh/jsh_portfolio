import FadeIn from "@/components/ui/FadeIn";
import { sideProjectsData } from "@/data/portfolio";
import { em } from "@/lib/em";

/** 맨 아래 소형 섹션 — 사이드 프로젝트(.dcard 재사용) */
export default function SideProjects() {
  if (sideProjectsData.length === 0) return null;
  return (
    <div className="docbody" style={{ paddingTop: 0 }}>
      <FadeIn>
        <section>
          <h2>사이드 프로젝트</h2>
          {sideProjectsData.map((sp) => (
            <div key={sp.title} className="dcard">
              <div className="dh">
                <b>{sp.title}</b>
                <span className="bd b-side">{sp.label}</span>
              </div>
              <p className="sp-desc">{em(sp.desc)}</p>
              <ul>
                <li>{sp.did}</li>
                <li>{sp.status}</li>
              </ul>
            </div>
          ))}
        </section>
      </FadeIn>
    </div>
  );
}
