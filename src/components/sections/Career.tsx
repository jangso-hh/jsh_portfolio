import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillTag from "@/components/ui/SkillTag";
import { experienceData, educationData } from "@/data/portfolio";

export default function Career() {
  return (
    <section id="career" className="bg-card/40 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle title="Career" subtitle="경력 & 학력" />

        <div className="grid gap-12 md:grid-cols-2">
          {/* 경력 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">경력</h3>
            <div className="space-y-6 border-l border-border pl-6">
              {experienceData.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-sm text-accent">{exp.role}</p>
                    <p className="text-xs text-muted">{exp.period}</p>
                    <p className="mt-2 text-sm text-foreground/90">
                      {exp.description}
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                      {exp.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.techStack.map((t) => (
                          <SkillTag key={t} label={t} tagClass="tag-gray" />
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 학력 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">학력</h3>
            <div className="space-y-6 border-l border-border pl-6">
              {educationData.map((edu, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                    <h4 className="font-semibold">{edu.title}</h4>
                    <p className="text-sm text-accent">
                      {edu.major}
                      {edu.minor ? ` · 부전공 ${edu.minor}` : ""} · {edu.role}
                    </p>
                    <p className="text-xs text-muted">{edu.period}</p>
                    <p className="mt-2 text-sm text-foreground/90">
                      {edu.description}
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                      {edu.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
