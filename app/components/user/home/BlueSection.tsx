"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  User,
  Cog,
  Cpu,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  Cloud,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { WaveTop } from "../Waves";

const contentData = [
  {
    title: "Our Story",
    icon: Users,
    summary: "Revolutionizing egg production with IoT and AI technologies.",
    details: (
      <>
        <p className="mb-4">
          Egg-Cellent was born from the need to modernize egg production in
          regions like Oriental Mindoro, Philippines. Our journey began at
          Almeda's Poultry Farm, where the manual process of checking egg
          quality and sorting presented challenges in efficiency and
          scalability.
        </p>
        <p className="mb-4">
          Recognizing the potential of IoT and AI in agriculture, we developed
          an innovative platform that combines automated quality inspection,
          AI-powered defect detection, and microcontroller-based sorting
          mechanisms. Our system aims to streamline operations, improve
          accuracy, and provide valuable insights for both experienced farmers
          and newcomers to the industry.
        </p>
        <p className="mb-4">Key features of Egg-Cellent include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Automated egg quality inspection using image processing and sensors
          </li>
          <li>
            AI-driven defect detection for identifying cracks and irregularities
          </li>
          <li>Weight-based sorting with configurable thresholds</li>
          <li>Remote monitoring via mobile or web application</li>
          <li>
            Real-time analytics dashboard for live data and historical analysis
          </li>
        </ul>
        <p>
          By addressing the specific challenges faced by local farms,
          Egg-Cellent aims to boost efficiency, improve quality control, and
          align with global agricultural trends. Our mission is to empower
          farmers, strengthen local economies, and set new standards for smart
          farming in the Philippines and beyond.
        </p>
      </>
    ),
  },
  {
    title: "System Benefits",
    icon: Cog,
    summary: "Optimizing production with real-time data and analytics.",
    details: (
      <>
        <ul className="list-none space-y-4">
          <li className="flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-4">
              <Cpu className="w-6 h-6 text-white" />
            </span>
            <span>AI-powered real-time quality assessment</span>
          </li>
          <li className="flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-4">
              <ChevronRight className="w-6 h-6 text-white" />
            </span>
            <span>Increased efficiency through automated sorting</span>
          </li>
          <li className="flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-4">
              <ChevronLeft className="w-6 h-6 text-white" />
            </span>
            <span>Significant waste reduction</span>
          </li>
          <li className="flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </span>
            <span>Data-driven insights for informed decisions</span>
          </li>
          <li className="flex items-center">
            <span className="bg-orange-500 rounded-full p-2 mr-4">
              <Cloud className="w-6 h-6 text-white" />
            </span>
            <span>Remote monitoring capabilities</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Our Team",
    icon: User,
    summary: "Meet the experts behind Egg-Cellent's innovation.",
    details: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Alex Chen",
            role: "IoT Specialist",
            image: "/placeholder.svg?height=128&width=128",
          },
          {
            name: "Dr. Sarah Lee",
            role: "Machine Learning Expert",
            image: "/placeholder.svg?height=128&width=128",
          },
          {
            name: "Mark Johnson",
            role: "Poultry Scientist",
            image: "/placeholder.svg?height=128&width=128",
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="w-32 h-32 bg-orange-500 rounded-full mb-4 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-orange-500">
              {member.name}
            </h4>
            <p className="text-center text-white">{member.role}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Our Technology",
    icon: Cpu,
    summary: "Cutting-edge solutions for next-gen egg production.",
    details: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "Computer Vision",
          "Machine Learning",
          "IoT Sensors",
          "Cloud Computing",
          "Real-time Analytics",
          "Mobile Integration",
          "Blockchain",
          "Edge Computing",
          "5G Connectivity",
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="bg-orange-500 rounded-lg p-4 text-center text-white font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    ),
  },
];

export const BlueSection = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextContent = () => {
    setDirection(1);
    setActiveContent((prev) => (prev + 1) % contentData.length);
  };

  const prevContent = () => {
    setDirection(-1);
    setActiveContent(
      (prev) => (prev - 1 + contentData.length) % contentData.length
    );
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-16 relative min-h-screen overflow-hidden">
      <WaveTop fill="#1e3a8a" />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-10">
          Discover Egg-Cellent
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <Button
            variant="ghost"
            onClick={prevContent}
            className="text-white hover:bg-orange-500/20"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse"></div>
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
                  index === activeContent ? "z-10" : "z-0"
                }`}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={{
                  opacity: index === activeContent ? 1 : 0,
                  scale: index === activeContent ? 1 : 0.8,
                  rotate: index === activeContent ? 0 : 180,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  {React.createElement(item.icon, {
                    className: "w-16 h-16 text-white",
                  })}
                </div>
              </motion.div>
            ))}
          </div>
          <Button
            variant="ghost"
            onClick={nextContent}
            className="text-white hover:bg-orange-500/20"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {contentData[activeContent].title}
            </h2>
            <p className="text-xl text-white">
              {contentData[activeContent].summary}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-md"></div>
            <div className="absolute inset-0 bg-[url('/egg-pattern.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            <motion.div
              className="relative z-10 p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="prose prose-invert max-w-none">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full">
                    {contentData[activeContent].details}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-orange-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
};
