export const metadata = {
  title: "Docs – Getting Started",
};

export default function DocsGettingStartedPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-3">Getting Started</h1>
      <p className="text-gray-600 mb-6">
        This guide explains how to run, develop, and extend the Nexkor Design Studio.
      </p>

      <section className="space-y-4 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-heading mb-2">Local Development</h2>
          <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
            <code>
{`git clone <repo-url>
cd nexkor-design-studio
npm install
npm run dev`}
            </code>
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-heading mb-2">Storybook (Component Library)</h2>
          <p className="mb-2">
            Use Storybook to explore and develop UI components in isolation:
          </p>
          <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 text-xs overflow-x-auto">
            <code>
{`npm run storybook`}
            </code>
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-heading mb-2">Design Tokens</h2>
          <p>
            Color and typography tokens are defined in <code>tailwind.config.js</code> and
            visualized on:
          </p>
          <ul className="list-disc list-inside mt-1">
            <li><code>/design-system/colors</code></li>
            <li><code>/design-system/typography</code></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
