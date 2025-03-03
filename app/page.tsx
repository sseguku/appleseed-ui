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
            <div className="relative">
              <img
                src="https://i.postimg.cc/mgsTzbVt/morning-circle.jpg"
                alt="Children learning"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg relative z-10"
              />
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-xl font-bold text-green-700 mb-4">
              What Makes Us Special
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-orange-300"></div>
              <span className="text-orange-400">♥</span>
              <div className="h-[2px] w-12 bg-orange-300"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base mb-12">
              We have strict criteria when selecting our teachers; they must be
              native English speakers with higher degrees and most importantly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Great Teachers - Tilted Square */}
            <div className="relative group">
              <div className="relative">
                <div className="relative w-full aspect-square transform rotate-3">
                  <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-lg"></div>
                  <img
                    src="https://images.unsplash.com/photo-1548449112-96a38a643324"
                    alt="Great Teachers"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Blue circle icon */}
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✿</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-green-700 mt-6 mb-2">
                GREAT TEACHERS
              </h3>
              <p className="text-xs text-gray-600">
                Rewarding task of instructing young children between the ages of
                5 and 6 years old
              </p>
            </div>

            {/* Delicious Meals - Circle */}
            <div className="relative group">
              <div className="relative">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 border-4 border-dashed border-pink-300 rounded-full"></div>
                  <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51"
                    alt="Delicious Meals"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Pink circle icon */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🦋</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-green-700 mt-6 mb-2">
                SMALL CLASS SIZES
              </h3>
              <p className="text-xs text-gray-600">
                Healthy meals with balanced nutrition and suitable for each
                children.
              </p>
            </div>

            {/* Excellent Programmes - Tilted Square */}
            <div className="relative group">
              <div className="relative">
                <div className="relative w-full aspect-square transform -rotate-3">
                  <div className="absolute inset-0 border-2 border-dashed border-green-300 rounded-lg"></div>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                    alt="Excellent Programmes"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Green circle icon */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🍎</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-green-700 mt-6 mb-2">
                EXCELLENT PROGRAMMES
              </h3>
              <p className="text-xs text-gray-600">
                The stories, games, quizzes, and worksheets given here are great
                ways for lesson.
              </p>
            </div>

            {/* Satisfied Parents - Triangle */}
            <div className="relative group">
              <div className="relative">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 border-2 border-dashed border-yellow-300 clip-triangle"></div>
                  <div className="relative w-full h-full overflow-hidden clip-triangle">
                    <img
                      src="https://images.unsplash.com/photo-1543342384-1f1350e27861"
                      alt="Satisfied Parents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Yellow circle icon */}
                  <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎮</span>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-green-800 mt-6 mb-2">
                SATISFIED PARENTS
              </h3>
              <p className="text-xs text-gray-600">
                Parents are more satisfied with our service and teacher when
                they choose us.
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-pink-100 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-yellow-100 rounded-full opacity-30"></div>
        </div>
      </section>
    </main>
  );
}
