import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../../layouts/website/MainLayout";
import { services } from "../../services/servicesData";

function OurServices() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3"
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive consulting solutions tailored to meet your project
              needs. With 29+ years of experience, we deliver excellence in
              every service we provide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-600 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our services can help bring your
              project to life. Our team of experts is ready to assist you.
            </p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default OurServices;
