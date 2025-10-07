import Link from "next/link";

export default function Header() {
    return (
      <header className="px-6 py-4 border-b">
        <Link href="/" className="font-medium">FK</Link>
      </header>
    );
  }
  