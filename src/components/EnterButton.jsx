import React from 'react';
import { motion } from 'framer-motion';

export default function EnterButton({ onClick }) {
  return (
    <div className="relative group">
      {/* Background Outer Neon Glow Shadow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      <motion.button
        onClick={onClick}
        className="relative px-8 py-3.5 bg-black border border-pink-500/50 hover:border-pink-400 text-pink-400 hover:text-white rounded-lg font-mono tracking-[0.2em] font-bold text-xs md:text-sm overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.1)] hover:shadow-[0_0_25px_rgba(255,0,127,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer Effect bar */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-pink-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <span>ENTER PORTFOLIO</span>
          <i className="fas fa-chevron-right text-[10px] md:text-xs ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </motion.button>
    </div>
  );
}
