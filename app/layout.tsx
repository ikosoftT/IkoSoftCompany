import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ikosoft — Web Development & Cybersecurity",
  description:
    "ikosoft builds secure, modern web products. Founded by Yassine IKoubazene — 42 Software Engineer, ethical hacker, and founder of ikosoft.",
  keywords: [
    "ikosoft",
    "Yassine IKoubazene",
    "42 school",
    "Web Development",
    "Cybersecurity",
    "Ethical Hacking",
    "Software Engineering",
  ],
  authors: [{ name: "Yassine IKoubazene", url: "https://github.com/ikosoftT" }],
  creator: "Yassine IKoubazene",
  openGraph: {
    title: "ikosoft — Web Development & Cybersecurity",
    description:
      "Secure, modern web products. Founded by Yassine IKoubazene — 42 Software Engineer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ikosoft — Web Development & Cybersecurity",
    description: "Secure, modern web products.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-[#05050a] text-[#e6e8f2]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
