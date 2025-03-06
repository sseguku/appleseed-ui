import {
  FaPaintBrush,
  FaPuzzlePiece,
  FaBookReader,
  FaGuitar,
  FaUmbrellaBeach,
  FaBook,
  FaGamepad,
  FaWater,
  FaSwimmer,
} from "react-icons/fa";
import Link from "next/link";
import Homeslider from "./components/Homeslider";
import Image from "next/image";
import mCircle from "@/public/morning_circle.jpg";
import homeClass from "@/public/classes_v1.jpg";
import parentHome from "@/public/parents_v1.jpg";
import teacherHome from "@/public/teachers_v2.jpg";
import programHome from "@/public/programs_v1.jpg";

export default function Home() {
  const activities = [
    {
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Painting",
      description: "Children learn to paint",
    },
    {
      icon: <FaPuzzlePiece className="w-6 h-6" />,
      title: "Special Projects",
      description: "Our secret area education ways",
    },
    {
      icon: <FaUmbrellaBeach className="w-6 h-6" />,
      title: "Sand Play",
      description: "All year round we enjoy sand",
    },
    {
      icon: <FaSwimmer className="w-6 h-6" />,
      title: "Little Swimmers",
      description: "Safe, supervised swimming to build confidence and joy!",
    },
    {
      icon: <FaGuitar className="w-6 h-6" />,
      title: "Music & Singing",
      description: "Everybody loves child's singing",
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      title: "Storytime",
      description: "Where learning is a serious fun",
    },
    {
      icon: <FaGamepad className="w-6 h-6" />,
      title: "Table/Floor Toys",
      description: "What kind of toys your kid prefer?",
    },
    {
      icon: <FaBookReader className="w-6 h-6" />,
      title: "Library Reading",
      description: "How many stories our teacher knows?",
    },
    {
      icon: <FaWater className="w-6 h-6" />,
      title: "Water Play",
      description: "Imagine various water activities",
    },
  ];

  return (
    <main className="max-w-7xl py-0 mx-auto">
      <section className="py-0 bg-primary relative">
        <Homeslider />
      </section>
      {/* About Us Section */}
      <section className="py-16 bg-white relative">
        {/* Striped Background */}
        <div className="absolute w-[75%] h-full bottom-0 right-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                #EAFAEA,
                #EAFAEA 3px,
                #ffffff 3px,
                #ffffff 10px
              )`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative z-10 rounded-xl object-cover w-[700px] h-[350px]">
              <Image src={mCircle} alt="Morning Circle" />
            </div>

            {/* Content Column */}
            <div className="text-left lg:pl-8 relative z-10">
              <span className="font-extrabold	text-bases xs:text-base text-primary mb-2 ">
                Our Story
              </span>
              <div className="text-base md:text-3xl lg:text-3xl font-bold text-[#36b54a] mb-6">
                For The Future We Prepare
              </div>

              <p className="text-xs md:text-sm text-justify text-gray-600 leading-relaxed mb-8">
                Welcome to Appleseed Preschool and Kindergarten, where
                curiosity, creativity, and care shape every child's journey. We
                nurture young minds in a warm, engaging environment that
                inspires a lifelong love for learning. With dedicated educators,
                innovative programs, and personalized attention, we help each
                child explore, grow, and thrive at their own pace, laying the
                foundation for a bright future filled with joyful discoveries.
              </p>

              {/* Read More Button */}
              <Link
                href="/about"
                className="inline-block px-4 py-2 bg-[#ff5722] text-sm text-white font-medium rounded-lg hover:bg-[#f4511e] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Updated Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-base md:text-base font-bold text-orange-500 mb-1">
              Our Activities
            </h2>
            <h1 className="text-lg md:text-xl font-extrabold text-white max-w-3xl mx-auto leading-tight mb-4">
              Fun, engaging activities spark curiosity, creativity, and lifelong
              learning!
            </h1>
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center">
                    <div className="text-green-500 ">{activity.icon}</div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xs md:text-sm font-semibold text-white mb-0.5">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-white">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View All Programs Link */}
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-primary-dark transition-colors group"
          >
            View All Programs
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative">
        {/* Contact-style Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circles */}
          <div className="absolute top-4 right-8">
            <div className="w-16 h-16 border-4 border-[#CAE0BC] rounded-full opacity-60" />
          </div>
          <div className="absolute bottom-8 left-12">
            <div className="w-24 h-24 border-4 border-[#E8F3E2] rounded-full opacity-70" />
          </div>

          {/* Shapes */}
          <div className="absolute top-12 left-1/4">
            <div className="w-12 h-12 bg-[#CAE0BC] rounded-full opacity-50" />
          </div>
          <div className="absolute bottom-16 right-1/3">
            <div className="w-20 h-20 bg-[#E8F3E2] transform rotate-45 opacity-60" />
          </div>
          <div className="absolute top-20 right-1/4">
            <div className="w-16 h-16 bg-[#CAE0BC] rounded-full opacity-40" />
          </div>

          {/* Additional Elements */}
          <div className="absolute top-32 left-1/3">
            <div className="w-10 h-10 bg-[#E8F3E2] transform rotate-12 opacity-50" />
          </div>
          <div className="absolute bottom-24 right-1/5">
            <div className="w-14 h-14 border-4 border-[#CAE0BC] rounded-full opacity-60" />
          </div>

          {/* Dots Pattern */}
          <div className="absolute top-1/4 right-1/4 flex gap-3">
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-60"></div>
          </div>

          {/* Curved Lines */}
          <div className="absolute bottom-1/3 left-1/4">
            <div className="w-20 h-20 border-t-4 border-r-4 border-[#E8F3E2] rounded-tr-full opacity-50"></div>
          </div>
          <div className="absolute top-1/4 right-1/3">
            <div className="w-16 h-16 border-b-4 border-l-4 border-[#CAE0BC] rounded-bl-full opacity-50"></div>
          </div>

          {/* Plus Signs */}
          <div className="absolute bottom-20 left-1/3 text-[#CAE0BC] text-4xl opacity-50">
            +
          </div>
          <div className="absolute top-1/3 right-1/4 text-[#E8F3E2] text-4xl opacity-60">
            +
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-xl font-bold text-green-700 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xs md:text-sm text-center text-gray-600 leading-relaxed mb-4 w-3/4 mx-auto">
              Appleseed Preschool & Kindergarten offers a nurturing, play-based
              learning environment with a rich curriculum, passionate teachers,
              engaging activities, and a safe, child-friendly space—building a
              strong foundation for lifelong learning.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Great Teachers - Tilted Square */}
            <div className="relative group max-w-[220px] mx-auto w-full">
              <div className="relative">
                <div className="relative w-full aspect-square transform rotate-3">
                  <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-lg"></div>
                  <Image
                    src={teacherHome}
                    alt="Great Teachers"
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Blue circle icon */}
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✿</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-orange-400 mt-4 mb-2">
                GREAT TEACHERS
              </h3>
              <p className="text-xs text-gray-600">
                Rewarding task of instructing young children between the ages of
                5 and 6 years old
              </p>
            </div>

            {/* Delicious Meals - Circle */}
            <div className="relative group max-w-[220px] mx-auto w-full">
              <div className="relative">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 border-4 border-dashed border-red-500 rounded-full"></div>
                  <div className="w-full h-full object-cover rounded-full">
                    <Image
                      src={homeClass}
                      alt="classes"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Pink circle icon */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🦋</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-red-500 mt-4 mb-2">
                SMALL CLASS SIZES
              </h3>
              <p className="text-xs text-gray-600">
                Healthy meals with balanced nutrition and suitable for each
                children.
              </p>
            </div>

            {/* Excellent Programmes - Tilted Square */}
            <div className="relative group max-w-[220px] mx-auto w-full">
              <div className="relative">
                <div className="relative w-full aspect-square transform -rotate-3">
                  <div className="absolute inset-0 border-4 border-dashed border-green-600 rounded-lg"></div>
                  <Image
                    src={programHome}
                    alt="Great Teachers"
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Green circle icon */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🍎</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-green-600 mt-4 mb-2">
                EXCELLENT PROGRAMMES
              </h3>
              <p className="text-xs text-gray-600">
                The stories, games, quizzes, and worksheets given here are great
                ways for lesson.
              </p>
            </div>

            {/* Satisfied Parents - Changed to Circle */}
            <div className="relative group max-w-[220px] mx-auto w-full">
              <div className="relative">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-full"></div>
                  <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <Image
                      src={parentHome}
                      alt="Satisfied Parents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Yellow circle icon - Repositioned like Small Class Sizes */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🤝</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-blue-400 mt-4 mb-2">
                SATISFIED PARENTS
              </h3>
              <p className="text-xs text-gray-600">
                Parents are more satisfied with our service and teacher when
                they choose us.
              </p>
            </div>
          </div>

          {/* Added Enrollment Link */}
          <div className="text-center mt-12">
            <Link
              href="/enrollment"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors group"
            >
              Begin Your Child's Journey
              <svg
                className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
