"use client";

import DocsPageClient from "../DocsPageClient";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function GettingStartedDocsClient() {
  const { t } = useLanguage();

  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">
        {t("docs.gettingStarted.title")}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        {t("docs.gettingStarted.intro")}
      </p>

      {/* Tech stack */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.gettingStarted.techStack.title")}
        </h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.gettingStarted.techStack.item1")}</li>
          <li>{t("docs.gettingStarted.techStack.item2")}</li>
          <li>{t("docs.gettingStarted.techStack.item3")}</li>
          <li>{t("docs.gettingStarted.techStack.item4")}</li>
          <li>{t("docs.gettingStarted.techStack.item5")}</li>
        </ul>
      </section>

      {/* Project structure */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.gettingStarted.structure.title")}
        </h3>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`src/
  app/
    page.tsx                 // Home (can point to showcase/landing)
    design-system/
      colors/                // Color tokens showcase
      typography/            // Typography scale showcase
      components/            // Component gallery (buttons, cards, overlays, motion)
      forms/                 // Form patterns
      motion/                // Motion presets demos
    showcase/
      landing/               // Marketing-style landing page
      dashboard/             // Dashboard demo
      auth/                  // Auth & MFA demo
    docs/
      DocsPageClient.tsx     // Shared docs layout (sidebar + content)
      getting-started/
      foundations/
      components/
      tokens/
  components/
    ui/                      // Reusable design system components
    motion/                  // Motion providers & page transitions
  lib/
    motion.ts                // Shared motion presets`}
        </pre>
      </section>

      {/* Running the project */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.gettingStarted.running.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.gettingStarted.running.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4">
{`npm install
npm run dev`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.gettingStarted.running.afterCommand")}{" "}
          <code className="font-mono">http://localhost:3000</code>.
        </p>
      </section>

      {/* Storybook */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.gettingStarted.storybook.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.gettingStarted.storybook.body")}
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4">
{`npm run storybook`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.gettingStarted.storybook.afterCommand")}
        </p>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h3 className="text-lg font-heading">
          {t("docs.gettingStarted.nextSteps.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.gettingStarted.nextSteps.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.gettingStarted.nextSteps.item1")}</li>
          <li>{t("docs.gettingStarted.nextSteps.item2")}</li>
          <li>{t("docs.gettingStarted.nextSteps.item3")}</li>
          <li>{t("docs.gettingStarted.nextSteps.item4")}</li>
          <li>{t("docs.gettingStarted.nextSteps.item5")}</li>
          <li>{t("docs.gettingStarted.nextSteps.item6")}</li>
        </ul>
      </section>
    </DocsPageClient>
  );
}
