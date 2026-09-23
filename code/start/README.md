# MyApp

A small React app with three pages, a light/dark theme toggle, and a contact form. Built with Vite, Tailwind CSS v4, shadcn/ui, and React Router.

## Run locally

From this folder:

```bash
npm install
npm run dev
```

Then open http://localhost:5173/

If you cloned the assignment repo, the app is in `code/start`.

## What it does

- **Home / About / Features** — React Router switches pages without a reload. The header stays on every page.
- **Cards and buttons** — shadcn/ui components used across the site.
- **Contact form** — on Features. Name and email stack on a phone and sit side by side on a wider screen. Submit stays on the page and shows a thanks message.
- **Responsive layout** — cards go 1 column on phones, 2 on tablets, 3 on desktop.

## Theming

The Dark Mode button lives in the header (`src/components/navbar.tsx`). It adds or removes a `dark` class on `<html>`.

Colors are in `src/index.css`:

- `:root` — light background and text
- `.dark` — dark background and text

Classes like `bg-background` and `bg-card` read those values, so the whole page flips when you toggle.

## Screenshots

Light, dark, and responsive shots are in `screenshots/` at the repo root.
