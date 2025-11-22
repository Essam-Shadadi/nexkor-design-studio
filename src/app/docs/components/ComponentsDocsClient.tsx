"use client";

import DocsPageClient from "../DocsPageClient";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function ComponentsDocsClient() {
  const { t } = useLanguage();

  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">
        {t("docs.components.title")}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        {t("docs.components.intro")}
      </p>

      {/* Buttons */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.components.buttons.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.buttons.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.buttons.primary")}</li>
          <li>{t("docs.components.buttons.secondary")}</li>
          <li>{t("docs.components.buttons.ghost")}</li>
          <li>{t("docs.components.buttons.destructive")}</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.buttons.loading")}
        </p>
      </section>

      {/* Badges */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.components.badges.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.badges.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.badges.blue")}</li>
          <li>{t("docs.components.badges.green")}</li>
          <li>{t("docs.components.badges.yellow")}</li>
          <li>{t("docs.components.badges.outline")}</li>
        </ul>
      </section>

      {/* Forms */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.components.forms.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.forms.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.forms.label")}</li>
          <li>{t("docs.components.forms.hint")}</li>
          <li>{t("docs.components.forms.error")}</li>
          <li>{t("docs.components.forms.aria")}</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.forms.link")}
        </p>
      </section>

      {/* Layout primitives */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.components.layout.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.layout.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.layout.card")}</li>
          <li>{t("docs.components.layout.container")}</li>
          <li>{t("docs.components.layout.grid")}</li>
          <li>{t("docs.components.layout.shell")}</li>
        </ul>
      </section>

      {/* Overlays & feedback */}
      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">
          {t("docs.components.overlays.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.overlays.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.overlays.modal")}</li>
          <li>{t("docs.components.overlays.drawer")}</li>
          <li>{t("docs.components.overlays.tooltip")}</li>
          <li>{t("docs.components.overlays.toast")}</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.overlays.footer")}
        </p>
      </section>

      {/* Showcase pages */}
      <section className="space-y-3">
        <h3 className="text-lg font-heading">
          {t("docs.components.showcase.title")}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t("docs.components.showcase.body")}
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>{t("docs.components.showcase.landing")}</li>
          <li>{t("docs.components.showcase.dashboard")}</li>
          <li>{t("docs.components.showcase.auth")}</li>
        </ul>
      </section>
    </DocsPageClient>
  );
}
