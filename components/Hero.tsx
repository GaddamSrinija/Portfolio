"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-36 pb-24 md:pt-44 md:pb-32"
      style={{ backgroundSize: "40px 40px" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(11,14,20,0)_0%,#0B0E14_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Open to SDE internships
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl font-display text-xl font-semibold text-ink sm:text-2xl"
        >
          Full-stack engineer building real-time systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-bg hover:bg-amber-dim transition-colors"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink hover:border-amber hover:text-amber transition-colors"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={profile.github}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-muted hover:border-amber hover:text-amber transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-muted hover:border-amber hover:text-amber transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface px-4 py-2 font-mono text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-blink" />
          Hybrid Socket.io bid updates — SneakerHead
        </motion.div>
      </div>
    </section>
  );
}
