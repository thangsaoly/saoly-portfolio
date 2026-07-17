import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-black shadow-lg shadow-primary/20 border-transparent",
    outline: "bg-transparent border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary",
    ghost: "bg-transparent border-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900"
  };

  const sizes = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
    icon: "w-12 h-12 p-2"
  };

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-95 border",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";
export { Button };
