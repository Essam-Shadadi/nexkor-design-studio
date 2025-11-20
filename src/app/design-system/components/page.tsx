import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";

export const metadata = {
  title: "Design System – Components",
};

export default function ComponentsPage() {
  return (
    <Container className="py-10 space-y-14">
      <h1 className="text-4xl font-heading mb-4">Components</h1>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button loading>Loading...</Button>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Badges</h2>
        <div className="flex gap-3 flex-wrap">
          <Badge>Gray</Badge>
          <Badge variant="blue">Blue</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Card</h2>
        <Grid>
          <Card>
            <CardHeader>Card Header</CardHeader>
            <CardContent>
              Cards provide a flexible, composable container for content.
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              Minimal card — content only.
            </CardContent>
          </Card>
        </Grid>
      </section>

      {/* Layout Helpers */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Layout Helpers</h2>

        <Card>
          <CardContent className="space-y-3">
            <p><strong>Container:</strong> Centers content with consistent max width and padding.</p>
            <p><strong>Grid:</strong> Responsive grid helper (2–3–4 columns).</p>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
