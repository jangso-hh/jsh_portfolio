import { skillGroups } from "@/data/portfolio";

/** 06. TECHNICAL SKILLS — 실제 사용한 기술만, 숙련도 수치 없이 그룹별 태그 */
export default function Skills() {
  return (
    <section className="sec alt" id="skills">
      <div className="container">
        <header className="sec-head">
          <span className="sec-num">05</span>
          <h2>기술 스택</h2>
          <p>프로젝트에서 실제로 사용한 기술만 적었습니다. 숙련도는 위 프로젝트의 담당 범위로 대신합니다.</p>
        </header>

        <div className="sk-grid">
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
