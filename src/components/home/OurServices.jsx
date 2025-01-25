import React from "react";
import { motion } from "framer-motion";

function OurServices() {
  const services = [
    {
      id: 1,
      title: "Structural Engineer Certificate",
      icon: "/placeholder-structural.png",
      description:
        "Professional certification for structural engineering projects",
    },
    {
      id: 2,
      title: "Architectural & Structural Designs",
      icon: "/placeholder-architectural.png",
      description:
        "Comprehensive architectural and structural design solutions",
    },
    {
      id: 3,
      title: "NOC - Airport Authority",
      icon: "/placeholder-airport.png",
      description: "No Objection Certificates for airport authority compliance",
    },
    {
      id: 4,
      title: "Environmental NOC",
      icon: "/placeholder-environmental.png",
      description: "Environmental clearance and compliance certificates",
    },
    {
      id: 5,
      title: "Link Documents",
      icon: "/placeholder-link.png",
      description: "Essential documentation and linking services",
    },
    {
      id: 6,
      title: "Land & Zone Conversion",
      icon: "/placeholder-land.png",
      description: "Land usage and zoning conversion assistance",
    },
    {
      id: 7,
      title: "Soil-Test Report",
      icon: "/placeholder-soil.png",
      description: "Comprehensive soil testing and analysis reports",
    },
    {
      id: 8,
      title: "NALA Conversion",
      icon: "/placeholder-nala.png",
      description: "Non-Agricultural Land Assessment conversion services",
    },
    {
      id: 9,
      title: "Revenue Sketch",
      icon: "/placeholder-revenue.png",
      description: "Detailed revenue sketch documentation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Notifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 notification-panel"
          >
            <h2 className="text-2xl font-bold mb-6">Notifications</h2>
            <div className="space-y-4">
              <div className="notification-card">
                <span className="notification-badge">New</span>
                <p className="mt-2">
                  The Transferable Development Rights (TDR) platform under the
                  HMDA jurisdiction is now digitized. All TDRs will be processed
                  exclusively through online only. Citizens can apply for and
                  digitize their manual TDR certificates.
                </p>
              </div>
              <div className="notification-card">
                <span className="notification-badge">New</span>
                <p className="mt-2">
                  All types of Building Permissions, Occupancy Certificates
                  (O.C), and Layout permissions, Group Housing Permission
                  (except Change of Land Use) fall within the limits of
                  Grampanchayats under the jurisdiction of HMDA limits. These
                  will now be exclusively processed through TG-bPASS only. Any
                  new applications, except CLU, will not be entertained in DPMS
                  further. Citizens are requested to apply through the TG-bPASS
                  website:{" "}
                  <a
                    href="http://tgbpass.telangana.gov.in"
                    className="underline hover:text-indigo-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tgbpass.telangana.gov.in
                  </a>{" "}
                  from 24th April 2024.
                </p>
              </div>
              <div className="notification-card">
                <span className="notification-badge">New</span>
                <p className="mt-2">
                  The Transferable Development Rights (TDR) platform under the
                  HMDA jurisdiction is now digitized. All TDRs will be processed
                  exclusively online. Citizens can apply for and digitize their
                  manual TDR certificates.
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
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-50"
                >
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
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
              <button
                className="btn-primary"
                onClick={() => {
                  /* Add your navigation logic here */
                }}
              >
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
