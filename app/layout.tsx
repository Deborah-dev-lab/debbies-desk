
import type { Metadata } from "next";
import {
  Manrope,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

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

export const metadata = {
  title: "Debbie's Desk | Deborah Kaburu",
  description:
    "The creative portfolio of Deborah Kaburu — software developer and product designer. Explore projects, design, development and experience.",
  icons: {
  icon: "/debbies-desk/icon.svg",
  shortcut: "/debbies-desk/icon.svg",
},
};

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
