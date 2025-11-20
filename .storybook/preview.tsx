import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import MotionProvider from "../src/components/motion/MotionProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MotionProvider>
        <Story />
      </MotionProvider>
    ),
  ],
};

export default preview;
