import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

import { MatrixBackground } from "../ui/MatrixBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0 opacity-50">
        <MatrixBackground />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full",
            "bg-neutral-900/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md mb-6"
          )}
        >
          <Terminal size={14} className="text-primary" />
          <span className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300">
            Journey toward perfect software.
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className={cn(
            "block text-transparent bg-clip-text bg-gradient-to-r",
            "from-neutral-900 to-primary dark:from-white dark:to-primary pb-4"
          )}>
            Thang Saoly
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-neutral-500 dark:text-neutral-400 font-light mb-8">
          Full Stack Developer
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Crafting modern web applications, scalable backend systems, and exceptional user experiences. Bridging the gap between beautiful design and robust engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="group">
            <a href="#projects">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">
              Contact Me
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
