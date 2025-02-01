import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdEmail, MdLock } from "react-icons/md";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { images } from "../../assets/index";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/member/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 w-full">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex justify-center mb-6">
            <img src={images.logo} alt="Logo" className="h-12" />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-600 mt-2">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail className="h-5 w-5 text-green-600" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdLock className="h-5 w-5 text-green-600" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 hover:bg-white transition-colors duration-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-green-700 hover:text-green-800"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2.5 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign in
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <FaGoogle className="text-xl text-gray-600" />
              </button>
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <FaFacebookF className="text-xl text-gray-600" />
              </button>
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <FaApple className="text-xl text-gray-600" />
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-green-700 hover:text-green-800"
            >
              Sign up
            </Link>
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3"
            alt="Login"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
