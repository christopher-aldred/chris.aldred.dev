import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chris Aldred",
  description: "A developer portfolio site",
};

const viewport: Viewport = {
  width: "device-width",
  minimumScale: 1,
  initialScale: 1,
  viewportFit: "cover",
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
