import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b  border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left: Name */}
        <div className="text-lg font-semibold tracking-tight">
          Antonio-Claudio Andelic
        </div>

        {/* Right: Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contacts"
                className="hover:text-blue-600 transition-colors">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
