"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillTag from "@/components/ui/SkillTag";
import ProjectModal from "@/components/ui/ProjectModal";
import { projectsData, type Project } from "@/data/portfolio";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // 최신순 (id 내림차순)
  const projects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle title="Projects" subtitle="진행한 프로젝트" />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg md:flex">
                {/* 대표 이미지 */}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`${project.title} 자세히 보기`}
                  className="group relative aspect-video w-full shrink-0 overflow-hidden bg-background md:aspect-auto md:w-2/5"
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  )}
                  {project.award && (
                    <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-medium text-white">
                      🏆 수상
                    </span>
                  )}
                </button>

                {/* 내용 */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-muted">
                    {project.period}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/80">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <SkillTag key={t} label={t} tagClass="tag-gray" />
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-5 text-sm">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="font-medium text-accent hover:underline"
                    >
                      자세히 보기 →
                    </button>
                    {project.github && (
                      <CardLink href={project.github} label="GitHub" />
                    )}
                    {project.demo && (
                      <CardLink href={project.demo} label="Demo" />
                    )}
                    {project.pdf && (
                      <CardLink href={project.pdf.url} label={project.pdf.label} />
                    )}
                    {project.video && (
                      <CardLink
                        href={project.video.url}
                        label={project.video.label}
                      />
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="text-muted transition-colors hover:text-foreground"
    >
      {label} ↗
    </a>
  );
}
