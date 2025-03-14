import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const navigate = useNavigate();

  // Typing Effect State
  const fullText = "Software Developer | Tech Enthusiast | Problem Solver";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing Effect Logic
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40); 
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Blinking Cursor Effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
      <ParticlesBackground />

      <motion.h1
  initial={{ opacity: 0, y: -70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
  
  className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
>
  {"{Ashutosh Jaiswal}"}
</motion.h1>

      {/* Typing Effect */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg text-gray-400 mt-2"
      >
        {typedText}
        <span className="text-gray-400 ">{cursorVisible ? "█" : ""}</span>
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex gap-6 mt-4"
      >
        <a href="https://github.com/ashut0shj" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="text-white hover:text-purpleCard transition" />
        </a>
        <a href="https://www.linkedin.com/in/ashut0sh28/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-white hover:text-purpleCard transition" />
        </a>
      </motion.div>

      {/* View Resume Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        onClick={() => navigate("/resume")}
        className="mt-6 px-6 py-3 bg-purpleCard text-white font-semibold rounded-lg hover:bg-yellowAccent transition"
      >
        View Resume
      </motion.button>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-1">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown className="text-white text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
