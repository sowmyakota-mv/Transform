import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { FaCheckSquare } from "react-icons/fa";

const cyberServicesData = [
  {
    title: "Robust Cybersecurity Frameworks",
    desc: "Implementing comprehensive cybersecurity measures to safeguard digital assets. Key focus areas include:",
    points: [
      "Risk Assessment & Management: Identifying potential vulnerabilities and implementing strategies to mitigate risks.",
      "Firewall & Intrusion Detection Systems: Deploying advanced systems to monitor and protect network traffic.",
      "Data Encryption: Ensuring sensitive information is encrypted both in transit and at rest.",
      "Compliance & Auditing: Assisting businesses in adhering to industry standards and regulations.",
    ],
    img: "/cyber-security.jpg",
  },
  {
    title: "Advanced Networking Solutions",
    desc: "Supporting seamless business operations through efficient and secure network solutions:",
    points: [
      "Network Design & Implementation: Creating scalable and efficient network architectures.",
      "Cloud Integration: Facilitating the integration of cloud services for enhanced flexibility.",
      "VPN & Remote Access Solutions: Providing secure remote connectivity options for employees.",
      "Network Monitoring & Optimization: Ensuring optimal network performance through continuous monitoring.",
    ],
    img: "/network.jpg",
  },
  {
    title: "Public Sector Cybersecurity Initiatives",
    desc: "Enhancing cybersecurity within organizations and public institutions through modern systems and training:",
    points: [
      "Digital Transformation: Modernizing legacy systems to improve security and efficiency.",
      "AI & Data Strategy: Leveraging AI to predict and mitigate potential security threats.",
      "Collaboration with Experts: Partnering with specialists to address complex cybersecurity challenges.",
      "Training & Development: Equipping staff with the necessary skills to manage cybersecurity risks.",
    ],
    img: "/cyber.jpg",
  },
  {
    title: "Networking for Operational Efficiency",
    desc: "Enhancing networking capabilities to support operational goals and optimize performance:",
    points: [
      "System Integration: Ensuring seamless communication between various systems.",
      "Infrastructure Modernization: Upgrading network infrastructures to support current and future needs.",
      "Security Protocols: Implementing robust security measures to protect network integrity.",
      "Performance Optimization: Enhancing network performance to meet organizational demands.",
    ],
    img: "/networking.jpg",
  },
];

const CyberSecurityNetworking: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-36 -mb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Cybersecurity & Networking
        </h1>

        <div className="space-y-20">
          {cyberServicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 100}>
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <ul className="list-none space-y-2 text-gray-700">
  {service.points.map((point, i) => {
    const [title, ...rest] = point.split(":");
    return (
      <li key={i} className="flex items-start gap-2">
        <FaCheckSquare className="mt-1 text-green-600 flex-shrink-0" />
        <span>
          <span className="font-bold">{title}:</span> {rest.join(":").trim()}
        </span>
      </li>
    );
  })}
</ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberSecurityNetworking;
