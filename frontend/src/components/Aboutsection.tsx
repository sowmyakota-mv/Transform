import React, { useRef, useEffect, useState } from "react";
import aboutImage from "/aboutImg.png";
import { useNavigate } from "react-router-dom";

const Aboutsection: React.FC = () => {
  const navigate=useNavigate()
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
          className="w-full max-w-3xl h-auto object-cover scale-125 -ml-16 rounded-2xl"
        />
      </div>

      {/* Text Section */}
<div
  className={`
    lg:relative lg:top-auto lg:left-auto lg:w-1/2 lg:ml-20 z-20 text-gray-800
    w-full mt-6 lg:mt-0
    ${visible.h2 || visible.para1 || visible.para2 ? "opacity-100" : "opacity-0"} 
    transition-all duration-[1200ms]
  `}
>
  {/* Section label */}
  <p
    ref={h2Ref}
    data-id="h2"
    className={`text-black-400 font-bold uppercase mb-4 text-2xl`}
  >
    Who We Are
  </p>

  {/* First paragraph */}
  <p
    ref={para1Ref}
    data-id="para1"
    className="text-base md:text-lg leading-relaxed mb-4"
  >
    <span className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      Welcome to transform your innovation
    </span>
    , we are a full-spectrum digital transformation consultancy rooted in
    strategy, technology, and human-first design. Our mission is to help
    organisations break through complexity, connect data and systems, and
    unlock lasting change for their people, customers, and operations.
  </p>

  {/* Second paragraph with Learn More button */}
  <div
    ref={para2Ref}
    data-id="para2"
    className="text-base md:text-lg leading-relaxed mb-4"
  >
    Blending deep sector insight with agile delivery and AI-driven
    technologies, we partner with clients across public and private
    sectors to turn bold ideas into tangible outcomes. We work
    collaboratively from vision to execution so that transformation
    sticks.
    <br />
    <button onClick={()=>navigate("/abouttransform")}
      className="mt-4 inline-flex items-center space-x-2 px-4 py-2 text-orange-500 font-semibold transition-all duration-300
      rounded-lg hover:bg-orange-500 hover:text-white hover:shadow-md hover:border hover:border-orange-500"
    >
      <span >Learn More</span>
      <span className="text-xl">&rarr;</span>
    </button>
  </div>
      </div>
    </div>
  </section>
);
};

export default Aboutsection;
