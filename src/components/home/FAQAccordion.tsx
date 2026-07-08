"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ChevronDownIcon } from "@/components/ui/icons";
import { faqItems } from "@/lib/data";

export function FAQAccordion({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Container as="section" className={compact ? "" : "py-24 sm:py-28"}>
      {!compact && (
        <Reveal>
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
        </Reveal>
      )}

      <div className={`mx-auto max-w-2xl ${!compact ? "mt-14" : ""}`}>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="glass-panel overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-sm font-semibold text-cream sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-gold-light transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-cream/60">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
