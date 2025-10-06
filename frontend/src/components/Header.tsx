import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  title: string;
  href?: string;
  submenu?: { title: string; href: string }[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Explore Us",
    submenu: [
      { title: "About Transform", href: "/abouttransform" },
      { title: "People Behind Innovation", href: "/people" },
      { title: "Future Sustainability", href: "/sustainability" },
      { title: "Community Impact", href: "/impact" },
    ],
  },
  { title: "Expertise", href: "/expertise" },
  { title: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Detect scroll for bottom gradient
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          {/* Left: Logo/Title */}
          <div className="text-3xl font-bold text-orange-900">Transform</div>

          {/* Middle: Nav Links */}
          <nav className="flex justify-center space-x-8 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return link.submenu ? (
                <div
                  key={link.title}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`font-medium ${
                      isActive
                        ? "text-purple-700 border-b-2 border-purple-700"
                        : "text-orange-900 hover:underline"
                    }`}
                  >
                    {link.title}
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === link.title && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-orange-900 hover:bg-gray-100"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.title}
                  to={link.href || "/"}
                  className={`font-medium ${
                    isActive
                      ? "text-purple-700 border-b-2 border-purple-700"
                      : "text-orange-900 hover:underline"
                  }`}
                >
                  {link.title}
                </Link>
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
