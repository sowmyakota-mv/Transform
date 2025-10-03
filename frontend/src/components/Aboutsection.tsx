import React, { useRef, useEffect, useState } from "react";
import aboutImage from "/aboutImg.png";

const Aboutsection: React.FC = () => {
  // Refs for each element
  const imageRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLParagraphElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  // State to track visibility
  const [visible, setVisible] = useState({
    image: false,
    h2: false,
    para1: false,
    para2: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      {
        threshold: 0.3, // trigger when 30% of element is visible
      }
    );

    [imageRef, h2Ref, para1Ref, para2Ref].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden group">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left: Image */}
        <div
          ref={imageRef}
          data-id="image"
          className={`relative w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 transition-all duration-[1200ms] ${
            visible.image ? "opacity-100 scale-125" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={aboutImage}
            alt="Transform UK Team"
            className="w-full max-w-3xl h-auto object-cover scale-125 ml-18"
          />
        </div>

        {/* Text overlay */}
        <div className="absolute top-16 left-8 lg:relative lg:top-auto lg:left-auto lg:w-1/2 lg:ml-20 z-20 text-gray-800">
          {/* Section label */}
          <p
            ref={h2Ref}
            data-id="h2"
            className={`text-orange-500 font-extrabold uppercase mb-4 text-2xl transition-all duration-[1200ms] ${
              visible.h2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            Who We Are
          </p>

          {/* First paragraph */}
          <p
            ref={para1Ref}
            data-id="para1"
            className={`text-base md:text-lg leading-relaxed mb-4 transition-all duration-[1200ms] ${
              visible.para1 ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Welcome to transform your innovation
            </span>
            , we are a full-spectrum digital transformation consultancy rooted
            in strategy, technology, and human-first design. Our mission is to
            help organisations break through complexity, connect data and
            systems, and unlock lasting change for their people, customers, and
            operations.
          </p>

          {/* Second paragraph with arrow */}
          <p
            ref={para2Ref}
            data-id="para2"
            className={`text-base md:text-lg leading-relaxed mb-4 relative inline-block transition-all duration-[1200ms] ${
              visible.para2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            Blending deep sector insight with agile delivery and AI-driven
            technologies, we partner with clients across public and private
            sectors to turn bold ideas into tangible outcomes. We work
            collaboratively — from vision to execution — so that transformation
            sticks{" "}
            <span className="inline-block ml-2">
              <span className="inline-block w-10 h-10 rounded-full bg-orange-500 text-white font-extrabold text-4xl
                flex items-center justify-center transition-all duration-300 ease-in-out
                group-hover:animate-bounce-hover">
                &#8594;
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Bounce animation on hover */}
      <style>
        {`
          @keyframes bounce-hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .group-hover\\:animate-bounce-hover {
            animation: none;
          }
          .group:hover .group-hover\\:animate-bounce-hover {
            animation: bounce-hover 1s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Aboutsection;
