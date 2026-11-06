# Portfolio Website — Specification

## 1. Overview and Goals

A personal portfolio website that presents who I am, what I've built, and the games I've made. Visitors can browse sections via a navbar and reach my Unity WebGL games, which are hosted on itch.io.

**Goals**
- A fast, accessible, mobile-friendly personal site.
- Easy to maintain: adding a game or project means editing a typed data file, not touching components.
- Zero backend: no authentication, no database, no server-side secrets.

**Non-goals (v1)**: authentication, CMS or admin UI, blog, analytics, i18n, contact form.

## 2. Tech Stack and Constraints

| Area | Choice |
|---|---|
| Framework | Next.js 16.1.1, App Router |
| UI | React 19.2.3 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Linting | ESLint 9 + `eslint-config-next` |
| Hosting | Vercel |
| Game hosting | itch.io (external) |

**Constraints**
- No authentication or user accounts.
- Pages are statically rendered wherever possible.
- Vercel Hobby limits CLI deploys to 100 MB of source files (Pro: 1 GB) and 100 GB/month of Fast Data Transfer, so Unity builds must not live in this repo. See §12.

## 3. Information Architecture and Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Intro, short pitch, featured games/projects, calls to action |
| `/about` | About | Bio, skills, experience |
| `/projects` | Projects | Non-game work with descriptions and links |
| `/games` | Games | Grid of game cards, each with a Play button |
| `/games/[slug]` | Game | One game: title, itch.io embed, description |
| `/contact` | Contact | Links to email and social profiles |

## 4. Navbar

- Items, in order: Home, About, Projects, Games, Contact.
- Sticky at the top of the viewport.
- The current route's link is visually highlighted (`aria-current="page"`).
- On small screens, the links collapse into a hamburger menu that is keyboard-accessible and closes on navigation.
- The site name/logo on the left links to `/`.

## 5. Page Requirements

**Home** — Hero (name, one-line title, short intro), a "Featured games" strip (first N games flagged `featured`), a "Featured projects" strip, and links to About and Contact.

**About** — Bio text, a skills list (grouped, e.g. Languages / Engines / Tools), and an experience/education timeline. Content is placeholder until supplied.

**Projects** — Card grid driven by `projects.ts`. Each card: title, description, tech tags, optional repo and live-demo links.

**Games** — See §6.

**Contact** — Links only: `mailto:` email, GitHub, LinkedIn, itch.io profile. No form and no backend. External links open in a new tab.

## 6. Games Section

**Behaviour**
- `/games` renders a responsive card grid from `games.ts`. Each card shows title, tags, short description, and a **Play** button that links to `/games/[slug]`. No iframe on the list page.
- `/games/[slug]` is statically generated for every game (`generateStaticParams`; unknown slugs return 404). It shows, in order: a "← All games" link, the game title, the itch.io embed (iframe), the description, and a "View on itch.io" link (`target="_blank"`, `rel="noopener noreferrer"`).
- Games are embedded using itch.io's game embeds (https://itch.io/updates/introducing-game-embeds). The iframe uses the `src` from the game's "Embed" dialog, allows fullscreen, has a `title` for accessibility, and scales down on small screens while keeping the `embedWidth`:`embedHeight` aspect ratio (max width = `embedWidth`).
- Builds stay hosted on itch.io, never in this repo (see §12).

**Data model** (`Game`, in `app/data/games.ts`)

```ts
export interface Game {
  slug: string;            // unique id, kebab-case; used in /games/[slug]
  title: string;
  description: string;     // shown on the card and the game page
  itchUrl: string;         // public itch.io page of the game
  thumbnail?: string;      // path under /public/games/ (not yet used)
  tags?: string[];         // e.g. ["Strategy", "Simulation", "Cozy", "Unity2D"]
  year?: number;
  featured?: boolean;      // shown on Home
  embedUrl?: string;       // iframe src from itch.io's "Embed" dialog
  embedWidth?: number;     // iframe width from the embed code
  embedHeight?: number;    // iframe height from the embed code
}
```

**Adding a game**: add an entry to `games.ts` with the `embedUrl`/`embedWidth`/`embedHeight` from itch.io's embed code. The list card and the game page appear automatically; no component changes.

