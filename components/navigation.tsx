"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Platform", href: "/platform" },
  { label: "Applications", href: "/applications" },
  { label: "Standards", href: "/standards" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/naberstone-tm-logo-white.png"
              alt="Naberstone"
              width={220}
              height={33}
              className="h-5 lg:h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wider uppercase text-white hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              Request Technical Overview
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="lg:hidden"
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-card border-border px-6 !gap-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col justify-between h-full py-8 pb-[env(safe-area-inset-bottom,2rem)]">
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/images/naberstone-tm-logo-white.png"
                        alt="Naberstone"
                        width={180}
                        height={27}
                        className="h-5 w-auto"
                      />
                    </div>
                    <nav className="flex flex-col gap-0.5">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-2.5 rounded-md"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div>
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className={cn(buttonVariants({ size: "lg" }), "w-full")}
                    >
                      Request Technical Overview
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
