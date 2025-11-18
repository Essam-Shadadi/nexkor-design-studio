import type { Meta, StoryObj } from "@storybook/react";
import ColorSwatch from "./ColorSwatch";

const meta: Meta<typeof ColorSwatch> = {
  title: "Design System/Colors/ColorSwatch",
  component: ColorSwatch,
  args: {
    name: "Nexkor Blue",
    hex: "#1A73E8",
    on: "light",
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

export const Primary: Story = {};

export const OnDark: Story = {
  args: {
    name: "Deep Charcoal",
    hex: "#111827",
    on: "dark",
  },
};

export const AccentGreen: Story = {
  args: {
    name: "Accent Green",
    hex: "#10B981",
    on: "light",
  },
};
