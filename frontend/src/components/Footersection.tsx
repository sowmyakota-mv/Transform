// src/components/Footer.tsx
import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import ScrollAnimation from "../animation/ScrollAnimation";

const Footersection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Transform UK</h3>
            <p className="text-gray-400">
              Driving innovation through immersive digital solutions and
              AI-driven experiences that transform the way brands engage with
              their audiences.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400 text-lg" />
                123 Innovation Drive, London, UK
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-lg" />
                info@transformuk.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-blue-400 text-lg" />
                +44 1234 567890
              </p>
            </div>
          </div>

          {/* Column 3: Links */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-6">Follow Us</h4>
            <div className="flex flex-col space-y-4 text-lg">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaLinkedin className="text-blue-400 text-2xl" /> LinkedIn
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaTwitter className="text-blue-400 text-2xl" /> Twitter
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaFacebook className="text-blue-400 text-2xl" /> Facebook
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Transform UK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footersection;
