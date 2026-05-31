import React from 'react';

const servicesList = [
  {
    title: "Python Development",
    description: "Custom Python solutions, backend script engineering, data crawling, and logic implementations.",
    icon: "fab fa-python"
  },
  {
    title: "Web Development",
    description: "Designing responsive, robust, and engaging websites and applications tailored to user experience.",
    icon: "fas fa-code"
  },
  {
    title: "Automation Solutions",
    description: "Streamlining operations and workflows using custom automation utilities and bots.",
    icon: "fa-solid fa-scroll"
  },
  {
    title: "Graphic Designing",
    description: "Designing visually striking assets, marketing layouts, and user interface concepts.",
    icon: "fas fa-palette"
  }
];

function Services() {
  return (
    <section id="service" className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl mb-8 animate-on-scroll">
      <h3 className="text-4xl font-bold text-center text-white mb-10">My Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-[#0b0b0b] border border-white/10 rounded-lg shadow-xl p-6 md:p-8 card-hover-effect flex flex-col items-center justify-start" style={{ willChange: 'transform' }}>
            <div className="text-pink-500 text-4xl md:text-5xl mb-3 md:mb-4 text-center">
              <i className={service.icon}></i>
            </div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-white text-center">{service.title}</h4>
            <p className="text-gray-400 text-sm md:text-base text-center leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Services);
