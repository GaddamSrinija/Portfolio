"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            06 — Contact
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl max-w-lg leading-tight">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              Open to Software Engineering internships. Email is the fastest way to
              reach me.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-medium text-bg hover:bg-amber-dim transition-colors"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 rounded-md border border-hairline-strong px-5 py-2.5 text-sm text-ink hover:border-amber hover:text-amber transition-colors"
              >
                <Phone size={16} /> {profile.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.github}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline-strong text-muted hover:border-amber hover:text-amber transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline-strong text-muted hover:border-amber hover:text-amber transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.</p>
          <p className="font-mono">status: open to work</p>
        </footer>
      </div>
    </section>
  );
}
