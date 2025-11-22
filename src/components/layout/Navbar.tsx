"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useLanguage } from "@/components/lang/LanguageProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header className="h-16 border-b bg-white/70 dark:bg-nk-bgDark/70 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl text-nk-primary">
          Nexkor
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/docs" className="hover:underline">
            {t("nav.docs")}
          </Link>
          <Link href="/design-system/colors" className="hover:underline">
            {t("nav.colors")}
          </Link>
          <Link href="/design-system/typography" className="hover:underline">
            {t("nav.typography")}
          </Link>
          <Link href="/design-system/components" className="hover:underline">
            {t("nav.components")}
          </Link>
          <Link href="/showcase/dashboard" className="hover:underline">
            {t("nav.dashboard")}
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg_WHITE/10"
          >
            {theme === "dark" ? t("nav.theme.light") : t("nav.theme.dark")}
          </button>
        </nav>
      </div>
    </header>
  );
}
