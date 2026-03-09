import { memo } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    Icon: FaEnvelope,
    href: "mailto:ashutoshj11100@gmail.com",
    label: "Email",
    value: "ashutoshj11100@gmail.com",
    color: "#ea4335",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/ashut0shj",
    label: "GitHub",
    value: "github.com/ashut0shj",
    color: "#f0f6fc",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ashut0sh28/",
    label: "LinkedIn",
    value: "linkedin.com/in/ashut0sh28",
    color: "#0a66c2",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/9129093900",
    label: "WhatsApp",
    value: "+91 91290 93900",
    color: "#25d366",
  },
];

const ContactCard = memo(({ item, index }) => (
  <motion.a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
    style={{ background: "rgba(255,255,255,0.03)" }}
    whileHover={{ x: 4, transition: { duration: 0.2 } }}
  >
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        background: `${item.color}18`,
        border: `1px solid ${item.color}35`,
      }}
    >
      <item.Icon size={18} style={{ color: item.color }} />
    </div>
    <div className="text-left min-w-0">
      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
      <div className="text-base text-gray-200 group-hover:text-white transition-colors duration-200 truncate">
        {item.value}
      </div>
    </div>
    <div className="ml-auto text-gray-600 group-hover:text-gray-300 transition-colors duration-200 text-base flex-shrink-0">→</div>
  </motion.a>
));

const Contact = () => (
  <section id="contact" className="py-24 px-8">
    {/*
      Layout:
      Desktop — [left: heading + links] [right: photo + quote]  (side by side)
      Mobile  — heading + links stacked, then photo + quote below
    */}
    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

      {/* ── LEFT: heading + contact links ── */}
      <div className="flex-1 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #c084fc, #ec4899, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's get in touch
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Feel free to reach out...
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {CONTACT_LINKS.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ── RIGHT: photo + quote ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col items-center md:items-start gap-0 md:pt-4 w-full md:w-auto"
      >
        {/* Photo — clean, no blurs or gradients behind it */}
        <img
          src="/pr2.png"
          alt="Ashutosh Jaiswal"
          className="w-64 md:w-72 h-auto rounded-2xl object-cover"
          loading="lazy"
        />

        {/* Gradient underline */}
        <div
          className="w-64 md:w-72 h-[3px] rounded-full"
          style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)" }}
        />

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-gray-400 text-lg italic leading-relaxed text-center md:text-left w-64 md:w-72"
        >
          "Opportunities don't happen.<br />You create them."
        </motion.blockquote>
      </motion.div>

    </div>
  </section>
);

export default memo(Contact);