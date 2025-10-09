"use client";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

type Props = { variant?: "mobile" | "desktop" };

export default function Sidebar({ variant = "desktop" }: Props) {
  const activeId = useScrollSpy(sections.map(s => s.id));
  if (variant === "mobile") {
    return (
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-semibold text-[#e6e9f1]">Fernando Kuniy</h1>
          <h2 className="text-xl text-[var(--muted)]">Full Stack Software Engineer</h2>
          <p className="mt-2 text-[var(--muted)]">
              I build data-driven, user-focused applications with precision and purpose.
          </p>
        </div>

        {/* horizontally scrollable section pills */}
        <nav aria-label="Sections" className="-mx-1 overflow-x-auto no-scrollbar">
          <ul className="flex gap-2 px-1">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`/#${s.id}`}
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm transition-all duration-200 ${
                      isActive
                        ? 'border-[var(--accent-500)] bg-[var(--accent-500)]/10 text-[var(--accent-400)]'
                        : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent-500)]/60 hover:text-[var(--accent-400)]'
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-4 text-sm">
          <Link 
            href="https://github.com/FernandoKuniy" 
            className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
          >
            GitHub
          </Link>
          <Link 
            href="https://www.linkedin.com/in/fernando-kuniy/" 
            className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-[#e6e9f1]">Fernando Kuniy</h1>
        <h2 className="text-xl text-[var(--muted)]">Full Stack Software Engineer</h2>
        <p className="mt-2 text-[var(--muted)]">I build data-driven, user-focused applications with precision and purpose.</p>
      </div>
      
      <nav aria-label="Section navigation" className="flex flex-col gap-2">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className={`relative text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                isActive
                  ? 'text-[var(--accent-400)] font-medium'
                  : 'text-[var(--muted)] hover:text-[var(--accent-400)]'
              }`}
            >
              {s.label}
              {isActive && (
                <div 
                  className="absolute -left-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full"
                  style={{ backgroundColor: 'var(--accent-500)' }}
                />
              )}
            </a>
          );
        })}
      </nav>
      
      <div className="flex gap-4 text-sm">
        <Link 
          href="https://github.com/FernandoKuniy" 
          className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
        >
          GitHub
        </Link>
        <Link 
          href="https://www.linkedin.com/in/fernando-kuniy/" 
          className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
