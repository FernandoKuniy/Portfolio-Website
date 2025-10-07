import data from "@/content/experience/data.json";
import Timeline from "@/components/timeline";
export const metadata = { title: "Experience" };
export default function Page(){ return <main className="mx-auto max-w-3xl p-6">
  <h1 className="text-2xl font-semibold">Experience</h1>
  <div className="mt-6"><Timeline items={data as any} /></div>
</main>; }
