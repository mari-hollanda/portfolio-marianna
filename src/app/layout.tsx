import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Marianna Pedroso",
  description: "Fullstack Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen">
        {/* BACKGROUND GRADIENT GLOBAL */}
        <div
          className="fixed inset-0 -z-50 bg-linear-to-br from-pink-300/70 via-white/0 to-purple-200/70"
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
