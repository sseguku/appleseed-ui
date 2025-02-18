"use client";

import styles from "../../styles/contact.module.css";

import {
  FaChalkboardTeacher,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Large Outlined Circle */}
          <div className="absolute top-8 left-16">
            <div className="w-24 h-24 border-4 border-white/40 rounded-full" />
          </div>

          {/* Medium Shaded Circle */}
          <div className="absolute top-20 right-1/4">
            <div className="w-16 h-16 bg-[#FFE4B5]/30 rounded-full" />
          </div>

          {/* Small Outlined Circle */}
          <div className="absolute top-4 right-20">
            <div className="w-12 h-12 border-2 border-[#FFDAB9]/40 rounded-full" />
          </div>

          {/* Stars - Repositioned */}
          <div className="absolute top-6 left-1/4">
            <div className="w-10 h-10 text-white/40 text-3xl">★</div>
          </div>
          <div className="absolute top-24 right-1/3">
            <div className="w-8 h-8 text-[#FFE4B5]/40 text-2xl">★</div>
          </div>
          <div className="absolute top-12 right-1/4">
            <div className="w-6 h-6 text-white/30 text-sm">★</div>
          </div>

          {/* Semi Circles - New Positions */}
          <div className="absolute top-16 left-1/3">
            <div className="w-20 h-10 border-2 border-white/30 rounded-t-full" />
          </div>
          <div className="absolute top-8 right-1/5">
            <div className="w-16 h-8 border-2 border-[#FFDAB9]/40 rounded-b-full" />
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-4 left-1/4">
            <div className="w-12 h-12 bg-white/20 rounded-full" />
          </div>
          <div className="absolute top-20 left-1/5">
            <div className="w-14 h-7 bg-[#FFE4B5]/20 rounded-t-full" />
          </div>
          <div className="absolute top-12 right-1/6">
            <div className="w-10 h-10 border-2 border-[#FAFAD2]/40 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
        {/* Contact Info Boxes */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Classroom Sessions Box */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 mb-4 text-primary">
                  <FaChalkboardTeacher className="w-full h-full" />
                </div>
                <h3 className="text-md font-bold mb-4 text-gray-800">
                  Classroom Sessions
                </h3>
                <p className="text-sm text-gray-600">
                  Monday - Friday
                  <br />
                  7:00 am to 1:00 pm
                </p>
              </div>
            </div>

            {/* Address Box */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 mb-4 text-primary">
                  <FaMapMarkerAlt className="w-full h-full" />
                </div>
                <h3 className="text-md font-bold mb-4 text-gray-800">
                  Our Address
                </h3>
                <p className="text-sm text-gray-600">
                  Seguku Cell 4,
                  <br />
                  along Entebbe road. Wakiso district. Uganda
                </p>
              </div>
            </div>

            {/* Phone & Email Box */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 mb-4 text-primary">
                  <FaPhoneAlt className="w-full h-full" />
                </div>
                <h3 className="text-md font-bold mb-4 text-gray-800">
                  Phone & Email
                </h3>
                <p className="text-sm text-gray-600">
                  +256782707563 | +256703566433
                  <br />
                  appleseedug@gmail.com
                </p>
              </div>
            </div>

            {/* Support Box */}
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 mb-4 text-primary">
                  <FaHeadset className="w-full h-full" />
                </div>
                <h3 className="text-md font-bold mb-4 text-gray-800">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">
                  Our Customer Support Team is ready
                  <br />
                  and available to help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 ">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              We value open communication and are here to assist you. Whether
              you have questions about our programs, admission process, or would
              like to schedule a visit, please don't hesitate to reach out to
              us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              style={{
                backgroundImage: `repeating-linear-gradient(
                -45deg,
                #EAFAEA,
                #EAFAEA 3px,
                #ffffff 3px,
                #ffffff 10px
              )`,
              }}
            >
              <img
                src="https://i.postimg.cc/dt1gR44G/The-Telephone-Is-Your-Best-Friend.jpg"
                alt="Talk to us"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg relative "
              />
            </div>
            {/* Form Side */}
            <div className={styles.formSide}>
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className={styles.input}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email@yourmail.com"
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className={styles.input}
                />
                <textarea
                  placeholder="Message"
                  className={styles.textarea}
                  rows={6}
                ></textarea>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className={"mt-12"}>
            <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.783368322514!2d32.55168317521424!3d0.23982669975781432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d97bf7b9a0d85%3A0xb041c6f4389d0969!2sAppleseed%20Kindergarten%20%26%20Daycare!5e0!3m2!1sen!2sug!4v1739275381272!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
