"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { motion } from "framer-motion";

import { fade, fadeUp, slideLeft, slideRight, scaleIn, stagger } from "@/lib/motion";

const meta: Meta = {
  title: "Design System/Motion/Presets",
};
export default meta;

type Story = StoryObj;

export const Fade: Story = {
  render: () => (
    <motion.div
      className="p-6 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
      variants={fade}
      initial="hidden"
      animate="show"
    >
      Fade animation
    </motion.div>
  ),
};

export const FadeUp: Story = {
  render: () => (
    <motion.div
      className="p-6 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      Fade up animation
    </motion.div>
  ),
};

export const SlideLeft: Story = {
  render: () => (
    <motion.div
      className="p-6 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
      variants={slideLeft}
      initial="hidden"
      animate="show"
    >
      Slide left animation
    </motion.div>
  ),
};

export const SlideRight: Story = {
  render: () => (
    <motion.div
      className="p-6 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
      variants={slideRight}
      initial="hidden"
      animate="show"
    >
      Slide right animation
    </motion.div>
  ),
};

export const Scale: Story = {
  render: () => (
    <motion.div
      className="p-6 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
      variants={scaleIn}
      initial="hidden"
      animate="show"
    >
      Scale animation
    </motion.div>
  ),
};

export const Stagger: Story = {
  render: () => (
    <motion.div variants={stagger(0.30)} initial="hidden" animate="show" className="flex gap-4">
      {["One", "Two", "Three"].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="p-4 border rounded-xl bg-gray-100 dark:bg-nk-charcoal"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  ),
};
