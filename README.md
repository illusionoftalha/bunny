# bunny 🤍

A small, interactive digital love letter — built as a single-page web experience with cinematic transitions, ambient music, and little hidden surprises.

> *"An ephemeral sanctuary crafted solely to reflect your luminosity."*

## ✨ What's inside

- **Preloader → Envelope → Intro** — a layered opening sequence: a loading screen, a wax-sealed envelope you click to open, and a cinematic intro before the main experience reveals itself
- **Hero section** — parallax background art with a personal title and dedication
- **Gallery** — a scroll-driven masonry layout of images with subtle parallax depth
- **Poetry section** — verses that reveal word-by-word as you scroll
- **Dedicated Songs** — a curated mini music player per song, complete with lyric snippets and confetti bursts
- **Love Letters** — scattered, hand-tilted notes floating across the screen
- **Sticky Notes** — magnetic, draggable-feeling notes that react to your cursor
- **Secret Letter** — a hidden Easter egg: type a certain word anywhere on the page to unlock a bonus letter
- **Custom cursor, noise overlay, particle background, and audio reactivity** — ambient music subtly pulses the background visuals in sync
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
│   ├── assets/          # Background images (bunny, heart, peonies, etc.)
│   └── icons.svg
├── src/
│   ├── assets/           # Local image assets
│   ├── components/       # All UI sections & effects
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
│   │   └── UISounds.js   # Web Audio sound effects & frequency analysis
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## 🎨 Customizing

Most of the personal content lives directly in the components and is easy to swap out:

| Want to change... | Edit this file |
|---|---|
| The dedication name / hero text | `src/components/Hero.jsx` |
| Gallery images | `src/components/Gallery.jsx` |
| Poetry verses | `src/components/PoetrySection.jsx` |
| Songs & lyrics | `src/components/DedicatedSongs.jsx` |
| Scattered love notes | `src/components/LoveLetters.jsx` |
| Sticky notes | `src/components/StickyNotes.jsx` |
| Secret unlock word & message | `src/components/SecretLetter.jsx` |
| Background music track | `src/components/AudioPlayer.jsx` |

## 📄 License

No license specified yet — add one (e.g. MIT) if you plan to share or open-source this further.
