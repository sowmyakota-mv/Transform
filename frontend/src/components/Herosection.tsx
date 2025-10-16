import React, { useEffect, useState } from "react"; 
import ScrollAnimation from "../animation/ScrollAnimation";

const words = [
  "Innovation",
  "Excellence",
  "Strategy",
  "Leadership",
  "Collaboration",
  "Vision",
  "Optimization",
  "Transformation",
  "Synergy",
  "Scalability",
];

const Herosection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showBg, setShowBg] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowBg(true), 300),
      setTimeout(() => setShowButton(true), 3000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <ScrollAnimation delay={100}>
      <section className="relative h-screen flex items-center justify-center overflow-hidden group">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ${
            showBg ? "scale-100 opacity-100" : "scale-110 opacity-0"
          } group-hover:scale-105`}
          style={{ backgroundImage: "url('/hero-img.jpg')" }}
        ></div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 transition-opacity duration-700"></div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center px-4 md:px-0">
          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
          >
            Transform Your
          </h1>

          {/* Animated keyword */}
          <h2
            className="text-5xl md:text-6xl lg:text-6xl font-bold italic mb-6 bg-clip-text text-transparent drop-shadow-xl"
            style={{ fontFamily: "Montserrat, sans-serif", backgroundImage: "linear-gradient(90deg, #ff7e5f, #feb47b)" }}
          >
            {words[currentWordIndex]}
          </h2>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-200 drop-shadow-md"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Helping you innovate, grow, and succeed with tailored digital solutions.
          </p>

          {/* CTA button */}
          <button
            className={`bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all duration-[1500ms] ${
              showButton ? "scale-100 opacity-100" : "scale-90 opacity-0"
            } shadow-lg`}
          >
            Get Started
          </button>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Herosection;
