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

type Step = "login" | "mfa" | "success";

export default function AuthPageClient() {
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
        setMfaError("Invalid code. Try 123456 for the demo.");
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
            <Badge variant="blue">Auth showcase</Badge>
            <h1 className="text-3xl font-heading">Secure access with Nexkor</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This page demonstrates a basic email/password login followed by a multi-factor
              authentication step using Nexkor Design Studio components.
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
                    <p className="text-sm font-heading">Sign in to your workspace</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Use any email and password to continue to the MFA step.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleLoginSubmit}>
                      <Input
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="you@nexkor.dev"
                        required
                      />
                      <Input
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="••••••••"
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
                          Remember this device
                        </label>
                        <button
                          type="button"
                          className="text-nk-blue hover:underline"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Button type="submit" className="w-full" loading={loading}>
                        Continue
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                    <span>Demo only – no real authentication.</span>
                    <Link href="/showcase/dashboard" className="text-nk-blue hover:underline">
                      View dashboard
                    </Link>
                  </CardFooter>
                </Card>
              </section>
            )}

            {step === "mfa" && (
              <section aria-label="Multi-factor authentication">
                <Card>
                  <CardHeader>
                    <p className="text-sm font-heading">Multi-factor authentication</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      We’ve sent a 6-digit code to your email. For the demo, use{" "}
                      <span className="font-mono">123456</span>.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleMfaSubmit}>
                      <Input
                        id="mfa-code"
                        name="mfa-code"
                        label="Verification code"
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        error={mfaError || undefined}
                      />
                      <Button type="submit" className="w-full" loading={loading}>
                        Verify & continue
                      </Button>
                      <button
                        type="button"
                        className="text-xs text-nk-blue hover:underline"
                        onClick={() =>
                          setMfaError("New demo code requested. Use 123456 again.")
                        }
                      >
                        Resend code
                      </button>
                    </form>
                  </CardContent>
                  <CardFooter className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                    <button
                      type="button"
                      className="hover:underline"
                      onClick={() => setStep("login")}
                    >
                      Back to login
                    </button>
                    <span>Secure Access · Demo flow</span>
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
                      You’re in.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                      Authentication complete. In a real Nexkor product, this would redirect you into a
                      dashboard, portal, or admin experience.
                    </p>
                    <p>
                      For the showcase, you can continue to the dashboard demo or explore more design
                      system pages.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-3 justify-between">
                    <Link href="/showcase/dashboard">
                      <Button size="sm">Open dashboard demo</Button>
                    </Link>
                    <Link href="/design-system/components">
                      <Button size="sm" variant="ghost">
                        Explore components
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
