import React, { useState } from 'react';
// Note: Adding DialogOverlay import back for safety, as it's needed for the backdrop.
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'; 
import { Plus, X } from 'lucide-react';
import { ModalTopBar } from '@/components/ModalTopBar';

interface IMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: string;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: '1',
    question: 'And tell me, in a low whisper: What is the philosophical zip code of your design process?',
    answer: 'Oh, I’m the one perpetually searching for the "Why?" If a thing just is, without a resonant purpose, I tend to treat it like mere visual noise... I’d much rather spend my energy engineering little pockets of indispensable, necessary soul into the world. If it’s not going to vibrate with purpose, I simply don’t open the toolkit.'
  },
  {
    id: '2',
    question: 'A rather large question, I admit, but... what are the highlights of your personal data log? Whats the narrative thread youve been optimizing?',
    answer: 'My existence, so far, has been less a grand career arc and more an endless sequence of self-assigned tutorials. I specialize, you see, in the deliberate acquisition of things I dont yet know —the genuine joy is in watching that initial ignorance compile successfully into a functional, meaningful skill. If the work isnt a continuous lesson, I consider it a day spent off-motto.'
  },
  {
    id: '3',
    question: 'Walk me through your typical workflow, but use an analogy that involves an ancient map and a very quiet orchestra.',
    answer: 'It’s less a workflow and more a slow, geological excavation. I start by reducing everything to grayscale and silence until the essential signal shouts loud enough to be heard. My work is simply the gentle resistance against all the digital clutter trying to bury that original, clear intention.'
  },
  {
    id: '4',
    question: 'How do you navigate the inevitable collision when your indispensable soul meets a stakeholders budget spreadsheet?',
    answer: 'I treat friction as a necessary calibration. If the initial pushback is purely aesthetic, I ignore it. But if the resistance suggests a genuine structural flaw in the purpose itself, I pivot instantly. A truly good critique, you see, is merely the market whispering a required bug fix to the meaning.'
  },
  {
    id: '5',
    question: 'And finally, if you had to assign a job title to your future self, what would be the most appropriately esoteric one?',
    answer: 'Oh, I aspire to be the Chief Existential Curator. My only Key Performance Indicator would be ensuring that every project, every pixel, and every minute spent on the board justifies its own existence. The goal isnt scale; the goal is undeniable, quiet necessity.'
  }
];

export const IMessageModal: React.FC<IMessageModalProps> = ({ isOpen, onClose }) => {
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(new Set());

  const handleQuestionClick = (questionId: string) => {
    setExpandedAnswers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 backdrop-blur-overlay" /> 
      <DialogContent className="max-w-xl w-[95vw] h-[90vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-white">
          <ModalTopBar title="iMessage" onClose={onClose} />
          
          {/* SIMPLIFIED SCROLL CONTAINER - This will definitely work */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="p-4 space-y-4">
              {questions.map((item) => (
                <div key={item.id} className="space-y-3">
                  {/* Question from sender */}
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="max-w-[280px]">
                      <div
                        className="bg-gray-200 rounded-[18px] rounded-bl-[4px] px-4 py-2 cursor-pointer hover:bg-gray-300 transition-colors group"
                        onClick={() => handleQuestionClick(item.id)}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-800">{item.question}</p>
                          <Plus
                            size={12}
                            className={`ml-2 text-gray-500 transition-transform ${
                              expandedAnswers.has(item.id) ? 'rotate-45' : ''
                            }`}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-4">Just now</p>
                    </div>
                  </div>
                  {/* Answer from user (when expanded) */}
                  {expandedAnswers.has(item.id) && (
                    <div className="flex justify-end">
                      <div className="max-w-[280px]">
                        <div className="bg-blue-500 text-white rounded-[18px] rounded-br-[4px] px-4 py-2">
                          <p className="text-sm">{item.answer}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 mr-4 text-right">Just now</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};