// src/components/UXDesign.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";
import { Palette, Lightbulb, Monitor, Users, PenTool, Cpu, Code } from "lucide-react";

const servicesData = [
  {
    title: "User Research & Experience Strategy",
    desc: "Gain deep insights into user behaviors, goals, and pain points through comprehensive research and analytics to shape effective UX strategies.",
    icon: <Users className="w-10 h-10 text-pink-600" />,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", // UX research team
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Create visually compelling and intuitive interfaces backed by prototyping, usability testing, and continuous iteration for pixel-perfect experiences.",
    icon: <Monitor className="w-10 h-10 text-pink-600" />,
    img: "/ux-ui.jpg", // UI design workspace
  },
  {
    title: "Design Thinking & Innovation Workshops",
    desc: "Empower teams with design thinking methodologies that drive creativity, ideation, and problem-solving at every stage of the product lifecycle.",
    icon: <Lightbulb className="w-10 h-10 text-pink-600" />,
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80", // brainstorming post-its
  },
  {
    title: "Application Development",
    desc: "Deliver end-to-end application development that integrates UX design with frontend and backend for fully functional, user-centric digital products.",
    icon: <PenTool className="w-10 h-10 text-pink-600" />,
    img: "/app-dev.jpg", // app dev
  },
  {
    title: "Frontend Development",
    desc: "Transform design prototypes into interactive, responsive, and high-performance user interfaces using modern frontend frameworks like React or Vue.",
    icon: <Monitor className="w-10 h-10 text-pink-600" />,
    img: "/frontend.jpg", // frontend dev
  },
  {
    title: "Backend & API Development",
    desc: "Build robust backend systems and APIs that power seamless communication, data processing, and integration with frontend experiences.",
    icon: <Code className="w-10 h-10 text-pink-600" />,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80", // backend dev
  },
];

const UXDesign: React.FC = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Redefining Experiences with{" "}
            <span className="text-pink-600">UX & Design Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Craft meaningful, user-centered experiences that connect creativity
            with strategy. We blend design thinking, research, and technology to
            deliver impactful digital journeys.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-pink-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-700 transition"
          >
            Let’s Collaborate
          </Link>
        </div>
      </ScrollAnimation>

      {/* What Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 mb-24">
        <ScrollAnimation delay={200}>
          <div className="flex flex-col items-center bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-lg overflow-hidden p-8 md:p-12">
            <img
              src="/ux.jpg"
              alt="UX & Design Innovation"
              className="w-full md:w-3/4 h-80 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What is UX & Design Innovation?
            </h2>

            <div className="max-w-3xl space-y-6 text-left">
              <p className="text-gray-700">
                UX & Design Innovation focuses on creating seamless, intuitive,
                and delightful user experiences that not only meet user needs
                but also advance business goals. It blends human-centered design
                principles with innovation, ensuring technology feels personal
                and impactful.
              </p>
              <p className="text-gray-700">
                Through empathy-driven research, creative ideation, and
                continuous testing, we design experiences that connect brands
                with people in meaningful ways, extending into frontend,
                backend, and full application development.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Who & Why Section */}
      <div className="bg-gradient-to-r from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation delay={250}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who Benefits from UX & Design Innovation?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Businesses aiming to improve product adoption and loyalty.</li>
                <li>Startups creating intuitive digital experiences.</li>
                <li>Organizations transforming legacy interfaces into modern UX.</li>
                <li>Product and marketing teams focusing on engagement.</li>
                <li>Development teams integrating design into apps and platforms.</li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why UX & Design Innovation Matters
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <b>Boost Engagement:</b> Design experiences that users love
                  interacting with.
                </li>
                <li>
                  <b>Reduce Friction:</b> Streamline journeys with intuitive
                  design patterns.
                </li>
                <li>
                  <b>Enhance Brand Perception:</b> Build trust and recognition
                  through consistent design.
                </li>
                <li>
                  <b>Drive Conversions:</b> Align UX with business outcomes and
                  user goals.
                </li>
                <li>
                  <b>Foster Innovation:</b> Encourage experimentation and
                  creative problem-solving, bridging design with application development.
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our UX & Design Innovation Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {servicesData.map((service, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 350}>
              <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:brightness-50 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-pink-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Key Benefits of UX & Design Innovation
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-pink-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Elevated User Satisfaction
              </h3>
              <p>
                Deliver user experiences that delight, engage, and convert —
                building loyalty through every interaction.
              </p>
            </div>
            <div className="bg-pink-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Stronger Brand Identity
              </h3>
              <p>
                Create cohesive, memorable visuals and experiences that
                strengthen your brand story and trust.
              </p>
            </div>
            <div className="bg-pink-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Improved Business Impact
              </h3>
              <p>
                Align design strategy with business goals to enhance
                conversions, adoption, and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXDesign;
