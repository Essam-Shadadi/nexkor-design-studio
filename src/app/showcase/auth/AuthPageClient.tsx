"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/components/lang/LanguageProvider";

type Step = "login" | "mfa" | "success";

export default function AuthPageClient() {
  const { t } = useLanguage();

  const [step, setStep] = useState<Step>("login");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [mfaError, setMfaError] = useState<string | null>(null);

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Mock: first step always "succeeds" and moves to MFA
      setStep("mfa");
    }, 900);
  };

  const handleMfaSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMfaError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Mock validation: "123456" accepted, anything else shows error
      const form = e.target as HTMLFormElement;
      const code = (form.elements.namedItem("mfa-code") as HTMLInputElement)?.value;
      if (code === "123456") {
        setStep("success");
      } else {
        setMfaError(t("auth.mfa.error.invalidCode"));
      }
    }, 900);
  };

  return (
    <div className="min-h-screen bg-nk-bg dark:bg-nk-bgDark flex items-center">
      <Container className="py-16">
        <div className="max-w-md mx-auto space-y-8">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-center space-y-3"
          >
            <Badge variant="blue">{t("auth.badge")}</Badge>
            <h1 className="text-3xl font-heading">
              {t("auth.title")}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("auth.subtitle")}
            </p>
          </motion.div>

          <motion.div
            key={step}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4"
          >
            {step === "login" && (
              <section aria-label="Login form">
                <Card>
                  <CardHeader>
                    <p className="text-sm font-heading">
                      {t("auth.login.title")}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t("auth.login.subtitle")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleLoginSubmit}>
                      <Input
                        id="email"
                        label={t("auth.login.emailLabel")}
                        type="email"
                        placeholder={t("auth.login.emailPlaceholder")}
                        required
                      />
                      <Input
                        id="password"
                        label={t("auth.login.passwordLabel")}
                        type="password"
                        placeholder={t("auth.login.passwordPlaceholder")}
                        required
                      />
                      {loginError && (
                        <p className="text-xs text-red-600" role="alert">
                          {loginError}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs">
                        <label className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <input type="checkbox" className="rounded border-gray-300" />
                          {t("auth.login.rememberDevice")}
                        </label>
                        <button
                          type="button"
                          className="text-nk-blue hover:underline"
                        >
                          {t("auth.login.forgotPassword")}
                        </button>
                      </div>
                      <Button type="submit" className="w-full" loading={loading}>
                        {t("auth.login.button")}
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                    <span>{t("auth.login.demoNotice")}</span>
                    <Link href="/showcase/dashboard" className="text-nk-blue hover:underline">
                      {t("auth.login.viewDashboard")}
                    </Link>
                  </CardFooter>
                </Card>
              </section>
            )}

            {step === "mfa" && (
              <section aria-label="Multi-factor authentication">
                <Card>
                  <CardHeader>
                    <p className="text-sm font-heading">
                      {t("auth.mfa.title")}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t("auth.mfa.subtitle")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleMfaSubmit}>
                      <Input
                        id="mfa-code"
                        name="mfa-code"
                        label={t("auth.mfa.codeLabel")}
                        placeholder={t("auth.mfa.codePlaceholder")}
                        maxLength={6}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        error={mfaError || undefined}
                      />
                      <Button type="submit" className="w-full" loading={loading}>
                        {t("auth.mfa.button")}
                      </Button>
                      <button
                        type="button"
                        className="text-xs text-nk-blue hover:underline"
                        onClick={() =>
                          setMfaError(t("auth.mfa.error.resendMessage"))
                        }
                      >
                        {t("auth.mfa.resend")}
                      </button>
                    </form>
                  </CardContent>
                  <CardFooter className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                    <button
                      type="button"
                      className="hover:underline"
                      onClick={() => setStep("login")}
                    >
                      {t("auth.mfa.backToLogin")}
                    </button>
                    <span>{t("auth.mfa.footer")}</span>
                  </CardFooter>
                </Card>
              </section>
            )}

            {step === "success" && (
              <section aria-label="Success">
                <Card>
                  <CardHeader>
                    <p className="text-sm font-heading flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-nk-green text-white text-xs">
                        ✓
                      </span>
                      {t("auth.success.title")}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <p>{t("auth.success.body1")}</p>
                    <p>{t("auth.success.body2")}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-3 justify-between">
                    <Link href="/showcase/dashboard">
                      <Button size="sm">
                        {t("auth.success.openDashboard")}
                      </Button>
                    </Link>
                    <Link href="/design-system/components">
                      <Button size="sm" variant="ghost">
                        {t("auth.success.exploreComponents")}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </section>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
