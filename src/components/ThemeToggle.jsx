import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) setMounted(true);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border shadow-lg transition-all hover:scale-110 active:scale-95 focus:outline-none",
        "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
      )}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
