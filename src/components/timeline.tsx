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
    <ol className="relative ml-1">
      {/* Gradient timeline line */}
      <div 
        className="absolute left-0 top-0 h-full w-px"
        style={{
          background: 'linear-gradient(to bottom, var(--accent-700), var(--accent-500), var(--accent-700))'
        }}
      />
      
      {items.map((it, index) => (
        <li key={`${it.company}-${it.start}`} className="group relative mb-10 ml-8">
          {/* Timeline node with gradient ring */}
          <div className="absolute -left-6 mt-1 flex h-4 w-4 items-center justify-center">
            <div 
              className="h-3 w-3 rounded-full border-2 transition-all duration-300 group-hover:scale-110"
              style={{
                borderColor: 'var(--accent-500)',
                backgroundColor: 'var(--bg-elev)',
                boxShadow: '0 0 0 4px var(--accent-500)/20'
              }}
              aria-hidden="true"
            />
          </div>
          
          <div className="flex flex-wrap items-baseline gap-x-2">
            <div className="text-xs text-[var(--muted)] font-mono tracking-wide">
              {it.start} — {it.end}
            </div>
            <div className="text-sm font-medium text-[#e6e9f1]">
              {it.role} ·{" "}
              {it.url ? (
                <a 
                  href={it.url} 
                  className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
                >
                  {it.company}
                </a>
              ) : (
                <span className="text-[var(--accent-400)]">{it.company}</span>
              )}
            </div>
          </div>
          
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] leading-relaxed">
            {it.highlights.map((h) => (
              <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-500)]/60">
                {h}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}