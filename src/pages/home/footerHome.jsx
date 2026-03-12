import React, { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export const FooterHome = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Detect when footer enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`w-full bg-white dark:bg-darkbg text-black dark:text-gray-100 py-12 border-t border-gray-200 dark:border-darkbg px-6 sm:px-10 md:px-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto text-center space-y-3 transition-colors duration-500">
        {/* Name */}
        <h2 className="text-4xl font-semibold tracking-tight">
          Nazmul<span className="text-blue-600">.</span>
        </h2>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 text-sm flex-wrap">
          <FiMail className="text-lg" />
          <a
            href="mailto:nazmultec1011@gmail.com"
            className="hover:underline transition font-bold"
          >
            nazmultec1011@gmail.com
          </a>
        </div>

        {/* Divider */}
        

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          {/* Copyright */}
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2025 Nazmul Hasan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-sm font-medium">
  <a
    href="https://github.com/Nazmul1011"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 transition font-bold 
               text-gray-700 dark:text-gray-300 
               hover:text-black dark:hover:text-white 
               hover:scale-105"
  >
    <FaGithub className="text-lg" /> GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/nazmulhasan-/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 transition font-bold 
               text-darkbg dark:text-white
               hover:text-darkbg dark:hover:text-white 
               hover:scale-105"
  >
    <FaLinkedin className="text-lg" /> LinkedIn
  </a>

  <a
    href="https://www.facebook.com/nazmul.hasan.394761"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 transition font-bold 
               text-darkbg dark:text-white
               hover:text-darkbg dark:hover:text-white 
               hover:scale-105"
  >
    <FaFacebook className="text-lg" /> Facebook
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
