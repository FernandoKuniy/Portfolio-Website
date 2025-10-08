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
    <article
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition
                 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      {image ? (
        // Replace with next/image when images are present
        // eslint-disable-next-line @next/next/no-img-element
        <Image src={image} alt="" width={1200} height={630} className="mb-4 h-44 w-full rounded-lg object-cover" />
      ) : null}

      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
        {summary}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        {links?.demo && (
          <a href={links.demo} className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500">
            Demo
          </a>
        )}
        {links?.repo && (
          <a href={links.repo} className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500">
            Code
          </a>
        )}
      </div>
    </article>
  );
}
