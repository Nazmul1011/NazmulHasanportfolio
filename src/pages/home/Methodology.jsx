import { motion } from "framer-motion";
import { 
  FiArrowLeft, FiCheckCircle, FiSearch, FiLayout, FiCpu, 
  FiLayers, FiDatabase, FiCloud, FiShield, FiTrendingUp, 
  FiGitPullRequest, FiSettings, FiActivity, FiTerminal,
  FiBox, FiServer, FiGlobe, FiShare2, FiZap, FiTarget, FiMessageSquare, FiHelpCircle
} from "react-icons/fi";
import { SiNextdotjs, SiReact, SiNodedotjs, SiPython, SiDjango, SiPostgresql, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const methodologyPoints = [
  {
    icon: <FiTarget className="text-red-500" />,
    title: "1. Every Project Starts With a Problem, Not With Code",
    content: `First I understand what actually needs to be solved. Before I think about React, Node.js, Python, Docker, or databases, I start with the real question: What is the actual business problem? Who are the users? What pain point are they facing? What does success look like for the client? Which features are essential, and which are only “nice to have”?`,
    highlights: ["Problem First", "User Centric", "Success Metrics"],
    visual: "SaaS/ProblemAnalysis"
  },
  {
    icon: <FiSearch className="text-blue-500" />,
    title: "2. Then I Translate the Problem Into a System",
    content: `I turn business needs into technical thinking. Once I understand the client’s need, I convert it into a technical scenario. Here I define the system type (SaaS, E-commerce, Dashboard), identify the users (Admins, Managers, Customers), and break the whole thing into modules: frontend, backend, database entities, and integrations.`,
    highlights: ["SaaS Architecture", "Module Breakdown", "User Flow"],
    visual: "SystemDesign"
  },
  {
    icon: <FiLayers className="text-indigo-500" />,
    title: "3. Before Choosing Tech, I Define the Nature of the Product",
    content: `Technology should follow the problem. I do not choose a stack based on trend. I usually evaluate: Is this project startup MVP or a long-term scalable product? Does it need fast development or high performance? Will the data be highly structured or flexible? This stage decides whether I should go lightweight, scalable, or highly performance-focused.`,
    highlights: ["Scalability Analysis", "MVP vs Enterprise", "Stack Evaluation"],
    visual: "ProductNature"
  },
  {
    icon: <FiGlobe className="text-sky-500" />,
    title: "4. Choosing the Frontend",
    content: `The user sees the frontend, but the business feels its quality. Frontend is the user experience layer. If I need a modern web app, Iusually think about Next.js for SEO and performance, or React.js for complex dashboards. I choose based on the requirement of SEO, dashboard complexity, and performance goals.`,
    highlights: ["Next.js (SSR)", "React (SPA)", "Performance Layer"],
    visual: "FrontendSelection"
  },
  {
    icon: <FiCpu className="text-purple-500" />,
    title: "5. Choosing the Backend",
    content: `The backend is where business logic becomes reliable. Backend is where the system becomes real. When choosing backend, I think about business logic complexity, scalability, API speed, authentication requirements, background jobs, and real-time communication.`,
    highlights: ["Reliable Logic", "API Speed", "Scalable Base"],
    visual: "BackendCore"
  },
  {
    icon: <FiZap className="text-amber-500" />,
    title: "6. If I Choose Node.js",
    content: `I use it when speed, APIs, and real-time are important. I prefer Node.js for fast API development, real-time features, WebSocket support, and event-driven architectures. My typical stack includes Express.js or NestJS with TypeScript, Prisma, and PostgreSQL.`,
    highlights: ["Real-time APIs", "TypeScript", "NestJS Structure"],
    visual: "NodeEngine"
  },
  {
    icon: <FiSettings className="text-green-500" />,
    title: "7. If I Choose Python",
    content: `I use it when logic, data processing, or AI is a major part of the product. Python is the right choice for AI/ML integration, data-heavy operations, analytics, and complex business logic. My typical stack includes Django or FastAPI with DRF and PostgreSQL.`,
    highlights: ["AI/ML Ready", "Data Engineering", "Django Robustness"],
    visual: "PythonLogic"
  },
  {
    icon: <FiDatabase className="text-indigo-600" />,
    title: "8. Choosing the Database",
    content: `Data shape decides database strategy. Database choice is never random. I use PostgreSQL for strong relational structure and consistency, or MongoDB for flexible schema and document-based storage. My senior rule: If the system has strong business relations, I usually prefer PostgreSQL.`,
    highlights: ["SQL vs NoSQL", "Data Consistency", "Scalable Schema"],
    visual: "DBArchitecture"
  },
  {
    icon: <FiTerminal className="text-slate-500" />,
    title: "9. I Design the System Before Writing the Logic",
    content: `Architecture first, coding second. Before development starts, I prepare the module structure, API contract, database schema, and auth flow. I usually map users, roles, permissions, and entities to keep the codebase clean and save time later.`,
    highlights: ["Plan Before Code", "Auth Flow", "Schema Mapping"],
    visual: "ArchDesign"
  },
  {
    icon: <FiBox className="text-blue-600" />,
    title: "10. Backend Planning in a Senior Way",
    content: `I build the backend as a product core, not just route files. A proper plan includes core layers (controller, service, repository, validation), clean API design, versioning, modular services, and security rules. I always think about how failures are recovered and how future developers will understand the code.`,
    highlights: ["Layered Arch", "Fail-safe", "Maintainability"],
    visual: "BackendProduct"
  },
  {
    icon: <FiBox className="text-gray-400" />,
    title: "11. Then I Think About Infrastructure",
    content: `Building the app is one part; running it properly is another. At infrastructure level, I plan where frontend and backend will be hosted, where database will live, how file storage will work, and how scaling and backups will be handled.`,
    highlights: ["Cloud Hosting", "Storage Strategy", "Scalable Home"],
    visual: "InfraCloud"
  },
  {
    icon: <FiShare2 className="text-sky-400" />,
    title: "12. Where Docker Comes In",
    content: `Docker helps me make the system portable, stable, and predictable. I use it to make sure the app runs the same way in every environment (local, staging, production). It helps in service isolation, environment consistency, and easier deployment.`,
    highlights: ["Portability", "Containerization", "DevOps Base"],
    visual: "DockerFlow"
  },
  {
    icon: <FiServer className="text-orange-500" />,
    title: "13. But Docker Is a Tool, Not the Whole Server Strategy",
    content: `Docker packages the app; server strategy decides how it will run. I plan between single VPS server, cloud VM, or managed container services depending on project size. For larger systems, I include load balancers, container orchestration, and content delivery networks.`,
    highlights: ["Server Choice", "Deployment Model", "Production Readiness"],
    visual: "ServerStrategy"
  },
  {
    icon: <FiShield className="text-emerald-500" />,
    title: "14. Server-Side Planning",
    content: `I think beyond code and plan how the system lives in production. This includes runtime (Docker/PM2), storage (Backups), security (Firewalls, SSL, Rate Limiting), performance (Caching, CDN), and reliability (Monitoring, Health Checks).`,
    highlights: ["Active Security", "Reliability", "Health Monitoring"],
    visual: "ProdOps"
  },
  {
    icon: <FiGitPullRequest className="text-indigo-500" />,
    title: "15. How I Think About Different Stack Combinations",
    content: `I do not force one stack for every project. A classic scalable business app may use Next.js, NestJS, and PostgreSQL. An AI-enabled product may use FastAPI and PostgreSQL. An MVP needs speed, Enterprise needs maintainability. I choose the best fit for the goal.`,
    highlights: ["Stack Agnostic", "Scale Focused", "Goal Driven"],
    visual: "DecisionMatrix"
  },
  {
    icon: <FiTrendingUp className="text-rose-500" />,
    title: "16. I Also Plan DevOps and Delivery Early",
    content: `Deployment should not be an afterthought. A senior approach includes Git workflow, branch strategy, staging environments, and CI/CD testing pipelines. This ensures delivery is consistent and rollback is always possible.`,
    highlights: ["Continuous Delivery", "Staging Flow", "Confidence Early"],
    visual: "DevOpsCycle"
  },
  {
    icon: <FiActivity className="text-emerald-400" />,
    title: "17. Testing Is Part of the Plan, Not the Last Step",
    content: `I want confidence before launch. Testing planning includes unit testing, API testing, frontend validation, and auth testing. A senior mindset means asking not only “does it work?” but also “will it fail safely?” and “can it be maintained later?”.`,
    highlights: ["Safe Failure", "API Testing", "Confidence Checks"],
    visual: "TestConfidence"
  },
  {
    icon: <FiZap className="text-yellow-500" />,
    title: "18. I Always Think About Scalability Before It Hurts",
    content: `Good systems are built with room to grow. Traffic growth, database size, more modules, more roles – even if the first version is small, I build with modular backends and clear folder structures so the system grows without friction.`,
    highlights: ["Room to Grow", "Modular Backend", "Schema Future"],
    visual: "ScaleAdvance"
  },
  {
    icon: <FiCheckCircle className="text-sky-500" />,
    title: "19. My End-to-End Senior Planning Flow",
    content: `This is how I move from start to finish: Discovery → Requirement Analysis → Solution Planning → Stack Selection → Development Architecture → Build → Infrastructure and Deployment → Launch and Improve.`,
    highlights: ["Full Lifecycle", "Structured Execution", "Continuous Growth"],
    visual: "FlowTimeline"
  },
  {
    icon: <FiTarget className="text-indigo-600" />,
    title: "20. My Core Belief as a Senior Full-Stack Developer",
    content: `I do not just build software, I build systems that can live, grow, and survive. Technology is not the starting point. The problem is the starting point. The goal is to make something reliable, maintainable, scalable, and valuable.`,
    highlights: ["System Architect", "Value Driven", "Grows and Survives"],
    visual: "PhilosophyEnd"
  }
];

const MethodologyPage = () => {
  return (
    <div className="bg-white dark:bg-darkbg min-h-screen text-slate-800 dark:text-slate-200 selection:bg-indigo-500/30">
      {/* Premium Gradient Header */}
      <header className="relative pt-32 pb-20 overflow-hidden border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-darkbg/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 mb-8 hover:translate-x-[-4px] transition-transform">
            <FiArrowLeft className="text-lg" /> Back to Portfolio
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black dark:text-white leading-none tracking-tighter"
          >
            From Idea to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 italic">Production Architecture</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed italic"
          >
            "I don't just write code; I architect systems that survive user growth and technical complexity. 
            Here is my 20-point philosophy for building professional full-stack systems."
          </motion.p>
        </div>
      </header>

      {/* Methodology Timeline/Grid */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-24 relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500 opacity-20 hidden md:block" />

            {methodologyPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Numbered Hub */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-white/10 shadow-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:shadow-indigo-500/30">
                    {point.icon}
                  </div>
                  {/* Glowing Connection */}
                  <div className="absolute -inset-2 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-black dark:text-white tracking-tight mb-4 group-hover:text-indigo-500 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
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

                {/* Preview/Mock Visual (High-Fidelity Models) */}
                <div className="hidden lg:block w-80 h-48 rounded-[2rem] bg-slate-100 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 overflow-hidden relative shadow-inner group-hover:border-indigo-500/30 transition-colors">
                   <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                      {/* Specific Visuals based on Index */}
                      {index === 0 && ( // Phase 1: Problem
                        <div className="relative">
                          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-6xl text-indigo-500 opacity-20">
                            <FiHelpCircle />
                          </motion.div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FiTarget className="text-4xl text-indigo-500" />
                          </div>
                        </div>
                      )}
                      {index === 1 && ( // Phase 2: System Translation
                         <div className="w-full space-y-3">
                            <div className="flex gap-2">
                               <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500"><FiLayout /></div>
                               <div className="w-full h-8 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-100 dark:border-white/5" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                               {[1,2,3].map(i => <div key={i} className="h-12 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-white/5" />)}
                            </div>
                         </div>
                      )}
                      {index === 2 && ( // Phase 3: Nature of Product
                        <div className="relative w-full h-full flex items-center justify-center">
                          <FiLayers className="text-5xl text-indigo-400 absolute opacity-20" />
                          <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-xl bg-indigo-600 shadow-lg flex items-center justify-center text-white text-xl"><FiTrendingUp /></div>
                             <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xl text-indigo-400"><FiZap /></div>
                          </div>
                        </div>
                      )}
                      {index === 3 && ( // Phase 4: Frontend Stack
                        <div className="flex gap-4 items-center">
                           <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-3xl text-sky-500 border border-gray-100 dark:border-white/5">
                             <SiNextdotjs />
                           </motion.div>
                           <FiGlobe className="text-2xl text-slate-300" />
                           <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-3xl text-blue-400 border border-gray-100 dark:border-white/5">
                             <SiReact />
                           </motion.div>
                        </div>
                      )}
                      {index === 4 && ( // Phase 5: Backend Core
                        <div className="relative group/backend">
                           <div className="flex gap-3">
                              <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-2xl shadow-lg"><FiCpu /></div>
                              <div className="space-y-2">
                                 <div className="w-24 h-2 bg-indigo-500/20 rounded-full" />
                                 <div className="w-16 h-2 bg-indigo-500/10 rounded-full" />
                              </div>
                           </div>
                        </div>
                      )}
                      {index === 5 && ( // Phase 6: Node.js
                        <div className="flex flex-col items-center gap-4">
                           <SiNodedotjs className="text-5xl text-emerald-500" />
                           <div className="flex gap-2">
                              {['Express', 'Nest', 'Prisma'].map(t => (
                                <span key={t} className="text-[8px] font-black uppercase px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-md">{t}</span>
                              ))}
                           </div>
                        </div>
                      )}
                      {index === 6 && ( // Phase 7: Python
                        <div className="flex flex-col items-center gap-4">
                           <div className="flex gap-3 text-4xl">
                              <SiPython className="text-blue-500" />
                              <SiDjango className="text-emerald-800 dark:text-emerald-400" />
                           </div>
                           <div className="w-32 h-2 bg-blue-500/10 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} className="h-full bg-blue-500" />
                           </div>
                        </div>
                      )}
                      {index === 7 && ( // Phase 8: Database (SQL vs NoSQL Style)
                        <div className="flex gap-6 items-center">
                           <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-14 border-2 border-indigo-500/30 rounded-lg flex flex-col justify-between p-1">
                                 {[1,2,3].map(i => <div key={i} className="h-1.5 bg-indigo-500/20 rounded-full" />)}
                              </div>
                              <SiPostgresql className="text-blue-500 text-xl" />
                           </div>
                           <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
                           <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
                                 <div className="w-6 h-6 bg-emerald-500/20 rounded-full" />
                              </div>
                              <SiMongodb className="text-emerald-500 text-xl" />
                           </div>
                        </div>
                      )}

                      {/* Fallback for others - generic but polished */}
                      {index > 7 && (
                        <div className="flex flex-col items-center justify-center h-full gap-3">
                            <div className="text-4xl text-indigo-500 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                               {point.icon}
                            </div>
                            <div className="flex gap-1">
                               {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-indigo-500 rounded-full" />)}
                            </div>
                        </div>
                      )}

                      {/* Phase Indicator Tag */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-4 right-4 px-3 py-1 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[9px] font-black shadow-lg"
                      >
                         PHASE {index + 1}
                      </motion.div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Footer */}
      <footer className="py-40 bg-slate-900 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">
            Ready to Build a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Professional System?</span>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/#Contactus-section" className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-slate-100 transition-colors">
               Start Your Project <FiTarget className="text-xl" />
            </Link>
          </motion.div>
        </div>
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      </footer>
    </div>
  );
};

export default MethodologyPage;
