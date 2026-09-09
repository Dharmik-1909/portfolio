# Portfolio — React.js + Bootstrap 5

A clean, minimal, single-page personal portfolio site built with **React** and **Bootstrap 5**. It's designed to be simple to read, simple to customize, and simple to deploy — no custom design system, no heavy animation library, no backend required.

## Overview

This project presents a developer's profile, skills, and project work as a single scrollable page with six sections: **Hero, About, Skills, Projects, Contact,** and **Footer**, plus a sticky navbar for quick jumps between them.

The visual style deliberately leans on Bootstrap 5's own defaults rather than a custom theme — solid colors, standard components (`card`, `navbar`, `progress`, `badge`, `btn-primary`), and Bootstrap's grid/spacing utilities do almost all of the styling. There are no gradients, glow effects, or hover animations; the goal is a clean, professional, easy-to-maintain layout rather than a flashy one.

All editable content — name, bio, contact details, skills, and project listings — lives in one place at the top of `src/App.jsx`, so updating the site's content doesn't require touching any component code.

## Features

- **Responsive, single-page layout** — Hero, About, Skills, Projects, Contact, Footer, all on one scrollable page with smooth-scrolling anchor navigation.
- **Sticky, collapsible navbar** with Bootstrap's built-in mobile hamburger menu.
- **Hero section** with profile photo, role tagline, and two call-to-action buttons (View My Work / Download CV).
- **About section** with a short bio and a 4-stat highlight grid (years of experience, projects completed, etc.).
- **Skills section** rendering a responsive grid of skill bars (name, icon, and Bootstrap `progress` bar).
- **Projects section** with a card grid — image, category, description, technology badges, and Live Demo / Source Code links per project.
- **Contact section** with contact details, social links, and a client-side validated Bootstrap form.
- **Scroll-to-top button** that appears after scrolling down.
- **Bootstrap Icons** used throughout (skills, contact info, social links, footer).

## Tech Stack

| Layer | Choice |
|---|---|
| UI library | React 18 |
| Styling | Bootstrap 5 (+ Bootstrap Icons) |
| Build tool | Vite |
| Language | JavaScript (JSX) |

No state management library, router, or backend is used — this is intentionally a static, content-driven site.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

> **Note:** if npm warns about an `esbuild` install script needing approval, run `npm approve-scripts esbuild` once after `npm install`.

## Customizing Content

All editable content lives directly at the top of **`src/App.jsx`** — there are no separate data files:

- **`profile`** — name, role, tagline, bio, contact info, social links, and the 4 About-section stats.
- **`skills`** — array of `{ name, percentage, icon }` shown in the Skills section.
- **`projects`** — array of project objects (`title`, `category`, `description`, `image`, `technologies`, `liveUrl`, `sourceUrl`) shown in the Projects section.

Edit those three items directly in `App.jsx` and the whole site updates — no other files need to change for a content update.

To change the profile photo, replace `src/assets/images/profile-photo.png` (the import in `App.jsx` stays the same, since it references that exact filename).

To wire up the "Download CV" button, add your PDF to `public/cv/` and update `cvUrl` in the `profile` object.

## Styling Approach

Styling is ~95% stock Bootstrap 5 utility and component classes — the default blue/gray palette, `btn-primary` / `btn-outline-primary`, `text-muted`, `bg-light` / `bg-dark`, `card`, `border`, `progress`, `badge`, and standard grid/spacing utilities (`py-5`, `g-4`, `gap-3`, etc.).

`src/styles.css` is intentionally minimal and only contains what Bootstrap doesn't provide out of the box:
- smooth scrolling and scroll-margin offset so the sticky navbar doesn't cover section headings when jumping via anchor links,
- `object-fit` / sizing rules for the hero and project images.

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    StatsCard.jsx
    Skills.jsx
    SkillBar.jsx
    Projects.jsx
    ProjectCard.jsx
    Contact.jsx
    Footer.jsx
    ScrollToTop.jsx
  assets/
    images/
      profile-photo.png
  App.jsx        <- profile / skills / projects content lives here
  main.jsx        <- app entry point, imports Bootstrap CSS/JS
  styles.css      <- minimal custom CSS (image sizing)
index.html
package.json
vite.config.js
```

Components are kept presentational — each one receives its data as props from `App.jsx` rather than importing its own data, which keeps the UI layer and the content layer separate.

## Known Limitations / Out of Scope (V1)

- The Contact form is validated client-side only; there is no backend wired up to actually send messages.
- No routing — this is a single page with anchor-link navigation, not a multi-page app.

## Roadmap

A dark-theme redesign (v3) is scoped in a separate PRD — it revises the Navbar, Skills, and Projects sections to simpler layouts under Bootstrap's native dark color mode, while keeping this same Bootstrap-first, data-in-`App.jsx` approach. See `portfolio_prd_v3_dark_theme.docx` for details.