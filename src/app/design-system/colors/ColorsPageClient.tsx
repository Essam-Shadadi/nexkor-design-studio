"use client";

import ColorSwatch from "@/components/ds/ColorSwatch";
import type { Hex } from "@/lib/color";
import { useLanguage } from "@/components/lang/LanguageProvider";

const brand: { key: string; hex: Hex; on: "light" | "dark" }[] = [
  { key: "colors.brand.nexkorGreen", hex: "#076250", on: "light" },
  { key: "colors.brand.deepCharcoal", hex: "#111827", on: "dark" },
  { key: "colors.brand.accentGreen", hex: "#10B981", on: "light" },
  { key: "colors.brand.accentYellow", hex: "#FACC15", on: "light" },
  { key: "colors.brand.neutralGray", hex: "#E5E7EB", on: "light" },
  { key: "colors.brand.bgLight", hex: "#F9FAFB", on: "light" },
  { key: "colors.brand.bgDark", hex: "#0B1220", on: "dark" },
];

const semanticNotes = [
  {
    token: "bg",
    className: "bg-nk-bg",
    hex: "#F9FAFB",
    usageKey: "colors.semantic.usage.bg",
  },
  {
    token: "bgDark",
    className: "dark:bg-nk-bgDark",
    hex: "#0B1220",
    usageKey: "colors.semantic.usage.bgDark",
  },
  {
    token: "Nexkor Green",
    className: "text-nk-blue bg-nk-blue/10",
    hex: "#076250",
    usageKey: "colors.semantic.usage.blue",
  },
  {
    token: "charcoal",
    className: "text-nk-charcoal",
    hex: "#111827",
    usageKey: "colors.semantic.usage.charcoal",
  },
  {
    token: "green",
    className: "bg-nk-green",
    hex: "#10B981",
    usageKey: "colors.semantic.usage.green",
  },
  {
    token: "yellow",
    className: "bg-nk-yellow",
    hex: "#FACC15",
    usageKey: "colors.semantic.usage.yellow",
  },
  {
    token: "gray",
    className: "bg-nk-gray",
    hex: "#E5E7EB",
    usageKey: "colors.semantic.usage.gray",
  },
];

export default function ColorsPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-2">
        {t("colors.page.title")}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {t("colors.page.subtitle")}
      </p>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {brand.map((c) => (
          <ColorSwatch key={c.key} name={t(c.key)} hex={c.hex} on={c.on} />
        ))}
      </section>

      <h2 className="text-2xl font-heading mt-10 mb-3">
        {t("colors.semantic.title")}
      </h2>
      <div className="rounded-2xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-nk-charcoal/80">
            <tr>
              <th className="text-left p-3">
                {t("colors.semantic.table.token")}
              </th>
              <th className="text-left p-3">
                {t("colors.semantic.table.class")}
              </th>
              <th className="text-left p-3">
                {t("colors.semantic.table.hex")}
              </th>
              <th className="text-left p-3">
                {t("colors.semantic.table.usage")}
              </th>
            </tr>
          </thead>
          <tbody>
            {semanticNotes.map((row) => (
              <tr key={row.token} className="border-t border-gray-100 dark:border-gray-800">
                <td className="p-3 font-mono">{row.token}</td>
                <td className="p-3">
                  <code className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-nk-charcoal">
                    {row.className}
                  </code>
                </td>
                <td className="p-3">{row.hex}</td>
                <td className="p-3">
                  {t(row.usageKey)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        {t("colors.page.tip")}
      </p>
    </div>
  );
}
