"use client";

import { contrastRatio, wcagLabel, formatRatio } from "@/lib/color";
import type { Hex } from "@/lib/color";
import { useMemo } from "react";

type Props = {
  name: string;
  hex: Hex;
  on?: "light" | "dark"; // preferred text context demo
};

export default function ColorSwatch({ name, hex, on = "light" }: Props) {
  const fg = on === "light" ? "#111827" : "#F8FAFC";

  const ratio = useMemo(() => contrastRatio(fg as Hex, hex), [fg, hex]);
  const label = useMemo(() => wcagLabel(ratio), [ratio]);

  return (
    <div className="rounded-2xl overflow-hidden border bg-white">
      <div
        className="h-24 flex items-end justify-between p-3"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`text-xs font-medium px-2 py-1 rounded-md ${
            on === "light" ? "bg-white/80 text-gray-900" : "bg-black/40 text-white"
          }`}
        >
          {name}
        </span>

        <span
          className={`text-xs font-semibold px-2 py-1 rounded-md ${
            label === "AAA"
              ? "bg-green-600 text-white"
              : label === "AA"
              ? "bg-yellow-500 text-black"
              : "bg-red-600 text-white"
          }`}
          title={`Contrast vs ${on} text`}
        >
          {label} • {formatRatio(ratio)}
        </span>
      </div>

      <div className="px-3 py-3 text-sm flex items-center justify-between">
        <code className="font-mono">{hex}</code>
        <button
          className="text-xs px-2 py-1 rounded-md border hover:bg-gray-50"
          onClick={() => navigator.clipboard.writeText(hex)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
