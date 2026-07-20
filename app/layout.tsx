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
  metadataBase: new URL("https://pslabworkshops.vercel.app"),
  title: "Land Your First Remote Startup Job | 1:1 Career Strategy Session",
  description:
    "Book a personalized 1:1 remote startup career strategy session. Resume review, LinkedIn optimization, startup hiring strategy, founder outreach, AI workflow, and a personalized action plan.",
  keywords: [
    "remote job",
    "startup job",
    "business development internship",
    "wellfound",
    "YC companies",
    "remote work india",
    "startup hiring",
    "career strategy",
    "Pratik Sagvekar",
  ],
  authors: [{ name: "Pratik Sagvekar" }],
  creator: "Pratik Sagvekar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pslabworkshops.vercel.app",
    title: "Land Your First Remote Startup Job | 1:1 Career Strategy Session",
    description:
      "Book a personalized 1:1 remote startup career strategy session. Resume review, LinkedIn optimization, startup hiring strategy, founder outreach, AI workflow, and a personalized action plan.",
    siteName: "1:1 Career Strategy Session by Pratik Sagvekar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratik Sagvekar — 1:1 Career Strategy Session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land Your First Remote Startup Job | 1:1 Career Strategy Session",
    description:
      "Book a personalized 1:1 remote startup career strategy session. Resume review, LinkedIn optimization, startup hiring strategy, founder outreach, AI workflow, and a personalized action plan.",
    images: ["/og-image.jpg"],
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
