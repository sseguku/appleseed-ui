export default function Activities() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Geometry Tools */}
          <div className="absolute top-6 right-12">
            {/* Compass */}
            <div className="w-12 h-12 border-3 border-white/40 transform rotate-45 flex items-center justify-center">
              <div className="w-1 h-8 bg-white/40 transform -rotate-45"></div>
            </div>
          </div>

          {/* Replace the Ruler section with this new Crossed Ruler and Pencil */}
          <div className="absolute top-8 left-1/4">
            <div className="relative w-24 h-24">
              {/* Ruler */}
              <div className="absolute w-24 h-3 bg-white/40 transform rotate-45">
                {/* Ruler markings */}
                <div className="flex justify-between w-full">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-0.5 h-1.5 bg-primary/30"></div>
                  ))}
                </div>
              </div>
              {/* Pencil */}
              <div className="absolute w-24 h-3 bg-[#FFE4B5]/40 transform -rotate-45">
                {/* Pencil tip */}
                <div
                  className="absolute -left-1 w-4 h-3"
                  style={{
                    clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                    background: "#FFDAB9/60",
                  }}
                ></div>
                {/* Pencil eraser end */}
                <div className="absolute right-0 w-4 h-3 bg-[#FFF8DC]/40"></div>
              </div>
            </div>
          </div>

          {/* Protractor */}
          <div className="absolute bottom-12 right-1/3">
            <div className="w-16 h-8 border-2 border-[#ffde21]/40 rounded-t-full"></div>
          </div>

          {/* Set Square */}
          <div className="absolute top-20 left-16">
            <div
              className="w-12 h-12 border-2 border-white/30"
              style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
            ></div>
          </div>

          {/* Pencils */}
          <div className="absolute bottom-16 left-1/4">
            <div className="w-1 h-16 bg-[#FFE4C4]/40 transform rotate-45">
              <div className="w-2 h-2 bg-[#FFDAB9]/60 transform -translate-y-1"></div>
            </div>
          </div>

          {/* Stars */}
          <div className="absolute top-12 right-1/4">
            <div className="w-6 h-6 text-white/30">★</div>
          </div>

          {/* Sharpener */}
          <div className="absolute bottom-20 right-20">
            <div className="w-4 h-4 bg-white/20 transform rotate-45"></div>
          </div>

          {/* Rubber/Eraser */}
          <div className="absolute top-24 left-1/3">
            <div className="w-8 h-4 bg-[#FFF8DC]/30 rounded-sm"></div>
          </div>

         

          {/* Pencil Box */}
          <div className="absolute top-32 right-1/3">
            <div className="w-16 h-6 bg-white/20 rounded-sm"></div>
          </div>

         

          {/* Inverted Semi Circle */}
          <div className="absolute bottom-10 left-1/3">
            <div className="w-16 h-8 border-2 border-[#FFE4B5]/40 rounded-b-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Activities
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
        {/* Add your activities content here */}
      </main>
    </div>
  );
}
