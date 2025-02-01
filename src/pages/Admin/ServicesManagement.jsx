import React, { useState } from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import { services } from "../../services/servicesData";
import {
  MdSearch,
  MdEdit,
  MdDelete,
  MdAdd,
  MdVisibility,
} from "react-icons/md";

function ServicesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [servicesList, setServicesList] = useState(services);

  const filteredServices = servicesList.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Services Management
          </h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"
            onClick={() => {
              /* Add new service modal/page */
            }}
          >
            <MdAdd className="text-xl" />
            Add New Service
          </button>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Service Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Key Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredServices.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-12 w-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {service.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {service.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        <ul className="list-disc list-inside">
                          {service.keyPoints.slice(0, 2).map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                          {service.keyPoints.length > 2 && (
                            <li>And {service.keyPoints.length - 2} more...</li>
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          title="View Details"
                          onClick={() => {
                            /* View service details */
                          }}
                        >
                          <MdVisibility className="text-xl" />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Service"
                          onClick={() => {
                            /* Edit service */
                          }}
                        >
                          <MdEdit className="text-xl" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete Service"
                          onClick={() => {
                            /* Delete service confirmation */
                          }}
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

        {filteredServices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No services found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default ServicesManagement;
