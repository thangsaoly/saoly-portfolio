import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { MatrixBackground } from "../ui/MatrixBackground";

// Roles to cycle through
const ROLES = ["Full Stack Developer", "Android Developer"];

// Typewriter hook: types → pauses → erases → next role
function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 45, pause = 1600 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[roleIndex];

    if (!deleting && charIndex < current.length) {
      // Still typing
      const t = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      // Fully typed — pause then start deleting
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      // Still deleting
      const t = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      // Fully deleted — move to next word
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % words.length);
    }
  }, [charIndex, deleting, roleIndex, words, typeSpeed, deleteSpeed, pause]);

  useEffect(() => {
    setDisplayed(words[roleIndex].slice(0, charIndex));
  }, [charIndex, roleIndex, words]);

  return displayed;
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12 pt-28 pb-16 lg:py-24"
    >
      {/* Ambient Matrix Background with gentle fade */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <MatrixBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1420px] mx-auto w-full">
        {/* Invisible layout / Whitespace 2-page book spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Page 1 (Left): Hero Profile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Terminal Badge */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className={cn(
                "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full",
                "bg-white/5 border border-white/10 backdrop-blur-md mb-6"
              )}
            >
              <Terminal size={15} className="text-primary" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-300">
                Journey toward perfect software.
                <span className="inline-block w-px h-3.5 bg-primary ml-0.5 align-middle animate-blink" />
              </span>
            </motion.div>

            {/* Name Heading (scaled up to match 110% zoom look) */}
            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary pb-2">
                Thang Saoly
              </span>
            </h1>
            
            {/* Title / Role — animated typewriter */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-neutral-400 font-light mb-6 flex items-center min-h-[1.75rem] sm:min-h-[2rem] lg:min-h-[2.5rem] whitespace-nowrap">
              {/* \u200b keeps the span from collapsing to 0 height when role is empty */}
              <span>{role || "\u200b"}</span>
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-blink" />
            </h2>

            {/* Pitch / Summary */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mb-9 leading-relaxed">
              Crafting modern web applications, scalable backend systems, and exceptional user experiences. Bridging the gap between beautiful design and robust engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-4">
              <Button asChild className="group">
                <a href="#projects">
                  View Projects
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Page 2 (Right): Behind the Code */}
          <motion.div
            id="about"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center scroll-mt-28"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Behind the Code
            </h2>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed mb-7">
              <p>
                I’m a Software Engineering student at CADT in Phnom Penh, specializing in building end-to-end digital solutions. I move seamlessly between crafting React interfaces and developing robust backends using ExpressJS and Java.
              </p>
              <p>
                I approach every project with a focus on clean UI/UX, strong architecture, and rapid prototyping. Whether I'm designing interfaces in Figma or writing scalable code, I am committed to delivering polished, effective solutions.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              <StatCard title="Tech Focus" value="Full Stack" />
              <StatCard title="Environment" value="Linux & Windows" />
              <StatCard title="Current Focus" value="Personal Projects" />
              <StatCard title="Location" value="Phnom Penh" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value, className }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "p-4 sm:p-5 rounded-2xl border backdrop-blur-sm transition-colors",
        "bg-white/[0.02] border-white/5 hover:border-primary/50",
        className
      )}
    >
      <div className="text-neutral-500 text-xs sm:text-sm font-medium mb-1.5">{title}</div>
      <div className="text-base sm:text-lg font-semibold text-foreground">{value}</div>
    </motion.div>
  );
}
