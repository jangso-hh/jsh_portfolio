import FadeIn from "./FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <FadeIn className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
    </FadeIn>
  );
}
