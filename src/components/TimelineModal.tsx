import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const milestones = [
  {
    date: 'Till 2019',
    title: 'delusional phase',
    description:
      ' I graduated with a degree in Science with Maths, which felt like the right path at the time. My days were all about the game—football and basketball were my whole world, my biggest dreams.The universe had other plans, thanks to an injury. It put me on a detour, but it also gave me a chance to reset. Im now exploring where to aim all that passion, trying to figure out whats next for someone whos had to change the rules of the game.',
  },
  {
    date: '2019 to 2023',
    title: 'college years and a lot of work',
    description:
      'My next four years were spent trading the turf for the bustling energy of Chennai, India. College was less about lectures and more about a high-speed juggling act—balancing books and a job. It was exhausting, slightly chaotic, and it absolutely served as my real-world masterclass in figuring out what life is truly made of.',
  },
  {
    date: '2023 to 2025',
    title: 'black spot',
    description:
      'The two years that followed were a deeply personal, unscheduled sabbatical. Life decided to test my resilience with a lot of heavy lifting. It wasnt a time of grand travel or achievement, but it was invaluable for learning how to stand firm when everything else felt unstable.',
  },
  {
    date: '2025 September',
    title: 'dream come true',
    description:
      'That long-haul flight finally brought me to Germany, turning a dream from the ambitious folder into Current Reality. Now, with a deep breath and a new country under my feet, the only thing left to do is figure out what brilliant, chaotic thing comes next.',
  },
];

export const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] h-[80vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-[#ffffff]">
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
              <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
                Timeline
              </span>
            </div>
          </div>

          {/* Timeline Content - Using absolute positioning for guaranteed scroll */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 overflow-y-auto p-6">
              <div className="space-y-8 text-black w-full">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    {/* Timeline Dot + Line */}
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {index < milestones.length - 1 && (
                        <div className="h-full w-0.5 mt-2 bg-blue-500/50"></div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex flex-col">
                      <p className="text-sm font-light uppercase text-gray-500">
                        {milestone.date}
                      </p>
                      <h3 className="text-lg font-bold">{milestone.title}</h3>
                      <p className="mt-1 text-sm text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
