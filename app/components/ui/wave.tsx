import React from "react";

interface WaveProps {
  fill: string;
  size?: "sm" | "md" | "lg";
}

const getPath = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    case "md":
      return "M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    case "lg":
      return "M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    default:
      return "M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
  }
};

export const WaveTop: React.FC<WaveProps> = ({ fill, size = "md" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <svg
      className="relative block w-full h-[70px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path fill={fill} d={getPath(size)}></path>
    </svg>
  </div>
);

export const WaveBottom: React.FC<WaveProps> = ({ fill, size = "md" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
    <svg
      className="relative block w-full h-[70px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path fill={fill} d={getPath(size)}></path>
    </svg>
  </div>
);
