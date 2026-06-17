import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillTag from "@/components/ui/SkillTag";
import { skillsData, type SkillItem } from "@/data/portfolio";

const CATEGORIES: { key: keyof typeof skillsData; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "tools", label: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-card/40 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle title="Skills" subtitle="기술 역량" />

        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map(({ key, label }, i) => {
            const items = skillsData[key];
            if (!items || items.length === 0) return null;
            return (
              <FadeIn key={key} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <h3 className="mb-4 font-semibold">{label}</h3>
                  <div className="space-y-4">
                    {items.map((skill: SkillItem) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between">
                          <SkillTag label={skill.name} tagClass={skill.tagClass} />
                          <span className="text-xs text-muted">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
