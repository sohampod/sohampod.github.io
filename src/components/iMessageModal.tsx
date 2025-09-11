import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface IMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] w-[400px] max-w-[90vw] h-[600px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">SP</span>
            </div>
            <div>
              <h3 className="font-medium">Soham</h3>
              <p className="text-xs text-white/80">Developer</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages Container */}
        <div className="h-[calc(100%-80px)] overflow-y-auto p-4 space-y-4 bg-gray-50">
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
  );
};