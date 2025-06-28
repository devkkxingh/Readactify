"use client";

import { cn } from "@/lib/utils";
import { Shield } from "./Shield";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

const sizeConfig = {
  xs: {
    icon: "h-4 w-4",
    text: "text-sm",
    iconSize: "h-2.5 w-2.5",
    overlay: "h-1.5 w-1",
  },
  sm: {
    icon: "h-6 w-6",
    text: "text-base",
    iconSize: "h-4 w-4",
    overlay: "h-2 w-1.5",
  },
  md: {
    icon: "h-8 w-8",
    text: "text-lg",
    iconSize: "h-5 w-5",
    overlay: "h-2.5 w-1.5",
  },
  lg: {
    icon: "h-10 w-10",
    text: "text-2xl",
    iconSize: "h-6 w-6",
    overlay: "h-3 w-2",
  },
  xl: {
    icon: "h-16 w-16",
    text: "text-4xl",
    iconSize: "h-10 w-10",
    overlay: "h-5 w-3",
  },
};

export function Logo({
  size = "lg",
  className,
  showText = true,
  textClassName,
}: LogoProps) {
  const config = sizeConfig[size];

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className="relative">
        <div className="relative">
          <Shield width={60} height={60} />
        </div>
      </div>
      {showText && (
        <span
          className={cn(
            config.text,
            "!ml-0 text-foreground uppercase font-medium",
            textClassName
          )}
        >
          Readactify
        </span>
      )}
    </div>
  );
}
