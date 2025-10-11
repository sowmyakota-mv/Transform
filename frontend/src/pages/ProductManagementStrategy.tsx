// src/components/ProductManagementStrategy.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { FaCheckSquare } from "react-icons/fa";

const productServicesData = [
  {
    title: "Custom Application Development",
    desc: `We craft tailored digital products using modern frameworks and open technologies like Java, .NET, PHP, and Node.js. From third-party software integrations to full-scale mobile applications, our approach focuses on scalable architecture, beautiful UX, and exceptional performance across devices.`,
    points: [
      "Full-stack development using modern frameworks.",
      "Cross-platform mobile app design for iOS and Android.",
      "Integration with enterprise-grade APIs and software.",
      "Performance-first architecture ensuring long-term scalability.",
    ],
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Application Maintenance & Legacy Migration",
    desc: `We help modernize legacy applications while maintaining business continuity. Our maintenance and migration services ensure zero downtime, optimized system performance, and future-proof scalability with secure cloud-native transitions.`,
    points: [
      "Continuous monitoring, debugging, and version upgrades.",
      "Legacy system migration to modern architectures.",
      "Cloud-native transformations ensuring zero downtime.",
      "Dedicated support teams for proactive maintenance.",
    ],
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Product Management Fundamentals",
    desc: `A structured product management approach helps teams align strategy, design, and delivery. We define clear product visions, create MVPs for fast validation, and use Agile governance to drive iterative growth.`,
    points: [
      "Defining and communicating clear product vision.",
      "MVP design and validation with real-world users.",
      "Agile workflows and sprint-based product delivery.",
      "End-to-end lifecycle management and optimization.",
    ],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Strategic Vision & Roadmapping",
    desc: `We turn product visions into actionable roadmaps. Using value-effort prioritization and transparent planning, we ensure every initiative aligns with measurable goals and business outcomes.`,
    points: [
      "Goal-oriented strategy formulation.",
      "Prioritization using value-effort frameworks.",
      "Data-driven progress tracking and reporting.",
      "Stakeholder-aligned roadmap execution.",
    ],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI & Data-Driven Product Strategy",
    desc: `Integrating AI into product strategy enables smarter insights, automated decision-making, and predictive outcomes. We help businesses turn data into intelligence, optimizing both customer experiences and internal operations.`,
    points: [
      "Embedding AI models into product ecosystems.",
      "Predictive analytics for smarter decisions.",
      "Automation to enhance scalability and speed.",
      "Data-first strategies for measurable outcomes.",
    ],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
];

const ProductManagementStrategy: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 py-36 -mb-48">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-24">
          Product Management & Strategy
        </h1>

        {productServicesData.map((service, idx) => (
          <ScrollAnimation key={idx} delay={idx * 150 + 100}>
            <div className="mb-28">
              {/* Section title and text */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Image and highlights */}
<div className="relative flex flex-col items-center">
  <div className="rounded-3xl overflow-hidden shadow-xl w-full max-w-3xl"> {/* reduced from max-w-5xl */}
    <img
      src={service.img}
      alt={service.title}
      className="w-full h-[420px] object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
    />
  </div>

  <div className="bg-white shadow-lg rounded-3xl mt-[-60px] p-8 md:p-10 max-w-3xl mx-auto relative z-10">
    <ul className="list-none space-y-2 text-gray-700">
      {service.points.map((point, i) => {
        const [title, ...rest] = point.split(":");
        return (
          <li key={i} className="flex items-start gap-2 text-base md:text-lg">
            <FaCheckSquare className="mt-1 text-blue-600 flex-shrink-0" />
            <span>
              {rest.length > 0 ? (
                <>
                  <span className="font-bold">{title}:</span> {rest.join(":").trim()}
                </>
              ) : (
                point
              )}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
</div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default ProductManagementStrategy;
