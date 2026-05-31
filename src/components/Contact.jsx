import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    visible: false,
    text: '',
    type: '' // 'success' or 'error'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.submitting) return;

    setStatus({
      submitting: true,
      visible: false,
      text: '',
      type: ''
    });

    const formEndpoint = "https://formspree.io/f/xdkdenqz";
    
    // Construct Formspree-compatible payload
    const payload = {
      name: formData.name,
      _replyto: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          submitting: true, // Keep submitting state for the button transition delay
          visible: true,
          text: 'Message sent successfully! I will get back to you soon.',
          type: 'success'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        const data = await response.json();
        const errMsg = data.errors 
          ? data.errors.map(error => error.message).join(", ") 
          : 'Oops! There was a problem sending your message.';
        setStatus({
          submitting: true,
          visible: true,
          text: errMsg,
          type: 'error'
        });
      }
    } catch (error) {
      setStatus({
        submitting: true,
        visible: true,
        text: 'Oops! There was a network problem sending your message.',
        type: 'error'
      });
    }

    // Revert button status after 1.5 seconds (shimmer animation time)
    setTimeout(() => {
      setStatus(prev => ({
        ...prev,
        submitting: false
      }));

      // Hide message alert after 3 seconds
      setTimeout(() => {
        setStatus(prev => ({
          ...prev,
          visible: false
        }));
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#020202] border border-pink-500/10 rounded-xl shadow-lg mb-8 animate-on-scroll">
      <h3 className="text-4xl font-bold text-center text-white mb-10">Get In Touch</h3>
      <p className="text-center text-gray-400 mb-12">Contact Me Now</p>
      
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-gray-400 text-sm font-bold mb-2">Your Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 bg-[#0b0b0b] border-white/10"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 bg-[#0b0b0b] border-white/10"
            placeholder="your@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-gray-400 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 bg-[#0b0b0b] border-white/10"
            placeholder="Your Phone Number (Optional)"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="6"
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 bg-[#0b0b0b] border-white/10"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={status.submitting}
            className={`animated-btn ${status.submitting ? 'shimmer-btn processing-btn' : ''}`}
          >
            <span>{status.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
          </button>
        </div>
        {/* Form submission message display */}
        <div
          id="form-message"
          className={`${status.type} ${status.visible ? 'show' : 'hidden'}`}
          style={{ opacity: status.visible ? 1 : 0, visibility: status.visible ? 'visible' : 'hidden' }}
        >
          {status.text}
        </div>
      </form>
    </section>
  );
}

export default React.memo(Contact);
