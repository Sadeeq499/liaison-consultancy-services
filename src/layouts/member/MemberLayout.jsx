import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function MemberLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreenCollapsed, setIsLargeScreenCollapsed] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleLargeScreenSidebar = () =>
    setIsLargeScreenCollapsed(!isLargeScreenCollapsed);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        isLargeScreenCollapsed={isLargeScreenCollapsed}
      />

      {/* Main Content */}
      <div
        className={`min-h-screen transition-all duration-300
          ${isLargeScreenCollapsed ? "lg:pl-16" : "lg:pl-64"}`}
      >
        {/* Topbar */}
        <Topbar
          toggleLargeScreenSidebar={toggleLargeScreenSidebar}
          isLargeScreenCollapsed={isLargeScreenCollapsed}
        />

        {/* Main Content Area */}
        <main className="p-6 pt-28">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default MemberLayout;
