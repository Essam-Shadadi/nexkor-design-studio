import DocsPageClient from "../DocsPageClient";

export const metadata = {
  title: "Components — Nexkor Design System",
};

export default function ComponentsDocsPage() {
  return (
    <DocsPageClient>
      <h2 className="text-2xl font-heading mb-4">Components</h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Nexkor Design Studio provides reusable, accessible components that can be used across
        all demos: buttons, badges, forms, layout primitives, overlays, feedback elements, and
        more. This page describes how to use them conceptually. Explore{" "}
        <code className="font-mono">/design-system/components</code> for a live gallery.
      </p>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Buttons</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          The <code className="font-mono">Button</code> component supports multiple variants and
          sizes, plus a loading state:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><strong>primary</strong> — main calls to action</li>
          <li><strong>secondary</strong> — secondary actions or less prominent CTAs</li>
          <li><strong>ghost</strong> — minimal buttons in toolbars or subtle actions</li>
          <li><strong>destructive</strong> — destructive actions like delete/remove</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Use the <code className="font-mono">loading</code> prop when an action is in progress to
          show a spinner and disable the button.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Badges</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <code className="font-mono">Badge</code> is used to display small status labels or
          metadata. Variants map to semantic meaning:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><strong>blue</strong> — informational</li>
          <li><strong>green</strong> — success</li>
          <li><strong>yellow</strong> — warnings</li>
          <li><strong>outline</strong> — neutral status</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Forms</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Forms are built using <code className="font-mono">Input</code>,{" "}
          <code className="font-mono">Textarea</code>, and{" "}
          <code className="font-mono">Select</code> components, each supporting:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><code className="font-mono">label</code> prop for accessible labeling</li>
          <li><code className="font-mono">hint</code> for helper text</li>
          <li><code className="font-mono">error</code> for validation errors</li>
          <li>
            Proper <code className="font-mono">aria-invalid</code> and{" "}
            <code className="font-mono">aria-describedby</code> wiring
          </li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          See <code className="font-mono">/design-system/forms</code> for full form examples.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Layout primitives</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Layout components provide structure:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><code className="font-mono">Card</code> with header/content/footer slots</li>
          <li><code className="font-mono">Container</code> for max-width and page padding</li>
          <li><code className="font-mono">Grid</code> helper for responsive grids</li>
          <li>Navbar & Footer components for consistent shell layout</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-lg font-heading">Overlays & feedback</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Nexkor includes a small but powerful set of interactive components:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>
            <strong>Modal</strong> — accessible dialog with focus trap, ESC close, and click-out
          </li>
          <li>
            <strong>Drawer</strong> — side panel for settings, filters, or navigation
          </li>
          <li>
            <strong>Tooltip</strong> — hover tooltip for icons and subtle explanations
          </li>
          <li>
            <strong>Toast</strong> — global notification system via{" "}
            <code className="font-mono">ToastProvider</code>
          </li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Each overlay is built with accessibility in mind and leverages the shared motion system
          for consistent transitions.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-heading">Showcase pages</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          To see the components in real contexts, explore:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><code className="font-mono">/showcase/landing</code> — marketing landing</li>
          <li><code className="font-mono">/showcase/dashboard</code> — operations dashboard</li>
          <li><code className="font-mono">/showcase/auth</code> — login + MFA flow</li>
        </ul>
      </section>
    </DocsPageClient>
  );
}
