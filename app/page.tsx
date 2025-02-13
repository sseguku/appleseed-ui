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