**Current games**: Frogsmith (`/games/frogsmith`).

## 7. Other Data Models

```ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;           // "GitHub", "LinkedIn", "Email", "itch.io"
  href: string;
}
```

Data lives in `app/data/` (or `lib/data/`) as typed TypeScript modules: `games.ts`, `projects.ts`, `socials.ts`.

## 8. Design System

- **Style**: minimal, clean typography, generous whitespace. Sections are open (no boxes) and separated by thin divider lines; game cards are the exception and use a bordered panel.
- **Theme**: dark only (no light mode, no toggle). Palette: black with a green undertone, gray, tan text, emerald accent.
- **Font**: Geist (via `next/font`), applied to the whole site.
- **Tokens**: `--background`, `--foreground`, `--surface`, `--accent` are defined in `app/globals.css` and exposed as Tailwind v4 theme colors (`bg-background`, `text-foreground`, `bg-surface`, `text-accent`, ...).
- **Responsive**: mobile-first; layouts verified at ~375px, ~768px and ≥1280px widths.
- **Components**: small reusable pieces (`Navbar`, `Section`, `Footer` (plus `ProjectCard` when projects move to a data file)).

## 9. Non-Functional Requirements

**Accessibility**: WCAG 2.1 AA contrast; full keyboard navigation; visible focus states; meaningful `alt` text for thumbnails; semantic landmarks (`header`, `nav`, `main`, `footer`).

**SEO**: per-page `metadata` via the Next.js Metadata API; Open Graph tags and image; `sitemap.xml` and `robots.txt`.

**Performance**: `next/image` for thumbnails; static rendering for all pages; no unnecessary client JavaScript (only the navbar is a client component).

**Security**: all external links use `rel="noopener noreferrer"`; no secrets or environment variables required.

## 10. Project Structure

```
app/
  layout.tsx            # root layout: navbar, footer, metadata
  page.tsx              # Home
  about/page.tsx
  projects/page.tsx
  games/page.tsx        # game list (cards with Play button)
  games/[slug]/page.tsx # single game: title, embed, description
  contact/page.tsx
  globals.css           # Tailwind import + theme tokens
  sitemap.ts
  robots.ts
  data/
    games.ts
    projects.ts
    socials.ts
components/
  Navbar.tsx            # client component (mobile menu, active link)
  Section.tsx
  Footer.tsx
public/
  games/                # game thumbnails only (no Unity builds)
```

The default starter content in `app/page.tsx` and unused SVGs in `public/` are removed.

## 11. Testing and Verification

- `npm run lint` passes with no errors.
- `npm run build` succeeds (all routes statically generated).
- `npx tsc --noEmit` passes.
- Manual checks in `npm run dev`:
  - Every navbar link routes correctly and the active link is highlighted.
  - Mobile menu opens, closes, and is keyboard-operable.
  - Each game card's Play button opens `/games/[slug]`, where the itch.io embed loads and the game runs (including fullscreen).
  - An unknown `/games/<slug>` shows the 404 page.
  - Layout holds at mobile, tablet and desktop widths.
- Lighthouse accessibility and SEO scores ≥ 90.

## 12. Deployment Notes

- Deploy to Vercel (Git integration). No environment variables required.
- Vercel limits (source: Vercel docs, "Limits", last updated 2026-09-16):

  | Limit | Hobby | Pro |
  |---|---|---|
  | CLI-uploaded source files | 100 MB | 1 GB |
  | Files per CLI deploy | 15,000 | 15,000 |
  | Fast Data Transfer | 100 GB/month | 1 TB/month |

- Unity WebGL builds are typically 5–100+ MB each and every play downloads the full build, so hosting them on Vercel would quickly exhaust size and bandwidth limits. Hosting them on itch.io avoids this entirely.
- Hobby plan is for non-commercial use; confirm this fits before launch.

## 13. Open Questions and Out of Scope

**Open questions**
- Real content for About, Projects, and the initial list of games (placeholders used until supplied).
- Game thumbnails (the `thumbnail` field exists but is not rendered yet).
- Home page "Featured games/projects" content.

**Out of scope for v1**: authentication, CMS/admin UI, blog, analytics, i18n, contact form, self-hosted Unity builds.
