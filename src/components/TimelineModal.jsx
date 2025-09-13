import React from 'react';

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
    },
    {
      date: 'Q1 2025',
      title: 'Feature Expansion',
      description: 'Began development on new features and modules to expand the project\'s capabilities and user base.'
    },
    {
      date: 'Q2 2025',
      title: 'Performance Optimization',
      description: 'Conducted a comprehensive review of the codebase, resulting in significant improvements to speed and efficiency.'
    },
    {
      date: 'Q3 2025',
      title: 'Mobile App Launch',
      description: 'Released the official mobile application, bringing the project to iOS and Android platforms.'
    },
    {
      date: 'Q4 2025',
      title: 'Community Building',
      description: 'Focused on creating a strong user community through forums, events, and a dedicated support team.'
    }
];

export const TimelineModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl" onClick={onClose}>
      <div
        className="w-full max-w-2xl rounded-2xl border border-[rgba(255,255,255,0.2)] bg-white/10 shadow-2xl backdrop-blur-3xl transition-transform duration-300 transform scale-100 opacity-100 overflow-hidden flex flex-col h-[70vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* macOS-style Navbar */}
        <div className="flex-shrink-0 flex items-center justify-between p-2 border-b border-b-gray-400">
          <div className="flex gap-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"></button>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"></div>
          </div>
          <h3 className="text-sm font-semibold text-white/70">Timeline</h3>
          <div className="w-12"></div> {/* Placeholder to center the title */}
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar-light">
          <div className="mt-2 space-y-8 text-white">
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
    </div>
  );
};
