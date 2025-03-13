import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-scroll";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full bg-darkBg shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold text-yellowAccent">Portfolio</h1>
      <div className="flex gap-6">
        {["Home", "About", "Resume", "Projects", "Experience", "Contact"].map(
          (item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purpleCard"
            >
              {item}
            </Link>
          )
        )}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
