import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StarCanvas = memo(() => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const STAR_COUNT = 140;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.003 + 0.001,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      stars.forEach((s) => {
        const alpha = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 60 + s.offset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
});

const ROLES = [
  "Software Developer",
  "Full Stack Engineer",
  "Problem Solver",
  "Tech Enthusiast",
];

const TypingEffect = memo(() => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="text-gray-300 font-mono text-lg tracking-widest">
      {displayed}
      <span className="animate-pulse text-purple-400">█</span>
    </span>
  );
});

const SOCIAL_LINKS = [
  { Icon: FaGithub, href: "https://github.com/ashut0shj", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ashut0sh28/", label: "LinkedIn" },
  { Icon: FaWhatsapp, href: "https://wa.me/9129093900", label: "WhatsApp" },
];

const Hero = () => {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const scrollDown = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <StarCanvas />

      <div className="relative z-10 flex flex-col items-center gap-5 px-4">
        {/* Name — only gradient on the page */}
        <motion.h1
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #c084fc 0%, #ec4899 50%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.1,
          }}
        >
          {"{Ashutosh Jaiswal}"}
        </motion.h1>

        {/* Role typer */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-8 flex items-center"
        >
          <TypingEffect />
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 mt-1"
        >
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/60 hover:bg-purple-500/15 transition-all duration-300"
            >
              <Icon size={22} className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex gap-3 mt-2"
        >
          <button
            onClick={() => navigate("/resume")}
            className="px-7 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              boxShadow: "0 0 20px rgba(168,85,247,0.3)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(168,85,247,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)")}
          >
            View Resume
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-lg text-base font-semibold text-gray-300 border border-white/15 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:text-white transition-all duration-300"
          >
            See Projects →
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
      >
        <span className="text-sm tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default memo(Hero);