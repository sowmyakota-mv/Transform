// src/pages/Innovation/FutureTech.tsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Factory, Truck, Video, Zap } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const futureTechs = [
  {
    icon: <Cpu className="w-10 h-10 text-indigo-600" />,
    title: "Quantum Computing Simulation",
    desc: "Prototype environment to explore quantum algorithms and their potential applications.",
    details: `Traditional computing struggles with complex optimization and simulation tasks. This simulated quantum environment allows developers to experiment with qubit algorithms and entanglement simulations. Using Qiskit and Python, it helps visualize and test quantum algorithms before deploying on real quantum hardware, fostering early experimentation and R&D in quantum computing.`,
    tags: ["Quantum Computing", "Simulation", "Python", "Qiskit"],
    bg: "from-indigo-50 to-indigo-100",
  },
  {
    icon: <Brain className="w-10 h-10 text-pink-600" />,
    title: "Neural Interface Prototype",
    desc: "Brain-computer interface for hands-free control and communication.",
    details: `This prototype explores direct neural interaction with devices, allowing users to control computers and machines using brain signals. Leveraging EEG sensors and signal processing, the system demonstrates the potential of neurotechnology for accessibility, advanced control, and futuristic human-computer interaction.`,
    tags: ["NeuroTech", "Brain-Computer Interface", "EEG", "Prototyping"],
    bg: "from-pink-50 to-red-100",
  },
  {
    icon: <Factory className="w-10 h-10 text-blue-600" />,
    title: "Digital Twin Factory",
    desc: "Virtual replica of a production line for simulation and optimization.",
    details: `The Digital Twin Factory is a virtual model of a physical manufacturing system. Using IoT data, simulations, and real-time analytics, it helps predict bottlenecks, optimize workflows, and reduce downtime. This concept demonstrates how virtual models can drive efficiency and foresight in industrial operations.`,
    tags: ["Digital Twin", "IoT", "Simulation", "Industry 4.0"],
    bg: "from-blue-50 to-cyan-100",
  },
  {
    icon: <Truck className="w-10 h-10 text-orange-600" />,
    title: "Autonomous Delivery Bot",
    desc: "AI-driven autonomous robots for last-mile delivery in urban areas.",
    details: `This prototype explores autonomous delivery solutions with AI navigation, object detection, and route optimization. Equipped with sensors and real-time mapping, it demonstrates safe and efficient urban deliveries. It highlights the potential of robotics and AI in transforming logistics and urban mobility.`,
    tags: ["AI", "Robotics", "Autonomous", "Logistics"],
    bg: "from-orange-50 to-yellow-100",
  },
  {
    icon: <Video className="w-10 h-10 text-green-600" />,
    title: "Synthetic Media Generator",
    desc: "AI system generating realistic synthetic images, videos, and audio.",
    details: `This prototype leverages AI to generate high-quality synthetic media for testing, prototyping, and creative applications. Using GANs and deep learning models, it demonstrates how synthetic media can accelerate R&D, content generation, and experimentation while emphasizing ethical AI practices.`,
    tags: ["AI", "Synthetic Media", "GAN", "Deep Learning"],
    bg: "from-green-50 to-emerald-100",
  },
  {
    icon: <Zap className="w-10 h-10 text-teal-600" />,
    title: "Bio-Inspired Robotics",
    desc: "Robotics inspired by nature for adaptive and flexible behaviors.",
    details: `Bio-Inspired Robotics explores robotic designs modeled after animals and natural systems. Examples include soft robots, robotic insects, and adaptive mechanisms. This prototype focuses on adaptability, efficiency, and innovative mechanical design to solve complex real-world challenges.`,
    tags: ["Robotics", "Bio-Inspired", "Soft Robotics", "Prototyping"],
    bg: "from-teal-50 to-cyan-100",
  },
];

const FutureTech: React.FC = () => {
  return (
    <section id="/innovation/future-tech" className="min-h-screen py-28 px-6 bg-gradient-to-b from-white via-purple-50 to-white">
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-4">
            Future Tech
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Exploring emerging technologies and visionary concepts that shape the future.
          </p>
        </div>
      </ScrollAnimation>

      {/* Future Tech Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {futureTechs.map((tech, index) => (
          <ScrollAnimation key={index} delay={index * 150}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl shadow-md bg-gradient-to-br ${tech.bg} p-8 flex flex-col h-full border border-purple-200 hover:border-purple-400 transition-all duration-300`}
            >
              <div className="mb-4">{tech.icon}</div>
              <h2 className="text-2xl font-semibold text-purple-800 mb-3">
                {tech.title}
              </h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {tech.desc}
              </p>
              <div className="mb-4">
                {tech.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{tech.details}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default FutureTech;
