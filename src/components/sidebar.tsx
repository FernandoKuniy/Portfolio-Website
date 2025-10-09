"use client";
import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

type Props = { variant?: "mobile" | "desktop" };

export default function Sidebar({ variant = "desktop" }: Props) {
  if (variant === "mobile") {
    return (
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-semibold">Fernando Kuniy</h1>
          <h2 className="text-xl text-slate-700 dark:text-slate-300">Full Stack Software Engineer</h2>
          <p className="mt-2 text-slate-600">
              I build data-driven, user-focused applications with precision and purpose.
          </p>
        </div>

        {/* horizontally scrollable section pills */}
        <nav aria-label="Sections" className="-mx-1 overflow-x-auto no-scrollbar">
          <ul className="flex gap-2 px-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 text-sm">
          <Link href="https://github.com/FernandoKuniy" className="underline">GitHub</Link>
          <Link href="https://www.linkedin.com/in/fernando-kuniy/" className="underline">LinkedIn</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Fernando Kuniy</h1>
        <h2 className="text-xl text-slate-700 dark:text-slate-300">Full Stack Software Engineer</h2>
        <p className="mt-2 text-slate-600">I build data-driven, user-focused applications with precision and purpose.</p>
      </div>
      <nav aria-label="Section navigation" className="flex flex-col gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`/#${s.id}`}
            className="text-sm text-slate-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            {s.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-4 text-sm">
        <Link href="https://github.com/FernandoKuniy" className="underline">GitHub</Link>
        <Link href="https://www.linkedin.com/in/fernando-kuniy/" className="underline">LinkedIn</Link>
      </div>
    </div>
  );
}
