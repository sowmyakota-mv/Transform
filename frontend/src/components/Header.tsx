import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed left-8 right-8 mt-5 z-50 overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "12px solid",
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(to right, #F13E84, #9D64EF, #5816AE)",
        }}
      >
        {/* Header Container */}
        <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo / Title */}
          <div className="text-3xl font-bold text-orange-900">Transform</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center space-x-8">
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

          {/* Desktop Register */}
          <div className="hidden md:flex">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
              Register
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="absolute right-6 md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-orange-900 w-7 h-7" />
              ) : (
                <Menu className="text-orange-900 w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white rounded-b-2xl shadow-md px-6 py-4 space-y-3 transition-all duration-300">
            {navLinks.map((link) => (
              <div key={link.title}>
                {link.submenu ? (
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-orange-900 hover:text-purple-700">
                      {link.title}
                    </summary>
                    <div className="pl-4 mt-2 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.href}
                          className="block text-sm text-gray-700 hover:text-purple-700"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={link.href || "/"}
                    className="block font-medium text-orange-900 hover:text-purple-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
                Register
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Scroll Line */}
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
