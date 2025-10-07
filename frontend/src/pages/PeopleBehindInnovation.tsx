// src/pages/PeopleBehindInnovation.tsx
import React, { useEffect, useState } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const PeopleBehindInnovation: React.FC = () => {
  const team = Array.from({ length: 19 }).map((_, i) => ({
    name: `Team Member ${i + 1}`,
    role: "Role Placeholder",
    image: "/team.jpg", // single placeholder in public folder
  }));

  const voices = [
    {
      quote: "Innovation is not about technology alone — it’s about people who care enough to reimagine what’s possible.",
      author: "Sarah Collins, Head of Experience Design",
    },
    {
      quote: "True innovation emerges when diverse minds collaborate towards a common goal.",
      author: "James O'Connor, Chief Innovation Officer",
    },
    {
      quote: "Every experiment, success or failure, shapes the future of digital transformation.",
      author: "Priya Mehta, Lead UX Strategist",
    },
  ];

  const [currentVoice, setCurrentVoice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVoice((prev) => (prev + 1) % voices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [voices.length]);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 sm:px-10 md:px-24">
      <ScrollAnimation delay={100} once threshold={0.1}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The People Behind Innovation
          </h2>
          <p className="text-lg text-gray-700">
            Transform’s team has worked with some of the UK’s biggest organisations, providing a wealth of experience and knowledge.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200} once threshold={0.1}>
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">What Defines Our Team</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Collaboration over hierarchy — every idea counts.</li>
            <li>Innovation driven by empathy and insight.</li>
            <li>Transparency and trust as our cultural foundation.</li>
            <li>Commitment to sustainability and social value.</li>
            <li>Continuous learning through experimentation and curiosity.</li>
          </ul>
        </div>
      </ScrollAnimation>

      <div className="max-w-6xl mx-auto mb-16">
        <ScrollAnimation delay={250} once threshold={0.05}>
          <h3 className="text-3xl font-bold text-purple-800 mb-10 text-center">
            Meet Our Leadership Team
          </h3>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-56 sm:h-60 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-purple-700 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollAnimation delay={300} once threshold={0.1}>
        <div className="bg-purple-50 rounded-2xl py-10 px-6 md:px-12 mb-12">
          <h3 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
            Voices of Innovation
          </h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow p-6 max-w-5xl text-center transition-all duration-700">
              <p className="text-gray-700 italic text-lg">
                “{voices[currentVoice].quote}”
              </p>
              <p className="mt-4 font-semibold text-purple-700">
                - {voices[currentVoice].author}
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default PeopleBehindInnovation;
