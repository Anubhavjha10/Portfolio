import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SkillPlanet({ skill, activeSkillName, setActiveSkillName, onHoverChange }) {
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = activeSkillName === skill.name || isHovered;

  const handleTap = (e) => {
    e.stopPropagation(); // Stop propagation to prevent background overlay clicks
    if (activeSkillName === skill.name) {
      setActiveSkillName(null);
      onHoverChange(false);
    } else {
      setActiveSkillName(skill.name);
      onHoverChange(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(activeSkillName === skill.name);
  };

  return (
    <div className="relative flex flex-col items-center select-none z-30">
      {/* Visual Planet Sphere */}
      <motion.div
        onClick={handleTap}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-full bg-[#111111]/90 border-2 flex items-center justify-center cursor-pointer relative backdrop-blur-sm transition-colors duration-300"
        style={{
          borderColor: isOpen ? '#ff007f' : `${skill.color}90`,
          boxShadow: isOpen
            ? `0 0 22px rgba(255, 0, 127, 0.85), inset 0 0 10px rgba(255, 0, 127, 0.4)`
            : `0 0 12px ${skill.color}25`,
          willChange: 'transform'
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Brand Icon */}
        <i className={`${skill.icon} text-base sm:text-lg md:text-2xl`} style={{ color: skill.color }} />

        {/* Orbit coordinate glow lines - optimized with static layout to prevent thrashing */}
        {isOpen && (
          <div
            className="absolute -inset-1.5 rounded-full border border-pink-500/30 animate-pulse pointer-events-none"
          />
        )}
      </motion.div>

      {/* Upright Subtext Label */}
      <span className="text-[8px] sm:text-[9px] md:text-xs font-mono font-semibold tracking-wide text-gray-400 mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
        {skill.name}
      </span>

      {/* Floating Tooltip Panel (Wrapped to prevent Framer Motion transform clashing) */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none z-50">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="w-36 sm:w-44 md:w-48 p-2.5 sm:p-3 bg-black/95 border border-pink-500/40 rounded-lg shadow-[0_0_20px_rgba(255,0,127,0.3)] text-center backdrop-blur-md relative"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                {skill.name}
              </div>
              <div className="text-[8px] sm:text-[10px] text-gray-400 font-sans leading-relaxed">
                {skill.desc}
              </div>
              {/* Tooltip arrow pointer */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-pink-500/40 w-0 h-0" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default React.memo(SkillPlanet);
