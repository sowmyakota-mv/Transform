import React from "react";
import { Lightbulb, Cpu, Eye, Rocket, Box } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const journeyData = [
  { year: "2020", title: "Foundation", description: "Started with responsive web design and user experience optimization.", icon: <Lightbulb className="w-6 h-6 text-white" />, iconBg: "from-cyan-500 to-blue-600", side: "left" },
  { year: "2021", title: "3D Integration", description: "Pioneered WebGL and Three.js implementations for interactive product showcases.", icon: <Box className="w-6 h-6 text-white" />, iconBg: "from-teal-500 to-cyan-600", side: "right" },
  { year: "2022", title: "AI Implementation", description: "Integrated machine learning for personalized user experiences and predictive analytics.", icon: <Cpu className="w-6 h-6 text-white" />, iconBg: "from-indigo-500 to-purple-600", side: "left" },
  { year: "2023", title: "Immersive Experiences", description: "Launched VR/AR solutions and immersive brand experiences for enterprise clients.", icon: <Eye className="w-6 h-6 text-white" />, iconBg: "from-purple-500 to-pink-600", side: "right" },
  { year: "2024", title: "Future Ready", description: "Leading the industry with next-generation interactive technologies and AI-driven solutions.", icon: <Rocket className="w-6 h-6 text-white" />, iconBg: "from-green-500 to-emerald-600", side: "left" },
];

const OurJourney: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#102A45] to-[#1E3A65]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation delay={100}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Journey Through Innovation
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Follow our evolution from traditional web development to cutting-edge immersive experiences.
            </p>
          </ScrollAnimation>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-12 md:space-y-0">
            {journeyData.map((milestone, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className={`flex flex-col md:flex-row items-center md:justify-between ${milestone.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Card */}
                  <div className="md:w-1/2 px-4 md:px-8">
                    <div className="group relative rounded-xl p-8 bg-[#1D2B47] border border-cyan-400/20 hover:scale-105 transition-transform duration-300">
                      <div className={`flex items-center mb-4 ${milestone.side === "right" ? "flex-row-reverse justify-end space-x-reverse space-x-4" : "space-x-4"}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${milestone.iconBg} rounded-lg flex items-center justify-center`}>
                          {milestone.icon}
                        </div>
                        <div className={`${milestone.side === "right" ? "text-right" : "text-left"}`}>
                          <div className="text-cyan-400 font-bold text-lg">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-[#0A1A2F] flex-shrink-0 mt-6 md:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
