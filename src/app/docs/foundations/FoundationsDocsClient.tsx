"use client";

import DocsPageClient from "../DocsPageClient";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function FoundationsDocsClient() {
  const { t } = useLanguage();

  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">
        {t("docs.foundations.title")}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        {t("docs.foundations.intro")}
      </p>

      {/* Color system */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.foundations.color.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.color.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`theme.extend.colors.nk = {
  grean: "#076250ff",      // Primary brand green
  charcoal: "#111827",  // Deep gray for surfaces & text
  green: "#10B981",     // Success
  yellow: "#FACC15",    // Warning
  gray: "#E5E7EB",      // Subtle borders & backgrounds
  bg: "#F9FAFB",        // Page background (light)
  bgDark: "#0B1220",    // Page background (dark)
};`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.color.footer")}
        </p>
      </section>

      {/* Typography */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.foundations.typography.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.typography.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`fontFamily: {
  heading: ['var(--font-heading)'],
  body: ['var(--font-body)'],
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.typography.footer")}
        </p>
      </section>

      {/* Spacing & radii */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.foundations.spacing.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.spacing.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`borderRadius: {
  xl: "1rem",
  "2xl": "1.5rem",
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.spacing.footer")}
        </p>
      </section>

      {/* Motion */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.foundations.motion.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.motion.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
});`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.motion.footer")}
        </p>
      </section>

      {/* Theming */}
      <section className="space-y-3">
        <h3 className="text-lg font-heading">
          {t("docs.foundations.theming.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.foundations.theming.body")}
        </p>
      </section>
    </DocsPageClient>
  );
}
