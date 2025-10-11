// src/components/PlatformEngineering.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";
import { Layers, Code, Cloud, Shield } from "lucide-react";
import { FaCheckSquare } from "react-icons/fa";

const servicesData = [
  {
    title: "Technology Architecture & Platform Design",
    desc: "Design scalable, modular, and secure technology architectures that enable long-term business agility and innovation.",
    icon: <Layers className="w-10 h-10 text-violet-600" />,
    img: "/tech-arch.jpg", // servers + architecture
  },
  {
    title: "DevOps & CI/CD Automation",
    desc: "Automate technology delivery pipelines for faster, more reliable deployments and efficient platform operations.",
    icon: <Code className="w-10 h-10 text-violet-600" />,
    img: "/dev.jpg", // devops workflow
  },
  {
    title: "Cloud-Native Technology Solutions",
    desc: "Build, deploy, and manage cloud-based applications across hybrid or multi-cloud environments for agility and scalability.",
    icon: <Cloud className="w-10 h-10 text-violet-600" />,
    img: "/cloud-native.jpg", // cloud & coding
  },
  {
    title: "Security, Compliance & Platform Governance",
    desc: "Ensure enterprise-grade security, compliance, and governance across all technology and platform layers.",
    icon: <Shield className="w-10 h-10 text-violet-600" />,
    img: "/gov.jpg", // cybersecurity concept
  },
];

const PlatformEngineering: React.FC = () => {
  return (
    <section className="bg-slate-50 text-gray-900">
      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Empowering Business Growth through{" "}
            <span className="text-cyan-700">
              Technology & Platform Engineering
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Combine advanced technology and strong engineering foundations to
            create scalable, secure, and intelligent platforms that enable
            digital innovation and operational excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-violet-700 transition"
          >
            Get Started
          </Link>
        </div>
      </ScrollAnimation>

      {/* Understanding Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 mb-24">
        <ScrollAnimation delay={200}>
          <div className="flex flex-col items-center bg-gradient-to-br from-white to-violet-50 rounded-3xl shadow-lg overflow-hidden p-8 md:p-12">
            <img
              src="/tech.jpg"
              alt="Technology and Platform Engineering"
              className="w-full md:w-3/4 h-80 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Understanding Technology & Platform Engineering
            </h2>

            <div className="max-w-3xl space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">
                  What Is Technology & Platform Engineering?
                </h3>
                <p className="text-slate-700">
                  Technology & Platform Engineering integrates advanced
                  technologies, software frameworks, and robust engineering
                  methods to build reliable systems that support digital
                  transformation. It’s the backbone of innovation — combining
                  strategy, infrastructure, and code to deliver seamless digital
                  experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">
                  The Foundation of Modern Digital Enterprises
                </h3>
                <p className="text-slate-700">
                  From cloud-native systems and API ecosystems to DevOps-driven
                  automation, Technology & Platform Engineering establishes the
                  core digital foundation that helps organizations evolve with
                  speed, scalability, and efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-600 mb-2">
                  Engineering Technology for Reliability & Growth
                </h3>
                <p className="text-slate-700">
                  By applying software engineering best practices and advanced
                  tech frameworks, businesses can ensure their digital platforms
                  are secure, adaptable, and performance-optimized — ready to
                  scale as the organization grows.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Who Uses & Why Section */}
<div className="bg-gradient-to-r from-violet-50 to-white py-2">
  <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
    <ScrollAnimation delay={250}>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Who Uses Technology & Platform Engineering?
        </h2>
        <ul className="list-none space-y-2 text-slate-700">
          {[
            "Organizations: aiming to modernize their technology stack.",
            "Development teams: building enterprise-grade solutions.",
            "Businesses: migrating to cloud or hybrid environments.",
            "Industries: focusing on digital resilience and performance.",
            "Startups: scaling rapidly with tech-enabled operations."
          ].map((item, index) => {
            const [title, ...rest] = item.split(":");
            return (
              <li key={index} className="flex items-start gap-2">
                <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
                <span>
                  <span className="font-bold">{title}:</span> {rest.join(":").trim()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </ScrollAnimation>
    <ScrollAnimation delay={300}>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Why Technology & Platform Engineering Matters
        </h2>
        <ul className="list-none space-y-2 text-slate-700">
          {[
            "Innovation Acceleration: Drive faster digital product development and deployment.",
            "System Reliability: Ensure consistent uptime and smooth operations.",
            "Security First: Integrate compliance and threat protection at every layer.",
            "Operational Agility: Support quick adaptation to technology and market changes.",
            "Scalable Growth: Build platforms that expand with your business needs."
          ].map((item, index) => {
            const [title, ...rest] = item.split(":");
            return (
              <li key={index} className="flex items-start gap-2">
                <FaCheckSquare className="mt-1 text-cyan-600 flex-shrink-0" />
                <span>
                  <span className="font-bold">{title}:</span> {rest.join(":").trim()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </ScrollAnimation>
  </div>
</div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Our Technology & Platform Engineering Services
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
      <div className="bg-cyan-600 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Key Benefits of Technology & Platform Engineering
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Improved Efficiency & Reliability
              </h3>
              <p>
                Streamline processes, reduce downtime, and enhance system
                stability through automation and robust design.
              </p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Accelerated Digital Innovation
              </h3>
              <p>
                Enable rapid experimentation, deployment, and scaling of
                next-generation digital solutions.
              </p>
            </div>
            <div className="bg-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Scalable & Secure Foundations
              </h3>
              <p>
                Build adaptable, secure platforms that evolve with your
                technology ecosystem and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEngineering;
