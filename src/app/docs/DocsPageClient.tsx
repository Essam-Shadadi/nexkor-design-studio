"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NAV = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Foundations", href: "/docs/foundations" },
  { title: "Components", href: "/docs/components" },
  { title: "Tokens", href: "/docs/tokens" },
];

export default function DocsPageClient({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-nk-bg dark:bg-nk-bgDark flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-nk-charcoal/80 py-10">
        <nav className="space-y-2 px-6">
          <h2 className="font-heading text-xl mb-6">Documentation</h2>

          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm transition ${
                  active
                    ? "bg-nk-blue text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-nk-charcoal"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR */}
      <div className="lg:hidden border-b border-gray-200 dark:border-gray-800 w-full p-4 flex justify-between">
        <h1 className="font-heading text-lg">Docs</h1>
        <Button size="sm" variant="secondary" onClick={() => setMobileOpen(true)}>
          Menu
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 24 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              className="absolute left-0 top-0 w-64 h-full bg-white dark:bg-nk-charcoal/90 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-heading text-xl mb-6">Documentation</h2>
              <nav className="space-y-2">
                {NAV.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm transition ${
                        active
                          ? "bg-nk-blue text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-nk-charcoal"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="flex-1 py-12">
        <Container className="prose prose-gray dark:prose-invert max-w-3xl">
          <h1 className="font-heading text-3xl mb-6">Nexkor Design System</h1>

          <p className="text-gray-600 dark:text-gray-300">
            Select a page from the left to begin exploring the design system.
          </p>

          {children && <div className="mt-10">{children}</div>}
        </Container>
      </main>
    </div>
  );
}
