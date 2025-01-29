import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdSearch,
  MdFilterList,
  MdVisibility,
  MdCheckCircle,
  MdReply,
  MdAccessTime,
  MdPriorityHigh,
} from "react-icons/md";

function Support() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock support tickets data
  const tickets = [
    {
      id: "TKT001",
      subject: "Unable to upload documents",
      member: {
        name: "John Doe",
        email: "john@example.com",
      },
      createdDate: "2024-03-15",
      status: "open",
      priority: "high",
      lastResponse: "2024-03-15",
      category: "Technical",
    },
    {
      id: "TKT002",
      subject: "Service request status inquiry",
      member: {
        name: "Jane Smith",
        email: "jane@example.com",
      },
      createdDate: "2024-03-14",
      status: "in_progress",
      priority: "medium",
      lastResponse: "2024-03-14",
      category: "Service",
    },
    {
      id: "TKT003",
      subject: "Payment confirmation needed",
      member: {
        name: "Mike Johnson",
        email: "mike@example.com",
      },
      createdDate: "2024-03-13",
      status: "resolved",
      priority: "low",
      lastResponse: "2024-03-13",
      category: "Billing",
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "open":
        return "bg-red-100 text-red-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      (ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || ticket.status === statusFilter)
  );

  // Support statistics
  const stats = [
    {
      title: "Open Tickets",
      value: tickets.filter((t) => t.status === "open").length,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "In Progress",
      value: tickets.filter((t) => t.status === "in_progress").length,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      title: "Resolved",
      value: tickets.filter((t) => t.status === "resolved").length,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Total Tickets",
      value: tickets.length,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Support Tickets Management
        </h1>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-6 rounded-xl shadow-sm`}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {stat.title}
              </h3>
              <p className={`text-3xl font-bold ${stat.textColor} mt-2`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <MdFilterList className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Ticket ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Created Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${ticket.member.name}&background=6366f1&color=fff`}
                            alt={ticket.member.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {ticket.member.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {ticket.member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.createdDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          ticket.status
                        )}`}
                      >
                        {ticket.status
                          .replace("_", " ")
                          .charAt(0)
                          .toUpperCase() +
                          ticket.status.slice(1).replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(
                          ticket.priority
                        )}`}
                      >
                        {ticket.priority.charAt(0).toUpperCase() +
                          ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          title="View Details"
                        >
                          <MdVisibility className="text-xl" />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Reply"
                        >
                          <MdReply className="text-xl" />
                        </button>
                        {ticket.status === "open" && (
                          <button
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Mark In Progress"
                          >
                            <MdAccessTime className="text-xl" />
                          </button>
                        )}
                        {ticket.status === "in_progress" && (
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Mark Resolved"
                          >
                            <MdCheckCircle className="text-xl" />
                          </button>
                        )}
                        {ticket.priority === "high" && (
                          <MdPriorityHigh
                            className="text-red-500 text-xl"
                            title="High Priority"
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredTickets.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No support tickets found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Support;
