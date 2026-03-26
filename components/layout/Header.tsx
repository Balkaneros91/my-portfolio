"use client";

import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import LanguageToggle from "../language-toggle";
import { useLanguage } from "@/context/language-context";

export default function Header() {
  const { t } = useLanguage();

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
          {t.hero.name}
        </Link>

        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-muted">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center transition-colors hover:text-primary">
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 top-full mt-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
