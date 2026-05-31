import React from 'react';
import { motion } from 'framer-motion';

function OrbitRing({ radius, color }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: radius * 2,
          height: radius * 2,
          borderColor: color,
          boxShadow: `inset 0 0 40px ${color}08, 0 0 20px ${color}03`,
          willChange: 'transform, opacity'
        }}
        className="border border-dashed rounded-full"
      />
    </div>
  );
}

export default React.memo(OrbitRing);
