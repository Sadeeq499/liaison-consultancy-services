import React, { useState } from "react";
import {
  MdMenu,
  MdNotifications,
  MdPerson,
  MdSettings,
  MdLogout,
  MdHelp,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Topbar({ toggleSidebar, isCollapsed }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Mock admin data
  const admin = {
    name: "John Doe",
    email: "admin@example.com",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff",
  };

  // Mock notifications
  const notifications = [
    {
      id: 1,
      message: "New member registration",
      time: "5 minutes ago",
    },
    {
      id: 2,
      message: "New service request submitted",
      time: "10 minutes ago",
    },
    {
      id: 3,
      message: "Document verification pending",
      time: "1 hour ago",
    },
  ];

  return (
    <header className="h-16 bg-white shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="hidden lg:block text-gray-500 hover:text-blue-500"
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg">
              <MdNotifications className="text-2xl" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg"
            >
              <img
                src={admin.avatar}
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {admin.name}
              </span>
            </button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-900">
                    {admin.name}
                  </p>
                  <p className="text-sm text-gray-500">{admin.email}</p>
                </div>
                <Link
                  to="/admin/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  <MdPerson /> Profile
                </Link>
                <Link
                  to="/admin/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  <MdSettings /> Settings
                </Link>
                <Link
                  to="/admin/help"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  <MdHelp /> Help
                </Link>
                <div className="border-t">
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <MdLogout /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
