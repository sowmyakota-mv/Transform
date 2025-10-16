// src/pages/ProductConfigurator.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const ProductConfigurator: React.FC = () => {
  return (
    <section id="projects/product-configurator" className="py-36 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 -mb-36">
      <div className="container mx-auto px-6 md:px-20">
        {/* Title */}
        <ScrollAnimation delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Interactive Product Configurator
          </h1>
        </ScrollAnimation>

        {/* Intro */}
        <ScrollAnimation delay={200}>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-10">
            A powerful 3D web-based configurator that enables customers to visualize, customize, and interact with products in real-time using <b>Three.js</b> and <b>WebGL</b>.
            Built with scalability and performance in mind, this project bridges the gap between imagination and reality for e-commerce and product marketing.
          </p>
        </ScrollAnimation>

        {/* Image Section */}
        <ScrollAnimation delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <img
              src="/3d-confi.jpg"
              alt="3D Configurator Main"
              className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
            />
            <img
              src="/product.jpg"
              alt="Configurator UI"
              className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
            />
          </div>
        </ScrollAnimation>

        {/* Technologies Used */}
        <ScrollAnimation delay={400}>
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              🔧 Technologies Used
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
              <li>⚙️ <b>React.js</b> — for modular UI components and dynamic rendering.</li>
              <li>🌐 <b>Three.js</b> — 3D model rendering, scene setup, lighting & camera handling.</li>
              <li>🧩 <b>WebGL</b> — real-time GPU-accelerated graphics in browsers.</li>
              <li>🎨 <b>Tailwind CSS</b> — fast responsive UI and component styling.</li>
              <li>🚀 <b>Node.js + Express</b> — backend API for model configuration and asset delivery.</li>
              <li>☁️ <b>AWS S3</b> — asset hosting and optimized 3D file loading.</li>
            </ul>
          </div>
        </ScrollAnimation>

        {/* Project Goals & Features */}
        <ScrollAnimation delay={500}>
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              🌟 Key Features
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Real-time color & texture customization with dynamic lighting updates.</li>
              <li>• Interactive product rotation and zoom via mouse or touch gestures.</li>
              <li>• Dynamic component swapping (e.g., changing car rims, furniture fabric).</li>
              <li>• High-quality rendering optimized for mobile and desktop.</li>
              <li>• Secure backend for model storage and configuration management.</li>
            </ul>
          </div>
        </ScrollAnimation>

        {/* Development Process */}
        <ScrollAnimation delay={600}>
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              🧠 Development Process
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The configurator was built with a modular architecture. The <b>Three.js</b> renderer handles 3D scene
              updates, while <b>React state</b> synchronizes user interactions with model parameters. A custom backend
              was developed to fetch model data and textures dynamically from AWS. We implemented performance
              optimizations such as lazy texture loading, GPU instancing, and compressed model formats (GLTF/DRACO).
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProductConfigurator;
