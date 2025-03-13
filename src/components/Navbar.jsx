import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (target) => {
    if (target === "resume") {
      navigate("/resume");
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent shadow-md py-4 px-6 flex justify-between items-center z-50">
      <RouterLink to="/" className="text-lg font-bold text-yellowAccent">
        Portfolio
      </RouterLink>

      <div className="hidden md:flex gap-6">
        {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item.toLowerCase())}
            className="cursor-pointer hover:text-purpleCard transition-all duration-300"
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => navigate("/resume")}
          className="cursor-pointer text-white bg-purpleCard px-4 py-2 rounded-lg hover:bg-yellowAccent transition-all duration-300"
        >
          Resume
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-purpleCard p-2 rounded-full text-white hover:bg-yellowAccent transition-all duration-300"
        >
          {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-md bg-gradient-to-b from-black/80 via-darkBg0/85 to-[#c7a2ff1a] flex flex-col items-center justify-center space-y-6 transition-opacity duration-300">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className="text-xl text-white bg-purpleCard px-6 py-3 rounded-lg hover:bg-yellowAccent transition-all duration-300"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => navigate("/resume")}
            className="text-xl text-white bg-purpleCard px-6 py-3 rounded-lg hover:bg-yellowAccent transition-all duration-300"
          >
            Resume
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mt-4 bg-purpleCard p-3 rounded-full text-white hover:bg-yellowAccent transition-all duration-300"
          >
            {theme === "dark" ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
