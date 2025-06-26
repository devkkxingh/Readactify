"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface DecryptedTextProps {
  text: string;
  duration?: number;
  className?: string;
  onComplete?: () => void;
}

export function DecryptedText({
  text,
  duration = 2000,
  className = "",
  onComplete,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    if (!isDecrypting) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letter === " "
              ? " "
              : characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
        onComplete?.();
      }

      iteration += 1 / 3;
    }, duration / (text.length * 3));

    return () => clearInterval(interval);
  }, [text, duration, isDecrypting, onComplete]);

  const startDecryption = () => {
    setIsDecrypting(true);
  };

  return (
    <motion.span
      className={`font-mono cursor-pointer ${className}`}
      onClick={startDecryption}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {displayText || text}
    </motion.span>
  );
}
