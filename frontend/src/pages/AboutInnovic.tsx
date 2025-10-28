// src/pages/AboutTransform.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useNavigate } from "react-router-dom";
import { CheckSquare } from "lucide-react"; // ✅ Import checkbox icon

const AboutInnovic: React.FC = () => {
  const navigate = useNavigate();

  // Helper component for reusable checkbox list
  const CheckboxList = ({ items, delayStart = 400 }: { items: string[]; delayStart?: number }) => (
    <ul className="space-y-3 mt-4">
      {items.map((item, idx) => (
        <ScrollAnimation key={idx} delay={delayStart + idx * 100}>
          <li className="flex items-start gap-3">
            <CheckSquare className="text-purple-700 mt-1 flex-shrink-0" size={18} />
            <span>{item}</span>
          </li>
        </ScrollAnimation>
      ))}
    </ul>
  );

  return (
    <div id="aboutinnovic" className="bg-white text-gray-900 py-8">

      {/* Hero Section */}
      <ScrollAnimation delay={100}>
        <section className="relative h-[500px] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
          <h1 className="text-5xl font-extrabold mb-6 max-w-[900px]">Beyond Now: Our Purpose in Motion</h1>
          <p className="max-w-[800px] text-lg leading-relaxed">
            Innovic is not just about building for today. We are shaping tomorrow. 
            We design, deliver, and evolve systems that help organizations confront 
            their biggest challenges with clarity and impact.
          </p>
        </section>
      </ScrollAnimation>

      {/* Today’s Momentum */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">Momentum in Motion</h2>
          <p className="mb-4">
            Right now, we’re helping organizations harness the full power of data, technology, and design. 
            Our mission is simple: deliver impact that lasts. We move fast, but with care, 
            ensuring sustainable transformation that doesn’t just tick boxes it changes realities.
          </p>
          <p className="mb-6">
            From public systems to enterprise ecosystems, our solutions blend capability and culture. 
            We believe that solving complex problems requires empathy, expertise, and a focus on real-world outcomes.
          </p>
          <CheckboxList
            items={[
              "Delivering end-to-end strategy, design, and implementation.",
              "Transforming legacy systems into future-ready solutions.",
              "Embedding measurable outcomes into every initiative.",
              "Balancing innovation with inclusivity and responsibility.",
            ]}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/momentum.jpg" 
            alt="Momentum Illustration" 
            className="rounded-xl shadow-lg w-full md:w-[500px] h-[300px] object-cover"
          />
        </div>
      </section>

      {/* Shaping Tomorrow */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center md:space-x-12 bg-gray-50">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">Designing the Next Horizon</h2>
          <p className="mb-4">
            Complexity isn’t something to fear  it’s where the future happens. We’re building strategies 
            that turn uncertainty into possibility, and possibility into sustainable action.
          </p>
          <p className="mb-6">
            Our focus is on equity, resilience, and innovation, ensuring the systems we design today 
            are strong enough for tomorrow’s challenges and flexible enough for opportunities yet unseen.
          </p>
          <CheckboxList
            items={[
              "Embedding AI and data ethics into future solutions.",
              "Designing with sustainability and circular value in mind.",
              "Investing in regenerative and resilient systems.",
              "Expanding capacity for global-scale digital ecosystems.",
            ]}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/horizon.jpg" 
            alt="Next Horizon Illustration" 
            className="rounded-xl shadow-lg w-full md:w-[500px] h-[300px] object-cover"
          />
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">Foundations That Fuel Us</h2>
          <p className="mb-4">
            Behind every transformation, there are fundamentals that guide how we think, design, 
            and deliver. These pillars aren’t just capabilities  they’re commitments.
          </p>
          <p className="mb-6">
            They define how we approach challenges and what makes our approach distinctive 
            from conventional consulting.
          </p>
          <CheckboxList
            items={[
              "Insight & Intelligence turning data into clarity.",
              "Service Design  creating systems people want to use.",
              "Engineering Excellence  scalable, resilient platforms.",
              "Change & Adoption  making change stick, not just happen.",
              "Purpose & Impact  driving equity and social value.",
            ]}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/foundation.jpg" 
            alt="Foundations Illustration" 
            className="rounded-xl shadow-lg w-full md:w-[500px] h-[300px] object-cover"
          />
        </div>
      </section>

      {/* Culture & People */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center md:space-x-12 bg-gray-50">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">People & Principles</h2>
          <p className="mb-4">
            At the heart of Innovic are people  driven by values, bound by collaboration, 
            and committed to continuous learning. We don’t just build systems; we build cultures of care.
          </p>
          <p className="mb-6">
            Our teams represent a diverse range of voices and perspectives, ensuring we deliver 
            inclusive and human-centered outcomes.
          </p>
          <CheckboxList
            items={[
              "One-team culture: no egos, no silos.",
              "Championing diversity, inclusion, and wellbeing.",
              "Investing in growth and continuous learning.",
              "Building strong connections with communities we serve.",
            ]}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/people.jpg" 
            alt="People & Principles Illustration" 
            className="rounded-xl shadow-lg w-full md:w-[500px] h-[300px] object-cover"
          />
        </div>
      </section>

      {/* Impact & Legacy */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">Impact in Action</h2>
          <p className="mb-4">
            The true measure of our work isn’t found in systems delivered  it’s found in 
            the difference those systems make. We measure success by the lives improved, 
            the efficiency gained, and the fairness achieved.
          </p>
          <p className="mb-6">
            Our projects are shaping governments, communities, and industries to be 
            more resilient, inclusive, and future-ready.
          </p>
          <CheckboxList
            items={[
              "Delivered digital services for critical public-facing systems.",
              "Redesigned appeals and decision-making frameworks.",
              "Unified teams and expertise through strategic mergers.",
              "Balanced large-scale capability with small-team care.",
            ]}
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/impact.jpg" 
            alt="Impact Illustration" 
            className="rounded-xl shadow-lg w-full md:w-[500px] h-[300px] object-cover"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 -mb-24 max-w-[1200px] mx-auto text-center bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white rounded-2xl shadow-lg ">
        <h2 className="text-4xl font-bold mb-6">Join the Evolution</h2>
        <p className="mb-6 max-w-[800px] mx-auto">
          This isn’t just about projects  it’s about partnership. Together, 
          we can build beyond now, shaping systems that leave lasting impact.
        </p>
        <button 
          onClick={() => navigate("/contact")} 
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Let’s Build Forward
        </button>
      </section>

    </div>
  );
};

export default AboutInnovic;
