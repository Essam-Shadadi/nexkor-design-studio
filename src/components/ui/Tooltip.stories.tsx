"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <div className="flex justify-center py-10">
      <Tooltip label="This action saves your changes">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex justify-center py-10">
      <Tooltip label="Notifications">
        <button className="rounded-full h-9 w-9 flex items-center justify-center border hover:bg-gray-50 dark:hover:bg-white/10">
          🔔
        </button>
      </Tooltip>
    </div>
  ),
};
