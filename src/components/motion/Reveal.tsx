"use client";

import { motion, type Variants } from "framer-motion";

type RevealType = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";

const variantMap: Record<RevealType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 48 },
    show: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -48 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  className,
  once = true,
}: {
  children: React.ReactNode;
  type?: RevealType;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variantMap[type]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
