"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, BarChart2, Users, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/admin/dashboard" },
  { icon: BarChart2, label: "Analytics", href: "/admin/analytics" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

interface WaveBottomProps {
  fill: string;
}

const WaveBottom: React.FC<WaveBottomProps> = ({ fill }) => (
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

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    console.log("isOpen state changed:", isOpen);
  }, [isOpen]);

  return (
    <div className="fixed left-0 top-0 bottom-0 z-40 p-4 pt-6">
      <motion.div
        className={cn(
          "flex h-[calc(100vh-3rem)] flex-col rounded-xl bg-white text-white shadow-xl transition-all duration-300 relative overflow-hidden z-40",
          isOpen ? "w-60" : "w-16"
        )}
        initial={false}
        animate={{ width: isOpen ? 240 : 64 }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
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
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-2 text-blue-950 hover:bg-blue-800 hover:text-white z-50 transition-all duration-300",
            isOpen ? "right-2" : "left-1/2 -translate-x-1/2"
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
            console.log("Sidebar toggled:", !isOpen);
          }}
        >
          <Menu />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <nav className="flex flex-col gap-2 p-4 pt-16 relative z-20">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className={cn(
                "flex items-center gap-4 justify-start text-blue-950 hover:bg-blue-800/50 hover:text-white",
                !isOpen && "justify-center",
                pathname === item.href && "bg-blue-800/50 text-white"
              )}
            >
              <Link href={item.href}>
                <item.icon size={24} />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </nav>
        <WaveBottom fill="#fbbf24" />
      </motion.div>
    </div>
  );
}
