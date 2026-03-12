import { useEffect, useState } from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
} from "react-icons/si";

export const KeyFeaturesSection = () => {
  const [isDark, setIsDark] = useState(false);

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

  const cards = [
    {
      icon: <FaCode className="text-3xl text-red-500 mb-3" />,
      title: "Languages",
      desc: "Dart, JavaScript, Python",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-green-600 mb-3" />,
      title: "Education",
      desc: "B.Sc. in Computer Science & Engineering",
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-600 mb-3" />,
      title: "Experience",
      desc: "Working as a Full-Stack Developer at Miicon Solution (June 2024 – Present)",
    },
  ];

  const tools = [
    { icon: <SiFlutter className="text-4xl text-sky-500" /> },
    { icon: <SiFirebase className="text-4xl text-amber-500" /> },
    { icon: <SiDart className="text-4xl text-blue-500" /> },
    { icon: <SiReact className="text-4xl text-cyan-400" /> },
    { icon: <SiJavascript className="text-4xl text-yellow-400" /> },
    { icon: <SiPython className="text-4xl text-blue-400" /> },
    { icon: <SiGit className="text-4xl text-orange-500" /> },
    { icon: <SiPostman className="text-4xl text-orange-400" /> },
    { icon: <SiNodedotjs className="text-4xl text-green-500" /> },
    { icon: <SiFigma className="text-4xl text-pink-500" /> },
  ];

  return (
    <section className="reveal w-full bg-white dark:bg-darkbg transition-all duration-700 ease-in-out">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <div className="text-center mb-14 fade-child">
          <p className="uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-2">
            Introduction
          </p>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            About me
          </h2>
            </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 fade-child">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={isDark ? "/unhappay.png" : "/happynazmul.png"}
              alt="Nazmul Hasan"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Right Side - Description */}
          <div className="w-full md:w-2/3 text-left fade-child">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 font-medium">
              I am a{" "}
              <span className="font-bold text-gray-800 dark:text-white">
                Full-Stack & Flutter Developer
              </span>{" "}
              with over 1 year of professional experience in crafting
              high-performance mobile and web applications. Currently, I’m driving development as a{" "}
              <span className="font-bold text-gray-800 dark:text-white">
                Developer at Miicon Solution
              </span>
              , where I combine the power of Flutter with modern web stacks like Next.js and Node.js to build 
              scalable, secure, and visually stunning digital products. I don't just write code; I architect systems that grow.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center 
                  bg-gray-50 dark:bg-gray-800 rounded-xl p-6 
                  hover:shadow-md hover:-translate-y-1 
                  transition-all duration-500"
                >
                  {card.icon}
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10 fade-child">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Tools I use
              </h3>
              <div className="flex flex-wrap items-center gap-6">
                {tools.map((tool, index) => (
                  <div
              key={index}
                    className="w-14 h-14 flex items-center justify-center 
                    bg-gray-100 dark:bg-gray-800 rounded-full 
                    hover:shadow-lg hover:-translate-y-1 
                    transition-all duration-500"
                  >
                    {tool.icon}
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
