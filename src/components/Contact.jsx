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
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-yellowAccent mb-4"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg mb-10"
      >
        Feel free to reach out for opportunities or just a friendly chat! 🚀
      </motion.p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-12">
        <motion.a
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.1 }}
          className="bg-purple-700 p-3 rounded-full text-white hover:bg-yellowAccent transition"
        >
          <FaEnvelope size={24} />
        </motion.a>
        <motion.a
          href="https://github.com/yourgithub"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="bg-purple-700 p-3 rounded-full text-white hover:bg-yellowAccent transition"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="bg-purple-700 p-3 rounded-full text-white hover:bg-yellowAccent transition"
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto bg-purpleCard p-8 rounded-lg shadow-md border border-purple-600"
      >
        {["user_name", "user_email", "message"].map((field, index) => (
          <motion.div
            key={field}
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
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

        {/* Animated Send Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-full bg-yellowAccent text-darkBg font-bold py-3 rounded-md hover:bg-purple-700 transition"
        >
          {status}
        </motion.button>
      </motion.form>

      {/* Success Popup */}
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
