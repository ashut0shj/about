import { motion } from "framer-motion";
import profileImg from "./profile.jpg"; 


const About = () => {
  return (
    <section id="about" className="py-16 text-center flex flex-col items-center">
      <motion.img
        src={profileImg}
        alt="Ashutosh Jaiswal"
        className="w-40 h-40 rounded-full border-4 border-purpleCard shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent mt-4"
      >
        Ashutosh Jaiswal
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mt-4 text-gray-400 max-w-2xl"
      >
        I am stupid
      </motion.p>
    </section>
  );
};

export default About;
