# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site built with Astro, styled with Tailwind CSS, written in TypeScript. Static single-page site (Spanish content) deployed to GitHub Pages.

## Commands

Package manager is Bun (`bun.lockb` present) — prefer `bun run <script>` / `bunx` over npm.

- `bun run dev` / `bun run start` — start local dev server (astro dev)
- `bun run build` — type-checks with `astro check` then builds static site to `./docs` (output dir is `docs/` because GitHub Pages serves from there, not the usual `dist/`)
- `bun run preview` — preview the production build
- `bun run astro -- <cmd>` — run arbitrary Astro CLI commands

There is no test suite and no lint script configured in `package.json`.

## Architecture

- **`src/pages/index.astro`** is the only page. It composes the whole site by importing section components in order (Profile/hero, Experience, Proyects, AboutMe, Contact) and wrapping them in `SectionContainer` with matching `id`s used for in-page anchor navigation (`#experiencia`, `#proyectos`, `#sobre-mi`, `#contacto`).
- **`src/layouts/Layout.astro`** provides the HTML shell (`<Header>` + `<slot>` + `<Footer>`), global font (`@fontsource-variable/onest`) and global CSS (dark background, smooth scroll).
- **`src/components/`** — one Astro component per section/UI piece. Content is generally inlined as data literals inside the component file rather than pulled from a CMS or content collection:
  - `Proyects.astro` defines a `TAGS` map (tech badges with icon + Tailwind color class) and a `PROJECTS` array (title, description, links, image path, tags) that is rendered by mapping over it. To add/edit a project, edit this array directly.
  - `Experience.astro` + `ExperienceItem.astro` follow the same inline-data-array pattern for work history.
  - `src/components/icons/` holds one Astro component per SVG icon (brand icons like AstroJS/TailwindCSS/TypeScript/Android, plus generic UI icons), used across sections and in the `Proyects` tag list.
- Project images referenced by `Proyects.astro` live in `public/proyects/` (e.g. `proyect1.webp`).
- Astro config (`astro.config.mjs`) sets `site`/`base` for GitHub Pages (`/portfolio.dev/`), `output: 'static'`, and `outDir: './docs'` — keep these in sync with the GitHub Pages deployment target if the repo name or hosting changes.
- Tailwind config (`tailwind.config.mjs`) is currently minimal/default (`darkMode: 'class'`, no custom theme extensions) — component-level styling uses Tailwind utility classes directly and occasional inline `text-[#hex]` colors for brand icons.
