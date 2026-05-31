import React from 'react';
import { motion } from 'framer-motion';

// Import certificates images
import pythonCertImg from '../../certificates/python-certificate.jpg';
import webdevCertImg from '../../certificates/webdevelopment-certificate.jpg';
import alisonCertImg from '../../certificates/alison-certificate.jpg';
import awsCertImg from '../../certificates/aws-certificate.png';
import cCertImg from '../../certificates/CodeTantra C Certificate.png';

const certificationsList = [
  {
    title: "Python for Beginners",
    org: "Sololearn",
    id: "CT-M1XZMMMN",
    description: "Completed Sololearn’s Python for Beginners course covering fundamentals and syntax.",
    link: "https://www.sololearn.com/certificates/CT-M1XZMMMN",
    image: pythonCertImg,
    year: "2023"
  },
  {
    title: "Web Development Training",
    org: "Kreativan technologies & St. Andrew's College",
    id: "Visit St. Andrew's College for more details",
    description: "Successfully completed an intensive bootcamp focusing on modern front-end technologies including HTML5, CSS3, JavaScript, React, and responsive design.",
    link: "https://drive.google.com/file/d/1AxSAJFvAV1aNMWY-e5WMyFMYSU4xKghD/view?usp=drive_link",
    image: webdevCertImg,
    year: "2022"
  },
  {
    title: "Cyber Security: understand Threats and Prevent Attacks",
    org: "Alison",
    id: "5177-41709233",
    description: "Learned to identify cyber threats and apply basic defense techniques.",
    link: "https://drive.google.com/file/d/1a4uwOYvSJyao1m89vXW3tOUEV2aNJFTB/view?usp=drive_link",
    image: alisonCertImg,
    year: "2023"
  },
  {
    title: "Solution Architecture on AWS",
    org: "Forage",
    id: "pCQGL7H22Xnxa5qCj",
    description: "Learned to design scalable, secure, and resilient AWS cloud solutions.",
    link: "https://drive.google.com/file/d/1uF3z4X0zckGkFjgtMNc_EA0KdBVsuZGH/view?usp=drive_link",
    image: awsCertImg,
    year: "2024"
  },
  {
    title: "C Certificate",
    org: "CodeTantra",
    id: "CT1835-u9ExNlu-ceY",
    description: "Successfully completed an C language course covering basics to advanced topics with practical examples.",
    link: "https://drive.google.com/file/d/1fGlIcf4tFaX0Svo3znQ-954SiPYec_1l/view?usp=drive_link",
    image: cCertImg,
    year: "2023"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function Certifications({ onViewDetails }) {
  return (
    <section id="certifications" className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl shadow-2xl mb-8 relative overflow-hidden select-none animate-on-scroll">
      
      {/* Self-contained sweep shine style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) rotate(25deg); }
          100% { transform: translateX(250%) rotate(25deg); }
        }
        .shine-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-150%) rotate(25deg);
        }
        .group:hover .shine-sweep {
          animation: shine-sweep 1.2s ease-out forwards;
        }
      `}} />

      {/* Nebula glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-500/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 z-10 relative">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
          <i className="fas fa-award text-pink-500 mr-3 animate-pulse"></i>ACHIEVEMENT VAULT
        </h3>
        <p className="text-gray-400 text-xs md:text-sm font-mono uppercase tracking-widest max-w-md mx-auto">
          Verified certifications and professional learning milestones.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4" />
      </div>

      {/* Grid container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {certificationsList.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() => onViewDetails(cert)}
            className="bg-[#0b0b0b]/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative flex flex-col p-6 cursor-pointer group hover:border-pink-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all duration-500 ease-out"
            style={{ willChange: 'transform' }}
          >
            {/* Glossy sweep shine effect element */}
            <div className="shine-sweep pointer-events-none z-20" />

            {/* Glowing technology corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500" />

            {/* Certificate thumbnail container */}
            <div className="overflow-hidden rounded-lg relative w-full h-44 mb-5 bg-[#151515] border border-white/5 group-hover:border-pink-500/20 transition-colors duration-500">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
                width="400"
                height="176"
              />
              <div className="absolute top-2 right-2 bg-green-500/90 text-white text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded shadow-md flex items-center gap-1.5 backdrop-blur-sm z-10 border border-green-400/20">
                <i className="fas fa-shield-alt text-[8px]" />
                VERIFIED
              </div>
            </div>

            {/* Content text */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold font-mono text-white mb-2 tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Card metadata footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                <div className="text-left">
                  <span className="text-gray-500 block uppercase text-[8px] tracking-wider mb-0.5">ISSUED BY</span>
                  <span className="text-gray-300 font-bold">{cert.org}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 block uppercase text-[8px] tracking-wider mb-0.5">YEAR</span>
                  <span className="text-pink-500 font-bold">{cert.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default React.memo(Certifications);
