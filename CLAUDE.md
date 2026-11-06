# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repo is a stock `create-next-app` starter being turned into a personal portfolio site. `SPEC.md` is the source of truth for what to build (routes, data models, design system, file layout, decisions). Read it before adding features. Home, About, Projects and Contact are static pages with hand-written content; Games is data-driven (see below). Projects and socials are not yet in data files.

Keep responses concise and to the point. 

## Commands

```bash
npm run dev      # dev server at http://localhost:3000 (Turbopack)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (flat config, eslint.config.mjs); lint a file: npx eslint app/page.tsx
npx tsc --noEmit # type check (no script defined for this)
```

There is no test framework configured. `bun.lock` and `package-lock.json` both exist; the README lists npm/yarn/pnpm/bun interchangeably, so use npm unless told otherwise.

## Architecture notes

- Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4. Routes are folders under `app/` with a `page.tsx`. The `@/*` path alias maps to the repo root.
- Tailwind v4 is configured in CSS, not a `tailwind.config` file: `app/globals.css` does `@import "tailwindcss"` and exposes theme tokens via `@theme inline`. The PostCSS plugin is `@tailwindcss/postcss` (`postcss.config.mjs`). Add colors/fonts there.
- The site is dark-only (no light mode or toggle). Palette tokens (`--background`, `--foreground`, `--surface`, `--accent`) live in `globals.css`; use the Tailwind color names (`bg-surface`, `text-accent`, ...) rather than hard-coded colors.
- Fonts (Geist, Geist Mono) are loaded with `next/font/google` in `app/layout.tsx` and exposed as CSS variables; `globals.css` applies `--font-sans` to `body`.
- Games: `app/data/games.ts` is the single source of truth. `app/games/page.tsx` renders the card list (Play button) and `app/games/[slug]/page.tsx` is statically generated per game and renders the itch.io iframe from `embedUrl`/`embedWidth`/`embedHeight`. Adding a game means adding one entry to `games.ts`. In Next 16, `params` is a Promise and must be awaited.

## Project-specific constraints (from SPEC.md)

- No auth and no backend; content comes from typed data modules (`games.ts`, `projects.ts`, `socials.ts`), not a CMS.
- Unity WebGL builds must NOT be committed or served from `public/`: Vercel Hobby caps uploads at 100 MB and bandwidth at 100 GB/month. Games are hosted on itch.io and embedded via iframe; `public/games/` holds thumbnails only.
- Next.js 16 and React 19 differ from older versions; check the official docs before relying on remembered APIs.
