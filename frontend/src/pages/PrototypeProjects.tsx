// src/pages/Innovation/PrototypeProjects.tsx
import React from "react";
import { motion } from "framer-motion";
import { Airplay, Box, Hand, Lightbulb, Mic, Leaf } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const prototypes = [
  {
    icon: <Airplay className="w-10 h-10 text-indigo-600" />,
    title: "Smart Inventory Drone",
    desc: "Autonomous drone prototype for real-time warehouse inventory tracking.",
    details: `Manual inventory is slow, error-prone, and costly. This prototype leverages drones equipped with cameras and computer vision algorithms to scan shelves and track stock levels automatically. Using Python, OpenCV, and ROS, the system demonstrates potential efficiency gains, reducing manual checks by up to 80%. This proof-of-concept highlights the intersection of AI and robotics in logistics innovation.`,
    tags: ["Drone", "Computer Vision", "AI", "Python", "ROS"],
    bg: "from-indigo-50 to-indigo-100",
  },
  {
    icon: <Box className="w-10 h-10 text-pink-600" />,
    title: "AR Workspace Planner",
    desc: "Augmented Reality prototype for planning and visualizing office layouts.",
    details: `This AR application allows teams to dynamically visualize office spaces in real-time. Using ARKit and ARCore, employees can move, rotate, and place virtual furniture to optimize layouts. The prototype demonstrates a creative, interactive way to manage workspace planning efficiently and collaboratively.`,
    tags: ["AR", "UX", "ARKit", "ARCore", "Prototyping"],
    bg: "from-pink-50 to-red-100",
  },
  {
    icon: <Hand className="w-10 h-10 text-blue-600" />,
    title: "Gesture-Controlled IoT Devices",
    desc: "Control smart devices with intuitive hand gestures.",
    details: `This prototype integrates gesture recognition with IoT devices, allowing users to operate lights, fans, and AC units with hand movements. Using computer vision and Arduino-based IoT integration, it demonstrates natural and touchless human-machine interaction — a step towards futuristic smart homes and offices.`,
    tags: ["IoT", "Gesture Control", "Computer Vision", "Prototyping"],
    bg: "from-blue-50 to-cyan-100",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
    title: "AI-Powered Mood Lighting",
    desc: "Dynamic lighting system adapting to user mood and environment.",
    details: `This prototype uses sensors and cameras to detect user mood and environmental cues, adjusting ambient lighting accordingly. Built with IoT and AI algorithms, it showcases an innovative approach to enhancing personal comfort and productivity through adaptive environments.`,
    tags: ["AI", "IoT", "Sensors", "Prototyping"],
    bg: "from-orange-50 to-yellow-100",
  },
  {
    icon: <Mic className="w-10 h-10 text-green-600" />,
    title: "Voice-Enabled Task Manager",
    desc: "A prototype personal assistant for scheduling and task management.",
    details: `This voice-enabled system integrates with team calendars and productivity apps to automate task scheduling, reminders, and prioritization. Using NLP, speech recognition, and API integrations, it demonstrates a hands-free, efficient workflow solution suitable for modern office environments.`,
    tags: ["Voice AI", "NLP", "Task Management", "Prototyping"],
    bg: "from-green-50 to-emerald-100",
  },
  {
    icon: <Leaf className="w-10 h-10 text-teal-600" />,
    title: "Sustainable Packaging Simulator",
    desc: "Interactive tool to evaluate eco-friendly packaging designs.",
    details: `This prototype simulates and evaluates packaging materials for durability, cost, and environmental impact. Using web-based 3D modeling and sustainability algorithms, teams can rapidly test designs before physical production. It highlights the importance of sustainable innovation in product design and R&D experimentation.`,
    tags: ["Sustainability", "3D Modeling", "Simulation", "Prototyping"],
    bg: "from-teal-50 to-cyan-100",
  },
];

const PrototypeProjects: React.FC = () => {
  return (
    <section id="innovation/prototypes" className="min-h-screen py-28 px-6 bg-gradient-to-b from-white via-purple-50 to-white">
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-4">
            Prototype Projects
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Early-stage concepts and experimental builds that showcase creativity, problem-solving, and innovation potential.
          </p>
        </div>
      </ScrollAnimation>

      {/* Prototype Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {prototypes.map((proto, index) => (
          <ScrollAnimation key={index} delay={index * 150}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl shadow-md bg-gradient-to-br ${proto.bg} p-8 flex flex-col h-full border border-purple-200 hover:border-purple-400 transition-all duration-300`}
            >
              <div className="mb-4">{proto.icon}</div>
              <h2 className="text-2xl font-semibold text-purple-800 mb-3">
                {proto.title}
              </h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {proto.desc}
              </p>
              <div className="mb-4">
                {proto.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{proto.details}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default PrototypeProjects;
