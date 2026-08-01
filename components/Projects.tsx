"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            03 — Featured Projects
          </motion.p>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} number={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
