import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
  links?: Record<string, string>;
  date: string;
  images?: string[];
};

const PROJ_DIR = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  return fs
    .readdirSync(PROJ_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const src = fs.readFileSync(path.join(PROJ_DIR, f), "utf8");
      const { data } = matter(src);
      return data as Project;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
