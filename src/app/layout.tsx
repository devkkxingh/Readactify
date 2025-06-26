import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://readactify.com"),
  title: {
    default:
      "Readactify - AI-Powered Secure PDF Intelligence | Smart Redaction & Encryption",
    template: "%s | Readactify",
  },
  description:
    "Transform your PDF workflow with Readactify's AI-powered secure document processing. Features in-place encryption, smart redaction, context-aware summarization, and secure collaboration for enterprises.",
  keywords: [
    "PDF security",
    "document redaction",
    "AI PDF processing",
    "secure document management",
    "PDF encryption",
    "enterprise document security",
    "smart redaction",
    "PDF summarization",
    "document collaboration",
    "AI document intelligence",
    "secure PDF reader",
    "automated redaction",
    "document privacy",
    "GDPR compliance",
    "data protection",
  ],
  authors: [{ name: "Readactify Team" }],
  creator: "Readactify",
  publisher: "Readactify",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://readactify.com",
    siteName: "Readactify",
    title: "Readactify - AI-Powered Secure PDF Intelligence",
    description:
      "Transform your PDF workflow with AI-powered secure document processing. Features smart redaction, encryption, and context-aware summarization.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Readactify - Secure PDF Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Readactify - AI-Powered Secure PDF Intelligence",
    description:
      "Transform your PDF workflow with AI-powered secure document processing. Smart redaction, encryption, and summarization.",
    images: ["/twitter-image.jpg"],
    creator: "@readactify",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://readactify.com",
  },
  category: "technology",
  classification: "Business Software",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Readactify",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Readactify",
              description:
                "AI-powered secure PDF intelligence platform with smart redaction, encryption, and document summarization capabilities",
              url: "https://readactify.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "Readactify",
                url: "https://readactify.com",
              },
              featureList: [
                "AI-powered document redaction",
                "In-place PDF encryption",
                "Smart document summarization",
                "Secure collaboration tools",
                "Enterprise-grade security",
                "Context-aware processing",
              ],
              screenshot: "https://readactify.com/app-screenshot.jpg",
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Readactify" />
        <meta name="application-name" content="Readactify" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
