# ⚡ Saoly Portfolio

A lightning-fast, highly aesthetic personal developer portfolio built for extreme performance and visual impact. Originally conceived in Next.js, this project has been fully migrated to a lean **React 19 + Vite** architecture, stripping away unnecessary bloat while preserving buttery smooth animations.

## ✨ Features

- **Striking Aesthetic:** High-contrast dual theme (True Black / Pure White) accented with vibrant Yellow (`#fbbf24`), explicitly designed to capture attention and direct user focus.
- **Cinematic Smooth Scrolling:** Powered by [Lenis](https://github.com/studio-freight/lenis), ensuring every pixel of vertical movement feels premium.
- **Modern Tech Stack:** 
  - **React 19** & **Vite** for incredibly fast HMR and optimized builds.
  - **Tailwind CSS v4** utilizing the new `@theme inline` API and CSS variable architecture.
  - **Framer Motion** for micro-interactions and scroll-triggered reveals.
  - **Radix UI** for accessible, unstyled component primitives (Dialogs, Slots).

## 🚀 Getting Started

To run the project locally:

```bash
# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The server utilizes Vite's Hot Module Replacement (HMR) for instant visual feedback as you edit.

## 🏗️ Architecture

- **`src/App.jsx`**: The central nervous system, aggregating distinct semantic sections (Hero, About, Projects, Contact).
- **`src/index.css`**: The design system's source of truth, establishing global CSS variables that power the dynamic dark/light theme switching.
- **`src/components/sections/`**: Self-contained UI blocks designed for maximum reusability and isolated styling.

## 📦 Build & Deployment

To generate a production-ready optimized bundle:

```bash
npm run build
```

This will output static assets to the `dist/` directory, ready to be deployed to Vercel, Netlify, GitHub Pages, or any standard web server. You can preview the production build locally via:

```bash
npm run preview
```
