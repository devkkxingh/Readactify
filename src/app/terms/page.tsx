import { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions - Readactify",
  description:
    "Terms and conditions for using Readactify's AI-powered secure PDF intelligence platform.",
  alternates: {
    canonical: "https://readactify.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center">
                <FileText className="h-2 w-2 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">
              Readactify
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Terms and Conditions
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-7">
                By accessing and using Readactify (&quot;Service&quot;), you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Service Description
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                Readactify is an AI-powered secure PDF intelligence platform
                that provides:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Smart redaction of sensitive information in PDF documents
                </li>
                <li>In-place encryption with AES-256 security</li>
                <li>AI-powered document summarization</li>
                <li>Secure collaboration tools for teams</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Waitlist and Early Access
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                By joining our waitlist, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Receive updates about Readactify&apos;s development and launch
                </li>
                <li>Potential early access to beta features</li>
                <li>Special offers and pricing for early adopters</li>
                <li>Our right to contact you regarding the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Data Security and Privacy
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                We take data security seriously:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  All documents are processed with enterprise-grade security
                </li>
                <li>We use AES-256 encryption for data protection</li>
                <li>
                  Your data is never shared with third parties without consent
                </li>
                <li>
                  We comply with GDPR and other applicable privacy regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-7">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Readactify and its licensors. The Service is protected by
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-7 mb-4">
                You agree to use the Service only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-7">
                In no event shall Readactify, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Termination
              </h2>
              <p className="text-muted-foreground leading-7">
                We may terminate or suspend your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-7">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Contact Information
              </h2>
              <p className="text-muted-foreground leading-7">
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> legal@readactify.com
                  <br />
                  <strong>Address:</strong> Readactify Inc., 123 Innovation
                  Drive, Tech Valley, CA 94000
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
