import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaDatabase, FaCode, FaGitAlt, FaGithub, 
  FaDocker, FaAws, FaHtml5, FaCss3Alt, FaChartLine, FaBrain, 
  FaRobot
} from "react-icons/fa";
import { 
  SiCplusplus, SiDjango, SiFlask, SiFirebase, SiFlutter, 
  SiJavascript, SiMysql, SiTensorflow, SiTailwindcss, 
  SiPytorch, SiGooglecloud 
} from "react-icons/si";

import { RiFlashlightFill } from "react-icons/ri"; 

const techStack = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Dart", icon: <SiFlutter /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Solidity", icon: <FaCode /> }, 
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <RiFlashlightFill /> }, 
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Hardhat", icon: <FaCode /> }, 
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Scikit-learn", icon: <FaChartLine /> }, 
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "OpenCV", icon: <FaCode /> }, 
      { name: "Pandas", icon: <FaDatabase /> }, 
      { name: "NumPy", icon: <FaChartLine /> }, 
      { name: "Matplotlib", icon: <FaChartLine /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Twilio", icon: <FaCode /> }, 
      { name: "AI Studios", icon: <FaRobot /> },
    ],
  },
  {
    category: "Technical Domains",
    skills: [
      { name: "DSA", icon: <FaCode /> },
      { name: "Machine Learning", icon: <SiTensorflow /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
      { name: "Web Development", icon: <FaReact /> },
      { name: "App Development", icon: <SiFlutter /> },
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
