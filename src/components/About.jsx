import { motion } from "framer-motion";
// import profileImg from "./profile.png"; // Ensure it's a transparent PNG

const About = () => {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Left Side (Text) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left flex-1"
      >
        <h2 className="text-4xl font-bold text-yellowAccent">
          Ashutosh Jaiswal
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          I am stupid
        </p>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-1"
      >
        <img
          src="/profile.jpg"
          alt="Ashutosh Jaiswal"
        />
      </motion.div>
    </section>
  );
};

export default About;
