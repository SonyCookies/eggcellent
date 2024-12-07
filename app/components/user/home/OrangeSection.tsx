  "use client";

  import React, { useState, useEffect, useCallback } from "react";
  import { AlertCircle, BarChart3, Cloud, Weight } from "lucide-react";
  import classNames from "classnames";
  import { WaveTop, WaveBottom } from "../Waves";

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

  export const OrangeSection = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 text-white">
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

