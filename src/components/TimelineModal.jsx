import React from 'react';

const TimelineModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Sample data for the timeline
  const milestones = [
    {
      date: 'Q1 2024',
      title: 'Project Kick-off',
      description: 'Defined project scope, goals, and core functionalities. Assembled the development team and established the initial roadmap.'
    },
    {
      date: 'Q2 2024',
      title: 'Prototype Development',
      description: 'Completed the first functional prototype. Focused on core user flows and tested initial design concepts with user groups.'
    },
    {
      date: 'Q3 2024',
      title: 'Beta Launch',
      description: 'Launched the private beta to a select group of users. Collected feedback and began iterating on key features.'
    },
    {
      date: 'Q4 2024',
      title: 'Full Public Release',
      description: 'After extensive testing and refinements, the project was officially launched to the public. Focused on performance and scalability.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl" onClick={onClose}>
      <div 
        className="w-full max-w-2xl rounded-2xl border border-[rgba(255,255,255,0.2)] bg-white/10 p-6 shadow-2xl backdrop-blur-3xl transition-transform duration-300 transform scale-100 opacity-100" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Project Timeline</h2>
          <button onClick={onClose} className="p-1 rounded-full text-white hover:bg-white/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Timeline Content */}
        <div className="mt-6 space-y-8 text-white">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                {index < milestones.length - 1 && (
                  <div className="h-full w-0.5 mt-2 bg-blue-500/50"></div>
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-light uppercase text-gray-300">{milestone.date}</p>
                <h3 className="text-lg font-bold">{milestone.title}</h3>
                <p className="mt-1 text-sm text-gray-200">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TimelineModal;
