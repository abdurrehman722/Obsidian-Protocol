import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OBSIDIAN PROTOCOL — High-End Digital Project Development",
  description:
    "We engineer secure, high-performance digital systems. Creative engineering, AI automation, adversarial security, and industrial-scale architecture.",
  keywords: [
    "Obsidian Protocol",
    "Digital Agency",
    "Full Stack Architecture",
    "Cyber Security",
    "AI Automation",
    "Creative Engineering",
  ],
  authors: [{ name: "Obsidian Protocol" }],
  openGraph: {
    title: "OBSIDIAN PROTOCOL",
    description: "High-End Digital Project Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
