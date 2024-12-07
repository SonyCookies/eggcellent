"use client"

import { MobileSidebar } from "@components/admin/Sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search } from 'lucide-react'

interface AdminHeaderProps {
  sidebarItems: {
    href: string
    title: string
    icon: string
  }[]
}

export function AdminHeader({ sidebarItems }: AdminHeaderProps) {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <MobileSidebar items={sidebarItems} />
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="/avatars/01.png" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

