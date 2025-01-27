import React from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { FaFileAlt, FaHourglassHalf, FaCheck, FaTimes, FaPlus } from "react-icons/fa";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Link } from "react-router-dom";

function Dashboard() {
  // Static data for statistics
  const stats = {
    total: 45,
    pending: 12,
    inReview: 8,
    approved: 20,
    rejected: 5,
  };

  // Data for pie chart
  const pieData = [
    { name: "Pending", value: stats.pending, color: "#fbbf24" },
    { name: "In Review", value: stats.inReview, color: "#60a5fa" },
    { name: "Approved", value: stats.approved, color: "#34d399" },
    { name: "Rejected", value: stats.rejected, color: "#f87171" },
  ];

  // Static data for recent requests
  const recentRequests = [
    { id: "REQ001", service: "Latest E.C", status: "Pending", updated: "2024-03-15" },
    { id: "REQ002", service: "Latest Market Value Certificate", status: "Approved", updated: "2024-03-14" },
    { id: "REQ003", service: "Water Feasibility Certificate", status: "In Review", updated: "2024-03-13" },
  ];

  return (
    <MemberLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Requests</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <FaFileAlt className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.pending}</p>
              </div>
              <FaHourglassHalf className="text-yellow-400 text-xl" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">In Review</p>
                <p className="text-2xl font-bold text-blue-400">{stats.inReview}</p>
              </div>
              <FaHourglassHalf className="text-blue-400 text-xl" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Approved</p>
                <p className="text-2xl font-bold text-green-400">{stats.approved}</p>
              </div>
              <FaCheck className="text-green-400 text-xl" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Rejected</p>
                <p className="text-2xl font-bold text-red-400">{stats.rejected}</p>
              </div>
              <FaTimes className="text-red-400 text-xl" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Request Status Distribution</h2>
            <div className="flex justify-center">
              <PieChart width={300} height={300}>
                <Pie
                  data={pieData}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>

          {/* Recent Requests Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Requests</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Updated</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{request.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{request.service}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{request.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <Link
            to="/member/request-service"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <FaPlus /> Request a Service
          </Link>
          <Link
            to="/member/documents"
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            <FaFileAlt /> View Documents
          </Link>
        </div>
      </div>
    </MemberLayout>
  );
}

export default Dashboard;
