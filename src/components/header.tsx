"use client";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="px-6 py-4 border-b">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:bg-black focus:px-3 focus:py-1 focus:text-white">
        Skip to content
      </a>
      <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
        <Link href="/" className="font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">FK</Link>
        <Link href="/projects" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">Projects</Link>
        <Link href="/experience" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">Experience</Link>
        <Link href="/about" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">About</Link>
        <Link href="/contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
