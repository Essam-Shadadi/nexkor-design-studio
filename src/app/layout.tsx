import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import MotionProvider from "@/components/motion/MotionProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/lang/LanguageProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nexkor Design Studio",
  description: "Design that defines Nexkor — where technology meets precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-nk-bg text-nk-charcoal font-body antialiased dark:bg-nk-bgDark dark:text-nk-gray">
        <ThemeProvider>
          <MotionProvider>
            <LanguageProvider>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
            </LanguageProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
