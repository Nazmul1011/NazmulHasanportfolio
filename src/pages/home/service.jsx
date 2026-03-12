import { motion } from "framer-motion";
import { FaCode, FaUserCheck, FaBug } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiFigma } from "react-icons/si";

const services = [
  {
    icon: <SiFlutter />,
    color: "#0ea5e9", // sky-500
    title: "Flutter App Development",
    description: "I build cross-platform mobile applications using Flutter and GetX with clean architecture and pixel-perfect UI.",
  },
  {
    icon: <SiFirebase />,
    color: "#f59e0b", // amber-500
    title: "Firebase Integration",
    description: "Implementing real-time databases, authentication, and notifications using Firebase for scalable app solutions.",
  },
  {
    icon: <SiFigma />,
    color: "#ec4899", // pink-500
    title: "UI/UX Design",
    description: "Designing elegant and intuitive mobile interfaces with a focus on user experience and clean, modern layouts.",
  },
  {
    icon: <FaCode />,
    color: "#6366f1", // indigo-500
    title: "Web Development",
    description: "Develop responsive web apps using React and modern frameworks with RESTful API integrations.",
  },
  {
    icon: <FaUserCheck />,
    color: "#10b981", // emerald-500
    title: "App Optimization",
    description: "Enhancing app performance, reducing load times, and improving responsiveness for a smoother user experience.",
  },
  {
    icon: <FaBug />,
    color: "#a855f7", // purple-500
    title: "QA & Automation Testing",
    description: "Ensuring application quality through manual and automated testing using modern frameworks and CI/CD integration.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Service() {
  return (
    <section className="w-full py-24 bg-white dark:bg-darkbg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block italic">What I Do</span>
          <h2 className="text-5xl md:text-6xl font-black dark:text-white mb-6 tracking-tight leading-none">
            Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Service</span> Solutions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I specialize in delivering modern, functional, and visually appealing digital products 
            with a heavy focus on performance and cross-platform consistency.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-white/[0.02] p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/10 backdrop-blur-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Card Decor */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              
              <div className="relative z-10">
                <div 
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner"
                >
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore Expertise</span>
                  <div className="w-8 h-px bg-indigo-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Service;
