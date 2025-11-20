"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "./Button";

const meta: Meta<typeof Drawer> = {
  title: "Overlays/Drawer",
  component: Drawer,
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const RightSide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open right drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="right">
          <h2 className="text-lg font-heading mb-2">Settings</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Use drawers for side panels, filters, or secondary navigation.
          </p>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Drawer>
      </>
    );
  },
};

export const LeftSide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open left drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <h2 className="text-lg font-heading mb-2">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Settings</li>
          </ul>
        </Drawer>
      </>
    );
  },
};
