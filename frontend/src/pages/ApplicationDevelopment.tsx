// src/components/ApplicationDevelopment.tsx
import React from "react";

const ApplicationDevelopment: React.FC = () => {
  const sectionData = [
    {
      title: "Application Development",
      content: [
        "Driven by innovation, our approach to Application Development and Maintenance aids businesses in modernizing their applications, fostering growth and adaptability."
      ],
      points: [
        "Custom Application Development: Using Java, .NET, PHP, Node.js for tailor-made apps.",
        "Application Maintenance: Continuously reinventing systems to align with evolving business needs.",
        "Legacy Migration: Replatforming legacy apps for seamless integration.",
        "System Integration: Ensuring continuous availability, scalability, and reliability.",
        "UX/UI Design: Improving user experience and adoption."
      ]
    }
  ];

  return (
    <section id="/expertise/application-development" className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Application Development</h2>
        {sectionData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            {section.content.map((para, i) => (
              <p key={i} className="mb-3 text-gray-700">{para}</p>
            ))}
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i} className="mb-1">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationDevelopment;
