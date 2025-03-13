import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
      <ParticlesBackground />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-yellowAccent"
      >
        Ashutosh Jaiswal
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg text-gray-400 mt-2"
      >
        Full-Stack Developer | Blockchain Enthusiast
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="flex gap-6 mt-4"
      >
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="text-white hover:text-purpleCard transition" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-white hover:text-purpleCard transition" />
        </a>
      </motion.div>
      
      {/* View Resume Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        onClick={() => navigate("/resume")} // Redirect to Resume Page
        className="mt-6 px-6 py-3 bg-purpleCard text-white font-semibold rounded-lg hover:bg-yellowAccent transition"
      >
        View Resume
      </motion.button>
    </section>
  );
};

export default Hero;
