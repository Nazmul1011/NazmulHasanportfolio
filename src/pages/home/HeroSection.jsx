import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Flutter Developer", "Full Stack Engineer", "Problem Solver"];

const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Detect theme mode dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // Role rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-section"
      className="bg-aurora min-h-[90vh] flex flex-col items-center justify-center text-center 
      py-24 px-6 bg-white dark:bg-darkbg transition-all duration-700 ease-in-out"
    >
      {/* Floating Profile Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={isDark ? "/unhappay.png" : "/happynazmul.png"}
            alt="Nazmul Hasan"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl 
            ring-4 ring-white/20 dark:ring-white/10 transition-all duration-700"
          />
        </motion.div>
        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-darkbg shadow-lg"></div>
      </motion.div>

      {/* Greeting */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-300 text-lg mb-4 flex items-center gap-2"
      >
        Hi! I'm <span className="font-bold text-premium-indigo">Nazmul Hasan</span> 👋
      </motion.p>

      {/* Dynamic Main Headline */}
      <div className="h-32 md:h-44 flex flex-col items-center justify-center mb-6">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {roles[roleIndex]}
          </motion.h1>
        </AnimatePresence>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mt-2 font-light"
        >
          Crafting Modern Digital Experiences
        </motion.span>
      </div>

      {/* Current Role */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8 text-sm md:text-base border border-gray-200 dark:border-white/10"
      >
        <span className="text-gray-500 dark:text-gray-400">Current:</span>{" "}
        <span className="font-medium text-gray-800 dark:text-gray-200">
          Senior Full-Stack Developer @ Miicon Solution
        </span>
      </motion.div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-medium"
      >
        I specialize in building high-performance cross-platform apps and 
        advanced web ecosystems using <span className="text-gray-900 dark:text-white font-bold">Flutter, Next.js, and Node.js</span>. 
        Focused on scalable architecture and premium user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        {/* 🔗 Social Links (Glass) */}
        <div className="flex items-center gap-4 bg-gray-100/50 dark:bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-gray-200 dark:border-white/10">
          <a
            href="https://www.linkedin.com/in/nazmulhasan-/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:scale-110 shadow-sm transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/Nazmul1011"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:scale-110 shadow-sm transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/nazmul.hasan.394761"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:scale-110 shadow-sm transition-all duration-300"
          >
            <FaFacebook className="text-xl" />
          </a>
        </div>

        {/* Resume Download Button */}
        <a
          href="/Nazmul_Hasan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 
          bg-gray-900 dark:bg-white text-white dark:text-gray-900
          px-8 py-4 rounded-2xl text-base font-semibold
          hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]
          transition-all duration-300 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            My Resume <HiDownload className="text-xl group-hover:bounce" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-premium-indigo to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
