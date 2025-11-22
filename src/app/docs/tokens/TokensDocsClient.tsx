"use client";

import DocsPageClient from "../DocsPageClient";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function TokensDocsClient() {
  const { t } = useLanguage();

  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">
        {t("docs.tokens.title")}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        {t("docs.tokens.intro")}
      </p>

      {/* Token export */}
      <section className="space-y-3 mb-6">
        <h3 className="text-lg font-heading">
          {t("docs.tokens.export.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.tokens.export.body")}{" "}
          <code className="font-mono">/tokens.json</code>.
        </p>
        <a
          href="/tokens.json"
          download
          className="inline-flex items-center px-4 py-2 rounded-xl bg-nk-blue text-white text-sm font-medium hover:bg-blue-600 transition"
        >
          {t("docs.tokens.export.button")}
        </a>
      </section>

      {/* Color tokens */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.tokens.colors.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.tokens.colors.body")}{" "}
          <code className="font-mono">tokens.json</code>:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`"colors": {
  "nk-blue": "#1A73E8",
  "nk-charcoal": "#111827",
  "nk-green": "#10B981",
  "nk-yellow": "#FACC15",
  "nk-gray": "#E5E7EB",
  "nk-bg": "#F9FAFB",
  "nk-bgDark": "#0B1220"
}`}
        </pre>
      </section>

      {/* Typography tokens */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.tokens.typography.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.tokens.typography.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`"fonts": {
  "heading": "Poppins (var(--font-heading))",
  "body": "Inter (var(--font-body))"
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.tokens.typography.footer")}{" "}
          <code className="font-mono">font-heading</code> {" "}
          {t("docs.tokens.typography.and")}{" "}
          <code className="font-mono">font-body</code>.
        </p>
      </section>

      {/* Using tokens elsewhere */}
      <section className="space-y-3">
        <h3 className="text-lg font-heading">
          {t("docs.tokens.usage.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.tokens.usage.body")}{" "}
          <code className="font-mono">tokens.json</code>{" "}
          {t("docs.tokens.usage.bodyTail")}
        </p>
      </section>
    </DocsPageClient>
  );
}
