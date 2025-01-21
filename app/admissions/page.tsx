export default function Admissions() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
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

          {/* Semi Circles */}
          <div className="absolute bottom-8 right-1/3">
            <div className="w-16 h-8 border-2 border-white/30 rounded-t-full" />
          </div>
          <div className="absolute top-24 left-1/3">
            <div className="w-12 h-6 border-2 border-[#FFDAB9]/40 rounded-b-full" />
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
            Admissions
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
        {/* Add your admissions content here */}
      </main>
    </div>
  );
}
