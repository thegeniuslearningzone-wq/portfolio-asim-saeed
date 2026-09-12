# Asim Saeed — Portfolio

A production-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build      # type-checks and builds to /dist
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/     UI building blocks (Navbar, Hero, ProjectCard, ContactForm, ...)
  pages/          Route-level components (HomePage, CaseStudyPage, NotFoundPage)
  data/           Content — projects.ts and profile.ts. Edit these to update the site.
  hooks/          useScrolled (navbar glass effect), usePrefersReducedMotion
  types/          Shared TypeScript interfaces
public/images/    Project cover and gallery artwork (SVG)
```

All copy and project details live in `src/data/`, not scattered through components —
update your name, projects, skills, or contact info there without touching layout code.

## Wiring up the contact form

`src/components/ContactForm.tsx` currently simulates a network request so the
success/error states can be reviewed without a backend. To go live, replace the
`setTimeout` in `handleSubmit` with a real request — a form service such as
Formspree, a serverless function, or your own API route all work with the
existing validation and state handling unchanged.

## Design notes

- **Palette** — deep ink background (`#10151A`) with a warm amber signal color
  (`#F2A63A`) for actions and emphasis, and a mint accent (`#5EE6B0`) reserved for
  success states and data highlights. Chosen to avoid the generic dark-mode
  neon-accent look while still reading as a developer's site.
- **Type** — Sora for display headings, IBM Plex Sans for body copy, and IBM Plex
  Mono used narrowly for things that are actually code-adjacent (the logotype,
  tech-stack chips, the location/status line).
- **Motion** — one orchestrated entrance in the hero (staggered rise-in) plus a
  cursor-follow glow that responds to pointer movement; hover states elsewhere are
  functional, not decorative. Everything checks `prefers-reduced-motion` via the
  `usePrefersReducedMotion` hook.
- **Case studies** are real routes (`/work/:slug`) rather than a modal, so they're
  linkable and shareable on their own.

## Accessibility

- Visible focus rings throughout (`:focus-visible`), never suppressed.
- The image lightbox is a proper dialog: focus moves to it on open, Escape closes
  it, arrow keys navigate, and focus returns to the trigger on close.
- Form fields use associated `<label>`, `aria-invalid`, and `aria-describedby` for
  error messages.
- Reduced-motion preference disables the ambient background drift and
  cursor-follow glow.

## Replacing the placeholder artwork

The images in `public/images/` are generated abstract illustrations that stand in
for real product screenshots. Swap them for actual screenshots of each project —
keep the same filenames referenced in `src/data/projects.ts`, or update the paths.
