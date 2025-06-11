import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jon Breitegan",
    company: "Spectrum",
    text: "Evolvion company absolutely nailed it! Their professionalism in website development made the process smooth and enjoyable.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Grant Bolton",
    company: "Bolton & AL",
    text: "Expert SaaS developers! They built a scalable, high-performing platform with seamless features. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Michelle Blake",
    company: "Auto-Auctions",
    text: "We've had an amazing experience with Evolvion—excellent communication, efficiency, and a deep understanding of our goals.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Chen",
    company: "TechFlow",
    text: "Outstanding work! The team delivered beyond our expectations with innovative solutions and exceptional attention to detail.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "David Rodriguez",
    company: "InnovateLab",
    text: "Professional, reliable, and creative. Evolvion transformed our vision into a powerful digital platform that drives results.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3),
    );
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="relative ">
     <img className="absolute opacity-25" src="/herobg.png" alt="blured background-image " />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              clients
            </span>{" "}
            say
          </h2>
          <p className="px-16 text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            With hundreds of websites completed, we bring a proven track record
            of developing websites and delivering exceptional solutions for
            clients across industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                index === 0
                  ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                  : index === 1
                    ? "bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20"
                    : "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20"
              }`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index === 0
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    : index === 1
                      ? "bg-gradient-to-br from-teal-500/10 to-cyan-500/10"
                      : "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                }`}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-200 leading-relaxed text-base">
                  {testimonial.text}
                </p>

                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
            disabled={testimonials.length <= 3}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-500 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ),
            )}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
            disabled={testimonials.length <= 3}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
