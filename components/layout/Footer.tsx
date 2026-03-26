import Link from "next/link";
import { Icon } from "@iconify/react";

const navItems = [
  { href: "#about", label: "About", icon: "solar:user-bold-duotone" },
  { href: "#skills", label: "Skills", icon: "solar:code-bold-duotone" },
  { href: "#projects", label: "Projects", icon: "solar:folder-bold-duotone" },
  { href: "#contact", label: "Contact", icon: "solar:chat-round-bold-duotone" },
];

const socialItems = [
  {
    href: "mailto:andelic.antonio.claudio91@gmail.com",
    label: "Email",
    icon: "solar:letter-bold-duotone",
  },
  {
    href: "/cv/Antonio-Claudio-CV.pdf",
    label: "Download CV (PDF)",
    icon: "solar:download-bold-duotone",
  },
  {
    href: "https://github.com/Balkaneros91",
    label: "GitHub",
    icon: "mdi:github",
  },
  {
    href: "https://www.linkedin.com/in/antonio-claudio-andelic/",
    label: "LinkedIn",
    icon: "mdi:linkedin",
  },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-border bg-card">
      <div className="mx-auto max-w-lg md:max-w-6xl px-6 py-10 pb-24 md:pb-10">
        <div className="grid gap-10 text-center md:grid-cols-[1.4fr_1fr_1fr] md:text-left">
          {/* Left: Identity */}
          <div>
            <p className="text-base font-semibold tracking-tight text-foreground">
              Antonio-Claudio Andelic
            </p>
            <p className="mt-1 text-sm text-muted">
              Junior Full-Stack Developer
            </p>
            <p className="mt-2 inline-flex items-center justify-center gap-1 text-sm text-muted md:justify-start">
              <Icon icon="solar:map-point-bold-duotone" className="h-4 w-4" />
              Stockholm, Sweden
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Navigation
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center justify-center gap-2 transition-all duration-200 hover:text-primary md:justify-start">
                    <Icon
                      icon={item.icon}
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                    />
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 top-full mt-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {socialItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("http") || item.href.endsWith(".pdf")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http") || item.href.endsWith(".pdf")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 transition-all duration-200 hover:text-primary">
                    <Icon
                      icon={item.icon}
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                    />
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 top-full mt-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-3 text-center text-xs text-muted md:flex-row md:items-center md:justify-between md:text-left">
            <p className="md:max-w-55">
              © 2026 Antonio-Claudio Andelic. All rights reserved.
            </p>
            <p className="md:max-w-80">
              Junior developer focused on thoughtful UI and practical full-stack
              development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
