import React, { useEffect, useState } from "react";

const navLinks = ["Home", "Explore Us", "Expertise", "Contact"];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Detect scroll for bottom gradient
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find active section
      navLinks.forEach((link) => {
        const sectionId = link.toLowerCase().replace(/\s+/g, "");
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="fixed left-8 right-8 mt-5 z-50"
        style={{
          paddingLeft: "36px",
          paddingRight: "36px",
          backgroundColor: "#ffffff",
          borderTop: "12px solid",
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(to right, #F13E84, #9D64EF, #5816AE)",
        }}
      >
        <div className="max-w-7xl mx-auto py-4 grid grid-cols-3 items-center">
          {/* Left: Title */}
          <div className="text-3xl font-bold text-orange-900">Transform</div>

          {/* Middle: Nav Links */}
          <nav className="flex justify-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link;
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className={`font-medium ${
                    isActive
                      ? "text-purple-700 border-b-2 border-purple-700"
                      : "text-orange-900 hover:underline"
                  }`}
                >
                  {link}
                </a>
              );
            })}
          </nav>

          {/* Right: Register Button */}
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Full-width bottom gradient (appears on scroll) */}
      {scrolled && (
        <div
          className="fixed left-0 right-0 z-40"
          style={{
            top: "calc(5rem + 24px)",
            height: "4px",
            background: "linear-gradient(to right, #C4D7EF)",
            opacity: 0.4,
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
