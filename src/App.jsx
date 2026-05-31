import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import useScrollAnimation from './hooks/useScrollAnimation';

// Components
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import ScrollToTop from './components/ScrollToTop';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import IntroOverlay from './components/IntroOverlay';

// Pages
import Home from './pages/Home';

export default function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [showHireMeMessage, setShowHireMeMessage] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(() => {
    const lastSeen = sessionStorage.getItem('portfolio-intro-seen-time');
    if (!lastSeen) return true;
    return Date.now() - Number(lastSeen) >= 15000;
  });

  // Lock scrolling during intro sequence
  useEffect(() => {
    if (isIntroActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isIntroActive]);

  // Initialize Intersection Observer scroll animations
  useScrollAnimation();

  const handleHireMe = () => {
    window.location.href = "mailto:anubhavjha424@gmail.com?subject=Hiring%20Inquiry";
    setShowHireMeMessage(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("anubhavjha424@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <>
      <AnimatePresence>
        {isIntroActive && (
          <IntroOverlay onFinish={() => setIsIntroActive(false)} />
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex flex-col items-center p-4 md:p-8 bg-[#020202]">
      {/* Navbar Section */}
      <Navbar
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
        onHireMe={handleHireMe}
      />

      {/* Mobile Drawer Overlay */}
      <MobileMenu
        isOpen={isSideNavOpen}
        setIsOpen={setIsSideNavOpen}
        onHireMe={handleHireMe}
      />

      {/* Hire Me Email Fallback Message Alert */}
      {showHireMeMessage && (
        <div id="hire-me-message" className="w-full max-w-xl mx-auto text-sm text-center mt-2 p-3 rounded-lg bg-gray-700 text-gray-200 shadow-md transition-all duration-300 relative">
          If your email client didn't open, please email me at{" "}
          <span
            id="hire-me-email-display"
            className="text-pink-400 font-bold cursor-pointer hover:underline"
            onClick={copyEmailToClipboard}
          >
            anubhavjha424@gmail.com
          </span>
          <button
            className="ml-2 text-pink-400 hover:text-white text-xs font-semibold focus:outline-none"
            onClick={copyEmailToClipboard}
          >
            [{emailCopied ? "Copied!" : "Copy"}]
          </button>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-white focus:outline-none text-xs"
            onClick={() => setShowHireMeMessage(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Page Content */}
      <Home
        setActiveProject={setActiveProject}
        setActiveCertificate={setActiveCertificate}
      />

      {/* Floating Scroll to Top Icon */}
      <ScrollToTop />

      {/* Dynamic Modals */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
    </>
  );
}
