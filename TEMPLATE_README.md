# Wikipedia-style portfolio template

Copy `src/` and the added `public/` folders into your existing Vite React project.

## Install router

```bash
npm install react-router-dom
```

## Static files

- Headshot: `public/images/headshot.jpg` (then change `profile.headshot` in `src/data/portfolio.ts`)
- Project screenshots: `public/images/projects/`
- CV: `public/documents/Idris_Popoola_CV.pdf`
- Heading font: `public/fonts/LinuxLibertine.ttf`

Anything under `public/` is referenced from the site root, e.g. `/images/headshot.jpg`.

## Main editing point

Home-page project table metadata lives in `src/data/portfolio.tsx`.

Project articles are standalone components in `src/pages/projects/`, so each page can use its own content and layout. To add a project article:

1. Create its TSX page in `src/pages/projects/`.
2. Register its `/projects/<slug>` route in `src/App.tsx`.
3. Set `hasWikiPage: true` on its table entry in `src/data/portfolio.tsx`.

The longer education/career article text is currently in `src/pages/HomePage.tsx`; if it grows significantly, move that content into data files later.
