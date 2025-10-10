// src/components/BusinessIntelligence.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { TrendingUp, Cpu, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Advanced Reporting",
    desc: "Creating detailed reports and dashboards to support strategic decision-making.",
    icon: <TrendingUp className="w-10 h-10 text-cyan-600" />,
    img: "/reporting.jpg",
  },
  {
    title: "BI Consulting",
    desc: "Leveraging BI tools and expertise to solve real-world business challenges.",
    icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    img: "/business.jpg",
  },
  {
    title: "Real-time Dashboards",
    desc: "Interactive dashboards providing up-to-date insights for quick decisions.",
    icon: <BarChart2 className="w-10 h-10 text-cyan-600" />,
    img: "/dashboard.jpg",
  },
  {
    title: "Data Integration",
    desc: "Consolidating multiple data sources into a unified view for accurate reporting.",
    icon: <BarChart2 className="w-10 h-10 text-cyan-600" />,
    img: "/data-eng.jpg",
  },
];

const BusinessIntelligence: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero / Intro */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Unlock Insights with <span className="text-cyan-600">Business Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Transform your organization’s data into actionable insights. BI empowers informed decisions, boosts operational efficiency, and drives strategic growth with intuitive reporting and analytics.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-cyan-700 transition"
          >
            Get Started
          </Link>
        </div>
      </ScrollAnimation>

      {/* Who & Why Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center -mt-16">
        <ScrollAnimation delay={200}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Uses BI?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enterprises: Streamline operations and make data-driven decisions.</li>
              <li>SMBs: Optimize marketing and understand business performance.</li>
              <li>Governments: Improve public services and resource allocation.</li>
              <li>Healthcare Providers: Enhance decision-making and operational efficiency.</li>
              <li>Educational Institutions: Track performance and improve curricula planning.</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={250}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why It Matters?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Data-Driven Decisions: Make smarter strategic choices.</li>
              <li>Operational Efficiency: Optimize processes and reduce costs.</li>
              <li>Competitive Advantage: Gain an edge using BI insights.</li>
              <li>Customer Experience: Personalize services with better insights.</li>
              <li>Risk Management: Identify and mitigate risks proactively.</li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>

      {/* Services Section - Modern Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Our BI Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {servicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 300}>
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:brightness-50 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Benefits of BI</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
              <p>Make informed decisions based on real-time and historical insights.</p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p>Streamline processes and improve resource utilization across teams.</p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Strategic Insights</h3>
              <p>Gain actionable insights that drive growth and improve decision-making.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligence;
