"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-border bg-card p-1 text-sm  shadow-sm">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted hover:text-foreground"
        }`}>
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("sv")}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          language === "sv"
            ? "bg-primary text-primary-foreground"
            : "text-muted hover:text-foreground"
        }`}>
        SV
      </button>
    </div>
  );
}
