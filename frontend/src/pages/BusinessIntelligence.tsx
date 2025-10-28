import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { TrendingUp, Cpu, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";

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

const listItems = [
  "Enterprises: Streamline operations and make data-driven decisions.",
  "SMBs: Optimize marketing and understand business performance.",
  "Governments: Improve public services and resource allocation.",
  "Healthcare Providers: Enhance decision-making and operational efficiency.",
  "Educational Institutions: Track performance and improve curricula planning.",
];

const whyItems = [
  "Data-Driven Decisions: Make smarter strategic choices.",
  "Operational Efficiency: Optimize processes and reduce costs.",
  "Competitive Advantage: Gain an edge using BI insights.",
  "Customer Experience: Personalize services with better insights.",
  "Risk Management: Identify and mitigate risks proactively.",
];

const BusinessIntelligence: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero / Intro */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-36 text-center -mb-16">
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
      {/* What Is BI Section */}
<div className="max-w-6xl mx-auto px-6 md:px-20 mb-24">
  <ScrollAnimation delay={200}>
    <div className="flex flex-col items-center bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-lg overflow-hidden p-8 md:p-12">
      <img
        src="/business.jpg"
        alt="Business Intelligence"
        className="w-full md:w-3/4 h-80 object-cover rounded-2xl mb-8"
      />
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        What is Business Intelligence (BI)?
      </h2>

      {/* Subsections */}
      <div className="max-w-3xl space-y-6 text-left">
        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Definition</h3>
          <p className="text-slate-700">
            Business Intelligence (BI) is the practice of transforming raw data into actionable insights that support strategic, tactical, and operational decision-making. BI tools collect, process, and visualize data to provide a clear picture of business performance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">How BI Works</h3>
          <p className="text-slate-700">
            BI systems integrate data from multiple sources including databases, cloud platforms, and internal systems. They analyze this data using dashboards, reporting, and visualization tools, enabling organizations to identify trends, spot inefficiencies, and optimize performance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Key Components</h3>
          <ul className="list-none space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
              <span>Data Warehousing: Centralized storage of integrated data for analysis.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
              <span>Analytics Tools: Platforms that process data to reveal trends and patterns.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
              <span>Dashboards & Reports: Interactive visualizations that enable decision-making.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
              <span>Data Governance: Ensuring accuracy, consistency, and security of business data.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">Benefits of BI</h3>
          <p className="text-slate-700">
            Organizations using BI can make data-driven decisions, optimize operations, reduce costs, identify growth opportunities, and improve customer experience.
          </p>
        </div>
      </div>
    </div>
  </ScrollAnimation>
</div>

      {/* Who & Why Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-start">
        <ScrollAnimation delay={200}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Uses BI?</h2>
            <ul className="list-none space-y-2 text-gray-700">
  {listItems.map((item, index) => {
    const [title, ...rest] = item.split(":");
    return (
      <li key={index} className="flex items-start gap-2">
        <FaCheckSquare className="mt-1 text-cyan-600" />
        <span>
          <span className="font-bold">{title}:</span> {rest.join(":")}
        </span>
      </li>
    );
  })}
</ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={250}>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why It Matters?</h2>
            <ul className="list-none space-y-2 text-gray-700">
  {whyItems.map((item, index) => {
    const [title, ...rest] = item.split(":");
    return (
      <li key={index} className="flex items-start gap-2">
        <FaCheckSquare className="mt-1 text-cyan-600" />
        <span>
          <span className="font-bold">{title}:</span> {rest.join(":")}
        </span>
      </li>
    );
  })}
</ul>
          </div>
        </ScrollAnimation>
      </div>

      {/* Services Section - Modern Cards */}
      <div className="max-w-5xl mx-auto px-6 md:px-20 py-20"> {/* Reduced max-w */}
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
                  className="w-full h-64 object-cover brightness-50 group-hover:brightness-100 transition duration-300"
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
      <div className="bg-cyan-600 py-20 text-white -mb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits of BI</h2>
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
