import React from 'react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Anubhavjha10",
    icon: "fab fa-github"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ig.anubhavjha/profilecard/?igsh=ZXR4YnA4NThnZGsx",
    icon: "fab fa-instagram"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/16izCyxeBY/",
    icon: "fab fa-facebook-f"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kumaranubhav10",
    icon: "fab fa-linkedin-in"
  }
];

function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8 text-center text-gray-500 text-sm bg-[#020202] border border-pink-500/10 rounded-xl shadow-lg mt-12 animate-on-scroll">
      <p className="font-mono text-xs text-gray-400">&copy; 2025 Kumar Anubhav. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        {socialLinks.map((social, index) => (
          <div key={index} className="footer-social-icon-container">
            <a href={social.url} target="_blank" rel="noopener noreferrer" className="footer-social-icon bg-[#0b0b0b] border border-white/5 hover:border-pink-500/30">
              <i className={social.icon}></i>
            </a>
            <span className="footer-social-text font-mono text-[9px]">{social.name}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default React.memo(Footer);
