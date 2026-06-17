import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  awardData,
  certificateData,
  activityData,
  projectsData,
} from "@/data/portfolio";

function projectTitle(projectId?: number) {
  if (projectId == null) return null;
  return projectsData.find((p) => p.id === projectId)?.title ?? null;
}

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionTitle title="Achievements" subtitle="수상 · 자격증 · 대외활동" />

      <div className="grid gap-8 md:grid-cols-3">
        {/* 수상 */}
        <FadeIn>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">🏆 수상</h3>
            <ul className="space-y-4">
              {awardData.map((a, i) => {
                const linked = projectTitle(a.projectId);
                return (
                  <li key={i}>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-accent">{a.prize}</p>
                    <p className="text-xs text-muted">{a.date}</p>
                    {linked && (
                      <p className="mt-1 text-xs text-muted">↳ {linked}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>

        {/* 자격증 */}
        <FadeIn delay={0.05}>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">📜 자격증</h3>
            <ul className="space-y-4">
              {certificateData.map((c, i) => (
                <li key={i}>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                  <p className="text-xs text-muted">{c.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* 대외활동 */}
        <FadeIn delay={0.1}>
          <div className="h-full rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold">🤝 대외활동</h3>
            <ul className="space-y-4">
              {activityData.map((act, i) => {
                const linked = projectTitle(act.projectId);
                return (
                  <li key={i}>
                    <p className="font-medium">{act.organization}</p>
                    <p className="text-sm text-accent">{act.role}</p>
                    <p className="text-xs text-muted">{act.period}</p>
                    <p className="mt-1 text-sm text-foreground/90">
                      {act.description}
                    </p>
                    {linked && (
                      <p className="mt-1 text-xs text-muted">↳ {linked}</p>
                    )}
                    {act.links && act.links.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {act.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.demo ?? l.github ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-accent hover:underline"
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
