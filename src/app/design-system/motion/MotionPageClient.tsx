"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { fade, fadeUp, slideLeft, slideRight, scaleIn, stagger } from "@/lib/motion";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-heading">{title}</h2>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
}

export default function MotionPageClient() {
  return (
    <Container className="py-10 space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-heading">Motion System</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Reusable animation presets that ensure consistent micro-interactions across all Nexkor
          products. Motion respects user preferences like reduced motion.
        </p>
      </header>

      {/* Fade */}
      <Section title="Fade">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fade}
          initial="hidden"
          animate="show"
        >
          Simple opacity transition used for subtle reveals.
        </motion.div>
      </Section>

      {/* Fade Up */}
      <Section title="Fade Up">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Fade with upward motion, ideal for cards and list items.
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
          Horizontal slide-in, useful for side panels and inline transitions.
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
          Mirrored slide direction for layout symmetry.
        </motion.div>
      </Section>

      {/* Scale In */}
      <Section title="Scale In">
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          Subtle zoom-in, ideal for hero elements or emphasis.
        </motion.div>
      </Section>

      {/* Stagger */}
      <Section title="Stagger">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="flex gap-4"
        >
          {["One", "Two", "Three"].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70 text-sm"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Container>
  );
}
