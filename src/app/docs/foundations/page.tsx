import DocsPageClient from "../DocsPageClient";

export const metadata = {
  title: "Foundations — Nexkor Design System",
};

export default function FoundationsPage() {
  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">Foundations</h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Foundations define the core visual language of Nexkor — colors, typography, spacing,
        radii, and motion. All components and layouts are built on top of these primitives to
        ensure consistency across every Nexkor demo.
      </p>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Color system</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Nexkor uses a brand-forward palette with semantic naming in Tailwind:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`theme.extend.colors.nk = {
  blue: "#1A73E8",      // Primary brand blue
  charcoal: "#111827",  // Deep gray for surfaces & text
  green: "#10B981",     // Success
  yellow: "#FACC15",    // Warning
  gray: "#E5E7EB",      // Subtle borders & backgrounds
  bg: "#F9FAFB",        // Page background (light)
  bgDark: "#0B1220",    // Page background (dark)
};`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          In components, prefer semantic usage rather than hardcoded hex values. For example:
          primary buttons use <code className="font-mono">nk.blue</code>, backgrounds use{" "}
          <code className="font-mono">nk.bg</code> / <code className="font-mono">nk.bgDark</code>,
          and feedback states use green/yellow.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Typography</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          The design system uses Poppins for headings and Inter for body text. They are loaded with{" "}
          <code className="font-mono">next/font</code> and exposed as CSS variables:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`fontFamily: {
  heading: ['var(--font-heading)'],
  body: ['var(--font-body)'],
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Components use <code className="font-mono">font-heading</code> for titles/headings and{" "}
          <code className="font-mono">font-body</code> for body text, ensuring consistent typography
          across pages.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Spacing & radii</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Spacing follows Tailwind&apos;s default scale. Corners are typically rounded using
          slightly larger radii for a modern soft look:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`borderRadius: {
  xl: "1rem",
  "2xl": "1.5rem",
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Cards, modals, and interactive elements use <code className="font-mono">rounded-xl</code>{" "}
          or <code className="font-mono">rounded-2xl</code> to align with the brand&apos;s
          &quot;futuristic minimalism&quot; aesthetic.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Motion</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Motion is provided via shared Framer Motion presets in{" "}
          <code className="font-mono">src/lib/motion.ts</code>. Examples:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
});`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Motion is wrapped in a global <code className="font-mono">MotionProvider</code> that
          respects <code className="font-mono">prefers-reduced-motion</code>, ensuring animations
          are accessible by default.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-heading">Theming</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Light and dark modes are handled via a theme provider that toggles a{" "}
          <code className="font-mono">className</code> on the <code className="font-mono">&lt;html&gt;</code>{" "}
          element and persists the user&apos;s preference. Components use Tailwind&apos;s{" "}
          <code className="font-mono">dark:</code> variant to adjust colors and surfaces.
        </p>
      </section>
    </DocsPageClient>
  );
}
