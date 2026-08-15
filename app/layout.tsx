import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Syne } from "next/font/google";
import { Toaster } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MAHIR Invest",
  description: "MAHIR Investment Advisers - Personalized Wealth & Investment Guidance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${syne.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-100">
        <Toaster>
          <main className="flex-1">{children}</main>
        </Toaster>
      </body>
    </html>
  );
}
