import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ✅ Apply theme to document root
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Smooth scroll handling
  const handleScrollLink = (e, targetId) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      window.location.href = `/#${targetId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-darkbg border-b border-white dark:border-darkbg sticky top-0 z-50  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:hover:text-white transition-colors">
              Nazmul Hasan<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: "hero-section", label: "Home" },
              { to: "key-features-section", label: "Expertise" },
              { to: "service-section", label: "Services" },
              { to: "testimonial-section", label: "My Work" },
              { to: "Contactus-section", label: "Contact me" },
            ].map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="px-4 py-1 text-black dark:text-gray-300 hover:text-white dark:hover:text-black font-light text-sm cursor-pointer transition-colors rounded-3xl hover:bg-black dark:hover:bg-white "
                onClick={(e) => handleScrollLink(e, link.to)}
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* 🌙 Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "light" ? (
                <FaSun className="w-5 h-5  text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-white " />
              )}
            </button>

            {/* Contact Button */}
            <ScrollLink
              to="Contactus-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="px-6 py-2.5 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all cursor-pointer flex items-center gap-2"
              onClick={(e) => handleScrollLink(e, "Contactus-section")}
            >
              Contact
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              {[
                { to: "hero-section", label: "Home" },
                { to: "key-features-section", label: "About me" },
                { to: "service-section", label: "Services" },
                { to: "testimonial-section", label: "My Work" },
                { to: "Contactus-section", label: "Contact me" },
                { to: "Help-section", label: "Help" },
              ].map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium cursor-pointer transition-colors"
                  onClick={(e) => handleScrollLink(e, link.to)}
                >
                  {link.label}
                </ScrollLink>
              ))}

              {/* Contact Button */}
              <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                <ScrollLink
                  to="Contactus-section"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="w-full px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  onClick={(e) => handleScrollLink(e, "Contactus-section")}
                >
                  Contact
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </ScrollLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
