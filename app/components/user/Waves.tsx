import React from "react";

interface WaveTopProps {
  fill: string;
  size?: "sm" | "md" | "lg";
}

export const WaveTop: React.FC<WaveTopProps> = ({ fill, size = "md" }) => {
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

interface WaveBottomProps {
  fill: string;
}

export const WaveBottom: React.FC<WaveBottomProps> = ({ fill }) => (
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
