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
        
        {items.map((it) => (
          <li key={`${it.company}-${it.start}`} className="group relative mb-8 sm:mb-10 ml-6 sm:ml-8">
            {/* Timeline node with gradient ring */}
            <div className="absolute -left-5 sm:-left-6 mt-1 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center">
              <div 
                className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: 'var(--accent-500)',
                  backgroundColor: 'var(--bg-elev)',
                  boxShadow: '0 0 0 4px var(--accent-500)/20'
                }}
                aria-hidden="true"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-1 sm:gap-x-2">
              <div className="text-sm text-[var(--muted)] font-mono tracking-wide">
                {it.start} — {it.end}
              </div>
              <div className="text-base font-medium text-[var(--foreground)]">
                {it.role} ·{" "}
                {it.url ? (
                  <a 
                    href={it.url} 
                    className="relative text-[var(--accent-500)] transition-all duration-300 hover:text-[var(--accent-400)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-500)] before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {it.company}
                  </a>
                ) : (
                  <span className="text-[var(--accent-500)]">{it.company}</span>
                )}
              </div>
            </div>
            
            <ul className="mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {it.highlights.map((h) => (
                <li key={h} className="relative pl-3 sm:pl-4 before:absolute before:left-0 before:top-1.5 sm:before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-500)]/60">
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      
      {/* Resume button at the end of timeline */}
      <div className="mt-6 sm:mt-8 ml-6 sm:ml-8">
        <Link 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm text-[var(--accent-400)] transition-all duration-200 hover:border-[var(--accent-500)] hover:bg-[var(--accent-500)]/10 hover:text-[var(--accent-300)]"
        >
          <svg 
            className="h-3 w-3 sm:h-4 sm:w-4" 
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