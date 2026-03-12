import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    image: "/project1.jpg",
    title: "Expense Tracker",
    category: "Flutter • Firebase • GetX",
    link: "#",
    github: "#"
  },
  {
    image: "/project2.jpg",
    title: "Meal Tracker",
    category: "Flutter • Django • REST API",
    link: "#",
    github: "#"
  },
  {
    image: "/project3.jpg",
    title: "Fitness App",
    category: "Flutter • Firebase • Logic",
    link: "#",
    github: "#"
  },
  {
    image: "/porject5.jpg",
    title: "Inventory Management",
    category: "React • Tailwind • Python",
    link: "#",
    github: "#"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Testimonials = () => {
  return (
    <section className="w-full py-32 bg-gray-50/50 dark:bg-darkbg/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-fade-in">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block italic">Featured Work</span>
            <h2 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter leading-none mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Creations</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Explore a collection of my recent mobile app projects showcasing my design, 
              development, and problem-solving skills across various platforms.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl font-bold flex items-center gap-3 dark:text-white shadow-xl hover:shadow-indigo-500/10 transition-all"
          >
            All Projects <FiArrowUpRight className="text-xl text-indigo-500" />
          </motion.button>
        </div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800 shadow-2xl"
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                 <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 {/* Dark Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Top Buttons (Floating Labels) */}
              <div className="absolute top-6 left-6 flex gap-2">
                 <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                    Live Now
                 </div>
              </div>

              {/* Bottom Info Card (Glassmorphism) */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.1 }}
                   className="bg-white/10 dark:bg-black/40 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-white text-xl tracking-tight leading-none uppercase">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-white/60">
                       <FiGithub className="hover:text-white cursor-pointer transition-colors" />
                       <FiExternalLink className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest leading-loose">
                    {project.category}
                  </p>
                </motion.div>
              </div>

              {/* Scale Effect on Hover */}
              <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/5 transition-all duration-500 rounded-[2.5rem] pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Background Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-indigo-500/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
