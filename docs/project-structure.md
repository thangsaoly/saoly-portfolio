# Project Structure

This document outlines the directory structure and organization of the **Saoly Portfolio** project. The project is built using **React 19**, **Vite**, and styled with **Tailwind CSS v4**, featuring a high-contrast black, white, and yellow dual-theme.

---

## Directory Tree

```text
saoly-portfolio/
├── src/
│   ├── components/
│   │   ├── sections/              # Page sections for the single-page layout
│   │   │   ├── Hero.jsx           # Cinematic landing intro
│   │   │   ├── About.jsx          # Biography, stats, and personal info
│   │   │   ├── Projects.jsx       # Featured work grid with modals
│   │   │   └── Contact.jsx        # Form & social footer
│   │   ├── SmoothScroll.jsx       # Lenis smooth scroll wrapper
│   │   ├── ThemeProvider.jsx      # next-themes provider for dark/light mode
│   │   └── ThemeToggle.jsx        # Dark / light mode toggle switch
│   ├── lib/
│   │   └── utils.js               # Tailwind CSS merging utilities (clsx, tailwind-merge)
│   ├── App.jsx                    # Main landing page assembling all sections
│   ├── main.jsx                   # React application entry point & root render
│   └── index.css                  # Tailwind directives, CSS variables, & custom styles
├── public/                        # Static assets, images, icons
├── index.html                     # Vite HTML entry point
├── package.json                   # Project dependencies and scripts
└── vite.config.js                 # Vite bundler configuration
```

---

## Key Directories & Components

### 📂 `src/`
Contains the core React application logic and UI.
* **`main.jsx`**: The primary entry point that mounts the React tree, injecting fonts, state providers, and configuring Lenis smooth scrolling.
* **`App.jsx`**: Aggregates the sections under `components/sections/` into a single-page scrolling experience.
* **`index.css`**: Defines Tailwind layers, CSS variables for the striking black/white/yellow theme, and custom base styles.

### 📂 `src/components/`
Holds all React components, modularly separated:
* **`sections/`**: The core sections (Hero, About, Projects, Contact) that compile the full portfolio page.
* **`SmoothScroll.jsx`**: Global Lenis wrapper to provide a buttery smooth scrolling experience.
* **`ThemeToggle.jsx`**: Floating button to seamlessly switch between light and dark themes.

### 📂 `src/lib/`
Utility modules:
* **`utils.js`**: Provides the helper function `cn(...)` to dynamically merge Tailwind classes without style conflicts.