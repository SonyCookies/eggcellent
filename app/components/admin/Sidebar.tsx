"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TypeIcon as type,
  type LucideIcon,
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

export function Sidebar({ className, items, ...props }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin
          </h2>
          <div className="space-y-1">
            {items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    {Icon && <Icon className="mr-2 h-4 w-4" />}
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
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
      <SheetContent side="left" className="w-[240px] sm:w-[280px]">
        <SheetHeader>
          <SheetTitle>Admin</SheetTitle>
        </SheetHeader>
        <Sidebar className="w-full" items={items} />
      </SheetContent>
    </Sheet>
  );
}
