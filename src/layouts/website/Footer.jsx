import React from "react";
import { images } from "../../assets/index";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={images.logo} alt="Liaison Logo" className="h-12" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-green-700">
                  Liaison
                </span>
                <span className="text-sm text-gray-600">
                  Consultancy Services
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Excellence in Professional Consulting with 29+ years of experience
              in providing top-notch consultancy services.
            </p>
            {/* Mobile Apps Section */}
            <div className="space-y-3 pt-4">
              <h4 className="text-sm font-semibold text-gray-700">
                Get Our Mobile App
              </h4>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 min-w-[180px]">
                  <FaApple className="text-2xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] opacity-80">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold -mt-0.5">
                      App Store
                    </span>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 min-w-[180px]">
                  <FaGooglePlay className="text-2xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] opacity-80">Get it on</span>
                    <span className="text-sm font-semibold -mt-0.5">
                      Google Play
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Services",
                "Projects",
                "Online Services",
                "Career",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <MdOutlineLocationOn className="text-green-700 text-xl" />
                <span>123 Business Avenue, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MdOutlinePhone className="text-green-700 text-xl" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MdOutlineEmail className="text-green-700 text-xl" />
                <span>info@liaisonconsultancy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              />
              <button className="btn-primary w-full py-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Liaison Consultancy Services. All
              rights reserved.
            </div>
            <div className="flex gap-4">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaWhatsapp,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
