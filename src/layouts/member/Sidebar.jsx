import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MdDashboard,
  MdList,
  MdTrackChanges,
  MdNotifications,
  MdPerson,
  MdSupport,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { images } from "../../assets/index";

function Sidebar({ isOpen, toggleSidebar, isLargeScreenCollapsed }) {
  const location = useLocation();

  const menuItems = [
    {
      path: "/member/dashboard",
      icon: <MdDashboard className="text-xl" />,
      label: "Dashboard",
    },
    {
      path: "/member/services",
      icon: <MdList className="text-xl" />,
      label: "Services List",
    },
    {
      path: "/member/tracking",
      icon: <MdTrackChanges className="text-xl" />,
      label: "Request Tracking",
    },
    {
      path: "/member/notifications",
      icon: <MdNotifications className="text-xl" />,
      label: "Notifications",
    },
    {
      path: "/member/profile",
      icon: <MdPerson className="text-xl" />,
      label: "Profile Management",
    },
    {
      path: "/member/support",
      icon: <MdSupport className="text-xl" />,
      label: "Support",
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white bg-green-700 hover:bg-green-800 transition-colors duration-200 shadow-lg"
      >
        {isOpen ? (
          <MdClose className="text-xl" />
        ) : (
          <MdMenu className="text-xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 
          ${isLargeScreenCollapsed ? "lg:w-16" : "lg:w-64"} 
          w-64 z-40`}
      >
        {/* Logo Section */}
        <div className="h-20 border-b flex items-center">
          {!isLargeScreenCollapsed ? (
            <Link to="/member/dashboard" className="w-full px-4">
              <div className="flex items-center gap-3">
                <img
                  src={images.logo}
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />
                <span className="font-semibold text-xl text-green-700">
                  Member Portal
                </span>
              </div>
            </Link>
          ) : (
            <div className="w-full flex justify-center">
              <img
                src={images.logo}
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-green-700 text-white"
                        : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                    }
                    ${isLargeScreenCollapsed ? "justify-center" : ""}`}
                >
                  <span className={isActive ? "text-white" : "text-green-700"}>
                    {item.icon}
                  </span>
                  {!isLargeScreenCollapsed && (
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isLargeScreenCollapsed && (
                    <div className="hidden group-hover:block absolute left-full ml-2 px-3 py-2 bg-green-700 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
