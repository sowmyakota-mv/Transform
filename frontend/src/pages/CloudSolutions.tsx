// src/components/CloudSolutions.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Cloud, Lock, Server, Settings, CloudUpload } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Cloud Application Development",
    desc: "Build and deploy cloud-native applications that ensure scalability, speed, and reliability.",
    icon: <CloudUpload className="w-10 h-10 text-indigo-600" />,
    img: "/cloud-app.jpg",
  },
  {
    title: "Cloud Migration",
    desc: "Seamlessly migrate your existing systems and data to the cloud with minimal downtime.",
    icon: <Server className="w-10 h-10 text-indigo-600" />,
    img: "/cloud-migrating.jpg",
  },
  {
    title: "Cloud Security & Governance",
    desc: "Protect your assets with robust cloud security frameworks and compliance-driven strategies.",
    icon: <Lock className="w-10 h-10 text-indigo-600" />,
    img: "/cloud-security.jpg",
  },
  {
    title: "Cloud Strategy & Consulting",
    desc: "Define a tailored cloud roadmap that aligns technology with your business goals.",
    icon: <Settings className="w-10 h-10 text-indigo-600" />,
    img: "/cloud-strategy.jpg",
  },
];

const CloudSolutions: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Empower Your Business with{" "}
            <span className="text-indigo-600">Cloud Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Accelerate your digital transformation journey with scalable,
            secure, and cost-efficient cloud platforms. Our cloud expertise helps
            organizations modernize IT operations, increase agility, and enable
            continuous innovation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </ScrollAnimation>

      {/* Understanding Cloud Solutions Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 mb-24">
        <ScrollAnimation delay={200}>
          <div className="flex flex-col items-center bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-lg overflow-hidden p-8 md:p-12">
            <img
              src="/cloud.jpg"
              alt="Cloud Solutions"
              className="w-full md:w-3/4 h-80 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Understanding Cloud Solutions
            </h2>

            <div className="max-w-3xl space-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Cloud Computing
                </h3>
                <p className="text-slate-700">
                  Cloud computing provides on-demand access to computing
                  resources such as servers, storage, and applications through
                  the internet. It removes the need for owning and maintaining
                  physical infrastructure, offering scalability, flexibility,
                  and cost savings. Businesses can deploy applications globally
                  with improved uptime and performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Cloud Service Models (IaaS, PaaS, SaaS)
                </h3>
                <p className="text-slate-700">
                  Cloud solutions come in different models: Infrastructure as a
                  Service (IaaS) offers virtualized computing resources;
                  Platform as a Service (PaaS) provides environments for
                  developers to build and deploy applications; and Software as a
                  Service (SaaS) delivers ready-to-use software over the web.
                  Each model supports specific business needs and scalability
                  goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Cloud Integration & Optimization
                </h3>
                <p className="text-slate-700">
                  Effective cloud adoption involves integrating existing
                  systems, data, and applications across hybrid or multi-cloud
                  environments. Cloud optimization ensures cost efficiency,
                  performance tuning, and continuous monitoring to maximize
                  return on investment and maintain operational resilience.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Who Uses & Why Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid md:grid-cols-2 gap-16 items-center">
        <ScrollAnimation delay={250}>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Who Uses Cloud Solutions?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Startups and SMEs seeking affordable and scalable IT setups.</li>
              <li>Enterprises modernizing legacy systems for agility.</li>
              <li>Healthcare, finance, and retail industries prioritizing data security and compliance.</li>
              <li>Software companies deploying SaaS and DevOps pipelines.</li>
              <li>Government and educational bodies shifting to cloud-first strategies.</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={300}>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why It Matters
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><b>Scalability:</b> Adjust infrastructure to meet fluctuating demands.</li>
              <li><b>Cost Efficiency:</b> Pay-as-you-go models eliminate heavy upfront investments.</li>
              <li><b>Innovation:</b> Accelerate digital transformation and time-to-market.</li>
              <li><b>Business Continuity:</b> Secure, redundant, and disaster-recovery-ready environments.</li>
              <li><b>Global Access:</b> Enable collaboration anytime, anywhere with consistent performance.</li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Our Cloud Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {servicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 350}>
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:brightness-50 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Key Benefits of Cloud Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-indigo-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p>
                Expand or reduce computing resources on demand without service
                interruption or downtime.
              </p>
            </div>
            <div className="bg-indigo-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Security & Compliance
              </h3>
              <p>
                Protect sensitive data with advanced encryption, firewalls, and
                multi-layer authentication.
              </p>
            </div>
            <div className="bg-indigo-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Innovation Enablement
              </h3>
              <p>
                Empower teams with modern cloud-native tools and AI-driven
                automation for faster innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutions;
