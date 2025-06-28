"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

import {
  Shield,
  FileText,
  Menu,
  X,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Logo } from "./Logo";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Waitlist", href: "#waitlist" },
];

const demoSteps = [
  {
    icon: FileText,
    label: "Original PDF",
    status: "complete",
    color: "text-blue-500",
  },
  {
    icon: Eye,
    label: "AI Analysis",
    status: "processing",
    color: "text-yellow-500",
  },
  {
    icon: Lock,
    label: "Smart Redaction",
    status: "pending",
    color: "text-gray-400",
  },
  {
    icon: Shield,
    label: "Encryption",
    status: "pending",
    color: "text-gray-400",
  },
];

// Document content that changes during demo
const getDocumentContent = (step: number) => {
  const baseContent = [
    {
      sensitive: false,
      original: "Employee Performance Review",
      redacted: "Employee Performance Review",
    },
    { sensitive: true, original: "John Smith", redacted: "████████████" },
    { sensitive: true, original: "123-45-6789", redacted: "███████████" },
    {
      sensitive: false,
      original: "Performance: Excellent",
      redacted: "Performance: Excellent",
    },
    {
      sensitive: true,
      original: "$85,000 annually",
      redacted: "███████████████",
    },
    {
      sensitive: false,
      original: "Manager: Sarah Johnson",
      redacted: "Manager: Sarah Johnson",
    },
    { sensitive: true, original: "(555) 123-4567", redacted: "██████████████" },
    {
      sensitive: false,
      original: "Review Period: Q1 2024",
      redacted: "Review Period: Q1 2024",
    },
  ];

  return baseContent.map((item) => ({
    ...item,
    showRedacted: step >= 2 && item.sensitive, // Start showing redacted at step 2 (Smart Redaction)
    isHighlighted: step === 1 && item.sensitive, // Highlight sensitive fields during AI Analysis
    isEncrypted: step >= 3 && item.sensitive, // Show as encrypted at final step
  }));
};

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { form, onSubmit, isSubmitting, result, clearResult } =
    useWaitlistForm("hero");

  const handleDemoStart = () => {
    setCurrentStep(0);
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const documentContent = getDocumentContent(currentStep);

  return (
    <div className="relative isolate bg-white">
      {/* Navigation */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#waitlist">
            <Button size="sm">Join Waitlist</Button>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <div className="relative">
                        <Shield className="h-6 w-6 text-white" />
                        <div className="absolute inset-0 flex items-center justify-center"></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-foreground">
                    Readactify
                  </span>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#waitlist"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              🚀 Now in Development - Join the Waitlist
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <span className="block">Secure PDF</span>
            <span className="block mb-4 px-6 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white rounded-lg inline-block">
              Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto"
          >
            AI-powered redaction, encryption, and smart summarization for
            enterprise documents. Protect sensitive data with military-grade
            security and intelligent processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            {/* Free Offer Banner */}
            <div className="mb-8 mx-auto max-w-lg p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-200 rounded-xl text-center shadow-sm">
              <p className="text-sm font-semibold text-blue-800">
                🎉 <span className="font-bold">Limited Time Offer:</span> Get 6
                months free when we launch!
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Join our waitlist to secure this exclusive early access offer
              </p>
            </div>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto max-w-lg"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...form.register("email")}
                  className="min-w-0 flex-auto h-12 text-base "
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 px-8"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              {form.formState.errors.email && (
                <p className="mt-2 text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
              {result && (
                <div
                  className={`mt-3 p-3 rounded-md ${
                    result.success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  <p className="text-sm">
                    {result.message}
                    {result.success && result.position && (
                      <span className="block mt-1 font-medium">
                        You&apos;re #{result.position} on the waitlist!
                      </span>
                    )}
                  </p>
                  {result.success && (
                    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-blue-800">
                      <p className="text-xs font-medium">
                        🎉 Free Offer: Get 6 months free when we launch!
                      </p>
                    </div>
                  )}
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Join 1,000+ security professionals. No spam, unsubscribe anytime.
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <Shield className="h-3 w-3 text-white" />
              </div>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <Lock className="h-3 w-3 text-white" />
              </div>
              <span>AES-256 Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Eye className="h-3 w-3 text-white" />
              </div>
              <span>99.9% Accuracy</span>
            </div>
          </motion.div>

          {/* Interactive Demo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 flow-root sm:mt-28"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-background to-muted/50 p-8 ring-1 ring-border backdrop-blur-sm shadow-2xl">
              {/* Processing Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    AI Processing Pipeline
                  </h3>
                  <Button
                    onClick={handleDemoStart}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 hover:from-primary/20 hover:to-blue-500/20"
                  >
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Run Demo</span>
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {demoSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index <= currentStep;
                    const isProcessing = index === currentStep;

                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0.5 }}
                        animate={{
                          opacity: isActive ? 1 : 0.5,
                          scale: isProcessing ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col items-center p-4 rounded-lg border ${
                          isActive
                            ? "bg-background border-primary/20"
                            : "bg-muted/30"
                        }`}
                      >
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${
                            isActive
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-center">
                          {step.label}
                        </span>
                        {isProcessing && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="mt-1"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Document Preview with Progressive Changes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg bg-background p-6 shadow-sm ring-1 ring-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">
                      Original Document
                    </span>
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <span className="text-xs text-destructive">
                        Sensitive Data
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {documentContent.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`h-3 rounded transition-all duration-500 ${
                          item.isHighlighted
                            ? "bg-yellow-200 border-2 border-yellow-400"
                            : item.sensitive
                            ? "bg-destructive/20"
                            : "bg-muted"
                        }`}
                        style={{
                          width:
                            index === 0
                              ? "100%"
                              : index % 2 === 0
                              ? "80%"
                              : "60%",
                        }}
                        animate={
                          item.isHighlighted
                            ? {
                                scale: [1, 1.02, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(234, 179, 8, 0.7)",
                                  "0 0 0 10px rgba(234, 179, 8, 0)",
                                  "0 0 0 0 rgba(234, 179, 8, 0)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.6,
                          repeat: item.isHighlighted ? Infinity : 0,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-background p-6 shadow-sm ring-1 ring-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">
                      Secured Document
                    </span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-500">Protected</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {documentContent.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`h-3 rounded transition-all duration-500 ${
                          item.showRedacted && item.sensitive
                            ? item.isEncrypted
                              ? "bg-green-300 border border-green-400"
                              : "bg-primary/20"
                            : "bg-muted"
                        }`}
                        style={{
                          width:
                            index === 0
                              ? "100%"
                              : index % 2 === 0
                              ? "80%"
                              : "60%",
                        }}
                        animate={
                          item.showRedacted && item.sensitive
                            ? {
                                opacity: [0.5, 1, 0.5],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1,
                          repeat:
                            item.showRedacted && !item.isEncrypted
                              ? Infinity
                              : 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {currentStep === 0 && "Ready to process document"}
                    {currentStep === 1 &&
                      "Analyzing document for sensitive data..."}
                    {currentStep === 2 && "Redacting sensitive information..."}
                    {currentStep === 3 && "Applying AES-256 encryption..."}
                  </span>
                  {currentStep === 3 && (
                    <span className="block mt-1">
                      <span className="font-medium text-foreground">
                        4 sensitive fields
                      </span>{" "}
                      detected and secured in{" "}
                      <span className="font-medium text-foreground">
                        0.3 seconds
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
