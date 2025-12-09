import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { X, Minus, Plus, ChevronLeft, ChevronRight, Grid3X3, List, ExternalLink } from 'lucide-react';

interface ProjectLink {
  name: string;
  url: string;
  type: 'github' | 'live' | 'demo' | 'documentation' | 'figma' | 'video' | 'figma deck' | 'iterations';
  icon?: string;
}

interface FinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectLinks: ProjectLink[];
}

export const FinderModal: React.FC<FinderModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  projectLinks
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'github':
        return '🔗';
      case 'live':
        return '🌐';
      case 'demo':
        return '▶️';
      case 'documentation':
        return '📚';
      default:
        return '📄';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-lg" />
      
      <DialogContent 
        className="
          max-w-[600px] w-[95vw] sm:w-[90vw] h-[70vh] sm:h-[400px] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          
          /* New animation classes for the macOS effect */
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
        "
      >
        <div className="bg-[#f6f6f6] rounded-lg shadow-2xl w-full h-full flex flex-col overflow-hidden border border-gray-300">
          {/* Title Bar: Reduced height (h-8) and simplified content */}
          <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] border-b border-gray-300 flex items-center px-3 h-8">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 bg-[#ff5f57] rounded-full hover:bg-[#ff4136] transition-colors flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-[6px] h-[6px] text-[#bf4943] opacity-0 hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ff9500] transition-colors" />
              <button className="w-3 h-3 bg-[#28ca42] rounded-full hover:bg-[#00a82d] transition-colors" />
            </div>
            {/* Original title and navigation buttons moved/removed */}
            <div className='flex-grow text-center text-sm font-medium text-gray-700 pointer-events-none'>
              {projectTitle}
            </div>
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4 text-gray-500" />
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <Grid3X3 className="w-4 h-4 text-gray-500" />
              <List className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Toolbar (remains the same) */}
          <div className="bg-[#f6f6f6] border-b border-gray-200 px-4 py-2 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {projectLinks.length} {projectLinks.length === 1 ? 'item' : 'items'}
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-200 rounded">
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content Area (remains the same) */}
          <div className="flex-1 p-3 sm:p-4 bg-white overflow-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {projectLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.url)}
                  className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <div className="w-16 h-16 flex items-center justify-center text-3xl mb-2 bg-gray-100 rounded-lg group-hover:bg-blue-100">
                    {link.icon || getTypeIcon(link.type)}
                  </div>
                  <span className="text-xs text-gray-700 text-center leading-tight">
                    {link.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Status Bar (remains the same) */}
          <div className="bg-[#f6f6f6] border-t border-gray-200 px-4 py-1 text-xs text-gray-500">
            {projectLinks.length} {projectLinks.length === 1 ? 'item' : 'items'} • Available online
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
