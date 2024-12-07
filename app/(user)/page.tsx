"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Users,
  User,
  AlertCircle,
  BarChart3,
  Cloud,
  Weight,
  Cog,
  Cpu,
} from "lucide-react";

import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import classNames from "classnames";

const eggAnimation = {
  y: [0, -20, 0],
  transition: {
    y: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const WaveTop = ({
  fill,
  size = "md",
}: {
  fill: string;
  size?: "sm" | "md" | "lg";
}) => {
  const heights = {
    sm: "h-[30px] md:h-[60px]",
    md: "h-[50px] md:h-[100px]",
    lg: "h-[70px] md:h-[140px]",
  };

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
      <svg
        className={`relative block w-full ${heights[size]}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={fill}
        ></path>
      </svg>
    </div>
  );
};

const WaveBottom = ({ fill }: { fill: string }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
    <svg
      className="relative block w-full h-[50px] md:h-[100px]"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill={fill}
      ></path>
    </svg>
  </div>
);

const WhiteSection = () => (
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
)

const featureContent = [
  {
    title: "Automated Defect Detection",
    content:
      "Our AI-powered system detects surface-level defects like cracks and spots on eggs, ensuring only the best-quality eggs make it to market. With real-time analysis and highly accurate detection, we improve quality control at every step.",
    icon: AlertCircle,
  },
  {
    title: "Egg Sorting Based on Weight",
    content:
      "Uniformity is essential in the egg industry. Egg-Cellent automatically sorts eggs by weight, ensuring consistent quality in every batch. This helps increase efficiency and product consistency.",
    icon: Weight,
  },
  {
    title: "Real-Time Analytics Dashboard",
    content:
      "Monitor your production in real-time with detailed visual analytics. Track egg quality, defect rates, and sorting data instantly. With easy-to-read graphs and reports, our system gives you complete control over your egg production.",
    icon: BarChart3,
  },
  {
    title: "Cloud Storage & Remote Monitoring",
    content:
      "Access historical data and monitor your system remotely. Whether you're in the field or at home, Egg-Cellent keeps you connected, providing timely alerts and full visibility of your operation from anywhere.",
    icon: Cloud,
  },
];

const OrangeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getSlideIndex = useCallback(
    (offset: number) => {
      return (
        (currentSlide + offset + featureContent.length) % featureContent.length
      );
    },
    [currentSlide]
  );

  const handleSlideClick = useCallback(
    (index: number) => {
      if (!isAnimating && index !== currentSlide) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 700);
      }
    },
    [isAnimating, currentSlide]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % featureContent.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  return (
    <section className="bg-orange-500 py-16 pt-28 relative min-h-[70vh] flex items-center overflow-hidden">
      <WaveTop fill="#fbbf24" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-[600px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Key Features that Drive Quality and Efficiency
        </h2>
        <div className="relative flex justify-center items-center flex-1">
          {[-1, 0, 1].map((offset) => {
            const index = getSlideIndex(offset);
            const Feature = featureContent[index];
            return (
              <div
                key={index}
                onClick={() => handleSlideClick(index)}
                className={classNames(
                  "absolute w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[400px] bg-orange-400/50 rounded-3xl cursor-pointer",
                  "transition-all duration-700 ease-in-out transform",
                  "flex items-center justify-center p-6 text-white",
                  {
                    "z-10 scale-100 opacity-100": offset === 0,
                    "scale-75 blur-sm opacity-50": Math.abs(offset) === 1,
                    "scale-50 blur-md opacity-0": Math.abs(offset) > 1,
                    "translate-x-[-110%]": offset === -1,
                    "translate-x-[110%]": offset === 1,
                  }
                )}
              >
                <div className="text-center flex flex-col items-center">
                  <Feature.icon className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{Feature.title}</h3>
                  <p
                    className={classNames("text-lg", {
                      "line-clamp-4": offset !== 0,
                    })}
                  >
                    {Feature.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-16 absolute bottom-0 left-0 right-0">
          {featureContent.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={classNames(
                "w-3 h-3 rounded-full transition-all duration-300",
                {
                  "bg-white scale-125": index === currentSlide,
                  "bg-white/50 hover:bg-white/75": index !== currentSlide,
                }
              )}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <WaveBottom fill="#172554" />
    </section>
  );
};

const contentData = [
  {
    title: "Our Story",
    icon: Users,
    summary:
      "Egg-Cellent was born from a passion for innovation in the poultry industry. Our mission is to revolutionize egg quality assessment, ensuring only the best eggs reach consumers.",
    details: (
      <>
        <p className="mb-4">
          Egg-Cellent was founded in 2023 by three passionate individuals who
          saw an opportunity to revolutionize the egg industry. Our founders,
          coming from backgrounds in IoT, machine learning, and poultry science,
          combined their expertise to address the challenges faced by egg
          producers worldwide.
        </p>
        <p className="mb-4">
          Our mission is to empower egg producers with cutting-edge technology
          that ensures the highest quality eggs reach consumers. We believe that
          by leveraging AI and IoT, we can transform the way eggs are assessed,
          sorted, and delivered, leading to reduced waste, improved efficiency,
          and ultimately, a more sustainable egg industry.
        </p>
        <p>
          We envision a future where every egg that reaches a consumer's table
          is a testament to quality, freshness, and ethical production
          practices. Through our innovative solutions, we aim to set new
          standards in the poultry industry, benefiting producers, consumers,
          and the environment alike.
        </p>
      </>
    ),
  },
  {
    title: "System Benefits",
    icon: Cog,
    summary:
      "Egg-Cellent empowers farms with real-time data and analytics, optimizing production processes, reducing waste, and increasing overall efficiency.",
    details: (
      <>
        <p className="mb-4">
          Our Egg-Cellent system brings a multitude of benefits to egg producers
          and the wider poultry industry:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Real-time Quality Assessment: Our AI-powered system detects defects
            with high accuracy, ensuring only the best eggs are packaged.
          </li>
          <li>
            Increased Efficiency: Automated sorting based on weight and quality
            reduces manual labor and increases throughput.
          </li>
          <li>
            Waste Reduction: By identifying defective eggs early in the process,
            we help reduce waste and improve resource allocation.
          </li>
          <li>
            Data-Driven Insights: Our analytics dashboard provides valuable
            insights into production trends, helping farms make informed
            decisions.
          </li>
          <li>
            Remote Monitoring: Cloud-based technology allows farm managers to
            monitor operations from anywhere, at any time.
          </li>
        </ul>
        <p>
          By implementing Egg-Cellent, farms can expect to see improvements in
          product consistency, operational efficiency, and overall
          profitability. Our system not only benefits individual farms but also
          raises the standards for the entire poultry industry.
        </p>
      </>
    ),
  },
  {
    title: "Our Team",
    icon: User,
    summary:
      "Meet the dedicated experts behind Egg-Cellent: our IoT specialist, machine learning expert, and poultry scientist.",
    details: (
      <>
        <p className="mb-4">
          The Egg-Cellent team brings together a unique blend of expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {[1, 2, 3].map((member) => (
            <div key={member} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=128&width=128`}
                  alt={`Team Member ${member}`}
                  width={128}
                  height={128}
                />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Team Member {member}
              </h4>
              <p className="text-center">
                {member === 1 && "IoT Specialist"}
                {member === 2 && "Machine Learning Expert"}
                {member === 3 && "Poultry Scientist"}
              </p>
            </div>
          ))}
        </div>
        <p>
          Our team's diverse expertise allows us to approach egg quality
          assessment from multiple angles, ensuring a comprehensive and
          effective solution for the poultry industry.
        </p>
      </>
    ),
  },
  {
    title: "Our Technology",
    icon: Cpu,
    summary:
      "We leverage cutting-edge technology including AI-powered defect detection, precision weight sorting, real-time analytics, and cloud-based remote monitoring.",
    details: (
      <>
        <p className="mb-4">Our innovative technology stack includes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Computer Vision: High-resolution cameras and advanced image
            processing for egg defect detection.
          </li>
          <li>
            Machine Learning: Deep learning models for accurate classification
            of egg quality and defects.
          </li>
          <li>
            IoT Sensors: Precision weight sensors for accurate egg sorting.
          </li>
          <li>
            Cloud Computing: Cloud technology for data storage, processing, and
            remote access.
          </li>
          <li>
            Real-time Analytics: User-friendly dashboard for instant insights.
          </li>
          <li>
            Mobile Integration: iOS and Android apps for on-the-go monitoring.
          </li>
          <li>Blockchain: For transparent and secure egg traceability.</li>
          <li>Edge Computing: For faster processing and reduced latency.</li>
          <li>
            5G Connectivity: For high-speed data transmission in rural areas.
          </li>
          <li>
            Augmented Reality: For intuitive system maintenance and
            troubleshooting.
          </li>
        </ul>
        <p>
          By combining these cutting-edge technologies, we've created a solution
          that's not just innovative, but also practical and tailored to the
          needs of modern egg producers.
        </p>
      </>
    ),
  },
];

