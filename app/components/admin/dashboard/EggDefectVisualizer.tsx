"use client";

import { motion, AnimatePresence } from "framer-motion";

interface DefectPoint {
  label: string;
  value: number;
  x: number;
  y: number;
  angle: number;
  labelOffset: { x: number; y: number };
}

interface EggDefectVisualizerProps {
  defects: Array<{
    name: string;
    value: number;
  }>;
}

export function EggDefectVisualizer({ defects }: EggDefectVisualizerProps) {
  const points: DefectPoint[] = [
    {
      label: defects[0].name,
      value: defects[0].value,
      x: 25,
      y: 45,
      angle: -30,
      labelOffset: { x: -100, y: -13 },
    },
    {
      label: defects[1].name,
      value: defects[1].value,
      x: 75,
      y: 25,
      angle: 30,
      labelOffset: { x: -74, y: -13 },
    },
    {
      label: defects[2].name,
      value: defects[2].value,
      x: 70,
      y: 70,
      angle: -45,
      labelOffset: { x: -85, y: -13 },
    },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="relative w-[300px] h-[400px]">
        {/* Static egg background image */}
        <div
          className="absolute inset-0 bg-[url('/images/duckegg.svg')] bg-contain bg-center bg-no-repeat"
          style={{ transform: "scale(1.3)" }}
        />

        {/* Defect points and labels */}
        <AnimatePresence>
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
            >
              {/* Point indicator */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute w-4 h-4 bg-yellow-300 rounded-full -translate-x-2 -translate-y-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute w-2 h-2 bg-yellow-500 rounded-full -translate-x-1 -translate-y-1" />

                {/* Label */}
                <motion.div
                  className="absolute whitespace-nowrap text-sm font-medium bg-white bg-opacity-75 px-2 py-1 rounded"
                  style={{
                    left: `${point.labelOffset.x}px`,
                    top: `${point.labelOffset.y}px`,
                  }}
                  initial={{ opacity: 0, y: point.labelOffset.y + 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: point.labelOffset.y,
                    transition: {
                      y: { type: "spring", stiffness: 300, damping: 10 }
                    }
                  }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  {`${point.label}: ${point.value}`}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

