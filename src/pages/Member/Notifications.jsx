import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { motion } from "framer-motion";
import {
  FaBell,
  FaCheck,
  FaTimes,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTrash,
} from "react-icons/fa";

function Notifications() {
  // Mock notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Request Approved",
      message: "Your request for Latest E.C (REQ001) has been approved.",
      date: "2024-03-20 14:30",
      isRead: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Missing Documents",
      message:
        "Please upload the required documents for NOC - Airport Authority (REQ002).",
      date: "2024-03-19 11:15",
      isRead: false,
    },
    {
      id: 3,
      type: "error",
      title: "Request Rejected",
      message:
        "Your request for Structural Analysis Report (REQ003) was rejected due to incomplete information.",
      date: "2024-03-18 09:45",
      isRead: true,
    },
    {
      id: 4,
      type: "info",
      title: "Document Review",
      message:
        "Your submitted documents for Water Feasibility Certificate are under review.",
      date: "2024-03-17 16:20",
      isRead: true,
    },
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheck className="text-green-500" />;
      case "warning":
        return <FaExclamationTriangle className="text-yellow-500" />;
      case "error":
        return <FaTimes className="text-red-500" />;
      case "info":
        return <FaInfoCircle className="text-blue-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };

  const getNotificationClass = (type) => {
    switch (type) {
      case "success":
        return "border-green-200 bg-green-50";
      case "warning":
        return "border-yellow-200 bg-yellow-50";
      case "error":
        return "border-red-200 bg-red-50";
      case "info":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Notifications
          </h1>
          <p className="text-gray-600">
            Stay updated with your service requests and important alerts
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end mb-6">
          <button
            onClick={markAllAsRead}
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`border rounded-lg p-4 ${getNotificationClass(
                notification.type
              )} ${!notification.isRead ? "border-l-4" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-semibold">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {notification.message}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {notification.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!notification.isRead && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8">
            <FaBell className="text-gray-400 text-4xl mx-auto mb-4" />
            <p className="text-gray-500">No notifications to display</p>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Notifications;
