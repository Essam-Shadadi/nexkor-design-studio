"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "./Button";

const meta: Meta = {
  title: "Feedback/Toast",
};
export default meta;

type Story = StoryObj;

function ToastDemo() {
  const { push } = useToast();

  return (
    <div className="space-y-4">
      <Button onClick={() => push("Saved successfully.", "success")}>
        Show success toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => push("Something went wrong.", "error")}
      >
        Show error toast
      </Button>
      <Button variant="ghost" onClick={() => push("This is an info message.", "info")}>
        Show info toast
      </Button>
    </div>
  );
}

export const Basic: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
