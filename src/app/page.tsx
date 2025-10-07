export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold">Fernando Kuniy</h1>
      <p className="mt-3 text-slate-600">
      Data-driven operations and software professional with experience designing, automating, and optimizing business workflows across technical and customer-facing environments. Proven record of improving process efficiency, data accuracy, and customer satisfaction through AI, analytics, and cross-functional collaboration. Skilled in transforming complex datasets into actionable insights, executing automation strategies, and ensuring compliance with quality and operational standards.
      </p>
      <nav className="mt-6 flex gap-4">
        <a href="/projects" className="underline">Projects</a>
        <a href="/experience" className="underline">Experience</a>
        <a href="/about" className="underline">About</a>
        <a href="/resume.pdf" className="underline">Resume</a>
      </nav>
    </main>
  );
}
