import {
  FaGraduationCap,
  FaCheckCircle,
  FaFileAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Enrollment() {
  const whyChoosePoints = [
    {
      title: "Experienced Teachers",
      description: "Passionate, Patient, Skilled, and Nurturing",
    },
    {
      title: "Holistic Development",
      description: "Focus on academic, social, and emotional growth",
    },
    {
      title: "Safe Environment",
      description:
        "A safe, clean, supervised, and child-friendly learning space.",
    },
    {
      title: "Small Class Sizes",
      description:
        "Personalized learning with focused attention for every child.",
    },
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: "Submit Application",
      description:
        "Complete our online application form with basic information about your child.",
      icon: <FaFileAlt className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Schedule a Tour",
      description:
        "Visit our campus and meet our teachers to learn more about our programs.",
      icon: <FaCalendarAlt className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Submit Documents",
      description:
        "Provide required documentation including birth certificate and immunization records.",
      icon: <FaFileAlt className="w-6 h-6" />,
    },
  ];

  const tuitionFees = [
    { level: "Kindergarten 1", fee: "500,000" },
    { level: "Kindergarten 2", fee: "500,000" },
    { level: "Reception", fee: "500,000" },
    { level: "Primary 1", fee: "600,000" },
    { level: "Primary 2", fee: "600,000" },
    { level: "Full Day Kids", fee: "600,000" },
  ];

  const additionalFees = [
    { item: "Main Uniform", fee: "155,000" },
    { item: "Admission Fee", fee: "50,000" },
    { item: "Termly School Package", fee: "50,000" },
  ];

  const faqs = [
    {
      question: "What is the admission age requirement?",
      answer:
        "We accept children from 3 years old for Kindergarten 1, with appropriate age progression for higher classes.",
    },
    {
      question: "What documents are required for enrollment?",
      answer:
        "Required documents include birth certificate, immunization records, previous school records (if applicable), and passport photos.",
    },
    {
      question: "Do you offer transportation services?",
      answer:
        "Yes, we offer transportation services for an additional fee, covering various routes in the surrounding areas.",
    },
    {
      question: "What are the school hours?",
      answer:
        "Regular school hours are from 8:00 AM to 3:30 PM, with early drop-off and late pickup options available.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="relative w-full bg-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Circles */}
          <div className="absolute top-8 right-12">
            <div className="w-20 h-20 border-4 border-white/30 rounded-full" />
          </div>
          <div className="absolute bottom-12 left-16">
            <div className="w-28 h-28 border-2 border-[#FFE4B5]/40 rounded-full" />
          </div>

          {/* Squares */}
          <div className="absolute top-16 left-1/4">
            <div className="w-16 h-16 bg-white/20 transform rotate-45" />
          </div>
          <div className="absolute bottom-20 right-1/3">
            <div className="w-12 h-12 bg-[#FFDAB9]/30 transform -rotate-12" />
          </div>

          {/* Triangles */}
          <div className="absolute top-24 right-1/4">
            <div
              className="w-16 h-16 bg-[#FFE4C4]/20"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </div>
          <div className="absolute bottom-16 left-1/3">
            <div
              className="w-12 h-12 bg-white/15"
              style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
            />
          </div>

          {/* Dots Pattern */}
          <div className="absolute top-12 right-1/3 flex gap-2">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>

          {/* Lines */}
          <div className="absolute bottom-24 right-1/4">
            <div className="w-16 h-1 bg-[#FFEFD5]/30 transform rotate-45"></div>
          </div>
          <div className="absolute top-20 left-1/3">
            <div className="w-20 h-1 bg-white/20 transform -rotate-45"></div>
          </div>

          {/* Stars */}
          <div className="absolute bottom-32 left-1/4 text-2xl text-white/20">
            ★
          </div>
          <div className="absolute top-16 right-1/3 text-xl text-[#FFE4B5]/30">
            ★
          </div>

          {/* Hexagon */}
          <div className="absolute top-28 left-1/5">
            <div
              className="w-12 h-12 bg-white/15"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>

          {/* Diamond */}
          <div className="absolute bottom-20 right-1/5">
            <div className="w-10 h-10 bg-[#FFDAB9]/20 transform rotate-45"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-20">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white text-center">
              Enrollment
            </h1>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Appleseed Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#6E8E59] mb-2">
              Why Choose Appleseed
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-10 bg-primary"></div>
              <FaGraduationCap className="text-primary text-lg" />
              <div className="h-0.5 w-10 bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="text-center bg-primary p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
              >
                <FaCheckCircle className="text-[#EAFAEA] text-2xl mx-auto mb-3" />
                <h3 className="text-lg text-white font-semibold mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-[#EAFAEA]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process Section */}
      <section className="py-12 bg-[#CAE0BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Enrollment Process
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to enroll your child at Appleseed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enrollmentSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="absolute -top-3 left-4 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                  {step.step}
                </div>
                <div className="pt-3">
                  <div className="text-primary text-lg">{step.icon}</div>
                  <h3 className="text-lg font-semibold mt-3 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/enrollment/application"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Start Application
            </a>
          </div>
        </div>
      </section>

      {/* Tuition & Fees Section */}
      <section className="py-12 bg-white relative">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Circles */}
          <div className="absolute top-8 right-12">
            <div className="w-20 h-20 border-8 border-[#CAE0BC] rounded-full opacity-60" />
          </div>
          <div className="absolute bottom-12 left-16">
            <div className="w-28 h-28 border-6 border-[#CAE0BC] rounded-full opacity-50" />
          </div>

          {/* Stars */}
          <div className="absolute top-1/4 right-1/4 text-4xl text-[#CAE0BC] opacity-40">
            ★
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-3xl text-[#CAE0BC] opacity-45">
            ★
          </div>

          {/* Squares */}
          <div className="absolute top-16 left-1/4">
            <div className="w-16 h-16 bg-[#CAE0BC] opacity-25 transform rotate-45" />
          </div>
          <div className="absolute bottom-20 right-1/3">
            <div className="w-12 h-12 bg-[#CAE0BC] opacity-30 transform -rotate-12" />
          </div>

          {/* Semi Circles */}
          <div className="absolute top-1/3 right-16">
            <div className="w-24 h-12 border-8 border-[#CAE0BC] rounded-t-full opacity-40" />
          </div>
          <div className="absolute bottom-1/4 left-20">
            <div className="w-16 h-8 border-8 border-[#CAE0BC] rounded-b-full opacity-45" />
          </div>

          {/* Dots Pattern */}
          <div className="absolute top-20 right-1/3 flex gap-3">
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-50"></div>
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-50"></div>
            <div className="w-3 h-3 bg-[#CAE0BC] rounded-full opacity-50"></div>
          </div>

          {/* Small Decorative Elements */}
          <div className="absolute bottom-16 right-1/4 text-3xl text-[#CAE0BC] opacity-40">
            +
          </div>
          <div className="absolute top-1/2 left-12 text-2xl text-[#CAE0BC] opacity-45">
            ×
          </div>

          {/* Curved Lines */}
          <div className="absolute top-1/4 left-1/3">
            <div className="w-16 h-16 border-4 border-[#CAE0BC] rounded-tr-full opacity-40"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <div className="w-12 h-12 border-4 border-[#CAE0BC] rounded-bl-full opacity-45"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Tuition & Fees
            </h2>
            <p className="text-sm text-gray-600">Academic Year 2024/2025</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tuition Fees Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-primary text-white">
                <h3 className="text-lg font-semibold">
                  Tuition Fees (Per Term)
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {tuitionFees.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-900">{item.level}</span>
                    <span className="text-sm font-semibold">
                      UGX {item.fee}/-
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Fees Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-primary text-white">
                <h3 className="text-lg font-semibold">Additional Fees</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {additionalFees.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-900">{item.item}</span>
                    <span className="text-sm font-semibold">
                      UGX {item.fee}/-
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600">
              Find answers to common enrollment questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-base font-semibold text-[#6E8E59] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
