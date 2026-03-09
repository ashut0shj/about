import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaCode, FaTimes,  FaRocket, FaChalkboardTeacher } from "react-icons/fa";
const experiences = [
  {
    period: "Dec 2025 – Present",
    role: "Software Development Intern",
    company: "OneBanc Technologies",
    location: "Gurgaon, India",
    description:
      "Built backend APIs for a salary routing and notification platform processing structured financial data with real-time inputs. Implemented schema validation, Luhn checks and identity verification for financial identifiers to ensure data accuracy. Designed a config-driven template system for dynamic employee-wise message generation without hard-coded logic. Integrated WhatsApp, SMS and Email notifications through external APIs to support salary workflows. Worked on forward proxy setup, creating API config files and testing APIs. Added structured logging and error handling to improve reliability and debugging of data pipelines.",
    tags: ["Python", "REST APIs", "WhatsApp API", "Data Validation"],
    icon: FaBriefcase,
    current: true,
  },

  {
    period: "Sept 2025 – Dec 2025",
    role: "Software Development Intern",
    company: "SKDIV Industries",
    location: "Remote, Australia",
    description:
      "Built chat and user interaction features for an Electron.js social media desktop app on Windows and Mac. Integrated WebSockets for real-time messaging and added local caching to keep chats smooth and responsive. Connected frontend with backend APIs for authentication, user data and message syncing. Set up CI/CD workflows to automate desktop app builds, packaging and deployments for team testing.",
    tags: ["Electron.js", "WebSockets", "CI/CD", "Desktop App"],
    icon: FaCode,
  },

  {
    period: "Aug 2023 – Present",
    role: "Co-founder & Technical Head",
    company: "PosterStash",
    location: "India",
    description:
      "Drove 110% profit growth by streamlining operations and designing a mobile-first user experience. Co-founded a poster e-commerce platform for campuses, scaling to multiple colleges through an ambassador network. Implemented Google OAuth2 with Firebase Auth and role-based access for admins and managers. Used Firebase Realtime DB for user data, AWS S3 for storing posters, and Razorpay for secure payments. Deployed on AWS EC2 with CI/CD pipelines, enabling scalable, reliable, and automated production rollouts.",
    tags: ["React", "FastAPI", "AWS", "PostgreSQL", "Razorpay"],
    icon: FaRocket,
  },

  {
    period: "Aug 2024 – May 2025",
    role: "Software Development Intern",
    company: "KNUCT Technologies",
    location: "Remote, Delhi",
    description:
      "Built Python-based data processing pipelines and optimized transformations for better performance. Created reusable utilities and automated validation to improve reliability of processing workflows.",
    tags: ["Python", "Data Pipelines", "ETL", "Validation"],
    icon: FaCode,
  },

  {
    period: "Jul 2024 – Dec 2024",
    role: "Teaching Assistant — Data Structures and Algorithms",
    company: "IIIT Naya Raipur",
    location: "Naya Raipur, India",
    description:
      "Mentored a selected cohort of 30 juniors, conducting regular DSA sessions and one-on-one doubt-clearing. Provided guidance on algorithms, code quality, and interview preparation with live problem-solving.",
    tags: ["DSA", "Mentoring", "Algorithms"],
    icon: FaChalkboardTeacher,
  },
];

const ExperienceCard = memo(({ exp, index, onExpand }) => {
  const Icon = exp.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-[14px] top-10 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.5), rgba(168,85,247,0.05))" }}
        />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 0 14px rgba(168,85,247,0.5)" }}
      >
        <Icon size={12} className="text-white" />
      </div>

      {/* Card */}
      <div
        className="rounded-xl border p-6 transition-all duration-300 hover:border-purple-500/40"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: exp.current ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.08)",
        }}
      >
        {/* Company first, period on right */}
        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              {exp.current && (
                <span className="text-xs px-2.5 py-0.5  text-emerald-400  font-mono">
                  Current
                </span>
              )}
            </div>
            {/* Role below company */}
            <p className="text-base text-purple-300 font-medium">{exp.role}</p>
            <p className="text-sm text-gray-500 mt-0.5">{exp.location}</p>
          </div>
          <span className="text-sm text-gray-500 font-mono whitespace-nowrap">{exp.period}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mt-4 hidden md:block">{exp.description}</p>
        <p className="text-gray-300 text-base leading-relaxed mt-4 md:hidden line-clamp-3">{exp.description}</p>

        <button
          className="text-purple-400 text-sm mt-2 md:hidden hover:text-purple-300 transition-colors"
          onClick={() => onExpand(exp)}
        >
          Read more →
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tags.map((tag) => (
            <span key={tag} className="text-sm px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

const Experience = () => {
  const [expanded, setExpanded] = useState(null);
  const handleExpand = useCallback((exp) => setExpanded(exp), []);
  const handleClose = useCallback(() => setExpanded(null), []);

  return (
    <section id="experience" className="py-24 px-8">
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
          Experience
        </h2>
      </motion.div>

      {/* Timeline — full width, no max-w */}
      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} onExpand={handleExpand} />
        ))}
      </div>

      {/* Mobile modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-white/10 p-6 overflow-hidden"
              style={{ background: "rgba(8,0,20,0.97)" }}
            >
              <div className="h-[2px] absolute top-0 left-0 right-0" style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{expanded.company}</h3>
                  <p className="text-base text-purple-300 mt-0.5">{expanded.role}</p>
                </div>
                <button onClick={handleClose} className="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                  <FaTimes size={16} />
                </button>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mt-3">{expanded.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(Experience);