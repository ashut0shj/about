import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaReact, FaDatabase, FaCode, FaGithub,
  FaDocker, FaAws, FaChartLine, FaBrain, FaLinux, FaNodeJs
} from "react-icons/fa";
import {
  SiCplusplus, SiDjango, SiFlask, SiFirebase, SiFlutter,
  SiJavascript, SiMysql, SiTailwindcss, SiGooglecloud,
  SiPostgresql, SiMongodb, SiRedis
} from "react-icons/si";
import { RiFlashlightFill } from "react-icons/ri";

const techStack = [
  {
    category: "Languages",
    color: "#c084fc",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "C/C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Dart", icon: SiFlutter },
      { name: "C#", icon: FaCode },
      { name: "Solidity", icon: FaCode },
    ],
  },
  {
    category: "Frontend",
    color: "#61dafb",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Electron.js", icon: FaCode },
    ],
  },
  {
    category: "Backend",
    color: "#f59e0b",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "FastAPI", icon: RiFlashlightFill },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "ASP.NET", icon: FaCode },
      { name: "WebSockets", icon: FaCode },
      { name: "Express.js", icon: FaNodeJs },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    category: "Databases",
    color: "#34d399",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
      { name: "IndexedDB", icon: FaDatabase },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#fb923c",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Linux", icon: FaLinux },
      { name: "GitHub Actions", icon: FaGithub },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "CI/CD", icon: FaCode },
    ],
  },
  {
    category: "AI / ML",
    color: "#a78bfa",
    skills: [
      { name: "LLMs & RAG", icon: FaBrain },
      { name: "Transformers", icon: FaBrain },
      { name: "Scikit-learn", icon: FaChartLine },
      { name: "OpenCV", icon: FaCode },
      { name: "Pandas", icon: FaDatabase },
      { name: "NumPy", icon: FaChartLine },
    ],
  },
];

const CategoryCard = memo(({ cat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="rounded-xl border border-white/[0.08] p-7 hover:border-white/15 transition-colors duration-300"
    style={{ background: "rgba(255,255,255,0.03)" }}
  >
    {/* Category header */}
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}90` }}
      />
      <h3 className="text-xl font-semibold text-gray-100">{cat.category}</h3>
    </div>

    {/* Skills grid — 2 columns, big readable rows */}
    <div className="grid grid-cols-2 gap-3">
      {cat.skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg group hover:bg-white/[0.05] transition-colors duration-200"
        >
          <Icon size={18} style={{ color: cat.color, opacity: 0.9 }} className="flex-shrink-0" />
          <span className="text-gray-200 text-base group-hover:text-white transition-colors duration-200">{name}</span>
        </div>
      ))}
    </div>
  </motion.div>
));

const TechStack = () => (
  <section id="techstack" className="py-24 px-8">
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
        Tech Stack
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techStack.map((cat, i) => (
        <CategoryCard key={cat.category} cat={cat} index={i} />
      ))}
    </div>
  </section>
);

export default memo(TechStack);