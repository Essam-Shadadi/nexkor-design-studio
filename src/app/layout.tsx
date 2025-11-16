import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";

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
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
