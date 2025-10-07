import Link from "next/link";

export default function Header() {
    return (
      <header className="px-6 py-4 border-b">
        <nav className="flex items-center gap-6">
          <Link href="/" className="font-medium">FK</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume.pdf">Resume</Link>
        </nav>
      </header>
    );
  }
  