const BlueSection = () => {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <section className="bg-blue-950 py-16 relative min-h-screen">
      <WaveTop fill="#172554" />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20">
          About Us
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-32 relative mb-16">
          {/* Dotted lines connecting the circles */}
          <div className="hidden md:block absolute top-1/4 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-white/30 -z-10" />
          <div className="hidden md:block absolute top-1/4 left-1/2 -bottom-[20%] w-0.5 border-l-2 border-dashed border-white/30 -translate-x-1/2 -z-10" />

          {contentData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center max-w-[250px] ${
                index === 0
                  ? "md:mr-auto"
                  : index === 3
                  ? "md:ml-auto"
                  : "mx-auto"
              }`}
            >
              <Button
                variant="ghost"
                className={`w-32 h-32 rounded-full bg-white hover:bg-orange-100 flex items-center justify-center mb-4 shadow-lg ${
                  activeContent === index ? "ring-4 ring-orange-500" : ""
                }`}
                onClick={() => setActiveContent(index)}
              >
                <item.icon className="w-16 h-16 text-orange-500" />
              </Button>
              <h2 className="text-white text-center font-semibold text-xl mb-4">
                {item.title}
              </h2>
              <p className="text-white text-center">{item.summary}</p>
            </div>
          ))}
        </div>

        {/* Detailed content section */}
        <div className="bg-white/10 rounded-lg p-6 mt-8 relative">
          <h3 className="text-2xl font-bold text-white mb-4">
            {contentData[activeContent].title}
          </h3>
          <div className="text-white">{contentData[activeContent].details}</div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <WhiteSection />
      <OrangeSection />
      <BlueSection />
    </div>
  );
}
