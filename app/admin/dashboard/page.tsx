import { Sidebar } from "@/app/components/admin/dashboard/Sidebar";
import { MainContent } from "@/app/components/admin/dashboard/MainContent";
import { AnimatedBackground } from "@/app/components/admin/dashboard/AnimatedBackground";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      <AnimatedBackground />
      <Sidebar />
      <main className="flex-1 ml-24 md:ml-72 transition-all duration-300 relative z-10">
        <MainContent />
      </main>
    </div>
  );
}
