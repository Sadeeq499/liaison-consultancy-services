import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import {
  FaSearch,
  FaFilter,
  FaEye,
  FaDownload,
  FaClock,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Tracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data - replace with actual API data
  const requests = [
    {
      id: "REQ001",
      service: "Latest E.C",
      submittedDate: "2024-03-15",
      status: "approved",
      comments: "All documents verified successfully",
      lastUpdated: "2024-03-17",
      assignedTo: "John Doe",
    },
    {
      id: "REQ002",
      service: "NOC - Airport Authority",
      submittedDate: "2024-03-14",
      status: "pending",
      comments: "Under review by department",
      lastUpdated: "2024-03-16",
      assignedTo: "Jane Smith",
    },
    {
      id: "REQ003",
      service: "Structural Analysis Report",
      submittedDate: "2024-03-13",
      status: "rejected",
      comments: "Missing required documents",
      lastUpdated: "2024-03-15",
      assignedTo: "Mike Johnson",
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <FaCheck className="inline-block mr-1" />;
      case "pending":
        return <FaClock className="inline-block mr-1" />;
      case "rejected":
        return <FaTimes className="inline-block mr-1" />;
      default:
        return null;
    }
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Request Tracking
          </h1>
          <p className="text-gray-600">
            Track and monitor the status of your service requests
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Request ID or Service..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <motion.tr
                    key={request.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {request.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.submittedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 flex items-center  text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          request.status
                        )}`}
                      >
                        {getStatusIcon(request.status)}
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="text-green-600 hover:text-green-900 mr-4"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="Download Documents"
                      >
                        <FaDownload />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No requests found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Tracking;
