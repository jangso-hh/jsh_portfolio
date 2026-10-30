import { skillGroups } from "@/data/portfolio";

/** 기술 스택 — 그룹별 태그 표 */
export default function Skills() {
  return (
    <section id="skills">
      <h2 className="n-h2">🧰 기술 스택</h2>
      <dl className="n-props">
        {skillGroups.map((g) => (
          <div key={g.group}>
            <dt>{g.group}</dt>
            <dd>
              <span className="n-tags">
                {g.tags.map((t) => (
                  <span key={t} className="n-tag">
                    {t}
                  </span>
                ))}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
