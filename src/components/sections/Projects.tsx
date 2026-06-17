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

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionTitle title="Projects" subtitle="진행한 프로젝트" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-background">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                )}
                {project.award && (
                  <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-medium text-white">
                    🏆 수상
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((t) => (
                    <SkillTag key={t} label={t} tagClass="tag-gray" />
                  ))}
                </div>
                <span className="mt-4 text-sm font-medium text-accent">
                  자세히 보기 →
                </span>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
