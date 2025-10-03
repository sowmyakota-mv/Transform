// src/components/RegisterCTA.tsx
import React from "react";
import CTAImage from "/register-img.jpg"; 
import ScrollAnimation from "../animation/ScrollAnimation";

const RegisterCTA: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 relative overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
<ScrollAnimation>
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Column - Text */}
        <div className="lg:w-[60%] text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
            Embark on a Journey to Transformative Innovation
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Dive into immersive experiences, cutting-edge solutions, and interactive demonstrations designed to elevate your digital strategy. Let’s create something extraordinary together.
          </p>
          <a
            href="/join-experience"
            className="inline-block px-8 py-4 rounded-lg bg-white text-blue-700 font-bold text-lg hover:bg-gray-100 transition"
          >
            Begin Your Experience
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-[30%] flex justify-center lg:justify-end">
          <img
            src={CTAImage}
            alt="Interactive Experience"
            className="w-full max-w-sm rounded-xl shadow-xl"
          />
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default RegisterCTA;
