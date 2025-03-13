import { motion } from "framer-motion";

const projects = [
  {
    title: "IIITNR-APP",
    description:
      "Developed a cross-platform mobile app for IIIT Naya Raipur to streamline event registrations, requisitions, and student club management. Integrated Firebase for real-time data updates, authentication, and cloud storage, ensuring secure and smooth operation across both Android and iOS platforms.",
    tech: ["React Native", "Firebase", "Node.js"],
    link: "https://github.com/ashut0shj/iiit-app",
  },
  {
    title: "Study-Simplify",
    description:
      "Built an educational platform using Flask and Python for backend development, integrating AI for text extraction, summarization, and quiz generation. Enhanced learning by creating a responsive web interface that facilitates efficient study management for students and teachers.",
    tech: ["Flask", "Python", "AI", "HTML", "CSS"],
    link: "https://github.com/ashut0shj/minor-study-simplify",
  },
  {
    title: "Crossword Puzzle Generator",
    description:
      "Created an AI-driven crossword puzzle generator using Constraint Satisfaction Problem (CSP) algorithms. Leveraged OpenAI's API for advanced puzzle design, and deployed on a Flask-based website for an interactive user experience.",
    tech: ["Python", "Flask", "OpenAI API", "CSP Algorithms"],
    link: "https://github.com/ashut0shj/CrosswordPuzzleGenerator",
  },
  {
    title: "RFID-Based Home Security System",
    description:
      "Developed an RFID-based security solution for home use, integrating OTP and RFID tags for secure door access with a built-in alarm system, using RaspberryPi. Designed to offer a scalable, affordable security option for residential purposes.",
    tech: ["Raspberry Pi", "RFID", "Python", "IoT"],
    link: "https://github.com/ashut0shj/doorlock",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A secure and transparent blockchain-based voting system using Solidity and Django.",
    tech: ["Solidity", "Django", "React", "Hardhat"],
    link: "#",
  },
  {
    title: "Image Quality Enhancement",
    description:
      "An IEEE research project on image enhancement using sequential filtering techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "#",
  },
  {
    title: "React Portfolio",
    description:
      "A dynamic portfolio website built with React, Bootstrap, and Framer Motion.",
    tech: ["React", "Bootstrap", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 20px rgba(255, 217, 0, 0.3)",
              transition: { duration: 0.3, type: "spring", stiffness: 200 },
            }}
            className="bg-purpleCard p-6 rounded-lg shadow-lg text-left cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-darkBg text-yellowAccent px-2 py-1 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow-md hover:bg-purple-600 transition-all duration-300"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
