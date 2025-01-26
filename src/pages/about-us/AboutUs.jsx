import React from "react";
import MainLayout from "../../layouts/website/MainLayout";
import { motion } from "framer-motion";

function AboutUs() {
  const achievements = [
    { number: "29+", text: "Years of Experience" },
    { number: "500+", text: "Projects Completed" },
    { number: "1000+", text: "Happy Clients" },
    { number: "50+", text: "Expert Team Members" },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    },
    {
      name: "Michael Chen",
      position: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    },
    {
      name: "Emily Brown",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3"
            alt="Office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              About Liasion Consultancy
            </h1>
            <p className="text-xl">
              Excellence in Professional Consulting Since 1995. We bring
              expertise, innovation, and dedication to every project we
              undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
                alt="Modern Building"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                For nearly three decades, Liasion Consultancy Services has been
                at the forefront of professional consulting in the construction
                and development sector. We've built our reputation on delivering
                exceptional results through innovative solutions and unwavering
                commitment to excellence.
              </p>
              <p className="text-gray-600">
                Our comprehensive range of services includes structural
                engineering, architectural design, environmental compliance, and
                various regulatory approvals. We pride ourselves on our ability
                to navigate complex challenges while maintaining the highest
                standards of quality and professionalism.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide innovative and sustainable consulting solutions that
                exceed client expectations while maintaining the highest
                standards of professional excellence and integrity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading consultancy firm recognized for transforming
                the built environment through innovative solutions and
                sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2">
                  {achievement.number}
                </h3>
                <p className="text-lg">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AboutUs;
