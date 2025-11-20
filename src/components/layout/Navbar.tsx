"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b bg-white/70 dark:bg-nk-bgDark/70 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl text-nk-blue">
          Nexkor
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/design-system/colors" className="hover:underline">Colors</Link>
          <Link href="/design-system/typography" className="hover:underline">Typography</Link>
          <Link href="/design-system/components" className="hover:underline">Components</Link>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-xs rounded-xl border hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
