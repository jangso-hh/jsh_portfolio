import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactData, profileData } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "Email", href: `mailto:${contactData.email}` },
    { label: "GitHub", href: profileData.github },
    { label: "Blog", href: profileData.blog },
    { label: "LinkedIn", href: profileData.linkedin },
  ].filter((l) => l.href);

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <SectionTitle title="Contact" subtitle="연락처" />

      <FadeIn>
        <p className="text-lg text-foreground/90">{contactData.message}</p>

        <a
          href={`mailto:${contactData.email}`}
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-transform hover:scale-105"
        >
          {contactData.email}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
