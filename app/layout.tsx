import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Get Your First Remote Startup Job — Cohort 1 | Pratik Sagvekar",
  description:
    "Learn the exact startup hiring system that helped me land a Business Development Internship at a US-based startup. Live cohort. Only 20–25 seats. ₹199 Early Bird.",
  keywords: [
    "remote job",
    "startup job",
    "business development internship",
    "wellfound",
    "YC companies",
    "remote work india",
    "startup hiring",
    "cohort",
    "Pratik Sagvekar",
  ],
  authors: [{ name: "Pratik Sagvekar" }],
  creator: "Pratik Sagvekar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Get Your First Remote Startup Job — Cohort 1",
    description:
      "Live 1-hour cohort. Learn the startup hiring system that landed me a US BD internship. Only 20–25 seats. ₹199 Early Bird.",
    siteName: "Remote Job Cohort by Pratik Sagvekar",
    images: [
      {
        url: "/speaker.png",
        width: 1200,
        height: 630,
        alt: "Pratik Sagvekar — Remote Startup Job Cohort 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your First Remote Startup Job — Cohort 1",
    description:
      "Live 1-hour cohort. Learn the startup hiring system that landed me a US BD internship. Only 20–25 seats. ₹199 Early Bird.",
    images: ["/speaker.png"],
    creator: "@pratik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black font-sans antialiased overscroll-none">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
