// WCAG contrast helpers + formatting

export type Hex = `#${string}`;

// Parse hex to RGB
export function hexToRgb(hex: Hex): { r: number; g: number; b: number } {
  const v = hex.replace("#", "");
  const [r, g, b] =
    v.length === 3
      ? [v[0] + v[0], v[1] + v[1], v[2] + v[2]].map((x) => parseInt(x, 16))
      : [v.slice(0, 2), v.slice(2, 4), v.slice(4, 6)].map((x) => parseInt(x, 16));
  return { r, g, b };
}

// Relative luminance
export function luminance(hex: Hex): number {
  const { r, g, b } = hexToRgb(hex);
  const sRGB = [r, g, b].map((v) => {
    const n = v / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

// Contrast ratio between two colors
export function contrastRatio(fg: Hex, bg: Hex): number {
  const L1 = luminance(fg);
  const L2 = luminance(bg);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Badge label for AA/AAA (normal text)
export function wcagLabel(cr: number): "AAA" | "AA" | "Fail" {
  if (cr >= 7) return "AAA";
  if (cr >= 4.5) return "AA";
  return "Fail";
}

export function formatRatio(n: number): string {
  return `${n.toFixed(2)}:1`;
}
