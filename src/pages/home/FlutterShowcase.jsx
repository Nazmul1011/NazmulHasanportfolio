import { motion } from "framer-motion";
import { FaMobileAlt, FaDatabase, FaRocket, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { SiFlutter, SiFirebase } from "react-icons/si";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaPaintBrush className="text-pink-500" />,
    title: "Elegant UI/UX",
    desc: "Pixels-perfect designs with smooth Flutter animations."
  },
  {
    icon: <FaDatabase className="text-amber-500" />,
    title: "Firebase Integration",
    desc: "Real-time databases and seamless authentication."
  },
  {
    icon: <FaRocket className="text-blue-500" />,
    title: "Clean Architecture",
    desc: "Maintainable code using GetX and BLoC patterns."
  }
];

const FlutterShowcase = () => {
  return (
    <section className="w-full py-24 bg-gray-50 dark:bg-darkbg/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-black dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Specialization</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 dark:text-white leading-tight">
            Flutter Expert <br />
            <span className="text-indigo-600">1+ Year Excellence</span>
          </h2>
          <p className="mt-6 text-black dark:text-gray-400 text-lg max-w-lg">
            Focusing on delivering high-performance cross-platform applications that provide native experiences on both iOS and Android.
          </p>

          <div className="mt-10 space-y-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 text-2xl">{f.icon}</div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">{f.title}</h4>
                  <p className="text-black/70 dark:text-gray-400 text-sm mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link 
              to="/mobile-methodology" 
              className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all hover:gap-5"
            >
              App Dev Methodology <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Phone Mockup with Premium 2D UI */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-[320px] aspect-[9/19] bg-slate-950 rounded-[3.5rem] p-3 shadow-2xl border-[12px] border-slate-900 relative z-10"
          >
            {/* Phone Screen */}
            <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[2.6rem] overflow-hidden relative shadow-inner">
              {/* Notch */}
              <div className="absolute top-0 w-full h-7 flex justify-center pt-2 z-50">
                <div className="w-20 h-5 bg-black rounded-full" />
              </div>

              {/* Mock App UI */}
              <div className="h-full flex flex-col pt-10 px-4 space-y-5">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="w-16 h-2 bg-indigo-500/20 rounded-full" />
                    <div className="w-24 h-3 bg-indigo-600 rounded-full" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg" />
                </div>

                {/* Banner Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-36 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-5 relative overflow-hidden group shadow-xl"
                >
                  <div className="relative z-10 space-y-2">
                    <div className="w-12 h-1 bg-white/30 rounded-full" />
                    <h5 className="text-white font-bold text-lg leading-tight">Sync Your <br/> Analytics.</h5>
                    <button className="px-4 py-1.5 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg">Upgrade</button>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" 
                  />
                  <div className="absolute top-4 right-4 text-white/20 text-4xl">
                    <SiFlutter />
                  </div>
                </motion.div>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 space-y-3"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === 1 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                        {i === 1 ? <FaDatabase /> : <FaRocket />}
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-10 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        <div className="w-14 h-3 bg-slate-800 dark:text-white font-bold text-xs" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Feed List */}
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
                      <div className="flex-1 space-y-2">
                        <div className="w-1/2 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        <div className="w-1/3 h-2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-100 dark:border-slate-800" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/5 flex justify-around items-center px-4">
                <div className="w-6 h-6 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center text-xs shadow-inner"><FaMobileAlt /></div>
                <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800" />
                <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800" />
                <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800" />
              </div>
            </div>

            {/* Floating Premium Elements */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-14 top-[20%] z-20 group"
            >
              <div className="bg-white dark:bg-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-3 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-white/10 backdrop-blur-xl">
                 <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-sky-500 text-2xl group-hover:scale-110 transition-transform">
                    <SiFlutter />
                 </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 sm:-left-16 bottom-[30%] z-20 group"
            >
              <div className="bg-white dark:bg-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-3 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-white/10 backdrop-blur-xl">
                 <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 text-2xl group-hover:scale-110 transition-transform">
                    <SiFirebase />
                 </div>
              </div>
              <motion.div 
                animate={{ width: ["0%", "80%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-3 h-1.5 bg-amber-500/20 rounded-full overflow-hidden"
              >
                <div className="h-full bg-amber-500 w-full" />
              </motion.div>
            </motion.div>

            {/* Smaller Floating Widgets */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-8 bottom-1/4 w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl border border-white/40 shadow-xl z-0"
            />
            
          </motion.div>
          
          {/* Background Glows */}
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default FlutterShowcase;
