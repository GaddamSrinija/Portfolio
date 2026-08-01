"use client";

import { motion } from "framer-motion";
import { achievements, certifications, positions } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-hairline bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            04 — Achievements
          </motion.p>

          <div>
            <p className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Track record
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-lg border border-hairline bg-surface p-5"
                >
                  <h3 className="font-display text-2xl font-semibold text-amber">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {a.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Certifications
                </p>
                <ul className="mt-4 space-y-4">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <p className="text-sm font-medium text-ink">{c.name}</p>
                      <p className="mt-0.5 text-sm text-muted leading-relaxed">{c.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Positions of Responsibility
                </p>
                <ul className="mt-4 space-y-4">
                  {positions.map((p) => (
                    <li key={p.role}>
                      <p className="text-sm font-medium text-ink">
                        {p.role} <span className="text-faint font-normal">— {p.org}</span>
                      </p>
                      <p className="mt-0.5 text-sm text-muted leading-relaxed">{p.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
