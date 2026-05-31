import React, { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [project]);

  if (!project) return null;

  return (
    <div id="project-details-modal" className="modal-overlay open">
      <div className="modal-content">
        <button
          id="close-project-details-modal"
          className="close-button focus:outline-none"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <h3 id="modal-project-title" className="text-2xl font-bold mb-4 text-white">
          {project.title}
        </h3>
        <p id="modal-project-description" className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        <a
          id="modal-project-link"
          href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default React.memo(ProjectModal);
