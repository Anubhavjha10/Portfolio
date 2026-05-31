import React from 'react';

// Import testimonial client avatars
import shivamAvatarImg from '../../testinomials/Shivam.png';
import ashishAvatarImg from '../../testinomials/Ashish.png';
import supriyaAvatarImg from '../../testinomials/Supriya .jpg'; // Note: Space in "Supriya .jpg" file name from original structure is preserved

const testimonialsList = [
  {
    name: "Shivam Rai",
    role: "Director, Toppers Buzz Premium",
    image: shivamAvatarImg,
    quote: "\"Anubhav's design work is exceptional and truly transformed our Coaching Center. Highly recommend!\""
  },
  {
    name: "Ashish",
    role: "Co-Founder, Vabit digify Media Pvt Ltd.",
    image: ashishAvatarImg,
    quote: "\"Professional, creative, and delivered beyond expectations. A pleasure to work with.\""
  },
  {
    name: "Supriya",
    role: "Owner, Cosmetic Shop",
    image: supriyaAvatarImg,
    quote: "\"The attention to detail and understanding of user needs was outstanding. Fantastic job!\""
  }
];

function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl shadow-lg mb-8 animate-on-scroll">
      <h3 className="text-4xl font-bold text-center text-white mb-10">Testimonials</h3>
      <p className="text-center text-gray-400 mb-12">What They Says</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsList.map((testimonial, index) => (
          <div key={index} className="bg-[#0b0b0b] border border-white/10 rounded-lg shadow-xl p-6 text-center card-hover-effect" style={{ willChange: 'transform' }}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-20 h-20 mx-auto mb-4 object-cover"
              loading="lazy"
              width="80"
              height="80"
            />
            <h5 className="text-xl font-semibold text-white mb-2">{testimonial.name}</h5>
            <p className="text-gray-400 text-sm mb-4">{testimonial.role}</p>
            <p className="text-gray-300 leading-relaxed">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Testimonials);
