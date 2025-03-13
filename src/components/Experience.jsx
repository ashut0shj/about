import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaMoneyBill } from "react-icons/fa";

const experiences = [
  {
    year: "2025 - Present",
    role: "Senior Placement Coordinator",
    company: "Training and Placement Cell, IIIT Naya Raipur",
    description:
      "Leading the placement team, coordinating campus recruitment drives, and ensuring smooth interactions between students and recruiters. Implementing new strategies to improve placement processes and student employability.",
    icon: <FaBriefcase />,
  },
  {
    year: "2024 - Present",
    role: "Vice Secretary",
    company: "The Society of Coders, IIIT Naya Raipur",
    description:
      "Led the organization of coding contests and hackathons. Mentored junior students in problem-solving, conducted workshops, and fostered a collaborative learning environment.",
    icon: <FaCode />,
  },
  {
    year: "2022 - 2023",
    role: "Events and PR Member",
    company: "E-Cell IIIT-NR",
    description:
      "Organized and executed entrepreneurship-related events, managed public relations, and coordinated with external partners for guest lectures and workshops.",
    icon: <FaMoneyBill />,
  },
];

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedExp, setSelectedExp] = useState(null);

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
    <section id="experience" className="py-16 px-8 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline Line (Fills Dynamically) */}
        <div className="absolute left-6 top-0 w-1 bg-gray-700 rounded-full h-full" />
        <motion.div
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-yellowAccent to-purple-700 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255, 217, 0, 0.3)",
              transition: { duration: 0.3, type: "spring", stiffness: 200 },
            }}
            className="mb-12 ml-16 relative"
          >
            {/* Icon */}
            <div className="absolute -left-12 top-2 w-10 h-10 flex items-center justify-center bg-purple-700 text-white rounded-full shadow-md">
              {exp.icon}
            </div>

            {/* Experience Content */}
            <div className="bg-purpleCard p-6 rounded-lg shadow-lg border border-purple-500">
              <p className="text-sm text-yellowAccent">{exp.year}</p>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>

              {/* Description for Desktop */}
              <p className="text-gray-300 mt-2 hidden md:block">{exp.description}</p>

              {/* Mobile View: Show Preview & Read More */}
              <p className="text-gray-300 mt-2 md:hidden">
                {exp.description.slice(0, 50)}...
              </p>
              <button
                className="mt-2 text-yellowAccent md:hidden"
                onClick={() => setSelectedExp(exp)}
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Read More Modal */}
      {selectedExp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-darkBg p-6 rounded-lg shadow-lg max-w-md w-full text-white"
          >
            <h3 className="text-xl font-semibold text-yellowAccent">
              {selectedExp.role}
            </h3>
            <p className="text-gray-400">{selectedExp.company}</p>
            <p className="text-gray-300 mt-2">{selectedExp.description}</p>

            <button
              className="mt-4 px-4 py-2 bg-purpleCard rounded-lg hover:bg-yellowAccent transition-all duration-300"
              onClick={() => setSelectedExp(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Experience;
