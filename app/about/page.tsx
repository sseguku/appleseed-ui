export default function About() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Circles */}
          <div className="absolute top-4 right-8">
            <div className="w-16 h-16 border-4 border-white/40 rounded-full" />
          </div>
          <div className="absolute bottom-8 left-12">
            <div className="w-24 h-24 border-2 border-[#FFE4B5]/50 rounded-full" />
          </div>

          {/* Shapes */}
          <div className="absolute top-12 left-1/4">
            <div className="w-12 h-12 bg-[#FFDAB9]/30 rounded-full" />
          </div>
          <div className="absolute bottom-16 right-1/3">
            <div className="w-20 h-20 bg-white/20 transform rotate-45" />
          </div>
          <div className="absolute top-20 right-1/4">
            <div className="w-16 h-16 bg-[#FFE4C4]/20 rounded-full" />
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-32 left-1/3">
            <div className="w-10 h-10 bg-[#FFF8DC]/30 transform rotate-12" />
          </div>
          <div className="absolute bottom-24 right-1/5">
            <div className="w-14 h-14 border-2 border-[#FAFAD2]/40 rounded-full" />
          </div>

          {/* Lines */}
          <div className="absolute top-8 left-8">
            <div className="w-16 h-1 bg-white/30 transform -rotate-45" />
          </div>
          <div className="absolute bottom-12 right-1/4">
            <div className="w-12 h-1 bg-[#FFEFD5]/40 transform rotate-12" />
          </div>
          <div className="absolute top-16 right-1/3">
            <div className="w-20 h-1 bg-white/25 transform -rotate-12" />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            About us
          </h1>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16">
        {/* Add your about page content here */}
      </main>
    </div>
  );
}
