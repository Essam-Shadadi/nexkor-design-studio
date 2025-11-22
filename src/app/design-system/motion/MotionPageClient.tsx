"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import {
  fade,
  fadeUp,
  slideLeft,
  slideRight,
  scaleIn,
  stagger,
} from "@/lib/motion";
import { useLanguage } from "@/components/lang/LanguageProvider";

function Section({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
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
  const { t } = useLanguage();

  return (
    <Container className="py-10 space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-heading">
          {t("motion.page.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          {t("motion.page.subtitle")}
        </p>
      </header>

      {/* Fade */}
      <Section title={t("motion.fade.title")}>
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fade}
          initial="hidden"
          animate="show"
        >
          {t("motion.fade.body")}
        </motion.div>
      </Section>

      {/* Fade Up */}
      <Section title={t("motion.fadeUp.title")}>
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {t("motion.fadeUp.body")}
        </motion.div>
      </Section>

      {/* Slide Left */}
      <Section title={t("motion.slideLeft.title")}>
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={slideLeft}
          initial="hidden"
          animate="show"
        >
          {t("motion.slideLeft.body")}
        </motion.div>
      </Section>

      {/* Slide Right */}
      <Section title={t("motion.slideRight.title")}>
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          {t("motion.slideRight.body")}
        </motion.div>
      </Section>

      {/* Scale In */}
      <Section title={t("motion.scaleIn.title")}>
        <motion.div
          className="p-6 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70"
          variants={scaleIn}
          initial="hidden"
          animate="show"
        >
          {t("motion.scaleIn.body")}
        </motion.div>
      </Section>

      {/* Stagger */}
      <Section title={t("motion.stagger.title")}>
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="flex gap-4"
        >
          {[
            "motion.stagger.item1",
            "motion.stagger.item2",
            "motion.stagger.item3",
          ].map((key) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70 text-sm"
            >
              {t(key)}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Container>
  );
}
