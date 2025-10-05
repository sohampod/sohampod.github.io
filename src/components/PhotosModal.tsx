import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { ModalTopBar } from '@/components/ModalTopBar';
import { ExternalLink } from 'lucide-react';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose }) => {
  const platforms = [
    {
      name: 'Dribbble',
      description: 'UI/UX Design Shots & Concepts',
      url: 'https://dribbble.com/sohampod',
      color: 'from-pink-500 to-red-500',
      icon: '🏀',
      stats: 'Design shots, UI concepts'
    },
    {
      name: 'Behance',
      description: 'Creative Projects & Case Studies',
      url: 'https://www.behance.net/sohampoddar',
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
      stats: 'Project case studies'
    }
  ];

  const handlePlatformClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-lg" />
      
      <DialogContent 
        className="
          max-w-4xl w-[95vw] h-[70vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          <ModalTopBar title="Design Portfolio" onClose={onClose} />

          {/* Platform Cards */}
          <div className="flex flex-1 min-h-0 p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group"
                  onClick={() => handlePlatformClick(platform.url)}
                >
                  <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{platform.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                            {platform.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{platform.description}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{platform.stats}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Click to visit</span>
                      <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                        External Link
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};