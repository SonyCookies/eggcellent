"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TypeIcon as type,
  LucideIcon,
  Home,
  Users,
  Settings,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    href: string;
    title: string;
    icon: string;
  }[];
}

const iconMap: { [key: string]: LucideIcon } = {
  Home,
  Users,
  Settings,
};

const Wave = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#fb923c"
      fillOpacity="1"
      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
);

export function Sidebar({ className, items, ...props }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn("pb-12 relative bg-white overflow-hidden", className)}
      {...props}
    >
      <div className="space-y-4 py-4 relative z-10">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight text-blue-600">
            EGGCELLENT
          </h2>
          <div className="space-y-1">
            {items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={item.href}>
                      {Icon && <Icon className="mr-2 h-4 w-4" />}
                      {item.title}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Wave />
      <motion.div
        className="absolute -bottom-10 left-0 w-60 h-60"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/duckfeet.png"
          alt="Duck feet"
          width={600}
          height={600}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}

export function MobileSidebar({ items }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[280px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-md text-black">
              Menu
            </SheetTitle>
          </SheetHeader>
          <div className="flex-grow overflow-y-auto">
            <Sidebar className="w-full py-6 px-4 h-[93vh]" items={items} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
