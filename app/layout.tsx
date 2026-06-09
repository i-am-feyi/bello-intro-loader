import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/providers/smooth-scroll";
import { cn } from "@/lib/utils";

const druk = localFont({
  src: [
    {
      path: "../fonts/Druk_Cond_Bold.woff",
      style: "normal",
    },
  ],
  variable: "--font-druk",
});

const frama = localFont({
  src: [
    {
      path: "../fonts/PPFrama-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPFrama-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-frama",
});

export const metadata: Metadata = {
  title: "Filippo Bello",
  description: "Recreating Filippo Bello's intro animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(druk.variable, frama.variable, "h-full antialiased")}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
