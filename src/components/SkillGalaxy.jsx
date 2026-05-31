import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import OrbitRing from './OrbitRing';
import SkillPlanet from './SkillPlanet';
import AvatarCore from './AvatarCore';

// Responsive screen detection hook
function useScreenType() {
  const [screenType, setScreenType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setScreenType('mobile');
      } else if (w < 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('desktop');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenType;
}

const orbitsData = [
  {
    id: 'backend',
    title: 'Backend & Automation',
    radius: { desktop: 110, tablet: 90, mobile: 55 },
    duration: 30, // Slowed down slightly for better readability
    color: 'rgba(236, 72, 153, 0.25)', // Pink
    skills: [
      { name: 'Python', desc: 'Backend Development, Automation, APIs', icon: 'fab fa-python', color: '#3776AB' },
      { name: 'Django', desc: 'Robust Web Framework Integration', icon: 'fas fa-leaf', color: '#092E20' },
      { name: 'REST APIs', desc: 'Secure & Standardized Endpoint Design', icon: 'fas fa-network-wired', color: '#FF6C37' },
      { name: 'SQL', desc: 'Database Schema Modeling & Optimization', icon: 'fas fa-database', color: '#00758F' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Interfaces',
    radius: { desktop: 190, tablet: 150, mobile: 100 },
    duration: 42, // Slowed down slightly for better readability
    color: 'rgba(168, 85, 247, 0.25)', // Purple
    skills: [
      { name: 'HTML5', desc: 'Semantic Structure & Modern Markup', icon: 'fab fa-html5', color: '#E34F26' },
      { name: 'CSS3', desc: 'Responsive Grid, Flexbox, & Layouts', icon: 'fab fa-css3-alt', color: '#1572B6' },
      { name: 'JavaScript', desc: 'Dynamic Interactive Frontend Logic', icon: 'fab fa-js', color: '#F7DF1E' },
      { name: 'React', desc: 'Component-Driven Single-Page Applications', icon: 'fab fa-react', color: '#61DAFB' },
      { name: 'Tailwind CSS', desc: 'Highly Customized Utility-First Styling', icon: 'fas fa-wind', color: '#06B6D4' },
    ],
  },
  {
    id: 'tools',
    title: 'Systems & Productivity',
    radius: { desktop: 270, tablet: 210, mobile: 145 },
    duration: 55, // Slowed down slightly for better readability
    color: 'rgba(59, 130, 246, 0.25)', // Blue
    skills: [
      { name: 'Git', desc: 'Granular Distributed Version Control', icon: 'fab fa-git-alt', color: '#F05032' },
      { name: 'GitHub', desc: 'Collaboration, Pull Requests, & Hosting', icon: 'fab fa-github', color: '#8b949e' },
      { name: 'Linux', desc: 'Terminal Navigation & Script Operations', icon: 'fab fa-linux', color: '#FCC624' },
      { name: 'VS Code', desc: 'Integrated Development Environment Setup', icon: 'fas fa-code', color: '#007ACC' },
    ],
  },
];

export default function SkillGalaxy() {
  const screenType = useScreenType();
  const [activeSkillName, setActiveSkillName] = useState(null);
  const [hoveredPlanetName, setHoveredPlanetName] = useState(null);
  const [hoveredOrbits, setHoveredOrbits] = useState({
    backend: false,
    frontend: false,
    tools: false,
  });

  const [stars, setStars] = useState([]);

  // Generate random stable coordinates for tiny stars - optimized count for mobile performance
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 15 : 40;
    const starList = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setStars(starList);
  }, []);

  const handleOrbitHover = useCallback((orbitId, isHovered, skillName) => {
    setHoveredOrbits((prev) => {
      if (prev[orbitId] === isHovered) return prev;
      return {
        ...prev,
        [orbitId]: isHovered,
      };
    });
    setHoveredPlanetName(isHovered ? skillName : null);
  }, []);

  const getIsOrbitPaused = useCallback((orbit) => {
    if (hoveredOrbits[orbit.id]) return true;
    if (activeSkillName) {
      return orbit.skills.some((s) => s.name === activeSkillName);
    }
    return false;
  }, [hoveredOrbits, activeSkillName]);

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl shadow-2xl mb-8 relative overflow-hidden flex flex-col items-center justify-center animate-on-scroll">
      
      {/* Self-contained CSS Animations block */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-spin {
          0% { transform: rotate(var(--start-angle)); }
          100% { transform: rotate(calc(var(--start-angle) + 360deg)); }
        }
        .orbit-spin-anim {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          transform-origin: center center;
          animation: orbit-spin var(--orbit-dur) linear infinite;
          animation-play-state: var(--orbit-play);
        }

        @keyframes planet-counter {
          0% { transform: translate(-50%, -50%) translateY(calc(-1 * var(--orbit-radius))) rotate(calc(-1 * var(--start-angle))); }
          100% { transform: translate(-50%, -50%) translateY(calc(-1 * var(--orbit-radius))) rotate(calc(-1 * var(--start-angle) - 360deg)); }
        }
        .planet-counter-anim {
          position: absolute;
          left: 0;
          top: 0;
          transform-origin: center center;
          animation: planet-counter var(--orbit-dur) linear infinite;
          animation-play-state: var(--orbit-play);
        }
      `}} />

      {/* Tiny stars background */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`,
            animationDuration: '2s',
            willChange: 'opacity',
          }}
          className="rounded-full bg-white/40 pointer-events-none animate-pulse"
        />
      ))}

      {/* Ambient background glows (nebula effects) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-2 z-10">
        <i className="fas fa-satellite-dish text-pink-500 mr-3 animate-pulse"></i>Skill Galaxy
      </h3>
      <p className="text-gray-400 text-xs md:text-sm text-center mb-12 max-w-md font-mono uppercase tracking-widest z-10">
        Revolving technologies revolving around my core stack
      </p>

      {/* Concentric 3D Orbit Galaxy (Rendered on all viewports) */}
      <div className="relative w-full h-[340px] sm:h-[600px] md:h-[700px] max-w-[340px] sm:max-w-[600px] md:max-w-[700px] flex items-center justify-center z-10 select-none">
        
        {/* Transparent tap-out dismiss layer when active tooltip is open */}
        {activeSkillName && (
          <div
            className="absolute inset-0 bg-transparent z-20 pointer-events-auto cursor-default"
            onClick={() => {
              setActiveSkillName(null);
              setHoveredOrbits({ backend: false, frontend: false, tools: false });
            }}
          />
        )}

        {/* Avatar center core */}
        <AvatarCore />

        {/* Render orbits */}
        {orbitsData.map((orbit) => {
          const currentRadius = orbit.radius[screenType];
          const isPaused = getIsOrbitPaused(orbit);

          return (
            <React.Fragment key={orbit.id}>
              {/* Visual Orbit Vector Line */}
              <OrbitRing radius={currentRadius} color={orbit.color} />

              {/* Skill Nodes moving on Orbit Ring */}
              {orbit.skills.map((skill, index) => {
                const totalPlanets = orbit.skills.length;
                const angle = (360 / totalPlanets) * index;
                const isElevated = activeSkillName === skill.name || hoveredPlanetName === skill.name;

                return (
                  <div
                    key={skill.name}
                    className={`orbit-spin-anim ${isElevated ? 'z-[9999]' : 'z-20'}`}
                    style={{
                      '--start-angle': `${angle}deg`,
                      '--orbit-dur': `${orbit.duration}s`,
                      '--orbit-play': isPaused ? 'paused' : 'running',
                    }}
                  >
                    {/* Planet containment block */}
                    <div
                      className={`planet-counter-anim ${isElevated ? 'z-[9999]' : 'z-20'}`}
                      style={{
                        '--orbit-radius': `${currentRadius}px`,
                        '--start-angle': `${angle}deg`,
                        '--orbit-dur': `${orbit.duration}s`,
                        '--orbit-play': isPaused ? 'paused' : 'running',
                      }}
                    >
                      <SkillPlanet
                        skill={skill}
                        activeSkillName={activeSkillName}
                        setActiveSkillName={setActiveSkillName}
                        onHoverChange={(isHovered) => handleOrbitHover(orbit.id, isHovered, skill.name)}
                      />
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
