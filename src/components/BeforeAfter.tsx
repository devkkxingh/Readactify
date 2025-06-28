"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Lock, Play, RotateCcw, Zap } from "lucide-react";
import { DecryptedText } from "@/components/ui/decrypted-text";
import { EncryptedText } from "@/components/ui/encrypted-text";

const sensitiveFields = [
  { text: "John Smith", redacted: "████████████", type: "name" },
  { text: "123-45-6789", redacted: "███████████", type: "ssn" },
  { text: "$85,000 annually", redacted: "███████████████", type: "salary" },
  { text: "(555) 123-4567", redacted: "██████████████", type: "phone" },
];

const documentContent = [
  { type: "header", text: "EMPLOYEE PERFORMANCE REVIEW", sensitive: false },
  { type: "divider" },
  {
    type: "field",
    label: "Employee Name:",
    value: "John Smith",
    sensitive: true,
    id: 0,
  },
  {
    type: "field",
    label: "Social Security:",
    value: "123-45-6789",
    sensitive: true,
    id: 1,
  },
  {
    type: "field",
    label: "Department:",
    value: "Engineering",
    sensitive: false,
  },
  {
    type: "field",
    label: "Performance Rating:",
    value: "Excellent",
    sensitive: false,
  },
  {
    type: "field",
    label: "Annual Salary:",
    value: "$85,000 annually",
    sensitive: true,
    id: 2,
  },
  {
    type: "field",
    label: "Manager:",
    value: "Sarah Johnson",
    sensitive: false,
  },
  {
    type: "field",
    label: "Contact Phone:",
    value: "(555) 123-4567",
    sensitive: true,
    id: 3,
  },
  {
    type: "field",
    label: "Review Period:",
    value: "Q1 2024",
    sensitive: false,
  },
  {
    type: "field",
    label: "Status:",
    value: "Active Employee",
    sensitive: false,
  },
];

