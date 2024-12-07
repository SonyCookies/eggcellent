"use client"

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -top-4 -right-24 w-[300px] h-[150px] md:w-[600px] md:h-[300px]"
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-[200px] h-[100px] md:w-[400px] md:h-[200px]"
        initial={{ clipPath: "inset(0 0 0 100%)", scaleX: -1 }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-orange-600 opacity-20" />
      </motion.div>
    </div>
  )
}

