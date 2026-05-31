import React, { useState } from 'react';
import profileImg from '../../Anubhav1.jpg';

function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1_c-l2dH_ARCoExQ0Th6n7wGKpCFf8C4h/view?usp=sharing";

  const handleDownload = (e) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);
    setShowSuccess(false);

    // Trigger download using an iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = resumeLink;
    document.body.appendChild(iframe);

    // Remove the iframe after 5 seconds
    const removeTimer = setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 5000);

    // Stop animation states and show success text after 1.5 seconds (shimmer duration)
    setTimeout(() => {
      setIsDownloading(false);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="about" className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl mb-8 animate-on-scroll">
      <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        {/* Profile Image Wrapper for About Section */}
        <div className="relative rounded-xl overflow-hidden about-image-frame w-80 h-80 md:w-96 md:h-96">
          <img
            src={profileImg}
            alt="Kumar Anubhav"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
            width="384"
            height="384"
          />
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-4xl font-bold text-white mb-6">Who Am I?</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Hello! I'm Kumar Anubhav, a passionate Web Developer from India. I love bringing ideas to life through elegant code and captivating design. My journey in the world of design has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver high-quality solutions. I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I am also a Cyber Security Enthusiast from India, with a strong focus in the Ethical Hacking Field. I love to get new experiences and always learn from my surroundings.
        </p>
        <button
          onClick={handleDownload}
          className={`animated-btn ${isDownloading ? 'shimmer-btn processing-btn' : ''}`}
          disabled={isDownloading}
        >
          <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
        </button>
        {showSuccess && (
          <div className="text-sm text-green-500 mt-2 font-semibold show">
            Successfully downloaded!
          </div>
        )}
      </div>
    </section>
  );
}

export default React.memo(About);
