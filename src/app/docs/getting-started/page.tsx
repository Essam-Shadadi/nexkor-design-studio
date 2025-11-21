import DocsPageClient from "../DocsPageClient";

export const metadata = {
  title: "Getting Started — Nexkor Design System",
};

export default function GettingStartedPage() {
  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">Getting Started</h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        This guide explains how the Nexkor Design Studio project is structured and how to work
        with it locally. The design system is built with Next.js, TypeScript, TailwindCSS, and
        Framer Motion, and is intended as the visual foundation for all Nexkor demos.
      </p>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Tech stack</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>Next.js App Router (TypeScript)</li>
          <li>TailwindCSS for styling & design tokens</li>
          <li>Framer Motion for animation & transitions</li>
          <li>Storybook for isolated UI development</li>
          <li>ESLint, Prettier, Husky, lint-staged, GitHub Actions for quality & CI</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Project structure (high level)</h3>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4 overflow-auto">
{`src/
  app/
    page.tsx                 // Home (can point to showcase/landing)
    design-system/
      colors/                // Color tokens showcase
      typography/            // Typography scale showcase
      components/            // Component gallery (buttons, cards, overlays, motion)
      forms/                 // Form patterns
      motion/                // Motion presets demos
    showcase/
      landing/               // Marketing-style landing page
      dashboard/             // Dashboard demo
      auth/                  // Auth & MFA demo
    docs/
      DocsPageClient.tsx     // Shared docs layout (sidebar + content)
      getting-started/
      foundations/
      components/
      tokens/
  components/
    ui/                      // Reusable design system components
    motion/                  // Motion providers & page transitions
  lib/
    motion.ts                // Shared motion presets`}
        </pre>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Running the project</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Install dependencies and run the development server:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4">
{`npm install
npm run dev`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Then open <code className="font-mono">http://localhost:3000</code> in your browser.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Storybook</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Storybook is used to preview and develop components in isolation:
        </p>
        <pre className="text-xs bg-gray-900 text-gray-100 rounded-xl p-4">
{`npm run storybook`}
        </pre>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This opens a dedicated UI where you can browse design tokens, buttons, forms, overlays,
          and showcase pages without navigating through the main app.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-heading">Next steps</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Once the project is running, explore:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><code className="font-mono">/design-system/colors</code> for color tokens</li>
          <li><code className="font-mono">/design-system/typography</code> for typography</li>
          <li><code className="font-mono">/design-system/components</code> for UI primitives</li>
          <li><code className="font-mono">/showcase/landing</code> for the landing page demo</li>
          <li><code className="font-mono">/showcase/dashboard</code> for the dashboard demo</li>
          <li><code className="font-mono">/showcase/auth</code> for the auth/MFA flow</li>
        </ul>
      </section>
    </DocsPageClient>
  );
}
