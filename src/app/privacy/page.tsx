import { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Readactify",
  description:
    "Privacy policy for Readactify's AI-powered secure PDF intelligence platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
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
            <span className="text-xl font-bold">Readactify</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-lg text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-7">
              Readactify respects your privacy and is committed to protecting
              your personal data. This privacy policy explains how we collect,
              use, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-7 mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Email address for waitlist and communications</li>
              <li>Name and company information if provided</li>
              <li>IP address and browser information</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Contact Us</h2>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong> privacy@readactify.com
                <br />
                <strong>Address:</strong> Readactify Inc., 123 Innovation Drive,
                Tech Valley, CA 94000
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
