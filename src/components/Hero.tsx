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

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
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
    <div className="relative isolate">
      {/* Navigation */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Readactify</span>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <FileText className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-foreground">
                Readactify
              </span>
            </div>
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
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
                    <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <FileText className="h-2.5 w-2.5 text-white" />
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
                  <Button variant="outline" className="w-full">
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            Readactify: The Future of{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Secure PDF Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
          >
            AI-powered redaction, encryption, and smart summarization — right
            where you read. Secure sensitive data with enterprise-grade
            protection and intelligent document processing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
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
                  placeholder="Enter your email"
                  {...form.register("email")}
                  className="min-w-0 flex-auto"
                />
                <Button type="submit" size="lg" disabled={isSubmitting}>
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
          </motion.div>

          {/* Interactive Demo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flow-root sm:mt-24"
          >
            <div className="relative rounded-xl bg-muted/30 p-8 ring-1 ring-border backdrop-blur-sm">
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
                    className="flex items-center space-x-2"
                  >
                    <Zap className="h-4 w-4" />
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
