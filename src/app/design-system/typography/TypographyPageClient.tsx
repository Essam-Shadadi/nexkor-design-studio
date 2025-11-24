"use client";

import TypeScale from "@/components/ds/TypeScale";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function TypographyPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-2">
        {t("typography.title")}
      </h1>

      <p className="text-gray-300 mb-8">
        {t("typography.subtitle.part1")}{" "}
        <span className="font-heading text-nk-blue">
          {t("typography.subtitle.headingFont")}
        </span>{" "}
        {t("typography.subtitle.part2")}{" "}
        <span className="font-body">
          {t("typography.subtitle.bodyFont")}
        </span>{" "}
        {t("typography.subtitle.part3")}{" "}
        <code>next/font</code>.
      </p>

      <section className="space-y-8">

        <article>
          <h2 className="text-2xl font-heading mb-3">
            {t("typography.scale.title")}
          </h2>
          <TypeScale />
        </article>

        <article>
          <h2 className="text-2xl font-heading mb-3">
            {t("typography.weights.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="rounded-2xl border p-5">
              <h3 className="font-heading text-xl mb-2">
                {t("typography.weights.headings")}
              </h3>
              <p className="font-heading text-4xl">
                {t("typography.weights.h1")}
              </p>
              <p className="font-heading text-2xl">
                {t("typography.weights.h2")}
              </p>
              <p className="font-heading text-xl">
                {t("typography.weights.h3")}
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="text-xl mb-2">
                {t("typography.weights.body")}
              </h3>
              <p className="font-body">
                {t("typography.weights.bodyText")}
              </p>
              <p className="font-body text-sm text-gray-300 mt-2">
                {t("typography.weights.caption")}
              </p>
            </div>

          </div>
        </article>

      </section>
    </div>
  );
}
