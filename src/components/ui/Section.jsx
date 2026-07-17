import { cn } from "../../lib/utils";

export function Section({ id, className, children, title, subtitle }) {
  return (
    <section id={id} className={cn("py-24 px-4 md:px-12 max-w-7xl mx-auto", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>}
          {subtitle && <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
