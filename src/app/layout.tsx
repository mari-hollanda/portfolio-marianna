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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen">
        <div
          className="fixed inset-0 -z-50 bg-linear-to-br from-pink-300/70 via-white/0 to-purple-200/70 w-full h-full"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Marianna Pedroso",
  description: "Fullstack Developer",

  icons: {
    icon: "favicon.png",
  },
};
