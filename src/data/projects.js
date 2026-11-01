export const PROJECTS = [
  {
    title: "TOUB POS",
    category: "Full-Stack System",
    featured: true,
    image: "/projects/toub-pos.webp",
    poster: "/projects/toub-pos-poster.webp", // vertical — shown left of the modal copy
    description: "A multi-tenant Point-of-Sale system for managing stalls, menus, orders, and payments in real time.",
    longDescription: "TOUB POS is a production-ready, multi-tenant POS backend built with Express.js. It features a layered architecture (routes → controllers → services → repositories), JWT-based authentication with bcrypt, transactional order creation to prevent inventory race conditions, and idempotent payment webhook handling. The system supports multiple stall owners, each with isolated data, and enforces the principle of least privilege through separate database accounts for different roles.",
    tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "React"],
    github: "https://github.com/sothyvan/TOUB_POS.git",
    live: "#"
  },
  {
    title: "Self-Planning Travel Planner",
    category: "Web Application",
    featured: true,
    image: "/projects/travel-planner.webp",
    poster: "/projects/travel-planner-poster.webp", // vertical — shown left of the modal copy
    description: "An AI-powered full-stack travel companion that unifies trip planning, budgets, to-do lists, and packing into one dashboard.",
    longDescription: "A comprehensive full-stack travel app featuring an interactive trip dashboard, detailed itinerary modals, financial tracking with expense categorization, and a contextual AI assistant called 'Pisey' powered by OpenRouter. Pisey is injected with the user's real trip data at runtime — so it can answer specifically about your own costs, packing needs, and itinerary. Secured with JWT authentication and built on a React + Express + SQLite stack.",
    tech: ["React 19", "Vite", "Express.js", "SQLite", "Sequelize", "JWT", "OpenRouter AI", "Tailwind CSS"],
    github: "https://github.com/thangsaoly/self-planning-react.git",
    live: "#"
  },
  {
    title: "Vehicle Rental Management System (VRMS)",
    category: "Full-Stack System",
    description: "A full-stack enterprise system for managing vehicle fleets, rentals, customers, payments, and staff with role-based access control.",
    longDescription: "VRMS is a client-server application built across two repos. The Spring Boot + Java backend handles fleet management (Cars & Motorcycles), customer records, rental processing with real-time availability, payment tracking (deposits, discounts, damage fees), and RBAC for Manager vs. Regular Staff roles. The React 19 + Vite frontend connects via Axios interceptors that auto-attach JWT tokens, supports dual-role login (Staff + Customer), and uses protected routes to guard the admin dashboard.",
    tech: ["Java", "Spring Boot", "MySQL", "JDBC", "React 19", "Vite", "Tailwind CSS", "JWT", "Axios"],
    github: "https://github.com/Ryuo-chhi/Vehicle-Rental-Management-System-Main-.git",
    githubFrontend: "https://github.com/Ryuo-chhi/Frontend_VehicleRent.git",
    live: "#"
  },
  {
    title: "ZeroL Launcher",
    category: "Android App",
    description: "Android App Laucher Built for Minimalist and Grayscaler who love to customize their smartphone.",
    longDescription: "ZeroL Launcher is a beautifully crafted, highly optimized Android launcher built with Jetpack Compose. Designed for high-performance and power efficiency, it provides a clean, fluid, and distraction-minimized interface, perfectly tuned for 120Hz displays.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "MVVM Architecture", "Coroutines" ],
    github: "https://github.com/thangsaoly/ZeroLLauncher.git",
    live: "#"
  },
  {
    title: "Lofinuous",
    category: "Android App",
    description: "Lofinuous is a Lo-Fi Radio app. You can play random, continuously Lo-Fi music from Radio Stations. It is an ad-free nusic streamming platform for you to relax and listen while studying.",
    longDescription: "Lofinuous is a dead-simple, beautifully clean Android app that streams curated lofi radio stations straight to your ears — no ads, no accounts, no nonsense. Just open it, hit play, and you're instantly transported to a cozy coffee shop at 2 AM.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "MVVM Architecture", "Hilt", "ExoPlayer", "Coroutines"],
    github: "https://github.com/thangsaoly/Lofinuous.git",
    live: "#"
  }
];
