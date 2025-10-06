// src/pages/CommunityImpact.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const CommunityImpact: React.FC = () => {
  const impactSections = [
    {
      title: "Empowering Change",
      color: "from-pink-500 to-red-600",
      paragraphs: [
        "At Transform, we believe technology is more than innovation — it’s a catalyst for meaningful human change. Every product, strategy, and idea we build aims to make the world a more connected, inclusive, and empowered place.",
        "We’re not just adapting to the digital era; we’re shaping it with responsibility and empathy, ensuring every advancement benefits both people and planet.",
      ],
      points: [
        "Empowering businesses to drive positive global impact.",
        "Integrating ethics and inclusivity into every digital solution.",
        "Supporting communities through technology-based outreach programs.",
        "Encouraging volunteerism and shared knowledge among teams.",
        "Championing responsible innovation that uplifts all voices.",
      ],
      image: "/Empowering.jpg", // Suggested image
    },
    {
      title: "Sustainable by Design",
      color: "from-green-500 to-emerald-600",
      paragraphs: [
        "Our sustainability approach goes beyond efficiency — it’s embedded in our design DNA. We’re building systems and solutions that reduce carbon footprints while enhancing scalability and longevity.",
        "From eco-friendly hosting to carbon-aware development practices, we ensure digital transformation aligns with environmental stewardship.",
      ],
      points: [
        "Optimizing code and infrastructure for lower energy consumption.",
        "Encouraging cloud providers with renewable energy commitments.",
        "Designing for longevity — reducing digital waste and reusability.",
        "Supporting climate-focused startups with digital expertise.",
        "Advocating for green data centers and responsible AI usage.",
      ],
      image: "/sustainable.jpg", // Suggested image
    },
    {
      title: "Inclusive Futures",
      color: "from-purple-500 to-indigo-600",
      paragraphs: [
        "We envision a digital future that includes everyone. Our teams are committed to fostering diversity, accessibility, and equity across our workforce and the solutions we create.",
        "From design systems that consider every user to hiring practices that champion equal opportunity, inclusivity is the foundation of our innovation.",
      ],
      points: [
        "Championing women and underrepresented groups in tech.",
        "Designing for accessibility — every user matters.",
        "Encouraging inclusive AI models and unbiased data systems.",
        "Mentorship programs empowering the next generation of innovators.",
        "Global partnerships promoting digital inclusion for all.",
      ],
      image: "/future.jpg", // Suggested image
    },
    {
      title: "Human-Centric Innovation",
      color: "from-blue-500 to-cyan-600",
      paragraphs: [
        "True innovation begins with empathy. Our mission is to build digital experiences that enhance mental, emotional, and societal wellbeing.",
        "From employee wellness programs to designing intuitive digital ecosystems, we ensure technology serves humanity — not the other way around.",
      ],
      points: [
        "Creating user-first designs that reduce cognitive overload.",
        "Encouraging mindful tech adoption for healthier engagement.",
        "Supporting digital wellbeing research and community programs.",
        "Integrating wellness-focused AI assistants and dashboards.",
        "Embedding empathy into design, development, and leadership.",
      ],
      image: "/human-centric.jpg", // Suggested image
    },
    {
      title: "Impact Through Collaboration",
      color: "from-orange-500 to-pink-600",
      paragraphs: [
        "We believe lasting change happens when we collaborate — across industries, geographies, and communities. Transform partners with organizations that share our commitment to responsible progress.",
        "Our collaborations range from educational initiatives to sustainable enterprise projects, amplifying collective impact through shared purpose.",
      ],
      points: [
        "Partnering with NGOs and social enterprises for digital transformation.",
        "Collaborating on open-source sustainability frameworks.",
        "Supporting community-led innovation through hackathons and workshops.",
        "Building shared value ecosystems with clients and partners.",
        "Driving global progress through knowledge exchange networks.",
      ],
      image: "/collaboration.jpg", // Suggested image
    },
  ];

  return (
    <section id="impact" className="bg-gradient-to-b from-white to-blue-50 py-24 px-8 md:px-20">
      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-up">
            Shaping a Responsible Digital Future
          </h2>
          <p className="text-lg text-gray-700 animate-fade-up delay-200">
            We see community impact not as a side project, but as a shared mission. Through technology, empathy, and innovation, Transform is redefining how businesses create real-world change — sustainably, inclusively, and collaboratively.
          </p>
        </div>
      </ScrollAnimation>

      {/* Impact Sections */}
      <div className="space-y-12">
        {impactSections.map((section, index) => (
          <ScrollAnimation key={index} delay={200 + index * 100}>
            <div className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transition duration-500 flex flex-col md:flex-row items-center gap-8">
              
              {/* Image */}
              <img src={section.image} alt={section.title} className="w-40 h-40 object-contain rounded-lg shadow-md flex-shrink-0" />

              {/* Text */}
              <div>
                <h3
                  className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${section.color} mb-6`}
                >
                  {section.title}
                </h3>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                  {section.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-up { 0% {opacity:0; transform:translateY(20px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-fade-up { animation: fade-up 1s forwards; }
      `}</style>
    </section>
  );
};

export default CommunityImpact;
