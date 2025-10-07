import Timeline, { type ExperienceItem } from "@/components/timeline";
import data from "@/content/experience/data.json";

export const metadata = { title: "Experience" };

export default function Page() {
  const items = data as ExperienceItem[];
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Experience</h1>
      <div className="mt-6">
        <Timeline items={items} />
      </div>
    </main>
  );
}
