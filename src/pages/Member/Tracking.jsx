import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { FaSearch, FaEye, FaDownload, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Tracking() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - replace with actual API data
  const documents = [
    {
      id: "DOC001",
      name: "Latest E.C",
      submittedDate: "2024-03-15",
      documentType: "Encumbrance Certificate",
      fileSize: "2.5 MB",
    },
    {
      id: "DOC002",
      name: "Market Value Certificate",
      submittedDate: "2024-03-14",
      documentType: "Property Document",
      fileSize: "1.8 MB",
    },
    {
      id: "DOC003",
      name: "Water Feasibility Certificate",
      submittedDate: "2024-03-13",
      documentType: "Utility Document",
      fileSize: "3.2 MB",
    },
  ];

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            My Documents
          </h1>
          <p className="text-gray-600">
            View and manage all your submitted documents
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by document name or ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <motion.tr
                    key={doc.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.documentType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-gray-400" />
                        {doc.submittedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.fileSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="text-blue-600 hover:text-blue-900 mr-4"
                        title="View Document"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Download Document"
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

        {filteredDocuments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No documents found matching your search.
            </p>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Tracking;
