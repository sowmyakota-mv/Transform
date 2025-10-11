// src/components/PeopleChangeCapability.tsx
import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

  const capabilitiesData = [
  {
    title: "Strategic Vision Co-Creation",
    desc: "Transform UK collaborates closely with leadership, staff, and stakeholders to co-create a clear strategic vision. This collaborative process ensures alignment across all levels of the organization, fostering a shared understanding and commitment to the transformation goals.",
    img: "/vision.jpg", // fixed
  },
  {
    title: "Targeted Diagnostics for Effective Change",
    desc: "Utilizing targeted diagnostics, Transform UK identifies the core areas that require change. This data-driven approach enables organizations to focus their efforts on the most impactful aspects, ensuring efficient use of resources and maximizing the potential for successful transformation.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Integrated Strategy, Design, and Delivery",
    desc: "By combining strategy development, design thinking, and delivery planning into a cohesive program, Transform UK ensures that all elements of the transformation are aligned and mutually reinforcing. This integrated approach facilitates smooth implementation and accelerates the realization of desired outcomes.",
    img: "/delivery.jpg", // fixed
  },
  {
    title: "Embedding Change Across Teams",
    desc: "Transform UK works openly and collaboratively with organizations, embedding change across teams. This inclusive approach fosters ownership and accountability, ensuring that the transformation is not just top-down but is embraced at all levels of the organization.",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building a Culture of Agility and Collaboration",
    desc: "Through initiatives like the Transform Academy, which offers workshops on topics such as Agile methodologies and sustainable service design, Transform UK equips organizations with the skills and mindsets necessary to thrive in today's dynamic environments. These programs promote a culture of continuous learning and adaptability.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Leveraging Complex Capability Partnerships",
    desc: "Transform UK collaborates with a network of specialist experts to tackle complex challenges. This partnership model combines the agility and innovation of SMEs with the comprehensive service offerings of larger consultancies, delivering tailored solutions that drive lasting impact.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Proven Success in Public Sector Transformation",
    desc: "Transform UK's expertise is particularly evident in public sector transformations, such as the Health Improvement Services Transition (HIST) Programme. Their four-stage change management journey—encompassing vision creation, planning, implementation, and embedding—has been instrumental in delivering clarity, continuity, and long-term impact in complex public health initiatives.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80", // fixed
  },
  {
    title: "Commitment to Sustainable and Inclusive Change",
    desc: "At the heart of Transform UK's approach is a commitment to delivering secure, inclusive, and fully integrated digital futures. By focusing on building the culture, capabilities, and systems needed for lasting change, they ensure that transformation efforts are not only effective but also equitable and sustainable.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

const PeopleChangeCapability: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      <div className="relative bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 text-white py-36 px-6 md:px-20 -mb-16 overflow-hidden shadow-xl">
  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
  <div className="relative max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
      People & Change Capability
    </h1>
    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
      Transform UK specializes in guiding organizations through complex transformations by focusing on the human aspect of change. Their approach emphasizes the development of people, fostering a culture of collaboration, and implementing strategies that ensure sustainable and impactful change.
    </p>
  </div>


        <div className="space-y-20 py-16">
          {capabilitiesData.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 100 + 100}>
              <div
                className={`flex flex-col md:flex-row items-center ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-12`}
              >
                <div className="md:w-1/2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleChangeCapability;
