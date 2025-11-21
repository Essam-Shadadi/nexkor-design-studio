"use client";

import type { Meta, StoryObj } from "@storybook/react";
import DashboardPageClient from "./DashboardPageClient";

const meta: Meta<typeof DashboardPageClient> = {
  title: "Showcase/Dashboard",
  component: DashboardPageClient,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DashboardPageClient>;

export const Default: Story = {
  render: () => <DashboardPageClient />,
};
