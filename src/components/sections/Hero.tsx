"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
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
          className="mt-5 text-3xl font-bold leading-snug tracking-tight sm:text-5xl"
        >
          안녕하세요.
          <br />
          <span className="text-accent">{profileData.tagline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-lg text-muted sm:text-xl"
        >
          {profileData.name} · {profileData.role}
        </motion.p>
      </div>

      {/* 스크롤 유도 */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <span className="flex flex-col items-center gap-2">
          더 알아보기
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </span>
      </motion.a>
    </section>
  );
}
