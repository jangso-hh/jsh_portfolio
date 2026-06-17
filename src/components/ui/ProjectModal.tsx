"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import SkillTag from "./SkillTag";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  // 스크린샷 자동 탐색
  useEffect(() => {
    if (!project?.screenshotDir) {
      // 이전 프로젝트의 스크린샷이 남지 않도록 초기화
      /* eslint-disable react-hooks/set-state-in-effect */
      setScreenshots([]);
      setVideos([]);
      /* eslint-enable react-hooks/set-state-in-effect */
      return;
    }
    let active = true;
    fetch(`/api/screenshots?dir=${encodeURIComponent(project.screenshotDir)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setScreenshots(data.screenshots ?? []);
        setVideos(data.videos ?? []);
      })
      .catch(() => {
        if (active) {
          setScreenshots([]);
          setVideos([]);
        }
      });
    return () => {
      active = false;
    };
  }, [project?.screenshotDir]);

  // ESC 닫기 + 스크롤 잠금
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-auto w-full max-w-3xl rounded-2xl border border-border bg-background shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-card text-xl hover:bg-foreground/10"
            >
              ×
            </button>

            <div className="p-6 sm:p-8">
              {/* 헤더 */}
              <header className="mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-1 text-muted">{project.subtitle}</p>
                <p className="mt-2 text-sm text-muted">{project.period}</p>
                {project.award && (
                  <p className="mt-2 inline-block rounded-md bg-accent/10 px-2 py-1 text-sm font-medium text-accent">
                    🏆 {project.award}
                  </p>
                )}
              </header>

              {/* 대표 이미지 */}
              {project.image && (
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              )}

              {/* 설명 */}
              <p className="mb-6 whitespace-pre-line leading-relaxed">
                {project.description}
              </p>

              {/* 역할 / 팀 */}
              {(project.role || project.team) && (
                <div className="mb-6 flex flex-wrap gap-4 text-sm">
                  {project.role && (
                    <span>
                      <span className="text-muted">역할 · </span>
                      {project.role}
                    </span>
                  )}
                  {project.team && (
                    <span>
                      <span className="text-muted">팀 · </span>
                      {project.team}
                    </span>
                  )}
                </div>
              )}

              {/* 주요 기능 */}
              {project.features?.length > 0 && (
                <section className="mb-6">
                  <h4 className="mb-2 font-semibold">주요 기능</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm text-foreground/90">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 배운 점 / 메모 (teal bullet) */}
              {project.notes && project.notes.length > 0 && (
                <section className="mb-6">
                  <h4 className="mb-2 font-semibold">배운 점 / 메모</h4>
                  <ul className="space-y-1 text-sm text-foreground/90">
                    {project.notes.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 기술 스택 */}
              {project.techStack?.length > 0 && (
                <section className="mb-6">
                  <h4 className="mb-2 font-semibold">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <SkillTag key={t} label={t} tagClass="tag-gray" />
                    ))}
                  </div>
                </section>
              )}

              {/* 시연 영상 */}
              {videos.length > 0 && (
                <section className="mb-6">
                  <h4 className="mb-2 font-semibold">시연 영상</h4>
                  <div className="space-y-3">
                    {videos.map((src) => (
                      <video
                        key={src}
                        src={src}
                        controls
                        className="w-full rounded-xl border border-border"
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* 스크린샷 */}
              {screenshots.length > 0 && (
                <section className="mb-6">
                  <h4 className="mb-2 font-semibold">스크린샷</h4>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {screenshots.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-card"
                      >
                        <Image
                          src={src}
                          alt="screenshot"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 링크 */}
              <footer className="flex flex-wrap gap-3 border-t border-border pt-6">
                {project.github && (
                  <ModalLink href={project.github} label="GitHub" />
                )}
                {project.demo && <ModalLink href={project.demo} label="Demo" />}
                {project.pdf && (
                  <ModalLink href={project.pdf.url} label={project.pdf.label} />
                )}
                {project.video && (
                  <ModalLink
                    href={project.video.url}
                    label={project.video.label}
                  />
                )}
                {project.extraLinks?.map((l) => (
                  <ModalLink
                    key={l.label}
                    href={l.demo ?? l.github ?? "#"}
                    label={l.label}
                  />
                ))}
              </footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
    >
      {label} ↗
    </a>
  );
}
