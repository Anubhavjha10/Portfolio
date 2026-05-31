import React from 'react';

const experiences = [
  {
    title: "Toppers Buzz Premium",
    company: "Freelance Web Developer",
    period: "Dec 2023 - Aug 2024",
    description: "Designed and developed the official coaching website with a modern responsive UI. Led the technical team and managed website planning, development, and deployment. Coordinated with management to implement course details, test series, and enquiry features.",
    icon: "fa-code"
  },
  {
    title: "GirlScript Summer of Code",
    company: " Campus Ambassador",
    period: "July 2025 - Nov 2025",
    description: "Represented GSSoC on campus by promoting the program and increasing student participation. Coordinated with peers and the core team for outreach, events, and community engagement.",
    icon: "fa-code"
  },
  {
    title: "Vabit Digify Media Pvt Ltd.",
    company: "Software Developer",
    period: "Aprill 2025 - Present",
    description: "Developed and improved user-friendly web interfaces for live projects, ensuring responsive and clean design Integrated APIs and handled basic backend tasks to support seamless application functionality Collaborated with team members to debug issues and enhance overall performance of applications",
    icon: "fa-terminal"
  }
];

function Experience() {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl mb-8 animate-on-scroll">
      <h3 className="text-4xl font-bold text-center text-white mb-10">My Experience</h3>
      <div className="relative border-l-2 border-[#ff007f] max-w-4xl mx-auto pl-6 md:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative bg-[#0b0b0b] border border-white/10 p-6 rounded-lg shadow-xl card-hover-effect" style={{ willChange: 'transform' }}>
            {/* Timeline Dot with Icon */}
            <div className="absolute -left-[43px] md:-left-[59px] top-6 w-10 h-10 rounded-full bg-[#020202] border-2 border-[#ff007f] flex items-center justify-center text-pink-500 shadow-md">
              <i className={`fas ${exp.icon} text-sm`}></i>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h4 className="text-2xl font-semibold text-white">{exp.title}</h4>
                <p className="text-pink-500 text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded text-pink-600 bg-pink-950/40 border border-pink-500/20 mt-2 md:mt-0 max-w-max">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Experience);
