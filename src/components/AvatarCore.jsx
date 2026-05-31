import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../../Avatar.png';

function AvatarCore() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex items-center justify-center">
      {/* Outer pulsing energy border ring */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border border-pink-500/40 pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-pink-500 bg-[#0c0c0c] p-1 flex items-center justify-center cursor-pointer hover:border-pink-400 transition-colors duration-300"
        style={{
          boxShadow: "0 0 25px rgba(255, 0, 127, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.3)",
          willChange: "transform"
        }}
      >
        {/* Glow overlay that pulses using GPU-accelerated opacity to avoid expensive repaint */}
        <motion.div
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: "0 0 45px rgba(255, 0, 127, 0.75), inset 0 0 25px rgba(168, 85, 247, 0.6)",
            willChange: "opacity"
          }}
        />

        <img
          src={avatarImg}
          alt="Avatar Core"
          className="w-full h-full object-cover rounded-full select-none"
          style={{ objectPosition: 'center 35%' }}
          draggable="false"
        />

        {/* Small center tech coordinate lines */}
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent pointer-events-none" />
        <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default React.memo(AvatarCore);
