import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ScrollAnimation from "../animation/ScrollAnimation";

const servicesList = [
  "Cloud Solutions",
  "Technology & Platform Engineering",
  "UX & Design Innovation",
  "Data, AI & Analytics",
  "Cybersecurity & Networking",
  "Product Management & Strategy",
  "Business Intelligence",
  "Digital Transformation",
  "IT Strategy & Consulting",
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const filteredServices = servicesList.filter((service) =>
    service.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setSearch(service);
    setShowDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Please fill this field";
    if (!formData.email.trim()) newErrors.email = "Please fill this field";
    if (!formData.phone.trim()) newErrors.phone = "Please fill this field";
    if (!formData.message.trim()) newErrors.message = "Please fill this field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // ✅ EmailJS integration
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        console.log("Email successfully sent!");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="bg-gradient-to-b from-[#E8F4FA] to-white py-20 px-6 md:px-16">
      <ScrollAnimation delay={100}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2B47] mb-3 mt-12">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Reach out today to discuss your project or ask any questions. We’re
            here to help your business thrive.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left Info Panel */}
          <div className="bg-[#0FB9B1] text-white p-10 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Innovic Solutions
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Let’s build something extraordinary together. Whether you’re looking
                for innovation, technology, or transformation we’re just one message
                away from helping you achieve success.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-4">Contact Us</h3>
            <div className="space-y-5 text-white">
              {/* ✅ Phone - Dialer */}
              <a
                href="tel:+919811253572"
                className="flex items-center gap-3 text-lg hover:text-gray-200 transition"
              >
                <Phone size={20} />
                <p>+91 9811253572</p>
              </a>

              {/* ✅ Email - Mailto */}
              <a
                href="mailto:info@innovicsolutions.com"
                className="flex items-center gap-3 text-lg hover:text-gray-200 transition"
              >
                <Mail size={20} />
                <p>info@innovicsolutions.com</p>
              </a>

              {/* ✅ Location - Google Maps */}
              <a
                href="https://www.google.com/maps?q=Bangalore,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-gray-200 transition"
              >
                <MapPin size={20} />
                <p>Bangalore, India</p>
              </a>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-10 md:p-12 bg-white relative">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0FB9B1] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0FB9B1] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData((prev) => ({ ...prev, phone }))
                    }
                    inputClass="!w-full !border !border-gray-300 !rounded-lg !p-3 !pl-14 !focus:ring-2 !focus:ring-[#0FB9B1] !focus:outline-none"
                    buttonClass="!bg-white !border-gray-300 !mr-2"
                    dropdownClass="!text-gray-800"
                    containerClass="w-full"
                    placeholder="Enter your phone number"
                    enableSearch={true}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="mt-6 relative">
                  <label className="block text-gray-700 font-medium mb-2">
                    Which service are you looking for?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search or select service"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setShowDropdown(true);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-[#0FB9B1] focus:outline-none"
                    />
                    <ChevronDown
                      size={20}
                      className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                      onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {showDropdown && (
                      <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto shadow-lg">
                        {filteredServices.length > 0 ? (
                          filteredServices.map((service) => (
                            <li
                              key={service}
                              onClick={() => handleServiceSelect(service)}
                              className="px-4 py-2 hover:bg-[#E8F4FA] cursor-pointer text-gray-700"
                            >
                              {service}
                            </li>
                          ))
                        ) : (
                          <li className="px-4 py-2 text-gray-500">
                            No services found
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0FB9B1] focus:outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-[#0FB9B1] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#099E98] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-20">
                <h3 className="text-3xl font-bold text-[#1D2B47] mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-700 text-lg md:text-xl text-center max-w-md">
                  Your message has been successfully submitted. We’ll get back to
                  you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ContactSection;
