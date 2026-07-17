import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, error, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-2xl border bg-transparent focus:outline-none transition-all text-foreground",
        error 
          ? "border-red-500 focus:ring-1 focus:ring-red-500" 
          : "border-neutral-200 dark:border-neutral-800 focus:border-primary focus:ring-1 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
export { Input };
