import { FaClock, FaBook, FaPalette, FaMusic, FaLeaf, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function Programs() {
  const ageGroups = [
    {
      title: "Infant Program",
      age: "0-2 years",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
      features: [
        "Safe, nurturing environment",
        "Sensory and motor skill development",
        "Gentle introduction to routines"
      ]
    },
    {
      title: "Toddler Program",
      age: "2-3 years",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
      features: [
        "Early socialization and language development",
        "Play-based learning activities",
        "Introduction to structured play"
      ]
    },
    {
      title: "Preschool Program",
      age: "3-4 years",
      image: "https://images.unsplash.com/photo-1543387432-2f1550c2b0f1",
      features: [
        "Hands-on learning and creative expression",
        "Early literacy and numeracy",
        "Outdoor play and group activities"
      ]
    },
    {
      title: "Pre-Kindergarten",
      age: "4-5 years",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      features: [
        "School readiness focus",
        "Problem-solving and collaboration",
        "Basic reading, writing, and math"
      ]
    }
  ];

  const enrichmentPrograms = [
    {
      icon: <FaMusic className="w-6 h-6" />,
      title: "Music & Movement",
      description: "Singing, dancing, and rhythm activities"
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Arts & Creativity",
      description: "Painting, crafts, and storytelling"
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      title: "STEM Exploration",
      description: "Hands-on science and math activities"
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Outdoor & Nature Play",
      description: "Gardening and nature exploration"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Social-Emotional Learning",
      description: "Mindfulness and emotional development"
    }
  ];

  const schedule = [
    { time: "7:30 - 8:30", activity: "Drop-off & Free Play" },
    { time: "8:30 - 9:00", activity: "Morning Circle Time" },
    { time: "9:00 - 10:30", activity: "Learning Activities" },
    { time: "10:30 - 11:00", activity: "Outdoor Play" },
    { time: "11:00 - 11:30", activity: "Story Time" },
    { time: "11:30 - 12:30", activity: "Lunch & Social Time" },
    { time: "12:30 - 2:30", activity: "Nap/Quiet Time" },
    { time: "2:30 - 3:30", activity: "Afternoon Activities" },
    { time: "3:30 - 4:00", activity: "Snack Time" },
    { time: "4:00 - 5:00", activity: "Free Play & Pick-up" }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Left Side Elements */}
          {/* Pencil */}
          <div className="absolute top-6 left-12">
            <div className="w-20 h-2.5 bg-[#FFE4B5]/15 transform -rotate-45">
              <div className="absolute -left-1 w-3 h-2.5" style={{
                clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                background: "rgba(255,218,185,0.15)"
              }}></div>
              <div className="absolute right-0 w-3 h-2.5 bg-white/10"></div>
            </div>
          </div>

          {/* Musical Notes - Moved to left side */}
          <div className="absolute bottom-12 left-20">
            <div className="flex gap-2">
              <div className="w-3 h-6 border-r-2 border-b-2 border-white/15 rounded-br-full"></div>
              <div className="w-3 h-4 border-r-2 border-b-2 border-[#FFE4B5]/15 rounded-br-full"></div>
            </div>
          </div>

          {/* Right Side Elements */}
          {/* Paint Palette */}
          <div className="absolute top-8 right-12">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 bg-[#FFDAB9]/15 rounded-full"></div>
              <div className="absolute top-1 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#FFE4B5]/20 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Background Elements - More Spread Out */}
          {/* ABC Blocks */}
          <div className="absolute top-24 right-1/4">
            <div className="flex gap-1.5">
              <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center text-white/40 text-xs">A</div>
              <div className="w-6 h-6 bg-[#FFE4B5]/10 rounded-lg flex items-center justify-center text-white/40 text-xs">B</div>
              <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center text-white/40 text-xs">C</div>
            </div>
          </div>

          {/* Math Symbols - Moved higher */}
          <div className="absolute top-10 left-1/4 flex gap-3 text-white/15 text-lg">
            <span>+</span>
            <span>÷</span>
            <span>×</span>
          </div>

          {/* Building Blocks - Repositioned */}
          <div className="absolute bottom-16 right-1/3">
            <div className="relative">
              <div className="w-8 h-8 bg-white/10 transform rotate-45"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFE4B5]/10 transform rotate-45"></div>
            </div>
          </div>

          {/* Globe Grid Lines - Made smaller */}
          <div className="absolute top-20 left-1/3">
            <div className="w-16 h-16 rounded-full border border-dashed border-white/10">
              <div className="absolute inset-0 border-t border-white/10 transform rotate-45"></div>
              <div className="absolute inset-0 border-l border-white/10 transform -rotate-45"></div>
            </div>
          </div>

          {/* Dotted Pattern - More spread */}
          <div className="absolute bottom-20 right-1/5 flex flex-wrap gap-1.5 w-12">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/15 rounded-full"></div>
            ))}
          </div>

          {/* Ruler Markings - Repositioned */}
          <div className="absolute bottom-12 left-1/3">
            <div className="w-16 h-4 border border-[#FFE4B5]/10 flex items-center justify-around">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-px h-2 bg-white/15"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-20">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white text-center">
              Our Programs
            </h1>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Age-Based Programs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Age-Based Programs
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Discover our specialized programs designed for each developmental stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ageGroups.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                      <p className="text-base">{program.age}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Special Programs & Enrichment
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Explore our additional programs that enhance learning and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichmentPrograms.map((program, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-primary mb-3">{program.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Daily Schedule
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              A typical day at Appleseed Kindergarten
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center p-3 hover:bg-gray-50">
                  <FaClock className="text-primary mr-3 text-sm" />
                  <span className="font-semibold w-28 text-sm">{item.time}</span>
                  <span className="text-sm text-gray-600">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join Our Family?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block px-6 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/enrollment"
              className="inline-block px-6 py-2 text-sm bg-[#f78508] text-white rounded-lg hover:bg-[#e67707] transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 