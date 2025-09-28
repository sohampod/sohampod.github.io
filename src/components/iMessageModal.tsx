import React, { useState } from 'react';
// Note: Adding DialogOverlay import back for safety, as it's needed for the backdrop.
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'; 
import { Plus, X } from 'lucide-react';
import { ModalTopBar } from '@/components/ModalTopBar'; // Add this import

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
    question: 'What technologies do you work with?',
    answer: 'I specialize in React, TypeScript, Node.js, and modern web technologies. I also have experience with cloud platforms and databases.'
  },
  {
    id: '2',
    question: 'Can you tell me about your experience?',
    answer: 'I have over 5 years of experience in full-stack development, working on various projects from e-commerce platforms to SaaS applications.'
  },
  {
    id: '3',
    question: 'What is your preferred development approach?',
    answer: 'I follow agile methodologies and believe in clean, maintainable code. I prioritize user experience and performance in all my projects.'
  },
  {
    id: '4',
    question: 'Are you available for new projects?',
    answer: 'Yes, I am currently available for new opportunities. Feel free to reach out to discuss your project requirements.'
  },
  {
    id: '5',
    question: 'How do you handle project deadlines?',
    answer: 'I believe in setting realistic timelines and maintaining clear communication throughout the project. I break down tasks into manageable chunks and provide regular updates.'
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
        {/* Added the DialogOverlay that was implicitly missing but likely needed */}
        <DialogOverlay className="fixed inset-0 backdrop-blur-overlay" /> 
      <DialogContent className="max-w-xl w-[95vw] h-[90vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-white">
          {/* REPLACED: Original top bar with ModalTopBar component */}
          <ModalTopBar title="iMessage" onClose={onClose} />
          
          {/* Messages Container - EXACTLY THE SAME AS BEFORE */}
          <div className="h-full overflow-y-auto p-4 space-y-4 bg-gray-50">
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
      </DialogContent>
    </Dialog>
  );
};