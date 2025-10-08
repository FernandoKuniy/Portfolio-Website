import Timeline, { type ExperienceItem } from "@/components/timeline";
import ProjectCard from "@/components/project-card";
import data from "@/content/experience/data.json";
import { getAllProjects } from "@/lib/mdx";

export default function Home() {
  const items = data as ExperienceItem[];
  const projects = getAllProjects().slice(0, 6).map(p => ({
    title: p.title,
    summary: p.summary,
    tech: p.tech,
    links: p.links,
    image: p.images?.[0],
  }));
  return (
    <div className="lg:col-start-2">
      <section id="about" aria-labelledby="about-h" className="scroll-mt-24 py-12 border-b pt-22">
        <p className="mt-3 text-slate-700">
          I build accessible, performant web apps focused on clear UX and strong engineering.
        </p>
      </section>

      <section id="experience" aria-labelledby="exp-h" className="scroll-mt-24 py-12 border-b">
        <h2 id="exp-h" className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6">
          <Timeline items={items} />
        </div>
      </section>

      <section id="projects" aria-labelledby="proj-h" className="scroll-mt-24 py-12">
        <h2 id="proj-h" className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
