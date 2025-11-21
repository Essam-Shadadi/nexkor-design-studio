"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";


export default function LandingPageClient() {
  return (
    <div className="min-h-screen bg-nk-bg dark:bg-nk-bgDark pt-20">
      {/* HERO */}
      {/* FEATURE GRID */}
<section className="max-w-6xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
  
  {[
    {
      title: "Design System Core",
      desc: "Unified typography, colors, spacing, and reusable UI primitives built for scalability.",
    },
    {
      title: "Motion Architecture",
      desc: "Framer Motion presets and transitions that bring experiences to life.",
    },
    {
      title: "Responsive Components",
      desc: "Accessible, theme-aware components that adapt to every device and screen size.",
    },
  ].map((feat, i) => (
    <motion.div
      key={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.1 }}
      className="p-6 rounded-2xl border bg-white dark:bg-nk-charcoal/60 shadow-sm"
    >
      <h3 className="font-heading text-xl mb-2">{feat.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feat.desc}</p>
    </motion.div>
  ))}
</section>

      <section className="max-w-5xl mx-auto px-6 text-center space-y-6 py-24">
        
        {/* Animated logo */}
        <motion.img
          src="/logo.png" 
          alt="Nexkor Logo"
          className="w-80 mx-auto drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl font-heading font-bold tracking-tight text-nk-charcoal dark:text-white"
        >
          Design that defines Nexkor.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          A modern, human-centered design system that powers every Nexkor product —
          crafted with precision, accessibility, and performance in mind.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 pt-4"
        >
          <Link
            href="/design-system/components"
            className="px-6 py-3 rounded-xl bg-nk-blue text-white font-medium hover:bg-blue-600 transition"
          >
            Explore Components
          </Link>

          <Link
            href="/design-system/motion"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition"
          >
            View Motion System
          </Link>
        </motion.div>

      </section>
      {/* CTA SECTION */}
<section className="text-center py-32 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-black/30">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    className="text-4xl font-heading mb-4"
  >
    Ready to explore the future of Nexkor?
  </motion.h2>

  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    transition={{ delay: 0.1 }}
    className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8"
  >
    Dive deeper into our design philosophy, learn the patterns, and explore real product demos.
  </motion.p>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    transition={{ delay: 0.2 }}
  >
    <Link
      href="/design-system/components"
      className="px-8 py-4 rounded-xl bg-nk-blue text-white text-lg font-medium hover:bg-blue-600 transition"
    >
      Get Started
    </Link>
  </motion.div>
</section>

    </div>
  );
}
