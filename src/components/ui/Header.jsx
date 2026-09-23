import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position for header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view for the active indicator
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
      {/* Inner container matches Section's max-w-7xl + px-4 md:px-12 */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <motion.a
          href="#hero"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative z-10 flex items-center gap-1.5 group"
        >
          <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-200">
            TS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-200 mb-0.5" />
        </motion.a>

        {/* Center floating pill nav — desktop only */}
        <div
          className={cn(
            "hidden md:flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-400",
            isScrolled
              ? "bg-neutral-950/85 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-2xl shadow-black/50"
              : "gap-1"
          )}
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                  isActive
                    ? "text-black"
                    : "text-neutral-400 hover:text-foreground"
                )}
              >
                {/* Animated active pill background */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right side: CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop Resume CTA */}
          <motion.a
            href="https://drive.google.com/drive/folders/1RqNsJFYh2w4dVMM3jBiE_FNF0Z6yrk2P?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
              isScrolled
                ? "bg-primary text-black shadow-lg shadow-primary/30 hover:bg-primary-hover"
                : "border border-white/15 text-neutral-300 hover:border-primary/60 hover:text-primary bg-white/5 backdrop-blur-sm"
            )}
            aria-label="View Resume"
          >
            Resume
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMobileMenuOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-neutral-950 border-l border-white/10 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-lg font-black tracking-tighter flex items-center gap-1.5">
                  TS
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mb-0.5" />
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6">
                {NAV_LINKS.map((link, i) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-neutral-400 hover:text-foreground hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {link.name}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom resume CTA */}
              <div className="mt-auto px-4 pb-8">
                <a
                  href="https://drive.google.com/drive/folders/1RqNsJFYh2w4dVMM3jBiE_FNF0Z6yrk2P?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-hover transition-colors"
                >
                  View Resume
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


