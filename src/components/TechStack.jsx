import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiFlask, SiFirebase, SiFlutter, SiJavascript, SiMysql, SiTensorflow } from "react-icons/si";

const techStack = [
  {
    category: "Languages",
    skills: [
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Dart", icon: <SiFlutter /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML/CSS", icon: <FaCode /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML/CSS", icon: <FaCode /> },
    ],
  },
  {
    category: "Cloud & Databases",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "Data Science", icon: <FaDatabase /> },
      { name: "App Development", icon: <SiFlutter /> },
      { name: "Web Development", icon: <FaReact /> },
      { name: "Machine Learning", icon: <SiTensorflow /> },
      { name: "DSA", icon: <FaCode /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent mb-8"
      >
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {techStack.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="bg-purpleCard p-6 rounded-lg shadow-lg text-left"
          >
            <h3 className="text-2xl font-semibold text-yellowAccent mb-4">{category.category}</h3>
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
