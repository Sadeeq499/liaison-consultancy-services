import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { FaSearch, FaFilter, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../../services/servicesData";

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Services" },
    { value: "certificates", label: "Certificates" },
    { value: "noc", label: "NOC" },
    { value: "designs", label: "Designs" },
    { value: "documents", label: "Documents" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600">
            Browse through our comprehensive list of services and submit your
            requests online.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 mb-4  rounded-full flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/member/request-service/${encodeURIComponent(
                    service.title
                  )}`}
                  className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
                >
                  Request Now <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No services found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Services;
