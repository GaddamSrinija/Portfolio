"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  number,
}: {
  project: Project;
  index: number;
  number: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-xl border border-hairline bg-surface p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-faint">Project {number}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
            project.status === "LIVE"
              ? "border-cyan/40 text-cyan"
              : "border-hairline-strong text-faint"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={project.github}
          className="flex items-center gap-1.5 text-sm text-muted hover:text-amber transition-colors"
        >
          <Github size={15} /> Source
        </a>
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-cyan transition-colors"
          >
            <ExternalLink size={15} /> Live demo
          </a>
        )}
      </div>

      <div className="mt-7 grid gap-6 border-t border-hairline pt-6 md:grid-cols-2">
        <div>
          <p className="eyebrow">Problem</p>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="eyebrow">Solution</p>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-hairline pt-6">
        <p className="eyebrow">Key features</p>
        <ul className="mt-3 space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hairline-strong" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
