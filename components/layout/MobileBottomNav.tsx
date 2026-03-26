"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const items = [
  {
    href: "#about",
    id: "about",
    label: "About",
    icon: "solar:user-bold-duotone",
  },
  {
    href: "#skills",
    id: "skills",
    label: "Skills",
    icon: "solar:code-bold-duotone",
  },
  {
    href: "#projects",
    id: "projects",
    label: "Projects",
    icon: "solar:folder-bold-duotone",
  },
  {
    href: "#contact",
    id: "contact",
    label: "Contact",
    icon: "solar:chat-round-bold-duotone",
  },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionElements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sectionElements.forEach((section) => sectionObserver.observe(section));

    return () => {
      sectionElements.forEach((section) => sectionObserver.unobserve(section));
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-w-16 flex-col items-center gap-1 rounded-xl px-2 py-1 text-[11px] font-medium transition-all ${
                  isActive ? "text-primary" : "text-muted hover:text-primary"
                }`}>
                <Icon
                  icon={item.icon}
                  className={`h-5 w-5 transition-transform ${
                    isActive ? "-translate-y-0.5" : ""
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
