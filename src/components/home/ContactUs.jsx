import React from "react";
import { MdEmail, MdPerson, MdChat } from "react-icons/md";

function ContactUs() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdPerson className="h-5 w-5 text-green-600" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="h-5 w-5 text-green-600" />
              </div>
              <input
                type="email"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Subject
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdChat className="h-5 w-5 text-green-600" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
                placeholder="What's this about?"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Send Message
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
