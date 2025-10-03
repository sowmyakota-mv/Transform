import React, { useEffect, useState } from "react";

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
  const [showGradient, setShowGradient] = useState(false);
  const [showTransform, setShowTransform] = useState(false);
  const [showKeyword, setShowKeyword] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Rotate words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Staggered animation on mount
  useEffect(() => {
    const timers = [
      setTimeout(() => setShowBg(true), 300),
      setTimeout(() => setShowGradient(true), 600),
      setTimeout(() => setShowTransform(true), 1200),
      setTimeout(() => setShowKeyword(true), 1800),
      setTimeout(() => setShowSubheading(true), 2400),
      setTimeout(() => setShowButton(true), 3000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden group">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ${
          showBg ? "scale-100 opacity-100" : "scale-110 opacity-0"
        } group-hover:scale-105`}
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
      ></div>

      {/* White gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-orange-200/30 transition-opacity duration-[1500ms] ${
          showGradient ? "opacity-60" : "opacity-0"
        }`}
      ></div>

      {/* Black hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Transform Your */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 transition-all duration-[1500ms] ${
            showTransform ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          Transform Your
        </h1>

        {/* Animated keyword */}
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-[1500ms] ${
            showKeyword ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
            {words[currentWordIndex]}
          </span>
        </h2>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl lg:text-2xl text-black mb-8 max-w-xl transition-all duration-[1500ms] ${
            showSubheading ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          Helping you innovate, grow, and succeed with tailored digital solutions.
        </p>

        {/* CTA button */}
        <button
          className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-[1500ms] ${
            showButton ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Herosection;
