// src/pages/Innovation/Hackathons.tsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Users, Globe, Trophy, Sparkle } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const hackathons = [
  {
    icon: <Cpu className="w-10 h-10 text-indigo-600" />,
    title: "AI for Good Hackathon",
    desc: "Develop AI solutions addressing social and environmental challenges.",
    details: `Teams competed to build AI models that predict environmental risks, optimize energy usage, and improve public health. The hackathon encouraged rapid prototyping, collaboration, and practical AI implementation.`,
    tags: ["AI", "Social Impact", "Sustainability", "Machine Learning"],
    bg: "from-indigo-50 to-indigo-100",
  },
  {
    icon: <Code className="w-10 h-10 text-pink-600" />,
    title: "FinTech Innovation Sprint",
    desc: "Design financial tech solutions that enhance banking and payments.",
    details: `Focused on digital banking, mobile payments, and financial analytics, teams built prototypes to improve user experience and efficiency. Participants explored blockchain, API integrations, and AI-based insights.`,
    tags: ["FinTech", "Blockchain", "API", "UX/UI"],
    bg: "from-pink-50 to-red-100",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Collaborative Robotics Challenge",
    desc: "Experiment with human-robot collaboration and industrial automation.",
    details: `Teams developed robotics prototypes that assist humans in tasks, improve safety, and enhance productivity. The challenge emphasized IoT, AI, and adaptive robotics in real-world scenarios.`,
    tags: ["Robotics", "Collaboration", "IoT", "Automation"],
    bg: "from-blue-50 to-cyan-100",
  },
  {
    icon: <Sparkle className="w-10 h-10 text-orange-600" />,
    title: "Smart Energy Hack",
    desc: "Innovate in renewable energy management and smart grid solutions.",
    details: `Projects focused on energy efficiency, demand prediction, and renewable integration. Participants leveraged sensors, predictive algorithms, and dashboards to optimize energy usage in communities.`,
    tags: ["Energy", "Smart Grid", "IoT", "Sustainability"],
    bg: "from-orange-50 to-yellow-100",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "Global Climate Challenge",
    desc: "Prototype solutions to combat climate change at local and global levels.",
    details: `Hackers worked on carbon footprint tracking, sustainable supply chain solutions, and climate risk visualization tools. The challenge promoted eco-conscious innovation and cross-border collaboration.`,
    tags: ["Climate", "Sustainability", "GIS", "Data Analysis"],
    bg: "from-green-50 to-emerald-100",
  },
  {
    icon: <Trophy className="w-10 h-10 text-teal-600" />,
    title: "Next-Gen Mobility Hackathon",
    desc: "Innovate transportation solutions for smart cities and autonomous mobility.",
    details: `Teams explored autonomous vehicles, smart traffic management, and multimodal transport solutions. The hackathon emphasized IoT, AI, and human-centric urban mobility design.`,
    tags: ["Mobility", "Smart Cities", "AI", "IoT"],
    bg: "from-teal-50 to-cyan-100",
  },
];

const Hackathons: React.FC = () => {
  return (
    <section id="/innovation/hackathons" className="min-h-screen py-28 px-6 bg-gradient-to-b from-white via-purple-50 to-white">
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-4">
            Hackathons & Challenges
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Showcasing innovation sprints, competitions, and collaborative experimentation.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {hackathons.map((hack, index) => (
          <ScrollAnimation key={index} delay={index * 150}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl shadow-md bg-gradient-to-br ${hack.bg} p-8 flex flex-col h-full border border-purple-200 hover:border-purple-400 transition-all duration-300`}
            >
              <div className="mb-4">{hack.icon}</div>
              <h2 className="text-2xl font-semibold text-purple-800 mb-3">
                {hack.title}
              </h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {hack.desc}
              </p>
              <div className="mb-4">
                {hack.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{hack.details}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
