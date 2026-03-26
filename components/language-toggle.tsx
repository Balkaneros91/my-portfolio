"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "sv">("en");

  return (
    <div className="flex items-center rounded-full border border-border bg-card p-1 text-sm  shadow-sm">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted hover:text-foreground"
        }`}>
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("sv")}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${
          lang === "sv"
            ? "bg-primary text-primary-foreground"
            : "text-muted hover:text-foreground"
        }`}>
        SV
      </button>
    </div>
  );
}
