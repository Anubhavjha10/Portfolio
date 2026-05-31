import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScreenSplitTransition({ isTriggered, onTransitionComplete, leftContent, rightContent }) {
  const leftPanelControls = useAnimation();
  const rightPanelControls = useAnimation();
  const crackControls = useAnimation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isTriggered) {
      setIsActive(true);
      runSequence();
    }
  }, [isTriggered]);

  const runSequence = async () => {
    // Step 1: A crack appears exactly at the center (height 0% to 100%)
    await crackControls.start({
      height: '100%',
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
    });

    // Step 2: The crack rapidly expands in width & glow (vertical/horizontal intensity)
    await crackControls.start({
      width: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 30px #ff007f, 0 0 60px #ff007f, 0 0 100px #ffffff',
      transition: { duration: 0.3, ease: 'easeOut' }
    });

    // Fade out the crack slightly during splitting
    crackControls.start({
      opacity: 0,
      transition: { duration: 0.4 }
    });

    // Step 3 & 4: Left and Right panels move completely off-screen
    // Using a custom cubic-bezier (anticipate-push/slide) easing for organic, physical feel
    await Promise.all([
      leftPanelControls.start({
        x: '-100%',
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] }
      }),
      rightPanelControls.start({
        x: '100%',
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] }
      })
    ]);

    // Step 5: Hide transition wrapper and trigger reveal callback
    setIsActive(false);
    onTransitionComplete();
  };

  if (!isActive && !isTriggered) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none flex">
      {/* Left Panel */}
      <motion.div
        animate={leftPanelControls}
        initial={{ x: '0%' }}
        className="w-1/2 h-full bg-[#020202] border-r border-pink-500/10 pointer-events-auto relative overflow-hidden flex items-center justify-end"
      >
        {/* Render half the content on left panel */}
        <div className="w-[100vw] h-full absolute right-0 flex items-center justify-center translate-x-1/2">
          {leftContent}
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        animate={rightPanelControls}
        initial={{ x: '0%' }}
        className="w-1/2 h-full bg-[#020202] border-l border-pink-500/10 pointer-events-auto relative overflow-hidden flex items-center justify-start"
      >
        {/* Render half the content on right panel */}
        <div className="w-[100vw] h-full absolute left-0 flex items-center justify-center -translate-x-1/2">
          {rightContent}
        </div>
      </motion.div>

      {/* Center Crack laser line */}
      <motion.div
        animate={crackControls}
        initial={{ height: '0%', opacity: 0, width: '2px', x: '-50%' }}
        className="absolute left-1/2 top-0 bg-pink-500 z-[10000] shadow-[0_0_20px_rgba(255,0,127,0.8)]"
      />
    </div>
  );
}
