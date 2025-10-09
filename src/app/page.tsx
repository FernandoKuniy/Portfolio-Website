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
      <section id="about" className="scroll-mt-24 pt-8 lg:pt-24 pb-12">
        <div className="space-y-4">
          <p className="text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            I&apos;m a developer passionate about building products that bridge intelligent systems with intuitive design. 
            My focus lies at the intersection of software engineering and data — creating solutions that not only look refined 
            but also deliver measurable impact through automation, analytics, and AI.
          </p>

          <p className="text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            Currently, I&apos;m the <span className="font-medium text-[var(--foreground)]">Lead Developer and Co-founder at SeekLab</span>, where I built and scaled 
            an AI-driven recruiting platform connecting employers with referral partners to accelerate hiring. I lead development 
            across our full-stack platform (Supabase, GCP, Angular, Node.js) and design automations that streamline recruiter and client 
            operations, reducing manual work and improving efficiency across the business.
          </p>

          <p className="text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            Previously, I contributed to the development of <span className="font-medium text-[var(--foreground)]">Snazz</span>, an iOS screen-time management app, 
            collaborating with product and UX teams to enhance performance and usability. I also gained experience in finance as an intern 
            at <span className="font-medium text-[var(--foreground)]">Itaú Unibanco</span>, where I automated reporting workflows and supported market analysis for 
            the Debt Capital Markets team.
          </p>

          <p className="text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            When I&apos;m not coding or refining workflows, you&apos;ll probably find me lifting weights, skiing, hiking through new trails, 
            or starting a new art project with my girlfriend. I enjoy the balance these activities bring — staying active, creative, and grounded 
            outside of building digital products.
          </p>
        </div>
      </section>

      {/* Section divider */}
      <div className="relative my-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[var(--border)]/40"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent-500)] to-transparent"></div>
        </div>
      </div>

      <section id="experience" aria-labelledby="exp-h" className="scroll-mt-24 py-8 sm:py-12">
        <h2 id="exp-h" className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl md:text-3xl tracking-tight">Experience</h2>
        <div className="mt-6">
          <Timeline items={items} />
        </div>
      </section>

      {/* Section divider */}
      <div className="relative my-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[var(--border)]/40"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent-500)] to-transparent"></div>
        </div>
      </div>

      <section id="projects" aria-labelledby="proj-h" className="scroll-mt-24 py-8 sm:py-12">
        <h2 id="proj-h" className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl md:text-3xl tracking-tight">Projects</h2>
        <div className="mt-6 space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
