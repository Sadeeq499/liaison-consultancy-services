import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdSearch,
  MdFilterList,
  MdEdit,
  MdDelete,
  MdBlock,
  MdCheckCircle,
  MdAdd,
} from "react-icons/md";

function Members() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock members data
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      joinDate: "2024-01-15",
      status: "active",
      requests: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      joinDate: "2024-02-01",
      status: "blocked",
      requests: 3,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1234567892",
      joinDate: "2024-02-15",
      status: "active",
      requests: 8,
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1234567893",
      joinDate: "2024-03-01",
      status: "blocked",
      requests: 2,
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredMembers = members.filter(
    (member) =>
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || member.status === statusFilter)
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Member Management
          </h1>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <MdAdd /> Add New Member
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search members..."
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Join Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Requests
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${member.name}&background=6366f1&color=fff`}
                            alt={member.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {member.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.joinDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          member.status
                        )}`}
                      >
                        {member.status.charAt(0).toUpperCase() +
                          member.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.requests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        {/* <button
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Edit"
                        >
                          <MdEdit className="text-xl" />
                        </button> */}
                        {member.status === "blocked" ? (
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Unblock"
                          >
                            <MdCheckCircle className="text-xl" />
                          </button>
                        ) : (
                          <button
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Block"
                          >
                            <MdBlock className="text-xl" />
                          </button>
                        )}
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <MdDelete className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No members found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Members;
