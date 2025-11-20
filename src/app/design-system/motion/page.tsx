"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { fade, fadeUp, slideLeft, slideRight, scaleIn, stagger } from "@/lib/motion";

export const metadata = {
  title: "Design System – Motion",
};

export default function MotionPage() {
  return (
    <Container className="py-10 space-y-14">
      <h1 className="text-4xl font-heading mb-4">Motion System</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Reusable animation presets that ensure consistent micro-interactions across all Nexkor products.
      </p>

      {/* Fade */}
      <Section title="Fade">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fade}
          initial="hidden"
          animate="show"
        >
          Fade animation
        </motion.div>
      </Section>

      {/* FadeUp */}
      <Section title="Fade Up">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Fade up animation
        </motion.div>
      </Section>

      {/* Slide Left */}
      <Section title="Slide Left">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={slideLeft}
          initial="hidden"
          animate="show"
        >
          Slide left animation
        </motion.div>
      </Section>

      {/* Slide Right */}
      <Section title="Slide Right">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          Slide right animation
        </motion.div>
      </Section>

      {/* Scale */}
      <Section title="Scale In">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          Scale animation
        </motion.div>
      </Section>

      {/* Stagger */}
      <Section title="Stagger">
        <motion.div variants={stagger(0.15)} initial="hidden" animate="show" className="flex gap-4">
          {["One", "Two", "Three"].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-4 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Container>
  );
}

function Section({ title, children }: any) {
  return (
    <section>
      <h2 className="text-2xl font-heading mb-3">{title}</h2>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
}
