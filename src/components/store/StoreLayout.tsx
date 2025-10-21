import { Outlet } from "react-router-dom";
import { StoreSidebar, StoreHeader } from "@/components/store";

export function StoreLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <StoreSidebar />
      <StoreHeader />
      
      <div className="ml-64 mt-16 p-6">
        <Outlet />
      </div>
    </div>
  );
}