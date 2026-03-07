import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaMoneyBill } from "react-icons/fa";

const experiences = [
  {
    year: "Dec 2025 - Present",
    role: "Software Development Intern",
    company: "OneBanc Technologies Pvt. Ltd. — House of Product, Gurgaon",
    description:
      "Worked on a salary routing and notification system that processes structured salary data from APIs and sends alerts through WhatsApp, SMS, and Email. Added data validation like schema checks, Luhn checks, and phone/email verification. Built a config-based template system to generate employee messages without hard coding, developed internal APIs and tools for salary workflows, worked on forward proxy setup for external APIs, and added logging and error handling to make the system more reliable.",
    icon: <FaBriefcase />,
  },
  {
    year: "Sept 2025 - Dec 2025",
    role: "Software Development Intern",
    company: "SKDIV Industries Pvt. Ltd. — Remote, Australia",
    description:
      "Worked on an Electron.js social media desktop app for Windows and Mac. Built chat and user interaction features, implemented real-time messaging using WebSockets, and added local caching to keep chats responsive. Connected the frontend with backend APIs for authentication and message syncing, and set up CI/CD workflows to automate builds and testing.",
    icon: <FaCode />,
  },
  {
    year: "Aug 2024 - May 2025",
    role: "Software Development Intern",
    company: "KNUCT Technologies — Remote, Delhi",
    description:
      "Built Python-based data processing pipelines and improved data transformation performance. Created reusable utilities and added automated validation checks to make the processing workflows more reliable.",
    icon: <FaCode />,
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-16 px-8 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 w-1 bg-gray-700 rounded-full h-full" />
        <motion.div
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-yellowAccent to-purple-700 rounded-full"
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
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
              <p className="text-gray">{exp.company}</p>

              {/* Description for Desktop */}
              <p className="text-gray-100 mt-2 hidden md:block">{exp.description}</p>

              {/* Mobile View: Show Preview & Read More */}
              <p className="text-gray-100 mt-2 md:hidden">
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
            <p className="text-gray-100">{selectedExp.company}</p>
            <p className="text-gray-200 mt-2">{selectedExp.description}</p>

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
