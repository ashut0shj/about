import { motion } from "framer-motion";

const images = [
  { src: "/profile.jpg", text: "Loves coding at 2 AM with lo-fi beats." },
  { src: "/profile.jpg", text: "Believes coffee is a programming language." },
  { src: "/profile.jpg", text: "Knows too many random tech facts." },
  { src: "/profile.jpg", text: "Can explain recursion but not relationships." },
  { src: "/profile.jpg", text: "Thinks dark mode is a personality trait." },
];

const FunProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-24">
        <motion.img
          src="/profile.jpg"
          alt="Ashutosh Jaiswal"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
  className="text-6xl font-extrabold mt-6 text-transparent 
             bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
             drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ scale: 1.1 }}
>
  Ashutosh Jaiswal ❣️
</motion.h1>

        <motion.p
          className="text-lg mt-3 max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "They say love is like debugging—you keep looking for the problem but sometimes, there isn’t one."
        </motion.p>
      </section>

      {/* Alternating Sections with Card Design & Divider Line */}
      {images.map((item, index) => (
        <div key={index}>
          <section
            className={`flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-5xl mx-auto ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.img
              src={item.src}
              alt="Profile"
              className="w-64 h-64 rounded-lg shadow-lg object-cover md:mb-0 mb-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Text in Card */}
            <motion.div
              className="md:w-1/2 text-center md:text-left p-6 
              bg-black border border-purple-500 
              shadow-[0_0_20px_rgba(138,43,226,0.6)] 
              rounded-xl md:ml-8 ml-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-yellow-400">{item.text}</h2>
              <p className="mt-3 text-gray-300">
                Some people look for love, I look for clean code. Bonus points if you like tech memes.
              </p>
            </motion.div>
          </section>

          {/* Pretty Glowing Divider Line */}
          {index < images.length - 1 && (
            <motion.div
              className="w-2/3 mx-auto h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg opacity-70 my-10"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          )}
        </div>
      ))}

      {/* Fun Closing Section */}
      <section className="text-center py-20">
        <motion.h2
          className="text-3xl font-bold text-pink-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Still Here? Maybe We’re a Match! 💜"
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Swipe right on tech, coffee, and good vibes. If you’re still reading, I’d say it’s meant to be. 😉
        </motion.p>
      </section>
    </motion.div>
  );
};

export default FunProfile;
