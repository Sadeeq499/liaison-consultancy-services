import React from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  MdTrendingUp,
  MdPeople,
  MdAssignment,
  MdDescription,
  MdSupportAgent,
} from "react-icons/md";

function Analytics() {
  // Mock data for charts
  const membershipData = [
    { month: "Jan", active: 120, new: 20 },
    { month: "Feb", active: 150, new: 30 },
    { month: "Mar", active: 180, new: 35 },
    { month: "Apr", active: 220, new: 45 },
    { month: "May", active: 250, new: 40 },
    { month: "Jun", active: 280, new: 35 },
  ];

  const serviceRequestsData = [
    { name: "Technical", value: 35 },
    { name: "Financial", value: 25 },
    { name: "Legal", value: 20 },
    { name: "General", value: 20 },
  ];

  const documentStats = [
    { month: "Jan", submitted: 45, verified: 40 },
    { month: "Feb", submitted: 55, verified: 48 },
    { month: "Mar", submitted: 65, verified: 58 },
    { month: "Apr", submitted: 75, verified: 65 },
    { month: "May", submitted: 85, verified: 75 },
    { month: "Jun", submitted: 95, verified: 82 },
  ];

  const supportStats = [
    { month: "Jan", resolved: 25, new: 30 },
    { month: "Feb", resolved: 35, new: 38 },
    { month: "Mar", resolved: 45, new: 42 },
    { month: "Apr", resolved: 55, new: 50 },
    { month: "May", resolved: 65, new: 58 },
    { month: "Jun", resolved: 75, new: 68 },
  ];

  const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444"];

  // Summary statistics
  const stats = [
    {
      title: "Total Members",
      value: "280",
      change: "+12.5%",
      icon: <MdPeople className="text-2xl" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Active Requests",
      value: "45",
      change: "+8.2%",
      icon: <MdAssignment className="text-2xl" />,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      title: "Documents Verified",
      value: "82",
      change: "+15.3%",
      icon: <MdDescription className="text-2xl" />,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Support Tickets",
      value: "68",
      change: "-5.8%",
      icon: <MdSupportAgent className="text-2xl" />,
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <MdTrendingUp className="text-xl" />
            <span>Last updated: Today at 09:30 AM</span>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-6 rounded-xl shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className={stat.textColor}>{stat.icon}</div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                  <MdTrendingUp
                    className={`text-lg ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {stat.title}
              </h3>
              <p className={`text-3xl font-bold ${stat.textColor} mt-2`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Membership Growth Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Membership Growth
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={membershipData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="#6366f1"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="new"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service Requests Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Service Requests Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceRequestsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {serviceRequestsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Document Statistics */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Document Statistics
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={documentStats}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="submitted" fill="#6366f1" />
                  <Bar dataKey="verified" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Support Ticket Trends */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Support Ticket Trends
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={supportStats}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="new"
                    stroke="#ef4444"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    strokeWidth={2}
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

export default Analytics;
