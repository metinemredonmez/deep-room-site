import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Room AI - Human + AI | Social Simulation | Space & Frontier",
  description:
    "Deep Room connects Human + AI, Social Simulation, and Space & Frontier Technologies into one visionary platform.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Deep Room",
    "Space Technology",
    "Social Simulation",
    "Emotional AI",
  ],
  openGraph: {
    title: "Deep Room AI - Human + AI | Social Simulation | Space & Frontier",
    description:
      "Explore the future with Deep Room: Emotional AI, Social Simulation, and Space Technologies.",
    url: "https://deeproomai.com",
    siteName: "Deep Room AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-dark text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
