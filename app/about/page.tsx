import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaQuoteLeft,
  FaHeart,
  FaStar,
  FaBook,
  FaHandsHelping,
  FaLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function About() {
  // Core values data
  const coreValues = [
    {
      icon: <FaHeart className="text-red-500 w-6 h-6" />,
      title: "Nurturing Care",
      description:
        "We create a loving environment where each child feels safe, valued, and supported.",
    },
    {
      icon: <FaStar className="text-amber-500 w-6 h-6" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in early childhood education.",
    },
    {
      icon: <FaBook className="text-blue-500 w-6 h-6" />,
      title: "Lifelong Learning",
      description:
        "We instill a love for discovery that extends beyond the classroom.",
    },
    {
      icon: <FaHandsHelping className="text-green-600 w-6 h-6" />,
      title: "Community",
      description:
        "We foster strong relationships between school, families, and the wider community.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 w-6 h-6" />,
      title: "Innovation",
      description:
        "We embrace new approaches to meet the evolving needs of our children.",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Mrs. Kakande Angella",
      role: "Head Teacher",
      image: "/kakande_angella.jpg",
      description:
        "Leading our dedicated team with passion and expertise in early childhood development.",
    },
    {
      name: "Tr. Edith Nabossa",
      role: "Lead Teacher, Reception",
      image: "/edith_nabossa.jpg",
      description:
        "Guiding our eldest students with creative approaches to primary school preparation.",
    },
    {
      name: "Tr. Faith Nyafunyo",
      role: "Lead Teacher, KG2",
      image: "/faith_nyafunyo.jpg",
      description:
        "Nurturing curiosity and foundational skills in our KG2 classroom.",
    },
    {
      name: "Tr. Laila",
      role: "Lead Teacher, KG1",
      image: "/tr_laila.jpg",
      description:
        "Creating a joyful environment for our KG1 students to explore and grow.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Appleseed Academy
            </h1>
            <div className="w-24 h-1 bg-primary/80 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
              Where young minds grow, learn, and blossom in a nurturing
              environment
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* Welcome & Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/welcome_about_image.jpg"
                  alt="Children playing at Appleseed"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 -z-10"></div>
            </div>

            <div>
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                Welcome to Appleseed
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                Our Story
              </h2>

              <div className="mb-8 relative">
                <FaQuoteLeft className="text-primary/20 w-12 h-12 absolute -top-6 -left-6" />
                <p className="text-sm text-gray-700 mb-4 relative z-10">
                  Founded with a vision to provide exceptional early education,
                  Appleseed Academy has grown into a vibrant learning community
                  where children discover the joy of learning.
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  Our journey began with a simple belief: that every child
                  deserves a strong foundation for lifelong learning in an
                  environment that feels like a second home.
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  Our motto,{" "}
                  <span className="italic text-primary font-bold">
                    "For the future we prepare,"
                  </span>{" "}
                  guides everything we do.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white text-xs font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Visit Our School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-primary/10 rounded-full translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-amber-400/10 rounded-full translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/2 w-24 h-24 bg-amber-400/20 rounded-full blur-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Mission, Vision & Values
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              Our guiding principles shape everything we do at Appleseed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md backdrop-blur-sm bg-white/90">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">M</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-gray-700">
                To provide a nurturing, innovative educational environment that
                empowers young children to develop a love for learning, build
                confidence, and cultivate the skills needed for future success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md backdrop-blur-sm bg-white/90">
              <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">V</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-gray-700">
                To be recognized as a leading early childhood education center
                where children thrive academically, socially, and emotionally,
                prepared to make positive contributions to their communities.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-white/90"
              >
                <div className="mx-auto w-10 h-10 flex items-center justify-center mb-3">
                  {value.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                Our Approach
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                Educational Philosophy
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-sm text-gray-700">
                  At Appleseed, we embrace a balanced approach to early
                  childhood education that combines the best elements of
                  play-based learning with structured activities that prepare
                  children for academic success.
                </p>
                <p className="text-sm text-gray-700">
                  We believe that children learn best when they are actively
                  engaged, curious, and having fun. Our curriculum is designed
                  to nurture the whole child—intellectually, socially,
                  emotionally, and physically.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="text-xs font-bold text-gray-900 mb-1">
                      Play-Based Learning
                    </h4>
                    <p className="text-xs text-gray-600">
                      Discovery through guided play and exploration
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="text-xs font-bold text-gray-900 mb-1">
                      Holistic Development
                    </h4>
                    <p className="text-xs text-gray-600">
                      Nurturing cognitive, social, and emotional growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/50 to-green-100/50 rounded-xl -z-10 transform rotate-3"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/philosophy_image.jpg"
                  alt="Learning through play at Appleseed"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">
              Our Educators
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-2">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-primary/80 mx-auto mb-4"></div>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              Dedicated professionals committed to nurturing young minds
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-600">
              Our entire staff is committed to providing the best possible
              experience for your child.
            </p>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-xl -z-10 transform -rotate-2"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/community_image.jpg"
                  alt="Appleseed community involvement"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                Beyond The Classroom
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">
                Community Involvement
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-sm text-gray-700">
                  At Appleseed, we believe that education extends beyond our
                  classroom walls. We actively engage with our community and
                  encourage family participation in various initiatives.
                </p>

                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Parent Football Team
                  </h4>
                  <p className="text-xs text-gray-700">
                    Our parent community comes together through our football
                    team, participating in local tournaments and strengthening
                    the bonds between families and the school.
                  </p>
                </div>

                <p className="text-sm text-gray-700">
                  We organize regular parent workshops, family days, and
                  community outreach programs that allow our Appleseed family to
                  give back to the wider community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Aspirations Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">
              Looking Forward
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-2">
              Future Aspirations
            </h2>
            <div className="w-20 h-1 bg-primary/80 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-20 -z-10"></div>
              <FaChalkboardTeacher className="text-green-600 w-6 h-6 mb-4" />
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Enhanced Facilities
              </h3>
              <p className="text-xs text-gray-700">
                We're expanding our learning spaces with new specialized areas
                for arts, science, and technology.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 -z-10"></div>
              <FaLightbulb className="text-amber-500 w-6 h-6 mb-4" />
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Innovative Programs
              </h3>
              <p className="text-xs text-gray-700">
                Developing new curriculum approaches that integrate technology,
                sustainability, and global awareness.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full opacity-20 -z-10"></div>
              <FaHandsHelping className="text-purple-600 w-6 h-6 mb-4" />
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Community Partnerships
              </h3>
              <p className="text-xs text-gray-700">
                Building stronger relationships with local businesses,
                organizations, and primary schools.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white text-xs font-medium py-2 px-6 rounded-full transition-colors duration-300"
            >
              Join Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-90"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/cta_background.jpg")',
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Give Your Child the Best Start?
            </h2>
            <p className="text-sm text-white/90 mb-6 max-w-2xl mx-auto">
              Visit our school, meet our team, and see firsthand how we're
              preparing children for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enrollment"
                className="inline-block bg-white text-primary text-xs font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white text-xs font-medium py-2 px-6 rounded-full hover:bg-white/20 transition-colors duration-300"
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
