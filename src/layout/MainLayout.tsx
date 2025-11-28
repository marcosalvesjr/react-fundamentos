import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Atom } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <SidebarProvider className="text-white">
        <AppSidebar />
        <main className="flex-1 bg-zinc-950">
          <header className="fixed top-0 w-full h-20 border-b border-zinc-700 bg-zinc-900/80 backdrop-blur-md z-50">
            <div className="h-full container mx-auto flex items-center gap-3 px-4">
              <Atom className="text-white" size={32} />
              <span className="text-xl font-semibold text-white">
                Fundamentos de React
              </span>
            </div>
          </header>
          <div className="pt-25 px-8">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
