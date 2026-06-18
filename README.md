# bunny

An animated, interactive single-page web experience built with React, Vite, and Framer Motion — featuring cinematic transitions, a scroll-driven gallery, ambient audio reactivity, and a few hidden Easter eggs.

## ✨ Features

- **Layered intro sequence** — preloader → clickable envelope → cinematic intro before the main page reveals itself
- **Hero section** — parallax background art with `useScroll`-driven motion
- **Gallery** — scroll-driven masonry layout with per-image parallax depth
- **Poetry section** — text that reveals word-by-word as you scroll, synced to scroll progress
- **Dedicated Songs** — a per-track mini music player with preview audio and confetti bursts on interaction
- **Floating notes** — scattered, hand-tilted note components animated across the screen
- **Magnetic sticky notes** — elements that subtly follow the cursor for a tactile feel
- **Secret letter** — a hidden Easter egg unlocked by typing a specific keyword anywhere on the page
- **Custom cursor, noise overlay, and particle background** — ambient visuals that pulse in sync with the currently playing audio (via the Web Audio API)
- **Smooth scrolling** powered by [Lenis](https://github.com/darkroomengineering/lenis)

## 🛠️ Tech stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animations & transitions
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scrolling
- [tsParticles](https://particles.js.org/) — ambient particle background
- [canvas-confetti](https://github.com/catdad/canvas-confetti) — celebratory bursts
- [lucide-react](https://lucide.dev/) — icons
- ESLint (flat config) for linting

## 🚀 Getting started

**Prerequisites:** Node.js (v18+ recommended)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint the codebase
npm run lint
```

The dev server will be available at the local URL printed in your terminal (typically `http://localhost:5173`).

## 📁 Project structure

```
bunny/
├── public/
│   ├── assets/          # Background images
│   └── icons.svg
├── src/
│   ├── assets/          # Local image assets
│   ├── components/      # All UI sections & visual effects
│   │   ├── Preloader.jsx
│   │   ├── Envelope.jsx
│   │   ├── IntroSequence.jsx
│   │   ├── Hero.jsx
│   │   ├── Gallery.jsx
│   │   ├── PoetrySection.jsx
│   │   ├── DedicatedSongs.jsx
│   │   ├── LoveLetters.jsx
│   │   ├── StickyNotes.jsx
│   │   ├── SecretLetter.jsx
│   │   ├── AudioPlayer.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── NoiseOverlay.jsx
│   │   └── MagneticElement.jsx
│   ├── utils/
│   │   └── UISounds.js  # Web Audio sound effects & frequency analysis
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## 🎨 Customizing

| Want to change... | Edit this file |
|---|---|
| Hero title/subtitle text | `src/components/Hero.jsx` |
| Gallery images | `src/components/Gallery.jsx` |
| Poetry text | `src/components/PoetrySection.jsx` |
| Songs & lyric snippets | `src/components/DedicatedSongs.jsx` |
| Floating notes | `src/components/LoveLetters.jsx` |
| Sticky notes | `src/components/StickyNotes.jsx` |
| Secret unlock keyword & message | `src/components/SecretLetter.jsx` |
| Background music track | `src/components/AudioPlayer.jsx` |

## 📄 License

This project is licensed under the [MIT License](./LICENSE) © 2026 Sheikh Muhammad Talha.
