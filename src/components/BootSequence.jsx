import React, { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }) {
  const bootLines = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Loading Skills...",
    "Connecting Modules...",
    "System Ready ✓"
  ];

  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= bootLines.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const currentLine = bootLines[currentLineIndex];
    if (charIndex < currentLine.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(prev => prev + currentLine[charIndex]);
        setCharIndex(prev => prev + 1);
      }, Math.random() * 30 + 15); // Realistic variable typing speed
      return () => clearTimeout(typingTimer);
    } else {
      const lineTimer = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentLine]);
        setTypedText('');
        setCharIndex(0);
        setCurrentLineIndex(prev => prev + 1);
      }, 400); // Brief pause before typing the next line
      return () => clearTimeout(lineTimer);
    }
  }, [charIndex, currentLineIndex, bootLines, onComplete]);

  return (
    <div className="font-mono text-xs md:text-sm text-pink-500 max-w-sm md:max-w-md w-full p-4 md:p-6 bg-[#080808]/90 rounded-lg border border-pink-500/20 shadow-[0_0_30px_rgba(255,0,127,0.15)] backdrop-blur-md">
      <div className="flex items-center space-x-2 border-b border-pink-500/20 pb-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-pink-600/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-pink-500/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-pink-500/10" />
        <span className="text-[10px] text-pink-500/50 font-bold tracking-wider uppercase ml-2">Core Boot Sequence</span>
      </div>
      <div className="space-y-2 min-h-[140px] flex flex-col justify-start">
        {visibleLines.map((line, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-pink-500/40 mr-2">&gt;</span>
            <span className={line.includes("✓") ? "text-green-400 font-bold glow-green" : "text-pink-400"}>
              {line}
            </span>
          </div>
        ))}
        {currentLineIndex < bootLines.length && (
          <div className="flex items-center">
            <span className="text-pink-500/40 mr-2">&gt;</span>
            <span className="text-pink-400">{typedText}</span>
            <span className="animate-blink font-bold text-pink-500 ml-0.5">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
