# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # ESLint checks
```

## Architecture

This is a **React 19 + Vite** single-page portfolio site with no routing library. All sections are stacked vertically with `id` scroll anchors; `App.jsx` simply composes them in order.

**Component layout** (each maps to a visible page section):
- `Navbar` — scroll-aware nav (toggles background via `scrollY`), mobile slide-in menu via `useRef`
- `Header`, `About`, `Services`, `Work`, `Contact`, `Footer` — purely presentational, no local state

**Centralized data** — `src/assets/assets.js` is the single source of truth for all content:
- `assets` — all image imports
- `workData`, `serviceData`, `infoList`, `toolsData` — content arrays consumed by section components

When adding new projects, services, tools, or info cards, edit `assets.js` only; the rendering components iterate over these arrays.

**Styling** — Tailwind CSS 4 utility classes throughout. Custom theme values in `tailwind.config.js`:
- Colors: `lighthover` (`#fcf4ff`)
- Fonts: `Outfit` (sans) and `Ovo` (serif) — loaded from Google Fonts in `index.css`
- Box shadows: `black` and `white` (4px solid)
- Grid: `auto-fit` responsive columns (250px min)

Global nav transition states (`nav-top`, `nav-scroll`) are defined in `index.css`.

**Assets** — images live in `src/assets/public/` and are imported through `assets.js`. Static files (resume PDF, work preview images) also live in `public/`.
