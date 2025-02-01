import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdRequestPage,
  MdFolder,
  MdSettings,
  MdSupportAgent,
  MdMenu,
  MdClose,
  MdNotifications,
  MdAnalytics,
  MdPerson,
  MdMiscellaneousServices,
} from "react-icons/md";
import { images } from "../../assets/index";

function Sidebar({ isOpen, toggleSidebar, isLargeScreenCollapsed }) {
  const location = useLocation();

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: <MdDashboard className="text-xl" />,
      label: "Dashboard",
    },
    {
      path: "/admin/members",
      icon: <MdPeople className="text-xl" />,
      label: "Member Management",
    },
    {
      path: "/admin/services",
      icon: <MdMiscellaneousServices className="text-xl" />,
      label: "Services Management",
    },
    {
      path: "/admin/requests",
      icon: <MdRequestPage className="text-xl" />,
      label: "Service Requests",
    },
    // {
    //   path: "/admin/documents",
    //   icon: <MdFolder className="text-xl" />,
    //   label: "Documents",
    // },

    {
      path: "/admin/notifications",
      icon: <MdNotifications className="text-xl" />,
      label: "Notifications",
    },
    {
      path: "/admin/analytics",
      icon: <MdAnalytics className="text-xl" />,
      label: "Analytics",
    },
    {
      path: "/admin/support",
      icon: <MdSupportAgent className="text-xl" />,
      label: "Support Tickets",
    },
    {
      path: "/admin/settings",
      icon: <MdSettings className="text-xl" />,
      label: "Settings",
    },
    {
      path: "/admin/profile",
      icon: <MdPerson className="text-xl" />,
      label: "Profile",
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-lg"
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
        <div className="h-20 border-b flex items-center px-4">
          {!isLargeScreenCollapsed ? (
            <Link to="/admin/dashboard" className="w-full px-4">
              <div className="flex items-center gap-3">
                <img
                  src={images.logo}
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />
                <span className="font-semibold text-xl text-indigo-700">
                  Admin Portal
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
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                    }
                    ${isLargeScreenCollapsed ? "justify-center" : ""}`}
                >
                  <span
                    className={isActive ? "text-blue-600" : "text-gray-600"}
                  >
                    {item.icon}
                  </span>
                  {!isLargeScreenCollapsed && (
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isLargeScreenCollapsed && (
                    <div className="hidden group-hover:block absolute left-full ml-2 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
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
