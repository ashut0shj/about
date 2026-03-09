import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "PosterStash",
    description:
      "Campus e-commerce platform for students to buy and sell posters. Google login, role-based access, Razorpay payments. Deployed on AWS EC2 with CI/CD, Firebase & S3 storage. Scaled to 1000+ users with 5000+ orders.",
    tech: ["React", "FastAPI", "AWS EC2", "Firebase", "AWS S3", "Razorpay"],
    link: null,
    liveSite: "https://posterstash.scifre.in",
    highlight: true,
  },
  {
    title: "CodePlus",
    description:
      "Full-stack system to manage and visualize Codeforces performance for competitive programming groups. Automated data sync via cron jobs, inactivity email reminders, optimized API with caching.",
    tech: ["MERN Stack", "Recharts", "Cron", "Codeforces API"],
    link: "https://github.com/ashut0shj/TLE-CodePlus",
    liveSite: "https://tle-code-plus.vercel.app",
  },
  {
    title: "Study-Simplify",
    description:
      "Platform that transcribes, summarizes, and generates questions from PDFs, PPTs, and handwritten notes. Uses Tesseract OCR, T5, and BERT for NLP tasks.",
    tech: ["FastAPI", "React", "Tesseract OCR", "T5", "BERT"],
    link: "https://github.com/ashut0shj/minor-study-simplify",
    liveSite: "https://study-simplify-three.vercel.app",
  },
  {
    title: "Crossword Puzzle Generator",
    description:
      "Theme-based crossword generator using OpenAI for clue creation. Supports difficulty scaling and custom puzzle generation for learning and games.",
    tech: ["Python", "Flask", "OpenAI", "NLP"],
    link: "https://github.com/ashut0shj/CrosswordPuzzleGenerator",
  },
  {
    title: "Ballot-Block",
    description:
      "Decentralized voting platform using Solidity and React for transparent elections. IPFS for voting data storage, MetaMask for authentication.",
    tech: ["Solidity", "Hardhat", "React", "Ethers.js", "IPFS"],
    link: "https://github.com/ashut0shj/e-voting",
  },
  {
    title: "Swift Guess",
    description:
      "Cross-platform word guessing game with animated feedback, hints, and score tracking. Firebase for dynamic word/hint loading across Android, Web, and Windows.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/swift_guess",
    liveSite: "https://swift-guess.vercel.app/",
  },
  {
    title: "IIITNR App",
    description:
      "Event and club management app for IIIT Naya Raipur. Handles registrations, requests, and announcements with Firebase auth, real-time DB, and storage.",
    tech: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/ashut0shj/iiit-app",
  },
  {
    title: "Google Sheets Mail Merge",
    description:
      "Apps Script tool to send personalized bulk emails from Google Sheets. Supports inline images, attachments, CC, and basic open tracking.",
    tech: ["Google Apps Script", "Gmail API", "Google Sheets"],
    link: "https://github.com/ashut0shj/mail_merge",
  },
  {
    title: "RFID Home Security",
    description:
      "Home security system using RFID tags and OTP verification on Raspberry Pi. Alarm triggers and simple access management for secure entry.",
    tech: ["Raspberry Pi", "RFID", "Python", "IoT"],
    link: "https://github.com/ashut0shj/doorlock",
  },
  {
    title: "Image Quality Enhancement",
    description:
      "IEEE research project improving image clarity using sequential filtering and classical computer vision techniques.",
    tech: ["Python", "OpenCV", "Image Processing"],
    link: "#",
  },
];

const TAG_COLORS = {
  React: "#61dafb",
  FastAPI: "#009688",
  "AWS EC2": "#ff9900",
  Firebase: "#ffca28",
  "AWS S3": "#ff9900",
  Flutter: "#54c5f8",
  Solidity: "#6b8cba",
  Python: "#3572A5",
  default: "#a855f7",
};

const getTagColor = (tech) => TAG_COLORS[tech] || TAG_COLORS.default;

const ProjectCard = memo(({ project, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    onClick={() => onOpen(project)}
    className="relative group rounded-xl border cursor-pointer overflow-hidden flex flex-col"
    style={{
      background: "rgba(255,255,255,0.04)",
      borderColor: project.highlight ? "rgba(168,85,247,0.35)" : "rgba(255,255,255,0.08)",
      boxShadow: project.highlight ? "0 0 30px rgba(168,85,247,0.1)" : "none",
    }}
  >
    {/* Top accent line */}
    <div
      className="h-[3px] w-full flex-shrink-0"
      style={{
        background: project.highlight
          ? "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)"
          : "linear-gradient(90deg, #7c3aed55, #ec489955)",
      }}
    />

    <div className="p-6 flex flex-col flex-1">
      {/* Title row */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
          {project.title}
        </h3>
        {project.highlight && (
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono ml-2 whitespace-nowrap flex-shrink-0">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md font-mono"
            style={{
              background: `${getTagColor(tech)}18`,
              color: getTagColor(tech),
              border: `1px solid ${getTagColor(tech)}35`,
            }}
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2.5 py-1 rounded-md font-mono text-gray-500 border border-white/8">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200"
          >
            <FaGithub size={14} /> Code
          </a>
        )}
        {project.liveSite && (
          <a
            href={project.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-emerald-400 hover:text-emerald-300 border border-emerald-500/25 hover:border-emerald-500/50 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-200"
          >
            <FaExternalLinkAlt size={11} /> Live Site
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

const Modal = memo(({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: "rgba(8,0,20,0.97)" }}
        >
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)" }} />
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200 ml-4"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md font-mono"
                  style={{
                    background: `${getTagColor(tech)}18`,
                    color: getTagColor(tech),
                    border: `1px solid ${getTagColor(tech)}35`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
                >
                  <FaGithub size={14} /> View Code
                </a>
              )}
              {project.liveSite && (
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <FaExternalLinkAlt size={12} /> Live Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpen = useCallback((p) => setSelectedProject(p), []);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-24 px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2
          className="text-4xl font-bold"
          style={{
            background: "linear-gradient(135deg, #c084fc, #ec4899, #f59e0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects
        </h2>
      </motion.div>

      {/* Full-width grid, no max-w */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} onOpen={handleOpen} />
        ))}
      </div>

      <Modal project={selectedProject} onClose={handleClose} />
    </section>
  );
};

export default memo(Projects);