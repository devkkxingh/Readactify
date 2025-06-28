"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import { Shield, FileText, CheckCircle } from "lucide-react";

export function FooterCTA() {
  const { form, onSubmit, isSubmitting, result, clearResult } =
    useWaitlistForm("footer_cta");

  return (
    <section
      id="waitlist"
      className="py-24 sm:py-32 bg-gradient-to-r from-primary/5 via-background to-primary/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Shield className="h-16 w-16 text-primary" />
              <FileText className="absolute -top-2 -right-2 h-8 w-8 text-primary/60" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Ready to Transform Your Document Security?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            Join thousands of security professionals who trust Readactify to
            protect their most sensitive documents. Get early access and
            exclusive updates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            {result && result.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center space-y-3"
              >
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-medium">
                    Successfully added to waitlist!
                  </span>
                </div>
                {result.position && (
                  <p className="text-sm text-muted-foreground">
                    You&apos;re #{result.position} on the waitlist!
                  </p>
                )}
                <button
                  onClick={clearResult}
                  className="text-sm text-primary hover:underline"
                >
                  Join another email
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-md"
              >
                {/* Free Offer Banner */}
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg text-center">
                  <p className="text-sm font-medium text-blue-800">
                    🎉 <span className="font-bold">Limited Time:</span> Get 6
                    months free when we launch!
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Join our waitlist to secure this exclusive offer
                  </p>
                </div>

                <div className="flex gap-x-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...form.register("email")}
                    className="min-w-0 flex-auto text-base h-12"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                {form.formState.errors.email && (
                  <p className="mt-2 text-sm text-destructive text-center">
                    {form.formState.errors.email.message}
                  </p>
                )}
                {result && !result.success && (
                  <div className="mt-3 p-3 rounded-md bg-red-50 text-red-800 text-center">
                    <p className="text-sm">{result.message}</p>
                    <button
                      type="button"
                      onClick={clearResult}
                      className="mt-2 text-xs underline opacity-70 hover:opacity-100"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </form>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-muted-foreground"
            >
              We&apos;ll never spam you or share your email. Unsubscribe
              anytime.
            </motion.p>
          </motion.div>

          {/* Trust indicators */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>ISO 27001</span>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-6 w-6 text-primary" />
              <FileText className="absolute -top-1 -right-1 h-3 w-3 text-primary/60" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Readactify
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-8 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 Readactify. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
