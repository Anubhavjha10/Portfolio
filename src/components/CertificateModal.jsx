import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CertificateModal({ certificate, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (certificate) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [certificate]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
        {/* Dark blur background backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Main Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0b0b0b] border border-pink-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_55px_rgba(255,0,127,0.25)] relative z-10 flex flex-col md:flex-row p-6 md:p-8 gap-8 select-none"
        >
          {/* Close button top-right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#151515] hover:bg-pink-600/20 text-gray-400 hover:text-pink-500 border border-white/10 hover:border-pink-500/30 flex items-center justify-center transition-all duration-300 z-50 focus:outline-none"
          >
            <i className="fas fa-times text-sm"></i>
          </button>

          {/* Left / Top Side: Large Certificate Image Preview */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group bg-[#151515]">
              {/* Subtle light reflect strip */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto max-h-[40vh] md:max-h-[55vh] object-contain group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right / Bottom Side: Certificate Information details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between pt-2">
            <div>
              {/* Verification Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-950/40 text-green-400 border border-green-500/30 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded flex items-center gap-1.5">
                  <i className="fas fa-shield-alt" />
                  VERIFIED ACHIEVEMENT
                </span>
                <span className="bg-pink-950/40 text-pink-400 border border-pink-500/30 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded">
                  YEAR {certificate.year}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                {certificate.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                {certificate.description}
              </p>

              {/* Metadata Fields */}
              <div className="space-y-3 border-t border-white/5 pt-5 mb-8 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-gray-500 uppercase text-[10px]">ISSUING ORGANIZATION:</span>
                  <span className="text-gray-200 font-bold">{certificate.org}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-gray-500 uppercase text-[10px]">VERIFICATION ID:</span>
                  <span className="text-pink-400 font-bold select-text">{certificate.id}</span>
                </div>
              </div>
            </div>

            {/* Actions button bar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-full shadow-[0_0_20px_rgba(255,0,127,0.25)] transition-all duration-300"
              >
                Verify Certificate
              </a>
              <a
                href={certificate.image}
                download={`${certificate.title.replace(/\s+/g, '_')}_Certificate`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-transparent hover:bg-white/5 border border-white/20 hover:border-pink-500/50 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-full transition-all duration-300"
              >
                Download Copy
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default React.memo(CertificateModal);
