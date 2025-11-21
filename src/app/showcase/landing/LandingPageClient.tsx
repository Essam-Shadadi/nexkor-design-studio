"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, stagger } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function LandingPageClient() {
  return (
    <div className="min-h-screen bg-nk-bg dark:bg-nk-bgDark">
      {/* HERO */}
      <section className="pt-24 pb-16 border-b border-gray-100 dark:border-gray-800">
        <Container className="text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/logo.png"
              alt="Nexkor Logo"
              width={200}
              height={200}
              className="w-60 h-auto mx-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-nk-charcoal dark:text-white"
          >
            Design that defines Nexkor.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A modern, human-centered design system powering every Nexkor experience — crafted for
            clarity, accessibility, and performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link href="/design-system/components">
              <Button size="lg">Explore Components</Button>
            </Link>

            <Link href="/design-system/motion">
              <Button variant="ghost" size="lg">
                View Motion System
              </Button>
            </Link>
          </motion.div>

          {/* Meta line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-4"
          >
            <span>Next.js · TypeScript · TailwindCSS · Framer Motion</span>
            <span className="hidden md:inline">•</span>
            <span>Design-led frontend for Nexkor demos</span>
          </motion.div>
        </Container>
      </section>

      {/* FEATURE GRID */}
      <section className="py-20">
        <Container>
          <div className="mb-10 text-center space-y-2">
            <h2 className="text-3xl font-heading">Built for a complete demo ecosystem</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Nexkor Design Studio is the visual foundation for HR Portal, Cloud Monitor, Secure
              Access, Smart Assistant, and more.
            </p>
          </div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                className="p-6 rounded-2xl border bg-white dark:bg-nk-charcoal/60 shadow-sm"
              >
                <Badge variant="blue" className="mb-3">
                  {feat.tag}
                </Badge>
                <h3 className="font-heading text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feat.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* PREVIEW SECTION */}
      <section className="py-16 bg-gray-50 dark:bg-black/20 border-y border-gray-100 dark:border-gray-800">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr,minmax(0,1fr)] items-center">
          {/* Mock preview card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Nexkor UI Preview
                  </p>
                  <h3 className="font-heading text-lg">Dashboard Shell</h3>
                </div>
                <Badge variant="green">Live demo</Badge>
              </CardHeader>
              <CardContent className="grid md:grid-cols-[0.9fr,1.1fr] gap-4 pt-4">
                <div className="space-y-3">
                  <div className="h-8 rounded-lg bg-nk-blue/10 dark:bg-nk-blue/20" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-1 h-16 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                    <div className="flex-1 h-16 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                  </div>
                  <div className="h-32 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                <span>Powered by Nexkor Design Studio</span>
                <span>Responsive · Accessible · Fast</span>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Text beside preview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-heading">
              One visual language. Many Nexkor experiences.
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              The same components, tokens, and motion patterns power landing pages, dashboards, auth
              flows, and internal tools across the entire Nexkor demo ecosystem.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Shared color & typography tokens</li>
              <li>• Reusable layout and overlay primitives</li>
              <li>• Motion presets for subtle, consistent animation</li>
            </ul>
            <div className="pt-2">
              <Link href="/design-system/forms">
                <Button variant="secondary">See form patterns</Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <Container className="text-center space-y-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-heading"
          >
            Ready to use Nexkor Design Studio in every demo?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
          >
            Start from the design system pages, copy patterns into new products, and keep Nexkor’s
            visual identity consistent across your entire portfolio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/design-system/colors">
              <Button size="lg">View design tokens</Button>
            </Link>
            <Link href="/docs">
              <Button variant="ghost" size="lg">
                Open documentation
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

const FEATURES = [
  {
    tag: "Design System",
    title: "Unified visual language",
    body: "Colors, typography, spacing, and components that stay consistent across every Nexkor demo.",
  },
  {
    tag: "Motion",
    title: "Thoughtful micro-interactions",
    body: "Framer Motion presets for fades, slides, scales, and staggered reveals — all respecting reduced motion.",
  },
  {
    tag: "Engineering",
    title: "Production-grade frontend",
    body: "Next.js, TypeScript, Tailwind, and CI/CD pipelines ensure the demo is as solid as real product code.",
  },
];
