import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreenCollapsed, setIsLargeScreenCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLargeScreenSidebar = () => {
    setIsLargeScreenCollapsed(!isLargeScreenCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isLargeScreenCollapsed={isLargeScreenCollapsed}
      />
      <div
        className={`transition-all duration-300 ${
          isLargeScreenCollapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
        <Topbar
          toggleSidebar={toggleLargeScreenSidebar}
          isCollapsed={isLargeScreenCollapsed}
        />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
