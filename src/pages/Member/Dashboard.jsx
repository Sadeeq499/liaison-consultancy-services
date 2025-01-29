import React from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { FaFileAlt, FaCloudUploadAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  // Static data for documents
  const documentStats = {
    totalSubmitted: 8,
    remainingDocuments: 4,
  };

  // Static data for recent document submissions
  const recentDocuments = [
    { id: "DOC001", name: "Latest E.C", submittedDate: "2024-03-15" },
    {
      id: "DOC002",
      name: "Market Value Certificate",
      submittedDate: "2024-03-14",
    },
    {
      id: "DOC003",
      name: "Water Feasibility Certificate",
      submittedDate: "2024-03-13",
    },
  ];

  // Documents pending for submission
  const remainingDocuments = [
    { id: "RD001", name: "Property Tax Receipt" },
    { id: "RD002", name: "Building Plan" },
    { id: "RD003", name: "Land Ownership Document" },
    { id: "RD004", name: "NOC from Society" },
  ];

  return (
    <MemberLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Documents Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Submitted Documents</p>
                <p className="text-2xl font-bold text-green-600">
                  {documentStats.totalSubmitted}
                </p>
              </div>
              <FaFileAlt className="text-green-500 text-xl" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Remaining Documents</p>
                <p className="text-2xl font-bold text-blue-600">
                  {documentStats.remainingDocuments}
                </p>
              </div>
              <FaCloudUploadAlt className="text-blue-500 text-xl" />
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Submissions */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">
              Recently Submitted Documents
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Document ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Submitted Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentDocuments.map((doc) => (
                    <tr key={doc.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{doc.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.submittedDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Remaining Documents */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Documents to Submit</h2>
            <div className="space-y-3">
              {remainingDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{doc.name}</span>
                  <Link
                    to={`/member/upload-document/${doc.id}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaCloudUploadAlt className="text-xl" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <Link
            to="/member/upload-document"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <FaPlus /> Upload New Document
          </Link>
          <Link
            to="/member/documents"
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            <FaFileAlt /> View All Documents
          </Link>
        </div>
      </div>
    </MemberLayout>
  );
}

export default Dashboard;
