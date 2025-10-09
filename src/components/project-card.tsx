import Image from "next/image";

type ProjectCardProps = {
  title: string;
  summary: string;
  tech: string[];
  links?: Record<string, string>;
  image?: string;
};

export default function ProjectCard({ title, summary, tech, links, image }: ProjectCardProps) {
  return (
    <article className="group relative">
      {/* Gradient border effect on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div 
          className="h-full w-full rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, var(--accent-700)/.2, var(--accent-500)/.1, transparent)'
          }}
        />
      </div>
      
      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 sm:p-5 transition-all duration-300 will-change-transform group-hover:-translate-y-0.5 group-hover:glow">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Image section - responsive sizing */}
          {image && (
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Image 
                src={image} 
                alt="" 
                width={240} 
                height={150} 
                className="h-32 w-full sm:h-36 sm:w-60 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          )}

          {/* Content section */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent-500)]">
              {links?.demo ? (
                <a 
                  href={links.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>

            <p className="mt-2 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
              {tech.map((t) => (
                <span 
                  key={t} 
                  className="rounded-full border border-[var(--border)]/60 bg-[var(--bg)]/50 px-1.5 py-0.5 text-xs text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent-500)]/60 hover:text-[var(--accent-500)] sm:px-2"
                >
                  {t}
                </span>
              ))}
            </div>

            {(links?.demo || links?.repo) && (
              <div className="mt-4 flex items-center gap-3 sm:gap-4 text-sm">
                {links?.demo && (
                  <a 
                    href={links.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Demo
                  </a>
                )}
                {links?.repo && (
                  <a 
                    href={links.repo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
