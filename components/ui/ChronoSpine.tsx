"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A hairline that runs down the right edge of the viewport (the leading
 * edge in RTL) and fills with the accent gradient as the visitor scrolls.
 * It is the visual thread that the dedicated timeline section (phase 2)
 * will pick back up and turn into dated stops.
 */
export function ChronoSpine() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });
  const topPercent = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-5 z-40 hidden w-px md:block"
    >
      <div className="h-full w-px bg-hairline/50" />
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-0 w-px origin-top bg-gradient-to-b from-turquoise via-blue to-purple"
      />
      <motion.div
        style={{ top: topPercent }}
        className="absolute -right-[3px] h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-turquoise shadow-[0_0_12px_2px_rgba(67,234,211,0.7)] motion-safe:animate-pulse-glow"
      />
    </div>
  );
}
