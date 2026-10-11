# kagan-dev

Portfolio website for Kagan Ayten, an indie game developer.

## About

A single-page portfolio built in March 2023: a hero introduction, an about section, and a
showcase of the games Kagan Ayten has shipped, with routed page transitions.

## Features

- Animated route transitions between pages (Framer Motion)
- About section with bio and photo
- Game showcase cards (Assets/Card components) linking released titles
- Responsive layout with Tailwind CSS

## Tech stack

- React + TypeScript, Vite
- Tailwind CSS
- Framer Motion
- React Router
- Deployed on Vercel

## Project structure

```
src/
  main.tsx, App.tsx        # app entry and router
  components/
    Navbar.tsx, Hero.tsx
    About.tsx, Assets.tsx, Card.tsx
    AnimatedRoutes.tsx
  pages/Home.tsx
  assets/                  # images, fonts, game artwork
```

## Getting started

```bash
yarn install
yarn dev
yarn build
```

## Status

Client work, not actively maintained.

## License

MIT, see [LICENSE](LICENSE).
