"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Eye, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    name: "In-place Encryption",
    description:
      "Military-grade encryption that secures your documents without breaking your workflow. Edit, read, and share with confidence.",
    icon: Shield,
    color: "bg-blue-500",
  },
  {
    name: "AI Summarization",
    description:
      "Advanced AI automatically extracts key insights and creates intelligent summaries of your documents in seconds.",
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    name: "Smart Redaction with Context",
    description:
      "Context-aware AI identifies and redacts sensitive information while preserving document meaning and structure.",
    icon: Eye,
    color: "bg-orange-500",
  },
  {
    name: "Secure Collaboration",
    description:
      "Share redacted documents safely with granular permission controls and audit trails for enterprise compliance.",
    icon: Users,
    color: "bg-green-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Enterprise-Grade PDF Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            Advanced AI meets bulletproof security. Protect sensitive data while
            maintaining productivity and collaboration.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} shadow-lg`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl font-semibold">
                          {feature.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-7">
                        {feature.description}
                      </CardDescription>
                    </CardContent>

                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              );
            })}
          </dl>
        </div>

        {/* Additional stats or proof points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-2xl bg-muted/50 px-6 py-12 sm:px-12 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Trusted by Security Teams Worldwide
              </h3>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">
                    Accuracy Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">256-bit</div>
                  <div className="text-sm text-muted-foreground">
                    Encryption
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
