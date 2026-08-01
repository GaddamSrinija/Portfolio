"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            05 — Education
          </motion.p>

          <ol className="space-y-0">
            {education.map((e, i) => (
              <motion.li
                key={e.school}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between ${
                  i !== education.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <div>
                  <p className="font-medium text-ink">{e.school}</p>
                  <p className="text-sm text-muted">{e.degree}</p>
                  <p className="text-sm text-faint">{e.location}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <p className="font-mono text-sm text-amber">{e.detail}</p>
                  <p className="text-xs text-faint">{e.period}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
