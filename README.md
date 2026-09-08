# Portfolio — React.js + Bootstrap 5

A clean, minimal, data-driven personal portfolio built with React and Bootstrap 5. No gradients, no glow effects, no hover animations — just solid colors, clear typography, and generous spacing.

## Getting started

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

## Customizing content

All editable content (`profile`, `skills`, `projects`) lives directly at the top of **`src/App.jsx`** — no separate data files. Open `App.jsx` and edit those three objects/arrays.

To change the profile photo, replace `src/assets/images/profile-photo.png` (the import in `App.jsx` stays the same).

To wire up the "Download CV" button, add your PDF to `public/cv/` and update `cvUrl` in the `profile` object.

## Styling approach

Styling is ~95% stock Bootstrap 5 (`btn-primary`, `text-muted`, `bg-light`, `bg-dark`, `card`, `border`, `progress`, default grid/utilities — Bootstrap's default blue/gray palette, no custom theme colors). `src/styles.css` only contains a few rules Bootstrap doesn't provide out of the box: smooth scroll, anchor offset for the sticky navbar, and fixed-height/object-fit sizing for the hero and project images.

## Project structure

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
  App.jsx        <- profile / skills / projects data lives here
  main.jsx
  styles.css      <- minimal, image sizing + scroll offset only
```

## Notes

- Contact form validation is client-side only; backend email delivery is out of scope for V1 (see PRD section 13).
- Project images currently use placeholder graphics — swap in real screenshots via the `projects` array in `App.jsx`.
