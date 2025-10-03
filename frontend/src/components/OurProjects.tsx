import React from 'react';
import ScrollAnimation from '../animation/ScrollAnimation';

const projects = [
  {
    title: 'Interactive Product Configurator',
    description: '3D model manipulation with real-time customization using WebGL and Three.js.',
    imageUrl: '/3d-img.jpg',
    link: '/projects/product-configurator',
    bg: 'bg-blue-100', 
    hoverBg: 'hover:bg-blue-600', // darker blue
  },
  {
    title: 'AI-Powered User Journey',
    description: 'Smart personalization with predictive analytics built on React and machine learning.',
    imageUrl: '/ai-img.jpg',
    link: '/projects/ai-user-journey',
    bg: 'bg-green-100', 
    hoverBg: 'hover:bg-green-600', // darker green
  },
  {
    title: 'Immersive Brand Experience',
    description: 'Virtual showroom with interactive elements using VR and WebXR technologies.',
    imageUrl: '/animation-img.jpg',
    link: '/projects/immersive-brand',
    bg: 'bg-purple-100',
    hoverBg: 'hover:bg-purple-600', // darker purple
  },
];

const OurProjects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollAnimation delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Experiences We've Crafted
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 text-center">
            Explore our portfolio of immersive digital solutions that have transformed how brands connect with their audiences.
          </p>
        </ScrollAnimation>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <div
                className={`relative rounded-2xl shadow-md transition-all overflow-hidden group ${item.bg} ${item.hoverBg}
                  hover:shadow-xl hover:scale-110 transform`}
              >
                {/* Full-width card image */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-2 px-4 mt-4 text-gray-900 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 group-hover:text-gray-200 text-left px-4 mb-4">
                  {item.description}
                </p>

                {/* View Project link */}
                <a
                  href={item.link}
                  className="inline-flex items-center px-4 py-2 mb-4 ml-4 font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  View Project
                  <span className="ml-2 text-2xl font-bold">→</span>
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
