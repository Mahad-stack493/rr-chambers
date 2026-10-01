# RR Chambers

Website for RR Chambers, built with React 19 and Vite.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # lint with oxlint
```

## Project structure

```
src/
├── assets/          # images, icons, fonts
├── components/
│   ├── common/      # reusable UI (buttons, cards, etc.)
│   ├── layout/      # Layout, Header, Footer
│   └── sections/    # page sections (hero, practice areas, etc.)
├── constants/       # routes, site-wide config
├── data/            # static content (practice areas, team, etc.)
├── hooks/           # custom React hooks
├── pages/           # route-level pages, one folder per page
├── routes/          # route definitions
├── styles/          # global styles and design tokens
├── utils/           # helper functions
├── App.jsx
└── main.jsx
```

Imports can use the `@/` alias for `src/`, e.g. `import Layout from '@/components/layout/Layout.jsx'`.
