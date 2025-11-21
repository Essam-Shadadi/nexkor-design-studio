"use client";

import type { Meta, StoryObj } from "@storybook/react";
import AuthPageClient from "./AuthPageClient";

const meta: Meta<typeof AuthPageClient> = {
  title: "Showcase/Auth",
  component: AuthPageClient,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AuthPageClient>;

export const Default: Story = {
  render: () => <AuthPageClient />,
};
