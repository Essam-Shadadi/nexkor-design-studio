import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Design System – Components",
};

export default function ComponentsPage() {
  return (
    <Container className="py-10 space-y-10">
      <h1 className="text-4xl font-heading mb-4">Component Gallery</h1>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Card</h2>
        <Grid>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardContent>
              This is card content. Perfect for dashboards or lists.
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              Card with only content. Clean for small UI blocks.
            </CardContent>
          </Card>
        </Grid>
      </section>

      {/* Layout */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Layout Helpers</h2>
        <div className="space-y-3">
          <div className="rounded-xl border p-4">
            <strong className="font-heading">Container:</strong> Wraps content with consistent width.
          </div>

          <div className="rounded-xl border p-4">
            <strong className="font-heading">Grid:</strong> Responsive grid helper (2 → 3 → 4 cols).
          </div>
        </div>
      </section>
    </Container>
  );
}
