// src/pages/DigitalTransformation.tsx
import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../animation/ScrollAnimation";
import { FaCheckSquare } from "react-icons/fa";

const DigitalTransformation: React.FC = () => {
  return (
    <section
      id="/expertise/digital-transformation"
      className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-28 md:py-36 -mb-24"
    >
      {/* Hero Section */}
<ScrollAnimation delay={100}>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-20 mb-20">
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
        Driving <span className="text-cyan-600">Digital Transformation</span> for a Smarter Future
      </h1>
      <p className="text-lg text-slate-700 mb-6">
        We help organizations reimagine business operations, products, and platforms to unlock growth, efficiency, and customer value through technology and data.
      </p>
      <p className="text-slate-700 mb-6">
        At <span className="text-cyan-600 font-semibold">Innovic Solutions</span>, we combine strategy, creativity, and technology to empower enterprises to evolve with agility in the digital age. Our transformation framework ensures alignment between people, processes, and platforms to accelerate innovation.
      </p>
      <p className="text-slate-700 mb-8">
        Whether you’re modernizing legacy systems or scaling new digital ecosystems, we enable seamless <span className="text-cyan-600 font-semibold">digital transformation journeys</span>  from vision to value delivery  ensuring measurable business outcomes at every step.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-cyan-700 transition"
      >
        Get Started
      </Link>
    </div>

    <div className="flex justify-center">
      <img
        src="/digitaltransform.jpg"
        alt="Digital Transformation"
        className="rounded-3xl shadow-xl w-full max-w-md md:max-w-lg object-cover"
      />
    </div>
  </div>
</ScrollAnimation>

{/* Zigzag Overview Section */}
<div className="max-w-6xl mx-auto mb-24 px-6">
  {/* Overview */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <ScrollAnimation delay={200}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Strategy and Innovation"
          className="rounded-2xl shadow-md"
        />
      </div>
    </ScrollAnimation>

    <ScrollAnimation delay={250}>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Transforming Strategy into Impact
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <span className="text-cyan-600 font-bold">Digital transformation</span> is more than technology  it’s about embedding innovation into every level of your organization. We blend strategy, data, and engineering to modernize operations and deliver tangible results.
        </p>
        <ul className="list-none mt-4 space-y-2 text-slate-700">
  {[
    "Empowers smarter decision-making through analytics",
    "Accelerates innovation and time-to-market",
    "Builds resilience with scalable digital platforms",
    "Aligns technology with long-term business vision",
    "Drives cross-department collaboration and agility",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-2">
      <FaCheckSquare className="text-green-600 mt-1 flex-shrink-0" />
      <span>{item}</span>
    </li>
  ))}
</ul>
      </div>
    </ScrollAnimation>
  </div>
        {/* Why It Matters */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollAnimation delay={300}>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Why It Matters
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Businesses today operate in an environment of constant change.
                Adopting digital transformation not only reduces costs but
                ensures long-term agility, customer satisfaction, and
                sustainability.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Organizations that embrace digital ecosystems can proactively
                adapt to new opportunities, drive continuous innovation, and
                maintain competitive advantage. It’s no longer an option  it’s a
                necessity for modern success.
              </p>
              <ul className="list-none pl-6 mt-4 text-slate-700 space-y-2">
                {["Unlocks new revenue opportunities",
                "Improves customer and employee experiences",
                "Enhances efficiency through intelligent automation",
                "Supports sustainability and reduced operational waste",
                "Creates data-driven cultures for better forecasting",
                ].map((item, index) => (
    <li key={index} className="flex items-start gap-2">
      <FaCheckSquare className="text-green-600 mt-1 flex-shrink-0" />
      <span>{item}</span>
    </li>
  ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={350}>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                alt="Business Growth"
                className="rounded-2xl shadow-md"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Our Core Digital Transformation Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  // {
  //   title: "Digital Transformation",
  //   desc: "We help organizations reimagine business operations, products, and platforms to unlock growth and value through technology and data.",
  //   img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  //   link: "/expertise/digital-transformation",
  // },
  {
    title: "Data, AI & Analytics",
    desc: "Turn raw data into actionable intelligence using AI-driven analytics, business intelligence, and smart automation.",
    img: "/data.jpg",
    link: "/expertise/data-analytics",
  },
  {
    title: "Business Intelligence",
    desc: "Drive insights and smarter decision-making with dashboards, reporting, and predictive analytics.",
    img: "/business.jpg",
    link: "/expertise/business-intelligence",
  },
  {
    title: "Cloud Solutions",
    desc: "Leverage modern cloud-native architectures to build secure, scalable, and efficient digital ecosystems.",
    img: "/cloud-migrating.jpg",
    link: "/expertise/cloud-solutions",
  },
  {
    title: "UX & Design Innovation",
    desc: "We design user-centered products that merge creativity with functionality to deliver exceptional digital experiences.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
    link: "/expertise/ux-design",
  },
  {
    title: "People & Change",
    desc: "Empowering teams through training, leadership programs, and culture change to sustain transformation.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    link: "/expertise/people-change",
  },
  {
    title: "Sustainability & ESG",
    desc: "Integrate sustainable practices and ESG strategies to drive long-term responsible growth.",
    img: "/esg.jpg",
    link: "/expertise/sustainability",
  },
  {
    title: "Technology & Platform Engineering",
    desc: "Design, build, and maintain robust platforms with scalable and secure technology solutions.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    link: "/expertise/platform-engineering",
  },
  {
    title: "Cyber Security & Networking",
    desc: "Protect your digital assets with end-to-end cybersecurity solutions and secure networking.",
    img: "/cyber-security.jpg",
    link: "/expertise/cyber-security",
  },
  {
    title: "Product Management & Strategy",
    desc: "Drive successful product delivery with strategy, roadmap planning, and market alignment.",
    img: "/management.jpg",
    link: "/expertise/product-management",
  },
  {
    title: "IT Strategy & Consulting",
    desc: "Align technology with business goals, create roadmaps, and provide expert IT consulting services.",
    img: "/it-strategy.jpg",
    link: "/expertise/it-strategy",
  },
          ].map((service, index) => (
            <ScrollAnimation delay={400 + index * 100} key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
  <img
    src={service.img}
    alt={service.title}
    className="h-48 w-full object-cover"
  />

  {/* Modern Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="p-6 relative z-10">
    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-slate-700 mb-4 group-hover:text-white transition-colors duration-300">
      {service.desc}
    </p>
    <Link
      to={service.link}
      className="text-cyan-600 font-semibold hover:underline group-hover:text-white transition-colors duration-300"
    >
      Explore ↗
    </Link>
  </div>
</div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-500 py-16 text-center text-white -mb-28">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Lead Your Digital Future?
        </h3>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Let's co-create a transformation strategy that accelerates innovation
          and measurable outcomes for your business.
        </p>
        <Link
          to="/contact"
          className="bg-white text-cyan-700 font-semibold py-3 px-8 rounded-full hover:bg-slate-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default DigitalTransformation;
