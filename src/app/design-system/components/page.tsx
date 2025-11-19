import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-heading mb-4">Components</h1>

      <section className="mb-10">
        <h2 className="font-heading text-2xl mb-3">Buttons</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button loading>Loading…</Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl mb-3">Badges</h2>
        <div className="flex gap-3 flex-wrap">
          <Badge>Gray</Badge>
          <Badge variant="blue">Blue</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>
    </div>
  );
}
