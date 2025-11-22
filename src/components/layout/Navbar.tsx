"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");
  const toggleMenu = () => setOpen((prev) => !prev);

  const navItems = [
    { href: "/docs", label: t("nav.docs") },
    { href: "/design-system/colors", label: t("nav.colors") },
    { href: "/design-system/typography", label: t("nav.typography") },
    { href: "/design-system/components", label: t("nav.components") },
    { href: "/showcase/dashboard", label: t("nav.dashboard") },
  ];

  return (
    <header className="h-16 border-b bg-white/70 dark:bg-nk-bgDark/70 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl text-nk-blue">
          Nexkor
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleLang}
            className="px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            {theme === "dark" ? t("nav.theme.light") : t("nav.theme.dark")}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-[11px] rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-gray-800 dark:bg-gray-100" />
              <span className="block h-0.5 w-5 bg-gray-800 dark:bg-gray-100" />
              <span className="block h-0.5 w-5 bg-gray-800 dark:bg-gray-100" />
            </div>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t bg-white dark:bg-nk-bgDark shadow-xl"
          >
            <nav className="mx-auto max-w-6xl px-6 py-3 space-y-3 text-sm">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-1 text-gray-700 dark:text-gray-200 hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={toggleLang}
                  className="flex-1 px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  {lang === "en" ? "العربية" : "English"}
                </button>

                <button
                  onClick={toggleTheme}
                  className="flex-1 px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  {theme === "dark" ? t("nav.theme.light") : t("nav.theme.dark")}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
