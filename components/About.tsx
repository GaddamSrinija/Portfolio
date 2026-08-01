"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            01 — About
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-2xl"
          >
            <p className="text-muted leading-relaxed">
              I&apos;m a third-year B.Tech student in Electronics and Communication
              Engineering at IIIT Allahabad, with a CGPA of 8.93.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              I like building systems end-to-end — REST APIs, real-time sockets,
              authentication, and deployment — and I spend the rest of my time on
              competitive programming, where I&apos;ve solved 300+ algorithmic
              problems across LeetCode, Codeforces, and GeeksforGeeks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
