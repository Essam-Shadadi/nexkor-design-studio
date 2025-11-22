"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { messages, Language } from "@/i18n/messages";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

const STORAGE_KEY = "nexkor-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined"
      ? (localStorage.getItem(STORAGE_KEY) as Language | null)
      : null;
    if (stored === "ar" || stored === "en") {
      setLangState(stored);
      applyDocumentAttrs(stored);
    } else {
      applyDocumentAttrs("en");
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
    applyDocumentAttrs(next);
  };

  const t = (key: string) => {
    const dict = messages[lang] || {};
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function applyDocumentAttrs(lang: Language) {
  if (typeof document === "undefined") return;
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
}