export function BeforeAfter() {
  const [showRedacted, setShowRedacted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentField, setCurrentField] = useState(-1);
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [encryptingField, setEncryptingField] = useState(-1);
  const [encryptedFields, setEncryptedFields] = useState(new Set());

  const handleRedactionDemo = () => {
    setIsAnimating(true);
    setCurrentField(-1);
    setIsEncrypting(false);
    setEncryptingField(-1);
    setEncryptedFields(new Set());
    setShowRedacted(false);

    // Animate through each sensitive field
    sensitiveFields.forEach((_, index) => {
      setTimeout(() => {
        setCurrentField(index);
      }, index * 800);
    });

    // Complete animation
    setTimeout(() => {
      setShowRedacted(true);
      setIsAnimating(false);
      setCurrentField(-1);
    }, sensitiveFields.length * 800 + 500);
  };

  const handleEncryptionDemo = () => {
    setIsEncrypting(true);
    setIsAnimating(false);
    setShowRedacted(false);
    setCurrentField(-1);
    setEncryptingField(-1);
    setEncryptedFields(new Set());

    // Animate through each sensitive field for encryption
    sensitiveFields.forEach((field, index) => {
      setTimeout(() => {
        setEncryptingField(index);
        // Add to encrypted set after animation completes
        setTimeout(() => {
          setEncryptedFields((prev) => new Set([...prev, index]));
          // Only reset encryptingField after the last field is done
          if (index === sensitiveFields.length - 1) {
            setTimeout(() => {
              setEncryptingField(-1);
            }, 100);
          }
        }, 1500); // After animation completes
      }, index * 1000);
    });
  };

  const handleReset = () => {
    setShowRedacted(false);
    setIsAnimating(false);
    setCurrentField(-1);
    setIsEncrypting(false);
    setEncryptingField(-1);
    setEncryptedFields(new Set());
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            See Readactify in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg leading-8 text-muted-foreground"
          >
            Watch our AI intelligently identify and redact sensitive information
            in real-time.
          </motion.p>
        </div>

        {/* Document Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          {/* Browser-like Header */}
          <div className="bg-muted/50 rounded-t-xl border border-b-0 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center space-x-2 min-w-0">
                  <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground truncate">
                    employee-review-confidential.pdf
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
                <Button
                  onClick={handleRedactionDemo}
                  disabled={isAnimating || isEncrypting}
                  size="sm"
                  className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"
                >
                  <Play className="h-3 w-3" />
                  <span className="hidden xs:inline">Auto-Redact</span>
                  <span className="xs:hidden">Redact</span>
                </Button>
                <Button
                  onClick={handleEncryptionDemo}
                  disabled={isAnimating || isEncrypting}
                  size="sm"
                  variant="secondary"
                  className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"
                >
                  <Zap className="h-3 w-3" />
                  <span className="hidden xs:inline">Auto-Encrypt</span>
                  <span className="xs:hidden">Encrypt</span>
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span className="hidden sm:inline">Reset</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="bg-background border rounded-b-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-border">
              {/* Original Document - NEVER changes during encryption */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Original Document
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-red-600">4 Sensitive Fields</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {documentContent.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div
                          key={index}
                          className="text-center border-b pb-4 mb-6"
                        >
                          <h2 className="text-xl font-bold text-foreground">
                            {item.text}
                          </h2>
                        </div>
                      );
                    }

                    if (item.type === "divider") {
                      return <div key={index} className="border-t my-4" />;
                    }

                    if (item.type === "field") {
                      const isSensitive = item.sensitive;
                      const isCurrentlyAnimating =
                        isAnimating && isSensitive && currentField === item.id;

                      return (
                        <motion.div
                          key={index}
                          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg transition-all duration-300 space-y-1 sm:space-y-0 ${
                            isSensitive
                              ? isCurrentlyAnimating
                                ? "bg-red-100 border-2 border-red-300 shadow-md"
                                : "bg-red-50 border border-red-200"
                              : "bg-muted/30"
                          }`}
                          animate={
                            isCurrentlyAnimating ? { scale: [1, 1.02, 1] } : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                            {item.label}
                          </span>
                          <span
                            className={`text-xs sm:text-sm font-mono break-all ${
                              isSensitive ? "text-red-700" : "text-foreground"
                            }`}
                          >
                            {item.value}
                          </span>
                        </motion.div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>

              {/* Secured Document - Shows encrypted results */}
              <div className="p-4 sm:p-6 lg:p-8 bg-muted/20 border-t lg:border-t-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Secured Document
                  </h3>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-green-600">Protected</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {documentContent.map((item, index) => {
                    if (item.type === "header") {
                      return (
                        <div
                          key={index}
                          className="text-center border-b pb-4 mb-6"
                        >
                          <h2 className="text-xl font-bold text-foreground">
                            {item.text}
                          </h2>
                        </div>
                      );
                    }

                    if (item.type === "divider") {
                      return <div key={index} className="border-t my-4" />;
                    }

                    if (item.type === "field") {
                      const isSensitive = item.sensitive;
                      const shouldShowRedacted =
                        showRedacted ||
                        (isAnimating &&
                          currentField >=
                            (typeof item.id === "number" ? item.id : -1));
                      const shouldShowEncrypted = encryptedFields.has(
                        typeof item.id === "number" ? item.id : -1
                      );
                      const isCurrentlyEncrypting =
                        isEncrypting &&
                        isSensitive &&
                        typeof item.id === "number" &&
                        encryptingField === item.id;

                      return (
                        <motion.div
                          key={index}
                          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg transition-all duration-300 space-y-1 sm:space-y-0 ${
                            isSensitive
                              ? shouldShowRedacted
                                ? "bg-green-50 border border-green-200"
                                : shouldShowEncrypted || isCurrentlyEncrypting
                                ? "bg-purple-50 border border-purple-200"
                                : "bg-muted/30"
                              : "bg-muted/30"
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                            {item.label}
                          </span>
                          <span
                            className={`text-xs sm:text-sm font-mono break-all ${
                              isSensitive && shouldShowRedacted
                                ? "text-green-700"
                                : isSensitive &&
                                  (shouldShowEncrypted || isCurrentlyEncrypting)
                                ? "text-purple-700"
                                : "text-foreground"
                            }`}
                          >
                            {isSensitive && shouldShowRedacted ? (
                              <DecryptedText
                                text={
                                  sensitiveFields[item.id!]?.redacted ||
                                  "████████"
                                }
                                className="text-green-700 bg-green-100 px-2 py-1 rounded"
                              />
                            ) : isSensitive && isCurrentlyEncrypting ? (
                              <EncryptedText
                                text={item.value!}
                                className="text-purple-700 bg-purple-100 px-2 py-1 rounded"
                                duration={1500}
                                autoStart={true}
                                onComplete={() => {
                                  // Force re-render by triggering state update
                                  setEncryptedFields(
                                    (prev) => new Set([...prev, item.id!])
                                  );
                                }}
                              />
                            ) : isSensitive && shouldShowEncrypted ? (
                              <span className="text-purple-700 bg-purple-100 px-2 py-1 rounded font-mono">
                                {item
                                  .value!.split("")
                                  .map((char) =>
                                    char === " "
                                      ? " "
                                      : String.fromCharCode(
                                          65 + Math.floor(Math.random() * 26)
                                        )
                                  )
                                  .join("")}
                              </span>
                            ) : (
                              item.value
                            )}
                          </span>
                        </motion.div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-muted/50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-green-600">AES-256 Encrypted</span>
                  </div>
                  <div className="text-muted-foreground">
                    Processing Time:{" "}
                    <span className="font-medium text-foreground">
                      {isEncrypting ? "1.2s" : "0.3s"}
                    </span>
                  </div>
                  <div className="text-muted-foreground hidden sm:block">
                    Accuracy:{" "}
                    <span className="font-medium text-foreground">99.9%</span>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  Mode:{" "}
                  <span className="font-medium text-foreground">
                    {isEncrypting
                      ? "Encryption"
                      : isAnimating
                      ? "Redaction"
                      : "Ready"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                4
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                Fields {isEncrypting ? "Encrypted" : "Redacted"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                100%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                Data Secured
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {isEncrypting ? "1.2s" : "0.3s"}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                Processing Time
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                AI
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                Context Aware
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
