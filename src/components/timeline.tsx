export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
  url?: string;
};

import Link from "next/link";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div>
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
      
      {/* Resume button at the end of timeline */}
      <div className="mt-8 ml-8">
        <Link 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-2 text-sm text-[var(--accent-400)] transition-all duration-200 hover:border-[var(--accent-500)] hover:bg-[var(--accent-500)]/10 hover:text-[var(--accent-300)]"
        >
          <svg 
            className="h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          View Full Resume
        </Link>
      </div>
    </div>
  );
}