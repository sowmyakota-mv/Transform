import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Globe2, Layers3, Camera, MonitorPlay } from "lucide-react";

const ImmersiveBrandExperience: React.FC = () => {
  return (
    <section id="/projects/immersive-brand" className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-600 text-white py-32 px-6 md:px-20 text-center">
        <ScrollAnimation delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Immersive Brand Experience
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-purple-100">
            A next-generation virtual showroom that blends 3D visuals, 
            interactive storytelling, and immersive web technologies to bring brands to life.
          </p>
        </ScrollAnimation>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <ScrollAnimation delay={150}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
              alt="Virtual Brand Experience"
              className="rounded-3xl shadow-lg md:w-1/2 h-80 object-cover"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The <strong>Immersive Brand Experience</strong> project is designed 
                to revolutionize how audiences interact with brands in digital spaces. 
                By combining 3D visualization, motion design, and VR/AR technologies, 
                this platform creates emotionally engaging, interactive, and story-driven 
                experiences that build deeper brand connections.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users can explore virtual environments, interact with products in 3D, 
                and experience narratives that adapt dynamically to user input — 
                offering a personalized, immersive journey through the brand’s universe.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Technology Stack */}
      <div className="bg-white py-20">
        <ScrollAnimation delay={200}>
          <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              <div className="bg-purple-100 rounded-2xl p-6 shadow-md">
                <Globe2 className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Web & VR Frameworks
                </h3>
                <p className="text-gray-700 text-sm">
                  WebXR, A-Frame, and Three.js for immersive 3D rendering and cross-platform compatibility.
                </p>
              </div>
              <div className="bg-fuchsia-100 rounded-2xl p-6 shadow-md">
                <Layers3 className="w-10 h-10 text-fuchsia-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3D Modeling & Animation
                </h3>
                <p className="text-gray-700 text-sm">
                  Blender and Autodesk Maya for realistic model creation and animation sequences.
                </p>
              </div>
              <div className="bg-indigo-100 rounded-2xl p-6 shadow-md">
                <MonitorPlay className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Front-End Development
                </h3>
                <p className="text-gray-700 text-sm">
                  React.js, Tailwind CSS, and Framer Motion for interactive storytelling and performance.
                </p>
              </div>
              <div className="bg-pink-100 rounded-2xl p-6 shadow-md">
                <Camera className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visual Experience
                </h3>
                <p className="text-gray-700 text-sm">
                  HDR lighting, cinematic shaders, and real-time reflections for a lifelike visual journey.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-20">
        <ScrollAnimation delay={250}>
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
              alt="Virtual Showroom"
              className="rounded-2xl shadow-md object-cover h-64"
            />
            <img
              src="/impact.jpg"
              alt="3D Product Showcase"
              className="rounded-2xl shadow-md object-cover h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?auto=format&fit=crop&w=800&q=80"
              alt="Interactive Experience"
              className="rounded-2xl shadow-md object-cover h-64"
            />
          </div>
        </ScrollAnimation>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 text-white py-20 text-center">
        <ScrollAnimation delay={300}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Immersive Brand Worlds?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Let’s craft immersive experiences that redefine digital storytelling and brand engagement.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-fuchsia-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch →
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ImmersiveBrandExperience;
