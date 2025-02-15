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
    <main className="max-w-7xl mx-auto">
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
              <span className="text-sm md:text-base font-medium text-primary mb-2 ">
                Our Motto
              </span>
              <div className="text-base md:text-3xl lg:text-3xl font-bold text-[#36b54a] mb-6">
                For The Future We Prepare
              </div>
              <p className="text-xs md:text-sm text-justify text-gray-600 leading-relaxed mb-8">
                Welcome to Appleseed Preschool and Kindergarten, where
                curiosity, creativity, and care shape every child’s journey. We
                nurture young minds in a warm, engaging environment that
                inspires a lifelong love for learning. With dedicated educators,
                innovative programs, and personalized attention, we help each
                child explore, grow, and thrive at their own pace, laying the
                foundation for a bright future filled with joyful discoveries.
              </p>

              {/* Read More Button */}
              <Link
                href="/about"
                className="inline-block px-4 py-2 bg-[#ff5722] text-sm text-white font-medium rounded-md hover:bg-[#f4511e] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Updated Title Section */}
          <div className="text-center mb-12">
            <h3 className="text-sm md:text-base font-bold text-black mb-1">
              Our Activities
            </h3>
            <h2 className="text-lg md:text-xl font-extrabold text-[#6E8E59] max-w-3xl mx-auto leading-tight mb-4">
              Fun, engaging activities spark curiosity, creativity, and lifelong
              learning!
            </h2>
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#EAFAEA] flex items-center justify-center">
                    <div className="text-primary">{activity.icon}</div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xs md:text-sm font-semibold text-primary mb-0.5">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
