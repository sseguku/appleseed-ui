"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaChevronCircleUp,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f1f1f1] pb-0">
      {/* Quick Contact Section */}
      <div className="max-w-7xl mx-auto pt-8 md:pt-12 px-6 md:px-8 lg:px-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-3 md:mb-4">
          Quick Contact
        </h3>
        <p className="text-xs md:text-sm text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Get in touch with us for any inquiries about our programs and
          admission process
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 md:mb-3">
              <FaMapMarkerAlt className="text-white text-xs md:text-base" />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Our Location
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              Seguku Cell 4 along Entebbe Road
              <br />
              Wakiso District, Uganda
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 md:mb-3">
              <FaPhone className="text-white text-xs md:text-base" />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Phone Number
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              +256782707563
              <br />
              +256703566433
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 md:mb-3">
              <FaEnvelope className="text-white text-xs md:text-base" />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              Email ID
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              appleseedug@gmail.com
              <br />
              info@appleseedschools.com
            </p>
          </div>

          {/* School Time */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 md:mb-3">
              <FaClock className="text-white text-xs md:text-base" />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
              School Time
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              8am to 5pm, Mon to Fri
              <br />
              9am to 1am sat
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 md:mt-16 bg-[#3d8a97]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-6 px-6 md:px-8 lg:px-12">
          <p className="text-xs md:text-sm text-white text-center md:text-left mb-3 md:mb-0">
            Copyright© 2024 Appleseed Schools. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Social Media Icons - Added border-white */}
            <Link
              href="#"
              className="w-6 h-6 md:w-7 md:h-7 rounded-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-xs md:text-sm" />
            </Link>
            <Link
              href="#"
              className="w-6 h-6 md:w-7 md:h-7 rounded-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-white text-xs md:text-sm" />
            </Link>
            <Link
              href="#"
              className="w-6 h-6 md:w-7 md:h-7 rounded-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-xs md:text-sm" />
            </Link>
            <Link
              href="#"
              className="w-6 h-6 md:w-7 md:h-7 rounded-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="text-white text-xs md:text-sm" />
            </Link>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-6 h-6 xl:w-8 md:h-8 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors ml-2 md:ml-4"
              aria-label="Scroll to top"
            >
              <FaChevronCircleUp className="text-white text-xl md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
