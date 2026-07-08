"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-9 z-50 transition-all duration-500",
        scrolled ? "border-b border-gold/10 bg-base/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/login/" variant="ghost" size="md">
            Login
          </Button>
          <Button href="/register/" variant="primary" size="md">
            Register
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 text-gold-light lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-[1.5px] w-full bg-current transition-transform",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span className={cn("h-[1.5px] w-full bg-current transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "h-[1.5px] w-full bg-current transition-transform",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/10 bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-cream/80 transition-colors hover:bg-surface/60 hover:text-gold-light"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-3">
                <Button href="/login/" variant="secondary" className="flex-1">
                  Login
                </Button>
                <Button href="/register/" variant="primary" className="flex-1">
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
