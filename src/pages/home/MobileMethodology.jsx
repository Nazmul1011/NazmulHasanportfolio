import { motion } from "framer-motion";
import { 
  FiArrowLeft, FiSmartphone, FiLayout, FiActivity, FiLayers, 
  FiDatabase, FiCloud, FiShield, FiTrendingUp, FiSettings, 
  FiCpu, FiZap, FiTarget, FiSearch, FiCheckCircle, FiGlobe,
  FiBox, FiServer, FiShare2, FiTerminal, FiCodesandbox, FiPlay
} from "react-icons/fi";
import { SiFlutter, SiFirebase, SiGetx, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiIos, SiAndroid } from "react-icons/si";
import { Link } from "react-router-dom";

const methodologyPoints = [
  {
    icon: <FiTarget className="text-red-500" />,
    title: "1. Every App Starts With a Real Problem",
    content: "First I understand why the app should exist. What problem is this app solving? Who are the users? Why will they use this app? What pain point will it remove? I think like a product-minded developer, defining target users, business goals, and must-have features.",
    highlights: ["Problem First", "Product Mindset", "User Pain Points"],
  },
  {
    icon: <FiSearch className="text-blue-500" />,
    title: "2. Then I Turn the Idea Into a Product Plan",
    content: "I map the full product flow: what the user does first, how they sign up, core screens, and the user journey. I plan app modules, navigation flow, and edge cases. This turns the idea into a usable system.",
    highlights: ["User Journey", "Module Mapping", "Product Flow"],
  },
  {
    icon: <FiLayers className="text-indigo-500" />,
    title: "3. Before Writing Code, I Define the Type of App",
    content: "I identify if it's e-commerce, ride-sharing, food delivery, or IoT monitoring. This helps me decide the right architecture: does it need real-time updates, offline mode, or multi-role support?",
    highlights: ["App Type Analysis", "Feature Audit", "Architecture Prep"],
  },
  {
    icon: <SiFlutter className="text-sky-500" />,
    title: "4. Choosing the Mobile Technology",
    content: "My first choice for cross-platform apps is Flutter. It provides a single codebase for Android/iOS with fast UI development and native performance. Ideal for custom design-heavy business apps.",
    highlights: ["Flutter (Cross-Platform)", "iOS & Android", "High Performance"],
  },
  {
    icon: <FiBox className="text-purple-500" />,
    title: "5. Then I Plan the App Like a Product, Not Just a UI",
    content: "I divide the app into Product, Feature, and Technical layers. I think about user goals, conversion flows, authentication, state management, and the release strategy early on.",
    highlights: ["3-Layer Planning", "Business Value", "Technical Base"],
  },
  {
    icon: <FiZap className="text-amber-500" />,
    title: "6. I Plan the User Journey First",
    content: "Before coding, I define the complete flow from splash to logout. I also plan fallbacks for API failure, slow internet, and edge cases like token expiration. This makes the app feel professional.",
    highlights: ["Complete Flow", "Error States", "Network Fallbacks"],
  },
  {
    icon: <FiLayout className="text-green-500" />,
    title: "7. Then I Plan the UI/UX Architecture",
    content: "A good app should be easy, clean, and consistent. I plan the design system, color tokens, typography, and responsive behavior for both Android and iOS touch interactions.",
    highlights: ["Design System", "Touch Interactions", "Visual Consistency"],
  },
  {
    icon: <FiCodesandbox className="text-indigo-600" />,
    title: "8. Next I Decide the Flutter Architecture",
    content: "Clean structure matters from day one. I use feature-based modules with shared widgets, core services, and a robust network layer. This ensures scalability and easy maintenance.",
    highlights: ["Feature-Based", "Clean Code", "Scalable Base"],
  },
  {
    icon: <FiActivity className="text-rose-500" />,
    title: "9. Then I Choose State Management",
    content: "I choose state management (GetX, Provider, Riverpod, or BLoC) based on app complexity and team needs. The goal is maintainable and predictable state flow, not following hype.",
    highlights: ["Contextual Choice", "Predictable Flow", "State Control"],
  },
  {
    icon: <FiServer className="text-slate-500" />,
    title: "10. Then I Plan the Backend Connection",
    content: "Flutter is the app layer, but the backend is the business engine. I plan APIs for auth, data, notifications, and analytics using Node.js, Python, or Firebase.",
    highlights: ["API Strategy", "Business Engine", "Backend Unity"],
  },
  {
    icon: <SiNodedotjs className="text-emerald-500" />,
    title: "11. If the Backend Is Node.js Based",
    content: "I use Node.js (Express or NestJS) when APIs, speed, and real-time logic matter. This is best for real-time apps, booking systems, and e-commerce APIs.",
    highlights: ["Real-time APIs", "NestJS Structure", "TS Ecosystem"],
  },
  {
    icon: <SiPython className="text-blue-600" />,
    title: "12. If the Backend Is Python Based",
    content: "I prefer Python (Django or FastAPI) for AI-based apps, recommendation systems, and data-heavy products where complex business logic is central.",
    highlights: ["AI Integration", "Complex Logic", "Data Science Ready"],
  },
  {
    icon: <FiDatabase className="text-indigo-600" />,
    title: "13. I Plan the Database by Understanding the Data",
    content: "Data shape decides the strategy. PostgreSQL for strong relational data and transactions, or MongoDB for flexible document-based storage. I lean towards Postgres for serious business apps.",
    highlights: ["SQL Consistency", "Data Integrity", "Relational Depth"],
  },
  {
    icon: <FiSettings className="text-pink-500" />,
    title: "14. Then I Plan Core Mobile Features",
    content: "A production app needs auth, secure storage, API interceptors, offline caching, and deep linking. Users judge the smoothness of the entire experience.",
    highlights: ["Offline Cache", "Auth Flow", "Service Layer"],
  },
  {
    icon: <FiSmartphone className="text-sky-500" />,
    title: "15. I Also Plan Native-Level Needs Early",
    content: "Even in Flutter, platform-specific behavior matters. I plan Android/iOS permissions, push notifications, splash screens, and build flavors early to avoid release pain.",
    highlights: ["Platform Specs", "Native Hooks", "Release Prep"],
  },
  {
    icon: <FiGlobe className="text-blue-400" />,
    title: "16. Then I Design the API Integration Strategy",
    content: "Clean integration prevents chaos. I plan base API services, token injection with refresh logic, and centralized error mapping for a user-friendly fallback experience.",
    highlights: ["Token Lifecycle", "Service Isolation", "Error Mapping"],
  },
  {
    icon: <FiBox className="text-amber-600" />,
    title: "17. Then Comes Local Storage and Device Data",
    content: "Apps should remember things safely. I use Shared Preferences, Secure Storage, or Hive for caching API data and user session management based on performance needs.",
    highlights: ["Secure Storage", "Local Persistence", "Performance"],
  },
  {
    icon: <FiShield className="text-emerald-600" />,
    title: "18. I Plan Security Before Release, Not After a Bug",
    content: "Security is app quality. I implement secure token storage, route protection, and HTTPS-only communication with safe local storage strategies to prevent data exposure.",
    highlights: ["Data Protection", "Auth Hardening", "Safe Storage"],
  },
  {
    icon: <FiZap className="text-orange-500" />,
    title: "19. Then I Think About Performance",
    content: "I focus on image optimization, lazy loading, pagination, and memory-aware UI structure. The goal is fast opening, smooth navigation, and stable scrolling experience.",
    highlights: ["Lazy Loading", "Memory Management", "Silk Smooth UI"],
  },
  {
    icon: <FiActivity className="text-emerald-500" />,
    title: "20. Then I Prepare Testing Strategy",
    content: "Confidence before launch: I plan unit, widget, and integration testing for core flows like auth and payments. I test for slow internet, invalid inputs, and crash scenarios.",
    highlights: ["Logic Testing", "Crash Checks", "Full Flow Validation"],
  },
  {
    icon: <FiShare2 className="text-indigo-500" />,
    title: "21. Then I Plan Dev Environment and Team Workflow",
    content: "Good teamwork needs standard structure. I define Git branch strategies, development/staging environments, and reusable component rules to make the app easier to scale.",
    highlights: ["Git Flow", "Team Standards", "Scalability"],
  },
  {
    icon: <SiFirebase className="text-amber-500" />,
    title: "22. Then I Use Firebase or Similar Services Where Needed",
    content: "I use Firebase for Messaging, Analytics, Crashlytics, and Remote Config based on product needs. It helps speed up MVP delivery and improves app monitoring.",
    highlights: ["Push Notifications", "Live Monitoring", "Analytics Layer"],
  },
  {
    icon: <FiPlay className="text-emerald-400" />,
    title: "23. Then I Think About CI/CD and Build Automation",
    content: "Professional apps shouldn't depend on manual chaos. I set up automated builds, flavor configurations, and CI pipelines to speed up delivery and maintain quality.",
    highlights: ["Build Flavors", "Auto-Release", "Pipeline Setup"],
  },
  {
    icon: <SiAndroid className="text-green-500" />,
    title: "24. Then I Prepare Android Release Properly",
    content: "I finalize package names, app icons, splash screens, and signing keys. I ensure all permissions are clean and prepare high-quality Play Store assets and descriptions.",
    highlights: ["Signing Config", "Permissions Check", "Store Assets"],
  },
  {
    icon: <SiIos className="text-slate-400" />,
    title: "25. Then I Prepare iOS Release Properly",
    content: "iOS needs extra discipline. I plan certificates, provisioning profiles, and TestFlight builds. I focus on Apple review rules, privacy declarations, and device testing.",
    highlights: ["Certificate Management", "TestFlight", "App Review Ready"],
  },
  {
    icon: <FiShare2 className="text-sky-400" />,
    title: "26. Then I Think About Docker and Server Side",
    content: "The app lives on stores, but the business lives on servers. I use Docker for the backend API, database, and background workers to ensure environment consistency.",
    highlights: ["Backend Docker", "Service Isolation", "Environment Unity"],
  },
  {
    icon: <FiServer className="text-indigo-500" />,
    title: "27. Then I Plan Production Infrastructure",
    content: "The app must survive real users. I host the backend on VPS/Cloud with Nginx reverse proxy, managed databases, object storage, and full health monitoring.",
    highlights: ["Cloud Hosting", "Reverse Proxy", "Health Checks"],
  },
  {
    icon: <FiSettings className="text-rose-400" />,
    title: "28. Then I Plan Post-Launch Support",
    content: "Launch is only the beginning. I monitor crashes, track analytics, and iterate features based on real user feedback and performance tuning.",
    highlights: ["Live Monitoring", "Iterative Support", "Performance Tuning"],
  },
  {
    icon: <FiZap className="text-amber-400" />,
    title: "29. My End-to-End Mobile App Planning Flow",
    content: "Discovery -> Requirement Analysis -> Solution Planning -> Stack Selection -> Dev Architecture -> Build -> Infrastructure -> Release -> Launch and Improve.",
    highlights: ["Structured Flow", "Start to Finish", "Strategic Growth"],
  },
  {
    icon: <FiCheckCircle className="text-indigo-600" />,
    title: "30. My Core Belief as a Flutter Developer",
    content: "I do not just build app screens, I build complete mobile products. Understand first, architecture carefully, build cleanly, test thoroughly, and release professionally.",
    highlights: ["Product Engineer", "Reliable Results", "Maintainable Future"],
  }
];

