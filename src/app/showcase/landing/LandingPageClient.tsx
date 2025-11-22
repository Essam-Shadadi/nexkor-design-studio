"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, stagger } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function LandingPageClient() {
  const { t } = useLanguage();

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
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-nk-primary/20 blur-3xl" />
              <Image
                src="/logo.png"
                alt="Nexkor Logo"
                width={200}
                height={200}
                className="w-60 h-auto mx-auto drop-shadow-lg relative"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-nk-charcoal dark:text-white"
          >
            {t("landing.hero.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t("landing.hero.subtitle")}
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
              <Button size="lg">{t("landing.hero.primaryCta")}</Button>
            </Link>

            <Link href="/design-system/motion">
              <Button variant="ghost" size="lg">
                {t("landing.hero.secondaryCta")}
              </Button>
            </Link>

            <Link href="/showcase/dashboard">
              <Button variant="secondary" size="lg">
                {t("landing.hero.dashboardCta")}
              </Button>
            </Link>

            <Link href="/showcase/auth">
              <Button variant="secondary" size="lg">
                {t("landing.hero.authCta")}
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
            <span>{t("landing.hero.meta.tech")}</span>
            <span className="hidden md:inline">•</span>
            <span>{t("landing.hero.meta.tagline")}</span>
          </motion.div>
        </Container>
      </section>

      {/* FEATURE GRID */}
      <section className="py-20">
        <Container>
          <div className="mb-10 text-center space-y-2">
            <h2 className="text-3xl font-heading">
              {t("landing.features.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              {t("landing.features.subtitle")}
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
                  {t(feat.tag)}
                </Badge>
                <h3 className="font-heading text-lg mb-2">
                  {t(feat.title)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t(feat.body)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* PREVIEW SECTION */}
      <section className="py-16 bg-gray-50 dark:bg-black/20 border-y border-gray-100 dark:border-gray-800">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr,minmax(0,1fr)] items-center">
          {/* Card preview */}
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
                    {t("landing.preview.badge")}
                  </p>
                  <h3 className="font-heading text-lg">
                    {t("landing.preview.title")}
                  </h3>
                </div>
                <Badge variant="green">{t("landing.preview.live")}</Badge>
              </CardHeader>

              <CardContent className="grid md:grid-cols-[0.9fr,1.1fr] gap-4 pt-4">
                {/* Left Mock */}
                <div className="space-y-3">
                  <div className="h-8 rounded-lg bg-nk-primary/10 dark:bg-nk-primary/20" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                  <div className="h-8 rounded-lg bg-gray-100 dark:bg-nk-charcoal/70" />
                </div>

                {/* Right Mock */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-1 h-16 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                    <div className="flex-1 h-16 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                  </div>
                  <div className="h-32 rounded-xl bg-gray-100 dark:bg-nk-charcoal/70" />
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                <span>{t("landing.preview.footerLeft")}</span>
                <span>{t("landing.preview.footerRight")}</span>
                <Link href="/showcase/dashboard">
                  <Button size="sm" variant="ghost">
                    {t("landing.preview.openDashboard")}
                  </Button>
                </Link>
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
              {t("landing.preview.sideTitle")}
            </h2>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {t("landing.preview.sideBody")}
            </p>

            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>• {t("landing.preview.point1")}</li>
              <li>• {t("landing.preview.point2")}</li>
              <li>• {t("landing.preview.point3")}</li>
            </ul>

            <div className="pt-2">
              <Link href="/design-system/forms">
                <Button variant="secondary">
                  {t("landing.preview.formsCta")}
                </Button>
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
            {t("landing.cta.title")}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
          >
            {t("landing.cta.subtitle")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/design-system/colors">
              <Button size="lg">{t("landing.cta.tokens")}</Button>
            </Link>

            <Link href="/docs">
              <Button variant="ghost" size="lg">
                {t("landing.cta.docs")}
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

//
// Feature definitions in translation keys
//
const FEATURES = [
  {
    tag: "landing.features.tag1",
    title: "landing.features.item1.title",
    body: "landing.features.item1.body",
  },
  {
    tag: "landing.features.tag2",
    title: "landing.features.item2.title",
    body: "landing.features.item2.body",
  },
  {
    tag: "landing.features.tag3",
    title: "landing.features.item3.title",
    body: "landing.features.item3.body",
  },
];
