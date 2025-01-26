import React from "react";
import { motion } from "framer-motion";
import { videos } from "../../assets";

function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src={videos.hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">
              Liaison Consultancy Services
            </h1>
            <h2 className="text-3xl mb-4 text-green-400">
              Excellence in Professional Consulting
            </h2>
            <p className="text-xl mb-8">
              Delivering innovative solutions and expert guidance for your
              business success
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
