import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/app/_components/providers";
import { Navigation } from "@/app/_components/navigation";

export const metadata: Metadata = {
  title: {
    default: "SPLT Wheels - Premium Custom Wheels & Rims",
    template: "%s | SPLT Wheels",
  },
  description:
    "Discover our premium collection of custom wheels and rims. High-quality, stylish designs for all vehicles. Free shipping on orders over $500.",
  keywords: [
    "custom wheels",
    "rims",
    "alloy wheels",
    "car wheels",
    "truck wheels",
    "SUV wheels",
    "premium wheels",
  ],
  authors: [{ name: "SPLT Wheels" }],
  creator: "SPLT Wheels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://splt-wheels.com",
    title: "SPLT Wheels - Premium Custom Wheels & Rims",
    description:
      "Discover our premium collection of custom wheels and rims. High-quality, stylish designs for all vehicles.",
    siteName: "SPLT Wheels",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPLT Wheels - Premium Custom Wheels & Rims",
    description:
      "Discover our premium collection of custom wheels and rims. High-quality, stylish designs for all vehicles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-gray-900 text-white">
        <Providers>
          <TRPCReactProvider>
            <Navigation />
            {children}
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
