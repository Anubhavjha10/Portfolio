import React from 'react';
import logoImg from '../../Anubhav1.jpg';

function Navbar({ isSideNavOpen, setIsSideNavOpen, onHireMe }) {
  return (
    <header className="w-full max-w-7xl mx-auto py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center bg-[#020202] border border-pink-500/10 rounded-xl mb-8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <img src={logoImg} alt="Kumar Anubhav Logo" className="w-10 h-10 rounded-full mr-2 object-cover" width="40" height="40" />
          <span className="text-2xl font-bold text-white">Kumar Anubhav</span>
        </div>
        {/* Animated Hamburger Menu Button for Mobile */}
        <button
          id="mobile-menu-button"
          className={`hamburger-menu md:hidden focus:outline-none ${isSideNavOpen ? 'open' : ''}`}
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav id="main-nav-desktop" className="hidden md:flex flex-row md:space-x-8 mt-4 md:mt-0 w-full md:w-auto items-center">
        <a href="#home" className="text-lg text-gray-400 hover:text-white transition-colors duration-300 py-2">Home</a>
        <a href="#about" className="text-lg text-gray-400 hover:text-white transition-colors duration-300 py-2">About</a>
        <a href="#contact" className="text-lg text-gray-400 hover:text-white transition-colors duration-300 py-2">Contact</a>

        {/* More Dropdown */}
        <div className="relative group">
          <button className="text-lg text-gray-400 hover:text-white transition-colors duration-300 py-2 px-3 focus:outline-none flex items-center">
            More <i className="fas fa-chevron-down text-xs ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          <div className="absolute hidden group-hover:block bg-[#0b0b0b] border border-white/10 text-white rounded-lg shadow-lg py-2 w-48 z-20 dropdown-menu">
            <a href="#service" className="block px-4 py-2 hover:bg-[#3a3a3a] transition-colors duration-200">Service</a>
            <a href="#portfolio" className="block px-4 py-2 hover:bg-[#3a3a3a] transition-colors duration-200">Portfolio</a>
            <a href="#certifications" className="block px-4 py-2 hover:bg-[#3a3a3a] transition-colors duration-200">Certifications</a>
            <a href="#skills" className="block px-4 py-2 hover:bg-[#3a3a3a] transition-colors duration-200">Skills</a>
          </div>
        </div>

        <button
          id="hireMeBtnDesktop"
          onClick={onHireMe}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
