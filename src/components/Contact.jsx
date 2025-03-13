import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("Send Message");
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"
      )
      .then(() => {
        setStatus("Send Message");
        e.target.reset();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch(() => {
        setStatus("Failed! Try Again");
        setTimeout(() => setStatus("Send Message"), 3000);
      });
  };

  return (
    <section id="contact" className="py-16 px-8 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellowAccent mb-4"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-400 text-lg mb-10"
      >
        Feel free to reach out for opportunities or just a friendly chat! 🚀
      </motion.p>

      <div className="flex justify-center gap-6 mb-12">
        {[
          { icon: FaEnvelope, link: "mailto:ashutosh22102@iiitnr.edu.in" },
          { icon: FaGithub, link: "https://github.com/ashut0shj" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/ashut0sh28/" },
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

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={sendEmail}
        className="relative max-w-lg mx-auto p-8 rounded-lg shadow-lg border border-purple-600 bg-purpleCard overflow-hidden"
      >
        {/* Particles Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: Math.random() * 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [Math.random() * 20, -20, Math.random() * 20],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              className="absolute bg-yellowAccent w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        {["user_name", "user_email", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="mb-6 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <label className="block text-left text-gray-300 text-sm mb-1">
              {field === "user_name"
                ? "Your Name"
                : field === "user_email"
                ? "Your Email"
                : "Message"}
            </label>
            {field !== "message" ? (
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type={field === "user_email" ? "email" : "text"}
                name={field}
                required
                placeholder={
                  field === "user_name"
                    ? "Enter your name"
                    : "Enter your email"
                }
                className="w-full p-3 bg-darkBg border border-gray-600 rounded-md focus:border-yellowAccent focus:ring-2 focus:ring-yellowAccent transition"
              />
            ) : (
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name={field}
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full p-3 bg-darkBg border border-gray-600 rounded-md focus:border-yellowAccent focus:ring-2 focus:ring-yellowAccent transition"
              ></motion.textarea>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-full bg-yellowAccent text-darkBg font-bold py-3 rounded-md hover:bg-purple-700 transition"
        >
          {status}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 right-5 bg-yellowAccent text-darkBg p-4 rounded-lg shadow-lg"
          >
            🎉 Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
