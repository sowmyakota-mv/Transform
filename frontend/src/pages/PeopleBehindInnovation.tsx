// src/pages/PeopleBehindInnovation.tsx
import React, { useEffect, useState } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const PeopleBehindInnovation: React.FC = () => {
  const team = [
    { name: "Emma Robertson", role: "CEO", image: "/team/emma-robertson.jpg" },
    { name: "Jane Barrett", role: "Chief Growth Officer", image: "/team/jane-barrett.jpg" },
    { name: "Johan Hogsander", role: "Sales Enablement MD", image: "/team/johan-hogsander.jpg" },
    { name: "Athina Mason", role: "Consulting MD", image: "/team/athina-mason.jpg" },
    { name: "Gita Singham-Willis", role: "Strategic Engagement Director", image: "/team/gita-singham-willis.jpg" },
    { name: "Tricia Phillips", role: "Chief Operating Officer", image: "/team/tricia-phillips.jpg" },
    { name: "Cyril Law", role: "Director of Data Engineering and Technology", image: "/team/cyril-law.jpg" },
    { name: "Meghan Walsh", role: "Head of Marketing & New Business", image: "/team/meghan-walsh.jpg" },
    { name: "Dawn Cooke", role: "Director of Consulting", image: "/team/dawn-cooke.jpg" },
    { name: "Bill James", role: "Chairman", image: "/team/bill-james.jpg" },
    { name: "Emily Chappell", role: "Head of People", image: "/team/emily-chappell.jpg" },
    { name: "Will Lowe", role: "Chief Data & AI Officer", image: "/team/will-lowe.jpg" },
    { name: "Mark Redwood-Sayce", role: "Chief Financial Officer", image: "/team/mark-redwood-sayce.jpg" },
    { name: "Claire Robinson", role: "Director of Sustainable Business Consulting", image: "/team/claire-robinson.jpg" },
    { name: "Dave Jackson", role: "Director of Service Design", image: "/team/dave-jackson.jpg" },
    { name: "Dave Wood", role: "Chief Technology Officer", image: "/team/dave-wood.jpg" },
    { name: "Ian Pocock", role: "Research and Service Design MD", image: "/team/ian-pocock.jpg" },
    { name: "Peter Rottier", role: "Product & Delivery MD", image: "/team/peter-rottier.jpg" },
    { name: "Nathan Kirkham", role: "Director of Technology Strategy & Architecture", image: "/team/nathan-kirkham.jpg" },
  ];

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

  // Auto-slide voices every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVoice((prev) => (prev + 1) % voices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [voices.length]);

  return (
    <section id="people" className="bg-gradient-to-b from-white to-blue-50 py-32 px-10 md:px-24">

      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The People Behind Innovation
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Transform’s team has worked with some of the UK’s biggest organisations, providing it with a wealth of experience and knowledge.
          </p>
        </div>
      </ScrollAnimation>

      {/* Core Team Values */}
      <ScrollAnimation delay={200}>
        <div className="max-w-5xl mx-auto mb-16">
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

      {/* Team Members Section */}
      <ScrollAnimation delay={300}>
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-purple-800 mb-10 text-center">
            Meet Our Leadership Team
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <ScrollAnimation key={index} delay={400 + index * 50}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-purple-700 font-medium">{member.role}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Voices of Innovation - Title + Single Auto Slide */}
      <ScrollAnimation delay={500}>
        <div className="bg-purple-50 rounded-2xl py-10 px-6 md:px-12 mb-12">
          <h3 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
            Voices of Innovation
          </h3>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow p-6 max-w-5xl text-center transition-all duration-700">
              <p className="text-gray-700 italic text-lg">“{voices[currentVoice].quote}”</p>
              <p className="mt-4 font-semibold text-purple-700">- {voices[currentVoice].author}</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

    </section>
  );
};

export default PeopleBehindInnovation;
