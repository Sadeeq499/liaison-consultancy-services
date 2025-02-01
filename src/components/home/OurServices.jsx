import React from "react";
import { motion } from "framer-motion";
import { services } from "../../services/servicesData";

function OurServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Notifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Latest Updates
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-700 hover:shadow-xl transition-shadow duration-300">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-3">
                  New
                </span>
                <p className="text-gray-700">
                  The Transferable Development Rights (TDR) platform under the
                  HMDA jurisdiction is now digitized. All TDRs will be processed
                  exclusively through online only. Citizens can apply for and
                  digitize their manual TDR certificates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-700 hover:shadow-xl transition-shadow duration-300">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-3">
                  New
                </span>
                <p className="text-gray-700">
                  All types of Building Permissions, Occupancy Certificates
                  (O.C), and Layout permissions, Group Housing Permission
                  (except Change of Land Use) fall within the limits of
                  Grampanchayats under the jurisdiction of HMDA limits. These
                  will now be exclusively processed through TG-bPASS only.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="lg:w-2/3">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-800 mb-8"
            >
              Our Services
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 9).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-colors duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* See More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <button className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
                See More Services
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
