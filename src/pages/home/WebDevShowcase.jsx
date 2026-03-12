import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaLayerGroup, FaPython, FaDocker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
  SiNextdotjs, 
  SiNestjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiTailwindcss, 
  SiDjango, 
  SiJavascript, 
  SiTypescript,
  SiMongodb,
  SiMysql
} from "react-icons/si";

const techStacks = [
  {
    category: "Frontend Architecture",
    icons: [<SiJavascript />, <SiTypescript />, <SiNextdotjs />, <SiTailwindcss />],
    desc: "Modern SSR/ISR patterns with React 19 for ultra-fast user experiences."
  },
  {
    category: "Backend Engineering",
    icons: [<SiNodedotjs />, <SiNestjs />, <SiDjango />, <FaPython />],
    desc: "Robust APIs powered by NestJS (Node) and Django Rest Framework (Python)."
  },
  {
    category: "Data & Scalability",
    icons: [<SiPostgresql />, <SiMongodb />, <SiPrisma />, <SiMysql />],
    desc: "Decision-driven DB choice: SQL (Relational) for consistency, NoSQL for scale."
  }
];

const WebDevShowcase = () => {
  return (
    <section className="w-full py-32 bg-white dark:bg-darkbg relative overflow-hidden transition-colors duration-700">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: SaaS + Portfolio Layered Mockup */}
        <div className="relative flex justify-center order-2 lg:order-1 perspective-[2000px] overflow-visible lg:overflow-visible">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[580px] aspect-[16/10] z-10"
          >
            {/* Main Browser Frame */}
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
               <div className="w-full h-8 flex items-center px-4 gap-2 bg-gray-200/50 dark:bg-slate-800/50 rounded-t-[1.8rem]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
               </div>
            {/* Browser Content: SaaS Dashboard Mockup */}
            <div className="w-full h-[calc(100%-32px)] bg-slate-50 dark:bg-slate-950 rounded-b-[1.8rem] overflow-hidden flex relative">
              {/* Sidebar */}
              <div className="w-16 h-full bg-gray-100/50 dark:bg-slate-900/50 border-r border-gray-200 dark:border-white/5 p-3 flex flex-col gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`w-full aspect-square rounded-xl ${i===1 ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'bg-gray-200 dark:bg-slate-800'}`} />
                 ))}
                 <div className="mt-auto w-full aspect-square rounded-full bg-gray-300 dark:bg-slate-700" />
              </div>

              {/* Main App Area */}
              <div className="flex-1 p-6 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="w-24 h-2 bg-indigo-500/20 rounded-full mb-2" />
                    <h4 className="text-lg font-black dark:text-white tracking-tighter">System Overview</h4>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 shadow-sm" />
                     <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 shadow-sm" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[9px] font-black uppercase tracking-tight text-gray-400">Total Requests</span>
                      </div>
                      <p className="text-xl font-black dark:text-white leading-none tracking-tighter italic">24.8M</p>
                   </div>
                   <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-[9px] font-black uppercase tracking-tight text-gray-400">Database Load</span>
                      </div>
                      <p className="text-xl font-black dark:text-white leading-none tracking-tighter italic">12%</p>
                   </div>
                </div>

                {/* Main Content Area (Chart Simulation) */}
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 rounded-[2rem] p-6 h-full shadow-sm relative overflow-hidden group/chart">
                  <div className="flex justify-between items-start mb-6">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Network Throughput</p>
                        <p className="text-xs dark:text-gray-400 font-medium">Real-time data streaming</p>
                     </div>
                     <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[9px] font-bold">+12.4%</div>
                  </div>
                  
                  {/* Mock Line Chart */}
                  <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
                     <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,30"
                          fill="none"
                          stroke="url(#chartGradient)"
                          strokeWidth="4"
                        />
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                     </svg>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Overlapping Floating Dashboard Layer (2.5D Effect) */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-4 sm:-right-10 w-48 sm:w-64 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/20 dark:border-white/10 backdrop-blur-3xl z-20"
            >
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl shadow-lg">
                     <FaServer />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-[0.2em] leading-none mb-1">Backend Hub</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">Active Server</p>
                  </div>
               </div>
               <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                     <span className="text-gray-400">Memory</span>
                     <span className="text-emerald-500">Normal</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        className="h-full bg-emerald-500"
                     />
                  </div>
               </div>
            </motion.div>

            {/* Floating Database Logic Node */}
            <motion.div
               animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-16 -left-4 sm:-left-8 w-48 sm:w-56 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl z-20"
            >
              <div className="flex flex-col items-center text-center">
                 <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border-4 border-indigo-500 flex items-center justify-center text-indigo-500 text-2xl mb-4 shadow-inner">
                    <FaDatabase />
                 </div>
                 <h5 className="text-[11px] font-black uppercase tracking-widest dark:text-gray-300 mb-2 leading-none">Scalable Architecture</h5>
                 <div className="flex gap-2 justify-center">
                    <SiPostgresql className="text-blue-500" />
                    <SiMongodb className="text-emerald-500" />
                    <SiMysql className="text-orange-500" />
                 </div>
                 <p className="text-[9px] text-gray-400 mt-2 font-bold italic leading-none uppercase tracking-widest">Relational & NoSQL Stack</p>
              </div>
            </motion.div>

            {/* Docker Floating Node */}
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -bottom-8 right-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 shadow-xl flex items-center justify-center text-3xl text-sky-500 z-0"
            >
               <FaDocker />
            </motion.div>

          </motion.div>
        </div>

        {/* Right Side: Philosophy & Tech Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-black dark:text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs mb-4 block italic">Building the Future</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mt-2 dark:text-white leading-none tracking-tighter">
              Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 italic">Web Ecosystems</span>
            </h2>
            
            <div className="mt-8 relative">
               <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500/50 to-transparent rounded-full" />
               <p className="ml-6 text-black dark:text-gray-400 text-xl leading-relaxed italic font-medium max-w-xl">
                "I don't just write code; I architect systems. My approach prioritizes scalability and performance 
                before the first pixel is drawn. From Relational SQL to complex NoSQL clusters, I choose the stack 
                that grows with your users."
               </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10">
              {techStacks.map((stack, i) => (
                <motion.div 
                  key={stack.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="flex -space-x-3">
                        {stack.icons.map((icon, idx) => (
                           <div key={idx} className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg flex items-center justify-center text-xl group-hover:scale-110 group-hover:z-10 transition-all duration-300">
                             {icon}
                           </div>
                        ))}
                     </div>
                     <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2" />
                     <h4 className="text-sm font-black uppercase tracking-widest text-black dark:text-white group-hover:text-indigo-500 transition-colors">
                        {stack.category}
                     </h4>
                  </div>
                  <p className="text-black/80 dark:text-gray-400 text-sm leading-relaxed max-w-lg font-medium italic">
                    {stack.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 flex items-center gap-6">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/methodology" className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-colors">
                     Process Methodology <FaLayerGroup className="text-lg" />
                  </Link>
               </motion.div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1 leading-none">Work Philosophy</p>
                  <p className="text-lg font-bold dark:text-white leading-none tracking-tight">Architecture First • Real-time Monitoring</p>
               </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WebDevShowcase;
