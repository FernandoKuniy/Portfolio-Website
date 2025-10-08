export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
  url?: string;
};

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative ml-1 border-l border-slate-200 dark:border-slate-800">
      {items.map((it) => (
        <li key={`${it.company}-${it.start}`} className="mb-10 ml-6">
          <span
            className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-baseline gap-x-2">
            <div className="text-xs text-slate-500">
              {it.start} — {it.end}
            </div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {it.role} ·{" "}
              {it.url ? (
                <a href={it.url} className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500">
                  {it.company}
                </a>
              ) : (
                it.company
              )}
            </div>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {it.highlights.map((h) => (
              <li key={h} className="leading-relaxed">
                {h}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}