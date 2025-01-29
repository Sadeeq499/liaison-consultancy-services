import React from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdPeople,
  MdRequestPage,
  MdFolder,
  MdSupportAgent,
  MdTrendingUp,
  MdTrendingDown,
} from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Dashboard() {
  // Mock statistics data
  const stats = {
    totalMembers: 1250,
    memberGrowth: "+12%",
    activeRequests: 45,
    requestGrowth: "+8%",
    pendingDocuments: 78,
    documentGrowth: "-5%",
    supportTickets: 23,
    ticketGrowth: "+15%",
  };

  // Mock data for service requests chart
  const requestsData = [
    { month: "Jan", completed: 65, pending: 40 },
    { month: "Feb", completed: 75, pending: 35 },
    { month: "Mar", completed: 85, pending: 45 },
    { month: "Apr", completed: 70, pending: 30 },
    { month: "May", completed: 90, pending: 50 },
    { month: "Jun", completed: 95, pending: 40 },
  ];

  // Mock data for member growth chart
  const memberGrowthData = [
    { month: "Jan", members: 980 },
    { month: "Feb", members: 1050 },
    { month: "Mar", members: 1100 },
    { month: "Apr", members: 1150 },
    { month: "May", members: 1200 },
    { month: "Jun", members: 1250 },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Members */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Members</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stats.totalMembers}
                  </h3>
                  <span className="ml-2 text-sm text-green-500">
                    {stats.memberGrowth}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <MdPeople className="text-2xl text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Active Requests */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Active Requests</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stats.activeRequests}
                  </h3>
                  <span className="ml-2 text-sm text-green-500">
                    {stats.requestGrowth}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <MdRequestPage className="text-2xl text-blue-600" />
              </div>
            </div>
          </div>

          {/* Pending Documents */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Documents</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stats.pendingDocuments}
                  </h3>
                  <span className="ml-2 text-sm text-red-500">
                    {stats.documentGrowth}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <MdFolder className="text-2xl text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">Support Tickets</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {stats.supportTickets}
                  </h3>
                  <span className="ml-2 text-sm text-green-500">
                    {stats.ticketGrowth}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <MdSupportAgent className="text-2xl text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Requests Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Service Requests Overview
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={requestsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#4F46E5" name="Completed" />
                  <Bar dataKey="pending" fill="#FCD34D" name="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Member Growth Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Member Growth Trend
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={memberGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="members"
                    stroke="#4F46E5"
                    name="Total Members"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
