import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaBook } from "react-icons/fa";

const experiences = [
  {
    year: "2025 - Present",
    role: "Industry-Academia Meet (IAM) Lead",
    company: "IIIT Naya Raipur",
    description:
      "Leading the Industry-Academia Meet, organizing collaborations between companies and students, and managing networking events.",
    icon: <FaBriefcase />,
  },
  {
    year: "2025",
    role: "Blockchain Developer",
    company: "Personal Project",
    description:
      "Developed a blockchain-based voting system using Solidity and Django, ensuring secure and transparent elections.",
    icon: <FaCode />,
  },
  {
    year: "2024 - 2025",
    role: "Researcher",
    company: "IEEE Paper on Image Enhancement",
    description:
      "Conducted research on sequential filtering techniques for image quality enhancement and prepared an IEEE research paper.",
    icon: <FaBook />,
  },
];

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const height = section.offsetHeight;
        const screenHeight = window.innerHeight;
        const scrolled = Math.min(1, Math.max(0, (screenHeight - top) / height));
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-16 px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Scroll progress line */}
        <motion.div
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-yellowAccent to-purple-700 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="mb-12 ml-16 relative"
          >
            {/* Icon */}
            <div className="absolute -left-12 top-2 w-10 h-10 flex items-center justify-center bg-purple-700 text-white rounded-full shadow-md">
              {exp.icon}
            </div>

            {/* Experience Content */}
            <div className="bg-purpleCard p-6 rounded-lg shadow-md border border-purple-600">
              <p className="text-sm text-yellowAccent">{exp.year}</p>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
