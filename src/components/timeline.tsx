export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative border-l pl-4 space-y-6">
      {items.map((it) => (
        <li key={`${it.company}-${it.start}`}>
          <div className="text-sm text-slate-500">
            {it.start} – {it.end}
          </div>
          <div className="font-medium">
            {it.role} · {it.company}
          </div>
          <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
            {it.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

