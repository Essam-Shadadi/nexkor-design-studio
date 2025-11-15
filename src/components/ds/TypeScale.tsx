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
    <div className="rounded-2xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-3">Token</th>
            <th className="text-left p-3">Class</th>
            <th className="text-left p-3">Preview</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{r.size}</td>
              <td className="p-3">
                <code className="px-2 py-0.5 rounded bg-gray-100">{r.className}</code>
              </td>
              <td className={`p-3 ${r.className} font-body`}>
                {r.sample}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
