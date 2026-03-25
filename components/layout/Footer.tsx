import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: Identity */}
          <div>
            <p className="text-base font-semibold tracking-tight text-zinc-900">
              Antonio-Claudio Andelic
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Junior Full-Stack Developer
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-10">
            {/* Navigation */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Navigation
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>
                  <Link href="#about" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-black">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-black">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Connect
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>
                  <a
                    href="mailto:andelic.antonio.claudio91@gmail.com"
                    className="hover:text-black">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Balkaneros91"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/antonio-claudio-andelic/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6">
          <p className="text-xs text-zinc-500">
            © 2026 Antonio-Claudio Andelic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
