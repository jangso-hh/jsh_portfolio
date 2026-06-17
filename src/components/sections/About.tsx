import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionTitle title="About" subtitle="저를 소개합니다" />

      <div className="grid gap-10 md:grid-cols-2">
        <FadeIn>
          <p className="leading-relaxed text-foreground/90">
            {aboutData.introduction}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="space-y-3">
            {aboutData.details.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="text-xl">{d.icon}</span>
                <span className="text-sm text-muted">{d.label}</span>
                <span className="ml-auto text-sm font-medium">{d.value}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
