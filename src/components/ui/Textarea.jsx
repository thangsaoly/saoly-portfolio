import { cn } from "../../lib/utils";

export function Textarea({ className, error, ref, ...props }) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-2xl border bg-transparent focus:outline-none transition-all resize-none text-foreground",
        error 
          ? "border-red-500 focus:ring-1 focus:ring-red-500" 
          : "border-neutral-200 dark:border-neutral-800 focus:border-primary focus:ring-1 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
}
