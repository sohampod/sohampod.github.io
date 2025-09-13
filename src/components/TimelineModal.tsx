import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose }) => {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* This Dialog.Portal is the key to fixing the rendering issue */}
      <Dialog.Portal>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl w-[95vw] h-auto p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
          <div className="flex flex-col h-full bg-[#f7f7f7]">
            {/* Top Bar */}
            <div className="flex items-center h-[44px] px-[20px] bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
              <div className="flex items-center gap-[8px]">
                <button
                  className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors flex items-center justify-center"
                  onClick={onClose}
                >
                  <X className="w-[6px] h-[6px] text-[#bf4943] opacity-0 hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
                <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">Project Timeline</span>
              </div>
            </div>
            {/* Main Content Area */}
            <div className="flex flex-1 min-h-0 p-6 overflow-y-auto">
              <div className="mt-6 space-y-8 text-black w-full">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {index < milestones.length - 1 && (
                        <div className="h-full w-0.5 mt-2 bg-blue-500/50"></div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-light uppercase text-gray-500">{milestone.date}</p>
                      <h3 className="text-lg font-bold">{milestone.title}</h3>
                      <p className="mt-1 text-sm text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog>
  );
};
