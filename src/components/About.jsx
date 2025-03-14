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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
  Ashutosh Jaiswal
</h2>



        <p className="mt-4 text-gray-400 text-lg">
          i am stupid <br></br>
  I love building cool and useful tech—whether it’s web apps, AI tools, or something completely new.  
  I enjoy solving problems, breaking things (so I can fix them better), and making tech do the hard work.
  <br /><br />
  I work with C/C++, Python, JavaScript, Django, React, and Solidity, always looking for new ways to create and innovate.  
  If there’s a challenge, you’ll probably find me debugging it at 2 AM.
  <br /><br />
  When I'm not coding, you’ll probably find me debugging my life choices or pretending to be productive.
</p>
<span className="animate-pulse">|</span>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
  initial={{ opacity: 1, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-center justify-center"
>
  {/* Image Animation - Now Properly Positioned */}
  <motion.div
    initial={{ y: 50, opacity: 0 }} // Starts slightly lower
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    className="" // Ensures image is above the line
  >
    <img
      src="/pr1.png"
      alt="Ashutosh Jaiswal"
      className="w-[280px] h-[280px] object-cover rounded-lg"
    />
  </motion.div>

  {/* Gradient Line - Positioned Below the Image */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "330px" }} // Matches image width
    transition={{ duration: 1, ease: "easeOut" }}
    className="  h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full"
  ></motion.div>
</motion.div>

    </section>
  );
};

export default About;
