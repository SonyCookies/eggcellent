import {
  Users,
  Warehouse,
  Egg,
  Cpu,
  Search,
  BarChart3,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WaveTop = ({ fill }: { fill: string }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden">
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

const FloatingEgg = ({ className }: { className: string }) => (
  <svg
    className={`absolute ${className}`}
    width="60"
    height="80"
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 0C13.4315 0 0 17.9086 0 40C0 62.0914 13.4315 80 30 80C46.5685 80 60 62.0914 60 40C60 17.9086 46.5685 0 30 0Z"
      fill="#FFEFD5"
      fillOpacity="0.6"
    />
  </svg>
);

const WhiteSection = () => (
  <section className="bg-white py-16 relative min-h-[80vh] overflow-hidden">
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
          <pattern
            id="duck-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 20 Q80 0, 100 20 Q120 40, 100 60 Q80 80, 60 60 Q40 40, 60 20 M70 30 A5 5 0 0 1 70 40 A5 5 0 0 1 70 30"
              fill="rgba(255,255,224,0.1)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#egg-pattern)" />
        <rect width="100%" height="100%" fill="url(#duck-pattern)" />
      </svg>
    </div>
    <div className="container mx-auto px-4 relative z-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
          EGG-CELLENT
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          An IoT-driven Platform for Smart Egg Quality and Defect Detection
        </p>
      </div>
    </div>
    <FloatingEgg className="top-1/4 left-1/4 animate-float" />
    <FloatingEgg className="top-1/3 right-1/4 animate-float-delay-1" />
    <FloatingEgg className="bottom-1/4 left-1/3 animate-float-delay-2" />
    <Sun className="absolute top-1/4 right-1/3 w-16 h-16 text-yellow-400 animate-spin-slow" />
    <WaveBottom fill="#fbbf24" />
  </section>
);

const OrangeSection = () => (
  <section className="bg-gradient-to-b from-orange-500 to-yellow-500 py-16 relative h-screen">
    <WaveTop fill="#fbbf24" />
    <div className="container mx-auto px-4 relative z-10 pt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Why Choose Happy Eggs?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Happy hens on a farm"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-4">
          <p className="text-white text-lg">
            At Happy Eggs, we believe in providing the best life for our hens,
            which in turn produces the most delicious and nutritious eggs for
            you and your family.
          </p>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>100% free-range hens with access to over 8 acres of pasture</li>
            <li>Sustainably farmed and ethically produced</li>
            <li>Rich in flavor and packed with essential nutrients</li>
            <li>Supporting local family farms across the country</li>
          </ul>
          <Link
            href="/our-story"
            className="inline-block mt-4 bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors"
          >
            Learn More About Our Story
          </Link>
        </div>
      </div>
    </div>
    <WaveBottom fill="#172554" />
  </section>
);

const BlueSection = () => (
  <section className="bg-blue-950 py-16 relative h-screen">
    <WaveTop fill="#172554" />
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20">
        Our Recipe for Making a Better Egg
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">
        {/* Dotted lines connecting the circles */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-white/30 -z-10" />

        {/* First Circle */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
            <Users className="w-16 h-16 text-orange-500" />
          </div>
          <h2 className="text-white text-center font-semibold">
            Small
            <br />
            Family Farms
          </h2>
        </div>

        {/* Second Circle */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
            <Warehouse className="w-16 h-16 text-orange-500" />
          </div>
          <h2 className="text-white text-center font-semibold">
            Happy Hens on
            <br />
            8+ Acres
          </h2>
        </div>

        {/* Third Circle */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
            <Egg className="w-16 h-16 text-orange-500" />
          </div>
          <h2 className="text-white text-center font-semibold">
            Delicious &
            <br />
            Nutritious Yolks
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <WhiteSection />
      <OrangeSection />
      <BlueSection />
    </div>
  );
}
