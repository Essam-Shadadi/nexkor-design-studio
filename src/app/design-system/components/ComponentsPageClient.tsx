"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";

import { Modal } from "@/components/ui/Modal";
import { Drawer } from "@/components/ui/Drawer";
import { Tooltip } from "@/components/ui/Tooltip";
import { ToastProvider, useToast } from "@/components/ui/Toast";

function ComponentGalleryInner() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { push } = useToast();

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
        <h2 className="text-2xl font-heading mb-3">Cards</h2>
        <Grid>
          <Card>
            <CardHeader>Card Header</CardHeader>
            <CardContent>
              Cards are composable containers used for display and structure.
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>Minimal card — content only.</CardContent>
          </Card>
        </Grid>
      </section>

      {/* Layout Helpers */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Layout Helpers</h2>
        <Card>
          <CardContent className="space-y-3">
            <p>
              <strong>Container:</strong> Centers content with consistent max width and padding.
            </p>
            <p>
              <strong>Grid:</strong> Responsive grid helper (2–3–4 columns).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Overlays */}
      <section>
        <h2 className="text-2xl font-heading mb-3">Overlays & Feedback</h2>

        <div className="flex flex-wrap gap-6">
          {/* MODAL */}
          <div>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
              <h2 className="text-xl font-heading mb-2">Nexkor Modal</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                A fully accessible modal with focus trap and ESC close.
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </div>
            </Modal>
          </div>

          {/* DRAWER */}
          <div>
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} side="right">
              <h2 className="text-lg font-heading mb-2">Drawer Panel</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Use drawers for settings, filters or secondary navigation.
              </p>
              <Button variant="secondary" onClick={() => setDrawerOpen(false)}>
                Close Drawer
              </Button>
            </Drawer>
          </div>

          {/* TOOLTIP */}
          <div className="flex items-center">
            <Tooltip label="This is a tooltip">
              <Button variant="ghost">Hover Me</Button>
            </Tooltip>
          </div>

          {/* TOAST */}
          <div>
            <Button onClick={() => push("This is a Nexkor toast!", "success")}>
              Show Toast
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default function ComponentsPageClient() {
  return (
    <ToastProvider>
      <ComponentGalleryInner />
    </ToastProvider>
  );
}
