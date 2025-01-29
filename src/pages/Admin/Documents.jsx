import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import {
  MdSearch,
  MdFilterList,
  MdVisibility,
  MdDownload,
  MdCheckCircle,
  MdCancel,
  MdAccessTime,
} from "react-icons/md";

function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setcategoryFilter] = useState("all");

  // Mock documents data
  const documents = [
    {
      id: "DOC001",
      name: "Latest E.C",
      category: "certificates",
      member: {
        name: "John Doe",
        email: "john@example.com",
      },
      submittedDate: "2024-03-15",
      status: "pending",
      fileSize: "2.5 MB",
      service: "Property Registration",
    },
    {
      id: "DOC002",
      name: "NOC - Airport Authority",
      category: "noc",
      member: {
        name: "Jane Smith",
        email: "jane@example.com",
      },
      submittedDate: "2024-03-14",
      status: "verified",
      fileSize: "1.8 MB",
      service: "Building Approval",
    },
    {
      id: "DOC003",
      name: "Property Tax Receipt",
      category: "property",
      member: {
        name: "Mike Johnson",
        email: "mike@example.com",
      },
      submittedDate: "2024-03-13",
      status: "rejected",
      fileSize: "3.2 MB",
      service: "Property Registration",
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "certificates", label: "Certificates" },
    { value: "noc", label: "NOC Documents" },
    { value: "property", label: "Property Documents" },
    { value: "utility", label: "Utility Documents" },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === "all" || doc.category === categoryFilter)
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Documents Management
        </h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <MdFilterList className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={categoryFilter}
              onChange={(e) => setcategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Document ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Submitted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${doc.member.name}&background=6366f1&color=fff`}
                            alt={doc.member.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {doc.member.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {doc.member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.submittedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          doc.status
                        )}`}
                      >
                        {doc.status.charAt(0).toUpperCase() +
                          doc.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.fileSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          title="View Document"
                        >
                          <MdVisibility className="text-xl" />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Download"
                        >
                          <MdDownload className="text-xl" />
                        </button>
                        {doc.status === "pending" && (
                          <>
                            <button
                              className="text-green-600 hover:text-green-900"
                              title="Verify"
                            >
                              <MdCheckCircle className="text-xl" />
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900"
                              title="Reject"
                            >
                              <MdCancel className="text-xl" />
                            </button>
                          </>
                        )}
                        {doc.status === "verified" && (
                          <button
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Mark as Pending"
                          >
                            <MdAccessTime className="text-xl" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No documents found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Documents;
