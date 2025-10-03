import React from "react";
import { Atom, Cpu, Sparkles } from "lucide-react"; // icons
import card1Img from "/3d-img.jpg";
import card2Img from "/ai-img.jpg";
import card3Img from "/animation-img.jpg";
import ScrollAnimation from "../animation/ScrollAnimation";

const WhyDifferent: React.FC = () => {
  const features = [
    {
      title: "Interactive 3D Models",
      desc: "Users can rotate, zoom, and interact with product mockups in real-time, creating engaging experiences that drive conversions.",
      icon: <Atom className="w-8 h-8 text-white" />,
      img: card1Img,
      bg: "bg-purple-50",
      hoverBg: "hover:bg-purple-700", // darker purple
      iconBg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "AI-Enhanced Experiences",
      desc: "Smart personalization algorithms that adapt content and interactions based on user behavior and preferences.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      img: card2Img,
      bg: "bg-orange-50",
      hoverBg: "hover:bg-orange-600", // darker orange
      iconBg: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400",
    },
    {
      title: "Cutting-Edge Animations",
      desc: "Smooth transitions, micro-interactions, and fluid animations that create memorable user experiences.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      img: card3Img,
      bg: "bg-pink-50",
      hoverBg: "hover:bg-pink-600", // darker pink
      iconBg: "bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollAnimation delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why We're Different
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            Discover the cutting-edge technologies and innovative approaches that
            set us apart from the competition.
          </p>
        </ScrollAnimation>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <div
                className={`relative rounded-2xl shadow-md transition-all overflow-hidden group ${item.bg} ${item.hoverBg} 
                  hover:shadow-xl hover:scale-110 transform`}
              >
                {/* Full-width card image with gradient overlay */}
                <div className="relative w-full h-42 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
                </div>

                {/* Card content */}
                <div className="transition-colors duration-500">
                  {/* Icon */}
                  <div className="flex mb-4 mt-5 px-4">
                    <div
                      className={`p-4 rounded-xl flex items-center justify-center shadow-md ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-left px-4 text-gray-900 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 group-hover:text-gray-200 text-left px-4 pb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
