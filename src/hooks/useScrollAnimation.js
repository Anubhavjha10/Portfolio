import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
}
