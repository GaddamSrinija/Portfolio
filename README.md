# Srinija Gaddam — Portfolio

A single-page developer portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Design

- **Palette:** deep graphite-navy background, phosphor-amber accent (oscilloscope
  nod to an ECE background), live-cyan for real-time/status indicators.
- **Type:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data,
  tags, status labels).
- **Signature element:** an animated oscilloscope waveform in the hero — a literal
  nod to signals/electronics, rendered as the visual metaphor for someone who
  builds real-time systems.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — fill these placeholders

All content is centralized in `lib/data.ts`. Search that file for `"#"` and
replace with your real links:

- `profile.github` — your GitHub profile URL
- `profile.linkedin` — your LinkedIn profile URL
- `projects[].github` — repo link for each project
- `projects[].live` — live demo link (Hostel Management System only; add
  SneakerHead's if/when it has one)

Also add:
- `app/favicon.ico` — replace the placeholder favicon
- An OG image if you want rich link previews (reference it in `app/layout.tsx`
  metadata)

## Structure

```
app/
  layout.tsx       — fonts, metadata
  page.tsx          — assembles all sections
  globals.css       — base tokens, utilities
components/
  Navbar.tsx         Hero.tsx           About.tsx
  Skills.tsx         Projects.tsx       ProjectCard.tsx
  Achievements.tsx   Education.tsx      Contact.tsx
  ScrollProgress.tsx BackToTop.tsx
lib/
  data.ts            — single source of truth for all resume content
```

## Notes

- All copy is drawn directly from the source resume — no invented projects,
  metrics, or skills.
- Respects `prefers-reduced-motion`.
- Deploy target: Vercel (zero-config for Next.js).
