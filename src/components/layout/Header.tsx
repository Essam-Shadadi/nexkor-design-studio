"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b bg-white/70 dark:bg-nk-bgDark/70 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl text-nk-blue">
          Nexkor
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/design-system/colors" className="hover:underline">
            Colors
          </Link>
          <Link href="/design-system/typography" className="hover:underline">
            Typography
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-1 rounded-xl border text-xs hover:bg-gray-50 dark:hover:bg-nk-charcoal"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
