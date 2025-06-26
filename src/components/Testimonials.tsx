import { useState } from "react";
import { ChevronLeft, ChevronRight, Upload, X } from "lucide-react";

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
    name: "your name",
    company: "Company",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis magnam fuga saepe, dolorum quasi pariatur, esse veniam distinctio maiores assumenda quidem eos illo. Rem quibusdam distinctio perspiciatis molestiae minus?",
    avatar:
      "",
  },
  
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    role: "",
    company: "",
    text: "",
    rating: 5,
    image: null as File | null,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReviewForm({ ...reviewForm, image: file });
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setReviewForm({ ...reviewForm, image: null });
  };

  const handleReviewSubmit = () => {
    // Validate required fields
    if (
      !reviewForm.name ||
      !reviewForm.role ||
      !reviewForm.company ||
      !reviewForm.text
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Handle form submission here
    console.log("Review submitted:", reviewForm);
    setShowReviewForm(false);
    setReviewForm({
      name: "",
      role: "",
      company: "",
      text: "",
      rating: 5,
      image: null,
    });
    setImagePreview(null);
  };

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
    <section className="relative bg-background min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            What{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              people
            </span>{" "}
            say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            build in progress
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-slate-800/80 border shadow-lg hover:shadow-xl ${
                index === 0
                  ? "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700"
                  : index === 1
                    ? "border-cyan-200 dark:border-cyan-800 hover:border-cyan-300 dark:hover:border-cyan-700"
                    : "border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700"
              }`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index === 0
                    ? "bg-blue-500/5"
                    : index === 1
                      ? "bg-cyan-500/5"
                      : "bg-purple-500/5"
                }`}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  {testimonial.text}
                </p>

                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`${
                      index === 0
                        ? "text-blue-500"
                        : index === 1
                          ? "text-cyan-500"
                          : "text-purple-500"
                    }`}
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-110 shadow-md"
            disabled={testimonials.length <= 3}
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 w-8"
                      : "bg-slate-400 dark:bg-slate-600 w-2 hover:bg-slate-500 dark:hover:bg-slate-500"
                  }`}
                />
              ),
            )}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-110 shadow-md"
            disabled={testimonials.length <= 3}
          >
            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Leave a Review Section */}
        <div className="text-center pb-20">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showReviewForm ? "Close Review Form" : "Leave a Review"}
          </button>

          {showReviewForm && (
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-xl">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Share Your Experience
                </h3>

                <div className="space-y-8">
                  {/* Image Upload Section */}
                  <div className="flex flex-col items-center space-y-4">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Profile Picture
                    </label>

                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-24 h-24 rounded-full object-cover border-4 border-slate-200 dark:border-slate-600 shadow-lg"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer">
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-slate-50 dark:bg-slate-700">
                          <Upload className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                      Upload a profile picture (optional)
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.name}
                        onChange={(e) =>
                          setReviewForm({ ...reviewForm, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                        Role/Position *
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewForm.role}
                        onChange={(e) =>
                          setReviewForm({ ...reviewForm, role: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="e.g., CEO, Marketing Director"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewForm.company}
                      onChange={(e) =>
                        setReviewForm({
                          ...reviewForm,
                          company: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={reviewForm.text}
                      onChange={(e) =>
                        setReviewForm({ ...reviewForm, text: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
                      placeholder="Tell us about your experience working with Evolvion. What made it special? How did we help achieve your goals?"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowReviewForm(false);
                        setImagePreview(null);
                        setReviewForm({
                          name: "",
                          role: "",
                          company: "",
                          text: "",
                          rating: 5,
                          image: null,
                        });
                      }}
                      className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleReviewSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
