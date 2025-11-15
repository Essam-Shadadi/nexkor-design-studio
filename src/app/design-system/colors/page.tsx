import ColorSwatch from "@/components/ds/ColorSwatch";
import type { Hex } from "@/lib/color";

const brand: { name: string; hex: Hex; on: "light" | "dark" }[] = [
  { name: "Nexkor Blue", hex: "#1A73E8", on: "light" },
  { name: "Deep Charcoal", hex: "#111827", on: "dark" },
  { name: "Accent Green", hex: "#10B981", on: "light" },
  { name: "Accent Yellow", hex: "#FACC15", on: "light" },
  { name: "Neutral Gray", hex: "#E5E7EB", on: "light" },
  { name: "BG Light", hex: "#F9FAFB", on: "light" },
  { name: "BG Dark", hex: "#0B1220", on: "dark" }
];

const semanticNotes = [
  { token: "bg", className: "bg-nk-bg", hex: "#F9FAFB", usage: "Page backgrounds (light)" },
  { token: "bgDark", className: "dark:bg-nk-bgDark", hex: "#0B1220", usage: "Page backgrounds (dark)" },
  { token: "blue", className: "text-nk-blue bg-nk-blue/10", hex: "#1A73E8", usage: "Primary actions/links" },
  { token: "charcoal", className: "text-nk-charcoal", hex: "#111827", usage: "Body text on light surfaces" },
  { token: "green", className: "bg-nk-green", hex: "#10B981", usage: "Success states" },
  { token: "yellow", className: "bg-nk-yellow", hex: "#FACC15", usage: "Warnings/attention" },
  { token: "gray", className: "bg-nk-gray", hex: "#E5E7EB", usage: "Borders, subtle fills" }
];

export const metadata = {
  title: "Design System – Colors"
};

export default function ColorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-2">Colors</h1>
      <p className="text-gray-600 mb-8">
        Nexkor brand palette with live WCAG contrast badges. Click a hex to copy.
      </p>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {brand.map((c) => (
          <ColorSwatch key={c.name} name={c.name} hex={c.hex} on={c.on} />
        ))}
      </section>

      <h2 className="text-2xl font-heading mt-10 mb-3">Semantic roles</h2>
      <div className="rounded-2xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">Token</th>
              <th className="text-left p-3">Tailwind class</th>
              <th className="text-left p-3">Hex</th>
              <th className="text-left p-3">Usage</th>
            </tr>
          </thead>
          <tbody>
            {semanticNotes.map((row) => (
              <tr key={row.token} className="border-t">
                <td className="p-3 font-mono">{row.token}</td>
                <td className="p-3">
                  <code className="px-2 py-0.5 rounded-md bg-gray-100">{row.className}</code>
                </td>
                <td className="p-3">{row.hex}</td>
                <td className="p-3">{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Tip: semantic tokens keep usage consistent across apps (primary, surface, text, success, warning).
      </p>
    </div>
  );
}
