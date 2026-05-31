import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const roles = [
    "Python Developer.",
    "Front end developer.",
    "Problem Solver & Tech Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  const resumeLink = "https://drive.google.com/file/d/1_c-l2dH_ARCoExQ0Th6n7wGKpCFf8C4h/view?usp=sharing";

  // Typewriter logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Generate random coordinates for background floating stars - optimized count for mobile performance
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 12 : 30;
    setStars(
      Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full max-w-7xl mx-auto min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl mb-8 relative overflow-hidden select-none">
      
      {/* Background stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: '3s',
            willChange: 'opacity',
          }}
          className="rounded-full bg-white/30 pointer-events-none animate-pulse"
        />
      ))}

      {/* Apple-style background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] rounded-full bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[250px] h-[250px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side: Text and CTA details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-3/5 text-center lg:text-left flex flex-col justify-center"
        >
          {/* Label */}
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.4em] text-pink-500 uppercase bg-pink-950/20 px-4 py-1.5 rounded-full border border-pink-500/20 shadow-[0_0_15px_rgba(255,0,127,0.1)] inline-block mx-auto lg:mx-0 w-fit mb-6">
            SOFTWARE DEVELOPER
          </span>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 drop-shadow-[0_0_15px_rgba(255,0,127,0.25)]">Anubhav</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-mono text-gray-300 tracking-wide mb-4">
            Python Developer • Web Developer • Automation Enthusiast
          </p>

          {/* Running dynamic roles typewriter */}
          <div className="h-8 mb-6 flex items-center justify-center lg:justify-start">
            <span className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest mr-2">Initializing:</span>
            <span className="text-pink-500 font-mono text-xs md:text-sm font-bold border-r-2 border-pink-500 pr-1 animate-[blink_1s_infinite]">
              {typedText}
            </span>
          </div>

          {/* Short Bio description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
            I have been working since 2022. I am proficient in Penetration Testing, user experience, researcher, and web development. I love building clean, secure systems and elegant, highly-optimized interactive frontends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] transition-all duration-300"
            >
              View Projects
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent border border-white/20 hover:border-pink-500/50 hover:bg-pink-950/10 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Specialization and socials */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-16 pt-8 border-t border-white/5">
            <div>
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-3">Connect Matrix</p>
              <div className="flex gap-4">
                <a href="https://github.com/Anubhavjha10" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(255,0,127,0.2)] transition-all duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ig.anubhavjha/profilecard/?igsh=ZXR4YnA4NThnZGsx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(255,0,127,0.2)] transition-all duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kumaranubhav10" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(255,0,127,0.2)] transition-all duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div>
              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-3">Priority Skills</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 text-lg hover:text-pink-500 hover:border-pink-500/30 transition-all duration-300">
                  <i className="fab fa-python"></i>
                </div>
                <div className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 text-lg hover:text-pink-500 hover:border-pink-500/30 transition-all duration-300">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center text-gray-400 text-lg hover:text-pink-500 hover:border-pink-500/30 transition-all duration-300">
                  <i className="fas fa-bug"></i>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right Side: Animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex w-full lg:w-2/5 items-center justify-center"
        >
          {/* Glass mock framing */}
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
            {/* Animated card border shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <img
              src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
              alt="Anubhav Code Space"
              className="rounded-xl w-full max-w-sm lg:max-w-md object-cover select-none filter brightness-95"
              draggable="false"
              fetchpriority="high"
              width="448"
              height="448"
            />
          </div>
        </motion.div>

      </div>

      {/* Smooth scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-none opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-mono tracking-[0.25em] text-gray-400 uppercase">Scroll Down</span>
        <div className="w-5 h-8 border border-white/20 rounded-full p-1 relative flex items-start justify-center">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-pink-500 rounded-full"
          />
        </div>
      </div>

    </section>
  );
}

export default React.memo(Hero);
