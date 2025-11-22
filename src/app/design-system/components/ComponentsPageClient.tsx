"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";

import { Modal } from "@/components/ui/Modal";
import { Drawer } from "@/components/ui/Drawer";
import { Tooltip } from "@/components/ui/Tooltip";
import { ToastProvider, useToast } from "@/components/ui/Toast";

import { motion } from "framer-motion";
import { fade, fadeUp, slideLeft, scaleIn, stagger } from "@/lib/motion";
import { useLanguage } from "@/components/lang/LanguageProvider";

function ComponentGalleryInner() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { push } = useToast();
  const { t } = useLanguage();

  return (
    <Container className="py-10 space-y-14">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-heading mb-4">
        {t("components.gallery.title")}
      </h1>

      {/* BUTTONS */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.buttons.title")}
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">
            {t("components.gallery.buttons.primary")}
          </Button>
          <Button variant="secondary">
            {t("components.gallery.buttons.secondary")}
          </Button>
          <Button variant="ghost">
            {t("components.gallery.buttons.ghost")}
          </Button>
          <Button variant="destructive">
            {t("components.gallery.buttons.destructive")}
          </Button>
          <Button loading>
            {t("components.gallery.buttons.loading")}
          </Button>
        </div>
      </section>

      {/* BADGES */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.badges.title")}
        </h2>
        <div className="flex gap-3 flex-wrap">
          <Badge>{t("components.gallery.badges.gray")}</Badge>
          <Badge variant="blue">
            {t("components.gallery.badges.blue")}
          </Badge>
          <Badge variant="green">
            {t("components.gallery.badges.green")}
          </Badge>
          <Badge variant="yellow">
            {t("components.gallery.badges.yellow")}
          </Badge>
          <Badge variant="outline">
            {t("components.gallery.badges.outline")}
          </Badge>
        </div>
      </section>

      {/* CARDS */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.cards.title")}
        </h2>
        <Grid>
          <Card>
            <CardHeader>
              {t("components.gallery.cards.card1.header")}
            </CardHeader>
            <CardContent>
              {t("components.gallery.cards.card1.body")}
            </CardContent>
            <CardFooter>
              <Button size="sm">
                {t("components.gallery.cards.card1.action")}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              {t("components.gallery.cards.card2.body")}
            </CardContent>
          </Card>
        </Grid>
      </section>

      {/* LAYOUT HELPERS */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.layout.title")}
        </h2>
        <Card>
          <CardContent className="space-y-3">
            <p>
              <strong>
                {t("components.gallery.layout.container.label")}
              </strong>{" "}
              {t("components.gallery.layout.container.body")}
            </p>
            <p>
              <strong>
                {t("components.gallery.layout.grid.label")}
              </strong>{" "}
              {t("components.gallery.layout.grid.body")}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* OVERLAYS & FEEDBACK */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.overlays.title")}
        </h2>

        <div className="flex flex-wrap gap-6">
          {/* MODAL */}
          <div>
            <Button onClick={() => setModalOpen(true)}>
              {t("components.gallery.overlays.modal.open")}
            </Button>
            <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
              <h2 className="text-xl font-heading mb-2">
                {t("components.gallery.overlays.modal.title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {t("components.gallery.overlays.modal.body")}
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setModalOpen(false)}
                >
                  {t("components.gallery.overlays.modal.cancel")}
                </Button>
                <Button onClick={() => setModalOpen(false)}>
                  {t("components.gallery.overlays.modal.confirm")}
                </Button>
              </div>
            </Modal>
          </div>

          {/* DRAWER */}
          <div>
            <Button onClick={() => setDrawerOpen(true)}>
              {t("components.gallery.overlays.drawer.open")}
            </Button>
            <Drawer
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
              side="right"
            >
              <h2 className="text-lg font-heading mb-2">
                {t("components.gallery.overlays.drawer.title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {t("components.gallery.overlays.drawer.body")}
              </p>
              <Button
                variant="secondary"
                onClick={() => setDrawerOpen(false)}
              >
                {t("components.gallery.overlays.drawer.close")}
              </Button>
            </Drawer>
          </div>

          {/* TOOLTIP */}
          <div className="flex items-center">
            <Tooltip label={t("components.gallery.overlays.tooltip.label")}>
              <Button variant="ghost">
                {t("components.gallery.overlays.tooltip.button")}
              </Button>
            </Tooltip>
          </div>

          {/* TOAST */}
          <div>
            <Button
              onClick={() =>
                push(t("components.gallery.overlays.toast.message"), "success")
              }
            >
              {t("components.gallery.overlays.toast.button")}
            </Button>
          </div>
        </div>
      </section>

      {/* MOTION */}
      <section>
        <h2 className="text-2xl font-heading mb-3">
          {t("components.gallery.motion.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("components.gallery.motion.intro")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fade */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="p-6 rounded-xl border bg-gray-50 dark:bg-nk-charcoal/60 shadow-sm"
          >
            <h3 className="font-heading text-lg mb-2">
              {t("components.gallery.motion.fade.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("components.gallery.motion.fade.body")}
            </p>
          </motion.div>

          {/* Fade Up */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="p-6 rounded-xl border bg-gray-50 dark:bg-nk-charcoal/60 shadow-sm"
          >
            <h3 className="font-heading text-lg mb-2">
              {t("components.gallery.motion.fadeUp.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("components.gallery.motion.fadeUp.body")}
            </p>
          </motion.div>

          {/* Slide Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="show"
            className="p-6 rounded-xl border bg-gray-50 dark:bg-nk-charcoal/60 shadow-sm"
          >
            <h3 className="font-heading text-lg mb-2">
              {t("components.gallery.motion.slideLeft.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("components.gallery.motion.slideLeft.body")}
            </p>
          </motion.div>

          {/* Scale In */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="show"
            className="p-6 rounded-xl border bg-gray-50 dark:bg-nk-charcoal/60 shadow-sm"
          >
            <h3 className="font-heading text-lg mb-2">
              {t("components.gallery.motion.scaleIn.title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("components.gallery.motion.scaleIn.body")}
            </p>
          </motion.div>

          {/* Stagger */}
          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            animate="show"
            className="p-6 rounded-xl border bg-gray-50 dark:bg-nk-charcoal/60 shadow-sm"
          >
            <h3 className="font-heading text-lg mb-4">
              {t("components.gallery.motion.stagger.title")}
            </h3>
            <div className="flex gap-3">
              {[
                "components.gallery.motion.stagger.item1",
                "components.gallery.motion.stagger.item2",
                "components.gallery.motion.stagger.item3",
              ].map((key) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="px-3 py-2 rounded-lg bg-white dark:bg-nk-charcoal border text-sm"
                >
                  {t(key)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}

export default function ComponentsPageClient() {
  return (
    <ToastProvider>
      <ComponentGalleryInner />
    </ToastProvider>
  );
}
