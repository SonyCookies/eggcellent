import { Sidebar } from "@components/admin/Sidebar";
import { AdminHeader } from "@components/admin/AdminHeader";

const sidebarItems = [
  {
    href: "/admin/dashboard",
    title: "Dashboard",
    icon: "Home",
  },
  {
    href: "/admin/users",
    title: "Users",
    icon: "Users",
  },
  {
    href: "/admin/settings",
    title: "Settings",
    icon: "Settings",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar className="hidden w-64 border-r md:block" items={sidebarItems} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader sidebarItems={sidebarItems} />
        <main className="flex-1 overflow-auto py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
