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
      <p className="mt-3 text-slate-700 space-y-4">
        I’m a developer passionate about building products that bridge intelligent systems with intuitive design. 
        My focus lies at the intersection of software engineering and data—creating solutions that not only look refined 
        but also deliver measurable impact through automation, analytics, and AI.
      </p>

      <p className="mt-4 text-slate-700">
        Currently, I’m the <span className="font-medium">Lead Developer and Co-founder at SeekLab</span>, where I built and scaled 
        an AI-driven recruiting platform connecting employers with referral partners to accelerate hiring. I lead development 
        across our full-stack platform (Supabase, GCP, Angular, Node.js) and design automations that streamline recruiter and client 
        operations, reducing manual work and improving efficiency across the business.
      </p>

      <p className="mt-4 text-slate-700">
        Previously, I contributed to the development of <span className="font-medium">Snazz</span>, an iOS screen-time management app, 
        collaborating with product and UX teams to enhance performance and usability. I also gained experience in finance as an intern 
        at <span className="font-medium">Itaú Unibanco</span>, where I automated reporting workflows and supported market analysis for 
        the Debt Capital Markets team.
      </p>

      <p className="mt-4 text-slate-700">
        When I’m not coding or refining workflows, you’ll probably find me lifting weights, skiing, hiking through new trails, 
        or starting a new art project with my girlfriend. I enjoy the balance these activities bring — staying active, creative, and grounded 
        outside of building digital products.
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
