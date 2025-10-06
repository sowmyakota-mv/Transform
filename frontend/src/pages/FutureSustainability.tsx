import React, { useState, useEffect } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const FutureSustainability: React.FC = () => {
  const pillars = [
    {
      title: "Delivering Net Positive Impact",
      desc: "We don’t just deliver projects — we aim to generate measurable social, environmental, and economic benefits for our clients and communities.",
      points: [
        "Support clients in delivering socially valuable products.",
        "Integrate sustainability principles into every engagement.",
        "Upskill teams to enable sustainable decision-making.",
        "Implement practices to reduce environmental footprint.",
      ],
    },
    {
      title: "Digital Sustainability 101",
      desc: "Sustainability is embedded in the way we build technology. We optimize systems, products, and processes to minimize energy and resource usage.",
      points: [
        "Lightweight, energy-efficient software architectures.",
        "Optimized cloud and infrastructure management.",
        "Sustainable UX/UI practices to reduce digital footprint.",
        "Lifecycle planning for long-term sustainability.",
      ],
    },
    {
      title: "Empowering Social Change",
      desc: "We focus on inclusivity, ethics, and responsible innovation, ensuring technology benefits all communities and stakeholders.",
      points: [
        "Inclusive and accessible design for all users.",
        "Ethical AI and responsible data practices.",
        "Community engagement and skill-building programs.",
        "Promoting diversity and fair workplace practices.",
      ],
    },
  ];

  const initiatives = [
    {
      title: "Sustainability Academy",
      desc: "Structured programs to educate teams and clients on sustainable practices and digital responsibility.",
      image: "/academy.jpg",
    },
    {
      title: "Towards Net Positive AI",
      desc: "Guidance and frameworks to implement AI solutions that are both innovative and environmentally conscious.",
      image: "/net-positive-ai.jpg",
    },
    {
      title: "Sustainability Hack",
      desc: "Interactive 90-minute workshops to help businesses discover actionable ways to integrate sustainability in their projects.",
      image: "/sustainability-hack.jpg",
    },
    {
      title: "Practical Business Blueprint",
      desc: "Resources and tools to guide measurable, positive change in every aspect of your organization.",
      image: "/blueprint.jpg",
    },
  ];

  const timeline = [
    { year: "2025", text: "Full sustainability reporting implemented across all projects.", image: "/2025.jpg" },
    { year: "2027", text: "100% renewable energy powering all hosting and infrastructure.", image: "/2027.jpg" },
    { year: "2028", text: "Launch open innovation labs focused on climate-tech solutions.", image: "/2028.jpg" },
    { year: "2030", text: "Net-zero operations achieved across all Transform offices globally.", image: "/2030.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const nextPillar = () => setCurrentIndex((prev) => (prev + 1) % pillars.length);
  const prevPillar = () => setCurrentIndex((prev) => (prev - 1 + pillars.length) % pillars.length);

  useEffect(() => {
    const interval = setInterval(() => nextPillar(), 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPos({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY + rect.height + 10 });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="sustainability" className="bg-gradient-to-b from-white to-green-50 py-16 px-10 md:px-24 relative">

      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div
          className="relative h-[80vh] flex items-center justify-center text-center text-white rounded-2xl overflow-hidden mb-20"
          style={{
            backgroundImage: "url('/images/hero-sustainability.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-green-900/50"></div>
          <div className="relative z-10 max-w-3xl px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-700">
              Transforming Work with Sustainability at the Core
            </h2>
            <p className="text-lg mb-2 animate-fade-up delay-200">
              At Transform, our work aligns with the UN’s Sustainable Development Goals, ensuring measurable progress and positive impact.
            </p>
            <p className="text-lg animate-fade-up delay-300">
              We combine social good, responsible practices, and innovative technology to create sustainable outcomes for clients, communities, and the planet.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Our Core Focus Areas */}
      <div className="max-w-6xl mx-auto mb-20 relative">
        <ScrollAnimation delay={200}>
          <div
            className="relative rounded-3xl shadow-2xl border border-green-200 py-8 px-10 text-center"
            style={{
              background: "linear-gradient(135deg, #E6F4EA 0%, #C7E9C0 100%)",
            }}
          >
            <h3 className="text-3xl font-semibold text-green-800 mb-2">
              Our Core Focus Areas
            </h3>
            <p className="text-gray-800 max-w-2xl mx-auto text-lg leading-relaxed mb-2">
              We’re driving a sustainable digital transformation where innovation,
              responsibility, and environmental consciousness come together.
            </p>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
              Our core pillars define how we deliver measurable impact and create a
              resilient, equitable, and regenerative future for all.
            </p>
          </div>
        </ScrollAnimation>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mt-[-40px] bg-white rounded-3xl shadow-xl border border-green-300 overflow-hidden py-10 px-10 z-20">
          <div className="overflow-hidden relative h-[250px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pillars.map((pillar, i) => (
                <div key={i} className="w-full flex-shrink-0 text-center px-4">
                  <h4 className="text-2xl font-bold text-green-800 mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
                    {pillar.desc}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-left inline-block max-w-md mx-auto space-y-1">
                    {pillar.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevPillar}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          >
            &lt;
          </button>
          <button
            onClick={nextPillar}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          >
            &gt;
          </button>
        </div>
      </div>

     {/* Sustainability Initiatives */}
<ScrollAnimation delay={400}>
  <div className="max-w-6xl mx-auto mb-24">
    <h3 className="text-3xl font-semibold text-green-800 mb-10 text-center">
      Innovative Initiatives
    </h3>
    <div className="grid md:grid-cols-4 gap-2 relative"> {/* 0.5rem gap */}
      {initiatives.map((item, i) => (
        <ScrollAnimation key={i} delay={450 + i * 100}>
          <div className="flex flex-col items-center relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-48 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110 cursor-pointer"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                setPopupPos({
                  x: rect.left + rect.width / 2 + window.scrollX,
                  y: rect.top + scrollTop + rect.height + 10, // below image
                });
                setHoveredIndex(i);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</ScrollAnimation>

{/* Floating Popup */}
{hoveredIndex !== null && (
  <div
    className="absolute w-64 bg-white rounded-2xl shadow-xl p-6 text-left z-[9999] transition-all duration-300"
    style={{
      top: popupPos.y,
      left: popupPos.x,
      transform: "translateX(-50%)",
    }}
  >
    <h4 className="text-lg font-bold text-green-800 mb-2">{initiatives[hoveredIndex].title}</h4>
    <p className="text-gray-700 mb-2">{initiatives[hoveredIndex].desc}</p>
    <p className="text-gray-600 mb-4">
      Here you can add more info or details about this initiative.
    </p>
    <button className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800">
      Learn More →
    </button>
  </div>
)}

      {/* Timeline */}
      <div className="max-w-6xl mx-auto mb-24 relative">
        <ScrollAnimation delay={500}>
          <h3 className="text-3xl font-semibold text-green-800 mb-10 text-center">Milestones Toward a Net Positive Future</h3>
        </ScrollAnimation>
        <div className="relative border-l-4 border-green-500 ml-4">
          {timeline.map((step, index) => (
            <ScrollAnimation key={index} delay={550 + index * 100}>
              <div className={`ml-6 mb-10 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <img src={step.image} alt={step.year} className="w-24 h-24 object-cover rounded-full shadow-md mb-4 md:mb-0 md:mx-6" />
                <div className="max-w-md">
                  <h4 className="text-lg font-bold text-gray-900">{step.year}</h4>
                  <p className="text-gray-700">{step.text}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ScrollAnimation delay={900}>
        <div className="relative text-center max-w-3xl mx-auto rounded-2xl overflow-hidden">
          <img
            src="/images/sustainability-cta.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt=""
          />
          <div className="relative z-10 p-10 bg-green-900/60 text-white rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Join Us in Delivering Positive Change</h3>
            <p className="text-lg mb-8">
              Whether through workshops, consultations, or collaborative projects, every step counts toward a sustainable, equitable digital future.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition">
              Arrange a Session or Connect
            </button>
          </div>
        </div>
      </ScrollAnimation>

      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 1s forwards;
        }
      `}</style>
    </section>
  );
};

export default FutureSustainability;
