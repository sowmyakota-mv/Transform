// src/components/SustainabilityESG.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const esgServicesData = [
  {
    title: "Designing Sustainable Services",
    desc: `Transform UK emphasizes the importance of integrating sustainability into service design. 
Their approach focuses on creating services that not only meet user needs but also minimize environmental impact 
and promote social value. This involves:`,
    points: [
      "Sustainable Service Design: Incorporating eco-friendly materials and processes into service offerings.",
      "Social Value Creation: Ensuring services contribute positively to communities and society at large.",
      "Stakeholder Engagement: Collaborating with various stakeholders to align services with sustainability goals.",
    ],
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Net Zero Systems Tool",
    desc: `Transform UK's innovative Net Zero Systems Tool aids UK government departments in making informed decisions 
to achieve carbon neutrality. Recognized with the DataIQ Awards - Data for Good - Environmental, Social, and Governance (ESG) Data Award, 
the tool utilizes data visualization to:`,
    points: [
      "Track Emissions: Monitor carbon emissions across various sectors.",
      "Identify Reduction Opportunities: Pinpoint areas where emissions can be reduced.",
      "Support Policy Decisions: Provide data-driven insights to inform sustainability policies.",
    ],
    img: "/zer.jpg",
  },
  {
    title: "ESG Data Integration",
    desc: `Transform UK integrates ESG factors into data strategies, helping organizations align their operations with sustainability goals. 
By embedding ESG considerations into data analytics, they enable clients to:`,
    points: [
      "Assess ESG Performance: Evaluate how well their operations align with ESG criteria.",
      "Enhance Transparency: Provide clear reporting on ESG metrics to stakeholders.",
      "Drive Accountability: Ensure that sustainability goals are met through data-driven insights.",
    ],
    img: "/esg.jpg",
  },
];

const SustainabilityESG: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Sustainability & ESG Services
        </h1>

        <div className="space-y-20">
          {esgServicesData.map((service, idx) => (
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
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
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

export default SustainabilityESG;
