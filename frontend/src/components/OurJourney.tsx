import React from "react";
import { Lightbulb, Cpu, Eye, Rocket, Box } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const journeyData = [
  { 
    year: "2020", 
    title: "Foundation", 
    description: "Started with responsive web design and user experience optimization.", 
    icon: <Lightbulb className="w-6 h-6 text-white" />, 
    iconBg: "from-cyan-500 to-blue-600",
    side: "left"
  },
  { 
    year: "2021", 
    title: "3D Integration", 
    description: "Pioneered WebGL and Three.js implementations for interactive product showcases.", 
    icon: <Box className="w-6 h-6 text-white" />, 
    iconBg: "from-teal-500 to-cyan-600",
    side: "right"
  },
  { 
    year: "2022", 
    title: "AI Implementation", 
    description: "Integrated machine learning for personalized user experiences and predictive analytics.", 
    icon: <Cpu className="w-6 h-6 text-white" />, 
    iconBg: "from-indigo-500 to-purple-600",
    side: "left"
  },
  { 
    year: "2023", 
    title: "Immersive Experiences", 
    description: "Launched VR/AR solutions and immersive brand experiences for enterprise clients.", 
    icon: <Eye className="w-6 h-6 text-white" />, 
    iconBg: "from-purple-500 to-pink-600",
    side: "right"
  },
  { 
    year: "2024", 
    title: "Future Ready", 
    description: "Leading the industry with next-generation interactive technologies and AI-driven solutions.", 
    icon: <Rocket className="w-6 h-6 text-white" />, 
    iconBg: "from-green-500 to-emerald-600",
    side: "left"
  },
];

const OurJourney: React.FC = () => {
  return (
    <section 
      id="innovate" 
      className="py-8 lg:py-12 relative overflow-hidden 
                 bg-gradient-to-br from-[#0A1A2F] via-[#102A45] to-[#1E3A65]"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimation delay={100}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Journey Through Innovation
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-1xl text-slate-200 max-w-3xl mx-auto">
              Follow our evolution from traditional web development to cutting-edge immersive experiences.
            </p>
          </ScrollAnimation>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {journeyData.map((milestone, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div 
                  className={`flex items-center ${milestone.side === 'right' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${milestone.side === 'right' ? 'pl-12' : 'pr-12'}`}>
                    {/* Card */}
                    <div className={`
                      group relative rounded-xl p-8 transition-all duration-500 hover:scale-105
                      bg-[#1D2B47] 
                      border border-gradient-to-r from-blue-400/40 to-cyan-500/40
                      ${milestone.side === 'right' ? 'text-right' : ''}
                    `}>
                      <div className={`flex items-center space-x-4 mb-4 ${milestone.side === 'right' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${milestone.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-cyan-400 font-bold text-lg">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-[#0A1A2F] flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
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
