import TypeScale from "../../../components/ds/TypeScale";

export const metadata = {
  title: "Design System – Typography",
};

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-2">Typography</h1>
      <p className="text-gray-600 mb-8">
        Nexkor uses <span className="font-heading text-nk-blue">Poppins</span> for headings and{" "}
        <span className="font-body">Inter</span> for body text via <code>next/font</code>.
      </p>

      <section className="space-y-8">
        <article>
          <h2 className="text-2xl font-heading mb-3">Type Scale</h2>
          <TypeScale />
        </article>

        <article>
          <h2 className="text-2xl font-heading mb-3">Weights & Styles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border p-5">
              <h3 className="font-heading text-xl mb-2">Headings – Poppins</h3>
              <p className="font-heading text-4xl">Heading 1</p>
              <p className="font-heading text-2xl">Heading 2</p>
              <p className="font-heading text-xl">Heading 3</p>
            </div>
            <div className="rounded-2xl border p-5">
              <h3 className="text-xl mb-2">Body – Inter</h3>
              <p className="font-body">
                Body text—16px base size with comfortable line-height for dashboards and docs.
              </p>
              <p className="font-body text-sm text-gray-600 mt-2">
                Caption text for subtle annotations and UI hints.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
