// src/pages/DataAIAnalytics.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";
import { Cpu, Database, BarChart } from "lucide-react";
import { FaCheckSquare } from "react-icons/fa";

const servicesData = [
  {
    title: "Data Engineering",
    desc: "Building and maintaining robust data pipelines, data lakes, and warehouses for seamless data flow.",
    icon: <Database className="w-10 h-10 text-cyan-600" />,
    img: "/data-eng.jpg",
  },
  {
    title: "AI & Machine Learning",
    desc: "Developing custom AI models and ML solutions to automate, predict, and optimize business outcomes.",
    icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    img: "/ai-img.jpg",
  },
  {
    title: "Data Analytics & Visualization",
    desc: "Implementing analytics platforms, dashboards, and visualizations for real-time insights.",
    icon: <BarChart className="w-10 h-10 text-cyan-600" />,
    img: "/data-analytics.jpg",
  },
];

const DataAIAnalytics: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 md:py-36 -mb-32">
      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto text-center px-6 md:px-20 mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Unlock the Power of <span className="text-cyan-600">Data, AI & Analytics</span>
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            Transform raw data into actionable insights and predictive intelligence. Leverage AI and analytics to innovate, optimize, and grow in a data-driven world.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-cyan-700 transition"
          >
            Get Started
          </Link>
        </div>
      </ScrollAnimation>

      {/* What Is Section - Image in Center */}
<div className="max-w-6xl mx-auto px-6 md:px-20 mb-24">
  <ScrollAnimation delay={200}>
    <div className="flex flex-col items-center bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-lg overflow-hidden p-8 md:p-12">
      <img
        src="/data.jpg"
        alt="Data AI Analytics"
        className="w-full md:w-3/4 h-80 object-cover rounded-2xl mb-8"
      />
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        Understanding Data, AI & Analytics
      </h2>

      {/* Subsections */}
      <div className="max-w-3xl space-y-6 text-left">
        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Data</h3>
          <p className="text-slate-700">
            Data are raw facts and figures that form the foundation of decisions. Structured, unstructured, and semi-structured data provide insights to drive strategy.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">AI (Artificial Intelligence)</h3>
          <p className="text-slate-700">
            AI automates tasks, predicts trends, and enhances operational efficiency through Machine Learning, NLP, Computer Vision, and RPA.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Analytics</h3>
          <p className="text-slate-700">
            Analytics uncovers patterns, forecasts outcomes, and provides actionable intelligence through descriptive, diagnostic, predictive, and prescriptive methods.
          </p>
        </div>
      </div>
    </div>
  </ScrollAnimation>
</div>

      {/* Who Uses & Why Section */}
      <div className="bg-gradient-to-r from-cyan-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation delay={250}>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Uses It?</h2>
              <ul className="list-none pl-6 space-y-2 text-slate-700">
                {["Enterprises: Streamline operations and drive innovation.",
                "SMBs: Understand customer behavior and optimize marketing.",
                "Governments: Improve public services and optimize resources.",
                "Healthcare Providers: Enhance diagnosis, treatment, and efficiency.",
                "Educational Institutions: Track performance and optimize curricula.",
                ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckSquare className="text-green-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why It Matters</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                {["Informed Decision-Making: Real-time insights for better strategies.",
                "Operational Efficiency: Automation reduces cost and effort.",
                "Competitive Advantage: Stay ahead with predictive analytics.",
                "Customer Satisfaction: Personalization and better experiences.",
                "Risk Management: Identify and mitigate potential risks proactively.",
                ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckSquare className="text-green-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services Section - Only Data, AI & Analytics */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Our Expert Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {servicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 350}>
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover brightness-50  group-hover:brightness-100 transition duration-300"
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
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits of Data, AI & Analytics</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Enhanced Decision-Making</h3>
              <p>Access real-time insights to make smarter and faster decisions across your organization.</p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p>Optimize operations and automate repetitive tasks to reduce costs significantly.</p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Scalability & Innovation</h3>
              <p>AI-powered solutions allow your business to scale while driving innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAIAnalytics;
