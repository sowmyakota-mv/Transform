// src/components/SuccessStories.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation"; // Import your scroll animation

interface Story {
  quote: string;
  initials: string;
  name: string;
  position: string;
}

const stories: Story[] = [
  {
    quote: "Implementing their 3D visualization platform elevated our product presentations to an industry-leading standard.",
    initials: "SC",
    name: "Sarah Chen",
    position: "Product Director, TechFlow",
  },
  {
    quote: "The AI-driven user journey they built improved engagement metrics by 35% within the first quarter.",
    initials: "JM",
    name: "James Miller",
    position: "Head of UX, Innovatech",
  },
  {
    quote: "Their immersive VR brand experience created a memorable digital interaction that resonated with our clients worldwide.",
    initials: "AR",
    name: "Anita Roy",
    position: "Marketing Lead, GlobalMedia",
  },
  {
    quote: "The customization tools they developed empowered our team to deliver personalized solutions at scale efficiently.",
    initials: "DP",
    name: "David Parker",
    position: "CTO, FutureWorks",
  },
];

const SuccessStories: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevStory = () => setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  const nextStory = () => setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  const goToStory = (index: number) => setCurrent(index);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollAnimation delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Stories of Success & Impact
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Explore how our innovative solutions have driven measurable outcomes for our clients across diverse industries.
          </p>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="relative">
          <ScrollAnimation delay={300}>
            {/* Story Card */}
            <div className="bg-gradient-to-tr from-blue-50 to-blue-100 shadow-2xl rounded-2xl p-10 min-h-[320px] transition-all duration-500 relative">
              {/* Story Counter */}
              <div className="absolute top-4 right-6 text-gray-400 font-semibold text-sm">
                {current + 1}/{stories.length}
              </div>

              <blockquote className="text-gray-800 text-lg md:text-xl italic mb-8">
                "{stories[current].quote}"
              </blockquote>

              {/* Centered Name & Position */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-2">
                  {stories[current].initials}
                </div>
                <p className="font-semibold text-blue-900 text-center text-lg">{stories[current].name}</p>
                <p className="text-gray-500 text-sm text-center">{stories[current].position}</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Arrows and Dots Container */}
          <div className="flex items-center justify-center mt-6 space-x-6">
            {/* Left Arrow */}
            <button
              onClick={prevStory}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextStory}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
