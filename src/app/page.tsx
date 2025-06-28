import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FooterCTA, Footer } from "@/components/FooterCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - AI-Powered Secure PDF Intelligence",
  description:
    "Transform your PDF workflow with Readactify's AI-powered secure document processing. Join thousands of enterprises using smart redaction, encryption, and summarization.",
  alternates: {
    canonical: "https://readactify.com",
  },
  openGraph: {
    title: "Readactify - AI-Powered Secure PDF Intelligence",
    description:
      "Transform your PDF workflow with enterprise-grade AI redaction, encryption, and summarization. Join thousands of professionals securing sensitive documents.",
    url: "https://readactify.com",
    siteName: "Readactify",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://readactify.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Readactify - AI-Powered Secure PDF Intelligence Platform",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Readactify - AI-Powered Secure PDF Intelligence",
    description:
      "Transform your PDF workflow with enterprise-grade AI redaction, encryption, and summarization.",
    images: ["https://readactify.com/og-home.jpg"],
    creator: "@readactify",
    site: "@readactify",
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
};

export default function Home() {
  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://readactify.com",
              },
            ],
          }),
        }}
      />

      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Readactify",
            url: "https://readactify.com",
            logo: "https://readactify.com/logo.png",
            description:
              "AI-powered secure PDF intelligence platform providing enterprise-grade document processing solutions",
            foundingDate: "2024",
            sameAs: [
              "https://twitter.com/readactify",
              "https://linkedin.com/company/readactify",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "support@readactify.com",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
          }),
        }}
      />

      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Readactify",
            description:
              "AI-powered secure PDF intelligence platform with smart redaction, encryption, and summarization",
            brand: {
              "@type": "Brand",
              name: "Readactify",
            },
            category: "Software",
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Enterprise",
            },
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Readactify?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Readactify is an AI-powered secure PDF intelligence platform that provides enterprise-grade document processing with smart redaction, in-place encryption, and context-aware summarization capabilities.",
                },
              },
              {
                "@type": "Question",
                name: "How does AI redaction work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our AI uses advanced machine learning algorithms to intelligently identify and redact sensitive information in documents, including names, SSNs, addresses, and other PII with 99.9% accuracy.",
                },
              },
              {
                "@type": "Question",
                name: "Is Readactify secure for enterprise use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Readactify provides enterprise-grade security with AES-256 encryption, secure collaboration features, and compliance with GDPR and other data protection regulations.",
                },
              },
              {
                "@type": "Question",
                name: "What file formats does Readactify support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Readactify primarily focuses on PDF documents, providing comprehensive processing capabilities including redaction, encryption, and AI-powered summarization.",
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen" role="main">
        <Hero />
        <Features />
        <BeforeAfter />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}
