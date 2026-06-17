"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent"
        >
          {profileData.nameEn}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
        >
          {profileData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-muted sm:text-2xl"
        >
          {profileData.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base text-muted"
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            연락하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
