import React from 'react';
import { X, Minus, Plus, ChevronLeft, ChevronRight, Grid3X3, List, ExternalLink } from 'lucide-react';

interface ProjectLink {
  name: string;
  url: string;
  type: 'github' | 'live' | 'demo' | 'documentation';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#f6f6f6] rounded-lg shadow-2xl w-[600px] h-[400px] flex flex-col overflow-hidden border border-gray-300">
        {/* Title Bar */}
        <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] border-b border-gray-300 flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 bg-[#ff5f57] rounded-full hover:bg-[#ff4136] transition-colors"
              aria-label="Close"
            />
            <button className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ff9500] transition-colors" />
            <button className="w-3 h-3 bg-[#28ca42] rounded-full hover:bg-[#00a82d] transition-colors" />
          </div>
          <div className="text-sm font-medium text-gray-700 absolute left-1/2 transform -translate-x-1/2">
            {projectTitle}
          </div>
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 text-gray-500" />
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <Grid3X3 className="w-4 h-4 text-gray-500" />
            <List className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Toolbar */}
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

        {/* Content Area */}
        <div className="flex-1 p-4 bg-white overflow-auto">
          <div className="grid grid-cols-4 gap-4">
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

        {/* Status Bar */}
        <div className="bg-[#f6f6f6] border-t border-gray-200 px-4 py-1 text-xs text-gray-500">
          {projectLinks.length} {projectLinks.length === 1 ? 'item' : 'items'} • Available online
        </div>
      </div>
    </div>
  );
};