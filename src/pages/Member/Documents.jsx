import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import {
  FaSearch,
  FaFilter,
  FaCloudUploadAlt,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Document categories
  const categories = [
    { value: "all", label: "All Documents" },
    { value: "certificates", label: "Certificates" },
    { value: "noc", label: "NOC Documents" },
    { value: "property", label: "Property Documents" },
    { value: "utility", label: "Utility Documents" },
  ];

  // Mock data for required documents based on services
  const requiredDocuments = [
    {
      id: "DOC001",
      name: "Latest E.C",
      category: "certificates",
      status: "pending",
      service: "Property Registration",
    },
    {
      id: "DOC002",
      name: "Property Tax Receipt",
      category: "property",
      status: "submitted",
      service: "Property Registration",
      submittedDate: "2024-03-15",
      fileSize: "2.5 MB",
    },
    {
      id: "DOC003",
      name: "NOC - Airport Authority",
      category: "noc",
      status: "pending",
      service: "Building Approval",
    },
    {
      id: "DOC004",
      name: "Water Connection Bill",
      category: "utility",
      status: "submitted",
      service: "Utility Connection",
      submittedDate: "2024-03-14",
      fileSize: "1.8 MB",
    },
  ];

  const filteredDocuments = requiredDocuments.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Document Management
          </h1>
          <p className="text-gray-600">
            Upload and manage your documents for various services
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {doc.name}
                  </h3>
                  {doc.status === "pending" ? (
                    <span className="px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                      Pending Upload
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                      Submitted
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Required for: {doc.service}
                </p>
                {doc.status === "submitted" && (
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Submitted: {doc.submittedDate}</p>
                    <p>Size: {doc.fileSize}</p>
                  </div>
                )}
                <div className="flex justify-between items-center mt-4">
                  {doc.status === "pending" ? (
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      <FaCloudUploadAlt /> Upload Document
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <FaEye size={20} />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-800"
                        title="Download"
                      >
                        <FaDownload size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No documents found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Documents;
