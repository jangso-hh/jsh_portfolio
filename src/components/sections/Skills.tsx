import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillTag from "@/components/ui/SkillTag";
import { skillsData } from "@/data/portfolio";

const CATEGORIES: { key: keyof typeof skillsData; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "tools", label: "Tools" },
];

export default function Skills() {
  const categories = CATEGORIES.filter(
    ({ key }) => skillsData[key] && skillsData[key].length > 0,
  );

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle title="Skills" subtitle="기술 역량" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, label }, i) => (
            <FadeIn key={key} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
                  {label}
                </h3>
                <ul className="space-y-2.5">
                  {skillsData[key].map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {skillsData[key].map((skill) => (
                    <SkillTag
                      key={skill.name}
                      label={skill.name}
                      tagClass={skill.tagClass}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
