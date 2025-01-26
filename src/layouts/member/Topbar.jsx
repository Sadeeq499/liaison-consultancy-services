import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdNotifications,
  MdPerson,
  MdLogout,
  MdSettings,
  MdMenu,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Topbar({ toggleLargeScreenSidebar, isLargeScreenCollapsed }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const notifications = [
    {
      id: 1,
      title: "New Service Request",
      message: "Your service request #123 has been received",
      time: "5 min ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Request Update",
      message: "Service request #120 has been completed",
      time: "1 hour ago",
      isRead: true,
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-20 bg-white border-b z-30 transition-all duration-300
        ${isLargeScreenCollapsed ? "lg:left-16" : "lg:left-64"}
        left-0`}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left Section with Toggle and Welcome */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLargeScreenSidebar}
            className="hidden lg:flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <MdMenu
              className={`text-xl text-gray-600 transition-transform duration-300 
              ${isLargeScreenCollapsed ? "rotate-180" : ""}`}
            />
          </button>

          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {greeting}, John Doe
            </h1>
            <p className="text-sm text-gray-600">
              Welcome back to your dashboard
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
            >
              <MdNotifications className="text-2xl text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border overflow-hidden"
                >
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-gray-800">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b hover:bg-gray-50 transition-colors duration-200 cursor-pointer
                          ${notification.isRead ? "" : "bg-green-50"}`}
                      >
                        <h4 className="font-medium text-gray-800">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <span className="text-xs text-gray-500 mt-2 block">
                          {notification.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/member/notifications"
                    className="block p-4 text-center text-green-700 hover:bg-green-50 transition-colors duration-200"
                  >
                    View All Notifications
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <MdPerson className="text-xl text-green-700" />
              </div>
              <span className="font-medium text-gray-700">John Doe</span>
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border overflow-hidden"
                >
                  <Link
                    to="/member/profile"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <MdPerson className="text-xl text-green-700" />
                    <span className="text-gray-700">Profile</span>
                  </Link>
                  <Link
                    to="/member/settings"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <MdSettings className="text-xl text-green-700" />
                    <span className="text-gray-700">Settings</span>
                  </Link>
                  <button
                    onClick={() => {
                      // Add logout logic here
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors duration-200 text-red-600"
                  >
                    <MdLogout className="text-xl" />
                    <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
