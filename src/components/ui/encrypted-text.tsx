"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface EncryptedTextProps {
  text: string;
  duration?: number;
  className?: string;
  onComplete?: () => void;
  autoStart?: boolean;
}

export function EncryptedText({
  text,
  duration = 2000,
  className = "",
  onComplete,
  autoStart = false,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const startEncryption = useCallback(() => {
    setDisplayText(text);
    setIsEncrypting(true);
  }, [text]);

  useEffect(() => {
    if (autoStart) {
      startEncryption();
    }
  }, [autoStart, startEncryption]);

  useEffect(() => {
    if (!isEncrypting) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index > text.length - iteration) {
              return letter === " "
                ? " "
                : characters[Math.floor(Math.random() * characters.length)];
            }
            return text[index];
          })
          .join("")
      );

      if (iteration >= text.length) {
        setDisplayText(
          text
            .split("")
            .map((letter) =>
              letter === " "
                ? " "
                : characters[Math.floor(Math.random() * characters.length)]
            )
            .join("")
        );
        clearInterval(interval);
        setIsEncrypting(false);
        onComplete?.();
      }

      iteration += 1 / 3;
    }, duration / (text.length * 3));

    return () => clearInterval(interval);
  }, [text, duration, isEncrypting, onComplete]);

  return (
    <motion.span
      className={`font-mono cursor-pointer ${className}`}
      onClick={startEncryption}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {displayText}
    </motion.span>
  );
}
