// src/components/ITStrategyConsulting.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { FaCheckSquare } from "react-icons/fa";

const itServicesData = [
  {
    title: "Strategic IT Planning for Growth",
    desc: "Innovic Solutions provides top-tier IT Strategy & Consulting Services aimed at streamlining IT management and structuring IT environments within a growth-oriented business framework.",
    points: [
      "Technology Consulting: Tailored recommendations for platforms, frameworks, and business models.",
      "Risk Management: Identification, management, and mitigation of IT risks.",
      "Business Process Analysis: Examining resources, technologies, strategies, and workflows to provide practical solutions.",
    ],
    img: "/it-strategy.jpg", // sample image
  },
  {
    title: "Transforming Public Sector IT for Impact",
    desc: "Transform UK specializes in helping organizations unlock the full potential of their people through tailored development, strategic guidance, and lasting cultural change.",
    points: [
      "Digital Transformation: Align strategy, systems, and service delivery for operational efficiency.",
      "AI & Data Strategy: Leverage AI and data analytics to drive innovation and streamline operations.",
      "Collaboration with Experts: Work with specialist experts to tackle complex challenges and create lasting impact.",
    ],
    img: "/reporting.jpg", // sample image
  },
];

const ITStrategy: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          IT Strategy & Consulting
        </h1>

        <div className="space-y-20">
          {itServicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 100}>
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                     {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <ul className="list-none space-y-2 text-gray-700">
  {service.points.map((point, i) => {
    const [title, ...rest] = point.split(":");
    return (
      <li key={i} className="flex items-start gap-2">
        <FaCheckSquare className="mt-1 text-blue-600 flex-shrink-0" />
        <span>
          <span className="font-bold">{title}:</span> {rest.join(":").trim()}
        </span>
      </li>
    );
  })}
</ul>

                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITStrategy;
