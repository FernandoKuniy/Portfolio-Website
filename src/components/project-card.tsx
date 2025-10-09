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
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-5 transition-all duration-300 will-change-transform group-hover:-translate-y-0.5 group-hover:glow">
        {image ? (
          <Image 
            src={image} 
            alt="" 
            width={1200} 
            height={630} 
            className="mb-4 h-44 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        ) : null}

        <h3 className="text-base font-semibold text-[#e6e9f1] transition-colors duration-200 group-hover:text-[var(--accent-400)]">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)] leading-relaxed">
          {summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span 
              key={t} 
              className="rounded-full border border-[var(--border)]/60 bg-[var(--bg)]/50 px-2 py-0.5 text-xs text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent-500)]/60 hover:text-[var(--accent-400)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm">
          {links?.demo && (
            <a 
              href={links.demo} 
              className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
            >
              Demo
            </a>
          )}
          {links?.repo && (
            <a 
              href={links.repo} 
              className="relative text-[var(--accent-400)] transition-all duration-300 hover:text-[var(--accent-300)] before:absolute before:bottom-0 before:left-0 before:h-px before:w-0 before:bg-[var(--accent-400)] before:transition-all before:duration-300 hover:before:w-full"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
