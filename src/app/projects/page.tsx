import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/project-card";
export const metadata = { title: "Projects" };
export default function Page() {
  const projects = getAllProjects();
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map(p=> <ProjectCard key={p.slug} {...p} />)}
      </div>
    </main>
  );
}
