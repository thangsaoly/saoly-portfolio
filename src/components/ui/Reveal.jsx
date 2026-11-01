import { motion, useReducedMotion } from "framer-motion";

/**
 * Shared blur-reveal wrapper: content emerges from a soft defocus as it
 * enters the viewport — one motion language across the whole site.
 */
export function Reveal({ children, delay = 0, y = 24, blur = 10, once = true, className }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
