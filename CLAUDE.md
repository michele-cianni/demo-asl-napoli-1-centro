# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

High-fidelity HTML/CSS/React 19 mockup for a redesign of the ASL Napoli 3 Sud (Campania regional health authority) website. Built with **Vite 8** — standard ESM imports, no CDN, no in-browser Babel transpilation.

## Running the project

```bash
npm install        # first time only
npm run dev        # dev server at localhost:5173
npm run build      # output to dist/
npm run preview    # preview the build
```

## Architecture

### Vite + ESM

Components use standard `import`/`export`. Each page has a dedicated entry point in `src/main-*.jsx` which imports its page component and mounts it via `ReactDOM.createRoot`. No global `window` registration, no CDN scripts, no load-order dependency.

### Pages and their page-level components

| HTML file | Page component (in `src/`) |
| ----------- | --------------------------- |
| `index.html` | `src/main.jsx` → `src/App.jsx` |
| `page-servizi.html` | `src/main-servizi.jsx` → `<PageServizi />` |
| `page-referti.html` | `src/main-referti.jsx` → `<PageReferti />` |
| `page-come-fare-per.html` | `src/main-come-fare-per.jsx` → `<PageComeFarePer />` |
| `page-ospedali.html` | `src/main-ospedali.jsx` → `<PageOspedali />` |
| `page-maresca.html` | `src/main-maresca.jsx` → `<PageMaresca />` |

### Shared components

- **`src/icons.jsx`** — `<Icon name="..." size={n} />` custom SVG icon component. All icons are inline SVG paths, no external icon library.
- **`src/ui.jsx`** — UI primitives: `Button`, `Badge`, `ArrowLink`, `Section`, `Eyebrow`, `SectionHeading`, `Breadcrumb`.
- **`src/header.jsx`** — `TopBar`, `BrandRow`, `MainNav` (shared across all pages, `activeItem` prop highlights current nav item).
- **`src/footer.jsx`** — `Footer`
- **`src/chatbot.jsx`** — `Chatbot` floating widget (included in every page)
- **`src/feedback.jsx`** — `FeedbackWidget`

### Design tokens (Bootstrap Italia)

`styles.css` defines all design tokens as CSS custom properties in `:root`, following the Bootstrap Italia / Designers Italia system:

- `--bi-primary` / `--bi-primary-800` / `--bi-primary-100` / `--bi-primary-050`
- `--bi-teal`, `--bi-warm` (accent colours)
- `--bi-ink-{900,700,500,300,100}` (text/border greys)
- `--bi-bg`, `--bi-bg-alt`, `--bi-surface`, `--bi-border`
- `--ff-sans` (Titillium Web), `--ff-serif` (Lora), `--ff-mono` (Roboto Mono)
- `--shadow-{sm,md,lg}`, `--r-{sm,md,lg,xl}`

Dark mode is fully implemented via `[data-theme="dark"]` overrides in `styles.css`.

### Primary colour override

Each page's HTML contains an inline `<script>` that overrides `--bi-primary` (and related shades) to teal (`#00798C`) instead of the stylesheet default blue (`#0066CC`). This is the brand colour for ASL Napoli 3 Sud.

## Conventions

- All styling is **inline React styles** (style objects). No CSS classes are added to components — only the base utility classes from `styles.css` (`.container`, `.placeholder-img`, `.h-scroll`, `.noise`, `.animate-in`) are used.
- Text content is in **Italian**.
- `href="#"` is the placeholder for links not yet wired up.
- Use existing `Icon` names from `src/icons.jsx`; add new icons there if needed.
