import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  return (
    <section id="contact" className="py-16 px-8 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-center mb-12"
      >
        Let's get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-400 text-lg mb-10"
      >
        Feel free to reach out...
      </motion.p>

      <div className="flex justify-center gap-6 mb-12">
        {[
          { icon: FaEnvelope, link: "mailto:ashutoshj11100@gmail.com" },
          { icon: FaGithub, link: "https://github.com/ashut0shj" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/ashut0sh28/" },
          { icon: FaWhatsapp, link: "https://wa.me/9129093900" },
        ].map(({ icon: Icon, link }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="bg-purple-700 p-3 rounded-full text-white hover:bg-yellowAccent transition"
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>



      {/* Closing Image & Quote */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="mt-20 flex flex-col items-center"
>
  <img
    src="/pr2.png"
    alt="Stay Connected"
    className="w-64 h-auto  rounded-lg shadow-xl"
  />  
  <div className=" mb-6 w-[320px] h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full"></div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
    className="text-xl text-gray-300 italic text-center"
  >
    Opportunities don’t happen.
    <br />You create them.
  </motion.p>
</motion.div>

    </section>
  );
};

export default Contact;