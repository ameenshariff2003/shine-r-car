import React from "react";
import '../feedback/feedback.scss'
import { Star, Quote, Heart, Sparkles } from "lucide-react";

const feedbacks = [
  {
    name: "Irshad Afridi",
    service: "PPF Installation",
    message: "Got PPF done on my Innova Crysta at Shine R Detailing, Attiguppe — super impressed! Showroom-like finish, fresh interiors, timely and professional service. Great value. Highly recommend!",
    rating: 5,
    avatar: "IA"
  },
  {
    name: "Vignesh K", 
    service: "Headlight Service",
    message: "Visited Shine R Car Detailing for Hyundai i20 headlight replacement — great experience! Owner explained all options clearly, prices were fair, and service was excellent. Highly recommended!",
    rating: 5,
    avatar: "VK"
  },
  {
    name: "Rohith Y D",
    service: "Car Accessories",
    message: "Had a great experience at Shine R Detailing! Got door visors and a cooling cover installed — perfect fit, quick service, and friendly staff. Highly recommended for quality car accessories!",
    rating: 5,
    avatar: "RY"
  },
];

const Feedback = () => {
  return (
    <section className="relative px-6 py-24 bg-white">
      {/* Simplified Background - positioned behind content */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gray-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative -mt-20 z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full border border-gray-200 shadow-lg">
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Customer Love</span>
            <Sparkles className="w-5 h-5 text-yellow-500 animate-spin-slow" />
          </div>
          
          <h2 
className="text-4xl md:text-6xl z-[9999] font-black mb-8 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight"
>
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Real experiences from real customers who trusted us with their vehicles
          </p>
        </div>

        {/* Enhanced Feedback Cards */}
        <div className="grid lg:grid-cols-3 gap-8 relative z-20">
          {feedbacks.map((fb, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 p-8 animate-slide-up"
              style={{
                animationDelay: `${idx * 0.2}s`
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shadow-md">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                  {fb.service}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(fb.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                "{fb.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                  {fb.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{fb.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
            <span>Join</span>
            <span className="font-bold text-xl text-gray-800">500+</span>
            <span>satisfied customers</span>
          </div>
        </div>
      </div>

 
    </section>
  );
};

export default Feedback;