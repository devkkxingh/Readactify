import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/FooterCTA";

interface PageLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
  showBackToHome?: boolean;
  maxWidth?: "4xl" | "6xl" | "7xl";
  className?: string;
}

export function PageLayout({
  children,
  showNavigation = false,
  showBackToHome = true,
  maxWidth = "4xl",
  className = "",
}: PageLayoutProps) {
  const maxWidthClasses = {
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showNavigation={showNavigation} showBackToHome={showBackToHome} />

      <main
        className={`container mx-auto px-6 py-12 ${maxWidthClasses[maxWidth]} ${className}`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
