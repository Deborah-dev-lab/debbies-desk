import type { Metadata } from "next";
import {
  Manrope,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

/* =========================================================
   FONTS
========================================================= */

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default: "Deborah Kaburu | Designer & Developer",
    template: "%s | Deborah Kaburu",
  },

  description:
    "Portfolio of Deborah Kaburu, a product designer and software developer based in Nairobi, Kenya. Exploring digital products, UX/UI design, web development, visual storytelling and emerging technology.",

  keywords: [
    "Deborah Kaburu",
    "Product Designer",
    "Software Developer",
    "Frontend Developer",
    "UX/UI Designer",
    "Creative Developer",
    "Web Development",
    "Nairobi",
    "Kenya",
    "Portfolio",
  ],

  authors: [
    {
      name: "Deborah Kaburu",
    },
  ],

  creator: "Deborah Kaburu",

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
