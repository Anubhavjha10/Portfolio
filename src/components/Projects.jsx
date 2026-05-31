import React from 'react';
import { motion } from 'framer-motion';

// Import images from relative path
import toppersbuzzpremiumImg from '../../websites/toppersbuzzpremium.png';
import huboftrinketImg from '../../websites/huboftrinket.png';
import dukaanmanagerImg from '../../websites/dukaanmanager.png';
import makaligeneralstoreImg from '../../websites/makaligeneralstore.png';
import cameramartImg from '../../websites/cameramart.png';

const projectsList = [
  {
    title: "Toppers Buzz Premium - An Coaching Center",
    subtitle: "Website Design for coaching Purposes",
    image: toppersbuzzpremiumImg,
    description: "Designed and developed a fully responsive website for Toppers Buzz Premium, a leading coaching center. The site features an intuitive layout, mobile-friendly design, and showcases courses, faculty, and announcements to help students stay updated and engaged.",
    link: "https://www.toppersbuzzpremium.com/home",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    type: "Web Application",
    status: "Completed ✓"
  },
  {
    title: "Hub of Trinket",
    subtitle: "Making an Cosmetic Shop website",
    image: huboftrinketImg,
    description: "Developed a complete online storefront for the Hub of Trinket accessories brand. The key focus was on user experience (UX) and design, creating an engaging and easy-to-navigate platform for customers. This project showcases skills in frontend development and building a fully functional e-commerce site from the ground up.",
    link: "https://www.huboftrinket.in",
    tags: ["React", "CSS3", "JavaScript", "UX Design"],
    type: "Web Application",
    status: "Completed ✓"
  },
  {
    title: "Dukaan Manager",
    subtitle: "Full Store Management with Daily Reports",
    image: dukaanmanagerImg,
    description: "Dukan Manager is a simple yet efficient store management system designed to help small shopkeepers manage daily sales, inventory, and customer records with ease. Built using Python, the tool offers a clean interface to track products, generate bills, and maintain organized records — making local business operations more streamlined and digital-friendly.",
    link: "https://dukaanmanager.netlify.app/",
    tags: ["Python", "SQLite", "Automation", "Reports"],
    type: "Desktop App",
    status: "Completed ✓"
  },
  {
    title: "Makali General Store",
    subtitle: "Making an Ecommerce website for an Provision Store.",
    image: makaligeneralstoreImg,
    description: "Developed a complete digital storefront for Maa Kali General Store to help them establish an online presence. This project involved designing and building a responsive e-commerce platform where customers can easily browse products and place orders. The focus was on creating an intuitive layout and a seamless checkout process, demonstrating skills in frontend development and backend integration.",
    link: "https://storemakali.netlify.app",
    tags: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
    type: "Web Application",
    status: "Completed ✓"
  },
  {
    title: "Camera Mart",
    subtitle: "Making an Ecommerce website for an Camera Store.",
    image: cameramartImg,
    description: "A complete e-commerce solution built for cameramart.shop. This project demonstrates the ability to build a targeted online retail store from concept to deployment. The site is optimized for product discovery, making it easy for customers to find and purchase specific camera gear. This project showcases skills in frontend development and backend integration for a specific retail market.",
    link: "https://cameramart.shop/",
    tags: ["React", "Tailwind CSS", "E-commerce", "UX Design"],
    type: "Web Application",
    status: "Completed ✓"
  }
];

// Framer Motion layout states
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function Projects({ onViewDetails }) {
  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl mb-8 relative overflow-hidden select-none animate-on-scroll">
      
      {/* Background digital ambient glows */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-pink-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <div className="text-center mb-16 z-10 relative">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
          <span className="font-mono text-pink-500 mr-2">&gt;</span>PROJECT DATABASE
        </h3>
        <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-widest max-w-md mx-auto">
          A collection of real-world applications and development work.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4" />
      </div>

      {/* Staggered Card Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {projectsList.map((project, index) => {
          // Access ID matching directory pattern
          const accessId = `DB-0${index + 1}`;
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#0b0b0b]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative flex flex-col group hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all duration-500"
              style={{ willChange: 'transform' }}
            >
              {/* Card top bar matching terminal view */}
              <div className="bg-[#111111] px-4 py-2 border-b border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  ACCESS_CODE: <span className="text-pink-500">{accessId}</span>
                </span>
                <span>SYS_SECURE: PASS</span>
              </div>

              {/* Card image container */}
              <div className="overflow-hidden relative w-full h-48 bg-[#151515]">
                {/* Tech Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10 opacity-45" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
                  loading="lazy"
                  width="400"
                  height="192"
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold font-mono text-white mb-2 tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-pink-950/20 text-pink-400 border border-pink-500/20 text-[9px] font-mono font-bold py-0.5 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover reveal drawer details */}
                <div className="pt-4 border-t border-white/5 font-mono text-[10px] space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">PROJECT STATUS:</span>
                    <span className="text-green-500 font-bold">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">PROJECT TYPE:</span>
                    <span className="text-blue-400">{project.type}</span>
                  </div>
                </div>

                {/* Dynamic Button bar */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <a
                    href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-[#151515] hover:bg-pink-600 hover:text-white border border-white/10 hover:border-pink-500 text-white font-mono text-[9px] font-bold uppercase tracking-wider py-2.5 px-1 rounded-md transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Anubhavjha10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-[#151515] hover:bg-purple-600 hover:text-white border border-white/10 hover:border-purple-500 text-white font-mono text-[9px] font-bold uppercase tracking-wider py-2.5 px-1 rounded-md transition-all duration-300"
                  >
                    Source Code
                  </a>
                  <button
                    onClick={() => onViewDetails(project)}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-mono text-[9px] font-bold uppercase tracking-wider py-2.5 px-1 rounded-md shadow-md transition-colors duration-300"
                  >
                    Case Study
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default React.memo(Projects);
