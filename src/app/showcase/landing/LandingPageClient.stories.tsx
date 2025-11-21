"use client";

import type { Meta, StoryObj } from "@storybook/react";
import LandingPageClient from "./LandingPageClient";

const meta: Meta<typeof LandingPageClient> = {
  title: "Showcase/Landing",
  component: LandingPageClient,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingPageClient>;

export const Default: Story = {
  render: () => <LandingPageClient />,
};
