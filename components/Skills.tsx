"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  "Core CS": Cpu,
  "Web & Databases": Globe,
  "Auth & Cloud": ShieldCheck,
  "Developer Tools": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-hairline bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            02 — Skills
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const Icon = ICONS[group.label] ?? Code2;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group rounded-lg border border-hairline bg-surface p-5 hover:border-hairline-strong transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={16} className="text-amber" />
                    <h3 className="font-mono text-xs uppercase tracking-wider text-ink">
                      {group.label}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-hairline px-2.5 py-1 text-xs text-muted group-hover:text-ink transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
