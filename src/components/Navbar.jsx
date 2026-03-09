import { useState, useContext, useCallback, memo, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavigation = useCallback((target) => {
    setIsOpen(false);
    if (target === "resume") return navigate("/resume");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  const toggleTheme = useCallback(() => setTheme(t => t === "dark" ? "light" : "dark"), [setTheme]);

  return (
    <>
      {/* Always transparent navbar */}
      <nav className="fixed top-0 w-full z-50">
        <div className="px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <RouterLink
            to="/"
            className="font-mono text-lg font-bold tracking-tight"
            style={{
              background: "#f59e0b",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ashut0shj
          </RouterLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item.toLowerCase())}
                className="px-4 py-2 text-base text-gray-300 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
              >
                {item}
              </button>
            ))}

            <div className="w-px h-5 bg-white/10 mx-2" />

            <button
              onClick={() => navigate("/resume")}
              className="px-5 py-2 text-base font-semibold text-white rounded-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 15px rgba(168,85,247,0.25)",
              }}
            >
              Resume
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-200"
            >
              {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(3,0,10,0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5 p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-gray-500 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => handleNavigation("resume")}
            className="mt-4 px-8 py-3 text-xl font-semibold text-white rounded-xl"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
          >
            Resume
          </button>

          <button
            onClick={toggleTheme}
            className="mt-2 p-3 rounded-full border border-white/10 text-gray-400 hover:text-white"
          >
            {theme === "dark" ? <BsSun size={22} /> : <BsMoon size={22} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
