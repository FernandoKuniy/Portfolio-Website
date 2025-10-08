"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage after component mounts
  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = theme === "dark" || (theme === "system" && prefersDark);
    root.classList.toggle("dark", useDark);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="rounded px-2 py-1 text-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label="Toggle dark mode"
        >
          System
        </button>
      </div>
    );
  }

  return (
    <div className="ml-auto flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
        className="rounded px-2 py-1 text-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System"}
      </button>
    </div>
  );
}
