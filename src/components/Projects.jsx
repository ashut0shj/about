import { motion } from "framer-motion";
import { useState } from "react";
const projects = [
  {
    title: "PosterStash",
    description:
      "Built a campus e-commerce platform where students can buy and sell posters. Added Google login, role-based access, and secure online payments using Razorpay. Deployed backend services on AWS EC2 with CI/CD, used Firebase and AWS S3 for storage, and scaled the platform to 1000+ users with more than 5000 orders across campuses.",
    tech: ["React", "FastAPI", "AWS EC2", "Firebase", "AWS S3", "Razorpay"],
    liveDemo: "https://posterstash.scifre.in",
  },
  {
    title: "CodePlus",
    description:
      "Built a full-stack system to manage and visualize Codeforces performance for competitive programming groups. Integrated automated data sync via cron jobs, inactivity email reminders, and optimized API usage through caching and manual refresh logic.",
    tech: ["MERN Stack", "Recharts", "Cron", "Codeforces API", "Mailing Service"],
    link: "https://github.com/ashut0shj/TLE-CodePlus",
    liveDemo: "https://tle-code-plus.vercel.app",
  },
  {
    title: "Study-Simplify",
    description:
      "Developed a platform that can transcribe, summarize, and generate questions from PDFs, PPTs, and handwritten notes. Used Tesseract OCR for text extraction and NLP models like T5 and BERT for summarization and question generation.",
    tech: ["FastAPI", "React", "Tesseract OCR", "Transformers", "T5", "BERT"],
    link: "https://github.com/ashut0shj/minor-study-simplify",
    liveDemo: "https://study-simplify-three.vercel.app",
  },
  {
    title: "Crossword Puzzle Generator",
    description:
      "Built a crossword puzzle generator that creates theme-based clues using OpenAI. Added difficulty scaling and tools for generating custom puzzles for learning and games.",
    tech: ["Python", "Flask", "OpenAI", "NLP", "OOP"],
    link: "https://github.com/ashut0shj/CrosswordPuzzleGenerator",
  },
  {
    title: "Ballot-Block",
    description:
      "Built a decentralized voting platform using Solidity and React for secure and transparent elections. Used IPFS for storing voting data and MetaMask for user authentication.",
    tech: ["Solidity", "Hardhat", "React", "Ethers.js", "IPFS", "MetaMask"],
    link: "https://github.com/ashut0shj/e-voting",
  },
  {
    title: "Swift Guess",
    description:
      "Developed a cross-platform word guessing game with animated feedback, hints, and score tracking. Used Firebase to fetch words and hints and support gameplay across Android, Web, and Windows.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/swift_guess",
    liveDemo: "https://swift-guess.vercel.app/",
  },
  {
    title: "IIITNR App",
    description:
      "Built an event and club management app for IIIT Naya Raipur to manage registrations, requests, and announcements. Used Firebase for authentication, real-time database, and storage.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/iiit-app",
  },
  {
    title: "Google Sheets Mail Merge with Gmail",
    description:
      "Built a Google Apps Script tool to send personalized bulk emails using data from Google Sheets. Supports inline images, attachments, CC, and basic open tracking.",
    tech: ["Google Apps Script", "Gmail API", "Google Sheets"],
    link: "https://github.com/ashut0shj/mail_merge",
  },
  {
    title: "RFID-Based Home Security System",
    description:
      "Developed a home security system using RFID tags and OTP verification with Raspberry Pi. Added alarm triggers and simple access management for secure entry.",
    tech: ["Raspberry Pi", "RFID", "Python", "IoT"],
    link: "https://github.com/ashut0shj/doorlock",
  },
  {
    title: "Image Quality Enhancement",
    description:
      "Worked on an IEEE research project focused on improving image clarity using sequential filtering and classical computer vision techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "#",
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
                  className="inline-block px-8 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 text-sm border-2 border-black"
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