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
        {/* Contact Info Boxes - Removed redundant max-w-7xl and adjusted padding */}
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
    </div>
  );
}