const MobileMethodology = () => {
  return (
    <div className="bg-white dark:bg-darkbg min-h-screen text-slate-800 dark:text-slate-200 selection:bg-indigo-500/30">
      {/* Header */}
      <header className="relative pt-32 pb-20 overflow-hidden border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-darkbg/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 mb-8 hover:translate-x-[-4px] transition-transform">
            <FiArrowLeft className="text-lg" /> Back to Portfolio
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black dark:text-white leading-none tracking-tighter"
          >
            From Idea to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 italic">App Store Launch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed italic"
          >
            "I don’t just build app screens, I build complete mobile products that thrive on user devices and stores."
          </motion.p>
        </div>
      </header>

      {/* Timeline */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-24 relative">
            <div className="absolute left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500 opacity-20 hidden md:block" />

            {methodologyPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Icon Hub */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-white/10 shadow-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:shadow-indigo-500/30">
                    {point.icon}
                  </div>
                  <div className="absolute -inset-2 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white tracking-tight mb-4 group-hover:text-indigo-500 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
                    {point.content}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {point.highlights.map((h, i) => (
                      <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-indigo-500 dark:text-indigo-400 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile 3D Model Visual */}
                <div className="hidden lg:block w-40 h-80 rounded-[2.5rem] bg-slate-950 p-2 shadow-2xl relative overflow-hidden group/phone group-hover:border-indigo-500/30 border-4 border-slate-900 transition-colors">
                   <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden relative p-4">
                      {/* Notch */}
                      <div className="absolute top-0 inset-x-0 h-4 flex justify-center pt-1">
                        <div className="w-12 h-2 bg-black rounded-full" />
                      </div>

                      {/* Content inside phone based on point icon/index */}
                      <div className="mt-4 flex flex-col items-center justify-center h-full gap-3">
                         <div className="text-4xl text-indigo-500 opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700">
                           {point.icon}
                         </div>
                         <div className="space-y-2 w-full px-4">
                            <div className="w-full h-2 bg-indigo-500/10 rounded-full" />
                            <div className="w-2/3 h-2 bg-indigo-500/5 rounded-full mx-auto" />
                         </div>
                         {/* Mini App UI Layer */}
                         <div className="absolute inset-x-4 bottom-4 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex items-center justify-around px-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-slate-900" />)}
                         </div>
                      </div>

                      {/* Phase Indicator */}
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-8 right-4 px-2 py-0.5 bg-indigo-600 rounded-lg text-white text-[8px] font-black uppercase tracking-widest"
                      >
                         Phase {index + 1}
                      </motion.div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-40 bg-slate-900 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">
            Ready to Build a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Professional Mobile App?</span>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/#Contactus-section" className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-slate-100 transition-colors">
               Start Your App Design <FiTarget className="text-xl" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      </footer>
    </div>
  );
};

export default MobileMethodology;
