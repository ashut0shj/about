import { memo } from "react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { label: "Internships", value: "4" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Debugging Hours (2AM)", value: "∞" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-8  flex justify-center">
      <div className="grid md:grid-cols-[1fr_auto] max-w-7xl gap-16 items-center">

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            style={{
              background: "linear-gradient(135deg, #c084fc, #ec4899, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ashutosh Jaiswal
          </h2>

          <div className="space-y-5 text-gray-300 text-xl leading-relaxed">
            <p>
              I am a <span className="text-yellow-400 font-medium">poha enthusiast</span> and I love building cool and useful tech — whether it's web apps, AI tools, or something completely new.
              I enjoy solving problems, breaking things (so I can fix them better), and making tech do the hard work.
            </p>
            <p>
              If there's a challenge, you'll probably find me debugging it at 2 AM.
            </p>
            <p className="text-gray-500 text-lg italic">
              When I'm not coding, you'll probably find me debugging my life choices or pretending to be productive.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-5">
            {HIGHLIGHTS.map(({ label, value }) => (
              <div
                key={label}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.03] text-center"
              >
                <div
                  className="text-4xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #c084fc, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div className="text-base text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image side — plain, no gradient blur, just the image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <img
            src="/pr1.png"
            alt="Ashutosh Jaiswal"
            className="w-72 h-72 object-cover rounded-2xl"
            loading="lazy"
          />
          {/* Gradient underline only */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "288px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-[3px] mt-0 rounded-full"
            style={{ background: "linear-gradient(90deg, #a855f7, #ec4899, #f59e0b)" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default memo(About);