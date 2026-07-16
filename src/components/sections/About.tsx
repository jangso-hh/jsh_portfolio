import { strengthsData, dualAxisData, growthData } from "@/data/portfolio";
import { em } from "@/lib/em";
import FadeIn from "@/components/ui/FadeIn";

/** original.html 상단 .docbody — 이유(.str) / 두 축(.dual) / 성장(.growth) */
export default function About() {
  return (
    <div className="docbody" id="about">
      <FadeIn>
        <section>
          <h2>이 사람을 뽑아야 하는 이유</h2>
          <div className="str">
            {strengthsData.map((s) => (
              <div key={s.title} className="sc">
                <h3>{s.title}</h3>
                <p>{em(s.desc)}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <h2>
            두 개의 큰 축{" "}
            <span className="sub2">지금도 PM과 개발을 동시에 — 둘 다 주력</span>
          </h2>
          <div className="dual">
            <div className="dcol pm">
              <div className="dh">
                <span className="ic">{dualAxisData.pm.icon}</span>
                {dualAxisData.pm.title}
              </div>
              <ul>
                {dualAxisData.pm.items.map((item, i) => (
                  <li key={i}>{em(item)}</li>
                ))}
              </ul>
            </div>
            <div className="dcol dev">
              <div className="dh">
                <span className="ic">{dualAxisData.dev.icon}</span>
                {dualAxisData.dev.title}
              </div>
              <ul>
                {dualAxisData.dev.items.map((item, i) => (
                  <li key={i}>{em(item)}</li>
                ))}
              </ul>
            </div>
            <div className="dplus">＋</div>
          </div>
          <div className="dmid">{em(dualAxisData.synergy)}</div>
        </section>
      </FadeIn>

      <FadeIn>
        <section>
          <h2>
            성장 과정{" "}
            <span className="sub2">
              PM 기반 위에 개발·디자인을 더해, 지금은 둘 다 주도
            </span>
          </h2>
          <div className="growth">
            {growthData.map((g) => (
              <div key={g.year} className="gstep">
                <span className="gy">{g.year}</span>
                <b>{g.title}</b>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
