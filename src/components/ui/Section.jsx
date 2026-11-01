import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

export function Section({ id, className, children, title, subtitle, kicker }) {
  return (
    <section id={id} className={cn("py-24 px-4 md:px-12 max-w-7xl mx-auto", className)}>
      {(kicker || title || subtitle) && (
        <Reveal className="text-center mb-16">
          {kicker && (
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              <span className="text-primary/40">// </span>{kicker}
            </p>
          )}
          {title && <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-neutral-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
