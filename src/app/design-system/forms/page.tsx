import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Design System – Forms",
};

export default function FormsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      <header>
        <h1 className="text-4xl font-heading mb-2">Forms</h1>
        <p className="text-gray-600">
          Accessible form controls with labels, hints, and error messaging.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-heading">Example form</h2>
        <form
  className="space-y-4 bg-white dark:bg-nk-charcoal/60 rounded-2xl border p-6"
>
          <Input
            id="demo-name"
            label="Full name"
            placeholder="Nexkor User"
            hint="Use your real name."
          />

          <Input
            id="demo-email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />

          <Select
            id="demo-role"
            label="Role"
            defaultValue=""
            hint="What best describes your role?"
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="frontend">Frontend Engineer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="designer">Product Designer</option>
          </Select>

          <Textarea
            id="demo-message"
            label="Message"
            placeholder="Tell us a bit about your project…"
          />

          <div className="pt-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
