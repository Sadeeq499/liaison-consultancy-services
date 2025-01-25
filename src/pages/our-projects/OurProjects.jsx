import React, { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../../layouts/website/MainLayout";

function OurProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const notifications = [
    {
      id: 1,
      text: "The Transferable Development Rights (TDR) platform under the HMDA jurisdiction is now digitized. All TDRs will be processed exclusively through online only. Citizens can apply for and digitize their manual TDR certificates.",
      isNew: true,
    },
    {
      id: 2,
      text: "All types of Building Permissions, Occupancy Certificates (O.C), and Layout permissions, Group Housing Permission, (except Change of Land Use) falls within the limits of Grampanchayats under the jurisdiction of HMDA limits will now be exclusively processed through TG-bPASS only and any new applications except CLU will not be entertained in DPMS further. Citizens are requested to apply through TG-bPASS website with the following URL: http://tgbpass.telangana.gov.in from 24th April -2024",
      isNew: true,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "DLR",
      category: "Residential",
      description: "Luxury residential complex with modern amenities",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
      details:
        "A state-of-the-art residential project featuring premium apartments and world-class facilities",
      completion: "2023",
      location: "Hyderabad",
    },
    {
      id: 2,
      name: "ACE Constructions",
      category: "Commercial",
      description: "Modern office space with sustainable design",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
      details: "Eco-friendly commercial complex with smart building technology",
      completion: "2022",
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Aparna Western Meadows",
      category: "Residential",
      description: "Premium gated community development",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3",
      details:
        "Exclusive residential community with extensive landscaping and premium amenities",
      completion: "2023",
      location: "Hyderabad",
    },
    {
      id: 4,
      name: "PMJ Jewellers",
      category: "Commercial",
      description: "Luxury retail showroom",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
      details:
        "High-end retail space with modern security features and elegant design",
      completion: "2024",
      location: "Mumbai",
    },
    {
      id: 5,
      name: "Sudhir Associates",
      category: "Office",
      description: "Corporate headquarters building",
      image:
        "https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3",
      details:
        "Contemporary office space with collaborative areas and modern facilities",
      completion: "2023",
      location: "Delhi",
    },
    {
      id: 6,
      name: "Spira Duck Industries",
      category: "Industrial",
      description: "Manufacturing facility and warehouse",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      details:
        "State-of-the-art industrial complex with advanced manufacturing capabilities",
      completion: "2024",
      location: "Chennai",
    },
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Office",
    "Industrial",
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
            alt="Projects"
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
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl">
              Discover our portfolio of successful projects across various
              sectors. Each project reflects our commitment to excellence and
              innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-semibold">{project.location}</p>
                      <p>Completed: {project.completion}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500">{project.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Updates
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-700"
              >
                {notification.isNew && (
                  <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-3">
                    New
                  </span>
                )}
                <p className="text-gray-700">{notification.text}</p>
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
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. Our team
              is ready to provide expert consultation for your next project.
            </p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default OurProjects;
