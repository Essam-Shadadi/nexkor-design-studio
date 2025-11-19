import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  args: {
    children: "Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Gray: Story = {};
export const Blue: Story = { args: { variant: "blue" } };
export const Green: Story = { args: { variant: "green" } };
export const Yellow: Story = { args: { variant: "yellow" } };
export const Outline: Story = { args: { variant: "outline" } };
