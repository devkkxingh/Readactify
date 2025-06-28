"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Waitlist", href: "#waitlist" },
];

interface HeaderProps {
  showNavigation?: boolean;
  showBackToHome?: boolean;
}

export function Header({
  showNavigation = true,
  showBackToHome = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate bg-background border-b">
      {/* Navigation */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Readactify</span>
            <Logo size="lg" />
          </Link>
        </div>

        {showNavigation && (
          <>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="#waitlist">
                <Button size="sm">Join Waitlist</Button>
              </Link>
            </div>
          </>
        )}

        {showBackToHome && (
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        )}
      </nav>

      {/* Mobile menu */}
      {showNavigation && (
        <motion.div
          className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            x: mobileMenuOpen ? 0 : "100%",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Readactify</span>
                <Logo size="md" />
              </Link>
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
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#waitlist"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
