"use client";

import { createContext, useContext, useMemo, useState } from "react";
import en from "@/locales/en";
import sv from "@/locales/sv";

type Language = "en" | "sv";

const locales = {
  en,
  sv,
};

type Translations = typeof en;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isReady: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = localStorage.getItem("language");
    return savedLanguage === "sv" ? "sv" : "en";
  });
  //   const [language, setLanguageState] = useState<Language>("en");
  //   const [isReady, setIsReady] = useState(false);

  //   useEffect(() => {
  //     const savedLanguage = localStorage.getItem("language");

  //     if (savedLanguage === "sv") {
  //       setLanguageState("sv");
  //     } else {
  //       setLanguageState("en");
  //     }

  //     setIsReady(true);
  //   }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: locales[language],
      isReady: true,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
