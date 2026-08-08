import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ChallengeProvider } from "@/context/ChallengeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABTalks — 60 Days of Code Challenge",
  description: "A 60-day coding challenge for Indian college students. Build projects, publish proof of work, and turn consistency into portfolio power.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF8F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FAF8F5] text-stone-900 font-sans selection:bg-indigo-500 selection:text-white">
        <ChallengeProvider>{children}</ChallengeProvider>
      </body>
    </html>
  );
}
