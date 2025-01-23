export default function Gallery() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Apple Shape */}
          <div className="absolute top-8 right-1/4">
            <div className="relative w-16 h-16">
              {/* Apple Body */}
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              {/* Apple Stem */}
              <div className="absolute -top-2 left-1/2 w-1.5 h-4 bg-white/40 transform -rotate-12"></div>
              {/* Apple Leaf */}
              <div className="absolute -top-1 left-[60%] w-4 h-4 bg-[#FFE4B5]/40 transform rotate-45 rounded-tl-full"></div>
            </div>
          </div>

          {/* Large Outlined Circle */}
          <div className="absolute top-4 right-8">
            <div className="w-20 h-20 border-4 border-white/40 rounded-full" />
          </div>

          {/* Medium Shaded Circle */}
          <div className="absolute bottom-12 left-1/4">
            <div className="w-16 h-16 bg-[#FFE4B5]/30 rounded-full" />
          </div>

          {/* Small Outlined Circle */}
          <div className="absolute top-16 right-1/3">
            <div className="w-12 h-12 border-2 border-[#FFDAB9]/40 rounded-full" />
          </div>

          {/* Stars */}
          <div className="absolute top-8 left-1/3">
            <div className="w-8 h-8 text-white/40 text-2xl">★</div>
          </div>
          <div className="absolute bottom-16 right-1/4">
            <div className="w-6 h-6 text-[#FFE4B5]/40 text-xl">★</div>
          </div>
          <div className="absolute top-20 left-1/4">
            <div className="w-4 h-4 text-white/30 text-lg">★</div>
          </div>

          {/* Car Shape */}
          <div className="absolute bottom-8 right-1/3">
            <div className="relative w-20 h-10">
              {/* Car Body */}
              <div className="absolute bottom-0 w-20 h-6 bg-white/30 rounded-lg"></div>
              {/* Car Top */}
              <div className="absolute top-0 right-2 w-12 h-4 bg-white/40 rounded-t-lg"></div>
              {/* Wheels */}
              <div className="absolute -bottom-1 left-2 w-4 h-4 border-2 border-white/30 rounded-full"></div>
              <div className="absolute -bottom-1 right-2 w-4 h-4 border-2 border-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-12 right-1/4">
            <div className="w-14 h-14 bg-white/20 rounded-full" />
          </div>
          <div className="absolute bottom-20 left-1/5">
            <div className="w-10 h-5 bg-[#FFE4B5]/20 rounded-t-full" />
          </div>
          <div className="absolute top-28 right-1/5">
            <div className="w-8 h-8 border-2 border-[#FAFAD2]/40 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Gallery
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
        {/* Add your gallery content here */}
      </main>
    </div>
  );
} 