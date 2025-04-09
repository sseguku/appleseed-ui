import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChild,
  FaBabyCarriage,
  FaGraduationCap,
  FaStar,
  FaMusic,
  FaSwimmer,
  FaLanguage,
  FaChess,
  FaPalette,
  FaBook,
} from "react-icons/fa";

export default function Programs() {
  // Program data for age-based programs
  const ageBasedPrograms = [
    {
      id: 1,
      title: "Daycare (2-3 years)",
      description:
        "A gentle introduction to school routines with emphasis on social skills, language development, and exploratory play.",
      image: "/baby_class.png",
      icon: <FaBabyCarriage className="text-primary w-6 h-6" />,
      features: [
        "Nurturing environment for first-time school experience",
        "Focus on basic communication and social skills",
        "Structured play and rest periods",
        "Introduction to colors, shapes, and sounds",
      ],
    },
    {
      id: 2,
      title: "KG1 - Kindergarten 1 \n (3-4 yrs)",
      description:
        "Building on foundational skills with increased focus on independence, creativity, and early academic concepts.",
      image: "/middle_class.jpg",
      icon: <FaChild className="text-primary w-6 h-6" />,
      features: [
        "Development of fine and gross motor skills",
        "Introduction to numbers and letter recognition",
        "Collaborative play and group activities",
        "Expression through art, music, and storytelling",
      ],
    },
    {
      id: 3,
      title: "KG2 - Kindergarten 2\n(4-5 years)",
      description:
        "Preparation for primary school with focused learning activities, project work, and enhanced social skills.",
      image: "/reception_class.png",
      icon: <FaStar className="text-primary w-6 h-6" />,
      features: [
        "Pre-reading and writing skills development",
        "Basic numeracy and problem-solving",
        "More complex social interactions and teamwork",
        "Introduction to simple scientific concepts",
      ],
    },
    {
      id: 4,
      title: "Reception Class \n(5-6 years)",
      description:
        "Comprehensive preparation for primary education with balanced academic, social, and creative development.",
      image: "/top_class.jpg",
      icon: <FaGraduationCap className="text-primary w-6 h-6" />,
      features: [
        "Structured literacy and numeracy activities",
        "Critical thinking and independent learning",
        "Project-based exploration",
        "Graduation preparation for primary school",
      ],
    },
  ];

  // Specialized programs data
  const specializedPrograms = [
    {
      id: 1,
      title: "Music & Movement",
      description:
        "Develop rhythm, coordination, and musical appreciation through song, dance, and instrumental activities.",
      icon: <FaMusic className="text-amber-500 w-5 h-5" />,
    },
    {
      id: 2,
      title: "Swimming Program",
      description:
        "Build water confidence and basic swimming skills in our safe, supervised pool with certified instructors.",
      icon: <FaSwimmer className="text-blue-500 w-5 h-5" />,
    },
    {
      id: 3,
      title: "Language Development",
      description:
        "Enhance vocabulary, communication, and early literacy skills through storytelling and interactive activities.",
      icon: <FaLanguage className="text-green-600 w-5 h-5" />,
    },
    {
      id: 4,
      title: "Creative Arts",
      description:
        "Express creativity through various art mediums, developing fine motor skills and artistic appreciation.",
      icon: <FaPalette className="text-purple-500 w-5 h-5" />,
    },
    {
      id: 5,
      title: "STEM Exploration",
      description:
        "Discover science, technology, engineering, and math concepts through hands-on, playful experiments.",
      icon: <FaChess className="text-red-500 w-5 h-5" />,
    },
    {
      id: 6,
      title: "Reading Readiness",
      description:
        "Build a strong foundation for reading through phonics, comprehension, and a love of books.",
      icon: <FaBook className="text-indigo-500 w-5 h-5" />,
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-blue-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                Age-Appropriate Programs for Every Child
              </h1>
              <p className="text-xs md:text-sm text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
                At Appleseed, we offer developmentally appropriate programs
                designed to nurture each child's unique potential through
                play-based learning and exploration.
              </p>
              <Link
                href="/enrollment"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full text-xs transition-colors duration-300"
              >
                Enroll Now
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/programs_hero.jpg"
                  alt="Children in classroom"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      </section>

      {/* Age-Based Programs Section - Improved Design */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-primary font-semibold tracking-wider uppercase text-xs mb-2">
              Our Curriculum
            </span>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Age-Based Programs
            </h2>
            <div className="w-20 h-1 bg-primary/80 mx-auto mt-3"></div>
            <p className="mt-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Our curriculum is thoughtfully designed to meet the developmental
              needs of children at each age group, providing the right balance
              of challenge, support, and exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {ageBasedPrograms.map((program) => (
              <div
                key={program.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Program Image */}
                <div className="h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Program Icon (Centered on top of the card) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-white">
                  {program.icon}
                </div>

                {/* Content */}
                <div className="p-4 pb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 text-center">
                    {program.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 text-center">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5 text-xs">
                          ✓
                        </span>
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <div className="text-center">
                    <Link
                      href={`/programs/${program.id}`}
                      className="inline-block py-1.5 px-4 text-primary border border-primary rounded-full text-xs hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-primary font-semibold tracking-wider uppercase text-xs mb-2">
              Enrichment Activities
            </span>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Specialized Programs
            </h2>
            <div className="w-20 h-1 bg-primary/80 mx-auto mt-3"></div>
            <p className="mt-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              In addition to our core curriculum, we offer specialized programs
              designed to develop specific skills and foster children's diverse
              interests and talents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 mx-auto">
                  {program.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 text-center">
                  {program.title}
                </h3>
                <p className="text-xs text-gray-600 text-center">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-primary font-semibold tracking-wider uppercase text-xs mb-2">
              A Typical Day
            </span>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Daily Schedule
            </h2>
            <div className="w-20 h-1 bg-primary/80 mx-auto mt-3"></div>
            <p className="mt-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Our daily schedule provides a balance of structured activities,
              free play, rest, and outdoor time to support children's
              development and engagement.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 md:p-8 shadow-md max-w-4xl mx-auto">
            <div className="relative overflow-x-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      7:30 AM - 8:30 AM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Arrival & Free Play
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Welcoming activities and free choice play
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      8:30 AM - 9:00 AM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Morning Circle
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Greetings, calendar, weather, songs
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      9:00 AM - 10:00 AM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Core Learning
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Age-appropriate curriculum activities
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      10:00 AM - 10:30 AM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Snack Time
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Healthy snack and social interaction
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      10:30 AM - 11:30 AM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Outdoor Play
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Physical activity and exploration
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      11:30 AM - 12:30 PM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Lunch Time
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Balanced meal and table manners
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      12:30 PM - 2:00 PM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Rest Time
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Quiet rest or nap for younger children
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      2:00 PM - 3:00 PM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Specialized Activities
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Art, music, swimming, or STEM projects
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-xs text-primary font-medium">
                      3:00 PM - 4:30 PM
                    </div>
                    <div className="font-bold text-gray-800 mt-1 text-xs">
                      Closing Activities & Pickup
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Story time, review, and preparation for home
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 text-xs italic">
                * Schedule may vary depending on age group and specific program
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* This "Ready to Join Our Family?" section should remain unchanged */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-primary"
            style={{ opacity: 0.8 }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/join_family_bg.jpg")',
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Enroll your child today and give them the foundation they deserve
              for a lifetime of learning success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enrollment"
                className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
