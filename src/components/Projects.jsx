import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Study-Simplify",
    description:
      "Built an AI-powered platform to transcribe, summarize, and generate questions from PDFs, PPTs, and images using FastAPI and NLP models. Used Tesseract OCR, T5, and BERT for text extraction, summarization, and question generation.",
    tech: ["FastAPI", "React", "Tesseract OCR", "NLP", "Transformers", "T5", "BERT"],
    link: "https://github.com/ashut0shj/minor-study-simplify",
    liveDemo: "https://study-simplify-three.vercel.app",
  },
  {
    title: "Crossword Puzzle Generator",
    description:
      "Designed an automated crossword puzzle generator using Python and OpenAI for NLP, allowing users to create custom puzzles. Implemented word selection algorithms that generated puzzles with accurate difficulty scaling and user-defined themes.",
    tech: ["AI Algorithms", "OpenAI", "Flask", "Python", "OOP", "NLP", "LLM"],
    link: "https://github.com/ashut0shj/CrosswordPuzzleGenerator",
  },
  {
    title: "Ballot-Block",
    description:
      "Built a decentralized voting platform with Solidity and React, enabling secure, member-only, tamper-proof elections. Used IPFS for immutable metadata storage and integrated MetaMask for authentication and real-time vote tracking.",
    tech: ["Solidity", "Hardhat", "React", "Ethers.js", "IPFS", "MetaMask"],
    link: "https://github.com/ashut0shj/e-voting",
  },
  {
    title: "Swift Guess",
    description:
      "Released a guessing game on Android, Web, and Windows with dynamic difficulty levels, hint system, scoring, and UI inspired by aesthetics. Integrated Firebase for real-time word/hint fetching, and added features like animated feedback, heart-based lives, and persistent local high scores.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/swift_guess",
    liveDemo: "https://swift-guess.vercel.app/",
  },
  {
    title: "IIITNR-APP",
    description:
      "Developed a cross-platform mobile app for IIIT Naya Raipur to streamline event registrations, requisitions, and student club management. Integrated Firebase for real-time data updates, authentication, and cloud storage, ensuring secure and smooth operation across both Android and iOS platforms.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/iiit-app",
  },
  {
    title: "Google Sheets Mail Merge with Gmail",
    description:
      "Automated bulk email sending using Google Sheets and Gmail. Fetches recipient details from a sheet, merges placeholders into a Gmail draft, and sends personalized emails automatically. Supports CC, inline images, attachments, and email tracking.",
    tech: ["Google Apps Script", "Gmail API", "Google Sheets"],
    link: "https://github.com/ashut0shj/mail_merge"
  },
  {
    title: "Image Quality Enhancement",
    description:
      "An IEEE research project on image enhancement using sequential filtering techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "#",
  },
  {
    title: "RFID-Based Home Security System",
    description:
      "Developed an RFID-based security solution for home use, integrating OTP and RFID tags for secure door access with a built-in alarm system, using RaspberryPi. Designed to offer a scalable, affordable security option for residential purposes.",
    tech: ["Raspberry Pi", "RFID", "Python", "IoT"],
    link: "https://github.com/ashut0shj/doorlock",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 20px rgba(255, 217, 0, 0.3)",
              transition: { duration: 0.3, type: "spring", stiffness: 200 },
            }}
            className="bg-purpleCard p-6 rounded-lg shadow-lg text-left cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.description}</p>
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
            <div className="flex gap-2 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow-md hover:bg-purple-600 transition-all duration-300 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View Code →
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-darkBg p-8 rounded-lg shadow-lg max-w-md mx-4"
          >
            <h3 className="text-2xl font-semibold text-yellowAccent mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-700 text-white px-2 py-1 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 justify-end">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow-md hover:bg-purple-600 transition-all duration-300 text-sm"
              >
                View Code
              </a>
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 text-sm"
                >
                  Live Demo
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-500 transition-all duration-300 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;