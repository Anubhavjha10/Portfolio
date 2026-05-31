import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootSequence from './BootSequence';
import EnterButton from './EnterButton';
import ScreenSplitTransition from './ScreenSplitTransition';

export default function IntroOverlay({ onFinish }) {
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bootCompleted, setBootCompleted] = useState(false);
  const [isTransitionTriggered, setIsTransitionTriggered] = useState(false);
  const canvasRef = useRef(null);

  // Check Session Storage
  useEffect(() => {
    const lastSeen = sessionStorage.getItem('portfolio-intro-seen-time');
    const now = Date.now();
    if (lastSeen && now - Number(lastSeen) < 15000) {
      onFinish();
    } else {
      setIsVisible(true);
    }
    setHasCheckedSession(true);
  }, [onFinish]);

  // Particle Canvas animation
  useEffect(() => {
    if (!isVisible || bootCompleted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const isMobile = width < 768;
    const particleCount = isMobile ? Math.min(25, Math.floor((width * height) / 25000)) : Math.min(80, Math.floor((width * height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 0, 127, 0.02)';
      ctx.lineWidth = 1;
      const step = 45;

      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw futuristic grid
      drawGrid();

      // Render Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Primary particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 127, ${p.alpha})`;
        ctx.fill();

        // Optimized particle glow ring (faster than ctx.shadowBlur)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 127, ${p.alpha * 0.25})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible, bootCompleted]);

  const handleEnter = () => {
    setIsTransitionTriggered(true);
  };

  const handleTransitionComplete = () => {
    sessionStorage.setItem('portfolio-intro-seen-time', Date.now().toString());
    setIsVisible(false);
    onFinish();
  };

  if (!hasCheckedSession || !isVisible) return null;

  const renderWelcomeContent = () => (
    <div className="flex flex-col items-center justify-center text-center px-4 w-full select-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-4"
      >
        <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.4em] text-pink-500 uppercase bg-pink-950/20 px-3 py-1 rounded border border-pink-500/20 shadow-[0_0_15px_rgba(255,0,127,0.1)]">
          SECURE CONNECTION ESTABLISHED
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
        className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-[0.2em] mb-4 uppercase leading-tight"
      >
        WELCOME TO MY <br className="sm:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 drop-shadow-[0_0_15px_rgba(255,0,127,0.3)]">
          DIGITAL UNIVERSE
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="text-xs sm:text-sm md:text-lg font-mono text-gray-400 tracking-[0.18em] mb-12 uppercase"
      >
        Python Developer <span className="text-pink-500/50 px-1.5">|</span> Software Engineer
      </motion.p>
      
      {/* Interactive glowing Enter Button */}
      <EnterButton onClick={handleEnter} />
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!isTransitionTriggered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[9990] bg-[#020202] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient Background Glow grid/canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* Glowing Vignette Shadow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

            <div className="z-10 w-full flex flex-col items-center justify-center p-4">
              {!bootCompleted ? (
                <BootSequence onComplete={() => setBootCompleted(true)} />
              ) : (
                renderWelcomeContent()
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic split page overlay transition */}
      <ScreenSplitTransition
        isTriggered={isTransitionTriggered}
        onTransitionComplete={handleTransitionComplete}
        leftContent={renderWelcomeContent()}
        rightContent={renderWelcomeContent()}
      />
    </>
  );
}
