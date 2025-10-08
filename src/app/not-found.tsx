import Link from "next/link";

export default function NotFound() {
    return (
      <main className="mx-auto max-w-xl p-6">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="mt-4 inline-block underline">Go home</Link>
      </main>
    );
  }
  