import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { archivingData } from "@/data/portfolio";

export default function Archiving() {
  const items = archivingData.filter((a) => a.url);

  if (items.length === 0) return null;

  return (
    <section id="archiving" className="bg-card/40 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle title="Archiving" subtitle="기록과 채널" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.05}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold group-hover:text-accent">
                  {item.name} ↗
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                {item.details.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-foreground/80">
                    {item.details.map((d, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
