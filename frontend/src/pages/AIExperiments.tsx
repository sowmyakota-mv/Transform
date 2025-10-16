// src/pages/Innovation/AIExperiments.tsx
import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, LineChart, Mic, Zap, Eye } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const experiments = [
  {
    icon: <LineChart className="w-10 h-10 text-purple-600" />,
    title: "Predictive Maintenance AI",
    desc: "Preventing equipment downtime using predictive analytics and anomaly detection.",
    details: `This experiment focuses on developing a predictive maintenance model trained on IoT sensor data from industrial machines. Using time-series forecasting and anomaly detection, the system identifies patterns that precede mechanical failures. This allows teams to schedule proactive maintenance, reduce costs, and increase uptime. Built using Python, TensorFlow, and Scikit-learn, it showcases the power of data-driven reliability engineering.`,
    tags: ["IoT", "Time-Series", "TensorFlow", "Anomaly Detection"],
    bg: "from-indigo-50 to-purple-100",
  },
  {
    icon: <Brain className="w-10 h-10 text-pink-600" />,
    title: "AI Chat Assistant (LLM Fine-Tuning)",
    desc: "Customized conversational assistant trained on domain-specific data.",
    details: `This project explores fine-tuning large language models (LLMs) for enterprise customer service. By adapting open-source transformers with proprietary datasets, the assistant maintains contextual understanding, tone alignment, and domain-specific expertise. It demonstrates how companies can leverage in-house AI agents for consistent customer engagement.`,
    tags: ["NLP", "LLM", "Fine-Tuning", "Transformers"],
    bg: "from-pink-50 to-red-100",
  },
  {
    icon: <Eye className="w-10 h-10 text-blue-600" />,
    title: "Image-Based Quality Inspection",
    desc: "Real-time defect detection using computer vision and deep learning.",
    details: `Using CNN architectures and YOLOv8, this system scans product images or live video feeds to detect defects such as scratches, misalignments, or deformities. The model integrates with IoT cameras for instant feedback and automated rejection. It’s an excellent demonstration of AI-driven quality control in manufacturing lines.`,
    tags: ["Computer Vision", "YOLOv8", "CNN", "Automation"],
    bg: "from-blue-50 to-cyan-100",
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-600" />,
    title: "AI-Powered Resume Screener",
    desc: "Smart resume filtering system based on NLP and embeddings.",
    details: `This experiment leverages Natural Language Processing and semantic similarity algorithms to automatically shortlist resumes that align with job requirements. It uses embeddings and cosine similarity to evaluate candidate skills, experience, and cultural fit — reducing recruiter workload and improving fairness in the hiring process.`,
    tags: ["NLP", "BERT", "Embeddings", "Recruitment Tech"],
    bg: "from-orange-50 to-yellow-100",
  },
  {
    icon: <Zap className="w-10 h-10 text-green-600" />,
    title: "Smart Energy Optimization",
    desc: "Energy efficiency through reinforcement learning and adaptive control.",
    details: `This experiment applies reinforcement learning to dynamically control HVAC and lighting systems based on occupancy and energy usage patterns. The agent learns from environment feedback to optimize consumption while maintaining comfort. The system demonstrates how AI can contribute to sustainable building management.`,
    tags: ["Reinforcement Learning", "IoT", "Sustainability"],
    bg: "from-green-50 to-emerald-100",
  },
  {
    icon: <Mic className="w-10 h-10 text-teal-600" />,
    title: "Emotion Recognition from Voice",
    desc: "Detecting emotional states from speech using deep learning models.",
    details: `This project utilizes spectrogram-based feature extraction and LSTM networks to classify emotions like happiness, anger, or sadness from voice recordings. It has applications in customer support analytics, sentiment tracking, and mental health monitoring. The experiment highlights how audio data can enhance human–AI empathy interfaces.`,
    tags: ["Speech AI", "Deep Learning", "LSTM", "Emotion Detection"],
    bg: "from-teal-50 to-cyan-100",
  },
];

const AIExperiments: React.FC = () => {
  return (
    <section id="/innovation/ai" className="min-h-screen py-28 px-6 bg-gradient-to-b from-white via-purple-50 to-white">
      <ScrollAnimation delay={100}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-4">
            AI Experiments
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Exploring the future of intelligence through research, prototypes, and hands-on experimentation.
          </p>
        </div>
      </ScrollAnimation>

      {/* Experiments Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {experiments.map((exp, index) => (
          <ScrollAnimation key={index} delay={index * 150}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl shadow-md bg-gradient-to-br ${exp.bg} p-8 flex flex-col h-full border border-purple-200 hover:border-purple-400 transition-all duration-300`}
            >
              <div className="mb-4">{exp.icon}</div>
              <h2 className="text-2xl font-semibold text-purple-800 mb-3">
                {exp.title}
              </h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {exp.desc}
              </p>
              <div className="mb-4">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.details}</p>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default AIExperiments;
