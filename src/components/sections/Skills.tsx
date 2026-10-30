import { skillGroups } from "@/data/portfolio";

/** 기술 스택 — 그룹별 태그, 4열 */
export default function Skills() {
  return (
    <section className="sec alt" id="skills">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">06</span>
          <h2>기술 스택</h2>
          <p>실제 프로젝트에서 사용한 기술만 기재했습니다. 숙련도는 각 프로젝트의 담당 범위로 확인하실 수 있습니다.</p>
        </header>
        <div className="grid4">
          {skillGroups.map((g) => (
            <div key={g.group} className="sk">
              <b>{g.group}</b>
              <div className="chips">
                {g.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
