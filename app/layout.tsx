import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chris Aldred",
  description: "A developer portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
