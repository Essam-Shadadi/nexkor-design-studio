type Row = { size: string; className: string; sample: string };

const rows: Row[] = [
  { size: "Display / 56", className: "text-5xl md:text-6xl", sample: "Design that defines Nexkor" },
  { size: "H1 / 40", className: "text-4xl", sample: "Nexkor Design Studio" },
  { size: "H2 / 32", className: "text-3xl", sample: "UI Components & Motion" },
  { size: "H3 / 24", className: "text-2xl", sample: "Accessibility & Performance" },
  { size: "Body L / 18", className: "text-lg", sample: "Human-centered, fast, and precise." },
  { size: "Body / 16", className: "text-base", sample: "Typography built with Poppins & Inter." },
  { size: "Caption / 12", className: "text-xs", sample: "Consistent rhythm and legibility." },
];

export default function TypeScale() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-nk-charcoal">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3 font-medium">Token</th>
            <th className="px-4 py-3 font-medium">Class</th>
            <th className="px-4 py-3 font-medium">Preview</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-100">
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <td className="px-4 py-3">{r.size}</td>
              <td className="px-4 py-3">
                <code className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700/80 dark:text-gray-200 font-mono">
                  {r.className}
                </code>
              </td>
              <td className={`px-4 py-3 ${r.className} font-body leading-snug text-nk-charcoal dark:text-gray-50`}>
                {r.sample}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
