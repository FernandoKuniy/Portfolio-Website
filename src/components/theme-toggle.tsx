"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = theme === "dark" || (theme === "system" && prefersDark);
    root.classList.toggle("dark", useDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
