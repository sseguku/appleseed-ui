"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

// Product data array
const productData = [
  {
    id: 1,

    title: "A Warm Welcome \nto New Beginnings 🌱 ",
    description:
      "For the Future We Prepare, we nurture young minds with love, creativity, and a strong learning foundation. Through play and discovery, we prepare every child for a bright future—because the journey starts here! ",
    buttonText: "Learn More About Us",
    buttonLink: "/about",
    image: "/faces_up.png",
    imageAlt: "Plants in a classroom",
    background: "bg-gradient-to-br from-blue-100 to-blue-200",
    bgColor: "bg-amber-400",
    verticalText: "APPLESEED PRESCHOOL & KINDERGARTEN",
  },
  {
    id: 2,

    title: "Where Play \nMeets Purpose 🎨",
    description:
      "Through fun-filled activities and hands-on learning, we engage little minds in purposeful play. Every day is an opportunity to explore, create, and grow in ways that prepare them for a bright future.",
    buttonText: "Explore Our Programs",
    buttonLink: "/programs",
    image: "/faces_up.png",
    imageAlt: "Our Programs",
    background: "bg-gradient-to-br from-green-100 to-yellow-200",
    bgColor: "bg-yellow-300",
    verticalText: "APPLESEED PRESCHOOL & KINDERGARTEN",
  },
  {
    id: 3,

    title: "Guided by Caring \n Hands 👐",
    description:
      "Our dedicated teachers provide personalized attention, ensuring that each child's unique potential is recognized and celebrated. We guide, nurture, and support every moment of their learning journey.",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
    image: "/faces_up.png",
    imageAlt: "Guided by Caring Hands",
    background: "bg-gradient-to-br from-green-100 to-blue-200",
    bgColor: "bg-blue-300",
    verticalText: "APPLESEED PRESCHOOL & KINDERGARTEN",
  },
  {
    id: 4,

    title: "Small Steps,\n Big Dreams 👣✨",
    description:
      "Give your child the best start in life! Learn more about our enrollment process and secure a spot today.",
    button_text: "See How We Teach",
    buttonText: "Enroll Now",
    buttonLink: "/enrollment",
    image: "/faces_up.png",
    imageAlt: "Enrollement summary image",
    background: "bg-gradient-to-br from-green-100 to-lime-200",
    bgColor: "bg-green-300",
    verticalText: "APPLESEED PRESCHOOL & KINDERGARTEN",
  },
  {
    id: 5,

    title: "Visit Our \n School 👣 🚍🏫",
    description:
      "We'd love to meet you! Schedule a visit to experience Appleseed firsthand and see our nurturing environment in action.",
    buttonText: "Book A Tour",
    buttonLink: "/contact",
    image: "/faces_up.png",
    imageAlt: "Book A Tour",
    background: "bg-gradient-to-br from-green-100 to-pink-200",
    bgColor: "bg-pink-300",
    verticalText: "APPLESEED PRESCHOOL & KINDERGARTEN",
  },
];

export default function Homeslider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
        type: "fraction",
        formatFractionCurrent: (number) =>
          number < 10 ? `0${number}` : number,
        formatFractionTotal: (number) => (number < 10 ? `0${number}` : number),
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass}"></span> <span class="swiper-pagination-separator"></span> <span class="${totalClass}"></span>`;
        },
      }}
      navigation={true}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-screen w-full relative"
    >
      {productData.map((product) => (
        <SwiperSlide key={product.id} className={product.background}>
          <div className="relative w-full h-full flex">
            {/* Social Icons */}
            <div className="absolute right-8 z-10 top-1/2 -translate-y-1/2 flex flex-col gap-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaFacebookF className="text-gray-800" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaInstagram className="text-gray-800" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaYoutube className="text-gray-800" />
              </div>
            </div>

            {/* Page Number */}
            <div className="absolute bottom-8 right-8 text-xl font-medium">
              <span>{product.id < 10 ? `0${product.id}` : product.id}</span>
              <div className="w-6 h-px bg-gray-400 mx-2 inline-block"></div>
              <span className="text-gray-400">05</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-8">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                {/* Vertical Text */}
                {/* <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 transform -rotate-90 origin-left">
                  <p className="text-gray-500 uppercase tracking-wider text-xs whitespace-nowrap">
                    {product.verticalText}
                  </p>
                </div> */}

                {/* Price */}
                {/*   <div className="mb-4">
                  <span className="text-4xl font-bold">
                    <span className="underline decoration-3">
                      {product.price}
                    </span>
                  </span>
                </div> */}

                {/* Product Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight whitespace-pre-line">
                  {product.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 mb-8 max-w-md">
                  {product.description}
                </p>

                {/* Action Button */}
                <div>
                  <Link href={product.buttonLink}>
                    <button className="bg-transparent text-primary uppercase tracking-wide py-3 px-12 border border-gray-400 rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                      {product.buttonText}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Product Image */}
              <div className="relative flex items-center justify-center h-full">
                <div
                  className={`absolute w-3/4 h-3/4 rounded-full ${product.bgColor} opacity-80`}
                ></div>
                <div className="relative z-10">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={400}
                    height={400}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Balu Approved Badge */}
                <div className="absolute top-2 right-0 w-24 h-24">
                  <div className="relative w-full h-full">
                    <Image
                      src="/badge.png"
                      alt="Balu Approved"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
