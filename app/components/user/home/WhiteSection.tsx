"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WaveTop, WaveBottom } from "../Waves";

const eggAnimation = {
  y: [0, -5, 0],
  transition: {
    y: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const duckFeetReveal = {
  clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"],
  transition: {
    duration: 4,
    ease: "easeInOut",
  },
};

export const WhiteSection = () => (
  <section className="bg-white py-16 relative min-h-[90vh] overflow-hidden flex items-center">
    <WaveTop fill="#172554" size="lg" />
    <div className="absolute inset-0 z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="egg-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M50 10 Q60 0, 70 10 Q80 20, 80 35 Q80 60, 50 80 Q20 60, 20 35 Q20 20, 30 10 Q40 0, 50 10"
              fill="rgba(255,228,196,0.1)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#egg-pattern)" />
      </svg>
    </div>
    <motion.div
      className="absolute -top-4 -right-24 z-30 w-[300px] h-[150px] md:w-[600px] md:h-[300px]"
      initial={{ clipPath: "inset(0 0 0 100%)" }}
      animate={duckFeetReveal}
    >
      <Image
        src="/images/duckfeet.png"
        alt="Duck feet"
        width={600}
        height={300}
        className="w-full h-full object-cover"
      />
    </motion.div>
    <div className="container mx-auto px-4 relative z-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#172554]">
          EGG-CELLENT: An IoT-driven Platform for Smart Egg Quality and Defect
          Detection
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Egg-Cellent uses cutting-edge technology to ensure your eggs are of
          the highest quality. Our automated defect detection, sorting, and
          real-time analytics elevate your production process, providing
          unmatched precision and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link href="/features">Learn More</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Link href="/try-now">Try Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white text-blue-600 hover:bg-blue-50 border-blue-600"
          >
            <Link href="/get-demo">Get a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
    <motion.div
      className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 md:left-20 md:transform-none z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
      animate={eggAnimation}
    >
      <Image
        src="/images/egg1.svg"
        alt="Decorative egg"
        width={400}
        height={400}
        className="w-full h-full"
      />
    </motion.div>
    <motion.div
      className="absolute -bottom-14 right-20 z-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] hidden md:block"
      animate={eggAnimation}
      transition={{ delay: 0.5 }}
    >
      <Image
        src="/images/egg2.svg"
        alt="Decorative egg"
        width={300}
        height={300}
        className="w-full h-full"
      />
    </motion.div>
    <WaveBottom fill="#fbbf24" />
  </section>
);
