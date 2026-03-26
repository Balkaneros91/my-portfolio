"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-muted transition-all hover:border-primary/50 hover:text-foreground hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring/40">
        <span className="flex items-center justify-center text-primary">
          <Icon icon="solar:moon-bold-duotone" className="h-5 w-5" />
        </span>
        <span className="hidden sm:inline">Theme</span>
      </button>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-muted transition-all hover:border-primary/50 hover:text-foreground hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring/40">
      {/* ICON */}
      <span className="flex items-center justify-center text-primary">
        <Icon
          icon={isDark ? "solar:sun-2-bold-duotone" : "solar:moon-bold-duotone"}
          className="h-5 w-5"
        />
      </span>

      {/* TEXT */}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
