import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdNotifications,
  MdPeople,
  MdRequestPage,
  MdFolder,
  MdSupportAgent,
  MdDelete,
  MdSend,
} from "react-icons/md";

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "member",
      title: "New Member Registration",
      message: "John Doe has registered as a new member",
      time: "5 minutes ago",
      isRead: false,
    },
    {
      id: 2,
      type: "request",
      title: "New Service Request",
      message:
        "A new service request has been submitted for Property Registration",
      time: "10 minutes ago",
      isRead: false,
    },
    {
      id: 3,
      type: "document",
      title: "Document Verification Required",
      message: "New documents uploaded by Jane Smith need verification",
      time: "1 hour ago",
      isRead: true,
    },
    {
      id: 4,
      type: "support",
      title: "New Support Ticket",
      message: "A new support ticket has been raised by Mike Johnson",
      time: "2 hours ago",
      isRead: true,
    },
  ]);

  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "member",
  });

  const getNotificationIcon = (type) => {
    switch (type) {
      case "member":
        return <MdPeople className="text-indigo-500" />;
      case "request":
        return <MdRequestPage className="text-blue-500" />;
      case "document":
        return <MdFolder className="text-yellow-500" />;
      case "support":
        return <MdSupportAgent className="text-green-500" />;
      default:
        return <MdNotifications className="text-gray-500" />;
    }
  };

  const getNotificationClass = (type) => {
    switch (type) {
      case "member":
        return "border-indigo-200 bg-indigo-50";
      case "request":
        return "border-blue-200 bg-blue-50";
      case "document":
        return "border-yellow-200 bg-yellow-50";
      case "support":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const handleSendNotification = (e) => {
    e.preventDefault();
    const newId = Math.max(...notifications.map((n) => n.id)) + 1;
    setNotifications([
      {
        id: newId,
        ...newNotification,
        time: "Just now",
        isRead: false,
      },
      ...notifications,
    ]);
    setNewNotification({ title: "", message: "", type: "member" });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Notifications Management
          </h1>
          <button
            onClick={handleMarkAllAsRead}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Mark all as read
          </button>
        </div>

        {/* Send New Notification */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Send New Notification
          </h2>
          <form onSubmit={handleSendNotification} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={newNotification.type}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    type: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="member">Member</option>
                <option value="request">Request</option>
                <option value="document">Document</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={newNotification.title}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    title: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter notification title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={newNotification.message}
                onChange={(e) =>
                  setNewNotification({
                    ...newNotification,
                    message: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter notification message"
                rows="3"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              <MdSend /> Send Notification
            </button>
          </form>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
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
                      {notification.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!notification.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8">
            <MdNotifications className="text-gray-400 text-4xl mx-auto mb-4" />
            <p className="text-gray-500">No notifications to display</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Notifications;
