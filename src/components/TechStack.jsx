import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaDatabase, FaCode, FaGithub, 
  FaDocker, FaAws, FaChartLine, FaBrain, 
  FaLinux, FaNodeJs
} from "react-icons/fa";
import { 
  SiCplusplus, SiDjango, SiFlask, SiFirebase, SiFlutter, 
  SiJavascript, SiMysql, SiTailwindcss, 
  SiGooglecloud, SiPostgresql, SiMongodb, SiRedis
} from "react-icons/si";

import { RiFlashlightFill } from "react-icons/ri"; 

const techStack = [
  {
    category: "Languages",
    skills: [
      { name: "C#", icon: <FaCode /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Dart", icon: <SiFlutter /> },
      { name: "Solidity", icon: <FaCode /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Electron.js", icon: <FaCode /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET", icon: <FaCode /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "FastAPI", icon: <RiFlashlightFill /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <FaCode /> },
      { name: "WebSockets", icon: <FaCode /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "IndexedDB", icon: <FaDatabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "CI/CD", icon: <FaCode /> },
      { name: "GitHub Actions", icon: <FaGithub /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Shell Scripting", icon: <FaCode /> },
      { name: "Postman", icon: <FaCode /> },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "RAG", icon: <FaBrain /> },
      { name: "LLM", icon: <FaBrain /> },
      { name: "Scikit-learn", icon: <FaChartLine /> },
      { name: "OpenCV", icon: <FaCode /> },
      { name: "Transformers", icon: <FaBrain /> },
      { name: "Pandas", icon: <FaDatabase /> },
      { name: "NumPy", icon: <FaChartLine /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8"
      >
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {techStack.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-purpleCard p-6 rounded-lg shadow-lg text-left"
          >
            <h3 className="text-2xl font-semibold text-yellowAccent mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-white">
                  <span className="text-xl">{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;