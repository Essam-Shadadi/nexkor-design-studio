import DocsPageClient from "../DocsPageClient";

export const metadata = {
  title: "Tokens — Nexkor Design System",
};

export default function TokensPage() {
  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">Design Tokens</h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Design tokens are the single source of truth for Nexkor&apos;s visual language — colors,
        typography, radii, and motion timings. They are defined in{" "}
        <code className="font-mono">tailwind.config.js</code> and can be exported as JSON to be
        shared with other platforms or tools.
      </p>

      <section className="space-y-3 mb-6">
        <h3 className="text-lg font-heading">Token export</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A simple JSON representation of key tokens is exposed at{" "}
          <code className="font-mono">/tokens.json</code>. You can download it directly:
        </p>
        <a
          href="/tokens.json"
          download
          className="inline-flex items-center px-4 py-2 rounded-xl bg-nk-blue text-white text-sm font-medium hover:bg-blue-600 transition"
        >
          Download tokens.json
        </a>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Color tokens</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Colors are defined with a Nexkor-specific prefix in Tailwind and mirrored in{" "}
          <code className="font-mono">tokens.json</code>:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`"colors": {
  "nk-blue": "#1A73E8",
  "nk-charcoal": "#111827",
  "nk-green": "#10B981",
  "nk-yellow": "#FACC15",
  "nk-gray": "#E5E7EB",
  "nk-bg": "#F9FAFB",
  "nk-bgDark": "#0B1220"
}`}
        </pre>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Typography tokens</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Typography tokens describe the mapping between semantic roles and actual font families:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`"fonts": {
  "heading": "Poppins (var(--font-heading))",
  "body": "Inter (var(--font-body))"
}`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Components do not hardcode font names; they reference{" "}
          <code className="font-mono">font-heading</code> and{" "}
          <code className="font-mono">font-body</code> to stay aligned with these tokens.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-heading">Using tokens in other projects</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          You can import <code className="font-mono">tokens.json</code> into other tools (e.g.
          Figma plugins, design token pipelines, or other frontends) to keep Nexkor&apos;s visual
          identity consistent across all platforms.
        </p>
      </section>
    </DocsPageClient>
  );
}
