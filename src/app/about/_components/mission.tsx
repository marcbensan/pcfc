"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";

export default function Mission() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl px-4 text-center font-barlow text-4xl font-bold leading-relaxed text-black dark:text-white md:px-24 md:text-4xl lg:px-4 lg:text-6xl lg:leading-snug"
      >
        <h1>To see those that God loves, come back to </h1>
        <Highlight className="text-black dark:text-white">his family</Highlight>
      </motion.div>
    </HeroHighlight>
  );
}
