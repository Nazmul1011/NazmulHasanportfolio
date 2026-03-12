import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactUs() {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        e.target.reset();
      } else {
        console.log("Error", result);
        alert("Something went wrong. Please try again or use direct email.");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-32 bg-white dark:bg-darkbg relative overflow-hidden transition-colors duration-700">
      
      {/* Background Ambiance Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-black dark:text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Available for hire
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black dark:text-white mb-8 tracking-tighter leading-none"
          >
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Great Project</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-black dark:text-gray-400 text-xl leading-relaxed"
          >
            I’m always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Feel free to drop a message!
          </motion.p>
        </div>

        {/* Contact Form Container (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white/50 dark:bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.05)] dark:shadow-none relative"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="9b3f8f03-e38a-4d68-a3f8-b4c873211e71" />
            <input type="hidden" name="subject" value="New Portfolio Inquiry" />
            <input type="hidden" name="from_name" value="Portfolio Contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Input */}
              <div className="group relative">
                <label className="text-xs font-black uppercase tracking-widest text-black/60 dark:text-indigo-400/80 mb-3 block group-focus-within:text-indigo-500 transition-colors">Your Name</label>
                <div className="relative">
                   <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                   <input
                    type="text"
                    name="name"
                    placeholder="E.g. John Doe"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 pl-8 pr-4 outline-none text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-indigo-500 transition-all duration-300 text-lg font-medium"
                   />
                </div>
              </div>

              {/* Email Input */}
              <div className="group relative">
                <label className="text-xs font-black uppercase tracking-widest text-black/60 dark:text-indigo-400/80 mb-3 block group-focus-within:text-indigo-500 transition-colors">Email Address</label>
                <div className="relative">
                   <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                   <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 pl-8 pr-4 outline-none text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-indigo-500 transition-all duration-300 text-lg font-medium"
                   />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="group relative">
              <label className="text-xs font-black uppercase tracking-widest text-black/60 dark:text-indigo-400/80 mb-3 block group-focus-within:text-indigo-500 transition-colors">Project Details</label>
              <div className="relative">
                 <FiMessageSquare className="absolute left-0 top-6 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                 <textarea
                  name="message"
                  placeholder="Tell me about your project visions..."
                  rows="5"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/10 py-4 pl-8 pr-4 outline-none text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-indigo-500 transition-all duration-300 text-lg font-medium resize-none"
                 />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
               <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-4 bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm overflow-hidden shadow-2xl shadow-indigo-500/30 disabled:opacity-70 transition-all"
               >
                 <span className="relative z-10 flex items-center gap-3">
                   {isSubmitting ? "Sending..." : "Submit Inquiry"} <FiSend className={`transition-transform duration-500 ${isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
               </motion.button>
            </div>
          </form>

          {/* Side Info Cards (Hidden on mobile/tablet) */}
          <div className="absolute -right-4 lg:-right-20 xl:-right-40 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6">
             <a 
                href="mailto:nazmultec1011@gmail.com"
                className="bg-white dark:bg-gray-800/80 p-8 shadow-2xl rounded-3xl border border-gray-100 dark:border-white/10 w-72 backdrop-blur-lg group/card hover:-translate-y-2 transition-transform duration-300 block text-left"
             >
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-indigo-500/40 group-hover/card:scale-110 transition-transform"><FiMail /></div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email directly</p>
                <p className="font-bold dark:text-white truncate">nazmultec1011@gmail.com</p>
             </a>
             <a 
                href="/Nazmul_Hasan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800/80 p-8 shadow-2xl rounded-3xl border border-gray-100 dark:border-white/10 w-72 backdrop-blur-lg group/card hover:-translate-y-2 transition-transform duration-300 block text-left"
             >
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-blue-500/40 group-hover/card:scale-110 transition-transform"><HiDownload /></div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Download Profile</p>
                <p className="font-bold dark:text-white">Full Resume PDF</p>
             </a>
          </div>
        </motion.div>

        {/* ✅ Success Toast (Premium) */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]"
            >
              <div className="bg-emerald-600 text-white px-8 py-5 rounded-3xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center gap-4 backdrop-blur-xl border border-emerald-400/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  <FiCheckCircle />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-[10px] opacity-80">Message Sent</p>
                  <p className="font-bold">I'll get back to you soon!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Re-using HiDownload from HeroSection if needed, otherwise fallback to local definition
const HiDownload = ({ className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
);
