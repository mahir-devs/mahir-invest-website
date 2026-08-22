import type { Metadata } from "next";
import { Inter, Geist_Mono, Syne } from "next/font/google";
import { Navbar } from "@/components/common/navbar";
import { BookDemoDialog } from "@/components/common/book-demo-dialog";

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
  title: "MAHIR Invest: Stocks, MF & ETF",
  description: "MAHIR Investment Advisers - Personalized Wealth & Investment Guidance",
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* <div className="fixed top-0 left-0 w-full h-40 bg-[var(--blue-normal)] z-0" ></div> */}
      <main className="flex-1">{children}</main>
      <BookDemoDialog />
    </>
  );
}
