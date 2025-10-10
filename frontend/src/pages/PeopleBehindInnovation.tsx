import React, { useEffect, useState } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { CheckSquare } from "lucide-react"; // ✅ Checkbox icon

const PeopleBehindInnovation: React.FC = () => {
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

  // ✅ Reusable CheckboxList component
  const CheckboxList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3 mt-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700">
          <CheckSquare className="text-purple-700 mt-1 flex-shrink-0" size={18} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-32 px-6 sm:px-10 md:px-24">

      {/* Hero Section */}
      <ScrollAnimation delay={100} threshold={0.1}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The People Behind Innovation
          </h2>
          <p className="text-lg text-gray-700">
            At Transform, innovation thrives through a culture of curiosity, collaboration, and impact. 
            Our team leverages expertise & experience to help organisations transform, grow, & make a meaningful difference in their industries.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            While we celebrate individual excellence, it’s our collective spirit, culture, and dedication that drive true innovation. 
            Explore the principles that guide our work and the values that define us.
          </p>
        </div>
      </ScrollAnimation>

      {/* Culture & Values Section */}
      <ScrollAnimation delay={200} threshold={0.1}>
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-purple-700 mb-6">Our Culture & Values</h3>
              <p className="text-gray-700 mb-4">
                We believe that a strong, inclusive culture is the cornerstone of innovation. 
                Our values are reflected in the way we collaborate, make decisions, and approach challenges.
              </p>

              <CheckboxList
                items={[
                  "Collaboration over hierarchy — every voice matters.",
                  "Empathy-driven innovation to meet real-world needs.",
                  "Transparency and integrity in all our projects.",
                  "Commitment to sustainability and social value.",
                  "Continuous learning and curiosity fuel experimentation.",
                ]}
              />
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Our Culture"
                className="w-full rounded-2xl shadow-lg object-cover h-80 sm:h-96"
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Processes & Expertise Section */}
      <ScrollAnimation delay={250} threshold={0.1}>
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/momentum.jpg"
                alt="Processes and Expertise"
                className="w-full rounded-2xl shadow-lg object-cover h-80 sm:h-96"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-purple-700 mb-6">Our Processes & Expertise</h3>
              <p className="text-gray-700 mb-4">
                Our approach combines strategic insight, technical expertise, and agile methodologies 
                to deliver tangible results. Every project follows a structured yet flexible process that 
                encourages experimentation and learning.
              </p>

              <CheckboxList
                items={[
                  "Agile project delivery for rapid, iterative outcomes.",
                  "Cross-functional collaboration for holistic solutions.",
                  "Data-driven insights guide all strategic decisions.",
                  "Human-centred design ensures optimal user experience.",
                  "Continuous feedback and iteration for excellence.",
                ]}
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Impact Section */}
      <ScrollAnimation delay={300} threshold={0.1}>
        <div className="max-w-5xl mx-auto mb-20 text-left">
          <h3 className="text-3xl font-semibold text-purple-700 mb-6 text-center">Our Impact</h3>
          <p className="text-gray-700 mb-4 text-center">
            Beyond delivering solutions, our goal is to create lasting impact for clients, communities, 
            and industries. We measure success not only in business outcomes but in meaningful change.
          </p>

          <div className="flex flex-col items-center space-y-3">
            <CheckboxList
              items={[
                "Helping organisations innovate and stay competitive in evolving markets.",
                "Driving sustainable practices and social responsibility initiatives.",
                "Empowering teams and clients through knowledge sharing and training.",
                "Creating user-centric solutions that transform experiences.",
              ]}
            />
          </div>
        </div>
      </ScrollAnimation>

      {/* Voices of Innovation */}
      <ScrollAnimation delay={350} threshold={0.1}>
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
