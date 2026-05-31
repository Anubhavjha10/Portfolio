import React, { useEffect } from 'react';

function MobileMenu({ isOpen, setIsOpen, onHireMe }) {
  // Prevent body scroll when side nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="side-nav" className={`side-nav ${isOpen ? 'open' : ''}`}>
      <button
        id="close-side-nav"
        className="close-button focus:outline-none"
        onClick={() => setIsOpen(false)}
      >
        <i className="fas fa-times"></i>
      </button>
      <nav>
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
        <a href="#service" onClick={(e) => handleLinkClick(e, '#service')}>Service</a>
        <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a>
        <a href="#certifications" onClick={(e) => handleLinkClick(e, '#certifications')}>Certifications</a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
        <button
          onClick={() => {
            setIsOpen(false);
            onHireMe();
          }}
          className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
        >
          Hire Me
        </button>
      </nav>
    </div>
  );
}

export default React.memo(MobileMenu);
