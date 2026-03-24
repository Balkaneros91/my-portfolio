import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-amber-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left: Name */}
        <div className="text-lg font-semibold">Antonio-Claudio Andelic</div>

        <nav className="flex items-center gap-6 text-sm font-medium ">
          <ul>
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
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
