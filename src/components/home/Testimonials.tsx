"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StarIcon } from "@/components/ui/icons";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <Container as="section" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading badge="Testimonials" title="Trusted by Players Across India" />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div className="glass-panel min-h-[260px] px-8 py-10 text-center sm:px-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              exit={{ y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-center gap-1 text-gold-light">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-cream/80">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-6 font-heading text-sm font-semibold text-cream">{current.name}</p>
              <p className="text-xs text-cream/60">{current.location}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-1">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold-light" : "w-1.5 bg-gold/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
}
