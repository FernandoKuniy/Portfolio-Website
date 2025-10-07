type ProjectCardProps = {
  title: string;
  summary: string;
  tech: string[];
  links?: Record<string, string>;
};
export default function ProjectCard(p: ProjectCardProps) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-sm">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {p.tech.map((t) => (
          <span key={t} className="rounded bg-slate-100 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}