"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-extrabold text-gold-light sm:text-5xl">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <Container as="section" className="py-24 sm:py-28">
      <div className="glass-panel grid grid-cols-2 gap-8 px-6 py-12 sm:px-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-xs font-medium uppercase tracking-widest text-cream/50 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
