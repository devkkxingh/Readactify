import { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us - Readactify",
  description:
    "Get in touch with Readactify for support, partnerships, or general inquiries about our AI-powered PDF platform.",
};

export default function ContactPage() {
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

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for support, partnerships, or general
            inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to help you secure your documents and transform
                your workflow. Reach out to us through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Send us an email and we&apos;ll get back to you within 24
                      hours.
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <strong>General:</strong> hello@readactify.com
                      </p>
                      <p className="text-sm">
                        <strong>Support:</strong> support@readactify.com
                      </p>
                      <p className="text-sm">
                        <strong>Sales:</strong> sales@readactify.com
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Speak directly with our team during business hours.
                    </p>
                    <p className="text-sm">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri, 9AM-6PM PST
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Come visit our headquarters in the heart of Tech Valley.
                    </p>
                    <address className="text-sm not-italic">
                      Readactify Inc.
                      <br />
                      123 Innovation Drive
                      <br />
                      Tech Valley, CA 94000
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Enterprise Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for enterprise solutions? Our team can help you with
                custom implementations, volume pricing, and dedicated support.
              </p>
              <Button variant="outline" size="sm">
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Can&apos;t find what you&apos;re looking for? Check out our FAQ or
            send us a message.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                When will Readactify be available?
              </h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re currently in development and planning to launch in
                early 2024. Join our waitlist to get early access and updates.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                What file formats do you support?
              </h3>
              <p className="text-sm text-muted-foreground">
                Currently, we focus on PDF documents with plans to expand to
                other document formats based on user demand.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Is my data secure?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely. We use AES-256 encryption and enterprise-grade
                security measures to protect your documents and data.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Do you offer custom solutions?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes! We work with enterprise clients to provide custom
                implementations and integrations. Contact our sales team to
                learn more.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
